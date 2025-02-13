n.d(t, { Z: () => h }), n(47120);
var a,
    r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(748780),
    c = n(481060),
    d = n(981631),
    u = n(293419);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class h extends (a = o.Component) {
    componentDidMount() {
        this.props.show && this.animate(1);
    }
    componentDidUpdate(e) {
        e.show !== this.props.show && this.animate(this.props.show ? 1 : 0);
    }
    getAnimatedStyle() {
        let { anim: e } = this,
            { reducedMotion: t } = this.context;
        return {
            opacity: e,
            transform: t.enabled
                ? void 0
                : [
                      {
                          translateY: e.interpolate({
                              inputRange: [0, 1],
                              outputRange: ['-100px', '0px']
                          })
                      },
                      { translateZ: 0 }
                  ]
        };
    }
    render() {
        return (0, r.jsx)(s.Z.a, {
            href: d.Z5c.INDEX,
            target: '_blank',
            rel: 'noopener',
            className: l()(u.logo, this.props.className),
            style: this.getAnimatedStyle()
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'anim', new s.Z.Value(0)),
            f(this, 'animate', (e) => {
                s.Z.spring(this.anim, {
                    toValue: e,
                    friction: 10,
                    tension: 100
                }).start();
            });
    }
}
f(h, 'contextType', c.Sfi);
