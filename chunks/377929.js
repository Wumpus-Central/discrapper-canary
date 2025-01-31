n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(392711),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(32750),
    d = n(109764),
    u = n(323597),
    h = n(438536),
    p = n(251746),
    m = n(193987),
    f = n(933793),
    g = n(13736),
    _ = n(732393),
    C = n(137591),
    x = n(299206),
    v = n(665149),
    E = n(695346),
    I = n(979651),
    b = n(488131),
    Z = n(388032);
function N(e) {
    let { channel: t } = e,
        [n, a] = l.useState(!1);
    function r() {
        a((e) => !e);
    }
    let s = Z.intl.string(Z.t.UKOtz8);
    return (0, i.jsx)(o.yRy, {
        shouldShow: n,
        animation: o.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => a(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(T, {
                ...e,
                channel: t
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(v.ZP.Icon, {
                ...e,
                onClick: r,
                tooltip: n ? null : s,
                icon: o.xhG,
                'aria-label': s,
                selected: n
            });
        }
    });
}
function T(e) {
    let { channel: t, closePopout: n, onSelect: l } = e,
        a = (0, c.Z)(t),
        v = (0, m.Z)(t),
        N = (0, _.Z)(t.id),
        T = (0, g.Z)(t),
        S = (0, x.Z)({
            id: t.id,
            label: Z.intl.string(Z.t.DQ797u)
        }),
        j = (0, d.Z)(t),
        A = (0, u.Z)(t),
        y = (0, h.Z)(t, 'Toolbar Overflow'),
        P = (0, f.Z)(t),
        R = (0, p.Z)(t),
        M = (0, C.Z)(t),
        L = E.vF.useSetting(),
        k = (0, s.e7)([I.Z], () => !r().isEmpty(I.Z.getVoiceStatesForChannel(t.id)));
    return (0, i.jsxs)(o.v2r, {
        navId: 'thread-context',
        onClose: n,
        'aria-label': Z.intl.string(Z.t['1NBjqa']),
        onSelect: l,
        children: [
            (0, i.jsxs)(o.kSQ, {
                children: [y, R]
            }),
            (0, i.jsxs)(o.kSQ, {
                children: [
                    T,
                    P,
                    N,
                    L && !k
                        ? (0, i.jsx)(o.sNh, {
                              id: 'open',
                              label: Z.intl.string(Z.t.bX7EaG),
                              action: function () {
                                  (0, b.ok)(t);
                              }
                          })
                        : null
                ]
            }),
            (0, i.jsxs)(o.kSQ, {
                children: [M, a, v, A]
            }),
            (0, i.jsxs)(o.kSQ, {
                children: [j, S]
            })
        ]
    });
}
