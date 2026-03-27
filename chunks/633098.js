n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(382222),
    o = n(311907),
    d = n(397927),
    c = n(775602),
    u = n(203982),
    g = n(183555),
    m = n(289173),
    x = n(958805),
    p = n(61881),
    f = n(606758),
    h = n(518477),
    _ = n(652215),
    A = n(985018),
    I = n(440693);
let j = "user-profile-save-reset-toolbar-label";
function v(e) {
    let { className: t } = e,
        { trackUserProfileEditSaved: n } = (0, g.NJ)(),
        [a, v] = l.useState(!1),
        T = (0, o.yK)([p.A], () => p.A.getSaveablePendingWidgets() ?? []),
        E = (0, o.yK)([p.A], () => p.A.getChangedWidgets()),
        b = (0, o.yK)([p.A], () => p.A.getRemovedWidgets()),
        N = (0, o.bG)([p.A], () => p.A.hasUnsavedChanges()),
        S = (0, o.bG)([p.A], () => p.A.canSaveChanges()),
        y = (0, o.bG)([p.A], () => p.A.isSubmitting),
        C = (0, o.bG)([c.A], () => c.A.useReducedMotion),
        R = (0, d.pnh)(N, {
            from: { opacity: 0, y: 80 * !C },
            enter: { opacity: 1, y: 0 },
            leave: { opacity: 0, y: 80 * !C },
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
            N && d.ORC.announce(A.intl.string(A.t["0Y/qkL"]));
        }, [N]);
    let k = l.useCallback(async () => {
            if (p.A.canSaveChanges()) {
                try {
                    await x.A.savePendingWidgets(T);
                } catch (e) {
                    (0, f.XA)(h.jM.WIDGET_SAVE_FAILURE);
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
                for (let e of b) n({ widgetEdited: e.type, isWidgetRemoved: !0 });
            }
        }, [T, E, b, n]),
        O = l.useCallback(() => {
            x.A.clearPendingWidgets();
        }, []);
    return R((e, n) =>
        n
            ? (0, i.jsx)(r.animated.div, {
                  className: t,
                  style: e,
                  children: (0, i.jsxs)("footer", {
                      className: s()(I.Qs, { [I.hO]: a }),
                      "aria-labelledby": j,
                      children: [
                          (0, i.jsx)(d.Text, {
                              id: j,
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
                                      onClick: O,
                                      disabled: !N || y,
                                  }),
                                  (0, i.jsx)(d.Button, {
                                      size: "sm",
                                      variant: "primary",
                                      text: A.intl.string(A.t["R3BPH+"]),
                                      onClick: k,
                                      loading: y,
                                      disabled: !S || !N || y,
                                  }),
                              ],
                          }),
                      ],
                  }),
              })
            : null,
    );
}
