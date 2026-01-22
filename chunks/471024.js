n.d(t, {
    Ay: () => O,
    de: () => A,
    sI: () => y,
});
var i,
    r = n(627968),
    s = n(64700),
    l = n(503698),
    o = n.n(l),
    a = n(397927),
    c = n(12641),
    d = n(985018),
    u = n(58755),
    h = n(473169);
function p(e, t, n) {
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
let f = (e) => e.stopPropagation(),
    b = () =>
        (0, r.jsx)("div", {
            className: u.tR,
            onClick: f,
            onMouseEnter: f,
            onMouseOver: f,
        }),
    g = () => (0, r.jsx)("div", { className: u.yF }),
    y = (e, t, n) =>
        (0, r.jsx)("div", {
            className: u.qD,
            children: d.intl.format(n, {
                keybind: t,
                keybindHook: (e, n) =>
                    (0, r.jsx)(
                        c.A,
                        {
                            keybind: t,
                            className: u.P,
                        },
                        n,
                    ),
            }),
        }),
    A = (e, t) =>
        (0, r.jsx)("div", {
            className: u.g2,
            children: t,
        });
class m extends (i = s.PureComponent) {
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
            : (0, r.jsx)(a.DUT, {
                  onClick: this.handleDismiss,
                  className: u.r,
                  "aria-label": d.intl.string(d.t.LnEgqX),
                  children: (0, r.jsx)(a.PGe, {
                      size: "xs",
                      color: "currentColor",
                      className: u.MW,
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
                      s.Fragment,
                      {
                          children: [(0, r.jsx)(g, {}), i],
                      },
                      "hint-custom",
                  )
                : null;
        }
        return (0, r.jsxs)(
            s.Fragment,
            {
                children: [
                    (0, r.jsx)(g, {}),
                    (0, r.jsx)(
                        "div",
                        {
                            className: "string" == typeof e ? u.dx : void 0,
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
            props: { cancelText: e, confirmText: t, onConfirmClick: n, onCancelClick: i, hint: l },
            state: { expanded: o },
        } = this;
        if (!o) return null != l ? this.renderHint() : null;
        if (null != this.props.renderFooter) {
            let e = this.props.renderFooter(o);
            return null != e
                ? (0, r.jsxs)(
                      s.Fragment,
                      {
                          children: [(0, r.jsx)(g, {}), e],
                      },
                      "footer-custom-content",
                  )
                : null;
        }
        return null != n || null != i
            ? (0, r.jsxs)(
                  s.Fragment,
                  {
                      children: [
                          (0, r.jsx)(g, {}),
                          (0, r.jsxs)(a.ButtonGroup, {
                              fullWidth: !0,
                              children: [
                                  null != n
                                      ? (0, r.jsx)(a.Button, {
                                            variant: "active",
                                            size: "sm",
                                            text: null != t ? t : d.intl.string(d.t.BddRzS),
                                            onClick: this.handleConfirmClick,
                                        })
                                      : null,
                                  null != i
                                      ? (0, r.jsx)(a.Button, {
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
              ? (0, r.jsx)(a.euF, {
                    src: e,
                    size: a._3J.SIZE_40,
                    className: u.my,
                    "aria-hidden": !0,
                })
              : (0, r.jsx)("div", {
                    className: u.my,
                    children: e,
                });
    }
    renderContent() {
        let { body: e, title: t, maxBodyLines: n } = this.props;
        return (0, r.jsxs)("div", {
            className: u.Qs,
            children: [
                this.renderIcon(),
                (0, r.jsxs)("div", {
                    className: u.zH,
                    children: [
                        (0, r.jsx)("div", {
                            className: u.DD,
                            children: "function" == typeof t ? t(this.handleDismiss) : t,
                        }),
                        null != e
                            ? (0, r.jsx)("div", {
                                  className: o()(u.rf, h.a5),
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
            i = null != e ? a.DUT : "div";
        return (0, r.jsxs)(i, {
            onMouseOver: n ? void 0 : this.handleMouseEnter,
            onFocus: n ? void 0 : this.handleMouseEnter,
            onClick: null != e ? e : void 0,
            className: o()(u.kL, {
                [u.gr]: !0,
                [u.vk]: null != e && !t,
            }),
            children: [
                this.renderCloseButton(),
                this.renderContent(),
                this.renderFooter(),
                t ? (0, r.jsx)(b, {}) : null,
            ],
        });
    }
    constructor(e) {
        super(e),
            p(this, "handleDismiss", (e) => {
                e.stopPropagation();
                let { onDismissClick: t } = this.props;
                null == t || t(e);
            }),
            p(this, "handleConfirmClick", (e) => {
                e.stopPropagation();
                let { onConfirmClick: t } = this.props;
                null == t || t(e);
            }),
            p(this, "handleCancelClick", (e) => {
                e.stopPropagation();
                let { onCancelClick: t } = this.props;
                null == t || t(e);
            }),
            p(this, "handleMouseEnter", () => {
                this.props.disabled || this.setState({ expanded: !0 });
            });
        const { expand: t } = e;
        this.state = { expanded: t };
    }
}
p(m, "defaultProps", {
    maxBodyLines: void 0,
    expand: !1,
    disabled: !1,
});
let O = m;
