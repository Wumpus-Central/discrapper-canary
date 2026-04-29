n.d(t, { A: () => ei });
var i = n(627968),
    a = n(64700),
    r = n(192308),
    s = n(228366),
    l = n(272355),
    o = n(793322),
    d = n(174768),
    c = n(503698),
    _ = n.n(c),
    E = n(224640),
    u = n(17928),
    A = n(990078),
    I = n(349288),
    T = n(187322),
    h = n(475825),
    S = n(442433),
    N = n(390435),
    f = n(775121),
    p = n(115718);
let m = (0, n(600975).C)({
    kind: "user",
    id: "2021-02_staff_qc_debugging",
    label: "Display QS scores in results. Not a real experiment",
    defaultConfig: { showScores: !1 },
    treatments: [{ id: 1, label: "Show scores in QS results", config: { showScores: !0 } }],
});
var O = n(12351),
    C = n(915089),
    R = n(734057),
    g = n(458294),
    L = n(71393),
    D = n(290863),
    b = n(222823),
    M = n(309010),
    P = n(607567),
    U = n(234320),
    v = n(625494),
    y = n(975571),
    G = n(820785),
    w = n(615300),
    x = n(451988),
    V = n(844222),
    B = n(652215),
    F = n(985018),
    k = n(246729);
let H = { friction: 15, tension: 100 };
class j extends a.PureComponent {
    state = { shown: !1, translateY: new w.A.Value(0) };
    static contextType = V.C;
    rootRef = a.createRef();
    focusTimeout = new x.Ep();
    componentDidMount() {
        this.setState({ shown: !0 }), v._.subscribe(B.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentWillUnmount() {
        this.focusTimeout.stop(), v._.unsubscribe(B.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
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
        !0 !== t.enabled && w.A.spring(this.state.translateY, { toValue: Math.min(e, 250), ...H }).start();
    }
    renderArrowGroup(e) {
        return (0, i.jsxs)("div", {
            className: _()(k.XN, e),
            children: [
                (0, i.jsx)(w.A.div, {
                    className: _()(k.Hf, k.xM),
                    style: this.getStyle(),
                    children: (0, i.jsx)("img", { alt: "", src: n(824829), className: k.D6 }),
                }),
                (0, i.jsx)("div", {
                    className: _()(k.Hf, k.JM),
                    children: (0, i.jsx)("img", { alt: "", src: n(162206), className: k.D6 }),
                }),
                (0, i.jsx)("div", {
                    className: _()(k.Hf, k.QJ),
                    children: (0, i.jsx)("img", { alt: "", src: n(298607), className: k.D6 }),
                }),
            ],
        });
    }
    renderContent() {
        return (0, i.jsxs)("div", {
            className: k.fi,
            children: [
                (0, i.jsx)("div", { className: k.Iv, children: F.intl.string(F.t.Mp0IGK) }),
                (0, i.jsx)("div", { className: k.kp, children: F.intl.string(F.t["3CbpwH"]) }),
            ],
        });
    }
    render() {
        let { hasQuery: e } = this.props,
            { shown: t } = this.state;
        return (0, i.jsxs)("div", {
            ref: this.rootRef,
            className: _()(k.d$, { [k.SP]: t, [k.tG]: e }),
            children: [this.renderContent(), this.renderArrowGroup(k.__invalid_left), this.renderArrowGroup(k.pG)],
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
            (0, i.jsx)("div", { className: Y.lv, children: F.intl.string(F.t.bpbATE) }),
            (0, i.jsx)("div", {
                className: Y.PA,
                children: (0, i.jsx)(I.Anchor, {
                    href: y.A.getArticleURL(B.MVz.QUICK_SWITCHER_TUTORIAL),
                    children: F.intl.string(F.t["4iPfEO"]),
                }),
            }),
        ],
    });
class K extends a.Component {
    static defaultProps = { unread: !1 };
    render() {
        let e = L.A.getGuild(this.props.channel.guild_id);
        return (0, i.jsx)(G.c3, {
            ...this.props,
            children: (0, i.jsx)("div", { className: Y.MD, children: null != e ? e.name : null }),
        });
    }
}
let $ = u.Ay.connectStores([b.Ay, R.A], (e) => {
        let { channel: t } = e;
        return {
            unread: b.Ay.hasUnread(t.id),
            mentions: b.Ay.getMentionCount(t.id),
            isMentionLowImportance: b.Ay.getIsMentionLowImportance(t.id),
            category: R.A.getChannel(t.parent_id),
        };
    })(K),
    Z = u.Ay.connectStores([P.Ay], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id)
            throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
        return { voiceStates: P.Ay.getVoiceStates(t.guild_id)[t.id] };
    })(K),
    q = u.Ay.connectStores([g.default], (e) => {
        let { guild: t } = e;
        return { unread: g.default.hasUnread(t.id) };
    })(G.OS),
    Q = u.Ay.connectStores([b.Ay, D.A], (e) => {
        let { channel: t } = e,
            n = null,
            i = D.A.getState().statuses;
        return (
            t.recipients?.some((e) => i[e] === B.clD.ONLINE) && (n = B.clD.ONLINE),
            { mentions: b.Ay.getMentionCount(t.id), status: n }
        );
    })(G.nG),
    z = u.Ay.connectStores([R.A, b.Ay, D.A], (e) => {
        let { user: t } = e,
            n = R.A.getDMFromUserId(t.id);
        return {
            mentions: null != n ? b.Ay.getMentionCount(n) : 0,
            status: D.A.getStatus(t.id),
            isMobile: D.A.isMobileOnline(t.id),
        };
    })(G.KJ);
function X(e, t, n) {
    return (0, i.jsx)(
        A.m,
        { __unsupportedReactNodeAsText: n, children: (0, i.jsx)("span", { className: Y.ZT, children: t }) },
        e,
    );
}
class J extends a.PureComponent {
    scrollerRef = a.createRef();
    inputRef = a.createRef();
    _listId = (0, C.Ld)();
    state = { query: this.props.query, mouseFocusDisabled: !0 };
    componentDidMount() {
        f.A.disable(), f.A.enableTemp(N.w);
    }
    componentWillUnmount() {
        f.A.disableTemp(), f.A.enable();
    }
    componentDidUpdate(e, t) {
        let { mouseFocusDisabled: n, query: i } = this.state,
            { selectedIndex: a } = this.props,
            { current: r } = this.scrollerRef;
        null != r &&
            (i !== t.query
                ? r.scrollTo({ to: 0 })
                : n && a >= 0 && r.scrollToIndex({ section: 0, row: a, padding: 10 }));
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
        (0, o.F6)(e, this.props.queryMode === p.rD.TEXT_CHANNEL);
    };
    handleContextMenu = (e) => {
        let t = this.props.results[this.props.selectedIndex];
        switch (t.type) {
            case p.rD.GUILD:
                return (0, S.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("50992"),
                        n.e("48071"),
                        n.e("28149"),
                        n.e("90261"),
                        n.e("80848"),
                        n.e("80731"),
                        n.e("76348"),
                        n.e("98944"),
                        n.e("42105"),
                        n.e("62349"),
                        n.e("78220"),
                        n.e("40841"),
                        n.e("13520"),
                        n.e("99961"),
                        n.e("76831"),
                        n.e("69273"),
                        n.e("77083"),
                        n.e("63009"),
                        n.e("16933"),
                        n.e("45650"),
                        n.e("97189"),
                        n.e("62296"),
                        n.e("17546"),
                        n.e("333"),
                        n.e("68432"),
                        n.e("79705"),
                        n.e("55658"),
                        n.e("76032"),
                        n.e("48006"),
                        n.e("87080"),
                        n.e("64150"),
                        n.e("73607"),
                        n.e("63635"),
                        n.e("12721"),
                        n.e("54068"),
                        n.e("25653"),
                        n.e("21341"),
                        n.e("93329"),
                        n.e("87845"),
                        n.e("45317"),
                        n.e("98042"),
                        n.e("49089"),
                        n.e("61175"),
                        n.e("45229"),
                        n.e("56574"),
                        n.e("4974"),
                        n.e("61456"),
                        n.e("52523"),
                        n.e("80186"),
                        n.e("23924"),
                        n.e("15510"),
                        n.e("25845"),
                        n.e("19402"),
                        n.e("49681"),
                        n.e("96382"),
                        n.e("22687"),
                        n.e("62052"),
                        n.e("63202"),
                        n.e("82596"),
                        n.e("20287"),
                        n.e("28367"),
                        n.e("35429"),
                        n.e("10471"),
                        n.e("63232"),
                        n.e("64827"),
                        n.e("23808"),
                        n.e("11301"),
                        n.e("60235"),
                        n.e("61737"),
                        n.e("79428"),
                        n.e("29963"),
                        n.e("47834"),
                        n.e("30938"),
                        n.e("20317"),
                        n.e("84569"),
                        n.e("2368"),
                        n.e("24313"),
                        n.e("74016"),
                        n.e("48405"),
                        n.e("63185"),
                        n.e("19551"),
                        n.e("45959"),
                        n.e("18573"),
                        n.e("39667"),
                        n.e("37794"),
                        n.e("26073"),
                        n.e("7743"),
                        n.e("34303"),
                        n.e("48172"),
                        n.e("28866"),
                        n.e("8304"),
                        n.e("58038"),
                        n.e("93159"),
                        n.e("55936"),
                        n.e("11566"),
                        n.e("21106"),
                        n.e("31988"),
                        n.e("94723"),
                        n.e("62931"),
                        n.e("81987"),
                        n.e("53092"),
                        n.e("58007"),
                        n.e("5812"),
                        n.e("17363"),
                        n.e("55411"),
                        n.e("93103"),
                        n.e("76602"),
                        n.e("91763"),
                        n.e("28229"),
                        n.e("76418"),
                        n.e("21921"),
                        n.e("91007"),
                        n.e("9233"),
                        n.e("69747"),
                        n.e("40258"),
                        n.e("66495"),
                        n.e("91146"),
                        n.e("88342"),
                        n.e("42724"),
                        n.e("43437"),
                        n.e("39970"),
                        n.e("82263"),
                        n.e("8555"),
                        n.e("86127"),
                        n.e("6174"),
                        n.e("39851"),
                        n.e("42451"),
                        n.e("72789"),
                        n.e("6949"),
                        n.e("29871"),
                        n.e("17249"),
                        n.e("35027"),
                        n.e("53917"),
                        n.e("9640"),
                        n.e("62422"),
                        n.e("15423"),
                        n.e("26295"),
                        n.e("88599"),
                        n.e("36863"),
                        n.e("67861"),
                        n.e("1518"),
                        n.e("15186"),
                        n.e("98765"),
                        n.e("23354"),
                        n.e("89088"),
                        n.e("82644"),
                        n.e("37187"),
                        n.e("3589"),
                        n.e("71273"),
                        n.e("10957"),
                        n.e("55973"),
                        n.e("20590"),
                        n.e("45172"),
                        n.e("65437"),
                        n.e("34983"),
                        n.e("63235"),
                        n.e("74810"),
                        n.e("28083"),
                        n.e("80830"),
                        n.e("86814"),
                        n.e("52548"),
                        n.e("75842"),
                        n.e("53984"),
                        n.e("80854"),
                        n.e("79780"),
                        n.e("35395"),
                        n.e("43780"),
                        n.e("14041"),
                        n.e("46844"),
                        n.e("45413"),
                        n.e("22822"),
                        n.e("86672"),
                        n.e("90664"),
                        n.e("79745"),
                        n.e("64850"),
                        n.e("72401"),
                        n.e("22855"),
                        n.e("70104"),
                        n.e("52617"),
                        n.e("2564"),
                        n.e("47417"),
                        n.e("19558"),
                        n.e("58946"),
                        n.e("14285"),
                        n.e("95752"),
                        n.e("78100"),
                        n.e("78453"),
                        n.e("8362"),
                        n.e("2698"),
                        n.e("62875"),
                        n.e("4744"),
                        n.e("34654"),
                        n.e("12542"),
                        n.e("501"),
                        n.e("46769"),
                        n.e("33297"),
                        n.e("73384"),
                        n.e("82783"),
                        n.e("86243"),
                        n.e("32209"),
                        n.e("30788"),
                        n.e("4193"),
                        n.e("39171"),
                        n.e("25246"),
                        n.e("37021"),
                        n.e("21049"),
                        n.e("8377"),
                        n.e("28610"),
                        n.e("44571"),
                        n.e("44795"),
                        n.e("71268"),
                        n.e("95370"),
                        n.e("97784"),
                        n.e("44928"),
                        n.e("3217"),
                        n.e("5557"),
                        n.e("44780"),
                        n.e("83952"),
                        n.e("95340"),
                        n.e("62718"),
                        n.e("89916"),
                        n.e("59957"),
                        n.e("90301"),
                        n.e("49145"),
                        n.e("60773"),
                        n.e("68763"),
                        n.e("15188"),
                        n.e("9004"),
                        n.e("15109"),
                        n.e("29666"),
                        n.e("58273"),
                        n.e("8018"),
                        n.e("92295"),
                        n.e("19454"),
                        n.e("20930"),
                        n.e("26001"),
                        n.e("99549"),
                        n.e("14591"),
                        n.e("52111"),
                        n.e("74610"),
                        n.e("16988"),
                        n.e("30997"),
                        n.e("28136"),
                        n.e("57458"),
                        n.e("59797"),
                        n.e("69765"),
                        n.e("1243"),
                        n.e("62304"),
                        n.e("16084"),
                        n.e("75859"),
                        n.e("44057"),
                        n.e("87317"),
                        n.e("43116"),
                        n.e("27659"),
                        n.e("10943"),
                        n.e("15920"),
                        n.e("68530"),
                        n.e("3930"),
                        n.e("78046"),
                        n.e("3663"),
                        n.e("66580"),
                        n.e("80093"),
                        n.e("38601"),
                        n.e("73669"),
                        n.e("7775"),
                        n.e("22547"),
                        n.e("60989"),
                        n.e("82486"),
                        n.e("3710"),
                        n.e("45830"),
                        n.e("61058"),
                        n.e("50342"),
                        n.e("33097"),
                        n.e("5896"),
                        n.e("77602"),
                        n.e("10262"),
                        n.e("95602"),
                        n.e("46313"),
                        n.e("29569"),
                        n.e("36002"),
                        n.e("43233"),
                        n.e("41786"),
                        n.e("91643"),
                        n.e("63726"),
                        n.e("71329"),
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
                        n.e("19690"),
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
                        n.e("93767"),
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
                        n.e("34409"),
                        n.e("61309"),
                        n.e("94529"),
                        n.e("30313"),
                        n.e("98371"),
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
                    return (n) => (0, i.jsx)(e, { ...n, guild: t.record, onSelect: o.jD, hideSettings: !0 });
                });
            case p.rD.TEXT_CHANNEL:
            case p.rD.VOICE_CHANNEL:
                let a = t.record,
                    r = L.A.getGuild(a.getGuildId());
                if (null == r) return;
                switch (a.type) {
                    case B.rbe.GUILD_TEXT:
                    case B.rbe.GUILD_ANNOUNCEMENT:
                    case B.rbe.GUILD_FORUM:
                    case B.rbe.GUILD_MEDIA:
                        return (0, S.L3)(e, async () => {
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
                            return (t) => (0, i.jsx)(e, { ...t, channel: a, guild: r, onSelect: o.jD });
                        });
                    case B.rbe.GUILD_VOICE:
                    case B.rbe.GUILD_STAGE_VOICE:
                        return (0, S.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("26132"),
                                n.e("46652"),
                                n.e("93190"),
                                n.e("55411"),
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
                            return (t) => (0, i.jsx)(e, { ...t, channel: a, guild: r, onSelect: o.jD });
                        });
                    case B.rbe.ANNOUNCEMENT_THREAD:
                    case B.rbe.PUBLIC_THREAD:
                    case B.rbe.PRIVATE_THREAD:
                        return (0, S.L3)(e, async () => {
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
                            return (t) => (0, i.jsx)(e, { ...t, channel: a, onSelect: o.jD });
                        });
                    case B.rbe.GUILD_STORE:
                        return (0, S.L3)(e, async () => {
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
                            return (t) => (0, i.jsx)(e, { ...t, channel: a, guild: r, onSelect: o.jD });
                        });
                    case B.rbe.GUILD_DIRECTORY:
                        return (0, S.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("26132"),
                                n.e("30997"),
                                n.e("79995"),
                                n.e("29559"),
                            ]).then(n.bind(n, 994058));
                            return (t) => (0, i.jsx)(e, { ...t, channel: a });
                        });
                }
                break;
            case p.rD.GROUP_DM:
                return (0, S.L3)(e, async () => {
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
                            selected: M.A.getChannelId() === t.record.id,
                            onSelect: o.jD,
                        });
                });
            case p.rD.USER:
                return (0, S.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("98944"),
                        n.e("17546"),
                        n.e("26132"),
                        n.e("46652"),
                        n.e("93190"),
                        n.e("34552"),
                        n.e("8757"),
                        n.e("89673"),
                        n.e("68403"),
                        n.e("85968"),
                        n.e("60195"),
                        n.e("29787"),
                        n.e("97558"),
                        n.e("94000"),
                        n.e("91994"),
                        n.e("76665"),
                        n.e("76273"),
                        n.e("24198"),
                        n.e("86169"),
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
        let a = e.key.toLowerCase(),
            { selectedIndex: r } = this.props;
        switch (a) {
            case "escape":
                e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search("") : (0, o.jD)();
                return;
            case "k":
            case "t":
                (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, o.jD)());
                return;
            case "enter": {
                if (-1 === r) return;
                if ((e.preventDefault(), e.altKey)) return this.handleContextMenu(e);
                let t = i[r];
                null != t && this.selectResult(t);
                return;
            }
            case "arrowup":
                r = (0, p.Vv)(p.vB.UP, r, i);
                break;
            case "arrowdown":
                r = (0, p.Vv)(p.vB.DOWN, r, i);
                break;
            case "n":
                if (!e.ctrlKey) return;
                r = (0, p.Vv)(p.vB.DOWN, r, i);
                break;
            case "p":
                if (!e.ctrlKey) return;
                r = (0, p.Vv)(p.vB.UP, r, i);
                break;
            default:
                return;
        }
        e.preventDefault(), (0, o.wf)(r);
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
            a = t.length > 0 && "" !== n;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(U.EG, { event: B.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, i.jsx)(T.vN, {
                    children: (0, i.jsx)("input", {
                        className: Y.hF,
                        "aria-label": F.intl.string(F.t.ZvKwYa),
                        ref: this.inputRef,
                        type: "text",
                        role: "combobox",
                        "aria-controls": this._listId,
                        "aria-expanded": a,
                        "aria-activedescendant": a ? this.getRowId(e) : void 0,
                        "aria-autocomplete": "list",
                        placeholder: F.intl.string(F.t.VtvewW),
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
                  : (0, i.jsx)(h.Ei, {
                        innerId: this._listId,
                        innerRole: "listbox",
                        "aria-label": F.intl.string(F.t.Wef5Do),
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
        v._.dispatch(B.jej.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return `quick-switcher-${this._listId}-item-${e}`;
    }
    renderRow = (e) => {
        let { row: t } = e,
            n = this.props.results[t],
            { selectedIndex: a } = this.props,
            { showScores: r } = m.getCurrentConfig({ location: "62f4be_1" }, { autoTrackExposure: !1 });
        switch (n.type) {
            case p.rD.HEADER:
                return (0, i.jsx)(G.Y9, { children: n.record.text }, `${n.type}-${n.record.id}`);
            case p.rD.TEXT_CHANNEL:
                return (0, i.jsx)(
                    $,
                    {
                        id: this.getRowId(t),
                        focused: a >= 0 && t === a,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        channel: n.record,
                        score: r ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case p.rD.VOICE_CHANNEL:
                return (0, i.jsx)(
                    Z,
                    {
                        id: this.getRowId(t),
                        focused: a >= 0 && t === a,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        channel: n.record,
                        score: r ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case p.rD.GUILD:
                return (0, i.jsx)(
                    q,
                    {
                        id: this.getRowId(t),
                        focused: a >= 0 && t === a,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        guild: n.record,
                        score: r ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case p.rD.USER:
                return (0, i.jsx)(
                    z,
                    {
                        id: this.getRowId(t),
                        focused: a >= 0 && t === a,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        user: n.record,
                        comparator: n.comparator,
                        score: r ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case p.rD.GROUP_DM:
                return (0, i.jsx)(
                    Q,
                    {
                        id: this.getRowId(t),
                        focused: a >= 0 && t === a,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        channel: n.record,
                        score: r ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case p.rD.APPLICATION:
                return (0, i.jsx)(
                    G.lg,
                    {
                        id: this.getRowId(t),
                        focused: a >= 0 && t === a,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        application: n.record,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case p.rD.LINK:
                return (0, i.jsx)(
                    G.N_,
                    {
                        focused: a >= 0 && t === a,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        link: n.record,
                        score: r ? n.score : void 0,
                        id: this.getRowId(t),
                    },
                    `${n.type}-${n.record.id}`,
                );
            case p.rD.IN_APP_NAVIGATION:
                return (0, i.jsx)(
                    G.vw,
                    {
                        focused: a >= 0 && t === a,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        navigationRecord: n.record,
                        score: r ? n.score : void 0,
                        id: this.getRowId(t),
                    },
                    `${n.type}-${n.record.id}`,
                );
            default:
                return null;
        }
    };
    renderProtip() {
        return (0, i.jsx)(O.A, {
            className: _()(Y.PP, { [Y.ov]: this.state.query.length > 0 }),
            type: O.A.Types.INLINE,
            children: F.intl.format(F.t.wukqXQ, {
                userSymbolHook: (e, t) => X(t, p.AT.USER, F.intl.string(F.t.GQRCGn)),
                textChannelSymbolHook: (e, t) => X(t, p.AT.TEXT_CHANNEL, F.intl.string(F.t.wrwhuZ)),
                voiceChannelSymbolHook: (e, t) => X(t, p.AT.VOICE_CHANNEL, F.intl.string(F.t["jz+hJp"])),
                guildSymbolHook: (e, t) => X(t, p.AT.GUILD, F.intl.string(F.t.WuwCWi)),
                helpdeskArticle: y.A.getArticleURL(B.MVz.QUICK_SWITCHER_TUTORIAL),
            }),
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, i.jsx)(j, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, i.jsx)(E.d, {
            "aria-label": F.intl.string(F.t.ZvKwYa),
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
    let t = (0, u.cf)([d.A], () => d.A.getProps());
    return (0, i.jsx)(J, { ...t, ...e });
}
let et = "QUICK_SWITCHER_MODAL_KEY";
class en extends l.A {
    _initialize() {
        s.h.subscribe("QUICKSWITCHER_SHOW", this.handleShow), s.h.subscribe("QUICKSWITCHER_HIDE", this.handleHide);
    }
    _terminate() {
        s.h.unsubscribe("QUICKSWITCHER_SHOW", this.handleShow), s.h.unsubscribe("QUICKSWITCHER_HIDE", this.handleHide);
    }
    handleShow() {
        d.A.isOpen() &&
            !(0, r.hasModalOpen)(et) &&
            (0, r.openModal)((e) => (0, i.jsx)(ee, { ...e }), { modalKey: et, instant: !0, onCloseCallback: o.jD });
    }
    handleHide() {
        (0, r.closeModal)(et);
    }
}
let ei = new en();
