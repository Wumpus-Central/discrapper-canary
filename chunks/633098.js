n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(522160),
    o = n(311907),
    c = n(397927),
    d = n(775602),
    u = n(203982),
    g = n(183555),
    m = n(289173),
    x = n(958805),
    f = n(61881),
    p = n(384377),
    h = n(518477),
    _ = n(652215),
    A = n(985018),
    I = n(892984);
function j(e) {
    let { className: t } = e,
        { trackUserProfileEditSaved: n } = (0, g.NJ)(),
        [a, j] = l.useState(!1),
        v = (0, o.yK)([f.A], () => f.A.getSaveablePendingWidgets() ?? []),
        E = (0, o.yK)([f.A], () => f.A.getChangedWidgets()),
        T = (0, o.yK)([f.A], () => f.A.getRemovedWidgets()),
        b = (0, o.bG)([f.A], () => f.A.hasUnsavedChanges()),
        y = (0, o.bG)([f.A], () => f.A.canSaveChanges()),
        N = (0, o.bG)([f.A], () => f.A.isSubmitting),
        S = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        C = (0, c.pnh)(b, {
            from: { opacity: 0, y: 80 * !S },
            enter: { opacity: 1, y: 0 },
            leave: { opacity: 0, y: 80 * !S },
        });
    l.useEffect(() => {
        let e = null;
        function t() {
            j(!0), (e = setTimeout(() => j(!1), 500));
        }
        return (
            u._.subscribe(_.jej.EMPHASIZE_NOTICE, t),
            () => {
                u._.unsubscribe(_.jej.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e);
            }
        );
    }, []),
        l.useEffect(() => {
            b && c.ORC.announce(A.intl.string(A.t["0Y/qkL"]));
        }, [b]);
    let k = l.useCallback(async () => {
            if (f.A.canSaveChanges()) {
                try {
                    await x.A.savePendingWidgets(v);
                } catch (e) {
                    (0, p.XA)(h.jM.WIDGET_SAVE_FAILURE);
                    return;
                }
                for (let e of E) {
                    let t = { widgetEdited: e.type, isWidgetRemoved: !1 };
                    (0, m.fu)(e) &&
                        ((t.gameIds = e.games.map((e) => e.applicationId)),
                        (t.tags = e.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                        (t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0))),
                        n(t);
                }
                for (let e of T) n({ widgetEdited: e.type, isWidgetRemoved: !0 });
            }
        }, [v, E, T, n]),
        R = l.useCallback(() => {
            x.A.clearPendingWidgets();
        }, []);
    return C((e, n) =>
        n
            ? (0, i.jsx)(r.animated.div, {
                  className: t,
                  style: e,
                  children: (0, i.jsxs)("section", {
                      className: s()(I.Qs, { [I.hO]: a }),
                      "aria-label": A.intl.string(A.t["odDw+z"]),
                      children: [
                          (0, i.jsx)(c.Text, {
                              variant: "text-md/medium",
                              color: "text-strong",
                              className: I.iU,
                              children: A.intl.string(A.t["/lQiX/"]),
                          }),
                          (0, i.jsxs)("div", {
                              className: I.o1,
                              children: [
                                  (0, i.jsx)(c.Button, {
                                      size: "sm",
                                      variant: "secondary",
                                      text: A.intl.string(A.t.yBZMsQ),
                                      onClick: R,
                                      disabled: !b || N,
                                  }),
                                  (0, i.jsx)(c.Button, {
                                      size: "sm",
                                      variant: "primary",
                                      text: A.intl.string(A.t["R3BPH+"]),
                                      onClick: k,
                                      loading: N,
                                      disabled: !y || !b || N,
                                  }),
                              ],
                          }),
                      ],
                  }),
              })
            : null,
    );
}
