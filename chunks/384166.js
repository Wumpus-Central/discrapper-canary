n.d(t, { Z: () => v }), n(388685), n(361932), n(187205);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(258536),
    s = n(442837),
    c = n(481060),
    u = n(607070),
    d = n(585483),
    p = n(785717),
    f = n(836197),
    h = n(592183),
    g = n(224724),
    m = n(872269),
    b = n(228168),
    _ = n(981631),
    O = n(388032),
    E = n(461671);
function v(e) {
    let { className: t } = e,
        { trackUserProfileEditSaved: n } = (0, p.KZ)(),
        [l, v] = i.useState(!1),
        y = (0, s.Wu)([g.Z], () => {
            var e;
            return null != (e = g.Z.getSaveablePendingWidgets()) ? e : [];
        }),
        I = (0, s.Wu)([g.Z], () => g.Z.getChangedWidgets()),
        C = (0, s.Wu)([g.Z], () => g.Z.getRemovedWidgets()),
        S = (0, s.e7)([g.Z], () => g.Z.hasSaveablePendingChanges()),
        T = (0, s.e7)([g.Z], () => g.Z.isSubmitting),
        N = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        j = (0, c.Yzy)(S, {
            from: {
                opacity: 0,
                y: 80 * !N,
            },
            enter: {
                opacity: 1,
                y: 0,
            },
            leave: {
                opacity: 0,
                y: 80 * !N,
            },
        });
    i.useEffect(() => {
        let e = null;
        function t() {
            v(!0), (e = setTimeout(() => v(!1), 500));
        }
        return (
            d.S.subscribe(_.CkL.EMPHASIZE_NOTICE, t),
            () => {
                d.S.unsubscribe(_.CkL.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e);
            }
        );
    }, []),
        i.useEffect(() => {
            S && c.uvj.announce(O.intl.string(O.t["0Y/qkL"]));
        }, [S]);
    let P = i.useCallback(async () => {
            try {
                await h.Z.savePendingWidgets(y);
            } catch (e) {
                (0, m.L$)(b.qb.WIDGET_SAVE_FAILURE);
                return;
            }
            for (let e of I) {
                let t = {
                    widgetEdited: e.type,
                    isWidgetRemoved: !1,
                };
                (0, f.Wc)(e) &&
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
            for (let e of C)
                n({
                    widgetEdited: e.type,
                    isWidgetRemoved: !0,
                });
        }, [y, I, C, n]),
        x = i.useCallback(() => {
            h.Z.clearPendingWidgets();
        }, []);
    return j((e, n) =>
        n
            ? (0, r.jsx)(o.animated.div, {
                  className: t,
                  style: e,
                  children: (0, r.jsxs)("section", {
                      className: a()(E.content, { [E.emphasized]: l }),
                      "aria-label": O.intl.string(O.t["odDw+z"]),
                      children: [
                          (0, r.jsx)(c.Text, {
                              variant: "text-md/medium",
                              color: "text-primary",
                              className: E.message,
                              children: O.intl.string(O.t["/lQiX/"]),
                          }),
                          (0, r.jsxs)("div", {
                              className: E.actions,
                              children: [
                                  (0, r.jsx)(c.Button, {
                                      size: "sm",
                                      variant: "secondary",
                                      text: O.intl.string(O.t.yBZMsQ),
                                      onClick: x,
                                      disabled: !S || T,
                                  }),
                                  (0, r.jsx)(c.Button, {
                                      size: "sm",
                                      variant: "primary",
                                      text: O.intl.string(O.t["R3BPH+"]),
                                      onClick: P,
                                      loading: T,
                                      disabled: !S || T,
                                  }),
                              ],
                          }),
                      ],
                  }),
              })
            : null,
    );
}
