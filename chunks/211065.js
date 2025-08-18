n.d(e, { Z: () => I }), n(388685);
var l = n(951288),
    a = n(647438),
    r = n(512722),
    i = n.n(r),
    o = n(442837),
    s = n(481060),
    u = n(596454),
    c = n(410575),
    d = n(318766),
    m = n(907040),
    f = n(246133),
    p = n(695346),
    h = n(293273),
    b = n(594174),
    S = n(626135),
    g = n(720449),
    j = n(684269),
    O = n(678865),
    v = n(745579),
    C = n(875425),
    x = n(981631),
    _ = n(185923),
    T = n(388032),
    y = n(486384);
function w(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = n),
        t
    );
}
function P(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            l.forEach(function (e) {
                w(t, e, n[e]);
            });
    }
    return t;
}
function N(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function E(t) {
    return (0, l.jsxs)("div", {
        className: y.statusOptionItem,
        children: [
            (0, l.jsx)(s.qbd, {
                status: t.value,
                size: 10,
                className: y.statusIcon,
            }),
            t.label,
        ],
    });
}
class D extends a.PureComponent {
    componentDidMount() {
        let { sourceAnalyticsLocations: t, sourceAnalyticsContext: e } = this.props;
        S.default.track(x.rMx.OPEN_MODAL, {
            source: null == e ? void 0 : e.location,
            type: x.jXE.CUSTOM_STATUS_MODAL,
            load_id: null == e ? void 0 : e.loadId,
            location_stack: t,
        });
    }
    get analyticsLocation() {
        return { page: x.ZY5.CUSTOM_STATUS_MODAL };
    }
    getEmojiButtonRenderer() {
        let { emojiInfo: t } = this.state;
        return null == t
            ? null
            : () =>
                  (0, l.jsx)(u.Z, {
                      className: y.emoji,
                      emojiId: t.id,
                      emojiName: t.name,
                      animated: !!t.animated,
                  });
    }
    renderCustomStatusInput() {
        let { user: t } = this.props,
            { text: e, emojiInfo: n } = this.state;
        return (0, l.jsx)(s.hjN, {
            className: y.formGroup,
            title: T.intl.formatToPlainString(T.t["/w9pHx"], { username: t.username }),
            children: (0, l.jsxs)("div", {
                className: y.inputContainer,
                children: [
                    (0, l.jsx)("div", { className: y.emojiButtonContainer }),
                    (0, l.jsx)(s.oil, {
                        maxLength: C.s0,
                        value: e,
                        placeholder: T.intl.string(T.t["zYR38/"]),
                        onChange: this.handleStatusChange,
                        onKeyDown: this.handleKeyPress,
                        autoFocus: !0,
                        clearable: { show: e.length > 0 || null != n },
                        onClear: this.handleClearStatus,
                        leading: {
                            type: "emoji",
                            button: (0, l.jsx)(s.yRy, {
                                targetElementRef: this.emojiButtonRef,
                                renderPopout: this.renderEmojiPicker,
                                position: "left",
                                animation: s.yRy.Animation.NONE,
                                align: "top",
                                children: (t, e) => {
                                    let { isShown: n } = e;
                                    return (0, l.jsx)(
                                        d.Z,
                                        N(P({}, t), {
                                            ref: this.emojiButtonRef,
                                            active: n,
                                            className: y.emojiButton,
                                            tabIndex: 0,
                                            renderButtonContents: this.getEmojiButtonRenderer(),
                                        }),
                                    );
                                },
                            }),
                        },
                    }),
                ],
            }),
        });
    }
    renderClearAfter() {
        let { clearAfter: t } = this.state;
        return (0, l.jsx)(s.hjN, {
            className: y.formGroup,
            title: T.intl.string(T.t.E45wvL),
            children: (0, l.jsx)(s.q4e, {
                placeholder: T.intl.string(T.t.E45wvL),
                maxVisibleItems: C.wS.length,
                value: t,
                options: C.wS.map((t) => ({
                    value: t,
                    key: t,
                    label: (0, v.Z)(t),
                })),
                onChange: this.handleChangeClearAfter,
            }),
        });
    }
    renderStatusInput() {
        let { status: t } = this.state;
        return (0, l.jsx)(s.hjN, {
            className: y.formGroup,
            title: T.intl.string(T.t.zOdg0N),
            children: (0, l.jsx)(s.q4e, {
                maxVisibleItems: 4,
                value: t,
                options: C.Df.map((t) =>
                    N(P({}, t), {
                        value: t.value,
                        key: t.value,
                        label: t.label(),
                    }),
                ),
                onChange: this.handleChangeStatus,
                renderOptionLabel: E,
            }),
        });
    }
    render() {
        let { transitionState: t, onClose: e } = this.props;
        return (0, l.jsx)(
            c.Z,
            N(P({}, this.analyticsLocation), {
                children: (0, l.jsxs)(s.Y0X, {
                    transitionState: t,
                    className: y.modalRoot,
                    "aria-label": T.intl.string(T.t["/UonHB"]),
                    parentComponent: "CustomStatusModal",
                    children: [
                        (0, l.jsxs)(s.xBx, {
                            separator: !1,
                            className: y.headerContainer,
                            children: [
                                (0, l.jsx)("div", { className: y.art }),
                                (0, l.jsx)("div", {
                                    className: y.header,
                                    children: (0, l.jsx)(s.H, {
                                        className: y.headerText,
                                        children: T.intl.string(T.t["/UonHB"]),
                                    }),
                                }),
                                (0, l.jsx)(s.olH, {
                                    onClick: e,
                                    className: y.modalCloseButton,
                                }),
                            ],
                        }),
                        (0, l.jsxs)(s.hzk, {
                            children: [
                                this.renderCustomStatusInput(),
                                this.renderClearAfter(),
                                (0, l.jsx)(s.$i$, { className: y.formDivider }),
                                this.renderStatusInput(),
                            ],
                        }),
                        (0, l.jsxs)(s.mzw, {
                            className: y.modalFooter,
                            children: [
                                (0, l.jsx)(s.zxk, {
                                    variant: "primary",
                                    text: T.intl.string(T.t.R3BPHx),
                                    onClick: this.handleSubmit,
                                }),
                                (0, l.jsx)(s.Avr, {
                                    onClick: e,
                                    variant: "secondary",
                                    size: "sm",
                                    textVariant: "text-md/medium",
                                    color: y.cancelButton,
                                    text: T.intl.string(T.t["ETE/oK"]),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        );
    }
    constructor(...t) {
        super(...t),
            w(this, "emojiButtonRef", a.createRef()),
            w(this, "state", {
                emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
                text:
                    null != this.props.customStatus && null != this.props.customStatus.state
                        ? this.props.customStatus.state
                        : "",
                clearAfter: (0, j.Z)(),
                status: (0, O.Z)(),
            }),
            w(this, "handleClearStatus", () => {
                this.setState({
                    emojiInfo: null,
                    text: "",
                });
            }),
            w(this, "handleSubmit", (t) => {
                t.preventDefault(), this.handleSaveStatus();
            }),
            w(this, "handleStatusChange", (t) => {
                this.setState({ text: t });
            }),
            w(this, "handleEmojiChange", (t) => {
                if (null == t) return;
                let e =
                    null != t.id
                        ? {
                              id: t.id,
                              name: t.name,
                              animated: t.animated,
                          }
                        : {
                              id: null,
                              name: t.optionallyDiverseSequence,
                              animated: !1,
                          };
                this.setState({ emojiInfo: e });
            }),
            w(this, "handleChangeClearAfter", (t) => {
                this.setState({ clearAfter: t });
            }),
            w(this, "handleChangeStatus", (t) => {
                this.setState({ status: t });
            }),
            w(this, "handleSaveStatus", () => {
                let { sourceAnalyticsContext: t, onClose: e } = this.props,
                    { emojiInfo: n, text: l, clearAfter: a, status: r } = this.state,
                    i = p.co.getSetting();
                i !== r &&
                    (0, f.Z)({
                        nextStatus: r,
                        prevStatus: i,
                        analyticsContext: t,
                    }),
                    (0, g.Z)({
                        text: l,
                        emojiInfo: n,
                        clearAfter: a,
                        analyticsContext: t,
                    }),
                    e();
            }),
            w(this, "handleKeyPress", (t) => {
                t.which === x.yXg.ENTER && this.handleSaveStatus();
            }),
            w(this, "renderEmojiPicker", (t) => {
                let { closePopout: e } = t,
                    { onClose: n } = this.props;
                return (0, l.jsx)(m.Z, {
                    closePopout: e,
                    onSelectEmoji: (t) => {
                        let { emoji: n, willClose: l } = t;
                        this.handleEmojiChange(n), l && e();
                    },
                    pickerIntention: _.Hz.STATUS,
                    onNavigateAway: n,
                });
            });
    }
}
let I = o.ZP.connectStores(
    [h.Z, b.default],
    () => {
        let t = b.default.getCurrentUser();
        return (
            i()(null != t, "CustomStatusModal: user cannot be null"),
            {
                customStatus: h.Z.getCustomStatusActivity(),
                user: t,
            }
        );
    },
    { forwardRef: !0 },
)(D);
