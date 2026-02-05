n.d(t, { A: () => d });
var r = n(64700),
    s = n(771253),
    i = n(412703),
    l = n(902173),
    a = n(579473),
    o = n(717415),
    u = n(652215);
let c = new Set([u.NKC.FIVE_G, u.NKC.FOUR_G, u.NKC.UNKNOWN]);
function d(e, t, n) {
    let { quest: u } = r.useContext(o.VideoQuestModalContext),
        { questConfig: d } = r.useContext(o.VideoQuestConfigContext),
        m = r.useRef(!1),
        E = r.useRef(null),
        f = d.taskConfigV2.tasks[i.n.WATCH_VIDEO]?.assets,
        p = r.useMemo(() => d.features.includes(l.L.FULL_EPISODE_VIDEO_QUEST), [d.features]),
        v = r.useMemo(
            () =>
                null != f
                    ? s.Ay.isSupported() && null != f.videoHls
                        ? a.fY.VIDEO_PLAYER_VIDEO_HLS
                        : p
                          ? null
                          : c.has(t) || null == f.videoLowRes
                            ? a.fY.VIDEO_PLAYER_VIDEO
                            : a.fY.VIDEO_PLAYER_VIDEO_LOW_RES
                    : null,
            [f, t, p],
        ),
        h = r.useMemo(() => (null != v ? (0, a.tW)(u, v, void 0, !1) : null), [u, v]),
        _ = () => {
            null != E.current && 8e5 !== E.current.config.minAutoBitrate && (E.current.config.minAutoBitrate = 8e5);
        },
        C = r.useCallback(() => {
            null != E.current && (E.current.config.minAutoBitrate = 8e5);
        }, []);
    return (
        r.useEffect(() => {
            if (v !== a.fY.VIDEO_PLAYER_VIDEO_HLS || null == h || null == e.current || m.current) return;
            (E.current = new s.Ay({
                backBufferLength: 20,
                maxBufferLength: 30,
                startPosition: n,
                startFragPrefetch: !0,
                startLevel: -1,
            })),
                E.current.on(s.Ay.Events.FRAG_LOADING, _),
                E.current.loadSource(h.url),
                E.current.attachMedia(e.current),
                (m.current = !0);
            let t = E.current;
            return () => {
                null != t && t.off(s.Ay.Events.FRAG_LOADING, _);
            };
        }, [h, v, e, n]),
        { videoAssetType: v, videoAsset: h, hlsRef: E, onFirstChunkLoaded: C }
    );
}
