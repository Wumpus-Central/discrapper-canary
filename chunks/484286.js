var i,
    a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(934158);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class f extends (i = o.PureComponent) {
    static getDerivedStateFromProps(e, n) {
        let { streamId: r } = e;
        if (n.aReady) {
            if (r !== n.aStreamId)
                return null == r
                    ? {
                          bStreamId: r,
                          bReady: !0,
                          aStreamId: null,
                          aReady: !1
                      }
                    : {
                          bStreamId: r,
                          bReady: !1
                      };
        } else if (r !== n.bStreamId)
            return null == r
                ? {
                      aStreamId: r,
                      aReady: !0,
                      bStreamId: null,
                      bReady: !1
                  }
                : {
                      aStreamId: r,
                      aReady: !1
                  };
        return null;
    }
    renderVideo(e, n) {
        let { children: r, mirror: i, paused: a, component: l } = this.props;
        if (null == e) {
            if (null == r) return null;
            let e = o.Children.only(r);
            return o.cloneElement(e, {
                style: { display: n && !i ? void 0 : 'none' },
                ...e.props
            });
        }
        return (0, s.jsx)(l, {
            paused: a,
            className: c.media,
            streamId: e,
            onReady: n ? null : this.handleReady
        });
    }
    render() {
        let { mirror: e, className: n } = this.props;
        return (0, s.jsxs)('div', {
            className: u()(c.video, n, { [c.mirror]: e }),
            onDoubleClick: this.handleDoubleClick,
            onContextMenu: this.handleContextMenu,
            children: [this.renderVideo(this.state.aStreamId, this.state.aReady), this.renderVideo(this.state.bStreamId, this.state.bReady)]
        });
    }
    constructor(...e) {
        super(...e),
            d(this, 'state', {
                aStreamId: null,
                aReady: !1,
                bStreamId: this.props.streamId,
                bReady: !0
            }),
            d(this, 'handleReady', () => {
                this.state.aReady
                    ? this.setState({
                          bReady: !0,
                          aStreamId: null,
                          aReady: !1
                      })
                    : this.setState({
                          aReady: !0,
                          bStreamId: null,
                          bReady: !1
                      });
            }),
            d(this, 'handleDoubleClick', (e) => {
                let { onDoubleClick: n, id: r } = this.props;
                null == n || n(e, r);
            }),
            d(this, 'handleContextMenu', (e) => {
                let { onContextMenu: n, id: r } = this.props;
                null == n || n(e, r);
            });
    }
}
d(f, 'defaultProps', { paused: !0 }), (n.Z = f);
