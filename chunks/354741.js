(n.r(t), n.d(t, { default: () => S }));
var i = n(255367);
n(73800);
var r = n(481060),
    o = n(239091),
    a = n(883385),
    l = n(108843),
    c = n(947440),
    s = n(100527),
    f = n(658138),
    u = n(299206),
    d = n(895563),
    b = n(212205),
    p = n(62420),
    g = n(769409),
    y = n(122074),
    O = n(314897),
    N = n(858687),
    _ = n(461535),
    h = n(776568),
    m = n(981631),
    v = n(388032);
let S = (0, l.Z)(
    (0, a.Z)(
        function (e) {
            let { channel: t, selected: a, onSelect: l } = e,
                S = t.isOwner(O.default.getId()),
                T = (0, _.Z)(t),
                j = (0, h.ZP)(t),
                A = (0, y.Uf)(m.aIL, t.id, 'top'),
                I = (0, N.Z)(t, a),
                C = (0, u.Z)({
                    id: t.id,
                    label: v.intl.string(v.t.gFHI3t)
                }),
                E = (0, c.Z)(t),
                P = (0, d.l)(t),
                w = (0, d.P)(t),
                x = (0, b.Z)(t),
                Z = (0, p.Z)(t),
                U = (0, f.D)(t);
            return null == t || t.isManaged()
                ? null
                : (0, i.jsxs)(r.v2r, {
                      navId: 'gdm-context',
                      'aria-label': v.intl.string(v.t.Xm41aW),
                      onClose: o.Zy,
                      onSelect: l,
                      children: [
                          (0, i.jsx)(r.kSQ, { children: T }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [P, x, Z]
                          }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [
                                  S
                                      ? (0, i.jsx)(r.sNh, {
                                            id: 'instant-invites',
                                            label: v.intl.string(v.t.ngRFjY),
                                            action: () =>
                                                (0, r.ZDy)(async () => {
                                                    let { default: e } = await n.e('97573').then(n.bind(n, 892382));
                                                    return (n) =>
                                                        (0, i.jsx)(
                                                            e,
                                                            (function (e) {
                                                                for (var t = 1; t < arguments.length; t++) {
                                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                                        i = Object.keys(n);
                                                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                                                        (i = i.concat(
                                                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                            })
                                                                        )),
                                                                        i.forEach(function (t) {
                                                                            var i;
                                                                            ((i = n[t]),
                                                                                t in e
                                                                                    ? Object.defineProperty(e, t, {
                                                                                          value: i,
                                                                                          enumerable: !0,
                                                                                          configurable: !0,
                                                                                          writable: !0
                                                                                      })
                                                                                    : (e[t] = i));
                                                                        }));
                                                                }
                                                                return e;
                                                            })({ channelId: t.id }, n)
                                                        );
                                                })
                                        })
                                      : null,
                                  (0, i.jsx)(r.sNh, {
                                      id: 'edit-gdm',
                                      label: v.intl.string(v.t['5Q9+/P']),
                                      action: () => (0, g.B)(t.id, s.Z.GROUP_DM_CONTEXT_MENU)
                                  }),
                                  U
                              ]
                          }),
                          (0, i.jsx)(r.kSQ, { children: E }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [j, A]
                          }),
                          (0, i.jsx)(r.kSQ, { children: I }),
                          (0, i.jsx)(r.kSQ, { children: w }),
                          (0, i.jsx)(r.kSQ, { children: C })
                      ]
                  });
        },
        { object: m.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.GROUP_DM_MENU]
);
