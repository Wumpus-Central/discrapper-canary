(n.r(t), n.d(t, { default: () => K }));
var a = n(477900),
    s = n(582128),
    i = n(399513),
    r = n(837381),
    l = n(323889),
    u = n(17928),
    c = n(821609),
    d = n(462887),
    o = n(717421),
    C = n(866323),
    T = n(192308),
    E = n(297264),
    S = n(939249),
    h = n(834730),
    M = n(290136),
    m = n(661531),
    I = n(730852),
    A = n(401843),
    p = n(765671),
    L = n(775602),
    f = n(507395),
    g = n(144779),
    x = n(267102),
    _ = n(363195),
    y = n(734057),
    R = n(738822),
    N = n(3738),
    v = n(291749),
    F = n(590202),
    B = n(792620),
    k = n(814793),
    j = n(657792),
    b = n(62405),
    P = n(398025),
    Q = n(617986),
    G = n(630037),
    O = n(190107),
    q = n(652215),
    w = n(818348),
    U = n(105292),
    D = n(457127);
let H = "11px";
function z(e) {
    let {
            quest: t,
            memberListItemRef: j,
            applicationStream: z,
            position: K,
            closePopout: W,
            updatePosition: V,
            impressionRef: X,
            name: Y,
        } = e,
        J = (0, u.bG)([y.A], () => y.A.getChannel(z?.channelId) ?? null),
        Z = (0, G.D)({ quest: t, questContent: R.uF.MEMBERS_LIST, sourceQuestContent: R.uF.MEMBERS_LIST }),
        $ = t?.userStatus?.claimedAt != null,
        ee = t?.userStatus?.enrolledAt != null,
        et = t?.userStatus?.completedAt != null,
        en = (0, u.bG)([_.A], () => _.A.getState().theme),
        ea = (0, d.M)(en) ? w.NJ.DARK : w.NJ.LIGHT,
        es = (0, u.bG)([L.Ay], () => L.Ay.useReducedMotion),
        { ref: ei, height: er } = (0, p.Ay)(),
        [el, eu] = s.useState(es),
        ec = (0, x.aL)(),
        ed = (0, r.KF)();
    (s.useEffect(() => {
        let e = ed.current;
        return (
            e?.addEventListener("scroll", W),
            () => {
                e?.removeEventListener("scroll", W);
            }
        );
    }, [W, ed]),
        s.useEffect(() => {
            let e = ed.current,
                t = j.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => V());
            return (
                n.observe(e, { childList: !0, subtree: !0 }),
                () => {
                    n.disconnect();
                }
            );
        }, [j, ed, V]));
    let eo = (0, o.z)({
            from: { height: 0 },
            height: er ?? 0,
            config: { tension: 450, friction: 45 },
            onRest: () => eu(!0),
        }),
        eC = (0, C.p)(el, { from: { opacity: 0, scale: 0 }, enter: { opacity: 1, scale: 1 } });
    function eT() {
        ec.dispatch(q.jej.POPOUT_CLOSE);
    }
    let eE = "top" === K ? "8px 8px 0 0" : "0 0 8px 8px";
    function eS() {
        ((0, f.r)({
            type: g.F.CLICK_INTERNAL,
            adCreativeType: l.p.QUEST,
            adCreativeId: t.id,
            questContentCTA: F.Cy.LEARN_MORE,
            surfaceId: R.uF.MEMBERS_LIST,
            sourceQuestContent: R.uF.MEMBERS_LIST,
            trackGuildAndChannelMetadata: !0,
        }),
            (0, Q.mA)({ fromContent: R.uF.MEMBERS_LIST, questId: t.id }));
    }
    function eh() {
        (0, k.Ll)(z, J) && null != J
            ? ((0, f.r)({
                  type: g.F.CLICK_INTERNAL,
                  adCreativeType: l.p.QUEST,
                  adCreativeId: t.id,
                  questContentCTA: F.Cy.WATCH_STREAM,
                  surfaceId: R.uF.MEMBERS_LIST,
                  sourceQuestContent: R.uF.MEMBERS_LIST,
                  trackGuildAndChannelMetadata: !0,
              }),
              (0, T.openModalLazy)(async () => {
                  let { default: e } = await n.e("972879").then(n.bind(n, 48274));
                  return (n) =>
                      (0, a.jsx)(e, {
                          username: Y ?? "",
                          onConfirm: () => (
                              (0, f.r)({
                                  type: g.F.CLICK_INTERNAL,
                                  adCreativeType: l.p.QUEST,
                                  adCreativeId: t.id,
                                  questContentCTA: F.Cy.WATCH_STREAM_CONFIRM,
                                  surfaceId: R.uF.MEMBERS_LIST,
                                  sourceQuestContent: R.uF.MEMBERS_LIST,
                                  trackGuildAndChannelMetadata: !0,
                              }),
                              I.default.selectVoiceChannel(J.id),
                              (0, A.Nl)(z)
                          ),
                          ...n,
                      });
              }))
            : eS();
    }
    let eM = (0, N.NA)({ quest: t }),
        em = (function () {
            if (et && !$)
                return {
                    headerText: U.intl.string(U.t.gHerLS),
                    ctaText: U.intl.string(U.t.cfY4PE),
                    handleClickCta: Z,
                    tileAssetType: "reward",
                };
            if (ee && !$)
                return {
                    headerText: U.intl.string(U.t.uH2sf2),
                    ctaText: U.intl.string(U.t.VN1Ajl),
                    handleClickCta: eS,
                    tileAssetType: "reward",
                };
            if ((0, k.Ll)(z, J))
                return {
                    headerText: U.intl.string(U.t.Bz6SkH),
                    ctaText: U.intl.string(U.t.BXFP30),
                    handleClickCta: eh,
                    tileAssetType: "game",
                };
            let e = (0, k.vA)(t) ? eM : U.intl.string(U.t["BSXPZ+"]);
            return {
                headerText:
                    (0, k.vA)(t) && (0, B.vl)(t) && !t.config.features.includes(O.Li.CLOUD_GAMING_ACTIVITY)
                        ? e
                        : U.intl.string(U.t.Bz6SkH),
                ctaText: e,
                handleClickCta: eS,
                tileAssetType: "game",
            };
        })();
    return (0, a.jsx)(i.animated.div, {
        ref: (e) => {
            X.current = e;
        },
        "aria-expanded": el,
        className: D.iE,
        style: {
            width: j.current?.clientWidth ?? 222,
            height: eo.height,
            overflow: el ? "visible" : "hidden",
            borderRadius: eE,
        },
        children: (0, a.jsxs)("div", {
            ref: (e) => {
                ei.current = e;
            },
            className: D.kL,
            style: { borderRadius: eE },
            children: [
                (0, a.jsxs)("div", {
                    className: D.Mn,
                    children: [
                        (0, a.jsxs)("div", {
                            className: D.kb,
                            children: [
                                (0, a.jsx)(E.D, { variant: "heading-sm/semibold", children: em.headerText }),
                                (0, a.jsxs)(S.D, {
                                    className: D.yj,
                                    onClick: (e) => {
                                        (eT(),
                                            e.stopPropagation(),
                                            (0, f.r)({
                                                type: g.F.CLICK_INTERNAL,
                                                adCreativeType: l.p.QUEST,
                                                adCreativeId: t.id,
                                                questContentCTA: F.Cy.OPEN_DISCLOSURE,
                                                surfaceId: R.uF.MEMBERS_LIST,
                                                sourceQuestContent: R.uF.MEMBERS_LIST,
                                                trackGuildAndChannelMetadata: !0,
                                            }),
                                            (0, Q.Zc)(t, {
                                                content: R.uF.MEMBERS_LIST,
                                                ctaContent: F.Cy.OPEN_DISCLOSURE,
                                                sourceQuestContent: R.uF.MEMBERS_LIST,
                                            }));
                                    },
                                    children: [
                                        (0, a.jsx)(h.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            className: D.BK,
                                            children: U.intl.format(U.t["Lm8/mH"], {
                                                gamePublisher: t.config.messages.gamePublisher,
                                            }),
                                        }),
                                        (0, a.jsx)(M.CircleQuestionIcon, {
                                            size: "custom",
                                            className: D.$y,
                                            width: H,
                                            height: H,
                                            color: m.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: D.pG,
                            children: (0, a.jsxs)("div", {
                                className: D.zc,
                                children: [
                                    eC(
                                        (e, t) =>
                                            t &&
                                            (0, a.jsx)(i.animated.div, {
                                                style: { opacity: (0, P.a)(e.opacity), scale: (0, P.a)(e.scale) },
                                                className: D.ae,
                                            }),
                                    ),
                                    "game" === em.tileAssetType &&
                                        (0, a.jsx)("img", {
                                            alt: U.intl.formatToPlainString(U.t.IskzPg, {
                                                gameTitle: t.config.messages.gameTitle,
                                                gamePublisher: t.config.messages.gamePublisher,
                                            }),
                                            className: D.TW,
                                            src: (0, v.tW)(t, v.fY.GAME_TILE, ea).url,
                                        }),
                                    "reward" === em.tileAssetType &&
                                        (0, a.jsx)(b.A, {
                                            className: D.TW,
                                            quest: t,
                                            location: O.rE.MEMBERS_LIST,
                                            questContent: R.uF.MEMBERS_LIST,
                                            learnMoreStyle: "icon",
                                            onClick: eT,
                                            sourceQuestContent: R.uF.MEMBERS_LIST,
                                        }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)(c.$, {
                    variant: "secondary",
                    text: em.ctaText,
                    onClick: () => {
                        (eT(), em.handleClickCta());
                    },
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
function K(e) {
    return (0, a.jsx)(j.R, {
        questOrQuests: e.quest,
        questContent: R.uF.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: R.uF.MEMBERS_LIST,
        children: (t) => (0, a.jsx)(z, { impressionRef: t, ...e }),
    });
}
