n.d(t, { A: () => S });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    a = n(397927),
    s = n(935649),
    o = n(847599),
    c = n(734057),
    _ = n(309010),
    E = n(849736),
    d = n(354583),
    u = n(366098),
    A = n(418208),
    T = n(985018),
    I = n(496447);
function N(e) {
    if (!e && (0, A.Cf)())
        return void s.A.showAgeVerificationGetStartedModal({ entryPoint: o.q1.STAGE_CHANNEL_RAISE_HAND });
    let t = _.A.getVoiceChannelId();
    if (null == t) return;
    let n = c.A.getChannel(t);
    null != n && (0, E.e7)(n, e);
}
function R(e) {
    let { channelId: t } = e,
        n = (0, u.D3)(t) ?? 0,
        l = (0, u.Xk)(t) ?? 0;
    return n > 0 && l > 0
        ? (0, i.jsx)("div", {
              className: I.Z5,
              children: (0, i.jsx)("div", { className: r()(I.qQ, I.lN), children: T.intl.string(T.t.xlJRfv) }),
          })
        : n > 0
          ? (0, i.jsx)("div", {
                className: I.Z5,
                children: (0, i.jsx)("div", { className: r()(I.qQ, I.lN), children: T.intl.string(T.t.WYad9Z) }),
            })
          : l > 0
            ? (0, i.jsx)("div", {
                  className: I.Z5,
                  children: (0, i.jsx)("div", { className: r()(I.qQ, I.lN), children: T.intl.string(T.t.eHq2OF) }),
              })
            : null;
}
function S() {
    let e = (0, d.A)();
    return null == e
        ? null
        : (0, i.jsxs)(a.$Td, {
              className: I.kL,
              color: a.Hv$.DEFAULT,
              children: [
                  T.intl.string(T.t.Ul1RJQ),
                  (0, i.jsx)(R, { channelId: e.id }),
                  (0, i.jsxs)(a.ButtonGroup, {
                      size: "sm",
                      className: I.GC,
                      children: [
                          (0, i.jsx)(a.Button, {
                              variant: "overlay-primary",
                              text: T.intl.string(T.t.MpO0px),
                              onClick: () => N(!1),
                          }),
                          (0, i.jsx)(a.Button, {
                              variant: "secondary",
                              onClick: () => N(!0),
                              text: T.intl.string(T.t["1YDv7a"]),
                          }),
                      ],
                  }),
              ],
          });
}
