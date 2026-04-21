"use strict";
n.d(t, { A: () => f, w: () => _ }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(972347),
    a = n(205693),
    o = n(499979),
    l = n(687658),
    u = n(167127),
    c = n(499954);
function d(e) {
    let t = {};
    for (let n in e) {
        let r = e[n];
        if (r instanceof l.d) {
            let e = [75, 95, 99],
                i = r.getReport(e);
            (t[n + "_mean"] = Math.round(i.mean)),
                (t[n + "_p75"] = Math.round(i.percentiles[75])),
                (t[n + "_p95"] = Math.round(i.percentiles[95])),
                (t[n + "_p99"] = Math.round(i.percentiles[99])),
                (t[n + "_max"] = Math.round(i.max));
        } else
            (t[n + "_mean"] = null != r ? r.mean : 0),
                (t[n + "_p75"] = null != r ? r.p75 : 0),
                (t[n + "_p95"] = null != r ? r.p95 : 0),
                (t[n + "_p99"] = null != r ? r.p99 : 0),
                (t[n + "_max"] = null != r ? r.max : 0);
    }
    return t;
}
var _ = (function (e) {
    return (e.InputDeviceSampleRateChanged = "input-device-sample-rate-changed"), e;
})({});
class f extends s.A {
    connection;
    inboundStats;
    outboundStats;
    networkQuality;
    systemResources;
    duration;
    decryptionFailures;
    routingFailures;
    periodicInboundStats;
    inputDeviceStats;
    outputDeviceStats;
    constructor(e) {
        super(),
            (this.connection = e),
            (this.networkQuality = new u.A()),
            (this.systemResources = new c.A()),
            (this.inboundStats = {}),
            (this.outboundStats = {
                packetsSent: 0,
                bytesSent: 0,
                packetsLost: 0,
                passthroughCount: 0,
                encryptSuccessCount: 0,
                encryptFailureCount: 0,
                encryptDuration: 0,
                encryptAttempts: 0,
                encryptMaxAttempts: 0,
                encryptMissingKeyCount: 0,
                bytesAvailable: 0,
                bytesTarget: 0,
                previousTimestampMs: 0,
                aggregationDurationMs: 0,
                speakingAudioLevel: new l.d(),
            }),
            (this.duration = { listening: 0, speaking: 0, participation: 0, connected: 0 }),
            (this.periodicInboundStats = {}),
            (this.inputDeviceStats = {}),
            (this.outputDeviceStats = {});
    }
    start() {
        this.connection.on(a.yq.Stats, this.sampleStats);
    }
    stop() {
        this.connection.off(a.yq.Stats, this.sampleStats);
    }
    getMosStats() {
        let e = i().reduce(
            this.inboundStats,
            (e, t) => {
                (e.mosSum += t.mosSum), (e.mosCount += t.mosCount);
                for (var n = 0; n < 5; n++) e.mosBuckets[n] += t.mosBuckets[n];
                return e;
            },
            { mosSum: 0, mosCount: 0, mosBuckets: [0, 0, 0, 0, 0] },
        );
        return {
            mos_mean: e.mosCount > 0 ? e.mosSum / e.mosCount : 0,
            mos_1: e.mosBuckets[1],
            mos_2: e.mosBuckets[2],
            mos_3: e.mosBuckets[3],
            mos_4: e.mosBuckets[4],
        };
    }
    getPacketStats() {
        let e = i().reduce(
            this.inboundStats,
            (e, t) => (
                (e.packetsReceived += t.packetsReceived),
                (e.packetsReceivedLost += t.packetsLost),
                (e.nackCount += t.nackCount),
                (e.fecPacketsReceived += t.fecPacketsReceived),
                (e.fecPacketsDiscarded += t.fecPacketsDiscarded),
                e
            ),
            { packetsReceived: 0, packetsReceivedLost: 0, nackCount: 0, fecPacketsReceived: 0, fecPacketsDiscarded: 0 },
        );
        return {
            packets_sent: this.outboundStats.packetsSent,
            packets_sent_lost: this.outboundStats.packetsLost,
            packets_received: e.packetsReceived,
            packets_received_lost: e.packetsReceivedLost,
            num_nacks_sent: e.nackCount,
            fec_packets_received: e.fecPacketsReceived,
            fec_packets_discarded: e.fecPacketsDiscarded,
        };
    }
    getBytesStats() {
        let e = i().reduce(this.inboundStats, (e, t) => e + t.bytesReceived, 0),
            t = this.outboundStats.aggregationDurationMs / 1e3;
        return {
            bytes_sent: this.outboundStats.bytesSent,
            bytes_received: e,
            outbound_bandwidth_estimate: t > 0 ? Math.round((8 * this.outboundStats.bytesAvailable) / t) : 0,
            audio_target_bitrate: t > 0 ? Math.round((8 * this.outboundStats.bytesTarget) / t) : 0,
        };
    }
    getNetworkStats() {
        return this.networkQuality.getStats();
    }
    getSystemResourceStats() {
        return this.systemResources.getStats();
    }
    getBufferStats() {
        let e = 75,
            t = i().reduce(
                this.inboundStats,
                (t, n) => {
                    let r = null;
                    n.bufferStats.audioJitterBufferHistogram.getSamples() > 0
                        ? (r = n.bufferStats.audioJitterBufferHistogram.getPercentile(e))
                        : null != n.bufferStats.audioJitterBuffer && (r = n.bufferStats.audioJitterBuffer.p75);
                    let i = null;
                    return (
                        null == t
                            ? (i = null)
                            : t.audioJitterBufferHistogram.getSamples() > 0
                              ? (i = t.audioJitterBufferHistogram.getPercentile(e))
                              : null != t.audioJitterBuffer && (i = t.audioJitterBuffer.p75),
                        (null == t || null == i || (null != r && r > i)) && (t = n.bufferStats),
                        t
                    );
                },
                null,
            ),
            n = null;
        null != t &&
            (t.audioJitterBufferHistogram.getSamples() > 0
                ? (n = t.audioJitterBufferHistogram)
                : null != t.audioJitterBuffer && (n = t.audioJitterBuffer));
        let r = null;
        null != t &&
            (t.audioJitterTargetHistogram.getSamples() > 0
                ? (r = t.audioJitterTargetHistogram)
                : null != t.audioJitterTarget && (r = t.audioJitterTarget));
        let s = null;
        return (
            null != t &&
                (t.audioJitterDelayHistogram.getSamples() > 0
                    ? (s = t.audioJitterDelayHistogram)
                    : null != t.audioJitterDelay && (s = t.audioJitterDelay)),
            {
                ...d({
                    audio_jitter_buffer: n,
                    audio_jitter_target: r,
                    audio_jitter_delay: s,
                    relative_reception_delay: t?.relativeReceptionDelay ?? null,
                    relative_playout_delay: t?.relativePlayoutDelay ?? null,
                }),
            }
        );
    }
    getFrameOpStats() {
        let e = i().reduce(
            this.inboundStats,
            (e, t) => (
                null != t.frameOpStats.silent && (e.silent += t.frameOpStats.silent),
                null != t.frameOpStats.normal && (e.normal += t.frameOpStats.normal),
                null != t.frameOpStats.merged && (e.merged += t.frameOpStats.merged),
                null != t.frameOpStats.expanded && (e.expanded += t.frameOpStats.expanded),
                null != t.frameOpStats.accelerated && (e.accelerated += t.frameOpStats.accelerated),
                null != t.frameOpStats.preemptiveExpanded &&
                    (e.preemptiveExpanded += t.frameOpStats.preemptiveExpanded),
                null != t.frameOpStats.cng && (e.cng += t.frameOpStats.cng),
                e
            ),
            { silent: 0, normal: 0, merged: 0, expanded: 0, accelerated: 0, preemptiveExpanded: 0, cng: 0 },
        );
        return {
            frame_op_silent: e.silent,
            frame_op_normal: e.normal,
            frame_op_merged: e.merged,
            frame_op_expanded: e.expanded,
            frame_op_accelerated: e.accelerated,
            frame_op_preemptive_expanded: e.preemptiveExpanded,
            frame_op_cng: e.cng,
        };
    }
    getDurationStats() {
        return {
            duration_listening: this.duration.listening,
            duration_speaking: this.duration.speaking,
            duration_participation: this.duration.participation,
            duration_connected: this.duration.connected,
        };
    }
    getTransportStats() {
        return { decryption_failures: this.decryptionFailures, routing_failures: this.routingFailures };
    }
    getE2EEStats() {
        let e = i().reduce(
            this.inboundStats,
            (e, t) => (
                (e.passthroughCount += t.passthroughCount ?? 0),
                (e.decryptSuccessCount += t.decryptSuccessCount ?? 0),
                (e.decryptFailureCount += t.decryptFailureCount ?? 0),
                (e.decryptDuration += t.decryptDuration ?? 0),
                (e.decryptAttempts += t.decryptAttempts ?? 0),
                (e.decryptMissingKeyCount += t.decryptMissingKeyCount ?? 0),
                (e.decryptInvalidNonceCount += t.decryptInvalidNonceCount ?? 0),
                (e.decryptFailureAfterSuccessCount +=
                    (t.decryptFailureCount ?? 0) - (t.decryptFailureBeforeSuccessCount ?? 0)),
                e
            ),
            {
                passthroughCount: 0,
                decryptSuccessCount: 0,
                decryptFailureCount: 0,
                decryptDuration: 0,
                decryptAttempts: 0,
                decryptMissingKeyCount: 0,
                decryptInvalidNonceCount: 0,
                decryptFailureAfterSuccessCount: 0,
            },
        );
        return {
            decrypt_passthrough_count: e.passthroughCount,
            decrypt_success_count: e.decryptSuccessCount,
            decrypt_failure_count: e.decryptFailureCount,
            decrypt_duration: e.decryptDuration,
            decrypt_attempts: e.decryptAttempts,
            decrypt_missing_key_count: e.decryptMissingKeyCount,
            decrypt_invalid_nonce_count: e.decryptInvalidNonceCount,
            decrypt_failure_after_success_count: e.decryptFailureAfterSuccessCount,
            encrypt_passthrough_count: this.outboundStats.passthroughCount,
            encrypt_success_count: this.outboundStats.encryptSuccessCount,
            encrypt_failure_count: this.outboundStats.encryptFailureCount,
            encrypt_duration: this.outboundStats.encryptDuration,
            encrypt_attempts: this.outboundStats.encryptAttempts,
            encrypt_max_attempts: this.outboundStats.encryptMaxAttempts,
            encrypt_missing_key_count: this.outboundStats.encryptMissingKeyCount,
        };
    }
    getAudioDeviceStats() {
        return {
            input_device_restart_count: this.inputDeviceStats.restartCount?.accumulated,
            output_device_restart_count: this.outputDeviceStats.restartCount?.accumulated,
            input_device_time_to_first_audio: this.inputDeviceStats.timeToFirstCallbackMs,
            output_device_time_to_first_audio: this.outputDeviceStats.timeToFirstCallbackMs,
            input_device_buffer_overfull_count: this.inputDeviceStats.bufferViolations?.accumulated,
            output_device_buffer_underrun_count: this.outputDeviceStats.bufferViolations?.accumulated,
            input_device_session_sample_rate: this.inputDeviceStats.sessionSampleRate,
            output_device_session_sample_rate: this.outputDeviceStats.sessionSampleRate,
            input_device_time_from_connect_to_first_audio_ms: this.inputDeviceStats.timeFromConnectToFirstCallbackMs,
            output_device_time_from_connect_to_first_audio_ms: this.outputDeviceStats.timeFromConnectToFirstCallbackMs,
        };
    }
    getAudioLevelStats() {
        let e = [1, 5, 10, 25, 50, 75, 90, 95, 99],
            t = this.outboundStats.speakingAudioLevel.getReport(e);
        return {
            outbound_audio_level_db_p1: t.percentiles[1],
            outbound_audio_level_db_p5: t.percentiles[5],
            outbound_audio_level_db_p10: t.percentiles[10],
            outbound_audio_level_db_p25: t.percentiles[25],
            outbound_audio_level_db_p50: t.percentiles[50],
            outbound_audio_level_db_p75: t.percentiles[75],
            outbound_audio_level_db_p90: t.percentiles[90],
            outbound_audio_level_db_p95: t.percentiles[95],
            outbound_audio_level_db_p99: t.percentiles[99],
            outbound_audio_level_db_max: t.max,
            outbound_audio_level_db_mean: t.mean,
        };
    }
    getPeriodicStats() {
        let e = [];
        for (let [t, n] of Object.entries(this.periodicInboundStats)) {
            let { previous: r, current: i, currentTimestampMs: s, previousTimestampMs: a, numRateSamples: o } = n;
            if (void 0 !== a && s > a) {
                let l = s - a,
                    u = {
                        userId: t,
                        silent: i.silent ?? 0 - (r.silent ?? 0),
                        normal: i.normal ?? 0 - (r.normal ?? 0),
                        merged: i.merged ?? 0 - (r.merged ?? 0),
                        expanded: i.expanded ?? 0 - (r.expanded ?? 0),
                        accelerated: i.accelerated ?? 0 - (r.accelerated ?? 0),
                        preemptiveExpanded: i.preemptiveExpanded ?? 0 - (r.preemptiveExpanded ?? 0),
                        cng: i.cng ?? 0 - (r.cng ?? 0),
                        accelerateRate: n.accelerateRateSum / o,
                        expandRate: n.expandRateSum / o,
                        preemptiveExpandRate: n.preemptiveExpandRateSum / o,
                        speechExpandRate: n.speechExpandRateSum / o,
                        durationMs: l,
                    };
                u.normal + u.merged + u.expanded + u.accelerated + u.preemptiveExpanded > 0 && e.push(u);
            }
            (this.periodicInboundStats[t].accelerateRateSum = 0),
                (this.periodicInboundStats[t].expandRateSum = 0),
                (this.periodicInboundStats[t].preemptiveExpandRateSum = 0),
                (this.periodicInboundStats[t].speechExpandRateSum = 0),
                (this.periodicInboundStats[t].numRateSamples = 0),
                (this.periodicInboundStats[t].previous = i),
                (this.periodicInboundStats[t].previousTimestampMs = s);
        }
        return e;
    }
    sampleAudioDevice = (e, t) => {
        void 0 !== e &&
            (void 0 !== e.restartCount && (t.restartCount = p(e.restartCount, t.restartCount)),
            void 0 !== e.bufferViolations && (t.bufferViolations = p(e.bufferViolations, t.bufferViolations)),
            (e.timeToFirstCallbackMs ?? 0) !== 0 &&
                void 0 === t.timeToFirstCallbackMs &&
                (t.timeToFirstCallbackMs = e.timeToFirstCallbackMs),
            (e.sessionSampleRate ?? 0) !== 0 &&
                (t.sessionSampleRate !== e.sessionSampleRate &&
                    this.emit("input-device-sample-rate-changed", e.sessionSampleRate ?? 0),
                (t.sessionSampleRate = e.sessionSampleRate)),
            void 0 !== e.timeFromConnectToFirstCallbackMs &&
                void 0 === t.timeFromConnectToFirstCallbackMs &&
                (t.timeFromConnectToFirstCallbackMs = e.timeFromConnectToFirstCallbackMs));
    };
    appendTargetRates = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (0 === e.previousTimestampMs) {
            e.previousTimestampMs = performance.now();
            return;
        }
        let r = performance.now();
        e.aggregationDurationMs += r - e.previousTimestampMs;
        let i = (r - e.previousTimestampMs) / 1e3;
        (e.bytesAvailable += (t / 8) * i), (e.bytesTarget += (n / 8) * i), (e.previousTimestampMs = r);
    };
    sampleStats = (e) => {
        if (null == e) return;
        this.networkQuality.incrementNetworkStats((0, o.tB)()),
            this.systemResources.takeSample(),
            this.duration.connected++;
        let t = this.outboundStats.packetsSent,
            n = i().reduce(this.inboundStats, (e, t) => ((e.packetsReceived += t.packetsReceived), e), {
                packetsReceived: 0,
            }),
            r = 0;
        i().forEach(e.rtp.outbound, (e) => {
            "audio" === e.type &&
                ((r = e.bitrateTarget ?? 0),
                (this.outboundStats = {
                    ...this.outboundStats,
                    packetsSent: e.packetsSent,
                    bytesSent: e.bytesSent,
                    packetsLost: e.packetsLost ?? 0,
                    passthroughCount: e.passthroughCount ?? 0,
                    encryptSuccessCount: e.encryptSuccessCount ?? 0,
                    encryptFailureCount: e.encryptFailureCount ?? 0,
                    encryptDuration: e.encryptDuration ?? 0,
                    encryptAttempts: e.encryptAttempts ?? 0,
                    encryptMaxAttempts: e.encryptMaxAttempts ?? 0,
                    encryptMissingKeyCount: e.encryptMissingKeyCount ?? 0,
                }),
                !0 == !!e.audioDetected &&
                    null != e.audioLevel &&
                    this.outboundStats.speakingAudioLevel.addSample(20 * Math.log(e.audioLevel)));
        }),
            (this.decryptionFailures = e.transport.decryptionFailures),
            (this.routingFailures = e.transport.routingFailures),
            this.appendTargetRates(this.outboundStats, e.transport.availableOutgoingBitrate, r),
            i().forEach(e.rtp.inbound, (t, n) => {
                i().forEach(t, (t) => {
                    if ("audio" === t.type) {
                        let r = this.inboundStats[n],
                            s = e.transport.ping ?? 0,
                            a = t.packetsReceived,
                            o = t.packetsLost,
                            u = t.bytesReceived,
                            c = t.nackCount,
                            d = t.fecPacketsReceived ?? 0,
                            _ = t.fecPacketsDiscarded ?? 0,
                            f = t.jitterBuffer ?? 0,
                            p = {
                                audioJitterBuffer: t.audioJitterBuffer,
                                audioJitterBufferHistogram: r?.bufferStats.audioJitterBufferHistogram ?? new l.d(),
                                audioJitterTarget: t.audioJitterTarget,
                                audioJitterTargetHistogram: r?.bufferStats.audioJitterTargetHistogram ?? new l.d(),
                                audioJitterDelay: t.audioJitterDelay,
                                audioJitterDelayHistogram: r?.bufferStats.audioJitterDelayHistogram ?? new l.d(),
                                relativeReceptionDelay: t.relativeReceptionDelay,
                                relativePlayoutDelay: t.relativePlayoutDelay,
                            };
                        p.audioJitterBufferHistogram.addSamples(t.audioJitterBufferSamples ?? []),
                            p.audioJitterDelayHistogram.addSamples(t.audioJitterDelaySamples ?? []),
                            p.audioJitterTargetHistogram.addSamples(t.audioJitterTargetSamples ?? []);
                        let h = {
                                silent: t.opSilence,
                                normal: t.opNormal,
                                merged: t.opMerge,
                                expanded: t.opExpand,
                                accelerated: t.opAccelerate,
                                preemptiveExpanded: t.opPreemptiveExpand,
                                cng: t.opCNG,
                            },
                            m = {
                                passthroughCount: t.passthroughCount ?? 0,
                                decryptSuccessCount: t.decryptSuccessCount ?? 0,
                                decryptFailureCount: t.decryptFailureCount ?? 0,
                                decryptDuration: t.decryptDuration ?? 0,
                                decryptAttempts: t.decryptAttempts ?? 0,
                                decryptMissingKeyCount: t.decryptMissingKeyCount ?? 0,
                                decryptInvalidNonceCount: t.decryptInvalidNonceCount ?? 0,
                            };
                        if (null != r) {
                            let e = a - r.packetsReceived,
                                l = o - r.packetsLost,
                                E = 0,
                                g = r.mosBuckets,
                                A =
                                    r.decryptFailureBeforeSuccessCount ??
                                    (m.decryptSuccessCount > 0 ? m.decryptFailureCount : void 0);
                            e > 0 &&
                                l >= 0 &&
                                ((E = this.calculateMos(s + f, i().clamp(l / (e + l), 0, 1))), g[Math.floor(E)]++),
                                (this.inboundStats[n] = {
                                    packetsReceived: a,
                                    bytesReceived: u,
                                    packetsLost: o,
                                    nackCount: c ?? 0,
                                    fecPacketsReceived: d,
                                    fecPacketsDiscarded: _,
                                    mos: E,
                                    mosSum: r.mosSum + E,
                                    mosCount: r.mosCount + +(E > 0),
                                    mosBuckets: g,
                                    bufferStats: p,
                                    frameOpStats: h,
                                    decryptFailureBeforeSuccessCount: A,
                                    ...m,
                                }),
                                (this.periodicInboundStats[n] = {
                                    previousTimestampMs: this.periodicInboundStats[n].previousTimestampMs,
                                    previous: this.periodicInboundStats[n].previous,
                                    currentTimestampMs: performance.now(),
                                    current: h,
                                    accelerateRateSum:
                                        this.periodicInboundStats[n].accelerateRateSum + (t.accelerateRate ?? 0),
                                    expandRateSum: this.periodicInboundStats[n].expandRateSum + (t.expandRate ?? 0),
                                    preemptiveExpandRateSum:
                                        this.periodicInboundStats[n].preemptiveExpandRateSum +
                                        (t.preemptiveExpandRate ?? 0),
                                    speechExpandRateSum:
                                        this.periodicInboundStats[n].speechExpandRateSum + (t.speechExpandRate ?? 0),
                                    numRateSamples: this.periodicInboundStats[n].numRateSamples + 1,
                                });
                        } else
                            (this.inboundStats[n] = {
                                packetsReceived: a,
                                bytesReceived: u,
                                packetsLost: o,
                                nackCount: c ?? 0,
                                fecPacketsReceived: d,
                                fecPacketsDiscarded: _,
                                mos: 0,
                                mosSum: 0,
                                mosCount: 0,
                                mosBuckets: [0, 0, 0, 0, 0],
                                bufferStats: p,
                                frameOpStats: h,
                                ...m,
                            }),
                                (this.periodicInboundStats[n] = {
                                    previousTimestampMs: performance.now(),
                                    previous: h,
                                    currentTimestampMs: performance.now(),
                                    current: h,
                                    accelerateRateSum: t.accelerateRate ?? 0,
                                    expandRateSum: t.expandRate ?? 0,
                                    preemptiveExpandRateSum: t.preemptiveExpandRate ?? 0,
                                    speechExpandRateSum: t.speechExpandRate ?? 0,
                                    numRateSamples: 1,
                                });
                    }
                });
            }),
            void 0 !== e.audioDevice &&
                (this.sampleAudioDevice(e.audioDevice.input, this.inputDeviceStats),
                this.sampleAudioDevice(e.audioDevice.output, this.outputDeviceStats));
        let s = !1,
            a = !1;
        this.outboundStats.packetsSent > t && ((s = !0), this.duration.speaking++),
            i().reduce(this.inboundStats, (e, t) => ((e.packetsReceived += t.packetsReceived), e), {
                packetsReceived: 0,
            }).packetsReceived > n.packetsReceived && ((a = !0), this.duration.listening++),
            (s || a) && this.duration.participation++;
    };
    calculateMos(e, t) {
        let n = this.calculateR(e, t);
        return n < 0 ? 1 : n > 100 ? 4.5 : 1 + 0.035 * n + 71e-7 * n * (n - 60) * (100 - n);
    }
    calculateR(e, t) {
        return 93.4 - (0.024 * e + (e > 177.3 ? 0.11 * (e - 177.3) : 0)) - (10 + (122 * t) / (t + 10));
    }
}
let p = (e, t) => {
    let { accumulated: n, lastValue: r } = t ?? { accumulated: 0, lastValue: 0 };
    return { accumulated: r > e ? n + e : n + (e - r), lastValue: e };
};
