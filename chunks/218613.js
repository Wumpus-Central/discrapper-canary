(n.d(t, {
    default: () => ed,
    p: () => er
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
    j = n(911969),
    I = n(367907),
    b = n(812206),
    f = n(429673),
    v = n(933557),
    O = n(636816),
    S = n(605436),
    _ = n(185413),
    y = n(313201),
    A = n(318766),
    T = n(907040),
    D = n(906411),
    L = n(688465),
    P = n(456269),
    U = n(312146),
    G = n(703656),
    z = n(146085),
    M = n(60222),
    R = n(388131),
    w = n(131704),
    Z = n(592125),
    B = n(271383),
    k = n(430824),
    H = n(496675),
    F = n(699516),
    V = n(594174),
    X = n(934415),
    W = n(823379),
    Y = n(63063),
    q = n(981631),
    K = n(71080),
    J = n(185923),
    Q = n(710352),
    $ = n(231338),
    ee = n(388032),
    et = n(37448);
function en(e, t, n) {
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
function ei(e) {
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
                en(e, t, n[t]);
            }));
    }
    return e;
}
function es(e, t) {
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
function er(e) {
    let { isNew: t, isBeta: n } = e,
        s = null;
    return (
        !0 === t
            ? (s = (0, i.jsx)(g.IGR, {
                  text: ee.intl.string(ee.t.psHMa2),
                  className: et.newBadge,
                  color: u.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER
              }))
            : !0 === n && (s = (0, i.jsx)(L.Z, { className: et.newBadge })),
        s
    );
}
function el(e) {
    let { onChange: t, guildId: n, channelType: r, description: l } = e,
        [a, o] = s.useState({}),
        d = (0, p.e7)([k.Z], () => k.Z.getGuild(n)),
        c = r === q.d4z.GUILD_STAGE_VOICE;
    return (s.useEffect(() => {
        t(a);
    }, [a, t]),
    null == d)
        ? null
        : (0, i.jsx)(g.hzk, {
              className: et.addMembersContainer,
              children: (0, i.jsx)(_.U, {
                  guild: d,
                  channel: null,
                  permission: c ? z.yP : (0, w.CG)(r),
                  pendingAdditions: a,
                  setPendingAdditions: o,
                  isStageChannel: c,
                  description: l
              })
          });
}
function ea(e) {
    let { onEmojiPicked: t, guildId: n } = e,
        r = s.useRef(null),
        l = s.useMemo(
            () => ({
                popoutLocation: {
                    page: q.ZY5.CREATE_CHANNEL_MODAL,
                    section: q.jXE.CHANNEL_NAME,
                    object: q.qAy.EMOJI_PICKER_BUTTON
                }
            }),
            []
        ),
        a = s.useCallback(
            (e) => {
                let { closePopout: s } = e;
                return (0, i.jsx)(T.Z, {
                    channel: null,
                    guildId: n,
                    pickerIntention: J.Hz.CHANNEL_NAME,
                    closePopout: s,
                    onNavigateAway: s,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        (null != n && n.type === D.B.UNICODE && t(n.surrogates), i && s());
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
                es(ei({}, e), {
                    ref: r,
                    active: n,
                    className: et.emojiButton,
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
class eo extends s.PureComponent {
    componentDidMount() {
        let { _input: e } = this;
        null != e && e.select();
        let { guildId: t, applications: n, canCreateStoreChannel: i } = this.props;
        (i && null == n && N.Z.fetchApplications(t),
            I.ZP.trackWithMetadata(q.rMx.OPEN_MODAL, { type: 'Create Channel' }),
            P.O2.trackExposure({
                guildId: t,
                location: '45d324_1'
            }));
    }
    componentDidUpdate(e, t) {
        (!t.isPrivate && this.state.isPrivate && this.state.channelType === q.d4z.GUILD_ANNOUNCEMENT && this.setState({ channelType: q.d4z.GUILD_TEXT }), !t.isPrivate && this.state.isPrivate && I.ZP.trackWithMetadata(q.rMx.OPEN_MODAL, { type: 'Create Private Channel' }));
    }
    getGuildId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.guildId;
    }
    canSubmit() {
        let { canViewChannels: e, canConnect: t, transitionState: n } = this.props,
            { isPrivate: i, channelType: s, skuId: r, name: l, submitting: a } = this.state;
        return !a && n !== g.Dvm.EXITING && '' !== l && '' !== l.trim() && (!i || !!(0, S.nT)(s, e, t)) && (s !== q.d4z.GUILD_STORE || null != r);
    }
    getIconComponent() {
        let { isPrivate: e, channelType: t } = this.state;
        switch (t) {
            case q.d4z.GUILD_TEXT:
                return e ? g.W4G : g.VL1;
            case q.d4z.GUILD_FORUM:
                return g.Mmi;
            case q.d4z.GUILD_MEDIA:
                return g.XBm;
            case q.d4z.GUILD_VOICE:
                return e ? g.gjC : g.gj8;
            case q.d4z.GUILD_STORE:
                return g.lO_;
            case q.d4z.GUILD_ANNOUNCEMENT:
                return g.MqZ;
            case q.d4z.GUILD_STAGE_VOICE:
                return g.ewx;
            default:
                return (0, w.zi)(t) ? g.VL1 : $.Vq;
        }
    }
    renderHeader() {
        var e;
        let t,
            { cloneChannel: n, categoryId: s, onClose: r } = this.props,
            { channelType: l } = this.state,
            a = null != n ? ee.intl.string(ee.t.dEaPc3) : l === q.d4z.GUILD_CATEGORY ? ee.intl.string(ee.t['ISN+ND']) : ee.intl.string(ee.t['fUYU+v']);
        if (null != s) {
            let n = Z.Z.getChannel(s);
            t = (0, i.jsx)(g.Text, {
                variant: 'text-xs/normal',
                color: 'header-secondary',
                className: et.subtitle,
                children: ee.intl.format(ee.t.L1zJgY, { categoryName: null != (e = null == n ? void 0 : n.name) ? e : '' })
            });
        }
        return (0, i.jsxs)(g.xBx, {
            separator: !1,
            children: [
                (0, i.jsxs)('div', {
                    className: et.header,
                    children: [
                        (0, i.jsx)(g.X6q, {
                            id: this.headerId,
                            variant: 'heading-lg/semibold',
                            className: et.title,
                            children: a
                        }),
                        t
                    ]
                }),
                (0, i.jsx)(g.olH, {
                    onClick: r,
                    className: et.closeButton
                })
            ]
        });
    }
    renderName() {
        let e,
            { cloneChannel: t, guildId: s, isEmojiInChannelNamesEnabled: r } = this.props,
            { errors: a, channelType: o } = this.state;
        (null == a ? void 0 : a.name) != null &&
            (e = (0, i.jsx)(g.Text, {
                variant: 'text-xs/normal',
                color: 'text-danger',
                className: et.error,
                children: a.name
            }));
        let d = o === q.d4z.GUILD_CATEGORY,
            c = d ? ee.intl.string(ee.t.OCAkGB) : ee.intl.string(ee.t.PVbHDg),
            h =
                null != t
                    ? (0, i.jsx)(g.R94, {
                          className: et.channelNameNote,
                          type: g.R94.Types.DESCRIPTION,
                          children: ee.intl.format(ee.t.s2ZzZW, { name: (0, v.F6)(t, V.default, F.Z, !0) })
                      })
                    : o === q.d4z.GUILD_FORUM
                      ? (0, i.jsx)(g.R94, {
                            className: et.channelNameNote,
                            type: g.R94.Types.DESCRIPTION,
                            children: ee.intl.format(ee.t.tbVWyc, {
                                forumUpsellHook: (e, t) =>
                                    (0, i.jsx)(
                                        g.eee,
                                        {
                                            onClick: () =>
                                                (0, g.ZDy)(async () => {
                                                    let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                                                    return (t) => (0, i.jsx)(e, es(ei({}, t), { guildId: s }));
                                                }),
                                            children: e
                                        },
                                        t
                                    )
                            })
                        })
                      : null,
            u = this.getIconComponent(),
            p = {
                value: this.state.name,
                onChange: this.handleNameChange,
                inputRef: this.setInputRef,
                maxLength: 100,
                placeholder: (function (e) {
                    switch (e) {
                        case q.d4z.GUILD_CATEGORY:
                            return ee.intl.string(ee.t.eTVbt7);
                        case q.d4z.GUILD_FORUM:
                            return ee.intl.string(ee.t['5z1Xam']);
                        default:
                            return ee.intl.string(ee.t['bw/b8P']);
                    }
                })(o),
                className: l()(et.inputWrapper, { [et.inputWrapperWithEmojiPicker]: r }),
                inputClassName: d ? void 0 : l()(et.inputInner, { [et.inputInnerWithEmojiPicker]: r }),
                prefixElement: d
                    ? null
                    : (0, i.jsx)(u, {
                          className: et.inputPrefix,
                          size: 'xs',
                          color: 'currentColor'
                      }),
                autoFocus: !0,
                focusProps: { offset: { right: r ? -30 : 0 } }
            };
        return (0, i.jsx)(y.FG, {
            children: (t) =>
                (0, i.jsxs)(g.xJW, {
                    title: c,
                    tag: 'label',
                    htmlFor: t,
                    titleClassName: et.sectionTitle,
                    className: et.name,
                    children: [
                        r
                            ? (0, i.jsxs)('div', {
                                  className: et.nameInput,
                                  children: [
                                      (0, i.jsx)(m.Is, ei({ id: t }, p), t),
                                      (0, i.jsx)(ea, {
                                          onEmojiPicked: this.insertEmojiAtPosition,
                                          isPrivateChannel: this.state.isPrivate,
                                          guildId: s
                                      })
                                  ]
                              })
                            : (0, i.jsx)(m.Is, ei({ id: t }, p), t),
                        e,
                        h
                    ]
                })
        });
    }
    renderType() {
        let { cloneChannel: e, applications: t, canCreateStoreChannel: n, canCreateAnnouncementChannel: s, canCreateStageChannel: r, canCreateForumChannel: l, canCreateMediaChannel: a } = this.props,
            { channelType: o, isPrivate: d } = this.state;
        if (null != e || o === q.d4z.GUILD_CATEGORY) return;
        let c = null != t && t.length > 0;
        return (0, i.jsx)(g.xJW, {
            className: et.type,
            title: ee.intl.string(ee.t['7ZcXGx']),
            children: (0, i.jsx)(g.FXm, {
                options: (function (e) {
                    let { isPrivate: t, showStoreChannelOption: n, showAnnouncementChannelOption: s, canCreateStageChannel: r, canCreateForumChannel: l, canCreateMediaChannel: a } = e,
                        o = [
                            {
                                icon: t ? g.W4G : g.VL1,
                                label: ee.intl.string(ee.t.pnuRXF),
                                value: q.d4z.GUILD_TEXT,
                                description: ee.intl.string(ee.t.Hf5Lb2)
                            }
                        ];
                    return (
                        o.push({
                            icon: t ? g.gjC : g.gj8,
                            label: ee.intl.string(ee.t.Sx55Oj),
                            value: q.d4z.GUILD_VOICE,
                            description: ee.intl.string(ee.t.pqfkoK)
                        }),
                        l &&
                            o.push({
                                icon: t ? g.BUe : g.Mmi,
                                label: ee.intl.string(ee.t.eAVIDw),
                                value: q.d4z.GUILD_FORUM,
                                description: (0, i.jsxs)(g.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: et.radioLabelDescription,
                                    children: [
                                        ee.intl.string(ee.t.iZ5pgo),
                                        (0, i.jsx)('br', {}),
                                        ee.intl.format(ee.t.fjSvsL, {
                                            onClick: () => {
                                                open(Q.V8);
                                            }
                                        })
                                    ]
                                })
                            }),
                        a &&
                            o.push({
                                icon: t ? g.D7T : g.XBm,
                                label: ee.intl.string(ee.t['6x6fVl']),
                                value: q.d4z.GUILD_MEDIA,
                                description: (0, i.jsxs)(g.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: et.radioLabelDescription,
                                    children: [
                                        ee.intl.string(ee.t.JyCrwc),
                                        (0, i.jsx)('br', {}),
                                        ee.intl.format(ee.t.fjSvsL, {
                                            onClick: () => {
                                                open(Y.Z.getCreatorSupportArticleURL(q.BhN.MEDIA_CHANNEL));
                                            }
                                        })
                                    ]
                                }),
                                isBeta: !0
                            }),
                        s &&
                            o.push({
                                icon: g.MqZ,
                                iconSize: 24,
                                label: ee.intl.string(ee.t.qr9dEB),
                                value: q.d4z.GUILD_ANNOUNCEMENT,
                                description: ee.intl.string(ee.t.gBkfzs)
                            }),
                        n &&
                            o.push({
                                icon: g.lO_,
                                iconSize: 24,
                                label: ee.intl.string(ee.t.SxjkXV),
                                value: q.d4z.GUILD_STORE,
                                description: ee.intl.string(ee.t.nmCPMD)
                            }),
                        r &&
                            o.push({
                                icon: g.ewx,
                                iconSize: 24,
                                label: ee.intl.string(ee.t.pNWst7),
                                value: q.d4z.GUILD_STAGE_VOICE,
                                description: ee.intl.string(ee.t.VPAwgo)
                            }),
                        o.map((e) => {
                            let { icon: t, iconSize: n, label: s, value: r, description: l, isNew: a, isBeta: o } = e;
                            return {
                                name: (0, i.jsxs)('div', {
                                    className: et.radioItemName,
                                    children: [
                                        (0, i.jsx)(
                                            t,
                                            es(
                                                ei(
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
                                                    className: et.icon,
                                                    colorClass: et.foreground
                                                }
                                            )
                                        ),
                                        (0, i.jsxs)('div', {
                                            children: [
                                                (0, i.jsxs)(g.Text, {
                                                    variant: 'text-md/medium',
                                                    className: et.radioLabelName,
                                                    children: [
                                                        s,
                                                        (0, i.jsx)(er, {
                                                            isNew: a,
                                                            isBeta: o
                                                        })
                                                    ]
                                                }),
                                                'string' == typeof l
                                                    ? (0, i.jsx)(g.Text, {
                                                          variant: 'text-sm/normal',
                                                          color: 'header-secondary',
                                                          className: et.radioLabelDescription,
                                                          children: l
                                                      })
                                                    : l
                                            ]
                                        })
                                    ]
                                }),
                                value: r,
                                radioBarClassName: et.radioBar,
                                radioItemIconClassName: et.radioBarIcon
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
                size: g.FXm.Sizes.NOT_SET,
                onChange: this.handleTypeChange,
                itemInfoClassName: et.radioBarLabel
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
                    children: ee.intl.string(ee.t.vPIW2N)
                }),
                (0, i.jsx)(g.q4e, {
                    options: e.map((e) => ({
                        label: e.name,
                        value: e.id
                    })),
                    placeholder: ee.intl.string(ee.t['3XfCPT']),
                    value: t,
                    onChange: this.handleApplicationChange,
                    className: et.storeChannelOptionSelector
                }),
                null != t
                    ? (0, i.jsxs)(s.Fragment, {
                          children: [
                              (0, i.jsx)(g.vwX, {
                                  tag: 'h5',
                                  children: ee.intl.string(ee.t.XNIWFh)
                              }),
                              (0, i.jsx)(
                                  E.Z,
                                  {
                                      applicationId: t,
                                      onChange: this.handleSKUChange,
                                      selectedSkuId: n,
                                      className: et.storeChannelOptionSelector
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
                          note: ee.intl.format(ee.t.UVXL1d, { devPortalUrl: q.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT }),
                          children: [
                              (0, i.jsx)(g._m8, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: et.switchIcon
                              }),
                              ee.intl.string(ee.t['3e9mHx'])
                          ]
                      })
                    : null,
                null != t
                    ? (0, i.jsxs)(s.Fragment, {
                          children: [
                              l
                                  ? (0, i.jsx)(g.vwX, {
                                        tag: 'h5',
                                        children: ee.intl.string(ee.t.o7DqFx)
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
                                      className: et.storeChannelOptionSelector
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
        if (null != e || t === q.d4z.GUILD_ANNOUNCEMENT) return null;
        let s = t === q.d4z.GUILD_CATEGORY ? ee.intl.string(ee.t.lEPAZ2) : ee.intl.string(ee.t.aUI70t),
            r = t === q.d4z.GUILD_CATEGORY ? ee.intl.string(ee.t['RQUk6+']) : ee.intl.string(ee.t.YguuKi);
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
                            className: et.switchIcon
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
        } else s && !(0, S.nT)(n, o, a) && (t = (0, S.$7)(n));
        if (null != t)
            return (0, i.jsx)('div', {
                className: l()(et.createError, { [et.addMemberError]: e }),
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
        e = t === q.d4z.GUILD_CATEGORY ? ee.intl.string(ee.t['ISN+ND']) : ee.intl.string(ee.t['fUYU+v']);
        let l = r || s === q.d4z.GUILD_STAGE_VOICE;
        return (0, i.jsx)(g.mzw, {
            className: et.modalFooter,
            children: (0, i.jsxs)(g.hE2, {
                direction: 'horizontal-reverse',
                children: [
                    l
                        ? (0, i.jsx)(g.zxk, {
                              variant: 'primary',
                              text: ee.intl.string(ee.t.PDTjLC),
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
                        text: ee.intl.string(ee.t['ETE/oK']),
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
            (e = 0 === Object.keys(n).length ? ee.intl.string(ee.t['5WxrcX']) : t === q.d4z.GUILD_CATEGORY ? ee.intl.string(ee.t['ISN+ND']) : ee.intl.string(ee.t['fUYU+v'])),
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
                            text: ee.intl.string(ee.t['13/7kZ']),
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
                    className: et.modalContent,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        e === q.d4z.GUILD_STORE ? this.renderStoreOptions() : null,
                        (0, i.jsx)(O.Z, {
                            guildId: t,
                            channelType: e,
                            className: et.channelTypeDescription
                        }),
                        e === q.d4z.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions()
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
            l = t === q.d4z.GUILD_STAGE_VOICE;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(g.xBx, {
                    separator: !1,
                    children: [
                        (0, i.jsxs)(g.Kqy, {
                            gap: 4,
                            className: et.header,
                            children: [
                                (0, i.jsx)(g.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: et.title,
                                    children: l ? ee.intl.string(ee.t['S/6zHB']) : ee.intl.string(ee.t.dMJ3Y2)
                                }),
                                (0, i.jsxs)(g.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    className: et.subtitle,
                                    children: [
                                        (0, i.jsx)(r, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: et.subtitleIcon
                                        }),
                                        e
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsx)(g.olH, {
                            onClick: s,
                            className: et.closeButton
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
            className: et.modal,
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
            en(this, 'headerId', (0, y.hQ)()),
            en(this, '_input', void 0),
            en(this, 'setInputRef', (e) => {
                this._input = e;
            }),
            en(this, 'handleNameChange', (e) => {
                var t, n;
                let { channelType: i } = this.state;
                w.xL.has(i) && (e = (0, X.Nj)(e));
                let s = null != (n = null == (t = this._input) ? void 0 : t.selectionStart) ? n : 0;
                this.setState({ name: e }, () => {
                    var e;
                    null == (e = this._input) || e.setSelectionRange(s, s);
                });
            }),
            en(this, 'insertEmojiAtPosition', (e) => {
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
            en(this, 'handleTypeChange', (e) => {
                let { value: t } = e,
                    { name: n } = this.state;
                (w.xL.has(t) && (n = (0, X.Nj)(n)),
                    t === q.d4z.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
                    this.setState({
                        channelType: t,
                        name: n
                    }));
            }),
            en(this, 'handlePrivacyChange', (e) => {
                this.setState({ isPrivate: e });
            }),
            en(this, 'handleApplicationChange', (e) => {
                this.setState({ applicationId: e });
            }),
            en(this, 'handleSKUChange', (e) => {
                this.setState({ skuId: e });
            }),
            en(this, 'handleShowBranchesToggle', (e) => {
                this.setState({
                    showBranches: e,
                    branchId: null
                });
            }),
            en(this, 'handleBranchChange', (e) => {
                this.setState({ branchId: e });
            }),
            en(this, 'handleHasBranchesChange', (e) => {
                this.setState({ hasBranches: e });
            }),
            en(this, 'handleSubmit', async (e) => {
                let t, n, i;
                e.preventDefault();
                let { cloneChannel: s, categoryId: r, user: l, memberRoleIds: a, isAdmin: o, onClose: d, owner: h } = this.props,
                    { name: u, pendingPermissionOverwrites: p, channelType: m, skuId: g, branchId: N, isPrivate: x } = this.state,
                    E = this.getGuildId();
                if (null != E) {
                    if (null != s) ((t = c().values(s.permissionOverwrites)), (n = s.bitrate), (i = s.userLimit));
                    else if (m === q.d4z.GUILD_ANNOUNCEMENT) t = (0, X.rt)(E);
                    else {
                        if (x) {
                            t = (0, X.oQ)(E, m, [], !0);
                            let e = (0, S.Tj)(p, m);
                            e.length > 0 && (t = t.concat(e));
                            let n = null != h && l.id === h.id;
                            t.some((e) => a.has(e.id)) || o || n || t.push((0, X.jZ)(l.id, m));
                        }
                        m === q.d4z.GUILD_STAGE_VOICE &&
                            ((t = []),
                            Object.values(p).forEach((e) => {
                                let { row: n } = e;
                                null != n.id && '' !== n.id && (n.rowType === K.aC.ROLE ? t.push((0, R.A)(n.id, j.BN.ROLE)) : n.rowType === K.aC.MEMBER && t.push((0, R.A)(n.id, j.BN.MEMBER)));
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
                            parentId: m !== q.d4z.GUILD_CATEGORY ? r : null,
                            skuId: g,
                            branchId: N
                        });
                        if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                        let s = e.body;
                        (w.xL.has(m) && (0, G.XU)(s.guild_id, s.id), this.setState({ submitting: !1 }), d());
                    } catch (e) {
                        null != e.body && 'object' == typeof e.body
                            ? this.setState({
                                  errors: e.body,
                                  submitting: !1
                              })
                            : this.setState({
                                  errors: { message: ee.intl.string(ee.t.fEptJC) },
                                  submitting: !1
                              });
                    }
                }
            }));
        let { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        ((this.state = {
            channelType: null != t ? t : q.d4z.GUILD_TEXT,
            name: null != n ? (0, v.F6)(n, V.default, F.Z) : null != i ? i : '',
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
let ed = s.forwardRef(function (e, t) {
    let { channelType: n, guildId: s, cloneChannelId: r } = e,
        l = (0, p.cj)([k.Z, V.default, H.Z, Z.Z, B.ZP], () => {
            var e, t, i;
            let l = k.Z.getGuild(s),
                a = V.default.getCurrentUser();
            o()(null != a, 'CreateChannel: user cannot be undefined');
            let d = null != l && null != l.ownerId ? V.default.getUser(l.ownerId) : null,
                c = H.Z.can(q.Plq.ADMINISTRATOR, l),
                h = Z.Z.getChannel(r);
            return {
                guild: l,
                canCreateStoreChannel: null != l && l.features.has(q.oNc.COMMERCE),
                canCreateAnnouncementChannel: null != l && l.features.has(q.oNc.NEWS),
                user: a,
                owner: d,
                memberRoles: null != (t = null == (e = B.ZP.getMember(s, a.id)) ? void 0 : e.roles) ? t : [],
                canViewChannels: H.Z.can(q.Plq.VIEW_CHANNEL, l),
                canConnect: H.Z.can(q.Plq.CONNECT, l),
                isAdmin: c,
                cloneChannel: h,
                channelType: null != (i = null == h ? void 0 : h.type) ? i : n,
                canManageRoles: H.Z.can(q.Plq.MANAGE_ROLES, l),
                canManageChannels: H.Z.can(q.Plq.MANAGE_CHANNELS, l)
            };
        }),
        a = (0, p.Wu)([b.Z], () =>
            b.Z.getGuildApplicationIds(s)
                .map((e) => b.Z.getApplication(e))
                .filter(W.lm)
        ),
        d = new Set(l.memberRoles),
        { canManageRoles: c, canManageChannels: h } = l,
        u = (0, M.m)(s) && c && h,
        m = (0, P.W3)(s),
        g = (0, U.Ui)(null == l ? void 0 : l.guild),
        C = (0, f.s)({
            guildId: s,
            location: 'ConnectedCreateChannel'
        });
    return (0, i.jsx)(
        eo,
        es(ei({}, e, l), {
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
