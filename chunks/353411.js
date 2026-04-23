"use strict";
n.d(t, { Gq: () => b, J$: () => I, _B: () => S });
var a = n(64700),
    i = n(311907),
    r = n(451988),
    s = n(475743),
    l = n(961350),
    o = n(927813),
    c = n(427262),
    d = n(655116),
    u = n(160768),
    _ = n(341335),
    h = n(286617),
    m = n(533207),
    g = n(881335),
    p = n(272984);
let f = 30 * o.A.Millis.SECOND;
function E(e) {
    let { currentUserTrackId: t, syncingWithUser: n, syncingWithParty: i } = e,
        [l, o] = a.useState(!1),
        [c] = a.useState(() => new r.Ep()),
        d = (0, s.A)(t);
    a.useEffect(() => {
        l && (t !== d || n || i) && (o(!1), c.stop());
    }, [t, d, n, i, l, c]);
    let u = a.useCallback(() => {
            o(!0), c.start(f, () => o(!1));
        }, [c]),
        _ = a.useCallback(() => {
            o(!1), c.stop();
        }, [c]);
    return a.useEffect(() => () => c.stop(), [c]), { loading: l, startLoading: u, clearLoading: _ };
}
function A(e, t) {
    return (0, i.cf)([d.A, l.default], () => (0, h.A)(d.A, l.default, t, e), [e, t]);
}
function S(e, t, n) {
    let i = A(e, t),
        { notPlayable: r, isCurrentUser: s, playingSameTrack: l } = i,
        { loading: o, startLoading: c, clearLoading: d } = E(i),
        h = a.useCallback(() => {
            c(), (0, g.A)(i, p.Qp.USER_ACTIVITY_PLAY, n).catch(d);
        }, [i, n, c, d]);
    return {
        label: (0, u.A)(i, p.Qp.USER_ACTIVITY_PLAY),
        tooltip: (0, _.A)(i, p.Qp.USER_ACTIVITY_PLAY),
        disabled: !o && (s || r || l),
        loading: o,
        onClick: h,
        spotifyData: i,
    };
}
function I(e, t, n, i) {
    let r = i ?? c.Ay.getName(t),
        s = A(e, t),
        { notPlayable: l, syncingWithUser: o, syncingWithParty: d, isCurrentUser: h } = s,
        { loading: g, startLoading: f, clearLoading: S } = E(s),
        I = a.useCallback(() => {
            f(), (0, m.A)(s, p.Qp.USER_ACTIVITY_SYNC, n).catch(S);
        }, [s, n, f, S]);
    return {
        label: (0, u.A)(s, p.Qp.USER_ACTIVITY_SYNC),
        tooltip: (0, _.A)(s, p.Qp.USER_ACTIVITY_SYNC, r),
        disabled: !g && (l || h || o || d),
        loading: g,
        onClick: I,
        spotifyData: s,
    };
}
function b(e, t, n) {
    let i = A(e, t),
        { notPlayable: r, syncingWithUser: s, syncingWithParty: l, isCurrentUser: o } = i,
        { loading: c, startLoading: d, clearLoading: h } = E(i),
        g = a.useCallback(() => {
            d(), (0, m.A)(i, p.Qp.EMBED_SYNC, n).catch(h);
        }, [i, n, d, h]);
    return {
        label: (0, u.A)(i, p.Qp.EMBED_SYNC),
        tooltip: (0, _.A)(i, p.Qp.EMBED_SYNC),
        disabled: !c && (o || s || l || r),
        loading: c,
        onClick: g,
        spotifyData: i,
    };
}
