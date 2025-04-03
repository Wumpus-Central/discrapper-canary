i.d(e, { Z: () => p }), i(47120);
var s,
    n = i(200651),
    a = i(192379),
    h = i(120356),
    r = i.n(h),
    o = i(748780),
    l = i(481060),
    d = i(981631),
    c = i(464425);
function u(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = i),
        t
    );
}
class p extends (s = a.Component) {
    componentDidMount() {
        this.props.show && this.animate(1);
    }
    componentDidUpdate(t) {
        t.show !== this.props.show && this.animate(+!!this.props.show);
    }
    getAnimatedStyle() {
        let { anim: t } = this,
            { reducedMotion: e } = this.context;
        return {
            opacity: t,
            transform: e.enabled
                ? void 0
                : [
                      {
                          translateY: t.interpolate({
                              inputRange: [0, 1],
                              outputRange: ['-100px', '0px']
                          })
                      },
                      { translateZ: 0 }
                  ]
        };
    }
    render() {
        return (0, n.jsx)(o.Z.a, {
            href: d.Z5c.INDEX,
            target: '_blank',
            rel: 'noopener',
            className: r()(c.logo, this.props.className),
            style: this.getAnimatedStyle()
        });
    }
    constructor(...t) {
        super(...t),
            u(this, 'anim', new o.Z.Value(0)),
            u(this, 'animate', (t) => {
                o.Z.spring(this.anim, {
                    toValue: t,
                    friction: 10,
                    tension: 100
                }).start();
            });
    }
}
u(p, 'contextType', l.Sfi);
