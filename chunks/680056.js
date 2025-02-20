n.d(t, { Z: () => o });
var r = n(192379),
    l = n(906732),
    a = n(407316),
    i = n(937784);
let o = (e) => {
    let { channelId: t, setExporting: n } = e,
        { analyticsLocations: o } = (0, l.ZP)();
    return {
        onShareClick: r.useCallback(
            async (e) => {
                let { clip: r, cropData: l, applicationAudioEnabled: s, voiceAudioEnabled: c, onShareComplete: u } = e;
                n(r.id);
                try {
                    var d, p, m, f, b, v, g, j, h, y;
                    let e = (0, a.W)(t);
                    await (0, i.e)(r, {
                        channelId: e ? t : void 0,
                        analyticsLocations: o,
                        editMetadata: {
                            start: null !== (v = null !== (b = null == l ? void 0 : l.start) && void 0 !== b ? b : null === (d = r.editMetadata) || void 0 === d ? void 0 : d.start) && void 0 !== v ? v : 0,
                            end: null !== (j = null !== (g = null == l ? void 0 : l.end) && void 0 !== g ? g : null === (p = r.editMetadata) || void 0 === p ? void 0 : p.end) && void 0 !== j ? j : r.length / 1000,
                            applicationAudio: null === (h = null != s ? s : null === (m = r.editMetadata) || void 0 === m ? void 0 : m.applicationAudio) || void 0 === h || h,
                            voiceAudio: null === (y = null != c ? c : null === (f = r.editMetadata) || void 0 === f ? void 0 : f.voiceAudio) || void 0 === y || y
                        }
                    });
                } catch (e) {
                } finally {
                    null == u || u(), n(null);
                }
            },
            [t, o, n]
        )
    };
};
