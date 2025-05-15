n.d(t, { Z: () => N }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(481060),
    o = n(32750),
    a = n(323597),
    s = n(438536),
    c = n(193987),
    u = n(933793),
    d = n(13736),
    p = n(732393),
    h = n(214906),
    f = n(612856),
    m = n(137591),
    g = n(299206),
    b = n(727429),
    _ = n(665149),
    x = n(359110),
    y = n(585483),
    C = n(407908),
    v = n(739830),
    j = n(488131),
    O = n(981631),
    E = n(388032);
function I(e) {
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
        [n, o] = i.useState(!1),
        a = i.useRef(null);
    function s() {
        o((e) => !e);
    }
    let c = E.intl.string(E.t.UKOtz8);
    return (0, r.jsx)(l.yRy, {
        targetElementRef: a,
        shouldShow: n,
        animation: l.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => o(!1),
        renderPopout: function (e) {
            return (0, r.jsx)(Z, S(I({}, e), { channel: t }));
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsx)(
                _.ZP.Icon,
                S(I({}, e), {
                    ref: a,
                    onClick: s,
                    tooltip: n ? null : c,
                    icon: l.xhG,
                    'aria-label': c,
                    selected: n
                })
            );
        }
    });
}
function Z(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        b = (0, s.Z)(t, 'Sidebar Overflow'),
        _ = (0, u.Z)(t),
        C = (0, h.Z)(t),
        v = (0, f.Z)(t),
        j = (0, o.Z)(t),
        I = (0, c.Z)(t),
        S = (0, p.Z)(t.id),
        P = (0, d.Z)(t),
        Z = (0, a.Z)(t),
        N = (0, g.Z)({
            id: t.id,
            label: E.intl.string(E.t.DQ797u)
        }),
        T = (0, m.Z)(t);
    function A() {
        (0, x.Kh)(t.id);
    }
    return (0, r.jsxs)(l.v2r, {
        navId: 'thread-context',
        onClose: n,
        'aria-label': E.intl.string(E.t['1NBjqa']),
        onSelect: i,
        children: [
            (0, r.jsxs)(l.kSQ, {
                children: [
                    b,
                    (0, r.jsx)(l.sNh, {
                        id: 'open',
                        label: E.intl.string(E.t.IxVmZm),
                        action: A
                    })
                ]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [C, v]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [P, _, S]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [
                    (0, r.jsx)(l.sNh, {
                        id: 'search',
                        label: E.intl.string(E.t['5h0QOD']),
                        icon: l.rgF,
                        action: function () {
                            A(),
                                setTimeout(() => {
                                    y.S.dispatch(O.CkL.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                                }, 2000);
                        }
                    }),
                    (0, r.jsx)(l.sNh, {
                        id: 'pins',
                        label: E.intl.string(E.t['2BSH7u']),
                        icon: l.rgF,
                        action: function () {
                            A(), y.S.dispatch(O.CkL.TOGGLE_CHANNEL_PINS);
                        }
                    })
                ]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [T, j, I, Z]
            }),
            (0, r.jsx)(l.kSQ, { children: N })
        ]
    });
}
function N(e) {
    let { channel: t, baseChannelId: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t.isForumPost() ? null : (0, r.jsx)(v.Z, { channel: t }),
            (0, r.jsx)(C.Z, { channel: t }),
            (0, r.jsx)(P, { channel: t }),
            (0, r.jsx)(_.ZP.Icon, {
                icon: l.Dio,
                tooltip: E.intl.string(E.t.cpT0Cg),
                onClick: () => (0, j.vN)((0, b.e)(t), null != n ? n : t.parent_id)
            })
        ]
    });
}
