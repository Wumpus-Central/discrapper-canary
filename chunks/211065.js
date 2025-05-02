n.d(e, { Z: () => k }), n(388685);
var l = n(200651),
    r = n(192379),
    a = n(512722),
    i = n.n(a),
    o = n(442837),
    s = n(481060),
    u = n(596454),
    c = n(410575),
    d = n(318766),
    m = n(907040),
    f = n(246133),
    h = n(695346),
    p = n(293273),
    b = n(594174),
    S = n(626135),
    j = n(720449),
    g = n(684269),
    x = n(678865),
    O = n(745579),
    v = n(875425),
    C = n(981631),
    _ = n(185923),
    P = n(388032),
    T = n(403773);
function N(t, e, n) {
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
function y(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            l.forEach(function (e) {
                N(t, e, n[e]);
            });
    }
    return t;
}
function w(t, e) {
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
    return (0, l.jsxs)('div', {
        className: T.statusOptionItem,
        children: [
            (0, l.jsx)(s.qbd, {
                status: t.value,
                size: 10,
                className: T.statusIcon
            }),
            t.label
        ]
    });
}
class I extends r.PureComponent {
    componentDidMount() {
        let { sourceAnalyticsLocations: t, sourceAnalyticsContext: e } = this.props;
        S.default.track(C.rMx.OPEN_MODAL, {
            source: null == e ? void 0 : e.location,
            type: C.jXE.CUSTOM_STATUS_MODAL,
            load_id: null == e ? void 0 : e.loadId,
            location_stack: t
        });
    }
    get analyticsLocation() {
        return { page: C.ZY5.CUSTOM_STATUS_MODAL };
    }
    getEmojiButtonRenderer() {
        let { emojiInfo: t } = this.state;
        return null == t
            ? null
            : () =>
                  (0, l.jsx)(u.Z, {
                      className: T.emoji,
                      emojiId: t.id,
                      emojiName: t.name,
                      animated: !!t.animated
                  });
    }
    renderCustomStatusInput() {
        let { user: t } = this.props,
            { text: e, emojiInfo: n } = this.state;
        return (0, l.jsx)(s.hjN, {
            className: T.formGroup,
            title: P.intl.formatToPlainString(P.t['/w9pHx'], { username: t.username }),
            children: (0, l.jsxs)('div', {
                className: T.inputContainer,
                children: [
                    (0, l.jsx)('div', {
                        className: T.emojiButtonContainer,
                        children: (0, l.jsx)(s.yRy, {
                            renderPopout: this.renderEmojiPicker,
                            position: 'left',
                            animation: s.yRy.Animation.NONE,
                            align: 'top',
                            children: (t, e) => {
                                let { isShown: n } = e;
                                return (0, l.jsx)(
                                    d.Z,
                                    w(y({}, t), {
                                        active: n,
                                        className: T.emojiButton,
                                        tabIndex: 0,
                                        renderButtonContents: this.getEmojiButtonRenderer()
                                    })
                                );
                            }
                        })
                    }),
                    (0, l.jsx)(s.oil, {
                        maxLength: v.s0,
                        value: e,
                        inputClassName: T.input,
                        placeholder: P.intl.string(P.t['zYR38/']),
                        onChange: this.handleStatusChange,
                        onKeyPress: this.handleKeyPress,
                        autoFocus: !0
                    }),
                    e.length > 0 || null != n
                        ? (0, l.jsx)(s.zxk, {
                              focusProps: {
                                  offset: {
                                      top: 8,
                                      bottom: 8,
                                      left: -2,
                                      right: -2
                                  }
                              },
                              className: T.clearButton,
                              onClick: this.handleClearStatus,
                              look: s.zxk.Looks.BLANK,
                              size: s.zxk.Sizes.NONE,
                              children: (0, l.jsx)(s.k$p, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: T.clearIcon
                              })
                          })
                        : null
                ]
            })
        });
    }
    renderClearAfter() {
        let { clearAfter: t } = this.state;
        return (0, l.jsx)(s.hjN, {
            className: T.formGroup,
            title: P.intl.string(P.t.E45wvL),
            children: (0, l.jsx)(s.q4e, {
                placeholder: P.intl.string(P.t.E45wvL),
                maxVisibleItems: v.wS.length,
                value: t,
                options: v.wS.map((t) => ({
                    value: t,
                    key: t,
                    label: (0, O.Z)(t)
                })),
                onChange: this.handleChangeClearAfter
            })
        });
    }
    renderStatusInput() {
        let { status: t } = this.state;
        return (0, l.jsx)(s.hjN, {
            className: T.formGroup,
            title: P.intl.string(P.t.zOdg0N),
            children: (0, l.jsx)(s.q4e, {
                maxVisibleItems: 4,
                value: t,
                options: v.Df.map((t) =>
                    w(y({}, t), {
                        value: t.value,
                        key: t.value,
                        label: t.label()
                    })
                ),
                onChange: this.handleChangeStatus,
                renderOptionLabel: E
            })
        });
    }
    render() {
        let { transitionState: t, onClose: e } = this.props;
        return (0, l.jsx)(
            c.Z,
            w(y({}, this.analyticsLocation), {
                children: (0, l.jsxs)(s.Y0X, {
                    transitionState: t,
                    className: T.modalRoot,
                    'aria-label': P.intl.string(P.t['/UonHB']),
                    children: [
                        (0, l.jsxs)(s.xBx, {
                            separator: !1,
                            className: T.headerContainer,
                            children: [
                                (0, l.jsx)('div', { className: T.art }),
                                (0, l.jsx)('div', {
                                    className: T.header,
                                    children: (0, l.jsx)(s.H, {
                                        className: T.headerText,
                                        children: P.intl.string(P.t['/UonHB'])
                                    })
                                }),
                                (0, l.jsx)(s.olH, {
                                    onClick: e,
                                    className: T.modalCloseButton
                                })
                            ]
                        }),
                        (0, l.jsxs)(s.hzk, {
                            children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, l.jsx)(s.$i$, { className: T.formDivider }), this.renderStatusInput()]
                        }),
                        (0, l.jsxs)(s.mzw, {
                            children: [
                                (0, l.jsx)(s.zxk, {
                                    onClick: this.handleSubmit,
                                    children: P.intl.string(P.t.R3BPHx)
                                }),
                                (0, l.jsx)(s.zxk, {
                                    onClick: e,
                                    look: s.zxk.Looks.LINK,
                                    color: T.cancelButton,
                                    children: P.intl.string(P.t['ETE/oK'])
                                })
                            ]
                        })
                    ]
                })
            })
        );
    }
    constructor(...t) {
        super(...t),
            N(this, 'state', {
                emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
                text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : '',
                clearAfter: (0, g.Z)(),
                status: (0, x.Z)()
            }),
            N(this, 'handleClearStatus', () => {
                this.setState({
                    emojiInfo: null,
                    text: ''
                });
            }),
            N(this, 'handleSubmit', (t) => {
                t.preventDefault(), this.handleSaveStatus();
            }),
            N(this, 'handleStatusChange', (t) => {
                this.setState({ text: t });
            }),
            N(this, 'handleEmojiChange', (t) => {
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
            N(this, 'handleChangeClearAfter', (t) => {
                this.setState({ clearAfter: t });
            }),
            N(this, 'handleChangeStatus', (t) => {
                this.setState({ status: t });
            }),
            N(this, 'handleSaveStatus', () => {
                let { sourceAnalyticsContext: t, onClose: e } = this.props,
                    { emojiInfo: n, text: l, clearAfter: r, status: a } = this.state,
                    i = h.co.getSetting();
                i !== a &&
                    (0, f.Z)({
                        nextStatus: a,
                        prevStatus: i,
                        analyticsContext: t
                    }),
                    (0, j.Z)({
                        text: l,
                        emojiInfo: n,
                        clearAfter: r,
                        analyticsContext: t
                    }),
                    e();
            }),
            N(this, 'handleKeyPress', (t) => {
                t.which === C.yXg.ENTER && this.handleSaveStatus();
            }),
            N(this, 'renderEmojiPicker', (t) => {
                let { closePopout: e } = t,
                    { onClose: n } = this.props;
                return (0, l.jsx)(m.Z, {
                    closePopout: e,
                    onSelectEmoji: (t, n) => {
                        this.handleEmojiChange(t), n && e();
                    },
                    pickerIntention: _.Hz.STATUS,
                    onNavigateAway: n
                });
            });
    }
}
let k = o.ZP.connectStores(
    [p.Z, b.default],
    () => {
        let t = b.default.getCurrentUser();
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
