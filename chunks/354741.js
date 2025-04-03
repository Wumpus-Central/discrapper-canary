n.d(t, { default: () => I });
var r = n(200651);
n(192379);
var a = n(481060),
    i = n(493683),
    o = n(239091),
    l = n(883385),
    c = n(108843),
    d = n(947440),
    u = n(100527),
    f = n(658138),
    s = n(299206),
    p = n(895563),
    b = n(212205),
    v = n(62420),
    h = n(641360),
    y = n(769409),
    O = n(122074),
    g = n(314897),
    j = n(858687),
    C = n(461535),
    _ = n(776568),
    E = n(981631),
    N = n(388032);
function m(e) {
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
let I = (0, c.Z)(
    (0, l.Z)(
        function (e) {
            let { channel: t, selected: l, onSelect: c } = e,
                u = t.isOwner(g.default.getId()),
                I = (0, C.Z)(t),
                Z = (0, _.ZP)(t),
                x = (0, O.Uf)(E.aIL, t.id, 'top'),
                A = (0, j.Z)(t, l),
                P = (0, s.Z)({
                    id: t.id,
                    label: N.NW.string(N.t.gFHI3t)
                }),
                S = (0, d.Z)(t),
                T = (0, p.l)(t),
                w = (0, p.P)(t),
                R = (0, b.Z)(t),
                F = (0, v.Z)(t),
                k = (0, f.D)(t),
                W = (0, h.p1)('GroupDMContextMenu'),
                U = (0, h.I3)('GroupDMContextMenu');
            return null == t || t.isManaged()
                ? null
                : (0, r.jsxs)(a.v2r, {
                      navId: 'gdm-context',
                      'aria-label': N.NW.string(N.t.Xm41aW),
                      onClose: o.Zy,
                      onSelect: c,
                      children: [
                          (0, r.jsx)(a.kSQ, { children: I }),
                          (0, r.jsxs)(a.kSQ, {
                              children: [T, R, F]
                          }),
                          (0, r.jsxs)(a.kSQ, {
                              children: [
                                  u
                                      ? (0, r.jsx)(a.sNh, {
                                            id: 'instant-invites',
                                            label: N.NW.string(N.t.ngRFjY),
                                            action: () =>
                                                (0, a.ZDy)(async () => {
                                                    let { default: e } = await n.e('97573').then(n.bind(n, 892382));
                                                    return (n) => (0, r.jsx)(e, m({ channelId: t.id }, n));
                                                })
                                        })
                                      : null,
                                  W &&
                                      (0, r.jsx)(a.II_, {
                                          id: 'change-icon',
                                          showDefaultFocus: !0,
                                          control: (e, n) => {
                                              var o, l;
                                              return (0, r.jsx)(
                                                  a.TEe,
                                                  ((o = m(
                                                      {
                                                          onChange: (n) => {
                                                              var r;
                                                              let { imageUri: a } = n;
                                                              i.Z.setIcon(t.id, a), null == (r = e.onClose) || r.call(e);
                                                          },
                                                          multiple: !1,
                                                          'aria-label': N.NW.string(N.t['6yrpFR'])
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
                                          label: N.NW.string(N.t['6yrpFR'])
                                      }),
                                  W && null != t.icon
                                      ? (0, r.jsx)(a.sNh, {
                                            id: 'remove-icon',
                                            label: N.NW.string(N.t['uY+Nk5']),
                                            action: () => i.Z.setIcon(t.id, null)
                                        })
                                      : null,
                                  U &&
                                      (0, r.jsx)(a.sNh, {
                                          id: 'edit-gdm',
                                          icon: a.vdY,
                                          label: N.NW.string(N.t['5Q9+/P']),
                                          action: () => (0, y.B)(t.id)
                                      }),
                                  k
                              ]
                          }),
                          (0, r.jsx)(a.kSQ, { children: S }),
                          (0, r.jsxs)(a.kSQ, {
                              children: [Z, x]
                          }),
                          (0, r.jsx)(a.kSQ, { children: A }),
                          (0, r.jsx)(a.kSQ, { children: w }),
                          (0, r.jsx)(a.kSQ, { children: P })
                      ]
                  });
        },
        { object: E.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_MENU]
);
