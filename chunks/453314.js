n.d(t, { A: () => es });
var i = n(477900),
    r = n(582128),
    a = n(192308),
    s = n(228366),
    l = n(272355),
    o = n(793322),
    d = n(174768),
    c = n(503698),
    u = n.n(c),
    _ = n(17928),
    E = n(28863),
    A = n(834730),
    h = n(866665),
    I = n(559106),
    f = n(475825),
    p = n(224640),
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
    O = n(915089),
    R = n(719067),
    L = n(442325),
    y = n(734057),
    D = n(458294),
    v = n(71393),
    b = n(290863),
    M = n(573163),
    P = n(309010),
    U = n(607567),
    w = n(234320),
    G = n(625494),
    x = n(975571),
    k = n(484734),
    F = n(615300),
    B = n(451988),
    V = n(844222),
    H = n(652215),
    j = n(375708),
    W = n(188854);
let Y = { friction: 15, tension: 100 };
class K extends r.PureComponent {
    state = { shown: !1, translateY: new F.A.Value(0) };
    static contextType = V.C;
    rootRef = r.createRef();
    focusTimeout = new B.Ep();
    componentDidMount() {
        (this.setState({ shown: !0 }), G._.subscribe(H.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus));
    }
    componentWillUnmount() {
        (this.focusTimeout.stop(), G._.unsubscribe(H.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus));
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
        !0 !== t.enabled && F.A.spring(this.state.translateY, { toValue: Math.min(e, 250), ...Y }).start();
    }
    renderArrowGroup(e) {
        return (0, i.jsxs)("div", {
            className: u()(W.XN, e),
            children: [
                (0, i.jsx)(F.A.div, {
                    className: u()(W.Hf, W.xM),
                    style: this.getStyle(),
                    children: (0, i.jsx)("img", { alt: "", src: n(824829), className: W.D6 }),
                }),
                (0, i.jsx)("div", {
                    className: u()(W.Hf, W.JM),
                    children: (0, i.jsx)("img", { alt: "", src: n(162206), className: W.D6 }),
                }),
                (0, i.jsx)("div", {
                    className: u()(W.Hf, W.QJ),
                    children: (0, i.jsx)("img", { alt: "", src: n(298607), className: W.D6 }),
                }),
            ],
        });
    }
    renderContent() {
        return (0, i.jsxs)("div", {
            className: W.fi,
            children: [
                (0, i.jsx)("div", { className: W.Iv, children: j.intl.string(j.t.Mp0IGK) }),
                (0, i.jsx)("div", { className: W.kp, children: j.intl.string(j.t["3CbpwH"]) }),
            ],
        });
    }
    render() {
        let { hasQuery: e } = this.props,
            { shown: t } = this.state;
        return (0, i.jsxs)("div", {
            ref: this.rootRef,
            className: u()(W.d$, { [W.SP]: t, [W.tG]: e }),
            children: [this.renderContent(), this.renderArrowGroup(W.__invalid_left), this.renderArrowGroup(W.pG)],
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
var $ = n(678436);
function z() {
    return (0, i.jsxs)("div", {
        className: $.p$,
        children: [
            (0, i.jsx)("div", { className: $.lv, children: j.intl.string(j.t.bpbATE) }),
            (0, i.jsx)("div", {
                className: $.PA,
                children: (0, i.jsx)(E.Anchor, {
                    href: x.A.getArticleURL(H.MVz.QUICK_SWITCHER_TUTORIAL),
                    children: j.intl.string(j.t["4iPfEO"]),
                }),
            }),
        ],
    });
}
class X extends r.Component {
    static defaultProps = { unread: !1 };
    render() {
        let e = v.A.getGuild(this.props.channel.guild_id);
        return (0, i.jsx)(k.c3, {
            ...this.props,
            children: (0, i.jsx)(A.E, {
                variant: "text-sm/medium",
                color: "none",
                className: $.MD,
                children: null != e ? e.name : null,
            }),
        });
    }
}
let q = _.Ay.connectStores([M.Ay, y.A], (e) => {
        let { channel: t } = e;
        return {
            unread: M.Ay.hasUnread(t.id),
            mentions: M.Ay.getMentionCount(t.id),
            isMentionLowImportance: M.Ay.getIsMentionLowImportance(t.id),
            category: y.A.getChannel(t.parent_id),
        };
    })(X),
    Z = _.Ay.connectStores([U.Ay], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id)
            throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
        return { voiceStates: U.Ay.getVoiceStates(t.guild_id)[t.id] };
    })(X),
    Q = _.Ay.connectStores([D.default], (e) => {
        let { guild: t } = e;
        return { unread: D.default.hasUnread(t.id) };
    })(k.OS),
    J = _.Ay.connectStores([M.Ay, b.A], (e) => {
        let { channel: t } = e,
            n = null,
            i = b.A.getState().statuses;
        return (
            t.recipients?.some((e) => i[e] === H.clD.ONLINE) && (n = H.clD.ONLINE),
            { mentions: M.Ay.getMentionCount(t.id), status: n }
        );
    })(k.nG),
    ee = _.Ay.connectStores([y.A, M.Ay, b.A], (e) => {
        let { user: t } = e,
            n = y.A.getDMFromUserId(t.id);
        return {
            mentions: null != n ? M.Ay.getMentionCount(n) : 0,
            status: b.A.getStatus(t.id),
            isMobile: b.A.isMobileOnline(t.id),
        };
    })(k.KJ);
function et(e, t, n) {
    return (0, i.jsx)(
        h.m,
        { __unsupportedReactNodeAsText: n, children: (0, i.jsx)("span", { className: $.ZT, children: t }) },
        e,
    );
}
class en extends r.PureComponent {
    scrollerRef = r.createRef();
    inputRef = r.createRef();
    _listId = (0, O.Ld)();
    state = { query: this.props.query, mouseFocusDisabled: !0 };
    componentDidMount() {
        (g.A.disable(), g.A.enableTemp(m.w));
    }
    componentWillUnmount() {
        (g.A.disableTemp(), g.A.enable());
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
        (this.setState({ query: e }), (0, o.$P)(e));
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
                        n.e("203112"),
                        n.e("876364"),
                        n.e("925807"),
                        n.e("996907"),
                        n.e("816027"),
                        n.e("562772"),
                        n.e("8159"),
                        n.e("207322"),
                        n.e("361922"),
                        n.e("179028"),
                        n.e("403032"),
                        n.e("684290"),
                        n.e("295570"),
                        n.e("301850"),
                        n.e("936875"),
                        n.e("862179"),
                        n.e("722784"),
                        n.e("326794"),
                        n.e("906470"),
                        n.e("860350"),
                        n.e("774550"),
                        n.e("923981"),
                        n.e("618416"),
                        n.e("366313"),
                        n.e("262564"),
                        n.e("71866"),
                        n.e("891473"),
                        n.e("679157"),
                        n.e("1955"),
                        n.e("341161"),
                        n.e("401696"),
                        n.e("202985"),
                        n.e("455021"),
                        n.e("812196"),
                        n.e("661630"),
                        n.e("470126"),
                        n.e("162775"),
                        n.e("128804"),
                        n.e("60882"),
                        n.e("71151"),
                        n.e("227853"),
                        n.e("286615"),
                        n.e("70866"),
                        n.e("311541"),
                        n.e("472847"),
                        n.e("986735"),
                        n.e("586662"),
                        n.e("758053"),
                        n.e("247471"),
                        n.e("889002"),
                        n.e("709976"),
                        n.e("750955"),
                        n.e("953343"),
                        n.e("405763"),
                        n.e("686731"),
                        n.e("807432"),
                        n.e("873532"),
                        n.e("279774"),
                        n.e("307158"),
                        n.e("410470"),
                        n.e("765208"),
                        n.e("711562"),
                        n.e("661157"),
                        n.e("419121"),
                        n.e("489020"),
                        n.e("919789"),
                        n.e("669130"),
                        n.e("802890"),
                        n.e("82937"),
                        n.e("987221"),
                        n.e("157064"),
                        n.e("156957"),
                        n.e("918786"),
                        n.e("701335"),
                        n.e("257935"),
                        n.e("724086"),
                        n.e("358937"),
                        n.e("448738"),
                        n.e("548938"),
                        n.e("258407"),
                        n.e("894292"),
                        n.e("153302"),
                        n.e("836576"),
                        n.e("661779"),
                        n.e("750370"),
                        n.e("686809"),
                        n.e("636909"),
                        n.e("466592"),
                        n.e("73946"),
                        n.e("282050"),
                        n.e("436101"),
                        n.e("976888"),
                        n.e("387970"),
                        n.e("847445"),
                        n.e("919659"),
                        n.e("698136"),
                        n.e("718368"),
                        n.e("983513"),
                        n.e("76928"),
                        n.e("355502"),
                        n.e("528311"),
                        n.e("38012"),
                        n.e("411938"),
                        n.e("653383"),
                        n.e("696490"),
                        n.e("31159"),
                        n.e("952068"),
                        n.e("768289"),
                        n.e("772565"),
                        n.e("533781"),
                        n.e("737853"),
                        n.e("225307"),
                        n.e("332165"),
                        n.e("524434"),
                        n.e("854326"),
                        n.e("984"),
                        n.e("226229"),
                        n.e("981833"),
                        n.e("614929"),
                        n.e("570473"),
                        n.e("516497"),
                        n.e("24774"),
                        n.e("489565"),
                        n.e("684231"),
                        n.e("570690"),
                        n.e("886631"),
                        n.e("74336"),
                        n.e("978898"),
                        n.e("406322"),
                        n.e("942571"),
                        n.e("464759"),
                        n.e("763343"),
                        n.e("194704"),
                        n.e("403643"),
                        n.e("166741"),
                        n.e("270076"),
                        n.e("703728"),
                        n.e("519435"),
                        n.e("10985"),
                        n.e("171206"),
                        n.e("102075"),
                        n.e("828178"),
                        n.e("45036"),
                        n.e("480889"),
                        n.e("434683"),
                        n.e("920955"),
                        n.e("505928"),
                        n.e("752657"),
                        n.e("747973"),
                        n.e("314001"),
                        n.e("885251"),
                        n.e("914175"),
                        n.e("529366"),
                        n.e("990185"),
                        n.e("444038"),
                        n.e("849162"),
                        n.e("660201"),
                        n.e("323589"),
                        n.e("179301"),
                        n.e("918347"),
                        n.e("358574"),
                        n.e("689521"),
                        n.e("398791"),
                        n.e("10886"),
                        n.e("196689"),
                        n.e("343298"),
                        n.e("592268"),
                        n.e("852197"),
                        n.e("553627"),
                        n.e("59599"),
                        n.e("46238"),
                        n.e("736919"),
                        n.e("440636"),
                        n.e("568960"),
                        n.e("459257"),
                        n.e("790484"),
                        n.e("765073"),
                        n.e("631323"),
                        n.e("464452"),
                        n.e("381673"),
                        n.e("714144"),
                        n.e("458855"),
                        n.e("305161"),
                        n.e("845486"),
                        n.e("401425"),
                        n.e("120561"),
                        n.e("880186"),
                        n.e("58353"),
                        n.e("17256"),
                        n.e("903758"),
                        n.e("76283"),
                        n.e("792513"),
                        n.e("292699"),
                        n.e("377016"),
                        n.e("385504"),
                        n.e("269714"),
                        n.e("331696"),
                        n.e("249918"),
                        n.e("456506"),
                        n.e("806391"),
                        n.e("803511"),
                        n.e("202342"),
                        n.e("424216"),
                        n.e("840100"),
                        n.e("22865"),
                        n.e("173896"),
                        n.e("57358"),
                        n.e("866539"),
                        n.e("722765"),
                        n.e("172413"),
                        n.e("145006"),
                        n.e("33909"),
                        n.e("249169"),
                        n.e("754596"),
                        n.e("357625"),
                        n.e("308093"),
                        n.e("401106"),
                        n.e("498589"),
                        n.e("21486"),
                        n.e("304419"),
                        n.e("622936"),
                        n.e("45268"),
                        n.e("617281"),
                        n.e("733199"),
                        n.e("259465"),
                        n.e("655327"),
                        n.e("335532"),
                        n.e("56955"),
                        n.e("463455"),
                        n.e("403655"),
                        n.e("317615"),
                        n.e("577154"),
                        n.e("877730"),
                        n.e("611899"),
                        n.e("527552"),
                        n.e("769266"),
                        n.e("487873"),
                        n.e("765626"),
                        n.e("683302"),
                        n.e("660608"),
                        n.e("744554"),
                        n.e("541137"),
                        n.e("331212"),
                        n.e("638259"),
                        n.e("635958"),
                        n.e("207998"),
                        n.e("683621"),
                        n.e("711162"),
                        n.e("275179"),
                        n.e("289789"),
                        n.e("116125"),
                        n.e("977412"),
                        n.e("19385"),
                        n.e("692811"),
                        n.e("348567"),
                        n.e("452075"),
                        n.e("900277"),
                        n.e("499485"),
                        n.e("905581"),
                        n.e("249681"),
                        n.e("869047"),
                        n.e("996382"),
                        n.e("62052"),
                        n.e("771657"),
                        n.e("122218"),
                        n.e("76428"),
                        n.e("77473"),
                        n.e("863232"),
                        n.e("364827"),
                        n.e("25279"),
                        n.e("907167"),
                        n.e("517888"),
                        n.e("784569"),
                        n.e("811133"),
                        n.e("861060"),
                        n.e("959880"),
                        n.e("174016"),
                        n.e("910471"),
                        n.e("11301"),
                        n.e("952372"),
                        n.e("262156"),
                        n.e("960235"),
                        n.e("425412"),
                        n.e("77333"),
                        n.e("910486"),
                        n.e("56366"),
                        n.e("147662"),
                        n.e("265607"),
                        n.e("331988"),
                        n.e("544571"),
                        n.e("40291"),
                        n.e("402368"),
                        n.e("733115"),
                        n.e("397270"),
                        n.e("834552"),
                        n.e("190779"),
                        n.e("373122"),
                        n.e("217951"),
                        n.e("221856"),
                        n.e("293159"),
                        n.e("186212"),
                        n.e("755936"),
                        n.e("172503"),
                        n.e("760586"),
                        n.e("833703"),
                        n.e("55252"),
                        n.e("362931"),
                        n.e("745959"),
                        n.e("858529"),
                        n.e("793716"),
                        n.e("481987"),
                        n.e("595653"),
                        n.e("958038"),
                        n.e("171202"),
                        n.e("346802"),
                        n.e("576909"),
                        n.e("406174"),
                        n.e("715555"),
                        n.e("708757"),
                        n.e("993103"),
                        n.e("585968"),
                        n.e("481647"),
                        n.e("393336"),
                        n.e("776273"),
                        n.e("776602"),
                        n.e("140402"),
                        n.e("407170"),
                        n.e("811310"),
                        n.e("21921"),
                        n.e("572963"),
                        n.e("307575"),
                        n.e("391763"),
                        n.e("554241"),
                        n.e("724303"),
                        n.e("521930"),
                        n.e("942724"),
                        n.e("913823"),
                        n.e("393766"),
                        n.e("53102"),
                        n.e("187110"),
                        n.e("897073"),
                        n.e("139970"),
                        n.e("676418"),
                        n.e("875842"),
                        n.e("940258"),
                        n.e("675706"),
                        n.e("401518"),
                        n.e("198329"),
                        n.e("571210"),
                        n.e("858164"),
                        n.e("292583"),
                        n.e("302969"),
                        n.e("586127"),
                        n.e("427032"),
                        n.e("854461"),
                        n.e("173764"),
                        n.e("166495"),
                        n.e("9205"),
                        n.e("25949"),
                        n.e("308555"),
                        n.e("146070"),
                        n.e("88599"),
                        n.e("836863"),
                        n.e("854622"),
                        n.e("95340"),
                        n.e("807936"),
                        n.e("88342"),
                        n.e("344502"),
                        n.e("617249"),
                        n.e("171273"),
                        n.e("437065"),
                        n.e("179049"),
                        n.e("709640"),
                        n.e("362422"),
                        n.e("590365"),
                        n.e("989088"),
                        n.e("952548"),
                        n.e("470068"),
                        n.e("817989"),
                        n.e("311802"),
                        n.e("931319"),
                        n.e("37977"),
                        n.e("720590"),
                        n.e("691671"),
                        n.e("23055"),
                        n.e("147626"),
                        n.e("613867"),
                        n.e("979483"),
                        n.e("164776"),
                        n.e("553984"),
                        n.e("943780"),
                        n.e("203589"),
                        n.e("884601"),
                        n.e("782969"),
                        n.e("817905"),
                        n.e("294857"),
                        n.e("480830"),
                        n.e("179745"),
                        n.e("96680"),
                        n.e("375767"),
                        n.e("280854"),
                        n.e("335395"),
                        n.e("981004"),
                        n.e("428967"),
                        n.e("154469"),
                        n.e("342922"),
                        n.e("945413"),
                        n.e("146844"),
                        n.e("255580"),
                        n.e("163235"),
                        n.e("859546"),
                        n.e("486672"),
                        n.e("75029"),
                        n.e("632756"),
                        n.e("564850"),
                        n.e("608032"),
                        n.e("170104"),
                        n.e("491793"),
                        n.e("477970"),
                        n.e("868214"),
                        n.e("902564"),
                        n.e("608557"),
                        n.e("92935"),
                        n.e("67878"),
                        n.e("758946"),
                        n.e("214285"),
                        n.e("248330"),
                        n.e("91450"),
                        n.e("588070"),
                        n.e("803332"),
                        n.e("938149"),
                        n.e("408362"),
                        n.e("741678"),
                        n.e("772401"),
                        n.e("852617"),
                        n.e("102698"),
                        n.e("204744"),
                        n.e("386317"),
                        n.e("737021"),
                        n.e("695164"),
                        n.e("818465"),
                        n.e("656463"),
                        n.e("971430"),
                        n.e("722460"),
                        n.e("976516"),
                        n.e("400501"),
                        n.e("41332"),
                        n.e("985794"),
                        n.e("767837"),
                        n.e("473384"),
                        n.e("453147"),
                        n.e("282783"),
                        n.e("432209"),
                        n.e("305557"),
                        n.e("859991"),
                        n.e("368062"),
                        n.e("793438"),
                        n.e("36227"),
                        n.e("709371"),
                        n.e("310235"),
                        n.e("752504"),
                        n.e("474610"),
                        n.e("844780"),
                        n.e("987478"),
                        n.e("939171"),
                        n.e("713567"),
                        n.e("242323"),
                        n.e("444567"),
                        n.e("229666"),
                        n.e("589916"),
                        n.e("695170"),
                        n.e("460773"),
                        n.e("28676"),
                        n.e("458273"),
                        n.e("208018"),
                        n.e("606949"),
                        n.e("968763"),
                        n.e("278045"),
                        n.e("883952"),
                        n.e("599976"),
                        n.e("26001"),
                        n.e("414591"),
                        n.e("652111"),
                        n.e("434786"),
                        n.e("309004"),
                        n.e("294607"),
                        n.e("982730"),
                        n.e("708536"),
                        n.e("411353"),
                        n.e("449145"),
                        n.e("49716"),
                        n.e("506045"),
                        n.e("159957"),
                        n.e("618706"),
                        n.e("203930"),
                        n.e("800872"),
                        n.e("903663"),
                        n.e("452531"),
                        n.e("201243"),
                        n.e("368530"),
                        n.e("430997"),
                        n.e("65393"),
                        n.e("338601"),
                        n.e("275859"),
                        n.e("215920"),
                        n.e("728136"),
                        n.e("978046"),
                        n.e("127659"),
                        n.e("66580"),
                        n.e("216084"),
                        n.e("343116"),
                        n.e("610943"),
                        n.e("283230"),
                        n.e("582486"),
                        n.e("273669"),
                        n.e("507775"),
                        n.e("760989"),
                        n.e("466147"),
                        n.e("50342"),
                        n.e("428235"),
                        n.e("303710"),
                        n.e("161058"),
                        n.e("134504"),
                        n.e("333097"),
                        n.e("280098"),
                        n.e("908608"),
                        n.e("409391"),
                        n.e("645830"),
                        n.e("115368"),
                        n.e("284819"),
                        n.e("810262"),
                        n.e("741786"),
                        n.e("995602"),
                        n.e("346313"),
                        n.e("463726"),
                        n.e("816589"),
                        n.e("256373"),
                        n.e("553683"),
                        n.e("929569"),
                        n.e("636002"),
                        n.e("343233"),
                        n.e("756684"),
                        n.e("583827"),
                        n.e("806354"),
                        n.e("556026"),
                        n.e("416301"),
                        n.e("722191"),
                        n.e("225961"),
                        n.e("359702"),
                        n.e("708364"),
                        n.e("138733"),
                        n.e("452823"),
                        n.e("779348"),
                        n.e("647011"),
                        n.e("331203"),
                        n.e("466913"),
                        n.e("983947"),
                        n.e("752695"),
                        n.e("71719"),
                        n.e("419690"),
                        n.e("893767"),
                        n.e("213848"),
                        n.e("39214"),
                        n.e("588307"),
                        n.e("514878"),
                        n.e("676376"),
                        n.e("426508"),
                        n.e("361347"),
                        n.e("8422"),
                        n.e("842935"),
                        n.e("73091"),
                        n.e("269178"),
                        n.e("886692"),
                        n.e("916373"),
                        n.e("81398"),
                        n.e("324484"),
                        n.e("925172"),
                        n.e("232347"),
                        n.e("8458"),
                        n.e("11810"),
                        n.e("591977"),
                        n.e("890152"),
                        n.e("174337"),
                        n.e("646570"),
                        n.e("287973"),
                        n.e("357197"),
                        n.e("314863"),
                        n.e("623386"),
                        n.e("384951"),
                        n.e("560165"),
                        n.e("712390"),
                        n.e("71167"),
                        n.e("113446"),
                        n.e("37786"),
                        n.e("306410"),
                        n.e("161309"),
                        n.e("694529"),
                        n.e("995210"),
                        n.e("630313"),
                        n.e("467753"),
                        n.e("721300"),
                        n.e("317699"),
                        n.e("257032"),
                        n.e("845322"),
                        n.e("426386"),
                        n.e("584705"),
                        n.e("842987"),
                        n.e("588860"),
                    ]).then(n.bind(n, 485272));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t.record, onSelect: o.jD, hideSettings: !0 });
                });
            case S.rD.TEXT_CHANNEL:
            case S.rD.VOICE_CHANNEL:
                let r = t.record,
                    a = v.A.getGuild(r.getGuildId());
                if (null == a) return;
                switch (r.type) {
                    case H.rbe.GUILD_TEXT:
                    case H.rbe.GUILD_ANNOUNCEMENT:
                    case H.rbe.GUILD_FORUM:
                    case H.rbe.GUILD_MEDIA:
                    case H.rbe.GUILD_APP:
                        return (0, T.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("926132"),
                                n.e("146652"),
                                n.e("993103"),
                                n.e("393336"),
                                n.e("893190"),
                                n.e("391763"),
                                n.e("955557"),
                                n.e("474610"),
                                n.e("603998"),
                                n.e("550033"),
                                n.e("947502"),
                                n.e("343266"),
                                n.e("309004"),
                                n.e("965789"),
                                n.e("412255"),
                                n.e("63340"),
                                n.e("430997"),
                                n.e("379995"),
                                n.e("537796"),
                                n.e("544058"),
                                n.e("65200"),
                                n.e("591377"),
                                n.e("35723"),
                                n.e("566378"),
                                n.e("256372"),
                                n.e("29542"),
                                n.e("248804"),
                                n.e("670954"),
                                n.e("25173"),
                            ]).then(n.bind(n, 468916));
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, guild: a, onSelect: o.jD });
                        });
                    case H.rbe.GUILD_VOICE:
                    case H.rbe.GUILD_STAGE_VOICE:
                        return (0, T.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("926132"),
                                n.e("146652"),
                                n.e("993103"),
                                n.e("393336"),
                                n.e("893190"),
                                n.e("391763"),
                                n.e("955557"),
                                n.e("474610"),
                                n.e("603998"),
                                n.e("550033"),
                                n.e("947502"),
                                n.e("343266"),
                                n.e("309004"),
                                n.e("965789"),
                                n.e("412255"),
                                n.e("63340"),
                                n.e("430997"),
                                n.e("379995"),
                                n.e("537796"),
                                n.e("544058"),
                                n.e("591377"),
                                n.e("35723"),
                                n.e("566378"),
                                n.e("256372"),
                                n.e("29542"),
                                n.e("419690"),
                                n.e("426792"),
                                n.e("248804"),
                                n.e("318663"),
                                n.e("599990"),
                                n.e("599854"),
                            ]).then(n.bind(n, 119357));
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, guild: a, onSelect: o.jD });
                        });
                    case H.rbe.ANNOUNCEMENT_THREAD:
                    case H.rbe.PUBLIC_THREAD:
                    case H.rbe.PRIVATE_THREAD:
                        return (0, T.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("926132"),
                                n.e("393336"),
                                n.e("391763"),
                                n.e("955557"),
                                n.e("691671"),
                                n.e("603998"),
                                n.e("947502"),
                                n.e("343266"),
                                n.e("965789"),
                                n.e("412255"),
                                n.e("896804"),
                                n.e("63340"),
                                n.e("65200"),
                                n.e("285802"),
                                n.e("703869"),
                                n.e("51212"),
                                n.e("584615"),
                            ]).then(n.bind(n, 612826));
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, onSelect: o.jD });
                        });
                    case H.rbe.GUILD_STORE:
                        return (0, T.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("926132"),
                                n.e("603998"),
                                n.e("309004"),
                                n.e("412255"),
                                n.e("63340"),
                                n.e("430997"),
                                n.e("379995"),
                                n.e("544058"),
                                n.e("715669"),
                            ]).then(n.bind(n, 313140));
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, guild: a, onSelect: o.jD });
                        });
                    case H.rbe.GUILD_DIRECTORY:
                        return (0, T.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("926132"),
                                n.e("430997"),
                                n.e("379995"),
                                n.e("729559"),
                            ]).then(n.bind(n, 994058));
                            return (t) => (0, i.jsx)(e, { ...t, channel: r });
                        });
                }
                break;
            case S.rD.GROUP_DM:
                return (0, T.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("926132"),
                        n.e("146652"),
                        n.e("393336"),
                        n.e("893190"),
                        n.e("391763"),
                        n.e("955557"),
                        n.e("947502"),
                        n.e("965789"),
                        n.e("368530"),
                        n.e("537796"),
                        n.e("566378"),
                        n.e("17244"),
                        n.e("153416"),
                        n.e("760200"),
                    ]).then(n.bind(n, 4027));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channel: t.record,
                            selected: P.Ay.getChannelId() === t.record.id,
                            onSelect: o.jD,
                        });
                });
            case S.rD.USER:
                return (0, T.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("790484"),
                        n.e("463317"),
                        n.e("926132"),
                        n.e("146652"),
                        n.e("834552"),
                        n.e("708757"),
                        n.e("585968"),
                        n.e("776273"),
                        n.e("893190"),
                        n.e("189673"),
                        n.e("229787"),
                        n.e("882073"),
                        n.e("797558"),
                        n.e("691994"),
                        n.e("576665"),
                        n.e("624198"),
                        n.e("532418"),
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
                (e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search("") : (0, o.jD)());
                return;
            case "k":
            case "t":
                (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, o.jD)());
                return;
            case "enter": {
                if (-1 === a) return;
                if ((e.preventDefault(), e.altKey)) return this.handleContextMenu(e);
                let t = i[a];
                if (null == t) return;
                if ((e.metaKey || e.ctrlKey) && L.A.isEnabled()) return void (0, o.$U)(t);
                this.selectResult(t);
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
        (e.preventDefault(), (0, o.wf)(a));
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
                (0, i.jsx)(w.EG, { event: H.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, i.jsx)(I.vN, {
                    children: (0, i.jsx)("input", {
                        className: $.hF,
                        "aria-label": j.intl.string(j.t.ZvKwYa),
                        ref: this.inputRef,
                        type: "text",
                        role: "combobox",
                        "aria-controls": this._listId,
                        "aria-expanded": r,
                        "aria-activedescendant": r ? this.getRowId(e) : void 0,
                        "aria-autocomplete": "list",
                        placeholder: j.intl.string(j.t.VtvewW),
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
                ? (0, i.jsx)(z, {})
                : 0 === t.length
                  ? null
                  : (0, i.jsx)(f.Ei, {
                        innerId: this._listId,
                        innerRole: "listbox",
                        "aria-label": j.intl.string(j.t.Wef5Do),
                        ref: this.scrollerRef,
                        sectionHeight: 0,
                        rowHeight: 34,
                        paddingBottom: 10,
                        sections: [t.length],
                        className: $.XG,
                        renderRow: this.renderRow,
                        renderSection: this.renderSection,
                    });
        };
        return (0, i.jsx)("div", { className: $.sN, children: e() });
    }
    focusNode(e) {
        G._.dispatch(H.jej.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return `quick-switcher-${this._listId}-item-${e}`;
    }
    renderRow = (e) => {
        let { row: t } = e,
            n = this.props.results[t],
            { selectedIndex: r } = this.props,
            { showScores: a } = N.getCurrentConfig({ location: "62f4be_1" }, { autoTrackExposure: !1 });
        switch (n.type) {
            case S.rD.HEADER:
                return (0, i.jsx)(k.Y9, { children: n.record.text }, `${n.type}-${n.record.id}`);
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
                    Q,
                    {
                        id: this.getRowId(t),
                        focused: r >= 0 && t === r,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        guild: n.record,
                        inlineLabel: j.intl.string(j.t["5qyruI"]),
                        score: a ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case S.rD.USER:
                return (0, i.jsx)(
                    ee,
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
                    J,
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
                    k.lg,
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
                    k.IH,
                    {
                        id: this.getRowId(t),
                        focused: r >= 0 && t === r,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        game: n.record,
                        inlineLabel: j.intl.string(j.t["9CHfCO"]),
                        children: (0, i.jsx)(R.A, {
                            platforms: n.record.platformAvailability,
                            location: "quickswitcher",
                        }),
                    },
                    `${n.type}-${n.record.id}`,
                );
            case S.rD.LINK:
                return (0, i.jsx)(
                    k.N_,
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
                    k.vw,
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
        let e = {
            userSymbolHook: (e, t) => et(t, S.AT.USER, j.intl.string(j.t.GQRCGn)),
            textChannelSymbolHook: (e, t) => et(t, S.AT.TEXT_CHANNEL, j.intl.string(j.t.wrwhuZ)),
            voiceChannelSymbolHook: (e, t) => et(t, S.AT.VOICE_CHANNEL, j.intl.string(j.t["jz+hJp"])),
            guildSymbolHook: (e, t) => et(t, S.AT.GUILD, j.intl.string(j.t.WuwCWi)),
            helpdeskArticle: x.A.getArticleURL(H.MVz.QUICK_SWITCHER_TUTORIAL),
        };
        return (0, i.jsx)(C.A, {
            className: u()($.PP, { [$.ov]: this.state.query.length > 0 }),
            type: C.A.Types.INLINE,
            children: j.intl.format(j.t.BGHbLb, {
                ...e,
                gameProfileSymbolHook: (e, t) => et(t, S.AT.GAME_PROFILE, j.intl.string(j.t.MfbDzS)),
            }),
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, i.jsx)(K, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, i.jsx)(p.d, {
            "aria-label": j.intl.string(j.t.ZvKwYa),
            size: "lg",
            transitionState: this.props.transitionState,
            onClose: this.props.onClose,
            children: (0, i.jsxs)("div", {
                className: $.rs,
                onMouseMove: this.handleMouseMove,
                children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()],
            }),
        });
    }
}
function ei(e) {
    let t = (0, _.cf)([d.A], () => d.A.getProps());
    return (0, i.jsx)(en, { ...t, ...e });
}
let er = "QUICK_SWITCHER_MODAL_KEY";
class ea extends l.A {
    _initialize() {
        (s.h.subscribe("QUICKSWITCHER_SHOW", this.handleShow), s.h.subscribe("QUICKSWITCHER_HIDE", this.handleHide));
    }
    _terminate() {
        (s.h.unsubscribe("QUICKSWITCHER_SHOW", this.handleShow),
            s.h.unsubscribe("QUICKSWITCHER_HIDE", this.handleHide));
    }
    handleShow() {
        d.A.isOpen() &&
            !(0, a.hasModalOpen)(er) &&
            (0, a.openModal)((e) => (0, i.jsx)(ei, { ...e }), { modalKey: er, instant: !0, onCloseCallback: o.jD });
    }
    handleHide() {
        (0, a.closeModal)(er);
    }
}
let es = new ea();
