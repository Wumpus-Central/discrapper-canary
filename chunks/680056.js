l.d(t, { Z: () => r });
var a = l(192379),
    n = l(906732),
    i = l(407316),
    s = l(937784);
let r = (e) => {
    let { channelId: t, setExporting: l } = e,
        { analyticsLocations: r } = (0, n.ZP)();
    return {
        onShareClick: a.useCallback(
            async (e) => {
                let { clip: a, cropData: n, applicationAudioEnabled: o, voiceAudioEnabled: c, onShareComplete: d } = e;
                l(a.id);
                try {
                    var u, m, p, x, v, h, g, C, f, j;
                    let e = (0, i.W)(t);
                    await (0, s.e)(a, {
                        channelId: e ? t : void 0,
                        analyticsLocations: r,
                        editMetadata: {
                            start: null !== (h = null !== (v = null == n ? void 0 : n.start) && void 0 !== v ? v : null === (u = a.editMetadata) || void 0 === u ? void 0 : u.start) && void 0 !== h ? h : 0,
                            end: null !== (C = null !== (g = null == n ? void 0 : n.end) && void 0 !== g ? g : null === (m = a.editMetadata) || void 0 === m ? void 0 : m.end) && void 0 !== C ? C : a.length / 1000,
                            applicationAudio: null === (f = null != o ? o : null === (p = a.editMetadata) || void 0 === p ? void 0 : p.applicationAudio) || void 0 === f || f,
                            voiceAudio: null === (j = null != c ? c : null === (x = a.editMetadata) || void 0 === x ? void 0 : x.voiceAudio) || void 0 === j || j
                        }
                    });
                } catch (e) {
                } finally {
                    null == d || d(), l(null);
                }
            },
            [t, r, l]
        )
    };
};
