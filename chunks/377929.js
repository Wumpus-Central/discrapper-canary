(n.d(t, { Z: () => P }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(32750),
    u = n(109764),
    d = n(323597),
    p = n(438536),
    h = n(251746),
    f = n(193987),
    m = n(933793),
    g = n(13736),
    b = n(732393),
    _ = n(137591),
    y = n(299206),
    C = n(665149),
    x = n(695346),
    v = n(979651),
    j = n(488131),
    O = n(388032);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e) {
    let { channel: t } = e,
        [n, l] = i.useState(!1),
        a = i.useRef(null);
    function o() {
        l((e) => !e);
    }
    let c = O.intl.string(O.t.UKOtz8);
    return (0, r.jsx)(s.yRy, {
        targetElementRef: a,
        shouldShow: n,
        animation: s.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => l(!1),
        renderPopout: function (e) {
            return (0, r.jsx)(I, S(E({}, e), { channel: t }));
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsx)(
                C.ZP.Icon,
                S(E({}, e), {
                    ref: a,
                    onClick: o,
                    tooltip: n ? null : c,
                    icon: s.xhG,
                    'aria-label': c,
                    selected: n
                })
            );
        }
    });
}
function I(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        l = (0, c.Z)(t),
        C = (0, f.Z)(t),
        E = (0, b.Z)(t.id),
        S = (0, g.Z)(t),
        P = (0, y.Z)({
            id: t.id,
            label: O.intl.string(O.t.DQ797u)
        }),
        I = (0, u.Z)(t),
        Z = (0, d.Z)(t),
        T = (0, p.Z)(t, 'Toolbar Overflow'),
        N = (0, m.Z)(t),
        A = (0, h.Z)(t),
        w = (0, _.Z)(t),
        R = x.vF.useSetting(),
        M = (0, o.e7)([v.Z], () => !a().isEmpty(v.Z.getVoiceStatesForChannel(t.id)));
    return (0, r.jsxs)(s.v2r, {
        navId: 'thread-context',
        onClose: n,
        'aria-label': O.intl.string(O.t['1NBjqa']),
        onSelect: i,
        children: [
            (0, r.jsxs)(s.kSQ, {
                children: [T, A]
            }),
            (0, r.jsxs)(s.kSQ, {
                children: [
                    S,
                    N,
                    E,
                    R && !M
                        ? (0, r.jsx)(s.sNh, {
                              id: 'open',
                              label: O.intl.string(O.t.bX7EaG),
                              action: function () {
                                  (0, j.ok)(t);
                              }
                          })
                        : null
                ]
            }),
            (0, r.jsxs)(s.kSQ, {
                children: [w, l, C, Z]
            }),
            (0, r.jsxs)(s.kSQ, {
                children: [I, P]
            })
        ]
    });
}
