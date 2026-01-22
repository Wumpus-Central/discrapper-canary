n.d(t, {
    Ay: () => h,
    S_: () => _,
    zo: () => S,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(554146),
    o = n(827734),
    a = n(397927),
    c = n(964486),
    s = n(865116),
    d = n(826673),
    u = n(379848),
    f = n(928658),
    g = n(400528),
    p = n(376708),
    b = n(715757),
    m = n(967198),
    y = n(287809),
    O = n(628691),
    A = n(49999),
    v = n(985018),
    j = n(641131);

function h(e) {
    let t = (0, l.bG)([m.A], () => m.A.getGuildId()),
        n = (0, b.Qo)(t);
    return (0, O.ul)(e)
        ? (0, r.jsx)(a.Drp, {
              id: "report",
              label: n ? v.intl.string(v.t.n5EBAJ) : v.intl.string(v.t.GwbdGe),
              action: () => (0, f.V2)(e, "web_message_context_menu"),
              icon: n ? a.pVd : a.iFK,
              color: "danger",
          })
        : null;
}

function E() {
    return (0, r.jsx)(u.Ay, {
        contentTypes: [i.M.REPORT_TO_MOD_NEW_TAG],
        children: (e) => {
            let { visibleContent: t } = e;
            return t === i.M.REPORT_TO_MOD_NEW_TAG
                ? (0, r.jsx)(a.LpS, {
                      color: o.A.colors.BACKGROUND_BRAND.css,
                      text: v.intl.string(v.t.y2b7CA),
                  })
                : (0, r.jsx)(a.iFK, {
                      color: "currentColor",
                      size: "refresh_sm",
                  });
        },
    });
}

function S(e) {
    let t = (0, l.bG)([g.A], () => g.A.hasReportedMessage(e.channel_id, e.id)),
        n = (0, p.KB)(e);
    return ((0, c.l0)(() => {
        n &&
            (0, d.Dr)(i.M.REPORT_TO_MOD_NEW_TAG, {
                dismissAction: A.i.AUTO_DISMISS,
            });
    }),
    n)
        ? (0, r.jsx)(a.Drp, {
              id: "report-to-mod",
              label: t ? v.intl.string(j.default["8wsdng"]) : v.intl.string(j.default["1D+vqy"]),
              action: () => {
                  (0, d.Dr)(i.M.REPORT_TO_MOD_NEW_TAG, {
                      dismissAction: A.i.USER_DISMISS,
                  }),
                      (0, f.dy)(e);
              },
              icon: (0, r.jsx)(E, {}),
              disabled: t,
          })
        : null;
}

function _(e) {
    let t = (0, l.bG)([s.Ay], () => s.Ay.get("iar_testing")),
        n = (0, l.bG)([y.default], () => y.default.getCurrentUser());
    return (0, O.ul)(e) && null != n && n.isStaff() && t
        ? (0, r.jsx)(a.Drp, {
              id: "staff-test-message-report",
              label: "[STAFF] Test Message Report",
              action: () => (0, f.Rj)(e, "web_message_context_menu"),
              icon: a.iFK,
              color: "danger",
          })
        : null;
}
