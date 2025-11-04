n.d(t, { Z: () => j }), n(388685), n(361932), n(187205);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(358458),
    c = n(442837),
    s = n(481060),
    u = n(607070),
    d = n(585483),
    f = n(785717),
    g = n(836197),
    p = n(592183),
    m = n(224724),
    b = n(872269),
    y = n(228168),
    h = n(981631),
    v = n(388032),
    O = n(461671);
function j(e) {
    let { className: t } = e,
        { trackUserProfileEditSaved: n } = (0, f.KZ)(),
        [a, j] = i.useState(!1),
        x = (0, c.Wu)([m.Z], () => {
            var e;
            return null != (e = m.Z.getSaveablePendingWidgets()) ? e : [];
        }),
        _ = (0, c.Wu)([m.Z], () => m.Z.getChangedWidgets()),
        P = (0, c.Wu)([m.Z], () => m.Z.getRemovedWidgets()),
        I = (0, c.e7)([m.Z], () => m.Z.hasSaveablePendingChanges()),
        w = (0, c.e7)([m.Z], () => m.Z.isSubmitting),
        S = (0, c.e7)([u.Z], () => u.Z.useReducedMotion),
        E = (0, s.Yzy)(I, {
            from: {
                opacity: 0,
                y: 80 * !S,
            },
            enter: {
                opacity: 1,
                y: 0,
            },
            leave: {
                opacity: 0,
                y: 80 * !S,
            },
        });
    i.useEffect(() => {
        let e = null;
        function t() {
            j(!0), (e = setTimeout(() => j(!1), 500));
        }
        return (
            d.S.subscribe(h.CkL.EMPHASIZE_NOTICE, t),
            () => {
                d.S.unsubscribe(h.CkL.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e);
            }
        );
    }, []),
        i.useEffect(() => {
            I && s.uvj.announce(v.intl.string(v.t["0Y/qkL"]));
        }, [I]);
    let T = i.useCallback(async () => {
            try {
                await p.Z.savePendingWidgets(x);
            } catch (e) {
                (0, b.L$)(y.qb.WIDGET_SAVE_FAILURE);
                return;
            }
            for (let e of _) {
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
            for (let e of P)
                n({
                    widgetEdited: e.type,
                    isWidgetRemoved: !0,
                });
        }, [x, _, P, n]),
        C = i.useCallback(() => {
            p.Z.clearPendingWidgets();
        }, []);
    return E((e, n) =>
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
                              color: "text-primary",
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
                                      onClick: C,
                                      disabled: !I || w,
                                  }),
                                  (0, r.jsx)(s.Button, {
                                      size: "sm",
                                      variant: "primary",
                                      text: v.intl.string(v.t["R3BPH+"]),
                                      onClick: T,
                                      loading: w,
                                      disabled: !I || w,
                                  }),
                              ],
                          }),
                      ],
                  }),
              })
            : null,
    );
}
