(n.d(t, {
    default: () => eo,
    p: () => es
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
    m = n(481060),
    g = n(333848),
    C = n(749210),
    N = n(332063),
    x = n(620123),
    E = n(911969),
    j = n(367907),
    I = n(812206),
    b = n(429673),
    f = n(933557),
    v = n(636816),
    O = n(605436),
    S = n(185413),
    _ = n(313201),
    y = n(318766),
    A = n(907040),
    T = n(906411),
    D = n(688465),
    L = n(456269),
    P = n(312146),
    U = n(703656),
    G = n(146085),
    z = n(60222),
    M = n(388131),
    R = n(131704),
    w = n(592125),
    Z = n(271383),
    B = n(430824),
    k = n(496675),
    H = n(699516),
    F = n(594174),
    V = n(934415),
    X = n(823379),
    W = n(63063),
    Y = n(981631),
    q = n(71080),
    K = n(185923),
    J = n(710352),
    Q = n(231338),
    $ = n(388032),
    ee = n(37448);
function et(e, t, n) {
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
function en(e) {
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
                et(e, t, n[t]);
            }));
    }
    return e;
}
function ei(e, t) {
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
function es(e) {
    let { isNew: t, isBeta: n } = e,
        s = null;
    return (
        !0 === t
            ? (s = (0, i.jsx)(m.IGR, {
                  text: $.intl.string($.t.psHMa2),
                  className: ee.newBadge,
                  color: u.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER
              }))
            : !0 === n && (s = (0, i.jsx)(D.Z, { className: ee.newBadge })),
        s
    );
}
function er(e) {
    let { onChange: t, guildId: n, channelType: r, description: l } = e,
        [a, o] = s.useState({}),
        d = (0, p.e7)([B.Z], () => B.Z.getGuild(n)),
        c = r === Y.d4z.GUILD_STAGE_VOICE;
    return (s.useEffect(() => {
        t(a);
    }, [a, t]),
    null == d)
        ? null
        : (0, i.jsx)(m.hzk, {
              className: ee.addMembersContainer,
              children: (0, i.jsx)(S.U, {
                  guild: d,
                  channel: null,
                  permission: c ? G.yP : (0, R.CG)(r),
                  pendingAdditions: a,
                  setPendingAdditions: o,
                  isStageChannel: c,
                  description: l
              })
          });
}
function el(e) {
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
                return (0, i.jsx)(A.Z, {
                    channel: null,
                    guildId: n,
                    pickerIntention: K.Hz.CHANNEL_NAME,
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
    return (0, i.jsx)(m.yRy, {
        targetElementRef: r,
        renderPopout: a,
        animation: m.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(
                y.Z,
                ei(en({}, e), {
                    ref: r,
                    active: n,
                    className: ee.emojiButton,
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
class ea extends s.PureComponent {
    componentDidMount() {
        let { _input: e } = this;
        null != e && e.select();
        let { guildId: t, applications: n, canCreateStoreChannel: i } = this.props;
        (i && null == n && C.Z.fetchApplications(t),
            j.ZP.trackWithMetadata(Y.rMx.OPEN_MODAL, { type: 'Create Channel' }),
            L.O2.trackExposure({
                guildId: t,
                location: '45d324_1'
            }));
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
        return !a && n !== m.Dvm.EXITING && '' !== l && '' !== l.trim() && (!i || !!(0, O.nT)(s, e, t)) && (s !== Y.d4z.GUILD_STORE || null != r);
    }
    getIconComponent() {
        let { isPrivate: e, channelType: t } = this.state;
        switch (t) {
            case Y.d4z.GUILD_TEXT:
                return e ? m.W4G : m.VL1;
            case Y.d4z.GUILD_FORUM:
                return m.Mmi;
            case Y.d4z.GUILD_MEDIA:
                return m.XBm;
            case Y.d4z.GUILD_VOICE:
                return e ? m.gjC : m.gj8;
            case Y.d4z.GUILD_STORE:
                return m.lO_;
            case Y.d4z.GUILD_ANNOUNCEMENT:
                return m.MqZ;
            case Y.d4z.GUILD_STAGE_VOICE:
                return m.ewx;
            default:
                return (0, R.zi)(t) ? m.VL1 : Q.Vq;
        }
    }
    renderHeader() {
        var e;
        let t,
            { cloneChannel: n, categoryId: s, onClose: r } = this.props,
            { channelType: l } = this.state,
            a = null != n ? $.intl.string($.t.dEaPc3) : l === Y.d4z.GUILD_CATEGORY ? $.intl.string($.t['ISN+ND']) : $.intl.string($.t['fUYU+v']);
        if (null != s) {
            let n = w.Z.getChannel(s);
            t = (0, i.jsx)(m.Text, {
                variant: 'text-xs/normal',
                color: 'header-secondary',
                className: ee.subtitle,
                children: $.intl.format($.t.L1zJgY, { categoryName: null != (e = null == n ? void 0 : n.name) ? e : '' })
            });
        }
        return (0, i.jsxs)(m.xBx, {
            separator: !1,
            children: [
                (0, i.jsxs)('div', {
                    className: ee.header,
                    children: [
                        (0, i.jsx)(m.X6q, {
                            id: this.headerId,
                            variant: 'heading-lg/semibold',
                            className: ee.title,
                            children: a
                        }),
                        t
                    ]
                }),
                (0, i.jsx)(m.olH, {
                    onClick: r,
                    className: ee.closeButton
                })
            ]
        });
    }
    renderName() {
        let e,
            { cloneChannel: t, guildId: s, isEmojiInChannelNamesEnabled: r } = this.props,
            { errors: a, channelType: o } = this.state;
        (null == a ? void 0 : a.name) != null &&
            (e = (0, i.jsx)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-danger',
                className: ee.error,
                children: a.name
            }));
        let d = o === Y.d4z.GUILD_CATEGORY,
            c = d ? $.intl.string($.t.OCAkGB) : $.intl.string($.t.PVbHDg),
            h =
                null != t
                    ? (0, i.jsx)(m.R94, {
                          className: ee.channelNameNote,
                          type: m.R94.Types.DESCRIPTION,
                          children: $.intl.format($.t.s2ZzZW, { name: (0, f.F6)(t, F.default, H.Z, !0) })
                      })
                    : o === Y.d4z.GUILD_FORUM
                      ? (0, i.jsx)(m.R94, {
                            className: ee.channelNameNote,
                            type: m.R94.Types.DESCRIPTION,
                            children: $.intl.format($.t.tbVWyc, {
                                forumUpsellHook: (e, t) =>
                                    (0, i.jsx)(
                                        m.eee,
                                        {
                                            onClick: () =>
                                                (0, m.ZDy)(async () => {
                                                    let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                                                    return (t) => (0, i.jsx)(e, ei(en({}, t), { guildId: s }));
                                                }),
                                            children: e
                                        },
                                        t
                                    )
                            })
                        })
                      : null,
            u = this.getIconComponent(),
            p = (e) => {
                let { id: t } = e;
                return (0, i.jsx)(m.oil, {
                    value: this.state.name,
                    onChange: this.handleNameChange,
                    id: t,
                    inputRef: this.setInputRef,
                    maxLength: 100,
                    placeholder: (function (e) {
                        switch (e) {
                            case Y.d4z.GUILD_CATEGORY:
                                return $.intl.string($.t.eTVbt7);
                            case Y.d4z.GUILD_FORUM:
                                return $.intl.string($.t['5z1Xam']);
                            default:
                                return $.intl.string($.t['bw/b8P']);
                        }
                    })(o),
                    className: l()(ee.inputWrapper, { [ee.inputWrapperWithEmojiPicker]: r }),
                    inputClassName: d ? void 0 : l()(ee.inputInner, { [ee.inputInnerWithEmojiPicker]: r }),
                    prefixElement: d
                        ? null
                        : (0, i.jsx)(u, {
                              className: ee.inputPrefix,
                              size: 'xs',
                              color: 'currentColor'
                          }),
                    autoFocus: !0,
                    focusProps: { offset: { right: r ? -30 : 0 } }
                });
            };
        return (0, i.jsx)(_.FG, {
            children: (t) =>
                (0, i.jsxs)(m.xJW, {
                    title: c,
                    tag: 'label',
                    htmlFor: t,
                    titleClassName: ee.sectionTitle,
                    className: ee.name,
                    children: [
                        r
                            ? (0, i.jsxs)('div', {
                                  className: ee.nameInput,
                                  children: [
                                      (0, i.jsx)(p, { id: t }),
                                      (0, i.jsx)(el, {
                                          onEmojiPicked: this.insertEmojiAtPosition,
                                          isPrivateChannel: this.state.isPrivate,
                                          guildId: s
                                      })
                                  ]
                              })
                            : (0, i.jsx)(p, { id: t }),
                        e,
                        h
                    ]
                })
        });
    }
    renderType() {
        let { cloneChannel: e, applications: t, canCreateStoreChannel: n, canCreateAnnouncementChannel: s, canCreateStageChannel: r, canCreateForumChannel: l, canCreateMediaChannel: a } = this.props,
            { channelType: o, isPrivate: d } = this.state;
        if (null != e || o === Y.d4z.GUILD_CATEGORY) return;
        let c = null != t && t.length > 0;
        return (0, i.jsx)(m.xJW, {
            className: ee.type,
            title: $.intl.string($.t['7ZcXGx']),
            children: (0, i.jsx)(m.FXm, {
                options: (function (e) {
                    let { isPrivate: t, showStoreChannelOption: n, showAnnouncementChannelOption: s, canCreateStageChannel: r, canCreateForumChannel: l, canCreateMediaChannel: a } = e,
                        o = [
                            {
                                icon: t ? m.W4G : m.VL1,
                                label: $.intl.string($.t.pnuRXF),
                                value: Y.d4z.GUILD_TEXT,
                                description: $.intl.string($.t.Hf5Lb2)
                            }
                        ];
                    return (
                        o.push({
                            icon: t ? m.gjC : m.gj8,
                            label: $.intl.string($.t.Sx55Oj),
                            value: Y.d4z.GUILD_VOICE,
                            description: $.intl.string($.t.pqfkoK)
                        }),
                        l &&
                            o.push({
                                icon: t ? m.BUe : m.Mmi,
                                label: $.intl.string($.t.eAVIDw),
                                value: Y.d4z.GUILD_FORUM,
                                description: (0, i.jsxs)(m.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: ee.radioLabelDescription,
                                    children: [
                                        $.intl.string($.t.iZ5pgo),
                                        (0, i.jsx)('br', {}),
                                        $.intl.format($.t.fjSvsL, {
                                            onClick: () => {
                                                open(J.V8);
                                            }
                                        })
                                    ]
                                })
                            }),
                        a &&
                            o.push({
                                icon: t ? m.D7T : m.XBm,
                                label: $.intl.string($.t['6x6fVl']),
                                value: Y.d4z.GUILD_MEDIA,
                                description: (0, i.jsxs)(m.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: ee.radioLabelDescription,
                                    children: [
                                        $.intl.string($.t.JyCrwc),
                                        (0, i.jsx)('br', {}),
                                        $.intl.format($.t.fjSvsL, {
                                            onClick: () => {
                                                open(W.Z.getCreatorSupportArticleURL(Y.BhN.MEDIA_CHANNEL));
                                            }
                                        })
                                    ]
                                }),
                                isBeta: !0
                            }),
                        s &&
                            o.push({
                                icon: m.MqZ,
                                iconSize: 24,
                                label: $.intl.string($.t.qr9dEB),
                                value: Y.d4z.GUILD_ANNOUNCEMENT,
                                description: $.intl.string($.t.gBkfzs)
                            }),
                        n &&
                            o.push({
                                icon: m.lO_,
                                iconSize: 24,
                                label: $.intl.string($.t.SxjkXV),
                                value: Y.d4z.GUILD_STORE,
                                description: $.intl.string($.t.nmCPMD)
                            }),
                        r &&
                            o.push({
                                icon: m.ewx,
                                iconSize: 24,
                                label: $.intl.string($.t.pNWst7),
                                value: Y.d4z.GUILD_STAGE_VOICE,
                                description: $.intl.string($.t.VPAwgo)
                            }),
                        o.map((e) => {
                            let { icon: t, iconSize: n, label: s, value: r, description: l, isNew: a, isBeta: o } = e;
                            return {
                                name: (0, i.jsxs)('div', {
                                    className: ee.radioItemName,
                                    children: [
                                        (0, i.jsx)(
                                            t,
                                            ei(
                                                en(
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
                                                    className: ee.icon,
                                                    colorClass: ee.foreground
                                                }
                                            )
                                        ),
                                        (0, i.jsxs)('div', {
                                            children: [
                                                (0, i.jsxs)(m.Text, {
                                                    variant: 'text-md/medium',
                                                    className: ee.radioLabelName,
                                                    children: [
                                                        s,
                                                        (0, i.jsx)(es, {
                                                            isNew: a,
                                                            isBeta: o
                                                        })
                                                    ]
                                                }),
                                                'string' == typeof l
                                                    ? (0, i.jsx)(m.Text, {
                                                          variant: 'text-sm/normal',
                                                          color: 'header-secondary',
                                                          className: ee.radioLabelDescription,
                                                          children: l
                                                      })
                                                    : l
                                            ]
                                        })
                                    ]
                                }),
                                value: r,
                                radioBarClassName: ee.radioBar,
                                radioItemIconClassName: ee.radioBarIcon
                            };
                        })
                    );
                })({
                    isPrivate: d,
                    showStoreChannelOption: n && c,
                    showAnnouncementChannelOption: s,
                    canCreateStageChannel: r,
                    canCreateForumChannel: l,
                    canCreateMediaChannel: a
                }),
                value: o,
                size: m.FXm.Sizes.NOT_SET,
                onChange: this.handleTypeChange,
                itemInfoClassName: ee.radioBarLabel
            })
        });
    }
    renderStoreOptions() {
        let { applications: e } = this.props,
            { applicationId: t, skuId: n, branchId: r, showBranches: l, hasBranches: a } = this.state;
        if (null == e || 0 === e.length) throw Error('Unexpected empty applications');
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(m.vwX, {
                    tag: 'h5',
                    children: $.intl.string($.t.vPIW2N)
                }),
                (0, i.jsx)(m.q4e, {
                    options: e.map((e) => ({
                        label: e.name,
                        value: e.id
                    })),
                    placeholder: $.intl.string($.t['3XfCPT']),
                    value: t,
                    onChange: this.handleApplicationChange,
                    className: ee.storeChannelOptionSelector
                }),
                null != t
                    ? (0, i.jsxs)(s.Fragment, {
                          children: [
                              (0, i.jsx)(m.vwX, {
                                  tag: 'h5',
                                  children: $.intl.string($.t.XNIWFh)
                              }),
                              (0, i.jsx)(
                                  x.Z,
                                  {
                                      applicationId: t,
                                      onChange: this.handleSKUChange,
                                      selectedSkuId: n,
                                      className: ee.storeChannelOptionSelector
                                  },
                                  t
                              )
                          ]
                      })
                    : null,
                null != t && a
                    ? (0, i.jsxs)(m.j7V, {
                          hideBorder: !0,
                          onChange: this.handleShowBranchesToggle,
                          value: l,
                          note: $.intl.format($.t.UVXL1d, { devPortalUrl: Y.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT }),
                          children: [
                              (0, i.jsx)(m._m8, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: ee.switchIcon
                              }),
                              $.intl.string($.t['3e9mHx'])
                          ]
                      })
                    : null,
                null != t
                    ? (0, i.jsxs)(s.Fragment, {
                          children: [
                              l
                                  ? (0, i.jsx)(m.vwX, {
                                        tag: 'h5',
                                        children: $.intl.string($.t.o7DqFx)
                                    })
                                  : null,
                              (0, i.jsx)(
                                  N.Z,
                                  {
                                      applicationId: t,
                                      onChange: this.handleBranchChange,
                                      selectedBranchId: r,
                                      hide: !l,
                                      onHasBranchesChange: this.handleHasBranchesChange,
                                      className: ee.storeChannelOptionSelector
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
        let s = t === Y.d4z.GUILD_CATEGORY ? $.intl.string($.t.lEPAZ2) : $.intl.string($.t.aUI70t),
            r = t === Y.d4z.GUILD_CATEGORY ? $.intl.string($.t['RQUk6+']) : $.intl.string($.t.YguuKi);
        return (0, i.jsx)(
            m.xJW,
            {
                children: (0, i.jsxs)(m.j7V, {
                    hideBorder: !0,
                    onChange: this.handlePrivacyChange,
                    value: n,
                    note: r,
                    children: [
                        (0, i.jsx)(m.mBM, {
                            size: 'md',
                            color: 'currentColor',
                            className: ee.switchIcon
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
                className: l()(ee.createError, { [ee.addMemberError]: e }),
                children: (0, i.jsx)(m.Wn, {
                    messageType: m.QYI.ERROR,
                    children: t
                })
            });
    }
    renderFooter() {
        let e,
            { channelType: t, onClose: n } = this.props,
            { channelType: s } = this.state,
            { isPrivate: r } = this.state;
        e = t === Y.d4z.GUILD_CATEGORY ? $.intl.string($.t['ISN+ND']) : $.intl.string($.t['fUYU+v']);
        let l = r || s === Y.d4z.GUILD_STAGE_VOICE;
        return (0, i.jsx)(m.mzw, {
            className: ee.modalFooter,
            children: (0, i.jsxs)(m.hE2, {
                direction: 'horizontal-reverse',
                children: [
                    l
                        ? (0, i.jsx)(m.zxk, {
                              variant: 'primary',
                              text: $.intl.string($.t.PDTjLC),
                              type: 'button',
                              onClick: () => {
                                  this.setState({
                                      slide: 'ADD_MEMBERS',
                                      errors: {}
                                  });
                              },
                              disabled: !this.canSubmit()
                          })
                        : (0, i.jsx)(m.zxk, {
                              variant: 'primary',
                              text: e,
                              type: 'submit',
                              disabled: !this.canSubmit()
                          }),
                    (0, i.jsx)(m.zxk, {
                        variant: 'secondary',
                        text: $.intl.string($.t['ETE/oK']),
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
            (e = 0 === Object.keys(n).length ? $.intl.string($.t['5WxrcX']) : t === Y.d4z.GUILD_CATEGORY ? $.intl.string($.t['ISN+ND']) : $.intl.string($.t['fUYU+v'])),
            (0, i.jsx)(m.mzw, {
                children: (0, i.jsxs)(m.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, i.jsx)(m.zxk, {
                            variant: 'primary',
                            text: e,
                            type: 'submit',
                            disabled: !this.canSubmit()
                        }),
                        (0, i.jsx)(m.zxk, {
                            variant: 'secondary',
                            text: $.intl.string($.t['13/7kZ']),
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
                (0, i.jsxs)(m.hzk, {
                    className: ee.modalContent,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        e === Y.d4z.GUILD_STORE ? this.renderStoreOptions() : null,
                        (0, i.jsx)(v.Z, {
                            guildId: t,
                            channelType: e,
                            className: ee.channelTypeDescription
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
                (0, i.jsxs)(m.xBx, {
                    separator: !1,
                    children: [
                        (0, i.jsxs)(m.Kqy, {
                            gap: 4,
                            className: ee.header,
                            children: [
                                (0, i.jsx)(m.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: ee.title,
                                    children: l ? $.intl.string($.t['S/6zHB']) : $.intl.string($.t.dMJ3Y2)
                                }),
                                (0, i.jsxs)(m.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    className: ee.subtitle,
                                    children: [
                                        (0, i.jsx)(r, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: ee.subtitleIcon
                                        }),
                                        e
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsx)(m.olH, {
                            onClick: s,
                            className: ee.closeButton
                        })
                    ]
                }),
                this.renderError(!0),
                (0, i.jsx)(er, {
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
            children: (0, i.jsxs)(m.MyZ, {
                activeSlide: e,
                width: t,
                children: [
                    (0, i.jsx)(m.Mi4, {
                        id: 'CHANNEL_INFO',
                        impressionName: h.ImpressionNames.CHANNEL_ADD_INFO,
                        impressionProperties: n,
                        children: this.renderCreateChannelContent()
                    }),
                    (0, i.jsx)(m.Mi4, {
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
        return (0, i.jsx)(m.Y0X, {
            transitionState: e,
            className: ee.modal,
            'aria-labelledby': this.headerId,
            size: m.CgR.DYNAMIC,
            parentComponent: 'CreateChannel',
            children: (0, i.jsx)('form', {
                onSubmit: this.handleSubmit,
                children: this.renderSlides()
            })
        });
    }
    constructor(e) {
        (super(e),
            et(this, 'headerId', (0, _.hQ)()),
            et(this, '_input', void 0),
            et(this, 'setInputRef', (e) => {
                this._input = e;
            }),
            et(this, 'handleNameChange', (e) => {
                var t, n;
                let { channelType: i } = this.state;
                R.xL.has(i) && (e = (0, V.Nj)(e));
                let s = null != (n = null == (t = this._input) ? void 0 : t.selectionStart) ? n : 0;
                this.setState({ name: e }, () => {
                    var e;
                    null == (e = this._input) || e.setSelectionRange(s, s);
                });
            }),
            et(this, 'insertEmojiAtPosition', (e) => {
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
            et(this, 'handleTypeChange', (e) => {
                let { value: t } = e,
                    { name: n } = this.state;
                (R.xL.has(t) && (n = (0, V.Nj)(n)),
                    t === Y.d4z.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
                    this.setState({
                        channelType: t,
                        name: n
                    }));
            }),
            et(this, 'handlePrivacyChange', (e) => {
                this.setState({ isPrivate: e });
            }),
            et(this, 'handleApplicationChange', (e) => {
                this.setState({ applicationId: e });
            }),
            et(this, 'handleSKUChange', (e) => {
                this.setState({ skuId: e });
            }),
            et(this, 'handleShowBranchesToggle', (e) => {
                this.setState({
                    showBranches: e,
                    branchId: null
                });
            }),
            et(this, 'handleBranchChange', (e) => {
                this.setState({ branchId: e });
            }),
            et(this, 'handleHasBranchesChange', (e) => {
                this.setState({ hasBranches: e });
            }),
            et(this, 'handleSubmit', async (e) => {
                let t, n, i;
                e.preventDefault();
                let { cloneChannel: s, categoryId: r, user: l, memberRoleIds: a, isAdmin: o, onClose: d, owner: h } = this.props,
                    { name: u, pendingPermissionOverwrites: p, channelType: m, skuId: C, branchId: N, isPrivate: x } = this.state,
                    j = this.getGuildId();
                if (null != j) {
                    if (null != s) ((t = c().values(s.permissionOverwrites)), (n = s.bitrate), (i = s.userLimit));
                    else if (m === Y.d4z.GUILD_ANNOUNCEMENT) t = (0, V.rt)(j);
                    else {
                        if (x) {
                            t = (0, V.oQ)(j, m, [], !0);
                            let e = (0, O.Tj)(p, m);
                            e.length > 0 && (t = t.concat(e));
                            let n = null != h && l.id === h.id;
                            t.some((e) => a.has(e.id)) || o || n || t.push((0, V.jZ)(l.id, m));
                        }
                        m === Y.d4z.GUILD_STAGE_VOICE &&
                            ((t = []),
                            Object.values(p).forEach((e) => {
                                let { row: n } = e;
                                null != n.id && '' !== n.id && (n.rowType === q.aC.ROLE ? t.push((0, M.A)(n.id, E.BN.ROLE)) : n.rowType === q.aC.MEMBER && t.push((0, M.A)(n.id, E.BN.MEMBER)));
                            }));
                    }
                    this.setState({
                        errors: {},
                        submitting: !0
                    });
                    try {
                        let e = await g.Z.createChannel({
                            guildId: j,
                            type: m,
                            name: u,
                            permissionOverwrites: t,
                            bitrate: n,
                            userLimit: i,
                            parentId: m !== Y.d4z.GUILD_CATEGORY ? r : null,
                            skuId: C,
                            branchId: N
                        });
                        if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                        let s = e.body;
                        (R.xL.has(m) && (0, U.XU)(s.guild_id, s.id), this.setState({ submitting: !1 }), d());
                    } catch (e) {
                        null != e.body && 'object' == typeof e.body
                            ? this.setState({
                                  errors: e.body,
                                  submitting: !1
                              })
                            : this.setState({
                                  errors: { message: $.intl.string($.t.fEptJC) },
                                  submitting: !1
                              });
                    }
                }
            }));
        let { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        ((this.state = {
            channelType: null != t ? t : Y.d4z.GUILD_TEXT,
            name: null != n ? (0, f.F6)(n, F.default, H.Z) : null != i ? i : '',
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
let eo = s.forwardRef(function (e, t) {
    let { channelType: n, guildId: s, cloneChannelId: r } = e,
        l = (0, p.cj)([B.Z, F.default, k.Z, w.Z, Z.ZP], () => {
            var e, t, i;
            let l = B.Z.getGuild(s),
                a = F.default.getCurrentUser();
            o()(null != a, 'CreateChannel: user cannot be undefined');
            let d = null != l && null != l.ownerId ? F.default.getUser(l.ownerId) : null,
                c = k.Z.can(Y.Plq.ADMINISTRATOR, l),
                h = w.Z.getChannel(r);
            return {
                guild: l,
                canCreateStoreChannel: null != l && l.features.has(Y.oNc.COMMERCE),
                canCreateAnnouncementChannel: null != l && l.features.has(Y.oNc.NEWS),
                user: a,
                owner: d,
                memberRoles: null != (t = null == (e = Z.ZP.getMember(s, a.id)) ? void 0 : e.roles) ? t : [],
                canViewChannels: k.Z.can(Y.Plq.VIEW_CHANNEL, l),
                canConnect: k.Z.can(Y.Plq.CONNECT, l),
                isAdmin: c,
                cloneChannel: h,
                channelType: null != (i = null == h ? void 0 : h.type) ? i : n,
                canManageRoles: k.Z.can(Y.Plq.MANAGE_ROLES, l),
                canManageChannels: k.Z.can(Y.Plq.MANAGE_CHANNELS, l)
            };
        }),
        a = (0, p.Wu)([I.Z], () =>
            I.Z.getGuildApplicationIds(s)
                .map((e) => I.Z.getApplication(e))
                .filter(X.lm)
        ),
        d = new Set(l.memberRoles),
        { canManageRoles: c, canManageChannels: h } = l,
        u = (0, z.m)(s) && c && h,
        m = (0, L.W3)(s),
        g = (0, P.Ui)(null == l ? void 0 : l.guild),
        C = (0, b.s)({
            guildId: s,
            location: 'ConnectedCreateChannel'
        });
    return (0, i.jsx)(
        ea,
        ei(en({}, e, l), {
            memberRoleIds: d,
            applications: a,
            canCreateStageChannel: u,
            canCreateForumChannel: m,
            canCreateMediaChannel: g,
            ref: t,
            width: 496,
            isEmojiInChannelNamesEnabled: C
        })
    );
});
