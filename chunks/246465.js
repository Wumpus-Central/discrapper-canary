n.d(t, { A: () => p });
var r = n(64700),
    l = n(771253),
    i = n(412703),
    s = n(902173),
    a = n(662903),
    o = n(579473),
    u = n(717415),
    c = n(652215);
let d = () => {},
    m = new Set([c.NKC.FIVE_G, c.NKC.FOUR_G, c.NKC.UNKNOWN]);
function p(e, t, n, c) {
    let p = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        { quest: f } = r.useContext(u.VideoQuestModalContext),
        { questConfig: E } = r.useContext(u.VideoQuestConfigContext),
        h = r.useRef(!1),
        v = r.useRef(null),
        x = E.taskConfigV2.tasks[i.n.WATCH_VIDEO]?.assets,
        g = r.useMemo(() => E.features.includes(s.L.FULL_EPISODE_VIDEO_QUEST), [E.features]),
        S = r.useMemo(
            () =>
                null != x
                    ? l.Ay.isSupported() && null != x.videoHls
                        ? o.fY.VIDEO_PLAYER_VIDEO_HLS
                        : g
                          ? null
                          : m.has(t) || null == x.videoLowRes
                            ? o.fY.VIDEO_PLAYER_VIDEO
                            : o.fY.VIDEO_PLAYER_VIDEO_LOW_RES
                    : null,
            [x, t, g],
        ),
        A = r.useMemo(
            () =>
                null != c
                    ? { url: c, mimetype: "video/mp4", isAnimated: !0 }
                    : null != S
                      ? (0, o.tW)(f, S, void 0, !1)
                      : null,
            [f, S, c],
        ),
        C = () => {
            null != v.current && v.current.config.minAutoBitrate !== a.XY && (v.current.config.minAutoBitrate = a.XY);
        },
        _ = r.useCallback(() => {
            null != v.current && (v.current.config.minAutoBitrate = a.XY);
        }, []);
    return (
        r.useEffect(() => {
            if (!p || S !== o.fY.VIDEO_PLAYER_VIDEO_HLS || null == A || null == e.current || h.current) return;
            (v.current = new l.Ay({
                backBufferLength: a.OJ,
                maxBufferLength: a.Bu,
                startPosition: n,
                startFragPrefetch: !0,
                startLevel: -1,
            })),
                v.current.on(l.Ay.Events.FRAG_LOADING, C),
                v.current.loadSource(A.url),
                v.current.attachMedia(e.current),
                (h.current = !0);
            let t = v.current;
            return () => {
                null != t && t.off(l.Ay.Events.FRAG_LOADING, C);
            };
        }, [p, A, S, e, n]),
        { videoAssetType: S, videoAsset: A, hlsRef: v, onFirstChunkLoaded: p ? _ : d }
    );
}
