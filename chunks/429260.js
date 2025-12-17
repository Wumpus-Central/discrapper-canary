n.d(t, {
    ZP: () => S,
    eH: () => T,
    wY: () => P,
});
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(704215),
    o = n(692547),
    a = n(481060),
    c = n(493773),
    s = n(432877),
    u = n(266454),
    d = n(243778),
    f = n(726521),
    g = n(993706),
    b = n(982168),
    p = n(216572),
    O = n(914010),
    y = n(594174),
    m = n(970257),
    v = n(921944),
    h = n(388032),
    j = n(792389);
function S(e) {
    let t = (0, i.e7)([O.Z], () => O.Z.getGuildId()),
        n = (0, p.Q_)(t);
    return (0, m.a4)(e)
        ? (0, r.jsx)(a.sNh, {
              id: "report",
              label: n ? h.intl.string(h.t.n5EBAJ) : h.intl.string(h.t.GwbdGe),
              action: () => (0, f.ak)(e, "web_message_context_menu"),
              icon: n ? a.gw7 : a.U65,
              color: "danger",
          })
        : null;
}
function E() {
    return (0, r.jsx)(d.ZP, {
        contentTypes: [l.z.REPORT_TO_MOD_NEW_TAG],
        children: (e) => {
            let { visibleContent: t } = e;
            return t === l.z.REPORT_TO_MOD_NEW_TAG
                ? (0, r.jsx)(a.IGR, {
                      color: o.Z.colors.BACKGROUND_BRAND.css,
                      text: h.intl.string(h.t.y2b7CA),
                  })
                : (0, r.jsx)(a.U65, {
                      color: "currentColor",
                      size: "refresh_sm",
                  });
        },
    });
}
function P(e) {
    let t = (0, i.e7)([g.Z], () => g.Z.hasReportedMessage(e.channel_id, e.id)),
        n = (0, b.sP)(e);
    return ((0, c.zq)(() => {
        n && (0, u.Q3)(l.z.REPORT_TO_MOD_NEW_TAG, { dismissAction: v.L.AUTO_DISMISS });
    }),
    n)
        ? (0, r.jsx)(a.sNh, {
              id: "report-to-mod",
              label: t ? h.intl.string(j.default["8wsdng"]) : h.intl.string(j.default["1D+vqy"]),
              action: () => {
                  (0, u.Q3)(l.z.REPORT_TO_MOD_NEW_TAG, { dismissAction: v.L.USER_DISMISS }), (0, f.tV)(e);
              },
              icon: (0, r.jsx)(E, {}),
              disabled: t,
          })
        : null;
}
function T(e) {
    let t = (0, i.e7)([s.ZP], () => s.ZP.get("iar_testing")),
        n = (0, i.e7)([y.default], () => y.default.getCurrentUser());
    return (0, m.a4)(e) && null != n && n.isStaff() && t
        ? (0, r.jsx)(a.sNh, {
              id: "staff-test-message-report",
              label: "[STAFF] Test Message Report",
              action: () => (0, f.Jw)(e, "web_message_context_menu"),
              icon: a.U65,
              color: "danger",
          })
        : null;
}
