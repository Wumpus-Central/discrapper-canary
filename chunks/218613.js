n.d(t, {
    default: () => el,
    p: () => en,
}),
    n(539854),
    n(953529),
    n(388685),
    n(781311),
    n(415506);
var i = n(951288),
    s = n(647438),
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
    I = n(367907),
    j = n(812206),
    b = n(933557),
    v = n(636816),
    f = n(605436),
    O = n(185413),
    S = n(313201),
    y = n(318766),
    A = n(907040),
    _ = n(906411),
    T = n(688465),
    D = n(312146),
    L = n(703656),
    U = n(146085),
    P = n(60222),
    G = n(388131),
    M = n(131704),
    z = n(592125),
    R = n(271383),
    w = n(430824),
    Z = n(496675),
    B = n(699516),
    k = n(594174),
    H = n(934415),
    V = n(823379),
    F = n(63063),
    X = n(981631),
    Y = n(71080),
    q = n(185923),
    W = n(710352),
    K = n(231338),
    J = n(388032),
    Q = n(421835);
function $(e, t, n) {
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
function ee(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                $(e, t, n[t]);
            });
    }
    return e;
}
function et(e, t) {
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
function en(e) {
    let { isNew: t, isBeta: n } = e,
        s = null;
    return (
        !0 === t
            ? (s = (0, i.jsx)(m.IGR, {
                  text: J.intl.string(J.t.psHMa2),
                  className: Q.newBadge,
                  color: u.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER,
              }))
            : !0 === n && (s = (0, i.jsx)(T.Z, { className: Q.newBadge })),
        s
    );
}
function ei(e) {
    let { onChange: t, guildId: n, channelType: r, description: l } = e,
        [a, o] = s.useState({}),
        d = (0, p.e7)([w.Z], () => w.Z.getGuild(n)),
        c = r === X.d4z.GUILD_STAGE_VOICE;
    return (s.useEffect(() => {
        t(a);
    }, [a, t]),
    null == d)
        ? null
        : (0, i.jsx)(m.hzk, {
              className: Q.addMembersContainer,
              children: (0, i.jsx)(O.U, {
                  guild: d,
                  channel: null,
                  permission: c ? U.yP : (0, M.CG)(r),
                  pendingAdditions: a,
                  setPendingAdditions: o,
                  isStageChannel: c,
                  description: l,
              }),
          });
}
function es(e) {
    let { onEmojiPicked: t, guildId: n } = e,
        r = s.useRef(null),
        l = s.useMemo(
            () => ({
                popoutLocation: {
                    page: X.ZY5.CREATE_CHANNEL_MODAL,
                    section: X.jXE.CHANNEL_NAME,
                    object: X.qAy.EMOJI_PICKER_BUTTON,
                },
            }),
            [],
        ),
        a = s.useCallback(
            (e) => {
                let { closePopout: s } = e;
                return (0, i.jsx)(A.Z, {
                    channel: null,
                    guildId: n,
                    pickerIntention: q.Hz.CHANNEL_NAME,
                    closePopout: s,
                    onNavigateAway: s,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        null != n && n.type === _.B.UNICODE && t(n.surrogates), i && s();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: l,
                });
            },
            [l, n, t],
        );
    return (0, i.jsx)(m.yRy, {
        targetElementRef: r,
        renderPopout: a,
        animation: m.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(
                y.Z,
                et(ee({}, e), {
                    ref: r,
                    active: n,
                    className: Q.emojiButton,
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
class er extends s.PureComponent {
    componentDidMount() {
        let { _input: e } = this;
        null != e && e.select();
        let { guildId: t, applications: n, canCreateStoreChannel: i } = this.props;
        i && null == n && C.Z.fetchApplications(t),
            I.ZP.trackWithMetadata(X.rMx.OPEN_MODAL, { type: "Create Channel" });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelType === X.d4z.GUILD_ANNOUNCEMENT &&
            this.setState({ channelType: X.d4z.GUILD_TEXT }),
            !t.isPrivate &&
                this.state.isPrivate &&
                I.ZP.trackWithMetadata(X.rMx.OPEN_MODAL, { type: "Create Private Channel" });
    }
    getGuildId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.guildId;
    }
    canSubmit() {
        let { canViewChannels: e, canConnect: t, transitionState: n } = this.props,
            { isPrivate: i, channelType: s, skuId: r, name: l, submitting: a } = this.state;
        return (
            !a &&
            n !== m.Dvm.EXITING &&
            "" !== l &&
            "" !== l.trim() &&
            (!i || !!(0, f.nT)(s, e, t)) &&
            (s !== X.d4z.GUILD_STORE || null != r)
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
                return (0, M.zi)(t) ? m.VL1 : K.Vq;
        }
    }
    renderHeader() {
        var e;
        let t,
            { cloneChannel: n, categoryId: s, onClose: r } = this.props,
            { channelType: l } = this.state,
            a =
                null != n
                    ? J.intl.string(J.t.dEaPc3)
                    : l === X.d4z.GUILD_CATEGORY
                      ? J.intl.string(J.t["ISN+ND"])
                      : J.intl.string(J.t["fUYU+v"]);
        if (null != s) {
            let n = z.Z.getChannel(s);
            t = (0, i.jsx)(m.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                className: Q.subtitle,
                children: J.intl.format(J.t.L1zJgY, {
                    categoryName: null != (e = null == n ? void 0 : n.name) ? e : "",
                }),
            });
        }
        return (0, i.jsxs)(m.xBx, {
            separator: !1,
            children: [
                (0, i.jsxs)("div", {
                    className: Q.header,
                    children: [
                        (0, i.jsx)(m.X6q, {
                            id: this.headerId,
                            variant: "heading-lg/semibold",
                            className: Q.title,
                            children: a,
                        }),
                        t,
                    ],
                }),
                (0, i.jsx)(m.olH, {
                    onClick: r,
                    className: Q.closeButton,
                }),
            ],
        });
    }
    renderName() {
        let e,
            { cloneChannel: t, guildId: s } = this.props,
            { errors: r, channelType: l } = this.state;
        (null == r ? void 0 : r.name) != null &&
            (e = (0, i.jsx)(m.Text, {
                variant: "text-xs/normal",
                color: "text-danger",
                className: Q.error,
                children: r.name,
            }));
        let a = l === X.d4z.GUILD_CATEGORY,
            o = a ? J.intl.string(J.t.OCAkGB) : J.intl.string(J.t.PVbHDg),
            d =
                null != t
                    ? (0, i.jsx)(m.R94, {
                          className: Q.channelNameNote,
                          type: m.R94.Types.DESCRIPTION,
                          children: J.intl.format(J.t.s2ZzZW, { name: (0, b.F6)(t, k.default, B.Z, !0) }),
                      })
                    : l === X.d4z.GUILD_FORUM
                      ? (0, i.jsx)(m.R94, {
                            className: Q.channelNameNote,
                            type: m.R94.Types.DESCRIPTION,
                            children: J.intl.format(J.t.tbVWyc, {
                                forumUpsellHook: (e, t) =>
                                    (0, i.jsx)(
                                        m.eee,
                                        {
                                            onClick: () =>
                                                (0, m.ZDy)(async () => {
                                                    let { default: e } = await n.e("18417").then(n.bind(n, 740696));
                                                    return (t) => (0, i.jsx)(e, et(ee({}, t), { guildId: s }));
                                                }),
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        })
                      : null,
            c = this.getIconComponent();
        return (0, i.jsx)(S.FG, {
            children: (t) =>
                (0, i.jsxs)(m.xJW, {
                    title: o,
                    tag: "label",
                    htmlFor: t,
                    titleClassName: Q.sectionTitle,
                    className: Q.name,
                    children: [
                        (0, i.jsx)(
                            m.oil,
                            {
                                id: t,
                                value: this.state.name,
                                onChange: this.handleNameChange,
                                inputRef: this.setInputRef,
                                maxLength: 100,
                                placeholder: (function (e) {
                                    switch (e) {
                                        case X.d4z.GUILD_CATEGORY:
                                            return J.intl.string(J.t.eTVbt7);
                                        case X.d4z.GUILD_FORUM:
                                            return J.intl.string(J.t["5z1Xam"]);
                                        default:
                                            return J.intl.string(J.t["bw/b8P"]);
                                    }
                                })(l),
                                leading: a ? void 0 : c,
                                trailing: {
                                    type: "emoji",
                                    button: (0, i.jsx)(es, {
                                        onEmojiPicked: this.insertEmojiAtPosition,
                                        isPrivateChannel: this.state.isPrivate,
                                        guildId: s,
                                    }),
                                },
                                autoFocus: !0,
                                focusProps: { offset: { right: -30 } },
                            },
                            t,
                        ),
                        e,
                        d,
                    ],
                }),
        });
    }
    renderType() {
        let {
                cloneChannel: e,
                applications: t,
                canCreateStoreChannel: n,
                canCreateAnnouncementChannel: s,
                canCreateStageChannel: r,
                canCreateMediaChannel: l,
            } = this.props,
            { channelType: a, isPrivate: o } = this.state;
        if (null != e || a === X.d4z.GUILD_CATEGORY) return;
        let d = null != t && t.length > 0;
        return (0, i.jsx)(m.xJW, {
            className: Q.type,
            title: J.intl.string(J.t["7ZcXGx"]),
            children: (0, i.jsx)(m.FXm, {
                options: (function (e) {
                    let {
                            isPrivate: t,
                            showStoreChannelOption: n,
                            showAnnouncementChannelOption: s,
                            canCreateStageChannel: r,
                            canCreateMediaChannel: l,
                        } = e,
                        a = [
                            {
                                icon: t ? m.W4G : m.VL1,
                                label: J.intl.string(J.t.pnuRXF),
                                value: X.d4z.GUILD_TEXT,
                                description: J.intl.string(J.t.Hf5Lb2),
                            },
                        ];
                    return (
                        a.push({
                            icon: t ? m.gjC : m.gj8,
                            label: J.intl.string(J.t.Sx55Oj),
                            value: X.d4z.GUILD_VOICE,
                            description: J.intl.string(J.t.pqfkoK),
                        }),
                        a.push({
                            icon: t ? m.BUe : m.Mmi,
                            label: J.intl.string(J.t.eAVIDw),
                            value: X.d4z.GUILD_FORUM,
                            description: (0, i.jsxs)(m.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                className: Q.radioLabelDescription,
                                children: [
                                    J.intl.string(J.t.iZ5pgo),
                                    (0, i.jsx)("br", {}),
                                    J.intl.format(J.t.fjSvsL, {
                                        onClick: () => {
                                            open(W.V8);
                                        },
                                    }),
                                ],
                            }),
                        }),
                        l &&
                            a.push({
                                icon: t ? m.D7T : m.XBm,
                                label: J.intl.string(J.t["6x6fVl"]),
                                value: X.d4z.GUILD_MEDIA,
                                description: (0, i.jsxs)(m.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    className: Q.radioLabelDescription,
                                    children: [
                                        J.intl.string(J.t.JyCrwc),
                                        (0, i.jsx)("br", {}),
                                        J.intl.format(J.t.fjSvsL, {
                                            onClick: () => {
                                                open(F.Z.getCreatorSupportArticleURL(X.BhN.MEDIA_CHANNEL));
                                            },
                                        }),
                                    ],
                                }),
                                isBeta: !0,
                            }),
                        s &&
                            a.push({
                                icon: m.MqZ,
                                iconSize: 24,
                                label: J.intl.string(J.t.qr9dEB),
                                value: X.d4z.GUILD_ANNOUNCEMENT,
                                description: J.intl.string(J.t.gBkfzs),
                            }),
                        n &&
                            a.push({
                                icon: m.lO_,
                                iconSize: 24,
                                label: J.intl.string(J.t.SxjkXV),
                                value: X.d4z.GUILD_STORE,
                                description: J.intl.string(J.t.nmCPMD),
                            }),
                        r &&
                            a.push({
                                icon: m.ewx,
                                iconSize: 24,
                                label: J.intl.string(J.t.pNWst7),
                                value: X.d4z.GUILD_STAGE_VOICE,
                                description: J.intl.string(J.t.VPAwgo),
                            }),
                        a.map((e) => {
                            let { icon: t, iconSize: n, label: s, value: r, description: l, isNew: a, isBeta: o } = e;
                            return {
                                name: (0, i.jsxs)("div", {
                                    className: Q.radioItemName,
                                    children: [
                                        (0, i.jsx)(
                                            t,
                                            et(
                                                ee(
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
                                                    className: Q.icon,
                                                    colorClass: Q.foreground,
                                                },
                                            ),
                                        ),
                                        (0, i.jsxs)("div", {
                                            children: [
                                                (0, i.jsxs)(m.Text, {
                                                    variant: "text-md/medium",
                                                    className: Q.radioLabelName,
                                                    children: [
                                                        s,
                                                        (0, i.jsx)(en, {
                                                            isNew: a,
                                                            isBeta: o,
                                                        }),
                                                    ],
                                                }),
                                                "string" == typeof l
                                                    ? (0, i.jsx)(m.Text, {
                                                          variant: "text-sm/normal",
                                                          color: "header-secondary",
                                                          className: Q.radioLabelDescription,
                                                          children: l,
                                                      })
                                                    : l,
                                            ],
                                        }),
                                    ],
                                }),
                                value: r,
                                radioBarClassName: Q.radioBar,
                                radioItemIconClassName: Q.radioBarIcon,
                            };
                        })
                    );
                })({
                    isPrivate: o,
                    showStoreChannelOption: n && d,
                    showAnnouncementChannelOption: s,
                    canCreateStageChannel: r,
                    canCreateMediaChannel: l,
                }),
                value: a,
                size: m.FXm.Sizes.NOT_SET,
                onChange: this.handleTypeChange,
                itemInfoClassName: Q.radioBarLabel,
            }),
        });
    }
    renderStoreOptions() {
        let { applications: e } = this.props,
            { applicationId: t, skuId: n, branchId: r, showBranches: l, hasBranches: a } = this.state;
        if (null == e || 0 === e.length) throw Error("Unexpected empty applications");
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(m.vwX, {
                    tag: "h5",
                    children: J.intl.string(J.t.vPIW2N),
                }),
                (0, i.jsx)(m.q4e, {
                    options: e.map((e) => ({
                        label: e.name,
                        value: e.id,
                    })),
                    placeholder: J.intl.string(J.t["3XfCPT"]),
                    value: t,
                    onChange: this.handleApplicationChange,
                    className: Q.storeChannelOptionSelector,
                }),
                null != t
                    ? (0, i.jsxs)(s.Fragment, {
                          children: [
                              (0, i.jsx)(m.vwX, {
                                  tag: "h5",
                                  children: J.intl.string(J.t.XNIWFh),
                              }),
                              (0, i.jsx)(
                                  x.Z,
                                  {
                                      applicationId: t,
                                      onChange: this.handleSKUChange,
                                      selectedSkuId: n,
                                      className: Q.storeChannelOptionSelector,
                                  },
                                  t,
                              ),
                          ],
                      })
                    : null,
                null != t && a
                    ? (0, i.jsxs)(m.j7V, {
                          hideBorder: !0,
                          onChange: this.handleShowBranchesToggle,
                          value: l,
                          note: J.intl.format(J.t.UVXL1d, { devPortalUrl: X.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT }),
                          children: [
                              (0, i.jsx)(m._m8, {
                                  size: "md",
                                  color: "currentColor",
                                  className: Q.switchIcon,
                              }),
                              J.intl.string(J.t["3e9mHx"]),
                          ],
                      })
                    : null,
                null != t
                    ? (0, i.jsxs)(s.Fragment, {
                          children: [
                              l
                                  ? (0, i.jsx)(m.vwX, {
                                        tag: "h5",
                                        children: J.intl.string(J.t.o7DqFx),
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
                                      className: Q.storeChannelOptionSelector,
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
        if (null != e || t === X.d4z.GUILD_ANNOUNCEMENT) return null;
        let s = t === X.d4z.GUILD_CATEGORY ? J.intl.string(J.t.lEPAZ2) : J.intl.string(J.t.aUI70t),
            r = t === X.d4z.GUILD_CATEGORY ? J.intl.string(J.t["RQUk6+"]) : J.intl.string(J.t.YguuKi);
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
                            size: "md",
                            color: "currentColor",
                            className: Q.switchIcon,
                        }),
                        s,
                    ],
                }),
            },
            "privacy-switch",
        );
    }
    renderError(e) {
        let t,
            { channelType: n, isPrivate: s, errors: r } = this.state,
            { canConnect: a, canViewChannels: o } = this.props;
        if (Object.values(r).length > 0) {
            if (null != r.message && "" !== r.message) t = r.message;
            else if (e || null == r.name) {
                let e = Object.values(r)[0];
                e.length > 0 && (t = e);
            }
        } else s && !(0, f.nT)(n, o, a) && (t = (0, f.$7)(n));
        if (null != t)
            return (0, i.jsx)("div", {
                className: l()(Q.createError, { [Q.addMemberError]: e }),
                children: (0, i.jsx)(m.Wn, {
                    messageType: m.QYI.ERROR,
                    children: t,
                }),
            });
    }
    renderFooter() {
        let e,
            { channelType: t, onClose: n } = this.props,
            { channelType: s } = this.state,
            { isPrivate: r } = this.state;
        e = t === X.d4z.GUILD_CATEGORY ? J.intl.string(J.t["ISN+ND"]) : J.intl.string(J.t["fUYU+v"]);
        let l = r || s === X.d4z.GUILD_STAGE_VOICE;
        return (0, i.jsx)(m.mzw, {
            className: Q.modalFooter,
            children: (0, i.jsxs)(m.hE2, {
                direction: "horizontal-reverse",
                children: [
                    l
                        ? (0, i.jsx)(m.zxk, {
                              variant: "primary",
                              text: J.intl.string(J.t.PDTjLC),
                              type: "button",
                              onClick: () => {
                                  this.setState({
                                      slide: "ADD_MEMBERS",
                                      errors: {},
                                  });
                              },
                              disabled: !this.canSubmit(),
                          })
                        : (0, i.jsx)(m.zxk, {
                              variant: "primary",
                              text: e,
                              type: "submit",
                              disabled: !this.canSubmit(),
                          }),
                    (0, i.jsx)(m.zxk, {
                        variant: "secondary",
                        text: J.intl.string(J.t["ETE/oK"]),
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
                    ? J.intl.string(J.t["5WxrcX"])
                    : t === X.d4z.GUILD_CATEGORY
                      ? J.intl.string(J.t["ISN+ND"])
                      : J.intl.string(J.t["fUYU+v"])),
            (0, i.jsx)(m.mzw, {
                children: (0, i.jsxs)(m.hE2, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, i.jsx)(m.zxk, {
                            variant: "primary",
                            text: e,
                            type: "submit",
                            disabled: !this.canSubmit(),
                        }),
                        (0, i.jsx)(m.zxk, {
                            variant: "secondary",
                            text: J.intl.string(J.t["13/7kZ"]),
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
        return (0, i.jsxs)(i.Fragment, {
            children: [
                this.renderHeader(),
                (0, i.jsxs)(m.hzk, {
                    className: Q.modalContent,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        e === X.d4z.GUILD_STORE ? this.renderStoreOptions() : null,
                        (0, i.jsx)(v.Z, {
                            guildId: t,
                            channelType: e,
                            className: Q.channelTypeDescription,
                        }),
                        e === X.d4z.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions(),
                    ],
                }),
                this.renderError(),
                this.renderFooter(),
            ],
        });
    }
    renderAddMemberSlideContent() {
        let { name: e, channelType: t } = this.state,
            { guildId: n, onClose: s } = this.props,
            r = this.getIconComponent(),
            l = t === X.d4z.GUILD_STAGE_VOICE;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(m.xBx, {
                    separator: !1,
                    children: [
                        (0, i.jsxs)(m.Kqy, {
                            gap: 4,
                            className: Q.header,
                            children: [
                                (0, i.jsx)(m.X6q, {
                                    variant: "heading-lg/semibold",
                                    className: Q.title,
                                    children: l ? J.intl.string(J.t["S/6zHB"]) : J.intl.string(J.t.dMJ3Y2),
                                }),
                                (0, i.jsxs)(m.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    className: Q.subtitle,
                                    children: [
                                        (0, i.jsx)(r, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: Q.subtitleIcon,
                                        }),
                                        e,
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(m.olH, {
                            onClick: s,
                            className: Q.closeButton,
                        }),
                    ],
                }),
                this.renderError(!0),
                (0, i.jsx)(ei, {
                    onChange: this.handlePermissionOverwriteChange,
                    guildId: n,
                    channelType: t,
                }),
                this.renderAddMemberFooter(),
            ],
        });
    }
    renderSlides() {
        let { slide: e } = this.state,
            { width: t } = this.props,
            n = { impression_group: h.ImpressionGroups.CHANNEL_ADD_FLOW };
        return (0, i.jsx)("div", {
            children: (0, i.jsxs)(m.MyZ, {
                activeSlide: e,
                width: t,
                children: [
                    (0, i.jsx)(m.Mi4, {
                        id: "CHANNEL_INFO",
                        impressionName: h.ImpressionNames.CHANNEL_ADD_INFO,
                        impressionProperties: n,
                        children: this.renderCreateChannelContent(),
                    }),
                    (0, i.jsx)(m.Mi4, {
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
        return (0, i.jsx)(m.Y0X, {
            transitionState: e,
            className: Q.modal,
            "aria-labelledby": this.headerId,
            size: m.CgR.DYNAMIC,
            parentComponent: "CreateChannel",
            children: (0, i.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: this.renderSlides(),
            }),
        });
    }
    constructor(e) {
        super(e),
            $(this, "headerId", (0, S.hQ)()),
            $(this, "_input", void 0),
            $(this, "setInputRef", (e) => {
                this._input = e;
            }),
            $(this, "handleNameChange", (e) => {
                var t, n;
                let { channelType: i } = this.state;
                M.xL.has(i) && (e = (0, H.Nj)(e));
                let s = null != (n = null == (t = this._input) ? void 0 : t.selectionStart) ? n : 0;
                this.setState({ name: e }, () => {
                    var e;
                    null == (e = this._input) || e.setSelectionRange(s, s);
                });
            }),
            $(this, "insertEmojiAtPosition", (e) => {
                var t, n, i, s;
                let r = null != (i = null == (t = this._input) ? void 0 : t.selectionStart) ? i : 0,
                    l = null != (s = null == (n = this._input) ? void 0 : n.selectionEnd) ? s : 0,
                    a = this.state.name,
                    o = a.substring(0, r) + e + a.substring(l);
                this.setState({ name: o }, () => {
                    var t, n;
                    let i = r + e.length;
                    null == (t = this._input) || t.focus(), null == (n = this._input) || n.setSelectionRange(i, i);
                });
            }),
            $(this, "handleTypeChange", (e) => {
                let { value: t } = e,
                    { name: n } = this.state;
                M.xL.has(t) && (n = (0, H.Nj)(n)),
                    t === X.d4z.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
                    this.setState({
                        channelType: t,
                        name: n,
                    });
            }),
            $(this, "handlePrivacyChange", (e) => {
                this.setState({ isPrivate: e });
            }),
            $(this, "handleApplicationChange", (e) => {
                this.setState({ applicationId: e });
            }),
            $(this, "handleSKUChange", (e) => {
                this.setState({ skuId: e });
            }),
            $(this, "handleShowBranchesToggle", (e) => {
                this.setState({
                    showBranches: e,
                    branchId: null,
                });
            }),
            $(this, "handleBranchChange", (e) => {
                this.setState({ branchId: e });
            }),
            $(this, "handleHasBranchesChange", (e) => {
                this.setState({ hasBranches: e });
            }),
            $(this, "handleSubmit", async (e) => {
                let t, n, i;
                e.preventDefault();
                let {
                        cloneChannel: s,
                        categoryId: r,
                        user: l,
                        memberRoleIds: a,
                        isAdmin: o,
                        onClose: d,
                        owner: h,
                    } = this.props,
                    {
                        name: u,
                        pendingPermissionOverwrites: p,
                        channelType: m,
                        skuId: C,
                        branchId: N,
                        isPrivate: x,
                    } = this.state,
                    I = this.getGuildId();
                if (null != I) {
                    if (null != s) (t = c().values(s.permissionOverwrites)), (n = s.bitrate), (i = s.userLimit);
                    else if (m === X.d4z.GUILD_ANNOUNCEMENT) t = (0, H.rt)(I);
                    else {
                        if (x) {
                            t = (0, H.oQ)(I, m, [], !0);
                            let e = (0, f.Tj)(p, m);
                            e.length > 0 && (t = t.concat(e));
                            let n = null != h && l.id === h.id;
                            t.some((e) => a.has(e.id)) || o || n || t.push((0, H.jZ)(l.id, m));
                        }
                        m === X.d4z.GUILD_STAGE_VOICE &&
                            ((t = []),
                            Object.values(p).forEach((e) => {
                                let { row: n } = e;
                                null != n.id &&
                                    "" !== n.id &&
                                    (n.rowType === Y.aC.ROLE
                                        ? t.push((0, G.A)(n.id, E.BN.ROLE))
                                        : n.rowType === Y.aC.MEMBER && t.push((0, G.A)(n.id, E.BN.MEMBER)));
                            }));
                    }
                    this.setState({
                        errors: {},
                        submitting: !0,
                    });
                    try {
                        let e = await g.Z.createChannel({
                            guildId: I,
                            type: m,
                            name: u,
                            permissionOverwrites: t,
                            bitrate: n,
                            userLimit: i,
                            parentId: m !== X.d4z.GUILD_CATEGORY ? r : null,
                            skuId: C,
                            branchId: N,
                        });
                        if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                        let s = e.body;
                        M.xL.has(m) && (0, L.XU)(s.guild_id, s.id), this.setState({ submitting: !1 }), d();
                    } catch (e) {
                        null != e.body && "object" == typeof e.body
                            ? this.setState({
                                  errors: e.body,
                                  submitting: !1,
                              })
                            : this.setState({
                                  errors: { message: J.intl.string(J.t.fEptJC) },
                                  submitting: !1,
                              });
                    }
                }
            });
        let { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        (this.state = {
            channelType: null != t ? t : X.d4z.GUILD_TEXT,
            name: null != n ? (0, b.F6)(n, k.default, B.Z) : null != i ? i : "",
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
let el = s.forwardRef(function (e, t) {
    let { channelType: n, guildId: s, cloneChannelId: r } = e,
        l = (0, p.cj)([w.Z, k.default, Z.Z, z.Z, R.ZP], () => {
            var e, t, i;
            let l = w.Z.getGuild(s),
                a = k.default.getCurrentUser();
            o()(null != a, "CreateChannel: user cannot be undefined");
            let d = null != l && null != l.ownerId ? k.default.getUser(l.ownerId) : null,
                c = Z.Z.can(X.Plq.ADMINISTRATOR, l),
                h = z.Z.getChannel(r);
            return {
                guild: l,
                canCreateStoreChannel: null != l && l.features.has(X.oNc.COMMERCE),
                canCreateAnnouncementChannel: null != l && l.features.has(X.oNc.NEWS),
                user: a,
                owner: d,
                memberRoles: null != (t = null == (e = R.ZP.getMember(s, a.id)) ? void 0 : e.roles) ? t : [],
                canViewChannels: Z.Z.can(X.Plq.VIEW_CHANNEL, l),
                canConnect: Z.Z.can(X.Plq.CONNECT, l),
                isAdmin: c,
                cloneChannel: h,
                channelType: null != (i = null == h ? void 0 : h.type) ? i : n,
                canManageRoles: Z.Z.can(X.Plq.MANAGE_ROLES, l),
                canManageChannels: Z.Z.can(X.Plq.MANAGE_CHANNELS, l),
            };
        }),
        a = (0, p.Wu)([j.Z], () =>
            j.Z.getGuildApplicationIds(s)
                .map((e) => j.Z.getApplication(e))
                .filter(V.lm),
        ),
        d = new Set(l.memberRoles),
        { canManageRoles: c, canManageChannels: h } = l,
        u = (0, P.m)(s) && c && h,
        m = (0, D.Ui)(null == l ? void 0 : l.guild);
    return (0, i.jsx)(
        er,
        et(ee({}, e, l), {
            memberRoleIds: d,
            applications: a,
            canCreateStageChannel: u,
            canCreateMediaChannel: m,
            ref: t,
            width: 496,
        }),
    );
});
