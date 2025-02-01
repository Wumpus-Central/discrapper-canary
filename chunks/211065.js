n.d(e, { default: () => I }), n(47120);
var a = n(200651),
    l = n(192379),
    i = n(512722),
    s = n.n(i),
    r = n(442837),
    o = n(481060),
    u = n(596454),
    d = n(410575),
    c = n(318766),
    m = n(907040),
    h = n(246133),
    f = n(695346),
    p = n(293273),
    S = n(594174),
    g = n(626135),
    _ = n(51144),
    b = n(720449),
    C = n(684269),
    j = n(875425),
    x = n(981631),
    N = n(185923),
    v = n(388032),
    k = n(58448);
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
        className: k.statusOptionItem,
        children: [
            (0, a.jsx)(o.qbd, {
                status: t.value,
                size: 10,
                className: k.statusIcon
            }),
            t.label
        ]
    });
}
let T = [
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
        g.default.track(x.rMx.OPEN_MODAL, {
            source: null == e ? void 0 : e.location,
            type: x.jXE.CUSTOM_STATUS_MODAL,
            load_id: null == e ? void 0 : e.loadId,
            location_stack: t
        });
    }
    get clearAfterOptions() {
        return [
            {
                key: 1,
                value: j.F.TODAY,
                label: v.intl.string(v.t.GQmLra)
            },
            {
                key: 2,
                value: j.F.HOURS_4,
                label: v.intl.formatToPlainString(v.t.Rea2gY, { hours: 4 })
            },
            {
                key: 3,
                value: j.F.HOURS_1,
                label: v.intl.formatToPlainString(v.t.Rea2gY, { hours: 1 })
            },
            {
                key: 4,
                value: j.F.MINUTES_30,
                label: v.intl.formatToPlainString(v.t.TS3eJS, { minutes: 30 })
            },
            {
                key: 5,
                value: j.F.DONT_CLEAR,
                label: v.intl.string(v.t.bRn8cn)
            }
        ];
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
                      className: k.emoji,
                      emojiId: t.id,
                      emojiName: t.name,
                      animated: !!t.animated
                  });
    }
    renderCustomStatusInput() {
        let { user: t } = this.props,
            { text: e, emojiInfo: n } = this.state;
        return (0, a.jsx)(o.hjN, {
            className: k.formGroup,
            title: v.intl.formatToPlainString(v.t['/w9pHx'], { username: t.username }),
            children: (0, a.jsxs)('div', {
                className: k.inputContainer,
                children: [
                    (0, a.jsx)('div', {
                        className: k.emojiButtonContainer,
                        children: (0, a.jsx)(o.yRy, {
                            renderPopout: this.renderEmojiPicker,
                            position: 'left',
                            animation: o.yRy.Animation.NONE,
                            align: 'top',
                            children: (t, e) => {
                                let { isShown: n } = e;
                                return (0, a.jsx)(c.Z, {
                                    ...t,
                                    active: n,
                                    className: k.emojiButton,
                                    tabIndex: 0,
                                    renderButtonContents: this.getEmojiButtonRenderer()
                                });
                            }
                        })
                    }),
                    (0, a.jsx)(o.oil, {
                        maxLength: j.s,
                        value: e,
                        inputClassName: k.input,
                        placeholder: v.intl.string(v.t['zYR38/']),
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
                              className: k.clearButton,
                              onClick: this.handleClearStatus,
                              look: o.zxk.Looks.BLANK,
                              size: o.zxk.Sizes.NONE,
                              children: (0, a.jsx)(o.k$p, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: k.clearIcon
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
            className: k.formGroup,
            title: v.intl.string(v.t.E45wvL),
            children: (0, a.jsx)(o.q4e, {
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
        return (0, a.jsx)(o.hjN, {
            className: k.formGroup,
            title: v.intl.string(v.t.zOdg0N),
            children: (0, a.jsx)(o.q4e, {
                maxVisibleItems: 4,
                value: t,
                options: T,
                onChange: this.handleChangeStatus,
                renderOptionLabel: O
            })
        });
    }
    render() {
        let { transitionState: t, onClose: e } = this.props;
        return (0, a.jsx)(d.Z, {
            ...this.analyticsLocation,
            children: (0, a.jsxs)(o.Y0X, {
                transitionState: t,
                className: k.modalRoot,
                'aria-label': v.intl.string(v.t['/UonHB']),
                children: [
                    (0, a.jsxs)(o.xBx, {
                        separator: !1,
                        className: k.headerContainer,
                        children: [
                            (0, a.jsx)('div', { className: k.art }),
                            (0, a.jsx)('div', {
                                className: k.header,
                                children: (0, a.jsx)(o.H, {
                                    className: k.headerText,
                                    children: v.intl.string(v.t['/UonHB'])
                                })
                            }),
                            (0, a.jsx)(o.olH, {
                                onClick: e,
                                className: k.modalCloseButton
                            })
                        ]
                    }),
                    (0, a.jsxs)(o.hzk, {
                        children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, a.jsx)(o.$i$, { className: k.formDivider }), this.renderStatusInput()]
                    }),
                    (0, a.jsxs)(o.mzw, {
                        children: [
                            (0, a.jsx)(o.zxk, {
                                onClick: this.handleSubmit,
                                children: v.intl.string(v.t.R3BPHx)
                            }),
                            (0, a.jsx)(o.zxk, {
                                onClick: e,
                                look: o.zxk.Looks.LINK,
                                color: k.cancelButton,
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
            D(this, 'state', {
                emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
                text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : '',
                clearAfter: (0, C.Z)(),
                status: (function () {
                    let t = f.co.getSetting();
                    return T.some((e) => e.value === t) ? t : o.Skl.ONLINE;
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
                    { emojiInfo: n, text: a, clearAfter: l, status: i } = this.state,
                    s = f.co.getSetting();
                s !== i && (0, h.Z)(i, s, t), (0, b.Z)(a, n, l, t), e();
            }),
            D(this, 'handleKeyPress', (t) => {
                t.which === x.yXg.ENTER && this.handleSaveStatus();
            }),
            D(this, 'renderEmojiPicker', (t) => {
                let { closePopout: e } = t,
                    { onClose: n } = this.props;
                return (0, a.jsx)(m.Z, {
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
let I = r.ZP.connectStores(
    [p.Z, S.default],
    () => {
        let t = S.default.getCurrentUser();
        return (
            s()(null != t, 'CustomStatusModal: user cannot be null'),
            {
                customStatus: p.Z.getCustomStatusActivity(),
                user: t
            }
        );
    },
    { forwardRef: !0 }
)(A);
