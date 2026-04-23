"use strict";
n.d(t, { Gq: () => b, J$: () => I, _B: () => S });
var i = n(64700),
    a = n(17928),
    r = n(451988),
    s = n(475743),
    l = n(495544),
    o = n(927813),
    c = n(427262),
    d = n(655116),
    u = n(160768),
    _ = n(341335),
    h = n(286617),
    f = n(533207),
    g = n(881335),
    m = n(272984);
let p = 30 * o.A.Millis.SECOND;
function E(e) {
    let { currentUserTrackId: t, syncingWithUser: n, syncingWithParty: a } = e,
        [l, o] = i.useState(!1),
        [c] = i.useState(() => new r.Ep()),
        d = (0, s.A)(t);
    i.useEffect(() => {
        l && (t !== d || n || a) && (o(!1), c.stop());
    }, [t, d, n, a, l, c]);
    let u = i.useCallback(() => {
            o(!0), c.start(p, () => o(!1));
        }, [c]),
        _ = i.useCallback(() => {
            o(!1), c.stop();
        }, [c]);
    return i.useEffect(() => () => c.stop(), [c]), { loading: l, startLoading: u, clearLoading: _ };
}
function A(e, t) {
    return (0, a.cf)([d.A, l.default], () => (0, h.A)(d.A, l.default, t, e), [e, t]);
}
function S(e, t, n) {
    let a = A(e, t),
        { notPlayable: r, isCurrentUser: s, playingSameTrack: l } = a,
        { loading: o, startLoading: c, clearLoading: d } = E(a),
        h = i.useCallback(() => {
            c(), (0, g.A)(a, m.Qp.USER_ACTIVITY_PLAY, n).catch(d);
        }, [a, n, c, d]);
    return {
        label: (0, u.A)(a, m.Qp.USER_ACTIVITY_PLAY),
        tooltip: (0, _.A)(a, m.Qp.USER_ACTIVITY_PLAY),
        disabled: !o && (s || r || l),
        loading: o,
        onClick: h,
        spotifyData: a,
    };
}
function I(e, t, n, a) {
    let r = a ?? c.Ay.getName(t),
        s = A(e, t),
        { notPlayable: l, syncingWithUser: o, syncingWithParty: d, isCurrentUser: h } = s,
        { loading: g, startLoading: p, clearLoading: S } = E(s),
        I = i.useCallback(() => {
            p(), (0, f.A)(s, m.Qp.USER_ACTIVITY_SYNC, n).catch(S);
        }, [s, n, p, S]);
    return {
        label: (0, u.A)(s, m.Qp.USER_ACTIVITY_SYNC),
        tooltip: (0, _.A)(s, m.Qp.USER_ACTIVITY_SYNC, r),
        disabled: !g && (l || h || o || d),
        loading: g,
        onClick: I,
        spotifyData: s,
    };
}
function b(e, t, n) {
    let a = A(e, t),
        { notPlayable: r, syncingWithUser: s, syncingWithParty: l, isCurrentUser: o } = a,
        { loading: c, startLoading: d, clearLoading: h } = E(a),
        g = i.useCallback(() => {
            d(), (0, f.A)(a, m.Qp.EMBED_SYNC, n).catch(h);
        }, [a, n, d, h]);
    return {
        label: (0, u.A)(a, m.Qp.EMBED_SYNC),
        tooltip: (0, _.A)(a, m.Qp.EMBED_SYNC),
        disabled: !c && (o || s || l || r),
        loading: c,
        onClick: g,
        spotifyData: a,
    };
}
