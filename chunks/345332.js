n.d(t, {
    F: () => _,
    Y: () => f
});
var r = n(200651),
    i = n(192379),
    o = n(772848),
    a = n(993365),
    s = n(481060),
    l = n(245216),
    c = n(561466),
    u = n(986449);
function d(e) {
    switch (e) {
        case c.pC.SUCCESS:
            return (0, r.jsx)(s.dz2, {
                size: 'md',
                className: u.icon,
                color: s.TVs.colors.STATUS_POSITIVE.css
            });
        case c.pC.FAILURE:
            return (0, r.jsx)(s.Uz9, {
                size: 'md',
                className: u.icon,
                color: s.TVs.colors.STATUS_DANGER.css
            });
        case c.pC.CLIP:
            return (0, r.jsx)(s.AlX, {
                size: 'xs',
                className: u.clipIcon,
                color: s.TVs.colors.HEADER_PRIMARY.css
            });
        case c.pC.LINK:
            return (0, r.jsx)(s.xPt, {
                className: u.icon,
                color: s.TVs.colors.HEADER_PRIMARY.css
            });
        case c.pC.FORWARD:
            return (0, r.jsx)(l.Z, {
                className: u.icon,
                color: s.TVs.colors.STATUS_POSITIVE.css
            });
        case c.pC.INVITE:
            return (0, r.jsx)(s._XJ, {
                className: u.icon,
                color: s.TVs.colors.TEXT_BRAND.css
            });
        case c.pC.BOOKMARK:
            return (0, r.jsx)(s.plf, {
                className: u.icon,
                color: s.TVs.colors.HEADER_PRIMARY.css
            });
        case c.pC.CLOCK:
            return (0, r.jsx)(s.T39, {
                className: u.icon,
                color: s.TVs.colors.HEADER_PRIMARY.css
            });
        default:
            return null;
    }
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.si,
        { position: r = c.si.position, component: i = c.si.component, duration: a = c.si.duration } = n;
    return {
        message: e,
        id: (0, o.Z)(),
        type: t,
        options: {
            position: r,
            component: i,
            duration: a
        }
    };
}
let _ = i.memo(function (e) {
    let { message: t, type: n, id: i, options: { component: o = c.si.component } = c.si } = e;
    return null != o
        ? o
        : (0, r.jsxs)('div', {
              id: i,
              className: u.toast,
              'data-type': n,
              children: [
                  d(n),
                  (0, r.jsx)(a.x, {
                      className: u.content,
                      variant: 'text-md/normal',
                      children: t
                  })
              ]
          });
});
