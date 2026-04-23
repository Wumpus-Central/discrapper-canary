let i;
n.d(t, { Bo: () => D, DP: () => C, Tr: () => b, Ty: () => P, Vu: () => h, _L: () => U, eE: () => L, hI: () => g });
var r = n(64700),
    a = n(17928),
    s = n(554146),
    _ = n(206885),
    l = n(590209),
    o = n(617617),
    E = n(967198),
    d = n(954571),
    c = n(935208),
    u = n(460288),
    I = n(199773),
    A = n(771781),
    T = n(826673),
    S = n(367727),
    N = n(757792),
    O = n(652215),
    R = n(355097);
function f(e, t, n, _) {
    let E = (0, A.Ay)((t) => null != e && t.currentlyShown.has(e)),
        c = (0, l.yq)(),
        u = (0, a.bG)(null != i ? [i] : [], () => i?.getFocusedPID()),
        T = (0, a.bG)([I.A], () => null != e && I.A.hasUserHitDCCap(e, t)),
        N = r.useRef(t);
    return (
        (N.current = t),
        r.useEffect(() => {
            if (null != e) {
                var t;
                return (
                    o.A.hasLoaded(R.oD.PRELOADED_USER_SETTINGS) ||
                        ((t = N.current),
                        d.default.track(O.HAw.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
                            content_type: s.M[e],
                            group_name: n ?? null,
                            latest_version: _ ?? null,
                            guild_id: t ?? null,
                        })),
                    (0, S.Vh)(e, { groupName: n, guildId: N.current, version: _ }, c, u),
                    () => {
                        if (null == e) return;
                        let t = !I.A.hasUserHitDCCap();
                        (0, A.pd)({ content: e, groupName: n }, t);
                    }
                );
            }
        }, [e, n, T, c, _, u]),
        E && null != e ? e : null
    );
}
function C(e, t) {
    let n = (0, a.bG)([o.A], () => o.A.settings.userContent?.dismissedContents),
        i = (0, a.bG)([E.A], () => E.A.getGuildId()),
        s = (0, N.Sg)(e),
        _ = null;
    return (
        o.A.hasLoaded(R.oD.PRELOADED_USER_SETTINGS)
            ? (_ = s.find((e) => null == n || !(0, u.c0)(n, e)))
            : null != n && (_ = s.find((e) => !(0, u.c0)(n, e))),
        [
            f(_, i, t),
            r.useCallback(
                (e, n) => {
                    null != _ && (0, T.Dr)(_, { dismissAction: e, groupName: t, guildId: i, forceTrack: n });
                },
                [_, t, i],
            ),
        ]
    );
}
i = _.O ? n(773371).default : null;
let p = {};
function m(e) {
    return (0, a.bG)(
        [o.A],
        () => (null !== e ? o.A.settings.userContent?.recurringDismissibleContentStates?.[e] : null) ?? p,
    );
}
function L(e, t, n) {
    let { lastDismissedVersion: i } = m(e),
        s = (0, a.bG)([E.A], () => E.A.getGuildId()),
        _ = null;
    if (null != e) {
        let n = !(0, N.P3)(e);
        o.A.hasLoaded(R.oD.PRELOADED_USER_SETTINGS)
            ? (_ = n && (null == i || i < t) ? e : null)
            : null != i && (_ = n && i < t ? e : null);
    }
    return [
        f(_, s, n, t),
        r.useCallback(
            (e, i) => {
                null != _ && (0, S.$l)(_, t, { dismissAction: e, groupName: n, guildId: s, forceTrack: i, version: t });
            },
            [_, n, s, t],
        ),
    ];
}
function D(e, t, n) {
    let { lastDismissedAtMs: i, numTimesDismissed: s } = m(e),
        _ = (0, a.bG)([E.A], () => E.A.getGuildId()),
        l = null;
    return (
        null != e && (l = M(!(0, N.P3)(e), i, s, t) ? e : null),
        [
            f(l, _, n),
            r.useCallback(
                (e, t) => {
                    null != l && (0, S.uh)(l, { dismissAction: e, groupName: n, guildId: _, forceTrack: t });
                },
                [l, n, _],
            ),
        ]
    );
}
function h(e, t, n) {
    let { lastDismissedObjectId: i } = m(e),
        s = (0, a.bG)([E.A], () => E.A.getGuildId()),
        _ = null;
    if (null != e) {
        let n = !(0, N.P3)(e);
        o.A.hasLoaded(R.oD.PRELOADED_USER_SETTINGS)
            ? (_ = n && (null == i || 1 === c.default.compare(t, i)) ? e : null)
            : null != i && (_ = n && 1 === c.default.compare(t, i) ? e : null);
    }
    return [
        f(_, s, n),
        r.useCallback(
            (e, i) => {
                null != _ && (0, S.qr)(_, t, { dismissAction: e, groupName: n, guildId: s, forceTrack: i });
            },
            [_, n, s, t],
        ),
    ];
}
function g(e, t, n, i) {
    let s = (0, a.bG)([o.A], () => o.A.getGuildDismissedContentState(n)),
        _ = null != e ? (null == s ? null : s?.[e]) : null,
        l = _?.lastDismissedObjectId,
        E = null;
    if (null != e) {
        let n = !(0, N.P3)(e);
        o.A.hasLoaded(R.oD.PRELOADED_USER_SETTINGS)
            ? (E = n && (null == l || 1 === c.default.compare(t, l)) ? e : null)
            : null != l && (E = n && 1 === c.default.compare(t, l) ? e : null);
    }
    return [
        f(E, n, i),
        r.useCallback(
            (e, r) => {
                null != E && (0, T.in)(E, t, n, { dismissAction: e, groupName: i, guildId: n, forceTrack: r });
            },
            [E, i, n, t],
        ),
    ];
}
function b(e, t, n, i) {
    let s = (0, a.bG)([E.A], () => E.A.getGuildId()),
        _ = null;
    return (
        null == e || (0, S.j6)(e, n, t) || (_ = e),
        [
            f(_, s, i),
            r.useCallback(
                (e, t) => {
                    null != _ && (0, S.qr)(_, n, { dismissAction: e, groupName: i, guildId: s, forceTrack: t });
                },
                [_, i, s, n],
            ),
        ]
    );
}
function U(e, t, n) {
    let i = (0, a.bG)([o.A], () => o.A.getGuildDismissedContentState(t)),
        s = (0, N.Sg)(e),
        _ = null;
    return (
        o.A.hasLoaded(R.oD.PRELOADED_USER_SETTINGS)
            ? (_ = s.find((e) => null == i || null == i[e] || !1 === i[e].dismissed))
            : null != i && (_ = s.find((e) => null == i[e] || !1 === i[e].dismissed)),
        [
            f(_, t, n),
            r.useCallback(
                (e, i) => {
                    null != _ && (0, T.dX)(_, t, { dismissAction: e, groupName: n, guildId: t, forceTrack: i });
                },
                [_, n, t],
            ),
        ]
    );
}
function P(e, t, n, i) {
    let s = (0, a.bG)([o.A], () => o.A.getGuildDismissedContentState(t)),
        _ = null != e ? (null == s ? null : s?.[e]) : null,
        l = _?.numTimesDismissed,
        E = null;
    return (
        null != e && (E = M(!(0, N.P3)(e), _?.lastDismissedAtMs, l, n) ? e : null),
        [
            f(E, t, i),
            r.useCallback(
                (e, n) => {
                    null != E && (0, T.KO)(E, t, { dismissAction: e, groupName: i, guildId: t, forceTrack: n });
                },
                [E, i, t],
            ),
        ]
    );
}
function M(e, t, n, i) {
    let r = null != t ? (Number.isNaN(Number(t)) ? void 0 : Number(t)) : void 0,
        a = void 0 === r ? 0 : r + i.cooldownDurationMs,
        s = Date.now(),
        _ = null == i.showAfterTimestamp || (s >= i.showAfterTimestamp && (r ?? 0) <= i.showAfterTimestamp),
        l = null == i.numTimesToRecur || 0 === i.numTimesToRecur || null == n || n < i.numTimesToRecur;
    return (
        (o.A.hasLoaded(R.oD.PRELOADED_USER_SETTINGS) || (null != r && null != n)) &&
        e &&
        _ &&
        (null == r || s >= a) &&
        l
    );
}
