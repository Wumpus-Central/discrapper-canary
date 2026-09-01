n.d(t, { A: () => q, k: () => Y });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(425763),
    d = n(447453),
    c = n(280450),
    u = n(591179),
    g = n(993165),
    m = n(403581),
    x = n(783420),
    f = n(206697),
    h = n(874402),
    p = n(570002),
    I = n(202541),
    j = n(375708);
function A() {
    let e = (0, g.YW)(),
        { goBack: t } = (0, g.pA)(),
        n = (0, p.A)(j.intl.string(j.t.pj0XBN));
    return (0, i.jsx)(x.A, {
        subscriptionTier: I.pe.TIER_2,
        onSubscribeModalClose: (e) => {
            e && (0, f.T)();
        },
        children: (l) => {
            let { onClick: s } = l;
            return (0, i.jsx)(h.$, {
                isVisible: e,
                labelId: "premium-try-it-out-footer-bar-label",
                noticeText: j.intl.string(j.t.X0ir7L),
                a11yAnnounceOnShow: j.intl.string(j.t.X0ir7L),
                a11yAnnounceOnHide: j.intl.string(j.t.ZcyFYa),
                secondaryAction: { text: j.intl.string(j.t.V3S9WW), onClick: t },
                primaryAction: { text: n, onClick: s, icon: m.t, variant: "expressive" },
            });
        },
    });
}
var E = n(803306),
    v = n(631670),
    C = n(682618),
    S = n(636537),
    b = n(228366),
    T = n(38405),
    N = n(652215);
async function k(e) {
    let { displayOrder: t, hiddenBadges: n } = e,
        i = { ...(null != t ? { display_order: t } : {}), ...(null != n ? { hidden_badges: n } : {}) };
    if (0 === Object.keys(i).length) return !0;
    try {
        let e = await S.Bo.patch({ url: N.Rsh.USER_BADGE_SETTINGS, body: i, rejectWithError: !0 });
        return b.h.dispatch({ type: "BADGE_SETTINGS_UPDATE", settings: e.body }), !0;
    } catch (e) {
        return T.A.captureException(e), !1;
    }
}
var y = n(234e3),
    R = n(159001),
    w = n(933725),
    L = n(287809),
    O = n(625494),
    P = n(56348),
    _ = n(207803),
    D = n(183555),
    G = n(289173),
    M = n(836602),
    U = n(958805),
    W = n(61881),
    F = n(624826),
    H = n(384377),
    V = n(518477);
function B(e) {
    let { guildId: t } = e,
        { trackUserProfileEditSaved: n } = (0, D.NJ)(),
        [s, r] = l.useState(!1),
        [o, d] = l.useState(!1),
        {
            widgetsToSave: c,
            changedWidgets: g,
            removedWidgets: m,
            hasUnsavedWidgets: x,
            canSaveWidgets: f,
        } = (function () {
            let e = (0, a.yK)([W.A], () => W.A.getSaveablePendingWidgets() ?? []),
                t = (0, a.yK)([W.A], () => W.A.getChangedWidgets()),
                n = (0, a.yK)([W.A], () => W.A.getRemovedWidgets()),
                { hasUnsavedWidgets: i, canSaveWidgets: l } = (0, a.cf)([W.A], () => ({
                    hasUnsavedWidgets: W.A.hasUnsavedChanges(),
                    canSaveWidgets: W.A.canSaveChanges(),
                }));
            return { widgetsToSave: e, changedWidgets: t, removedWidgets: n, hasUnsavedWidgets: i, canSaveWidgets: l };
        })(),
        p = (0, u.X)("UserProfileModalV2SaveBar"),
        {
            hasUnsavedProfileChanges: I,
            canSubmitProfileChanges: A,
            hasBadgeChangesToSave: S,
        } = (0, a.cf)([M.A], () => ({
            hasUnsavedProfileChanges: M.A.hasUnsavedChanges(),
            canSubmitProfileChanges: M.A.canSubmit(),
            hasBadgeChangesToSave: (0, y.gz)(M.A.getPendingChanges()),
        })),
        b = p && I,
        T = x || b || S,
        B = !(x && !f) && (!p || A),
        z = l.useCallback(() => {
            U.A.clearPendingWidgets(), p ? (0, _.XQ)() : S && (0, y.Jp)();
        }, [p, S]),
        X = l.useCallback(async () => {
            if (p && !M.A.canSubmit()) return;
            d(!0);
            let e = !0;
            if (S) {
                let t = M.A.getPendingChanges(),
                    n = await k({ displayOrder: t.pendingBadgeDisplayOrder, hiddenBadges: t.pendingBadgeHiddenBadges });
                if (n) {
                    let e = L.default.getCurrentUser()?.id;
                    null != e && (await (0, E.fetchProfile)(e).catch(() => {})), await (0, C.RS)(), (0, y.Jp)();
                }
                e = n;
            }
            if (b)
                try {
                    if (null == t) {
                        let t = M.A.getPendingChanges(),
                            n = (0, P.Sk)(t),
                            i = (0, P.yX)(t);
                        if (Object.keys(n).length > 0) {
                            let i = await (0, v._L)(n);
                            (e = e && (i?.ok ?? !1)),
                                i?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, F.t)({
                                            avatarHash: i.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, v.pZ)());
                        }
                        if (Object.keys(i).length > 0) {
                            let { bannerOriginalMd5: t, ...n } = i,
                                l = await (0, _.gi)(n, void 0, t);
                            (e = e && (l?.ok ?? !1)), l?.ok && (0, _.RE)();
                        }
                    } else {
                        let n = M.A.getPendingChanges(t),
                            i = (0, P.C5)(n),
                            l = (0, P.yX)(n, t);
                        if (Object.keys(i).length > 0) {
                            let l = await (0, R.GL)(t, i);
                            (e = e && (l?.ok ?? !1)),
                                l?.ok &&
                                    (void 0 !== n.pendingAvatar &&
                                        (0, F.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: n.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, v.pZ)());
                        }
                        if (Object.keys(l).length > 0) {
                            let { bannerOriginalMd5: n, ...i } = l,
                                s = await (0, _.gi)(i, t, n);
                            (e = e && (s?.ok ?? !1)), s?.ok && (0, _.RE)();
                        }
                    }
                    let n = (0, P.yg)(M.A.getPendingChanges());
                    if (Object.keys(n).length > 0) {
                        let { primaryGuildId: t } = n;
                        if (void 0 !== t) {
                            let n = await (0, w.m)(t, null !== t);
                            (e = e && (n?.ok ?? !1)), n?.ok && (0, v.fw)();
                        }
                    }
                } catch {
                    e = !1;
                }
            if (x)
                try {
                    for (let e of (await U.A.savePendingWidgets(c), g)) {
                        let t = { widgetEdited: e.type, isWidgetRemoved: !1 };
                        (0, G.fu)(e) &&
                            ((t.gameIds = e.games.map((e) => e.gameId)),
                            (t.tags = e.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0))),
                            n(t);
                    }
                    for (let e of m) n({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            e ? (0, v.x8)() : (0, H.XA)(V.jM.PROFILE_SAVE_GENERIC_FAILURE), d(!1);
        }, [p, b, S, x, c, g, m, n, t]);
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
                O._.subscribe(N.jej.EMPHASIZE_NOTICE, t),
                () => {
                    O._.unsubscribe(N.jej.EMPHASIZE_NOTICE, t), null != e && clearTimeout(e);
                }
            );
        }, []),
        (0, i.jsx)(h.$, {
            preventsPopoutDismiss: !0,
            isVisible: T,
            labelId: "user-profile-save-reset-toolbar-label",
            noticeText: j.intl.string(j.t["/lQiX/"]),
            isEmphasized: s,
            a11yAnnounceOnShow: j.intl.string(j.t["0Y/qkL"]),
            secondaryAction: { text: j.intl.string(j.t.yBZMsQ), onClick: z, disabled: !T || o },
            primaryAction: { text: j.intl.string(j.t["R3BPH+"]), onClick: X, loading: o, disabled: !B || !T },
        })
    );
}
var z = n(485745),
    X = n(893757);
function K() {
    let e = !(0, u.X)("useEditingFooterState"),
        t = (0, o.VU)(),
        n = (0, z.A)(e),
        i = (0, g.YW)();
    return t ? "dnd" : i ? "premium-try-it-out" : n ? "save" : null;
}
function Y(e) {
    let t = (0, a.bG)([c.default], () => c.default.getId() === e),
        n = K();
    return t && null != n;
}
function q(e) {
    let { userId: t, guildId: n, className: s } = e,
        o = (0, a.bG)([c.default], () => c.default.getId() === t),
        u = K(),
        [g, m] = l.useState(u);
    return (null != u && g !== u && m(u), o)
        ? (0, i.jsx)("div", {
              className: r()(X.k, s),
              children:
                  "dnd" === g
                      ? (0, i.jsx)(d.S, { className: X.W })
                      : "premium-try-it-out" === g
                        ? (0, i.jsx)(A, {})
                        : "save" === g
                          ? (0, i.jsx)(B, { guildId: n })
                          : null,
          })
        : null;
}
