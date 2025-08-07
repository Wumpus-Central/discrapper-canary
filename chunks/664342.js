n.d(t, { Z: () => N }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(32750),
    s = n(109764),
    o = n(323597),
    c = n(438536),
    u = n(193987),
    d = n(933793),
    h = n(13736),
    p = n(732393),
    f = n(214906),
    g = n(612856),
    m = n(137591),
    b = n(299206),
    y = n(727429),
    x = n(665149),
    _ = n(359110),
    j = n(585483),
    O = n(407908),
    v = n(739830),
    C = n(488131),
    E = n(981631),
    S = n(388032);
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
function Z(e, t) {
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
        [n, a] = i.useState(!1),
        s = i.useRef(null);
    function o() {
        a((e) => !e);
    }
    let c = S.intl.string(S.t.UKOtz8);
    return (0, r.jsx)(l.yRy, {
        targetElementRef: s,
        shouldShow: n,
        animation: l.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => a(!1),
        renderPopout: function (e) {
            return (0, r.jsx)(T, Z(I({}, e), { channel: t }));
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsx)(
                x.ZP.Icon,
                Z(I({}, e), {
                    ref: s,
                    onClick: o,
                    tooltip: n ? null : c,
                    icon: l.xhG,
                    "aria-label": c,
                    selected: n,
                }),
            );
        },
    });
}
function T(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        y = (0, c.Z)(t, "Sidebar Overflow"),
        x = (0, d.Z)(t),
        O = (0, f.Z)(t),
        v = (0, g.Z)(t),
        C = (0, a.Z)(t),
        I = (0, u.Z)(t),
        Z = (0, p.Z)(t.id),
        P = (0, h.Z)(t),
        T = (0, o.Z)(t),
        N = (0, s.Z)(t),
        R = (0, b.Z)({
            id: t.id,
            label: S.intl.string(S.t.DQ797u),
        }),
        w = (0, m.Z)(t);
    function A() {
        (0, _.Kh)(t.id);
    }
    return (0, r.jsxs)(l.v2r, {
        navId: "thread-context",
        onClose: n,
        "aria-label": S.intl.string(S.t["1NBjqa"]),
        onSelect: i,
        children: [
            (0, r.jsxs)(l.kSQ, {
                children: [
                    y,
                    (0, r.jsx)(l.sNh, {
                        id: "open",
                        label: S.intl.string(S.t.IxVmZm),
                        action: A,
                    }),
                ],
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [O, v],
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [P, x, Z],
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [
                    (0, r.jsx)(l.sNh, {
                        id: "search",
                        label: S.intl.string(S.t["5h0QOD"]),
                        icon: l.rgF,
                        action: function () {
                            A(),
                                setTimeout(() => {
                                    j.S.dispatch(E.CkL.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                                }, 2000);
                        },
                    }),
                    (0, r.jsx)(l.sNh, {
                        id: "pins",
                        label: S.intl.string(S.t["2BSH7u"]),
                        icon: l.rgF,
                        action: function () {
                            A(), j.S.dispatch(E.CkL.TOGGLE_CHANNEL_PINS);
                        },
                    }),
                ],
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [w, C, I, T],
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [N, R],
            }),
        ],
    });
}
function N(e) {
    let { channel: t, baseChannelId: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t.isForumPost() ? null : (0, r.jsx)(v.Z, { channel: t }),
            (0, r.jsx)(O.Z, { channel: t }),
            (0, r.jsx)(P, { channel: t }),
            (0, r.jsx)(x.ZP.Icon, {
                icon: l.Dio,
                tooltip: S.intl.string(S.t.cpT0Cg),
                onClick: () => (0, C.vN)((0, y.e)(t), null != n ? n : t.parent_id),
            }),
        ],
    });
}
