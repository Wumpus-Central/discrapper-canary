t.d(n, {
    Z: () => b,
    q: () => x,
}),
    t(953529);
var r = t(54381);
t(473749);
var l = t(120356),
    i = t.n(l),
    a = t(704215),
    o = t(481060),
    s = t(266454),
    c = t(605236),
    d = t(434404),
    u = t(707076),
    p = t(398758),
    h = t(981631),
    m = t(921944),
    f = t(388032),
    g = t(63554),
    _ = t(697611);
function x(e) {
    return (0, p.te)(e) ? 250 : 152;
}
function b(e) {
    let { guild: n } = e,
        t = (0, p.te)(n.id),
        l = (0, s.Nj)(a.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
        x = t && !l ? a.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : a.z.CHANNEL_BROWSER_NUX;
    (0, c.kk)(x);
    let b = t
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(o.Heading, {
                              className: g.heading,
                              color: "always-white",
                              variant: "heading-lg/semibold",
                              children: f.intl.string(f.t.AalzkJ),
                          }),
                          (0, r.jsx)(o.Text, {
                              className: g.description,
                              variant: "text-md/normal",
                              color: "always-white",
                              children: f.intl.string(f.t.CXh95Z),
                          }),
                          (0, r.jsx)(o.Button, {
                              variant: "overlay-primary",
                              onClick: () => {
                                  d.Z.open(n.id, h.pNK.ONBOARDING), (0, s.Q3)(x, { dismissAction: m.L.PRIMARY });
                              },
                              text: f.intl.string(f.t["+OtO4e"]),
                          }),
                      ],
                  }),
                  (0, r.jsx)(u.j, { isTooltip: !0 }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: g.nuxContent,
              children: [
                  (0, r.jsx)("img", {
                      width: 180,
                      className: g.image,
                      src: _,
                      alt: "",
                      "aria-hidden": !0,
                  }),
                  (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(o.Heading, {
                              className: g.heading,
                              variant: "heading-lg/semibold",
                              color: "header-primary",
                              children: f.intl.string(f.t.utqWEC),
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: "text-md/normal",
                              color: "header-secondary",
                              children: f.intl.string(f.t["+9etcM"]),
                          }),
                          (0, r.jsx)(o.Text, {
                              className: g.tip,
                              variant: "text-md/normal",
                              color: "header-secondary",
                              children: f.intl.format(f.t.Z0axjk, {}),
                          }),
                      ],
                  }),
              ],
          });
    return (0, r.jsxs)("div", {
        className: i()(g.container, { [g.adminUpsell]: t }),
        children: [
            (0, r.jsx)(o.P3F, {
                className: g.closeButton,
                onClick: () => {
                    (0, s.Q3)(x, { dismissAction: m.L.DISMISS });
                },
                children: (0, r.jsx)(o.Dio, {
                    size: "md",
                    color: "currentColor",
                }),
            }),
            b,
        ],
    });
}
