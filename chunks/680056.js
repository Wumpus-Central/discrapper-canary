n.d(t, { Z: () => o });
var l = n(647438),
    r = n(906732),
    a = n(407316),
    i = n(937784);
let o = (e) => {
    let { channelId: t, setExporting: n } = e,
        { analyticsLocations: o } = (0, r.ZP)();
    return {
        onShareClick: l.useCallback(
            async (e) => {
                let { clip: l, cropData: r, applicationAudioEnabled: c, voiceAudioEnabled: s, onShareComplete: u } = e;
                n(l.id);
                try {
                    var d, p, m, f, b, g, h, y, x, j;
                    let e = (0, a.W)(t);
                    await (0, i.e)(l, {
                        channelId: e ? t : void 0,
                        analyticsLocations: o,
                        editMetadata: {
                            start:
                                null !=
                                (g =
                                    null != (b = null == r ? void 0 : r.start)
                                        ? b
                                        : null == (d = l.editMetadata)
                                          ? void 0
                                          : d.start)
                                    ? g
                                    : 0,
                            end:
                                null !=
                                (y =
                                    null != (h = null == r ? void 0 : r.end)
                                        ? h
                                        : null == (p = l.editMetadata)
                                          ? void 0
                                          : p.end)
                                    ? y
                                    : l.length / 1000,
                            applicationAudio:
                                null ==
                                    (x = null != c ? c : null == (m = l.editMetadata) ? void 0 : m.applicationAudio) ||
                                x,
                            voiceAudio:
                                null == (j = null != s ? s : null == (f = l.editMetadata) ? void 0 : f.voiceAudio) || j,
                        },
                    });
                } catch (e) {
                } finally {
                    null == u || u(), n(null);
                }
            },
            [t, o, n],
        ),
    };
};
