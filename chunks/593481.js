n.d(t, {
    QR: function () {
        return v;
    },
    Yj: function () {
        return x;
    },
    iz: function () {
        return m;
    }
});
var i,
    s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(481060),
    d = n(294033),
    c = n(388032),
    u = n(521772),
    h = n(232186);
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
        (0, s.jsx)('div', {
            className: u.clickBlocker,
            onClick: f,
            onMouseEnter: f,
            onMouseOver: f
        }),
    m = () => (0, s.jsx)('div', { className: u.divider }),
    v = (e, t, n) =>
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
    x = (e, t) =>
        (0, s.jsx)('div', {
            className: u.hintSubtleText,
            children: t
        });
class Z extends (i = r.PureComponent) {
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
        return (0, s.jsx)(l.Button, {
            look: l.Button.Looks.BLANK,
            size: l.Button.Sizes.NONE,
            onClick: this.handleDismiss,
            className: u.dismissButton,
            'aria-label': c.intl.string(c.t.LnEgqa),
            children: (0, s.jsx)(l.XSmallIcon, {
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
                      r.Fragment,
                      {
                          children: [(0, s.jsx)(m, {}), n]
                      },
                      'hint-custom'
                  )
                : null;
        }
        return (0, s.jsxs)(
            r.Fragment,
            {
                children: [
                    (0, s.jsx)(m, {}),
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
            state: { expanded: o }
        } = this;
        if (!o) return null != a ? this.renderHint() : null;
        if (null != this.props.renderFooter) {
            let e = this.props.renderFooter(o);
            return null != e
                ? (0, s.jsxs)(
                      r.Fragment,
                      {
                          children: [(0, s.jsx)(m, {}), e]
                      },
                      'footer-custom-content'
                  )
                : null;
        }
        if (null != n || null != i) {
            let a = l.Button.Colors.GREEN,
                o = l.Button.Colors.PRIMARY,
                d = l.Button.Looks.FILLED;
            return (0, s.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, s.jsx)(m, {}),
                        (0, s.jsxs)('div', {
                            className: u.buttonContainer,
                            children: [
                                null != n
                                    ? (0, s.jsx)(l.Button, {
                                          fullWidth: !0,
                                          size: l.Button.Sizes.SMALL,
                                          color: a,
                                          onClick: this.handleConfirmClick,
                                          className: u.button,
                                          innerClassName: u.innerText,
                                          children: null != t ? t : c.intl.string(c.t.BddRzc)
                                      })
                                    : null,
                                null != i
                                    ? (0, s.jsx)(l.Button, {
                                          fullWidth: !0,
                                          size: l.Button.Sizes.SMALL,
                                          look: d,
                                          color: o,
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
              ? (0, s.jsx)(l.Avatar, {
                    src: e,
                    size: l.AvatarSizes.SIZE_40,
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
                            children: t
                        }),
                        null != e
                            ? (0, s.jsx)('div', {
                                  className: o()(u.body, h.marginTop4),
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
            i = null != e ? l.Clickable : 'div';
        return (0, s.jsxs)(i, {
            onMouseOver: n ? null : this.handleMouseEnter,
            onFocus: n ? null : this.handleMouseEnter,
            onClick: e,
            className: o()(u.container, {
                [u.themePrimary]: !0,
                [u.clickable]: null != e && !t
            }),
            children: [this.renderCloseButton(), this.renderContent(), this.renderFooter(), t ? (0, s.jsx)(g, {}) : null]
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
                !this.props.disabled && this.setState({ expanded: !0 });
            });
        let { expand: t } = e;
        this.state = { expanded: t };
    }
}
p(Z, 'defaultProps', {
    maxBodyLines: void 0,
    expand: !1,
    disabled: !1
}),
    (t.ZP = Z);
