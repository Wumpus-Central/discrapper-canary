n.r(t), n.d(t, { default: () => S });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(493683),
    l = n(239091),
    a = n(883385),
    c = n(108843),
    s = n(947440),
    u = n(100527),
    d = n(658138),
    b = n(299206),
    f = n(895563),
    p = n(212205),
    O = n(62420),
    y = n(641360),
    g = n(769409),
    j = n(140106),
    h = n(122074),
    _ = n(314897),
    m = n(858687),
    v = n(461535),
    P = n(776568),
    x = n(981631),
    w = n(388032);
function E(e) {
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
let S = (0, c.Z)(
    (0, a.Z)(
        function (e) {
            let { channel: t, selected: a, onSelect: c } = e,
                S = t.isOwner(_.default.getId()),
                Z = (0, v.Z)(t),
                C = (0, P.ZP)(t),
                N = (0, h.Uf)(x.aIL, t.id, 'top'),
                k = (0, m.Z)(t, a),
                D = (0, b.Z)({
                    id: t.id,
                    label: w.intl.string(w.t.gFHI3t)
                }),
                T = (0, s.Z)(t),
                M = (0, f.l)(t),
                I = (0, f.P)(t),
                U = (0, p.Z)(t),
                Q = (0, O.Z)(t),
                R = (0, d.D)(t),
                F = (0, y.p1)(u.Z.GROUP_DM_CONTEXT_MENU, t.id),
                X = (0, y.I3)(u.Z.GROUP_DM_CONTEXT_MENU, t.id);
            return null == t || t.isManaged()
                ? null
                : (0, r.jsxs)(i.v2r, {
                      navId: 'gdm-context',
                      'aria-label': w.intl.string(w.t.Xm41aW),
                      onClose: l.Zy,
                      onSelect: c,
                      children: [
                          (0, r.jsx)(i.kSQ, { children: Z }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [M, U, Q]
                          }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [
                                  S
                                      ? (0, r.jsx)(i.sNh, {
                                            id: 'instant-invites',
                                            label: w.intl.string(w.t.ngRFjY),
                                            action: () =>
                                                (0, i.ZDy)(async () => {
                                                    let { default: e } = await n.e('97573').then(n.bind(n, 892382));
                                                    return (n) => (0, r.jsx)(e, E({ channelId: t.id }, n));
                                                })
                                        })
                                      : null,
                                  F &&
                                      (X
                                          ? (0, r.jsx)(i.sNh, {
                                                id: 'change-icon',
                                                label: w.intl.string(w.t['6yrpFR']),
                                                action: () => (0, j.P5)(t.id, u.Z.GROUP_DM_CONTEXT_MENU)
                                            })
                                          : (0, r.jsx)(i.II_, {
                                                id: 'change-icon',
                                                showDefaultFocus: !0,
                                                control: (e, n) => {
                                                    var l, a;
                                                    return (0, r.jsx)(
                                                        i.TEe,
                                                        ((l = E(
                                                            {
                                                                onChange: (n) => {
                                                                    var r;
                                                                    let { imageUri: i } = n;
                                                                    o.Z.setIcon(t.id, i), null == (r = e.onClose) || r.call(e);
                                                                },
                                                                multiple: !1,
                                                                'aria-label': w.intl.string(w.t['6yrpFR'])
                                                            },
                                                            e
                                                        )),
                                                        (a = a = { ref: n }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                                                            : (function (e, t) {
                                                                  var n = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      n.push.apply(n, r);
                                                                  }
                                                                  return n;
                                                              })(Object(a)).forEach(function (e) {
                                                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                                                              }),
                                                        l)
                                                    );
                                                },
                                                label: w.intl.string(w.t['6yrpFR'])
                                            })),
                                  F && null != t.icon
                                      ? (0, r.jsx)(i.sNh, {
                                            id: 'remove-icon',
                                            label: w.intl.string(w.t['uY+Nk5']),
                                            action: () => o.Z.setIcon(t.id, null)
                                        })
                                      : null,
                                  X &&
                                      (0, r.jsx)(i.sNh, {
                                          id: 'edit-gdm',
                                          label: w.intl.string(w.t['5Q9+/P']),
                                          action: () => (0, g.B)(t.id, u.Z.GROUP_DM_CONTEXT_MENU)
                                      }),
                                  R
                              ]
                          }),
                          (0, r.jsx)(i.kSQ, { children: T }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [C, N]
                          }),
                          (0, r.jsx)(i.kSQ, { children: k }),
                          (0, r.jsx)(i.kSQ, { children: I }),
                          (0, r.jsx)(i.kSQ, { children: D })
                      ]
                  });
        },
        { object: x.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_MENU]
);
