r.d(n, {
    n: function () {
        return O;
    }
});
var i,
    a,
    o,
    s = r(757143);
var l = r(411104);
var u = r(47120);
var c = r(200651),
    d = r(192379),
    f = r(120356),
    p = r.n(f),
    h = r(372817),
    _ = r(866442),
    m = r(692547),
    g = r(1561),
    E = r(993365),
    v = r(981631),
    y = r(943947);
function b(e, n, r) {
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
let I = {
    side: y.side,
    top: y.top,
    'top-pill': y.topPill
};
function T(e) {
    let { className: n, onClick: r, children: i, 'aria-expanded': a, 'aria-controls': o } = e;
    return (0, c.jsx)(g.P, {
        tabIndex: null == r ? -1 : 0,
        className: p()(y.header, n),
        onClick: r,
        'aria-expanded': a,
        'aria-controls': o,
        focusProps: { offset: { top: -6 } },
        children: (0, c.jsx)(E.x, {
            variant: 'eyebrow',
            color: 'none',
            className: y.headerText,
            children: i
        })
    });
}
function S(e) {
    let { style: n } = e;
    return (0, c.jsx)('div', {
        className: y.separator,
        style: n
    });
}
let A = d.forwardRef(function (e, n) {
    let { children: r, id: i, ...a } = e;
    return (0, c.jsx)('div', {
        ...a,
        ref: n,
        role: 'tabpanel',
        id: C(i),
        tabIndex: -1,
        children: r
    });
});
function C(e) {
    return ''.concat(e.replace(/\s+/g, '-').toLowerCase(), '-tab');
}
function N(e, n) {
    if (null == e) return;
    let r = {};
    return 'Selected' === n ? ((r.backgroundColor = e), (r.color = m.Z.unsafe_rawColors.WHITE_500.css), r) : ('Hover' === n && (r.backgroundColor = (0, _.wK)(e, 0.1)), (r.color = e), r);
}
!(function (e) {
    (e.DEFAULT = 'Default'), (e.HOVER = 'Hover'), (e.SELECTED = 'Selected');
})(i || (i = {}));
class R extends (a = d.Component) {
    getStyle() {
        let { color: e, id: n, selectedItem: r, itemType: i } = this.props,
            { hover: a, active: o } = this.state;
        if (null != e) {
            if ('side' === i) return (null != n && r === n) || o ? N(e, 'Selected') : a ? N(e, 'Hover') : N(e);
            if ('top' === i)
                return r === n
                    ? {
                          borderColor: e,
                          color: e
                      }
                    : a
                      ? {
                            borderColor: (0, _.wK)(e, 0.1),
                            color: (0, _.wK)(e, 0.6)
                        }
                      : {
                            borderColor: 'transparent',
                            color: (0, _.wK)(e, 0.4)
                        };
            if ('top-pill' === i)
                return r === n
                    ? {
                          backgroundColor: (0, _.wK)(e, 0.2),
                          color: e
                      }
                    : {
                          backgroundColor: e,
                          color: m.Z.unsafe_rawColors.WHITE_500.css
                      };
        }
    }
    render() {
        let { children: e, className: n, id: r, selectedItem: i, color: a, disabled: o, onContextMenu: s, clickableRef: l, look: u, disableItemStyles: d } = this.props,
            f = this.props['aria-label'],
            h = i === r;
        return (0, c.jsx)(g.P, {
            className: p()(n, {
                [y.item]: !d,
                [y.brand]: 'brand' === u,
                [y.selected]: null == a && h,
                [y.themed]: 'grey' === u,
                [y.disabled]: null == a && o
            }),
            style: this.getStyle(),
            role: 'tab',
            'aria-selected': h,
            'aria-controls': h ? C(''.concat(r)) : void 0,
            'aria-disabled': o,
            tabIndex: h ? 0 : -1,
            onMouseEnter: null != a ? this.handleMouseOver : void 0,
            onClick: this.handleClick,
            onMouseLeave: null != a ? this.handleMouseOut : void 0,
            onMouseUp: null != a ? this.handleMouseUp : void 0,
            onMouseDown: this.handleMouseDown,
            onContextMenu: s,
            'aria-label': f,
            ref: l,
            children: e
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'state', {
                hover: !1,
                active: !1
            }),
            b(this, 'handleClick', (e) => {
                let { disabled: n, onClick: r, id: i, onItemSelect: a } = this.props;
                if (!n) null != r ? r(e) : null != a && a(i);
            }),
            b(this, 'handleMouseDown', () => {
                let { color: e } = this.props;
                null != e && this.setState({ active: !0 });
            }),
            b(this, 'handleMouseUp', () => {
                this.setState({ active: !1 });
            }),
            b(this, 'handleMouseOver', () => {
                this.setState({ hover: !0 });
            }),
            b(this, 'handleMouseOut', () => {
                this.setState({
                    hover: !1,
                    active: !1
                });
            });
    }
}
b(R, 'defaultProps', {
    disabled: !1,
    look: 'grey',
    disableItemStyles: !1
});
class O extends (o = d.Component) {
    render() {
        let { className: e, children: n, type: r = 'side', style: i, 'aria-label': a, orientation: o = 'horizontal' } = this.props;
        return (0, c.jsx)('div', {
            ref: this.tabBarRef,
            className: p()(e, I[r]),
            style: i,
            role: 'tablist',
            'aria-orientation': o,
            onKeyDown: this.handleKeyDown,
            'aria-label': a,
            children: d.Children.map(n, this.renderChildren)
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'tabBarRef', d.createRef()),
            b(
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
            b(this, 'renderChildren', (e) => {
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
            b(this, 'getNodeForKeydownEvent', async (e) => {
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
            b(this, 'handleKeyDown', async (e) => {
                let n = await this.getNodeForKeydownEvent(e);
                null != n && (e.preventDefault(), n.focus());
            });
    }
}
b(O, 'Header', T), b(O, 'Item', R), b(O, 'Separator', S), b(O, 'Panel', A);
