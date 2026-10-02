(n.d(t, { A: () => lW }), n(775443));
var l,
    i,
    s,
    a,
    r = n(477900),
    o = n(582128),
    c = n(430690),
    d = n(793574),
    u = n(95561),
    m = n(688810),
    p = n(989837),
    h = n(485878),
    A = n(17928),
    f = n(364522),
    x = n(696986),
    N = n(435582),
    E = n(283488),
    g = n(264322),
    C = n(429913),
    _ = n(500049),
    I = n(735991),
    j = n(717048),
    y = n(503698),
    v = n.n(y),
    P = n(320448),
    S = n(559647),
    T = n(834730),
    b = n(939249),
    L = n(346055),
    R = n(821609),
    O = n(297264),
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
var $ = n(56494),
    z = n(26909),
    X = n(993748),
    Y = n(927813),
    K = n(60809),
    q = n(482030),
    Z = n(922016),
    Q = n(112173),
    J = n(980707),
    ee = n(477782),
    et = n(375708),
    en = n(232647);
function el(e) {
    let { sortOrder: t, onSortOptionClick: n, closePopout: l } = e;
    return (0, r.jsx)("div", {
        className: v()(K.Wx, en.k),
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
                        action: () => {
                            (n(K.Ug.POPULAR), l());
                        },
                        checked: t === K.Ug.POPULAR,
                    }),
                    (0, r.jsx)(ee.iD, {
                        id: "sort-by-alphabetical",
                        group: "sort-by",
                        label: et.intl.string(et.t.m8xsti),
                        action: () => {
                            (n(K.Ug.ALPHABETICAL), l());
                        },
                        checked: t === K.Ug.ALPHABETICAL,
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
        case K.Ug.POPULAR:
            t = et.intl.string(et.t.SzxiqK);
            break;
        case K.Ug.ALPHABETICAL:
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
    er = n(65836),
    eo = n(822160);
let ec = "placeholder",
    ed = [, , , , ,].fill(ec);
function eu(e) {
    let { context: t, command: n, section: l, sectionName: i } = e,
        s = o.useCallback(() => {
            let e = p.A.entrypoint();
            (B.k(_.Se.COMMAND),
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
                    V._.dispatch(es.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: t.channel.id })));
        }, [t, n, l, i]),
        a = (n.options?.length ?? 0) > 0,
        c = o.useMemo(() => (0, q.SD)(n.displayDescription, void 0), [n.displayDescription]),
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
    let e = (0, A.bG)([k.Ay], () => k.Ay.useReducedMotion),
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
    return (0, r.jsx)("div", { className: v()(eo.G5, er.NX, { [er.cb]: e }), children: l });
}
function ep(e) {
    let { context: t, command: n, sectionName: l } = e;
    ((0, g.A4)(!0, !0), (0, g.SD)(t, !0, !0));
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
                        channel: t.channel,
                        commandIntegrationTypes: n.integration_types,
                        appLauncherContext: {
                            entrypoint: s,
                            location: D.Oh.APP_LAUNCHER_APPLICATION_VIEW,
                            sectionName: l,
                        },
                    });
                    e &&
                        (await (0, I.MJ)({
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
        icon: S.SendMessageIcon,
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
                [l, i] = o.useState(K.Ug.ALPHABETICAL),
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
            (o.useEffect(() => {
                X.Di(t, { dontRefetchMs: Y.A.Millis.DAY });
            }, [t]),
                o.useLayoutEffect(() => {
                    r && i(K.Ug.POPULAR);
                }, [r]));
            let c = s;
            switch (l) {
                case K.Ug.POPULAR:
                    c = a;
                    break;
                case K.Ug.ALPHABETICAL:
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
            s = (0, $.F)(i),
            a = o.useMemo(() => n.reduce((e, t) => ((e[t.id] = t), e), {}), [n]);
        return o.useMemo(
            () =>
                s
                    .map((e) => a[e])
                    .filter((e) => null != e)
                    .sort((e, t) => {
                        let n = z.Ay.getScoreWithoutLoadingLatest(i, e);
                        return z.Ay.getScoreWithoutLoadingLatest(i, t) - n;
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
    eN = n(435558),
    eE = n.n(eN),
    eg = n(462887),
    eC = n(602853),
    e_ = n(661531),
    eI = n(736653),
    ej = n(654107),
    ey = n(998304),
    ev = n(548411),
    eP = n(434743);
function eS(e) {
    let { className: t } = e,
        { goBack: n } = (0, h.uM)(),
        l = o.useCallback(() => {
            n();
        }, [n]);
    return (0, r.jsx)(b.D, {
        onClick: l,
        className: v()(eP.v, t),
        "aria-label": et.intl.string(et.t.ybUZql),
        children: (0, r.jsx)(ev.Z, { size: "sm", color: e_.A.colors.INTERACTIVE_TEXT_ACTIVE }),
    });
}
var eT = n(991690),
    eb = n(376357),
    eL = n(857250),
    eR = n(97483),
    eO = n(173936),
    eM = n(192308),
    ek = n(365199),
    eU = n(658575),
    eH = n(342384),
    eD = n(204776),
    ew = n(878014),
    eW = n(50268),
    eV = n(928658),
    eB = n(395671),
    eF = n(967198),
    eG = n(287809),
    e$ = n(174459),
    ez = n(957565),
    eX = n(692848),
    eY = n(442433),
    eK = n(700210),
    eq = n(885386);
function eZ(e) {
    let { application: t } = e,
        n = eF.A.getGuildId() ?? void 0;
    return (0, eK.A)({
        application: t,
        guildId: n,
        onItemClick: function () {
            ((0, eM.closeModal)(K.gS), (0, B.k)(_.Se.DISMISSED));
        },
    });
}
function eQ(e) {
    let { application: t, onSelect: n } = e,
        l = eq.Q_.useSetting(),
        i = (0, eW.A)({ id: t.id, label: et.intl.string(et.t["+NP/b2"]) }),
        s = eZ({ application: t });
    return (0, r.jsxs)(J.W, {
        "data-menu-migrated-auto": !0,
        navId: "activity-shelf-item-context",
        onClose: eY.Z_,
        "aria-label": et.intl.string(et.t.WkcHT9),
        onSelect: n,
        children: [
            null != s && (0, r.jsx)(ee.rX, { children: s }, "manage-app-actions"),
            l && (0, r.jsx)(ee.rX, { children: i }, "developer-actions"),
        ],
    });
}
var eJ = n(221959);
function e0(e) {
    let { application: t, context: l, className: i, sectionName: s } = e,
        a = o.useRef(null),
        c = (0, A.bG)([p.A], () => p.A.entrypoint()),
        d = (0, I.Pp)(t),
        m = (0, eD.Ie)(d),
        h = (0, eU.G)(t.id),
        f = (0, A.bG)([eF.A], () => eF.A.getGuildId() ?? void 0, []),
        x = {
            location: D.Oh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: t.id,
            section_name: s,
            source: p.A.lastShownEntrypoint(),
        },
        N = eG.default.getCurrentUser(),
        E = (0, eW.A)({ id: t.id, label: et.intl.string(et.t["+NP/b2"]) }),
        g = eZ({ application: t }),
        C = (0, ew.W)(t, eT.U.MAIN),
        _ = "channel" === l.type ? l.channel : void 0;
    return (0, r.jsxs)("div", {
        className: eJ.k,
        children: [
            (0, r.jsx)(b.D, {
                onClick: () => {
                    let e = C ? (0, eH.W)({ applicationId: t.id, referrerId: N?.id }) : (0, eH.V)({ id: t.id, ...d });
                    ((0, ez.C)(e, () => (0, eb.P)((0, eL.o)(et.intl.string(et.t["L/PwZf"]), eR.Ck.SUCCESS))),
                        e$.default.track(es.HAw.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: t.id,
                            source: c,
                        }));
                },
                className: v()(eJ.v, i),
                "aria-label": et.intl.string(et.t.WqhZss),
                children: (0, r.jsx)(eO.LinkIcon, { size: "sm", color: e_.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, r.jsx)(Z.Y, {
                targetElementRef: a,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, r.jsxs)(J.W, {
                        "data-menu-needs-review": !0,
                        className: K.qp,
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
                                                (0, eM.openModalLazy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("426782"),
                                                        n.e("538855"),
                                                        n.e("464759"),
                                                        n.e("942571"),
                                                        n.e("412117"),
                                                        n.e("1955"),
                                                        n.e("341161"),
                                                        n.e("410526"),
                                                        n.e("202985"),
                                                        n.e("603619"),
                                                        n.e("661630"),
                                                        n.e("470126"),
                                                        n.e("315513"),
                                                        n.e("162775"),
                                                        n.e("128804"),
                                                        n.e("60882"),
                                                        n.e("71151"),
                                                        n.e("227853"),
                                                        n.e("286615"),
                                                        n.e("70866"),
                                                        n.e("311541"),
                                                        n.e("472847"),
                                                        n.e("870088"),
                                                        n.e("989649"),
                                                        n.e("925420"),
                                                        n.e("586662"),
                                                        n.e("758053"),
                                                        n.e("247471"),
                                                        n.e("889002"),
                                                        n.e("611137"),
                                                        n.e("709976"),
                                                        n.e("750955"),
                                                        n.e("953343"),
                                                        n.e("763945"),
                                                        n.e("261204"),
                                                        n.e("25300"),
                                                        n.e("686731"),
                                                        n.e("807432"),
                                                        n.e("873532"),
                                                        n.e("279774"),
                                                        n.e("590088"),
                                                        n.e("125298"),
                                                        n.e("295570"),
                                                        n.e("728824"),
                                                        n.e("71169"),
                                                        n.e("906470"),
                                                        n.e("736663"),
                                                        n.e("730931"),
                                                        n.e("291103"),
                                                        n.e("419121"),
                                                        n.e("121046"),
                                                        n.e("489020"),
                                                        n.e("919789"),
                                                        n.e("669130"),
                                                        n.e("802890"),
                                                        n.e("82937"),
                                                        n.e("987221"),
                                                        n.e("253781"),
                                                        n.e("675327"),
                                                        n.e("82171"),
                                                        n.e("157064"),
                                                        n.e("560570"),
                                                        n.e("336046"),
                                                        n.e("58495"),
                                                        n.e("156957"),
                                                        n.e("363189"),
                                                        n.e("604153"),
                                                        n.e("641877"),
                                                        n.e("866212"),
                                                        n.e("535308"),
                                                        n.e("762309"),
                                                        n.e("340341"),
                                                        n.e("918786"),
                                                        n.e("352421"),
                                                        n.e("970760"),
                                                        n.e("701335"),
                                                        n.e("257935"),
                                                        n.e("724086"),
                                                        n.e("358937"),
                                                        n.e("448738"),
                                                        n.e("680431"),
                                                        n.e("385663"),
                                                        n.e("338332"),
                                                        n.e("894292"),
                                                        n.e("153302"),
                                                        n.e("88683"),
                                                        n.e("363874"),
                                                        n.e("923981"),
                                                        n.e("750370"),
                                                        n.e("612162"),
                                                        n.e("466592"),
                                                        n.e("73946"),
                                                        n.e("282050"),
                                                        n.e("436101"),
                                                        n.e("976888"),
                                                        n.e("387970"),
                                                        n.e("847445"),
                                                        n.e("547510"),
                                                        n.e("966366"),
                                                        n.e("983513"),
                                                        n.e("76928"),
                                                        n.e("355502"),
                                                        n.e("528311"),
                                                        n.e("406322"),
                                                        n.e("309702"),
                                                        n.e("348567"),
                                                        n.e("452075"),
                                                        n.e("900277"),
                                                        n.e("127962"),
                                                        n.e("968201"),
                                                        n.e("161282"),
                                                        n.e("77473"),
                                                        n.e("863232"),
                                                        n.e("25279"),
                                                        n.e("364827"),
                                                        n.e("517888"),
                                                        n.e("811133"),
                                                        n.e("959880"),
                                                        n.e("174016"),
                                                        n.e("907167"),
                                                        n.e("910471"),
                                                        n.e("11301"),
                                                        n.e("952372"),
                                                        n.e("784569"),
                                                        n.e("861060"),
                                                        n.e("77333"),
                                                        n.e("56366"),
                                                        n.e("639161"),
                                                        n.e("477175"),
                                                        n.e("960235"),
                                                        n.e("402368"),
                                                        n.e("190779"),
                                                        n.e("910486"),
                                                        n.e("221856"),
                                                        n.e("678157"),
                                                        n.e("646271"),
                                                        n.e("325675"),
                                                        n.e("996481"),
                                                        n.e("331988"),
                                                        n.e("40291"),
                                                        n.e("733115"),
                                                        n.e("373122"),
                                                        n.e("217951"),
                                                        n.e("793716"),
                                                        n.e("293159"),
                                                        n.e("186212"),
                                                        n.e("755936"),
                                                        n.e("147662"),
                                                        n.e("209338"),
                                                        n.e("749894"),
                                                        n.e("927875"),
                                                        n.e("833703"),
                                                        n.e("544571"),
                                                        n.e("55252"),
                                                        n.e("692990"),
                                                        n.e("362931"),
                                                        n.e("745959"),
                                                        n.e("858529"),
                                                        n.e("481987"),
                                                        n.e("595653"),
                                                        n.e("958038"),
                                                        n.e("532039"),
                                                        n.e("719466"),
                                                        n.e("99799"),
                                                        n.e("576909"),
                                                        n.e("27355"),
                                                        n.e("406174"),
                                                        n.e("715555"),
                                                        n.e("146070"),
                                                        n.e("590365"),
                                                        n.e("989088"),
                                                        n.e("817989"),
                                                        n.e("952548"),
                                                        n.e("577084"),
                                                        n.e("693832"),
                                                        n.e("193158"),
                                                        n.e("455924"),
                                                        n.e("523276"),
                                                        n.e("812042"),
                                                        n.e("102328"),
                                                        n.e("729963"),
                                                        n.e("830938"),
                                                        n.e("895785"),
                                                        n.e("665455"),
                                                        n.e("35485"),
                                                        n.e("837687"),
                                                        n.e("73536"),
                                                        n.e("538513"),
                                                        n.e("147864"),
                                                        n.e("28561"),
                                                        n.e("324622"),
                                                        n.e("370112"),
                                                        n.e("241176"),
                                                        n.e("348900"),
                                                        n.e("182069"),
                                                        n.e("920282"),
                                                        n.e("963584"),
                                                        n.e("446800"),
                                                        n.e("384996"),
                                                        n.e("896137"),
                                                        n.e("50097"),
                                                        n.e("263791"),
                                                        n.e("306306"),
                                                        n.e("654282"),
                                                        n.e("363618"),
                                                        n.e("644816"),
                                                        n.e("195468"),
                                                        n.e("617823"),
                                                        n.e("59413"),
                                                        n.e("928662"),
                                                        n.e("143549"),
                                                        n.e("509856"),
                                                        n.e("534928"),
                                                        n.e("154630"),
                                                        n.e("860177"),
                                                        n.e("875016"),
                                                        n.e("2329"),
                                                        n.e("784813"),
                                                        n.e("631573"),
                                                        n.e("831445"),
                                                        n.e("278412"),
                                                        n.e("235996"),
                                                        n.e("488990"),
                                                        n.e("703166"),
                                                        n.e("978436"),
                                                        n.e("628752"),
                                                        n.e("423532"),
                                                        n.e("262841"),
                                                        n.e("736926"),
                                                        n.e("509793"),
                                                        n.e("753589"),
                                                        n.e("791824"),
                                                        n.e("881379"),
                                                        n.e("521574"),
                                                        n.e("906723"),
                                                        n.e("209729"),
                                                        n.e("800311"),
                                                        n.e("22330"),
                                                        n.e("661832"),
                                                        n.e("474907"),
                                                        n.e("126437"),
                                                        n.e("24922"),
                                                        n.e("678050"),
                                                        n.e("225612"),
                                                        n.e("41250"),
                                                        n.e("168031"),
                                                        n.e("485384"),
                                                        n.e("320428"),
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
                                                  (null == d.customInstallUrl &&
                                                      (0, u.zV)(es.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, x),
                                                      (0, eX.o)({
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
                                                      }));
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
                        className: v()(eJ.v, i),
                        "aria-label": et.intl.string(et.t["UKOtz+"]),
                        children: (0, r.jsx)(ek.MoreHorizontalIcon, {
                            size: "sm",
                            color: e_.A.colors.INTERACTIVE_TEXT_ACTIVE,
                        }),
                    }),
            }),
        ],
    });
}
var e1 = n(207851);
function e2(e) {
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
        c = (0, eg.q)((0, eI.Ay)()),
        d = o.useRef(null),
        u = o.useRef(null),
        m = o.useRef(null),
        p = o.useRef(null),
        h = (0, eC.r)(e_.A.colors.BACKGROUND_BASE_LOW).hex(),
        A = (0, ej.Ay)("number" == typeof i ? "" : i, h ?? ""),
        f = o.useMemo(
            () =>
                (0, ey.lZ)({
                    foreground: ex()(A),
                    background: ex()(c ? "#000000" : "#ffffff"),
                    ratio: 5,
                    saturationFactor: 0.6,
                })?.hex() ?? A,
            [A, c],
        ),
        x = e2(d),
        N = e2(u),
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
                ((t.style.filter = `brightness(${1 + ((c ? 1.4 : 0.6) - 1) * p})`),
                    (t.style.backgroundColor = `color-mix(in oklab,${A} ${(1 - p) * 100}%, ${f})`),
                    (n.style.opacity = `${0 + +p}`),
                    (n.style.transform = `translateY(${(r = i / 4) + (0 - r) * p}px)`),
                    null != l && (l.style.opacity = `${1 + -1 * p}`));
            }
        }, [f, A, N?.height, c, s, x?.height]);
    return (
        o.useEffect(() => {
            E();
        }, [E, c]),
        o.useEffect(() => {
            let e = s.current;
            function t() {
                E();
            }
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
                    className: e1.Xp,
                    children: [
                        (0, r.jsx)("div", {
                            className: e1.LO,
                            children: (0, r.jsx)("div", { className: e1.If, ref: d }),
                        }),
                        (0, r.jsx)("div", { className: e1.FY, children: (0, r.jsx)(eS, { className: e1.aY }) }),
                        (0, r.jsx)("div", {
                            className: e1.VW,
                            children: (0, r.jsx)(O.D, {
                                ref: m,
                                className: e1.n,
                                variant: "heading-lg/extrabold",
                                children: l,
                            }),
                        }),
                    ],
                }),
                (0, I.$B)(t)
                    ? (0, r.jsx)("div", {
                          ref: p,
                          className: e1.Ch,
                          children: (0, r.jsx)(e0, { application: t, context: n, className: e1.aY, sectionName: a }),
                      })
                    : null,
                (0, r.jsx)("div", { ref: u, className: e1.b8, style: { backgroundColor: A } }),
            ],
        })
    );
}
var e3 = n(34188),
    e7 = n(700623),
    e5 = n(177953),
    e9 = n(825484),
    e6 = n(512950),
    e4 = n(900797),
    te = n(847374),
    tt = n(10716),
    tn = n(702841),
    tl = n(150934),
    ti = n(95477),
    ts = n(683438),
    ta = n(909206),
    tr = n(665367);
function to(e) {
    let { hideSearch: t, className: n } = e,
        {
            activityUrlOverride: l,
            useActivityUrlOverride: i,
            filter: s,
        } = (0, tn.cf)(
            [tt.A],
            () => ({
                activityUrlOverride: tt.A.getActivityUrlOverride(),
                useActivityUrlOverride: tt.A.getUseActivityUrlOverride(),
                filter: tt.A.getFilter(),
            }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: v()(tr.kL, n),
        children: [
            (0, r.jsx)(tl.S, { checked: i, onChange: ta.c2, label: et.intl.string(et.t["3TSGuD"]) }),
            i
                ? (0, r.jsx)(ti.k, {
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
                      children: (0, r.jsx)(ts.I, {
                          size: "sm",
                          query: s,
                          onChange: ta._9,
                          onClear: function () {
                              ta._9("");
                          },
                      }),
                  }),
        ],
    });
}
var tc = n(361926),
    td = n(25451),
    tu = n(177640),
    tm = n(607470),
    tp = n(713804),
    th = n(396533),
    tA = n(866665),
    tf = n(849269),
    tx = n(811024),
    tN = n(782091),
    tE = n(847381),
    tg = n(576705),
    tC = n(723702),
    t_ = n(818348),
    tI = n(698141);
function tj(e) {
    let { context: t, application: n, sectionName: l, primaryEntryPointCommand: i } = e,
        s = o.useId(),
        a = o.useCallback(() => {
            B.k(_.Se.ACTIVITY);
        }, []),
        c = o.useCallback(() => {
            p.A.shouldShowModal() && a();
        }, [a]),
        { submitting: d, wasSubmitting: u } = (0, tI.A)({
            applicationId: n.id,
            context: t,
            launchingComponentId: s,
            onSubmissionComplete: a,
        }),
        [m, h] = o.useState(!1),
        f = (0, tf.Hq)({ applicationId: n.id, context: t }),
        x = o.useMemo(() => (0, I.kF)(i.displayName), [i.displayName]),
        {
            onActivityItemSelected: N,
            buttonVariant: E,
            buttonText: g,
        } = (0, q.dn)({
            context: t,
            application: n,
            location: D.Oh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: l,
            commandName: x,
            autoDismissOnClick: f === tf.o6.LEAVE || (0, td.X)(n),
            launchingComponentId: s,
            submitting: u ?? d,
            onConfirmActivityLaunchChecksAlertOpen: c,
        }),
        { disabled: C, reason: j } = (function (e) {
            let t,
                { context: n, application: l, activityAction: i } = e,
                s = "channel" === n.type ? n.channel : void 0,
                a = (0, A.bG)([tg.A], () => tg.A.can(t_.xB.USE_EMBEDDED_ACTIVITIES, s)),
                r = (0, tN.et)(s?.id),
                o = !1;
            switch (i) {
                case tf.o6.LEAVE:
                    o = !1;
                    break;
                case tf.o6.START:
                    null == s
                        ? (o = !1)
                        : s?.isGuildVoice()
                          ? r !== tN.xy.CAN_LAUNCH && (o = !0)
                          : (0, tx.pE)(s) || (o = !0);
                    break;
                case tf.o6.JOIN:
                    s?.isGuildVoice() ? (o = !a) : (0, tx.pE)(s) || (o = !0);
            }
            if (i !== tf.o6.LEAVE) {
                let e = l instanceof eB.Ay ? l.embeddedActivityConfig : l.embedded_activity_config,
                    n = (0, tE.A)((0, tC.getOS)());
                null == e || e.supported_platforms.includes(n)
                    ? s?.isThread() && ((o = !0), (t = et.intl.string(et.t.ddSR3v)))
                    : ((o = !1), (t = et.intl.string(et.t.z2YTgJ)));
            }
            return (o && null == t && (t = et.intl.string(et.t.f41E1g)), { disabled: o, reason: t });
        })({ context: t, application: n, activityAction: f });
    return (0, r.jsx)(tA.m, {
        shouldShow: null != j,
        __unsupportedReactNodeAsText: j,
        children: (0, r.jsx)(R.$, {
            type: "submit",
            size: "md",
            variant: E,
            disabled: C,
            loading: m,
            onClick: () => {
                (h(!0),
                    N(),
                    e$.default.track(es.HAw.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                        application_id: n.id,
                        button_action: _.F5.USE_APP_COMMAND,
                    }));
            },
            "aria-label": et.intl.formatToPlainString(et.t["XjP/R+"], { buttonText: g, applicationName: n.name }),
            text: g,
        }),
    });
}
var ty = n(522305);
function tv(e) {
    let { botUserId: t, applicationId: n, analyticsLocations: l } = e,
        [i, s] = o.useState(!1),
        a = o.useRef(null),
        c = o.useCallback(async () => {
            (e$.default.track(es.HAw.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: n,
                button_action: _.F5.OPEN_APP_DM,
            }),
                s(!0));
            try {
                await (0, ty.Q)({ appId: n, botId: t, analyticsLocations: l });
            } catch (e) {}
            (clearTimeout(a.current), s(!1));
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
var tP = n(576917),
    tS = n(165648);
function tT(e) {
    let { context: t, application: n, videoUrl: l, imageCoverUrl: i, sectionName: s, hasCommands: a } = e,
        c = o.useMemo(() => (0, I.u8)(n) ?? "", [n]),
        d = (0, A.bG)([tt.A], () => tt.A.inDevModeForApplication(n.id)),
        { isSlideReady: u } = (0, h.uM)(),
        [m, p] = o.useState(!1);
    o.useEffect(() => {
        u && p(!0);
    }, [u]);
    let f = null != l;
    return (0, r.jsxs)("div", {
        className: tP.kL,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    f
                        ? (0, r.jsxs)("div", {
                              className: tP.j,
                              children: [
                                  m
                                      ? (0, r.jsx)(tm.A, {
                                            className: v()(tP.l3, tP.Ki),
                                            loop: !0,
                                            muted: !0,
                                            autoPlay: !0,
                                            src: l,
                                            poster: i,
                                        })
                                      : null,
                                  (0, r.jsx)("img", {
                                      className: tP.l3,
                                      src: i,
                                      "aria-label": et.intl.string(et.t.X4IxWL),
                                  }),
                              ],
                          })
                        : null,
                    (0, r.jsxs)("div", {
                        className: f ? tP.iw : tP.bH,
                        children: [
                            (0, r.jsx)(tL, { application: n }),
                            (0, r.jsx)(tR, { application: n }),
                            c.length > 0 ? (0, r.jsx)(tk, { description: c }) : null,
                            d
                                ? (0, r.jsx)("div", {
                                      className: tP.G,
                                      children: (0, r.jsx)(to, { hideSearch: !0, className: tP.bz }),
                                  })
                                : null,
                            (0, r.jsx)(tM, {
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
            (0, r.jsx)(tb, { application: n }),
        ],
    });
}
function tb(e) {
    let { application: t } = e,
        n = (0, I.K4)(t),
        l = (0, I.ME)(t);
    return n || l
        ? (0, r.jsxs)("div", {
              className: tP.fP,
              children: [
                  n
                      ? (0, r.jsxs)("div", {
                            className: tP.wi,
                            children: [
                                (0, r.jsx)(e3.U, { size: "sm", color: e_.A.colors.ICON_MUTED }),
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
                            className: tP.wi,
                            children: [
                                (0, r.jsx)(e7.d, { size: "sm", color: e_.A.colors.ICON_MUTED }),
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
function tL(e) {
    let { application: t } = e,
        n = (0, I.$B)(t) ? t.name : ((0, I.lq)(t) ?? ""),
        l = (0, I.b7)(t);
    return (0, r.jsxs)("div", {
        className: tP.gn,
        children: [
            (0, r.jsx)(O.D, { variant: "heading-xl/extrabold", lineClamp: 1, children: n }),
            l
                ? (0, r.jsx)("div", {
                      className: tP.s3,
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
function tR(e) {
    let { application: t } = e,
        n = o.useMemo(() => ((0, I.$B)(t) ? (t?.tags ?? []) : []), [t]);
    return (0, I.Z$)(t)
        ? (0, r.jsxs)("div", {
              className: tP.Pc,
              children: [
                  (0, r.jsx)(tO, { application: t }),
                  n.map((e, t) =>
                      (0, r.jsx)(
                          "div",
                          {
                              className: tP.I8,
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
function tO(e) {
    let { application: t } = e;
    if (!(0, I.Z$)(t)) return null;
    let n = ((0, I.$B)(t) ? (t instanceof eB.Ay ? t.maxParticipants : t.max_participants) : 0) ?? 0;
    return (0, r.jsxs)("div", {
        className: tP.I8,
        "aria-label": n > 0 ? et.intl.formatToPlainString(et.t["p/YmkR"], { count: n }) : et.intl.string(et.t.s1vQIL),
        children: [
            (0, r.jsx)(e5.n, { size: "xs", color: e_.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            (0, r.jsx)(T.E, {
                variant: "text-sm/semibold",
                color: "interactive-text-default",
                children: n > 0 ? `1-${n}` : et.intl.string(et.t.zMNEiF),
            }),
        ],
    });
}
function tM(e) {
    let { context: t, application: n, sectionName: l, hasCommands: i, isDeveloperOfThisApp: s } = e,
        a = (0, tc.E0)(t, n.id),
        c = (0, C.h)(n.id),
        d = c?.bot?.id,
        u = (function (e) {
            let { context: t, application: n, botUserId: l } = e,
                i = (0, tc.Vr)({ context: t, applicationId: n.id, botUserId: l }),
                s = (0, tu.A)("channel" === t.type ? t.channel : void 0);
            return !(0, td.X)(n) && i && null != l && !s;
        })({ context: t, application: n, botUserId: d }),
        { analyticsLocations: p } = (0, m.Ay)();
    return (o.useEffect(() => {
        if (!(0, I.$B)(n) || !(0, I.Z$)(n)) return;
        let e = setTimeout(() => {
            (null == a || null == d) &&
                e$.default.track(es.HAw.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                    application_id: n.id,
                    is_primary_entry_point_command_non_null: null != a,
                    is_bot_user_id_non_null: null != d,
                    show_try_it_out_button: u,
                });
        }, 2e3);
        return () => clearTimeout(e);
    }, [n, a, d, u]),
    (0, I.$B)(n) && (0, I.Z$)(n))
        ? null != a && null != d
            ? (0, r.jsxs)(e9.e, {
                  fullWidth: !0,
                  children: [
                      (0, r.jsx)(tj, { context: t, application: n, sectionName: l, primaryEntryPointCommand: a }),
                      u && null != d
                          ? (0, r.jsx)(tv, { botUserId: d, applicationId: n.id, analyticsLocations: p })
                          : null,
                  ],
              })
            : s && !i && (0, I.Z$)(n)
              ? (0, r.jsx)(e6.p, {
                    className: tP.ai,
                    messageType: e6.Y.WARNING,
                    children: et.intl.format(et.t["s/3hjE"], {}),
                })
              : null
        : null;
}
function tk(e) {
    let { description: t } = e,
        [n, l] = o.useState(!0);
    o.useLayoutEffect(() => l(!1), []);
    let i = o.useMemo(() => (0, tp.parseBioReact)(t), [t]),
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
        { ref: u, isTransitioning: m, onTransitionEnd: p } = (0, th.A)({ isExpanded: n, ...d }),
        h = n || m;
    return (0, r.jsxs)("div", {
        className: tP.iQ,
        children: [
            (0, r.jsx)("div", {
                ref: u,
                className: tP.ZT,
                onTransitionEnd: p,
                children: (0, r.jsx)(T.E, {
                    ref: s,
                    className: tS.PT,
                    variant: "text-sm/medium",
                    lineClamp: h ? void 0 : 2,
                    style: { maxHeight: h ? void 0 : d.minHeightOverride },
                    children: i,
                }),
            }),
            null != c && c > 2
                ? (0, r.jsxs)(b.D, {
                      className: tP.lP,
                      onClick: () => l((e) => !e),
                      children: [
                          (0, r.jsx)(T.E, {
                              variant: "text-sm/semibold",
                              color: "text-brand",
                              children: h ? et.intl.string(et.t.u4YJ8g) : et.intl.string(et.t["N/tajD"]),
                          }),
                          h
                              ? (0, r.jsx)(e4.t, { size: "sm", color: e_.A.colors.TEXT_BRAND })
                              : (0, r.jsx)(te.a, { size: "sm", color: e_.A.colors.TEXT_BRAND }),
                      ],
                  })
                : null,
        ],
    });
}
var tU = n(8378),
    tH = n(291071);
function tD(e) {
    let { context: t, application: n, sectionName: l } = e,
        i = "channel" === t.type ? t.channel : void 0,
        s = (0, A.bG)([p.A], () => p.A.entrypoint()),
        a = (0, C.h)(n.id === ea.Ik.BUILT_IN ? null : n.id) ?? n,
        c = (0, I.Z$)(a),
        d = o.useRef(null),
        [u, m] = o.useState(!1),
        { iconURL: h, name: N } = o.useMemo(() => (0, I.X2)(a, { fakeAppIconURL: tH, size: 84 }), [a]),
        E = (0, g.A4)(!0, !0),
        y = (0, g.ON)(i?.guild_id, !0),
        v = o.useMemo(() => (0, g.Sx)(t, a.id), [E, y, t, a.id]),
        P = !v.isGuildInstalled && !v.isUserInstalled;
    return (
        o.useEffect(() => {
            P && g.Ay.queryInstallOnDemandApp(a.id, i?.id);
        }, [a.id, i?.id, P]),
        (0, r.jsxs)(f.d_, {
            className: tU.k,
            fade: !0,
            ref: d,
            role: "region",
            "aria-label": et.intl.formatToPlainString(et.t["4OP4Uk"], { applicationName: N }),
            children: [
                (0, r.jsx)(e8, { application: a, context: t, name: N, iconURL: h, scrollerRef: d, sectionName: l }),
                null != h && (0, r.jsx)(j.A, { src: h, className: tU.Z }),
                (0, r.jsx)(x.h, { size: 54 }),
                (0, r.jsx)(c ? tw : tT, { context: t, application: a, sectionName: l, hasCommands: u }),
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
function tw(e) {
    let { context: t, application: n, sectionName: l, hasCommands: i } = e,
        s = (0, E.A)({ applicationId: n.id, size: 2048, names: ["embedded_cover"], format: "webp" }),
        a = (0, I.Cx)(n),
        o =
            null != a && null != a.activity_preview_video_asset_id
                ? (0, N.A)(n.id, a.activity_preview_video_asset_id)
                : null;
    return (0, r.jsx)(tT, {
        context: t,
        application: n,
        imageCoverUrl: s.url,
        videoUrl: o,
        sectionName: l,
        hasCommands: i,
    });
}
(n(321073), n(938796));
var tW = n(724002),
    tV =
        (((l = {})[(l.APPENDS_REMAINING_ACTIVITIES = 1)] = "APPENDS_REMAINING_ACTIVITIES"),
        (l[(l.DEFAULT = 0)] = "DEFAULT"),
        l),
    tB =
        (((i = {})[(i.PROMOTED = 1)] = "PROMOTED"),
        (i[(i.SKIPS_APPLICATION_DISCOVERABILITY_VALIDATION = 2)] = "SKIPS_APPLICATION_DISCOVERABILITY_VALIDATION"),
        (i[(i.DEFAULT = 0)] = "DEFAULT"),
        i),
    tF = n(287174),
    tG = n(487899),
    t$ = n(239314),
    tz = n(665260),
    tX = n(795816),
    tY = n(648027),
    tK = n(170148);
function tq() {
    let e = (0, tK.z)(),
        t = eq.Q_.getSetting(),
        n = (0, A.bG)([tt.A], () => tt.A.getFetchState(), []);
    return (
        o.useEffect(() => {
            e && t && n === tt.$.INITIALIZED && (0, tX.SE)();
        }, [e, n, t]),
        null
    );
}
let tZ = (0, n(945810).mj)({
    kind: "user",
    name: "2025-01-allow-nonstaff-to-preview-app-collections",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tQ = n(111042),
    tJ = n(939635),
    t0 = n(111162),
    t1 = n(403362),
    t2 = n(179771),
    t8 = n(168186),
    t3 = n(594061),
    t7 = n(935208),
    t5 = n(630248),
    t9 = n(355097);
function t6(e, t) {
    o.useEffect(() => {
        t3.bW.loadIfUncached(t9.oD.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let n = (0, A.bG)([t5.A], () => t5.A.getApplicationFrecencyWithoutLoadingLatest()),
        l = o.useMemo(
            () =>
                null == t || 0 === t.length
                    ? e
                    : e.map((e) => ({ ...e, isUserApp: t?.some((t) => t.application.id === e.id) ?? !1 })),
            [e, t],
        ),
        i = o.useMemo(() => t?.filter((t) => !e.some((e) => e.id === t.application.id)), [e, t]),
        s = o.useMemo(() => {
            (i?.forEach((e) => {
                let t = t7.default.extractTimestamp(e.id);
                null == n.getEntry(e.application.id) && n.track(e.application.id, { timestamp: t });
            }),
                n.compute());
            let e = i?.map((e) => (0, t8.bq)(e.application, !0)) ?? [],
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
        (t?.forEach((t) => {
            let n = t7.default.extractTimestamp(t.id);
            (null == i || n > i) && ((e = t), (i = n));
        }),
            l.forEach((t) => {
                let l = Math.max(...(n.getEntry(t.id)?.recentUses ?? []));
                (null == i || l > i) && ((e = t), (i = l));
            }));
        let a = e?.application?.id ?? "";
        return [...s.filter((e) => e.id === a), ...s.filter((e) => e.id !== a)];
    }, [s, l, n, t]);
}
var t4 = n(457408),
    ne = n(712440),
    nt = n(733110),
    nn = n(73153);
let nl = 10 * Y.A.Millis.MINUTE,
    ni = { lastUsedCommandId: null, lastUsedTimeMs: null };
class ns extends A.Ay.PersistedStore {
    static displayName = "AppLauncherLastUsedCommandStore";
    static persistKey = "AppLauncherLastUsedCommandStore";
    initialize(e) {
        null != e && ((ni.lastUsedCommandId = e.lastUsedCommandId), (ni.lastUsedTimeMs = e.lastUsedTimeMs));
    }
    getState() {
        return ni;
    }
    getLastUsedCommandId() {
        let e = Date.now();
        return null == ni.lastUsedTimeMs || null == ni.lastUsedCommandId
            ? null
            : (e > ni.lastUsedTimeMs + nl && ((ni.lastUsedCommandId = null), (ni.lastUsedTimeMs = null)),
              ni.lastUsedCommandId);
    }
}
new ns(nn.h, {
    APPLICATION_COMMAND_USED: function (e) {
        let { command: t } = e;
        ((ni.lastUsedCommandId = t.id), (ni.lastUsedTimeMs = Date.now()));
    },
});
var na = n(818023);
let nr = { commandTypes: [M.kc.CHAT, M.kc.PRIMARY_ENTRY_POINT] },
    no = { placeholderCount: 0, limit: ea.Hi, includeFrecency: !0 };
var nc = n(917012);
function nd() {
    return eq.Q_.useSetting();
}
var nu = n(696292),
    nm = n(136722),
    np = n(508770),
    nh = n(289873),
    nA = n(475743),
    nf = n(933958),
    nx = n(205184),
    nN = n(994500),
    nE = n(881343),
    ng = n(697675),
    nC = n(20015),
    n_ = n(91242),
    nI = n(977445),
    nj = n(932413),
    ny = n(953727);
function nv(e) {
    let { width: t = 24, height: n = 24, color: l = "currentColor", foreground: i, ...s } = e;
    return (0, r.jsx)("svg", {
        ...(0, ny.A)(s),
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
var nP = n(486020),
    nS = n(786115),
    nT = n(838541),
    nb = n(534687),
    nL = n(3697),
    nR =
        (((s = {}).ICON = "icon"),
        (s.ROW = "row"),
        (s.NO_BANNER = "no_banner"),
        (s.MEDIUM_BANNER = "medium_banner"),
        (s.LARGE_BANNER = "large_banner"),
        s);
function nO(e) {
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
        A = (0, nA.Ay)(m) ?? m;
    return (0, r.jsx)(nM, {
        application: t,
        onClick: l,
        sectionName: o,
        resultsPosition: c,
        disabled: m,
        tracksImpression: u,
        look: n,
        sectionOverallPosition: d,
        children: (0, r.jsx)(nj.A, {
            applicationId: t.id,
            questContent: nu.u.APP_LAUNCHER,
            children: (e) =>
                (0, r.jsx)("div", {
                    ref: e,
                    children:
                        "icon" === n
                            ? (0, r.jsx)(nk, { application: t, imageStyle: i, children: a })
                            : (0, r.jsx)(nU, {
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
function nM(e) {
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
                if ((0, I.$B)(t)) {
                    let n = t instanceof eB.Ay ? t : eB.Ay.createFromServer(t);
                    (0, eY.jA)(e, (e) => (0, r.jsx)(eQ, { application: n, ...e }));
                }
            },
            [t],
        ),
        { name: h, description: A } = o.useMemo(() => (0, I.X2)(t, { fakeAppIconURL: tH }), [t]),
        { trackItemImpressionRef: f } = (0, nS.A)({
            applicationId: t.id,
            applicationFlags: (0, I.$B)(t) ? nm.pG(32, (0, nC.K)(t)) : void 0,
            sectionName: i,
            sectionPosition: s,
            sectionOverallPosition: a,
            promotionalLabel: (0, I.Ii)(t),
        }),
        x = o.useMemo(() => {
            let e = d ? nb.Qz : nb.kL;
            return v()(e, { [nb.uS]: "row" !== m, [nb.qd]: "row" === m, [nb.oI]: "icon" === m }, u);
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
function nk(e) {
    let { application: t, imageStyle: n, children: l } = e,
        { name: i, iconURL: s } = o.useMemo(() => (0, I.X2)(t, { fakeAppIconURL: tH }), [t]);
    return (0, r.jsx)(tA.m, {
        __unsupportedReactNodeAsText: i,
        children: (0, r.jsxs)("div", {
            className: v()(nb.zc, n),
            children: [(0, r.jsx)(j.A, { src: s, className: nb.oI, "aria-hidden": !0, rendersPlaceholder: !0 }), l],
        }),
    });
}
function nU(e) {
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
        { iconURL: u, name: m, description: p } = o.useMemo(() => (0, I.X2)(t, { fakeAppIconURL: tH }), [t]),
        h = o.useMemo(() => (null == p ? null : (0, q.SD)(p)), [p]),
        A = (0, ej.Ay)(u, ""),
        [f, x] = o.useState(!1),
        N = o.useCallback(() => {
            !0 === i && x(!0);
        }, [i]),
        E = d || (0, I.NO)(t),
        g = "large_banner" === n || "medium_banner" === n,
        C = o.useCallback(() => x(!1), []),
        _ = (0, nI.uS)(t.id),
        y = (0, I.fl)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            g
                ? (0, r.jsxs)("div", {
                      onMouseEnter: N,
                      onFocus: N,
                      onMouseLeave: C,
                      onBlur: C,
                      className: v()(nb.zK, { [nb.i2]: "medium_banner" === n, [nb.ir]: "large_banner" === n }),
                      children: [
                          (0, r.jsx)("span", {
                              className: l,
                              children: (0, r.jsx)(nw, {
                                  application: t,
                                  fallbackColor: A,
                                  showVideo: f,
                                  disableFadeIn: s,
                                  overrideImageUrl: c,
                              }),
                          }),
                          _ || E || y !== M.Hr.NONE
                              ? (0, r.jsxs)("div", {
                                    className: nb.YN,
                                    children: [
                                        E &&
                                            (0, r.jsx)(np.E, {
                                                type: { text: et.intl.string(et.t["/eVltv"]) },
                                                variant: "expressive",
                                            }),
                                        _ && (0, r.jsx)(nH, {}),
                                        y !== M.Hr.NONE && (0, r.jsx)(ng.A, { labelType: y }),
                                    ],
                                })
                              : null,
                          (0, r.jsx)("div", { className: nb.Re, children: a }),
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: v()(nb.TD, { [nb.Ne]: "row" === n }),
                children: [
                    (0, r.jsx)(j.A, {
                        src: u,
                        className: v()(nb.Kk, { [nb.aL]: "row" === n }),
                        "aria-hidden": !0,
                        rendersPlaceholder: !0,
                    }),
                    (0, r.jsxs)("div", {
                        className: nb.eV,
                        children: [
                            (0, r.jsxs)("div", {
                                className: nb.mD,
                                children: [
                                    (0, r.jsx)(O.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        lineClamp: 1,
                                        children: m,
                                    }),
                                    !g && E
                                        ? (0, r.jsx)(np.E, {
                                              type: { text: et.intl.string(et.t["/eVltv"]) },
                                              variant: "expressive",
                                          })
                                        : null,
                                    (0, r.jsx)(nD, { application: t }),
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
                    "row" === n ? (0, r.jsx)("div", { className: nb.ek }) : null,
                ],
            }),
        ],
    });
}
function nH() {
    return (0, r.jsx)(tA.m, {
        text: et.intl.string(et.t.CfTySQ),
        children: (0, r.jsx)("div", { className: nb.hh, children: (0, r.jsx)(nv, { className: nb.bB }) }),
    });
}
function nD(e) {
    let { application: t } = e,
        n = eG.default.getCurrentUser();
    if (!n?.isStaff() && !n?.isStaffPersonal()) return null;
    let l = (0, I.Cx)(t);
    if (null == l || !(0, I.$B)(t)) return null;
    let i = (0, tf.l$)(t, l);
    return null == i
        ? null
        : (0, r.jsx)(tA.m, {
              __unsupportedReactNodeAsText: i,
              children: (0, r.jsx)("img", { className: nb.io, alt: i, src: nL }),
          });
}
function nw(e) {
    let { application: t, fallbackColor: n, showVideo: l, disableFadeIn: i, overrideImageUrl: s } = e;
    if (null != s)
        return (0, r.jsx)("img", { src: s, alt: (0, I.$B)(t) ? t.name : "", className: v()(nb._e, { [nb.cG]: i }) });
    if ((0, I.$B)(t)) {
        if ((0, I.Z$)(t)) return (0, r.jsx)(nW, { application: t, showVideo: l, disableFadeIn: i });
        if (null != t.bot) return (0, r.jsx)(nV, { bot: t.bot, fallbackColor: n, disableFadeIn: i });
    }
    return (0, r.jsx)(nB, { fallbackColor: n, disableFadeIn: i });
}
function nW(e) {
    let { application: t, showVideo: n, disableFadeIn: l } = e,
        i = (0, E.A)({ applicationId: t.id, size: 600, names: ["embedded_cover"], format: "webp" }),
        s = o.useMemo(() => {
            let e = (0, I.Cx)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, N.A)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        [a, c] = o.useState(n);
    o.useEffect(() => {
        n && c(!0);
    }, [n]);
    let d = v()(nb._e, { [nb.cG]: l });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != s && a
                ? (0, r.jsx)("div", {
                      className: nb.SF,
                      children: (0, r.jsx)("div", {
                          className: v()(nb.T0, { [nb.Q]: !n }),
                          onAnimationEnd: () => (n ? null : c(!1)),
                          children: (0, r.jsx)(tm.A, {
                              src: s,
                              mediaLayoutType: nT.dG.MOSAIC,
                              loop: !0,
                              autoPlay: !0,
                              muted: !0,
                          }),
                      }),
                  })
                : null,
            (0, r.jsx)(nE.A, {
                imageBackground: i,
                applicationName: t.name,
                imageClassName: d,
                imageNotFoundClassName: d,
            }),
        ],
    });
}
function nV(e) {
    let { bot: t, fallbackColor: n, disableFadeIn: l } = e,
        i = (0, A.bG)([k.Ay], () => k.Ay.useReducedMotion),
        s = (0, nP.z)({ id: t.id, banner: t.banner, canAnimate: !i, size: 600 });
    return null == s
        ? (0, r.jsx)(nB, { fallbackColor: n, disableFadeIn: l })
        : (0, r.jsx)("img", { src: s, alt: "", className: v()(nb._e, { [nb.cG]: l }) });
}
function nB(e) {
    let { fallbackColor: t, disableFadeIn: n } = e;
    return (0, r.jsx)("div", { className: v()(nb._e, { [nb.cG]: n }), style: { backgroundColor: t } });
}
function nF(e) {
    let { application: t, sectionName: n, resultsPosition: l, query: i, installOnDemand: s, location: a } = e,
        { pushHistory: r } = (0, h.uM)(),
        { friends: c } = (function (e) {
            let t = (0, nx.s)(e.id),
                n = (0, A.cf)([eG.default, nN.A], () => {
                    let e = {};
                    for (let n of t.values()) {
                        let t = eG.default.getUser(n.author_id),
                            l = nN.A.isFriend(n.author_id);
                        null != t && l && (e[t.id] = n.id);
                    }
                    return e;
                }),
                [l, i] = o.useState([]);
            return (
                o.useEffect(() => {
                    let e = eE().sortBy(Object.entries(n), (e) => {
                        let [t, n] = e;
                        return -t7.default.extractTimestamp(n);
                    });
                    i(
                        eE()
                            .map(e, (e) => {
                                let [t, n] = e;
                                return eG.default.getUser(t);
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
                (e.stopPropagation(),
                    (0, u.zV)(es.HAw.APPLICATION_COMMAND_SECTION_SELECTED, {
                        application_id: t.id,
                        section_name: n,
                        search_results_position: l,
                        source: p.A.entrypoint(),
                        promotional_label: (0, I.Ii)(t),
                        location: a,
                        query: i,
                        num_friends_who_play: c.length,
                    }),
                    r({ type: h.Wy.APPLICATION, application: t, installOnDemand: s, sectionName: n }));
            },
            [t, s, a, r, i, l, n, c],
        ),
    };
}
function nG(e) {
    let { onClickAppCard: t } = nF(e);
    return (0, r.jsx)(nO, { ...e, onClick: t });
}
function n$(e) {
    let {
        context: t,
        application: n,
        location: l,
        sectionName: i,
        isOneClickCTA: s,
        fetchesApplication: a = !0,
        ...c
    } = e;
    if (!(0, I.$B)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
    let d = o.useId(),
        [u, m, p] = (0, A.yK)([nf.Ay, n_.A], () => {
            let e = n_.A.getMainFrame();
            return [
                nf.Ay.isLaunchingActivity(),
                nf.Ay.getLaunchState(n.id, "channel" === t.type ? t.channel.id : void 0),
                e?.state === "loading" && e.applicationId === n.id,
            ];
        }),
        h = (null != m && m.isLaunching && m.componentId === d) || p,
        {
            onActivityItemSelected: f,
            activityAction: x,
            buttonVariant: N,
            buttonText: E,
        } = (0, q.dn)({
            context: t,
            application: n,
            location: l,
            sectionName: i,
            launchingComponentId: d,
            fetchesApplication: a,
        });
    return x === tf.o6.START || x === tf.o6.JOIN
        ? s
            ? (0, r.jsx)(nO, {
                  ...c,
                  sectionName: i,
                  application: n,
                  onClick: f,
                  disabled: u || p,
                  enableVideoBanner: !h,
                  children: h ? (0, r.jsx)(nh.y, { type: nh.y.Type.PULSING_ELLIPSIS, className: nb.u1 }) : null,
              })
            : (0, r.jsx)(nG, { ...c, context: t, sectionName: i, application: n, location: l })
        : (0, r.jsx)(nO, {
              ...c,
              sectionName: i,
              application: n,
              onClick: (e) => {
                  e.stopPropagation();
              },
              imageStyle: nb.TO,
              enableVideoBanner: !1,
              disabled: !0,
              children: (0, r.jsx)("div", {
                  className: nb.BC,
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
function nz(e) {
    let { look: t = nR.LARGE_BANNER } = e,
        n = (0, A.bG)([k.Ay], () => k.Ay.useReducedMotion),
        { styleLarge: l, styleSmall: i } = o.useMemo(
            () => ({
                styleLarge: { width: `${10 + 50 * Math.random()}%` },
                styleSmall: { width: `${30 + 60 * Math.random()}%` },
            }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: v()(er.kL, er.NX, { [er.cb]: n, [er.uS]: t !== nR.ROW, [er.qd]: t === nR.ROW }),
        children: [
            (0, r.jsx)("div", {
                className: v()(er._e, { [er.i2]: t === nR.MEDIUM_BANNER, [er.ir]: t === nR.LARGE_BANNER }),
            }),
            (0, r.jsxs)("div", {
                className: v()(er.TD, { [er.Ne]: t === nR.ROW }),
                children: [
                    (0, r.jsx)("div", { className: v()(er.Pz, { [er.Lu]: t === nR.ROW }) }),
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
                    t === nR.ROW && (0, r.jsx)("div", { className: er.ek }),
                ],
            }),
        ],
    });
}
var nX = n(902527),
    nY = n(765178),
    nK = n(889970);
function nq(e) {
    let { searchQuery: t, textContent: n, type: l } = e;
    return (
        (0, q.Ch)(l, t),
        o.useEffect(() => {
            nY.O.announce(n, "polite");
        }, [n]),
        (0, r.jsx)("div", {
            className: nK.y,
            children: (0, r.jsx)(T.E, { variant: "text-md/medium", color: "text-muted", children: n }),
        })
    );
}
var nZ = n(64523),
    nQ = (((a = nQ || {})[(a.VIEW_MORE = 0)] = "VIEW_MORE"), (a[(a.VIEW_LESS = 1)] = "VIEW_LESS"), a);
function nJ(e) {
    let { title: t, buttonType: n, onClickViewButton: l } = e;
    return (0, r.jsxs)("div", {
        className: nZ.wx,
        children: [
            (0, r.jsx)(T.E, { variant: "text-md/medium", color: "text-strong", children: t }),
            null != n &&
                null != l &&
                (0, r.jsx)(b.D, {
                    className: nZ.Vc,
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
((nJ.buttonTypes = nQ),
    (nJ.Loading = function () {
        let e = o.useMemo(() => ({ width: `${10 + 20 * Math.random()}%` }), []);
        return (0, r.jsx)("div", {
            className: nZ.uH,
            style: e,
            children: (0, r.jsx)(T.E, {
                className: nZ.R,
                variant: "text-md/medium",
                color: "text-strong",
                children: "_",
            }),
        });
    }));
var n0 = n(984516),
    n1 = n(935573),
    n2 = n(651753),
    n8 = n(485845),
    n3 = n(994369),
    n7 = n(240591),
    n5 = n(46477);
function n9(e, t) {
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
function n6(e, t) {
    let n = t5.A.getScoreWithoutLoadingLatest(e.id);
    return t5.A.getScoreWithoutLoadingLatest(t.id) - n;
}
function n4(e, t) {
    let n = (0, I.lq)(e),
        l = (0, I.lq)(t);
    return (0, g.RF)(n, l);
}
function le(e, t) {
    return (0, g.RF)(e.displayName, t.displayName);
}
n(827669);
var lt = n(562708),
    ln = n(139286),
    ll = n(520117);
function li(e) {
    let { applicationId: t, commandId: n, searchResultsPosition: l, query: i } = e,
        s = (0, A.bG)([p.A], () => p.A.entrypoint());
    return {
        trackSearchResultsItemImpressionRef: (0, ll.A)({
            onVisible: function () {
                (0, ln.x)({
                    type: lt.ImpressionTypes.VIEW,
                    name: lt.ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM,
                    properties: { application_id: t, command_id: n, search_results_position: l, query: i, source: s },
                });
            },
            threshold: 1,
        }),
    };
}
var ls = n(516029);
function la(e) {
    let { command: t, application: n, onClick: l, query: i, searchResultsPosition: s } = e,
        a = o.useCallback(
            (e) => {
                if ((0, I.$B)(n)) {
                    let t = n instanceof eB.Ay ? n : eB.Ay.createFromServer(n);
                    (0, eY.jA)(e, (e) => (0, r.jsx)(eQ, { application: t, ...e }));
                }
            },
            [n],
        ),
        { iconURL: c, name: d, description: u } = o.useMemo(() => (0, I.X2)(n, { fakeAppIconURL: tH }), [n]),
        m = o.useMemo(() => {
            let e = t?.displayDescription ?? u;
            return null == e ? null : (0, q.SD)(e, void 0);
        }, [u, t?.displayDescription]),
        { trackSearchResultsItemImpressionRef: p } = li({
            applicationId: n.id,
            commandId: t?.id,
            query: i,
            searchResultsPosition: s,
        });
    return (0, r.jsx)(b.D, {
        className: ls.vk,
        innerRef: (e) => {
            p.current = e;
        },
        onClick: l,
        onContextMenu: a,
        children: (0, r.jsxs)(L.M, {
            className: ls.ao,
            children: [
                (0, r.jsx)(j.A, { src: c, className: ls.Kk, "aria-hidden": !0, rendersPlaceholder: !0 }),
                (0, r.jsxs)("div", {
                    className: ls.Jn,
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
                          className: ls.Pn,
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: d,
                      })
                    : null,
                (0, r.jsx)("div", { className: ls.V1 }),
            ],
        }),
    });
}
var lr = n(863561);
function lo() {
    let e = (0, A.bG)([k.Ay], () => k.Ay.useReducedMotion),
        { styleLarge: t, styleSmall: n } = o.useMemo(
            () => ({
                styleLarge: { width: `${10 + 50 * Math.random()}%` },
                styleSmall: { width: `${30 + 60 * Math.random()}%` },
            }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: v()(lr.kL, { [lr.cb]: e }),
        children: [
            (0, r.jsx)("div", { className: lr.Pz }),
            (0, r.jsxs)("div", {
                className: lr.FS,
                children: [
                    (0, r.jsx)("div", {
                        className: lr.jC,
                        style: t,
                        children: (0, r.jsx)(O.D, {
                            className: lr.R,
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            children: "_",
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: lr.jC,
                        style: n,
                        children: (0, r.jsx)(T.E, {
                            className: lr.R,
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: "_",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: lr.V1 }),
        ],
    });
}
var lc = n(899118);
let ld = Array(6)
        .fill(0)
        .map((e, t) => t),
    lu = [, , ,].fill(0).map((e, t) => t),
    lm = [, , , ,].fill(0).map((e, t) => t);
function lp(e) {
    return (0, r.jsx)(lh, { ...e });
}
function lh(e) {
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
                            (r.push(...l),
                                l.forEach((e) => {
                                    null != n.descriptor && (o[e.id] = n.descriptor);
                                }));
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
                        c = (0, n7.MW)(r, [M.kc.CHAT]).hasBaseAccessPermissions,
                        d = (0, g.SD)(t, c, i),
                        u = (0, g.A4)(c, i),
                        m = o.useCallback(
                            (e) => {
                                let t = e.descriptor.application;
                                return (
                                    null != t &&
                                    (!!(s && (0, I.Z$)(t)) ||
                                        (null != t && a && !(0, I.Z$)(t) && (!n || Object.keys(e.commands).length > 0)))
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
                        a && l && p.push(I.N3),
                        { apps: p, loading: d?.fetchState.fetching === !0 || u?.fetchState.fetching === !0 }
                    );
                })({
                    context: t,
                    onlyWithCommands: !0,
                    includeBuiltIn: !0,
                    includeEmbeddedApps: r,
                    includeNonEmbeddedApps: a,
                }),
                p = (0, tY.A)({ guildId: "channel" === t.type ? t.channel.guild_id : null }),
                h = o.useMemo(() => {
                    var e, i, a, r, o, d, u;
                    let m, p, h, A, f;
                    if (!s) return [];
                    return n9(c, {
                        limit: l,
                        filterPredicates: [
                            ((m = (0, n7.Bh)("channel" === t.type ? t.channel : void 0, [M.kc.CHAT])),
                            (p = {}),
                            (e) => {
                                let { context: n, userId: l, roleIds: i, isImpersonating: s } = m;
                                if (!(e.applicationId in p)) {
                                    let {
                                            descriptor: a,
                                            isGuildInstalled: r,
                                            isUserInstalled: o,
                                        } = (0, g.Sx)(t, e.applicationId),
                                        c = n?.guild_id != null ? n5.we(a?.permissions, n.guild_id, l, i, s) : null,
                                        d = n?.guild_id != null ? n5._W(a?.permissions, n, n.guild_id) : null;
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
                                    n5.zl(e, m, {
                                        applicationAllowedForUser: o,
                                        applicationAllowedForChannel: r,
                                        commandBotId: a?.botId,
                                        isGuildInstalled: c,
                                        isUserInstalled: d,
                                    }) === n5.CA.ALLOWED
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
                                let n = z.Ay.getScoreWithoutLoadingLatest(u, e);
                                return z.Ay.getScoreWithoutLoadingLatest(u, t) - n;
                            }),
                            le,
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
                        (u.push(...m),
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
                            ));
                    } else a && (u = m);
                    return n9(u, {
                        limit: i,
                        filterPredicates: [
                            ((d = (0, n7.Bh)("channel" === t.type ? t.channel : void 0, [
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
                                    u = n?.guild_id != null ? n5.we(a?.permissions, n.guild_id, l, i, s) : null,
                                    m = n?.guild_id != null ? n5._W(a?.permissions, n, n.guild_id) : null;
                                return (
                                    null == r ||
                                    !(r.length > 0) ||
                                    r.some(
                                        (e) =>
                                            n5.zl(e, d, {
                                                applicationAllowedForUser: u,
                                                applicationAllowedForChannel: m,
                                                commandBotId: a?.botId,
                                                isGuildInstalled: o,
                                                isUserInstalled: c,
                                            }) === n5.CA.ALLOWED,
                                    )
                                );
                            }),
                        ],
                        bucketPredicates: [
                            ((l = e = n), (e) => (0, I.lq)(e).toLocaleLowerCase().startsWith(l.toLocaleLowerCase())),
                            ((s = e), (e) => (0, I.lq)(e).toLocaleLowerCase().includes(s.toLocaleLowerCase())),
                            ((o = e),
                            (e) => {
                                let t = (0, I.u8)(e)?.toLocaleLowerCase();
                                return t?.startsWith(o.toLocaleLowerCase()) ?? !1;
                            }),
                            ((c = e),
                            (e) => {
                                let t = (0, I.u8)(e)?.toLocaleLowerCase();
                                return t?.includes(c.toLocaleLowerCase()) ?? !1;
                            }),
                        ],
                        sortComparers: [n6, n4],
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
                    [n2.A],
                    () => ({
                        fetchState: n2.A.getFetchState({
                            query: n,
                            guildId: r,
                            page: c,
                            integrationType: n8.b.USER_INSTALL,
                            minUserInstallCommandCount: 1,
                            excludeAppsWithCustomInstallUrl: !0,
                            excludeNonEmbeddedApps: a,
                            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                            source: n3.V.APP_LAUNCHER,
                        }),
                        totalPages:
                            n2.A.getSearchResults({
                                query: n,
                                guildId: r,
                                page: c,
                                integrationType: n8.b.USER_INSTALL,
                                minUserInstallCommandCount: 1,
                                excludeAppsWithCustomInstallUrl: !0,
                                excludeNonEmbeddedApps: a,
                                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                source: n3.V.APP_LAUNCHER,
                            })?.totalPages ?? 0,
                    }),
                    [n, r, c, a],
                ),
                h = o.useMemo(
                    () =>
                        Array.from(
                            { length: m === n2.e.FETCHED || m === n2.e.ERROR ? c : c - 1 },
                            (e, t) =>
                                n2.A.getSearchResults({
                                    query: n,
                                    guildId: r,
                                    page: t + 1,
                                    integrationType: n8.b.USER_INSTALL,
                                    minUserInstallCommandCount: 1,
                                    excludeAppsWithCustomInstallUrl: !0,
                                    excludeNonEmbeddedApps: a,
                                    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                    source: n3.V.APP_LAUNCHER,
                                })?.results ?? [],
                        ),
                    [m, r, n, c, a],
                ),
                f = o.useCallback(() => {
                    let e = h.length;
                    m === n2.e.FETCHED &&
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
                                integrationType: n8.b.USER_INSTALL,
                                minUserInstallCommandCount: 1,
                                excludeAppsWithCustomInstallUrl: !0,
                                excludeNonEmbeddedApps: a,
                                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                source: n3.V.APP_LAUNCHER,
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
        i && h === n2.e.FETCHED && x();
    }, [x, h, i]);
    let N = null == h || h === n2.e.FETCHING,
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
                        e.type === n1.j.CONNECTION || t.has(e.data.id)
                            ? null
                            : { application: e.data, installOnDemand: !0 },
                    ),
                ),
            ];
        }, [f, p]),
        C = E.length > 0,
        j = d && !C && !N;
    return (o.useEffect(() => {
        if (c) return;
        let e = u.length + E.length;
        if (e > 0) {
            let t = et.intl.formatToPlainString(et.t.ZGVL3g, { count: e });
            nY.O.announce(t, "polite");
        }
    }, [n, u.length, E.length, c]),
    c)
        ? (0, r.jsx)(lE, {})
        : j
          ? (0, r.jsx)(nq, {
                type: _.wg.SEARCH_EMPTY,
                searchQuery: n,
                textContent: l === _.s4.TEXT ? et.intl.string(et.t.LSNOYf) : et.intl.string(et.t.Clu7Qh),
            })
          : (0, r.jsxs)("div", {
                children: [
                    m && (0, r.jsx)(lA, { context: t, commandResults: u, query: n }),
                    (C || N) &&
                        (0, r.jsx)(lx, {
                            context: t,
                            applicationResults: E,
                            includePlaceholder: N,
                            query: n,
                            searchesBots: a,
                        }),
                ],
            });
}
function lA(e) {
    let { context: t, commandResults: n, query: l } = e,
        i = n.length > 4,
        s = o.useMemo(() => (i ? n.slice(0, 4) : n), [n, i]),
        [a, c] = o.useState(!1),
        d = (0, nA.Ay)(a) ?? a,
        m = o.useCallback(() => c((e) => !e), []),
        h = ((0, nA.Ay)(l) ?? l)[0] !== l[0],
        A = a && !h;
    o.useLayoutEffect(() => c(!1), [h]);
    let {
        ref: f,
        isTransitioning: x,
        onTransitionEnd: N,
    } = (0, th.A)({ key: l, isExpanded: A, durationMs: 200, maxAnimationHeight: 680 });
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
        g = A ? nJ.buttonTypes.VIEW_LESS : nJ.buttonTypes.VIEW_MORE,
        C = E ? n : s;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(nJ, { title: et.intl.string(et.t["0hKkS+"]), buttonType: g, onClickViewButton: i ? m : void 0 }),
            (0, r.jsx)("div", {
                className: lc._,
                ref: f,
                onTransitionEnd: N,
                children: C.map((e, n) => {
                    let { command: i, application: s, section: a } = e;
                    return (0, r.jsx)(
                        la,
                        {
                            command: i,
                            application: s,
                            query: l,
                            searchResultsPosition: n,
                            onClick: () => {
                                let e = p.A.entrypoint();
                                (B.k(_.Se.DISMISSED),
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
                                        V._.dispatch(es.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: t.channel.id })));
                            },
                        },
                        i.id,
                    );
                }),
            }),
        ],
    });
}
function lf(e) {
    let { trackSearchResultsItemImpressionRef: t } = li({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
    });
    return (0, r.jsx)("div", {
        className: lc.Gn,
        ref: (e) => {
            t.current = e;
        },
        children: (0, r.jsx)(nG, { ...e, tracksImpression: !1, enableVideoBanner: !0 }),
    });
}
function lx(e) {
    let { context: t, applicationResults: n, includePlaceholder: l, query: i, searchesBots: s } = e;
    return s
        ? (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(nJ, { title: et.intl.string(et.t.PHjkRE) }),
                  (0, r.jsxs)("div", {
                      className: lc._,
                      children: [
                          n.map((e, n) => {
                              let { application: l, installOnDemand: s } = e;
                              return (0, r.jsx)(
                                  lN,
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
                          l && lu.map((e) => (0, r.jsx)(lo, {}, e)),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(nJ, { title: et.intl.string(et.t.shUONg) }),
                  (0, r.jsxs)("div", {
                      className: lc.H$,
                      children: [
                          n.map((e, n) => {
                              let { application: l, installOnDemand: s } = e;
                              return (0, r.jsx)(
                                  lf,
                                  {
                                      context: t,
                                      application: l,
                                      look: nR.LARGE_BANNER,
                                      location: D.Oh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: _.yK.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: s,
                                      query: i,
                                  },
                                  l.id,
                              );
                          }),
                          l && lm.map((e) => (0, r.jsx)(nz, { look: nR.LARGE_BANNER }, e)),
                      ],
                  }),
              ],
          });
}
function lN(e) {
    let { onClickAppCard: t } = nF(e);
    return (0, r.jsx)(la, {
        application: e.application,
        onClick: t,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
    });
}
function lE() {
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(nJ, { title: et.intl.string(et.t["0hKkS+"]) }),
            (0, r.jsx)("div", { className: lc._, children: ld.map((e) => (0, r.jsx)(lo, {}, e)) }),
            (0, r.jsx)(nJ, { title: et.intl.string(et.t.PHjkRE) }),
            (0, r.jsx)("div", { className: lc._, children: lu.map((e) => (0, r.jsx)(lo, {}, e)) }),
        ],
    });
}
var lg = n(169495);
let lC = [],
    l_ = [, , , ,].fill(0).map((e, t) => t),
    lI = [
        { cards: [, , , ,].fill(0).map((e, t) => t), look: nR.MEDIUM_BANNER },
        { cards: [, , , ,].fill(0).map((e, t) => t), look: nR.ROW },
        { cards: [, , , ,].fill(0).map((e, t) => t), look: nR.ROW },
    ],
    lj = tF.K.APP_LAUNCHER_IN_TEXT;
function ly(e) {
    let { context: t, entrypoint: n, searchQuery: l, setSearchQuery: i, setScroller: s, isScrollCloseToBottom: a } = e,
        c = (0, A.bG)([tt.A], () => tt.A.getIsEnabled(), []),
        d = n === _.s4.TEXT && "channel" === t.type && null != t.channel && !t.channel.isPrivate(),
        u = (0, I.sw)(n),
        m = !(0, I.sw)(n),
        p = n === _.s4.TEXT,
        [h, x] = lO(!0),
        [N, E] = lO(d),
        [g, C] = lO(u),
        [j, y] = lO(m),
        v = h && N && g && j,
        P = (u || d) && !v,
        S = m && c;
    (o.useEffect(() => {
        let e = "channel" === t.type ? t.channel?.guild_id : void 0;
        (0, tX.LV)({ guildId: e, force: !0 });
    }, [t]),
        o.useEffect(() => {
            n === _.s4.VOICE && tX.LK();
        }, [n]));
    let T = l.length > 0;
    return (0, r.jsxs)("div", {
        className: lg.kL,
        children: [
            S ? (0, r.jsx)(lv, {}) : null,
            (0, r.jsx)(lP, {
                searchQuery: l,
                setSearchQuery: i,
                placeholder: p ? et.intl.string(et.t.ziyFv2) : et.intl.string(et.t["pw+r5b"]),
            }),
            (0, r.jsx)(f.Ip, {
                ref: s,
                className: lg.Ph,
                fade: !0,
                children: T
                    ? (0, r.jsx)(lp, { context: t, query: l, entrypoint: n, isScrollCloseToBottom: a })
                    : (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(lS, { context: t, entrypoint: n, onEmptyState: x }),
                              d && (0, r.jsx)(lb, { context: t, onEmptyState: E }),
                              u && (0, r.jsx)(lL, { context: t, entrypoint: n, onEmptyState: C }),
                              m && (0, r.jsx)(lT, { context: t, onEmptyState: y }),
                              v &&
                                  (0, r.jsx)(nq, {
                                      type: _.wg.HOME_EMPTY,
                                      textContent:
                                          n === _.s4.TEXT ? et.intl.string(et.t.iKZctW) : et.intl.string(et.t.RL7Ncg),
                                  }),
                              P && (0, r.jsx)(n0.A, {}),
                          ],
                      }),
            }),
        ],
    });
}
function lv() {
    return (0, r.jsxs)("div", {
        className: lg.G,
        children: [
            (0, r.jsx)(T.E, { className: lg.TR, variant: "text-sm/normal", children: et.intl.string(et.t.tZ3FNs) }),
            (0, r.jsx)(to, { hideSearch: !0 }),
        ],
    });
}
function lP(e) {
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
            (a(!0),
                (0, u.zV)(es.HAw.APP_LAUNCHER_SEARCH_FOCUSED, {
                    source: p.A.entrypoint(),
                    location: D.Oh.APP_LAUNCHER_HOME,
                }));
        }, []),
        h = o.useCallback(() => {
            a(!1);
        }, []),
        A = o.useCallback(
            (e) => {
                (s || m(), n(e), c(e));
            },
            [s, n, m, c],
        );
    return (
        o.useEffect(() => {
            let e = i.current;
            if (null != e)
                return (
                    e.addEventListener("click", t),
                    () => {
                        e.removeEventListener("click", t);
                    }
                );
            function t() {
                s || m();
            }
        }, [s, m]),
        (0, r.jsx)("div", {
            className: lg.PP,
            children: (0, r.jsx)(ts.I, {
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
function lS(e) {
    let { context: t, entrypoint: n, onEmptyState: l } = e,
        i = n === _.s4.VOICE,
        { frecentApps: s, loading: a } = (function (e) {
            let { context: t, onlyActivityApps: n, allowCommandFetch: l, includeAuthorizedAppsAndFetch: i } = e,
                { sectionDescriptors: s, loading: a } = H.cu({ context: t, filters: nr, options: no, allowFetch: l });
            return {
                loading: a,
                frecentApps: (function (e) {
                    let {
                            sectionDescriptors: t,
                            context: n,
                            onlyActivityApps: l,
                            includeAuthorizedAppsAndFetch: i,
                        } = e,
                        s = (0, A.bG)([nt.default], () => nt.default.getFetchState());
                    o.useEffect(() => {
                        i && s === nt.FetchState.NOT_FETCHED && ne.A.fetch();
                    }, [i, s]);
                    let a = (0, A.yK)([nt.default], () =>
                            i
                                ? nt.default
                                      .getNewestTokens()
                                      .filter((e) => e.scopes.includes(t2.F.APPLICATIONS_COMMANDS))
                                : [],
                        ),
                        r = t.filter((e) => e.id !== ea.Ik.FRECENCY && e.id !== ea.Ik.BUILT_IN),
                        c = "contextless" === n.type,
                        d = o.useMemo(() => {
                            let e = [];
                            return (c && e.push(na.gq), e);
                        }, [c]),
                        u = t6(r, a),
                        m = (0, A.bG)([eG.default], () => eG.default.getCurrentUser()?.nsfwAllowed);
                    return o.useMemo(() => {
                        function e(e) {
                            return !(!1 === m && (0, t4.A)(e.id));
                        }
                        return l
                            ? u
                                  .filter(
                                      (e) =>
                                          null != e.application &&
                                          (0, I.Z$)(e.application) &&
                                          null != (0, tc.eI)(n, e.id),
                                  )
                                  .filter((e) => !d.includes(e.id))
                                  .filter(e)
                            : u.filter((e) => !d.includes(e.id)).filter(e);
                    }, [l, u, n, d, m]);
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
    let { items: p, handleViewMore: h } = lM({
        title: m,
        look: n === _.s4.VOICE ? nR.LARGE_BANNER : nR.ROW,
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
                  (0, r.jsx)(nJ, { title: d, buttonType: nJ.buttonTypes.VIEW_MORE, onClickViewButton: h }),
                  (0, r.jsx)("div", {
                      className: lg._,
                      children: (0, r.jsx)("div", {
                          className: lg.Ye,
                          children: p.map((e, n) => {
                              let { application: l } = e;
                              return i
                                  ? (0, r.jsx)(
                                        n$,
                                        {
                                            context: t,
                                            application: l,
                                            look: nR.ICON,
                                            location: _.W8.HOME,
                                            sectionName: _.yK.RECENT_APPS,
                                            resultsPosition: n,
                                            isOneClickCTA: !0,
                                            fetchesApplication: !1,
                                        },
                                        l.id,
                                    )
                                  : (0, r.jsx)(
                                        nG,
                                        {
                                            context: t,
                                            application: l,
                                            look: nR.ICON,
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
function lT(e) {
    let { context: t, onEmptyState: n } = e;
    tq();
    let l = (0, tY.A)({ guildId: "channel" === t.type ? t.channel?.getGuildId() : void 0 }),
        i = nR.LARGE_BANNER,
        { trackSectionImpressionRef: s } = (0, nX.A)({
            sectionName: _.yK.ACTIVITIES,
            numItems: l.length,
            numVisibleItems: l.length,
        }),
        a = nd(),
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
                      children: (0, r.jsx)(nJ, { title: et.intl.string(et.t.shUONg) }),
                  }),
                  (0, r.jsx)("div", {
                      className: lg.a2,
                      children: l.map((e, n) => {
                          let { application: l } = e;
                          return (0, r.jsx)(
                              n$,
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
function lb(e) {
    let { context: t, onEmptyState: n } = e,
        l = _.yK.APPS_IN_THIS_SERVER,
        { appsInThisServer: i, isLoading: s } = (function (e) {
            let { context: t } = e,
                n = "channel" === t.type ? t.channel : void 0,
                l = (0, g.ON)(n?.guild_id, !0),
                i = (0, A.bG)([eG.default], () => eG.default.getCurrentUser()?.nsfwAllowed),
                { commandsByActiveSection: s, loading: a } = H.cu({
                    context: t,
                    filters: { commandTypes: [M.kc.CHAT, M.kc.PRIMARY_ENTRY_POINT] },
                    options: { placeholderCount: 0, limit: ea.Hi, includeFrecency: !0 },
                    allowFetch: !0,
                }),
                r = o.useMemo(
                    () =>
                        s.reduce((e, t) => {
                            let { section: n, data: l } = t;
                            return (l.length > 0 && e.add(n.id), e);
                        }, new Set()),
                    [s],
                ),
                c = t6(
                    o.useMemo(
                        () =>
                            Object.values(l.result?.sections ?? {})
                                .map((e) => {
                                    let { descriptor: t } = e;
                                    return t;
                                })
                                .filter((e) => !(e.id in nc.gZ) && r.has(e.id)),
                        [l.result?.sections, r],
                    ),
                );
            return {
                appsInThisServer: o.useMemo(
                    () =>
                        eE()
                            .compact(
                                c.map((e) => {
                                    let { application: t } = e;
                                    return t;
                                }),
                            )
                            .filter((e) => !(!1 === i && (0, t4.A)(e.id)))
                            .map((e) => ({ application: e })),
                    [i, c],
                ),
                isLoading: l.fetchState.fetching || a,
            };
        })({ context: t }),
        { items: a, handleViewMore: c } = lM({
            title: et.intl.string(et.t.KfkuGc),
            look: nR.ROW,
            items: i,
            limit: 4,
            sectionName: l,
        }),
        { trackSectionImpressionRef: d } = (0, nX.A)({ sectionName: l, numItems: i.length, numVisibleItems: a.length }),
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
                      children: (0, r.jsx)(nJ, {
                          title: et.intl.string(et.t.KfkuGc),
                          buttonType: nJ.buttonTypes.VIEW_MORE,
                          onClickViewButton: c,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: lg.l2,
                      children: s
                          ? l_.map((e) => (0, r.jsx)(nz, { look: nR.ROW }, e))
                          : a.map((e, n) => {
                                let { application: i } = e;
                                return null != i
                                    ? (0, r.jsx)(
                                          nG,
                                          {
                                              context: t,
                                              application: i,
                                              look: nR.ROW,
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
function lL(e) {
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
                    ((t = (0, A.bG)([t0.default], () => t0.default.onlyShowPreviewAppCollections)),
                    (n = tZ.getConfig({ location: "App Launcher Home (Web)" }).enabled),
                    t ? tW.W.PREVIEW : n ? tW.W.NON_STAFF_PREVIEW : tW.W.ACTIVE);
            o.useEffect(() => {
                (0, X.An)({ surface: lj, activeState: s });
            }, [s]);
            let { sectionDescriptors: a } = H.cu({
                    context: l,
                    filters: { commandTypes: [M.kc.CHAT] },
                    options: { placeholderCount: 0, limit: ea.Hi, includeFrecency: !0 },
                    allowFetch: !0,
                }),
                r = o.useCallback((e) => null == a.find((t) => t.id === e.id), [a]),
                c = (0, A.bG)([tQ.A], () => tQ.A.getFetchState({ surface: lj, activeState: s })),
                d = (0, A.bG)([tQ.A], () => tQ.A.getCollections({ surface: lj, activeState: s })),
                u = i === _.s4.VOICE;
            return {
                fetchState: c,
                recommendationsSections: o.useMemo(() => (u ? (0, I.hX)(d) : d), [d, u]),
                isInstallOnDemand: r,
            };
        })({ context: t, entrypoint: n }),
        c = (function (e) {
            let { context: t, recommendationsSections: n } = e;
            tq();
            let l = (0, tY.A)({ guildId: "channel" === t.type ? t.channel?.getGuildId() : void 0 });
            return o.useMemo(() => {
                if (!n.some((e) => (0, tz.Lt)(e.flags, tV.APPENDS_REMAINING_ACTIVITIES))) return lC;
                let e = new Set();
                return (
                    n.forEach((t) => {
                        t.application_directory_collection_items.forEach((t) => {
                            t.type === tG.L.APPLICATION && e.add(t.application.id);
                        });
                    }),
                    l.filter((t) => !e.has(t.application.id))
                );
            }, [n, l]);
        })({ context: t, recommendationsSections: s }),
        d = i === tQ.e.FETCHING,
        u = !d && 0 === s.length;
    return (o.useEffect(() => {
        l(u);
    }, [u, l]),
    u)
        ? null
        : d
          ? lI.map((e, t) => {
                let { cards: n, look: l } = e;
                return (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsx)(nJ.Loading, {}),
                            (0, r.jsx)("div", {
                                className: l === nR.ROW ? lg.l2 : lg.a2,
                                children: n.map((e) => (0, r.jsx)(nz, { look: l }, e)),
                            }),
                        ],
                    },
                    t,
                );
            })
          : s.map((e, n) =>
                (0, r.jsx)(
                    lR,
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
function lR(e) {
    let t,
        n,
        { recommendationsSection: l, remainingActivities: i, isInstallOnDemand: s, position: a, context: c } = e,
        d = l.title;
    switch (l.type) {
        case t$.Y.BANNER_CARDS:
            t = nR.LARGE_BANNER;
            break;
        case t$.Y.SMALL_BANNER_CARDS:
            t = nR.MEDIUM_BANNER;
            break;
        default:
            t = nR.ROW;
    }
    let u = o.useMemo(() => {
            let e = l.application_directory_collection_items
                .map((e) => {
                    if (e.type === tG.L.APPLICATION)
                        return {
                            collectionItemId: e.id,
                            collectionItemImageHash: e.image_hash,
                            showsPromoted: (0, tz.Lt)(e.flags, tB.PROMOTED),
                            application: e.application,
                            installOnDemand: s(e.application),
                        };
                })
                .filter(t1.Vq);
            return (
                (0, tz.Lt)(l.flags, tV.APPENDS_REMAINING_ACTIVITIES) &&
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
        case t$.Y.BANNER_CARDS:
        case t$.Y.SMALL_BANNER_CARDS:
            n = 6;
            break;
        case t$.Y.EXPANDABLE_LIST:
        default:
            n = 4;
    }
    let { items: p, handleViewMore: h } = lM({
            title: d,
            look: t,
            items: u,
            limit: n,
            sectionName: m,
            sectionOverallPosition: a,
        }),
        { trackSectionImpressionRef: A } = (0, nX.A)({ sectionName: m, numItems: u.length, numVisibleItems: p.length }),
        f = l.type !== t$.Y.SMALL_BANNER_CARDS;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)("div", {
                ref: (e) => {
                    A.current = e;
                },
                children: (0, r.jsx)(nJ, {
                    title: l.title,
                    buttonType: nJ.buttonTypes.VIEW_MORE,
                    onClickViewButton: h,
                }),
            }),
            (0, r.jsx)("div", {
                className: t === nR.ROW ? lg.l2 : lg.a2,
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
                        null != i && null != s && (l = (0, tJ.DH)({ itemId: i, hash: s, containerWidth: 500 })),
                        (0, r.jsx)(
                            nG,
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
function lO(e) {
    let [t, n] = o.useState(!e);
    return [
        t,
        o.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            n(e);
        }, []),
    ];
}
function lM(e) {
    let { title: t, look: n, items: l, limit: i, sectionName: s, sectionOverallPosition: a } = e,
        { pushHistory: r } = (0, h.uM)();
    return o.useMemo(
        () =>
            l.length <= i
                ? { items: l, handleViewMore: void 0 }
                : {
                      items: l.slice(0, i),
                      handleViewMore: () => {
                          ((0, u.zV)(es.HAw.APP_LAUNCHER_SECTION_VIEW_MORE, {
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
                              }));
                      },
                  },
        [l, i, s, r, t, n, a],
    );
}
var lk = n(359848);
function lU(e) {
    let { context: t, entrypoint: n, title: l, look: i, items: s, sectionName: a, sectionOverallPosition: c } = e,
        d = nd(),
        u = o.useMemo(() => (n === _.s4.TEXT ? nG : n$), [n]);
    return (0, r.jsxs)("section", {
        className: lk.kL,
        "aria-label": et.intl.formatToPlainString(et.t.iobNIB, { sectionTitle: l }),
        children: [
            (0, r.jsxs)("div", {
                className: lk.wx,
                children: [
                    (0, r.jsx)(eS, { className: lk.Gv }),
                    (0, r.jsx)(O.D, { variant: "heading-md/medium", color: "text-strong", children: l }),
                ],
            }),
            (0, r.jsx)(f.Ip, {
                children: (0, r.jsx)("div", {
                    className: v()({ [lk.wf]: i !== nR.ROW, [lk.Ge]: i === nR.ROW }),
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
var lH = n(529777);
let lD = { width: 500, height: K.$V },
    lw = { height: K.$V },
    lW = o.memo(
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
                    className: lH.jP,
                    ref: t,
                    style: lD,
                    children: (0, r.jsx)("div", {
                        className: lH.FG,
                        children: (0, r.jsx)(m.f5, {
                            value: s,
                            children: (0, r.jsx)(lV, {
                                initHistory: i,
                                children: (0, r.jsx)(lB, { context: n, entrypoint: l }),
                            }),
                        }),
                    }),
                })
            );
        }),
    );
function lV(e) {
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
            (i((t) => (t.length <= 1 ? t : ((e = t[t.length - 1]), t.slice(0, -1)))),
                a((t) => (null == e ? t : { ...t, [e.type]: e })));
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
function lB(e) {
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
                    className: lH.xD,
                    style: lw,
                    children: (0, r.jsx)(ly, {
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
                    className: lH.xD,
                    style: lw,
                    children:
                        null != A &&
                        (0, r.jsx)(lU, {
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
                    className: lH.xD,
                    style: lw,
                    children:
                        null != f &&
                        (0, r.jsx)(tD, { context: t, application: f.application, sectionName: f.sectionName }),
                }),
            }),
        ],
    });
}
