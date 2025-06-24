n.r(t), n.d(t, { default: () => R }), n(388685);
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(493683),
    a = n(239091),
    o = n(883385),
    c = n(108843),
    s = n(947440),
    d = n(100527),
    u = n(906732),
    f = n(658138),
    p = n(299206),
    b = n(895563),
    h = n(212205),
    O = n(62420),
    _ = n(641360),
    v = n(769409),
    y = n(140106),
    g = n(122074),
    E = n(314897),
    m = n(626135),
    C = n(858687),
    j = n(461535),
    N = n(776568),
    P = n(981631),
    T = n(388032);
function Z(e) {
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
let R = (0, c.Z)(
    (0, o.Z)(
        function (e) {
            let { channel: t, selected: o, onSelect: c } = e,
                R = t.isOwner(E.default.getId()),
                U = (0, j.Z)(t),
                I = (0, N.ZP)(t),
                D = (0, g.Uf)(P.aIL, t.id, 'top'),
                A = (0, C.Z)(t, o),
                x = (0, p.Z)({
                    id: t.id,
                    label: T.intl.string(T.t.gFHI3t)
                }),
                w = (0, s.Z)(t),
                M = (0, b.l)(t),
                S = (0, b.P)(t),
                k = (0, h.Z)(t),
                G = (0, O.Z)(t),
                F = (0, f.D)(t),
                { analyticsLocations: Q } = (0, u.ZP)(d.Z.GROUP_DM_CONTEXT_MENU),
                W = (0, _.p1)(d.Z.GROUP_DM_CONTEXT_MENU, t.id),
                L = (0, _.I3)(d.Z.GROUP_DM_CONTEXT_MENU, t.id);
            return null == t || t.isManaged()
                ? null
                : (0, i.jsxs)(r.v2r, {
                      navId: 'gdm-context',
                      'aria-label': T.intl.string(T.t.Xm41aW),
                      onClose: a.Zy,
                      onSelect: c,
                      children: [
                          (0, i.jsx)(r.kSQ, { children: U }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [M, k, G]
                          }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [
                                  R
                                      ? (0, i.jsx)(r.sNh, {
                                            id: 'instant-invites',
                                            label: T.intl.string(T.t.ngRFjY),
                                            action: () =>
                                                (0, r.ZDy)(async () => {
                                                    let { default: e } = await n.e('97573').then(n.bind(n, 892382));
                                                    return (n) => (0, i.jsx)(e, Z({ channelId: t.id }, n));
                                                })
                                        })
                                      : null,
                                  W &&
                                      (L
                                          ? (0, i.jsx)(r.sNh, {
                                                id: 'change-icon',
                                                label: T.intl.string(T.t['6yrpFR']),
                                                action: () => (0, y.P5)(t.id, d.Z.GROUP_DM_CONTEXT_MENU)
                                            })
                                          : (0, i.jsx)(r.II_, {
                                                id: 'change-icon',
                                                showDefaultFocus: !0,
                                                control: (e, n) => {
                                                    var a, o;
                                                    return (0, i.jsx)(
                                                        r.TEe,
                                                        ((a = Z(
                                                            {
                                                                onChange: (n) => {
                                                                    var i;
                                                                    let { imageUri: r } = n;
                                                                    l.Z.setIcon(t.id, r), null == (i = e.onClose) || i.call(e);
                                                                },
                                                                multiple: !1,
                                                                'aria-label': T.intl.string(T.t['6yrpFR'])
                                                            },
                                                            e
                                                        )),
                                                        (o = o =
                                                            {
                                                                onInteraction: () => {
                                                                    var n;
                                                                    null == (n = e.onInteraction) || n.call(e),
                                                                        m.default.track(P.rMx.GDM_EDIT_INTERACTED, {
                                                                            action: 'open',
                                                                            channel_id: t.id,
                                                                            channel_type: P.d4z.GROUP_DM,
                                                                            location: d.Z.GROUP_DM_CONTEXT_MENU,
                                                                            location_stack: [...Q, d.Z.GROUP_DM_CONTEXT_MENU_CHANGE_ICON]
                                                                        });
                                                                },
                                                                ref: n
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                                                            : (function (e, t) {
                                                                  var n = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var i = Object.getOwnPropertySymbols(e);
                                                                      n.push.apply(n, i);
                                                                  }
                                                                  return n;
                                                              })(Object(o)).forEach(function (e) {
                                                                  Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                                                              }),
                                                        a)
                                                    );
                                                },
                                                label: T.intl.string(T.t['6yrpFR'])
                                            })),
                                  W && null != t.icon
                                      ? (0, i.jsx)(r.sNh, {
                                            id: 'remove-icon',
                                            label: T.intl.string(T.t['uY+Nk5']),
                                            action: () => {
                                                m.default.track(P.rMx.GDM_EDIT_INTERACTED, {
                                                    action: 'open',
                                                    channel_id: t.id,
                                                    channel_type: P.d4z.GROUP_DM,
                                                    location: d.Z.GROUP_DM_CONTEXT_MENU,
                                                    location_stack: [...Q, d.Z.GROUP_DM_CONTEXT_MENU_REMOVE_ICON]
                                                }),
                                                    l.Z.setIcon(t.id, null);
                                            }
                                        })
                                      : null,
                                  L &&
                                      (0, i.jsx)(r.sNh, {
                                          id: 'edit-gdm',
                                          label: T.intl.string(T.t['5Q9+/P']),
                                          action: () => (0, v.B)(t.id, d.Z.GROUP_DM_CONTEXT_MENU)
                                      }),
                                  F
                              ]
                          }),
                          (0, i.jsx)(r.kSQ, { children: w }),
                          (0, i.jsxs)(r.kSQ, {
                              children: [I, D]
                          }),
                          (0, i.jsx)(r.kSQ, { children: A }),
                          (0, i.jsx)(r.kSQ, { children: S }),
                          (0, i.jsx)(r.kSQ, { children: x })
                      ]
                  });
        },
        { object: P.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.GROUP_DM_MENU]
);
