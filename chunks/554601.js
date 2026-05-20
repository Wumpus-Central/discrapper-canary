n.d(t, { A: () => lU }), n(775443);
var l,
    i,
    s,
    a,
    r = n(627968),
    o = n(64700),
    c = n(430690),
    d = n(793574),
    u = n(95561),
    m = n(688810),
    p = n(989837),
    h = n(485878),
    A = n(17928),
    f = n(696986),
    x = n(364522),
    N = n(435582),
    E = n(283488),
    g = n(264322),
    C = n(429913),
    _ = n(500049),
    j = n(735991),
    I = n(717048),
    v = n(503698),
    y = n.n(v),
    P = n(320448),
    S = n(559647),
    T = n(834730),
    b = n(939249),
    L = n(247928),
    R = n(821609),
    O = n(534514),
    M = n(155718),
    k = n(775602),
    U = n(721768),
    H = n(842209),
    D = n(392054),
    w = n(972995),
    W = n(390756),
    V = n(625494),
    B = n(211401),
    F = n(71393);
function G(e) {
    return o.useMemo(
        () =>
            "contextless" === e.type
                ? { channel: void 0, guild: void 0 }
                : { channel: e.channel, guild: F.A.getGuild(e.channel.guild_id) },
        [e],
    );
}
var z = n(56494),
    $ = n(26909),
    X = n(993748),
    Y = n(927813),
    q = n(60809),
    K = n(482030),
    Z = n(922016),
    Q = n(112173),
    J = n(980707),
    ee = n(477782),
    et = n(375708),
    en = n(436806);
function el(e) {
    let { sortOrder: t, onSortOptionClick: n, closePopout: l } = e,
        i = (e) => {
            n(e), l();
        };
    return (0, r.jsx)("div", {
        className: y()(q.Wx, en.k),
        children: (0, r.jsx)(J.W, {
            "data-menu-migrated": !0,
            navId: "command-list-sort",
            "aria-label": et.intl.string(et.t.Ugo9ud),
            hideScroller: !0,
            onClose: l,
            onSelect: l,
            children: (0, r.jsxs)(ee.rX, {
                label: et.intl.string(et.t.yeYaHf),
                children: [
                    (0, r.jsx)(ee.iD, {
                        id: "sort-by-popular",
                        group: "sort-by",
                        label: et.intl.string(et.t.SzxiqK),
                        action: () => i(q.Ug.POPULAR),
                        checked: t === q.Ug.POPULAR,
                    }),
                    (0, r.jsx)(ee.iD, {
                        id: "sort-by-alphabetical",
                        group: "sort-by",
                        label: et.intl.string(et.t.m8xsti),
                        action: () => i(q.Ug.ALPHABETICAL),
                        checked: t === q.Ug.ALPHABETICAL,
                    }),
                ],
            }),
        }),
    });
}
function ei(e) {
    let t,
        { sortOrder: n, onSortOptionClick: l } = e,
        i = o.useRef(null);
    switch (n) {
        case q.Ug.POPULAR:
            t = et.intl.string(et.t.SzxiqK);
            break;
        case q.Ug.ALPHABETICAL:
            t = et.intl.string(et.t.m8xsti);
    }
    return (0, r.jsx)(Z.Y, {
        targetElementRef: i,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(el, { sortOrder: n, onSortOptionClick: l, closePopout: t });
        },
        position: "bottom",
        align: "left",
        children: (e) =>
            (0, r.jsx)(R.$, {
                ...e,
                buttonRef: i,
                size: "sm",
                variant: "secondary",
                "aria-label": et.intl.string(et.t.yeYaHf),
                icon: Q.J,
                text: t,
            }),
    });
}
var es = n(652215),
    ea = n(73510),
    er = n(357887),
    eo = n(291657);
let ec = "placeholder",
    ed = [, , , , ,].fill(ec);
function eu(e) {
    let { context: t, command: n, section: l, sectionName: i } = e,
        s = o.useCallback(() => {
            let e = p.A.entrypoint();
            B.k(_.Se.COMMAND),
                (0, W.Mv)({ command: n, location: D.Oh.APP_LAUNCHER_APPLICATION_VIEW, sectionName: i }),
                "channel" === t.type &&
                    (U.Gf({
                        channelId: t.channel.id,
                        command: n,
                        section: l,
                        location: D.Oh.APP_LAUNCHER_APPLICATION_VIEW,
                        sectionName: i,
                        source: e,
                        commandOrigin: D.iw.APPLICATION_LAUNCHER,
                    }),
                    V._.dispatch(es.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: t.channel.id }));
        }, [t, n, l, i]),
        a = (n.options?.length ?? 0) > 0,
        c = o.useMemo(() => (0, K.SD)(n.displayDescription, void 0), [n.displayDescription]),
        d = o.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: eo.sd,
                    children: [
                        (0, r.jsx)(T.E, { variant: "text-sm/semibold", color: "text-strong", children: n.displayName }),
                        (0, r.jsx)(T.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: c }),
                    ],
                }),
            [n.displayName, c],
        );
    return (0, r.jsxs)(b.D, {
        className: eo.G5,
        onClick: s,
        children: [
            (0, r.jsx)(L.M, { className: eo.fg, children: d }),
            a ? (0, r.jsx)(P._, {}) : (0, r.jsx)(ep, { context: t, command: n, sectionName: i }),
        ],
    });
}
function em() {
    let e = (0, A.bG)([k.A], () => k.A.useReducedMotion),
        { styleLarge: t, styleSmall: n } = o.useMemo(
            () => ({
                styleLarge: { width: `${10 + 20 * Math.random()}%`, height: "auto" },
                styleSmall: { width: `${30 + 60 * Math.random()}%`, height: "auto" },
            }),
            [],
        ),
        l = o.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: eo.Vc,
                    children: [
                        (0, r.jsx)("div", {
                            className: er.jC,
                            style: t,
                            children: (0, r.jsx)(T.E, {
                                className: er.R,
                                variant: "text-sm/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: "_",
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: er.jC,
                            style: n,
                            children: (0, r.jsx)(T.E, {
                                className: er.R,
                                variant: "text-xs/medium",
                                color: "text-muted",
                                lineClamp: 1,
                                children: "_",
                            }),
                        }),
                    ],
                }),
            [t, n],
        );
    return (0, r.jsx)("div", { className: y()(eo.G5, er.NX, { [er.cb]: e }), children: l });
}
function ep(e) {
    let { context: t, command: n, sectionName: l } = e;
    (0, g.A4)(!0, !0), (0, g.SD)(t, !0, !0);
    let i = G(t),
        [s, a] = o.useState(!1),
        c = o.useCallback(
            async (e) => {
                if ("channel" !== t.type) return;
                e.stopPropagation();
                let s = p.A.lastShownEntrypoint();
                try {
                    let { isAuthorized: e } = await (0, w.q)({
                        applicationId: n.applicationId,
                        channel: "channel" === t.type ? t.channel : void 0,
                        commandIntegrationTypes: n.integration_types,
                        appLauncherContext: {
                            entrypoint: s,
                            location: D.Oh.APP_LAUNCHER_APPLICATION_VIEW,
                            sectionName: l,
                        },
                    });
                    e &&
                        (await (0, j.MJ)({
                            command: n,
                            optionValues: {},
                            context: i,
                            sectionName: l,
                            commandOrigin: D.iw.APP_LAUNCHER_APPLICATION_VIEW,
                        }),
                        B.k(_.Se.COMMAND));
                } finally {
                    a(!1);
                }
            },
            [n, t, l, i],
        );
    return (0, r.jsx)(R.$, {
        type: "submit",
        onClick: c,
        disabled: s,
        variant: "secondary",
        "aria-label": et.intl.formatToPlainString(et.t.UXw6W2, { commandName: n.untranslatedName }),
        text: et.intl.string(et.t.TXNS7S),
        icon: S.l,
        iconPosition: "end",
        size: "md",
    });
}
function eh(e) {
    let { context: t, commands: n, section: l, headerName: i, sectionName: s, children: a } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: eo.Zp,
                      children: [(0, r.jsx)(O.D, { variant: "heading-sm/semibold", children: i }), a],
                  }),
                  (0, r.jsx)("ul", {
                      className: eo.dO,
                      "aria-label": i,
                      children: n.map((e, n) =>
                          e === ec
                              ? (0, r.jsx)(em, {}, e + n)
                              : (0, r.jsx)(eu, { context: t, command: e, section: l, sectionName: s }, e.id),
                      ),
                  }),
              ],
          });
}
function eA(e) {
    let { context: t, application: n, sectionName: l, installOnDemand: i, setHasCommands: s } = e,
        {
            filterSection: a,
            commandsByActiveSection: c,
            sectionDescriptors: d,
            loading: u,
        } = H.cu({
            context: t,
            filters: { commandTypes: [M.kc.CHAT] },
            options: {
                placeholderCount: 0,
                limit: ea.Hi,
                includeFrecency: !0,
                allowApplicationState: i,
                installOnDemand: i,
                applicationId: n.id,
            },
            allowFetch: !0,
        }),
        m = d.find((e) => e.id === n.id) ?? null,
        {
            sortOrder: p,
            setSortOrder: h,
            commands: A,
            canSort: f,
        } = (function (e) {
            let { sectionId: t, commandsByActiveSection: n } = e,
                [l, i] = o.useState(q.Ug.ALPHABETICAL),
                s = o.useMemo(() => n.find((e) => e.section.id === t)?.data ?? [], [n, t]),
                { popularSortedCommands: a, canSort: r } = (function (e) {
                    let { alphabeticalSortedCommands: t } = e;
                    return o.useMemo(() => {
                        if (t.length <= 1) return { popularSortedCommands: t, canSort: !1 };
                        let e = !1,
                            n = t.map(
                                (t, n) => (
                                    (e = e || null != t.global_popularity_rank),
                                    { command: t, alphabeticalSortIndex: n }
                                ),
                            );
                        return e
                            ? (n.sort((e, t) => {
                                  let n = e.command.global_popularity_rank,
                                      l = t.command.global_popularity_rank;
                                  if (null != n && null != l) {
                                      if (n !== l) return n - l;
                                  } else if (null != n) return -1;
                                  else if (null != l) return 1;
                                  return e.alphabeticalSortIndex - t.alphabeticalSortIndex;
                              }),
                              {
                                  popularSortedCommands: n.map((e) => {
                                      let { command: t } = e;
                                      return t;
                                  }),
                                  canSort: !0,
                              })
                            : { popularSortedCommands: t, canSort: !1 };
                    }, [t]);
                })({ alphabeticalSortedCommands: s });
            o.useEffect(() => {
                X.Di(t, { dontRefetchMs: Y.A.Millis.DAY });
            }, [t]),
                o.useLayoutEffect(() => {
                    r && i(q.Ug.POPULAR);
                }, [r]);
            let c = s;
            switch (l) {
                case q.Ug.POPULAR:
                    c = a;
                    break;
                case q.Ug.ALPHABETICAL:
                    c = s;
            }
            return { sortOrder: l, setSortOrder: i, commands: c, canSort: r };
        })({ sectionId: n.id, commandsByActiveSection: c });
    o.useEffect(() => {
        a(n.id);
    }, [n.id, a]);
    let x = (function (e) {
        let { context: t, commands: n, limit: l = n.length } = e,
            i = G(t),
            s = (0, z.F)(i),
            a = o.useMemo(() => n.reduce((e, t) => ((e[t.id] = t), e), {}), [n]);
        return o.useMemo(
            () =>
                s
                    .map((e) => a[e])
                    .filter((e) => null != e)
                    .sort((e, t) => {
                        let n = $.Ay.getScoreWithoutLoadingLatest(i, e);
                        return $.Ay.getScoreWithoutLoadingLatest(i, t) - n;
                    })
                    .slice(0, l),
            [s, a, i, l],
        );
    })({ context: t, commands: A, limit: 5 });
    return (o.useEffect(() => {
        s(A.length > 0);
    }, [s, A]),
    u || 0 !== A.length)
        ? (0, r.jsxs)("ul", {
              className: eo.hQ,
              children: [
                  (0, r.jsx)(eh, {
                      context: t,
                      section: m,
                      commands: x,
                      headerName: et.intl.string(et.t.acSE0h),
                      sectionName: l,
                  }),
                  (0, r.jsx)(eh, {
                      context: t,
                      section: m,
                      commands: u ? ed : A,
                      headerName: et.intl.string(et.t.DUU9L3),
                      sectionName: l,
                      children: f && (0, r.jsx)(ei, { sortOrder: p, onSortOptionClick: h }),
                  }),
              ],
          })
        : null;
}
var ef = n(310784),
    ex = n.n(ef),
    eN = n(735438),
    eE = n.n(eN),
    eg = n(462887),
    eC = n(602853),
    e_ = n(661531),
    ej = n(736653),
    eI = n(654107),
    ev = n(998304),
    ey = n(548411),
    eP = n(735886);
function eS(e) {
    let { className: t } = e,
        { goBack: n } = (0, h.uM)(),
        l = o.useCallback(() => {
            n();
        }, [n]);
    return (0, r.jsx)(b.D, {
        onClick: l,
        className: y()(eP.v, t),
        "aria-label": et.intl.string(et.t.ybUZql),
        children: (0, r.jsx)(ey.Z, { size: "sm", color: e_.A.colors.INTERACTIVE_TEXT_ACTIVE }),
    });
}
var eT = n(691540),
    eb = n(857250),
    eL = n(97483),
    eR = n(173936),
    eO = n(192308),
    eM = n(365199),
    ek = n(658575),
    eU = n(342384),
    eH = n(20015),
    eD = n(204776),
    ew = n(50268),
    eW = n(928658),
    eV = n(395671),
    eB = n(967198),
    eF = n(287809),
    eG = n(174459),
    ez = n(957565),
    e$ = n(692848),
    eX = n(442433),
    eY = n(700210),
    eq = n(885386);
function eK(e) {
    let { application: t } = e,
        n = eB.A.getGuildId() ?? void 0;
    return (0, eY.A)({
        application: t,
        guildId: n,
        onItemClick: () => {
            (0, eO.closeModal)(q.gS), (0, B.k)(_.Se.DISMISSED);
        },
    });
}
function eZ(e) {
    let { application: t, onSelect: n } = e,
        l = eq.Q_.useSetting(),
        i = (0, ew.A)({ id: t.id, label: et.intl.string(et.t["+NP/b2"]) }),
        s = eK({ application: t });
    return (0, r.jsxs)(J.W, {
        "data-menu-migrated-auto": !0,
        navId: "activity-shelf-item-context",
        onClose: eX.Z_,
        "aria-label": et.intl.string(et.t.WkcHT9),
        onSelect: n,
        children: [
            null != s && (0, r.jsx)(ee.rX, { children: s }, "manage-app-actions"),
            l && (0, r.jsx)(ee.rX, { children: i }, "developer-actions"),
        ],
    });
}
var eQ = n(527080);
function eJ(e) {
    let { application: t, context: l, className: i, sectionName: s } = e,
        a = o.useRef(null),
        c = (0, A.bG)([p.A], () => p.A.entrypoint()),
        d = (0, j.Pp)(t),
        m = (0, eD.Ie)(d),
        h = (0, ek.G)(t.id),
        f = (0, A.bG)([eB.A], () => eB.A.getGuildId() ?? void 0, []),
        x = {
            location: D.Oh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: t.id,
            section_name: s,
            source: p.A.lastShownEntrypoint(),
        },
        N = eF.default.getCurrentUser(),
        E = (0, ew.A)({ id: t.id, label: et.intl.string(et.t["+NP/b2"]) }),
        g = eK({ application: t }),
        C = (0, eH.n)(t, es.gfo.EMBEDDED),
        _ = "channel" === l.type ? l.channel : void 0;
    return (0, r.jsxs)("div", {
        className: eQ.k,
        children: [
            (0, r.jsx)(b.D, {
                onClick: () => {
                    let e = C ? (0, eU.W)({ applicationId: t.id, referrerId: N?.id }) : (0, eU.V)({ id: t.id, ...d });
                    (0, ez.C)(e, () => (0, eT.P0)((0, eb.o)(et.intl.string(et.t["L/PwZf"]), eL.Ck.SUCCESS))),
                        eG.default.track(es.HAw.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: t.id,
                            source: c,
                        });
                },
                className: y()(eQ.v, i),
                "aria-label": et.intl.string(et.t.WqhZss),
                children: (0, r.jsx)(eR.q, { size: "sm", color: e_.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, r.jsx)(Z.Y, {
                targetElementRef: a,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, r.jsxs)(J.W, {
                        "data-menu-needs-review": !0,
                        className: q.qp,
                        navId: "app-details-more-menu",
                        onClose: l,
                        "aria-label": et.intl.string(et.t.AXIHpV),
                        onSelect: void 0,
                        children: [
                            (0, r.jsxs)(ee.rX, {
                                children: [
                                    h &&
                                        (0, r.jsx)(ee.Dr, {
                                            id: "open-storefront",
                                            label: et.intl.string(et.t.kRvlKJ),
                                            action: () => {
                                                (0, eO.openModalLazy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("81857"),
                                                        n.e("41816"),
                                                        n.e("5959"),
                                                        n.e("46461"),
                                                        n.e("67485"),
                                                        n.e("76090"),
                                                        n.e("12289"),
                                                        n.e("8516"),
                                                        n.e("45650"),
                                                        n.e("95700"),
                                                        n.e("27660"),
                                                        n.e("85484"),
                                                        n.e("98848"),
                                                        n.e("5067"),
                                                        n.e("19397"),
                                                        n.e("18320"),
                                                        n.e("64422"),
                                                        n.e("55990"),
                                                        n.e("6432"),
                                                        n.e("36407"),
                                                        n.e("69134"),
                                                        n.e("79705"),
                                                        n.e("23924"),
                                                        n.e("42205"),
                                                        n.e("71091"),
                                                        n.e("28367"),
                                                        n.e("10471"),
                                                        n.e("35429"),
                                                        n.e("63232"),
                                                        n.e("11301"),
                                                        n.e("60235"),
                                                        n.e("64827"),
                                                        n.e("30938"),
                                                        n.e("96643"),
                                                        n.e("94493"),
                                                        n.e("92789"),
                                                        n.e("47834"),
                                                        n.e("74016"),
                                                        n.e("19551"),
                                                        n.e("84569"),
                                                        n.e("6338"),
                                                        n.e("96811"),
                                                        n.e("7743"),
                                                        n.e("45959"),
                                                        n.e("60658"),
                                                        n.e("8304"),
                                                        n.e("18573"),
                                                        n.e("55936"),
                                                        n.e("31988"),
                                                        n.e("39667"),
                                                        n.e("5812"),
                                                        n.e("26073"),
                                                        n.e("34303"),
                                                        n.e("28866"),
                                                        n.e("1368"),
                                                        n.e("58038"),
                                                        n.e("93159"),
                                                        n.e("31716"),
                                                        n.e("8751"),
                                                        n.e("62931"),
                                                        n.e("81987"),
                                                        n.e("50417"),
                                                        n.e("62465"),
                                                        n.e("34530"),
                                                        n.e("6174"),
                                                        n.e("91146"),
                                                        n.e("46070"),
                                                        n.e("6949"),
                                                        n.e("53917"),
                                                        n.e("90365"),
                                                        n.e("89088"),
                                                        n.e("15186"),
                                                        n.e("52548"),
                                                        n.e("20287"),
                                                        n.e("77084"),
                                                        n.e("80230"),
                                                        n.e("37687"),
                                                        n.e("48900"),
                                                        n.e("95093"),
                                                        n.e("63645"),
                                                        n.e("71234"),
                                                        n.e("5636"),
                                                        n.e("87196"),
                                                        n.e("834"),
                                                        n.e("60177"),
                                                        n.e("21570"),
                                                        n.e("69933"),
                                                        n.e("26728"),
                                                        n.e("1354"),
                                                        n.e("20282"),
                                                        n.e("54282"),
                                                        n.e("23276"),
                                                        n.e("78412"),
                                                        n.e("63213"),
                                                        n.e("9662"),
                                                        n.e("80239"),
                                                        n.e("75016"),
                                                        n.e("4193"),
                                                        n.e("95444"),
                                                        n.e("76087"),
                                                        n.e("48720"),
                                                        n.e("33134"),
                                                        n.e("80112"),
                                                        n.e("59880"),
                                                        n.e("6723"),
                                                        n.e("54791"),
                                                        n.e("54819"),
                                                        n.e("31445"),
                                                        n.e("26437"),
                                                        n.e("78050"),
                                                        n.e("94607"),
                                                        n.e("99835"),
                                                        n.e("74907"),
                                                        n.e("68031"),
                                                        n.e("85384"),
                                                        n.e("20428"),
                                                    ]).then(n.bind(n, 719847));
                                                    return (n) =>
                                                        (0, r.jsx)(e, {
                                                            transitionState: n.transitionState,
                                                            onClose: n.onClose,
                                                            appId: t.id,
                                                            guildId: f,
                                                        });
                                                });
                                            },
                                        }),
                                    m
                                        ? (0, r.jsx)(ee.Dr, {
                                              id: "add-app",
                                              label: et.intl.string(et.t.NgXl3C),
                                              action: () => {
                                                  null == d.customInstallUrl &&
                                                      (0, u.zV)(es.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, x),
                                                      (0, e$.o)({
                                                          ...d,
                                                          oauth2Callback: (e) => {
                                                              let { location: t } = e;
                                                              null != t &&
                                                                  (0, u.zV)(
                                                                      es.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED,
                                                                      x,
                                                                  );
                                                          },
                                                          source: "app_launcher_app_details",
                                                      });
                                              },
                                          })
                                        : null,
                                    g,
                                ],
                            }),
                            (0, r.jsx)(ee.rX, {
                                children:
                                    t instanceof eV.Ay
                                        ? (0, r.jsx)(ee.Dr, {
                                              id: "report-app",
                                              color: "danger",
                                              label: et.intl.string(et.t.jhJzez),
                                              action: () => {
                                                  (0, eW.r3)({
                                                      application: t,
                                                      entrypoint: "app_launcher",
                                                      contextualGuildId: _?.getGuildId() ?? void 0,
                                                      contextualChannelId: _?.id,
                                                  });
                                              },
                                          })
                                        : null,
                            }),
                            (0, r.jsx)(ee.rX, { children: E }),
                        ],
                    });
                },
                align: "right",
                position: "bottom",
                children: (e) =>
                    (0, r.jsx)(b.D, {
                        innerRef: a,
                        ...e,
                        onClick: e.onClick,
                        className: y()(eQ.v, i),
                        "aria-label": et.intl.string(et.t["UKOtz+"]),
                        children: (0, r.jsx)(eM.j, { size: "sm", color: e_.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                    }),
            }),
        ],
    });
}
var e0 = n(379106);
function e1(e) {
    let [t, n] = o.useState(void 0);
    return (
        o.useEffect(() => {
            null != e.current && n(getComputedStyle(e.current));
        }, [e]),
        t
    );
}
function e8(e) {
    let { application: t, context: n, name: l, iconURL: i, scrollerRef: s, sectionName: a } = e,
        c = (0, eg.q)((0, ej.Ay)()),
        d = o.useRef(null),
        u = o.useRef(null),
        m = o.useRef(null),
        p = o.useRef(null),
        h = (0, eC.r)(e_.A.colors.BACKGROUND_BASE_LOW).hex(),
        A = (0, eI.Ay)("number" == typeof i ? "" : i, h ?? ""),
        f = o.useMemo(
            () =>
                (0, ev.lZ)({
                    foreground: ex()(A),
                    background: ex()(c ? "#000000" : "#ffffff"),
                    ratio: 5,
                    saturationFactor: 0.6,
                })?.hex() ?? A,
            [A, c],
        ),
        x = e1(d),
        N = e1(u),
        E = o.useCallback(() => {
            let e = s.current,
                t = d.current,
                n = m.current,
                l = p?.current,
                i = parseInt(x?.height ?? ""),
                a = parseInt(N?.height ?? "");
            if (null != e && null != t && null != n && !isNaN(i) && !isNaN(a)) {
                var r;
                let s = e.scrollTop ?? 0,
                    o = 0 !== e.scrollHeight ? e.scrollHeight : a + 20,
                    d = 0 !== e.clientHeight ? e.clientHeight : a + 20,
                    u = a - i,
                    m = (0, eN.clamp)(o - d, u + 1, a + 20),
                    p = u === m ? 1 : (0, eN.clamp)((s - u) / (m - u), 0, 1);
                (t.style.filter = `brightness(${1 + ((c ? 1.4 : 0.6) - 1) * p})`),
                    (t.style.backgroundColor = `color-mix(in oklab,${A} ${(1 - p) * 100}%, ${f})`),
                    (n.style.opacity = `${0 + +p}`),
                    (n.style.transform = `translateY(${(r = i / 4) + (0 - r) * p}px)`),
                    null != l && (l.style.opacity = `${1 + -1 * p}`);
            }
        }, [f, A, N?.height, c, s, x?.height]);
    return (
        o.useEffect(() => {
            E();
        }, [E, c]),
        o.useEffect(() => {
            let e = s.current,
                t = () => {
                    E();
                };
            return (
                e?.addEventListener("scroll", t),
                () => {
                    e?.removeEventListener("scroll", t);
                }
            );
        }, [s, E]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: e0.Xp,
                    children: [
                        (0, r.jsx)("div", {
                            className: e0.LO,
                            children: (0, r.jsx)("div", { className: e0.If, ref: d }),
                        }),
                        (0, r.jsx)("div", { className: e0.FY, children: (0, r.jsx)(eS, { className: e0.aY }) }),
                        (0, r.jsx)("div", {
                            className: e0.VW,
                            children: (0, r.jsx)(O.D, {
                                ref: m,
                                className: e0.n,
                                variant: "heading-lg/extrabold",
                                children: l,
                            }),
                        }),
                    ],
                }),
                (0, j.$B)(t)
                    ? (0, r.jsx)("div", {
                          ref: p,
                          className: e0.Ch,
                          children: (0, r.jsx)(eJ, { application: t, context: n, className: e0.aY, sectionName: a }),
                      })
                    : null,
                (0, r.jsx)("div", { ref: u, className: e0.b8, style: { backgroundColor: A } }),
            ],
        })
    );
}
var e4 = n(34188),
    e2 = n(700623),
    e3 = n(177953),
    e7 = n(825484),
    e9 = n(512950),
    e6 = n(900797),
    e5 = n(847374),
    te = n(10716),
    tt = n(702841),
    tn = n(150934),
    tl = n(292666),
    ti = n(892547),
    ts = n(909206),
    ta = n(393856);
function tr(e) {
    let { hideSearch: t, className: n } = e,
        {
            activityUrlOverride: l,
            useActivityUrlOverride: i,
            filter: s,
        } = (0, tt.cf)(
            [te.A],
            () => ({
                activityUrlOverride: te.A.getActivityUrlOverride(),
                useActivityUrlOverride: te.A.getUseActivityUrlOverride(),
                filter: te.A.getFilter(),
            }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: y()(ta.kL, n),
        children: [
            (0, r.jsx)(tn.S, { checked: i, onChange: ts.c2, label: et.intl.string(et.t["3TSGuD"]) }),
            i
                ? (0, r.jsx)(tl.k, {
                      label: et.intl.string(et.t["9rnmem"]),
                      disabled: !i,
                      value: l ?? void 0,
                      onChange: ts.ri,
                      placeholder: "https://localhost:3000",
                  })
                : null,
            !0 === t
                ? null
                : (0, r.jsx)("div", {
                      children: (0, r.jsx)(ti.I, {
                          size: "sm",
                          query: s,
                          onChange: ts._9,
                          onClear: function () {
                              ts._9("");
                          },
                      }),
                  }),
        ],
    });
}
var to = n(361926),
    tc = n(207371),
    td = n(177640),
    tu = n(607470),
    tm = n(713804),
    tp = n(396533),
    th = n(990078),
    tA = n(849269),
    tf = n(811024),
    tx = n(782091),
    tN = n(847381),
    tE = n(576705),
    tg = n(723702),
    tC = n(818348),
    t_ = n(698141);
function tj(e) {
    let { context: t, application: n, sectionName: l, primaryEntryPointCommand: i } = e,
        s = o.useId(),
        a = o.useCallback(() => {
            B.k(_.Se.ACTIVITY);
        }, []),
        c = o.useCallback(() => {
            p.A.shouldShowModal() && a();
        }, [a]),
        { submitting: d, wasSubmitting: u } = (0, t_.A)({
            applicationId: n.id,
            context: t,
            launchingComponentId: s,
            onSubmissionComplete: a,
        }),
        [m, h] = o.useState(!1),
        f = (0, tA.Hq)({ applicationId: n.id, context: t }),
        x = o.useMemo(() => (0, j.kF)(i.displayName), [i.displayName]),
        {
            onActivityItemSelected: N,
            buttonVariant: E,
            buttonText: g,
        } = (0, K.dn)({
            context: t,
            application: n,
            location: D.Oh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: l,
            commandName: x,
            autoDismissOnClick: f === tA.o6.LEAVE || (0, tc.x)(n),
            launchingComponentId: s,
            submitting: u ?? d,
            onConfirmActivityLaunchChecksAlertOpen: c,
        }),
        { disabled: C, reason: I } = (function (e) {
            let t,
                { context: n, application: l, activityAction: i } = e,
                s = "channel" === n.type ? n.channel : void 0,
                a = (0, A.bG)([tE.A], () => tE.A.can(tC.xB.USE_EMBEDDED_ACTIVITIES, s)),
                r = (0, tx.et)(s?.id),
                o = !1;
            switch (i) {
                case tA.o6.LEAVE:
                    o = !1;
                    break;
                case tA.o6.START:
                    null == s
                        ? (o = !1)
                        : s?.isGuildVoice()
                          ? r !== tx.xy.CAN_LAUNCH && (o = !0)
                          : (0, tf.pE)(s) || (o = !0);
                    break;
                case tA.o6.JOIN:
                    s?.isGuildVoice() ? (o = !a) : (0, tf.pE)(s) || (o = !0);
            }
            if (i !== tA.o6.LEAVE) {
                let e = l instanceof eV.Ay ? l.embeddedActivityConfig : l.embedded_activity_config,
                    n = (0, tN.A)((0, tg.getOS)());
                null == e || e.supported_platforms.includes(n)
                    ? s?.isThread() && ((o = !0), (t = et.intl.string(et.t.ddSR3v)))
                    : ((o = !1), (t = et.intl.string(et.t.z2YTgJ)));
            }
            return o && null == t && (t = et.intl.string(et.t.f41E1g)), { disabled: o, reason: t };
        })({ context: t, application: n, activityAction: f });
    return (0, r.jsx)(th.m, {
        shouldShow: null != I,
        __unsupportedReactNodeAsText: I,
        children: (0, r.jsx)(R.$, {
            type: "submit",
            size: "md",
            variant: E,
            disabled: C,
            loading: m,
            onClick: () => {
                h(!0),
                    N(),
                    eG.default.track(es.HAw.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                        application_id: n.id,
                        button_action: _.F5.USE_APP_COMMAND,
                    });
            },
            "aria-label": et.intl.formatToPlainString(et.t["XjP/R+"], { buttonText: g, applicationName: n.name }),
            text: g,
        }),
    });
}
var tI = n(522305);
function tv(e) {
    let { botUserId: t, applicationId: n, analyticsLocations: l } = e,
        [i, s] = o.useState(!1),
        a = o.useRef(null),
        c = o.useCallback(async () => {
            eG.default.track(es.HAw.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: n,
                button_action: _.F5.OPEN_APP_DM,
            }),
                s(!0);
            try {
                await (0, tI.Q)({ appId: n, botId: t, analyticsLocations: l });
            } catch (e) {}
            clearTimeout(a.current), s(!1);
        }, [t, n, l]);
    return (0, r.jsx)(R.$, {
        type: "submit",
        size: "md",
        variant: "secondary",
        loading: i,
        onClick: c,
        "aria-label": et.intl.string(et.t.AUM8hY),
        text: et.intl.string(et.t.AUM8hY),
    });
}
var ty = n(727510),
    tP = n(992595);
function tS(e) {
    let { context: t, application: n, videoUrl: l, imageCoverUrl: i, sectionName: s, hasCommands: a } = e,
        c = o.useMemo(() => (0, j.u8)(n) ?? "", [n]),
        d = (0, A.bG)([te.A], () => te.A.inDevModeForApplication(n.id)),
        { isSlideReady: u } = (0, h.uM)(),
        [m, p] = o.useState(!1);
    o.useEffect(() => {
        u && p(!0);
    }, [u]);
    let f = null != l;
    return (0, r.jsxs)("div", {
        className: ty.kL,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    f
                        ? (0, r.jsxs)("div", {
                              className: ty.j,
                              children: [
                                  m
                                      ? (0, r.jsx)(tu.A, {
                                            className: y()(ty.l3, ty.Ki),
                                            loop: !0,
                                            muted: !0,
                                            autoPlay: !0,
                                            src: l,
                                            poster: i,
                                        })
                                      : null,
                                  (0, r.jsx)("img", {
                                      className: ty.l3,
                                      src: i,
                                      "aria-label": et.intl.string(et.t.X4IxWL),
                                  }),
                              ],
                          })
                        : null,
                    (0, r.jsxs)("div", {
                        className: f ? ty.iw : ty.bH,
                        children: [
                            (0, r.jsx)(tb, { application: n }),
                            (0, r.jsx)(tL, { application: n }),
                            c.length > 0 ? (0, r.jsx)(tM, { description: c }) : null,
                            d
                                ? (0, r.jsx)("div", {
                                      className: ty.G,
                                      children: (0, r.jsx)(tr, { hideSearch: !0, className: ty.bz }),
                                  })
                                : null,
                            (0, r.jsx)(tO, {
                                context: t,
                                application: n,
                                sectionName: s,
                                isDeveloperOfThisApp: d,
                                hasCommands: a,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(tT, { application: n }),
        ],
    });
}
function tT(e) {
    let { application: t } = e,
        n = (0, j.K4)(t),
        l = (0, j.ME)(t);
    return n || l
        ? (0, r.jsxs)("div", {
              className: ty.fP,
              children: [
                  n
                      ? (0, r.jsxs)("div", {
                            className: ty.wi,
                            children: [
                                (0, r.jsx)(e4.U, { size: "sm", color: e_.A.colors.ICON_MUTED }),
                                (0, r.jsx)(T.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: et.intl.string(et.t["8z5B2U"]),
                                }),
                            ],
                        })
                      : null,
                  l
                      ? (0, r.jsxs)("div", {
                            className: ty.wi,
                            children: [
                                (0, r.jsx)(e2.d, { size: "sm", color: e_.A.colors.ICON_MUTED }),
                                (0, r.jsx)(T.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: et.intl.string(et.t["5khEk8"]),
                                }),
                            ],
                        })
                      : null,
              ],
          })
        : null;
}
function tb(e) {
    let { application: t } = e,
        n = (0, j.$B)(t) ? t.name : ((0, j.lq)(t) ?? ""),
        l = (0, j.b7)(t);
    return (0, r.jsxs)("div", {
        className: ty.gn,
        children: [
            (0, r.jsx)(O.D, { variant: "heading-xl/extrabold", lineClamp: 1, children: n }),
            l
                ? (0, r.jsx)("div", {
                      className: ty.s3,
                      children: (0, r.jsx)(T.E, {
                          variant: "text-xs/medium",
                          color: "text-default",
                          children: et.intl.string(et.t.LO4f0P),
                      }),
                  })
                : null,
        ],
    });
}
function tL(e) {
    let { application: t } = e,
        n = o.useMemo(() => ((0, j.$B)(t) ? (t?.tags ?? []) : []), [t]);
    return (0, j.Ag)(t)
        ? (0, r.jsxs)("div", {
              className: ty.Pc,
              children: [
                  (0, r.jsx)(tR, { application: t }),
                  n.map((e, t) =>
                      (0, r.jsx)(
                          "div",
                          {
                              className: ty.I8,
                              children: (0, r.jsx)(T.E, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: e,
                              }),
                          },
                          e + t,
                      ),
                  ),
              ],
          })
        : null;
}
function tR(e) {
    let { application: t } = e;
    if (!(0, j.Ag)(t)) return null;
    let n = ((0, j.$B)(t) ? (t instanceof eV.Ay ? t.maxParticipants : t.max_participants) : 0) ?? 0;
    return (0, r.jsxs)("div", {
        className: ty.I8,
        children: [
            (0, r.jsx)(e3.n, { size: "xs", color: e_.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            (0, r.jsx)(T.E, {
                variant: "text-sm/semibold",
                color: "interactive-text-default",
                children: n > 0 ? `1-${n}` : et.intl.string(et.t.zMNEiF),
            }),
        ],
    });
}
function tO(e) {
    let { context: t, application: n, sectionName: l, hasCommands: i, isDeveloperOfThisApp: s } = e,
        a = (0, to.E0)(t, n.id),
        c = (0, C.h)(n.id),
        d = c?.bot?.id,
        u = (function (e) {
            let { context: t, application: n, botUserId: l } = e,
                i = (0, to.Vr)({ context: t, applicationId: n.id, botUserId: l }),
                s = (0, td.A)("channel" === t.type ? t.channel : void 0);
            return !(0, tc.x)(n) && i && null != l && !s;
        })({ context: t, application: n, botUserId: d }),
        { analyticsLocations: p } = (0, m.Ay)();
    return (o.useEffect(() => {
        if (!(0, j.$B)(n) || !(0, j.Ag)(n)) return;
        let e = setTimeout(() => {
            (null == a || null == d) &&
                eG.default.track(es.HAw.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                    application_id: n.id,
                    is_primary_entry_point_command_non_null: null != a,
                    is_bot_user_id_non_null: null != d,
                    show_try_it_out_button: u,
                });
        }, 2e3);
        return () => clearTimeout(e);
    }, [n, a, d, u]),
    (0, j.$B)(n) && (0, j.Ag)(n))
        ? null != a && null != d
            ? (0, r.jsxs)(e7.e, {
                  fullWidth: !0,
                  children: [
                      (0, r.jsx)(tj, { context: t, application: n, sectionName: l, primaryEntryPointCommand: a }),
                      u && null != d
                          ? (0, r.jsx)(tv, { botUserId: d, applicationId: n.id, analyticsLocations: p })
                          : null,
                  ],
              })
            : s && !i && (0, j.Ag)(n)
              ? (0, r.jsx)(e9.p, {
                    className: ty.ai,
                    messageType: e9.Y.WARNING,
                    children: et.intl.format(et.t["s/3hjE"], {}),
                })
              : null
        : null;
}
function tM(e) {
    let { description: t } = e,
        [n, l] = o.useState(!0);
    o.useLayoutEffect(() => l(!1), []);
    let i = o.useMemo(() => (0, tm.parseBioReact)(t), [t]),
        {
            ref: s,
            lineHeight: a,
            lineCount: c,
        } = (function () {
            let e = o.useRef(null),
                [t, n] = o.useState(null),
                [l, i] = o.useState(null);
            return (
                o.useLayoutEffect(() => {
                    let t = e.current;
                    if (null === t || 0 === t.clientHeight) return;
                    let l = parseInt(getComputedStyle(t).lineHeight);
                    isNaN(l) || (n(l), i(Math.floor(t.clientHeight / l)));
                }, []),
                { ref: e, lineHeight: t, lineCount: l }
            );
        })(),
        d = o.useMemo(() => {
            if (null == a || null == c) return { key: 0 };
            let e = a * c;
            return { key: 1, minHeightOverride: Math.min(e, 2 * a), maxHeightOverride: e };
        }, [c, a]),
        { ref: u, isTransitioning: m, onTransitionEnd: p } = (0, tp.A)({ isExpanded: n, ...d }),
        h = n || m;
    return (0, r.jsxs)("div", {
        className: ty.iQ,
        children: [
            (0, r.jsx)("div", {
                ref: u,
                className: ty.ZT,
                onTransitionEnd: p,
                children: (0, r.jsx)(T.E, {
                    ref: s,
                    className: tP.PT,
                    variant: "text-sm/medium",
                    lineClamp: h ? void 0 : 2,
                    style: { maxHeight: h ? void 0 : d.minHeightOverride },
                    children: i,
                }),
            }),
            null != c && c > 2
                ? (0, r.jsxs)(b.D, {
                      className: ty.lP,
                      onClick: () => l((e) => !e),
                      children: [
                          (0, r.jsx)(T.E, {
                              variant: "text-sm/semibold",
                              color: "text-brand",
                              children: h ? et.intl.string(et.t.u4YJ8g) : et.intl.string(et.t["N/tajD"]),
                          }),
                          h
                              ? (0, r.jsx)(e6.t, { size: "sm", color: e_.A.colors.TEXT_BRAND })
                              : (0, r.jsx)(e5.a, { size: "sm", color: e_.A.colors.TEXT_BRAND }),
                      ],
                  })
                : null,
        ],
    });
}
var tk = n(441031),
    tU = n(291071);
function tH(e) {
    let { context: t, application: n, sectionName: l } = e,
        i = "channel" === t.type ? t.channel : void 0,
        s = (0, A.bG)([p.A], () => p.A.entrypoint()),
        a = (0, C.h)(n.id === ea.Ik.BUILT_IN ? null : n.id) ?? n,
        c = (0, j.Ag)(a),
        d = o.useRef(null),
        [u, m] = o.useState(!1),
        { iconURL: h, name: N } = o.useMemo(() => (0, j.X2)(a, { fakeAppIconURL: tU, size: 84 }), [a]),
        E = (0, g.A4)(!0, !0),
        v = (0, g.ON)(i?.guild_id, !0),
        y = o.useMemo(() => (0, g.Sx)(t, a.id), [E, v, t, a.id]),
        P = !y.isGuildInstalled && !y.isUserInstalled;
    return (
        o.useEffect(() => {
            P && g.Ay.queryInstallOnDemandApp(a.id, i?.id);
        }, [a.id, i?.id, P]),
        (0, r.jsxs)(x.d_, {
            className: tk.k,
            fade: !0,
            ref: d,
            role: "region",
            "aria-label": et.intl.formatToPlainString(et.t["4OP4Uk"], { applicationName: N }),
            children: [
                (0, r.jsx)(e8, { application: a, context: t, name: N, iconURL: h, scrollerRef: d, sectionName: l }),
                null != h && (0, r.jsx)(I.A, { src: h, className: tk.Z }),
                (0, r.jsx)(f.A, { size: 54 }),
                (0, r.jsx)(c ? tD : tS, { context: t, application: a, sectionName: l, hasCommands: u }),
                s === _.s4.TEXT
                    ? (0, r.jsx)(eA, {
                          context: t,
                          application: a,
                          sectionName: l,
                          installOnDemand: P,
                          setHasCommands: m,
                      })
                    : null,
            ],
        })
    );
}
function tD(e) {
    let { context: t, application: n, sectionName: l, hasCommands: i } = e,
        s = (0, E.A)({ applicationId: n.id, size: 2048, names: ["embedded_cover"], format: "webp" }),
        a = (0, j.Cx)(n),
        o =
            null != a && null != a.activity_preview_video_asset_id
                ? (0, N.A)(n.id, a.activity_preview_video_asset_id)
                : null;
    return (0, r.jsx)(tS, {
        context: t,
        application: n,
        imageCoverUrl: s.url,
        videoUrl: o,
        sectionName: l,
        hasCommands: i,
    });
}
n(321073), n(938796);
var tw = n(724002),
    tW =
        (((l = {})[(l.APPENDS_REMAINING_ACTIVITIES = 1)] = "APPENDS_REMAINING_ACTIVITIES"),
        (l[(l.DEFAULT = 0)] = "DEFAULT"),
        l),
    tV =
        (((i = {})[(i.PROMOTED = 1)] = "PROMOTED"),
        (i[(i.SKIPS_APPLICATION_DISCOVERABILITY_VALIDATION = 2)] = "SKIPS_APPLICATION_DISCOVERABILITY_VALIDATION"),
        (i[(i.DEFAULT = 0)] = "DEFAULT"),
        i),
    tB = n(287174),
    tF = n(487899),
    tG = n(239314),
    tz = n(665260),
    t$ = n(795816),
    tX = n(648027),
    tY = n(170148);
function tq() {
    let e = (0, tY.z)(),
        t = eq.Q_.getSetting(),
        n = (0, A.bG)([te.A], () => te.A.getFetchState(), []);
    return (
        o.useEffect(() => {
            e && t && n === te.$.INITIALIZED && (0, t$.SE)();
        }, [e, n, t]),
        null
    );
}
let tK = (0, n(945810).mj)({
    kind: "user",
    name: "2025-01-allow-nonstaff-to-preview-app-collections",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tZ = n(111042),
    tQ = n(939635),
    tJ = n(111162),
    t0 = n(403362),
    t1 = n(179771),
    t8 = n(824552),
    t4 = n(168186),
    t2 = n(594061),
    t3 = n(935208),
    t7 = n(630248),
    t9 = n(355097);
function t6(e, t) {
    o.useEffect(() => {
        t2.bW.loadIfUncached(t9.oD.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let n = (0, A.bG)([t7.A], () => t7.A.getApplicationFrecencyWithoutLoadingLatest()),
        l = o.useMemo(
            () =>
                null == t || 0 === t.length
                    ? e
                    : e.map((e) => ({ ...e, isUserApp: t?.some((t) => t.application.id === e.id) ?? !1 })),
            [e, t],
        ),
        i = o.useMemo(() => t?.filter((t) => !e.some((e) => e.id === t.application.id)), [e, t]),
        s = o.useMemo(() => {
            i?.forEach((e) => {
                let t = t3.default.extractTimestamp(e.id);
                null == n.getEntry(e.application.id) && n.track(e.application.id, { timestamp: t });
            }),
                n.compute();
            let e = i?.map((e) => (0, t4.bq)(e.application, !0)) ?? [],
                t = [...l];
            return (
                t.push(...e),
                t.sort((e, t) => {
                    let l = (n.getScore(t.id) ?? 0) - (n.getScore(e.id) ?? 0);
                    return 0 !== l ? l : e.name.localeCompare(t.name);
                }),
                t
            );
        }, [l, n, i]);
    return o.useMemo(() => {
        let e, i;
        t?.forEach((t) => {
            let n = t3.default.extractTimestamp(t.id);
            (null == i || n > i) && ((e = t), (i = n));
        }),
            l.forEach((t) => {
                let l = Math.max(...(n.getEntry(t.id)?.recentUses ?? []));
                (null == i || l > i) && ((e = t), (i = l));
            });
        let a = e?.application?.id ?? "";
        return [...s.filter((e) => e.id === a), ...s.filter((e) => e.id !== a)];
    }, [s, l, n, t]);
}
var t5 = n(546183),
    ne = n(228366);
let nt = 10 * Y.A.Millis.MINUTE,
    nn = { lastUsedCommandId: null, lastUsedTimeMs: null };
class nl extends A.Ay.PersistedStore {
    static displayName = "AppLauncherLastUsedCommandStore";
    static persistKey = "AppLauncherLastUsedCommandStore";
    initialize(e) {
        null != e && ((nn.lastUsedCommandId = e.lastUsedCommandId), (nn.lastUsedTimeMs = e.lastUsedTimeMs));
    }
    getState() {
        return nn;
    }
    getLastUsedCommandId() {
        let e = Date.now();
        return null == nn.lastUsedTimeMs || null == nn.lastUsedCommandId
            ? null
            : (e > nn.lastUsedTimeMs + nt && ((nn.lastUsedCommandId = null), (nn.lastUsedTimeMs = null)),
              nn.lastUsedCommandId);
    }
}
new nl(ne.h, {
    APPLICATION_COMMAND_USED: function (e) {
        let { command: t } = e;
        (nn.lastUsedCommandId = t.id), (nn.lastUsedTimeMs = Date.now());
    },
});
var ni = n(360469);
let ns = { commandTypes: [M.kc.CHAT, M.kc.PRIMARY_ENTRY_POINT] },
    na = { placeholderCount: 0, limit: ea.Hi, includeFrecency: !0 };
var nr = n(827785);
function no() {
    return eq.Q_.useSetting();
}
var nc = n(696292),
    nd = n(136722),
    nu = n(289873),
    nm = n(475743),
    np = n(933958),
    nh = n(205184),
    nA = n(994500),
    nf = n(881343),
    nx = n(697675),
    nN = n(91242),
    nE = n(977445),
    ng = n(932413),
    nC = n(953727);
function n_(e) {
    let { width: t = 24, height: n = 24, color: l = "currentColor", foreground: i, ...s } = e;
    return (0, r.jsx)("svg", {
        ...(0, nC.A)(s),
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        fill: "none",
        children: (0, r.jsx)("path", {
            d: "M7.39344 5.33333L5.33333 7.39344V16.6065L7.39348 18.6667H16.6065L18.6667 16.6065V7.39344L16.6065 5.33333H7.39344ZM11.0485 15.6879H9.20459C9.20459 14.1627 7.96392 12.922 6.43868 12.922V11.078C7.96392 11.078 9.20459 9.83735 9.20459 8.31211H11.0485C11.0485 9.82534 10.3057 11.159 9.17607 12C10.3057 12.8411 11.0485 14.1747 11.0485 15.6879ZM17.5556 12.922C16.0304 12.922 14.7896 14.1627 14.7896 15.6879H12.9457C12.9457 14.1747 13.6885 12.8411 14.8181 12C13.6885 11.159 12.9457 9.82534 12.9457 8.31211H14.7896C14.7896 9.83735 16.0304 11.078 17.5556 11.078V12.922Z",
            fill: l,
            className: i,
        }),
    });
}
var nj = n(486020),
    nI = n(786115),
    nv = n(838541),
    ny = n(666280),
    nP = n(3697),
    nS =
        (((s = {}).ICON = "icon"),
        (s.ROW = "row"),
        (s.NO_BANNER = "no_banner"),
        (s.MEDIUM_BANNER = "medium_banner"),
        (s.LARGE_BANNER = "large_banner"),
        s);
function nT(e) {
    let {
            application: t,
            look: n = "large_banner",
            onClick: l,
            imageStyle: i,
            enableVideoBanner: s = !0,
            children: a,
            sectionName: o,
            resultsPosition: c,
            sectionOverallPosition: d,
            tracksImpression: u = !0,
            disabled: m = !1,
            overrideImageUrl: p,
            showsPromoted: h,
        } = e,
        A = (0, nm.A)(m) ?? m;
    return (0, r.jsx)(nb, {
        application: t,
        onClick: l,
        sectionName: o,
        resultsPosition: c,
        disabled: m,
        tracksImpression: u,
        look: n,
        sectionOverallPosition: d,
        children: (0, r.jsx)(ng.A, {
            applicationId: t.id,
            questContent: nc.u.APP_LAUNCHER,
            children: (e) =>
                (0, r.jsx)("div", {
                    ref: e,
                    children:
                        "icon" === n
                            ? (0, r.jsx)(nL, { application: t, imageStyle: i, children: a })
                            : (0, r.jsx)(nR, {
                                  application: t,
                                  look: n,
                                  imageStyle: i,
                                  enableVideoBanner: s,
                                  disableBannerFadeIn: A !== m,
                                  overrideImageUrl: p,
                                  showsPromoted: h,
                                  children: a,
                              }),
                }),
        }),
    });
}
function nb(e) {
    let {
            application: t,
            onClick: n,
            children: l,
            sectionName: i,
            resultsPosition: s,
            sectionOverallPosition: a,
            tracksImpression: c,
            disabled: d,
            containerStyle: u,
            look: m,
        } = e,
        p = o.useCallback(
            (e) => {
                if ((0, j.$B)(t)) {
                    let n = t instanceof eV.Ay ? t : eV.Ay.createFromServer(t);
                    (0, eX.jA)(e, (e) => (0, r.jsx)(eZ, { application: n, ...e }));
                }
            },
            [t],
        ),
        { name: h, description: A } = o.useMemo(() => (0, j.X2)(t, { fakeAppIconURL: tU }), [t]),
        { trackItemImpressionRef: f } = (0, nI.A)({
            applicationId: t.id,
            applicationFlags: (0, j.$B)(t) ? nd.pG(32, (0, eH.K)(t)) : void 0,
            sectionName: i,
            sectionPosition: s,
            sectionOverallPosition: a,
            promotionalLabel: (0, j.Ii)(t),
        }),
        x = o.useMemo(() => {
            let e = d ? ny.Qz : ny.kL;
            return y()(e, { [ny.uS]: "row" !== m, [ny.qd]: "row" === m, [ny.oI]: "icon" === m }, u);
        }, [u, d, m]);
    return d
        ? (0, r.jsx)("div", { ref: c ? f : void 0, className: x, children: l })
        : (0, r.jsx)(b.D, {
              innerRef: c ? f : void 0,
              className: x,
              onClick: n,
              onContextMenu: p,
              "aria-label": et.intl.formatToPlainString(et.t["zLhr9+"], {
                  applicationName: h,
                  applicationDescription: A,
              }),
              children: (0, r.jsx)(L.M, { children: l }),
          });
}
function nL(e) {
    let { application: t, imageStyle: n, children: l } = e,
        { name: i, iconURL: s } = o.useMemo(() => (0, j.X2)(t, { fakeAppIconURL: tU }), [t]);
    return (0, r.jsx)(th.m, {
        __unsupportedReactNodeAsText: i,
        children: (0, r.jsxs)("div", {
            className: y()(ny.zc, n),
            children: [(0, r.jsx)(I.A, { src: s, className: ny.oI, "aria-hidden": !0, rendersPlaceholder: !0 }), l],
        }),
    });
}
function nR(e) {
    let {
            application: t,
            look: n,
            imageStyle: l,
            enableVideoBanner: i,
            disableBannerFadeIn: s,
            children: a,
            overrideImageUrl: c,
            showsPromoted: d,
        } = e,
        { iconURL: u, name: m, description: p } = o.useMemo(() => (0, j.X2)(t, { fakeAppIconURL: tU }), [t]),
        h = o.useMemo(() => (null == p ? null : (0, K.SD)(p)), [p]),
        A = (0, eI.Ay)(u, ""),
        [f, x] = o.useState(!1),
        N = o.useCallback(() => {
            !0 === i && x(!0);
        }, [i]),
        E = d || (0, j.NO)(t),
        g = "large_banner" === n || "medium_banner" === n,
        C = o.useCallback(() => x(!1), []),
        _ = (0, nE.u)(t.id),
        v = (0, j.fl)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            g
                ? (0, r.jsxs)("div", {
                      onMouseEnter: N,
                      onFocus: N,
                      onMouseLeave: C,
                      onBlur: C,
                      className: y()(ny.zK, { [ny.i2]: "medium_banner" === n, [ny.ir]: "large_banner" === n }),
                      children: [
                          (0, r.jsx)("span", {
                              className: l,
                              children: (0, r.jsx)(nk, {
                                  application: t,
                                  fallbackColor: A,
                                  showVideo: f,
                                  disableFadeIn: s,
                                  overrideImageUrl: c,
                              }),
                          }),
                          _ || E || v !== M.Hr.NONE
                              ? (0, r.jsxs)("div", {
                                    className: ny.YN,
                                    children: [
                                        E &&
                                            (0, r.jsx)("div", {
                                                className: ny.Ag,
                                                children: (0, r.jsx)(O.D, {
                                                    variant: "text-xxs/medium",
                                                    color: "text-strong",
                                                    children: et.intl.string(et.t["/eVltv"]),
                                                }),
                                            }),
                                        _ && (0, r.jsx)(nO, {}),
                                        v !== M.Hr.NONE && (0, r.jsx)(nx.A, { labelType: v }),
                                    ],
                                })
                              : null,
                          (0, r.jsx)("div", { className: ny.Re, children: a }),
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: y()(ny.TD, { [ny.Ne]: "row" === n }),
                children: [
                    (0, r.jsx)(I.A, {
                        src: u,
                        className: y()(ny.Kk, { [ny.aL]: "row" === n }),
                        "aria-hidden": !0,
                        rendersPlaceholder: !0,
                    }),
                    (0, r.jsxs)("div", {
                        className: ny.eV,
                        children: [
                            (0, r.jsxs)("div", {
                                className: ny.mD,
                                children: [
                                    (0, r.jsx)(O.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        lineClamp: 1,
                                        children: m,
                                    }),
                                    !g && E
                                        ? (0, r.jsx)("div", {
                                              className: ny.nb,
                                              children: (0, r.jsx)(T.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-muted",
                                                  children: et.intl.string(et.t["/eVltv"]),
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(nM, { application: t }),
                                ],
                            }),
                            (0, r.jsx)(T.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: h,
                            }),
                        ],
                    }),
                    "row" === n ? (0, r.jsx)("div", { className: ny.ek }) : null,
                ],
            }),
        ],
    });
}
function nO() {
    return (0, r.jsx)(th.m, {
        text: et.intl.string(et.t.CfTySQ),
        children: (0, r.jsx)("div", { className: ny.hh, children: (0, r.jsx)(n_, { className: ny.bB }) }),
    });
}
function nM(e) {
    let { application: t } = e,
        n = eF.default.getCurrentUser();
    if (!n?.isStaff() && !n?.isStaffPersonal()) return null;
    let l = (0, j.Cx)(t);
    if (null == l || !(0, j.$B)(t)) return null;
    let i = (0, tA.l$)(t, l);
    return null == i
        ? null
        : (0, r.jsx)(th.m, {
              __unsupportedReactNodeAsText: i,
              children: (0, r.jsx)("img", { className: ny.io, alt: i, src: nP }),
          });
}
function nk(e) {
    let { application: t, fallbackColor: n, showVideo: l, disableFadeIn: i, overrideImageUrl: s } = e;
    if (null != s)
        return (0, r.jsx)("img", { src: s, alt: (0, j.$B)(t) ? t.name : "", className: y()(ny._e, { [ny.cG]: i }) });
    if ((0, j.$B)(t)) {
        if ((0, j.Ag)(t)) return (0, r.jsx)(nU, { application: t, showVideo: l, disableFadeIn: i });
        if (null != t.bot) return (0, r.jsx)(nH, { bot: t.bot, fallbackColor: n, disableFadeIn: i });
    }
    return (0, r.jsx)(nD, { fallbackColor: n, disableFadeIn: i });
}
function nU(e) {
    let { application: t, showVideo: n, disableFadeIn: l } = e,
        i = (0, E.A)({ applicationId: t.id, size: 600, names: ["embedded_cover"], format: "webp" }),
        s = o.useMemo(() => {
            let e = (0, j.Cx)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, N.A)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        [a, c] = o.useState(n);
    o.useEffect(() => {
        n && c(!0);
    }, [n]);
    let d = y()(ny._e, { [ny.cG]: l });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != s && a
                ? (0, r.jsx)("div", {
                      className: ny.SF,
                      children: (0, r.jsx)("div", {
                          className: y()(ny.T0, { [ny.Q]: !n }),
                          onAnimationEnd: () => (n ? null : c(!1)),
                          children: (0, r.jsx)(tu.A, {
                              src: s,
                              mediaLayoutType: nv.dG.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0,
                          }),
                      }),
                  })
                : null,
            (0, r.jsx)(nf.A, {
                imageBackground: i,
                applicationName: t.name,
                imageClassName: d,
                imageNotFoundClassName: d,
            }),
        ],
    });
}
function nH(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: l } = e,
        i = (0, A.bG)([k.A], () => k.A.useReducedMotion),
        s = (0, nj.z)({ id: t.id, banner: t.banner, canAnimate: !i, size: 600 });
    return null == s
        ? (0, r.jsx)(nD, { fallbackColor: n, disableFadeIn: l })
        : (0, r.jsx)("img", { src: s, alt: "", className: y()(ny._e, { [ny.cG]: l }) });
}
function nD(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, r.jsx)("div", { className: y()(ny._e, { [ny.cG]: n }), style: { backgroundColor: t } });
}
function nw(e) {
    let { application: t, sectionName: n, resultsPosition: l, query: i, installOnDemand: s, location: a } = e,
        { pushHistory: r } = (0, h.uM)(),
        { friends: c } = (function (e) {
            let t = (0, nh.s)(e.id),
                n = (0, A.cf)([eF.default, nA.A], () => {
                    let e = {};
                    for (let n of t.values()) {
                        let t = eF.default.getUser(n.author_id),
                            l = nA.A.isFriend(n.author_id);
                        null != t && l && (e[t.id] = n.id);
                    }
                    return e;
                }),
                [l, i] = o.useState([]);
            return (
                o.useEffect(() => {
                    let e = eE().sortBy(Object.entries(n), (e) => {
                        let [t, n] = e;
                        return -t3.default.extractTimestamp(n);
                    });
                    i(
                        eE()
                            .map(e, (e) => {
                                let [t, n] = e;
                                return eF.default.getUser(t);
                            })
                            .filter((e) => null != e),
                    );
                }, [n]),
                { friends: l, friendsLastPlayed: n }
            );
        })(t);
    return {
        onClickAppCard: o.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, u.zV)(es.HAw.APPLICATION_COMMAND_SECTION_SELECTED, {
                        application_id: t.id,
                        section_name: n,
                        search_results_position: l,
                        source: p.A.entrypoint(),
                        promotional_label: (0, j.Ii)(t),
                        location: a,
                        query: i,
                        num_friends_who_play: c.length,
                    }),
                    r({ type: h.Wy.APPLICATION, application: t, installOnDemand: s, sectionName: n });
            },
            [t, s, a, r, i, l, n, c],
        ),
    };
}
function nW(e) {
    let { onClickAppCard: t } = nw(e);
    return (0, r.jsx)(nT, { ...e, onClick: t });
}
function nV(e) {
    let {
        context: t,
        application: n,
        location: l,
        sectionName: i,
        isOneClickCTA: s,
        fetchesApplication: a = !0,
        ...c
    } = e;
    if (!(0, j.$B)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
    let d = o.useId(),
        [u, m, p] = (0, A.yK)([np.Ay, nN.A], () => [
            np.Ay.isLaunchingActivity(),
            np.Ay.getLaunchState(n.id, "channel" === t.type ? t.channel.id : void 0),
            nN.A.isLaunchingFrame(n.id),
        ]),
        h = (null != m && m.isLaunching && m.componentId === d) || p,
        {
            onActivityItemSelected: f,
            activityAction: x,
            buttonVariant: N,
            buttonText: E,
        } = (0, K.dn)({
            context: t,
            application: n,
            location: l,
            sectionName: i,
            launchingComponentId: d,
            fetchesApplication: a,
        });
    return x === tA.o6.START || x === tA.o6.JOIN
        ? s
            ? (0, r.jsx)(nT, {
                  ...c,
                  sectionName: i,
                  application: n,
                  onClick: f,
                  disabled: u || p,
                  enableVideoBanner: !h,
                  children: h ? (0, r.jsx)(nu.y, { type: nu.y.Type.PULSING_ELLIPSIS, className: ny.u1 }) : null,
              })
            : (0, r.jsx)(nW, { ...c, context: t, sectionName: i, application: n, location: l })
        : (0, r.jsx)(nT, {
              ...c,
              sectionName: i,
              application: n,
              onClick: (e) => {
                  e.stopPropagation();
              },
              imageStyle: ny.TO,
              enableVideoBanner: !1,
              disabled: !0,
              children: (0, r.jsx)("div", {
                  className: ny.BC,
                  children: (0, r.jsx)(R.$, {
                      type: "submit",
                      size: "md",
                      variant: N,
                      disabled: u || p,
                      onClick: f,
                      "aria-label": et.intl.formatToPlainString(et.t["XjP/R+"], {
                          buttonText: E,
                          applicationName: n.name,
                      }),
                      loading: h,
                      text: E,
                  }),
              }),
          });
}
function nB(e) {
    let { look: t = nS.LARGE_BANNER } = e,
        n = (0, A.bG)([k.A], () => k.A.useReducedMotion),
        { styleLarge: l, styleSmall: i } = o.useMemo(
            () => ({
                styleLarge: { width: `${10 + 50 * Math.random()}%` },
                styleSmall: { width: `${30 + 60 * Math.random()}%` },
            }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: y()(er.kL, er.NX, { [er.cb]: n, [er.uS]: t !== nS.ROW, [er.qd]: t === nS.ROW }),
        children: [
            (0, r.jsx)("div", {
                className: y()(er._e, { [er.i2]: t === nS.MEDIUM_BANNER, [er.ir]: t === nS.LARGE_BANNER }),
            }),
            (0, r.jsxs)("div", {
                className: y()(er.TD, { [er.Ne]: t === nS.ROW }),
                children: [
                    (0, r.jsx)("div", { className: y()(er.Pz, { [er.Lu]: t === nS.ROW }) }),
                    (0, r.jsxs)("div", {
                        className: er.FS,
                        children: [
                            (0, r.jsx)("div", {
                                className: er.jC,
                                style: l,
                                children: (0, r.jsx)(O.D, {
                                    className: er.R,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children: "_",
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: er.jC,
                                style: i,
                                children: (0, r.jsx)(T.E, {
                                    className: er.R,
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    lineClamp: 1,
                                    children: "_",
                                }),
                            }),
                        ],
                    }),
                    t === nS.ROW && (0, r.jsx)("div", { className: er.ek }),
                ],
            }),
        ],
    });
}
var nF = n(902527),
    nG = n(765178),
    nz = n(798685);
function n$(e) {
    let { searchQuery: t, textContent: n, type: l } = e;
    return (
        (0, K.Ch)(l, t),
        o.useEffect(() => {
            nG.O.announce(n, "polite");
        }, [n]),
        (0, r.jsx)("div", {
            className: nz.y,
            children: (0, r.jsx)(T.E, { variant: "text-md/medium", color: "text-muted", children: n }),
        })
    );
}
var nX = n(4589),
    nY = (((a = nY || {})[(a.VIEW_MORE = 0)] = "VIEW_MORE"), (a[(a.VIEW_LESS = 1)] = "VIEW_LESS"), a);
function nq(e) {
    let { title: t, buttonType: n, onClickViewButton: l } = e;
    return (0, r.jsxs)("div", {
        className: nX.wx,
        children: [
            (0, r.jsx)(T.E, { variant: "text-md/medium", color: "text-strong", children: t }),
            null != n &&
                null != l &&
                (0, r.jsx)(b.D, {
                    className: nX.Vc,
                    onClick: l,
                    "aria-label": et.intl.formatToPlainString(et.t["bj/2kV"], { title: t }),
                    children: (0, r.jsx)(T.E, {
                        variant: "text-md/medium",
                        color: "text-brand",
                        children: 0 === n ? et.intl.format(et.t.gVw57p, {}) : et.intl.string(et.t.nPGLFQ),
                    }),
                }),
        ],
    });
}
(nq.buttonTypes = nY),
    (nq.Loading = function () {
        let e = o.useMemo(() => ({ width: `${10 + 20 * Math.random()}%` }), []);
        return (0, r.jsx)("div", {
            className: nX.uH,
            style: e,
            children: (0, r.jsx)(T.E, {
                className: nX.R,
                variant: "text-md/medium",
                color: "text-strong",
                children: "_",
            }),
        });
    });
var nK = n(984516),
    nZ = n(935573),
    nQ = n(651753),
    nJ = n(485845),
    n0 = n(994369),
    n1 = n(240591),
    n8 = n(727331);
function n4(e, t) {
    var n, l;
    let i = t.limit ?? 1 / 0,
        s = ((n = e), (l = t.filterPredicates ?? []), n.filter((e) => l.every((t) => t(e))));
    return (function (e, t, n) {
        let l = [];
        for (let i of e) {
            let e = (function (e, t) {
                return e.sort((e, n) => {
                    for (let l of t) {
                        let t = l(e, n);
                        if (0 !== t) return t;
                    }
                    return 0;
                });
            })(i, t);
            if ((l.push(...e), l.length >= n)) break;
        }
        return l;
    })(
        null != t.bucketPredicates && t.bucketPredicates.length > 0
            ? i >= s.length
                ? (function (e, t) {
                      let n = Array(t.length)
                          .fill(null)
                          .map(() => []);
                      for (let l of e)
                          for (let e = 0; e < t.length; e++)
                              if (t[e](l)) {
                                  n[e].push(l);
                                  break;
                              }
                      return n;
                  })(s, t.bucketPredicates ?? [])
                : (function (e, t, n) {
                      let l = [],
                          i = e;
                      for (let e of t) {
                          let t = [],
                              s = [];
                          for (let n of i) e(n) ? s.push(n) : t.push(n);
                          if ((l.push(s), (i = t), l.reduce((e, t) => t.length + e, 0) >= n)) break;
                      }
                      return l;
                  })(s, t.bucketPredicates ?? [], i)
            : [s],
        t.sortComparers ?? [],
        i,
    ).slice(0, i);
}
function n2(e, t) {
    let n = t7.A.getScoreWithoutLoadingLatest(e.id);
    return t7.A.getScoreWithoutLoadingLatest(t.id) - n;
}
function n3(e, t) {
    let n = (0, j.lq)(e),
        l = (0, j.lq)(t);
    return (0, g.RF)(n, l);
}
function n7(e, t) {
    return (0, g.RF)(e.displayName, t.displayName);
}
n(827669);
var n9 = n(562708),
    n6 = n(139286),
    n5 = n(520117);
function le(e) {
    let { applicationId: t, commandId: n, searchResultsPosition: l, query: i } = e,
        s = (0, A.bG)([p.A], () => p.A.entrypoint());
    return {
        trackSearchResultsItemImpressionRef: (0, n5.A)({
            onVisible: () => {
                (0, n6.x)({
                    type: n9.ImpressionTypes.VIEW,
                    name: n9.ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM,
                    properties: { application_id: t, command_id: n, search_results_position: l, query: i, source: s },
                });
            },
            threshold: 1,
        }),
    };
}
var lt = n(967612);
function ln(e) {
    let { command: t, application: n, onClick: l, query: i, searchResultsPosition: s } = e,
        a = o.useCallback(
            (e) => {
                if ((0, j.$B)(n)) {
                    let t = n instanceof eV.Ay ? n : eV.Ay.createFromServer(n);
                    (0, eX.jA)(e, (e) => (0, r.jsx)(eZ, { application: t, ...e }));
                }
            },
            [n],
        ),
        { iconURL: c, name: d, description: u } = o.useMemo(() => (0, j.X2)(n, { fakeAppIconURL: tU }), [n]),
        m = o.useMemo(() => {
            let e = t?.displayDescription ?? u;
            return null == e ? null : (0, K.SD)(e, void 0);
        }, [u, t?.displayDescription]),
        { trackSearchResultsItemImpressionRef: p } = le({
            applicationId: n.id,
            commandId: t?.id,
            query: i,
            searchResultsPosition: s,
        });
    return (0, r.jsx)(b.D, {
        className: lt.vk,
        innerRef: (e) => {
            p.current = e;
        },
        onClick: l,
        onContextMenu: a,
        children: (0, r.jsxs)(L.M, {
            className: lt.ao,
            children: [
                (0, r.jsx)(I.A, { src: c, className: lt.Kk, "aria-hidden": !0, rendersPlaceholder: !0 }),
                (0, r.jsxs)("div", {
                    className: lt.Jn,
                    children: [
                        (0, r.jsx)(O.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            children: t?.displayName ?? d,
                        }),
                        (0, r.jsx)(T.E, { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: m }),
                    ],
                }),
                null != t
                    ? (0, r.jsx)(T.E, {
                          className: lt.Pn,
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: d,
                      })
                    : null,
                (0, r.jsx)("div", { className: lt.V1 }),
            ],
        }),
    });
}
var ll = n(68614);
function li() {
    let e = (0, A.bG)([k.A], () => k.A.useReducedMotion),
        { styleLarge: t, styleSmall: n } = o.useMemo(
            () => ({
                styleLarge: { width: `${10 + 50 * Math.random()}%` },
                styleSmall: { width: `${30 + 60 * Math.random()}%` },
            }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: y()(ll.kL, { [ll.cb]: e }),
        children: [
            (0, r.jsx)("div", { className: ll.Pz }),
            (0, r.jsxs)("div", {
                className: ll.FS,
                children: [
                    (0, r.jsx)("div", {
                        className: ll.jC,
                        style: t,
                        children: (0, r.jsx)(O.D, {
                            className: ll.R,
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            children: "_",
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: ll.jC,
                        style: n,
                        children: (0, r.jsx)(T.E, {
                            className: ll.R,
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: "_",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: ll.V1 }),
        ],
    });
}
var ls = n(786783);
let la = Array(6)
        .fill(0)
        .map((e, t) => t),
    lr = [, , ,].fill(0).map((e, t) => t),
    lo = [, , , ,].fill(0).map((e, t) => t);
function lc(e) {
    return (0, r.jsx)(ld, { ...e });
}
function ld(e) {
    let { context: t, query: n, entrypoint: l, isScrollCloseToBottom: i } = e,
        s = l === _.s4.TEXT,
        a = l === _.s4.TEXT,
        {
            loading: c,
            isEmptyState: d,
            commandResults: u,
            hasCommandResults: m,
            applicationResults: p,
        } = (function (e) {
            let {
                context: t,
                query: n,
                commandLimit: l,
                applicationLimit: i,
                searchesCommands: s = !0,
                searchesBots: a = !0,
                searchesActivities: r = !0,
            } = e;
            n.startsWith("/") && (n = n.substring(1));
            let {
                    commands: c,
                    commandSectionMap: d,
                    loading: u,
                } = (function (e) {
                    let { context: t, includeBuiltIn: n = !0, allowFetch: l = !0 } = e,
                        i = (0, g.SD)(t, !0, l),
                        s = (0, g.A4)(!0, l);
                    return o.useMemo(() => {
                        let e = i.result?.sections ?? {},
                            l = s.result?.sections ?? {},
                            a = [...Object.keys(e), ...Object.keys(l).filter((t) => !(t in e))];
                        n && a.push(ea.Ik.BUILT_IN);
                        let r = [],
                            o = {};
                        for (let e of a) {
                            let n = (0, g.Sx)(t, e),
                                l = n.sectionCommands ?? [];
                            r.push(...l),
                                l.forEach((e) => {
                                    null != n.descriptor && (o[e.id] = n.descriptor);
                                });
                        }
                        return {
                            commands: r,
                            commandSectionMap: o,
                            loading: !0 === i.fetchState.fetching || !0 === s.fetchState.fetching,
                        };
                    }, [t, n, i.fetchState.fetching, i.result?.sections, s.fetchState.fetching, s.result?.sections]);
                })({ context: t, includeBuiltIn: !0 }),
                { apps: m } = (function (e) {
                    let {
                            context: t,
                            onlyWithCommands: n,
                            includeBuiltIn: l,
                            allowFetch: i = !0,
                            includeEmbeddedApps: s,
                            includeNonEmbeddedApps: a,
                        } = e,
                        r = "channel" === t.type ? t.channel : void 0,
                        c = (0, n1.MW)(r, [M.kc.CHAT]).hasBaseAccessPermissions,
                        d = (0, g.SD)(t, c, i),
                        u = (0, g.A4)(c, i),
                        m = o.useCallback(
                            (e) => {
                                let t = e.descriptor.application;
                                return (
                                    null != t &&
                                    (!!(s && (0, j.Ag)(t)) ||
                                        (null != t && a && !(0, j.Ag)(t) && (!n || Object.keys(e.commands).length > 0)))
                                );
                            },
                            [s, a, n],
                        ),
                        p = [],
                        h = new Set();
                    if (null != d.result)
                        for (let e of Object.values(d.result.sections)) {
                            let t = e.descriptor.application;
                            null != t && m(e) && (p.push(t), h.add(t.id));
                        }
                    if (null != u.result)
                        for (let e of Object.values(u.result.sections)) {
                            let t = e.descriptor.application;
                            null != t && !h.has(t.id) && m(e) && p.push(t);
                        }
                    return (
                        a && l && p.push(j.N3),
                        { apps: p, loading: d?.fetchState.fetching === !0 || u?.fetchState.fetching === !0 }
                    );
                })({
                    context: t,
                    onlyWithCommands: !0,
                    includeBuiltIn: !0,
                    includeEmbeddedApps: r,
                    includeNonEmbeddedApps: a,
                }),
                p = (0, tX.A)({ guildId: "channel" === t.type ? t.channel.guild_id : null }),
                h = o.useMemo(() => {
                    var e, i, a, r, o, d, u;
                    let m, p, h, A, f;
                    if (!s) return [];
                    return n4(c, {
                        limit: l,
                        filterPredicates: [
                            ((m = (0, n1.Bh)("channel" === t.type ? t.channel : void 0, [M.kc.CHAT])),
                            (p = {}),
                            (e) => {
                                let { context: n, userId: l, roleIds: i, isImpersonating: s } = m;
                                if (!(e.applicationId in p)) {
                                    let {
                                            descriptor: a,
                                            isGuildInstalled: r,
                                            isUserInstalled: o,
                                        } = (0, g.Sx)(t, e.applicationId),
                                        c = n?.guild_id != null ? n8.we(a?.permissions, n.guild_id, l, i, s) : null,
                                        d = n?.guild_id != null ? n8._W(a?.permissions, n, n.guild_id) : null;
                                    p[e.applicationId] = {
                                        descriptor: a,
                                        applicationAllowedForUser: c,
                                        applicationAllowedForChannel: d,
                                        isGuildInstalled: r,
                                        isUserInstalled: o,
                                    };
                                }
                                let {
                                    descriptor: a,
                                    applicationAllowedForChannel: r,
                                    applicationAllowedForUser: o,
                                    isGuildInstalled: c,
                                    isUserInstalled: d,
                                } = p[e.applicationId];
                                return (
                                    n8.zl(e, m, {
                                        applicationAllowedForUser: o,
                                        applicationAllowedForChannel: r,
                                        commandBotId: a?.botId,
                                        isGuildInstalled: c,
                                        isUserInstalled: d,
                                    }) === n8.CA.ALLOWED
                                );
                            }),
                        ],
                        bucketPredicates: [
                            ((i = e = n),
                            (e) => {
                                let t = e.untranslatedName,
                                    n = e.displayName;
                                return t.startsWith(i) || n.startsWith(i);
                            }),
                            ((a = e),
                            (A = (h = a?.split(" "))[0]),
                            (f = h.slice(1).join(" ")),
                            (e) => {
                                let t = e.untranslatedName,
                                    n = e.displayName;
                                return (
                                    !!(
                                        (t.startsWith(A) && t.split(" ").slice(1).join(" ").startsWith(f)) ||
                                        (n.startsWith(A) && n.split(" ").slice(1).join(" ").startsWith(f))
                                    ) || !1
                                );
                            }),
                            ((r = e),
                            (e) => {
                                let t = e.untranslatedName,
                                    n = e.displayName;
                                return t.includes(r) || n.includes(r);
                            }),
                            ((o = e),
                            (e) => {
                                for (let { name: t, serverLocalizedName: n } of e.options ?? [])
                                    if (
                                        t.startsWith(o) ||
                                        `${e.untranslatedName} ${t}`.startsWith(o) ||
                                        (null != e.displayName && `${e.displayName} ${t}`.startsWith(o)) ||
                                        (null != n &&
                                            (n.startsWith(o) ||
                                                `${e.untranslatedName} ${n}`.startsWith(o) ||
                                                (null != e.displayName && `${e.displayName} ${n}`.startsWith(o))))
                                    )
                                        return !0;
                                return !1;
                            }),
                            ((d = e),
                            (e) => {
                                for (let { name: t, serverLocalizedName: n } of e.options ?? [])
                                    if (t.includes(d) || n?.includes(d)) return !0;
                                return !1;
                            }),
                        ],
                        sortComparers: [
                            ((u = { channel: "channel" === t.type ? t.channel : void 0 }),
                            (e, t) => {
                                let n = $.Ay.getScoreWithoutLoadingLatest(u, e);
                                return $.Ay.getScoreWithoutLoadingLatest(u, t) - n;
                            }),
                            n7,
                        ],
                    });
                }, [s, c, l, t, n]),
                A = o.useMemo(() => {
                    if (0 === h.length) return [];
                    let e = new Map(m.map((e) => [e.id, e]));
                    return eE().compact(
                        h.map((t) => {
                            let n = e.get(t.applicationId);
                            if (null == n) return null;
                            let l = d[t.id] ?? null;
                            return { command: t, application: n, section: l };
                        }),
                    );
                }, [m, h, d]),
                f = o.useMemo(() => {
                    var e, l, s, o, c;
                    let d,
                        u = [];
                    if (r) {
                        let e = new Set(
                            m.map((e) => {
                                let { id: t } = e;
                                return t;
                            }),
                        );
                        u.push(...m),
                            u.push(
                                ...p
                                    .filter((t) => {
                                        let {
                                            application: { id: n },
                                        } = t;
                                        return !e.has(n);
                                    })
                                    .map((e) => {
                                        let { application: t } = e;
                                        return t;
                                    }),
                            );
                    } else a && (u = m);
                    return n4(u, {
                        limit: i,
                        filterPredicates: [
                            ((d = (0, n1.Bh)("channel" === t.type ? t.channel : void 0, [
                                M.kc.CHAT,
                                M.kc.PRIMARY_ENTRY_POINT,
                            ])),
                            (e) => {
                                let { context: n, userId: l, roleIds: i, isImpersonating: s } = d,
                                    {
                                        descriptor: a,
                                        sectionCommands: r,
                                        isGuildInstalled: o,
                                        isUserInstalled: c,
                                    } = (0, g.Sx)(t, e.id),
                                    u = n?.guild_id != null ? n8.we(a?.permissions, n.guild_id, l, i, s) : null,
                                    m = n?.guild_id != null ? n8._W(a?.permissions, n, n.guild_id) : null;
                                return (
                                    null == r ||
                                    !(r.length > 0) ||
                                    r.some(
                                        (e) =>
                                            n8.zl(e, d, {
                                                applicationAllowedForUser: u,
                                                applicationAllowedForChannel: m,
                                                commandBotId: a?.botId,
                                                isGuildInstalled: o,
                                                isUserInstalled: c,
                                            }) === n8.CA.ALLOWED,
                                    )
                                );
                            }),
                        ],
                        bucketPredicates: [
                            ((l = e = n), (e) => (0, j.lq)(e).toLocaleLowerCase().startsWith(l.toLocaleLowerCase())),
                            ((s = e), (e) => (0, j.lq)(e).toLocaleLowerCase().includes(s.toLocaleLowerCase())),
                            ((o = e),
                            (e) => {
                                let t = (0, j.u8)(e)?.toLocaleLowerCase();
                                return t?.startsWith(o.toLocaleLowerCase()) ?? !1;
                            }),
                            ((c = e),
                            (e) => {
                                let t = (0, j.u8)(e)?.toLocaleLowerCase();
                                return t?.includes(c.toLocaleLowerCase()) ?? !1;
                            }),
                        ],
                        sortComparers: [n2, n3],
                    });
                }, [a, r, i, t, n, m, p]),
                x = A.length > 0,
                N = f.length > 0;
            return {
                commandResults: A,
                hasCommandResults: x,
                applicationResults: f,
                hasApplicationResults: N,
                isEmptyState: !x && !N,
                loading: u && s,
            };
        })({ context: t, query: n, searchesActivities: !0, searchesCommands: s, searchesBots: a }),
        {
            fetchState: h,
            applicationResults: f,
            fetchNextPage: x,
        } = (function (e) {
            let { context: t, query: n, fetches: l = !0, pageLimit: i = 1 / 0, entrypoint: s } = e;
            n.startsWith("/") && (n = n.substring(1));
            let a = s === _.s4.VOICE,
                r = "channel" === t.type ? t.channel.guild_id : void 0,
                [c, d] = o.useState(1),
                u = o.useRef(c);
            u.current = c;
            let { fetchState: m, totalPages: p } = (0, A.cf)(
                    [nQ.A],
                    () => ({
                        fetchState: nQ.A.getFetchState({
                            query: n,
                            guildId: r,
                            page: c,
                            integrationType: nJ.b.USER_INSTALL,
                            minUserInstallCommandCount: 1,
                            excludeAppsWithCustomInstallUrl: !0,
                            excludeNonEmbeddedApps: a,
                            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                            source: n0.V.APP_LAUNCHER,
                        }),
                        totalPages:
                            nQ.A.getSearchResults({
                                query: n,
                                guildId: r,
                                page: c,
                                integrationType: nJ.b.USER_INSTALL,
                                minUserInstallCommandCount: 1,
                                excludeAppsWithCustomInstallUrl: !0,
                                excludeNonEmbeddedApps: a,
                                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                source: n0.V.APP_LAUNCHER,
                            })?.totalPages ?? 0,
                    }),
                    [n, r, c, a],
                ),
                h = o.useMemo(
                    () =>
                        Array.from(
                            { length: m === nQ.e.FETCHED || m === nQ.e.ERROR ? c : c - 1 },
                            (e, t) =>
                                nQ.A.getSearchResults({
                                    query: n,
                                    guildId: r,
                                    page: t + 1,
                                    integrationType: nJ.b.USER_INSTALL,
                                    minUserInstallCommandCount: 1,
                                    excludeAppsWithCustomInstallUrl: !0,
                                    excludeNonEmbeddedApps: a,
                                    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                    source: n0.V.APP_LAUNCHER,
                                })?.results ?? [],
                        ),
                    [m, r, n, c, a],
                ),
                f = o.useCallback(() => {
                    let e = h.length;
                    m === nQ.e.FETCHED &&
                        e === u.current &&
                        e > 0 &&
                        e < p &&
                        e < i &&
                        h[e - 1].length > 0 &&
                        (u.current++, d((e) => e + 1));
                }, [m, i, h, p]),
                x = o.useCallback(
                    (e) => {
                        let { query: t, page: n, guildId: l } = e;
                        X.$P({
                            query: t,
                            guildId: l,
                            options: {
                                page: n,
                                integrationType: nJ.b.USER_INSTALL,
                                minUserInstallCommandCount: 1,
                                excludeAppsWithCustomInstallUrl: !0,
                                excludeNonEmbeddedApps: a,
                                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                source: n0.V.APP_LAUNCHER,
                            },
                        });
                    },
                    [a],
                );
            return (
                o.useEffect(() => {
                    l && x({ query: n, page: c, guildId: r });
                }, [n, r, x, c, l]),
                o.useEffect(() => {
                    d(1);
                }, [r, n]),
                { fetchState: m, applicationResults: h.flat(), fetchNextPage: f }
            );
        })({ query: n, context: t, fetches: !0, pageLimit: 5, entrypoint: l });
    o.useEffect(() => {
        i && h === nQ.e.FETCHED && x();
    }, [x, h, i]);
    let N = null == h || h === nQ.e.FETCHING,
        E = o.useMemo(() => {
            let e = p.map((e) => ({ application: e, installOnDemand: !0 })),
                t = new Set(
                    p.map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
                );
            return [
                ...e,
                ...eE().compact(
                    f.map((e) =>
                        e.type === nZ.j.CONNECTION || t.has(e.data.id)
                            ? null
                            : { application: e.data, installOnDemand: !0 },
                    ),
                ),
            ];
        }, [f, p]),
        C = E.length > 0,
        I = d && !C && !N;
    return (o.useEffect(() => {
        if (c) return;
        let e = u.length + E.length;
        if (e > 0) {
            let t = et.intl.formatToPlainString(et.t.ZGVL3g, { count: e });
            nG.O.announce(t, "polite");
        }
    }, [n, u.length, E.length, c]),
    c)
        ? (0, r.jsx)(lA, {})
        : I
          ? (0, r.jsx)(n$, {
                type: _.wg.SEARCH_EMPTY,
                searchQuery: n,
                textContent: l === _.s4.TEXT ? et.intl.string(et.t.LSNOYf) : et.intl.string(et.t.Clu7Qh),
            })
          : (0, r.jsxs)("div", {
                children: [
                    m && (0, r.jsx)(lu, { context: t, commandResults: u, query: n }),
                    (C || N) &&
                        (0, r.jsx)(lp, {
                            context: t,
                            applicationResults: E,
                            includePlaceholder: N,
                            query: n,
                            searchesBots: a,
                        }),
                ],
            });
}
function lu(e) {
    let { context: t, commandResults: n, query: l } = e,
        i = n.length > 4,
        s = o.useMemo(() => (i ? n.slice(0, 4) : n), [n, i]),
        [a, c] = o.useState(!1),
        d = (0, nm.A)(a) ?? a,
        m = o.useCallback(() => c((e) => !e), []),
        h = ((0, nm.A)(l) ?? l)[0] !== l[0],
        A = a && !h;
    o.useLayoutEffect(() => c(!1), [h]);
    let {
        ref: f,
        isTransitioning: x,
        onTransitionEnd: N,
    } = (0, tp.A)({ key: l, isExpanded: A, durationMs: 200, maxAnimationHeight: 680 });
    o.useEffect(() => {
        !d &&
            a &&
            (0, u.zV)(es.HAw.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: _.yK.SEARCH,
                source: p.A.entrypoint(),
                num: n.length,
            });
    }, [n.length, d, a]);
    let E = A || x,
        g = A ? nq.buttonTypes.VIEW_LESS : nq.buttonTypes.VIEW_MORE,
        C = E ? n : s;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(nq, { title: et.intl.string(et.t["0hKkS+"]), buttonType: g, onClickViewButton: i ? m : void 0 }),
            (0, r.jsx)("div", {
                className: ls._,
                ref: f,
                onTransitionEnd: N,
                children: C.map((e, n) => {
                    let { command: i, application: s, section: a } = e;
                    return (0, r.jsx)(
                        ln,
                        {
                            command: i,
                            application: s,
                            query: l,
                            searchResultsPosition: n,
                            onClick: () => {
                                let e = p.A.entrypoint();
                                B.k(_.Se.DISMISSED),
                                    (0, W.Mv)({
                                        command: i,
                                        location: D.Oh.APP_LAUNCHER_HOME_SEARCH,
                                        sectionName: _.yK.SEARCH,
                                    }),
                                    "channel" === t.type &&
                                        (U.Gf({
                                            channelId: t.channel.id,
                                            command: i,
                                            section: a,
                                            location: D.Oh.APP_LAUNCHER_HOME_SEARCH,
                                            triggerSection: void 0,
                                            queryLength: l.length,
                                            sectionName: _.yK.SEARCH,
                                            query: l,
                                            searchResultsPosition: n,
                                            source: e,
                                        }),
                                        V._.dispatch(es.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: t.channel.id }));
                            },
                        },
                        i.id,
                    );
                }),
            }),
        ],
    });
}
function lm(e) {
    let { trackSearchResultsItemImpressionRef: t } = le({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
    });
    return (0, r.jsx)("div", {
        className: ls.Gn,
        ref: (e) => {
            t.current = e;
        },
        children: (0, r.jsx)(nW, { ...e, tracksImpression: !1, enableVideoBanner: !0 }),
    });
}
function lp(e) {
    let { context: t, applicationResults: n, includePlaceholder: l, query: i, searchesBots: s } = e;
    return s
        ? (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(nq, { title: et.intl.string(et.t.PHjkRE) }),
                  (0, r.jsxs)("div", {
                      className: ls._,
                      children: [
                          n.map((e, n) => {
                              let { application: l, installOnDemand: s } = e;
                              return (0, r.jsx)(
                                  lh,
                                  {
                                      context: t,
                                      application: l,
                                      location: D.Oh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: _.yK.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: s,
                                      query: i,
                                  },
                                  l.id,
                              );
                          }),
                          l && lr.map((e) => (0, r.jsx)(li, {}, e)),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(nq, { title: et.intl.string(et.t.shUONg) }),
                  (0, r.jsxs)("div", {
                      className: ls.H$,
                      children: [
                          n.map((e, n) => {
                              let { application: l, installOnDemand: s } = e;
                              return (0, r.jsx)(
                                  lm,
                                  {
                                      context: t,
                                      application: l,
                                      look: nS.LARGE_BANNER,
                                      location: D.Oh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: _.yK.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: s,
                                      query: i,
                                  },
                                  l.id,
                              );
                          }),
                          l && lo.map((e) => (0, r.jsx)(nB, { look: nS.LARGE_BANNER }, e)),
                      ],
                  }),
              ],
          });
}
function lh(e) {
    let { onClickAppCard: t } = nw(e);
    return (0, r.jsx)(ln, {
        application: e.application,
        onClick: t,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
    });
}
function lA() {
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(nq, { title: et.intl.string(et.t["0hKkS+"]) }),
            (0, r.jsx)("div", { className: ls._, children: la.map((e) => (0, r.jsx)(li, {}, e)) }),
            (0, r.jsx)(nq, { title: et.intl.string(et.t.PHjkRE) }),
            (0, r.jsx)("div", { className: ls._, children: lr.map((e) => (0, r.jsx)(li, {}, e)) }),
        ],
    });
}
var lf = n(62784);
let lx = [],
    lN = [, , , ,].fill(0).map((e, t) => t),
    lE = [
        { cards: [, , , ,].fill(0).map((e, t) => t), look: nS.MEDIUM_BANNER },
        { cards: [, , , ,].fill(0).map((e, t) => t), look: nS.ROW },
        { cards: [, , , ,].fill(0).map((e, t) => t), look: nS.ROW },
    ],
    lg = tB.K.APP_LAUNCHER_IN_TEXT;
function lC(e) {
    let { context: t, entrypoint: n, searchQuery: l, setSearchQuery: i, setScroller: s, isScrollCloseToBottom: a } = e,
        c = (0, A.bG)([te.A], () => te.A.getIsEnabled(), []),
        d = n === _.s4.TEXT && "channel" === t.type && null != t.channel && !t.channel.isPrivate(),
        u = (0, j.sw)(n),
        m = !(0, j.sw)(n),
        p = n === _.s4.TEXT,
        [h, f] = lT(!0),
        [N, E] = lT(d),
        [g, C] = lT(u),
        [I, v] = lT(m),
        y = h && N && g && I,
        P = (u || d) && !y,
        S = m && c;
    o.useEffect(() => {
        let e = "channel" === t.type ? t.channel?.guild_id : void 0;
        (0, t$.LV)({ guildId: e, force: !0 });
    }, [t]),
        o.useEffect(() => {
            n === _.s4.VOICE && t$.LK();
        }, [n]);
    let T = l.length > 0;
    return (0, r.jsxs)("div", {
        className: lf.kL,
        children: [
            S ? (0, r.jsx)(l_, {}) : null,
            (0, r.jsx)(lj, {
                searchQuery: l,
                setSearchQuery: i,
                placeholder: p ? et.intl.string(et.t.ziyFv2) : et.intl.string(et.t["pw+r5b"]),
            }),
            (0, r.jsx)(x.Ip, {
                ref: s,
                className: lf.Ph,
                fade: !0,
                children: T
                    ? (0, r.jsx)(lc, { context: t, query: l, entrypoint: n, isScrollCloseToBottom: a })
                    : (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(lI, { context: t, entrypoint: n, onEmptyState: f }),
                              d && "channel" === t.type && (0, r.jsx)(ly, { context: t, onEmptyState: E }),
                              u && (0, r.jsx)(lP, { context: t, entrypoint: n, onEmptyState: C }),
                              m && (0, r.jsx)(lv, { context: t, onEmptyState: v }),
                              y &&
                                  (0, r.jsx)(n$, {
                                      type: _.wg.HOME_EMPTY,
                                      textContent:
                                          n === _.s4.TEXT ? et.intl.string(et.t.iKZctW) : et.intl.string(et.t.RL7Ncg),
                                  }),
                              P && (0, r.jsx)(nK.A, {}),
                          ],
                      }),
            }),
        ],
    });
}
function l_() {
    return (0, r.jsxs)("div", {
        className: lf.G,
        children: [
            (0, r.jsx)(T.E, { className: lf.TR, variant: "text-sm/normal", children: et.intl.string(et.t.tZ3FNs) }),
            (0, r.jsx)(tr, { hideSearch: !0 }),
        ],
    });
}
function lj(e) {
    let { searchQuery: t, setSearchQuery: n, placeholder: l } = e,
        i = o.useRef(null),
        [s, a] = o.useState(!1),
        c = o.useMemo(
            () =>
                eE().debounce(
                    (e) => {
                        (0, u.zV)(es.HAw.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                            query: e,
                            source: p.A.entrypoint(),
                            location: D.Oh.APP_LAUNCHER_HOME,
                        });
                    },
                    400,
                    { leading: !1, trailing: !0 },
                ),
            [],
        ),
        d = o.useCallback(() => n(""), [n]),
        m = o.useCallback(() => {
            a(!0),
                (0, u.zV)(es.HAw.APP_LAUNCHER_SEARCH_FOCUSED, {
                    source: p.A.entrypoint(),
                    location: D.Oh.APP_LAUNCHER_HOME,
                });
        }, []),
        h = o.useCallback(() => {
            a(!1);
        }, []),
        A = o.useCallback(
            (e) => {
                s || m(), n(e), c(e);
            },
            [s, n, m, c],
        );
    return (
        o.useEffect(() => {
            let e = i.current;
            if (null == e) return;
            let t = () => {
                s || m();
            };
            return (
                e.addEventListener("click", t),
                () => {
                    e.removeEventListener("click", t);
                }
            );
        }, [s, m]),
        (0, r.jsx)("div", {
            className: lf.PP,
            children: (0, r.jsx)(ti.I, {
                ref: i,
                placeholder: l,
                query: t,
                onChange: A,
                onClear: d,
                onFocus: h,
                autoFocus: !0,
            }),
        })
    );
}
function lI(e) {
    let { context: t, entrypoint: n, onEmptyState: l } = e,
        i = n === _.s4.VOICE,
        { frecentApps: s, loading: a } = (function (e) {
            let { context: t, onlyActivityApps: n, allowCommandFetch: l, includeAuthorizedAppsAndFetch: i } = e,
                { sectionDescriptors: s, loading: a } = H.cu({ context: t, filters: ns, options: na, allowFetch: l });
            return {
                loading: a,
                frecentApps: (function (e) {
                    let {
                            sectionDescriptors: t,
                            context: n,
                            onlyActivityApps: l,
                            includeAuthorizedAppsAndFetch: i,
                        } = e,
                        s = (0, A.bG)([t5.default], () => t5.default.getFetchState());
                    o.useEffect(() => {
                        i && s === t5.FetchState.NOT_FETCHED && t8.A.fetch();
                    }, [i, s]);
                    let a = (0, A.yK)([t5.default], () =>
                            i
                                ? t5.default
                                      .getNewestTokens()
                                      .filter((e) => e.scopes.includes(t1.F.APPLICATIONS_COMMANDS))
                                : [],
                        ),
                        r = t.filter((e) => e.id !== ea.Ik.FRECENCY && e.id !== ea.Ik.BUILT_IN),
                        c = "contextless" === n.type,
                        d = o.useMemo(() => {
                            let e = [];
                            return c && e.push(ni.gq), e;
                        }, [c]),
                        u = t6(r, a);
                    return o.useMemo(
                        () =>
                            l
                                ? u
                                      .filter(
                                          (e) =>
                                              null != e.application &&
                                              (0, j.Ag)(e.application) &&
                                              null != (0, to.eI)(n, e.id),
                                      )
                                      .filter((e) => !d.includes(e.id))
                                : u.filter((e) => !d.includes(e.id)),
                        [l, u, n, d],
                    );
                })({ sectionDescriptors: s, context: t, onlyActivityApps: n, includeAuthorizedAppsAndFetch: i }),
            };
        })({ context: t, onlyActivityApps: i, allowCommandFetch: !0, includeAuthorizedAppsAndFetch: !0 }),
        c = o.useMemo(() => {
            let e = [];
            for (let t of s) null != t.application && e.push({ application: t.application });
            return e;
        }, [s]),
        d = et.intl.string(et.t["s+UQpc"]),
        m = d;
    i && (m = et.intl.string(et.t["2pFD8L"]));
    let { items: p, handleViewMore: h } = lb({
        title: m,
        look: n === _.s4.VOICE ? nS.LARGE_BANNER : nS.ROW,
        items: c,
        limit: 8,
        sectionName: _.yK.RECENT_APPS,
    });
    o.useEffect(() => {
        a ||
            (0 !== p.length &&
                (0, u.zV)(es.HAw.APP_LAUNCHER_FRECENTS_SEEN, {
                    num: p.length,
                    section_name: _.yK.RECENT_APPS,
                    location: _.W8.HOME,
                    source: n,
                }));
    }, [p.length, n, a]);
    let f = !a && 0 === p.length;
    return (o.useEffect(() => {
        l(f);
    }, [f, l]),
    !(function (e) {
        let { apps: t, onlyActivityApps: n } = e,
            l = o.useMemo(
                () =>
                    n
                        ? t.map((e) => {
                              let { application: t } = e;
                              return t.id;
                          })
                        : [],
                [t, n],
            );
        (0, C.A)(l);
    })({ apps: p, onlyActivityApps: i }),
    a || f)
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(nq, { title: d, buttonType: nq.buttonTypes.VIEW_MORE, onClickViewButton: h }),
                  (0, r.jsx)("div", {
                      className: lf._,
                      children: (0, r.jsx)("div", {
                          className: lf.Ye,
                          children: p.map((e, n) => {
                              let { application: l } = e;
                              return i
                                  ? (0, r.jsx)(
                                        nV,
                                        {
                                            context: t,
                                            application: l,
                                            look: nS.ICON,
                                            location: _.W8.HOME,
                                            sectionName: _.yK.RECENT_APPS,
                                            resultsPosition: n,
                                            isOneClickCTA: !0,
                                            fetchesApplication: !1,
                                        },
                                        l.id,
                                    )
                                  : (0, r.jsx)(
                                        nW,
                                        {
                                            context: t,
                                            application: l,
                                            look: nS.ICON,
                                            location: _.W8.HOME,
                                            sectionName: _.yK.RECENT_APPS,
                                            resultsPosition: n,
                                        },
                                        l.id,
                                    );
                          }),
                      }),
                  }),
              ],
          });
}
function lv(e) {
    let { context: t, onEmptyState: n } = e;
    tq();
    let l = (0, tX.A)({ guildId: "channel" === t.type ? t.channel?.getGuildId() : void 0 }),
        i = nS.LARGE_BANNER,
        { trackSectionImpressionRef: s } = (0, nF.A)({
            sectionName: _.yK.ACTIVITIES,
            numItems: l.length,
            numVisibleItems: l.length,
        }),
        a = no(),
        c = 0 === l.length;
    return (o.useEffect(() => {
        n(c);
    }, [n, c]),
    c)
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)("div", {
                      ref: (e) => {
                          s.current = e;
                      },
                      children: (0, r.jsx)(nq, { title: et.intl.string(et.t.shUONg) }),
                  }),
                  (0, r.jsx)("div", {
                      className: lf.a2,
                      children: l.map((e, n) => {
                          let { application: l } = e;
                          return (0, r.jsx)(
                              nV,
                              {
                                  context: t,
                                  application: l,
                                  look: i,
                                  location: D.Oh.APP_LAUNCHER_HOME,
                                  sectionName: _.yK.ACTIVITIES,
                                  resultsPosition: n,
                                  sectionOverallPosition: 0,
                                  isOneClickCTA: !a,
                                  fetchesApplication: !1,
                              },
                              l.id,
                          );
                      }),
                  }),
              ],
          });
}
function ly(e) {
    let { context: t, onEmptyState: n } = e,
        l = _.yK.APPS_IN_THIS_SERVER,
        { appsInThisServer: i, isLoading: s } = (function (e) {
            let { context: t } = e,
                n = "channel" === t.type ? t.channel : void 0,
                l = (0, g.ON)(n?.guild_id, !0),
                { commandsByActiveSection: i, loading: s } = H.cu({
                    context: t,
                    filters: { commandTypes: [M.kc.CHAT, M.kc.PRIMARY_ENTRY_POINT] },
                    options: { placeholderCount: 0, limit: ea.Hi, includeFrecency: !0 },
                    allowFetch: !0,
                }),
                a = o.useMemo(
                    () =>
                        i.reduce((e, t) => {
                            let { section: n, data: l } = t;
                            return l.length > 0 && e.add(n.id), e;
                        }, new Set()),
                    [i],
                ),
                r = t6(
                    o.useMemo(
                        () =>
                            Object.values(l.result?.sections ?? {})
                                .map((e) => {
                                    let { descriptor: t } = e;
                                    return t;
                                })
                                .filter((e) => !(e.id in nr.gZ) && a.has(e.id)),
                        [l.result?.sections, a],
                    ),
                );
            return {
                appsInThisServer: o.useMemo(
                    () =>
                        eE()
                            .compact(
                                r.map((e) => {
                                    let { application: t } = e;
                                    return t;
                                }),
                            )
                            .map((e) => ({ application: e })),
                    [r],
                ),
                isLoading: l.fetchState.fetching || s,
            };
        })({ context: t }),
        { items: a, handleViewMore: c } = lb({
            title: et.intl.string(et.t.KfkuGc),
            look: nS.ROW,
            items: i,
            limit: 4,
            sectionName: l,
        }),
        { trackSectionImpressionRef: d } = (0, nF.A)({ sectionName: l, numItems: i.length, numVisibleItems: a.length }),
        u = !s && 0 === a.length;
    return (o.useEffect(() => {
        n(u);
    }, [u, n]),
    u)
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)("div", {
                      ref: (e) => {
                          d.current = e;
                      },
                      children: (0, r.jsx)(nq, {
                          title: et.intl.string(et.t.KfkuGc),
                          buttonType: nq.buttonTypes.VIEW_MORE,
                          onClickViewButton: c,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: lf.l2,
                      children: s
                          ? lN.map((e) => (0, r.jsx)(nB, { look: nS.ROW }, e))
                          : a.map((e, n) => {
                                let { application: i } = e;
                                return null != i
                                    ? (0, r.jsx)(
                                          nW,
                                          {
                                              context: t,
                                              application: i,
                                              look: nS.ROW,
                                              sectionName: l,
                                              resultsPosition: n,
                                              location: D.Oh.APP_LAUNCHER_HOME,
                                          },
                                          i.id,
                                      )
                                    : null;
                            }),
                  }),
              ],
          });
}
function lP(e) {
    let { context: t, entrypoint: n, onEmptyState: l } = e,
        {
            fetchState: i,
            recommendationsSections: s,
            isInstallOnDemand: a,
        } = (function (e) {
            let t,
                n,
                { context: l, entrypoint: i } = e,
                s =
                    ((t = (0, A.bG)([tJ.default], () => tJ.default.onlyShowPreviewAppCollections)),
                    (n = tK.getConfig({ location: "App Launcher Home (Web)" }).enabled),
                    t ? tw.W.PREVIEW : n ? tw.W.NON_STAFF_PREVIEW : tw.W.ACTIVE);
            o.useEffect(() => {
                (0, X.An)({ surface: lg, activeState: s });
            }, [s]);
            let { sectionDescriptors: a } = H.cu({
                    context: l,
                    filters: { commandTypes: [M.kc.CHAT] },
                    options: { placeholderCount: 0, limit: ea.Hi, includeFrecency: !0 },
                    allowFetch: !0,
                }),
                r = o.useCallback((e) => null == a.find((t) => t.id === e.id), [a]),
                c = (0, A.bG)([tZ.A], () => tZ.A.getFetchState({ surface: lg, activeState: s })),
                d = (0, A.bG)([tZ.A], () => tZ.A.getCollections({ surface: lg, activeState: s })),
                u = i === _.s4.VOICE;
            return {
                fetchState: c,
                recommendationsSections: o.useMemo(() => (u ? (0, j.hX)(d) : d), [d, u]),
                isInstallOnDemand: r,
            };
        })({ context: t, entrypoint: n }),
        c = (function (e) {
            let { context: t, recommendationsSections: n } = e;
            tq();
            let l = (0, tX.A)({ guildId: "channel" === t.type ? t.channel?.getGuildId() : void 0 });
            return o.useMemo(() => {
                if (!n.some((e) => (0, tz.Lt)(e.flags, tW.APPENDS_REMAINING_ACTIVITIES))) return lx;
                let e = new Set();
                return (
                    n.forEach((t) => {
                        t.application_directory_collection_items.forEach((t) => {
                            t.type === tF.L.APPLICATION && e.add(t.application.id);
                        });
                    }),
                    l.filter((t) => !e.has(t.application.id))
                );
            }, [n, l]);
        })({ context: t, recommendationsSections: s }),
        d = i === tZ.e.FETCHING,
        u = !d && 0 === s.length;
    return (o.useEffect(() => {
        l(u);
    }, [u, l]),
    u)
        ? null
        : d
          ? lE.map((e, t) => {
                let { cards: n, look: l } = e;
                return (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsx)(nq.Loading, {}),
                            (0, r.jsx)("div", {
                                className: l === nS.ROW ? lf.l2 : lf.a2,
                                children: n.map((e) => (0, r.jsx)(nB, { look: l }, e)),
                            }),
                        ],
                    },
                    t,
                );
            })
          : s.map((e, n) =>
                (0, r.jsx)(
                    lS,
                    {
                        recommendationsSection: e,
                        remainingActivities: c,
                        isInstallOnDemand: a,
                        position: n,
                        context: t,
                    },
                    e.id,
                ),
            );
}
function lS(e) {
    let t,
        n,
        { recommendationsSection: l, remainingActivities: i, isInstallOnDemand: s, position: a, context: c } = e,
        d = l.title;
    switch (l.type) {
        case tG.Y.BANNER_CARDS:
            t = nS.LARGE_BANNER;
            break;
        case tG.Y.SMALL_BANNER_CARDS:
            t = nS.MEDIUM_BANNER;
            break;
        default:
            t = nS.ROW;
    }
    let u = o.useMemo(() => {
            let e = l.application_directory_collection_items
                .map((e) => {
                    if (e.type === tF.L.APPLICATION)
                        return {
                            collectionItemId: e.id,
                            collectionItemImageHash: e.image_hash,
                            showsPromoted: (0, tz.Lt)(e.flags, tV.PROMOTED),
                            application: e.application,
                            installOnDemand: s(e.application),
                        };
                })
                .filter(t0.Vq);
            return (
                (0, tz.Lt)(l.flags, tW.APPENDS_REMAINING_ACTIVITIES) &&
                    e.push(
                        ...i.map((e) => {
                            let { application: t } = e;
                            return {
                                collectionItemId: void 0,
                                collectionItemImageHash: void 0,
                                showsPromoted: !1,
                                application: t,
                                installOnDemand: !0,
                            };
                        }),
                    ),
                e
            );
        }, [s, l.application_directory_collection_items, l.flags, i]),
        m = l.title;
    switch (l.type) {
        case tG.Y.BANNER_CARDS:
        case tG.Y.SMALL_BANNER_CARDS:
            n = 6;
            break;
        case tG.Y.EXPANDABLE_LIST:
        default:
            n = 4;
    }
    let { items: p, handleViewMore: h } = lb({
            title: d,
            look: t,
            items: u,
            limit: n,
            sectionName: m,
            sectionOverallPosition: a,
        }),
        { trackSectionImpressionRef: A } = (0, nF.A)({ sectionName: m, numItems: u.length, numVisibleItems: p.length }),
        f = l.type !== tG.Y.SMALL_BANNER_CARDS;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)("div", {
                ref: (e) => {
                    A.current = e;
                },
                children: (0, r.jsx)(nq, {
                    title: l.title,
                    buttonType: nq.buttonTypes.VIEW_MORE,
                    onClickViewButton: h,
                }),
            }),
            (0, r.jsx)("div", {
                className: t === nS.ROW ? lf.l2 : lf.a2,
                children: p.map((e, n) => {
                    let l,
                        {
                            collectionItemId: i,
                            collectionItemImageHash: s,
                            application: o,
                            installOnDemand: d,
                            showsPromoted: u,
                        } = e;
                    return (
                        null != i && null != s && (l = (0, tQ.DH)({ itemId: i, hash: s, containerWidth: 500 })),
                        (0, r.jsx)(
                            nW,
                            {
                                context: c,
                                application: o,
                                look: t,
                                sectionName: m,
                                resultsPosition: n,
                                location: D.Oh.APP_LAUNCHER_HOME,
                                installOnDemand: d,
                                enableVideoBanner: f,
                                sectionOverallPosition: a,
                                overrideImageUrl: l,
                                showsPromoted: u,
                            },
                            `${n}-${o.id}`,
                        )
                    );
                }),
            }),
        ],
    });
}
function lT(e) {
    let [t, n] = o.useState(!e);
    return [
        t,
        o.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            n(e);
        }, []),
    ];
}
function lb(e) {
    let { title: t, look: n, items: l, limit: i, sectionName: s, sectionOverallPosition: a } = e,
        { pushHistory: r } = (0, h.uM)();
    return o.useMemo(
        () =>
            l.length <= i
                ? { items: l, handleViewMore: void 0 }
                : {
                      items: l.slice(0, i),
                      handleViewMore: () => {
                          (0, u.zV)(es.HAw.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: s,
                              source: p.A.entrypoint(),
                              num: l.length,
                          }),
                              r({
                                  type: h.Wy.LIST,
                                  title: t,
                                  look: n,
                                  items: l,
                                  sectionName: s,
                                  sectionOverallPosition: a,
                              });
                      },
                  },
        [l, i, s, r, t, n, a],
    );
}
var lL = n(1555);
function lR(e) {
    let { context: t, entrypoint: n, title: l, look: i, items: s, sectionName: a, sectionOverallPosition: c } = e,
        d = no(),
        u = o.useMemo(() => (n === _.s4.TEXT ? nW : nV), [n]);
    return (0, r.jsxs)("section", {
        className: lL.kL,
        "aria-label": et.intl.formatToPlainString(et.t.iobNIB, { sectionTitle: l }),
        children: [
            (0, r.jsxs)("div", {
                className: lL.wx,
                children: [
                    (0, r.jsx)(eS, { className: lL.Gv }),
                    (0, r.jsx)(O.D, { variant: "heading-md/medium", color: "text-strong", children: l }),
                ],
            }),
            (0, r.jsx)(x.Ip, {
                children: (0, r.jsx)("div", {
                    className: y()({ [lL.wf]: i !== nS.ROW, [lL.Ge]: i === nS.ROW }),
                    children: s.map((e, n) => {
                        let { application: l, installOnDemand: s, showsPromoted: o } = e;
                        return (0, r.jsx)(
                            u,
                            {
                                context: t,
                                application: l,
                                look: i,
                                sectionName: a,
                                resultsPosition: n,
                                location: D.Oh.APP_LAUNCHER_LIST_VIEW_ALL,
                                installOnDemand: s,
                                isOneClickCTA: d,
                                sectionOverallPosition: c,
                                showsPromoted: o,
                            },
                            l.id,
                        );
                    }),
                }),
            }),
        ],
    });
}
var lO = n(900376);
let lM = { width: 500, height: q.$V },
    lk = { height: q.$V },
    lU = o.memo(
        o.forwardRef(function (e, t) {
            let { context: n, entrypoint: l, initHistory: i } = e,
                { analyticsLocations: s } = (0, m.Ay)(d.A.APP_LAUNCHER);
            return (
                o.useEffect(() => {
                    (0, u.zV)(es.HAw.APPLICATION_COMMAND_TOP_OF_FUNNEL, { source: l, location: "app_launcher" });
                }, [l]),
                o.useEffect(() => {
                    let e = Date.now();
                    return () => {
                        (0, u.zV)(es.HAw.APP_LAUNCHER_CLOSED, {
                            reason: p.A.closeReason(),
                            time_spent: Date.now() - e,
                            source: l,
                        });
                    };
                }, [l]),
                (0, r.jsx)("div", {
                    className: lO.jP,
                    ref: t,
                    style: lM,
                    children: (0, r.jsx)("div", {
                        className: lO.FG,
                        children: (0, r.jsx)(m.f5, {
                            value: s,
                            children: (0, r.jsx)(lH, {
                                initHistory: i,
                                children: (0, r.jsx)(lD, { context: n, entrypoint: l }),
                            }),
                        }),
                    }),
                })
            );
        }),
    );
function lH(e) {
    let { initHistory: t, children: n } = e,
        [l, i] = o.useState(t ?? [{ type: h.Wy.HOME }]),
        [s, a] = o.useState({}),
        c = l[l.length - 1],
        [d, u] = o.useState(!1),
        m = o.useCallback((e) => {
            i((t) => [...t, e]);
        }, []),
        p = o.useCallback(() => {
            let e = null;
            i((t) => (t.length <= 1 ? t : ((e = t[t.length - 1]), t.slice(0, -1)))),
                a((t) => (null == e ? t : { ...t, [e.type]: e }));
        }, []),
        A = o.useCallback((e) => l.findLast((t) => t.type === e) ?? s[e], [l, s]);
    return (0, r.jsx)(h.L8.Provider, {
        value: {
            history: l,
            discard: s,
            currentView: c,
            pushHistory: m,
            goBack: p,
            getMostRecentHistoryItemByType: A,
            isSlideReady: d,
            setSlideReady: u,
        },
        children: n,
    });
}
function lD(e) {
    let { context: t, entrypoint: n } = e,
        [l, i] = o.useState(""),
        { setScroller: s, isCloseToBottom: a } = (function (e) {
            let [t, n] = o.useState(null),
                [l, i] = o.useState(!1),
                s = o.useRef(0);
            return (
                o.useEffect(() => {
                    t?.scrollTo(0, 0);
                }, [t, e]),
                o.useEffect(() => {
                    if (null != t)
                        return (
                            t.scrollTo(0, s.current),
                            t.addEventListener("scroll", e),
                            () => {
                                t.removeEventListener("scroll", e, !1);
                            }
                        );
                    function e() {
                        null == t ||
                            ((s.current = t.scrollTop), i(t.scrollHeight - (t.scrollTop + t.clientHeight) < 340));
                    }
                }, [t]),
                { setScroller: n, isCloseToBottom: l }
            );
        })(l),
        { currentView: d, getMostRecentHistoryItemByType: u, setSlideReady: m } = (0, h.uM)();
    o.useEffect(() => {
        m(!1);
    }, [d?.type, m]);
    let p = o.useCallback(() => {
        m(!0);
    }, [m]);
    if (null == d) return null;
    let A = u(h.Wy.LIST),
        f = u(h.Wy.APPLICATION);
    return (0, r.jsxs)(c.t, {
        activeSlide: d.type,
        width: 500,
        onSlideReady: p,
        children: [
            (0, r.jsx)(c.q, {
                id: h.Wy.HOME,
                children: (0, r.jsx)("div", {
                    className: lO.xD,
                    style: lk,
                    children: (0, r.jsx)(lC, {
                        isScrollCloseToBottom: a,
                        setScroller: s,
                        context: t,
                        entrypoint: n,
                        searchQuery: l,
                        setSearchQuery: i,
                    }),
                }),
            }),
            (0, r.jsx)(c.q, {
                id: h.Wy.LIST,
                children: (0, r.jsx)("div", {
                    className: lO.xD,
                    style: lk,
                    children:
                        null != A &&
                        (0, r.jsx)(lR, {
                            context: t,
                            entrypoint: n,
                            title: A.title,
                            look: A.look,
                            items: A.items,
                            sectionName: A.sectionName,
                            sectionOverallPosition: A.sectionOverallPosition,
                        }),
                }),
            }),
            (0, r.jsx)(c.q, {
                id: h.Wy.APPLICATION,
                children: (0, r.jsx)("div", {
                    className: lO.xD,
                    style: lk,
                    children:
                        null != f &&
                        (0, r.jsx)(tH, { context: t, application: f.application, sectionName: f.sectionName }),
                }),
            }),
        ],
    });
}
