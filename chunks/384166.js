n.d(t, { Z: () => h }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(585483),
    u = n(592183),
    d = n(224724),
    f = n(981631),
    _ = n(388032),
    p = n(900365);
function h() {
    let [e, t] = i.useState(!1),
        { hasPendingChanges: n, pendingWidgets: o } = (0, s.cj)([d.Z], () => ({
            hasPendingChanges: d.Z.hasPendingChanges(),
            pendingWidgets: d.Z.getPendingWidgets(),
        }));
    i.useEffect(() => {
        let e = null;
        function n() {
            t(!0), (e = setTimeout(() => t(!1), 500));
        }
        return (
            c.S.subscribe(f.CkL.EMPHASIZE_NOTICE, n),
            () => {
                c.S.unsubscribe(f.CkL.EMPHASIZE_NOTICE, n), null !== e && clearTimeout(e);
            }
        );
    }, []);
    let h = i.useCallback(async () => {
            null !== o && (await u.Z.savePendingWidgets(o));
        }, [o]),
        m = i.useCallback(() => {
            u.Z.clearPendingWidgets();
        }, []);
    return n
        ? (0, r.jsx)("div", {
              className: a()(p.container, { [p.visible]: n }),
              role: "status",
              children: (0, r.jsxs)("div", {
                  className: a()(p.content, { [p.emphasized]: e }),
                  children: [
                      (0, r.jsx)("div", {
                          className: p.message,
                          children: (0, r.jsx)(l.Text, {
                              variant: "text-md/medium",
                              color: "text-primary",
                              children: _.intl.string(_.t["/lQiX1"]),
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: p.actions,
                          children: [
                              (0, r.jsx)(l.zxk, {
                                  size: "sm",
                                  variant: "secondary",
                                  text: _.intl.string(_.t.yBZMsb),
                                  onClick: m,
                              }),
                              (0, r.jsx)(l.zxk, {
                                  size: "sm",
                                  variant: "primary",
                                  text: _.intl.string(_.t.R3BPHx),
                                  onClick: h,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
