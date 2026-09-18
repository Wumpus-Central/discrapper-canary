i.d(t, { A: () => Z, k: () => q });
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
    x = i(561243),
    f = i(783420),
    h = i(206697),
    I = i(874402),
    p = i(570002),
    A = i(202541),
    j = i(375708);
function E() {
    let e = (0, g.YW)(),
        { goBack: t } = (0, g.pA)(),
        i = (0, p.A)(j.intl.string(j.t.pj0XBN));
    return (0, n.jsx)(f.A, {
        subscriptionTier: A.pe.TIER_2,
        onClick: h.t,
        onSubscribeModalClose: (e) => {
            (e && (0, h.T)(), (0, x.J)());
        },
        children: (l) => {
            let { onClick: s } = l;
            return (0, n.jsx)(I.$, {
                isVisible: e,
                labelId: "premium-try-it-out-footer-bar-label",
                noticeText: j.intl.string(j.t.X0ir7L),
                a11yAnnounceOnShow: j.intl.string(j.t.X0ir7L),
                a11yAnnounceOnHide: j.intl.string(j.t.ZcyFYa),
                secondaryAction: { text: j.intl.string(j.t.V3S9WW), onClick: t },
                primaryAction: { text: i, onClick: s, icon: m.t, variant: "expressive" },
            });
        },
    });
}
var v = i(803306),
    C = i(631670),
    S = i(682618),
    b = i(636537),
    k = i(38405),
    T = i(652215);
async function y(e) {
    let { displayOrder: t, hiddenBadges: i } = e,
        n = { ...(null != t ? { display_order: t } : {}), ...(null != i ? { hidden_badges: i } : {}) };
    if (0 === Object.keys(n).length) return !0;
    try {
        return (await b.Bo.patch({ url: T.Rsh.USER_BADGE_SETTINGS, body: n, rejectWithError: !0 }), !0);
    } catch (e) {
        return (k.A.captureException(e), !1);
    }
}
var N = i(234e3),
    R = i(159001),
    w = i(933725),
    L = i(287809),
    _ = i(625494),
    P = i(56348),
    O = i(207803),
    D = i(183555),
    G = i(646976),
    M = i(289173),
    U = i(836602),
    F = i(958805),
    W = i(61881),
    H = i(624826),
    V = i(384377),
    B = i(518477);
function Y(e) {
    let { guildId: t } = e,
        { trackUserProfileEditSaved: i } = (0, D.NJ)(),
        [s, a] = l.useState(!1),
        [o, d] = l.useState(!1),
        {
            widgetsToSave: c,
            changedWidgets: g,
            removedWidgets: m,
            hasUnsavedWidgets: x,
            canSaveWidgets: f,
        } = (function () {
            let e = (0, r.yK)([W.A], () => W.A.getSaveablePendingWidgets() ?? []),
                t = (0, r.yK)([W.A], () => W.A.getChangedWidgets()),
                i = (0, r.yK)([W.A], () => W.A.getRemovedWidgets()),
                { hasUnsavedWidgets: n, canSaveWidgets: l } = (0, r.cf)([W.A], () => ({
                    hasUnsavedWidgets: W.A.hasUnsavedChanges(),
                    canSaveWidgets: W.A.canSaveChanges(),
                }));
            return { widgetsToSave: e, changedWidgets: t, removedWidgets: i, hasUnsavedWidgets: n, canSaveWidgets: l };
        })(),
        h = (0, u.X)("UserProfileModalV2SaveBar"),
        {
            hasUnsavedProfileChanges: p,
            canSubmitProfileChanges: A,
            hasBadgeChangesToSave: E,
        } = (0, r.cf)([U.A], () => ({
            hasUnsavedProfileChanges: U.A.hasUnsavedChanges(),
            canSubmitProfileChanges: U.A.canSubmit(),
            hasBadgeChangesToSave: (0, N.gz)(U.A.getPendingChanges()),
        })),
        b = h && p,
        k = x || b || E,
        Y = !(x && !f) && (!h || A),
        z = l.useCallback(() => {
            (F.A.clearPendingWidgets(), h ? (0, O.XQ)() : E && (0, N.Jp)());
        }, [h, E]),
        X = l.useCallback(async () => {
            if (h && !U.A.canSubmit()) return;
            d(!0);
            let e = !0;
            if (E) {
                let t = U.A.getPendingChanges(),
                    i = await y({ displayOrder: t.pendingBadgeDisplayOrder, hiddenBadges: t.pendingBadgeHiddenBadges });
                if (i) {
                    let e = L.default.getCurrentUser()?.id;
                    (null != e && (await (0, v.fetchProfile)(e).catch(() => {})), await (0, S.RS)(), (0, N.Jp)());
                }
                e = i;
            }
            if (b)
                try {
                    if (null == t) {
                        let t = U.A.getPendingChanges(),
                            i = (0, P.Sk)(t),
                            n = (0, P.yX)(t);
                        if (Object.keys(i).length > 0) {
                            let n = await (0, C._L)(i);
                            ((e = e && (n?.ok ?? !1)),
                                n?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, H.t)({
                                            avatarHash: n.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, C.pZ)()));
                        }
                        if (Object.keys(n).length > 0) {
                            let { bannerOriginalMd5: t, ...i } = n,
                                l = await (0, O.gi)(i, void 0, t);
                            ((e = e && (l?.ok ?? !1)), l?.ok && (0, O.RE)());
                        }
                    } else {
                        let i = U.A.getPendingChanges(t),
                            n = (0, P.C5)(i),
                            l = (0, P.yX)(i, t);
                        if (Object.keys(n).length > 0) {
                            let l = await (0, R.GL)(t, n);
                            ((e = e && (l?.ok ?? !1)),
                                l?.ok &&
                                    (void 0 !== i.pendingAvatar &&
                                        (0, H.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: i.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, C.pZ)()));
                        }
                        if (Object.keys(l).length > 0) {
                            let { bannerOriginalMd5: i, ...n } = l,
                                s = await (0, O.gi)(n, t, i);
                            ((e = e && (s?.ok ?? !1)), s?.ok && (0, O.RE)());
                        }
                    }
                    let i = (0, P.yg)(U.A.getPendingChanges());
                    if (Object.keys(i).length > 0) {
                        let { primaryGuildId: t } = i;
                        if (void 0 !== t) {
                            let i = await (0, w.m)(t, null !== t);
                            ((e = e && (i?.ok ?? !1)), i?.ok && (0, C.fw)());
                        }
                    }
                } catch {
                    e = !1;
                }
            if (x)
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
                            i(t));
                    }
                    for (let e of m) i({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            (e ? (0, C.x8)() : (0, V.XA)(B.jM.PROFILE_SAVE_GENERIC_FAILURE), d(!1));
        }, [h, b, E, x, c, g, m, i, t]);
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
                _._.subscribe(T.jej.EMPHASIZE_NOTICE, t),
                () => {
                    (_._.unsubscribe(T.jej.EMPHASIZE_NOTICE, t), null != e && clearTimeout(e));
                }
            );
        }, []),
        (0, n.jsx)(I.$, {
            preventsPopoutDismiss: !0,
            isVisible: k,
            labelId: "user-profile-save-reset-toolbar-label",
            noticeText: j.intl.string(j.t["/lQiX/"]),
            isEmphasized: s,
            a11yAnnounceOnShow: j.intl.string(j.t["0Y/qkL"]),
            secondaryAction: { text: j.intl.string(j.t.yBZMsQ), onClick: z, disabled: !k || o },
            primaryAction: { text: j.intl.string(j.t["R3BPH+"]), onClick: X, loading: o, disabled: !Y || !k },
        })
    );
}
var z = i(485745),
    X = i(893757);
function K() {
    let e = !(0, u.X)("useEditingFooterState"),
        t = (0, o.VU)(),
        i = (0, z.A)(e),
        n = (0, g.YW)();
    return t ? "dnd" : n ? "premium-try-it-out" : i ? "save" : null;
}
function q(e) {
    let t = (0, r.bG)([c.default], () => c.default.getId() === e),
        i = K();
    return t && null != i;
}
function Z(e) {
    let { userId: t, guildId: i, className: s } = e,
        o = (0, r.bG)([c.default], () => c.default.getId() === t),
        u = K(),
        [g, m] = l.useState(u);
    return (null != u && g !== u && m(u), o)
        ? (0, n.jsx)("div", {
              className: a()(X.k, s),
              children:
                  "dnd" === g
                      ? (0, n.jsx)(d.S, { className: X.W })
                      : "premium-try-it-out" === g
                        ? (0, n.jsx)(E, {})
                        : "save" === g
                          ? (0, n.jsx)(Y, { guildId: i })
                          : null,
          })
        : null;
}
