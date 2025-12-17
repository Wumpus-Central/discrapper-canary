n.d(t, {
    default: () => es,
    p: () => en,
}),
    n(539854),
    n(388685),
    n(953529),
    n(781311),
    n(415506);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    u = n(392711),
    c = n.n(u),
    d = n(793030),
    h = n(442837),
    p = n(692547),
    g = n(199849),
    m = n(481060),
    C = n(333848),
    f = n(749210),
    b = n(332063),
    O = n(620123),
    E = n(911969),
    I = n(367907),
    v = n(812206),
    y = n(605436),
    N = n(974339),
    S = n(215157),
    x = n(313201),
    j = n(318766),
    P = n(907040),
    T = n(906411),
    A = n(688465),
    _ = n(312146),
    G = n(703656),
    U = n(146085),
    w = n(60222),
    L = n(388131),
    D = n(131704),
    Z = n(592125),
    R = n(271383),
    M = n(430824),
    z = n(496675),
    B = n(699516),
    H = n(594174),
    k = n(934415),
    V = n(823379),
    F = n(933557),
    Y = n(636816),
    X = n(981631),
    q = n(71080),
    W = n(185923),
    Q = n(231338),
    K = n(388032),
    J = n(238365);
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
        r = null;
    return (
        !0 === t
            ? (r = (0, i.jsx)(m.IGR, {
                  text: K.intl.string(K.t.psHMa6),
                  className: J.newBadge,
                  color: p.Z.colors.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER.css,
              }))
            : !0 === n && (r = (0, i.jsx)(A.Z, { className: J.newBadge })),
        r
    );
}
function ei(e) {
    let t,
        {
            transitionState: n,
            onClose: l,
            channelType: s,
            iconComponent: a,
            error: o,
            name: u,
            guildId: c,
            onBack: p,
            canSubmit: g,
            onMembersChange: C,
            pendingPermissionOverwrites: f,
        } = e,
        [b, O] = r.useState(""),
        [E, I] = r.useState({}),
        v = r.useRef(null),
        y = (0, h.e7)([M.Z], () => M.Z.getGuild(c)),
        x = s === X.d4z.GUILD_STAGE_VOICE,
        { roles: j, members: P, getRichTag: T } = (0, S.Q)(y, null, x ? U.yP : (0, D.CG)(s), b, x),
        A = N.Z.useSections({
            roles: j,
            members: P,
        });
    return (r.useEffect(() => {
        C(E);
    }, [E, C]),
    null == y)
        ? null
        : ((t =
              0 === Object.keys(f).length
                  ? K.intl.string(K.t["5Wxrcd"])
                  : s === X.d4z.GUILD_CATEGORY
                    ? K.intl.string(K.t["ISN+NM"])
                    : K.intl.string(K.t["fUYU+j"])),
          (0, i.jsx)(N.Z.Provider, {
              listRef: v,
              query: b,
              setQuery: O,
              pendingAdditions: E,
              setPendingAdditions: I,
              roles: j,
              members: P,
              getRichTag: T,
              children: (0, i.jsx)(d.Modal, {
                  transitionState: n,
                  onClose: l,
                  title: x ? K.intl.string(K.t["S/6zHM"]) : K.intl.string(K.t.dMJ3Y6),
                  subtitle: {
                      text: u,
                      leadingIcon: a,
                  },
                  input: (0, i.jsxs)(i.Fragment, {
                      children: [
                          x
                              ? (0, i.jsx)(m.Text, {
                                    color: "text-default",
                                    className: J.description,
                                    variant: "text-sm/normal",
                                    children: K.intl.string(K.t.f7VbhF),
                                })
                              : void 0,
                          (0, i.jsx)(N.Z.SearchBox, { placeholderText: K.intl.string(K.t.iezLLn) }),
                          (0, i.jsx)(m.Text, {
                              className: J.searchHelpText,
                              variant: "text-xs/normal",
                              children: K.intl.string(K.t.rwFx85),
                          }),
                      ],
                  }),
                  preview: o,
                  listProps: {
                      sectionHeight: N.Z.SECTION_HEIGHT,
                      renderSection: N.Z.renderSection,
                      rowHeight: N.Z.ROW_HEIGHT,
                      renderRow: N.Z.renderRow,
                      sections: A,
                      innerAriaOrientation: "vertical",
                      innerRole: "listbox",
                  },
                  actions: [
                      {
                          variant: "secondary",
                          text: K.intl.string(K.t["13/7kX"]),
                          onClick: p,
                      },
                      {
                          variant: "primary",
                          text: t,
                          type: "submit",
                          disabled: !g,
                      },
                  ],
              }),
          }));
}
function er(e) {
    let { onEmojiPicked: t, guildId: n } = e,
        l = r.useRef(null),
        s = r.useMemo(
            () => ({
                popoutLocation: {
                    page: X.ZY5.CREATE_CHANNEL_MODAL,
                    section: X.jXE.CHANNEL_NAME,
                    object: X.qAy.EMOJI_PICKER_BUTTON,
                },
            }),
            [],
        ),
        a = r.useCallback(
            (e) => {
                let { closePopout: r } = e;
                return (0, i.jsx)(P.Z, {
                    channel: null,
                    guildId: n,
                    pickerIntention: W.Hz.CHANNEL_NAME,
                    closePopout: r,
                    onNavigateAway: r,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        null != n && n.type === T.B.UNICODE && t(n.surrogates), i && r();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: s,
                });
            },
            [s, n, t],
        );
    return (0, i.jsx)(m.yRy, {
        targetElementRef: l,
        renderPopout: a,
        animation: m.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(
                j.Z,
                et(ee({}, e), {
                    ref: l,
                    active: n,
                    className: J.emojiButton,
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
class el extends r.PureComponent {
    componentDidMount() {
        let { _input: e } = this;
        null != e && e.select();
        let { guildId: t, applications: n, canCreateStoreChannel: i } = this.props;
        i && null == n && f.Z.fetchApplications(t),
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
            { isPrivate: i, channelType: r, skuId: l, name: s, submitting: a } = this.state;
        return (
            !a &&
            n !== m.Dvm.EXITING &&
            "" !== s &&
            "" !== s.trim() &&
            (!i || !!(0, y.nT)(r, e, t)) &&
            (r !== X.d4z.GUILD_STORE || null != l)
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
                return (0, D.zi)(t) ? m.VL1 : Q.Vq;
        }
    }
    getHelperText() {
        let { cloneChannel: e, channelType: t, guildId: r } = this.props;
        return null != e
            ? K.intl.format(K.t.s2ZzZZ, { name: (0, F.F6)(e, H.default, B.Z, !0) })
            : t === X.d4z.GUILD_FORUM
              ? K.intl.format(K.t.tbVWyR, {
                    forumUpsellHook: (e, t) =>
                        (0, i.jsx)(
                            m.Anchor,
                            {
                                onClick: () =>
                                    (0, m.ZDy)(async () => {
                                        let { default: e } = await n.e("18417").then(n.bind(n, 740696));
                                        return (t) => (0, i.jsx)(e, et(ee({}, t), { guildId: r }));
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
            { errors: n, channelType: r } = this.state;
        (null == n ? void 0 : n.name) != null && (e = Array.isArray(n.name) ? n.name.join(", ") : n.name);
        let l = r === X.d4z.GUILD_CATEGORY,
            s = l ? K.intl.string(K.t.OCAkGP) : K.intl.string(K.t.PVbHDl),
            a = this.getIconComponent();
        return (0, i.jsx)(m.oil, {
            label: s,
            helperText: this.getHelperText(),
            error: e,
            value: this.state.name,
            onChange: this.handleNameChange,
            inputRef: this.setInputRef,
            maxLength: 100,
            placeholder: (function (e) {
                switch (e) {
                    case X.d4z.GUILD_CATEGORY:
                        return K.intl.string(K.t.eTVbtx);
                    case X.d4z.GUILD_FORUM:
                        return K.intl.string(K.t["5z1Xat"]);
                    default:
                        return K.intl.string(K.t["bw/b8E"]);
                }
            })(r),
            leading: l ? void 0 : a,
            trailing: {
                type: "emoji",
                button: (0, i.jsx)(er, {
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
                canCreateAnnouncementChannel: r,
                canCreateStageChannel: l,
                canCreateMediaChannel: s,
            } = this.props,
            { channelType: a, isPrivate: o } = this.state;
        if (null != e || a === X.d4z.GUILD_CATEGORY) return;
        let u = null != t && t.length > 0;
        return (0, i.jsx)(d.Eep, {
            label: K.intl.string(K.t["7ZcXG2"]),
            options: (function (e) {
                let {
                        isPrivate: t,
                        showStoreChannelOption: n,
                        showAnnouncementChannelOption: i,
                        canCreateStageChannel: r,
                        canCreateMediaChannel: l,
                    } = e,
                    s = [
                        {
                            leadingIcon: t ? m.W4G : m.VL1,
                            name: K.intl.string(K.t.pnuRXC),
                            value: X.d4z.GUILD_TEXT,
                            desc: K.intl.string(K.t["Hf5Lb+"]),
                        },
                        {
                            leadingIcon: t ? m.gjC : m.gj8,
                            name: K.intl.string(K.t.Sx55Oh),
                            value: X.d4z.GUILD_VOICE,
                            desc: K.intl.string(K.t.pqfkoF),
                        },
                        {
                            leadingIcon: t ? m.BUe : m.Mmi,
                            name: K.intl.string(K.t.eAVID5),
                            value: X.d4z.GUILD_FORUM,
                            desc: K.intl.string(K.t.iZ5pgg),
                        },
                    ];
                return (
                    l &&
                        s.push({
                            leadingIcon: t ? m.D7T : m.XBm,
                            name: K.intl.string(K.t["6x6fVg"]),
                            value: X.d4z.GUILD_MEDIA,
                            desc: K.intl.string(K.t.JyCrwS),
                        }),
                    i &&
                        s.push({
                            leadingIcon: m.MqZ,
                            name: K.intl.string(K.t.qr9dEP),
                            value: X.d4z.GUILD_ANNOUNCEMENT,
                            desc: K.intl.string(K.t.gBkfzu),
                        }),
                    n &&
                        s.push({
                            leadingIcon: m.lO_,
                            name: K.intl.string(K.t.SxjkXf),
                            value: X.d4z.GUILD_STORE,
                            desc: K.intl.string(K.t.nmCPMC),
                        }),
                    r &&
                        s.push({
                            leadingIcon: m.ewx,
                            name: K.intl.string(K.t.pNWst0),
                            value: X.d4z.GUILD_STAGE_VOICE,
                            desc: K.intl.string(K.t.VPAwgo),
                        }),
                    s
                );
            })({
                isPrivate: o,
                showStoreChannelOption: n && u,
                showAnnouncementChannelOption: r,
                canCreateStageChannel: l,
                canCreateMediaChannel: s,
            }),
            value: a,
            onChange: this.handleTypeChange,
        });
    }
    renderStoreOptions() {
        let { applications: e } = this.props,
            { applicationId: t, skuId: n, branchId: r, showBranches: l, hasBranches: s } = this.state;
        if (null == e || 0 === e.length) throw Error("Unexpected empty applications");
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(g.y6, {
                    label: K.intl.string(K.t.vPIW2L),
                    options: e.map((e) => ({
                        label: e.name,
                        value: e.id,
                    })),
                    placeholder: K.intl.string(K.t["3XfCPX"]),
                    value: t,
                    onChange: this.handleApplicationChange,
                    className: J.storeChannelOptionSelector,
                }),
                null != t
                    ? (0, i.jsx)(
                          O.Z,
                          {
                              label: K.intl.string(K.t.XNIWFj),
                              applicationId: t,
                              onChange: this.handleSKUChange,
                              selectedSkuId: n,
                              className: J.storeChannelOptionSelector,
                          },
                          t,
                      )
                    : null,
                null != t && s
                    ? (0, i.jsx)(m.rsf, {
                          label: K.intl.string(K.t["3e9mH5"]),
                          description: K.intl.format(K.t.UVXL1R, {
                              devPortalUrl: X.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT,
                          }),
                          icon: m._m8,
                          onChange: this.handleShowBranchesToggle,
                          checked: l,
                      })
                    : null,
                null != t
                    ? (0, i.jsx)(
                          b.Z,
                          {
                              label: l ? K.intl.string(K.t.o7DqF3) : void 0,
                              applicationId: t,
                              onChange: this.handleBranchChange,
                              selectedBranchId: r,
                              hide: !l,
                              includeMaster: l,
                              onHasBranchesChange: this.handleHasBranchesChange,
                              className: J.storeChannelOptionSelector,
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
        let r = t === X.d4z.GUILD_CATEGORY ? K.intl.string(K.t.lEPAZ5) : K.intl.string(K.t.aUI70g),
            l = t === X.d4z.GUILD_CATEGORY ? K.intl.string(K.t.RQUk61) : K.intl.string(K.t.YguuKq);
        return (0, i.jsx)(m.rsf, {
            label: r,
            description: l,
            icon: m.mBM,
            onChange: this.handlePrivacyChange,
            checked: n,
        });
    }
    renderError(e) {
        let t,
            { channelType: n, isPrivate: r, errors: l } = this.state,
            { canConnect: a, canViewChannels: o } = this.props;
        if (Object.values(l).length > 0) {
            if (null != l.message && "" !== l.message) t = l.message;
            else if (e || null == l.name) {
                let e = Object.values(l)[0];
                e.length > 0 && (t = e);
            }
        } else r && !(0, y.nT)(n, o, a) && (t = (0, y.$7)(n));
        if (null != t)
            return (0, i.jsx)("div", {
                className: s()(J.createError, { [J.addMemberError]: e }),
                children: (0, i.jsx)(m.Wn, {
                    messageType: m.QYI.ERROR,
                    children: t,
                }),
            });
    }
    handlePermissionOverwriteChange(e) {
        this.setState({ pendingPermissionOverwrites: e });
    }
    renderCreateChannelModal() {
        var e;
        let t,
            n,
            { channelType: r, isPrivate: l } = this.state,
            { guildId: s, transitionState: a, cloneChannel: o, categoryId: u, onClose: c, channelType: h } = this.props,
            p =
                null != o
                    ? K.intl.string(K.t.dEaPc4)
                    : r === X.d4z.GUILD_CATEGORY
                      ? K.intl.string(K.t["ISN+NM"])
                      : K.intl.string(K.t["fUYU+j"]);
        if (null != u) {
            let n = Z.Z.getChannel(u);
            t = K.intl.format(K.t.L1zJgb, { categoryName: null != (e = null == n ? void 0 : n.name) ? e : "" });
        }
        n = h === X.d4z.GUILD_CATEGORY ? K.intl.string(K.t["ISN+NM"]) : K.intl.string(K.t["fUYU+j"]);
        let g = l || r === X.d4z.GUILD_STAGE_VOICE;
        return (0, i.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, i.jsx)(d.Modal, {
                transitionState: a,
                onClose: c,
                title: p,
                subtitle: t,
                preview: this.renderError(),
                actions: [
                    {
                        variant: "secondary",
                        text: K.intl.string(K.t["ETE/oC"]),
                        onClick: c,
                    },
                    g
                        ? {
                              variant: "primary",
                              text: K.intl.string(K.t.PDTjLN),
                              type: "button",
                              onClick: () => {
                                  this.setState({
                                      slide: "ADD_MEMBERS",
                                      errors: {},
                                  });
                              },
                          }
                        : {
                              variant: "primary",
                              type: "submit",
                              disabled: !this.canSubmit(),
                              text: n,
                          },
                ],
                children: (0, i.jsxs)("div", {
                    className: J.createChannelContent,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        h === X.d4z.GUILD_STORE ? this.renderStoreOptions() : null,
                        (0, i.jsx)(Y.Z, {
                            guildId: s,
                            channelType: r,
                            className: J.channelTypeDescription,
                        }),
                        r === X.d4z.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions(),
                    ],
                }),
            }),
        });
    }
    renderAddMemberSlideContent() {
        let { name: e, channelType: t, pendingPermissionOverwrites: n } = this.state,
            { guildId: r, onClose: l, transitionState: s } = this.props,
            a = () => {
                this.setState({ slide: "CHANNEL_INFO" });
            },
            o = this.canSubmit();
        return (0, i.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, i.jsx)(ei, {
                onClose: l,
                transitionState: s,
                channelType: t,
                iconComponent: this.getIconComponent(),
                error: this.renderError(!0),
                name: e,
                guildId: r,
                onBack: a,
                canSubmit: o,
                onMembersChange: this.handlePermissionOverwriteChange,
                pendingPermissionOverwrites: n,
            }),
        });
    }
    render() {
        let { slide: e } = this.state;
        return "CHANNEL_INFO" === e ? this.renderCreateChannelModal() : this.renderAddMemberSlideContent();
    }
    constructor(e) {
        super(e),
            $(this, "headerId", (0, x.hQ)()),
            $(this, "_input", void 0),
            $(this, "setInputRef", (e) => {
                this._input = e;
            }),
            $(this, "handleNameChange", (e) => {
                var t, n;
                let { channelType: i } = this.state;
                D.xL.has(i) && (e = (0, k.Nj)(e));
                let r = null != (n = null == (t = this._input) ? void 0 : t.selectionStart) ? n : 0;
                this.setState({ name: e }, () => {
                    var e;
                    null == (e = this._input) || e.setSelectionRange(r, r);
                });
            }),
            $(this, "insertEmojiAtPosition", (e) => {
                var t, n, i, r;
                let l = null != (i = null == (t = this._input) ? void 0 : t.selectionStart) ? i : 0,
                    s = null != (r = null == (n = this._input) ? void 0 : n.selectionEnd) ? r : 0,
                    a = this.state.name,
                    o = a.substring(0, l) + e + a.substring(s);
                this.setState({ name: o }, () => {
                    var t, n;
                    let i = l + e.length;
                    null == (t = this._input) || t.focus(), null == (n = this._input) || n.setSelectionRange(i, i);
                });
            }),
            $(this, "handleTypeChange", (e) => {
                let { name: t } = this.state;
                D.xL.has(e) && (t = (0, k.Nj)(t)),
                    e === X.d4z.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
                    this.setState({
                        channelType: e,
                        name: t,
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
                        cloneChannel: r,
                        categoryId: l,
                        user: s,
                        memberRoleIds: a,
                        isAdmin: o,
                        onClose: u,
                        owner: d,
                    } = this.props,
                    {
                        name: h,
                        pendingPermissionOverwrites: p,
                        channelType: g,
                        skuId: m,
                        branchId: f,
                        isPrivate: b,
                    } = this.state,
                    O = this.getGuildId();
                if (null != O) {
                    if (null != r) (t = c().values(r.permissionOverwrites)), (n = r.bitrate), (i = r.userLimit);
                    else if (g === X.d4z.GUILD_ANNOUNCEMENT) t = (0, k.rt)(O);
                    else {
                        if (b) {
                            t = (0, k.oQ)(O, g, [], !0);
                            let e = (0, y.Tj)(p, g);
                            e.length > 0 && (t = t.concat(e));
                            let n = null != d && s.id === d.id;
                            t.some((e) => a.has(e.id)) || o || n || t.push((0, k.jZ)(s.id, g));
                        }
                        g === X.d4z.GUILD_STAGE_VOICE &&
                            ((t = []),
                            Object.values(p).forEach((e) => {
                                let { row: n } = e;
                                null != n.id &&
                                    "" !== n.id &&
                                    (n.rowType === q.aC.ROLE
                                        ? t.push((0, L.A)(n.id, E.BN.ROLE))
                                        : n.rowType === q.aC.MEMBER && t.push((0, L.A)(n.id, E.BN.MEMBER)));
                            }));
                    }
                    this.setState({
                        errors: {},
                        submitting: !0,
                    });
                    try {
                        let e = await C.Z.createChannel({
                            guildId: O,
                            type: g,
                            name: h,
                            permissionOverwrites: t,
                            bitrate: n,
                            userLimit: i,
                            parentId: g !== X.d4z.GUILD_CATEGORY ? l : null,
                            skuId: m,
                            branchId: f,
                        });
                        if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                        let r = e.body;
                        D.xL.has(g) && (0, G.XU)(r.guild_id, r.id), this.setState({ submitting: !1 }), u();
                    } catch (e) {
                        null != e.body && "object" == typeof e.body
                            ? this.setState({
                                  errors: e.body,
                                  submitting: !1,
                              })
                            : this.setState({
                                  errors: { message: K.intl.string(K.t.fEptJP) },
                                  submitting: !1,
                              });
                    }
                }
            });
        let { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        (this.state = {
            channelType: null != t ? t : X.d4z.GUILD_TEXT,
            name: null != n ? (0, F.F6)(n, H.default, B.Z) : null != i ? i : "",
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
let es = r.forwardRef(function (e, t) {
    let { channelType: n, guildId: r, cloneChannelId: l } = e,
        s = (0, h.cj)([M.Z, H.default, z.Z, Z.Z, R.ZP], () => {
            var e, t, i;
            let s = M.Z.getGuild(r),
                a = H.default.getCurrentUser();
            o()(null != a, "CreateChannel: user cannot be undefined");
            let u = null != s && null != s.ownerId ? H.default.getUser(s.ownerId) : null,
                c = z.Z.can(X.Plq.ADMINISTRATOR, s),
                d = Z.Z.getChannel(l);
            return {
                guild: s,
                canCreateStoreChannel: null != s && s.features.has(X.GuildFeatures.COMMERCE),
                canCreateAnnouncementChannel: null != s && s.features.has(X.GuildFeatures.NEWS),
                user: a,
                owner: u,
                memberRoles: null != (t = null == (e = R.ZP.getMember(r, a.id)) ? void 0 : e.roles) ? t : [],
                canViewChannels: z.Z.can(X.Plq.VIEW_CHANNEL, s),
                canConnect: z.Z.can(X.Plq.CONNECT, s),
                isAdmin: c,
                cloneChannel: d,
                channelType: null != (i = null == d ? void 0 : d.type) ? i : n,
                canManageRoles: z.Z.can(X.Plq.MANAGE_ROLES, s),
                canManageChannels: z.Z.can(X.Plq.MANAGE_CHANNELS, s),
            };
        }),
        a = (0, h.Wu)([v.Z], () =>
            v.Z.getGuildApplicationIds(r)
                .map((e) => v.Z.getApplication(e))
                .filter(V.lm),
        ),
        u = new Set(s.memberRoles),
        { canManageRoles: c, canManageChannels: d } = s,
        p = (0, w.m)(r) && c && d,
        g = (0, _.Ui)(null == s ? void 0 : s.guild);
    return (0, i.jsx)(
        el,
        et(ee({}, e, s), {
            memberRoleIds: u,
            applications: a,
            canCreateStageChannel: p,
            canCreateMediaChannel: g,
            ref: t,
            width: 496,
        }),
    );
});
