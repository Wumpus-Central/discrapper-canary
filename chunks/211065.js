n.d(t, { Z: () => I }), n(388685);
var l = n(200651),
    a = n(192379),
    r = n(512722),
    i = n.n(r),
    o = n(442837),
    s = n(481060),
    u = n(596454),
    c = n(410575),
    d = n(318766),
    m = n(907040),
    h = n(246133),
    f = n(695346),
    p = n(293273),
    b = n(594174),
    S = n(626135),
    j = n(720449),
    g = n(684269),
    O = n(678865),
    x = n(745579),
    v = n(875425),
    _ = n(981631),
    C = n(185923),
    P = n(388032),
    y = n(403773);
function N(e, t, n) {
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
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    return (0, l.jsxs)('div', {
        className: y.statusOptionItem,
        children: [
            (0, l.jsx)(s.qbd, {
                status: e.value,
                size: 10,
                className: y.statusIcon
            }),
            e.label
        ]
    });
}
class k extends a.PureComponent {
    componentDidMount() {
        let { sourceAnalyticsLocations: e, sourceAnalyticsContext: t } = this.props;
        S.default.track(_.rMx.OPEN_MODAL, {
            source: null == t ? void 0 : t.location,
            type: _.jXE.CUSTOM_STATUS_MODAL,
            load_id: null == t ? void 0 : t.loadId,
            location_stack: e
        });
    }
    get analyticsLocation() {
        return { page: _.ZY5.CUSTOM_STATUS_MODAL };
    }
    getEmojiButtonRenderer() {
        let { emojiInfo: e } = this.state;
        return null == e
            ? null
            : () =>
                  (0, l.jsx)(u.Z, {
                      className: y.emoji,
                      emojiId: e.id,
                      emojiName: e.name,
                      animated: !!e.animated
                  });
    }
    renderCustomStatusInput() {
        let { user: e } = this.props,
            { text: t, emojiInfo: n } = this.state;
        return (0, l.jsx)(s.hjN, {
            className: y.formGroup,
            title: P.intl.formatToPlainString(P.t['/w9pHx'], { username: e.username }),
            children: (0, l.jsxs)('div', {
                className: y.inputContainer,
                children: [
                    (0, l.jsx)('div', {
                        className: y.emojiButtonContainer,
                        children: (0, l.jsx)(s.yRy, {
                            renderPopout: this.renderEmojiPicker,
                            position: 'left',
                            animation: s.yRy.Animation.NONE,
                            align: 'top',
                            children: (e, t) => {
                                let { isShown: n } = t;
                                return (0, l.jsx)(
                                    d.Z,
                                    w(T({}, e), {
                                        active: n,
                                        className: y.emojiButton,
                                        tabIndex: 0,
                                        renderButtonContents: this.getEmojiButtonRenderer()
                                    })
                                );
                            }
                        })
                    }),
                    (0, l.jsx)(s.oil, {
                        maxLength: v.s0,
                        value: t,
                        inputClassName: y.input,
                        placeholder: P.intl.string(P.t['zYR38/']),
                        onChange: this.handleStatusChange,
                        onKeyPress: this.handleKeyPress,
                        autoFocus: !0
                    }),
                    t.length > 0 || null != n
                        ? (0, l.jsx)(s.zxk, {
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
                              look: s.zxk.Looks.BLANK,
                              size: s.zxk.Sizes.NONE,
                              children: (0, l.jsx)(s.k$p, {
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
        let { clearAfter: e } = this.state;
        return (0, l.jsx)(s.hjN, {
            className: y.formGroup,
            title: P.intl.string(P.t.E45wvL),
            children: (0, l.jsx)(s.q4e, {
                placeholder: P.intl.string(P.t.E45wvL),
                maxVisibleItems: v.wS.length,
                value: e,
                options: v.wS.map((e) => ({
                    value: e,
                    key: e,
                    label: (0, x.Z)(e)
                })),
                onChange: this.handleChangeClearAfter
            })
        });
    }
    renderStatusInput() {
        let { status: e } = this.state;
        return (0, l.jsx)(s.hjN, {
            className: y.formGroup,
            title: P.intl.string(P.t.zOdg0N),
            children: (0, l.jsx)(s.q4e, {
                maxVisibleItems: 4,
                value: e,
                options: v.Df.map((e) =>
                    w(T({}, e), {
                        value: e.value,
                        key: e.value,
                        label: e.label()
                    })
                ),
                onChange: this.handleChangeStatus,
                renderOptionLabel: E
            })
        });
    }
    render() {
        let { transitionState: e, onClose: t } = this.props;
        return (0, l.jsx)(
            c.Z,
            w(T({}, this.analyticsLocation), {
                children: (0, l.jsxs)(s.Y0X, {
                    transitionState: e,
                    className: y.modalRoot,
                    'aria-label': P.intl.string(P.t['/UonHB']),
                    children: [
                        (0, l.jsxs)(s.xBx, {
                            separator: !1,
                            className: y.headerContainer,
                            children: [
                                (0, l.jsx)('div', { className: y.art }),
                                (0, l.jsx)('div', {
                                    className: y.header,
                                    children: (0, l.jsx)(s.H, {
                                        className: y.headerText,
                                        children: P.intl.string(P.t['/UonHB'])
                                    })
                                }),
                                (0, l.jsx)(s.olH, {
                                    onClick: t,
                                    className: y.modalCloseButton
                                })
                            ]
                        }),
                        (0, l.jsxs)(s.hzk, {
                            children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, l.jsx)(s.$i$, { className: y.formDivider }), this.renderStatusInput()]
                        }),
                        (0, l.jsxs)(s.mzw, {
                            children: [
                                (0, l.jsx)(s.zxk, {
                                    onClick: this.handleSubmit,
                                    children: P.intl.string(P.t.R3BPHx)
                                }),
                                (0, l.jsx)(s.zxk, {
                                    onClick: t,
                                    look: s.zxk.Looks.LINK,
                                    color: y.cancelButton,
                                    children: P.intl.string(P.t['ETE/oK'])
                                })
                            ]
                        })
                    ]
                })
            })
        );
    }
    constructor(...e) {
        super(...e),
            N(this, 'state', {
                emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
                text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : '',
                clearAfter: (0, g.Z)(),
                status: (0, O.Z)()
            }),
            N(this, 'handleClearStatus', () => {
                this.setState({
                    emojiInfo: null,
                    text: ''
                });
            }),
            N(this, 'handleSubmit', (e) => {
                e.preventDefault(), this.handleSaveStatus();
            }),
            N(this, 'handleStatusChange', (e) => {
                this.setState({ text: e });
            }),
            N(this, 'handleEmojiChange', (e) => {
                if (null == e) return;
                let t =
                    null != e.id
                        ? {
                              id: e.id,
                              name: e.name,
                              animated: e.animated
                          }
                        : {
                              id: null,
                              name: e.optionallyDiverseSequence,
                              animated: !1
                          };
                this.setState({ emojiInfo: t });
            }),
            N(this, 'handleChangeClearAfter', (e) => {
                this.setState({ clearAfter: e });
            }),
            N(this, 'handleChangeStatus', (e) => {
                this.setState({ status: e });
            }),
            N(this, 'handleSaveStatus', () => {
                let { sourceAnalyticsContext: e, onClose: t } = this.props,
                    { emojiInfo: n, text: l, clearAfter: a, status: r } = this.state,
                    i = f.co.getSetting();
                i !== r &&
                    (0, h.Z)({
                        nextStatus: r,
                        prevStatus: i,
                        analyticsContext: e
                    }),
                    (0, j.Z)({
                        text: l,
                        emojiInfo: n,
                        clearAfter: a,
                        analyticsContext: e
                    }),
                    t();
            }),
            N(this, 'handleKeyPress', (e) => {
                e.which === _.yXg.ENTER && this.handleSaveStatus();
            }),
            N(this, 'renderEmojiPicker', (e) => {
                let { closePopout: t } = e,
                    { onClose: n } = this.props;
                return (0, l.jsx)(m.Z, {
                    closePopout: t,
                    onSelectEmoji: (e, n) => {
                        this.handleEmojiChange(e), n && t();
                    },
                    pickerIntention: C.Hz.STATUS,
                    onNavigateAway: n
                });
            });
    }
}
let I = o.ZP.connectStores(
    [p.Z, b.default],
    () => {
        let e = b.default.getCurrentUser();
        return (
            i()(null != e, 'CustomStatusModal: user cannot be null'),
            {
                customStatus: p.Z.getCustomStatusActivity(),
                user: e
            }
        );
    },
    { forwardRef: !0 }
)(k);
