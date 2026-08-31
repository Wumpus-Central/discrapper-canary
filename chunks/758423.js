n.d(t, { A: () => f });
var r = n(582128),
    l = n(412703),
    i = n(902173),
    u = n(53200),
    s = n(718499),
    a = n(291749),
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
        [C, v] = r.useState(null),
        [A, h] = r.useState(!1),
        g = m.taskConfigV2.tasks[l.n.WATCH_VIDEO]?.assets,
        I = r.useMemo(() => m.features.includes(i.L.FULL_EPISODE_VIDEO_QUEST), [m.features]),
        D = r.useMemo(
            () =>
                null != g
                    ? !A && (0, u.Ap)() && null != g.videoHls
                        ? a.fY.VIDEO_PLAYER_VIDEO_HLS
                        : I
                          ? null
                          : E.has(t) || null == g.videoLowRes
                            ? a.fY.VIDEO_PLAYER_VIDEO
                            : a.fY.VIDEO_PLAYER_VIDEO_LOW_RES
                    : null,
            [g, t, I, A],
        ),
        T = r.useMemo(
            () =>
                null != c
                    ? { url: c, mimetype: "video/mp4", isAnimated: !0 }
                    : null != D
                      ? (0, a.tW)(_, D, void 0, !1)
                      : null,
            [_, D, c],
        );
    function R() {
        null != S.current && S.current.config.minAutoBitrate !== s.XY && (S.current.config.minAutoBitrate = s.XY);
    }
    let x = r.useCallback(() => {
        null != S.current && (S.current.config.minAutoBitrate = s.XY);
    }, []);
    return (
        r.useEffect(() => {
            if (!f || D !== a.fY.VIDEO_PLAYER_VIDEO_HLS || null == T || null == e.current || p.current) return;
            let t = !1,
                r = null;
            return (
                (0, u.E)().then((l) => {
                    if (!t && null != e.current && !p.current) {
                        if (!l.isSupported()) return void h(!0);
                        (r = new l({
                            backBufferLength: s.OJ,
                            maxBufferLength: s.Bu,
                            startPosition: n,
                            startFragPrefetch: !0,
                            startLevel: -1,
                        })).on(l.Events.FRAG_LOADING, R),
                            r.loadSource(T.url),
                            r.attachMedia(e.current),
                            (S.current = r),
                            v(r),
                            (p.current = !0);
                    }
                }),
                () => {
                    t = !0;
                    let e = (0, u.LA)();
                    null != r && null != e && r.off(e.Events.FRAG_LOADING, R);
                }
            );
        }, [f, T, D, e, n]),
        { videoAssetType: D, videoAsset: T, hlsRef: S, hls: C, onFirstChunkLoaded: f ? x : d }
    );
}
