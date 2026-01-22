n.d(t, { A: () => b });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(935649),
    l = n(847599),
    c = n(734057),
    u = n(309010),
    d = n(849736),
    f = n(354583),
    p = n(366098),
    _ = n(418208),
    h = n(985018),
    m = n(496447);
function g(e) {
    if (!e && (0, _.Cf)())
        return void o.A.showAgeVerificationGetStartedModal({ entryPoint: l.q1.STAGE_CHANNEL_RAISE_HAND });
    let t = u.A.getVoiceChannelId();
    if (null == t) return;
    let n = c.A.getChannel(t);
    null != n && (0, d.e7)(n, e);
}
function E(e) {
    var t, n;
    let { channelId: i } = e,
        s = null != (t = (0, p.D3)(i)) ? t : 0,
        o = null != (n = (0, p.Xk)(i)) ? n : 0;
    return s > 0 && o > 0
        ? (0, r.jsx)("div", {
              className: m.Z5,
              children: (0, r.jsx)("div", {
                  className: a()(m.qQ, m.lN),
                  children: h.intl.string(h.t.xlJRfv),
              }),
          })
        : s > 0
          ? (0, r.jsx)("div", {
                className: m.Z5,
                children: (0, r.jsx)("div", {
                    className: a()(m.qQ, m.lN),
                    children: h.intl.string(h.t.WYad9Z),
                }),
            })
          : o > 0
            ? (0, r.jsx)("div", {
                  className: m.Z5,
                  children: (0, r.jsx)("div", {
                      className: a()(m.qQ, m.lN),
                      children: h.intl.string(h.t.eHq2OF),
                  }),
              })
            : null;
}
function b() {
    let e = (0, f.A)();
    return null == e
        ? null
        : (0, r.jsxs)(s.$Td, {
              className: m.kL,
              color: s.Hv$.DEFAULT,
              children: [
                  h.intl.string(h.t.Ul1RJQ),
                  (0, r.jsx)(E, { channelId: e.id }),
                  (0, r.jsxs)(s.ButtonGroup, {
                      size: "sm",
                      className: m.GC,
                      children: [
                          (0, r.jsx)(s.Button, {
                              variant: "overlay-primary",
                              text: h.intl.string(h.t.MpO0px),
                              onClick: () => g(!1),
                          }),
                          (0, r.jsx)(s.Button, {
                              variant: "secondary",
                              onClick: () => g(!0),
                              text: h.intl.string(h.t["1YDv7a"]),
                          }),
                      ],
                  }),
              ],
          });
}
