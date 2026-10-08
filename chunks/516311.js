t.d(n, { RQ: () => x, dA: () => g });
var l = t(477900);
t(582128);
var i = t(284009),
    a = t.n(i),
    s = t(17928),
    o = t(477782);
(t(198052), t(666328), t(422229), t(74329), t(956747));
var r = t(288104),
    c = t(267102),
    u = t(734057),
    d = t(576705),
    A = t(993838),
    h = t(233993),
    m = t(446600),
    C = t(418208);
t(806931);
var p = t(660183);
function x(e) {
    let n = (0, s.bG)([u.A], () => u.A.getChannel(e), [e]),
        t = (0, s.bG)([d.A], () => d.A.can(h.QY, n)),
        i = (0, C.zU)(),
        a = (0, s.bG)([m.A], () => m.A.getStageInstanceByChannel(e), [e]),
        r = (0, c.Us)();
    return n?.isGuildStageVoice() && t && !i
        ? null != a
            ? (0, l.jsx)(o.Dr, {
                  id: "edit-stage",
                  label: p.intl.string(p.t["I+9bLx"]),
                  action: function () {
                      null != n && (0, A.tQ)(n, r);
                  },
              })
            : (0, l.jsx)(o.Dr, {
                  id: "start-stage",
                  label: p.intl.string(p.t.OYbHfv),
                  action: function () {
                      null != n && (0, A.tQ)(n, r);
                  },
              })
        : null;
}
function g(e) {
    let n = (0, s.bG)([u.A], () => u.A.getChannel(e), [e]);
    return (a()(null != n, "useNotificationSettingsItem: channel cannot be undefined"), (0, r.A)(n));
}
