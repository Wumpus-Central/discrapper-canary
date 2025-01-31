n.d(t, { Z: () => S }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(32750),
    s = n(323597),
    o = n(438536),
    c = n(193987),
    d = n(933793),
    u = n(13736),
    h = n(732393),
    p = n(214906),
    m = n(612856),
    f = n(137591),
    g = n(299206),
    _ = n(727429),
    C = n(665149),
    x = n(359110),
    v = n(585483),
    E = n(739830),
    I = n(488131),
    b = n(981631),
    Z = n(388032);
function N(e) {
    let { channel: t } = e,
        [n, r] = l.useState(!1);
    function s() {
        r((e) => !e);
    }
    let o = Z.intl.string(Z.t.UKOtz8);
    return (0, i.jsx)(a.yRy, {
        shouldShow: n,
        animation: a.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => r(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(T, {
                ...e,
                channel: t
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(C.ZP.Icon, {
                ...e,
                onClick: s,
                tooltip: n ? null : o,
                icon: a.xhG,
                'aria-label': o,
                selected: n
            });
        }
    });
}
function T(e) {
    let { channel: t, closePopout: n, onSelect: l } = e,
        _ = (0, o.Z)(t, 'Sidebar Overflow'),
        C = (0, d.Z)(t),
        E = (0, p.Z)(t),
        I = (0, m.Z)(t),
        N = (0, r.Z)(t),
        T = (0, c.Z)(t),
        S = (0, h.Z)(t.id),
        j = (0, u.Z)(t),
        A = (0, s.Z)(t),
        y = (0, g.Z)({
            id: t.id,
            label: Z.intl.string(Z.t.DQ797u)
        }),
        P = (0, f.Z)(t);
    function R() {
        (0, x.Kh)(t.id);
    }
    return (0, i.jsxs)(a.v2r, {
        navId: 'thread-context',
        onClose: n,
        'aria-label': Z.intl.string(Z.t['1NBjqa']),
        onSelect: l,
        children: [
            (0, i.jsxs)(a.kSQ, {
                children: [
                    _,
                    (0, i.jsx)(a.sNh, {
                        id: 'open',
                        label: Z.intl.string(Z.t.IxVmZm),
                        action: R
                    })
                ]
            }),
            (0, i.jsxs)(a.kSQ, {
                children: [E, I]
            }),
            (0, i.jsxs)(a.kSQ, {
                children: [j, C, S]
            }),
            (0, i.jsxs)(a.kSQ, {
                children: [
                    (0, i.jsx)(a.sNh, {
                        id: 'search',
                        label: Z.intl.string(Z.t['5h0QOD']),
                        icon: a.rgF,
                        action: function () {
                            R(),
                                setTimeout(() => {
                                    v.S.dispatch(b.CkL.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                                }, 2000);
                        }
                    }),
                    (0, i.jsx)(a.sNh, {
                        id: 'pins',
                        label: Z.intl.string(Z.t['2BSH7u']),
                        icon: a.rgF,
                        action: function () {
                            R(), v.S.dispatch(b.CkL.TOGGLE_CHANNEL_PINS);
                        }
                    })
                ]
            }),
            (0, i.jsxs)(a.kSQ, {
                children: [P, N, T, A]
            }),
            (0, i.jsx)(a.kSQ, { children: y })
        ]
    });
}
function S(e) {
    let { channel: t, baseChannelId: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t.isForumPost() ? null : (0, i.jsx)(E.Z, { channel: t }),
            (0, i.jsx)(N, { channel: t }),
            (0, i.jsx)(C.ZP.Icon, {
                icon: a.Dio,
                tooltip: Z.intl.string(Z.t.cpT0Cg),
                onClick: () => (0, I.vN)((0, _.e)(t), null != n ? n : t.parent_id)
            })
        ]
    });
}
