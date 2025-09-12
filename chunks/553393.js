n.d(t, { Z: () => V }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(938288),
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
    m = n(258609),
    g = n(102172),
    E = n(210887),
    b = n(592125),
    y = n(430824),
    O = n(496675),
    v = n(979651),
    I = n(617136),
    T = n(113434),
    S = n(497505),
    A = n(475595),
    C = n(602667),
    N = n(644646),
    R = n(110560),
    P = n(667105),
    w = n(46140),
    D = n(981631),
    x = n(231338),
    L = n(388032),
    j = n(85468);
function M(e, t, n) {
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
function k(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
let U = "8px",
    G = "11px",
    B = 222;
function Z(e, t) {
    return null != e && null != t && (0, g.p9)(t, v.Z, y.Z, O.Z, m.Z)[0];
}
function F(e) {
    var t, m, g, y, O;
    let {
            quest: v,
            memberListItemRef: C,
            applicationStream: M,
            position: F,
            closePopout: V,
            updatePosition: H,
            impressionRef: Y,
            name: W,
        } = e,
        K = (0, s.e7)([b.Z], () => {
            var e;
            return null != (e = b.Z.getChannel(null == M ? void 0 : M.channelId)) ? e : null;
        }),
        z = (0, P.hf)({
            quest: v,
            questContent: S.jn.MEMBERS_LIST,
            sourceQuestContent: S.jn.MEMBERS_LIST,
        }),
        q = (0, T.tP)(v),
        X = (null == v || null == (t = v.userStatus) ? void 0 : t.claimedAt) != null,
        Q = (null == v || null == (m = v.userStatus) ? void 0 : m.enrolledAt) != null,
        J = (null == v || null == (g = v.userStatus) ? void 0 : g.completedAt) != null,
        $ = (0, s.e7)([E.Z], () => E.Z.getState().theme),
        ee = (0, c.wj)($) ? x.BR.DARK : x.BR.LIGHT,
        et = (0, s.e7)([h.Z], () => h.Z.useReducedMotion),
        { ref: en, height: er } = (0, _.ZP)(),
        [ei, ea] = i.useState(et),
        eo = (0, p.Aq)(),
        es = (0, o.eg)();
    i.useEffect(() => {
        let e = es.current;
        return (
            null == e || e.addEventListener("scroll", V),
            () => {
                null == e || e.removeEventListener("scroll", V);
            }
        );
    }, [V, es]),
        i.useEffect(() => {
            let e = es.current,
                t = C.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => H());
            return (
                n.observe(e, {
                    childList: !0,
                    subtree: !0,
                }),
                () => {
                    n.disconnect();
                }
            );
        }, [C, es, H]);
    let el = (0, u.q_F)({
            from: { height: 0 },
            height: null != er ? er : 0,
            config: {
                tension: 450,
                friction: 45,
            },
            onRest: () => ea(!0),
        }),
        ec = (0, u.Yzy)(ei, {
            from: {
                opacity: 0,
                scale: 0,
            },
            enter: {
                opacity: 1,
                scale: 1,
            },
        }),
        eu = () => {
            eo.dispatch(D.CkL.POPOUT_CLOSE);
        },
        ed = "top" === F ? "".concat(U, " ").concat(U, " 0 0") : "0 0 ".concat(U, " ").concat(U);
    if (null == v || q || (X && !Z(M, K))) return null;
    let ef = () => {
            (0, I._3)({
                questId: v.id,
                questContent: S.jn.MEMBERS_LIST,
                questContentCTA: I.jZ.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: S.jn.MEMBERS_LIST,
            }),
                (0, R.openDisclosureModal)(v, {
                    content: S.jn.MEMBERS_LIST,
                    ctaContent: I.jZ.OPEN_DISCLOSURE,
                    sourceQuestContent: S.jn.MEMBERS_LIST,
                });
        },
        e_ = () => {
            (0, I._3)({
                questId: v.id,
                questContent: S.jn.MEMBERS_LIST,
                questContentCTA: I.jZ.LEARN_MORE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: S.jn.MEMBERS_LIST,
            }),
                (0, R.navigateToQuestHome)({
                    fromContent: S.jn.MEMBERS_LIST,
                    questId: v.id,
                });
        },
        ep = (e) => {
            e.stopPropagation(), ef();
        },
        eh = () => {
            Z(M, K) && null != K
                ? ((0, I._3)({
                      questId: v.id,
                      questContent: S.jn.MEMBERS_LIST,
                      questContentCTA: I.jZ.WATCH_STREAM,
                      trackGuildAndChannelMetadata: !0,
                      sourceQuestContent: S.jn.MEMBERS_LIST,
                  }),
                  (0, u.ZDy)(async () => {
                      let { default: e } = await n.e("85045").then(n.bind(n, 748862));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              k(
                                  {
                                      username: null != W ? W : "",
                                      onConfirm: () => (
                                          (0, I._3)({
                                              questId: v.id,
                                              questContent: S.jn.MEMBERS_LIST,
                                              questContentCTA: I.jZ.WATCH_STREAM_CONFIRM,
                                              trackGuildAndChannelMetadata: !0,
                                              sourceQuestContent: S.jn.MEMBERS_LIST,
                                          }),
                                          d.default.selectVoiceChannel(K.id),
                                          (0, f.iV)(M)
                                      ),
                                  },
                                  t,
                              ),
                          );
                  }))
                : e_();
        },
        em =
            J && !X
                ? {
                      headerText: L.intl.string(L.t.gHerLS),
                      ctaText: L.intl.string(L.t.cfY4PD),
                      handleClickCta: z,
                      tileAssetType: "reward",
                  }
                : Q && !X
                  ? {
                        headerText: L.intl.string(L.t.uH2sf3),
                        ctaText: L.intl.string(L.t.VN1Ajo),
                        handleClickCta: e_,
                        tileAssetType: "reward",
                    }
                  : Z(M, K)
                    ? {
                          headerText: L.intl.string(L.t.Bz6SkJ),
                          ctaText: L.intl.string(L.t.BXFP39),
                          handleClickCta: eh,
                          tileAssetType: "game",
                      }
                    : {
                          headerText: L.intl.string(L.t.Bz6SkJ),
                          ctaText: L.intl.string(L.t.BSXPZ2),
                          handleClickCta: e_,
                          tileAssetType: "game",
                      };
    return (0, r.jsx)(a.animated.div, {
        ref: (e) => {
            Y.current = e;
        },
        "aria-expanded": ei,
        className: j.wrapper,
        style: {
            width: null != (O = null == (y = C.current) ? void 0 : y.clientWidth) ? O : B,
            height: el.height,
            overflow: ei ? "visible" : "hidden",
            borderRadius: ed,
        },
        children: (0, r.jsxs)("div", {
            ref: (e) => {
                en.current = e;
            },
            className: j.container,
            style: { borderRadius: ed },
            children: [
                (0, r.jsxs)("div", {
                    className: j.top,
                    children: [
                        (0, r.jsxs)("div", {
                            className: j.left,
                            children: [
                                (0, r.jsx)(u.X6q, {
                                    variant: "heading-sm/semibold",
                                    children: em.headerText,
                                }),
                                (0, r.jsxs)(u.P3F, {
                                    className: j.help,
                                    onClick: (e) => {
                                        eu(), ep(e);
                                    },
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            className: j.helpText,
                                            children: L.intl.format(L.t["Lm8/mJ"], {
                                                gamePublisher: v.config.messages.gamePublisher,
                                            }),
                                        }),
                                        (0, r.jsx)(u.idN, {
                                            size: "custom",
                                            className: j.helpIcon,
                                            width: G,
                                            height: G,
                                            color: u.TVs.colors.INTERACTIVE_NORMAL,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: j.right,
                            children: (0, r.jsxs)("div", {
                                className: j.imgWrapper,
                                children: [
                                    ec(
                                        (e, t) =>
                                            t &&
                                            (0, r.jsx)(a.animated.div, {
                                                style: e,
                                                className: j.imgUnderlay,
                                            }),
                                    ),
                                    "game" === em.tileAssetType &&
                                        (0, r.jsx)("img", {
                                            alt: L.intl.formatToPlainString(L.t.IskzPj, {
                                                gameTitle: v.config.messages.gameTitle,
                                                gamePublisher: v.config.messages.gamePublisher,
                                            }),
                                            className: j.assetTile,
                                            src: (0, A.fh)(v, A.eC.GAME_TILE, ee).url,
                                        }),
                                    "reward" === em.tileAssetType &&
                                        (0, r.jsx)(N.Z, {
                                            className: j.assetTile,
                                            quest: v,
                                            questContent: S.jn.MEMBERS_LIST,
                                            learnMoreStyle: "icon",
                                            location: w.dr.MEMBERS_LIST,
                                            onClick: eu,
                                            sourceQuestContent: S.jn.MEMBERS_LIST,
                                        }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(l.zxk, {
                    variant: "secondary",
                    text: em.ctaText,
                    onClick: () => {
                        eu(), em.handleClickCta();
                    },
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
function V(e) {
    return null == e.quest || e.isQuestEnrollmentBlocked
        ? null
        : (0, r.jsx)(C.A, {
              questOrQuests: e.quest,
              questContent: S.jn.MEMBERS_LIST,
              trackGuildAndChannelMetadata: !0,
              sourceQuestContent: S.jn.MEMBERS_LIST,
              children: (t) => (0, r.jsx)(F, k({ impressionRef: t }, e)),
          });
}
