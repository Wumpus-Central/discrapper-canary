r.d(n, {
    F: function () {
        return h;
    },
    Y: function () {
        return _;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(772848),
    o = r(993365),
    l = r(481060),
    u = r(245216),
    c = r(561466),
    d = r(24343);
function f(e) {
    switch (e) {
        case c.pC.SUCCESS:
            return (0, i.jsx)(l.CheckmarkLargeIcon, {
                size: 'md',
                className: d.icon,
                color: l.tokens.colors.STATUS_POSITIVE.css
            });
        case c.pC.FAILURE:
            return (0, i.jsx)(l.XLargeIcon, {
                size: 'md',
                className: d.icon,
                color: l.tokens.colors.STATUS_DANGER.css
            });
        case c.pC.CLIP:
            return (0, i.jsx)(l.ClipsIcon, {
                size: 'xs',
                className: d.clipIcon,
                color: l.tokens.colors.HEADER_PRIMARY.css
            });
        case c.pC.LINK:
            return (0, i.jsx)(l.LinkIcon, {
                className: d.icon,
                color: l.tokens.colors.HEADER_PRIMARY.css
            });
        case c.pC.FORWARD:
            return (0, i.jsx)(u.Z, {
                className: d.icon,
                color: l.tokens.colors.STATUS_POSITIVE.css
            });
        case c.pC.BOOKMARK:
            return (0, i.jsx)(l.BookmarkIcon, {
                className: d.icon,
                color: l.tokens.colors.HEADER_PRIMARY.css
            });
        case c.pC.CLOCK:
            return (0, i.jsx)(l.ClockIcon, {
                className: d.icon,
                color: l.tokens.colors.HEADER_PRIMARY.css
            });
        default:
            return null;
    }
}
function _(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.si,
        { position: i = c.si.position, component: a = c.si.component, duration: o = c.si.duration } = r;
    return {
        message: e,
        id: (0, s.Z)(),
        type: n,
        options: {
            position: i,
            component: a,
            duration: o
        }
    };
}
let h = a.memo(function (e) {
    let { message: n, type: r, id: a, options: { component: s = c.si.component } = c.si } = e;
    return null != s
        ? (0, i.jsx)(i.Fragment, { children: s })
        : (0, i.jsxs)('div', {
              id: a,
              className: d.toast,
              children: [
                  f(r),
                  (0, i.jsx)(o.x, {
                      className: d.__invalid_content,
                      color: 'header-primary',
                      variant: 'text-md/normal',
                      children: n
                  })
              ]
          });
});
