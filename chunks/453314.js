"use strict";
n.d(t, { A: () => er });
var i = n(627968),
    r = n(64700),
    a = n(192308),
    s = n(228366),
    l = n(272355),
    o = n(793322),
    d = n(174768),
    c = n(503698),
    u = n.n(c),
    _ = n(224640),
    E = n(17928),
    A = n(990078),
    h = n(349288),
    I = n(187322),
    f = n(475825),
    p = n(442433),
    T = n(390435),
    m = n(775121),
    g = n(115718);
let S = (0, n(600975).C)({
    kind: "user",
    id: "2021-02_staff_qc_debugging",
    label: "Display QS scores in results. Not a real experiment",
    defaultConfig: { showScores: !1 },
    treatments: [{ id: 1, label: "Show scores in QS results", config: { showScores: !0 } }],
});
var N = n(12351),
    C = n(915089),
    R = n(734057),
    O = n(458294),
    L = n(71393),
    D = n(290863),
    y = n(568548),
    v = n(309010),
    b = n(607567),
    M = n(234320),
    P = n(625494),
    U = n(975571),
    w = n(363738),
    G = n(820785),
    x = n(615300),
    k = n(451988),
    F = n(844222),
    V = n(652215),
    B = n(375708),
    H = n(246729);
let j = { friction: 15, tension: 100 };
class W extends r.PureComponent {
    state = { shown: !1, translateY: new x.A.Value(0) };
    static contextType = F.C;
    rootRef = r.createRef();
    focusTimeout = new k.Ep();
    componentDidMount() {
        this.setState({ shown: !0 }), P._.subscribe(V.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentWillUnmount() {
        this.focusTimeout.stop(), P._.unsubscribe(V.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
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
        !0 !== t.enabled && x.A.spring(this.state.translateY, { toValue: Math.min(e, 250), ...j }).start();
    }
    renderArrowGroup(e) {
        return (0, i.jsxs)("div", {
            className: u()(H.XN, e),
            children: [
                (0, i.jsx)(x.A.div, {
                    className: u()(H.Hf, H.xM),
                    style: this.getStyle(),
                    children: (0, i.jsx)("img", { alt: "", src: n(824829), className: H.D6 }),
                }),
                (0, i.jsx)("div", {
                    className: u()(H.Hf, H.JM),
                    children: (0, i.jsx)("img", { alt: "", src: n(162206), className: H.D6 }),
                }),
                (0, i.jsx)("div", {
                    className: u()(H.Hf, H.QJ),
                    children: (0, i.jsx)("img", { alt: "", src: n(298607), className: H.D6 }),
                }),
            ],
        });
    }
    renderContent() {
        return (0, i.jsxs)("div", {
            className: H.fi,
            children: [
                (0, i.jsx)("div", { className: H.Iv, children: B.intl.string(B.t.Mp0IGK) }),
                (0, i.jsx)("div", { className: H.kp, children: B.intl.string(B.t["3CbpwH"]) }),
            ],
        });
    }
    render() {
        let { hasQuery: e } = this.props,
            { shown: t } = this.state;
        return (0, i.jsxs)("div", {
            ref: this.rootRef,
            className: u()(H.d$, { [H.SP]: t, [H.tG]: e }),
            children: [this.renderContent(), this.renderArrowGroup(H.__invalid_left), this.renderArrowGroup(H.pG)],
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
function K() {
    return (0, i.jsxs)("div", {
        className: Y.p$,
        children: [
            (0, i.jsx)("div", { className: Y.lv, children: B.intl.string(B.t.bpbATE) }),
            (0, i.jsx)("div", {
                className: Y.PA,
                children: (0, i.jsx)(h.Anchor, {
                    href: U.A.getArticleURL(V.MVz.QUICK_SWITCHER_TUTORIAL),
                    children: B.intl.string(B.t["4iPfEO"]),
                }),
            }),
        ],
    });
}
class $ extends r.Component {
    static defaultProps = { unread: !1 };
    render() {
        let e = L.A.getGuild(this.props.channel.guild_id);
        return (0, i.jsx)(G.c3, {
            ...this.props,
            children: (0, i.jsx)("div", { className: Y.MD, children: null != e ? e.name : null }),
        });
    }
}
let z = E.Ay.connectStores([y.Ay, R.A], (e) => {
        let { channel: t } = e;
        return {
            unread: y.Ay.hasUnread(t.id),
            mentions: y.Ay.getMentionCount(t.id),
            isMentionLowImportance: y.Ay.getIsMentionLowImportance(t.id),
            category: R.A.getChannel(t.parent_id),
        };
    })($),
    q = E.Ay.connectStores([b.Ay], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id)
            throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
        return { voiceStates: b.Ay.getVoiceStates(t.guild_id)[t.id] };
    })($),
    Z = E.Ay.connectStores([O.default], (e) => {
        let { guild: t } = e;
        return { unread: O.default.hasUnread(t.id) };
    })(G.OS),
    X = E.Ay.connectStores([y.Ay, D.A], (e) => {
        let { channel: t } = e,
            n = null,
            i = D.A.getState().statuses;
        return (
            t.recipients?.some((e) => i[e] === V.clD.ONLINE) && (n = V.clD.ONLINE),
            { mentions: y.Ay.getMentionCount(t.id), status: n }
        );
    })(G.nG),
    Q = E.Ay.connectStores([R.A, y.Ay, D.A], (e) => {
        let { user: t } = e,
            n = R.A.getDMFromUserId(t.id);
        return {
            mentions: null != n ? y.Ay.getMentionCount(n) : 0,
            status: D.A.getStatus(t.id),
            isMobile: D.A.isMobileOnline(t.id),
        };
    })(G.KJ);
function J(e, t, n) {
    return (0, i.jsx)(
        A.m,
        { __unsupportedReactNodeAsText: n, children: (0, i.jsx)("span", { className: Y.ZT, children: t }) },
        e,
    );
}
class ee extends r.PureComponent {
    scrollerRef = r.createRef();
    inputRef = r.createRef();
    _listId = (0, C.Ld)();
    state = { query: this.props.query, mouseFocusDisabled: !0 };
    componentDidMount() {
        m.A.disable(), m.A.enableTemp(T.w);
    }
    componentWillUnmount() {
        m.A.disableTemp(), m.A.enable();
    }
    componentDidUpdate(e, t) {
        let { mouseFocusDisabled: n, query: i } = this.state,
            { selectedIndex: r } = this.props,
            { current: a } = this.scrollerRef;
        null != a &&
            (i !== t.query
                ? a.scrollTo({ to: 0 })
                : n && r >= 0 && a.scrollToIndex({ section: 0, row: r, padding: 10 }));
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
        (0, o.F6)(e, this.props.queryMode === g.rD.TEXT_CHANNEL);
    };
    handleContextMenu = (e) => {
        let t = this.props.results[this.props.selectedIndex];
        switch (t.type) {
            case g.rD.GUILD:
                return (0, p.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("26142"),
                        n.e("84287"),
                        n.e("1780"),
                        n.e("47173"),
                        n.e("60361"),
                        n.e("41831"),
                        n.e("51437"),
                        n.e("87960"),
                        n.e("21293"),
                        n.e("93200"),
                        n.e("41625"),
                        n.e("90629"),
                        n.e("8886"),
                        n.e("6212"),
                        n.e("78279"),
                        n.e("78220"),
                        n.e("11262"),
                        n.e("16227"),
                        n.e("37520"),
                        n.e("12410"),
                        n.e("38759"),
                        n.e("37634"),
                        n.e("812"),
                        n.e("89209"),
                        n.e("86832"),
                        n.e("76342"),
                        n.e("60988"),
                        n.e("69273"),
                        n.e("72210"),
                        n.e("3155"),
                        n.e("82104"),
                        n.e("41711"),
                        n.e("49623"),
                        n.e("35316"),
                        n.e("38838"),
                        n.e("45214"),
                        n.e("99253"),
                        n.e("17202"),
                        n.e("90862"),
                        n.e("97189"),
                        n.e("16918"),
                        n.e("33730"),
                        n.e("24059"),
                        n.e("42306"),
                        n.e("11291"),
                        n.e("96846"),
                        n.e("19709"),
                        n.e("4251"),
                        n.e("47412"),
                        n.e("65327"),
                        n.e("96490"),
                        n.e("85484"),
                        n.e("51772"),
                        n.e("6605"),
                        n.e("54483"),
                        n.e("62461"),
                        n.e("25677"),
                        n.e("73679"),
                        n.e("73178"),
                        n.e("333"),
                        n.e("97638"),
                        n.e("22995"),
                        n.e("84896"),
                        n.e("51943"),
                        n.e("90072"),
                        n.e("88016"),
                        n.e("84133"),
                        n.e("55953"),
                        n.e("13627"),
                        n.e("57940"),
                        n.e("58171"),
                        n.e("48404"),
                        n.e("39375"),
                        n.e("47944"),
                        n.e("84473"),
                        n.e("70990"),
                        n.e("15130"),
                        n.e("74051"),
                        n.e("50541"),
                        n.e("32697"),
                        n.e("64622"),
                        n.e("47728"),
                        n.e("31270"),
                        n.e("6514"),
                        n.e("8641"),
                        n.e("6247"),
                        n.e("70298"),
                        n.e("82041"),
                        n.e("97238"),
                        n.e("30541"),
                        n.e("74187"),
                        n.e("62279"),
                        n.e("67454"),
                        n.e("42157"),
                        n.e("85148"),
                        n.e("4676"),
                        n.e("53727"),
                        n.e("57034"),
                        n.e("85948"),
                        n.e("12940"),
                        n.e("52443"),
                        n.e("11266"),
                        n.e("12124"),
                        n.e("18712"),
                        n.e("60654"),
                        n.e("70179"),
                        n.e("97690"),
                        n.e("87103"),
                        n.e("52865"),
                        n.e("57215"),
                        n.e("22535"),
                        n.e("31481"),
                        n.e("83140"),
                        n.e("18670"),
                        n.e("33238"),
                        n.e("31591"),
                        n.e("39111"),
                        n.e("58530"),
                        n.e("35426"),
                        n.e("71505"),
                        n.e("69487"),
                        n.e("87550"),
                        n.e("20631"),
                        n.e("8736"),
                        n.e("61285"),
                        n.e("97242"),
                        n.e("98795"),
                        n.e("65123"),
                        n.e("23549"),
                        n.e("83566"),
                        n.e("69722"),
                        n.e("80083"),
                        n.e("28510"),
                        n.e("78104"),
                        n.e("8502"),
                        n.e("29483"),
                        n.e("39680"),
                        n.e("21194"),
                        n.e("99272"),
                        n.e("20993"),
                        n.e("34161"),
                        n.e("69164"),
                        n.e("92116"),
                        n.e("84200"),
                        n.e("33217"),
                        n.e("25610"),
                        n.e("42548"),
                        n.e("80050"),
                        n.e("37502"),
                        n.e("68316"),
                        n.e("46819"),
                        n.e("81619"),
                        n.e("17738"),
                        n.e("31463"),
                        n.e("57328"),
                        n.e("44135"),
                        n.e("26858"),
                        n.e("82393"),
                        n.e("39328"),
                        n.e("48845"),
                        n.e("34383"),
                        n.e("83185"),
                        n.e("79247"),
                        n.e("41069"),
                        n.e("37261"),
                        n.e("69337"),
                        n.e("62965"),
                        n.e("47587"),
                        n.e("32317"),
                        n.e("84209"),
                        n.e("78777"),
                        n.e("64379"),
                        n.e("79465"),
                        n.e("83314"),
                        n.e("32129"),
                        n.e("85776"),
                        n.e("83671"),
                        n.e("63980"),
                        n.e("18078"),
                        n.e("73099"),
                        n.e("47199"),
                        n.e("78381"),
                        n.e("62280"),
                        n.e("78230"),
                        n.e("11002"),
                        n.e("47170"),
                        n.e("39361"),
                        n.e("15079"),
                        n.e("70613"),
                        n.e("25870"),
                        n.e("76831"),
                        n.e("37870"),
                        n.e("3515"),
                        n.e("77335"),
                        n.e("8177"),
                        n.e("41027"),
                        n.e("37351"),
                        n.e("22671"),
                        n.e("36518"),
                        n.e("79785"),
                        n.e("46757"),
                        n.e("90324"),
                        n.e("20578"),
                        n.e("36592"),
                        n.e("10027"),
                        n.e("92430"),
                        n.e("54453"),
                        n.e("79254"),
                        n.e("38977"),
                        n.e("20802"),
                        n.e("91474"),
                        n.e("17566"),
                        n.e("23924"),
                        n.e("42205"),
                        n.e("55675"),
                        n.e("25845"),
                        n.e("19402"),
                        n.e("49681"),
                        n.e("22687"),
                        n.e("96382"),
                        n.e("62052"),
                        n.e("63202"),
                        n.e("82596"),
                        n.e("10471"),
                        n.e("64827"),
                        n.e("63232"),
                        n.e("68261"),
                        n.e("7167"),
                        n.e("11301"),
                        n.e("96643"),
                        n.e("84569"),
                        n.e("60235"),
                        n.e("61737"),
                        n.e("92789"),
                        n.e("21335"),
                        n.e("77333"),
                        n.e("47834"),
                        n.e("11735"),
                        n.e("85927"),
                        n.e("834"),
                        n.e("2368"),
                        n.e("42842"),
                        n.e("33115"),
                        n.e("6338"),
                        n.e("18573"),
                        n.e("55936"),
                        n.e("85404"),
                        n.e("44057"),
                        n.e("17879"),
                        n.e("88774"),
                        n.e("10120"),
                        n.e("62175"),
                        n.e("31988"),
                        n.e("44571"),
                        n.e("34303"),
                        n.e("97270"),
                        n.e("45959"),
                        n.e("73122"),
                        n.e("8304"),
                        n.e("93159"),
                        n.e("71202"),
                        n.e("8739"),
                        n.e("88131"),
                        n.e("42834"),
                        n.e("43430"),
                        n.e("94723"),
                        n.e("62931"),
                        n.e("58529"),
                        n.e("58038"),
                        n.e("62531"),
                        n.e("44974"),
                        n.e("6174"),
                        n.e("93103"),
                        n.e("28367"),
                        n.e("81647"),
                        n.e("11310"),
                        n.e("76602"),
                        n.e("91763"),
                        n.e("21921"),
                        n.e("9233"),
                        n.e("36877"),
                        n.e("72963"),
                        n.e("52511"),
                        n.e("40402"),
                        n.e("7575"),
                        n.e("53930"),
                        n.e("42724"),
                        n.e("93766"),
                        n.e("13823"),
                        n.e("24303"),
                        n.e("39970"),
                        n.e("76418"),
                        n.e("40258"),
                        n.e("98329"),
                        n.e("92583"),
                        n.e("43437"),
                        n.e("21957"),
                        n.e("66495"),
                        n.e("71210"),
                        n.e("8555"),
                        n.e("28095"),
                        n.e("86127"),
                        n.e("46070"),
                        n.e("88599"),
                        n.e("75842"),
                        n.e("36863"),
                        n.e("21200"),
                        n.e("72789"),
                        n.e("54622"),
                        n.e("28203"),
                        n.e("25949"),
                        n.e("88342"),
                        n.e("6949"),
                        n.e("54638"),
                        n.e("17249"),
                        n.e("71273"),
                        n.e("79049"),
                        n.e("9640"),
                        n.e("62422"),
                        n.e("90365"),
                        n.e("89088"),
                        n.e("52548"),
                        n.e("17989"),
                        n.e("89421"),
                        n.e("35027"),
                        n.e("67861"),
                        n.e("1518"),
                        n.e("37977"),
                        n.e("49653"),
                        n.e("47626"),
                        n.e("23354"),
                        n.e("82644"),
                        n.e("3589"),
                        n.e("24689"),
                        n.e("53984"),
                        n.e("43780"),
                        n.e("20590"),
                        n.e("47958"),
                        n.e("65437"),
                        n.e("80830"),
                        n.e("79745"),
                        n.e("80854"),
                        n.e("35395"),
                        n.e("45413"),
                        n.e("46844"),
                        n.e("63235"),
                        n.e("90757"),
                        n.e("86672"),
                        n.e("94427"),
                        n.e("32756"),
                        n.e("64850"),
                        n.e("70104"),
                        n.e("2564"),
                        n.e("95152"),
                        n.e("71477"),
                        n.e("19558"),
                        n.e("58946"),
                        n.e("86023"),
                        n.e("14285"),
                        n.e("48330"),
                        n.e("95752"),
                        n.e("51011"),
                        n.e("3332"),
                        n.e("30788"),
                        n.e("8362"),
                        n.e("41678"),
                        n.e("72401"),
                        n.e("52617"),
                        n.e("4744"),
                        n.e("2698"),
                        n.e("37021"),
                        n.e("81314"),
                        n.e("23397"),
                        n.e("71430"),
                        n.e("501"),
                        n.e("86243"),
                        n.e("85794"),
                        n.e("67837"),
                        n.e("73384"),
                        n.e("82783"),
                        n.e("32209"),
                        n.e("9371"),
                        n.e("2362"),
                        n.e("87478"),
                        n.e("39171"),
                        n.e("74630"),
                        n.e("48948"),
                        n.e("63244"),
                        n.e("68214"),
                        n.e("44780"),
                        n.e("91450"),
                        n.e("83952"),
                        n.e("93438"),
                        n.e("36227"),
                        n.e("95340"),
                        n.e("44567"),
                        n.e("5557"),
                        n.e("62718"),
                        n.e("89916"),
                        n.e("1812"),
                        n.e("60773"),
                        n.e("92128"),
                        n.e("9004"),
                        n.e("18113"),
                        n.e("8018"),
                        n.e("92295"),
                        n.e("49145"),
                        n.e("41807"),
                        n.e("68763"),
                        n.e("79548"),
                        n.e("99549"),
                        n.e("58273"),
                        n.e("20930"),
                        n.e("74610"),
                        n.e("15109"),
                        n.e("59957"),
                        n.e("48382"),
                        n.e("16988"),
                        n.e("30997"),
                        n.e("29666"),
                        n.e("14591"),
                        n.e("52111"),
                        n.e("18706"),
                        n.e("872"),
                        n.e("57458"),
                        n.e("59797"),
                        n.e("38601"),
                        n.e("93336"),
                        n.e("1243"),
                        n.e("69495"),
                        n.e("15920"),
                        n.e("75859"),
                        n.e("3930"),
                        n.e("28136"),
                        n.e("3663"),
                        n.e("27659"),
                        n.e("68530"),
                        n.e("66580"),
                        n.e("43116"),
                        n.e("78046"),
                        n.e("83230"),
                        n.e("82486"),
                        n.e("16084"),
                        n.e("73669"),
                        n.e("10943"),
                        n.e("7775"),
                        n.e("60989"),
                        n.e("61058"),
                        n.e("50342"),
                        n.e("33097"),
                        n.e("3710"),
                        n.e("36624"),
                        n.e("45830"),
                        n.e("77602"),
                        n.e("10262"),
                        n.e("95602"),
                        n.e("46313"),
                        n.e("41786"),
                        n.e("34409"),
                        n.e("22547"),
                        n.e("29569"),
                        n.e("36002"),
                        n.e("43233"),
                        n.e("63726"),
                        n.e("71329"),
                        n.e("56373"),
                        n.e("83827"),
                        n.e("42749"),
                        n.e("56026"),
                        n.e("16301"),
                        n.e("22191"),
                        n.e("25961"),
                        n.e("74333"),
                        n.e("8364"),
                        n.e("99108"),
                        n.e("66147"),
                        n.e("89541"),
                        n.e("52823"),
                        n.e("56967"),
                        n.e("31203"),
                        n.e("66913"),
                        n.e("71719"),
                        n.e("19690"),
                        n.e("93767"),
                        n.e("13848"),
                        n.e("39214"),
                        n.e("88307"),
                        n.e("14878"),
                        n.e("26508"),
                        n.e("61347"),
                        n.e("91643"),
                        n.e("47011"),
                        n.e("42935"),
                        n.e("73091"),
                        n.e("69178"),
                        n.e("86692"),
                        n.e("52695"),
                        n.e("16373"),
                        n.e("81398"),
                        n.e("24484"),
                        n.e("44943"),
                        n.e("32347"),
                        n.e("8458"),
                        n.e("11810"),
                        n.e("91977"),
                        n.e("90152"),
                        n.e("46570"),
                        n.e("87973"),
                        n.e("57197"),
                        n.e("74337"),
                        n.e("14863"),
                        n.e("84951"),
                        n.e("60165"),
                        n.e("71167"),
                        n.e("12390"),
                        n.e("13446"),
                        n.e("6410"),
                        n.e("61309"),
                        n.e("94529"),
                        n.e("30313"),
                        n.e("68264"),
                        n.e("21300"),
                        n.e("17699"),
                        n.e("57032"),
                        n.e("22941"),
                        n.e("94832"),
                        n.e("26386"),
                        n.e("65338"),
                        n.e("94171"),
                        n.e("76064"),
                        n.e("74572"),
                    ]).then(n.bind(n, 860417));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t.record, onSelect: o.jD, hideSettings: !0 });
                });
            case g.rD.TEXT_CHANNEL:
            case g.rD.VOICE_CHANNEL:
                let r = t.record,
                    a = L.A.getGuild(r.getGuildId());
                if (null == a) return;
                switch (r.type) {
                    case V.rbe.GUILD_TEXT:
                    case V.rbe.GUILD_ANNOUNCEMENT:
                    case V.rbe.GUILD_FORUM:
                    case V.rbe.GUILD_MEDIA:
                        return (0, p.L3)(e, async () => {
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
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, guild: a, onSelect: o.jD });
                        });
                    case V.rbe.GUILD_VOICE:
                    case V.rbe.GUILD_STAGE_VOICE:
                        return (0, p.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("26132"),
                                n.e("46652"),
                                n.e("93103"),
                                n.e("93190"),
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
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, guild: a, onSelect: o.jD });
                        });
                    case V.rbe.ANNOUNCEMENT_THREAD:
                    case V.rbe.PUBLIC_THREAD:
                    case V.rbe.PRIVATE_THREAD:
                        return (0, p.L3)(e, async () => {
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
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, onSelect: o.jD });
                        });
                    case V.rbe.GUILD_STORE:
                        return (0, p.L3)(e, async () => {
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
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, guild: a, onSelect: o.jD });
                        });
                    case V.rbe.GUILD_DIRECTORY:
                        return (0, p.L3)(e, async () => {
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
            case g.rD.GROUP_DM:
                return (0, p.L3)(e, async () => {
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
                        n.e("17244"),
                        n.e("53416"),
                        n.e("60200"),
                    ]).then(n.bind(n, 4027));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channel: t.record,
                            selected: v.A.getChannelId() === t.record.id,
                            onSelect: o.jD,
                        });
                });
            case g.rD.USER:
                return (0, p.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("71406"),
                        n.e("94881"),
                        n.e("26132"),
                        n.e("46652"),
                        n.e("93190"),
                        n.e("34552"),
                        n.e("8757"),
                        n.e("85968"),
                        n.e("89673"),
                        n.e("68403"),
                        n.e("29787"),
                        n.e("82073"),
                        n.e("97558"),
                        n.e("91994"),
                        n.e("76665"),
                        n.e("76273"),
                        n.e("24198"),
                        n.e("32418"),
                    ]).then(n.bind(n, 668569));
                    return (n) => (0, i.jsx)(e, { ...n, user: t.record, onSelect: o.jD });
                });
        }
    };
    handleKeyDown = (e) => {
        let { mouseFocusDisabled: t, query: n } = this.state,
            { results: i } = this.props;
        !1 === t && this.setState({ mouseFocusDisabled: !0 });
        let r = e.key.toLowerCase(),
            { selectedIndex: a } = this.props;
        switch (r) {
            case "escape":
                e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search("") : (0, o.jD)();
                return;
            case "k":
            case "t":
                (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, o.jD)());
                return;
            case "enter": {
                if (-1 === a) return;
                if ((e.preventDefault(), e.altKey)) return this.handleContextMenu(e);
                let t = i[a];
                null != t && this.selectResult(t);
                return;
            }
            case "arrowup":
                a = (0, g.Vv)(g.vB.UP, a, i);
                break;
            case "arrowdown":
                a = (0, g.Vv)(g.vB.DOWN, a, i);
                break;
            case "n":
                if (!e.ctrlKey) return;
                a = (0, g.Vv)(g.vB.DOWN, a, i);
                break;
            case "p":
                if (!e.ctrlKey) return;
                a = (0, g.Vv)(g.vB.UP, a, i);
                break;
            default:
                return;
        }
        e.preventDefault(), (0, o.wf)(a);
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
                (0, i.jsx)(M.EG, { event: V.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, i.jsx)(I.vN, {
                    children: (0, i.jsx)("input", {
                        className: Y.hF,
                        "aria-label": B.intl.string(B.t.ZvKwYa),
                        ref: this.inputRef,
                        type: "text",
                        role: "combobox",
                        "aria-controls": this._listId,
                        "aria-expanded": r,
                        "aria-activedescendant": r ? this.getRowId(e) : void 0,
                        "aria-autocomplete": "list",
                        placeholder: B.intl.string(B.t.VtvewW),
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
                  : (0, i.jsx)(f.Ei, {
                        innerId: this._listId,
                        innerRole: "listbox",
                        "aria-label": B.intl.string(B.t.Wef5Do),
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
        P._.dispatch(V.jej.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return `quick-switcher-${this._listId}-item-${e}`;
    }
    renderRow = (e) => {
        let { row: t } = e,
            n = this.props.results[t],
            { selectedIndex: r } = this.props,
            { showScores: a } = S.getCurrentConfig({ location: "62f4be_1" }, { autoTrackExposure: !1 }),
            { enabled: s, alternatePosition: l } = w.s.getConfig({ location: "QuickSwitcher.renderRow" }),
            o = s && !l ? B.intl.string(B.t["5qyruI"]) : void 0,
            d = s && l ? (0, i.jsx)("div", { className: Y.MD, children: B.intl.string(B.t["5qyruI"]) }) : null,
            c = l ? void 0 : B.intl.string(B.t["9CHfCO"]),
            u = l ? (0, i.jsx)("div", { className: Y.MD, children: B.intl.string(B.t["9CHfCO"]) }) : null;
        switch (n.type) {
            case g.rD.HEADER:
                return (0, i.jsx)(G.Y9, { children: n.record.text }, `${n.type}-${n.record.id}`);
            case g.rD.TEXT_CHANNEL:
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
                        score: a ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case g.rD.VOICE_CHANNEL:
                return (0, i.jsx)(
                    q,
                    {
                        id: this.getRowId(t),
                        focused: r >= 0 && t === r,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        channel: n.record,
                        score: a ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case g.rD.GUILD:
                return (0, i.jsx)(
                    Z,
                    {
                        id: this.getRowId(t),
                        focused: r >= 0 && t === r,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        guild: n.record,
                        inlineLabel: o,
                        score: a ? n.score : void 0,
                        children: d,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case g.rD.USER:
                return (0, i.jsx)(
                    Q,
                    {
                        id: this.getRowId(t),
                        focused: r >= 0 && t === r,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        user: n.record,
                        comparator: n.comparator,
                        score: a ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case g.rD.GROUP_DM:
                return (0, i.jsx)(
                    X,
                    {
                        id: this.getRowId(t),
                        focused: r >= 0 && t === r,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        channel: n.record,
                        score: a ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case g.rD.APPLICATION:
                return (0, i.jsx)(
                    G.lg,
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
            case g.rD.GAME_PROFILE:
                return (0, i.jsx)(
                    G.IH,
                    {
                        id: this.getRowId(t),
                        focused: r >= 0 && t === r,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        game: n.record,
                        inlineLabel: c,
                        children: u,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case g.rD.LINK:
                return (0, i.jsx)(
                    G.N_,
                    {
                        focused: r >= 0 && t === r,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        link: n.record,
                        score: a ? n.score : void 0,
                        id: this.getRowId(t),
                    },
                    `${n.type}-${n.record.id}`,
                );
            case g.rD.IN_APP_NAVIGATION:
                return (0, i.jsx)(
                    G.vw,
                    {
                        focused: r >= 0 && t === r,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        navigationRecord: n.record,
                        score: a ? n.score : void 0,
                        id: this.getRowId(t),
                    },
                    `${n.type}-${n.record.id}`,
                );
            default:
                return null;
        }
    };
    renderProtip() {
        let { enabled: e } = w.s.getConfig({ location: "QuickSwitcher.renderProtip" }),
            t = {
                userSymbolHook: (e, t) => J(t, g.AT.USER, B.intl.string(B.t.GQRCGn)),
                textChannelSymbolHook: (e, t) => J(t, g.AT.TEXT_CHANNEL, B.intl.string(B.t.wrwhuZ)),
                voiceChannelSymbolHook: (e, t) => J(t, g.AT.VOICE_CHANNEL, B.intl.string(B.t["jz+hJp"])),
                guildSymbolHook: (e, t) => J(t, g.AT.GUILD, B.intl.string(B.t.WuwCWi)),
                helpdeskArticle: U.A.getArticleURL(V.MVz.QUICK_SWITCHER_TUTORIAL),
            };
        return (0, i.jsx)(N.A, {
            className: u()(Y.PP, { [Y.ov]: this.state.query.length > 0 }),
            type: N.A.Types.INLINE,
            children: e
                ? B.intl.format(B.t.BGHbLb, {
                      ...t,
                      gameProfileSymbolHook: (e, t) => J(t, g.AT.GAME_PROFILE, B.intl.string(B.t.MfbDzS)),
                  })
                : B.intl.format(B.t.wukqXQ, t),
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, i.jsx)(W, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, i.jsx)(_.d, {
            "aria-label": B.intl.string(B.t.ZvKwYa),
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
function et(e) {
    let t = (0, E.cf)([d.A], () => d.A.getProps());
    return (0, i.jsx)(ee, { ...t, ...e });
}
let en = "QUICK_SWITCHER_MODAL_KEY";
class ei extends l.A {
    _initialize() {
        s.h.subscribe("QUICKSWITCHER_SHOW", this.handleShow), s.h.subscribe("QUICKSWITCHER_HIDE", this.handleHide);
    }
    _terminate() {
        s.h.unsubscribe("QUICKSWITCHER_SHOW", this.handleShow), s.h.unsubscribe("QUICKSWITCHER_HIDE", this.handleHide);
    }
    handleShow() {
        d.A.isOpen() &&
            !(0, a.hasModalOpen)(en) &&
            (0, a.openModal)((e) => (0, i.jsx)(et, { ...e }), { modalKey: en, instant: !0, onCloseCallback: o.jD });
    }
    handleHide() {
        (0, a.closeModal)(en);
    }
}
let er = new ei();
