n.d(t, {
    QR: () => y,
    Yj: () => v,
    ZP: () => O,
    iz: () => m
});
var i,
    r = n(200651),
    s = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(481060),
    c = n(294033),
    d = n(388032),
    u = n(934426),
    h = n(971005);
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
let f = (e) => e.stopPropagation(),
    g = () =>
        (0, r.jsx)('div', {
            className: u.clickBlocker,
            onClick: f,
            onMouseEnter: f,
            onMouseOver: f
        }),
    m = () => (0, r.jsx)('div', { className: u.divider }),
    y = (e, t, n) =>
        (0, r.jsx)('div', {
            className: u.keybindMessage,
            children: d.NW.format(n, {
                keybind: t,
                keybindHook: (e, n) =>
                    (0, r.jsx)(
                        c.Z,
                        {
                            keybind: t,
                            className: u.keybind
                        },
                        n
                    )
            })
        }),
    v = (e, t) =>
        (0, r.jsx)('div', {
            className: u.hintSubtleText,
            children: t
        });
class _ extends (i = s.PureComponent) {
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
            : (0, r.jsx)(l.zxk, {
                  look: l.zxk.Looks.BLANK,
                  size: l.zxk.Sizes.NONE,
                  onClick: this.handleDismiss,
                  className: u.dismissButton,
                  'aria-label': d.NW.string(d.t.LnEgqa),
                  children: (0, r.jsx)(l.Dio, {
                      size: 'xs',
                      color: 'currentColor',
                      className: u.dismissIcon
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
                      s.Fragment,
                      {
                          children: [(0, r.jsx)(m, {}), i]
                      },
                      'hint-custom'
                  )
                : null;
        }
        return (0, r.jsxs)(
            s.Fragment,
            {
                children: [
                    (0, r.jsx)(m, {}),
                    (0, r.jsx)(
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
            props: { cancelText: e, confirmText: t, onConfirmClick: n, onCancelClick: i, hint: o },
            state: { expanded: a }
        } = this;
        if (!a) return null != o ? this.renderHint() : null;
        if (null != this.props.renderFooter) {
            let e = this.props.renderFooter(a);
            return null != e
                ? (0, r.jsxs)(
                      s.Fragment,
                      {
                          children: [(0, r.jsx)(m, {}), e]
                      },
                      'footer-custom-content'
                  )
                : null;
        }
        if (null != n || null != i) {
            let o = l.zxk.Colors.GREEN,
                a = l.zxk.Colors.PRIMARY,
                c = l.zxk.Looks.FILLED;
            return (0, r.jsxs)(
                s.Fragment,
                {
                    children: [
                        (0, r.jsx)(m, {}),
                        (0, r.jsxs)('div', {
                            className: u.buttonContainer,
                            children: [
                                null != n
                                    ? (0, r.jsx)(l.zxk, {
                                          fullWidth: !0,
                                          size: l.zxk.Sizes.SMALL,
                                          color: o,
                                          onClick: this.handleConfirmClick,
                                          className: u.button,
                                          innerClassName: u.innerText,
                                          children: null != t ? t : d.NW.string(d.t.BddRzc)
                                      })
                                    : null,
                                null != i
                                    ? (0, r.jsx)(l.zxk, {
                                          fullWidth: !0,
                                          size: l.zxk.Sizes.SMALL,
                                          look: c,
                                          color: a,
                                          onClick: this.handleCancelClick,
                                          className: u.button,
                                          children: null != e ? e : d.NW.string(d.t['ETE/oK'])
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
              ? (0, r.jsx)(l.qEK, {
                    src: e,
                    size: l.EFr.SIZE_40,
                    className: u.avatar,
                    'aria-hidden': !0
                })
              : (0, r.jsx)('div', {
                    className: u.avatar,
                    children: e
                });
    }
    renderContent() {
        let { body: e, title: t, maxBodyLines: n } = this.props;
        return (0, r.jsxs)('div', {
            className: u.content,
            children: [
                this.renderIcon(),
                (0, r.jsxs)('div', {
                    className: u.details,
                    children: [
                        (0, r.jsx)('div', {
                            className: u.title,
                            children: 'function' == typeof t ? t(this.handleDismiss) : t
                        }),
                        null != e
                            ? (0, r.jsx)('div', {
                                  className: a()(u.body, h.marginTop4),
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
            i = null != e ? l.P3F : 'div';
        return (0, r.jsxs)(i, {
            onMouseOver: n ? void 0 : this.handleMouseEnter,
            onFocus: n ? void 0 : this.handleMouseEnter,
            onClick: null != e ? e : void 0,
            className: a()(u.container, {
                [u.themePrimary]: !0,
                [u.clickable]: null != e && !t
            }),
            children: [this.renderCloseButton(), this.renderContent(), this.renderFooter(), t ? (0, r.jsx)(g, {}) : null]
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
p(_, 'defaultProps', {
    maxBodyLines: void 0,
    expand: !1,
    disabled: !1
});
let O = _;
