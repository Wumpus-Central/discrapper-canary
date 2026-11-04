(t.r(a), t(323874), t(14289), t(35956));
var i = t(477900);
t(582128);
var r = t(862482),
    n = t(834730),
    s = t(534514),
    o = t(77468),
    l = t(573648),
    c = t(114716),
    d = t(321987),
    w = t(950198),
    m = t(792996),
    u = t(8588);
let p = (0, c.C)(function (e) {
    let { match: a } = e,
        t = a.params.type,
        c = l.A.get(t);
    return null == c
        ? (0, i.jsx)(d.$, {
              children: (0, i.jsx)(n.E, {
                  className: u.z3,
                  variant: "body-md/normal",
                  color: "text-feedback-warning",
                  children: m.intl.string(m.t.WLDKSb),
              }),
          })
        : (0, i.jsx)(d.$, {
              wrapperClassName: u.iE,
              children: (0, i.jsxs)("div", {
                  className: u.zr,
                  children: [
                      (0, i.jsx)(w.Jq, { className: u.ry, platform: c }),
                      (0, i.jsx)(s.D, {
                          variant: "body-lg/semibold",
                          className: u.wx,
                          children: m.intl.format(m.t.Pw4vee, { provider: c.name }),
                      }),
                      (0, i.jsx)(n.E, {
                          variant: "body-md/normal",
                          className: u.rf,
                          children: m.intl.format(m.t.rHlSVB, { provider: c.name }),
                      }),
                      (0, i.jsx)(r.$n, {
                          size: r.$n.Sizes.LARGE,
                          color: r.$n.Colors.BRAND,
                          onClick: async function () {
                              let e = new URLSearchParams(window.location.search),
                                  { body: a } = await o.A.authorize(t, {
                                      location: "Connection Intermediate",
                                      twoWayLink:
                                          null != e.get("two_way_link") ? "true" === e.get("two_way_link") : void 0,
                                      twoWayLinkType: e.get("two_way_link_type") ?? void 0,
                                      userCode: e.get("two_way_user_code") ?? void 0,
                                      successRedirect: e.get("success_redirect") ?? void 0,
                                  });
                              window.location = a.url;
                          },
                          children: m.intl.string(m.t["+NJGEj"]),
                      }),
                  ],
              }),
          });
});
t.d(a, {}, { default: p });
