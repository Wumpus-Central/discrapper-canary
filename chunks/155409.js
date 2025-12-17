n.d(t, { Z: () => m });
var i,
    r = n(54381),
    l = n(473749),
    a = n(374470),
    o = n(442837),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
class h extends (i = l.Component) {
    componentDidMount() {
        let { visible: e, inlineSpecs: t } = this.props;
        null == t && this.show(e);
    }
    componentWillUnmount() {
        let { inlineSpecs: e } = this.props;
        null == e && this.show(!1);
    }
    componentDidUpdate(e) {
        let { position: t, offsetX: n, offsetY: i, tutorialId: r, visible: l, windowSize: a } = e;
        r !== this.props.tutorialId
            ? s.Z.hide(r)
            : (l !== this.props.visible ||
                  t !== this.props.position ||
                  n !== this.props.offsetX ||
                  i !== this.props.offsetY ||
                  a !== this.props.windowSize) &&
              this.show(this.props.visible);
    }
    show(e) {
        let {
            childRef: t,
            tutorialId: n,
            position: i,
            offsetX: r,
            offsetY: l,
            visible: o,
            inlineSpecs: c,
            autoInvert: u,
        } = this.props;
        if (e && null == c) {
            let e = null == t ? void 0 : t.current;
            if (!(0, a.kK)(e)) return;
            let { top: o, left: c, right: d, bottom: p } = e.getBoundingClientRect();
            s.Z.show(n, {
                position: i,
                targetWidth: d - c,
                targetHeight: p - o,
                autoInvert: u,
                origin: {
                    x: c,
                    y: o,
                },
                offset: {
                    x: r,
                    y: l,
                },
            });
        } else o && s.Z.hide(n);
    }
    render() {
        let {
                inlineSpecs: e,
                tutorialId: t,
                children: n,
                visible: i,
                windowFocused: a,
                position: o,
                autoInvert: s,
            } = this.props,
            c = d.Z.getData()[t];
        return null != e && null != c
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      n,
                      i &&
                          (0, r.jsx)(
                              u.V,
                              f(
                                  {
                                      autoInvert: s,
                                      position: o,
                                      tutorialId: t,
                                      tutorialDefinition: c,
                                      focused: a,
                                  },
                                  e,
                              ),
                          ),
                  ],
              })
            : l.Children.only(n);
    }
}
function m(e) {
    var t, n;
    let { tutorialId: i } = e,
        l = (0, o.e7)([d.Z], () => d.Z.shouldShow(i), [i]),
        a = (0, o.e7)([c.Z], () => c.Z.isFocused()),
        s = (0, o.e7)([c.Z], () => c.Z.windowSize(), []);
    return (0, r.jsx)(
        h,
        ((t = f({}, e)),
        (n = n =
            {
                visible: l,
                windowFocused: a,
                windowSize: s,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
p(h, "defaultProps", {
    position: "top",
    offsetX: 0,
    offsetY: 0,
    autoInvert: !0,
});
