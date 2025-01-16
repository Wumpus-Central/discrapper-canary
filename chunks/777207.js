r.d(n, {
    x: function () {
        return h;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(803997),
    o = r.n(s),
    l = r(696689),
    u = r.n(l),
    c = r(692547),
    d = r(537054),
    f = r(770151);
let _ = Object.fromEntries(Object.keys(c.Z.colors).map((e) => [u()(e), e])),
    h = a.forwardRef(function (e, n) {
        let r,
            { variant: a, tag: s = 'div', selectable: l = !1, className: u, lineClamp: h, color: p, tabularNumbers: m = !1, scaleFontToUserSetting: g = !1, ...E } = e,
            v = s,
            I = '',
            T = {};
        if (
            (null != h &&
                (1 === h
                    ? (I = d.lineClamp1)
                    : ((I = d.lineClamp2Plus),
                      (T = {
                          lineClamp: h,
                          WebkitLineClamp: h
                      }))),
            void 0 !== p)
        )
            switch (p) {
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
                    var b;
                    r = null === (b = c.Z.colors[_[p]]) || void 0 === b ? void 0 : b.css;
            }
        let y = {
            color: r,
            ...T,
            ...E.style
        };
        return (0, i.jsx)(v, {
            ref: n,
            className: o()(
                {
                    [d.defaultColor]: void 0 === p,
                    [d.selectable]: l,
                    [d.tabularNumbers]: m,
                    [f.fontScaling]: g
                },
                I,
                f[a],
                u
            ),
            ...E,
            style: Object.values(y).filter(Boolean).length > 0 ? y : void 0,
            'data-text-variant': a
        });
    });
