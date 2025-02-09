n.d(t, {
    F: () => _,
    Y: () => f
});
var i = n(200651),
    r = n(192379),
    a = n(772848),
    s = n(993365),
    o = n(481060),
    l = n(245216),
    u = n(561466),
    c = n(241700);
function d(e) {
    switch (e) {
        case u.pC.SUCCESS:
            return (0, i.jsx)(o.dz2, {
                size: 'md',
                className: c.icon,
                color: o.TVs.colors.STATUS_POSITIVE.css
            });
        case u.pC.FAILURE:
            return (0, i.jsx)(o.Uz9, {
                size: 'md',
                className: c.icon,
                color: o.TVs.colors.STATUS_DANGER.css
            });
        case u.pC.CLIP:
            return (0, i.jsx)(o.AlX, {
                size: 'xs',
                className: c.clipIcon,
                color: o.TVs.colors.HEADER_PRIMARY.css
            });
        case u.pC.LINK:
            return (0, i.jsx)(o.xPt, {
                className: c.icon,
                color: o.TVs.colors.HEADER_PRIMARY.css
            });
        case u.pC.FORWARD:
            return (0, i.jsx)(l.Z, {
                className: c.icon,
                color: o.TVs.colors.STATUS_POSITIVE.css
            });
        case u.pC.BOOKMARK:
            return (0, i.jsx)(o.plf, {
                className: c.icon,
                color: o.TVs.colors.HEADER_PRIMARY.css
            });
        case u.pC.CLOCK:
            return (0, i.jsx)(o.T39, {
                className: c.icon,
                color: o.TVs.colors.HEADER_PRIMARY.css
            });
        default:
            return null;
    }
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.si,
        { position: i = u.si.position, component: r = u.si.component, duration: s = u.si.duration } = n;
    return {
        message: e,
        id: (0, a.Z)(),
        type: t,
        options: {
            position: i,
            component: r,
            duration: s
        }
    };
}
let _ = r.memo(function (e) {
    let { message: t, type: n, id: r, options: { component: a = u.si.component } = u.si } = e;
    return null != a
        ? (0, i.jsx)(i.Fragment, { children: a })
        : (0, i.jsxs)('div', {
              id: r,
              className: c.toast,
              'data-type': n,
              children: [
                  d(n),
                  (0, i.jsx)(s.x, {
                      className: c.content,
                      variant: 'text-md/normal',
                      children: t
                  })
              ]
          });
});
