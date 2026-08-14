n.d(t, { default: () => eq, p: () => eW }), n(321073);
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
    E = n(661531),
    I = n(770880),
    A = n(276293),
    b = n(146151),
    N = n(983851),
    S = n(597050),
    O = n(56059),
    f = n(532590),
    _ = n(191023),
    G = n(778492),
    T = n(278416),
    v = n(451394),
    L = n(812993),
    U = n(834730),
    M = n(922016),
    x = n(231723),
    R = n(349288),
    D = n(192308),
    y = n(95477),
    j = n(691885),
    P = n(243721),
    w = n(530557),
    H = n(783878),
    k = n(194261),
    B = n(512950),
    V = n(755584),
    F = n(66834),
    Y = n(712963),
    X = n(228366);
let W = {};
class Z extends C.Ay.Store {
    static displayName = "ApplicationBranchStore";
    getBranches(e) {
        return W[e] ?? [];
    }
}
let z = new Z(X.h, {
    OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branches: n } = e;
        W[t] = n;
    },
    LOGOUT: function () {
        W = {};
    },
});
var K = n(375708);
class q extends l.Component {
    static defaultProps = { includeMaster: !1 };
    componentDidMount() {
        let { applicationId: e, branches: t, onHasBranchesChange: n } = this.props;
        (0, Y.w)(e), n?.(t.length > 0);
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
        return (0, i.jsx)(j.l, {
            label: a,
            options: r.map((e) => ({ id: e.id, label: e.getName(n), value: e.id })),
            placeholder: K.intl.string(K.t.Sw7pHF),
            value: t,
            onSelectionChange: this.handleChange,
            selectionMode: "single",
            fullWidth: !0,
        });
    }
}
let Q = C.Ay.connectStores([z], (e) => {
    let { applicationId: t } = e;
    return { branches: z.getBranches(t) };
})(q);
var J = n(830382),
    $ = n(67480);
class ee extends l.Component {
    componentDidMount() {
        let { applicationId: e, skus: t, selectedSkuId: n, onChange: i } = this.props;
        null == t || 0 === t.length ? (0, J.O1)(e, !1) : 1 === t.length && null == n && i(t[0].id);
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
        return (0, i.jsx)(j.l, {
            selectionMode: "single",
            label: n,
            options: null != e ? e.map((e) => ({ id: e.id, label: e.name, value: e.id })) : [],
            placeholder: l ? K.intl.string(K.t.hKcgP5) : K.intl.string(K.t.QV60Uq),
            value: t,
            onSelectionChange: this.handleChange,
            disabled: l,
        });
    }
}
let et = C.Ay.connectStores([$.A], (e) => {
    let { applicationId: t } = e;
    return { skus: $.A.getForApplication(t) };
})(ee);
var en = n(155718),
    ei = n(95561),
    el = n(587895),
    es = n(495273),
    ea = n(517622),
    er = n(86944),
    eo = n(915089),
    ed = n(375499),
    eh = n(267889),
    eu = n(770335),
    ec = n(611371),
    eg = n(769015);
let ep = (0, n(945810).mj)({
    kind: "guild",
    name: "2026-06-game-invites-channel",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var em = n(807632),
    eC = n(471677),
    eE = n(219444),
    eI = n(976860),
    eA = n(233993),
    eb = n(62357),
    eN = n(841811),
    eS = n(95701),
    eO = n(734057),
    ef = n(696451),
    e_ = n(71393),
    eG = n(576705),
    eT = n(994500),
    ev = n(287809),
    eL = n(871237),
    eU = n(403362),
    eM = n(47167),
    ex = n(280513),
    eR = n(837011),
    eD = n(90084),
    ey = n(975571),
    ej = n(652215);
function eP(e) {
    let { guildId: t, channelType: n, className: s } = e,
        { guildProfile: a, fetchGuildProfile: r, fetchStatus: o } = (0, eD.u)(t),
        d = o !== eR.X.FETCHED,
        h = null != a && ex.i.VISIBLE.has(a.visibility);
    l.useEffect(() => {
        r();
    }, [t, r]);
    let u = [];
    if (
        n === ej.rbe.GUILD_ANNOUNCEMENT &&
        (u.push(K.intl.format(K.t.tI7KNX, { documentationLink: ey.A.getArticleURL(ej.MVz.ANNOUNCEMENT_CHANNELS) })),
        !d && !h)
    ) {
        let e = K.intl.string(K.t["2Ab4Id"]);
        u.push(e);
    }
    return 0 === u.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: u.map((e, t) =>
                  (0, i.jsx)(U.E, { className: s, variant: "text-sm/normal", children: e }, `description-${t}`),
              ),
          });
}
var ew = n(746080),
    eH = n(719366),
    ek = n(307731),
    eB = n(818348),
    eV = n(774418),
    eF = n(414455);
let eY = "GAME_INVITES_CHANNEL_OPTION";
function eX(e) {
    return e === eY ? ej.rbe.GUILD_FORUM : e;
}
function eW(e) {
    let { isNew: t, isBeta: n } = e,
        l = null;
    return (
        !0 === t
            ? (l = (0, i.jsx)(L.Lp, {
                  text: K.intl.string(K.t.psHMa6),
                  className: eF.Ad,
                  color: E.A.colors.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER.css,
              }))
            : !0 === n && (l = (0, i.jsx)(ec.A, { className: eF.Ad })),
        l
    );
}
function eZ(e) {
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
        [E, I] = l.useState(""),
        [A, b] = l.useState({}),
        N = l.useRef(null),
        S = (0, C.bG)([e_.A], () => e_.A.getGuild(h)),
        O = a === ej.rbe.GUILD_STAGE_VOICE,
        { roles: f, members: _, getRichTag: G } = (0, er.K)(S, null, O ? eA.QY : (0, eS.TA)(a), E, O),
        T = ea.A.useSections({ roles: f, members: _ });
    return (l.useEffect(() => {
        g(A);
    }, [A, g]),
    null == S)
        ? null
        : ((t =
              0 === Object.keys(m).length
                  ? K.intl.string(K.t["5Wxrcd"])
                  : a === ej.rbe.GUILD_CATEGORY
                    ? K.intl.string(K.t["ISN+NM"])
                    : K.intl.string(K.t["fUYU+j"])),
          (0, i.jsx)(ea.A.Provider, {
              listRef: N,
              query: E,
              setQuery: I,
              pendingAdditions: A,
              setPendingAdditions: b,
              roles: f,
              members: _,
              getRichTag: G,
              children: (0, i.jsx)(p.Modal, {
                  transitionState: n,
                  onClose: s,
                  title: O ? K.intl.string(K.t["S/6zHM"]) : K.intl.string(K.t.dMJ3Y6),
                  subtitle: { text: d, leadingIcon: r },
                  input: (0, i.jsxs)(i.Fragment, {
                      children: [
                          O
                              ? (0, i.jsx)(U.E, {
                                    color: "text-default",
                                    className: eF.h_,
                                    variant: "text-sm/normal",
                                    children: K.intl.string(K.t.f7VbhF),
                                })
                              : void 0,
                          (0, i.jsx)(ea.A.SearchBox, { placeholderText: K.intl.string(K.t.iezLLn) }),
                          (0, i.jsx)(U.E, {
                              className: eF.pK,
                              variant: "text-xs/normal",
                              children: K.intl.string(K.t.rwFx85),
                          }),
                      ],
                  }),
                  preview: o,
                  listProps: {
                      sectionHeight: ea.A.SECTION_HEIGHT,
                      renderSection: ea.A.renderSection,
                      rowHeight: ea.A.ROW_HEIGHT,
                      renderRow: ea.A.renderRow,
                      sections: T,
                      innerAriaOrientation: "vertical",
                      innerRole: "listbox",
                  },
                  actions: [
                      { variant: "secondary", text: K.intl.string(K.t["13/7kX"]), onClick: u },
                      { variant: "primary", text: t, type: "submit", disabled: !c },
                  ],
              }),
          }));
}
function ez(e) {
    let { onEmojiPicked: t, guildId: n } = e,
        s = l.useRef(null),
        a = l.useMemo(
            () => ({
                popoutLocation: {
                    page: ej.liQ.CREATE_CHANNEL_MODAL,
                    section: ej.JJy.CHANNEL_NAME,
                    object: ej.ZSU.EMOJI_PICKER_BUTTON,
                },
            }),
            [],
        ),
        r = l.useCallback(
            (e) => {
                let { closePopout: l } = e;
                return (0, i.jsx)(eh.A, {
                    channel: null,
                    guildId: n,
                    pickerIntention: ek.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: l,
                    onNavigateAway: l,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        null != n && n.type === eu.i.UNICODE && t(n.surrogates), i && l();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: a,
                });
            },
            [a, n, t],
        );
    return (0, i.jsx)(M.Y, {
        targetElementRef: s,
        renderPopout: r,
        animation: M.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(ed.A, {
                ...e,
                ref: s,
                active: n,
                className: eF.Z8,
                tabIndex: 0,
                focusProps: { offset: { top: 10, bottom: 10, left: -4, right: 10 } },
            });
        },
    });
}
class eK extends l.PureComponent {
    headerId = (0, eo.Ld)();
    _input;
    constructor(e) {
        super(e);
        const { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        (this.state = {
            channelTypeOption: t ?? ej.rbe.GUILD_TEXT,
            name: null != n ? (0, eM.m1)(n, ev.default, eT.A) : (i ?? ""),
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
        i && null == n && F.A.fetchApplications(t),
            ei.Ay.trackWithMetadata(ej.HAw.OPEN_MODAL, { type: "Create Channel" });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelTypeOption === ej.rbe.GUILD_ANNOUNCEMENT &&
            this.setState({ channelTypeOption: ej.rbe.GUILD_TEXT }),
            !t.isPrivate &&
                this.state.isPrivate &&
                ei.Ay.trackWithMetadata(ej.HAw.OPEN_MODAL, { type: "Create Private Channel" });
    }
    getGuildId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.guildId;
    }
    setInputRef = (e) => {
        this._input = e;
    };
    handleNameChange = (e) => {
        let t = eX(this.state.channelTypeOption);
        eS.ZE.has(t) && (e = (0, eL.an)(e));
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
        let t = eX(e),
            { name: n } = this.state;
        eS.ZE.has(t) && (n = (0, eL.an)(n)),
            t === ej.rbe.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
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
        let { canViewChannels: e, canConnect: t, transitionState: n, selectedGame: i } = this.props,
            { isPrivate: l, channelTypeOption: s, skuId: a, name: r, submitting: o } = this.state,
            d = eX(s);
        return (
            !o &&
            n !== x.ip.EXITING &&
            "" !== r &&
            "" !== r.trim() &&
            (!l || !!(0, es.n0)(d, e, t)) &&
            (d !== ej.rbe.GUILD_STORE || null != a) &&
            (s !== eY || null != i) &&
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
                branchId: E,
                isPrivate: I,
            } = this.state,
            A = eX(m),
            b = m === eY ? ew.lx.IS_GAME_INVITES_CHANNEL : null,
            N = (function (e) {
                if (e === eY) return [{ name: em.Dg }];
            })(m),
            S = this.getGuildId();
        if (null != S) {
            if (null != l) (t = h().values(l.permissionOverwrites)), (n = l.bitrate), (i = l.userLimit);
            else if (A === ej.rbe.GUILD_ANNOUNCEMENT) t = (0, eL.IP)(S);
            else {
                if (I) {
                    t = (0, eL.CG)(S, A, [], !0);
                    let e = (0, es.D4)(p, A);
                    e.length > 0 && (t = t.concat(e));
                    let n = null != u && a.id === u.id;
                    t.some((e) => r.has(e.id)) || o || n || t.push((0, eL.n3)(a.id, A));
                }
                A === ej.rbe.GUILD_STAGE_VOICE &&
                    ((t = []),
                    Object.values(p).forEach((e) => {
                        let { row: n } = e;
                        null != n.id &&
                            "" !== n.id &&
                            (n.rowType === eH.T6.ROLE
                                ? t.push((0, eN.j)(n.id, en.r2.ROLE))
                                : n.rowType === eH.T6.MEMBER && t.push((0, eN.j)(n.id, en.r2.MEMBER)));
                    }));
            }
            this.setState({ errors: {}, submitting: !0 });
            try {
                let e = await V.A.createChannel({
                    guildId: S,
                    type: A,
                    name: g,
                    permissionOverwrites: t,
                    bitrate: n,
                    userLimit: i,
                    parentId: A !== ej.rbe.GUILD_CATEGORY ? s : null,
                    skuId: C,
                    branchId: E,
                    flags: b,
                    availableTags: N,
                    gameId: c?.id,
                });
                if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                let l = e.body;
                eS.ZE.has(A) && (0, eI.uh)(l.guild_id, l.id), this.setState({ submitting: !1 }), d();
            } catch (e) {
                null != e.body && "object" == typeof e.body
                    ? this.setState({ errors: e.body, submitting: !1 })
                    : this.setState({ errors: { message: K.intl.string(K.t.fEptJP) }, submitting: !1 });
            }
        }
    };
    getIconComponent() {
        let { isPrivate: e, channelTypeOption: t } = this.state;
        switch (t) {
            case ej.rbe.GUILD_TEXT:
                return e ? I.I : A.N;
            case ej.rbe.GUILD_FORUM:
                return O.b;
            case ej.rbe.GUILD_MEDIA:
                return _.x;
            case ej.rbe.GUILD_VOICE:
                return e ? b.t : N.H;
            case ej.rbe.GUILD_STORE:
                return T.g;
            case ej.rbe.GUILD_ANNOUNCEMENT:
                return G.k;
            case ej.rbe.GUILD_STAGE_VOICE:
                return v.q;
            case eY:
                return g.t;
            default:
                let n = eX(t);
                return (0, eS.ke)(n) ? A.N : eB.FX;
        }
    }
    getHelperText() {
        let { cloneChannel: e, channelType: t, guildId: l } = this.props;
        return null != e
            ? K.intl.format(K.t.s2ZzZZ, { name: (0, eM.m1)(e, ev.default, eT.A, !0) })
            : t === ej.rbe.GUILD_FORUM
              ? K.intl.format(K.t.tbVWyR, {
                    forumUpsellHook: (e, t) =>
                        (0, i.jsx)(
                            R.Anchor,
                            {
                                onClick: () =>
                                    (0, D.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e("885355"), n.e("390052")]).then(
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
            s = eX(l);
        n?.name != null && (e = Array.isArray(n.name) ? n.name.join(", ") : n.name);
        let a = s === ej.rbe.GUILD_CATEGORY,
            r = a ? K.intl.string(K.t.OCAkGP) : K.intl.string(K.t.PVbHDl),
            o = this.getIconComponent();
        return (0, i.jsx)(y.k, {
            label: r,
            helperText: this.getHelperText(),
            error: e,
            value: this.state.name,
            onChange: this.handleNameChange,
            inputRef: this.setInputRef,
            maxLength: 100,
            placeholder: (function (e) {
                switch (e) {
                    case ej.rbe.GUILD_CATEGORY:
                        return K.intl.string(K.t.eTVbtx);
                    case ej.rbe.GUILD_FORUM:
                        return K.intl.string(K.t["5z1Xat"]);
                    default:
                        return K.intl.string(K.t["bw/b8E"]);
                }
            })(l),
            leading: a ? void 0 : o,
            trailing: {
                type: "emoji",
                button: (0, i.jsx)(ez, {
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
            } = this.props,
            { channelTypeOption: o, isPrivate: d } = this.state;
        if (null != e || o === ej.rbe.GUILD_CATEGORY) return;
        let h = null != t && t.length > 0;
        return (0, i.jsx)(m.z, {
            label: K.intl.string(K.t["7ZcXG2"]),
            options: (function (e) {
                let {
                        isPrivate: t,
                        showStoreChannelOption: n,
                        showAnnouncementChannelOption: i,
                        canCreateStageChannel: l,
                        canCreateMediaChannel: s,
                        canCreateGameInvitesChannel: a,
                    } = e,
                    r = [
                        {
                            leadingIcon: t ? I.I : A.N,
                            name: K.intl.string(K.t.pnuRXC),
                            value: ej.rbe.GUILD_TEXT,
                            desc: K.intl.string(K.t["Hf5Lb+"]),
                        },
                        {
                            leadingIcon: t ? b.t : N.H,
                            name: K.intl.string(K.t.Sx55Oh),
                            value: ej.rbe.GUILD_VOICE,
                            desc: K.intl.string(K.t.pqfkoF),
                        },
                        {
                            leadingIcon: t ? S.Q : O.b,
                            name: K.intl.string(K.t.eAVID5),
                            value: ej.rbe.GUILD_FORUM,
                            desc: K.intl.string(K.t.iZ5pgg),
                        },
                    ];
                return (
                    a &&
                        r.push({
                            leadingIcon: g.t,
                            name: K.intl.string(eV.default["h/GwWL"]),
                            value: eY,
                            desc: K.intl.string(eV.default.DxwBMf),
                        }),
                    s &&
                        r.push({
                            leadingIcon: t ? f.c : _.x,
                            name: K.intl.string(K.t["6x6fVg"]),
                            value: ej.rbe.GUILD_MEDIA,
                            desc: K.intl.string(K.t.JyCrwS),
                        }),
                    i &&
                        r.push({
                            leadingIcon: G.k,
                            name: K.intl.string(K.t.qr9dEP),
                            value: ej.rbe.GUILD_ANNOUNCEMENT,
                            desc: K.intl.string(K.t.gBkfzu),
                        }),
                    n &&
                        r.push({
                            leadingIcon: T.g,
                            name: K.intl.string(K.t.SxjkXf),
                            value: ej.rbe.GUILD_STORE,
                            desc: K.intl.string(K.t.nmCPMC),
                        }),
                    l &&
                        r.push({
                            leadingIcon: v.q,
                            name: K.intl.string(K.t.pNWst0),
                            value: ej.rbe.GUILD_STAGE_VOICE,
                            desc: K.intl.string(K.t.VPAwgo),
                        }),
                    r
                );
            })({
                isPrivate: d,
                showStoreChannelOption: n && h,
                showAnnouncementChannelOption: l,
                canCreateStageChannel: s,
                canCreateMediaChannel: a,
                canCreateGameInvitesChannel: r,
            }),
            value: o,
            onChange: this.handleTypeChange,
        });
    }
    renderStoreOptions() {
        let { applications: e } = this.props,
            { applicationId: t, skuId: n, branchId: l, showBranches: s, hasBranches: a } = this.state;
        if (null == e || 0 === e.length) throw Error("Unexpected empty applications");
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(j.l, {
                    label: K.intl.string(K.t.vPIW2L),
                    options: e.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                    placeholder: K.intl.string(K.t["3XfCPX"]),
                    value: t,
                    onSelectionChange: this.handleApplicationChange,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                null != t
                    ? (0, i.jsx)(
                          et,
                          {
                              label: K.intl.string(K.t.XNIWFj),
                              applicationId: t,
                              onChange: this.handleSKUChange,
                              selectedSkuId: n,
                              className: eF.dE,
                          },
                          t,
                      )
                    : null,
                null != t && a
                    ? (0, i.jsx)(P.d, {
                          label: K.intl.string(K.t["3e9mH5"]),
                          description: K.intl.format(K.t.UVXL1R, {
                              devPortalUrl: ej.X7G.API_DOCS_GAME_AND_SERVER_MANAGEMENT,
                          }),
                          icon: w.R,
                          onChange: this.handleShowBranchesToggle,
                          checked: s,
                      })
                    : null,
                null != t
                    ? (0, i.jsx)("div", {
                          className: eF.dE,
                          children: (0, i.jsx)(
                              Q,
                              {
                                  label: s ? K.intl.string(K.t.o7DqF3) : void 0,
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
                    leading: (0, i.jsx)(eg.A, { game: e, size: eg.M.XSMALL }),
                })) ?? [];
        return (
            (null != l && a.some((e) => e.id === l.id)) ||
                null == l ||
                a.push({
                    id: l.id,
                    label: l.name,
                    value: l.id,
                    leading: (0, i.jsx)(eg.A, { game: l, size: eg.M.XSMALL }),
                }),
            (0, i.jsx)(H.Z, {
                label: K.intl.string(eV.default["2wS18o"]),
                options: a,
                placeholder: K.intl.string(eV.default.Mbd4OZ),
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
    renderPrivacyOptions() {
        let { cloneChannel: e } = this.props,
            { channelTypeOption: t, isPrivate: n } = this.state;
        if (null != e || t === ej.rbe.GUILD_ANNOUNCEMENT) return null;
        let l = t === ej.rbe.GUILD_CATEGORY ? K.intl.string(K.t.lEPAZ5) : K.intl.string(K.t.aUI70g),
            s = t === ej.rbe.GUILD_CATEGORY ? K.intl.string(K.t.RQUk61) : K.intl.string(K.t.YguuKq);
        return (0, i.jsx)(P.d, { label: l, description: s, icon: k.X, onChange: this.handlePrivacyChange, checked: n });
    }
    renderError(e) {
        let t,
            { channelTypeOption: n, isPrivate: l, errors: s } = this.state,
            r = eX(n),
            { canConnect: o, canViewChannels: d } = this.props;
        if (Object.values(s).length > 0) {
            if (null != s.message && "" !== s.message) t = s.message;
            else if (e || null == s.name) {
                let e = Object.values(s)[0];
                e.length > 0 && (t = e);
            }
        } else l && !(0, es.n0)(r, d, o) && (t = (0, es.ld)(r));
        if (null != t)
            return (0, i.jsx)("div", {
                className: a()(eF.$5, { [eF.SE]: e }),
                children: (0, i.jsx)(B.p, { messageType: B.Y.ERROR, children: t }),
            });
    }
    handlePermissionOverwriteChange(e) {
        this.setState({ pendingPermissionOverwrites: e });
    }
    renderCreateChannelModal() {
        let e,
            t,
            { channelTypeOption: n, isPrivate: l } = this.state,
            s = eX(n),
            { guildId: a, transitionState: r, cloneChannel: o, categoryId: d, onClose: h } = this.props,
            u =
                null != o
                    ? K.intl.string(K.t.dEaPc4)
                    : s === ej.rbe.GUILD_CATEGORY
                      ? K.intl.string(K.t["ISN+NM"])
                      : K.intl.string(K.t["fUYU+j"]);
        if (null != d) {
            let t = eO.A.getChannel(d);
            e = K.intl.format(K.t.L1zJgb, { categoryName: t?.name ?? "" });
        }
        t = s === ej.rbe.GUILD_CATEGORY ? K.intl.string(K.t["ISN+NM"]) : K.intl.string(K.t["fUYU+j"]);
        let c = l || s === ej.rbe.GUILD_STAGE_VOICE;
        return (0, i.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, i.jsx)(p.Modal, {
                transitionState: r,
                onClose: h,
                title: u,
                subtitle: e,
                preview: this.renderError(),
                actions: [
                    { variant: "secondary", text: K.intl.string(K.t["ETE/oC"]), onClick: h },
                    c
                        ? {
                              variant: "primary",
                              text: K.intl.string(K.t.PDTjLN),
                              type: "button",
                              disabled: !this.canSubmit(),
                              onClick: () => {
                                  this.setState({ slide: "ADD_MEMBERS", errors: {} });
                              },
                          }
                        : { variant: "primary", type: "submit", disabled: !this.canSubmit(), text: t },
                ],
                children: (0, i.jsxs)("div", {
                    className: eF.hM,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        s === ej.rbe.GUILD_STORE ? this.renderStoreOptions() : null,
                        n === eY ? this.renderGameInvitesChannelOptions() : null,
                        (0, i.jsx)(eP, { guildId: a, channelType: s, className: eF.wI }),
                        s === ej.rbe.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions(),
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
            children: (0, i.jsx)(eZ, {
                onClose: s,
                transitionState: a,
                channelType: eX(t),
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
let eq = l.forwardRef(function (e, t) {
    let { channelType: n, guildId: s, cloneChannelId: a } = e,
        r = (0, C.cf)([e_.A, ev.default, eG.A, eO.A, ef.Ay], () => {
            let e = e_.A.getGuild(s),
                t = ev.default.getCurrentUser();
            o()(null != t, "CreateChannel: user cannot be undefined");
            let i = null != e && null != e.ownerId ? ev.default.getUser(e.ownerId) : null,
                l = eG.A.can(ej.xBc.ADMINISTRATOR, e),
                r = eO.A.getChannel(a);
            return {
                guild: e,
                canCreateStoreChannel: null != e && e.features.has(ej.GuildFeatures.COMMERCE),
                canCreateAnnouncementChannel: null != e && e.features.has(ej.GuildFeatures.NEWS),
                user: t,
                owner: i,
                memberRoles: ef.Ay.getMember(s, t.id)?.roles ?? [],
                canViewChannels: eG.A.can(ej.xBc.VIEW_CHANNEL, e),
                canConnect: eG.A.can(ej.xBc.CONNECT, e),
                isAdmin: l,
                cloneChannel: r,
                channelType: r?.type ?? n,
                canManageRoles: eG.A.can(ej.xBc.MANAGE_ROLES, e),
                canManageChannels: eG.A.can(ej.xBc.MANAGE_CHANNELS, e),
            };
        }),
        d = (0, C.yK)([el.A], () =>
            el.A.getGuildApplicationIds(s)
                .map((e) => el.A.getApplication(e))
                .filter(eU.Vq),
        ),
        h = new Set(r.memberRoles),
        { canManageRoles: u, canManageChannels: g } = r,
        p = (0, eb.R)(s) && u && g,
        m = (0, eE.V)(r?.guild),
        E = ep.useConfig({ guildId: s, location: "CreateChannel" }).enabled,
        [I, A] = l.useState(""),
        [b, N] = l.useState(""),
        [S, O] = l.useState(null),
        { data: f, isLoading: _ } = (0, eC.YK)(I),
        G = l.useMemo(() => c()(A, 300), []),
        T = l.useCallback(
            (e) => {
                N(e), G(e);
            },
            [G],
        );
    return (0, i.jsx)(eK, {
        ...e,
        ...r,
        memberRoleIds: h,
        applications: d,
        canCreateStageChannel: p,
        canCreateMediaChannel: m,
        canCreateGameInvitesChannel: E,
        ref: t,
        width: 496,
        games: f,
        isGamesQueryLoading: _ || b !== I,
        onGameQueryChange: T,
        selectedGame: S,
        onSelectedGameChange: O,
    });
});
