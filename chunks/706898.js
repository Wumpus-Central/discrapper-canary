n.d(t, { n: () => S }), n(757143), n(411104), n(47120);
var i,
    r,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(372817),
    c = n(866442),
    d = n(692547),
    f = n(1561),
    _ = n(993365),
    p = n(981631),
    h = n(943947);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = {
    side: h.side,
    top: h.top,
    'top-pill': h.topPill
};
function E(e) {
    let { className: t, onClick: n, children: i, 'aria-expanded': r, 'aria-controls': s } = e;
    return (0, a.jsx)(f.P, {
        tabIndex: null == n ? -1 : 0,
        className: l()(h.header, t),
        onClick: n,
        'aria-expanded': r,
        'aria-controls': s,
        focusProps: { offset: { top: -6 } },
        children: (0, a.jsx)(_.x, {
            variant: 'eyebrow',
            color: 'none',
            className: h.headerText,
            children: i
        })
    });
}
function v(e) {
    let { style: t } = e;
    return (0, a.jsx)('div', {
        className: h.separator,
        style: t
    });
}
let y = s.forwardRef(function (e, t) {
    let { children: n, id: i, ...r } = e;
    return (0, a.jsx)('div', {
        ...r,
        ref: t,
        role: 'tabpanel',
        id: I(i),
        tabIndex: -1,
        children: n
    });
});
function I(e) {
    return ''.concat(e.replace(/\s+/g, '-').toLowerCase(), '-tab');
}
function T(e, t) {
    if (null == e) return;
    let n = {};
    return 'Selected' === t ? ((n.backgroundColor = e), (n.color = d.Z.unsafe_rawColors.WHITE_500.css)) : ('Hover' === t && (n.backgroundColor = (0, c.wK)(e, 0.1)), (n.color = e)), n;
}
class b extends (i = s.Component) {
    getStyle() {
        let { color: e, id: t, selectedItem: n, itemType: i } = this.props,
            { hover: r, active: a } = this.state;
        if (null != e) {
            if ('side' === i) return (null != t && n === t) || a ? T(e, 'Selected') : r ? T(e, 'Hover') : T(e);
            if ('top' === i)
                return n === t
                    ? {
                          borderColor: e,
                          color: e
                      }
                    : r
                      ? {
                            borderColor: (0, c.wK)(e, 0.1),
                            color: (0, c.wK)(e, 0.6)
                        }
                      : {
                            borderColor: 'transparent',
                            color: (0, c.wK)(e, 0.4)
                        };
            if ('top-pill' === i)
                return n === t
                    ? {
                          backgroundColor: (0, c.wK)(e, 0.2),
                          color: e
                      }
                    : {
                          backgroundColor: e,
                          color: d.Z.unsafe_rawColors.WHITE_500.css
                      };
        }
    }
    render() {
        let { children: e, className: t, id: n, selectedItem: i, color: r, disabled: s, onContextMenu: o, clickableRef: u, look: c, disableItemStyles: d } = this.props,
            _ = this.props['aria-label'],
            p = i === n;
        return (0, a.jsx)(f.P, {
            className: l()(t, {
                [h.item]: !d,
                [h.brand]: 'brand' === c,
                [h.selected]: null == r && p,
                [h.themed]: 'grey' === c,
                [h.disabled]: null == r && s
            }),
            style: this.getStyle(),
            role: 'tab',
            'aria-selected': p,
            'aria-controls': p ? I(''.concat(n)) : void 0,
            'aria-disabled': s,
            tabIndex: p ? 0 : -1,
            onMouseEnter: null != r ? this.handleMouseOver : void 0,
            onClick: this.handleClick,
            onMouseLeave: null != r ? this.handleMouseOut : void 0,
            onMouseUp: null != r ? this.handleMouseUp : void 0,
            onMouseDown: this.handleMouseDown,
            onContextMenu: o,
            'aria-label': _,
            ref: u,
            children: e
        });
    }
    constructor(...e) {
        super(...e),
            m(this, 'state', {
                hover: !1,
                active: !1
            }),
            m(this, 'handleClick', (e) => {
                let { disabled: t, onClick: n, id: i, onItemSelect: r } = this.props;
                !t && (null != n ? n(e) : null != r && r(i));
            }),
            m(this, 'handleMouseDown', () => {
                let { color: e } = this.props;
                null != e && this.setState({ active: !0 });
            }),
            m(this, 'handleMouseUp', () => {
                this.setState({ active: !1 });
            }),
            m(this, 'handleMouseOver', () => {
                this.setState({ hover: !0 });
            }),
            m(this, 'handleMouseOut', () => {
                this.setState({
                    hover: !1,
                    active: !1
                });
            });
    }
}
m(b, 'defaultProps', {
    disabled: !1,
    look: 'grey',
    disableItemStyles: !1
});
class S extends (r = s.Component) {
    render() {
        let { className: e, children: t, type: n = 'side', style: i, 'aria-label': r, orientation: o = 'horizontal' } = this.props;
        return (0, a.jsx)('div', {
            ref: this.tabBarRef,
            className: l()(e, g[n]),
            style: i,
            role: 'tablist',
            'aria-orientation': o,
            onKeyDown: this.handleKeyDown,
            'aria-label': r,
            children: s.Children.map(t, this.renderChildren)
        });
    }
    constructor(...e) {
        super(...e),
            m(this, 'tabBarRef', s.createRef()),
            m(
                this,
                'focusManager',
                (0, u.E)({
                    getFocusableElements: () => {
                        let e = this.tabBarRef.current;
                        return null != e ? Array.from(e.querySelectorAll('[role="tab"][aria-disabled="false"]')) : [];
                    },
                    getActiveElement: () => {
                        var e;
                        return null === (e = this.tabBarRef.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement;
                    }
                })
            ),
            m(this, 'renderChildren', (e) => {
                let { selectedItem: t, onItemSelect: n, type: i = 'side', look: r = 'grey' } = this.props;
                return s.isValidElement(e)
                    ? s.cloneElement(e, {
                          selectedItem: t,
                          onItemSelect: n,
                          itemType: i,
                          look: r
                      })
                    : null;
            }),
            m(this, 'getNodeForKeydownEvent', async (e) => {
                let { orientation: t = 'horizontal' } = this.props,
                    n = 'vertical' === t ? p.yXg.ARROW_UP : p.yXg.ARROW_LEFT,
                    i = 'vertical' === t ? p.yXg.ARROW_DOWN : p.yXg.ARROW_RIGHT;
                switch (e.which) {
                    case n:
                        return this.focusManager.getPreviousFocusableElement();
                    case i:
                        return this.focusManager.getNextFocusableElement();
                    case p.yXg.HOME:
                        return this.focusManager.getFirstFocusableElement();
                    case p.yXg.END:
                        return this.focusManager.getLastFocusableElement();
                }
                return null;
            }),
            m(this, 'handleKeyDown', async (e) => {
                let t = await this.getNodeForKeydownEvent(e);
                null != t && (e.preventDefault(), t.focus());
            });
    }
}
m(S, 'Header', E), m(S, 'Item', b), m(S, 'Separator', v), m(S, 'Panel', y);
