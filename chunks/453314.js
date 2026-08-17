"use strict";
n.d(t, { A: () => ea });
var i = n(477900),
    r = n(582128),
    a = n(192308),
    s = n(228366),
    l = n(272355),
    o = n(793322),
    d = n(174768),
    c = n(503698),
    u = n.n(c),
    _ = n(224640),
    E = n(17928),
    A = n(349288),
    h = n(834730),
    I = n(866665),
    f = n(259678),
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
    O = n(442325),
    L = n(734057),
    y = n(458294),
    D = n(71393),
    v = n(290863),
    b = n(568548),
    M = n(309010),
    P = n(607567),
    U = n(234320),
    w = n(625494),
    G = n(975571),
    x = n(820785),
    k = n(615300),
    F = n(451988),
    V = n(844222),
    B = n(652215),
    H = n(375708),
    j = n(793361);
let W = { friction: 15, tension: 100 };
class Y extends r.PureComponent {
    state = { shown: !1, translateY: new k.A.Value(0) };
    static contextType = V.C;
    rootRef = r.createRef();
    focusTimeout = new F.Ep();
    componentDidMount() {
        this.setState({ shown: !0 }), w._.subscribe(B.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentWillUnmount() {
        this.focusTimeout.stop(), w._.unsubscribe(B.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
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
var K = n(381807);
function $() {
    return (0, i.jsxs)("div", {
        className: K.p$,
        children: [
            (0, i.jsx)("div", { className: K.lv, children: H.intl.string(H.t.bpbATE) }),
            (0, i.jsx)("div", {
                className: K.PA,
                children: (0, i.jsx)(A.Anchor, {
                    href: G.A.getArticleURL(B.MVz.QUICK_SWITCHER_TUTORIAL),
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
            children: (0, i.jsx)(h.E, {
                variant: "text-sm/medium",
                color: "none",
                className: K.MD,
                children: null != e ? e.name : null,
            }),
        });
    }
}
let Z = E.Ay.connectStores([b.Ay, L.A], (e) => {
        let { channel: t } = e;
        return {
            unread: b.Ay.hasUnread(t.id),
            mentions: b.Ay.getMentionCount(t.id),
            isMentionLowImportance: b.Ay.getIsMentionLowImportance(t.id),
            category: L.A.getChannel(t.parent_id),
        };
    })(z),
    q = E.Ay.connectStores([P.Ay], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id)
            throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
        return { voiceStates: P.Ay.getVoiceStates(t.guild_id)[t.id] };
    })(z),
    X = E.Ay.connectStores([y.default], (e) => {
        let { guild: t } = e;
        return { unread: y.default.hasUnread(t.id) };
    })(x.OS),
    Q = E.Ay.connectStores([b.Ay, v.A], (e) => {
        let { channel: t } = e,
            n = null,
            i = v.A.getState().statuses;
        return (
            t.recipients?.some((e) => i[e] === B.clD.ONLINE) && (n = B.clD.ONLINE),
            { mentions: b.Ay.getMentionCount(t.id), status: n }
        );
    })(x.nG),
    J = E.Ay.connectStores([L.A, b.Ay, v.A], (e) => {
        let { user: t } = e,
            n = L.A.getDMFromUserId(t.id);
        return {
            mentions: null != n ? b.Ay.getMentionCount(n) : 0,
            status: v.A.getStatus(t.id),
            isMobile: v.A.isMobileOnline(t.id),
        };
    })(x.KJ);
function ee(e, t, n) {
    return (0, i.jsx)(
        I.m,
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
                        n.e("374913"),
                        n.e("138108"),
                        n.e("931668"),
                        n.e("46259"),
                        n.e("915946"),
                        n.e("453969"),
                        n.e("883566"),
                        n.e("943630"),
                        n.e("225726"),
                        n.e("695752"),
                        n.e("867477"),
                        n.e("454546"),
                        n.e("451272"),
                        n.e("173153"),
                        n.e("908991"),
                        n.e("315214"),
                        n.e("476684"),
                        n.e("685631"),
                        n.e("21532"),
                        n.e("775030"),
                        n.e("547899"),
                        n.e("808248"),
                        n.e("411895"),
                        n.e("937175"),
                        n.e("1248"),
                        n.e("927634"),
                        n.e("573297"),
                        n.e("133004"),
                        n.e("203557"),
                        n.e("283118"),
                        n.e("498942"),
                        n.e("31076"),
                        n.e("368961"),
                        n.e("569167"),
                        n.e("914883"),
                        n.e("223102"),
                        n.e("902285"),
                        n.e("97726"),
                        n.e("442394"),
                        n.e("144459"),
                        n.e("398986"),
                        n.e("237467"),
                        n.e("60411"),
                        n.e("61298"),
                        n.e("945807"),
                        n.e("426572"),
                        n.e("565640"),
                        n.e("387356"),
                        n.e("485391"),
                        n.e("156356"),
                        n.e("218307"),
                        n.e("805270"),
                        n.e("442293"),
                        n.e("60574"),
                        n.e("83554"),
                        n.e("853412"),
                        n.e("418917"),
                        n.e("494450"),
                        n.e("786307"),
                        n.e("903574"),
                        n.e("400711"),
                        n.e("525457"),
                        n.e("840981"),
                        n.e("763576"),
                        n.e("150693"),
                        n.e("6487"),
                        n.e("969794"),
                        n.e("820661"),
                        n.e("223476"),
                        n.e("153176"),
                        n.e("418315"),
                        n.e("317776"),
                        n.e("678969"),
                        n.e("970201"),
                        n.e("261275"),
                        n.e("949557"),
                        n.e("130072"),
                        n.e("518629"),
                        n.e("290607"),
                        n.e("903672"),
                        n.e("213920"),
                        n.e("799424"),
                        n.e("500670"),
                        n.e("999496"),
                        n.e("544565"),
                        n.e("188563"),
                        n.e("324212"),
                        n.e("174281"),
                        n.e("954960"),
                        n.e("255455"),
                        n.e("900778"),
                        n.e("275683"),
                        n.e("223864"),
                        n.e("647519"),
                        n.e("380197"),
                        n.e("848132"),
                        n.e("761686"),
                        n.e("477873"),
                        n.e("197312"),
                        n.e("438469"),
                        n.e("509009"),
                        n.e("980126"),
                        n.e("791072"),
                        n.e("243422"),
                        n.e("849181"),
                        n.e("723651"),
                        n.e("150766"),
                        n.e("833925"),
                        n.e("472723"),
                        n.e("965584"),
                        n.e("594149"),
                        n.e("955286"),
                        n.e("543325"),
                        n.e("772026"),
                        n.e("783536"),
                        n.e("942725"),
                        n.e("825167"),
                        n.e("903650"),
                        n.e("925996"),
                        n.e("354948"),
                        n.e("385251"),
                        n.e("28634"),
                        n.e("551492"),
                        n.e("540496"),
                        n.e("39086"),
                        n.e("294723"),
                        n.e("240402"),
                        n.e("628212"),
                        n.e("35353"),
                        n.e("297551"),
                        n.e("210743"),
                        n.e("442745"),
                        n.e("470148"),
                        n.e("222878"),
                        n.e("74318"),
                        n.e("100009"),
                        n.e("285538"),
                        n.e("933983"),
                        n.e("699439"),
                        n.e("974362"),
                        n.e("313162"),
                        n.e("780904"),
                        n.e("475459"),
                        n.e("943300"),
                        n.e("732886"),
                        n.e("192111"),
                        n.e("364648"),
                        n.e("795013"),
                        n.e("276858"),
                        n.e("206819"),
                        n.e("196004"),
                        n.e("158921"),
                        n.e("519728"),
                        n.e("294373"),
                        n.e("535238"),
                        n.e("358818"),
                        n.e("161833"),
                        n.e("411689"),
                        n.e("250112"),
                        n.e("404142"),
                        n.e("819059"),
                        n.e("913586"),
                        n.e("904349"),
                        n.e("273763"),
                        n.e("598833"),
                        n.e("247352"),
                        n.e("351636"),
                        n.e("369002"),
                        n.e("112345"),
                        n.e("123241"),
                        n.e("509172"),
                        n.e("365420"),
                        n.e("203056"),
                        n.e("562329"),
                        n.e("612822"),
                        n.e("897106"),
                        n.e("478015"),
                        n.e("622570"),
                        n.e("599998"),
                        n.e("580759"),
                        n.e("533587"),
                        n.e("840323"),
                        n.e("500988"),
                        n.e("754540"),
                        n.e("710363"),
                        n.e("852123"),
                        n.e("626738"),
                        n.e("41295"),
                        n.e("769960"),
                        n.e("440119"),
                        n.e("694848"),
                        n.e("264488"),
                        n.e("591109"),
                        n.e("861439"),
                        n.e("639653"),
                        n.e("339013"),
                        n.e("299265"),
                        n.e("840804"),
                        n.e("845827"),
                        n.e("164477"),
                        n.e("965700"),
                        n.e("896393"),
                        n.e("316123"),
                        n.e("773193"),
                        n.e("778250"),
                        n.e("42529"),
                        n.e("231464"),
                        n.e("403263"),
                        n.e("654964"),
                        n.e("676279"),
                        n.e("651962"),
                        n.e("935459"),
                        n.e("583345"),
                        n.e("507047"),
                        n.e("763933"),
                        n.e("454722"),
                        n.e("895080"),
                        n.e("720182"),
                        n.e("225045"),
                        n.e("700202"),
                        n.e("709454"),
                        n.e("677579"),
                        n.e("987085"),
                        n.e("972118"),
                        n.e("165831"),
                        n.e("659729"),
                        n.e("203240"),
                        n.e("72767"),
                        n.e("138647"),
                        n.e("400102"),
                        n.e("225473"),
                        n.e("148149"),
                        n.e("646420"),
                        n.e("619834"),
                        n.e("251872"),
                        n.e("375091"),
                        n.e("827574"),
                        n.e("121149"),
                        n.e("721942"),
                        n.e("849817"),
                        n.e("667578"),
                        n.e("645850"),
                        n.e("21398"),
                        n.e("650482"),
                        n.e("762332"),
                        n.e("208607"),
                        n.e("905581"),
                        n.e("249681"),
                        n.e("869047"),
                        n.e("996382"),
                        n.e("62052"),
                        n.e("771657"),
                        n.e("122218"),
                        n.e("863232"),
                        n.e("364827"),
                        n.e("907167"),
                        n.e("784569"),
                        n.e("861060"),
                        n.e("910471"),
                        n.e("752457"),
                        n.e("960235"),
                        n.e("77333"),
                        n.e("718573"),
                        n.e("806338"),
                        n.e("747834"),
                        n.e("797595"),
                        n.e("147662"),
                        n.e("344057"),
                        n.e("413736"),
                        n.e("128504"),
                        n.e("331988"),
                        n.e("262156"),
                        n.e("544571"),
                        n.e("234303"),
                        n.e("40291"),
                        n.e("402368"),
                        n.e("733115"),
                        n.e("397270"),
                        n.e("373122"),
                        n.e("108304"),
                        n.e("293159"),
                        n.e("755936"),
                        n.e("489088"),
                        n.e("409692"),
                        n.e("994723"),
                        n.e("330316"),
                        n.e("362931"),
                        n.e("745959"),
                        n.e("858529"),
                        n.e("183488"),
                        n.e("481987"),
                        n.e("958038"),
                        n.e("171202"),
                        n.e("875201"),
                        n.e("576909"),
                        n.e("406174"),
                        n.e("993103"),
                        n.e("481647"),
                        n.e("428367"),
                        n.e("776602"),
                        n.e("391763"),
                        n.e("140402"),
                        n.e("407170"),
                        n.e("811310"),
                        n.e("21921"),
                        n.e("307575"),
                        n.e("572963"),
                        n.e("752511"),
                        n.e("554241"),
                        n.e("724303"),
                        n.e("942724"),
                        n.e("393766"),
                        n.e("913823"),
                        n.e("571210"),
                        n.e("521930"),
                        n.e("559460"),
                        n.e("331549"),
                        n.e("139970"),
                        n.e("676418"),
                        n.e("940258"),
                        n.e("292583"),
                        n.e("343437"),
                        n.e("875842"),
                        n.e("166495"),
                        n.e("67861"),
                        n.e("401518"),
                        n.e("198329"),
                        n.e("9205"),
                        n.e("308555"),
                        n.e("88342"),
                        n.e("323354"),
                        n.e("930233"),
                        n.e("586127"),
                        n.e("146070"),
                        n.e("88599"),
                        n.e("836863"),
                        n.e("221200"),
                        n.e("472789"),
                        n.e("854622"),
                        n.e("976894"),
                        n.e("25949"),
                        n.e("344502"),
                        n.e("617249"),
                        n.e("171273"),
                        n.e("311802"),
                        n.e("179049"),
                        n.e("709640"),
                        n.e("362422"),
                        n.e("590365"),
                        n.e("989088"),
                        n.e("952548"),
                        n.e("817989"),
                        n.e("435027"),
                        n.e("37977"),
                        n.e("691671"),
                        n.e("49653"),
                        n.e("147626"),
                        n.e("795596"),
                        n.e("382644"),
                        n.e("203589"),
                        n.e("613867"),
                        n.e("553984"),
                        n.e("943780"),
                        n.e("720590"),
                        n.e("31267"),
                        n.e("886414"),
                        n.e("480830"),
                        n.e("451224"),
                        n.e("179745"),
                        n.e("280854"),
                        n.e("335395"),
                        n.e("174630"),
                        n.e("692215"),
                        n.e("945413"),
                        n.e("146844"),
                        n.e("539075"),
                        n.e("163235"),
                        n.e("486672"),
                        n.e("75029"),
                        n.e("448948"),
                        n.e("963244"),
                        n.e("632756"),
                        n.e("564850"),
                        n.e("170104"),
                        n.e("868214"),
                        n.e("902564"),
                        n.e("371477"),
                        n.e("67878"),
                        n.e("631965"),
                        n.e("758946"),
                        n.e("214285"),
                        n.e("248330"),
                        n.e("91450"),
                        n.e("795752"),
                        n.e("803332"),
                        n.e("408362"),
                        n.e("741678"),
                        n.e("772401"),
                        n.e("852617"),
                        n.e("844780"),
                        n.e("102698"),
                        n.e("204744"),
                        n.e("36227"),
                        n.e("737021"),
                        n.e("416731"),
                        n.e("818465"),
                        n.e("971430"),
                        n.e("976516"),
                        n.e("400501"),
                        n.e("886243"),
                        n.e("985794"),
                        n.e("767837"),
                        n.e("473384"),
                        n.e("282783"),
                        n.e("432209"),
                        n.e("305557"),
                        n.e("368062"),
                        n.e("793438"),
                        n.e("709371"),
                        n.e("845437"),
                        n.e("474610"),
                        n.e("939171"),
                        n.e("987478"),
                        n.e("883952"),
                        n.e("95340"),
                        n.e("159957"),
                        n.e("229666"),
                        n.e("589916"),
                        n.e("460773"),
                        n.e("444567"),
                        n.e("309004"),
                        n.e("208018"),
                        n.e("665927"),
                        n.e("449145"),
                        n.e("968763"),
                        n.e("585256"),
                        n.e("203930"),
                        n.e("458273"),
                        n.e("903663"),
                        n.e("606949"),
                        n.e("820930"),
                        n.e("599976"),
                        n.e("26001"),
                        n.e("430997"),
                        n.e("414591"),
                        n.e("652111"),
                        n.e("728136"),
                        n.e("119454"),
                        n.e("434786"),
                        n.e("615109"),
                        n.e("294607"),
                        n.e("982730"),
                        n.e("708536"),
                        n.e("457458"),
                        n.e("338601"),
                        n.e("506045"),
                        n.e("201243"),
                        n.e("215920"),
                        n.e("368530"),
                        n.e("618706"),
                        n.e("800872"),
                        n.e("259797"),
                        n.e("216084"),
                        n.e("452531"),
                        n.e("393336"),
                        n.e("136894"),
                        n.e("127659"),
                        n.e("275859"),
                        n.e("66580"),
                        n.e("343116"),
                        n.e("36624"),
                        n.e("610943"),
                        n.e("978046"),
                        n.e("283230"),
                        n.e("582486"),
                        n.e("273669"),
                        n.e("507775"),
                        n.e("22547"),
                        n.e("760989"),
                        n.e("466147"),
                        n.e("428235"),
                        n.e("303710"),
                        n.e("421778"),
                        n.e("161058"),
                        n.e("50342"),
                        n.e("333097"),
                        n.e("280098"),
                        n.e("409391"),
                        n.e("645830"),
                        n.e("810262"),
                        n.e("741786"),
                        n.e("995602"),
                        n.e("346313"),
                        n.e("534409"),
                        n.e("553683"),
                        n.e("929569"),
                        n.e("636002"),
                        n.e("343233"),
                        n.e("463726"),
                        n.e("756684"),
                        n.e("256373"),
                        n.e("583827"),
                        n.e("242749"),
                        n.e("556026"),
                        n.e("416301"),
                        n.e("722191"),
                        n.e("225961"),
                        n.e("359702"),
                        n.e("708364"),
                        n.e("138733"),
                        n.e("399108"),
                        n.e("452823"),
                        n.e("556967"),
                        n.e("647011"),
                        n.e("466913"),
                        n.e("983947"),
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
                        n.e("991643"),
                        n.e("842935"),
                        n.e("73091"),
                        n.e("269178"),
                        n.e("886692"),
                        n.e("752695"),
                        n.e("916373"),
                        n.e("81398"),
                        n.e("324484"),
                        n.e("44943"),
                        n.e("232347"),
                        n.e("8458"),
                        n.e("11810"),
                        n.e("591977"),
                        n.e("890152"),
                        n.e("646570"),
                        n.e("287973"),
                        n.e("174337"),
                        n.e("357197"),
                        n.e("314863"),
                        n.e("623386"),
                        n.e("384951"),
                        n.e("560165"),
                        n.e("712390"),
                        n.e("71167"),
                        n.e("113446"),
                        n.e("306410"),
                        n.e("161309"),
                        n.e("694529"),
                        n.e("995210"),
                        n.e("630313"),
                        n.e("198415"),
                        n.e("721300"),
                        n.e("553584"),
                        n.e("317699"),
                        n.e("257032"),
                        n.e("845322"),
                        n.e("94832"),
                        n.e("426386"),
                        n.e("865338"),
                        n.e("588860"),
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
                                n.e("926132"),
                                n.e("146652"),
                                n.e("893190"),
                                n.e("391763"),
                                n.e("238730"),
                                n.e("535321"),
                                n.e("550033"),
                                n.e("947502"),
                                n.e("603998"),
                                n.e("343266"),
                                n.e("309004"),
                                n.e("965789"),
                                n.e("412255"),
                                n.e("63340"),
                                n.e("430997"),
                                n.e("379995"),
                                n.e("187048"),
                                n.e("544058"),
                                n.e("65200"),
                                n.e("591377"),
                                n.e("35723"),
                                n.e("566378"),
                                n.e("256372"),
                                n.e("29542"),
                                n.e("248804"),
                                n.e("25173"),
                            ]).then(n.bind(n, 468916));
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, guild: a, onSelect: o.jD });
                        });
                    case B.rbe.GUILD_VOICE:
                    case B.rbe.GUILD_STAGE_VOICE:
                        return (0, T.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("926132"),
                                n.e("146652"),
                                n.e("993103"),
                                n.e("893190"),
                                n.e("391763"),
                                n.e("238730"),
                                n.e("535321"),
                                n.e("550033"),
                                n.e("947502"),
                                n.e("474610"),
                                n.e("603998"),
                                n.e("343266"),
                                n.e("309004"),
                                n.e("965789"),
                                n.e("412255"),
                                n.e("63340"),
                                n.e("430997"),
                                n.e("379995"),
                                n.e("187048"),
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
                    case B.rbe.ANNOUNCEMENT_THREAD:
                    case B.rbe.PUBLIC_THREAD:
                    case B.rbe.PRIVATE_THREAD:
                        return (0, T.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("926132"),
                                n.e("391763"),
                                n.e("238730"),
                                n.e("691671"),
                                n.e("947502"),
                                n.e("603998"),
                                n.e("343266"),
                                n.e("965789"),
                                n.e("412255"),
                                n.e("63340"),
                                n.e("896804"),
                                n.e("65200"),
                                n.e("285802"),
                                n.e("703869"),
                                n.e("51212"),
                                n.e("584615"),
                            ]).then(n.bind(n, 612826));
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, onSelect: o.jD });
                        });
                    case B.rbe.GUILD_STORE:
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
                    case B.rbe.GUILD_DIRECTORY:
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
                        n.e("893190"),
                        n.e("391763"),
                        n.e("238730"),
                        n.e("947502"),
                        n.e("965789"),
                        n.e("368530"),
                        n.e("187048"),
                        n.e("566378"),
                        n.e("17244"),
                        n.e("153416"),
                        n.e("760200"),
                    ]).then(n.bind(n, 4027));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channel: t.record,
                            selected: M.Ay.getChannelId() === t.record.id,
                            onSelect: o.jD,
                        });
                });
            case S.rD.USER:
                return (0, T.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("158696"),
                        n.e("397705"),
                        n.e("926132"),
                        n.e("146652"),
                        n.e("893190"),
                        n.e("834552"),
                        n.e("708757"),
                        n.e("585968"),
                        n.e("189673"),
                        n.e("468403"),
                        n.e("229787"),
                        n.e("882073"),
                        n.e("797558"),
                        n.e("691994"),
                        n.e("576665"),
                        n.e("776273"),
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
                if (null == t) return;
                if ((e.metaKey || e.ctrlKey) && O.A.isEnabled()) return void (0, o.$U)(t);
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
                (0, i.jsx)(U.EG, { event: B.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
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
        w._.dispatch(B.jej.QUICKSWITCHER_RESULT_FOCUS, { node: e });
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
                return (0, i.jsx)(x.Y9, { children: n.record.text }, `${n.type}-${n.record.id}`);
            case S.rD.TEXT_CHANNEL:
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
            case S.rD.VOICE_CHANNEL:
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
                        inlineLabel: H.intl.string(H.t["5qyruI"]),
                        score: a ? n.score : void 0,
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
                        inlineLabel: H.intl.string(H.t["9CHfCO"]),
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
        let e = {
            userSymbolHook: (e, t) => ee(t, S.AT.USER, H.intl.string(H.t.GQRCGn)),
            textChannelSymbolHook: (e, t) => ee(t, S.AT.TEXT_CHANNEL, H.intl.string(H.t.wrwhuZ)),
            voiceChannelSymbolHook: (e, t) => ee(t, S.AT.VOICE_CHANNEL, H.intl.string(H.t["jz+hJp"])),
            guildSymbolHook: (e, t) => ee(t, S.AT.GUILD, H.intl.string(H.t.WuwCWi)),
            helpdeskArticle: G.A.getArticleURL(B.MVz.QUICK_SWITCHER_TUTORIAL),
        };
        return (0, i.jsx)(C.A, {
            className: u()(K.PP, { [K.ov]: this.state.query.length > 0 }),
            type: C.A.Types.INLINE,
            children: H.intl.format(H.t.BGHbLb, {
                ...e,
                gameProfileSymbolHook: (e, t) => ee(t, S.AT.GAME_PROFILE, H.intl.string(H.t.MfbDzS)),
            }),
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
