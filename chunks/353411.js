"use strict";
n.d(t, { Gq: () => S, J$: () => T, _B: () => I });
var i = n(64700),
    r = n(17928),
    s = n(451988),
    a = n(475743),
    o = n(495544),
    l = n(927813),
    u = n(427262),
    c = n(655116),
    d = n(160768),
    _ = n(341335),
    f = n(286617),
    h = n(533207),
    p = n(881335),
    E = n(272984);
let m = 30 * l.A.Millis.SECOND;
function g(e) {
    let { currentUserTrackId: t, syncingWithUser: n, syncingWithParty: r } = e,
        [o, l] = i.useState(!1),
        [u] = i.useState(() => new s.Ep()),
        c = (0, a.A)(t);
    i.useEffect(() => {
        o && (t !== c || n || r) && (l(!1), u.stop());
    }, [t, c, n, r, o, u]);
    let d = i.useCallback(() => {
            l(!0), u.start(m, () => l(!1));
        }, [u]),
        _ = i.useCallback(() => {
            l(!1), u.stop();
        }, [u]);
    return i.useEffect(() => () => u.stop(), [u]), { loading: o, startLoading: d, clearLoading: _ };
}
function A(e, t) {
    return (0, r.cf)([c.A, o.default], () => (0, f.A)(c.A, o.default, t, e), [e, t]);
}
function I(e, t, n) {
    let r = A(e, t),
        { notPlayable: s, isCurrentUser: a, playingSameTrack: o } = r,
        { loading: l, startLoading: u, clearLoading: c } = g(r),
        f = i.useCallback(() => {
            u(), (0, p.A)(r, E.Qp.USER_ACTIVITY_PLAY, n).catch(c);
        }, [r, n, u, c]);
    return {
        label: (0, d.A)(r, E.Qp.USER_ACTIVITY_PLAY),
        tooltip: (0, _.A)(r, E.Qp.USER_ACTIVITY_PLAY),
        disabled: !l && (a || s || o),
        loading: l,
        onClick: f,
        spotifyData: r,
    };
}
function T(e, t, n, r) {
    let s = r ?? u.Ay.getName(t),
        a = A(e, t),
        { notPlayable: o, syncingWithUser: l, syncingWithParty: c, isCurrentUser: f } = a,
        { loading: p, startLoading: m, clearLoading: I } = g(a),
        T = i.useCallback(() => {
            m(), (0, h.A)(a, E.Qp.USER_ACTIVITY_SYNC, n).catch(I);
        }, [a, n, m, I]);
    return {
        label: (0, d.A)(a, E.Qp.USER_ACTIVITY_SYNC),
        tooltip: (0, _.A)(a, E.Qp.USER_ACTIVITY_SYNC, s),
        disabled: !p && (o || f || l || c),
        loading: p,
        onClick: T,
        spotifyData: a,
    };
}
function S(e, t, n) {
    let r = A(e, t),
        { notPlayable: s, syncingWithUser: a, syncingWithParty: o, isCurrentUser: l } = r,
        { loading: u, startLoading: c, clearLoading: f } = g(r),
        p = i.useCallback(() => {
            c(), (0, h.A)(r, E.Qp.EMBED_SYNC, n).catch(f);
        }, [r, n, c, f]);
    return {
        label: (0, d.A)(r, E.Qp.EMBED_SYNC),
        tooltip: (0, _.A)(r, E.Qp.EMBED_SYNC),
        disabled: !u && (l || a || o || s),
        loading: u,
        onClick: p,
        spotifyData: r,
    };
}
