n.d(t, {
    QR: () => m,
    Yj: () => y,
    ZP: () => O,
});
var i,
    r = n(54381),
    a = n(473749),
    s = n(120356),
    o = n.n(s),
    l = n(481060),
    c = n(294033),
    d = n(388032),
    u = n(429936),
    f = n(478411);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let p = (e) => e.stopPropagation(),
    g = () =>
        (0, r.jsx)("div", {
            className: u.clickBlocker,
            onClick: p,
            onMouseEnter: p,
            onMouseOver: p,
        }),
    b = () => (0, r.jsx)("div", { className: u.divider }),
    m = (e, t, n) =>
        (0, r.jsx)("div", {
            className: u.keybindMessage,
            children: d.intl.format(n, {
                keybind: t,
                keybindHook: (e, n) =>
                    (0, r.jsx)(
                        c.Z,
                        {
                            keybind: t,
                            className: u.keybind,
                        },
                        n,
                    ),
            }),
        }),
    y = (e, t) =>
        (0, r.jsx)("div", {
            className: u.hintSubtleText,
            children: t,
        });
class v extends (i = a.PureComponent) {
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
        return "function" == typeof this.props.title
            ? null
            : (0, r.jsx)(l.P3F, {
                  onClick: this.handleDismiss,
                  className: u.dismissButton,
                  "aria-label": d.intl.string(d.t.LnEgqX),
                  children: (0, r.jsx)(l.Dio, {
                      size: "xs",
                      color: "currentColor",
                      className: u.dismissIcon,
                  }),
              });
    }
    renderHint() {
        let {
            props: { hint: e, locked: t },
            state: { expanded: n },
        } = this;
        if (null == e) return null;
        if ("function" == typeof e) {
            let i = e(n, t);
            return null != i
                ? (0, r.jsxs)(
                      a.Fragment,
                      {
                          children: [(0, r.jsx)(b, {}), i],
                      },
                      "hint-custom",
                  )
                : null;
        }
        return (0, r.jsxs)(
            a.Fragment,
            {
                children: [
                    (0, r.jsx)(b, {}),
                    (0, r.jsx)(
                        "div",
                        {
                            className: "string" == typeof e ? u.hintText : void 0,
                            children: e,
                        },
                        "hint-text",
                    ),
                ],
            },
            "hint-text",
        );
    }
    renderFooter() {
        let {
            props: { cancelText: e, confirmText: t, onConfirmClick: n, onCancelClick: i, hint: s },
            state: { expanded: o },
        } = this;
        if (!o) return null != s ? this.renderHint() : null;
        if (null != this.props.renderFooter) {
            let e = this.props.renderFooter(o);
            return null != e
                ? (0, r.jsxs)(
                      a.Fragment,
                      {
                          children: [(0, r.jsx)(b, {}), e],
                      },
                      "footer-custom-content",
                  )
                : null;
        }
        return null != n || null != i
            ? (0, r.jsxs)(
                  a.Fragment,
                  {
                      children: [
                          (0, r.jsx)(b, {}),
                          (0, r.jsxs)(l.ButtonGroup, {
                              fullWidth: !0,
                              children: [
                                  null != n
                                      ? (0, r.jsx)(l.Button, {
                                            variant: "active",
                                            size: "sm",
                                            text: null != t ? t : d.intl.string(d.t.BddRzS),
                                            onClick: this.handleConfirmClick,
                                        })
                                      : null,
                                  null != i
                                      ? (0, r.jsx)(l.Button, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: null != e ? e : d.intl.string(d.t["ETE/oC"]),
                                            onClick: this.handleCancelClick,
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  },
                  "footer-button-content",
              )
            : this.renderHint();
    }
    renderIcon() {
        let { icon: e } = this.props;
        return null == e
            ? null
            : "string" == typeof e
              ? (0, r.jsx)(l.qEK, {
                    src: e,
                    size: l.EFr.SIZE_40,
                    className: u.avatar,
                    "aria-hidden": !0,
                })
              : (0, r.jsx)("div", {
                    className: u.avatar,
                    children: e,
                });
    }
    renderContent() {
        let { body: e, title: t, maxBodyLines: n } = this.props;
        return (0, r.jsxs)("div", {
            className: u.content,
            children: [
                this.renderIcon(),
                (0, r.jsxs)("div", {
                    className: u.details,
                    children: [
                        (0, r.jsx)("div", {
                            className: u.title,
                            children: "function" == typeof t ? t(this.handleDismiss) : t,
                        }),
                        null != e
                            ? (0, r.jsx)("div", {
                                  className: o()(u.body, f.marginTop4),
                                  style: {
                                      WebkitLineClamp: n,
                                      lineClamp: n,
                                  },
                                  children: e,
                              })
                            : null,
                    ],
                }),
            ],
        });
    }
    render() {
        let {
                props: { onNotificationClick: e, disabled: t },
                state: { expanded: n },
            } = this,
            i = null != e ? l.P3F : "div";
        return (0, r.jsxs)(i, {
            onMouseOver: n ? void 0 : this.handleMouseEnter,
            onFocus: n ? void 0 : this.handleMouseEnter,
            onClick: null != e ? e : void 0,
            className: o()(u.container, {
                [u.themePrimary]: !0,
                [u.clickable]: null != e && !t,
            }),
            children: [
                this.renderCloseButton(),
                this.renderContent(),
                this.renderFooter(),
                t ? (0, r.jsx)(g, {}) : null,
            ],
        });
    }
    constructor(e) {
        super(e),
            h(this, "handleDismiss", (e) => {
                e.stopPropagation();
                let { onDismissClick: t } = this.props;
                null == t || t(e);
            }),
            h(this, "handleConfirmClick", (e) => {
                e.stopPropagation();
                let { onConfirmClick: t } = this.props;
                null == t || t(e);
            }),
            h(this, "handleCancelClick", (e) => {
                e.stopPropagation();
                let { onCancelClick: t } = this.props;
                null == t || t(e);
            }),
            h(this, "handleMouseEnter", () => {
                this.props.disabled || this.setState({ expanded: !0 });
            });
        let { expand: t } = e;
        this.state = { expanded: t };
    }
}
h(v, "defaultProps", {
    maxBodyLines: void 0,
    expand: !1,
    disabled: !1,
});
let O = v;
