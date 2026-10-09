t.d(n, { RQ: () => C, dA: () => f });
var i = t(477900);
t(582128);
var l = t(284009),
    s = t.n(l),
    a = t(17928),
    r = t(477782);
(t(198052), t(666328), t(422229), t(74329), t(956747));
var o = t(288104),
    c = t(267102),
    u = t(734057),
    d = t(576705),
    A = t(993838),
    h = t(233993),
    m = t(446600),
    g = t(418208);
t(806931);
var x = t(660183);
function C(e) {
    let n = (0, a.bG)([u.A], () => u.A.getChannel(e), [e]),
        t = (0, a.bG)([d.A], () => d.A.can(h.QY, n)),
        l = (0, g.zU)(),
        s = (0, a.bG)([m.A], () => m.A.getStageInstanceByChannel(e), [e]),
        o = (0, c.Us)();
    return n?.isGuildStageVoice() && t && !l
        ? null != s
            ? (0, i.jsx)(r.Dr, {
                  id: "edit-stage",
                  label: x.intl.string(x.t["I+9bLx"]),
                  action: function () {
                      null != n && (0, A.tQ)(n, o);
                  },
              })
            : (0, i.jsx)(r.Dr, {
                  id: "start-stage",
                  label: x.intl.string(x.t.OYbHfv),
                  action: function () {
                      null != n && (0, A.tQ)(n, o);
                  },
              })
        : null;
}
function f(e) {
    let n = (0, a.bG)([u.A], () => u.A.getChannel(e), [e]);
    return (s()(null != n, "useNotificationSettingsItem: channel cannot be undefined"), (0, o.A)(n));
}
