n.d(e, { default: () => k }), n(323874), n(14289), n(35956);
var c = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    r = n(793574),
    l = n(688810),
    u = n(607470),
    d = n(987144),
    _ = n(773669),
    p = n(71393),
    b = n(954571),
    A = n(652215),
    f = n(985018),
    E = n(937660),
    L = n(773055),
    O = n(519636);
function k(t) {
    let {
            guildId: e,
            transitionState: n,
            onClose: k,
            analyticsLocation: U,
            sourceAnalyticsLocations: T,
            videoPlacement: g,
        } = t,
        I = (0, s.bG)([p.A], () => p.A.getGuild(e)),
        R = (0, s.bG)([_.default], () => _.default.locale),
        h = (function (t) {
            let [e, n] = i.useState(void 0);
            return (
                i.useEffect(() => {
                    let e;
                    if (t.startsWith("en")) return;
                    let c = `https://${window.GLOBAL_ENV.CDN_HOST}/assets/boosting/marketing/captions/boosting_marketing_video_captions_${t}.vtt`,
                        i = !1;
                    return (
                        fetch(c)
                            .then((t) => {
                                if (t.ok) return t.text();
                            })
                            .then((t) => {
                                i || null == t || n((e = URL.createObjectURL(new Blob([t], { type: "text/vtt" }))));
                            })
                            .catch(() => {}),
                        () => {
                            (i = !0), null != e && URL.revokeObjectURL(e), n(void 0);
                        }
                    );
                }, [t]),
                e
            );
        })(R),
        { analyticsLocations: M } = (0, l.Ay)(T, r.A.GUILD_POWERUPS_MARKETING_VIDEO_MODAL),
        [j, m] = i.useState(!1),
        y = i.useRef(!1),
        D = i.useMemo(
            () => ({
                guild_id: e,
                type: A.liQ.PREMIUM_GUILD_USER_MODAL,
                location_stack: M,
                location_section: U.section,
                location_object: U.object,
                video_placement: g,
            }),
            [U.object, U.section, M, e, g],
        ),
        G = i.useCallback(
            (t) => {
                let e = t.currentTarget.duration;
                y.current ||
                    ((y.current = !0),
                    b.default.track(A.HAw.BOOSTING_MARKETING_VIDEO_PLAYED, {
                        ...D,
                        ...(Number.isFinite(e) ? { video_duration_sec: e } : {}),
                    }));
            },
            [D],
        ),
        v = i.useCallback(
            (t) => {
                let e = t.currentTarget.currentTime,
                    n = t.currentTarget.duration;
                b.default.track(A.HAw.BOOSTING_MARKETING_VIDEO_COMPLETED, {
                    ...D,
                    ...(Number.isFinite(e) ? { seconds_played: e } : {}),
                    ...(Number.isFinite(n) ? { video_duration_sec: n } : {}),
                });
            },
            [D],
        );
    async function x() {
        null != I &&
            (m(!0),
            await (0, d.g)({
                analyticsLocations: M,
                analyticsLocation: {
                    page: A.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: A.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: A.ZSU.BUTTON_CTA,
                    objectType: A.AnalyticsObjectTypes.BUY,
                },
                guild: I,
                onClose: k,
            }),
            m(!1));
    }
    return (0, c.jsxs)(a.dWK, {
        size: "xxl",
        transitionState: n,
        onClose: k,
        children: [
            (0, c.jsx)(a.rQ0, { title: f.intl.string(f.t["0f1VCH"]) }),
            (0, c.jsx)(a.cwr, {
                children: (0, c.jsx)(u.A, {
                    className: E.K,
                    src: L.A,
                    poster: O.A,
                    controls: !0,
                    autoPlay: !0,
                    controlsList: "nodownload noremoteplayback noplaybackrate",
                    onPlay: G,
                    onEnded: v,
                    disablePictureInPicture: !0,
                    children: null != h && (0, c.jsx)("track", { src: h, kind: "captions", srcLang: R, default: !0 }),
                }),
            }),
            (0, c.jsx)(a.H7u, {
                actions: [
                    {
                        variant: "expressive",
                        size: "md",
                        icon: o._Jp,
                        text: f.intl.string(f.t.gKmQ1G),
                        onClick: x,
                        loading: j,
                    },
                ],
            }),
        ],
    });
}
