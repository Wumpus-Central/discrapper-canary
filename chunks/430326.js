n.d(e, { default: () => R }), n(323874), n(14289), n(35956);
var i = n(627968),
    a = n(64700),
    c = n(224640),
    s = n(20742),
    o = n(430993),
    l = n(696208),
    r = n(311907),
    u = n(192308),
    d = n(104510),
    _ = n(793574),
    p = n(688810),
    b = n(607470),
    A = n(987144),
    U = n(773669),
    f = n(71393),
    L = n(954571),
    y = n(652215),
    E = n(985018),
    M = n(33759),
    O = n(773055),
    T = n(519636);
function R(t) {
    let {
            guildId: e,
            transitionState: R,
            onClose: g,
            analyticsLocation: I,
            sourceAnalyticsLocations: k,
            videoPlacement: j,
        } = t,
        D = (0, r.bG)([f.A], () => (null != e ? f.A.getGuild(e) : null)),
        G = (0, r.bG)([U.default], () => U.default.locale),
        h = (function (t) {
            let [e, n] = a.useState(void 0);
            return (
                a.useEffect(() => {
                    let e;
                    if (t.startsWith("en")) return;
                    let i = `https://${window.GLOBAL_ENV.CDN_HOST}/assets/boosting/marketing/captions/boosting_marketing_video_captions_${t}.vtt`,
                        a = !1;
                    return (
                        fetch(i)
                            .then((t) => {
                                if (t.ok) return t.text();
                            })
                            .then((t) => {
                                a || null == t || n((e = URL.createObjectURL(new Blob([t], { type: "text/vtt" }))));
                            })
                            .catch(() => {}),
                        () => {
                            (a = !0), null != e && URL.revokeObjectURL(e), n(void 0);
                        }
                    );
                }, [t]),
                e
            );
        })(G),
        { analyticsLocations: m } = (0, p.Ay)(k, _.A.GUILD_POWERUPS_MARKETING_VIDEO_MODAL),
        [x, C] = a.useState(!1),
        S = a.useRef(!1),
        v = a.useRef(null),
        N = a.useMemo(
            () => ({
                ...(null != e ? { guild_id: e } : {}),
                type: y.liQ.PREMIUM_GUILD_USER_MODAL,
                location_stack: m,
                location_section: I.section,
                location_object: I.object,
                video_placement: j,
            }),
            [I.object, I.section, m, e, j],
        ),
        P = a.useCallback(
            (t) => {
                let e = t.currentTarget.duration;
                S.current ||
                    ((S.current = !0),
                    L.default.track(y.HAw.BOOSTING_MARKETING_VIDEO_PLAYED, {
                        ...N,
                        ...(Number.isFinite(e) ? { video_duration_sec: e } : {}),
                    }));
            },
            [N],
        ),
        w = a.useCallback(
            (t) => {
                let e = t.currentTarget.currentTime,
                    n = t.currentTarget.duration;
                L.default.track(y.HAw.BOOSTING_MARKETING_VIDEO_COMPLETED, {
                    ...N,
                    ...(Number.isFinite(e) ? { seconds_played: e } : {}),
                    ...(Number.isFinite(n) ? { video_duration_sec: n } : {}),
                });
            },
            [N],
        );
    async function B() {
        null != D &&
            (v.current?.pause(),
            C(!0),
            await (0, A.g)({
                analyticsLocations: m,
                analyticsLocation: {
                    page: y.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: y.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: y.ZSU.BUTTON_CTA,
                    objectType: y.AnalyticsObjectTypes.BUY,
                },
                guild: D,
                onClose: g,
            }),
            C(!1));
    }
    async function K() {
        v.current?.pause(),
            await (0, u.openModalLazy)(async () => {
                let { default: t } = await n.e("18710").then(n.bind(n, 770101));
                return (e) =>
                    (0, i.jsx)(t, {
                        ...e,
                        onSelectGuild: (t) => {
                            e.onClose(),
                                g(),
                                (0, A.g)({
                                    analyticsLocations: m,
                                    analyticsLocation: {
                                        page: y.liQ.PREMIUM_GUILD_USER_MODAL,
                                        section: y.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                        object: y.ZSU.BUTTON_CTA,
                                        objectType: y.AnalyticsObjectTypes.BUY,
                                    },
                                    guild: t,
                                });
                        },
                    });
            });
    }
    return (0, i.jsxs)(c.d, {
        size: "xxl",
        transitionState: R,
        onClose: g,
        children: [
            (0, i.jsx)(s.rQ, { title: E.intl.string(E.t["0f1VCH"]) }),
            (0, i.jsx)(o.c, {
                children: (0, i.jsx)(b.A, {
                    ref: v,
                    className: M.K,
                    src: O.A,
                    poster: T.A,
                    controls: !0,
                    autoPlay: !0,
                    controlsList: "nodownload noremoteplayback noplaybackrate",
                    onPlay: P,
                    onEnded: w,
                    disablePictureInPicture: !0,
                    children: null != h && (0, i.jsx)("track", { src: h, kind: "captions", srcLang: G, default: !0 }),
                }),
            }),
            (0, i.jsx)(l.H, {
                actions: [
                    null != D
                        ? {
                              variant: "expressive",
                              size: "md",
                              icon: d._,
                              text: E.intl.string(E.t.gKmQ1G),
                              onClick: B,
                              loading: x,
                          }
                        : { variant: "primary", size: "md", text: E.intl.string(E.t.BMx1iy), onClick: K },
                ],
            }),
        ],
    });
}
