n.d(t, { Z: () => I }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(392711),
    o = n.n(l),
    a = n(442837),
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
    C = n(299206),
    y = n(665149),
    x = n(695346),
    v = n(979651),
    j = n(488131),
    O = n(388032);
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
function N(e, t) {
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
function I(e) {
    let { channel: t } = e,
        [n, l] = i.useState(!1);
    function o() {
        l((e) => !e);
    }
    let a = O.NW.string(O.t.UKOtz8);
    return (0, r.jsx)(s.yRy, {
        shouldShow: n,
        animation: s.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => l(!1),
        renderPopout: function (e) {
            return (0, r.jsx)(P, N(E({}, e), { channel: t }));
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsx)(
                y.ZP.Icon,
                N(E({}, e), {
                    onClick: o,
                    tooltip: n ? null : a,
                    icon: s.xhG,
                    'aria-label': a,
                    selected: n
                })
            );
        }
    });
}
function P(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        l = (0, c.Z)(t),
        y = (0, f.Z)(t),
        E = (0, b.Z)(t.id),
        N = (0, g.Z)(t),
        I = (0, C.Z)({
            id: t.id,
            label: O.NW.string(O.t.DQ797u)
        }),
        P = (0, u.Z)(t),
        S = (0, d.Z)(t),
        Z = (0, p.Z)(t, 'Toolbar Overflow'),
        T = (0, m.Z)(t),
        A = (0, h.Z)(t),
        w = (0, _.Z)(t),
        R = x.vF.useSetting(),
        M = (0, a.e7)([v.Z], () => !o().isEmpty(v.Z.getVoiceStatesForChannel(t.id)));
    return (0, r.jsxs)(s.v2r, {
        navId: 'thread-context',
        onClose: n,
        'aria-label': O.NW.string(O.t['1NBjqa']),
        onSelect: i,
        children: [
            (0, r.jsxs)(s.kSQ, {
                children: [Z, A]
            }),
            (0, r.jsxs)(s.kSQ, {
                children: [
                    N,
                    T,
                    E,
                    R && !M
                        ? (0, r.jsx)(s.sNh, {
                              id: 'open',
                              label: O.NW.string(O.t.bX7EaG),
                              action: function () {
                                  (0, j.ok)(t);
                              }
                          })
                        : null
                ]
            }),
            (0, r.jsxs)(s.kSQ, {
                children: [w, l, y, S]
            }),
            (0, r.jsxs)(s.kSQ, {
                children: [P, I]
            })
        ]
    });
}
