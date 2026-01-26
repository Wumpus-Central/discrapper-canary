n.d(t, {
    Ay: () => h,
    S_: () => _,
    zo: () => S,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(554146),
    a = n(827734),
    o = n(397927),
    c = n(964486),
    s = n(865116),
    d = n(826673),
    u = n(379848),
    g = n(928658),
    p = n(400528),
    f = n(376708),
    y = n(715757),
    b = n(967198),
    A = n(287809),
    m = n(628691),
    O = n(49999),
    v = n(985018),
    j = n(641131);

function h(e) {
    let t = (0, i.bG)([b.A], () => b.A.getGuildId()),
        n = (0, y.Qo)(t);
    return (0, m.ul)(e)
        ? (0, r.jsx)(o.Drp, {
              id: "report",
              label: n ? v.intl.string(v.t.n5EBAJ) : v.intl.string(v.t.GwbdGe),
              action: () => (0, g.V2)(e, "web_message_context_menu"),
              icon: n ? o.pVd : o.iFK,
              leadingAccessory: {
                  type: "icon",
                  icon: n ? o.pVd : o.iFK,
              },
              color: "danger",
          })
        : null;
}

function E() {
    return (0, r.jsx)(u.Ay, {
        contentTypes: [l.M.REPORT_TO_MOD_NEW_TAG],
        children: (e) => {
            let { visibleContent: t } = e;
            return t === l.M.REPORT_TO_MOD_NEW_TAG
                ? (0, r.jsx)(o.LpS, {
                      color: a.A.colors.BACKGROUND_BRAND.css,
                      text: v.intl.string(v.t.y2b7CA),
                  })
                : (0, r.jsx)(o.iFK, {
                      color: "currentColor",
                      size: "refresh_sm",
                  });
        },
    });
}

function S(e) {
    let t = (0, i.bG)([p.A], () => p.A.hasReportedMessage(e.channel_id, e.id)),
        n = (0, f.KB)(e);
    return ((0, c.l0)(() => {
        n &&
            (0, d.Dr)(l.M.REPORT_TO_MOD_NEW_TAG, {
                dismissAction: O.i.AUTO_DISMISS,
            });
    }),
    n)
        ? (0, r.jsx)(o.Drp, {
              id: "report-to-mod",
              label: t ? v.intl.string(j.default["8wsdng"]) : v.intl.string(j.default["1D+vqy"]),
              action: () => {
                  (0, d.Dr)(l.M.REPORT_TO_MOD_NEW_TAG, {
                      dismissAction: O.i.USER_DISMISS,
                  }),
                      (0, g.dy)(e);
              },
              icon: (0, r.jsx)(E, {}),
              disabled: t,
              leadingAccessory: {
                  type: "icon",
                  icon: o.iFK,
              },
          })
        : null;
}

function _(e) {
    let t = (0, i.bG)([s.Ay], () => s.Ay.get("iar_testing")),
        n = (0, i.bG)([A.default], () => A.default.getCurrentUser());
    return (0, m.ul)(e) && null != n && n.isStaff() && t
        ? (0, r.jsx)(o.Drp, {
              id: "staff-test-message-report",
              label: "[STAFF] Test Message Report",
              action: () => (0, g.Rj)(e, "web_message_context_menu"),
              icon: o.iFK,
              leadingAccessory: {
                  type: "icon",
                  icon: o.iFK,
              },
              color: "danger",
          })
        : null;
}
