n.d(t, { A: () => j });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(311907),
    r = n(397927),
    d = n(730134),
    o = n(169869),
    c = n(837057),
    u = n(310419),
    A = n(773669),
    x = n(427157),
    m = n(967198),
    p = n(183555),
    h = n(488995),
    f = n(985018),
    g = n(882119);
function I(e) {
    let { applicationRoleConnection: t, locale: n, onApplicationClicked: s, selectedGuildId: l } = e,
        a = (0, o.VW)(t, n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: g.k_,
                children:
                    null != t.application.bot
                        ? (0, i.jsx)(d.A, { user: new x.A(t.application.bot), size: r._3J.SIZE_16 })
                        : (0, i.jsx)(r._7Z, { color: "currentColor", size: "sm" }),
            }),
            (0, i.jsxs)("div", {
                className: g.Hd,
                children: [
                    (0, i.jsxs)(r.DUT, {
                        className: g.OB,
                        onClick: () => {
                            s?.(),
                                (0, c.transitionToGlobalDiscovery)({
                                    tab: h.GlobalDiscoveryTab.APPS,
                                    applicationId: t.application.id,
                                    newSessionState: {
                                        entrypoint: { name: u.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: l,
                                    },
                                });
                        },
                        children: [
                            null != t.platform_name
                                ? (0, i.jsx)(r.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: t.platform_name,
                                  })
                                : null,
                            null != t.platform_username
                                ? (0, i.jsx)(r.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: t.platform_username,
                                  })
                                : null,
                            (0, i.jsx)(r.Text, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: g.nk,
                                children: f.intl.format(f.t.zIT9YA, { applicationHook: () => t.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, i.jsx)("div", { className: g.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function j(e) {
    let { applicationRoleConnections: t, className: n, onClose: s } = e,
        { trackUserProfileAction: r } = (0, p.NJ)(),
        d = (0, a.bG)([A.default], () => A.default.locale),
        o = (0, a.bG)([m.A], () => m.A.getGuildId());
    return 0 === t.length
        ? null
        : (0, i.jsx)("ul", {
              className: l()(g.kL, n),
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "li",
                      {
                          className: g.FI,
                          children: (0, i.jsx)(I, {
                              applicationRoleConnection: e,
                              locale: d,
                              onApplicationClicked: () => {
                                  r({ action: "PRESS_APP_CONNECTION" }), s();
                              },
                              selectedGuildId: o ?? void 0,
                          }),
                      },
                      `${t}-${e.application.id}`,
                  ),
              ),
          });
}
