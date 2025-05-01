n.r(t), n.d(t, { default: () => I }), n(388685);
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(493683),
    l = n(239091),
    o = n(883385),
    c = n(108843),
    s = n(947440),
    d = n(100527),
    u = n(906732),
    f = n(658138),
    p = n(299206),
    h = n(895563),
    b = n(212205),
    v = n(62420),
    y = n(641360),
    O = n(769409),
    _ = n(140106),
    E = n(122074),
    g = n(314897),
    C = n(626135),
    j = n(858687),
    m = n(461535),
    N = n(776568),
    T = n(981631),
    P = n(388032);
function Z(e) {
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
    (0, o.Z)(
        function (e) {
            let { channel: t, selected: o, onSelect: c } = e,
                I = t.isOwner(g.default.getId()),
                R = (0, m.Z)(t),
                U = (0, N.ZP)(t),
                D = (0, E.Uf)(T.aIL, t.id, 'top'),
                w = (0, j.Z)(t, o),
                x = (0, p.Z)({
                    id: t.id,
                    label: P.intl.string(P.t.gFHI3t)
                }),
                A = (0, s.Z)(t),
                M = (0, h.l)(t),
                S = (0, h.P)(t),
                k = (0, b.Z)(t),
                F = (0, v.Z)(t),
                G = (0, f.D)(t),
                { analyticsLocations: Q } = (0, u.ZP)(d.Z.GROUP_DM_CONTEXT_MENU),
                W = (0, y.p1)(d.Z.GROUP_DM_CONTEXT_MENU, t.id),
                X = (0, y.I3)(d.Z.GROUP_DM_CONTEXT_MENU, t.id);
            return null == t || t.isManaged()
                ? null
                : (0, r.jsxs)(i.v2r, {
                      navId: 'gdm-context',
                      'aria-label': P.intl.string(P.t.Xm41aW),
                      onClose: l.Zy,
                      onSelect: c,
                      children: [
                          (0, r.jsx)(i.kSQ, { children: R }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [M, k, F]
                          }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [
                                  I
                                      ? (0, r.jsx)(i.sNh, {
                                            id: 'instant-invites',
                                            label: P.intl.string(P.t.ngRFjY),
                                            action: () =>
                                                (0, i.ZDy)(async () => {
                                                    let { default: e } = await n.e('97573').then(n.bind(n, 892382));
                                                    return (n) => (0, r.jsx)(e, Z({ channelId: t.id }, n));
                                                })
                                        })
                                      : null,
                                  W &&
                                      (X
                                          ? (0, r.jsx)(i.sNh, {
                                                id: 'change-icon',
                                                label: P.intl.string(P.t['6yrpFR']),
                                                action: () => (0, _.P5)(t.id, d.Z.GROUP_DM_CONTEXT_MENU)
                                            })
                                          : (0, r.jsx)(i.II_, {
                                                id: 'change-icon',
                                                showDefaultFocus: !0,
                                                control: (e, n) => {
                                                    var l, o;
                                                    return (0, r.jsx)(
                                                        i.TEe,
                                                        ((l = Z(
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
                                                        (o = o =
                                                            {
                                                                onInteraction: () => {
                                                                    var n;
                                                                    null == (n = e.onInteraction) || n.call(e),
                                                                        C.default.track(T.rMx.GDM_EDIT_INTERACTED, {
                                                                            action: 'open',
                                                                            channel_id: t.id,
                                                                            channel_type: T.d4z.GROUP_DM,
                                                                            location: d.Z.GROUP_DM_CONTEXT_MENU,
                                                                            location_stack: [...Q, d.Z.GROUP_DM_CONTEXT_MENU_CHANGE_ICON]
                                                                        });
                                                                },
                                                                ref: n
                                                            }),
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
                                  W && null != t.icon
                                      ? (0, r.jsx)(i.sNh, {
                                            id: 'remove-icon',
                                            label: P.intl.string(P.t['uY+Nk5']),
                                            action: () => {
                                                C.default.track(T.rMx.GDM_EDIT_INTERACTED, {
                                                    action: 'open',
                                                    channel_id: t.id,
                                                    channel_type: T.d4z.GROUP_DM,
                                                    location: d.Z.GROUP_DM_CONTEXT_MENU,
                                                    location_stack: [...Q, d.Z.GROUP_DM_CONTEXT_MENU_REMOVE_ICON]
                                                }),
                                                    a.Z.setIcon(t.id, null);
                                            }
                                        })
                                      : null,
                                  X &&
                                      (0, r.jsx)(i.sNh, {
                                          id: 'edit-gdm',
                                          label: P.intl.string(P.t['5Q9+/P']),
                                          action: () => (0, O.B)(t.id, d.Z.GROUP_DM_CONTEXT_MENU)
                                      }),
                                  G
                              ]
                          }),
                          (0, r.jsx)(i.kSQ, { children: A }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [U, D]
                          }),
                          (0, r.jsx)(i.kSQ, { children: w }),
                          (0, r.jsx)(i.kSQ, { children: S }),
                          (0, r.jsx)(i.kSQ, { children: x })
                      ]
                  });
        },
        { object: T.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.GROUP_DM_MENU]
);
