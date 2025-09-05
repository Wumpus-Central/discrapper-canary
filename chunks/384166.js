n.d(t, { Z: () => O }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(261616),
    s = n(442837),
    c = n(481060),
    u = n(607070),
    d = n(585483),
    p = n(592183),
    f = n(224724),
    h = n(872269),
    g = n(228168),
    m = n(981631),
    b = n(388032),
    _ = n(461671);
function O(e) {
    let { className: t } = e,
        [n, l] = i.useState(!1),
        O = (0, s.Wu)([f.Z], () => {
            var e;
            return null != (e = f.Z.getSaveablePendingWidgets()) ? e : [];
        }),
        E = (0, s.e7)([f.Z], () => f.Z.hasSaveablePendingChanges()),
        y = (0, s.e7)([f.Z], () => f.Z.isSubmitting),
        v = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        I = (0, c.Yzy)(E, {
            from: {
                opacity: 0,
                y: 80 * !v,
            },
            enter: {
                opacity: 1,
                y: 0,
            },
            leave: {
                opacity: 0,
                y: 80 * !v,
            },
        });
    i.useEffect(() => {
        let e = null;
        function t() {
            l(!0), (e = setTimeout(() => l(!1), 500));
        }
        return (
            d.S.subscribe(m.CkL.EMPHASIZE_NOTICE, t),
            () => {
                d.S.unsubscribe(m.CkL.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e);
            }
        );
    }, []),
        i.useEffect(() => {
            E && c.uvj.announce(b.intl.string(b.t["0Y/qkJ"]));
        }, [E]);
    let C = i.useCallback(async () => {
            try {
                await p.Z.savePendingWidgets(O);
            } catch (e) {
                (0, h.L$)(g.qb.WIDGET_SAVE_FAILURE);
            }
        }, [O]),
        S = i.useCallback(() => {
            p.Z.clearPendingWidgets();
        }, []);
    return I((e, i) =>
        i
            ? (0, r.jsx)(o.animated.div, {
                  className: t,
                  style: e,
                  children: (0, r.jsxs)("section", {
                      className: a()(_.content, { [_.emphasized]: n }),
                      "aria-label": b.intl.string(b.t["odDw+/"]),
                      children: [
                          (0, r.jsx)(c.Text, {
                              variant: "text-md/medium",
                              color: "text-primary",
                              className: _.message,
                              children: b.intl.string(b.t["/lQiX1"]),
                          }),
                          (0, r.jsxs)("div", {
                              className: _.actions,
                              children: [
                                  (0, r.jsx)(c.zxk, {
                                      size: "sm",
                                      variant: "secondary",
                                      text: b.intl.string(b.t.yBZMsb),
                                      onClick: S,
                                      disabled: !E || y,
                                  }),
                                  (0, r.jsx)(c.zxk, {
                                      size: "sm",
                                      variant: "primary",
                                      text: b.intl.string(b.t.R3BPHx),
                                      onClick: C,
                                      loading: y,
                                      disabled: !E || y,
                                  }),
                              ],
                          }),
                      ],
                  }),
              })
            : null,
    );
}
