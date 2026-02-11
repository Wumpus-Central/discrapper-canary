"use strict";
n.d(t, { A: () => f });
var r = n(64700),
    i = n(771253),
    a = n(412703),
    s = n(902173),
    o = n(579473),
    l = n(717415),
    u = n(652215);
let c = new Set([u.NKC.FIVE_G, u.NKC.FOUR_G, u.NKC.UNKNOWN]),
    d = 8e5;
function _(e, t, n) {
    return i.Ay.isSupported() && null != e.videoHls
        ? o.fY.VIDEO_PLAYER_VIDEO_HLS
        : n
          ? null
          : c.has(t) || null == e.videoLowRes
            ? o.fY.VIDEO_PLAYER_VIDEO
            : o.fY.VIDEO_PLAYER_VIDEO_LOW_RES;
}
function f(e, t, n, u) {
    let { quest: c } = r.useContext(l.VideoQuestModalContext),
        { questConfig: f } = r.useContext(l.VideoQuestConfigContext),
        h = r.useRef(!1),
        p = r.useRef(null),
        g = f.taskConfigV2.tasks[a.n.WATCH_VIDEO]?.assets,
        E = r.useMemo(() => f.features.includes(s.L.FULL_EPISODE_VIDEO_QUEST), [f.features]),
        A = r.useMemo(() => (null != g ? _(g, t, E) : null), [g, t, E]),
        I = r.useMemo(
            () =>
                null != u
                    ? { url: u, mimetype: "video/mp4", isAnimated: !0 }
                    : null != A
                      ? (0, o.tW)(c, A, void 0, !1)
                      : null,
            [c, A, u],
        ),
        T = () => {
            null != p.current && p.current.config.minAutoBitrate !== d && (p.current.config.minAutoBitrate = d);
        },
        y = r.useCallback(() => {
            null != p.current && (p.current.config.minAutoBitrate = d);
        }, []);
    return (
        r.useEffect(() => {
            if (A !== o.fY.VIDEO_PLAYER_VIDEO_HLS || null == I || null == e.current || h.current) return;
            (p.current = new i.Ay({
                backBufferLength: 20,
                maxBufferLength: 30,
                startPosition: n,
                startFragPrefetch: !0,
                startLevel: -1,
            })),
                p.current.on(i.Ay.Events.FRAG_LOADING, T),
                p.current.loadSource(I.url),
                p.current.attachMedia(e.current),
                (h.current = !0);
            let t = p.current;
            return () => {
                null != t && t.off(i.Ay.Events.FRAG_LOADING, T);
            };
        }, [I, A, e, n]),
        { videoAssetType: A, videoAsset: I, hlsRef: p, onFirstChunkLoaded: y }
    );
}
