n.d(e, { Z: () => I }), n(47120);
var a = n(200651),
    l = n(192379),
    i = n(512722),
    s = n.n(i),
    o = n(442837),
    r = n(481060),
    u = n(596454),
    d = n(410575),
    c = n(318766),
    h = n(907040),
    m = n(246133),
    S = n(233200),
    f = n(695346),
    g = n(293273),
    p = n(594174),
    b = n(626135),
    _ = n(720449),
    j = n(684269),
    C = n(691258),
    v = n(875425),
    x = n(981631),
    N = n(185923),
    O = n(388032),
    D = n(948476);
function T(t, e, n) {
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
function k(t) {
    return (0, a.jsxs)('div', {
        className: D.statusOptionItem,
        children: [
            (0, a.jsx)(r.qbd, {
                status: t.value,
                size: 10,
                className: D.statusIcon
            }),
            t.label
        ]
    });
}
class E extends l.PureComponent {
    componentDidMount() {
        let { sourceAnalyticsLocations: t, sourceAnalyticsContext: e } = this.props;
        b.default.track(x.rMx.OPEN_MODAL, {
            source: null == e ? void 0 : e.location,
            type: x.jXE.CUSTOM_STATUS_MODAL,
            load_id: null == e ? void 0 : e.loadId,
            location_stack: t
        });
    }
    get analyticsLocation() {
        return { page: x.ZY5.CUSTOM_STATUS_MODAL };
    }
    get canShowStatusSelector() {
        return !(0, S.A)({ location: 'CustomStatusModal' });
    }
    getEmojiButtonRenderer() {
        let { emojiInfo: t } = this.state;
        return null == t
            ? null
            : () =>
                  (0, a.jsx)(u.Z, {
                      className: D.emoji,
                      emojiId: t.id,
                      emojiName: t.name,
                      animated: !!t.animated
                  });
    }
    renderCustomStatusInput() {
        let { user: t } = this.props,
            { text: e, emojiInfo: n } = this.state;
        return (0, a.jsx)(r.hjN, {
            className: D.formGroup,
            title: O.intl.formatToPlainString(O.t['/w9pHx'], { username: t.username }),
            children: (0, a.jsxs)('div', {
                className: D.inputContainer,
                children: [
                    (0, a.jsx)('div', {
                        className: D.emojiButtonContainer,
                        children: (0, a.jsx)(r.yRy, {
                            renderPopout: this.renderEmojiPicker,
                            position: 'left',
                            animation: r.yRy.Animation.NONE,
                            align: 'top',
                            children: (t, e) => {
                                let { isShown: n } = e;
                                return (0, a.jsx)(c.Z, {
                                    ...t,
                                    active: n,
                                    className: D.emojiButton,
                                    tabIndex: 0,
                                    renderButtonContents: this.getEmojiButtonRenderer()
                                });
                            }
                        })
                    }),
                    (0, a.jsx)(r.oil, {
                        maxLength: v.s0,
                        value: e,
                        inputClassName: D.input,
                        placeholder: O.intl.string(O.t['zYR38/']),
                        onChange: this.handleStatusChange,
                        onKeyPress: this.handleKeyPress,
                        autoFocus: !0
                    }),
                    e.length > 0 || null != n
                        ? (0, a.jsx)(r.zxk, {
                              focusProps: {
                                  offset: {
                                      top: 8,
                                      bottom: 8,
                                      left: -2,
                                      right: -2
                                  }
                              },
                              className: D.clearButton,
                              onClick: this.handleClearStatus,
                              look: r.zxk.Looks.BLANK,
                              size: r.zxk.Sizes.NONE,
                              children: (0, a.jsx)(r.k$p, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: D.clearIcon
                              })
                          })
                        : null
                ]
            })
        });
    }
    renderClearAfter() {
        let { clearAfter: t } = this.state;
        return (0, a.jsx)(r.hjN, {
            className: D.formGroup,
            title: O.intl.string(O.t.E45wvL),
            children: (0, a.jsx)(r.q4e, {
                placeholder: O.intl.string(O.t.E45wvL),
                maxVisibleItems: 5,
                value: t,
                options: v.wS.map((t) => ({
                    ...t,
                    value: t.value,
                    key: t.value,
                    label: t.label()
                })),
                onChange: this.handleChangeClearAfter
            })
        });
    }
    renderStatusInput() {
        let { status: t } = this.state;
        return (0, a.jsx)(r.hjN, {
            className: D.formGroup,
            title: O.intl.string(O.t.zOdg0N),
            children: (0, a.jsx)(r.q4e, {
                maxVisibleItems: 4,
                value: t,
                options: v.Df.map((t) => ({
                    ...t,
                    value: t.value,
                    key: t.value,
                    label: t.label()
                })),
                onChange: this.handleChangeStatus,
                renderOptionLabel: k
            })
        });
    }
    render() {
        let { transitionState: t, onClose: e } = this.props;
        return (0, a.jsx)(d.Z, {
            ...this.analyticsLocation,
            children: (0, a.jsxs)(r.Y0X, {
                transitionState: t,
                className: D.modalRoot,
                'aria-label': O.intl.string(O.t['/UonHB']),
                children: [
                    (0, a.jsxs)(r.xBx, {
                        separator: !1,
                        className: D.headerContainer,
                        children: [
                            (0, a.jsx)('div', { className: D.art }),
                            (0, a.jsx)('div', {
                                className: D.header,
                                children: (0, a.jsx)(r.H, {
                                    className: D.headerText,
                                    children: O.intl.string(O.t['/UonHB'])
                                })
                            }),
                            (0, a.jsx)(r.olH, {
                                onClick: e,
                                className: D.modalCloseButton
                            })
                        ]
                    }),
                    (0, a.jsxs)(r.hzk, {
                        children: [
                            this.renderCustomStatusInput(),
                            this.renderClearAfter(),
                            this.canShowStatusSelector &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(r.$i$, { className: D.formDivider }), this.renderStatusInput()]
                                })
                        ]
                    }),
                    (0, a.jsxs)(r.mzw, {
                        children: [
                            (0, a.jsx)(r.zxk, {
                                onClick: this.handleSubmit,
                                children: O.intl.string(O.t.R3BPHx)
                            }),
                            (0, a.jsx)(r.zxk, {
                                onClick: e,
                                look: r.zxk.Looks.LINK,
                                color: D.cancelButton,
                                children: O.intl.string(O.t['ETE/oK'])
                            })
                        ]
                    })
                ]
            })
        });
    }
    constructor(...t) {
        super(...t),
            T(this, 'state', {
                emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
                text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : '',
                clearAfter: (0, j.Z)(),
                status: (0, C.Z)()
            }),
            T(this, 'handleClearStatus', () => {
                this.setState({
                    emojiInfo: null,
                    text: ''
                });
            }),
            T(this, 'handleSubmit', (t) => {
                t.preventDefault(), this.handleSaveStatus();
            }),
            T(this, 'handleStatusChange', (t) => {
                this.setState({ text: t });
            }),
            T(this, 'handleEmojiChange', (t) => {
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
            T(this, 'handleChangeClearAfter', (t) => {
                this.setState({ clearAfter: t });
            }),
            T(this, 'handleChangeStatus', (t) => {
                this.setState({ status: t });
            }),
            T(this, 'handleSaveStatus', () => {
                let { sourceAnalyticsContext: t, onClose: e } = this.props,
                    { emojiInfo: n, text: a, clearAfter: l, status: i } = this.state,
                    s = f.co.getSetting();
                s !== i && (0, m.Z)(i, s, t), (0, _.Z)(a, n, l, t), e();
            }),
            T(this, 'handleKeyPress', (t) => {
                t.which === x.yXg.ENTER && this.handleSaveStatus();
            }),
            T(this, 'renderEmojiPicker', (t) => {
                let { closePopout: e } = t,
                    { onClose: n } = this.props;
                return (0, a.jsx)(h.Z, {
                    closePopout: e,
                    onSelectEmoji: (t, n) => {
                        this.handleEmojiChange(t), n && e();
                    },
                    pickerIntention: N.Hz.STATUS,
                    onNavigateAway: n
                });
            });
    }
}
let I = o.ZP.connectStores(
    [g.Z, p.default],
    () => {
        let t = p.default.getCurrentUser();
        return (
            s()(null != t, 'CustomStatusModal: user cannot be null'),
            {
                customStatus: g.Z.getCustomStatusActivity(),
                user: t
            }
        );
    },
    { forwardRef: !0 }
)(E);
