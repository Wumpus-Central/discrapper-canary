c.d(e, { default: () => x });
var n = c(627968),
    s = c(64700),
    i = c(158954),
    a = c(311907),
    o = c(397927),
    l = c(688810),
    r = c(607470),
    d = c(509536),
    p = c(987144),
    _ = c(71393),
    A = c(652215),
    u = c(985018),
    b = c(937660),
    U = c(773055),
    y = c(519636);
function x(t) {
    let { guildId: e, transitionState: c, onClose: x, showLearnMore: f = !0 } = t,
        M = (0, a.bG)([_.A], () => _.A.getGuild(e)),
        { analyticsLocations: R } = (0, l.Ay)(),
        [g, h] = s.useState(!1);
    async function j() {
        null != M &&
            (h(!0),
            await (0, p.g)({
                analyticsLocations: R,
                analyticsLocation: {
                    page: A.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: A.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: A.ZSU.BUTTON_CTA,
                    objectType: A.AnalyticsObjectTypes.BUY,
                },
                guild: M,
                onClose: x,
            }),
            h(!1));
    }
    return (0, n.jsxs)(i.dWK, {
        size: "xxl",
        transitionState: c,
        onClose: x,
        children: [
            (0, n.jsx)(i.rQ0, { title: u.intl.string(u.t["0f1VCH"]) }),
            (0, n.jsx)(i.cwr, {
                children: (0, n.jsx)(r.A, {
                    className: b.K,
                    src: U.A,
                    poster: y.A,
                    controls: !0,
                    autoPlay: !0,
                    controlsList: "nodownload noremoteplayback noplaybackrate",
                    disablePictureInPicture: !0,
                }),
            }),
            (0, n.jsx)(i.H7u, {
                actions: [
                    ...(f
                        ? [
                              {
                                  variant: "secondary",
                                  size: "md",
                                  text: u.intl.string(u.t.hvVgAZ),
                                  onClick: function () {
                                      x(),
                                          (0, d.K)({
                                              guildId: e,
                                              location: {
                                                  section: A.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                                  object: A.ZSU.LEARN_MORE,
                                              },
                                          });
                                  },
                              },
                          ]
                        : []),
                    {
                        variant: "expressive",
                        size: "md",
                        icon: o._Jp,
                        text: u.intl.string(u.t.gKmQ1G),
                        onClick: j,
                        loading: g,
                    },
                ],
            }),
        ],
    });
}
