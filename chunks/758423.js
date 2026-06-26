n.d(t, { A: () => f });
var r = n(64700),
    l = n(771253),
    i = n(412703),
    a = n(902173),
    s = n(718499),
    u = n(46948),
    o = n(795068),
    c = n(652215);
function d() {}
let E = new Set([c.NKC.FIVE_G, c.NKC.FOUR_G, c.NKC.UNKNOWN]);
function f(e, t, n, c) {
    let f = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        { quest: _ } = r.useContext(o.a),
        { questConfig: m } = r.useContext(o.l),
        p = r.useRef(!1),
        S = r.useRef(null),
        C = m.taskConfigV2.tasks[i.n.WATCH_VIDEO]?.assets,
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
                      ? (0, u.tW)(_, A, void 0, !1)
                      : null,
            [_, A, c],
        );
    function h() {
        null != S.current && S.current.config.minAutoBitrate !== s.XY && (S.current.config.minAutoBitrate = s.XY);
    }
    let I = r.useCallback(() => {
        null != S.current && (S.current.config.minAutoBitrate = s.XY);
    }, []);
    return (
        r.useEffect(() => {
            if (!f || A !== u.fY.VIDEO_PLAYER_VIDEO_HLS || null == g || null == e.current || p.current) return;
            (S.current = new l.Ay({
                backBufferLength: s.OJ,
                maxBufferLength: s.Bu,
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
        }, [f, g, A, e, n]),
        { videoAssetType: A, videoAsset: g, hlsRef: S, onFirstChunkLoaded: f ? I : d }
    );
}
