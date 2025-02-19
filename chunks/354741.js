n.d(t, { default: () => x });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(493683),
    a = n(239091),
    o = n(883385),
    c = n(108843),
    s = n(947440),
    u = n(100527),
    d = n(299206),
    f = n(895563),
    O = n(212205),
    b = n(62420),
    h = n(122074),
    p = n(314897),
    y = n(858687),
    j = n(461535),
    g = n(776568),
    v = n(981631),
    m = n(388032);
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
let x = (0, c.Z)(
    (0, o.Z)(
        function (e) {
            let { channel: t, selected: o, onSelect: c } = e,
                u = t.isOwner(p.default.getId()),
                x = (0, j.Z)(t),
                S = (0, g.ZP)(t),
                P = (0, h.Uf)(v.aIL, t.id, 'top'),
                _ = (0, y.Z)(t, o),
                I = (0, d.Z)({
                    id: t.id,
                    label: m.NW.string(m.t.gFHI3t)
                }),
                C = (0, s.Z)(t),
                w = (0, f.l)(t),
                E = (0, f.P)(t),
                T = (0, O.Z)(t),
                Z = (0, b.Z)(t);
            return null == t || t.isManaged()
                ? null
                : (0, r.jsxs)(i.v2r, {
                      navId: 'gdm-context',
                      'aria-label': m.NW.string(m.t.Xm41aW),
                      onClose: a.Zy,
                      onSelect: c,
                      children: [
                          (0, r.jsx)(i.kSQ, { children: x }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [w, T, Z]
                          }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [
                                  u
                                      ? (0, r.jsx)(i.sNh, {
                                            id: 'instant-invites',
                                            label: m.NW.string(m.t.ngRFjY),
                                            action: () =>
                                                (0, i.ZDy)(async () => {
                                                    let { default: e } = await n.e('97573').then(n.bind(n, 892382));
                                                    return (n) => (0, r.jsx)(e, N({ channelId: t.id }, n));
                                                })
                                        })
                                      : null,
                                  (0, r.jsx)(i.II_, {
                                      id: 'change-icon',
                                      showDefaultFocus: !0,
                                      control: (e, n) => {
                                          var a, o;
                                          return (0, r.jsx)(
                                              i.TEe,
                                              ((a = N(
                                                  {
                                                      onChange: (n) => {
                                                          var r;
                                                          l.Z.setIcon(t.id, n), null === (r = e.onClose) || void 0 === r || r.call(e);
                                                      },
                                                      multiple: !1,
                                                      'aria-label': m.NW.string(m.t['6yrpFR'])
                                                  },
                                                  e
                                              )),
                                              (o = o = { ref: n }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(o)).forEach(function (e) {
                                                        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                                                    }),
                                              a)
                                          );
                                      },
                                      label: m.NW.string(m.t['6yrpFR'])
                                  }),
                                  null != t.icon
                                      ? (0, r.jsx)(i.sNh, {
                                            id: 'remove-icon',
                                            label: m.NW.string(m.t['uY+Nk5']),
                                            action: () => l.Z.setIcon(t.id, null)
                                        })
                                      : null
                              ]
                          }),
                          (0, r.jsx)(i.kSQ, { children: C }),
                          (0, r.jsxs)(i.kSQ, {
                              children: [S, P]
                          }),
                          (0, r.jsx)(i.kSQ, { children: _ }),
                          (0, r.jsx)(i.kSQ, { children: E }),
                          (0, r.jsx)(i.kSQ, { children: I })
                      ]
                  });
        },
        { object: v.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_MENU]
);
