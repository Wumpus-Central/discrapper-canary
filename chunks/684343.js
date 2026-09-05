n.d(t, { default: () => e5, p: () => eJ }), n(321073);
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(435558),
    h = n.n(d),
    u = n(649852),
    c = n.n(u),
    g = n(434831),
    p = n(189213),
    m = n(144228),
    C = n(17928),
    I = n(661531),
    A = n(770880),
    E = n(276293),
    b = n(146151),
    N = n(983851),
    O = n(597050),
    S = n(56059),
    f = n(532590),
    _ = n(191023),
    G = n(778492),
    L = n(278416),
    v = n(451394),
    T = n(901117),
    U = n(323384),
    M = n(812993),
    x = n(834730),
    D = n(922016),
    R = n(231723),
    y = n(28863),
    P = n(192308),
    j = n(95477),
    w = n(691885),
    k = n(243721),
    H = n(530557),
    B = n(890497),
    V = n(194261),
    F = n(512950),
    Y = n(755584),
    X = n(66834),
    W = n(712963),
    Z = n(228366);
let z = {};
class K extends C.Ay.Store {
    static displayName = "ApplicationBranchStore";
    getBranches(e) {
        return z[e] ?? [];
    }
}
let Q = new K(Z.h, {
    OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branches: n } = e;
        z[t] = n;
    },
    LOGOUT: function () {
        z = {};
    },
});
var q = n(375708);
class J extends l.Component {
    static defaultProps = { includeMaster: !1 };
    componentDidMount() {
        let { applicationId: e, branches: t, onHasBranchesChange: n } = this.props;
        (0, W.w)(e), n?.(t.length > 0);
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
        let { branches: e, selectedBranchId: t, applicationId: n, includeMaster: l, hide: s, label: a } = this.props;
        if (0 === e.length || s) return null;
        let r = l ? e : e.filter((e) => e.id !== n);
        return (0, i.jsx)(w.l, {
            label: a,
            options: r.map((e) => ({ id: e.id, label: e.getName(n), value: e.id })),
            placeholder: q.intl.string(q.t.Sw7pHF),
            value: t,
            onSelectionChange: this.handleChange,
            selectionMode: "single",
            fullWidth: !0,
        });
    }
}
let $ = C.Ay.connectStores([Q], (e) => {
    let { applicationId: t } = e;
    return { branches: Q.getBranches(t) };
})(J);
var ee = n(830382),
    et = n(67480);
class en extends l.Component {
    componentDidMount() {
        let { applicationId: e, skus: t, selectedSkuId: n, onChange: i } = this.props;
        null == t || 0 === t.length ? (0, ee.O1)(e, !1) : 1 === t.length && null == n && i(t[0].id);
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
            l = null != e && 0 === e.length;
        return (0, i.jsx)(w.l, {
            selectionMode: "single",
            label: n,
            options: null != e ? e.map((e) => ({ id: e.id, label: e.name, value: e.id })) : [],
            placeholder: l ? q.intl.string(q.t.hKcgP5) : q.intl.string(q.t.QV60Uq),
            value: t,
            onSelectionChange: this.handleChange,
            disabled: l,
        });
    }
}
let ei = C.Ay.connectStores([et.A], (e) => {
    let { applicationId: t } = e;
    return { skus: et.A.getForApplication(t) };
})(en);
var el = n(155718),
    es = n(95561),
    ea = n(945810);
let er = (0, ea.mj)({
    kind: "guild",
    name: "2026-07-app-channels",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eo = n(627807),
    ed = n(587895),
    eh = n(495273),
    eu = n(517622),
    ec = n(86944),
    eg = n(915089),
    ep = n(375499),
    em = n(267889),
    eC = n(770335),
    eI = n(611371),
    eA = n(769015);
let eE = (0, ea.mj)({
    kind: "guild",
    name: "2026-06-game-invites-channel",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eb = n(807632),
    eN = n(471677),
    eO = n(219444),
    eS = n(976860),
    ef = n(233993),
    e_ = n(284738),
    eG = n(841811),
    eL = n(95701),
    ev = n(734057),
    eT = n(696451),
    eU = n(71393),
    eM = n(576705),
    ex = n(994500),
    eD = n(287809),
    eR = n(147036),
    ey = n(403362),
    eP = n(965805),
    ej = n(47167),
    ew = n(280513),
    ek = n(837011),
    eH = n(90084),
    eB = n(975571),
    eV = n(652215);
function eF(e) {
    let { guildId: t, channelType: n, className: s } = e,
        { guildProfile: a, fetchGuildProfile: r, fetchStatus: o } = (0, eH.u)(t),
        d = o !== ek.X.FETCHED,
        h = null != a && ew.i.VISIBLE.has(a.visibility);
    l.useEffect(() => {
        r();
    }, [t, r]);
    let u = [];
    if (
        n === eV.rbe.GUILD_ANNOUNCEMENT &&
        (u.push(q.intl.format(q.t.tI7KNX, { documentationLink: eB.A.getArticleURL(eV.MVz.ANNOUNCEMENT_CHANNELS) })),
        !d && !h)
    ) {
        let e = q.intl.string(q.t["2Ab4Id"]);
        u.push(e);
    }
    return 0 === u.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: u.map((e, t) =>
                  (0, i.jsx)(x.E, { className: s, variant: "text-sm/normal", children: e }, `description-${t}`),
              ),
          });
}
var eY = n(746080),
    eX = n(719366),
    eW = n(307731),
    eZ = n(818348),
    ez = n(490094),
    eK = n(236048);
let eQ = "GAME_INVITES_CHANNEL_OPTION";
function eq(e) {
    return e === eQ ? eV.rbe.GUILD_FORUM : e;
}
function eJ(e) {
    let { isNew: t, isBeta: n } = e,
        l = null;
    return (
        !0 === t
            ? (l = (0, i.jsx)(M.Lp, {
                  text: q.intl.string(q.t.psHMa6),
                  className: eK.Ad,
                  color: I.A.colors.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER.css,
              }))
            : !0 === n && (l = (0, i.jsx)(eI.A, { className: eK.Ad })),
        l
    );
}
function e$(e) {
    let t,
        {
            transitionState: n,
            onClose: s,
            channelType: a,
            iconComponent: r,
            error: o,
            name: d,
            guildId: h,
            onBack: u,
            canSubmit: c,
            onMembersChange: g,
            pendingPermissionOverwrites: m,
        } = e,
        [I, A] = l.useState(""),
        [E, b] = l.useState({}),
        N = l.useRef(null),
        O = (0, C.bG)([eU.A], () => eU.A.getGuild(h)),
        S = a === eV.rbe.GUILD_STAGE_VOICE,
        { roles: f, members: _, getRichTag: G } = (0, ec.K)(O, null, S ? ef.QY : (0, eL.TA)(a), I, S),
        L = eu.A.useSections({ roles: f, members: _ });
    return (l.useEffect(() => {
        g(E);
    }, [E, g]),
    null == O)
        ? null
        : ((t =
              0 === Object.keys(m).length
                  ? q.intl.string(q.t["5Wxrcd"])
                  : a === eV.rbe.GUILD_CATEGORY
                    ? q.intl.string(q.t["ISN+NM"])
                    : q.intl.string(q.t["fUYU+j"])),
          (0, i.jsx)(eu.A.Provider, {
              listRef: N,
              query: I,
              setQuery: A,
              pendingAdditions: E,
              setPendingAdditions: b,
              roles: f,
              members: _,
              getRichTag: G,
              children: (0, i.jsx)(p.Modal, {
                  transitionState: n,
                  onClose: s,
                  title: S ? q.intl.string(q.t["S/6zHM"]) : q.intl.string(q.t.dMJ3Y6),
                  subtitle: { text: d, leadingIcon: r },
                  input: (0, i.jsxs)(i.Fragment, {
                      children: [
                          S
                              ? (0, i.jsx)(x.E, {
                                    color: "text-default",
                                    className: eK.h_,
                                    variant: "text-sm/normal",
                                    children: q.intl.string(q.t.f7VbhF),
                                })
                              : void 0,
                          (0, i.jsx)(eu.A.SearchBox, { placeholderText: q.intl.string(q.t.iezLLn) }),
                          (0, i.jsx)(x.E, {
                              className: eK.pK,
                              variant: "text-xs/normal",
                              children: q.intl.string(q.t.rwFx85),
                          }),
                      ],
                  }),
                  preview: o,
                  listProps: {
                      sectionHeight: eu.A.SECTION_HEIGHT,
                      renderSection: eu.A.renderSection,
                      rowHeight: eu.A.ROW_HEIGHT,
                      renderRow: eu.A.renderRow,
                      sections: L,
                      innerAriaOrientation: "vertical",
                      innerRole: "listbox",
                  },
                  actions: [
                      { variant: "secondary", text: q.intl.string(q.t["13/7kX"]), onClick: u },
                      { variant: "primary", text: t, type: "submit", disabled: !c },
                  ],
              }),
          }));
}
function e0(e) {
    let { onEmojiPicked: t, guildId: n } = e,
        s = l.useRef(null),
        a = l.useMemo(
            () => ({
                popoutLocation: {
                    page: eV.liQ.CREATE_CHANNEL_MODAL,
                    section: eV.JJy.CHANNEL_NAME,
                    object: eV.ZSU.EMOJI_PICKER_BUTTON,
                },
            }),
            [],
        ),
        r = l.useCallback(
            (e) => {
                let { closePopout: l } = e;
                return (0, i.jsx)(em.A, {
                    channel: null,
                    guildId: n,
                    pickerIntention: eW.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: l,
                    onNavigateAway: l,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        null != n && n.type === eC.i.UNICODE && t(n.surrogates), i && l();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: a,
                });
            },
            [a, n, t],
        );
    return (0, i.jsx)(D.Y, {
        targetElementRef: s,
        renderPopout: r,
        animation: D.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(ep.A, {
                ...e,
                ref: s,
                active: n,
                className: eK.Z8,
                tabIndex: 0,
                focusProps: { offset: { top: 10, bottom: 10, left: -4, right: 10 } },
            });
        },
    });
}
class e1 extends l.PureComponent {
    headerId = (0, eg.Ld)();
    _input;
    constructor(e) {
        super(e);
        const { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        (this.state = {
            channelTypeOption: t ?? eV.rbe.GUILD_TEXT,
            name: null != n ? (0, ej.m1)(n, eD.default, ex.A) : (i ?? ""),
            pendingPermissionOverwrites: {},
            isPrivate: !1,
            prevGuildId: e.guildId,
            applicationId: n?.application_id ?? null,
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
        i && null == n && X.A.fetchApplications(t),
            es.Ay.trackWithMetadata(eV.HAw.OPEN_MODAL, { type: "Create Channel" });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelTypeOption === eV.rbe.GUILD_ANNOUNCEMENT &&
            this.setState({ channelTypeOption: eV.rbe.GUILD_TEXT }),
            !t.isPrivate &&
                this.state.isPrivate &&
                es.Ay.trackWithMetadata(eV.HAw.OPEN_MODAL, { type: "Create Private Channel" });
    }
    getGuildId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.guildId;
    }
    setInputRef = (e) => {
        this._input = e;
    };
    handleNameChange = (e) => {
        let t = eq(this.state.channelTypeOption);
        e = (0, eP.A)(e, t);
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
        let t = eq(e),
            n = (0, eP.A)(this.state.name, t);
        t === eV.rbe.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
            this.setState({ channelTypeOption: e, name: n, applicationId: null, skuId: null, branchId: null });
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
        let { canViewChannels: e, canConnect: t, transitionState: n, selectedGame: i } = this.props,
            { isPrivate: l, channelTypeOption: s, skuId: a, applicationId: r, name: o, submitting: d } = this.state,
            h = eq(s);
        return (
            !d &&
            n !== R.ip.EXITING &&
            "" !== o &&
            "" !== o.trim() &&
            (!l || !!(0, eh.n0)(h, e, t)) &&
            (h !== eV.rbe.GUILD_STORE || null != a) &&
            (s !== eQ || null != i) &&
            (h !== eV.rbe.GUILD_APP || null != r) &&
            !0
        );
    }
    handleSubmit = async (e) => {
        let t, n, i;
        e.preventDefault();
        let {
                cloneChannel: l,
                categoryId: s,
                user: a,
                memberRoleIds: r,
                isAdmin: o,
                onClose: d,
                owner: u,
                selectedGame: c,
            } = this.props,
            {
                name: g,
                pendingPermissionOverwrites: p,
                channelTypeOption: m,
                skuId: C,
                branchId: I,
                applicationId: A,
                isPrivate: E,
            } = this.state,
            b = eq(m),
            N = m === eQ ? eY.lx.IS_GAME_INVITES_CHANNEL : null,
            O = (function (e) {
                if (e === eQ) return [{ name: eb.Dg }];
            })(m),
            S = this.getGuildId();
        if (null != S) {
            if (null != l) (t = h().values(l.permissionOverwrites)), (n = l.bitrate), (i = l.userLimit);
            else if (b === eV.rbe.GUILD_ANNOUNCEMENT) t = (0, eR.IP)(S);
            else {
                if (E) {
                    t = (0, eR.CG)(S, b, [], !0);
                    let e = (0, eh.D4)(p, b);
                    e.length > 0 && (t = t.concat(e));
                    let n = null != u && a.id === u.id;
                    t.some((e) => r.has(e.id)) || o || n || t.push((0, eR.n3)(a.id, b));
                }
                b === eV.rbe.GUILD_STAGE_VOICE &&
                    ((t = []),
                    Object.values(p).forEach((e) => {
                        let { row: n } = e;
                        null != n.id &&
                            "" !== n.id &&
                            (n.rowType === eX.T6.ROLE
                                ? t.push((0, eG.j)(n.id, el.r2.ROLE))
                                : n.rowType === eX.T6.MEMBER && t.push((0, eG.j)(n.id, el.r2.MEMBER)));
                    }));
            }
            this.setState({ errors: {}, submitting: !0 });
            try {
                let e = await Y.A.createChannel({
                    guildId: S,
                    type: b,
                    name: g,
                    permissionOverwrites: t,
                    bitrate: n,
                    userLimit: i,
                    parentId: b !== eV.rbe.GUILD_CATEGORY ? s : null,
                    skuId: C,
                    branchId: I,
                    applicationId: A,
                    flags: N,
                    availableTags: O,
                    gameId: c?.id,
                });
                if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                let l = e.body;
                (0, eL.ig)(b) && (0, eS.uh)(l.guild_id, l.id), this.setState({ submitting: !1 }), d();
            } catch (e) {
                null != e.body && "object" == typeof e.body
                    ? this.setState({ errors: e.body, submitting: !1 })
                    : this.setState({ errors: { message: q.intl.string(q.t.fEptJP) }, submitting: !1 });
            }
        }
    };
    getIconComponent() {
        let { isPrivate: e, channelTypeOption: t } = this.state;
        switch (t) {
            case eV.rbe.GUILD_TEXT:
                return e ? A.I : E.N;
            case eV.rbe.GUILD_FORUM:
                return S.b;
            case eV.rbe.GUILD_MEDIA:
                return _.ImageIcon;
            case eV.rbe.GUILD_VOICE:
                return e ? b.t : N.H;
            case eV.rbe.GUILD_STORE:
                return L.TagIcon;
            case eV.rbe.GUILD_ANNOUNCEMENT:
                return G.k;
            case eV.rbe.GUILD_STAGE_VOICE:
                return v.q;
            case eQ:
                return g.t;
            case eV.rbe.GUILD_APP:
                return e ? T.Z : U.k;
            default:
                let n = eq(t);
                return (0, eL.ke)(n) ? E.N : eZ.FX;
        }
    }
    getHelperText() {
        let { cloneChannel: e, channelType: t, guildId: l } = this.props;
        return null != e
            ? q.intl.format(q.t.s2ZzZZ, { name: (0, ej.m1)(e, eD.default, ex.A, !0) })
            : t === eV.rbe.GUILD_FORUM
              ? q.intl.format(q.t.tbVWyR, {
                    forumUpsellHook: (e, t) =>
                        (0, i.jsx)(
                            y.Anchor,
                            {
                                onClick: () =>
                                    (0, P.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e("571331"), n.e("390052")]).then(
                                            n.bind(n, 653682),
                                        );
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
            { errors: n, channelTypeOption: l } = this.state,
            s = eq(l);
        n?.name != null && (e = Array.isArray(n.name) ? n.name.join(", ") : n.name);
        let a = s === eV.rbe.GUILD_CATEGORY,
            r = a ? q.intl.string(q.t.OCAkGP) : q.intl.string(q.t.PVbHDl),
            o = this.getIconComponent();
        return (0, i.jsx)(j.k, {
            label: r,
            helperText: this.getHelperText(),
            error: e,
            value: this.state.name,
            onChange: this.handleNameChange,
            inputRef: this.setInputRef,
            maxLength: 100,
            placeholder: (function (e) {
                switch (e) {
                    case eV.rbe.GUILD_CATEGORY:
                        return q.intl.string(q.t.eTVbtx);
                    case eV.rbe.GUILD_FORUM:
                        return q.intl.string(q.t["5z1Xat"]);
                    default:
                        return q.intl.string(q.t["bw/b8E"]);
                }
            })(l),
            leading: a ? void 0 : o,
            trailing: {
                type: "emoji",
                button: (0, i.jsx)(e0, {
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
                canCreateMediaChannel: a,
                canCreateGameInvitesChannel: r,
                canCreateAppChannel: o,
            } = this.props,
            { channelTypeOption: d, isPrivate: h } = this.state;
        if (null != e || d === eV.rbe.GUILD_CATEGORY) return;
        let u = null != t && t.length > 0;
        return (0, i.jsx)(m.z, {
            label: q.intl.string(q.t["7ZcXG2"]),
            options: (function (e) {
                let {
                        isPrivate: t,
                        showStoreChannelOption: n,
                        showAnnouncementChannelOption: i,
                        canCreateStageChannel: l,
                        canCreateMediaChannel: s,
                        canCreateGameInvitesChannel: a,
                        canCreateAppChannel: r,
                    } = e,
                    o = [
                        {
                            leadingIcon: t ? A.I : E.N,
                            name: q.intl.string(q.t.pnuRXC),
                            value: eV.rbe.GUILD_TEXT,
                            desc: q.intl.string(q.t["Hf5Lb+"]),
                        },
                        {
                            leadingIcon: t ? b.t : N.H,
                            name: q.intl.string(q.t.Sx55Oh),
                            value: eV.rbe.GUILD_VOICE,
                            desc: q.intl.string(q.t.pqfkoF),
                        },
                        {
                            leadingIcon: t ? O.Q : S.b,
                            name: q.intl.string(q.t.eAVID5),
                            value: eV.rbe.GUILD_FORUM,
                            desc: q.intl.string(q.t.iZ5pgg),
                        },
                    ];
                return (
                    a &&
                        o.push({
                            leadingIcon: g.t,
                            name: q.intl.string(ez.default["h/GwWL"]),
                            value: eQ,
                            desc: q.intl.string(ez.default.DxwBMf),
                        }),
                    s &&
                        o.push({
                            leadingIcon: t ? f.c : _.ImageIcon,
                            name: q.intl.string(q.t["6x6fVg"]),
                            value: eV.rbe.GUILD_MEDIA,
                            desc: q.intl.string(q.t.JyCrwS),
                        }),
                    i &&
                        o.push({
                            leadingIcon: G.k,
                            name: q.intl.string(q.t.qr9dEP),
                            value: eV.rbe.GUILD_ANNOUNCEMENT,
                            desc: q.intl.string(q.t.gBkfzu),
                        }),
                    n &&
                        o.push({
                            leadingIcon: L.TagIcon,
                            name: q.intl.string(q.t.SxjkXf),
                            value: eV.rbe.GUILD_STORE,
                            desc: q.intl.string(q.t.nmCPMC),
                        }),
                    l &&
                        o.push({
                            leadingIcon: v.q,
                            name: q.intl.string(q.t.pNWst0),
                            value: eV.rbe.GUILD_STAGE_VOICE,
                            desc: q.intl.string(q.t.VPAwgo),
                        }),
                    r &&
                        o.push({
                            leadingIcon: t ? T.Z : U.k,
                            name: q.intl.string(q.t["A+8d6M"]),
                            value: eV.rbe.GUILD_APP,
                            desc: q.intl.string(q.t.LVQQ3Z),
                        }),
                    o
                );
            })({
                isPrivate: h,
                showStoreChannelOption: n && u,
                showAnnouncementChannelOption: l,
                canCreateStageChannel: s,
                canCreateMediaChannel: a,
                canCreateGameInvitesChannel: r,
                canCreateAppChannel: o,
            }),
            value: d,
            onChange: this.handleTypeChange,
        });
    }
    renderStoreOptions() {
        let { applications: e } = this.props,
            { applicationId: t, skuId: n, branchId: l, showBranches: s, hasBranches: a } = this.state;
        if (null == e || 0 === e.length) throw Error("Unexpected empty applications");
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(w.l, {
                    label: q.intl.string(q.t.vPIW2L),
                    options: e.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                    placeholder: q.intl.string(q.t["3XfCPX"]),
                    value: t,
                    onSelectionChange: this.handleApplicationChange,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                null != t
                    ? (0, i.jsx)(
                          ei,
                          {
                              label: q.intl.string(q.t.XNIWFj),
                              applicationId: t,
                              onChange: this.handleSKUChange,
                              selectedSkuId: n,
                              className: eK.dE,
                          },
                          t,
                      )
                    : null,
                null != t && a
                    ? (0, i.jsx)(k.d, {
                          label: q.intl.string(q.t["3e9mH5"]),
                          description: q.intl.format(q.t.UVXL1R, {
                              devPortalUrl: eV.X7G.API_DOCS_GAME_AND_SERVER_MANAGEMENT,
                          }),
                          icon: H.R,
                          onChange: this.handleShowBranchesToggle,
                          checked: s,
                      })
                    : null,
                null != t
                    ? (0, i.jsx)("div", {
                          className: eK.dE,
                          children: (0, i.jsx)(
                              $,
                              {
                                  label: s ? q.intl.string(q.t.o7DqF3) : void 0,
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
    renderGameInvitesChannelOptions() {
        let {
                games: e,
                onGameQueryChange: t,
                isGamesQueryLoading: n,
                selectedGame: l,
                onSelectedGameChange: s,
            } = this.props,
            a =
                e?.map((e) => ({
                    id: e.id,
                    label: e.name,
                    value: e.id,
                    leading: (0, i.jsx)(eA.A, { game: e, size: eA.M.XSMALL }),
                })) ?? [];
        return (
            (null != l && a.some((e) => e.id === l.id)) ||
                null == l ||
                a.push({
                    id: l.id,
                    label: l.name,
                    value: l.id,
                    leading: (0, i.jsx)(eA.A, { game: l, size: eA.M.XSMALL }),
                }),
            (0, i.jsx)(B.Z, {
                label: q.intl.string(ez.default["2wS18o"]),
                options: a,
                placeholder: q.intl.string(ez.default.Mbd4OZ),
                value: l?.id ?? null,
                onSelectionChange: function (t) {
                    s(e?.find((e) => e.id === t) ?? null);
                },
                selectionMode: "single",
                fullWidth: !0,
                onQueryChange: (e) => t(e.target.value),
                loading: n,
            })
        );
    }
    renderAppChannelOptions() {
        let { guildId: e, categoryId: t } = this.props,
            { applicationId: n } = this.state;
        return (0, i.jsx)(eo.A, {
            guildId: e,
            channelId: t,
            selectedApplicationId: n,
            onChange: this.handleApplicationChange,
        });
    }
    renderPrivacyOptions() {
        let { cloneChannel: e } = this.props,
            { channelTypeOption: t, isPrivate: n } = this.state;
        if (null != e || t === eV.rbe.GUILD_ANNOUNCEMENT) return null;
        let l = t === eV.rbe.GUILD_CATEGORY ? q.intl.string(q.t.lEPAZ5) : q.intl.string(q.t.aUI70g),
            s = t === eV.rbe.GUILD_CATEGORY ? q.intl.string(q.t.RQUk61) : q.intl.string(q.t.YguuKq);
        return (0, i.jsx)(k.d, {
            label: l,
            description: s,
            icon: V.LockIcon,
            onChange: this.handlePrivacyChange,
            checked: n,
        });
    }
    renderError(e) {
        let t,
            { channelTypeOption: n, isPrivate: l, errors: s } = this.state,
            r = eq(n),
            { canConnect: o, canViewChannels: d } = this.props;
        if (Object.values(s).length > 0) {
            if (null != s.message && "" !== s.message) t = s.message;
            else if (e || null == s.name) {
                let e = Object.values(s)[0];
                e.length > 0 && (t = e);
            }
        } else l && !(0, eh.n0)(r, d, o) && (t = (0, eh.ld)(r));
        if (null != t)
            return (0, i.jsx)("div", {
                className: a()(eK.$5, { [eK.SE]: e }),
                children: (0, i.jsx)(F.p, { messageType: F.Y.ERROR, children: t }),
            });
    }
    handlePermissionOverwriteChange(e) {
        this.setState({ pendingPermissionOverwrites: e });
    }
    renderCreateChannelModal() {
        let e,
            t,
            { channelTypeOption: n, isPrivate: l } = this.state,
            s = eq(n),
            { guildId: a, transitionState: r, cloneChannel: o, categoryId: d, onClose: h } = this.props,
            u =
                null != o
                    ? q.intl.string(q.t.dEaPc4)
                    : s === eV.rbe.GUILD_CATEGORY
                      ? q.intl.string(q.t["ISN+NM"])
                      : q.intl.string(q.t["fUYU+j"]);
        if (null != d) {
            let t = ev.A.getChannel(d);
            e = q.intl.format(q.t.L1zJgb, { categoryName: t?.name ?? "" });
        }
        t = s === eV.rbe.GUILD_CATEGORY ? q.intl.string(q.t["ISN+NM"]) : q.intl.string(q.t["fUYU+j"]);
        let c = l || s === eV.rbe.GUILD_STAGE_VOICE;
        return (0, i.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, i.jsx)(p.Modal, {
                transitionState: r,
                onClose: h,
                title: u,
                subtitle: e,
                preview: this.renderError(),
                actions: [
                    { variant: "secondary", text: q.intl.string(q.t["ETE/oC"]), onClick: h },
                    c
                        ? {
                              variant: "primary",
                              text: q.intl.string(q.t.PDTjLN),
                              type: "button",
                              disabled: !this.canSubmit(),
                              onClick: () => {
                                  this.setState({ slide: "ADD_MEMBERS", errors: {} });
                              },
                          }
                        : { variant: "primary", type: "submit", disabled: !this.canSubmit(), text: t },
                ],
                children: (0, i.jsxs)("div", {
                    className: eK.hM,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        s === eV.rbe.GUILD_STORE ? this.renderStoreOptions() : null,
                        n === eQ ? this.renderGameInvitesChannelOptions() : null,
                        s === eV.rbe.GUILD_APP && null == o ? this.renderAppChannelOptions() : null,
                        (0, i.jsx)(eF, { guildId: a, channelType: s, className: eK.wI }),
                        s === eV.rbe.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions(),
                    ],
                }),
            }),
        });
    }
    renderAddMemberSlideContent() {
        let { name: e, channelTypeOption: t, pendingPermissionOverwrites: n } = this.state,
            { guildId: l, onClose: s, transitionState: a } = this.props,
            r = () => {
                this.setState({ slide: "CHANNEL_INFO" });
            },
            o = this.canSubmit();
        return (0, i.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, i.jsx)(e$, {
                onClose: s,
                transitionState: a,
                channelType: eq(t),
                iconComponent: this.getIconComponent(),
                error: this.renderError(!0),
                name: e,
                guildId: l,
                onBack: r,
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
let e5 = l.forwardRef(function (e, t) {
    let { channelType: n, guildId: s, cloneChannelId: a } = e,
        r = (0, C.cf)([eU.A, eD.default, eM.A, ev.A, eT.Ay], () => {
            let e = eU.A.getGuild(s),
                t = eD.default.getCurrentUser();
            o()(null != t, "CreateChannel: user cannot be undefined");
            let i = null != e && null != e.ownerId ? eD.default.getUser(e.ownerId) : null,
                l = eM.A.can(eV.xBc.ADMINISTRATOR, e),
                r = ev.A.getChannel(a);
            return {
                guild: e,
                canCreateStoreChannel: null != e && e.features.has(eV.GuildFeatures.COMMERCE),
                canCreateAnnouncementChannel: null != e && e.features.has(eV.GuildFeatures.NEWS),
                user: t,
                owner: i,
                memberRoles: eT.Ay.getMember(s, t.id)?.roles ?? [],
                canViewChannels: eM.A.can(eV.xBc.VIEW_CHANNEL, e),
                canConnect: eM.A.can(eV.xBc.CONNECT, e),
                isAdmin: l,
                cloneChannel: r,
                channelType: r?.type ?? n,
                canManageRoles: eM.A.can(eV.xBc.MANAGE_ROLES, e),
                canManageChannels: eM.A.can(eV.xBc.MANAGE_CHANNELS, e),
            };
        }),
        d = (0, C.yK)([ed.A], () =>
            ed.A.getGuildApplicationIds(s)
                .map((e) => ed.A.getApplication(e))
                .filter(ey.Vq),
        ),
        h = new Set(r.memberRoles),
        { canManageRoles: u, canManageChannels: g } = r,
        p = (0, e_.R)(s) && u && g,
        m = (0, eO.V)(r?.guild),
        I = eE.useConfig({ guildId: s, location: "CreateChannel" }).enabled,
        A = er.useConfig({ guildId: s, location: "CreateChannel web" }).enabled,
        [E, b] = l.useState(""),
        [N, O] = l.useState(""),
        [S, f] = l.useState(null),
        { data: _, isLoading: G } = (0, eN.YK)(E),
        L = l.useMemo(() => c()(b, 300), []),
        v = l.useCallback(
            (e) => {
                O(e), L(e);
            },
            [L],
        );
    return (0, i.jsx)(e1, {
        ...e,
        ...r,
        memberRoleIds: h,
        applications: d,
        canCreateStageChannel: p,
        canCreateMediaChannel: m,
        canCreateGameInvitesChannel: I,
        canCreateAppChannel: A,
        ref: t,
        width: 496,
        games: _,
        isGamesQueryLoading: G || N !== E,
        onGameQueryChange: v,
        selectedGame: S,
        onSelectedGameChange: f,
    });
});
