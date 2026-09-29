C.d(e, { Gq: () => b, J$: () => I, _B: () => Y });
var l = C(582128),
    a = C(17928),
    s = C(451988),
    c = C(475743),
    u = C(280450),
    i = C(927813),
    n = C(427262),
    A = C(655116),
    r = C(160768),
    o = C(341335),
    p = C(286617),
    d = C(533207),
    _ = C(881335),
    h = C(272984);
let f = 30 * i.A.Millis.SECOND;
function E(t) {
    let { currentUserTrackId: e, syncingWithUser: C, syncingWithParty: a } = t,
        [u, i] = l.useState(!1),
        [n] = l.useState(() => new s.Ep()),
        A = (0, c.Ay)(e);
    l.useEffect(() => {
        u && (e !== A || C || a) && (i(!1), n.stop());
    }, [e, A, C, a, u, n]);
    let r = l.useCallback(() => {
            (i(!0), n.start(f, () => i(!1)));
        }, [n]),
        o = l.useCallback(() => {
            (i(!1), n.stop());
        }, [n]);
    return (l.useEffect(() => () => n.stop(), [n]), { loading: u, startLoading: r, clearLoading: o });
}
function S(t, e) {
    return (0, a.cf)([A.A, u.default], () => (0, p.A)(A.A, u.default, e, t), [t, e]);
}
function Y(t, e, C) {
    let a = S(t, e),
        { notPlayable: s, isCurrentUser: c, playingSameTrack: u } = a,
        { loading: i, startLoading: n, clearLoading: A } = E(a),
        p = l.useCallback(() => {
            (n(), (0, _.A)(a, h.Qp.USER_ACTIVITY_PLAY, C).catch(A));
        }, [a, C, n, A]);
    return {
        label: (0, r.A)(a, h.Qp.USER_ACTIVITY_PLAY),
        tooltip: (0, o.A)(a, h.Qp.USER_ACTIVITY_PLAY),
        disabled: !i && (c || s || u),
        loading: i,
        onClick: p,
        spotifyData: a,
    };
}
function I(t, e, C, a) {
    let s = a ?? n.Ay.getName(e),
        c = S(t, e),
        { notPlayable: u, syncingWithUser: i, syncingWithParty: A, isCurrentUser: p } = c,
        { loading: _, startLoading: f, clearLoading: Y } = E(c),
        I = l.useCallback(() => {
            (f(), (0, d.A)(c, h.Qp.USER_ACTIVITY_SYNC, C).catch(Y));
        }, [c, C, f, Y]);
    return {
        label: (0, r.A)(c, h.Qp.USER_ACTIVITY_SYNC),
        tooltip: (0, o.A)(c, h.Qp.USER_ACTIVITY_SYNC, s),
        disabled: !_ && (u || p || i || A),
        loading: _,
        onClick: I,
        spotifyData: c,
    };
}
function b(t, e, C) {
    let a = S(t, e),
        { notPlayable: s, syncingWithUser: c, syncingWithParty: u, isCurrentUser: i } = a,
        { loading: n, startLoading: A, clearLoading: p } = E(a),
        _ = l.useCallback(() => {
            (A(), (0, d.A)(a, h.Qp.EMBED_SYNC, C).catch(p));
        }, [a, C, A, p]);
    return {
        label: (0, r.A)(a, h.Qp.EMBED_SYNC),
        tooltip: (0, o.A)(a, h.Qp.EMBED_SYNC),
        disabled: !n && (i || c || u || s),
        loading: n,
        onClick: _,
        spotifyData: a,
    };
}
