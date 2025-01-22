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
    o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(748780),
    d = r(481060),
    f = r(727637),
    p = r(600164),
    h = r(136997);
function _(e, n, r) {
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
class E extends (a = s.PureComponent) {
    render() {
        let { className: e, shineSize: n, shinePaused: r, ...i } = this.props;
        return (0, o.jsx)(c.Z.div, {
            ...i,
            className: u()(h.shineContainer, e, { [h.shinePaused]: r }),
            children: (0, o.jsx)(p.Z, {
                align: p.Z.Align.CENTER,
                justify: p.Z.Justify.CENTER,
                className: m[n],
                children: (0, o.jsx)('div', { className: g[n] })
            })
        });
    }
}
_(E, 'defaultProps', { shineSize: 'default' });
let v = (e) => {
    let { children: n, className: r, disabled: i, submitting: a, pauseAnimation: l, shineSize: c = 'default', shinePaused: p, buttonShineClassName: _, onlyShineOnHover: m, ...g } = e,
        v = s.createRef(),
        y = (0, f.Z)(v),
        b = !i && !a && !0 !== l && (!m || y);
    return (0, o.jsxs)(d.Button, {
        buttonRef: v,
        ...g,
        className: u()(h.shinyButton, r),
        disabled: i,
        submitting: a,
        children: [
            n,
            b
                ? (0, o.jsx)(E, {
                      shinePaused: p,
                      className: u()(h.buttonShine, m ? h.onlyShineOnHover : void 0, _),
                      shineSize: c
                  })
                : null
        ]
    });
};
v.ShineSizes = i;
