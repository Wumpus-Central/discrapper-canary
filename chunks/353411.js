"use strict";
n.d(t, { Gq: () => y, J$: () => T, _B: () => I });
var r = n(64700),
    i = n(311907),
    a = n(451988),
    s = n(475743),
    o = n(961350),
    l = n(927813),
    u = n(427262),
    c = n(655116),
    d = n(160768),
    _ = n(341335),
    f = n(286617),
    p = n(533207),
    h = n(881335),
    m = n(272984);
let g = 30 * l.A.Millis.SECOND;
function E(e) {
    let { currentUserTrackId: t, syncingWithUser: n, syncingWithParty: i } = e,
        [o, l] = r.useState(!1),
        [u] = r.useState(() => new a.Ep()),
        c = (0, s.A)(t);
    r.useEffect(() => {
        o && (t !== c || n || i) && (l(!1), u.stop());
    }, [t, c, n, i, o, u]);
    let d = r.useCallback(() => {
            l(!0), u.start(g, () => l(!1));
        }, [u]),
        _ = r.useCallback(() => {
            l(!1), u.stop();
        }, [u]);
    return r.useEffect(() => () => u.stop(), [u]), { loading: o, startLoading: d, clearLoading: _ };
}
function A(e, t) {
    return (0, i.cf)([c.A, o.default], () => (0, f.A)(c.A, o.default, t, e), [e, t]);
}
function I(e, t, n) {
    let i = A(e, t),
        { notPlayable: a, isCurrentUser: s, playingSameTrack: o } = i,
        { loading: l, startLoading: u, clearLoading: c } = E(i),
        f = r.useCallback(() => {
            u(), (0, h.A)(i, m.Qp.USER_ACTIVITY_PLAY, n).catch(c);
        }, [i, n, u, c]);
    return {
        label: (0, d.A)(i, m.Qp.USER_ACTIVITY_PLAY),
        tooltip: (0, _.A)(i, m.Qp.USER_ACTIVITY_PLAY),
        disabled: !l && (s || a || o),
        loading: l,
        onClick: f,
        spotifyData: i,
    };
}
function T(e, t, n, i) {
    let a = i ?? u.Ay.getName(t),
        s = A(e, t),
        { notPlayable: o, syncingWithUser: l, syncingWithParty: c, isCurrentUser: f } = s,
        { loading: h, startLoading: g, clearLoading: I } = E(s),
        T = r.useCallback(() => {
            g(), (0, p.A)(s, m.Qp.USER_ACTIVITY_SYNC, n).catch(I);
        }, [s, n, g, I]);
    return {
        label: (0, d.A)(s, m.Qp.USER_ACTIVITY_SYNC),
        tooltip: (0, _.A)(s, m.Qp.USER_ACTIVITY_SYNC, a),
        disabled: !h && (o || f || l || c),
        loading: h,
        onClick: T,
        spotifyData: s,
    };
}
function y(e, t, n) {
    let i = A(e, t),
        { notPlayable: a, syncingWithUser: s, syncingWithParty: o, isCurrentUser: l } = i,
        { loading: u, startLoading: c, clearLoading: f } = E(i),
        h = r.useCallback(() => {
            c(), (0, p.A)(i, m.Qp.EMBED_SYNC, n).catch(f);
        }, [i, n, c, f]);
    return {
        label: (0, d.A)(i, m.Qp.EMBED_SYNC),
        tooltip: (0, _.A)(i, m.Qp.EMBED_SYNC),
        disabled: !u && (l || s || o || a),
        loading: u,
        onClick: h,
        spotifyData: i,
    };
}
