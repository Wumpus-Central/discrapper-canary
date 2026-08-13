"use strict";
n.d(t, { A: () => er });
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
    G = n(820785),
    x = n(615300),
    k = n(451988),
    F = n(844222),
    V = n(652215),
    B = n(375708),
    H = n(793361);
let j = { friction: 15, tension: 100 };
class W extends r.PureComponent {
    state = { shown: !1, translateY: new x.A.Value(0) };
    static contextType = F.C;
    rootRef = r.createRef();
    focusTimeout = new k.Ep();
    componentDidMount() {
        this.setState({ shown: !0 }), U._.subscribe(V.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentWillUnmount() {
        this.focusTimeout.stop(), U._.unsubscribe(V.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
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
var Y = n(381807);
function K() {
    return (0, i.jsxs)("div", {
        className: Y.p$,
        children: [
            (0, i.jsx)("div", { className: Y.lv, children: B.intl.string(B.t.bpbATE) }),
            (0, i.jsx)("div", {
                className: Y.PA,
                children: (0, i.jsx)(A.Anchor, {
                    href: w.A.getArticleURL(V.MVz.QUICK_SWITCHER_TUTORIAL),
                    children: B.intl.string(B.t["4iPfEO"]),
                }),
            }),
        ],
    });
}
class $ extends r.Component {
    static defaultProps = { unread: !1 };
    render() {
        let e = D.A.getGuild(this.props.channel.guild_id);
        return (0, i.jsx)(G.c3, {
            ...this.props,
            children: (0, i.jsx)(h.E, {
                variant: "text-sm/medium",
                color: "none",
                className: Y.MD,
                children: null != e ? e.name : null,
            }),
        });
    }
}
let z = E.Ay.connectStores([v.Ay, O.A], (e) => {
        let { channel: t } = e;
        return {
            unread: v.Ay.hasUnread(t.id),
            mentions: v.Ay.getMentionCount(t.id),
            isMentionLowImportance: v.Ay.getIsMentionLowImportance(t.id),
            category: O.A.getChannel(t.parent_id),
        };
    })($),
    Z = E.Ay.connectStores([M.Ay], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id)
            throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
        return { voiceStates: M.Ay.getVoiceStates(t.guild_id)[t.id] };
    })($),
    q = E.Ay.connectStores([L.default], (e) => {
        let { guild: t } = e;
        return { unread: L.default.hasUnread(t.id) };
    })(G.OS),
    X = E.Ay.connectStores([v.Ay, y.A], (e) => {
        let { channel: t } = e,
            n = null,
            i = y.A.getState().statuses;
        return (
            t.recipients?.some((e) => i[e] === V.clD.ONLINE) && (n = V.clD.ONLINE),
            { mentions: v.Ay.getMentionCount(t.id), status: n }
        );
    })(G.nG),
    Q = E.Ay.connectStores([O.A, v.Ay, y.A], (e) => {
        let { user: t } = e,
            n = O.A.getDMFromUserId(t.id);
        return {
            mentions: null != n ? v.Ay.getMentionCount(n) : 0,
            status: y.A.getStatus(t.id),
            isMobile: y.A.isMobileOnline(t.id),
        };
    })(G.KJ);
function J(e, t, n) {
    return (0, i.jsx)(
        I.m,
        { __unsupportedReactNodeAsText: n, children: (0, i.jsx)("span", { className: Y.ZT, children: t }) },
        e,
    );
}
class ee extends r.PureComponent {
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
                        n.e("50614"),
                        n.e("38108"),
                        n.e("31668"),
                        n.e("35285"),
                        n.e("53969"),
                        n.e("40351"),
                        n.e("6389"),
                        n.e("48180"),
                        n.e("94629"),
                        n.e("67792"),
                        n.e("73153"),
                        n.e("8991"),
                        n.e("15214"),
                        n.e("76684"),
                        n.e("85631"),
                        n.e("21532"),
                        n.e("75030"),
                        n.e("47899"),
                        n.e("8248"),
                        n.e("11895"),
                        n.e("37175"),
                        n.e("1248"),
                        n.e("27634"),
                        n.e("73297"),
                        n.e("33004"),
                        n.e("3557"),
                        n.e("83118"),
                        n.e("98942"),
                        n.e("31076"),
                        n.e("68961"),
                        n.e("69167"),
                        n.e("14883"),
                        n.e("23102"),
                        n.e("2285"),
                        n.e("97726"),
                        n.e("42394"),
                        n.e("44459"),
                        n.e("98986"),
                        n.e("37467"),
                        n.e("60411"),
                        n.e("61298"),
                        n.e("45807"),
                        n.e("26572"),
                        n.e("65640"),
                        n.e("87356"),
                        n.e("85391"),
                        n.e("56356"),
                        n.e("18307"),
                        n.e("5270"),
                        n.e("42293"),
                        n.e("60574"),
                        n.e("83554"),
                        n.e("53412"),
                        n.e("18917"),
                        n.e("94450"),
                        n.e("86307"),
                        n.e("3574"),
                        n.e("711"),
                        n.e("25457"),
                        n.e("40981"),
                        n.e("63576"),
                        n.e("50693"),
                        n.e("6487"),
                        n.e("69794"),
                        n.e("20661"),
                        n.e("69190"),
                        n.e("18315"),
                        n.e("17776"),
                        n.e("78969"),
                        n.e("70201"),
                        n.e("61275"),
                        n.e("49557"),
                        n.e("30072"),
                        n.e("18629"),
                        n.e("90607"),
                        n.e("3672"),
                        n.e("13920"),
                        n.e("99424"),
                        n.e("670"),
                        n.e("99496"),
                        n.e("44565"),
                        n.e("88563"),
                        n.e("24212"),
                        n.e("20459"),
                        n.e("54960"),
                        n.e("55455"),
                        n.e("778"),
                        n.e("75683"),
                        n.e("23864"),
                        n.e("47519"),
                        n.e("80197"),
                        n.e("48132"),
                        n.e("61686"),
                        n.e("77873"),
                        n.e("97312"),
                        n.e("38469"),
                        n.e("9009"),
                        n.e("80126"),
                        n.e("91072"),
                        n.e("43422"),
                        n.e("49181"),
                        n.e("23651"),
                        n.e("50766"),
                        n.e("33925"),
                        n.e("72723"),
                        n.e("65584"),
                        n.e("94149"),
                        n.e("55286"),
                        n.e("43325"),
                        n.e("72026"),
                        n.e("83536"),
                        n.e("66756"),
                        n.e("25167"),
                        n.e("3650"),
                        n.e("25996"),
                        n.e("54948"),
                        n.e("85251"),
                        n.e("28634"),
                        n.e("39644"),
                        n.e("73432"),
                        n.e("39086"),
                        n.e("17104"),
                        n.e("18021"),
                        n.e("28212"),
                        n.e("35353"),
                        n.e("97551"),
                        n.e("10743"),
                        n.e("42745"),
                        n.e("70148"),
                        n.e("22878"),
                        n.e("74318"),
                        n.e("9"),
                        n.e("10887"),
                        n.e("99439"),
                        n.e("74362"),
                        n.e("13162"),
                        n.e("80904"),
                        n.e("75459"),
                        n.e("43300"),
                        n.e("32886"),
                        n.e("92111"),
                        n.e("64648"),
                        n.e("95013"),
                        n.e("76858"),
                        n.e("6819"),
                        n.e("96004"),
                        n.e("58921"),
                        n.e("19728"),
                        n.e("94373"),
                        n.e("35238"),
                        n.e("58818"),
                        n.e("61833"),
                        n.e("11689"),
                        n.e("14520"),
                        n.e("4142"),
                        n.e("19059"),
                        n.e("13586"),
                        n.e("4349"),
                        n.e("73763"),
                        n.e("98833"),
                        n.e("47352"),
                        n.e("38280"),
                        n.e("12345"),
                        n.e("23241"),
                        n.e("9172"),
                        n.e("65420"),
                        n.e("3056"),
                        n.e("62329"),
                        n.e("12822"),
                        n.e("74725"),
                        n.e("78015"),
                        n.e("22570"),
                        n.e("99998"),
                        n.e("80759"),
                        n.e("33587"),
                        n.e("88391"),
                        n.e("988"),
                        n.e("54540"),
                        n.e("32744"),
                        n.e("52123"),
                        n.e("26738"),
                        n.e("41295"),
                        n.e("69960"),
                        n.e("46148"),
                        n.e("94848"),
                        n.e("64488"),
                        n.e("91109"),
                        n.e("61439"),
                        n.e("39653"),
                        n.e("39013"),
                        n.e("99265"),
                        n.e("40804"),
                        n.e("45827"),
                        n.e("64477"),
                        n.e("65700"),
                        n.e("96393"),
                        n.e("16123"),
                        n.e("73193"),
                        n.e("78250"),
                        n.e("42529"),
                        n.e("31464"),
                        n.e("3263"),
                        n.e("54964"),
                        n.e("76279"),
                        n.e("51962"),
                        n.e("35459"),
                        n.e("47623"),
                        n.e("63933"),
                        n.e("42083"),
                        n.e("20182"),
                        n.e("47426"),
                        n.e("202"),
                        n.e("9454"),
                        n.e("77579"),
                        n.e("87085"),
                        n.e("72118"),
                        n.e("65831"),
                        n.e("59729"),
                        n.e("3240"),
                        n.e("72767"),
                        n.e("38647"),
                        n.e("102"),
                        n.e("25473"),
                        n.e("48149"),
                        n.e("46420"),
                        n.e("19834"),
                        n.e("51872"),
                        n.e("75091"),
                        n.e("27574"),
                        n.e("21149"),
                        n.e("99561"),
                        n.e("49817"),
                        n.e("67578"),
                        n.e("45850"),
                        n.e("21398"),
                        n.e("50482"),
                        n.e("62332"),
                        n.e("8607"),
                        n.e("5581"),
                        n.e("49681"),
                        n.e("69047"),
                        n.e("96382"),
                        n.e("62052"),
                        n.e("71657"),
                        n.e("22218"),
                        n.e("64827"),
                        n.e("63232"),
                        n.e("7167"),
                        n.e("84569"),
                        n.e("61060"),
                        n.e("10471"),
                        n.e("52457"),
                        n.e("60235"),
                        n.e("77333"),
                        n.e("18573"),
                        n.e("6338"),
                        n.e("47834"),
                        n.e("97595"),
                        n.e("47662"),
                        n.e("44057"),
                        n.e("13736"),
                        n.e("28504"),
                        n.e("31988"),
                        n.e("62156"),
                        n.e("44571"),
                        n.e("34303"),
                        n.e("40291"),
                        n.e("2368"),
                        n.e("33115"),
                        n.e("97270"),
                        n.e("73122"),
                        n.e("8304"),
                        n.e("93159"),
                        n.e("55936"),
                        n.e("89088"),
                        n.e("30760"),
                        n.e("94723"),
                        n.e("30316"),
                        n.e("62931"),
                        n.e("45959"),
                        n.e("58529"),
                        n.e("83488"),
                        n.e("81987"),
                        n.e("58038"),
                        n.e("71202"),
                        n.e("75201"),
                        n.e("76909"),
                        n.e("6174"),
                        n.e("93103"),
                        n.e("28367"),
                        n.e("81647"),
                        n.e("91763"),
                        n.e("76602"),
                        n.e("7170"),
                        n.e("11310"),
                        n.e("21921"),
                        n.e("7575"),
                        n.e("40402"),
                        n.e("72963"),
                        n.e("52511"),
                        n.e("54241"),
                        n.e("24303"),
                        n.e("42724"),
                        n.e("93766"),
                        n.e("13823"),
                        n.e("71210"),
                        n.e("21930"),
                        n.e("59460"),
                        n.e("53930"),
                        n.e("39970"),
                        n.e("76418"),
                        n.e("40258"),
                        n.e("92583"),
                        n.e("43437"),
                        n.e("75842"),
                        n.e("66495"),
                        n.e("98329"),
                        n.e("9205"),
                        n.e("8555"),
                        n.e("88342"),
                        n.e("30233"),
                        n.e("86127"),
                        n.e("46070"),
                        n.e("88599"),
                        n.e("36863"),
                        n.e("21200"),
                        n.e("72789"),
                        n.e("54622"),
                        n.e("76894"),
                        n.e("25949"),
                        n.e("44502"),
                        n.e("17249"),
                        n.e("71273"),
                        n.e("89421"),
                        n.e("67861"),
                        n.e("1518"),
                        n.e("79049"),
                        n.e("9640"),
                        n.e("62422"),
                        n.e("90365"),
                        n.e("23354"),
                        n.e("66707"),
                        n.e("52548"),
                        n.e("17989"),
                        n.e("35027"),
                        n.e("37977"),
                        n.e("91671"),
                        n.e("49653"),
                        n.e("47626"),
                        n.e("95596"),
                        n.e("82644"),
                        n.e("3589"),
                        n.e("13867"),
                        n.e("53984"),
                        n.e("43780"),
                        n.e("20590"),
                        n.e("31267"),
                        n.e("86414"),
                        n.e("80830"),
                        n.e("51224"),
                        n.e("79745"),
                        n.e("80854"),
                        n.e("35395"),
                        n.e("74630"),
                        n.e("92215"),
                        n.e("45413"),
                        n.e("46844"),
                        n.e("39075"),
                        n.e("63235"),
                        n.e("86672"),
                        n.e("75029"),
                        n.e("48948"),
                        n.e("63244"),
                        n.e("32756"),
                        n.e("64850"),
                        n.e("70104"),
                        n.e("68214"),
                        n.e("2564"),
                        n.e("71477"),
                        n.e("67878"),
                        n.e("31965"),
                        n.e("58946"),
                        n.e("14285"),
                        n.e("48330"),
                        n.e("91450"),
                        n.e("95752"),
                        n.e("3332"),
                        n.e("8362"),
                        n.e("41678"),
                        n.e("72401"),
                        n.e("52617"),
                        n.e("2698"),
                        n.e("4744"),
                        n.e("36227"),
                        n.e("37021"),
                        n.e("16731"),
                        n.e("18465"),
                        n.e("71430"),
                        n.e("76516"),
                        n.e("501"),
                        n.e("86243"),
                        n.e("85794"),
                        n.e("67837"),
                        n.e("73384"),
                        n.e("82783"),
                        n.e("32209"),
                        n.e("5557"),
                        n.e("68062"),
                        n.e("93438"),
                        n.e("9371"),
                        n.e("45437"),
                        n.e("74610"),
                        n.e("44780"),
                        n.e("39171"),
                        n.e("87478"),
                        n.e("83952"),
                        n.e("95340"),
                        n.e("89916"),
                        n.e("60773"),
                        n.e("66948"),
                        n.e("9004"),
                        n.e("59957"),
                        n.e("29666"),
                        n.e("8018"),
                        n.e("65927"),
                        n.e("49145"),
                        n.e("68763"),
                        n.e("18113"),
                        n.e("3930"),
                        n.e("58273"),
                        n.e("3663"),
                        n.e("6949"),
                        n.e("20930"),
                        n.e("99976"),
                        n.e("26001"),
                        n.e("30997"),
                        n.e("14591"),
                        n.e("52111"),
                        n.e("19454"),
                        n.e("34786"),
                        n.e("15109"),
                        n.e("94607"),
                        n.e("82730"),
                        n.e("8536"),
                        n.e("28136"),
                        n.e("57458"),
                        n.e("38601"),
                        n.e("6045"),
                        n.e("1243"),
                        n.e("15920"),
                        n.e("18706"),
                        n.e("872"),
                        n.e("59797"),
                        n.e("52531"),
                        n.e("93336"),
                        n.e("68530"),
                        n.e("36894"),
                        n.e("16084"),
                        n.e("27659"),
                        n.e("75859"),
                        n.e("66580"),
                        n.e("43116"),
                        n.e("78046"),
                        n.e("83230"),
                        n.e("82486"),
                        n.e("73669"),
                        n.e("36624"),
                        n.e("10943"),
                        n.e("7775"),
                        n.e("20402"),
                        n.e("66147"),
                        n.e("28235"),
                        n.e("21778"),
                        n.e("22547"),
                        n.e("61058"),
                        n.e("50342"),
                        n.e("33097"),
                        n.e("80098"),
                        n.e("3710"),
                        n.e("9391"),
                        n.e("45830"),
                        n.e("10262"),
                        n.e("41786"),
                        n.e("95602"),
                        n.e("46313"),
                        n.e("34409"),
                        n.e("53683"),
                        n.e("29569"),
                        n.e("36002"),
                        n.e("43233"),
                        n.e("63726"),
                        n.e("56684"),
                        n.e("56373"),
                        n.e("83827"),
                        n.e("42749"),
                        n.e("56026"),
                        n.e("16301"),
                        n.e("22191"),
                        n.e("25961"),
                        n.e("59702"),
                        n.e("8364"),
                        n.e("99108"),
                        n.e("52823"),
                        n.e("56967"),
                        n.e("66913"),
                        n.e("83947"),
                        n.e("71719"),
                        n.e("19690"),
                        n.e("93767"),
                        n.e("13848"),
                        n.e("39214"),
                        n.e("88307"),
                        n.e("14878"),
                        n.e("76376"),
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
                        n.e("74337"),
                        n.e("57197"),
                        n.e("14863"),
                        n.e("23386"),
                        n.e("84951"),
                        n.e("60165"),
                        n.e("12390"),
                        n.e("71167"),
                        n.e("13446"),
                        n.e("6410"),
                        n.e("61309"),
                        n.e("94529"),
                        n.e("95210"),
                        n.e("30313"),
                        n.e("98415"),
                        n.e("21300"),
                        n.e("53584"),
                        n.e("17699"),
                        n.e("57032"),
                        n.e("22941"),
                        n.e("94832"),
                        n.e("26386"),
                        n.e("65338"),
                        n.e("88860"),
                    ]).then(n.bind(n, 860417));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t.record, onSelect: o.jD, hideSettings: !0 });
                });
            case S.rD.TEXT_CHANNEL:
            case S.rD.VOICE_CHANNEL:
                let r = t.record,
                    a = D.A.getGuild(r.getGuildId());
                if (null == a) return;
                switch (r.type) {
                    case V.rbe.GUILD_TEXT:
                    case V.rbe.GUILD_ANNOUNCEMENT:
                    case V.rbe.GUILD_FORUM:
                    case V.rbe.GUILD_MEDIA:
                        return (0, T.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("26132"),
                                n.e("46652"),
                                n.e("93190"),
                                n.e("91763"),
                                n.e("38730"),
                                n.e("35321"),
                                n.e("50033"),
                                n.e("47502"),
                                n.e("3998"),
                                n.e("43266"),
                                n.e("9004"),
                                n.e("12255"),
                                n.e("40959"),
                                n.e("30997"),
                                n.e("79995"),
                                n.e("87048"),
                                n.e("44058"),
                                n.e("65200"),
                                n.e("91377"),
                                n.e("35723"),
                                n.e("66378"),
                                n.e("56372"),
                                n.e("29542"),
                                n.e("48804"),
                                n.e("25173"),
                            ]).then(n.bind(n, 468916));
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, guild: a, onSelect: o.jD });
                        });
                    case V.rbe.GUILD_VOICE:
                    case V.rbe.GUILD_STAGE_VOICE:
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
                                n.e("47502"),
                                n.e("74610"),
                                n.e("3998"),
                                n.e("43266"),
                                n.e("9004"),
                                n.e("12255"),
                                n.e("40959"),
                                n.e("30997"),
                                n.e("79995"),
                                n.e("87048"),
                                n.e("44058"),
                                n.e("91377"),
                                n.e("35723"),
                                n.e("66378"),
                                n.e("56372"),
                                n.e("29542"),
                                n.e("19690"),
                                n.e("26792"),
                                n.e("48804"),
                                n.e("18663"),
                                n.e("99990"),
                                n.e("99854"),
                            ]).then(n.bind(n, 119357));
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, guild: a, onSelect: o.jD });
                        });
                    case V.rbe.ANNOUNCEMENT_THREAD:
                    case V.rbe.PUBLIC_THREAD:
                    case V.rbe.PRIVATE_THREAD:
                        return (0, T.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("26132"),
                                n.e("91763"),
                                n.e("38730"),
                                n.e("91671"),
                                n.e("47502"),
                                n.e("3998"),
                                n.e("43266"),
                                n.e("12255"),
                                n.e("40959"),
                                n.e("96804"),
                                n.e("65200"),
                                n.e("85802"),
                                n.e("26250"),
                                n.e("51212"),
                                n.e("84615"),
                            ]).then(n.bind(n, 612826));
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, onSelect: o.jD });
                        });
                    case V.rbe.GUILD_STORE:
                        return (0, T.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("26132"),
                                n.e("3998"),
                                n.e("9004"),
                                n.e("12255"),
                                n.e("40959"),
                                n.e("30997"),
                                n.e("79995"),
                                n.e("44058"),
                                n.e("15669"),
                            ]).then(n.bind(n, 313140));
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, guild: a, onSelect: o.jD });
                        });
                    case V.rbe.GUILD_DIRECTORY:
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
                        n.e("47502"),
                        n.e("68530"),
                        n.e("87048"),
                        n.e("66378"),
                        n.e("17244"),
                        n.e("53416"),
                        n.e("60200"),
                    ]).then(n.bind(n, 4027));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channel: t.record,
                            selected: b.Ay.getChannelId() === t.record.id,
                            onSelect: o.jD,
                        });
                });
            case S.rD.USER:
                return (0, T.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("97422"),
                        n.e("97705"),
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
                (0, i.jsx)(P.EG, { event: V.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, i.jsx)(f.vN, {
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
                  : (0, i.jsx)(p.Ei, {
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
        U._.dispatch(V.jej.QUICKSWITCHER_RESULT_FOCUS, { node: e });
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
                return (0, i.jsx)(G.Y9, { children: n.record.text }, `${n.type}-${n.record.id}`);
            case S.rD.TEXT_CHANNEL:
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
                    q,
                    {
                        id: this.getRowId(t),
                        focused: r >= 0 && t === r,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        guild: n.record,
                        inlineLabel: B.intl.string(B.t["5qyruI"]),
                        score: a ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case S.rD.USER:
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
            case S.rD.GROUP_DM:
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
            case S.rD.APPLICATION:
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
            case S.rD.GAME_PROFILE:
                return (0, i.jsx)(
                    G.IH,
                    {
                        id: this.getRowId(t),
                        focused: r >= 0 && t === r,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        game: n.record,
                        inlineLabel: B.intl.string(B.t["9CHfCO"]),
                    },
                    `${n.type}-${n.record.id}`,
                );
            case S.rD.LINK:
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
            case S.rD.IN_APP_NAVIGATION:
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
        let e = {
            userSymbolHook: (e, t) => J(t, S.AT.USER, B.intl.string(B.t.GQRCGn)),
            textChannelSymbolHook: (e, t) => J(t, S.AT.TEXT_CHANNEL, B.intl.string(B.t.wrwhuZ)),
            voiceChannelSymbolHook: (e, t) => J(t, S.AT.VOICE_CHANNEL, B.intl.string(B.t["jz+hJp"])),
            guildSymbolHook: (e, t) => J(t, S.AT.GUILD, B.intl.string(B.t.WuwCWi)),
            helpdeskArticle: w.A.getArticleURL(V.MVz.QUICK_SWITCHER_TUTORIAL),
        };
        return (0, i.jsx)(C.A, {
            className: u()(Y.PP, { [Y.ov]: this.state.query.length > 0 }),
            type: C.A.Types.INLINE,
            children: B.intl.format(B.t.BGHbLb, {
                ...e,
                gameProfileSymbolHook: (e, t) => J(t, S.AT.GAME_PROFILE, B.intl.string(B.t.MfbDzS)),
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
