n.d(t, { Z: () => f }), n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(640103);
function c(e, t, n) {
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
class d extends (r = o.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        let { streamId: n } = e;
        if (t.aReady) {
            if (n !== t.aStreamId)
                if (null == n)
                    return {
                        bStreamId: n,
                        bReady: !0,
                        aStreamId: null,
                        aReady: !1
                    };
                else
                    return {
                        bStreamId: n,
                        bReady: !1
                    };
        } else if (n !== t.bStreamId)
            if (null == n)
                return {
                    aStreamId: n,
                    aReady: !0,
                    bStreamId: null,
                    bReady: !1
                };
            else
                return {
                    aStreamId: n,
                    aReady: !1
                };
        return null;
    }
    renderVideo(e, t) {
        let { children: n, mirror: r, paused: a, component: s } = this.props;
        if (null == e) {
            if (null == n) return null;
            let e = o.Children.only(n);
            return o.cloneElement(e, u({ style: { display: t && !r ? void 0 : 'none' } }, e.props));
        }
        return (0, i.jsx)(s, {
            paused: a,
            className: l.media,
            streamId: e,
            onReady: t ? null : this.handleReady
        });
    }
    render() {
        let { mirror: e, className: t } = this.props;
        return (0, i.jsxs)('div', {
            className: s()(l.video, t, { [l.mirror]: e }),
            onDoubleClick: this.handleDoubleClick,
            onContextMenu: this.handleContextMenu,
            children: [this.renderVideo(this.state.aStreamId, this.state.aReady), this.renderVideo(this.state.bStreamId, this.state.bReady)]
        });
    }
    constructor(...e) {
        super(...e),
            c(this, 'state', {
                aStreamId: null,
                aReady: !1,
                bStreamId: this.props.streamId,
                bReady: !0
            }),
            c(this, 'handleReady', () => {
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
            c(this, 'handleDoubleClick', (e) => {
                let { onDoubleClick: t, id: n } = this.props;
                null == t || t(e, n);
            }),
            c(this, 'handleContextMenu', (e) => {
                let { onContextMenu: t, id: n } = this.props;
                null == t || t(e, n);
            });
    }
}
c(d, 'defaultProps', { paused: !0 });
let f = d;
