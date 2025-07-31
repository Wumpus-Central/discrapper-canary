(n.d(t, {
    default: () => ea,
    p: () => ei
}),
    n(539854),
    n(953529),
    n(388685),
    n(781311),
    n(415506));
var i = n(255367),
    s = n(73800),
    r = n(120356),
    l = n.n(r),
    a = n(512722),
    o = n.n(a),
    d = n(392711),
    c = n.n(d),
    h = n(990547),
    u = n(831209),
    p = n(442837),
    m = n(755721),
    g = n(481060),
    C = n(333848),
    N = n(749210),
    x = n(332063),
    E = n(620123),
    I = n(911969),
    j = n(367907),
    b = n(812206),
    v = n(933557),
    f = n(636816),
    O = n(605436),
    S = n(185413),
    y = n(313201),
    A = n(318766),
    _ = n(907040),
    T = n(906411),
    D = n(688465),
    L = n(312146),
    U = n(703656),
    P = n(146085),
    G = n(60222),
    z = n(388131),
    M = n(131704),
    R = n(592125),
    w = n(271383),
    Z = n(430824),
    B = n(496675),
    k = n(699516),
    H = n(594174),
    V = n(934415),
    F = n(823379),
    X = n(63063),
    Y = n(981631),
    W = n(71080),
    q = n(185923),
    K = n(710352),
    J = n(231338),
    Q = n(388032),
    $ = n(37448);
function ee(e, t, n) {
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
function et(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                ee(e, t, n[t]);
            }));
    }
    return e;
}
function en(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ei(e) {
    let { isNew: t, isBeta: n } = e,
        s = null;
    return (
        !0 === t
            ? (s = (0, i.jsx)(g.IGR, {
                  text: Q.intl.string(Q.t.psHMa2),
                  className: $.newBadge,
                  color: u.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER
              }))
            : !0 === n && (s = (0, i.jsx)(D.Z, { className: $.newBadge })),
        s
    );
}
function es(e) {
    let { onChange: t, guildId: n, channelType: r, description: l } = e,
        [a, o] = s.useState({}),
        d = (0, p.e7)([Z.Z], () => Z.Z.getGuild(n)),
        c = r === Y.d4z.GUILD_STAGE_VOICE;
    return (s.useEffect(() => {
        t(a);
    }, [a, t]),
    null == d)
        ? null
        : (0, i.jsx)(g.hzk, {
              className: $.addMembersContainer,
              children: (0, i.jsx)(S.U, {
                  guild: d,
                  channel: null,
                  permission: c ? P.yP : (0, M.CG)(r),
                  pendingAdditions: a,
                  setPendingAdditions: o,
                  isStageChannel: c,
                  description: l
              })
          });
}
function er(e) {
    let { onEmojiPicked: t, guildId: n } = e,
        r = s.useRef(null),
        l = s.useMemo(
            () => ({
                popoutLocation: {
                    page: Y.ZY5.CREATE_CHANNEL_MODAL,
                    section: Y.jXE.CHANNEL_NAME,
                    object: Y.qAy.EMOJI_PICKER_BUTTON
                }
            }),
            []
        ),
        a = s.useCallback(
            (e) => {
                let { closePopout: s } = e;
                return (0, i.jsx)(_.Z, {
                    channel: null,
                    guildId: n,
                    pickerIntention: q.Hz.CHANNEL_NAME,
                    closePopout: s,
                    onNavigateAway: s,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        (null != n && n.type === T.B.UNICODE && t(n.surrogates), i && s());
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: l
                });
            },
            [l, n, t]
        );
    return (0, i.jsx)(g.yRy, {
        targetElementRef: r,
        renderPopout: a,
        animation: g.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(
                A.Z,
                en(et({}, e), {
                    ref: r,
                    active: n,
                    className: $.emojiButton,
                    tabIndex: 0,
                    focusProps: {
                        offset: {
                            top: 10,
                            bottom: 10,
                            left: -4,
                            right: 10
                        }
                    }
                })
            );
        }
    });
}
class el extends s.PureComponent {
    componentDidMount() {
        let { _input: e } = this;
        null != e && e.select();
        let { guildId: t, applications: n, canCreateStoreChannel: i } = this.props;
        (i && null == n && N.Z.fetchApplications(t), j.ZP.trackWithMetadata(Y.rMx.OPEN_MODAL, { type: 'Create Channel' }));
    }
    componentDidUpdate(e, t) {
        (!t.isPrivate && this.state.isPrivate && this.state.channelType === Y.d4z.GUILD_ANNOUNCEMENT && this.setState({ channelType: Y.d4z.GUILD_TEXT }), !t.isPrivate && this.state.isPrivate && j.ZP.trackWithMetadata(Y.rMx.OPEN_MODAL, { type: 'Create Private Channel' }));
    }
    getGuildId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.guildId;
    }
    canSubmit() {
        let { canViewChannels: e, canConnect: t, transitionState: n } = this.props,
            { isPrivate: i, channelType: s, skuId: r, name: l, submitting: a } = this.state;
        return !a && n !== g.Dvm.EXITING && '' !== l && '' !== l.trim() && (!i || !!(0, O.nT)(s, e, t)) && (s !== Y.d4z.GUILD_STORE || null != r);
    }
    getIconComponent() {
        let { isPrivate: e, channelType: t } = this.state;
        switch (t) {
            case Y.d4z.GUILD_TEXT:
                return e ? g.W4G : g.VL1;
            case Y.d4z.GUILD_FORUM:
                return g.Mmi;
            case Y.d4z.GUILD_MEDIA:
                return g.XBm;
            case Y.d4z.GUILD_VOICE:
                return e ? g.gjC : g.gj8;
            case Y.d4z.GUILD_STORE:
                return g.lO_;
            case Y.d4z.GUILD_ANNOUNCEMENT:
                return g.MqZ;
            case Y.d4z.GUILD_STAGE_VOICE:
                return g.ewx;
            default:
                return (0, M.zi)(t) ? g.VL1 : J.Vq;
        }
    }
    renderHeader() {
        var e;
        let t,
            { cloneChannel: n, categoryId: s, onClose: r } = this.props,
            { channelType: l } = this.state,
            a = null != n ? Q.intl.string(Q.t.dEaPc3) : l === Y.d4z.GUILD_CATEGORY ? Q.intl.string(Q.t['ISN+ND']) : Q.intl.string(Q.t['fUYU+v']);
        if (null != s) {
            let n = R.Z.getChannel(s);
            t = (0, i.jsx)(g.Text, {
                variant: 'text-xs/normal',
                color: 'header-secondary',
                className: $.subtitle,
                children: Q.intl.format(Q.t.L1zJgY, { categoryName: null != (e = null == n ? void 0 : n.name) ? e : '' })
            });
        }
        return (0, i.jsxs)(g.xBx, {
            separator: !1,
            children: [
                (0, i.jsxs)('div', {
                    className: $.header,
                    children: [
                        (0, i.jsx)(g.X6q, {
                            id: this.headerId,
                            variant: 'heading-lg/semibold',
                            className: $.title,
                            children: a
                        }),
                        t
                    ]
                }),
                (0, i.jsx)(g.olH, {
                    onClick: r,
                    className: $.closeButton
                })
            ]
        });
    }
    renderName() {
        let e,
            { cloneChannel: t, guildId: s } = this.props,
            { errors: r, channelType: l } = this.state;
        (null == r ? void 0 : r.name) != null &&
            (e = (0, i.jsx)(g.Text, {
                variant: 'text-xs/normal',
                color: 'text-danger',
                className: $.error,
                children: r.name
            }));
        let a = l === Y.d4z.GUILD_CATEGORY,
            o = a ? Q.intl.string(Q.t.OCAkGB) : Q.intl.string(Q.t.PVbHDg),
            d =
                null != t
                    ? (0, i.jsx)(g.R94, {
                          className: $.channelNameNote,
                          type: g.R94.Types.DESCRIPTION,
                          children: Q.intl.format(Q.t.s2ZzZW, { name: (0, v.F6)(t, H.default, k.Z, !0) })
                      })
                    : l === Y.d4z.GUILD_FORUM
                      ? (0, i.jsx)(g.R94, {
                            className: $.channelNameNote,
                            type: g.R94.Types.DESCRIPTION,
                            children: Q.intl.format(Q.t.tbVWyc, {
                                forumUpsellHook: (e, t) =>
                                    (0, i.jsx)(
                                        g.eee,
                                        {
                                            onClick: () =>
                                                (0, g.ZDy)(async () => {
                                                    let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                                                    return (t) => (0, i.jsx)(e, en(et({}, t), { guildId: s }));
                                                }),
                                            children: e
                                        },
                                        t
                                    )
                            })
                        })
                      : null,
            c = this.getIconComponent(),
            h = {
                value: this.state.name,
                onChange: this.handleNameChange,
                inputRef: this.setInputRef,
                maxLength: 100,
                placeholder: (function (e) {
                    switch (e) {
                        case Y.d4z.GUILD_CATEGORY:
                            return Q.intl.string(Q.t.eTVbt7);
                        case Y.d4z.GUILD_FORUM:
                            return Q.intl.string(Q.t['5z1Xam']);
                        default:
                            return Q.intl.string(Q.t['bw/b8P']);
                    }
                })(l),
                className: $.inputWrapper,
                inputClassName: a ? void 0 : $.inputInner,
                prefixElement: a
                    ? null
                    : (0, i.jsx)(c, {
                          className: $.inputPrefix,
                          size: 'xs',
                          color: 'currentColor'
                      }),
                autoFocus: !0,
                focusProps: { offset: { right: -30 } }
            };
        return (0, i.jsx)(y.FG, {
            children: (t) =>
                (0, i.jsxs)(g.xJW, {
                    title: o,
                    tag: 'label',
                    htmlFor: t,
                    titleClassName: $.sectionTitle,
                    className: $.name,
                    children: [
                        (0, i.jsxs)('div', {
                            className: $.nameInput,
                            children: [
                                (0, i.jsx)(m.Is, et({ id: t }, h), t),
                                (0, i.jsx)(er, {
                                    onEmojiPicked: this.insertEmojiAtPosition,
                                    isPrivateChannel: this.state.isPrivate,
                                    guildId: s
                                })
                            ]
                        }),
                        e,
                        d
                    ]
                })
        });
    }
    renderType() {
        let { cloneChannel: e, applications: t, canCreateStoreChannel: n, canCreateAnnouncementChannel: s, canCreateStageChannel: r, canCreateMediaChannel: l } = this.props,
            { channelType: a, isPrivate: o } = this.state;
        if (null != e || a === Y.d4z.GUILD_CATEGORY) return;
        let d = null != t && t.length > 0;
        return (0, i.jsx)(g.xJW, {
            className: $.type,
            title: Q.intl.string(Q.t['7ZcXGx']),
            children: (0, i.jsx)(g.FXm, {
                options: (function (e) {
                    let { isPrivate: t, showStoreChannelOption: n, showAnnouncementChannelOption: s, canCreateStageChannel: r, canCreateMediaChannel: l } = e,
                        a = [
                            {
                                icon: t ? g.W4G : g.VL1,
                                label: Q.intl.string(Q.t.pnuRXF),
                                value: Y.d4z.GUILD_TEXT,
                                description: Q.intl.string(Q.t.Hf5Lb2)
                            }
                        ];
                    return (
                        a.push({
                            icon: t ? g.gjC : g.gj8,
                            label: Q.intl.string(Q.t.Sx55Oj),
                            value: Y.d4z.GUILD_VOICE,
                            description: Q.intl.string(Q.t.pqfkoK)
                        }),
                        a.push({
                            icon: t ? g.BUe : g.Mmi,
                            label: Q.intl.string(Q.t.eAVIDw),
                            value: Y.d4z.GUILD_FORUM,
                            description: (0, i.jsxs)(g.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                className: $.radioLabelDescription,
                                children: [
                                    Q.intl.string(Q.t.iZ5pgo),
                                    (0, i.jsx)('br', {}),
                                    Q.intl.format(Q.t.fjSvsL, {
                                        onClick: () => {
                                            open(K.V8);
                                        }
                                    })
                                ]
                            })
                        }),
                        l &&
                            a.push({
                                icon: t ? g.D7T : g.XBm,
                                label: Q.intl.string(Q.t['6x6fVl']),
                                value: Y.d4z.GUILD_MEDIA,
                                description: (0, i.jsxs)(g.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: $.radioLabelDescription,
                                    children: [
                                        Q.intl.string(Q.t.JyCrwc),
                                        (0, i.jsx)('br', {}),
                                        Q.intl.format(Q.t.fjSvsL, {
                                            onClick: () => {
                                                open(X.Z.getCreatorSupportArticleURL(Y.BhN.MEDIA_CHANNEL));
                                            }
                                        })
                                    ]
                                }),
                                isBeta: !0
                            }),
                        s &&
                            a.push({
                                icon: g.MqZ,
                                iconSize: 24,
                                label: Q.intl.string(Q.t.qr9dEB),
                                value: Y.d4z.GUILD_ANNOUNCEMENT,
                                description: Q.intl.string(Q.t.gBkfzs)
                            }),
                        n &&
                            a.push({
                                icon: g.lO_,
                                iconSize: 24,
                                label: Q.intl.string(Q.t.SxjkXV),
                                value: Y.d4z.GUILD_STORE,
                                description: Q.intl.string(Q.t.nmCPMD)
                            }),
                        r &&
                            a.push({
                                icon: g.ewx,
                                iconSize: 24,
                                label: Q.intl.string(Q.t.pNWst7),
                                value: Y.d4z.GUILD_STAGE_VOICE,
                                description: Q.intl.string(Q.t.VPAwgo)
                            }),
                        a.map((e) => {
                            let { icon: t, iconSize: n, label: s, value: r, description: l, isNew: a, isBeta: o } = e;
                            return {
                                name: (0, i.jsxs)('div', {
                                    className: $.radioItemName,
                                    children: [
                                        (0, i.jsx)(
                                            t,
                                            en(
                                                et(
                                                    {},
                                                    null != n
                                                        ? {
                                                              width: n,
                                                              height: n,
                                                              size: 'custom'
                                                          }
                                                        : { size: 'md' }
                                                ),
                                                {
                                                    color: 'currentColor',
                                                    className: $.icon,
                                                    colorClass: $.foreground
                                                }
                                            )
                                        ),
                                        (0, i.jsxs)('div', {
                                            children: [
                                                (0, i.jsxs)(g.Text, {
                                                    variant: 'text-md/medium',
                                                    className: $.radioLabelName,
                                                    children: [
                                                        s,
                                                        (0, i.jsx)(ei, {
                                                            isNew: a,
                                                            isBeta: o
                                                        })
                                                    ]
                                                }),
                                                'string' == typeof l
                                                    ? (0, i.jsx)(g.Text, {
                                                          variant: 'text-sm/normal',
                                                          color: 'header-secondary',
                                                          className: $.radioLabelDescription,
                                                          children: l
                                                      })
                                                    : l
                                            ]
                                        })
                                    ]
                                }),
                                value: r,
                                radioBarClassName: $.radioBar,
                                radioItemIconClassName: $.radioBarIcon
                            };
                        })
                    );
                })({
                    isPrivate: o,
                    showStoreChannelOption: n && d,
                    showAnnouncementChannelOption: s,
                    canCreateStageChannel: r,
                    canCreateMediaChannel: l
                }),
                value: a,
                size: g.FXm.Sizes.NOT_SET,
                onChange: this.handleTypeChange,
                itemInfoClassName: $.radioBarLabel
            })
        });
    }
    renderStoreOptions() {
        let { applications: e } = this.props,
            { applicationId: t, skuId: n, branchId: r, showBranches: l, hasBranches: a } = this.state;
        if (null == e || 0 === e.length) throw Error('Unexpected empty applications');
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(g.vwX, {
                    tag: 'h5',
                    children: Q.intl.string(Q.t.vPIW2N)
                }),
                (0, i.jsx)(g.q4e, {
                    options: e.map((e) => ({
                        label: e.name,
                        value: e.id
                    })),
                    placeholder: Q.intl.string(Q.t['3XfCPT']),
                    value: t,
                    onChange: this.handleApplicationChange,
                    className: $.storeChannelOptionSelector
                }),
                null != t
                    ? (0, i.jsxs)(s.Fragment, {
                          children: [
                              (0, i.jsx)(g.vwX, {
                                  tag: 'h5',
                                  children: Q.intl.string(Q.t.XNIWFh)
                              }),
                              (0, i.jsx)(
                                  E.Z,
                                  {
                                      applicationId: t,
                                      onChange: this.handleSKUChange,
                                      selectedSkuId: n,
                                      className: $.storeChannelOptionSelector
                                  },
                                  t
                              )
                          ]
                      })
                    : null,
                null != t && a
                    ? (0, i.jsxs)(g.j7V, {
                          hideBorder: !0,
                          onChange: this.handleShowBranchesToggle,
                          value: l,
                          note: Q.intl.format(Q.t.UVXL1d, { devPortalUrl: Y.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT }),
                          children: [
                              (0, i.jsx)(g._m8, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: $.switchIcon
                              }),
                              Q.intl.string(Q.t['3e9mHx'])
                          ]
                      })
                    : null,
                null != t
                    ? (0, i.jsxs)(s.Fragment, {
                          children: [
                              l
                                  ? (0, i.jsx)(g.vwX, {
                                        tag: 'h5',
                                        children: Q.intl.string(Q.t.o7DqFx)
                                    })
                                  : null,
                              (0, i.jsx)(
                                  x.Z,
                                  {
                                      applicationId: t,
                                      onChange: this.handleBranchChange,
                                      selectedBranchId: r,
                                      hide: !l,
                                      onHasBranchesChange: this.handleHasBranchesChange,
                                      className: $.storeChannelOptionSelector
                                  },
                                  t
                              )
                          ]
                      })
                    : null
            ]
        });
    }
    renderPrivacyOptions() {
        let { cloneChannel: e } = this.props,
            { channelType: t, isPrivate: n } = this.state;
        if (null != e || t === Y.d4z.GUILD_ANNOUNCEMENT) return null;
        let s = t === Y.d4z.GUILD_CATEGORY ? Q.intl.string(Q.t.lEPAZ2) : Q.intl.string(Q.t.aUI70t),
            r = t === Y.d4z.GUILD_CATEGORY ? Q.intl.string(Q.t['RQUk6+']) : Q.intl.string(Q.t.YguuKi);
        return (0, i.jsx)(
            g.xJW,
            {
                children: (0, i.jsxs)(g.j7V, {
                    hideBorder: !0,
                    onChange: this.handlePrivacyChange,
                    value: n,
                    note: r,
                    children: [
                        (0, i.jsx)(g.mBM, {
                            size: 'md',
                            color: 'currentColor',
                            className: $.switchIcon
                        }),
                        s
                    ]
                })
            },
            'privacy-switch'
        );
    }
    renderError(e) {
        let t,
            { channelType: n, isPrivate: s, errors: r } = this.state,
            { canConnect: a, canViewChannels: o } = this.props;
        if (Object.values(r).length > 0) {
            if (null != r.message && '' !== r.message) t = r.message;
            else if (e || null == r.name) {
                let e = Object.values(r)[0];
                e.length > 0 && (t = e);
            }
        } else s && !(0, O.nT)(n, o, a) && (t = (0, O.$7)(n));
        if (null != t)
            return (0, i.jsx)('div', {
                className: l()($.createError, { [$.addMemberError]: e }),
                children: (0, i.jsx)(g.Wn, {
                    messageType: g.QYI.ERROR,
                    children: t
                })
            });
    }
    renderFooter() {
        let e,
            { channelType: t, onClose: n } = this.props,
            { channelType: s } = this.state,
            { isPrivate: r } = this.state;
        e = t === Y.d4z.GUILD_CATEGORY ? Q.intl.string(Q.t['ISN+ND']) : Q.intl.string(Q.t['fUYU+v']);
        let l = r || s === Y.d4z.GUILD_STAGE_VOICE;
        return (0, i.jsx)(g.mzw, {
            className: $.modalFooter,
            children: (0, i.jsxs)(g.hE2, {
                direction: 'horizontal-reverse',
                children: [
                    l
                        ? (0, i.jsx)(g.zxk, {
                              variant: 'primary',
                              text: Q.intl.string(Q.t.PDTjLC),
                              type: 'button',
                              onClick: () => {
                                  this.setState({
                                      slide: 'ADD_MEMBERS',
                                      errors: {}
                                  });
                              },
                              disabled: !this.canSubmit()
                          })
                        : (0, i.jsx)(g.zxk, {
                              variant: 'primary',
                              text: e,
                              type: 'submit',
                              disabled: !this.canSubmit()
                          }),
                    (0, i.jsx)(g.zxk, {
                        variant: 'secondary',
                        text: Q.intl.string(Q.t['ETE/oK']),
                        onClick: n
                    })
                ]
            })
        });
    }
    renderAddMemberFooter() {
        let e,
            { channelType: t } = this.props,
            { pendingPermissionOverwrites: n } = this.state;
        return (
            (e = 0 === Object.keys(n).length ? Q.intl.string(Q.t['5WxrcX']) : t === Y.d4z.GUILD_CATEGORY ? Q.intl.string(Q.t['ISN+ND']) : Q.intl.string(Q.t['fUYU+v'])),
            (0, i.jsx)(g.mzw, {
                children: (0, i.jsxs)(g.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, i.jsx)(g.zxk, {
                            variant: 'primary',
                            text: e,
                            type: 'submit',
                            disabled: !this.canSubmit()
                        }),
                        (0, i.jsx)(g.zxk, {
                            variant: 'secondary',
                            text: Q.intl.string(Q.t['13/7kZ']),
                            onClick: () => {
                                this.setState({ slide: 'CHANNEL_INFO' });
                            }
                        })
                    ]
                })
            })
        );
    }
    handlePermissionOverwriteChange(e) {
        this.setState({ pendingPermissionOverwrites: e });
    }
    renderCreateChannelContent() {
        let { channelType: e } = this.state,
            { guildId: t } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                this.renderHeader(),
                (0, i.jsxs)(g.hzk, {
                    className: $.modalContent,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        e === Y.d4z.GUILD_STORE ? this.renderStoreOptions() : null,
                        (0, i.jsx)(f.Z, {
                            guildId: t,
                            channelType: e,
                            className: $.channelTypeDescription
                        }),
                        e === Y.d4z.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions()
                    ]
                }),
                this.renderError(),
                this.renderFooter()
            ]
        });
    }
    renderAddMemberSlideContent() {
        let { name: e, channelType: t } = this.state,
            { guildId: n, onClose: s } = this.props,
            r = this.getIconComponent(),
            l = t === Y.d4z.GUILD_STAGE_VOICE;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(g.xBx, {
                    separator: !1,
                    children: [
                        (0, i.jsxs)(g.Kqy, {
                            gap: 4,
                            className: $.header,
                            children: [
                                (0, i.jsx)(g.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: $.title,
                                    children: l ? Q.intl.string(Q.t['S/6zHB']) : Q.intl.string(Q.t.dMJ3Y2)
                                }),
                                (0, i.jsxs)(g.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    className: $.subtitle,
                                    children: [
                                        (0, i.jsx)(r, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: $.subtitleIcon
                                        }),
                                        e
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsx)(g.olH, {
                            onClick: s,
                            className: $.closeButton
                        })
                    ]
                }),
                this.renderError(!0),
                (0, i.jsx)(es, {
                    onChange: this.handlePermissionOverwriteChange,
                    guildId: n,
                    channelType: t
                }),
                this.renderAddMemberFooter()
            ]
        });
    }
    renderSlides() {
        let { slide: e } = this.state,
            { width: t } = this.props,
            n = { impression_group: h.ImpressionGroups.CHANNEL_ADD_FLOW };
        return (0, i.jsx)('div', {
            children: (0, i.jsxs)(g.MyZ, {
                activeSlide: e,
                width: t,
                children: [
                    (0, i.jsx)(g.Mi4, {
                        id: 'CHANNEL_INFO',
                        impressionName: h.ImpressionNames.CHANNEL_ADD_INFO,
                        impressionProperties: n,
                        children: this.renderCreateChannelContent()
                    }),
                    (0, i.jsx)(g.Mi4, {
                        id: 'ADD_MEMBERS',
                        impressionName: h.ImpressionNames.CHANNEL_ADD_MEMBERS,
                        impressionProperties: n,
                        children: this.renderAddMemberSlideContent()
                    })
                ]
            })
        });
    }
    render() {
        let { transitionState: e } = this.props;
        return (0, i.jsx)(g.Y0X, {
            transitionState: e,
            className: $.modal,
            'aria-labelledby': this.headerId,
            size: g.CgR.DYNAMIC,
            parentComponent: 'CreateChannel',
            children: (0, i.jsx)('form', {
                onSubmit: this.handleSubmit,
                children: this.renderSlides()
            })
        });
    }
    constructor(e) {
        (super(e),
            ee(this, 'headerId', (0, y.hQ)()),
            ee(this, '_input', void 0),
            ee(this, 'setInputRef', (e) => {
                this._input = e;
            }),
            ee(this, 'handleNameChange', (e) => {
                var t, n;
                let { channelType: i } = this.state;
                M.xL.has(i) && (e = (0, V.Nj)(e));
                let s = null != (n = null == (t = this._input) ? void 0 : t.selectionStart) ? n : 0;
                this.setState({ name: e }, () => {
                    var e;
                    null == (e = this._input) || e.setSelectionRange(s, s);
                });
            }),
            ee(this, 'insertEmojiAtPosition', (e) => {
                var t, n, i, s;
                let r = null != (i = null == (t = this._input) ? void 0 : t.selectionStart) ? i : 0,
                    l = null != (s = null == (n = this._input) ? void 0 : n.selectionEnd) ? s : 0,
                    a = this.state.name,
                    o = a.substring(0, r) + e + a.substring(l);
                this.setState({ name: o }, () => {
                    var t, n;
                    let i = r + e.length;
                    (null == (t = this._input) || t.focus(), null == (n = this._input) || n.setSelectionRange(i, i));
                });
            }),
            ee(this, 'handleTypeChange', (e) => {
                let { value: t } = e,
                    { name: n } = this.state;
                (M.xL.has(t) && (n = (0, V.Nj)(n)),
                    t === Y.d4z.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
                    this.setState({
                        channelType: t,
                        name: n
                    }));
            }),
            ee(this, 'handlePrivacyChange', (e) => {
                this.setState({ isPrivate: e });
            }),
            ee(this, 'handleApplicationChange', (e) => {
                this.setState({ applicationId: e });
            }),
            ee(this, 'handleSKUChange', (e) => {
                this.setState({ skuId: e });
            }),
            ee(this, 'handleShowBranchesToggle', (e) => {
                this.setState({
                    showBranches: e,
                    branchId: null
                });
            }),
            ee(this, 'handleBranchChange', (e) => {
                this.setState({ branchId: e });
            }),
            ee(this, 'handleHasBranchesChange', (e) => {
                this.setState({ hasBranches: e });
            }),
            ee(this, 'handleSubmit', async (e) => {
                let t, n, i;
                e.preventDefault();
                let { cloneChannel: s, categoryId: r, user: l, memberRoleIds: a, isAdmin: o, onClose: d, owner: h } = this.props,
                    { name: u, pendingPermissionOverwrites: p, channelType: m, skuId: g, branchId: N, isPrivate: x } = this.state,
                    E = this.getGuildId();
                if (null != E) {
                    if (null != s) ((t = c().values(s.permissionOverwrites)), (n = s.bitrate), (i = s.userLimit));
                    else if (m === Y.d4z.GUILD_ANNOUNCEMENT) t = (0, V.rt)(E);
                    else {
                        if (x) {
                            t = (0, V.oQ)(E, m, [], !0);
                            let e = (0, O.Tj)(p, m);
                            e.length > 0 && (t = t.concat(e));
                            let n = null != h && l.id === h.id;
                            t.some((e) => a.has(e.id)) || o || n || t.push((0, V.jZ)(l.id, m));
                        }
                        m === Y.d4z.GUILD_STAGE_VOICE &&
                            ((t = []),
                            Object.values(p).forEach((e) => {
                                let { row: n } = e;
                                null != n.id && '' !== n.id && (n.rowType === W.aC.ROLE ? t.push((0, z.A)(n.id, I.BN.ROLE)) : n.rowType === W.aC.MEMBER && t.push((0, z.A)(n.id, I.BN.MEMBER)));
                            }));
                    }
                    this.setState({
                        errors: {},
                        submitting: !0
                    });
                    try {
                        let e = await C.Z.createChannel({
                            guildId: E,
                            type: m,
                            name: u,
                            permissionOverwrites: t,
                            bitrate: n,
                            userLimit: i,
                            parentId: m !== Y.d4z.GUILD_CATEGORY ? r : null,
                            skuId: g,
                            branchId: N
                        });
                        if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                        let s = e.body;
                        (M.xL.has(m) && (0, U.XU)(s.guild_id, s.id), this.setState({ submitting: !1 }), d());
                    } catch (e) {
                        null != e.body && 'object' == typeof e.body
                            ? this.setState({
                                  errors: e.body,
                                  submitting: !1
                              })
                            : this.setState({
                                  errors: { message: Q.intl.string(Q.t.fEptJC) },
                                  submitting: !1
                              });
                    }
                }
            }));
        let { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        ((this.state = {
            channelType: null != t ? t : Y.d4z.GUILD_TEXT,
            name: null != n ? (0, v.F6)(n, H.default, k.Z) : null != i ? i : '',
            pendingPermissionOverwrites: {},
            isPrivate: !1,
            prevGuildId: e.guildId,
            applicationId: null,
            skuId: null,
            branchId: null,
            showBranches: !1,
            hasBranches: !1,
            slide: 'CHANNEL_INFO',
            errors: {},
            submitting: !1
        }),
            (this.handlePermissionOverwriteChange = this.handlePermissionOverwriteChange.bind(this)));
    }
}
let ea = s.forwardRef(function (e, t) {
    let { channelType: n, guildId: s, cloneChannelId: r } = e,
        l = (0, p.cj)([Z.Z, H.default, B.Z, R.Z, w.ZP], () => {
            var e, t, i;
            let l = Z.Z.getGuild(s),
                a = H.default.getCurrentUser();
            o()(null != a, 'CreateChannel: user cannot be undefined');
            let d = null != l && null != l.ownerId ? H.default.getUser(l.ownerId) : null,
                c = B.Z.can(Y.Plq.ADMINISTRATOR, l),
                h = R.Z.getChannel(r);
            return {
                guild: l,
                canCreateStoreChannel: null != l && l.features.has(Y.oNc.COMMERCE),
                canCreateAnnouncementChannel: null != l && l.features.has(Y.oNc.NEWS),
                user: a,
                owner: d,
                memberRoles: null != (t = null == (e = w.ZP.getMember(s, a.id)) ? void 0 : e.roles) ? t : [],
                canViewChannels: B.Z.can(Y.Plq.VIEW_CHANNEL, l),
                canConnect: B.Z.can(Y.Plq.CONNECT, l),
                isAdmin: c,
                cloneChannel: h,
                channelType: null != (i = null == h ? void 0 : h.type) ? i : n,
                canManageRoles: B.Z.can(Y.Plq.MANAGE_ROLES, l),
                canManageChannels: B.Z.can(Y.Plq.MANAGE_CHANNELS, l)
            };
        }),
        a = (0, p.Wu)([b.Z], () =>
            b.Z.getGuildApplicationIds(s)
                .map((e) => b.Z.getApplication(e))
                .filter(F.lm)
        ),
        d = new Set(l.memberRoles),
        { canManageRoles: c, canManageChannels: h } = l,
        u = (0, G.m)(s) && c && h,
        m = (0, L.Ui)(null == l ? void 0 : l.guild);
    return (0, i.jsx)(
        el,
        en(et({}, e, l), {
            memberRoleIds: d,
            applications: a,
            canCreateStageChannel: u,
            canCreateMediaChannel: m,
            ref: t,
            width: 496
        })
    );
});
