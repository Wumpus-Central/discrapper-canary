t.d(e, { default: () => b });
var l = t(200651);
t(192379);
var i = t(481060),
    r = t(239091),
    a = t(883385),
    u = t(108843),
    d = t(947440),
    o = t(100527),
    s = t(299206),
    c = t(819403),
    E = t(777658),
    _ = t(858488),
    g = t(933409),
    Z = t(389052),
    f = t(24311),
    v = t(158508),
    h = t(710631),
    A = t(494439),
    S = t(991307),
    T = t(700994),
    m = t(332031),
    I = t(981631),
    M = t(388032);
function N(n) {
    let { user: e, guildId: t, channelId: a, mediaEngineContext: u, onSelect: o, onShowProfile: I, appContext: N } = n,
        C = (0, A.Z)({
            onAction: () => {
                null == I || I();
            }
        }),
        b = (0, f.Z)({
            user: e,
            context: N
        }),
        O = (0, _.Z)({
            user: e,
            appContext: N
        }),
        P = (0, m.Z)(e.id),
        x = (0, T.Z)(e.id),
        D = (0, S.Z)(e.id, u),
        U = (0, h.Z)({ user: e }),
        y = (0, d.Z)(null, e),
        j = (0, E.Z)({
            user: e,
            appContext: N
        }),
        p = (0, Z.Z)({
            user: e,
            appContext: N
        }),
        k = (0, v.Z)({
            user: e,
            appContext: N
        }),
        R = (0, s.Z)({
            id: e.id,
            label: M.intl.string(M.t['/AXYnJ'])
        }),
        L = (0, c.Z)(e),
        B = (0, g.Z)(e, t, a),
        w = e.isNonUserBot();
    return (0, l.jsxs)(i.v2r, {
        navId: 'user-context',
        onClose: r.Zy,
        'aria-label': M.intl.string(M.t.liqwPD),
        onSelect: o,
        children: [
            !w &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(i.kSQ, { children: L }),
                        (0, l.jsxs)(i.kSQ, {
                            children: [C, b, O, P]
                        }),
                        (0, l.jsx)(i.kSQ, { children: x }),
                        (0, l.jsx)(i.kSQ, { children: y }),
                        (0, l.jsxs)(i.kSQ, {
                            children: [D, U, j, k, p]
                        }),
                        (0, l.jsx)(i.kSQ, { children: B })
                    ]
                }),
            (0, l.jsx)(i.kSQ, { children: R })
        ]
    });
}
function C(n) {
    let { user: e, mediaEngineContext: t, onSelect: a, onShowProfile: u, appContext: o } = n,
        g = (0, A.Z)({
            onAction: () => {
                null == u || u();
            }
        }),
        I = (0, f.Z)({
            user: e,
            context: o
        }),
        N = (0, _.Z)({
            user: e,
            appContext: o
        }),
        C = (0, m.Z)(e.id),
        b = (0, T.Z)(e.id),
        O = (0, S.Z)(e.id, t),
        P = (0, h.Z)({ user: e }),
        x = (0, d.Z)(null, e),
        D = (0, E.Z)({
            user: e,
            appContext: o
        }),
        U = (0, Z.Z)({
            user: e,
            appContext: o
        }),
        y = (0, v.Z)({
            user: e,
            appContext: o
        }),
        j = (0, s.Z)({
            id: e.id,
            label: M.intl.string(M.t['/AXYnJ'])
        }),
        p = (0, c.Z)(e),
        k = e.isNonUserBot();
    return (0, l.jsxs)(i.v2r, {
        navId: 'user-context',
        onClose: r.Zy,
        'aria-label': M.intl.string(M.t.liqwPD),
        onSelect: a,
        children: [
            !k &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(i.kSQ, { children: p }),
                        (0, l.jsxs)(i.kSQ, {
                            children: [g, I, N, C]
                        }),
                        (0, l.jsx)(i.kSQ, { children: b }),
                        (0, l.jsx)(i.kSQ, { children: x }),
                        (0, l.jsxs)(i.kSQ, {
                            children: [O, P, D, y, U]
                        })
                    ]
                }),
            (0, l.jsx)(i.kSQ, { children: j })
        ]
    });
}
let b = (0, u.Z)(
    (0, a.Z)(
        function (n) {
            let { guildId: e, channelId: t, ...i } = n;
            return null != e && null != t
                ? (0, l.jsx)(N, {
                      ...i,
                      guildId: e,
                      channelId: t
                  })
                : (0, l.jsx)(C, {
                      ...i,
                      guildId: e,
                      channelId: t
                  });
        },
        { object: I.qAy.CONTEXT_MENU }
    ),
    [o.Z.CONTEXT_MENU, o.Z.USER_OVERLAY_CONTEXT_MENU]
);
