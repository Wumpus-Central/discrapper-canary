n.d(t, { A: () => f, C: () => C });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(554146),
    r = n(397927),
    d = n(826673),
    c = n(367727),
    o = n(997509),
    u = n(307879),
    _ = n(395504),
    h = n(652215),
    x = n(49999),
    m = n(985018),
    A = n(199699),
    g = n(529732);
function C(e) {
    return (0, _.Xn)(e) ? 250 : 152;
}
function f(e) {
    let { guild: t } = e,
        n = (0, _.Xn)(t.id),
        i = (0, d.JZ)(a.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL),
        C = n && !i ? a.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : a.M.CHANNEL_BROWSER_NUX;
    (0, c.Vh)(C);
    let f = n
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(r.Heading, {
                              className: A.R_,
                              color: "always-white",
                              variant: "heading-lg/semibold",
                              children: m.intl.string(m.t.AalzkJ),
                          }),
                          (0, l.jsx)(r.Text, {
                              className: A.h_,
                              variant: "text-md/normal",
                              color: "always-white",
                              children: m.intl.string(m.t.CXh95Z),
                          }),
                          (0, l.jsx)(r.Button, {
                              variant: "overlay-primary",
                              onClick: () => {
                                  o.A.open(t.id, h.BEX.ONBOARDING), (0, d.Dr)(C, { dismissAction: x.i.PRIMARY });
                              },
                              text: m.intl.string(m.t["+OtO4e"]),
                          }),
                      ],
                  }),
                  (0, l.jsx)(u.M, { isTooltip: !0 }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: A.FQ,
              children: [
                  (0, l.jsx)("img", { width: 180, className: A.Sl, src: g, alt: "", "aria-hidden": !0 }),
                  (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(r.Heading, {
                              className: A.R_,
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
                              className: A.uN,
                              variant: "text-md/normal",
                              color: "text-default",
                              children: m.intl.format(m.t.Z0axjk, {}),
                          }),
                      ],
                  }),
              ],
          });
    return (0, l.jsxs)("div", {
        className: s()(A.kL, { [A.xY]: n }),
        children: [
            (0, l.jsx)(r.DUT, {
                className: A.b,
                onClick: () => {
                    (0, d.Dr)(C, { dismissAction: x.i.DISMISS });
                },
                children: (0, l.jsx)(r.PGe, { size: "md", color: "currentColor" }),
            }),
            f,
        ],
    });
}
