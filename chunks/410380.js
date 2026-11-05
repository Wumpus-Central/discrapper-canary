(n.d(t, { p: () => ts, default: () => td }), n(321073));
var i,
    l = n(477900),
    a = n(582128),
    s = n(503698),
    r = n.n(s),
    o = n(284009),
    u = n.n(o),
    d = n(435558),
    c = n.n(d),
    h = n(651188),
    g = n(855986),
    p = n(189213),
    A = n(770880),
    m = n(276293),
    E = n(146151),
    I = n(983851),
    C = n(597050),
    b = n(56059),
    N = n(434831),
    S = n(532590),
    f = n(191023),
    _ = n(778492),
    O = n(278416),
    L = n(451394),
    M = n(901117),
    G = n(323384),
    v = n(805251),
    T = n(834730),
    U = n(265872),
    x = n(231723),
    D = n(28863),
    y = n(192308),
    P = n(95477),
    R = n(771871),
    j = n(691885),
    w = n(143129),
    k = n(530557),
    F = n(890497),
    H = n(194261),
    V = n(683071),
    B = n(755584),
    W = n(778858),
    X = n(485967),
    Y = n(73153);
let z = {};
class Z extends g.Ay.Store {
    static displayName = "ApplicationBranchStore";
    getBranches(e) {
        return z[e] ?? [];
    }
}
let Q = new Z(Y.h, {
    OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branches: n } = e;
        z[t] = n;
    },
    LOGOUT: function () {
        z = {};
    },
});
var K = n(792996);
class J extends a.Component {
    static defaultProps = { includeMaster: !1 };
    componentDidMount() {
        let { applicationId: e, branches: t, onHasBranchesChange: n } = this.props;
        ((0, X.w)(e), n?.(t.length > 0));
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
        let { branches: e, selectedBranchId: t, applicationId: n, includeMaster: i, hide: a, label: s } = this.props;
        if (0 === e.length || a) return null;
        let r = i ? e : e.filter((e) => e.id !== n);
        return (0, l.jsx)(j.l, {
            label: s,
            options: r.map((e) => ({ id: e.id, label: e.getName(n), value: e.id })),
            placeholder: K.intl.string(K.t.Sw7pHF),
            value: t,
            onSelectionChange: this.handleChange,
            selectionMode: "single",
            fullWidth: !0,
        });
    }
}
let q = g.Ay.connectStores([Q], (e) => {
    let { applicationId: t } = e;
    return { branches: Q.getBranches(t) };
})(J);
var $ = n(830382),
    ee = n(67480);
class et extends a.Component {
    componentDidMount() {
        let { applicationId: e, skus: t, selectedSkuId: n, onChange: i } = this.props;
        null == t || 0 === t.length ? (0, $.O1)(e, !1) : 1 === t.length && null == n && i(t[0].id);
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
            i = null != e && 0 === e.length;
        return (0, l.jsx)(j.l, {
            selectionMode: "single",
            label: n,
            options: null != e ? e.map((e) => ({ id: e.id, label: e.name, value: e.id })) : [],
            placeholder: i ? K.intl.string(K.t.hKcgP5) : K.intl.string(K.t.QV60Uq),
            value: t,
            onSelectionChange: this.handleChange,
            disabled: i,
        });
    }
}
let en = g.Ay.connectStores([ee.A], (e) => {
    let { applicationId: t } = e;
    return { skus: ee.A.getForApplication(t) };
})(et);
var ei = n(155718),
    el = n(149468),
    ea = n(945810);
let es = (0, ea.mj)({
    kind: "guild",
    name: "2026-07-app-channels",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var er = n(458350),
    eo = n(587895),
    eu = n(495273),
    ed = n(904630),
    ec = n(86944),
    eh = n(915089),
    eg = n(375499),
    ep = n(920134),
    eA = n(770335),
    em = n(611371),
    eE = n(769015);
let eI = (0, ea.mj)({
    kind: "guild",
    name: "2026-06-game-invites-channel",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
n(807632);
var eC = n(778747),
    eb = n(518805),
    eN = n(219444);
n(938796);
var eS = n(279116),
    ef = n(137005),
    e_ =
        (((i = {}).ALL_CONTENT = "all_content"),
        (i.SUMMARIES = "summaries"),
        (i.MESSAGES = "messages"),
        (i.NONE = "none"),
        i);
let eO = eS.D.SWP_CHANNEL_SUMMARIES_EXCLUDED,
    eL = eS.D.SWP_CHANNEL_MESSAGES_EXCLUDED,
    eM = eO | eL,
    eG = { all_content: 0, summaries: eL, messages: eO, none: eM },
    ev = { all_content: ef.default.QsbbMS, summaries: K.t.q21fUr, messages: K.t.OIgYlQ, none: K.t.PoWNfe };
var eT = n(452027),
    eU = n(998445),
    ex = n(975571),
    eD = n(278296),
    ey = n(734057),
    eP = n(317525),
    eR = n(71393),
    ej = n(576705),
    ew = n(677166),
    ek = n(652215);
let eF = {
    [e_.ALL_CONTENT]: [e_.ALL_CONTENT, e_.SUMMARIES, e_.MESSAGES, e_.NONE],
    [e_.SUMMARIES]: [e_.SUMMARIES, e_.NONE],
    [e_.MESSAGES]: [e_.MESSAGES, e_.NONE],
    [e_.NONE]: [],
};
function eH(e) {
    let t = (e & eS.D.SWP_CHANNEL_SUMMARIES_EXCLUDED) == 0,
        n = (e & eS.D.SWP_CHANNEL_MESSAGES_EXCLUDED) == 0;
    return t && n ? e_.ALL_CONTENT : t ? e_.SUMMARIES : n ? e_.MESSAGES : e_.NONE;
}
function eV() {
    return (0, l.jsx)(eT.D, {
        label: K.intl.string(ef.default.uneDIi),
        icon: eU.GlobeEarthIcon,
        description: K.intl.string(ef.default["MrI+fw"]),
        layout: "horizontal",
        role: "group",
        children: (0, l.jsx)(T.E, {
            variant: "body-md/normal",
            color: "text-muted",
            children: K.intl.string(K.t.PoWNfe),
        }),
    });
}
function eB(e) {
    let { value: t, options: n, readOnly: i, onChange: s } = e,
        r = a.useMemo(() => n.map((e) => ({ id: e, value: e, label: K.intl.string(ev[e]) })), [n]);
    return (0, l.jsx)(j.l, {
        label: K.intl.string(ef.default.uneDIi),
        icon: eU.GlobeEarthIcon,
        description: K.intl.format(ef.default["o3+MNm"], {
            learnMoreURL: ex.A.getArticleURL(ek.MVz.SERVER_WEB_PAGES_ADMIN),
        }),
        layout: "horizontal",
        fullWidth: !0,
        readOnly: i,
        selectionMode: "single",
        value: t,
        options: r,
        onSelectionChange: s,
    });
}
function eW(e) {
    let t,
        n,
        i,
        a,
        { guildId: s, isPrivate: r, flags: o, onChange: u } = e,
        d =
            ((t = (0, ew.C)(s, "create_guild_channel")),
            (n = (0, ew.Zu)(t ? s : null, "create_guild_channel")),
            (i = (0, g.bG)([eR.A], () => eR.A.getGuild(s), [s])),
            (a = (0, g.bG)([ej.A], () => ej.A.can(ek.xBc.MANAGE_GUILD, i), [i])),
            t && n && null != i
                ? (function (e) {
                      let { guild: t, flags: n, isPrivate: i, canManageGuild: l } = e,
                          a = Object.values(eD.tR).reduce((e, n) => ((0, eD.Ml)(t, n) ? e : e | n.channelFlag), 0),
                          s = eF[eH(a)];
                      return 0 === s.length
                          ? { kind: "hidden" }
                          : i
                            ? { kind: "private" }
                            : { kind: "select", value: eH(n | a), options: s, serverFlags: a, readOnly: !l };
                  })({ guild: i, flags: o, isPrivate: r, canManageGuild: a })
                : { kind: "hidden" });
    switch (d.kind) {
        case "hidden":
            return null;
        case "private":
            return (0, l.jsx)(eV, {});
        case "select":
            return (0, l.jsx)(eB, {
                value: d.value,
                options: d.options,
                readOnly: d.readOnly,
                onChange: (e) => {
                    var t;
                    return u(((t = d.serverFlags), "none" === e ? eG[e] : eG[e] & ~t));
                },
            });
    }
}
function eX(e) {
    var t;
    let { categoryId: n, channelType: i, isPrivate: a, ...s } = e,
        r =
            ((t = s.guildId),
            (0, g.bG)(
                [ey.A, eR.A, eP.A],
                () => {
                    let e = null != n ? ey.A.getChannel(n) : eR.A.getGuild(t);
                    return null != e && !(0, eD.Wz)(e);
                },
                [t, n],
            ));
    return eD.lo.has(i) ? (0, l.jsx)(eW, { ...s, isPrivate: a || r }) : null;
}
var eY = n(976860),
    ez = n(233993),
    eZ = n(284738),
    eQ = n(841811),
    eK = n(95701),
    eJ = n(696451),
    eq = n(994500),
    e$ = n(287809),
    e0 = n(147036),
    e1 = n(403362),
    e7 = n(965805),
    e5 = n(47167),
    e8 = n(280513),
    e3 = n(837011),
    e4 = n(90084);
function e9(e) {
    let { guildId: t, channelType: n, className: i } = e,
        { guildProfile: s, fetchGuildProfile: r, fetchStatus: o } = (0, e4.u)(t),
        u = o !== e3.X.FETCHED,
        d = null != s && e8.i.VISIBLE.has(s.visibility);
    a.useEffect(() => {
        r();
    }, [t, r]);
    let c = [];
    if (
        n === ek.rbe.GUILD_ANNOUNCEMENT &&
        (c.push(K.intl.format(K.t.tI7KNX, { documentationLink: ex.A.getArticleURL(ek.MVz.ANNOUNCEMENT_CHANNELS) })),
        !u && !d)
    ) {
        let e = K.intl.string(K.t["2Ab4Id"]);
        c.push(e);
    }
    return 0 === c.length
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: c.map((e, t) =>
                  (0, l.jsx)(T.E, { className: i, variant: "body-sm/normal", children: e }, `description-${t}`),
              ),
          });
}
var e2 = n(746080),
    e6 = n(290261),
    te = n(307731),
    tt = n(818348),
    tn = n(354817),
    ti = n(236048);
let tl = "GAME_INVITES_CHANNEL_OPTION";
function ta(e) {
    return e === tl ? ek.rbe.GUILD_FORUM : e;
}
function ts(e) {
    let { isNew: t, isBeta: n } = e,
        i = null;
    return (
        !0 === t
            ? (i = (0, l.jsx)("div", {
                  className: ti.Ad,
                  children: (0, l.jsx)(v.E, { type: { text: K.intl.string(K.t.psHMa6) }, variant: "primary" }),
              }))
            : !0 === n && (i = (0, l.jsx)(em.A, { className: ti.Ad })),
        i
    );
}
function tr(e) {
    let t,
        {
            transitionState: n,
            onClose: i,
            channelType: s,
            iconComponent: r,
            error: o,
            name: u,
            guildId: d,
            onBack: c,
            canSubmit: h,
            onMembersChange: p,
            pendingPermissionOverwrites: A,
        } = e,
        [m, E] = a.useState(""),
        [I, C] = a.useState({}),
        b = a.useRef(null),
        N = (0, g.bG)([eR.A], () => eR.A.getGuild(d)),
        S = s === ek.rbe.GUILD_STAGE_VOICE,
        { roles: f, members: _, getRichTag: O } = (0, ec.K)(N, null, S ? ez.QY : (0, eK.TA)(s), m, S),
        L = ed.A.useSections({ roles: f, members: _ });
    return (a.useEffect(() => {
        p(I);
    }, [I, p]),
    null == N)
        ? null
        : ((t =
              0 === Object.keys(A).length
                  ? K.intl.string(K.t["5Wxrcd"])
                  : s === ek.rbe.GUILD_CATEGORY
                    ? K.intl.string(K.t["ISN+NM"])
                    : K.intl.string(K.t["fUYU+j"])),
          (0, l.jsx)(ed.A.Provider, {
              listRef: b,
              query: m,
              setQuery: E,
              pendingAdditions: I,
              setPendingAdditions: C,
              roles: f,
              members: _,
              getRichTag: O,
              children: (0, l.jsx)(ed.A.Modal, {
                  transitionState: n,
                  onClose: i,
                  title: S ? K.intl.string(K.t["S/6zHM"]) : K.intl.string(K.t.dMJ3Y6),
                  subtitle: { text: u, leadingIcon: r },
                  input: (0, l.jsxs)(l.Fragment, {
                      children: [
                          S
                              ? (0, l.jsx)(T.E, {
                                    color: "text-default",
                                    className: ti.h_,
                                    variant: "body-sm/normal",
                                    children: K.intl.string(K.t.f7VbhF),
                                })
                              : void 0,
                          (0, l.jsx)(ed.A.SearchBox, { placeholderText: K.intl.string(K.t.iezLLn) }),
                          (0, l.jsx)(T.E, {
                              className: ti.pK,
                              variant: "body-xs/normal",
                              children: K.intl.string(K.t.rwFx85),
                          }),
                      ],
                  }),
                  preview: o,
                  listProps: {
                      sectionHeight: ed.A.SECTION_HEIGHT,
                      renderSection: ed.A.renderSection,
                      rowHeight: ed.A.ROW_HEIGHT,
                      renderRow: ed.A.renderRow,
                      sections: L,
                      innerAriaOrientation: "vertical",
                      innerRole: "listbox",
                  },
                  actions: [
                      { variant: "secondary", text: K.intl.string(K.t["13/7kX"]), onClick: c },
                      { variant: "primary", text: t, type: "submit", disabled: !h },
                  ],
              }),
          }));
}
function to(e) {
    let { onEmojiPicked: t, guildId: n } = e,
        i = a.useRef(null),
        s = a.useMemo(
            () => ({
                popoutLocation: {
                    page: ek.liQ.CREATE_CHANNEL_MODAL,
                    section: ek.JJy.CHANNEL_NAME,
                    object: ek.ZSU.EMOJI_PICKER_BUTTON,
                },
            }),
            [],
        ),
        r = a.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, l.jsx)(ep.A, {
                    channel: null,
                    guildId: n,
                    pickerIntention: te.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        (null != n && n.type === eA.i.UNICODE && t(n.surrogates), l && i());
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: s,
                });
            },
            [s, n, t],
        );
    return (0, l.jsx)(U.Y, {
        targetElementRef: i,
        renderPopout: r,
        animation: U.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(eg.A, {
                ...e,
                ref: i,
                active: n,
                className: ti.Z8,
                tabIndex: 0,
                focusProps: { offset: { top: 10, bottom: 10, left: -4, right: 10 } },
            });
        },
    });
}
class tu extends a.PureComponent {
    headerId = (0, eh.Ld)();
    _input;
    constructor(e) {
        super(e);
        let { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        ((this.state = {
            channelTypeOption: t ?? ek.rbe.GUILD_TEXT,
            name: null != n ? (0, e5.m1)(n, e$.default, eq.A) : (i ?? ""),
            pendingPermissionOverwrites: {},
            isPrivate: !1,
            contentFlags: 0,
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
            (this.handlePermissionOverwriteChange = this.handlePermissionOverwriteChange.bind(this)));
    }
    componentDidMount() {
        let { _input: e } = this;
        null != e && e.select();
        let { guildId: t, applications: n, canCreateStoreChannel: i } = this.props;
        (i && null == n && W.A.fetchApplications(t),
            el.Ay.trackWithMetadata(ek.HAw.OPEN_MODAL, { type: "Create Channel" }));
    }
    componentDidUpdate(e, t) {
        (!t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelTypeOption === ek.rbe.GUILD_ANNOUNCEMENT &&
            this.setState({ channelTypeOption: ek.rbe.GUILD_TEXT }),
            !t.isPrivate &&
                this.state.isPrivate &&
                el.Ay.trackWithMetadata(ek.HAw.OPEN_MODAL, { type: "Create Private Channel" }));
    }
    getGuildId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.guildId;
    }
    setInputRef = (e) => {
        this._input = e;
    };
    handleNameChange = (e) => {
        let t = ta(this.state.channelTypeOption);
        e = (0, e7.A)(e, t);
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
            (this._input?.focus(), this._input?.setSelectionRange(n, n));
        });
    };
    handleTypeChange = (e) => {
        let t = ta(e),
            n = (0, e7.A)(this.state.name, t);
        (t === ek.rbe.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
            this.setState({
                channelTypeOption: e,
                name: n,
                applicationId: null,
                skuId: null,
                branchId: null,
                contentFlags: 0,
            }));
    };
    handlePrivacyChange = (e) => {
        this.setState({ isPrivate: e, contentFlags: 0 });
    };
    handleContentFlagsChange = (e) => {
        this.setState({ contentFlags: e });
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
            { isPrivate: l, channelTypeOption: a, skuId: s, applicationId: r, name: o, submitting: u } = this.state,
            d = ta(a);
        return (
            !u &&
            n !== x.ip.EXITING &&
            "" !== o &&
            "" !== o.trim() &&
            (!l || !!(0, eu.n0)(d, e, t)) &&
            (d !== ek.rbe.GUILD_STORE || null != s) &&
            (a !== tl || null != i) &&
            (d !== ek.rbe.GUILD_APP || null != r) &&
            !0
        );
    }
    handleSubmit = async (e) => {
        let t, n, i;
        e.preventDefault();
        let {
                cloneChannel: l,
                categoryId: a,
                user: s,
                memberRoleIds: r,
                isAdmin: o,
                onClose: u,
                owner: d,
                selectedGame: h,
            } = this.props,
            {
                name: g,
                pendingPermissionOverwrites: p,
                channelTypeOption: A,
                skuId: m,
                branchId: E,
                applicationId: I,
                isPrivate: C,
                contentFlags: b,
            } = this.state,
            N = ta(A),
            S = ((A === tl ? e2.lx.IS_GAME_INVITES_CHANNEL : null) ?? 0) | b | ((l?.flags ?? 0) & eM),
            f = (function (e) {
                if (e === tl) return [{ name: "No Mic" }];
            })(A),
            _ = this.getGuildId();
        if (null != _) {
            if (null != l) ((t = c().values(l.permissionOverwrites)), (n = l.bitrate), (i = l.userLimit));
            else if (N === ek.rbe.GUILD_ANNOUNCEMENT) t = (0, e0.IP)(_);
            else {
                if (C) {
                    t = (0, e0.CG)(_, N, [], !0);
                    let e = (0, eu.D4)(p, N);
                    e.length > 0 && (t = t.concat(e));
                    let n = null != d && s.id === d.id;
                    t.some((e) => r.has(e.id)) || o || n || t.push((0, e0.n3)(s.id, N));
                }
                N === ek.rbe.GUILD_STAGE_VOICE &&
                    ((t = []),
                    Object.values(p).forEach((e) => {
                        let { row: n } = e;
                        null != n.id &&
                            "" !== n.id &&
                            (n.rowType === e6.T6.ROLE
                                ? t.push((0, eQ.j)(n.id, ei.r2.ROLE))
                                : n.rowType === e6.T6.MEMBER && t.push((0, eQ.j)(n.id, ei.r2.MEMBER)));
                    }));
            }
            this.setState({ errors: {}, submitting: !0 });
            try {
                let e = await B.A.createChannel({
                    guildId: _,
                    type: N,
                    name: g,
                    permissionOverwrites: t,
                    bitrate: n,
                    userLimit: i,
                    parentId: N !== ek.rbe.GUILD_CATEGORY ? a : null,
                    skuId: m,
                    branchId: E,
                    applicationId: I,
                    flags: 0 !== S ? S : null,
                    availableTags: f,
                    gameId: h?.id,
                });
                if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                let l = e.body;
                ((0, eK.ig)(N) && (0, eY.uh)(l.guild_id, l.id), this.setState({ submitting: !1 }), u());
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
            case ek.rbe.GUILD_TEXT:
                return e ? A.TextLockIcon : m.TextIcon;
            case ek.rbe.GUILD_FORUM:
                return b.ForumIcon;
            case ek.rbe.GUILD_MEDIA:
                return f.ImageIcon;
            case ek.rbe.GUILD_VOICE:
                return e ? E.VoiceLockIcon : I.VoiceNormalIcon;
            case ek.rbe.GUILD_STORE:
                return O.TagIcon;
            case ek.rbe.GUILD_ANNOUNCEMENT:
                return _.AnnouncementsIcon;
            case ek.rbe.GUILD_STAGE_VOICE:
                return L.StageIcon;
            case tl:
                return N.ExperimentalLfgIcon;
            case ek.rbe.GUILD_APP:
                return e ? M.AppsLockIcon : G.AppsIcon;
            default:
                let n = ta(t);
                return (0, eK.ke)(n) ? m.TextIcon : tt.FX;
        }
    }
    getHelperText() {
        let { cloneChannel: e, channelType: t, guildId: i } = this.props;
        return null != e
            ? K.intl.format(K.t.s2ZzZZ, { name: (0, e5.m1)(e, e$.default, eq.A, !0) })
            : t === ek.rbe.GUILD_FORUM
              ? K.intl.format(K.t.tbVWyR, {
                    forumUpsellHook: (e, t) =>
                        (0, l.jsx)(
                            D.Anchor,
                            {
                                onClick: () =>
                                    (0, y.mM)(async () => {
                                        let { default: e } = await Promise.all([
                                            n.e(790853),
                                            n.e(571331),
                                            n.e(841157),
                                            n.e(66748),
                                        ]).then(n.bind(n, 774538));
                                        return (t) => (0, l.jsx)(e, { ...t, guildId: i });
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
            { errors: n, channelTypeOption: i } = this.state,
            a = ta(i);
        n?.name != null && (e = Array.isArray(n.name) ? n.name.join(", ") : n.name);
        let s = a === ek.rbe.GUILD_CATEGORY,
            r = s ? K.intl.string(K.t.OCAkGP) : K.intl.string(K.t.PVbHDl),
            o = this.getIconComponent();
        return (0, l.jsx)(P.k, {
            label: r,
            helperText: this.getHelperText(),
            error: e,
            value: this.state.name,
            onChange: this.handleNameChange,
            inputRef: this.setInputRef,
            maxLength: 100,
            placeholder: (function (e) {
                switch (e) {
                    case ek.rbe.GUILD_CATEGORY:
                        return K.intl.string(K.t.eTVbtx);
                    case ek.rbe.GUILD_FORUM:
                        return K.intl.string(K.t["5z1Xat"]);
                    default:
                        return K.intl.string(K.t["bw/b8E"]);
                }
            })(i),
            leading: s ? void 0 : o,
            trailing: {
                type: "emoji",
                button: (0, l.jsx)(to, {
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
                canCreateAnnouncementChannel: i,
                canCreateStageChannel: a,
                canCreateMediaChannel: s,
                canCreateGameInvitesChannel: r,
                canCreateAppChannel: o,
            } = this.props,
            { channelTypeOption: u, isPrivate: d } = this.state;
        if (null != e || u === ek.rbe.GUILD_CATEGORY) return;
        let c = null != t && t.length > 0;
        return (0, l.jsx)(R.z, {
            label: K.intl.string(K.t["7ZcXG2"]),
            options: (function (e) {
                let {
                        isPrivate: t,
                        showStoreChannelOption: n,
                        showAnnouncementChannelOption: i,
                        canCreateStageChannel: l,
                        canCreateMediaChannel: a,
                        canCreateGameInvitesChannel: s,
                        canCreateAppChannel: r,
                    } = e,
                    o = [
                        {
                            leadingIcon: t ? A.TextLockIcon : m.TextIcon,
                            name: K.intl.string(K.t.pnuRXC),
                            value: ek.rbe.GUILD_TEXT,
                            desc: K.intl.string(K.t["Hf5Lb+"]),
                        },
                        {
                            leadingIcon: t ? E.VoiceLockIcon : I.VoiceNormalIcon,
                            name: K.intl.string(K.t.Sx55Oh),
                            value: ek.rbe.GUILD_VOICE,
                            desc: K.intl.string(K.t.pqfkoF),
                        },
                        {
                            leadingIcon: t ? C.ForumLockIcon : b.ForumIcon,
                            name: K.intl.string(K.t.eAVID5),
                            value: ek.rbe.GUILD_FORUM,
                            desc: K.intl.string(K.t.iZ5pgg),
                        },
                    ];
                return (
                    s &&
                        o.push({
                            leadingIcon: N.ExperimentalLfgIcon,
                            name: K.intl.string(tn.default["h/GwWL"]),
                            value: tl,
                            desc: K.intl.string(tn.default.DxwBMf),
                        }),
                    a &&
                        o.push({
                            leadingIcon: t ? S.ImageLockIcon : f.ImageIcon,
                            name: K.intl.string(K.t["6x6fVg"]),
                            value: ek.rbe.GUILD_MEDIA,
                            desc: K.intl.string(K.t.JyCrwS),
                        }),
                    i &&
                        o.push({
                            leadingIcon: _.AnnouncementsIcon,
                            name: K.intl.string(K.t.qr9dEP),
                            value: ek.rbe.GUILD_ANNOUNCEMENT,
                            desc: K.intl.string(K.t.gBkfzu),
                        }),
                    n &&
                        o.push({
                            leadingIcon: O.TagIcon,
                            name: K.intl.string(K.t.SxjkXf),
                            value: ek.rbe.GUILD_STORE,
                            desc: K.intl.string(K.t.nmCPMC),
                        }),
                    l &&
                        o.push({
                            leadingIcon: L.StageIcon,
                            name: K.intl.string(K.t.pNWst0),
                            value: ek.rbe.GUILD_STAGE_VOICE,
                            desc: K.intl.string(K.t.VPAwgo),
                        }),
                    r &&
                        o.push({
                            leadingIcon: t ? M.AppsLockIcon : G.AppsIcon,
                            name: K.intl.string(K.t["A+8d6M"]),
                            value: ek.rbe.GUILD_APP,
                            desc: K.intl.string(K.t.LVQQ3Z),
                        }),
                    o
                );
            })({
                isPrivate: d,
                showStoreChannelOption: n && c,
                showAnnouncementChannelOption: i,
                canCreateStageChannel: a,
                canCreateMediaChannel: s,
                canCreateGameInvitesChannel: r,
                canCreateAppChannel: o,
            }),
            value: u,
            onChange: this.handleTypeChange,
        });
    }
    renderStoreOptions() {
        let { applications: e } = this.props,
            { applicationId: t, skuId: n, branchId: i, showBranches: a, hasBranches: s } = this.state;
        if (null == e || 0 === e.length) throw Error("Unexpected empty applications");
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(j.l, {
                    label: K.intl.string(K.t.vPIW2L),
                    options: e.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                    placeholder: K.intl.string(K.t["3XfCPX"]),
                    value: t,
                    onSelectionChange: this.handleApplicationChange,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                null != t
                    ? (0, l.jsx)(
                          en,
                          {
                              label: K.intl.string(K.t.XNIWFj),
                              applicationId: t,
                              onChange: this.handleSKUChange,
                              selectedSkuId: n,
                              className: ti.dE,
                          },
                          t,
                      )
                    : null,
                null != t && s
                    ? (0, l.jsx)(w.d, {
                          label: K.intl.string(K.t["3e9mH5"]),
                          description: K.intl.format(K.t.UVXL1R, {
                              devPortalUrl: ek.X7G.API_DOCS_GAME_AND_SERVER_MANAGEMENT,
                          }),
                          icon: k.KeyIcon,
                          onChange: this.handleShowBranchesToggle,
                          checked: a,
                      })
                    : null,
                null != t
                    ? (0, l.jsx)("div", {
                          className: ti.dE,
                          children: (0, l.jsx)(
                              q,
                              {
                                  label: a ? K.intl.string(K.t.o7DqF3) : void 0,
                                  applicationId: t,
                                  onChange: this.handleBranchChange,
                                  selectedBranchId: i,
                                  hide: !a,
                                  includeMaster: a,
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
                selectedGame: i,
                onSelectedGameChange: a,
            } = this.props,
            s =
                e?.map((e) => ({
                    id: e.id,
                    label: e.name,
                    value: e.id,
                    leading: (0, l.jsx)(eE.A, { game: e, size: eE.M.XSMALL }),
                })) ?? [];
        return (
            (null != i && s.some((e) => e.id === i.id)) ||
                null == i ||
                s.push({
                    id: i.id,
                    label: i.name,
                    value: i.id,
                    leading: (0, l.jsx)(eE.A, { game: i, size: eE.M.XSMALL }),
                }),
            (0, l.jsx)(F.Z, {
                label: K.intl.string(tn.default["2wS18o"]),
                options: s,
                placeholder: K.intl.string(tn.default.Mbd4OZ),
                value: i?.id ?? null,
                onSelectionChange: function (t) {
                    a(e?.find((e) => e.id === t) ?? null);
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
        return (0, l.jsx)(er.A, {
            guildId: e,
            channelId: t,
            selectedApplicationId: n,
            onChange: this.handleApplicationChange,
        });
    }
    renderPrivacyOptions() {
        let { cloneChannel: e } = this.props,
            { channelTypeOption: t, isPrivate: n } = this.state;
        if (null != e || t === ek.rbe.GUILD_ANNOUNCEMENT) return null;
        let i = t === ek.rbe.GUILD_CATEGORY ? K.intl.string(K.t.lEPAZ5) : K.intl.string(K.t.aUI70g),
            a = t === ek.rbe.GUILD_CATEGORY ? K.intl.string(K.t.RQUk61) : K.intl.string(K.t.YguuKq);
        return (0, l.jsx)(w.d, {
            label: i,
            description: a,
            icon: H.LockIcon,
            onChange: this.handlePrivacyChange,
            checked: n,
        });
    }
    renderError(e) {
        let t,
            { channelTypeOption: n, isPrivate: i, errors: a } = this.state,
            s = ta(n),
            { canConnect: o, canViewChannels: u } = this.props;
        if (Object.values(a).length > 0) {
            if (null != a.message && "" !== a.message) t = Array.isArray(a.message) ? a.message.join(" ") : a.message;
            else if (e || null == a.name) {
                let e = Object.values(a)[0];
                e.length > 0 && (t = Array.isArray(e) ? e.join(" ") : e);
            }
        } else i && !(0, eu.n0)(s, u, o) && (t = (0, eu.ld)(s));
        if (null != t)
            return (0, l.jsx)("div", {
                className: r()(ti.$5, { [ti.SE]: e }),
                children: (0, l.jsx)(V.w, { type: "critical", message: t, role: "alert" }),
            });
    }
    handlePermissionOverwriteChange(e) {
        this.setState({ pendingPermissionOverwrites: e });
    }
    renderCreateChannelModal() {
        let e,
            t,
            { channelTypeOption: n, isPrivate: i, contentFlags: a } = this.state,
            s = ta(n),
            { guildId: r, transitionState: o, cloneChannel: u, categoryId: d, onClose: c } = this.props,
            h =
                null != u
                    ? K.intl.string(K.t.dEaPc4)
                    : s === ek.rbe.GUILD_CATEGORY
                      ? K.intl.string(K.t["ISN+NM"])
                      : K.intl.string(K.t["fUYU+j"]);
        if (null != d) {
            let t = ey.A.getChannel(d);
            e = K.intl.format(K.t.L1zJgb, { categoryName: t?.name ?? "" });
        }
        t = s === ek.rbe.GUILD_CATEGORY ? K.intl.string(K.t["ISN+NM"]) : K.intl.string(K.t["fUYU+j"]);
        let g = i || s === ek.rbe.GUILD_STAGE_VOICE;
        return (0, l.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, l.jsx)(p.a, {
                transitionState: o,
                onClose: c,
                title: h,
                subtitle: e,
                preview: this.renderError(),
                actions: [
                    { variant: "secondary", text: K.intl.string(K.t["ETE/oC"]), onClick: c },
                    g
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
                children: (0, l.jsxs)("div", {
                    className: ti.hM,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        s === ek.rbe.GUILD_STORE ? this.renderStoreOptions() : null,
                        n === tl ? this.renderGameInvitesChannelOptions() : null,
                        s === ek.rbe.GUILD_APP && null == u ? this.renderAppChannelOptions() : null,
                        (0, l.jsx)(e9, { guildId: r, channelType: s, className: ti.wI }),
                        s === ek.rbe.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions(),
                        null == u
                            ? (0, l.jsx)(eX, {
                                  guildId: r,
                                  categoryId: s !== ek.rbe.GUILD_ANNOUNCEMENT ? d : null,
                                  channelType: s,
                                  isPrivate: i && s !== ek.rbe.GUILD_ANNOUNCEMENT,
                                  flags: a,
                                  onChange: this.handleContentFlagsChange,
                              })
                            : null,
                    ],
                }),
            }),
        });
    }
    renderAddMemberSlideContent() {
        let { name: e, channelTypeOption: t, pendingPermissionOverwrites: n } = this.state,
            { guildId: i, onClose: a, transitionState: s } = this.props,
            r = () => {
                this.setState({ slide: "CHANNEL_INFO" });
            },
            o = this.canSubmit();
        return (0, l.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, l.jsx)(tr, {
                onClose: a,
                transitionState: s,
                channelType: ta(t),
                iconComponent: this.getIconComponent(),
                error: this.renderError(!0),
                name: e,
                guildId: i,
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
function td(e) {
    let { ref: t, ...n } = e,
        { channelType: i, guildId: s, cloneChannelId: r } = n,
        o = (0, g.cf)([eR.A, e$.default, ej.A, ey.A, eJ.Ay], () => {
            let e = eR.A.getGuild(s),
                t = e$.default.getCurrentUser();
            u()(null != t, "CreateChannel: user cannot be undefined");
            let n = null != e && null != e.ownerId ? e$.default.getUser(e.ownerId) : null,
                l = ej.A.can(ek.xBc.ADMINISTRATOR, e),
                a = ey.A.getChannel(r);
            return {
                guild: e,
                canCreateStoreChannel: null != e && e.features.has(ek.GuildFeatures.COMMERCE),
                canCreateAnnouncementChannel: null != e && e.features.has(ek.GuildFeatures.NEWS),
                user: t,
                owner: n,
                memberRoles: eJ.Ay.getMember(s, t.id)?.roles ?? [],
                canViewChannels: ej.A.can(ek.xBc.VIEW_CHANNEL, e),
                canConnect: ej.A.can(ek.xBc.CONNECT, e),
                isAdmin: l,
                cloneChannel: a,
                channelType: a?.type ?? i,
                canManageRoles: ej.A.can(ek.xBc.MANAGE_ROLES, e),
                canManageChannels: ej.A.can(ek.xBc.MANAGE_CHANNELS, e),
            };
        }),
        d = (0, g.yK)([eo.A], () =>
            eo.A.getGuildApplicationIds(s)
                .map((e) => eo.A.getApplication(e))
                .filter(e1.Vq),
        ),
        c = new Set(o.memberRoles),
        { canManageRoles: p, canManageChannels: A } = o,
        m = (0, eZ.R)(s) && p && A,
        E = (0, eN.V)(o?.guild),
        I = eI.useConfig({ guildId: s, location: "CreateChannel" }).enabled,
        C = es.useConfig({ guildId: s, location: "CreateChannel web" }).enabled,
        [b, N] = a.useState(""),
        [S, f] = a.useState(null),
        {
            results: _,
            isLoading: O,
            onSelect: L,
        } = (0, eb.J)(b, { surface: eC.K.CREATE_CHANNEL, filterGroup: h.m.DEFAULT }),
        M = a.useCallback(
            (e) => {
                (null != e && L(e.id), f(e));
            },
            [L],
        );
    return (0, l.jsx)(tu, {
        ...n,
        ...o,
        memberRoleIds: c,
        applications: d,
        canCreateStageChannel: m,
        canCreateMediaChannel: E,
        canCreateGameInvitesChannel: I,
        canCreateAppChannel: C,
        ref: t,
        width: 496,
        games: _,
        isGamesQueryLoading: O,
        onGameQueryChange: N,
        selectedGame: S,
        onSelectedGameChange: M,
    });
}
