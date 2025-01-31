n.d(t, { Z: () => d }), n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(934158);
function u(e, t, n) {
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
class c extends (i = a.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        let { streamId: n } = e;
        if (t.aReady) {
            if (n !== t.aStreamId)
                return null == n
                    ? {
                          bStreamId: n,
                          bReady: !0,
                          aStreamId: null,
                          aReady: !1
                      }
                    : {
                          bStreamId: n,
                          bReady: !1
                      };
        } else if (n !== t.bStreamId)
            return null == n
                ? {
                      aStreamId: n,
                      aReady: !0,
                      bStreamId: null,
                      bReady: !1
                  }
                : {
                      aStreamId: n,
                      aReady: !1
                  };
        return null;
    }
    renderVideo(e, t) {
        let { children: n, mirror: i, paused: s, component: o } = this.props;
        if (null == e) {
            if (null == n) return null;
            let e = a.Children.only(n);
            return a.cloneElement(e, {
                style: { display: t && !i ? void 0 : 'none' },
                ...e.props
            });
        }
        return (0, r.jsx)(o, {
            paused: s,
            className: l.media,
            streamId: e,
            onReady: t ? null : this.handleReady
        });
    }
    render() {
        let { mirror: e, className: t } = this.props;
        return (0, r.jsxs)('div', {
            className: o()(l.video, t, { [l.mirror]: e }),
            onDoubleClick: this.handleDoubleClick,
            onContextMenu: this.handleContextMenu,
            children: [this.renderVideo(this.state.aStreamId, this.state.aReady), this.renderVideo(this.state.bStreamId, this.state.bReady)]
        });
    }
    constructor(...e) {
        super(...e),
            u(this, 'state', {
                aStreamId: null,
                aReady: !1,
                bStreamId: this.props.streamId,
                bReady: !0
            }),
            u(this, 'handleReady', () => {
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
            u(this, 'handleDoubleClick', (e) => {
                let { onDoubleClick: t, id: n } = this.props;
                null == t || t(e, n);
            }),
            u(this, 'handleContextMenu', (e) => {
                let { onContextMenu: t, id: n } = this.props;
                null == t || t(e, n);
            });
    }
}
u(c, 'defaultProps', { paused: !0 });
let d = c;
