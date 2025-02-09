s.d(t, { Z: () => l }), s(47120);
var a = s(200651),
    n = s(192379),
    i = s(332009);
function r(e, t, s) {
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
        null != a && t !== e.location && (null != s ? s(this.props) && (a.scrollTop = 0) : (a.scrollTop = 0));
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
            r(this, 'scrollRef', n.createRef()),
            r(this, 'scrollTo', (e) => {
                null != this.scrollRef.current && (this.scrollRef.current.scrollTop = e);
            }),
            r(this, 'getScrollTop', () => (null == this.scrollRef.current ? 0 : this.scrollRef.current.scrollTop));
    }
}
let l = (0, i.EN)(o);
