"use strict";
n.d(t, { Gq: () => y, J$: () => v, _B: () => E });
var r = n(64700),
    i = n(17928),
    a = n(451988),
    l = n(475743),
    s = n(495544),
    o = n(927813),
    c = n(427262),
    u = n(655116),
    d = n(160768),
    _ = n(341335),
    p = n(286617),
    f = n(533207),
    h = n(881335),
    m = n(272984);
let g = 30 * o.A.Millis.SECOND;
function b(e) {
    let { currentUserTrackId: t, syncingWithUser: n, syncingWithParty: i } = e,
        [s, o] = r.useState(!1),
        [c] = r.useState(() => new a.Ep()),
        u = (0, l.A)(t);
    r.useEffect(() => {
        s && (t !== u || n || i) && (o(!1), c.stop());
    }, [t, u, n, i, s, c]);
    let d = r.useCallback(() => {
            o(!0), c.start(g, () => o(!1));
        }, [c]),
        _ = r.useCallback(() => {
            o(!1), c.stop();
        }, [c]);
    return r.useEffect(() => () => c.stop(), [c]), { loading: s, startLoading: d, clearLoading: _ };
}
function A(e, t) {
    return (0, i.cf)([u.A, s.default], () => (0, p.A)(u.A, s.default, t, e), [e, t]);
}
function E(e, t, n) {
    let i = A(e, t),
        { notPlayable: a, isCurrentUser: l, playingSameTrack: s } = i,
        { loading: o, startLoading: c, clearLoading: u } = b(i),
        p = r.useCallback(() => {
            c(), (0, h.A)(i, m.Qp.USER_ACTIVITY_PLAY, n).catch(u);
        }, [i, n, c, u]);
    return {
        label: (0, d.A)(i, m.Qp.USER_ACTIVITY_PLAY),
        tooltip: (0, _.A)(i, m.Qp.USER_ACTIVITY_PLAY),
        disabled: !o && (l || a || s),
        loading: o,
        onClick: p,
        spotifyData: i,
    };
}
function v(e, t, n, i) {
    let a = i ?? c.Ay.getName(t),
        l = A(e, t),
        { notPlayable: s, syncingWithUser: o, syncingWithParty: u, isCurrentUser: p } = l,
        { loading: h, startLoading: g, clearLoading: E } = b(l),
        v = r.useCallback(() => {
            g(), (0, f.A)(l, m.Qp.USER_ACTIVITY_SYNC, n).catch(E);
        }, [l, n, g, E]);
    return {
        label: (0, d.A)(l, m.Qp.USER_ACTIVITY_SYNC),
        tooltip: (0, _.A)(l, m.Qp.USER_ACTIVITY_SYNC, a),
        disabled: !h && (s || p || o || u),
        loading: h,
        onClick: v,
        spotifyData: l,
    };
}
function y(e, t, n) {
    let i = A(e, t),
        { notPlayable: a, syncingWithUser: l, syncingWithParty: s, isCurrentUser: o } = i,
        { loading: c, startLoading: u, clearLoading: p } = b(i),
        h = r.useCallback(() => {
            u(), (0, f.A)(i, m.Qp.EMBED_SYNC, n).catch(p);
        }, [i, n, u, p]);
    return {
        label: (0, d.A)(i, m.Qp.EMBED_SYNC),
        tooltip: (0, _.A)(i, m.Qp.EMBED_SYNC),
        disabled: !c && (o || l || s || a),
        loading: c,
        onClick: h,
        spotifyData: i,
    };
}
