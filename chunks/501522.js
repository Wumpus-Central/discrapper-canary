a(47120);
var n = a(200651),
    s = a(192379),
    i = a(332009);
function r(e, t, a) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = a),
        e
    );
}
class l extends s.Component {
    componentDidUpdate(e) {
        let {
            props: { location: t, shouldScrollToTop: a },
            scrollRef: { current: n }
        } = this;
        if (null != n) t !== e.location && (null != a ? a(this.props) && (n.scrollTop = 0) : (n.scrollTop = 0));
    }
    render() {
        let { className: e, render: t } = this.props;
        return (0, n.jsx)('div', {
            ref: this.scrollRef,
            className: e,
            children: t(this.scrollTo, this.getScrollTop)
        });
    }
    constructor(...e) {
        super(...e),
            r(this, 'scrollRef', s.createRef()),
            r(this, 'scrollTo', (e) => {
                null != this.scrollRef.current && (this.scrollRef.current.scrollTop = e);
            }),
            r(this, 'getScrollTop', () => (null == this.scrollRef.current ? 0 : this.scrollRef.current.scrollTop));
    }
}
t.Z = (0, i.EN)(l);
