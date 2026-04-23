n.d(t, { Gq: () => S, J$: () => g, _B: () => I });
var r = n(64700),
    i = n(311907),
    a = n(451988),
    l = n(475743),
    s = n(961350),
    c = n(927813),
    o = n(427262),
    d = n(655116),
    u = n(160768),
    _ = n(341335),
    m = n(286617),
    p = n(533207),
    h = n(881335),
    f = n(272984);
let E = 30 * c.A.Millis.SECOND;
function A(e) {
    let { currentUserTrackId: t, syncingWithUser: n, syncingWithParty: i } = e,
        [s, c] = r.useState(!1),
        [o] = r.useState(() => new a.Ep()),
        d = (0, l.A)(t);
    r.useEffect(() => {
        s && (t !== d || n || i) && (c(!1), o.stop());
    }, [t, d, n, i, s, o]);
    let u = r.useCallback(() => {
            c(!0), o.start(E, () => c(!1));
        }, [o]),
        _ = r.useCallback(() => {
            c(!1), o.stop();
        }, [o]);
    return r.useEffect(() => () => o.stop(), [o]), { loading: s, startLoading: u, clearLoading: _ };
}
function v(e, t) {
    return (0, i.cf)([d.A, s.default], () => (0, m.A)(d.A, s.default, t, e), [e, t]);
}
function I(e, t, n) {
    let i = v(e, t),
        { notPlayable: a, isCurrentUser: l, playingSameTrack: s } = i,
        { loading: c, startLoading: o, clearLoading: d } = A(i),
        m = r.useCallback(() => {
            o(), (0, h.A)(i, f.Qp.USER_ACTIVITY_PLAY, n).catch(d);
        }, [i, n, o, d]);
    return {
        label: (0, u.A)(i, f.Qp.USER_ACTIVITY_PLAY),
        tooltip: (0, _.A)(i, f.Qp.USER_ACTIVITY_PLAY),
        disabled: !c && (l || a || s),
        loading: c,
        onClick: m,
        spotifyData: i,
    };
}
function g(e, t, n, i) {
    let a = i ?? o.Ay.getName(t),
        l = v(e, t),
        { notPlayable: s, syncingWithUser: c, syncingWithParty: d, isCurrentUser: m } = l,
        { loading: h, startLoading: E, clearLoading: I } = A(l),
        g = r.useCallback(() => {
            E(), (0, p.A)(l, f.Qp.USER_ACTIVITY_SYNC, n).catch(I);
        }, [l, n, E, I]);
    return {
        label: (0, u.A)(l, f.Qp.USER_ACTIVITY_SYNC),
        tooltip: (0, _.A)(l, f.Qp.USER_ACTIVITY_SYNC, a),
        disabled: !h && (s || m || c || d),
        loading: h,
        onClick: g,
        spotifyData: l,
    };
}
function S(e, t, n) {
    let i = v(e, t),
        { notPlayable: a, syncingWithUser: l, syncingWithParty: s, isCurrentUser: c } = i,
        { loading: o, startLoading: d, clearLoading: m } = A(i),
        h = r.useCallback(() => {
            d(), (0, p.A)(i, f.Qp.EMBED_SYNC, n).catch(m);
        }, [i, n, d, m]);
    return {
        label: (0, u.A)(i, f.Qp.EMBED_SYNC),
        tooltip: (0, _.A)(i, f.Qp.EMBED_SYNC),
        disabled: !o && (c || l || s || a),
        loading: o,
        onClick: h,
        spotifyData: i,
    };
}
