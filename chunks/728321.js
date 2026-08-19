"use strict";
n.d(t, { A: () => h });
var l = n(477900),
    i = n(582128),
    s = n(621466),
    r = n(17928),
    a = n(531685),
    o = n(787541),
    u = n(159730),
    c = n(79858);
class d extends i.Component {
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
        let { position: t, offsetX: n, offsetY: l, tutorialId: i, visible: s, windowSize: r } = e;
        i !== this.props.tutorialId
            ? o.jD(i)
            : (s !== this.props.visible ||
                  t !== this.props.position ||
                  n !== this.props.offsetX ||
                  l !== this.props.offsetY ||
                  r !== this.props.windowSize) &&
              this.show(this.props.visible);
    }
    show(e) {
        let {
            childRef: t,
            tutorialId: n,
            position: l,
            offsetX: i,
            offsetY: r,
            visible: a,
            inlineSpecs: u,
            autoInvert: c,
        } = this.props;
        if (e && null == u) {
            let e = t?.current;
            if (!(0, s.vq)(e)) return;
            let { top: a, left: u, right: d, bottom: h } = e.getBoundingClientRect();
            o.WU(n, {
                position: l,
                targetWidth: d - u,
                targetHeight: h - a,
                autoInvert: c,
                origin: { x: u, y: a },
                offset: { x: i, y: r },
            });
        } else a && o.jD(n);
    }
    render() {
        let {
                inlineSpecs: e,
                tutorialId: t,
                children: n,
                visible: s,
                windowFocused: r,
                position: a,
                autoInvert: o,
            } = this.props,
            d = c.A.getData()[t];
        return null != e && null != d
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      n,
                      s &&
                          (0, l.jsx)(u.Y, {
                              autoInvert: o,
                              position: a,
                              tutorialId: t,
                              tutorialDefinition: d,
                              focused: r,
                              ...e,
                          }),
                  ],
              })
            : i.Children.only(n);
    }
}
function h(e) {
    let { tutorialId: t, disabled: n } = e,
        i = (0, r.bG)([c.A], () => !n && c.A.shouldShow(t), [n, t]),
        s = (0, r.bG)([a.A], () => a.A.isFocused()),
        o = (0, r.bG)([a.A], () => a.A.windowSize(), []);
    return (0, l.jsx)(d, { ...e, visible: i, windowFocused: s, windowSize: o });
}
