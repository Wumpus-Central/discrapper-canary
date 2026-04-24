n.d(t, { Gq: () => x, J$: () => v, _B: () => I });
var r = n(64700),
    a = n(17928),
    i = n(451988),
    l = n(475743),
    s = n(495544),
    o = n(927813),
    c = n(427262),
    d = n(655116),
    u = n(160768),
    _ = n(341335),
    m = n(286617),
    p = n(533207),
    f = n(881335),
    h = n(272984);
let E = 30 * o.A.Millis.SECOND;
function A(e) {
    let { currentUserTrackId: t, syncingWithUser: n, syncingWithParty: a } = e,
        [s, o] = r.useState(!1),
        [c] = r.useState(() => new i.Ep()),
        d = (0, l.A)(t);
    r.useEffect(() => {
        s && (t !== d || n || a) && (o(!1), c.stop());
    }, [t, d, n, a, s, c]);
    let u = r.useCallback(() => {
            o(!0), c.start(E, () => o(!1));
        }, [c]),
        _ = r.useCallback(() => {
            o(!1), c.stop();
        }, [c]);
    return r.useEffect(() => () => c.stop(), [c]), { loading: s, startLoading: u, clearLoading: _ };
}
function g(e, t) {
    return (0, a.cf)([d.A, s.default], () => (0, m.A)(d.A, s.default, t, e), [e, t]);
}
function I(e, t, n) {
    let a = g(e, t),
        { notPlayable: i, isCurrentUser: l, playingSameTrack: s } = a,
        { loading: o, startLoading: c, clearLoading: d } = A(a),
        m = r.useCallback(() => {
            c(), (0, f.A)(a, h.Qp.USER_ACTIVITY_PLAY, n).catch(d);
        }, [a, n, c, d]);
    return {
        label: (0, u.A)(a, h.Qp.USER_ACTIVITY_PLAY),
        tooltip: (0, _.A)(a, h.Qp.USER_ACTIVITY_PLAY),
        disabled: !o && (l || i || s),
        loading: o,
        onClick: m,
        spotifyData: a,
    };
}
function v(e, t, n, a) {
    let i = a ?? c.Ay.getName(t),
        l = g(e, t),
        { notPlayable: s, syncingWithUser: o, syncingWithParty: d, isCurrentUser: m } = l,
        { loading: f, startLoading: E, clearLoading: I } = A(l),
        v = r.useCallback(() => {
            E(), (0, p.A)(l, h.Qp.USER_ACTIVITY_SYNC, n).catch(I);
        }, [l, n, E, I]);
    return {
        label: (0, u.A)(l, h.Qp.USER_ACTIVITY_SYNC),
        tooltip: (0, _.A)(l, h.Qp.USER_ACTIVITY_SYNC, i),
        disabled: !f && (s || m || o || d),
        loading: f,
        onClick: v,
        spotifyData: l,
    };
}
function x(e, t, n) {
    let a = g(e, t),
        { notPlayable: i, syncingWithUser: l, syncingWithParty: s, isCurrentUser: o } = a,
        { loading: c, startLoading: d, clearLoading: m } = A(a),
        f = r.useCallback(() => {
            d(), (0, p.A)(a, h.Qp.EMBED_SYNC, n).catch(m);
        }, [a, n, d, m]);
    return {
        label: (0, u.A)(a, h.Qp.EMBED_SYNC),
        tooltip: (0, _.A)(a, h.Qp.EMBED_SYNC),
        disabled: !c && (o || l || s || i),
        loading: c,
        onClick: f,
        spotifyData: a,
    };
}
