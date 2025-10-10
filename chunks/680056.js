n.d(t, { Z: () => o });
var l = n(647438),
    a = n(906732),
    r = n(407316),
    i = n(937784);
let o = (e) => {
    let { channelId: t, setExporting: n } = e,
        { analyticsLocations: o } = (0, a.ZP)();
    return {
        onShareClick: l.useCallback(
            async (e) => {
                let { clip: l, cropData: a, applicationAudioEnabled: s, voiceAudioEnabled: c, onShareComplete: u } = e;
                n(l.id);
                try {
                    var d, p, m, f, g, b, h, x, j, y;
                    let e = (0, r.W)(t);
                    await (0, i.e)(l, {
                        channelId: e ? t : void 0,
                        analyticsLocations: o,
                        editMetadata: {
                            start:
                                null !=
                                (b =
                                    null != (g = null == a ? void 0 : a.start)
                                        ? g
                                        : null == (d = l.editMetadata)
                                          ? void 0
                                          : d.start)
                                    ? b
                                    : 0,
                            end:
                                null !=
                                (x =
                                    null != (h = null == a ? void 0 : a.end)
                                        ? h
                                        : null == (p = l.editMetadata)
                                          ? void 0
                                          : p.end)
                                    ? x
                                    : l.length / 1000,
                            applicationAudio:
                                null ==
                                    (j = null != s ? s : null == (m = l.editMetadata) ? void 0 : m.applicationAudio) ||
                                j,
                            voiceAudio:
                                null == (y = null != c ? c : null == (f = l.editMetadata) ? void 0 : f.voiceAudio) || y,
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
