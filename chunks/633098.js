n.d(t, {
    A: () => x,
}),
    n(896048),
    n(114821),
    n(339614);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(92674),
    s = n(311907),
    c = n(397927),
    u = n(775602),
    d = n(203982),
    f = n(183555),
    p = n(289173),
    g = n(958805),
    m = n(61881),
    b = n(384377),
    y = n(518477),
    O = n(652215),
    j = n(985018),
    h = n(892984);

function x(e) {
    let { className: t } = e,
        { trackUserProfileEditSaved: n } = (0, f.NJ)(),
        [i, x] = l.useState(!1),
        v = (0, s.yK)([m.A], () => {
            var e;
            return null != (e = m.A.getSaveablePendingWidgets()) ? e : [];
        }),
        _ = (0, s.yK)([m.A], () => m.A.getChangedWidgets()),
        I = (0, s.yK)([m.A], () => m.A.getRemovedWidgets()),
        w = (0, s.bG)([m.A], () => m.A.hasUnsavedChanges()),
        A = (0, s.bG)([m.A], () => m.A.canSaveChanges()),
        P = (0, s.bG)([m.A], () => m.A.isSubmitting),
        E = (0, s.bG)([u.A], () => u.A.useReducedMotion),
        S = (0, c.pnh)(w, {
            from: {
                opacity: 0,
                y: 80 * !E,
            },
            enter: {
                opacity: 1,
                y: 0,
            },
            leave: {
                opacity: 0,
                y: 80 * !E,
            },
        });
    l.useEffect(() => {
        let e = null;

        function t() {
            x(!0), (e = setTimeout(() => x(!1), 500));
        }
        return (
            d._.subscribe(O.jej.EMPHASIZE_NOTICE, t),
            () => {
                d._.unsubscribe(O.jej.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e);
            }
        );
    }, []),
        l.useEffect(() => {
            w && c.ORC.announce(j.intl.string(j.t["0Y/qkL"]));
        }, [w]);
    let T = l.useCallback(async () => {
            if (m.A.canSaveChanges()) {
                try {
                    await g.A.savePendingWidgets(v);
                } catch (e) {
                    (0, b.XA)(y.jM.WIDGET_SAVE_FAILURE);
                    return;
                }
                for (let e of _) {
                    let t = {
                        widgetEdited: e.type,
                        isWidgetRemoved: !1,
                    };
                    (0, p.fu)(e) &&
                        ((t.gameIds = e.games.map((e) => e.applicationId)),
                        (t.tags = e.games
                            .flatMap((e) => {
                                var t;
                                return null != (t = e.tags) ? t : [];
                            })
                            .map((e) => e.toString())),
                        (t.numCharactersCommentary = e.games.reduce((e, t) => {
                            var n, r;
                            return e + (null != (n = null == (r = t.comment) ? void 0 : r.length) ? n : 0);
                        }, 0))),
                        n(t);
                }
                for (let e of I)
                    n({
                        widgetEdited: e.type,
                        isWidgetRemoved: !0,
                    });
            }
        }, [v, _, I, n]),
        C = l.useCallback(() => {
            g.A.clearPendingWidgets();
        }, []);
    return S((e, n) =>
        n
            ? (0, r.jsx)(o.animated.div, {
                  className: t,
                  style: e,
                  children: (0, r.jsxs)("section", {
                      className: a()(h.Qs, {
                          [h.hO]: i,
                      }),
                      "aria-label": j.intl.string(j.t["odDw+z"]),
                      children: [
                          (0, r.jsx)(c.Text, {
                              variant: "text-md/medium",
                              color: "text-strong",
                              className: h.iU,
                              children: j.intl.string(j.t["/lQiX/"]),
                          }),
                          (0, r.jsxs)("div", {
                              className: h.o1,
                              children: [
                                  (0, r.jsx)(c.Button, {
                                      size: "sm",
                                      variant: "secondary",
                                      text: j.intl.string(j.t.yBZMsQ),
                                      onClick: C,
                                      disabled: !w || P,
                                  }),
                                  (0, r.jsx)(c.Button, {
                                      size: "sm",
                                      variant: "primary",
                                      text: j.intl.string(j.t["R3BPH+"]),
                                      onClick: T,
                                      loading: P,
                                      disabled: !A || !w || P,
                                  }),
                              ],
                          }),
                      ],
                  }),
              })
            : null,
    );
}
