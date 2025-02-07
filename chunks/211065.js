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
    S = n(695346),
    f = n(293273),
    p = n(594174),
    g = n(626135),
    _ = n(51144),
    b = n(720449),
    j = n(684269),
    x = n(875425),
    C = n(981631),
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
            (0, a.jsx)(r.qbd, {
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
        value: r.Skl.ONLINE,
        label: (0, _.u5)(r.Skl.ONLINE)
    },
    {
        key: 2,
        value: r.Skl.IDLE,
        label: (0, _.u5)(r.Skl.IDLE)
    },
    {
        key: 3,
        value: r.Skl.DND,
        label: (0, _.u5)(r.Skl.DND)
    },
    {
        key: 4,
        value: r.Skl.INVISIBLE,
        label: (0, _.u5)(r.Skl.INVISIBLE)
    }
];
class A extends l.PureComponent {
    componentDidMount() {
        let { sourceAnalyticsLocations: t, sourceAnalyticsContext: e } = this.props;
        g.default.track(C.rMx.OPEN_MODAL, {
            source: null == e ? void 0 : e.location,
            type: C.jXE.CUSTOM_STATUS_MODAL,
            load_id: null == e ? void 0 : e.loadId,
            location_stack: t
        });
    }
    get clearAfterOptions() {
        return [
            {
                key: 1,
                value: x.F.TODAY,
                label: v.intl.string(v.t.GQmLra)
            },
            {
                key: 2,
                value: x.F.HOURS_4,
                label: v.intl.formatToPlainString(v.t.Rea2gY, { hours: 4 })
            },
            {
                key: 3,
                value: x.F.HOURS_1,
                label: v.intl.formatToPlainString(v.t.Rea2gY, { hours: 1 })
            },
            {
                key: 4,
                value: x.F.MINUTES_30,
                label: v.intl.formatToPlainString(v.t.TS3eJS, { minutes: 30 })
            },
            {
                key: 5,
                value: x.F.DONT_CLEAR,
                label: v.intl.string(v.t.bRn8cn)
            }
        ];
    }
    get analyticsLocation() {
        return { page: C.ZY5.CUSTOM_STATUS_MODAL };
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
        return (0, a.jsx)(r.hjN, {
            className: k.formGroup,
            title: v.intl.formatToPlainString(v.t['/w9pHx'], { username: t.username }),
            children: (0, a.jsxs)('div', {
                className: k.inputContainer,
                children: [
                    (0, a.jsx)('div', {
                        className: k.emojiButtonContainer,
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
                                    className: k.emojiButton,
                                    tabIndex: 0,
                                    renderButtonContents: this.getEmojiButtonRenderer()
                                });
                            }
                        })
                    }),
                    (0, a.jsx)(r.oil, {
                        maxLength: x.s,
                        value: e,
                        inputClassName: k.input,
                        placeholder: v.intl.string(v.t['zYR38/']),
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
                              className: k.clearButton,
                              onClick: this.handleClearStatus,
                              look: r.zxk.Looks.BLANK,
                              size: r.zxk.Sizes.NONE,
                              children: (0, a.jsx)(r.k$p, {
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
        return (0, a.jsx)(r.hjN, {
            className: k.formGroup,
            title: v.intl.string(v.t.E45wvL),
            children: (0, a.jsx)(r.q4e, {
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
        return (0, a.jsx)(r.hjN, {
            className: k.formGroup,
            title: v.intl.string(v.t.zOdg0N),
            children: (0, a.jsx)(r.q4e, {
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
            children: (0, a.jsxs)(r.Y0X, {
                transitionState: t,
                className: k.modalRoot,
                'aria-label': v.intl.string(v.t['/UonHB']),
                children: [
                    (0, a.jsxs)(r.xBx, {
                        separator: !1,
                        className: k.headerContainer,
                        children: [
                            (0, a.jsx)('div', { className: k.art }),
                            (0, a.jsx)('div', {
                                className: k.header,
                                children: (0, a.jsx)(r.H, {
                                    className: k.headerText,
                                    children: v.intl.string(v.t['/UonHB'])
                                })
                            }),
                            (0, a.jsx)(r.olH, {
                                onClick: e,
                                className: k.modalCloseButton
                            })
                        ]
                    }),
                    (0, a.jsxs)(r.hzk, {
                        children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, a.jsx)(r.$i$, { className: k.formDivider }), this.renderStatusInput()]
                    }),
                    (0, a.jsxs)(r.mzw, {
                        children: [
                            (0, a.jsx)(r.zxk, {
                                onClick: this.handleSubmit,
                                children: v.intl.string(v.t.R3BPHx)
                            }),
                            (0, a.jsx)(r.zxk, {
                                onClick: e,
                                look: r.zxk.Looks.LINK,
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
                clearAfter: (0, j.Z)(),
                status: (function () {
                    let t = S.co.getSetting();
                    return T.some((e) => e.value === t) ? t : r.Skl.ONLINE;
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
                    s = S.co.getSetting();
                s !== i && (0, m.Z)(i, s, t), (0, b.Z)(a, n, l, t), e();
            }),
            D(this, 'handleKeyPress', (t) => {
                t.which === C.yXg.ENTER && this.handleSaveStatus();
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
let I = o.ZP.connectStores(
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
)(A);
