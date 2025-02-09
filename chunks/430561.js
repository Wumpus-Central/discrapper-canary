l.d(i, {
    GY: () => h,
    PI: () => c,
    RT: () => g,
    ls: () => p
});
var t = l(200651);
l(192379);
var n = l(120356),
    d = l.n(n),
    a = l(692547),
    o = l(481060),
    s = l(765250),
    r = l(388032),
    u = l(553109);
function c(e) {
    let { children: i } = e;
    return (0, t.jsx)('div', {
        className: u.titleWrapper,
        children: (0, t.jsx)(o.Text, {
            variant: 'text-xs/semibold',
            color: 'header-primary',
            children: i
        })
    });
}
function p(e) {
    let { onClick: i } = e,
        l = r.intl.string(r.t['3D5yo6']);
    return (0, t.jsx)(o.ua7, {
        text: l,
        'aria-label': l,
        children: (e) =>
            (0, t.jsx)(o.P3F, {
                ...e,
                className: u.button,
                onClick: i,
                children: (0, t.jsx)(o.ewm, {
                    size: 'xxs',
                    color: a.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
function h(e) {
    let { widgetId: i, showAllStreams: l } = e,
        n = l ? r.intl.string(r.t.q2B3rq) : r.intl.string(r.t.JKGi6u),
        c = () => {
            (0, s.zG)(i, { showAllStreams: !l });
        };
    return (0, t.jsx)(o.ua7, {
        text: n,
        'aria-label': n,
        children: (e) =>
            (0, t.jsx)(o.P3F, {
                ...e,
                className: d()(u.button, l && u.active),
                onClick: c,
                children: (0, t.jsx)(o.pzj, {
                    size: 'xxs',
                    color: l ? a.Z.colors.BG_BRAND : a.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
function g(e) {
    let { id: i, pinned: l } = e,
        n = l ? r.intl.string(r.t.cSu80t) : r.intl.string(r.t.cM8Vnp);
    return (0, t.jsx)(o.ua7, {
        text: n,
        'aria-label': n,
        children: (e) =>
            (0, t.jsx)(o.P3F, {
                ...e,
                className: d()(u.button, l && u.active),
                onClick: () => (0, s.xh)(i),
                children: (0, t.jsx)(o.k5M, {
                    size: 'xxs',
                    color: l ? a.Z.colors.BG_BRAND : a.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
