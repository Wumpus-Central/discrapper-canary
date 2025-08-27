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
    m = n(742746),
    g = n(481060),
    x = n(333848),
    C = n(749210),
    N = n(332063),
    b = n(620123),
    E = n(911969),
    O = n(367907),
    f = n(812206),
    j = n(933557),
    I = n(636816),
    v = n(605436),
    y = n(974339),
    S = n(215157),
    T = n(313201),
    _ = n(318766),
    A = n(907040),
    D = n(906411),
    P = n(688465),
    L = n(312146),
    w = n(703656),
    G = n(146085),
    R = n(60222),
    U = n(388131),
    Z = n(131704),
    M = n(592125),
    z = n(271383),
    B = n(430824),
    H = n(496675),
    k = n(699516),
    V = n(594174),
    F = n(934415),
    X = n(823379),
    Y = n(63063),
    W = n(981631),
    q = n(71080),
    K = n(185923),
    J = n(710352),
    Q = n(231338),
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
            ? (i = (0, r.jsx)(g.IGR, {
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
        x = s === W.d4z.GUILD_STAGE_VOICE,
        { roles: C, members: N, getRichTag: b } = (0, S.Q)(u, null, x ? G.yP : (0, Z.CG)(s), a, x),
        E = y.Z.useSections({
            roles: C,
            members: N,
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
              members: N,
              getRichTag: b,
              children: (0, r.jsxs)(g.hzk, {
                  className: ee.addMembersContainer,
                  children: [
                      null != l && "" !== l
                          ? (0, r.jsx)(g.Text, {
                                color: "header-secondary",
                                className: ee.description,
                                variant: "text-sm/normal",
                                children: l,
                            })
                          : null,
                      (0, r.jsx)(y.Z.SearchBox, { placeholderText: $.intl.string($.t.iezLLi) }),
                      (0, r.jsx)(g.Text, {
                          className: ee.searchHelpText,
                          variant: "text-xs/normal",
                          children: $.intl.string($.t["rwFx8/"]),
                      }),
                      (0, r.jsx)(m._2, {
                          ref: h,
                          className: ee.membersList,
                          sectionHeight: y.Z.SECTION_HEIGHT,
                          renderSection: y.Z.renderSection,
                          rowHeight: y.Z.ROW_HEIGHT,
                          renderRow: y.Z.renderRow,
                          sections: E,
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
                    page: W.ZY5.CREATE_CHANNEL_MODAL,
                    section: W.jXE.CHANNEL_NAME,
                    object: W.qAy.EMOJI_PICKER_BUTTON,
                },
            }),
            [],
        ),
        a = i.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, r.jsx)(A.Z, {
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
    return (0, r.jsx)(g.yRy, {
        targetElementRef: s,
        renderPopout: a,
        animation: g.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsx)(
                _.Z,
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
        r && null == n && C.Z.fetchApplications(t),
            O.ZP.trackWithMetadata(W.rMx.OPEN_MODAL, { type: "Create Channel" });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelType === W.d4z.GUILD_ANNOUNCEMENT &&
            this.setState({ channelType: W.d4z.GUILD_TEXT }),
            !t.isPrivate &&
                this.state.isPrivate &&
                O.ZP.trackWithMetadata(W.rMx.OPEN_MODAL, { type: "Create Private Channel" });
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
            n !== g.Dvm.EXITING &&
            "" !== l &&
            "" !== l.trim() &&
            (!r || !!(0, v.nT)(i, e, t)) &&
            (i !== W.d4z.GUILD_STORE || null != s)
        );
    }
    getIconComponent() {
        let { isPrivate: e, channelType: t } = this.state;
        switch (t) {
            case W.d4z.GUILD_TEXT:
                return e ? g.W4G : g.VL1;
            case W.d4z.GUILD_FORUM:
                return g.Mmi;
            case W.d4z.GUILD_MEDIA:
                return g.XBm;
            case W.d4z.GUILD_VOICE:
                return e ? g.gjC : g.gj8;
            case W.d4z.GUILD_STORE:
                return g.lO_;
            case W.d4z.GUILD_ANNOUNCEMENT:
                return g.MqZ;
            case W.d4z.GUILD_STAGE_VOICE:
                return g.ewx;
            default:
                return (0, Z.zi)(t) ? g.VL1 : Q.Vq;
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
                    : l === W.d4z.GUILD_CATEGORY
                      ? $.intl.string($.t["ISN+ND"])
                      : $.intl.string($.t["fUYU+v"]);
        if (null != i) {
            let n = M.Z.getChannel(i);
            t = (0, r.jsx)(g.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                className: ee.subtitle,
                children: $.intl.format($.t.L1zJgY, {
                    categoryName: null != (e = null == n ? void 0 : n.name) ? e : "",
                }),
            });
        }
        return (0, r.jsxs)(g.xBx, {
            separator: !1,
            children: [
                (0, r.jsxs)("div", {
                    className: ee.header,
                    children: [
                        (0, r.jsx)(g.X6q, {
                            id: this.headerId,
                            variant: "heading-lg/semibold",
                            className: ee.title,
                            children: a,
                        }),
                        t,
                    ],
                }),
                (0, r.jsx)(g.olH, {
                    onClick: s,
                    className: ee.closeButton,
                }),
            ],
        });
    }
    renderName() {
        let e,
            { cloneChannel: t, guildId: i } = this.props,
            { errors: s, channelType: l } = this.state;
        (null == s ? void 0 : s.name) != null &&
            (e = (0, r.jsx)(g.Text, {
                variant: "text-xs/normal",
                color: "text-danger",
                className: ee.error,
                children: s.name,
            }));
        let a = l === W.d4z.GUILD_CATEGORY,
            o = a ? $.intl.string($.t.OCAkGB) : $.intl.string($.t.PVbHDg),
            c =
                null != t
                    ? (0, r.jsx)(g.R94, {
                          className: ee.channelNameNote,
                          type: g.R94.Types.DESCRIPTION,
                          children: $.intl.format($.t.s2ZzZW, { name: (0, j.F6)(t, V.default, k.Z, !0) }),
                      })
                    : l === W.d4z.GUILD_FORUM
                      ? (0, r.jsx)(g.R94, {
                            className: ee.channelNameNote,
                            type: g.R94.Types.DESCRIPTION,
                            children: $.intl.format($.t.tbVWyc, {
                                forumUpsellHook: (e, t) =>
                                    (0, r.jsx)(
                                        g.eee,
                                        {
                                            onClick: () =>
                                                (0, g.ZDy)(async () => {
                                                    let { default: e } = await n.e("18417").then(n.bind(n, 740696));
                                                    return (t) => (0, r.jsx)(e, er(en({}, t), { guildId: i }));
                                                }),
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        })
                      : null,
            d = this.getIconComponent();
        return (0, r.jsx)(T.FG, {
            children: (t) =>
                (0, r.jsxs)(g.xJW, {
                    title: o,
                    tag: "label",
                    htmlFor: t,
                    titleClassName: ee.sectionTitle,
                    className: ee.name,
                    children: [
                        (0, r.jsx)(
                            g.oil,
                            {
                                id: t,
                                value: this.state.name,
                                onChange: this.handleNameChange,
                                inputRef: this.setInputRef,
                                maxLength: 100,
                                placeholder: (function (e) {
                                    switch (e) {
                                        case W.d4z.GUILD_CATEGORY:
                                            return $.intl.string($.t.eTVbt7);
                                        case W.d4z.GUILD_FORUM:
                                            return $.intl.string($.t["5z1Xam"]);
                                        default:
                                            return $.intl.string($.t["bw/b8P"]);
                                    }
                                })(l),
                                leading: a ? void 0 : d,
                                trailing: {
                                    type: "emoji",
                                    button: (0, r.jsx)(el, {
                                        onEmojiPicked: this.insertEmojiAtPosition,
                                        isPrivateChannel: this.state.isPrivate,
                                        guildId: i,
                                    }),
                                },
                                autoFocus: !0,
                                focusProps: { offset: { right: -30 } },
                            },
                            t,
                        ),
                        e,
                        c,
                    ],
                }),
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
        if (null != e || a === W.d4z.GUILD_CATEGORY) return;
        let c = null != t && t.length > 0;
        return (0, r.jsx)(g.xJW, {
            className: ee.type,
            title: $.intl.string($.t["7ZcXGx"]),
            children: (0, r.jsx)(g.FXm, {
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
                                icon: t ? g.W4G : g.VL1,
                                label: $.intl.string($.t.pnuRXF),
                                value: W.d4z.GUILD_TEXT,
                                description: $.intl.string($.t.Hf5Lb2),
                            },
                        ];
                    return (
                        a.push({
                            icon: t ? g.gjC : g.gj8,
                            label: $.intl.string($.t.Sx55Oj),
                            value: W.d4z.GUILD_VOICE,
                            description: $.intl.string($.t.pqfkoK),
                        }),
                        a.push({
                            icon: t ? g.BUe : g.Mmi,
                            label: $.intl.string($.t.eAVIDw),
                            value: W.d4z.GUILD_FORUM,
                            description: (0, r.jsxs)(g.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                className: ee.radioLabelDescription,
                                children: [
                                    $.intl.string($.t.iZ5pgo),
                                    (0, r.jsx)("br", {}),
                                    $.intl.format($.t.fjSvsL, {
                                        onClick: () => {
                                            open(J.V8);
                                        },
                                    }),
                                ],
                            }),
                        }),
                        l &&
                            a.push({
                                icon: t ? g.D7T : g.XBm,
                                label: $.intl.string($.t["6x6fVl"]),
                                value: W.d4z.GUILD_MEDIA,
                                description: (0, r.jsxs)(g.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    className: ee.radioLabelDescription,
                                    children: [
                                        $.intl.string($.t.JyCrwc),
                                        (0, r.jsx)("br", {}),
                                        $.intl.format($.t.fjSvsL, {
                                            onClick: () => {
                                                open(Y.Z.getCreatorSupportArticleURL(W.BhN.MEDIA_CHANNEL));
                                            },
                                        }),
                                    ],
                                }),
                                isBeta: !0,
                            }),
                        i &&
                            a.push({
                                icon: g.MqZ,
                                iconSize: 24,
                                label: $.intl.string($.t.qr9dEB),
                                value: W.d4z.GUILD_ANNOUNCEMENT,
                                description: $.intl.string($.t.gBkfzs),
                            }),
                        n &&
                            a.push({
                                icon: g.lO_,
                                iconSize: 24,
                                label: $.intl.string($.t.SxjkXV),
                                value: W.d4z.GUILD_STORE,
                                description: $.intl.string($.t.nmCPMD),
                            }),
                        s &&
                            a.push({
                                icon: g.ewx,
                                iconSize: 24,
                                label: $.intl.string($.t.pNWst7),
                                value: W.d4z.GUILD_STAGE_VOICE,
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
                                                (0, r.jsxs)(g.Text, {
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
                                                    ? (0, r.jsx)(g.Text, {
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
                size: g.FXm.Sizes.NOT_SET,
                onChange: this.handleTypeChange,
                itemInfoClassName: ee.radioBarLabel,
            }),
        });
    }
    renderStoreOptions() {
        let { applications: e } = this.props,
            { applicationId: t, skuId: n, branchId: s, showBranches: l, hasBranches: a } = this.state;
        if (null == e || 0 === e.length) throw Error("Unexpected empty applications");
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(g.vwX, {
                    tag: "h5",
                    children: $.intl.string($.t.vPIW2N),
                }),
                (0, r.jsx)(g.q4e, {
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
                    ? (0, r.jsxs)(i.Fragment, {
                          children: [
                              (0, r.jsx)(g.vwX, {
                                  tag: "h5",
                                  children: $.intl.string($.t.XNIWFh),
                              }),
                              (0, r.jsx)(
                                  b.Z,
                                  {
                                      applicationId: t,
                                      onChange: this.handleSKUChange,
                                      selectedSkuId: n,
                                      className: ee.storeChannelOptionSelector,
                                  },
                                  t,
                              ),
                          ],
                      })
                    : null,
                null != t && a
                    ? (0, r.jsxs)(g.j7V, {
                          hideBorder: !0,
                          onChange: this.handleShowBranchesToggle,
                          value: l,
                          note: $.intl.format($.t.UVXL1d, { devPortalUrl: W.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT }),
                          children: [
                              (0, r.jsx)(g._m8, {
                                  size: "md",
                                  color: "currentColor",
                                  className: ee.switchIcon,
                              }),
                              $.intl.string($.t["3e9mHx"]),
                          ],
                      })
                    : null,
                null != t
                    ? (0, r.jsxs)(i.Fragment, {
                          children: [
                              l
                                  ? (0, r.jsx)(g.vwX, {
                                        tag: "h5",
                                        children: $.intl.string($.t.o7DqFx),
                                    })
                                  : null,
                              (0, r.jsx)(
                                  N.Z,
                                  {
                                      applicationId: t,
                                      onChange: this.handleBranchChange,
                                      selectedBranchId: s,
                                      hide: !l,
                                      onHasBranchesChange: this.handleHasBranchesChange,
                                      className: ee.storeChannelOptionSelector,
                                  },
                                  t,
                              ),
                          ],
                      })
                    : null,
            ],
        });
    }
    renderPrivacyOptions() {
        let { cloneChannel: e } = this.props,
            { channelType: t, isPrivate: n } = this.state;
        if (null != e || t === W.d4z.GUILD_ANNOUNCEMENT) return null;
        let i = t === W.d4z.GUILD_CATEGORY ? $.intl.string($.t.lEPAZ2) : $.intl.string($.t.aUI70t),
            s = t === W.d4z.GUILD_CATEGORY ? $.intl.string($.t["RQUk6+"]) : $.intl.string($.t.YguuKi);
        return (0, r.jsx)(
            g.xJW,
            {
                children: (0, r.jsxs)(g.j7V, {
                    hideBorder: !0,
                    onChange: this.handlePrivacyChange,
                    value: n,
                    note: s,
                    children: [
                        (0, r.jsx)(g.mBM, {
                            size: "md",
                            color: "currentColor",
                            className: ee.switchIcon,
                        }),
                        i,
                    ],
                }),
            },
            "privacy-switch",
        );
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
                children: (0, r.jsx)(g.Wn, {
                    messageType: g.QYI.ERROR,
                    children: t,
                }),
            });
    }
    renderFooter() {
        let e,
            { channelType: t, onClose: n } = this.props,
            { channelType: i } = this.state,
            { isPrivate: s } = this.state;
        e = t === W.d4z.GUILD_CATEGORY ? $.intl.string($.t["ISN+ND"]) : $.intl.string($.t["fUYU+v"]);
        let l = s || i === W.d4z.GUILD_STAGE_VOICE;
        return (0, r.jsx)(g.mzw, {
            className: ee.modalFooter,
            children: (0, r.jsxs)(g.hE2, {
                direction: "horizontal-reverse",
                children: [
                    l
                        ? (0, r.jsx)(g.zxk, {
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
                        : (0, r.jsx)(g.zxk, {
                              variant: "primary",
                              text: e,
                              type: "submit",
                              disabled: !this.canSubmit(),
                          }),
                    (0, r.jsx)(g.zxk, {
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
                    : t === W.d4z.GUILD_CATEGORY
                      ? $.intl.string($.t["ISN+ND"])
                      : $.intl.string($.t["fUYU+v"])),
            (0, r.jsx)(g.mzw, {
                children: (0, r.jsxs)(g.hE2, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, r.jsx)(g.zxk, {
                            variant: "primary",
                            text: e,
                            type: "submit",
                            disabled: !this.canSubmit(),
                        }),
                        (0, r.jsx)(g.zxk, {
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
                (0, r.jsxs)(g.hzk, {
                    className: ee.modalContent,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        e === W.d4z.GUILD_STORE ? this.renderStoreOptions() : null,
                        (0, r.jsx)(I.Z, {
                            guildId: t,
                            channelType: e,
                            className: ee.channelTypeDescription,
                        }),
                        e === W.d4z.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions(),
                    ],
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
            l = t === W.d4z.GUILD_STAGE_VOICE;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(g.xBx, {
                    separator: !1,
                    children: [
                        (0, r.jsxs)(g.Kqy, {
                            gap: 4,
                            className: ee.header,
                            children: [
                                (0, r.jsx)(g.X6q, {
                                    variant: "heading-lg/semibold",
                                    className: ee.title,
                                    children: l ? $.intl.string($.t["S/6zHB"]) : $.intl.string($.t.dMJ3Y2),
                                }),
                                (0, r.jsxs)(g.Text, {
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
                        (0, r.jsx)(g.olH, {
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
            children: (0, r.jsxs)(g.MyZ, {
                activeSlide: e,
                width: t,
                children: [
                    (0, r.jsx)(g.Mi4, {
                        id: "CHANNEL_INFO",
                        impressionName: h.ImpressionNames.CHANNEL_ADD_INFO,
                        impressionProperties: n,
                        children: this.renderCreateChannelContent(),
                    }),
                    (0, r.jsx)(g.Mi4, {
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
        return (0, r.jsx)(g.Y0X, {
            transitionState: e,
            className: ee.modal,
            "aria-labelledby": this.headerId,
            size: g.CgR.DYNAMIC,
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
                Z.xL.has(r) && (e = (0, F.Nj)(e));
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
                Z.xL.has(t) && (n = (0, F.Nj)(n)),
                    t === W.d4z.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
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
                        channelType: m,
                        skuId: g,
                        branchId: C,
                        isPrivate: N,
                    } = this.state,
                    b = this.getGuildId();
                if (null != b) {
                    if (null != i) (t = d().values(i.permissionOverwrites)), (n = i.bitrate), (r = i.userLimit);
                    else if (m === W.d4z.GUILD_ANNOUNCEMENT) t = (0, F.rt)(b);
                    else {
                        if (N) {
                            t = (0, F.oQ)(b, m, [], !0);
                            let e = (0, v.Tj)(p, m);
                            e.length > 0 && (t = t.concat(e));
                            let n = null != h && l.id === h.id;
                            t.some((e) => a.has(e.id)) || o || n || t.push((0, F.jZ)(l.id, m));
                        }
                        m === W.d4z.GUILD_STAGE_VOICE &&
                            ((t = []),
                            Object.values(p).forEach((e) => {
                                let { row: n } = e;
                                null != n.id &&
                                    "" !== n.id &&
                                    (n.rowType === q.aC.ROLE
                                        ? t.push((0, U.A)(n.id, E.BN.ROLE))
                                        : n.rowType === q.aC.MEMBER && t.push((0, U.A)(n.id, E.BN.MEMBER)));
                            }));
                    }
                    this.setState({
                        errors: {},
                        submitting: !0,
                    });
                    try {
                        let e = await x.Z.createChannel({
                            guildId: b,
                            type: m,
                            name: u,
                            permissionOverwrites: t,
                            bitrate: n,
                            userLimit: r,
                            parentId: m !== W.d4z.GUILD_CATEGORY ? s : null,
                            skuId: g,
                            branchId: C,
                        });
                        if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                        let i = e.body;
                        Z.xL.has(m) && (0, w.XU)(i.guild_id, i.id), this.setState({ submitting: !1 }), c();
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
            channelType: null != t ? t : W.d4z.GUILD_TEXT,
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
        l = (0, p.cj)([B.Z, V.default, H.Z, M.Z, z.ZP], () => {
            var e, t, r;
            let l = B.Z.getGuild(i),
                a = V.default.getCurrentUser();
            o()(null != a, "CreateChannel: user cannot be undefined");
            let c = null != l && null != l.ownerId ? V.default.getUser(l.ownerId) : null,
                d = H.Z.can(W.Plq.ADMINISTRATOR, l),
                h = M.Z.getChannel(s);
            return {
                guild: l,
                canCreateStoreChannel: null != l && l.features.has(W.oNc.COMMERCE),
                canCreateAnnouncementChannel: null != l && l.features.has(W.oNc.NEWS),
                user: a,
                owner: c,
                memberRoles: null != (t = null == (e = z.ZP.getMember(i, a.id)) ? void 0 : e.roles) ? t : [],
                canViewChannels: H.Z.can(W.Plq.VIEW_CHANNEL, l),
                canConnect: H.Z.can(W.Plq.CONNECT, l),
                isAdmin: d,
                cloneChannel: h,
                channelType: null != (r = null == h ? void 0 : h.type) ? r : n,
                canManageRoles: H.Z.can(W.Plq.MANAGE_ROLES, l),
                canManageChannels: H.Z.can(W.Plq.MANAGE_CHANNELS, l),
            };
        }),
        a = (0, p.Wu)([f.Z], () =>
            f.Z.getGuildApplicationIds(i)
                .map((e) => f.Z.getApplication(e))
                .filter(X.lm),
        ),
        c = new Set(l.memberRoles),
        { canManageRoles: d, canManageChannels: h } = l,
        u = (0, R.m)(i) && d && h,
        m = (0, L.Ui)(null == l ? void 0 : l.guild);
    return (0, r.jsx)(
        ea,
        er(en({}, e, l), {
            memberRoleIds: c,
            applications: a,
            canCreateStageChannel: u,
            canCreateMediaChannel: m,
            ref: t,
            width: 496,
        }),
    );
});
