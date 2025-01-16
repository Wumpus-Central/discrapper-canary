var i,
    a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(748780),
    d = r(764020);
function f(e, n, r) {
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
let _ = {
        friction: 14,
        tension: 200
    },
    h = {
        DURATION: 'DURATION',
        VOLUME: 'VOLUME'
    };
function p(e) {
    let n = 0 | e,
        r = n % 60;
    return ''.concat((n - r) / 60, ':').concat(String(r).padStart(2, '0'));
}
class m extends (i = o.Component) {
    componentDidMount() {
        let { previewWidth: e, animatedProgress: n } = this.state;
        (this._previewId = e.addListener(this.handlePreviewChange)), (this._progressId = n.addListener(this.handleAnimatedChange));
    }
    componentWillUnmount() {
        let { previewWidth: e, animatedProgress: n } = this.state;
        e.removeListener(this._previewId), n.removeListener(this._progressId), window.removeEventListener('mouseup', this.handleDragEnd, !1), window.removeEventListener('mousemove', this.handleDragMove, !1);
    }
    componentDidUpdate(e, n) {
        let { dragging: r, previewWidth: i, animatedProgress: a } = this.state;
        !r && n.dragging && i.setValue(a._value);
    }
    setGrabber(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { animatedProgress: r } = this.state;
        n
            ? c.Z.spring(r, {
                  toValue: e,
                  ..._
              }).start()
            : r.setValue(e);
    }
    calculatePercentage(e, n) {
        let {
            wrapper: r,
            props: { type: i }
        } = this;
        if (null == r) return 0;
        let { left: a, width: s, bottom: o, height: l } = r.getBoundingClientRect();
        return Math.min(1, Math.max(0, i === h.VOLUME ? (o - n) / l : (e - a) / s));
    }
    render() {
        let { buffers: e, type: n, className: r, sliderClassName: i } = this.props,
            { dragging: a, previewWidth: o, animatedProgress: l } = this.state,
            f = a ? l : o;
        return (0, s.jsx)('div', {
            className: u()(r, n === h.VOLUME ? d.vertical : d.horizontal),
            children: (0, s.jsx)('div', {
                className: u()(i, a ? d.mediaBarInteractionDragging : d.mediaBarInteraction, n === h.VOLUME ? d.mediaBarInteractionVolume : null),
                onMouseDown: this.handleDragStart,
                onMouseMove: this.handleMouseMove,
                ref: (e) => (this.wrapper = e),
                children: (0, s.jsxs)('div', {
                    className: u()(d.mediaBarWrapper, n === h.VOLUME ? d.mediaBarWrapperVolume : null),
                    children: [
                        null != e
                            ? e.map((e, n) => {
                                  let [r, i] = e;
                                  return (0, s.jsx)(
                                      'div',
                                      {
                                          className: d.buffer,
                                          style: {
                                              width: ''.concat(100 * i, '%'),
                                              left: ''.concat(100 * r, '%')
                                          }
                                      },
                                      n
                                  );
                              })
                            : null,
                        n === h.DURATION
                            ? (0, s.jsx)(c.Z.div, {
                                  className: d.mediaBarPreview,
                                  style: {
                                      width: o.interpolate({
                                          inputRange: [0, 1],
                                          outputRange: ['0%', '100%']
                                      })
                                  }
                              })
                            : null,
                        (0, s.jsx)(c.Z.div, {
                            className: d.mediaBarProgress,
                            style: {
                                width: l.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0%', '100%']
                                })
                            },
                            children: (0, s.jsx)('span', { className: d.mediaBarGrabber })
                        }),
                        n === h.DURATION
                            ? (0, s.jsx)(c.Z.div, {
                                  ref: this.setBubbleRef,
                                  className: d.bubble,
                                  style: {
                                      left: f.interpolate({
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
            f(this, 'state', {
                animatedProgress: new c.Z.Value(0),
                dragging: !1,
                offsetLeft: 0,
                offsetWidth: 0,
                previewWidth: new c.Z.Value(0)
            }),
            f(this, 'wrapper', void 0),
            f(this, 'bubble', void 0),
            f(this, '_previewId', void 0),
            f(this, '_progressId', void 0),
            f(this, 'handlePreviewChange', () => {
                let {
                    bubble: e,
                    state: { dragging: n, previewWidth: r },
                    props: { value: i }
                } = this;
                if (!n && null != e) e.innerText = p(r._value * i);
            }),
            f(this, 'handleAnimatedChange', () => {
                let {
                    bubble: e,
                    state: { dragging: n, animatedProgress: r },
                    props: { value: i }
                } = this;
                if (!!n && null != e) e.innerText = p(r._value * i);
            }),
            f(this, 'handleMouseMove', (e) => {
                let { dragging: n, previewWidth: r } = this.state;
                if (n) return;
                let { clientX: i, clientY: a } = e;
                r.setValue(this.calculatePercentage(i, a));
            }),
            f(this, 'handleDragMove', (e) => {
                let { onDrag: n, type: r } = this.props,
                    { clientX: i, clientY: a } = e;
                n(this.calculatePercentage(i, a), r);
            }),
            f(this, 'handleDragStart', (e) => {
                let { onDragStart: n, onDrag: r, type: i, currentWindow: a } = this.props,
                    { clientX: s, clientY: o } = e;
                if ((e.preventDefault(), null == this.wrapper)) return;
                let { left: l, width: u } = this.wrapper.getBoundingClientRect();
                this.setState(
                    {
                        dragging: !0,
                        offsetLeft: l,
                        offsetWidth: u
                    },
                    () => {
                        n(i), r(this.calculatePercentage(s, o), i), a.removeEventListener('mouseup', this.handleDragEnd, !1), a.removeEventListener('mousemove', this.handleDragMove, !1), a.addEventListener('mouseup', this.handleDragEnd, !1), a.addEventListener('mousemove', this.handleDragMove, !1);
                    }
                );
            }),
            f(this, 'handleDragEnd', () => {
                let { onDragEnd: e, currentWindow: n } = this.props;
                e(), n.removeEventListener('mouseup', this.handleDragEnd, !1), n.removeEventListener('mousemove', this.handleDragMove, !1), this.setState({ dragging: !1 });
            }),
            f(this, 'setBubbleRef', (e) => {
                null == e ? (this.bubble = null) : null != e.componentRef ? (this.bubble = e.componentRef) : null != e.refs && (this.bubble = e.refs.node);
            });
    }
}
f(m, 'Types', h), f(m, 'defaultProps', { currentWindow: window }), (n.Z = m);
