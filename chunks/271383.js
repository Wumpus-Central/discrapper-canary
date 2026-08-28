n.d(t, { A: () => Y, k: () => K });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(425763),
    c = n(447453),
    d = n(280450),
    u = n(591179),
    g = n(993165),
    m = n(403581),
    x = n(783420),
    f = n(206697),
    h = n(221877),
    p = n(866323),
    I = n(765178),
    j = n(834730),
    A = n(821609),
    E = n(775602),
    v = n(485038);
function C(e) {
    let {
            isVisible: t,
            labelId: n,
            noticeText: s,
            primaryAction: o,
            secondaryAction: c,
            isEmphasized: d = !1,
            a11yAnnounceOnShow: u,
            a11yAnnounceOnHide: g,
        } = e,
        m = (0, a.bG)([E.Ay], () => E.Ay.useReducedMotion),
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
                let n = t.item ? u : g;
                null != x.current && clearTimeout(x.current),
                    null != n
                        ? (x.current = setTimeout(() => {
                              (x.current = null), I.O.announce(n);
                          }, 300))
                        : (x.current = null);
            },
        })((e, t) =>
            t
                ? (0, i.jsx)(h.animated.div, {
                      style: e,
                      children: (0, i.jsxs)("footer", {
                          className: r()(v.Qs, { [v.hO]: d }),
                          "aria-labelledby": n,
                          children: [
                              (0, i.jsx)(j.E, {
                                  variant: "text-sm/normal",
                                  color: "text-strong",
                                  id: n,
                                  className: v.ut,
                                  children: s,
                              }),
                              (0, i.jsxs)("div", {
                                  className: v.o1,
                                  children: [
                                      (0, i.jsx)(A.$, { variant: "secondary", size: "sm", ...c }),
                                      (0, i.jsx)(A.$, { variant: "primary", size: "sm", ...o }),
                                  ],
                              }),
                          ],
                      }),
                  })
                : null,
        )
    );
}
var S = n(570002),
    b = n(202541),
    T = n(375708);
function N() {
    let e = (0, g.YW)(),
        { goBack: t } = (0, g.pA)(),
        n = (0, S.A)(T.intl.string(T.t.pj0XBN));
    return (0, i.jsx)(x.A, {
        subscriptionTier: b.pe.TIER_2,
        onSubscribeModalClose: (e) => {
            e && (0, f.T)();
        },
        children: (l) => {
            let { onClick: s } = l;
            return (0, i.jsx)(C, {
                isVisible: e,
                labelId: "premium-try-it-out-footer-bar-label",
                noticeText: T.intl.string(T.t.X0ir7L),
                a11yAnnounceOnShow: T.intl.string(T.t.X0ir7L),
                a11yAnnounceOnHide: T.intl.string(T.t.ZcyFYa),
                secondaryAction: { text: T.intl.string(T.t.V3S9WW), onClick: t },
                primaryAction: { text: n, onClick: s, icon: m.t, variant: "expressive" },
            });
        },
    });
}
var y = n(631670),
    k = n(159001),
    w = n(933725),
    R = n(625494),
    L = n(56348),
    O = n(207803),
    P = n(183555),
    _ = n(289173),
    D = n(836602),
    G = n(958805),
    M = n(61881),
    U = n(624826),
    F = n(384377),
    W = n(518477),
    H = n(652215);
function V(e) {
    let { guildId: t } = e,
        { trackUserProfileEditSaved: n } = (0, P.NJ)(),
        [s, r] = l.useState(!1),
        [o, c] = l.useState(!1),
        {
            widgetsToSave: d,
            changedWidgets: g,
            removedWidgets: m,
            hasUnsavedWidgets: x,
            canSaveWidgets: f,
        } = (function () {
            let e = (0, a.yK)([M.A], () => M.A.getSaveablePendingWidgets() ?? []),
                t = (0, a.yK)([M.A], () => M.A.getChangedWidgets()),
                n = (0, a.yK)([M.A], () => M.A.getRemovedWidgets()),
                { hasUnsavedWidgets: i, canSaveWidgets: l } = (0, a.cf)([M.A], () => ({
                    hasUnsavedWidgets: M.A.hasUnsavedChanges(),
                    canSaveWidgets: M.A.canSaveChanges(),
                }));
            return { widgetsToSave: e, changedWidgets: t, removedWidgets: n, hasUnsavedWidgets: i, canSaveWidgets: l };
        })(),
        h = (0, u.X)("UserProfileModalV2SaveBar"),
        { hasUnsavedProfileChanges: p, canSubmitProfileChanges: I } = (0, a.cf)([D.A], () => ({
            hasUnsavedProfileChanges: D.A.hasUnsavedChanges(),
            canSubmitProfileChanges: D.A.canSubmit(),
        })),
        j = h && p,
        A = x || j,
        E = !(x && !f) && (!h || I),
        v = l.useCallback(() => {
            G.A.clearPendingWidgets(), h && (0, O.XQ)();
        }, [h]),
        S = l.useCallback(async () => {
            if (h && !D.A.canSubmit()) return;
            c(!0);
            let e = !0;
            if (j)
                try {
                    if (null == t) {
                        let t = D.A.getPendingChanges(),
                            n = (0, L.Sk)(t),
                            i = (0, L.yX)(t);
                        if (Object.keys(n).length > 0) {
                            let i = await (0, y._L)(n);
                            (e = i?.ok ?? !1),
                                i?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, U.t)({
                                            avatarHash: i.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, y.pZ)());
                        }
                        if (Object.keys(i).length > 0) {
                            let { bannerOriginalMd5: t, ...n } = i,
                                l = await (0, O.gi)(n, void 0, t);
                            (e = e && (l?.ok ?? !1)), l?.ok && (0, O.RE)();
                        }
                    } else {
                        let n = D.A.getPendingChanges(t),
                            i = (0, L.C5)(n),
                            l = (0, L.yX)(n, t);
                        if (Object.keys(i).length > 0) {
                            let l = await (0, k.GL)(t, i);
                            (e = l?.ok ?? !1),
                                l?.ok &&
                                    (void 0 !== n.pendingAvatar &&
                                        (0, U.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: n.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, y.pZ)());
                        }
                        if (Object.keys(l).length > 0) {
                            let { bannerOriginalMd5: n, ...i } = l,
                                s = await (0, O.gi)(i, t, n);
                            (e = e && (s?.ok ?? !1)), s?.ok && (0, O.RE)();
                        }
                    }
                    let n = (0, L.yg)(D.A.getPendingChanges());
                    if (Object.keys(n).length > 0) {
                        let { primaryGuildId: t } = n;
                        if (void 0 !== t) {
                            let n = await (0, w.m)(t, null !== t);
                            (e = e && (n?.ok ?? !1)), n?.ok && (0, y.fw)();
                        }
                    }
                } catch {
                    e = !1;
                }
            if (x)
                try {
                    for (let e of (await G.A.savePendingWidgets(d), g)) {
                        let t = { widgetEdited: e.type, isWidgetRemoved: !1 };
                        (0, _.fu)(e) &&
                            ((t.gameIds = e.games.map((e) => e.gameId)),
                            (t.tags = e.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0))),
                            n(t);
                    }
                    for (let e of m) n({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            e ? (0, y.x8)() : (0, F.XA)(W.jM.PROFILE_SAVE_GENERIC_FAILURE), c(!1);
        }, [h, j, x, d, g, m, n, t]);
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
        (0, i.jsx)(C, {
            isVisible: A,
            labelId: "user-profile-save-reset-toolbar-label",
            noticeText: T.intl.string(T.t["/lQiX/"]),
            isEmphasized: s,
            a11yAnnounceOnShow: T.intl.string(T.t["0Y/qkL"]),
            secondaryAction: { text: T.intl.string(T.t.yBZMsQ), onClick: v, disabled: !A || o },
            primaryAction: { text: T.intl.string(T.t["R3BPH+"]), onClick: S, loading: o, disabled: !E || !A },
        })
    );
}
var B = n(485745),
    z = n(893757);
function X() {
    let e = !(0, u.X)("useEditingFooterState"),
        t = (0, o.VU)(),
        n = (0, B.A)(e),
        i = (0, g.YW)();
    return t ? "dnd" : i ? "premium-try-it-out" : n ? "save" : null;
}
function K(e) {
    let t = (0, a.bG)([d.default], () => d.default.getId() === e),
        n = X();
    return t && null != n;
}
function Y(e) {
    let { userId: t, guildId: n, className: s } = e,
        o = (0, a.bG)([d.default], () => d.default.getId() === t),
        u = X(),
        [g, m] = l.useState(u);
    return (null != u && g !== u && m(u), o)
        ? (0, i.jsx)("div", {
              className: r()(z.k, s),
              children:
                  "dnd" === g
                      ? (0, i.jsx)(c.S, { className: z.W })
                      : "premium-try-it-out" === g
                        ? (0, i.jsx)(N, {})
                        : "save" === g
                          ? (0, i.jsx)(V, { guildId: n })
                          : null,
          })
        : null;
}
