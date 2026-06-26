n.d(t, { default: () => eX, p: () => eB }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    h = n(735438),
    d = n.n(h),
    u = n(434831),
    c = n(189213),
    g = n(773812),
    p = n(17928),
    m = n(661531),
    C = n(770880),
    E = n(276293),
    I = n(146151),
    A = n(983851),
    b = n(597050),
    N = n(56059),
    O = n(532590),
    S = n(191023),
    f = n(778492),
    _ = n(278416),
    T = n(451394),
    G = n(812993),
    v = n(834730),
    U = n(922016),
    L = n(231723),
    x = n(349288),
    M = n(192308),
    R = n(292666),
    D = n(691885),
    y = n(243721),
    j = n(530557),
    P = n(194261),
    w = n(512950),
    H = n(755584),
    k = n(66834),
    B = n(712963),
    V = n(228366);
let F = {};
class Y extends p.Ay.Store {
    static displayName = "ApplicationBranchStore";
    getBranches(e) {
        return F[e] ?? [];
    }
}
let X = new Y(V.h, {
    OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branches: n } = e;
        F[t] = n;
    },
    LOGOUT: function () {
        F = {};
    },
});
var W = n(375708);
class Z extends s.Component {
    static defaultProps = { includeMaster: !1 };
    componentDidMount() {
        let { applicationId: e, branches: t, onHasBranchesChange: n } = this.props;
        (0, B.w)(e), n?.(t.length > 0);
    }
    componentDidUpdate(e) {
        let { onHasBranchesChange: t, branches: n } = this.props,
            i = n.length > 0;
        null != t && i !== e.branches.length > 0 && t(i);
    }
    handleChange = (e) => {
        this.props.onChange(e);
    };
    render() {
        let { branches: e, selectedBranchId: t, applicationId: n, includeMaster: s, hide: l, label: r } = this.props;
        if (0 === e.length || l) return null;
        let a = s ? e : e.filter((e) => e.id !== n);
        return (0, i.jsx)(D.l, {
            label: r,
            options: a.map((e) => ({ id: e.id, label: e.getName(n), value: e.id })),
            placeholder: W.intl.string(W.t.Sw7pHF),
            value: t,
            onSelectionChange: this.handleChange,
            selectionMode: "single",
            fullWidth: !0,
        });
    }
}
let K = p.Ay.connectStores([X], (e) => {
    let { applicationId: t } = e;
    return { branches: X.getBranches(t) };
})(Z);
var q = n(830382),
    z = n(67480);
class J extends s.Component {
    componentDidMount() {
        let { applicationId: e, skus: t, selectedSkuId: n, onChange: i } = this.props;
        null == t || 0 === t.length ? (0, q.O1)(e, !1) : 1 === t.length && null == n && i(t[0].id);
    }
    componentDidUpdate() {
        let { skus: e, selectedSkuId: t, onChange: n } = this.props;
        null != e && 1 === e.length && null == t && n(e[0].id);
    }
    handleChange = (e) => {
        this.props.onChange(e);
    };
    render() {
        let { skus: e, selectedSkuId: t, label: n } = this.props,
            s = null != e && 0 === e.length;
        return (0, i.jsx)(D.l, {
            selectionMode: "single",
            label: n,
            options: null != e ? e.map((e) => ({ id: e.id, label: e.name, value: e.id })) : [],
            placeholder: s ? W.intl.string(W.t.hKcgP5) : W.intl.string(W.t.QV60Uq),
            value: t,
            onSelectionChange: this.handleChange,
            disabled: s,
        });
    }
}
let Q = p.Ay.connectStores([z.A], (e) => {
    let { applicationId: t } = e;
    return { skus: z.A.getForApplication(t) };
})(J);
var $ = n(155718),
    ee = n(95561),
    et = n(587895),
    en = n(495273),
    ei = n(517622),
    es = n(86944),
    el = n(915089),
    er = n(375499),
    ea = n(334295),
    eo = n(770335),
    eh = n(611371);
let ed = (0, n(945810).mj)({
    kind: "guild",
    name: "2026-06-game-invites-channel",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eu = n(807632),
    ec = n(219444),
    eg = n(976860),
    ep = n(233993),
    em = n(284738),
    eC = n(841811),
    eE = n(95701),
    eI = n(734057),
    eA = n(696451),
    eb = n(71393),
    eN = n(576705),
    eO = n(994500),
    eS = n(287809),
    ef = n(871237),
    e_ = n(403362),
    eT = n(47167),
    eG = n(280513),
    ev = n(837011),
    eU = n(90084),
    eL = n(975571),
    ex = n(652215);
function eM(e) {
    let { guildId: t, channelType: n, className: l } = e,
        { guildProfile: r, fetchGuildProfile: a, fetchStatus: o } = (0, eU.u)(t),
        h = o !== ev.X.FETCHED,
        d = null != r && eG.i.VISIBLE.has(r.visibility);
    s.useEffect(() => {
        a();
    }, [t, a]);
    let u = [];
    if (
        n === ex.rbe.GUILD_ANNOUNCEMENT &&
        (u.push(W.intl.format(W.t.tI7KNX, { documentationLink: eL.A.getArticleURL(ex.MVz.ANNOUNCEMENT_CHANNELS) })),
        !h && !d)
    ) {
        let e = W.intl.string(W.t["2Ab4Id"]);
        u.push(e);
    }
    return 0 === u.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: u.map((e, t) =>
                  (0, i.jsx)(v.E, { className: l, variant: "text-sm/normal", children: e }, `description-${t}`),
              ),
          });
}
var eR = n(746080),
    eD = n(719366),
    ey = n(307731),
    ej = n(818348),
    eP = n(559965),
    ew = n(565535);
let eH = "GAME_INVITES_CHANNEL_OPTION";
function ek(e) {
    return e === eH ? ex.rbe.GUILD_FORUM : e;
}
function eB(e) {
    let { isNew: t, isBeta: n } = e,
        s = null;
    return (
        !0 === t
            ? (s = (0, i.jsx)(G.Lp, {
                  text: W.intl.string(W.t.psHMa6),
                  className: ew.Ad,
                  color: m.A.colors.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER.css,
              }))
            : !0 === n && (s = (0, i.jsx)(eh.A, { className: ew.Ad })),
        s
    );
}
function eV(e) {
    let t,
        {
            transitionState: n,
            onClose: l,
            channelType: r,
            iconComponent: a,
            error: o,
            name: h,
            guildId: d,
            onBack: u,
            canSubmit: g,
            onMembersChange: m,
            pendingPermissionOverwrites: C,
        } = e,
        [E, I] = s.useState(""),
        [A, b] = s.useState({}),
        N = s.useRef(null),
        O = (0, p.bG)([eb.A], () => eb.A.getGuild(d)),
        S = r === ex.rbe.GUILD_STAGE_VOICE,
        { roles: f, members: _, getRichTag: T } = (0, es.K)(O, null, S ? ep.QY : (0, eE.TA)(r), E, S),
        G = ei.A.useSections({ roles: f, members: _ });
    return (s.useEffect(() => {
        m(A);
    }, [A, m]),
    null == O)
        ? null
        : ((t =
              0 === Object.keys(C).length
                  ? W.intl.string(W.t["5Wxrcd"])
                  : r === ex.rbe.GUILD_CATEGORY
                    ? W.intl.string(W.t["ISN+NM"])
                    : W.intl.string(W.t["fUYU+j"])),
          (0, i.jsx)(ei.A.Provider, {
              listRef: N,
              query: E,
              setQuery: I,
              pendingAdditions: A,
              setPendingAdditions: b,
              roles: f,
              members: _,
              getRichTag: T,
              children: (0, i.jsx)(c.Modal, {
                  transitionState: n,
                  onClose: l,
                  title: S ? W.intl.string(W.t["S/6zHM"]) : W.intl.string(W.t.dMJ3Y6),
                  subtitle: { text: h, leadingIcon: a },
                  input: (0, i.jsxs)(i.Fragment, {
                      children: [
                          S
                              ? (0, i.jsx)(v.E, {
                                    color: "text-default",
                                    className: ew.h_,
                                    variant: "text-sm/normal",
                                    children: W.intl.string(W.t.f7VbhF),
                                })
                              : void 0,
                          (0, i.jsx)(ei.A.SearchBox, { placeholderText: W.intl.string(W.t.iezLLn) }),
                          (0, i.jsx)(v.E, {
                              className: ew.pK,
                              variant: "text-xs/normal",
                              children: W.intl.string(W.t.rwFx85),
                          }),
                      ],
                  }),
                  preview: o,
                  listProps: {
                      sectionHeight: ei.A.SECTION_HEIGHT,
                      renderSection: ei.A.renderSection,
                      rowHeight: ei.A.ROW_HEIGHT,
                      renderRow: ei.A.renderRow,
                      sections: G,
                      innerAriaOrientation: "vertical",
                      innerRole: "listbox",
                  },
                  actions: [
                      { variant: "secondary", text: W.intl.string(W.t["13/7kX"]), onClick: u },
                      { variant: "primary", text: t, type: "submit", disabled: !g },
                  ],
              }),
          }));
}
function eF(e) {
    let { onEmojiPicked: t, guildId: n } = e,
        l = s.useRef(null),
        r = s.useMemo(
            () => ({
                popoutLocation: {
                    page: ex.liQ.CREATE_CHANNEL_MODAL,
                    section: ex.JJy.CHANNEL_NAME,
                    object: ex.ZSU.EMOJI_PICKER_BUTTON,
                },
            }),
            [],
        ),
        a = s.useCallback(
            (e) => {
                let { closePopout: s } = e;
                return (0, i.jsx)(ea.A, {
                    channel: null,
                    guildId: n,
                    pickerIntention: ey.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: s,
                    onNavigateAway: s,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        null != n && n.type === eo.i.UNICODE && t(n.surrogates), i && s();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: r,
                });
            },
            [r, n, t],
        );
    return (0, i.jsx)(U.Y, {
        targetElementRef: l,
        renderPopout: a,
        animation: U.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(er.A, {
                ...e,
                ref: l,
                active: n,
                className: ew.Z8,
                tabIndex: 0,
                focusProps: { offset: { top: 10, bottom: 10, left: -4, right: 10 } },
            });
        },
    });
}
class eY extends s.PureComponent {
    headerId = (0, el.Ld)();
    _input;
    constructor(e) {
        super(e);
        const { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        (this.state = {
            channelTypeOption: t ?? ex.rbe.GUILD_TEXT,
            name: null != n ? (0, eT.m1)(n, eS.default, eO.A) : (i ?? ""),
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
        i && null == n && k.A.fetchApplications(t),
            ee.Ay.trackWithMetadata(ex.HAw.OPEN_MODAL, { type: "Create Channel" });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelTypeOption === ex.rbe.GUILD_ANNOUNCEMENT &&
            this.setState({ channelTypeOption: ex.rbe.GUILD_TEXT }),
            !t.isPrivate &&
                this.state.isPrivate &&
                ee.Ay.trackWithMetadata(ex.HAw.OPEN_MODAL, { type: "Create Private Channel" });
    }
    getGuildId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.guildId;
    }
    setInputRef = (e) => {
        this._input = e;
    };
    handleNameChange = (e) => {
        let t = ek(this.state.channelTypeOption);
        eE.ZE.has(t) && (e = (0, ef.an)(e));
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
        let t = ek(e),
            { name: n } = this.state;
        eE.ZE.has(t) && (n = (0, ef.an)(n)),
            t === ex.rbe.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
            this.setState({ channelTypeOption: e, name: n });
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
            { isPrivate: i, channelTypeOption: s, skuId: l, name: r, submitting: a } = this.state,
            o = ek(s);
        return (
            !a &&
            n !== L.ip.EXITING &&
            "" !== r &&
            "" !== r.trim() &&
            (!i || !!(0, en.n0)(o, e, t)) &&
            (o !== ex.rbe.GUILD_STORE || null != l)
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
                onClose: h,
                owner: u,
            } = this.props,
            {
                name: c,
                pendingPermissionOverwrites: g,
                channelTypeOption: p,
                skuId: m,
                branchId: C,
                isPrivate: E,
            } = this.state,
            I = ek(p),
            A = p === eH ? eR.lx.IS_GAME_INVITES_CHANNEL : null,
            b = (function (e) {
                if (e === eH) return [{ name: eu.Dg }];
            })(p),
            N = this.getGuildId();
        if (null != N) {
            if (null != s) (t = d().values(s.permissionOverwrites)), (n = s.bitrate), (i = s.userLimit);
            else if (I === ex.rbe.GUILD_ANNOUNCEMENT) t = (0, ef.IP)(N);
            else {
                if (E) {
                    t = (0, ef.CG)(N, I, [], !0);
                    let e = (0, en.D4)(g, I);
                    e.length > 0 && (t = t.concat(e));
                    let n = null != u && r.id === u.id;
                    t.some((e) => a.has(e.id)) || o || n || t.push((0, ef.n3)(r.id, I));
                }
                I === ex.rbe.GUILD_STAGE_VOICE &&
                    ((t = []),
                    Object.values(g).forEach((e) => {
                        let { row: n } = e;
                        null != n.id &&
                            "" !== n.id &&
                            (n.rowType === eD.T6.ROLE
                                ? t.push((0, eC.j)(n.id, $.r2.ROLE))
                                : n.rowType === eD.T6.MEMBER && t.push((0, eC.j)(n.id, $.r2.MEMBER)));
                    }));
            }
            this.setState({ errors: {}, submitting: !0 });
            try {
                let e = await H.A.createChannel({
                    guildId: N,
                    type: I,
                    name: c,
                    permissionOverwrites: t,
                    bitrate: n,
                    userLimit: i,
                    parentId: I !== ex.rbe.GUILD_CATEGORY ? l : null,
                    skuId: m,
                    branchId: C,
                    flags: A,
                    availableTags: b,
                });
                if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                let s = e.body;
                eE.ZE.has(I) && (0, eg.uh)(s.guild_id, s.id), this.setState({ submitting: !1 }), h();
            } catch (e) {
                null != e.body && "object" == typeof e.body
                    ? this.setState({ errors: e.body, submitting: !1 })
                    : this.setState({ errors: { message: W.intl.string(W.t.fEptJP) }, submitting: !1 });
            }
        }
    };
    getIconComponent() {
        let { isPrivate: e, channelTypeOption: t } = this.state;
        switch (t) {
            case ex.rbe.GUILD_TEXT:
                return e ? C.I : E.N;
            case ex.rbe.GUILD_FORUM:
                return N.b;
            case ex.rbe.GUILD_MEDIA:
                return S.x;
            case ex.rbe.GUILD_VOICE:
                return e ? I.t : A.H;
            case ex.rbe.GUILD_STORE:
                return _.g;
            case ex.rbe.GUILD_ANNOUNCEMENT:
                return f.k;
            case ex.rbe.GUILD_STAGE_VOICE:
                return T.q;
            case eH:
                return u.t;
            default:
                let n = ek(t);
                return (0, eE.ke)(n) ? E.N : ej.FX;
        }
    }
    getHelperText() {
        let { cloneChannel: e, channelType: t, guildId: s } = this.props;
        return null != e
            ? W.intl.format(W.t.s2ZzZZ, { name: (0, eT.m1)(e, eS.default, eO.A, !0) })
            : t === ex.rbe.GUILD_FORUM
              ? W.intl.format(W.t.tbVWyR, {
                    forumUpsellHook: (e, t) =>
                        (0, i.jsx)(
                            x.Anchor,
                            {
                                onClick: () =>
                                    (0, M.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e("81567"), n.e("90052")]).then(
                                            n.bind(n, 653682),
                                        );
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
            { errors: n, channelTypeOption: s } = this.state,
            l = ek(s);
        n?.name != null && (e = Array.isArray(n.name) ? n.name.join(", ") : n.name);
        let r = l === ex.rbe.GUILD_CATEGORY,
            a = r ? W.intl.string(W.t.OCAkGP) : W.intl.string(W.t.PVbHDl),
            o = this.getIconComponent();
        return (0, i.jsx)(R.k, {
            label: a,
            helperText: this.getHelperText(),
            error: e,
            value: this.state.name,
            onChange: this.handleNameChange,
            inputRef: this.setInputRef,
            maxLength: 100,
            placeholder: (function (e) {
                switch (e) {
                    case ex.rbe.GUILD_CATEGORY:
                        return W.intl.string(W.t.eTVbtx);
                    case ex.rbe.GUILD_FORUM:
                        return W.intl.string(W.t["5z1Xat"]);
                    default:
                        return W.intl.string(W.t["bw/b8E"]);
                }
            })(s),
            leading: r ? void 0 : o,
            trailing: {
                type: "emoji",
                button: (0, i.jsx)(eF, {
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
                canCreateGameInvitesChannel: a,
            } = this.props,
            { channelTypeOption: o, isPrivate: h } = this.state;
        if (null != e || o === ex.rbe.GUILD_CATEGORY) return;
        let d = null != t && t.length > 0;
        return (0, i.jsx)(g.z, {
            label: W.intl.string(W.t["7ZcXG2"]),
            options: (function (e) {
                let {
                        isPrivate: t,
                        showStoreChannelOption: n,
                        showAnnouncementChannelOption: i,
                        canCreateStageChannel: s,
                        canCreateMediaChannel: l,
                        canCreateGameInvitesChannel: r,
                    } = e,
                    a = [
                        {
                            leadingIcon: t ? C.I : E.N,
                            name: W.intl.string(W.t.pnuRXC),
                            value: ex.rbe.GUILD_TEXT,
                            desc: W.intl.string(W.t["Hf5Lb+"]),
                        },
                        {
                            leadingIcon: t ? I.t : A.H,
                            name: W.intl.string(W.t.Sx55Oh),
                            value: ex.rbe.GUILD_VOICE,
                            desc: W.intl.string(W.t.pqfkoF),
                        },
                        {
                            leadingIcon: t ? b.Q : N.b,
                            name: W.intl.string(W.t.eAVID5),
                            value: ex.rbe.GUILD_FORUM,
                            desc: W.intl.string(W.t.iZ5pgg),
                        },
                    ];
                return (
                    r &&
                        a.push({
                            leadingIcon: u.t,
                            name: W.intl.string(eP.default["h/GwWL"]),
                            value: eH,
                            desc: W.intl.string(eP.default.DxwBMf),
                        }),
                    l &&
                        a.push({
                            leadingIcon: t ? O.c : S.x,
                            name: W.intl.string(W.t["6x6fVg"]),
                            value: ex.rbe.GUILD_MEDIA,
                            desc: W.intl.string(W.t.JyCrwS),
                        }),
                    i &&
                        a.push({
                            leadingIcon: f.k,
                            name: W.intl.string(W.t.qr9dEP),
                            value: ex.rbe.GUILD_ANNOUNCEMENT,
                            desc: W.intl.string(W.t.gBkfzu),
                        }),
                    n &&
                        a.push({
                            leadingIcon: _.g,
                            name: W.intl.string(W.t.SxjkXf),
                            value: ex.rbe.GUILD_STORE,
                            desc: W.intl.string(W.t.nmCPMC),
                        }),
                    s &&
                        a.push({
                            leadingIcon: T.q,
                            name: W.intl.string(W.t.pNWst0),
                            value: ex.rbe.GUILD_STAGE_VOICE,
                            desc: W.intl.string(W.t.VPAwgo),
                        }),
                    a
                );
            })({
                isPrivate: h,
                showStoreChannelOption: n && d,
                showAnnouncementChannelOption: s,
                canCreateStageChannel: l,
                canCreateMediaChannel: r,
                canCreateGameInvitesChannel: a,
            }),
            value: o,
            onChange: this.handleTypeChange,
        });
    }
    renderStoreOptions() {
        let { applications: e } = this.props,
            { applicationId: t, skuId: n, branchId: s, showBranches: l, hasBranches: r } = this.state;
        if (null == e || 0 === e.length) throw Error("Unexpected empty applications");
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(D.l, {
                    label: W.intl.string(W.t.vPIW2L),
                    options: e.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                    placeholder: W.intl.string(W.t["3XfCPX"]),
                    value: t,
                    onSelectionChange: this.handleApplicationChange,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                null != t
                    ? (0, i.jsx)(
                          Q,
                          {
                              label: W.intl.string(W.t.XNIWFj),
                              applicationId: t,
                              onChange: this.handleSKUChange,
                              selectedSkuId: n,
                              className: ew.dE,
                          },
                          t,
                      )
                    : null,
                null != t && r
                    ? (0, i.jsx)(y.d, {
                          label: W.intl.string(W.t["3e9mH5"]),
                          description: W.intl.format(W.t.UVXL1R, {
                              devPortalUrl: ex.X7G.API_DOCS_GAME_AND_SERVER_MANAGEMENT,
                          }),
                          icon: j.R,
                          onChange: this.handleShowBranchesToggle,
                          checked: l,
                      })
                    : null,
                null != t
                    ? (0, i.jsx)("div", {
                          className: ew.dE,
                          children: (0, i.jsx)(
                              K,
                              {
                                  label: l ? W.intl.string(W.t.o7DqF3) : void 0,
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
            { channelTypeOption: t, isPrivate: n } = this.state;
        if (null != e || t === ex.rbe.GUILD_ANNOUNCEMENT) return null;
        let s = t === ex.rbe.GUILD_CATEGORY ? W.intl.string(W.t.lEPAZ5) : W.intl.string(W.t.aUI70g),
            l = t === ex.rbe.GUILD_CATEGORY ? W.intl.string(W.t.RQUk61) : W.intl.string(W.t.YguuKq);
        return (0, i.jsx)(y.d, { label: s, description: l, icon: P.X, onChange: this.handlePrivacyChange, checked: n });
    }
    renderError(e) {
        let t,
            { channelTypeOption: n, isPrivate: s, errors: l } = this.state,
            a = ek(n),
            { canConnect: o, canViewChannels: h } = this.props;
        if (Object.values(l).length > 0) {
            if (null != l.message && "" !== l.message) t = l.message;
            else if (e || null == l.name) {
                let e = Object.values(l)[0];
                e.length > 0 && (t = e);
            }
        } else s && !(0, en.n0)(a, h, o) && (t = (0, en.ld)(a));
        if (null != t)
            return (0, i.jsx)("div", {
                className: r()(ew.$5, { [ew.SE]: e }),
                children: (0, i.jsx)(w.p, { messageType: w.Y.ERROR, children: t }),
            });
    }
    handlePermissionOverwriteChange(e) {
        this.setState({ pendingPermissionOverwrites: e });
    }
    renderCreateChannelModal() {
        let e,
            t,
            { channelTypeOption: n, isPrivate: s } = this.state,
            l = ek(n),
            { guildId: r, transitionState: a, cloneChannel: o, categoryId: h, onClose: d, channelType: u } = this.props,
            g =
                null != o
                    ? W.intl.string(W.t.dEaPc4)
                    : l === ex.rbe.GUILD_CATEGORY
                      ? W.intl.string(W.t["ISN+NM"])
                      : W.intl.string(W.t["fUYU+j"]);
        if (null != h) {
            let t = eI.A.getChannel(h);
            e = W.intl.format(W.t.L1zJgb, { categoryName: t?.name ?? "" });
        }
        t = u === ex.rbe.GUILD_CATEGORY ? W.intl.string(W.t["ISN+NM"]) : W.intl.string(W.t["fUYU+j"]);
        let p = s || l === ex.rbe.GUILD_STAGE_VOICE;
        return (0, i.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, i.jsx)(c.Modal, {
                transitionState: a,
                onClose: d,
                title: g,
                subtitle: e,
                preview: this.renderError(),
                actions: [
                    { variant: "secondary", text: W.intl.string(W.t["ETE/oC"]), onClick: d },
                    p
                        ? {
                              variant: "primary",
                              text: W.intl.string(W.t.PDTjLN),
                              type: "button",
                              disabled: !this.canSubmit(),
                              onClick: () => {
                                  this.setState({ slide: "ADD_MEMBERS", errors: {} });
                              },
                          }
                        : { variant: "primary", type: "submit", disabled: !this.canSubmit(), text: t },
                ],
                children: (0, i.jsxs)("div", {
                    className: ew.hM,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        u === ex.rbe.GUILD_STORE ? this.renderStoreOptions() : null,
                        (0, i.jsx)(eM, { guildId: r, channelType: l, className: ew.wI }),
                        l === ex.rbe.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions(),
                    ],
                }),
            }),
        });
    }
    renderAddMemberSlideContent() {
        let { name: e, channelTypeOption: t, pendingPermissionOverwrites: n } = this.state,
            { guildId: s, onClose: l, transitionState: r } = this.props,
            a = () => {
                this.setState({ slide: "CHANNEL_INFO" });
            },
            o = this.canSubmit();
        return (0, i.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, i.jsx)(eV, {
                onClose: l,
                transitionState: r,
                channelType: ek(t),
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
let eX = s.forwardRef(function (e, t) {
    let { channelType: n, guildId: s, cloneChannelId: l } = e,
        r = (0, p.cf)([eb.A, eS.default, eN.A, eI.A, eA.Ay], () => {
            let e = eb.A.getGuild(s),
                t = eS.default.getCurrentUser();
            o()(null != t, "CreateChannel: user cannot be undefined");
            let i = null != e && null != e.ownerId ? eS.default.getUser(e.ownerId) : null,
                r = eN.A.can(ex.xBc.ADMINISTRATOR, e),
                a = eI.A.getChannel(l);
            return {
                guild: e,
                canCreateStoreChannel: null != e && e.features.has(ex.GuildFeatures.COMMERCE),
                canCreateAnnouncementChannel: null != e && e.features.has(ex.GuildFeatures.NEWS),
                user: t,
                owner: i,
                memberRoles: eA.Ay.getMember(s, t.id)?.roles ?? [],
                canViewChannels: eN.A.can(ex.xBc.VIEW_CHANNEL, e),
                canConnect: eN.A.can(ex.xBc.CONNECT, e),
                isAdmin: r,
                cloneChannel: a,
                channelType: a?.type ?? n,
                canManageRoles: eN.A.can(ex.xBc.MANAGE_ROLES, e),
                canManageChannels: eN.A.can(ex.xBc.MANAGE_CHANNELS, e),
            };
        }),
        a = (0, p.yK)([et.A], () =>
            et.A.getGuildApplicationIds(s)
                .map((e) => et.A.getApplication(e))
                .filter(e_.Vq),
        ),
        h = new Set(r.memberRoles),
        { canManageRoles: d, canManageChannels: u } = r,
        c = (0, em.R)(s) && d && u,
        g = (0, ec.V)(r?.guild),
        m = ed.useConfig({ guildId: s, location: "CreateChannel" }).enabled;
    return (0, i.jsx)(eY, {
        ...e,
        ...r,
        memberRoleIds: h,
        applications: a,
        canCreateStageChannel: c,
        canCreateMediaChannel: g,
        canCreateGameInvitesChannel: m,
        ref: t,
        width: 496,
    });
});
