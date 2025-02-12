n.d(t, { Z: () => h }), n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(748780),
    u = n(325955);
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
let d = {
        friction: 14,
        tension: 200
    },
    f = {
        DURATION: 'DURATION',
        VOLUME: 'VOLUME'
    };
function _(e) {
    let t = 0 | e,
        n = t % 60;
    return ''.concat((t - n) / 60, ':').concat(String(n).padStart(2, '0'));
}
class p extends (i = a.Component) {
    componentDidMount() {
        let { previewWidth: e, animatedProgress: t } = this.state;
        (this._previewId = e.addListener(this.handlePreviewChange)), (this._progressId = t.addListener(this.handleAnimatedChange));
    }
    componentWillUnmount() {
        let { previewWidth: e, animatedProgress: t } = this.state;
        e.removeListener(this._previewId), t.removeListener(this._progressId), window.removeEventListener('mouseup', this.handleDragEnd, !1), window.removeEventListener('mousemove', this.handleDragMove, !1);
    }
    componentDidUpdate(e, t) {
        let { dragging: n, previewWidth: i, animatedProgress: r } = this.state;
        !n && t.dragging && i.setValue(r._value);
    }
    setGrabber(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { animatedProgress: n } = this.state;
        t
            ? l.Z.spring(n, {
                  toValue: e,
                  ...d
              }).start()
            : n.setValue(e);
    }
    calculatePercentage(e, t) {
        let {
            wrapper: n,
            props: { type: i }
        } = this;
        if (null == n) return 0;
        let { left: r, width: a, bottom: s, height: o } = n.getBoundingClientRect();
        return Math.min(1, Math.max(0, i === f.VOLUME ? (s - t) / o : (e - r) / a));
    }
    render() {
        let { buffers: e, type: t, className: n, sliderClassName: i } = this.props,
            { dragging: a, previewWidth: s, animatedProgress: c } = this.state,
            d = a ? c : s;
        return (0, r.jsx)('div', {
            className: o()(n, t === f.VOLUME ? u.vertical : u.horizontal),
            children: (0, r.jsx)('div', {
                className: o()(i, a ? u.mediaBarInteractionDragging : u.mediaBarInteraction, t === f.VOLUME ? u.mediaBarInteractionVolume : null),
                onMouseDown: this.handleDragStart,
                onMouseMove: this.handleMouseMove,
                ref: (e) => (this.wrapper = e),
                children: (0, r.jsxs)('div', {
                    className: o()(u.mediaBarWrapper, t === f.VOLUME ? u.mediaBarWrapperVolume : null),
                    children: [
                        null != e
                            ? e.map((e, t) => {
                                  let [n, i] = e;
                                  return (0, r.jsx)(
                                      'div',
                                      {
                                          className: u.buffer,
                                          style: {
                                              width: ''.concat(100 * i, '%'),
                                              left: ''.concat(100 * n, '%')
                                          }
                                      },
                                      t
                                  );
                              })
                            : null,
                        t === f.DURATION
                            ? (0, r.jsx)(l.Z.div, {
                                  className: u.mediaBarPreview,
                                  style: {
                                      width: s.interpolate({
                                          inputRange: [0, 1],
                                          outputRange: ['0%', '100%']
                                      })
                                  }
                              })
                            : null,
                        (0, r.jsx)(l.Z.div, {
                            className: u.mediaBarProgress,
                            style: {
                                width: c.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0%', '100%']
                                })
                            },
                            children: (0, r.jsx)('span', { className: u.mediaBarGrabber })
                        }),
                        t === f.DURATION
                            ? (0, r.jsx)(l.Z.div, {
                                  ref: this.setBubbleRef,
                                  className: u.bubble,
                                  style: {
                                      left: d.interpolate({
                                          inputRange: [0, 1],
                                          outputRange: ['0%', '100%']
                                      })
                                  }
                              })
                            : null
                    ]
                })
            })
        });
    }
    constructor(...e) {
        super(...e),
            c(this, 'state', {
                animatedProgress: new l.Z.Value(0),
                dragging: !1,
                offsetLeft: 0,
                offsetWidth: 0,
                previewWidth: new l.Z.Value(0)
            }),
            c(this, 'wrapper', void 0),
            c(this, 'bubble', void 0),
            c(this, '_previewId', void 0),
            c(this, '_progressId', void 0),
            c(this, 'handlePreviewChange', () => {
                let {
                    bubble: e,
                    state: { dragging: t, previewWidth: n },
                    props: { value: i }
                } = this;
                !t && null != e && (e.innerText = _(n._value * i));
            }),
            c(this, 'handleAnimatedChange', () => {
                let {
                    bubble: e,
                    state: { dragging: t, animatedProgress: n },
                    props: { value: i }
                } = this;
                t && null != e && (e.innerText = _(n._value * i));
            }),
            c(this, 'handleMouseMove', (e) => {
                let { dragging: t, previewWidth: n } = this.state;
                if (t) return;
                let { clientX: i, clientY: r } = e;
                n.setValue(this.calculatePercentage(i, r));
            }),
            c(this, 'handleDragMove', (e) => {
                let { onDrag: t, type: n } = this.props,
                    { clientX: i, clientY: r } = e;
                t(this.calculatePercentage(i, r), n);
            }),
            c(this, 'handleDragStart', (e) => {
                let { onDragStart: t, onDrag: n, type: i, currentWindow: r } = this.props,
                    { clientX: a, clientY: s } = e;
                if ((e.preventDefault(), null == this.wrapper)) return;
                let { left: o, width: l } = this.wrapper.getBoundingClientRect();
                this.setState(
                    {
                        dragging: !0,
                        offsetLeft: o,
                        offsetWidth: l
                    },
                    () => {
                        t(i), n(this.calculatePercentage(a, s), i), r.removeEventListener('mouseup', this.handleDragEnd, !1), r.removeEventListener('mousemove', this.handleDragMove, !1), r.addEventListener('mouseup', this.handleDragEnd, !1), r.addEventListener('mousemove', this.handleDragMove, !1);
                    }
                );
            }),
            c(this, 'handleDragEnd', () => {
                let { onDragEnd: e, currentWindow: t } = this.props;
                e(), t.removeEventListener('mouseup', this.handleDragEnd, !1), t.removeEventListener('mousemove', this.handleDragMove, !1), this.setState({ dragging: !1 });
            }),
            c(this, 'setBubbleRef', (e) => {
                null == e ? (this.bubble = null) : null != e.componentRef ? (this.bubble = e.componentRef) : null != e.refs && (this.bubble = e.refs.node);
            });
    }
}
c(p, 'Types', f), c(p, 'defaultProps', { currentWindow: window });
let h = p;
