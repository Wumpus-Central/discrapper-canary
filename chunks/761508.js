n.d(t, { V: () => R }), n(896048), n(747238), n(812715), n(65821);
var r,
    i,
    a = n(627968),
    s = n(64700),
    o = n(503698),
    l = n.n(o),
    c = n(52724),
    u = n(317097),
    d = n(827734),
    f = n(939249),
    p = n(834730),
    _ = n(650583),
    h = n(704118);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = O(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let A = {
        side: h.Cf,
        top: h.Mn,
        "top-pill": h.vO,
    },
    v = s.forwardRef(function (e, t) {
        let { className: n, onClick: r, children: i, "aria-expanded": s, "aria-controls": o } = e;
        return (0, a.jsx)(f.D, {
            innerRef: t,
            tabIndex: null == r ? -1 : 0,
            className: l()(h.wx, n),
            onClick: r,
            "aria-expanded": s,
            "aria-controls": o,
            focusProps: { offset: { top: -6 } },
            children: (0, a.jsx)(p.E, {
                variant: "eyebrow",
                color: "none",
                className: h.TK,
                children: i,
            }),
        });
    });
function S(e) {
    let { style: t } = e;
    return (0, a.jsx)("div", {
        className: h.me,
        style: t,
    });
}
let I = s.forwardRef(function (e, t) {
    let [n, ...r] = [e, t],
        { children: i, id: s } = n,
        o = y(n, ["children", "id"]),
        [l] = r;
    return (0, a.jsx)(
        "div",
        b(g({}, o), {
            ref: l,
            role: "tabpanel",
            id: T(s),
            tabIndex: -1,
            children: i,
        }),
    );
});
function T(e) {
    return "".concat(e.replace(/\s+/g, "-").toLowerCase(), "-tab");
}
function C(e, t) {
    if (null == e) return;
    let n = {};
    return (
        "Selected" === t
            ? ((n.backgroundColor = e), (n.color = d.A.unsafe_rawColors.WHITE.css))
            : ("Hover" === t && (n.backgroundColor = (0, u.xp)(e, 0.1)), (n.color = e)),
        n
    );
}
class N extends (r = s.Component) {
    getStyle() {
        let { color: e, id: t, selectedItem: n, itemType: r } = this.props,
            { hover: i, active: a } = this.state;
        if (null != e) {
            if ("side" === r) return (null != t && n === t) || a ? C(e, "Selected") : i ? C(e, "Hover") : C(e);
            if ("top" === r)
                if (n === t)
                    return {
                        borderColor: e,
                        color: e,
                    };
                else if (i)
                    return {
                        borderColor: (0, u.xp)(e, 0.1),
                        color: (0, u.xp)(e, 0.6),
                    };
                else
                    return {
                        borderColor: "transparent",
                        color: (0, u.xp)(e, 0.4),
                    };
            if ("top-pill" === r)
                if (n === t)
                    return {
                        backgroundColor: (0, u.xp)(e, 0.2),
                        color: e,
                    };
                else
                    return {
                        backgroundColor: e,
                        color: d.A.unsafe_rawColors.WHITE.css,
                    };
        }
    }
    render() {
        let {
                children: e,
                className: t,
                id: n,
                selectedItem: r,
                color: i,
                variant: s,
                disabled: o,
                onContextMenu: c,
                clickableRef: u,
                clickableInnerRef: d,
                look: p,
                disableItemStyles: _,
            } = this.props,
            m = this.props["aria-label"],
            g = r === n;
        return (0, a.jsx)(f.D, {
            className: l()(t, {
                [h.AS]: !_,
                [h.wk]: "brand" === p,
                [h.wH]: null == i && g,
                [h.Sp]: "grey" === p,
                [h.r9]: null == i && o,
                [h.RD]: "destructive" === s,
            }),
            style: this.getStyle(),
            role: "tab",
            "aria-selected": g,
            "aria-controls": g ? T("".concat(n)) : void 0,
            "aria-disabled": o,
            tabIndex: g ? 0 : -1,
            onMouseEnter: null != i ? this.handleMouseOver : void 0,
            onClick: this.handleClick,
            onMouseLeave: null != i ? this.handleMouseOut : void 0,
            onMouseUp: null != i ? this.handleMouseUp : void 0,
            onMouseDown: this.handleMouseDown,
            onContextMenu: c,
            "aria-label": m,
            innerRef: d,
            ref: u,
            children: e,
        });
    }
    constructor(...e) {
        super(...e),
            m(this, "state", {
                hover: !1,
                active: !1,
            }),
            m(this, "handleClick", (e) => {
                let { disabled: t, onClick: n, id: r, onItemSelect: i } = this.props;
                t || (null != n ? n(e) : null != i && i(r));
            }),
            m(this, "handleMouseDown", () => {
                let { color: e } = this.props;
                null != e && this.setState({ active: !0 });
            }),
            m(this, "handleMouseUp", () => {
                this.setState({ active: !1 });
            }),
            m(this, "handleMouseOver", () => {
                this.setState({ hover: !0 });
            }),
            m(this, "handleMouseOut", () => {
                this.setState({
                    hover: !1,
                    active: !1,
                });
            });
    }
}
m(N, "defaultProps", {
    disabled: !1,
    look: "grey",
    disableItemStyles: !1,
});
class R extends (i = s.Component) {
    render() {
        let {
            className: e,
            children: t,
            type: n = "side",
            style: r,
            "aria-label": i,
            orientation: o = "horizontal",
        } = this.props;
        return (0, a.jsx)("div", {
            ref: this.tabBarRef,
            className: l()(e, A[n]),
            style: r,
            role: "tablist",
            "aria-orientation": o,
            onKeyDown: this.handleKeyDown,
            "aria-label": i,
            children: s.Children.map(t, this.renderChildren),
        });
    }
    constructor(...e) {
        super(...e),
            m(this, "tabBarRef", s.createRef()),
            m(
                this,
                "focusManager",
                (0, c.C)({
                    getFocusableElements: () => {
                        let e = this.tabBarRef.current;
                        return null != e ? Array.from(e.querySelectorAll('[role="tab"][aria-disabled="false"]')) : [];
                    },
                    getActiveElement: () => {
                        var e;
                        return null == (e = this.tabBarRef.current) ? void 0 : e.ownerDocument.activeElement;
                    },
                }),
            ),
            m(this, "renderChildren", (e) => {
                let { selectedItem: t, onItemSelect: n, type: r = "side", look: i = "grey" } = this.props;
                return s.isValidElement(e)
                    ? s.cloneElement(e, {
                          selectedItem: t,
                          onItemSelect: n,
                          itemType: r,
                          look: i,
                      })
                    : null;
            }),
            m(this, "getNodeForKeydownEvent", async (e) => {
                let { orientation: t = "horizontal" } = this.props,
                    n = "vertical" === t ? _.dh.ARROW_UP : _.dh.ARROW_LEFT,
                    r = "vertical" === t ? _.dh.ARROW_DOWN : _.dh.ARROW_RIGHT;
                switch (e.key) {
                    case n:
                        return this.focusManager.getPreviousFocusableElement();
                    case r:
                        return this.focusManager.getNextFocusableElement();
                    case _.dh.HOME:
                        return this.focusManager.getFirstFocusableElement();
                    case _.dh.END:
                        return this.focusManager.getLastFocusableElement();
                }
                return null;
            }),
            m(this, "handleKeyDown", async (e) => {
                let t = await this.getNodeForKeydownEvent(e);
                null != t && (e.preventDefault(), t.focus());
            });
    }
}
m(R, "Header", v), m(R, "Item", N), m(R, "Separator", S), m(R, "Panel", I);
