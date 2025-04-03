n.d(t, {
    default: () => es,
    p: () => ee
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
    b = n(933557),
    O = n(636816),
    f = n(605436),
    S = n(185413),
    v = n(313201),
    A = n(540059),
    T = n(688465),
    D = n(456269),
    L = n(312146),
    y = n(703656),
    _ = n(146085),
    U = n(60222),
    W = n(388131),
    z = n(131704),
    G = n(592125),
    P = n(271383),
    M = n(430824),
    R = n(496675),
    w = n(699516),
    Z = n(594174),
    k = n(934415),
    B = n(823379),
    F = n(63063),
    V = n(981631),
    H = n(71080),
    Y = n(710352),
    X = n(231338),
    q = n(388032),
    K = n(37448);
function J(e, t, n) {
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
function Q(e) {
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
                J(e, t, n[t]);
            });
    }
    return e;
}
function $(e, t) {
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
function ee(e) {
    let { isNew: t, isBeta: n } = e,
        r = null;
    return (
        !0 === t
            ? (r = (0, s.jsx)(N.IGR, {
                  text: q.NW.string(q.t.psHMa2),
                  className: K.newBadge,
                  color: u.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER
              }))
            : !0 === n && (r = (0, s.jsx)(T.Z, { className: K.newBadge })),
        r
    );
}
function et(e) {
    let { onChange: t, guildId: n, channelType: i, description: l } = e,
        [a, o] = r.useState({}),
        d = (0, p.e7)([M.Z], () => M.Z.getGuild(n)),
        c = i === V.d4z.GUILD_STAGE_VOICE;
    return (r.useEffect(() => {
        t(a);
    }, [a, t]),
    null == d)
        ? null
        : (0, s.jsx)(N.hzk, {
              className: K.addMembersContainer,
              children: (0, s.jsx)(S.U, {
                  guild: d,
                  channel: null,
                  permission: c ? _.yP : (0, z.CG)(i),
                  pendingAdditions: a,
                  setPendingAdditions: o,
                  isStageChannel: c,
                  description: l
              })
          });
}
class en extends r.PureComponent {
    componentDidMount() {
        let { _input: e } = this;
        null != e && e.select();
        let { guildId: t, applications: n, canCreateStoreChannel: s } = this.props;
        s && null == n && g.Z.fetchApplications(t),
            E.ZP.trackWithMetadata(V.rMx.OPEN_MODAL, { type: 'Create Channel' }),
            D.O2.trackExposure({
                guildId: t,
                location: '45d324_1'
            });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate && this.state.isPrivate && this.state.channelType === V.d4z.GUILD_ANNOUNCEMENT && this.setState({ channelType: V.d4z.GUILD_TEXT }), !t.isPrivate && this.state.isPrivate && E.ZP.trackWithMetadata(V.rMx.OPEN_MODAL, { type: 'Create Private Channel' });
    }
    getGuildId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.guildId;
    }
    canSubmit() {
        let { canViewChannels: e, canConnect: t } = this.props,
            { isPrivate: n, channelType: s, skuId: r, name: i } = this.state;
        return '' !== i && '' !== i.trim() && (!n || !!(0, f.nT)(s, e, t)) && (s !== V.d4z.GUILD_STORE || null != r);
    }
    getIconComponent() {
        let { isPrivate: e, channelType: t } = this.state;
        switch (t) {
            case V.d4z.GUILD_TEXT:
                return e ? N.W4G : N.VL1;
            case V.d4z.GUILD_FORUM:
                return N.Mmi;
            case V.d4z.GUILD_MEDIA:
                return N.XBm;
            case V.d4z.GUILD_VOICE:
                return e ? N.gjC : N.gj8;
            case V.d4z.GUILD_STORE:
                return N.lO_;
            case V.d4z.GUILD_ANNOUNCEMENT:
                return N.MqZ;
            case V.d4z.GUILD_STAGE_VOICE:
                return N.ewx;
            default:
                return (0, z.zi)(t) ? N.VL1 : X.Vq;
        }
    }
    renderHeader() {
        var e;
        let t,
            { cloneChannel: n, categoryId: r, onClose: i } = this.props,
            { channelType: l } = this.state,
            a = null != n ? q.NW.string(q.t.dEaPc3) : l === V.d4z.GUILD_CATEGORY ? q.NW.string(q.t['ISN+ND']) : q.NW.string(q.t['fUYU+v']);
        if (null != r) {
            let n = G.Z.getChannel(r);
            t = (0, s.jsx)(N.Text, {
                variant: 'text-xs/normal',
                color: 'header-secondary',
                className: K.subtitle,
                children: q.NW.format(q.t.L1zJgY, { categoryName: null != (e = null == n ? void 0 : n.name) ? e : '' })
            });
        }
        return (0, s.jsxs)(N.xBx, {
            separator: !1,
            children: [
                (0, s.jsxs)('div', {
                    className: K.header,
                    children: [
                        (0, s.jsx)(N.X6q, {
                            id: this.headerId,
                            variant: 'heading-lg/semibold',
                            className: K.title,
                            children: a
                        }),
                        t
                    ]
                }),
                (0, s.jsx)(N.olH, {
                    onClick: i,
                    className: K.closeButton
                })
            ]
        });
    }
    renderName() {
        let e,
            { cloneChannel: t, guildId: r } = this.props,
            { errors: i, channelType: l } = this.state;
        (null == i ? void 0 : i.name) != null &&
            (e = (0, s.jsx)(N.Text, {
                variant: 'text-xs/normal',
                color: 'text-danger',
                className: K.error,
                children: i.name
            }));
        let a = l === V.d4z.GUILD_CATEGORY,
            o = a ? q.NW.string(q.t.OCAkGB) : q.NW.string(q.t.PVbHDg),
            d =
                null != t
                    ? (0, s.jsx)(N.R94, {
                          className: K.channelNameNote,
                          type: N.R94.Types.DESCRIPTION,
                          children: q.NW.format(q.t.s2ZzZW, { name: (0, b.F6)(t, Z.default, w.Z, !0) })
                      })
                    : l === V.d4z.GUILD_FORUM
                      ? (0, s.jsx)(N.R94, {
                            className: K.channelNameNote,
                            type: N.R94.Types.DESCRIPTION,
                            children: q.NW.format(q.t.tbVWyc, {
                                forumUpsellHook: (e, t) =>
                                    (0, s.jsx)(
                                        N.eee,
                                        {
                                            onClick: () =>
                                                (0, N.ZDy)(async () => {
                                                    let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                                                    return (t) => (0, s.jsx)(e, $(Q({}, t), { guildId: r }));
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
                    titleClassName: K.sectionTitle,
                    className: K.name,
                    children: [
                        (0, s.jsx)(N.oil, {
                            value: this.state.name,
                            onChange: this.handleNameChange,
                            id: t,
                            inputRef: this.setInputRef,
                            maxLength: 100,
                            placeholder: (function (e) {
                                switch (e) {
                                    case V.d4z.GUILD_CATEGORY:
                                        return q.NW.string(q.t.eTVbt7);
                                    case V.d4z.GUILD_FORUM:
                                        return q.NW.string(q.t['5z1Xam']);
                                    default:
                                        return q.NW.string(q.t['bw/b8P']);
                                }
                            })(l),
                            className: K.inputWrapper,
                            inputClassName: a ? void 0 : K.inputInner,
                            prefixElement: a
                                ? null
                                : (0, s.jsx)(c, {
                                      className: K.inputPrefix,
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
        if (null != e || o === V.d4z.GUILD_CATEGORY) return;
        let c = null != t && t.length > 0;
        return (0, s.jsx)(N.xJW, {
            className: K.type,
            title: q.NW.string(q.t['7ZcXGx']),
            children: (0, s.jsx)(N.FXm, {
                options: (function (e) {
                    let { isPrivate: t, showStoreChannelOption: n, showAnnouncementChannelOption: r, canCreateStageChannel: i, canCreateForumChannel: l, canCreateMediaChannel: a } = e,
                        o = [
                            {
                                icon: t ? N.W4G : N.VL1,
                                label: q.NW.string(q.t.pnuRXF),
                                value: V.d4z.GUILD_TEXT,
                                description: q.NW.string(q.t.Hf5Lb2)
                            }
                        ];
                    return (
                        o.push({
                            icon: t ? N.gjC : N.gj8,
                            label: q.NW.string(q.t.Sx55Oj),
                            value: V.d4z.GUILD_VOICE,
                            description: q.NW.string(q.t.pqfkoK)
                        }),
                        l &&
                            o.push({
                                icon: t ? N.BUe : N.Mmi,
                                label: q.NW.string(q.t.eAVIDw),
                                value: V.d4z.GUILD_FORUM,
                                description: (0, s.jsxs)(N.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: K.radioLabelDescription,
                                    children: [
                                        q.NW.string(q.t.iZ5pgo),
                                        (0, s.jsx)('br', {}),
                                        q.NW.format(q.t.fjSvsL, {
                                            onClick: () => {
                                                open(Y.V8);
                                            }
                                        })
                                    ]
                                })
                            }),
                        a &&
                            o.push({
                                icon: t ? N.D7T : N.XBm,
                                label: q.NW.string(q.t['6x6fVl']),
                                value: V.d4z.GUILD_MEDIA,
                                description: (0, s.jsxs)(N.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: K.radioLabelDescription,
                                    children: [
                                        q.NW.string(q.t.JyCrwc),
                                        (0, s.jsx)('br', {}),
                                        q.NW.format(q.t.fjSvsL, {
                                            onClick: () => {
                                                open(F.Z.getCreatorSupportArticleURL(V.BhN.MEDIA_CHANNEL));
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
                                label: q.NW.string(q.t.qr9dEB),
                                value: V.d4z.GUILD_ANNOUNCEMENT,
                                description: q.NW.string(q.t.gBkfzs)
                            }),
                        n &&
                            o.push({
                                icon: N.lO_,
                                iconSize: 24,
                                label: q.NW.string(q.t.SxjkXV),
                                value: V.d4z.GUILD_STORE,
                                description: q.NW.string(q.t.nmCPMD)
                            }),
                        i &&
                            o.push({
                                icon: N.ewx,
                                iconSize: 24,
                                label: q.NW.string(q.t.pNWst7),
                                value: V.d4z.GUILD_STAGE_VOICE,
                                description: q.NW.string(q.t.VPAwgo)
                            }),
                        o.map((e) => {
                            let { icon: t, iconSize: n, label: r, value: i, description: l, isNew: a, isBeta: o } = e;
                            return {
                                name: (0, s.jsxs)('div', {
                                    className: K.radioItemName,
                                    children: [
                                        (0, s.jsx)(
                                            t,
                                            $(
                                                Q(
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
                                                    className: K.icon,
                                                    colorClass: K.foreground
                                                }
                                            )
                                        ),
                                        (0, s.jsxs)('div', {
                                            children: [
                                                (0, s.jsxs)(N.Text, {
                                                    variant: 'text-md/medium',
                                                    className: K.radioLabelName,
                                                    children: [
                                                        r,
                                                        (0, s.jsx)(ee, {
                                                            isNew: a,
                                                            isBeta: o
                                                        })
                                                    ]
                                                }),
                                                'string' == typeof l
                                                    ? (0, s.jsx)(N.Text, {
                                                          variant: 'text-sm/normal',
                                                          color: 'header-secondary',
                                                          className: K.radioLabelDescription,
                                                          children: l
                                                      })
                                                    : l
                                            ]
                                        })
                                    ]
                                }),
                                value: i,
                                radioBarClassName: K.radioBar,
                                radioItemIconClassName: K.radioBarIcon
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
                itemInfoClassName: K.radioBarLabel
            })
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
                    children: q.NW.string(q.t.vPIW2N)
                }),
                (0, s.jsx)(N.q4e, {
                    options: e.map((e) => ({
                        label: e.name,
                        value: e.id
                    })),
                    placeholder: q.NW.string(q.t['3XfCPT']),
                    value: t,
                    onChange: this.handleApplicationChange,
                    className: K.storeChannelOptionSelector
                }),
                null != t
                    ? (0, s.jsxs)(r.Fragment, {
                          children: [
                              (0, s.jsx)(N.vwX, {
                                  tag: 'h5',
                                  children: q.NW.string(q.t.XNIWFh)
                              }),
                              (0, s.jsx)(
                                  x.Z,
                                  {
                                      applicationId: t,
                                      onChange: this.handleSKUChange,
                                      selectedSkuId: n,
                                      className: K.storeChannelOptionSelector
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
                          note: q.NW.format(q.t.UVXL1d, { devPortalUrl: V.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT }),
                          children: [
                              (0, s.jsx)(N._m8, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: K.switchIcon
                              }),
                              q.NW.string(q.t['3e9mHx'])
                          ]
                      })
                    : null,
                null != t
                    ? (0, s.jsxs)(r.Fragment, {
                          children: [
                              l
                                  ? (0, s.jsx)(N.vwX, {
                                        tag: 'h5',
                                        children: q.NW.string(q.t.o7DqFx)
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
                                      className: K.storeChannelOptionSelector
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
        if (null != e || t === V.d4z.GUILD_ANNOUNCEMENT) return null;
        let r = t === V.d4z.GUILD_CATEGORY ? q.NW.string(q.t.lEPAZ2) : q.NW.string(q.t.aUI70t),
            i = t === V.d4z.GUILD_CATEGORY ? q.NW.string(q.t['RQUk6+']) : q.NW.string(q.t.YguuKi);
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
                            className: K.switchIcon
                        }),
                        r
                    ]
                })
            },
            'privacy-switch'
        );
    }
    renderError(e) {
        let t,
            { channelType: n, isPrivate: r, errors: i } = this.state,
            { canConnect: a, canViewChannels: o } = this.props;
        if (Object.values(i).length > 0) {
            if (null != i.message && '' !== i.message) t = i.message;
            else if (e || null == i.name) {
                let e = Object.values(i)[0];
                e.length > 0 && (t = e);
            }
        } else r && !(0, f.nT)(n, o, a) && (t = (0, f.$7)(n));
        if (null != t)
            return (0, s.jsx)('div', {
                className: l()(K.createError, { [K.addMemberError]: e }),
                children: (0, s.jsx)(N.Wn, {
                    messageType: N.QYI.ERROR,
                    children: t
                })
            });
    }
    renderFooter() {
        let e,
            { channelType: t, onClose: n } = this.props,
            { channelType: r } = this.state,
            { isPrivate: i } = this.state;
        e = t === V.d4z.GUILD_CATEGORY ? q.NW.string(q.t['ISN+ND']) : q.NW.string(q.t['fUYU+v']);
        let l = i || r === V.d4z.GUILD_STAGE_VOICE;
        return (0, s.jsxs)(N.mzw, {
            className: K.modalFooter,
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
                          children: q.NW.string(q.t.PDTjLC)
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
                    children: q.NW.string(q.t['ETE/oK'])
                })
            ]
        });
    }
    renderAddMemberFooter() {
        let e,
            { channelType: t } = this.props,
            { pendingPermissionOverwrites: n } = this.state;
        return (
            (e = 0 === Object.keys(n).length ? q.NW.string(q.t['5WxrcX']) : t === V.d4z.GUILD_CATEGORY ? q.NW.string(q.t['ISN+ND']) : q.NW.string(q.t['fUYU+v'])),
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
                        children: q.NW.string(q.t['13/7kZ'])
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
        return (0, s.jsxs)(s.Fragment, {
            children: [
                this.renderHeader(),
                (0, s.jsxs)(N.hzk, {
                    className: K.modalContent,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        e === V.d4z.GUILD_STORE ? this.renderStoreOptions() : null,
                        (0, s.jsx)(O.Z, {
                            guildId: t,
                            channelType: e,
                            className: K.channelTypeDescription
                        }),
                        e === V.d4z.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions()
                    ]
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
            l = t === V.d4z.GUILD_STAGE_VOICE;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(N.xBx, {
                    separator: !1,
                    children: [
                        (0, s.jsxs)(N.Kqy, {
                            gap: 4,
                            className: K.header,
                            children: [
                                (0, s.jsx)(N.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: K.title,
                                    children: l ? q.NW.string(q.t['S/6zHB']) : q.NW.string(q.t.dMJ3Y2)
                                }),
                                (0, s.jsxs)(N.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    className: K.subtitle,
                                    children: [
                                        (0, s.jsx)(i, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: K.subtitleIcon
                                        }),
                                        e
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsx)(N.olH, {
                            onClick: r,
                            className: K.closeButton
                        })
                    ]
                }),
                this.renderError(!0),
                (0, s.jsx)(et, {
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
            className: K.modal,
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
            J(this, 'headerId', (0, v.hQ)()),
            J(this, '_input', void 0),
            J(this, 'setInputRef', (e) => {
                this._input = e;
            }),
            J(this, 'handleNameChange', (e) => {
                let { channelType: t } = this.state;
                z.xL.has(t) && (e = (0, k.Nj)(e)), this.setState({ name: e });
            }),
            J(this, 'handleTypeChange', (e) => {
                let { value: t } = e,
                    { name: n } = this.state;
                z.xL.has(t) && (n = (0, k.Nj)(n)),
                    t === V.d4z.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
                    this.setState({
                        channelType: t,
                        name: n
                    });
            }),
            J(this, 'handlePrivacyChange', (e) => {
                this.setState({ isPrivate: e });
            }),
            J(this, 'handleApplicationChange', (e) => {
                this.setState({ applicationId: e });
            }),
            J(this, 'handleSKUChange', (e) => {
                this.setState({ skuId: e });
            }),
            J(this, 'handleShowBranchesToggle', (e) => {
                this.setState({
                    showBranches: e,
                    branchId: null
                });
            }),
            J(this, 'handleBranchChange', (e) => {
                this.setState({ branchId: e });
            }),
            J(this, 'handleHasBranchesChange', (e) => {
                this.setState({ hasBranches: e });
            }),
            J(this, 'handleSubmit', async (e) => {
                let t, n, s;
                e.preventDefault();
                let { cloneChannel: r, categoryId: i, user: l, memberRoleIds: a, isAdmin: o, onClose: d, owner: h } = this.props,
                    { name: u, pendingPermissionOverwrites: p, channelType: N, skuId: g, branchId: C, isPrivate: x } = this.state,
                    E = this.getGuildId();
                if (null != E) {
                    if (null != r) (t = c().values(r.permissionOverwrites)), (n = r.bitrate), (s = r.userLimit);
                    else if (N === V.d4z.GUILD_ANNOUNCEMENT) t = (0, k.rt)(E);
                    else {
                        if (x) {
                            t = (0, k.oQ)(E, N, [], !0);
                            let e = (0, f.Tj)(p, N);
                            e.length > 0 && (t = t.concat(e));
                            let n = null != h && l.id === h.id;
                            t.some((e) => a.has(e.id)) || o || n || t.push((0, k.jZ)(l.id, N));
                        }
                        N === V.d4z.GUILD_STAGE_VOICE &&
                            ((t = []),
                            Object.values(p).forEach((e) => {
                                let { row: n } = e;
                                null != n.id && '' !== n.id && (n.rowType === H.aC.ROLE ? t.push((0, W.A)(n.id, I.BN.ROLE)) : n.rowType === H.aC.MEMBER && t.push((0, W.A)(n.id, I.BN.MEMBER)));
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
                            parentId: N !== V.d4z.GUILD_CATEGORY ? i : null,
                            skuId: g,
                            branchId: C
                        });
                        if (null == e || 201 !== e.status) return;
                        let r = e.body;
                        z.xL.has(N) && (0, y.XU)(r.guild_id, r.id), d();
                    } catch (e) {
                        null != e.body && 'object' == typeof e.body ? this.setState({ errors: e.body }) : this.setState({ errors: { message: q.NW.string(q.t.fEptJC) } });
                    }
                }
            });
        let { channelType: t, cloneChannel: n, prefillChannelName: s } = e;
        (this.state = {
            channelType: null != t ? t : V.d4z.GUILD_TEXT,
            name: null != n ? (0, b.F6)(n, Z.default, w.Z) : null != s ? s : '',
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
let es = r.forwardRef(function (e, t) {
    let { channelType: n, guildId: r, cloneChannelId: i } = e,
        l = (0, p.cj)([M.Z, Z.default, R.Z, G.Z, P.ZP], () => {
            var e, t, s;
            let l = M.Z.getGuild(r),
                a = Z.default.getCurrentUser();
            o()(null != a, 'CreateChannel: user cannot be undefined');
            let d = null != l && null != l.ownerId ? Z.default.getUser(l.ownerId) : null,
                c = R.Z.can(V.Plq.ADMINISTRATOR, l),
                h = G.Z.getChannel(i);
            return {
                guild: l,
                canCreateStoreChannel: null != l && l.hasFeature(V.oNc.COMMERCE),
                canCreateAnnouncementChannel: null != l && l.hasFeature(V.oNc.NEWS),
                user: a,
                owner: d,
                memberRoles: null != (t = null == (e = P.ZP.getMember(r, a.id)) ? void 0 : e.roles) ? t : [],
                canViewChannels: R.Z.can(V.Plq.VIEW_CHANNEL, l),
                canConnect: R.Z.can(V.Plq.CONNECT, l),
                isAdmin: c,
                cloneChannel: h,
                channelType: null != (s = null == h ? void 0 : h.type) ? s : n,
                canManageRoles: R.Z.can(V.Plq.MANAGE_ROLES, l),
                canManageChannels: R.Z.can(V.Plq.MANAGE_CHANNELS, l)
            };
        }),
        a = (0, p.Wu)([j.Z], () =>
            j.Z.getGuildApplicationIds(r)
                .map((e) => j.Z.getApplication(e))
                .filter(B.lm)
        ),
        d = new Set(l.memberRoles),
        { canManageRoles: c, canManageChannels: h } = l,
        u = (0, U.m)(r) && c && h,
        N = (0, D.W3)(r),
        m = (0, L.Ui)(null == l ? void 0 : l.guild),
        g = (0, A.Q3)('CreateChannel');
    return (0, s.jsx)(
        en,
        $(Q({}, e, l), {
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
