n.d(t, {
    Gq: () => A,
    J$: () => O,
    _B: () => y,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    a = n(451988),
    s = n(475743),
    o = n(961350),
    l = n(927813),
    c = n(427262),
    u = n(655116),
    d = n(160768),
    f = n(341335),
    p = n(286617),
    _ = n(533207),
    h = n(881335),
    m = n(272984);
let g = 30 * l.A.Millis.SECOND;
function E(e) {
    let { currentUserTrackId: t, syncingWithUser: n, syncingWithParty: i } = e,
        [o, l] = r.useState(!1),
        [c] = r.useState(() => new a.Ep()),
        u = (0, s.A)(t);
    r.useEffect(() => {
        o && (t !== u || n || i) && (l(!1), c.stop());
    }, [t, u, n, i, o, c]);
    let d = r.useCallback(() => {
            l(!0), c.start(g, () => l(!1));
        }, [c]),
        f = r.useCallback(() => {
            l(!1), c.stop();
        }, [c]);
    return (
        r.useEffect(() => () => c.stop(), [c]),
        {
            loading: o,
            startLoading: d,
            clearLoading: f,
        }
    );
}
function b(e, t) {
    return (0, i.cf)([u.A, o.default], () => (0, p.A)(u.A, o.default, t, e), [e, t]);
}
function y(e, t, n) {
    let i = b(e, t),
        { notPlayable: a, isCurrentUser: s, playingSameTrack: o } = i,
        { loading: l, startLoading: c, clearLoading: u } = E(i),
        p = r.useCallback(() => {
            c(), (0, h.A)(i, m.Qp.USER_ACTIVITY_PLAY, n).catch(u);
        }, [i, n, c, u]);
    return {
        label: (0, d.A)(i, m.Qp.USER_ACTIVITY_PLAY),
        tooltip: (0, f.A)(i, m.Qp.USER_ACTIVITY_PLAY),
        disabled: !l && (s || a || o),
        loading: l,
        onClick: p,
        spotifyData: i,
    };
}
function O(e, t, n, i) {
    let a = null != i ? i : c.Ay.getName(t),
        s = b(e, t),
        { notPlayable: o, syncingWithUser: l, syncingWithParty: u, isCurrentUser: p } = s,
        { loading: h, startLoading: g, clearLoading: y } = E(s),
        O = r.useCallback(() => {
            g(), (0, _.A)(s, m.Qp.USER_ACTIVITY_SYNC, n).catch(y);
        }, [s, n, g, y]);
    return {
        label: (0, d.A)(s, m.Qp.USER_ACTIVITY_SYNC),
        tooltip: (0, f.A)(s, m.Qp.USER_ACTIVITY_SYNC, a),
        disabled: !h && (o || p || l || u),
        loading: h,
        onClick: O,
        spotifyData: s,
    };
}
function A(e, t, n) {
    let i = b(e, t),
        { notPlayable: a, syncingWithUser: s, syncingWithParty: o, isCurrentUser: l } = i,
        { loading: c, startLoading: u, clearLoading: p } = E(i),
        h = r.useCallback(() => {
            u(), (0, _.A)(i, m.Qp.EMBED_SYNC, n).catch(p);
        }, [i, n, u, p]);
    return {
        label: (0, d.A)(i, m.Qp.EMBED_SYNC),
        tooltip: (0, f.A)(i, m.Qp.EMBED_SYNC),
        disabled: !c && (l || s || o || a),
        loading: c,
        onClick: h,
        spotifyData: i,
    };
}
