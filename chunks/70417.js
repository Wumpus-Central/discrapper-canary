n.d(t, { Z: () => u }), n(388685);
var r = n(473749),
    o = n(713447),
    l = n(754700),
    i = n(475595),
    a = n(215113),
    s = n(981631);
let c = new Set([s.IyS.FIVE_G, s.IyS.FOUR_G, s.IyS.UNKNOWN]);
function u(e, t, n) {
    var s;
    let { quest: u } = r.useContext(a.VideoQuestModalContext),
        { questConfig: d } = r.useContext(a.VideoQuestConfigContext),
        m = r.useRef(!1),
        f = r.useRef(null),
        p = null == (s = d.taskConfigV2.tasks[l.X.WATCH_VIDEO]) ? void 0 : s.assets,
        v = r.useMemo(
            () =>
                null != p
                    ? o.ZP.isSupported() && null != p.videoHls
                        ? i.eC.VIDEO_PLAYER_VIDEO_HLS
                        : c.has(t) || null == p.videoLowRes
                          ? i.eC.VIDEO_PLAYER_VIDEO
                          : i.eC.VIDEO_PLAYER_VIDEO_LOW_RES
                    : null,
            [p, t],
        ),
        E = r.useMemo(() => (null != v ? (0, i.fh)(u, v, void 0, !1) : null), [u, v]),
        g = () => {
            null != f.current &&
                800000 !== f.current.config.minAutoBitrate &&
                (f.current.config.minAutoBitrate = 800000);
        },
        O = r.useCallback(() => {
            null != f.current && (f.current.config.minAutoBitrate = 800000);
        }, []);
    return (
        r.useEffect(() => {
            if (v !== i.eC.VIDEO_PLAYER_VIDEO_HLS || null == E || null == e.current || m.current) return;
            (f.current = new o.ZP({
                backBufferLength: 20,
                maxBufferLength: 30,
                startPosition: n,
                startFragPrefetch: !0,
                startLevel: -1,
            })),
                f.current.on(o.ZP.Events.FRAG_LOADING, g),
                f.current.loadSource(E.url),
                f.current.attachMedia(e.current),
                (m.current = !0);
            let t = f.current;
            return () => {
                null != t && t.off(o.ZP.Events.FRAG_LOADING, g);
            };
        }, [E, v, e, n]),
        {
            videoAssetType: v,
            videoAsset: E,
            hlsRef: f,
            onFirstChunkLoaded: O,
        }
    );
}
