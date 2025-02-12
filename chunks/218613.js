n.d(t, {
    default: () => ee,
    p: () => J
}),
    n(653041),
    n(47120),
    n(411104);
var s = n(200651),
    l = n(192379),
    i = n(120356),
    r = n.n(i),
    a = n(512722),
    o = n.n(a),
    d = n(392711),
    h = n.n(d),
    c = n(990547),
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
    v = n(933557),
    S = n(605436),
    b = n(185413),
    O = n(313201),
    A = n(540059),
    T = n(688465),
    f = n(456269),
    L = n(312146),
    D = n(703656),
    _ = n(146085),
    U = n(60222),
    z = n(388131),
    G = n(131704),
    R = n(592125),
    y = n(271383),
    M = n(430824),
    P = n(496675),
    w = n(699516),
    Z = n(594174),
    B = n(934415),
    k = n(823379),
    F = n(63063),
    V = n(981631),
    H = n(71080),
    X = n(710352),
    Y = n(231338),
    W = n(388032),
    q = n(270062);
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
    let { isNew: t, isBeta: n } = e,
        l = null;
    return (
        !0 === t
            ? (l = (0, s.jsx)(m.IGR, {
                  text: W.intl.string(W.t.psHMa2),
                  className: q.newBadge,
                  color: u.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER
              }))
            : !0 === n && (l = (0, s.jsx)(T.Z, { className: q.newBadge })),
        l
    );
}
function Q(e) {
    let { onChange: t, guildId: n, channelType: i, description: r } = e,
        [a, o] = l.useState({}),
        d = (0, p.e7)([M.Z], () => M.Z.getGuild(n)),
        h = i === V.d4z.GUILD_STAGE_VOICE;
    return (l.useEffect(() => {
        t(a);
    }, [a, t]),
    null == d)
        ? null
        : (0, s.jsx)(m.hzk, {
              className: q.addMembersContainer,
              children: (0, s.jsx)(b.U, {
                  guild: d,
                  channel: null,
                  permission: h ? _.yP : (0, G.CG)(i),
                  pendingAdditions: a,
                  setPendingAdditions: o,
                  isStageChannel: h,
                  description: r
              })
          });
}
class $ extends l.PureComponent {
    componentDidMount() {
        let { _input: e } = this;
        null != e && e.select();
        let { guildId: t, applications: n, canCreateStoreChannel: s } = this.props;
        s && null == n && C.Z.fetchApplications(t),
            E.ZP.trackWithMetadata(V.rMx.OPEN_MODAL, { type: 'Create Channel' }),
            f.O2.trackExposure({
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
            { isPrivate: n, channelType: s, skuId: l, name: i } = this.state;
        return '' !== i && '' !== i.trim() && (!n || !!(0, S.nT)(s, e, t)) && (s !== V.d4z.GUILD_STORE || null != l);
    }
    getIconComponent() {
        let { isPrivate: e, channelType: t } = this.state;
        switch (t) {
            case V.d4z.GUILD_TEXT:
                return e ? m.W4G : m.VL1;
            case V.d4z.GUILD_FORUM:
                return m.Mmi;
            case V.d4z.GUILD_MEDIA:
                return m.XBm;
            case V.d4z.GUILD_VOICE:
                return e ? m.gjC : m.gj8;
            case V.d4z.GUILD_STORE:
                return m.lO_;
            case V.d4z.GUILD_ANNOUNCEMENT:
                return m.MqZ;
            case V.d4z.GUILD_STAGE_VOICE:
                return m.ewx;
            default:
                return (0, G.zi)(t) ? m.VL1 : Y.Vq;
        }
    }
    renderHeader() {
        var e;
        let t;
        let { cloneChannel: n, categoryId: l, onClose: i } = this.props,
            { channelType: r } = this.state,
            a = null != n ? W.intl.string(W.t.dEaPc3) : r === V.d4z.GUILD_CATEGORY ? W.intl.string(W.t['ISN+ND']) : W.intl.string(W.t['fUYU+v']);
        if (null != l) {
            let n = R.Z.getChannel(l);
            t = (0, s.jsx)(m.Text, {
                variant: 'text-xs/normal',
                color: 'header-secondary',
                className: q.subtitle,
                children: W.intl.format(W.t.L1zJgY, { categoryName: null !== (e = null == n ? void 0 : n.name) && void 0 !== e ? e : '' })
            });
        }
        return (0, s.jsxs)(m.xBx, {
            separator: !1,
            children: [
                (0, s.jsxs)('div', {
                    className: q.header,
                    children: [
                        (0, s.jsx)(m.X6q, {
                            id: this.headerId,
                            variant: 'heading-lg/semibold',
                            className: q.title,
                            children: a
                        }),
                        t
                    ]
                }),
                (0, s.jsx)(m.olH, {
                    onClick: i,
                    className: q.closeButton
                })
            ]
        });
    }
    renderName() {
        let e;
        let { cloneChannel: t, guildId: l } = this.props,
            { errors: i, channelType: r } = this.state;
        (null == i ? void 0 : i.name) != null &&
            (e = (0, s.jsx)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-danger',
                className: q.error,
                children: i.name
            }));
        let a = r === V.d4z.GUILD_CATEGORY,
            o = a ? W.intl.string(W.t.OCAkGB) : W.intl.string(W.t.PVbHDg),
            d =
                null != t
                    ? (0, s.jsx)(m.R94, {
                          className: q.channelNameNote,
                          type: m.R94.Types.DESCRIPTION,
                          children: W.intl.format(W.t.s2ZzZW, { name: (0, v.F6)(t, Z.default, w.Z, !0) })
                      })
                    : r === V.d4z.GUILD_FORUM
                      ? (0, s.jsx)(m.R94, {
                            className: q.channelNameNote,
                            type: m.R94.Types.DESCRIPTION,
                            children: W.intl.format(W.t.tbVWyc, {
                                forumUpsellHook: (e, t) =>
                                    (0, s.jsx)(
                                        m.eee,
                                        {
                                            onClick: () =>
                                                (0, m.ZDy)(async () => {
                                                    let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                                                    return (t) =>
                                                        (0, s.jsx)(e, {
                                                            ...t,
                                                            guildId: l
                                                        });
                                                }),
                                            children: e
                                        },
                                        t
                                    )
                            })
                        })
                      : null,
            h = this.getIconComponent();
        return (0, s.jsx)(O.FG, {
            children: (t) =>
                (0, s.jsxs)(m.xJW, {
                    title: o,
                    tag: 'label',
                    htmlFor: t,
                    titleClassName: q.sectionTitle,
                    className: q.name,
                    children: [
                        (0, s.jsx)(m.oil, {
                            value: this.state.name,
                            onChange: this.handleNameChange,
                            id: t,
                            inputRef: this.setInputRef,
                            maxLength: 100,
                            placeholder: (function (e) {
                                switch (e) {
                                    case V.d4z.GUILD_CATEGORY:
                                        return W.intl.string(W.t.eTVbt7);
                                    case V.d4z.GUILD_FORUM:
                                        return W.intl.string(W.t['5z1Xam']);
                                    default:
                                        return W.intl.string(W.t['bw/b8P']);
                                }
                            })(r),
                            className: q.inputWrapper,
                            inputClassName: a ? void 0 : q.inputInner,
                            prefixElement: a
                                ? null
                                : (0, s.jsx)(h, {
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
        let { cloneChannel: e, applications: t, canCreateStoreChannel: n, canCreateAnnouncementChannel: l, canCreateStageChannel: i, canCreateForumChannel: r, canCreateMediaChannel: a } = this.props,
            { channelType: o, isPrivate: d } = this.state;
        if (null != e || o === V.d4z.GUILD_CATEGORY) return;
        let h = null != t && t.length > 0;
        return (0, s.jsx)(m.xJW, {
            className: q.type,
            title: W.intl.string(W.t['7ZcXGx']),
            children: (0, s.jsx)(m.FXm, {
                options: (function (e) {
                    let { isPrivate: t, showStoreChannelOption: n, showAnnouncementChannelOption: l, canCreateStageChannel: i, canCreateForumChannel: r, canCreateMediaChannel: a } = e,
                        o = [
                            {
                                icon: t ? m.W4G : m.VL1,
                                label: W.intl.string(W.t.pnuRXF),
                                value: V.d4z.GUILD_TEXT,
                                description: W.intl.string(W.t.Hf5Lb2)
                            }
                        ];
                    return (
                        o.push({
                            icon: t ? m.gjC : m.gj8,
                            label: W.intl.string(W.t.Sx55Oj),
                            value: V.d4z.GUILD_VOICE,
                            description: W.intl.string(W.t.pqfkoK)
                        }),
                        r &&
                            o.push({
                                icon: t ? m.BUe : m.Mmi,
                                label: W.intl.string(W.t.eAVIDw),
                                value: V.d4z.GUILD_FORUM,
                                description: (0, s.jsxs)(m.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: q.radioLabelDescription,
                                    children: [
                                        W.intl.string(W.t.iZ5pgo),
                                        (0, s.jsx)('br', {}),
                                        W.intl.format(W.t.fjSvsL, {
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
                                label: W.intl.string(W.t['6x6fVl']),
                                value: V.d4z.GUILD_MEDIA,
                                description: (0, s.jsxs)(m.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    className: q.radioLabelDescription,
                                    children: [
                                        W.intl.string(W.t.JyCrwc),
                                        (0, s.jsx)('br', {}),
                                        W.intl.format(W.t.fjSvsL, {
                                            onClick: () => {
                                                open(F.Z.getCreatorSupportArticleURL(V.BhN.MEDIA_CHANNEL));
                                            }
                                        })
                                    ]
                                }),
                                isBeta: !0
                            }),
                        l &&
                            o.push({
                                icon: m.MqZ,
                                iconSize: 24,
                                label: W.intl.string(W.t.qr9dEB),
                                value: V.d4z.GUILD_ANNOUNCEMENT,
                                description: W.intl.string(W.t.gBkfzs)
                            }),
                        n &&
                            o.push({
                                icon: m.lO_,
                                iconSize: 24,
                                label: W.intl.string(W.t.SxjkXV),
                                value: V.d4z.GUILD_STORE,
                                description: W.intl.string(W.t.nmCPMD)
                            }),
                        i &&
                            o.push({
                                icon: m.ewx,
                                iconSize: 24,
                                label: W.intl.string(W.t.pNWst7),
                                value: V.d4z.GUILD_STAGE_VOICE,
                                description: W.intl.string(W.t.VPAwgo)
                            }),
                        o.map((e) => {
                            let { icon: t, iconSize: n, label: l, value: i, description: r, isNew: a, isBeta: o } = e;
                            return {
                                name: (0, s.jsxs)('div', {
                                    className: q.radioItemName,
                                    children: [
                                        (0, s.jsx)(t, {
                                            ...(null != n
                                                ? {
                                                      width: n,
                                                      height: n,
                                                      size: 'custom'
                                                  }
                                                : { size: 'md' }),
                                            color: 'currentColor',
                                            className: q.icon,
                                            colorClass: q.foreground
                                        }),
                                        (0, s.jsxs)('div', {
                                            children: [
                                                (0, s.jsxs)(m.Text, {
                                                    variant: 'text-md/medium',
                                                    className: q.radioLabelName,
                                                    children: [
                                                        l,
                                                        (0, s.jsx)(J, {
                                                            isNew: a,
                                                            isBeta: o
                                                        })
                                                    ]
                                                }),
                                                'string' == typeof r
                                                    ? (0, s.jsx)(m.Text, {
                                                          variant: 'text-sm/normal',
                                                          color: 'header-secondary',
                                                          className: q.radioLabelDescription,
                                                          children: r
                                                      })
                                                    : r
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
                    showStoreChannelOption: n && h,
                    showAnnouncementChannelOption: l,
                    canCreateStageChannel: i,
                    canCreateForumChannel: r,
                    canCreateMediaChannel: a
                }),
                value: o,
                size: m.FXm.Sizes.NOT_SET,
                onChange: this.handleTypeChange,
                itemInfoClassName: q.radioBarLabel
            })
        });
    }
    renderChannelTypeDescription(e) {
        let t;
        return (e === V.d4z.GUILD_ANNOUNCEMENT && (t = W.intl.format(W.t.tI7KNT, { documentationLink: F.Z.getArticleURL(V.BhN.ANNOUNCEMENT_CHANNELS) })), null == t)
            ? null
            : (0, s.jsx)(m.R94, {
                  className: q.channelTypeDescription,
                  type: m.R94.Types.DESCRIPTION,
                  children: t
              });
    }
    renderStoreOptions() {
        let { applications: e } = this.props,
            { applicationId: t, skuId: n, branchId: i, showBranches: r, hasBranches: a } = this.state;
        if (null == e || 0 === e.length) throw Error('Unexpected empty applications');
        return (0, s.jsxs)('div', {
            children: [
                (0, s.jsx)(m.vwX, {
                    tag: 'h5',
                    children: W.intl.string(W.t.vPIW2N)
                }),
                (0, s.jsx)(m.q4e, {
                    options: e.map((e) => ({
                        label: e.name,
                        value: e.id
                    })),
                    placeholder: W.intl.string(W.t['3XfCPT']),
                    value: t,
                    onChange: this.handleApplicationChange,
                    className: q.storeChannelOptionSelector
                }),
                null != t
                    ? (0, s.jsxs)(l.Fragment, {
                          children: [
                              (0, s.jsx)(m.vwX, {
                                  tag: 'h5',
                                  children: W.intl.string(W.t.XNIWFh)
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
                    ? (0, s.jsxs)(m.j7V, {
                          hideBorder: !0,
                          onChange: this.handleShowBranchesToggle,
                          value: r,
                          note: W.intl.format(W.t.UVXL1d, { devPortalUrl: V.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT }),
                          children: [
                              (0, s.jsx)(m._m8, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: q.switchIcon
                              }),
                              W.intl.string(W.t['3e9mHx'])
                          ]
                      })
                    : null,
                null != t
                    ? (0, s.jsxs)(l.Fragment, {
                          children: [
                              r
                                  ? (0, s.jsx)(m.vwX, {
                                        tag: 'h5',
                                        children: W.intl.string(W.t.o7DqFx)
                                    })
                                  : null,
                              (0, s.jsx)(
                                  N.Z,
                                  {
                                      applicationId: t,
                                      onChange: this.handleBranchChange,
                                      selectedBranchId: i,
                                      hide: !r,
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
        if (null != e || t === V.d4z.GUILD_ANNOUNCEMENT) return null;
        let l = t === V.d4z.GUILD_CATEGORY ? W.intl.string(W.t.lEPAZ2) : W.intl.string(W.t.aUI70t),
            i = t === V.d4z.GUILD_CATEGORY ? W.intl.string(W.t['RQUk6+']) : W.intl.string(W.t.YguuKi);
        return (0, s.jsx)(
            m.xJW,
            {
                children: (0, s.jsxs)(m.j7V, {
                    hideBorder: !0,
                    onChange: this.handlePrivacyChange,
                    value: n,
                    note: i,
                    children: [
                        (0, s.jsx)(m.mBM, {
                            size: 'md',
                            color: 'currentColor',
                            className: q.switchIcon
                        }),
                        l
                    ]
                })
            },
            'privacy-switch'
        );
    }
    renderError(e) {
        let t;
        let { channelType: n, isPrivate: l, errors: i } = this.state,
            { canConnect: a, canViewChannels: o } = this.props;
        if (Object.values(i).length > 0) {
            if (null != i.message && '' !== i.message) t = i.message;
            else if (e || null == i.name) {
                let e = Object.values(i)[0];
                e.length > 0 && (t = e);
            }
        } else l && !(0, S.nT)(n, o, a) && (t = (0, S.$7)(n));
        if (null != t)
            return (0, s.jsx)('div', {
                className: r()(q.createError, { [q.addMemberError]: e }),
                children: (0, s.jsx)(m.Wn, {
                    messageType: m.QYI.ERROR,
                    children: t
                })
            });
    }
    renderFooter() {
        let e;
        let { channelType: t, onClose: n } = this.props,
            { channelType: l } = this.state,
            { isPrivate: i } = this.state;
        e = t === V.d4z.GUILD_CATEGORY ? W.intl.string(W.t['ISN+ND']) : W.intl.string(W.t['fUYU+v']);
        let r = i || l === V.d4z.GUILD_STAGE_VOICE;
        return (0, s.jsxs)(m.mzw, {
            className: q.modalFooter,
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
                          children: W.intl.string(W.t.PDTjLC)
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
                    children: W.intl.string(W.t['ETE/oK'])
                })
            ]
        });
    }
    renderAddMemberFooter() {
        let e;
        let { channelType: t } = this.props,
            { pendingPermissionOverwrites: n } = this.state;
        return (
            (e = 0 === Object.keys(n).length ? W.intl.string(W.t['5WxrcX']) : t === V.d4z.GUILD_CATEGORY ? W.intl.string(W.t['ISN+ND']) : W.intl.string(W.t['fUYU+v'])),
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
                        children: W.intl.string(W.t['13/7kZ'])
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
                (0, s.jsxs)(m.hzk, {
                    className: q.modalContent,
                    children: [this.renderType(), this.renderName(), e === V.d4z.GUILD_STORE ? this.renderStoreOptions() : null, this.renderChannelTypeDescription(e), e === V.d4z.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions()]
                }),
                this.renderError(),
                this.renderFooter()
            ]
        });
    }
    renderAddMemberSlideContent() {
        let { name: e, channelType: t } = this.state,
            { guildId: n, onClose: l } = this.props,
            i = this.getIconComponent(),
            r = t === V.d4z.GUILD_STAGE_VOICE;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(m.xBx, {
                    separator: !1,
                    children: [
                        (0, s.jsxs)('div', {
                            className: q.header,
                            children: [
                                (0, s.jsx)(m.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: q.title,
                                    children: r ? W.intl.string(W.t['S/6zHB']) : W.intl.string(W.t.dMJ3Y2)
                                }),
                                (0, s.jsxs)(m.Text, {
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
                        (0, s.jsx)(m.olH, {
                            onClick: l,
                            className: q.closeButton
                        })
                    ]
                }),
                this.renderError(!0),
                (0, s.jsx)(Q, {
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
            n = { impression_group: c.ImpressionGroups.CHANNEL_ADD_FLOW };
        return (0, s.jsx)('div', {
            children: (0, s.jsxs)(m.MyZ, {
                activeSlide: e,
                width: t,
                children: [
                    (0, s.jsx)(m.Mi4, {
                        id: 'CHANNEL_INFO',
                        impressionName: c.ImpressionNames.CHANNEL_ADD_INFO,
                        impressionProperties: n,
                        children: this.renderCreateChannelContent()
                    }),
                    (0, s.jsx)(m.Mi4, {
                        id: 'ADD_MEMBERS',
                        impressionName: c.ImpressionNames.CHANNEL_ADD_MEMBERS,
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
            className: q.modal,
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
            K(this, 'headerId', (0, O.hQ)()),
            K(this, '_input', void 0),
            K(this, 'setInputRef', (e) => {
                this._input = e;
            }),
            K(this, 'handleNameChange', (e) => {
                let { channelType: t } = this.state;
                G.xL.has(t) && (e = (0, B.Nj)(e)), this.setState({ name: e });
            }),
            K(this, 'handleTypeChange', (e) => {
                let { value: t } = e,
                    { name: n } = this.state;
                G.xL.has(t) && (n = (0, B.Nj)(n)),
                    t === V.d4z.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
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
                let { cloneChannel: l, categoryId: i, user: r, memberRoleIds: a, isAdmin: o, onClose: d, owner: c } = this.props,
                    { name: u, pendingPermissionOverwrites: p, channelType: m, skuId: C, branchId: N, isPrivate: x } = this.state,
                    E = this.getGuildId();
                if (null != E) {
                    if (null != l) (t = h().values(l.permissionOverwrites)), (n = l.bitrate), (s = l.userLimit);
                    else if (m === V.d4z.GUILD_ANNOUNCEMENT) t = (0, B.rt)(E);
                    else {
                        if (x) {
                            t = (0, B.oQ)(E, m, [], !0);
                            let e = (0, S.Tj)(p, m);
                            e.length > 0 && (t = t.concat(e));
                            let n = null != c && r.id === c.id;
                            t.some((e) => a.has(e.id)) || o || n || t.push((0, B.jZ)(r.id, m));
                        }
                        m === V.d4z.GUILD_STAGE_VOICE &&
                            ((t = []),
                            Object.values(p).forEach((e) => {
                                let { row: n } = e;
                                null != n.id && '' !== n.id && (n.rowType === H.aC.ROLE ? t.push((0, z.A)(n.id, I.BN.ROLE)) : n.rowType === H.aC.MEMBER && t.push((0, z.A)(n.id, I.BN.MEMBER)));
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
                            parentId: m !== V.d4z.GUILD_CATEGORY ? i : null,
                            skuId: C,
                            branchId: N
                        });
                        if (null == e || 201 !== e.status) return;
                        let l = e.body;
                        G.xL.has(m) && (0, D.XU)(l.guild_id, l.id), d();
                    } catch (e) {
                        null != e.body && 'object' == typeof e.body ? this.setState({ errors: e.body }) : this.setState({ errors: { message: W.intl.string(W.t.fEptJC) } });
                    }
                }
            });
        let { channelType: t, cloneChannel: n, prefillChannelName: s } = e;
        (this.state = {
            channelType: null != t ? t : V.d4z.GUILD_TEXT,
            name: null != n ? (0, v.F6)(n, Z.default, w.Z) : null != s ? s : '',
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
let ee = l.forwardRef(function (e, t) {
    let { channelType: n, guildId: l, cloneChannelId: i } = e,
        r = (0, p.cj)([M.Z, Z.default, P.Z, R.Z, y.ZP], () => {
            var e, t, s;
            let r = M.Z.getGuild(l),
                a = Z.default.getCurrentUser();
            o()(null != a, 'CreateChannel: user cannot be undefined');
            let d = null != r && null != r.ownerId ? Z.default.getUser(r.ownerId) : null,
                h = P.Z.can(V.Plq.ADMINISTRATOR, r),
                c = R.Z.getChannel(i);
            return {
                guild: r,
                canCreateStoreChannel: null != r && r.hasFeature(V.oNc.COMMERCE),
                canCreateAnnouncementChannel: null != r && r.hasFeature(V.oNc.NEWS),
                user: a,
                owner: d,
                memberRoles: null !== (t = null === (e = y.ZP.getMember(l, a.id)) || void 0 === e ? void 0 : e.roles) && void 0 !== t ? t : [],
                canViewChannels: P.Z.can(V.Plq.VIEW_CHANNEL, r),
                canConnect: P.Z.can(V.Plq.CONNECT, r),
                isAdmin: h,
                cloneChannel: c,
                channelType: null !== (s = null == c ? void 0 : c.type) && void 0 !== s ? s : n,
                canManageRoles: P.Z.can(V.Plq.MANAGE_ROLES, r),
                canManageChannels: P.Z.can(V.Plq.MANAGE_CHANNELS, r)
            };
        }),
        a = (0, p.Wu)([j.Z], () =>
            j.Z.getGuildApplicationIds(l)
                .map((e) => j.Z.getApplication(e))
                .filter(k.lm)
        ),
        d = new Set(r.memberRoles),
        { canManageRoles: h, canManageChannels: c } = r,
        u = (0, U.m)(l) && h && c,
        m = (0, f.W3)(l),
        g = (0, L.Ui)(null == r ? void 0 : r.guild),
        C = (0, A.Q3)('CreateChannel');
    return (0, s.jsx)($, {
        ...e,
        ...r,
        memberRoleIds: d,
        applications: a,
        canCreateStageChannel: u,
        canCreateForumChannel: m,
        canCreateMediaChannel: g,
        ref: t,
        width: C ? 496 : 460
    });
});
