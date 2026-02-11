"use strict";
n.d(t, { Ay: () => m, de: () => g, sI: () => f });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(12641),
    d = n(985018),
    c = n(5901),
    u = n(522759);
let h = (e) => e.stopPropagation(),
    p = () => (0, i.jsx)("div", { className: c.tR, onClick: h, onMouseEnter: h, onMouseOver: h }),
    A = () => (0, i.jsx)("div", { className: c.yF }),
    f = (e, t, n) =>
        (0, i.jsx)("div", {
            className: c.qD,
            children: d.intl.format(n, {
                keybind: t,
                keybindHook: (e, n) => (0, i.jsx)(o.A, { keybind: t, className: c.P }, n),
            }),
        }),
    g = (e, t) => (0, i.jsx)("div", { className: c.g2, children: t });
class _ extends s.PureComponent {
    static defaultProps = { maxBodyLines: void 0, expand: !1, disabled: !1 };
    static getDerivedStateFromProps(e, t) {
        let { expand: n } = e,
            { expanded: i } = t;
        return !i && n ? { expanded: !0 } : null;
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
            : (0, i.jsx)(r.DUT, {
                  onClick: this.handleDismiss,
                  className: c.r,
                  "aria-label": d.intl.string(d.t.LnEgqX),
                  children: (0, i.jsx)(r.PGe, { size: "xs", color: "currentColor", className: c.MW }),
              });
    }
    renderHint() {
        let {
            props: { hint: e, locked: t },
            state: { expanded: n },
        } = this;
        if (null == e) return null;
        if ("function" == typeof e) {
            let l = e(n, t);
            return null != l ? (0, i.jsxs)(s.Fragment, { children: [(0, i.jsx)(A, {}), l] }, "hint-custom") : null;
        }
        return (0, i.jsxs)(
            s.Fragment,
            {
                children: [
                    (0, i.jsx)(A, {}),
                    (0, i.jsx)("div", { className: "string" == typeof e ? c.dx : void 0, children: e }, "hint-text"),
                ],
            },
            "hint-text",
        );
    }
    renderFooter() {
        let {
            props: { cancelText: e, confirmText: t, onConfirmClick: n, onCancelClick: l, hint: a },
            state: { expanded: o },
        } = this;
        if (!o) return null != a ? this.renderHint() : null;
        if (null != this.props.renderFooter) {
            let e = this.props.renderFooter(o);
            return null != e
                ? (0, i.jsxs)(s.Fragment, { children: [(0, i.jsx)(A, {}), e] }, "footer-custom-content")
                : null;
        }
        return null != n || null != l
            ? (0, i.jsxs)(
                  s.Fragment,
                  {
                      children: [
                          (0, i.jsx)(A, {}),
                          (0, i.jsxs)(r.ButtonGroup, {
                              fullWidth: !0,
                              children: [
                                  null != n
                                      ? (0, i.jsx)(r.Button, {
                                            variant: "active",
                                            size: "sm",
                                            text: t ?? d.intl.string(d.t.BddRzS),
                                            onClick: this.handleConfirmClick,
                                        })
                                      : null,
                                  null != l
                                      ? (0, i.jsx)(r.Button, {
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
              ? (0, i.jsx)(r.euF, { src: e, size: r._3J.SIZE_40, className: c.my, "aria-hidden": !0 })
              : (0, i.jsx)("div", { className: c.my, children: e });
    }
    renderContent() {
        let { body: e, title: t, maxBodyLines: n } = this.props;
        return (0, i.jsxs)("div", {
            className: c.Qs,
            children: [
                this.renderIcon(),
                (0, i.jsxs)("div", {
                    className: c.zH,
                    children: [
                        (0, i.jsx)("div", {
                            className: c.DD,
                            children: "function" == typeof t ? t(this.handleDismiss) : t,
                        }),
                        null != e
                            ? (0, i.jsx)("div", {
                                  className: a()(c.rf, u.a5),
                                  style: { WebkitLineClamp: n, lineClamp: n },
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
            s = null != e ? r.DUT : "div";
        return (0, i.jsxs)(s, {
            onMouseOver: n ? void 0 : this.handleMouseEnter,
            onFocus: n ? void 0 : this.handleMouseEnter,
            onClick: e ?? void 0,
            className: a()(c.kL, { [c.gr]: !0, [c.vk]: null != e && !t }),
            children: [
                this.renderCloseButton(),
                this.renderContent(),
                this.renderFooter(),
                t ? (0, i.jsx)(p, {}) : null,
            ],
        });
    }
}
let m = _;
