n.d(t, { Gq: () => I, J$: () => v, _B: () => E });
var a = n(64700),
    i = n(17928),
    l = n(451988),
    r = n(475743),
    o = n(495544),
    s = n(927813),
    c = n(427262),
    d = n(655116),
    u = n(160768),
    _ = n(341335),
    p = n(286617),
    f = n(533207),
    h = n(881335),
    m = n(272984);
let g = 30 * s.A.Millis.SECOND;
function b(e) {
    let { currentUserTrackId: t, syncingWithUser: n, syncingWithParty: i } = e,
        [o, s] = a.useState(!1),
        [c] = a.useState(() => new l.Ep()),
        d = (0, r.A)(t);
    a.useEffect(() => {
        o && (t !== d || n || i) && (s(!1), c.stop());
    }, [t, d, n, i, o, c]);
    let u = a.useCallback(() => {
            s(!0), c.start(g, () => s(!1));
        }, [c]),
        _ = a.useCallback(() => {
            s(!1), c.stop();
        }, [c]);
    return a.useEffect(() => () => c.stop(), [c]), { loading: o, startLoading: u, clearLoading: _ };
}
function A(e, t) {
    return (0, i.cf)([d.A, o.default], () => (0, p.A)(d.A, o.default, t, e), [e, t]);
}
function E(e, t, n) {
    let i = A(e, t),
        { notPlayable: l, isCurrentUser: r, playingSameTrack: o } = i,
        { loading: s, startLoading: c, clearLoading: d } = b(i),
        p = a.useCallback(() => {
            c(), (0, h.A)(i, m.Qp.USER_ACTIVITY_PLAY, n).catch(d);
        }, [i, n, c, d]);
    return {
        label: (0, u.A)(i, m.Qp.USER_ACTIVITY_PLAY),
        tooltip: (0, _.A)(i, m.Qp.USER_ACTIVITY_PLAY),
        disabled: !s && (r || l || o),
        loading: s,
        onClick: p,
        spotifyData: i,
    };
}
function v(e, t, n, i) {
    let l = i ?? c.Ay.getName(t),
        r = A(e, t),
        { notPlayable: o, syncingWithUser: s, syncingWithParty: d, isCurrentUser: p } = r,
        { loading: h, startLoading: g, clearLoading: E } = b(r),
        v = a.useCallback(() => {
            g(), (0, f.A)(r, m.Qp.USER_ACTIVITY_SYNC, n).catch(E);
        }, [r, n, g, E]);
    return {
        label: (0, u.A)(r, m.Qp.USER_ACTIVITY_SYNC),
        tooltip: (0, _.A)(r, m.Qp.USER_ACTIVITY_SYNC, l),
        disabled: !h && (o || p || s || d),
        loading: h,
        onClick: v,
        spotifyData: r,
    };
}
function I(e, t, n) {
    let i = A(e, t),
        { notPlayable: l, syncingWithUser: r, syncingWithParty: o, isCurrentUser: s } = i,
        { loading: c, startLoading: d, clearLoading: p } = b(i),
        h = a.useCallback(() => {
            d(), (0, f.A)(i, m.Qp.EMBED_SYNC, n).catch(p);
        }, [i, n, d, p]);
    return {
        label: (0, u.A)(i, m.Qp.EMBED_SYNC),
        tooltip: (0, _.A)(i, m.Qp.EMBED_SYNC),
        disabled: !c && (s || r || o || l),
        loading: c,
        onClick: h,
        spotifyData: i,
    };
}
