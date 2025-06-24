n.r(t), n.d(t, { default: () => A }), n(388685);
var i = n(255367);
n(73800);
var r = n(481060),
    o = n(493683),
    a = n(239091),
    l = n(883385),
    c = n(108843),
    s = n(947440),
    f = n(100527),
    u = n(906732),
    d = n(658138),
    b = n(299206),
    p = n(895563),
    O = n(212205),
    _ = n(62420),
    N = n(641360),
    y = n(769409),
    g = n(140106),
    T = n(122074),
    E = n(314897),
    h = n(626135),
    j = n(858687),
    P = n(461535),
    I = n(776568),
    C = n(981631),
    m = n(388032);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
let A = (0, c.Z)(
    (0, l.Z)(
        function (e) {
            let { channel: t, selected: l, onSelect: c } = e,
                A = t.isOwner(E.default.getId()),
                S = (0, P.Z)(t),
                Z = (0, I.ZP)(t),
                U = (0, T.Uf)(C.aIL, t.id, 'top'),
                w = (0, j.Z)(t, l),
                x = (0, b.Z)({
                    id: t.id,
                    label: m.intl.string(m.t.gFHI3t)
                }),
                M = (0, s.Z)(t),
                D = (0, p.l)(t),
                R = (0, p.P)(t),
                k = (0, O.Z)(t),
                F = (0, _.Z)(t),
                G = (0, d.D)(t),
                { analyticsLocations: X } = (0, u.ZP)(f.Z.GROUP_DM_CONTEXT_MENU),
                L = (0, N.p1)(f.Z.GROUP_DM_CONTEXT_MENU, t.id),
                Q = (0, N.I3)(f.Z.GROUP_DM_CONTEXT_MENU, t.id);
            return null == t || t.isManaged()
                ? null
                : (0, i.jsxs)(r.v2r, {
                      navId: 'gdm-context',
                      'aria-label': m.intl.string(m.t.Xm41aW),
                      onClose: a.Zy,
                      onSelect: c,
                      children: [
                          (0, i.jsx)(r.kSQ, { children: S }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [D, k, F]
                          }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [
                                  A
                                      ? (0, i.jsx)(r.sNh, {
                                            id: 'instant-invites',
                                            label: m.intl.string(m.t.ngRFjY),
                                            action: () =>
                                                (0, r.ZDy)(async () => {
                                                    let { default: e } = await n.e('97573').then(n.bind(n, 892382));
                                                    return (n) => (0, i.jsx)(e, v({ channelId: t.id }, n));
                                                })
                                        })
                                      : null,
                                  L &&
                                      (Q
                                          ? (0, i.jsx)(r.sNh, {
                                                id: 'change-icon',
                                                label: m.intl.string(m.t['6yrpFR']),
                                                action: () => (0, g.P5)(t.id, f.Z.GROUP_DM_CONTEXT_MENU)
                                            })
                                          : (0, i.jsx)(r.II_, {
                                                id: 'change-icon',
                                                showDefaultFocus: !0,
                                                control: (e, n) => {
                                                    var a, l;
                                                    return (0, i.jsx)(
                                                        r.TEe,
                                                        ((a = v(
                                                            {
                                                                onChange: (n) => {
                                                                    var i;
                                                                    let { imageUri: r } = n;
                                                                    o.Z.setIcon(t.id, r), null == (i = e.onClose) || i.call(e);
                                                                },
                                                                multiple: !1,
                                                                'aria-label': m.intl.string(m.t['6yrpFR'])
                                                            },
                                                            e
                                                        )),
                                                        (l = l =
                                                            {
                                                                onInteraction: () => {
                                                                    var n;
                                                                    null == (n = e.onInteraction) || n.call(e),
                                                                        h.default.track(C.rMx.GDM_EDIT_INTERACTED, {
                                                                            action: 'open',
                                                                            channel_id: t.id,
                                                                            channel_type: C.d4z.GROUP_DM,
                                                                            location: f.Z.GROUP_DM_CONTEXT_MENU,
                                                                            location_stack: [...X, f.Z.GROUP_DM_CONTEXT_MENU_CHANGE_ICON]
                                                                        });
                                                                },
                                                                ref: n
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l))
                                                            : (function (e, t) {
                                                                  var n = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var i = Object.getOwnPropertySymbols(e);
                                                                      n.push.apply(n, i);
                                                                  }
                                                                  return n;
                                                              })(Object(l)).forEach(function (e) {
                                                                  Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(l, e));
                                                              }),
                                                        a)
                                                    );
                                                },
                                                label: m.intl.string(m.t['6yrpFR'])
                                            })),
                                  L && null != t.icon
                                      ? (0, i.jsx)(r.sNh, {
                                            id: 'remove-icon',
                                            label: m.intl.string(m.t['uY+Nk5']),
                                            action: () => {
                                                h.default.track(C.rMx.GDM_EDIT_INTERACTED, {
                                                    action: 'open',
                                                    channel_id: t.id,
                                                    channel_type: C.d4z.GROUP_DM,
                                                    location: f.Z.GROUP_DM_CONTEXT_MENU,
                                                    location_stack: [...X, f.Z.GROUP_DM_CONTEXT_MENU_REMOVE_ICON]
                                                }),
                                                    o.Z.setIcon(t.id, null);
                                            }
                                        })
                                      : null,
                                  Q &&
                                      (0, i.jsx)(r.sNh, {
                                          id: 'edit-gdm',
                                          label: m.intl.string(m.t['5Q9+/P']),
                                          action: () => (0, y.B)(t.id, f.Z.GROUP_DM_CONTEXT_MENU)
                                      }),
                                  G
                              ]
                          }),
                          (0, i.jsx)(r.kSQ, { children: M }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [Z, U]
                          }),
                          (0, i.jsx)(r.kSQ, { children: w }),
                          (0, i.jsx)(r.kSQ, { children: R }),
                          (0, i.jsx)(r.kSQ, { children: x })
                      ]
                  });
        },
        { object: C.qAy.CONTEXT_MENU }
    ),
    [f.Z.CONTEXT_MENU, f.Z.GROUP_DM_MENU]
);
