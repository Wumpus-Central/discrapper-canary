"use strict";
n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r);
if (21552 == n.j) var s = n(417098);
if (21552 == n.j) var a = n(825484);
if (21552 == n.j) var o = n(821609);
var c = n(935649),
    u = n(847599),
    d = n(734057),
    _ = n(309010),
    E = n(849736),
    A = n(354583),
    m = n(366098),
    I = n(418208),
    T = n(985018),
    N = n(992262);
function g(e) {
    if (!e && (0, I.Cf)())
        return void c.A.showAgeVerificationGetStartedModal({ entryPoint: u.q1.STAGE_CHANNEL_RAISE_HAND });
    let t = _.A.getVoiceChannelId();
    if (null == t) return;
    let n = d.A.getChannel(t);
    null != n && (0, E.e7)(n, e);
}
function p(e) {
    let { channelId: t } = e,
        n = (0, m.D3)(t) ?? 0,
        r = (0, m.Xk)(t) ?? 0;
    return n > 0 && r > 0
        ? (0, i.jsx)("div", {
              className: N.Z5,
              children: (0, i.jsx)("div", { className: l()(N.qQ, N.lN), children: T.intl.string(T.t.xlJRfv) }),
          })
        : n > 0
          ? (0, i.jsx)("div", {
                className: N.Z5,
                children: (0, i.jsx)("div", { className: l()(N.qQ, N.lN), children: T.intl.string(T.t.WYad9Z) }),
            })
          : r > 0
            ? (0, i.jsx)("div", {
                  className: N.Z5,
                  children: (0, i.jsx)("div", { className: l()(N.qQ, N.lN), children: T.intl.string(T.t.eHq2OF) }),
              })
            : null;
}
function C() {
    let e = (0, A.A)();
    return null == e
        ? null
        : (0, i.jsxs)(s.$T, {
              className: N.kL,
              color: s.Hv.DEFAULT,
              children: [
                  T.intl.string(T.t.Ul1RJQ),
                  (0, i.jsx)(p, { channelId: e.id }),
                  (0, i.jsxs)(a.e, {
                      size: "sm",
                      className: N.GC,
                      children: [
                          (0, i.jsx)(o.$, {
                              variant: "overlay-primary",
                              text: T.intl.string(T.t.MpO0px),
                              onClick: () => g(!1),
                          }),
                          (0, i.jsx)(o.$, {
                              variant: "secondary",
                              onClick: () => g(!0),
                              text: T.intl.string(T.t["1YDv7a"]),
                          }),
                      ],
                  }),
              ],
          });
}
