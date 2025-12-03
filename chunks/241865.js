n.d(t, {
    default: () => el,
    p: () => et,
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
    g = n(481060),
    m = n(333848),
    C = n(749210),
    f = n(332063),
    b = n(620123),
    O = n(911969),
    E = n(367907),
    I = n(812206),
    v = n(605436),
    N = n(974339),
    y = n(215157),
    S = n(313201),
    x = n(318766),
    j = n(907040),
    P = n(906411),
    T = n(688465),
    A = n(312146),
    _ = n(703656),
    G = n(146085),
    U = n(60222),
    w = n(388131),
    L = n(131704),
    D = n(592125),
    Z = n(271383),
    R = n(430824),
    M = n(496675),
    z = n(699516),
    B = n(594174),
    H = n(934415),
    k = n(823379),
    V = n(933557),
    F = n(636816),
    Y = n(981631),
    q = n(71080),
    X = n(185923),
    W = n(231338),
    Q = n(388032),
    K = n(305048);
function J(e, t, n) {
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
function $(e) {
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
                J(e, t, n[t]);
            });
    }
    return e;
}
function ee(e, t) {
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
function et(e) {
    let { isNew: t, isBeta: n } = e,
        r = null;
    return (
        !0 === t
            ? (r = (0, i.jsx)(g.IGR, {
                  text: Q.intl.string(Q.t.psHMa6),
                  className: K.newBadge,
                  color: p.Z.colors.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER.css,
              }))
            : !0 === n && (r = (0, i.jsx)(T.Z, { className: K.newBadge })),
        r
    );
}
function en(e) {
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
            canSubmit: m,
            onMembersChange: C,
            pendingPermissionOverwrites: f,
        } = e,
        [b, O] = r.useState(""),
        [E, I] = r.useState({}),
        v = r.useRef(null),
        S = (0, h.e7)([R.Z], () => R.Z.getGuild(c)),
        x = s === Y.d4z.GUILD_STAGE_VOICE,
        { roles: j, members: P, getRichTag: T } = (0, y.Q)(S, null, x ? G.yP : (0, L.CG)(s), b, x),
        A = N.Z.useSections({
            roles: j,
            members: P,
        });
    return (r.useEffect(() => {
        C(E);
    }, [E, C]),
    null == S)
        ? null
        : ((t =
              0 === Object.keys(f).length
                  ? Q.intl.string(Q.t["5Wxrcd"])
                  : s === Y.d4z.GUILD_CATEGORY
                    ? Q.intl.string(Q.t["ISN+NM"])
                    : Q.intl.string(Q.t["fUYU+j"])),
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
                  title: x ? Q.intl.string(Q.t["S/6zHM"]) : Q.intl.string(Q.t.dMJ3Y6),
                  subtitle: {
                      text: u,
                      leadingIcon: a,
                  },
                  input: (0, i.jsxs)(i.Fragment, {
                      children: [
                          x
                              ? (0, i.jsx)(g.Text, {
                                    color: "text-default",
                                    className: K.description,
                                    variant: "text-sm/normal",
                                    children: Q.intl.string(Q.t.f7VbhF),
                                })
                              : void 0,
                          (0, i.jsx)(N.Z.SearchBox, { placeholderText: Q.intl.string(Q.t.iezLLn) }),
                          (0, i.jsx)(g.Text, {
                              className: K.searchHelpText,
                              variant: "text-xs/normal",
                              children: Q.intl.string(Q.t.rwFx85),
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
                          text: Q.intl.string(Q.t["13/7kX"]),
                          onClick: p,
                      },
                      {
                          variant: "primary",
                          text: t,
                          type: "submit",
                          disabled: !m,
                      },
                  ],
              }),
          }));
}
function ei(e) {
    let { onEmojiPicked: t, guildId: n } = e,
        l = r.useRef(null),
        s = r.useMemo(
            () => ({
                popoutLocation: {
                    page: Y.ZY5.CREATE_CHANNEL_MODAL,
                    section: Y.jXE.CHANNEL_NAME,
                    object: Y.qAy.EMOJI_PICKER_BUTTON,
                },
            }),
            [],
        ),
        a = r.useCallback(
            (e) => {
                let { closePopout: r } = e;
                return (0, i.jsx)(j.Z, {
                    channel: null,
                    guildId: n,
                    pickerIntention: X.Hz.CHANNEL_NAME,
                    closePopout: r,
                    onNavigateAway: r,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        null != n && n.type === P.B.UNICODE && t(n.surrogates), i && r();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: s,
                });
            },
            [s, n, t],
        );
    return (0, i.jsx)(g.yRy, {
        targetElementRef: l,
        renderPopout: a,
        animation: g.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(
                x.Z,
                ee($({}, e), {
                    ref: l,
                    active: n,
                    className: K.emojiButton,
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
class er extends r.PureComponent {
    componentDidMount() {
        let { _input: e } = this;
        null != e && e.select();
        let { guildId: t, applications: n, canCreateStoreChannel: i } = this.props;
        i && null == n && C.Z.fetchApplications(t),
            E.ZP.trackWithMetadata(Y.rMx.OPEN_MODAL, { type: "Create Channel" });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelType === Y.d4z.GUILD_ANNOUNCEMENT &&
            this.setState({ channelType: Y.d4z.GUILD_TEXT }),
            !t.isPrivate &&
                this.state.isPrivate &&
                E.ZP.trackWithMetadata(Y.rMx.OPEN_MODAL, { type: "Create Private Channel" });
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
            n !== g.Dvm.EXITING &&
            "" !== s &&
            "" !== s.trim() &&
            (!i || !!(0, v.nT)(r, e, t)) &&
            (r !== Y.d4z.GUILD_STORE || null != l)
        );
    }
    getIconComponent() {
        let { isPrivate: e, channelType: t } = this.state;
        switch (t) {
            case Y.d4z.GUILD_TEXT:
                return e ? g.W4G : g.VL1;
            case Y.d4z.GUILD_FORUM:
                return g.Mmi;
            case Y.d4z.GUILD_MEDIA:
                return g.XBm;
            case Y.d4z.GUILD_VOICE:
                return e ? g.gjC : g.gj8;
            case Y.d4z.GUILD_STORE:
                return g.lO_;
            case Y.d4z.GUILD_ANNOUNCEMENT:
                return g.MqZ;
            case Y.d4z.GUILD_STAGE_VOICE:
                return g.ewx;
            default:
                return (0, L.zi)(t) ? g.VL1 : W.Vq;
        }
    }
    getHelperText() {
        let { cloneChannel: e, channelType: t, guildId: r } = this.props;
        return null != e
            ? Q.intl.format(Q.t.s2ZzZZ, { name: (0, V.F6)(e, B.default, z.Z, !0) })
            : t === Y.d4z.GUILD_FORUM
              ? Q.intl.format(Q.t.tbVWyR, {
                    forumUpsellHook: (e, t) =>
                        (0, i.jsx)(
                            g.Anchor,
                            {
                                onClick: () =>
                                    (0, g.ZDy)(async () => {
                                        let { default: e } = await n.e("18417").then(n.bind(n, 740696));
                                        return (t) => (0, i.jsx)(e, ee($({}, t), { guildId: r }));
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
        let l = r === Y.d4z.GUILD_CATEGORY,
            s = l ? Q.intl.string(Q.t.OCAkGP) : Q.intl.string(Q.t.PVbHDl),
            a = this.getIconComponent();
        return (0, i.jsx)(g.oil, {
            label: s,
            helperText: this.getHelperText(),
            error: e,
            value: this.state.name,
            onChange: this.handleNameChange,
            inputRef: this.setInputRef,
            maxLength: 100,
            placeholder: (function (e) {
                switch (e) {
                    case Y.d4z.GUILD_CATEGORY:
                        return Q.intl.string(Q.t.eTVbtx);
                    case Y.d4z.GUILD_FORUM:
                        return Q.intl.string(Q.t["5z1Xat"]);
                    default:
                        return Q.intl.string(Q.t["bw/b8E"]);
                }
            })(r),
            leading: l ? void 0 : a,
            trailing: {
                type: "emoji",
                button: (0, i.jsx)(ei, {
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
        if (null != e || a === Y.d4z.GUILD_CATEGORY) return;
        let u = null != t && t.length > 0;
        return (0, i.jsx)(d.Eep, {
            label: Q.intl.string(Q.t["7ZcXG2"]),
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
                            leadingIcon: t ? g.W4G : g.VL1,
                            name: Q.intl.string(Q.t.pnuRXC),
                            value: Y.d4z.GUILD_TEXT,
                            desc: Q.intl.string(Q.t["Hf5Lb+"]),
                        },
                        {
                            leadingIcon: t ? g.gjC : g.gj8,
                            name: Q.intl.string(Q.t.Sx55Oh),
                            value: Y.d4z.GUILD_VOICE,
                            desc: Q.intl.string(Q.t.pqfkoF),
                        },
                        {
                            leadingIcon: t ? g.BUe : g.Mmi,
                            name: Q.intl.string(Q.t.eAVID5),
                            value: Y.d4z.GUILD_FORUM,
                            desc: Q.intl.string(Q.t.iZ5pgg),
                        },
                    ];
                return (
                    l &&
                        s.push({
                            leadingIcon: t ? g.D7T : g.XBm,
                            name: Q.intl.string(Q.t["6x6fVg"]),
                            value: Y.d4z.GUILD_MEDIA,
                            desc: Q.intl.string(Q.t.JyCrwS),
                        }),
                    i &&
                        s.push({
                            leadingIcon: g.MqZ,
                            name: Q.intl.string(Q.t.qr9dEP),
                            value: Y.d4z.GUILD_ANNOUNCEMENT,
                            desc: Q.intl.string(Q.t.gBkfzu),
                        }),
                    n &&
                        s.push({
                            leadingIcon: g.lO_,
                            name: Q.intl.string(Q.t.SxjkXf),
                            value: Y.d4z.GUILD_STORE,
                            desc: Q.intl.string(Q.t.nmCPMC),
                        }),
                    r &&
                        s.push({
                            leadingIcon: g.ewx,
                            name: Q.intl.string(Q.t.pNWst0),
                            value: Y.d4z.GUILD_STAGE_VOICE,
                            desc: Q.intl.string(Q.t.VPAwgo),
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
                (0, i.jsx)(g.q4e, {
                    label: Q.intl.string(Q.t.vPIW2L),
                    options: e.map((e) => ({
                        label: e.name,
                        value: e.id,
                    })),
                    placeholder: Q.intl.string(Q.t["3XfCPX"]),
                    value: t,
                    onChange: this.handleApplicationChange,
                    className: K.storeChannelOptionSelector,
                }),
                null != t
                    ? (0, i.jsx)(
                          b.Z,
                          {
                              label: Q.intl.string(Q.t.XNIWFj),
                              applicationId: t,
                              onChange: this.handleSKUChange,
                              selectedSkuId: n,
                              className: K.storeChannelOptionSelector,
                          },
                          t,
                      )
                    : null,
                null != t && s
                    ? (0, i.jsx)(g.rsf, {
                          label: Q.intl.string(Q.t["3e9mH5"]),
                          description: Q.intl.format(Q.t.UVXL1R, {
                              devPortalUrl: Y.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT,
                          }),
                          icon: g._m8,
                          onChange: this.handleShowBranchesToggle,
                          checked: l,
                      })
                    : null,
                null != t
                    ? (0, i.jsx)(
                          f.Z,
                          {
                              label: l ? Q.intl.string(Q.t.o7DqF3) : void 0,
                              applicationId: t,
                              onChange: this.handleBranchChange,
                              selectedBranchId: r,
                              hide: !l,
                              includeMaster: l,
                              onHasBranchesChange: this.handleHasBranchesChange,
                              className: K.storeChannelOptionSelector,
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
        if (null != e || t === Y.d4z.GUILD_ANNOUNCEMENT) return null;
        let r = t === Y.d4z.GUILD_CATEGORY ? Q.intl.string(Q.t.lEPAZ5) : Q.intl.string(Q.t.aUI70g),
            l = t === Y.d4z.GUILD_CATEGORY ? Q.intl.string(Q.t.RQUk61) : Q.intl.string(Q.t.YguuKq);
        return (0, i.jsx)(g.rsf, {
            label: r,
            description: l,
            icon: g.mBM,
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
        } else r && !(0, v.nT)(n, o, a) && (t = (0, v.$7)(n));
        if (null != t)
            return (0, i.jsx)("div", {
                className: s()(K.createError, { [K.addMemberError]: e }),
                children: (0, i.jsx)(g.Wn, {
                    messageType: g.QYI.ERROR,
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
                    ? Q.intl.string(Q.t.dEaPc4)
                    : r === Y.d4z.GUILD_CATEGORY
                      ? Q.intl.string(Q.t["ISN+NM"])
                      : Q.intl.string(Q.t["fUYU+j"]);
        if (null != u) {
            let n = D.Z.getChannel(u);
            t = Q.intl.format(Q.t.L1zJgb, { categoryName: null != (e = null == n ? void 0 : n.name) ? e : "" });
        }
        n = h === Y.d4z.GUILD_CATEGORY ? Q.intl.string(Q.t["ISN+NM"]) : Q.intl.string(Q.t["fUYU+j"]);
        let g = l || r === Y.d4z.GUILD_STAGE_VOICE;
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
                        text: Q.intl.string(Q.t["ETE/oC"]),
                        onClick: c,
                    },
                    g
                        ? {
                              variant: "primary",
                              text: Q.intl.string(Q.t.PDTjLN),
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
                    className: K.createChannelContent,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        h === Y.d4z.GUILD_STORE ? this.renderStoreOptions() : null,
                        (0, i.jsx)(F.Z, {
                            guildId: s,
                            channelType: r,
                            className: K.channelTypeDescription,
                        }),
                        r === Y.d4z.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions(),
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
            children: (0, i.jsx)(en, {
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
            J(this, "headerId", (0, S.hQ)()),
            J(this, "_input", void 0),
            J(this, "setInputRef", (e) => {
                this._input = e;
            }),
            J(this, "handleNameChange", (e) => {
                var t, n;
                let { channelType: i } = this.state;
                L.xL.has(i) && (e = (0, H.Nj)(e));
                let r = null != (n = null == (t = this._input) ? void 0 : t.selectionStart) ? n : 0;
                this.setState({ name: e }, () => {
                    var e;
                    null == (e = this._input) || e.setSelectionRange(r, r);
                });
            }),
            J(this, "insertEmojiAtPosition", (e) => {
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
            J(this, "handleTypeChange", (e) => {
                let { name: t } = this.state;
                L.xL.has(e) && (t = (0, H.Nj)(t)),
                    e === Y.d4z.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
                    this.setState({
                        channelType: e,
                        name: t,
                    });
            }),
            J(this, "handlePrivacyChange", (e) => {
                this.setState({ isPrivate: e });
            }),
            J(this, "handleApplicationChange", (e) => {
                this.setState({ applicationId: e });
            }),
            J(this, "handleSKUChange", (e) => {
                this.setState({ skuId: e });
            }),
            J(this, "handleShowBranchesToggle", (e) => {
                this.setState({
                    showBranches: e,
                    branchId: null,
                });
            }),
            J(this, "handleBranchChange", (e) => {
                this.setState({ branchId: e });
            }),
            J(this, "handleHasBranchesChange", (e) => {
                this.setState({ hasBranches: e });
            }),
            J(this, "handleSubmit", async (e) => {
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
                        skuId: C,
                        branchId: f,
                        isPrivate: b,
                    } = this.state,
                    E = this.getGuildId();
                if (null != E) {
                    if (null != r) (t = c().values(r.permissionOverwrites)), (n = r.bitrate), (i = r.userLimit);
                    else if (g === Y.d4z.GUILD_ANNOUNCEMENT) t = (0, H.rt)(E);
                    else {
                        if (b) {
                            t = (0, H.oQ)(E, g, [], !0);
                            let e = (0, v.Tj)(p, g);
                            e.length > 0 && (t = t.concat(e));
                            let n = null != d && s.id === d.id;
                            t.some((e) => a.has(e.id)) || o || n || t.push((0, H.jZ)(s.id, g));
                        }
                        g === Y.d4z.GUILD_STAGE_VOICE &&
                            ((t = []),
                            Object.values(p).forEach((e) => {
                                let { row: n } = e;
                                null != n.id &&
                                    "" !== n.id &&
                                    (n.rowType === q.aC.ROLE
                                        ? t.push((0, w.A)(n.id, O.BN.ROLE))
                                        : n.rowType === q.aC.MEMBER && t.push((0, w.A)(n.id, O.BN.MEMBER)));
                            }));
                    }
                    this.setState({
                        errors: {},
                        submitting: !0,
                    });
                    try {
                        let e = await m.Z.createChannel({
                            guildId: E,
                            type: g,
                            name: h,
                            permissionOverwrites: t,
                            bitrate: n,
                            userLimit: i,
                            parentId: g !== Y.d4z.GUILD_CATEGORY ? l : null,
                            skuId: C,
                            branchId: f,
                        });
                        if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                        let r = e.body;
                        L.xL.has(g) && (0, _.XU)(r.guild_id, r.id), this.setState({ submitting: !1 }), u();
                    } catch (e) {
                        null != e.body && "object" == typeof e.body
                            ? this.setState({
                                  errors: e.body,
                                  submitting: !1,
                              })
                            : this.setState({
                                  errors: { message: Q.intl.string(Q.t.fEptJP) },
                                  submitting: !1,
                              });
                    }
                }
            });
        let { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        (this.state = {
            channelType: null != t ? t : Y.d4z.GUILD_TEXT,
            name: null != n ? (0, V.F6)(n, B.default, z.Z) : null != i ? i : "",
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
let el = r.forwardRef(function (e, t) {
    let { channelType: n, guildId: r, cloneChannelId: l } = e,
        s = (0, h.cj)([R.Z, B.default, M.Z, D.Z, Z.ZP], () => {
            var e, t, i;
            let s = R.Z.getGuild(r),
                a = B.default.getCurrentUser();
            o()(null != a, "CreateChannel: user cannot be undefined");
            let u = null != s && null != s.ownerId ? B.default.getUser(s.ownerId) : null,
                c = M.Z.can(Y.Plq.ADMINISTRATOR, s),
                d = D.Z.getChannel(l);
            return {
                guild: s,
                canCreateStoreChannel: null != s && s.features.has(Y.GuildFeatures.COMMERCE),
                canCreateAnnouncementChannel: null != s && s.features.has(Y.GuildFeatures.NEWS),
                user: a,
                owner: u,
                memberRoles: null != (t = null == (e = Z.ZP.getMember(r, a.id)) ? void 0 : e.roles) ? t : [],
                canViewChannels: M.Z.can(Y.Plq.VIEW_CHANNEL, s),
                canConnect: M.Z.can(Y.Plq.CONNECT, s),
                isAdmin: c,
                cloneChannel: d,
                channelType: null != (i = null == d ? void 0 : d.type) ? i : n,
                canManageRoles: M.Z.can(Y.Plq.MANAGE_ROLES, s),
                canManageChannels: M.Z.can(Y.Plq.MANAGE_CHANNELS, s),
            };
        }),
        a = (0, h.Wu)([I.Z], () =>
            I.Z.getGuildApplicationIds(r)
                .map((e) => I.Z.getApplication(e))
                .filter(k.lm),
        ),
        u = new Set(s.memberRoles),
        { canManageRoles: c, canManageChannels: d } = s,
        p = (0, U.m)(r) && c && d,
        g = (0, A.Ui)(null == s ? void 0 : s.guild);
    return (0, i.jsx)(
        er,
        ee($({}, e, s), {
            memberRoleIds: u,
            applications: a,
            canCreateStageChannel: p,
            canCreateMediaChannel: g,
            ref: t,
            width: 496,
        }),
    );
});
