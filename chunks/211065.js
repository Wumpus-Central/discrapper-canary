n.d(t, { Z: () => k }), n(388685);
var a = n(200651),
    r = n(192379),
    l = n(512722),
    i = n.n(l),
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
    v = n(745579),
    _ = n(875425),
    O = n(981631),
    N = n(185923),
    C = n(388032),
    y = n(403773);
function T(e, t, n) {
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
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    return (0, a.jsxs)('div', {
        className: y.statusOptionItem,
        children: [
            (0, a.jsx)(s.qbd, {
                status: e.value,
                size: 10,
                className: y.statusIcon
            }),
            e.label
        ]
    });
}
class E extends r.PureComponent {
    componentDidMount() {
        let { sourceAnalyticsLocations: e, sourceAnalyticsContext: t } = this.props;
        S.default.track(O.rMx.OPEN_MODAL, {
            source: null == t ? void 0 : t.location,
            type: O.jXE.CUSTOM_STATUS_MODAL,
            load_id: null == t ? void 0 : t.loadId,
            location_stack: e
        });
    }
    get analyticsLocation() {
        return { page: O.ZY5.CUSTOM_STATUS_MODAL };
    }
    getEmojiButtonRenderer() {
        let { emojiInfo: e } = this.state;
        return null == e
            ? null
            : () =>
                  (0, a.jsx)(u.Z, {
                      className: y.emoji,
                      emojiId: e.id,
                      emojiName: e.name,
                      animated: !!e.animated
                  });
    }
    renderCustomStatusInput() {
        let { user: e } = this.props,
            { text: t, emojiInfo: n } = this.state;
        return (0, a.jsx)(s.hjN, {
            className: y.formGroup,
            title: C.NW.formatToPlainString(C.t['/w9pHx'], { username: e.username }),
            children: (0, a.jsxs)('div', {
                className: y.inputContainer,
                children: [
                    (0, a.jsx)('div', {
                        className: y.emojiButtonContainer,
                        children: (0, a.jsx)(s.yRy, {
                            renderPopout: this.renderEmojiPicker,
                            position: 'left',
                            animation: s.yRy.Animation.NONE,
                            align: 'top',
                            children: (e, t) => {
                                let { isShown: n } = t;
                                return (0, a.jsx)(
                                    d.Z,
                                    I(P({}, e), {
                                        active: n,
                                        className: y.emojiButton,
                                        tabIndex: 0,
                                        renderButtonContents: this.getEmojiButtonRenderer()
                                    })
                                );
                            }
                        })
                    }),
                    (0, a.jsx)(s.oil, {
                        maxLength: _.s0,
                        value: t,
                        inputClassName: y.input,
                        placeholder: C.NW.string(C.t['zYR38/']),
                        onChange: this.handleStatusChange,
                        onKeyPress: this.handleKeyPress,
                        autoFocus: !0
                    }),
                    t.length > 0 || null != n
                        ? (0, a.jsx)(s.zxk, {
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
                              children: (0, a.jsx)(s.k$p, {
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
        return (0, a.jsx)(s.hjN, {
            className: y.formGroup,
            title: C.NW.string(C.t.E45wvL),
            children: (0, a.jsx)(s.q4e, {
                placeholder: C.NW.string(C.t.E45wvL),
                maxVisibleItems: _.wS.length,
                value: e,
                options: _.wS.map((e) => ({
                    value: e,
                    key: e,
                    label: (0, v.Z)(e)
                })),
                onChange: this.handleChangeClearAfter
            })
        });
    }
    renderStatusInput() {
        let { status: e } = this.state;
        return (0, a.jsx)(s.hjN, {
            className: y.formGroup,
            title: C.NW.string(C.t.zOdg0N),
            children: (0, a.jsx)(s.q4e, {
                maxVisibleItems: 4,
                value: e,
                options: _.Df.map((e) =>
                    I(P({}, e), {
                        value: e.value,
                        key: e.value,
                        label: e.label()
                    })
                ),
                onChange: this.handleChangeStatus,
                renderOptionLabel: w
            })
        });
    }
    render() {
        let { transitionState: e, onClose: t } = this.props;
        return (0, a.jsx)(
            c.Z,
            I(P({}, this.analyticsLocation), {
                children: (0, a.jsxs)(s.Y0X, {
                    transitionState: e,
                    className: y.modalRoot,
                    'aria-label': C.NW.string(C.t['/UonHB']),
                    children: [
                        (0, a.jsxs)(s.xBx, {
                            separator: !1,
                            className: y.headerContainer,
                            children: [
                                (0, a.jsx)('div', { className: y.art }),
                                (0, a.jsx)('div', {
                                    className: y.header,
                                    children: (0, a.jsx)(s.H, {
                                        className: y.headerText,
                                        children: C.NW.string(C.t['/UonHB'])
                                    })
                                }),
                                (0, a.jsx)(s.olH, {
                                    onClick: t,
                                    className: y.modalCloseButton
                                })
                            ]
                        }),
                        (0, a.jsxs)(s.hzk, {
                            children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, a.jsx)(s.$i$, { className: y.formDivider }), this.renderStatusInput()]
                        }),
                        (0, a.jsxs)(s.mzw, {
                            children: [
                                (0, a.jsx)(s.zxk, {
                                    onClick: this.handleSubmit,
                                    children: C.NW.string(C.t.R3BPHx)
                                }),
                                (0, a.jsx)(s.zxk, {
                                    onClick: t,
                                    look: s.zxk.Looks.LINK,
                                    color: y.cancelButton,
                                    children: C.NW.string(C.t['ETE/oK'])
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
            T(this, 'state', {
                emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
                text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : '',
                clearAfter: (0, g.Z)(),
                status: (0, x.Z)()
            }),
            T(this, 'handleClearStatus', () => {
                this.setState({
                    emojiInfo: null,
                    text: ''
                });
            }),
            T(this, 'handleSubmit', (e) => {
                e.preventDefault(), this.handleSaveStatus();
            }),
            T(this, 'handleStatusChange', (e) => {
                this.setState({ text: e });
            }),
            T(this, 'handleEmojiChange', (e) => {
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
            T(this, 'handleChangeClearAfter', (e) => {
                this.setState({ clearAfter: e });
            }),
            T(this, 'handleChangeStatus', (e) => {
                this.setState({ status: e });
            }),
            T(this, 'handleSaveStatus', () => {
                let { sourceAnalyticsContext: e, onClose: t } = this.props,
                    { emojiInfo: n, text: a, clearAfter: r, status: l } = this.state,
                    i = h.co.getSetting();
                i !== l &&
                    (0, f.Z)({
                        nextStatus: l,
                        prevStatus: i,
                        analyticsContext: e
                    }),
                    (0, j.Z)({
                        text: a,
                        emojiInfo: n,
                        clearAfter: r,
                        analyticsContext: e
                    }),
                    t();
            }),
            T(this, 'handleKeyPress', (e) => {
                e.which === O.yXg.ENTER && this.handleSaveStatus();
            }),
            T(this, 'renderEmojiPicker', (e) => {
                let { closePopout: t } = e,
                    { onClose: n } = this.props;
                return (0, a.jsx)(m.Z, {
                    closePopout: t,
                    onSelectEmoji: (e, n) => {
                        this.handleEmojiChange(e), n && t();
                    },
                    pickerIntention: N.Hz.STATUS,
                    onNavigateAway: n
                });
            });
    }
}
let k = o.ZP.connectStores(
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
)(E);
