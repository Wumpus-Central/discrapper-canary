n.d(t, {
    Ay: () => h,
    S_: () => E,
    zo: () => j,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(554146),
    a = n(397927),
    o = n(964486),
    c = n(865116),
    s = n(826673),
    d = n(379848),
    u = n(928658),
    g = n(400528),
    p = n(376708),
    f = n(715757),
    y = n(967198),
    b = n(287809),
    A = n(628691),
    m = n(49999),
    O = n(985018),
    v = n(641131);

function h(e) {
    let t = (0, i.bG)([y.A], () => y.A.getGuildId()),
        n = (0, f.Qo)(t);
    return (0, A.ul)(e)
        ? (0, r.jsx)(a.Drp, {
              id: "report",
              label: n ? O.intl.string(O.t.n5EBAJ) : O.intl.string(O.t.GwbdGe),
              action: () => (0, u.V2)(e, "web_message_context_menu"),
              icon: n ? a.pVd : a.iFK,
              leadingAccessory: {
                  type: "icon",
                  icon: n ? a.pVd : a.iFK,
              },
              color: "danger",
          })
        : null;
}

function j(e) {
    let t = (0, i.bG)([g.A], () => g.A.hasReportedMessage(e.channel_id, e.id)),
        n = (0, p.KB)(e);
    return ((0, o.l0)(() => {
        n &&
            (0, s.Dr)(l.M.REPORT_TO_MOD_NEW_TAG, {
                dismissAction: m.i.AUTO_DISMISS,
            });
    }),
    n)
        ? (0, r.jsx)(d.Ay, {
              contentTypes: [l.M.REPORT_TO_MOD_NEW_TAG],
              children: (n) => {
                  let { visibleContent: i } = n;
                  return (0, r.jsx)(a.Drp, {
                      id: "report-to-mod",
                      label: t ? O.intl.string(v.default["8wsdng"]) : O.intl.string(v.default["1D+vqy"]),
                      action: () => {
                          (0, s.Dr)(l.M.REPORT_TO_MOD_NEW_TAG, {
                              dismissAction: m.i.USER_DISMISS,
                          }),
                              (0, u.dy)(e);
                      },
                      icon: a.iFK,
                      disabled: t,
                      leadingAccessory: {
                          type: "icon",
                          icon: a.iFK,
                      },
                      badge: i === l.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
                  });
              },
          })
        : null;
}

function E(e) {
    let t = (0, i.bG)([c.Ay], () => c.Ay.get("iar_testing")),
        n = (0, i.bG)([b.default], () => b.default.getCurrentUser());
    return (0, A.ul)(e) && null != n && n.isStaff() && t
        ? (0, r.jsx)(a.Drp, {
              id: "staff-test-message-report",
              label: "[STAFF] Test Message Report",
              action: () => (0, u.Rj)(e, "web_message_context_menu"),
              icon: a.iFK,
              leadingAccessory: {
                  type: "icon",
                  icon: a.iFK,
              },
              color: "danger",
          })
        : null;
}
