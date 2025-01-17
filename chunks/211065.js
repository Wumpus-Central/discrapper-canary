n.r(e), n(47120);
var a = n(200651),
    l = n(192379),
    s = n(512722),
    i = n.n(s),
    o = n(442837),
    r = n(481060),
    u = n(596454),
    d = n(410575),
    c = n(318766),
    m = n(907040),
    h = n(246133),
    p = n(695346),
    S = n(293273),
    f = n(594174),
    g = n(626135),
    C = n(51144),
    b = n(720449),
    j = n(684269),
    N = n(875425),
    T = n(981631),
    x = n(185923),
    _ = n(388032),
    v = n(58448);
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
function O(t) {
    return (0, a.jsxs)('div', {
        className: v.statusOptionItem,
        children: [
            (0, a.jsx)(r.Status, {
                status: t.value,
                size: 10,
                className: v.statusIcon
            }),
            t.label
        ]
    });
}
let I = [
    {
        key: 1,
        value: r.StatusTypes.ONLINE,
        label: (0, C.u5)(r.StatusTypes.ONLINE)
    },
    {
        key: 2,
        value: r.StatusTypes.IDLE,
        label: (0, C.u5)(r.StatusTypes.IDLE)
    },
    {
        key: 3,
        value: r.StatusTypes.DND,
        label: (0, C.u5)(r.StatusTypes.DND)
    },
    {
        key: 4,
        value: r.StatusTypes.INVISIBLE,
        label: (0, C.u5)(r.StatusTypes.INVISIBLE)
    }
];
class A extends l.PureComponent {
    componentDidMount() {
        let { sourceAnalyticsLocations: t, sourceAnalyticsContext: e } = this.props;
        g.default.track(T.rMx.OPEN_MODAL, {
            source: null == e ? void 0 : e.location,
            type: T.jXE.CUSTOM_STATUS_MODAL,
            load_id: null == e ? void 0 : e.loadId,
            location_stack: t
        });
    }
    get clearAfterOptions() {
        return [
            {
                key: 1,
                value: N.F.TODAY,
                label: _.intl.string(_.t.GQmLra)
            },
            {
                key: 2,
                value: N.F.HOURS_4,
                label: _.intl.formatToPlainString(_.t.Rea2gY, { hours: 4 })
            },
            {
                key: 3,
                value: N.F.HOURS_1,
                label: _.intl.formatToPlainString(_.t.Rea2gY, { hours: 1 })
            },
            {
                key: 4,
                value: N.F.MINUTES_30,
                label: _.intl.formatToPlainString(_.t.TS3eJS, { minutes: 30 })
            },
            {
                key: 5,
                value: N.F.DONT_CLEAR,
                label: _.intl.string(_.t.bRn8cn)
            }
        ];
    }
    get analyticsLocation() {
        return { page: T.ZY5.CUSTOM_STATUS_MODAL };
    }
    getEmojiButtonRenderer() {
        let { emojiInfo: t } = this.state;
        return null == t
            ? null
            : () =>
                  (0, a.jsx)(u.Z, {
                      className: v.emoji,
                      emojiId: t.id,
                      emojiName: t.name,
                      animated: !!t.animated
                  });
    }
    renderCustomStatusInput() {
        let { user: t } = this.props,
            { text: e, emojiInfo: n } = this.state;
        return (0, a.jsx)(r.FormSection, {
            className: v.formGroup,
            title: _.intl.formatToPlainString(_.t['/w9pHx'], { username: t.username }),
            children: (0, a.jsxs)('div', {
                className: v.inputContainer,
                children: [
                    (0, a.jsx)('div', {
                        className: v.emojiButtonContainer,
                        children: (0, a.jsx)(r.Popout, {
                            renderPopout: this.renderEmojiPicker,
                            position: 'left',
                            animation: r.Popout.Animation.NONE,
                            align: 'top',
                            children: (t, e) => {
                                let { isShown: n } = e;
                                return (0, a.jsx)(c.Z, {
                                    ...t,
                                    active: n,
                                    className: v.emojiButton,
                                    tabIndex: 0,
                                    renderButtonContents: this.getEmojiButtonRenderer()
                                });
                            }
                        })
                    }),
                    (0, a.jsx)(r.TextInput, {
                        maxLength: N.s,
                        value: e,
                        inputClassName: v.input,
                        placeholder: _.intl.string(_.t['zYR38/']),
                        onChange: this.handleStatusChange,
                        onKeyPress: this.handleKeyPress,
                        autoFocus: !0
                    }),
                    e.length > 0 || null != n
                        ? (0, a.jsx)(r.Button, {
                              focusProps: {
                                  offset: {
                                      top: 8,
                                      bottom: 8,
                                      left: -2,
                                      right: -2
                                  }
                              },
                              className: v.clearButton,
                              onClick: this.handleClearStatus,
                              look: r.Button.Looks.BLANK,
                              size: r.Button.Sizes.NONE,
                              children: (0, a.jsx)(r.CircleXIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: v.clearIcon
                              })
                          })
                        : null
                ]
            })
        });
    }
    renderClearAfter() {
        let { clearAfter: t } = this.state;
        return (0, a.jsx)(r.FormSection, {
            className: v.formGroup,
            title: _.intl.string(_.t.E45wvL),
            children: (0, a.jsx)(r.SingleSelect, {
                placeholder: _.intl.string(_.t.E45wvL),
                maxVisibleItems: 5,
                value: t,
                options: this.clearAfterOptions,
                onChange: this.handleChangeClearAfter
            })
        });
    }
    renderStatusInput() {
        let { status: t } = this.state;
        return (0, a.jsx)(r.FormSection, {
            className: v.formGroup,
            title: _.intl.string(_.t.zOdg0N),
            children: (0, a.jsx)(r.SingleSelect, {
                maxVisibleItems: 4,
                value: t,
                options: I,
                onChange: this.handleChangeStatus,
                renderOptionLabel: O
            })
        });
    }
    render() {
        let { transitionState: t, onClose: e } = this.props;
        return (0, a.jsx)(d.Z, {
            ...this.analyticsLocation,
            children: (0, a.jsxs)(r.ModalRoot, {
                transitionState: t,
                className: v.modalRoot,
                'aria-label': _.intl.string(_.t['/UonHB']),
                children: [
                    (0, a.jsxs)(r.ModalHeader, {
                        separator: !1,
                        className: v.headerContainer,
                        children: [
                            (0, a.jsx)('div', { className: v.art }),
                            (0, a.jsx)('div', {
                                className: v.header,
                                children: (0, a.jsx)(r.H, {
                                    className: v.headerText,
                                    children: _.intl.string(_.t['/UonHB'])
                                })
                            }),
                            (0, a.jsx)(r.ModalCloseButton, {
                                onClick: e,
                                className: v.modalCloseButton
                            })
                        ]
                    }),
                    (0, a.jsxs)(r.ModalContent, {
                        children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, a.jsx)(r.FormDivider, { className: v.formDivider }), this.renderStatusInput()]
                    }),
                    (0, a.jsxs)(r.ModalFooter, {
                        children: [
                            (0, a.jsx)(r.Button, {
                                onClick: this.handleSubmit,
                                children: _.intl.string(_.t.R3BPHx)
                            }),
                            (0, a.jsx)(r.Button, {
                                onClick: e,
                                look: r.Button.Looks.LINK,
                                color: v.cancelButton,
                                children: _.intl.string(_.t['ETE/oK'])
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
                clearAfter: (0, j.Z)(),
                status: (function () {
                    let t = p.co.getSetting();
                    return I.some((e) => e.value === t) ? t : r.StatusTypes.ONLINE;
                })()
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
                    { emojiInfo: n, text: a, clearAfter: l, status: s } = this.state,
                    i = p.co.getSetting();
                i !== s && (0, h.Z)(s, i, t), (0, b.Z)(a, n, l, t), e();
            }),
            D(this, 'handleKeyPress', (t) => {
                t.which === T.yXg.ENTER && this.handleSaveStatus();
            }),
            D(this, 'renderEmojiPicker', (t) => {
                let { closePopout: e } = t,
                    { onClose: n } = this.props;
                return (0, a.jsx)(m.Z, {
                    closePopout: e,
                    onSelectEmoji: (t, n) => {
                        this.handleEmojiChange(t), n && e();
                    },
                    pickerIntention: x.Hz.STATUS,
                    onNavigateAway: n
                });
            });
    }
}
e.default = o.ZP.connectStores(
    [S.Z, f.default],
    () => {
        let t = f.default.getCurrentUser();
        return (
            i()(null != t, 'CustomStatusModal: user cannot be null'),
            {
                customStatus: S.Z.getCustomStatusActivity(),
                user: t
            }
        );
    },
    { forwardRef: !0 }
)(A);
