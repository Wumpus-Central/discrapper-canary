n.d(t, { A: () => ei });
var i = n(627968),
    l = n(64700),
    s = n(192308),
    r = n(228366),
    a = n(272355),
    o = n(793322),
    d = n(174768),
    c = n(503698),
    u = n.n(c),
    _ = n(224640),
    h = n(17928),
    p = n(990078),
    g = n(349288),
    m = n(187322),
    A = n(475825),
    f = n(442433),
    E = n(390435),
    I = n(775121),
    C = n(115718);
let S = (0, n(600975).C)({
    kind: "user",
    id: "2021-02_staff_qc_debugging",
    label: "Display QS scores in results. Not a real experiment",
    defaultConfig: { showScores: !1 },
    treatments: [{ id: 1, label: "Show scores in QS results", config: { showScores: !0 } }],
});
var x = n(12351),
    b = n(915089),
    N = n(734057),
    T = n(458294),
    y = n(71393),
    v = n(290863),
    R = n(222823),
    j = n(309010),
    O = n(607567),
    L = n(234320),
    M = n(625494),
    G = n(975571),
    D = n(820785),
    w = n(615300),
    P = n(451988),
    U = n(844222),
    k = n(652215),
    V = n(985018),
    B = n(246729);
let F = { friction: 15, tension: 100 };
class W extends l.PureComponent {
    state = { shown: !1, translateY: new w.A.Value(0) };
    static contextType = U.C;
    rootRef = l.createRef();
    focusTimeout = new P.Ep();
    componentDidMount() {
        this.setState({ shown: !0 }), M._.subscribe(k.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentWillUnmount() {
        this.focusTimeout.stop(), M._.unsubscribe(k.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentDidUpdate() {
        let { hasQuery: e } = this.props;
        e || this.springTo(0);
    }
    handleResultFocus = (e) => {
        let { node: t } = e;
        this.focusTimeout.start(1, () => {
            if (this.props.hasQuery && null != t && null != this.rootRef.current) {
                let { top: e } = this.rootRef.current.getBoundingClientRect(),
                    { top: n } = t.getBoundingClientRect(),
                    i = Math.abs(e - n);
                this.springTo(i - 118 + 9);
            } else this.springTo(0);
        });
    };
    springTo(e) {
        let { reducedMotion: t } = this.context;
        !0 !== t.enabled && w.A.spring(this.state.translateY, { toValue: Math.min(e, 250), ...F }).start();
    }
    renderArrowGroup(e) {
        return (0, i.jsxs)("div", {
            className: u()(B.XN, e),
            children: [
                (0, i.jsx)(w.A.div, {
                    className: u()(B.Hf, B.xM),
                    style: this.getStyle(),
                    children: (0, i.jsx)("img", { alt: "", src: n(824829), className: B.D6 }),
                }),
                (0, i.jsx)("div", {
                    className: u()(B.Hf, B.JM),
                    children: (0, i.jsx)("img", { alt: "", src: n(162206), className: B.D6 }),
                }),
                (0, i.jsx)("div", {
                    className: u()(B.Hf, B.QJ),
                    children: (0, i.jsx)("img", { alt: "", src: n(298607), className: B.D6 }),
                }),
            ],
        });
    }
    renderContent() {
        return (0, i.jsxs)("div", {
            className: B.fi,
            children: [
                (0, i.jsx)("div", { className: B.Iv, children: V.intl.string(V.t.Mp0IGK) }),
                (0, i.jsx)("div", { className: B.kp, children: V.intl.string(V.t["3CbpwH"]) }),
            ],
        });
    }
    render() {
        let { hasQuery: e } = this.props,
            { shown: t } = this.state;
        return (0, i.jsxs)("div", {
            ref: this.rootRef,
            className: u()(B.d$, { [B.SP]: t, [B.tG]: e }),
            children: [this.renderContent(), this.renderArrowGroup(B.__invalid_left), this.renderArrowGroup(B.pG)],
        });
    }
    getStyle() {
        let { reducedMotion: e } = this.context;
        return !0 === e.enabled
            ? {}
            : {
                  opacity: 1,
                  transform: [
                      {
                          translateY: this.state.translateY.interpolate({
                              inputRange: [0, 250],
                              outputRange: ["0px", "250px"],
                          }),
                      },
                      { translateZ: 0 },
                  ],
              };
    }
}
var H = n(781303);
let K = () =>
    (0, i.jsxs)("div", {
        className: H.p$,
        children: [
            (0, i.jsx)("div", { className: H.lv, children: V.intl.string(V.t.bpbATE) }),
            (0, i.jsx)("div", {
                className: H.PA,
                children: (0, i.jsx)(g.Anchor, {
                    href: G.A.getArticleURL(k.MVz.QUICK_SWITCHER_TUTORIAL),
                    children: V.intl.string(V.t["4iPfEO"]),
                }),
            }),
        ],
    });
class Y extends l.Component {
    static defaultProps = { unread: !1 };
    render() {
        let e = y.A.getGuild(this.props.channel.guild_id);
        return (0, i.jsx)(D.c3, {
            ...this.props,
            children: (0, i.jsx)("div", { className: H.MD, children: null != e ? e.name : null }),
        });
    }
}
let z = h.Ay.connectStores([R.Ay, N.A], (e) => {
        let { channel: t } = e;
        return {
            unread: R.Ay.hasUnread(t.id),
            mentions: R.Ay.getMentionCount(t.id),
            isMentionLowImportance: R.Ay.getIsMentionLowImportance(t.id),
            category: N.A.getChannel(t.parent_id),
        };
    })(Y),
    q = h.Ay.connectStores([O.Ay], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id)
            throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
        return { voiceStates: O.Ay.getVoiceStates(t.guild_id)[t.id] };
    })(Y),
    Q = h.Ay.connectStores([T.default], (e) => {
        let { guild: t } = e;
        return { unread: T.default.hasUnread(t.id) };
    })(D.OS),
    J = h.Ay.connectStores([R.Ay, v.A], (e) => {
        let { channel: t } = e,
            n = null,
            i = v.A.getState().statuses;
        return (
            t.recipients?.some((e) => i[e] === k.clD.ONLINE) && (n = k.clD.ONLINE),
            { mentions: R.Ay.getMentionCount(t.id), status: n }
        );
    })(D.nG),
    X = h.Ay.connectStores([N.A, R.Ay, v.A], (e) => {
        let { user: t } = e,
            n = N.A.getDMFromUserId(t.id);
        return {
            mentions: null != n ? R.Ay.getMentionCount(n) : 0,
            status: v.A.getStatus(t.id),
            isMobile: v.A.isMobileOnline(t.id),
        };
    })(D.KJ);
function $(e, t, n) {
    return (0, i.jsx)(
        p.m,
        { __unsupportedReactNodeAsText: n, children: (0, i.jsx)("span", { className: H.ZT, children: t }) },
        e,
    );
}
class Z extends l.PureComponent {
    scrollerRef = l.createRef();
    inputRef = l.createRef();
    _listId = (0, b.Ld)();
    state = { query: this.props.query, mouseFocusDisabled: !0 };
    componentDidMount() {
        I.A.disable(), I.A.enableTemp(E.w);
    }
    componentWillUnmount() {
        I.A.disableTemp(), I.A.enable();
    }
    componentDidUpdate(e, t) {
        let { mouseFocusDisabled: n, query: i } = this.state,
            { selectedIndex: l } = this.props,
            { current: s } = this.scrollerRef;
        null != s &&
            (i !== t.query
                ? s.scrollTo({ to: 0 })
                : n && l >= 0 && s.scrollToIndex({ section: 0, row: l, padding: 10 }));
    }
    close() {
        (0, o.jD)();
    }
    search(e) {
        this.setState({ query: e }), (0, o.$P)(e);
    }
    handleInputChange = () => {
        let { current: e } = this.inputRef;
        null != e && this.search(e.value);
    };
    handleMouseMove = () => {
        let { mouseFocusDisabled: e } = this.state;
        !1 !== e && this.setState({ mouseFocusDisabled: !1 });
    };
    focusResult = (e) => {
        this.state.mouseFocusDisabled || (0, o.wf)(this.props.results.indexOf(e));
    };
    selectResult = (e) => {
        (0, o.F6)(e, this.props.queryMode === C.rD.TEXT_CHANNEL);
    };
    handleContextMenu = (e) => {
        let t = this.props.results[this.props.selectedIndex];
        switch (t.type) {
            case C.rD.GUILD:
                return (0, f.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("32292"),
                        n.e("49681"),
                        n.e("96382"),
                        n.e("20044"),
                        n.e("28367"),
                        n.e("45174"),
                        n.e("85519"),
                        n.e("87963"),
                        n.e("37266"),
                        n.e("55057"),
                        n.e("76021"),
                        n.e("63229"),
                        n.e("31988"),
                        n.e("55343"),
                        n.e("93103"),
                        n.e("88342"),
                        n.e("8555"),
                        n.e("40142"),
                        n.e("60161"),
                        n.e("98765"),
                        n.e("65437"),
                        n.e("34983"),
                        n.e("92414"),
                        n.e("95208"),
                        n.e("72401"),
                        n.e("47417"),
                        n.e("19558"),
                        n.e("53142"),
                        n.e("76390"),
                        n.e("93312"),
                        n.e("95752"),
                        n.e("67339"),
                        n.e("21055"),
                        n.e("31538"),
                        n.e("21453"),
                        n.e("54436"),
                        n.e("98954"),
                        n.e("421"),
                        n.e("227"),
                        n.e("90184"),
                        n.e("62718"),
                        n.e("29594"),
                        n.e("52286"),
                        n.e("8018"),
                        n.e("7637"),
                        n.e("28136"),
                        n.e("3025"),
                        n.e("86674"),
                        n.e("4009"),
                        n.e("49862"),
                        n.e("80093"),
                        n.e("22547"),
                        n.e("60989"),
                        n.e("82486"),
                        n.e("77602"),
                        n.e("68587"),
                        n.e("86546"),
                        n.e("15373"),
                        n.e("42749"),
                        n.e("56026"),
                        n.e("16301"),
                        n.e("22191"),
                        n.e("46411"),
                        n.e("25961"),
                        n.e("44935"),
                        n.e("13848"),
                        n.e("62890"),
                        n.e("46291"),
                        n.e("41068"),
                        n.e("32347"),
                        n.e("8458"),
                        n.e("15666"),
                        n.e("11810"),
                        n.e("95765"),
                        n.e("31742"),
                        n.e("13337"),
                        n.e("65338"),
                        n.e("49036"),
                        n.e("77473"),
                    ]).then(n.bind(n, 860417));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t.record, onSelect: o.jD, hideSettings: !0 });
                });
            case C.rD.TEXT_CHANNEL:
            case C.rD.VOICE_CHANNEL:
                let l = t.record,
                    s = y.A.getGuild(l.getGuildId());
                if (null == s) return;
                switch (l.type) {
                    case k.rbe.GUILD_TEXT:
                    case k.rbe.GUILD_ANNOUNCEMENT:
                    case k.rbe.GUILD_FORUM:
                    case k.rbe.GUILD_MEDIA:
                        return (0, f.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("79359"), n.e("26934")]).then(
                                n.bind(n, 468916),
                            );
                            return (t) => (0, i.jsx)(e, { ...t, channel: l, guild: s, onSelect: o.jD });
                        });
                    case k.rbe.GUILD_VOICE:
                    case k.rbe.GUILD_STAGE_VOICE:
                        return (0, f.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("97262"),
                                n.e("93103"),
                                n.e("79359"),
                                n.e("99854"),
                                n.e("48909"),
                            ]).then(n.bind(n, 119357));
                            return (t) => (0, i.jsx)(e, { ...t, channel: l, guild: s, onSelect: o.jD });
                        });
                    case k.rbe.ANNOUNCEMENT_THREAD:
                    case k.rbe.PUBLIC_THREAD:
                    case k.rbe.PRIVATE_THREAD:
                        return (0, f.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("94989"), n.e("59388")]).then(
                                n.bind(n, 612826),
                            );
                            return (t) => (0, i.jsx)(e, { ...t, channel: l, onSelect: o.jD });
                        });
                    case k.rbe.GUILD_STORE:
                        return (0, f.L3)(e, async () => {
                            let { default: e } = await n.e("15669").then(n.bind(n, 313140));
                            return (t) => (0, i.jsx)(e, { ...t, channel: l, guild: s, onSelect: o.jD });
                        });
                    case k.rbe.GUILD_DIRECTORY:
                        return (0, f.L3)(e, async () => {
                            let { default: e } = await n.e("29559").then(n.bind(n, 994058));
                            return (t) => (0, i.jsx)(e, { ...t, channel: l });
                        });
                }
                break;
            case C.rD.GROUP_DM:
                return (0, f.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("97262"), n.e("60200"), n.e("68530")]).then(
                        n.bind(n, 4027),
                    );
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channel: t.record,
                            selected: j.A.getChannelId() === t.record.id,
                            onSelect: o.jD,
                        });
                });
            case C.rD.USER:
                return (0, f.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("61657")]).then(
                        n.bind(n, 668569),
                    );
                    return (n) => (0, i.jsx)(e, { ...n, user: t.record, onSelect: o.jD });
                });
        }
    };
    handleKeyDown = (e) => {
        let { mouseFocusDisabled: t, query: n } = this.state,
            { results: i } = this.props;
        !1 === t && this.setState({ mouseFocusDisabled: !0 });
        let l = e.key.toLowerCase(),
            { selectedIndex: s } = this.props;
        switch (l) {
            case "escape":
                e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search("") : (0, o.jD)();
                return;
            case "k":
            case "t":
                (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, o.jD)());
                return;
            case "enter": {
                if (-1 === s) return;
                if ((e.preventDefault(), e.altKey)) return this.handleContextMenu(e);
                let t = i[s];
                null != t && this.selectResult(t);
                return;
            }
            case "arrowup":
                s = (0, C.Vv)(C.vB.UP, s, i);
                break;
            case "arrowdown":
                s = (0, C.Vv)(C.vB.DOWN, s, i);
                break;
            case "n":
                if (!e.ctrlKey) return;
                s = (0, C.Vv)(C.vB.DOWN, s, i);
                break;
            case "p":
                if (!e.ctrlKey) return;
                s = (0, C.Vv)(C.vB.UP, s, i);
                break;
            default:
                return;
        }
        e.preventDefault(), (0, o.wf)(s);
    };
    handleGlobalPaste = (e) => {
        let { event: t } = e,
            n = t.clipboardData?.getData("text");
        null != n &&
            (t.preventDefault(),
            t.stopPropagation(),
            this.search(this.state.query + n),
            this.inputRef.current?.focus());
    };
    renderInput() {
        let { selectedIndex: e, results: t } = this.props,
            { query: n } = this.state,
            l = t.length > 0 && "" !== n;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(L.EG, { event: k.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, i.jsx)(m.vN, {
                    children: (0, i.jsx)("input", {
                        className: H.hF,
                        "aria-label": V.intl.string(V.t.ZvKwYa),
                        ref: this.inputRef,
                        type: "text",
                        role: "combobox",
                        "aria-controls": this._listId,
                        "aria-expanded": l,
                        "aria-activedescendant": l ? this.getRowId(e) : void 0,
                        "aria-autocomplete": "list",
                        placeholder: V.intl.string(V.t.VtvewW),
                        onChange: this.handleInputChange,
                        onKeyDown: this.handleKeyDown,
                        value: this.state.query,
                        spellCheck: !1,
                        autoFocus: !0,
                    }),
                }),
            ],
        });
    }
    renderSection() {
        return null;
    }
    renderResults() {
        let e = () => {
            let { query: e } = this.state,
                { results: t } = this.props;
            return 0 === t.length && e.length > 0
                ? (0, i.jsx)(K, {})
                : 0 === t.length
                  ? null
                  : (0, i.jsx)(A.Ei, {
                        innerId: this._listId,
                        innerRole: "listbox",
                        "aria-label": V.intl.string(V.t.Wef5Do),
                        ref: this.scrollerRef,
                        sectionHeight: 0,
                        rowHeight: 34,
                        paddingBottom: 10,
                        sections: [t.length],
                        className: H.XG,
                        renderRow: this.renderRow,
                        renderSection: this.renderSection,
                    });
        };
        return (0, i.jsx)("div", { className: H.sN, children: e() });
    }
    focusNode(e) {
        M._.dispatch(k.jej.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return `quick-switcher-${this._listId}-item-${e}`;
    }
    renderRow = (e) => {
        let { row: t } = e,
            n = this.props.results[t],
            { selectedIndex: l } = this.props,
            { showScores: s } = S.getCurrentConfig({ location: "62f4be_1" }, { autoTrackExposure: !1 });
        switch (n.type) {
            case C.rD.HEADER:
                return (0, i.jsx)(D.Y9, { children: n.record.text }, `${n.type}-${n.record.id}`);
            case C.rD.TEXT_CHANNEL:
                return (0, i.jsx)(
                    z,
                    {
                        id: this.getRowId(t),
                        focused: l >= 0 && t === l,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        channel: n.record,
                        score: s ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case C.rD.VOICE_CHANNEL:
                return (0, i.jsx)(
                    q,
                    {
                        id: this.getRowId(t),
                        focused: l >= 0 && t === l,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        channel: n.record,
                        score: s ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case C.rD.GUILD:
                return (0, i.jsx)(
                    Q,
                    {
                        id: this.getRowId(t),
                        focused: l >= 0 && t === l,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        guild: n.record,
                        score: s ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case C.rD.USER:
                return (0, i.jsx)(
                    X,
                    {
                        id: this.getRowId(t),
                        focused: l >= 0 && t === l,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        user: n.record,
                        comparator: n.comparator,
                        score: s ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case C.rD.GROUP_DM:
                return (0, i.jsx)(
                    J,
                    {
                        id: this.getRowId(t),
                        focused: l >= 0 && t === l,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        channel: n.record,
                        score: s ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case C.rD.APPLICATION:
                return (0, i.jsx)(
                    D.lg,
                    {
                        id: this.getRowId(t),
                        focused: l >= 0 && t === l,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        application: n.record,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case C.rD.LINK:
                return (0, i.jsx)(
                    D.N_,
                    {
                        focused: l >= 0 && t === l,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        link: n.record,
                        score: s ? n.score : void 0,
                        id: this.getRowId(t),
                    },
                    `${n.type}-${n.record.id}`,
                );
            case C.rD.IN_APP_NAVIGATION:
                return (0, i.jsx)(
                    D.vw,
                    {
                        focused: l >= 0 && t === l,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        navigationRecord: n.record,
                        score: s ? n.score : void 0,
                        id: this.getRowId(t),
                    },
                    `${n.type}-${n.record.id}`,
                );
            default:
                return null;
        }
    };
    renderProtip() {
        return (0, i.jsx)(x.A, {
            className: u()(H.PP, { [H.ov]: this.state.query.length > 0 }),
            type: x.A.Types.INLINE,
            children: V.intl.format(V.t.wukqXQ, {
                userSymbolHook: (e, t) => $(t, C.AT.USER, V.intl.string(V.t.GQRCGn)),
                textChannelSymbolHook: (e, t) => $(t, C.AT.TEXT_CHANNEL, V.intl.string(V.t.wrwhuZ)),
                voiceChannelSymbolHook: (e, t) => $(t, C.AT.VOICE_CHANNEL, V.intl.string(V.t["jz+hJp"])),
                guildSymbolHook: (e, t) => $(t, C.AT.GUILD, V.intl.string(V.t.WuwCWi)),
                helpdeskArticle: G.A.getArticleURL(k.MVz.QUICK_SWITCHER_TUTORIAL),
            }),
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, i.jsx)(W, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, i.jsx)(_.d, {
            "aria-label": V.intl.string(V.t.ZvKwYa),
            size: "lg",
            transitionState: this.props.transitionState,
            onClose: this.props.onClose,
            children: (0, i.jsxs)("div", {
                className: H.rs,
                onMouseMove: this.handleMouseMove,
                children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()],
            }),
        });
    }
}
function ee(e) {
    let t = (0, h.cf)([d.A], () => d.A.getProps());
    return (0, i.jsx)(Z, { ...t, ...e });
}
let et = "QUICK_SWITCHER_MODAL_KEY";
class en extends a.A {
    _initialize() {
        r.h.subscribe("QUICKSWITCHER_SHOW", this.handleShow), r.h.subscribe("QUICKSWITCHER_HIDE", this.handleHide);
    }
    _terminate() {
        r.h.unsubscribe("QUICKSWITCHER_SHOW", this.handleShow), r.h.unsubscribe("QUICKSWITCHER_HIDE", this.handleHide);
    }
    handleShow() {
        d.A.isOpen() &&
            !(0, s.hasModalOpen)(et) &&
            (0, s.openModal)((e) => (0, i.jsx)(ee, { ...e }), { modalKey: et, instant: !0, onCloseCallback: o.jD });
    }
    handleHide() {
        (0, s.closeModal)(et);
    }
}
let ei = new en();
