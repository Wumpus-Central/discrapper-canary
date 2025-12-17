n.d(t, { Z: () => Z }), n(388685);
var r = n(54381),
    i = n(473749),
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
    y = n(732393),
    O = n(137591),
    x = n(299206),
    j = n(665149),
    v = n(695346),
    C = n(979651),
    I = n(488131),
    _ = n(388032);
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
    let c = _.intl.string(_.t["UKOtz+"]);
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
                j.ZP.Icon,
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
        j = (0, f.Z)(t),
        S = (0, y.Z)(t.id),
        E = (0, b.Z)(t),
        Z = (0, x.Z)({
            id: t.id,
            label: _.intl.string(_.t.DQ797g),
        }),
        P = (0, d.Z)(t),
        T = (0, u.Z)(t),
        N = (0, p.Z)(t, "Toolbar Overflow"),
        R = (0, g.Z)(t),
        w = (0, h.Z)(t),
        A = (0, O.Z)(t),
        D = (0, m.Z)(t),
        L = v.vF.useSetting(),
        M = (0, s.e7)([C.Z], () => !a().isEmpty(C.Z.getVoiceStatesForChannel(t.id)));
    return (0, r.jsxs)(o.v2r, {
        navId: "thread-context",
        onClose: n,
        "aria-label": _.intl.string(_.t["1NBjqb"]),
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
                              label: _.intl.string(_.t.bX7EaG),
                              action: function () {
                                  (0, I.ok)(t);
                              },
                          })
                        : null,
                    D,
                ],
            }),
            (0, r.jsxs)(o.kSQ, {
                children: [A, l, j, T],
            }),
            (0, r.jsxs)(o.kSQ, {
                children: [P, Z],
            }),
        ],
    });
}
