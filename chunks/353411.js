l.d(e, { Gq: () => T, J$: () => S, _B: () => I });
var a = l(582128),
    C = l(17928),
    i = l(451988),
    s = l(475743),
    n = l(280450),
    u = l(927813),
    d = l(427262),
    c = l(655116),
    r = l(160768),
    A = l(341335),
    o = l(286617),
    E = l(533207),
    _ = l(881335),
    p = l(272984);
let N = 30 * u.A.Millis.SECOND;
function h(t) {
    let { currentUserTrackId: e, syncingWithUser: l, syncingWithParty: C } = t,
        [n, u] = a.useState(!1),
        [d] = a.useState(() => new i.Ep()),
        c = (0, s.A)(e);
    a.useEffect(() => {
        n && (e !== c || l || C) && (u(!1), d.stop());
    }, [e, c, l, C, n, d]);
    let r = a.useCallback(() => {
            u(!0), d.start(N, () => u(!1));
        }, [d]),
        A = a.useCallback(() => {
            u(!1), d.stop();
        }, [d]);
    return a.useEffect(() => () => d.stop(), [d]), { loading: n, startLoading: r, clearLoading: A };
}
function f(t, e) {
    return (0, C.cf)([c.A, n.default], () => (0, o.A)(c.A, n.default, e, t), [t, e]);
}
function I(t, e, l) {
    let C = f(t, e),
        { notPlayable: i, isCurrentUser: s, playingSameTrack: n } = C,
        { loading: u, startLoading: d, clearLoading: c } = h(C),
        o = a.useCallback(() => {
            d(), (0, _.A)(C, p.Qp.USER_ACTIVITY_PLAY, l).catch(c);
        }, [C, l, d, c]);
    return {
        label: (0, r.A)(C, p.Qp.USER_ACTIVITY_PLAY),
        tooltip: (0, A.A)(C, p.Qp.USER_ACTIVITY_PLAY),
        disabled: !u && (s || i || n),
        loading: u,
        onClick: o,
        spotifyData: C,
    };
}
function S(t, e, l, C) {
    let i = C ?? d.Ay.getName(e),
        s = f(t, e),
        { notPlayable: n, syncingWithUser: u, syncingWithParty: c, isCurrentUser: o } = s,
        { loading: _, startLoading: N, clearLoading: I } = h(s),
        S = a.useCallback(() => {
            N(), (0, E.A)(s, p.Qp.USER_ACTIVITY_SYNC, l).catch(I);
        }, [s, l, N, I]);
    return {
        label: (0, r.A)(s, p.Qp.USER_ACTIVITY_SYNC),
        tooltip: (0, A.A)(s, p.Qp.USER_ACTIVITY_SYNC, i),
        disabled: !_ && (n || o || u || c),
        loading: _,
        onClick: S,
        spotifyData: s,
    };
}
function T(t, e, l) {
    let C = f(t, e),
        { notPlayable: i, syncingWithUser: s, syncingWithParty: n, isCurrentUser: u } = C,
        { loading: d, startLoading: c, clearLoading: o } = h(C),
        _ = a.useCallback(() => {
            c(), (0, E.A)(C, p.Qp.EMBED_SYNC, l).catch(o);
        }, [C, l, c, o]);
    return {
        label: (0, r.A)(C, p.Qp.EMBED_SYNC),
        tooltip: (0, A.A)(C, p.Qp.EMBED_SYNC),
        disabled: !d && (u || s || n || i),
        loading: d,
        onClick: _,
        spotifyData: C,
    };
}
