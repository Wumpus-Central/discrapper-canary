"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    s = n(621466),
    a = n(17928),
    o = n(531685),
    l = n(787541),
    u = n(159730),
    c = n(79858);
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
        let { position: t, offsetX: n, offsetY: i, tutorialId: r, visible: s, windowSize: a } = e;
        r !== this.props.tutorialId
            ? l.jD(r)
            : (s !== this.props.visible ||
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
                position: i,
                targetWidth: d - u,
                targetHeight: _ - o,
                autoInvert: c,
                origin: { x: u, y: o },
                offset: { x: r, y: a },
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
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      n,
                      s &&
                          (0, i.jsx)(u.Y, {
                              autoInvert: l,
                              position: o,
                              tutorialId: t,
                              tutorialDefinition: d,
                              focused: a,
                              ...e,
                          }),
                  ],
              })
            : r.Children.only(n);
    }
}
function _(e) {
    let { tutorialId: t, disabled: n } = e,
        r = (0, a.bG)([c.A], () => !n && c.A.shouldShow(t), [n, t]),
        s = (0, a.bG)([o.A], () => o.A.isFocused()),
        l = (0, a.bG)([o.A], () => o.A.windowSize(), []);
    return (0, i.jsx)(d, { ...e, visible: r, windowFocused: s, windowSize: l });
}
