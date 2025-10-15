n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(32750),
    d = n(109764),
    u = n(323597),
    h = n(438536),
    p = n(251746),
    f = n(193987),
    g = n(933793),
    m = n(13736),
    b = n(732393),
    y = n(137591),
    _ = n(299206),
    j = n(665149),
    O = n(695346),
    x = n(979651),
    v = n(488131),
    C = n(388032);
function I(e) {
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
function E(e) {
    let { channel: t } = e,
        [n, l] = i.useState(!1),
        a = i.useRef(null);
    function s() {
        l((e) => !e);
    }
    let c = C.intl.string(C.t["UKOtz+"]);
    return (0, r.jsx)(o.yRy, {
        targetElementRef: a,
        shouldShow: n,
        animation: o.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => l(!1),
        renderPopout: function (e) {
            return (0, r.jsx)(Z, S(I({}, e), { channel: t }));
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsx)(
                j.ZP.Icon,
                S(I({}, e), {
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
        j = (0, f.Z)(t),
        I = (0, b.Z)(t.id),
        S = (0, m.Z)(t),
        E = (0, _.Z)({
            id: t.id,
            label: C.intl.string(C.t.DQ797g),
        }),
        Z = (0, d.Z)(t),
        P = (0, u.Z)(t),
        T = (0, h.Z)(t, "Toolbar Overflow"),
        N = (0, g.Z)(t),
        R = (0, p.Z)(t),
        w = (0, y.Z)(t),
        A = O.vF.useSetting(),
        D = (0, s.e7)([x.Z], () => !a().isEmpty(x.Z.getVoiceStatesForChannel(t.id)));
    return (0, r.jsxs)(o.v2r, {
        navId: "thread-context",
        onClose: n,
        "aria-label": C.intl.string(C.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, r.jsxs)(o.kSQ, {
                children: [T, R],
            }),
            (0, r.jsxs)(o.kSQ, {
                children: [
                    S,
                    N,
                    I,
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
                children: [w, l, j, P],
            }),
            (0, r.jsxs)(o.kSQ, {
                children: [Z, E],
            }),
        ],
    });
}
