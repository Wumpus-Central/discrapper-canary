n.d(t, { default: () => ex, p: () => eN }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    d = n(735438),
    h = n.n(d),
    u = n(189213),
    c = n(954197),
    g = n(311907),
    p = n(827734),
    m = n(770880),
    A = n(276293),
    E = n(146151),
    C = n(983851),
    I = n(597050),
    b = n(56059),
    N = n(532590),
    S = n(191023),
    f = n(778492),
    O = n(278416),
    x = n(451394),
    _ = n(777666),
    T = n(834730),
    v = n(265872),
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
    k = n(665985),
    B = n(132841),
    V = n(155718),
    F = n(58149),
    Y = n(587895),
    X = n(495273),
    W = n(845202),
    Z = n(86944),
    q = n(915089),
    z = n(375499),
    K = n(937773),
    J = n(770335),
    Q = n(611371),
    $ = n(219444),
    ee = n(976860),
    et = n(233993),
    en = n(284738),
    ei = n(841811),
    el = n(95701),
    es = n(734057),
    er = n(696451),
    ea = n(71393),
    eo = n(576705),
    ed = n(994500),
    eh = n(287809),
    eu = n(147036),
    ec = n(403362),
    eg = n(47167),
    ep = n(409463),
    em = n(652215),
    eA = n(737045),
    eE = n(307731),
    eC = n(818348),
    eI = n(985018),
    eb = n(587679);
function eN(e) {
    let { isNew: t, isBeta: n } = e,
        l = null;
    return (
        !0 === t
            ? (l = (0, i.jsx)(_.Lp, {
                  text: eI.intl.string(eI.t.psHMa6),
                  className: eb.Ad,
                  color: p.A.colors.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER.css,
              }))
            : !0 === n && (l = (0, i.jsx)(Q.A, { className: eb.Ad })),
        l
    );
}
function eS(e) {
    let t,
        {
            transitionState: n,
            onClose: s,
            channelType: r,
            iconComponent: a,
            error: o,
            name: d,
            guildId: h,
            onBack: c,
            canSubmit: p,
            onMembersChange: m,
            pendingPermissionOverwrites: A,
        } = e,
        [E, C] = l.useState(""),
        [I, b] = l.useState({}),
        N = l.useRef(null),
        S = (0, g.bG)([ea.A], () => ea.A.getGuild(h)),
        f = r === em.rbe.GUILD_STAGE_VOICE,
        { roles: O, members: x, getRichTag: _ } = (0, Z.K)(S, null, f ? et.QY : (0, el.TA)(r), E, f),
        v = W.A.useSections({ roles: O, members: x });
    return (l.useEffect(() => {
        m(I);
    }, [I, m]),
    null == S)
        ? null
        : ((t =
              0 === Object.keys(A).length
                  ? eI.intl.string(eI.t["5Wxrcd"])
                  : r === em.rbe.GUILD_CATEGORY
                    ? eI.intl.string(eI.t["ISN+NM"])
                    : eI.intl.string(eI.t["fUYU+j"])),
          (0, i.jsx)(W.A.Provider, {
              listRef: N,
              query: E,
              setQuery: C,
              pendingAdditions: I,
              setPendingAdditions: b,
              roles: O,
              members: x,
              getRichTag: _,
              children: (0, i.jsx)(u.Modal, {
                  transitionState: n,
                  onClose: s,
                  title: f ? eI.intl.string(eI.t["S/6zHM"]) : eI.intl.string(eI.t.dMJ3Y6),
                  subtitle: { text: d, leadingIcon: a },
                  input: (0, i.jsxs)(i.Fragment, {
                      children: [
                          f
                              ? (0, i.jsx)(T.E, {
                                    color: "text-default",
                                    className: eb.h_,
                                    variant: "text-sm/normal",
                                    children: eI.intl.string(eI.t.f7VbhF),
                                })
                              : void 0,
                          (0, i.jsx)(W.A.SearchBox, { placeholderText: eI.intl.string(eI.t.iezLLn) }),
                          (0, i.jsx)(T.E, {
                              className: eb.pK,
                              variant: "text-xs/normal",
                              children: eI.intl.string(eI.t.rwFx85),
                          }),
                      ],
                  }),
                  preview: o,
                  listProps: {
                      sectionHeight: W.A.SECTION_HEIGHT,
                      renderSection: W.A.renderSection,
                      rowHeight: W.A.ROW_HEIGHT,
                      renderRow: W.A.renderRow,
                      sections: v,
                      innerAriaOrientation: "vertical",
                      innerRole: "listbox",
                  },
                  actions: [
                      { variant: "secondary", text: eI.intl.string(eI.t["13/7kX"]), onClick: c },
                      { variant: "primary", text: t, type: "submit", disabled: !p },
                  ],
              }),
          }));
}
function ef(e) {
    let { onEmojiPicked: t, guildId: n } = e,
        s = l.useRef(null),
        r = l.useMemo(
            () => ({
                popoutLocation: {
                    page: em.liQ.CREATE_CHANNEL_MODAL,
                    section: em.JJy.CHANNEL_NAME,
                    object: em.ZSU.EMOJI_PICKER_BUTTON,
                },
            }),
            [],
        ),
        a = l.useCallback(
            (e) => {
                let { closePopout: l } = e;
                return (0, i.jsx)(K.A, {
                    channel: null,
                    guildId: n,
                    pickerIntention: eE.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: l,
                    onNavigateAway: l,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        null != n && n.type === J.i.UNICODE && t(n.surrogates), i && l();
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
            return (0, i.jsx)(z.A, {
                ...e,
                ref: s,
                active: n,
                className: eb.Z8,
                tabIndex: 0,
                focusProps: { offset: { top: 10, bottom: 10, left: -4, right: 10 } },
            });
        },
    });
}
class eO extends l.PureComponent {
    headerId = (0, q.Ld)();
    _input;
    constructor(e) {
        super(e);
        const { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        (this.state = {
            channelType: t ?? em.rbe.GUILD_TEXT,
            name: null != n ? (0, eg.m1)(n, eh.default, ed.A) : (i ?? ""),
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
            F.Ay.trackWithMetadata(em.HAw.OPEN_MODAL, { type: "Create Channel" });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelType === em.rbe.GUILD_ANNOUNCEMENT &&
            this.setState({ channelType: em.rbe.GUILD_TEXT }),
            !t.isPrivate &&
                this.state.isPrivate &&
                F.Ay.trackWithMetadata(em.HAw.OPEN_MODAL, { type: "Create Private Channel" });
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
        el.ZE.has(t) && (e = (0, eu.an)(e));
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
        el.ZE.has(e) && (t = (0, eu.an)(t)),
            e === em.rbe.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
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
            (!i || !!(0, X.n0)(l, e, t)) &&
            (l !== em.rbe.GUILD_STORE || null != s)
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
                skuId: m,
                branchId: A,
                isPrivate: E,
            } = this.state,
            C = this.getGuildId();
        if (null != C) {
            if (null != l) (t = h().values(l.permissionOverwrites)), (n = l.bitrate), (i = l.userLimit);
            else if (p === em.rbe.GUILD_ANNOUNCEMENT) t = (0, eu.IP)(C);
            else {
                if (E) {
                    t = (0, eu.CG)(C, p, [], !0);
                    let e = (0, X.D4)(g, p);
                    e.length > 0 && (t = t.concat(e));
                    let n = null != u && r.id === u.id;
                    t.some((e) => a.has(e.id)) || o || n || t.push((0, eu.n3)(r.id, p));
                }
                p === em.rbe.GUILD_STAGE_VOICE &&
                    ((t = []),
                    Object.values(g).forEach((e) => {
                        let { row: n } = e;
                        null != n.id &&
                            "" !== n.id &&
                            (n.rowType === eA.T6.ROLE
                                ? t.push((0, ei.j)(n.id, V.r2.ROLE))
                                : n.rowType === eA.T6.MEMBER && t.push((0, ei.j)(n.id, V.r2.MEMBER)));
                    }));
            }
            this.setState({ errors: {}, submitting: !0 });
            try {
                let e = await w.A.createChannel({
                    guildId: C,
                    type: p,
                    name: c,
                    permissionOverwrites: t,
                    bitrate: n,
                    userLimit: i,
                    parentId: p !== em.rbe.GUILD_CATEGORY ? s : null,
                    skuId: m,
                    branchId: A,
                });
                if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                let l = e.body;
                el.ZE.has(p) && (0, ee.uh)(l.guild_id, l.id), this.setState({ submitting: !1 }), d();
            } catch (e) {
                null != e.body && "object" == typeof e.body
                    ? this.setState({ errors: e.body, submitting: !1 })
                    : this.setState({ errors: { message: eI.intl.string(eI.t.fEptJP) }, submitting: !1 });
            }
        }
    };
    getIconComponent() {
        let { isPrivate: e, channelType: t } = this.state;
        switch (t) {
            case em.rbe.GUILD_TEXT:
                return e ? m.I : A.N;
            case em.rbe.GUILD_FORUM:
                return b.b;
            case em.rbe.GUILD_MEDIA:
                return S.x;
            case em.rbe.GUILD_VOICE:
                return e ? E.t : C.H;
            case em.rbe.GUILD_STORE:
                return O.g;
            case em.rbe.GUILD_ANNOUNCEMENT:
                return f.k;
            case em.rbe.GUILD_STAGE_VOICE:
                return x.q;
            default:
                return (0, el.ke)(t) ? A.N : eC.FX;
        }
    }
    getHelperText() {
        let { cloneChannel: e, channelType: t, guildId: l } = this.props;
        return null != e
            ? eI.intl.format(eI.t.s2ZzZZ, { name: (0, eg.m1)(e, eh.default, ed.A, !0) })
            : t === em.rbe.GUILD_FORUM
              ? eI.intl.format(eI.t.tbVWyR, {
                    forumUpsellHook: (e, t) =>
                        (0, i.jsx)(
                            L.Anchor,
                            {
                                onClick: () =>
                                    (0, U.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e("7937"), n.e("40296")]).then(
                                            n.bind(n, 420472),
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
        let s = l === em.rbe.GUILD_CATEGORY,
            r = s ? eI.intl.string(eI.t.OCAkGP) : eI.intl.string(eI.t.PVbHDl),
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
                    case em.rbe.GUILD_CATEGORY:
                        return eI.intl.string(eI.t.eTVbtx);
                    case em.rbe.GUILD_FORUM:
                        return eI.intl.string(eI.t["5z1Xat"]);
                    default:
                        return eI.intl.string(eI.t["bw/b8E"]);
                }
            })(l),
            leading: s ? void 0 : a,
            trailing: {
                type: "emoji",
                button: (0, i.jsx)(ef, {
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
        if (null != e || a === em.rbe.GUILD_CATEGORY) return;
        let d = null != t && t.length > 0;
        return (0, i.jsx)(c.z, {
            label: eI.intl.string(eI.t["7ZcXG2"]),
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
                            leadingIcon: t ? m.I : A.N,
                            name: eI.intl.string(eI.t.pnuRXC),
                            value: em.rbe.GUILD_TEXT,
                            desc: eI.intl.string(eI.t["Hf5Lb+"]),
                        },
                        {
                            leadingIcon: t ? E.t : C.H,
                            name: eI.intl.string(eI.t.Sx55Oh),
                            value: em.rbe.GUILD_VOICE,
                            desc: eI.intl.string(eI.t.pqfkoF),
                        },
                        {
                            leadingIcon: t ? I.Q : b.b,
                            name: eI.intl.string(eI.t.eAVID5),
                            value: em.rbe.GUILD_FORUM,
                            desc: eI.intl.string(eI.t.iZ5pgg),
                        },
                    ];
                return (
                    s &&
                        r.push({
                            leadingIcon: t ? N.c : S.x,
                            name: eI.intl.string(eI.t["6x6fVg"]),
                            value: em.rbe.GUILD_MEDIA,
                            desc: eI.intl.string(eI.t.JyCrwS),
                        }),
                    i &&
                        r.push({
                            leadingIcon: f.k,
                            name: eI.intl.string(eI.t.qr9dEP),
                            value: em.rbe.GUILD_ANNOUNCEMENT,
                            desc: eI.intl.string(eI.t.gBkfzu),
                        }),
                    n &&
                        r.push({
                            leadingIcon: O.g,
                            name: eI.intl.string(eI.t.SxjkXf),
                            value: em.rbe.GUILD_STORE,
                            desc: eI.intl.string(eI.t.nmCPMC),
                        }),
                    l &&
                        r.push({
                            leadingIcon: x.q,
                            name: eI.intl.string(eI.t.pNWst0),
                            value: em.rbe.GUILD_STAGE_VOICE,
                            desc: eI.intl.string(eI.t.VPAwgo),
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
                (0, i.jsx)(M.l, {
                    label: eI.intl.string(eI.t.vPIW2L),
                    options: e.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                    placeholder: eI.intl.string(eI.t["3XfCPX"]),
                    value: t,
                    onSelectionChange: this.handleApplicationChange,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                null != t
                    ? (0, i.jsx)(
                          B.A,
                          {
                              label: eI.intl.string(eI.t.XNIWFj),
                              applicationId: t,
                              onChange: this.handleSKUChange,
                              selectedSkuId: n,
                              className: eb.dE,
                          },
                          t,
                      )
                    : null,
                null != t && r
                    ? (0, i.jsx)(y.d, {
                          label: eI.intl.string(eI.t["3e9mH5"]),
                          description: eI.intl.format(eI.t.UVXL1R, {
                              devPortalUrl: em.X7G.API_DOCS_GAME_AND_SERVER_MANAGEMENT,
                          }),
                          icon: j.R,
                          onChange: this.handleShowBranchesToggle,
                          checked: s,
                      })
                    : null,
                null != t
                    ? (0, i.jsx)("div", {
                          className: eb.dE,
                          children: (0, i.jsx)(
                              k.A,
                              {
                                  label: s ? eI.intl.string(eI.t.o7DqF3) : void 0,
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
        if (null != e || t === em.rbe.GUILD_ANNOUNCEMENT) return null;
        let l = t === em.rbe.GUILD_CATEGORY ? eI.intl.string(eI.t.lEPAZ5) : eI.intl.string(eI.t.aUI70g),
            s = t === em.rbe.GUILD_CATEGORY ? eI.intl.string(eI.t.RQUk61) : eI.intl.string(eI.t.YguuKq);
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
        } else l && !(0, X.n0)(n, o, a) && (t = (0, X.ld)(n));
        if (null != t)
            return (0, i.jsx)("div", {
                className: r()(eb.$5, { [eb.SE]: e }),
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
            { guildId: s, transitionState: r, cloneChannel: a, categoryId: o, onClose: d, channelType: h } = this.props,
            c =
                null != a
                    ? eI.intl.string(eI.t.dEaPc4)
                    : n === em.rbe.GUILD_CATEGORY
                      ? eI.intl.string(eI.t["ISN+NM"])
                      : eI.intl.string(eI.t["fUYU+j"]);
        if (null != o) {
            let t = es.A.getChannel(o);
            e = eI.intl.format(eI.t.L1zJgb, { categoryName: t?.name ?? "" });
        }
        t = h === em.rbe.GUILD_CATEGORY ? eI.intl.string(eI.t["ISN+NM"]) : eI.intl.string(eI.t["fUYU+j"]);
        let g = l || n === em.rbe.GUILD_STAGE_VOICE;
        return (0, i.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, i.jsx)(u.Modal, {
                transitionState: r,
                onClose: d,
                title: c,
                subtitle: e,
                preview: this.renderError(),
                actions: [
                    { variant: "secondary", text: eI.intl.string(eI.t["ETE/oC"]), onClick: d },
                    g
                        ? {
                              variant: "primary",
                              text: eI.intl.string(eI.t.PDTjLN),
                              type: "button",
                              disabled: !this.canSubmit(),
                              onClick: () => {
                                  this.setState({ slide: "ADD_MEMBERS", errors: {} });
                              },
                          }
                        : { variant: "primary", type: "submit", disabled: !this.canSubmit(), text: t },
                ],
                children: (0, i.jsxs)("div", {
                    className: eb.hM,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        h === em.rbe.GUILD_STORE ? this.renderStoreOptions() : null,
                        (0, i.jsx)(ep.A, { guildId: s, channelType: n, className: eb.wI }),
                        n === em.rbe.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions(),
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
            children: (0, i.jsx)(eS, {
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
let ex = l.forwardRef(function (e, t) {
    let { channelType: n, guildId: l, cloneChannelId: s } = e,
        r = (0, g.cf)([ea.A, eh.default, eo.A, es.A, er.Ay], () => {
            let e = ea.A.getGuild(l),
                t = eh.default.getCurrentUser();
            o()(null != t, "CreateChannel: user cannot be undefined");
            let i = null != e && null != e.ownerId ? eh.default.getUser(e.ownerId) : null,
                r = eo.A.can(em.xBc.ADMINISTRATOR, e),
                a = es.A.getChannel(s);
            return {
                guild: e,
                canCreateStoreChannel: null != e && e.features.has(em.GuildFeatures.COMMERCE),
                canCreateAnnouncementChannel: null != e && e.features.has(em.GuildFeatures.NEWS),
                user: t,
                owner: i,
                memberRoles: er.Ay.getMember(l, t.id)?.roles ?? [],
                canViewChannels: eo.A.can(em.xBc.VIEW_CHANNEL, e),
                canConnect: eo.A.can(em.xBc.CONNECT, e),
                isAdmin: r,
                cloneChannel: a,
                channelType: a?.type ?? n,
                canManageRoles: eo.A.can(em.xBc.MANAGE_ROLES, e),
                canManageChannels: eo.A.can(em.xBc.MANAGE_CHANNELS, e),
            };
        }),
        a = (0, g.yK)([Y.A], () =>
            Y.A.getGuildApplicationIds(l)
                .map((e) => Y.A.getApplication(e))
                .filter(ec.Vq),
        ),
        d = new Set(r.memberRoles),
        { canManageRoles: h, canManageChannels: u } = r,
        c = (0, en.R)(l) && h && u,
        p = (0, $.V)(r?.guild);
    return (0, i.jsx)(eO, {
        ...e,
        ...r,
        memberRoleIds: d,
        applications: a,
        canCreateStageChannel: c,
        canCreateMediaChannel: p,
        ref: t,
        width: 496,
    });
});
