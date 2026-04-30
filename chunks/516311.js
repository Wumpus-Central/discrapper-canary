t.d(n, { RQ: () => x, dA: () => I });
var l = t(627968);
t(64700);
var i = t(284009),
    s = t.n(i),
    a = t(17928),
    r = t(477782);
t(313961), t(286710), t(422229), t(74329), t(956747);
var o = t(288104),
    c = t(661504),
    u = t(267102),
    d = t(769591),
    A = t(734057),
    h = t(576705),
    m = t(993838),
    C = t(233993),
    E = t(446600),
    p = t(418208);
t(806931);
var g = t(375708);
function x(e) {
    let n = (0, a.bG)([A.A], () => A.A.getChannel(e), [e]),
        t = (0, a.bG)([h.A], () => h.A.can(C.QY, n)),
        i = (0, p.zU)(),
        s = (0, a.bG)([E.A], () => E.A.getStageInstanceByChannel(e), [e]),
        o = (0, u.Us)();
    return n?.isGuildStageVoice() && t && !i
        ? null != s
            ? (0, l.jsx)(r.Dr, {
                  id: "edit-stage",
                  label: g.intl.string(g.t["I+9bLx"]),
                  action: () => {
                      null != n && (0, m.tQ)(n, o);
                  },
              })
            : (0, l.jsx)(r.Dr, {
                  id: "start-stage",
                  label: g.intl.string(g.t.OYbHfv),
                  action: () => {
                      null != n && (0, m.tQ)(n, o);
                  },
              })
        : null;
}
function I(e) {
    let n = (0, a.bG)([A.A], () => A.A.getChannel(e), [e]);
    s()(null != n, "useNotificationSettingsItem: channel cannot be undefined");
    let t = (0, d.os)("StageChannelCallOverflowMenu"),
        l = (0, c.Ay)(n),
        i = (0, o.A)(n);
    return t ? l : i;
}
