n.d(t, {
    ZX: () => O,
    gt: () => I,
    rH: () => b
});
var r,
    i = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    l = n(748780),
    c = n(481060),
    u = n(727637),
    d = n(600164),
    f = n(270180);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var b = (function (e) {
    return (e.DEFAULT = 'default'), (e.SMALL = 'small'), e;
})({});
let y = {
        default: f.shineDefault,
        small: f.shineSmall
    },
    v = {
        default: f.shineInnerDefault,
        small: f.shineInnerSmall
    };
class O extends (r = a.PureComponent) {
    render() {
        let e = this.props,
            { className: t, shineSize: n, shinePaused: r } = e,
            a = g(e, ['className', 'shineSize', 'shinePaused']);
        return (0, i.jsx)(
            l.Z.div,
            m(p({}, a), {
                className: s()(f.shineContainer, t, { [f.shinePaused]: r }),
                children: (0, i.jsx)(d.Z, {
                    align: d.Z.Align.CENTER,
                    justify: d.Z.Justify.CENTER,
                    className: y[n],
                    children: (0, i.jsx)('div', { className: v[n] })
                })
            })
        );
    }
}
_(O, 'defaultProps', { shineSize: 'default' });
let I = (e) => {
    var { children: t, className: n, disabled: r, submitting: o, pauseAnimation: l, shineSize: d = 'default', shinePaused: _, buttonShineClassName: h, onlyShineOnHover: E } = e,
        b = g(e, ['children', 'className', 'disabled', 'submitting', 'pauseAnimation', 'shineSize', 'shinePaused', 'buttonShineClassName', 'onlyShineOnHover']);
    let y = a.createRef(),
        v = (0, u.Z)(y),
        I = !r && !o && !0 !== l && (!E || v);
    return (0, i.jsxs)(
        c.zxk,
        m(p({ buttonRef: y }, b), {
            className: s()(f.shinyButton, n),
            disabled: r,
            submitting: o,
            children: [
                t,
                I
                    ? (0, i.jsx)(O, {
                          shinePaused: _,
                          className: s()(f.buttonShine, E ? f.onlyShineOnHover : void 0, h),
                          shineSize: d
                      })
                    : null
            ]
        })
    );
};
I.ShineSizes = b;
