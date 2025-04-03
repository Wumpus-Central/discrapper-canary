n.d(t, { Z: () => S }), n(47120);
var r = n(200651),
    i = n(192379),
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
    C = n(359110),
    y = n(585483),
    x = n(739830),
    v = n(488131),
    j = n(981631),
    O = n(388032);
function E(e) {
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
function N(e, t) {
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
        [n, o] = i.useState(!1);
    function a() {
        o((e) => !e);
    }
    let s = O.NW.string(O.t.UKOtz8);
    return (0, r.jsx)(l.yRy, {
        shouldShow: n,
        animation: l.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => o(!1),
        renderPopout: function (e) {
            return (0, r.jsx)(P, N(E({}, e), { channel: t }));
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsx)(
                _.ZP.Icon,
                N(E({}, e), {
                    onClick: a,
                    tooltip: n ? null : s,
                    icon: l.xhG,
                    'aria-label': s,
                    selected: n
                })
            );
        }
    });
}
function P(e) {
    let { channel: t, closePopout: n, onSelect: i } = e,
        b = (0, s.Z)(t, 'Sidebar Overflow'),
        _ = (0, u.Z)(t),
        x = (0, h.Z)(t),
        v = (0, f.Z)(t),
        E = (0, o.Z)(t),
        N = (0, c.Z)(t),
        I = (0, p.Z)(t.id),
        P = (0, d.Z)(t),
        S = (0, a.Z)(t),
        Z = (0, g.Z)({
            id: t.id,
            label: O.NW.string(O.t.DQ797u)
        }),
        T = (0, m.Z)(t);
    function A() {
        (0, C.Kh)(t.id);
    }
    return (0, r.jsxs)(l.v2r, {
        navId: 'thread-context',
        onClose: n,
        'aria-label': O.NW.string(O.t['1NBjqa']),
        onSelect: i,
        children: [
            (0, r.jsxs)(l.kSQ, {
                children: [
                    b,
                    (0, r.jsx)(l.sNh, {
                        id: 'open',
                        label: O.NW.string(O.t.IxVmZm),
                        action: A
                    })
                ]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [x, v]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [P, _, I]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [
                    (0, r.jsx)(l.sNh, {
                        id: 'search',
                        label: O.NW.string(O.t['5h0QOD']),
                        icon: l.rgF,
                        action: function () {
                            A(),
                                setTimeout(() => {
                                    y.S.dispatch(j.CkL.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                                }, 2000);
                        }
                    }),
                    (0, r.jsx)(l.sNh, {
                        id: 'pins',
                        label: O.NW.string(O.t['2BSH7u']),
                        icon: l.rgF,
                        action: function () {
                            A(), y.S.dispatch(j.CkL.TOGGLE_CHANNEL_PINS);
                        }
                    })
                ]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [T, E, N, S]
            }),
            (0, r.jsx)(l.kSQ, { children: Z })
        ]
    });
}
function S(e) {
    let { channel: t, baseChannelId: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t.isForumPost() ? null : (0, r.jsx)(x.Z, { channel: t }),
            (0, r.jsx)(I, { channel: t }),
            (0, r.jsx)(_.ZP.Icon, {
                icon: l.Dio,
                tooltip: O.NW.string(O.t.cpT0Cg),
                onClick: () => (0, v.vN)((0, b.e)(t), null != n ? n : t.parent_id)
            })
        ]
    });
}
