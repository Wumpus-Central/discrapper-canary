var l = r(477900),
    o = r(582128),
    s = r(503698),
    n = r.n(s),
    a = r(52724),
    i = r(317097),
    u = r(646514),
    d = r(939249),
    c = r(834730),
    h = r(650583),
    p = r(516580);
let b = { side: p.Cf, top: p.Mn, "top-pill": p.vO };
function f(e) {
    let { className: t, onClick: r, children: o, "aria-expanded": s, "aria-controls": a, ref: i } = e;
    return null == r
        ? (0, l.jsx)("div", {
              className: n()(p.wx, t),
              children: (0, l.jsx)(c.E, {
                  variant: "body-sm/medium",
                  color: "none",
                  className: p.TK,
                  ref: i,
                  children: o,
              }),
          })
        : (0, l.jsx)(d.D, {
              innerRef: i,
              className: n()(p.wx, t),
              onClick: r,
              "aria-expanded": s,
              "aria-controls": a,
              focusProps: { offset: { top: -6 } },
              children: (0, l.jsx)(c.E, { variant: "body-sm/medium", color: "none", className: p.TK, children: o }),
          });
}
function m(e) {
    let { style: t } = e;
    return (0, l.jsx)("div", { className: p.me, style: t });
}
let v = function (e) {
    let { children: t, id: r, ref: o, ...s } = e;
    return (0, l.jsx)("div", { ...s, ref: o, role: "tabpanel", id: y(r), tabIndex: -1, children: t });
};
function y(e) {
    return `${e.replace(/\s+/g, "-").toLowerCase()}-tab`;
}
function x(e, t) {
    if (null == e) return;
    let r = {};
    return (
        "Selected" === t
            ? ((r.backgroundColor = e), (r.color = u.A.unsafe_rawColors.WHITE.css))
            : ("Hover" === t && (r.backgroundColor = (0, i.xp)(e, 0.1)), (r.color = e)),
        r
    );
}
class C extends o.Component {
    static defaultProps = { disabled: !1, look: "grey", disableItemStyles: !1 };
    state = { hover: !1, active: !1 };
    handleClick = (e) => {
        let { disabled: t, onClick: r, id: l, onItemSelect: o } = this.props;
        t || (null != r ? r(e) : null != o && o(l));
    };
    handleMouseDown = () => {
        let { color: e } = this.props;
        null != e && this.setState({ active: !0 });
    };
    handleMouseUp = () => {
        this.setState({ active: !1 });
    };
    handleMouseOver = (e) => {
        let { color: t, onMouseEnter: r } = this.props;
        (null != t && this.setState({ hover: !0 }), r?.(e));
    };
    handleMouseOut = (e) => {
        let { color: t, onMouseLeave: r } = this.props;
        (null != t && this.setState({ hover: !1, active: !1 }), r?.(e));
    };
    getStyle() {
        let { color: e, id: t, selectedItem: r, itemType: l } = this.props,
            { hover: o, active: s } = this.state;
        if (null != e) {
            if ("side" === l) return (null != t && r === t) || s ? x(e, "Selected") : o ? x(e, "Hover") : x(e);
            if ("top" === l)
                if (r === t) return { borderColor: e, color: e };
                else if (o) return { borderColor: (0, i.xp)(e, 0.1), color: (0, i.xp)(e, 0.6) };
                else return { borderColor: "transparent", color: (0, i.xp)(e, 0.4) };
            if ("top-pill" === l)
                if (r === t) return { backgroundColor: (0, i.xp)(e, 0.2), color: e };
                else return { backgroundColor: e, color: u.A.unsafe_rawColors.WHITE.css };
        }
    }
    render() {
        let {
                children: e,
                className: t,
                id: r,
                selectedItem: o,
                color: s,
                variant: a,
                disabled: i,
                onContextMenu: u,
                clickableRef: h,
                innerRef: b,
                look: f,
                disableItemStyles: m,
                role: v = "tab",
                onFocus: x,
                onBlur: C,
            } = this.props,
            g = this.props["aria-label"],
            w = o === r,
            E = "button" === v;
        return (0, l.jsx)(d.D, {
            className: n()(t, {
                [p.AS]: !m,
                [p.wk]: "brand" === f,
                [p.wH]: null == s && w,
                [p.Sp]: "grey" === f,
                [p.r9]: null == s && i,
                [p.RD]: "destructive" === a,
            }),
            style: this.getStyle(),
            role: v,
            "aria-selected": E ? void 0 : w,
            "aria-controls": E ? void 0 : w ? y(`${r}`) : void 0,
            "aria-disabled": i,
            tabIndex: E ? (!0 === i ? -1 : 0) : w ? 0 : -1,
            onMouseEnter: this.handleMouseOver,
            onClick: this.handleClick,
            onMouseLeave: this.handleMouseOut,
            onMouseUp: null != s ? this.handleMouseUp : void 0,
            onMouseDown: this.handleMouseDown,
            onContextMenu: u,
            onFocus: x,
            onBlur: C,
            "aria-label": g,
            innerRef: b,
            ref: h,
            children: (0, l.jsx)(c.E, {
                variant: "top" === this.props.itemType ? "body-sm/semibold" : "body-md/medium",
                color: "none",
                className: p.rv,
                children: e,
            }),
        });
    }
}
class g extends o.Component {
    static Header = f;
    static Item = C;
    static Separator = m;
    static Panel = v;
    tabBarRef = o.createRef();
    focusManager = (0, a.C)({
        getFocusableElements: () => {
            let e = this.tabBarRef.current;
            return null != e ? Array.from(e.querySelectorAll('[role="tab"]')) : [];
        },
        getActiveElement: () => this.tabBarRef.current?.ownerDocument.activeElement,
    });
    renderChildren = (e) => {
        let { selectedItem: t, onItemSelect: r, type: l = "side", look: s = "grey" } = this.props,
            n = !1;
        return o.Children.toArray(e).map((e, a) => {
            if (!o.isValidElement(e)) return null;
            let i = t;
            return (
                null != t ||
                    n ||
                    e.type !== C ||
                    null == e.props.id ||
                    !0 === e.props.disabled ||
                    ((i = e.props.id), (n = !0)),
                o.cloneElement(e, { key: e.key ?? a, selectedItem: i, onItemSelect: r, itemType: l, look: s })
            );
        });
    };
    getNodeForKeydownEvent = async (e) => {
        let { orientation: t = "horizontal" } = this.props,
            r = "vertical" === t ? h.dh.ARROW_UP : h.dh.ARROW_LEFT,
            l = "vertical" === t ? h.dh.ARROW_DOWN : h.dh.ARROW_RIGHT;
        switch (e.key) {
            case r:
                return this.focusManager.getPreviousFocusableElement();
            case l:
                return this.focusManager.getNextFocusableElement();
            case h.dh.HOME:
                return this.focusManager.getFirstFocusableElement();
            case h.dh.END:
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
            type: r = "side",
            style: o,
            "aria-label": s,
            orientation: a = "horizontal",
        } = this.props;
        return (0, l.jsx)("div", {
            ref: this.tabBarRef,
            className: n()(e, b[r]),
            style: o,
            role: "tablist",
            "aria-orientation": a,
            onKeyDown: this.handleKeyDown,
            "aria-label": s,
            children: null != t ? this.renderChildren(t) : null,
        });
    }
}
r.d(t, {}, { V: g });
