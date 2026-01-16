n.d(t, { Z: () => x }), n(388685), n(361932), n(187205);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(81239),
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
    j = n(388032),
    O = n(933751);
function x(e) {
    let { className: t } = e,
        { trackUserProfileEditSaved: n } = (0, f.KZ)(),
        [l, x] = i.useState(!1),
        v = (0, c.Wu)([m.Z], () => {
            var e;
            return null != (e = m.Z.getSaveablePendingWidgets()) ? e : [];
        }),
        I = (0, c.Wu)([m.Z], () => m.Z.getChangedWidgets()),
        P = (0, c.Wu)([m.Z], () => m.Z.getRemovedWidgets()),
        w = (0, c.e7)([m.Z], () => m.Z.hasUnsavedChanges()),
        E = (0, c.e7)([m.Z], () => m.Z.canSaveChanges()),
        S = (0, c.e7)([m.Z], () => m.Z.isSubmitting),
        T = (0, c.e7)([u.Z], () => u.Z.useReducedMotion),
        _ = (0, s.Yzy)(w, {
            from: {
                opacity: 0,
                y: 80 * !T,
            },
            enter: {
                opacity: 1,
                y: 0,
            },
            leave: {
                opacity: 0,
                y: 80 * !T,
            },
        });
    i.useEffect(() => {
        let e = null;
        function t() {
            x(!0), (e = setTimeout(() => x(!1), 500));
        }
        return (
            d.S.subscribe(h.CkL.EMPHASIZE_NOTICE, t),
            () => {
                d.S.unsubscribe(h.CkL.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e);
            }
        );
    }, []),
        i.useEffect(() => {
            w && s.uvj.announce(j.intl.string(j.t["0Y/qkL"]));
        }, [w]);
    let C = i.useCallback(async () => {
            if (m.Z.canSaveChanges()) {
                try {
                    await p.Z.savePendingWidgets(v);
                } catch (e) {
                    (0, b.L$)(y.qb.WIDGET_SAVE_FAILURE);
                    return;
                }
                for (let e of I) {
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
            }
        }, [v, I, P, n]),
        N = i.useCallback(() => {
            p.Z.clearPendingWidgets();
        }, []);
    return _((e, n) =>
        n
            ? (0, r.jsx)(o.animated.div, {
                  className: t,
                  style: e,
                  children: (0, r.jsxs)("section", {
                      className: a()(O.content, { [O.emphasized]: l }),
                      "aria-label": j.intl.string(j.t["odDw+z"]),
                      children: [
                          (0, r.jsx)(s.Text, {
                              variant: "text-md/medium",
                              color: "text-strong",
                              className: O.message,
                              children: j.intl.string(j.t["/lQiX/"]),
                          }),
                          (0, r.jsxs)("div", {
                              className: O.actions,
                              children: [
                                  (0, r.jsx)(s.Button, {
                                      size: "sm",
                                      variant: "secondary",
                                      text: j.intl.string(j.t.yBZMsQ),
                                      onClick: N,
                                      disabled: !w || S,
                                  }),
                                  (0, r.jsx)(s.Button, {
                                      size: "sm",
                                      variant: "primary",
                                      text: j.intl.string(j.t["R3BPH+"]),
                                      onClick: C,
                                      loading: S,
                                      disabled: !E || !w || S,
                                  }),
                              ],
                          }),
                      ],
                  }),
              })
            : null,
    );
}
