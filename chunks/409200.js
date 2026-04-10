n.d(t, { default: () => en, p: () => $ }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
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
    I = n(155718),
    b = n(58149),
    N = n(587895),
    S = n(495273),
    O = n(845202),
    x = n(86944),
    f = n(915089),
    T = n(375499),
    _ = n(937773),
    G = n(770335),
    v = n(611371),
    U = n(219444),
    L = n(976860),
    R = n(233993),
    M = n(284738),
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
    J = n(786415);
function $(e) {
    let { isNew: t, isBeta: n } = e,
        s = null;
    return (
        !0 === t
            ? (s = (0, i.jsx)(p.LpS, {
                  text: z.intl.string(z.t.psHMa6),
                  className: J.Ad,
                  color: g.A.colors.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER.css,
              }))
            : !0 === n && (s = (0, i.jsx)(v.A, { className: J.Ad })),
        s
    );
}
function Q(e) {
    let t,
        {
            transitionState: n,
            onClose: l,
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
        [E, I] = s.useState(""),
        [b, N] = s.useState({}),
        S = s.useRef(null),
        f = (0, c.bG)([w.A], () => w.A.getGuild(h)),
        T = r === W.rbe.GUILD_STAGE_VOICE,
        { roles: _, members: G, getRichTag: v } = (0, x.K)(f, null, T ? R.QY : (0, j.TA)(r), E, T),
        U = O.A.useSections({ roles: _, members: G });
    return (s.useEffect(() => {
        A(b);
    }, [b, A]),
    null == f)
        ? null
        : ((t =
              0 === Object.keys(C).length
                  ? z.intl.string(z.t["5Wxrcd"])
                  : r === W.rbe.GUILD_CATEGORY
                    ? z.intl.string(z.t["ISN+NM"])
                    : z.intl.string(z.t["fUYU+j"])),
          (0, i.jsx)(O.A.Provider, {
              listRef: S,
              query: E,
              setQuery: I,
              pendingAdditions: b,
              setPendingAdditions: N,
              roles: _,
              members: G,
              getRichTag: v,
              children: (0, i.jsx)(u.Modal, {
                  transitionState: n,
                  onClose: l,
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
                          (0, i.jsx)(O.A.SearchBox, { placeholderText: z.intl.string(z.t.iezLLn) }),
                          (0, i.jsx)(p.Text, {
                              className: J.pK,
                              variant: "text-xs/normal",
                              children: z.intl.string(z.t.rwFx85),
                          }),
                      ],
                  }),
                  preview: o,
                  listProps: {
                      sectionHeight: O.A.SECTION_HEIGHT,
                      renderSection: O.A.renderSection,
                      rowHeight: O.A.ROW_HEIGHT,
                      renderRow: O.A.renderRow,
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
        l = s.useRef(null),
        r = s.useMemo(
            () => ({
                popoutLocation: {
                    page: W.liQ.CREATE_CHANNEL_MODAL,
                    section: W.JJy.CHANNEL_NAME,
                    object: W.ZSU.EMOJI_PICKER_BUTTON,
                },
            }),
            [],
        ),
        a = s.useCallback(
            (e) => {
                let { closePopout: s } = e;
                return (0, i.jsx)(_.A, {
                    channel: null,
                    guildId: n,
                    pickerIntention: K.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: s,
                    onNavigateAway: s,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        null != n && n.type === G.i.UNICODE && t(n.surrogates), i && s();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: r,
                });
            },
            [r, n, t],
        );
    return (0, i.jsx)(p.YNO, {
        targetElementRef: l,
        renderPopout: a,
        animation: p.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(T.A, {
                ...e,
                ref: l,
                active: n,
                className: J.Z8,
                tabIndex: 0,
                focusProps: { offset: { top: 10, bottom: 10, left: -4, right: 10 } },
            });
        },
    });
}
class et extends s.PureComponent {
    headerId = (0, f.Ld)();
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
            b.Ay.trackWithMetadata(W.HAw.OPEN_MODAL, { type: "Create Channel" });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelType === W.rbe.GUILD_ANNOUNCEMENT &&
            this.setState({ channelType: W.rbe.GUILD_TEXT }),
            !t.isPrivate &&
                this.state.isPrivate &&
                b.Ay.trackWithMetadata(W.HAw.OPEN_MODAL, { type: "Create Private Channel" });
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
            s = i.substring(0, t) + e + i.substring(n);
        this.setState({ name: s }, () => {
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
            { isPrivate: i, channelType: s, skuId: l, name: r, submitting: a } = this.state;
        return (
            !a &&
            n !== p.ip4.EXITING &&
            "" !== r &&
            "" !== r.trim() &&
            (!i || !!(0, S.n0)(s, e, t)) &&
            (s !== W.rbe.GUILD_STORE || null != l)
        );
    }
    handleSubmit = async (e) => {
        let t, n, i;
        e.preventDefault();
        let {
                cloneChannel: s,
                categoryId: l,
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
            b = this.getGuildId();
        if (null != b) {
            if (null != s) (t = h().values(s.permissionOverwrites)), (n = s.bitrate), (i = s.userLimit);
            else if (p === W.rbe.GUILD_ANNOUNCEMENT) t = (0, V.IP)(b);
            else {
                if (E) {
                    t = (0, V.CG)(b, p, [], !0);
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
                                ? t.push((0, y.j)(n.id, I.r2.ROLE))
                                : n.rowType === q.T6.MEMBER && t.push((0, y.j)(n.id, I.r2.MEMBER)));
                    }));
            }
            this.setState({ errors: {}, submitting: !0 });
            try {
                let e = await m.A.createChannel({
                    guildId: b,
                    type: p,
                    name: c,
                    permissionOverwrites: t,
                    bitrate: n,
                    userLimit: i,
                    parentId: p !== W.rbe.GUILD_CATEGORY ? l : null,
                    skuId: A,
                    branchId: C,
                });
                if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                let s = e.body;
                j.ZE.has(p) && (0, L.uh)(s.guild_id, s.id), this.setState({ submitting: !1 }), d();
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
        let { cloneChannel: e, channelType: t, guildId: s } = this.props;
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
                                        return (t) => (0, i.jsx)(e, { ...t, guildId: s });
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
            { errors: n, channelType: s } = this.state;
        n?.name != null && (e = Array.isArray(n.name) ? n.name.join(", ") : n.name);
        let l = s === W.rbe.GUILD_CATEGORY,
            r = l ? z.intl.string(z.t.OCAkGP) : z.intl.string(z.t.PVbHDl),
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
            })(s),
            leading: l ? void 0 : a,
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
                canCreateAnnouncementChannel: s,
                canCreateStageChannel: l,
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
                        canCreateStageChannel: s,
                        canCreateMediaChannel: l,
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
                    l &&
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
                    s &&
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
                showAnnouncementChannelOption: s,
                canCreateStageChannel: l,
                canCreateMediaChannel: r,
            }),
            value: a,
            onChange: this.handleTypeChange,
        });
    }
    renderStoreOptions() {
        let { applications: e } = this.props,
            { applicationId: t, skuId: n, branchId: s, showBranches: l, hasBranches: r } = this.state;
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
                          checked: l,
                      })
                    : null,
                null != t
                    ? (0, i.jsx)("div", {
                          className: J.dE,
                          children: (0, i.jsx)(
                              C.A,
                              {
                                  label: l ? z.intl.string(z.t.o7DqF3) : void 0,
                                  applicationId: t,
                                  onChange: this.handleBranchChange,
                                  selectedBranchId: s,
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
        if (null != e || t === W.rbe.GUILD_ANNOUNCEMENT) return null;
        let s = t === W.rbe.GUILD_CATEGORY ? z.intl.string(z.t.lEPAZ5) : z.intl.string(z.t.aUI70g),
            l = t === W.rbe.GUILD_CATEGORY ? z.intl.string(z.t.RQUk61) : z.intl.string(z.t.YguuKq);
        return (0, i.jsx)(p.dOG, {
            label: s,
            description: l,
            icon: p.XAi,
            onChange: this.handlePrivacyChange,
            checked: n,
        });
    }
    renderError(e) {
        let t,
            { channelType: n, isPrivate: s, errors: l } = this.state,
            { canConnect: a, canViewChannels: o } = this.props;
        if (Object.values(l).length > 0) {
            if (null != l.message && "" !== l.message) t = l.message;
            else if (e || null == l.name) {
                let e = Object.values(l)[0];
                e.length > 0 && (t = e);
            }
        } else s && !(0, S.n0)(n, o, a) && (t = (0, S.ld)(n));
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
            { channelType: n, isPrivate: s } = this.state,
            { guildId: l, transitionState: r, cloneChannel: a, categoryId: o, onClose: d, channelType: h } = this.props,
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
        let g = s || n === W.rbe.GUILD_STAGE_VOICE;
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
                        (0, i.jsx)(X.A, { guildId: l, channelType: n, className: J.wI }),
                        n === W.rbe.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions(),
                    ],
                }),
            }),
        });
    }
    renderAddMemberSlideContent() {
        let { name: e, channelType: t, pendingPermissionOverwrites: n } = this.state,
            { guildId: s, onClose: l, transitionState: r } = this.props,
            a = () => {
                this.setState({ slide: "CHANNEL_INFO" });
            },
            o = this.canSubmit();
        return (0, i.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, i.jsx)(Q, {
                onClose: l,
                transitionState: r,
                channelType: t,
                iconComponent: this.getIconComponent(),
                error: this.renderError(!0),
                name: e,
                guildId: s,
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
let en = s.forwardRef(function (e, t) {
    let { channelType: n, guildId: s, cloneChannelId: l } = e,
        r = (0, c.cf)([w.A, B.default, H.A, D.A, P.Ay], () => {
            let e = w.A.getGuild(s),
                t = B.default.getCurrentUser();
            o()(null != t, "CreateChannel: user cannot be undefined");
            let i = null != e && null != e.ownerId ? B.default.getUser(e.ownerId) : null,
                r = H.A.can(W.xBc.ADMINISTRATOR, e),
                a = D.A.getChannel(l);
            return {
                guild: e,
                canCreateStoreChannel: null != e && e.features.has(W.GuildFeatures.COMMERCE),
                canCreateAnnouncementChannel: null != e && e.features.has(W.GuildFeatures.NEWS),
                user: t,
                owner: i,
                memberRoles: P.Ay.getMember(s, t.id)?.roles ?? [],
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
            N.A.getGuildApplicationIds(s)
                .map((e) => N.A.getApplication(e))
                .filter(F.Vq),
        ),
        d = new Set(r.memberRoles),
        { canManageRoles: h, canManageChannels: u } = r,
        g = (0, M.R)(s) && h && u,
        p = (0, U.V)(r?.guild);
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
