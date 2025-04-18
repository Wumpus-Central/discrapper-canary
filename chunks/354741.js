n.r(t), n.d(t, { default: () => Z });
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
    _ = n(314897),
    N = n(858687),
    j = n(461535),
    m = n(776568),
    C = n(981631),
    E = n(388032);
function P(e) {
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
    (0, l.Z)(
        function (e) {
            let { channel: t, selected: l, onSelect: s } = e,
                Z = t.isOwner(_.default.getId()),
                w = (0, j.Z)(t),
                I = (0, m.ZP)(t),
                T = (0, g.Uf)(C.aIL, t.id, 'top'),
                x = (0, N.Z)(t, l),
                A = (0, f.Z)({
                    id: t.id,
                    label: E.NW.string(E.t.gFHI3t)
                }),
                R = (0, c.Z)(t),
                U = (0, p.l)(t),
                S = (0, p.P)(t),
                W = (0, b.Z)(t),
                D = (0, h.Z)(t),
                F = (0, d.D)(t),
                k = (0, v.p1)(u.Z.GROUP_DM_CONTEXT_MENU, t.id),
                M = (0, v.I3)(u.Z.GROUP_DM_CONTEXT_MENU, t.id);
            return null == t || t.isManaged()
                ? null
                : (0, r.jsxs)(a.v2r, {
                      navId: 'gdm-context',
                      'aria-label': E.NW.string(E.t.Xm41aW),
                      onClose: o.Zy,
                      onSelect: s,
                      children: [
                          (0, r.jsx)(a.kSQ, { children: w }),
                          (0, r.jsxs)(a.kSQ, {
                              children: [U, W, D]
                          }),
                          (0, r.jsxs)(a.kSQ, {
                              children: [
                                  Z
                                      ? (0, r.jsx)(a.sNh, {
                                            id: 'instant-invites',
                                            label: E.NW.string(E.t.ngRFjY),
                                            action: () =>
                                                (0, a.ZDy)(async () => {
                                                    let { default: e } = await n.e('97573').then(n.bind(n, 892382));
                                                    return (n) => (0, r.jsx)(e, P({ channelId: t.id }, n));
                                                })
                                        })
                                      : null,
                                  k &&
                                      (M
                                          ? (0, r.jsx)(a.sNh, {
                                                id: 'change-icon',
                                                label: E.NW.string(E.t['6yrpFR']),
                                                action: () => (0, O.P5)(t.id, u.Z.GROUP_DM_CONTEXT_MENU)
                                            })
                                          : (0, r.jsx)(a.II_, {
                                                id: 'change-icon',
                                                showDefaultFocus: !0,
                                                control: (e, n) => {
                                                    var o, l;
                                                    return (0, r.jsx)(
                                                        a.TEe,
                                                        ((o = P(
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
                                  M &&
                                      (0, r.jsx)(a.sNh, {
                                          id: 'edit-gdm',
                                          label: E.NW.string(E.t['5Q9+/P']),
                                          action: () => (0, y.B)(t.id, u.Z.GROUP_DM_CONTEXT_MENU)
                                      }),
                                  F
                              ]
                          }),
                          (0, r.jsx)(a.kSQ, { children: R }),
                          (0, r.jsxs)(a.kSQ, {
                              children: [I, T]
                          }),
                          (0, r.jsx)(a.kSQ, { children: x }),
                          (0, r.jsx)(a.kSQ, { children: S }),
                          (0, r.jsx)(a.kSQ, { children: A })
                      ]
                  });
        },
        { object: C.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_MENU]
);
