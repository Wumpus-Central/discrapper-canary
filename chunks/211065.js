n.d(t, { Z: () => P }), n(47120);
var r = n(200651),
    a = n(192379),
    l = n(512722),
    i = n.n(l),
    o = n(442837),
    s = n(481060),
    u = n(596454),
    c = n(410575),
    d = n(318766),
    m = n(907040),
    f = n(246133),
    p = n(233200),
    h = n(695346),
    S = n(293273),
    b = n(594174),
    j = n(626135),
    g = n(720449),
    v = n(684269),
    x = n(678865),
    _ = n(875425),
    N = n(981631),
    O = n(185923),
    y = n(388032),
    C = n(888659);
function E(e, t, n) {
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
function I(e) {
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
                E(e, t, n[t]);
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
function T(e) {
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
class k extends a.PureComponent {
    componentDidMount() {
        let { sourceAnalyticsLocations: e, sourceAnalyticsContext: t } = this.props;
        j.default.track(N.rMx.OPEN_MODAL, {
            source: null == t ? void 0 : t.location,
            type: N.jXE.CUSTOM_STATUS_MODAL,
            load_id: null == t ? void 0 : t.loadId,
            location_stack: e
        });
    }
    get analyticsLocation() {
        return { page: N.ZY5.CUSTOM_STATUS_MODAL };
    }
    get canShowStatusSelector() {
        return !(0, p.A)({ location: 'CustomStatusModal' });
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
                                    w(I({}, e), {
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
                        maxLength: _.s0,
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
                maxVisibleItems: 5,
                value: e,
                options: _.wS.map((e) =>
                    w(I({}, e), {
                        value: e.value,
                        key: e.value,
                        label: e.label()
                    })
                ),
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
                options: _.Df.map((e) =>
                    w(I({}, e), {
                        value: e.value,
                        key: e.value,
                        label: e.label()
                    })
                ),
                onChange: this.handleChangeStatus,
                renderOptionLabel: T
            })
        });
    }
    render() {
        let { transitionState: e, onClose: t } = this.props;
        return (0, r.jsx)(
            c.Z,
            w(I({}, this.analyticsLocation), {
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
                            children: [
                                this.renderCustomStatusInput(),
                                this.renderClearAfter(),
                                this.canShowStatusSelector &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)(s.$i$, { className: C.formDivider }), this.renderStatusInput()]
                                    })
                            ]
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
            E(this, 'state', {
                emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
                text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : '',
                clearAfter: (0, v.Z)(),
                status: (0, x.Z)()
            }),
            E(this, 'handleClearStatus', () => {
                this.setState({
                    emojiInfo: null,
                    text: ''
                });
            }),
            E(this, 'handleSubmit', (e) => {
                e.preventDefault(), this.handleSaveStatus();
            }),
            E(this, 'handleStatusChange', (e) => {
                this.setState({ text: e });
            }),
            E(this, 'handleEmojiChange', (e) => {
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
            E(this, 'handleChangeClearAfter', (e) => {
                this.setState({ clearAfter: e });
            }),
            E(this, 'handleChangeStatus', (e) => {
                this.setState({ status: e });
            }),
            E(this, 'handleSaveStatus', () => {
                let { sourceAnalyticsContext: e, onClose: t } = this.props,
                    { emojiInfo: n, text: r, clearAfter: a, status: l } = this.state,
                    i = h.co.getSetting();
                i !== l && (0, f.Z)(l, i, e), (0, g.Z)(r, n, a, e), t();
            }),
            E(this, 'handleKeyPress', (e) => {
                e.which === N.yXg.ENTER && this.handleSaveStatus();
            }),
            E(this, 'renderEmojiPicker', (e) => {
                let { closePopout: t } = e,
                    { onClose: n } = this.props;
                return (0, r.jsx)(m.Z, {
                    closePopout: t,
                    onSelectEmoji: (e, n) => {
                        this.handleEmojiChange(e), n && t();
                    },
                    pickerIntention: O.Hz.STATUS,
                    onNavigateAway: n
                });
            });
    }
}
let P = o.ZP.connectStores(
    [S.Z, b.default],
    () => {
        let e = b.default.getCurrentUser();
        return (
            i()(null != e, 'CustomStatusModal: user cannot be null'),
            {
                customStatus: S.Z.getCustomStatusActivity(),
                user: e
            }
        );
    },
    { forwardRef: !0 }
)(k);
