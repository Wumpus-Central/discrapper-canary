c.d(t, { default: () => M });
var i = c(627968),
    n = c(64700),
    a = c(158954),
    s = c(311907),
    o = c(397927),
    r = c(793574),
    l = c(688810),
    d = c(607470),
    _ = c(987144),
    u = c(71393),
    p = c(954571),
    A = c(652215),
    b = c(985018),
    E = c(937660),
    I = c(773055),
    T = c(519636);
function M(e) {
    let {
            guildId: t,
            transitionState: c,
            onClose: M,
            analyticsLocation: O,
            sourceAnalyticsLocations: U,
            videoPlacement: y,
        } = e,
        D = (0, s.bG)([u.A], () => u.A.getGuild(t)),
        { analyticsLocations: f } = (0, l.Ay)(U, r.A.GUILD_POWERUPS_MARKETING_VIDEO_MODAL),
        [k, m] = n.useState(!1),
        G = n.useRef(!1),
        L = n.useMemo(
            () => ({
                guild_id: t,
                type: A.liQ.PREMIUM_GUILD_USER_MODAL,
                location_stack: f,
                location_section: O.section,
                location_object: O.object,
                video_placement: y,
            }),
            [O.object, O.section, f, t, y],
        ),
        R = n.useCallback(
            (e) => {
                let t = e.currentTarget.duration;
                G.current ||
                    ((G.current = !0),
                    p.default.track(A.HAw.BOOSTING_MARKETING_VIDEO_PLAYED, {
                        ...L,
                        ...(Number.isFinite(t) ? { video_duration_sec: t } : {}),
                    }));
            },
            [L],
        ),
        g = n.useCallback(
            (e) => {
                let t = e.currentTarget.currentTime,
                    c = e.currentTarget.duration;
                p.default.track(A.HAw.BOOSTING_MARKETING_VIDEO_COMPLETED, {
                    ...L,
                    ...(Number.isFinite(t) ? { seconds_played: t } : {}),
                    ...(Number.isFinite(c) ? { video_duration_sec: c } : {}),
                });
            },
            [L],
        );
    async function j() {
        null != D &&
            (m(!0),
            await (0, _.g)({
                analyticsLocations: f,
                analyticsLocation: {
                    page: A.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: A.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: A.ZSU.BUTTON_CTA,
                    objectType: A.AnalyticsObjectTypes.BUY,
                },
                guild: D,
                onClose: M,
            }),
            m(!1));
    }
    return (0, i.jsxs)(a.dWK, {
        size: "xxl",
        transitionState: c,
        onClose: M,
        children: [
            (0, i.jsx)(a.rQ0, { title: b.intl.string(b.t["0f1VCH"]) }),
            (0, i.jsx)(a.cwr, {
                children: (0, i.jsx)(d.A, {
                    className: E.K,
                    src: I.A,
                    poster: T.A,
                    controls: !0,
                    autoPlay: !0,
                    controlsList: "nodownload noremoteplayback noplaybackrate",
                    onPlay: R,
                    onEnded: g,
                    disablePictureInPicture: !0,
                }),
            }),
            (0, i.jsx)(a.H7u, {
                actions: [
                    {
                        variant: "expressive",
                        size: "md",
                        icon: o._Jp,
                        text: b.intl.string(b.t.gKmQ1G),
                        onClick: j,
                        loading: k,
                    },
                ],
            }),
        ],
    });
}
