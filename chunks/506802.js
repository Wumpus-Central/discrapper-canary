n.d(t, {
    aM: () => k,
    gq: () => w,
    jS: () => U,
    r6: () => T,
}),
    n(415506),
    n(388685);
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(24156),
    c = n(205120),
    u = n(873546),
    d = n(374470),
    f = n(793030),
    p = n(846519),
    _ = n(377527),
    m = n(481060),
    h = n(607070),
    g = n(314910),
    E = n(855711);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var T = (function (e) {
    return (e.PRIMARY = "primary"), (e.GREY = "grey"), (e.BRAND = "brand"), (e.GREEN = "green"), (e.RED = "red"), e;
})({});
let A = 16,
    C = 10,
    N = 8,
    P = Object.freeze({}),
    R = Object.freeze({
        top: E.tooltipTop,
        bottom: E.tooltipBottom,
        left: E.tooltipLeft,
        right: E.tooltipRight,
        center: E.tooltipCenter,
        window_center: E.tooltipCenter,
        primary: E.tooltipPrimary,
        grey: E.tooltipGrey,
        brand: E.tooltipBrand,
        green: E.tooltipGreen,
        red: E.tooltipRed,
    });
function D(e, t, n) {
    let r = "left" === e || "right" === e,
        i = r ? "top" : "left",
        a = r ? "top" : "left",
        o = r ? "bottom" : "right",
        s = "50%",
        l = n;
    return (
        t === a ? ((s = "0%"), (l += A)) : t === o && ((s = "100%"), (l -= C + C)),
        { [i]: "calc(".concat(s, " + ").concat(l, "px)") }
    );
}
let w = (e) => {
        let {
                targetElementRef: t,
                align: n = "center",
                position: r,
                color: a,
                children: o,
                onNonAccessibleClick: l,
                tooltipClassName: u,
                tooltipStyle: d,
                tooltipContentClassName: f,
                spacing: p = N,
                animationStyle: _,
                disableTooltipPointerEvents: m = !1,
                allowOverflow: h = !1,
                tooltipPointerClassName: b,
                positionKeyStemOverride: O,
                dataMeticulousIgnore: v,
            } = e,
            S = "".concat(null != O ? O : "string" == typeof o ? o : "", ":").concat(r);
        return (0, i.jsx)(g.W5, {
            disablePointerEvents: m,
            targetRef: t,
            position: r,
            autoInvert: !0,
            align: n,
            positionKey: S,
            spacing: p,
            nudgeAlignIntoViewport: !0,
            children: (e) => {
                let { position: t, nudge: p } = e;
                return (0, i.jsxs)(c.animated.div, {
                    onClick: l,
                    className: s()(E.tooltip, R[null != t ? t : r], R[a], { [E.tooltipDisablePointerEvents]: m }, u),
                    style: y({}, _, d),
                    "data-mtctest-ignore": v,
                    children: [
                        (0, i.jsx)("div", {
                            className: s()(E.tooltipPointer, E.tooltipPointerBg, b),
                            style: D(null != t ? t : r, n, p),
                        }),
                        (0, i.jsx)("div", {
                            className: s()(E.tooltipPointer, b),
                            style: D(null != t ? t : r, n, p),
                        }),
                        (0, i.jsx)("div", {
                            className: s()(E.tooltipContent, { [E.tooltipContentAllowOverflow]: h }, f),
                            children: o,
                        }),
                    ],
                });
            },
        });
    },
    x = {
        scale: 0.95,
        opacity: 0,
    },
    L = {
        scale: 1,
        opacity: 0,
    },
    j = {
        scale: 1,
        opacity: 1,
    },
    M = (e) => {
        var { isVisible: t, onAnimationRest: n, targetElementRef: r } = e,
            o = S(e, ["isVisible", "onAnimationRest", "targetElementRef"]);
        let { reducedMotion: s } = a.useContext(f.Sfi);
        return (0, m.Yzy)(
            t,
            {
                keys: (e) => (e ? "tooltip" : "empty"),
                config: _.F,
                from: s.enabled ? L : x,
                enter: j,
                leave: s.enabled ? L : x,
                onRest: n,
            },
            "animate-always",
        )((e, t) =>
            t
                ? (0, i.jsx)(
                      w,
                      y(
                          {
                              "data-migration-pending": !0,
                              animationStyle: e,
                              targetElementRef: r,
                          },
                          o,
                      ),
                  )
                : null,
        );
    };
class k extends (r = a.Component) {
    static getDerivedStateFromProps(e, t) {
        return t.shouldShowTooltip && null == e.text ? { shouldShowTooltip: !1 } : null;
    }
    componentDidMount() {
        this.shouldShowTooltip(this.props, this.state) && this.setDomElement();
    }
    componentDidUpdate(e, t) {
        let n = this.shouldShowTooltip(this.props, this.state);
        n !== this.shouldShowTooltip(e, t) && (n ? this.setDomElement() : (this.hasDomElement = !1));
    }
    setDomElement() {
        let e;
        if (null != this.props.text) {
            if (null != this.props.targetElementRef) {
                if (null == (e = this.props.targetElementRef.current)) return;
            } else {
                var t;
                if (((e = null == (t = this.siblingDomRef.current) ? void 0 : t.previousElementSibling), !(0, d.kK)(e)))
                    throw Error("VoidTooltip cannot find DOM node");
            }
            (this.domElementRef.current = e), (this.hasDomElement = !0), this.forceUpdate();
        }
    }
    componentWillUnmount() {
        this.showTimeout.stop(), (this.domElementRef.current = null);
    }
    render() {
        let e,
            { children: t, text: n, "aria-label": r } = this.props;
        if (null == n) return t(P);
        "string" == typeof r ? (e = r) : "string" == typeof n && !1 !== r && (e = n);
        let o = {
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onContextMenu: this.handleContextMenu,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
        };
        return (
            null != e && (o["aria-label"] = e),
            (0, i.jsxs)(a.Fragment, {
                children: [
                    t(o),
                    void 0 === this.props.targetElementRef &&
                        (0, i.jsx)("span", {
                            ref: this.siblingDomRef,
                            style: { display: "none" },
                        }),
                    this.renderTooltip(),
                ],
            })
        );
    }
    shouldShowTooltip(e, t) {
        let n = null == e.targetElementRef || null != e.targetElementRef.current;
        return e.shouldShow && (t.shouldShowTooltip || e.forceOpen) && n;
    }
    renderTooltip() {
        let {
                text: e,
                align: t,
                position: n,
                color: r,
                spacing: a,
                tooltipClassName: o,
                tooltipStyle: s,
                tooltipContentClassName: l,
                disableTooltipPointerEvents: c,
                onAnimationRest: d,
                allowOverflow: f,
                clickableOnMobile: p,
                hideOnClick: _,
                tooltipPointerClassName: m,
                dataMeticulousIgnore: h,
            } = this.props,
            g = (u.tq || u.Em) && !0 === p && _,
            E = (!1 !== c && !g) || !0 === c,
            b = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement,
            y = null;
        return (
            (y = e instanceof Function ? (b ? e() : null) : e),
            (0, i.jsx)(M, {
                disableTooltipPointerEvents: E,
                targetElementRef: this.domElementRef,
                tooltipStyle: s,
                tooltipClassName: o,
                tooltipContentClassName: l,
                tooltipPointerClassName: m,
                align: t,
                position: n,
                color: r,
                spacing: a,
                isVisible: b,
                onAnimationRest: d,
                onNonAccessibleClick: g ? this.handleClick : void 0,
                allowOverflow: f,
                positionKeyStemOverride: this.props.positionKeyStemOverride,
                dataMeticulousIgnore: h,
                children: y,
            })
        );
    }
    show() {
        let { delay: e, overflowOnly: t } = this.props;
        if (t) {
            let e = this.domElementRef.current;
            if (null == e || ((0, d.kK)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth)) return;
        }
        null != e ? this.showTimeout.start(e, () => this.toggleShow(!0), !1) : this.toggleShow(!0);
    }
    hide() {
        this.showTimeout.stop(), this.toggleShow(!1);
    }
    toggleShow(e) {
        if (this.state.shouldShowTooltip !== e) {
            var t, n, r, i;
            e
                ? null == (t = (n = this.props).onTooltipShow) || t.call(n)
                : null == (r = (i = this.props).onTooltipHide) || r.call(i),
                l.flushSync(() => {
                    this.setState({ shouldShowTooltip: e });
                });
        }
    }
    constructor(...e) {
        super(...e),
            b(this, "showTimeout", new p.V7()),
            b(this, "domElementRef", { current: null }),
            b(this, "hasDomElement", !1),
            b(this, "siblingDomRef", a.createRef()),
            b(this, "state", { shouldShowTooltip: !1 }),
            b(this, "handleMouseEnter", () => {
                ((u.tq || u.Em) && !0 === this.props.clickableOnMobile) || this.show();
            }),
            b(this, "handleMouseLeave", () => {
                ((u.tq || u.Em) && !0 === this.props.clickableOnMobile) || this.hide();
            }),
            b(this, "handleFocus", () => {
                h.Z.keyboardModeEnabled && this.show();
            }),
            b(this, "handleBlur", () => {
                this.hide();
            }),
            b(this, "handleClick", () => {
                let e = this.hasDomElement;
                e && this.props.hideOnClick
                    ? this.hide()
                    : !e && (u.tq || u.Em) && !0 === this.props.clickableOnMobile && this.show();
            }),
            b(this, "handleContextMenu", () => {
                this.hide();
            });
    }
}
b(k, "Colors", T),
    b(k, "defaultProps", {
        hideOnClick: !0,
        position: "top",
        color: "primary",
        forceOpen: !1,
        spacing: N,
        shouldShow: !0,
        allowOverflow: !1,
        overflowOnly: !1,
    });
let U = (e) => {
    var { children: t, className: n, element: r = "div" } = e,
        o = S(e, ["children", "className", "element"]);
    return (0, i.jsx)(
        k,
        v(y({ "data-migration-pending": !0 }, o), {
            children: (e) => a.createElement(r, null != n ? v(y({}, e), { className: n }) : e, t),
        }),
    );
};
