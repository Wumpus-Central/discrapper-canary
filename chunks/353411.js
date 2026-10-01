l.d(t, { Gq: () => Y, J$: () => S, _B: () => N });
var C = l(582128),
    a = l(17928),
    n = l(451988),
    r = l(475743),
    i = l(280450),
    s = l(927813),
    c = l(427262),
    u = l(655116),
    A = l(160768),
    d = l(341335),
    o = l(286617),
    p = l(533207),
    f = l(881335),
    h = l(272984);
let E = 30 * s.A.Millis.SECOND;
function _(e) {
    let { currentUserTrackId: t, syncingWithUser: l, syncingWithParty: a } = e,
        [i, s] = C.useState(!1),
        [c] = C.useState(() => new n.Ep()),
        u = (0, r.Ay)(t);
    C.useEffect(() => {
        i && (t !== u || l || a) && (s(!1), c.stop());
    }, [t, u, l, a, i, c]);
    let A = C.useCallback(() => {
            (s(!0), c.start(E, () => s(!1)));
        }, [c]),
        d = C.useCallback(() => {
            (s(!1), c.stop());
        }, [c]);
    return (C.useEffect(() => () => c.stop(), [c]), { loading: i, startLoading: A, clearLoading: d });
}
function I(e, t) {
    return (0, a.cf)([u.A, i.default], () => (0, o.A)(u.A, i.default, t, e), [e, t]);
}
function N(e, t, l) {
    let a = I(e, t),
        { notPlayable: n, isCurrentUser: r, playingSameTrack: i } = a,
        { loading: s, startLoading: c, clearLoading: u } = _(a),
        o = C.useCallback(() => {
            (c(), (0, f.A)(a, h.Qp.USER_ACTIVITY_PLAY, l).catch(u));
        }, [a, l, c, u]);
    return {
        label: (0, A.A)(a, h.Qp.USER_ACTIVITY_PLAY),
        tooltip: (0, d.A)(a, h.Qp.USER_ACTIVITY_PLAY),
        disabled: !s && (r || n || i),
        loading: s,
        onClick: o,
        spotifyData: a,
    };
}
function S(e, t, l, a) {
    let n = a ?? c.Ay.getName(t),
        r = I(e, t),
        { notPlayable: i, syncingWithUser: s, syncingWithParty: u, isCurrentUser: o } = r,
        { loading: f, startLoading: E, clearLoading: N } = _(r),
        S = C.useCallback(() => {
            (E(), (0, p.A)(r, h.Qp.USER_ACTIVITY_SYNC, l).catch(N));
        }, [r, l, E, N]);
    return {
        label: (0, A.A)(r, h.Qp.USER_ACTIVITY_SYNC),
        tooltip: (0, d.A)(r, h.Qp.USER_ACTIVITY_SYNC, n),
        disabled: !f && (i || o || s || u),
        loading: f,
        onClick: S,
        spotifyData: r,
    };
}
function Y(e, t, l) {
    let a = I(e, t),
        { notPlayable: n, syncingWithUser: r, syncingWithParty: i, isCurrentUser: s } = a,
        { loading: c, startLoading: u, clearLoading: o } = _(a),
        f = C.useCallback(() => {
            (u(), (0, p.A)(a, h.Qp.EMBED_SYNC, l).catch(o));
        }, [a, l, u, o]);
    return {
        label: (0, A.A)(a, h.Qp.EMBED_SYNC),
        tooltip: (0, d.A)(a, h.Qp.EMBED_SYNC),
        disabled: !c && (s || r || i || n),
        loading: c,
        onClick: f,
        spotifyData: a,
    };
}
