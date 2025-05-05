n.d(t, {
    default: () => es,
    p: () => ee
}),
    n(539854),
    n(953529),
    n(388685),
    n(781311),
    n(415506);
var s = n(255367),
    i = n(73800),
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
    z = n(388131),
    G = n(131704),
    P = n(592125),
    R = n(271383),
    M = n(430824),
    w = n(496675),
    Z = n(699516),
    B = n(594174),
    k = n(934415),
    F = n(823379),
    V = n(63063),
    H = n(981631),
    Y = n(71080),
    X = n(710352),
    W = n(231338),
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
        i = null;
    return (
        !0 === t
            ? (i = (0, s.jsx)(m.IGR, {
                  text: q.intl.string(q.t.psHMa2),
                  className: K.newBadge,
                  color: u.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER
              }))
            : !0 === n && (i = (0, s.jsx)(T.Z, { className: K.newBadge })),
        i
    );
}
function et(e) {
    let { onChange: t, guildId: n, channelType: l, description: r } = e,
        [a, o] = i.useState({}),
        d = (0, p.e7)([M.Z], () => M.Z.getGuild(n)),
        c = l === H.d4z.GUILD_STAGE_VOICE;
    return (i.useEffect(() => {
        t(a);
    }, [a, t]),
    null == d)
        ? null
        : (0, s.jsx)(m.hzk, {
              className: K.addMembersContainer,
              children: (0, s.jsx)(S.U, {
                  guild: d,
                  channel: null,
                  permission: c ? _.yP : (0, G.CG)(l),
                  pendingAdditions: a,
                  setPendingAdditions: o,
                  isStageChannel: c,
                  description: r
              })
          });
}
class en extends i.PureComponent {
    componentDidMount() {
        let { _input: e } = this;
        null != e && e.select();
        let { guildId: t, applications: n, canCreateStoreChannel: s } = this.props;
        s && null == n && C.Z.fetchApplications(t),
            E.ZP.trackWithMetadata(H.rMx.OPEN_MODAL, { type: 'Create Channel' }),
            D.O2.trackExposure({
                guildId: t,
                location: '45d324_1'
            });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate && this.state.isPrivate && this.state.channelType === H.d4z.GUILD_ANNOUNCEMENT && this.setState({ channelType: H.d4z.GUILD_TEXT }), !t.isPrivate && this.state.isPrivate && E.ZP.trackWithMetadata(H.rMx.OPEN_MODAL, { type: 'Create Private Channel' });
    }
    getGuildId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.guildId;
    }
    canSubmit() {
        let { canViewChannels: e, canConnect: t } = this.props,
            { isPrivate: n, channelType: s, skuId: i, name: l } = this.state;
        return '' !== l && '' !== l.trim() && (!n || !!(0, f.nT)(s, e, t)) && (s !== H.d4z.GUILD_STORE || null != i);
    }
    getIconComponent() {
        let { isPrivate: e, channelType: t } = this.state;
        switch (t) {
            case H.d4z.GUILD_TEXT:
                return e ? m.W4G : m.VL1;
            case H.d4z.GUILD_FORUM:
                return m.Mmi;
            case H.d4z.GUILD_MEDIA:
                return m.XBm;
            case H.d4z.GUILD_VOICE:
                return e ? m.gjC : m.gj8;
            case H.d4z.GUILD_STORE:
                return m.lO_;
            case H.d4z.GUILD_ANNOUNCEMENT:
                return m.MqZ;
            case H.d4z.GUILD_STAGE_VOICE:
                return m.ewx;
            default:
                return (0, G.zi)(t) ? m.VL1 : W.Vq;
        }
    }
    renderHeader() {
        var e;
        let t,
            { cloneChannel: n, categoryId: i, onClose: l } = this.props,
            { channelType: r } = this.state,
            a = null != n ? q.intl.string(q.t.dEaPc3) : r === H.d4z.GUILD_CATEGORY ? q.intl.string(q.t['ISN+ND']) : q.intl.string(q.t['fUYU+v']);
        if (null != i) {
            let n = P.Z.getChannel(i);
            t = (0, s.jsx)(m.Text, {
                variant: 'text-xs/normal',
                color: 'header-secondary',
                className: K.subtitle,
                children: q.intl.format(q.t.L1zJgY, { categoryName: null != (e = null == n ? void 0 : n.name) ? e : '' })
            });
        }
        return (0, s.jsxs)(m.xBx, {
            separator: !1,
            children: [
                (0, s.jsxs)('div', {
                    className: K.header,
                    children: [
                        (0, s.jsx)(m.X6q, {
                            id: this.headerId,
                            variant: 'heading-lg/semibold',
                            className: K.title,
                            children: a
                        }),
                        t
                    ]
                }),
                (0, s.jsx)(m.olH, {
                    onClick: l,
                    className: K.closeButton
                })
            ]
        });
    }
    renderName() {
        let e,
            { cloneChannel: t, guildId: i } = this.props,
            { errors: l, channelType: r } = this.state;
        (null == l ? void 0 : l.name) != null &&
            (e = (0, s.jsx)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-danger',
                className: K.error,
                children: l.name
            }));
        let a = r === H.d4z.GUILD_CATEGORY,
            o = a ? q.intl.string(q.t.OCAkGB) : q.intl.string(q.t.PVbHDg),
            d =
                null != t
                    ? (0, s.jsx)(m.R94, {
                          className: K.channelNameNote,
                          type: m.R94.Types.DESCRIPTION,
                          children: q.intl.format(q.t.s2ZzZW, { name: (0, b.F6)(t, B.default, Z.Z, !0) })
                      })
                    : r === H.d4z.GUILD_FORUM
                      ? (0, s.jsx)(m.R94, {
                            className: K.channelNameNote,
                            type: m.R94.Types.DESCRIPTION,
                            children: q.intl.format(q.t.tbVWyc, {
                                forumUpsellHook: (e, t) =>
                                    (0, s.jsx)(
                                        m.eee,
                                        {
                                            onClick: () =>
                                                (0, m.ZDy)(async () => {
                                                    let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                                                    return (t) => (0, s.jsx)(e, $(Q({}, t), { guildId: i }));
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
                (0, s.jsxs)(m.xJW, {
                    title: o,
                    tag: 'label',
                    htmlFor: t,
                    titleClassName: K.sectionTitle,
                    className: K.name,
                    children: [
                        (0, s.jsx)(m.oil, {
                            value: this.state.name,
                            onChange: this.handleNameChange,
                            id: t,
                            inputRef: this.setInputRef,
                            maxLength: 100,
                            placeholder: (function (e) {
                                switch (e) {
                                    case H.d4z.GUILD_CATEGORY:
                                        return q.intl.string(q.t.eTVbt7);
                                    case H.d4z.GUILD_FORUM:
                                        return q.intl.string(q.t['5z1Xam']);
                                    default:
                                        return q.intl.string(q.t['bw/b8P']);
                                }
                            })(r),
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
        let { cloneChannel: e, applications: t, canCreateStoreChannel: n, canCreateAnnouncementChannel: i, canCreateStageChannel: l, canCreateForumChannel: r, canCreateMediaChannel: a } = this.props,
            { channelType: o, isPrivate: d } = this.state;
        if (null != e || o === H.d4z.GUILD_CATEGORY) return;
        let c = null != t && t.length > 0;
        return (0, s.jsx)(m.xJW, {
            className: K.type,
            title: q.intl.string(q.t['7ZcXGx']),
            children: (0, s.jsx)(m.FXm, {
                options: (function (e) {
                    let { isPrivate: t, showStoreChannelOption: n, showAnnouncementChannelOption: i, canCreateStageChannel: l, canCreateForumChannel: r, canCreateMediaChannel: a } = e,
                        o = [
                            {
                                icon: t ? m.W4G : m.VL1,
                                label: q.intl.string(q.t.pnuRXF),
                                value: H.d4z.GUILD_TEXT,
                                description: q.intl.string(q.t.Hf5Lb2)
                            }
                        ];
                    return (
                        o.push({
                            icon: t ? m.gjC : m.gj8,
                            label: q.intl.string(q.t.Sx55Oj),
                            value: H.d4z.GUILD_VOICE,
                            description: q.intl.string(q.t.pqfkoK)
                        }),
                        r &&
                            o.push({
                                icon: t ? m.BUe : m.Mmi,
                                label: q.intl.string(q.t.eAVIDw),
                                value: H.d4z.GUILD_FORUM,
                                description: (0, s.jsxs)(m.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: K.radioLabelDescription,
                                    children: [
                                        q.intl.string(q.t.iZ5pgo),
                                        (0, s.jsx)('br', {}),
                                        q.intl.format(q.t.fjSvsL, {
                                            onClick: () => {
                                                open(X.V8);
                                            }
                                        })
                                    ]
                                })
                            }),
                        a &&
                            o.push({
                                icon: t ? m.D7T : m.XBm,
                                label: q.intl.string(q.t['6x6fVl']),
                                value: H.d4z.GUILD_MEDIA,
                                description: (0, s.jsxs)(m.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: K.radioLabelDescription,
                                    children: [
                                        q.intl.string(q.t.JyCrwc),
                                        (0, s.jsx)('br', {}),
                                        q.intl.format(q.t.fjSvsL, {
                                            onClick: () => {
                                                open(V.Z.getCreatorSupportArticleURL(H.BhN.MEDIA_CHANNEL));
                                            }
                                        })
                                    ]
                                }),
                                isBeta: !0
                            }),
                        i &&
                            o.push({
                                icon: m.MqZ,
                                iconSize: 24,
                                label: q.intl.string(q.t.qr9dEB),
                                value: H.d4z.GUILD_ANNOUNCEMENT,
                                description: q.intl.string(q.t.gBkfzs)
                            }),
                        n &&
                            o.push({
                                icon: m.lO_,
                                iconSize: 24,
                                label: q.intl.string(q.t.SxjkXV),
                                value: H.d4z.GUILD_STORE,
                                description: q.intl.string(q.t.nmCPMD)
                            }),
                        l &&
                            o.push({
                                icon: m.ewx,
                                iconSize: 24,
                                label: q.intl.string(q.t.pNWst7),
                                value: H.d4z.GUILD_STAGE_VOICE,
                                description: q.intl.string(q.t.VPAwgo)
                            }),
                        o.map((e) => {
                            let { icon: t, iconSize: n, label: i, value: l, description: r, isNew: a, isBeta: o } = e;
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
                                                (0, s.jsxs)(m.Text, {
                                                    variant: 'text-md/medium',
                                                    className: K.radioLabelName,
                                                    children: [
                                                        i,
                                                        (0, s.jsx)(ee, {
                                                            isNew: a,
                                                            isBeta: o
                                                        })
                                                    ]
                                                }),
                                                'string' == typeof r
                                                    ? (0, s.jsx)(m.Text, {
                                                          variant: 'text-sm/normal',
                                                          color: 'header-secondary',
                                                          className: K.radioLabelDescription,
                                                          children: r
                                                      })
                                                    : r
                                            ]
                                        })
                                    ]
                                }),
                                value: l,
                                radioBarClassName: K.radioBar,
                                radioItemIconClassName: K.radioBarIcon
                            };
                        })
                    );
                })({
                    isPrivate: d,
                    showStoreChannelOption: n && c,
                    showAnnouncementChannelOption: i,
                    canCreateStageChannel: l,
                    canCreateForumChannel: r,
                    canCreateMediaChannel: a
                }),
                value: o,
                size: m.FXm.Sizes.NOT_SET,
                onChange: this.handleTypeChange,
                itemInfoClassName: K.radioBarLabel
            })
        });
    }
    renderStoreOptions() {
        let { applications: e } = this.props,
            { applicationId: t, skuId: n, branchId: l, showBranches: r, hasBranches: a } = this.state;
        if (null == e || 0 === e.length) throw Error('Unexpected empty applications');
        return (0, s.jsxs)('div', {
            children: [
                (0, s.jsx)(m.vwX, {
                    tag: 'h5',
                    children: q.intl.string(q.t.vPIW2N)
                }),
                (0, s.jsx)(m.q4e, {
                    options: e.map((e) => ({
                        label: e.name,
                        value: e.id
                    })),
                    placeholder: q.intl.string(q.t['3XfCPT']),
                    value: t,
                    onChange: this.handleApplicationChange,
                    className: K.storeChannelOptionSelector
                }),
                null != t
                    ? (0, s.jsxs)(i.Fragment, {
                          children: [
                              (0, s.jsx)(m.vwX, {
                                  tag: 'h5',
                                  children: q.intl.string(q.t.XNIWFh)
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
                    ? (0, s.jsxs)(m.j7V, {
                          hideBorder: !0,
                          onChange: this.handleShowBranchesToggle,
                          value: r,
                          note: q.intl.format(q.t.UVXL1d, { devPortalUrl: H.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT }),
                          children: [
                              (0, s.jsx)(m._m8, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: K.switchIcon
                              }),
                              q.intl.string(q.t['3e9mHx'])
                          ]
                      })
                    : null,
                null != t
                    ? (0, s.jsxs)(i.Fragment, {
                          children: [
                              r
                                  ? (0, s.jsx)(m.vwX, {
                                        tag: 'h5',
                                        children: q.intl.string(q.t.o7DqFx)
                                    })
                                  : null,
                              (0, s.jsx)(
                                  N.Z,
                                  {
                                      applicationId: t,
                                      onChange: this.handleBranchChange,
                                      selectedBranchId: l,
                                      hide: !r,
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
        if (null != e || t === H.d4z.GUILD_ANNOUNCEMENT) return null;
        let i = t === H.d4z.GUILD_CATEGORY ? q.intl.string(q.t.lEPAZ2) : q.intl.string(q.t.aUI70t),
            l = t === H.d4z.GUILD_CATEGORY ? q.intl.string(q.t['RQUk6+']) : q.intl.string(q.t.YguuKi);
        return (0, s.jsx)(
            m.xJW,
            {
                children: (0, s.jsxs)(m.j7V, {
                    hideBorder: !0,
                    onChange: this.handlePrivacyChange,
                    value: n,
                    note: l,
                    children: [
                        (0, s.jsx)(m.mBM, {
                            size: 'md',
                            color: 'currentColor',
                            className: K.switchIcon
                        }),
                        i
                    ]
                })
            },
            'privacy-switch'
        );
    }
    renderError(e) {
        let t,
            { channelType: n, isPrivate: i, errors: l } = this.state,
            { canConnect: a, canViewChannels: o } = this.props;
        if (Object.values(l).length > 0) {
            if (null != l.message && '' !== l.message) t = l.message;
            else if (e || null == l.name) {
                let e = Object.values(l)[0];
                e.length > 0 && (t = e);
            }
        } else i && !(0, f.nT)(n, o, a) && (t = (0, f.$7)(n));
        if (null != t)
            return (0, s.jsx)('div', {
                className: r()(K.createError, { [K.addMemberError]: e }),
                children: (0, s.jsx)(m.Wn, {
                    messageType: m.QYI.ERROR,
                    children: t
                })
            });
    }
    renderFooter() {
        let e,
            { channelType: t, onClose: n } = this.props,
            { channelType: i } = this.state,
            { isPrivate: l } = this.state;
        e = t === H.d4z.GUILD_CATEGORY ? q.intl.string(q.t['ISN+ND']) : q.intl.string(q.t['fUYU+v']);
        let r = l || i === H.d4z.GUILD_STAGE_VOICE;
        return (0, s.jsxs)(m.mzw, {
            className: K.modalFooter,
            children: [
                r
                    ? (0, s.jsx)(m.zxk, {
                          type: 'button',
                          onClick: () => {
                              this.setState({
                                  slide: 'ADD_MEMBERS',
                                  errors: {}
                              });
                          },
                          disabled: !this.canSubmit(),
                          children: q.intl.string(q.t.PDTjLC)
                      })
                    : (0, s.jsx)(m.zxk, {
                          type: 'submit',
                          disabled: !this.canSubmit(),
                          children: e
                      }),
                (0, s.jsx)(m.zxk, {
                    onClick: n,
                    look: m.zxk.Looks.LINK,
                    color: m.zxk.Colors.PRIMARY,
                    children: q.intl.string(q.t['ETE/oK'])
                })
            ]
        });
    }
    renderAddMemberFooter() {
        let e,
            { channelType: t } = this.props,
            { pendingPermissionOverwrites: n } = this.state;
        return (
            (e = 0 === Object.keys(n).length ? q.intl.string(q.t['5WxrcX']) : t === H.d4z.GUILD_CATEGORY ? q.intl.string(q.t['ISN+ND']) : q.intl.string(q.t['fUYU+v'])),
            (0, s.jsxs)(m.mzw, {
                children: [
                    (0, s.jsx)(m.zxk, {
                        type: 'submit',
                        disabled: !this.canSubmit(),
                        children: e
                    }),
                    (0, s.jsx)(m.zxk, {
                        onClick: () => {
                            this.setState({ slide: 'CHANNEL_INFO' });
                        },
                        look: m.zxk.Looks.LINK,
                        color: m.zxk.Colors.PRIMARY,
                        children: q.intl.string(q.t['13/7kZ'])
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
                (0, s.jsxs)(m.hzk, {
                    className: K.modalContent,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        e === H.d4z.GUILD_STORE ? this.renderStoreOptions() : null,
                        (0, s.jsx)(O.Z, {
                            guildId: t,
                            channelType: e,
                            className: K.channelTypeDescription
                        }),
                        e === H.d4z.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions()
                    ]
                }),
                this.renderError(),
                this.renderFooter()
            ]
        });
    }
    renderAddMemberSlideContent() {
        let { name: e, channelType: t } = this.state,
            { guildId: n, onClose: i } = this.props,
            l = this.getIconComponent(),
            r = t === H.d4z.GUILD_STAGE_VOICE;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(m.xBx, {
                    separator: !1,
                    children: [
                        (0, s.jsxs)(m.Kqy, {
                            gap: 4,
                            className: K.header,
                            children: [
                                (0, s.jsx)(m.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: K.title,
                                    children: r ? q.intl.string(q.t['S/6zHB']) : q.intl.string(q.t.dMJ3Y2)
                                }),
                                (0, s.jsxs)(m.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    className: K.subtitle,
                                    children: [
                                        (0, s.jsx)(l, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: K.subtitleIcon
                                        }),
                                        e
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsx)(m.olH, {
                            onClick: i,
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
            children: (0, s.jsxs)(m.MyZ, {
                activeSlide: e,
                width: t,
                children: [
                    (0, s.jsx)(m.Mi4, {
                        id: 'CHANNEL_INFO',
                        impressionName: h.ImpressionNames.CHANNEL_ADD_INFO,
                        impressionProperties: n,
                        children: this.renderCreateChannelContent()
                    }),
                    (0, s.jsx)(m.Mi4, {
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
        return (0, s.jsx)(m.Y0X, {
            transitionState: e,
            className: K.modal,
            'aria-labelledby': this.headerId,
            size: m.CgR.DYNAMIC,
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
                G.xL.has(t) && (e = (0, k.Nj)(e)), this.setState({ name: e });
            }),
            J(this, 'handleTypeChange', (e) => {
                let { value: t } = e,
                    { name: n } = this.state;
                G.xL.has(t) && (n = (0, k.Nj)(n)),
                    t === H.d4z.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
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
                let { cloneChannel: i, categoryId: l, user: r, memberRoleIds: a, isAdmin: o, onClose: d, owner: h } = this.props,
                    { name: u, pendingPermissionOverwrites: p, channelType: m, skuId: C, branchId: N, isPrivate: x } = this.state,
                    E = this.getGuildId();
                if (null != E) {
                    if (null != i) (t = c().values(i.permissionOverwrites)), (n = i.bitrate), (s = i.userLimit);
                    else if (m === H.d4z.GUILD_ANNOUNCEMENT) t = (0, k.rt)(E);
                    else {
                        if (x) {
                            t = (0, k.oQ)(E, m, [], !0);
                            let e = (0, f.Tj)(p, m);
                            e.length > 0 && (t = t.concat(e));
                            let n = null != h && r.id === h.id;
                            t.some((e) => a.has(e.id)) || o || n || t.push((0, k.jZ)(r.id, m));
                        }
                        m === H.d4z.GUILD_STAGE_VOICE &&
                            ((t = []),
                            Object.values(p).forEach((e) => {
                                let { row: n } = e;
                                null != n.id && '' !== n.id && (n.rowType === Y.aC.ROLE ? t.push((0, z.A)(n.id, I.BN.ROLE)) : n.rowType === Y.aC.MEMBER && t.push((0, z.A)(n.id, I.BN.MEMBER)));
                            }));
                    }
                    this.setState({ errors: {} });
                    try {
                        let e = await g.Z.createChannel({
                            guildId: E,
                            type: m,
                            name: u,
                            permissionOverwrites: t,
                            bitrate: n,
                            userLimit: s,
                            parentId: m !== H.d4z.GUILD_CATEGORY ? l : null,
                            skuId: C,
                            branchId: N
                        });
                        if (null == e || 201 !== e.status) return;
                        let i = e.body;
                        G.xL.has(m) && (0, y.XU)(i.guild_id, i.id), d();
                    } catch (e) {
                        null != e.body && 'object' == typeof e.body ? this.setState({ errors: e.body }) : this.setState({ errors: { message: q.intl.string(q.t.fEptJC) } });
                    }
                }
            });
        let { channelType: t, cloneChannel: n, prefillChannelName: s } = e;
        (this.state = {
            channelType: null != t ? t : H.d4z.GUILD_TEXT,
            name: null != n ? (0, b.F6)(n, B.default, Z.Z) : null != s ? s : '',
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
let es = i.forwardRef(function (e, t) {
    let { channelType: n, guildId: i, cloneChannelId: l } = e,
        r = (0, p.cj)([M.Z, B.default, w.Z, P.Z, R.ZP], () => {
            var e, t, s;
            let r = M.Z.getGuild(i),
                a = B.default.getCurrentUser();
            o()(null != a, 'CreateChannel: user cannot be undefined');
            let d = null != r && null != r.ownerId ? B.default.getUser(r.ownerId) : null,
                c = w.Z.can(H.Plq.ADMINISTRATOR, r),
                h = P.Z.getChannel(l);
            return {
                guild: r,
                canCreateStoreChannel: null != r && r.hasFeature(H.oNc.COMMERCE),
                canCreateAnnouncementChannel: null != r && r.hasFeature(H.oNc.NEWS),
                user: a,
                owner: d,
                memberRoles: null != (t = null == (e = R.ZP.getMember(i, a.id)) ? void 0 : e.roles) ? t : [],
                canViewChannels: w.Z.can(H.Plq.VIEW_CHANNEL, r),
                canConnect: w.Z.can(H.Plq.CONNECT, r),
                isAdmin: c,
                cloneChannel: h,
                channelType: null != (s = null == h ? void 0 : h.type) ? s : n,
                canManageRoles: w.Z.can(H.Plq.MANAGE_ROLES, r),
                canManageChannels: w.Z.can(H.Plq.MANAGE_CHANNELS, r)
            };
        }),
        a = (0, p.Wu)([j.Z], () =>
            j.Z.getGuildApplicationIds(i)
                .map((e) => j.Z.getApplication(e))
                .filter(F.lm)
        ),
        d = new Set(r.memberRoles),
        { canManageRoles: c, canManageChannels: h } = r,
        u = (0, U.m)(i) && c && h,
        m = (0, D.W3)(i),
        g = (0, L.Ui)(null == r ? void 0 : r.guild),
        C = (0, A.Q3)('CreateChannel');
    return (0, s.jsx)(
        en,
        $(Q({}, e, r), {
            memberRoleIds: d,
            applications: a,
            canCreateStageChannel: u,
            canCreateForumChannel: m,
            canCreateMediaChannel: g,
            ref: t,
            width: C ? 496 : 460
        })
    );
});
