n.d(t, { Z: () => d }), n(388685);
var r = n(473749),
    o = n(713447),
    l = n(754700),
    i = n(670081),
    a = n(475595),
    s = n(215113),
    c = n(981631);
let u = new Set([c.IyS.FIVE_G, c.IyS.FOUR_G, c.IyS.UNKNOWN]);
function d(e, t, n) {
    var c;
    let { quest: d } = r.useContext(s.VideoQuestModalContext),
        { questConfig: m } = r.useContext(s.VideoQuestConfigContext),
        f = r.useRef(!1),
        p = r.useRef(null),
        v = null == (c = m.taskConfigV2.tasks[l.X.WATCH_VIDEO]) ? void 0 : c.assets,
        g = r.useMemo(() => m.features.includes(i.S.FULL_EPISODE_VIDEO_QUEST), [m.features]),
        E = r.useMemo(
            () =>
                null != v
                    ? o.ZP.isSupported() && null != v.videoHls
                        ? a.eC.VIDEO_PLAYER_VIDEO_HLS
                        : g
                          ? null
                          : u.has(t) || null == v.videoLowRes
                            ? a.eC.VIDEO_PLAYER_VIDEO
                            : a.eC.VIDEO_PLAYER_VIDEO_LOW_RES
                    : null,
            [v, t, g],
        ),
        h = r.useMemo(() => (null != E ? (0, a.fh)(d, E, void 0, !1) : null), [d, E]),
        C = () => {
            null != p.current &&
                800000 !== p.current.config.minAutoBitrate &&
                (p.current.config.minAutoBitrate = 800000);
        },
        b = r.useCallback(() => {
            null != p.current && (p.current.config.minAutoBitrate = 800000);
        }, []);
    return (
        r.useEffect(() => {
            if (E !== a.eC.VIDEO_PLAYER_VIDEO_HLS || null == h || null == e.current || f.current) return;
            (p.current = new o.ZP({
                backBufferLength: 20,
                maxBufferLength: 30,
                startPosition: n,
                startFragPrefetch: !0,
                startLevel: -1,
            })),
                p.current.on(o.ZP.Events.FRAG_LOADING, C),
                p.current.loadSource(h.url),
                p.current.attachMedia(e.current),
                (f.current = !0);
            let t = p.current;
            return () => {
                null != t && t.off(o.ZP.Events.FRAG_LOADING, C);
            };
        }, [h, E, e, n]),
        {
            videoAssetType: E,
            videoAsset: h,
            hlsRef: p,
            onFirstChunkLoaded: b,
        }
    );
}
