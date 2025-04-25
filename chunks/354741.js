n.r(t), n.d(t, { default: () => Z });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(493683),
    l = n(239091),
    o = n(883385),
    s = n(108843),
    c = n(947440),
    d = n(100527),
    u = n(658138),
    f = n(299206),
    p = n(895563),
    b = n(212205),
    h = n(62420),
    y = n(641360),
    v = n(769409),
    O = n(140106),
    g = n(122074),
    _ = n(314897),
    m = n(858687),
    j = n(461535),
    E = n(776568),
    C = n(981631),
    P = n(388032);
function N(e) {
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
let Z = (0, s.Z)(
    (0, o.Z)(
        function (e) {
            let { channel: t, selected: o, onSelect: s } = e,
                Z = t.isOwner(_.default.getId()),
                w = (0, j.Z)(t),
                I = (0, E.ZP)(t),
                T = (0, g.Uf)(C.aIL, t.id, 'top'),
                x = (0, m.Z)(t, o),
                A = (0, f.Z)({
                    id: t.id,
                    label: P.intl.string(P.t.gFHI3t)
                }),
                R = (0, c.Z)(t),
                S = (0, p.l)(t),
                U = (0, p.P)(t),
                D = (0, b.Z)(t),
                k = (0, h.Z)(t),
                F = (0, u.D)(t),
                M = (0, y.p1)(d.Z.GROUP_DM_CONTEXT_MENU, t.id),
                Q = (0, y.I3)(d.Z.GROUP_DM_CONTEXT_MENU, t.id);
            return null == t || t.isManaged()
                ? null
                : (0, r.jsxs)(i.v2r, {
                      navId: 'gdm-context',
                      'aria-label': P.intl.string(P.t.Xm41aW),
                      onClose: l.Zy,
                      onSelect: s,
                      children: [
                          (0, r.jsx)(i.kSQ, { children: w }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [S, D, k]
                          }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [
                                  Z
                                      ? (0, r.jsx)(i.sNh, {
                                            id: 'instant-invites',
                                            label: P.intl.string(P.t.ngRFjY),
                                            action: () =>
                                                (0, i.ZDy)(async () => {
                                                    let { default: e } = await n.e('97573').then(n.bind(n, 892382));
                                                    return (n) => (0, r.jsx)(e, N({ channelId: t.id }, n));
                                                })
                                        })
                                      : null,
                                  M &&
                                      (Q
                                          ? (0, r.jsx)(i.sNh, {
                                                id: 'change-icon',
                                                label: P.intl.string(P.t['6yrpFR']),
                                                action: () => (0, O.P5)(t.id, d.Z.GROUP_DM_CONTEXT_MENU)
                                            })
                                          : (0, r.jsx)(i.II_, {
                                                id: 'change-icon',
                                                showDefaultFocus: !0,
                                                control: (e, n) => {
                                                    var l, o;
                                                    return (0, r.jsx)(
                                                        i.TEe,
                                                        ((l = N(
                                                            {
                                                                onChange: (n) => {
                                                                    var r;
                                                                    let { imageUri: i } = n;
                                                                    a.Z.setIcon(t.id, i), null == (r = e.onClose) || r.call(e);
                                                                },
                                                                multiple: !1,
                                                                'aria-label': P.intl.string(P.t['6yrpFR'])
                                                            },
                                                            e
                                                        )),
                                                        (o = o = { ref: n }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                                                            : (function (e, t) {
                                                                  var n = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      n.push.apply(n, r);
                                                                  }
                                                                  return n;
                                                              })(Object(o)).forEach(function (e) {
                                                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                                                              }),
                                                        l)
                                                    );
                                                },
                                                label: P.intl.string(P.t['6yrpFR'])
                                            })),
                                  M && null != t.icon
                                      ? (0, r.jsx)(i.sNh, {
                                            id: 'remove-icon',
                                            label: P.intl.string(P.t['uY+Nk5']),
                                            action: () => a.Z.setIcon(t.id, null)
                                        })
                                      : null,
                                  Q &&
                                      (0, r.jsx)(i.sNh, {
                                          id: 'edit-gdm',
                                          label: P.intl.string(P.t['5Q9+/P']),
                                          action: () => (0, v.B)(t.id, d.Z.GROUP_DM_CONTEXT_MENU)
                                      }),
                                  F
                              ]
                          }),
                          (0, r.jsx)(i.kSQ, { children: R }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [I, T]
                          }),
                          (0, r.jsx)(i.kSQ, { children: x }),
                          (0, r.jsx)(i.kSQ, { children: U }),
                          (0, r.jsx)(i.kSQ, { children: A })
                      ]
                  });
        },
        { object: C.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.GROUP_DM_MENU]
);
