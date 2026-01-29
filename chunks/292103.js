n.d(t, {
    Ay: () => v,
    S_: () => j,
    zo: () => h,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(554146),
    a = n(397927),
    o = n(964486),
    c = n(865116),
    s = n(379848),
    d = n(928658),
    u = n(400528),
    g = n(376708),
    p = n(715757),
    f = n(967198),
    y = n(287809),
    b = n(628691),
    A = n(49999),
    m = n(985018),
    O = n(641131);

function v(e) {
    let t = (0, i.bG)([f.A], () => f.A.getGuildId()),
        n = (0, p.Qo)(t);
    return (0, b.ul)(e)
        ? (0, r.jsx)(a.Drp, {
              id: "report",
              label: n ? m.intl.string(m.t.n5EBAJ) : m.intl.string(m.t.GwbdGe),
              action: () => (0, d.V2)(e, "web_message_context_menu"),
              icon: n ? a.pVd : a.iFK,
              leadingAccessory: {
                  type: "icon",
                  icon: n ? a.pVd : a.iFK,
              },
              color: "danger",
          })
        : null;
}

function h(e) {
    let t = (0, i.bG)([u.A], () => u.A.hasReportedMessage(e.channel_id, e.id)),
        n = (0, g.KB)(e),
        c = n ? [l.M.REPORT_TO_MOD_NEW_TAG] : [],
        [p, f] = (0, s.kn)(c);
    return ((0, o.l0)(() => {
        n && f(A.i.AUTO_DISMISS);
    }),
    n)
        ? (0, r.jsx)(a.Drp, {
              id: "report-to-mod",
              label: t ? m.intl.string(O.default["8wsdng"]) : m.intl.string(O.default["1D+vqy"]),
              action: () => {
                  f(A.i.USER_DISMISS), (0, d.dy)(e);
              },
              icon: a.iFK,
              disabled: t,
              leadingAccessory: {
                  type: "icon",
                  icon: a.iFK,
              },
              badge: p === l.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
              color: "danger",
          })
        : null;
}

function j(e) {
    let t = (0, i.bG)([c.Ay], () => c.Ay.get("iar_testing")),
        n = (0, i.bG)([y.default], () => y.default.getCurrentUser());
    return (0, b.ul)(e) && null != n && n.isStaff() && t
        ? (0, r.jsx)(a.Drp, {
              id: "staff-test-message-report",
              label: "[STAFF] Test Message Report",
              action: () => (0, d.Rj)(e, "web_message_context_menu"),
              icon: a.iFK,
              leadingAccessory: {
                  type: "icon",
                  icon: a.iFK,
              },
              color: "danger",
          })
        : null;
}
