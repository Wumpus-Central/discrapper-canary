"use strict";
n.d(t, { RQ: () => x, dA: () => C });
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    r = n(311907),
    a = n(397927);
n(313961), n(666328), n(734337), n(74329), n(956747);
var o = n(288104),
    c = n(661504),
    d = n(267102),
    u = n(769591),
    h = n(734057),
    A = n(576705),
    p = n(993838),
    g = n(233993),
    m = n(446600),
    _ = n(418208);
n(806931);
var f = n(985018);
function x(e) {
    let t = (0, r.bG)([h.A], () => h.A.getChannel(e), [e]),
        n = (0, r.bG)([A.A], () => A.A.can(g.QY, t)),
        s = (0, _.zU)(),
        l = (0, r.bG)([m.A], () => m.A.getStageInstanceByChannel(e), [e]),
        o = (0, d.Us)();
    return t?.isGuildStageVoice() && n && !s
        ? null != l
            ? (0, i.jsx)(a.Drp, {
                  id: "edit-stage",
                  label: f.intl.string(f.t["I+9bLx"]),
                  action: () => {
                      null != t && (0, p.tQ)(t, o);
                  },
              })
            : (0, i.jsx)(a.Drp, {
                  id: "start-stage",
                  label: f.intl.string(f.t.OYbHfv),
                  action: () => {
                      null != t && (0, p.tQ)(t, o);
                  },
              })
        : null;
}
function C(e) {
    let t = (0, r.bG)([h.A], () => h.A.getChannel(e), [e]);
    l()(null != t, "useNotificationSettingsItem: channel cannot be undefined");
    let n = (0, u.os)("StageChannelCallOverflowMenu"),
        i = (0, c.Ay)(t),
        s = (0, o.A)(t);
    return n ? i : s;
}
