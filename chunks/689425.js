var i,
    a = r(200651),
    s = r(192379),
    o = r(995295),
    l = r(748780),
    u = r(513431),
    c = r(981631);
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
let f = (e, n) => {
        let { x: r, y: i } = e,
            { x: a, y: s } = n;
        return Math.pow(r - a, 2) + Math.pow(i - s, 2);
    },
    _ = Math.pow(3, 2);
class h extends (i = s.PureComponent) {
    componentDidMount() {
        let { initialX: e, initialY: n } = this.props;
        this.setPosition(e, n);
    }
    componentWillUnmount() {
        this._removeListeners();
    }
    animateToPosition(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = arguments.length > 3 ? arguments[3] : void 0,
            a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
        a && this.grabDimensions();
        let s = this.translate(e, n);
        l.Z.spring(this.state.position, {
            toValue: {
                x: s.x,
                y: s.y
            },
            ...r
        }).start(i);
    }
    setPosition(e, n) {
        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        r && this.grabDimensions();
        let i = this.translate(e, n);
        this.state.position.setValue({
            x: i.x,
            y: i.y
        });
    }
    grabDimensions() {
        let e = (0, o.findDOMNode)(this._ref);
        (0, u.k)(e) && ((this._height = e.clientHeight), (this._width = e.clientWidth));
    }
    translate(e, n) {
        let { maxX: r, maxY: i } = this.props;
        return (
            e < 0 ? (e = 0) : e > r - this._width && (e = r - this._width),
            n < 0 ? (n = 0) : n > i - this._height && (n = i - this._height),
            {
                x: e,
                y: n
            }
        );
    }
    render() {
        let { dragging: e, position: n } = this.state,
            { className: r, children: i } = this.props,
            s = [0, 1],
            o = ['0px', '1px'],
            u = l.Z.accelerate({
                pointerEvents: e ? 'none' : 'auto',
                transform: [
                    {
                        translateX: n.x.interpolate({
                            inputRange: s,
                            outputRange: o
                        })
                    },
                    {
                        translateY: n.y.interpolate({
                            inputRange: s,
                            outputRange: o
                        })
                    }
                ],
                ...this.props.style
            });
        return (0, a.jsx)(l.Z.div, {
            ref: this.handleSetRef,
            className: r,
            onMouseDown: this.handleMouseDown,
            style: u,
            children: i
        });
    }
    constructor(e) {
        super(e),
            d(this, '_ref', void 0),
            d(this, '_height', 0),
            d(this, '_width', 0),
            d(this, '_dragStart', {
                x: 0,
                y: 0
            }),
            d(this, '_offsetX', 0),
            d(this, '_offsetY', 0),
            d(this, '_removeListeners', () => {}),
            d(this, 'handleSetRef', (e) => {
                this._ref = e;
            }),
            d(this, 'handleMouseDown', (e) => {
                let { dragAnywhere: n, disabled: r, selector: i } = this.props;
                if (r) return;
                let { position: a } = this.state,
                    s = e.target;
                if (e.button === c.AeJ.PRIMARY && (n || (null != i && s.matches(i)))) {
                    this.grabDimensions(),
                        (this._dragStart = {
                            x: e.clientX,
                            y: e.clientY
                        }),
                        (this._offsetX = e.clientX - a.x._value),
                        (this._offsetY = e.clientY - a.y._value);
                    let n = e.nativeEvent.view;
                    this._removeListeners(),
                        n.addEventListener('mousemove', this.handleMouseMove),
                        n.addEventListener('mouseup', this.handleMouseUp),
                        (this._removeListeners = () => {
                            n.removeEventListener('mousemove', this.handleMouseMove), n.removeEventListener('mouseup', this.handleMouseUp);
                        });
                }
            }),
            d(this, 'handleMouseMove', (e) => {
                e.preventDefault();
                let { onDragStart: n, onDrag: r, disabled: i } = this.props;
                if (i) return;
                let { dragging: a, dragging: s } = this.state;
                if (
                    (!a &&
                        f(this._dragStart, {
                            x: e.clientX,
                            y: e.clientY
                        }) > _ &&
                        (a = !0),
                    !!a)
                )
                    this.animateToPosition(
                        e.clientX - this._offsetX,
                        e.clientY - this._offsetY,
                        {
                            tension: 80,
                            friction: 8
                        },
                        null,
                        !1
                    ),
                        this.setState({ dragging: a }, () => {
                            !s && (null == n || n(e.clientX, e.clientY)), null == r || r(e.clientX, e.clientY);
                        });
            }),
            d(this, 'handleMouseUp', (e) => {
                this._removeListeners(),
                    this.state.dragging &&
                        this.setState({ dragging: !1 }, () => {
                            let { onDragEnd: n } = this.props;
                            null == n || n(e.clientX, e.clientY);
                        });
            });
        let n = new l.Z.Value(e.initialX),
            r = new l.Z.Value(e.initialY);
        this.state = {
            dragging: !1,
            position: new l.Z.ValueXY({
                x: n,
                y: r
            })
        };
    }
}
d(h, 'defaultProps', {
    maxX: 0,
    maxY: 0,
    initialX: 0,
    initialY: 0,
    disabled: !1,
    dragAnywhere: !1
}),
    (n.Z = h);
