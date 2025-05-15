var r,
    i = n(264344),
    o = n.n(i),
    a = n(345546);
(window.AudioContext = null != (r = window.AudioContext) ? r : window.webkitAudioContext),
    null != window.RTCPeerConnection &&
        'Chrome' === o().name &&
        52 > (0, a.n)() &&
        ['createOffer', 'createAnswer'].forEach((e) => {
            let t = RTCPeerConnection.prototype[e];
            RTCPeerConnection.prototype[e] = function () {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                let i = this;
                if (n.length < 1 || (1 === n.length && 'object' == typeof n[0])) {
                    let e = 1 === n.length ? n[0] : void 0;
                    return (
                        null != e &&
                            (e = {
                                mandatory: {
                                    OfferToReceiveAudio: e.offerToReceiveAudio || !1,
                                    OfferToReceiveVideo: e.offerToReceiveVideo || !1
                                },
                                optional: [{ VoiceActivityDetection: e.voiceActivityDetection || !1 }, { IceRestart: e.iceRestart || !1 }]
                            }),
                        new Promise((n, r) => t.apply(i, [n, r, e]))
                    );
                }
                return t.apply(this, n);
            };
        });
