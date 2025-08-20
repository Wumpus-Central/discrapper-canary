n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
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
        { saveablePendingWidgets: n, hasSaveablePendingChanges: a } = (0, s.cj)([d.Z], () => ({
            saveablePendingWidgets: d.Z.getSaveablePendingWidgets(),
            hasSaveablePendingChanges: d.Z.hasSaveablePendingChanges(),
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
            if (null !== n)
                try {
                    await u.Z.savePendingWidgets(n);
                } catch (e) {
                    (0, f.L$)(_.qb.WIDGET_SAVE_FAILURE);
                }
        }, [n]),
        E = i.useCallback(() => {
            u.Z.clearPendingWidgets();
        }, []);
    return a
        ? (0, r.jsx)("div", {
              className: o()(m.container, { [m.visible]: a }),
              role: "status",
              children: (0, r.jsxs)("div", {
                  className: o()(m.content, { [m.emphasized]: e }),
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
