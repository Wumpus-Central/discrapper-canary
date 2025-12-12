n.d(t, { Z: () => j }), n(388685), n(361932), n(187205);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    o = n(467721),
    c = n(442837),
    s = n(481060),
    u = n(607070),
    d = n(585483),
    f = n(785717),
    g = n(836197),
    p = n(592183),
    b = n(224724),
    m = n(872269),
    h = n(228168),
    y = n(981631),
    v = n(388032),
    O = n(933751);
function j(e) {
    let { className: t } = e,
        { trackUserProfileEditSaved: n } = (0, f.KZ)(),
        [a, j] = i.useState(!1),
        x = (0, c.Wu)([b.Z], () => {
            var e;
            return null != (e = b.Z.getSaveablePendingWidgets()) ? e : [];
        }),
        P = (0, c.Wu)([b.Z], () => b.Z.getChangedWidgets()),
        I = (0, c.Wu)([b.Z], () => b.Z.getRemovedWidgets()),
        w = (0, c.e7)([b.Z], () => b.Z.hasUnsavedChanges()),
        S = (0, c.e7)([b.Z], () => b.Z.canSaveChanges()),
        E = (0, c.e7)([b.Z], () => b.Z.isSubmitting),
        _ = (0, c.e7)([u.Z], () => u.Z.useReducedMotion),
        T = (0, s.Yzy)(w, {
            from: {
                opacity: 0,
                y: 80 * !_,
            },
            enter: {
                opacity: 1,
                y: 0,
            },
            leave: {
                opacity: 0,
                y: 80 * !_,
            },
        });
    i.useEffect(() => {
        let e = null;
        function t() {
            j(!0), (e = setTimeout(() => j(!1), 500));
        }
        return (
            d.S.subscribe(y.CkL.EMPHASIZE_NOTICE, t),
            () => {
                d.S.unsubscribe(y.CkL.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e);
            }
        );
    }, []),
        i.useEffect(() => {
            w && s.uvj.announce(v.intl.string(v.t["0Y/qkL"]));
        }, [w]);
    let C = i.useCallback(async () => {
            if (b.Z.canSaveChanges()) {
                try {
                    await p.Z.savePendingWidgets(x);
                } catch (e) {
                    (0, m.L$)(h.qb.WIDGET_SAVE_FAILURE);
                    return;
                }
                for (let e of P) {
                    let t = {
                        widgetEdited: e.type,
                        isWidgetRemoved: !1,
                    };
                    (0, g.Wc)(e) &&
                        ((t.gameIds = e.games.map((e) => e.applicationId)),
                        (t.tags = e.games
                            .flatMap((e) => {
                                var t;
                                return null != (t = e.tags) ? t : [];
                            })
                            .map((e) => e.toString())),
                        (t.numCharactersCommentary = e.games.reduce((e, t) => {
                            var n, r;
                            return e + (null != (r = null == (n = t.comment) ? void 0 : n.length) ? r : 0);
                        }, 0))),
                        n(t);
                }
                for (let e of I)
                    n({
                        widgetEdited: e.type,
                        isWidgetRemoved: !0,
                    });
            }
        }, [x, P, I, n]),
        D = i.useCallback(() => {
            p.Z.clearPendingWidgets();
        }, []);
    return T((e, n) =>
        n
            ? (0, r.jsx)(o.animated.div, {
                  className: t,
                  style: e,
                  children: (0, r.jsxs)("section", {
                      className: l()(O.content, { [O.emphasized]: a }),
                      "aria-label": v.intl.string(v.t["odDw+z"]),
                      children: [
                          (0, r.jsx)(s.Text, {
                              variant: "text-md/medium",
                              color: "text-strong",
                              className: O.message,
                              children: v.intl.string(v.t["/lQiX/"]),
                          }),
                          (0, r.jsxs)("div", {
                              className: O.actions,
                              children: [
                                  (0, r.jsx)(s.Button, {
                                      size: "sm",
                                      variant: "secondary",
                                      text: v.intl.string(v.t.yBZMsQ),
                                      onClick: D,
                                      disabled: !w || E,
                                  }),
                                  (0, r.jsx)(s.Button, {
                                      size: "sm",
                                      variant: "primary",
                                      text: v.intl.string(v.t["R3BPH+"]),
                                      onClick: C,
                                      loading: E,
                                      disabled: !S || !w || E,
                                  }),
                              ],
                          }),
                      ],
                  }),
              })
            : null,
    );
}
