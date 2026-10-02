n.d(t, {
    C: () => t8,
    Sk: () => ne,
    Zx: () => t1,
    v7: () => t7,
    L0: () => t4,
    N_: () => t3,
    MD: () => nt,
    Ay: () => nl,
    uW: () => nn,
    NO: () => t5,
    ck: () => t9,
    ml: () => t6,
    Vu: () => t2,
});
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(143236),
    o = n(284009),
    u = n.n(o),
    c = n(462180),
    d = n(607399),
    h = n(136722),
    m = n(17928),
    p = n(192308),
    f = n(559106),
    g = n(281595),
    x = n(465532),
    E = n(765671),
    S = n(775602),
    y = n(793574),
    C = n(688810),
    A = n(177640),
    b = n(989837),
    I = n(289873),
    v = n(268218),
    N = n(750506),
    T = n(60809),
    j = n(375708),
    k = n(836555);
let _ = { width: 500, height: T.$V },
    R = (0, v.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("609019"),
                n.e("324732"),
                n.e("105537"),
                n.e("896691"),
                n.e("779367"),
                n.e("992956"),
                n.e("7452"),
                n.e("60002"),
                n.e("189423"),
                n.e("49742"),
                n.e("403382"),
                n.e("597981"),
                n.e("622936"),
                n.e("216947"),
                n.e("172727"),
                n.e("460582"),
                n.e("458098"),
                n.e("826744"),
                n.e("507528"),
                n.e("76428"),
                n.e("834552"),
                n.e("993103"),
                n.e("397270"),
                n.e("695445"),
                n.e("571210"),
                n.e("890027"),
                n.e("638221"),
                n.e("88342"),
                n.e("936320"),
                n.e("311802"),
                n.e("698965"),
                n.e("27773"),
                n.e("132191"),
                n.e("37977"),
                n.e("354044"),
                n.e("437065"),
                n.e("235313"),
                n.e("682337"),
                n.e("538887"),
                n.e("636373"),
                n.e("726033"),
                n.e("655708"),
                n.e("454625"),
                n.e("280854"),
                n.e("335395"),
                n.e("371133"),
                n.e("408362"),
                n.e("715038"),
                n.e("252229"),
                n.e("653849"),
                n.e("522261"),
                n.e("678195"),
                n.e("472289"),
                n.e("918024"),
                n.e("341701"),
                n.e("774021"),
                n.e("639163"),
                n.e("583518"),
                n.e("499118"),
                n.e("336611"),
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
        renderLoader: () => (0, l.jsx)("div", { className: k.R4, style: _, children: (0, l.jsx)(I.y, {}) }),
    }),
    w = { height: T.$V },
    O = i.memo(function (e) {
        let { positionTargetRef: t, align: n, ...i } = e;
        return (0, l.jsx)("span", {
            style: T.sK,
            children: (0, l.jsx)(N.nE, {
                className: k.T8,
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
                        className: k.V6,
                        role: "dialog",
                        style: w,
                        "aria-label": j.intl.string(j.t["3CNGLK"]),
                        children: t && (0, l.jsx)(R, { ...i }),
                    });
                },
            }),
        });
    });
var L = n(861382),
    P = n(435558),
    M = n.n(P),
    D = n(537652),
    V = n(155718),
    U = n(95561),
    W = n(659280),
    F = n(579940),
    B = n(962125),
    K = n(915089),
    G = n(850992),
    H = n(887695),
    z = n(286509),
    q = n(721768),
    Q = n(842209),
    $ = n(210978),
    Z = n(392054),
    X = n(168186),
    J = n(866665),
    Y = n(939249),
    ee = n(88218),
    et = n(664929),
    en = n(934305);
let el = [16, 8, 8, 8];
function ei(e) {
    let {
            className: t,
            channel: n,
            sections: r,
            activeCategoryIndex: a,
            filteredSectionId: o,
            onSectionClick: u,
            applicationCommandListRef: c,
        } = e,
        d = i.useRef(null),
        h = i.useCallback(
            (e, t) => {
                let n = 8;
                return (r[t + 1]?.type === Z.Hf.BUILT_IN && (n += 8), 32 + n);
            },
            [r],
        ),
        m = i.useCallback((e, t) => (t ? 8 * (r[e + 1]?.type !== Z.Hf.BUILT_IN) : 8 * (0 !== e)), [r]),
        p = i.useCallback(
            (e, t) => {
                let i = r[t];
                if (null == i) return;
                let s = (0, et.Rg)(i),
                    c = 4 * (i.type === Z.Hf.BUILT_IN),
                    d = 32 - 2 * c,
                    h = (0, l.jsx)(s, {
                        channel: n,
                        section: i,
                        isSelected: null != o ? i.id === o : a === t,
                        padding: c,
                        width: d,
                        height: d,
                        selectable: !0,
                    }),
                    m = i.type !== Z.Hf.BUILT_IN && t < r.length - 1 && r[t + 1].type === Z.Hf.BUILT_IN;
                return (0, l.jsxs)(
                    "div",
                    {
                        className: en.uW,
                        children: [
                            (0, l.jsx)(J.m, {
                                text: i.name,
                                position: "right",
                                asContainer: !0,
                                children: (0, l.jsx)(Y.D, {
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
            [a, n, u, r, o],
        );
    return 0 === r.length
        ? null
        : (0, l.jsx)("div", {
              className: s()(t, en.iE),
              children: (0, l.jsx)(ee.A, {
                  categoryListRef: d,
                  expressionsListRef: c,
                  store: G.LS,
                  categories: r,
                  className: en.p_,
                  renderCategoryListItem: p,
                  rowCount: r.length,
                  categoryHeight: h,
                  listPadding: el,
                  getScrollOffsetForIndex: m,
              }),
          });
}
var er = n(524007),
    es = n(73510),
    ea = n(652215),
    eo = n(643904);
let eu = [8, 8, 0, 8],
    ec = M().debounce(() => {
        (0, U.zV)(ea.HAw.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300),
    ed = i.forwardRef(function (e, t) {
        let { channel: n, canOnlyUseTextCommands: r } = e,
            a = i.useRef(!1),
            o = i.useRef(0),
            [u, c] = i.useState(0),
            d = i.useRef(null),
            [h, m] = i.useState(!1),
            p = G.LS.useStore((e) => e.activeCategoryIndex);
        i.useEffect(() => {
            (0, U.zV)(ea.HAw.APPLICATION_COMMAND_BROWSER_OPENED);
        }, []);
        let {
                sectionDescriptors: f,
                activeSections: g,
                commandsByActiveSection: x,
                hasMoreAfter: E,
                commands: S,
                filteredSectionId: y,
                scrollDown: C,
                filterSection: A,
            } = Q.cu({
                context: { channel: n, type: "channel" },
                filters: {
                    commandTypes: [V.kc.CHAT],
                    builtIns: r ? $.n.ONLY_TEXT : $.n.ALLOW,
                    applicationCommands: !r,
                },
                options: { placeholderCount: 7, limit: es.Hi, includeFrecency: !0 },
                allowFetch: !0,
            }),
            b = (0, H.Fk)({
                activeCategoryIndex: p,
                isScrolling: a,
                listRef: d,
                onActiveCategoryIndexChange: (e) => {
                    let t = g[e];
                    if (null != t) {
                        let e = f.findIndex((e) => e.id === t.id);
                        G.LS.setActiveCategoryIndex(e);
                    }
                },
                scrollOffset: 20,
                searchQuery: "",
            });
        function I(e) {
            let t = g.length,
                n = x.reduce((e, t) => e + t.data.length, 0) - 7 * !!E;
            (E && e + 420 > 48 * t + 56 * n - 512 && C(), b(e), ec(), (o.current = e));
        }
        let v = i.useRef(I);
        (i.useEffect(() => {
            v.current = I;
        }),
            i.useEffect(() => {
                v.current(o.current);
            }, [S]));
        let N = i.useCallback((e) => (e !== g.length - 1 || E ? 16 : 0), [g.length, E]),
            T = x.map((e) => e.data.length);
        (i.useEffect(() => {
            null != d.current && h && null != u && d.current.scrollRowIntoView(u);
        }, [h, u]),
            i.useLayoutEffect(() => {
                null != y && d.current?.scrollToSectionTop(0);
            }, [S, y]));
        let k = i.useCallback(
                (e) => {
                    e.id === y || e.id === es.Ik.FRECENCY ? (A(null), d.current?.scrollToSectionTop(0)) : A(e.id);
                },
                [A, y],
            ),
            _ = i.useCallback(
                (e, t, l) => {
                    q.Gf({ channelId: n.id, command: e, section: t, location: Z.Oh.DISCOVERY, triggerSection: l });
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
                                l = f.find((e) => e.id === n.applicationId);
                            _(n, l, (0, X.$S)(e.section));
                            break;
                        }
                    return !0;
                },
                onMoveSelection: (e) => {
                    if (0 === S.length) return !0;
                    let t = 7 * !!E,
                        n = S.length + t,
                        l = null == u ? 0 : u + e;
                    return (l >= n ? (l = n - 1) : l < 0 && (l = 0), c(l), m(!0), !0);
                },
            }),
            [S.length, x, E, f, _, u],
        );
        let R = i.useCallback(
                (e) => {
                    let t = g[e];
                    if (null == t) return null;
                    let i = (0, et.Rg)(t),
                        r = (0, l.jsx)(i, { channel: n, section: t, width: 16, height: 16, padding: 0 });
                    return (0, l.jsx)(z.A, { className: eo.Km, icon: r, children: t.name }, e);
                },
                [n, g],
            ),
            w = i.useCallback(
                (e, t) => {
                    let n = e === g.length - 1,
                        i = g[e],
                        { data: r } = x[e];
                    return (0, l.jsxs)(
                        "ul",
                        {
                            role: "group",
                            "aria-label": i.name,
                            className: s()(eo.Wy, { [eo.YD]: n }),
                            children: [
                                t,
                                0 === r.length &&
                                    (0, l.jsx)(D.A, {
                                        message: j.intl.format(j.t.WoQXT6, { applicationName: i.name }),
                                        className: eo.qK,
                                    }),
                            ],
                        },
                        e,
                    );
                },
                [g, x],
            ),
            O = i.useCallback(
                (e, t) => {
                    let i = x[t.sectionIndex],
                        r = i.data[t.sectionRowIndex],
                        s = `${i.section.id}:${r?.id ?? e}`;
                    if (
                        null == r ||
                        (i.section.id !== r.applicationId && i.section.id !== es.Ik.FRECENCY) ||
                        r.inputType === Z.y$.PLACEHOLDER
                    )
                        return (0, l.jsx)(er.A, {}, s);
                    let a = f.find((e) => e.id === r.applicationId);
                    return (0, l.jsx)(
                        W.Ay.NewCommand,
                        {
                            index: e,
                            command: r,
                            channel: n,
                            className: eo.D5,
                            selected: u === e,
                            showImage: i.section.id !== r.applicationId,
                            section: a,
                            onClick: () => _(r, a, (0, X.$S)(i.section)),
                            onHover: () => {
                                (c(null), m(!1));
                            },
                        },
                        s,
                    );
                },
                [n, x, _, f, u],
            ),
            L = (0, K.GV)();
        return (
            (0, F.gf)(L, !0, (0, W.aI)(u)),
            i.useEffect(
                () => () => {
                    (0, F.nQ)();
                },
                [],
            ),
            (0, l.jsxs)(W.Ay, {
                id: L,
                className: eo.x9,
                innerClassName: eo.iE,
                onMouseDown: eh,
                children: [
                    (0, l.jsx)(ei, {
                        className: eo.H$,
                        channel: n,
                        sections: f,
                        filteredSectionId: y,
                        activeCategoryIndex: p,
                        onSectionClick: k,
                        applicationCommandListRef: d,
                    }),
                    (0, l.jsx)(B.A, {
                        role: "listbox",
                        className: eo.p_,
                        listPadding: eu,
                        onScroll: I,
                        renderRow: O,
                        renderSection: w,
                        renderSectionHeader: R,
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
function eh(e) {
    e.preventDefault();
}
var em = n(702841),
    ep = n(305070),
    ef = n(31498),
    eg = n(598071),
    ex = n(151271),
    eE = n(818666),
    eS = n(256265),
    ey = n(336807),
    eC = n(857071),
    eA = n(135621),
    eb = n(105330),
    eI = n(280450),
    ev = n(559908),
    eN = n(620141),
    eT = n(224964),
    ej = n(31408),
    ek = n(536283);
function e_(e) {
    let { editorHeight: t, textValue: n, channelId: l } = e,
        r = i.useRef(n),
        s = (0, eb.l)({ editorHeight: t }),
        a = (0, eT.A)(),
        o = (0, m.bG)([ev.Ay, eI.default], () => ev.Ay.isComboing(eI.default.getId(), l)),
        u = s?.left ?? 0,
        c = (s?.top ?? 0) - 16,
        d = 0 === n.length,
        h = i.useMemo(() => 0.05 > Math.random(), [d]);
    return (
        i.useEffect(() => {
            0 !== n.length && n !== r.current && o && (a.fire(u, c, h ? { sprite: ek.dR } : null), (r.current = n));
        }, [n, o, u, c, h, a]),
        null
    );
}
function eR(e) {
    return (0, l.jsx)(eN.A, { confettiLocation: ej.k.CHAT_INPUT, children: (0, l.jsx)(e_, { ...e }) });
}
var ew = n(931664),
    eO = n(631576),
    eL = n(522602);
let eP = /(!|\.|;|,|-|\u2014|\u2013|\?|"|')/g,
    eM = /(\n|\t|\s)/g;
var eD = n(194004),
    eV = n(406704),
    eU = n(885386),
    eW = n(951260),
    eF = n(696451),
    eB = n(576705),
    eK = n(309010),
    eG = n(638128),
    eH = n(287809),
    ez = n(821102),
    eq = n(174459),
    eQ = n(234320),
    e$ = n(625494),
    eZ = n(488926),
    eX = n(723702),
    eJ = n(486319),
    eY = n(355622),
    e0 = n(392553),
    e1 = n(834730),
    e2 = n(140735),
    e5 = n(176781),
    e8 = n(463930),
    e3 = n(935063),
    e6 = n(73392),
    e7 = n(650019),
    e4 = n(763754),
    e9 = n(967144),
    te = n(118517),
    tt = n(976860),
    tn = n(747926),
    tl = n(232835),
    ti = n(285796),
    tr = n(595347);
function ts(e) {
    let { onClick: t, "aria-label": n } = e;
    return (0, l.jsx)(Y.D, {
        className: tr.b,
        onClick: t,
        "aria-label": n,
        children: (0, l.jsx)(ti.a, { size: "md", color: "currentColor", className: tr.u }),
    });
}
var ta = n(558497);
let to = "channel-reply-bar-a11y-description";
function tu(e) {
    let { channel: t, message: n, replyChainLength: r } = e,
        s = i.useRef(r);
    return (
        i.useEffect(() => {
            s.current = r;
        }),
        i.useEffect(() => {
            (0, U.zV)(ea.HAw.THREAD_NUDGE_SHOWN, {
                type: "Reply Chain (3)",
                reply_chain_length: s.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t]),
        (0, l.jsxs)(Y.D, {
            onClick: function () {
                ((0, te.Jx)(t.id), (0, tn.Tv)(t, n, "Reply Chain Nudge"));
            },
            className: ta._r,
            focusProps: { offset: { right: -4, left: -4 } },
            children: [
                (0, l.jsx)(e1.E, {
                    color: "text-default",
                    className: ta.Qq,
                    variant: "text-sm/normal",
                    children: j.intl.format(j.t.B3V0FM, { count: Math.min(10, r + 1) }),
                }),
                (0, l.jsx)(e1.E, {
                    color: "text-link",
                    className: ta.NG,
                    variant: "text-sm/semibold",
                    children: j.intl.string(j.t.rBIGBL),
                }),
            ],
        })
    );
}
function tc(e) {
    let t,
        n,
        { reply: r, chatInputType: a } = e,
        { channel: o, message: u, shouldMention: c, showMentionToggle: d, mediaMention: h } = r,
        {
            guildId: p,
            nick: f,
            colorString: g,
            colorStrings: x,
            colorRoleName: E,
            authorId: S,
            displayNameStyles: y,
        } = (0, e4.Ay)(u),
        C = (0, e9.gn)(p, S, x),
        A = (0, e6.a)({ displayNameStyles: y }),
        b = (0, e7.A)(h, u.attachments),
        I =
            ((t = o.id),
            (n = u.id),
            (0, m.bG)(
                [tl.A],
                () => {
                    let e = n;
                    for (let n = 0; n < 10; n++) {
                        let l = tl.A.getMessage(t, e);
                        if (l?.type !== ea.lAJ.REPLY || null == l.messageReference) return n;
                        e = l.messageReference.message_id;
                    }
                    return 10;
                },
                [t, n],
            )),
        v = (0, eV.n)(o, u),
        N = a.showThreadPromptOnReply && I >= 2 && v;
    return (0, l.jsx)("div", {
        className: ta.e1,
        children: (0, l.jsxs)("div", {
            className: ta.kL,
            children: [
                (0, l.jsxs)("div", {
                    className: ta.eU,
                    children: [
                        (0, l.jsx)(e2.A, { id: to, children: j.intl.formatToPlainString(j.t.EpJL4E, { username: f }) }),
                        (0, l.jsx)(Y.D, {
                            onClick: function () {
                                return (0, tt.pX)(ea.BVt.CHANNEL(o.getGuildId(), o.id, u.id));
                            },
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, l.jsx)(e1.E, {
                                color: "text-default",
                                className: s()(ta.Qq, ta.Fn),
                                variant: "text-sm/normal",
                                children: j.intl.format(j.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, l.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    "\xa0",
                                                    b?.title != null
                                                        ? (0, l.jsxs)("span", {
                                                              className: ta.H8,
                                                              children: [
                                                                  b.isClip &&
                                                                      (0, l.jsx)(e5.x, {
                                                                          size: "xs",
                                                                          color: "currentColor",
                                                                          className: ta.gS,
                                                                      }),
                                                                  (0, l.jsx)(e1.E, {
                                                                      variant: "text-sm/semibold",
                                                                      color: "text-default",
                                                                      className: ta.NV,
                                                                      children: b.title,
                                                                  }),
                                                                  (0, l.jsxs)(e1.E, {
                                                                      variant: "text-sm/normal",
                                                                      color: "text-link",
                                                                      children: ["@", b.timestamp],
                                                                  }),
                                                              ],
                                                          })
                                                        : (0, l.jsx)(e8.g, {
                                                              className: ta.UU,
                                                              name: f,
                                                              colorString: g,
                                                              colorStrings: C,
                                                              roleName: E,
                                                              displayNameStylesFont: A,
                                                          }),
                                                ],
                                            },
                                            t,
                                        ),
                                }),
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: ta.o1,
                            children: [
                                d &&
                                    (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(J.m, {
                                                asContainer: !0,
                                                text: c ? j.intl.string(j.t.DH2o6R) : j.intl.string(j.t.utGGIY),
                                                children: (0, l.jsx)(Y.D, {
                                                    role: "switch",
                                                    "aria-checked": c,
                                                    onClick: function (e) {
                                                        (e.stopPropagation(), (0, te.vz)(o.id, !c));
                                                    },
                                                    children: (0, l.jsxs)(e1.E, {
                                                        variant: "text-sm/bold",
                                                        color: c ? "text-link" : "text-muted",
                                                        className: ta.Z4,
                                                        children: [
                                                            (0, l.jsx)(e3.X, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": j.intl.string(j.t.P8tvKG),
                                                                className: ta.mM,
                                                            }),
                                                            c ? j.intl.string(j.t.p9jC2r) : j.intl.string(j.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, l.jsx)("div", { className: ta.me, "aria-hidden": !0 }),
                                        ],
                                    }),
                                (0, l.jsx)(ts, {
                                    onClick: function (e) {
                                        (e.stopPropagation(), (0, te.Jx)(o.id));
                                    },
                                    "aria-label": j.intl.string(j.t.jSnJGT),
                                }),
                            ],
                        }),
                    ],
                }),
                N && (0, l.jsx)(tu, { channel: o, message: u, replyChainLength: I }),
            ],
        }),
    });
}
var td = n(749314),
    th = n(148355),
    tm = n(218782);
let tp = i.memo(function (e) {
    let { channelId: t, chatInputType: n } = e,
        [r, s] = i.useState(null),
        a = (0, m.bG)([ew.A], () => ew.A.getStickerPreview(t, n.drafts.type));
    return n.stickers?.allowSending && null != a && 0 !== a.length
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", {
                      className: tm.Tz,
                      children: a.map((e) =>
                          (0, l.jsxs)(
                              "div",
                              {
                                  className: tm.dp,
                                  children: [
                                      (0, l.jsx)(Y.D, {
                                          onFocus: () => s(e.id),
                                          onBlur: () => s(null),
                                          className: tm.b,
                                          "aria-label": j.intl.formatToPlainString(j.t.BGAQRd, { name: e.name }),
                                          onClick: () => (0, eO.x5)(t, n.drafts.type),
                                          children: (0, l.jsx)("div", {
                                              className: tm.Nk,
                                              children: (0, l.jsx)(ti.a, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: tm.ut,
                                              }),
                                          }),
                                      }),
                                      (0, l.jsx)(th.A, {
                                          isInteracting: r === e.id,
                                          className: tm.UV,
                                          size: 48,
                                          sticker: e,
                                      }),
                                  ],
                              },
                              e.id,
                          ),
                      ),
                  }),
                  (0, l.jsx)(td.A, { className: tm.R }),
              ],
          })
        : null;
});
var tf = n(612394);
n(321073);
var tg = n(442433);
n(827669);
var tx = n(811559);
function tE(e) {
    let t,
        r,
        a,
        { className: o, activeCommand: u, activeOption: c, optionStates: d, channelId: h } = e,
        m = i.useCallback(
            (e) => {
                let t = u?.rootCommand?.id;
                null == t
                    ? e.preventDefault()
                    : (0, tg.L3)(e, async () => {
                          let { default: e } = await Promise.all([n.e("638221"), n.e("715687")]).then(
                              n.bind(n, 646938),
                          );
                          return (n) => (0, l.jsx)(e, { ...n, id: t, label: j.intl.string(j.t.oJ1Muw) });
                      });
            },
            [u?.rootCommand?.id],
        ),
        p = i.useCallback(() => {
            q.Gf({ channelId: h, command: null, section: null });
        }, [h]);
    if (null == u) return null;
    if (null != c) {
        let e = d[c.name].lastValidationResult;
        ((t = c.displayName), (r = c.displayDescription), (a = e?.success ? null : e?.error));
    } else ((t = `/${u.displayName}`), (r = u.displayDescription), (a = null));
    return (0, l.jsxs)("div", {
        className: s()(o, tx.M0),
        onContextMenu: m,
        children: [
            (0, l.jsxs)("div", {
                className: tx.iz,
                children: [
                    (0, l.jsx)(e1.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        tag: "span",
                        children: t,
                    }),
                    null != a
                        ? (0, l.jsx)("span", { className: tx.z3, children: a })
                        : (0, l.jsx)("span", { className: tx.h_, children: r }),
                ],
            }),
            (0, l.jsx)("div", {
                className: tx.o1,
                children: (0, l.jsx)(ts, { onClick: p, "aria-label": j.intl.string(j.t.cpT0Cq) }),
            }),
        ],
    });
}
var tS = n(73153),
    ty = n(734057);
let tC = new Set();
class tA extends m.Ay.PersistedStore {
    static displayName = "PTOStore";
    static persistKey = "PTOStore";
    initialize(e) {
        (this.waitFor(ty.A, eF.Ay, eK.Ay, eH.default), null != e && (tC = new Set(e)));
    }
    hasId(e) {
        return tC.has(e);
    }
    getState() {
        return [...tC];
    }
}
let tb = new tA(tS.h, {});
function tI() {
    let e = eK.Ay.getChannelId();
    if (null == e) return;
    let t = ty.A.getChannel(e);
    null != t && t.isPrivate() && (tC.has(t.getRecipientId()) || (tC.add(t.getRecipientId()), tb.emitChange()));
}
function tv() {
    return (0, l.jsxs)("div", {
        className: ta.eU,
        children: [
            (0, l.jsx)(e1.E, {
                variant: "text-sm/medium",
                className: s()(ta.Qq, ta.Fn),
                children: j.intl.string(j.t["2UvR1E"]),
            }),
            (0, l.jsx)("div", {
                className: ta.o1,
                children: (0, l.jsx)(ts, { onClick: tI, "aria-label": j.intl.string(j.t.cpT0Cq) }),
            }),
        ],
    });
}
var tN = n(541188);
function tT(e) {
    let { error: t } = e;
    return (0, l.jsxs)("div", {
        className: tN.M,
        children: [
            (0, l.jsx)(e1.E, { variant: "text-xs/bold", color: "text-strong", children: j.intl.string(j.t["4VDCG0"]) }),
            t
                ? (0, l.jsx)(e1.E, { variant: "text-xs/medium", className: tN.z, children: j.intl.string(j.t.qNorwt) })
                : (0, l.jsx)(e1.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: j.intl.string(j.t["260qZS"]),
                  }),
        ],
    });
}
var tj = n(25201),
    tk = n(926321),
    t_ = n(399482);
function tR(e) {
    var t, n;
    let { channelId: i } = e,
        r = (0, tj.vR)(i);
    if (null == r) return null;
    let a = r.rolling,
        o =
            ((t = a),
            (n = r.results),
            t
                ? j.intl.string(j.t["x/FIRX"])
                : null == n
                  ? ""
                  : j.intl.formatToPlainString(j.t.xU4pF1, { total: n.reduce((e, t) => e + t, 0) }));
    return (0, l.jsx)("div", {
        className: s()(t_.kL, { [t_.Kd]: !r.dismissing }),
        children: (0, l.jsxs)("div", {
            className: t_.Qs,
            children: [
                (0, l.jsx)(tk.DiceIcon, { size: "md", className: s()({ [t_.su]: a }) }),
                (0, l.jsx)(e1.E, { color: "text-default", variant: "text-sm/normal", children: o }),
            ],
        }),
    });
}
var tw = n(575293),
    tO = n(536637),
    tL = n.n(tO),
    tP = n(31717),
    tM = n(551640),
    tD = n(970244),
    tV = n(29621);
function tU(e) {
    let { channel: t, scheduledMessageDraft: n } = e,
        { scheduledTimestamp: i } = n;
    return (0, l.jsx)("div", {
        className: tV.e1,
        children: (0, l.jsx)("div", {
            className: tV.kL,
            children: (0, l.jsxs)("div", {
                className: tV.g3,
                children: [
                    (0, l.jsx)(Y.D, {
                        className: tV.a3,
                        "aria-label": j.intl.string(j.t.SBcdAN),
                        onClick: function () {
                            (0, tD.e0)({
                                channel: t,
                                defaultValue: tL()(i),
                                entryPoint: tM.t.COMPOSER_BAR,
                                isEditing: !0,
                            });
                        },
                        children: (0, l.jsx)(e1.E, {
                            color: "text-default",
                            className: tV.Qq,
                            variant: "text-sm/normal",
                            children: j.intl.formatToPlainString(j.t["MQcRX/"], { timestamp: new Date(i).valueOf() }),
                        }),
                    }),
                    (0, l.jsx)("div", {
                        className: tV.o1,
                        children: (0, l.jsx)(ts, {
                            onClick: function (e) {
                                (e.stopPropagation(), x.A.clearDraft(t.id, tP.C.ScheduledMessage));
                            },
                            "aria-label": j.intl.string(j.t.cpT0Cq),
                        }),
                    }),
                ],
            }),
        }),
    });
}
var tW = n(495088);
function tF(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, l.jsx)("div", { children: e }, t)),
        r = t.floating.map((e, t) => (0, l.jsx)(i.Fragment, { children: e }, t));
    return 0 === n.length && 0 === r.length
        ? null
        : (0, l.jsxs)(i.Fragment, {
              children: [
                  r.length > 0 && (0, l.jsx)("div", { className: tW.Vq, children: r }),
                  n.length > 0 && (0, l.jsx)("div", { className: tW.MD, children: n }),
              ],
          });
}
var tB = n(123583),
    tK = n(822610),
    tG = n(625928),
    tH = n(135261),
    tz = n(820066),
    tq = n(922016),
    tQ = n(375499),
    t$ = n(267889),
    tZ = n(307731),
    tX = n(9287);
function tJ(e) {
    let { getSlateEditor: t, onInsertEmoji: n, type: r, channel: s } = e,
        a = t(),
        o = i.useRef(null);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              id: "slate-toolbar",
              className: tX.aL,
              children: [
                  (0, l.jsx)("div", {
                      className: tX.Wy,
                      children: (0, l.jsx)(tH.P, {
                          slateEditor: a,
                          options: r.markdown,
                          iconClassName: tX.C7,
                          dividerClassName: tX.us,
                      }),
                  }),
                  (0, l.jsx)(tq.Y, {
                      targetElementRef: o,
                      renderPopout: function (e) {
                          let { closePopout: t } = e;
                          return (0, l.jsx)(t$.A, {
                              persistSearch: !0,
                              channel: s,
                              closePopout: t,
                              onSelectEmoji: (e) => {
                                  let { emoji: l, willClose: i } = e;
                                  (n({ emoji: l, willClose: i }), i && t());
                              },
                              pickerIntention:
                                  r.expressionPicker?.emojiIntention ?? tZ.EmojiIntention.COMMUNITY_CONTENT,
                          });
                      },
                      position: "bottom",
                      animation: tq.Y.Animation.NONE,
                      align: "left",
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, l.jsx)(tQ.A, { ...e, ref: o, active: n, className: tX.Z8, tabIndex: 0 });
                      },
                  }),
              ],
          });
}
var tY = n(263582),
    t0 = n(698279);
function t1(e, t, r, s, a) {
    let [o, u] = i.useState(!1),
        c = i.useCallback(
            (i, d, h, m, f, g) => {
                if (o) return;
                u(!0);
                let E = ew.A.getStickerPreview(a, t.drafts.type)?.map((e) => e.id) ?? [],
                    S = eL.A.getUploads(a, t.drafts.type) ?? [];
                if (null == d && !m && !f && (0, eS.xz)(S, a)) {
                    (u(!1),
                        (0, p.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("385663"),
                                n.e("132839"),
                                n.e("42809"),
                                n.e("560570"),
                                n.e("896691"),
                                n.e("779367"),
                                n.e("992956"),
                                n.e("7452"),
                                n.e("60002"),
                                n.e("189423"),
                                n.e("797845"),
                                n.e("491899"),
                                n.e("64097"),
                                n.e("639887"),
                                n.e("567999"),
                                n.e("272223"),
                                n.e("239729"),
                                n.e("505634"),
                                n.e("267526"),
                                n.e("801348"),
                                n.e("377016"),
                                n.e("17256"),
                                n.e("852197"),
                                n.e("225307"),
                                n.e("332165"),
                                n.e("618416"),
                                n.e("524434"),
                                n.e("849162"),
                                n.e("229511"),
                                n.e("202342"),
                                n.e("908346"),
                                n.e("922706"),
                                n.e("125729"),
                                n.e("249681"),
                                n.e("76428"),
                                n.e("481647"),
                                n.e("776602"),
                                n.e("140402"),
                                n.e("21921"),
                                n.e("695445"),
                                n.e("890027"),
                                n.e("139970"),
                                n.e("179049"),
                                n.e("294857"),
                                n.e("179745"),
                                n.e("693832"),
                                n.e("193158"),
                                n.e("803332"),
                                n.e("818465"),
                                n.e("432209"),
                                n.e("455924"),
                                n.e("250478"),
                                n.e("858337"),
                                n.e("979630"),
                                n.e("260218"),
                                n.e("59413"),
                                n.e("968763"),
                                n.e("356296"),
                                n.e("118917"),
                                n.e("824547"),
                                n.e("935948"),
                                n.e("562168"),
                                n.e("846523"),
                                n.e("919307"),
                                n.e("126437"),
                                n.e("24922"),
                                n.e("698547"),
                                n.e("24889"),
                                n.e("895532"),
                                n.e("296467"),
                                n.e("98972"),
                                n.e("647177"),
                                n.e("431649"),
                                n.e("836150"),
                                n.e("699011"),
                                n.e("964320"),
                                n.e("472789"),
                                n.e("827335"),
                                n.e("508371"),
                                n.e("150200"),
                                n.e("333097"),
                                n.e("412743"),
                                n.e("710014"),
                                n.e("486155"),
                                n.e("335986"),
                                n.e("386861"),
                                n.e("777848"),
                                n.e("770961"),
                                n.e("623685"),
                                n.e("842516"),
                                n.e("684688"),
                            ]).then(n.bind(n, 538899));
                            return (t) =>
                                (0, l.jsx)(e, {
                                    ...t,
                                    threadId: a,
                                    attachments: S,
                                    sendMessage: () => c(i, void 0, void 0, void 0, !0),
                                });
                        }));
                    return;
                }
                e({
                    value: i,
                    uploads: S,
                    stickers: E,
                    command: d,
                    commandOptionValues: h,
                    isGif: m,
                    gifMetadata: g,
                }).then((e) => {
                    let { shouldClear: n, shouldRefocus: l } = e,
                        i = (n && t.submit?.clearOnSubmit) ?? !1,
                        o = null != r.current;
                    (i &&
                        (a !== eK.Ay.getChannelId()
                            ? x.A.saveDraft(a, "", t.drafts.type)
                            : o && (r.current?.clearValue(), s.current?.hide())),
                        o && (u(!1), (0, ex.v8)(), l && r.current?.focus()));
                });
            },
            [r, s, e, o, t, a],
        );
    return {
        submitting: o,
        submit: c,
        handleSubmit: i.useCallback(
            (e) => {
                r?.current?.submit(e);
            },
            [r],
        ),
    };
}
function t2(e, t, n) {
    return i.useCallback(
        (l, i) => {
            if (i?.shiftKey === !0 || t === eY.oU.CREATE_FORUM_POST || t === eY.oU.CREATE_ANNOUNCEMENT_POST)
                n.current?.insertGIF(l);
            else {
                let t = {
                    gif_provider: l.provider ?? ey.jQ,
                    load_id: ez.A.getAnalyticsID(),
                    source_object: "GIF Picker",
                    gif_url: l.url,
                    gif_id: l.id,
                };
                e(l.url, void 0, void 0, !0, void 0, t);
            }
            ((0, ex.v8)(), n.current?.focus());
        },
        [n, e, t],
    );
}
function t5(e) {
    return i.useCallback(
        (t) => {
            let { emoji: n, willClose: l } = t,
                i = e.current;
            (null != n && null != i && i.insertEmoji({ emoji: n, willClose: l }), l && (0, ex.v8)());
        },
        [e],
    );
}
function t8(e) {
    let { editorRef: t, disabled: n, textValue: l, channelId: r, chatInputType: s, submit: a } = e,
        { analyticsLocations: o } = (0, C.Ay)();
    return i.useCallback(
        (e, i) => {
            n ||
                (s === eY.oU.CREATE_ANNOUNCEMENT_POST ||
                s === eY.oU.CREATE_FORUM_POST ||
                (function (e, t, n, l) {
                    if (eL.A.getUploadCount(n, l) > 0) return !0;
                    let i = ew.A.getStickerPreview(n, l);
                    if (null != i && i.length > 0) return !0;
                    switch (e) {
                        case eD.D6.STICKER_PICKER:
                            return "" !== t.trim();
                        case eD.D6.AUTOCOMPLETE:
                            var r;
                            return (
                                (null == (r = t) ? [] : r.replace(eP, "").replace(eM, " ").trim().split(" ")).length > 1
                            );
                        case eD.D6.BUILT_IN_INTEGRATION:
                        default:
                            return !1;
                    }
                })(i, l, r, s.drafts.type)
                    ? ((0, tf.fh)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != ew.A.getStickerPreview(r, s.drafts.type),
                          analyticsLocations: o,
                      }),
                      (0, eO.$x)(r, e, s.drafts.type))
                    : (a({ value: "", uploads: void 0, stickers: [e.id] }), t.current?.clearValue()),
                (0, ex.v8)(),
                t.current?.focus());
        },
        [n, l, r, t, o, a, s],
    );
}
function t3(e, t, n) {
    let l = i.useCallback(() => {
            t || (0, ex.r$)(t0.kx.EMOJI, e, n);
        }, [t, e, n]),
        r = i.useCallback(() => {
            !t && e.gifs?.allowSending && (0, ex.r$)(t0.kx.GIF, e, n);
        }, [t, e, n]),
        s = i.useCallback(() => {
            !t && e.stickers?.allowSending && (0, ex.r$)(t0.kx.STICKER, e, n);
        }, [t, e, n]);
    ((0, eQ.Vo)({ event: ea.jej.TOGGLE_EMOJI_POPOUT, handler: l }),
        (0, eQ.Vo)({ event: ea.jej.TOGGLE_GIF_PICKER, handler: r }),
        (0, eQ.Vo)({ event: ea.jej.TOGGLE_STICKER_PICKER, handler: s }));
}
function t6(e, t, n) {
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
function t7() {
    let e = i.useRef(null),
        t = i.useCallback(() => {
            e.current?.onMaybeShowAutocomplete();
        }, []),
        n = i.useCallback(() => {
            e.current?.onHideAutocomplete();
        }, []);
    return { autocompleteRef: e, handleMaybeShowAutocomplete: t, handleHideAutocomplete: n };
}
function t4(e) {
    let t = i.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
}
function t9(e) {
    let [t, n] = i.useState(0);
    return {
        editorHeight: t,
        handleResize: i.useCallback(
            (t) => {
                (n(t ?? 0), e?.(t));
            },
            [e],
        ),
    };
}
function ne(e, t, n, l) {
    let i = e.getGuildId(),
        r = (0, m.bG)([eC.A], () => null != i && eC.A.isLurking(i), [i]),
        s = (0, m.bG)([eF.Ay, eH.default], () => {
            let e = eH.default.getCurrentUser();
            return (null != i && null != e ? eF.Ay.getMember(i, e.id)?.isPending : null) ?? !1;
        }),
        a = (0, m.cf)(
            [eB.A],
            () => {
                let i = e.isPrivate(),
                    r = eB.A.computePermissions(e),
                    a = h.zy(r, ea.xBc.CREATE_PUBLIC_THREADS) || h.zy(r, ea.xBc.CREATE_PRIVATE_THREADS),
                    o =
                        (!t.permissions?.requireCreateTherads || a) &&
                        (!t.permissions?.requireSendMessages || h.zy(r, ea.xBc.SEND_MESSAGES)),
                    u = o && h.zy(r, ea.xBc.ATTACH_FILES),
                    c = null != n,
                    d = (0, eV.UJ)(e);
                return {
                    disabled: l || s || (!i && !o) || d,
                    canAttachFiles: !0 === t.attachments && (i || s || u || c),
                    canCreateThreads: a,
                    canEveryoneSendMessages: eZ.MJ(ea.xBc.SEND_MESSAGES, e),
                };
            },
            [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, l, s],
        );
    return { isLurking: r, isPendingMember: s, ...a };
}
function nt(e, t, n) {
    let [l, r, s] = (0, ex.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], c.x),
        a = (0, m.bG)([b.A], () => b.A.shouldShowPopup() && b.A.activeViewType() === e && b.A.activeChannelId() === n);
    i.useEffect(
        () => () => {
            (0, ex.v8)(e, n);
        },
        [e, n],
    );
    let o = i.useCallback(() => {
            null != l || a || t.current?.handleOuterClick();
        }, [l, a, t]),
        u = null == l || null == r || r !== e || s !== n;
    return { expressionPickerView: l, shouldHideExpressionPicker: u, handleOuterClick: o };
}
function nn(e, t) {
    return {
        handleAutocompleteVisibilityChange: i.useCallback(
            (n) => {
                n && (0, ex.v8)(e, t);
            },
            [e, t],
        ),
    };
}
let nl = i.memo(
    i.forwardRef(function (e, t) {
        let n,
            r,
            {
                textValue: a,
                richValue: o,
                className: c,
                innerClassName: h,
                editorClassName: p,
                id: x,
                required: I,
                disabled: v,
                placeholder: N,
                accessibilityLabel: T,
                channel: j,
                type: k,
                focused: _,
                error: R,
                renderAttachButton: w,
                renderApplicationCommandIcon: P,
                renderButtons: M,
                pendingReply: D,
                onChange: V,
                onResize: U,
                onBlur: W,
                onFocus: F,
                onKeyDown: B,
                onSubmit: K,
                promptToUpload: G,
                highlighted: H,
                canMentionRoles: z,
                canMentionChannels: q,
                maxCharacterCount: Q,
                showRemainingCharsAfterCount: $,
                allowNewLines: Z = !0,
                characterCountClassName: X,
                "aria-describedby": J,
                "aria-labelledby": Y,
                setEditorRef: ee,
                autoCompletePosition: et,
                children: en,
                disableThemedBackground: el = !1,
                emojiPickerCloseOnModalOuterClick: ei,
                parentModalKey: er,
                scheduledMessageDraft: es,
                showValueWhenDisabled: eo = !1,
            } = e;
        u()(null != k, "chat input type must be set");
        let { analyticsLocations: eu } = (0, C.Ay)(y.A.CHANNEL_TEXT_AREA),
            ec = t4(t),
            eh = i.useRef(null),
            eS = i.useRef(null),
            ey = i.useRef(null),
            eC = i.useRef(null),
            eb = i.useRef(null),
            eI = i.useCallback(() => ey.current?.getSlateEditor() ?? null, []);
        ee?.(ey.current);
        let ev = (0, A.A)(j),
            eN = (0, eW.n)("ChannelTextAreaContainer"),
            eT = (0, m.cf)([S.Ay], () => ({
                expressionPickerFormat: S.Ay.expressionPickerFormat,
                condensePickerWhenNarrow: S.Ay.condensePickerWhenNarrow,
            })),
            ej = eN ? eT.expressionPickerFormat : S.IG.FLEXIBLE,
            ek = !eN || eT.condensePickerWhenNarrow,
            [e_, ew] = i.useState(!ev);
        (0, E.i4)(ec, (e) => {
            let { width: t } = e;
            return ew(!ev && (null == t || t > 450));
        });
        let eO = ej === S.IG.HIDDEN,
            eL = ej === S.IG.CONDENSED || (ej === S.IG.FLEXIBLE && ek && !e_),
            { activeCommand: eP, activeCommandSection: eM } = (0, m.cf)([L.A], () => ({
                activeCommand: k.commands?.enabled ? L.A.getActiveCommand(j.id) : null,
                activeCommandSection: k.commands?.enabled ? L.A.getActiveCommandSection(j.id) : null,
            })),
            {
                isLurking: eD,
                isPendingMember: eV,
                disabled: eB,
                canAttachFiles: eK,
                canCreateThreads: ez,
                canEveryoneSendMessages: eQ,
            } = ne(j, k, eP, v),
            eZ = k.toolbarType === eY.O1.STATIC,
            e1 = !eU.D_.useSetting() && !(0, eX.isAndroidWeb)() && null != window.ResizeObserver,
            e2 = !e1 || !k.commands?.enabled || !_ || "/" !== a,
            e5 = (0, eA.A)(),
            { fontSize: e8 } = (0, m.cf)([S.Ay], () => ({ fontSize: S.Ay.fontSize })),
            e3 = (0, m.bG)([eG.A], () => eG.A.isEnabled());
        t3(k, eB, j.id);
        let { eventEmitter: e6, handleEditorSelectionChanged: e7 } = t6(ey, a, o),
            e4 = i.useRef(a);
        e4.current = a;
        let e9 = i.useCallback(
                (e, t, n) => {
                    ("/" === t && "" === e4.current && k.commands?.enabled && e6.emit("command-sentinel-typed"),
                        V?.(e, t, n));
                },
                [V, k.commands?.enabled, e6],
            ),
            { submitting: te, submit: tt, handleSubmit: tn } = t1(K, k, ey, eb, j.id),
            { autocompleteRef: tl, handleMaybeShowAutocomplete: ti, handleHideAutocomplete: tr } = t7(),
            ts = t2(tt, k, ey),
            ta = t5(ey),
            tu = t8({ editorRef: ey, disabled: eB, textValue: a, channelId: j.id, chatInputType: k, submit: K }),
            td = i.useCallback(
                (e, t, n) => {
                    let l = ey.current;
                    (null != e &&
                        null != l &&
                        (eq.default.track(ea.HAw.SOUNDMOJI_SELECT, {
                            channel_id: j.id,
                            guild_id: j.guild_id,
                            sound_guild_id: e.guildId,
                            sound_id: e.soundId,
                            source: t,
                        }),
                        l.insertSound(e)),
                        n && (0, ex.v8)(),
                        l?.focus());
                },
                [ey, j.id, j.guild_id],
            ),
            th = i.useCallback(() => eb?.current?.hide(), []),
            { editorHeight: tm, handleResize: tf } = t9(U),
            {
                handleTab: tg,
                handleEnter: tx,
                handleSpace: tS,
                handleMoveSelection: ty,
            } = ((n = i.useCallback(
                () => !!(!e2 && eh.current?.onTabOrEnter(!1)) || tl.current?.onTabOrEnter(!1) || !1,
                [e2, eh, tl],
            )),
            (r = i.useCallback(
                () => !!(!e2 && eh.current?.onTabOrEnter(!0)) || tl.current?.onTabOrEnter(!0) || !1,
                [e2, eh, tl],
            )),
            {
                handleTab: n,
                handleEnter: r,
                handleSpace: i.useCallback(() => tl.current?.onSpace() || !1, [tl]),
                handleMoveSelection: i.useCallback(
                    (e) => !!(!e2 && eh.current?.onMoveSelection(e)) || tl.current?.onMoveSelection(e) || !1,
                    [e2, eh, tl],
                ),
            }),
            { expressionPickerView: tA, shouldHideExpressionPicker: tI, handleOuterClick: tN } = nt(k, ey, j.id),
            { selectedAutocompleteInputType: tk, selectedAutocompleteInputError: t_ } = (function (e, t) {
                let [n, l] = i.useState({ selectedAutocompleteInputType: null, selectedAutocompleteInputError: !1 }),
                    r = i.useCallback(() => {
                        let e,
                            n = t.current?.getSlateEditor();
                        (null != n && (e = tz.VW.getSelectedParentOfType(n, ef.mk)?.[0]),
                            l({
                                selectedAutocompleteInputType: e?.type ?? null,
                                selectedAutocompleteInputError: e?.error ?? !1,
                            }));
                    }, [t]);
                return (
                    i.useEffect(
                        () => (
                            e.on("selection-changed", r),
                            e.on("submit-failure", r),
                            r(),
                            () => {
                                (e.off("selection-changed", r), e.on("submit-failure", r));
                            }
                        ),
                        [r, e],
                    ),
                    n
                );
            })(e6, ey),
            { handleAutocompleteVisibilityChange: tO } = nn(k, j.id),
            tL = (function (e) {
                let { type: t, channelId: n } = e;
                return (0, em.bG)(
                    [b.A],
                    () => {
                        let e = b.A.activeViewType();
                        return null != e && e === t && b.A.activeChannelId() === n && b.A.shouldShowPopup();
                    },
                    [t, n],
                );
            })({ type: k, channelId: j.id }),
            tP = i.useCallback(() => {
                e6.emit("submit-failure");
            }, [e6]);
        (0, eJ.R)(e6, j.guild_id, j.id);
        let tM = null != D,
            tD = (eB && !((eD || eV) && eQ)) || (te && k.submit?.useDisabledStylesOnSubmit),
            tV = null;
        null != eP ? (tV = P?.(eP, eM, tW.g$)) : (!eB || ez) && (tV = w?.(tM, tW.g$));
        let { isVisible: tq, showsUpsell: tQ } = (0, tY.A)({
                type: k,
                textValue: a,
                maxCharacterCount: Q,
                showRemainingCharsAfterCount: $,
            }),
            t$ = e1 && null != o && !eB && k.showCharacterCount && null == eP,
            tZ = e1 && !__OVERLAY__ && null != o && null == eP && k.toolbarType !== eY.O1.NONE && !eB,
            tX = (function (e) {
                let {
                        channel: t,
                        type: n,
                        activeCommand: r,
                        pendingReply: s,
                        scheduledMessageDraft: a,
                        selectedAutocompleteInputType: o,
                        selectedAutocompleteInputError: u,
                    } = e,
                    { activeCommandOption: c, activeCommandOptionStates: d } = (0, m.cf)([L.A], () => ({
                        activeCommandOption: L.A.getActiveOption(t.id),
                        activeCommandOptionStates: L.A.getOptionStates(t.id),
                    })),
                    h = (0, m.bG)([eF.Ay, eH.default, tb], () => {
                        let e = eH.default.getCurrentUser();
                        if (null == e || !e.isStaff() || !t.isDM()) return !1;
                        let n = eH.default.getUser(t.getRecipientId());
                        if (!n?.isStaff()) return !1;
                        let l = eF.Ay.getNicknames(n.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
                        return l ? !tb.hasId(n.id) && l : (tC.delete(n.id) && tb.emitChange(), !1);
                    }),
                    p = (0, tj.Ay)((e) => e.channelId === t.id);
                return i.useMemo(() => {
                    let e = [],
                        i = [];
                    return (
                        null != t.guild_id &&
                            n === eY.oU.NORMAL &&
                            i.push((0, l.jsx)(tw.A, { guildId: t.guild_id, channel: t, className: tW.UW })),
                        null != r &&
                            e.push(
                                (0, l.jsx)(tE, {
                                    activeCommand: r,
                                    activeOption: c ?? null,
                                    optionStates: d,
                                    channelId: t.id,
                                }),
                            ),
                        null != s && e.push((0, l.jsx)(tc, { reply: s, chatInputType: n })),
                        h && e.push((0, l.jsx)(tv, {})),
                        null != a && e.push((0, l.jsx)(tU, { channel: t, scheduledMessageDraft: a })),
                        "timestampMentionInput" === o && i.push((0, l.jsx)(tT, { error: u ?? !1 })),
                        p && e.push((0, l.jsx)(tR, { channelId: t.id })),
                        { stacked: e, floating: i }
                    );
                }, [r, c, d, t, p, s, h, n, a, o, u]);
            })({
                channel: j,
                type: k,
                activeCommand: eP,
                pendingReply: D,
                scheduledMessageDraft: es,
                selectedAutocompleteInputType: tk,
                selectedAutocompleteInputError: t_,
            }),
            t0 = 0 === a.trim().length,
            nl = null != D ? [J, to].filter(Boolean).join(" ") : J,
            ni = k.layout === eY.wt.INLINE,
            nr = k.layout === eY.wt.FLUSH,
            ns = (0, l.jsx)("div", { ref: eS, className: tW.BW }),
            na = tL ? (0, l.jsx)(O, { align: "right", positionTargetRef: eS, channel: j }) : null,
            no =
                null != M
                    ? M()
                    : (0, l.jsx)(tB.A, {
                          type: k,
                          disabled: eB,
                          channel: j,
                          handleSubmit: tn,
                          isEmpty: t0,
                          showAllButtons: !eL && !eO,
                          expressionButtonsHidden: eO,
                      }),
            nu = t$
                ? (0, l.jsx)(tG.A, {
                      type: k,
                      textValue: a,
                      className: X,
                      maxCharacterCount: Q,
                      showRemainingCharsAfterCount: $,
                  })
                : null;
        return (
            i.useEffect(() => {
                _ && e$._.dispatch(ea.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: j.id });
            }, [_, j.id]),
            (0, l.jsx)(eg.Sv, {
                value: e6,
                children: (0, l.jsxs)(C.f5, {
                    value: eu,
                    children: [
                        tZ && eZ
                            ? (0, l.jsx)(tJ, { getSlateEditor: eI, onInsertEmoji: ta, type: k, channel: j })
                            : tZ
                              ? (0, l.jsx)(tH.A, { ref: eb, getSlateEditor: eI, containerRef: eC, options: k.markdown })
                              : null,
                        (0, l.jsxs)("div", {
                            ref: ec,
                            className: s()(c, {
                                [tW.gM]: !0,
                                [tW.Bz]: tq && t$,
                                [tW.Qv]: tQ && t$,
                                [tW.h9]: tD,
                                [tW.mr]: H,
                                [tW.Wn]: d.Fr,
                                [tW.Ls]: ni,
                                [tW.AH]: nr,
                                [tW.z3]: null != R,
                            }),
                            children: [
                                ni || nr ? null : (0, l.jsx)(tF, { bars: tX }),
                                (0, l.jsxs)("div", {
                                    ref: eC,
                                    onScroll: th,
                                    className: s()(h, { [tW.xx]: !0, [tW.k6]: !el, [tW.Ri]: tX.stacked.length > 0 }),
                                    children: [
                                        (0, l.jsx)(tp, { channelId: j.id, chatInputType: k }),
                                        k.hideAttachmentArea
                                            ? null
                                            : (0, l.jsx)(tK.A, { channelId: j.id, type: k, canAttachFiles: eK }),
                                        (0, l.jsxs)("div", {
                                            className: s()(tW.vW, {
                                                [tW.BF]: tD,
                                                [tW.RL]: k !== eY.oU.EDIT && (null != tV || (tD && null == tV) || eD),
                                                [tW.fk]: k === eY.oU.THREAD_CREATION,
                                                [tW.TZ]:
                                                    k === eY.oU.CREATE_FORUM_POST || k === eY.oU.FORWARD_MESSAGE_INPUT,
                                                [tW.$i]: k === eY.oU.USER_PROFILE_REPLY,
                                            }),
                                            onMouseDown: tN,
                                            children: [
                                                na,
                                                tV,
                                                (0, l.jsx)(f.vN, {
                                                    ringTarget: ec,
                                                    ringClassName: tW.Rg,
                                                    children: (0, l.jsx)(e0.A, {
                                                        ref: ey,
                                                        id: x,
                                                        focused: _,
                                                        useSlate: e1,
                                                        textValue: a,
                                                        richValue: o,
                                                        disabled: eB,
                                                        placeholder: N,
                                                        required: I,
                                                        accessibilityLabel: T,
                                                        isPreviewing: (eD || eV) && eQ,
                                                        channel: j,
                                                        type: k,
                                                        canPasteFiles: eK,
                                                        uploadPromptCharacterCount: ea.CS1,
                                                        maxCharacterCount: Q ?? e5,
                                                        allowNewLines: Z,
                                                        "aria-describedby": nl,
                                                        onChange: e9,
                                                        onResize: tf,
                                                        onBlur: W,
                                                        onFocus: F,
                                                        onKeyDown: B,
                                                        onSubmit: tt,
                                                        onSubmitFailure: tP,
                                                        onTab: tg,
                                                        onEnter: tx,
                                                        onSpace: tS,
                                                        onMoveSelection: ty,
                                                        onSelectionChanged: e7,
                                                        onMaybeShowAutocomplete: ti,
                                                        onHideAutocomplete: tr,
                                                        promptToUpload: G,
                                                        fontSize: e8,
                                                        spellcheckEnabled: e3,
                                                        canOnlyUseTextCommands: tM,
                                                        className: s()(
                                                            {
                                                                [tW.QI]: k === eY.oU.THREAD_CREATION,
                                                                [tW.AV]: k === eY.oU.PROFILE_BIO_INPUT,
                                                                [tW.GR]: k === eY.oU.OVERLAY_INLINE_REPLY,
                                                            },
                                                            p,
                                                        ),
                                                        "aria-labelledby": Y,
                                                        showValueWhenDisabled: eo,
                                                    }),
                                                }),
                                                no,
                                                ns,
                                            ],
                                        }),
                                    ],
                                }),
                                e2 ? null : (0, l.jsx)(ed, { ref: eh, channel: j, canOnlyUseTextCommands: tM }),
                                (0, l.jsx)(ep.A, {
                                    ref: tl,
                                    channel: j,
                                    canMentionRoles: z,
                                    canMentionChannels: q,
                                    useNewSlashCommands: e1,
                                    canOnlyUseTextCommands: tM,
                                    canSendStickers: k.stickers?.allowSending,
                                    canSendSoundmoji: k.soundmoji?.allowSending,
                                    textValue: a,
                                    focused: _,
                                    expressionPickerView: tA,
                                    type: k,
                                    targetRef: ec,
                                    editorRef: ey,
                                    onSendMessage: tt,
                                    onSendSticker: tu,
                                    onVisibilityChange: tO,
                                    editorScrollerRef: eC,
                                    editorHeight: tm,
                                    barsHeight: 40 * tX.floating.length,
                                    setValue: (e, t) => e9?.(null, e, t),
                                    position: et,
                                }),
                                (0, l.jsx)(eR, { textValue: a, editorHeight: tm, channelId: j.id }),
                                nu,
                                en,
                            ],
                        }),
                        (0, l.jsx)(g.U, { error: R }),
                        tI
                            ? null
                            : (0, l.jsx)(eE.A, {
                                  positionTargetRef: ec,
                                  type: k,
                                  onSelectGIF: ts,
                                  onSelectEmoji: ta,
                                  onSelectSticker: tu,
                                  onSelectSound: td,
                                  channel: j,
                                  closeOnModalOuterClick: ei,
                                  parentModalKey: er,
                                  position: "top",
                                  align: "right",
                                  positionLayerClassName: tW.BD,
                              }),
                    ],
                }),
            })
        );
    }),
);
