"use strict";
n.d(t, { V: () => T });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(52724),
    l = n(317097),
    u = n(827734),
    c = n(939249),
    d = n(834730),
    _ = n(650583),
    f = n(704118);
let p = { side: f.Cf, top: f.Mn, "top-pill": f.vO },
    h = i.forwardRef(function (e, t) {
        let { className: n, onClick: i, children: a, "aria-expanded": o, "aria-controls": l } = e;
        return (0, r.jsx)(c.D, {
            innerRef: t,
            tabIndex: null == i ? -1 : 0,
            className: s()(f.wx, n),
            onClick: i,
            "aria-expanded": o,
            "aria-controls": l,
            focusProps: { offset: { top: -6 } },
            children: (0, r.jsx)(d.E, { variant: "eyebrow", color: "none", className: f.TK, children: a }),
        });
    });
function m(e) {
    let { style: t } = e;
    return (0, r.jsx)("div", { className: f.me, style: t });
}
let g = i.forwardRef(function (e, t) {
    let { children: n, id: i, ...a } = e;
    return (0, r.jsx)("div", { ...a, ref: t, role: "tabpanel", id: E(i), tabIndex: -1, children: n });
});
function E(e) {
    return `${e.replace(/\s+/g, "-").toLowerCase()}-tab`;
}
function A(e, t) {
    if (null == e) return;
    let n = {};
    return (
        "Selected" === t
            ? ((n.backgroundColor = e), (n.color = u.A.unsafe_rawColors.WHITE.css))
            : ("Hover" === t && (n.backgroundColor = (0, l.xp)(e, 0.1)), (n.color = e)),
        n
    );
}
class I extends i.Component {
    static defaultProps = { disabled: !1, look: "grey", disableItemStyles: !1 };
    state = { hover: !1, active: !1 };
    handleClick = (e) => {
        let { disabled: t, onClick: n, id: r, onItemSelect: i } = this.props;
        t || (null != n ? n(e) : null != i && i(r));
    };
    handleMouseDown = () => {
        let { color: e } = this.props;
        null != e && this.setState({ active: !0 });
    };
    handleMouseUp = () => {
        this.setState({ active: !1 });
    };
    handleMouseOver = () => {
        this.setState({ hover: !0 });
    };
    handleMouseOut = () => {
        this.setState({ hover: !1, active: !1 });
    };
    getStyle() {
        let { color: e, id: t, selectedItem: n, itemType: r } = this.props,
            { hover: i, active: a } = this.state;
        if (null != e) {
            if ("side" === r) return (null != t && n === t) || a ? A(e, "Selected") : i ? A(e, "Hover") : A(e);
            if ("top" === r)
                if (n === t) return { borderColor: e, color: e };
                else if (i) return { borderColor: (0, l.xp)(e, 0.1), color: (0, l.xp)(e, 0.6) };
                else return { borderColor: "transparent", color: (0, l.xp)(e, 0.4) };
            if ("top-pill" === r)
                if (n === t) return { backgroundColor: (0, l.xp)(e, 0.2), color: e };
                else return { backgroundColor: e, color: u.A.unsafe_rawColors.WHITE.css };
        }
    }
    render() {
        let {
                children: e,
                className: t,
                id: n,
                selectedItem: i,
                color: a,
                variant: o,
                disabled: l,
                onContextMenu: u,
                clickableRef: d,
                clickableInnerRef: _,
                look: p,
                disableItemStyles: h,
            } = this.props,
            m = this.props["aria-label"],
            g = i === n;
        return (0, r.jsx)(c.D, {
            className: s()(t, {
                [f.AS]: !h,
                [f.wk]: "brand" === p,
                [f.wH]: null == a && g,
                [f.Sp]: "grey" === p,
                [f.r9]: null == a && l,
                [f.RD]: "destructive" === o,
            }),
            style: this.getStyle(),
            role: "tab",
            "aria-selected": g,
            "aria-controls": g ? E(`${n}`) : void 0,
            "aria-disabled": l,
            tabIndex: g ? 0 : -1,
            onMouseEnter: null != a ? this.handleMouseOver : void 0,
            onClick: this.handleClick,
            onMouseLeave: null != a ? this.handleMouseOut : void 0,
            onMouseUp: null != a ? this.handleMouseUp : void 0,
            onMouseDown: this.handleMouseDown,
            onContextMenu: u,
            "aria-label": m,
            innerRef: _,
            ref: d,
            children: e,
        });
    }
}
class T extends i.Component {
    static Header = h;
    static Item = I;
    static Separator = m;
    static Panel = g;
    tabBarRef = i.createRef();
    focusManager = (0, o.C)({
        getFocusableElements: () => {
            let e = this.tabBarRef.current;
            return null != e ? Array.from(e.querySelectorAll('[role="tab"][aria-disabled="false"]')) : [];
        },
        getActiveElement: () => this.tabBarRef.current?.ownerDocument.activeElement,
    });
    renderChildren = (e) => {
        let { selectedItem: t, onItemSelect: n, type: r = "side", look: a = "grey" } = this.props;
        return i.isValidElement(e)
            ? i.cloneElement(e, { selectedItem: t, onItemSelect: n, itemType: r, look: a })
            : null;
    };
    getNodeForKeydownEvent = async (e) => {
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
    };
    handleKeyDown = async (e) => {
        let t = await this.getNodeForKeydownEvent(e);
        null != t && (e.preventDefault(), t.focus());
    };
    render() {
        let {
            className: e,
            children: t,
            type: n = "side",
            style: a,
            "aria-label": o,
            orientation: l = "horizontal",
        } = this.props;
        return (0, r.jsx)("div", {
            ref: this.tabBarRef,
            className: s()(e, p[n]),
            style: a,
            role: "tablist",
            "aria-orientation": l,
            onKeyDown: this.handleKeyDown,
            "aria-label": o,
            children: i.Children.map(t, this.renderChildren),
        });
    }
}
