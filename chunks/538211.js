n.d(t, { Z: () => i }), n(47120);
var r = n(70722),
    l = n(388032);
function i(e) {
    let t = new Set();
    return (
        e.showVibesHoneypot || t.add(r.kr.VIBES_OFF),
        (function (e) {
            let { isEndStream: t } = e;
            return [
                {
                    value: r.kr.BLACK_SCREEN,
                    label: t ? l.NW.string(l.t['0X5Zbm']) : l.NW.string(l.t.fxiRNj)
                },
                {
                    value: r.kr.BLURRY,
                    label: t ? l.NW.string(l.t.VVPQy8) : l.NW.string(l.t.E8jTMD)
                },
                {
                    value: r.kr.LAGGING,
                    label: t ? l.NW.string(l.t.ObEHd3) : l.NW.string(l.t.VoSJER)
                },
                {
                    value: r.kr.OUT_OF_SYNC,
                    label: t ? l.NW.string(l.t.mYmwDw) : l.NW.string(l.t['+NluQk'])
                },
                {
                    value: r.kr.AUDIO_MISSING,
                    label: t ? l.NW.string(l.t.Xwv419) : l.NW.string(l.t.G2egzc)
                },
                {
                    value: r.kr.AUDIO_POOR,
                    label: t ? l.NW.string(l.t['fHey+f']) : l.NW.string(l.t.aHOfIi)
                },
                {
                    value: r.kr.STREAM_STOPPED,
                    label: l.NW.string(l.t.uEoqQk)
                },
                {
                    value: r.kr.VIBES_OFF,
                    label: l.NW.string(l.t['++JLLy'])
                },
                {
                    value: r.kr.OTHER,
                    label: l.NW.string(l.t['emlT9/'])
                }
            ];
        })(e).filter((e) => {
            let { value: n } = e;
            return !t.has(n);
        })
    );
}
