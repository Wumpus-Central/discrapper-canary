(n.d(t, { Z: () => i }), n(388685));
var r = n(70722),
    o = n(388032);
function i(e) {
    let t = new Set();
    return (
        e.showVibesHoneypot || t.add(r.kr.VIBES_OFF),
        (function (e) {
            let { isEndStream: t } = e;
            return [
                {
                    value: r.kr.BLACK_SCREEN,
                    label: t ? o.intl.string(o.t['0X5Zbm']) : o.intl.string(o.t.fxiRNj)
                },
                {
                    value: r.kr.BLURRY,
                    label: t ? o.intl.string(o.t.VVPQy8) : o.intl.string(o.t.E8jTMD)
                },
                {
                    value: r.kr.LAGGING,
                    label: t ? o.intl.string(o.t.ObEHd3) : o.intl.string(o.t.VoSJER)
                },
                {
                    value: r.kr.OUT_OF_SYNC,
                    label: t ? o.intl.string(o.t.mYmwDw) : o.intl.string(o.t['+NluQk'])
                },
                {
                    value: r.kr.AUDIO_MISSING,
                    label: t ? o.intl.string(o.t.Xwv419) : o.intl.string(o.t.G2egzc)
                },
                {
                    value: r.kr.AUDIO_POOR,
                    label: t ? o.intl.string(o.t['fHey+f']) : o.intl.string(o.t.aHOfIi)
                },
                {
                    value: r.kr.STREAM_STOPPED,
                    label: o.intl.string(o.t.uEoqQk)
                },
                {
                    value: r.kr.VIBES_OFF,
                    label: o.intl.string(o.t['++JLLy'])
                },
                {
                    value: r.kr.OTHER,
                    label: o.intl.string(o.t['emlT9/'])
                }
            ];
        })(e).filter((e) => {
            let { value: n } = e;
            return !t.has(n);
        })
    );
}
