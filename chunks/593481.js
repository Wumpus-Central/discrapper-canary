n.d(t, {
    QR: () => _,
    Yj: () => v,
    ZP: () => Z,
    iz: () => f
});
var i,
    s = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    o = n(481060),
    d = n(294033),
    c = n(388032),
    u = n(35915),
    h = n(814632);
function p(e, t, n) {
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
        (0, s.jsx)('div', {
            className: u.clickBlocker,
            onClick: g,
            onMouseEnter: g,
            onMouseOver: g
        }),
    f = () => (0, s.jsx)('div', { className: u.divider }),
    _ = (e, t, n) =>
        (0, s.jsx)('div', {
            className: u.keybindMessage,
            children: c.intl.format(n, {
                keybind: t,
                keybindHook: (e, n) =>
                    (0, s.jsx)(
                        d.Z,
                        {
                            keybind: t,
                            className: u.keybind
                        },
                        n
                    )
            })
        }),
    v = (e, t) =>
        (0, s.jsx)('div', {
            className: u.hintSubtleText,
            children: t
        });
class x extends (i = l.PureComponent) {
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
            : (0, s.jsx)(o.zxk, {
                  look: o.zxk.Looks.BLANK,
                  size: o.zxk.Sizes.NONE,
                  onClick: this.handleDismiss,
                  className: u.dismissButton,
                  'aria-label': c.intl.string(c.t.LnEgqa),
                  children: (0, s.jsx)(o.Dio, {
                      size: 'xs',
                      color: 'currentColor',
                      className: u.dismissIcon
                  })
              });
    }
    renderHint() {
        let {
            props: { hint: e },
            state: { expanded: t }
        } = this;
        if (null == e) return null;
        if ('function' == typeof e) {
            let n = e(t);
            return null != n
                ? (0, s.jsxs)(
                      l.Fragment,
                      {
                          children: [(0, s.jsx)(f, {}), n]
                      },
                      'hint-custom'
                  )
                : null;
        }
        return (0, s.jsxs)(
            l.Fragment,
            {
                children: [
                    (0, s.jsx)(f, {}),
                    (0, s.jsx)(
                        'div',
                        {
                            className: 'string' == typeof e ? u.hintText : void 0,
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
            props: { cancelText: e, confirmText: t, onConfirmClick: n, onCancelClick: i, hint: a },
            state: { expanded: r }
        } = this;
        if (!r) return null != a ? this.renderHint() : null;
        if (null != this.props.renderFooter) {
            let e = this.props.renderFooter(r);
            return null != e
                ? (0, s.jsxs)(
                      l.Fragment,
                      {
                          children: [(0, s.jsx)(f, {}), e]
                      },
                      'footer-custom-content'
                  )
                : null;
        }
        if (null != n || null != i) {
            let a = o.zxk.Colors.GREEN,
                r = o.zxk.Colors.PRIMARY,
                d = o.zxk.Looks.FILLED;
            return (0, s.jsxs)(
                l.Fragment,
                {
                    children: [
                        (0, s.jsx)(f, {}),
                        (0, s.jsxs)('div', {
                            className: u.buttonContainer,
                            children: [
                                null != n
                                    ? (0, s.jsx)(o.zxk, {
                                          fullWidth: !0,
                                          size: o.zxk.Sizes.SMALL,
                                          color: a,
                                          onClick: this.handleConfirmClick,
                                          className: u.button,
                                          innerClassName: u.innerText,
                                          children: null != t ? t : c.intl.string(c.t.BddRzc)
                                      })
                                    : null,
                                null != i
                                    ? (0, s.jsx)(o.zxk, {
                                          fullWidth: !0,
                                          size: o.zxk.Sizes.SMALL,
                                          look: d,
                                          color: r,
                                          onClick: this.handleCancelClick,
                                          className: u.button,
                                          children: null != e ? e : c.intl.string(c.t['ETE/oK'])
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
              ? (0, s.jsx)(o.qEK, {
                    src: e,
                    size: o.EFr.SIZE_40,
                    className: u.avatar,
                    'aria-hidden': !0
                })
              : (0, s.jsx)('div', {
                    className: u.avatar,
                    children: e
                });
    }
    renderContent() {
        let { body: e, title: t, maxBodyLines: n } = this.props;
        return (0, s.jsxs)('div', {
            className: u.content,
            children: [
                this.renderIcon(),
                (0, s.jsxs)('div', {
                    className: u.details,
                    children: [
                        (0, s.jsx)('div', {
                            className: u.title,
                            children: 'function' == typeof t ? t(this.handleDismiss) : t
                        }),
                        null != e
                            ? (0, s.jsx)('div', {
                                  className: r()(u.body, h.marginTop4),
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
            i = null != e ? o.P3F : 'div';
        return (0, s.jsxs)(i, {
            onMouseOver: n ? null : this.handleMouseEnter,
            onFocus: n ? null : this.handleMouseEnter,
            onClick: e,
            className: r()(u.container, {
                [u.themePrimary]: !0,
                [u.clickable]: null != e && !t
            }),
            children: [this.renderCloseButton(), this.renderContent(), this.renderFooter(), t ? (0, s.jsx)(m, {}) : null]
        });
    }
    constructor(e) {
        super(e),
            p(this, 'handleDismiss', (e) => {
                e.stopPropagation();
                let { onDismissClick: t } = this.props;
                null == t || t(e);
            }),
            p(this, 'handleConfirmClick', (e) => {
                e.stopPropagation();
                let { onConfirmClick: t } = this.props;
                null == t || t(e);
            }),
            p(this, 'handleCancelClick', (e) => {
                e.stopPropagation();
                let { onCancelClick: t } = this.props;
                null == t || t(e);
            }),
            p(this, 'handleMouseEnter', () => {
                this.props.disabled || this.setState({ expanded: !0 });
            });
        let { expand: t } = e;
        this.state = { expanded: t };
    }
}
p(x, 'defaultProps', {
    maxBodyLines: void 0,
    expand: !1,
    disabled: !1
});
let Z = x;
