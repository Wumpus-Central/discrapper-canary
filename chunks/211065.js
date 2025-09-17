n.d(e, { Z: () => Z }), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(512722),
    l = n.n(i),
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
    O = n(684269),
    j = n(678865),
    v = n(745579),
    x = n(875425),
    y = n(981631),
    _ = n(185923),
    C = n(388032),
    P = n(486384);
function T(t, e, n) {
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
function w(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            r.forEach(function (e) {
                T(t, e, n[e]);
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
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function D(t) {
    return (0, r.jsxs)("div", {
        className: P.statusOptionItem,
        children: [
            (0, r.jsx)(s.qbd, {
                status: t.value,
                size: 10,
                className: P.statusIcon,
            }),
            t.label,
        ],
    });
}
class E extends a.PureComponent {
    componentDidMount() {
        let { sourceAnalyticsLocations: t, sourceAnalyticsContext: e } = this.props;
        S.default.track(y.rMx.OPEN_MODAL, {
            source: null == e ? void 0 : e.location,
            type: y.jXE.CUSTOM_STATUS_MODAL,
            load_id: null == e ? void 0 : e.loadId,
            location_stack: t,
        });
    }
    get analyticsLocation() {
        return { page: y.ZY5.CUSTOM_STATUS_MODAL };
    }
    getEmojiButtonRenderer() {
        let { emojiInfo: t } = this.state;
        return null == t
            ? null
            : () =>
                  (0, r.jsx)(u.Z, {
                      className: P.emoji,
                      emojiId: t.id,
                      emojiName: t.name,
                      animated: !!t.animated,
                  });
    }
    renderCustomStatusInput() {
        let { user: t } = this.props,
            { text: e, emojiInfo: n } = this.state;
        return (0, r.jsx)(s.hjN, {
            className: P.formGroup,
            title: C.intl.formatToPlainString(C.t["/w9pHx"], { username: t.username }),
            children: (0, r.jsxs)("div", {
                className: P.inputContainer,
                children: [
                    (0, r.jsx)("div", { className: P.emojiButtonContainer }),
                    (0, r.jsx)(s.oil, {
                        maxLength: x.s0,
                        value: e,
                        placeholder: C.intl.string(C.t["zYR38/"]),
                        onChange: this.handleStatusChange,
                        onKeyDown: this.handleKeyPress,
                        autoFocus: !0,
                        clearable: { show: e.length > 0 || null != n },
                        onClear: this.handleClearStatus,
                        leading: {
                            type: "emoji",
                            button: (0, r.jsx)(s.yRy, {
                                targetElementRef: this.emojiButtonRef,
                                renderPopout: this.renderEmojiPicker,
                                position: "left",
                                animation: s.yRy.Animation.NONE,
                                align: "top",
                                children: (t, e) => {
                                    let { isShown: n } = e;
                                    return (0, r.jsx)(
                                        d.Z,
                                        N(w({}, t), {
                                            ref: this.emojiButtonRef,
                                            active: n,
                                            className: P.emojiButton,
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
        return (0, r.jsx)(s.hjN, {
            className: P.formGroup,
            title: C.intl.string(C.t.E45wvL),
            children: (0, r.jsx)(s.q4e, {
                placeholder: C.intl.string(C.t.E45wvL),
                maxVisibleItems: x.wS.length,
                value: t,
                options: x.wS.map((t) => ({
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
        return (0, r.jsx)(s.hjN, {
            className: P.formGroup,
            title: C.intl.string(C.t.zOdg0N),
            children: (0, r.jsx)(s.q4e, {
                maxVisibleItems: 4,
                value: t,
                options: x.Df.map((t) =>
                    N(w({}, t), {
                        value: t.value,
                        key: t.value,
                        label: t.label(),
                    }),
                ),
                onChange: this.handleChangeStatus,
                renderOptionLabel: D,
            }),
        });
    }
    render() {
        let { transitionState: t, onClose: e } = this.props;
        return (0, r.jsx)(
            c.Z,
            N(w({}, this.analyticsLocation), {
                children: (0, r.jsxs)(s.Y0X, {
                    transitionState: t,
                    className: P.modalRoot,
                    "aria-label": C.intl.string(C.t["/UonHB"]),
                    parentComponent: "CustomStatusModal",
                    children: [
                        (0, r.jsxs)(s.xBx, {
                            separator: !1,
                            className: P.headerContainer,
                            children: [
                                (0, r.jsx)("div", { className: P.art }),
                                (0, r.jsx)("div", {
                                    className: P.header,
                                    children: (0, r.jsx)(s.H, {
                                        className: P.headerText,
                                        children: C.intl.string(C.t["/UonHB"]),
                                    }),
                                }),
                                (0, r.jsx)(s.olH, {
                                    onClick: e,
                                    className: P.modalCloseButton,
                                }),
                            ],
                        }),
                        (0, r.jsxs)(s.hzk, {
                            children: [
                                this.renderCustomStatusInput(),
                                this.renderClearAfter(),
                                (0, r.jsx)(s.$i$, { className: P.formDivider }),
                                this.renderStatusInput(),
                            ],
                        }),
                        (0, r.jsxs)(s.mzw, {
                            className: P.modalFooter,
                            children: [
                                (0, r.jsx)(s.zxk, {
                                    variant: "primary",
                                    text: C.intl.string(C.t.R3BPHx),
                                    onClick: this.handleSubmit,
                                }),
                                (0, r.jsx)(s.Avr, {
                                    onClick: e,
                                    variant: "secondary",
                                    size: "sm",
                                    textVariant: "text-md/medium",
                                    color: P.cancelButton,
                                    text: C.intl.string(C.t["ETE/oK"]),
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
            T(this, "emojiButtonRef", a.createRef()),
            T(this, "state", {
                emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
                text:
                    null != this.props.customStatus && null != this.props.customStatus.state
                        ? this.props.customStatus.state
                        : "",
                clearAfter: (0, O.Z)(),
                status: (0, j.Z)(),
            }),
            T(this, "handleClearStatus", () => {
                this.setState({
                    emojiInfo: null,
                    text: "",
                });
            }),
            T(this, "handleSubmit", (t) => {
                t.preventDefault(), this.handleSaveStatus();
            }),
            T(this, "handleStatusChange", (t) => {
                this.setState({ text: t });
            }),
            T(this, "handleEmojiChange", (t) => {
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
            T(this, "handleChangeClearAfter", (t) => {
                this.setState({ clearAfter: t });
            }),
            T(this, "handleChangeStatus", (t) => {
                this.setState({ status: t });
            }),
            T(this, "handleSaveStatus", () => {
                let { sourceAnalyticsContext: t, onClose: e } = this.props,
                    { emojiInfo: n, text: r, clearAfter: a, status: i } = this.state,
                    l = p.co.getSetting();
                l !== i &&
                    (0, f.Z)({
                        nextStatus: i,
                        prevStatus: l,
                        analyticsContext: t,
                    }),
                    (0, g.Z)({
                        text: r,
                        emojiInfo: n,
                        clearAfter: a,
                        analyticsContext: t,
                    }),
                    e();
            }),
            T(this, "handleKeyPress", (t) => {
                t.which === y.yXg.ENTER && this.handleSaveStatus();
            }),
            T(this, "renderEmojiPicker", (t) => {
                let { closePopout: e } = t,
                    { onClose: n } = this.props;
                return (0, r.jsx)(m.Z, {
                    closePopout: e,
                    onSelectEmoji: (t) => {
                        let { emoji: n, willClose: r } = t;
                        this.handleEmojiChange(n), r && e();
                    },
                    pickerIntention: _.Hz.STATUS,
                    onNavigateAway: n,
                });
            });
    }
}
let Z = o.ZP.connectStores(
    [h.Z, b.default],
    () => {
        let t = b.default.getCurrentUser();
        return (
            l()(null != t, "CustomStatusModal: user cannot be null"),
            {
                customStatus: h.Z.getCustomStatusActivity(),
                user: t,
            }
        );
    },
    { forwardRef: !0 },
)(E);
