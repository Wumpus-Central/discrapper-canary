n.d(t, { Z: () => I }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(392711),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(32750),
    u = n(109764),
    d = n(323597),
    h = n(438536),
    p = n(251746),
    f = n(193987),
    g = n(933793),
    m = n(13736),
    b = n(732393),
    y = n(137591),
    x = n(299206),
    _ = n(665149),
    j = n(695346),
    O = n(979651),
    v = n(488131),
    C = n(388032);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
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
function I(e) {
    let { channel: t } = e,
        [n, l] = i.useState(!1),
        a = i.useRef(null);
    function s() {
        l((e) => !e);
    }
    let c = C.intl.string(C.t.UKOtz8);
    return (0, r.jsx)(o.yRy, {
        targetElementRef: a,
        shouldShow: n,
        animation: o.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => l(!1),
        renderPopout: function (e) {
            return (0, r.jsx)(Z, S(E({}, e), { channel: t }));
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsx)(
                _.ZP.Icon,
                S(E({}, e), {
                    ref: a,
                    onClick: s,
                    tooltip: n ? null : c,
                    icon: o.xhG,
                    "aria-label": c,
                    selected: n,
                }),
            );
        },
    });
}
function Z(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        l = (0, c.Z)(t),
        _ = (0, f.Z)(t),
        E = (0, b.Z)(t.id),
        S = (0, m.Z)(t),
        I = (0, x.Z)({
            id: t.id,
            label: C.intl.string(C.t.DQ797u),
        }),
        Z = (0, u.Z)(t),
        P = (0, d.Z)(t),
        T = (0, h.Z)(t, "Toolbar Overflow"),
        N = (0, g.Z)(t),
        R = (0, p.Z)(t),
        w = (0, y.Z)(t),
        A = j.vF.useSetting(),
        D = (0, s.e7)([O.Z], () => !a().isEmpty(O.Z.getVoiceStatesForChannel(t.id)));
    return (0, r.jsxs)(o.v2r, {
        navId: "thread-context",
        onClose: n,
        "aria-label": C.intl.string(C.t["1NBjqa"]),
        onSelect: i,
        children: [
            (0, r.jsxs)(o.kSQ, {
                children: [T, R],
            }),
            (0, r.jsxs)(o.kSQ, {
                children: [
                    S,
                    N,
                    E,
                    A && !D
                        ? (0, r.jsx)(o.sNh, {
                              id: "open",
                              label: C.intl.string(C.t.bX7EaG),
                              action: function () {
                                  (0, v.ok)(t);
                              },
                          })
                        : null,
                ],
            }),
            (0, r.jsxs)(o.kSQ, {
                children: [w, l, _, P],
            }),
            (0, r.jsxs)(o.kSQ, {
                children: [Z, I],
            }),
        ],
    });
}
