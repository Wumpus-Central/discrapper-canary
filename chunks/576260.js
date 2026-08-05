i.d(t, { A: () => F, k: () => U });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    r = i.n(s),
    a = i(17928),
    o = i(425763),
    d = i(447453),
    c = i(280450),
    u = i(591179),
    g = i(534740),
    m = i(866323),
    x = i(765178),
    f = i(834730),
    h = i(821609),
    p = i(631670),
    I = i(775602),
    j = i(159001),
    v = i(933725),
    A = i(625494),
    E = i(56348),
    S = i(207803),
    C = i(183555),
    b = i(289173),
    N = i(836602),
    w = i(958805),
    T = i(61881),
    k = i(624826),
    y = i(384377),
    R = i(518477),
    O = i(652215),
    L = i(375708),
    _ = i(552024);
let D = "user-profile-save-reset-toolbar-label";
function P(e) {
    let { className: t, guildId: i } = e,
        { trackUserProfileEditSaved: s } = (0, C.NJ)(),
        o = (0, a.bG)([I.Ay], () => I.Ay.useReducedMotion),
        [d, c] = l.useState(!1),
        [P, G] = l.useState(!1),
        M = l.useRef(!1),
        U = l.useRef(null),
        {
            widgetsToSave: F,
            changedWidgets: W,
            removedWidgets: V,
            hasUnsavedWidgets: H,
            canSaveWidgets: B,
        } = (function () {
            let e = (0, a.yK)([T.A], () => T.A.getSaveablePendingWidgets() ?? []),
                t = (0, a.yK)([T.A], () => T.A.getChangedWidgets()),
                i = (0, a.yK)([T.A], () => T.A.getRemovedWidgets()),
                { hasUnsavedWidgets: n, canSaveWidgets: l } = (0, a.cf)([T.A], () => ({
                    hasUnsavedWidgets: T.A.hasUnsavedChanges(),
                    canSaveWidgets: T.A.canSaveChanges(),
                }));
            return { widgetsToSave: e, changedWidgets: t, removedWidgets: i, hasUnsavedWidgets: n, canSaveWidgets: l };
        })(),
        z = (0, u.X)("UserProfileModalV2SaveBar"),
        { hasUnsavedProfileChanges: X, canSubmitProfileChanges: K } = (0, a.cf)([N.A], () => ({
            hasUnsavedProfileChanges: N.A.hasUnsavedChanges(),
            canSubmitProfileChanges: N.A.canSubmit(),
        })),
        Y = z && X,
        q = H || Y,
        Z = !(H && !B) && (!z || K),
        J = (0, m.p)(q, {
            from: { opacity: 0, y: 80 * !o },
            enter: { opacity: 1, y: 0 },
            leave: { opacity: 0, y: 80 * !o },
            onRest: (e, t) => {
                t.item &&
                    e.finished &&
                    (null != U.current && clearTimeout(U.current),
                    (U.current = setTimeout(() => {
                        (U.current = null), M.current && x.O.announce(L.intl.string(L.t["0Y/qkL"]));
                    }, 300)));
            },
        }),
        Q = l.useCallback(() => {
            w.A.clearPendingWidgets(), z && (0, S.XQ)();
        }, [z]),
        $ = l.useCallback(async () => {
            if (z && !N.A.canSubmit()) return;
            G(!0);
            let e = !0;
            if (Y)
                try {
                    if (null == i) {
                        let t = N.A.getPendingChanges(),
                            i = (0, E.Sk)(t),
                            n = (0, E.yX)(t);
                        if (Object.keys(i).length > 0) {
                            let n = await (0, p._L)(i);
                            (e = n?.ok ?? !1),
                                n?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, k.t)({
                                            avatarHash: n.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, p.pZ)());
                        }
                        if (Object.keys(n).length > 0) {
                            let { bannerOriginalMd5: t, ...i } = n,
                                l = await (0, S.gi)(i, void 0, t);
                            (e = e && (l?.ok ?? !1)), l?.ok && (0, S.RE)();
                        }
                    } else {
                        let t = N.A.getPendingChanges(i),
                            n = (0, E.C5)(t),
                            l = (0, E.yX)(t, i);
                        if (Object.keys(n).length > 0) {
                            let l = await (0, j.GL)(i, n);
                            (e = l?.ok ?? !1),
                                l?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, k.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, p.pZ)());
                        }
                        if (Object.keys(l).length > 0) {
                            let { bannerOriginalMd5: t, ...n } = l,
                                s = await (0, S.gi)(n, i, t);
                            (e = e && (s?.ok ?? !1)), s?.ok && (0, S.RE)();
                        }
                    }
                    let t = (0, E.yg)(N.A.getPendingChanges());
                    if (Object.keys(t).length > 0) {
                        let { primaryGuildId: i } = t;
                        if (void 0 !== i) {
                            let t = await (0, v.m)(i, null !== i);
                            (e = e && (t?.ok ?? !1)), t?.ok && (0, p.fw)();
                        }
                    }
                } catch {
                    e = !1;
                }
            if (H)
                try {
                    for (let e of (await w.A.savePendingWidgets(F), W)) {
                        let t = { widgetEdited: e.type, isWidgetRemoved: !1 };
                        (0, b.fu)(e) &&
                            ((t.gameIds = e.games.map((e) => e.gameId)),
                            (t.tags = e.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0))),
                            s(t);
                    }
                    for (let e of V) s({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            e ? (0, p.x8)() : (0, y.XA)(R.jM.PROFILE_SAVE_GENERIC_FAILURE), G(!1);
        }, [z, Y, H, F, W, V, s, i]);
    return (
        l.useEffect(() => {
            M.current = q;
        }, [q]),
        l.useEffect(
            () => () => {
                null != U.current && clearTimeout(U.current);
            },
            [],
        ),
        l.useEffect(() => {
            let e = null;
            function t() {
                null != e && clearTimeout(e),
                    c(!0),
                    (e = setTimeout(() => {
                        c(!1);
                    }, 2500));
            }
            return (
                A._.subscribe(O.jej.EMPHASIZE_NOTICE, t),
                () => {
                    A._.unsubscribe(O.jej.EMPHASIZE_NOTICE, t), null != e && clearTimeout(e);
                }
            );
        }, []),
        J((e, i) =>
            i
                ? (0, n.jsx)(g.animated.div, {
                      className: t,
                      style: e,
                      children: (0, n.jsxs)("footer", {
                          className: r()(_.Qs, { [_.hO]: d }),
                          "aria-labelledby": D,
                          children: [
                              (0, n.jsx)(f.E, {
                                  id: D,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  className: _.iU,
                                  children: L.intl.string(L.t["/lQiX/"]),
                              }),
                              (0, n.jsxs)("div", {
                                  className: _.o1,
                                  children: [
                                      (0, n.jsx)(h.$, {
                                          size: "sm",
                                          variant: "secondary",
                                          text: L.intl.string(L.t.yBZMsQ),
                                          onClick: Q,
                                          disabled: !q || P,
                                      }),
                                      (0, n.jsx)(h.$, {
                                          size: "sm",
                                          variant: "primary",
                                          text: L.intl.string(L.t["R3BPH+"]),
                                          onClick: $,
                                          loading: P,
                                          disabled: !Z || !q,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  })
                : null,
        )
    );
}
var G = i(485745),
    M = i(983486);
function U(e) {
    let t = (0, a.bG)([c.default], () => c.default.getId() === e),
        i = !(0, u.X)("useIsModalV2EditingToolbarVisible"),
        n = (0, o.VU)(),
        l = (0, G.A)(i);
    return t && (n || l);
}
function F(e) {
    let { userId: t, guildId: i, className: l } = e,
        s = (0, a.bG)([c.default], () => c.default.getId() === t),
        u = (0, o.VU)();
    return s
        ? (0, n.jsx)("div", {
              className: r()(M.k, l),
              children: u ? (0, n.jsx)(d.S, { className: M.W }) : (0, n.jsx)(P, { guildId: i }),
          })
        : null;
}
