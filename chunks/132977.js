r.d(n, {
    ZX: function () {
        return E;
    },
    gt: function () {
        return v;
    },
    rH: function () {
        return i;
    }
});
var i,
    a,
    s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(748780),
    d = r(481060),
    f = r(727637),
    _ = r(600164),
    h = r(136997);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.DEFAULT = 'default'), (e.SMALL = 'small');
})(i || (i = {}));
let m = {
        default: h.shineDefault,
        small: h.shineSmall
    },
    g = {
        default: h.shineInnerDefault,
        small: h.shineInnerSmall
    };
class E extends (a = o.PureComponent) {
    render() {
        let { className: e, shineSize: n, shinePaused: r, ...i } = this.props;
        return (0, s.jsx)(c.Z.div, {
            ...i,
            className: u()(h.shineContainer, e, { [h.shinePaused]: r }),
            children: (0, s.jsx)(_.Z, {
                align: _.Z.Align.CENTER,
                justify: _.Z.Justify.CENTER,
                className: m[n],
                children: (0, s.jsx)('div', { className: g[n] })
            })
        });
    }
}
p(E, 'defaultProps', { shineSize: 'default' });
let v = (e) => {
    let { children: n, className: r, disabled: i, submitting: a, pauseAnimation: l, shineSize: c = 'default', shinePaused: _, buttonShineClassName: p, onlyShineOnHover: m, ...g } = e,
        v = o.createRef(),
        I = (0, f.Z)(v),
        T = !i && !a && !0 !== l && (!m || I);
    return (0, s.jsxs)(d.Button, {
        buttonRef: v,
        ...g,
        className: u()(h.shinyButton, r),
        disabled: i,
        submitting: a,
        children: [
            n,
            T
                ? (0, s.jsx)(E, {
                      shinePaused: _,
                      className: u()(h.buttonShine, m ? h.onlyShineOnHover : void 0, p),
                      shineSize: c
                  })
                : null
        ]
    });
};
v.ShineSizes = i;
