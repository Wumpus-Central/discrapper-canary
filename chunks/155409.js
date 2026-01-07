n.d(t, { Z: () => g });
var r,
    i = n(54381),
    a = n(473749),
    o = n(374470),
    s = n(442837),
    l = n(260300),
    c = n(451478),
    u = n(5560),
    d = n(10401);
function f(e, t, n) {
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class h extends (r = a.Component) {
    componentDidMount() {
        let { visible: e, inlineSpecs: t } = this.props;
        null == t && this.show(e);
    }
    componentWillUnmount() {
        let { inlineSpecs: e } = this.props;
        null == e && this.show(!1);
    }
    componentDidUpdate(e) {
        let { position: t, offsetX: n, offsetY: r, tutorialId: i, visible: a, windowSize: o } = e;
        i !== this.props.tutorialId
            ? l.Z.hide(i)
            : (a !== this.props.visible ||
                  t !== this.props.position ||
                  n !== this.props.offsetX ||
                  r !== this.props.offsetY ||
                  o !== this.props.windowSize) &&
              this.show(this.props.visible);
    }
    show(e) {
        let {
            childRef: t,
            tutorialId: n,
            position: r,
            offsetX: i,
            offsetY: a,
            visible: s,
            inlineSpecs: c,
            autoInvert: u,
        } = this.props;
        if (e && null == c) {
            let e = null == t ? void 0 : t.current;
            if (!(0, o.kK)(e)) return;
            let { top: s, left: c, right: d, bottom: f } = e.getBoundingClientRect();
            l.Z.show(n, {
                position: r,
                targetWidth: d - c,
                targetHeight: f - s,
                autoInvert: u,
                origin: {
                    x: c,
                    y: s,
                },
                offset: {
                    x: i,
                    y: a,
                },
            });
        } else s && l.Z.hide(n);
    }
    render() {
        let {
                inlineSpecs: e,
                tutorialId: t,
                children: n,
                visible: r,
                windowFocused: o,
                position: s,
                autoInvert: l,
            } = this.props,
            c = d.Z.getData()[t];
        return null != e && null != c
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      n,
                      r &&
                          (0, i.jsx)(
                              u.V,
                              p(
                                  {
                                      autoInvert: l,
                                      position: s,
                                      tutorialId: t,
                                      tutorialDefinition: c,
                                      focused: o,
                                  },
                                  e,
                              ),
                          ),
                  ],
              })
            : a.Children.only(n);
    }
}
function g(e) {
    let { tutorialId: t } = e,
        n = (0, s.e7)([d.Z], () => d.Z.shouldShow(t), [t]),
        r = (0, s.e7)([c.Z], () => c.Z.isFocused()),
        a = (0, s.e7)([c.Z], () => c.Z.windowSize(), []);
    return (0, i.jsx)(
        h,
        m(p({}, e), {
            visible: n,
            windowFocused: r,
            windowSize: a,
        }),
    );
}
f(h, "defaultProps", {
    position: "top",
    offsetX: 0,
    offsetY: 0,
    autoInvert: !0,
});
