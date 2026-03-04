"use strict";
n.d(t, { A: () => S });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    s = n(397927),
    a = n(935649),
    o = n(847599),
    E = n(734057),
    c = n(309010),
    _ = n(849736),
    d = n(354583),
    A = n(366098),
    u = n(418208),
    T = n(985018),
    I = n(496447);
function N(e) {
    if (!e && (0, u.Cf)())
        return void a.A.showAgeVerificationGetStartedModal({ entryPoint: o.q1.STAGE_CHANNEL_RAISE_HAND });
    let t = c.A.getVoiceChannelId();
    if (null == t) return;
    let n = E.A.getChannel(t);
    null != n && (0, _.e7)(n, e);
}
function R(e) {
    let { channelId: t } = e,
        n = (0, A.D3)(t) ?? 0,
        r = (0, A.Xk)(t) ?? 0;
    return n > 0 && r > 0
        ? (0, i.jsx)("div", {
              className: I.Z5,
              children: (0, i.jsx)("div", { className: l()(I.qQ, I.lN), children: T.intl.string(T.t.xlJRfv) }),
          })
        : n > 0
          ? (0, i.jsx)("div", {
                className: I.Z5,
                children: (0, i.jsx)("div", { className: l()(I.qQ, I.lN), children: T.intl.string(T.t.WYad9Z) }),
            })
          : r > 0
            ? (0, i.jsx)("div", {
                  className: I.Z5,
                  children: (0, i.jsx)("div", { className: l()(I.qQ, I.lN), children: T.intl.string(T.t.eHq2OF) }),
              })
            : null;
}
function S() {
    let e = (0, d.A)();
    return null == e
        ? null
        : (0, i.jsxs)(s.$Td, {
              className: I.kL,
              color: s.Hv$.DEFAULT,
              children: [
                  T.intl.string(T.t.Ul1RJQ),
                  (0, i.jsx)(R, { channelId: e.id }),
                  (0, i.jsxs)(s.ButtonGroup, {
                      size: "sm",
                      className: I.GC,
                      children: [
                          (0, i.jsx)(s.Button, {
                              variant: "overlay-primary",
                              text: T.intl.string(T.t.MpO0px),
                              onClick: () => N(!1),
                          }),
                          (0, i.jsx)(s.Button, {
                              variant: "secondary",
                              onClick: () => N(!0),
                              text: T.intl.string(T.t["1YDv7a"]),
                          }),
                      ],
                  }),
              ],
          });
}
