n.d(t, { default: () => x });
var r = n(200651);
n(192379);
var a = n(481060),
    i = n(493683),
    o = n(239091),
    l = n(883385),
    s = n(108843),
    c = n(947440),
    u = n(100527),
    d = n(658138),
    f = n(299206),
    p = n(895563),
    b = n(212205),
    h = n(62420),
    v = n(641360),
    y = n(769409),
    O = n(140106),
    g = n(122074),
    j = n(314897),
    m = n(858687),
    N = n(461535),
    C = n(776568),
    _ = n(981631),
    E = n(388032);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let x = (0, s.Z)(
    (0, l.Z)(
        function (e) {
            let { channel: t, selected: l, onSelect: s } = e,
                u = t.isOwner(j.default.getId()),
                x = (0, N.Z)(t),
                P = (0, C.ZP)(t),
                Z = (0, g.Uf)(_.aIL, t.id, 'top'),
                A = (0, m.Z)(t, l),
                I = (0, f.Z)({
                    id: t.id,
                    label: E.NW.string(E.t.gFHI3t)
                }),
                S = (0, c.Z)(t),
                W = (0, p.l)(t),
                R = (0, p.P)(t),
                T = (0, b.Z)(t),
                F = (0, h.Z)(t),
                D = (0, d.D)(t),
                k = (0, v.p1)('GroupDMContextMenu'),
                U = (0, v.I3)('GroupDMContextMenu');
            return null == t || t.isManaged()
                ? null
                : (0, r.jsxs)(a.v2r, {
                      navId: 'gdm-context',
                      'aria-label': E.NW.string(E.t.Xm41aW),
                      onClose: o.Zy,
                      onSelect: s,
                      children: [
                          (0, r.jsx)(a.kSQ, { children: x }),
                          (0, r.jsxs)(a.kSQ, {
                              children: [W, T, F]
                          }),
                          (0, r.jsxs)(a.kSQ, {
                              children: [
                                  u
                                      ? (0, r.jsx)(a.sNh, {
                                            id: 'instant-invites',
                                            label: E.NW.string(E.t.ngRFjY),
                                            action: () =>
                                                (0, a.ZDy)(async () => {
                                                    let { default: e } = await n.e('97573').then(n.bind(n, 892382));
                                                    return (n) => (0, r.jsx)(e, w({ channelId: t.id }, n));
                                                })
                                        })
                                      : null,
                                  k &&
                                      (U
                                          ? (0, r.jsx)(a.sNh, {
                                                id: 'change-icon',
                                                label: E.NW.string(E.t['6yrpFR']),
                                                action: () => (0, O.P5)(t.id)
                                            })
                                          : (0, r.jsx)(a.II_, {
                                                id: 'change-icon',
                                                showDefaultFocus: !0,
                                                control: (e, n) => {
                                                    var o, l;
                                                    return (0, r.jsx)(
                                                        a.TEe,
                                                        ((o = w(
                                                            {
                                                                onChange: (n) => {
                                                                    var r;
                                                                    let { imageUri: a } = n;
                                                                    i.Z.setIcon(t.id, a), null == (r = e.onClose) || r.call(e);
                                                                },
                                                                multiple: !1,
                                                                'aria-label': E.NW.string(E.t['6yrpFR'])
                                                            },
                                                            e
                                                        )),
                                                        (l = l = { ref: n }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(l))
                                                            : (function (e, t) {
                                                                  var n = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      n.push.apply(n, r);
                                                                  }
                                                                  return n;
                                                              })(Object(l)).forEach(function (e) {
                                                                  Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(l, e));
                                                              }),
                                                        o)
                                                    );
                                                },
                                                label: E.NW.string(E.t['6yrpFR'])
                                            })),
                                  k && null != t.icon
                                      ? (0, r.jsx)(a.sNh, {
                                            id: 'remove-icon',
                                            label: E.NW.string(E.t['uY+Nk5']),
                                            action: () => i.Z.setIcon(t.id, null)
                                        })
                                      : null,
                                  U &&
                                      (0, r.jsx)(a.sNh, {
                                          id: 'edit-gdm',
                                          label: E.NW.string(E.t['5Q9+/P']),
                                          action: () => (0, y.B)(t.id)
                                      }),
                                  D
                              ]
                          }),
                          (0, r.jsx)(a.kSQ, { children: S }),
                          (0, r.jsxs)(a.kSQ, {
                              children: [P, Z]
                          }),
                          (0, r.jsx)(a.kSQ, { children: A }),
                          (0, r.jsx)(a.kSQ, { children: R }),
                          (0, r.jsx)(a.kSQ, { children: I })
                      ]
                  });
        },
        { object: _.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_MENU]
);
