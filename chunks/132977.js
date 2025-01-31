n.d(t, {
    ZX: () => g,
    gt: () => E,
    rH: () => p
});
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(748780),
    u = n(481060),
    c = n(727637),
    d = n(600164),
    f = n(136997);
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
var p = (function (e) {
    return (e.DEFAULT = 'default'), (e.SMALL = 'small'), e;
})({});
let h = {
        default: f.shineDefault,
        small: f.shineSmall
    },
    m = {
        default: f.shineInnerDefault,
        small: f.shineInnerSmall
    };
class g extends (i = a.PureComponent) {
    render() {
        let { className: e, shineSize: t, shinePaused: n, ...i } = this.props;
        return (0, r.jsx)(l.Z.div, {
            ...i,
            className: o()(f.shineContainer, e, { [f.shinePaused]: n }),
            children: (0, r.jsx)(d.Z, {
                align: d.Z.Align.CENTER,
                justify: d.Z.Justify.CENTER,
                className: h[t],
                children: (0, r.jsx)('div', { className: m[t] })
            })
        });
    }
}
_(g, 'defaultProps', { shineSize: 'default' });
let E = (e) => {
    let { children: t, className: n, disabled: i, submitting: s, pauseAnimation: l, shineSize: d = 'default', shinePaused: _, buttonShineClassName: p, onlyShineOnHover: h, ...m } = e,
        E = a.createRef(),
        v = (0, c.Z)(E),
        y = !i && !s && !0 !== l && (!h || v);
    return (0, r.jsxs)(u.zxk, {
        buttonRef: E,
        ...m,
        className: o()(f.shinyButton, n),
        disabled: i,
        submitting: s,
        children: [
            t,
            y
                ? (0, r.jsx)(g, {
                      shinePaused: _,
                      className: o()(f.buttonShine, h ? f.onlyShineOnHover : void 0, p),
                      shineSize: d
                  })
                : null
        ]
    });
};
E.ShineSizes = p;
