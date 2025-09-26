n.d(t, { Z: () => y }), n(388685), n(361932), n(187205);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(786920),
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
function y(e) {
    let { className: t } = e,
        { trackUserProfileEditSaved: n } = (0, p.KZ)(),
        [l, y] = i.useState(!1),
        v = (0, s.Wu)([g.Z], () => {
            var e;
            return null != (e = g.Z.getSaveablePendingWidgets()) ? e : [];
        }),
        I = (0, s.Wu)([g.Z], () => g.Z.getChangedWidgets()),
        S = (0, s.Wu)([g.Z], () => g.Z.getRemovedWidgets()),
        C = (0, s.e7)([g.Z], () => g.Z.hasSaveablePendingChanges()),
        T = (0, s.e7)([g.Z], () => g.Z.isSubmitting),
        N = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        P = (0, c.Yzy)(C, {
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
            y(!0), (e = setTimeout(() => y(!1), 500));
        }
        return (
            d.S.subscribe(_.CkL.EMPHASIZE_NOTICE, t),
            () => {
                d.S.unsubscribe(_.CkL.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e);
            }
        );
    }, []),
        i.useEffect(() => {
            C && c.uvj.announce(O.intl.string(O.t["0Y/qkJ"]));
        }, [C]);
    let j = i.useCallback(async () => {
            try {
                await h.Z.savePendingWidgets(v);
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
            for (let e of S)
                n({
                    widgetEdited: e.type,
                    isWidgetRemoved: !0,
                });
        }, [v, I, S, n]),
        x = i.useCallback(() => {
            h.Z.clearPendingWidgets();
        }, []);
    return P((e, n) =>
        n
            ? (0, r.jsx)(o.animated.div, {
                  className: t,
                  style: e,
                  children: (0, r.jsxs)("section", {
                      className: a()(E.content, { [E.emphasized]: l }),
                      "aria-label": O.intl.string(O.t["odDw+/"]),
                      children: [
                          (0, r.jsx)(c.Text, {
                              variant: "text-md/medium",
                              color: "text-primary",
                              className: E.message,
                              children: O.intl.string(O.t["/lQiX1"]),
                          }),
                          (0, r.jsxs)("div", {
                              className: E.actions,
                              children: [
                                  (0, r.jsx)(c.zxk, {
                                      size: "sm",
                                      variant: "secondary",
                                      text: O.intl.string(O.t.yBZMsb),
                                      onClick: x,
                                      disabled: !C || T,
                                  }),
                                  (0, r.jsx)(c.zxk, {
                                      size: "sm",
                                      variant: "primary",
                                      text: O.intl.string(O.t.R3BPHx),
                                      onClick: j,
                                      loading: T,
                                      disabled: !C || T,
                                  }),
                              ],
                          }),
                      ],
                  }),
              })
            : null,
    );
}
