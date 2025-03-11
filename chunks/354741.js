n.d(t, { default: () => P });
var r = n(200651);
n(192379);
var a = n(481060),
    l = n(493683),
    o = n(239091),
    i = n(883385),
    c = n(108843),
    s = n(947440),
    d = n(100527),
    u = n(658138),
    b = n(299206),
    f = n(895563),
    p = n(212205),
    h = n(62420),
    j = n(122074),
    y = n(314897),
    g = n(858687),
    O = n(461535),
    v = n(776568),
    m = n(981631),
    w = n(388032);
function x(e) {
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
let P = (0, c.Z)(
    (0, i.Z)(
        function (e) {
            let { channel: t, selected: i, onSelect: c } = e,
                d = t.isOwner(y.default.getId()),
                P = (0, O.Z)(t),
                N = (0, v.ZP)(t),
                S = (0, j.Uf)(m.aIL, t.id, 'top'),
                Z = (0, g.Z)(t, i),
                _ = (0, b.Z)({
                    id: t.id,
                    label: w.NW.string(w.t.gFHI3t)
                }),
                k = (0, s.Z)(t),
                C = (0, f.l)(t),
                W = (0, f.P)(t),
                I = (0, p.Z)(t),
                D = (0, h.Z)(t),
                E = (0, u.D)(t);
            return null == t || t.isManaged()
                ? null
                : (0, r.jsxs)(a.v2r, {
                      navId: 'gdm-context',
                      'aria-label': w.NW.string(w.t.Xm41aW),
                      onClose: o.Zy,
                      onSelect: c,
                      children: [
                          (0, r.jsx)(a.kSQ, { children: P }),
                          (0, r.jsxs)(a.kSQ, {
                              children: [C, I, D]
                          }),
                          (0, r.jsxs)(a.kSQ, {
                              children: [
                                  d
                                      ? (0, r.jsx)(a.sNh, {
                                            id: 'instant-invites',
                                            label: w.NW.string(w.t.ngRFjY),
                                            action: () =>
                                                (0, a.ZDy)(async () => {
                                                    let { default: e } = await n.e('97573').then(n.bind(n, 892382));
                                                    return (n) => (0, r.jsx)(e, x({ channelId: t.id }, n));
                                                })
                                        })
                                      : null,
                                  (0, r.jsx)(a.II_, {
                                      id: 'change-icon',
                                      showDefaultFocus: !0,
                                      control: (e, n) => {
                                          var o, i;
                                          return (0, r.jsx)(
                                              a.TEe,
                                              ((o = x(
                                                  {
                                                      onChange: (n) => {
                                                          var r;
                                                          let { imageUri: a } = n;
                                                          l.Z.setIcon(t.id, a), null === (r = e.onClose) || void 0 === r || r.call(e);
                                                      },
                                                      multiple: !1,
                                                      'aria-label': w.NW.string(w.t['6yrpFR'])
                                                  },
                                                  e
                                              )),
                                              (i = i = { ref: n }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(i)).forEach(function (e) {
                                                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                                                    }),
                                              o)
                                          );
                                      },
                                      label: w.NW.string(w.t['6yrpFR'])
                                  }),
                                  null != t.icon
                                      ? (0, r.jsx)(a.sNh, {
                                            id: 'remove-icon',
                                            label: w.NW.string(w.t['uY+Nk5']),
                                            action: () => l.Z.setIcon(t.id, null)
                                        })
                                      : null,
                                  E
                              ]
                          }),
                          (0, r.jsx)(a.kSQ, { children: k }),
                          (0, r.jsxs)(a.kSQ, {
                              children: [N, S]
                          }),
                          (0, r.jsx)(a.kSQ, { children: Z }),
                          (0, r.jsx)(a.kSQ, { children: W }),
                          (0, r.jsx)(a.kSQ, { children: _ })
                      ]
                  });
        },
        { object: m.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.GROUP_DM_MENU]
);
