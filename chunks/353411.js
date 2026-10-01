l.d(e, { Gq: () => N, J$: () => b, _B: () => Y });
var a = l(582128),
    n = l(17928),
    r = l(451988),
    u = l(475743),
    c = l(280450),
    s = l(927813),
    A = l(427262),
    i = l(655116),
    p = l(160768),
    C = l(341335),
    o = l(286617),
    E = l(533207),
    _ = l(881335),
    d = l(272984);
let f = 30 * s.A.Millis.SECOND;
function I(t) {
    let { currentUserTrackId: e, syncingWithUser: l, syncingWithParty: n } = t,
        [c, s] = a.useState(!1),
        [A] = a.useState(() => new r.Ep()),
        i = (0, u.Ay)(e);
    a.useEffect(() => {
        c && (e !== i || l || n) && (s(!1), A.stop());
    }, [e, i, l, n, c, A]);
    let p = a.useCallback(() => {
            (s(!0), A.start(f, () => s(!1)));
        }, [A]),
        C = a.useCallback(() => {
            (s(!1), A.stop());
        }, [A]);
    return (a.useEffect(() => () => A.stop(), [A]), { loading: c, startLoading: p, clearLoading: C });
}
function S(t, e) {
    return (0, n.cf)([i.A, c.default], () => (0, o.A)(i.A, c.default, e, t), [t, e]);
}
function Y(t, e, l) {
    let n = S(t, e),
        { notPlayable: r, isCurrentUser: u, playingSameTrack: c } = n,
        { loading: s, startLoading: A, clearLoading: i } = I(n),
        o = a.useCallback(() => {
            (A(), (0, _.A)(n, d.Qp.USER_ACTIVITY_PLAY, l).catch(i));
        }, [n, l, A, i]);
    return {
        label: (0, p.A)(n, d.Qp.USER_ACTIVITY_PLAY),
        tooltip: (0, C.A)(n, d.Qp.USER_ACTIVITY_PLAY),
        disabled: !s && (u || r || c),
        loading: s,
        onClick: o,
        spotifyData: n,
    };
}
function b(t, e, l, n) {
    let r = n ?? A.Ay.getName(e),
        u = S(t, e),
        { notPlayable: c, syncingWithUser: s, syncingWithParty: i, isCurrentUser: o } = u,
        { loading: _, startLoading: f, clearLoading: Y } = I(u),
        b = a.useCallback(() => {
            (f(), (0, E.A)(u, d.Qp.USER_ACTIVITY_SYNC, l).catch(Y));
        }, [u, l, f, Y]);
    return {
        label: (0, p.A)(u, d.Qp.USER_ACTIVITY_SYNC),
        tooltip: (0, C.A)(u, d.Qp.USER_ACTIVITY_SYNC, r),
        disabled: !_ && (c || o || s || i),
        loading: _,
        onClick: b,
        spotifyData: u,
    };
}
function N(t, e, l) {
    let n = S(t, e),
        { notPlayable: r, syncingWithUser: u, syncingWithParty: c, isCurrentUser: s } = n,
        { loading: A, startLoading: i, clearLoading: o } = I(n),
        _ = a.useCallback(() => {
            (i(), (0, E.A)(n, d.Qp.EMBED_SYNC, l).catch(o));
        }, [n, l, i, o]);
    return {
        label: (0, p.A)(n, d.Qp.EMBED_SYNC),
        tooltip: (0, C.A)(n, d.Qp.EMBED_SYNC),
        disabled: !A && (s || u || c || r),
        loading: A,
        onClick: _,
        spotifyData: n,
    };
}
