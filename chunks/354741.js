(n.r(t), n.d(t, { default: () => E }));
var i = n(255367);
n(73800);
var r = n(481060),
    a = n(239091),
    l = n(883385),
    o = n(108843),
    d = n(947440),
    u = n(100527),
    c = n(658138),
    s = n(299206),
    f = n(895563),
    b = n(212205),
    v = n(62420),
    h = n(769409),
    p = n(122074),
    O = n(314897),
    g = n(858687),
    _ = n(461535),
    y = n(776568),
    C = n(981631),
    m = n(388032);
let E = (0, o.Z)(
    (0, l.Z)(
        function (e) {
            let { channel: t, selected: l, onSelect: o } = e,
                E = t.isOwner(O.default.getId()),
                j = (0, _.Z)(t),
                Z = (0, y.ZP)(t),
                A = (0, p.Uf)(C.aIL, t.id, 'top'),
                S = (0, g.Z)(t, l),
                N = (0, s.Z)({
                    id: t.id,
                    label: m.intl.string(m.t.gFHI3t)
                }),
                R = (0, d.Z)(t),
                I = (0, f.l)(t),
                U = (0, f.P)(t),
                T = (0, b.Z)(t),
                x = (0, v.Z)(t),
                P = (0, c.D)(t);
            return null == t || t.isManaged()
                ? null
                : (0, i.jsxs)(r.v2r, {
                      navId: 'gdm-context',
                      'aria-label': m.intl.string(m.t.Xm41aW),
                      onClose: a.Zy,
                      onSelect: o,
                      children: [
                          (0, i.jsx)(r.kSQ, { children: j }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [I, T, x]
                          }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [
                                  E
                                      ? (0, i.jsx)(r.sNh, {
                                            id: 'instant-invites',
                                            label: m.intl.string(m.t.ngRFjY),
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
                                      label: m.intl.string(m.t['5Q9+/P']),
                                      action: () => (0, h.B)(t.id, u.Z.GROUP_DM_CONTEXT_MENU)
                                  }),
                                  P
                              ]
                          }),
                          (0, i.jsx)(r.kSQ, { children: R }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [Z, A]
                          }),
                          (0, i.jsx)(r.kSQ, { children: S }),
                          (0, i.jsx)(r.kSQ, { children: U }),
                          (0, i.jsx)(r.kSQ, { children: N })
                      ]
                  });
        },
        { object: C.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_MENU]
);
