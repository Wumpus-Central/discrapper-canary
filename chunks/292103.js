n.d(t, { Ay: () => S, S_: () => x, zo: () => I });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(554146),
    r = n(477782),
    s = n(111159),
    o = n(138134),
    d = n(964486),
    c = n(865116),
    u = n(932001),
    g = n(928658),
    A = n(400528),
    h = n(376708),
    m = n(715757),
    f = n(967198),
    p = n(287809),
    E = n(628691),
    y = n(49999),
    v = n(985018),
    _ = n(221314);
function S(e) {
    let t = (0, l.bG)([f.A], () => f.A.getGuildId()),
        n = (0, m.Qo)(t);
    return (0, E.ul)(e)
        ? (0, i.jsx)(r.Dr, {
              id: "report",
              label: n ? v.intl.string(v.t.n5EBAJ) : v.intl.string(v.t.GwbdGe),
              action: () => (0, g.V2)(e, "web_message_context_menu"),
              icon: n ? s.p : o.i,
              leadingAccessory: { type: "icon", icon: n ? s.p : o.i },
              color: "danger",
          })
        : null;
}
function I(e) {
    let t = (0, l.bG)([A.A], () => A.A.hasReportedMessage(e.channel_id, e.id)),
        n = (0, h.KB)(e),
        s = n ? [a.M.REPORT_TO_MOD_NEW_TAG] : [],
        [c, m] = (0, u.kn)(s);
    return ((0, d.l0)(() => {
        n && m(y.i.AUTO_DISMISS);
    }),
    n)
        ? (0, i.jsx)(r.Dr, {
              id: "report-to-mod",
              label: t ? v.intl.string(_.default["8wsdng"]) : v.intl.string(_.default["1D+vqy"]),
              action: () => {
                  m(y.i.USER_DISMISS), (0, g.dy)(e);
              },
              icon: o.i,
              disabled: t,
              leadingAccessory: { type: "icon", icon: o.i },
              badge: c === a.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
              color: "danger",
          })
        : null;
}
function x(e) {
    let t = (0, l.bG)([c.Ay], () => c.Ay.get("iar_testing")),
        n = (0, l.bG)([p.default], () => p.default.getCurrentUser());
    return (0, E.ul)(e) && null != n && n.isStaff() && t
        ? (0, i.jsx)(r.Dr, {
              id: "staff-test-message-report",
              label: "[STAFF] Test Message Report",
              action: () => (0, g.Rj)(e, "web_message_context_menu"),
              icon: o.i,
              leadingAccessory: { type: "icon", icon: o.i },
              color: "danger",
          })
        : null;
}
