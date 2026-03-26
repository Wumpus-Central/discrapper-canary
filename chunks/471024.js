"use strict";
i.d(t, { Ay: () => A, de: () => m, sI: () => f });
var n = i(627968),
    s = i(64700),
    a = i(503698),
    l = i.n(a),
    r = i(397927),
    o = i(12641),
    d = i(985018),
    c = i(949452),
    u = i(885106);
let h = (e) => e.stopPropagation(),
    _ = () => (0, n.jsx)("div", { className: c.tR, onClick: h, onMouseEnter: h, onMouseOver: h }),
    p = () => (0, n.jsx)("div", { className: c.yF }),
    f = (e, t, i) =>
        (0, n.jsx)("div", {
            className: c.qD,
            children: d.intl.format(i, {
                keybind: t,
                keybindHook: (e, i) => (0, n.jsx)(o.A, { keybind: t, className: c.P }, i),
            }),
        }),
    m = (e, t) => (0, n.jsx)("div", { className: c.g2, children: t });
class g extends s.PureComponent {
    static defaultProps = { maxBodyLines: void 0, expand: !1, disabled: !1 };
    static getDerivedStateFromProps(e, t) {
        let { expand: i } = e,
            { expanded: n } = t;
        return !n && i ? { expanded: !0 } : null;
    }
    constructor(e) {
        super(e);
        const { expand: t } = e;
        this.state = { expanded: t };
    }
    componentDidMount() {
        let { onNotificationShow: e } = this.props;
        e?.();
    }
    componentDidUpdate(e) {
        let { onNotificationShow: t } = this.props;
        null != t && null == e.onNotificationShow && t();
    }
    handleDismiss = (e) => {
        e.stopPropagation();
        let { onDismissClick: t } = this.props;
        t?.(e);
    };
    handleConfirmClick = (e) => {
        e.stopPropagation();
        let { onConfirmClick: t } = this.props;
        t?.(e);
    };
    handleCancelClick = (e) => {
        e.stopPropagation();
        let { onCancelClick: t } = this.props;
        t?.(e);
    };
    handleMouseEnter = () => {
        this.props.disabled || this.setState({ expanded: !0 });
    };
    renderCloseButton() {
        return "function" == typeof this.props.title
            ? null
            : (0, n.jsx)(r.DUT, {
                  onClick: this.handleDismiss,
                  className: c.r,
                  "aria-label": d.intl.string(d.t.LnEgqX),
                  children: (0, n.jsx)(r.PGe, { size: "xs", color: "currentColor", className: c.MW }),
              });
    }
    renderHint() {
        let {
            props: { hint: e, locked: t },
            state: { expanded: i },
        } = this;
        if (null == e) return null;
        if ("function" == typeof e) {
            let a = e(i, t);
            return null != a ? (0, n.jsxs)(s.Fragment, { children: [(0, n.jsx)(p, {}), a] }, "hint-custom") : null;
        }
        return (0, n.jsxs)(
            s.Fragment,
            {
                children: [
                    (0, n.jsx)(p, {}),
                    (0, n.jsx)("div", { className: "string" == typeof e ? c.dx : void 0, children: e }, "hint-text"),
                ],
            },
            "hint-text",
        );
    }
    renderFooter() {
        let {
            props: { cancelText: e, confirmText: t, onConfirmClick: i, onCancelClick: a, hint: l },
            state: { expanded: o },
        } = this;
        if (!o) return null != l ? this.renderHint() : null;
        if (null != this.props.renderFooter) {
            let e = this.props.renderFooter(o);
            return null != e
                ? (0, n.jsxs)(s.Fragment, { children: [(0, n.jsx)(p, {}), e] }, "footer-custom-content")
                : null;
        }
        return null != i || null != a
            ? (0, n.jsxs)(
                  s.Fragment,
                  {
                      children: [
                          (0, n.jsx)(p, {}),
                          (0, n.jsxs)(r.ButtonGroup, {
                              fullWidth: !0,
                              children: [
                                  null != i
                                      ? (0, n.jsx)(r.Button, {
                                            variant: "active",
                                            size: "sm",
                                            text: t ?? d.intl.string(d.t.BddRzS),
                                            onClick: this.handleConfirmClick,
                                        })
                                      : null,
                                  null != a
                                      ? (0, n.jsx)(r.Button, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: e ?? d.intl.string(d.t["ETE/oC"]),
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
              ? (0, n.jsx)(r.euF, { src: e, size: r._3J.SIZE_40, className: c.my, "aria-hidden": !0 })
              : (0, n.jsx)("div", { className: c.my, children: e });
    }
    renderContent() {
        let { body: e, title: t, maxBodyLines: i } = this.props;
        return (0, n.jsxs)("div", {
            className: c.Qs,
            children: [
                this.renderIcon(),
                (0, n.jsxs)("div", {
                    className: c.zH,
                    children: [
                        (0, n.jsx)("div", {
                            className: c.DD,
                            children: "function" == typeof t ? t(this.handleDismiss) : t,
                        }),
                        null != e
                            ? (0, n.jsx)("div", {
                                  className: l()(c.rf, u.a5),
                                  style: { WebkitLineClamp: i, lineClamp: i },
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
                state: { expanded: i },
            } = this,
            s = null != e ? r.DUT : "div";
        return (0, n.jsxs)(s, {
            onMouseOver: i ? void 0 : this.handleMouseEnter,
            onFocus: i ? void 0 : this.handleMouseEnter,
            onClick: e ?? void 0,
            className: l()(c.kL, { [c.gr]: !0, [c.vk]: null != e && !t }),
            children: [
                this.renderCloseButton(),
                this.renderContent(),
                this.renderFooter(),
                t ? (0, n.jsx)(_, {}) : null,
            ],
        });
    }
}
let A = g;
