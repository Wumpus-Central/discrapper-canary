n.d(t, { x: () => _ });
var i = n(200651),
    r = n(192379),
    a = n(803997),
    s = n.n(a),
    o = n(696689),
    l = n.n(o),
    u = n(692547),
    c = n(537054),
    d = n(770151);
let f = Object.fromEntries(Object.keys(u.Z.colors).map((e) => [l()(e), e])),
    _ = r.forwardRef(function (e, t) {
        let n,
            { variant: r, tag: a = 'div', selectable: o = !1, className: l, lineClamp: _, color: p, tabularNumbers: h = !1, scaleFontToUserSetting: m = !1, ...g } = e,
            E = a,
            v = '',
            y = {};
        if (
            (null != _ &&
                (1 === _
                    ? (v = c.lineClamp1)
                    : ((v = c.lineClamp2Plus),
                      (y = {
                          lineClamp: _,
                          WebkitLineClamp: _
                      }))),
            void 0 !== p)
        )
            switch (p) {
                case 'currentColor':
                    n = 'currentColor';
                    break;
                case 'none':
                    n = void 0;
                    break;
                case 'always-white':
                    n = 'white';
                    break;
                default:
                    var I;
                    n = null === (I = u.Z.colors[f[p]]) || void 0 === I ? void 0 : I.css;
            }
        let b = {
            color: n,
            ...y,
            ...g.style
        };
        return (0, i.jsx)(E, {
            ref: t,
            className: s()(
                {
                    [c.defaultColor]: void 0 === p,
                    [c.selectable]: o,
                    [c.tabularNumbers]: h,
                    [d.fontScaling]: m
                },
                v,
                d[r],
                l
            ),
            ...g,
            style: Object.values(b).filter(Boolean).length > 0 ? b : void 0,
            'data-text-variant': r
        });
    });
