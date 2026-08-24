t.d(n, { RQ: () => g, dA: () => x });
var l = t(477900);
t(582128);
var i = t(284009),
    a = t.n(i),
    s = t(17928),
    r = t(477782);
t(198052), t(666328), t(422229), t(74329), t(956747);
var o = t(288104),
    c = t(661504),
    u = t(267102),
    d = t(769591),
    A = t(734057),
    m = t(576705),
    h = t(993838),
    C = t(233993),
    E = t(446600),
    f = t(418208);
t(806931);
var p = t(375708);
function g(e) {
    let n = (0, s.bG)([A.A], () => A.A.getChannel(e), [e]),
        t = (0, s.bG)([m.A], () => m.A.can(C.QY, n)),
        i = (0, f.zU)(),
        a = (0, s.bG)([E.A], () => E.A.getStageInstanceByChannel(e), [e]),
        o = (0, u.Us)();
    return n?.isGuildStageVoice() && t && !i
        ? null != a
            ? (0, l.jsx)(r.Dr, {
                  id: "edit-stage",
                  label: p.intl.string(p.t["I+9bLx"]),
                  action: function () {
                      null != n && (0, h.tQ)(n, o);
                  },
              })
            : (0, l.jsx)(r.Dr, {
                  id: "start-stage",
                  label: p.intl.string(p.t.OYbHfv),
                  action: function () {
                      null != n && (0, h.tQ)(n, o);
                  },
              })
        : null;
}
function x(e) {
    let n = (0, s.bG)([A.A], () => A.A.getChannel(e), [e]);
    a()(null != n, "useNotificationSettingsItem: channel cannot be undefined");
    let t = (0, d.os)("StageChannelCallOverflowMenu"),
        l = (0, c.Ay)(n),
        i = (0, o.A)(n);
    return t ? l : i;
}
