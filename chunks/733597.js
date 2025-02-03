n.d(t, {
    Fe: () => I,
    Ih: () => y,
    Lz: () => b
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    a = n(846519),
    s = n(110924),
    o = n(314897),
    l = n(70956),
    u = n(51144),
    c = n(768419),
    d = n(300020),
    f = n(456190),
    _ = n(239470),
    p = n(894344),
    h = n(203777),
    m = n(616922);
let g = 30 * l.Z.Millis.SECOND;
function E(e) {
    let { currentUserTrackId: t, syncingWithUser: n, syncingWithParty: r } = e,
        [o, l] = i.useState(!1),
        [u] = i.useState(() => new a.V7()),
        c = (0, s.Z)(t);
    i.useEffect(() => {
        o && (t !== c || n || r) && (l(!1), u.stop());
    }, [t, c, n, r, o, u]);
    let d = i.useCallback(() => {
            l(!0), u.start(g, () => l(!1));
        }, [u]),
        f = i.useCallback(() => {
            l(!1), u.stop();
        }, [u]);
    return (
        i.useEffect(() => () => u.stop(), [u]),
        {
            loading: o,
            startLoading: d,
            clearLoading: f
        }
    );
}
function v(e, t) {
    return (0, r.cj)([c.Z, o.default], () => (0, _.Z)(c.Z, o.default, t, e), [e, t]);
}
function y(e, t, n) {
    let r = v(e, t),
        { notPlayable: a, isCurrentUser: s, playingSameTrack: o } = r,
        { loading: l, startLoading: u, clearLoading: c } = E(r),
        _ = i.useCallback(() => {
            u(), (0, h.Z)(r, m.kG.USER_ACTIVITY_PLAY, n).catch(c);
        }, [r, n, u, c]);
    return {
        label: (0, d.Z)(r, m.kG.USER_ACTIVITY_PLAY),
        tooltip: (0, f.Z)(r, m.kG.USER_ACTIVITY_PLAY),
        disabled: !l && (s || a || o),
        loading: l,
        onClick: _,
        spotifyData: r
    };
}
function I(e, t, n, r) {
    let a = null != r ? r : u.ZP.getName(t),
        s = v(e, t),
        { notPlayable: o, syncingWithUser: l, syncingWithParty: c, isCurrentUser: _ } = s,
        { loading: h, startLoading: g, clearLoading: y } = E(s),
        I = i.useCallback(() => {
            g(), (0, p.Z)(s, m.kG.USER_ACTIVITY_SYNC, n).catch(y);
        }, [s, n, g, y]);
    return {
        label: (0, d.Z)(s, m.kG.USER_ACTIVITY_SYNC),
        tooltip: (0, f.Z)(s, m.kG.USER_ACTIVITY_SYNC, a),
        disabled: !h && (o || _ || l || c),
        loading: h,
        onClick: I,
        spotifyData: s
    };
}
function b(e, t, n) {
    let r = v(e, t),
        { notPlayable: a, syncingWithUser: s, syncingWithParty: o, isCurrentUser: l } = r,
        { loading: u, startLoading: c, clearLoading: _ } = E(r),
        h = i.useCallback(() => {
            c(), (0, p.Z)(r, m.kG.EMBED_SYNC, n).catch(_);
        }, [r, n, c, _]);
    return {
        label: (0, d.Z)(r, m.kG.EMBED_SYNC),
        tooltip: (0, f.Z)(r, m.kG.EMBED_SYNC),
        disabled: !u && (l || s || o || a),
        loading: u,
        onClick: h,
        spotifyData: r
    };
}
