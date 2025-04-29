n.r(t), n.d(t, { default: () => Z });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(493683),
    l = n(239091),
    o = n(883385),
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
    j = n(858687),
    m = n(461535),
    C = n(776568),
    E = n(981631),
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
                w = (0, m.Z)(t),
                I = (0, C.ZP)(t),
                T = (0, g.Uf)(E.aIL, t.id, 'top'),
                x = (0, j.Z)(t, o),
                A = (0, f.Z)({
                    id: t.id,
                    label: P.intl.string(P.t.gFHI3t)
                }),
                R = (0, c.Z)(t),
                U = (0, p.l)(t),
                S = (0, p.P)(t),
                D = (0, b.Z)(t),
                F = (0, h.Z)(t),
                k = (0, d.D)(t),
                M = (0, v.p1)(u.Z.GROUP_DM_CONTEXT_MENU, t.id),
                Q = (0, v.I3)(u.Z.GROUP_DM_CONTEXT_MENU, t.id);
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
                              children: [U, D, F]
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
                                                action: () => (0, O.P5)(t.id, u.Z.GROUP_DM_CONTEXT_MENU)
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
                                          action: () => (0, y.B)(t.id, u.Z.GROUP_DM_CONTEXT_MENU)
                                      }),
                                  k
                              ]
                          }),
                          (0, r.jsx)(i.kSQ, { children: R }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [I, T]
                          }),
                          (0, r.jsx)(i.kSQ, { children: x }),
                          (0, r.jsx)(i.kSQ, { children: S }),
                          (0, r.jsx)(i.kSQ, { children: A })
                      ]
                  });
        },
        { object: E.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_MENU]
);
