a.d(t, {
    A: () => o,
}),
    a(896048);
var s = a(627968),
    l = a(64700),
    r = a(134402);

function n(e, t, a) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = a),
        e
    );
}
class i extends l.Component {
    componentDidUpdate(e) {
        let {
            props: { location: t, shouldScrollToTop: a },
            scrollRef: { current: s },
        } = this;
        null != s && t !== e.location && (null != a ? a(this.props) && (s.scrollTop = 0) : (s.scrollTop = 0));
    }
    render() {
        let { className: e, render: t } = this.props;
        return (0, s.jsx)("div", {
            ref: this.scrollRef,
            className: e,
            children: t(this.scrollTo, this.getScrollTop),
        });
    }
    constructor(...e) {
        super(...e),
            n(this, "scrollRef", l.createRef()),
            n(this, "scrollTo", (e) => {
                null != this.scrollRef.current && (this.scrollRef.current.scrollTop = e);
            }),
            n(this, "getScrollTop", () => (null == this.scrollRef.current ? 0 : this.scrollRef.current.scrollTop));
    }
}
let o = (0, r.y)(i);
