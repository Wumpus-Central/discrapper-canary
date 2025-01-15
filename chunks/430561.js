n.d(t, {
    GY: function () {
        return f;
    },
    PI: function () {
        return d;
    },
    RT: function () {
        return p;
    },
    ls: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    r = n(692547),
    a = n(481060),
    s = n(765250),
    c = n(388032),
    u = n(931959);
function d(e) {
    let { children: t } = e;
    return (0, i.jsx)('div', {
        className: u.titleWrapper,
        children: (0, i.jsx)(a.Text, {
            variant: 'text-xs/semibold',
            color: 'header-primary',
            children: t
        })
    });
}
function h(e) {
    let { onClick: t } = e,
        n = c.intl.string(c.t['3D5yo6']);
    return (0, i.jsx)(a.Tooltip, {
        text: n,
        'aria-label': n,
        children: (e) =>
            (0, i.jsx)(a.Clickable, {
                ...e,
                className: u.button,
                onClick: t,
                children: (0, i.jsx)(a.SettingsIcon, {
                    size: 'xxs',
                    color: r.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
function f(e) {
    let { widgetId: t, showAllStreams: n } = e,
        l = n ? c.intl.string(c.t.q2B3rq) : c.intl.string(c.t.JKGi6u),
        d = () => {
            (0, s.zG)(t, { showAllStreams: !n });
        };
    return (0, i.jsx)(a.Tooltip, {
        text: l,
        'aria-label': l,
        children: (e) =>
            (0, i.jsx)(a.Clickable, {
                ...e,
                className: o()(u.button, n && u.active),
                onClick: d,
                children: (0, i.jsx)(a.ScreenIcon, {
                    size: 'xxs',
                    color: n ? r.Z.colors.BG_BRAND : r.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
function p(e) {
    let { id: t, pinned: n } = e,
        l = n ? c.intl.string(c.t.cSu80t) : c.intl.string(c.t.cM8Vnp);
    return (0, i.jsx)(a.Tooltip, {
        text: l,
        'aria-label': l,
        children: (e) =>
            (0, i.jsx)(a.Clickable, {
                ...e,
                className: o()(u.button, n && u.active),
                onClick: () => (0, s.xh)(t),
                children: (0, i.jsx)(a.PinUprightIcon, {
                    size: 'xxs',
                    color: n ? r.Z.colors.BG_BRAND : r.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
