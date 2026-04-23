n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    a = n(621466),
    s = n(17928),
    _ = n(531685),
    l = n(787541),
    o = n(575486),
    E = n(79858);
class d extends r.Component {
    static defaultProps = { position: "top", offsetX: 0, offsetY: 0, autoInvert: !0 };
    componentDidMount() {
        let { visible: e, inlineSpecs: t } = this.props;
        null == t && this.show(e);
    }
    componentWillUnmount() {
        let { inlineSpecs: e } = this.props;
        null == e && this.show(!1);
    }
    componentDidUpdate(e) {
        let { position: t, offsetX: n, offsetY: i, tutorialId: r, visible: a, windowSize: s } = e;
        r !== this.props.tutorialId
            ? l.jD(r)
            : (a !== this.props.visible ||
                  t !== this.props.position ||
                  n !== this.props.offsetX ||
                  i !== this.props.offsetY ||
                  s !== this.props.windowSize) &&
              this.show(this.props.visible);
    }
    show(e) {
        let {
            childRef: t,
            tutorialId: n,
            position: i,
            offsetX: r,
            offsetY: s,
            visible: _,
            inlineSpecs: o,
            autoInvert: E,
        } = this.props;
        if (e && null == o) {
            let e = t?.current;
            if (!(0, a.vq)(e)) return;
            let { top: _, left: o, right: d, bottom: c } = e.getBoundingClientRect();
            l.WU(n, {
                position: i,
                targetWidth: d - o,
                targetHeight: c - _,
                autoInvert: E,
                origin: { x: o, y: _ },
                offset: { x: r, y: s },
            });
        } else _ && l.jD(n);
    }
    render() {
        let {
                inlineSpecs: e,
                tutorialId: t,
                children: n,
                visible: a,
                windowFocused: s,
                position: _,
                autoInvert: l,
            } = this.props,
            d = E.A.getData()[t];
        return null != e && null != d
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      n,
                      a &&
                          (0, i.jsx)(o.Y, {
                              autoInvert: l,
                              position: _,
                              tutorialId: t,
                              tutorialDefinition: d,
                              focused: s,
                              ...e,
                          }),
                  ],
              })
            : r.Children.only(n);
    }
}
function c(e) {
    let { tutorialId: t, disabled: n } = e,
        r = (0, s.bG)([E.A], () => !n && E.A.shouldShow(t), [n, t]),
        a = (0, s.bG)([_.A], () => _.A.isFocused()),
        l = (0, s.bG)([_.A], () => _.A.windowSize(), []);
    return (0, i.jsx)(d, { ...e, visible: r, windowFocused: a, windowSize: l });
}
