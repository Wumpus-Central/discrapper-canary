n.d(t, { Z: () => R }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(32750),
    s = n(109764),
    o = n(323597),
    c = n(438536),
    d = n(193987),
    u = n(933793),
    p = n(192127),
    h = n(13736),
    f = n(732393),
    g = n(214906),
    m = n(612856),
    b = n(137591),
    _ = n(299206),
    y = n(727429),
    O = n(665149),
    j = n(359110),
    x = n(585483),
    v = n(407908),
    C = n(739830),
    I = n(488131),
    S = n(981631),
    E = n(388032);
function Z(e) {
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
function P(e, t) {
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
function T(e) {
    let { channel: t } = e,
        [n, a] = i.useState(!1),
        s = i.useRef(null);
    function o() {
        a((e) => !e);
    }
    let c = E.intl.string(E.t["UKOtz+"]);
    return (0, r.jsx)(l.yRy, {
        targetElementRef: s,
        shouldShow: n,
        animation: l.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => a(!1),
        renderPopout: function (e) {
            return (0, r.jsx)(N, P(Z({}, e), { channel: t }));
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsx)(
                O.ZP.Icon,
                P(Z({}, e), {
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
function N(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        y = (0, c.Z)(t, "Sidebar Overflow"),
        O = (0, u.Z)(t),
        v = (0, g.Z)(t),
        C = (0, m.Z)(t),
        I = (0, a.Z)(t),
        Z = (0, d.Z)(t),
        P = (0, f.Z)(t.id),
        T = (0, h.Z)(t),
        N = (0, o.Z)(t),
        R = (0, s.Z)(t),
        w = (0, _.Z)({
            id: t.id,
            label: E.intl.string(E.t.DQ797g),
        }),
        A = (0, b.Z)(t),
        D = (0, p.Z)(t);
    function L() {
        (0, j.Kh)(t.id);
    }
    return (0, r.jsxs)(l.v2r, {
        navId: "thread-context",
        onClose: n,
        "aria-label": E.intl.string(E.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, r.jsxs)(l.kSQ, {
                children: [
                    y,
                    (0, r.jsx)(l.sNh, {
                        id: "open",
                        label: E.intl.string(E.t.IxVmZi),
                        action: L,
                    }),
                ],
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [v, C],
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [T, O, P, D],
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [
                    (0, r.jsx)(l.sNh, {
                        id: "search",
                        label: E.intl.string(E.t["5h0QOP"]),
                        icon: l.rgF,
                        action: function () {
                            L(),
                                setTimeout(() => {
                                    x.S.dispatch(S.CkL.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                                }, 2000);
                        },
                    }),
                    (0, r.jsx)(l.sNh, {
                        id: "pins",
                        label: E.intl.string(E.t["2BSH7n"]),
                        icon: l.rgF,
                        action: function () {
                            L(), x.S.dispatch(S.CkL.TOGGLE_CHANNEL_PINS);
                        },
                    }),
                ],
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [A, I, Z, N],
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [R, w],
            }),
        ],
    });
}
function R(e) {
    let { channel: t, baseChannelId: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t.isForumPost() ? null : (0, r.jsx)(C.Z, { channel: t }),
            t.isModeratorReportChannel() ? (0, r.jsx)(v.Z, { channel: t }) : null,
            (0, r.jsx)(T, { channel: t }),
            (0, r.jsx)(O.ZP.Icon, {
                icon: l.Dio,
                tooltip: E.intl.string(E.t.cpT0Cq),
                onClick: () => (0, I.vN)((0, y.e)(t), null != n ? n : t.parent_id),
            }),
        ],
    });
}
