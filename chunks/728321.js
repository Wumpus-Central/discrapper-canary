"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(621466),
    a = n(311907),
    o = n(531685),
    l = n(787541),
    u = n(575486),
    c = n(482361);
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
        let { position: t, offsetX: n, offsetY: r, tutorialId: i, visible: s, windowSize: a } = e;
        i !== this.props.tutorialId
            ? l.jD(i)
            : (s !== this.props.visible ||
                  t !== this.props.position ||
                  n !== this.props.offsetX ||
                  r !== this.props.offsetY ||
                  a !== this.props.windowSize) &&
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
            inlineSpecs: u,
            autoInvert: c,
        } = this.props;
        if (e && null == u) {
            let e = t?.current;
            if (!(0, s.vq)(e)) return;
            let { top: o, left: u, right: d, bottom: _ } = e.getBoundingClientRect();
            l.WU(n, {
                position: r,
                targetWidth: d - u,
                targetHeight: _ - o,
                autoInvert: c,
                origin: { x: u, y: o },
                offset: { x: i, y: a },
            });
        } else o && l.jD(n);
    }
    render() {
        let {
                inlineSpecs: e,
                tutorialId: t,
                children: n,
                visible: s,
                windowFocused: a,
                position: o,
                autoInvert: l,
            } = this.props,
            d = c.A.getData()[t];
        return null != e && null != d
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      n,
                      s &&
                          (0, r.jsx)(u.Y, {
                              autoInvert: l,
                              position: o,
                              tutorialId: t,
                              tutorialDefinition: d,
                              focused: a,
                              ...e,
                          }),
                  ],
              })
            : i.Children.only(n);
    }
}
function _(e) {
    let { tutorialId: t, disabled: n } = e,
        i = (0, a.bG)([c.A], () => !n && c.A.shouldShow(t), [n, t]),
        s = (0, a.bG)([o.A], () => o.A.isFocused()),
        l = (0, a.bG)([o.A], () => o.A.windowSize(), []);
    return (0, r.jsx)(d, { ...e, visible: i, windowFocused: s, windowSize: l });
}
