n.d(e, { Z: () => i }), n(388685);
var l = n(70722),
    r = n(388032);
function i(t) {
    let e = new Set();
    return (
        t.showVibesHoneypot || e.add(l.kr.VIBES_OFF),
        (function (t) {
            let { isEndStream: e } = t;
            return [
                {
                    value: l.kr.BLACK_SCREEN,
                    label: e ? r.intl.string(r.t['0X5Zbm']) : r.intl.string(r.t.fxiRNj)
                },
                {
                    value: l.kr.BLURRY,
                    label: e ? r.intl.string(r.t.VVPQy8) : r.intl.string(r.t.E8jTMD)
                },
                {
                    value: l.kr.LAGGING,
                    label: e ? r.intl.string(r.t.ObEHd3) : r.intl.string(r.t.VoSJER)
                },
                {
                    value: l.kr.OUT_OF_SYNC,
                    label: e ? r.intl.string(r.t.mYmwDw) : r.intl.string(r.t['+NluQk'])
                },
                {
                    value: l.kr.AUDIO_MISSING,
                    label: e ? r.intl.string(r.t.Xwv419) : r.intl.string(r.t.G2egzc)
                },
                {
                    value: l.kr.AUDIO_POOR,
                    label: e ? r.intl.string(r.t['fHey+f']) : r.intl.string(r.t.aHOfIi)
                },
                {
                    value: l.kr.STREAM_STOPPED,
                    label: r.intl.string(r.t.uEoqQk)
                },
                {
                    value: l.kr.VIBES_OFF,
                    label: r.intl.string(r.t['++JLLy'])
                },
                {
                    value: l.kr.OTHER,
                    label: r.intl.string(r.t['emlT9/'])
                }
            ];
        })(t).filter((t) => {
            let { value: n } = t;
            return !e.has(n);
        })
    );
}
