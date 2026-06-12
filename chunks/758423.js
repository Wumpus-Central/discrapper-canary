n.d(t, { A: () => _ });
var r = n(64700),
    l = n(771253),
    s = n(412703),
    a = n(902173),
    i = n(718499),
    u = n(551875),
    o = n(795068),
    c = n(652215);
let d = () => {},
    E = new Set([c.NKC.FIVE_G, c.NKC.FOUR_G, c.NKC.UNKNOWN]);
function _(e, t, n, c) {
    let _ = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        { quest: f } = r.useContext(o.a),
        { questConfig: m } = r.useContext(o.l),
        p = r.useRef(!1),
        S = r.useRef(null),
        C = m.taskConfigV2.tasks[s.n.WATCH_VIDEO]?.assets,
        v = r.useMemo(() => m.features.includes(a.L.FULL_EPISODE_VIDEO_QUEST), [m.features]),
        A = r.useMemo(
            () =>
                null != C
                    ? l.Ay.isSupported() && null != C.videoHls
                        ? u.fY.VIDEO_PLAYER_VIDEO_HLS
                        : v
                          ? null
                          : E.has(t) || null == C.videoLowRes
                            ? u.fY.VIDEO_PLAYER_VIDEO
                            : u.fY.VIDEO_PLAYER_VIDEO_LOW_RES
                    : null,
            [C, t, v],
        ),
        g = r.useMemo(
            () =>
                null != c
                    ? { url: c, mimetype: "video/mp4", isAnimated: !0 }
                    : null != A
                      ? (0, u.tW)(f, A, void 0, !1)
                      : null,
            [f, A, c],
        ),
        h = () => {
            null != S.current && S.current.config.minAutoBitrate !== i.XY && (S.current.config.minAutoBitrate = i.XY);
        },
        I = r.useCallback(() => {
            null != S.current && (S.current.config.minAutoBitrate = i.XY);
        }, []);
    return (
        r.useEffect(() => {
            if (!_ || A !== u.fY.VIDEO_PLAYER_VIDEO_HLS || null == g || null == e.current || p.current) return;
            (S.current = new l.Ay({
                backBufferLength: i.OJ,
                maxBufferLength: i.Bu,
                startPosition: n,
                startFragPrefetch: !0,
                startLevel: -1,
            })),
                S.current.on(l.Ay.Events.FRAG_LOADING, h),
                S.current.loadSource(g.url),
                S.current.attachMedia(e.current),
                (p.current = !0);
            let t = S.current;
            return () => {
                null != t && t.off(l.Ay.Events.FRAG_LOADING, h);
            };
        }, [_, g, A, e, n]),
        { videoAssetType: A, videoAsset: g, hlsRef: S, onFirstChunkLoaded: _ ? I : d }
    );
}
