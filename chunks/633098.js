n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(40153),
    o = n(311907),
    d = n(397927),
    c = n(775602),
    u = n(203982),
    g = n(183555),
    m = n(289173),
    x = n(958805),
    f = n(61881),
    h = n(384377),
    p = n(518477),
    _ = n(652215),
    A = n(985018),
    I = n(892984);
function v(e) {
    let { className: t } = e,
        { trackUserProfileEditSaved: n } = (0, g.NJ)(),
        [a, v] = l.useState(!1),
        j = (0, o.yK)([f.A], () => f.A.getSaveablePendingWidgets() ?? []),
        T = (0, o.yK)([f.A], () => f.A.getChangedWidgets()),
        b = (0, o.yK)([f.A], () => f.A.getRemovedWidgets()),
        E = (0, o.bG)([f.A], () => f.A.hasUnsavedChanges()),
        y = (0, o.bG)([f.A], () => f.A.canSaveChanges()),
        C = (0, o.bG)([f.A], () => f.A.isSubmitting),
        N = (0, o.bG)([c.A], () => c.A.useReducedMotion),
        S = (0, d.pnh)(E, {
            from: { opacity: 0, y: 80 * !N },
            enter: { opacity: 1, y: 0 },
            leave: { opacity: 0, y: 80 * !N },
        });
    l.useEffect(() => {
        let e = null;
        function t() {
            v(!0), (e = setTimeout(() => v(!1), 500));
        }
        return (
            u._.subscribe(_.jej.EMPHASIZE_NOTICE, t),
            () => {
                u._.unsubscribe(_.jej.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e);
            }
        );
    }, []),
        l.useEffect(() => {
            E && d.ORC.announce(A.intl.string(A.t["0Y/qkL"]));
        }, [E]);
    let w = l.useCallback(async () => {
            if (f.A.canSaveChanges()) {
                try {
                    await x.A.savePendingWidgets(j);
                } catch (e) {
                    (0, h.XA)(p.jM.WIDGET_SAVE_FAILURE);
                    return;
                }
                for (let e of T) {
                    let t = { widgetEdited: e.type, isWidgetRemoved: !1 };
                    (0, m.fu)(e) &&
                        ((t.gameIds = e.games.map((e) => e.applicationId)),
                        (t.tags = e.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                        (t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0))),
                        n(t);
                }
                for (let e of b) n({ widgetEdited: e.type, isWidgetRemoved: !0 });
            }
        }, [j, T, b, n]),
        k = l.useCallback(() => {
            x.A.clearPendingWidgets();
        }, []);
    return S((e, n) =>
        n
            ? (0, i.jsx)(s.animated.div, {
                  className: t,
                  style: e,
                  children: (0, i.jsxs)("section", {
                      className: r()(I.Qs, { [I.hO]: a }),
                      "aria-label": A.intl.string(A.t["odDw+z"]),
                      children: [
                          (0, i.jsx)(d.Text, {
                              variant: "text-md/medium",
                              color: "text-strong",
                              className: I.iU,
                              children: A.intl.string(A.t["/lQiX/"]),
                          }),
                          (0, i.jsxs)("div", {
                              className: I.o1,
                              children: [
                                  (0, i.jsx)(d.Button, {
                                      size: "sm",
                                      variant: "secondary",
                                      text: A.intl.string(A.t.yBZMsQ),
                                      onClick: k,
                                      disabled: !E || C,
                                  }),
                                  (0, i.jsx)(d.Button, {
                                      size: "sm",
                                      variant: "primary",
                                      text: A.intl.string(A.t["R3BPH+"]),
                                      onClick: w,
                                      loading: C,
                                      disabled: !y || !E || C,
                                  }),
                              ],
                          }),
                      ],
                  }),
              })
            : null,
    );
}
