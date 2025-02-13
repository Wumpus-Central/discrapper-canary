n.d(t, { Z: () => D }), n(47120);
var l = n(200651),
    a = n(192379),
    i = n(512722),
    s = n.n(i),
    o = n(442837),
    r = n(481060),
    u = n(596454),
    c = n(410575),
    d = n(318766),
    m = n(907040),
    h = n(246133),
    f = n(233200),
    p = n(695346),
    S = n(293273),
    x = n(594174),
    _ = n(626135),
    v = n(720449),
    j = n(684269),
    g = n(678865),
    b = n(875425),
    N = n(981631),
    C = n(185923),
    I = n(388032),
    T = n(154424);
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
function O(e) {
    return (0, l.jsxs)('div', {
        className: T.statusOptionItem,
        children: [
            (0, l.jsx)(r.qbd, {
                status: e.value,
                size: 10,
                className: T.statusIcon
            }),
            e.label
        ]
    });
}
class k extends a.PureComponent {
    componentDidMount() {
        let { sourceAnalyticsLocations: e, sourceAnalyticsContext: t } = this.props;
        _.default.track(N.rMx.OPEN_MODAL, {
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
        return !(0, f.A)({ location: 'CustomStatusModal' });
    }
    getEmojiButtonRenderer() {
        let { emojiInfo: e } = this.state;
        return null == e
            ? null
            : () =>
                  (0, l.jsx)(u.Z, {
                      className: T.emoji,
                      emojiId: e.id,
                      emojiName: e.name,
                      animated: !!e.animated
                  });
    }
    renderCustomStatusInput() {
        let { user: e } = this.props,
            { text: t, emojiInfo: n } = this.state;
        return (0, l.jsx)(r.hjN, {
            className: T.formGroup,
            title: I.intl.formatToPlainString(I.t['/w9pHx'], { username: e.username }),
            children: (0, l.jsxs)('div', {
                className: T.inputContainer,
                children: [
                    (0, l.jsx)('div', {
                        className: T.emojiButtonContainer,
                        children: (0, l.jsx)(r.yRy, {
                            renderPopout: this.renderEmojiPicker,
                            position: 'left',
                            animation: r.yRy.Animation.NONE,
                            align: 'top',
                            children: (e, t) => {
                                let { isShown: n } = t;
                                return (0, l.jsx)(d.Z, {
                                    ...e,
                                    active: n,
                                    className: T.emojiButton,
                                    tabIndex: 0,
                                    renderButtonContents: this.getEmojiButtonRenderer()
                                });
                            }
                        })
                    }),
                    (0, l.jsx)(r.oil, {
                        maxLength: b.s0,
                        value: t,
                        inputClassName: T.input,
                        placeholder: I.intl.string(I.t['zYR38/']),
                        onChange: this.handleStatusChange,
                        onKeyPress: this.handleKeyPress,
                        autoFocus: !0
                    }),
                    t.length > 0 || null != n
                        ? (0, l.jsx)(r.zxk, {
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
                              look: r.zxk.Looks.BLANK,
                              size: r.zxk.Sizes.NONE,
                              children: (0, l.jsx)(r.k$p, {
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
        let { clearAfter: e } = this.state;
        return (0, l.jsx)(r.hjN, {
            className: T.formGroup,
            title: I.intl.string(I.t.E45wvL),
            children: (0, l.jsx)(r.q4e, {
                placeholder: I.intl.string(I.t.E45wvL),
                maxVisibleItems: 5,
                value: e,
                options: b.wS.map((e) => ({
                    ...e,
                    value: e.value,
                    key: e.value,
                    label: e.label()
                })),
                onChange: this.handleChangeClearAfter
            })
        });
    }
    renderStatusInput() {
        let { status: e } = this.state;
        return (0, l.jsx)(r.hjN, {
            className: T.formGroup,
            title: I.intl.string(I.t.zOdg0N),
            children: (0, l.jsx)(r.q4e, {
                maxVisibleItems: 4,
                value: e,
                options: b.Df.map((e) => ({
                    ...e,
                    value: e.value,
                    key: e.value,
                    label: e.label()
                })),
                onChange: this.handleChangeStatus,
                renderOptionLabel: O
            })
        });
    }
    render() {
        let { transitionState: e, onClose: t } = this.props;
        return (0, l.jsx)(c.Z, {
            ...this.analyticsLocation,
            children: (0, l.jsxs)(r.Y0X, {
                transitionState: e,
                className: T.modalRoot,
                'aria-label': I.intl.string(I.t['/UonHB']),
                children: [
                    (0, l.jsxs)(r.xBx, {
                        separator: !1,
                        className: T.headerContainer,
                        children: [
                            (0, l.jsx)('div', { className: T.art }),
                            (0, l.jsx)('div', {
                                className: T.header,
                                children: (0, l.jsx)(r.H, {
                                    className: T.headerText,
                                    children: I.intl.string(I.t['/UonHB'])
                                })
                            }),
                            (0, l.jsx)(r.olH, {
                                onClick: t,
                                className: T.modalCloseButton
                            })
                        ]
                    }),
                    (0, l.jsxs)(r.hzk, {
                        children: [
                            this.renderCustomStatusInput(),
                            this.renderClearAfter(),
                            this.canShowStatusSelector &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)(r.$i$, { className: T.formDivider }), this.renderStatusInput()]
                                })
                        ]
                    }),
                    (0, l.jsxs)(r.mzw, {
                        children: [
                            (0, l.jsx)(r.zxk, {
                                onClick: this.handleSubmit,
                                children: I.intl.string(I.t.R3BPHx)
                            }),
                            (0, l.jsx)(r.zxk, {
                                onClick: t,
                                look: r.zxk.Looks.LINK,
                                color: T.cancelButton,
                                children: I.intl.string(I.t['ETE/oK'])
                            })
                        ]
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'state', {
                emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
                text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : '',
                clearAfter: (0, j.Z)(),
                status: (0, g.Z)()
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
                    { emojiInfo: n, text: l, clearAfter: a, status: i } = this.state,
                    s = p.co.getSetting();
                s !== i && (0, h.Z)(i, s, e), (0, v.Z)(l, n, a, e), t();
            }),
            E(this, 'handleKeyPress', (e) => {
                e.which === N.yXg.ENTER && this.handleSaveStatus();
            }),
            E(this, 'renderEmojiPicker', (e) => {
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
let D = o.ZP.connectStores(
    [S.Z, x.default],
    () => {
        let e = x.default.getCurrentUser();
        return (
            s()(null != e, 'CustomStatusModal: user cannot be null'),
            {
                customStatus: S.Z.getCustomStatusActivity(),
                user: e
            }
        );
    },
    { forwardRef: !0 }
)(k);
