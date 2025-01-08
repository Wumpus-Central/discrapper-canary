n.d(t, {
    Z: function () {
        return C;
    }
});
var i,
    l,
    r,
    a,
    s = n(200651),
    o = n(192379),
    c = n(995295),
    d = n(513431),
    u = n(442837),
    h = n(260300),
    p = n(451478),
    m = n(5560),
    f = n(10401);
class g extends (a = o.Component) {
    componentDidMount() {
        let { visible: e, inlineSpecs: t } = this.props;
        null == t && this.show(e);
    }
    componentWillUnmount() {
        let { inlineSpecs: e } = this.props;
        null == e && this.show(!1);
    }
    componentDidUpdate(e) {
        let { position: t, offsetX: n, offsetY: i, tutorialId: l, visible: r, windowSize: a } = e;
        l !== this.props.tutorialId ? h.Z.hide(l) : (r !== this.props.visible || t !== this.props.position || n !== this.props.offsetX || i !== this.props.offsetY || a !== this.props.windowSize) && this.show(this.props.visible);
    }
    show(e) {
        let { tutorialId: t, position: n, offsetX: i, offsetY: l, visible: r, inlineSpecs: a, autoInvert: s } = this.props;
        if (e && null == a) {
            let e = (0, c.findDOMNode)(this);
            if (!(0, d.k)(e)) return;
            let { top: r, left: a, right: o, bottom: u } = e.getBoundingClientRect();
            h.Z.show(t, {
                position: n,
                targetWidth: o - a,
                targetHeight: u - r,
                autoInvert: s,
                origin: {
                    x: a,
                    y: r
                },
                offset: {
                    x: i,
                    y: l
                }
            });
        } else r && h.Z.hide(t);
    }
    render() {
        let { inlineSpecs: e, tutorialId: t, children: n, visible: i, windowFocused: l, position: r, autoInvert: a } = this.props,
            c = f.Z.getData()[t];
        return null != e && null != c
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      n,
                      i &&
                          (0, s.jsx)(m.V, {
                              autoInvert: a,
                              position: r,
                              tutorialId: t,
                              tutorialDefinition: c,
                              focused: l,
                              ...e
                          })
                  ]
              })
            : o.Children.only(n);
    }
}
function C(e) {
    let { tutorialId: t } = e,
        n = (0, u.e7)([f.Z], () => f.Z.shouldShow(t), [t]),
        i = (0, u.e7)([p.Z], () => p.Z.isFocused()),
        l = (0, u.e7)([p.Z], () => p.Z.windowSize(), []);
    return (0, s.jsx)(g, {
        ...e,
        visible: n,
        windowFocused: i,
        windowSize: l
    });
}
(r = {
    position: 'top',
    offsetX: 0,
    offsetY: 0,
    autoInvert: !0
}),
    (l = 'defaultProps') in (i = g)
        ? Object.defineProperty(i, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = r);
