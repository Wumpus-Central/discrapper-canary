n.d(t, { A: () => _ });
var r = n(582128),
    u = n(412703),
    l = n(902173),
    s = n(53200),
    i = n(718499),
    a = n(291749),
    o = n(795068),
    c = n(652215);
function d() {}
let E = new Set([c.NKC.FIVE_G, c.NKC.FOUR_G, c.NKC.UNKNOWN]);
function _(e, t, n, c) {
    let _ = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        { quest: f } = r.useContext(o.a),
        { questConfig: p } = r.useContext(o.l),
        m = r.useRef(!1),
        S = r.useRef(null),
        [v, C] = r.useState(null),
        [A, I] = r.useState(!1),
        g = p.taskConfigV2.tasks[u.n.WATCH_VIDEO]?.assets,
        h = r.useMemo(() => p.features.includes(l.L.FULL_EPISODE_VIDEO_QUEST), [p.features]),
        D = r.useMemo(
            () =>
                null != g
                    ? !A && (0, s.Ap)() && null != g.videoHls
                        ? a.fY.VIDEO_PLAYER_VIDEO_HLS
                        : h
                          ? null
                          : E.has(t) || null == g.videoLowRes
                            ? a.fY.VIDEO_PLAYER_VIDEO
                            : a.fY.VIDEO_PLAYER_VIDEO_LOW_RES
                    : null,
            [g, t, h, A],
        ),
        T = r.useMemo(
            () =>
                null != c
                    ? { url: c, mimetype: "video/mp4", isAnimated: !0 }
                    : null != D
                      ? (0, a.tW)(f, D, void 0, !1)
                      : null,
            [f, D, c],
        );
    function R() {
        null != S.current && S.current.config.minAutoBitrate !== i.XY && (S.current.config.minAutoBitrate = i.XY);
    }
    let O = r.useCallback(() => {
        null != S.current && (S.current.config.minAutoBitrate = i.XY);
    }, []);
    return (
        r.useEffect(() => {
            if (!_ || D !== a.fY.VIDEO_PLAYER_VIDEO_HLS || null == T || null == e.current || m.current) return;
            let t = !1,
                r = null;
            return (
                (0, s.E)().then((u) => {
                    if (!t && null != e.current && !m.current) {
                        if (!u.isSupported()) return void I(!0);
                        ((r = new u({
                            backBufferLength: i.OJ,
                            maxBufferLength: i.Bu,
                            startPosition: n,
                            startFragPrefetch: !0,
                            startLevel: -1,
                        })).on(u.Events.FRAG_LOADING, R),
                            r.loadSource(T.url),
                            r.attachMedia(e.current),
                            (S.current = r),
                            C(r),
                            (m.current = !0));
                    }
                }),
                () => {
                    t = !0;
                    let e = (0, s.LA)();
                    null != r && null != e && r.off(e.Events.FRAG_LOADING, R);
                }
            );
        }, [_, T, D, e, n]),
        { videoAssetType: D, videoAsset: T, hlsRef: S, hls: v, onFirstChunkLoaded: _ ? O : d }
    );
}
