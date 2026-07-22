"use strict";
n.d(t, { Gq: () => S, J$: () => g, _B: () => m });
var i = n(64700),
    r = n(17928),
    a = n(451988),
    s = n(475743),
    l = n(280450),
    o = n(927813),
    d = n(427262),
    c = n(655116),
    u = n(160768),
    _ = n(341335),
    E = n(286617),
    A = n(533207),
    h = n(881335),
    I = n(272984);
let f = 30 * o.A.Millis.SECOND;
function p(e) {
    let { currentUserTrackId: t, syncingWithUser: n, syncingWithParty: r } = e,
        [l, o] = i.useState(!1),
        [d] = i.useState(() => new a.Ep()),
        c = (0, s.A)(t);
    i.useEffect(() => {
        l && (t !== c || n || r) && (o(!1), d.stop());
    }, [t, c, n, r, l, d]);
    let u = i.useCallback(() => {
            o(!0), d.start(f, () => o(!1));
        }, [d]),
        _ = i.useCallback(() => {
            o(!1), d.stop();
        }, [d]);
    return i.useEffect(() => () => d.stop(), [d]), { loading: l, startLoading: u, clearLoading: _ };
}
function T(e, t) {
    return (0, r.cf)([c.A, l.default], () => (0, E.A)(c.A, l.default, t, e), [e, t]);
}
function m(e, t, n) {
    let r = T(e, t),
        { notPlayable: a, isCurrentUser: s, playingSameTrack: l } = r,
        { loading: o, startLoading: d, clearLoading: c } = p(r),
        E = i.useCallback(() => {
            d(), (0, h.A)(r, I.Qp.USER_ACTIVITY_PLAY, n).catch(c);
        }, [r, n, d, c]);
    return {
        label: (0, u.A)(r, I.Qp.USER_ACTIVITY_PLAY),
        tooltip: (0, _.A)(r, I.Qp.USER_ACTIVITY_PLAY),
        disabled: !o && (s || a || l),
        loading: o,
        onClick: E,
        spotifyData: r,
    };
}
function g(e, t, n, r) {
    let a = r ?? d.Ay.getName(t),
        s = T(e, t),
        { notPlayable: l, syncingWithUser: o, syncingWithParty: c, isCurrentUser: E } = s,
        { loading: h, startLoading: f, clearLoading: m } = p(s),
        g = i.useCallback(() => {
            f(), (0, A.A)(s, I.Qp.USER_ACTIVITY_SYNC, n).catch(m);
        }, [s, n, f, m]);
    return {
        label: (0, u.A)(s, I.Qp.USER_ACTIVITY_SYNC),
        tooltip: (0, _.A)(s, I.Qp.USER_ACTIVITY_SYNC, a),
        disabled: !h && (l || E || o || c),
        loading: h,
        onClick: g,
        spotifyData: s,
    };
}
function S(e, t, n) {
    let r = T(e, t),
        { notPlayable: a, syncingWithUser: s, syncingWithParty: l, isCurrentUser: o } = r,
        { loading: d, startLoading: c, clearLoading: E } = p(r),
        h = i.useCallback(() => {
            c(), (0, A.A)(r, I.Qp.EMBED_SYNC, n).catch(E);
        }, [r, n, c, E]);
    return {
        label: (0, u.A)(r, I.Qp.EMBED_SYNC),
        tooltip: (0, _.A)(r, I.Qp.EMBED_SYNC),
        disabled: !d && (o || s || l || a),
        loading: d,
        onClick: h,
        spotifyData: r,
    };
}
