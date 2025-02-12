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
    r = l(481060),
    o = l(765250),
    s = l(388032),
    u = l(553109);
function c(e) {
    let { children: i } = e;
    return (0, t.jsx)('div', {
        className: u.titleWrapper,
        children: (0, t.jsx)(r.Text, {
            variant: 'text-xs/semibold',
            color: 'header-primary',
            children: i
        })
    });
}
function p(e) {
    let { onClick: i } = e,
        l = s.intl.string(s.t['3D5yo6']);
    return (0, t.jsx)(r.ua7, {
        text: l,
        'aria-label': l,
        children: (e) =>
            (0, t.jsx)(r.P3F, {
                ...e,
                className: u.button,
                onClick: i,
                children: (0, t.jsx)(r.ewm, {
                    size: 'xxs',
                    color: a.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
function h(e) {
    let { widgetId: i, showAllStreams: l } = e,
        n = l ? s.intl.string(s.t.q2B3rq) : s.intl.string(s.t.JKGi6u),
        c = () => {
            (0, o.zG)(i, { showAllStreams: !l });
        };
    return (0, t.jsx)(r.ua7, {
        text: n,
        'aria-label': n,
        children: (e) =>
            (0, t.jsx)(r.P3F, {
                ...e,
                className: d()(u.button, l && u.active),
                onClick: c,
                children: (0, t.jsx)(r.pzj, {
                    size: 'xxs',
                    color: l ? a.Z.colors.BG_BRAND : a.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
function g(e) {
    let { id: i, pinned: l } = e,
        n = l ? s.intl.string(s.t.cSu80t) : s.intl.string(s.t.cM8Vnp);
    return (0, t.jsx)(r.ua7, {
        text: n,
        'aria-label': n,
        children: (e) =>
            (0, t.jsx)(r.P3F, {
                ...e,
                className: d()(u.button, l && u.active),
                onClick: () => (0, o.xh)(i),
                children: (0, t.jsx)(r.k5M, {
                    size: 'xxs',
                    color: l ? a.Z.colors.BG_BRAND : a.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
