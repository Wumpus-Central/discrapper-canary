n.r(t),
    n.d(t, {
        IGNORE_CLASS_NAME: () => E,
        default: () => y
    });
var i,
    r = n(192379),
    a = n(995295);
function s(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), o(e, t);
}
function o(e, t) {
    return (o =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function l(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = {},
        a = Object.keys(e);
    for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r;
}
function u(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function c(e, t, n) {
    return e === t || (e.correspondingElement ? e.correspondingElement.classList.contains(n) : e.classList.contains(n));
}
function d(e, t, n) {
    if (e === t) return !0;
    for (; e.parentNode || e.host; ) {
        if (e.parentNode && c(e, t, n)) return !0;
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
function v(e, t) {
    var n = {};
    return -1 !== g.indexOf(t) && i && (n.passive = !e.props.preventDefault), n;
}
let y = function (e, t) {
    var n,
        o,
        c = e.displayName || e.name || 'Component';
    return (
        (o = n =
            (function (n) {
                function o(e) {
                    var r;
                    return (
                        ((r = n.call(this, e) || this).__outsideClickHandler = function (e) {
                            if ('function' == typeof r.__clickOutsideHandlerProp) {
                                r.__clickOutsideHandlerProp(e);
                                return;
                            }
                            var t = r.getInstance();
                            if ('function' == typeof t.props.handleClickOutside) {
                                t.props.handleClickOutside(e);
                                return;
                            }
                            if ('function' == typeof t.handleClickOutside) {
                                t.handleClickOutside(e);
                                return;
                            }
                            throw Error('WrappedComponent: ' + c + ' lacks a handleClickOutside(event) function for processing outside click events.');
                        }),
                        (r.__getComponentNode = function () {
                            var e = r.getInstance();
                            return t && 'function' == typeof t.setClickOutsideRef ? t.setClickOutsideRef()(e) : 'function' == typeof e.setClickOutsideRef ? e.setClickOutsideRef() : (0, a.findDOMNode)(e);
                        }),
                        (r.enableOnClickOutside = function () {
                            if ('undefined' != typeof document && !m[r._uid]) {
                                void 0 === i && (i = _()), (m[r._uid] = !0);
                                var e = r.props.eventTypes;
                                e.forEach || (e = [e]),
                                    (h[r._uid] = function (e) {
                                        if (null !== r.componentNode && (r.props.preventDefault && e.preventDefault(), r.props.stopPropagation && e.stopPropagation(), !(r.props.excludeScrollbar && f(e)))) {
                                            var t = (e.composed && e.composedPath && e.composedPath().shift()) || e.target;
                                            if (d(t, r.componentNode, r.props.outsideClickIgnoreClass) === document) r.__outsideClickHandler(e);
                                        }
                                    }),
                                    e.forEach(function (e) {
                                        document.addEventListener(e, h[r._uid], v(u(r), e));
                                    });
                            }
                        }),
                        (r.disableOnClickOutside = function () {
                            delete m[r._uid];
                            var e = h[r._uid];
                            if (e && 'undefined' != typeof document) {
                                var t = r.props.eventTypes;
                                t.forEach || (t = [t]),
                                    t.forEach(function (t) {
                                        return document.removeEventListener(t, e, v(u(r), t));
                                    }),
                                    delete h[r._uid];
                            }
                        }),
                        (r.getRef = function (e) {
                            return (r.instanceRef = e);
                        }),
                        (r._uid = p()),
                        r
                    );
                }
                s(o, n);
                var g = o.prototype;
                return (
                    (g.getInstance = function () {
                        if (e.prototype && !e.prototype.isReactComponent) return this;
                        var t = this.instanceRef;
                        return t.getInstance ? t.getInstance() : t;
                    }),
                    (g.componentDidMount = function () {
                        if ('undefined' != typeof document && document.createElement) {
                            var e = this.getInstance();
                            if (t && 'function' == typeof t.handleClickOutside && ((this.__clickOutsideHandlerProp = t.handleClickOutside(e)), 'function' != typeof this.__clickOutsideHandlerProp)) throw Error('WrappedComponent: ' + c + ' lacks a function for processing outside click events specified by the handleClickOutside config option.');
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
                        return e.prototype && e.prototype.isReactComponent ? (n.ref = this.getRef) : (n.wrappedRef = this.getRef), (n.disableOnClickOutside = this.disableOnClickOutside), (n.enableOnClickOutside = this.enableOnClickOutside), (0, r.createElement)(e, n);
                    }),
                    o
                );
            })(r.Component)),
        (n.displayName = 'OnClickOutside(' + c + ')'),
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
        o
    );
};
