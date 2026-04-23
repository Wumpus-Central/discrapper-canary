n.d(t, { A: () => iD }), n(775443);
var i,
    l,
    a,
    s,
    r = n(627968),
    o = n(64700),
    c = n(430690),
    d = n(793574),
    u = n(58149),
    m = n(688810),
    p = n(989837),
    _ = n(485878),
    h = n(17928),
    A = n(696986),
    f = n(364522),
    x = n(435582),
    C = n(283488),
    g = n(264322),
    N = n(429913),
    E = n(500049),
    b = n(735991),
    I = n(717048),
    v = n(503698),
    y = n.n(v),
    j = n(320448),
    P = n(559647),
    L = n(834730),
    T = n(939249),
    S = n(247928),
    R = n(821609),
    O = n(534514),
    k = n(155718),
    M = n(775602),
    w = n(721768),
    D = n(842209),
    H = n(392054),
    U = n(972995),
    V = n(390756),
    B = n(625494),
    W = n(211401),
    G = n(71393);
function F(e) {
    return o.useMemo(
        () =>
            "contextless" === e.type
                ? { channel: void 0, guild: void 0 }
                : { channel: e.channel, guild: G.A.getGuild(e.channel.guild_id) },
        [e],
    );
}
var z = n(56494),
    $ = n(26909),
    K = n(354138),
    q = n(927813),
    Y = n(60809),
    X = n(297486),
    Z = n(922016),
    Q = n(112173),
    J = n(550079),
    ee = n(477782),
    et = n(985018),
    en = n(436806);
function ei(e) {
    let { sortOrder: t, onSortOptionClick: n, closePopout: i } = e,
        l = (e) => {
            n(e), i();
        };
    return (0, r.jsx)("div", {
        className: y()(Y.Wx, en.k),
        children: (0, r.jsx)(J.W, {
            "data-menu-migrated": !0,
            navId: "command-list-sort",
            "aria-label": et.intl.string(et.t.Ugo9ud),
            hideScroller: !0,
            onClose: i,
            onSelect: i,
            children: (0, r.jsxs)(ee.rX, {
                label: et.intl.string(et.t.yeYaHf),
                children: [
                    (0, r.jsx)(ee.iD, {
                        id: "sort-by-popular",
                        group: "sort-by",
                        label: et.intl.string(et.t.SzxiqK),
                        action: () => l(Y.Ug.POPULAR),
                        checked: t === Y.Ug.POPULAR,
                    }),
                    (0, r.jsx)(ee.iD, {
                        id: "sort-by-alphabetical",
                        group: "sort-by",
                        label: et.intl.string(et.t.m8xsti),
                        action: () => l(Y.Ug.ALPHABETICAL),
                        checked: t === Y.Ug.ALPHABETICAL,
                    }),
                ],
            }),
        }),
    });
}
function el(e) {
    let t,
        { sortOrder: n, onSortOptionClick: i } = e,
        l = o.useRef(null);
    switch (n) {
        case Y.Ug.POPULAR:
            t = et.intl.string(et.t.SzxiqK);
            break;
        case Y.Ug.ALPHABETICAL:
            t = et.intl.string(et.t.m8xsti);
    }
    return (0, r.jsx)(Z.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(ei, { sortOrder: n, onSortOptionClick: i, closePopout: t });
        },
        position: "bottom",
        align: "left",
        children: (e) =>
            (0, r.jsx)(R.$, {
                ...e,
                buttonRef: l,
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
    let { context: t, command: n, section: i, sectionName: l } = e,
        a = o.useCallback(() => {
            let e = p.A.entrypoint();
            W.k(E.Se.COMMAND),
                (0, V.Mv)({ command: n, location: H.Oh.APP_LAUNCHER_APPLICATION_VIEW, sectionName: l }),
                "channel" === t.type &&
                    (w.Gf({
                        channelId: t.channel.id,
                        command: n,
                        section: i,
                        location: H.Oh.APP_LAUNCHER_APPLICATION_VIEW,
                        sectionName: l,
                        source: e,
                        commandOrigin: H.iw.APPLICATION_LAUNCHER,
                    }),
                    B._.dispatch(ea.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: t.channel.id }));
        }, [t, n, i, l]),
        s = (n.options?.length ?? 0) > 0,
        c = o.useMemo(() => (0, X.SD)(n.displayDescription, void 0), [n.displayDescription]),
        d = o.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: eo.sd,
                    children: [
                        (0, r.jsx)(L.E, { variant: "text-sm/semibold", color: "text-strong", children: n.displayName }),
                        (0, r.jsx)(L.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: c }),
                    ],
                }),
            [n.displayName, c],
        );
    return (0, r.jsxs)(T.D, {
        className: eo.G5,
        onClick: a,
        children: [
            (0, r.jsx)(S.M, { className: eo.fg, children: d }),
            s ? (0, r.jsx)(j._, {}) : (0, r.jsx)(ep, { context: t, command: n, sectionName: l }),
        ],
    });
}
function em() {
    let e = (0, h.bG)([M.A], () => M.A.useReducedMotion),
        { styleLarge: t, styleSmall: n } = o.useMemo(
            () => ({
                styleLarge: { width: `${10 + 20 * Math.random()}%`, height: "auto" },
                styleSmall: { width: `${30 + 60 * Math.random()}%`, height: "auto" },
            }),
            [],
        ),
        i = o.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: eo.Vc,
                    children: [
                        (0, r.jsx)("div", {
                            className: er.jC,
                            style: t,
                            children: (0, r.jsx)(L.E, {
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
                            children: (0, r.jsx)(L.E, {
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
    return (0, r.jsx)("div", { className: y()(eo.G5, er.NX, { [er.cb]: e }), children: i });
}
function ep(e) {
    let { context: t, command: n, sectionName: i } = e;
    (0, g.A4)(!0, !0), (0, g.SD)(t, !0, !0);
    let l = F(t),
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
                            location: H.Oh.APP_LAUNCHER_APPLICATION_VIEW,
                            sectionName: i,
                        },
                    });
                    e &&
                        (await (0, b.MJ)({
                            command: n,
                            optionValues: {},
                            context: l,
                            sectionName: i,
                            commandOrigin: H.iw.APP_LAUNCHER_APPLICATION_VIEW,
                        }),
                        W.k(E.Se.COMMAND));
                } finally {
                    s(!1);
                }
            },
            [n, t, i, l],
        );
    return (0, r.jsx)(R.$, {
        type: "submit",
        onClick: c,
        disabled: a,
        variant: "secondary",
        "aria-label": et.intl.formatToPlainString(et.t.UXw6W2, { commandName: n.untranslatedName }),
        text: et.intl.string(et.t.TXNS7S),
        icon: P.l,
        iconPosition: "end",
        size: "md",
    });
}
function e_(e) {
    let { context: t, commands: n, section: i, headerName: l, sectionName: a, children: s } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: eo.Zp,
                      children: [(0, r.jsx)(O.D, { variant: "heading-sm/semibold", children: l }), s],
                  }),
                  (0, r.jsx)("ul", {
                      className: eo.dO,
                      "aria-label": l,
                      children: n.map((e, n) =>
                          e === ec
                              ? (0, r.jsx)(em, {}, e + n)
                              : (0, r.jsx)(eu, { context: t, command: e, section: i, sectionName: a }, e.id),
                      ),
                  }),
              ],
          });
}
function eh(e) {
    let { context: t, application: n, sectionName: i, installOnDemand: l, setHasCommands: a } = e,
        {
            filterSection: s,
            commandsByActiveSection: c,
            sectionDescriptors: d,
            loading: u,
        } = D.cu({
            context: t,
            filters: { commandTypes: [k.kc.CHAT] },
            options: {
                placeholderCount: 0,
                limit: es.Hi,
                includeFrecency: !0,
                allowApplicationState: l,
                installOnDemand: l,
                applicationId: n.id,
            },
            allowFetch: !0,
        }),
        m = d.find((e) => e.id === n.id) ?? null,
        {
            sortOrder: p,
            setSortOrder: _,
            commands: h,
            canSort: A,
        } = (function (e) {
            let { sectionId: t, commandsByActiveSection: n } = e,
                [i, l] = o.useState(Y.Ug.ALPHABETICAL),
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
                                      i = t.command.global_popularity_rank;
                                  if (null != n && null != i) {
                                      if (n !== i) return n - i;
                                  } else if (null != n) return -1;
                                  else if (null != i) return 1;
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
                K.Di(t, { dontRefetchMs: q.A.Millis.DAY });
            }, [t]),
                o.useLayoutEffect(() => {
                    r && l(Y.Ug.POPULAR);
                }, [r]);
            let c = a;
            switch (i) {
                case Y.Ug.POPULAR:
                    c = s;
                    break;
                case Y.Ug.ALPHABETICAL:
                    c = a;
            }
            return { sortOrder: i, setSortOrder: l, commands: c, canSort: r };
        })({ sectionId: n.id, commandsByActiveSection: c });
    o.useEffect(() => {
        s(n.id);
    }, [n.id, s]);
    let f = (function (e) {
        let { context: t, commands: n, limit: i = n.length } = e,
            l = F(t),
            a = (0, z.F)(l),
            s = o.useMemo(() => n.reduce((e, t) => ((e[t.id] = t), e), {}), [n]);
        return o.useMemo(
            () =>
                a
                    .map((e) => s[e])
                    .filter((e) => null != e)
                    .sort((e, t) => {
                        let n = $.Ay.getScoreWithoutLoadingLatest(l, e);
                        return $.Ay.getScoreWithoutLoadingLatest(l, t) - n;
                    })
                    .slice(0, i),
            [a, s, l, i],
        );
    })({ context: t, commands: h, limit: 5 });
    return (o.useEffect(() => {
        a(h.length > 0);
    }, [a, h]),
    u || 0 !== h.length)
        ? (0, r.jsxs)("ul", {
              className: eo.hQ,
              children: [
                  (0, r.jsx)(e_, {
                      context: t,
                      section: m,
                      commands: f,
                      headerName: et.intl.string(et.t.acSE0h),
                      sectionName: i,
                  }),
                  (0, r.jsx)(e_, {
                      context: t,
                      section: m,
                      commands: u ? ed : h,
                      headerName: et.intl.string(et.t.DUU9L3),
                      sectionName: i,
                      children: A && (0, r.jsx)(el, { sortOrder: p, onSortOptionClick: _ }),
                  }),
              ],
          })
        : null;
}
var eA = n(310784),
    ef = n.n(eA),
    ex = n(735438),
    eC = n.n(ex),
    eg = n(462887),
    eN = n(602853),
    eE = n(661531),
    eb = n(736653),
    eI = n(654107),
    ev = n(998304),
    ey = n(548411),
    ej = n(735886);
function eP(e) {
    let { className: t } = e,
        { goBack: n } = (0, _.uM)(),
        i = o.useCallback(() => {
            n();
        }, [n]);
    return (0, r.jsx)(T.D, {
        onClick: i,
        className: y()(ej.v, t),
        "aria-label": et.intl.string(et.t.ybUZql),
        children: (0, r.jsx)(ey.Z, { size: "sm", color: eE.A.colors.INTERACTIVE_TEXT_ACTIVE }),
    });
}
var eL = n(691540),
    eT = n(857250),
    eS = n(97483),
    eR = n(173936),
    eO = n(192308),
    ek = n(365199),
    eM = n(658575),
    ew = n(342384),
    eD = n(20015),
    eH = n(204776),
    eU = n(50268),
    eV = n(928658),
    eB = n(395671),
    eW = n(967198),
    eG = n(287809),
    eF = n(954571),
    ez = n(957565),
    e$ = n(692848),
    eK = n(442433),
    eq = n(700210),
    eY = n(253932);
function eX(e) {
    let { application: t } = e,
        n = eW.A.getGuildId() ?? void 0;
    return (0, eq.A)({
        application: t,
        guildId: n,
        onItemClick: () => {
            (0, eO.closeModal)(Y.gS), (0, W.k)(E.Se.DISMISSED);
        },
    });
}
function eZ(e) {
    let { application: t, onSelect: n } = e,
        i = eY.Q_.useSetting(),
        l = (0, eU.A)({ id: t.id, label: et.intl.string(et.t["+NP/b2"]) }),
        a = eX({ application: t });
    return (0, r.jsxs)(J.W, {
        "data-menu-migrated-auto": !0,
        navId: "activity-shelf-item-context",
        onClose: eK.Z_,
        "aria-label": et.intl.string(et.t.WkcHT9),
        onSelect: n,
        children: [
            null != a && (0, r.jsx)(ee.rX, { children: a }, "manage-app-actions"),
            i && (0, r.jsx)(ee.rX, { children: l }, "developer-actions"),
        ],
    });
}
var eQ = n(527080);
function eJ(e) {
    let { application: t, context: i, className: l, sectionName: a } = e,
        s = o.useRef(null),
        c = (0, h.bG)([p.A], () => p.A.entrypoint()),
        d = (0, b.Pp)(t),
        m = (0, eH.Ie)(d),
        _ = (0, eM.G)(t.id),
        A = (0, h.bG)([eW.A], () => eW.A.getGuildId() ?? void 0, []),
        f = {
            location: H.Oh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: t.id,
            section_name: a,
            source: p.A.lastShownEntrypoint(),
        },
        x = eG.default.getCurrentUser(),
        C = (0, eU.A)({ id: t.id, label: et.intl.string(et.t["+NP/b2"]) }),
        g = eX({ application: t }),
        N = (0, eD.n)(t, ea.gfo.EMBEDDED),
        E = "channel" === i.type ? i.channel : void 0;
    return (0, r.jsxs)("div", {
        className: eQ.k,
        children: [
            (0, r.jsx)(T.D, {
                onClick: () => {
                    let e = N ? (0, ew.W)({ applicationId: t.id, referrerId: x?.id }) : (0, ew.V)({ id: t.id, ...d });
                    (0, ez.C)(e, () => (0, eL.P0)((0, eT.o)(et.intl.string(et.t["L/PwZf"]), eS.Ck.SUCCESS))),
                        eF.default.track(ea.HAw.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: t.id,
                            source: c,
                        });
                },
                className: y()(eQ.v, l),
                "aria-label": et.intl.string(et.t.WqhZss),
                children: (0, r.jsx)(eR.q, { size: "sm", color: eE.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, r.jsx)(Z.Y, {
                targetElementRef: s,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, r.jsxs)(J.W, {
                        "data-menu-needs-review": !0,
                        className: Y.qp,
                        navId: "app-details-more-menu",
                        onClose: i,
                        "aria-label": et.intl.string(et.t.AXIHpV),
                        onSelect: void 0,
                        children: [
                            (0, r.jsxs)(ee.rX, {
                                children: [
                                    _ &&
                                        (0, r.jsx)(ee.Dr, {
                                            id: "open-storefront",
                                            label: et.intl.string(et.t.kRvlKJ),
                                            action: () => {
                                                (0, eO.openModalLazy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("49328"),
                                                        n.e("69295"),
                                                        n.e("85384"),
                                                        n.e("42944"),
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
                                                      (0, e$.o)({
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
                                    g,
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
                                                      contextualGuildId: E?.getGuildId() ?? void 0,
                                                      contextualChannelId: E?.id,
                                                  });
                                              },
                                          })
                                        : null,
                            }),
                            (0, r.jsx)(ee.rX, { children: C }),
                        ],
                    });
                },
                align: "right",
                position: "bottom",
                children: (e) =>
                    (0, r.jsx)(T.D, {
                        innerRef: s,
                        ...e,
                        onClick: e.onClick,
                        className: y()(eQ.v, l),
                        "aria-label": et.intl.string(et.t["UKOtz+"]),
                        children: (0, r.jsx)(ek.j, { size: "sm", color: eE.A.colors.INTERACTIVE_TEXT_ACTIVE }),
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
    let { application: t, context: n, name: i, iconURL: l, scrollerRef: a, sectionName: s } = e,
        c = (0, eg.q)((0, eb.Ay)()),
        d = o.useRef(null),
        u = o.useRef(null),
        m = o.useRef(null),
        p = o.useRef(null),
        _ = (0, eN.r)(eE.A.colors.BACKGROUND_BASE_LOW).hex(),
        h = (0, eI.Ay)("number" == typeof l ? "" : l, _ ?? ""),
        A = o.useMemo(
            () =>
                (0, ev.lZ)({
                    foreground: ef()(h),
                    background: ef()(c ? "#000000" : "#ffffff"),
                    ratio: 5,
                    saturationFactor: 0.6,
                })?.hex() ?? h,
            [h, c],
        ),
        f = e1(d),
        x = e1(u),
        C = o.useCallback(() => {
            let e = a.current,
                t = d.current,
                n = m.current,
                i = p?.current,
                l = parseInt(f?.height ?? ""),
                s = parseInt(x?.height ?? "");
            if (null != e && null != t && null != n && !isNaN(l) && !isNaN(s)) {
                var r;
                let a = e.scrollTop ?? 0,
                    o = 0 !== e.scrollHeight ? e.scrollHeight : s + 20,
                    d = 0 !== e.clientHeight ? e.clientHeight : s + 20,
                    u = s - l,
                    m = (0, ex.clamp)(o - d, u + 1, s + 20),
                    p = u === m ? 1 : (0, ex.clamp)((a - u) / (m - u), 0, 1);
                (t.style.filter = `brightness(${1 + ((c ? 1.4 : 0.6) - 1) * p})`),
                    (t.style.backgroundColor = `color-mix(in oklab,${h} ${(1 - p) * 100}%, ${A})`),
                    (n.style.opacity = `${0 + +p}`),
                    (n.style.transform = `translateY(${(r = l / 4) + (0 - r) * p}px)`),
                    null != i && (i.style.opacity = `${1 + -1 * p}`);
            }
        }, [A, h, x?.height, c, a, f?.height]);
    return (
        o.useEffect(() => {
            C();
        }, [C, c]),
        o.useEffect(() => {
            let e = a.current,
                t = () => {
                    C();
                };
            return (
                e?.addEventListener("scroll", t),
                () => {
                    e?.removeEventListener("scroll", t);
                }
            );
        }, [a, C]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: e0.Xp,
                    children: [
                        (0, r.jsx)("div", {
                            className: e0.LO,
                            children: (0, r.jsx)("div", { className: e0.If, ref: d }),
                        }),
                        (0, r.jsx)("div", { className: e0.FY, children: (0, r.jsx)(eP, { className: e0.aY }) }),
                        (0, r.jsx)("div", {
                            className: e0.VW,
                            children: (0, r.jsx)(O.D, {
                                ref: m,
                                className: e0.n,
                                variant: "heading-lg/extrabold",
                                children: i,
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
                (0, r.jsx)("div", { ref: u, className: e0.b8, style: { backgroundColor: h } }),
            ],
        })
    );
}
var e7 = n(34188),
    e5 = n(700623),
    e4 = n(177953),
    e9 = n(825484),
    e3 = n(512950),
    e8 = n(900797),
    e6 = n(847374),
    te = n(10716),
    tt = n(702841),
    tn = n(150934),
    ti = n(292666),
    tl = n(892547),
    ta = n(909206),
    ts = n(393856);
function tr(e) {
    let { hideSearch: t, className: n } = e,
        {
            activityUrlOverride: i,
            useActivityUrlOverride: l,
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
            (0, r.jsx)(tn.S, { checked: l, onChange: ta.c2, label: et.intl.string(et.t["3TSGuD"]) }),
            l
                ? (0, r.jsx)(ti.k, {
                      label: et.intl.string(et.t["9rnmem"]),
                      disabled: !l,
                      value: i ?? void 0,
                      onChange: ta.ri,
                      placeholder: "https://localhost:3000",
                  })
                : null,
            !0 === t
                ? null
                : (0, r.jsx)("div", {
                      children: (0, r.jsx)(tl.I, {
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
    t_ = n(990078),
    th = n(849269),
    tA = n(811024),
    tf = n(782091),
    tx = n(847381),
    tC = n(576705),
    tg = n(723702),
    tN = n(818348),
    tE = n(698141);
function tb(e) {
    let { context: t, application: n, sectionName: i, primaryEntryPointCommand: l } = e,
        a = o.useId(),
        s = o.useCallback(() => {
            W.k(E.Se.ACTIVITY);
        }, []),
        c = o.useCallback(() => {
            p.A.shouldShowModal() && s();
        }, [s]),
        { submitting: d, wasSubmitting: u } = (0, tE.A)({
            applicationId: n.id,
            context: t,
            launchingComponentId: a,
            onSubmissionComplete: s,
        }),
        [m, _] = o.useState(!1),
        A = (0, th.Hq)({ applicationId: n.id, context: t }),
        f = o.useMemo(() => (0, b.kF)(l.displayName), [l.displayName]),
        {
            onActivityItemSelected: x,
            buttonVariant: C,
            buttonText: g,
        } = (0, X.dn)({
            context: t,
            application: n,
            location: H.Oh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: i,
            commandName: f,
            autoDismissOnClick: A === th.o6.LEAVE || (0, tc.x)(n),
            launchingComponentId: a,
            submitting: u ?? d,
            onConfirmActivityLaunchChecksAlertOpen: c,
        }),
        { disabled: N, reason: I } = (function (e) {
            let t,
                { context: n, application: i, activityAction: l } = e,
                a = "channel" === n.type ? n.channel : void 0,
                s = (0, h.bG)([tC.A], () => tC.A.can(tN.xB.USE_EMBEDDED_ACTIVITIES, a)),
                r = (0, tf.et)(a?.id),
                o = !1;
            switch (l) {
                case th.o6.LEAVE:
                    o = !1;
                    break;
                case th.o6.START:
                    null == a
                        ? (o = !1)
                        : a?.isGuildVoice()
                          ? r !== tf.xy.CAN_LAUNCH && (o = !0)
                          : (0, tA.pE)(a) || (o = !0);
                    break;
                case th.o6.JOIN:
                    a?.isGuildVoice() ? (o = !s) : (0, tA.pE)(a) || (o = !0);
            }
            if (l !== th.o6.LEAVE) {
                let e = i instanceof eB.Ay ? i.embeddedActivityConfig : i.embedded_activity_config,
                    n = (0, tx.A)((0, tg.getOS)());
                null == e || e.supported_platforms.includes(n)
                    ? a?.isThread() && ((o = !0), (t = et.intl.string(et.t.ddSR3v)))
                    : ((o = !1), (t = et.intl.string(et.t.z2YTgJ)));
            }
            return o && null == t && (t = et.intl.string(et.t.f41E1g)), { disabled: o, reason: t };
        })({ context: t, application: n, activityAction: A });
    return (0, r.jsx)(t_.m, {
        shouldShow: null != I,
        __unsupportedReactNodeAsText: I,
        children: (0, r.jsx)(R.$, {
            type: "submit",
            size: "md",
            variant: C,
            disabled: N,
            loading: m,
            onClick: () => {
                _(!0),
                    x(),
                    eF.default.track(ea.HAw.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                        application_id: n.id,
                        button_action: E.F5.USE_APP_COMMAND,
                    });
            },
            "aria-label": et.intl.formatToPlainString(et.t["XjP/R+"], { buttonText: g, applicationName: n.name }),
            text: g,
        }),
    });
}
var tI = n(522305);
function tv(e) {
    let { botUserId: t, applicationId: n, analyticsLocations: i } = e,
        [l, a] = o.useState(!1),
        s = o.useRef(null),
        c = o.useCallback(async () => {
            eF.default.track(ea.HAw.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: n,
                button_action: E.F5.OPEN_APP_DM,
            }),
                a(!0);
            try {
                await (0, tI.Q)({ appId: n, botId: t, analyticsLocations: i });
            } catch (e) {}
            clearTimeout(s.current), a(!1);
        }, [t, n, i]);
    return (0, r.jsx)(R.$, {
        type: "submit",
        size: "md",
        variant: "secondary",
        loading: l,
        onClick: c,
        "aria-label": et.intl.string(et.t.AUM8hY),
        text: et.intl.string(et.t.AUM8hY),
    });
}
var ty = n(727510),
    tj = n(992595);
function tP(e) {
    let { context: t, application: n, videoUrl: i, imageCoverUrl: l, sectionName: a, hasCommands: s } = e,
        c = o.useMemo(() => (0, b.u8)(n) ?? "", [n]),
        d = (0, h.bG)([te.A], () => te.A.inDevModeForApplication(n.id)),
        { isSlideReady: u } = (0, _.uM)(),
        [m, p] = o.useState(!1);
    o.useEffect(() => {
        u && p(!0);
    }, [u]);
    let A = null != i;
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
                                            src: i,
                                            poster: l,
                                        })
                                      : null,
                                  (0, r.jsx)("img", {
                                      className: ty.l3,
                                      src: l,
                                      "aria-label": et.intl.string(et.t.X4IxWL),
                                  }),
                              ],
                          })
                        : null,
                    (0, r.jsxs)("div", {
                        className: A ? ty.iw : ty.bH,
                        children: [
                            (0, r.jsx)(tT, { application: n }),
                            (0, r.jsx)(tS, { application: n }),
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
            (0, r.jsx)(tL, { application: n }),
        ],
    });
}
function tL(e) {
    let { application: t } = e,
        n = (0, b.K4)(t),
        i = (0, b.ME)(t);
    return n || i
        ? (0, r.jsxs)("div", {
              className: ty.fP,
              children: [
                  n
                      ? (0, r.jsxs)("div", {
                            className: ty.wi,
                            children: [
                                (0, r.jsx)(e7.U, { size: "sm", color: eE.A.colors.ICON_MUTED }),
                                (0, r.jsx)(L.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: et.intl.string(et.t["8z5B2U"]),
                                }),
                            ],
                        })
                      : null,
                  i
                      ? (0, r.jsxs)("div", {
                            className: ty.wi,
                            children: [
                                (0, r.jsx)(e5.d, { size: "sm", color: eE.A.colors.ICON_MUTED }),
                                (0, r.jsx)(L.E, {
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
function tT(e) {
    let { application: t } = e,
        n = (0, b.$B)(t) ? t.name : ((0, b.lq)(t) ?? ""),
        i = (0, b.b7)(t);
    return (0, r.jsxs)("div", {
        className: ty.gn,
        children: [
            (0, r.jsx)(O.D, { variant: "heading-xl/extrabold", lineClamp: 1, children: n }),
            i
                ? (0, r.jsx)("div", {
                      className: ty.s3,
                      children: (0, r.jsx)(L.E, {
                          variant: "text-xs/medium",
                          color: "text-default",
                          children: et.intl.string(et.t.LO4f0P),
                      }),
                  })
                : null,
        ],
    });
}
function tS(e) {
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
                              children: (0, r.jsx)(L.E, {
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
            (0, r.jsx)(e4.n, { size: "xs", color: eE.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            (0, r.jsx)(L.E, {
                variant: "text-sm/semibold",
                color: "interactive-text-default",
                children: n > 0 ? `1-${n}` : et.intl.string(et.t.zMNEiF),
            }),
        ],
    });
}
function tO(e) {
    let { context: t, application: n, sectionName: i, hasCommands: l, isDeveloperOfThisApp: a } = e,
        s = (0, to.E0)(t, n.id),
        c = (0, N.h)(n.id),
        d = c?.bot?.id,
        u = (function (e) {
            let { context: t, application: n, botUserId: i } = e,
                l = (0, tc.e)(n),
                a = (0, to.Vr)({ context: t, applicationId: n.id, botUserId: i }),
                s = (0, td.A)("channel" === t.type ? t.channel : void 0);
            return !l && a && null != i && !s;
        })({ context: t, application: n, botUserId: d }),
        { analyticsLocations: p } = (0, m.Ay)();
    return (o.useEffect(() => {
        if (!(0, b.$B)(n) || !(0, b.Ag)(n)) return;
        let e = setTimeout(() => {
            (null == s || null == d) &&
                eF.default.track(ea.HAw.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
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
            ? (0, r.jsxs)(e9.e, {
                  fullWidth: !0,
                  children: [
                      (0, r.jsx)(tb, { context: t, application: n, sectionName: i, primaryEntryPointCommand: s }),
                      u && null != d
                          ? (0, r.jsx)(tv, { botUserId: d, applicationId: n.id, analyticsLocations: p })
                          : null,
                  ],
              })
            : a && !l && (0, b.Ag)(n)
              ? (0, r.jsx)(e3.p, {
                    className: ty.ai,
                    messageType: e3.Y.WARNING,
                    children: et.intl.format(et.t["s/3hjE"], {}),
                })
              : null
        : null;
}
function tk(e) {
    let { description: t } = e,
        [n, i] = o.useState(!0);
    o.useLayoutEffect(() => i(!1), []);
    let l = o.useMemo(() => (0, tm.parseBioReact)(t), [t]),
        {
            ref: a,
            lineHeight: s,
            lineCount: c,
        } = (function () {
            let e = o.useRef(null),
                [t, n] = o.useState(null),
                [i, l] = o.useState(null);
            return (
                o.useLayoutEffect(() => {
                    let t = e.current;
                    if (null === t || 0 === t.clientHeight) return;
                    let i = parseInt(getComputedStyle(t).lineHeight);
                    isNaN(i) || (n(i), l(Math.floor(t.clientHeight / i)));
                }, []),
                { ref: e, lineHeight: t, lineCount: i }
            );
        })(),
        d = o.useMemo(() => {
            if (null == s || null == c) return { key: 0 };
            let e = s * c;
            return { key: 1, minHeightOverride: Math.min(e, 2 * s), maxHeightOverride: e };
        }, [c, s]),
        { ref: u, isTransitioning: m, onTransitionEnd: p } = (0, tp.A)({ isExpanded: n, ...d }),
        _ = n || m;
    return (0, r.jsxs)("div", {
        className: ty.iQ,
        children: [
            (0, r.jsx)("div", {
                ref: u,
                className: ty.ZT,
                onTransitionEnd: p,
                children: (0, r.jsx)(L.E, {
                    ref: a,
                    className: tj.PT,
                    variant: "text-sm/medium",
                    lineClamp: _ ? void 0 : 2,
                    style: { maxHeight: _ ? void 0 : d.minHeightOverride },
                    children: l,
                }),
            }),
            null != c && c > 2
                ? (0, r.jsxs)(T.D, {
                      className: ty.lP,
                      onClick: () => i((e) => !e),
                      children: [
                          (0, r.jsx)(L.E, {
                              variant: "text-sm/semibold",
                              color: "text-brand",
                              children: _ ? et.intl.string(et.t.u4YJ8g) : et.intl.string(et.t["N/tajD"]),
                          }),
                          _
                              ? (0, r.jsx)(e8.t, { size: "sm", color: eE.A.colors.TEXT_BRAND })
                              : (0, r.jsx)(e6.a, { size: "sm", color: eE.A.colors.TEXT_BRAND }),
                      ],
                  })
                : null,
        ],
    });
}
var tM = n(441031),
    tw = n(291071);
function tD(e) {
    let { context: t, application: n, sectionName: i } = e,
        l = "channel" === t.type ? t.channel : void 0,
        a = (0, h.bG)([p.A], () => p.A.entrypoint()),
        s = (0, N.h)(n.id === es.Ik.BUILT_IN ? null : n.id) ?? n,
        c = (0, b.Ag)(s),
        d = o.useRef(null),
        [u, m] = o.useState(!1),
        { iconURL: _, name: x } = o.useMemo(() => (0, b.X2)(s, { fakeAppIconURL: tw, size: 84 }), [s]),
        C = (0, g.A4)(!0, !0),
        v = (0, g.ON)(l?.guild_id, !0),
        y = o.useMemo(() => (0, g.Sx)(t, s.id), [C, v, t, s.id]),
        j = !y.isGuildInstalled && !y.isUserInstalled;
    return (
        o.useEffect(() => {
            j && g.Ay.queryInstallOnDemandApp(s.id, l?.id);
        }, [s.id, l?.id, j]),
        (0, r.jsxs)(f.d_, {
            className: tM.k,
            fade: !0,
            ref: d,
            role: "region",
            "aria-label": et.intl.formatToPlainString(et.t["4OP4Uk"], { applicationName: x }),
            children: [
                (0, r.jsx)(e2, { application: s, context: t, name: x, iconURL: _, scrollerRef: d, sectionName: i }),
                null != _ && (0, r.jsx)(I.A, { src: _, className: tM.Z }),
                (0, r.jsx)(A.A, { size: 54 }),
                (0, r.jsx)(c ? tH : tP, { context: t, application: s, sectionName: i, hasCommands: u }),
                a === E.s4.TEXT
                    ? (0, r.jsx)(eh, {
                          context: t,
                          application: s,
                          sectionName: i,
                          installOnDemand: j,
                          setHasCommands: m,
                      })
                    : null,
            ],
        })
    );
}
function tH(e) {
    let { context: t, application: n, sectionName: i, hasCommands: l } = e,
        a = (0, C.A)({ applicationId: n.id, size: 2048, names: ["embedded_cover"], format: "webp" }),
        s = (0, b.Cx)(n),
        o =
            null != s && null != s.activity_preview_video_asset_id
                ? (0, x.A)(n.id, s.activity_preview_video_asset_id)
                : null;
    return (0, r.jsx)(tP, {
        context: t,
        application: n,
        imageCoverUrl: a.url,
        videoUrl: o,
        sectionName: i,
        hasCommands: l,
    });
}
n(321073), n(938796);
var tU = n(724002),
    tV =
        (((i = {})[(i.APPENDS_REMAINING_ACTIVITIES = 1)] = "APPENDS_REMAINING_ACTIVITIES"),
        (i[(i.DEFAULT = 0)] = "DEFAULT"),
        i),
    tB =
        (((l = {})[(l.PROMOTED = 1)] = "PROMOTED"),
        (l[(l.SKIPS_APPLICATION_DISCOVERABILITY_VALIDATION = 2)] = "SKIPS_APPLICATION_DISCOVERABILITY_VALIDATION"),
        (l[(l.DEFAULT = 0)] = "DEFAULT"),
        l),
    tW = n(287174),
    tG = n(487899),
    tF = n(239314),
    tz = n(665260),
    t$ = n(795816),
    tK = n(648027),
    tq = n(170148);
function tY() {
    let e = (0, tq.z)(),
        t = eY.Q_.getSetting(),
        n = (0, h.bG)([te.A], () => te.A.getFetchState(), []);
    return (
        o.useEffect(() => {
            e && t && n === te.$.INITIALIZED && (0, t$.SE)();
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
    t4 = n(935208),
    t9 = n(630248),
    t3 = n(355097);
function t8(e, t) {
    o.useEffect(() => {
        t5.bW.loadIfUncached(t3.oD.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let n = (0, h.bG)([t9.A], () => t9.A.getApplicationFrecencyWithoutLoadingLatest()),
        i = o.useMemo(
            () =>
                null == t || 0 === t.length
                    ? e
                    : e.map((e) => ({ ...e, isUserApp: t?.some((t) => t.application.id === e.id) ?? !1 })),
            [e, t],
        ),
        l = o.useMemo(() => t?.filter((t) => !e.some((e) => e.id === t.application.id)), [e, t]),
        a = o.useMemo(() => {
            l?.forEach((e) => {
                let t = t4.default.extractTimestamp(e.id);
                null == n.getEntry(e.application.id) && n.track(e.application.id, { timestamp: t });
            }),
                n.compute();
            let e = l?.map((e) => (0, t7.bq)(e.application, !0)) ?? [],
                t = [...i];
            return (
                t.push(...e),
                t.sort((e, t) => {
                    let i = (n.getScore(t.id) ?? 0) - (n.getScore(e.id) ?? 0);
                    return 0 !== i ? i : e.name.localeCompare(t.name);
                }),
                t
            );
        }, [i, n, l]);
    return o.useMemo(() => {
        let e, l;
        t?.forEach((t) => {
            let n = t4.default.extractTimestamp(t.id);
            (null == l || n > l) && ((e = t), (l = n));
        }),
            i.forEach((t) => {
                let i = Math.max(...(n.getEntry(t.id)?.recentUses ?? []));
                (null == l || i > l) && ((e = t), (l = i));
            });
        let s = e?.application?.id ?? "";
        return [...a.filter((e) => e.id === s), ...a.filter((e) => e.id !== s)];
    }, [a, i, n, t]);
}
var t6 = n(546183),
    ne = n(228366);
let nt = 10 * q.A.Millis.MINUTE,
    nn = { lastUsedCommandId: null, lastUsedTimeMs: null };
class ni extends h.Ay.PersistedStore {
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
new ni(ne.h, {
    APPLICATION_COMMAND_USED: function (e) {
        let { command: t } = e;
        (nn.lastUsedCommandId = t.id), (nn.lastUsedTimeMs = Date.now());
    },
});
var nl = n(360469);
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
    n_ = n(205184),
    nh = n(994500),
    nA = n(881343),
    nf = n(697675),
    nx = n(91242),
    nC = n(977445),
    ng = n(932413),
    nN = n(953727);
function nE(e) {
    let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...a } = e;
    return (0, r.jsx)("svg", {
        ...(0, nN.A)(a),
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        fill: "none",
        children: (0, r.jsx)("path", {
            d: "M7.39344 5.33333L5.33333 7.39344V16.6065L7.39348 18.6667H16.6065L18.6667 16.6065V7.39344L16.6065 5.33333H7.39344ZM11.0485 15.6879H9.20459C9.20459 14.1627 7.96392 12.922 6.43868 12.922V11.078C7.96392 11.078 9.20459 9.83735 9.20459 8.31211H11.0485C11.0485 9.82534 10.3057 11.159 9.17607 12C10.3057 12.8411 11.0485 14.1747 11.0485 15.6879ZM17.5556 12.922C16.0304 12.922 14.7896 14.1627 14.7896 15.6879H12.9457C12.9457 14.1747 13.6885 12.8411 14.8181 12C13.6885 11.159 12.9457 9.82534 12.9457 8.31211H14.7896C14.7896 9.83735 16.0304 11.078 17.5556 11.078V12.922Z",
            fill: i,
            className: l,
        }),
    });
}
var nb = n(486020),
    nI = n(786115),
    nv = n(838541),
    ny = n(666280),
    nj = n(3697),
    nP =
        (((a = {}).ICON = "icon"),
        (a.ROW = "row"),
        (a.NO_BANNER = "no_banner"),
        (a.MEDIUM_BANNER = "medium_banner"),
        (a.LARGE_BANNER = "large_banner"),
        a);
function nL(e) {
    let {
            application: t,
            look: n = "large_banner",
            onClick: i,
            imageStyle: l,
            enableVideoBanner: a = !0,
            children: s,
            sectionName: o,
            resultsPosition: c,
            sectionOverallPosition: d,
            tracksImpression: u = !0,
            disabled: m = !1,
            overrideImageUrl: p,
            showsPromoted: _,
        } = e,
        h = (0, nm.A)(m) ?? m;
    return (0, r.jsx)(nT, {
        application: t,
        onClick: i,
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
                            ? (0, r.jsx)(nS, { application: t, imageStyle: l, children: s })
                            : (0, r.jsx)(nR, {
                                  application: t,
                                  look: n,
                                  imageStyle: l,
                                  enableVideoBanner: a,
                                  disableBannerFadeIn: h !== m,
                                  overrideImageUrl: p,
                                  showsPromoted: _,
                                  children: s,
                              }),
                }),
        }),
    });
}
function nT(e) {
    let {
            application: t,
            onClick: n,
            children: i,
            sectionName: l,
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
                    (0, eK.jA)(e, (e) => (0, r.jsx)(eZ, { application: n, ...e }));
                }
            },
            [t],
        ),
        { name: _, description: h } = o.useMemo(() => (0, b.X2)(t, { fakeAppIconURL: tw }), [t]),
        { trackItemImpressionRef: A } = (0, nI.A)({
            applicationId: t.id,
            applicationFlags: (0, b.$B)(t) ? nd.pG(32, (0, eD.K)(t)) : void 0,
            sectionName: l,
            sectionPosition: a,
            sectionOverallPosition: s,
            promotionalLabel: (0, b.Ii)(t),
        }),
        f = o.useMemo(() => {
            let e = d ? ny.Qz : ny.kL;
            return y()(e, { [ny.uS]: "row" !== m, [ny.qd]: "row" === m, [ny.oI]: "icon" === m }, u);
        }, [u, d, m]);
    return d
        ? (0, r.jsx)("div", { ref: c ? A : void 0, className: f, children: i })
        : (0, r.jsx)(T.D, {
              innerRef: c ? A : void 0,
              className: f,
              onClick: n,
              onContextMenu: p,
              "aria-label": et.intl.formatToPlainString(et.t["zLhr9+"], {
                  applicationName: _,
                  applicationDescription: h,
              }),
              children: (0, r.jsx)(S.M, { children: i }),
          });
}
function nS(e) {
    let { application: t, imageStyle: n, children: i } = e,
        { name: l, iconURL: a } = o.useMemo(() => (0, b.X2)(t, { fakeAppIconURL: tw }), [t]);
    return (0, r.jsx)(t_.m, {
        __unsupportedReactNodeAsText: l,
        children: (0, r.jsxs)("div", {
            className: y()(ny.zc, n),
            children: [(0, r.jsx)(I.A, { src: a, className: ny.oI, "aria-hidden": !0, rendersPlaceholder: !0 }), i],
        }),
    });
}
function nR(e) {
    let {
            application: t,
            look: n,
            imageStyle: i,
            enableVideoBanner: l,
            disableBannerFadeIn: a,
            children: s,
            overrideImageUrl: c,
            showsPromoted: d,
        } = e,
        { iconURL: u, name: m, description: p } = o.useMemo(() => (0, b.X2)(t, { fakeAppIconURL: tw }), [t]),
        _ = o.useMemo(() => (null == p ? null : (0, X.SD)(p)), [p]),
        h = (0, eI.Ay)(u, ""),
        [A, f] = o.useState(!1),
        x = o.useCallback(() => {
            !0 === l && f(!0);
        }, [l]),
        C = d || (0, b.NO)(t),
        g = "large_banner" === n || "medium_banner" === n,
        N = o.useCallback(() => f(!1), []),
        E = (0, nC.u)(t.id),
        v = (0, b.fl)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            g
                ? (0, r.jsxs)("div", {
                      onMouseEnter: x,
                      onFocus: x,
                      onMouseLeave: N,
                      onBlur: N,
                      className: y()(ny.zK, { [ny.i2]: "medium_banner" === n, [ny.ir]: "large_banner" === n }),
                      children: [
                          (0, r.jsx)("span", {
                              className: i,
                              children: (0, r.jsx)(nM, {
                                  application: t,
                                  fallbackColor: h,
                                  showVideo: A,
                                  disableFadeIn: a,
                                  overrideImageUrl: c,
                              }),
                          }),
                          E || C || v !== k.Hr.NONE
                              ? (0, r.jsxs)("div", {
                                    className: ny.YN,
                                    children: [
                                        C &&
                                            (0, r.jsx)("div", {
                                                className: ny.Ag,
                                                children: (0, r.jsx)(O.D, {
                                                    variant: "text-xxs/medium",
                                                    color: "text-strong",
                                                    children: et.intl.string(et.t["/eVltv"]),
                                                }),
                                            }),
                                        E && (0, r.jsx)(nO, {}),
                                        v !== k.Hr.NONE && (0, r.jsx)(nf.A, { labelType: v }),
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
                                    !g && C
                                        ? (0, r.jsx)("div", {
                                              className: ny.nb,
                                              children: (0, r.jsx)(L.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-muted",
                                                  children: et.intl.string(et.t["/eVltv"]),
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(nk, { application: t }),
                                ],
                            }),
                            (0, r.jsx)(L.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: _,
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
    return (0, r.jsx)(t_.m, {
        text: et.intl.string(et.t.CfTySQ),
        children: (0, r.jsx)("div", { className: ny.hh, children: (0, r.jsx)(nE, { className: ny.bB }) }),
    });
}
function nk(e) {
    let { application: t } = e,
        n = eG.default.getCurrentUser();
    if (!n?.isStaff() && !n?.isStaffPersonal()) return null;
    let i = (0, b.Cx)(t);
    if (null == i || !(0, b.$B)(t)) return null;
    let l = (0, th.l$)(t, i);
    return null == l
        ? null
        : (0, r.jsx)(t_.m, {
              __unsupportedReactNodeAsText: l,
              children: (0, r.jsx)("img", { className: ny.io, alt: l, src: nj }),
          });
}
function nM(e) {
    let { application: t, fallbackColor: n, showVideo: i, disableFadeIn: l, overrideImageUrl: a } = e;
    if (null != a)
        return (0, r.jsx)("img", { src: a, alt: (0, b.$B)(t) ? t.name : "", className: y()(ny._e, { [ny.cG]: l }) });
    if ((0, b.$B)(t)) {
        if ((0, b.Ag)(t)) return (0, r.jsx)(nw, { application: t, showVideo: i, disableFadeIn: l });
        if (null != t.bot) return (0, r.jsx)(nD, { bot: t.bot, fallbackColor: n, disableFadeIn: l });
    }
    return (0, r.jsx)(nH, { fallbackColor: n, disableFadeIn: l });
}
function nw(e) {
    let { application: t, showVideo: n, disableFadeIn: i } = e,
        l = (0, C.A)({ applicationId: t.id, size: 600, names: ["embedded_cover"], format: "webp" }),
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
    let d = y()(ny._e, { [ny.cG]: i });
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
                              mediaLayoutType: nv.dG.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0,
                          }),
                      }),
                  })
                : null,
            (0, r.jsx)(nA.A, {
                imageBackground: l,
                applicationName: t.name,
                imageClassName: d,
                imageNotFoundClassName: d,
            }),
        ],
    });
}
function nD(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: i } = e,
        l = (0, h.bG)([M.A], () => M.A.useReducedMotion),
        a = (0, nb.z)({ id: t.id, banner: t.banner, canAnimate: !l, size: 600 });
    return null == a
        ? (0, r.jsx)(nH, { fallbackColor: n, disableFadeIn: i })
        : (0, r.jsx)("img", { src: a, alt: "", className: y()(ny._e, { [ny.cG]: i }) });
}
function nH(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, r.jsx)("div", { className: y()(ny._e, { [ny.cG]: n }), style: { backgroundColor: t } });
}
function nU(e) {
    let { application: t, sectionName: n, resultsPosition: i, query: l, installOnDemand: a, location: s } = e,
        { pushHistory: r } = (0, _.uM)(),
        { friends: c } = (function (e) {
            let t = (0, n_.s)(e.id),
                n = (0, h.cf)([eG.default, nh.A], () => {
                    let e = {};
                    for (let n of t.values()) {
                        let t = eG.default.getUser(n.author_id),
                            i = nh.A.isFriend(n.author_id);
                        null != t && i && (e[t.id] = n.id);
                    }
                    return e;
                }),
                [i, l] = o.useState([]);
            return (
                o.useEffect(() => {
                    let e = eC().sortBy(Object.entries(n), (e) => {
                        let [t, n] = e;
                        return -t4.default.extractTimestamp(n);
                    });
                    l(
                        eC()
                            .map(e, (e) => {
                                let [t, n] = e;
                                return eG.default.getUser(t);
                            })
                            .filter((e) => null != e),
                    );
                }, [n]),
                { friends: i, friendsLastPlayed: n }
            );
        })(t);
    return {
        onClickAppCard: o.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, u.zV)(ea.HAw.APPLICATION_COMMAND_SECTION_SELECTED, {
                        application_id: t.id,
                        section_name: n,
                        search_results_position: i,
                        source: p.A.entrypoint(),
                        promotional_label: (0, b.Ii)(t),
                        location: s,
                        query: l,
                        num_friends_who_play: c.length,
                    }),
                    r({ type: _.Wy.APPLICATION, application: t, installOnDemand: a, sectionName: n });
            },
            [t, a, s, r, l, i, n, c],
        ),
    };
}
function nV(e) {
    let { onClickAppCard: t } = nU(e);
    return (0, r.jsx)(nL, { ...e, onClick: t });
}
function nB(e) {
    let {
        context: t,
        application: n,
        location: i,
        sectionName: l,
        isOneClickCTA: a,
        fetchesApplication: s = !0,
        ...c
    } = e;
    if (!(0, b.$B)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
    let d = o.useId(),
        [u, m, p] = (0, h.yK)([np.Ay, nx.A], () => [
            np.Ay.isLaunchingActivity(),
            np.Ay.getLaunchState(n.id, "channel" === t.type ? t.channel.id : void 0),
            nx.A.isLaunchingFrame(n.id),
        ]),
        _ = (null != m && m.isLaunching && m.componentId === d) || p,
        {
            onActivityItemSelected: A,
            activityAction: f,
            buttonVariant: x,
            buttonText: C,
        } = (0, X.dn)({
            context: t,
            application: n,
            location: i,
            sectionName: l,
            launchingComponentId: d,
            fetchesApplication: s,
        });
    return f === th.o6.START || f === th.o6.JOIN
        ? a
            ? (0, r.jsx)(nL, {
                  ...c,
                  sectionName: l,
                  application: n,
                  onClick: A,
                  disabled: u || p,
                  enableVideoBanner: !_,
                  children: _ ? (0, r.jsx)(nu.y, { type: nu.y.Type.PULSING_ELLIPSIS, className: ny.u1 }) : null,
              })
            : (0, r.jsx)(nV, { ...c, context: t, sectionName: l, application: n, location: i })
        : (0, r.jsx)(nL, {
              ...c,
              sectionName: l,
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
                          buttonText: C,
                          applicationName: n.name,
                      }),
                      loading: _,
                      text: C,
                  }),
              }),
          });
}
function nW(e) {
    let { look: t = nP.LARGE_BANNER } = e,
        n = (0, h.bG)([M.A], () => M.A.useReducedMotion),
        { styleLarge: i, styleSmall: l } = o.useMemo(
            () => ({
                styleLarge: { width: `${10 + 50 * Math.random()}%` },
                styleSmall: { width: `${30 + 60 * Math.random()}%` },
            }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: y()(er.kL, er.NX, { [er.cb]: n, [er.uS]: t !== nP.ROW, [er.qd]: t === nP.ROW }),
        children: [
            (0, r.jsx)("div", {
                className: y()(er._e, { [er.i2]: t === nP.MEDIUM_BANNER, [er.ir]: t === nP.LARGE_BANNER }),
            }),
            (0, r.jsxs)("div", {
                className: y()(er.TD, { [er.Ne]: t === nP.ROW }),
                children: [
                    (0, r.jsx)("div", { className: y()(er.Pz, { [er.Lu]: t === nP.ROW }) }),
                    (0, r.jsxs)("div", {
                        className: er.FS,
                        children: [
                            (0, r.jsx)("div", {
                                className: er.jC,
                                style: i,
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
                                style: l,
                                children: (0, r.jsx)(L.E, {
                                    className: er.R,
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    lineClamp: 1,
                                    children: "_",
                                }),
                            }),
                        ],
                    }),
                    t === nP.ROW && (0, r.jsx)("div", { className: er.ek }),
                ],
            }),
        ],
    });
}
var nG = n(902527),
    nF = n(798685);
function nz(e) {
    let { searchQuery: t, textContent: n, type: i } = e;
    return (
        (0, X.Ch)(i, t),
        (0, r.jsx)("div", {
            className: nF.y,
            children: (0, r.jsx)(L.E, { variant: "text-md/medium", color: "text-muted", children: n }),
        })
    );
}
var n$ = n(4589),
    nK = (((s = nK || {})[(s.VIEW_MORE = 0)] = "VIEW_MORE"), (s[(s.VIEW_LESS = 1)] = "VIEW_LESS"), s);
function nq(e) {
    let { title: t, buttonType: n, onClickViewButton: i } = e;
    return (0, r.jsxs)("div", {
        className: n$.wx,
        children: [
            (0, r.jsx)(L.E, { variant: "text-md/medium", color: "text-strong", children: t }),
            null != n &&
                null != i &&
                (0, r.jsx)(T.D, {
                    className: n$.Vc,
                    onClick: i,
                    "aria-label": et.intl.formatToPlainString(et.t["bj/2kV"], { title: t }),
                    children: (0, r.jsx)(L.E, {
                        variant: "text-md/medium",
                        color: "text-brand",
                        children: 0 === n ? et.intl.format(et.t.gVw57p, {}) : et.intl.string(et.t.nPGLFQ),
                    }),
                }),
        ],
    });
}
(nq.buttonTypes = nK),
    (nq.Loading = function () {
        let e = o.useMemo(() => ({ width: `${10 + 20 * Math.random()}%` }), []);
        return (0, r.jsx)("div", {
            className: n$.uH,
            style: e,
            children: (0, r.jsx)(L.E, {
                className: n$.R,
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
    var n, i;
    let l = t.limit ?? 1 / 0,
        a = ((n = e), (i = t.filterPredicates ?? []), n.filter((e) => i.every((t) => t(e))));
    return (function (e, t, n) {
        let i = [];
        for (let l of e) {
            let e = (function (e, t) {
                return e.sort((e, n) => {
                    for (let i of t) {
                        let t = i(e, n);
                        if (0 !== t) return t;
                    }
                    return 0;
                });
            })(l, t);
            if ((i.push(...e), i.length >= n)) break;
        }
        return i;
    })(
        null != t.bucketPredicates && t.bucketPredicates.length > 0
            ? l >= a.length
                ? (function (e, t) {
                      let n = Array(t.length)
                          .fill(null)
                          .map(() => []);
                      for (let i of e)
                          for (let e = 0; e < t.length; e++)
                              if (t[e](i)) {
                                  n[e].push(i);
                                  break;
                              }
                      return n;
                  })(a, t.bucketPredicates ?? [])
                : (function (e, t, n) {
                      let i = [],
                          l = e;
                      for (let e of t) {
                          let t = [],
                              a = [];
                          for (let n of l) e(n) ? a.push(n) : t.push(n);
                          if ((i.push(a), (l = t), i.reduce((e, t) => t.length + e, 0) >= n)) break;
                      }
                      return i;
                  })(a, t.bucketPredicates ?? [], l)
            : [a],
        t.sortComparers ?? [],
        l,
    ).slice(0, l);
}
function n7(e, t) {
    let n = t9.A.getScoreWithoutLoadingLatest(e.id);
    return t9.A.getScoreWithoutLoadingLatest(t.id) - n;
}
function n5(e, t) {
    let n = (0, b.lq)(e),
        i = (0, b.lq)(t);
    return (0, g.RF)(n, i);
}
function n4(e, t) {
    return (0, g.RF)(e.displayName, t.displayName);
}
n(827669);
var n9 = n(110259),
    n3 = n(139286),
    n8 = n(520117);
function n6(e) {
    let { applicationId: t, commandId: n, searchResultsPosition: i, query: l } = e,
        a = (0, h.bG)([p.A], () => p.A.entrypoint());
    return {
        trackSearchResultsItemImpressionRef: (0, n8.A)({
            onVisible: () => {
                (0, n3.x)({
                    type: n9.ImpressionTypes.VIEW,
                    name: n9.ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM,
                    properties: { application_id: t, command_id: n, search_results_position: i, query: l, source: a },
                });
            },
            threshold: 1,
        }),
    };
}
var ie = n(967612);
function it(e) {
    let { command: t, application: n, onClick: i, query: l, searchResultsPosition: a } = e,
        s = o.useCallback(
            (e) => {
                if ((0, b.$B)(n)) {
                    let t = n instanceof eB.Ay ? n : eB.Ay.createFromServer(n);
                    (0, eK.jA)(e, (e) => (0, r.jsx)(eZ, { application: t, ...e }));
                }
            },
            [n],
        ),
        { iconURL: c, name: d, description: u } = o.useMemo(() => (0, b.X2)(n, { fakeAppIconURL: tw }), [n]),
        m = o.useMemo(() => {
            let e = t?.displayDescription ?? u;
            return null == e ? null : (0, X.SD)(e, void 0);
        }, [u, t?.displayDescription]),
        { trackSearchResultsItemImpressionRef: p } = n6({
            applicationId: n.id,
            commandId: t?.id,
            query: l,
            searchResultsPosition: a,
        });
    return (0, r.jsx)(T.D, {
        className: ie.vk,
        innerRef: (e) => {
            p.current = e;
        },
        onClick: i,
        onContextMenu: s,
        children: (0, r.jsxs)(S.M, {
            className: ie.ao,
            children: [
                (0, r.jsx)(I.A, { src: c, className: ie.Kk, "aria-hidden": !0, rendersPlaceholder: !0 }),
                (0, r.jsxs)("div", {
                    className: ie.Jn,
                    children: [
                        (0, r.jsx)(O.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            children: t?.displayName ?? d,
                        }),
                        (0, r.jsx)(L.E, { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: m }),
                    ],
                }),
                null != t
                    ? (0, r.jsx)(L.E, {
                          className: ie.Pn,
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: d,
                      })
                    : null,
                (0, r.jsx)("div", { className: ie.V1 }),
            ],
        }),
    });
}
var ii = n(68614);
function il() {
    let e = (0, h.bG)([M.A], () => M.A.useReducedMotion),
        { styleLarge: t, styleSmall: n } = o.useMemo(
            () => ({
                styleLarge: { width: `${10 + 50 * Math.random()}%` },
                styleSmall: { width: `${30 + 60 * Math.random()}%` },
            }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: y()(ii.kL, { [ii.cb]: e }),
        children: [
            (0, r.jsx)("div", { className: ii.Pz }),
            (0, r.jsxs)("div", {
                className: ii.FS,
                children: [
                    (0, r.jsx)("div", {
                        className: ii.jC,
                        style: t,
                        children: (0, r.jsx)(O.D, {
                            className: ii.R,
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            children: "_",
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: ii.jC,
                        style: n,
                        children: (0, r.jsx)(L.E, {
                            className: ii.R,
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: "_",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: ii.V1 }),
        ],
    });
}
var ia = n(786783);
let is = Array(6)
        .fill(0)
        .map((e, t) => t),
    ir = [, , ,].fill(0).map((e, t) => t),
    io = [, , , ,].fill(0).map((e, t) => t);
function ic(e) {
    return (0, r.jsx)(id, { ...e });
}
function id(e) {
    let { context: t, query: n, entrypoint: i, isScrollCloseToBottom: l } = e,
        a = i === E.s4.TEXT,
        s = i === E.s4.TEXT,
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
                commandLimit: i,
                applicationLimit: l,
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
                    let { context: t, includeBuiltIn: n = !0, allowFetch: i = !0 } = e,
                        l = (0, g.SD)(t, !0, i),
                        a = (0, g.A4)(!0, i);
                    return o.useMemo(() => {
                        let e = l.result?.sections ?? {},
                            i = a.result?.sections ?? {},
                            s = [...Object.keys(e), ...Object.keys(i).filter((t) => !(t in e))];
                        n && s.push(es.Ik.BUILT_IN);
                        let r = [],
                            o = {};
                        for (let e of s) {
                            let n = (0, g.Sx)(t, e),
                                i = n.sectionCommands ?? [];
                            r.push(...i),
                                i.forEach((e) => {
                                    null != n.descriptor && (o[e.id] = n.descriptor);
                                });
                        }
                        return {
                            commands: r,
                            commandSectionMap: o,
                            loading: !0 === l.fetchState.fetching || !0 === a.fetchState.fetching,
                        };
                    }, [t, n, l.fetchState.fetching, l.result?.sections, a.fetchState.fetching, a.result?.sections]);
                })({ context: t, includeBuiltIn: !0 }),
                { apps: m } = (function (e) {
                    let {
                            context: t,
                            onlyWithCommands: n,
                            includeBuiltIn: i,
                            allowFetch: l = !0,
                            includeEmbeddedApps: a,
                            includeNonEmbeddedApps: s,
                        } = e,
                        r = "channel" === t.type ? t.channel : void 0,
                        c = (0, n0.MW)(r, [k.kc.CHAT]).hasBaseAccessPermissions,
                        d = (0, g.SD)(t, c, l),
                        u = (0, g.A4)(c, l),
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
                        _ = new Set();
                    if (null != d.result)
                        for (let e of Object.values(d.result.sections)) {
                            let t = e.descriptor.application;
                            null != t && m(e) && (p.push(t), _.add(t.id));
                        }
                    if (null != u.result)
                        for (let e of Object.values(u.result.sections)) {
                            let t = e.descriptor.application;
                            null != t && !_.has(t.id) && m(e) && p.push(t);
                        }
                    return (
                        s && i && p.push(b.N3),
                        { apps: p, loading: d?.fetchState.fetching === !0 || u?.fetchState.fetching === !0 }
                    );
                })({
                    context: t,
                    onlyWithCommands: !0,
                    includeBuiltIn: !0,
                    includeEmbeddedApps: r,
                    includeNonEmbeddedApps: s,
                }),
                p = (0, tK.A)({ guildId: "channel" === t.type ? t.channel.guild_id : null }),
                _ = o.useMemo(() => {
                    var e, l, s, r, o, d, u;
                    let m, p, _, h, A;
                    if (!a) return [];
                    return n2(c, {
                        limit: i,
                        filterPredicates: [
                            ((m = (0, n0.Bh)("channel" === t.type ? t.channel : void 0, [k.kc.CHAT])),
                            (p = {}),
                            (e) => {
                                let { context: n, userId: i, roleIds: l, isImpersonating: a } = m;
                                if (!(e.applicationId in p)) {
                                    let {
                                            descriptor: s,
                                            isGuildInstalled: r,
                                            isUserInstalled: o,
                                        } = (0, g.Sx)(t, e.applicationId),
                                        c = n?.guild_id != null ? n1.we(s?.permissions, n.guild_id, i, l, a) : null,
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
                            ((l = e = n),
                            (e) => {
                                let t = e.untranslatedName,
                                    n = e.displayName;
                                return t.startsWith(l) || n.startsWith(l);
                            }),
                            ((s = e),
                            (h = (_ = s?.split(" "))[0]),
                            (A = _.slice(1).join(" ")),
                            (e) => {
                                let t = e.untranslatedName,
                                    n = e.displayName;
                                return (
                                    !!(
                                        (t.startsWith(h) && t.split(" ").slice(1).join(" ").startsWith(A)) ||
                                        (n.startsWith(h) && n.split(" ").slice(1).join(" ").startsWith(A))
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
                            n4,
                        ],
                    });
                }, [a, c, i, t, n]),
                h = o.useMemo(() => {
                    if (0 === _.length) return [];
                    let e = new Map(m.map((e) => [e.id, e]));
                    return eC().compact(
                        _.map((t) => {
                            let n = e.get(t.applicationId);
                            if (null == n) return null;
                            let i = d[t.id] ?? null;
                            return { command: t, application: n, section: i };
                        }),
                    );
                }, [m, _, d]),
                A = o.useMemo(() => {
                    var e, i, a, o, c;
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
                        limit: l,
                        filterPredicates: [
                            ((d = (0, n0.Bh)("channel" === t.type ? t.channel : void 0, [
                                k.kc.CHAT,
                                k.kc.PRIMARY_ENTRY_POINT,
                            ])),
                            (e) => {
                                let { context: n, userId: i, roleIds: l, isImpersonating: a } = d,
                                    {
                                        descriptor: s,
                                        sectionCommands: r,
                                        isGuildInstalled: o,
                                        isUserInstalled: c,
                                    } = (0, g.Sx)(t, e.id),
                                    u = n?.guild_id != null ? n1.we(s?.permissions, n.guild_id, i, l, a) : null,
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
                            ((i = e = n), (e) => (0, b.lq)(e).toLocaleLowerCase().startsWith(i.toLocaleLowerCase())),
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
                }, [s, r, l, t, n, m, p]),
                f = h.length > 0,
                x = A.length > 0;
            return {
                commandResults: h,
                hasCommandResults: f,
                applicationResults: A,
                hasApplicationResults: x,
                isEmptyState: !f && !x,
                loading: u && a,
            };
        })({ context: t, query: n, searchesActivities: !0, searchesCommands: a, searchesBots: s }),
        {
            fetchState: _,
            applicationResults: A,
            fetchNextPage: f,
        } = (function (e) {
            let { context: t, query: n, fetches: i = !0, pageLimit: l = 1 / 0, entrypoint: a } = e;
            n.startsWith("/") && (n = n.substring(1));
            let s = a === E.s4.VOICE,
                r = "channel" === t.type ? t.channel.guild_id : void 0,
                [c, d] = o.useState(1),
                u = o.useRef(c);
            u.current = c;
            let { fetchState: m, totalPages: p } = (0, h.cf)(
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
                _ = o.useMemo(
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
                    let e = _.length;
                    m === nZ.e.FETCHED &&
                        e === u.current &&
                        e > 0 &&
                        e < p &&
                        e < l &&
                        _[e - 1].length > 0 &&
                        (u.current++, d((e) => e + 1));
                }, [m, l, _, p]),
                f = o.useCallback(
                    (e) => {
                        let { query: t, page: n, guildId: i } = e;
                        K.$P({
                            query: t,
                            guildId: i,
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
                    i && f({ query: n, page: c, guildId: r });
                }, [n, r, f, c, i]),
                o.useEffect(() => {
                    d(1);
                }, [r, n]),
                { fetchState: m, applicationResults: _.flat(), fetchNextPage: A }
            );
        })({ query: n, context: t, fetches: !0, pageLimit: 5, entrypoint: i });
    o.useEffect(() => {
        l && _ === nZ.e.FETCHED && f();
    }, [f, _, l]);
    let x = null == _ || _ === nZ.e.FETCHING,
        C = o.useMemo(() => {
            let e = p.map((e) => ({ application: e, installOnDemand: !0 })),
                t = new Set(
                    p.map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
                );
            return [
                ...e,
                ...eC().compact(
                    A.map((e) =>
                        e.type === nX.j.CONNECTION || t.has(e.data.id)
                            ? null
                            : { application: e.data, installOnDemand: !0 },
                    ),
                ),
            ];
        }, [A, p]),
        N = C.length > 0,
        I = d && !N && !x;
    return c
        ? (0, r.jsx)(ih, {})
        : I
          ? (0, r.jsx)(nz, {
                type: E.wg.SEARCH_EMPTY,
                searchQuery: n,
                textContent: i === E.s4.TEXT ? et.intl.string(et.t.LSNOYf) : et.intl.string(et.t.Clu7Qh),
            })
          : (0, r.jsxs)("div", {
                children: [
                    m && (0, r.jsx)(iu, { context: t, commandResults: u, query: n }),
                    (N || x) &&
                        (0, r.jsx)(ip, {
                            context: t,
                            applicationResults: C,
                            includePlaceholder: x,
                            query: n,
                            searchesBots: s,
                        }),
                ],
            });
}
function iu(e) {
    let { context: t, commandResults: n, query: i } = e,
        l = n.length > 4,
        a = o.useMemo(() => (l ? n.slice(0, 4) : n), [n, l]),
        [s, c] = o.useState(!1),
        d = (0, nm.A)(s) ?? s,
        m = o.useCallback(() => c((e) => !e), []),
        _ = ((0, nm.A)(i) ?? i)[0] !== i[0],
        h = s && !_;
    o.useLayoutEffect(() => c(!1), [_]);
    let {
        ref: A,
        isTransitioning: f,
        onTransitionEnd: x,
    } = (0, tp.A)({ key: i, isExpanded: h, durationMs: 200, maxAnimationHeight: 680 });
    o.useEffect(() => {
        !d &&
            s &&
            (0, u.zV)(ea.HAw.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: E.yK.SEARCH,
                source: p.A.entrypoint(),
                num: n.length,
            });
    }, [n.length, d, s]);
    let C = h || f,
        g = h ? nq.buttonTypes.VIEW_LESS : nq.buttonTypes.VIEW_MORE,
        N = C ? n : a;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(nq, { title: et.intl.string(et.t["0hKkS+"]), buttonType: g, onClickViewButton: l ? m : void 0 }),
            (0, r.jsx)("div", {
                className: ia._,
                ref: A,
                onTransitionEnd: x,
                children: N.map((e, n) => {
                    let { command: l, application: a, section: s } = e;
                    return (0, r.jsx)(
                        it,
                        {
                            command: l,
                            application: a,
                            query: i,
                            searchResultsPosition: n,
                            onClick: () => {
                                let e = p.A.entrypoint();
                                W.k(E.Se.DISMISSED),
                                    (0, V.Mv)({
                                        command: l,
                                        location: H.Oh.APP_LAUNCHER_HOME_SEARCH,
                                        sectionName: E.yK.SEARCH,
                                    }),
                                    "channel" === t.type &&
                                        (w.Gf({
                                            channelId: t.channel.id,
                                            command: l,
                                            section: s,
                                            location: H.Oh.APP_LAUNCHER_HOME_SEARCH,
                                            triggerSection: void 0,
                                            queryLength: i.length,
                                            sectionName: E.yK.SEARCH,
                                            query: i,
                                            searchResultsPosition: n,
                                            source: e,
                                        }),
                                        B._.dispatch(ea.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: t.channel.id }));
                            },
                        },
                        l.id,
                    );
                }),
            }),
        ],
    });
}
function im(e) {
    let { trackSearchResultsItemImpressionRef: t } = n6({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
    });
    return (0, r.jsx)("div", {
        className: ia.Gn,
        ref: (e) => {
            t.current = e;
        },
        children: (0, r.jsx)(nV, { ...e, tracksImpression: !1, enableVideoBanner: !0 }),
    });
}
function ip(e) {
    let { context: t, applicationResults: n, includePlaceholder: i, query: l, searchesBots: a } = e;
    return a
        ? (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(nq, { title: et.intl.string(et.t.PHjkRE) }),
                  (0, r.jsxs)("div", {
                      className: ia._,
                      children: [
                          n.map((e, n) => {
                              let { application: i, installOnDemand: a } = e;
                              return (0, r.jsx)(
                                  i_,
                                  {
                                      context: t,
                                      application: i,
                                      location: H.Oh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: E.yK.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: a,
                                      query: l,
                                  },
                                  i.id,
                              );
                          }),
                          i && ir.map((e) => (0, r.jsx)(il, {}, e)),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(nq, { title: et.intl.string(et.t.shUONg) }),
                  (0, r.jsxs)("div", {
                      className: ia.H$,
                      children: [
                          n.map((e, n) => {
                              let { application: i, installOnDemand: a } = e;
                              return (0, r.jsx)(
                                  im,
                                  {
                                      context: t,
                                      application: i,
                                      look: nP.LARGE_BANNER,
                                      location: H.Oh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: E.yK.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: a,
                                      query: l,
                                  },
                                  i.id,
                              );
                          }),
                          i && io.map((e) => (0, r.jsx)(nW, { look: nP.LARGE_BANNER }, e)),
                      ],
                  }),
              ],
          });
}
function i_(e) {
    let { onClickAppCard: t } = nU(e);
    return (0, r.jsx)(it, {
        application: e.application,
        onClick: t,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
    });
}
function ih() {
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(nq, { title: et.intl.string(et.t["0hKkS+"]) }),
            (0, r.jsx)("div", { className: ia._, children: is.map((e) => (0, r.jsx)(il, {}, e)) }),
            (0, r.jsx)(nq, { title: et.intl.string(et.t.PHjkRE) }),
            (0, r.jsx)("div", { className: ia._, children: ir.map((e) => (0, r.jsx)(il, {}, e)) }),
        ],
    });
}
var iA = n(62784);
let ix = [],
    iC = [, , , ,].fill(0).map((e, t) => t),
    ig = [
        { cards: [, , , ,].fill(0).map((e, t) => t), look: nP.MEDIUM_BANNER },
        { cards: [, , , ,].fill(0).map((e, t) => t), look: nP.ROW },
        { cards: [, , , ,].fill(0).map((e, t) => t), look: nP.ROW },
    ],
    iN = tW.K.APP_LAUNCHER_IN_TEXT;
function iE(e) {
    let { context: t, entrypoint: n, searchQuery: i, setSearchQuery: l, setScroller: a, isScrollCloseToBottom: s } = e,
        c = (0, h.bG)([te.A], () => te.A.getIsEnabled(), []),
        d = n === E.s4.TEXT && "channel" === t.type && null != t.channel && !t.channel.isPrivate(),
        u = (0, b.sw)(n),
        m = !(0, b.sw)(n),
        p = n === E.s4.TEXT,
        [_, A] = iT(!0),
        [x, C] = iT(d),
        [g, N] = iT(u),
        [I, v] = iT(m),
        y = _ && x && g && I,
        j = (u || d) && !y,
        P = m && c;
    o.useEffect(() => {
        let e = "channel" === t.type ? t.channel?.guild_id : void 0;
        (0, t$.LV)({ guildId: e, force: !0 });
    }, [t]),
        o.useEffect(() => {
            n === E.s4.VOICE && t$.LK();
        }, [n]);
    let L = i.length > 0;
    return (0, r.jsxs)("div", {
        className: iA.kL,
        children: [
            P ? (0, r.jsx)(ib, {}) : null,
            (0, r.jsx)(iI, {
                searchQuery: i,
                setSearchQuery: l,
                placeholder: p ? et.intl.string(et.t.ziyFv2) : et.intl.string(et.t["pw+r5b"]),
            }),
            (0, r.jsx)(f.Ip, {
                ref: a,
                className: iA.Ph,
                fade: !0,
                children: L
                    ? (0, r.jsx)(ic, { context: t, query: i, entrypoint: n, isScrollCloseToBottom: s })
                    : (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(iv, { context: t, entrypoint: n, onEmptyState: A }),
                              d && "channel" === t.type && (0, r.jsx)(ij, { context: t, onEmptyState: C }),
                              u && (0, r.jsx)(iP, { context: t, entrypoint: n, onEmptyState: N }),
                              m && (0, r.jsx)(iy, { context: t, onEmptyState: v }),
                              y &&
                                  (0, r.jsx)(nz, {
                                      type: E.wg.HOME_EMPTY,
                                      textContent:
                                          n === E.s4.TEXT ? et.intl.string(et.t.iKZctW) : et.intl.string(et.t.RL7Ncg),
                                  }),
                              j && (0, r.jsx)(nY.A, {}),
                          ],
                      }),
            }),
        ],
    });
}
function ib() {
    return (0, r.jsxs)("div", {
        className: iA.G,
        children: [
            (0, r.jsx)(L.E, { className: iA.TR, variant: "text-sm/normal", children: et.intl.string(et.t.tZ3FNs) }),
            (0, r.jsx)(tr, { hideSearch: !0 }),
        ],
    });
}
function iI(e) {
    let { searchQuery: t, setSearchQuery: n, placeholder: i } = e,
        l = o.useRef(null),
        [a, s] = o.useState(!1),
        c = o.useMemo(
            () =>
                eC().debounce(
                    (e) => {
                        (0, u.zV)(ea.HAw.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                            query: e,
                            source: p.A.entrypoint(),
                            location: H.Oh.APP_LAUNCHER_HOME,
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
                    location: H.Oh.APP_LAUNCHER_HOME,
                });
        }, []),
        _ = o.useCallback(() => {
            s(!1);
        }, []),
        h = o.useCallback(
            (e) => {
                a || m(), n(e), c(e);
            },
            [a, n, m, c],
        );
    return (
        o.useEffect(() => {
            let e = l.current;
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
            className: iA.PP,
            children: (0, r.jsx)(tl.I, {
                ref: l,
                placeholder: i,
                query: t,
                onChange: h,
                onClear: d,
                onFocus: _,
                autoFocus: !0,
            }),
        })
    );
}
function iv(e) {
    let { context: t, entrypoint: n, onEmptyState: i } = e,
        l = n === E.s4.VOICE,
        { frecentApps: a, loading: s } = (function (e) {
            let { context: t, onlyActivityApps: n, allowCommandFetch: i, includeAuthorizedAppsAndFetch: l } = e,
                { sectionDescriptors: a, loading: s } = D.cu({ context: t, filters: na, options: ns, allowFetch: i });
            return {
                loading: s,
                frecentApps: (function (e) {
                    let {
                            sectionDescriptors: t,
                            context: n,
                            onlyActivityApps: i,
                            includeAuthorizedAppsAndFetch: l,
                        } = e,
                        a = (0, h.bG)([t6.default], () => t6.default.getFetchState());
                    o.useEffect(() => {
                        l && a === t6.FetchState.NOT_FETCHED && t2.A.fetch();
                    }, [l, a]);
                    let s = (0, h.yK)([t6.default], () =>
                            l
                                ? t6.default
                                      .getNewestTokens()
                                      .filter((e) => e.scopes.includes(t1.F.APPLICATIONS_COMMANDS))
                                : [],
                        ),
                        r = t.filter((e) => e.id !== es.Ik.FRECENCY && e.id !== es.Ik.BUILT_IN),
                        c = "contextless" === n.type,
                        d = o.useMemo(() => {
                            let e = [];
                            return c && e.push(nl.gq), e;
                        }, [c]),
                        u = t8(r, s);
                    return o.useMemo(
                        () =>
                            i
                                ? u
                                      .filter(
                                          (e) =>
                                              null != e.application &&
                                              (0, b.Ag)(e.application) &&
                                              null != (0, to.eI)(n, e.id),
                                      )
                                      .filter((e) => !d.includes(e.id))
                                : u.filter((e) => !d.includes(e.id)),
                        [i, u, n, d],
                    );
                })({ sectionDescriptors: a, context: t, onlyActivityApps: n, includeAuthorizedAppsAndFetch: l }),
            };
        })({ context: t, onlyActivityApps: l, allowCommandFetch: !0, includeAuthorizedAppsAndFetch: !0 }),
        c = o.useMemo(() => {
            let e = [];
            for (let t of a) null != t.application && e.push({ application: t.application });
            return e;
        }, [a]),
        d = et.intl.string(et.t["s+UQpc"]),
        m = d;
    l && (m = et.intl.string(et.t["2pFD8L"]));
    let { items: p, handleViewMore: _ } = iS({
        title: m,
        look: n === E.s4.VOICE ? nP.LARGE_BANNER : nP.ROW,
        items: c,
        limit: 8,
        sectionName: E.yK.RECENT_APPS,
    });
    o.useEffect(() => {
        s ||
            (0 !== p.length &&
                (0, u.zV)(ea.HAw.APP_LAUNCHER_FRECENTS_SEEN, {
                    num: p.length,
                    section_name: E.yK.RECENT_APPS,
                    location: E.W8.HOME,
                    source: n,
                }));
    }, [p.length, n, s]);
    let A = !s && 0 === p.length;
    return (o.useEffect(() => {
        i(A);
    }, [A, i]),
    !(function (e) {
        let { apps: t, onlyActivityApps: n } = e,
            i = o.useMemo(
                () =>
                    n
                        ? t.map((e) => {
                              let { application: t } = e;
                              return t.id;
                          })
                        : [],
                [t, n],
            );
        (0, N.A)(i);
    })({ apps: p, onlyActivityApps: l }),
    s || A)
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(nq, { title: d, buttonType: nq.buttonTypes.VIEW_MORE, onClickViewButton: _ }),
                  (0, r.jsx)("div", {
                      className: iA._,
                      children: (0, r.jsx)("div", {
                          className: iA.Ye,
                          children: p.map((e, n) => {
                              let { application: i } = e;
                              return l
                                  ? (0, r.jsx)(
                                        nB,
                                        {
                                            context: t,
                                            application: i,
                                            look: nP.ICON,
                                            location: E.W8.HOME,
                                            sectionName: E.yK.RECENT_APPS,
                                            resultsPosition: n,
                                            isOneClickCTA: !0,
                                            fetchesApplication: !1,
                                        },
                                        i.id,
                                    )
                                  : (0, r.jsx)(
                                        nV,
                                        {
                                            context: t,
                                            application: i,
                                            look: nP.ICON,
                                            location: E.W8.HOME,
                                            sectionName: E.yK.RECENT_APPS,
                                            resultsPosition: n,
                                        },
                                        i.id,
                                    );
                          }),
                      }),
                  }),
              ],
          });
}
function iy(e) {
    let { context: t, onEmptyState: n } = e;
    tY();
    let i = (0, tK.A)({ guildId: "channel" === t.type ? t.channel?.getGuildId() : void 0 }),
        l = nP.LARGE_BANNER,
        { trackSectionImpressionRef: a } = (0, nG.A)({
            sectionName: E.yK.ACTIVITIES,
            numItems: i.length,
            numVisibleItems: i.length,
        }),
        s = no(),
        c = 0 === i.length;
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
                      className: iA.a2,
                      children: i.map((e, n) => {
                          let { application: i } = e;
                          return (0, r.jsx)(
                              nB,
                              {
                                  context: t,
                                  application: i,
                                  look: l,
                                  location: H.Oh.APP_LAUNCHER_HOME,
                                  sectionName: E.yK.ACTIVITIES,
                                  resultsPosition: n,
                                  sectionOverallPosition: 0,
                                  isOneClickCTA: !s,
                                  fetchesApplication: !1,
                              },
                              i.id,
                          );
                      }),
                  }),
              ],
          });
}
function ij(e) {
    let { context: t, onEmptyState: n } = e,
        i = E.yK.APPS_IN_THIS_SERVER,
        { appsInThisServer: l, isLoading: a } = (function (e) {
            let { context: t } = e,
                n = "channel" === t.type ? t.channel : void 0,
                i = (0, g.ON)(n?.guild_id, !0),
                { commandsByActiveSection: l, loading: a } = D.cu({
                    context: t,
                    filters: { commandTypes: [k.kc.CHAT, k.kc.PRIMARY_ENTRY_POINT] },
                    options: { placeholderCount: 0, limit: es.Hi, includeFrecency: !0 },
                    allowFetch: !0,
                }),
                s = o.useMemo(
                    () =>
                        l.reduce((e, t) => {
                            let { section: n, data: i } = t;
                            return i.length > 0 && e.add(n.id), e;
                        }, new Set()),
                    [l],
                ),
                r = t8(
                    o.useMemo(
                        () =>
                            Object.values(i.result?.sections ?? {})
                                .map((e) => {
                                    let { descriptor: t } = e;
                                    return t;
                                })
                                .filter((e) => !(e.id in nr.gZ) && s.has(e.id)),
                        [i.result?.sections, s],
                    ),
                );
            return {
                appsInThisServer: o.useMemo(
                    () =>
                        eC()
                            .compact(
                                r.map((e) => {
                                    let { application: t } = e;
                                    return t;
                                }),
                            )
                            .map((e) => ({ application: e })),
                    [r],
                ),
                isLoading: i.fetchState.fetching || a,
            };
        })({ context: t }),
        { items: s, handleViewMore: c } = iS({
            title: et.intl.string(et.t.KfkuGc),
            look: nP.ROW,
            items: l,
            limit: 4,
            sectionName: i,
        }),
        { trackSectionImpressionRef: d } = (0, nG.A)({ sectionName: i, numItems: l.length, numVisibleItems: s.length }),
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
                      className: iA.l2,
                      children: a
                          ? iC.map((e) => (0, r.jsx)(nW, { look: nP.ROW }, e))
                          : s.map((e, n) => {
                                let { application: l } = e;
                                return null != l
                                    ? (0, r.jsx)(
                                          nV,
                                          {
                                              context: t,
                                              application: l,
                                              look: nP.ROW,
                                              sectionName: i,
                                              resultsPosition: n,
                                              location: H.Oh.APP_LAUNCHER_HOME,
                                          },
                                          l.id,
                                      )
                                    : null;
                            }),
                  }),
              ],
          });
}
function iP(e) {
    let { context: t, entrypoint: n, onEmptyState: i } = e,
        {
            fetchState: l,
            recommendationsSections: a,
            isInstallOnDemand: s,
        } = (function (e) {
            let t,
                n,
                { context: i, entrypoint: l } = e,
                a =
                    ((t = (0, h.bG)([tJ.default], () => tJ.default.onlyShowPreviewAppCollections)),
                    (n = tX.getConfig({ location: "App Launcher Home (Web)" }).enabled),
                    t ? tU.W.PREVIEW : n ? tU.W.NON_STAFF_PREVIEW : tU.W.ACTIVE);
            o.useEffect(() => {
                (0, K.An)({ surface: iN, activeState: a });
            }, [a]);
            let { sectionDescriptors: s } = D.cu({
                    context: i,
                    filters: { commandTypes: [k.kc.CHAT] },
                    options: { placeholderCount: 0, limit: es.Hi, includeFrecency: !0 },
                    allowFetch: !0,
                }),
                r = o.useCallback((e) => null == s.find((t) => t.id === e.id), [s]),
                c = (0, h.bG)([tZ.A], () => tZ.A.getFetchState({ surface: iN, activeState: a })),
                d = (0, h.bG)([tZ.A], () => tZ.A.getCollections({ surface: iN, activeState: a })),
                u = l === E.s4.VOICE;
            return {
                fetchState: c,
                recommendationsSections: o.useMemo(() => (u ? (0, b.hX)(d) : d), [d, u]),
                isInstallOnDemand: r,
            };
        })({ context: t, entrypoint: n }),
        c = (function (e) {
            let { context: t, recommendationsSections: n } = e;
            tY();
            let i = (0, tK.A)({ guildId: "channel" === t.type ? t.channel?.getGuildId() : void 0 });
            return o.useMemo(() => {
                if (!n.some((e) => (0, tz.Lt)(e.flags, tV.APPENDS_REMAINING_ACTIVITIES))) return ix;
                let e = new Set();
                return (
                    n.forEach((t) => {
                        t.application_directory_collection_items.forEach((t) => {
                            t.type === tG.L.APPLICATION && e.add(t.application.id);
                        });
                    }),
                    i.filter((t) => !e.has(t.application.id))
                );
            }, [n, i]);
        })({ context: t, recommendationsSections: a }),
        d = l === tZ.e.FETCHING,
        u = !d && 0 === a.length;
    return (o.useEffect(() => {
        i(u);
    }, [u, i]),
    u)
        ? null
        : d
          ? ig.map((e, t) => {
                let { cards: n, look: i } = e;
                return (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsx)(nq.Loading, {}),
                            (0, r.jsx)("div", {
                                className: i === nP.ROW ? iA.l2 : iA.a2,
                                children: n.map((e) => (0, r.jsx)(nW, { look: i }, e)),
                            }),
                        ],
                    },
                    t,
                );
            })
          : a.map((e, n) =>
                (0, r.jsx)(
                    iL,
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
function iL(e) {
    let t,
        n,
        { recommendationsSection: i, remainingActivities: l, isInstallOnDemand: a, position: s, context: c } = e,
        d = i.title;
    switch (i.type) {
        case tF.Y.BANNER_CARDS:
            t = nP.LARGE_BANNER;
            break;
        case tF.Y.SMALL_BANNER_CARDS:
            t = nP.MEDIUM_BANNER;
            break;
        default:
            t = nP.ROW;
    }
    let u = o.useMemo(() => {
            let e = i.application_directory_collection_items
                .map((e) => {
                    if (e.type === tG.L.APPLICATION)
                        return {
                            collectionItemId: e.id,
                            collectionItemImageHash: e.image_hash,
                            showsPromoted: (0, tz.Lt)(e.flags, tB.PROMOTED),
                            application: e.application,
                            installOnDemand: a(e.application),
                        };
                })
                .filter(t0.Vq);
            return (
                (0, tz.Lt)(i.flags, tV.APPENDS_REMAINING_ACTIVITIES) &&
                    e.push(
                        ...l.map((e) => {
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
        }, [a, i.application_directory_collection_items, i.flags, l]),
        m = i.title;
    switch (i.type) {
        case tF.Y.BANNER_CARDS:
        case tF.Y.SMALL_BANNER_CARDS:
            n = 6;
            break;
        case tF.Y.EXPANDABLE_LIST:
        default:
            n = 4;
    }
    let { items: p, handleViewMore: _ } = iS({
            title: d,
            look: t,
            items: u,
            limit: n,
            sectionName: m,
            sectionOverallPosition: s,
        }),
        { trackSectionImpressionRef: h } = (0, nG.A)({ sectionName: m, numItems: u.length, numVisibleItems: p.length }),
        A = i.type !== tF.Y.SMALL_BANNER_CARDS;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)("div", {
                ref: (e) => {
                    h.current = e;
                },
                children: (0, r.jsx)(nq, {
                    title: i.title,
                    buttonType: nq.buttonTypes.VIEW_MORE,
                    onClickViewButton: _,
                }),
            }),
            (0, r.jsx)("div", {
                className: t === nP.ROW ? iA.l2 : iA.a2,
                children: p.map((e, n) => {
                    let i,
                        {
                            collectionItemId: l,
                            collectionItemImageHash: a,
                            application: o,
                            installOnDemand: d,
                            showsPromoted: u,
                        } = e;
                    return (
                        null != l && null != a && (i = (0, tQ.DH)({ itemId: l, hash: a, containerWidth: 500 })),
                        (0, r.jsx)(
                            nV,
                            {
                                context: c,
                                application: o,
                                look: t,
                                sectionName: m,
                                resultsPosition: n,
                                location: H.Oh.APP_LAUNCHER_HOME,
                                installOnDemand: d,
                                enableVideoBanner: A,
                                sectionOverallPosition: s,
                                overrideImageUrl: i,
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
function iT(e) {
    let [t, n] = o.useState(!e);
    return [
        t,
        o.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            n(e);
        }, []),
    ];
}
function iS(e) {
    let { title: t, look: n, items: i, limit: l, sectionName: a, sectionOverallPosition: s } = e,
        { pushHistory: r } = (0, _.uM)();
    return o.useMemo(
        () =>
            i.length <= l
                ? { items: i, handleViewMore: void 0 }
                : {
                      items: i.slice(0, l),
                      handleViewMore: () => {
                          (0, u.zV)(ea.HAw.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: a,
                              source: p.A.entrypoint(),
                              num: i.length,
                          }),
                              r({
                                  type: _.Wy.LIST,
                                  title: t,
                                  look: n,
                                  items: i,
                                  sectionName: a,
                                  sectionOverallPosition: s,
                              });
                      },
                  },
        [i, l, a, r, t, n, s],
    );
}
var iR = n(1555);
function iO(e) {
    let { context: t, entrypoint: n, title: i, look: l, items: a, sectionName: s, sectionOverallPosition: c } = e,
        d = no(),
        u = o.useMemo(() => (n === E.s4.TEXT ? nV : nB), [n]);
    return (0, r.jsxs)("section", {
        className: iR.kL,
        "aria-label": et.intl.formatToPlainString(et.t.iobNIB, { sectionTitle: i }),
        children: [
            (0, r.jsxs)("div", {
                className: iR.wx,
                children: [
                    (0, r.jsx)(eP, { className: iR.Gv }),
                    (0, r.jsx)(O.D, { variant: "heading-md/medium", color: "text-strong", children: i }),
                ],
            }),
            (0, r.jsx)(f.Ip, {
                children: (0, r.jsx)("div", {
                    className: y()({ [iR.wf]: l !== nP.ROW, [iR.Ge]: l === nP.ROW }),
                    children: a.map((e, n) => {
                        let { application: i, installOnDemand: a, showsPromoted: o } = e;
                        return (0, r.jsx)(
                            u,
                            {
                                context: t,
                                application: i,
                                look: l,
                                sectionName: s,
                                resultsPosition: n,
                                location: H.Oh.APP_LAUNCHER_LIST_VIEW_ALL,
                                installOnDemand: a,
                                isOneClickCTA: d,
                                sectionOverallPosition: c,
                                showsPromoted: o,
                            },
                            i.id,
                        );
                    }),
                }),
            }),
        ],
    });
}
var ik = n(900376);
let iM = { width: 500, height: Y.$V },
    iw = { height: Y.$V },
    iD = o.memo(
        o.forwardRef(function (e, t) {
            let { context: n, entrypoint: i, initHistory: l } = e,
                { analyticsLocations: a } = (0, m.Ay)(d.A.APP_LAUNCHER);
            return (
                o.useEffect(() => {
                    (0, u.zV)(ea.HAw.APPLICATION_COMMAND_TOP_OF_FUNNEL, { source: i, location: "app_launcher" });
                }, [i]),
                o.useEffect(() => {
                    let e = Date.now();
                    return () => {
                        (0, u.zV)(ea.HAw.APP_LAUNCHER_CLOSED, {
                            reason: p.A.closeReason(),
                            time_spent: Date.now() - e,
                            source: i,
                        });
                    };
                }, [i]),
                (0, r.jsx)("div", {
                    className: ik.jP,
                    ref: t,
                    style: iM,
                    children: (0, r.jsx)("div", {
                        className: ik.FG,
                        children: (0, r.jsx)(m.f5, {
                            value: a,
                            children: (0, r.jsx)(iH, {
                                initHistory: l,
                                children: (0, r.jsx)(iU, { context: n, entrypoint: i }),
                            }),
                        }),
                    }),
                })
            );
        }),
    );
function iH(e) {
    let { initHistory: t, children: n } = e,
        [i, l] = o.useState(t ?? [{ type: _.Wy.HOME }]),
        [a, s] = o.useState({}),
        c = i[i.length - 1],
        [d, u] = o.useState(!1),
        m = o.useCallback((e) => {
            l((t) => [...t, e]);
        }, []),
        p = o.useCallback(() => {
            let e = null;
            l((t) => (t.length <= 1 ? t : ((e = t[t.length - 1]), t.slice(0, -1)))),
                s((t) => (null == e ? t : { ...t, [e.type]: e }));
        }, []),
        h = o.useCallback((e) => i.findLast((t) => t.type === e) ?? a[e], [i, a]);
    return (0, r.jsx)(_.L8.Provider, {
        value: {
            history: i,
            discard: a,
            currentView: c,
            pushHistory: m,
            goBack: p,
            getMostRecentHistoryItemByType: h,
            isSlideReady: d,
            setSlideReady: u,
        },
        children: n,
    });
}
function iU(e) {
    let { context: t, entrypoint: n } = e,
        [i, l] = o.useState(""),
        { setScroller: a, isCloseToBottom: s } = (function (e) {
            let [t, n] = o.useState(null),
                [i, l] = o.useState(!1),
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
                            ((a.current = t.scrollTop), l(t.scrollHeight - (t.scrollTop + t.clientHeight) < 340));
                    }
                }, [t]),
                { setScroller: n, isCloseToBottom: i }
            );
        })(i),
        { currentView: d, getMostRecentHistoryItemByType: u, setSlideReady: m } = (0, _.uM)();
    o.useEffect(() => {
        m(!1);
    }, [d?.type, m]);
    let p = o.useCallback(() => {
        m(!0);
    }, [m]);
    if (null == d) return null;
    let h = u(_.Wy.LIST),
        A = u(_.Wy.APPLICATION);
    return (0, r.jsxs)(c.t, {
        activeSlide: d.type,
        width: 500,
        onSlideReady: p,
        children: [
            (0, r.jsx)(c.q, {
                id: _.Wy.HOME,
                children: (0, r.jsx)("div", {
                    className: ik.xD,
                    style: iw,
                    children: (0, r.jsx)(iE, {
                        isScrollCloseToBottom: s,
                        setScroller: a,
                        context: t,
                        entrypoint: n,
                        searchQuery: i,
                        setSearchQuery: l,
                    }),
                }),
            }),
            (0, r.jsx)(c.q, {
                id: _.Wy.LIST,
                children: (0, r.jsx)("div", {
                    className: ik.xD,
                    style: iw,
                    children:
                        null != h &&
                        (0, r.jsx)(iO, {
                            context: t,
                            entrypoint: n,
                            title: h.title,
                            look: h.look,
                            items: h.items,
                            sectionName: h.sectionName,
                            sectionOverallPosition: h.sectionOverallPosition,
                        }),
                }),
            }),
            (0, r.jsx)(c.q, {
                id: _.Wy.APPLICATION,
                children: (0, r.jsx)("div", {
                    className: ik.xD,
                    style: iw,
                    children:
                        null != A &&
                        (0, r.jsx)(tD, { context: t, application: A.application, sectionName: A.sectionName }),
                }),
            }),
        ],
    });
}
