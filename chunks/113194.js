n.d(t, { default: () => ew, p: () => eD }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    h = n(735438),
    d = n.n(h),
    u = n(189213),
    c = n(144228),
    p = n(17928),
    g = n(661531),
    m = n(770880),
    C = n(276293),
    E = n(146151),
    A = n(983851),
    I = n(597050),
    b = n(56059),
    N = n(532590),
    O = n(191023),
    S = n(778492),
    _ = n(278416),
    f = n(451394),
    T = n(777666),
    U = n(834730),
    G = n(922016),
    v = n(231723),
    L = n(349288),
    x = n(192308),
    M = n(292666),
    R = n(691885),
    D = n(243721),
    y = n(530557),
    j = n(194261),
    P = n(512950),
    w = n(755584),
    H = n(686956),
    k = n(712963),
    B = n(228366);
let V = {};
class F extends p.Ay.Store {
    static displayName = "ApplicationBranchStore";
    getBranches(e) {
        return V[e] ?? [];
    }
}
let Y = new F(B.h, {
    OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branches: n } = e;
        V[t] = n;
    },
    LOGOUT: function () {
        V = {};
    },
});
var X = n(985018);
class W extends s.Component {
    static defaultProps = { includeMaster: !1 };
    componentDidMount() {
        let { applicationId: e, branches: t, onHasBranchesChange: n } = this.props;
        (0, k.w)(e), n?.(t.length > 0);
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
        return (0, i.jsx)(R.l, {
            label: r,
            options: a.map((e) => ({ id: e.id, label: e.getName(n), value: e.id })),
            placeholder: X.intl.string(X.t.Sw7pHF),
            value: t,
            onSelectionChange: this.handleChange,
            selectionMode: "single",
            fullWidth: !0,
        });
    }
}
let Z = p.Ay.connectStores([Y], (e) => {
    let { applicationId: t } = e;
    return { branches: Y.getBranches(t) };
})(W);
var K = n(830382),
    q = n(67480);
class z extends s.Component {
    componentDidMount() {
        let { applicationId: e, skus: t, selectedSkuId: n, onChange: i } = this.props;
        null == t || 0 === t.length ? (0, K.O1)(e, !1) : 1 === t.length && null == n && i(t[0].id);
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
        return (0, i.jsx)(R.l, {
            selectionMode: "single",
            label: n,
            options: null != e ? e.map((e) => ({ id: e.id, label: e.name, value: e.id })) : [],
            placeholder: s ? X.intl.string(X.t.hKcgP5) : X.intl.string(X.t.QV60Uq),
            value: t,
            onSelectionChange: this.handleChange,
            disabled: s,
        });
    }
}
let J = p.Ay.connectStores([q.A], (e) => {
    let { applicationId: t } = e;
    return { skus: q.A.getForApplication(t) };
})(z);
var Q = n(155718),
    $ = n(58149),
    ee = n(587895),
    et = n(495273),
    en = n(517622),
    ei = n(86944),
    es = n(915089),
    el = n(375499),
    er = n(267889),
    ea = n(770335),
    eo = n(611371),
    eh = n(219444),
    ed = n(976860),
    eu = n(233993),
    ec = n(284738),
    ep = n(841811),
    eg = n(95701),
    em = n(734057),
    eC = n(696451),
    eE = n(71393),
    eA = n(576705),
    eI = n(994500),
    eb = n(287809),
    eN = n(147036),
    eO = n(403362),
    eS = n(47167),
    e_ = n(280513),
    ef = n(837011),
    eT = n(90084),
    eU = n(975571),
    eG = n(652215);
function ev(e) {
    let { guildId: t, channelType: n, className: l } = e,
        { guildProfile: r, fetchGuildProfile: a, fetchStatus: o } = (0, eT.u)(t),
        h = o !== ef.X.FETCHED,
        d = null != r && e_.i.VISIBLE.has(r.visibility);
    s.useEffect(() => {
        a();
    }, [t, a]);
    let u = [];
    if (
        n === eG.rbe.GUILD_ANNOUNCEMENT &&
        (u.push(X.intl.format(X.t.tI7KNX, { documentationLink: eU.A.getArticleURL(eG.MVz.ANNOUNCEMENT_CHANNELS) })),
        !h && !d)
    ) {
        let e = X.intl.string(X.t["2Ab4Id"]);
        u.push(e);
    }
    return 0 === u.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: u.map((e, t) =>
                  (0, i.jsx)(U.E, { className: l, variant: "text-sm/normal", children: e }, `description-${t}`),
              ),
          });
}
var eL = n(719366),
    ex = n(307731),
    eM = n(818348),
    eR = n(587679);
function eD(e) {
    let { isNew: t, isBeta: n } = e,
        s = null;
    return (
        !0 === t
            ? (s = (0, i.jsx)(T.Lp, {
                  text: X.intl.string(X.t.psHMa6),
                  className: eR.Ad,
                  color: g.A.colors.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER.css,
              }))
            : !0 === n && (s = (0, i.jsx)(eo.A, { className: eR.Ad })),
        s
    );
}
function ey(e) {
    let t,
        {
            transitionState: n,
            onClose: l,
            channelType: r,
            iconComponent: a,
            error: o,
            name: h,
            guildId: d,
            onBack: c,
            canSubmit: g,
            onMembersChange: m,
            pendingPermissionOverwrites: C,
        } = e,
        [E, A] = s.useState(""),
        [I, b] = s.useState({}),
        N = s.useRef(null),
        O = (0, p.bG)([eE.A], () => eE.A.getGuild(d)),
        S = r === eG.rbe.GUILD_STAGE_VOICE,
        { roles: _, members: f, getRichTag: T } = (0, ei.K)(O, null, S ? eu.QY : (0, eg.TA)(r), E, S),
        G = en.A.useSections({ roles: _, members: f });
    return (s.useEffect(() => {
        m(I);
    }, [I, m]),
    null == O)
        ? null
        : ((t =
              0 === Object.keys(C).length
                  ? X.intl.string(X.t["5Wxrcd"])
                  : r === eG.rbe.GUILD_CATEGORY
                    ? X.intl.string(X.t["ISN+NM"])
                    : X.intl.string(X.t["fUYU+j"])),
          (0, i.jsx)(en.A.Provider, {
              listRef: N,
              query: E,
              setQuery: A,
              pendingAdditions: I,
              setPendingAdditions: b,
              roles: _,
              members: f,
              getRichTag: T,
              children: (0, i.jsx)(u.Modal, {
                  transitionState: n,
                  onClose: l,
                  title: S ? X.intl.string(X.t["S/6zHM"]) : X.intl.string(X.t.dMJ3Y6),
                  subtitle: { text: h, leadingIcon: a },
                  input: (0, i.jsxs)(i.Fragment, {
                      children: [
                          S
                              ? (0, i.jsx)(U.E, {
                                    color: "text-default",
                                    className: eR.h_,
                                    variant: "text-sm/normal",
                                    children: X.intl.string(X.t.f7VbhF),
                                })
                              : void 0,
                          (0, i.jsx)(en.A.SearchBox, { placeholderText: X.intl.string(X.t.iezLLn) }),
                          (0, i.jsx)(U.E, {
                              className: eR.pK,
                              variant: "text-xs/normal",
                              children: X.intl.string(X.t.rwFx85),
                          }),
                      ],
                  }),
                  preview: o,
                  listProps: {
                      sectionHeight: en.A.SECTION_HEIGHT,
                      renderSection: en.A.renderSection,
                      rowHeight: en.A.ROW_HEIGHT,
                      renderRow: en.A.renderRow,
                      sections: G,
                      innerAriaOrientation: "vertical",
                      innerRole: "listbox",
                  },
                  actions: [
                      { variant: "secondary", text: X.intl.string(X.t["13/7kX"]), onClick: c },
                      { variant: "primary", text: t, type: "submit", disabled: !g },
                  ],
              }),
          }));
}
function ej(e) {
    let { onEmojiPicked: t, guildId: n } = e,
        l = s.useRef(null),
        r = s.useMemo(
            () => ({
                popoutLocation: {
                    page: eG.liQ.CREATE_CHANNEL_MODAL,
                    section: eG.JJy.CHANNEL_NAME,
                    object: eG.ZSU.EMOJI_PICKER_BUTTON,
                },
            }),
            [],
        ),
        a = s.useCallback(
            (e) => {
                let { closePopout: s } = e;
                return (0, i.jsx)(er.A, {
                    channel: null,
                    guildId: n,
                    pickerIntention: ex.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: s,
                    onNavigateAway: s,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        null != n && n.type === ea.i.UNICODE && t(n.surrogates), i && s();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: r,
                });
            },
            [r, n, t],
        );
    return (0, i.jsx)(G.Y, {
        targetElementRef: l,
        renderPopout: a,
        animation: G.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(el.A, {
                ...e,
                ref: l,
                active: n,
                className: eR.Z8,
                tabIndex: 0,
                focusProps: { offset: { top: 10, bottom: 10, left: -4, right: 10 } },
            });
        },
    });
}
class eP extends s.PureComponent {
    headerId = (0, es.Ld)();
    _input;
    constructor(e) {
        super(e);
        const { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        (this.state = {
            channelType: t ?? eG.rbe.GUILD_TEXT,
            name: null != n ? (0, eS.m1)(n, eb.default, eI.A) : (i ?? ""),
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
        i && null == n && H.A.fetchApplications(t),
            $.Ay.trackWithMetadata(eG.HAw.OPEN_MODAL, { type: "Create Channel" });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelType === eG.rbe.GUILD_ANNOUNCEMENT &&
            this.setState({ channelType: eG.rbe.GUILD_TEXT }),
            !t.isPrivate &&
                this.state.isPrivate &&
                $.Ay.trackWithMetadata(eG.HAw.OPEN_MODAL, { type: "Create Private Channel" });
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
        eg.ZE.has(t) && (e = (0, eN.an)(e));
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
        eg.ZE.has(e) && (t = (0, eN.an)(t)),
            e === eG.rbe.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
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
            n !== v.ip.EXITING &&
            "" !== r &&
            "" !== r.trim() &&
            (!i || !!(0, et.n0)(s, e, t)) &&
            (s !== eG.rbe.GUILD_STORE || null != l)
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
                pendingPermissionOverwrites: p,
                channelType: g,
                skuId: m,
                branchId: C,
                isPrivate: E,
            } = this.state,
            A = this.getGuildId();
        if (null != A) {
            if (null != s) (t = d().values(s.permissionOverwrites)), (n = s.bitrate), (i = s.userLimit);
            else if (g === eG.rbe.GUILD_ANNOUNCEMENT) t = (0, eN.IP)(A);
            else {
                if (E) {
                    t = (0, eN.CG)(A, g, [], !0);
                    let e = (0, et.D4)(p, g);
                    e.length > 0 && (t = t.concat(e));
                    let n = null != u && r.id === u.id;
                    t.some((e) => a.has(e.id)) || o || n || t.push((0, eN.n3)(r.id, g));
                }
                g === eG.rbe.GUILD_STAGE_VOICE &&
                    ((t = []),
                    Object.values(p).forEach((e) => {
                        let { row: n } = e;
                        null != n.id &&
                            "" !== n.id &&
                            (n.rowType === eL.T6.ROLE
                                ? t.push((0, ep.j)(n.id, Q.r2.ROLE))
                                : n.rowType === eL.T6.MEMBER && t.push((0, ep.j)(n.id, Q.r2.MEMBER)));
                    }));
            }
            this.setState({ errors: {}, submitting: !0 });
            try {
                let e = await w.A.createChannel({
                    guildId: A,
                    type: g,
                    name: c,
                    permissionOverwrites: t,
                    bitrate: n,
                    userLimit: i,
                    parentId: g !== eG.rbe.GUILD_CATEGORY ? l : null,
                    skuId: m,
                    branchId: C,
                });
                if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                let s = e.body;
                eg.ZE.has(g) && (0, ed.uh)(s.guild_id, s.id), this.setState({ submitting: !1 }), h();
            } catch (e) {
                null != e.body && "object" == typeof e.body
                    ? this.setState({ errors: e.body, submitting: !1 })
                    : this.setState({ errors: { message: X.intl.string(X.t.fEptJP) }, submitting: !1 });
            }
        }
    };
    getIconComponent() {
        let { isPrivate: e, channelType: t } = this.state;
        switch (t) {
            case eG.rbe.GUILD_TEXT:
                return e ? m.I : C.N;
            case eG.rbe.GUILD_FORUM:
                return b.b;
            case eG.rbe.GUILD_MEDIA:
                return O.x;
            case eG.rbe.GUILD_VOICE:
                return e ? E.t : A.H;
            case eG.rbe.GUILD_STORE:
                return _.g;
            case eG.rbe.GUILD_ANNOUNCEMENT:
                return S.k;
            case eG.rbe.GUILD_STAGE_VOICE:
                return f.q;
            default:
                return (0, eg.ke)(t) ? C.N : eM.FX;
        }
    }
    getHelperText() {
        let { cloneChannel: e, channelType: t, guildId: s } = this.props;
        return null != e
            ? X.intl.format(X.t.s2ZzZZ, { name: (0, eS.m1)(e, eb.default, eI.A, !0) })
            : t === eG.rbe.GUILD_FORUM
              ? X.intl.format(X.t.tbVWyR, {
                    forumUpsellHook: (e, t) =>
                        (0, i.jsx)(
                            L.Anchor,
                            {
                                onClick: () =>
                                    (0, x.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("43051"),
                                            n.e("61268"),
                                            n.e("90052"),
                                        ]).then(n.bind(n, 653682));
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
        let l = s === eG.rbe.GUILD_CATEGORY,
            r = l ? X.intl.string(X.t.OCAkGP) : X.intl.string(X.t.PVbHDl),
            a = this.getIconComponent();
        return (0, i.jsx)(M.k, {
            label: r,
            helperText: this.getHelperText(),
            error: e,
            value: this.state.name,
            onChange: this.handleNameChange,
            inputRef: this.setInputRef,
            maxLength: 100,
            placeholder: (function (e) {
                switch (e) {
                    case eG.rbe.GUILD_CATEGORY:
                        return X.intl.string(X.t.eTVbtx);
                    case eG.rbe.GUILD_FORUM:
                        return X.intl.string(X.t["5z1Xat"]);
                    default:
                        return X.intl.string(X.t["bw/b8E"]);
                }
            })(s),
            leading: l ? void 0 : a,
            trailing: {
                type: "emoji",
                button: (0, i.jsx)(ej, {
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
        if (null != e || a === eG.rbe.GUILD_CATEGORY) return;
        let h = null != t && t.length > 0;
        return (0, i.jsx)(c.z, {
            label: X.intl.string(X.t["7ZcXG2"]),
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
                            leadingIcon: t ? m.I : C.N,
                            name: X.intl.string(X.t.pnuRXC),
                            value: eG.rbe.GUILD_TEXT,
                            desc: X.intl.string(X.t["Hf5Lb+"]),
                        },
                        {
                            leadingIcon: t ? E.t : A.H,
                            name: X.intl.string(X.t.Sx55Oh),
                            value: eG.rbe.GUILD_VOICE,
                            desc: X.intl.string(X.t.pqfkoF),
                        },
                        {
                            leadingIcon: t ? I.Q : b.b,
                            name: X.intl.string(X.t.eAVID5),
                            value: eG.rbe.GUILD_FORUM,
                            desc: X.intl.string(X.t.iZ5pgg),
                        },
                    ];
                return (
                    l &&
                        r.push({
                            leadingIcon: t ? N.c : O.x,
                            name: X.intl.string(X.t["6x6fVg"]),
                            value: eG.rbe.GUILD_MEDIA,
                            desc: X.intl.string(X.t.JyCrwS),
                        }),
                    i &&
                        r.push({
                            leadingIcon: S.k,
                            name: X.intl.string(X.t.qr9dEP),
                            value: eG.rbe.GUILD_ANNOUNCEMENT,
                            desc: X.intl.string(X.t.gBkfzu),
                        }),
                    n &&
                        r.push({
                            leadingIcon: _.g,
                            name: X.intl.string(X.t.SxjkXf),
                            value: eG.rbe.GUILD_STORE,
                            desc: X.intl.string(X.t.nmCPMC),
                        }),
                    s &&
                        r.push({
                            leadingIcon: f.q,
                            name: X.intl.string(X.t.pNWst0),
                            value: eG.rbe.GUILD_STAGE_VOICE,
                            desc: X.intl.string(X.t.VPAwgo),
                        }),
                    r
                );
            })({
                isPrivate: o,
                showStoreChannelOption: n && h,
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
                (0, i.jsx)(R.l, {
                    label: X.intl.string(X.t.vPIW2L),
                    options: e.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                    placeholder: X.intl.string(X.t["3XfCPX"]),
                    value: t,
                    onSelectionChange: this.handleApplicationChange,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                null != t
                    ? (0, i.jsx)(
                          J,
                          {
                              label: X.intl.string(X.t.XNIWFj),
                              applicationId: t,
                              onChange: this.handleSKUChange,
                              selectedSkuId: n,
                              className: eR.dE,
                          },
                          t,
                      )
                    : null,
                null != t && r
                    ? (0, i.jsx)(D.d, {
                          label: X.intl.string(X.t["3e9mH5"]),
                          description: X.intl.format(X.t.UVXL1R, {
                              devPortalUrl: eG.X7G.API_DOCS_GAME_AND_SERVER_MANAGEMENT,
                          }),
                          icon: y.R,
                          onChange: this.handleShowBranchesToggle,
                          checked: l,
                      })
                    : null,
                null != t
                    ? (0, i.jsx)("div", {
                          className: eR.dE,
                          children: (0, i.jsx)(
                              Z,
                              {
                                  label: l ? X.intl.string(X.t.o7DqF3) : void 0,
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
        if (null != e || t === eG.rbe.GUILD_ANNOUNCEMENT) return null;
        let s = t === eG.rbe.GUILD_CATEGORY ? X.intl.string(X.t.lEPAZ5) : X.intl.string(X.t.aUI70g),
            l = t === eG.rbe.GUILD_CATEGORY ? X.intl.string(X.t.RQUk61) : X.intl.string(X.t.YguuKq);
        return (0, i.jsx)(D.d, { label: s, description: l, icon: j.X, onChange: this.handlePrivacyChange, checked: n });
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
        } else s && !(0, et.n0)(n, o, a) && (t = (0, et.ld)(n));
        if (null != t)
            return (0, i.jsx)("div", {
                className: r()(eR.$5, { [eR.SE]: e }),
                children: (0, i.jsx)(P.p, { messageType: P.Y.ERROR, children: t }),
            });
    }
    handlePermissionOverwriteChange(e) {
        this.setState({ pendingPermissionOverwrites: e });
    }
    renderCreateChannelModal() {
        let e,
            t,
            { channelType: n, isPrivate: s } = this.state,
            { guildId: l, transitionState: r, cloneChannel: a, categoryId: o, onClose: h, channelType: d } = this.props,
            c =
                null != a
                    ? X.intl.string(X.t.dEaPc4)
                    : n === eG.rbe.GUILD_CATEGORY
                      ? X.intl.string(X.t["ISN+NM"])
                      : X.intl.string(X.t["fUYU+j"]);
        if (null != o) {
            let t = em.A.getChannel(o);
            e = X.intl.format(X.t.L1zJgb, { categoryName: t?.name ?? "" });
        }
        t = d === eG.rbe.GUILD_CATEGORY ? X.intl.string(X.t["ISN+NM"]) : X.intl.string(X.t["fUYU+j"]);
        let p = s || n === eG.rbe.GUILD_STAGE_VOICE;
        return (0, i.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, i.jsx)(u.Modal, {
                transitionState: r,
                onClose: h,
                title: c,
                subtitle: e,
                preview: this.renderError(),
                actions: [
                    { variant: "secondary", text: X.intl.string(X.t["ETE/oC"]), onClick: h },
                    p
                        ? {
                              variant: "primary",
                              text: X.intl.string(X.t.PDTjLN),
                              type: "button",
                              disabled: !this.canSubmit(),
                              onClick: () => {
                                  this.setState({ slide: "ADD_MEMBERS", errors: {} });
                              },
                          }
                        : { variant: "primary", type: "submit", disabled: !this.canSubmit(), text: t },
                ],
                children: (0, i.jsxs)("div", {
                    className: eR.hM,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        d === eG.rbe.GUILD_STORE ? this.renderStoreOptions() : null,
                        (0, i.jsx)(ev, { guildId: l, channelType: n, className: eR.wI }),
                        n === eG.rbe.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions(),
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
            children: (0, i.jsx)(ey, {
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
let ew = s.forwardRef(function (e, t) {
    let { channelType: n, guildId: s, cloneChannelId: l } = e,
        r = (0, p.cf)([eE.A, eb.default, eA.A, em.A, eC.Ay], () => {
            let e = eE.A.getGuild(s),
                t = eb.default.getCurrentUser();
            o()(null != t, "CreateChannel: user cannot be undefined");
            let i = null != e && null != e.ownerId ? eb.default.getUser(e.ownerId) : null,
                r = eA.A.can(eG.xBc.ADMINISTRATOR, e),
                a = em.A.getChannel(l);
            return {
                guild: e,
                canCreateStoreChannel: null != e && e.features.has(eG.GuildFeatures.COMMERCE),
                canCreateAnnouncementChannel: null != e && e.features.has(eG.GuildFeatures.NEWS),
                user: t,
                owner: i,
                memberRoles: eC.Ay.getMember(s, t.id)?.roles ?? [],
                canViewChannels: eA.A.can(eG.xBc.VIEW_CHANNEL, e),
                canConnect: eA.A.can(eG.xBc.CONNECT, e),
                isAdmin: r,
                cloneChannel: a,
                channelType: a?.type ?? n,
                canManageRoles: eA.A.can(eG.xBc.MANAGE_ROLES, e),
                canManageChannels: eA.A.can(eG.xBc.MANAGE_CHANNELS, e),
            };
        }),
        a = (0, p.yK)([ee.A], () =>
            ee.A.getGuildApplicationIds(s)
                .map((e) => ee.A.getApplication(e))
                .filter(eO.Vq),
        ),
        h = new Set(r.memberRoles),
        { canManageRoles: d, canManageChannels: u } = r,
        c = (0, ec.R)(s) && d && u,
        g = (0, eh.V)(r?.guild);
    return (0, i.jsx)(eP, {
        ...e,
        ...r,
        memberRoleIds: h,
        applications: a,
        canCreateStageChannel: c,
        canCreateMediaChannel: g,
        ref: t,
        width: 496,
    });
});
