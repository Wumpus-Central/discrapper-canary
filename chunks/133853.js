n.d(t, { Z: () => p }), n(388685);
var r,
    a = n(54381),
    i = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(748780),
    c = n(481060),
    d = n(981631),
    u = n(816716);
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
class p extends (r = i.Component) {
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
        return (0, a.jsx)(l.Z.a, {
            href: d.Z5c.INDEX,
            target: "_blank",
            rel: "noopener",
            className: s()(u.logo, this.props.className),
            style: this.getAnimatedStyle(),
        });
    }
    constructor(...e) {
        super(...e),
            f(this, "anim", new l.Z.Value(0)),
            f(this, "animate", (e) => {
                l.Z.spring(this.anim, {
                    toValue: e,
                    friction: 10,
                    tension: 100,
                }).start();
            });
    }
}
f(p, "contextType", c.Sfi);
