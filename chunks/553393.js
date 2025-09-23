n.d(t, { Z: () => k }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(401393),
    o = n(91192),
    s = n(442837),
    l = n(159691),
    c = n(780384),
    u = n(481060),
    d = n(287734),
    f = n(872810),
    _ = n(393238),
    p = n(40851),
    h = n(607070),
    m = n(210887),
    g = n(592125),
    E = n(617136),
    b = n(509212),
    y = n(497505),
    O = n(475595),
    v = n(602667),
    I = n(644646),
    T = n(110560),
    S = n(667105),
    A = n(46140),
    C = n(981631),
    N = n(231338),
    R = n(388032),
    P = n(419953);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            });
    }
    return e;
}
let x = "8px",
    L = "11px",
    j = 222;
function M(e) {
    var t, v, w, M, k;
    let {
            quest: U,
            memberListItemRef: G,
            applicationStream: B,
            position: Z,
            closePopout: F,
            updatePosition: V,
            impressionRef: H,
            name: Y,
        } = e,
        W = (0, s.e7)([g.Z], () => {
            var e;
            return null != (e = g.Z.getChannel(null == B ? void 0 : B.channelId)) ? e : null;
        }),
        K = (0, S.hf)({
            quest: U,
            questContent: y.jn.MEMBERS_LIST,
            sourceQuestContent: y.jn.MEMBERS_LIST,
        }),
        z = (null == U || null == (t = U.userStatus) ? void 0 : t.claimedAt) != null,
        q = (null == U || null == (v = U.userStatus) ? void 0 : v.enrolledAt) != null,
        X = (null == U || null == (w = U.userStatus) ? void 0 : w.completedAt) != null,
        Q = (0, s.e7)([m.Z], () => m.Z.getState().theme),
        J = (0, c.wj)(Q) ? N.BR.DARK : N.BR.LIGHT,
        $ = (0, s.e7)([h.Z], () => h.Z.useReducedMotion),
        { ref: ee, height: et } = (0, _.ZP)(),
        [en, er] = i.useState($),
        ei = (0, p.Aq)(),
        ea = (0, o.eg)();
    i.useEffect(() => {
        let e = ea.current;
        return (
            null == e || e.addEventListener("scroll", F),
            () => {
                null == e || e.removeEventListener("scroll", F);
            }
        );
    }, [F, ea]),
        i.useEffect(() => {
            let e = ea.current,
                t = G.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => V());
            return (
                n.observe(e, {
                    childList: !0,
                    subtree: !0,
                }),
                () => {
                    n.disconnect();
                }
            );
        }, [G, ea, V]);
    let eo = (0, u.q_F)({
            from: { height: 0 },
            height: null != et ? et : 0,
            config: {
                tension: 450,
                friction: 45,
            },
            onRest: () => er(!0),
        }),
        es = (0, u.Yzy)(en, {
            from: {
                opacity: 0,
                scale: 0,
            },
            enter: {
                opacity: 1,
                scale: 1,
            },
        }),
        el = () => {
            ei.dispatch(C.CkL.POPOUT_CLOSE);
        },
        ec = "top" === Z ? "".concat(x, " ").concat(x, " 0 0") : "0 0 ".concat(x, " ").concat(x),
        eu = () => {
            (0, E._3)({
                questId: U.id,
                questContent: y.jn.MEMBERS_LIST,
                questContentCTA: E.jZ.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: y.jn.MEMBERS_LIST,
            }),
                (0, T.openDisclosureModal)(U, {
                    content: y.jn.MEMBERS_LIST,
                    ctaContent: E.jZ.OPEN_DISCLOSURE,
                    sourceQuestContent: y.jn.MEMBERS_LIST,
                });
        },
        ed = () => {
            (0, E._3)({
                questId: U.id,
                questContent: y.jn.MEMBERS_LIST,
                questContentCTA: E.jZ.LEARN_MORE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: y.jn.MEMBERS_LIST,
            }),
                (0, T.navigateToQuestHome)({
                    fromContent: y.jn.MEMBERS_LIST,
                    questId: U.id,
                });
        },
        ef = (e) => {
            e.stopPropagation(), eu();
        },
        e_ = () => {
            (0, b.Rc)(B, W) && null != W
                ? ((0, E._3)({
                      questId: U.id,
                      questContent: y.jn.MEMBERS_LIST,
                      questContentCTA: E.jZ.WATCH_STREAM,
                      trackGuildAndChannelMetadata: !0,
                      sourceQuestContent: y.jn.MEMBERS_LIST,
                  }),
                  (0, u.ZDy)(async () => {
                      let { default: e } = await n.e("85045").then(n.bind(n, 748862));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              D(
                                  {
                                      username: null != Y ? Y : "",
                                      onConfirm: () => (
                                          (0, E._3)({
                                              questId: U.id,
                                              questContent: y.jn.MEMBERS_LIST,
                                              questContentCTA: E.jZ.WATCH_STREAM_CONFIRM,
                                              trackGuildAndChannelMetadata: !0,
                                              sourceQuestContent: y.jn.MEMBERS_LIST,
                                          }),
                                          d.default.selectVoiceChannel(W.id),
                                          (0, f.iV)(B)
                                      ),
                                  },
                                  t,
                              ),
                          );
                  }))
                : ed();
        },
        ep =
            X && !z
                ? {
                      headerText: R.intl.string(R.t.gHerLS),
                      ctaText: R.intl.string(R.t.cfY4PD),
                      handleClickCta: K,
                      tileAssetType: "reward",
                  }
                : q && !z
                  ? {
                        headerText: R.intl.string(R.t.uH2sf3),
                        ctaText: R.intl.string(R.t.VN1Ajo),
                        handleClickCta: ed,
                        tileAssetType: "reward",
                    }
                  : (0, b.Rc)(B, W)
                    ? {
                          headerText: R.intl.string(R.t.Bz6SkJ),
                          ctaText: R.intl.string(R.t.BXFP39),
                          handleClickCta: e_,
                          tileAssetType: "game",
                      }
                    : {
                          headerText: R.intl.string(R.t.Bz6SkJ),
                          ctaText: R.intl.string(R.t.BSXPZ2),
                          handleClickCta: ed,
                          tileAssetType: "game",
                      };
    return (0, r.jsx)(a.animated.div, {
        ref: (e) => {
            H.current = e;
        },
        "aria-expanded": en,
        className: P.wrapper,
        style: {
            width: null != (k = null == (M = G.current) ? void 0 : M.clientWidth) ? k : j,
            height: eo.height,
            overflow: en ? "visible" : "hidden",
            borderRadius: ec,
        },
        children: (0, r.jsxs)("div", {
            ref: (e) => {
                ee.current = e;
            },
            className: P.container,
            style: { borderRadius: ec },
            children: [
                (0, r.jsxs)("div", {
                    className: P.top,
                    children: [
                        (0, r.jsxs)("div", {
                            className: P.left,
                            children: [
                                (0, r.jsx)(u.X6q, {
                                    variant: "heading-sm/semibold",
                                    children: ep.headerText,
                                }),
                                (0, r.jsxs)(u.P3F, {
                                    className: P.help,
                                    onClick: (e) => {
                                        el(), ef(e);
                                    },
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            className: P.helpText,
                                            children: R.intl.format(R.t["Lm8/mJ"], {
                                                gamePublisher: U.config.messages.gamePublisher,
                                            }),
                                        }),
                                        (0, r.jsx)(u.idN, {
                                            size: "custom",
                                            className: P.helpIcon,
                                            width: L,
                                            height: L,
                                            color: u.TVs.colors.INTERACTIVE_NORMAL,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: P.right,
                            children: (0, r.jsxs)("div", {
                                className: P.imgWrapper,
                                children: [
                                    es(
                                        (e, t) =>
                                            t &&
                                            (0, r.jsx)(a.animated.div, {
                                                style: e,
                                                className: P.imgUnderlay,
                                            }),
                                    ),
                                    "game" === ep.tileAssetType &&
                                        (0, r.jsx)("img", {
                                            alt: R.intl.formatToPlainString(R.t.IskzPj, {
                                                gameTitle: U.config.messages.gameTitle,
                                                gamePublisher: U.config.messages.gamePublisher,
                                            }),
                                            className: P.assetTile,
                                            src: (0, O.fh)(U, O.eC.GAME_TILE, J).url,
                                        }),
                                    "reward" === ep.tileAssetType &&
                                        (0, r.jsx)(I.Z, {
                                            className: P.assetTile,
                                            quest: U,
                                            questContent: y.jn.MEMBERS_LIST,
                                            learnMoreStyle: "icon",
                                            location: A.dr.MEMBERS_LIST,
                                            onClick: el,
                                            sourceQuestContent: y.jn.MEMBERS_LIST,
                                        }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(l.zxk, {
                    variant: "secondary",
                    text: ep.ctaText,
                    onClick: () => {
                        el(), ep.handleClickCta();
                    },
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
function k(e) {
    return (0, r.jsx)(v.A, {
        questOrQuests: e.quest,
        questContent: y.jn.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: y.jn.MEMBERS_LIST,
        children: (t) => (0, r.jsx)(M, D({ impressionRef: t }, e)),
    });
}
