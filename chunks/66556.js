n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(665149),
    o = n(731290),
    c = n(594174),
    d = n(91159),
    u = n(593130),
    h = n(388032),
    p = n(172989);
function m(e) {
    let { channel: t } = e,
        [n, m] = l.useState(!1),
        f = (0, r.e7)(
            [o.Z, c.default],
            () => {
                let e = c.default.getCurrentUser();
                return null == e || (t.isNSFW() && (!e.nsfwAllowed || !o.Z.didAgree(t.getGuildId())));
            },
            [t]
        ),
        g = l.useCallback(() => {
            m(!1);
        }, []),
        C = l.useCallback(() => {
            !n && (0, d.U4)('Popout'), m(!n);
        }, [n]);
    return (0, i.jsx)(a.Popout, {
        animation: a.Popout.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        shouldShow: n,
        onRequestClose: g,
        renderPopout: function () {
            return (0, i.jsx)(a.Dialog, {
                children: (0, i.jsx)(u.Z, {
                    className: p.browser,
                    channel: t,
                    onClose: g
                })
            });
        },
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(s.JO, {
                ...e,
                className: p.icon,
                onClick: C,
                icon: a.ThreadIcon,
                'aria-label': h.intl.string(h.t.B2panJ),
                tooltip: n ? null : h.intl.string(h.t.B2panJ),
                disabled: f,
                selected: n
            });
        }
    });
}
