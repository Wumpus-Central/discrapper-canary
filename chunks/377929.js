n.d(t, { Z: () => Z }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(32750),
    d = n(109764),
    u = n(323597),
    p = n(438536),
    h = n(251746),
    f = n(193987),
    g = n(933793),
    m = n(192127),
    b = n(13736),
    _ = n(732393),
    y = n(137591),
    x = n(299206),
    O = n(665149),
    j = n(695346),
    v = n(979651),
    C = n(488131),
    I = n(388032);
function S(e) {
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
function E(e, t) {
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
function Z(e) {
    let { channel: t } = e,
        [n, l] = i.useState(!1),
        a = i.useRef(null);
    function s() {
        l((e) => !e);
    }
    let c = I.intl.string(I.t["UKOtz+"]);
    return (0, r.jsx)(o.yRy, {
        targetElementRef: a,
        shouldShow: n,
        animation: o.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => l(!1),
        renderPopout: function (e) {
            return (0, r.jsx)(P, E(S({}, e), { channel: t }));
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsx)(
                O.ZP.Icon,
                E(S({}, e), {
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
function P(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        l = (0, c.Z)(t),
        O = (0, f.Z)(t),
        S = (0, _.Z)(t.id),
        E = (0, b.Z)(t),
        Z = (0, x.Z)({
            id: t.id,
            label: I.intl.string(I.t.DQ797g),
        }),
        P = (0, d.Z)(t),
        T = (0, u.Z)(t),
        N = (0, p.Z)(t, "Toolbar Overflow"),
        R = (0, g.Z)(t),
        w = (0, h.Z)(t),
        A = (0, y.Z)(t),
        D = (0, m.Z)(t),
        L = j.vF.useSetting(),
        M = (0, s.e7)([v.Z], () => !a().isEmpty(v.Z.getVoiceStatesForChannel(t.id)));
    return (0, r.jsxs)(o.v2r, {
        navId: "thread-context",
        onClose: n,
        "aria-label": I.intl.string(I.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, r.jsxs)(o.kSQ, {
                children: [N, w],
            }),
            (0, r.jsxs)(o.kSQ, {
                children: [
                    E,
                    R,
                    S,
                    L && !M
                        ? (0, r.jsx)(o.sNh, {
                              id: "open",
                              label: I.intl.string(I.t.bX7EaG),
                              action: function () {
                                  (0, C.ok)(t);
                              },
                          })
                        : null,
                    D,
                ],
            }),
            (0, r.jsxs)(o.kSQ, {
                children: [A, l, O, T],
            }),
            (0, r.jsxs)(o.kSQ, {
                children: [P, Z],
            }),
        ],
    });
}
