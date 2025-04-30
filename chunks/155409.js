n.d(t, { Z: () => m });
var r,
    i = n(200651),
    l = n(192379),
    o = n(374470),
    a = n(442837),
    s = n(260300),
    c = n(451478),
    u = n(5560),
    d = n(10401);
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
function h(e) {
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
class f extends (r = l.Component) {
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
        i !== this.props.tutorialId ? s.Z.hide(i) : (l !== this.props.visible || t !== this.props.position || n !== this.props.offsetX || r !== this.props.offsetY || o !== this.props.windowSize) && this.show(this.props.visible);
    }
    show(e) {
        let { childRef: t, tutorialId: n, position: r, offsetX: i, offsetY: l, visible: a, inlineSpecs: c, autoInvert: u } = this.props;
        if (e && null == c) {
            let e = null == t ? void 0 : t.current;
            if (!(0, o.k)(e)) return;
            let { top: a, left: c, right: d, bottom: p } = e.getBoundingClientRect();
            s.Z.show(n, {
                position: r,
                targetWidth: d - c,
                targetHeight: p - a,
                autoInvert: u,
                origin: {
                    x: c,
                    y: a
                },
                offset: {
                    x: i,
                    y: l
                }
            });
        } else a && s.Z.hide(n);
    }
    render() {
        let { inlineSpecs: e, tutorialId: t, children: n, visible: r, windowFocused: o, position: a, autoInvert: s } = this.props,
            c = d.Z.getData()[t];
        return null != e && null != c
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      n,
                      r &&
                          (0, i.jsx)(
                              u.V,
                              h(
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
function m(e) {
    var t, n;
    let { tutorialId: r } = e,
        l = (0, a.e7)([d.Z], () => d.Z.shouldShow(r), [r]),
        o = (0, a.e7)([c.Z], () => c.Z.isFocused()),
        s = (0, a.e7)([c.Z], () => c.Z.windowSize(), []);
    return (0, i.jsx)(
        f,
        ((t = h({}, e)),
        (n = n =
            {
                visible: l,
                windowFocused: o,
                windowSize: s
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
p(f, 'defaultProps', {
    position: 'top',
    offsetX: 0,
    offsetY: 0,
    autoInvert: !0
});
