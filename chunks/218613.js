n.d(t, {
    default: () => eo,
    p: () => es
}),
    n(539854),
    n(953529),
    n(388685),
    n(781311),
    n(415506);
var i = n(255367),
    s = n(73800),
    l = n(120356),
    r = n.n(l),
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
    I = n(367907),
    j = n(812206),
    b = n(429673),
    O = n(933557),
    f = n(636816),
    v = n(605436),
    S = n(185413),
    A = n(313201),
    _ = n(318766),
    y = n(907040),
    T = n(906411),
    L = n(688465),
    D = n(456269),
    P = n(312146),
    U = n(703656),
    R = n(146085),
    z = n(60222),
    G = n(388131),
    M = n(131704),
    w = n(592125),
    Z = n(271383),
    k = n(430824),
    B = n(496675),
    F = n(699516),
    H = n(594174),
    V = n(934415),
    X = n(823379),
    Y = n(63063),
    W = n(981631),
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                et(e, t, n[t]);
            });
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
            : !0 === n && (s = (0, i.jsx)(L.Z, { className: ee.newBadge })),
        s
    );
}
function el(e) {
    let { onChange: t, guildId: n, channelType: l, description: r } = e,
        [a, o] = s.useState({}),
        d = (0, p.e7)([k.Z], () => k.Z.getGuild(n)),
        c = l === W.d4z.GUILD_STAGE_VOICE;
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
                  permission: c ? R.yP : (0, M.CG)(l),
                  pendingAdditions: a,
                  setPendingAdditions: o,
                  isStageChannel: c,
                  description: r
              })
          });
}
function er(e) {
    let { onEmojiPicked: t, guildId: n } = e,
        l = s.useRef(null),
        r = s.useMemo(
            () => ({
                popoutLocation: {
                    page: W.ZY5.CREATE_CHANNEL_MODAL,
                    section: W.jXE.CHANNEL_NAME,
                    object: W.qAy.EMOJI_PICKER_BUTTON
                }
            }),
            []
        ),
        a = s.useCallback(
            (e) => {
                let { closePopout: s } = e;
                return (0, i.jsx)(y.Z, {
                    channel: null,
                    guildId: n,
                    pickerIntention: K.Hz.CHANNEL_NAME,
                    closePopout: s,
                    onNavigateAway: s,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        null != n && n.type === T.B.UNICODE && t(n.surrogates), i && s();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: r
                });
            },
            [r, n, t]
        );
    return (0, i.jsx)(m.yRy, {
        targetElementRef: l,
        renderPopout: a,
        animation: m.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(
                _.Z,
                ei(en({}, e), {
                    ref: l,
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
        i && null == n && C.Z.fetchApplications(t),
            I.ZP.trackWithMetadata(W.rMx.OPEN_MODAL, { type: 'Create Channel' }),
            D.O2.trackExposure({
                guildId: t,
                location: '45d324_1'
            });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate && this.state.isPrivate && this.state.channelType === W.d4z.GUILD_ANNOUNCEMENT && this.setState({ channelType: W.d4z.GUILD_TEXT }), !t.isPrivate && this.state.isPrivate && I.ZP.trackWithMetadata(W.rMx.OPEN_MODAL, { type: 'Create Private Channel' });
    }
    getGuildId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.guildId;
    }
    canSubmit() {
        let { canViewChannels: e, canConnect: t, transitionState: n } = this.props,
            { isPrivate: i, channelType: s, skuId: l, name: r, submitting: a } = this.state;
        return !a && n !== m.Dvm.EXITING && '' !== r && '' !== r.trim() && (!i || !!(0, v.nT)(s, e, t)) && (s !== W.d4z.GUILD_STORE || null != l);
    }
    getIconComponent() {
        let { isPrivate: e, channelType: t } = this.state;
        switch (t) {
            case W.d4z.GUILD_TEXT:
                return e ? m.W4G : m.VL1;
            case W.d4z.GUILD_FORUM:
                return m.Mmi;
            case W.d4z.GUILD_MEDIA:
                return m.XBm;
            case W.d4z.GUILD_VOICE:
                return e ? m.gjC : m.gj8;
            case W.d4z.GUILD_STORE:
                return m.lO_;
            case W.d4z.GUILD_ANNOUNCEMENT:
                return m.MqZ;
            case W.d4z.GUILD_STAGE_VOICE:
                return m.ewx;
            default:
                return (0, M.zi)(t) ? m.VL1 : Q.Vq;
        }
    }
    renderHeader() {
        var e;
        let t,
            { cloneChannel: n, categoryId: s, onClose: l } = this.props,
            { channelType: r } = this.state,
            a = null != n ? $.intl.string($.t.dEaPc3) : r === W.d4z.GUILD_CATEGORY ? $.intl.string($.t['ISN+ND']) : $.intl.string($.t['fUYU+v']);
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
                    onClick: l,
                    className: ee.closeButton
                })
            ]
        });
    }
    renderName() {
        let e,
            { cloneChannel: t, guildId: s, isEmojiInChannelNamesEnabled: l } = this.props,
            { errors: a, channelType: o } = this.state;
        (null == a ? void 0 : a.name) != null &&
            (e = (0, i.jsx)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-danger',
                className: ee.error,
                children: a.name
            }));
        let d = o === W.d4z.GUILD_CATEGORY,
            c = d ? $.intl.string($.t.OCAkGB) : $.intl.string($.t.PVbHDg),
            h =
                null != t
                    ? (0, i.jsx)(m.R94, {
                          className: ee.channelNameNote,
                          type: m.R94.Types.DESCRIPTION,
                          children: $.intl.format($.t.s2ZzZW, { name: (0, O.F6)(t, H.default, F.Z, !0) })
                      })
                    : o === W.d4z.GUILD_FORUM
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
                            case W.d4z.GUILD_CATEGORY:
                                return $.intl.string($.t.eTVbt7);
                            case W.d4z.GUILD_FORUM:
                                return $.intl.string($.t['5z1Xam']);
                            default:
                                return $.intl.string($.t['bw/b8P']);
                        }
                    })(o),
                    className: r()(ee.inputWrapper, { [ee.inputWrapperWithEmojiPicker]: l }),
                    inputClassName: d ? void 0 : r()(ee.inputInner, { [ee.inputInnerWithEmojiPicker]: l }),
                    prefixElement: d
                        ? null
                        : (0, i.jsx)(u, {
                              className: ee.inputPrefix,
                              size: 'xs',
                              color: 'currentColor'
                          }),
                    autoFocus: !0,
                    focusProps: { offset: { right: l ? -30 : 0 } }
                });
            };
        return (0, i.jsx)(A.FG, {
            children: (t) =>
                (0, i.jsxs)(m.xJW, {
                    title: c,
                    tag: 'label',
                    htmlFor: t,
                    titleClassName: ee.sectionTitle,
                    className: ee.name,
                    children: [
                        l
                            ? (0, i.jsxs)('div', {
                                  className: ee.nameInput,
                                  children: [
                                      (0, i.jsx)(p, { id: t }),
                                      (0, i.jsx)(er, {
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
        let { cloneChannel: e, applications: t, canCreateStoreChannel: n, canCreateAnnouncementChannel: s, canCreateStageChannel: l, canCreateForumChannel: r, canCreateMediaChannel: a } = this.props,
            { channelType: o, isPrivate: d } = this.state;
        if (null != e || o === W.d4z.GUILD_CATEGORY) return;
        let c = null != t && t.length > 0;
        return (0, i.jsx)(m.xJW, {
            className: ee.type,
            title: $.intl.string($.t['7ZcXGx']),
            children: (0, i.jsx)(m.FXm, {
                options: (function (e) {
                    let { isPrivate: t, showStoreChannelOption: n, showAnnouncementChannelOption: s, canCreateStageChannel: l, canCreateForumChannel: r, canCreateMediaChannel: a } = e,
                        o = [
                            {
                                icon: t ? m.W4G : m.VL1,
                                label: $.intl.string($.t.pnuRXF),
                                value: W.d4z.GUILD_TEXT,
                                description: $.intl.string($.t.Hf5Lb2)
                            }
                        ];
                    return (
                        o.push({
                            icon: t ? m.gjC : m.gj8,
                            label: $.intl.string($.t.Sx55Oj),
                            value: W.d4z.GUILD_VOICE,
                            description: $.intl.string($.t.pqfkoK)
                        }),
                        r &&
                            o.push({
                                icon: t ? m.BUe : m.Mmi,
                                label: $.intl.string($.t.eAVIDw),
                                value: W.d4z.GUILD_FORUM,
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
                                value: W.d4z.GUILD_MEDIA,
                                description: (0, i.jsxs)(m.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: ee.radioLabelDescription,
                                    children: [
                                        $.intl.string($.t.JyCrwc),
                                        (0, i.jsx)('br', {}),
                                        $.intl.format($.t.fjSvsL, {
                                            onClick: () => {
                                                open(Y.Z.getCreatorSupportArticleURL(W.BhN.MEDIA_CHANNEL));
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
                                value: W.d4z.GUILD_ANNOUNCEMENT,
                                description: $.intl.string($.t.gBkfzs)
                            }),
                        n &&
                            o.push({
                                icon: m.lO_,
                                iconSize: 24,
                                label: $.intl.string($.t.SxjkXV),
                                value: W.d4z.GUILD_STORE,
                                description: $.intl.string($.t.nmCPMD)
                            }),
                        l &&
                            o.push({
                                icon: m.ewx,
                                iconSize: 24,
                                label: $.intl.string($.t.pNWst7),
                                value: W.d4z.GUILD_STAGE_VOICE,
                                description: $.intl.string($.t.VPAwgo)
                            }),
                        o.map((e) => {
                            let { icon: t, iconSize: n, label: s, value: l, description: r, isNew: a, isBeta: o } = e;
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
                                                'string' == typeof r
                                                    ? (0, i.jsx)(m.Text, {
                                                          variant: 'text-sm/normal',
                                                          color: 'header-secondary',
                                                          className: ee.radioLabelDescription,
                                                          children: r
                                                      })
                                                    : r
                                            ]
                                        })
                                    ]
                                }),
                                value: l,
                                radioBarClassName: ee.radioBar,
                                radioItemIconClassName: ee.radioBarIcon
                            };
                        })
                    );
                })({
                    isPrivate: d,
                    showStoreChannelOption: n && c,
                    showAnnouncementChannelOption: s,
                    canCreateStageChannel: l,
                    canCreateForumChannel: r,
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
            { applicationId: t, skuId: n, branchId: l, showBranches: r, hasBranches: a } = this.state;
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
                          value: r,
                          note: $.intl.format($.t.UVXL1d, { devPortalUrl: W.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT }),
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
                              r
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
                                      selectedBranchId: l,
                                      hide: !r,
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
        if (null != e || t === W.d4z.GUILD_ANNOUNCEMENT) return null;
        let s = t === W.d4z.GUILD_CATEGORY ? $.intl.string($.t.lEPAZ2) : $.intl.string($.t.aUI70t),
            l = t === W.d4z.GUILD_CATEGORY ? $.intl.string($.t['RQUk6+']) : $.intl.string($.t.YguuKi);
        return (0, i.jsx)(
            m.xJW,
            {
                children: (0, i.jsxs)(m.j7V, {
                    hideBorder: !0,
                    onChange: this.handlePrivacyChange,
                    value: n,
                    note: l,
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
            { channelType: n, isPrivate: s, errors: l } = this.state,
            { canConnect: a, canViewChannels: o } = this.props;
        if (Object.values(l).length > 0) {
            if (null != l.message && '' !== l.message) t = l.message;
            else if (e || null == l.name) {
                let e = Object.values(l)[0];
                e.length > 0 && (t = e);
            }
        } else s && !(0, v.nT)(n, o, a) && (t = (0, v.$7)(n));
        if (null != t)
            return (0, i.jsx)('div', {
                className: r()(ee.createError, { [ee.addMemberError]: e }),
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
            { isPrivate: l } = this.state;
        e = t === W.d4z.GUILD_CATEGORY ? $.intl.string($.t['ISN+ND']) : $.intl.string($.t['fUYU+v']);
        let r = l || s === W.d4z.GUILD_STAGE_VOICE;
        return (0, i.jsxs)(m.mzw, {
            className: ee.modalFooter,
            children: [
                r
                    ? (0, i.jsx)(m.zxk, {
                          type: 'button',
                          onClick: () => {
                              this.setState({
                                  slide: 'ADD_MEMBERS',
                                  errors: {}
                              });
                          },
                          disabled: !this.canSubmit(),
                          children: $.intl.string($.t.PDTjLC)
                      })
                    : (0, i.jsx)(m.zxk, {
                          type: 'submit',
                          disabled: !this.canSubmit(),
                          children: e
                      }),
                (0, i.jsx)(m.zxk, {
                    onClick: n,
                    look: m.zxk.Looks.LINK,
                    color: m.zxk.Colors.PRIMARY,
                    children: $.intl.string($.t['ETE/oK'])
                })
            ]
        });
    }
    renderAddMemberFooter() {
        let e,
            { channelType: t } = this.props,
            { pendingPermissionOverwrites: n } = this.state;
        return (
            (e = 0 === Object.keys(n).length ? $.intl.string($.t['5WxrcX']) : t === W.d4z.GUILD_CATEGORY ? $.intl.string($.t['ISN+ND']) : $.intl.string($.t['fUYU+v'])),
            (0, i.jsxs)(m.mzw, {
                children: [
                    (0, i.jsx)(m.zxk, {
                        type: 'submit',
                        disabled: !this.canSubmit(),
                        children: e
                    }),
                    (0, i.jsx)(m.zxk, {
                        onClick: () => {
                            this.setState({ slide: 'CHANNEL_INFO' });
                        },
                        look: m.zxk.Looks.LINK,
                        color: m.zxk.Colors.PRIMARY,
                        children: $.intl.string($.t['13/7kZ'])
                    })
                ]
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
                        e === W.d4z.GUILD_STORE ? this.renderStoreOptions() : null,
                        (0, i.jsx)(f.Z, {
                            guildId: t,
                            channelType: e,
                            className: ee.channelTypeDescription
                        }),
                        e === W.d4z.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions()
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
            l = this.getIconComponent(),
            r = t === W.d4z.GUILD_STAGE_VOICE;
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
                                    children: r ? $.intl.string($.t['S/6zHB']) : $.intl.string($.t.dMJ3Y2)
                                }),
                                (0, i.jsxs)(m.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    className: ee.subtitle,
                                    children: [
                                        (0, i.jsx)(l, {
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
                (0, i.jsx)(el, {
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
        super(e),
            et(this, 'headerId', (0, A.hQ)()),
            et(this, '_input', void 0),
            et(this, 'setInputRef', (e) => {
                this._input = e;
            }),
            et(this, 'handleNameChange', (e) => {
                var t, n;
                let { channelType: i } = this.state;
                M.xL.has(i) && (e = (0, V.Nj)(e));
                let s = null != (n = null == (t = this._input) ? void 0 : t.selectionStart) ? n : 0;
                this.setState({ name: e }, () => {
                    var e;
                    null == (e = this._input) || e.setSelectionRange(s, s);
                });
            }),
            et(this, 'insertEmojiAtPosition', (e) => {
                var t, n, i, s;
                let l = null != (i = null == (t = this._input) ? void 0 : t.selectionStart) ? i : 0,
                    r = null != (s = null == (n = this._input) ? void 0 : n.selectionEnd) ? s : 0,
                    a = this.state.name,
                    o = a.substring(0, l) + e + a.substring(r);
                this.setState({ name: o }, () => {
                    var t, n;
                    let i = l + e.length;
                    null == (t = this._input) || t.focus(), null == (n = this._input) || n.setSelectionRange(i, i);
                });
            }),
            et(this, 'handleTypeChange', (e) => {
                let { value: t } = e,
                    { name: n } = this.state;
                M.xL.has(t) && (n = (0, V.Nj)(n)),
                    t === W.d4z.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
                    this.setState({
                        channelType: t,
                        name: n
                    });
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
                let { cloneChannel: s, categoryId: l, user: r, memberRoleIds: a, isAdmin: o, onClose: d, owner: h } = this.props,
                    { name: u, pendingPermissionOverwrites: p, channelType: m, skuId: C, branchId: N, isPrivate: x } = this.state,
                    I = this.getGuildId();
                if (null != I) {
                    if (null != s) (t = c().values(s.permissionOverwrites)), (n = s.bitrate), (i = s.userLimit);
                    else if (m === W.d4z.GUILD_ANNOUNCEMENT) t = (0, V.rt)(I);
                    else {
                        if (x) {
                            t = (0, V.oQ)(I, m, [], !0);
                            let e = (0, v.Tj)(p, m);
                            e.length > 0 && (t = t.concat(e));
                            let n = null != h && r.id === h.id;
                            t.some((e) => a.has(e.id)) || o || n || t.push((0, V.jZ)(r.id, m));
                        }
                        m === W.d4z.GUILD_STAGE_VOICE &&
                            ((t = []),
                            Object.values(p).forEach((e) => {
                                let { row: n } = e;
                                null != n.id && '' !== n.id && (n.rowType === q.aC.ROLE ? t.push((0, G.A)(n.id, E.BN.ROLE)) : n.rowType === q.aC.MEMBER && t.push((0, G.A)(n.id, E.BN.MEMBER)));
                            }));
                    }
                    this.setState({
                        errors: {},
                        submitting: !0
                    });
                    try {
                        let e = await g.Z.createChannel({
                            guildId: I,
                            type: m,
                            name: u,
                            permissionOverwrites: t,
                            bitrate: n,
                            userLimit: i,
                            parentId: m !== W.d4z.GUILD_CATEGORY ? l : null,
                            skuId: C,
                            branchId: N
                        });
                        if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                        let s = e.body;
                        M.xL.has(m) && (0, U.XU)(s.guild_id, s.id), this.setState({ submitting: !1 }), d();
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
            });
        let { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        (this.state = {
            channelType: null != t ? t : W.d4z.GUILD_TEXT,
            name: null != n ? (0, O.F6)(n, H.default, F.Z) : null != i ? i : '',
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
            (this.handlePermissionOverwriteChange = this.handlePermissionOverwriteChange.bind(this));
    }
}
let eo = s.forwardRef(function (e, t) {
    let { channelType: n, guildId: s, cloneChannelId: l } = e,
        r = (0, p.cj)([k.Z, H.default, B.Z, w.Z, Z.ZP], () => {
            var e, t, i;
            let r = k.Z.getGuild(s),
                a = H.default.getCurrentUser();
            o()(null != a, 'CreateChannel: user cannot be undefined');
            let d = null != r && null != r.ownerId ? H.default.getUser(r.ownerId) : null,
                c = B.Z.can(W.Plq.ADMINISTRATOR, r),
                h = w.Z.getChannel(l);
            return {
                guild: r,
                canCreateStoreChannel: null != r && r.hasFeature(W.oNc.COMMERCE),
                canCreateAnnouncementChannel: null != r && r.hasFeature(W.oNc.NEWS),
                user: a,
                owner: d,
                memberRoles: null != (t = null == (e = Z.ZP.getMember(s, a.id)) ? void 0 : e.roles) ? t : [],
                canViewChannels: B.Z.can(W.Plq.VIEW_CHANNEL, r),
                canConnect: B.Z.can(W.Plq.CONNECT, r),
                isAdmin: c,
                cloneChannel: h,
                channelType: null != (i = null == h ? void 0 : h.type) ? i : n,
                canManageRoles: B.Z.can(W.Plq.MANAGE_ROLES, r),
                canManageChannels: B.Z.can(W.Plq.MANAGE_CHANNELS, r)
            };
        }),
        a = (0, p.Wu)([j.Z], () =>
            j.Z.getGuildApplicationIds(s)
                .map((e) => j.Z.getApplication(e))
                .filter(X.lm)
        ),
        d = new Set(r.memberRoles),
        { canManageRoles: c, canManageChannels: h } = r,
        u = (0, z.m)(s) && c && h,
        m = (0, D.W3)(s),
        g = (0, P.Ui)(null == r ? void 0 : r.guild),
        C = (0, b.sc)({
            guildId: s,
            location: 'ConnectedCreateChannel'
        });
    return (0, i.jsx)(
        ea,
        ei(en({}, e, r), {
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
