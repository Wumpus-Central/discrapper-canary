a.d(t, { A: () => n });
var s = a(627968),
    l = a(64700),
    r = a(134402);
class i extends l.Component {
    scrollRef = l.createRef();
    scrollTo = (e) => {
        null != this.scrollRef.current && (this.scrollRef.current.scrollTop = e);
    };
    getScrollTop = () => (null == this.scrollRef.current ? 0 : this.scrollRef.current.scrollTop);
    componentDidUpdate(e) {
        let {
            props: { location: t, shouldScrollToTop: a },
            scrollRef: { current: s },
        } = this;
        null != s && t !== e.location && (null != a ? a(this.props) && (s.scrollTop = 0) : (s.scrollTop = 0));
    }
    render() {
        let { className: e, render: t } = this.props;
        return (0, s.jsx)("div", { ref: this.scrollRef, className: e, children: t(this.scrollTo, this.getScrollTop) });
    }
}
let n = (0, r.y)(i);
