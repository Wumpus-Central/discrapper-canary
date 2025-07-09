n.d(t, {
    QR: () => O,
    Yj: () => v,
    ZP: () => b
});
var i,
    r = n(255367),
    o = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(755721),
    c = n(481060),
    d = n(294033),
    u = n(388032),
    h = n(987083),
    p = n(20493);
function f(e, t, n) {
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
let g = (e) => e.stopPropagation(),
    m = () =>
        (0, r.jsx)('div', {
            className: h.clickBlocker,
            onClick: g,
            onMouseEnter: g,
            onMouseOver: g
        }),
    y = () => (0, r.jsx)('div', { className: h.divider }),
    O = (e, t, n) =>
        (0, r.jsx)('div', {
            className: h.keybindMessage,
            children: u.intl.format(n, {
                keybind: t,
                keybindHook: (e, n) =>
                    (0, r.jsx)(
                        d.Z,
                        {
                            keybind: t,
                            className: h.keybind
                        },
                        n
                    )
            })
        }),
    v = (e, t) =>
        (0, r.jsx)('div', {
            className: h.hintSubtleText,
            children: t
        });
class _ extends (i = o.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        let { expand: n } = e,
            { expanded: i } = t;
        return !i && n ? { expanded: !0 } : null;
    }
    componentDidMount() {
        let { onNotificationShow: e } = this.props;
        null == e || e();
    }
    componentDidUpdate(e) {
        let { onNotificationShow: t } = this.props;
        null != t && null == e.onNotificationShow && t();
    }
    renderCloseButton() {
        return 'function' == typeof this.props.title
            ? null
            : (0, r.jsx)(a.zx, {
                  look: a.zx.Looks.BLANK,
                  size: a.zx.Sizes.NONE,
                  onClick: this.handleDismiss,
                  className: h.dismissButton,
                  'aria-label': u.intl.string(u.t.LnEgqa),
                  children: (0, r.jsx)(c.Dio, {
                      size: 'xs',
                      color: 'currentColor',
                      className: h.dismissIcon
                  })
              });
    }
    renderHint() {
        let {
            props: { hint: e, locked: t },
            state: { expanded: n }
        } = this;
        if (null == e) return null;
        if ('function' == typeof e) {
            let i = e(n, t);
            return null != i
                ? (0, r.jsxs)(
                      o.Fragment,
                      {
                          children: [(0, r.jsx)(y, {}), i]
                      },
                      'hint-custom'
                  )
                : null;
        }
        return (0, r.jsxs)(
            o.Fragment,
            {
                children: [
                    (0, r.jsx)(y, {}),
                    (0, r.jsx)(
                        'div',
                        {
                            className: 'string' == typeof e ? h.hintText : void 0,
                            children: e
                        },
                        'hint-text'
                    )
                ]
            },
            'hint-text'
        );
    }
    renderFooter() {
        let {
            props: { cancelText: e, confirmText: t, onConfirmClick: n, onCancelClick: i, hint: l },
            state: { expanded: s }
        } = this;
        if (!s) return null != l ? this.renderHint() : null;
        if (null != this.props.renderFooter) {
            let e = this.props.renderFooter(s);
            return null != e
                ? (0, r.jsxs)(
                      o.Fragment,
                      {
                          children: [(0, r.jsx)(y, {}), e]
                      },
                      'footer-custom-content'
                  )
                : null;
        }
        if (null != n || null != i) {
            let l = a.zx.Colors.GREEN,
                s = a.zx.Colors.PRIMARY,
                c = a.zx.Looks.FILLED;
            return (0, r.jsxs)(
                o.Fragment,
                {
                    children: [
                        (0, r.jsx)(y, {}),
                        (0, r.jsxs)('div', {
                            className: h.buttonContainer,
                            children: [
                                null != n
                                    ? (0, r.jsx)(a.zx, {
                                          fullWidth: !0,
                                          size: a.zx.Sizes.SMALL,
                                          color: l,
                                          onClick: this.handleConfirmClick,
                                          className: h.button,
                                          innerClassName: h.innerText,
                                          children: null != t ? t : u.intl.string(u.t.BddRzc)
                                      })
                                    : null,
                                null != i
                                    ? (0, r.jsx)(a.zx, {
                                          fullWidth: !0,
                                          size: a.zx.Sizes.SMALL,
                                          look: c,
                                          color: s,
                                          onClick: this.handleCancelClick,
                                          className: h.button,
                                          children: null != e ? e : u.intl.string(u.t['ETE/oK'])
                                      })
                                    : null
                            ]
                        })
                    ]
                },
                'footer-button-content'
            );
        }
        return this.renderHint();
    }
    renderIcon() {
        let { icon: e } = this.props;
        return null == e
            ? null
            : 'string' == typeof e
              ? (0, r.jsx)(c.qEK, {
                    src: e,
                    size: c.EFr.SIZE_40,
                    className: h.avatar,
                    'aria-hidden': !0
                })
              : (0, r.jsx)('div', {
                    className: h.avatar,
                    children: e
                });
    }
    renderContent() {
        let { body: e, title: t, maxBodyLines: n } = this.props;
        return (0, r.jsxs)('div', {
            className: h.content,
            children: [
                this.renderIcon(),
                (0, r.jsxs)('div', {
                    className: h.details,
                    children: [
                        (0, r.jsx)('div', {
                            className: h.title,
                            children: 'function' == typeof t ? t(this.handleDismiss) : t
                        }),
                        null != e
                            ? (0, r.jsx)('div', {
                                  className: s()(h.body, p.marginTop4),
                                  style: {
                                      WebkitLineClamp: n,
                                      lineClamp: n
                                  },
                                  children: e
                              })
                            : null
                    ]
                })
            ]
        });
    }
    render() {
        let {
                props: { onNotificationClick: e, disabled: t },
                state: { expanded: n }
            } = this,
            i = null != e ? c.P3F : 'div';
        return (0, r.jsxs)(i, {
            onMouseOver: n ? void 0 : this.handleMouseEnter,
            onFocus: n ? void 0 : this.handleMouseEnter,
            onClick: null != e ? e : void 0,
            className: s()(h.container, {
                [h.themePrimary]: !0,
                [h.clickable]: null != e && !t
            }),
            children: [this.renderCloseButton(), this.renderContent(), this.renderFooter(), t ? (0, r.jsx)(m, {}) : null]
        });
    }
    constructor(e) {
        (super(e),
            f(this, 'handleDismiss', (e) => {
                e.stopPropagation();
                let { onDismissClick: t } = this.props;
                null == t || t(e);
            }),
            f(this, 'handleConfirmClick', (e) => {
                e.stopPropagation();
                let { onConfirmClick: t } = this.props;
                null == t || t(e);
            }),
            f(this, 'handleCancelClick', (e) => {
                e.stopPropagation();
                let { onCancelClick: t } = this.props;
                null == t || t(e);
            }),
            f(this, 'handleMouseEnter', () => {
                this.props.disabled || this.setState({ expanded: !0 });
            }));
        let { expand: t } = e;
        this.state = { expanded: t };
    }
}
f(_, 'defaultProps', {
    maxBodyLines: void 0,
    expand: !1,
    disabled: !1
});
let b = _;
