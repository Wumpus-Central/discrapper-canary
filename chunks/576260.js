i.d(t, { A: () => F, k: () => U });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    r = i.n(l),
    a = i(17928),
    o = i(425763),
    d = i(447453),
    c = i(280450),
    u = i(591179),
    g = i(580929),
    m = i(866323),
    f = i(765178),
    x = i(834730),
    h = i(821609),
    I = i(631670),
    p = i(775602),
    A = i(159001),
    j = i(933725),
    E = i(625494),
    S = i(56348),
    T = i(207803),
    v = i(183555),
    N = i(289173),
    b = i(836602),
    C = i(958805),
    w = i(61881),
    R = i(624826),
    O = i(384377),
    k = i(518477),
    y = i(652215),
    _ = i(375708),
    G = i(381280);
let L = "user-profile-save-reset-toolbar-label";
function D(e) {
    let { className: t, guildId: i } = e,
        { trackUserProfileEditSaved: l } = (0, v.NJ)(),
        o = (0, a.bG)([p.Ay], () => p.Ay.useReducedMotion),
        [d, c] = s.useState(!1),
        [D, P] = s.useState(!1),
        M = s.useRef(!1),
        U = s.useRef(null),
        {
            widgetsToSave: F,
            changedWidgets: W,
            removedWidgets: H,
            hasUnsavedWidgets: B,
            canSaveWidgets: V,
        } = (function () {
            let e = (0, a.yK)([w.A], () => w.A.getSaveablePendingWidgets() ?? []),
                t = (0, a.yK)([w.A], () => w.A.getChangedWidgets()),
                i = (0, a.yK)([w.A], () => w.A.getRemovedWidgets()),
                { hasUnsavedWidgets: n, canSaveWidgets: s } = (0, a.cf)([w.A], () => ({
                    hasUnsavedWidgets: w.A.hasUnsavedChanges(),
                    canSaveWidgets: w.A.canSaveChanges(),
                }));
            return { widgetsToSave: e, changedWidgets: t, removedWidgets: i, hasUnsavedWidgets: n, canSaveWidgets: s };
        })(),
        X = (0, u.X)("UserProfileModalV2SaveBar"),
        { hasUnsavedProfileChanges: z, canSubmitProfileChanges: Y } = (0, a.cf)([b.A], () => ({
            hasUnsavedProfileChanges: b.A.hasUnsavedChanges(),
            canSubmitProfileChanges: b.A.canSubmit(),
        })),
        K = X && z,
        q = B || K,
        Q = !(B && !V) && (!X || Y),
        J = (0, m.p)(q, {
            from: { opacity: 0, y: 80 * !o },
            enter: { opacity: 1, y: 0 },
            leave: { opacity: 0, y: 80 * !o },
            onRest: (e, t) => {
                t.item &&
                    e.finished &&
                    (null != U.current && clearTimeout(U.current),
                    (U.current = setTimeout(() => {
                        (U.current = null), M.current && f.O.announce(_.intl.string(_.t["0Y/qkL"]));
                    }, 300)));
            },
        }),
        Z = s.useCallback(() => {
            C.A.clearPendingWidgets(), X && (0, T.XQ)();
        }, [X]),
        $ = s.useCallback(async () => {
            if (X && !b.A.canSubmit()) return;
            P(!0);
            let e = !0;
            if (K)
                try {
                    if (null == i) {
                        let t = b.A.getPendingChanges(),
                            i = (0, S.Sk)(t),
                            n = (0, S.yX)(t);
                        if (Object.keys(i).length > 0) {
                            let n = await (0, I._L)(i);
                            (e = n?.ok ?? !1),
                                n?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, R.t)({
                                            avatarHash: n.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, I.pZ)());
                        }
                        if (Object.keys(n).length > 0) {
                            let { bannerOriginalMd5: t, ...i } = n,
                                s = await (0, T.gi)(i, void 0, t);
                            (e = e && (s?.ok ?? !1)), s?.ok && (0, T.RE)();
                        }
                    } else {
                        let t = b.A.getPendingChanges(i),
                            n = (0, S.C5)(t),
                            s = (0, S.yX)(t, i);
                        if (Object.keys(n).length > 0) {
                            let s = await (0, A.GL)(i, n);
                            (e = s?.ok ?? !1),
                                s?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, R.t)({
                                            isGuildProfile: !0,
                                            avatarHash: s.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, I.pZ)());
                        }
                        if (Object.keys(s).length > 0) {
                            let { bannerOriginalMd5: t, ...n } = s,
                                l = await (0, T.gi)(n, i, t);
                            (e = e && (l?.ok ?? !1)), l?.ok && (0, T.RE)();
                        }
                    }
                    let t = (0, S.yg)(b.A.getPendingChanges());
                    if (Object.keys(t).length > 0) {
                        let { primaryGuildId: i } = t;
                        if (void 0 !== i) {
                            let t = await (0, j.m)(i, null !== i);
                            (e = e && (t?.ok ?? !1)), t?.ok && (0, I.fw)();
                        }
                    }
                } catch {
                    e = !1;
                }
            if (B)
                try {
                    for (let e of (await C.A.savePendingWidgets(F), W)) {
                        let t = { widgetEdited: e.type, isWidgetRemoved: !1 };
                        (0, N.fu)(e) &&
                            ((t.gameIds = e.games.map((e) => e.applicationId)),
                            (t.tags = e.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0))),
                            l(t);
                    }
                    for (let e of H) l({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            e ? (0, I.x8)() : (0, O.XA)(k.jM.PROFILE_SAVE_GENERIC_FAILURE), P(!1);
        }, [X, K, B, F, W, H, l, i]);
    return (
        s.useEffect(() => {
            M.current = q;
        }, [q]),
        s.useEffect(
            () => () => {
                null != U.current && clearTimeout(U.current);
            },
            [],
        ),
        s.useEffect(() => {
            let e = null;
            function t() {
                c(!0), (e = setTimeout(() => c(!1), 500));
            }
            return (
                E._.subscribe(y.jej.EMPHASIZE_NOTICE, t),
                () => {
                    E._.unsubscribe(y.jej.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e);
                }
            );
        }, []),
        J((e, i) =>
            i
                ? (0, n.jsx)(g.animated.div, {
                      className: t,
                      style: e,
                      children: (0, n.jsxs)("footer", {
                          className: r()(G.Qs, { [G.hO]: d }),
                          "aria-labelledby": L,
                          children: [
                              (0, n.jsx)(x.E, {
                                  id: L,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  className: G.iU,
                                  children: _.intl.string(_.t["/lQiX/"]),
                              }),
                              (0, n.jsxs)("div", {
                                  className: G.o1,
                                  children: [
                                      (0, n.jsx)(h.$, {
                                          size: "sm",
                                          variant: "secondary",
                                          text: _.intl.string(_.t.yBZMsQ),
                                          onClick: Z,
                                          disabled: !q || D,
                                      }),
                                      (0, n.jsx)(h.$, {
                                          size: "sm",
                                          variant: "primary",
                                          text: _.intl.string(_.t["R3BPH+"]),
                                          onClick: $,
                                          loading: D,
                                          disabled: !Q || !q,
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
var P = i(485745),
    M = i(367414);
function U(e) {
    let t = (0, a.bG)([c.default], () => c.default.getId() === e),
        i = !(0, u.X)("useIsModalV2EditingToolbarVisible"),
        n = (0, o.VU)(),
        s = (0, P.A)(i);
    return t && (n || s);
}
function F(e) {
    let { userId: t, guildId: i, className: s } = e,
        l = (0, a.bG)([c.default], () => c.default.getId() === t),
        u = (0, o.VU)();
    return l
        ? (0, n.jsx)("div", {
              className: r()(M.k, s),
              children: u ? (0, n.jsx)(d.S, { className: M.W }) : (0, n.jsx)(D, { guildId: i }),
          })
        : null;
}
