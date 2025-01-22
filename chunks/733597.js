r.d(n, {
    Fe: function () {
        return T;
    },
    Ih: function () {
        return I;
    },
    Lz: function () {
        return S;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(442837),
    s = r(846519),
    l = r(110924),
    u = r(314897),
    c = r(70956),
    d = r(51144),
    f = r(768419),
    p = r(300020),
    h = r(456190),
    _ = r(239470),
    m = r(894344),
    g = r(203777),
    E = r(616922);
let v = 30 * c.Z.Millis.SECOND;
function y(e) {
    let { currentUserTrackId: n, syncingWithUser: r, syncingWithParty: i } = e,
        [o, u] = a.useState(!1),
        [c] = a.useState(() => new s.V7()),
        d = (0, l.Z)(n);
    a.useEffect(() => {
        o && (n !== d || r || i) && (u(!1), c.stop());
    }, [n, d, r, i, o, c]);
    let f = a.useCallback(() => {
            u(!0), c.start(v, () => u(!1));
        }, [c]),
        p = a.useCallback(() => {
            u(!1), c.stop();
        }, [c]);
    return (
        a.useEffect(() => () => c.stop(), [c]),
        {
            loading: o,
            startLoading: f,
            clearLoading: p
        }
    );
}
function b(e, n) {
    return (0, o.cj)([f.Z, u.default], () => (0, _.Z)(f.Z, u.default, n, e), [e, n]);
}
function I(e, n, r) {
    let i = b(e, n),
        { notPlayable: o, isCurrentUser: s, playingSameTrack: l } = i,
        { loading: u, startLoading: c, clearLoading: d } = y(i),
        f = a.useCallback(() => {
            c(), (0, g.Z)(i, E.kG.USER_ACTIVITY_PLAY, r).catch(d);
        }, [i, r, c, d]);
    return {
        label: (0, p.Z)(i, E.kG.USER_ACTIVITY_PLAY),
        tooltip: (0, h.Z)(i, E.kG.USER_ACTIVITY_PLAY),
        disabled: !u && (s || o || l),
        loading: u,
        onClick: f,
        spotifyData: i
    };
}
function T(e, n, r, i) {
    let o = null != i ? i : d.ZP.getName(n),
        s = b(e, n),
        { notPlayable: l, syncingWithUser: u, syncingWithParty: c, isCurrentUser: f } = s,
        { loading: _, startLoading: g, clearLoading: v } = y(s),
        I = a.useCallback(() => {
            g(), (0, m.Z)(s, E.kG.USER_ACTIVITY_SYNC, r).catch(v);
        }, [s, r, g, v]);
    return {
        label: (0, p.Z)(s, E.kG.USER_ACTIVITY_SYNC),
        tooltip: (0, h.Z)(s, E.kG.USER_ACTIVITY_SYNC, o),
        disabled: !_ && (l || f || u || c),
        loading: _,
        onClick: I,
        spotifyData: s
    };
}
function S(e, n, r) {
    let i = b(e, n),
        { notPlayable: o, syncingWithUser: s, syncingWithParty: l, isCurrentUser: u } = i,
        { loading: c, startLoading: d, clearLoading: f } = y(i),
        _ = a.useCallback(() => {
            d(), (0, m.Z)(i, E.kG.EMBED_SYNC, r).catch(f);
        }, [i, r, d, f]);
    return {
        label: (0, p.Z)(i, E.kG.EMBED_SYNC),
        tooltip: (0, h.Z)(i, E.kG.EMBED_SYNC),
        disabled: !c && (u || s || l || o),
        loading: c,
        onClick: _,
        spotifyData: i
    };
}
