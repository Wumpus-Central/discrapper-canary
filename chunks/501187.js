"use strict";
n.d(t, { W: () => x });
var i = n(627968);
n(64700);
var s = n(607399),
    r = n(49485),
    l = n(80703),
    a = n(495822),
    o = n(534514),
    c = n(834730),
    d = n(821609),
    u = n(976860),
    _ = n(961350),
    h = n(954571),
    m = n(877062),
    p = n(652215),
    g = n(985018),
    A = n(611346),
    f = n(604880);
function x(e) {
    let { token: t, hasError: n, errorReason: x } = e;
    return n
        ? (0, i.jsxs)("div", {
              className: A.MY,
              children: [
                  (0, i.jsx)("div", { className: A.r$, children: (0, i.jsx)("img", { src: f, alt: "" }) }),
                  (0, i.jsxs)("div", {
                      className: A.Qs,
                      children: [
                          (0, i.jsx)(a.D, { alt: "" }),
                          (0, i.jsx)(o.D, {
                              variant: "heading-lg/semibold",
                              className: A.ky,
                              children: g.intl.string(g.t.RtCSr1),
                          }),
                          (0, i.jsx)(c.E, {
                              variant: "text-md/normal",
                              className: A.G3,
                              children: g.intl.string(g.t["S+YjYJ"]),
                          }),
                          (0, i.jsx)(d.$, {
                              variant: "primary",
                              text: g.intl.string(g.t.j3cG2p),
                              fullWidth: !0,
                              onClick: () => {
                                  h.default.track(p.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: x }),
                                      (0, u.pX)(p.BVt.LOGIN);
                              },
                          }),
                      ],
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: A.MY,
              children: [
                  (0, i.jsx)("div", { className: A.r$, children: (0, i.jsx)("img", { src: f, alt: "" }) }),
                  (0, i.jsxs)("div", {
                      className: A.Qs,
                      children: [
                          (0, i.jsx)(a.D, { alt: "" }),
                          (0, i.jsx)(o.D, {
                              variant: "heading-lg/semibold",
                              className: A.ky,
                              children: g.intl.string(g.t["9h/0Rl"]),
                          }),
                          (0, i.jsx)(c.E, {
                              variant: "text-md/normal",
                              className: A.G3,
                              children: g.intl.string(g.t.Wgm7Om),
                          }),
                          (0, i.jsx)(d.$, {
                              variant: "primary",
                              text: g.intl.string(g.t.NydsTd),
                              fullWidth: !0,
                              onClick: () => {
                                  let e, n;
                                  (e = (function (e) {
                                      let t = platform.os?.family;
                                      if ("Android" === t || "iOS" === t) {
                                          let t = _.default.getFingerprint(),
                                              n = (0, r.I_)(),
                                              i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/login/one-time?token=${e}`;
                                          return (0, r.Ay)(i, {
                                              utmSource: "one-time-login",
                                              fingerprint: t,
                                              attemptId: n,
                                          });
                                      }
                                      return "discord://";
                                  })(t)),
                                      (n = (0, r.X7)(e)),
                                      h.default.track(p.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                                          detection_type: "mobile_button_clicked",
                                          device_type: s.Fr ? "mobile" : "tablet",
                                          platform: h.default.getSuperProperties()?.os,
                                      }),
                                      null != n &&
                                          h.default.track(p.HAw.DEEP_LINK_CLICKED, {
                                              fingerprint: (0, l.v)(n.fingerprint),
                                              attempt_id: n.attemptId,
                                              source: n.utmSource,
                                          }),
                                      m.A.launch(e, (e) => {
                                          e || (0, u.bG)({ pathname: p.BVt.LOGIN });
                                      });
                              },
                          }),
                      ],
                  }),
              ],
          });
}
