n.d(t, {
    default: () => ec,
    p: () => es,
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
    g = n(755721),
    x = n(481060),
    C = n(333848),
    N = n(749210),
    b = n(332063),
    E = n(620123),
    O = n(911969),
    f = n(367907),
    j = n(812206),
    I = n(933557),
    v = n(636816),
    y = n(605436),
    S = n(974339),
    T = n(215157),
    _ = n(313201),
    A = n(318766),
    D = n(907040),
    P = n(906411),
    L = n(688465),
    w = n(312146),
    G = n(703656),
    R = n(146085),
    U = n(60222),
    Z = n(388131),
    M = n(131704),
    z = n(592125),
    B = n(271383),
    H = n(430824),
    k = n(496675),
    V = n(699516),
    F = n(594174),
    X = n(934415),
    Y = n(823379),
    W = n(63063),
    q = n(981631),
    K = n(71080),
    J = n(185923),
    Q = n(710352),
    $ = n(231338),
    ee = n(388032),
    et = n(421835);
function en(e, t, n) {
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
function er(e) {
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
                en(e, t, n[t]);
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
function es(e) {
    let { isNew: t, isBeta: n } = e,
        i = null;
    return (
        !0 === t
            ? (i = (0, r.jsx)(x.IGR, {
                  text: ee.intl.string(ee.t.psHMa2),
                  className: et.newBadge,
                  color: u.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER,
              }))
            : !0 === n && (i = (0, r.jsx)(L.Z, { className: et.newBadge })),
        i
    );
}
function el(e) {
    let { onChange: t, guildId: n, channelType: s, description: l } = e,
        [a, o] = i.useState(""),
        [c, d] = i.useState({}),
        h = i.useRef(null),
        u = (0, p.e7)([H.Z], () => H.Z.getGuild(n)),
        g = s === q.d4z.GUILD_STAGE_VOICE,
        { roles: C, members: N, getRichTag: b } = (0, T.Q)(u, null, g ? R.yP : (0, M.CG)(s), a, g),
        E = S.Z.useSections({
            roles: C,
            members: N,
        });
    return (i.useEffect(() => {
        t(c);
    }, [c, t]),
    null == u)
        ? null
        : (0, r.jsx)(S.Z.Provider, {
              listRef: h,
              query: a,
              setQuery: o,
              pendingAdditions: c,
              setPendingAdditions: d,
              roles: C,
              members: N,
              getRichTag: b,
              children: (0, r.jsxs)(x.hzk, {
                  className: et.addMembersContainer,
                  children: [
                      null != l && "" !== l
                          ? (0, r.jsx)(x.Text, {
                                color: "header-secondary",
                                className: et.description,
                                variant: "text-sm/normal",
                                children: l,
                            })
                          : null,
                      (0, r.jsx)(S.Z.SearchBox, { placeholderText: ee.intl.string(ee.t.iezLLi) }),
                      (0, r.jsx)(x.Text, {
                          className: et.searchHelpText,
                          variant: "text-xs/normal",
                          children: ee.intl.string(ee.t["rwFx8/"]),
                      }),
                      (0, r.jsx)(m._2, {
                          ref: h,
                          className: et.membersList,
                          sectionHeight: S.Z.SECTION_HEIGHT,
                          renderSection: S.Z.renderSection,
                          rowHeight: S.Z.ROW_HEIGHT,
                          renderRow: S.Z.renderRow,
                          sections: E,
                          innerAriaOrientation: "vertical",
                          innerRole: "listbox",
                      }),
                  ],
              }),
          });
}
function ea(e) {
    let { onEmojiPicked: t, guildId: n } = e,
        s = i.useRef(null),
        l = i.useMemo(
            () => ({
                popoutLocation: {
                    page: q.ZY5.CREATE_CHANNEL_MODAL,
                    section: q.jXE.CHANNEL_NAME,
                    object: q.qAy.EMOJI_PICKER_BUTTON,
                },
            }),
            [],
        ),
        a = i.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, r.jsx)(D.Z, {
                    channel: null,
                    guildId: n,
                    pickerIntention: J.Hz.CHANNEL_NAME,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: r } = e;
                        null != n && n.type === P.B.UNICODE && t(n.surrogates), r && i();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: l,
                });
            },
            [l, n, t],
        );
    return (0, r.jsx)(x.yRy, {
        targetElementRef: s,
        renderPopout: a,
        animation: x.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, r.jsx)(
                A.Z,
                ei(er({}, e), {
                    ref: s,
                    active: n,
                    className: et.emojiButton,
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
class eo extends i.PureComponent {
    componentDidMount() {
        let { _input: e } = this;
        null != e && e.select();
        let { guildId: t, applications: n, canCreateStoreChannel: r } = this.props;
        r && null == n && N.Z.fetchApplications(t),
            f.ZP.trackWithMetadata(q.rMx.OPEN_MODAL, { type: "Create Channel" });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelType === q.d4z.GUILD_ANNOUNCEMENT &&
            this.setState({ channelType: q.d4z.GUILD_TEXT }),
            !t.isPrivate &&
                this.state.isPrivate &&
                f.ZP.trackWithMetadata(q.rMx.OPEN_MODAL, { type: "Create Private Channel" });
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
            n !== x.Dvm.EXITING &&
            "" !== l &&
            "" !== l.trim() &&
            (!r || !!(0, y.nT)(i, e, t)) &&
            (i !== q.d4z.GUILD_STORE || null != s)
        );
    }
    getIconComponent() {
        let { isPrivate: e, channelType: t } = this.state;
        switch (t) {
            case q.d4z.GUILD_TEXT:
                return e ? x.W4G : x.VL1;
            case q.d4z.GUILD_FORUM:
                return x.Mmi;
            case q.d4z.GUILD_MEDIA:
                return x.XBm;
            case q.d4z.GUILD_VOICE:
                return e ? x.gjC : x.gj8;
            case q.d4z.GUILD_STORE:
                return x.lO_;
            case q.d4z.GUILD_ANNOUNCEMENT:
                return x.MqZ;
            case q.d4z.GUILD_STAGE_VOICE:
                return x.ewx;
            default:
                return (0, M.zi)(t) ? x.VL1 : $.Vq;
        }
    }
    renderHeader() {
        var e;
        let t,
            { cloneChannel: n, categoryId: i, onClose: s } = this.props,
            { channelType: l } = this.state,
            a =
                null != n
                    ? ee.intl.string(ee.t.dEaPc3)
                    : l === q.d4z.GUILD_CATEGORY
                      ? ee.intl.string(ee.t["ISN+ND"])
                      : ee.intl.string(ee.t["fUYU+v"]);
        if (null != i) {
            let n = z.Z.getChannel(i);
            t = (0, r.jsx)(x.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                className: et.subtitle,
                children: ee.intl.format(ee.t.L1zJgY, {
                    categoryName: null != (e = null == n ? void 0 : n.name) ? e : "",
                }),
            });
        }
        return (0, r.jsxs)(x.xBx, {
            separator: !1,
            children: [
                (0, r.jsxs)("div", {
                    className: et.header,
                    children: [
                        (0, r.jsx)(x.X6q, {
                            id: this.headerId,
                            variant: "heading-lg/semibold",
                            className: et.title,
                            children: a,
                        }),
                        t,
                    ],
                }),
                (0, r.jsx)(x.olH, {
                    onClick: s,
                    className: et.closeButton,
                }),
            ],
        });
    }
    renderName() {
        let e,
            { cloneChannel: t, guildId: i } = this.props,
            { errors: s, channelType: l } = this.state;
        (null == s ? void 0 : s.name) != null &&
            (e = (0, r.jsx)(x.Text, {
                variant: "text-xs/normal",
                color: "text-danger",
                className: et.error,
                children: s.name,
            }));
        let a = l === q.d4z.GUILD_CATEGORY,
            o = a ? ee.intl.string(ee.t.OCAkGB) : ee.intl.string(ee.t.PVbHDg),
            c =
                null != t
                    ? (0, r.jsx)(x.R94, {
                          className: et.channelNameNote,
                          type: x.R94.Types.DESCRIPTION,
                          children: ee.intl.format(ee.t.s2ZzZW, { name: (0, I.F6)(t, F.default, V.Z, !0) }),
                      })
                    : l === q.d4z.GUILD_FORUM
                      ? (0, r.jsx)(x.R94, {
                            className: et.channelNameNote,
                            type: x.R94.Types.DESCRIPTION,
                            children: ee.intl.format(ee.t.tbVWyc, {
                                forumUpsellHook: (e, t) =>
                                    (0, r.jsx)(
                                        x.eee,
                                        {
                                            onClick: () =>
                                                (0, x.ZDy)(async () => {
                                                    let { default: e } = await n.e("18417").then(n.bind(n, 740696));
                                                    return (t) => (0, r.jsx)(e, ei(er({}, t), { guildId: i }));
                                                }),
                                            children: e,
                                        },
                                        t,
                                    ),
                            }),
                        })
                      : null,
            d = this.getIconComponent();
        return (0, r.jsx)(_.FG, {
            children: (t) =>
                (0, r.jsxs)(x.xJW, {
                    title: o,
                    tag: "label",
                    htmlFor: t,
                    titleClassName: et.sectionTitle,
                    className: et.name,
                    children: [
                        (0, r.jsx)(
                            x.oil,
                            {
                                id: t,
                                value: this.state.name,
                                onChange: this.handleNameChange,
                                inputRef: this.setInputRef,
                                maxLength: 100,
                                placeholder: (function (e) {
                                    switch (e) {
                                        case q.d4z.GUILD_CATEGORY:
                                            return ee.intl.string(ee.t.eTVbt7);
                                        case q.d4z.GUILD_FORUM:
                                            return ee.intl.string(ee.t["5z1Xam"]);
                                        default:
                                            return ee.intl.string(ee.t["bw/b8P"]);
                                    }
                                })(l),
                                leading: a ? void 0 : d,
                                trailing: {
                                    type: "emoji",
                                    button: (0, r.jsx)(ea, {
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
        if (null != e || a === q.d4z.GUILD_CATEGORY) return;
        let c = null != t && t.length > 0;
        return (0, r.jsx)(x.xJW, {
            className: et.type,
            title: ee.intl.string(ee.t["7ZcXGx"]),
            children: (0, r.jsx)(g.Gu, {
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
                                icon: t ? x.W4G : x.VL1,
                                label: ee.intl.string(ee.t.pnuRXF),
                                value: q.d4z.GUILD_TEXT,
                                description: ee.intl.string(ee.t.Hf5Lb2),
                            },
                        ];
                    return (
                        a.push({
                            icon: t ? x.gjC : x.gj8,
                            label: ee.intl.string(ee.t.Sx55Oj),
                            value: q.d4z.GUILD_VOICE,
                            description: ee.intl.string(ee.t.pqfkoK),
                        }),
                        a.push({
                            icon: t ? x.BUe : x.Mmi,
                            label: ee.intl.string(ee.t.eAVIDw),
                            value: q.d4z.GUILD_FORUM,
                            description: (0, r.jsxs)(x.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                className: et.radioLabelDescription,
                                children: [
                                    ee.intl.string(ee.t.iZ5pgo),
                                    (0, r.jsx)("br", {}),
                                    ee.intl.format(ee.t.fjSvsL, {
                                        onClick: () => {
                                            open(Q.V8);
                                        },
                                    }),
                                ],
                            }),
                        }),
                        l &&
                            a.push({
                                icon: t ? x.D7T : x.XBm,
                                label: ee.intl.string(ee.t["6x6fVl"]),
                                value: q.d4z.GUILD_MEDIA,
                                description: (0, r.jsxs)(x.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    className: et.radioLabelDescription,
                                    children: [
                                        ee.intl.string(ee.t.JyCrwc),
                                        (0, r.jsx)("br", {}),
                                        ee.intl.format(ee.t.fjSvsL, {
                                            onClick: () => {
                                                open(W.Z.getCreatorSupportArticleURL(q.BhN.MEDIA_CHANNEL));
                                            },
                                        }),
                                    ],
                                }),
                                isBeta: !0,
                            }),
                        i &&
                            a.push({
                                icon: x.MqZ,
                                iconSize: 24,
                                label: ee.intl.string(ee.t.qr9dEB),
                                value: q.d4z.GUILD_ANNOUNCEMENT,
                                description: ee.intl.string(ee.t.gBkfzs),
                            }),
                        n &&
                            a.push({
                                icon: x.lO_,
                                iconSize: 24,
                                label: ee.intl.string(ee.t.SxjkXV),
                                value: q.d4z.GUILD_STORE,
                                description: ee.intl.string(ee.t.nmCPMD),
                            }),
                        s &&
                            a.push({
                                icon: x.ewx,
                                iconSize: 24,
                                label: ee.intl.string(ee.t.pNWst7),
                                value: q.d4z.GUILD_STAGE_VOICE,
                                description: ee.intl.string(ee.t.VPAwgo),
                            }),
                        a.map((e) => {
                            let { icon: t, iconSize: n, label: i, value: s, description: l, isNew: a, isBeta: o } = e;
                            return {
                                name: (0, r.jsxs)("div", {
                                    className: et.radioItemName,
                                    children: [
                                        (0, r.jsx)(
                                            t,
                                            ei(
                                                er(
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
                                                    className: et.icon,
                                                    colorClass: et.foreground,
                                                },
                                            ),
                                        ),
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsxs)(x.Text, {
                                                    variant: "text-md/medium",
                                                    className: et.radioLabelName,
                                                    children: [
                                                        i,
                                                        (0, r.jsx)(es, {
                                                            isNew: a,
                                                            isBeta: o,
                                                        }),
                                                    ],
                                                }),
                                                "string" == typeof l
                                                    ? (0, r.jsx)(x.Text, {
                                                          variant: "text-sm/normal",
                                                          color: "header-secondary",
                                                          className: et.radioLabelDescription,
                                                          children: l,
                                                      })
                                                    : l,
                                            ],
                                        }),
                                    ],
                                }),
                                value: s,
                                radioBarClassName: et.radioBar,
                                radioItemIconClassName: et.radioBarIcon,
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
                itemInfoClassName: et.radioBarLabel,
            }),
        });
    }
    renderStoreOptions() {
        let { applications: e } = this.props,
            { applicationId: t, skuId: n, branchId: s, showBranches: l, hasBranches: a } = this.state;
        if (null == e || 0 === e.length) throw Error("Unexpected empty applications");
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(x.vwX, {
                    tag: "h5",
                    children: ee.intl.string(ee.t.vPIW2N),
                }),
                (0, r.jsx)(x.q4e, {
                    options: e.map((e) => ({
                        label: e.name,
                        value: e.id,
                    })),
                    placeholder: ee.intl.string(ee.t["3XfCPT"]),
                    value: t,
                    onChange: this.handleApplicationChange,
                    className: et.storeChannelOptionSelector,
                }),
                null != t
                    ? (0, r.jsxs)(i.Fragment, {
                          children: [
                              (0, r.jsx)(x.vwX, {
                                  tag: "h5",
                                  children: ee.intl.string(ee.t.XNIWFh),
                              }),
                              (0, r.jsx)(
                                  E.Z,
                                  {
                                      applicationId: t,
                                      onChange: this.handleSKUChange,
                                      selectedSkuId: n,
                                      className: et.storeChannelOptionSelector,
                                  },
                                  t,
                              ),
                          ],
                      })
                    : null,
                null != t && a
                    ? (0, r.jsxs)(x.j7V, {
                          hideBorder: !0,
                          onChange: this.handleShowBranchesToggle,
                          value: l,
                          note: ee.intl.format(ee.t.UVXL1d, {
                              devPortalUrl: q.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT,
                          }),
                          children: [
                              (0, r.jsx)(x._m8, {
                                  size: "md",
                                  color: "currentColor",
                                  className: et.switchIcon,
                              }),
                              ee.intl.string(ee.t["3e9mHx"]),
                          ],
                      })
                    : null,
                null != t
                    ? (0, r.jsxs)(i.Fragment, {
                          children: [
                              l
                                  ? (0, r.jsx)(x.vwX, {
                                        tag: "h5",
                                        children: ee.intl.string(ee.t.o7DqFx),
                                    })
                                  : null,
                              (0, r.jsx)(
                                  b.Z,
                                  {
                                      applicationId: t,
                                      onChange: this.handleBranchChange,
                                      selectedBranchId: s,
                                      hide: !l,
                                      onHasBranchesChange: this.handleHasBranchesChange,
                                      className: et.storeChannelOptionSelector,
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
        if (null != e || t === q.d4z.GUILD_ANNOUNCEMENT) return null;
        let i = t === q.d4z.GUILD_CATEGORY ? ee.intl.string(ee.t.lEPAZ2) : ee.intl.string(ee.t.aUI70t),
            s = t === q.d4z.GUILD_CATEGORY ? ee.intl.string(ee.t["RQUk6+"]) : ee.intl.string(ee.t.YguuKi);
        return (0, r.jsx)(
            x.xJW,
            {
                children: (0, r.jsxs)(x.j7V, {
                    hideBorder: !0,
                    onChange: this.handlePrivacyChange,
                    value: n,
                    note: s,
                    children: [
                        (0, r.jsx)(x.mBM, {
                            size: "md",
                            color: "currentColor",
                            className: et.switchIcon,
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
        } else i && !(0, y.nT)(n, o, a) && (t = (0, y.$7)(n));
        if (null != t)
            return (0, r.jsx)("div", {
                className: l()(et.createError, { [et.addMemberError]: e }),
                children: (0, r.jsx)(x.Wn, {
                    messageType: x.QYI.ERROR,
                    children: t,
                }),
            });
    }
    renderFooter() {
        let e,
            { channelType: t, onClose: n } = this.props,
            { channelType: i } = this.state,
            { isPrivate: s } = this.state;
        e = t === q.d4z.GUILD_CATEGORY ? ee.intl.string(ee.t["ISN+ND"]) : ee.intl.string(ee.t["fUYU+v"]);
        let l = s || i === q.d4z.GUILD_STAGE_VOICE;
        return (0, r.jsx)(x.mzw, {
            className: et.modalFooter,
            children: (0, r.jsxs)(x.hE2, {
                direction: "horizontal-reverse",
                children: [
                    l
                        ? (0, r.jsx)(x.zxk, {
                              variant: "primary",
                              text: ee.intl.string(ee.t.PDTjLC),
                              type: "button",
                              onClick: () => {
                                  this.setState({
                                      slide: "ADD_MEMBERS",
                                      errors: {},
                                  });
                              },
                              disabled: !this.canSubmit(),
                          })
                        : (0, r.jsx)(x.zxk, {
                              variant: "primary",
                              text: e,
                              type: "submit",
                              disabled: !this.canSubmit(),
                          }),
                    (0, r.jsx)(x.zxk, {
                        variant: "secondary",
                        text: ee.intl.string(ee.t["ETE/oK"]),
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
                    ? ee.intl.string(ee.t["5WxrcX"])
                    : t === q.d4z.GUILD_CATEGORY
                      ? ee.intl.string(ee.t["ISN+ND"])
                      : ee.intl.string(ee.t["fUYU+v"])),
            (0, r.jsx)(x.mzw, {
                children: (0, r.jsxs)(x.hE2, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, r.jsx)(x.zxk, {
                            variant: "primary",
                            text: e,
                            type: "submit",
                            disabled: !this.canSubmit(),
                        }),
                        (0, r.jsx)(x.zxk, {
                            variant: "secondary",
                            text: ee.intl.string(ee.t["13/7kZ"]),
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
                (0, r.jsxs)(x.hzk, {
                    className: et.modalContent,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        e === q.d4z.GUILD_STORE ? this.renderStoreOptions() : null,
                        (0, r.jsx)(v.Z, {
                            guildId: t,
                            channelType: e,
                            className: et.channelTypeDescription,
                        }),
                        e === q.d4z.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions(),
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
            l = t === q.d4z.GUILD_STAGE_VOICE;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(x.xBx, {
                    separator: !1,
                    children: [
                        (0, r.jsxs)(x.Kqy, {
                            gap: 4,
                            className: et.header,
                            children: [
                                (0, r.jsx)(x.X6q, {
                                    variant: "heading-lg/semibold",
                                    className: et.title,
                                    children: l ? ee.intl.string(ee.t["S/6zHB"]) : ee.intl.string(ee.t.dMJ3Y2),
                                }),
                                (0, r.jsxs)(x.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    className: et.subtitle,
                                    children: [
                                        (0, r.jsx)(s, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: et.subtitleIcon,
                                        }),
                                        e,
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(x.olH, {
                            onClick: i,
                            className: et.closeButton,
                        }),
                    ],
                }),
                this.renderError(!0),
                (0, r.jsx)(el, {
                    onChange: this.handlePermissionOverwriteChange,
                    guildId: n,
                    channelType: t,
                    description: l ? ee.intl.string(ee.t.f7VbhI) : void 0,
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
            children: (0, r.jsxs)(x.MyZ, {
                activeSlide: e,
                width: t,
                children: [
                    (0, r.jsx)(x.Mi4, {
                        id: "CHANNEL_INFO",
                        impressionName: h.ImpressionNames.CHANNEL_ADD_INFO,
                        impressionProperties: n,
                        children: this.renderCreateChannelContent(),
                    }),
                    (0, r.jsx)(x.Mi4, {
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
        return (0, r.jsx)(x.Y0X, {
            transitionState: e,
            className: et.modal,
            "aria-labelledby": this.headerId,
            size: x.CgR.DYNAMIC,
            parentComponent: "CreateChannel",
            children: (0, r.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: this.renderSlides(),
            }),
        });
    }
    constructor(e) {
        super(e),
            en(this, "headerId", (0, _.hQ)()),
            en(this, "_input", void 0),
            en(this, "setInputRef", (e) => {
                this._input = e;
            }),
            en(this, "handleNameChange", (e) => {
                var t, n;
                let { channelType: r } = this.state;
                M.xL.has(r) && (e = (0, X.Nj)(e));
                let i = null != (n = null == (t = this._input) ? void 0 : t.selectionStart) ? n : 0;
                this.setState({ name: e }, () => {
                    var e;
                    null == (e = this._input) || e.setSelectionRange(i, i);
                });
            }),
            en(this, "insertEmojiAtPosition", (e) => {
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
            en(this, "handleTypeChange", (e) => {
                let { value: t } = e,
                    { name: n } = this.state;
                M.xL.has(t) && (n = (0, X.Nj)(n)),
                    t === q.d4z.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
                    this.setState({
                        channelType: t,
                        name: n,
                    });
            }),
            en(this, "handlePrivacyChange", (e) => {
                this.setState({ isPrivate: e });
            }),
            en(this, "handleApplicationChange", (e) => {
                this.setState({ applicationId: e });
            }),
            en(this, "handleSKUChange", (e) => {
                this.setState({ skuId: e });
            }),
            en(this, "handleShowBranchesToggle", (e) => {
                this.setState({
                    showBranches: e,
                    branchId: null,
                });
            }),
            en(this, "handleBranchChange", (e) => {
                this.setState({ branchId: e });
            }),
            en(this, "handleHasBranchesChange", (e) => {
                this.setState({ hasBranches: e });
            }),
            en(this, "handleSubmit", async (e) => {
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
                        branchId: x,
                        isPrivate: N,
                    } = this.state,
                    b = this.getGuildId();
                if (null != b) {
                    if (null != i) (t = d().values(i.permissionOverwrites)), (n = i.bitrate), (r = i.userLimit);
                    else if (m === q.d4z.GUILD_ANNOUNCEMENT) t = (0, X.rt)(b);
                    else {
                        if (N) {
                            t = (0, X.oQ)(b, m, [], !0);
                            let e = (0, y.Tj)(p, m);
                            e.length > 0 && (t = t.concat(e));
                            let n = null != h && l.id === h.id;
                            t.some((e) => a.has(e.id)) || o || n || t.push((0, X.jZ)(l.id, m));
                        }
                        m === q.d4z.GUILD_STAGE_VOICE &&
                            ((t = []),
                            Object.values(p).forEach((e) => {
                                let { row: n } = e;
                                null != n.id &&
                                    "" !== n.id &&
                                    (n.rowType === K.aC.ROLE
                                        ? t.push((0, Z.A)(n.id, O.BN.ROLE))
                                        : n.rowType === K.aC.MEMBER && t.push((0, Z.A)(n.id, O.BN.MEMBER)));
                            }));
                    }
                    this.setState({
                        errors: {},
                        submitting: !0,
                    });
                    try {
                        let e = await C.Z.createChannel({
                            guildId: b,
                            type: m,
                            name: u,
                            permissionOverwrites: t,
                            bitrate: n,
                            userLimit: r,
                            parentId: m !== q.d4z.GUILD_CATEGORY ? s : null,
                            skuId: g,
                            branchId: x,
                        });
                        if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                        let i = e.body;
                        M.xL.has(m) && (0, G.XU)(i.guild_id, i.id), this.setState({ submitting: !1 }), c();
                    } catch (e) {
                        null != e.body && "object" == typeof e.body
                            ? this.setState({
                                  errors: e.body,
                                  submitting: !1,
                              })
                            : this.setState({
                                  errors: { message: ee.intl.string(ee.t.fEptJC) },
                                  submitting: !1,
                              });
                    }
                }
            });
        let { channelType: t, cloneChannel: n, prefillChannelName: r } = e;
        (this.state = {
            channelType: null != t ? t : q.d4z.GUILD_TEXT,
            name: null != n ? (0, I.F6)(n, F.default, V.Z) : null != r ? r : "",
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
let ec = i.forwardRef(function (e, t) {
    let { channelType: n, guildId: i, cloneChannelId: s } = e,
        l = (0, p.cj)([H.Z, F.default, k.Z, z.Z, B.ZP], () => {
            var e, t, r;
            let l = H.Z.getGuild(i),
                a = F.default.getCurrentUser();
            o()(null != a, "CreateChannel: user cannot be undefined");
            let c = null != l && null != l.ownerId ? F.default.getUser(l.ownerId) : null,
                d = k.Z.can(q.Plq.ADMINISTRATOR, l),
                h = z.Z.getChannel(s);
            return {
                guild: l,
                canCreateStoreChannel: null != l && l.features.has(q.oNc.COMMERCE),
                canCreateAnnouncementChannel: null != l && l.features.has(q.oNc.NEWS),
                user: a,
                owner: c,
                memberRoles: null != (t = null == (e = B.ZP.getMember(i, a.id)) ? void 0 : e.roles) ? t : [],
                canViewChannels: k.Z.can(q.Plq.VIEW_CHANNEL, l),
                canConnect: k.Z.can(q.Plq.CONNECT, l),
                isAdmin: d,
                cloneChannel: h,
                channelType: null != (r = null == h ? void 0 : h.type) ? r : n,
                canManageRoles: k.Z.can(q.Plq.MANAGE_ROLES, l),
                canManageChannels: k.Z.can(q.Plq.MANAGE_CHANNELS, l),
            };
        }),
        a = (0, p.Wu)([j.Z], () =>
            j.Z.getGuildApplicationIds(i)
                .map((e) => j.Z.getApplication(e))
                .filter(Y.lm),
        ),
        c = new Set(l.memberRoles),
        { canManageRoles: d, canManageChannels: h } = l,
        u = (0, U.m)(i) && d && h,
        m = (0, w.Ui)(null == l ? void 0 : l.guild);
    return (0, r.jsx)(
        eo,
        ei(er({}, e, l), {
            memberRoleIds: c,
            applications: a,
            canCreateStageChannel: u,
            canCreateMediaChannel: m,
            ref: t,
            width: 496,
        }),
    );
});
