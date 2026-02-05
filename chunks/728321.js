"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(621466),
    s = n(311907),
    o = n(166649),
    l = n(531685),
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
        let { position: t, offsetX: n, offsetY: r, tutorialId: i, visible: a, windowSize: s } = e;
        i !== this.props.tutorialId
            ? o.A.hide(i)
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
            offsetY: s,
            visible: l,
            inlineSpecs: u,
            autoInvert: c,
        } = this.props;
        if (e && null == u) {
            let e = t?.current;
            if (!(0, a.vq)(e)) return;
            let { top: l, left: u, right: d, bottom: _ } = e.getBoundingClientRect();
            o.A.show(n, {
                position: r,
                targetWidth: d - u,
                targetHeight: _ - l,
                autoInvert: c,
                origin: { x: u, y: l },
                offset: { x: i, y: s },
            });
        } else l && o.A.hide(n);
    }
    render() {
        let {
                inlineSpecs: e,
                tutorialId: t,
                children: n,
                visible: a,
                windowFocused: s,
                position: o,
                autoInvert: l,
            } = this.props,
            d = c.A.getData()[t];
        return null != e && null != d
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      n,
                      a &&
                          (0, r.jsx)(u.Y, {
                              autoInvert: l,
                              position: o,
                              tutorialId: t,
                              tutorialDefinition: d,
                              focused: s,
                              ...e,
                          }),
                  ],
              })
            : i.Children.only(n);
    }
}
function _(e) {
    let { tutorialId: t } = e,
        n = (0, s.bG)([c.A], () => c.A.shouldShow(t), [t]),
        i = (0, s.bG)([l.A], () => l.A.isFocused()),
        a = (0, s.bG)([l.A], () => l.A.windowSize(), []);
    return (0, r.jsx)(d, { ...e, visible: n, windowFocused: i, windowSize: a });
}
