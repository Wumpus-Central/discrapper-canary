n.d(t, {
    A: () => g,
});
var r,
    i = n(627968),
    a = n(64700),
    s = n(621466),
    o = n(311907),
    l = n(166649),
    c = n(531685),
    u = n(575486),
    d = n(482361);

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

function h(e, t) {
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
class m extends (r = a.Component) {
    componentDidMount() {
        let { visible: e, inlineSpecs: t } = this.props;
        null == t && this.show(e);
    }
    componentWillUnmount() {
        let { inlineSpecs: e } = this.props;
        null == e && this.show(!1);
    }
    componentDidUpdate(e) {
        let { position: t, offsetX: n, offsetY: r, tutorialId: i, visible: a, windowSize: s } = e;
        i !== this.props.tutorialId
            ? l.A.hide(i)
            : (a !== this.props.visible ||
                  t !== this.props.position ||
                  n !== this.props.offsetX ||
                  r !== this.props.offsetY ||
                  s !== this.props.windowSize) &&
              this.show(this.props.visible);
    }
    show(e) {
        let {
            childRef: t,
            tutorialId: n,
            position: r,
            offsetX: i,
            offsetY: a,
            visible: o,
            inlineSpecs: c,
            autoInvert: u,
        } = this.props;
        if (e && null == c) {
            let e = null == t ? void 0 : t.current;
            if (!(0, s.vq)(e)) return;
            let { top: o, left: c, right: d, bottom: f } = e.getBoundingClientRect();
            l.A.show(n, {
                position: r,
                targetWidth: d - c,
                targetHeight: f - o,
                autoInvert: u,
                origin: {
                    x: c,
                    y: o,
                },
                offset: {
                    x: i,
                    y: a,
                },
            });
        } else o && l.A.hide(n);
    }
    render() {
        let {
                inlineSpecs: e,
                tutorialId: t,
                children: n,
                visible: r,
                windowFocused: s,
                position: o,
                autoInvert: l,
            } = this.props,
            c = d.A.getData()[t];
        return null != e && null != c
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      n,
                      r &&
                          (0, i.jsx)(
                              u.Y,
                              p(
                                  {
                                      autoInvert: l,
                                      position: o,
                                      tutorialId: t,
                                      tutorialDefinition: c,
                                      focused: s,
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
        n = (0, o.bG)([d.A], () => d.A.shouldShow(t), [t]),
        r = (0, o.bG)([c.A], () => c.A.isFocused()),
        a = (0, o.bG)([c.A], () => c.A.windowSize(), []);
    return (0, i.jsx)(
        m,
        h(p({}, e), {
            visible: n,
            windowFocused: r,
            windowSize: a,
        }),
    );
}
f(m, "defaultProps", {
    position: "top",
    offsetX: 0,
    offsetY: 0,
    autoInvert: !0,
});
