l.d(i, {
    GY: () => h,
    PI: () => c,
    RT: () => I,
    ls: () => p
});
var t = l(200651);
l(192379);
var n = l(120356),
    d = l.n(n),
    r = l(692547),
    a = l(481060),
    s = l(765250),
    o = l(388032),
    u = l(904990);
function c(e) {
    let { children: i } = e;
    return (0, t.jsx)('div', {
        className: u.titleWrapper,
        children: (0, t.jsx)(a.Text, {
            variant: 'text-xs/semibold',
            color: 'header-primary',
            children: i
        })
    });
}
function p(e) {
    let { onClick: i } = e,
        l = o.intl.string(o.t['3D5yo6']);
    return (0, t.jsx)(a.ua7, {
        text: l,
        'aria-label': l,
        children: (e) =>
            (0, t.jsx)(a.P3F, {
                ...e,
                className: u.button,
                onClick: i,
                children: (0, t.jsx)(a.ewm, {
                    size: 'xxs',
                    color: r.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
function h(e) {
    let { widgetId: i, showAllStreams: l } = e,
        n = l ? o.intl.string(o.t.q2B3rq) : o.intl.string(o.t.JKGi6u),
        c = () => {
            (0, s.zG)(i, { showAllStreams: !l });
        };
    return (0, t.jsx)(a.ua7, {
        text: n,
        'aria-label': n,
        children: (e) =>
            (0, t.jsx)(a.P3F, {
                ...e,
                className: d()(u.button, l && u.active),
                onClick: c,
                children: (0, t.jsx)(a.pzj, {
                    size: 'xxs',
                    color: l ? r.Z.colors.BG_BRAND : r.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
function I(e) {
    let { id: i, pinned: l } = e,
        n = l ? o.intl.string(o.t.cSu80t) : o.intl.string(o.t.cM8Vnp);
    return (0, t.jsx)(a.ua7, {
        text: n,
        'aria-label': n,
        children: (e) =>
            (0, t.jsx)(a.P3F, {
                ...e,
                className: d()(u.button, l && u.active),
                onClick: () => (0, s.xh)(i),
                children: (0, t.jsx)(a.k5M, {
                    size: 'xxs',
                    color: l ? r.Z.colors.BG_BRAND : r.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
