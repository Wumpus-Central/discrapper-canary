"use strict";
n.d(t, { A: () => ei });
var i = n(627968),
    r = n(64700),
    s = n(192308),
    a = n(228366),
    o = n(272355),
    l = n(793322),
    u = n(174768),
    c = n(503698),
    d = n.n(c),
    _ = n(224640),
    f = n(17928),
    h = n(990078),
    p = n(349288),
    E = n(187322),
    m = n(475825),
    g = n(442433),
    A = n(390435),
    I = n(775121),
    T = n(115718);
let S = (0, n(600975).C)({
    kind: "user",
    id: "2021-02_staff_qc_debugging",
    label: "Display QS scores in results. Not a real experiment",
    defaultConfig: { showScores: !1 },
    treatments: [{ id: 1, label: "Show scores in QS results", config: { showScores: !0 } }],
});
var N = n(12351),
    y = n(915089),
    C = n(734057),
    v = n(458294),
    O = n(71393),
    R = n(290863),
    b = n(222823),
    D = n(309010),
    L = n(607567),
    w = n(234320),
    M = n(625494),
    P = n(975571),
    x = n(820785),
    U = n(615300),
    k = n(451988),
    G = n(844222),
    F = n(652215),
    V = n(375708),
    B = n(246729);
let H = { friction: 15, tension: 100 };
class j extends r.PureComponent {
    state = { shown: !1, translateY: new U.A.Value(0) };
    static contextType = G.C;
    rootRef = r.createRef();
    focusTimeout = new k.Ep();
    componentDidMount() {
        this.setState({ shown: !0 }), M._.subscribe(F.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentWillUnmount() {
        this.focusTimeout.stop(), M._.unsubscribe(F.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
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
        !0 !== t.enabled && U.A.spring(this.state.translateY, { toValue: Math.min(e, 250), ...H }).start();
    }
    renderArrowGroup(e) {
        return (0, i.jsxs)("div", {
            className: d()(B.XN, e),
            children: [
                (0, i.jsx)(U.A.div, {
                    className: d()(B.Hf, B.xM),
                    style: this.getStyle(),
                    children: (0, i.jsx)("img", { alt: "", src: n(824829), className: B.D6 }),
                }),
                (0, i.jsx)("div", {
                    className: d()(B.Hf, B.JM),
                    children: (0, i.jsx)("img", { alt: "", src: n(162206), className: B.D6 }),
                }),
                (0, i.jsx)("div", {
                    className: d()(B.Hf, B.QJ),
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
            className: d()(B.d$, { [B.SP]: t, [B.tG]: e }),
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
var Y = n(781303);
let W = () =>
    (0, i.jsxs)("div", {
        className: Y.p$,
        children: [
            (0, i.jsx)("div", { className: Y.lv, children: V.intl.string(V.t.bpbATE) }),
            (0, i.jsx)("div", {
                className: Y.PA,
                children: (0, i.jsx)(p.Anchor, {
                    href: P.A.getArticleURL(F.MVz.QUICK_SWITCHER_TUTORIAL),
                    children: V.intl.string(V.t["4iPfEO"]),
                }),
            }),
        ],
    });
class K extends r.Component {
    static defaultProps = { unread: !1 };
    render() {
        let e = O.A.getGuild(this.props.channel.guild_id);
        return (0, i.jsx)(x.c3, {
            ...this.props,
            children: (0, i.jsx)("div", { className: Y.MD, children: null != e ? e.name : null }),
        });
    }
}
let z = f.Ay.connectStores([b.Ay, C.A], (e) => {
        let { channel: t } = e;
        return {
            unread: b.Ay.hasUnread(t.id),
            mentions: b.Ay.getMentionCount(t.id),
            isMentionLowImportance: b.Ay.getIsMentionLowImportance(t.id),
            category: C.A.getChannel(t.parent_id),
        };
    })(K),
    $ = f.Ay.connectStores([L.Ay], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id)
            throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
        return { voiceStates: L.Ay.getVoiceStates(t.guild_id)[t.id] };
    })(K),
    q = f.Ay.connectStores([v.default], (e) => {
        let { guild: t } = e;
        return { unread: v.default.hasUnread(t.id) };
    })(x.OS),
    Z = f.Ay.connectStores([b.Ay, R.A], (e) => {
        let { channel: t } = e,
            n = null,
            i = R.A.getState().statuses;
        return (
            t.recipients?.some((e) => i[e] === F.clD.ONLINE) && (n = F.clD.ONLINE),
            { mentions: b.Ay.getMentionCount(t.id), status: n }
        );
    })(x.nG),
    X = f.Ay.connectStores([C.A, b.Ay, R.A], (e) => {
        let { user: t } = e,
            n = C.A.getDMFromUserId(t.id);
        return {
            mentions: null != n ? b.Ay.getMentionCount(n) : 0,
            status: R.A.getStatus(t.id),
            isMobile: R.A.isMobileOnline(t.id),
        };
    })(x.KJ);
function Q(e, t, n) {
    return (0, i.jsx)(
        h.m,
        { __unsupportedReactNodeAsText: n, children: (0, i.jsx)("span", { className: Y.ZT, children: t }) },
        e,
    );
}
class J extends r.PureComponent {
    scrollerRef = r.createRef();
    inputRef = r.createRef();
    _listId = (0, y.Ld)();
    state = { query: this.props.query, mouseFocusDisabled: !0 };
    componentDidMount() {
        I.A.disable(), I.A.enableTemp(A.w);
    }
    componentWillUnmount() {
        I.A.disableTemp(), I.A.enable();
    }
    componentDidUpdate(e, t) {
        let { mouseFocusDisabled: n, query: i } = this.state,
            { selectedIndex: r } = this.props,
            { current: s } = this.scrollerRef;
        null != s &&
            (i !== t.query
                ? s.scrollTo({ to: 0 })
                : n && r >= 0 && s.scrollToIndex({ section: 0, row: r, padding: 10 }));
    }
    close() {
        (0, l.jD)();
    }
    search(e) {
        this.setState({ query: e }), (0, l.$P)(e);
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
        this.state.mouseFocusDisabled || (0, l.wf)(this.props.results.indexOf(e));
    };
    selectResult = (e) => {
        (0, l.F6)(e, this.props.queryMode === T.rD.TEXT_CHANNEL);
    };
    handleContextMenu = (e) => {
        let t = this.props.results[this.props.selectedIndex];
        switch (t.type) {
            case T.rD.GUILD:
                return (0, g.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("32824"),
                        n.e("79924"),
                        n.e("28951"),
                        n.e("60361"),
                        n.e("80203"),
                        n.e("29690"),
                        n.e("685"),
                        n.e("39655"),
                        n.e("77691"),
                        n.e("79149"),
                        n.e("54266"),
                        n.e("35769"),
                        n.e("93110"),
                        n.e("74103"),
                        n.e("5959"),
                        n.e("86028"),
                        n.e("95664"),
                        n.e("9432"),
                        n.e("45650"),
                        n.e("55030"),
                        n.e("27660"),
                        n.e("85484"),
                        n.e("31135"),
                        n.e("25677"),
                        n.e("8506"),
                        n.e("333"),
                        n.e("15615"),
                        n.e("22995"),
                        n.e("79705"),
                        n.e("73953"),
                        n.e("33957"),
                        n.e("48157"),
                        n.e("42971"),
                        n.e("28643"),
                        n.e("47459"),
                        n.e("40671"),
                        n.e("25610"),
                        n.e("74389"),
                        n.e("97444"),
                        n.e("49579"),
                        n.e("41069"),
                        n.e("2661"),
                        n.e("43908"),
                        n.e("87845"),
                        n.e("85970"),
                        n.e("49089"),
                        n.e("45970"),
                        n.e("5007"),
                        n.e("1472"),
                        n.e("83852"),
                        n.e("80186"),
                        n.e("23924"),
                        n.e("42205"),
                        n.e("71091"),
                        n.e("19402"),
                        n.e("49681"),
                        n.e("96382"),
                        n.e("22687"),
                        n.e("62052"),
                        n.e("63202"),
                        n.e("82596"),
                        n.e("28367"),
                        n.e("10471"),
                        n.e("35429"),
                        n.e("63232"),
                        n.e("11301"),
                        n.e("60235"),
                        n.e("64827"),
                        n.e("30938"),
                        n.e("96643"),
                        n.e("94493"),
                        n.e("92789"),
                        n.e("47834"),
                        n.e("74016"),
                        n.e("19551"),
                        n.e("84569"),
                        n.e("6338"),
                        n.e("50689"),
                        n.e("7743"),
                        n.e("45959"),
                        n.e("60658"),
                        n.e("8304"),
                        n.e("18573"),
                        n.e("55936"),
                        n.e("31988"),
                        n.e("39667"),
                        n.e("5812"),
                        n.e("26073"),
                        n.e("34303"),
                        n.e("28866"),
                        n.e("1368"),
                        n.e("58038"),
                        n.e("93159"),
                        n.e("31716"),
                        n.e("8751"),
                        n.e("62931"),
                        n.e("81987"),
                        n.e("50417"),
                        n.e("74548"),
                        n.e("93103"),
                        n.e("91763"),
                        n.e("76602"),
                        n.e("9233"),
                        n.e("28229"),
                        n.e("21921"),
                        n.e("76418"),
                        n.e("71210"),
                        n.e("42724"),
                        n.e("43437"),
                        n.e("82263"),
                        n.e("40258"),
                        n.e("66495"),
                        n.e("88342"),
                        n.e("86127"),
                        n.e("39970"),
                        n.e("6174"),
                        n.e("91146"),
                        n.e("8555"),
                        n.e("46070"),
                        n.e("42451"),
                        n.e("72789"),
                        n.e("6949"),
                        n.e("86814"),
                        n.e("17249"),
                        n.e("88599"),
                        n.e("35027"),
                        n.e("53917"),
                        n.e("62422"),
                        n.e("25949"),
                        n.e("90365"),
                        n.e("89088"),
                        n.e("71273"),
                        n.e("75842"),
                        n.e("36863"),
                        n.e("67861"),
                        n.e("1518"),
                        n.e("15186"),
                        n.e("9640"),
                        n.e("98765"),
                        n.e("47626"),
                        n.e("23354"),
                        n.e("82644"),
                        n.e("52548"),
                        n.e("3589"),
                        n.e("20590"),
                        n.e("65437"),
                        n.e("74810"),
                        n.e("28083"),
                        n.e("78453"),
                        n.e("80830"),
                        n.e("79745"),
                        n.e("53984"),
                        n.e("80854"),
                        n.e("35395"),
                        n.e("43780"),
                        n.e("48760"),
                        n.e("46844"),
                        n.e("63235"),
                        n.e("45413"),
                        n.e("44571"),
                        n.e("86672"),
                        n.e("90664"),
                        n.e("30788"),
                        n.e("32756"),
                        n.e("64850"),
                        n.e("70104"),
                        n.e("52617"),
                        n.e("2564"),
                        n.e("25246"),
                        n.e("47417"),
                        n.e("19558"),
                        n.e("58946"),
                        n.e("48330"),
                        n.e("23995"),
                        n.e("14285"),
                        n.e("95752"),
                        n.e("8362"),
                        n.e("41678"),
                        n.e("72401"),
                        n.e("62875"),
                        n.e("4744"),
                        n.e("2698"),
                        n.e("5500"),
                        n.e("501"),
                        n.e("73384"),
                        n.e("82783"),
                        n.e("86243"),
                        n.e("32209"),
                        n.e("39171"),
                        n.e("37021"),
                        n.e("234"),
                        n.e("87478"),
                        n.e("83952"),
                        n.e("44780"),
                        n.e("5557"),
                        n.e("59957"),
                        n.e("95340"),
                        n.e("62718"),
                        n.e("89916"),
                        n.e("90301"),
                        n.e("49145"),
                        n.e("57355"),
                        n.e("60773"),
                        n.e("9004"),
                        n.e("8018"),
                        n.e("92295"),
                        n.e("68763"),
                        n.e("15109"),
                        n.e("29666"),
                        n.e("58273"),
                        n.e("19454"),
                        n.e("20930"),
                        n.e("74610"),
                        n.e("26001"),
                        n.e("16988"),
                        n.e("30997"),
                        n.e("14591"),
                        n.e("52111"),
                        n.e("28136"),
                        n.e("57458"),
                        n.e("59797"),
                        n.e("93336"),
                        n.e("60358"),
                        n.e("87436"),
                        n.e("16084"),
                        n.e("1243"),
                        n.e("75859"),
                        n.e("43116"),
                        n.e("27659"),
                        n.e("15920"),
                        n.e("68530"),
                        n.e("3930"),
                        n.e("44057"),
                        n.e("3663"),
                        n.e("87317"),
                        n.e("10943"),
                        n.e("66580"),
                        n.e("78046"),
                        n.e("80093"),
                        n.e("38601"),
                        n.e("73669"),
                        n.e("7775"),
                        n.e("22547"),
                        n.e("60989"),
                        n.e("82486"),
                        n.e("45830"),
                        n.e("61058"),
                        n.e("50342"),
                        n.e("33097"),
                        n.e("3710"),
                        n.e("77602"),
                        n.e("10262"),
                        n.e("95602"),
                        n.e("46313"),
                        n.e("5896"),
                        n.e("69178"),
                        n.e("29569"),
                        n.e("36002"),
                        n.e("43233"),
                        n.e("41786"),
                        n.e("91643"),
                        n.e("63726"),
                        n.e("71329"),
                        n.e("34409"),
                        n.e("56373"),
                        n.e("83827"),
                        n.e("42749"),
                        n.e("56026"),
                        n.e("16301"),
                        n.e("22191"),
                        n.e("25961"),
                        n.e("30501"),
                        n.e("8364"),
                        n.e("66147"),
                        n.e("89541"),
                        n.e("74337"),
                        n.e("52823"),
                        n.e("56967"),
                        n.e("47011"),
                        n.e("31203"),
                        n.e("66913"),
                        n.e("71719"),
                        n.e("72847"),
                        n.e("19690"),
                        n.e("93767"),
                        n.e("13848"),
                        n.e("39214"),
                        n.e("99108"),
                        n.e("14878"),
                        n.e("88307"),
                        n.e("26508"),
                        n.e("61347"),
                        n.e("73091"),
                        n.e("86692"),
                        n.e("52695"),
                        n.e("16237"),
                        n.e("16373"),
                        n.e("81398"),
                        n.e("24484"),
                        n.e("44943"),
                        n.e("32347"),
                        n.e("8458"),
                        n.e("11810"),
                        n.e("48111"),
                        n.e("90152"),
                        n.e("87973"),
                        n.e("57197"),
                        n.e("14863"),
                        n.e("84951"),
                        n.e("71167"),
                        n.e("12390"),
                        n.e("13446"),
                        n.e("61309"),
                        n.e("70284"),
                        n.e("94529"),
                        n.e("30313"),
                        n.e("93305"),
                        n.e("21300"),
                        n.e("17699"),
                        n.e("57032"),
                        n.e("45322"),
                        n.e("94832"),
                        n.e("26386"),
                        n.e("65338"),
                        n.e("94171"),
                        n.e("76064"),
                        n.e("74572"),
                    ]).then(n.bind(n, 860417));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t.record, onSelect: l.jD, hideSettings: !0 });
                });
            case T.rD.TEXT_CHANNEL:
            case T.rD.VOICE_CHANNEL:
                let r = t.record,
                    s = O.A.getGuild(r.getGuildId());
                if (null == s) return;
                switch (r.type) {
                    case F.rbe.GUILD_TEXT:
                    case F.rbe.GUILD_ANNOUNCEMENT:
                    case F.rbe.GUILD_FORUM:
                    case F.rbe.GUILD_MEDIA:
                        return (0, g.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("26132"),
                                n.e("46652"),
                                n.e("93190"),
                                n.e("91763"),
                                n.e("38730"),
                                n.e("35321"),
                                n.e("50033"),
                                n.e("34971"),
                                n.e("3998"),
                                n.e("43266"),
                                n.e("9004"),
                                n.e("30997"),
                                n.e("12255"),
                                n.e("40959"),
                                n.e("79995"),
                                n.e("42339"),
                                n.e("44058"),
                                n.e("91377"),
                                n.e("35723"),
                                n.e("12520"),
                                n.e("66540"),
                                n.e("29542"),
                                n.e("12052"),
                                n.e("25173"),
                            ]).then(n.bind(n, 468916));
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, guild: s, onSelect: l.jD });
                        });
                    case F.rbe.GUILD_VOICE:
                    case F.rbe.GUILD_STAGE_VOICE:
                        return (0, g.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("26132"),
                                n.e("46652"),
                                n.e("93190"),
                                n.e("93103"),
                                n.e("91763"),
                                n.e("38730"),
                                n.e("35321"),
                                n.e("50033"),
                                n.e("34971"),
                                n.e("3998"),
                                n.e("43266"),
                                n.e("9004"),
                                n.e("74610"),
                                n.e("30997"),
                                n.e("12255"),
                                n.e("40959"),
                                n.e("79995"),
                                n.e("42339"),
                                n.e("44058"),
                                n.e("91377"),
                                n.e("35723"),
                                n.e("12520"),
                                n.e("66540"),
                                n.e("29542"),
                                n.e("19690"),
                                n.e("26792"),
                                n.e("12052"),
                                n.e("18663"),
                                n.e("99990"),
                                n.e("99854"),
                            ]).then(n.bind(n, 119357));
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, guild: s, onSelect: l.jD });
                        });
                    case F.rbe.ANNOUNCEMENT_THREAD:
                    case F.rbe.PUBLIC_THREAD:
                    case F.rbe.PRIVATE_THREAD:
                        return (0, g.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("26132"),
                                n.e("91763"),
                                n.e("38730"),
                                n.e("34971"),
                                n.e("3998"),
                                n.e("43266"),
                                n.e("91671"),
                                n.e("12255"),
                                n.e("40959"),
                                n.e("96804"),
                                n.e("85802"),
                                n.e("65200"),
                                n.e("26250"),
                                n.e("51212"),
                                n.e("84615"),
                            ]).then(n.bind(n, 612826));
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, onSelect: l.jD });
                        });
                    case F.rbe.GUILD_STORE:
                        return (0, g.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("26132"),
                                n.e("3998"),
                                n.e("9004"),
                                n.e("30997"),
                                n.e("12255"),
                                n.e("40959"),
                                n.e("79995"),
                                n.e("44058"),
                                n.e("15669"),
                            ]).then(n.bind(n, 313140));
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, guild: s, onSelect: l.jD });
                        });
                    case F.rbe.GUILD_DIRECTORY:
                        return (0, g.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("26132"),
                                n.e("30997"),
                                n.e("79995"),
                                n.e("29559"),
                            ]).then(n.bind(n, 994058));
                            return (t) => (0, i.jsx)(e, { ...t, channel: r });
                        });
                }
                break;
            case T.rD.GROUP_DM:
                return (0, g.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("26132"),
                        n.e("46652"),
                        n.e("93190"),
                        n.e("91763"),
                        n.e("38730"),
                        n.e("34971"),
                        n.e("42339"),
                        n.e("68530"),
                        n.e("12520"),
                        n.e("53416"),
                        n.e("60200"),
                    ]).then(n.bind(n, 4027));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channel: t.record,
                            selected: D.A.getChannelId() === t.record.id,
                            onSelect: l.jD,
                        });
                });
            case T.rD.USER:
                return (0, g.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("74389"),
                        n.e("26132"),
                        n.e("46652"),
                        n.e("93190"),
                        n.e("34552"),
                        n.e("8757"),
                        n.e("89673"),
                        n.e("85968"),
                        n.e("60195"),
                        n.e("68403"),
                        n.e("29787"),
                        n.e("97558"),
                        n.e("94000"),
                        n.e("91994"),
                        n.e("76665"),
                        n.e("76273"),
                        n.e("24198"),
                        n.e("32418"),
                    ]).then(n.bind(n, 668569));
                    return (n) => (0, i.jsx)(e, { ...n, user: t.record, onSelect: l.jD });
                });
        }
    };
    handleKeyDown = (e) => {
        let { mouseFocusDisabled: t, query: n } = this.state,
            { results: i } = this.props;
        !1 === t && this.setState({ mouseFocusDisabled: !0 });
        let r = e.key.toLowerCase(),
            { selectedIndex: s } = this.props;
        switch (r) {
            case "escape":
                e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search("") : (0, l.jD)();
                return;
            case "k":
            case "t":
                (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, l.jD)());
                return;
            case "enter": {
                if (-1 === s) return;
                if ((e.preventDefault(), e.altKey)) return this.handleContextMenu(e);
                let t = i[s];
                null != t && this.selectResult(t);
                return;
            }
            case "arrowup":
                s = (0, T.Vv)(T.vB.UP, s, i);
                break;
            case "arrowdown":
                s = (0, T.Vv)(T.vB.DOWN, s, i);
                break;
            case "n":
                if (!e.ctrlKey) return;
                s = (0, T.Vv)(T.vB.DOWN, s, i);
                break;
            case "p":
                if (!e.ctrlKey) return;
                s = (0, T.Vv)(T.vB.UP, s, i);
                break;
            default:
                return;
        }
        e.preventDefault(), (0, l.wf)(s);
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
            r = t.length > 0 && "" !== n;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(w.EG, { event: F.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, i.jsx)(E.vN, {
                    children: (0, i.jsx)("input", {
                        className: Y.hF,
                        "aria-label": V.intl.string(V.t.ZvKwYa),
                        ref: this.inputRef,
                        type: "text",
                        role: "combobox",
                        "aria-controls": this._listId,
                        "aria-expanded": r,
                        "aria-activedescendant": r ? this.getRowId(e) : void 0,
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
                ? (0, i.jsx)(W, {})
                : 0 === t.length
                  ? null
                  : (0, i.jsx)(m.Ei, {
                        innerId: this._listId,
                        innerRole: "listbox",
                        "aria-label": V.intl.string(V.t.Wef5Do),
                        ref: this.scrollerRef,
                        sectionHeight: 0,
                        rowHeight: 34,
                        paddingBottom: 10,
                        sections: [t.length],
                        className: Y.XG,
                        renderRow: this.renderRow,
                        renderSection: this.renderSection,
                    });
        };
        return (0, i.jsx)("div", { className: Y.sN, children: e() });
    }
    focusNode(e) {
        M._.dispatch(F.jej.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return `quick-switcher-${this._listId}-item-${e}`;
    }
    renderRow = (e) => {
        let { row: t } = e,
            n = this.props.results[t],
            { selectedIndex: r } = this.props,
            { showScores: s } = S.getCurrentConfig({ location: "62f4be_1" }, { autoTrackExposure: !1 });
        switch (n.type) {
            case T.rD.HEADER:
                return (0, i.jsx)(x.Y9, { children: n.record.text }, `${n.type}-${n.record.id}`);
            case T.rD.TEXT_CHANNEL:
                return (0, i.jsx)(
                    z,
                    {
                        id: this.getRowId(t),
                        focused: r >= 0 && t === r,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        channel: n.record,
                        score: s ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case T.rD.VOICE_CHANNEL:
                return (0, i.jsx)(
                    $,
                    {
                        id: this.getRowId(t),
                        focused: r >= 0 && t === r,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        channel: n.record,
                        score: s ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case T.rD.GUILD:
                return (0, i.jsx)(
                    q,
                    {
                        id: this.getRowId(t),
                        focused: r >= 0 && t === r,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        guild: n.record,
                        score: s ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case T.rD.USER:
                return (0, i.jsx)(
                    X,
                    {
                        id: this.getRowId(t),
                        focused: r >= 0 && t === r,
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
            case T.rD.GROUP_DM:
                return (0, i.jsx)(
                    Z,
                    {
                        id: this.getRowId(t),
                        focused: r >= 0 && t === r,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        channel: n.record,
                        score: s ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case T.rD.APPLICATION:
                return (0, i.jsx)(
                    x.lg,
                    {
                        id: this.getRowId(t),
                        focused: r >= 0 && t === r,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        application: n.record,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case T.rD.LINK:
                return (0, i.jsx)(
                    x.N_,
                    {
                        focused: r >= 0 && t === r,
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
            case T.rD.IN_APP_NAVIGATION:
                return (0, i.jsx)(
                    x.vw,
                    {
                        focused: r >= 0 && t === r,
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
        return (0, i.jsx)(N.A, {
            className: d()(Y.PP, { [Y.ov]: this.state.query.length > 0 }),
            type: N.A.Types.INLINE,
            children: V.intl.format(V.t.wukqXQ, {
                userSymbolHook: (e, t) => Q(t, T.AT.USER, V.intl.string(V.t.GQRCGn)),
                textChannelSymbolHook: (e, t) => Q(t, T.AT.TEXT_CHANNEL, V.intl.string(V.t.wrwhuZ)),
                voiceChannelSymbolHook: (e, t) => Q(t, T.AT.VOICE_CHANNEL, V.intl.string(V.t["jz+hJp"])),
                guildSymbolHook: (e, t) => Q(t, T.AT.GUILD, V.intl.string(V.t.WuwCWi)),
                helpdeskArticle: P.A.getArticleURL(F.MVz.QUICK_SWITCHER_TUTORIAL),
            }),
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, i.jsx)(j, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, i.jsx)(_.d, {
            "aria-label": V.intl.string(V.t.ZvKwYa),
            size: "lg",
            transitionState: this.props.transitionState,
            onClose: this.props.onClose,
            children: (0, i.jsxs)("div", {
                className: Y.rs,
                onMouseMove: this.handleMouseMove,
                children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()],
            }),
        });
    }
}
function ee(e) {
    let t = (0, f.cf)([u.A], () => u.A.getProps());
    return (0, i.jsx)(J, { ...t, ...e });
}
let et = "QUICK_SWITCHER_MODAL_KEY";
class en extends o.A {
    _initialize() {
        a.h.subscribe("QUICKSWITCHER_SHOW", this.handleShow), a.h.subscribe("QUICKSWITCHER_HIDE", this.handleHide);
    }
    _terminate() {
        a.h.unsubscribe("QUICKSWITCHER_SHOW", this.handleShow), a.h.unsubscribe("QUICKSWITCHER_HIDE", this.handleHide);
    }
    handleShow() {
        u.A.isOpen() &&
            !(0, s.hasModalOpen)(et) &&
            (0, s.openModal)((e) => (0, i.jsx)(ee, { ...e }), { modalKey: et, instant: !0, onCloseCallback: l.jD });
    }
    handleHide() {
        (0, s.closeModal)(et);
    }
}
let ei = new en();
