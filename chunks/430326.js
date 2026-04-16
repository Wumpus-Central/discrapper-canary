n.d(e, { default: () => y }), n(323874), n(14289), n(35956);
var i = n(627968),
    c = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    l = n(793574),
    r = n(688810),
    u = n(607470),
    d = n(987144),
    _ = n(773669),
    p = n(71393),
    b = n(954571),
    A = n(652215),
    U = n(985018),
    f = n(324111),
    L = n(773055),
    O = n(519636);
function y(t) {
    let {
            guildId: e,
            transitionState: y,
            onClose: E,
            analyticsLocation: M,
            sourceAnalyticsLocations: T,
            videoPlacement: R,
        } = t,
        g = (0, s.bG)([p.A], () => (null != e ? p.A.getGuild(e) : null)),
        I = (0, s.bG)([_.default], () => _.default.locale),
        k = (function (t) {
            let [e, n] = c.useState(void 0);
            return (
                c.useEffect(() => {
                    let e;
                    if (t.startsWith("en")) return;
                    let i = `https://${window.GLOBAL_ENV.CDN_HOST}/assets/boosting/marketing/captions/boosting_marketing_video_captions_${t}.vtt`,
                        c = !1;
                    return (
                        fetch(i)
                            .then((t) => {
                                if (t.ok) return t.text();
                            })
                            .then((t) => {
                                c || null == t || n((e = URL.createObjectURL(new Blob([t], { type: "text/vtt" }))));
                            })
                            .catch(() => {}),
                        () => {
                            (c = !0), null != e && URL.revokeObjectURL(e), n(void 0);
                        }
                    );
                }, [t]),
                e
            );
        })(I),
        { analyticsLocations: j } = (0, r.Ay)(T, l.A.GUILD_POWERUPS_MARKETING_VIDEO_MODAL),
        [D, m] = c.useState(!1),
        G = c.useRef(!1),
        h = c.useRef(null),
        x = c.useMemo(
            () => ({
                ...(null != e ? { guild_id: e } : {}),
                type: A.liQ.PREMIUM_GUILD_USER_MODAL,
                location_stack: j,
                location_section: M.section,
                location_object: M.object,
                video_placement: R,
            }),
            [M.object, M.section, j, e, R],
        ),
        C = c.useCallback(
            (t) => {
                let e = t.currentTarget.duration;
                G.current ||
                    ((G.current = !0),
                    b.default.track(A.HAw.BOOSTING_MARKETING_VIDEO_PLAYED, {
                        ...x,
                        ...(Number.isFinite(e) ? { video_duration_sec: e } : {}),
                    }));
            },
            [x],
        ),
        S = c.useCallback(
            (t) => {
                let e = t.currentTarget.currentTime,
                    n = t.currentTarget.duration;
                b.default.track(A.HAw.BOOSTING_MARKETING_VIDEO_COMPLETED, {
                    ...x,
                    ...(Number.isFinite(e) ? { seconds_played: e } : {}),
                    ...(Number.isFinite(n) ? { video_duration_sec: n } : {}),
                });
            },
            [x],
        );
    async function v() {
        null != g &&
            (h.current?.pause(),
            m(!0),
            await (0, d.g)({
                analyticsLocations: j,
                analyticsLocation: {
                    page: A.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: A.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: A.ZSU.BUTTON_CTA,
                    objectType: A.AnalyticsObjectTypes.BUY,
                },
                guild: g,
                onClose: E,
            }),
            m(!1));
    }
    async function N() {
        h.current?.pause(),
            await (0, o.mMO)(async () => {
                let { default: t } = await n.e("18710").then(n.bind(n, 770101));
                return (e) =>
                    (0, i.jsx)(t, {
                        ...e,
                        onSelectGuild: (t) => {
                            e.onClose(),
                                E(),
                                (0, d.g)({
                                    analyticsLocations: j,
                                    analyticsLocation: {
                                        page: A.liQ.PREMIUM_GUILD_USER_MODAL,
                                        section: A.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                        object: A.ZSU.BUTTON_CTA,
                                        objectType: A.AnalyticsObjectTypes.BUY,
                                    },
                                    guild: t,
                                });
                        },
                    });
            });
    }
    return (0, i.jsxs)(a.dWK, {
        size: "xxl",
        transitionState: y,
        onClose: E,
        children: [
            (0, i.jsx)(a.rQ0, { title: U.intl.string(U.t["0f1VCH"]) }),
            (0, i.jsx)(a.cwr, {
                children: (0, i.jsx)(u.A, {
                    ref: h,
                    className: f.K,
                    src: L.A,
                    poster: O.A,
                    controls: !0,
                    autoPlay: !0,
                    controlsList: "nodownload noremoteplayback noplaybackrate",
                    onPlay: C,
                    onEnded: S,
                    disablePictureInPicture: !0,
                    children: null != k && (0, i.jsx)("track", { src: k, kind: "captions", srcLang: I, default: !0 }),
                }),
            }),
            (0, i.jsx)(a.H7u, {
                actions: [
                    null != g
                        ? {
                              variant: "expressive",
                              size: "md",
                              icon: o._Jp,
                              text: U.intl.string(U.t.gKmQ1G),
                              onClick: v,
                              loading: D,
                          }
                        : { variant: "primary", size: "md", text: U.intl.string(U.t.BMx1iy), onClick: N },
                ],
            }),
        ],
    });
}
