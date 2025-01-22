r.r(n),
    r.d(n, {
        IGNORE_CLASS_NAME: function () {
            return v;
        }
    });
var i,
    a = r(192379),
    o = r(995295);
function s(e, n) {
    (e.prototype = Object.create(n.prototype)), (e.prototype.constructor = e), l(e, n);
}
function l(e, n) {
    return (l =
        Object.setPrototypeOf ||
        function (e, n) {
            return (e.__proto__ = n), e;
        })(e, n);
}
function u(e, n) {
    if (null == e) return {};
    var r,
        i,
        a = {},
        o = Object.keys(e);
    for (i = 0; i < o.length; i++) (r = o[i]), !(n.indexOf(r) >= 0) && (a[r] = e[r]);
    return a;
}
function c(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function d(e, n, r) {
    return e === n || (e.correspondingElement ? e.correspondingElement.classList.contains(r) : e.classList.contains(r));
}
function f(e, n, r) {
    if (e === n) return !0;
    for (; e.parentNode || e.host; ) {
        if (e.parentNode && d(e, n, r)) return !0;
        e = e.parentNode || e.host;
    }
    return e;
}
function p(e) {
    return document.documentElement.clientWidth <= e.clientX || document.documentElement.clientHeight <= e.clientY;
}
var h = function () {
        if ('undefined' != typeof window && 'function' == typeof window.addEventListener) {
            var e = !1,
                n = Object.defineProperty({}, 'passive', {
                    get: function () {
                        e = !0;
                    }
                }),
                r = function () {};
            return window.addEventListener('testPassiveEventSupport', r, n), window.removeEventListener('testPassiveEventSupport', r, n), e;
        }
    },
    _ = (function e(e) {
        return (
            void 0 === e && (e = 0),
            function () {
                return ++e;
            }
        );
    })(),
    m = {},
    g = {},
    E = ['touchstart', 'touchmove'],
    v = 'ignore-react-onclickoutside';
function y(e, n) {
    var r = {};
    return -1 !== E.indexOf(n) && i && (r.passive = !e.props.preventDefault), r;
}
function b(e, n) {
    var r,
        l,
        d = e.displayName || e.name || 'Component';
    return (
        (l = r =
            (function (r) {
                function l(e) {
                    var a;
                    return (
                        ((a = r.call(this, e) || this).__outsideClickHandler = function (e) {
                            if ('function' == typeof a.__clickOutsideHandlerProp) {
                                a.__clickOutsideHandlerProp(e);
                                return;
                            }
                            var n = a.getInstance();
                            if ('function' == typeof n.props.handleClickOutside) {
                                n.props.handleClickOutside(e);
                                return;
                            }
                            if ('function' == typeof n.handleClickOutside) {
                                n.handleClickOutside(e);
                                return;
                            }
                            throw Error('WrappedComponent: ' + d + ' lacks a handleClickOutside(event) function for processing outside click events.');
                        }),
                        (a.__getComponentNode = function () {
                            var e = a.getInstance();
                            return n && 'function' == typeof n.setClickOutsideRef ? n.setClickOutsideRef()(e) : 'function' == typeof e.setClickOutsideRef ? e.setClickOutsideRef() : (0, o.findDOMNode)(e);
                        }),
                        (a.enableOnClickOutside = function () {
                            if ('undefined' != typeof document && !g[a._uid]) {
                                void 0 === i && (i = h()), (g[a._uid] = !0);
                                var e = a.props.eventTypes;
                                !e.forEach && (e = [e]),
                                    (m[a._uid] = function (e) {
                                        if (null !== a.componentNode) {
                                            if ((a.props.preventDefault && e.preventDefault(), a.props.stopPropagation && e.stopPropagation(), !(a.props.excludeScrollbar && p(e)))) {
                                                var n = (e.composed && e.composedPath && e.composedPath().shift()) || e.target;
                                                if (f(n, a.componentNode, a.props.outsideClickIgnoreClass) !== document) return;
                                                a.__outsideClickHandler(e);
                                            }
                                        }
                                    }),
                                    e.forEach(function (e) {
                                        document.addEventListener(e, m[a._uid], y(c(a), e));
                                    });
                            }
                        }),
                        (a.disableOnClickOutside = function () {
                            delete g[a._uid];
                            var e = m[a._uid];
                            if (e && 'undefined' != typeof document) {
                                var n = a.props.eventTypes;
                                !n.forEach && (n = [n]),
                                    n.forEach(function (n) {
                                        return document.removeEventListener(n, e, y(c(a), n));
                                    }),
                                    delete m[a._uid];
                            }
                        }),
                        (a.getRef = function (e) {
                            return (a.instanceRef = e);
                        }),
                        (a._uid = _()),
                        a
                    );
                }
                s(l, r);
                var E = l.prototype;
                return (
                    (E.getInstance = function () {
                        if (e.prototype && !e.prototype.isReactComponent) return this;
                        var n = this.instanceRef;
                        return n.getInstance ? n.getInstance() : n;
                    }),
                    (E.componentDidMount = function () {
                        if ('undefined' != typeof document && !!document.createElement) {
                            var e = this.getInstance();
                            if (n && 'function' == typeof n.handleClickOutside && ((this.__clickOutsideHandlerProp = n.handleClickOutside(e)), 'function' != typeof this.__clickOutsideHandlerProp)) throw Error('WrappedComponent: ' + d + ' lacks a function for processing outside click events specified by the handleClickOutside config option.');
                            (this.componentNode = this.__getComponentNode()), !this.props.disableOnClickOutside && this.enableOnClickOutside();
                        }
                    }),
                    (E.componentDidUpdate = function () {
                        this.componentNode = this.__getComponentNode();
                    }),
                    (E.componentWillUnmount = function () {
                        this.disableOnClickOutside();
                    }),
                    (E.render = function () {
                        var n = this.props;
                        n.excludeScrollbar;
                        var r = u(n, ['excludeScrollbar']);
                        return e.prototype && e.prototype.isReactComponent ? (r.ref = this.getRef) : (r.wrappedRef = this.getRef), (r.disableOnClickOutside = this.disableOnClickOutside), (r.enableOnClickOutside = this.enableOnClickOutside), (0, a.createElement)(e, r);
                    }),
                    l
                );
            })(a.Component)),
        (r.displayName = 'OnClickOutside(' + d + ')'),
        (r.defaultProps = {
            eventTypes: ['mousedown', 'touchstart'],
            excludeScrollbar: (n && n.excludeScrollbar) || !1,
            outsideClickIgnoreClass: v,
            preventDefault: !1,
            stopPropagation: !1
        }),
        (r.getClass = function () {
            return e.getClass ? e.getClass() : e;
        }),
        l
    );
}
n.default = b;
