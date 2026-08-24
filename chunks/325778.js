"use strict";
r.r(t), r.d(t, { IGNORE_CLASS_NAME: () => h, default: () => v });
var n,
    i,
    o = r(582128),
    a = r(333007);
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
                r = function () {};
            return (
                window.addEventListener("testPassiveEventSupport", r, t),
                window.removeEventListener("testPassiveEventSupport", r, t),
                e
            );
        }
    },
    c =
        (void 0 === n && (n = 0),
        function () {
            return ++n;
        }),
    f = {},
    d = {},
    p = ["touchstart", "touchmove"],
    h = "ignore-react-onclickoutside";
function m(e, t) {
    var r = {};
    return -1 !== p.indexOf(t) && i && (r.passive = !e.props.preventDefault), r;
}
let v = function (e, t) {
    var r,
        n,
        p = e.displayName || e.name || "Component";
    return (
        (n = r =
            (function (r) {
                function n(e) {
                    var n;
                    return (
                        ((n = r.call(this, e) || this).__outsideClickHandler = function (e) {
                            if ("function" == typeof n.__clickOutsideHandlerProp)
                                return void n.__clickOutsideHandlerProp(e);
                            var t = n.getInstance();
                            if ("function" == typeof t.props.handleClickOutside)
                                return void t.props.handleClickOutside(e);
                            if ("function" == typeof t.handleClickOutside) return void t.handleClickOutside(e);
                            throw Error(
                                "WrappedComponent: " +
                                    p +
                                    " lacks a handleClickOutside(event) function for processing outside click events.",
                            );
                        }),
                        (n.__getComponentNode = function () {
                            var e = n.getInstance();
                            return t && "function" == typeof t.setClickOutsideRef
                                ? t.setClickOutsideRef()(e)
                                : "function" == typeof e.setClickOutsideRef
                                  ? e.setClickOutsideRef()
                                  : (0, a.findDOMNode)(e);
                        }),
                        (n.enableOnClickOutside = function () {
                            if ("u" > typeof document && !d[n._uid]) {
                                void 0 === i && (i = u()), (d[n._uid] = !0);
                                var e = n.props.eventTypes;
                                e.forEach || (e = [e]),
                                    (f[n._uid] = function (e) {
                                        null !== n.componentNode &&
                                            !(n.initTimeStamp > e.timeStamp) &&
                                            (n.props.preventDefault && e.preventDefault(),
                                            n.props.stopPropagation && e.stopPropagation(),
                                            (n.props.excludeScrollbar &&
                                                (document.documentElement.clientWidth <= e.clientX ||
                                                    document.documentElement.clientHeight <= e.clientY)) ||
                                                ((function (e, t, r) {
                                                    if (e === t) return !0;
                                                    for (; e.parentNode || e.host; ) {
                                                        var n;
                                                        if (
                                                            e.parentNode &&
                                                            ((n = e) === t ||
                                                                (n.correspondingElement
                                                                    ? n.correspondingElement.classList.contains(r)
                                                                    : n.classList.contains(r)))
                                                        )
                                                            return !0;
                                                        e = e.parentNode || e.host;
                                                    }
                                                    return e;
                                                })(
                                                    (e.composed && e.composedPath && e.composedPath().shift()) ||
                                                        e.target,
                                                    n.componentNode,
                                                    n.props.outsideClickIgnoreClass,
                                                ) === document &&
                                                    n.__outsideClickHandler(e)));
                                    }),
                                    e.forEach(function (e) {
                                        document.addEventListener(e, f[n._uid], m(l(n), e));
                                    });
                            }
                        }),
                        (n.disableOnClickOutside = function () {
                            delete d[n._uid];
                            var e = f[n._uid];
                            if (e && "u" > typeof document) {
                                var t = n.props.eventTypes;
                                t.forEach || (t = [t]),
                                    t.forEach(function (t) {
                                        return document.removeEventListener(t, e, m(l(n), t));
                                    }),
                                    delete f[n._uid];
                            }
                        }),
                        (n.getRef = function (e) {
                            return (n.instanceRef = e);
                        }),
                        (n._uid = c()),
                        (n.initTimeStamp = performance.now()),
                        n
                    );
                }
                (n.prototype = Object.create(r.prototype)), (n.prototype.constructor = n), s(n, r);
                var h = n.prototype;
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
                        var r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                i = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) t.indexOf((r = o[n])) >= 0 || (i[r] = e[r]);
                            return i;
                        })(t, ["excludeScrollbar"]);
                        return (
                            e.prototype && e.prototype.isReactComponent
                                ? (r.ref = this.getRef)
                                : (r.wrappedRef = this.getRef),
                            (r.disableOnClickOutside = this.disableOnClickOutside),
                            (r.enableOnClickOutside = this.enableOnClickOutside),
                            (0, o.createElement)(e, r)
                        );
                    }),
                    n
                );
            })(o.Component)),
        (r.displayName = "OnClickOutside(" + p + ")"),
        (r.defaultProps = {
            eventTypes: ["mousedown", "touchstart"],
            excludeScrollbar: (t && t.excludeScrollbar) || !1,
            outsideClickIgnoreClass: h,
            preventDefault: !1,
            stopPropagation: !1,
        }),
        (r.getClass = function () {
            return e.getClass ? e.getClass() : e;
        }),
        n
    );
};
