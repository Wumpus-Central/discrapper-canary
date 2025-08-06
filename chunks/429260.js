n.d(t, {
    ZP: () => v,
    eH: () => S,
    wY: () => T,
});
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(704215),
    a = n(481060),
    s = n(493773),
    l = n(377171),
    c = n(432877),
    u = n(266454),
    d = n(243778),
    f = n(726521),
    _ = n(993706),
    p = n(982168),
    h = n(216572),
    m = n(914010),
    g = n(594174),
    E = n(970257),
    b = n(921944),
    y = n(388032),
    O = n(130883);
function v(e) {
    let t = (0, i.e7)([m.Z], () => m.Z.getGuildId()),
        n = (0, h.Q_)(t);
    return (0, E.a4)(e)
        ? (0, r.jsx)(a.sNh, {
              id: "report",
              label: n ? y.intl.string(y.t.n5EBAA) : y.intl.string(y.t.GwbdGR),
              action: () => (0, f.ak)(e, "web_message_context_menu"),
              icon: n ? a.gw7 : a.U65,
              color: "danger",
          })
        : null;
}
function I() {
    return (0, r.jsx)(d.ZP, {
        contentTypes: [o.z.REPORT_TO_MOD_NEW_TAG],
        children: (e) => {
            let { visibleContent: t } = e;
            return t === o.z.REPORT_TO_MOD_NEW_TAG
                ? (0, r.jsx)(a.IGR, {
                      color: l.Z.BG_BRAND,
                      text: y.intl.string(y.t.y2b7CA),
                  })
                : (0, r.jsx)(a.U65, {
                      color: "currentColor",
                      size: "refresh_sm",
                  });
        },
    });
}
function T(e) {
    let t = (0, i.e7)([_.Z], () => _.Z.hasReportedMessage(e.channel_id, e.id)),
        n = (0, p.sP)(e);
    return ((0, s.zq)(() => {
        n && (0, u.Q3)(o.z.REPORT_TO_MOD_NEW_TAG, { dismissAction: b.L.AUTO_DISMISS });
    }),
    n)
        ? (0, r.jsx)(a.sNh, {
              id: "report-to-mod",
              label: t ? y.intl.string(O.default["8wsdnp"]) : y.intl.string(O.default["1D+vq6"]),
              action: () => {
                  (0, u.Q3)(o.z.REPORT_TO_MOD_NEW_TAG, { dismissAction: b.L.USER_DISMISS }), (0, f.tV)(e);
              },
              icon: (0, r.jsx)(I, {}),
              disabled: t,
          })
        : null;
}
function S(e) {
    let t = (0, i.e7)([c.ZP], () => c.ZP.get("iar_testing")),
        n = (0, i.e7)([g.default], () => g.default.getCurrentUser());
    return (0, E.a4)(e) && null != n && n.isStaff() && t
        ? (0, r.jsx)(a.sNh, {
              id: "staff-test-message-report",
              label: "[STAFF] Test Message Report",
              action: () => (0, f.Jw)(e, "web_message_context_menu"),
              icon: a.U65,
              color: "danger",
          })
        : null;
}
