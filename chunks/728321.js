var i = n(477900),
    r = n(582128),
    l = n(621466),
    s = n(855986),
    a = n(531685),
    o = n(787541),
    u = n(600160),
    d = n(179913);
class c extends r.Component {
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
        let { position: t, offsetX: n, offsetY: i, tutorialId: r, visible: l, windowSize: s } = e;
        r !== this.props.tutorialId
            ? o.jD(r)
            : (l !== this.props.visible ||
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
            visible: a,
            inlineSpecs: u,
            autoInvert: d,
        } = this.props;
        if (e && null == u) {
            let e = t?.current;
            if (!(0, l.vq)(e)) return;
            let { top: a, left: u, right: c, bottom: h } = e.getBoundingClientRect();
            o.WU(n, {
                position: i,
                targetWidth: c - u,
                targetHeight: h - a,
                autoInvert: d,
                origin: { x: u, y: a },
                offset: { x: r, y: s },
            });
        } else a && o.jD(n);
    }
    render() {
        let {
                inlineSpecs: e,
                tutorialId: t,
                children: n,
                visible: l,
                windowFocused: s,
                position: a,
                autoInvert: o,
            } = this.props,
            c = d.A.getData()[t];
        return null != e && null != c
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      n,
                      l &&
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
            : r.Children.only(n);
    }
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { tutorialId: t, disabled: n } = e,
                r = (0, s.bG)([d.A], () => !n && d.A.shouldShow(t), [n, t]),
                l = (0, s.bG)([a.A], () => a.A.isFocused()),
                o = (0, s.bG)([a.A], () => a.A.windowSize(), []);
            return (0, i.jsx)(c, { ...e, visible: r, windowFocused: l, windowSize: o });
        },
    },
);
