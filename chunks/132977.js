n.d(t, {
    ZX: () => O,
    gt: () => S,
    rH: () => v
});
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(748780),
    c = n(481060),
    u = n(727637),
    d = n(600164),
    f = n(163287);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var v = (function (e) {
    return (e.DEFAULT = 'default'), (e.SMALL = 'small'), e;
})({});
let b = {
        default: f.shineDefault,
        small: f.shineSmall
    },
    y = {
        default: f.shineInnerDefault,
        small: f.shineInnerSmall
    };
class O extends (r = o.PureComponent) {
    render() {
        let e = this.props,
            { className: t, shineSize: n, shinePaused: r } = e,
            o = g(e, ['className', 'shineSize', 'shinePaused']);
        return (0, i.jsx)(
            l.Z.div,
            m(_({}, o), {
                className: s()(f.shineContainer, t, { [f.shinePaused]: r }),
                children: (0, i.jsx)(d.Z, {
                    align: d.Z.Align.CENTER,
                    justify: d.Z.Justify.CENTER,
                    className: b[n],
                    children: (0, i.jsx)('div', { className: y[n] })
                })
            })
        );
    }
}
p(O, 'defaultProps', { shineSize: 'default' });
let S = (e) => {
    var { children: t, className: n, disabled: r, submitting: a, pauseAnimation: l, shineSize: d = 'default', shinePaused: p, buttonShineClassName: h, onlyShineOnHover: E } = e,
        v = g(e, ['children', 'className', 'disabled', 'submitting', 'pauseAnimation', 'shineSize', 'shinePaused', 'buttonShineClassName', 'onlyShineOnHover']);
    let b = o.createRef(),
        y = (0, u.Z)(b),
        S = !r && !a && !0 !== l && (!E || y);
    return (0, i.jsxs)(
        c.zxk,
        m(_({ buttonRef: b }, v), {
            className: s()(f.shinyButton, n),
            disabled: r,
            submitting: a,
            children: [
                t,
                S
                    ? (0, i.jsx)(O, {
                          shinePaused: p,
                          className: s()(f.buttonShine, E ? f.onlyShineOnHover : void 0, h),
                          shineSize: d
                      })
                    : null
            ]
        })
    );
};
S.ShineSizes = v;
