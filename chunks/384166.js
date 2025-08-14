n.d(t, { Z: () => g }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(585483),
    u = n(592183),
    d = n(224724),
    f = n(872269),
    _ = n(228168),
    p = n(981631),
    h = n(388032),
    m = n(461671);
function g() {
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
            c.S.subscribe(p.CkL.EMPHASIZE_NOTICE, n),
            () => {
                c.S.unsubscribe(p.CkL.EMPHASIZE_NOTICE, n), null !== e && clearTimeout(e);
            }
        );
    }, []);
    let g = i.useCallback(async () => {
            if (null !== o)
                try {
                    await u.Z.savePendingWidgets(o);
                } catch (e) {
                    (0, f.L$)(_.qb.WIDGET_SAVE_FAILURE);
                }
        }, [o]),
        E = i.useCallback(() => {
            u.Z.clearPendingWidgets();
        }, []);
    return n
        ? (0, r.jsx)("div", {
              className: a()(m.container, { [m.visible]: n }),
              role: "status",
              children: (0, r.jsxs)("div", {
                  className: a()(m.content, { [m.emphasized]: e }),
                  children: [
                      (0, r.jsx)("div", {
                          className: m.message,
                          children: (0, r.jsx)(l.Text, {
                              variant: "text-md/medium",
                              color: "text-primary",
                              children: h.intl.string(h.t["/lQiX1"]),
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: m.actions,
                          children: [
                              (0, r.jsx)(l.zxk, {
                                  size: "sm",
                                  variant: "secondary",
                                  text: h.intl.string(h.t.yBZMsb),
                                  onClick: E,
                              }),
                              (0, r.jsx)(l.zxk, {
                                  size: "sm",
                                  variant: "primary",
                                  text: h.intl.string(h.t.R3BPHx),
                                  onClick: g,
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
