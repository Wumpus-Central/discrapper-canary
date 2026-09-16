t.d(n, { RQ: () => f, dA: () => E });
var i = t(477900);
t(582128);
var l = t(284009),
    a = t.n(l),
    s = t(17928),
    o = t(477782);
(t(198052), t(666328), t(422229), t(74329), t(956747));
var r = t(288104),
    c = t(661504),
    u = t(267102),
    d = t(769591),
    A = t(734057),
    m = t(576705),
    h = t(993838),
    C = t(233993),
    p = t(446600),
    x = t(418208);
t(806931);
var g = t(375708);
function f(e) {
    let n = (0, s.bG)([A.A], () => A.A.getChannel(e), [e]),
        t = (0, s.bG)([m.A], () => m.A.can(C.QY, n)),
        l = (0, x.zU)(),
        a = (0, s.bG)([p.A], () => p.A.getStageInstanceByChannel(e), [e]),
        r = (0, u.Us)();
    return n?.isGuildStageVoice() && t && !l
        ? null != a
            ? (0, i.jsx)(o.Dr, {
                  id: "edit-stage",
                  label: g.intl.string(g.t["I+9bLx"]),
                  action: function () {
                      null != n && (0, h.tQ)(n, r);
                  },
              })
            : (0, i.jsx)(o.Dr, {
                  id: "start-stage",
                  label: g.intl.string(g.t.OYbHfv),
                  action: function () {
                      null != n && (0, h.tQ)(n, r);
                  },
              })
        : null;
}
function E(e) {
    let n = (0, s.bG)([A.A], () => A.A.getChannel(e), [e]);
    a()(null != n, "useNotificationSettingsItem: channel cannot be undefined");
    let t = (0, d.os)("StageChannelCallOverflowMenu"),
        i = (0, c.Ay)(n),
        l = (0, r.A)(n);
    return t ? i : l;
}
