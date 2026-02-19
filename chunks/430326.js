i.d(e, { default: () => O });
var c = i(627968),
    n = i(64700),
    a = i(158954),
    o = i(311907),
    s = i(397927),
    r = i(793574),
    l = i(688810),
    _ = i(607470),
    d = i(509536),
    u = i(987144),
    A = i(71393),
    p = i(954571),
    b = i(652215),
    E = i(985018),
    M = i(937660),
    I = i(773055),
    U = i(519636);
function O(t) {
    let {
            guildId: e,
            transitionState: i,
            onClose: O,
            showLearnMore: R = !0,
            analyticsLocation: T,
            sourceAnalyticsLocations: y,
            videoPlacement: D,
        } = t,
        L = (0, o.bG)([A.A], () => A.A.getGuild(e)),
        { analyticsLocations: f } = (0, l.Ay)(y, r.A.GUILD_POWERUPS_MARKETING_VIDEO_MODAL),
        [g, k] = n.useState(!1),
        m = n.useRef(!1),
        G = n.useMemo(
            () => ({
                guild_id: e,
                type: b.liQ.PREMIUM_GUILD_USER_MODAL,
                location_stack: f,
                location_section: T.section,
                location_object: T.object,
                video_placement: D,
            }),
            [T.object, T.section, f, e, D],
        ),
        j = n.useCallback(
            (t) => {
                let e = t.currentTarget.duration;
                m.current ||
                    ((m.current = !0),
                    p.default.track(b.HAw.BOOSTING_MARKETING_VIDEO_PLAYED, {
                        ...G,
                        ...(Number.isFinite(e) ? { video_duration_sec: e } : {}),
                    }));
            },
            [G],
        ),
        C = n.useCallback(
            (t) => {
                let e = t.currentTarget.currentTime,
                    i = t.currentTarget.duration;
                p.default.track(b.HAw.BOOSTING_MARKETING_VIDEO_COMPLETED, {
                    ...G,
                    ...(Number.isFinite(e) ? { seconds_played: e } : {}),
                    ...(Number.isFinite(i) ? { video_duration_sec: i } : {}),
                });
            },
            [G],
        );
    async function P() {
        null != L &&
            (k(!0),
            await (0, u.g)({
                analyticsLocations: f,
                analyticsLocation: {
                    page: b.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: b.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: b.ZSU.BUTTON_CTA,
                    objectType: b.AnalyticsObjectTypes.BUY,
                },
                guild: L,
                onClose: O,
            }),
            k(!1));
    }
    return (0, c.jsxs)(a.dWK, {
        size: "xxl",
        transitionState: i,
        onClose: O,
        children: [
            (0, c.jsx)(a.rQ0, { title: E.intl.string(E.t["0f1VCH"]) }),
            (0, c.jsx)(a.cwr, {
                children: (0, c.jsx)(_.A, {
                    className: M.K,
                    src: I.A,
                    poster: U.A,
                    controls: !0,
                    autoPlay: !0,
                    controlsList: "nodownload noremoteplayback noplaybackrate",
                    onPlay: j,
                    onEnded: C,
                    disablePictureInPicture: !0,
                }),
            }),
            (0, c.jsx)(a.H7u, {
                actions: [
                    ...(R
                        ? [
                              {
                                  variant: "secondary",
                                  size: "md",
                                  text: E.intl.string(E.t.hvVgAZ),
                                  onClick: function () {
                                      O(),
                                          (0, d.K)({
                                              guildId: e,
                                              location: {
                                                  section: b.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: b.ZSU.LEARN_MORE,
                                              },
                                          });
                                  },
                              },
                          ]
                        : []),
                    {
                        variant: "expressive",
                        size: "md",
                        icon: s._Jp,
                        text: E.intl.string(E.t.gKmQ1G),
                        onClick: P,
                        loading: g,
                    },
                ],
            }),
        ],
    });
}
