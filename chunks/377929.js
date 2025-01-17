n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n.n(r),
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
    C = n(732393),
    x = n(137591),
    v = n(299206),
    _ = n(665149),
    I = n(695346),
    E = n(979651),
    b = n(488131),
    Z = n(388032);
function S(e) {
    let { channel: t } = e,
        [n, r] = l.useState(!1);
    function a() {
        r((e) => !e);
    }
    let s = Z.intl.string(Z.t.UKOtz8);
    return (0, i.jsx)(o.Popout, {
        shouldShow: n,
        animation: o.Popout.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => r(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(N, {
                ...e,
                channel: t
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(_.ZP.Icon, {
                ...e,
                onClick: a,
                tooltip: n ? null : s,
                icon: o.MoreHorizontalIcon,
                'aria-label': s,
                selected: n
            });
        }
    });
}
function N(e) {
    let { channel: t, closePopout: n, onSelect: l } = e,
        r = (0, c.Z)(t),
        _ = (0, m.Z)(t),
        S = (0, C.Z)(t.id),
        N = (0, g.Z)(t),
        T = (0, v.Z)({
            id: t.id,
            label: Z.intl.string(Z.t.DQ797u)
        }),
        j = (0, d.Z)(t),
        A = (0, u.Z)(t),
        y = (0, h.Z)(t, 'Toolbar Overflow'),
        P = (0, f.Z)(t),
        M = (0, p.Z)(t),
        R = (0, x.Z)(t),
        L = I.vF.useSetting(),
        k = (0, s.e7)([E.Z], () => !a().isEmpty(E.Z.getVoiceStatesForChannel(t.id)));
    return (0, i.jsxs)(o.Menu, {
        navId: 'thread-context',
        onClose: n,
        'aria-label': Z.intl.string(Z.t['1NBjqa']),
        onSelect: l,
        children: [
            (0, i.jsxs)(o.MenuGroup, {
                children: [y, M]
            }),
            (0, i.jsxs)(o.MenuGroup, {
                children: [
                    N,
                    P,
                    S,
                    L && !k
                        ? (0, i.jsx)(o.MenuItem, {
                              id: 'open',
                              label: Z.intl.string(Z.t.bX7EaG),
                              action: function () {
                                  (0, b.ok)(t);
                              }
                          })
                        : null
                ]
            }),
            (0, i.jsxs)(o.MenuGroup, {
                children: [R, r, _, A]
            }),
            (0, i.jsxs)(o.MenuGroup, {
                children: [j, T]
            })
        ]
    });
}
