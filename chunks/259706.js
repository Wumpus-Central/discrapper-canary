n.d(t, { e: () => _ });
var r = n(54381);
n(473749);
var i = n(873546),
    s = n(271579),
    l = n(756647),
    a = n(970683),
    o = n(481060),
    c = n(703656),
    u = n(314897),
    d = n(626135),
    h = n(954824),
    g = n(981631),
    p = n(388032),
    m = n(457570),
    f = n(74830);
function _(e) {
    let { token: t, hasError: n, errorReason: _ } = e;
    return n
        ? (0, r.jsxs)("div", {
              className: m.page,
              children: [
                  (0, r.jsx)("div", {
                      className: m.logoContainer,
                      children: (0, r.jsx)("img", {
                          src: f,
                          alt: "",
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: m.content,
                      children: [
                          (0, r.jsx)(a.SM, { alt: "" }),
                          (0, r.jsx)(o.Heading, {
                              variant: "heading-lg/semibold",
                              className: m.headingText,
                              children: p.intl.string(p.t.RtCSr1),
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: "text-md/normal",
                              className: m.bodyText,
                              children: p.intl.string(p.t["S+YjYJ"]),
                          }),
                          (0, r.jsx)(o.Button, {
                              variant: "primary",
                              text: p.intl.string(p.t.j3cG2p),
                              fullWidth: !0,
                              onClick: () => {
                                  d.default.track(g.rMx.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: _ }),
                                      (0, c.uL)(g.Z5c.LOGIN);
                              },
                          }),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: m.page,
              children: [
                  (0, r.jsx)("div", {
                      className: m.logoContainer,
                      children: (0, r.jsx)("img", {
                          src: f,
                          alt: "",
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: m.content,
                      children: [
                          (0, r.jsx)(a.SM, { alt: "" }),
                          (0, r.jsx)(o.Heading, {
                              variant: "heading-lg/semibold",
                              className: m.headingText,
                              children: p.intl.string(p.t["9h/0Rl"]),
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: "text-md/normal",
                              className: m.bodyText,
                              children: p.intl.string(p.t.Wgm7Om),
                          }),
                          (0, r.jsx)(o.Button, {
                              variant: "primary",
                              text: p.intl.string(p.t.NydsTd),
                              fullWidth: !0,
                              onClick: () => {
                                  var e;
                                  let n = (function (e) {
                                          var t;
                                          let n = null == (t = platform.os) ? void 0 : t.family;
                                          if ("Android" === n || "iOS" === n) {
                                              let t = u.default.getFingerprint(),
                                                  n = (0, s.WS)(),
                                                  r = ""
                                                      .concat(location.protocol, "//")
                                                      .concat(
                                                          window.GLOBAL_ENV.WEBAPP_ENDPOINT,
                                                          "/login/one-time?token=",
                                                      )
                                                      .concat(e);
                                              return (0, s.ZP)(r, {
                                                  utmSource: "one-time-login",
                                                  fingerprint: t,
                                                  attemptId: n,
                                              });
                                          }
                                          return "discord://";
                                      })(t),
                                      r = (0, s.zS)(n);
                                  d.default.track(g.rMx.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                                      detection_type: "mobile_button_clicked",
                                      device_type: i.tq ? "mobile" : "tablet",
                                      platform: null == (e = d.default.getSuperProperties()) ? void 0 : e.os,
                                  }),
                                      null != r &&
                                          d.default.track(g.rMx.DEEP_LINK_CLICKED, {
                                              fingerprint: (0, l.K)(r.fingerprint),
                                              attempt_id: r.attemptId,
                                              source: r.utmSource,
                                          }),
                                      h.Z.launch(n, (e) => {
                                          e || (0, c.dL)({ pathname: g.Z5c.LOGIN });
                                      });
                              },
                          }),
                      ],
                  }),
              ],
          });
}
