n.d(t, { Z: () => o });
var r = n(73800),
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
                    var d, p, m, f, b, g, j, y, h, x;
                    let e = (0, a.W)(t);
                    await (0, i.e)(r, {
                        channelId: e ? t : void 0,
                        analyticsLocations: o,
                        editMetadata: {
                            start: null != (g = null != (b = null == l ? void 0 : l.start) ? b : null == (d = r.editMetadata) ? void 0 : d.start) ? g : 0,
                            end: null != (y = null != (j = null == l ? void 0 : l.end) ? j : null == (p = r.editMetadata) ? void 0 : p.end) ? y : r.length / 1000,
                            applicationAudio: null == (h = null != s ? s : null == (m = r.editMetadata) ? void 0 : m.applicationAudio) || h,
                            voiceAudio: null == (x = null != c ? c : null == (f = r.editMetadata) ? void 0 : f.voiceAudio) || x
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
