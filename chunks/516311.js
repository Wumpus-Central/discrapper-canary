n.d(t, { RQ: () => x, dA: () => E });
var i = n(627968);
n(64700);
var l = n(284009),
    s = n.n(l),
    a = n(311907),
    r = n(397927);
n(313961), n(666328), n(734337), n(74329), n(956747);
var o = n(288104),
    c = n(661504),
    d = n(267102),
    u = n(769591),
    h = n(734057),
    A = n(576705),
    _ = n(993838),
    m = n(233993),
    g = n(446600),
    p = n(418208);
n(806931);
var f = n(985018);
function x(e) {
    let t = (0, a.bG)([h.A], () => h.A.getChannel(e), [e]),
        n = (0, a.bG)([A.A], () => A.A.can(m.QY, t)),
        l = (0, p.zU)(),
        s = (0, a.bG)([g.A], () => g.A.getStageInstanceByChannel(e), [e]),
        o = (0, d.Us)();
    return t?.isGuildStageVoice() && n && !l
        ? null != s
            ? (0, i.jsx)(r.Drp, {
                  id: "edit-stage",
                  label: f.intl.string(f.t["I+9bLx"]),
                  action: () => {
                      null != t && (0, _.tQ)(t, o);
                  },
              })
            : (0, i.jsx)(r.Drp, {
                  id: "start-stage",
                  label: f.intl.string(f.t.OYbHfv),
                  action: () => {
                      null != t && (0, _.tQ)(t, o);
                  },
              })
        : null;
}
function E(e) {
    let t = (0, a.bG)([h.A], () => h.A.getChannel(e), [e]);
    s()(null != t, "useNotificationSettingsItem: channel cannot be undefined");
    let n = (0, u.os)("StageChannelCallOverflowMenu"),
        i = (0, c.Ay)(t),
        l = (0, o.A)(t);
    return n ? i : l;
}
