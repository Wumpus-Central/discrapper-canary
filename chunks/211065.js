n.d(t, { Z: () => E }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(512722),
    i = n.n(a),
    o = n(442837),
    s = n(481060),
    u = n(596454),
    c = n(410575),
    d = n(318766),
    p = n(907040),
    m = n(246133),
    h = n(695346),
    f = n(293273),
    b = n(594174),
    j = n(626135),
    x = n(720449),
    S = n(684269),
    g = n(678865),
    v = n(875425),
    O = n(981631),
    _ = n(185923),
    y = n(388032),
    N = n(403773);
function C(e, t, n) {
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
function w(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function I(e) {
    return (0, r.jsxs)('div', {
        className: N.statusOptionItem,
        children: [
            (0, r.jsx)(s.qbd, {
                status: e.value,
                size: 10,
                className: N.statusIcon
            }),
            e.label
        ]
    });
}
class k extends l.PureComponent {
    componentDidMount() {
        let { sourceAnalyticsLocations: e, sourceAnalyticsContext: t } = this.props;
        j.default.track(O.rMx.OPEN_MODAL, {
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
                  (0, r.jsx)(u.Z, {
                      className: N.emoji,
                      emojiId: e.id,
                      emojiName: e.name,
                      animated: !!e.animated
                  });
    }
    renderCustomStatusInput() {
        let { user: e } = this.props,
            { text: t, emojiInfo: n } = this.state;
        return (0, r.jsx)(s.hjN, {
            className: N.formGroup,
            title: y.NW.formatToPlainString(y.t['/w9pHx'], { username: e.username }),
            children: (0, r.jsxs)('div', {
                className: N.inputContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: N.emojiButtonContainer,
                        children: (0, r.jsx)(s.yRy, {
                            renderPopout: this.renderEmojiPicker,
                            position: 'left',
                            animation: s.yRy.Animation.NONE,
                            align: 'top',
                            children: (e, t) => {
                                let { isShown: n } = t;
                                return (0, r.jsx)(
                                    d.Z,
                                    P(w({}, e), {
                                        active: n,
                                        className: N.emojiButton,
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
                        inputClassName: N.input,
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
                              className: N.clearButton,
                              onClick: this.handleClearStatus,
                              look: s.zxk.Looks.BLANK,
                              size: s.zxk.Sizes.NONE,
                              children: (0, r.jsx)(s.k$p, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: N.clearIcon
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
            className: N.formGroup,
            title: y.NW.string(y.t.E45wvL),
            children: (0, r.jsx)(s.q4e, {
                placeholder: y.NW.string(y.t.E45wvL),
                maxVisibleItems: 5,
                value: e,
                options: v.wS.map((e) =>
                    P(w({}, e), {
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
            className: N.formGroup,
            title: y.NW.string(y.t.zOdg0N),
            children: (0, r.jsx)(s.q4e, {
                maxVisibleItems: 4,
                value: e,
                options: v.Df.map((e) =>
                    P(w({}, e), {
                        value: e.value,
                        key: e.value,
                        label: e.label()
                    })
                ),
                onChange: this.handleChangeStatus,
                renderOptionLabel: I
            })
        });
    }
    render() {
        let { transitionState: e, onClose: t } = this.props;
        return (0, r.jsx)(
            c.Z,
            P(w({}, this.analyticsLocation), {
                children: (0, r.jsxs)(s.Y0X, {
                    transitionState: e,
                    className: N.modalRoot,
                    'aria-label': y.NW.string(y.t['/UonHB']),
                    children: [
                        (0, r.jsxs)(s.xBx, {
                            separator: !1,
                            className: N.headerContainer,
                            children: [
                                (0, r.jsx)('div', { className: N.art }),
                                (0, r.jsx)('div', {
                                    className: N.header,
                                    children: (0, r.jsx)(s.H, {
                                        className: N.headerText,
                                        children: y.NW.string(y.t['/UonHB'])
                                    })
                                }),
                                (0, r.jsx)(s.olH, {
                                    onClick: t,
                                    className: N.modalCloseButton
                                })
                            ]
                        }),
                        (0, r.jsxs)(s.hzk, {
                            children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, r.jsx)(s.$i$, { className: N.formDivider }), this.renderStatusInput()]
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
                                    color: N.cancelButton,
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
            C(this, 'state', {
                emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
                text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : '',
                clearAfter: (0, S.Z)(),
                status: (0, g.Z)()
            }),
            C(this, 'handleClearStatus', () => {
                this.setState({
                    emojiInfo: null,
                    text: ''
                });
            }),
            C(this, 'handleSubmit', (e) => {
                e.preventDefault(), this.handleSaveStatus();
            }),
            C(this, 'handleStatusChange', (e) => {
                this.setState({ text: e });
            }),
            C(this, 'handleEmojiChange', (e) => {
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
            C(this, 'handleChangeClearAfter', (e) => {
                this.setState({ clearAfter: e });
            }),
            C(this, 'handleChangeStatus', (e) => {
                this.setState({ status: e });
            }),
            C(this, 'handleSaveStatus', () => {
                let { sourceAnalyticsContext: e, onClose: t } = this.props,
                    { emojiInfo: n, text: r, clearAfter: l, status: a } = this.state,
                    i = h.co.getSetting();
                i !== a &&
                    (0, m.Z)({
                        nextStatus: a,
                        prevStatus: i,
                        analyticsContext: e
                    }),
                    (0, x.Z)({
                        text: r,
                        emojiInfo: n,
                        clearAfter: l,
                        analyticsContext: e
                    }),
                    t();
            }),
            C(this, 'handleKeyPress', (e) => {
                e.which === O.yXg.ENTER && this.handleSaveStatus();
            }),
            C(this, 'renderEmojiPicker', (e) => {
                let { closePopout: t } = e,
                    { onClose: n } = this.props;
                return (0, r.jsx)(p.Z, {
                    closePopout: t,
                    onSelectEmoji: (e, n) => {
                        this.handleEmojiChange(e), n && t();
                    },
                    pickerIntention: _.Hz.STATUS,
                    onNavigateAway: n
                });
            });
    }
}
let E = o.ZP.connectStores(
    [f.Z, b.default],
    () => {
        let e = b.default.getCurrentUser();
        return (
            i()(null != e, 'CustomStatusModal: user cannot be null'),
            {
                customStatus: f.Z.getCustomStatusActivity(),
                user: e
            }
        );
    },
    { forwardRef: !0 }
)(k);
