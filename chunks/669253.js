n.d(t, { A: () => q, k: () => X });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(425763),
    d = n(447453),
    u = n(280450),
    c = n(591179),
    g = n(993165),
    m = n(403581),
    f = n(783420),
    x = n(206697),
    h = n(874402),
    I = n(570002),
    p = n(202541),
    A = n(375708);
function j() {
    let e = (0, g.YW)(),
        { goBack: t } = (0, g.pA)(),
        n = (0, I.A)(A.intl.string(A.t.pj0XBN));
    return (0, i.jsx)(f.A, {
        subscriptionTier: p.pe.TIER_2,
        onSubscribeModalClose: (e) => {
            e && (0, x.T)();
        },
        children: (l) => {
            let { onClick: s } = l;
            return (0, i.jsx)(h.$, {
                isVisible: e,
                labelId: "premium-try-it-out-footer-bar-label",
                noticeText: A.intl.string(A.t.X0ir7L),
                a11yAnnounceOnShow: A.intl.string(A.t.X0ir7L),
                a11yAnnounceOnHide: A.intl.string(A.t.ZcyFYa),
                secondaryAction: { text: A.intl.string(A.t.V3S9WW), onClick: t },
                primaryAction: { text: n, onClick: s, icon: m.t, variant: "expressive" },
            });
        },
    });
}
var E = n(803306),
    v = n(631670),
    S = n(682618),
    C = n(636537),
    b = n(228366),
    k = n(38405),
    T = n(652215);
async function N(e) {
    let { displayOrder: t, hiddenBadges: n } = e,
        i = { ...(null != t ? { display_order: t } : {}), ...(null != n ? { hidden_badges: n } : {}) };
    if (0 === Object.keys(i).length) return !0;
    try {
        let e = await C.Bo.patch({ url: T.Rsh.USER_BADGE_SETTINGS, body: i, rejectWithError: !0 });
        return b.h.dispatch({ type: "BADGE_SETTINGS_UPDATE", settings: e.body }), !0;
    } catch (e) {
        return k.A.captureException(e), !1;
    }
}
var y = n(234e3),
    w = n(159001),
    R = n(933725),
    _ = n(287809),
    L = n(625494),
    O = n(56348),
    P = n(207803),
    D = n(183555),
    M = n(289173),
    G = n(836602),
    U = n(958805),
    W = n(61881),
    F = n(624826),
    H = n(384377),
    B = n(518477);
function V(e) {
    let { guildId: t } = e,
        { trackUserProfileEditSaved: n } = (0, D.NJ)(),
        [s, r] = l.useState(!1),
        [o, d] = l.useState(!1),
        {
            widgetsToSave: u,
            changedWidgets: g,
            removedWidgets: m,
            hasUnsavedWidgets: f,
            canSaveWidgets: x,
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
        I = (0, c.X)("UserProfileModalV2SaveBar"),
        {
            hasUnsavedProfileChanges: p,
            canSubmitProfileChanges: j,
            hasBadgeChangesToSave: C,
        } = (0, a.cf)([G.A], () => ({
            hasUnsavedProfileChanges: G.A.hasUnsavedChanges(),
            canSubmitProfileChanges: G.A.canSubmit(),
            hasBadgeChangesToSave: (0, y.gz)(G.A.getPendingChanges()),
        })),
        b = I && p,
        k = f || b || C,
        V = !(f && !x) && (!I || j),
        z = l.useCallback(() => {
            U.A.clearPendingWidgets(), I ? (0, P.XQ)() : C && (0, y.Jp)();
        }, [I, C]),
        K = l.useCallback(async () => {
            if (I && !G.A.canSubmit()) return;
            d(!0);
            let e = !0;
            if (C) {
                let t = G.A.getPendingChanges(),
                    n = await N({ displayOrder: t.pendingBadgeDisplayOrder, hiddenBadges: t.pendingBadgeHiddenBadges });
                if (n) {
                    let e = _.default.getCurrentUser()?.id;
                    null != e && (await (0, E.fetchProfile)(e).catch(() => {})), await (0, S.RS)(), (0, y.Jp)();
                }
                e = n;
            }
            if (b)
                try {
                    if (null == t) {
                        let t = G.A.getPendingChanges(),
                            n = (0, O.Sk)(t),
                            i = (0, O.yX)(t);
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
                                l = await (0, P.gi)(n, void 0, t);
                            (e = e && (l?.ok ?? !1)), l?.ok && (0, P.RE)();
                        }
                    } else {
                        let n = G.A.getPendingChanges(t),
                            i = (0, O.C5)(n),
                            l = (0, O.yX)(n, t);
                        if (Object.keys(i).length > 0) {
                            let l = await (0, w.GL)(t, i);
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
                                s = await (0, P.gi)(i, t, n);
                            (e = e && (s?.ok ?? !1)), s?.ok && (0, P.RE)();
                        }
                    }
                    let n = (0, O.yg)(G.A.getPendingChanges());
                    if (Object.keys(n).length > 0) {
                        let { primaryGuildId: t } = n;
                        if (void 0 !== t) {
                            let n = await (0, R.m)(t, null !== t);
                            (e = e && (n?.ok ?? !1)), n?.ok && (0, v.fw)();
                        }
                    }
                } catch {
                    e = !1;
                }
            if (f)
                try {
                    for (let e of (await U.A.savePendingWidgets(u), g)) {
                        let t = { widgetEdited: e.type, isWidgetRemoved: !1 };
                        (0, M.fu)(e) &&
                            ((t.gameIds = e.games.map((e) => e.gameId)),
                            (t.tags = e.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0))),
                            n(t);
                    }
                    for (let e of m) n({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            e ? (0, v.x8)() : (0, H.XA)(B.jM.PROFILE_SAVE_GENERIC_FAILURE), d(!1);
        }, [I, b, C, f, u, g, m, n, t]);
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
                L._.subscribe(T.jej.EMPHASIZE_NOTICE, t),
                () => {
                    L._.unsubscribe(T.jej.EMPHASIZE_NOTICE, t), null != e && clearTimeout(e);
                }
            );
        }, []),
        (0, i.jsx)(h.$, {
            preventsPopoutDismiss: !0,
            isVisible: k,
            labelId: "user-profile-save-reset-toolbar-label",
            noticeText: A.intl.string(A.t["/lQiX/"]),
            isEmphasized: s,
            a11yAnnounceOnShow: A.intl.string(A.t["0Y/qkL"]),
            secondaryAction: { text: A.intl.string(A.t.yBZMsQ), onClick: z, disabled: !k || o },
            primaryAction: { text: A.intl.string(A.t["R3BPH+"]), onClick: K, loading: o, disabled: !V || !k },
        })
    );
}
var z = n(485745),
    K = n(893757);
function Y() {
    let e = !(0, c.X)("useEditingFooterState"),
        t = (0, o.VU)(),
        n = (0, z.A)(e),
        i = (0, g.YW)();
    return t ? "dnd" : i ? "premium-try-it-out" : n ? "save" : null;
}
function X(e) {
    let t = (0, a.bG)([u.default], () => u.default.getId() === e),
        n = Y();
    return t && null != n;
}
function q(e) {
    let { userId: t, guildId: n, className: s } = e,
        o = (0, a.bG)([u.default], () => u.default.getId() === t),
        c = Y(),
        [g, m] = l.useState(c);
    return (null != c && g !== c && m(c), o)
        ? (0, i.jsx)("div", {
              className: r()(K.k, s),
              children:
                  "dnd" === g
                      ? (0, i.jsx)(d.S, { className: K.W })
                      : "premium-try-it-out" === g
                        ? (0, i.jsx)(j, {})
                        : "save" === g
                          ? (0, i.jsx)(V, { guildId: n })
                          : null,
          })
        : null;
}
