n.d(t, {
    ZX: () => v,
    gt: () => I,
    rH: () => b
});
var r,
    i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(748780),
    c = n(755721),
    u = n(727637),
    d = n(600164),
    _ = n(270180);
function f(e, t, n) {
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            }));
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
var b = (function (e) {
    return ((e.DEFAULT = 'default'), (e.SMALL = 'small'), e);
})({});
let y = {
        default: _.shineDefault,
        small: _.shineSmall
    },
    O = {
        default: _.shineInnerDefault,
        small: _.shineInnerSmall
    };
class v extends (r = a.PureComponent) {
    render() {
        let e = this.props,
            { className: t, shineSize: n, shinePaused: r } = e,
            a = g(e, ['className', 'shineSize', 'shinePaused']);
        return (0, i.jsx)(
            l.Z.div,
            m(p({}, a), {
                className: s()(_.shineContainer, t, { [_.shinePaused]: r }),
                children: (0, i.jsx)(d.Z, {
                    align: d.Z.Align.CENTER,
                    justify: d.Z.Justify.CENTER,
                    className: y[n],
                    children: (0, i.jsx)('div', { className: O[n] })
                })
            })
        );
    }
}
f(v, 'defaultProps', { shineSize: 'default' });
let I = (e) => {
    var { children: t, className: n, disabled: r, submitting: o, pauseAnimation: l, shineSize: d = 'default', shinePaused: f, buttonShineClassName: h, onlyShineOnHover: E } = e,
        b = g(e, ['children', 'className', 'disabled', 'submitting', 'pauseAnimation', 'shineSize', 'shinePaused', 'buttonShineClassName', 'onlyShineOnHover']);
    let y = a.useRef(null),
        O = (0, u.Z)(y),
        I = !r && !o && !0 !== l && (!E || O);
    return (0, i.jsxs)(
        c.zx,
        m(p({ buttonRef: y }, b), {
            className: s()(_.shinyButton, n),
            disabled: r,
            submitting: o,
            children: [
                t,
                I
                    ? (0, i.jsx)(v, {
                          shinePaused: f,
                          className: s()(_.buttonShine, E ? _.onlyShineOnHover : void 0, h),
                          shineSize: d
                      })
                    : null
            ]
        })
    );
};
I.ShineSizes = b;
