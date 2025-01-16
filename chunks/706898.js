r.d(n, {
    n: function () {
        return O;
    }
});
var i,
    a,
    s,
    o = r(757143);
var l = r(411104);
var u = r(47120);
var c = r(200651),
    d = r(192379),
    f = r(120356),
    _ = r.n(f),
    h = r(372817),
    p = r(866442),
    m = r(692547),
    g = r(1561),
    E = r(993365),
    v = r(981631),
    I = r(943947);
function T(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let b = {
    side: I.side,
    top: I.top,
    'top-pill': I.topPill
};
function y(e) {
    let { className: n, onClick: r, children: i, 'aria-expanded': a, 'aria-controls': s } = e;
    return (0, c.jsx)(g.P, {
        tabIndex: null == r ? -1 : 0,
        className: _()(I.header, n),
        onClick: r,
        'aria-expanded': a,
        'aria-controls': s,
        focusProps: { offset: { top: -6 } },
        children: (0, c.jsx)(E.x, {
            variant: 'eyebrow',
            color: 'none',
            className: I.headerText,
            children: i
        })
    });
}
function S(e) {
    let { style: n } = e;
    return (0, c.jsx)('div', {
        className: I.separator,
        style: n
    });
}
let A = d.forwardRef(function (e, n) {
    let { children: r, id: i, ...a } = e;
    return (0, c.jsx)('div', {
        ...a,
        ref: n,
        role: 'tabpanel',
        id: N(i),
        tabIndex: -1,
        children: r
    });
});
function N(e) {
    return ''.concat(e.replace(/\s+/g, '-').toLowerCase(), '-tab');
}
function C(e, n) {
    if (null == e) return;
    let r = {};
    return 'Selected' === n ? ((r.backgroundColor = e), (r.color = m.Z.unsafe_rawColors.WHITE_500.css), r) : ('Hover' === n && (r.backgroundColor = (0, p.wK)(e, 0.1)), (r.color = e), r);
}
!(function (e) {
    (e.DEFAULT = 'Default'), (e.HOVER = 'Hover'), (e.SELECTED = 'Selected');
})(i || (i = {}));
class R extends (a = d.Component) {
    getStyle() {
        let { color: e, id: n, selectedItem: r, itemType: i } = this.props,
            { hover: a, active: s } = this.state;
        if (null != e) {
            if ('side' === i) return (null != n && r === n) || s ? C(e, 'Selected') : a ? C(e, 'Hover') : C(e);
            if ('top' === i)
                return r === n
                    ? {
                          borderColor: e,
                          color: e
                      }
                    : a
                      ? {
                            borderColor: (0, p.wK)(e, 0.1),
                            color: (0, p.wK)(e, 0.6)
                        }
                      : {
                            borderColor: 'transparent',
                            color: (0, p.wK)(e, 0.4)
                        };
            if ('top-pill' === i)
                return r === n
                    ? {
                          backgroundColor: (0, p.wK)(e, 0.2),
                          color: e
                      }
                    : {
                          backgroundColor: e,
                          color: m.Z.unsafe_rawColors.WHITE_500.css
                      };
        }
    }
    render() {
        let { children: e, className: n, id: r, selectedItem: i, color: a, disabled: s, onContextMenu: o, clickableRef: l, look: u, disableItemStyles: d } = this.props,
            f = this.props['aria-label'],
            h = i === r;
        return (0, c.jsx)(g.P, {
            className: _()(n, {
                [I.item]: !d,
                [I.brand]: 'brand' === u,
                [I.selected]: null == a && h,
                [I.themed]: 'grey' === u,
                [I.disabled]: null == a && s
            }),
            style: this.getStyle(),
            role: 'tab',
            'aria-selected': h,
            'aria-controls': h ? N(''.concat(r)) : void 0,
            'aria-disabled': s,
            tabIndex: h ? 0 : -1,
            onMouseEnter: null != a ? this.handleMouseOver : void 0,
            onClick: this.handleClick,
            onMouseLeave: null != a ? this.handleMouseOut : void 0,
            onMouseUp: null != a ? this.handleMouseUp : void 0,
            onMouseDown: this.handleMouseDown,
            onContextMenu: o,
            'aria-label': f,
            ref: l,
            children: e
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'state', {
                hover: !1,
                active: !1
            }),
            T(this, 'handleClick', (e) => {
                let { disabled: n, onClick: r, id: i, onItemSelect: a } = this.props;
                if (!n) null != r ? r(e) : null != a && a(i);
            }),
            T(this, 'handleMouseDown', () => {
                let { color: e } = this.props;
                null != e && this.setState({ active: !0 });
            }),
            T(this, 'handleMouseUp', () => {
                this.setState({ active: !1 });
            }),
            T(this, 'handleMouseOver', () => {
                this.setState({ hover: !0 });
            }),
            T(this, 'handleMouseOut', () => {
                this.setState({
                    hover: !1,
                    active: !1
                });
            });
    }
}
T(R, 'defaultProps', {
    disabled: !1,
    look: 'grey',
    disableItemStyles: !1
});
class O extends (s = d.Component) {
    render() {
        let { className: e, children: n, type: r = 'side', style: i, 'aria-label': a, orientation: s = 'horizontal' } = this.props;
        return (0, c.jsx)('div', {
            ref: this.tabBarRef,
            className: _()(e, b[r]),
            style: i,
            role: 'tablist',
            'aria-orientation': s,
            onKeyDown: this.handleKeyDown,
            'aria-label': a,
            children: d.Children.map(n, this.renderChildren)
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'tabBarRef', d.createRef()),
            T(
                this,
                'focusManager',
                (0, h.E)({
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
            T(this, 'renderChildren', (e) => {
                let { selectedItem: n, onItemSelect: r, type: i = 'side', look: a = 'grey' } = this.props;
                return d.isValidElement(e)
                    ? d.cloneElement(e, {
                          selectedItem: n,
                          onItemSelect: r,
                          itemType: i,
                          look: a
                      })
                    : null;
            }),
            T(this, 'getNodeForKeydownEvent', async (e) => {
                let { orientation: n = 'horizontal' } = this.props,
                    r = 'vertical' === n ? v.yXg.ARROW_UP : v.yXg.ARROW_LEFT,
                    i = 'vertical' === n ? v.yXg.ARROW_DOWN : v.yXg.ARROW_RIGHT;
                switch (e.which) {
                    case r:
                        return this.focusManager.getPreviousFocusableElement();
                    case i:
                        return this.focusManager.getNextFocusableElement();
                    case v.yXg.HOME:
                        return this.focusManager.getFirstFocusableElement();
                    case v.yXg.END:
                        return this.focusManager.getLastFocusableElement();
                }
                return null;
            }),
            T(this, 'handleKeyDown', async (e) => {
                let n = await this.getNodeForKeydownEvent(e);
                null != n && (e.preventDefault(), n.focus());
            });
    }
}
T(O, 'Header', y), T(O, 'Item', R), T(O, 'Separator', S), T(O, 'Panel', A);
