t.d(n, { RQ: () => E, dA: () => v });
var l = t(627968);
t(64700);
var i = t(284009),
    a = t.n(i),
    s = t(311907),
    r = t(477782);
t(313961), t(666328), t(734337), t(74329), t(956747);
var o = t(288104),
    c = t(661504),
    u = t(267102),
    d = t(769591),
    A = t(734057),
    h = t(576705),
    p = t(993838),
    m = t(233993),
    g = t(446600),
    f = t(418208);
t(806931);
var C = t(985018);
function E(e) {
    let n = (0, s.bG)([A.A], () => A.A.getChannel(e), [e]),
        t = (0, s.bG)([h.A], () => h.A.can(m.QY, n)),
        i = (0, f.zU)(),
        a = (0, s.bG)([g.A], () => g.A.getStageInstanceByChannel(e), [e]),
        o = (0, u.Us)();
    return n?.isGuildStageVoice() && t && !i
        ? null != a
            ? (0, l.jsx)(r.Dr, {
                  id: "edit-stage",
                  label: C.intl.string(C.t["I+9bLx"]),
                  action: () => {
                      null != n && (0, p.tQ)(n, o);
                  },
              })
            : (0, l.jsx)(r.Dr, {
                  id: "start-stage",
                  label: C.intl.string(C.t.OYbHfv),
                  action: () => {
                      null != n && (0, p.tQ)(n, o);
                  },
              })
        : null;
}
function v(e) {
    let n = (0, s.bG)([A.A], () => A.A.getChannel(e), [e]);
    a()(null != n, "useNotificationSettingsItem: channel cannot be undefined");
    let t = (0, d.os)("StageChannelCallOverflowMenu"),
        l = (0, c.Ay)(n),
        i = (0, o.A)(n);
    return t ? l : i;
}
