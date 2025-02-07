n.d(e, { Z: () => E }), n(47120);
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
    S = n(695346),
    f = n(293273),
    p = n(594174),
    g = n(626135),
    b = n(720449),
    _ = n(684269),
    j = n(691258),
    v = n(875425),
    x = n(981631),
    N = n(185923),
    C = n(388032),
    O = n(58448);
function D(t, e, n) {
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
function T(t) {
    return (0, a.jsxs)('div', {
        className: O.statusOptionItem,
        children: [
            (0, a.jsx)(r.qbd, {
                status: t.value,
                size: 10,
                className: O.statusIcon
            }),
            t.label
        ]
    });
}
class k extends l.PureComponent {
    componentDidMount() {
        let { sourceAnalyticsLocations: t, sourceAnalyticsContext: e } = this.props;
        g.default.track(x.rMx.OPEN_MODAL, {
            source: null == e ? void 0 : e.location,
            type: x.jXE.CUSTOM_STATUS_MODAL,
            load_id: null == e ? void 0 : e.loadId,
            location_stack: t
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
                  (0, a.jsx)(u.Z, {
                      className: O.emoji,
                      emojiId: t.id,
                      emojiName: t.name,
                      animated: !!t.animated
                  });
    }
    renderCustomStatusInput() {
        let { user: t } = this.props,
            { text: e, emojiInfo: n } = this.state;
        return (0, a.jsx)(r.hjN, {
            className: O.formGroup,
            title: C.intl.formatToPlainString(C.t['/w9pHx'], { username: t.username }),
            children: (0, a.jsxs)('div', {
                className: O.inputContainer,
                children: [
                    (0, a.jsx)('div', {
                        className: O.emojiButtonContainer,
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
                                    className: O.emojiButton,
                                    tabIndex: 0,
                                    renderButtonContents: this.getEmojiButtonRenderer()
                                });
                            }
                        })
                    }),
                    (0, a.jsx)(r.oil, {
                        maxLength: v.s0,
                        value: e,
                        inputClassName: O.input,
                        placeholder: C.intl.string(C.t['zYR38/']),
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
                              className: O.clearButton,
                              onClick: this.handleClearStatus,
                              look: r.zxk.Looks.BLANK,
                              size: r.zxk.Sizes.NONE,
                              children: (0, a.jsx)(r.k$p, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: O.clearIcon
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
            className: O.formGroup,
            title: C.intl.string(C.t.E45wvL),
            children: (0, a.jsx)(r.q4e, {
                placeholder: C.intl.string(C.t.E45wvL),
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
            className: O.formGroup,
            title: C.intl.string(C.t.zOdg0N),
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
                renderOptionLabel: T
            })
        });
    }
    render() {
        let { transitionState: t, onClose: e } = this.props;
        return (0, a.jsx)(d.Z, {
            ...this.analyticsLocation,
            children: (0, a.jsxs)(r.Y0X, {
                transitionState: t,
                className: O.modalRoot,
                'aria-label': C.intl.string(C.t['/UonHB']),
                children: [
                    (0, a.jsxs)(r.xBx, {
                        separator: !1,
                        className: O.headerContainer,
                        children: [
                            (0, a.jsx)('div', { className: O.art }),
                            (0, a.jsx)('div', {
                                className: O.header,
                                children: (0, a.jsx)(r.H, {
                                    className: O.headerText,
                                    children: C.intl.string(C.t['/UonHB'])
                                })
                            }),
                            (0, a.jsx)(r.olH, {
                                onClick: e,
                                className: O.modalCloseButton
                            })
                        ]
                    }),
                    (0, a.jsxs)(r.hzk, {
                        children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, a.jsx)(r.$i$, { className: O.formDivider }), this.renderStatusInput()]
                    }),
                    (0, a.jsxs)(r.mzw, {
                        children: [
                            (0, a.jsx)(r.zxk, {
                                onClick: this.handleSubmit,
                                children: C.intl.string(C.t.R3BPHx)
                            }),
                            (0, a.jsx)(r.zxk, {
                                onClick: e,
                                look: r.zxk.Looks.LINK,
                                color: O.cancelButton,
                                children: C.intl.string(C.t['ETE/oK'])
                            })
                        ]
                    })
                ]
            })
        });
    }
    constructor(...t) {
        super(...t),
            D(this, 'state', {
                emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
                text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : '',
                clearAfter: (0, _.Z)(),
                status: (0, j.Z)()
            }),
            D(this, 'handleClearStatus', () => {
                this.setState({
                    emojiInfo: null,
                    text: ''
                });
            }),
            D(this, 'handleSubmit', (t) => {
                t.preventDefault(), this.handleSaveStatus();
            }),
            D(this, 'handleStatusChange', (t) => {
                this.setState({ text: t });
            }),
            D(this, 'handleEmojiChange', (t) => {
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
            D(this, 'handleChangeClearAfter', (t) => {
                this.setState({ clearAfter: t });
            }),
            D(this, 'handleChangeStatus', (t) => {
                this.setState({ status: t });
            }),
            D(this, 'handleSaveStatus', () => {
                let { sourceAnalyticsContext: t, onClose: e } = this.props,
                    { emojiInfo: n, text: a, clearAfter: l, status: i } = this.state,
                    s = S.co.getSetting();
                s !== i && (0, m.Z)(i, s, t), (0, b.Z)(a, n, l, t), e();
            }),
            D(this, 'handleKeyPress', (t) => {
                t.which === x.yXg.ENTER && this.handleSaveStatus();
            }),
            D(this, 'renderEmojiPicker', (t) => {
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
let E = o.ZP.connectStores(
    [f.Z, p.default],
    () => {
        let t = p.default.getCurrentUser();
        return (
            s()(null != t, 'CustomStatusModal: user cannot be null'),
            {
                customStatus: f.Z.getCustomStatusActivity(),
                user: t
            }
        );
    },
    { forwardRef: !0 }
)(k);
