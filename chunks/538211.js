n.d(t, { Z: () => l }), n(47120);
var r = n(70722),
    i = n(388032);
function l(e) {
    let t = new Set();
    return (
        e.showVibesHoneypot || t.add(r.kr.VIBES_OFF),
        (function (e) {
            let { isEndStream: t } = e;
            return [
                {
                    value: r.kr.BLACK_SCREEN,
                    label: t ? i.NW.string(i.t['0X5Zbm']) : i.NW.string(i.t.fxiRNj)
                },
                {
                    value: r.kr.BLURRY,
                    label: t ? i.NW.string(i.t.VVPQy8) : i.NW.string(i.t.E8jTMD)
                },
                {
                    value: r.kr.LAGGING,
                    label: t ? i.NW.string(i.t.ObEHd3) : i.NW.string(i.t.VoSJER)
                },
                {
                    value: r.kr.OUT_OF_SYNC,
                    label: t ? i.NW.string(i.t.mYmwDw) : i.NW.string(i.t['+NluQk'])
                },
                {
                    value: r.kr.AUDIO_MISSING,
                    label: t ? i.NW.string(i.t.Xwv419) : i.NW.string(i.t.G2egzc)
                },
                {
                    value: r.kr.AUDIO_POOR,
                    label: t ? i.NW.string(i.t['fHey+f']) : i.NW.string(i.t.aHOfIi)
                },
                {
                    value: r.kr.STREAM_STOPPED,
                    label: i.NW.string(i.t.uEoqQk)
                },
                {
                    value: r.kr.VIBES_OFF,
                    label: i.NW.string(i.t['++JLLy'])
                },
                {
                    value: r.kr.OTHER,
                    label: i.NW.string(i.t['emlT9/'])
                }
            ];
        })(e).filter((e) => {
            let { value: n } = e;
            return !t.has(n);
        })
    );
}
