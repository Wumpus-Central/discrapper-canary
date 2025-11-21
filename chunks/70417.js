n.d(t, { Z: () => m }), n(388685);
var r = n(473749),
    o = n(713447),
    l = n(754700),
    i = n(937058),
    a = n(720293),
    s = n(215113),
    c = n(324805),
    u = n(981631);
let d = new Set([u.IyS.FIVE_G, u.IyS.FOUR_G, u.IyS.UNKNOWN]);
function m(e, t, n) {
    var u;
    let { quest: m } = r.useContext(s.VideoQuestModalContext),
        { questConfig: f } = r.useContext(s.VideoQuestConfigContext),
        p = r.useRef(!1),
        v = r.useRef(null),
        E = (0, i.z)(m, c.dr.VIDEO_MODAL),
        g = null == (u = f.taskConfigV2.tasks[l.X.WATCH_VIDEO]) ? void 0 : u.assets,
        O = r.useMemo(
            () =>
                null != g
                    ? E && o.ZP.isSupported() && null != g.videoHls
                        ? a.n1.VIDEO_HLS
                        : d.has(t) || null == g.videoLowRes
                          ? a.n1.VIDEO
                          : a.n1.VIDEO_LOW_RES
                    : null,
            [g, t, E],
        ),
        h = r.useMemo(() => (null != O ? (0, a.z0)(m, l.X.WATCH_VIDEO, O, a.O.VIDEO) : null), [m, O]),
        b = () => {
            null != v.current &&
                800000 !== v.current.config.minAutoBitrate &&
                (v.current.config.minAutoBitrate = 800000);
        },
        C = r.useCallback(() => {
            null != v.current && (v.current.config.minAutoBitrate = 800000);
        }, []);
    return (
        r.useEffect(() => {
            if (O !== a.n1.VIDEO_HLS || null == h || null == e.current || p.current) return;
            (v.current = new o.ZP({
                backBufferLength: 20,
                maxBufferLength: 30,
                startPosition: n,
                startFragPrefetch: !0,
                startLevel: -1,
            })),
                v.current.on(o.ZP.Events.FRAG_LOADING, b),
                v.current.loadSource(h.url),
                v.current.attachMedia(e.current),
                (p.current = !0);
            let t = v.current;
            return () => {
                null != t && t.off(o.ZP.Events.FRAG_LOADING, b);
            };
        }, [h, O, e, n]),
        {
            videoVariant: O,
            videoAsset: h,
            hlsRef: v,
            onFirstChunkLoaded: C,
        }
    );
}
