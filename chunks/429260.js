n.d(t, {
    ZP: () => E,
    eH: () => _,
    wY: () => P,
});
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(704215),
    a = n(692547),
    o = n(481060),
    s = n(493773),
    c = n(432877),
    u = n(266454),
    d = n(243778),
    f = n(726521),
    g = n(993706),
    b = n(982168),
    p = n(216572),
    m = n(914010),
    O = n(594174),
    y = n(970257),
    h = n(921944),
    v = n(388032),
    j = n(864309);
function E(e) {
    let t = (0, i.e7)([m.Z], () => m.Z.getGuildId()),
        n = (0, p.Q_)(t);
    return (0, y.a4)(e)
        ? (0, r.jsx)(o.sNh, {
              id: "report",
              label: n ? v.intl.string(v.t.n5EBAJ) : v.intl.string(v.t.GwbdGe),
              action: () => (0, f.ak)(e, "web_message_context_menu"),
              icon: n ? o.gw7 : o.U65,
              color: "danger",
          })
        : null;
}
function S() {
    return (0, r.jsx)(d.ZP, {
        contentTypes: [l.z.REPORT_TO_MOD_NEW_TAG],
        children: (e) => {
            let { visibleContent: t } = e;
            return t === l.z.REPORT_TO_MOD_NEW_TAG
                ? (0, r.jsx)(o.IGR, {
                      color: a.Z.colors.BACKGROUND_BRAND.css,
                      text: v.intl.string(v.t.y2b7CA),
                  })
                : (0, r.jsx)(o.U65, {
                      color: "currentColor",
                      size: "refresh_sm",
                  });
        },
    });
}
function P(e) {
    let t = (0, i.e7)([g.Z], () => g.Z.hasReportedMessage(e.channel_id, e.id)),
        n = (0, b.sP)(e);
    return ((0, s.zq)(() => {
        n && (0, u.Q3)(l.z.REPORT_TO_MOD_NEW_TAG, { dismissAction: h.L.AUTO_DISMISS });
    }),
    n)
        ? (0, r.jsx)(o.sNh, {
              id: "report-to-mod",
              label: t ? v.intl.string(j.default["8wsdng"]) : v.intl.string(j.default["1D+vqy"]),
              action: () => {
                  (0, u.Q3)(l.z.REPORT_TO_MOD_NEW_TAG, { dismissAction: h.L.USER_DISMISS }), (0, f.tV)(e);
              },
              icon: (0, r.jsx)(S, {}),
              disabled: t,
          })
        : null;
}
function _(e) {
    let t = (0, i.e7)([c.ZP], () => c.ZP.get("iar_testing")),
        n = (0, i.e7)([O.default], () => O.default.getCurrentUser());
    return (0, y.a4)(e) && null != n && n.isStaff() && t
        ? (0, r.jsx)(o.sNh, {
              id: "staff-test-message-report",
              label: "[STAFF] Test Message Report",
              action: () => (0, f.Jw)(e, "web_message_context_menu"),
              icon: o.U65,
              color: "danger",
          })
        : null;
}
