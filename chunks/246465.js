n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(64700),
    l = n(771253),
    o = n(412703),
    i = n(902173),
    s = n(579473),
    a = n(717415),
    c = n(652215);
let u = new Set([c.NKC.FIVE_G, c.NKC.FOUR_G, c.NKC.UNKNOWN]);

function d(e, t, n) {
    var c;
    let { quest: d } = r.useContext(a.VideoQuestModalContext),
        { questConfig: f } = r.useContext(a.VideoQuestConfigContext),
        m = r.useRef(!1),
        p = r.useRef(null),
        v = null == (c = f.taskConfigV2.tasks[o.n.WATCH_VIDEO]) ? void 0 : c.assets,
        E = r.useMemo(() => f.features.includes(i.L.FULL_EPISODE_VIDEO_QUEST), [f.features]),
        g = r.useMemo(
            () =>
                null != v
                    ? l.Ay.isSupported() && null != v.videoHls
                        ? s.fY.VIDEO_PLAYER_VIDEO_HLS
                        : E
                          ? null
                          : u.has(t) || null == v.videoLowRes
                            ? s.fY.VIDEO_PLAYER_VIDEO
                            : s.fY.VIDEO_PLAYER_VIDEO_LOW_RES
                    : null,
            [v, t, E],
        ),
        h = r.useMemo(() => (null != g ? (0, s.tW)(d, g, void 0, !1) : null), [d, g]),
        b = () => {
            null != p.current && 8e5 !== p.current.config.minAutoBitrate && (p.current.config.minAutoBitrate = 8e5);
        },
        y = r.useCallback(() => {
            null != p.current && (p.current.config.minAutoBitrate = 8e5);
        }, []);
    return (
        r.useEffect(() => {
            if (g !== s.fY.VIDEO_PLAYER_VIDEO_HLS || null == h || null == e.current || m.current) return;
            (p.current = new l.Ay({
                backBufferLength: 20,
                maxBufferLength: 30,
                startPosition: n,
                startFragPrefetch: !0,
                startLevel: -1,
            })),
                p.current.on(l.Ay.Events.FRAG_LOADING, b),
                p.current.loadSource(h.url),
                p.current.attachMedia(e.current),
                (m.current = !0);
            let t = p.current;
            return () => {
                null != t && t.off(l.Ay.Events.FRAG_LOADING, b);
            };
        }, [h, g, e, n]),
        {
            videoAssetType: g,
            videoAsset: h,
            hlsRef: p,
            onFirstChunkLoaded: y,
        }
    );
}
