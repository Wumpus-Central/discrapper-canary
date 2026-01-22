n.d(t, {
    RQ: () => y,
    dA: () => O,
});
var r = n(627968);
n(64700);
var l = n(284009),
    i = n.n(l),
    a = n(311907),
    s = n(397927);
n(313961), n(666328), n(734337), n(74329), n(956747);
var o = n(288104),
    c = n(661504),
    u = n(267102),
    d = n(769591),
    f = n(734057),
    p = n(576705),
    h = n(993838),
    b = n(233993),
    g = n(446600),
    m = n(418208);
n(806931);
var A = n(985018);

function y(e) {
    let t = (0, a.bG)([f.A], () => f.A.getChannel(e), [e]),
        n = (0, a.bG)([p.A], () => p.A.can(b.QY, t)),
        l = (0, m.zU)(),
        i = (0, a.bG)([g.A], () => g.A.getStageInstanceByChannel(e), [e]),
        o = (0, u.Us)();
    return (null == t ? void 0 : t.isGuildStageVoice()) && n && !l
        ? null != i
            ? (0, r.jsx)(s.Drp, {
                  id: "edit-stage",
                  label: A.intl.string(A.t["I+9bLx"]),
                  action: () => {
                      null != t && (0, h.tQ)(t, o);
                  },
              })
            : (0, r.jsx)(s.Drp, {
                  id: "start-stage",
                  label: A.intl.string(A.t.OYbHfv),
                  action: () => {
                      null != t && (0, h.tQ)(t, o);
                  },
              })
        : null;
}

function O(e) {
    let t = (0, a.bG)([f.A], () => f.A.getChannel(e), [e]);
    i()(null != t, "useNotificationSettingsItem: channel cannot be undefined");
    let n = (0, d.os)("StageChannelCallOverflowMenu"),
        r = (0, c.Ay)(t),
        l = (0, o.A)(t);
    return n ? r : l;
}
