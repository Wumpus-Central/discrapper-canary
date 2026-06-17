"use strict";
n.d(t, { V: () => T });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(52724),
    l = n(317097),
    u = n(661531),
    c = n(939249),
    d = n(834730),
    _ = n(650583),
    h = n(549107);
let f = { side: h.Cf, top: h.Mn, "top-pill": h.vO },
    p = r.forwardRef(function (e, t) {
        let { className: n, onClick: r, children: s, "aria-expanded": o, "aria-controls": l } = e;
        return null == r
            ? (0, i.jsx)("div", {
                  className: a()(h.wx, n),
                  children: (0, i.jsx)(d.E, {
                      variant: "eyebrow",
                      color: "none",
                      className: h.TK,
                      ref: t,
                      children: s,
                  }),
              })
            : (0, i.jsx)(c.D, {
                  innerRef: t,
                  className: a()(h.wx, n),
                  onClick: r,
                  "aria-expanded": o,
                  "aria-controls": l,
                  focusProps: { offset: { top: -6 } },
                  children: (0, i.jsx)(d.E, { variant: "eyebrow", color: "none", className: h.TK, children: s }),
              });
    });
function E(e) {
    let { style: t } = e;
    return (0, i.jsx)("div", { className: h.me, style: t });
}
let m = r.forwardRef(function (e, t) {
    let { children: n, id: r, ...s } = e;
    return (0, i.jsx)("div", { ...s, ref: t, role: "tabpanel", id: g(r), tabIndex: -1, children: n });
});
function g(e) {
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
class I extends r.Component {
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
            { hover: r, active: s } = this.state;
        if (null != e) {
            if ("side" === i) return (null != t && n === t) || s ? A(e, "Selected") : r ? A(e, "Hover") : A(e);
            if ("top" === i)
                if (n === t) return { borderColor: e, color: e };
                else if (r) return { borderColor: (0, l.xp)(e, 0.1), color: (0, l.xp)(e, 0.6) };
                else return { borderColor: "transparent", color: (0, l.xp)(e, 0.4) };
            if ("top-pill" === i)
                if (n === t) return { backgroundColor: (0, l.xp)(e, 0.2), color: e };
                else return { backgroundColor: e, color: u.A.unsafe_rawColors.WHITE.css };
        }
    }
    render() {
        let {
                children: e,
                className: t,
                id: n,
                selectedItem: r,
                color: s,
                variant: o,
                disabled: l,
                onContextMenu: u,
                clickableRef: d,
                clickableInnerRef: _,
                look: f,
                disableItemStyles: p,
                role: E = "tab",
            } = this.props,
            m = this.props["aria-label"],
            A = r === n,
            I = "button" === E;
        return (0, i.jsx)(c.D, {
            className: a()(t, {
                [h.AS]: !p,
                [h.wk]: "brand" === f,
                [h.wH]: null == s && A,
                [h.Sp]: "grey" === f,
                [h.r9]: null == s && l,
                [h.RD]: "destructive" === o,
            }),
            style: this.getStyle(),
            role: E,
            "aria-selected": I ? void 0 : A,
            "aria-controls": I ? void 0 : A ? g(`${n}`) : void 0,
            "aria-disabled": l,
            tabIndex: I ? (!0 === l ? -1 : 0) : A ? 0 : -1,
            onMouseEnter: null != s ? this.handleMouseOver : void 0,
            onClick: this.handleClick,
            onMouseLeave: null != s ? this.handleMouseOut : void 0,
            onMouseUp: null != s ? this.handleMouseUp : void 0,
            onMouseDown: this.handleMouseDown,
            onContextMenu: u,
            "aria-label": m,
            innerRef: _,
            ref: d,
            children: e,
        });
    }
}
class T extends r.Component {
    static Header = p;
    static Item = I;
    static Separator = E;
    static Panel = m;
    tabBarRef = r.createRef();
    focusManager = (0, o.C)({
        getFocusableElements: () => {
            let e = this.tabBarRef.current;
            return null != e ? Array.from(e.querySelectorAll('[role="tab"][aria-disabled="false"]')) : [];
        },
        getActiveElement: () => this.tabBarRef.current?.ownerDocument.activeElement,
    });
    renderChildren = (e) => {
        let { selectedItem: t, onItemSelect: n, type: i = "side", look: s = "grey" } = this.props;
        return r.isValidElement(e)
            ? r.cloneElement(e, { selectedItem: t, onItemSelect: n, itemType: i, look: s })
            : null;
    };
    getNodeForKeydownEvent = async (e) => {
        let { orientation: t = "horizontal" } = this.props,
            n = "vertical" === t ? _.dh.ARROW_UP : _.dh.ARROW_LEFT,
            i = "vertical" === t ? _.dh.ARROW_DOWN : _.dh.ARROW_RIGHT;
        switch (e.key) {
            case n:
                return this.focusManager.getPreviousFocusableElement();
            case i:
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
            style: s,
            "aria-label": o,
            orientation: l = "horizontal",
        } = this.props;
        return (0, i.jsx)("div", {
            ref: this.tabBarRef,
            className: a()(e, f[n]),
            style: s,
            role: "tablist",
            "aria-orientation": l,
            onKeyDown: this.handleKeyDown,
            "aria-label": o,
            children: r.Children.map(t, this.renderChildren),
        });
    }
}
