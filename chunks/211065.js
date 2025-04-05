n.d(t, { Z: () => D }), n(388685);
var r = n(200651),
    a = n(192379),
    i = n(512722),
    o = n.n(i),
    l = n(442837),
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
    j = n(720449),
    g = n(684269),
    x = n(678865),
    O = n(745579),
    v = n(875425),
    _ = n(981631),
    N = n(185923),
    y = n(388032),
    C = n(403773);
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
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    return (0, r.jsxs)('div', {
        className: C.statusOptionItem,
        children: [
            (0, r.jsx)(s.qbd, {
                status: e.value,
                size: 10,
                className: C.statusIcon
            }),
            e.label
        ]
    });
}
class I extends a.PureComponent {
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
                  (0, r.jsx)(u.Z, {
                      className: C.emoji,
                      emojiId: e.id,
                      emojiName: e.name,
                      animated: !!e.animated
                  });
    }
    renderCustomStatusInput() {
        let { user: e } = this.props,
            { text: t, emojiInfo: n } = this.state;
        return (0, r.jsx)(s.hjN, {
            className: C.formGroup,
            title: y.NW.formatToPlainString(y.t['/w9pHx'], { username: e.username }),
            children: (0, r.jsxs)('div', {
                className: C.inputContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: C.emojiButtonContainer,
                        children: (0, r.jsx)(s.yRy, {
                            renderPopout: this.renderEmojiPicker,
                            position: 'left',
                            animation: s.yRy.Animation.NONE,
                            align: 'top',
                            children: (e, t) => {
                                let { isShown: n } = t;
                                return (0, r.jsx)(
                                    d.Z,
                                    w(P({}, e), {
                                        active: n,
                                        className: C.emojiButton,
                                        tabIndex: 0,
                                        renderButtonContents: this.getEmojiButtonRenderer()
                                    })
                                );
                            }
                        })
                    }),
                    (0, r.jsx)(s.oil, {
                        maxLength: v.s0,
                        value: t,
                        inputClassName: C.input,
                        placeholder: y.NW.string(y.t['zYR38/']),
                        onChange: this.handleStatusChange,
                        onKeyPress: this.handleKeyPress,
                        autoFocus: !0
                    }),
                    t.length > 0 || null != n
                        ? (0, r.jsx)(s.zxk, {
                              focusProps: {
                                  offset: {
                                      top: 8,
                                      bottom: 8,
                                      left: -2,
                                      right: -2
                                  }
                              },
                              className: C.clearButton,
                              onClick: this.handleClearStatus,
                              look: s.zxk.Looks.BLANK,
                              size: s.zxk.Sizes.NONE,
                              children: (0, r.jsx)(s.k$p, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: C.clearIcon
                              })
                          })
                        : null
                ]
            })
        });
    }
    renderClearAfter() {
        let { clearAfter: e } = this.state;
        return (0, r.jsx)(s.hjN, {
            className: C.formGroup,
            title: y.NW.string(y.t.E45wvL),
            children: (0, r.jsx)(s.q4e, {
                placeholder: y.NW.string(y.t.E45wvL),
                maxVisibleItems: v.wS.length,
                value: e,
                options: v.wS.map((e) => ({
                    value: e,
                    key: e,
                    label: (0, O.Z)(e)
                })),
                onChange: this.handleChangeClearAfter
            })
        });
    }
    renderStatusInput() {
        let { status: e } = this.state;
        return (0, r.jsx)(s.hjN, {
            className: C.formGroup,
            title: y.NW.string(y.t.zOdg0N),
            children: (0, r.jsx)(s.q4e, {
                maxVisibleItems: 4,
                value: e,
                options: v.Df.map((e) =>
                    w(P({}, e), {
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
        return (0, r.jsx)(
            c.Z,
            w(P({}, this.analyticsLocation), {
                children: (0, r.jsxs)(s.Y0X, {
                    transitionState: e,
                    className: C.modalRoot,
                    'aria-label': y.NW.string(y.t['/UonHB']),
                    children: [
                        (0, r.jsxs)(s.xBx, {
                            separator: !1,
                            className: C.headerContainer,
                            children: [
                                (0, r.jsx)('div', { className: C.art }),
                                (0, r.jsx)('div', {
                                    className: C.header,
                                    children: (0, r.jsx)(s.H, {
                                        className: C.headerText,
                                        children: y.NW.string(y.t['/UonHB'])
                                    })
                                }),
                                (0, r.jsx)(s.olH, {
                                    onClick: t,
                                    className: C.modalCloseButton
                                })
                            ]
                        }),
                        (0, r.jsxs)(s.hzk, {
                            children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, r.jsx)(s.$i$, { className: C.formDivider }), this.renderStatusInput()]
                        }),
                        (0, r.jsxs)(s.mzw, {
                            children: [
                                (0, r.jsx)(s.zxk, {
                                    onClick: this.handleSubmit,
                                    children: y.NW.string(y.t.R3BPHx)
                                }),
                                (0, r.jsx)(s.zxk, {
                                    onClick: t,
                                    look: s.zxk.Looks.LINK,
                                    color: C.cancelButton,
                                    children: y.NW.string(y.t['ETE/oK'])
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
                    { emojiInfo: n, text: r, clearAfter: a, status: i } = this.state,
                    o = p.co.getSetting();
                o !== i &&
                    (0, f.Z)({
                        nextStatus: i,
                        prevStatus: o,
                        analyticsContext: e
                    }),
                    (0, j.Z)({
                        text: r,
                        emojiInfo: n,
                        clearAfter: a,
                        analyticsContext: e
                    }),
                    t();
            }),
            T(this, 'handleKeyPress', (e) => {
                e.which === _.yXg.ENTER && this.handleSaveStatus();
            }),
            T(this, 'renderEmojiPicker', (e) => {
                let { closePopout: t } = e,
                    { onClose: n } = this.props;
                return (0, r.jsx)(m.Z, {
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
let D = l.ZP.connectStores(
    [h.Z, b.default],
    () => {
        let e = b.default.getCurrentUser();
        return (
            o()(null != e, 'CustomStatusModal: user cannot be null'),
            {
                customStatus: h.Z.getCustomStatusActivity(),
                user: e
            }
        );
    },
    { forwardRef: !0 }
)(I);
