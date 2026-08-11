"use strict";
n.d(t, { V: () => S });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(52724),
    o = n(317097),
    d = n(661531),
    c = n(939249),
    u = n(460890),
    _ = n(834730),
    E = n(650583),
    A = n(720235);
let h = { side: A.Cf, top: A.Mn, "top-pill": A.vO },
    I = r.forwardRef(function (e, t) {
        let n,
            { className: r, onClick: a, children: l, "aria-expanded": o, "aria-controls": d } = e,
            E =
                ((n = (0, u.G9)().experiments?.enabledExperiments),
                n?.includes("mana-type-consolidation") === !0 ? "experimental/body-xs/medium" : "eyebrow");
        return null == a
            ? (0, i.jsx)("div", {
                  className: s()(A.wx, r),
                  children: (0, i.jsx)(_.E, { variant: E, color: "none", className: A.TK, ref: t, children: l }),
              })
            : (0, i.jsx)(c.D, {
                  innerRef: t,
                  className: s()(A.wx, r),
                  onClick: a,
                  "aria-expanded": o,
                  "aria-controls": d,
                  focusProps: { offset: { top: -6 } },
                  children: (0, i.jsx)(_.E, { variant: E, color: "none", className: A.TK, children: l }),
              });
    });
function f(e) {
    let { style: t } = e;
    return (0, i.jsx)("div", { className: A.me, style: t });
}
let p = r.forwardRef(function (e, t) {
    let { children: n, id: r, ...a } = e;
    return (0, i.jsx)("div", { ...a, ref: t, role: "tabpanel", id: T(r), tabIndex: -1, children: n });
});
function T(e) {
    return `${e.replace(/\s+/g, "-").toLowerCase()}-tab`;
}
function m(e, t) {
    if (null == e) return;
    let n = {};
    return (
        "Selected" === t
            ? ((n.backgroundColor = e), (n.color = d.A.unsafe_rawColors.WHITE.css))
            : ("Hover" === t && (n.backgroundColor = (0, o.xp)(e, 0.1)), (n.color = e)),
        n
    );
}
class g extends r.Component {
    static defaultProps = { disabled: !1, look: "grey", disableItemStyles: !1 };
    state = { hover: !1, active: !1 };
    handleClick = (e) => {
        let { disabled: t, onClick: n, id: i, onItemSelect: r } = this.props;
        t || (null != n ? n(e) : null != r && r(i));
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
        let { color: e, id: t, selectedItem: n, itemType: i } = this.props,
            { hover: r, active: a } = this.state;
        if (null != e) {
            if ("side" === i) return (null != t && n === t) || a ? m(e, "Selected") : r ? m(e, "Hover") : m(e);
            if ("top" === i)
                if (n === t) return { borderColor: e, color: e };
                else if (r) return { borderColor: (0, o.xp)(e, 0.1), color: (0, o.xp)(e, 0.6) };
                else return { borderColor: "transparent", color: (0, o.xp)(e, 0.4) };
            if ("top-pill" === i)
                if (n === t) return { backgroundColor: (0, o.xp)(e, 0.2), color: e };
                else return { backgroundColor: e, color: d.A.unsafe_rawColors.WHITE.css };
        }
    }
    render() {
        let {
                children: e,
                className: t,
                id: n,
                selectedItem: r,
                color: a,
                variant: l,
                disabled: o,
                onContextMenu: d,
                clickableRef: u,
                clickableInnerRef: E,
                look: h,
                disableItemStyles: I,
                role: f = "tab",
            } = this.props,
            p = this.props["aria-label"],
            m = r === n,
            g = "button" === f;
        return (0, i.jsx)(c.D, {
            className: s()(t, {
                [A.AS]: !I,
                [A.wk]: "brand" === h,
                [A.wH]: null == a && m,
                [A.Sp]: "grey" === h,
                [A.r9]: null == a && o,
                [A.RD]: "destructive" === l,
            }),
            style: this.getStyle(),
            role: f,
            "aria-selected": g ? void 0 : m,
            "aria-controls": g ? void 0 : m ? T(`${n}`) : void 0,
            "aria-disabled": o,
            tabIndex: g ? (!0 === o ? -1 : 0) : m ? 0 : -1,
            onMouseEnter: null != a ? this.handleMouseOver : void 0,
            onClick: this.handleClick,
            onMouseLeave: null != a ? this.handleMouseOut : void 0,
            onMouseUp: null != a ? this.handleMouseUp : void 0,
            onMouseDown: this.handleMouseDown,
            onContextMenu: d,
            "aria-label": p,
            innerRef: E,
            ref: u,
            children: (0, i.jsx)(_.E, {
                variant: "top" === this.props.itemType ? "text-sm/semibold" : "text-md/medium",
                color: "none",
                className: A.rv,
                children: e,
            }),
        });
    }
}
class S extends r.Component {
    static Header = I;
    static Item = g;
    static Separator = f;
    static Panel = p;
    tabBarRef = r.createRef();
    focusManager = (0, l.C)({
        getFocusableElements: () => {
            let e = this.tabBarRef.current;
            return null != e ? Array.from(e.querySelectorAll('[role="tab"][aria-disabled="false"]')) : [];
        },
        getActiveElement: () => this.tabBarRef.current?.ownerDocument.activeElement,
    });
    renderChildren = (e) => {
        let { selectedItem: t, onItemSelect: n, type: i = "side", look: a = "grey" } = this.props,
            s = !1;
        return r.Children.toArray(e).map((e, l) => {
            if (!r.isValidElement(e)) return null;
            let o = t;
            return (
                null != t ||
                    s ||
                    e.type !== g ||
                    null == e.props.id ||
                    !0 === e.props.disabled ||
                    ((o = e.props.id), (s = !0)),
                r.cloneElement(e, { key: e.key ?? l, selectedItem: o, onItemSelect: n, itemType: i, look: a })
            );
        });
    };
    getNodeForKeydownEvent = async (e) => {
        let { orientation: t = "horizontal" } = this.props,
            n = "vertical" === t ? E.dh.ARROW_UP : E.dh.ARROW_LEFT,
            i = "vertical" === t ? E.dh.ARROW_DOWN : E.dh.ARROW_RIGHT;
        switch (e.key) {
            case n:
                return this.focusManager.getPreviousFocusableElement();
            case i:
                return this.focusManager.getNextFocusableElement();
            case E.dh.HOME:
                return this.focusManager.getFirstFocusableElement();
            case E.dh.END:
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
            style: r,
            "aria-label": a,
            orientation: l = "horizontal",
        } = this.props;
        return (0, i.jsx)("div", {
            ref: this.tabBarRef,
            className: s()(e, h[n]),
            style: r,
            role: "tablist",
            "aria-orientation": l,
            onKeyDown: this.handleKeyDown,
            "aria-label": a,
            children: null != t ? this.renderChildren(t) : null,
        });
    }
}
