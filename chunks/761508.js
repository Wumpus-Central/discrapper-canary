"use strict";
n.d(t, { V: () => g });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(52724),
    o = n(317097),
    d = n(661531),
    c = n(939249),
    u = n(834730),
    _ = n(650583),
    E = n(720235);
let A = { side: E.Cf, top: E.Mn, "top-pill": E.vO },
    h = r.forwardRef(function (e, t) {
        let { className: n, onClick: r, children: a, "aria-expanded": l, "aria-controls": o } = e;
        return null == r
            ? (0, i.jsx)("div", {
                  className: s()(E.wx, n),
                  children: (0, i.jsx)(u.E, {
                      variant: "eyebrow",
                      color: "none",
                      className: E.TK,
                      ref: t,
                      children: a,
                  }),
              })
            : (0, i.jsx)(c.D, {
                  innerRef: t,
                  className: s()(E.wx, n),
                  onClick: r,
                  "aria-expanded": l,
                  "aria-controls": o,
                  focusProps: { offset: { top: -6 } },
                  children: (0, i.jsx)(u.E, { variant: "eyebrow", color: "none", className: E.TK, children: a }),
              });
    });
function I(e) {
    let { style: t } = e;
    return (0, i.jsx)("div", { className: E.me, style: t });
}
let f = r.forwardRef(function (e, t) {
    let { children: n, id: r, ...a } = e;
    return (0, i.jsx)("div", { ...a, ref: t, role: "tabpanel", id: p(r), tabIndex: -1, children: n });
});
function p(e) {
    return `${e.replace(/\s+/g, "-").toLowerCase()}-tab`;
}
function T(e, t) {
    if (null == e) return;
    let n = {};
    return (
        "Selected" === t
            ? ((n.backgroundColor = e), (n.color = d.A.unsafe_rawColors.WHITE.css))
            : ("Hover" === t && (n.backgroundColor = (0, o.xp)(e, 0.1)), (n.color = e)),
        n
    );
}
class m extends r.Component {
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
            if ("side" === i) return (null != t && n === t) || a ? T(e, "Selected") : r ? T(e, "Hover") : T(e);
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
                clickableInnerRef: _,
                look: A,
                disableItemStyles: h,
                role: I = "tab",
            } = this.props,
            f = this.props["aria-label"],
            T = r === n,
            m = "button" === I;
        return (0, i.jsx)(c.D, {
            className: s()(t, {
                [E.AS]: !h,
                [E.wk]: "brand" === A,
                [E.wH]: null == a && T,
                [E.Sp]: "grey" === A,
                [E.r9]: null == a && o,
                [E.RD]: "destructive" === l,
            }),
            style: this.getStyle(),
            role: I,
            "aria-selected": m ? void 0 : T,
            "aria-controls": m ? void 0 : T ? p(`${n}`) : void 0,
            "aria-disabled": o,
            tabIndex: m ? (!0 === o ? -1 : 0) : T ? 0 : -1,
            onMouseEnter: null != a ? this.handleMouseOver : void 0,
            onClick: this.handleClick,
            onMouseLeave: null != a ? this.handleMouseOut : void 0,
            onMouseUp: null != a ? this.handleMouseUp : void 0,
            onMouseDown: this.handleMouseDown,
            onContextMenu: d,
            "aria-label": f,
            innerRef: _,
            ref: u,
            children: e,
        });
    }
}
class g extends r.Component {
    static Header = h;
    static Item = m;
    static Separator = I;
    static Panel = f;
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
                    e.type !== m ||
                    null == e.props.id ||
                    !0 === e.props.disabled ||
                    ((o = e.props.id), (s = !0)),
                r.cloneElement(e, { key: e.key ?? l, selectedItem: o, onItemSelect: n, itemType: i, look: a })
            );
        });
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
            style: r,
            "aria-label": a,
            orientation: l = "horizontal",
        } = this.props;
        return (0, i.jsx)("div", {
            ref: this.tabBarRef,
            className: s()(e, A[n]),
            style: r,
            role: "tablist",
            "aria-orientation": l,
            onKeyDown: this.handleKeyDown,
            "aria-label": a,
            children: null != t ? this.renderChildren(t) : null,
        });
    }
}
