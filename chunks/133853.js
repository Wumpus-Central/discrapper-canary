n.d(t, { Z: () => p }), n(388685);
var a,
    r = n(54381),
    o = n(473749),
    i = n(120356),
    s = n.n(i),
    c = n(748780),
    l = n(481060),
    d = n(981631),
    u = n(827954);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class p extends (a = o.Component) {
    componentDidMount() {
        this.props.show && this.animate(1);
    }
    componentDidUpdate(e) {
        e.show !== this.props.show && this.animate(+!!this.props.show);
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
                              outputRange: ["-100px", "0px"],
                          }),
                      },
                      { translateZ: 0 },
                  ],
        };
    }
    render() {
        return (0, r.jsx)(c.Z.a, {
            href: d.Z5c.INDEX,
            target: "_blank",
            rel: "noopener",
            className: s()(u.logo, this.props.className),
            style: this.getAnimatedStyle(),
        });
    }
    constructor(...e) {
        super(...e),
            f(this, "anim", new c.Z.Value(0)),
            f(this, "animate", (e) => {
                c.Z.spring(this.anim, {
                    toValue: e,
                    friction: 10,
                    tension: 100,
                }).start();
            });
    }
}
f(p, "contextType", l.Sfi);
