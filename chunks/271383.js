i.d(t, { A: () => Y, k: () => K });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    r = i.n(s),
    a = i(17928),
    o = i(425763),
    d = i(447453),
    c = i(280450),
    u = i(591179),
    g = i(993165),
    m = i(403581),
    x = i(783420),
    f = i(206697),
    h = i(221877),
    p = i(866323),
    I = i(765178),
    j = i(834730),
    A = i(821609),
    v = i(775602),
    E = i(485038);
function S(e) {
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
        (0, p.p)(t, {
            from: { opacity: 0, y: 80 * !m },
            enter: { opacity: 1, y: 0 },
            leave: { opacity: 0, y: 80 * !m },
            onRest: (e, t) => {
                if (!e.finished) return;
                let i = t.item ? u : g;
                null != x.current && clearTimeout(x.current),
                    null != i
                        ? (x.current = setTimeout(() => {
                              (x.current = null), I.O.announce(i);
                          }, 300))
                        : (x.current = null);
            },
        })((e, t) =>
            t
                ? (0, n.jsx)(h.animated.div, {
                      style: e,
                      children: (0, n.jsxs)("footer", {
                          className: r()(E.Qs, { [E.hO]: c }),
                          "aria-labelledby": i,
                          children: [
                              (0, n.jsx)(j.E, {
                                  variant: "text-sm/normal",
                                  color: "text-strong",
                                  id: i,
                                  className: E.ut,
                                  children: s,
                              }),
                              (0, n.jsxs)("div", {
                                  className: E.o1,
                                  children: [
                                      (0, n.jsx)(A.$, { variant: "secondary", size: "sm", ...d }),
                                      (0, n.jsx)(A.$, { variant: "primary", size: "sm", ...o }),
                                  ],
                              }),
                          ],
                      }),
                  })
                : null,
        )
    );
}
var C = i(570002),
    b = i(202541),
    T = i(375708);
function N() {
    let e = (0, g.YW)(),
        { goBack: t } = (0, g.pA)(),
        i = (0, C.A)(T.intl.string(T.t.pj0XBN));
    return (0, n.jsx)(x.A, {
        subscriptionTier: b.pe.TIER_2,
        onSubscribeModalClose: (e) => {
            e && (0, f.T)();
        },
        children: (l) => {
            let { onClick: s } = l;
            return (0, n.jsx)(S, {
                isVisible: e,
                labelId: "premium-try-it-out-footer-bar-label",
                noticeText: T.intl.string(T.t.X0ir7L),
                a11yAnnounceOnShow: T.intl.string(T.t.X0ir7L),
                a11yAnnounceOnHide: T.intl.string(T.t.ZcyFYa),
                secondaryAction: { text: T.intl.string(T.t.V3S9WW), onClick: t },
                primaryAction: { text: i, onClick: s, icon: m.t, variant: "expressive" },
            });
        },
    });
}
var y = i(631670),
    k = i(159001),
    w = i(933725),
    R = i(625494),
    O = i(56348),
    L = i(207803),
    _ = i(183555),
    D = i(289173),
    P = i(836602),
    G = i(958805),
    M = i(61881),
    U = i(624826),
    F = i(384377),
    W = i(518477),
    H = i(652215);
function V(e) {
    let { guildId: t } = e,
        { trackUserProfileEditSaved: i } = (0, _.NJ)(),
        [s, r] = l.useState(!1),
        [o, d] = l.useState(!1),
        {
            widgetsToSave: c,
            changedWidgets: g,
            removedWidgets: m,
            hasUnsavedWidgets: x,
            canSaveWidgets: f,
        } = (function () {
            let e = (0, a.yK)([M.A], () => M.A.getSaveablePendingWidgets() ?? []),
                t = (0, a.yK)([M.A], () => M.A.getChangedWidgets()),
                i = (0, a.yK)([M.A], () => M.A.getRemovedWidgets()),
                { hasUnsavedWidgets: n, canSaveWidgets: l } = (0, a.cf)([M.A], () => ({
                    hasUnsavedWidgets: M.A.hasUnsavedChanges(),
                    canSaveWidgets: M.A.canSaveChanges(),
                }));
            return { widgetsToSave: e, changedWidgets: t, removedWidgets: i, hasUnsavedWidgets: n, canSaveWidgets: l };
        })(),
        h = (0, u.X)("UserProfileModalV2SaveBar"),
        { hasUnsavedProfileChanges: p, canSubmitProfileChanges: I } = (0, a.cf)([P.A], () => ({
            hasUnsavedProfileChanges: P.A.hasUnsavedChanges(),
            canSubmitProfileChanges: P.A.canSubmit(),
        })),
        j = h && p,
        A = x || j,
        v = !(x && !f) && (!h || I),
        E = l.useCallback(() => {
            G.A.clearPendingWidgets(), h && (0, L.XQ)();
        }, [h]),
        C = l.useCallback(async () => {
            if (h && !P.A.canSubmit()) return;
            d(!0);
            let e = !0;
            if (j)
                try {
                    if (null == t) {
                        let t = P.A.getPendingChanges(),
                            i = (0, O.Sk)(t),
                            n = (0, O.yX)(t);
                        if (Object.keys(i).length > 0) {
                            let n = await (0, y._L)(i);
                            (e = n?.ok ?? !1),
                                n?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, U.t)({
                                            avatarHash: n.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, y.pZ)());
                        }
                        if (Object.keys(n).length > 0) {
                            let { bannerOriginalMd5: t, ...i } = n,
                                l = await (0, L.gi)(i, void 0, t);
                            (e = e && (l?.ok ?? !1)), l?.ok && (0, L.RE)();
                        }
                    } else {
                        let i = P.A.getPendingChanges(t),
                            n = (0, O.C5)(i),
                            l = (0, O.yX)(i, t);
                        if (Object.keys(n).length > 0) {
                            let l = await (0, k.GL)(t, n);
                            (e = l?.ok ?? !1),
                                l?.ok &&
                                    (void 0 !== i.pendingAvatar &&
                                        (0, U.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: i.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, y.pZ)());
                        }
                        if (Object.keys(l).length > 0) {
                            let { bannerOriginalMd5: i, ...n } = l,
                                s = await (0, L.gi)(n, t, i);
                            (e = e && (s?.ok ?? !1)), s?.ok && (0, L.RE)();
                        }
                    }
                    let i = (0, O.yg)(P.A.getPendingChanges());
                    if (Object.keys(i).length > 0) {
                        let { primaryGuildId: t } = i;
                        if (void 0 !== t) {
                            let i = await (0, w.m)(t, null !== t);
                            (e = e && (i?.ok ?? !1)), i?.ok && (0, y.fw)();
                        }
                    }
                } catch {
                    e = !1;
                }
            if (x)
                try {
                    for (let e of (await G.A.savePendingWidgets(c), g)) {
                        let t = { widgetEdited: e.type, isWidgetRemoved: !1 };
                        (0, D.fu)(e) &&
                            ((t.gameIds = e.games.map((e) => e.gameId)),
                            (t.tags = e.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0))),
                            i(t);
                    }
                    for (let e of m) i({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            e ? (0, y.x8)() : (0, F.XA)(W.jM.PROFILE_SAVE_GENERIC_FAILURE), d(!1);
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
                R._.subscribe(H.jej.EMPHASIZE_NOTICE, t),
                () => {
                    R._.unsubscribe(H.jej.EMPHASIZE_NOTICE, t), null != e && clearTimeout(e);
                }
            );
        }, []),
        (0, n.jsx)(S, {
            isVisible: A,
            labelId: "user-profile-save-reset-toolbar-label",
            noticeText: T.intl.string(T.t["/lQiX/"]),
            isEmphasized: s,
            a11yAnnounceOnShow: T.intl.string(T.t["0Y/qkL"]),
            secondaryAction: { text: T.intl.string(T.t.yBZMsQ), onClick: E, disabled: !A || o },
            primaryAction: { text: T.intl.string(T.t["R3BPH+"]), onClick: C, loading: o, disabled: !v || !A },
        })
    );
}
var B = i(485745),
    z = i(893757);
function X() {
    let e = !(0, u.X)("useEditingFooterState"),
        t = (0, o.VU)(),
        i = (0, B.A)(e),
        n = (0, g.YW)();
    return t ? "dnd" : n ? "premium-try-it-out" : i ? "save" : null;
}
function K(e) {
    let t = (0, a.bG)([c.default], () => c.default.getId() === e),
        i = X();
    return t && null != i;
}
function Y(e) {
    let { userId: t, guildId: i, className: s } = e,
        o = (0, a.bG)([c.default], () => c.default.getId() === t),
        u = X(),
        [g, m] = l.useState(u);
    return (null != u && g !== u && m(u), o)
        ? (0, n.jsx)("div", {
              className: r()(z.k, s),
              children:
                  "dnd" === g
                      ? (0, n.jsx)(d.S, { className: z.W })
                      : "premium-try-it-out" === g
                        ? (0, n.jsx)(N, {})
                        : "save" === g
                          ? (0, n.jsx)(V, { guildId: i })
                          : null,
          })
        : null;
}
