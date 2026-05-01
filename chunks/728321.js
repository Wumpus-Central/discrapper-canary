n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    r = n(621466),
    s = n(17928),
    a = n(531685),
    o = n(787541),
    u = n(575486),
    d = n(79858);
class c extends l.Component {
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
        let { position: t, offsetX: n, offsetY: i, tutorialId: l, visible: r, windowSize: s } = e;
        l !== this.props.tutorialId
            ? o.jD(l)
            : (r !== this.props.visible ||
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
            offsetX: l,
            offsetY: s,
            visible: a,
            inlineSpecs: u,
            autoInvert: d,
        } = this.props;
        if (e && null == u) {
            let e = t?.current;
            if (!(0, r.vq)(e)) return;
            let { top: a, left: u, right: c, bottom: h } = e.getBoundingClientRect();
            o.WU(n, {
                position: i,
                targetWidth: c - u,
                targetHeight: h - a,
                autoInvert: d,
                origin: { x: u, y: a },
                offset: { x: l, y: s },
            });
        } else a && o.jD(n);
    }
    render() {
        let {
                inlineSpecs: e,
                tutorialId: t,
                children: n,
                visible: r,
                windowFocused: s,
                position: a,
                autoInvert: o,
            } = this.props,
            c = d.A.getData()[t];
        return null != e && null != c
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      n,
                      r &&
                          (0, i.jsx)(u.Y, {
                              autoInvert: o,
                              position: a,
                              tutorialId: t,
                              tutorialDefinition: c,
                              focused: s,
                              ...e,
                          }),
                  ],
              })
            : l.Children.only(n);
    }
}
function h(e) {
    let { tutorialId: t, disabled: n } = e,
        l = (0, s.bG)([d.A], () => !n && d.A.shouldShow(t), [n, t]),
        r = (0, s.bG)([a.A], () => a.A.isFocused()),
        o = (0, s.bG)([a.A], () => a.A.windowSize(), []);
    return (0, i.jsx)(c, { ...e, visible: l, windowFocused: r, windowSize: o });
}
