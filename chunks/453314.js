"use strict";
n.d(t, { A: () => er });
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
    h = n(17928),
    f = n(990078),
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
var y = n(12351),
    C = n(915089),
    N = n(734057),
    v = n(458294),
    R = n(71393),
    O = n(290863),
    b = n(568548),
    D = n(309010),
    L = n(607567),
    w = n(234320),
    M = n(625494),
    P = n(975571),
    x = n(363738),
    k = n(820785),
    U = n(615300),
    G = n(451988),
    F = n(844222),
    V = n(652215),
    B = n(375708),
    j = n(246729);
let H = { friction: 15, tension: 100 };
class Y extends r.PureComponent {
    state = { shown: !1, translateY: new U.A.Value(0) };
    static contextType = F.C;
    rootRef = r.createRef();
    focusTimeout = new G.Ep();
    componentDidMount() {
        this.setState({ shown: !0 }), M._.subscribe(V.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentWillUnmount() {
        this.focusTimeout.stop(), M._.unsubscribe(V.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
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
            className: d()(j.XN, e),
            children: [
                (0, i.jsx)(U.A.div, {
                    className: d()(j.Hf, j.xM),
                    style: this.getStyle(),
                    children: (0, i.jsx)("img", { alt: "", src: n(824829), className: j.D6 }),
                }),
                (0, i.jsx)("div", {
                    className: d()(j.Hf, j.JM),
                    children: (0, i.jsx)("img", { alt: "", src: n(162206), className: j.D6 }),
                }),
                (0, i.jsx)("div", {
                    className: d()(j.Hf, j.QJ),
                    children: (0, i.jsx)("img", { alt: "", src: n(298607), className: j.D6 }),
                }),
            ],
        });
    }
    renderContent() {
        return (0, i.jsxs)("div", {
            className: j.fi,
            children: [
                (0, i.jsx)("div", { className: j.Iv, children: B.intl.string(B.t.Mp0IGK) }),
                (0, i.jsx)("div", { className: j.kp, children: B.intl.string(B.t["3CbpwH"]) }),
            ],
        });
    }
    render() {
        let { hasQuery: e } = this.props,
            { shown: t } = this.state;
        return (0, i.jsxs)("div", {
            ref: this.rootRef,
            className: d()(j.d$, { [j.SP]: t, [j.tG]: e }),
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
var W = n(781303);
let K = () =>
    (0, i.jsxs)("div", {
        className: W.p$,
        children: [
            (0, i.jsx)("div", { className: W.lv, children: B.intl.string(B.t.bpbATE) }),
            (0, i.jsx)("div", {
                className: W.PA,
                children: (0, i.jsx)(p.Anchor, {
                    href: P.A.getArticleURL(V.MVz.QUICK_SWITCHER_TUTORIAL),
                    children: B.intl.string(B.t["4iPfEO"]),
                }),
            }),
        ],
    });
class $ extends r.Component {
    static defaultProps = { unread: !1 };
    render() {
        let e = R.A.getGuild(this.props.channel.guild_id);
        return (0, i.jsx)(k.c3, {
            ...this.props,
            children: (0, i.jsx)("div", { className: W.MD, children: null != e ? e.name : null }),
        });
    }
}
let z = h.Ay.connectStores([b.Ay, N.A], (e) => {
        let { channel: t } = e;
        return {
            unread: b.Ay.hasUnread(t.id),
            mentions: b.Ay.getMentionCount(t.id),
            isMentionLowImportance: b.Ay.getIsMentionLowImportance(t.id),
            category: N.A.getChannel(t.parent_id),
        };
    })($),
    q = h.Ay.connectStores([L.Ay], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id)
            throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
        return { voiceStates: L.Ay.getVoiceStates(t.guild_id)[t.id] };
    })($),
    Z = h.Ay.connectStores([v.default], (e) => {
        let { guild: t } = e;
        return { unread: v.default.hasUnread(t.id) };
    })(k.OS),
    X = h.Ay.connectStores([b.Ay, O.A], (e) => {
        let { channel: t } = e,
            n = null,
            i = O.A.getState().statuses;
        return (
            t.recipients?.some((e) => i[e] === V.clD.ONLINE) && (n = V.clD.ONLINE),
            { mentions: b.Ay.getMentionCount(t.id), status: n }
        );
    })(k.nG),
    Q = h.Ay.connectStores([N.A, b.Ay, O.A], (e) => {
        let { user: t } = e,
            n = N.A.getDMFromUserId(t.id);
        return {
            mentions: null != n ? b.Ay.getMentionCount(n) : 0,
            status: O.A.getStatus(t.id),
            isMobile: O.A.isMobileOnline(t.id),
        };
    })(k.KJ);
function J(e, t, n) {
    return (0, i.jsx)(
        f.m,
        { __unsupportedReactNodeAsText: n, children: (0, i.jsx)("span", { className: W.ZT, children: t }) },
        e,
    );
}
class ee extends r.PureComponent {
    scrollerRef = r.createRef();
    inputRef = r.createRef();
    _listId = (0, C.Ld)();
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
                        n.e("71455"),
                        n.e("84287"),
                        n.e("50692"),
                        n.e("43683"),
                        n.e("64578"),
                        n.e("60361"),
                        n.e("76486"),
                        n.e("89982"),
                        n.e("88014"),
                        n.e("51437"),
                        n.e("76821"),
                        n.e("10581"),
                        n.e("67696"),
                        n.e("90629"),
                        n.e("8886"),
                        n.e("6212"),
                        n.e("53637"),
                        n.e("39655"),
                        n.e("78220"),
                        n.e("11262"),
                        n.e("16227"),
                        n.e("37520"),
                        n.e("33973"),
                        n.e("44125"),
                        n.e("37634"),
                        n.e("812"),
                        n.e("99115"),
                        n.e("72386"),
                        n.e("30541"),
                        n.e("74187"),
                        n.e("62279"),
                        n.e("44667"),
                        n.e("42157"),
                        n.e("96636"),
                        n.e("85917"),
                        n.e("53727"),
                        n.e("57034"),
                        n.e("85948"),
                        n.e("12940"),
                        n.e("52443"),
                        n.e("11266"),
                        n.e("4954"),
                        n.e("75954"),
                        n.e("45976"),
                        n.e("60654"),
                        n.e("70179"),
                        n.e("97690"),
                        n.e("87103"),
                        n.e("52865"),
                        n.e("57215"),
                        n.e("22535"),
                        n.e("2499"),
                        n.e("94970"),
                        n.e("48997"),
                        n.e("70486"),
                        n.e("59135"),
                        n.e("83140"),
                        n.e("18670"),
                        n.e("33238"),
                        n.e("8641"),
                        n.e("59204"),
                        n.e("8736"),
                        n.e("97242"),
                        n.e("98795"),
                        n.e("65123"),
                        n.e("23549"),
                        n.e("83566"),
                        n.e("86283"),
                        n.e("84183"),
                        n.e("28510"),
                        n.e("91752"),
                        n.e("8502"),
                        n.e("58493"),
                        n.e("58376"),
                        n.e("77569"),
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
                        n.e("61312"),
                        n.e("57328"),
                        n.e("44135"),
                        n.e("79555"),
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
                        n.e("76900"),
                        n.e("54210"),
                        n.e("73099"),
                        n.e("47199"),
                        n.e("78381"),
                        n.e("8794"),
                        n.e("98824"),
                        n.e("78230"),
                        n.e("11002"),
                        n.e("47170"),
                        n.e("33174"),
                        n.e("84923"),
                        n.e("70613"),
                        n.e("25870"),
                        n.e("76831"),
                        n.e("37870"),
                        n.e("93083"),
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
                        n.e("26543"),
                        n.e("82314"),
                        n.e("80339"),
                        n.e("38977"),
                        n.e("20802"),
                        n.e("91474"),
                        n.e("17566"),
                        n.e("19402"),
                        n.e("49681"),
                        n.e("96382"),
                        n.e("22687"),
                        n.e("62052"),
                        n.e("63202"),
                        n.e("82596"),
                        n.e("93103"),
                        n.e("28367"),
                        n.e("81647"),
                        n.e("76602"),
                        n.e("91763"),
                        n.e("21921"),
                        n.e("9233"),
                        n.e("52511"),
                        n.e("72963"),
                        n.e("40402"),
                        n.e("43437"),
                        n.e("39970"),
                        n.e("76418"),
                        n.e("93766"),
                        n.e("40258"),
                        n.e("86127"),
                        n.e("42724"),
                        n.e("66495"),
                        n.e("71210"),
                        n.e("8555"),
                        n.e("28095"),
                        n.e("88599"),
                        n.e("75842"),
                        n.e("36863"),
                        n.e("72789"),
                        n.e("50117"),
                        n.e("88342"),
                        n.e("6949"),
                        n.e("46070"),
                        n.e("17249"),
                        n.e("71273"),
                        n.e("53917"),
                        n.e("79049"),
                        n.e("9640"),
                        n.e("62422"),
                        n.e("90365"),
                        n.e("98765"),
                        n.e("89088"),
                        n.e("52548"),
                        n.e("89421"),
                        n.e("35027"),
                        n.e("67861"),
                        n.e("1518"),
                        n.e("15186"),
                        n.e("37977"),
                        n.e("47626"),
                        n.e("23354"),
                        n.e("28083"),
                        n.e("82644"),
                        n.e("53984"),
                        n.e("43780"),
                        n.e("20590"),
                        n.e("65437"),
                        n.e("74810"),
                        n.e("80830"),
                        n.e("79745"),
                        n.e("3589"),
                        n.e("80854"),
                        n.e("35395"),
                        n.e("46844"),
                        n.e("63235"),
                        n.e("45413"),
                        n.e("86672"),
                        n.e("90664"),
                        n.e("32756"),
                        n.e("64850"),
                        n.e("70104"),
                        n.e("2564"),
                        n.e("47417"),
                        n.e("19558"),
                        n.e("58946"),
                        n.e("48330"),
                        n.e("14285"),
                        n.e("95752"),
                        n.e("3332"),
                        n.e("8362"),
                        n.e("41678"),
                        n.e("72401"),
                        n.e("52617"),
                        n.e("4744"),
                        n.e("2698"),
                        n.e("37021"),
                        n.e("81314"),
                        n.e("71430"),
                        n.e("501"),
                        n.e("86243"),
                        n.e("85794"),
                        n.e("67837"),
                        n.e("73384"),
                        n.e("82783"),
                        n.e("32209"),
                        n.e("21572"),
                        n.e("87478"),
                        n.e("39171"),
                        n.e("83952"),
                        n.e("44780"),
                        n.e("95340"),
                        n.e("44567"),
                        n.e("5557"),
                        n.e("62718"),
                        n.e("1812"),
                        n.e("92128"),
                        n.e("9004"),
                        n.e("89916"),
                        n.e("92295"),
                        n.e("49145"),
                        n.e("60773"),
                        n.e("68763"),
                        n.e("15109"),
                        n.e("59957"),
                        n.e("99549"),
                        n.e("29666"),
                        n.e("58273"),
                        n.e("8018"),
                        n.e("20930"),
                        n.e("74610"),
                        n.e("26001"),
                        n.e("16988"),
                        n.e("30997"),
                        n.e("14591"),
                        n.e("52111"),
                        n.e("18706"),
                        n.e("872"),
                        n.e("57458"),
                        n.e("59797"),
                        n.e("38601"),
                        n.e("93336"),
                        n.e("1243"),
                        n.e("28136"),
                        n.e("69495"),
                        n.e("15920"),
                        n.e("75859"),
                        n.e("3930"),
                        n.e("3663"),
                        n.e("27659"),
                        n.e("68530"),
                        n.e("16084"),
                        n.e("43116"),
                        n.e("66580"),
                        n.e("78046"),
                        n.e("83230"),
                        n.e("82486"),
                        n.e("73669"),
                        n.e("10943"),
                        n.e("60989"),
                        n.e("36624"),
                        n.e("7775"),
                        n.e("61058"),
                        n.e("50342"),
                        n.e("93993"),
                        n.e("33097"),
                        n.e("3710"),
                        n.e("45830"),
                        n.e("22547"),
                        n.e("77602"),
                        n.e("10262"),
                        n.e("95602"),
                        n.e("46313"),
                        n.e("41786"),
                        n.e("34409"),
                        n.e("29569"),
                        n.e("36002"),
                        n.e("87995"),
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
                        n.e("74333"),
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
                        n.e("93767"),
                        n.e("13848"),
                        n.e("39214"),
                        n.e("99108"),
                        n.e("88307"),
                        n.e("14878"),
                        n.e("26508"),
                        n.e("61347"),
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
                        n.e("70189"),
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
                    s = R.A.getGuild(r.getGuildId());
                if (null == s) return;
                switch (r.type) {
                    case V.rbe.GUILD_TEXT:
                    case V.rbe.GUILD_ANNOUNCEMENT:
                    case V.rbe.GUILD_FORUM:
                    case V.rbe.GUILD_MEDIA:
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
                    case V.rbe.GUILD_VOICE:
                    case V.rbe.GUILD_STAGE_VOICE:
                        return (0, g.L3)(e, async () => {
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
                            return (t) => (0, i.jsx)(e, { ...t, channel: r, guild: s, onSelect: l.jD });
                        });
                    case V.rbe.ANNOUNCEMENT_THREAD:
                    case V.rbe.PUBLIC_THREAD:
                    case V.rbe.PRIVATE_THREAD:
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
                    case V.rbe.GUILD_STORE:
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
                    case V.rbe.GUILD_DIRECTORY:
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
                        n.e("17244"),
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
                        n.e("71406"),
                        n.e("94881"),
                        n.e("26132"),
                        n.e("46652"),
                        n.e("93190"),
                        n.e("34552"),
                        n.e("8757"),
                        n.e("23625"),
                        n.e("54037"),
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
                (0, i.jsx)(w.EG, { event: V.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, i.jsx)(E.vN, {
                    children: (0, i.jsx)("input", {
                        className: W.hF,
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
                  : (0, i.jsx)(m.Ei, {
                        innerId: this._listId,
                        innerRole: "listbox",
                        "aria-label": B.intl.string(B.t.Wef5Do),
                        ref: this.scrollerRef,
                        sectionHeight: 0,
                        rowHeight: 34,
                        paddingBottom: 10,
                        sections: [t.length],
                        className: W.XG,
                        renderRow: this.renderRow,
                        renderSection: this.renderSection,
                    });
        };
        return (0, i.jsx)("div", { className: W.sN, children: e() });
    }
    focusNode(e) {
        M._.dispatch(V.jej.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return `quick-switcher-${this._listId}-item-${e}`;
    }
    renderRow = (e) => {
        let { row: t } = e,
            n = this.props.results[t],
            { selectedIndex: r } = this.props,
            { showScores: s } = S.getCurrentConfig({ location: "62f4be_1" }, { autoTrackExposure: !1 }),
            { enabled: a, alternatePosition: o } = x.s.getConfig({ location: "QuickSwitcher.renderRow" }),
            l = a && !o ? B.intl.string(B.t["5qyruI"]) : void 0,
            u = a && o ? (0, i.jsx)("div", { className: W.MD, children: B.intl.string(B.t["5qyruI"]) }) : null,
            c = o ? void 0 : B.intl.string(B.t["9CHfCO"]),
            d = o ? (0, i.jsx)("div", { className: W.MD, children: B.intl.string(B.t["9CHfCO"]) }) : null;
        switch (n.type) {
            case T.rD.HEADER:
                return (0, i.jsx)(k.Y9, { children: n.record.text }, `${n.type}-${n.record.id}`);
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
                    q,
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
                    Z,
                    {
                        id: this.getRowId(t),
                        focused: r >= 0 && t === r,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        guild: n.record,
                        inlineLabel: l,
                        score: s ? n.score : void 0,
                        children: u,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case T.rD.USER:
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
                        score: s ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case T.rD.GROUP_DM:
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
                        score: s ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case T.rD.APPLICATION:
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
            case T.rD.GAME_PROFILE:
                return (0, i.jsx)(
                    k.IH,
                    {
                        id: this.getRowId(t),
                        focused: r >= 0 && t === r,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        game: n.record,
                        inlineLabel: c,
                        children: d,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case T.rD.LINK:
                return (0, i.jsx)(
                    k.N_,
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
                    k.vw,
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
        let { enabled: e } = x.s.getConfig({ location: "QuickSwitcher.renderProtip" }),
            t = {
                userSymbolHook: (e, t) => J(t, T.AT.USER, B.intl.string(B.t.GQRCGn)),
                textChannelSymbolHook: (e, t) => J(t, T.AT.TEXT_CHANNEL, B.intl.string(B.t.wrwhuZ)),
                voiceChannelSymbolHook: (e, t) => J(t, T.AT.VOICE_CHANNEL, B.intl.string(B.t["jz+hJp"])),
                guildSymbolHook: (e, t) => J(t, T.AT.GUILD, B.intl.string(B.t.WuwCWi)),
                helpdeskArticle: P.A.getArticleURL(V.MVz.QUICK_SWITCHER_TUTORIAL),
            };
        return (0, i.jsx)(y.A, {
            className: d()(W.PP, { [W.ov]: this.state.query.length > 0 }),
            type: y.A.Types.INLINE,
            children: e
                ? B.intl.format(B.t.BGHbLb, {
                      ...t,
                      gameProfileSymbolHook: (e, t) => J(t, T.AT.GAME_PROFILE, B.intl.string(B.t.MfbDzS)),
                  })
                : B.intl.format(B.t.wukqXQ, t),
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, i.jsx)(Y, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, i.jsx)(_.d, {
            "aria-label": B.intl.string(B.t.ZvKwYa),
            size: "lg",
            transitionState: this.props.transitionState,
            onClose: this.props.onClose,
            children: (0, i.jsxs)("div", {
                className: W.rs,
                onMouseMove: this.handleMouseMove,
                children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()],
            }),
        });
    }
}
function et(e) {
    let t = (0, h.cf)([u.A], () => u.A.getProps());
    return (0, i.jsx)(ee, { ...t, ...e });
}
let en = "QUICK_SWITCHER_MODAL_KEY";
class ei extends o.A {
    _initialize() {
        a.h.subscribe("QUICKSWITCHER_SHOW", this.handleShow), a.h.subscribe("QUICKSWITCHER_HIDE", this.handleHide);
    }
    _terminate() {
        a.h.unsubscribe("QUICKSWITCHER_SHOW", this.handleShow), a.h.unsubscribe("QUICKSWITCHER_HIDE", this.handleHide);
    }
    handleShow() {
        u.A.isOpen() &&
            !(0, s.hasModalOpen)(en) &&
            (0, s.openModal)((e) => (0, i.jsx)(et, { ...e }), { modalKey: en, instant: !0, onCloseCallback: l.jD });
    }
    handleHide() {
        (0, s.closeModal)(en);
    }
}
let er = new ei();
