n.d(t, { Z: () => g });
var i,
    l,
    a,
    r = n(200651),
    s = n(192379),
    o = n(995295),
    c = n(374470),
    d = n(442837),
    u = n(260300),
    h = n(451478),
    p = n(5560),
    m = n(10401);
class f extends (a = s.Component) {
    componentDidMount() {
        let { visible: e, inlineSpecs: t } = this.props;
        null == t && this.show(e);
    }
    componentWillUnmount() {
        let { inlineSpecs: e } = this.props;
        null == e && this.show(!1);
    }
    componentDidUpdate(e) {
        let { position: t, offsetX: n, offsetY: i, tutorialId: l, visible: a, windowSize: r } = e;
        l !== this.props.tutorialId ? u.Z.hide(l) : (a !== this.props.visible || t !== this.props.position || n !== this.props.offsetX || i !== this.props.offsetY || r !== this.props.windowSize) && this.show(this.props.visible);
    }
    show(e) {
        let { tutorialId: t, position: n, offsetX: i, offsetY: l, visible: a, inlineSpecs: r, autoInvert: s } = this.props;
        if (e && null == r) {
            let e = (0, o.findDOMNode)(this);
            if (!(0, c.k)(e)) return;
            let { top: a, left: r, right: d, bottom: h } = e.getBoundingClientRect();
            u.Z.show(t, {
                position: n,
                targetWidth: d - r,
                targetHeight: h - a,
                autoInvert: s,
                origin: {
                    x: r,
                    y: a
                },
                offset: {
                    x: i,
                    y: l
                }
            });
        } else a && u.Z.hide(t);
    }
    render() {
        let { inlineSpecs: e, tutorialId: t, children: n, visible: i, windowFocused: l, position: a, autoInvert: o } = this.props,
            c = m.Z.getData()[t];
        return null != e && null != c
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      n,
                      i &&
                          (0, r.jsx)(p.V, {
                              autoInvert: o,
                              position: a,
                              tutorialId: t,
                              tutorialDefinition: c,
                              focused: l,
                              ...e
                          })
                  ]
              })
            : s.Children.only(n);
    }
}
function g(e) {
    let { tutorialId: t } = e,
        n = (0, d.e7)([m.Z], () => m.Z.shouldShow(t), [t]),
        i = (0, d.e7)([h.Z], () => h.Z.isFocused()),
        l = (0, d.e7)([h.Z], () => h.Z.windowSize(), []);
    return (0, r.jsx)(f, {
        ...e,
        visible: n,
        windowFocused: i,
        windowSize: l
    });
}
(l = {
    position: 'top',
    offsetX: 0,
    offsetY: 0,
    autoInvert: !0
}),
    (i = 'defaultProps') in f
        ? Object.defineProperty(f, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[i] = l);
