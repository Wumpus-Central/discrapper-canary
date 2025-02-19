n.d(t, { Z: () => g });
var r,
    i = n(200651),
    l = n(192379),
    o = n(995295),
    a = n(374470),
    s = n(442837),
    c = n(260300),
    u = n(451478),
    d = n(5560),
    p = n(10401);
function h(e, t, n) {
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
function f(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
class m extends (r = l.Component) {
    componentDidMount() {
        let { visible: e, inlineSpecs: t } = this.props;
        null == t && this.show(e);
    }
    componentWillUnmount() {
        let { inlineSpecs: e } = this.props;
        null == e && this.show(!1);
    }
    componentDidUpdate(e) {
        let { position: t, offsetX: n, offsetY: r, tutorialId: i, visible: l, windowSize: o } = e;
        i !== this.props.tutorialId ? c.Z.hide(i) : (l !== this.props.visible || t !== this.props.position || n !== this.props.offsetX || r !== this.props.offsetY || o !== this.props.windowSize) && this.show(this.props.visible);
    }
    show(e) {
        let { tutorialId: t, position: n, offsetX: r, offsetY: i, visible: l, inlineSpecs: s, autoInvert: u } = this.props;
        if (e && null == s) {
            let e = (0, o.findDOMNode)(this);
            if (!(0, a.k)(e)) return;
            let { top: l, left: s, right: d, bottom: p } = e.getBoundingClientRect();
            c.Z.show(t, {
                position: n,
                targetWidth: d - s,
                targetHeight: p - l,
                autoInvert: u,
                origin: {
                    x: s,
                    y: l
                },
                offset: {
                    x: r,
                    y: i
                }
            });
        } else l && c.Z.hide(t);
    }
    render() {
        let { inlineSpecs: e, tutorialId: t, children: n, visible: r, windowFocused: o, position: a, autoInvert: s } = this.props,
            c = p.Z.getData()[t];
        return null != e && null != c
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      n,
                      r &&
                          (0, i.jsx)(
                              d.V,
                              f(
                                  {
                                      autoInvert: s,
                                      position: a,
                                      tutorialId: t,
                                      tutorialDefinition: c,
                                      focused: o
                                  },
                                  e
                              )
                          )
                  ]
              })
            : l.Children.only(n);
    }
}
function g(e) {
    var t, n;
    let { tutorialId: r } = e,
        l = (0, s.e7)([p.Z], () => p.Z.shouldShow(r), [r]),
        o = (0, s.e7)([u.Z], () => u.Z.isFocused()),
        a = (0, s.e7)([u.Z], () => u.Z.windowSize(), []);
    return (0, i.jsx)(
        m,
        ((t = f({}, e)),
        (n = n =
            {
                visible: l,
                windowFocused: o,
                windowSize: a
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
h(m, 'defaultProps', {
    position: 'top',
    offsetX: 0,
    offsetY: 0,
    autoInvert: !0
});
