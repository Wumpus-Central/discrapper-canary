n.d(t, {
    Z: () => C,
    q: () => x,
}),
    n(953529);
var a = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    i = n(704215),
    o = n(481060),
    c = n(266454),
    d = n(605236),
    s = n(434404),
    u = n(707076),
    b = n(398758),
    p = n(981631),
    f = n(921944),
    h = n(388032),
    m = n(408302),
    g = n(697611);
function x(e) {
    return (0, b.te)(e) ? 250 : 152;
}
function C(e) {
    let { guild: t } = e,
        n = (0, b.te)(t.id),
        r = (0, c.Nj)(i.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
        x = n && !r ? i.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : i.z.CHANNEL_BROWSER_NUX;
    (0, d.kk)(x);
    let C = n
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsxs)("div", {
                      children: [
                          (0, a.jsx)(o.Heading, {
                              className: m.heading,
                              color: "always-white",
                              variant: "heading-lg/semibold",
                              children: h.intl.string(h.t.AalzkJ),
                          }),
                          (0, a.jsx)(o.Text, {
                              className: m.description,
                              variant: "text-md/normal",
                              color: "always-white",
                              children: h.intl.string(h.t.CXh95Z),
                          }),
                          (0, a.jsx)(o.Button, {
                              variant: "overlay-primary",
                              onClick: () => {
                                  s.Z.open(t.id, p.pNK.ONBOARDING), (0, c.Q3)(x, { dismissAction: f.L.PRIMARY });
                              },
                              text: h.intl.string(h.t["+OtO4e"]),
                          }),
                      ],
                  }),
                  (0, a.jsx)(u.j, { isTooltip: !0 }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: m.nuxContent,
              children: [
                  (0, a.jsx)("img", {
                      width: 180,
                      className: m.image,
                      src: g,
                      alt: "",
                      "aria-hidden": !0,
                  }),
                  (0, a.jsxs)("div", {
                      children: [
                          (0, a.jsx)(o.Heading, {
                              className: m.heading,
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              children: h.intl.string(h.t.utqWEC),
                          }),
                          (0, a.jsx)(o.Text, {
                              variant: "text-md/normal",
                              color: "text-default",
                              children: h.intl.string(h.t["+9etcM"]),
                          }),
                          (0, a.jsx)(o.Text, {
                              className: m.tip,
                              variant: "text-md/normal",
                              color: "text-default",
                              children: h.intl.format(h.t.Z0axjk, {}),
                          }),
                      ],
                  }),
              ],
          });
    return (0, a.jsxs)("div", {
        className: l()(m.container, { [m.adminUpsell]: n }),
        children: [
            (0, a.jsx)(o.P3F, {
                className: m.closeButton,
                onClick: () => {
                    (0, c.Q3)(x, { dismissAction: f.L.DISMISS });
                },
                children: (0, a.jsx)(o.Dio, {
                    size: "md",
                    color: "currentColor",
                }),
            }),
            C,
        ],
    });
}
