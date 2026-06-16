"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(34904);
class l extends r.PureComponent {
    static defaultProps = { paused: !0 };
    state = { aStreamId: null, aReady: !1, bStreamId: this.props.streamId, bReady: !0 };
    handleReady = () => {
        this.state.aReady
            ? this.setState({ bReady: !0, aStreamId: null, aReady: !1 })
            : this.setState({ aReady: !0, bStreamId: null, bReady: !1 });
    };
    static getDerivedStateFromProps(e, t) {
        let { streamId: n } = e;
        if (t.aReady) {
            if (n !== t.aStreamId)
                if (null == n) return { bStreamId: n, bReady: !0, aStreamId: null, aReady: !1 };
                else return { bStreamId: n, bReady: !1 };
        } else if (n !== t.bStreamId)
            if (null == n) return { aStreamId: n, aReady: !0, bStreamId: null, bReady: !1 };
            else return { aStreamId: n, aReady: !1 };
        return null;
    }
    renderVideo(e, t) {
        let { children: n, mirror: s, paused: a, component: l } = this.props;
        if (null == e) {
            if (null == n) return null;
            let e = r.Children.only(n);
            return r.cloneElement(e, { style: { display: t && !s ? void 0 : "none" }, ...e.props });
        }
        return (0, i.jsx)(l, { paused: a, className: o.$_, streamId: e, onReady: t ? null : this.handleReady });
    }
    render() {
        let { mirror: e, className: t } = this.props;
        return (0, i.jsxs)("div", {
            className: a()(o.Ki, t, { [o.e7]: e }),
            onDoubleClick: this.handleDoubleClick,
            onContextMenu: this.handleContextMenu,
            children: [
                this.renderVideo(this.state.aStreamId, this.state.aReady),
                this.renderVideo(this.state.bStreamId, this.state.bReady),
            ],
        });
    }
    handleDoubleClick = (e) => {
        let { onDoubleClick: t, id: n } = this.props;
        t?.(e, n);
    };
    handleContextMenu = (e) => {
        let { onContextMenu: t, id: n } = this.props;
        t?.(e, n);
    };
}
let u = l;
