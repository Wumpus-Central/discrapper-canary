n.d(t, {
    default: () => eo,
    p: () => ei,
}),
    n(539854),
    n(953529),
    n(388685),
    n(781311),
    n(415506);
var r = n(951288),
    i = n(647438),
    s = n(120356),
    l = n.n(s),
    a = n(512722),
    o = n.n(a),
    c = n(392711),
    d = n.n(c),
    h = n(990547),
    u = n(831209),
    p = n(442837),
    g = n(755721),
    m = n(481060),
    C = n(333848),
    b = n(749210),
    x = n(332063),
    N = n(620123),
    f = n(911969),
    E = n(367907),
    O = n(812206),
    j = n(933557),
    I = n(636816),
    v = n(605436),
    y = n(974339),
    S = n(215157),
    T = n(313201),
    A = n(318766),
    _ = n(907040),
    D = n(906411),
    P = n(688465),
    L = n(312146),
    G = n(703656),
    w = n(146085),
    U = n(60222),
    Z = n(388131),
    M = n(131704),
    R = n(592125),
    z = n(271383),
    B = n(430824),
    H = n(496675),
    k = n(699516),
    V = n(594174),
    F = n(934415),
    Y = n(823379),
    q = n(63063),
    X = n(981631),
    W = n(71080),
    K = n(185923),
    Q = n(710352),
    J = n(231338),
    $ = n(388032),
    ee = n(421835);
function et(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function en(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                et(e, t, n[t]);
            });
    }
    return e;
}
function er(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
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
        i = null;
    return (
        !0 === t
            ? (i = (0, r.jsx)(m.IGR, {
                  text: $.intl.string($.t.psHMa2),
                  className: ee.newBadge,
                  color: u.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER,
              }))
            : !0 === n && (i = (0, r.jsx)(P.Z, { className: ee.newBadge })),
        i
    );
}
function es(e) {
    let { onChange: t, guildId: n, channelType: s, description: l } = e,
        [a, o] = i.useState(""),
        [c, d] = i.useState({}),
        h = i.useRef(null),
        u = (0, p.e7)([B.Z], () => B.Z.getGuild(n)),
        g = s === X.d4z.GUILD_STAGE_VOICE,
        { roles: C, members: b, getRichTag: x } = (0, S.Q)(u, null, g ? w.yP : (0, M.CG)(s), a, g),
        N = y.Z.useSections({
            roles: C,
            members: b,
        });
    return (i.useEffect(() => {
        t(c);
    }, [c, t]),
    null == u)
        ? null
        : (0, r.jsx)(y.Z.Provider, {
              listRef: h,
              query: a,
              setQuery: o,
              pendingAdditions: c,
              setPendingAdditions: d,
              roles: C,
              members: b,
              getRichTag: x,
              children: (0, r.jsxs)(m.hzk, {
                  className: ee.addMembersContainer,
                  children: [
                      null != l && "" !== l
                          ? (0, r.jsx)(m.Text, {
                                color: "header-secondary",
                                className: ee.description,
                                variant: "text-sm/normal",
                                children: l,
                            })
                          : null,
                      (0, r.jsx)(y.Z.SearchBox, { placeholderText: $.intl.string($.t.iezLLi) }),
                      (0, r.jsx)(m.Text, {
                          className: ee.searchHelpText,
                          variant: "text-xs/normal",
                          children: $.intl.string($.t["rwFx8/"]),
                      }),
                      (0, r.jsx)(m._2F, {
                          ref: h,
                          className: ee.membersList,
                          sectionHeight: y.Z.SECTION_HEIGHT,
                          renderSection: y.Z.renderSection,
                          rowHeight: y.Z.ROW_HEIGHT,
                          renderRow: y.Z.renderRow,
                          sections: N,
                          innerAriaOrientation: "vertical",
                          innerRole: "listbox",
                      }),
                  ],
              }),
          });
}
function el(e) {
    let { onEmojiPicked: t, guildId: n } = e,
        s = i.useRef(null),
        l = i.useMemo(
            () => ({
                popoutLocation: {
                    page: X.ZY5.CREATE_CHANNEL_MODAL,
                    section: X.jXE.CHANNEL_NAME,
                    object: X.qAy.EMOJI_PICKER_BUTTON,
                },
            }),
            [],
        ),
        a = i.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, r.jsx)(_.Z, {
                    channel: null,
                    guildId: n,
                    pickerIntention: K.Hz.CHANNEL_NAME,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: r } = e;
                        null != n && n.type === D.B.UNICODE && t(n.surrogates), r && i();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: l,
                });
            },
            [l, n, t],
        );
    return (0, r.jsx)(m.yRy, {
        targetElementRef: s,
        renderPopout: a,
        animation: m.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsx)(
                A.Z,
                er(en({}, e), {
                    ref: s,
                    active: n,
                    className: ee.emojiButton,
                    tabIndex: 0,
                    focusProps: {
                        offset: {
                            top: 10,
                            bottom: 10,
                            left: -4,
                            right: 10,
                        },
                    },
                }),
            );
        },
    });
}
class ea extends i.PureComponent {
    componentDidMount() {
        let { _input: e } = this;
        null != e && e.select();
        let { guildId: t, applications: n, canCreateStoreChannel: r } = this.props;
        r && null == n && b.Z.fetchApplications(t),
            E.ZP.trackWithMetadata(X.rMx.OPEN_MODAL, { type: "Create Channel" });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelType === X.d4z.GUILD_ANNOUNCEMENT &&
            this.setState({ channelType: X.d4z.GUILD_TEXT }),
            !t.isPrivate &&
                this.state.isPrivate &&
                E.ZP.trackWithMetadata(X.rMx.OPEN_MODAL, { type: "Create Private Channel" });
    }
    getGuildId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.guildId;
    }
    canSubmit() {
        let { canViewChannels: e, canConnect: t, transitionState: n } = this.props,
            { isPrivate: r, channelType: i, skuId: s, name: l, submitting: a } = this.state;
        return (
            !a &&
            n !== m.Dvm.EXITING &&
            "" !== l &&
            "" !== l.trim() &&
            (!r || !!(0, v.nT)(i, e, t)) &&
            (i !== X.d4z.GUILD_STORE || null != s)
        );
    }
    getIconComponent() {
        let { isPrivate: e, channelType: t } = this.state;
        switch (t) {
            case X.d4z.GUILD_TEXT:
                return e ? m.W4G : m.VL1;
            case X.d4z.GUILD_FORUM:
                return m.Mmi;
            case X.d4z.GUILD_MEDIA:
                return m.XBm;
            case X.d4z.GUILD_VOICE:
                return e ? m.gjC : m.gj8;
            case X.d4z.GUILD_STORE:
                return m.lO_;
            case X.d4z.GUILD_ANNOUNCEMENT:
                return m.MqZ;
            case X.d4z.GUILD_STAGE_VOICE:
                return m.ewx;
            default:
                return (0, M.zi)(t) ? m.VL1 : J.Vq;
        }
    }
    renderHeader() {
        var e;
        let t,
            { cloneChannel: n, categoryId: i, onClose: s } = this.props,
            { channelType: l } = this.state,
            a =
                null != n
                    ? $.intl.string($.t.dEaPc3)
                    : l === X.d4z.GUILD_CATEGORY
                      ? $.intl.string($.t["ISN+ND"])
                      : $.intl.string($.t["fUYU+v"]);
        if (null != i) {
            let n = R.Z.getChannel(i);
            t = (0, r.jsx)(m.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                className: ee.subtitle,
                children: $.intl.format($.t.L1zJgY, {
                    categoryName: null != (e = null == n ? void 0 : n.name) ? e : "",
                }),
            });
        }
        return (0, r.jsxs)(m.xBx, {
            separator: !1,
            children: [
                (0, r.jsxs)("div", {
                    className: ee.header,
                    children: [
                        (0, r.jsx)(m.X6q, {
                            id: this.headerId,
                            variant: "heading-lg/semibold",
                            className: ee.title,
                            children: a,
                        }),
                        t,
                    ],
                }),
                (0, r.jsx)(m.olH, {
                    onClick: s,
                    className: ee.closeButton,
                }),
            ],
        });
    }
    getHelperText() {
        let { cloneChannel: e, channelType: t, guildId: i } = this.props;
        return null != e
            ? $.intl.format($.t.s2ZzZW, { name: (0, j.F6)(e, V.default, k.Z, !0) })
            : t === X.d4z.GUILD_FORUM
              ? $.intl.format($.t.tbVWyc, {
                    forumUpsellHook: (e, t) =>
                        (0, r.jsx)(
                            m.eee,
                            {
                                onClick: () =>
                                    (0, m.ZDy)(async () => {
                                        let { default: e } = await n.e("18417").then(n.bind(n, 740696));
                                        return (t) => (0, r.jsx)(e, er(en({}, t), { guildId: i }));
                                    }),
                                children: e,
                            },
                            t,
                        ),
                })
              : void 0;
    }
    renderName() {
        let e,
            { guildId: t } = this.props,
            { errors: n, channelType: i } = this.state;
        (null == n ? void 0 : n.name) != null && (e = Array.isArray(n.name) ? n.name.join(", ") : n.name);
        let s = i === X.d4z.GUILD_CATEGORY,
            l = s ? $.intl.string($.t.OCAkGB) : $.intl.string($.t.PVbHDg),
            a = this.getIconComponent();
        return (0, r.jsx)(m.oil, {
            label: l,
            helperText: this.getHelperText(),
            error: e,
            value: this.state.name,
            onChange: this.handleNameChange,
            inputRef: this.setInputRef,
            maxLength: 100,
            placeholder: (function (e) {
                switch (e) {
                    case X.d4z.GUILD_CATEGORY:
                        return $.intl.string($.t.eTVbt7);
                    case X.d4z.GUILD_FORUM:
                        return $.intl.string($.t["5z1Xam"]);
                    default:
                        return $.intl.string($.t["bw/b8P"]);
                }
            })(i),
            leading: s ? void 0 : a,
            trailing: {
                type: "emoji",
                button: (0, r.jsx)(el, {
                    onEmojiPicked: this.insertEmojiAtPosition,
                    isPrivateChannel: this.state.isPrivate,
                    guildId: t,
                }),
            },
            autoFocus: !0,
            focusProps: { offset: { right: -30 } },
        });
    }
    renderType() {
        let {
                cloneChannel: e,
                applications: t,
                canCreateStoreChannel: n,
                canCreateAnnouncementChannel: i,
                canCreateStageChannel: s,
                canCreateMediaChannel: l,
            } = this.props,
            { channelType: a, isPrivate: o } = this.state;
        if (null != e || a === X.d4z.GUILD_CATEGORY) return;
        let c = null != t && t.length > 0;
        return (0, r.jsx)(g.Gu, {
            label: $.intl.string($.t["7ZcXGx"]),
            options: (function (e) {
                let {
                        isPrivate: t,
                        showStoreChannelOption: n,
                        showAnnouncementChannelOption: i,
                        canCreateStageChannel: s,
                        canCreateMediaChannel: l,
                    } = e,
                    a = [
                        {
                            icon: t ? m.W4G : m.VL1,
                            label: $.intl.string($.t.pnuRXF),
                            value: X.d4z.GUILD_TEXT,
                            description: $.intl.string($.t.Hf5Lb2),
                        },
                    ];
                return (
                    a.push({
                        icon: t ? m.gjC : m.gj8,
                        label: $.intl.string($.t.Sx55Oj),
                        value: X.d4z.GUILD_VOICE,
                        description: $.intl.string($.t.pqfkoK),
                    }),
                    a.push({
                        icon: t ? m.BUe : m.Mmi,
                        label: $.intl.string($.t.eAVIDw),
                        value: X.d4z.GUILD_FORUM,
                        description: (0, r.jsxs)(m.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: ee.radioLabelDescription,
                            children: [
                                $.intl.string($.t.iZ5pgo),
                                (0, r.jsx)("br", {}),
                                $.intl.format($.t.fjSvsL, {
                                    onClick: () => {
                                        open(Q.V8);
                                    },
                                }),
                            ],
                        }),
                    }),
                    l &&
                        a.push({
                            icon: t ? m.D7T : m.XBm,
                            label: $.intl.string($.t["6x6fVl"]),
                            value: X.d4z.GUILD_MEDIA,
                            description: (0, r.jsxs)(m.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                className: ee.radioLabelDescription,
                                children: [
                                    $.intl.string($.t.JyCrwc),
                                    (0, r.jsx)("br", {}),
                                    $.intl.format($.t.fjSvsL, {
                                        onClick: () => {
                                            open(q.Z.getCreatorSupportArticleURL(X.BhN.MEDIA_CHANNEL));
                                        },
                                    }),
                                ],
                            }),
                            isBeta: !0,
                        }),
                    i &&
                        a.push({
                            icon: m.MqZ,
                            iconSize: 24,
                            label: $.intl.string($.t.qr9dEB),
                            value: X.d4z.GUILD_ANNOUNCEMENT,
                            description: $.intl.string($.t.gBkfzs),
                        }),
                    n &&
                        a.push({
                            icon: m.lO_,
                            iconSize: 24,
                            label: $.intl.string($.t.SxjkXV),
                            value: X.d4z.GUILD_STORE,
                            description: $.intl.string($.t.nmCPMD),
                        }),
                    s &&
                        a.push({
                            icon: m.ewx,
                            iconSize: 24,
                            label: $.intl.string($.t.pNWst7),
                            value: X.d4z.GUILD_STAGE_VOICE,
                            description: $.intl.string($.t.VPAwgo),
                        }),
                    a.map((e) => {
                        let { icon: t, iconSize: n, label: i, value: s, description: l, isNew: a, isBeta: o } = e;
                        return {
                            name: (0, r.jsxs)("div", {
                                className: ee.radioItemName,
                                children: [
                                    (0, r.jsx)(
                                        t,
                                        er(
                                            en(
                                                {},
                                                null != n
                                                    ? {
                                                          width: n,
                                                          height: n,
                                                          size: "custom",
                                                      }
                                                    : { size: "md" },
                                            ),
                                            {
                                                color: "currentColor",
                                                className: ee.icon,
                                                colorClass: ee.foreground,
                                            },
                                        ),
                                    ),
                                    (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsxs)(m.Text, {
                                                variant: "text-md/medium",
                                                className: ee.radioLabelName,
                                                children: [
                                                    i,
                                                    (0, r.jsx)(ei, {
                                                        isNew: a,
                                                        isBeta: o,
                                                    }),
                                                ],
                                            }),
                                            "string" == typeof l
                                                ? (0, r.jsx)(m.Text, {
                                                      variant: "text-sm/normal",
                                                      color: "header-secondary",
                                                      className: ee.radioLabelDescription,
                                                      children: l,
                                                  })
                                                : l,
                                        ],
                                    }),
                                ],
                            }),
                            value: s,
                            radioBarClassName: ee.radioBar,
                            radioItemIconClassName: ee.radioBarIcon,
                        };
                    })
                );
            })({
                isPrivate: o,
                showStoreChannelOption: n && c,
                showAnnouncementChannelOption: i,
                canCreateStageChannel: s,
                canCreateMediaChannel: l,
            }),
            value: a,
            size: g.l7.NOT_SET,
            onChange: this.handleTypeChange,
            itemInfoClassName: ee.radioBarLabel,
        });
    }
    renderStoreOptions() {
        let { applications: e } = this.props,
            { applicationId: t, skuId: n, branchId: i, showBranches: s, hasBranches: l } = this.state;
        if (null == e || 0 === e.length) throw Error("Unexpected empty applications");
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(m.q4e, {
                    label: $.intl.string($.t.vPIW2N),
                    options: e.map((e) => ({
                        label: e.name,
                        value: e.id,
                    })),
                    placeholder: $.intl.string($.t["3XfCPT"]),
                    value: t,
                    onChange: this.handleApplicationChange,
                    className: ee.storeChannelOptionSelector,
                }),
                null != t
                    ? (0, r.jsx)(
                          N.Z,
                          {
                              label: $.intl.string($.t.XNIWFh),
                              applicationId: t,
                              onChange: this.handleSKUChange,
                              selectedSkuId: n,
                              className: ee.storeChannelOptionSelector,
                          },
                          t,
                      )
                    : null,
                null != t && l
                    ? (0, r.jsx)(m.rsf, {
                          label: $.intl.string($.t["3e9mHx"]),
                          description: $.intl.format($.t.UVXL1d, {
                              devPortalUrl: X.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT,
                          }),
                          icon: m._m8,
                          onChange: this.handleShowBranchesToggle,
                          checked: s,
                      })
                    : null,
                null != t
                    ? (0, r.jsx)(
                          x.Z,
                          {
                              label: s ? $.intl.string($.t.o7DqFx) : void 0,
                              applicationId: t,
                              onChange: this.handleBranchChange,
                              selectedBranchId: i,
                              hide: !s,
                              includeMaster: s,
                              onHasBranchesChange: this.handleHasBranchesChange,
                              className: ee.storeChannelOptionSelector,
                          },
                          t,
                      )
                    : null,
            ],
        });
    }
    renderPrivacyOptions() {
        let { cloneChannel: e } = this.props,
            { channelType: t, isPrivate: n } = this.state;
        if (null != e || t === X.d4z.GUILD_ANNOUNCEMENT) return null;
        let i = t === X.d4z.GUILD_CATEGORY ? $.intl.string($.t.lEPAZ2) : $.intl.string($.t.aUI70t),
            s = t === X.d4z.GUILD_CATEGORY ? $.intl.string($.t["RQUk6+"]) : $.intl.string($.t.YguuKi);
        return (0, r.jsx)(m.rsf, {
            label: i,
            description: s,
            icon: m.mBM,
            onChange: this.handlePrivacyChange,
            checked: n,
        });
    }
    renderError(e) {
        let t,
            { channelType: n, isPrivate: i, errors: s } = this.state,
            { canConnect: a, canViewChannels: o } = this.props;
        if (Object.values(s).length > 0) {
            if (null != s.message && "" !== s.message) t = s.message;
            else if (e || null == s.name) {
                let e = Object.values(s)[0];
                e.length > 0 && (t = e);
            }
        } else i && !(0, v.nT)(n, o, a) && (t = (0, v.$7)(n));
        if (null != t)
            return (0, r.jsx)("div", {
                className: l()(ee.createError, { [ee.addMemberError]: e }),
                children: (0, r.jsx)(m.Wn, {
                    messageType: m.QYI.ERROR,
                    children: t,
                }),
            });
    }
    renderFooter() {
        let e,
            { channelType: t, onClose: n } = this.props,
            { channelType: i } = this.state,
            { isPrivate: s } = this.state;
        e = t === X.d4z.GUILD_CATEGORY ? $.intl.string($.t["ISN+ND"]) : $.intl.string($.t["fUYU+v"]);
        let l = s || i === X.d4z.GUILD_STAGE_VOICE;
        return (0, r.jsx)(m.mzw, {
            className: ee.modalFooter,
            children: (0, r.jsxs)(m.hE2, {
                direction: "horizontal-reverse",
                children: [
                    l
                        ? (0, r.jsx)(m.zxk, {
                              variant: "primary",
                              text: $.intl.string($.t.PDTjLC),
                              type: "button",
                              onClick: () => {
                                  this.setState({
                                      slide: "ADD_MEMBERS",
                                      errors: {},
                                  });
                              },
                              disabled: !this.canSubmit(),
                          })
                        : (0, r.jsx)(m.zxk, {
                              variant: "primary",
                              text: e,
                              type: "submit",
                              disabled: !this.canSubmit(),
                          }),
                    (0, r.jsx)(m.zxk, {
                        variant: "secondary",
                        text: $.intl.string($.t["ETE/oK"]),
                        onClick: n,
                    }),
                ],
            }),
        });
    }
    renderAddMemberFooter() {
        let e,
            { channelType: t } = this.props,
            { pendingPermissionOverwrites: n } = this.state;
        return (
            (e =
                0 === Object.keys(n).length
                    ? $.intl.string($.t["5WxrcX"])
                    : t === X.d4z.GUILD_CATEGORY
                      ? $.intl.string($.t["ISN+ND"])
                      : $.intl.string($.t["fUYU+v"])),
            (0, r.jsx)(m.mzw, {
                children: (0, r.jsxs)(m.hE2, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, r.jsx)(m.zxk, {
                            variant: "primary",
                            text: e,
                            type: "submit",
                            disabled: !this.canSubmit(),
                        }),
                        (0, r.jsx)(m.zxk, {
                            variant: "secondary",
                            text: $.intl.string($.t["13/7kZ"]),
                            onClick: () => {
                                this.setState({ slide: "CHANNEL_INFO" });
                            },
                        }),
                    ],
                }),
            })
        );
    }
    handlePermissionOverwriteChange(e) {
        this.setState({ pendingPermissionOverwrites: e });
    }
    renderCreateChannelContent() {
        let { channelType: e } = this.state,
            { guildId: t } = this.props;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                this.renderHeader(),
                (0, r.jsx)(m.hzk, {
                    className: ee.modalContent,
                    children: (0, r.jsxs)(m.Kqy, {
                        gap: 20,
                        children: [
                            this.renderType(),
                            this.renderName(),
                            e === X.d4z.GUILD_STORE ? this.renderStoreOptions() : null,
                            (0, r.jsx)(I.Z, {
                                guildId: t,
                                channelType: e,
                                className: ee.channelTypeDescription,
                            }),
                            e === X.d4z.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions(),
                        ],
                    }),
                }),
                this.renderError(),
                this.renderFooter(),
            ],
        });
    }
    renderAddMemberSlideContent() {
        let { name: e, channelType: t } = this.state,
            { guildId: n, onClose: i } = this.props,
            s = this.getIconComponent(),
            l = t === X.d4z.GUILD_STAGE_VOICE;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(m.xBx, {
                    separator: !1,
                    children: [
                        (0, r.jsxs)(m.Kqy, {
                            gap: 4,
                            className: ee.header,
                            children: [
                                (0, r.jsx)(m.X6q, {
                                    variant: "heading-lg/semibold",
                                    className: ee.title,
                                    children: l ? $.intl.string($.t["S/6zHB"]) : $.intl.string($.t.dMJ3Y2),
                                }),
                                (0, r.jsxs)(m.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    className: ee.subtitle,
                                    children: [
                                        (0, r.jsx)(s, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: ee.subtitleIcon,
                                        }),
                                        e,
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(m.olH, {
                            onClick: i,
                            className: ee.closeButton,
                        }),
                    ],
                }),
                this.renderError(!0),
                (0, r.jsx)(es, {
                    onChange: this.handlePermissionOverwriteChange,
                    guildId: n,
                    channelType: t,
                    description: l ? $.intl.string($.t.f7VbhI) : void 0,
                }),
                this.renderAddMemberFooter(),
            ],
        });
    }
    renderSlides() {
        let { slide: e } = this.state,
            { width: t } = this.props,
            n = { impression_group: h.ImpressionGroups.CHANNEL_ADD_FLOW };
        return (0, r.jsx)("div", {
            children: (0, r.jsxs)(m.MyZ, {
                activeSlide: e,
                width: t,
                children: [
                    (0, r.jsx)(m.Mi4, {
                        id: "CHANNEL_INFO",
                        impressionName: h.ImpressionNames.CHANNEL_ADD_INFO,
                        impressionProperties: n,
                        children: this.renderCreateChannelContent(),
                    }),
                    (0, r.jsx)(m.Mi4, {
                        id: "ADD_MEMBERS",
                        impressionName: h.ImpressionNames.CHANNEL_ADD_MEMBERS,
                        impressionProperties: n,
                        children: this.renderAddMemberSlideContent(),
                    }),
                ],
            }),
        });
    }
    render() {
        let { transitionState: e } = this.props;
        return (0, r.jsx)(m.Y0X, {
            transitionState: e,
            className: ee.modal,
            "aria-labelledby": this.headerId,
            size: m.CgR.DYNAMIC,
            parentComponent: "CreateChannel",
            children: (0, r.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: this.renderSlides(),
            }),
        });
    }
    constructor(e) {
        super(e),
            et(this, "headerId", (0, T.hQ)()),
            et(this, "_input", void 0),
            et(this, "setInputRef", (e) => {
                this._input = e;
            }),
            et(this, "handleNameChange", (e) => {
                var t, n;
                let { channelType: r } = this.state;
                M.xL.has(r) && (e = (0, F.Nj)(e));
                let i = null != (n = null == (t = this._input) ? void 0 : t.selectionStart) ? n : 0;
                this.setState({ name: e }, () => {
                    var e;
                    null == (e = this._input) || e.setSelectionRange(i, i);
                });
            }),
            et(this, "insertEmojiAtPosition", (e) => {
                var t, n, r, i;
                let s = null != (r = null == (t = this._input) ? void 0 : t.selectionStart) ? r : 0,
                    l = null != (i = null == (n = this._input) ? void 0 : n.selectionEnd) ? i : 0,
                    a = this.state.name,
                    o = a.substring(0, s) + e + a.substring(l);
                this.setState({ name: o }, () => {
                    var t, n;
                    let r = s + e.length;
                    null == (t = this._input) || t.focus(), null == (n = this._input) || n.setSelectionRange(r, r);
                });
            }),
            et(this, "handleTypeChange", (e) => {
                let { value: t } = e,
                    { name: n } = this.state;
                M.xL.has(t) && (n = (0, F.Nj)(n)),
                    t === X.d4z.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
                    this.setState({
                        channelType: t,
                        name: n,
                    });
            }),
            et(this, "handlePrivacyChange", (e) => {
                this.setState({ isPrivate: e });
            }),
            et(this, "handleApplicationChange", (e) => {
                this.setState({ applicationId: e });
            }),
            et(this, "handleSKUChange", (e) => {
                this.setState({ skuId: e });
            }),
            et(this, "handleShowBranchesToggle", (e) => {
                this.setState({
                    showBranches: e,
                    branchId: null,
                });
            }),
            et(this, "handleBranchChange", (e) => {
                this.setState({ branchId: e });
            }),
            et(this, "handleHasBranchesChange", (e) => {
                this.setState({ hasBranches: e });
            }),
            et(this, "handleSubmit", async (e) => {
                let t, n, r;
                e.preventDefault();
                let {
                        cloneChannel: i,
                        categoryId: s,
                        user: l,
                        memberRoleIds: a,
                        isAdmin: o,
                        onClose: c,
                        owner: h,
                    } = this.props,
                    {
                        name: u,
                        pendingPermissionOverwrites: p,
                        channelType: g,
                        skuId: m,
                        branchId: b,
                        isPrivate: x,
                    } = this.state,
                    N = this.getGuildId();
                if (null != N) {
                    if (null != i) (t = d().values(i.permissionOverwrites)), (n = i.bitrate), (r = i.userLimit);
                    else if (g === X.d4z.GUILD_ANNOUNCEMENT) t = (0, F.rt)(N);
                    else {
                        if (x) {
                            t = (0, F.oQ)(N, g, [], !0);
                            let e = (0, v.Tj)(p, g);
                            e.length > 0 && (t = t.concat(e));
                            let n = null != h && l.id === h.id;
                            t.some((e) => a.has(e.id)) || o || n || t.push((0, F.jZ)(l.id, g));
                        }
                        g === X.d4z.GUILD_STAGE_VOICE &&
                            ((t = []),
                            Object.values(p).forEach((e) => {
                                let { row: n } = e;
                                null != n.id &&
                                    "" !== n.id &&
                                    (n.rowType === W.aC.ROLE
                                        ? t.push((0, Z.A)(n.id, f.BN.ROLE))
                                        : n.rowType === W.aC.MEMBER && t.push((0, Z.A)(n.id, f.BN.MEMBER)));
                            }));
                    }
                    this.setState({
                        errors: {},
                        submitting: !0,
                    });
                    try {
                        let e = await C.Z.createChannel({
                            guildId: N,
                            type: g,
                            name: u,
                            permissionOverwrites: t,
                            bitrate: n,
                            userLimit: r,
                            parentId: g !== X.d4z.GUILD_CATEGORY ? s : null,
                            skuId: m,
                            branchId: b,
                        });
                        if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                        let i = e.body;
                        M.xL.has(g) && (0, G.XU)(i.guild_id, i.id), this.setState({ submitting: !1 }), c();
                    } catch (e) {
                        null != e.body && "object" == typeof e.body
                            ? this.setState({
                                  errors: e.body,
                                  submitting: !1,
                              })
                            : this.setState({
                                  errors: { message: $.intl.string($.t.fEptJC) },
                                  submitting: !1,
                              });
                    }
                }
            });
        let { channelType: t, cloneChannel: n, prefillChannelName: r } = e;
        (this.state = {
            channelType: null != t ? t : X.d4z.GUILD_TEXT,
            name: null != n ? (0, j.F6)(n, V.default, k.Z) : null != r ? r : "",
            pendingPermissionOverwrites: {},
            isPrivate: !1,
            prevGuildId: e.guildId,
            applicationId: null,
            skuId: null,
            branchId: null,
            showBranches: !1,
            hasBranches: !1,
            slide: "CHANNEL_INFO",
            errors: {},
            submitting: !1,
        }),
            (this.handlePermissionOverwriteChange = this.handlePermissionOverwriteChange.bind(this));
    }
}
let eo = i.forwardRef(function (e, t) {
    let { channelType: n, guildId: i, cloneChannelId: s } = e,
        l = (0, p.cj)([B.Z, V.default, H.Z, R.Z, z.ZP], () => {
            var e, t, r;
            let l = B.Z.getGuild(i),
                a = V.default.getCurrentUser();
            o()(null != a, "CreateChannel: user cannot be undefined");
            let c = null != l && null != l.ownerId ? V.default.getUser(l.ownerId) : null,
                d = H.Z.can(X.Plq.ADMINISTRATOR, l),
                h = R.Z.getChannel(s);
            return {
                guild: l,
                canCreateStoreChannel: null != l && l.features.has(X.oNc.COMMERCE),
                canCreateAnnouncementChannel: null != l && l.features.has(X.oNc.NEWS),
                user: a,
                owner: c,
                memberRoles: null != (t = null == (e = z.ZP.getMember(i, a.id)) ? void 0 : e.roles) ? t : [],
                canViewChannels: H.Z.can(X.Plq.VIEW_CHANNEL, l),
                canConnect: H.Z.can(X.Plq.CONNECT, l),
                isAdmin: d,
                cloneChannel: h,
                channelType: null != (r = null == h ? void 0 : h.type) ? r : n,
                canManageRoles: H.Z.can(X.Plq.MANAGE_ROLES, l),
                canManageChannels: H.Z.can(X.Plq.MANAGE_CHANNELS, l),
            };
        }),
        a = (0, p.Wu)([O.Z], () =>
            O.Z.getGuildApplicationIds(i)
                .map((e) => O.Z.getApplication(e))
                .filter(Y.lm),
        ),
        c = new Set(l.memberRoles),
        { canManageRoles: d, canManageChannels: h } = l,
        u = (0, U.m)(i) && d && h,
        g = (0, L.Ui)(null == l ? void 0 : l.guild);
    return (0, r.jsx)(
        ea,
        er(en({}, e, l), {
            memberRoleIds: c,
            applications: a,
            canCreateStageChannel: u,
            canCreateMediaChannel: g,
            ref: t,
            width: 496,
        }),
    );
});
