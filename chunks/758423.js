n.d(t, { A: () => _ });
var r = n(582128),
    l = n(412703),
    i = n(902173),
    s = n(53200),
    u = n(718499),
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
        [A, h] = r.useState(!1),
        g = p.taskConfigV2.tasks[l.n.WATCH_VIDEO]?.assets,
        I = r.useMemo(() => p.features.includes(i.L.FULL_EPISODE_VIDEO_QUEST), [p.features]),
        D = r.useMemo(
            () =>
                null != g
                    ? !A && (0, s.Ap)() && null != g.videoHls
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
                      ? (0, a.tW)(f, D, void 0, !1)
                      : null,
            [f, D, c],
        );
    function R() {
        null != S.current && S.current.config.minAutoBitrate !== u.XY && (S.current.config.minAutoBitrate = u.XY);
    }
    let x = r.useCallback(() => {
        null != S.current && (S.current.config.minAutoBitrate = u.XY);
    }, []);
    return (
        r.useEffect(() => {
            if (!_ || D !== a.fY.VIDEO_PLAYER_VIDEO_HLS || null == T || null == e.current || m.current) return;
            let t = !1,
                r = null;
            return (
                (0, s.E)().then((l) => {
                    if (!t && null != e.current && !m.current) {
                        if (!l.isSupported()) return void h(!0);
                        ((r = new l({
                            backBufferLength: u.OJ,
                            maxBufferLength: u.Bu,
                            startPosition: n,
                            startFragPrefetch: !0,
                            startLevel: -1,
                        })).on(l.Events.FRAG_LOADING, R),
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
        { videoAssetType: D, videoAsset: T, hlsRef: S, hls: v, onFirstChunkLoaded: _ ? x : d }
    );
}
