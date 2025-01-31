t.d(i, { default: () => x });
var l = t(200651);
t(192379);
var a = t(442837),
    e = t(481060),
    r = t(239091),
    d = t(812206),
    c = t(731646),
    s = t(283595),
    o = t(499502),
    u = t(955809),
    h = t(332845),
    b = t(78874),
    I = t(350758),
    Z = t(149835),
    p = t(38346),
    f = t(683609),
    g = t(679879),
    A = t(981631),
    T = t(388032);
function v(n) {
    let { application: i, libraryApplication: t, analyticsContext: a, onSelect: d } = n,
        c = {
            ...(null != a ? a.location : null),
            object: A.qAy.CONTEXT_MENU
        },
        s = (0, b.Z)(t, c),
        v = (0, I.Z)(t),
        x = (0, p.Z)(t),
        E = (0, g.Z)(t),
        N = (0, f.Z)(t),
        S = (0, h.Z)(t, i),
        _ = (0, Z.Z)(t, i),
        L = (0, o.Z)(t, i),
        D = (0, u.Z)(i);
    return (0, l.jsxs)(e.v2r, {
        navId: 'game-context',
        onClose: r.Zy,
        'aria-label': T.intl.string(T.t.tKobzc),
        onSelect: d,
        children: [s, v, x, E, N, S, _, (0, l.jsx)(e.kSQ, { children: L }), (0, l.jsx)(e.kSQ, { children: D })]
    });
}
function x(n) {
    let { applicationId: i, branchId: t } = n,
        e = (0, a.e7)([d.Z], () => d.Z.getApplication(i), [i]),
        r = (0, a.e7)([s.Z], () => (null != t ? s.Z.getLibraryApplication(i, t) : s.Z.getActiveLibraryApplication(i)), [i, t]);
    return null == e || null == r
        ? (0, l.jsx)(c.default, {
              ...n,
              id: i,
              label: T.intl.string(T.t['FfCL+/'])
          })
        : (0, l.jsx)(v, {
              ...n,
              application: e,
              libraryApplication: r
          });
}
