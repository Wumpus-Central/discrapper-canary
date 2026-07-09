"use strict";
n.d(t, { A: () => ea });
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
    I = n(834730),
    f = n(187322),
    p = n(475825),
    T = n(442433),
    m = n(390435),
    g = n(775121),
    S = n(115718);
let N = (0, n(600975).C)({
    kind: "user",
    id: "2021-02_staff_qc_debugging",
    label: "Display QS scores in results. Not a real experiment",
    defaultConfig: { showScores: !1 },
    treatments: [{ id: 1, label: "Show scores in QS results", config: { showScores: !0 } }],
});
var C = n(12351),
    R = n(915089),
    O = n(734057),
    L = n(458294),
    D = n(71393),
    y = n(290863),
    v = n(568548),
    b = n(309010),
    M = n(607567),
    P = n(234320),
    U = n(625494),
    w = n(975571),
    G = n(363738),
    x = n(820785),
    k = n(615300),
    F = n(451988),
    V = n(844222),
    B = n(652215),
    H = n(375708),
    j = n(909961);
let W = { friction: 15, tension: 100 };
class Y extends r.PureComponent {
    state = { shown: !1, translateY: new k.A.Value(0) };
    static contextType = V.C;
    rootRef = r.createRef();
    focusTimeout = new F.Ep();
    componentDidMount() {
        this.setState({ shown: !0 }), U._.subscribe(B.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentWillUnmount() {
        this.focusTimeout.stop(), U._.unsubscribe(B.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
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
        !0 !== t.enabled && k.A.spring(this.state.translateY, { toValue: Math.min(e, 250), ...W }).start();
    }
    renderArrowGroup(e) {
        return (0, i.jsxs)("div", {
            className: u()(j.XN, e),
            children: [
                (0, i.jsx)(k.A.div, {
                    className: u()(j.Hf, j.xM),
                    style: this.getStyle(),
                    children: (0, i.jsx)("img", { alt: "", src: n(824829), className: j.D6 }),
                }),
                (0, i.jsx)("div", {
                    className: u()(j.Hf, j.JM),
                    children: (0, i.jsx)("img", { alt: "", src: n(162206), className: j.D6 }),
                }),
                (0, i.jsx)("div", {
                    className: u()(j.Hf, j.QJ),
                    children: (0, i.jsx)("img", { alt: "", src: n(298607), className: j.D6 }),
                }),
            ],
        });
    }
    renderContent() {
        return (0, i.jsxs)("div", {
            className: j.fi,
            children: [
                (0, i.jsx)("div", { className: j.Iv, children: H.intl.string(H.t.Mp0IGK) }),
                (0, i.jsx)("div", { className: j.kp, children: H.intl.string(H.t["3CbpwH"]) }),
            ],
        });
    }
    render() {
        let { hasQuery: e } = this.props,
            { shown: t } = this.state;
        return (0, i.jsxs)("div", {
            ref: this.rootRef,
            className: u()(j.d$, { [j.SP]: t, [j.tG]: e }),
            children: [this.renderContent(), this.renderArrowGroup(j.__invalid_left), this.renderArrowGroup(j.pG)],
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
var K = n(594295);
function $() {
    return (0, i.jsxs)("div", {
        className: K.p$,
        children: [
            (0, i.jsx)("div", { className: K.lv, children: H.intl.string(H.t.bpbATE) }),
            (0, i.jsx)("div", {
                className: K.PA,
                children: (0, i.jsx)(h.Anchor, {
                    href: w.A.getArticleURL(B.MVz.QUICK_SWITCHER_TUTORIAL),
                    children: H.intl.string(H.t["4iPfEO"]),
                }),
            }),
        ],
    });
}
class z extends r.Component {
    static defaultProps = { unread: !1 };
    render() {
        let e = D.A.getGuild(this.props.channel.guild_id);
        return (0, i.jsx)(x.c3, {
            ...this.props,
            children: (0, i.jsx)(I.E, {
                variant: "text-sm/medium",
                color: "none",
                className: K.MD,
                children: null != e ? e.name : null,
            }),
        });
    }
}
let q = E.Ay.connectStores([v.Ay, O.A], (e) => {
        let { channel: t } = e;
        return {
            unread: v.Ay.hasUnread(t.id),
            mentions: v.Ay.getMentionCount(t.id),
            isMentionLowImportance: v.Ay.getIsMentionLowImportance(t.id),
            category: O.A.getChannel(t.parent_id),
        };
    })(z),
    Z = E.Ay.connectStores([M.Ay], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id)
            throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
        return { voiceStates: M.Ay.getVoiceStates(t.guild_id)[t.id] };
    })(z),
    X = E.Ay.connectStores([L.default], (e) => {
        let { guild: t } = e;
        return { unread: L.default.hasUnread(t.id) };
    })(x.OS),
    Q = E.Ay.connectStores([v.Ay, y.A], (e) => {
        let { channel: t } = e,
            n = null,
            i = y.A.getState().statuses;
        return (
            t.recipients?.some((e) => i[e] === B.clD.ONLINE) && (n = B.clD.ONLINE),
            { mentions: v.Ay.getMentionCount(t.id), status: n }
        );
    })(x.nG),
    J = E.Ay.connectStores([O.A, v.Ay, y.A], (e) => {
        let { user: t } = e,
            n = O.A.getDMFromUserId(t.id);
        return {
            mentions: null != n ? v.Ay.getMentionCount(n) : 0,
            status: y.A.getStatus(t.id),
            isMobile: y.A.isMobileOnline(t.id),
        };
    })(x.KJ);
function ee(e, t, n) {
    return (0, i.jsx)(
        A.m,
        { __unsupportedReactNodeAsText: n, children: (0, i.jsx)("span", { className: K.ZT, children: t }) },
        e,
    );
}
class et extends r.PureComponent {
    scrollerRef = r.createRef();
    inputRef = r.createRef();
    _listId = (0, R.Ld)();
    state = { query: this.props.query, mouseFocusDisabled: !0 };
    componentDidMount() {
        g.A.disable(), g.A.enableTemp(m.w);
    }
    componentWillUnmount() {
        g.A.disableTemp(), g.A.enable();
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
        (0, o.F6)(e, this.props.queryMode === S.rD.TEXT_CHANNEL);
    };
    handleContextMenu = (e) => {
        let t = this.props.results[this.props.selectedIndex];
        switch (t.type) {
            case S.rD.GUILD:
                return (0, T.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("79070"),
                        n.e("37215"),
                        n.e("92120"),
                        n.e("10273"),
                        n.e("35273"),
                        n.e("52760"),
                        n.e("56205"),
                        n.e("81576"),
                        n.e("48845"),
                        n.e("58800"),
                        n.e("19353"),
                        n.e("74213"),
                        n.e("88950"),
                        n.e("19204"),
                        n.e("41183"),
                        n.e("57760"),
                        n.e("66238"),
                        n.e("43363"),
                        n.e("68352"),
                        n.e("71906"),
                        n.e("81127"),
                        n.e("20538"),
                        n.e("56844"),
                        n.e("36621"),
                        n.e("42676"),
                        n.e("10198"),
                        n.e("9212"),
                        n.e("75193"),
                        n.e("35442"),
                        n.e("38739"),
                        n.e("27956"),
                        n.e("80943"),
                        n.e("46903"),
                        n.e("31880"),
                        n.e("42141"),
                        n.e("77086"),
                        n.e("53385"),
                        n.e("30810"),
                        n.e("41842"),
                        n.e("17829"),
                        n.e("10038"),
                        n.e("11586"),
                        n.e("5111"),
                        n.e("7458"),
                        n.e("44791"),
                        n.e("92678"),
                        n.e("41117"),
                        n.e("5307"),
                        n.e("4728"),
                        n.e("67831"),
                        n.e("34418"),
                        n.e("71436"),
                        n.e("59132"),
                        n.e("15553"),
                        n.e("78771"),
                        n.e("85753"),
                        n.e("38413"),
                        n.e("68463"),
                        n.e("67962"),
                        n.e("37965"),
                        n.e("45522"),
                        n.e("11411"),
                        n.e("856"),
                        n.e("57009"),
                        n.e("97446"),
                        n.e("49251"),
                        n.e("48632"),
                        n.e("47336"),
                        n.e("35837"),
                        n.e("30088"),
                        n.e("18292"),
                        n.e("19"),
                        n.e("69547"),
                        n.e("97735"),
                        n.e("62092"),
                        n.e("64949"),
                        n.e("51706"),
                        n.e("31182"),
                        n.e("16315"),
                        n.e("52845"),
                        n.e("38821"),
                        n.e("36178"),
                        n.e("3740"),
                        n.e("20614"),
                        n.e("64197"),
                        n.e("89313"),
                        n.e("61255"),
                        n.e("52250"),
                        n.e("61625"),
                        n.e("81942"),
                        n.e("65509"),
                        n.e("41891"),
                        n.e("19983"),
                        n.e("99326"),
                        n.e("18893"),
                        n.e("19436"),
                        n.e("75580"),
                        n.e("43615"),
                        n.e("18306"),
                        n.e("53176"),
                        n.e("78092"),
                        n.e("45563"),
                        n.e("16034"),
                        n.e("67388"),
                        n.e("76647"),
                        n.e("96126"),
                        n.e("81463"),
                        n.e("24826"),
                        n.e("9420"),
                        n.e("29549"),
                        n.e("12667"),
                        n.e("59835"),
                        n.e("57173"),
                        n.e("47080"),
                        n.e("1434"),
                        n.e("74998"),
                        n.e("87751"),
                        n.e("37415"),
                        n.e("52610"),
                        n.e("83650"),
                        n.e("91377"),
                        n.e("20083"),
                        n.e("93534"),
                        n.e("41367"),
                        n.e("22368"),
                        n.e("55101"),
                        n.e("4646"),
                        n.e("57323"),
                        n.e("34079"),
                        n.e("8273"),
                        n.e("97198"),
                        n.e("42714"),
                        n.e("92283"),
                        n.e("33566"),
                        n.e("92424"),
                        n.e("13558"),
                        n.e("52487"),
                        n.e("65352"),
                        n.e("82090"),
                        n.e("2312"),
                        n.e("69217"),
                        n.e("75125"),
                        n.e("88244"),
                        n.e("51316"),
                        n.e("88968"),
                        n.e("46849"),
                        n.e("5194"),
                        n.e("68455"),
                        n.e("37934"),
                        n.e("80926"),
                        n.e("59748"),
                        n.e("41603"),
                        n.e("31343"),
                        n.e("51486"),
                        n.e("27647"),
                        n.e("72648"),
                        n.e("71115"),
                        n.e("78182"),
                        n.e("97206"),
                        n.e("97300"),
                        n.e("92333"),
                        n.e("35007"),
                        n.e("80445"),
                        n.e("23151"),
                        n.e("5473"),
                        n.e("537"),
                        n.e("36157"),
                        n.e("62125"),
                        n.e("33911"),
                        n.e("73969"),
                        n.e("75413"),
                        n.e("64033"),
                        n.e("4615"),
                        n.e("27565"),
                        n.e("28802"),
                        n.e("84317"),
                        n.e("10992"),
                        n.e("57079"),
                        n.e("40952"),
                        n.e("62458"),
                        n.e("9743"),
                        n.e("76615"),
                        n.e("1637"),
                        n.e("99828"),
                        n.e("23878"),
                        n.e("845"),
                        n.e("130"),
                        n.e("74025"),
                        n.e("88583"),
                        n.e("24333"),
                        n.e("68206"),
                        n.e("40063"),
                        n.e("13718"),
                        n.e("57443"),
                        n.e("48519"),
                        n.e("78181"),
                        n.e("69328"),
                        n.e("42119"),
                        n.e("65007"),
                        n.e("50290"),
                        n.e("44937"),
                        n.e("34221"),
                        n.e("22148"),
                        n.e("84882"),
                        n.e("60568"),
                        n.e("98923"),
                        n.e("70158"),
                        n.e("52757"),
                        n.e("54330"),
                        n.e("4937"),
                        n.e("21858"),
                        n.e("54386"),
                        n.e("20966"),
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
                        n.e("43716"),
                        n.e("77333"),
                        n.e("2773"),
                        n.e("11735"),
                        n.e("85927"),
                        n.e("834"),
                        n.e("2368"),
                        n.e("42842"),
                        n.e("33115"),
                        n.e("36845"),
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
                        n.e("50741"),
                        n.e("95569"),
                        n.e("93159"),
                        n.e("71202"),
                        n.e("8739"),
                        n.e("42834"),
                        n.e("88131"),
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
                        n.e("31549"),
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
                        n.e("54574"),
                        n.e("80012"),
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
                        n.e("40153"),
                        n.e("95752"),
                        n.e("3332"),
                        n.e("63645"),
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
                        n.e("83154"),
                        n.e("92128"),
                        n.e("9004"),
                        n.e("33667"),
                        n.e("8018"),
                        n.e("92295"),
                        n.e("49145"),
                        n.e("41807"),
                        n.e("68763"),
                        n.e("12405"),
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
                        n.e("72974"),
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
            case S.rD.TEXT_CHANNEL:
            case S.rD.VOICE_CHANNEL:
                let r = t.record,
                    a = D.A.getGuild(r.getGuildId());
                if (null == a) return;
                switch (r.type) {
                    case B.rbe.GUILD_TEXT:
                    case B.rbe.GUILD_ANNOUNCEMENT:
                    case B.rbe.GUILD_FORUM:
                    case B.rbe.GUILD_MEDIA:
                        return (0, T.L3)(e, async () => {
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
                                n.e("63340"),
                                n.e("79995"),
                                n.e("42339"),
                                n.e("44058"),
                                n.e("13758"),
                                n.e("65200"),
                                n.e("35723"),
                                n.e("12520"),
                                n.e("66540"),
                                n.e("29542"),
                                n.e("12052"),
                                n.e("25173"),
                            ]).then(n.bind(n, 468916));
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, guild: a, onSelect: o.jD });
                        });
                    case B.rbe.GUILD_VOICE:
                    case B.rbe.GUILD_STAGE_VOICE:
                        return (0, T.L3)(e, async () => {
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
                                n.e("63340"),
                                n.e("79995"),
                                n.e("42339"),
                                n.e("44058"),
                                n.e("13758"),
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
                    case B.rbe.ANNOUNCEMENT_THREAD:
                    case B.rbe.PUBLIC_THREAD:
                    case B.rbe.PRIVATE_THREAD:
                        return (0, T.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("26132"),
                                n.e("91763"),
                                n.e("38730"),
                                n.e("34971"),
                                n.e("3998"),
                                n.e("43266"),
                                n.e("91671"),
                                n.e("12255"),
                                n.e("63340"),
                                n.e("96804"),
                                n.e("65200"),
                                n.e("85802"),
                                n.e("3869"),
                                n.e("51212"),
                                n.e("84615"),
                            ]).then(n.bind(n, 612826));
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, onSelect: o.jD });
                        });
                    case B.rbe.GUILD_STORE:
                        return (0, T.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("26132"),
                                n.e("3998"),
                                n.e("9004"),
                                n.e("30997"),
                                n.e("12255"),
                                n.e("63340"),
                                n.e("79995"),
                                n.e("44058"),
                                n.e("15669"),
                            ]).then(n.bind(n, 313140));
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, guild: a, onSelect: o.jD });
                        });
                    case B.rbe.GUILD_DIRECTORY:
                        return (0, T.L3)(e, async () => {
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
            case S.rD.GROUP_DM:
                return (0, T.L3)(e, async () => {
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
                            selected: b.A.getChannelId() === t.record.id,
                            onSelect: o.jD,
                        });
                });
            case S.rD.USER:
                return (0, T.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("10570"),
                        n.e("98273"),
                        n.e("26132"),
                        n.e("46652"),
                        n.e("93190"),
                        n.e("34552"),
                        n.e("8757"),
                        n.e("85968"),
                        n.e("89673"),
                        n.e("68403"),
                        n.e("52168"),
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
                a = (0, S.Vv)(S.vB.UP, a, i);
                break;
            case "arrowdown":
                a = (0, S.Vv)(S.vB.DOWN, a, i);
                break;
            case "n":
                if (!e.ctrlKey) return;
                a = (0, S.Vv)(S.vB.DOWN, a, i);
                break;
            case "p":
                if (!e.ctrlKey) return;
                a = (0, S.Vv)(S.vB.UP, a, i);
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
                (0, i.jsx)(P.EG, { event: B.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, i.jsx)(f.vN, {
                    children: (0, i.jsx)("input", {
                        className: K.hF,
                        "aria-label": H.intl.string(H.t.ZvKwYa),
                        ref: this.inputRef,
                        type: "text",
                        role: "combobox",
                        "aria-controls": this._listId,
                        "aria-expanded": r,
                        "aria-activedescendant": r ? this.getRowId(e) : void 0,
                        "aria-autocomplete": "list",
                        placeholder: H.intl.string(H.t.VtvewW),
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
                ? (0, i.jsx)($, {})
                : 0 === t.length
                  ? null
                  : (0, i.jsx)(p.Ei, {
                        innerId: this._listId,
                        innerRole: "listbox",
                        "aria-label": H.intl.string(H.t.Wef5Do),
                        ref: this.scrollerRef,
                        sectionHeight: 0,
                        rowHeight: 34,
                        paddingBottom: 10,
                        sections: [t.length],
                        className: K.XG,
                        renderRow: this.renderRow,
                        renderSection: this.renderSection,
                    });
        };
        return (0, i.jsx)("div", { className: K.sN, children: e() });
    }
    focusNode(e) {
        U._.dispatch(B.jej.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return `quick-switcher-${this._listId}-item-${e}`;
    }
    renderRow = (e) => {
        let { row: t } = e,
            n = this.props.results[t],
            { selectedIndex: r } = this.props,
            { showScores: a } = N.getCurrentConfig({ location: "62f4be_1" }, { autoTrackExposure: !1 }),
            { enabled: s, alternatePosition: l } = G.s.getConfig({ location: "QuickSwitcher.renderRow" }),
            o = s && !l ? H.intl.string(H.t["5qyruI"]) : void 0,
            d =
                s && l
                    ? (0, i.jsx)(I.E, {
                          variant: "text-sm/medium",
                          color: "none",
                          className: K.MD,
                          children: H.intl.string(H.t["5qyruI"]),
                      })
                    : null,
            c = l ? void 0 : H.intl.string(H.t["9CHfCO"]),
            u = l
                ? (0, i.jsx)(I.E, {
                      variant: "text-sm/medium",
                      color: "none",
                      className: K.MD,
                      children: H.intl.string(H.t["9CHfCO"]),
                  })
                : null;
        switch (n.type) {
            case S.rD.HEADER:
                return (0, i.jsx)(x.Y9, { children: n.record.text }, `${n.type}-${n.record.id}`);
            case S.rD.TEXT_CHANNEL:
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
            case S.rD.VOICE_CHANNEL:
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
                        score: a ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case S.rD.GUILD:
                return (0, i.jsx)(
                    X,
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
            case S.rD.USER:
                return (0, i.jsx)(
                    J,
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
            case S.rD.GROUP_DM:
                return (0, i.jsx)(
                    Q,
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
            case S.rD.APPLICATION:
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
            case S.rD.GAME_PROFILE:
                return (0, i.jsx)(
                    x.IH,
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
            case S.rD.LINK:
                return (0, i.jsx)(
                    x.N_,
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
            case S.rD.IN_APP_NAVIGATION:
                return (0, i.jsx)(
                    x.vw,
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
        let { enabled: e } = G.s.getConfig({ location: "QuickSwitcher.renderProtip" }),
            t = {
                userSymbolHook: (e, t) => ee(t, S.AT.USER, H.intl.string(H.t.GQRCGn)),
                textChannelSymbolHook: (e, t) => ee(t, S.AT.TEXT_CHANNEL, H.intl.string(H.t.wrwhuZ)),
                voiceChannelSymbolHook: (e, t) => ee(t, S.AT.VOICE_CHANNEL, H.intl.string(H.t["jz+hJp"])),
                guildSymbolHook: (e, t) => ee(t, S.AT.GUILD, H.intl.string(H.t.WuwCWi)),
                helpdeskArticle: w.A.getArticleURL(B.MVz.QUICK_SWITCHER_TUTORIAL),
            };
        return (0, i.jsx)(C.A, {
            className: u()(K.PP, { [K.ov]: this.state.query.length > 0 }),
            type: C.A.Types.INLINE,
            children: e
                ? H.intl.format(H.t.BGHbLb, {
                      ...t,
                      gameProfileSymbolHook: (e, t) => ee(t, S.AT.GAME_PROFILE, H.intl.string(H.t.MfbDzS)),
                  })
                : H.intl.format(H.t.wukqXQ, t),
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, i.jsx)(Y, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, i.jsx)(_.d, {
            "aria-label": H.intl.string(H.t.ZvKwYa),
            size: "lg",
            transitionState: this.props.transitionState,
            onClose: this.props.onClose,
            children: (0, i.jsxs)("div", {
                className: K.rs,
                onMouseMove: this.handleMouseMove,
                children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()],
            }),
        });
    }
}
function en(e) {
    let t = (0, E.cf)([d.A], () => d.A.getProps());
    return (0, i.jsx)(et, { ...t, ...e });
}
let ei = "QUICK_SWITCHER_MODAL_KEY";
class er extends l.A {
    _initialize() {
        s.h.subscribe("QUICKSWITCHER_SHOW", this.handleShow), s.h.subscribe("QUICKSWITCHER_HIDE", this.handleHide);
    }
    _terminate() {
        s.h.unsubscribe("QUICKSWITCHER_SHOW", this.handleShow), s.h.unsubscribe("QUICKSWITCHER_HIDE", this.handleHide);
    }
    handleShow() {
        d.A.isOpen() &&
            !(0, a.hasModalOpen)(ei) &&
            (0, a.openModal)((e) => (0, i.jsx)(en, { ...e }), { modalKey: ei, instant: !0, onCloseCallback: o.jD });
    }
    handleHide() {
        (0, a.closeModal)(ei);
    }
}
let ea = new er();
