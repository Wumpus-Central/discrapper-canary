r.d(n, {
    x: function () {
        return h;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(803997),
    s = r.n(o),
    l = r(696689),
    u = r.n(l),
    c = r(692547),
    d = r(537054),
    f = r(770151);
let p = Object.fromEntries(Object.keys(c.Z.colors).map((e) => [u()(e), e])),
    h = a.forwardRef(function (e, n) {
        let r,
            { variant: a, tag: o = 'div', selectable: l = !1, className: u, lineClamp: h, color: _, tabularNumbers: m = !1, scaleFontToUserSetting: g = !1, ...E } = e,
            v = o,
            y = '',
            b = {};
        if (
            (null != h &&
                (1 === h
                    ? (y = d.lineClamp1)
                    : ((y = d.lineClamp2Plus),
                      (b = {
                          lineClamp: h,
                          WebkitLineClamp: h
                      }))),
            void 0 !== _)
        )
            switch (_) {
                case 'currentColor':
                    r = 'currentColor';
                    break;
                case 'none':
                    r = void 0;
                    break;
                case 'always-white':
                    r = 'white';
                    break;
                default:
                    var I;
                    r = null === (I = c.Z.colors[p[_]]) || void 0 === I ? void 0 : I.css;
            }
        let T = {
            color: r,
            ...b,
            ...E.style
        };
        return (0, i.jsx)(v, {
            ref: n,
            className: s()(
                {
                    [d.defaultColor]: void 0 === _,
                    [d.selectable]: l,
                    [d.tabularNumbers]: m,
                    [f.fontScaling]: g
                },
                y,
                f[a],
                u
            ),
            ...E,
            style: Object.values(T).filter(Boolean).length > 0 ? T : void 0,
            'data-text-variant': a
        });
    });
