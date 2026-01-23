n.d(t, {
    A: () => I,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(182061),
    u = n(886393),
    d = n(307623),
    p = n(660273),
    h = n(40389),
    f = n(707792),
    g = n(41402),
    m = n(271456),
    b = n(200273),
    A = n(565846),
    y = n(707653),
    _ = n(50268),
    O = n(58736),
    j = n(253932),
    v = n(977997),
    x = n(747926),
    E = n(985018);

function C(e) {
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
        [n, i] = l.useState(!1),
        s = l.useRef(null);

    function a() {
        i((e) => !e);
    }
    let c = E.intl.string(E.t["UKOtz+"]);
    return (0, r.jsx)(o.YNO, {
        targetElementRef: s,
        shouldShow: n,
        animation: o.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, r.jsx)(
                N,
                S(C({}, e), {
                    channel: t,
                }),
            );
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsx)(
                O.Ay.Icon,
                S(C({}, e), {
                    ref: s,
                    onClick: a,
                    tooltip: n ? null : c,
                    icon: o.jNK,
                    "aria-label": c,
                    selected: n,
                }),
            );
        },
    });
}

function N(e) {
    let { channel: t, closePopout: n, onSelect: l } = e,
        i = (0, c.A)(t),
        O = (0, f.A)(t),
        C = (0, A.A)(t.id),
        S = (0, b.A)(t),
        I = (0, _.A)({
            id: t.id,
            label: E.intl.string(E.t.DQ797g),
        }),
        N = (0, u.A)(t),
        T = (0, d.A)(t),
        P = (0, p.A)(t, "Toolbar Overflow"),
        w = (0, g.A)(t),
        R = (0, h.A)(t),
        D = (0, y.A)(t),
        M = (0, m.A)(t),
        L = j.SY.useSetting(),
        k = (0, a.bG)([v.A], () => !s().isEmpty(v.A.getVoiceStatesForChannel(t.id)));
    return (0, r.jsxs)(o.W1t, {
        "data-menu-mixed": !0,
        navId: "thread-context",
        onClose: n,
        "aria-label": E.intl.string(E.t["1NBjqb"]),
        onSelect: l,
        children: [
            (0, r.jsxs)(o.rXV, {
                children: [P, R],
            }),
            (0, r.jsxs)(o.rXV, {
                children: [
                    S,
                    w,
                    C,
                    L && !k
                        ? (0, r.jsx)(o.Drp, {
                              id: "open",
                              label: E.intl.string(E.t.bX7EaG),
                              action: function () {
                                  (0, x.JA)(t);
                              },
                          })
                        : null,
                    M,
                ],
            }),
            (0, r.jsxs)(o.rXV, {
                children: [D, i, O, T],
            }),
            (0, r.jsxs)(o.rXV, {
                children: [N, I],
            }),
        ],
    });
}
