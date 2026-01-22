n.d(t, {
    A: () => I,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(182061),
    u = n(886393),
    d = n(307623),
    f = n(660273),
    p = n(40389),
    h = n(707792),
    b = n(41402),
    g = n(271456),
    m = n(200273),
    A = n(565846),
    y = n(707653),
    O = n(50268),
    j = n(58736),
    v = n(253932),
    x = n(977997),
    E = n(747926),
    _ = n(985018);

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
        a = l.useRef(null);

    function s() {
        i((e) => !e);
    }
    let c = _.intl.string(_.t["UKOtz+"]);
    return (0, r.jsx)(o.YNO, {
        targetElementRef: a,
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
                j.Ay.Icon,
                S(C({}, e), {
                    ref: a,
                    onClick: s,
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
        j = (0, h.A)(t),
        C = (0, A.A)(t.id),
        S = (0, m.A)(t),
        I = (0, O.A)({
            id: t.id,
            label: _.intl.string(_.t.DQ797g),
        }),
        N = (0, u.A)(t),
        T = (0, d.A)(t),
        P = (0, f.A)(t, "Toolbar Overflow"),
        w = (0, b.A)(t),
        R = (0, p.A)(t),
        D = (0, y.A)(t),
        M = (0, g.A)(t),
        L = v.SY.useSetting(),
        G = (0, s.bG)([x.A], () => !a().isEmpty(x.A.getVoiceStatesForChannel(t.id)));
    return (0, r.jsxs)(o.W1t, {
        navId: "thread-context",
        onClose: n,
        "aria-label": _.intl.string(_.t["1NBjqb"]),
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
                    L && !G
                        ? (0, r.jsx)(o.Drp, {
                              id: "open",
                              label: _.intl.string(_.t.bX7EaG),
                              action: function () {
                                  (0, E.JA)(t);
                              },
                          })
                        : null,
                    M,
                ],
            }),
            (0, r.jsxs)(o.rXV, {
                children: [D, i, j, T],
            }),
            (0, r.jsxs)(o.rXV, {
                children: [N, I],
            }),
        ],
    });
}
