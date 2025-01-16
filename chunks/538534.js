r.d(n, {
    Ee: function () {
        return O;
    },
    Fj: function () {
        return S;
    },
    ar: function () {
        return C;
    },
    xU: function () {
        return R;
    }
});
var i,
    a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(372817),
    d = r(1561),
    f = r(57260),
    _ = r(15127),
    h = r(993365),
    p = r(981729),
    m = r(481060),
    g = r(540059),
    E = r(186523),
    v = r(553826),
    I = r(981631),
    T = r(355614);
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
let y = {
    NOT_SET: '',
    NONE: '0',
    SMALL: '7px 10px',
    MEDIUM: '10px'
};
function S(e) {
    let { checked: n, radioItemIconClassName: r, icon: i } = e;
    if ((0, g.Q3)('RadioGroup'))
        return (0, s.jsxs)('svg', {
            className: u()(T.radioIndicator, r),
            viewBox: '0 0 24 24',
            children: [
                (0, s.jsx)('circle', {
                    cx: '12',
                    cy: '12',
                    r: '12',
                    fill: n ? m.tokens.colors.REDESIGN_INPUT_CONTROL_SELECTED.css : 'transparent'
                }),
                (0, s.jsx)('circle', {
                    cx: '12',
                    cy: '12',
                    r: '12',
                    strokeWidth: 2,
                    stroke: n ? 'rgba(255, 255, 255, 0.1)' : 'var(--input-border)',
                    fill: 'none'
                }),
                n
                    ? (0, s.jsx)('circle', {
                          cx: '12',
                          cy: '12',
                          r: '5',
                          fill: 'white'
                      })
                    : null
            ]
        });
    {
        let e = i;
        return (0, s.jsxs)('div', {
            className: r,
            children: [
                n ? (0, s.jsx)(v.Z, { foreground: T.radioIconForeground }) : (0, s.jsx)(E.Z, {}),
                null != e &&
                    (0, s.jsx)(e, {
                        className: T.icon,
                        size: 'md',
                        color: 'currentColor'
                    })
            ]
        });
    }
}
function A(e) {
    var n;
    let { disabled: r, checked: i, option: a, size: o, onClick: l, infoClassName: c, titleClassName: f, radioItemClassName: _, radioItemIconClassName: p, radioBarClassName: m, hasSelection: g, radioPosition: E = 'left', icon: v, withTransparentBackground: I } = e,
        b = null !== (n = a.color) && void 0 !== n ? n : '',
        y = i || !g,
        A = (0, s.jsx)(S, {
            checked: i,
            radioItemIconClassName: p,
            icon: v
        });
    return (0, s.jsx)(d.P, {
        role: 'radio',
        'aria-checked': i,
        onClick: r ? void 0 : l,
        tabIndex: !r && y ? 0 : -1,
        className: u()(
            null != a.collapsibleContent ? T.collapsibleItem : T.item,
            {
                [T.disabled]: r,
                [T.itemFilled]: !I
            },
            _
        ),
        children: (0, s.jsxs)('div', {
            style: {
                '--radio-bar-accent-color': b,
                padding: o
            },
            className: u()(
                T.radioBar,
                {
                    [T.radioPositionLeft]: 'left' === E,
                    [T.radioPositionRight]: 'right' === E
                },
                m
            ),
            children: [
                'left' === E ? A : null,
                (0, s.jsxs)('div', {
                    className: u()(T.info, c),
                    children: [
                        (0, s.jsx)(h.x, {
                            variant: 'text-md/medium',
                            className: f,
                            color: 'none',
                            children: a.name
                        }),
                        null != a.desc && '' !== a.desc
                            ? (0, s.jsx)(h.x, {
                                  color: 'none',
                                  variant: 'text-sm/normal',
                                  children: a.desc
                              })
                            : null
                    ]
                }),
                'right' === E ? A : null
            ]
        })
    });
}
class N extends (i = o.PureComponent) {
    render() {
        let { checked: e, disabled: n, option: r, size: i, infoClassName: a, hasSelection: o, titleClassName: l, radioItemClassName: u, radioItemIconClassName: c, radioBarClassName: d, collapsibleClassName: _, withTransparentBackground: h, radioPosition: m } = this.props,
            g = n || r.disabled,
            { tooltipText: E, tooltipPosition: v, icon: I } = r,
            b =
                null != r.collapsibleContent
                    ? (0, s.jsx)(f.z, {
                          className: _,
                          isExpanded: e,
                          collapsibleContent: r.collapsibleContent,
                          children: (n) => {
                              let { onClick: f } = n;
                              return (0, s.jsx)(A, {
                                  disabled: !!g,
                                  checked: e,
                                  hasSelection: o,
                                  option: r,
                                  onClick: (e) => {
                                      this.handleClick(e), f(e);
                                  },
                                  size: i,
                                  infoClassName: a,
                                  titleClassName: l,
                                  radioItemClassName: u,
                                  radioItemIconClassName: c,
                                  radioBarClassName: d,
                                  radioPosition: m,
                                  icon: I,
                                  withTransparentBackground: h
                              });
                          }
                      })
                    : (0, s.jsx)(A, {
                          disabled: !!g,
                          checked: e,
                          hasSelection: o,
                          option: r,
                          onClick: this.handleClick,
                          size: i,
                          infoClassName: a,
                          titleClassName: l,
                          radioItemClassName: u,
                          radioItemIconClassName: c,
                          radioBarClassName: d,
                          radioPosition: m,
                          icon: I,
                          withTransparentBackground: h
                      });
        return null != E
            ? (0, s.jsx)(p.u, {
                  text: E,
                  position: null != v ? v : 'top',
                  children: (e) =>
                      (0, s.jsx)('div', {
                          ...e,
                          className: T.tooltipWrapper,
                          children: b
                      })
              })
            : b;
    }
    constructor(...e) {
        super(...e),
            b(this, 'handleClick', (e) => {
                e.preventDefault();
                let { onClick: n, option: r } = this.props;
                return null == n ? void 0 : n(r);
            });
    }
}
function C() {
    let { orientation: e = 'vertical', isDisabled: n = !1, labelledBy: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        i = o.useRef(null),
        a = o.useMemo(
            () =>
                (0, c.E)({
                    getFocusableElements() {
                        let e = i.current;
                        return null != e ? Array.from(e.querySelectorAll('[role="radio"]')) : [];
                    },
                    getActiveElement() {
                        var e;
                        return null === (e = i.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement;
                    }
                }),
            []
        );
    return {
        role: 'radiogroup',
        onKeyDown: o.useCallback(
            async (n) => {
                if (null == i.current) return;
                let r = 'vertical' === e ? I.yXg.ARROW_UP : I.yXg.ARROW_LEFT,
                    s = 'vertical' === e ? I.yXg.ARROW_DOWN : I.yXg.ARROW_RIGHT;
                switch (n.which) {
                    case s: {
                        n.stopPropagation(), n.preventDefault();
                        let e = await a.getNextFocusableElement({ wrap: !0 });
                        return null == e ? void 0 : e.focus();
                    }
                    case r: {
                        n.stopPropagation(), n.preventDefault();
                        let e = await a.getPreviousFocusableElement({ wrap: !0 });
                        return null == e ? void 0 : e.focus();
                    }
                }
            },
            [a, e]
        ),
        ref: i,
        'aria-labelledby': r,
        'aria-orientation': e,
        'aria-disabled': n
    };
}
function R(e) {
    let { isSelected: n, label: r } = e;
    return {
        role: 'radio',
        tabIndex: n ? 0 : -1,
        'aria-label': r,
        'aria-checked': n
    };
}
function O(e) {
    let { itemInfoClassName: n, itemTitleClassName: r, radioItemClassName: i, collapsibleClassName: a, className: o, value: l = null, size: u = y.MEDIUM, radioPosition: c = 'left', onChange: d = I.dG4, disabled: f = !1, options: h = [], 'aria-labelledby': p, orientation: m, withTransparentBackground: g } = e,
        E = (0, _.Gc)(),
        v = C({
            labelledBy: null != p ? p : E.titleId,
            orientation: m,
            isDisabled: f
        }),
        T = h.some((e) => e.value === l);
    return (0, s.jsx)('div', {
        ...v,
        className: o,
        children: h.map((e) =>
            (0, s.jsx)(
                N,
                {
                    hasSelection: T,
                    disabled: f,
                    checked: l === e.value,
                    option: e,
                    onClick: d,
                    radioPosition: c,
                    size: u,
                    infoClassName: n,
                    titleClassName: r,
                    radioItemClassName: i,
                    radioItemIconClassName: e.radioItemIconClassName,
                    collapsibleClassName: a,
                    radioBarClassName: e.radioBarClassName,
                    withTransparentBackground: g
                },
                e.value
            )
        )
    });
}
b(N, 'defaultProps', {
    withTransparentBackground: !1,
    radioPosition: 'left'
}),
    (O.Sizes = y);
