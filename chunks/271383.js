i.d(t, { A: () => K, k: () => X });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    r = i.n(s),
    a = i(17928),
    o = i(425763),
    d = i(447453),
    c = i(280450),
    u = i(591179),
    g = i(152298),
    m = i(403581),
    x = i(783420),
    f = i(682577),
    h = i(866323),
    p = i(765178),
    I = i(834730),
    j = i(821609),
    v = i(775602),
    A = i(471771);
function E(e) {
    let {
            isVisible: t,
            labelId: i,
            noticeText: s,
            primaryAction: o,
            secondaryAction: d,
            isEmphasized: c = !1,
            a11yAnnounceOnShow: u,
            a11yAnnounceOnHide: g,
        } = e,
        m = (0, a.bG)([v.Ay], () => v.Ay.useReducedMotion),
        x = l.useRef(null);
    return (
        l.useEffect(
            () => () => {
                null != x.current && clearTimeout(x.current);
            },
            [],
        ),
        (0, h.p)(t, {
            from: { opacity: 0, y: 80 * !m },
            enter: { opacity: 1, y: 0 },
            leave: { opacity: 0, y: 80 * !m },
            onRest: (e, t) => {
                if (!e.finished) return;
                let i = t.item ? u : g;
                null != x.current && clearTimeout(x.current),
                    null != i
                        ? (x.current = setTimeout(() => {
                              (x.current = null), p.O.announce(i);
                          }, 300))
                        : (x.current = null);
            },
        })((e, t) =>
            t
                ? (0, n.jsx)(f.animated.div, {
                      style: e,
                      children: (0, n.jsxs)("footer", {
                          className: r()(A.Qs, { [A.hO]: c }),
                          "aria-labelledby": i,
                          children: [
                              (0, n.jsx)(I.E, {
                                  variant: "text-sm/normal",
                                  color: "text-strong",
                                  id: i,
                                  className: A.ut,
                                  children: s,
                              }),
                              (0, n.jsxs)("div", {
                                  className: A.o1,
                                  children: [
                                      (0, n.jsx)(j.$, { variant: "secondary", size: "sm", ...d }),
                                      (0, n.jsx)(j.$, { variant: "primary", size: "sm", ...o }),
                                  ],
                              }),
                          ],
                      }),
                  })
                : null,
        )
    );
}
var S = i(570002),
    C = i(202541),
    b = i(375708);
function N() {
    let { isPremiumTryItOutView: e, goBack: t } = (0, g.qh)(),
        i = (0, S.A)(b.intl.string(b.t.pj0XBN));
    return (0, n.jsx)(x.A, {
        subscriptionTier: C.pe.TIER_2,
        children: (l) => {
            let { onClick: s } = l;
            return (0, n.jsx)(E, {
                isVisible: e,
                labelId: "premium-try-it-out-footer-bar-label",
                noticeText: b.intl.string(b.t.X0ir7L),
                a11yAnnounceOnShow: b.intl.string(b.t.X0ir7L),
                a11yAnnounceOnHide: b.intl.string(b.t.ZcyFYa),
                secondaryAction: { text: b.intl.string(b.t.V3S9WW), onClick: t },
                primaryAction: { text: i, onClick: s, icon: m.t, variant: "expressive" },
            });
        },
    });
}
var w = i(631670),
    T = i(159001),
    k = i(933725),
    y = i(625494),
    R = i(56348),
    O = i(207803),
    L = i(183555),
    _ = i(289173),
    P = i(836602),
    D = i(958805),
    G = i(61881),
    M = i(624826),
    U = i(384377),
    F = i(518477),
    W = i(652215);
function V(e) {
    let { guildId: t } = e,
        { trackUserProfileEditSaved: i } = (0, L.NJ)(),
        [s, r] = l.useState(!1),
        [o, d] = l.useState(!1),
        {
            widgetsToSave: c,
            changedWidgets: g,
            removedWidgets: m,
            hasUnsavedWidgets: x,
            canSaveWidgets: f,
        } = (function () {
            let e = (0, a.yK)([G.A], () => G.A.getSaveablePendingWidgets() ?? []),
                t = (0, a.yK)([G.A], () => G.A.getChangedWidgets()),
                i = (0, a.yK)([G.A], () => G.A.getRemovedWidgets()),
                { hasUnsavedWidgets: n, canSaveWidgets: l } = (0, a.cf)([G.A], () => ({
                    hasUnsavedWidgets: G.A.hasUnsavedChanges(),
                    canSaveWidgets: G.A.canSaveChanges(),
                }));
            return { widgetsToSave: e, changedWidgets: t, removedWidgets: i, hasUnsavedWidgets: n, canSaveWidgets: l };
        })(),
        h = (0, u.X)("UserProfileModalV2SaveBar"),
        { hasUnsavedProfileChanges: p, canSubmitProfileChanges: I } = (0, a.cf)([P.A], () => ({
            hasUnsavedProfileChanges: P.A.hasUnsavedChanges(),
            canSubmitProfileChanges: P.A.canSubmit(),
        })),
        j = h && p,
        v = x || j,
        A = !(x && !f) && (!h || I),
        S = l.useCallback(() => {
            D.A.clearPendingWidgets(), h && (0, O.XQ)();
        }, [h]),
        C = l.useCallback(async () => {
            if (h && !P.A.canSubmit()) return;
            d(!0);
            let e = !0;
            if (j)
                try {
                    if (null == t) {
                        let t = P.A.getPendingChanges(),
                            i = (0, R.Sk)(t),
                            n = (0, R.yX)(t);
                        if (Object.keys(i).length > 0) {
                            let n = await (0, w._L)(i);
                            (e = n?.ok ?? !1),
                                n?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, M.t)({
                                            avatarHash: n.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, w.pZ)());
                        }
                        if (Object.keys(n).length > 0) {
                            let { bannerOriginalMd5: t, ...i } = n,
                                l = await (0, O.gi)(i, void 0, t);
                            (e = e && (l?.ok ?? !1)), l?.ok && (0, O.RE)();
                        }
                    } else {
                        let i = P.A.getPendingChanges(t),
                            n = (0, R.C5)(i),
                            l = (0, R.yX)(i, t);
                        if (Object.keys(n).length > 0) {
                            let l = await (0, T.GL)(t, n);
                            (e = l?.ok ?? !1),
                                l?.ok &&
                                    (void 0 !== i.pendingAvatar &&
                                        (0, M.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: i.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, w.pZ)());
                        }
                        if (Object.keys(l).length > 0) {
                            let { bannerOriginalMd5: i, ...n } = l,
                                s = await (0, O.gi)(n, t, i);
                            (e = e && (s?.ok ?? !1)), s?.ok && (0, O.RE)();
                        }
                    }
                    let i = (0, R.yg)(P.A.getPendingChanges());
                    if (Object.keys(i).length > 0) {
                        let { primaryGuildId: t } = i;
                        if (void 0 !== t) {
                            let i = await (0, k.m)(t, null !== t);
                            (e = e && (i?.ok ?? !1)), i?.ok && (0, w.fw)();
                        }
                    }
                } catch {
                    e = !1;
                }
            if (x)
                try {
                    for (let e of (await D.A.savePendingWidgets(c), g)) {
                        let t = { widgetEdited: e.type, isWidgetRemoved: !1 };
                        (0, _.fu)(e) &&
                            ((t.gameIds = e.games.map((e) => e.gameId)),
                            (t.tags = e.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0))),
                            i(t);
                    }
                    for (let e of m) i({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            e ? (0, w.x8)() : (0, U.XA)(F.jM.PROFILE_SAVE_GENERIC_FAILURE), d(!1);
        }, [h, j, x, c, g, m, i, t]);
    return (
        l.useEffect(() => {
            let e = null;
            function t() {
                null != e && clearTimeout(e),
                    r(!0),
                    (e = setTimeout(() => {
                        r(!1);
                    }, 2500));
            }
            return (
                y._.subscribe(W.jej.EMPHASIZE_NOTICE, t),
                () => {
                    y._.unsubscribe(W.jej.EMPHASIZE_NOTICE, t), null != e && clearTimeout(e);
                }
            );
        }, []),
        (0, n.jsx)(E, {
            isVisible: v,
            labelId: "user-profile-save-reset-toolbar-label",
            noticeText: b.intl.string(b.t["/lQiX/"]),
            isEmphasized: s,
            a11yAnnounceOnShow: b.intl.string(b.t["0Y/qkL"]),
            secondaryAction: { text: b.intl.string(b.t.yBZMsQ), onClick: S, disabled: !v || o },
            primaryAction: { text: b.intl.string(b.t["R3BPH+"]), onClick: C, loading: o, disabled: !A || !v },
        })
    );
}
var H = i(485745),
    B = i(983486);
function z() {
    let e = !(0, u.X)("useEditingFooterState"),
        t = (0, o.VU)(),
        i = (0, H.A)(e),
        { isPremiumTryItOutView: n } = (0, g.qh)();
    return t ? "dnd" : n ? "premium-try-it-out" : i ? "save" : null;
}
function X(e) {
    let t = (0, a.bG)([c.default], () => c.default.getId() === e),
        i = z();
    return t && null != i;
}
function K(e) {
    let { userId: t, guildId: i, className: s } = e,
        o = (0, a.bG)([c.default], () => c.default.getId() === t),
        u = z(),
        [g, m] = l.useState(u);
    return (null != u && g !== u && m(u), o)
        ? (0, n.jsx)("div", {
              className: r()(B.k, s),
              children:
                  "dnd" === g
                      ? (0, n.jsx)(d.S, { className: B.W })
                      : "premium-try-it-out" === g
                        ? (0, n.jsx)(N, {})
                        : "save" === g
                          ? (0, n.jsx)(V, { guildId: i })
                          : null,
          })
        : null;
}
