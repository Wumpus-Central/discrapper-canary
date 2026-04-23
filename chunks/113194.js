n.d(t, { default: () => ew, p: () => ey }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    h = n(735438),
    d = n.n(h),
    u = n(189213),
    c = n(144228),
    g = n(17928),
    p = n(661531),
    m = n(770880),
    E = n(276293),
    C = n(146151),
    A = n(983851),
    I = n(597050),
    b = n(56059),
    N = n(532590),
    S = n(191023),
    f = n(778492),
    O = n(278416),
    x = n(451394),
    _ = n(777666),
    T = n(834730),
    v = n(922016),
    G = n(231723),
    L = n(349288),
    U = n(192308),
    R = n(292666),
    M = n(691885),
    y = n(243721),
    j = n(530557),
    D = n(194261),
    P = n(512950),
    w = n(755584),
    H = n(686956),
    k = n(712963),
    B = n(228366);
let V = {};
class F extends g.Ay.Store {
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
class W extends l.Component {
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
        let { branches: e, selectedBranchId: t, applicationId: n, includeMaster: l, hide: s, label: r } = this.props;
        if (0 === e.length || s) return null;
        let a = l ? e : e.filter((e) => e.id !== n);
        return (0, i.jsx)(M.l, {
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
let Z = g.Ay.connectStores([Y], (e) => {
    let { applicationId: t } = e;
    return { branches: Y.getBranches(t) };
})(W);
var q = n(830382),
    z = n(67480);
class K extends l.Component {
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
            l = null != e && 0 === e.length;
        return (0, i.jsx)(M.l, {
            selectionMode: "single",
            label: n,
            options: null != e ? e.map((e) => ({ id: e.id, label: e.name, value: e.id })) : [],
            placeholder: l ? X.intl.string(X.t.hKcgP5) : X.intl.string(X.t.QV60Uq),
            value: t,
            onSelectionChange: this.handleChange,
            disabled: l,
        });
    }
}
let J = g.Ay.connectStores([z.A], (e) => {
    let { applicationId: t } = e;
    return { skus: z.A.getForApplication(t) };
})(K);
var Q = n(155718),
    $ = n(58149),
    ee = n(587895),
    et = n(495273),
    en = n(517622),
    ei = n(86944),
    el = n(915089),
    es = n(375499),
    er = n(267889),
    ea = n(770335),
    eo = n(611371),
    eh = n(219444),
    ed = n(976860),
    eu = n(233993),
    ec = n(284738),
    eg = n(841811),
    ep = n(95701),
    em = n(734057),
    eE = n(696451),
    eC = n(71393),
    eA = n(576705),
    eI = n(994500),
    eb = n(287809),
    eN = n(147036),
    eS = n(403362),
    ef = n(47167),
    eO = n(280513),
    ex = n(837011),
    e_ = n(90084),
    eT = n(975571),
    ev = n(652215);
function eG(e) {
    let { guildId: t, channelType: n, className: s } = e,
        { guildProfile: r, fetchGuildProfile: a, fetchStatus: o } = (0, e_.u)(t),
        h = o !== ex.X.FETCHED,
        d = null != r && eO.i.VISIBLE.has(r.visibility);
    l.useEffect(() => {
        a();
    }, [t, a]);
    let u = [];
    if (
        n === ev.rbe.GUILD_ANNOUNCEMENT &&
        (u.push(X.intl.format(X.t.tI7KNX, { documentationLink: eT.A.getArticleURL(ev.MVz.ANNOUNCEMENT_CHANNELS) })),
        !h && !d)
    ) {
        let e = X.intl.string(X.t["2Ab4Id"]);
        u.push(e);
    }
    return 0 === u.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: u.map((e, t) =>
                  (0, i.jsx)(T.E, { className: s, variant: "text-sm/normal", children: e }, `description-${t}`),
              ),
          });
}
var eL = n(719366),
    eU = n(307731),
    eR = n(818348),
    eM = n(587679);
function ey(e) {
    let { isNew: t, isBeta: n } = e,
        l = null;
    return (
        !0 === t
            ? (l = (0, i.jsx)(_.Lp, {
                  text: X.intl.string(X.t.psHMa6),
                  className: eM.Ad,
                  color: p.A.colors.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER.css,
              }))
            : !0 === n && (l = (0, i.jsx)(eo.A, { className: eM.Ad })),
        l
    );
}
function ej(e) {
    let t,
        {
            transitionState: n,
            onClose: s,
            channelType: r,
            iconComponent: a,
            error: o,
            name: h,
            guildId: d,
            onBack: c,
            canSubmit: p,
            onMembersChange: m,
            pendingPermissionOverwrites: E,
        } = e,
        [C, A] = l.useState(""),
        [I, b] = l.useState({}),
        N = l.useRef(null),
        S = (0, g.bG)([eC.A], () => eC.A.getGuild(d)),
        f = r === ev.rbe.GUILD_STAGE_VOICE,
        { roles: O, members: x, getRichTag: _ } = (0, ei.K)(S, null, f ? eu.QY : (0, ep.TA)(r), C, f),
        v = en.A.useSections({ roles: O, members: x });
    return (l.useEffect(() => {
        m(I);
    }, [I, m]),
    null == S)
        ? null
        : ((t =
              0 === Object.keys(E).length
                  ? X.intl.string(X.t["5Wxrcd"])
                  : r === ev.rbe.GUILD_CATEGORY
                    ? X.intl.string(X.t["ISN+NM"])
                    : X.intl.string(X.t["fUYU+j"])),
          (0, i.jsx)(en.A.Provider, {
              listRef: N,
              query: C,
              setQuery: A,
              pendingAdditions: I,
              setPendingAdditions: b,
              roles: O,
              members: x,
              getRichTag: _,
              children: (0, i.jsx)(u.Modal, {
                  transitionState: n,
                  onClose: s,
                  title: f ? X.intl.string(X.t["S/6zHM"]) : X.intl.string(X.t.dMJ3Y6),
                  subtitle: { text: h, leadingIcon: a },
                  input: (0, i.jsxs)(i.Fragment, {
                      children: [
                          f
                              ? (0, i.jsx)(T.E, {
                                    color: "text-default",
                                    className: eM.h_,
                                    variant: "text-sm/normal",
                                    children: X.intl.string(X.t.f7VbhF),
                                })
                              : void 0,
                          (0, i.jsx)(en.A.SearchBox, { placeholderText: X.intl.string(X.t.iezLLn) }),
                          (0, i.jsx)(T.E, {
                              className: eM.pK,
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
                      sections: v,
                      innerAriaOrientation: "vertical",
                      innerRole: "listbox",
                  },
                  actions: [
                      { variant: "secondary", text: X.intl.string(X.t["13/7kX"]), onClick: c },
                      { variant: "primary", text: t, type: "submit", disabled: !p },
                  ],
              }),
          }));
}
function eD(e) {
    let { onEmojiPicked: t, guildId: n } = e,
        s = l.useRef(null),
        r = l.useMemo(
            () => ({
                popoutLocation: {
                    page: ev.liQ.CREATE_CHANNEL_MODAL,
                    section: ev.JJy.CHANNEL_NAME,
                    object: ev.ZSU.EMOJI_PICKER_BUTTON,
                },
            }),
            [],
        ),
        a = l.useCallback(
            (e) => {
                let { closePopout: l } = e;
                return (0, i.jsx)(er.A, {
                    channel: null,
                    guildId: n,
                    pickerIntention: eU.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: l,
                    onNavigateAway: l,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        null != n && n.type === ea.i.UNICODE && t(n.surrogates), i && l();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: r,
                });
            },
            [r, n, t],
        );
    return (0, i.jsx)(v.Y, {
        targetElementRef: s,
        renderPopout: a,
        animation: v.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(es.A, {
                ...e,
                ref: s,
                active: n,
                className: eM.Z8,
                tabIndex: 0,
                focusProps: { offset: { top: 10, bottom: 10, left: -4, right: 10 } },
            });
        },
    });
}
class eP extends l.PureComponent {
    headerId = (0, el.Ld)();
    _input;
    constructor(e) {
        super(e);
        const { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        (this.state = {
            channelType: t ?? ev.rbe.GUILD_TEXT,
            name: null != n ? (0, ef.m1)(n, eb.default, eI.A) : (i ?? ""),
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
            $.Ay.trackWithMetadata(ev.HAw.OPEN_MODAL, { type: "Create Channel" });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelType === ev.rbe.GUILD_ANNOUNCEMENT &&
            this.setState({ channelType: ev.rbe.GUILD_TEXT }),
            !t.isPrivate &&
                this.state.isPrivate &&
                $.Ay.trackWithMetadata(ev.HAw.OPEN_MODAL, { type: "Create Private Channel" });
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
        ep.ZE.has(t) && (e = (0, eN.an)(e));
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
        ep.ZE.has(e) && (t = (0, eN.an)(t)),
            e === ev.rbe.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
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
            n !== G.ip.EXITING &&
            "" !== r &&
            "" !== r.trim() &&
            (!i || !!(0, et.n0)(l, e, t)) &&
            (l !== ev.rbe.GUILD_STORE || null != s)
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
                onClose: h,
                owner: u,
            } = this.props,
            {
                name: c,
                pendingPermissionOverwrites: g,
                channelType: p,
                skuId: m,
                branchId: E,
                isPrivate: C,
            } = this.state,
            A = this.getGuildId();
        if (null != A) {
            if (null != l) (t = d().values(l.permissionOverwrites)), (n = l.bitrate), (i = l.userLimit);
            else if (p === ev.rbe.GUILD_ANNOUNCEMENT) t = (0, eN.IP)(A);
            else {
                if (C) {
                    t = (0, eN.CG)(A, p, [], !0);
                    let e = (0, et.D4)(g, p);
                    e.length > 0 && (t = t.concat(e));
                    let n = null != u && r.id === u.id;
                    t.some((e) => a.has(e.id)) || o || n || t.push((0, eN.n3)(r.id, p));
                }
                p === ev.rbe.GUILD_STAGE_VOICE &&
                    ((t = []),
                    Object.values(g).forEach((e) => {
                        let { row: n } = e;
                        null != n.id &&
                            "" !== n.id &&
                            (n.rowType === eL.T6.ROLE
                                ? t.push((0, eg.j)(n.id, Q.r2.ROLE))
                                : n.rowType === eL.T6.MEMBER && t.push((0, eg.j)(n.id, Q.r2.MEMBER)));
                    }));
            }
            this.setState({ errors: {}, submitting: !0 });
            try {
                let e = await w.A.createChannel({
                    guildId: A,
                    type: p,
                    name: c,
                    permissionOverwrites: t,
                    bitrate: n,
                    userLimit: i,
                    parentId: p !== ev.rbe.GUILD_CATEGORY ? s : null,
                    skuId: m,
                    branchId: E,
                });
                if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                let l = e.body;
                ep.ZE.has(p) && (0, ed.uh)(l.guild_id, l.id), this.setState({ submitting: !1 }), h();
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
            case ev.rbe.GUILD_TEXT:
                return e ? m.I : E.N;
            case ev.rbe.GUILD_FORUM:
                return b.b;
            case ev.rbe.GUILD_MEDIA:
                return S.x;
            case ev.rbe.GUILD_VOICE:
                return e ? C.t : A.H;
            case ev.rbe.GUILD_STORE:
                return O.g;
            case ev.rbe.GUILD_ANNOUNCEMENT:
                return f.k;
            case ev.rbe.GUILD_STAGE_VOICE:
                return x.q;
            default:
                return (0, ep.ke)(t) ? E.N : eR.FX;
        }
    }
    getHelperText() {
        let { cloneChannel: e, channelType: t, guildId: l } = this.props;
        return null != e
            ? X.intl.format(X.t.s2ZzZZ, { name: (0, ef.m1)(e, eb.default, eI.A, !0) })
            : t === ev.rbe.GUILD_FORUM
              ? X.intl.format(X.t.tbVWyR, {
                    forumUpsellHook: (e, t) =>
                        (0, i.jsx)(
                            L.Anchor,
                            {
                                onClick: () =>
                                    (0, U.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e("90052"), n.e("40296")]).then(
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
            { errors: n, channelType: l } = this.state;
        n?.name != null && (e = Array.isArray(n.name) ? n.name.join(", ") : n.name);
        let s = l === ev.rbe.GUILD_CATEGORY,
            r = s ? X.intl.string(X.t.OCAkGP) : X.intl.string(X.t.PVbHDl),
            a = this.getIconComponent();
        return (0, i.jsx)(R.k, {
            label: r,
            helperText: this.getHelperText(),
            error: e,
            value: this.state.name,
            onChange: this.handleNameChange,
            inputRef: this.setInputRef,
            maxLength: 100,
            placeholder: (function (e) {
                switch (e) {
                    case ev.rbe.GUILD_CATEGORY:
                        return X.intl.string(X.t.eTVbtx);
                    case ev.rbe.GUILD_FORUM:
                        return X.intl.string(X.t["5z1Xat"]);
                    default:
                        return X.intl.string(X.t["bw/b8E"]);
                }
            })(l),
            leading: s ? void 0 : a,
            trailing: {
                type: "emoji",
                button: (0, i.jsx)(eD, {
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
        if (null != e || a === ev.rbe.GUILD_CATEGORY) return;
        let h = null != t && t.length > 0;
        return (0, i.jsx)(c.z, {
            label: X.intl.string(X.t["7ZcXG2"]),
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
                            leadingIcon: t ? m.I : E.N,
                            name: X.intl.string(X.t.pnuRXC),
                            value: ev.rbe.GUILD_TEXT,
                            desc: X.intl.string(X.t["Hf5Lb+"]),
                        },
                        {
                            leadingIcon: t ? C.t : A.H,
                            name: X.intl.string(X.t.Sx55Oh),
                            value: ev.rbe.GUILD_VOICE,
                            desc: X.intl.string(X.t.pqfkoF),
                        },
                        {
                            leadingIcon: t ? I.Q : b.b,
                            name: X.intl.string(X.t.eAVID5),
                            value: ev.rbe.GUILD_FORUM,
                            desc: X.intl.string(X.t.iZ5pgg),
                        },
                    ];
                return (
                    s &&
                        r.push({
                            leadingIcon: t ? N.c : S.x,
                            name: X.intl.string(X.t["6x6fVg"]),
                            value: ev.rbe.GUILD_MEDIA,
                            desc: X.intl.string(X.t.JyCrwS),
                        }),
                    i &&
                        r.push({
                            leadingIcon: f.k,
                            name: X.intl.string(X.t.qr9dEP),
                            value: ev.rbe.GUILD_ANNOUNCEMENT,
                            desc: X.intl.string(X.t.gBkfzu),
                        }),
                    n &&
                        r.push({
                            leadingIcon: O.g,
                            name: X.intl.string(X.t.SxjkXf),
                            value: ev.rbe.GUILD_STORE,
                            desc: X.intl.string(X.t.nmCPMC),
                        }),
                    l &&
                        r.push({
                            leadingIcon: x.q,
                            name: X.intl.string(X.t.pNWst0),
                            value: ev.rbe.GUILD_STAGE_VOICE,
                            desc: X.intl.string(X.t.VPAwgo),
                        }),
                    r
                );
            })({
                isPrivate: o,
                showStoreChannelOption: n && h,
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
                (0, i.jsx)(M.l, {
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
                              className: eM.dE,
                          },
                          t,
                      )
                    : null,
                null != t && r
                    ? (0, i.jsx)(y.d, {
                          label: X.intl.string(X.t["3e9mH5"]),
                          description: X.intl.format(X.t.UVXL1R, {
                              devPortalUrl: ev.X7G.API_DOCS_GAME_AND_SERVER_MANAGEMENT,
                          }),
                          icon: j.R,
                          onChange: this.handleShowBranchesToggle,
                          checked: s,
                      })
                    : null,
                null != t
                    ? (0, i.jsx)("div", {
                          className: eM.dE,
                          children: (0, i.jsx)(
                              Z,
                              {
                                  label: s ? X.intl.string(X.t.o7DqF3) : void 0,
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
        if (null != e || t === ev.rbe.GUILD_ANNOUNCEMENT) return null;
        let l = t === ev.rbe.GUILD_CATEGORY ? X.intl.string(X.t.lEPAZ5) : X.intl.string(X.t.aUI70g),
            s = t === ev.rbe.GUILD_CATEGORY ? X.intl.string(X.t.RQUk61) : X.intl.string(X.t.YguuKq);
        return (0, i.jsx)(y.d, { label: l, description: s, icon: D.X, onChange: this.handlePrivacyChange, checked: n });
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
        } else l && !(0, et.n0)(n, o, a) && (t = (0, et.ld)(n));
        if (null != t)
            return (0, i.jsx)("div", {
                className: r()(eM.$5, { [eM.SE]: e }),
                children: (0, i.jsx)(P.p, { messageType: P.Y.ERROR, children: t }),
            });
    }
    handlePermissionOverwriteChange(e) {
        this.setState({ pendingPermissionOverwrites: e });
    }
    renderCreateChannelModal() {
        let e,
            t,
            { channelType: n, isPrivate: l } = this.state,
            { guildId: s, transitionState: r, cloneChannel: a, categoryId: o, onClose: h, channelType: d } = this.props,
            c =
                null != a
                    ? X.intl.string(X.t.dEaPc4)
                    : n === ev.rbe.GUILD_CATEGORY
                      ? X.intl.string(X.t["ISN+NM"])
                      : X.intl.string(X.t["fUYU+j"]);
        if (null != o) {
            let t = em.A.getChannel(o);
            e = X.intl.format(X.t.L1zJgb, { categoryName: t?.name ?? "" });
        }
        t = d === ev.rbe.GUILD_CATEGORY ? X.intl.string(X.t["ISN+NM"]) : X.intl.string(X.t["fUYU+j"]);
        let g = l || n === ev.rbe.GUILD_STAGE_VOICE;
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
                    g
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
                    className: eM.hM,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        d === ev.rbe.GUILD_STORE ? this.renderStoreOptions() : null,
                        (0, i.jsx)(eG, { guildId: s, channelType: n, className: eM.wI }),
                        n === ev.rbe.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions(),
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
            children: (0, i.jsx)(ej, {
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
let ew = l.forwardRef(function (e, t) {
    let { channelType: n, guildId: l, cloneChannelId: s } = e,
        r = (0, g.cf)([eC.A, eb.default, eA.A, em.A, eE.Ay], () => {
            let e = eC.A.getGuild(l),
                t = eb.default.getCurrentUser();
            o()(null != t, "CreateChannel: user cannot be undefined");
            let i = null != e && null != e.ownerId ? eb.default.getUser(e.ownerId) : null,
                r = eA.A.can(ev.xBc.ADMINISTRATOR, e),
                a = em.A.getChannel(s);
            return {
                guild: e,
                canCreateStoreChannel: null != e && e.features.has(ev.GuildFeatures.COMMERCE),
                canCreateAnnouncementChannel: null != e && e.features.has(ev.GuildFeatures.NEWS),
                user: t,
                owner: i,
                memberRoles: eE.Ay.getMember(l, t.id)?.roles ?? [],
                canViewChannels: eA.A.can(ev.xBc.VIEW_CHANNEL, e),
                canConnect: eA.A.can(ev.xBc.CONNECT, e),
                isAdmin: r,
                cloneChannel: a,
                channelType: a?.type ?? n,
                canManageRoles: eA.A.can(ev.xBc.MANAGE_ROLES, e),
                canManageChannels: eA.A.can(ev.xBc.MANAGE_CHANNELS, e),
            };
        }),
        a = (0, g.yK)([ee.A], () =>
            ee.A.getGuildApplicationIds(l)
                .map((e) => ee.A.getApplication(e))
                .filter(eS.Vq),
        ),
        h = new Set(r.memberRoles),
        { canManageRoles: d, canManageChannels: u } = r,
        c = (0, ec.R)(l) && d && u,
        p = (0, eh.V)(r?.guild);
    return (0, i.jsx)(eP, {
        ...e,
        ...r,
        memberRoleIds: h,
        applications: a,
        canCreateStageChannel: c,
        canCreateMediaChannel: p,
        ref: t,
        width: 496,
    });
});
