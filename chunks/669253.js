n.d(t, { A: () => J, k: () => q });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    o = n(425763),
    d = n(447453),
    c = n(280450),
    u = n(591179),
    g = n(993165),
    m = n(403581),
    f = n(561243),
    x = n(783420),
    h = n(206697),
    p = n(874402),
    I = n(570002),
    E = n(202541),
    A = n(375708);
function j() {
    let e = (0, g.YW)(),
        { goBack: t } = (0, g.pA)(),
        n = (0, I.A)(A.intl.string(A.t.pj0XBN));
    return (0, i.jsx)(x.A, {
        subscriptionTier: E.pe.TIER_2,
        onClick: h.t,
        onSubscribeModalClose: (e) => {
            (e && (0, h.T)(), (0, f.J)());
        },
        children: (l) => {
            let { onClick: s } = l;
            return (0, i.jsx)(p.$, {
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
var v = n(803306),
    C = n(631670),
    b = n(682618),
    k = n(636537),
    S = n(38405),
    y = n(652215);
async function R(e) {
    let { displayOrder: t, hiddenBadges: n } = e,
        i = { ...(null != t ? { display_order: t } : {}), ...(null != n ? { hidden_badges: n } : {}) };
    if (0 === Object.keys(i).length) return !0;
    try {
        return (await k.Bo.patch({ url: y.Rsh.USER_BADGE_SETTINGS, body: i, rejectWithError: !0 }), !0);
    } catch (e) {
        return (S.A.captureException(e), !1);
    }
}
var N = n(234e3),
    T = n(159001),
    w = n(933725),
    L = n(287809),
    P = n(625494),
    _ = n(56348),
    O = n(207803),
    D = n(183555),
    G = n(646976),
    M = n(289173),
    U = n(836602),
    F = n(958805),
    W = n(61881),
    H = n(624826),
    B = n(384377),
    V = n(518477);
function K(e) {
    let { guildId: t } = e,
        { trackUserProfileEditSaved: n } = (0, D.NJ)(),
        [s, a] = l.useState(!1),
        [o, d] = l.useState(!1),
        {
            widgetsToSave: c,
            changedWidgets: g,
            removedWidgets: m,
            hasUnsavedWidgets: f,
            canSaveWidgets: x,
        } = (function () {
            let e = (0, r.yK)([W.A], () => W.A.getSaveablePendingWidgets() ?? []),
                t = (0, r.yK)([W.A], () => W.A.getChangedWidgets()),
                n = (0, r.yK)([W.A], () => W.A.getRemovedWidgets()),
                { hasUnsavedWidgets: i, canSaveWidgets: l } = (0, r.cf)([W.A], () => ({
                    hasUnsavedWidgets: W.A.hasUnsavedChanges(),
                    canSaveWidgets: W.A.canSaveChanges(),
                }));
            return { widgetsToSave: e, changedWidgets: t, removedWidgets: n, hasUnsavedWidgets: i, canSaveWidgets: l };
        })(),
        h = (0, u.X)("UserProfileModalV2SaveBar"),
        {
            hasUnsavedProfileChanges: I,
            canSubmitProfileChanges: E,
            hasBadgeChangesToSave: j,
        } = (0, r.cf)([U.A], () => ({
            hasUnsavedProfileChanges: U.A.hasUnsavedChanges(),
            canSubmitProfileChanges: U.A.canSubmit(),
            hasBadgeChangesToSave: (0, N.gz)(U.A.getPendingChanges()),
        })),
        k = h && I,
        S = f || k || j,
        K = !(f && !x) && (!h || E),
        z = l.useCallback(() => {
            (F.A.clearPendingWidgets(), h ? (0, O.XQ)() : j && (0, N.Jp)());
        }, [h, j]),
        X = l.useCallback(async () => {
            if (h && !U.A.canSubmit()) return;
            d(!0);
            let e = !0;
            if (j) {
                let t = U.A.getPendingChanges(),
                    n = await R({ displayOrder: t.pendingBadgeDisplayOrder, hiddenBadges: t.pendingBadgeHiddenBadges });
                if (n) {
                    let e = L.default.getCurrentUser()?.id;
                    (null != e && (await (0, v.eO)(e).catch(() => {})), await (0, b.RS)(), (0, N.Jp)());
                }
                e = n;
            }
            if (k)
                try {
                    if (null == t) {
                        let t = U.A.getPendingChanges(),
                            n = (0, _.Sk)(t),
                            i = (0, _.yX)(t);
                        if (Object.keys(n).length > 0) {
                            let i = await (0, C._L)(n);
                            ((e = e && (i?.ok ?? !1)),
                                i?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, H.t)({
                                            avatarHash: i.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, C.pZ)()));
                        }
                        if (Object.keys(i).length > 0) {
                            let { bannerOriginalMd5: t, ...n } = i,
                                l = await (0, O.gi)(n, void 0, t);
                            ((e = e && (l?.ok ?? !1)), l?.ok && (0, O.RE)());
                        }
                    } else {
                        let n = U.A.getPendingChanges(t),
                            i = (0, _.C5)(n),
                            l = (0, _.yX)(n, t);
                        if (Object.keys(i).length > 0) {
                            let l = await (0, T.GL)(t, i);
                            ((e = e && (l?.ok ?? !1)),
                                l?.ok &&
                                    (void 0 !== n.pendingAvatar &&
                                        (0, H.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: n.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, C.pZ)()));
                        }
                        if (Object.keys(l).length > 0) {
                            let { bannerOriginalMd5: n, ...i } = l,
                                s = await (0, O.gi)(i, t, n);
                            ((e = e && (s?.ok ?? !1)), s?.ok && (0, O.RE)());
                        }
                    }
                    let n = (0, _.yg)(U.A.getPendingChanges());
                    if (Object.keys(n).length > 0) {
                        let { primaryGuildId: t } = n;
                        if (void 0 !== t) {
                            let n = await (0, w.m)(t, null !== t);
                            ((e = e && (n?.ok ?? !1)), n?.ok && (0, C.fw)());
                        }
                    }
                } catch {
                    e = !1;
                }
            if (f)
                try {
                    for (let e of (await F.A.savePendingWidgets(c), g)) {
                        let t = { widgetEdited: e.type, isWidgetRemoved: !1 };
                        ((0, M.fu)(e)
                            ? ((t.gameIds = e.games.map((e) => e.gameId)),
                              (t.tags = e.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                              (t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0)))
                            : e instanceof G.kM &&
                              ((t.gameIds = e.clips.map((e) => e.gameId)),
                              (t.tags = e.clips.flatMap((e) => e.tags ?? []).map((e) => e.toString()))),
                            n(t));
                    }
                    for (let e of m) n({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            (e ? (0, C.x8)() : (0, B.XA)(V.jM.PROFILE_SAVE_GENERIC_FAILURE), d(!1));
        }, [h, k, j, f, c, g, m, n, t]);
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
                P._.subscribe(y.jej.EMPHASIZE_NOTICE, t),
                () => {
                    (P._.unsubscribe(y.jej.EMPHASIZE_NOTICE, t), null != e && clearTimeout(e));
                }
            );
        }, []),
        (0, i.jsx)(p.$, {
            preventsPopoutDismiss: !0,
            isVisible: S,
            labelId: "user-profile-save-reset-toolbar-label",
            noticeText: A.intl.string(A.t["/lQiX/"]),
            isEmphasized: s,
            a11yAnnounceOnShow: A.intl.string(A.t["0Y/qkL"]),
            secondaryAction: { text: A.intl.string(A.t.yBZMsQ), onClick: z, disabled: !S || o },
            primaryAction: { text: A.intl.string(A.t["R3BPH+"]), onClick: X, loading: o, disabled: !K || !S },
        })
    );
}
var z = n(485745),
    X = n(893757);
function Y() {
    let e = !(0, u.X)("useEditingFooterState"),
        t = (0, o.VU)(),
        n = (0, z.A)(e),
        i = (0, g.YW)();
    return t ? "dnd" : i ? "premium-try-it-out" : n ? "save" : null;
}
function q(e) {
    let t = (0, r.bG)([c.default], () => c.default.getId() === e),
        n = Y();
    return t && null != n;
}
function J(e) {
    let { userId: t, guildId: n, className: s } = e,
        o = (0, r.bG)([c.default], () => c.default.getId() === t),
        u = Y(),
        [g, m] = l.useState(u);
    return (null != u && g !== u && m(u), o)
        ? (0, i.jsx)("div", {
              className: a()(X.k, s),
              children:
                  "dnd" === g
                      ? (0, i.jsx)(d.S, { className: X.W })
                      : "premium-try-it-out" === g
                        ? (0, i.jsx)(j, {})
                        : "save" === g
                          ? (0, i.jsx)(K, { guildId: n })
                          : null,
          })
        : null;
}
