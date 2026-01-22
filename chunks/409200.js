n.d(t, {
    default: () => el,
    p: () => et,
}),
    n(321073),
    n(896048),
    n(228524),
    n(733351),
    n(65821);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(284009),
    o = n.n(a),
    u = n(735438),
    c = n.n(u),
    h = n(158954),
    d = n(311907),
    p = n(827734),
    g = n(397927),
    b = n(755584),
    m = n(686956),
    f = n(665985),
    O = n(132841),
    A = n(155718),
    C = n(58149),
    E = n(587895),
    I = n(495273),
    y = n(845202),
    v = n(86944),
    S = n(915089),
    N = n(375499),
    x = n(937773),
    j = n(770335),
    T = n(611371),
    _ = n(219444),
    P = n(976860),
    G = n(233993),
    w = n(284738),
    U = n(841811),
    L = n(95701),
    R = n(734057),
    D = n(696451),
    M = n(71393),
    k = n(576705),
    H = n(994500),
    B = n(287809),
    V = n(147036),
    F = n(403362),
    Y = n(47167),
    X = n(409463),
    K = n(652215),
    W = n(737045),
    q = n(307731),
    Z = n(818348),
    z = n(985018),
    J = n(812618);
function Q(e, t, n) {
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
                Q(e, t, n[t]);
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
            ? (r = (0, i.jsx)(g.LpS, {
                  text: z.intl.string(z.t.psHMa6),
                  className: J.Ad,
                  color: p.A.colors.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER.css,
              }))
            : !0 === n && (r = (0, i.jsx)(T.A, { className: J.Ad })),
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
            canSubmit: b,
            onMembersChange: m,
            pendingPermissionOverwrites: f,
        } = e,
        [O, A] = r.useState(""),
        [C, E] = r.useState({}),
        I = r.useRef(null),
        S = (0, d.bG)([M.A], () => M.A.getGuild(c)),
        N = s === K.rbe.GUILD_STAGE_VOICE,
        { roles: x, members: j, getRichTag: T } = (0, v.K)(S, null, N ? G.QY : (0, L.TA)(s), O, N),
        _ = y.A.useSections({
            roles: x,
            members: j,
        });
    return (r.useEffect(() => {
        m(C);
    }, [C, m]),
    null == S)
        ? null
        : ((t =
              0 === Object.keys(f).length
                  ? z.intl.string(z.t["5Wxrcd"])
                  : s === K.rbe.GUILD_CATEGORY
                    ? z.intl.string(z.t["ISN+NM"])
                    : z.intl.string(z.t["fUYU+j"])),
          (0, i.jsx)(y.A.Provider, {
              listRef: I,
              query: O,
              setQuery: A,
              pendingAdditions: C,
              setPendingAdditions: E,
              roles: x,
              members: j,
              getRichTag: T,
              children: (0, i.jsx)(h.Modal, {
                  transitionState: n,
                  onClose: l,
                  title: N ? z.intl.string(z.t["S/6zHM"]) : z.intl.string(z.t.dMJ3Y6),
                  subtitle: {
                      text: u,
                      leadingIcon: a,
                  },
                  input: (0, i.jsxs)(i.Fragment, {
                      children: [
                          N
                              ? (0, i.jsx)(g.Text, {
                                    color: "text-default",
                                    className: J.h_,
                                    variant: "text-sm/normal",
                                    children: z.intl.string(z.t.f7VbhF),
                                })
                              : void 0,
                          (0, i.jsx)(y.A.SearchBox, { placeholderText: z.intl.string(z.t.iezLLn) }),
                          (0, i.jsx)(g.Text, {
                              className: J.pK,
                              variant: "text-xs/normal",
                              children: z.intl.string(z.t.rwFx85),
                          }),
                      ],
                  }),
                  preview: o,
                  listProps: {
                      sectionHeight: y.A.SECTION_HEIGHT,
                      renderSection: y.A.renderSection,
                      rowHeight: y.A.ROW_HEIGHT,
                      renderRow: y.A.renderRow,
                      sections: _,
                      innerAriaOrientation: "vertical",
                      innerRole: "listbox",
                  },
                  actions: [
                      {
                          variant: "secondary",
                          text: z.intl.string(z.t["13/7kX"]),
                          onClick: p,
                      },
                      {
                          variant: "primary",
                          text: t,
                          type: "submit",
                          disabled: !b,
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
                    page: K.liQ.CREATE_CHANNEL_MODAL,
                    section: K.JJy.CHANNEL_NAME,
                    object: K.ZSU.EMOJI_PICKER_BUTTON,
                },
            }),
            [],
        ),
        a = r.useCallback(
            (e) => {
                let { closePopout: r } = e;
                return (0, i.jsx)(x.A, {
                    channel: null,
                    guildId: n,
                    pickerIntention: q.b_.CHANNEL_NAME,
                    closePopout: r,
                    onNavigateAway: r,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        null != n && n.type === j.i.UNICODE && t(n.surrogates), i && r();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: s,
                });
            },
            [s, n, t],
        );
    return (0, i.jsx)(g.YNO, {
        targetElementRef: l,
        renderPopout: a,
        animation: g.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(
                N.A,
                ee($({}, e), {
                    ref: l,
                    active: n,
                    className: J.Z8,
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
        i && null == n && m.A.fetchApplications(t),
            C.Ay.trackWithMetadata(K.HAw.OPEN_MODAL, { type: "Create Channel" });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelType === K.rbe.GUILD_ANNOUNCEMENT &&
            this.setState({ channelType: K.rbe.GUILD_TEXT }),
            !t.isPrivate &&
                this.state.isPrivate &&
                C.Ay.trackWithMetadata(K.HAw.OPEN_MODAL, { type: "Create Private Channel" });
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
            n !== g.ip4.EXITING &&
            "" !== s &&
            "" !== s.trim() &&
            (!i || !!(0, I.n0)(r, e, t)) &&
            (r !== K.rbe.GUILD_STORE || null != l)
        );
    }
    getIconComponent() {
        let { isPrivate: e, channelType: t } = this.state;
        switch (t) {
            case K.rbe.GUILD_TEXT:
                return e ? g.I$d : g.N$i;
            case K.rbe.GUILD_FORUM:
                return g.bSJ;
            case K.rbe.GUILD_MEDIA:
                return g.xfq;
            case K.rbe.GUILD_VOICE:
                return e ? g.trU : g.HKD;
            case K.rbe.GUILD_STORE:
                return g.gqV;
            case K.rbe.GUILD_ANNOUNCEMENT:
                return g.koX;
            case K.rbe.GUILD_STAGE_VOICE:
                return g.qux;
            default:
                return (0, L.ke)(t) ? g.N$i : Z.FX;
        }
    }
    getHelperText() {
        let { cloneChannel: e, channelType: t, guildId: r } = this.props;
        return null != e
            ? z.intl.format(z.t.s2ZzZZ, { name: (0, Y.m1)(e, B.default, H.A, !0) })
            : t === K.rbe.GUILD_FORUM
              ? z.intl.format(z.t.tbVWyR, {
                    forumUpsellHook: (e, t) =>
                        (0, i.jsx)(
                            g.MzZ,
                            {
                                onClick: () =>
                                    (0, g.mMO)(async () => {
                                        let { default: e } = await n.e("7937").then(n.bind(n, 420472));
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
        let l = r === K.rbe.GUILD_CATEGORY,
            s = l ? z.intl.string(z.t.OCAkGP) : z.intl.string(z.t.PVbHDl),
            a = this.getIconComponent();
        return (0, i.jsx)(g.ksK, {
            label: s,
            helperText: this.getHelperText(),
            error: e,
            value: this.state.name,
            onChange: this.handleNameChange,
            inputRef: this.setInputRef,
            maxLength: 100,
            placeholder: (function (e) {
                switch (e) {
                    case K.rbe.GUILD_CATEGORY:
                        return z.intl.string(z.t.eTVbtx);
                    case K.rbe.GUILD_FORUM:
                        return z.intl.string(z.t["5z1Xat"]);
                    default:
                        return z.intl.string(z.t["bw/b8E"]);
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
        if (null != e || a === K.rbe.GUILD_CATEGORY) return;
        let u = null != t && t.length > 0;
        return (0, i.jsx)(h.z6M, {
            label: z.intl.string(z.t["7ZcXG2"]),
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
                            leadingIcon: t ? g.I$d : g.N$i,
                            name: z.intl.string(z.t.pnuRXC),
                            value: K.rbe.GUILD_TEXT,
                            desc: z.intl.string(z.t["Hf5Lb+"]),
                        },
                        {
                            leadingIcon: t ? g.trU : g.HKD,
                            name: z.intl.string(z.t.Sx55Oh),
                            value: K.rbe.GUILD_VOICE,
                            desc: z.intl.string(z.t.pqfkoF),
                        },
                        {
                            leadingIcon: t ? g.QVg : g.bSJ,
                            name: z.intl.string(z.t.eAVID5),
                            value: K.rbe.GUILD_FORUM,
                            desc: z.intl.string(z.t.iZ5pgg),
                        },
                    ];
                return (
                    l &&
                        s.push({
                            leadingIcon: t ? g.cfi : g.xfq,
                            name: z.intl.string(z.t["6x6fVg"]),
                            value: K.rbe.GUILD_MEDIA,
                            desc: z.intl.string(z.t.JyCrwS),
                        }),
                    i &&
                        s.push({
                            leadingIcon: g.koX,
                            name: z.intl.string(z.t.qr9dEP),
                            value: K.rbe.GUILD_ANNOUNCEMENT,
                            desc: z.intl.string(z.t.gBkfzu),
                        }),
                    n &&
                        s.push({
                            leadingIcon: g.gqV,
                            name: z.intl.string(z.t.SxjkXf),
                            value: K.rbe.GUILD_STORE,
                            desc: z.intl.string(z.t.nmCPMC),
                        }),
                    r &&
                        s.push({
                            leadingIcon: g.qux,
                            name: z.intl.string(z.t.pNWst0),
                            value: K.rbe.GUILD_STAGE_VOICE,
                            desc: z.intl.string(z.t.VPAwgo),
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
                (0, i.jsx)(g.l6P, {
                    label: z.intl.string(z.t.vPIW2L),
                    options: e.map((e) => ({
                        id: e.id,
                        label: e.name,
                        value: e.id,
                    })),
                    placeholder: z.intl.string(z.t["3XfCPX"]),
                    value: t,
                    onSelectionChange: this.handleApplicationChange,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                null != t
                    ? (0, i.jsx)(
                          O.A,
                          {
                              label: z.intl.string(z.t.XNIWFj),
                              applicationId: t,
                              onChange: this.handleSKUChange,
                              selectedSkuId: n,
                              className: J.dE,
                          },
                          t,
                      )
                    : null,
                null != t && s
                    ? (0, i.jsx)(g.dOG, {
                          label: z.intl.string(z.t["3e9mH5"]),
                          description: z.intl.format(z.t.UVXL1R, {
                              devPortalUrl: K.X7G.API_DOCS_GAME_AND_SERVER_MANAGEMENT,
                          }),
                          icon: g.RYV,
                          onChange: this.handleShowBranchesToggle,
                          checked: l,
                      })
                    : null,
                null != t
                    ? (0, i.jsx)("div", {
                          className: J.dE,
                          children: (0, i.jsx)(
                              f.A,
                              {
                                  label: l ? z.intl.string(z.t.o7DqF3) : void 0,
                                  applicationId: t,
                                  onChange: this.handleBranchChange,
                                  selectedBranchId: r,
                                  hide: !l,
                                  includeMaster: l,
                                  onHasBranchesChange: this.handleHasBranchesChange,
                              },
                              t,
                          ),
                      })
                    : null,
            ],
        });
    }
    renderPrivacyOptions() {
        let { cloneChannel: e } = this.props,
            { channelType: t, isPrivate: n } = this.state;
        if (null != e || t === K.rbe.GUILD_ANNOUNCEMENT) return null;
        let r = t === K.rbe.GUILD_CATEGORY ? z.intl.string(z.t.lEPAZ5) : z.intl.string(z.t.aUI70g),
            l = t === K.rbe.GUILD_CATEGORY ? z.intl.string(z.t.RQUk61) : z.intl.string(z.t.YguuKq);
        return (0, i.jsx)(g.dOG, {
            label: r,
            description: l,
            icon: g.XAi,
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
        } else r && !(0, I.n0)(n, o, a) && (t = (0, I.ld)(n));
        if (null != t)
            return (0, i.jsx)("div", {
                className: s()(J.$5, { [J.SE]: e }),
                children: (0, i.jsx)(g.po8, {
                    messageType: g.YCn.ERROR,
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
            { guildId: s, transitionState: a, cloneChannel: o, categoryId: u, onClose: c, channelType: d } = this.props,
            p =
                null != o
                    ? z.intl.string(z.t.dEaPc4)
                    : r === K.rbe.GUILD_CATEGORY
                      ? z.intl.string(z.t["ISN+NM"])
                      : z.intl.string(z.t["fUYU+j"]);
        if (null != u) {
            let n = R.A.getChannel(u);
            t = z.intl.format(z.t.L1zJgb, { categoryName: null != (e = null == n ? void 0 : n.name) ? e : "" });
        }
        n = d === K.rbe.GUILD_CATEGORY ? z.intl.string(z.t["ISN+NM"]) : z.intl.string(z.t["fUYU+j"]);
        let g = l || r === K.rbe.GUILD_STAGE_VOICE;
        return (0, i.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, i.jsx)(h.Modal, {
                transitionState: a,
                onClose: c,
                title: p,
                subtitle: t,
                preview: this.renderError(),
                actions: [
                    {
                        variant: "secondary",
                        text: z.intl.string(z.t["ETE/oC"]),
                        onClick: c,
                    },
                    g
                        ? {
                              variant: "primary",
                              text: z.intl.string(z.t.PDTjLN),
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
                    className: J.hM,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        d === K.rbe.GUILD_STORE ? this.renderStoreOptions() : null,
                        (0, i.jsx)(X.A, {
                            guildId: s,
                            channelType: r,
                            className: J.wI,
                        }),
                        r === K.rbe.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions(),
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
            Q(this, "headerId", (0, S.Ld)()),
            Q(this, "_input", void 0),
            Q(this, "setInputRef", (e) => {
                this._input = e;
            }),
            Q(this, "handleNameChange", (e) => {
                var t, n;
                let { channelType: i } = this.state;
                L.ZE.has(i) && (e = (0, V.an)(e));
                let r = null != (t = null == (n = this._input) ? void 0 : n.selectionStart) ? t : 0;
                this.setState({ name: e }, () => {
                    var e;
                    null == (e = this._input) || e.setSelectionRange(r, r);
                });
            }),
            Q(this, "insertEmojiAtPosition", (e) => {
                var t, n, i, r;
                let l = null != (t = null == (i = this._input) ? void 0 : i.selectionStart) ? t : 0,
                    s = null != (n = null == (r = this._input) ? void 0 : r.selectionEnd) ? n : 0,
                    a = this.state.name,
                    o = a.substring(0, l) + e + a.substring(s);
                this.setState({ name: o }, () => {
                    var t, n;
                    let i = l + e.length;
                    null == (t = this._input) || t.focus(), null == (n = this._input) || n.setSelectionRange(i, i);
                });
            }),
            Q(this, "handleTypeChange", (e) => {
                let { name: t } = this.state;
                L.ZE.has(e) && (t = (0, V.an)(t)),
                    e === K.rbe.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
                    this.setState({
                        channelType: e,
                        name: t,
                    });
            }),
            Q(this, "handlePrivacyChange", (e) => {
                this.setState({ isPrivate: e });
            }),
            Q(this, "handleApplicationChange", (e) => {
                this.setState({ applicationId: e });
            }),
            Q(this, "handleSKUChange", (e) => {
                this.setState({ skuId: e });
            }),
            Q(this, "handleShowBranchesToggle", (e) => {
                this.setState({
                    showBranches: e,
                    branchId: null,
                });
            }),
            Q(this, "handleBranchChange", (e) => {
                this.setState({ branchId: e });
            }),
            Q(this, "handleHasBranchesChange", (e) => {
                this.setState({ hasBranches: e });
            }),
            Q(this, "handleSubmit", async (e) => {
                let t, n, i;
                e.preventDefault();
                let {
                        cloneChannel: r,
                        categoryId: l,
                        user: s,
                        memberRoleIds: a,
                        isAdmin: o,
                        onClose: u,
                        owner: h,
                    } = this.props,
                    {
                        name: d,
                        pendingPermissionOverwrites: p,
                        channelType: g,
                        skuId: m,
                        branchId: f,
                        isPrivate: O,
                    } = this.state,
                    C = this.getGuildId();
                if (null != C) {
                    if (null != r) (t = c().values(r.permissionOverwrites)), (n = r.bitrate), (i = r.userLimit);
                    else if (g === K.rbe.GUILD_ANNOUNCEMENT) t = (0, V.IP)(C);
                    else {
                        if (O) {
                            t = (0, V.CG)(C, g, [], !0);
                            let e = (0, I.D4)(p, g);
                            e.length > 0 && (t = t.concat(e));
                            let n = null != h && s.id === h.id;
                            t.some((e) => a.has(e.id)) || o || n || t.push((0, V.n3)(s.id, g));
                        }
                        g === K.rbe.GUILD_STAGE_VOICE &&
                            ((t = []),
                            Object.values(p).forEach((e) => {
                                let { row: n } = e;
                                null != n.id &&
                                    "" !== n.id &&
                                    (n.rowType === W.T6.ROLE
                                        ? t.push((0, U.j)(n.id, A.r2.ROLE))
                                        : n.rowType === W.T6.MEMBER && t.push((0, U.j)(n.id, A.r2.MEMBER)));
                            }));
                    }
                    this.setState({
                        errors: {},
                        submitting: !0,
                    });
                    try {
                        let e = await b.A.createChannel({
                            guildId: C,
                            type: g,
                            name: d,
                            permissionOverwrites: t,
                            bitrate: n,
                            userLimit: i,
                            parentId: g !== K.rbe.GUILD_CATEGORY ? l : null,
                            skuId: m,
                            branchId: f,
                        });
                        if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                        let r = e.body;
                        L.ZE.has(g) && (0, P.uh)(r.guild_id, r.id), this.setState({ submitting: !1 }), u();
                    } catch (e) {
                        null != e.body && "object" == typeof e.body
                            ? this.setState({
                                  errors: e.body,
                                  submitting: !1,
                              })
                            : this.setState({
                                  errors: { message: z.intl.string(z.t.fEptJP) },
                                  submitting: !1,
                              });
                    }
                }
            });
        const { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        (this.state = {
            channelType: null != t ? t : K.rbe.GUILD_TEXT,
            name: null != n ? (0, Y.m1)(n, B.default, H.A) : null != i ? i : "",
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
        s = (0, d.cf)([M.A, B.default, k.A, R.A, D.Ay], () => {
            var e, t, i;
            let s = M.A.getGuild(r),
                a = B.default.getCurrentUser();
            o()(null != a, "CreateChannel: user cannot be undefined");
            let u = null != s && null != s.ownerId ? B.default.getUser(s.ownerId) : null,
                c = k.A.can(K.xBc.ADMINISTRATOR, s),
                h = R.A.getChannel(l);
            return {
                guild: s,
                canCreateStoreChannel: null != s && s.features.has(K.GuildFeatures.COMMERCE),
                canCreateAnnouncementChannel: null != s && s.features.has(K.GuildFeatures.NEWS),
                user: a,
                owner: u,
                memberRoles: null != (e = null == (i = D.Ay.getMember(r, a.id)) ? void 0 : i.roles) ? e : [],
                canViewChannels: k.A.can(K.xBc.VIEW_CHANNEL, s),
                canConnect: k.A.can(K.xBc.CONNECT, s),
                isAdmin: c,
                cloneChannel: h,
                channelType: null != (t = null == h ? void 0 : h.type) ? t : n,
                canManageRoles: k.A.can(K.xBc.MANAGE_ROLES, s),
                canManageChannels: k.A.can(K.xBc.MANAGE_CHANNELS, s),
            };
        }),
        a = (0, d.yK)([E.A], () =>
            E.A.getGuildApplicationIds(r)
                .map((e) => E.A.getApplication(e))
                .filter(F.Vq),
        ),
        u = new Set(s.memberRoles),
        { canManageRoles: c, canManageChannels: h } = s,
        p = (0, w.R)(r) && c && h,
        g = (0, _.Vf)(null == s ? void 0 : s.guild);
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
