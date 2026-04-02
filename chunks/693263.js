t.d(n, { A: () => f, C: () => C });
var l = t(627968);
t(64700);
var i = t(503698),
    s = t.n(i),
    a = t(554146),
    r = t(397927),
    d = t(826673),
    c = t(367727),
    o = t(997509),
    u = t(307879),
    _ = t(395504),
    h = t(652215),
    x = t(49999),
    m = t(985018),
    g = t(199699),
    A = t(529732);
function C(e) {
    return (0, _.Xn)(e) ? 250 : 152;
}
function f(e) {
    let { guild: n } = e,
        t = (0, _.Xn)(n.id),
        i = (0, d.JZ)(a.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
        C = t && !i ? a.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : a.M.CHANNEL_BROWSER_NUX;
    (0, c.Vh)(C);
    let f = t
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(r.Heading, {
                              className: g.R_,
                              color: "always-white",
                              variant: "heading-lg/semibold",
                              children: m.intl.string(m.t.AalzkJ),
                          }),
                          (0, l.jsx)(r.Text, {
                              className: g.h_,
                              variant: "text-md/normal",
                              color: "always-white",
                              children: m.intl.string(m.t.CXh95Z),
                          }),
                          (0, l.jsx)(r.Button, {
                              variant: "overlay-primary",
                              onClick: () => {
                                  o.A.open(n.id, h.BEX.ONBOARDING), (0, d.Dr)(C, { dismissAction: x.i.PRIMARY });
                              },
                              text: m.intl.string(m.t["+OtO4e"]),
                          }),
                      ],
                  }),
                  (0, l.jsx)(u.M, { isTooltip: !0 }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: g.FQ,
              children: [
                  (0, l.jsx)("img", { width: 180, className: g.Sl, src: A, alt: "", "aria-hidden": !0 }),
                  (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(r.Heading, {
                              className: g.R_,
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              children: m.intl.string(m.t.utqWEC),
                          }),
                          (0, l.jsx)(r.Text, {
                              variant: "text-md/normal",
                              color: "text-default",
                              children: m.intl.string(m.t["+9etcM"]),
                          }),
                          (0, l.jsx)(r.Text, {
                              className: g.uN,
                              variant: "text-md/normal",
                              color: "text-default",
                              children: m.intl.format(m.t.Z0axjk, {}),
                          }),
                      ],
                  }),
              ],
          });
    return (0, l.jsxs)("div", {
        className: s()(g.kL, { [g.xY]: t }),
        children: [
            (0, l.jsx)(r.DUT, {
                className: g.b,
                onClick: () => {
                    (0, d.Dr)(C, { dismissAction: x.i.DISMISS });
                },
                children: (0, l.jsx)(r.PGe, { size: "md", color: "currentColor" }),
            }),
            f,
        ],
    });
}
