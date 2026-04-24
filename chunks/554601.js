n.d(t, { A: () => lM }), n(775443);
var l,
    i,
    a,
    s,
    r = n(627968),
    o = n(64700),
    c = n(430690),
    d = n(793574),
    u = n(58149),
    m = n(688810),
    p = n(989837),
    h = n(485878),
    _ = n(17928),
    A = n(696986),
    f = n(364522),
    x = n(435582),
    E = n(283488),
    C = n(264322),
    N = n(429913),
    g = n(500049),
    b = n(735991),
    v = n(717048),
    I = n(503698),
    y = n.n(I),
    j = n(320448),
    T = n(559647),
    S = n(834730),
    L = n(939249),
    P = n(247928),
    R = n(821609),
    O = n(534514),
    k = n(155718),
    M = n(775602),
    w = n(721768),
    H = n(842209),
    D = n(392054),
    U = n(972995),
    V = n(390756),
    B = n(625494),
    W = n(211401),
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
var K = n(56494),
    z = n(26909),
    $ = n(354138),
    q = n(927813),
    Y = n(60809),
    X = n(297486),
    Z = n(922016),
    Q = n(112173),
    J = n(550079),
    ee = n(477782),
    et = n(985018),
    en = n(436806);
function el(e) {
    let { sortOrder: t, onSortOptionClick: n, closePopout: l } = e,
        i = (e) => {
            n(e), l();
        };
    return (0, r.jsx)("div", {
        className: y()(Y.Wx, en.k),
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
                        action: () => i(Y.Ug.POPULAR),
                        checked: t === Y.Ug.POPULAR,
                    }),
                    (0, r.jsx)(ee.iD, {
                        id: "sort-by-alphabetical",
                        group: "sort-by",
                        label: et.intl.string(et.t.m8xsti),
                        action: () => i(Y.Ug.ALPHABETICAL),
                        checked: t === Y.Ug.ALPHABETICAL,
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
        case Y.Ug.POPULAR:
            t = et.intl.string(et.t.SzxiqK);
            break;
        case Y.Ug.ALPHABETICAL:
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
var ea = n(652215),
    es = n(73510),
    er = n(357887),
    eo = n(291657);
let ec = "placeholder",
    ed = [, , , , ,].fill(ec);
function eu(e) {
    let { context: t, command: n, section: l, sectionName: i } = e,
        a = o.useCallback(() => {
            let e = p.A.entrypoint();
            W.k(g.Se.COMMAND),
                (0, V.Mv)({ command: n, location: D.Oh.APP_LAUNCHER_APPLICATION_VIEW, sectionName: i }),
                "channel" === t.type &&
                    (w.Gf({
                        channelId: t.channel.id,
                        command: n,
                        section: l,
                        location: D.Oh.APP_LAUNCHER_APPLICATION_VIEW,
                        sectionName: i,
                        source: e,
                        commandOrigin: D.iw.APPLICATION_LAUNCHER,
                    }),
                    B._.dispatch(ea.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: t.channel.id }));
        }, [t, n, l, i]),
        s = (n.options?.length ?? 0) > 0,
        c = o.useMemo(() => (0, X.SD)(n.displayDescription, void 0), [n.displayDescription]),
        d = o.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: eo.sd,
                    children: [
                        (0, r.jsx)(S.E, { variant: "text-sm/semibold", color: "text-strong", children: n.displayName }),
                        (0, r.jsx)(S.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: c }),
                    ],
                }),
            [n.displayName, c],
        );
    return (0, r.jsxs)(L.D, {
        className: eo.G5,
        onClick: a,
        children: [
            (0, r.jsx)(P.M, { className: eo.fg, children: d }),
            s ? (0, r.jsx)(j._, {}) : (0, r.jsx)(ep, { context: t, command: n, sectionName: i }),
        ],
    });
}
function em() {
    let e = (0, _.bG)([M.A], () => M.A.useReducedMotion),
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
                            children: (0, r.jsx)(S.E, {
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
                            children: (0, r.jsx)(S.E, {
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
    (0, C.A4)(!0, !0), (0, C.SD)(t, !0, !0);
    let i = G(t),
        [a, s] = o.useState(!1),
        c = o.useCallback(
            async (e) => {
                if ("channel" !== t.type) return;
                e.stopPropagation();
                let a = p.A.lastShownEntrypoint();
                try {
                    let { isAuthorized: e } = await (0, U.q)({
                        applicationId: n.applicationId,
                        channel: "channel" === t.type ? t.channel : void 0,
                        commandIntegrationTypes: n.integration_types,
                        appLauncherContext: {
                            entrypoint: a,
                            location: D.Oh.APP_LAUNCHER_APPLICATION_VIEW,
                            sectionName: l,
                        },
                    });
                    e &&
                        (await (0, b.MJ)({
                            command: n,
                            optionValues: {},
                            context: i,
                            sectionName: l,
                            commandOrigin: D.iw.APP_LAUNCHER_APPLICATION_VIEW,
                        }),
                        W.k(g.Se.COMMAND));
                } finally {
                    s(!1);
                }
            },
            [n, t, l, i],
        );
    return (0, r.jsx)(R.$, {
        type: "submit",
        onClick: c,
        disabled: a,
        variant: "secondary",
        "aria-label": et.intl.formatToPlainString(et.t.UXw6W2, { commandName: n.untranslatedName }),
        text: et.intl.string(et.t.TXNS7S),
        icon: T.l,
        iconPosition: "end",
        size: "md",
    });
}
function eh(e) {
    let { context: t, commands: n, section: l, headerName: i, sectionName: a, children: s } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: eo.Zp,
                      children: [(0, r.jsx)(O.D, { variant: "heading-sm/semibold", children: i }), s],
                  }),
                  (0, r.jsx)("ul", {
                      className: eo.dO,
                      "aria-label": i,
                      children: n.map((e, n) =>
                          e === ec
                              ? (0, r.jsx)(em, {}, e + n)
                              : (0, r.jsx)(eu, { context: t, command: e, section: l, sectionName: a }, e.id),
                      ),
                  }),
              ],
          });
}
function e_(e) {
    let { context: t, application: n, sectionName: l, installOnDemand: i, setHasCommands: a } = e,
        {
            filterSection: s,
            commandsByActiveSection: c,
            sectionDescriptors: d,
            loading: u,
        } = H.cu({
            context: t,
            filters: { commandTypes: [k.kc.CHAT] },
            options: {
                placeholderCount: 0,
                limit: es.Hi,
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
            commands: _,
            canSort: A,
        } = (function (e) {
            let { sectionId: t, commandsByActiveSection: n } = e,
                [l, i] = o.useState(Y.Ug.ALPHABETICAL),
                a = o.useMemo(() => n.find((e) => e.section.id === t)?.data ?? [], [n, t]),
                { popularSortedCommands: s, canSort: r } = (function (e) {
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
                })({ alphabeticalSortedCommands: a });
            o.useEffect(() => {
                $.Di(t, { dontRefetchMs: q.A.Millis.DAY });
            }, [t]),
                o.useLayoutEffect(() => {
                    r && i(Y.Ug.POPULAR);
                }, [r]);
            let c = a;
            switch (l) {
                case Y.Ug.POPULAR:
                    c = s;
                    break;
                case Y.Ug.ALPHABETICAL:
                    c = a;
            }
            return { sortOrder: l, setSortOrder: i, commands: c, canSort: r };
        })({ sectionId: n.id, commandsByActiveSection: c });
    o.useEffect(() => {
        s(n.id);
    }, [n.id, s]);
    let f = (function (e) {
        let { context: t, commands: n, limit: l = n.length } = e,
            i = G(t),
            a = (0, K.F)(i),
            s = o.useMemo(() => n.reduce((e, t) => ((e[t.id] = t), e), {}), [n]);
        return o.useMemo(
            () =>
                a
                    .map((e) => s[e])
                    .filter((e) => null != e)
                    .sort((e, t) => {
                        let n = z.Ay.getScoreWithoutLoadingLatest(i, e);
                        return z.Ay.getScoreWithoutLoadingLatest(i, t) - n;
                    })
                    .slice(0, l),
            [a, s, i, l],
        );
    })({ context: t, commands: _, limit: 5 });
    return (o.useEffect(() => {
        a(_.length > 0);
    }, [a, _]),
    u || 0 !== _.length)
        ? (0, r.jsxs)("ul", {
              className: eo.hQ,
              children: [
                  (0, r.jsx)(eh, {
                      context: t,
                      section: m,
                      commands: f,
                      headerName: et.intl.string(et.t.acSE0h),
                      sectionName: l,
                  }),
                  (0, r.jsx)(eh, {
                      context: t,
                      section: m,
                      commands: u ? ed : _,
                      headerName: et.intl.string(et.t.DUU9L3),
                      sectionName: l,
                      children: A && (0, r.jsx)(ei, { sortOrder: p, onSortOptionClick: h }),
                  }),
              ],
          })
        : null;
}
var eA = n(310784),
    ef = n.n(eA),
    ex = n(735438),
    eE = n.n(ex),
    eC = n(462887),
    eN = n(602853),
    eg = n(661531),
    eb = n(736653),
    ev = n(654107),
    eI = n(998304),
    ey = n(548411),
    ej = n(735886);
function eT(e) {
    let { className: t } = e,
        { goBack: n } = (0, h.uM)(),
        l = o.useCallback(() => {
            n();
        }, [n]);
    return (0, r.jsx)(L.D, {
        onClick: l,
        className: y()(ej.v, t),
        "aria-label": et.intl.string(et.t.ybUZql),
        children: (0, r.jsx)(ey.Z, { size: "sm", color: eg.A.colors.INTERACTIVE_TEXT_ACTIVE }),
    });
}
var eS = n(691540),
    eL = n(857250),
    eP = n(97483),
    eR = n(173936),
    eO = n(192308),
    ek = n(365199),
    eM = n(658575),
    ew = n(342384),
    eH = n(20015),
    eD = n(204776),
    eU = n(50268),
    eV = n(928658),
    eB = n(395671),
    eW = n(967198),
    eF = n(287809),
    eG = n(954571),
    eK = n(957565),
    ez = n(692848),
    e$ = n(442433),
    eq = n(700210),
    eY = n(253932);
function eX(e) {
    let { application: t } = e,
        n = eW.A.getGuildId() ?? void 0;
    return (0, eq.A)({
        application: t,
        guildId: n,
        onItemClick: () => {
            (0, eO.closeModal)(Y.gS), (0, W.k)(g.Se.DISMISSED);
        },
    });
}
function eZ(e) {
    let { application: t, onSelect: n } = e,
        l = eY.Q_.useSetting(),
        i = (0, eU.A)({ id: t.id, label: et.intl.string(et.t["+NP/b2"]) }),
        a = eX({ application: t });
    return (0, r.jsxs)(J.W, {
        "data-menu-migrated-auto": !0,
        navId: "activity-shelf-item-context",
        onClose: e$.Z_,
        "aria-label": et.intl.string(et.t.WkcHT9),
        onSelect: n,
        children: [
            null != a && (0, r.jsx)(ee.rX, { children: a }, "manage-app-actions"),
            l && (0, r.jsx)(ee.rX, { children: i }, "developer-actions"),
        ],
    });
}
var eQ = n(527080);
function eJ(e) {
    let { application: t, context: l, className: i, sectionName: a } = e,
        s = o.useRef(null),
        c = (0, _.bG)([p.A], () => p.A.entrypoint()),
        d = (0, b.Pp)(t),
        m = (0, eD.Ie)(d),
        h = (0, eM.G)(t.id),
        A = (0, _.bG)([eW.A], () => eW.A.getGuildId() ?? void 0, []),
        f = {
            location: D.Oh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: t.id,
            section_name: a,
            source: p.A.lastShownEntrypoint(),
        },
        x = eF.default.getCurrentUser(),
        E = (0, eU.A)({ id: t.id, label: et.intl.string(et.t["+NP/b2"]) }),
        C = eX({ application: t }),
        N = (0, eH.n)(t, ea.gfo.EMBEDDED),
        g = "channel" === l.type ? l.channel : void 0;
    return (0, r.jsxs)("div", {
        className: eQ.k,
        children: [
            (0, r.jsx)(L.D, {
                onClick: () => {
                    let e = N ? (0, ew.W)({ applicationId: t.id, referrerId: x?.id }) : (0, ew.V)({ id: t.id, ...d });
                    (0, eK.C)(e, () => (0, eS.P0)((0, eL.o)(et.intl.string(et.t["L/PwZf"]), eP.Ck.SUCCESS))),
                        eG.default.track(ea.HAw.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: t.id,
                            source: c,
                        });
                },
                className: y()(eQ.v, i),
                "aria-label": et.intl.string(et.t.WqhZss),
                children: (0, r.jsx)(eR.q, { size: "sm", color: eg.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, r.jsx)(Z.Y, {
                targetElementRef: s,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, r.jsxs)(J.W, {
                        "data-menu-needs-review": !0,
                        className: Y.qp,
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
                                                        n.e("32292"),
                                                        n.e("28367"),
                                                        n.e("45174"),
                                                        n.e("85519"),
                                                        n.e("87963"),
                                                        n.e("37266"),
                                                        n.e("55057"),
                                                        n.e("76021"),
                                                        n.e("63229"),
                                                        n.e("31988"),
                                                        n.e("55343"),
                                                        n.e("40142"),
                                                        n.e("48900"),
                                                        n.e("20735"),
                                                        n.e("27846"),
                                                        n.e("8306"),
                                                        n.e("10567"),
                                                        n.e("43436"),
                                                        n.e("22802"),
                                                        n.e("54865"),
                                                        n.e("85384"),
                                                        n.e("95285"),
                                                    ]).then(n.bind(n, 719847));
                                                    return (n) =>
                                                        (0, r.jsx)(e, {
                                                            transitionState: n.transitionState,
                                                            onClose: n.onClose,
                                                            appId: t.id,
                                                            guildId: A,
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
                                                      (0, u.zV)(ea.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, f),
                                                      (0, ez.o)({
                                                          ...d,
                                                          oauth2Callback: (e) => {
                                                              let { location: t } = e;
                                                              null != t &&
                                                                  (0, u.zV)(
                                                                      ea.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED,
                                                                      f,
                                                                  );
                                                          },
                                                          source: "app_launcher_app_details",
                                                      });
                                              },
                                          })
                                        : null,
                                    C,
                                ],
                            }),
                            (0, r.jsx)(ee.rX, {
                                children:
                                    t instanceof eB.Ay
                                        ? (0, r.jsx)(ee.Dr, {
                                              id: "report-app",
                                              color: "danger",
                                              label: et.intl.string(et.t.jhJzez),
                                              action: () => {
                                                  (0, eV.r3)({
                                                      application: t,
                                                      entrypoint: "app_launcher",
                                                      contextualGuildId: g?.getGuildId() ?? void 0,
                                                      contextualChannelId: g?.id,
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
                    (0, r.jsx)(L.D, {
                        innerRef: s,
                        ...e,
                        onClick: e.onClick,
                        className: y()(eQ.v, i),
                        "aria-label": et.intl.string(et.t["UKOtz+"]),
                        children: (0, r.jsx)(ek.j, { size: "sm", color: eg.A.colors.INTERACTIVE_TEXT_ACTIVE }),
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
function e2(e) {
    let { application: t, context: n, name: l, iconURL: i, scrollerRef: a, sectionName: s } = e,
        c = (0, eC.q)((0, eb.Ay)()),
        d = o.useRef(null),
        u = o.useRef(null),
        m = o.useRef(null),
        p = o.useRef(null),
        h = (0, eN.r)(eg.A.colors.BACKGROUND_BASE_LOW).hex(),
        _ = (0, ev.Ay)("number" == typeof i ? "" : i, h ?? ""),
        A = o.useMemo(
            () =>
                (0, eI.lZ)({
                    foreground: ef()(_),
                    background: ef()(c ? "#000000" : "#ffffff"),
                    ratio: 5,
                    saturationFactor: 0.6,
                })?.hex() ?? _,
            [_, c],
        ),
        f = e1(d),
        x = e1(u),
        E = o.useCallback(() => {
            let e = a.current,
                t = d.current,
                n = m.current,
                l = p?.current,
                i = parseInt(f?.height ?? ""),
                s = parseInt(x?.height ?? "");
            if (null != e && null != t && null != n && !isNaN(i) && !isNaN(s)) {
                var r;
                let a = e.scrollTop ?? 0,
                    o = 0 !== e.scrollHeight ? e.scrollHeight : s + 20,
                    d = 0 !== e.clientHeight ? e.clientHeight : s + 20,
                    u = s - i,
                    m = (0, ex.clamp)(o - d, u + 1, s + 20),
                    p = u === m ? 1 : (0, ex.clamp)((a - u) / (m - u), 0, 1);
                (t.style.filter = `brightness(${1 + ((c ? 1.4 : 0.6) - 1) * p})`),
                    (t.style.backgroundColor = `color-mix(in oklab,${_} ${(1 - p) * 100}%, ${A})`),
                    (n.style.opacity = `${0 + +p}`),
                    (n.style.transform = `translateY(${(r = i / 4) + (0 - r) * p}px)`),
                    null != l && (l.style.opacity = `${1 + -1 * p}`);
            }
        }, [A, _, x?.height, c, a, f?.height]);
    return (
        o.useEffect(() => {
            E();
        }, [E, c]),
        o.useEffect(() => {
            let e = a.current,
                t = () => {
                    E();
                };
            return (
                e?.addEventListener("scroll", t),
                () => {
                    e?.removeEventListener("scroll", t);
                }
            );
        }, [a, E]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: e0.Xp,
                    children: [
                        (0, r.jsx)("div", {
                            className: e0.LO,
                            children: (0, r.jsx)("div", { className: e0.If, ref: d }),
                        }),
                        (0, r.jsx)("div", { className: e0.FY, children: (0, r.jsx)(eT, { className: e0.aY }) }),
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
                (0, b.$B)(t)
                    ? (0, r.jsx)("div", {
                          ref: p,
                          className: e0.Ch,
                          children: (0, r.jsx)(eJ, { application: t, context: n, className: e0.aY, sectionName: s }),
                      })
                    : null,
                (0, r.jsx)("div", { ref: u, className: e0.b8, style: { backgroundColor: _ } }),
            ],
        })
    );
}
var e7 = n(34188),
    e5 = n(700623),
    e3 = n(177953),
    e4 = n(825484),
    e9 = n(512950),
    e6 = n(900797),
    e8 = n(847374),
    te = n(10716),
    tt = n(702841),
    tn = n(150934),
    tl = n(292666),
    ti = n(892547),
    ta = n(909206),
    ts = n(393856);
function tr(e) {
    let { hideSearch: t, className: n } = e,
        {
            activityUrlOverride: l,
            useActivityUrlOverride: i,
            filter: a,
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
        className: y()(ts.kL, n),
        children: [
            (0, r.jsx)(tn.S, { checked: i, onChange: ta.c2, label: et.intl.string(et.t["3TSGuD"]) }),
            i
                ? (0, r.jsx)(tl.k, {
                      label: et.intl.string(et.t["9rnmem"]),
                      disabled: !i,
                      value: l ?? void 0,
                      onChange: ta.ri,
                      placeholder: "https://localhost:3000",
                  })
                : null,
            !0 === t
                ? null
                : (0, r.jsx)("div", {
                      children: (0, r.jsx)(ti.I, {
                          size: "sm",
                          query: a,
                          onChange: ta._9,
                          onClear: function () {
                              ta._9("");
                          },
                      }),
                  }),
        ],
    });
}
var to = n(361926),
    tc = n(375802),
    td = n(177640),
    tu = n(607470),
    tm = n(713804),
    tp = n(396533),
    th = n(990078),
    t_ = n(849269),
    tA = n(811024),
    tf = n(782091),
    tx = n(847381),
    tE = n(576705),
    tC = n(723702),
    tN = n(818348),
    tg = n(698141);
function tb(e) {
    let { context: t, application: n, sectionName: l, primaryEntryPointCommand: i } = e,
        a = o.useId(),
        s = o.useCallback(() => {
            W.k(g.Se.ACTIVITY);
        }, []),
        c = o.useCallback(() => {
            p.A.shouldShowModal() && s();
        }, [s]),
        { submitting: d, wasSubmitting: u } = (0, tg.A)({
            applicationId: n.id,
            context: t,
            launchingComponentId: a,
            onSubmissionComplete: s,
        }),
        [m, h] = o.useState(!1),
        A = (0, t_.Hq)({ applicationId: n.id, context: t }),
        f = o.useMemo(() => (0, b.kF)(i.displayName), [i.displayName]),
        {
            onActivityItemSelected: x,
            buttonVariant: E,
            buttonText: C,
        } = (0, X.dn)({
            context: t,
            application: n,
            location: D.Oh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: l,
            commandName: f,
            autoDismissOnClick: A === t_.o6.LEAVE || (0, tc.x)(n),
            launchingComponentId: a,
            submitting: u ?? d,
            onConfirmActivityLaunchChecksAlertOpen: c,
        }),
        { disabled: N, reason: v } = (function (e) {
            let t,
                { context: n, application: l, activityAction: i } = e,
                a = "channel" === n.type ? n.channel : void 0,
                s = (0, _.bG)([tE.A], () => tE.A.can(tN.xB.USE_EMBEDDED_ACTIVITIES, a)),
                r = (0, tf.et)(a?.id),
                o = !1;
            switch (i) {
                case t_.o6.LEAVE:
                    o = !1;
                    break;
                case t_.o6.START:
                    null == a
                        ? (o = !1)
                        : a?.isGuildVoice()
                          ? r !== tf.xy.CAN_LAUNCH && (o = !0)
                          : (0, tA.pE)(a) || (o = !0);
                    break;
                case t_.o6.JOIN:
                    a?.isGuildVoice() ? (o = !s) : (0, tA.pE)(a) || (o = !0);
            }
            if (i !== t_.o6.LEAVE) {
                let e = l instanceof eB.Ay ? l.embeddedActivityConfig : l.embedded_activity_config,
                    n = (0, tx.A)((0, tC.getOS)());
                null == e || e.supported_platforms.includes(n)
                    ? a?.isThread() && ((o = !0), (t = et.intl.string(et.t.ddSR3v)))
                    : ((o = !1), (t = et.intl.string(et.t.z2YTgJ)));
            }
            return o && null == t && (t = et.intl.string(et.t.f41E1g)), { disabled: o, reason: t };
        })({ context: t, application: n, activityAction: A });
    return (0, r.jsx)(th.m, {
        shouldShow: null != v,
        __unsupportedReactNodeAsText: v,
        children: (0, r.jsx)(R.$, {
            type: "submit",
            size: "md",
            variant: E,
            disabled: N,
            loading: m,
            onClick: () => {
                h(!0),
                    x(),
                    eG.default.track(ea.HAw.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                        application_id: n.id,
                        button_action: g.F5.USE_APP_COMMAND,
                    });
            },
            "aria-label": et.intl.formatToPlainString(et.t["XjP/R+"], { buttonText: C, applicationName: n.name }),
            text: C,
        }),
    });
}
var tv = n(522305);
function tI(e) {
    let { botUserId: t, applicationId: n, analyticsLocations: l } = e,
        [i, a] = o.useState(!1),
        s = o.useRef(null),
        c = o.useCallback(async () => {
            eG.default.track(ea.HAw.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: n,
                button_action: g.F5.OPEN_APP_DM,
            }),
                a(!0);
            try {
                await (0, tv.Q)({ appId: n, botId: t, analyticsLocations: l });
            } catch (e) {}
            clearTimeout(s.current), a(!1);
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
    tj = n(992595);
function tT(e) {
    let { context: t, application: n, videoUrl: l, imageCoverUrl: i, sectionName: a, hasCommands: s } = e,
        c = o.useMemo(() => (0, b.u8)(n) ?? "", [n]),
        d = (0, _.bG)([te.A], () => te.A.inDevModeForApplication(n.id)),
        { isSlideReady: u } = (0, h.uM)(),
        [m, p] = o.useState(!1);
    o.useEffect(() => {
        u && p(!0);
    }, [u]);
    let A = null != l;
    return (0, r.jsxs)("div", {
        className: ty.kL,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    A
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
                        className: A ? ty.iw : ty.bH,
                        children: [
                            (0, r.jsx)(tL, { application: n }),
                            (0, r.jsx)(tP, { application: n }),
                            c.length > 0 ? (0, r.jsx)(tk, { description: c }) : null,
                            d
                                ? (0, r.jsx)("div", {
                                      className: ty.G,
                                      children: (0, r.jsx)(tr, { hideSearch: !0, className: ty.bz }),
                                  })
                                : null,
                            (0, r.jsx)(tO, {
                                context: t,
                                application: n,
                                sectionName: a,
                                isDeveloperOfThisApp: d,
                                hasCommands: s,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(tS, { application: n }),
        ],
    });
}
function tS(e) {
    let { application: t } = e,
        n = (0, b.K4)(t),
        l = (0, b.ME)(t);
    return n || l
        ? (0, r.jsxs)("div", {
              className: ty.fP,
              children: [
                  n
                      ? (0, r.jsxs)("div", {
                            className: ty.wi,
                            children: [
                                (0, r.jsx)(e7.U, { size: "sm", color: eg.A.colors.ICON_MUTED }),
                                (0, r.jsx)(S.E, {
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
                                (0, r.jsx)(e5.d, { size: "sm", color: eg.A.colors.ICON_MUTED }),
                                (0, r.jsx)(S.E, {
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
function tL(e) {
    let { application: t } = e,
        n = (0, b.$B)(t) ? t.name : ((0, b.lq)(t) ?? ""),
        l = (0, b.b7)(t);
    return (0, r.jsxs)("div", {
        className: ty.gn,
        children: [
            (0, r.jsx)(O.D, { variant: "heading-xl/extrabold", lineClamp: 1, children: n }),
            l
                ? (0, r.jsx)("div", {
                      className: ty.s3,
                      children: (0, r.jsx)(S.E, {
                          variant: "text-xs/medium",
                          color: "text-default",
                          children: et.intl.string(et.t.LO4f0P),
                      }),
                  })
                : null,
        ],
    });
}
function tP(e) {
    let { application: t } = e,
        n = o.useMemo(() => ((0, b.$B)(t) ? (t?.tags ?? []) : []), [t]);
    return (0, b.Ag)(t)
        ? (0, r.jsxs)("div", {
              className: ty.Pc,
              children: [
                  (0, r.jsx)(tR, { application: t }),
                  n.map((e, t) =>
                      (0, r.jsx)(
                          "div",
                          {
                              className: ty.I8,
                              children: (0, r.jsx)(S.E, {
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
    if (!(0, b.Ag)(t)) return null;
    let n = ((0, b.$B)(t) ? (t instanceof eB.Ay ? t.maxParticipants : t.max_participants) : 0) ?? 0;
    return (0, r.jsxs)("div", {
        className: ty.I8,
        children: [
            (0, r.jsx)(e3.n, { size: "xs", color: eg.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            (0, r.jsx)(S.E, {
                variant: "text-sm/semibold",
                color: "interactive-text-default",
                children: n > 0 ? `1-${n}` : et.intl.string(et.t.zMNEiF),
            }),
        ],
    });
}
function tO(e) {
    let { context: t, application: n, sectionName: l, hasCommands: i, isDeveloperOfThisApp: a } = e,
        s = (0, to.E0)(t, n.id),
        c = (0, N.h)(n.id),
        d = c?.bot?.id,
        u = (function (e) {
            let { context: t, application: n, botUserId: l } = e,
                i = (0, tc.e)(n),
                a = (0, to.Vr)({ context: t, applicationId: n.id, botUserId: l }),
                s = (0, td.A)("channel" === t.type ? t.channel : void 0);
            return !i && a && null != l && !s;
        })({ context: t, application: n, botUserId: d }),
        { analyticsLocations: p } = (0, m.Ay)();
    return (o.useEffect(() => {
        if (!(0, b.$B)(n) || !(0, b.Ag)(n)) return;
        let e = setTimeout(() => {
            (null == s || null == d) &&
                eG.default.track(ea.HAw.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                    application_id: n.id,
                    is_primary_entry_point_command_non_null: null != s,
                    is_bot_user_id_non_null: null != d,
                    show_try_it_out_button: u,
                });
        }, 2e3);
        return () => clearTimeout(e);
    }, [n, s, d, u]),
    (0, b.$B)(n) && (0, b.Ag)(n))
        ? null != s && null != d
            ? (0, r.jsxs)(e4.e, {
                  fullWidth: !0,
                  children: [
                      (0, r.jsx)(tb, { context: t, application: n, sectionName: l, primaryEntryPointCommand: s }),
                      u && null != d
                          ? (0, r.jsx)(tI, { botUserId: d, applicationId: n.id, analyticsLocations: p })
                          : null,
                  ],
              })
            : a && !i && (0, b.Ag)(n)
              ? (0, r.jsx)(e9.p, {
                    className: ty.ai,
                    messageType: e9.Y.WARNING,
                    children: et.intl.format(et.t["s/3hjE"], {}),
                })
              : null
        : null;
}
function tk(e) {
    let { description: t } = e,
        [n, l] = o.useState(!0);
    o.useLayoutEffect(() => l(!1), []);
    let i = o.useMemo(() => (0, tm.parseBioReact)(t), [t]),
        {
            ref: a,
            lineHeight: s,
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
            if (null == s || null == c) return { key: 0 };
            let e = s * c;
            return { key: 1, minHeightOverride: Math.min(e, 2 * s), maxHeightOverride: e };
        }, [c, s]),
        { ref: u, isTransitioning: m, onTransitionEnd: p } = (0, tp.A)({ isExpanded: n, ...d }),
        h = n || m;
    return (0, r.jsxs)("div", {
        className: ty.iQ,
        children: [
            (0, r.jsx)("div", {
                ref: u,
                className: ty.ZT,
                onTransitionEnd: p,
                children: (0, r.jsx)(S.E, {
                    ref: a,
                    className: tj.PT,
                    variant: "text-sm/medium",
                    lineClamp: h ? void 0 : 2,
                    style: { maxHeight: h ? void 0 : d.minHeightOverride },
                    children: i,
                }),
            }),
            null != c && c > 2
                ? (0, r.jsxs)(L.D, {
                      className: ty.lP,
                      onClick: () => l((e) => !e),
                      children: [
                          (0, r.jsx)(S.E, {
                              variant: "text-sm/semibold",
                              color: "text-brand",
                              children: h ? et.intl.string(et.t.u4YJ8g) : et.intl.string(et.t["N/tajD"]),
                          }),
                          h
                              ? (0, r.jsx)(e6.t, { size: "sm", color: eg.A.colors.TEXT_BRAND })
                              : (0, r.jsx)(e8.a, { size: "sm", color: eg.A.colors.TEXT_BRAND }),
                      ],
                  })
                : null,
        ],
    });
}
var tM = n(441031),
    tw = n(291071);
function tH(e) {
    let { context: t, application: n, sectionName: l } = e,
        i = "channel" === t.type ? t.channel : void 0,
        a = (0, _.bG)([p.A], () => p.A.entrypoint()),
        s = (0, N.h)(n.id === es.Ik.BUILT_IN ? null : n.id) ?? n,
        c = (0, b.Ag)(s),
        d = o.useRef(null),
        [u, m] = o.useState(!1),
        { iconURL: h, name: x } = o.useMemo(() => (0, b.X2)(s, { fakeAppIconURL: tw, size: 84 }), [s]),
        E = (0, C.A4)(!0, !0),
        I = (0, C.ON)(i?.guild_id, !0),
        y = o.useMemo(() => (0, C.Sx)(t, s.id), [E, I, t, s.id]),
        j = !y.isGuildInstalled && !y.isUserInstalled;
    return (
        o.useEffect(() => {
            j && C.Ay.queryInstallOnDemandApp(s.id, i?.id);
        }, [s.id, i?.id, j]),
        (0, r.jsxs)(f.d_, {
            className: tM.k,
            fade: !0,
            ref: d,
            role: "region",
            "aria-label": et.intl.formatToPlainString(et.t["4OP4Uk"], { applicationName: x }),
            children: [
                (0, r.jsx)(e2, { application: s, context: t, name: x, iconURL: h, scrollerRef: d, sectionName: l }),
                null != h && (0, r.jsx)(v.A, { src: h, className: tM.Z }),
                (0, r.jsx)(A.A, { size: 54 }),
                (0, r.jsx)(c ? tD : tT, { context: t, application: s, sectionName: l, hasCommands: u }),
                a === g.s4.TEXT
                    ? (0, r.jsx)(e_, {
                          context: t,
                          application: s,
                          sectionName: l,
                          installOnDemand: j,
                          setHasCommands: m,
                      })
                    : null,
            ],
        })
    );
}
function tD(e) {
    let { context: t, application: n, sectionName: l, hasCommands: i } = e,
        a = (0, E.A)({ applicationId: n.id, size: 2048, names: ["embedded_cover"], format: "webp" }),
        s = (0, b.Cx)(n),
        o =
            null != s && null != s.activity_preview_video_asset_id
                ? (0, x.A)(n.id, s.activity_preview_video_asset_id)
                : null;
    return (0, r.jsx)(tT, {
        context: t,
        application: n,
        imageCoverUrl: a.url,
        videoUrl: o,
        sectionName: l,
        hasCommands: i,
    });
}
n(321073), n(938796);
var tU = n(724002),
    tV =
        (((l = {})[(l.APPENDS_REMAINING_ACTIVITIES = 1)] = "APPENDS_REMAINING_ACTIVITIES"),
        (l[(l.DEFAULT = 0)] = "DEFAULT"),
        l),
    tB =
        (((i = {})[(i.PROMOTED = 1)] = "PROMOTED"),
        (i[(i.SKIPS_APPLICATION_DISCOVERABILITY_VALIDATION = 2)] = "SKIPS_APPLICATION_DISCOVERABILITY_VALIDATION"),
        (i[(i.DEFAULT = 0)] = "DEFAULT"),
        i),
    tW = n(287174),
    tF = n(487899),
    tG = n(239314),
    tK = n(665260),
    tz = n(795816),
    t$ = n(648027),
    tq = n(170148);
function tY() {
    let e = (0, tq.z)(),
        t = eY.Q_.getSetting(),
        n = (0, _.bG)([te.A], () => te.A.getFetchState(), []);
    return (
        o.useEffect(() => {
            e && t && n === te.$.INITIALIZED && (0, tz.SE)();
        }, [e, n, t]),
        null
    );
}
let tX = (0, n(945810).mj)({
    kind: "user",
    name: "2025-01-allow-nonstaff-to-preview-app-collections",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tZ = n(111042),
    tQ = n(767599),
    tJ = n(111162),
    t0 = n(403362),
    t1 = n(179771),
    t2 = n(824552),
    t7 = n(168186),
    t5 = n(594061),
    t3 = n(935208),
    t4 = n(630248),
    t9 = n(355097);
function t6(e, t) {
    o.useEffect(() => {
        t5.bW.loadIfUncached(t9.oD.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let n = (0, _.bG)([t4.A], () => t4.A.getApplicationFrecencyWithoutLoadingLatest()),
        l = o.useMemo(
            () =>
                null == t || 0 === t.length
                    ? e
                    : e.map((e) => ({ ...e, isUserApp: t?.some((t) => t.application.id === e.id) ?? !1 })),
            [e, t],
        ),
        i = o.useMemo(() => t?.filter((t) => !e.some((e) => e.id === t.application.id)), [e, t]),
        a = o.useMemo(() => {
            i?.forEach((e) => {
                let t = t3.default.extractTimestamp(e.id);
                null == n.getEntry(e.application.id) && n.track(e.application.id, { timestamp: t });
            }),
                n.compute();
            let e = i?.map((e) => (0, t7.bq)(e.application, !0)) ?? [],
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
        let s = e?.application?.id ?? "";
        return [...a.filter((e) => e.id === s), ...a.filter((e) => e.id !== s)];
    }, [a, l, n, t]);
}
var t8 = n(546183),
    ne = n(228366);
let nt = 10 * q.A.Millis.MINUTE,
    nn = { lastUsedCommandId: null, lastUsedTimeMs: null };
class nl extends _.Ay.PersistedStore {
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
let na = { commandTypes: [k.kc.CHAT, k.kc.PRIMARY_ENTRY_POINT] },
    ns = { placeholderCount: 0, limit: es.Hi, includeFrecency: !0 };
var nr = n(827785);
function no() {
    return eY.Q_.useSetting();
}
var nc = n(696292),
    nd = n(136722),
    nu = n(289873),
    nm = n(475743),
    np = n(933958),
    nh = n(205184),
    n_ = n(994500),
    nA = n(881343),
    nf = n(697675),
    nx = n(91242),
    nE = n(977445),
    nC = n(932413),
    nN = n(953727);
function ng(e) {
    let { width: t = 24, height: n = 24, color: l = "currentColor", foreground: i, ...a } = e;
    return (0, r.jsx)("svg", {
        ...(0, nN.A)(a),
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
var nb = n(486020),
    nv = n(786115),
    nI = n(838541),
    ny = n(666280),
    nj = n(3697),
    nT =
        (((a = {}).ICON = "icon"),
        (a.ROW = "row"),
        (a.NO_BANNER = "no_banner"),
        (a.MEDIUM_BANNER = "medium_banner"),
        (a.LARGE_BANNER = "large_banner"),
        a);
function nS(e) {
    let {
            application: t,
            look: n = "large_banner",
            onClick: l,
            imageStyle: i,
            enableVideoBanner: a = !0,
            children: s,
            sectionName: o,
            resultsPosition: c,
            sectionOverallPosition: d,
            tracksImpression: u = !0,
            disabled: m = !1,
            overrideImageUrl: p,
            showsPromoted: h,
        } = e,
        _ = (0, nm.A)(m) ?? m;
    return (0, r.jsx)(nL, {
        application: t,
        onClick: l,
        sectionName: o,
        resultsPosition: c,
        disabled: m,
        tracksImpression: u,
        look: n,
        sectionOverallPosition: d,
        children: (0, r.jsx)(nC.A, {
            applicationId: t.id,
            questContent: nc.u.APP_LAUNCHER,
            children: (e) =>
                (0, r.jsx)("div", {
                    ref: e,
                    children:
                        "icon" === n
                            ? (0, r.jsx)(nP, { application: t, imageStyle: i, children: s })
                            : (0, r.jsx)(nR, {
                                  application: t,
                                  look: n,
                                  imageStyle: i,
                                  enableVideoBanner: a,
                                  disableBannerFadeIn: _ !== m,
                                  overrideImageUrl: p,
                                  showsPromoted: h,
                                  children: s,
                              }),
                }),
        }),
    });
}
function nL(e) {
    let {
            application: t,
            onClick: n,
            children: l,
            sectionName: i,
            resultsPosition: a,
            sectionOverallPosition: s,
            tracksImpression: c,
            disabled: d,
            containerStyle: u,
            look: m,
        } = e,
        p = o.useCallback(
            (e) => {
                if ((0, b.$B)(t)) {
                    let n = t instanceof eB.Ay ? t : eB.Ay.createFromServer(t);
                    (0, e$.jA)(e, (e) => (0, r.jsx)(eZ, { application: n, ...e }));
                }
            },
            [t],
        ),
        { name: h, description: _ } = o.useMemo(() => (0, b.X2)(t, { fakeAppIconURL: tw }), [t]),
        { trackItemImpressionRef: A } = (0, nv.A)({
            applicationId: t.id,
            applicationFlags: (0, b.$B)(t) ? nd.pG(32, (0, eH.K)(t)) : void 0,
            sectionName: i,
            sectionPosition: a,
            sectionOverallPosition: s,
            promotionalLabel: (0, b.Ii)(t),
        }),
        f = o.useMemo(() => {
            let e = d ? ny.Qz : ny.kL;
            return y()(e, { [ny.uS]: "row" !== m, [ny.qd]: "row" === m, [ny.oI]: "icon" === m }, u);
        }, [u, d, m]);
    return d
        ? (0, r.jsx)("div", { ref: c ? A : void 0, className: f, children: l })
        : (0, r.jsx)(L.D, {
              innerRef: c ? A : void 0,
              className: f,
              onClick: n,
              onContextMenu: p,
              "aria-label": et.intl.formatToPlainString(et.t["zLhr9+"], {
                  applicationName: h,
                  applicationDescription: _,
              }),
              children: (0, r.jsx)(P.M, { children: l }),
          });
}
function nP(e) {
    let { application: t, imageStyle: n, children: l } = e,
        { name: i, iconURL: a } = o.useMemo(() => (0, b.X2)(t, { fakeAppIconURL: tw }), [t]);
    return (0, r.jsx)(th.m, {
        __unsupportedReactNodeAsText: i,
        children: (0, r.jsxs)("div", {
            className: y()(ny.zc, n),
            children: [(0, r.jsx)(v.A, { src: a, className: ny.oI, "aria-hidden": !0, rendersPlaceholder: !0 }), l],
        }),
    });
}
function nR(e) {
    let {
            application: t,
            look: n,
            imageStyle: l,
            enableVideoBanner: i,
            disableBannerFadeIn: a,
            children: s,
            overrideImageUrl: c,
            showsPromoted: d,
        } = e,
        { iconURL: u, name: m, description: p } = o.useMemo(() => (0, b.X2)(t, { fakeAppIconURL: tw }), [t]),
        h = o.useMemo(() => (null == p ? null : (0, X.SD)(p)), [p]),
        _ = (0, ev.Ay)(u, ""),
        [A, f] = o.useState(!1),
        x = o.useCallback(() => {
            !0 === i && f(!0);
        }, [i]),
        E = d || (0, b.NO)(t),
        C = "large_banner" === n || "medium_banner" === n,
        N = o.useCallback(() => f(!1), []),
        g = (0, nE.u)(t.id),
        I = (0, b.fl)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            C
                ? (0, r.jsxs)("div", {
                      onMouseEnter: x,
                      onFocus: x,
                      onMouseLeave: N,
                      onBlur: N,
                      className: y()(ny.zK, { [ny.i2]: "medium_banner" === n, [ny.ir]: "large_banner" === n }),
                      children: [
                          (0, r.jsx)("span", {
                              className: l,
                              children: (0, r.jsx)(nM, {
                                  application: t,
                                  fallbackColor: _,
                                  showVideo: A,
                                  disableFadeIn: a,
                                  overrideImageUrl: c,
                              }),
                          }),
                          g || E || I !== k.Hr.NONE
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
                                        g && (0, r.jsx)(nO, {}),
                                        I !== k.Hr.NONE && (0, r.jsx)(nf.A, { labelType: I }),
                                    ],
                                })
                              : null,
                          (0, r.jsx)("div", { className: ny.Re, children: s }),
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: y()(ny.TD, { [ny.Ne]: "row" === n }),
                children: [
                    (0, r.jsx)(v.A, {
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
                                    !C && E
                                        ? (0, r.jsx)("div", {
                                              className: ny.nb,
                                              children: (0, r.jsx)(S.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-muted",
                                                  children: et.intl.string(et.t["/eVltv"]),
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(nk, { application: t }),
                                ],
                            }),
                            (0, r.jsx)(S.E, {
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
        children: (0, r.jsx)("div", { className: ny.hh, children: (0, r.jsx)(ng, { className: ny.bB }) }),
    });
}
function nk(e) {
    let { application: t } = e,
        n = eF.default.getCurrentUser();
    if (!n?.isStaff() && !n?.isStaffPersonal()) return null;
    let l = (0, b.Cx)(t);
    if (null == l || !(0, b.$B)(t)) return null;
    let i = (0, t_.l$)(t, l);
    return null == i
        ? null
        : (0, r.jsx)(th.m, {
              __unsupportedReactNodeAsText: i,
              children: (0, r.jsx)("img", { className: ny.io, alt: i, src: nj }),
          });
}
function nM(e) {
    let { application: t, fallbackColor: n, showVideo: l, disableFadeIn: i, overrideImageUrl: a } = e;
    if (null != a)
        return (0, r.jsx)("img", { src: a, alt: (0, b.$B)(t) ? t.name : "", className: y()(ny._e, { [ny.cG]: i }) });
    if ((0, b.$B)(t)) {
        if ((0, b.Ag)(t)) return (0, r.jsx)(nw, { application: t, showVideo: l, disableFadeIn: i });
        if (null != t.bot) return (0, r.jsx)(nH, { bot: t.bot, fallbackColor: n, disableFadeIn: i });
    }
    return (0, r.jsx)(nD, { fallbackColor: n, disableFadeIn: i });
}
function nw(e) {
    let { application: t, showVideo: n, disableFadeIn: l } = e,
        i = (0, E.A)({ applicationId: t.id, size: 600, names: ["embedded_cover"], format: "webp" }),
        a = o.useMemo(() => {
            let e = (0, b.Cx)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, x.A)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        [s, c] = o.useState(n);
    o.useEffect(() => {
        n && c(!0);
    }, [n]);
    let d = y()(ny._e, { [ny.cG]: l });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != a && s
                ? (0, r.jsx)("div", {
                      className: ny.SF,
                      children: (0, r.jsx)("div", {
                          className: y()(ny.T0, { [ny.Q]: !n }),
                          onAnimationEnd: () => (n ? null : c(!1)),
                          children: (0, r.jsx)(tu.A, {
                              src: a,
                              mediaLayoutType: nI.dG.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0,
                          }),
                      }),
                  })
                : null,
            (0, r.jsx)(nA.A, {
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
        i = (0, _.bG)([M.A], () => M.A.useReducedMotion),
        a = (0, nb.z)({ id: t.id, banner: t.banner, canAnimate: !i, size: 600 });
    return null == a
        ? (0, r.jsx)(nD, { fallbackColor: n, disableFadeIn: l })
        : (0, r.jsx)("img", { src: a, alt: "", className: y()(ny._e, { [ny.cG]: l }) });
}
function nD(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, r.jsx)("div", { className: y()(ny._e, { [ny.cG]: n }), style: { backgroundColor: t } });
}
function nU(e) {
    let { application: t, sectionName: n, resultsPosition: l, query: i, installOnDemand: a, location: s } = e,
        { pushHistory: r } = (0, h.uM)(),
        { friends: c } = (function (e) {
            let t = (0, nh.s)(e.id),
                n = (0, _.cf)([eF.default, n_.A], () => {
                    let e = {};
                    for (let n of t.values()) {
                        let t = eF.default.getUser(n.author_id),
                            l = n_.A.isFriend(n.author_id);
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
                    (0, u.zV)(ea.HAw.APPLICATION_COMMAND_SECTION_SELECTED, {
                        application_id: t.id,
                        section_name: n,
                        search_results_position: l,
                        source: p.A.entrypoint(),
                        promotional_label: (0, b.Ii)(t),
                        location: s,
                        query: i,
                        num_friends_who_play: c.length,
                    }),
                    r({ type: h.Wy.APPLICATION, application: t, installOnDemand: a, sectionName: n });
            },
            [t, a, s, r, i, l, n, c],
        ),
    };
}
function nV(e) {
    let { onClickAppCard: t } = nU(e);
    return (0, r.jsx)(nS, { ...e, onClick: t });
}
function nB(e) {
    let {
        context: t,
        application: n,
        location: l,
        sectionName: i,
        isOneClickCTA: a,
        fetchesApplication: s = !0,
        ...c
    } = e;
    if (!(0, b.$B)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
    let d = o.useId(),
        [u, m, p] = (0, _.yK)([np.Ay, nx.A], () => [
            np.Ay.isLaunchingActivity(),
            np.Ay.getLaunchState(n.id, "channel" === t.type ? t.channel.id : void 0),
            nx.A.isLaunchingFrame(n.id),
        ]),
        h = (null != m && m.isLaunching && m.componentId === d) || p,
        {
            onActivityItemSelected: A,
            activityAction: f,
            buttonVariant: x,
            buttonText: E,
        } = (0, X.dn)({
            context: t,
            application: n,
            location: l,
            sectionName: i,
            launchingComponentId: d,
            fetchesApplication: s,
        });
    return f === t_.o6.START || f === t_.o6.JOIN
        ? a
            ? (0, r.jsx)(nS, {
                  ...c,
                  sectionName: i,
                  application: n,
                  onClick: A,
                  disabled: u || p,
                  enableVideoBanner: !h,
                  children: h ? (0, r.jsx)(nu.y, { type: nu.y.Type.PULSING_ELLIPSIS, className: ny.u1 }) : null,
              })
            : (0, r.jsx)(nV, { ...c, context: t, sectionName: i, application: n, location: l })
        : (0, r.jsx)(nS, {
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
                      variant: x,
                      disabled: u || p,
                      onClick: A,
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
function nW(e) {
    let { look: t = nT.LARGE_BANNER } = e,
        n = (0, _.bG)([M.A], () => M.A.useReducedMotion),
        { styleLarge: l, styleSmall: i } = o.useMemo(
            () => ({
                styleLarge: { width: `${10 + 50 * Math.random()}%` },
                styleSmall: { width: `${30 + 60 * Math.random()}%` },
            }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: y()(er.kL, er.NX, { [er.cb]: n, [er.uS]: t !== nT.ROW, [er.qd]: t === nT.ROW }),
        children: [
            (0, r.jsx)("div", {
                className: y()(er._e, { [er.i2]: t === nT.MEDIUM_BANNER, [er.ir]: t === nT.LARGE_BANNER }),
            }),
            (0, r.jsxs)("div", {
                className: y()(er.TD, { [er.Ne]: t === nT.ROW }),
                children: [
                    (0, r.jsx)("div", { className: y()(er.Pz, { [er.Lu]: t === nT.ROW }) }),
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
                                children: (0, r.jsx)(S.E, {
                                    className: er.R,
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    lineClamp: 1,
                                    children: "_",
                                }),
                            }),
                        ],
                    }),
                    t === nT.ROW && (0, r.jsx)("div", { className: er.ek }),
                ],
            }),
        ],
    });
}
var nF = n(902527),
    nG = n(798685);
function nK(e) {
    let { searchQuery: t, textContent: n, type: l } = e;
    return (
        (0, X.Ch)(l, t),
        (0, r.jsx)("div", {
            className: nG.y,
            children: (0, r.jsx)(S.E, { variant: "text-md/medium", color: "text-muted", children: n }),
        })
    );
}
var nz = n(4589),
    n$ = (((s = n$ || {})[(s.VIEW_MORE = 0)] = "VIEW_MORE"), (s[(s.VIEW_LESS = 1)] = "VIEW_LESS"), s);
function nq(e) {
    let { title: t, buttonType: n, onClickViewButton: l } = e;
    return (0, r.jsxs)("div", {
        className: nz.wx,
        children: [
            (0, r.jsx)(S.E, { variant: "text-md/medium", color: "text-strong", children: t }),
            null != n &&
                null != l &&
                (0, r.jsx)(L.D, {
                    className: nz.Vc,
                    onClick: l,
                    "aria-label": et.intl.formatToPlainString(et.t["bj/2kV"], { title: t }),
                    children: (0, r.jsx)(S.E, {
                        variant: "text-md/medium",
                        color: "text-brand",
                        children: 0 === n ? et.intl.format(et.t.gVw57p, {}) : et.intl.string(et.t.nPGLFQ),
                    }),
                }),
        ],
    });
}
(nq.buttonTypes = n$),
    (nq.Loading = function () {
        let e = o.useMemo(() => ({ width: `${10 + 20 * Math.random()}%` }), []);
        return (0, r.jsx)("div", {
            className: nz.uH,
            style: e,
            children: (0, r.jsx)(S.E, {
                className: nz.R,
                variant: "text-md/medium",
                color: "text-strong",
                children: "_",
            }),
        });
    });
var nY = n(984516),
    nX = n(935573),
    nZ = n(651753),
    nQ = n(485845),
    nJ = n(994369),
    n0 = n(240591),
    n1 = n(46477);
function n2(e, t) {
    var n, l;
    let i = t.limit ?? 1 / 0,
        a = ((n = e), (l = t.filterPredicates ?? []), n.filter((e) => l.every((t) => t(e))));
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
            ? i >= a.length
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
                  })(a, t.bucketPredicates ?? [])
                : (function (e, t, n) {
                      let l = [],
                          i = e;
                      for (let e of t) {
                          let t = [],
                              a = [];
                          for (let n of i) e(n) ? a.push(n) : t.push(n);
                          if ((l.push(a), (i = t), l.reduce((e, t) => t.length + e, 0) >= n)) break;
                      }
                      return l;
                  })(a, t.bucketPredicates ?? [], i)
            : [a],
        t.sortComparers ?? [],
        i,
    ).slice(0, i);
}
function n7(e, t) {
    let n = t4.A.getScoreWithoutLoadingLatest(e.id);
    return t4.A.getScoreWithoutLoadingLatest(t.id) - n;
}
function n5(e, t) {
    let n = (0, b.lq)(e),
        l = (0, b.lq)(t);
    return (0, C.RF)(n, l);
}
function n3(e, t) {
    return (0, C.RF)(e.displayName, t.displayName);
}
n(827669);
var n4 = n(110259),
    n9 = n(139286),
    n6 = n(520117);
function n8(e) {
    let { applicationId: t, commandId: n, searchResultsPosition: l, query: i } = e,
        a = (0, _.bG)([p.A], () => p.A.entrypoint());
    return {
        trackSearchResultsItemImpressionRef: (0, n6.A)({
            onVisible: () => {
                (0, n9.x)({
                    type: n4.ImpressionTypes.VIEW,
                    name: n4.ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM,
                    properties: { application_id: t, command_id: n, search_results_position: l, query: i, source: a },
                });
            },
            threshold: 1,
        }),
    };
}
var le = n(967612);
function lt(e) {
    let { command: t, application: n, onClick: l, query: i, searchResultsPosition: a } = e,
        s = o.useCallback(
            (e) => {
                if ((0, b.$B)(n)) {
                    let t = n instanceof eB.Ay ? n : eB.Ay.createFromServer(n);
                    (0, e$.jA)(e, (e) => (0, r.jsx)(eZ, { application: t, ...e }));
                }
            },
            [n],
        ),
        { iconURL: c, name: d, description: u } = o.useMemo(() => (0, b.X2)(n, { fakeAppIconURL: tw }), [n]),
        m = o.useMemo(() => {
            let e = t?.displayDescription ?? u;
            return null == e ? null : (0, X.SD)(e, void 0);
        }, [u, t?.displayDescription]),
        { trackSearchResultsItemImpressionRef: p } = n8({
            applicationId: n.id,
            commandId: t?.id,
            query: i,
            searchResultsPosition: a,
        });
    return (0, r.jsx)(L.D, {
        className: le.vk,
        innerRef: (e) => {
            p.current = e;
        },
        onClick: l,
        onContextMenu: s,
        children: (0, r.jsxs)(P.M, {
            className: le.ao,
            children: [
                (0, r.jsx)(v.A, { src: c, className: le.Kk, "aria-hidden": !0, rendersPlaceholder: !0 }),
                (0, r.jsxs)("div", {
                    className: le.Jn,
                    children: [
                        (0, r.jsx)(O.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            children: t?.displayName ?? d,
                        }),
                        (0, r.jsx)(S.E, { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: m }),
                    ],
                }),
                null != t
                    ? (0, r.jsx)(S.E, {
                          className: le.Pn,
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: d,
                      })
                    : null,
                (0, r.jsx)("div", { className: le.V1 }),
            ],
        }),
    });
}
var ln = n(68614);
function ll() {
    let e = (0, _.bG)([M.A], () => M.A.useReducedMotion),
        { styleLarge: t, styleSmall: n } = o.useMemo(
            () => ({
                styleLarge: { width: `${10 + 50 * Math.random()}%` },
                styleSmall: { width: `${30 + 60 * Math.random()}%` },
            }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: y()(ln.kL, { [ln.cb]: e }),
        children: [
            (0, r.jsx)("div", { className: ln.Pz }),
            (0, r.jsxs)("div", {
                className: ln.FS,
                children: [
                    (0, r.jsx)("div", {
                        className: ln.jC,
                        style: t,
                        children: (0, r.jsx)(O.D, {
                            className: ln.R,
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            children: "_",
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: ln.jC,
                        style: n,
                        children: (0, r.jsx)(S.E, {
                            className: ln.R,
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: "_",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: ln.V1 }),
        ],
    });
}
var li = n(786783);
let la = Array(6)
        .fill(0)
        .map((e, t) => t),
    ls = [, , ,].fill(0).map((e, t) => t),
    lr = [, , , ,].fill(0).map((e, t) => t);
function lo(e) {
    return (0, r.jsx)(lc, { ...e });
}
function lc(e) {
    let { context: t, query: n, entrypoint: l, isScrollCloseToBottom: i } = e,
        a = l === g.s4.TEXT,
        s = l === g.s4.TEXT,
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
                searchesCommands: a = !0,
                searchesBots: s = !0,
                searchesActivities: r = !0,
            } = e;
            n.startsWith("/") && (n = n.substring(1));
            let {
                    commands: c,
                    commandSectionMap: d,
                    loading: u,
                } = (function (e) {
                    let { context: t, includeBuiltIn: n = !0, allowFetch: l = !0 } = e,
                        i = (0, C.SD)(t, !0, l),
                        a = (0, C.A4)(!0, l);
                    return o.useMemo(() => {
                        let e = i.result?.sections ?? {},
                            l = a.result?.sections ?? {},
                            s = [...Object.keys(e), ...Object.keys(l).filter((t) => !(t in e))];
                        n && s.push(es.Ik.BUILT_IN);
                        let r = [],
                            o = {};
                        for (let e of s) {
                            let n = (0, C.Sx)(t, e),
                                l = n.sectionCommands ?? [];
                            r.push(...l),
                                l.forEach((e) => {
                                    null != n.descriptor && (o[e.id] = n.descriptor);
                                });
                        }
                        return {
                            commands: r,
                            commandSectionMap: o,
                            loading: !0 === i.fetchState.fetching || !0 === a.fetchState.fetching,
                        };
                    }, [t, n, i.fetchState.fetching, i.result?.sections, a.fetchState.fetching, a.result?.sections]);
                })({ context: t, includeBuiltIn: !0 }),
                { apps: m } = (function (e) {
                    let {
                            context: t,
                            onlyWithCommands: n,
                            includeBuiltIn: l,
                            allowFetch: i = !0,
                            includeEmbeddedApps: a,
                            includeNonEmbeddedApps: s,
                        } = e,
                        r = "channel" === t.type ? t.channel : void 0,
                        c = (0, n0.MW)(r, [k.kc.CHAT]).hasBaseAccessPermissions,
                        d = (0, C.SD)(t, c, i),
                        u = (0, C.A4)(c, i),
                        m = o.useCallback(
                            (e) => {
                                let t = e.descriptor.application;
                                return (
                                    null != t &&
                                    (!!(a && (0, b.Ag)(t)) ||
                                        (null != t && s && !(0, b.Ag)(t) && (!n || Object.keys(e.commands).length > 0)))
                                );
                            },
                            [a, s, n],
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
                        s && l && p.push(b.N3),
                        { apps: p, loading: d?.fetchState.fetching === !0 || u?.fetchState.fetching === !0 }
                    );
                })({
                    context: t,
                    onlyWithCommands: !0,
                    includeBuiltIn: !0,
                    includeEmbeddedApps: r,
                    includeNonEmbeddedApps: s,
                }),
                p = (0, t$.A)({ guildId: "channel" === t.type ? t.channel.guild_id : null }),
                h = o.useMemo(() => {
                    var e, i, s, r, o, d, u;
                    let m, p, h, _, A;
                    if (!a) return [];
                    return n2(c, {
                        limit: l,
                        filterPredicates: [
                            ((m = (0, n0.Bh)("channel" === t.type ? t.channel : void 0, [k.kc.CHAT])),
                            (p = {}),
                            (e) => {
                                let { context: n, userId: l, roleIds: i, isImpersonating: a } = m;
                                if (!(e.applicationId in p)) {
                                    let {
                                            descriptor: s,
                                            isGuildInstalled: r,
                                            isUserInstalled: o,
                                        } = (0, C.Sx)(t, e.applicationId),
                                        c = n?.guild_id != null ? n1.we(s?.permissions, n.guild_id, l, i, a) : null,
                                        d = n?.guild_id != null ? n1._W(s?.permissions, n, n.guild_id) : null;
                                    p[e.applicationId] = {
                                        descriptor: s,
                                        applicationAllowedForUser: c,
                                        applicationAllowedForChannel: d,
                                        isGuildInstalled: r,
                                        isUserInstalled: o,
                                    };
                                }
                                let {
                                    descriptor: s,
                                    applicationAllowedForChannel: r,
                                    applicationAllowedForUser: o,
                                    isGuildInstalled: c,
                                    isUserInstalled: d,
                                } = p[e.applicationId];
                                return (
                                    n1.zl(e, m, {
                                        applicationAllowedForUser: o,
                                        applicationAllowedForChannel: r,
                                        commandBotId: s?.botId,
                                        isGuildInstalled: c,
                                        isUserInstalled: d,
                                    }) === n1.CA.ALLOWED
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
                            ((s = e),
                            (_ = (h = s?.split(" "))[0]),
                            (A = h.slice(1).join(" ")),
                            (e) => {
                                let t = e.untranslatedName,
                                    n = e.displayName;
                                return (
                                    !!(
                                        (t.startsWith(_) && t.split(" ").slice(1).join(" ").startsWith(A)) ||
                                        (n.startsWith(_) && n.split(" ").slice(1).join(" ").startsWith(A))
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
                                let n = z.Ay.getScoreWithoutLoadingLatest(u, e);
                                return z.Ay.getScoreWithoutLoadingLatest(u, t) - n;
                            }),
                            n3,
                        ],
                    });
                }, [a, c, l, t, n]),
                _ = o.useMemo(() => {
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
                A = o.useMemo(() => {
                    var e, l, a, o, c;
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
                    } else s && (u = m);
                    return n2(u, {
                        limit: i,
                        filterPredicates: [
                            ((d = (0, n0.Bh)("channel" === t.type ? t.channel : void 0, [
                                k.kc.CHAT,
                                k.kc.PRIMARY_ENTRY_POINT,
                            ])),
                            (e) => {
                                let { context: n, userId: l, roleIds: i, isImpersonating: a } = d,
                                    {
                                        descriptor: s,
                                        sectionCommands: r,
                                        isGuildInstalled: o,
                                        isUserInstalled: c,
                                    } = (0, C.Sx)(t, e.id),
                                    u = n?.guild_id != null ? n1.we(s?.permissions, n.guild_id, l, i, a) : null,
                                    m = n?.guild_id != null ? n1._W(s?.permissions, n, n.guild_id) : null;
                                return (
                                    null == r ||
                                    !(r.length > 0) ||
                                    r.some(
                                        (e) =>
                                            n1.zl(e, d, {
                                                applicationAllowedForUser: u,
                                                applicationAllowedForChannel: m,
                                                commandBotId: s?.botId,
                                                isGuildInstalled: o,
                                                isUserInstalled: c,
                                            }) === n1.CA.ALLOWED,
                                    )
                                );
                            }),
                        ],
                        bucketPredicates: [
                            ((l = e = n), (e) => (0, b.lq)(e).toLocaleLowerCase().startsWith(l.toLocaleLowerCase())),
                            ((a = e), (e) => (0, b.lq)(e).toLocaleLowerCase().includes(a.toLocaleLowerCase())),
                            ((o = e),
                            (e) => {
                                let t = (0, b.u8)(e)?.toLocaleLowerCase();
                                return t?.startsWith(o.toLocaleLowerCase()) ?? !1;
                            }),
                            ((c = e),
                            (e) => {
                                let t = (0, b.u8)(e)?.toLocaleLowerCase();
                                return t?.includes(c.toLocaleLowerCase()) ?? !1;
                            }),
                        ],
                        sortComparers: [n7, n5],
                    });
                }, [s, r, i, t, n, m, p]),
                f = _.length > 0,
                x = A.length > 0;
            return {
                commandResults: _,
                hasCommandResults: f,
                applicationResults: A,
                hasApplicationResults: x,
                isEmptyState: !f && !x,
                loading: u && a,
            };
        })({ context: t, query: n, searchesActivities: !0, searchesCommands: a, searchesBots: s }),
        {
            fetchState: h,
            applicationResults: A,
            fetchNextPage: f,
        } = (function (e) {
            let { context: t, query: n, fetches: l = !0, pageLimit: i = 1 / 0, entrypoint: a } = e;
            n.startsWith("/") && (n = n.substring(1));
            let s = a === g.s4.VOICE,
                r = "channel" === t.type ? t.channel.guild_id : void 0,
                [c, d] = o.useState(1),
                u = o.useRef(c);
            u.current = c;
            let { fetchState: m, totalPages: p } = (0, _.cf)(
                    [nZ.A],
                    () => ({
                        fetchState: nZ.A.getFetchState({
                            query: n,
                            guildId: r,
                            page: c,
                            integrationType: nQ.b.USER_INSTALL,
                            minUserInstallCommandCount: 1,
                            excludeAppsWithCustomInstallUrl: !0,
                            excludeNonEmbeddedApps: s,
                            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                            source: nJ.V.APP_LAUNCHER,
                        }),
                        totalPages:
                            nZ.A.getSearchResults({
                                query: n,
                                guildId: r,
                                page: c,
                                integrationType: nQ.b.USER_INSTALL,
                                minUserInstallCommandCount: 1,
                                excludeAppsWithCustomInstallUrl: !0,
                                excludeNonEmbeddedApps: s,
                                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                source: nJ.V.APP_LAUNCHER,
                            })?.totalPages ?? 0,
                    }),
                    [n, r, c, s],
                ),
                h = o.useMemo(
                    () =>
                        Array.from(
                            { length: m === nZ.e.FETCHED || m === nZ.e.ERROR ? c : c - 1 },
                            (e, t) =>
                                nZ.A.getSearchResults({
                                    query: n,
                                    guildId: r,
                                    page: t + 1,
                                    integrationType: nQ.b.USER_INSTALL,
                                    minUserInstallCommandCount: 1,
                                    excludeAppsWithCustomInstallUrl: !0,
                                    excludeNonEmbeddedApps: s,
                                    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                    source: nJ.V.APP_LAUNCHER,
                                })?.results ?? [],
                        ),
                    [m, r, n, c, s],
                ),
                A = o.useCallback(() => {
                    let e = h.length;
                    m === nZ.e.FETCHED &&
                        e === u.current &&
                        e > 0 &&
                        e < p &&
                        e < i &&
                        h[e - 1].length > 0 &&
                        (u.current++, d((e) => e + 1));
                }, [m, i, h, p]),
                f = o.useCallback(
                    (e) => {
                        let { query: t, page: n, guildId: l } = e;
                        $.$P({
                            query: t,
                            guildId: l,
                            options: {
                                page: n,
                                integrationType: nQ.b.USER_INSTALL,
                                minUserInstallCommandCount: 1,
                                excludeAppsWithCustomInstallUrl: !0,
                                excludeNonEmbeddedApps: s,
                                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                source: nJ.V.APP_LAUNCHER,
                            },
                        });
                    },
                    [s],
                );
            return (
                o.useEffect(() => {
                    l && f({ query: n, page: c, guildId: r });
                }, [n, r, f, c, l]),
                o.useEffect(() => {
                    d(1);
                }, [r, n]),
                { fetchState: m, applicationResults: h.flat(), fetchNextPage: A }
            );
        })({ query: n, context: t, fetches: !0, pageLimit: 5, entrypoint: l });
    o.useEffect(() => {
        i && h === nZ.e.FETCHED && f();
    }, [f, h, i]);
    let x = null == h || h === nZ.e.FETCHING,
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
                    A.map((e) =>
                        e.type === nX.j.CONNECTION || t.has(e.data.id)
                            ? null
                            : { application: e.data, installOnDemand: !0 },
                    ),
                ),
            ];
        }, [A, p]),
        N = E.length > 0,
        v = d && !N && !x;
    return c
        ? (0, r.jsx)(lh, {})
        : v
          ? (0, r.jsx)(nK, {
                type: g.wg.SEARCH_EMPTY,
                searchQuery: n,
                textContent: l === g.s4.TEXT ? et.intl.string(et.t.LSNOYf) : et.intl.string(et.t.Clu7Qh),
            })
          : (0, r.jsxs)("div", {
                children: [
                    m && (0, r.jsx)(ld, { context: t, commandResults: u, query: n }),
                    (N || x) &&
                        (0, r.jsx)(lm, {
                            context: t,
                            applicationResults: E,
                            includePlaceholder: x,
                            query: n,
                            searchesBots: s,
                        }),
                ],
            });
}
function ld(e) {
    let { context: t, commandResults: n, query: l } = e,
        i = n.length > 4,
        a = o.useMemo(() => (i ? n.slice(0, 4) : n), [n, i]),
        [s, c] = o.useState(!1),
        d = (0, nm.A)(s) ?? s,
        m = o.useCallback(() => c((e) => !e), []),
        h = ((0, nm.A)(l) ?? l)[0] !== l[0],
        _ = s && !h;
    o.useLayoutEffect(() => c(!1), [h]);
    let {
        ref: A,
        isTransitioning: f,
        onTransitionEnd: x,
    } = (0, tp.A)({ key: l, isExpanded: _, durationMs: 200, maxAnimationHeight: 680 });
    o.useEffect(() => {
        !d &&
            s &&
            (0, u.zV)(ea.HAw.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: g.yK.SEARCH,
                source: p.A.entrypoint(),
                num: n.length,
            });
    }, [n.length, d, s]);
    let E = _ || f,
        C = _ ? nq.buttonTypes.VIEW_LESS : nq.buttonTypes.VIEW_MORE,
        N = E ? n : a;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(nq, { title: et.intl.string(et.t["0hKkS+"]), buttonType: C, onClickViewButton: i ? m : void 0 }),
            (0, r.jsx)("div", {
                className: li._,
                ref: A,
                onTransitionEnd: x,
                children: N.map((e, n) => {
                    let { command: i, application: a, section: s } = e;
                    return (0, r.jsx)(
                        lt,
                        {
                            command: i,
                            application: a,
                            query: l,
                            searchResultsPosition: n,
                            onClick: () => {
                                let e = p.A.entrypoint();
                                W.k(g.Se.DISMISSED),
                                    (0, V.Mv)({
                                        command: i,
                                        location: D.Oh.APP_LAUNCHER_HOME_SEARCH,
                                        sectionName: g.yK.SEARCH,
                                    }),
                                    "channel" === t.type &&
                                        (w.Gf({
                                            channelId: t.channel.id,
                                            command: i,
                                            section: s,
                                            location: D.Oh.APP_LAUNCHER_HOME_SEARCH,
                                            triggerSection: void 0,
                                            queryLength: l.length,
                                            sectionName: g.yK.SEARCH,
                                            query: l,
                                            searchResultsPosition: n,
                                            source: e,
                                        }),
                                        B._.dispatch(ea.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: t.channel.id }));
                            },
                        },
                        i.id,
                    );
                }),
            }),
        ],
    });
}
function lu(e) {
    let { trackSearchResultsItemImpressionRef: t } = n8({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
    });
    return (0, r.jsx)("div", {
        className: li.Gn,
        ref: (e) => {
            t.current = e;
        },
        children: (0, r.jsx)(nV, { ...e, tracksImpression: !1, enableVideoBanner: !0 }),
    });
}
function lm(e) {
    let { context: t, applicationResults: n, includePlaceholder: l, query: i, searchesBots: a } = e;
    return a
        ? (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(nq, { title: et.intl.string(et.t.PHjkRE) }),
                  (0, r.jsxs)("div", {
                      className: li._,
                      children: [
                          n.map((e, n) => {
                              let { application: l, installOnDemand: a } = e;
                              return (0, r.jsx)(
                                  lp,
                                  {
                                      context: t,
                                      application: l,
                                      location: D.Oh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: g.yK.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: a,
                                      query: i,
                                  },
                                  l.id,
                              );
                          }),
                          l && ls.map((e) => (0, r.jsx)(ll, {}, e)),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(nq, { title: et.intl.string(et.t.shUONg) }),
                  (0, r.jsxs)("div", {
                      className: li.H$,
                      children: [
                          n.map((e, n) => {
                              let { application: l, installOnDemand: a } = e;
                              return (0, r.jsx)(
                                  lu,
                                  {
                                      context: t,
                                      application: l,
                                      look: nT.LARGE_BANNER,
                                      location: D.Oh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: g.yK.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: a,
                                      query: i,
                                  },
                                  l.id,
                              );
                          }),
                          l && lr.map((e) => (0, r.jsx)(nW, { look: nT.LARGE_BANNER }, e)),
                      ],
                  }),
              ],
          });
}
function lp(e) {
    let { onClickAppCard: t } = nU(e);
    return (0, r.jsx)(lt, {
        application: e.application,
        onClick: t,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
    });
}
function lh() {
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(nq, { title: et.intl.string(et.t["0hKkS+"]) }),
            (0, r.jsx)("div", { className: li._, children: la.map((e) => (0, r.jsx)(ll, {}, e)) }),
            (0, r.jsx)(nq, { title: et.intl.string(et.t.PHjkRE) }),
            (0, r.jsx)("div", { className: li._, children: ls.map((e) => (0, r.jsx)(ll, {}, e)) }),
        ],
    });
}
var l_ = n(62784);
let lA = [],
    lf = [, , , ,].fill(0).map((e, t) => t),
    lx = [
        { cards: [, , , ,].fill(0).map((e, t) => t), look: nT.MEDIUM_BANNER },
        { cards: [, , , ,].fill(0).map((e, t) => t), look: nT.ROW },
        { cards: [, , , ,].fill(0).map((e, t) => t), look: nT.ROW },
    ],
    lE = tW.K.APP_LAUNCHER_IN_TEXT;
function lC(e) {
    let { context: t, entrypoint: n, searchQuery: l, setSearchQuery: i, setScroller: a, isScrollCloseToBottom: s } = e,
        c = (0, _.bG)([te.A], () => te.A.getIsEnabled(), []),
        d = n === g.s4.TEXT && "channel" === t.type && null != t.channel && !t.channel.isPrivate(),
        u = (0, b.sw)(n),
        m = !(0, b.sw)(n),
        p = n === g.s4.TEXT,
        [h, A] = lT(!0),
        [x, E] = lT(d),
        [C, N] = lT(u),
        [v, I] = lT(m),
        y = h && x && C && v,
        j = (u || d) && !y,
        T = m && c;
    o.useEffect(() => {
        let e = "channel" === t.type ? t.channel?.guild_id : void 0;
        (0, tz.LV)({ guildId: e, force: !0 });
    }, [t]),
        o.useEffect(() => {
            n === g.s4.VOICE && tz.LK();
        }, [n]);
    let S = l.length > 0;
    return (0, r.jsxs)("div", {
        className: l_.kL,
        children: [
            T ? (0, r.jsx)(lN, {}) : null,
            (0, r.jsx)(lg, {
                searchQuery: l,
                setSearchQuery: i,
                placeholder: p ? et.intl.string(et.t.ziyFv2) : et.intl.string(et.t["pw+r5b"]),
            }),
            (0, r.jsx)(f.Ip, {
                ref: a,
                className: l_.Ph,
                fade: !0,
                children: S
                    ? (0, r.jsx)(lo, { context: t, query: l, entrypoint: n, isScrollCloseToBottom: s })
                    : (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(lb, { context: t, entrypoint: n, onEmptyState: A }),
                              d && "channel" === t.type && (0, r.jsx)(lI, { context: t, onEmptyState: E }),
                              u && (0, r.jsx)(ly, { context: t, entrypoint: n, onEmptyState: N }),
                              m && (0, r.jsx)(lv, { context: t, onEmptyState: I }),
                              y &&
                                  (0, r.jsx)(nK, {
                                      type: g.wg.HOME_EMPTY,
                                      textContent:
                                          n === g.s4.TEXT ? et.intl.string(et.t.iKZctW) : et.intl.string(et.t.RL7Ncg),
                                  }),
                              j && (0, r.jsx)(nY.A, {}),
                          ],
                      }),
            }),
        ],
    });
}
function lN() {
    return (0, r.jsxs)("div", {
        className: l_.G,
        children: [
            (0, r.jsx)(S.E, { className: l_.TR, variant: "text-sm/normal", children: et.intl.string(et.t.tZ3FNs) }),
            (0, r.jsx)(tr, { hideSearch: !0 }),
        ],
    });
}
function lg(e) {
    let { searchQuery: t, setSearchQuery: n, placeholder: l } = e,
        i = o.useRef(null),
        [a, s] = o.useState(!1),
        c = o.useMemo(
            () =>
                eE().debounce(
                    (e) => {
                        (0, u.zV)(ea.HAw.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
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
            s(!0),
                (0, u.zV)(ea.HAw.APP_LAUNCHER_SEARCH_FOCUSED, {
                    source: p.A.entrypoint(),
                    location: D.Oh.APP_LAUNCHER_HOME,
                });
        }, []),
        h = o.useCallback(() => {
            s(!1);
        }, []),
        _ = o.useCallback(
            (e) => {
                a || m(), n(e), c(e);
            },
            [a, n, m, c],
        );
    return (
        o.useEffect(() => {
            let e = i.current;
            if (null == e) return;
            let t = () => {
                a || m();
            };
            return (
                e.addEventListener("click", t),
                () => {
                    e.removeEventListener("click", t);
                }
            );
        }, [a, m]),
        (0, r.jsx)("div", {
            className: l_.PP,
            children: (0, r.jsx)(ti.I, {
                ref: i,
                placeholder: l,
                query: t,
                onChange: _,
                onClear: d,
                onFocus: h,
                autoFocus: !0,
            }),
        })
    );
}
function lb(e) {
    let { context: t, entrypoint: n, onEmptyState: l } = e,
        i = n === g.s4.VOICE,
        { frecentApps: a, loading: s } = (function (e) {
            let { context: t, onlyActivityApps: n, allowCommandFetch: l, includeAuthorizedAppsAndFetch: i } = e,
                { sectionDescriptors: a, loading: s } = H.cu({ context: t, filters: na, options: ns, allowFetch: l });
            return {
                loading: s,
                frecentApps: (function (e) {
                    let {
                            sectionDescriptors: t,
                            context: n,
                            onlyActivityApps: l,
                            includeAuthorizedAppsAndFetch: i,
                        } = e,
                        a = (0, _.bG)([t8.default], () => t8.default.getFetchState());
                    o.useEffect(() => {
                        i && a === t8.FetchState.NOT_FETCHED && t2.A.fetch();
                    }, [i, a]);
                    let s = (0, _.yK)([t8.default], () =>
                            i
                                ? t8.default
                                      .getNewestTokens()
                                      .filter((e) => e.scopes.includes(t1.F.APPLICATIONS_COMMANDS))
                                : [],
                        ),
                        r = t.filter((e) => e.id !== es.Ik.FRECENCY && e.id !== es.Ik.BUILT_IN),
                        c = "contextless" === n.type,
                        d = o.useMemo(() => {
                            let e = [];
                            return c && e.push(ni.gq), e;
                        }, [c]),
                        u = t6(r, s);
                    return o.useMemo(
                        () =>
                            l
                                ? u
                                      .filter(
                                          (e) =>
                                              null != e.application &&
                                              (0, b.Ag)(e.application) &&
                                              null != (0, to.eI)(n, e.id),
                                      )
                                      .filter((e) => !d.includes(e.id))
                                : u.filter((e) => !d.includes(e.id)),
                        [l, u, n, d],
                    );
                })({ sectionDescriptors: a, context: t, onlyActivityApps: n, includeAuthorizedAppsAndFetch: i }),
            };
        })({ context: t, onlyActivityApps: i, allowCommandFetch: !0, includeAuthorizedAppsAndFetch: !0 }),
        c = o.useMemo(() => {
            let e = [];
            for (let t of a) null != t.application && e.push({ application: t.application });
            return e;
        }, [a]),
        d = et.intl.string(et.t["s+UQpc"]),
        m = d;
    i && (m = et.intl.string(et.t["2pFD8L"]));
    let { items: p, handleViewMore: h } = lS({
        title: m,
        look: n === g.s4.VOICE ? nT.LARGE_BANNER : nT.ROW,
        items: c,
        limit: 8,
        sectionName: g.yK.RECENT_APPS,
    });
    o.useEffect(() => {
        s ||
            (0 !== p.length &&
                (0, u.zV)(ea.HAw.APP_LAUNCHER_FRECENTS_SEEN, {
                    num: p.length,
                    section_name: g.yK.RECENT_APPS,
                    location: g.W8.HOME,
                    source: n,
                }));
    }, [p.length, n, s]);
    let A = !s && 0 === p.length;
    return (o.useEffect(() => {
        l(A);
    }, [A, l]),
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
        (0, N.A)(l);
    })({ apps: p, onlyActivityApps: i }),
    s || A)
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(nq, { title: d, buttonType: nq.buttonTypes.VIEW_MORE, onClickViewButton: h }),
                  (0, r.jsx)("div", {
                      className: l_._,
                      children: (0, r.jsx)("div", {
                          className: l_.Ye,
                          children: p.map((e, n) => {
                              let { application: l } = e;
                              return i
                                  ? (0, r.jsx)(
                                        nB,
                                        {
                                            context: t,
                                            application: l,
                                            look: nT.ICON,
                                            location: g.W8.HOME,
                                            sectionName: g.yK.RECENT_APPS,
                                            resultsPosition: n,
                                            isOneClickCTA: !0,
                                            fetchesApplication: !1,
                                        },
                                        l.id,
                                    )
                                  : (0, r.jsx)(
                                        nV,
                                        {
                                            context: t,
                                            application: l,
                                            look: nT.ICON,
                                            location: g.W8.HOME,
                                            sectionName: g.yK.RECENT_APPS,
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
    tY();
    let l = (0, t$.A)({ guildId: "channel" === t.type ? t.channel?.getGuildId() : void 0 }),
        i = nT.LARGE_BANNER,
        { trackSectionImpressionRef: a } = (0, nF.A)({
            sectionName: g.yK.ACTIVITIES,
            numItems: l.length,
            numVisibleItems: l.length,
        }),
        s = no(),
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
                          a.current = e;
                      },
                      children: (0, r.jsx)(nq, { title: et.intl.string(et.t.shUONg) }),
                  }),
                  (0, r.jsx)("div", {
                      className: l_.a2,
                      children: l.map((e, n) => {
                          let { application: l } = e;
                          return (0, r.jsx)(
                              nB,
                              {
                                  context: t,
                                  application: l,
                                  look: i,
                                  location: D.Oh.APP_LAUNCHER_HOME,
                                  sectionName: g.yK.ACTIVITIES,
                                  resultsPosition: n,
                                  sectionOverallPosition: 0,
                                  isOneClickCTA: !s,
                                  fetchesApplication: !1,
                              },
                              l.id,
                          );
                      }),
                  }),
              ],
          });
}
function lI(e) {
    let { context: t, onEmptyState: n } = e,
        l = g.yK.APPS_IN_THIS_SERVER,
        { appsInThisServer: i, isLoading: a } = (function (e) {
            let { context: t } = e,
                n = "channel" === t.type ? t.channel : void 0,
                l = (0, C.ON)(n?.guild_id, !0),
                { commandsByActiveSection: i, loading: a } = H.cu({
                    context: t,
                    filters: { commandTypes: [k.kc.CHAT, k.kc.PRIMARY_ENTRY_POINT] },
                    options: { placeholderCount: 0, limit: es.Hi, includeFrecency: !0 },
                    allowFetch: !0,
                }),
                s = o.useMemo(
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
                                .filter((e) => !(e.id in nr.gZ) && s.has(e.id)),
                        [l.result?.sections, s],
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
                isLoading: l.fetchState.fetching || a,
            };
        })({ context: t }),
        { items: s, handleViewMore: c } = lS({
            title: et.intl.string(et.t.KfkuGc),
            look: nT.ROW,
            items: i,
            limit: 4,
            sectionName: l,
        }),
        { trackSectionImpressionRef: d } = (0, nF.A)({ sectionName: l, numItems: i.length, numVisibleItems: s.length }),
        u = !a && 0 === s.length;
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
                      className: l_.l2,
                      children: a
                          ? lf.map((e) => (0, r.jsx)(nW, { look: nT.ROW }, e))
                          : s.map((e, n) => {
                                let { application: i } = e;
                                return null != i
                                    ? (0, r.jsx)(
                                          nV,
                                          {
                                              context: t,
                                              application: i,
                                              look: nT.ROW,
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
function ly(e) {
    let { context: t, entrypoint: n, onEmptyState: l } = e,
        {
            fetchState: i,
            recommendationsSections: a,
            isInstallOnDemand: s,
        } = (function (e) {
            let t,
                n,
                { context: l, entrypoint: i } = e,
                a =
                    ((t = (0, _.bG)([tJ.default], () => tJ.default.onlyShowPreviewAppCollections)),
                    (n = tX.getConfig({ location: "App Launcher Home (Web)" }).enabled),
                    t ? tU.W.PREVIEW : n ? tU.W.NON_STAFF_PREVIEW : tU.W.ACTIVE);
            o.useEffect(() => {
                (0, $.An)({ surface: lE, activeState: a });
            }, [a]);
            let { sectionDescriptors: s } = H.cu({
                    context: l,
                    filters: { commandTypes: [k.kc.CHAT] },
                    options: { placeholderCount: 0, limit: es.Hi, includeFrecency: !0 },
                    allowFetch: !0,
                }),
                r = o.useCallback((e) => null == s.find((t) => t.id === e.id), [s]),
                c = (0, _.bG)([tZ.A], () => tZ.A.getFetchState({ surface: lE, activeState: a })),
                d = (0, _.bG)([tZ.A], () => tZ.A.getCollections({ surface: lE, activeState: a })),
                u = i === g.s4.VOICE;
            return {
                fetchState: c,
                recommendationsSections: o.useMemo(() => (u ? (0, b.hX)(d) : d), [d, u]),
                isInstallOnDemand: r,
            };
        })({ context: t, entrypoint: n }),
        c = (function (e) {
            let { context: t, recommendationsSections: n } = e;
            tY();
            let l = (0, t$.A)({ guildId: "channel" === t.type ? t.channel?.getGuildId() : void 0 });
            return o.useMemo(() => {
                if (!n.some((e) => (0, tK.Lt)(e.flags, tV.APPENDS_REMAINING_ACTIVITIES))) return lA;
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
        })({ context: t, recommendationsSections: a }),
        d = i === tZ.e.FETCHING,
        u = !d && 0 === a.length;
    return (o.useEffect(() => {
        l(u);
    }, [u, l]),
    u)
        ? null
        : d
          ? lx.map((e, t) => {
                let { cards: n, look: l } = e;
                return (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsx)(nq.Loading, {}),
                            (0, r.jsx)("div", {
                                className: l === nT.ROW ? l_.l2 : l_.a2,
                                children: n.map((e) => (0, r.jsx)(nW, { look: l }, e)),
                            }),
                        ],
                    },
                    t,
                );
            })
          : a.map((e, n) =>
                (0, r.jsx)(
                    lj,
                    {
                        recommendationsSection: e,
                        remainingActivities: c,
                        isInstallOnDemand: s,
                        position: n,
                        context: t,
                    },
                    e.id,
                ),
            );
}
function lj(e) {
    let t,
        n,
        { recommendationsSection: l, remainingActivities: i, isInstallOnDemand: a, position: s, context: c } = e,
        d = l.title;
    switch (l.type) {
        case tG.Y.BANNER_CARDS:
            t = nT.LARGE_BANNER;
            break;
        case tG.Y.SMALL_BANNER_CARDS:
            t = nT.MEDIUM_BANNER;
            break;
        default:
            t = nT.ROW;
    }
    let u = o.useMemo(() => {
            let e = l.application_directory_collection_items
                .map((e) => {
                    if (e.type === tF.L.APPLICATION)
                        return {
                            collectionItemId: e.id,
                            collectionItemImageHash: e.image_hash,
                            showsPromoted: (0, tK.Lt)(e.flags, tB.PROMOTED),
                            application: e.application,
                            installOnDemand: a(e.application),
                        };
                })
                .filter(t0.Vq);
            return (
                (0, tK.Lt)(l.flags, tV.APPENDS_REMAINING_ACTIVITIES) &&
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
        }, [a, l.application_directory_collection_items, l.flags, i]),
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
    let { items: p, handleViewMore: h } = lS({
            title: d,
            look: t,
            items: u,
            limit: n,
            sectionName: m,
            sectionOverallPosition: s,
        }),
        { trackSectionImpressionRef: _ } = (0, nF.A)({ sectionName: m, numItems: u.length, numVisibleItems: p.length }),
        A = l.type !== tG.Y.SMALL_BANNER_CARDS;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)("div", {
                ref: (e) => {
                    _.current = e;
                },
                children: (0, r.jsx)(nq, {
                    title: l.title,
                    buttonType: nq.buttonTypes.VIEW_MORE,
                    onClickViewButton: h,
                }),
            }),
            (0, r.jsx)("div", {
                className: t === nT.ROW ? l_.l2 : l_.a2,
                children: p.map((e, n) => {
                    let l,
                        {
                            collectionItemId: i,
                            collectionItemImageHash: a,
                            application: o,
                            installOnDemand: d,
                            showsPromoted: u,
                        } = e;
                    return (
                        null != i && null != a && (l = (0, tQ.DH)({ itemId: i, hash: a, containerWidth: 500 })),
                        (0, r.jsx)(
                            nV,
                            {
                                context: c,
                                application: o,
                                look: t,
                                sectionName: m,
                                resultsPosition: n,
                                location: D.Oh.APP_LAUNCHER_HOME,
                                installOnDemand: d,
                                enableVideoBanner: A,
                                sectionOverallPosition: s,
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
function lS(e) {
    let { title: t, look: n, items: l, limit: i, sectionName: a, sectionOverallPosition: s } = e,
        { pushHistory: r } = (0, h.uM)();
    return o.useMemo(
        () =>
            l.length <= i
                ? { items: l, handleViewMore: void 0 }
                : {
                      items: l.slice(0, i),
                      handleViewMore: () => {
                          (0, u.zV)(ea.HAw.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: a,
                              source: p.A.entrypoint(),
                              num: l.length,
                          }),
                              r({
                                  type: h.Wy.LIST,
                                  title: t,
                                  look: n,
                                  items: l,
                                  sectionName: a,
                                  sectionOverallPosition: s,
                              });
                      },
                  },
        [l, i, a, r, t, n, s],
    );
}
var lL = n(1555);
function lP(e) {
    let { context: t, entrypoint: n, title: l, look: i, items: a, sectionName: s, sectionOverallPosition: c } = e,
        d = no(),
        u = o.useMemo(() => (n === g.s4.TEXT ? nV : nB), [n]);
    return (0, r.jsxs)("section", {
        className: lL.kL,
        "aria-label": et.intl.formatToPlainString(et.t.iobNIB, { sectionTitle: l }),
        children: [
            (0, r.jsxs)("div", {
                className: lL.wx,
                children: [
                    (0, r.jsx)(eT, { className: lL.Gv }),
                    (0, r.jsx)(O.D, { variant: "heading-md/medium", color: "text-strong", children: l }),
                ],
            }),
            (0, r.jsx)(f.Ip, {
                children: (0, r.jsx)("div", {
                    className: y()({ [lL.wf]: i !== nT.ROW, [lL.Ge]: i === nT.ROW }),
                    children: a.map((e, n) => {
                        let { application: l, installOnDemand: a, showsPromoted: o } = e;
                        return (0, r.jsx)(
                            u,
                            {
                                context: t,
                                application: l,
                                look: i,
                                sectionName: s,
                                resultsPosition: n,
                                location: D.Oh.APP_LAUNCHER_LIST_VIEW_ALL,
                                installOnDemand: a,
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
var lR = n(900376);
let lO = { width: 500, height: Y.$V },
    lk = { height: Y.$V },
    lM = o.memo(
        o.forwardRef(function (e, t) {
            let { context: n, entrypoint: l, initHistory: i } = e,
                { analyticsLocations: a } = (0, m.Ay)(d.A.APP_LAUNCHER);
            return (
                o.useEffect(() => {
                    (0, u.zV)(ea.HAw.APPLICATION_COMMAND_TOP_OF_FUNNEL, { source: l, location: "app_launcher" });
                }, [l]),
                o.useEffect(() => {
                    let e = Date.now();
                    return () => {
                        (0, u.zV)(ea.HAw.APP_LAUNCHER_CLOSED, {
                            reason: p.A.closeReason(),
                            time_spent: Date.now() - e,
                            source: l,
                        });
                    };
                }, [l]),
                (0, r.jsx)("div", {
                    className: lR.jP,
                    ref: t,
                    style: lO,
                    children: (0, r.jsx)("div", {
                        className: lR.FG,
                        children: (0, r.jsx)(m.f5, {
                            value: a,
                            children: (0, r.jsx)(lw, {
                                initHistory: i,
                                children: (0, r.jsx)(lH, { context: n, entrypoint: l }),
                            }),
                        }),
                    }),
                })
            );
        }),
    );
function lw(e) {
    let { initHistory: t, children: n } = e,
        [l, i] = o.useState(t ?? [{ type: h.Wy.HOME }]),
        [a, s] = o.useState({}),
        c = l[l.length - 1],
        [d, u] = o.useState(!1),
        m = o.useCallback((e) => {
            i((t) => [...t, e]);
        }, []),
        p = o.useCallback(() => {
            let e = null;
            i((t) => (t.length <= 1 ? t : ((e = t[t.length - 1]), t.slice(0, -1)))),
                s((t) => (null == e ? t : { ...t, [e.type]: e }));
        }, []),
        _ = o.useCallback((e) => l.findLast((t) => t.type === e) ?? a[e], [l, a]);
    return (0, r.jsx)(h.L8.Provider, {
        value: {
            history: l,
            discard: a,
            currentView: c,
            pushHistory: m,
            goBack: p,
            getMostRecentHistoryItemByType: _,
            isSlideReady: d,
            setSlideReady: u,
        },
        children: n,
    });
}
function lH(e) {
    let { context: t, entrypoint: n } = e,
        [l, i] = o.useState(""),
        { setScroller: a, isCloseToBottom: s } = (function (e) {
            let [t, n] = o.useState(null),
                [l, i] = o.useState(!1),
                a = o.useRef(0);
            return (
                o.useEffect(() => {
                    t?.scrollTo(0, 0);
                }, [t, e]),
                o.useEffect(() => {
                    if (null != t)
                        return (
                            t.scrollTo(0, a.current),
                            t.addEventListener("scroll", e),
                            () => {
                                t.removeEventListener("scroll", e, !1);
                            }
                        );
                    function e() {
                        null == t ||
                            ((a.current = t.scrollTop), i(t.scrollHeight - (t.scrollTop + t.clientHeight) < 340));
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
    let _ = u(h.Wy.LIST),
        A = u(h.Wy.APPLICATION);
    return (0, r.jsxs)(c.t, {
        activeSlide: d.type,
        width: 500,
        onSlideReady: p,
        children: [
            (0, r.jsx)(c.q, {
                id: h.Wy.HOME,
                children: (0, r.jsx)("div", {
                    className: lR.xD,
                    style: lk,
                    children: (0, r.jsx)(lC, {
                        isScrollCloseToBottom: s,
                        setScroller: a,
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
                    className: lR.xD,
                    style: lk,
                    children:
                        null != _ &&
                        (0, r.jsx)(lP, {
                            context: t,
                            entrypoint: n,
                            title: _.title,
                            look: _.look,
                            items: _.items,
                            sectionName: _.sectionName,
                            sectionOverallPosition: _.sectionOverallPosition,
                        }),
                }),
            }),
            (0, r.jsx)(c.q, {
                id: h.Wy.APPLICATION,
                children: (0, r.jsx)("div", {
                    className: lR.xD,
                    style: lk,
                    children:
                        null != A &&
                        (0, r.jsx)(tH, { context: t, application: A.application, sectionName: A.sectionName }),
                }),
            }),
        ],
    });
}
