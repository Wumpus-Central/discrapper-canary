var l = n(582128),
    i = n(855986),
    a = n(451988),
    r = n(475743),
    s = n(46653),
    o = n(927813),
    u = n(427262),
    c = n(655116),
    d = n(160768),
    m = n(341335),
    A = n(286617),
    p = n(533207),
    h = n(881335),
    f = n(272984);
let g = 30 * o.A.Millis.SECOND;
function x(e) {
    let { currentUserTrackId: t, syncingWithUser: n, syncingWithParty: i } = e,
        [s, o] = l.useState(!1),
        [u] = l.useState(() => new a.Ep()),
        c = (0, r.Ay)(t);
    l.useEffect(() => {
        s && (t !== c || n || i) && (o(!1), u.stop());
    }, [t, c, n, i, s, u]);
    let d = l.useCallback(() => {
            (o(!0), u.start(g, () => o(!1)));
        }, [u]),
        m = l.useCallback(() => {
            (o(!1), u.stop());
        }, [u]);
    return (l.useEffect(() => () => u.stop(), [u]), { loading: s, startLoading: d, clearLoading: m });
}
function I(e, t) {
    return (0, i.cf)([c.A, s.default], () => (0, A.A)(c.A, s.default, t, e), [e, t]);
}
n.d(
    t,
    {},
    {
        Gq: function (e, t, n) {
            let i = I(e, t),
                { notPlayable: a, syncingWithUser: r, syncingWithParty: s, isCurrentUser: o } = i,
                { loading: u, startLoading: c, clearLoading: A } = x(i),
                h = l.useCallback(() => {
                    (c(), (0, p.A)(i, f.Qp.EMBED_SYNC, n).catch(A));
                }, [i, n, c, A]);
            return {
                label: (0, d.A)(i, f.Qp.EMBED_SYNC),
                tooltip: (0, m.A)(i, f.Qp.EMBED_SYNC),
                disabled: !u && (o || r || s || a),
                loading: u,
                onClick: h,
                spotifyData: i,
            };
        },
        J$: function (e, t, n, i) {
            let a = i ?? u.Ay.getName(t),
                r = I(e, t),
                { notPlayable: s, syncingWithUser: o, syncingWithParty: c, isCurrentUser: A } = r,
                { loading: h, startLoading: g, clearLoading: v } = x(r),
                T = l.useCallback(() => {
                    (g(), (0, p.A)(r, f.Qp.USER_ACTIVITY_SYNC, n).catch(v));
                }, [r, n, g, v]);
            return {
                label: (0, d.A)(r, f.Qp.USER_ACTIVITY_SYNC),
                tooltip: (0, m.A)(r, f.Qp.USER_ACTIVITY_SYNC, a),
                disabled: !h && (s || A || o || c),
                loading: h,
                onClick: T,
                spotifyData: r,
            };
        },
        _B: function (e, t, n) {
            let i = I(e, t),
                { notPlayable: a, isCurrentUser: r, playingSameTrack: s } = i,
                { loading: o, startLoading: u, clearLoading: c } = x(i),
                A = l.useCallback(() => {
                    (u(), (0, h.A)(i, f.Qp.USER_ACTIVITY_PLAY, n).catch(c));
                }, [i, n, u, c]);
            return {
                label: (0, d.A)(i, f.Qp.USER_ACTIVITY_PLAY),
                tooltip: (0, m.A)(i, f.Qp.USER_ACTIVITY_PLAY),
                disabled: !o && (r || a || s),
                loading: o,
                onClick: A,
                spotifyData: i,
            };
        },
    },
);
