n.d(t, { default: () => en, p: () => $ }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    d = n(735438),
    h = n.n(d),
    u = n(158954),
    c = n(311907),
    g = n(827734),
    p = n(397927),
    m = n(755584),
    A = n(686956),
    C = n(665985),
    E = n(132841),
    b = n(155718),
    I = n(58149),
    N = n(587895),
    S = n(495273),
    x = n(845202),
    f = n(86944),
    O = n(915089),
    T = n(375499),
    _ = n(937773),
    v = n(770335),
    G = n(611371),
    U = n(219444),
    L = n(976860),
    M = n(233993),
    R = n(284738),
    y = n(841811),
    j = n(95701),
    D = n(734057),
    P = n(696451),
    w = n(71393),
    H = n(576705),
    k = n(994500),
    B = n(287809),
    V = n(147036),
    F = n(403362),
    Y = n(47167),
    X = n(409463),
    W = n(652215),
    q = n(737045),
    K = n(307731),
    Z = n(818348),
    z = n(985018),
    J = n(812618);
function $(e) {
    let { isNew: t, isBeta: n } = e,
        l = null;
    return (
        !0 === t
            ? (l = (0, i.jsx)(p.LpS, {
                  text: z.intl.string(z.t.psHMa6),
                  className: J.Ad,
                  color: g.A.colors.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER.css,
              }))
            : !0 === n && (l = (0, i.jsx)(G.A, { className: J.Ad })),
        l
    );
}
function Q(e) {
    let t,
        {
            transitionState: n,
            onClose: s,
            channelType: r,
            iconComponent: a,
            error: o,
            name: d,
            guildId: h,
            onBack: g,
            canSubmit: m,
            onMembersChange: A,
            pendingPermissionOverwrites: C,
        } = e,
        [E, b] = l.useState(""),
        [I, N] = l.useState({}),
        S = l.useRef(null),
        O = (0, c.bG)([w.A], () => w.A.getGuild(h)),
        T = r === W.rbe.GUILD_STAGE_VOICE,
        { roles: _, members: v, getRichTag: G } = (0, f.K)(O, null, T ? M.QY : (0, j.TA)(r), E, T),
        U = x.A.useSections({ roles: _, members: v });
    return (l.useEffect(() => {
        A(I);
    }, [I, A]),
    null == O)
        ? null
        : ((t =
              0 === Object.keys(C).length
                  ? z.intl.string(z.t["5Wxrcd"])
                  : r === W.rbe.GUILD_CATEGORY
                    ? z.intl.string(z.t["ISN+NM"])
                    : z.intl.string(z.t["fUYU+j"])),
          (0, i.jsx)(x.A.Provider, {
              listRef: S,
              query: E,
              setQuery: b,
              pendingAdditions: I,
              setPendingAdditions: N,
              roles: _,
              members: v,
              getRichTag: G,
              children: (0, i.jsx)(u.Modal, {
                  transitionState: n,
                  onClose: s,
                  title: T ? z.intl.string(z.t["S/6zHM"]) : z.intl.string(z.t.dMJ3Y6),
                  subtitle: { text: d, leadingIcon: a },
                  input: (0, i.jsxs)(i.Fragment, {
                      children: [
                          T
                              ? (0, i.jsx)(p.Text, {
                                    color: "text-default",
                                    className: J.h_,
                                    variant: "text-sm/normal",
                                    children: z.intl.string(z.t.f7VbhF),
                                })
                              : void 0,
                          (0, i.jsx)(x.A.SearchBox, { placeholderText: z.intl.string(z.t.iezLLn) }),
                          (0, i.jsx)(p.Text, {
                              className: J.pK,
                              variant: "text-xs/normal",
                              children: z.intl.string(z.t.rwFx85),
                          }),
                      ],
                  }),
                  preview: o,
                  listProps: {
                      sectionHeight: x.A.SECTION_HEIGHT,
                      renderSection: x.A.renderSection,
                      rowHeight: x.A.ROW_HEIGHT,
                      renderRow: x.A.renderRow,
                      sections: U,
                      innerAriaOrientation: "vertical",
                      innerRole: "listbox",
                  },
                  actions: [
                      { variant: "secondary", text: z.intl.string(z.t["13/7kX"]), onClick: g },
                      { variant: "primary", text: t, type: "submit", disabled: !m },
                  ],
              }),
          }));
}
function ee(e) {
    let { onEmojiPicked: t, guildId: n } = e,
        s = l.useRef(null),
        r = l.useMemo(
            () => ({
                popoutLocation: {
                    page: W.liQ.CREATE_CHANNEL_MODAL,
                    section: W.JJy.CHANNEL_NAME,
                    object: W.ZSU.EMOJI_PICKER_BUTTON,
                },
            }),
            [],
        ),
        a = l.useCallback(
            (e) => {
                let { closePopout: l } = e;
                return (0, i.jsx)(_.A, {
                    channel: null,
                    guildId: n,
                    pickerIntention: K.b_.NO_CUSTOM_EMOJI,
                    closePopout: l,
                    onNavigateAway: l,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        null != n && n.type === v.i.UNICODE && t(n.surrogates), i && l();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: r,
                });
            },
            [r, n, t],
        );
    return (0, i.jsx)(p.YNO, {
        targetElementRef: s,
        renderPopout: a,
        animation: p.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(T.A, {
                ...e,
                ref: s,
                active: n,
                className: J.Z8,
                tabIndex: 0,
                focusProps: { offset: { top: 10, bottom: 10, left: -4, right: 10 } },
            });
        },
    });
}
class et extends l.PureComponent {
    headerId = (0, O.Ld)();
    _input;
    constructor(e) {
        super(e);
        const { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        (this.state = {
            channelType: t ?? W.rbe.GUILD_TEXT,
            name: null != n ? (0, Y.m1)(n, B.default, k.A) : (i ?? ""),
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
    componentDidMount() {
        let { _input: e } = this;
        null != e && e.select();
        let { guildId: t, applications: n, canCreateStoreChannel: i } = this.props;
        i && null == n && A.A.fetchApplications(t),
            I.Ay.trackWithMetadata(W.HAw.OPEN_MODAL, { type: "Create Channel" });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelType === W.rbe.GUILD_ANNOUNCEMENT &&
            this.setState({ channelType: W.rbe.GUILD_TEXT }),
            !t.isPrivate &&
                this.state.isPrivate &&
                I.Ay.trackWithMetadata(W.HAw.OPEN_MODAL, { type: "Create Private Channel" });
    }
    getGuildId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.guildId;
    }
    setInputRef = (e) => {
        this._input = e;
    };
    handleNameChange = (e) => {
        let { channelType: t } = this.state;
        j.ZE.has(t) && (e = (0, V.an)(e));
        let n = this._input?.selectionStart ?? 0;
        this.setState({ name: e }, () => {
            this._input?.setSelectionRange(n, n);
        });
    };
    insertEmojiAtPosition = (e) => {
        let t = this._input?.selectionStart ?? 0,
            n = this._input?.selectionEnd ?? 0,
            i = this.state.name,
            l = i.substring(0, t) + e + i.substring(n);
        this.setState({ name: l }, () => {
            let n = t + e.length;
            this._input?.focus(), this._input?.setSelectionRange(n, n);
        });
    };
    handleTypeChange = (e) => {
        let { name: t } = this.state;
        j.ZE.has(e) && (t = (0, V.an)(t)),
            e === W.rbe.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
            this.setState({ channelType: e, name: t });
    };
    handlePrivacyChange = (e) => {
        this.setState({ isPrivate: e });
    };
    handleApplicationChange = (e) => {
        this.setState({ applicationId: e });
    };
    handleSKUChange = (e) => {
        this.setState({ skuId: e });
    };
    handleShowBranchesToggle = (e) => {
        this.setState({ showBranches: e, branchId: null });
    };
    handleBranchChange = (e) => {
        this.setState({ branchId: e });
    };
    handleHasBranchesChange = (e) => {
        this.setState({ hasBranches: e });
    };
    canSubmit() {
        let { canViewChannels: e, canConnect: t, transitionState: n } = this.props,
            { isPrivate: i, channelType: l, skuId: s, name: r, submitting: a } = this.state;
        return (
            !a &&
            n !== p.ip4.EXITING &&
            "" !== r &&
            "" !== r.trim() &&
            (!i || !!(0, S.n0)(l, e, t)) &&
            (l !== W.rbe.GUILD_STORE || null != s)
        );
    }
    handleSubmit = async (e) => {
        let t, n, i;
        e.preventDefault();
        let {
                cloneChannel: l,
                categoryId: s,
                user: r,
                memberRoleIds: a,
                isAdmin: o,
                onClose: d,
                owner: u,
            } = this.props,
            {
                name: c,
                pendingPermissionOverwrites: g,
                channelType: p,
                skuId: A,
                branchId: C,
                isPrivate: E,
            } = this.state,
            I = this.getGuildId();
        if (null != I) {
            if (null != l) (t = h().values(l.permissionOverwrites)), (n = l.bitrate), (i = l.userLimit);
            else if (p === W.rbe.GUILD_ANNOUNCEMENT) t = (0, V.IP)(I);
            else {
                if (E) {
                    t = (0, V.CG)(I, p, [], !0);
                    let e = (0, S.D4)(g, p);
                    e.length > 0 && (t = t.concat(e));
                    let n = null != u && r.id === u.id;
                    t.some((e) => a.has(e.id)) || o || n || t.push((0, V.n3)(r.id, p));
                }
                p === W.rbe.GUILD_STAGE_VOICE &&
                    ((t = []),
                    Object.values(g).forEach((e) => {
                        let { row: n } = e;
                        null != n.id &&
                            "" !== n.id &&
                            (n.rowType === q.T6.ROLE
                                ? t.push((0, y.j)(n.id, b.r2.ROLE))
                                : n.rowType === q.T6.MEMBER && t.push((0, y.j)(n.id, b.r2.MEMBER)));
                    }));
            }
            this.setState({ errors: {}, submitting: !0 });
            try {
                let e = await m.A.createChannel({
                    guildId: I,
                    type: p,
                    name: c,
                    permissionOverwrites: t,
                    bitrate: n,
                    userLimit: i,
                    parentId: p !== W.rbe.GUILD_CATEGORY ? s : null,
                    skuId: A,
                    branchId: C,
                });
                if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                let l = e.body;
                j.ZE.has(p) && (0, L.uh)(l.guild_id, l.id), this.setState({ submitting: !1 }), d();
            } catch (e) {
                null != e.body && "object" == typeof e.body
                    ? this.setState({ errors: e.body, submitting: !1 })
                    : this.setState({ errors: { message: z.intl.string(z.t.fEptJP) }, submitting: !1 });
            }
        }
    };
    getIconComponent() {
        let { isPrivate: e, channelType: t } = this.state;
        switch (t) {
            case W.rbe.GUILD_TEXT:
                return e ? p.I$d : p.N$i;
            case W.rbe.GUILD_FORUM:
                return p.bSJ;
            case W.rbe.GUILD_MEDIA:
                return p.xfq;
            case W.rbe.GUILD_VOICE:
                return e ? p.trU : p.HKD;
            case W.rbe.GUILD_STORE:
                return p.gqV;
            case W.rbe.GUILD_ANNOUNCEMENT:
                return p.koX;
            case W.rbe.GUILD_STAGE_VOICE:
                return p.qux;
            default:
                return (0, j.ke)(t) ? p.N$i : Z.FX;
        }
    }
    getHelperText() {
        let { cloneChannel: e, channelType: t, guildId: l } = this.props;
        return null != e
            ? z.intl.format(z.t.s2ZzZZ, { name: (0, Y.m1)(e, B.default, k.A, !0) })
            : t === W.rbe.GUILD_FORUM
              ? z.intl.format(z.t.tbVWyR, {
                    forumUpsellHook: (e, t) =>
                        (0, i.jsx)(
                            p.MzZ,
                            {
                                onClick: () =>
                                    (0, p.mMO)(async () => {
                                        let { default: e } = await n.e("7937").then(n.bind(n, 420472));
                                        return (t) => (0, i.jsx)(e, { ...t, guildId: l });
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
            { errors: n, channelType: l } = this.state;
        n?.name != null && (e = Array.isArray(n.name) ? n.name.join(", ") : n.name);
        let s = l === W.rbe.GUILD_CATEGORY,
            r = s ? z.intl.string(z.t.OCAkGP) : z.intl.string(z.t.PVbHDl),
            a = this.getIconComponent();
        return (0, i.jsx)(p.ksK, {
            label: r,
            helperText: this.getHelperText(),
            error: e,
            value: this.state.name,
            onChange: this.handleNameChange,
            inputRef: this.setInputRef,
            maxLength: 100,
            placeholder: (function (e) {
                switch (e) {
                    case W.rbe.GUILD_CATEGORY:
                        return z.intl.string(z.t.eTVbtx);
                    case W.rbe.GUILD_FORUM:
                        return z.intl.string(z.t["5z1Xat"]);
                    default:
                        return z.intl.string(z.t["bw/b8E"]);
                }
            })(l),
            leading: s ? void 0 : a,
            trailing: {
                type: "emoji",
                button: (0, i.jsx)(ee, {
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
                canCreateAnnouncementChannel: l,
                canCreateStageChannel: s,
                canCreateMediaChannel: r,
            } = this.props,
            { channelType: a, isPrivate: o } = this.state;
        if (null != e || a === W.rbe.GUILD_CATEGORY) return;
        let d = null != t && t.length > 0;
        return (0, i.jsx)(u.z6M, {
            label: z.intl.string(z.t["7ZcXG2"]),
            options: (function (e) {
                let {
                        isPrivate: t,
                        showStoreChannelOption: n,
                        showAnnouncementChannelOption: i,
                        canCreateStageChannel: l,
                        canCreateMediaChannel: s,
                    } = e,
                    r = [
                        {
                            leadingIcon: t ? p.I$d : p.N$i,
                            name: z.intl.string(z.t.pnuRXC),
                            value: W.rbe.GUILD_TEXT,
                            desc: z.intl.string(z.t["Hf5Lb+"]),
                        },
                        {
                            leadingIcon: t ? p.trU : p.HKD,
                            name: z.intl.string(z.t.Sx55Oh),
                            value: W.rbe.GUILD_VOICE,
                            desc: z.intl.string(z.t.pqfkoF),
                        },
                        {
                            leadingIcon: t ? p.QVg : p.bSJ,
                            name: z.intl.string(z.t.eAVID5),
                            value: W.rbe.GUILD_FORUM,
                            desc: z.intl.string(z.t.iZ5pgg),
                        },
                    ];
                return (
                    s &&
                        r.push({
                            leadingIcon: t ? p.cfi : p.xfq,
                            name: z.intl.string(z.t["6x6fVg"]),
                            value: W.rbe.GUILD_MEDIA,
                            desc: z.intl.string(z.t.JyCrwS),
                        }),
                    i &&
                        r.push({
                            leadingIcon: p.koX,
                            name: z.intl.string(z.t.qr9dEP),
                            value: W.rbe.GUILD_ANNOUNCEMENT,
                            desc: z.intl.string(z.t.gBkfzu),
                        }),
                    n &&
                        r.push({
                            leadingIcon: p.gqV,
                            name: z.intl.string(z.t.SxjkXf),
                            value: W.rbe.GUILD_STORE,
                            desc: z.intl.string(z.t.nmCPMC),
                        }),
                    l &&
                        r.push({
                            leadingIcon: p.qux,
                            name: z.intl.string(z.t.pNWst0),
                            value: W.rbe.GUILD_STAGE_VOICE,
                            desc: z.intl.string(z.t.VPAwgo),
                        }),
                    r
                );
            })({
                isPrivate: o,
                showStoreChannelOption: n && d,
                showAnnouncementChannelOption: l,
                canCreateStageChannel: s,
                canCreateMediaChannel: r,
            }),
            value: a,
            onChange: this.handleTypeChange,
        });
    }
    renderStoreOptions() {
        let { applications: e } = this.props,
            { applicationId: t, skuId: n, branchId: l, showBranches: s, hasBranches: r } = this.state;
        if (null == e || 0 === e.length) throw Error("Unexpected empty applications");
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(p.l6P, {
                    label: z.intl.string(z.t.vPIW2L),
                    options: e.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                    placeholder: z.intl.string(z.t["3XfCPX"]),
                    value: t,
                    onSelectionChange: this.handleApplicationChange,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                null != t
                    ? (0, i.jsx)(
                          E.A,
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
                null != t && r
                    ? (0, i.jsx)(p.dOG, {
                          label: z.intl.string(z.t["3e9mH5"]),
                          description: z.intl.format(z.t.UVXL1R, {
                              devPortalUrl: W.X7G.API_DOCS_GAME_AND_SERVER_MANAGEMENT,
                          }),
                          icon: p.RYV,
                          onChange: this.handleShowBranchesToggle,
                          checked: s,
                      })
                    : null,
                null != t
                    ? (0, i.jsx)("div", {
                          className: J.dE,
                          children: (0, i.jsx)(
                              C.A,
                              {
                                  label: s ? z.intl.string(z.t.o7DqF3) : void 0,
                                  applicationId: t,
                                  onChange: this.handleBranchChange,
                                  selectedBranchId: l,
                                  hide: !s,
                                  includeMaster: s,
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
        if (null != e || t === W.rbe.GUILD_ANNOUNCEMENT) return null;
        let l = t === W.rbe.GUILD_CATEGORY ? z.intl.string(z.t.lEPAZ5) : z.intl.string(z.t.aUI70g),
            s = t === W.rbe.GUILD_CATEGORY ? z.intl.string(z.t.RQUk61) : z.intl.string(z.t.YguuKq);
        return (0, i.jsx)(p.dOG, {
            label: l,
            description: s,
            icon: p.XAi,
            onChange: this.handlePrivacyChange,
            checked: n,
        });
    }
    renderError(e) {
        let t,
            { channelType: n, isPrivate: l, errors: s } = this.state,
            { canConnect: a, canViewChannels: o } = this.props;
        if (Object.values(s).length > 0) {
            if (null != s.message && "" !== s.message) t = s.message;
            else if (e || null == s.name) {
                let e = Object.values(s)[0];
                e.length > 0 && (t = e);
            }
        } else l && !(0, S.n0)(n, o, a) && (t = (0, S.ld)(n));
        if (null != t)
            return (0, i.jsx)("div", {
                className: r()(J.$5, { [J.SE]: e }),
                children: (0, i.jsx)(p.po8, { messageType: p.YCn.ERROR, children: t }),
            });
    }
    handlePermissionOverwriteChange(e) {
        this.setState({ pendingPermissionOverwrites: e });
    }
    renderCreateChannelModal() {
        let e,
            t,
            { channelType: n, isPrivate: l } = this.state,
            { guildId: s, transitionState: r, cloneChannel: a, categoryId: o, onClose: d, channelType: h } = this.props,
            c =
                null != a
                    ? z.intl.string(z.t.dEaPc4)
                    : n === W.rbe.GUILD_CATEGORY
                      ? z.intl.string(z.t["ISN+NM"])
                      : z.intl.string(z.t["fUYU+j"]);
        if (null != o) {
            let t = D.A.getChannel(o);
            e = z.intl.format(z.t.L1zJgb, { categoryName: t?.name ?? "" });
        }
        t = h === W.rbe.GUILD_CATEGORY ? z.intl.string(z.t["ISN+NM"]) : z.intl.string(z.t["fUYU+j"]);
        let g = l || n === W.rbe.GUILD_STAGE_VOICE;
        return (0, i.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, i.jsx)(u.Modal, {
                transitionState: r,
                onClose: d,
                title: c,
                subtitle: e,
                preview: this.renderError(),
                actions: [
                    { variant: "secondary", text: z.intl.string(z.t["ETE/oC"]), onClick: d },
                    g
                        ? {
                              variant: "primary",
                              text: z.intl.string(z.t.PDTjLN),
                              type: "button",
                              disabled: !this.canSubmit(),
                              onClick: () => {
                                  this.setState({ slide: "ADD_MEMBERS", errors: {} });
                              },
                          }
                        : { variant: "primary", type: "submit", disabled: !this.canSubmit(), text: t },
                ],
                children: (0, i.jsxs)("div", {
                    className: J.hM,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        h === W.rbe.GUILD_STORE ? this.renderStoreOptions() : null,
                        (0, i.jsx)(X.A, { guildId: s, channelType: n, className: J.wI }),
                        n === W.rbe.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions(),
                    ],
                }),
            }),
        });
    }
    renderAddMemberSlideContent() {
        let { name: e, channelType: t, pendingPermissionOverwrites: n } = this.state,
            { guildId: l, onClose: s, transitionState: r } = this.props,
            a = () => {
                this.setState({ slide: "CHANNEL_INFO" });
            },
            o = this.canSubmit();
        return (0, i.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, i.jsx)(Q, {
                onClose: s,
                transitionState: r,
                channelType: t,
                iconComponent: this.getIconComponent(),
                error: this.renderError(!0),
                name: e,
                guildId: l,
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
}
let en = l.forwardRef(function (e, t) {
    let { channelType: n, guildId: l, cloneChannelId: s } = e,
        r = (0, c.cf)([w.A, B.default, H.A, D.A, P.Ay], () => {
            let e = w.A.getGuild(l),
                t = B.default.getCurrentUser();
            o()(null != t, "CreateChannel: user cannot be undefined");
            let i = null != e && null != e.ownerId ? B.default.getUser(e.ownerId) : null,
                r = H.A.can(W.xBc.ADMINISTRATOR, e),
                a = D.A.getChannel(s);
            return {
                guild: e,
                canCreateStoreChannel: null != e && e.features.has(W.GuildFeatures.COMMERCE),
                canCreateAnnouncementChannel: null != e && e.features.has(W.GuildFeatures.NEWS),
                user: t,
                owner: i,
                memberRoles: P.Ay.getMember(l, t.id)?.roles ?? [],
                canViewChannels: H.A.can(W.xBc.VIEW_CHANNEL, e),
                canConnect: H.A.can(W.xBc.CONNECT, e),
                isAdmin: r,
                cloneChannel: a,
                channelType: a?.type ?? n,
                canManageRoles: H.A.can(W.xBc.MANAGE_ROLES, e),
                canManageChannels: H.A.can(W.xBc.MANAGE_CHANNELS, e),
            };
        }),
        a = (0, c.yK)([N.A], () =>
            N.A.getGuildApplicationIds(l)
                .map((e) => N.A.getApplication(e))
                .filter(F.Vq),
        ),
        d = new Set(r.memberRoles),
        { canManageRoles: h, canManageChannels: u } = r,
        g = (0, R.R)(l) && h && u,
        p = (0, U.Vf)(r?.guild);
    return (0, i.jsx)(et, {
        ...e,
        ...r,
        memberRoleIds: d,
        applications: a,
        canCreateStageChannel: g,
        canCreateMediaChannel: p,
        ref: t,
        width: 496,
    });
});
