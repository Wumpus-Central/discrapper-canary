s(47120);
var a = s(200651),
    n = s(192379),
    r = s(332009);
function i(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
class o extends n.Component {
    componentDidUpdate(e) {
        let {
            props: { location: t, shouldScrollToTop: s },
            scrollRef: { current: a }
        } = this;
        if (null != a) t !== e.location && (null != s ? s(this.props) && (a.scrollTop = 0) : (a.scrollTop = 0));
    }
    render() {
        let { className: e, render: t } = this.props;
        return (0, a.jsx)('div', {
            ref: this.scrollRef,
            className: e,
            children: t(this.scrollTo, this.getScrollTop)
        });
    }
    constructor(...e) {
        super(...e),
            i(this, 'scrollRef', n.createRef()),
            i(this, 'scrollTo', (e) => {
                null != this.scrollRef.current && (this.scrollRef.current.scrollTop = e);
            }),
            i(this, 'getScrollTop', () => (null == this.scrollRef.current ? 0 : this.scrollRef.current.scrollTop));
    }
}
t.Z = (0, r.EN)(o);
