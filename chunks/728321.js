"use strict";
n.d(t, { A: () => _ });
var i = n(477900),
    r = n(582128),
    a = n(621466),
    s = n(17928),
    l = n(531685),
    o = n(787541),
    d = n(159730),
    c = n(79858);
class u extends r.Component {
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
            ? o.jD(r)
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
            visible: l,
            inlineSpecs: d,
            autoInvert: c,
        } = this.props;
        if (e && null == d) {
            let e = t?.current;
            if (!(0, a.vq)(e)) return;
            let { top: l, left: d, right: u, bottom: _ } = e.getBoundingClientRect();
            o.WU(n, {
                position: i,
                targetWidth: u - d,
                targetHeight: _ - l,
                autoInvert: c,
                origin: { x: d, y: l },
                offset: { x: r, y: s },
            });
        } else l && o.jD(n);
    }
    render() {
        let {
                inlineSpecs: e,
                tutorialId: t,
                children: n,
                visible: a,
                windowFocused: s,
                position: l,
                autoInvert: o,
            } = this.props,
            u = c.A.getData()[t];
        return null != e && null != u
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      n,
                      a &&
                          (0, i.jsx)(d.Y, {
                              autoInvert: o,
                              position: l,
                              tutorialId: t,
                              tutorialDefinition: u,
                              focused: s,
                              ...e,
                          }),
                  ],
              })
            : r.Children.only(n);
    }
}
function _(e) {
    let { tutorialId: t, disabled: n } = e,
        r = (0, s.bG)([c.A], () => !n && c.A.shouldShow(t), [n, t]),
        a = (0, s.bG)([l.A], () => l.A.isFocused()),
        o = (0, s.bG)([l.A], () => l.A.windowSize(), []);
    return (0, i.jsx)(u, { ...e, visible: r, windowFocused: a, windowSize: o });
}
