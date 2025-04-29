n.r(t),
    n.d(t, {
        IGNORE_CLASS_NAME: () => E,
        default: () => y
    });
var r,
    i = n(192379),
    o = n(995295);
function a(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), s(e, t);
}
function s(e, t) {
    return (s =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function c(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function u(e, t, n) {
    return e === t || (e.correspondingElement ? e.correspondingElement.classList.contains(n) : e.classList.contains(n));
}
function d(e, t, n) {
    if (e === t) return !0;
    for (; e.parentNode || e.host; ) {
        if (e.parentNode && u(e, t, n)) return !0;
        e = e.parentNode || e.host;
    }
    return e;
}
function f(e) {
    return document.documentElement.clientWidth <= e.clientX || document.documentElement.clientHeight <= e.clientY;
}
var _ = function () {
        if ('undefined' != typeof window && 'function' == typeof window.addEventListener) {
            var e = !1,
                t = Object.defineProperty({}, 'passive', {
                    get: function () {
                        e = !0;
                    }
                }),
                n = function () {};
            return window.addEventListener('testPassiveEventSupport', n, t), window.removeEventListener('testPassiveEventSupport', n, t), e;
        }
    },
    p = (function (e) {
        return (
            void 0 === e && (e = 0),
            function () {
                return ++e;
            }
        );
    })(),
    h = {},
    m = {},
    g = ['touchstart', 'touchmove'],
    E = 'ignore-react-onclickoutside';
function b(e, t) {
    var n = {};
    return -1 !== g.indexOf(t) && r && (n.passive = !e.props.preventDefault), n;
}
let y = function (e, t) {
    var n,
        s,
        u = e.displayName || e.name || 'Component';
    return (
        (s = n =
            (function (n) {
                function s(e) {
                    var i;
                    return (
                        ((i = n.call(this, e) || this).__outsideClickHandler = function (e) {
                            if ('function' == typeof i.__clickOutsideHandlerProp) return void i.__clickOutsideHandlerProp(e);
                            var t = i.getInstance();
                            if ('function' == typeof t.props.handleClickOutside) return void t.props.handleClickOutside(e);
                            if ('function' == typeof t.handleClickOutside) return void t.handleClickOutside(e);
                            throw Error('WrappedComponent: ' + u + ' lacks a handleClickOutside(event) function for processing outside click events.');
                        }),
                        (i.__getComponentNode = function () {
                            var e = i.getInstance();
                            return t && 'function' == typeof t.setClickOutsideRef ? t.setClickOutsideRef()(e) : 'function' == typeof e.setClickOutsideRef ? e.setClickOutsideRef() : (0, o.findDOMNode)(e);
                        }),
                        (i.enableOnClickOutside = function () {
                            if ('undefined' != typeof document && !m[i._uid]) {
                                void 0 === r && (r = _()), (m[i._uid] = !0);
                                var e = i.props.eventTypes;
                                e.forEach || (e = [e]),
                                    (h[i._uid] = function (e) {
                                        if (null !== i.componentNode && !(i.initTimeStamp > e.timeStamp)) i.props.preventDefault && e.preventDefault(), i.props.stopPropagation && e.stopPropagation(), (i.props.excludeScrollbar && f(e)) || (d((e.composed && e.composedPath && e.composedPath().shift()) || e.target, i.componentNode, i.props.outsideClickIgnoreClass) === document && i.__outsideClickHandler(e));
                                    }),
                                    e.forEach(function (e) {
                                        document.addEventListener(e, h[i._uid], b(c(i), e));
                                    });
                            }
                        }),
                        (i.disableOnClickOutside = function () {
                            delete m[i._uid];
                            var e = h[i._uid];
                            if (e && 'undefined' != typeof document) {
                                var t = i.props.eventTypes;
                                t.forEach || (t = [t]),
                                    t.forEach(function (t) {
                                        return document.removeEventListener(t, e, b(c(i), t));
                                    }),
                                    delete h[i._uid];
                            }
                        }),
                        (i.getRef = function (e) {
                            return (i.instanceRef = e);
                        }),
                        (i._uid = p()),
                        (i.initTimeStamp = performance.now()),
                        i
                    );
                }
                a(s, n);
                var g = s.prototype;
                return (
                    (g.getInstance = function () {
                        if (e.prototype && !e.prototype.isReactComponent) return this;
                        var t = this.instanceRef;
                        return t.getInstance ? t.getInstance() : t;
                    }),
                    (g.componentDidMount = function () {
                        if ('undefined' != typeof document && document.createElement) {
                            var e = this.getInstance();
                            if (t && 'function' == typeof t.handleClickOutside && ((this.__clickOutsideHandlerProp = t.handleClickOutside(e)), 'function' != typeof this.__clickOutsideHandlerProp)) throw Error('WrappedComponent: ' + u + ' lacks a function for processing outside click events specified by the handleClickOutside config option.');
                            (this.componentNode = this.__getComponentNode()), this.props.disableOnClickOutside || this.enableOnClickOutside();
                        }
                    }),
                    (g.componentDidUpdate = function () {
                        this.componentNode = this.__getComponentNode();
                    }),
                    (g.componentWillUnmount = function () {
                        this.disableOnClickOutside();
                    }),
                    (g.render = function () {
                        var t = this.props;
                        t.excludeScrollbar;
                        var n = l(t, ['excludeScrollbar']);
                        return e.prototype && e.prototype.isReactComponent ? (n.ref = this.getRef) : (n.wrappedRef = this.getRef), (n.disableOnClickOutside = this.disableOnClickOutside), (n.enableOnClickOutside = this.enableOnClickOutside), (0, i.createElement)(e, n);
                    }),
                    s
                );
            })(i.Component)),
        (n.displayName = 'OnClickOutside(' + u + ')'),
        (n.defaultProps = {
            eventTypes: ['mousedown', 'touchstart'],
            excludeScrollbar: (t && t.excludeScrollbar) || !1,
            outsideClickIgnoreClass: E,
            preventDefault: !1,
            stopPropagation: !1
        }),
        (n.getClass = function () {
            return e.getClass ? e.getClass() : e;
        }),
        s
    );
};
