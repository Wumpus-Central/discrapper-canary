n.d(t, { Ay: () => S, S_: () => b, zo: () => _ });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(554146),
    r = n(397927),
    s = n(964486),
    o = n(865116),
    d = n(379848),
    c = n(928658),
    u = n(400528),
    g = n(376708),
    A = n(715757),
    p = n(967198),
    m = n(287809),
    f = n(628691),
    y = n(49999),
    h = n(985018),
    E = n(641131);
function S(e) {
    let t = (0, l.bG)([p.A], () => p.A.getGuildId()),
        n = (0, A.Qo)(t);
    return (0, f.ul)(e)
        ? (0, i.jsx)(r.Drp, {
              id: "report",
              label: n ? h.intl.string(h.t.n5EBAJ) : h.intl.string(h.t.GwbdGe),
              action: () => (0, c.V2)(e, "web_message_context_menu"),
              icon: n ? r.pVd : r.iFK,
              leadingAccessory: { type: "icon", icon: n ? r.pVd : r.iFK },
              color: "danger",
          })
        : null;
}
function _(e) {
    let t = (0, l.bG)([u.A], () => u.A.hasReportedMessage(e.channel_id, e.id)),
        n = (0, g.KB)(e),
        o = n ? [a.M.REPORT_TO_MOD_NEW_TAG] : [],
        [A, p] = (0, d.kn)(o);
    return ((0, s.l0)(() => {
        n && p(y.i.AUTO_DISMISS);
    }),
    n)
        ? (0, i.jsx)(r.Drp, {
              id: "report-to-mod",
              label: t ? h.intl.string(E.default["8wsdng"]) : h.intl.string(E.default["1D+vqy"]),
              action: () => {
                  p(y.i.USER_DISMISS), (0, c.dy)(e);
              },
              icon: r.iFK,
              disabled: t,
              leadingAccessory: { type: "icon", icon: r.iFK },
              badge: A === a.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
              color: "danger",
          })
        : null;
}
function b(e) {
    let t = (0, l.bG)([o.Ay], () => o.Ay.get("iar_testing")),
        n = (0, l.bG)([m.default], () => m.default.getCurrentUser());
    return (0, f.ul)(e) && null != n && n.isStaff() && t
        ? (0, i.jsx)(r.Drp, {
              id: "staff-test-message-report",
              label: "[STAFF] Test Message Report",
              action: () => (0, c.Rj)(e, "web_message_context_menu"),
              icon: r.iFK,
              leadingAccessory: { type: "icon", icon: r.iFK },
              color: "danger",
          })
        : null;
}
