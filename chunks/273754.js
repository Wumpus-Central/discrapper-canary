n.d(t, {
    C: () => nj,
    Sk: () => nL,
    Zx: () => nv,
    v7: () => nR,
    L0: () => nO,
    N_: () => nb,
    MD: () => nk,
    Ay: () => nP,
    uW: () => nw,
    NO: () => n_,
    ck: () => nM,
    ml: () => nT,
    Vu: () => nN,
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
    C = n(775602),
    E = n(793574),
    I = n(688810),
    y = n(177640),
    S = n(989837),
    v = n(289873),
    N = n(268218),
    _ = n(750506),
    j = n(60809),
    b = n(375708),
    T = n(836555);
let R = { width: 500, height: j.$V },
    O = (0, N.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("324732"),
                n.e("747067"),
                n.e("403382"),
                n.e("207322"),
                n.e("622936"),
                n.e("216947"),
                n.e("172727"),
                n.e("460582"),
                n.e("458098"),
                n.e("826744"),
                n.e("507528"),
                n.e("76428"),
                n.e("397270"),
                n.e("834552"),
                n.e("993103"),
                n.e("571210"),
                n.e("88342"),
                n.e("27773"),
                n.e("132191"),
                n.e("171273"),
                n.e("311802"),
                n.e("437065"),
                n.e("698965"),
                n.e("37977"),
                n.e("943780"),
                n.e("682337"),
                n.e("280854"),
                n.e("335395"),
                n.e("235313"),
                n.e("371133"),
                n.e("454625"),
                n.e("408362"),
                n.e("538887"),
                n.e("252229"),
                n.e("918024"),
                n.e("678195"),
                n.e("522261"),
                n.e("341701"),
                n.e("774021"),
                n.e("583518"),
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
        renderLoader: () => (0, l.jsx)("div", { className: T.R4, style: R, children: (0, l.jsx)(v.y, {}) }),
    }),
    M = { height: j.$V },
    L = i.memo(function (e) {
        let { positionTargetRef: t, align: n, ...i } = e;
        return (0, l.jsx)("span", {
            style: j.sK,
            children: (0, l.jsx)(_.nE, {
                className: T.T8,
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
                        className: T.V6,
                        role: "dialog",
                        style: M,
                        "aria-label": b.intl.string(b.t["3CNGLK"]),
                        children: t && (0, l.jsx)(O, { ...i }),
                    });
                },
            }),
        });
    });
var k = n(861382),
    w = n(435558),
    P = n.n(w),
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
    J = n(392054),
    $ = n(168186),
    X = n(866665),
    Q = n(939249),
    ee = n(88218),
    et = n(664929),
    en = n(934305);
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
                return (s[t + 1]?.type === J.Hf.BUILT_IN && (n += 8), 32 + n);
            },
            [s],
        ),
        m = i.useCallback((e, t) => (t ? 8 * (s[e + 1]?.type !== J.Hf.BUILT_IN) : 8 * (0 !== e)), [s]),
        f = i.useCallback(
            (e, t) => {
                let i = s[t];
                if (null == i) return;
                let r = (0, et.Rg)(i),
                    c = 4 * (i.type === J.Hf.BUILT_IN),
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
                    m = i.type !== J.Hf.BUILT_IN && t < s.length - 1 && s[t + 1].type === J.Hf.BUILT_IN;
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
    eo = n(643904);
let eu = [8, 8, 0, 8],
    ec = P().debounce(() => {
        (0, G.zV)(ea.HAw.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300),
    ed = i.forwardRef(function (e, t) {
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
                commands: C,
                filteredSectionId: E,
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
            (A && e + 420 > 48 * t + 56 * n - 512 && I(), S(e), ec(), (o.current = e));
        }
        let N = i.useRef(v);
        (i.useEffect(() => {
            N.current = v;
        }),
            i.useEffect(() => {
                N.current(o.current);
            }, [C]));
        let _ = i.useCallback((e) => (e !== g.length - 1 || A ? 16 : 0), [g.length, A]),
            j = x.map((e) => e.data.length);
        (i.useEffect(() => {
            null != d.current && h && null != u && d.current.scrollRowIntoView(u);
        }, [h, u]),
            i.useLayoutEffect(() => {
                null != E && d.current?.scrollToSectionTop(0);
            }, [C, E]));
        let T = i.useCallback(
                (e) => {
                    e.id === E || e.id === er.Ik.FRECENCY ? (y(null), d.current?.scrollToSectionTop(0)) : y(e.id);
                },
                [y, E],
            ),
            R = i.useCallback(
                (e, t, l) => {
                    Z.Gf({ channelId: n.id, command: e, section: t, location: J.Oh.DISCOVERY, triggerSection: l });
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
                            R(n, l, (0, $.$S)(e.section));
                            break;
                        }
                    return !0;
                },
                onMoveSelection: (e) => {
                    if (0 === C.length) return !0;
                    let t = 7 * !!A,
                        n = C.length + t,
                        l = null == u ? 0 : u + e;
                    return (l >= n ? (l = n - 1) : l < 0 && (l = 0), c(l), m(!0), !0);
                },
            }),
            [C.length, x, A, p, R, u],
        );
        let O = i.useCallback(
                (e) => {
                    let t = g[e];
                    if (null == t) return null;
                    let i = (0, et.Rg)(t),
                        s = (0, l.jsx)(i, { channel: n, section: t, width: 16, height: 16, padding: 0 });
                    return (0, l.jsx)(z.A, { className: eo.Km, icon: s, children: t.name }, e);
                },
                [n, g],
            ),
            M = i.useCallback(
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
                                        message: b.intl.format(b.t.WoQXT6, { applicationName: i.name }),
                                        className: eo.qK,
                                    }),
                            ],
                        },
                        e,
                    );
                },
                [g, x],
            ),
            L = i.useCallback(
                (e, t) => {
                    let i = x[t.sectionIndex],
                        s = i.data[t.sectionRowIndex],
                        r = `${i.section.id}:${s?.id ?? e}`;
                    if (
                        null == s ||
                        (i.section.id !== s.applicationId && i.section.id !== er.Ik.FRECENCY) ||
                        s.inputType === J.y$.PLACEHOLDER
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
                            onClick: () => R(s, a, (0, $.$S)(i.section)),
                            onHover: () => {
                                (c(null), m(!1));
                            },
                        },
                        r,
                    );
                },
                [n, x, R, p, u],
            ),
            k = (0, B.GV)();
        return (
            (0, F.gf)(k, !0, (0, V.aI)(u)),
            i.useEffect(
                () => () => {
                    (0, F.nQ)();
                },
                [],
            ),
            (0, l.jsxs)(V.Ay, {
                id: k,
                className: eo.x9,
                innerClassName: eo.iE,
                onMouseDown: eh,
                children: [
                    (0, l.jsx)(ei, {
                        className: eo.H$,
                        channel: n,
                        sections: p,
                        filteredSectionId: E,
                        activeCategoryIndex: f,
                        onSectionClick: T,
                        applicationCommandListRef: d,
                    }),
                    (0, l.jsx)(H.A, {
                        role: "listbox",
                        className: eo.p_,
                        listPadding: eu,
                        onScroll: v,
                        renderRow: L,
                        renderSection: M,
                        renderSectionHeader: O,
                        rowCount: g.length,
                        rowCountBySection: j,
                        rowHeight: 56,
                        sectionHeaderHeight: 32,
                        sectionMarginBottom: _,
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
    ef = n(305070),
    ep = n(31498),
    eg = n(598071),
    ex = n(151271),
    eA = n(442152),
    eC = n(256265),
    eE = n(336807),
    eI = n(857071),
    ey = n(135621),
    eS = n(105330),
    ev = n(280450),
    eN = n(559908),
    e_ = n(620141),
    ej = n(224964),
    eb = n(31408),
    eT = n(536283);
function eR(e) {
    let { editorHeight: t, textValue: n, channelId: l } = e,
        s = i.useRef(n),
        r = (0, eS.l)({ editorHeight: t }),
        a = (0, ej.A)(),
        o = (0, m.bG)([eN.Ay, ev.default], () => eN.Ay.isComboing(ev.default.getId(), l)),
        u = r?.left ?? 0,
        c = (r?.top ?? 0) - 16,
        d = 0 === n.length,
        h = i.useMemo(() => 0.05 > Math.random(), [d]);
    return (
        i.useEffect(() => {
            0 !== n.length && n !== s.current && o && (a.fire(u, c, h ? { sprite: eT.dR } : null), (s.current = n));
        }, [n, o, u, c, h, a]),
        null
    );
}
function eO(e) {
    return (0, l.jsx)(e_.A, { confettiLocation: eb.k.CHAT_INPUT, children: (0, l.jsx)(eR, { ...e }) });
}
var eM = n(931664),
    eL = n(631576),
    ek = n(68935),
    ew = n(406704),
    eP = n(885386),
    eD = n(951260),
    eU = n(696451),
    eG = n(576705),
    eV = n(309010),
    eF = n(638128),
    eH = n(522602),
    eB = n(287809),
    eW = n(821102),
    eK = n(174459),
    ez = n(234320),
    eZ = n(625494),
    eY = n(488926),
    eq = n(723702),
    eJ = n(486319),
    e$ = n(355622),
    eX = n(392553),
    eQ = n(834730),
    e0 = n(140735),
    e1 = n(176781),
    e2 = n(463930),
    e3 = n(935063),
    e8 = n(73392),
    e6 = n(650019),
    e5 = n(763754),
    e7 = n(967144),
    e4 = n(118517),
    e9 = n(976860),
    te = n(747926),
    tt = n(232835),
    tn = n(285796),
    tl = n(595347);
function ti(e) {
    let { onClick: t, "aria-label": n } = e;
    return (0, l.jsx)(Q.D, {
        className: tl.b,
        onClick: t,
        "aria-label": n,
        children: (0, l.jsx)(tn.a, { size: "md", color: "currentColor", className: tl.u }),
    });
}
var ts = n(558497);
let tr = "channel-reply-bar-a11y-description";
function ta(e) {
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
                ((0, e4.Jx)(t.id), (0, te.Tv)(t, n, "Reply Chain Nudge"));
            },
            className: ts._r,
            focusProps: { offset: { right: -4, left: -4 } },
            children: [
                (0, l.jsx)(eQ.E, {
                    color: "text-default",
                    className: ts.Qq,
                    variant: "text-sm/normal",
                    children: b.intl.format(b.t.B3V0FM, { count: Math.min(10, s + 1) }),
                }),
                (0, l.jsx)(eQ.E, {
                    color: "text-link",
                    className: ts.NG,
                    variant: "text-sm/semibold",
                    children: b.intl.string(b.t.rBIGBL),
                }),
            ],
        })
    );
}
function to(e) {
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
            authorId: C,
            displayNameStyles: E,
        } = (0, e5.Ay)(u),
        I = (0, e7.gn)(f, C, x),
        y = (0, e8.a)({ displayNameStyles: E }),
        S = (0, e6.A)(h, u.attachments),
        v =
            ((t = o.id),
            (n = u.id),
            (0, m.bG)(
                [tt.A],
                () => {
                    let e = n;
                    for (let n = 0; n < 10; n++) {
                        let l = tt.A.getMessage(t, e);
                        if (l?.type !== ea.lAJ.REPLY || null == l.messageReference) return n;
                        e = l.messageReference.message_id;
                    }
                    return 10;
                },
                [t, n],
            )),
        N = (0, ew.n)(o, u),
        _ = a.showThreadPromptOnReply && v >= 2 && N;
    return (0, l.jsx)("div", {
        className: ts.e1,
        children: (0, l.jsxs)("div", {
            className: ts.kL,
            children: [
                (0, l.jsxs)("div", {
                    className: ts.eU,
                    children: [
                        (0, l.jsx)(e0.A, { id: tr, children: b.intl.formatToPlainString(b.t.EpJL4E, { username: p }) }),
                        (0, l.jsx)(Q.D, {
                            onClick: function () {
                                return (0, e9.pX)(ea.BVt.CHANNEL(o.getGuildId(), o.id, u.id));
                            },
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, l.jsx)(eQ.E, {
                                color: "text-default",
                                className: r()(ts.Qq, ts.Fn),
                                variant: "text-sm/normal",
                                children: b.intl.format(b.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, l.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    "\xa0",
                                                    S?.title != null
                                                        ? (0, l.jsxs)("span", {
                                                              className: ts.H8,
                                                              children: [
                                                                  S.isClip &&
                                                                      (0, l.jsx)(e1.x, {
                                                                          size: "xs",
                                                                          color: "currentColor",
                                                                          className: ts.gS,
                                                                      }),
                                                                  (0, l.jsx)(eQ.E, {
                                                                      variant: "text-sm/semibold",
                                                                      color: "text-default",
                                                                      className: ts.NV,
                                                                      children: S.title,
                                                                  }),
                                                                  (0, l.jsxs)(eQ.E, {
                                                                      variant: "text-sm/normal",
                                                                      color: "text-link",
                                                                      children: ["@", S.timestamp],
                                                                  }),
                                                              ],
                                                          })
                                                        : (0, l.jsx)(e2.g, {
                                                              className: ts.UU,
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
                            className: ts.o1,
                            children: [
                                d &&
                                    (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(X.m, {
                                                asContainer: !0,
                                                text: c ? b.intl.string(b.t.DH2o6R) : b.intl.string(b.t.utGGIY),
                                                children: (0, l.jsx)(Q.D, {
                                                    role: "switch",
                                                    "aria-checked": c,
                                                    onClick: function (e) {
                                                        (e.stopPropagation(), (0, e4.vz)(o.id, !c));
                                                    },
                                                    children: (0, l.jsxs)(eQ.E, {
                                                        variant: "text-sm/bold",
                                                        color: c ? "text-link" : "text-muted",
                                                        className: ts.Z4,
                                                        children: [
                                                            (0, l.jsx)(e3.X, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": b.intl.string(b.t.P8tvKG),
                                                                className: ts.mM,
                                                            }),
                                                            c ? b.intl.string(b.t.p9jC2r) : b.intl.string(b.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, l.jsx)("div", { className: ts.me, "aria-hidden": !0 }),
                                        ],
                                    }),
                                (0, l.jsx)(ti, {
                                    onClick: function (e) {
                                        (e.stopPropagation(), (0, e4.Jx)(o.id));
                                    },
                                    "aria-label": b.intl.string(b.t.jSnJGT),
                                }),
                            ],
                        }),
                    ],
                }),
                _ && (0, l.jsx)(ta, { channel: o, message: u, replyChainLength: v }),
            ],
        }),
    });
}
var tu = n(749314),
    tc = n(148355),
    td = n(218782);
let th = i.memo(function (e) {
    let { channelId: t, chatInputType: n } = e,
        [s, r] = i.useState(null),
        a = (0, m.bG)([eM.A], () => eM.A.getStickerPreview(t, n.drafts.type));
    return n.stickers?.allowSending && null != a && 0 !== a.length
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", {
                      className: td.Tz,
                      children: a.map((e) =>
                          (0, l.jsxs)(
                              "div",
                              {
                                  className: td.dp,
                                  children: [
                                      (0, l.jsx)(Q.D, {
                                          onFocus: () => r(e.id),
                                          onBlur: () => r(null),
                                          className: td.b,
                                          "aria-label": b.intl.formatToPlainString(b.t.BGAQRd, { name: e.name }),
                                          onClick: () => (0, eL.x5)(t, n.drafts.type),
                                          children: (0, l.jsx)("div", {
                                              className: td.Nk,
                                              children: (0, l.jsx)(tn.a, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: td.ut,
                                              }),
                                          }),
                                      }),
                                      (0, l.jsx)(tc.A, {
                                          isInteracting: s === e.id,
                                          className: td.UV,
                                          size: 48,
                                          sticker: e,
                                      }),
                                  ],
                              },
                              e.id,
                          ),
                      ),
                  }),
                  (0, l.jsx)(tu.A, { className: td.R }),
              ],
          })
        : null;
});
var tm = n(612394);
n(321073);
var tf = n(587895),
    tp = n(20015),
    tg = n(629016),
    tx = n(461213),
    tA = n(228366),
    tC = n(361310);
let tE = new Map(),
    tI = new Set(),
    ty = 0,
    tS = !1;
function tv() {
    let e = (function () {
            let e = new Set();
            for (let t of tx.A.getActivities()) {
                let n = (0, tC.N)(t);
                null != n && e.add(n);
            }
            return e;
        })(),
        t = !1,
        n = new Map();
    for (let [l, i] of tE) e.has(l) ? n.set(l, i) : (t = !0);
    t && (tE = n);
    let l = new Set(),
        i = !1;
    for (let t of tI) e.has(t) ? l.add(t) : (i = !0);
    return (i && (tI = l), t || i);
}
class tN extends m.Ay.PersistedStore {
    static displayName = "RichPresenceInviteBarStore";
    static persistKey = "RichPresenceInviteBarStore";
    initialize(e) {
        (this.waitFor(eG.A, tx.A),
            (tE = new Map(
                (e?.invitedChannelIdsBySession ?? []).map((e) => {
                    let [t, n] = e;
                    return [t, new Set(n)];
                }),
            )),
            (tI = new Set(e?.dismissedSessionKeys ?? [])),
            (ty = e?.consecutiveDismissesWithoutInvite ?? 0),
            (tS = e?.permanentlyDismissed ?? !1),
            this.syncWith([tx.A], tv));
    }
    hasInvitedChannel(e, t) {
        return tE.get(e)?.has(t) ?? !1;
    }
    isDismissedSession(e) {
        return tI.has(e);
    }
    isPermanentlyDismissed() {
        return tS;
    }
    getState() {
        return {
            invitedChannelIdsBySession: [...tE].map((e) => {
                let [t, n] = e;
                return [t, [...n]];
            }),
            dismissedSessionKeys: [...tI],
            consecutiveDismissesWithoutInvite: ty,
            permanentlyDismissed: tS,
        };
    }
}
let t_ = new tN(tA.h, {
    RICH_PRESENCE_INVITE_BAR_CHANNEL_INVITED: function (e) {
        let { sessionKey: t, channelId: n } = e,
            l = tE.get(t);
        if (l?.has(n)) return !1;
        let i = new Set(l).add(n);
        ((tE = new Map(tE).set(t, i)), (ty = 0));
    },
    RICH_PRESENCE_INVITE_BAR_SESSION_DISMISSED: function (e) {
        let { sessionKey: t } = e;
        if (tI.has(t)) return !1;
        ((tI = new Set(tI).add(t)), tE.has(t) ? (ty = 0) : (ty += 1) >= 2 && (tS = !0));
    },
});
var tj = n(874546),
    tb = n(691540),
    tT = n(857250),
    tR = n(97483),
    tO = n(821609),
    tM = n(308368),
    tL = n(968522),
    tk = n(643747),
    tw = n(426120);
let tP = "rich_presence_invite";
function tD(e, t) {
    eK.default.track(ea.HAw.CHANNEL_BANNER_CTA_CLICKED, {
        ...(0, G.H$)(e.getGuildId()),
        ...(0, G.dI)(e),
        banner_type: tP,
        cta_type: t,
    });
}
function tU(e) {
    let { channel: t, activity: n } = e,
        s = (0, tL.Ay)(tL.P8.CHANNEL_TEXT_AREA_BARS),
        [a, o] = i.useState(!1),
        u = (0, tC.N)(n);
    return (i.useEffect(() => {
        s &&
            eK.default.track(ea.HAw.CHANNEL_BANNER_VIEWED, {
                ...(0, G.H$)(t.getGuildId()),
                ...(0, G.dI)(t),
                banner_type: tP,
            });
    }, [t, u, s]),
    s)
        ? (0, l.jsxs)("div", {
              className: r()(ts.eU, tw.M),
              children: [
                  (0, l.jsx)(eQ.E, {
                      variant: "text-sm/medium",
                      className: r()(ts.Qq, ts.Fn),
                      children: b.intl.format(b.t.DrmvNT, { activityName: n.name }),
                  }),
                  (0, l.jsxs)("div", {
                      className: tw.o,
                      children: [
                          (0, l.jsx)(tO.$, {
                              variant: "active",
                              size: "sm",
                              loading: a,
                              text: b.intl.string(b.t["fXM+J7"]),
                              onClick: function () {
                                  (tD(t, "send_invite"),
                                      o(!0),
                                      tM.A.sendActivityInvite({
                                          channelId: t.id,
                                          type: ea.xL.JOIN,
                                          activity: n,
                                          location: E.A.RICH_PRESENCE_INVITE_COMPOSER_BANNER,
                                      }).then(
                                          () => {
                                              o(!1);
                                          },
                                          () => {
                                              o(!1);
                                          },
                                      ));
                              },
                          }),
                          (0, l.jsx)(ti, {
                              onClick: function () {
                                  (tD(t, "dismiss"),
                                      null != u && (0, tk.$)(u),
                                      (0, tb.P0)((0, tT.o)(b.intl.string(b.t.gFwvLa), tR.Ck.INVITE)));
                              },
                              "aria-label": b.intl.string(b.t.cpT0Cq),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var tG = n(442433);
n(827669);
var tV = n(811559);
function tF(e) {
    let t,
        s,
        a,
        { className: o, activeCommand: u, activeOption: c, optionStates: d, channelId: h } = e,
        m = i.useCallback(
            (e) => {
                let t = u?.rootCommand?.id;
                null == t
                    ? e.preventDefault()
                    : (0, tG.L3)(e, async () => {
                          let { default: e } = await n.e("715687").then(n.bind(n, 646938));
                          return (n) => (0, l.jsx)(e, { ...n, id: t, label: b.intl.string(b.t.oJ1Muw) });
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
        ((t = c.displayName), (s = c.displayDescription), (a = e?.success ? null : e?.error));
    } else ((t = `/${u.displayName}`), (s = u.displayDescription), (a = null));
    return (0, l.jsxs)("div", {
        className: r()(o, tV.M0),
        onContextMenu: m,
        children: [
            (0, l.jsxs)("div", {
                className: tV.iz,
                children: [
                    (0, l.jsx)(eQ.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        tag: "span",
                        children: t,
                    }),
                    null != a
                        ? (0, l.jsx)("span", { className: tV.z3, children: a })
                        : (0, l.jsx)("span", { className: tV.h_, children: s }),
                ],
            }),
            (0, l.jsx)("div", {
                className: tV.o1,
                children: (0, l.jsx)(ti, { onClick: f, "aria-label": b.intl.string(b.t.cpT0Cq) }),
            }),
        ],
    });
}
var tH = n(734057);
let tB = new Set();
class tW extends m.Ay.PersistedStore {
    static displayName = "PTOStore";
    static persistKey = "PTOStore";
    initialize(e) {
        (this.waitFor(tH.A, eU.Ay, eV.Ay, eB.default), null != e && (tB = new Set(e)));
    }
    hasId(e) {
        return tB.has(e);
    }
    getState() {
        return [...tB];
    }
}
let tK = new tW(tA.h, {});
function tz() {
    let e = eV.Ay.getChannelId();
    if (null == e) return;
    let t = tH.A.getChannel(e);
    null != t && t.isPrivate() && (tB.has(t.getRecipientId()) || (tB.add(t.getRecipientId()), tK.emitChange()));
}
function tZ() {
    return (0, l.jsxs)("div", {
        className: ts.eU,
        children: [
            (0, l.jsx)(eQ.E, {
                variant: "text-sm/medium",
                className: r()(ts.Qq, ts.Fn),
                children: b.intl.string(b.t["2UvR1E"]),
            }),
            (0, l.jsx)("div", {
                className: ts.o1,
                children: (0, l.jsx)(ti, { onClick: tz, "aria-label": b.intl.string(b.t.cpT0Cq) }),
            }),
        ],
    });
}
var tY = n(541188);
function tq(e) {
    let { error: t } = e;
    return (0, l.jsxs)("div", {
        className: tY.M,
        children: [
            (0, l.jsx)(eQ.E, { variant: "text-xs/bold", color: "text-strong", children: b.intl.string(b.t["4VDCG0"]) }),
            t
                ? (0, l.jsx)(eQ.E, { variant: "text-xs/medium", className: tY.z, children: b.intl.string(b.t.qNorwt) })
                : (0, l.jsx)(eQ.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: b.intl.string(b.t["260qZS"]),
                  }),
        ],
    });
}
var tJ = n(25201),
    t$ = n(926321),
    tX = n(399482);
function tQ(e) {
    var t, n;
    let { channelId: i } = e,
        s = (0, tJ.vR)(i);
    if (null == s) return null;
    let a = s.rolling,
        o =
            ((t = a),
            (n = s.results),
            t
                ? b.intl.string(b.t["x/FIRX"])
                : null == n
                  ? ""
                  : b.intl.formatToPlainString(b.t.xU4pF1, { total: n.reduce((e, t) => e + t, 0) }));
    return (0, l.jsx)("div", {
        className: r()(tX.kL, { [tX.Kd]: !s.dismissing }),
        children: (0, l.jsxs)("div", {
            className: tX.Qs,
            children: [
                (0, l.jsx)(t$.DiceIcon, { size: "md", className: r()({ [tX.su]: a }) }),
                (0, l.jsx)(eQ.E, { color: "text-default", variant: "text-sm/normal", children: o }),
            ],
        }),
    });
}
var t0 = n(575293),
    t1 = n(536637),
    t2 = n.n(t1),
    t3 = n(31717),
    t8 = n(551640),
    t6 = n(970244),
    t5 = n(29621);
function t7(e) {
    let { channel: t, scheduledMessageDraft: n } = e,
        { scheduledTimestamp: i } = n;
    return (0, l.jsx)("div", {
        className: t5.e1,
        children: (0, l.jsx)("div", {
            className: t5.kL,
            children: (0, l.jsxs)("div", {
                className: t5.g3,
                children: [
                    (0, l.jsx)(Q.D, {
                        className: t5.a3,
                        "aria-label": b.intl.string(b.t.SBcdAN),
                        onClick: function () {
                            (0, t6.e0)({
                                channel: t,
                                defaultValue: t2()(i),
                                entryPoint: t8.t.COMPOSER_BAR,
                                isEditing: !0,
                            });
                        },
                        children: (0, l.jsx)(eQ.E, {
                            color: "text-default",
                            className: t5.Qq,
                            variant: "text-sm/normal",
                            children: b.intl.formatToPlainString(b.t["MQcRX/"], { timestamp: new Date(i).valueOf() }),
                        }),
                    }),
                    (0, l.jsx)("div", {
                        className: t5.o1,
                        children: (0, l.jsx)(ti, {
                            onClick: function (e) {
                                (e.stopPropagation(), x.A.clearDraft(t.id, t3.C.ScheduledMessage));
                            },
                            "aria-label": b.intl.string(b.t.cpT0Cq),
                        }),
                    }),
                ],
            }),
        }),
    });
}
var t4 = n(495088);
function t9(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, l.jsx)("div", { children: e }, t)),
        s = t.floating.map((e, t) => (0, l.jsx)(i.Fragment, { children: e }, t));
    return 0 === n.length && 0 === s.length
        ? null
        : (0, l.jsxs)(i.Fragment, {
              children: [
                  s.length > 0 && (0, l.jsx)("div", { className: t4.Vq, children: s }),
                  n.length > 0 && (0, l.jsx)("div", { className: t4.MD, children: n }),
              ],
          });
}
var ne = n(123583),
    nt = n(562708),
    nn = n(150934),
    nl = n(139286),
    ni = n(47167),
    ns = n(713654),
    nr = n(252263),
    na = n(8455),
    no = n(67259),
    nu = n(602792);
function nc(e) {
    let { thread: t, scheduledMessageDraft: n } = e,
        s = (0, na.Vp)({ location: "ThreadsAlsoSendToChannelArea" }),
        [r, a] = (0, m.yK)([tH.A, no.A], () => [
            t.isThread() ? tH.A.getChannel(t.parent_id) : null,
            no.A.getAlsoSendToChannel(t.id),
        ]),
        o = (0, ni.Ay)(r),
        u = i.useCallback(
            (e) => {
                (eK.default.track(ea.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_TOGGLED, {
                    value: e,
                    guild_id: t.guild_id,
                    channel_id: t.id,
                }),
                    (0, nr.B)({ channelId: t.id, enabled: e }));
            },
            [t],
        );
    (0, nl.A)(
        { name: nt.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL, type: nt.ImpressionTypes.VIEW },
        { disableTrack: null == r || !s.enabled },
        [r, s.enabled],
    );
    let c = null != n;
    if (
        (i.useEffect(() => {
            c && a && (0, nr.B)({ channelId: t.id, enabled: !1 });
        }, [c, a, t.id]),
        !s.enabled || null == r)
    )
        return null;
    let d = (0, ns.gU)(r),
        h = b.intl.format(b.t.UqL10G, {
            callToActionHook: (e, t) =>
                (0, l.jsx)(
                    eQ.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: nu.Pf,
                        children: b.intl.string(b.t.Pi3JW7),
                    },
                    t,
                ),
            channelName: o,
            channelNameHook: (e, t) =>
                (0, l.jsxs)(
                    eQ.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: nu.Pf,
                        children: [null == d ? null : (0, l.jsx)(d, { color: "currentColor", className: nu.Kk }, t), e],
                    },
                    t,
                ),
        });
    return (0, l.jsx)("div", {
        className: nu.kL,
        children: (0, l.jsx)(nn.S, { checked: a, disabled: c, onChange: u, label: h, labelType: "secondary" }),
    });
}
function nd(e) {
    let { channel: t, type: n, scheduledMessageDraft: i } = e,
        { shouldShow: s } = (function (e) {
            let { channel: t, type: n } = e,
                l = (0, m.bG)([tH.A], () => {
                    let e = tH.A.getChannel(t.parent_id);
                    return e?.isForumLikeChannel() ?? !1;
                }),
                i = [e$.oU.NORMAL, e$.oU.SIDEBAR].includes(n);
            return { shouldShow: t.isThread() && !l && i };
        })({ channel: t, type: n });
    return s ? (0, l.jsx)(nc, { thread: t, scheduledMessageDraft: i }) : null;
}
var nh = n(822610),
    nm = n(625928),
    nf = n(135261),
    np = n(820066),
    ng = n(922016),
    nx = n(375499),
    nA = n(267889),
    nC = n(307731),
    nE = n(9287);
function nI(e) {
    let { getSlateEditor: t, onInsertEmoji: n, type: s, channel: r } = e,
        a = t(),
        o = i.useRef(null);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              id: "slate-toolbar",
              className: nE.aL,
              children: [
                  (0, l.jsx)("div", {
                      className: nE.Wy,
                      children: (0, l.jsx)(nf.P, {
                          slateEditor: a,
                          options: s.markdown,
                          iconClassName: nE.C7,
                          dividerClassName: nE.us,
                      }),
                  }),
                  (0, l.jsx)(ng.Y, {
                      targetElementRef: o,
                      renderPopout: function (e) {
                          let { closePopout: t } = e;
                          return (0, l.jsx)(nA.A, {
                              persistSearch: !0,
                              channel: r,
                              closePopout: t,
                              onSelectEmoji: (e) => {
                                  let { emoji: l, willClose: i } = e;
                                  (n({ emoji: l, willClose: i }), i && t());
                              },
                              pickerIntention:
                                  s.expressionPicker?.emojiIntention ?? nC.EmojiIntention.COMMUNITY_CONTENT,
                          });
                      },
                      position: "bottom",
                      animation: ng.Y.Animation.NONE,
                      align: "left",
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, l.jsx)(nx.A, { ...e, ref: o, active: n, className: nE.Z8, tabIndex: 0 });
                      },
                  }),
              ],
          });
}
var ny = n(263582),
    nS = n(698279);
function nv(e, t, s, r, a) {
    let [o, u] = i.useState(!1),
        c = i.useCallback(
            (i, d, h, m, p, g) => {
                if (o) return;
                u(!0);
                let A = eM.A.getStickerPreview(a, t.drafts.type)?.map((e) => e.id) ?? [],
                    C = eH.A.getUploads(a, t.drafts.type) ?? [];
                if (null == d && !m && !p && (0, eC.xz)(C, a)) {
                    (u(!1),
                        (0, f.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("132839"),
                                n.e("42809"),
                                n.e("377016"),
                                n.e("17256"),
                                n.e("852197"),
                                n.e("225307"),
                                n.e("332165"),
                                n.e("618416"),
                                n.e("524434"),
                                n.e("849162"),
                                n.e("308093"),
                                n.e("202342"),
                                n.e("908346"),
                                n.e("922706"),
                                n.e("249681"),
                                n.e("76428"),
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
                                n.e("818465"),
                                n.e("432209"),
                                n.e("979630"),
                                n.e("858337"),
                                n.e("968763"),
                                n.e("824547"),
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
                                    attachments: C,
                                    sendMessage: () => c(i, void 0, void 0, void 0, !0),
                                });
                        }));
                    return;
                }
                e({
                    value: i,
                    uploads: C,
                    stickers: A,
                    command: d,
                    commandOptionValues: h,
                    isGif: m,
                    gifMetadata: g,
                }).then((e) => {
                    let { shouldClear: n, shouldRefocus: l } = e,
                        i = (n && t.submit?.clearOnSubmit) ?? !1,
                        o = null != s.current;
                    (i &&
                        (a !== eV.Ay.getChannelId()
                            ? x.A.saveDraft(a, "", t.drafts.type)
                            : o && (s.current?.clearValue(), r.current?.hide())),
                        o && (u(!1), (0, ex.v8)(), l && s.current?.focus()));
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
function nN(e, t, n) {
    return i.useCallback(
        (l) => {
            if (t === e$.oU.CREATE_FORUM_POST || t === e$.oU.CREATE_ANNOUNCEMENT_POST) n.current?.insertGIF(l);
            else {
                let t = {
                    gif_provider: l.provider ?? eE.jQ,
                    load_id: eW.A.getAnalyticsID(),
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
function n_(e) {
    return i.useCallback(
        (t) => {
            let { emoji: n, willClose: l } = t,
                i = e.current;
            (null != n && null != i && i.insertEmoji({ emoji: n, willClose: l }), l && (0, ex.v8)());
        },
        [e],
    );
}
function nj(e) {
    let { editorRef: t, disabled: n, textValue: l, channelId: s, chatInputType: r, submit: a } = e,
        { analyticsLocations: o } = (0, I.Ay)();
    return i.useCallback(
        (e, i) => {
            n ||
                (r === e$.oU.CREATE_ANNOUNCEMENT_POST || (0, ek.YS)(i, l, s, r.drafts.type)
                    ? ((0, tm.fh)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != eM.A.getStickerPreview(s, r.drafts.type),
                          analyticsLocations: o,
                      }),
                      (0, eL.$x)(s, e, r.drafts.type))
                    : (a({ value: "", uploads: void 0, stickers: [e.id] }), t.current?.clearValue()),
                (0, ex.v8)(),
                t.current?.focus());
        },
        [n, l, s, t, o, a, r],
    );
}
function nb(e, t, n) {
    let l = i.useCallback(() => {
            t || (0, ex.r$)(nS.kx.EMOJI, e, n);
        }, [t, e, n]),
        s = i.useCallback(() => {
            !t && e.gifs?.allowSending && (0, ex.r$)(nS.kx.GIF, e, n);
        }, [t, e, n]),
        r = i.useCallback(() => {
            !t && e.stickers?.allowSending && (0, ex.r$)(nS.kx.STICKER, e, n);
        }, [t, e, n]);
    ((0, ez.Vo)({ event: ea.jej.TOGGLE_EMOJI_POPOUT, handler: l }),
        (0, ez.Vo)({ event: ea.jej.TOGGLE_GIF_PICKER, handler: s }),
        (0, ez.Vo)({ event: ea.jej.TOGGLE_STICKER_PICKER, handler: r }));
}
function nT(e, t, n) {
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
function nR() {
    let e = i.useRef(null),
        t = i.useCallback(() => {
            e.current?.onMaybeShowAutocomplete();
        }, []),
        n = i.useCallback(() => {
            e.current?.onHideAutocomplete();
        }, []);
    return { autocompleteRef: e, handleMaybeShowAutocomplete: t, handleHideAutocomplete: n };
}
function nO(e) {
    let t = i.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
}
function nM(e) {
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
function nL(e, t, n, l) {
    let i = e.getGuildId(),
        s = (0, m.bG)([eI.A], () => null != i && eI.A.isLurking(i), [i]),
        r = (0, m.bG)([eU.Ay, eB.default], () => {
            let e = eB.default.getCurrentUser();
            return (null != i && null != e ? eU.Ay.getMember(i, e.id)?.isPending : null) ?? !1;
        }),
        a = (0, m.cf)(
            [eG.A],
            () => {
                let i = e.isPrivate(),
                    s = eG.A.computePermissions(e),
                    a = h.zy(s, ea.xBc.CREATE_PUBLIC_THREADS) || h.zy(s, ea.xBc.CREATE_PRIVATE_THREADS),
                    o =
                        (!t.permissions?.requireCreateTherads || a) &&
                        (!t.permissions?.requireSendMessages || h.zy(s, ea.xBc.SEND_MESSAGES)),
                    u = o && h.zy(s, ea.xBc.ATTACH_FILES),
                    c = null != n,
                    d = (0, ew.UJ)(e);
                return {
                    disabled: l || r || (!i && !o) || d,
                    canAttachFiles: !0 === t.attachments && (i || r || u || c),
                    canCreateThreads: a,
                    canEveryoneSendMessages: eY.MJ(ea.xBc.SEND_MESSAGES, e),
                };
            },
            [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, l, r],
        );
    return { isLurking: s, isPendingMember: r, ...a };
}
function nk(e, t, n) {
    let [l, s, r] = (0, ex.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], c.x),
        a = (0, m.bG)([S.A], () => S.A.shouldShowPopup() && S.A.activeViewType() === e && S.A.activeChannelId() === n);
    i.useEffect(
        () => () => {
            (0, ex.v8)(e, n);
        },
        [e, n],
    );
    let o = i.useCallback(() => {
            null != l || a || t.current?.handleOuterClick();
        }, [l, a, t]),
        u = null == l || null == s || s !== e || r !== n;
    return { expressionPickerView: l, shouldHideExpressionPicker: u, handleOuterClick: o };
}
function nw(e, t) {
    return {
        handleAutocompleteVisibilityChange: i.useCallback(
            (n) => {
                n && (0, ex.v8)(e, t);
            },
            [e, t],
        ),
    };
}
let nP = i.memo(
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
                disabled: N,
                placeholder: _,
                accessibilityLabel: j,
                channel: b,
                type: T,
                focused: R,
                error: O,
                renderAttachButton: M,
                renderApplicationCommandIcon: w,
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
                allowNewLines: J = !0,
                characterCountClassName: $,
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
        u()(null != T, "chat input type must be set");
        let { analyticsLocations: eu } = (0, I.Ay)(E.A.CHANNEL_TEXT_AREA),
            ec = nO(t),
            eh = i.useRef(null),
            eC = i.useRef(null),
            eE = i.useRef(null),
            eI = i.useRef(null),
            eS = i.useRef(null),
            ev = i.useCallback(() => eE.current?.getSlateEditor() ?? null, []);
        ee?.(eE.current);
        let eN = (0, y.A)(b),
            e_ = (0, eD.n)("ChannelTextAreaContainer"),
            ej = (0, m.cf)([C.Ay], () => ({
                expressionPickerFormat: C.Ay.expressionPickerFormat,
                condensePickerWhenNarrow: C.Ay.condensePickerWhenNarrow,
            })),
            eb = e_ ? ej.expressionPickerFormat : C.IG.FLEXIBLE,
            eT = !e_ || ej.condensePickerWhenNarrow,
            [eR, eM] = i.useState(!eN);
        (0, A.i4)(ec, (e) => {
            let { width: t } = e;
            return eM(!eN && (null == t || t > 450));
        });
        let eL = eb === C.IG.HIDDEN,
            ek = eb === C.IG.CONDENSED || (eb === C.IG.FLEXIBLE && eT && !eR),
            { activeCommand: ew, activeCommandSection: eV } = (0, m.cf)([k.A], () => ({
                activeCommand: T.commands?.enabled ? k.A.getActiveCommand(b.id) : null,
                activeCommandSection: T.commands?.enabled ? k.A.getActiveCommandSection(b.id) : null,
            })),
            {
                isLurking: eH,
                isPendingMember: eW,
                disabled: ez,
                canAttachFiles: eY,
                canCreateThreads: eQ,
                canEveryoneSendMessages: e0,
            } = nL(b, T, ew, N),
            e1 = T.toolbarType === e$.O1.STATIC,
            e2 = !eP.D_.useSetting() && !(0, eq.isAndroidWeb)() && null != window.ResizeObserver,
            e3 = !e2 || !T.commands?.enabled || !R || "/" !== a,
            e8 = (0, ey.A)(),
            { fontSize: e6 } = (0, m.cf)([C.Ay], () => ({ fontSize: C.Ay.fontSize })),
            e5 = (0, m.bG)([eF.A], () => eF.A.isEnabled());
        nb(T, ez, b.id);
        let { eventEmitter: e7, handleEditorSelectionChanged: e4 } = nT(eE, a, o),
            e9 = i.useRef(a);
        e9.current = a;
        let te = i.useCallback(
                (e, t, n) => {
                    ("/" === t && "" === e9.current && T.commands?.enabled && e7.emit("command-sentinel-typed"),
                        U?.(e, t, n));
                },
                [U, T.commands?.enabled, e7],
            ),
            { submitting: tt, submit: tn, handleSubmit: tl } = nv(B, T, eE, eS, b.id),
            { autocompleteRef: ti, handleMaybeShowAutocomplete: ts, handleHideAutocomplete: ta } = nR(),
            tu = nN(tn, T, eE),
            tc = n_(eE),
            td = nj({ editorRef: eE, disabled: ez, textValue: a, channelId: b.id, chatInputType: T, submit: B }),
            tm = i.useCallback(
                (e, t, n) => {
                    let l = eE.current;
                    (null != e &&
                        null != l &&
                        (eK.default.track(ea.HAw.SOUNDMOJI_SELECT, {
                            channel_id: b.id,
                            guild_id: b.guild_id,
                            sound_guild_id: e.guildId,
                            sound_id: e.soundId,
                            source: t,
                        }),
                        l.insertSound(e)),
                        n && (0, ex.v8)(),
                        l?.focus());
                },
                [eE, b.id, b.guild_id],
            ),
            tA = i.useCallback(() => eS?.current?.hide(), []),
            { editorHeight: tE, handleResize: tI } = nM(G),
            {
                handleTab: ty,
                handleEnter: tS,
                handleSpace: tv,
                handleMoveSelection: tN,
            } = ((n = i.useCallback(
                () => !!(!e3 && eh.current?.onTabOrEnter(!1)) || ti.current?.onTabOrEnter(!1) || !1,
                [e3, eh, ti],
            )),
            (s = i.useCallback(
                () => !!(!e3 && eh.current?.onTabOrEnter(!0)) || ti.current?.onTabOrEnter(!0) || !1,
                [e3, eh, ti],
            )),
            {
                handleTab: n,
                handleEnter: s,
                handleSpace: i.useCallback(() => ti.current?.onSpace() || !1, [ti]),
                handleMoveSelection: i.useCallback(
                    (e) => !!(!e3 && eh.current?.onMoveSelection(e)) || ti.current?.onMoveSelection(e) || !1,
                    [e3, eh, ti],
                ),
            }),
            { expressionPickerView: tb, shouldHideExpressionPicker: tT, handleOuterClick: tR } = nk(T, eE, b.id),
            { selectedAutocompleteInputType: tO, selectedAutocompleteInputError: tM } = (function (e, t) {
                let [n, l] = i.useState({ selectedAutocompleteInputType: null, selectedAutocompleteInputError: !1 }),
                    s = i.useCallback(() => {
                        let e,
                            n = t.current?.getSlateEditor();
                        (null != n && (e = np.VW.getSelectedParentOfType(n, ep.mk)?.[0]),
                            l({
                                selectedAutocompleteInputType: e?.type ?? null,
                                selectedAutocompleteInputError: e?.error ?? !1,
                            }));
                    }, [t]);
                return (
                    i.useEffect(
                        () => (
                            e.on("selection-changed", s),
                            e.on("submit-failure", s),
                            s(),
                            () => {
                                (e.off("selection-changed", s), e.on("submit-failure", s));
                            }
                        ),
                        [s, e],
                    ),
                    n
                );
            })(e7, eE),
            { handleAutocompleteVisibilityChange: tL } = nw(T, b.id),
            tk = (function (e) {
                let { type: t, channelId: n } = e;
                return (0, em.bG)(
                    [S.A],
                    () => {
                        let e = S.A.activeViewType();
                        return null != e && e === t && S.A.activeChannelId() === n && S.A.shouldShowPopup();
                    },
                    [t, n],
                );
            })({ type: T, channelId: b.id }),
            tw = i.useCallback(() => {
                e7.emit("submit-failure");
            }, [e7]);
        (0, eJ.R)(e7, b.guild_id, b.id);
        let tP = null != D,
            tD = (ez && !((eH || eW) && e0)) || (tt && T.submit?.useDisabledStylesOnSubmit),
            tG = null;
        null != ew ? (tG = w?.(ew, eV, t4.g$)) : (!ez || eQ) && (tG = M?.(tP, t4.g$));
        let { isVisible: tV, showsUpsell: tH } = (0, ny.A)({
                type: T,
                textValue: a,
                maxCharacterCount: Y,
                showRemainingCharsAfterCount: q,
            }),
            tW = e2 && null != o && !ez && T.showCharacterCount && null == ew,
            tz = e2 && !__OVERLAY__ && null != o && null == ew && T.toolbarType !== e$.O1.NONE && !ez,
            tY = (function (e) {
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
                    { activeCommandOption: p, activeCommandOptionStates: g } = (0, m.cf)([k.A], () => ({
                        activeCommandOption: k.A.getActiveOption(a.id),
                        activeCommandOptionStates: k.A.getOptionStates(a.id),
                    })),
                    x = (0, m.bG)([eU.Ay, eB.default, tK], () => {
                        let e = eB.default.getCurrentUser();
                        if (null == e || !e.isStaff() || !a.isDM()) return !1;
                        let t = eB.default.getUser(a.getRecipientId());
                        if (!t?.isStaff()) return !1;
                        let n = eU.Ay.getNicknames(t.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
                        return n ? !tK.hasId(t.id) && n : (tB.delete(t.id) && tK.emitChange(), !1);
                    }),
                    A =
                        ((t = (0, m.bG)([tx.A, tf.A], () => {
                            let e = tx.A.getActivities().find(tj._C) ?? null;
                            if (e?.application_id == null) return e;
                            let t = tf.A.getApplication(e.application_id);
                            return null == t || (0, tp.n)(t, ea.gfo.EMBEDDED) ? null : e;
                        })),
                        (n = (0, m.bG)([eG.A], () => a.isPrivate() || eG.A.can(ea.xBc.SEND_MESSAGES, a), [a])),
                        (s = (0, m.bG)(
                            [tg.A],
                            () => a.isDM() && tg.A.getParty(t?.party?.id)?.has(a.getRecipientId()) === !0,
                            [a, t],
                        )),
                        (r = (0, m.bG)([t_], () => {
                            if (t_.isPermanentlyDismissed()) return !0;
                            let e = null != t ? (0, tC.N)(t) : null;
                            return null != e && (t_.isDismissedSession(e) || t_.hasInvitedChannel(e, a.id));
                        })),
                        null == t || !n || s || r ? null : t),
                    C = (0, tJ.Ay)((e) => e.channelId === a.id);
                return i.useMemo(() => {
                    let e = [],
                        t = [];
                    return (
                        null != a.guild_id &&
                            o === e$.oU.NORMAL &&
                            t.push((0, l.jsx)(t0.A, { guildId: a.guild_id, channel: a, className: t4.UW })),
                        null != u &&
                            e.push(
                                (0, l.jsx)(tF, {
                                    activeCommand: u,
                                    activeOption: p ?? null,
                                    optionStates: g,
                                    channelId: a.id,
                                }),
                            ),
                        null != c && e.push((0, l.jsx)(to, { reply: c, chatInputType: o })),
                        x && e.push((0, l.jsx)(tZ, {})),
                        null != A && e.push((0, l.jsx)(tU, { channel: a, activity: A })),
                        null != d && e.push((0, l.jsx)(t7, { channel: a, scheduledMessageDraft: d })),
                        "timestampMentionInput" === h && t.push((0, l.jsx)(tq, { error: f ?? !1 })),
                        C && e.push((0, l.jsx)(tQ, { channelId: a.id })),
                        { stacked: e, floating: t }
                    );
                }, [u, p, g, a, C, c, x, A, o, d, h, f]);
            })({
                channel: b,
                type: T,
                activeCommand: ew,
                pendingReply: D,
                scheduledMessageDraft: er,
                selectedAutocompleteInputType: tO,
                selectedAutocompleteInputError: tM,
            }),
            t$ = 0 === a.trim().length,
            tX = null != D ? [X, tr].filter(Boolean).join(" ") : X,
            t1 = T.layout === e$.wt.INLINE,
            t2 = T.layout === e$.wt.FLUSH,
            t3 = (0, l.jsx)("div", { ref: eC, className: t4.BW }),
            t8 = tk ? (0, l.jsx)(L, { align: "right", positionTargetRef: eC, channel: b }) : null,
            t6 =
                null != P
                    ? P()
                    : (0, l.jsx)(ne.A, {
                          type: T,
                          disabled: ez,
                          channel: b,
                          handleSubmit: tl,
                          isEmpty: t$,
                          showAllButtons: !ek && !eL,
                          expressionButtonsHidden: eL,
                      }),
            t5 = tW
                ? (0, l.jsx)(nm.A, {
                      type: T,
                      textValue: a,
                      className: $,
                      maxCharacterCount: Y,
                      showRemainingCharsAfterCount: q,
                  })
                : null;
        return (
            i.useEffect(() => {
                R && eZ._.dispatch(ea.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: b.id });
            }, [R, b.id]),
            (0, l.jsx)(eg.Sv, {
                value: e7,
                children: (0, l.jsxs)(I.f5, {
                    value: eu,
                    children: [
                        tz && e1
                            ? (0, l.jsx)(nI, { getSlateEditor: ev, onInsertEmoji: tc, type: T, channel: b })
                            : tz
                              ? (0, l.jsx)(nf.A, { ref: eS, getSlateEditor: ev, containerRef: eI, options: T.markdown })
                              : null,
                        (0, l.jsxs)("div", {
                            ref: ec,
                            className: r()(c, {
                                [t4.gM]: !0,
                                [t4.Bz]: tV && tW,
                                [t4.Qv]: tH && tW,
                                [t4.h9]: tD,
                                [t4.mr]: K,
                                [t4.Wn]: d.Fr,
                                [t4.Ls]: t1,
                                [t4.AH]: t2,
                                [t4.z3]: null != O,
                            }),
                            children: [
                                t1 || t2 ? null : (0, l.jsx)(t9, { bars: tY }),
                                (0, l.jsxs)("div", {
                                    ref: eI,
                                    onScroll: tA,
                                    className: r()(h, { [t4.xx]: !0, [t4.k6]: !el, [t4.Ri]: tY.stacked.length > 0 }),
                                    children: [
                                        (0, l.jsx)(th, { channelId: b.id, chatInputType: T }),
                                        T.hideAttachmentArea
                                            ? null
                                            : (0, l.jsx)(nh.A, { channelId: b.id, type: T, canAttachFiles: eY }),
                                        (0, l.jsxs)("div", {
                                            className: r()(t4.vW, {
                                                [t4.BF]: tD,
                                                [t4.RL]: T !== e$.oU.EDIT && (null != tG || (tD && null == tG) || eH),
                                                [t4.fk]: T === e$.oU.THREAD_CREATION,
                                                [t4.TZ]:
                                                    T === e$.oU.CREATE_FORUM_POST || T === e$.oU.FORWARD_MESSAGE_INPUT,
                                                [t4.$i]: T === e$.oU.USER_PROFILE_REPLY,
                                            }),
                                            onMouseDown: tR,
                                            children: [
                                                t8,
                                                tG,
                                                (0, l.jsx)(p.vN, {
                                                    ringTarget: ec,
                                                    ringClassName: t4.Rg,
                                                    children: (0, l.jsx)(eX.A, {
                                                        ref: eE,
                                                        id: x,
                                                        focused: R,
                                                        useSlate: e2,
                                                        textValue: a,
                                                        richValue: o,
                                                        disabled: ez,
                                                        placeholder: _,
                                                        required: v,
                                                        accessibilityLabel: j,
                                                        isPreviewing: (eH || eW) && e0,
                                                        channel: b,
                                                        type: T,
                                                        canPasteFiles: eY,
                                                        uploadPromptCharacterCount: ea.CS1,
                                                        maxCharacterCount: Y ?? e8,
                                                        allowNewLines: J,
                                                        "aria-describedby": tX,
                                                        onChange: te,
                                                        onResize: tI,
                                                        onBlur: V,
                                                        onFocus: F,
                                                        onKeyDown: H,
                                                        onSubmit: tn,
                                                        onSubmitFailure: tw,
                                                        onTab: ty,
                                                        onEnter: tS,
                                                        onSpace: tv,
                                                        onMoveSelection: tN,
                                                        onSelectionChanged: e4,
                                                        onMaybeShowAutocomplete: ts,
                                                        onHideAutocomplete: ta,
                                                        promptToUpload: W,
                                                        fontSize: e6,
                                                        spellcheckEnabled: e5,
                                                        canOnlyUseTextCommands: tP,
                                                        className: r()(
                                                            {
                                                                [t4.QI]: T === e$.oU.THREAD_CREATION,
                                                                [t4.AV]: T === e$.oU.PROFILE_BIO_INPUT,
                                                                [t4.GR]: T === e$.oU.OVERLAY_INLINE_REPLY,
                                                            },
                                                            f,
                                                        ),
                                                        "aria-labelledby": Q,
                                                        showValueWhenDisabled: eo,
                                                    }),
                                                }),
                                                t6,
                                                t3,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(nd, { channel: b, type: T, scheduledMessageDraft: er }),
                                e3 ? null : (0, l.jsx)(ed, { ref: eh, channel: b, canOnlyUseTextCommands: tP }),
                                (0, l.jsx)(ef.A, {
                                    ref: ti,
                                    channel: b,
                                    canMentionRoles: z,
                                    canMentionChannels: Z,
                                    useNewSlashCommands: e2,
                                    canOnlyUseTextCommands: tP,
                                    canSendStickers: T.stickers?.allowSending,
                                    canSendSoundmoji: T.soundmoji?.allowSending,
                                    textValue: a,
                                    focused: R,
                                    expressionPickerView: tb,
                                    type: T,
                                    targetRef: ec,
                                    editorRef: eE,
                                    onSendMessage: tn,
                                    onSendSticker: td,
                                    onVisibilityChange: tL,
                                    editorScrollerRef: eI,
                                    editorHeight: tE,
                                    barsHeight: 40 * tY.floating.length,
                                    setValue: (e, t) => te?.(null, e, t),
                                    position: et,
                                }),
                                (0, l.jsx)(eO, { textValue: a, editorHeight: tE, channelId: b.id }),
                                t5,
                                en,
                            ],
                        }),
                        (0, l.jsx)(g.U, { error: O }),
                        tT
                            ? null
                            : (0, l.jsx)(eA.A, {
                                  positionTargetRef: ec,
                                  type: T,
                                  onSelectGIF: tu,
                                  onSelectEmoji: tc,
                                  onSelectSticker: td,
                                  onSelectSound: tm,
                                  channel: b,
                                  closeOnModalOuterClick: ei,
                                  parentModalKey: es,
                                  position: "top",
                                  align: "right",
                                  positionLayerClassName: t4.BD,
                              }),
                    ],
                }),
            })
        );
    }),
);
