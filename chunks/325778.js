"use strict";
n.r(t), n.d(t, { IGNORE_CLASS_NAME: () => h, default: () => g });
var r,
    i,
    a = n(582128),
    o = n(333007);
function s(e, t) {
    return (s =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function l(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
var u = function () {
        if ("u" > typeof window && "function" == typeof window.addEventListener) {
            var e = !1,
                t = Object.defineProperty({}, "passive", {
                    get: function () {
                        e = !0;
                    },
                }),
                n = function () {};
            return (
                window.addEventListener("testPassiveEventSupport", n, t),
                window.removeEventListener("testPassiveEventSupport", n, t),
                e
            );
        }
    },
    c =
        (void 0 === r && (r = 0),
        function () {
            return ++r;
        }),
    d = {},
    f = {},
    p = ["touchstart", "touchmove"],
    h = "ignore-react-onclickoutside";
function m(e, t) {
    var n = {};
    return -1 !== p.indexOf(t) && i && (n.passive = !e.props.preventDefault), n;
}
let g = function (e, t) {
    var n,
        r,
        p = e.displayName || e.name || "Component";
    return (
        (r = n =
            (function (n) {
                function r(e) {
                    var r;
                    return (
                        ((r = n.call(this, e) || this).__outsideClickHandler = function (e) {
                            if ("function" == typeof r.__clickOutsideHandlerProp)
                                return void r.__clickOutsideHandlerProp(e);
                            var t = r.getInstance();
                            if ("function" == typeof t.props.handleClickOutside)
                                return void t.props.handleClickOutside(e);
                            if ("function" == typeof t.handleClickOutside) return void t.handleClickOutside(e);
                            throw Error(
                                "WrappedComponent: " +
                                    p +
                                    " lacks a handleClickOutside(event) function for processing outside click events.",
                            );
                        }),
                        (r.__getComponentNode = function () {
                            var e = r.getInstance();
                            return t && "function" == typeof t.setClickOutsideRef
                                ? t.setClickOutsideRef()(e)
                                : "function" == typeof e.setClickOutsideRef
                                  ? e.setClickOutsideRef()
                                  : (0, o.findDOMNode)(e);
                        }),
                        (r.enableOnClickOutside = function () {
                            if ("u" > typeof document && !f[r._uid]) {
                                void 0 === i && (i = u()), (f[r._uid] = !0);
                                var e = r.props.eventTypes;
                                e.forEach || (e = [e]),
                                    (d[r._uid] = function (e) {
                                        null !== r.componentNode &&
                                            !(r.initTimeStamp > e.timeStamp) &&
                                            (r.props.preventDefault && e.preventDefault(),
                                            r.props.stopPropagation && e.stopPropagation(),
                                            (r.props.excludeScrollbar &&
                                                (document.documentElement.clientWidth <= e.clientX ||
                                                    document.documentElement.clientHeight <= e.clientY)) ||
                                                ((function (e, t, n) {
                                                    if (e === t) return !0;
                                                    for (; e.parentNode || e.host; ) {
                                                        var r;
                                                        if (
                                                            e.parentNode &&
                                                            ((r = e) === t ||
                                                                (r.correspondingElement
                                                                    ? r.correspondingElement.classList.contains(n)
                                                                    : r.classList.contains(n)))
                                                        )
                                                            return !0;
                                                        e = e.parentNode || e.host;
                                                    }
                                                    return e;
                                                })(
                                                    (e.composed && e.composedPath && e.composedPath().shift()) ||
                                                        e.target,
                                                    r.componentNode,
                                                    r.props.outsideClickIgnoreClass,
                                                ) === document &&
                                                    r.__outsideClickHandler(e)));
                                    }),
                                    e.forEach(function (e) {
                                        document.addEventListener(e, d[r._uid], m(l(r), e));
                                    });
                            }
                        }),
                        (r.disableOnClickOutside = function () {
                            delete f[r._uid];
                            var e = d[r._uid];
                            if (e && "u" > typeof document) {
                                var t = r.props.eventTypes;
                                t.forEach || (t = [t]),
                                    t.forEach(function (t) {
                                        return document.removeEventListener(t, e, m(l(r), t));
                                    }),
                                    delete d[r._uid];
                            }
                        }),
                        (r.getRef = function (e) {
                            return (r.instanceRef = e);
                        }),
                        (r._uid = c()),
                        (r.initTimeStamp = performance.now()),
                        r
                    );
                }
                (r.prototype = Object.create(n.prototype)), (r.prototype.constructor = r), s(r, n);
                var h = r.prototype;
                return (
                    (h.getInstance = function () {
                        if (e.prototype && !e.prototype.isReactComponent) return this;
                        var t = this.instanceRef;
                        return t.getInstance ? t.getInstance() : t;
                    }),
                    (h.componentDidMount = function () {
                        if (!("u" < typeof document) && document.createElement) {
                            var e = this.getInstance();
                            if (
                                t &&
                                "function" == typeof t.handleClickOutside &&
                                ((this.__clickOutsideHandlerProp = t.handleClickOutside(e)),
                                "function" != typeof this.__clickOutsideHandlerProp)
                            )
                                throw Error(
                                    "WrappedComponent: " +
                                        p +
                                        " lacks a function for processing outside click events specified by the handleClickOutside config option.",
                                );
                            (this.componentNode = this.__getComponentNode()),
                                this.props.disableOnClickOutside || this.enableOnClickOutside();
                        }
                    }),
                    (h.componentDidUpdate = function () {
                        this.componentNode = this.__getComponentNode();
                    }),
                    (h.componentWillUnmount = function () {
                        this.disableOnClickOutside();
                    }),
                    (h.render = function () {
                        var t = this.props;
                        t.excludeScrollbar;
                        var n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) t.indexOf((n = a[r])) >= 0 || (i[n] = e[n]);
                            return i;
                        })(t, ["excludeScrollbar"]);
                        return (
                            e.prototype && e.prototype.isReactComponent
                                ? (n.ref = this.getRef)
                                : (n.wrappedRef = this.getRef),
                            (n.disableOnClickOutside = this.disableOnClickOutside),
                            (n.enableOnClickOutside = this.enableOnClickOutside),
                            (0, a.createElement)(e, n)
                        );
                    }),
                    r
                );
            })(a.Component)),
        (n.displayName = "OnClickOutside(" + p + ")"),
        (n.defaultProps = {
            eventTypes: ["mousedown", "touchstart"],
            excludeScrollbar: (t && t.excludeScrollbar) || !1,
            outsideClickIgnoreClass: h,
            preventDefault: !1,
            stopPropagation: !1,
        }),
        (n.getClass = function () {
            return e.getClass ? e.getClass() : e;
        }),
        r
    );
};
