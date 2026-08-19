"use strict";
n.d(t, {
    C: () => nv,
    Sk: () => nR,
    Zx: () => nI,
    v7: () => nT,
    L0: () => nj,
    N_: () => n_,
    MD: () => nL,
    Ay: () => nM,
    uW: () => nO,
    NO: () => nS,
    ck: () => nb,
    ml: () => nN,
    Vu: () => ny,
});
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(143236),
    o = n(284009),
    u = n.n(o),
    c = n(462180),
    d = n(607399),
    h = n(136722),
    m = n(17928),
    f = n(192308),
    p = n(259678),
    g = n(281595),
    x = n(465532),
    A = n(765671),
    E = n(775602),
    C = n(793574),
    I = n(688810),
    y = n(177640),
    S = n(989837),
    v = n(289873),
    _ = n(268218),
    N = n(750506),
    T = n(60809),
    j = n(375708),
    b = n(583224);
let R = { width: 500, height: T.$V },
    L = (0, _.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("773470"),
                n.e("547292"),
                n.e("41295"),
                n.e("440351"),
                n.e("676279"),
                n.e("545309"),
                n.e("143430"),
                n.e("348570"),
                n.e("205851"),
                n.e("602808"),
                n.e("650348"),
                n.e("397270"),
                n.e("993103"),
                n.e("834552"),
                n.e("571210"),
                n.e("27773"),
                n.e("132191"),
                n.e("88342"),
                n.e("171273"),
                n.e("311802"),
                n.e("698965"),
                n.e("37977"),
                n.e("454625"),
                n.e("371133"),
                n.e("943780"),
                n.e("280854"),
                n.e("335395"),
                n.e("235313"),
                n.e("408362"),
                n.e("76428"),
                n.e("538887"),
                n.e("252229"),
                n.e("918024"),
                n.e("678195"),
                n.e("522261"),
                n.e("341701"),
                n.e("774021"),
                n.e("583518"),
                n.e("437065"),
                n.e("322094"),
                n.e("761764"),
                n.e("915086"),
                n.e("68974"),
                n.e("556385"),
                n.e("291220"),
                n.e("211584"),
                n.e("135621"),
            ]).then(n.bind(n, 854379)),
        webpackId: 854379,
        renderLoader: () => (0, l.jsx)("div", { className: b.R4, style: R, children: (0, l.jsx)(v.y, {}) }),
    }),
    O = { height: T.$V },
    M = i.memo(function (e) {
        let { positionTargetRef: t, align: n, ...i } = e;
        return (0, l.jsx)("span", {
            style: T.sK,
            children: (0, l.jsx)(N.nE, {
                className: b.T8,
                targetRef: t,
                position: "top",
                align: n ?? "right",
                spacing: 24,
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, l.jsx)("section", {
                        className: b.V6,
                        role: "dialog",
                        style: O,
                        "aria-label": j.intl.string(j.t["3CNGLK"]),
                        children: t && (0, l.jsx)(L, { ...i }),
                    });
                },
            }),
        });
    });
var w = n(861382),
    k = n(435558),
    P = n.n(k),
    D = n(537652),
    U = n(155718),
    G = n(95561),
    V = n(659280),
    F = n(579940),
    H = n(962125),
    B = n(915089),
    W = n(850992),
    K = n(887695),
    z = n(286509),
    Z = n(721768),
    Y = n(842209),
    q = n(210978),
    $ = n(392054),
    J = n(168186),
    X = n(866665),
    Q = n(939249),
    ee = n(802019),
    et = n(649671),
    en = n(913838);
let el = [16, 8, 8, 8];
function ei(e) {
    let {
            className: t,
            channel: n,
            sections: s,
            activeCategoryIndex: a,
            filteredSectionId: o,
            onSectionClick: u,
            applicationCommandListRef: c,
        } = e,
        d = i.useRef(null),
        h = i.useCallback(
            (e, t) => {
                let n = 8;
                return s[t + 1]?.type === $.Hf.BUILT_IN && (n += 8), 32 + n;
            },
            [s],
        ),
        m = i.useCallback((e, t) => (t ? 8 * (s[e + 1]?.type !== $.Hf.BUILT_IN) : 8 * (0 !== e)), [s]),
        f = i.useCallback(
            (e, t) => {
                let i = s[t];
                if (null == i) return;
                let r = (0, et.Rg)(i),
                    c = 4 * (i.type === $.Hf.BUILT_IN),
                    d = 32 - 2 * c,
                    h = (0, l.jsx)(r, {
                        channel: n,
                        section: i,
                        isSelected: null != o ? i.id === o : a === t,
                        padding: c,
                        width: d,
                        height: d,
                        selectable: !0,
                    }),
                    m = i.type !== $.Hf.BUILT_IN && t < s.length - 1 && s[t + 1].type === $.Hf.BUILT_IN;
                return (0, l.jsxs)(
                    "div",
                    {
                        className: en.uW,
                        children: [
                            (0, l.jsx)(X.m, {
                                text: i.name,
                                position: "right",
                                asContainer: !0,
                                children: (0, l.jsx)(Q.D, {
                                    "aria-label": i.name,
                                    onClick: () => {
                                        u(i);
                                    },
                                    children: h,
                                }),
                            }),
                            m ? (0, l.jsx)("hr", { className: en.zQ }) : null,
                        ],
                    },
                    i.id,
                );
            },
            [a, n, u, s, o],
        );
    return 0 === s.length
        ? null
        : (0, l.jsx)("div", {
              className: r()(t, en.iE),
              children: (0, l.jsx)(ee.A, {
                  categoryListRef: d,
                  expressionsListRef: c,
                  store: W.LS,
                  categories: s,
                  className: en.p_,
                  renderCategoryListItem: f,
                  rowCount: s.length,
                  categoryHeight: h,
                  listPadding: el,
                  getScrollOffsetForIndex: m,
              }),
          });
}
var es = n(524007),
    er = n(73510),
    ea = n(652215),
    eo = n(785945),
    eu = n(911385);
let ec = [8, 8, 0, 8],
    ed = P().debounce(() => {
        (0, G.zV)(ea.HAw.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300),
    eh = i.forwardRef(function (e, t) {
        let { channel: n, canOnlyUseTextCommands: s } = e,
            a = i.useRef(!1),
            o = i.useRef(0),
            [u, c] = i.useState(0),
            d = i.useRef(null),
            [h, m] = i.useState(!1),
            f = W.LS.useStore((e) => e.activeCategoryIndex);
        i.useEffect(() => {
            (0, G.zV)(ea.HAw.APPLICATION_COMMAND_BROWSER_OPENED);
        }, []);
        let {
                sectionDescriptors: p,
                activeSections: g,
                commandsByActiveSection: x,
                hasMoreAfter: A,
                commands: E,
                filteredSectionId: C,
                scrollDown: I,
                filterSection: y,
            } = Y.cu({
                context: { channel: n, type: "channel" },
                filters: {
                    commandTypes: [U.kc.CHAT],
                    builtIns: s ? q.n.ONLY_TEXT : q.n.ALLOW,
                    applicationCommands: !s,
                },
                options: { placeholderCount: 7, limit: er.Hi, includeFrecency: !0 },
                allowFetch: !0,
            }),
            S = (0, K.Fk)({
                activeCategoryIndex: f,
                isScrolling: a,
                listRef: d,
                onActiveCategoryIndexChange: (e) => {
                    let t = g[e];
                    if (null != t) {
                        let e = p.findIndex((e) => e.id === t.id);
                        W.LS.setActiveCategoryIndex(e);
                    }
                },
                scrollOffset: 20,
                searchQuery: "",
            });
        function v(e) {
            let t = g.length,
                n = x.reduce((e, t) => e + t.data.length, 0) - 7 * !!A;
            A && e + 420 > 48 * t + 56 * n - 512 && I(), S(e), ed(), (o.current = e);
        }
        let _ = i.useRef(v);
        i.useEffect(() => {
            _.current = v;
        }),
            i.useEffect(() => {
                _.current(o.current);
            }, [E]);
        let N = i.useCallback((e) => (e !== g.length - 1 || A ? 16 : 0), [g.length, A]),
            T = x.map((e) => e.data.length);
        i.useEffect(() => {
            null != d.current && h && null != u && d.current.scrollRowIntoView(u);
        }, [h, u]),
            i.useLayoutEffect(() => {
                null != C && d.current?.scrollToSectionTop(0);
            }, [E, C]);
        let b = i.useCallback(
                (e) => {
                    e.id === C || e.id === er.Ik.FRECENCY ? (y(null), d.current?.scrollToSectionTop(0)) : y(e.id);
                },
                [y, C],
            ),
            R = i.useCallback(
                (e, t, l) => {
                    Z.Gf({ channelId: n.id, command: e, section: t, location: $.Oh.DISCOVERY, triggerSection: l });
                },
                [n.id],
            );
        i.useImperativeHandle(
            t,
            () => ({
                onTabOrEnter: (e) => {
                    if (null == u) return !e && (c(0), !0);
                    if (null == u) return !1;
                    let t = 0,
                        n = 0;
                    for (let e of x)
                        if (((t = n), u < (n += e.data.length))) {
                            let n = e.data[u - t],
                                l = p.find((e) => e.id === n.applicationId);
                            R(n, l, (0, J.$S)(e.section));
                            break;
                        }
                    return !0;
                },
                onMoveSelection: (e) => {
                    if (0 === E.length) return !0;
                    let t = 7 * !!A,
                        n = E.length + t,
                        l = null == u ? 0 : u + e;
                    return l >= n ? (l = n - 1) : l < 0 && (l = 0), c(l), m(!0), !0;
                },
            }),
            [E.length, x, A, p, R, u],
        );
        let L = i.useCallback(
                (e) => {
                    let t = g[e];
                    if (null == t) return null;
                    let i = (0, et.Rg)(t),
                        s = (0, l.jsx)(i, { channel: n, section: t, width: 16, height: 16, padding: 0 });
                    return (0, l.jsx)(z.A, { className: eo.Km, icon: s, children: t.name }, e);
                },
                [n, g],
            ),
            O = i.useCallback(
                (e, t) => {
                    let n = e === g.length - 1,
                        i = g[e],
                        { data: s } = x[e];
                    return (0, l.jsxs)(
                        "ul",
                        {
                            role: "group",
                            "aria-label": i.name,
                            className: r()(eo.Wy, { [eo.YD]: n }),
                            children: [
                                t,
                                0 === s.length &&
                                    (0, l.jsx)(D.A, {
                                        message: j.intl.format(j.t.WoQXT6, { applicationName: i.name }),
                                        noResultsImageURL: eu,
                                        className: eo.qK,
                                    }),
                            ],
                        },
                        e,
                    );
                },
                [g, x],
            ),
            M = i.useCallback(
                (e, t) => {
                    let i = x[t.sectionIndex],
                        s = i.data[t.sectionRowIndex],
                        r = `${i.section.id}:${s?.id ?? e}`;
                    if (
                        null == s ||
                        (i.section.id !== s.applicationId && i.section.id !== er.Ik.FRECENCY) ||
                        s.inputType === $.y$.PLACEHOLDER
                    )
                        return (0, l.jsx)(es.A, {}, r);
                    let a = p.find((e) => e.id === s.applicationId);
                    return (0, l.jsx)(
                        V.Ay.NewCommand,
                        {
                            index: e,
                            command: s,
                            channel: n,
                            className: eo.D5,
                            selected: u === e,
                            showImage: i.section.id !== s.applicationId,
                            section: a,
                            onClick: () => R(s, a, (0, J.$S)(i.section)),
                            onHover: () => {
                                c(null), m(!1);
                            },
                        },
                        r,
                    );
                },
                [n, x, R, p, u],
            ),
            w = (0, B.GV)();
        return (
            (0, F.gf)(w, !0, (0, V.aI)(u)),
            i.useEffect(
                () => () => {
                    (0, F.nQ)();
                },
                [],
            ),
            (0, l.jsxs)(V.Ay, {
                id: w,
                className: eo.x9,
                innerClassName: eo.iE,
                onMouseDown: em,
                children: [
                    (0, l.jsx)(ei, {
                        className: eo.H$,
                        channel: n,
                        sections: p,
                        filteredSectionId: C,
                        activeCategoryIndex: f,
                        onSectionClick: b,
                        applicationCommandListRef: d,
                    }),
                    (0, l.jsx)(H.A, {
                        role: "listbox",
                        className: eo.p_,
                        listPadding: ec,
                        onScroll: v,
                        renderRow: M,
                        renderSection: O,
                        renderSectionHeader: L,
                        rowCount: g.length,
                        rowCountBySection: T,
                        rowHeight: 56,
                        sectionHeaderHeight: 32,
                        sectionMarginBottom: N,
                        ref: d,
                        stickyHeaders: !0,
                    }),
                ],
            })
        );
    });
function em(e) {
    e.preventDefault();
}
var ef = n(702841),
    ep = n(305070),
    eg = n(31498),
    ex = n(598071),
    eA = n(151271),
    eE = n(442152),
    eC = n(256265),
    eI = n(336807),
    ey = n(857071),
    eS = n(135621),
    ev = n(105330),
    e_ = n(280450),
    eN = n(559908),
    eT = n(620141),
    ej = n(224964),
    eb = n(31408),
    eR = n(536283);
function eL(e) {
    let { editorHeight: t, textValue: n, channelId: l } = e,
        s = i.useRef(n),
        r = (0, ev.l)({ editorHeight: t }),
        a = (0, ej.A)(),
        o = (0, m.bG)([eN.Ay, e_.default], () => eN.Ay.isComboing(e_.default.getId(), l)),
        u = r?.left ?? 0,
        c = (r?.top ?? 0) - 16,
        d = 0 === n.length,
        h = i.useMemo(() => 0.05 > Math.random(), [d]);
    return (
        i.useEffect(() => {
            0 !== n.length && n !== s.current && o && (a.fire(u, c, h ? { sprite: eR.dR } : null), (s.current = n));
        }, [n, o, u, c, h, a]),
        null
    );
}
function eO(e) {
    return (0, l.jsx)(eT.A, { confettiLocation: eb.k.CHAT_INPUT, children: (0, l.jsx)(eL, { ...e }) });
}
var eM = n(931664),
    ew = n(631576),
    ek = n(68935),
    eP = n(406704),
    eD = n(885386),
    eU = n(951260),
    eG = n(696451),
    eV = n(576705),
    eF = n(309010),
    eH = n(638128),
    eB = n(522602),
    eW = n(287809),
    eK = n(821102),
    ez = n(174459),
    eZ = n(234320),
    eY = n(625494),
    eq = n(488926),
    e$ = n(723702),
    eJ = n(486319),
    eX = n(355622),
    eQ = n(392553),
    e0 = n(834730),
    e1 = n(140735),
    e2 = n(176781),
    e5 = n(463930),
    e3 = n(935063),
    e8 = n(73392),
    e7 = n(650019),
    e6 = n(763754),
    e4 = n(967144),
    e9 = n(118517),
    te = n(976860),
    tt = n(747926),
    tn = n(232835),
    tl = n(285796),
    ti = n(773848);
function ts(e) {
    let { onClick: t, "aria-label": n } = e;
    return (0, l.jsx)(Q.D, {
        className: ti.b,
        onClick: t,
        "aria-label": n,
        children: (0, l.jsx)(tl.a, { size: "md", color: "currentColor", className: ti.u }),
    });
}
var tr = n(133972);
let ta = "channel-reply-bar-a11y-description";
function to(e) {
    let { channel: t, message: n, replyChainLength: s } = e,
        r = i.useRef(s);
    return (
        i.useEffect(() => {
            r.current = s;
        }),
        i.useEffect(() => {
            (0, G.zV)(ea.HAw.THREAD_NUDGE_SHOWN, {
                type: "Reply Chain (3)",
                reply_chain_length: r.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t]),
        (0, l.jsxs)(Q.D, {
            onClick: function () {
                (0, e9.Jx)(t.id), (0, tt.Tv)(t, n, "Reply Chain Nudge");
            },
            className: tr._r,
            focusProps: { offset: { right: -4, left: -4 } },
            children: [
                (0, l.jsx)(e0.E, {
                    color: "text-default",
                    className: tr.Qq,
                    variant: "text-sm/normal",
                    children: j.intl.format(j.t.B3V0FM, { count: Math.min(10, s + 1) }),
                }),
                (0, l.jsx)(e0.E, {
                    color: "text-link",
                    className: tr.NG,
                    variant: "text-sm/semibold",
                    children: j.intl.string(j.t.rBIGBL),
                }),
            ],
        })
    );
}
function tu(e) {
    let t,
        n,
        { reply: s, chatInputType: a } = e,
        { channel: o, message: u, shouldMention: c, showMentionToggle: d, mediaMention: h } = s,
        {
            guildId: f,
            nick: p,
            colorString: g,
            colorStrings: x,
            colorRoleName: A,
            authorId: E,
            displayNameStyles: C,
        } = (0, e6.Ay)(u),
        I = (0, e4.gn)(f, E, x),
        y = (0, e8.a)({ displayNameStyles: C }),
        S = (0, e7.A)(h, u.attachments),
        v =
            ((t = o.id),
            (n = u.id),
            (0, m.bG)([tn.A], () => {
                let e = n;
                for (let n = 0; n < 10; n++) {
                    let l = tn.A.getMessage(t, e);
                    if (l?.type !== ea.lAJ.REPLY || null == l.messageReference) return n;
                    e = l.messageReference.message_id;
                }
                return 10;
            }, [t, n])),
        _ = (0, eP.n)(o, u),
        N = a.showThreadPromptOnReply && v >= 2 && _;
    return (0, l.jsx)("div", {
        className: tr.e1,
        children: (0, l.jsxs)("div", {
            className: tr.kL,
            children: [
                (0, l.jsxs)("div", {
                    className: tr.eU,
                    children: [
                        (0, l.jsx)(e1.A, { id: ta, children: j.intl.formatToPlainString(j.t.EpJL4E, { username: p }) }),
                        (0, l.jsx)(Q.D, {
                            onClick: function () {
                                return (0, te.pX)(ea.BVt.CHANNEL(o.getGuildId(), o.id, u.id));
                            },
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, l.jsx)(e0.E, {
                                color: "text-default",
                                className: r()(tr.Qq, tr.Fn),
                                variant: "text-sm/normal",
                                children: j.intl.format(j.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, l.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    "\xa0",
                                                    S?.title != null
                                                        ? (0, l.jsxs)("span", {
                                                              className: tr.H8,
                                                              children: [
                                                                  S.isClip &&
                                                                      (0, l.jsx)(e2.x, {
                                                                          size: "xs",
                                                                          color: "currentColor",
                                                                          className: tr.gS,
                                                                      }),
                                                                  (0, l.jsx)(e0.E, {
                                                                      variant: "text-sm/semibold",
                                                                      color: "text-default",
                                                                      className: tr.NV,
                                                                      children: S.title,
                                                                  }),
                                                                  (0, l.jsxs)(e0.E, {
                                                                      variant: "text-sm/normal",
                                                                      color: "text-link",
                                                                      children: ["@", S.timestamp],
                                                                  }),
                                                              ],
                                                          })
                                                        : (0, l.jsx)(e5.g, {
                                                              className: tr.UU,
                                                              name: p,
                                                              colorString: g,
                                                              colorStrings: I,
                                                              roleName: A,
                                                              displayNameStylesFont: y,
                                                          }),
                                                ],
                                            },
                                            t,
                                        ),
                                }),
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: tr.o1,
                            children: [
                                d &&
                                    (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(X.m, {
                                                asContainer: !0,
                                                text: c ? j.intl.string(j.t.DH2o6R) : j.intl.string(j.t.utGGIY),
                                                children: (0, l.jsx)(Q.D, {
                                                    role: "switch",
                                                    "aria-checked": c,
                                                    onClick: function (e) {
                                                        e.stopPropagation(), (0, e9.vz)(o.id, !c);
                                                    },
                                                    children: (0, l.jsxs)(e0.E, {
                                                        variant: "text-sm/bold",
                                                        color: c ? "text-link" : "text-muted",
                                                        className: tr.Z4,
                                                        children: [
                                                            (0, l.jsx)(e3.X, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": j.intl.string(j.t.P8tvKG),
                                                                className: tr.mM,
                                                            }),
                                                            c ? j.intl.string(j.t.p9jC2r) : j.intl.string(j.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, l.jsx)("div", { className: tr.me, "aria-hidden": !0 }),
                                        ],
                                    }),
                                (0, l.jsx)(ts, {
                                    onClick: function (e) {
                                        e.stopPropagation(), (0, e9.Jx)(o.id);
                                    },
                                    "aria-label": j.intl.string(j.t.jSnJGT),
                                }),
                            ],
                        }),
                    ],
                }),
                N && (0, l.jsx)(to, { channel: o, message: u, replyChainLength: v }),
            ],
        }),
    });
}
var tc = n(749314),
    td = n(148355),
    th = n(274107);
let tm = i.memo(function (e) {
    let { channelId: t, chatInputType: n } = e,
        [s, r] = i.useState(null),
        a = (0, m.bG)([eM.A], () => eM.A.getStickerPreview(t, n.drafts.type));
    return n.stickers?.allowSending && null != a && 0 !== a.length
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", {
                      className: th.Tz,
                      children: a.map((e) =>
                          (0, l.jsxs)(
                              "div",
                              {
                                  className: th.dp,
                                  children: [
                                      (0, l.jsx)(Q.D, {
                                          onFocus: () => r(e.id),
                                          onBlur: () => r(null),
                                          className: th.b,
                                          "aria-label": j.intl.formatToPlainString(j.t.BGAQRd, { name: e.name }),
                                          onClick: () => (0, ew.x5)(t, n.drafts.type),
                                          children: (0, l.jsx)("div", {
                                              className: th.Nk,
                                              children: (0, l.jsx)(tl.a, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: th.ut,
                                              }),
                                          }),
                                      }),
                                      (0, l.jsx)(td.A, {
                                          isInteracting: s === e.id,
                                          className: th.UV,
                                          size: 48,
                                          sticker: e,
                                      }),
                                  ],
                              },
                              e.id,
                          ),
                      ),
                  }),
                  (0, l.jsx)(tc.A, { className: th.R }),
              ],
          })
        : null;
});
var tf = n(612394);
n(321073);
var tp = n(587895),
    tg = n(20015),
    tx = n(629016),
    tA = n(461213),
    tE = n(228366),
    tC = n(361310);
let tI = new Map(),
    ty = new Set(),
    tS = 0,
    tv = !1;
function t_() {
    let e = (function () {
            let e = new Set();
            for (let t of tA.A.getActivities()) {
                let n = (0, tC.N)(t);
                null != n && e.add(n);
            }
            return e;
        })(),
        t = !1,
        n = new Map();
    for (let [l, i] of tI) e.has(l) ? n.set(l, i) : (t = !0);
    t && (tI = n);
    let l = new Set(),
        i = !1;
    for (let t of ty) e.has(t) ? l.add(t) : (i = !0);
    return i && (ty = l), t || i;
}
class tN extends m.Ay.PersistedStore {
    static displayName = "RichPresenceInviteBarStore";
    static persistKey = "RichPresenceInviteBarStore";
    initialize(e) {
        this.waitFor(eV.A, tA.A),
            (tI = new Map(
                (e?.invitedChannelIdsBySession ?? []).map((e) => {
                    let [t, n] = e;
                    return [t, new Set(n)];
                }),
            )),
            (ty = new Set(e?.dismissedSessionKeys ?? [])),
            (tS = e?.consecutiveDismissesWithoutInvite ?? 0),
            (tv = e?.permanentlyDismissed ?? !1),
            this.syncWith([tA.A], t_);
    }
    hasInvitedChannel(e, t) {
        return tI.get(e)?.has(t) ?? !1;
    }
    isDismissedSession(e) {
        return ty.has(e);
    }
    isPermanentlyDismissed() {
        return tv;
    }
    getState() {
        return {
            invitedChannelIdsBySession: [...tI].map((e) => {
                let [t, n] = e;
                return [t, [...n]];
            }),
            dismissedSessionKeys: [...ty],
            consecutiveDismissesWithoutInvite: tS,
            permanentlyDismissed: tv,
        };
    }
}
let tT = new tN(tE.h, {
    RICH_PRESENCE_INVITE_BAR_CHANNEL_INVITED: function (e) {
        let { sessionKey: t, channelId: n } = e,
            l = tI.get(t);
        if (l?.has(n)) return !1;
        let i = new Set(l).add(n);
        (tI = new Map(tI).set(t, i)), (tS = 0);
    },
    RICH_PRESENCE_INVITE_BAR_SESSION_DISMISSED: function (e) {
        let { sessionKey: t } = e;
        if (ty.has(t)) return !1;
        (ty = new Set(ty).add(t)), tI.has(t) ? (tS = 0) : (tS += 1) >= 2 && (tv = !0);
    },
});
var tj = n(874546),
    tb = n(691540),
    tR = n(857250),
    tL = n(97483),
    tO = n(821609),
    tM = n(308368),
    tw = n(968522),
    tk = n(643747),
    tP = n(852037);
let tD = "rich_presence_invite";
function tU(e, t) {
    ez.default.track(ea.HAw.CHANNEL_BANNER_CTA_CLICKED, {
        ...(0, G.H$)(e.getGuildId()),
        ...(0, G.dI)(e),
        banner_type: tD,
        cta_type: t,
    });
}
function tG(e) {
    let { channel: t, activity: n } = e,
        s = (0, tw.Ay)(tw.P8.CHANNEL_TEXT_AREA_BARS),
        [a, o] = i.useState(!1),
        u = (0, tC.N)(n);
    return (i.useEffect(() => {
        s &&
            ez.default.track(ea.HAw.CHANNEL_BANNER_VIEWED, {
                ...(0, G.H$)(t.getGuildId()),
                ...(0, G.dI)(t),
                banner_type: tD,
            });
    }, [t, u, s]),
    s)
        ? (0, l.jsxs)("div", {
              className: r()(tr.eU, tP.M),
              children: [
                  (0, l.jsx)(e0.E, {
                      variant: "text-sm/medium",
                      className: r()(tr.Qq, tr.Fn),
                      children: j.intl.format(j.t.DrmvNT, { activityName: n.name }),
                  }),
                  (0, l.jsxs)("div", {
                      className: tP.o,
                      children: [
                          (0, l.jsx)(tO.$, {
                              variant: "active",
                              size: "sm",
                              loading: a,
                              text: j.intl.string(j.t["fXM+J7"]),
                              onClick: function () {
                                  tU(t, "send_invite"),
                                      o(!0),
                                      tM.A.sendActivityInvite({
                                          channelId: t.id,
                                          type: ea.xL.JOIN,
                                          activity: n,
                                          location: C.A.RICH_PRESENCE_INVITE_COMPOSER_BANNER,
                                      }).then(
                                          () => {
                                              o(!1);
                                          },
                                          () => {
                                              o(!1);
                                          },
                                      );
                              },
                          }),
                          (0, l.jsx)(ts, {
                              onClick: function () {
                                  tU(t, "dismiss"),
                                      null != u && (0, tk.$)(u),
                                      (0, tb.P0)((0, tR.o)(j.intl.string(j.t.gFwvLa), tL.Ck.INVITE));
                              },
                              "aria-label": j.intl.string(j.t.cpT0Cq),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var tV = n(442433);
n(827669);
var tF = n(514294);
function tH(e) {
    let t,
        s,
        a,
        { className: o, activeCommand: u, activeOption: c, optionStates: d, channelId: h } = e,
        m = i.useCallback(
            (e) => {
                let t = u?.rootCommand?.id;
                null == t
                    ? e.preventDefault()
                    : (0, tV.L3)(e, async () => {
                          let { default: e } = await n.e("715687").then(n.bind(n, 646938));
                          return (n) => (0, l.jsx)(e, { ...n, id: t, label: j.intl.string(j.t.oJ1Muw) });
                      });
            },
            [u?.rootCommand?.id],
        ),
        f = i.useCallback(() => {
            Z.Gf({ channelId: h, command: null, section: null });
        }, [h]);
    if (null == u) return null;
    if (null != c) {
        let e = d[c.name].lastValidationResult;
        (t = c.displayName), (s = c.displayDescription), (a = e?.success ? null : e?.error);
    } else (t = `/${u.displayName}`), (s = u.displayDescription), (a = null);
    return (0, l.jsxs)("div", {
        className: r()(o, tF.M0),
        onContextMenu: m,
        children: [
            (0, l.jsxs)("div", {
                className: tF.iz,
                children: [
                    (0, l.jsx)(e0.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        tag: "span",
                        children: t,
                    }),
                    null != a
                        ? (0, l.jsx)("span", { className: tF.z3, children: a })
                        : (0, l.jsx)("span", { className: tF.h_, children: s }),
                ],
            }),
            (0, l.jsx)("div", {
                className: tF.o1,
                children: (0, l.jsx)(ts, { onClick: f, "aria-label": j.intl.string(j.t.cpT0Cq) }),
            }),
        ],
    });
}
var tB = n(734057);
let tW = new Set();
class tK extends m.Ay.PersistedStore {
    static displayName = "PTOStore";
    static persistKey = "PTOStore";
    initialize(e) {
        this.waitFor(tB.A, eG.Ay, eF.Ay, eW.default), null != e && (tW = new Set(e));
    }
    hasId(e) {
        return tW.has(e);
    }
    getState() {
        return [...tW];
    }
}
let tz = new tK(tE.h, {});
function tZ() {
    let e = eF.Ay.getChannelId();
    if (null == e) return;
    let t = tB.A.getChannel(e);
    null != t && t.isPrivate() && (tW.has(t.getRecipientId()) || (tW.add(t.getRecipientId()), tz.emitChange()));
}
function tY() {
    return (0, l.jsxs)("div", {
        className: tr.eU,
        children: [
            (0, l.jsx)(e0.E, {
                variant: "text-sm/medium",
                className: r()(tr.Qq, tr.Fn),
                children: j.intl.string(j.t["2UvR1E"]),
            }),
            (0, l.jsx)("div", {
                className: tr.o1,
                children: (0, l.jsx)(ts, { onClick: tZ, "aria-label": j.intl.string(j.t.cpT0Cq) }),
            }),
        ],
    });
}
var tq = n(9175);
function t$(e) {
    let { error: t } = e;
    return (0, l.jsxs)("div", {
        className: tq.M,
        children: [
            (0, l.jsx)(e0.E, { variant: "text-xs/bold", color: "text-strong", children: j.intl.string(j.t["4VDCG0"]) }),
            t
                ? (0, l.jsx)(e0.E, { variant: "text-xs/medium", className: tq.z, children: j.intl.string(j.t.qNorwt) })
                : (0, l.jsx)(e0.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: j.intl.string(j.t["260qZS"]),
                  }),
        ],
    });
}
var tJ = n(25201),
    tX = n(926321),
    tQ = n(356693);
function t0(e) {
    var t, n;
    let { channelId: i } = e,
        s = (0, tJ.vR)(i);
    if (null == s) return null;
    let a = s.rolling,
        o =
            ((t = a),
            (n = s.results),
            t
                ? j.intl.string(j.t["x/FIRX"])
                : null == n
                  ? ""
                  : j.intl.formatToPlainString(j.t.xU4pF1, { total: n.reduce((e, t) => e + t, 0) }));
    return (0, l.jsx)("div", {
        className: r()(tQ.kL, { [tQ.Kd]: !s.dismissing }),
        children: (0, l.jsxs)("div", {
            className: tQ.Qs,
            children: [
                (0, l.jsx)(tX.DiceIcon, { size: "md", className: r()({ [tQ.su]: a }) }),
                (0, l.jsx)(e0.E, { color: "text-default", variant: "text-sm/normal", children: o }),
            ],
        }),
    });
}
var t1 = n(575293),
    t2 = n(31717),
    t5 = n(365844);
function t3(e) {
    let { channelId: t, scheduledMessageDraft: n } = e,
        { scheduledTimestamp: i } = n;
    return (0, l.jsx)("div", {
        className: t5.e1,
        children: (0, l.jsx)("div", {
            className: t5.kL,
            children: (0, l.jsxs)("div", {
                className: t5.g3,
                children: [
                    (0, l.jsx)(e0.E, {
                        color: "text-default",
                        className: r()(t5.Qq, t5.a3),
                        variant: "text-sm/normal",
                        children: j.intl.formatToPlainString(j.t["MQcRX/"], { timestamp: new Date(i).valueOf() }),
                    }),
                    (0, l.jsx)("div", {
                        className: t5.o1,
                        children: (0, l.jsx)(ts, {
                            onClick: function (e) {
                                e.stopPropagation(), x.A.clearDraft(t, t2.C.ScheduledMessage);
                            },
                            "aria-label": j.intl.string(j.t.cpT0Cq),
                        }),
                    }),
                ],
            }),
        }),
    });
}
var t8 = n(857983);
function t7(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, l.jsx)("div", { children: e }, t)),
        s = t.floating.map((e, t) => (0, l.jsx)(i.Fragment, { children: e }, t));
    return 0 === n.length && 0 === s.length
        ? null
        : (0, l.jsxs)(i.Fragment, {
              children: [
                  s.length > 0 && (0, l.jsx)("div", { className: t8.Vq, children: s }),
                  n.length > 0 && (0, l.jsx)("div", { className: t8.MD, children: n }),
              ],
          });
}
var t6 = n(123583),
    t4 = n(562708),
    t9 = n(150934),
    ne = n(139286),
    nt = n(47167),
    nn = n(174355),
    nl = n(252263),
    ni = n(8455),
    ns = n(67259),
    nr = n(239917);
function na(e) {
    let { thread: t, scheduledMessageDraft: n } = e,
        s = (0, ni.Vp)({ location: "ThreadsAlsoSendToChannelArea" }),
        [r, a] = (0, m.yK)([tB.A, ns.A], () => [
            t.isThread() ? tB.A.getChannel(t.parent_id) : null,
            ns.A.getAlsoSendToChannel(t.id),
        ]),
        o = (0, nt.Ay)(r),
        u = i.useCallback(
            (e) => {
                ez.default.track(ea.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_TOGGLED, {
                    value: e,
                    guild_id: t.guild_id,
                    channel_id: t.id,
                }),
                    (0, nl.B)({ channelId: t.id, enabled: e });
            },
            [t],
        );
    if (
        ((0, ne.A)(
            { name: t4.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL, type: t4.ImpressionTypes.VIEW },
            { disableTrack: null == r || !s.enabled },
            [r, s.enabled],
        ),
        !s.enabled || null == r)
    )
        return null;
    let c = (0, nn.gU)(r),
        d = j.intl.format(j.t.UqL10G, {
            callToActionHook: (e, t) =>
                (0, l.jsx)(
                    e0.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: nr.Pf,
                        children: j.intl.string(j.t.Pi3JW7),
                    },
                    t,
                ),
            channelName: o,
            channelNameHook: (e, t) =>
                (0, l.jsxs)(
                    e0.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: nr.Pf,
                        children: [null == c ? null : (0, l.jsx)(c, { color: "currentColor", className: nr.Kk }, t), e],
                    },
                    t,
                ),
        });
    return (0, l.jsx)("div", {
        className: nr.kL,
        children: (0, l.jsx)(t9.S, { checked: a, disabled: null != n, onChange: u, label: d, labelType: "secondary" }),
    });
}
function no(e) {
    let { channel: t, type: n, scheduledMessageDraft: i } = e,
        { shouldShow: s } = (function (e) {
            let { channel: t, type: n } = e,
                l = (0, m.bG)([tB.A], () => {
                    let e = tB.A.getChannel(t.parent_id);
                    return e?.isForumLikeChannel() ?? !1;
                }),
                i = [eX.oU.NORMAL, eX.oU.SIDEBAR].includes(n);
            return { shouldShow: t.isThread() && !l && i };
        })({ channel: t, type: n });
    return s ? (0, l.jsx)(na, { thread: t, scheduledMessageDraft: i }) : null;
}
var nu = n(822610),
    nc = n(625928),
    nd = n(135261),
    nh = n(820066),
    nm = n(922016),
    nf = n(375499),
    np = n(267889),
    ng = n(307731),
    nx = n(849918);
function nA(e) {
    let { getSlateEditor: t, onInsertEmoji: n, type: s, channel: r } = e,
        a = t(),
        o = i.useRef(null);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              id: "slate-toolbar",
              className: nx.aL,
              children: [
                  (0, l.jsx)("div", {
                      className: nx.Wy,
                      children: (0, l.jsx)(nd.P, {
                          slateEditor: a,
                          options: s.markdown,
                          iconClassName: nx.C7,
                          dividerClassName: nx.us,
                      }),
                  }),
                  (0, l.jsx)(nm.Y, {
                      targetElementRef: o,
                      renderPopout: function (e) {
                          let { closePopout: t } = e;
                          return (0, l.jsx)(np.A, {
                              persistSearch: !0,
                              channel: r,
                              closePopout: t,
                              onSelectEmoji: (e) => {
                                  let { emoji: l, willClose: i } = e;
                                  n({ emoji: l, willClose: i }), i && t();
                              },
                              pickerIntention:
                                  s.expressionPicker?.emojiIntention ?? ng.EmojiIntention.COMMUNITY_CONTENT,
                          });
                      },
                      position: "bottom",
                      animation: nm.Y.Animation.NONE,
                      align: "left",
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, l.jsx)(nf.A, { ...e, ref: o, active: n, className: nx.Z8, tabIndex: 0 });
                      },
                  }),
              ],
          });
}
var nE = n(263582),
    nC = n(698279);
function nI(e, t, s, r, a) {
    let [o, u] = i.useState(!1),
        c = i.useCallback(
            (i, d, h, m, p, g) => {
                if (o) return;
                u(!0);
                let A = eM.A.getStickerPreview(a, t.drafts.type)?.map((e) => e.id) ?? [],
                    E = eB.A.getUploads(a, t.drafts.type) ?? [];
                if (null == d && !m && !p && (0, eC.xz)(E, a)) {
                    u(!1),
                        (0, f.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("476739"),
                                n.e("484976"),
                                n.e("754540"),
                                n.e("599998"),
                                n.e("247352"),
                                n.e("965584"),
                                n.e("1248"),
                                n.e("594149"),
                                n.e("158921"),
                                n.e("778250"),
                                n.e("264488"),
                                n.e("241838"),
                                n.e("844567"),
                                n.e("249681"),
                                n.e("481647"),
                                n.e("776602"),
                                n.e("140402"),
                                n.e("21921"),
                                n.e("139970"),
                                n.e("472789"),
                                n.e("179049"),
                                n.e("31267"),
                                n.e("179745"),
                                n.e("803332"),
                                n.e("76428"),
                                n.e("818465"),
                                n.e("432209"),
                                n.e("979630"),
                                n.e("858337"),
                                n.e("968763"),
                                n.e("777487"),
                                n.e("647177"),
                                n.e("126437"),
                                n.e("24922"),
                                n.e("98972"),
                                n.e("699011"),
                                n.e("431649"),
                                n.e("836150"),
                                n.e("710014"),
                                n.e("333097"),
                                n.e("115172"),
                                n.e("150200"),
                                n.e("486155"),
                                n.e("386861"),
                                n.e("770961"),
                                n.e("623685"),
                                n.e("842516"),
                                n.e("684688"),
                            ]).then(n.bind(n, 538899));
                            return (t) =>
                                (0, l.jsx)(e, {
                                    ...t,
                                    threadId: a,
                                    attachments: E,
                                    sendMessage: () => c(i, void 0, void 0, void 0, !0),
                                });
                        });
                    return;
                }
                e({
                    value: i,
                    uploads: E,
                    stickers: A,
                    command: d,
                    commandOptionValues: h,
                    isGif: m,
                    gifMetadata: g,
                }).then((e) => {
                    let { shouldClear: n, shouldRefocus: l } = e,
                        i = (n && t.submit?.clearOnSubmit) ?? !1,
                        o = null != s.current;
                    i &&
                        (a !== eF.Ay.getChannelId()
                            ? x.A.saveDraft(a, "", t.drafts.type)
                            : o && (s.current?.clearValue(), r.current?.hide())),
                        o && (u(!1), (0, eA.v8)(), l && s.current?.focus());
                });
            },
            [s, r, e, o, t, a],
        );
    return {
        submitting: o,
        submit: c,
        handleSubmit: i.useCallback(
            (e) => {
                s?.current?.submit(e);
            },
            [s],
        ),
    };
}
function ny(e, t, n) {
    return i.useCallback(
        (l) => {
            if (t === eX.oU.CREATE_FORUM_POST || t === eX.oU.CREATE_ANNOUNCEMENT_POST) n.current?.insertGIF(l);
            else {
                let t = {
                    gif_provider: l.provider ?? eI.jQ,
                    load_id: eK.A.getAnalyticsID(),
                    source_object: "GIF Picker",
                    gif_url: l.url,
                    gif_id: l.id,
                };
                e(l.url, void 0, void 0, !0, void 0, t);
            }
            (0, eA.v8)(), n.current?.focus();
        },
        [n, e, t],
    );
}
function nS(e) {
    return i.useCallback(
        (t) => {
            let { emoji: n, willClose: l } = t,
                i = e.current;
            null != n && null != i && i.insertEmoji({ emoji: n, willClose: l }), l && (0, eA.v8)();
        },
        [e],
    );
}
function nv(e) {
    let { editorRef: t, disabled: n, textValue: l, channelId: s, chatInputType: r, submit: a } = e,
        { analyticsLocations: o } = (0, I.Ay)();
    return i.useCallback(
        (e, i) => {
            n ||
                (r === eX.oU.CREATE_ANNOUNCEMENT_POST || (0, ek.YS)(i, l, s, r.drafts.type)
                    ? ((0, tf.fh)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != eM.A.getStickerPreview(s, r.drafts.type),
                          analyticsLocations: o,
                      }),
                      (0, ew.$x)(s, e, r.drafts.type))
                    : (a({ value: "", uploads: void 0, stickers: [e.id] }), t.current?.clearValue()),
                (0, eA.v8)(),
                t.current?.focus());
        },
        [n, l, s, t, o, a, r],
    );
}
function n_(e, t, n) {
    let l = i.useCallback(() => {
            t || (0, eA.r$)(nC.kx.EMOJI, e, n);
        }, [t, e, n]),
        s = i.useCallback(() => {
            !t && e.gifs?.allowSending && (0, eA.r$)(nC.kx.GIF, e, n);
        }, [t, e, n]),
        r = i.useCallback(() => {
            !t && e.stickers?.allowSending && (0, eA.r$)(nC.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, eZ.Vo)({ event: ea.jej.TOGGLE_EMOJI_POPOUT, handler: l }),
        (0, eZ.Vo)({ event: ea.jej.TOGGLE_GIF_PICKER, handler: s }),
        (0, eZ.Vo)({ event: ea.jej.TOGGLE_STICKER_PICKER, handler: r });
}
function nN(e, t, n) {
    let [l] = i.useState(() => new a.EventEmitter());
    return (
        i.useEffect(() => {
            l.emit("text-changed", t, n);
        }, [t, n, l]),
        {
            eventEmitter: l,
            handleEditorSelectionChanged: function (t) {
                null != e.current && l.emit("selection-changed", t);
            },
        }
    );
}
function nT() {
    let e = i.useRef(null),
        t = i.useCallback(() => {
            e.current?.onMaybeShowAutocomplete();
        }, []),
        n = i.useCallback(() => {
            e.current?.onHideAutocomplete();
        }, []);
    return { autocompleteRef: e, handleMaybeShowAutocomplete: t, handleHideAutocomplete: n };
}
function nj(e) {
    let t = i.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
}
function nb(e) {
    let [t, n] = i.useState(0);
    return {
        editorHeight: t,
        handleResize: i.useCallback(
            (t) => {
                n(t ?? 0), e?.(t);
            },
            [e],
        ),
    };
}
function nR(e, t, n, l) {
    let i = e.getGuildId(),
        s = (0, m.bG)([ey.A], () => null != i && ey.A.isLurking(i), [i]),
        r = (0, m.bG)([eG.Ay, eW.default], () => {
            let e = eW.default.getCurrentUser();
            return (null != i && null != e ? eG.Ay.getMember(i, e.id)?.isPending : null) ?? !1;
        }),
        a = (0, m.cf)([eV.A], () => {
            let i = e.isPrivate(),
                s = eV.A.computePermissions(e),
                a = h.zy(s, ea.xBc.CREATE_PUBLIC_THREADS) || h.zy(s, ea.xBc.CREATE_PRIVATE_THREADS),
                o =
                    (!t.permissions?.requireCreateTherads || a) &&
                    (!t.permissions?.requireSendMessages || h.zy(s, ea.xBc.SEND_MESSAGES)),
                u = o && h.zy(s, ea.xBc.ATTACH_FILES),
                c = null != n,
                d = (0, eP.UJ)(e);
            return {
                disabled: l || r || (!i && !o) || d,
                canAttachFiles: !0 === t.attachments && (i || r || u || c),
                canCreateThreads: a,
                canEveryoneSendMessages: eq.MJ(ea.xBc.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, l, r]);
    return { isLurking: s, isPendingMember: r, ...a };
}
function nL(e, t, n) {
    let [l, s, r] = (0, eA.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], c.x),
        a = (0, m.bG)([S.A], () => S.A.shouldShowPopup() && S.A.activeViewType() === e && S.A.activeChannelId() === n);
    i.useEffect(
        () => () => {
            (0, eA.v8)(e, n);
        },
        [e, n],
    );
    let o = i.useCallback(() => {
            null != l || a || t.current?.handleOuterClick();
        }, [l, a, t]),
        u = null == l || null == s || s !== e || r !== n;
    return { expressionPickerView: l, shouldHideExpressionPicker: u, handleOuterClick: o };
}
function nO(e, t) {
    return {
        handleAutocompleteVisibilityChange: i.useCallback(
            (n) => {
                n && (0, eA.v8)(e, t);
            },
            [e, t],
        ),
    };
}
let nM = i.memo(
    i.forwardRef(function (e, t) {
        let n,
            s,
            {
                textValue: a,
                richValue: o,
                className: c,
                innerClassName: h,
                editorClassName: f,
                id: x,
                required: v,
                disabled: _,
                placeholder: N,
                accessibilityLabel: T,
                channel: j,
                type: b,
                focused: R,
                error: L,
                renderAttachButton: O,
                renderApplicationCommandIcon: k,
                renderButtons: P,
                pendingReply: D,
                onChange: U,
                onResize: G,
                onBlur: V,
                onFocus: F,
                onKeyDown: H,
                onSubmit: B,
                promptToUpload: W,
                highlighted: K,
                canMentionRoles: z,
                canMentionChannels: Z,
                maxCharacterCount: Y,
                showRemainingCharsAfterCount: q,
                allowNewLines: $ = !0,
                characterCountClassName: J,
                "aria-describedby": X,
                "aria-labelledby": Q,
                setEditorRef: ee,
                autoCompletePosition: et,
                children: en,
                disableThemedBackground: el = !1,
                emojiPickerCloseOnModalOuterClick: ei,
                parentModalKey: es,
                scheduledMessageDraft: er,
                showValueWhenDisabled: eo = !1,
            } = e;
        u()(null != b, "chat input type must be set");
        let { analyticsLocations: eu } = (0, I.Ay)(C.A.CHANNEL_TEXT_AREA),
            ec = nj(t),
            ed = i.useRef(null),
            em = i.useRef(null),
            eC = i.useRef(null),
            eI = i.useRef(null),
            ey = i.useRef(null),
            ev = i.useCallback(() => eC.current?.getSlateEditor() ?? null, []);
        ee?.(eC.current);
        let e_ = (0, y.A)(j),
            eN = (0, eU.n)("ChannelTextAreaContainer"),
            eT = (0, m.cf)([E.Ay], () => ({
                expressionPickerFormat: E.Ay.expressionPickerFormat,
                condensePickerWhenNarrow: E.Ay.condensePickerWhenNarrow,
            })),
            ej = eN ? eT.expressionPickerFormat : E.IG.FLEXIBLE,
            eb = !eN || eT.condensePickerWhenNarrow,
            [eR, eL] = i.useState(!e_);
        (0, A.i4)(ec, (e) => {
            let { width: t } = e;
            return eL(!e_ && (null == t || t > 450));
        });
        let eM = ej === E.IG.HIDDEN,
            ew = ej === E.IG.CONDENSED || (ej === E.IG.FLEXIBLE && eb && !eR),
            { activeCommand: ek, activeCommandSection: eP } = (0, m.cf)([w.A], () => ({
                activeCommand: b.commands?.enabled ? w.A.getActiveCommand(j.id) : null,
                activeCommandSection: b.commands?.enabled ? w.A.getActiveCommandSection(j.id) : null,
            })),
            {
                isLurking: eF,
                isPendingMember: eB,
                disabled: eK,
                canAttachFiles: eZ,
                canCreateThreads: eq,
                canEveryoneSendMessages: e0,
            } = nR(j, b, ek, _),
            e1 = b.toolbarType === eX.O1.STATIC,
            e2 = !eD.D_.useSetting() && !(0, e$.isAndroidWeb)() && null != window.ResizeObserver,
            e5 = !e2 || !b.commands?.enabled || !R || "/" !== a,
            e3 = (0, eS.A)(),
            { fontSize: e8 } = (0, m.cf)([E.Ay], () => ({ fontSize: E.Ay.fontSize })),
            e7 = (0, m.bG)([eH.A], () => eH.A.isEnabled());
        n_(b, eK, j.id);
        let { eventEmitter: e6, handleEditorSelectionChanged: e4 } = nN(eC, a, o),
            e9 = i.useRef(a);
        e9.current = a;
        let te = i.useCallback(
                (e, t, n) => {
                    "/" === t && "" === e9.current && b.commands?.enabled && e6.emit("command-sentinel-typed"),
                        U?.(e, t, n);
                },
                [U, b.commands?.enabled, e6],
            ),
            { submitting: tt, submit: tn, handleSubmit: tl } = nI(B, b, eC, ey, j.id),
            { autocompleteRef: ti, handleMaybeShowAutocomplete: ts, handleHideAutocomplete: tr } = nT(),
            to = ny(tn, b, eC),
            tc = nS(eC),
            td = nv({ editorRef: eC, disabled: eK, textValue: a, channelId: j.id, chatInputType: b, submit: B }),
            th = i.useCallback(
                (e, t, n) => {
                    let l = eC.current;
                    null != e &&
                        null != l &&
                        (ez.default.track(ea.HAw.SOUNDMOJI_SELECT, {
                            channel_id: j.id,
                            guild_id: j.guild_id,
                            sound_guild_id: e.guildId,
                            sound_id: e.soundId,
                            source: t,
                        }),
                        l.insertSound(e)),
                        n && (0, eA.v8)(),
                        l?.focus();
                },
                [eC, j.id, j.guild_id],
            ),
            tf = i.useCallback(() => ey?.current?.hide(), []),
            { editorHeight: tE, handleResize: tI } = nb(G),
            {
                handleTab: ty,
                handleEnter: tS,
                handleSpace: tv,
                handleMoveSelection: t_,
            } = ((n = i.useCallback(
                () => !!(!e5 && ed.current?.onTabOrEnter(!1)) || ti.current?.onTabOrEnter(!1) || !1,
                [e5, ed, ti],
            )),
            (s = i.useCallback(
                () => !!(!e5 && ed.current?.onTabOrEnter(!0)) || ti.current?.onTabOrEnter(!0) || !1,
                [e5, ed, ti],
            )),
            {
                handleTab: n,
                handleEnter: s,
                handleSpace: i.useCallback(() => ti.current?.onSpace() || !1, [ti]),
                handleMoveSelection: i.useCallback(
                    (e) => !!(!e5 && ed.current?.onMoveSelection(e)) || ti.current?.onMoveSelection(e) || !1,
                    [e5, ed, ti],
                ),
            }),
            { expressionPickerView: tN, shouldHideExpressionPicker: tb, handleOuterClick: tR } = nL(b, eC, j.id),
            { selectedAutocompleteInputType: tL, selectedAutocompleteInputError: tO } = (function (e, t) {
                let [n, l] = i.useState({ selectedAutocompleteInputType: null, selectedAutocompleteInputError: !1 }),
                    s = i.useCallback(() => {
                        let e,
                            n = t.current?.getSlateEditor();
                        null != n && (e = nh.VW.getSelectedParentOfType(n, eg.mk)?.[0]),
                            l({
                                selectedAutocompleteInputType: e?.type ?? null,
                                selectedAutocompleteInputError: e?.error ?? !1,
                            });
                    }, [t]);
                return (
                    i.useEffect(
                        () => (
                            e.on("selection-changed", s),
                            e.on("submit-failure", s),
                            s(),
                            () => {
                                e.off("selection-changed", s), e.on("submit-failure", s);
                            }
                        ),
                        [s, e],
                    ),
                    n
                );
            })(e6, eC),
            { handleAutocompleteVisibilityChange: tM } = nO(b, j.id),
            tw = (function (e) {
                let { type: t, channelId: n } = e;
                return (0, ef.bG)([S.A], () => {
                    let e = S.A.activeViewType();
                    return null != e && e === t && S.A.activeChannelId() === n && S.A.shouldShowPopup();
                }, [t, n]);
            })({ type: b, channelId: j.id }),
            tk = i.useCallback(() => {
                e6.emit("submit-failure");
            }, [e6]);
        (0, eJ.R)(e6, j.guild_id, j.id);
        let tP = null != D,
            tD = (eK && !((eF || eB) && e0)) || (tt && b.submit?.useDisabledStylesOnSubmit),
            tU = null;
        null != ek ? (tU = k?.(ek, eP, t8.g$)) : (!eK || eq) && (tU = O?.(tP, t8.g$));
        let { isVisible: tV, showsUpsell: tF } = (0, nE.A)({
                type: b,
                textValue: a,
                maxCharacterCount: Y,
                showRemainingCharsAfterCount: q,
            }),
            tB = e2 && null != o && !eK && b.showCharacterCount && null == ek,
            tK = e2 && !__OVERLAY__ && null != o && null == ek && b.toolbarType !== eX.O1.NONE && !eK,
            tZ = (function (e) {
                let t,
                    n,
                    s,
                    r,
                    {
                        channel: a,
                        type: o,
                        activeCommand: u,
                        pendingReply: c,
                        scheduledMessageDraft: d,
                        selectedAutocompleteInputType: h,
                        selectedAutocompleteInputError: f,
                    } = e,
                    { activeCommandOption: p, activeCommandOptionStates: g } = (0, m.cf)([w.A], () => ({
                        activeCommandOption: w.A.getActiveOption(a.id),
                        activeCommandOptionStates: w.A.getOptionStates(a.id),
                    })),
                    x = (0, m.bG)([eG.Ay, eW.default, tz], () => {
                        let e = eW.default.getCurrentUser();
                        if (null == e || !e.isStaff() || !a.isDM()) return !1;
                        let t = eW.default.getUser(a.getRecipientId());
                        if (!t?.isStaff()) return !1;
                        let n = eG.Ay.getNicknames(t.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
                        return n ? !tz.hasId(t.id) && n : (tW.delete(t.id) && tz.emitChange(), !1);
                    }),
                    A =
                        ((t = (0, m.bG)([tA.A, tp.A], () => {
                            let e = tA.A.getActivities().find(tj._C) ?? null;
                            if (e?.application_id == null) return e;
                            let t = tp.A.getApplication(e.application_id);
                            return null == t || (0, tg.n)(t, ea.gfo.EMBEDDED) ? null : e;
                        })),
                        (n = (0, m.bG)([eV.A], () => a.isPrivate() || eV.A.can(ea.xBc.SEND_MESSAGES, a), [a])),
                        (s = (0, m.bG)(
                            [tx.A],
                            () => a.isDM() && tx.A.getParty(t?.party?.id)?.has(a.getRecipientId()) === !0,
                            [a, t],
                        )),
                        (r = (0, m.bG)([tT], () => {
                            if (tT.isPermanentlyDismissed()) return !0;
                            let e = null != t ? (0, tC.N)(t) : null;
                            return null != e && (tT.isDismissedSession(e) || tT.hasInvitedChannel(e, a.id));
                        })),
                        null == t || !n || s || r ? null : t),
                    E = (0, tJ.Ay)((e) => e.channelId === a.id);
                return i.useMemo(() => {
                    let e = [],
                        t = [];
                    return (
                        null != a.guild_id &&
                            o === eX.oU.NORMAL &&
                            t.push((0, l.jsx)(t1.A, { guildId: a.guild_id, channel: a, className: t8.UW })),
                        null != u &&
                            e.push(
                                (0, l.jsx)(tH, {
                                    activeCommand: u,
                                    activeOption: p ?? null,
                                    optionStates: g,
                                    channelId: a.id,
                                }),
                            ),
                        null != c && e.push((0, l.jsx)(tu, { reply: c, chatInputType: o })),
                        x && e.push((0, l.jsx)(tY, {})),
                        null != A && e.push((0, l.jsx)(tG, { channel: a, activity: A })),
                        null != d && e.push((0, l.jsx)(t3, { channelId: a.id, scheduledMessageDraft: d })),
                        "timestampMentionInput" === h && t.push((0, l.jsx)(t$, { error: f ?? !1 })),
                        E && e.push((0, l.jsx)(t0, { channelId: a.id })),
                        { stacked: e, floating: t }
                    );
                }, [u, p, g, a, E, c, x, A, o, d, h, f]);
            })({
                channel: j,
                type: b,
                activeCommand: ek,
                pendingReply: D,
                scheduledMessageDraft: er,
                selectedAutocompleteInputType: tL,
                selectedAutocompleteInputError: tO,
            }),
            tq = 0 === a.trim().length,
            tX = null != D ? [X, ta].filter(Boolean).join(" ") : X,
            tQ = b.layout === eX.wt.INLINE,
            t2 = b.layout === eX.wt.FLUSH,
            t5 = (0, l.jsx)("div", { ref: em, className: t8.BW }),
            t4 = tw ? (0, l.jsx)(M, { align: "right", positionTargetRef: em, channel: j }) : null,
            t9 =
                null != P
                    ? P()
                    : (0, l.jsx)(t6.A, {
                          type: b,
                          disabled: eK,
                          channel: j,
                          handleSubmit: tl,
                          isEmpty: tq,
                          showAllButtons: !ew && !eM,
                          expressionButtonsHidden: eM,
                      }),
            ne = tB
                ? (0, l.jsx)(nc.A, {
                      type: b,
                      textValue: a,
                      className: J,
                      maxCharacterCount: Y,
                      showRemainingCharsAfterCount: q,
                  })
                : null;
        return (
            i.useEffect(() => {
                R && eY._.dispatch(ea.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: j.id });
            }, [R, j.id]),
            (0, l.jsx)(ex.Sv, {
                value: e6,
                children: (0, l.jsxs)(I.f5, {
                    value: eu,
                    children: [
                        tK && e1
                            ? (0, l.jsx)(nA, { getSlateEditor: ev, onInsertEmoji: tc, type: b, channel: j })
                            : tK
                              ? (0, l.jsx)(nd.A, { ref: ey, getSlateEditor: ev, containerRef: eI, options: b.markdown })
                              : null,
                        (0, l.jsxs)("div", {
                            ref: ec,
                            className: r()(c, {
                                [t8.gM]: !0,
                                [t8.Bz]: tV && tB,
                                [t8.Qv]: tF && tB,
                                [t8.h9]: tD,
                                [t8.mr]: K,
                                [t8.Wn]: d.Fr,
                                [t8.Ls]: tQ,
                                [t8.AH]: t2,
                                [t8.z3]: null != L,
                            }),
                            children: [
                                tQ || t2 ? null : (0, l.jsx)(t7, { bars: tZ }),
                                (0, l.jsxs)("div", {
                                    ref: eI,
                                    onScroll: tf,
                                    className: r()(h, { [t8.xx]: !0, [t8.k6]: !el, [t8.Ri]: tZ.stacked.length > 0 }),
                                    children: [
                                        (0, l.jsx)(tm, { channelId: j.id, chatInputType: b }),
                                        b.hideAttachmentArea
                                            ? null
                                            : (0, l.jsx)(nu.A, { channelId: j.id, type: b, canAttachFiles: eZ }),
                                        (0, l.jsxs)("div", {
                                            className: r()(t8.vW, {
                                                [t8.BF]: tD,
                                                [t8.RL]: b !== eX.oU.EDIT && (null != tU || (tD && null == tU) || eF),
                                                [t8.fk]: b === eX.oU.THREAD_CREATION,
                                                [t8.TZ]:
                                                    b === eX.oU.CREATE_FORUM_POST || b === eX.oU.FORWARD_MESSAGE_INPUT,
                                                [t8.$i]: b === eX.oU.USER_PROFILE_REPLY,
                                            }),
                                            onMouseDown: tR,
                                            children: [
                                                t4,
                                                tU,
                                                (0, l.jsx)(p.vN, {
                                                    ringTarget: ec,
                                                    ringClassName: t8.Rg,
                                                    children: (0, l.jsx)(eQ.A, {
                                                        ref: eC,
                                                        id: x,
                                                        focused: R,
                                                        useSlate: e2,
                                                        textValue: a,
                                                        richValue: o,
                                                        disabled: eK,
                                                        placeholder: N,
                                                        required: v,
                                                        accessibilityLabel: T,
                                                        isPreviewing: (eF || eB) && e0,
                                                        channel: j,
                                                        type: b,
                                                        canPasteFiles: eZ,
                                                        uploadPromptCharacterCount: ea.CS1,
                                                        maxCharacterCount: Y ?? e3,
                                                        allowNewLines: $,
                                                        "aria-describedby": tX,
                                                        onChange: te,
                                                        onResize: tI,
                                                        onBlur: V,
                                                        onFocus: F,
                                                        onKeyDown: H,
                                                        onSubmit: tn,
                                                        onSubmitFailure: tk,
                                                        onTab: ty,
                                                        onEnter: tS,
                                                        onSpace: tv,
                                                        onMoveSelection: t_,
                                                        onSelectionChanged: e4,
                                                        onMaybeShowAutocomplete: ts,
                                                        onHideAutocomplete: tr,
                                                        promptToUpload: W,
                                                        fontSize: e8,
                                                        spellcheckEnabled: e7,
                                                        canOnlyUseTextCommands: tP,
                                                        className: r()(
                                                            {
                                                                [t8.QI]: b === eX.oU.THREAD_CREATION,
                                                                [t8.AV]: b === eX.oU.PROFILE_BIO_INPUT,
                                                                [t8.GR]: b === eX.oU.OVERLAY_INLINE_REPLY,
                                                            },
                                                            f,
                                                        ),
                                                        "aria-labelledby": Q,
                                                        showValueWhenDisabled: eo,
                                                    }),
                                                }),
                                                t9,
                                                t5,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(no, { channel: j, type: b, scheduledMessageDraft: er }),
                                e5 ? null : (0, l.jsx)(eh, { ref: ed, channel: j, canOnlyUseTextCommands: tP }),
                                (0, l.jsx)(ep.A, {
                                    ref: ti,
                                    channel: j,
                                    canMentionRoles: z,
                                    canMentionChannels: Z,
                                    useNewSlashCommands: e2,
                                    canOnlyUseTextCommands: tP,
                                    canSendStickers: b.stickers?.allowSending,
                                    canSendSoundmoji: b.soundmoji?.allowSending,
                                    textValue: a,
                                    focused: R,
                                    expressionPickerView: tN,
                                    type: b,
                                    targetRef: ec,
                                    editorRef: eC,
                                    onSendMessage: tn,
                                    onSendSticker: td,
                                    onVisibilityChange: tM,
                                    editorScrollerRef: eI,
                                    editorHeight: tE,
                                    barsHeight: 40 * tZ.floating.length,
                                    setValue: (e, t) => te?.(null, e, t),
                                    position: et,
                                }),
                                (0, l.jsx)(eO, { textValue: a, editorHeight: tE, channelId: j.id }),
                                ne,
                                en,
                            ],
                        }),
                        (0, l.jsx)(g.U, { error: L }),
                        tb
                            ? null
                            : (0, l.jsx)(eE.A, {
                                  positionTargetRef: ec,
                                  type: b,
                                  onSelectGIF: to,
                                  onSelectEmoji: tc,
                                  onSelectSticker: td,
                                  onSelectSound: th,
                                  channel: j,
                                  closeOnModalOuterClick: ei,
                                  parentModalKey: es,
                                  position: "top",
                                  align: "right",
                                  positionLayerClassName: t8.BD,
                              }),
                    ],
                }),
            })
        );
    }),
);
