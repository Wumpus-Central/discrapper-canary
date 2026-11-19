var l = r(477900),
    s = r(582128),
    n = r(503698),
    o = r.n(n),
    a = r(52724),
    i = r(317097),
    d = r(646514),
    u = r(939249),
    c = r(834730),
    h = r(650583),
    p = r(516580);
let f = { side: p.Cf, top: p.Mn, "top-pill": p.vO };
function b(e) {
    let { className: t, onClick: r, children: s, "aria-expanded": n, "aria-controls": a, ref: i } = e;
    return null == r
        ? (0, l.jsx)("div", {
              className: o()(p.wx, t),
              children: (0, l.jsx)(c.E, {
                  tag: "div",
                  variant: "heading-xs/medium",
                  color: "text-muted",
                  className: p.TK,
                  ref: i,
                  children: s,
              }),
          })
        : (0, l.jsx)(u.D, {
              innerRef: i,
              className: o()(p.wx, t),
              onClick: r,
              "aria-expanded": n,
              "aria-controls": a,
              focusProps: { offset: { top: -6 } },
              children: (0, l.jsx)(c.E, {
                  tag: "div",
                  variant: "heading-xs/medium",
                  color: "text-muted",
                  className: p.TK,
                  children: s,
              }),
          });
}
function m(e) {
    let { style: t } = e;
    return (0, l.jsx)("div", { className: p.me, style: t });
}
let v = function (e) {
    let { children: t, id: r, ref: s, ...n } = e;
    return (0, l.jsx)("div", { ...n, ref: s, role: "tabpanel", id: x(r), tabIndex: -1, children: t });
};
function x(e) {
    return `${e.replace(/\s+/g, "-").toLowerCase()}-tab`;
}
function g(e, t) {
    if (null == e) return;
    let r = {};
    return (
        "Selected" === t
            ? ((r.backgroundColor = e), (r.color = d.A.unsafe_rawColors.WHITE.css))
            : ("Hover" === t && (r.backgroundColor = (0, i.xp)(e, 0.1)), (r.color = e)),
        r
    );
}
class y extends s.Component {
    static defaultProps = { disabled: !1, look: "grey", disableItemStyles: !1 };
    state = { hover: !1, active: !1 };
    handleClick = (e) => {
        let { disabled: t, onClick: r, id: l, onItemSelect: s } = this.props;
        t || (null != r ? r(e) : null != s && s(l));
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
            { hover: s, active: n } = this.state;
        if (null != e) {
            if ("side" === l) return (null != t && r === t) || n ? g(e, "Selected") : s ? g(e, "Hover") : g(e);
            if ("top" === l)
                if (r === t) return { borderColor: e, color: e };
                else if (s) return { borderColor: (0, i.xp)(e, 0.1), color: (0, i.xp)(e, 0.6) };
                else return { borderColor: "transparent", color: (0, i.xp)(e, 0.4) };
            if ("top-pill" === l)
                if (r === t) return { backgroundColor: (0, i.xp)(e, 0.2), color: e };
                else return { backgroundColor: e, color: d.A.unsafe_rawColors.WHITE.css };
        }
    }
    render() {
        let {
                children: e,
                className: t,
                id: r,
                selectedItem: s,
                color: n,
                variant: a,
                disabled: i,
                onContextMenu: d,
                clickableRef: h,
                innerRef: f,
                look: b,
                disableItemStyles: m,
                role: v = "tab",
                onFocus: g,
                onBlur: y,
            } = this.props,
            C = this.props["aria-label"],
            w = s === r,
            E = "button" === v;
        return (0, l.jsx)(u.D, {
            className: o()(t, {
                [p.AS]: !m,
                [p.wk]: "brand" === b,
                [p.wH]: null == n && w,
                [p.Sp]: "grey" === b,
                [p.r9]: null == n && i,
                [p.RD]: "destructive" === a,
            }),
            style: this.getStyle(),
            role: v,
            "aria-selected": E ? void 0 : w,
            "aria-controls": E ? void 0 : w ? x(`${r}`) : void 0,
            "aria-disabled": i,
            tabIndex: E ? (!0 === i ? -1 : 0) : w ? 0 : -1,
            onMouseEnter: this.handleMouseOver,
            onClick: this.handleClick,
            onMouseLeave: this.handleMouseOut,
            onMouseUp: null != n ? this.handleMouseUp : void 0,
            onMouseDown: this.handleMouseDown,
            onContextMenu: d,
            onFocus: g,
            onBlur: y,
            "aria-label": C,
            innerRef: f,
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
class C extends s.Component {
    static Header = b;
    static Item = y;
    static Separator = m;
    static Panel = v;
    tabBarRef = s.createRef();
    focusManager = (0, a.C)({
        getFocusableElements: () => {
            let e = this.tabBarRef.current;
            return null != e ? Array.from(e.querySelectorAll('[role="tab"]')) : [];
        },
        getActiveElement: () => this.tabBarRef.current?.ownerDocument.activeElement,
    });
    renderChildren = (e) => {
        let { selectedItem: t, onItemSelect: r, type: l = "side", look: n = "grey" } = this.props,
            o = !1;
        return s.Children.toArray(e).map((e, a) => {
            if (!s.isValidElement(e)) return null;
            let i = t;
            return (
                null != t ||
                    o ||
                    e.type !== y ||
                    null == e.props.id ||
                    !0 === e.props.disabled ||
                    ((i = e.props.id), (o = !0)),
                s.cloneElement(e, { key: e.key ?? a, selectedItem: i, onItemSelect: r, itemType: l, look: n })
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
            style: s,
            "aria-label": n,
            orientation: a = "horizontal",
        } = this.props;
        return (0, l.jsx)("div", {
            ref: this.tabBarRef,
            className: o()(e, f[r]),
            style: s,
            role: "tablist",
            "aria-orientation": a,
            onKeyDown: this.handleKeyDown,
            "aria-label": n,
            children: null != t ? this.renderChildren(t) : null,
        });
    }
}
r.d(t, {}, { V: C });
