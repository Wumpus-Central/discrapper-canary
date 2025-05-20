n.d(t, {
    default: () => ed,
    p: () => el
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
    f = n(933557),
    O = n(636816),
    v = n(605436),
    S = n(185413),
    A = n(313201),
    y = n(540059),
    _ = n(318766),
    T = n(907040),
    D = n(906411),
    L = n(688465),
    P = n(456269),
    U = n(312146),
    z = n(703656),
    R = n(146085),
    G = n(60222),
    M = n(388131),
    w = n(131704),
    Z = n(592125),
    k = n(271383),
    B = n(430824),
    F = n(496675),
    V = n(699516),
    H = n(594174),
    Y = n(934415),
    X = n(823379),
    W = n(63063),
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                en(e, t, n[t]);
            });
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
function el(e) {
    let { isNew: t, isBeta: n } = e,
        s = null;
    return (
        !0 === t
            ? (s = (0, i.jsx)(m.IGR, {
                  text: ee.intl.string(ee.t.psHMa2),
                  className: et.newBadge,
                  color: u.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER
              }))
            : !0 === n && (s = (0, i.jsx)(L.Z, { className: et.newBadge })),
        s
    );
}
function er(e) {
    let { onChange: t, guildId: n, channelType: l, description: r } = e,
        [a, o] = s.useState({}),
        d = (0, p.e7)([B.Z], () => B.Z.getGuild(n)),
        c = l === q.d4z.GUILD_STAGE_VOICE;
    return (s.useEffect(() => {
        t(a);
    }, [a, t]),
    null == d)
        ? null
        : (0, i.jsx)(m.hzk, {
              className: et.addMembersContainer,
              children: (0, i.jsx)(S.U, {
                  guild: d,
                  channel: null,
                  permission: c ? R.yP : (0, w.CG)(l),
                  pendingAdditions: a,
                  setPendingAdditions: o,
                  isStageChannel: c,
                  description: r
              })
          });
}
function ea(e) {
    let { onEmojiPicked: t } = e,
        n = s.useRef(null),
        l = s.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, i.jsx)(T.Z, {
                    channel: null,
                    pickerIntention: J.Hz.CHANNEL_NAME,
                    closePopout: n,
                    onNavigateAway: n,
                    onSelectEmoji: (e, i) => {
                        null != e && e.type === D.B.UNICODE && t(e.surrogates), i && n();
                    },
                    showOnlyUnicode: !0
                });
            },
            [t]
        );
    return (0, i.jsx)(m.yRy, {
        targetElementRef: n,
        renderPopout: l,
        animation: m.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        children: (e, t) => {
            let { isShown: s } = t;
            return (0, i.jsx)(
                _.Z,
                es(ei({}, e), {
                    ref: n,
                    active: s,
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
        i && null == n && C.Z.fetchApplications(t),
            I.ZP.trackWithMetadata(q.rMx.OPEN_MODAL, { type: 'Create Channel' }),
            P.O2.trackExposure({
                guildId: t,
                location: '45d324_1'
            });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate && this.state.isPrivate && this.state.channelType === q.d4z.GUILD_ANNOUNCEMENT && this.setState({ channelType: q.d4z.GUILD_TEXT }), !t.isPrivate && this.state.isPrivate && I.ZP.trackWithMetadata(q.rMx.OPEN_MODAL, { type: 'Create Private Channel' });
    }
    getGuildId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.guildId;
    }
    canSubmit() {
        let { canViewChannels: e, canConnect: t } = this.props,
            { isPrivate: n, channelType: i, skuId: s, name: l } = this.state;
        return '' !== l && '' !== l.trim() && (!n || !!(0, v.nT)(i, e, t)) && (i !== q.d4z.GUILD_STORE || null != s);
    }
    getIconComponent() {
        let { isPrivate: e, channelType: t } = this.state;
        switch (t) {
            case q.d4z.GUILD_TEXT:
                return e ? m.W4G : m.VL1;
            case q.d4z.GUILD_FORUM:
                return m.Mmi;
            case q.d4z.GUILD_MEDIA:
                return m.XBm;
            case q.d4z.GUILD_VOICE:
                return e ? m.gjC : m.gj8;
            case q.d4z.GUILD_STORE:
                return m.lO_;
            case q.d4z.GUILD_ANNOUNCEMENT:
                return m.MqZ;
            case q.d4z.GUILD_STAGE_VOICE:
                return m.ewx;
            default:
                return (0, w.zi)(t) ? m.VL1 : $.Vq;
        }
    }
    renderHeader() {
        var e;
        let t,
            { cloneChannel: n, categoryId: s, onClose: l } = this.props,
            { channelType: r } = this.state,
            a = null != n ? ee.intl.string(ee.t.dEaPc3) : r === q.d4z.GUILD_CATEGORY ? ee.intl.string(ee.t['ISN+ND']) : ee.intl.string(ee.t['fUYU+v']);
        if (null != s) {
            let n = Z.Z.getChannel(s);
            t = (0, i.jsx)(m.Text, {
                variant: 'text-xs/normal',
                color: 'header-secondary',
                className: et.subtitle,
                children: ee.intl.format(ee.t.L1zJgY, { categoryName: null != (e = null == n ? void 0 : n.name) ? e : '' })
            });
        }
        return (0, i.jsxs)(m.xBx, {
            separator: !1,
            children: [
                (0, i.jsxs)('div', {
                    className: et.header,
                    children: [
                        (0, i.jsx)(m.X6q, {
                            id: this.headerId,
                            variant: 'heading-lg/semibold',
                            className: et.title,
                            children: a
                        }),
                        t
                    ]
                }),
                (0, i.jsx)(m.olH, {
                    onClick: l,
                    className: et.closeButton
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
                className: et.error,
                children: a.name
            }));
        let d = o === q.d4z.GUILD_CATEGORY,
            c = d ? ee.intl.string(ee.t.OCAkGB) : ee.intl.string(ee.t.PVbHDg),
            h =
                null != t
                    ? (0, i.jsx)(m.R94, {
                          className: et.channelNameNote,
                          type: m.R94.Types.DESCRIPTION,
                          children: ee.intl.format(ee.t.s2ZzZW, { name: (0, f.F6)(t, H.default, V.Z, !0) })
                      })
                    : o === q.d4z.GUILD_FORUM
                      ? (0, i.jsx)(m.R94, {
                            className: et.channelNameNote,
                            type: m.R94.Types.DESCRIPTION,
                            children: ee.intl.format(ee.t.tbVWyc, {
                                forumUpsellHook: (e, t) =>
                                    (0, i.jsx)(
                                        m.eee,
                                        {
                                            onClick: () =>
                                                (0, m.ZDy)(async () => {
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
                            case q.d4z.GUILD_CATEGORY:
                                return ee.intl.string(ee.t.eTVbt7);
                            case q.d4z.GUILD_FORUM:
                                return ee.intl.string(ee.t['5z1Xam']);
                            default:
                                return ee.intl.string(ee.t['bw/b8P']);
                        }
                    })(o),
                    className: r()(et.inputWrapper, { [et.inputWrapperWithEmojiPicker]: l }),
                    inputClassName: d ? void 0 : r()(et.inputInner, { [et.inputInnerWithEmojiPicker]: l }),
                    prefixElement: d
                        ? null
                        : (0, i.jsx)(u, {
                              className: et.inputPrefix,
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
                    titleClassName: et.sectionTitle,
                    className: et.name,
                    children: [
                        l
                            ? (0, i.jsxs)('div', {
                                  className: et.nameInput,
                                  children: [(0, i.jsx)(p, { id: t }), (0, i.jsx)(ea, { onEmojiPicked: this.insertEmojiAtPosition })]
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
        if (null != e || o === q.d4z.GUILD_CATEGORY) return;
        let c = null != t && t.length > 0;
        return (0, i.jsx)(m.xJW, {
            className: et.type,
            title: ee.intl.string(ee.t['7ZcXGx']),
            children: (0, i.jsx)(m.FXm, {
                options: (function (e) {
                    let { isPrivate: t, showStoreChannelOption: n, showAnnouncementChannelOption: s, canCreateStageChannel: l, canCreateForumChannel: r, canCreateMediaChannel: a } = e,
                        o = [
                            {
                                icon: t ? m.W4G : m.VL1,
                                label: ee.intl.string(ee.t.pnuRXF),
                                value: q.d4z.GUILD_TEXT,
                                description: ee.intl.string(ee.t.Hf5Lb2)
                            }
                        ];
                    return (
                        o.push({
                            icon: t ? m.gjC : m.gj8,
                            label: ee.intl.string(ee.t.Sx55Oj),
                            value: q.d4z.GUILD_VOICE,
                            description: ee.intl.string(ee.t.pqfkoK)
                        }),
                        r &&
                            o.push({
                                icon: t ? m.BUe : m.Mmi,
                                label: ee.intl.string(ee.t.eAVIDw),
                                value: q.d4z.GUILD_FORUM,
                                description: (0, i.jsxs)(m.Text, {
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
                                icon: t ? m.D7T : m.XBm,
                                label: ee.intl.string(ee.t['6x6fVl']),
                                value: q.d4z.GUILD_MEDIA,
                                description: (0, i.jsxs)(m.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: et.radioLabelDescription,
                                    children: [
                                        ee.intl.string(ee.t.JyCrwc),
                                        (0, i.jsx)('br', {}),
                                        ee.intl.format(ee.t.fjSvsL, {
                                            onClick: () => {
                                                open(W.Z.getCreatorSupportArticleURL(q.BhN.MEDIA_CHANNEL));
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
                                label: ee.intl.string(ee.t.qr9dEB),
                                value: q.d4z.GUILD_ANNOUNCEMENT,
                                description: ee.intl.string(ee.t.gBkfzs)
                            }),
                        n &&
                            o.push({
                                icon: m.lO_,
                                iconSize: 24,
                                label: ee.intl.string(ee.t.SxjkXV),
                                value: q.d4z.GUILD_STORE,
                                description: ee.intl.string(ee.t.nmCPMD)
                            }),
                        l &&
                            o.push({
                                icon: m.ewx,
                                iconSize: 24,
                                label: ee.intl.string(ee.t.pNWst7),
                                value: q.d4z.GUILD_STAGE_VOICE,
                                description: ee.intl.string(ee.t.VPAwgo)
                            }),
                        o.map((e) => {
                            let { icon: t, iconSize: n, label: s, value: l, description: r, isNew: a, isBeta: o } = e;
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
                                                (0, i.jsxs)(m.Text, {
                                                    variant: 'text-md/medium',
                                                    className: et.radioLabelName,
                                                    children: [
                                                        s,
                                                        (0, i.jsx)(el, {
                                                            isNew: a,
                                                            isBeta: o
                                                        })
                                                    ]
                                                }),
                                                'string' == typeof r
                                                    ? (0, i.jsx)(m.Text, {
                                                          variant: 'text-sm/normal',
                                                          color: 'header-secondary',
                                                          className: et.radioLabelDescription,
                                                          children: r
                                                      })
                                                    : r
                                            ]
                                        })
                                    ]
                                }),
                                value: l,
                                radioBarClassName: et.radioBar,
                                radioItemIconClassName: et.radioBarIcon
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
                itemInfoClassName: et.radioBarLabel
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
                    children: ee.intl.string(ee.t.vPIW2N)
                }),
                (0, i.jsx)(m.q4e, {
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
                              (0, i.jsx)(m.vwX, {
                                  tag: 'h5',
                                  children: ee.intl.string(ee.t.XNIWFh)
                              }),
                              (0, i.jsx)(
                                  x.Z,
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
                    ? (0, i.jsxs)(m.j7V, {
                          hideBorder: !0,
                          onChange: this.handleShowBranchesToggle,
                          value: r,
                          note: ee.intl.format(ee.t.UVXL1d, { devPortalUrl: q.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT }),
                          children: [
                              (0, i.jsx)(m._m8, {
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
                              r
                                  ? (0, i.jsx)(m.vwX, {
                                        tag: 'h5',
                                        children: ee.intl.string(ee.t.o7DqFx)
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
            l = t === q.d4z.GUILD_CATEGORY ? ee.intl.string(ee.t['RQUk6+']) : ee.intl.string(ee.t.YguuKi);
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
                className: r()(et.createError, { [et.addMemberError]: e }),
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
        e = t === q.d4z.GUILD_CATEGORY ? ee.intl.string(ee.t['ISN+ND']) : ee.intl.string(ee.t['fUYU+v']);
        let r = l || s === q.d4z.GUILD_STAGE_VOICE;
        return (0, i.jsxs)(m.mzw, {
            className: et.modalFooter,
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
                          children: ee.intl.string(ee.t.PDTjLC)
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
                    children: ee.intl.string(ee.t['ETE/oK'])
                })
            ]
        });
    }
    renderAddMemberFooter() {
        let e,
            { channelType: t } = this.props,
            { pendingPermissionOverwrites: n } = this.state;
        return (
            (e = 0 === Object.keys(n).length ? ee.intl.string(ee.t['5WxrcX']) : t === q.d4z.GUILD_CATEGORY ? ee.intl.string(ee.t['ISN+ND']) : ee.intl.string(ee.t['fUYU+v'])),
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
                        children: ee.intl.string(ee.t['13/7kZ'])
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
            l = this.getIconComponent(),
            r = t === q.d4z.GUILD_STAGE_VOICE;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(m.xBx, {
                    separator: !1,
                    children: [
                        (0, i.jsxs)(m.Kqy, {
                            gap: 4,
                            className: et.header,
                            children: [
                                (0, i.jsx)(m.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: et.title,
                                    children: r ? ee.intl.string(ee.t['S/6zHB']) : ee.intl.string(ee.t.dMJ3Y2)
                                }),
                                (0, i.jsxs)(m.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    className: et.subtitle,
                                    children: [
                                        (0, i.jsx)(l, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: et.subtitleIcon
                                        }),
                                        e
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsx)(m.olH, {
                            onClick: s,
                            className: et.closeButton
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
            className: et.modal,
            'aria-labelledby': this.headerId,
            size: m.CgR.DYNAMIC,
            children: (0, i.jsx)('form', {
                onSubmit: this.handleSubmit,
                children: this.renderSlides()
            })
        });
    }
    constructor(e) {
        super(e),
            en(this, 'headerId', (0, A.hQ)()),
            en(this, '_input', void 0),
            en(this, 'setInputRef', (e) => {
                this._input = e;
            }),
            en(this, 'handleNameChange', (e) => {
                var t, n;
                let { channelType: i } = this.state;
                w.xL.has(i) && (e = (0, Y.Nj)(e));
                let s = null != (n = null == (t = this._input) ? void 0 : t.selectionStart) ? n : 0;
                this.setState({ name: e }, () => {
                    var e;
                    null == (e = this._input) || e.setSelectionRange(s, s);
                });
            }),
            en(this, 'insertEmojiAtPosition', (e) => {
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
            en(this, 'handleTypeChange', (e) => {
                let { value: t } = e,
                    { name: n } = this.state;
                w.xL.has(t) && (n = (0, Y.Nj)(n)),
                    t === q.d4z.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
                    this.setState({
                        channelType: t,
                        name: n
                    });
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
                let { cloneChannel: s, categoryId: l, user: r, memberRoleIds: a, isAdmin: o, onClose: d, owner: h } = this.props,
                    { name: u, pendingPermissionOverwrites: p, channelType: m, skuId: C, branchId: N, isPrivate: x } = this.state,
                    I = this.getGuildId();
                if (null != I) {
                    if (null != s) (t = c().values(s.permissionOverwrites)), (n = s.bitrate), (i = s.userLimit);
                    else if (m === q.d4z.GUILD_ANNOUNCEMENT) t = (0, Y.rt)(I);
                    else {
                        if (x) {
                            t = (0, Y.oQ)(I, m, [], !0);
                            let e = (0, v.Tj)(p, m);
                            e.length > 0 && (t = t.concat(e));
                            let n = null != h && r.id === h.id;
                            t.some((e) => a.has(e.id)) || o || n || t.push((0, Y.jZ)(r.id, m));
                        }
                        m === q.d4z.GUILD_STAGE_VOICE &&
                            ((t = []),
                            Object.values(p).forEach((e) => {
                                let { row: n } = e;
                                null != n.id && '' !== n.id && (n.rowType === K.aC.ROLE ? t.push((0, M.A)(n.id, E.BN.ROLE)) : n.rowType === K.aC.MEMBER && t.push((0, M.A)(n.id, E.BN.MEMBER)));
                            }));
                    }
                    this.setState({ errors: {} });
                    try {
                        let e = await g.Z.createChannel({
                            guildId: I,
                            type: m,
                            name: u,
                            permissionOverwrites: t,
                            bitrate: n,
                            userLimit: i,
                            parentId: m !== q.d4z.GUILD_CATEGORY ? l : null,
                            skuId: C,
                            branchId: N
                        });
                        if (null == e || 201 !== e.status) return;
                        let s = e.body;
                        w.xL.has(m) && (0, z.XU)(s.guild_id, s.id), d();
                    } catch (e) {
                        null != e.body && 'object' == typeof e.body ? this.setState({ errors: e.body }) : this.setState({ errors: { message: ee.intl.string(ee.t.fEptJC) } });
                    }
                }
            });
        let { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        (this.state = {
            channelType: null != t ? t : q.d4z.GUILD_TEXT,
            name: null != n ? (0, f.F6)(n, H.default, V.Z) : null != i ? i : '',
            pendingPermissionOverwrites: {},
            isPrivate: !1,
            prevGuildId: e.guildId,
            applicationId: null,
            skuId: null,
            branchId: null,
            showBranches: !1,
            hasBranches: !1,
            slide: 'CHANNEL_INFO',
            errors: {}
        }),
            (this.handlePermissionOverwriteChange = this.handlePermissionOverwriteChange.bind(this));
    }
}
let ed = s.forwardRef(function (e, t) {
    let { channelType: n, guildId: s, cloneChannelId: l } = e,
        r = (0, p.cj)([B.Z, H.default, F.Z, Z.Z, k.ZP], () => {
            var e, t, i;
            let r = B.Z.getGuild(s),
                a = H.default.getCurrentUser();
            o()(null != a, 'CreateChannel: user cannot be undefined');
            let d = null != r && null != r.ownerId ? H.default.getUser(r.ownerId) : null,
                c = F.Z.can(q.Plq.ADMINISTRATOR, r),
                h = Z.Z.getChannel(l);
            return {
                guild: r,
                canCreateStoreChannel: null != r && r.hasFeature(q.oNc.COMMERCE),
                canCreateAnnouncementChannel: null != r && r.hasFeature(q.oNc.NEWS),
                user: a,
                owner: d,
                memberRoles: null != (t = null == (e = k.ZP.getMember(s, a.id)) ? void 0 : e.roles) ? t : [],
                canViewChannels: F.Z.can(q.Plq.VIEW_CHANNEL, r),
                canConnect: F.Z.can(q.Plq.CONNECT, r),
                isAdmin: c,
                cloneChannel: h,
                channelType: null != (i = null == h ? void 0 : h.type) ? i : n,
                canManageRoles: F.Z.can(q.Plq.MANAGE_ROLES, r),
                canManageChannels: F.Z.can(q.Plq.MANAGE_CHANNELS, r)
            };
        }),
        a = (0, p.Wu)([j.Z], () =>
            j.Z.getGuildApplicationIds(s)
                .map((e) => j.Z.getApplication(e))
                .filter(X.lm)
        ),
        d = new Set(r.memberRoles),
        { canManageRoles: c, canManageChannels: h } = r,
        u = (0, G.m)(s) && c && h,
        m = (0, P.W3)(s),
        g = (0, U.Ui)(null == r ? void 0 : r.guild),
        C = (0, y.Q3)('CreateChannel'),
        N = (0, b.sc)({
            guildId: s,
            location: 'ConnectedCreateChannel'
        });
    return (0, i.jsx)(
        eo,
        es(ei({}, e, r), {
            memberRoleIds: d,
            applications: a,
            canCreateStageChannel: u,
            canCreateForumChannel: m,
            canCreateMediaChannel: g,
            ref: t,
            width: C ? 496 : 460,
            isEmojiInChannelNamesEnabled: N
        })
    );
});
