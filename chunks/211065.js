n.r(e), n(47120);
var a = n(200651),
    s = n(192379),
    l = n(512722),
    i = n.n(l),
    o = n(442837),
    r = n(481060),
    u = n(596454),
    d = n(410575),
    c = n(318766),
    m = n(907040),
    h = n(246133),
    p = n(695346),
    S = n(293273),
    g = n(594174),
    f = n(626135),
    j = n(51144),
    C = n(720449),
    N = n(684269),
    b = n(875425),
    T = n(981631),
    x = n(185923),
    v = n(388032),
    _ = n(58448);
function O(t, e, n) {
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
function D(t) {
    return (0, a.jsxs)('div', {
        className: _.statusOptionItem,
        children: [
            (0, a.jsx)(r.Status, {
                status: t.value,
                size: 10,
                className: _.statusIcon
            }),
            t.label
        ]
    });
}
let I = [
    {
        key: 1,
        value: r.StatusTypes.ONLINE,
        label: (0, j.u5)(r.StatusTypes.ONLINE)
    },
    {
        key: 2,
        value: r.StatusTypes.IDLE,
        label: (0, j.u5)(r.StatusTypes.IDLE)
    },
    {
        key: 3,
        value: r.StatusTypes.DND,
        label: (0, j.u5)(r.StatusTypes.DND)
    },
    {
        key: 4,
        value: r.StatusTypes.INVISIBLE,
        label: (0, j.u5)(r.StatusTypes.INVISIBLE)
    }
];
class A extends s.PureComponent {
    componentDidMount() {
        let { sourceAnalyticsLocations: t, sourceAnalyticsContext: e } = this.props;
        f.default.track(T.rMx.OPEN_MODAL, {
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
                value: b.F.TODAY,
                label: v.intl.string(v.t.GQmLra)
            },
            {
                key: 2,
                value: b.F.HOURS_4,
                label: v.intl.formatToPlainString(v.t.Rea2gY, { hours: 4 })
            },
            {
                key: 3,
                value: b.F.HOURS_1,
                label: v.intl.formatToPlainString(v.t.Rea2gY, { hours: 1 })
            },
            {
                key: 4,
                value: b.F.MINUTES_30,
                label: v.intl.formatToPlainString(v.t.TS3eJS, { minutes: 30 })
            },
            {
                key: 5,
                value: b.F.DONT_CLEAR,
                label: v.intl.string(v.t.bRn8cn)
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
                      className: _.emoji,
                      emojiId: t.id,
                      emojiName: t.name,
                      animated: !!t.animated
                  });
    }
    renderCustomStatusInput() {
        let { user: t } = this.props,
            { text: e, emojiInfo: n } = this.state;
        return (0, a.jsx)(r.FormSection, {
            className: _.formGroup,
            title: v.intl.formatToPlainString(v.t['/w9pHx'], { username: t.username }),
            children: (0, a.jsxs)('div', {
                className: _.inputContainer,
                children: [
                    (0, a.jsx)('div', {
                        className: _.emojiButtonContainer,
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
                                    className: _.emojiButton,
                                    tabIndex: 0,
                                    renderButtonContents: this.getEmojiButtonRenderer()
                                });
                            }
                        })
                    }),
                    (0, a.jsx)(r.TextInput, {
                        maxLength: b.s,
                        value: e,
                        inputClassName: _.input,
                        placeholder: v.intl.string(v.t['zYR38/']),
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
                              className: _.clearButton,
                              onClick: this.handleClearStatus,
                              look: r.Button.Looks.BLANK,
                              size: r.Button.Sizes.NONE,
                              children: (0, a.jsx)(r.CircleXIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: _.clearIcon
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
            className: _.formGroup,
            title: v.intl.string(v.t.E45wvL),
            children: (0, a.jsx)(r.SingleSelect, {
                placeholder: v.intl.string(v.t.E45wvL),
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
            className: _.formGroup,
            title: v.intl.string(v.t.zOdg0N),
            children: (0, a.jsx)(r.SingleSelect, {
                maxVisibleItems: 4,
                value: t,
                options: I,
                onChange: this.handleChangeStatus,
                renderOptionLabel: D
            })
        });
    }
    render() {
        let { transitionState: t, onClose: e } = this.props;
        return (0, a.jsx)(d.Z, {
            ...this.analyticsLocation,
            children: (0, a.jsxs)(r.ModalRoot, {
                transitionState: t,
                className: _.modalRoot,
                'aria-label': v.intl.string(v.t['/UonHB']),
                children: [
                    (0, a.jsxs)(r.ModalHeader, {
                        separator: !1,
                        className: _.headerContainer,
                        children: [
                            (0, a.jsx)('div', { className: _.art }),
                            (0, a.jsx)('div', {
                                className: _.header,
                                children: (0, a.jsx)(r.H, {
                                    className: _.headerText,
                                    children: v.intl.string(v.t['/UonHB'])
                                })
                            }),
                            (0, a.jsx)(r.ModalCloseButton, {
                                onClick: e,
                                className: _.modalCloseButton
                            })
                        ]
                    }),
                    (0, a.jsxs)(r.ModalContent, {
                        children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, a.jsx)(r.FormDivider, { className: _.formDivider }), this.renderStatusInput()]
                    }),
                    (0, a.jsxs)(r.ModalFooter, {
                        children: [
                            (0, a.jsx)(r.Button, {
                                onClick: this.handleSubmit,
                                children: v.intl.string(v.t.R3BPHx)
                            }),
                            (0, a.jsx)(r.Button, {
                                onClick: e,
                                look: r.Button.Looks.LINK,
                                color: _.cancelButton,
                                children: v.intl.string(v.t['ETE/oK'])
                            })
                        ]
                    })
                ]
            })
        });
    }
    constructor(...t) {
        super(...t),
            O(this, 'state', {
                emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
                text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : '',
                clearAfter: (0, N.Z)(),
                status: (function () {
                    let t = p.co.getSetting();
                    return I.some((e) => e.value === t) ? t : r.StatusTypes.ONLINE;
                })()
            }),
            O(this, 'handleClearStatus', () => {
                this.setState({
                    emojiInfo: null,
                    text: ''
                });
            }),
            O(this, 'handleSubmit', (t) => {
                t.preventDefault(), this.handleSaveStatus();
            }),
            O(this, 'handleStatusChange', (t) => {
                this.setState({ text: t });
            }),
            O(this, 'handleEmojiChange', (t) => {
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
            O(this, 'handleChangeClearAfter', (t) => {
                this.setState({ clearAfter: t });
            }),
            O(this, 'handleChangeStatus', (t) => {
                this.setState({ status: t });
            }),
            O(this, 'handleSaveStatus', () => {
                let { sourceAnalyticsContext: t, onClose: e } = this.props,
                    { emojiInfo: n, text: a, clearAfter: s, status: l } = this.state,
                    i = p.co.getSetting();
                i !== l && (0, h.Z)(l, i, t), (0, C.Z)(a, n, s, t), e();
            }),
            O(this, 'handleKeyPress', (t) => {
                t.which === T.yXg.ENTER && this.handleSaveStatus();
            }),
            O(this, 'renderEmojiPicker', (t) => {
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
    [S.Z, g.default],
    () => {
        let t = g.default.getCurrentUser();
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
