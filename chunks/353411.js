l.d(e, { Gq: () => N, J$: () => b, _B: () => Y });
var a = l(582128),
    s = l(17928),
    u = l(451988),
    n = l(475743),
    r = l(280450),
    c = l(927813),
    A = l(427262),
    i = l(655116),
    p = l(160768),
    o = l(341335),
    C = l(286617),
    E = l(533207),
    _ = l(881335),
    d = l(272984);
let f = 30 * c.A.Millis.SECOND;
function I(t) {
    let { currentUserTrackId: e, syncingWithUser: l, syncingWithParty: s } = t,
        [r, c] = a.useState(!1),
        [A] = a.useState(() => new u.Ep()),
        i = (0, n.Ay)(e);
    a.useEffect(() => {
        r && (e !== i || l || s) && (c(!1), A.stop());
    }, [e, i, l, s, r, A]);
    let p = a.useCallback(() => {
            (c(!0), A.start(f, () => c(!1)));
        }, [A]),
        o = a.useCallback(() => {
            (c(!1), A.stop());
        }, [A]);
    return (a.useEffect(() => () => A.stop(), [A]), { loading: r, startLoading: p, clearLoading: o });
}
function S(t, e) {
    return (0, s.cf)([i.A, r.default], () => (0, C.A)(i.A, r.default, e, t), [t, e]);
}
function Y(t, e, l) {
    let s = S(t, e),
        { notPlayable: u, isCurrentUser: n, playingSameTrack: r } = s,
        { loading: c, startLoading: A, clearLoading: i } = I(s),
        C = a.useCallback(() => {
            (A(), (0, _.A)(s, d.Qp.USER_ACTIVITY_PLAY, l).catch(i));
        }, [s, l, A, i]);
    return {
        label: (0, p.A)(s, d.Qp.USER_ACTIVITY_PLAY),
        tooltip: (0, o.A)(s, d.Qp.USER_ACTIVITY_PLAY),
        disabled: !c && (n || u || r),
        loading: c,
        onClick: C,
        spotifyData: s,
    };
}
function b(t, e, l, s) {
    let u = s ?? A.Ay.getName(e),
        n = S(t, e),
        { notPlayable: r, syncingWithUser: c, syncingWithParty: i, isCurrentUser: C } = n,
        { loading: _, startLoading: f, clearLoading: Y } = I(n),
        b = a.useCallback(() => {
            (f(), (0, E.A)(n, d.Qp.USER_ACTIVITY_SYNC, l).catch(Y));
        }, [n, l, f, Y]);
    return {
        label: (0, p.A)(n, d.Qp.USER_ACTIVITY_SYNC),
        tooltip: (0, o.A)(n, d.Qp.USER_ACTIVITY_SYNC, u),
        disabled: !_ && (r || C || c || i),
        loading: _,
        onClick: b,
        spotifyData: n,
    };
}
function N(t, e, l) {
    let s = S(t, e),
        { notPlayable: u, syncingWithUser: n, syncingWithParty: r, isCurrentUser: c } = s,
        { loading: A, startLoading: i, clearLoading: C } = I(s),
        _ = a.useCallback(() => {
            (i(), (0, E.A)(s, d.Qp.EMBED_SYNC, l).catch(C));
        }, [s, l, i, C]);
    return {
        label: (0, p.A)(s, d.Qp.EMBED_SYNC),
        tooltip: (0, o.A)(s, d.Qp.EMBED_SYNC),
        disabled: !A && (c || n || r || u),
        loading: A,
        onClick: _,
        spotifyData: s,
    };
}
