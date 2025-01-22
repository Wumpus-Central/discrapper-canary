var i,
    a = r(264344),
    o = r.n(a),
    s = r(345546);
(window.AudioContext = null !== (i = window.AudioContext) && void 0 !== i ? i : window.webkitAudioContext),
    null != window.RTCPeerConnection &&
        'Chrome' === o().name &&
        52 > (0, s.n)() &&
        ['createOffer', 'createAnswer'].forEach((e) => {
            let n = RTCPeerConnection.prototype[e];
            RTCPeerConnection.prototype[e] = function () {
                for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                let a = this;
                if (r.length < 1 || (1 === r.length && 'object' == typeof r[0])) {
                    let e = 1 === r.length ? r[0] : void 0;
                    return (
                        null != e &&
                            (e = {
                                mandatory: {
                                    OfferToReceiveAudio: e.offerToReceiveAudio || !1,
                                    OfferToReceiveVideo: e.offerToReceiveVideo || !1
                                },
                                optional: [{ VoiceActivityDetection: e.voiceActivityDetection || !1 }, { IceRestart: e.iceRestart || !1 }]
                            }),
                        new Promise((r, i) => n.apply(a, [r, i, e]))
                    );
                }
                return n.apply(this, r);
            };
        });
