"use strict";
n.d(t, { Ay: () => S, de: () => y, sI: () => x });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(939249),
    o = n(789645),
    d = n(825484),
    c = n(821609),
    u = n(97808),
    h = n(778712),
    p = n(12641),
    A = n(985018),
    f = n(352828),
    _ = n(818050);
let g = (e) => e.stopPropagation(),
    m = () => (0, i.jsx)("div", { className: f.tR, onClick: g, onMouseEnter: g, onMouseOver: g }),
    E = () => (0, i.jsx)("div", { className: f.yF }),
    x = (e, t, n) =>
        (0, i.jsx)("div", {
            className: f.qD,
            children: A.intl.format(n, {
                keybind: t,
                keybindHook: (e, n) => (0, i.jsx)(p.A, { keybind: t, className: f.P }, n),
            }),
        }),
    y = (e, t) => (0, i.jsx)("div", { className: f.g2, children: t });
class v extends s.PureComponent {
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
            : (0, i.jsx)(r.D, {
                  onClick: this.handleDismiss,
                  className: f.r,
                  "aria-label": A.intl.string(A.t.LnEgqX),
                  children: (0, i.jsx)(o.P, { size: "xs", color: "currentColor", className: f.MW }),
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
            return null != l ? (0, i.jsxs)(s.Fragment, { children: [(0, i.jsx)(E, {}), l] }, "hint-custom") : null;
        }
        return (0, i.jsxs)(
            s.Fragment,
            {
                children: [
                    (0, i.jsx)(E, {}),
                    (0, i.jsx)("div", { className: "string" == typeof e ? f.dx : void 0, children: e }, "hint-text"),
                ],
            },
            "hint-text",
        );
    }
    renderFooter() {
        let {
            props: { cancelText: e, confirmText: t, onConfirmClick: n, onCancelClick: l, hint: a },
            state: { expanded: r },
        } = this;
        if (!r) return null != a ? this.renderHint() : null;
        if (null != this.props.renderFooter) {
            let e = this.props.renderFooter(r);
            return null != e
                ? (0, i.jsxs)(s.Fragment, { children: [(0, i.jsx)(E, {}), e] }, "footer-custom-content")
                : null;
        }
        return null != n || null != l
            ? (0, i.jsxs)(
                  s.Fragment,
                  {
                      children: [
                          (0, i.jsx)(E, {}),
                          (0, i.jsxs)(d.e, {
                              fullWidth: !0,
                              children: [
                                  null != n
                                      ? (0, i.jsx)(c.$, {
                                            variant: "active",
                                            size: "sm",
                                            text: t ?? A.intl.string(A.t.BddRzS),
                                            onClick: this.handleConfirmClick,
                                        })
                                      : null,
                                  null != l
                                      ? (0, i.jsx)(c.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: e ?? A.intl.string(A.t["ETE/oC"]),
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
              ? (0, i.jsx)(u.eu, { src: e, size: h._3.SIZE_40, className: f.my, "aria-hidden": !0 })
              : (0, i.jsx)("div", { className: f.my, children: e });
    }
    renderContent() {
        let { body: e, title: t, maxBodyLines: n } = this.props;
        return (0, i.jsxs)("div", {
            className: f.Qs,
            children: [
                this.renderIcon(),
                (0, i.jsxs)("div", {
                    className: f.zH,
                    children: [
                        (0, i.jsx)("div", {
                            className: f.DD,
                            children: "function" == typeof t ? t(this.handleDismiss) : t,
                        }),
                        null != e
                            ? (0, i.jsx)("div", {
                                  className: a()(f.rf, _.a5),
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
            s = null != e ? r.D : "div";
        return (0, i.jsxs)(s, {
            onMouseOver: n ? void 0 : this.handleMouseEnter,
            onFocus: n ? void 0 : this.handleMouseEnter,
            onClick: e ?? void 0,
            className: a()(f.kL, { [f.gr]: !0, [f.vk]: null != e && !t }),
            children: [
                this.renderCloseButton(),
                this.renderContent(),
                this.renderFooter(),
                t ? (0, i.jsx)(m, {}) : null,
            ],
        });
    }
}
let S = v;
