i.d(t, { A: () => q, k: () => K });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    a = i.n(s),
    r = i(17928),
    o = i(425763),
    d = i(447453),
    c = i(280450),
    u = i(591179),
    g = i(993165),
    m = i(403581),
    x = i(783420),
    f = i(206697),
    h = i(874402),
    I = i(570002),
    p = i(202541),
    A = i(375708);
function j() {
    let e = (0, g.YW)(),
        { goBack: t } = (0, g.pA)(),
        i = (0, I.A)(A.intl.string(A.t.pj0XBN));
    return (0, n.jsx)(x.A, {
        subscriptionTier: p.pe.TIER_2,
        onSubscribeModalClose: (e) => {
            e && (0, f.T)();
        },
        children: (l) => {
            let { onClick: s } = l;
            return (0, n.jsx)(h.$, {
                isVisible: e,
                labelId: "premium-try-it-out-footer-bar-label",
                noticeText: A.intl.string(A.t.X0ir7L),
                a11yAnnounceOnShow: A.intl.string(A.t.X0ir7L),
                a11yAnnounceOnHide: A.intl.string(A.t.ZcyFYa),
                secondaryAction: { text: A.intl.string(A.t.V3S9WW), onClick: t },
                primaryAction: { text: i, onClick: s, icon: m.t, variant: "expressive" },
            });
        },
    });
}
var E = i(803306),
    v = i(631670),
    C = i(682618),
    S = i(636537),
    b = i(38405),
    k = i(652215);
async function T(e) {
    let { displayOrder: t, hiddenBadges: i } = e,
        n = { ...(null != t ? { display_order: t } : {}), ...(null != i ? { hidden_badges: i } : {}) };
    if (0 === Object.keys(n).length) return !0;
    try {
        return (await S.Bo.patch({ url: k.Rsh.USER_BADGE_SETTINGS, body: n, rejectWithError: !0 }), !0);
    } catch (e) {
        return (b.A.captureException(e), !1);
    }
}
var y = i(234e3),
    N = i(159001),
    R = i(933725),
    w = i(287809),
    L = i(625494),
    _ = i(56348),
    P = i(207803),
    O = i(183555),
    D = i(646976),
    G = i(289173),
    M = i(836602),
    U = i(958805),
    F = i(61881),
    W = i(624826),
    H = i(384377),
    V = i(518477);
function B(e) {
    let { guildId: t } = e,
        { trackUserProfileEditSaved: i } = (0, O.NJ)(),
        [s, a] = l.useState(!1),
        [o, d] = l.useState(!1),
        {
            widgetsToSave: c,
            changedWidgets: g,
            removedWidgets: m,
            hasUnsavedWidgets: x,
            canSaveWidgets: f,
        } = (function () {
            let e = (0, r.yK)([F.A], () => F.A.getSaveablePendingWidgets() ?? []),
                t = (0, r.yK)([F.A], () => F.A.getChangedWidgets()),
                i = (0, r.yK)([F.A], () => F.A.getRemovedWidgets()),
                { hasUnsavedWidgets: n, canSaveWidgets: l } = (0, r.cf)([F.A], () => ({
                    hasUnsavedWidgets: F.A.hasUnsavedChanges(),
                    canSaveWidgets: F.A.canSaveChanges(),
                }));
            return { widgetsToSave: e, changedWidgets: t, removedWidgets: i, hasUnsavedWidgets: n, canSaveWidgets: l };
        })(),
        I = (0, u.X)("UserProfileModalV2SaveBar"),
        {
            hasUnsavedProfileChanges: p,
            canSubmitProfileChanges: j,
            hasBadgeChangesToSave: S,
        } = (0, r.cf)([M.A], () => ({
            hasUnsavedProfileChanges: M.A.hasUnsavedChanges(),
            canSubmitProfileChanges: M.A.canSubmit(),
            hasBadgeChangesToSave: (0, y.gz)(M.A.getPendingChanges()),
        })),
        b = I && p,
        B = x || b || S,
        Y = !(x && !f) && (!I || j),
        z = l.useCallback(() => {
            (U.A.clearPendingWidgets(), I ? (0, P.XQ)() : S && (0, y.Jp)());
        }, [I, S]),
        X = l.useCallback(async () => {
            if (I && !M.A.canSubmit()) return;
            d(!0);
            let e = !0;
            if (S) {
                let t = M.A.getPendingChanges(),
                    i = await T({ displayOrder: t.pendingBadgeDisplayOrder, hiddenBadges: t.pendingBadgeHiddenBadges });
                if (i) {
                    let e = w.default.getCurrentUser()?.id;
                    (null != e && (await (0, E.fetchProfile)(e).catch(() => {})), await (0, C.RS)(), (0, y.Jp)());
                }
                e = i;
            }
            if (b)
                try {
                    if (null == t) {
                        let t = M.A.getPendingChanges(),
                            i = (0, _.Sk)(t),
                            n = (0, _.yX)(t);
                        if (Object.keys(i).length > 0) {
                            let n = await (0, v._L)(i);
                            ((e = e && (n?.ok ?? !1)),
                                n?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, W.t)({
                                            avatarHash: n.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, v.pZ)()));
                        }
                        if (Object.keys(n).length > 0) {
                            let { bannerOriginalMd5: t, ...i } = n,
                                l = await (0, P.gi)(i, void 0, t);
                            ((e = e && (l?.ok ?? !1)), l?.ok && (0, P.RE)());
                        }
                    } else {
                        let i = M.A.getPendingChanges(t),
                            n = (0, _.C5)(i),
                            l = (0, _.yX)(i, t);
                        if (Object.keys(n).length > 0) {
                            let l = await (0, N.GL)(t, n);
                            ((e = e && (l?.ok ?? !1)),
                                l?.ok &&
                                    (void 0 !== i.pendingAvatar &&
                                        (0, W.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: i.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, v.pZ)()));
                        }
                        if (Object.keys(l).length > 0) {
                            let { bannerOriginalMd5: i, ...n } = l,
                                s = await (0, P.gi)(n, t, i);
                            ((e = e && (s?.ok ?? !1)), s?.ok && (0, P.RE)());
                        }
                    }
                    let i = (0, _.yg)(M.A.getPendingChanges());
                    if (Object.keys(i).length > 0) {
                        let { primaryGuildId: t } = i;
                        if (void 0 !== t) {
                            let i = await (0, R.m)(t, null !== t);
                            ((e = e && (i?.ok ?? !1)), i?.ok && (0, v.fw)());
                        }
                    }
                } catch {
                    e = !1;
                }
            if (x)
                try {
                    for (let e of (await U.A.savePendingWidgets(c), g)) {
                        let t = { widgetEdited: e.type, isWidgetRemoved: !1 };
                        ((0, G.fu)(e)
                            ? ((t.gameIds = e.games.map((e) => e.gameId)),
                              (t.tags = e.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                              (t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0)))
                            : e instanceof D.kM &&
                              ((t.gameIds = e.clips.map((e) => e.gameId)),
                              (t.tags = e.clips.flatMap((e) => e.tags ?? []).map((e) => e.toString()))),
                            i(t));
                    }
                    for (let e of m) i({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            (e ? (0, v.x8)() : (0, H.XA)(V.jM.PROFILE_SAVE_GENERIC_FAILURE), d(!1));
        }, [I, b, S, x, c, g, m, i, t]);
    return (
        l.useEffect(() => {
            let e = null;
            function t() {
                (null != e && clearTimeout(e),
                    a(!0),
                    (e = setTimeout(() => {
                        a(!1);
                    }, 2500)));
            }
            return (
                L._.subscribe(k.jej.EMPHASIZE_NOTICE, t),
                () => {
                    (L._.unsubscribe(k.jej.EMPHASIZE_NOTICE, t), null != e && clearTimeout(e));
                }
            );
        }, []),
        (0, n.jsx)(h.$, {
            preventsPopoutDismiss: !0,
            isVisible: B,
            labelId: "user-profile-save-reset-toolbar-label",
            noticeText: A.intl.string(A.t["/lQiX/"]),
            isEmphasized: s,
            a11yAnnounceOnShow: A.intl.string(A.t["0Y/qkL"]),
            secondaryAction: { text: A.intl.string(A.t.yBZMsQ), onClick: z, disabled: !B || o },
            primaryAction: { text: A.intl.string(A.t["R3BPH+"]), onClick: X, loading: o, disabled: !Y || !B },
        })
    );
}
var Y = i(485745),
    z = i(893757);
function X() {
    let e = !(0, u.X)("useEditingFooterState"),
        t = (0, o.VU)(),
        i = (0, Y.A)(e),
        n = (0, g.YW)();
    return t ? "dnd" : n ? "premium-try-it-out" : i ? "save" : null;
}
function K(e) {
    let t = (0, r.bG)([c.default], () => c.default.getId() === e),
        i = X();
    return t && null != i;
}
function q(e) {
    let { userId: t, guildId: i, className: s } = e,
        o = (0, r.bG)([c.default], () => c.default.getId() === t),
        u = X(),
        [g, m] = l.useState(u);
    return (null != u && g !== u && m(u), o)
        ? (0, n.jsx)("div", {
              className: a()(z.k, s),
              children:
                  "dnd" === g
                      ? (0, n.jsx)(d.S, { className: z.W })
                      : "premium-try-it-out" === g
                        ? (0, n.jsx)(j, {})
                        : "save" === g
                          ? (0, n.jsx)(B, { guildId: i })
                          : null,
          })
        : null;
}
