n.d(t, {
    default: () => en,
    p: () => $
}),
    n(653041),
    n(266796),
    n(47120),
    n(566702),
    n(411104);
var s = n(200651),
    r = n(192379),
    i = n(120356),
    l = n.n(i),
    a = n(512722),
    o = n.n(a),
    d = n(392711),
    c = n.n(d),
    h = n(990547),
    u = n(831209),
    p = n(442837),
    N = n(481060),
    m = n(333848),
    g = n(749210),
    C = n(332063),
    x = n(620123),
    I = n(911969),
    E = n(367907),
    j = n(812206),
    O = n(933557),
    b = n(605436),
    f = n(185413),
    v = n(313201),
    S = n(540059),
    A = n(688465),
    T = n(456269),
    D = n(312146),
    L = n(703656),
    y = n(146085),
    _ = n(60222),
    U = n(388131),
    z = n(131704),
    G = n(592125),
    W = n(271383),
    P = n(430824),
    R = n(496675),
    M = n(699516),
    w = n(594174),
    Z = n(934415),
    k = n(823379),
    B = n(63063),
    F = n(981631),
    V = n(71080),
    H = n(710352),
    X = n(231338),
    Y = n(388032),
    q = n(69945);
function K(e, t, n) {
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
function J(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            s.forEach(function (t) {
                K(e, t, n[t]);
            });
    }
    return e;
}
function Q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var s = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, s);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function $(e) {
    let { isNew: t, isBeta: n } = e,
        r = null;
    return (
        !0 === t
            ? (r = (0, s.jsx)(N.IGR, {
                  text: Y.NW.string(Y.t.psHMa2),
                  className: q.newBadge,
                  color: u.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER
              }))
            : !0 === n && (r = (0, s.jsx)(A.Z, { className: q.newBadge })),
        r
    );
}
function ee(e) {
    let { onChange: t, guildId: n, channelType: i, description: l } = e,
        [a, o] = r.useState({}),
        d = (0, p.e7)([P.Z], () => P.Z.getGuild(n)),
        c = i === F.d4z.GUILD_STAGE_VOICE;
    return (r.useEffect(() => {
        t(a);
    }, [a, t]),
    null == d)
        ? null
        : (0, s.jsx)(N.hzk, {
              className: q.addMembersContainer,
              children: (0, s.jsx)(f.U, {
                  guild: d,
                  channel: null,
                  permission: c ? y.yP : (0, z.CG)(i),
                  pendingAdditions: a,
                  setPendingAdditions: o,
                  isStageChannel: c,
                  description: l
              })
          });
}
class et extends r.PureComponent {
    componentDidMount() {
        let { _input: e } = this;
        null != e && e.select();
        let { guildId: t, applications: n, canCreateStoreChannel: s } = this.props;
        s && null == n && g.Z.fetchApplications(t),
            E.ZP.trackWithMetadata(F.rMx.OPEN_MODAL, { type: 'Create Channel' }),
            T.O2.trackExposure({
                guildId: t,
                location: '45d324_1'
            });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate && this.state.isPrivate && this.state.channelType === F.d4z.GUILD_ANNOUNCEMENT && this.setState({ channelType: F.d4z.GUILD_TEXT }), !t.isPrivate && this.state.isPrivate && E.ZP.trackWithMetadata(F.rMx.OPEN_MODAL, { type: 'Create Private Channel' });
    }
    getGuildId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.guildId;
    }
    canSubmit() {
        let { canViewChannels: e, canConnect: t } = this.props,
            { isPrivate: n, channelType: s, skuId: r, name: i } = this.state;
        return '' !== i && '' !== i.trim() && (!n || !!(0, b.nT)(s, e, t)) && (s !== F.d4z.GUILD_STORE || null != r);
    }
    getIconComponent() {
        let { isPrivate: e, channelType: t } = this.state;
        switch (t) {
            case F.d4z.GUILD_TEXT:
                return e ? N.W4G : N.VL1;
            case F.d4z.GUILD_FORUM:
                return N.Mmi;
            case F.d4z.GUILD_MEDIA:
                return N.XBm;
            case F.d4z.GUILD_VOICE:
                return e ? N.gjC : N.gj8;
            case F.d4z.GUILD_STORE:
                return N.lO_;
            case F.d4z.GUILD_ANNOUNCEMENT:
                return N.MqZ;
            case F.d4z.GUILD_STAGE_VOICE:
                return N.ewx;
            default:
                return (0, z.zi)(t) ? N.VL1 : X.Vq;
        }
    }
    renderHeader() {
        var e;
        let t;
        let { cloneChannel: n, categoryId: r, onClose: i } = this.props,
            { channelType: l } = this.state,
            a = null != n ? Y.NW.string(Y.t.dEaPc3) : l === F.d4z.GUILD_CATEGORY ? Y.NW.string(Y.t['ISN+ND']) : Y.NW.string(Y.t['fUYU+v']);
        if (null != r) {
            let n = G.Z.getChannel(r);
            t = (0, s.jsx)(N.Text, {
                variant: 'text-xs/normal',
                color: 'header-secondary',
                className: q.subtitle,
                children: Y.NW.format(Y.t.L1zJgY, { categoryName: null !== (e = null == n ? void 0 : n.name) && void 0 !== e ? e : '' })
            });
        }
        return (0, s.jsxs)(N.xBx, {
            separator: !1,
            children: [
                (0, s.jsxs)('div', {
                    className: q.header,
                    children: [
                        (0, s.jsx)(N.X6q, {
                            id: this.headerId,
                            variant: 'heading-lg/semibold',
                            className: q.title,
                            children: a
                        }),
                        t
                    ]
                }),
                (0, s.jsx)(N.olH, {
                    onClick: i,
                    className: q.closeButton
                })
            ]
        });
    }
    renderName() {
        let e;
        let { cloneChannel: t, guildId: r } = this.props,
            { errors: i, channelType: l } = this.state;
        (null == i ? void 0 : i.name) != null &&
            (e = (0, s.jsx)(N.Text, {
                variant: 'text-xs/normal',
                color: 'text-danger',
                className: q.error,
                children: i.name
            }));
        let a = l === F.d4z.GUILD_CATEGORY,
            o = a ? Y.NW.string(Y.t.OCAkGB) : Y.NW.string(Y.t.PVbHDg),
            d =
                null != t
                    ? (0, s.jsx)(N.R94, {
                          className: q.channelNameNote,
                          type: N.R94.Types.DESCRIPTION,
                          children: Y.NW.format(Y.t.s2ZzZW, { name: (0, O.F6)(t, w.default, M.Z, !0) })
                      })
                    : l === F.d4z.GUILD_FORUM
                      ? (0, s.jsx)(N.R94, {
                            className: q.channelNameNote,
                            type: N.R94.Types.DESCRIPTION,
                            children: Y.NW.format(Y.t.tbVWyc, {
                                forumUpsellHook: (e, t) =>
                                    (0, s.jsx)(
                                        N.eee,
                                        {
                                            onClick: () =>
                                                (0, N.ZDy)(async () => {
                                                    let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                                                    return (t) => (0, s.jsx)(e, Q(J({}, t), { guildId: r }));
                                                }),
                                            children: e
                                        },
                                        t
                                    )
                            })
                        })
                      : null,
            c = this.getIconComponent();
        return (0, s.jsx)(v.FG, {
            children: (t) =>
                (0, s.jsxs)(N.xJW, {
                    title: o,
                    tag: 'label',
                    htmlFor: t,
                    titleClassName: q.sectionTitle,
                    className: q.name,
                    children: [
                        (0, s.jsx)(N.oil, {
                            value: this.state.name,
                            onChange: this.handleNameChange,
                            id: t,
                            inputRef: this.setInputRef,
                            maxLength: 100,
                            placeholder: (function (e) {
                                switch (e) {
                                    case F.d4z.GUILD_CATEGORY:
                                        return Y.NW.string(Y.t.eTVbt7);
                                    case F.d4z.GUILD_FORUM:
                                        return Y.NW.string(Y.t['5z1Xam']);
                                    default:
                                        return Y.NW.string(Y.t['bw/b8P']);
                                }
                            })(l),
                            className: q.inputWrapper,
                            inputClassName: a ? void 0 : q.inputInner,
                            prefixElement: a
                                ? null
                                : (0, s.jsx)(c, {
                                      className: q.inputPrefix,
                                      size: 'xs',
                                      color: 'currentColor'
                                  }),
                            autoFocus: !0
                        }),
                        e,
                        d
                    ]
                })
        });
    }
    renderType() {
        let { cloneChannel: e, applications: t, canCreateStoreChannel: n, canCreateAnnouncementChannel: r, canCreateStageChannel: i, canCreateForumChannel: l, canCreateMediaChannel: a } = this.props,
            { channelType: o, isPrivate: d } = this.state;
        if (null != e || o === F.d4z.GUILD_CATEGORY) return;
        let c = null != t && t.length > 0;
        return (0, s.jsx)(N.xJW, {
            className: q.type,
            title: Y.NW.string(Y.t['7ZcXGx']),
            children: (0, s.jsx)(N.FXm, {
                options: (function (e) {
                    let { isPrivate: t, showStoreChannelOption: n, showAnnouncementChannelOption: r, canCreateStageChannel: i, canCreateForumChannel: l, canCreateMediaChannel: a } = e,
                        o = [
                            {
                                icon: t ? N.W4G : N.VL1,
                                label: Y.NW.string(Y.t.pnuRXF),
                                value: F.d4z.GUILD_TEXT,
                                description: Y.NW.string(Y.t.Hf5Lb2)
                            }
                        ];
                    return (
                        o.push({
                            icon: t ? N.gjC : N.gj8,
                            label: Y.NW.string(Y.t.Sx55Oj),
                            value: F.d4z.GUILD_VOICE,
                            description: Y.NW.string(Y.t.pqfkoK)
                        }),
                        l &&
                            o.push({
                                icon: t ? N.BUe : N.Mmi,
                                label: Y.NW.string(Y.t.eAVIDw),
                                value: F.d4z.GUILD_FORUM,
                                description: (0, s.jsxs)(N.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: q.radioLabelDescription,
                                    children: [
                                        Y.NW.string(Y.t.iZ5pgo),
                                        (0, s.jsx)('br', {}),
                                        Y.NW.format(Y.t.fjSvsL, {
                                            onClick: () => {
                                                open(H.V8);
                                            }
                                        })
                                    ]
                                })
                            }),
                        a &&
                            o.push({
                                icon: t ? N.D7T : N.XBm,
                                label: Y.NW.string(Y.t['6x6fVl']),
                                value: F.d4z.GUILD_MEDIA,
                                description: (0, s.jsxs)(N.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: q.radioLabelDescription,
                                    children: [
                                        Y.NW.string(Y.t.JyCrwc),
                                        (0, s.jsx)('br', {}),
                                        Y.NW.format(Y.t.fjSvsL, {
                                            onClick: () => {
                                                open(B.Z.getCreatorSupportArticleURL(F.BhN.MEDIA_CHANNEL));
                                            }
                                        })
                                    ]
                                }),
                                isBeta: !0
                            }),
                        r &&
                            o.push({
                                icon: N.MqZ,
                                iconSize: 24,
                                label: Y.NW.string(Y.t.qr9dEB),
                                value: F.d4z.GUILD_ANNOUNCEMENT,
                                description: Y.NW.string(Y.t.gBkfzs)
                            }),
                        n &&
                            o.push({
                                icon: N.lO_,
                                iconSize: 24,
                                label: Y.NW.string(Y.t.SxjkXV),
                                value: F.d4z.GUILD_STORE,
                                description: Y.NW.string(Y.t.nmCPMD)
                            }),
                        i &&
                            o.push({
                                icon: N.ewx,
                                iconSize: 24,
                                label: Y.NW.string(Y.t.pNWst7),
                                value: F.d4z.GUILD_STAGE_VOICE,
                                description: Y.NW.string(Y.t.VPAwgo)
                            }),
                        o.map((e) => {
                            let { icon: t, iconSize: n, label: r, value: i, description: l, isNew: a, isBeta: o } = e;
                            return {
                                name: (0, s.jsxs)('div', {
                                    className: q.radioItemName,
                                    children: [
                                        (0, s.jsx)(
                                            t,
                                            Q(
                                                J(
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
                                                    className: q.icon,
                                                    colorClass: q.foreground
                                                }
                                            )
                                        ),
                                        (0, s.jsxs)('div', {
                                            children: [
                                                (0, s.jsxs)(N.Text, {
                                                    variant: 'text-md/medium',
                                                    className: q.radioLabelName,
                                                    children: [
                                                        r,
                                                        (0, s.jsx)($, {
                                                            isNew: a,
                                                            isBeta: o
                                                        })
                                                    ]
                                                }),
                                                'string' == typeof l
                                                    ? (0, s.jsx)(N.Text, {
                                                          variant: 'text-sm/normal',
                                                          color: 'header-secondary',
                                                          className: q.radioLabelDescription,
                                                          children: l
                                                      })
                                                    : l
                                            ]
                                        })
                                    ]
                                }),
                                value: i,
                                radioBarClassName: q.radioBar,
                                radioItemIconClassName: q.radioBarIcon
                            };
                        })
                    );
                })({
                    isPrivate: d,
                    showStoreChannelOption: n && c,
                    showAnnouncementChannelOption: r,
                    canCreateStageChannel: i,
                    canCreateForumChannel: l,
                    canCreateMediaChannel: a
                }),
                value: o,
                size: N.FXm.Sizes.NOT_SET,
                onChange: this.handleTypeChange,
                itemInfoClassName: q.radioBarLabel
            })
        });
    }
    renderChannelTypeDescription(e) {
        let t;
        return (e === F.d4z.GUILD_ANNOUNCEMENT && (t = Y.NW.format(Y.t.tI7KNT, { documentationLink: B.Z.getArticleURL(F.BhN.ANNOUNCEMENT_CHANNELS) })), null == t)
            ? null
            : (0, s.jsx)(N.R94, {
                  className: q.channelTypeDescription,
                  type: N.R94.Types.DESCRIPTION,
                  children: t
              });
    }
    renderStoreOptions() {
        let { applications: e } = this.props,
            { applicationId: t, skuId: n, branchId: i, showBranches: l, hasBranches: a } = this.state;
        if (null == e || 0 === e.length) throw Error('Unexpected empty applications');
        return (0, s.jsxs)('div', {
            children: [
                (0, s.jsx)(N.vwX, {
                    tag: 'h5',
                    children: Y.NW.string(Y.t.vPIW2N)
                }),
                (0, s.jsx)(N.q4e, {
                    options: e.map((e) => ({
                        label: e.name,
                        value: e.id
                    })),
                    placeholder: Y.NW.string(Y.t['3XfCPT']),
                    value: t,
                    onChange: this.handleApplicationChange,
                    className: q.storeChannelOptionSelector
                }),
                null != t
                    ? (0, s.jsxs)(r.Fragment, {
                          children: [
                              (0, s.jsx)(N.vwX, {
                                  tag: 'h5',
                                  children: Y.NW.string(Y.t.XNIWFh)
                              }),
                              (0, s.jsx)(
                                  x.Z,
                                  {
                                      applicationId: t,
                                      onChange: this.handleSKUChange,
                                      selectedSkuId: n,
                                      className: q.storeChannelOptionSelector
                                  },
                                  t
                              )
                          ]
                      })
                    : null,
                null != t && a
                    ? (0, s.jsxs)(N.j7V, {
                          hideBorder: !0,
                          onChange: this.handleShowBranchesToggle,
                          value: l,
                          note: Y.NW.format(Y.t.UVXL1d, { devPortalUrl: F.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT }),
                          children: [
                              (0, s.jsx)(N._m8, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: q.switchIcon
                              }),
                              Y.NW.string(Y.t['3e9mHx'])
                          ]
                      })
                    : null,
                null != t
                    ? (0, s.jsxs)(r.Fragment, {
                          children: [
                              l
                                  ? (0, s.jsx)(N.vwX, {
                                        tag: 'h5',
                                        children: Y.NW.string(Y.t.o7DqFx)
                                    })
                                  : null,
                              (0, s.jsx)(
                                  C.Z,
                                  {
                                      applicationId: t,
                                      onChange: this.handleBranchChange,
                                      selectedBranchId: i,
                                      hide: !l,
                                      onHasBranchesChange: this.handleHasBranchesChange,
                                      className: q.storeChannelOptionSelector
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
        if (null != e || t === F.d4z.GUILD_ANNOUNCEMENT) return null;
        let r = t === F.d4z.GUILD_CATEGORY ? Y.NW.string(Y.t.lEPAZ2) : Y.NW.string(Y.t.aUI70t),
            i = t === F.d4z.GUILD_CATEGORY ? Y.NW.string(Y.t['RQUk6+']) : Y.NW.string(Y.t.YguuKi);
        return (0, s.jsx)(
            N.xJW,
            {
                children: (0, s.jsxs)(N.j7V, {
                    hideBorder: !0,
                    onChange: this.handlePrivacyChange,
                    value: n,
                    note: i,
                    children: [
                        (0, s.jsx)(N.mBM, {
                            size: 'md',
                            color: 'currentColor',
                            className: q.switchIcon
                        }),
                        r
                    ]
                })
            },
            'privacy-switch'
        );
    }
    renderError(e) {
        let t;
        let { channelType: n, isPrivate: r, errors: i } = this.state,
            { canConnect: a, canViewChannels: o } = this.props;
        if (Object.values(i).length > 0) {
            if (null != i.message && '' !== i.message) t = i.message;
            else if (e || null == i.name) {
                let e = Object.values(i)[0];
                e.length > 0 && (t = e);
            }
        } else r && !(0, b.nT)(n, o, a) && (t = (0, b.$7)(n));
        if (null != t)
            return (0, s.jsx)('div', {
                className: l()(q.createError, { [q.addMemberError]: e }),
                children: (0, s.jsx)(N.Wn, {
                    messageType: N.QYI.ERROR,
                    children: t
                })
            });
    }
    renderFooter() {
        let e;
        let { channelType: t, onClose: n } = this.props,
            { channelType: r } = this.state,
            { isPrivate: i } = this.state;
        e = t === F.d4z.GUILD_CATEGORY ? Y.NW.string(Y.t['ISN+ND']) : Y.NW.string(Y.t['fUYU+v']);
        let l = i || r === F.d4z.GUILD_STAGE_VOICE;
        return (0, s.jsxs)(N.mzw, {
            className: q.modalFooter,
            children: [
                l
                    ? (0, s.jsx)(N.zxk, {
                          type: 'button',
                          onClick: () => {
                              this.setState({
                                  slide: 'ADD_MEMBERS',
                                  errors: {}
                              });
                          },
                          disabled: !this.canSubmit(),
                          children: Y.NW.string(Y.t.PDTjLC)
                      })
                    : (0, s.jsx)(N.zxk, {
                          type: 'submit',
                          disabled: !this.canSubmit(),
                          children: e
                      }),
                (0, s.jsx)(N.zxk, {
                    onClick: n,
                    look: N.zxk.Looks.LINK,
                    color: N.zxk.Colors.PRIMARY,
                    children: Y.NW.string(Y.t['ETE/oK'])
                })
            ]
        });
    }
    renderAddMemberFooter() {
        let e;
        let { channelType: t } = this.props,
            { pendingPermissionOverwrites: n } = this.state;
        return (
            (e = 0 === Object.keys(n).length ? Y.NW.string(Y.t['5WxrcX']) : t === F.d4z.GUILD_CATEGORY ? Y.NW.string(Y.t['ISN+ND']) : Y.NW.string(Y.t['fUYU+v'])),
            (0, s.jsxs)(N.mzw, {
                children: [
                    (0, s.jsx)(N.zxk, {
                        type: 'submit',
                        disabled: !this.canSubmit(),
                        children: e
                    }),
                    (0, s.jsx)(N.zxk, {
                        onClick: () => {
                            this.setState({ slide: 'CHANNEL_INFO' });
                        },
                        look: N.zxk.Looks.LINK,
                        color: N.zxk.Colors.PRIMARY,
                        children: Y.NW.string(Y.t['13/7kZ'])
                    })
                ]
            })
        );
    }
    handlePermissionOverwriteChange(e) {
        this.setState({ pendingPermissionOverwrites: e });
    }
    renderCreateChannelContent() {
        let { channelType: e } = this.state;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                this.renderHeader(),
                (0, s.jsxs)(N.hzk, {
                    className: q.modalContent,
                    children: [this.renderType(), this.renderName(), e === F.d4z.GUILD_STORE ? this.renderStoreOptions() : null, this.renderChannelTypeDescription(e), e === F.d4z.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions()]
                }),
                this.renderError(),
                this.renderFooter()
            ]
        });
    }
    renderAddMemberSlideContent() {
        let { name: e, channelType: t } = this.state,
            { guildId: n, onClose: r } = this.props,
            i = this.getIconComponent(),
            l = t === F.d4z.GUILD_STAGE_VOICE;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(N.xBx, {
                    separator: !1,
                    children: [
                        (0, s.jsxs)('div', {
                            className: q.header,
                            children: [
                                (0, s.jsx)(N.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: q.title,
                                    children: l ? Y.NW.string(Y.t['S/6zHB']) : Y.NW.string(Y.t.dMJ3Y2)
                                }),
                                (0, s.jsxs)(N.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    className: q.subtitle,
                                    children: [
                                        (0, s.jsx)(i, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: q.subtitleIcon
                                        }),
                                        e
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsx)(N.olH, {
                            onClick: r,
                            className: q.closeButton
                        })
                    ]
                }),
                this.renderError(!0),
                (0, s.jsx)(ee, {
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
        return (0, s.jsx)('div', {
            children: (0, s.jsxs)(N.MyZ, {
                activeSlide: e,
                width: t,
                children: [
                    (0, s.jsx)(N.Mi4, {
                        id: 'CHANNEL_INFO',
                        impressionName: h.ImpressionNames.CHANNEL_ADD_INFO,
                        impressionProperties: n,
                        children: this.renderCreateChannelContent()
                    }),
                    (0, s.jsx)(N.Mi4, {
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
        return (0, s.jsx)(N.Y0X, {
            transitionState: e,
            className: q.modal,
            'aria-labelledby': this.headerId,
            size: N.CgR.DYNAMIC,
            children: (0, s.jsx)('form', {
                onSubmit: this.handleSubmit,
                children: this.renderSlides()
            })
        });
    }
    constructor(e) {
        super(e),
            K(this, 'headerId', (0, v.hQ)()),
            K(this, '_input', void 0),
            K(this, 'setInputRef', (e) => {
                this._input = e;
            }),
            K(this, 'handleNameChange', (e) => {
                let { channelType: t } = this.state;
                z.xL.has(t) && (e = (0, Z.Nj)(e)), this.setState({ name: e });
            }),
            K(this, 'handleTypeChange', (e) => {
                let { value: t } = e,
                    { name: n } = this.state;
                z.xL.has(t) && (n = (0, Z.Nj)(n)),
                    t === F.d4z.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
                    this.setState({
                        channelType: t,
                        name: n
                    });
            }),
            K(this, 'handlePrivacyChange', (e) => {
                this.setState({ isPrivate: e });
            }),
            K(this, 'handleApplicationChange', (e) => {
                this.setState({ applicationId: e });
            }),
            K(this, 'handleSKUChange', (e) => {
                this.setState({ skuId: e });
            }),
            K(this, 'handleShowBranchesToggle', (e) => {
                this.setState({
                    showBranches: e,
                    branchId: null
                });
            }),
            K(this, 'handleBranchChange', (e) => {
                this.setState({ branchId: e });
            }),
            K(this, 'handleHasBranchesChange', (e) => {
                this.setState({ hasBranches: e });
            }),
            K(this, 'handleSubmit', async (e) => {
                let t, n, s;
                e.preventDefault();
                let { cloneChannel: r, categoryId: i, user: l, memberRoleIds: a, isAdmin: o, onClose: d, owner: h } = this.props,
                    { name: u, pendingPermissionOverwrites: p, channelType: N, skuId: g, branchId: C, isPrivate: x } = this.state,
                    E = this.getGuildId();
                if (null != E) {
                    if (null != r) (t = c().values(r.permissionOverwrites)), (n = r.bitrate), (s = r.userLimit);
                    else if (N === F.d4z.GUILD_ANNOUNCEMENT) t = (0, Z.rt)(E);
                    else {
                        if (x) {
                            t = (0, Z.oQ)(E, N, [], !0);
                            let e = (0, b.Tj)(p, N);
                            e.length > 0 && (t = t.concat(e));
                            let n = null != h && l.id === h.id;
                            t.some((e) => a.has(e.id)) || o || n || t.push((0, Z.jZ)(l.id, N));
                        }
                        N === F.d4z.GUILD_STAGE_VOICE &&
                            ((t = []),
                            Object.values(p).forEach((e) => {
                                let { row: n } = e;
                                null != n.id && '' !== n.id && (n.rowType === V.aC.ROLE ? t.push((0, U.A)(n.id, I.BN.ROLE)) : n.rowType === V.aC.MEMBER && t.push((0, U.A)(n.id, I.BN.MEMBER)));
                            }));
                    }
                    this.setState({ errors: {} });
                    try {
                        let e = await m.Z.createChannel({
                            guildId: E,
                            type: N,
                            name: u,
                            permissionOverwrites: t,
                            bitrate: n,
                            userLimit: s,
                            parentId: N !== F.d4z.GUILD_CATEGORY ? i : null,
                            skuId: g,
                            branchId: C
                        });
                        if (null == e || 201 !== e.status) return;
                        let r = e.body;
                        z.xL.has(N) && (0, L.XU)(r.guild_id, r.id), d();
                    } catch (e) {
                        null != e.body && 'object' == typeof e.body ? this.setState({ errors: e.body }) : this.setState({ errors: { message: Y.NW.string(Y.t.fEptJC) } });
                    }
                }
            });
        let { channelType: t, cloneChannel: n, prefillChannelName: s } = e;
        (this.state = {
            channelType: null != t ? t : F.d4z.GUILD_TEXT,
            name: null != n ? (0, O.F6)(n, w.default, M.Z) : null != s ? s : '',
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
let en = r.forwardRef(function (e, t) {
    let { channelType: n, guildId: r, cloneChannelId: i } = e,
        l = (0, p.cj)([P.Z, w.default, R.Z, G.Z, W.ZP], () => {
            var e, t, s;
            let l = P.Z.getGuild(r),
                a = w.default.getCurrentUser();
            o()(null != a, 'CreateChannel: user cannot be undefined');
            let d = null != l && null != l.ownerId ? w.default.getUser(l.ownerId) : null,
                c = R.Z.can(F.Plq.ADMINISTRATOR, l),
                h = G.Z.getChannel(i);
            return {
                guild: l,
                canCreateStoreChannel: null != l && l.hasFeature(F.oNc.COMMERCE),
                canCreateAnnouncementChannel: null != l && l.hasFeature(F.oNc.NEWS),
                user: a,
                owner: d,
                memberRoles: null !== (t = null === (e = W.ZP.getMember(r, a.id)) || void 0 === e ? void 0 : e.roles) && void 0 !== t ? t : [],
                canViewChannels: R.Z.can(F.Plq.VIEW_CHANNEL, l),
                canConnect: R.Z.can(F.Plq.CONNECT, l),
                isAdmin: c,
                cloneChannel: h,
                channelType: null !== (s = null == h ? void 0 : h.type) && void 0 !== s ? s : n,
                canManageRoles: R.Z.can(F.Plq.MANAGE_ROLES, l),
                canManageChannels: R.Z.can(F.Plq.MANAGE_CHANNELS, l)
            };
        }),
        a = (0, p.Wu)([j.Z], () =>
            j.Z.getGuildApplicationIds(r)
                .map((e) => j.Z.getApplication(e))
                .filter(k.lm)
        ),
        d = new Set(l.memberRoles),
        { canManageRoles: c, canManageChannels: h } = l,
        u = (0, _.m)(r) && c && h,
        N = (0, T.W3)(r),
        m = (0, D.Ui)(null == l ? void 0 : l.guild),
        g = (0, S.Q3)('CreateChannel');
    return (0, s.jsx)(
        et,
        Q(J({}, e, l), {
            memberRoleIds: d,
            applications: a,
            canCreateStageChannel: u,
            canCreateForumChannel: N,
            canCreateMediaChannel: m,
            ref: t,
            width: g ? 496 : 460
        })
    );
});
