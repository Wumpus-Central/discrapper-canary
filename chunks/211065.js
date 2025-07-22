(n.d(e, { Z: () => Z }), n(388685));
var l = n(255367),
    a = n(73800),
    r = n(512722),
    i = n.n(r),
    o = n(442837),
    s = n(755721),
    u = n(481060),
    c = n(596454),
    d = n(410575),
    m = n(318766),
    f = n(907040),
    h = n(246133),
    b = n(695346),
    p = n(293273),
    S = n(594174),
    j = n(626135),
    g = n(720449),
    O = n(684269),
    x = n(678865),
    v = n(745579),
    C = n(875425),
    _ = n(981631),
    T = n(185923),
    P = n(388032),
    y = n(403773);
function w(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
function N(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            l = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            l.forEach(function (e) {
                w(t, e, n[e]);
            }));
    }
    return t;
}
function E(t, e) {
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
function D(t) {
    return (0, l.jsxs)('div', {
        className: y.statusOptionItem,
        children: [
            (0, l.jsx)(u.qbd, {
                status: t.value,
                size: 10,
                className: y.statusIcon
            }),
            t.label
        ]
    });
}
class I extends a.PureComponent {
    componentDidMount() {
        let { sourceAnalyticsLocations: t, sourceAnalyticsContext: e } = this.props;
        j.default.track(_.rMx.OPEN_MODAL, {
            source: null == e ? void 0 : e.location,
            type: _.jXE.CUSTOM_STATUS_MODAL,
            load_id: null == e ? void 0 : e.loadId,
            location_stack: t
        });
    }
    get analyticsLocation() {
        return { page: _.ZY5.CUSTOM_STATUS_MODAL };
    }
    getEmojiButtonRenderer() {
        let { emojiInfo: t } = this.state;
        return null == t
            ? null
            : () =>
                  (0, l.jsx)(c.Z, {
                      className: y.emoji,
                      emojiId: t.id,
                      emojiName: t.name,
                      animated: !!t.animated
                  });
    }
    renderCustomStatusInput() {
        let { user: t } = this.props,
            { text: e, emojiInfo: n } = this.state;
        return (0, l.jsx)(u.hjN, {
            className: y.formGroup,
            title: P.intl.formatToPlainString(P.t['/w9pHx'], { username: t.username }),
            children: (0, l.jsxs)('div', {
                className: y.inputContainer,
                children: [
                    (0, l.jsx)('div', {
                        className: y.emojiButtonContainer,
                        children: (0, l.jsx)(u.yRy, {
                            targetElementRef: this.emojiButtonRef,
                            renderPopout: this.renderEmojiPicker,
                            position: 'left',
                            animation: u.yRy.Animation.NONE,
                            align: 'top',
                            children: (t, e) => {
                                let { isShown: n } = e;
                                return (0, l.jsx)(
                                    m.Z,
                                    E(N({}, t), {
                                        ref: this.emojiButtonRef,
                                        active: n,
                                        className: y.emojiButton,
                                        tabIndex: 0,
                                        renderButtonContents: this.getEmojiButtonRenderer()
                                    })
                                );
                            }
                        })
                    }),
                    (0, l.jsx)(s.Is, {
                        maxLength: C.s0,
                        value: e,
                        inputClassName: y.input,
                        placeholder: P.intl.string(P.t['zYR38/']),
                        onChange: this.handleStatusChange,
                        onKeyPress: this.handleKeyPress,
                        autoFocus: !0
                    }),
                    e.length > 0 || null != n
                        ? (0, l.jsx)(u.P3F, {
                              focusProps: {
                                  offset: {
                                      top: 8,
                                      bottom: 8,
                                      left: -2,
                                      right: -2
                                  }
                              },
                              className: y.clearButton,
                              onClick: this.handleClearStatus,
                              children: (0, l.jsx)(u.k$p, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: y.clearIcon
                              })
                          })
                        : null
                ]
            })
        });
    }
    renderClearAfter() {
        let { clearAfter: t } = this.state;
        return (0, l.jsx)(u.hjN, {
            className: y.formGroup,
            title: P.intl.string(P.t.E45wvL),
            children: (0, l.jsx)(u.q4e, {
                placeholder: P.intl.string(P.t.E45wvL),
                maxVisibleItems: C.wS.length,
                value: t,
                options: C.wS.map((t) => ({
                    value: t,
                    key: t,
                    label: (0, v.Z)(t)
                })),
                onChange: this.handleChangeClearAfter
            })
        });
    }
    renderStatusInput() {
        let { status: t } = this.state;
        return (0, l.jsx)(u.hjN, {
            className: y.formGroup,
            title: P.intl.string(P.t.zOdg0N),
            children: (0, l.jsx)(u.q4e, {
                maxVisibleItems: 4,
                value: t,
                options: C.Df.map((t) =>
                    E(N({}, t), {
                        value: t.value,
                        key: t.value,
                        label: t.label()
                    })
                ),
                onChange: this.handleChangeStatus,
                renderOptionLabel: D
            })
        });
    }
    render() {
        let { transitionState: t, onClose: e } = this.props;
        return (0, l.jsx)(
            d.Z,
            E(N({}, this.analyticsLocation), {
                children: (0, l.jsxs)(u.Y0X, {
                    transitionState: t,
                    className: y.modalRoot,
                    'aria-label': P.intl.string(P.t['/UonHB']),
                    parentComponent: 'CustomStatusModal',
                    children: [
                        (0, l.jsxs)(u.xBx, {
                            separator: !1,
                            className: y.headerContainer,
                            children: [
                                (0, l.jsx)('div', { className: y.art }),
                                (0, l.jsx)('div', {
                                    className: y.header,
                                    children: (0, l.jsx)(u.H, {
                                        className: y.headerText,
                                        children: P.intl.string(P.t['/UonHB'])
                                    })
                                }),
                                (0, l.jsx)(u.olH, {
                                    onClick: e,
                                    className: y.modalCloseButton
                                })
                            ]
                        }),
                        (0, l.jsxs)(u.hzk, {
                            children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, l.jsx)(u.$i$, { className: y.formDivider }), this.renderStatusInput()]
                        }),
                        (0, l.jsxs)(u.mzw, {
                            className: y.modalFooter,
                            children: [
                                (0, l.jsx)(u.zxk, {
                                    variant: 'primary',
                                    text: P.intl.string(P.t.R3BPHx),
                                    onClick: this.handleSubmit
                                }),
                                (0, l.jsx)(u.Avr, {
                                    onClick: e,
                                    variant: 'secondary',
                                    size: 'sm',
                                    textVariant: 'text-md/medium',
                                    color: y.cancelButton,
                                    text: P.intl.string(P.t['ETE/oK'])
                                })
                            ]
                        })
                    ]
                })
            })
        );
    }
    constructor(...t) {
        (super(...t),
            w(this, 'emojiButtonRef', a.createRef()),
            w(this, 'state', {
                emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
                text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : '',
                clearAfter: (0, O.Z)(),
                status: (0, x.Z)()
            }),
            w(this, 'handleClearStatus', () => {
                this.setState({
                    emojiInfo: null,
                    text: ''
                });
            }),
            w(this, 'handleSubmit', (t) => {
                (t.preventDefault(), this.handleSaveStatus());
            }),
            w(this, 'handleStatusChange', (t) => {
                this.setState({ text: t });
            }),
            w(this, 'handleEmojiChange', (t) => {
                if (null == t) return;
                let e =
                    null != t.id
                        ? {
                              id: t.id,
                              name: t.name,
                              animated: t.animated
                          }
                        : {
                              id: null,
                              name: t.optionallyDiverseSequence,
                              animated: !1
                          };
                this.setState({ emojiInfo: e });
            }),
            w(this, 'handleChangeClearAfter', (t) => {
                this.setState({ clearAfter: t });
            }),
            w(this, 'handleChangeStatus', (t) => {
                this.setState({ status: t });
            }),
            w(this, 'handleSaveStatus', () => {
                let { sourceAnalyticsContext: t, onClose: e } = this.props,
                    { emojiInfo: n, text: l, clearAfter: a, status: r } = this.state,
                    i = b.co.getSetting();
                (i !== r &&
                    (0, h.Z)({
                        nextStatus: r,
                        prevStatus: i,
                        analyticsContext: t
                    }),
                    (0, g.Z)({
                        text: l,
                        emojiInfo: n,
                        clearAfter: a,
                        analyticsContext: t
                    }),
                    e());
            }),
            w(this, 'handleKeyPress', (t) => {
                t.which === _.yXg.ENTER && this.handleSaveStatus();
            }),
            w(this, 'renderEmojiPicker', (t) => {
                let { closePopout: e } = t,
                    { onClose: n } = this.props;
                return (0, l.jsx)(f.Z, {
                    closePopout: e,
                    onSelectEmoji: (t) => {
                        let { emoji: n, willClose: l } = t;
                        (this.handleEmojiChange(n), l && e());
                    },
                    pickerIntention: T.Hz.STATUS,
                    onNavigateAway: n
                });
            }));
    }
}
let Z = o.ZP.connectStores(
    [p.Z, S.default],
    () => {
        let t = S.default.getCurrentUser();
        return (
            i()(null != t, 'CustomStatusModal: user cannot be null'),
            {
                customStatus: p.Z.getCustomStatusActivity(),
                user: t
            }
        );
    },
    { forwardRef: !0 }
)(I);
