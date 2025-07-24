(n.d(t, { Z: () => N }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(32750),
    o = n(109764),
    s = n(323597),
    c = n(438536),
    u = n(193987),
    d = n(933793),
    p = n(13736),
    h = n(732393),
    f = n(214906),
    m = n(612856),
    g = n(137591),
    b = n(299206),
    _ = n(727429),
    y = n(665149),
    C = n(359110),
    x = n(585483),
    v = n(407908),
    j = n(739830),
    O = n(488131),
    E = n(981631),
    S = n(388032);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
function Z(e) {
    let { channel: t } = e,
        [n, a] = i.useState(!1),
        o = i.useRef(null);
    function s() {
        a((e) => !e);
    }
    let c = S.intl.string(S.t.UKOtz8);
    return (0, r.jsx)(l.yRy, {
        targetElementRef: o,
        shouldShow: n,
        animation: l.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => a(!1),
        renderPopout: function (e) {
            return (0, r.jsx)(T, P(I({}, e), { channel: t }));
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsx)(
                y.ZP.Icon,
                P(I({}, e), {
                    ref: o,
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
function T(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        _ = (0, c.Z)(t, 'Sidebar Overflow'),
        y = (0, d.Z)(t),
        v = (0, f.Z)(t),
        j = (0, m.Z)(t),
        O = (0, a.Z)(t),
        I = (0, u.Z)(t),
        P = (0, h.Z)(t.id),
        Z = (0, p.Z)(t),
        T = (0, s.Z)(t),
        N = (0, o.Z)(t),
        A = (0, b.Z)({
            id: t.id,
            label: S.intl.string(S.t.DQ797u)
        }),
        w = (0, g.Z)(t);
    function R() {
        (0, C.Kh)(t.id);
    }
    return (0, r.jsxs)(l.v2r, {
        navId: 'thread-context',
        onClose: n,
        'aria-label': S.intl.string(S.t['1NBjqa']),
        onSelect: i,
        children: [
            (0, r.jsxs)(l.kSQ, {
                children: [
                    _,
                    (0, r.jsx)(l.sNh, {
                        id: 'open',
                        label: S.intl.string(S.t.IxVmZm),
                        action: R
                    })
                ]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [v, j]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [Z, y, P]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [
                    (0, r.jsx)(l.sNh, {
                        id: 'search',
                        label: S.intl.string(S.t['5h0QOD']),
                        icon: l.rgF,
                        action: function () {
                            (R(),
                                setTimeout(() => {
                                    x.S.dispatch(E.CkL.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                                }, 2000));
                        }
                    }),
                    (0, r.jsx)(l.sNh, {
                        id: 'pins',
                        label: S.intl.string(S.t['2BSH7u']),
                        icon: l.rgF,
                        action: function () {
                            (R(), x.S.dispatch(E.CkL.TOGGLE_CHANNEL_PINS));
                        }
                    })
                ]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [w, O, I, T]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [N, A]
            })
        ]
    });
}
function N(e) {
    let { channel: t, baseChannelId: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t.isForumPost() ? null : (0, r.jsx)(j.Z, { channel: t }),
            (0, r.jsx)(v.Z, { channel: t }),
            (0, r.jsx)(Z, { channel: t }),
            (0, r.jsx)(y.ZP.Icon, {
                icon: l.Dio,
                tooltip: S.intl.string(S.t.cpT0Cg),
                onClick: () => (0, O.vN)((0, _.e)(t), null != n ? n : t.parent_id)
            })
        ]
    });
}
