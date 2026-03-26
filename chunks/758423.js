n.d(t, { A: () => p });
var r = n(64700),
    l = n(771253),
    a = n(412703),
    i = n(902173),
    s = n(662903),
    o = n(579473),
    u = n(795068),
    c = n(652215);
let d = () => {},
    m = new Set([c.NKC.FIVE_G, c.NKC.FOUR_G, c.NKC.UNKNOWN]);
function p(e, t, n, c) {
    let p = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        { quest: E } = r.useContext(u.a),
        { questConfig: f } = r.useContext(u.l),
        h = r.useRef(!1),
        v = r.useRef(null),
        x = f.taskConfigV2.tasks[a.n.WATCH_VIDEO]?.assets,
        g = r.useMemo(() => f.features.includes(i.L.FULL_EPISODE_VIDEO_QUEST), [f.features]),
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
                      ? (0, o.tW)(E, S, void 0, !1)
                      : null,
            [E, S, c],
        ),
        b = () => {
            null != v.current && v.current.config.minAutoBitrate !== s.XY && (v.current.config.minAutoBitrate = s.XY);
        },
        _ = r.useCallback(() => {
            null != v.current && (v.current.config.minAutoBitrate = s.XY);
        }, []);
    return (
        r.useEffect(() => {
            if (!p || S !== o.fY.VIDEO_PLAYER_VIDEO_HLS || null == A || null == e.current || h.current) return;
            (v.current = new l.Ay({
                backBufferLength: s.OJ,
                maxBufferLength: s.Bu,
                startPosition: n,
                startFragPrefetch: !0,
                startLevel: -1,
            })),
                v.current.on(l.Ay.Events.FRAG_LOADING, b),
                v.current.loadSource(A.url),
                v.current.attachMedia(e.current),
                (h.current = !0);
            let t = v.current;
            return () => {
                null != t && t.off(l.Ay.Events.FRAG_LOADING, b);
            };
        }, [p, A, S, e, n]),
        { videoAssetType: S, videoAsset: A, hlsRef: v, onFirstChunkLoaded: p ? _ : d }
    );
}
