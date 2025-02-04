n.d(e, { default: () => I }), n(47120);
var a = n(200651),
    l = n(192379),
    s = n(512722),
    i = n.n(s),
    r = n(442837),
    o = n(481060),
    u = n(596454),
    c = n(410575),
    d = n(318766),
    h = n(907040),
    m = n(246133),
    f = n(695346),
    p = n(293273),
    S = n(594174),
    g = n(626135),
    _ = n(51144),
    j = n(720449),
    x = n(684269),
    N = n(875425),
    b = n(981631),
    C = n(185923),
    k = n(388032),
    v = n(58448);
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
function T(t) {
    return (0, a.jsxs)('div', {
        className: v.statusOptionItem,
        children: [
            (0, a.jsx)(o.qbd, {
                status: t.value,
                size: 10,
                className: v.statusIcon
            }),
            t.label
        ]
    });
}
let D = [
    {
        key: 1,
        value: o.Skl.ONLINE,
        label: (0, _.u5)(o.Skl.ONLINE)
    },
    {
        key: 2,
        value: o.Skl.IDLE,
        label: (0, _.u5)(o.Skl.IDLE)
    },
    {
        key: 3,
        value: o.Skl.DND,
        label: (0, _.u5)(o.Skl.DND)
    },
    {
        key: 4,
        value: o.Skl.INVISIBLE,
        label: (0, _.u5)(o.Skl.INVISIBLE)
    }
];
class A extends l.PureComponent {
    componentDidMount() {
        let { sourceAnalyticsLocations: t, sourceAnalyticsContext: e } = this.props;
        g.default.track(b.rMx.OPEN_MODAL, {
            source: null == e ? void 0 : e.location,
            type: b.jXE.CUSTOM_STATUS_MODAL,
            load_id: null == e ? void 0 : e.loadId,
            location_stack: t
        });
    }
    get clearAfterOptions() {
        return [
            {
                key: 1,
                value: N.F.TODAY,
                label: k.intl.string(k.t.GQmLra)
            },
            {
                key: 2,
                value: N.F.HOURS_4,
                label: k.intl.formatToPlainString(k.t.Rea2gY, { hours: 4 })
            },
            {
                key: 3,
                value: N.F.HOURS_1,
                label: k.intl.formatToPlainString(k.t.Rea2gY, { hours: 1 })
            },
            {
                key: 4,
                value: N.F.MINUTES_30,
                label: k.intl.formatToPlainString(k.t.TS3eJS, { minutes: 30 })
            },
            {
                key: 5,
                value: N.F.DONT_CLEAR,
                label: k.intl.string(k.t.bRn8cn)
            }
        ];
    }
    get analyticsLocation() {
        return { page: b.ZY5.CUSTOM_STATUS_MODAL };
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
        return (0, a.jsx)(o.hjN, {
            className: v.formGroup,
            title: k.intl.formatToPlainString(k.t['/w9pHx'], { username: t.username }),
            children: (0, a.jsxs)('div', {
                className: v.inputContainer,
                children: [
                    (0, a.jsx)('div', {
                        className: v.emojiButtonContainer,
                        children: (0, a.jsx)(o.yRy, {
                            renderPopout: this.renderEmojiPicker,
                            position: 'left',
                            animation: o.yRy.Animation.NONE,
                            align: 'top',
                            children: (t, e) => {
                                let { isShown: n } = e;
                                return (0, a.jsx)(d.Z, {
                                    ...t,
                                    active: n,
                                    className: v.emojiButton,
                                    tabIndex: 0,
                                    renderButtonContents: this.getEmojiButtonRenderer()
                                });
                            }
                        })
                    }),
                    (0, a.jsx)(o.oil, {
                        maxLength: N.s,
                        value: e,
                        inputClassName: v.input,
                        placeholder: k.intl.string(k.t['zYR38/']),
                        onChange: this.handleStatusChange,
                        onKeyPress: this.handleKeyPress,
                        autoFocus: !0
                    }),
                    e.length > 0 || null != n
                        ? (0, a.jsx)(o.zxk, {
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
                              look: o.zxk.Looks.BLANK,
                              size: o.zxk.Sizes.NONE,
                              children: (0, a.jsx)(o.k$p, {
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
        return (0, a.jsx)(o.hjN, {
            className: v.formGroup,
            title: k.intl.string(k.t.E45wvL),
            children: (0, a.jsx)(o.q4e, {
                placeholder: k.intl.string(k.t.E45wvL),
                maxVisibleItems: 5,
                value: t,
                options: this.clearAfterOptions,
                onChange: this.handleChangeClearAfter
            })
        });
    }
    renderStatusInput() {
        let { status: t } = this.state;
        return (0, a.jsx)(o.hjN, {
            className: v.formGroup,
            title: k.intl.string(k.t.zOdg0N),
            children: (0, a.jsx)(o.q4e, {
                maxVisibleItems: 4,
                value: t,
                options: D,
                onChange: this.handleChangeStatus,
                renderOptionLabel: T
            })
        });
    }
    render() {
        let { transitionState: t, onClose: e } = this.props;
        return (0, a.jsx)(c.Z, {
            ...this.analyticsLocation,
            children: (0, a.jsxs)(o.Y0X, {
                transitionState: t,
                className: v.modalRoot,
                'aria-label': k.intl.string(k.t['/UonHB']),
                children: [
                    (0, a.jsxs)(o.xBx, {
                        separator: !1,
                        className: v.headerContainer,
                        children: [
                            (0, a.jsx)('div', { className: v.art }),
                            (0, a.jsx)('div', {
                                className: v.header,
                                children: (0, a.jsx)(o.H, {
                                    className: v.headerText,
                                    children: k.intl.string(k.t['/UonHB'])
                                })
                            }),
                            (0, a.jsx)(o.olH, {
                                onClick: e,
                                className: v.modalCloseButton
                            })
                        ]
                    }),
                    (0, a.jsxs)(o.hzk, {
                        children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, a.jsx)(o.$i$, { className: v.formDivider }), this.renderStatusInput()]
                    }),
                    (0, a.jsxs)(o.mzw, {
                        children: [
                            (0, a.jsx)(o.zxk, {
                                onClick: this.handleSubmit,
                                children: k.intl.string(k.t.R3BPHx)
                            }),
                            (0, a.jsx)(o.zxk, {
                                onClick: e,
                                look: o.zxk.Looks.LINK,
                                color: v.cancelButton,
                                children: k.intl.string(k.t['ETE/oK'])
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
                clearAfter: (0, x.Z)(),
                status: (function () {
                    let t = f.co.getSetting();
                    return D.some((e) => e.value === t) ? t : o.Skl.ONLINE;
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
                    { emojiInfo: n, text: a, clearAfter: l, status: s } = this.state,
                    i = f.co.getSetting();
                i !== s && (0, m.Z)(s, i, t), (0, j.Z)(a, n, l, t), e();
            }),
            O(this, 'handleKeyPress', (t) => {
                t.which === b.yXg.ENTER && this.handleSaveStatus();
            }),
            O(this, 'renderEmojiPicker', (t) => {
                let { closePopout: e } = t,
                    { onClose: n } = this.props;
                return (0, a.jsx)(h.Z, {
                    closePopout: e,
                    onSelectEmoji: (t, n) => {
                        this.handleEmojiChange(t), n && e();
                    },
                    pickerIntention: C.Hz.STATUS,
                    onNavigateAway: n
                });
            });
    }
}
let I = r.ZP.connectStores(
    [p.Z, S.default],
    () => {
        let t = S.default.getCurrentUser();
        return (
            i()(null != t, 'CustomStatusModal: user cannot be null'),
            {
                customStatus: p.Z.getCustomStatusActivity(),
                user: t
            }
        );
    },
    { forwardRef: !0 }
)(A);
