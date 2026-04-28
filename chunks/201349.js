"use strict";
n.d(t, {
    HG: () => nr,
    Sk: () => nm,
    C: () => na,
    v7: () => nu,
    Zx: () => nl,
    L0: () => nd,
    N_: () => no,
    MD: () => np,
    Ay: () => ng,
    uW: () => nf,
    NO: () => ns,
    ck: () => nh,
    ml: () => nc,
    Vu: () => ni,
});
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(143236),
    o = n(284009),
    c = n.n(o),
    u = n(942381),
    d = n(607399),
    h = n(136722),
    m = n(17928),
    p = n(192308),
    f = n(187322),
    g = n(511274),
    x = n(465532),
    C = n(765671),
    A = n(775602),
    E = n(793574),
    I = n(688810),
    y = n(177640),
    v = n(989837),
    S = n(289873),
    N = n(268218),
    j = n(750506),
    _ = n(60809),
    T = n(985018),
    b = n(131552);
let R = { width: 500, height: _.$V },
    O = (0, N.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("99796"),
                n.e("94232"),
                n.e("77598"),
                n.e("93816"),
                n.e("23491"),
                n.e("42430"),
                n.e("80813"),
                n.e("72771"),
                n.e("64548"),
                n.e("34552"),
                n.e("55411"),
                n.e("93103"),
                n.e("91007"),
                n.e("88342"),
                n.e("42451"),
                n.e("54975"),
                n.e("98965"),
                n.e("49697"),
                n.e("71273"),
                n.e("77265"),
                n.e("71133"),
                n.e("35313"),
                n.e("80854"),
                n.e("35395"),
                n.e("43780"),
                n.e("8362"),
                n.e("27773"),
                n.e("61268"),
                n.e("52229"),
                n.e("18024"),
                n.e("78195"),
                n.e("22261"),
                n.e("74021"),
                n.e("37977"),
                n.e("83518"),
                n.e("41701"),
                n.e("59848"),
                n.e("22094"),
                n.e("61764"),
                n.e("37065"),
                n.e("68974"),
                n.e("56385"),
                n.e("59132"),
                n.e("89203"),
                n.e("35621"),
            ]).then(n.bind(n, 854379)),
        webpackId: 854379,
        renderLoader: () => (0, l.jsx)("div", { className: b.R4, style: R, children: (0, l.jsx)(S.y, {}) }),
    }),
    L = { height: _.$V },
    w = i.memo(function (e) {
        let { positionTargetRef: t, align: n, ...i } = e;
        return (0, l.jsx)("span", {
            style: _.sK,
            children: (0, l.jsx)(j.nE, {
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
                        style: L,
                        "aria-label": T.intl.string(T.t["3CNGLK"]),
                        children: t && (0, l.jsx)(O, { ...i }),
                    });
                },
            }),
        });
    });
var M = n(861382),
    k = n(735438),
    P = n.n(k),
    D = n(537652),
    U = n(155718),
    V = n(58149),
    G = n(659280),
    F = n(579940),
    H = n(962125),
    W = n(915089),
    B = n(850992),
    K = n(464651),
    z = n(286509),
    Z = n(721768),
    q = n(842209),
    J = n(210978),
    Y = n(392054),
    X = n(168186),
    $ = n(990078),
    Q = n(939249),
    ee = n(802019),
    et = n(649671),
    en = n(282214);
let el = [16, 8, 8, 8];
function ei(e) {
    let {
            className: t,
            channel: n,
            sections: s,
            activeCategoryIndex: r,
            filteredSectionId: o,
            onSectionClick: c,
            applicationCommandListRef: u,
        } = e,
        d = i.useRef(null),
        h = i.useCallback(
            (e, t) => {
                let n = 8;
                return s[t + 1]?.type === Y.Hf.BUILT_IN && (n += 8), 32 + n;
            },
            [s],
        ),
        m = i.useCallback((e, t) => (t ? 8 * (s[e + 1]?.type !== Y.Hf.BUILT_IN) : 8 * (0 !== e)), [s]),
        p = i.useCallback(
            (e, t) => {
                let i = s[t];
                if (null == i) return;
                let a = (0, et.Rg)(i),
                    u = 4 * (i.type === Y.Hf.BUILT_IN),
                    d = 32 - 2 * u,
                    h = (0, l.jsx)(a, {
                        channel: n,
                        section: i,
                        isSelected: null != o ? i.id === o : r === t,
                        padding: u,
                        width: d,
                        height: d,
                        selectable: !0,
                    }),
                    m = i.type !== Y.Hf.BUILT_IN && t < s.length - 1 && s[t + 1].type === Y.Hf.BUILT_IN;
                return (0, l.jsxs)(
                    "div",
                    {
                        className: en.uW,
                        children: [
                            (0, l.jsx)($.m, {
                                text: i.name,
                                position: "right",
                                asContainer: !0,
                                children: (0, l.jsx)(Q.D, {
                                    "aria-label": i.name,
                                    onClick: () => {
                                        c(i);
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
            [r, n, c, s, o],
        );
    return 0 === s.length
        ? null
        : (0, l.jsx)("div", {
              className: a()(t, en.iE),
              children: (0, l.jsx)(ee.A, {
                  categoryListRef: d,
                  expressionsListRef: u,
                  store: B.LS,
                  categories: s,
                  className: en.p_,
                  renderCategoryListItem: p,
                  rowCount: s.length,
                  categoryHeight: h,
                  listPadding: el,
                  getScrollOffsetForIndex: m,
              }),
          });
}
var es = n(746388),
    ea = n(73510),
    er = n(652215),
    eo = n(13297),
    ec = n(911385);
let eu = [8, 8, 0, 8],
    ed = P().debounce(() => {
        (0, V.zV)(er.HAw.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300),
    eh = i.forwardRef(function (e, t) {
        let { channel: n, canOnlyUseTextCommands: s } = e,
            r = i.useRef(!1),
            o = i.useRef(0),
            [c, u] = i.useState(0),
            d = i.useRef(null),
            [h, m] = i.useState(!1),
            p = B.LS.useStore((e) => e.activeCategoryIndex);
        i.useEffect(() => {
            (0, V.zV)(er.HAw.APPLICATION_COMMAND_BROWSER_OPENED);
        }, []);
        let {
                sectionDescriptors: f,
                activeSections: g,
                commandsByActiveSection: x,
                hasMoreAfter: C,
                commands: A,
                filteredSectionId: E,
                scrollDown: I,
                filterSection: y,
            } = q.cu({
                context: { channel: n, type: "channel" },
                filters: {
                    commandTypes: [U.kc.CHAT],
                    builtIns: s ? J.n.ONLY_TEXT : J.n.ALLOW,
                    applicationCommands: !s,
                },
                options: { placeholderCount: 7, limit: ea.Hi, includeFrecency: !0 },
                allowFetch: !0,
            }),
            v = (0, K.Fk)({
                activeCategoryIndex: p,
                isScrolling: r,
                listRef: d,
                onActiveCategoryIndexChange: (e) => {
                    let t = g[e];
                    if (null != t) {
                        let e = f.findIndex((e) => e.id === t.id);
                        B.LS.setActiveCategoryIndex(e);
                    }
                },
                scrollOffset: 20,
                searchQuery: "",
            }),
            S = (e) => {
                let t = g.length,
                    n = x.reduce((e, t) => e + t.data.length, 0) - 7 * !!C;
                C && e + 420 > 48 * t + 56 * n - 512 && I(), v(e), ed(), (o.current = e);
            },
            N = i.useRef(S);
        i.useEffect(() => {
            N.current = S;
        }),
            i.useEffect(() => {
                N.current(o.current);
            }, [A]);
        let j = i.useCallback((e) => (e !== g.length - 1 || C ? 16 : 0), [g.length, C]),
            _ = x.map((e) => e.data.length);
        i.useEffect(() => {
            null != d.current && h && null != c && d.current.scrollRowIntoView(c);
        }, [h, c]),
            i.useLayoutEffect(() => {
                null != E && d.current?.scrollToSectionTop(0);
            }, [A, E]);
        let b = i.useCallback(
                (e) => {
                    e.id === E || e.id === ea.Ik.FRECENCY ? (y(null), d.current?.scrollToSectionTop(0)) : y(e.id);
                },
                [y, E],
            ),
            R = i.useCallback(
                (e, t, l) => {
                    Z.Gf({ channelId: n.id, command: e, section: t, location: Y.Oh.DISCOVERY, triggerSection: l });
                },
                [n.id],
            );
        i.useImperativeHandle(
            t,
            () => ({
                onTabOrEnter: (e) => {
                    if (null == c) return !e && (u(0), !0);
                    if (null == c) return !1;
                    let t = 0,
                        n = 0;
                    for (let e of x)
                        if (((t = n), c < (n += e.data.length))) {
                            let n = e.data[c - t],
                                l = f.find((e) => e.id === n.applicationId);
                            R(n, l, (0, X.$S)(e.section));
                            break;
                        }
                    return !0;
                },
                onMoveSelection: (e) => {
                    if (0 === A.length) return !0;
                    let t = 7 * !!C,
                        n = A.length + t,
                        l = null == c ? 0 : c + e;
                    return l >= n ? (l = n - 1) : l < 0 && (l = 0), u(l), m(!0), !0;
                },
            }),
            [A.length, x, C, f, R, c],
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
            L = i.useCallback(
                (e, t) => {
                    let n = e === g.length - 1,
                        i = g[e],
                        { data: s } = x[e];
                    return (0, l.jsxs)(
                        "ul",
                        {
                            role: "group",
                            "aria-label": i.name,
                            className: a()(eo.Wy, { [eo.YD]: n }),
                            children: [
                                t,
                                0 === s.length &&
                                    (0, l.jsx)(D.A, {
                                        message: T.intl.format(T.t.WoQXT6, { applicationName: i.name }),
                                        noResultsImageURL: ec,
                                        className: eo.qK,
                                    }),
                            ],
                        },
                        e,
                    );
                },
                [g, x],
            ),
            w = i.useCallback(
                (e, t) => {
                    let i = x[t.sectionIndex],
                        s = i.data[t.sectionRowIndex],
                        a = `${i.section.id}:${s?.id ?? e}`;
                    if (
                        null == s ||
                        (i.section.id !== s.applicationId && i.section.id !== ea.Ik.FRECENCY) ||
                        s.inputType === Y.y$.PLACEHOLDER
                    )
                        return (0, l.jsx)(es.A, {}, a);
                    let r = f.find((e) => e.id === s.applicationId);
                    return (0, l.jsx)(
                        G.Ay.NewCommand,
                        {
                            index: e,
                            command: s,
                            channel: n,
                            className: eo.D5,
                            selected: c === e,
                            showImage: i.section.id !== s.applicationId,
                            section: r,
                            onClick: () => R(s, r, (0, X.$S)(i.section)),
                            onHover: () => {
                                u(null), m(!1);
                            },
                        },
                        a,
                    );
                },
                [n, x, R, f, c],
            ),
            M = (0, W.GV)();
        return (
            (0, F.gf)(M, !0, (0, G.aI)(c)),
            i.useEffect(
                () => () => {
                    (0, F.nQ)();
                },
                [],
            ),
            (0, l.jsxs)(G.Ay, {
                id: M,
                className: eo.x9,
                innerClassName: eo.iE,
                onMouseDown: em,
                children: [
                    (0, l.jsx)(ei, {
                        className: eo.H$,
                        channel: n,
                        sections: f,
                        filteredSectionId: E,
                        activeCategoryIndex: p,
                        onSectionClick: b,
                        applicationCommandListRef: d,
                    }),
                    (0, l.jsx)(H.A, {
                        role: "listbox",
                        className: eo.p_,
                        listPadding: eu,
                        onScroll: S,
                        renderRow: w,
                        renderSection: L,
                        renderSectionHeader: O,
                        rowCount: g.length,
                        rowCountBySection: _,
                        rowHeight: 56,
                        sectionHeaderHeight: 32,
                        sectionMarginBottom: j,
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
var ep = n(702841),
    ef = n(305070),
    eg = n(31498),
    ex = n(598071),
    eC = n(151271),
    eA = n(731231),
    eE = n(256265),
    eI = n(703244),
    ey = n(857071),
    ev = n(135621),
    eS = n(105330),
    eN = n(495544),
    ej = n(559908),
    e_ = n(620141),
    eT = n(224964),
    eb = n(31408),
    eR = n(851110);
function eO(e) {
    let { editorHeight: t, textValue: n, channelId: l } = e,
        s = i.useRef(n),
        a = (0, eS.l)({ editorHeight: t }),
        r = (0, eT.A)(),
        o = (0, m.bG)([ej.Ay, eN.default], () => ej.Ay.isComboing(eN.default.getId(), l)),
        c = a?.left ?? 0,
        u = (a?.top ?? 0) - 16,
        d = 0 === n.length,
        h = i.useMemo(() => 0.05 > Math.random(), [d]);
    return (
        i.useEffect(() => {
            0 !== n.length && n !== s.current && o && (r.fire(c, u, h ? { sprite: eR.dR } : null), (s.current = n));
        }, [n, o, c, u, h, r]),
        null
    );
}
function eL(e) {
    return (0, l.jsx)(e_.A, { confettiLocation: eb.k.CHAT_INPUT, children: (0, l.jsx)(eO, { ...e }) });
}
var ew = n(931664),
    eM = n(631576),
    ek = n(68935),
    eP = n(406704),
    eD = n(253932),
    eU = n(696451),
    eV = n(576705),
    eG = n(309010),
    eF = n(638128),
    eH = n(522602),
    eW = n(287809),
    eB = n(821102),
    eK = n(954571),
    ez = n(234320),
    eZ = n(625494),
    eq = n(488926),
    eJ = n(723702),
    eY = n(486319),
    eX = n(355622),
    e$ = n(383442),
    eQ = n(834730),
    e0 = n(140735),
    e1 = n(463930),
    e2 = n(935063),
    e6 = n(73392),
    e3 = n(763754),
    e7 = n(967144),
    e4 = n(118517),
    e8 = n(976860),
    e5 = n(747926),
    e9 = n(232835),
    te = n(285796),
    tt = n(630816);
function tn(e) {
    let { onClick: t, "aria-label": n } = e;
    return (0, l.jsx)(Q.D, {
        className: tt.b,
        onClick: t,
        "aria-label": n,
        children: (0, l.jsx)(te.a, { size: "md", color: "currentColor", className: tt.u }),
    });
}
var tl = n(1468);
let ti = "channel-reply-bar-a11y-description";
function ts(e) {
    let { channel: t, message: n, replyChainLength: s } = e,
        a = i.useRef(s);
    return (
        i.useEffect(() => {
            a.current = s;
        }),
        i.useEffect(() => {
            (0, V.zV)(er.HAw.THREAD_NUDGE_SHOWN, {
                type: "Reply Chain (3)",
                reply_chain_length: a.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t]),
        (0, l.jsxs)(Q.D, {
            onClick: function () {
                (0, e4.Jx)(t.id), (0, e5.Tv)(t, n, "Reply Chain Nudge");
            },
            className: tl._r,
            focusProps: { offset: { right: -4, left: -4 } },
            children: [
                (0, l.jsx)(eQ.E, {
                    color: "text-default",
                    className: tl.Qq,
                    variant: "text-sm/normal",
                    children: T.intl.format(T.t.B3V0FM, { count: Math.min(10, s + 1) }),
                }),
                (0, l.jsx)(eQ.E, {
                    color: "text-link",
                    className: tl.NG,
                    variant: "text-sm/semibold",
                    children: T.intl.string(T.t.rBIGBL),
                }),
            ],
        })
    );
}
function ta(e) {
    let t,
        n,
        { reply: i, chatInputType: s } = e,
        { channel: r, message: o, shouldMention: c, showMentionToggle: u } = i,
        {
            guildId: d,
            nick: h,
            colorString: p,
            colorStrings: f,
            colorRoleName: g,
            authorId: x,
            displayNameStyles: C,
        } = (0, e3.Ay)(o),
        A = (0, e7.gn)(d, x, f),
        E = (0, e6.a)({ displayNameStyles: C }),
        I =
            ((t = r.id),
            (n = o.id),
            (0, m.bG)([e9.A], () => {
                let e = n;
                for (let n = 0; n < 10; n++) {
                    let l = e9.A.getMessage(t, e);
                    if (l?.type !== er.lAJ.REPLY || null == l.messageReference) return n;
                    e = l.messageReference.message_id;
                }
                return 10;
            }, [t, n])),
        y = (0, eP.n)(r, o),
        v = s.showThreadPromptOnReply && I >= 2 && y;
    return (0, l.jsx)("div", {
        className: tl.e1,
        children: (0, l.jsxs)("div", {
            className: tl.kL,
            children: [
                (0, l.jsxs)("div", {
                    className: tl.eU,
                    children: [
                        (0, l.jsx)(e0.A, { id: ti, children: T.intl.formatToPlainString(T.t.EpJL4E, { username: h }) }),
                        (0, l.jsx)(Q.D, {
                            onClick: () => (0, e8.pX)(er.BVt.CHANNEL(r.getGuildId(), r.id, o.id)),
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, l.jsx)(eQ.E, {
                                color: "text-default",
                                className: a()(tl.Qq, tl.Fn),
                                variant: "text-sm/normal",
                                children: T.intl.format(T.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, l.jsx)(
                                            e1.g,
                                            {
                                                className: tl.UU,
                                                name: h,
                                                colorString: p,
                                                colorStrings: A,
                                                roleName: g,
                                                displayNameStylesFont: E,
                                            },
                                            t,
                                        ),
                                }),
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: tl.o1,
                            children: [
                                u &&
                                    (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)($.m, {
                                                asContainer: !0,
                                                text: c ? T.intl.string(T.t.DH2o6R) : T.intl.string(T.t.utGGIY),
                                                children: (0, l.jsx)(Q.D, {
                                                    role: "switch",
                                                    "aria-checked": c,
                                                    onClick: function (e) {
                                                        e.stopPropagation(), (0, e4.vz)(r.id, !c);
                                                    },
                                                    children: (0, l.jsxs)(eQ.E, {
                                                        variant: "text-sm/bold",
                                                        color: c ? "text-link" : "text-muted",
                                                        className: tl.Z4,
                                                        children: [
                                                            (0, l.jsx)(e2.X, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": T.intl.string(T.t.P8tvKG),
                                                                className: tl.mM,
                                                            }),
                                                            c ? T.intl.string(T.t.p9jC2r) : T.intl.string(T.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, l.jsx)("div", { className: tl.me, "aria-hidden": !0 }),
                                        ],
                                    }),
                                (0, l.jsx)(tn, {
                                    onClick: function (e) {
                                        e.stopPropagation(), (0, e4.Jx)(r.id);
                                    },
                                    "aria-label": T.intl.string(T.t.jSnJGT),
                                }),
                            ],
                        }),
                    ],
                }),
                v && (0, l.jsx)(ts, { channel: r, message: o, replyChainLength: I }),
            ],
        }),
    });
}
var tr = n(749314),
    to = n(148355),
    tc = n(74995);
let tu = i.memo(function (e) {
    let { channelId: t, chatInputType: n } = e,
        [s, a] = i.useState(null),
        r = (0, m.bG)([ew.A], () => ew.A.getStickerPreview(t, n.drafts.type));
    return n.stickers?.allowSending && null != r && 0 !== r.length
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", {
                      className: tc.Tz,
                      children: r.map((e) =>
                          (0, l.jsxs)(
                              "div",
                              {
                                  className: tc.dp,
                                  children: [
                                      (0, l.jsx)(Q.D, {
                                          onFocus: () => a(e.id),
                                          onBlur: () => a(null),
                                          className: tc.b,
                                          "aria-label": T.intl.formatToPlainString(T.t.BGAQRd, { name: e.name }),
                                          onClick: () => (0, eM.x5)(t, n.drafts.type),
                                          children: (0, l.jsx)("div", {
                                              className: tc.Nk,
                                              children: (0, l.jsx)(te.a, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: tc.ut,
                                              }),
                                          }),
                                      }),
                                      (0, l.jsx)(to.A, {
                                          isInteracting: s === e.id,
                                          className: tc.UV,
                                          size: 48,
                                          sticker: e,
                                      }),
                                  ],
                              },
                              e.id,
                          ),
                      ),
                  }),
                  (0, l.jsx)(tr.A, { className: tc.R }),
              ],
          })
        : null;
});
var td = n(612394);
n(321073);
var th = n(442433);
n(827669);
var tm = n(448702);
function tp(e) {
    let t,
        s,
        r,
        { className: o, activeCommand: c, activeOption: u, optionStates: d, channelId: h } = e,
        m = i.useCallback(
            (e) => {
                let t = c?.rootCommand?.id;
                null == t
                    ? e.preventDefault()
                    : (0, th.L3)(e, async () => {
                          let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                          return (n) => (0, l.jsx)(e, { ...n, id: t, label: T.intl.string(T.t.oJ1Muw) });
                      });
            },
            [c?.rootCommand?.id],
        ),
        p = i.useCallback(() => {
            Z.Gf({ channelId: h, command: null, section: null });
        }, [h]);
    if (null == c) return null;
    if (null != u) {
        let e = d[u.name].lastValidationResult;
        (t = u.displayName), (s = u.displayDescription), (r = e?.success ? null : e?.error);
    } else (t = `/${c.displayName}`), (s = c.displayDescription), (r = null);
    return (0, l.jsxs)("div", {
        className: a()(o, tm.M0),
        onContextMenu: m,
        children: [
            (0, l.jsxs)("div", {
                className: tm.iz,
                children: [
                    (0, l.jsx)("span", { className: tm.UU, children: t }),
                    null != r
                        ? (0, l.jsx)("span", { className: tm.z3, children: r })
                        : (0, l.jsx)("span", { className: tm.h_, children: s }),
                ],
            }),
            (0, l.jsx)("div", {
                className: tm.o1,
                children: (0, l.jsx)(tn, { onClick: p, "aria-label": T.intl.string(T.t.cpT0Cq) }),
            }),
        ],
    });
}
var tf = n(228366),
    tg = n(734057);
let tx = new Set();
class tC extends m.Ay.PersistedStore {
    static displayName = "PTOStore";
    static persistKey = "PTOStore";
    initialize(e) {
        this.waitFor(tg.A, eU.Ay, eG.A, eW.default), null != e && (tx = new Set(e));
    }
    hasId(e) {
        return tx.has(e);
    }
    getState() {
        return [...tx];
    }
}
let tA = new tC(tf.h, {}),
    tE = () => {
        let e = eG.A.getChannelId();
        if (null == e) return;
        let t = tg.A.getChannel(e);
        null != t && t.isPrivate() && (tx.has(t.getRecipientId()) || (tx.add(t.getRecipientId()), tA.emitChange()));
    },
    tI = () =>
        (0, l.jsxs)("div", {
            className: tl.eU,
            children: [
                (0, l.jsx)(eQ.E, {
                    variant: "text-sm/medium",
                    className: a()(tl.Qq, tl.Fn),
                    children: T.intl.string(T.t["2UvR1E"]),
                }),
                (0, l.jsx)("div", {
                    className: tl.o1,
                    children: (0, l.jsx)(tn, { onClick: tE, "aria-label": T.intl.string(T.t.cpT0Cq) }),
                }),
            ],
        });
var ty = n(278351);
let tv = (e) => {
    let { error: t } = e;
    return (0, l.jsxs)("div", {
        className: ty.M,
        children: [
            (0, l.jsx)(eQ.E, { variant: "text-xs/bold", color: "text-strong", children: T.intl.string(T.t["4VDCG0"]) }),
            t
                ? (0, l.jsx)(eQ.E, { variant: "text-xs/medium", className: ty.z, children: T.intl.string(T.t.qNorwt) })
                : (0, l.jsx)(eQ.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: T.intl.string(T.t["260qZS"]),
                  }),
        ],
    });
};
var tS = n(575293),
    tN = n(151282),
    tj = n(1372);
function t_(e) {
    let { pendingScheduledMessage: t } = e,
        { channelId: n, scheduledTimestamp: i } = t;
    return (0, l.jsx)("div", {
        className: tj.e1,
        children: (0, l.jsx)("div", {
            className: tj.kL,
            children: (0, l.jsxs)("div", {
                className: tj.g3,
                children: [
                    (0, l.jsx)(eQ.E, {
                        color: "text-default",
                        className: a()(tj.Qq, tj.a3),
                        variant: "text-sm/normal",
                        children: T.intl.formatToPlainString(T.t["MQcRX/"], { timestamp: new Date(i).valueOf() }),
                    }),
                    (0, l.jsx)("div", {
                        className: tj.o1,
                        children: (0, l.jsx)(tn, {
                            onClick: function (e) {
                                e.stopPropagation(), (0, tN.Ps)(n);
                            },
                            "aria-label": T.intl.string(T.t.cpT0Cq),
                        }),
                    }),
                ],
            }),
        }),
    });
}
var tT = n(266599);
function tb(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, l.jsx)("div", { children: e }, t)),
        s = t.floating.map((e, t) => (0, l.jsx)(i.Fragment, { children: e }, t));
    return 0 === n.length && 0 === s.length
        ? null
        : (0, l.jsxs)(i.Fragment, {
              children: [
                  s.length > 0 && (0, l.jsx)("div", { className: tT.Vq, children: s }),
                  n.length > 0 && (0, l.jsx)("div", { className: tT.MD, children: n }),
              ],
          });
}
var tR = n(729666),
    tO = n(110259),
    tL = n(150934),
    tw = n(139286),
    tM = n(47167),
    tk = n(713654),
    tP = n(252263),
    tD = n(8455),
    tU = n(67259),
    tV = n(132645);
function tG(e) {
    let { thread: t, pendingScheduledMessage: n } = e,
        s = (0, tD.Vp)({ location: "ThreadsAlsoSendToChannelArea" }),
        [a, r] = (0, m.yK)([tg.A, tU.A], () => [
            t.isThread() ? tg.A.getChannel(t.parent_id) : null,
            tU.A.getAlsoSendToChannel(t.id),
        ]),
        o = (0, tM.Ay)(a),
        c = i.useCallback(
            (e) => {
                eK.default.track(er.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_TOGGLED, {
                    value: e,
                    guild_id: t.guild_id,
                    channel_id: t.id,
                }),
                    (0, tP.B)({ channelId: t.id, enabled: e });
            },
            [t],
        );
    if (
        ((0, tw.A)(
            { name: tO.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL, type: tO.ImpressionTypes.VIEW },
            { disableTrack: null == a || !s.enabled },
            [a, s.enabled],
        ),
        !s.enabled || null == a)
    )
        return null;
    let u = (0, tk.gU)(a),
        d = T.intl.format(T.t.UqL10G, {
            callToActionHook: (e, t) =>
                (0, l.jsx)(
                    eQ.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: tV.Pf,
                        children: T.intl.string(T.t.Pi3JW7),
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
                        className: tV.Pf,
                        children: [null == u ? null : (0, l.jsx)(u, { color: "currentColor", className: tV.Kk }, t), e],
                    },
                    t,
                ),
        });
    return (0, l.jsx)("div", {
        className: tV.kL,
        children: (0, l.jsx)(tL.S, { checked: r, disabled: null != n, onChange: c, label: d, labelType: "secondary" }),
    });
}
function tF(e) {
    let { channel: t, type: n, pendingScheduledMessage: i } = e,
        { shouldShow: s } = (function (e) {
            let { channel: t, type: n } = e,
                l = (0, m.bG)([tg.A], () => {
                    let e = tg.A.getChannel(t.parent_id);
                    return e?.isForumLikeChannel() ?? !1;
                }),
                i = [eX.oU.NORMAL, eX.oU.SIDEBAR].includes(n);
            return { shouldShow: t.isThread() && !l && i };
        })({ channel: t, type: n });
    return s ? (0, l.jsx)(tG, { thread: t, pendingScheduledMessage: i }) : null;
}
var tH = n(822610),
    tW = n(625928),
    tB = n(670482),
    tK = n(621466),
    tz = n(902001),
    tZ = n(899536),
    tq = n(74833),
    tJ = n(216964),
    tY = n(387758),
    tX = n(39623),
    t$ = n(267102),
    tQ = n(186306),
    t0 = n(339871),
    t1 = n(820066),
    t2 = n(128934);
function t6(e) {
    let { editorRef: t, options: n, iconClassName: i, dividerClassName: s } = e,
        r = t.current?.getSlateEditor();
    return null == r
        ? null
        : (0, l.jsxs)("div", {
              className: t2.Uo,
              children: [
                  (0, l.jsx)(t7, {
                      slateEditor: r,
                      markdownSyntax: "bold",
                      children: (0, l.jsx)(tz.$, { size: "md", color: "currentColor", className: a()(t2.Kk, i) }),
                  }),
                  (0, l.jsx)(t7, {
                      slateEditor: r,
                      markdownSyntax: "italics",
                      children: (0, l.jsx)(tZ.y, { size: "md", color: "currentColor", className: a()(t2.Kk, i) }),
                  }),
                  (0, l.jsx)(t7, {
                      slateEditor: r,
                      markdownSyntax: "strikethrough",
                      children: (0, l.jsx)(tq.t, { size: "md", color: "currentColor", className: a()(t2.Kk, i) }),
                  }),
                  (0, l.jsx)("div", { className: a()(t2.yF, s) }),
                  !n?.disableBlockQuotes &&
                      (0, l.jsx)(t4, {
                          slateEditor: r,
                          blockType: "blockQuote",
                          children: (0, l.jsx)(tJ.c, { size: "md", color: "currentColor", className: a()(t2.Kk, i) }),
                      }),
                  !n?.disableInlineCode &&
                      (0, l.jsx)(t7, {
                          slateEditor: r,
                          markdownSyntax: "inlineCode",
                          children: (0, l.jsx)(tY.G, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: a()(t2.Kk, i),
                          }),
                      }),
                  (0, l.jsx)(t7, {
                      slateEditor: r,
                      markdownSyntax: "spoiler",
                      children: (0, l.jsx)(tX.b, { size: "md", color: "currentColor", className: a()(t2.Kk, i) }),
                  }),
              ],
          });
}
let t3 = i.forwardRef(function (e, t) {
    let { editorRef: n, containerRef: s, options: a } = e,
        r = i.useRef(null),
        [o, c] = i.useState(!1),
        u = i.useRef(null),
        d = i.useContext(t$.Ay),
        h = i.useCallback(() => {
            c(!1), clearTimeout(u.current);
        }, []),
        m = i.useCallback(
            (e) => {
                let t = d.renderWindow;
                (e.target instanceof t.Node && r.current?.contains(e.target)) || h();
            },
            [d, h],
        ),
        p = i.useCallback(
            (e) => {
                let t = d.renderWindow;
                if (e.target instanceof t.Element)
                    if (0 !== e.button) h();
                    else {
                        let n = e.target instanceof t.Node && r.current?.contains(e.target);
                        clearTimeout(u.current),
                            (u.current = setTimeout(() => {
                                let t = (0, tK.BF)(e)?.activeElement,
                                    l = s.current;
                                c(n || (null != t && null != l && l.contains(t)));
                            }, 100));
                    }
                else h();
            },
            [d, s, h],
        );
    i.useImperativeHandle(t, () => ({ hide: h }), [h]),
        i.useEffect(() => {
            let e = d.renderWindow;
            return (
                e.document.addEventListener("keydown", h),
                e.document.addEventListener("mousedown", m),
                e.document.addEventListener("mouseup", p),
                e.addEventListener("focus", h),
                e.addEventListener("blur", h),
                () => {
                    e.document.removeEventListener("keydown", h),
                        e.document.removeEventListener("mousedown", m),
                        e.document.removeEventListener("mouseup", p),
                        e.removeEventListener("focus", h),
                        e.removeEventListener("blur", h),
                        clearTimeout(u.current);
                }
            );
        }, [d, h, m, p]);
    let { x: f, y: g } = i.useMemo(() => {
            let e = n.current?.getSlateEditor();
            if (e?.selection == null || t1.ZF.isCollapsed(e.selection) || !o) return { x: null, y: null };
            let t = tB.rL.findDocumentOrShadowRoot(e),
                l = t.getSelection();
            if (null == l || null == l.focusNode || null == l.anchorNode || l.isCollapsed) return { x: null, y: null };
            let i = t.createRange();
            i.setStart(l.focusNode, l.focusOffset), i.setEnd(l.focusNode, l.focusOffset);
            let a = i.getBoundingClientRect(),
                r = t.createRange();
            r.setStart(l.anchorNode, l.anchorOffset), r.setEnd(l.anchorNode, l.anchorOffset);
            let c = r.getBoundingClientRect(),
                u = t.createRange();
            u.setStart(l.anchorNode, l.anchorOffset), u.setEnd(l.focusNode, l.focusOffset);
            let d = u.getBoundingClientRect(),
                h = a.x === c.x,
                m = h ? d.x : Math.min(a.x, c.x);
            return {
                x: m + ((h ? d.x + d.width : Math.max(a.x, c.x)) - m) / 2,
                y: Math.max(s.current?.getBoundingClientRect()?.y ?? 0, Math.min(c.y, a.y)),
            };
        }, [s, o, n]),
        [x, C] = i.useState(0),
        [A, E] = i.useState(0);
    return (i.useLayoutEffect(() => {
        if (null == f || null == g || null == r.current) return;
        let e = r.current.getBoundingClientRect();
        E(e.width / 2), C(e.height + 12);
    }, [f, g]),
    null == f || null == g || null == n.current?.getSlateEditor())
        ? null
        : (0, l.jsx)(j.Ay, {
              children: (0, l.jsx)("div", {
                  id: "slate-toolbar",
                  ref: r,
                  className: t2.KE,
                  style: { top: g - x, left: f - A },
                  onMouseDown: (e) => {
                      e.stopPropagation();
                  },
                  onMouseUp: (e) => {
                      e.stopPropagation();
                  },
                  children: (0, l.jsx)(t6, { editorRef: n, options: a }),
              }),
          });
});
function t7(e) {
    let { slateEditor: t, markdownSyntax: n, children: i } = e,
        s = !1;
    if (t?.selection != null) {
        let [e, l] = t1.ZF.edges(t.selection);
        s = null != (0, t0.Sx)(t, e, l).before[n];
    }
    return (0, l.jsx)(f.vN, {
        children: (0, l.jsx)("button", {
            "aria-pressed": s,
            className: t2.x6,
            onClick: () => {
                null != t && tQ.o.withSingleEntry(t, () => (0, t0.Px)(t, n));
            },
            children: i,
        }),
    });
}
function t4(e) {
    let { blockType: t, slateEditor: n, children: i } = e,
        s = null != n ? t1.VW.getCurrentBlock(n) : null,
        a = null != s && t1.AS.isType(s[0], t);
    return (0, l.jsx)(f.vN, {
        children: (0, l.jsx)("button", {
            "aria-pressed": a,
            className: t2.x6,
            onClick: () => {
                null != n && tQ.o.withSingleEntry(n, () => (0, t0.fO)(n, t));
            },
            children: i,
        }),
    });
}
var t8 = n(922016),
    t5 = n(375499),
    t9 = n(267889),
    ne = n(307731);
function nt(e) {
    let { editorRef: t, type: n, channel: s } = e,
        a = t.current?.getSlateEditor(),
        r = i.useRef(null),
        o = i.useCallback(
            (e) => {
                let { emoji: n, willClose: l } = e,
                    i = t.current;
                null != n && null != i && i.insertEmoji({ emoji: n, willClose: l }), l && (0, eC.v8)();
            },
            [t],
        );
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              id: "slate-toolbar",
              className: t2.aL,
              children: [
                  (0, l.jsx)("div", {
                      className: t2.Wy,
                      children: (0, l.jsx)(t6, {
                          editorRef: t,
                          options: n.markdown,
                          iconClassName: t2.C7,
                          dividerClassName: t2.us,
                      }),
                  }),
                  (0, l.jsx)(t8.Y, {
                      targetElementRef: r,
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, l.jsx)(t9.A, {
                              persistSearch: !0,
                              channel: s,
                              closePopout: t,
                              onSelectEmoji: (e) => {
                                  let { emoji: n, willClose: l } = e;
                                  o({ emoji: n, willClose: l }), l && t();
                              },
                              pickerIntention:
                                  n.expressionPicker?.emojiIntention ?? ne.EmojiIntention.COMMUNITY_CONTENT,
                          });
                      },
                      position: "bottom",
                      animation: t8.Y.Animation.NONE,
                      align: "left",
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, l.jsx)(t5.A, { ...e, ref: r, active: n, className: t2.Z8, tabIndex: 0 });
                      },
                  }),
              ],
          });
}
var nn = n(698279);
function nl(e, t, s, a, r) {
    let [o, c] = i.useState(!1),
        u = i.useCallback(
            (i, d, h, m, f, g) => {
                if (o) return;
                c(!0);
                let C = ew.A.getStickerPreview(r, t.drafts.type)?.map((e) => e.id) ?? [],
                    A = eH.A.getUploads(r, t.drafts.type) ?? [];
                if (null == d && !m && !f && (0, eE.xz)(A, r)) {
                    c(!1),
                        (0, p.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("73432"),
                                n.e("77598"),
                                n.e("32245"),
                                n.e("47042"),
                                n.e("61748"),
                                n.e("24414"),
                                n.e("64801"),
                                n.e("12815"),
                                n.e("49681"),
                                n.e("34530"),
                                n.e("58337"),
                                n.e("26437"),
                                n.e("76602"),
                                n.e("28229"),
                                n.e("21921"),
                                n.e("39970"),
                                n.e("8371"),
                                n.e("72789"),
                                n.e("49697"),
                                n.e("12743"),
                                n.e("65437"),
                                n.e("79780"),
                                n.e("79745"),
                                n.e("87046"),
                                n.e("32209"),
                                n.e("95370"),
                                n.e("10014"),
                                n.e("68763"),
                                n.e("18997"),
                                n.e("12965"),
                                n.e("12682"),
                                n.e("37588"),
                                n.e("36150"),
                                n.e("99011"),
                                n.e("33097"),
                                n.e("86861"),
                                n.e("70961"),
                                n.e("23685"),
                                n.e("42516"),
                                n.e("84688"),
                            ]).then(n.bind(n, 538899));
                            return (t) =>
                                (0, l.jsx)(e, {
                                    ...t,
                                    threadId: r,
                                    attachments: A,
                                    sendMessage: () => u(i, void 0, void 0, void 0, !0),
                                });
                        });
                    return;
                }
                e({
                    value: i,
                    uploads: A,
                    stickers: C,
                    command: d,
                    commandOptionValues: h,
                    isGif: m,
                    gifMetadata: g,
                }).then((e) => {
                    let { shouldClear: n, shouldRefocus: l } = e,
                        i = (n && t.submit?.clearOnSubmit) ?? !1,
                        o = null != s.current;
                    i &&
                        (r !== eG.A.getChannelId()
                            ? x.A.saveDraft(r, "", t.drafts.type)
                            : o && (s.current?.clearValue(), a.current?.hide())),
                        o && (c(!1), (0, eC.v8)(), l && s.current?.focus());
                });
            },
            [s, a, e, o, t, r],
        );
    return {
        submitting: o,
        submit: u,
        handleSubmit: i.useCallback(
            (e) => {
                s?.current?.submit(e);
            },
            [s],
        ),
    };
}
function ni(e, t, n) {
    return i.useCallback(
        (l) => {
            if (t === eX.oU.CREATE_FORUM_POST || t === eX.oU.CREATE_ANNOUNCEMENT_POST) n.current?.insertGIF(l);
            else {
                let t = {
                    gif_provider: l.provider ?? (0, eI.cf)(),
                    load_id: eB.A.getAnalyticsID(),
                    source_object: "GIF Picker",
                    gif_url: l.url,
                    gif_id: l.id,
                };
                e(l.url, void 0, void 0, !0, void 0, t);
            }
            (0, eC.v8)(), n.current?.focus();
        },
        [n, e, t],
    );
}
function ns(e) {
    return i.useCallback(
        (t) => {
            let { emoji: n, willClose: l } = t,
                i = e.current;
            null != n && null != i && i.insertEmoji({ emoji: n, willClose: l }), l && (0, eC.v8)();
        },
        [e],
    );
}
function na(e) {
    let { editorRef: t, disabled: n, textValue: l, channelId: s, chatInputType: a, submit: r } = e,
        { analyticsLocations: o } = (0, I.Ay)();
    return i.useCallback(
        (e, i) => {
            n ||
                (a === eX.oU.CREATE_ANNOUNCEMENT_POST || (0, ek.YS)(i, l, s, a.drafts.type)
                    ? ((0, td.fh)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != ew.A.getStickerPreview(s, a.drafts.type),
                          analyticsLocations: o,
                      }),
                      (0, eM.$x)(s, e, a.drafts.type))
                    : (r({ value: "", uploads: void 0, stickers: [e.id] }), t.current?.clearValue()),
                (0, eC.v8)(),
                t.current?.focus());
        },
        [n, l, s, t, o, r, a],
    );
}
function nr(e) {
    return i.useCallback(
        (t) => {
            let n = e.current;
            null != n && n.insertKaomoji(t), (0, eC.v8)(), n?.focus();
        },
        [e],
    );
}
function no(e, t, n) {
    let l = i.useCallback(() => {
            t || (0, eC.r$)(nn.kx.EMOJI, e, n);
        }, [t, e, n]),
        s = i.useCallback(() => {
            !t && e.gifs?.allowSending && (0, eC.r$)(nn.kx.GIF, e, n);
        }, [t, e, n]),
        a = i.useCallback(() => {
            !t && e.stickers?.allowSending && (0, eC.r$)(nn.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, ez.Vo)({ event: er.jej.TOGGLE_EMOJI_POPOUT, handler: l }),
        (0, ez.Vo)({ event: er.jej.TOGGLE_GIF_PICKER, handler: s }),
        (0, ez.Vo)({ event: er.jej.TOGGLE_STICKER_PICKER, handler: a });
}
function nc(e, t, n) {
    let [l] = i.useState(() => new r.EventEmitter());
    return (
        i.useEffect(() => {
            l.emit("text-changed", t, n);
        }, [t, n, l]),
        {
            eventEmitter: l,
            handleEditorSelectionChanged: (t) => {
                null != e.current && l.emit("selection-changed", t);
            },
        }
    );
}
function nu() {
    let e = i.useRef(null),
        t = i.useCallback(() => {
            e.current?.onMaybeShowAutocomplete();
        }, []),
        n = i.useCallback(() => {
            e.current?.onHideAutocomplete();
        }, []);
    return { autocompleteRef: e, handleMaybeShowAutocomplete: t, handleHideAutocomplete: n };
}
function nd(e) {
    let t = i.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
}
function nh(e) {
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
function nm(e, t, n, l) {
    let i = e.getGuildId(),
        s = (0, m.bG)([ey.A], () => null != i && ey.A.isLurking(i), [i]),
        a = (0, m.bG)([eU.Ay, eW.default], () => {
            let e = eW.default.getCurrentUser();
            return (null != i && null != e ? eU.Ay.getMember(i, e.id)?.isPending : null) ?? !1;
        }),
        r = (0, m.cf)([eV.A], () => {
            let i = e.isPrivate(),
                s = eV.A.computePermissions(e),
                r = h.zy(s, er.xBc.CREATE_PUBLIC_THREADS) || h.zy(s, er.xBc.CREATE_PRIVATE_THREADS),
                o =
                    (!t.permissions?.requireCreateTherads || r) &&
                    (!t.permissions?.requireSendMessages || h.zy(s, er.xBc.SEND_MESSAGES)),
                c = o && h.zy(s, er.xBc.ATTACH_FILES),
                u = null != n,
                d = (0, eP.UJ)(e);
            return {
                disabled: l || a || (!i && !o) || d,
                canAttachFiles: !0 === t.attachments && (i || a || c || u),
                canCreateThreads: r,
                canEveryoneSendMessages: eq.MJ(er.xBc.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, l, a]);
    return { isLurking: s, isPendingMember: a, ...r };
}
function np(e, t, n) {
    let [l, s, a] = (0, eC.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], u.x),
        r = (0, m.bG)([v.A], () => v.A.shouldShowPopup() && v.A.activeViewType() === e && v.A.activeChannelId() === n);
    i.useEffect(
        () => () => {
            (0, eC.v8)(e, n);
        },
        [e, n],
    );
    let o = i.useCallback(() => {
            null != l || r || t.current?.handleOuterClick();
        }, [l, r, t]),
        c = null == l || null == s || s !== e || a !== n;
    return { expressionPickerView: l, shouldHideExpressionPicker: c, handleOuterClick: o };
}
let nf = (e, t) => ({
        handleAutocompleteVisibilityChange: i.useCallback(
            (n) => {
                n && (0, eC.v8)(e, t);
            },
            [e, t],
        ),
    }),
    ng = i.memo(
        i.forwardRef(function (e, t) {
            let n,
                {
                    textValue: s,
                    richValue: r,
                    className: o,
                    innerClassName: u,
                    editorClassName: h,
                    id: p,
                    required: x,
                    disabled: S,
                    placeholder: N,
                    accessibilityLabel: j,
                    channel: _,
                    type: T,
                    focused: b,
                    error: R,
                    renderAttachButton: O,
                    renderApplicationCommandIcon: L,
                    renderButtons: k,
                    pendingReply: P,
                    onChange: D,
                    onResize: U,
                    onBlur: V,
                    onFocus: G,
                    onKeyDown: F,
                    onSubmit: H,
                    promptToUpload: W,
                    highlighted: B,
                    canMentionRoles: K,
                    canMentionChannels: z,
                    maxCharacterCount: Z,
                    showRemainingCharsAfterCount: q,
                    allowNewLines: J = !0,
                    characterCountClassName: Y,
                    "aria-describedby": X,
                    "aria-labelledby": $,
                    setEditorRef: Q,
                    autoCompletePosition: ee,
                    children: et,
                    disableThemedBackground: en = !1,
                    emojiPickerCloseOnModalOuterClick: el,
                    parentModalKey: ei,
                    pendingScheduledMessage: es,
                    showValueWhenDisabled: ea = !1,
                } = e;
            c()(null != T, "chat input type must be set");
            let { analyticsLocations: eo } = (0, I.Ay)(E.A.CHANNEL_TEXT_AREA),
                ec = nd(t),
                eu = i.useRef(null),
                ed = i.useRef(null),
                em = i.useRef(null),
                eE = i.useRef(null),
                eI = i.useRef(null);
            Q?.(em.current);
            let ey = (0, y.A)(_),
                [eS, eN] = i.useState(!ey);
            (0, C.i4)(ec, (e) => {
                let { width: t } = e;
                return eN(!ey && (null == t || t > 450));
            });
            let { activeCommand: ej, activeCommandSection: e_ } = (0, m.cf)([M.A], () => ({
                    activeCommand: T.commands?.enabled ? M.A.getActiveCommand(_.id) : null,
                    activeCommandSection: T.commands?.enabled ? M.A.getActiveCommandSection(_.id) : null,
                })),
                {
                    isLurking: eT,
                    isPendingMember: eb,
                    disabled: eR,
                    canAttachFiles: eO,
                    canCreateThreads: ew,
                    canEveryoneSendMessages: eM,
                } = nm(_, T, ej, S),
                ek = T.toolbarType === eX.O1.STATIC,
                eP = !eD.D_.useSetting() && !(0, eJ.isAndroidWeb)() && null != window.ResizeObserver,
                eV = !eP || !T.commands?.enabled || !b || "/" !== s,
                eG = (0, ev.A)(),
                { fontSize: eH } = (0, m.cf)([A.A], () => ({ fontSize: A.A.fontSize })),
                eB = (0, m.bG)([eF.A], () => eF.A.isEnabled());
            no(T, eR, _.id);
            let { eventEmitter: ez, handleEditorSelectionChanged: eq } = nc(em, s, r),
                eQ = i.useRef(s);
            eQ.current = s;
            let e0 = i.useCallback(
                    (e, t, n) => {
                        "/" === t && "" === eQ.current && T.commands?.enabled && ez.emit("command-sentinel-typed"),
                            D?.(e, t, n);
                    },
                    [D, T.commands?.enabled, ez],
                ),
                { submitting: e1, submit: e2, handleSubmit: e6 } = nl(H, T, em, eI, _.id),
                { autocompleteRef: e3, handleMaybeShowAutocomplete: e7, handleHideAutocomplete: e4 } = nu(),
                e8 = ni(e2, T, em),
                e5 = ns(em),
                e9 = na({ editorRef: em, disabled: eR, textValue: s, channelId: _.id, chatInputType: T, submit: H }),
                te = i.useCallback(
                    (e, t, n) => {
                        let l = em.current;
                        null != e &&
                            null != l &&
                            (eK.default.track(er.HAw.SOUNDMOJI_SELECT, {
                                channel_id: _.id,
                                guild_id: _.guild_id,
                                sound_guild_id: e.guildId,
                                sound_id: e.soundId,
                                source: t,
                            }),
                            l.insertSound(e)),
                            n && (0, eC.v8)(),
                            l?.focus();
                    },
                    [em, _.id, _.guild_id],
                ),
                tt = nr(em),
                tn = i.useCallback(() => eI?.current?.hide(), []),
                { editorHeight: tl, handleResize: ts } = nh(U),
                {
                    handleTab: tr,
                    handleEnter: to,
                    handleMoveSelection: tc,
                } = ((n = i.useCallback(
                    () => !!(!eV && eu.current?.onTabOrEnter(!1)) || e3.current?.onTabOrEnter(!1) || !1,
                    [eV, eu, e3],
                )),
                {
                    handleTab: n,
                    handleEnter: i.useCallback(
                        () => !!(!eV && eu.current?.onTabOrEnter(!0)) || e3.current?.onTabOrEnter(!0) || !1,
                        [eV, eu, e3],
                    ),
                    handleMoveSelection: i.useCallback(
                        (e) => !!(!eV && eu.current?.onMoveSelection(e)) || e3.current?.onMoveSelection(e) || !1,
                        [eV, eu, e3],
                    ),
                }),
                { expressionPickerView: td, shouldHideExpressionPicker: th, handleOuterClick: tm } = np(T, em, _.id),
                { selectedAutocompleteInputType: tf, selectedAutocompleteInputError: tg } = (function (e, t) {
                    let [n, l] = i.useState({
                            selectedAutocompleteInputType: null,
                            selectedAutocompleteInputError: !1,
                        }),
                        s = i.useCallback(() => {
                            let e,
                                n = t.current?.getSlateEditor();
                            null != n && (e = t1.VW.getSelectedParentOfType(n, eg.mk)?.[0]),
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
                })(ez, em),
                { handleAutocompleteVisibilityChange: tC } = nf(T, _.id),
                tE = (function (e) {
                    let { type: t, channelId: n } = e;
                    return (0, ep.bG)([v.A], () => {
                        let e = v.A.activeViewType();
                        return null != e && e === t && v.A.activeChannelId() === n && v.A.shouldShowPopup();
                    }, [t, n]);
                })({ type: T, channelId: _.id }),
                ty = i.useCallback(() => {
                    ez.emit("submit-failure");
                }, [ez]);
            (0, eY.R)(ez, _.guild_id, _.id);
            let tN = null != P,
                tj = (eR && !((eT || eb) && eM)) || (e1 && T.submit?.useDisabledStylesOnSubmit),
                tO = null;
            null != ej ? (tO = L?.(ej, e_, tT.g$)) : (!eR || ew) && (tO = O?.(tN, tT.g$));
            let tL = eP && null != r && !eR && T.showCharacterCount && null == ej,
                tw = eP && !__OVERLAY__ && null != r && null == ej && T.toolbarType !== eX.O1.NONE && !eR,
                tM = (function (e) {
                    let {
                            channel: t,
                            type: n,
                            activeCommand: s,
                            pendingReply: a,
                            pendingScheduledMessage: r,
                            selectedAutocompleteInputType: o,
                            selectedAutocompleteInputError: c,
                        } = e,
                        { activeCommandOption: u, activeCommandOptionStates: d } = (0, m.cf)([M.A], () => ({
                            activeCommandOption: M.A.getActiveOption(t.id),
                            activeCommandOptionStates: M.A.getOptionStates(t.id),
                        })),
                        h = (0, m.bG)([eU.Ay, eW.default, tA], () => {
                            let e = eW.default.getCurrentUser();
                            if (null == e || !e.isStaff() || !t.isDM()) return !1;
                            let n = eW.default.getUser(t.getRecipientId());
                            if (!n?.isStaff()) return !1;
                            let l = eU.Ay.getNicknames(n.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
                            return l ? !tA.hasId(n.id) && l : (tx.delete(n.id) && tA.emitChange(), !1);
                        });
                    return i.useMemo(() => {
                        let e = [],
                            i = [];
                        return (
                            null != t.guild_id &&
                                n === eX.oU.NORMAL &&
                                i.push((0, l.jsx)(tS.A, { guildId: t.guild_id, channel: t, className: tT.UW })),
                            null != s &&
                                e.push(
                                    (0, l.jsx)(tp, {
                                        activeCommand: s,
                                        activeOption: u ?? null,
                                        optionStates: d,
                                        channelId: t.id,
                                    }),
                                ),
                            null != a && e.push((0, l.jsx)(ta, { reply: a, chatInputType: n })),
                            h && e.push((0, l.jsx)(tI, {})),
                            null != r && e.push((0, l.jsx)(t_, { pendingScheduledMessage: r })),
                            "timestampMentionInput" === o && i.push((0, l.jsx)(tv, { error: c ?? !1 })),
                            { stacked: e, floating: i }
                        );
                    }, [s, u, d, t, a, h, n, r, o, c]);
                })({
                    channel: _,
                    type: T,
                    activeCommand: ej,
                    pendingReply: P,
                    pendingScheduledMessage: es,
                    selectedAutocompleteInputType: tf,
                    selectedAutocompleteInputError: tg,
                }),
                tk = 0 === s.trim().length,
                tP = null != P ? [X, ti].filter(Boolean).join(" ") : X,
                tD = T.layout === eX.wt.INLINE,
                tU = T.layout === eX.wt.FLUSH,
                tV = (0, l.jsx)("div", { ref: ed, className: tT.BW }),
                tG = tE ? (0, l.jsx)(w, { align: "right", positionTargetRef: ed, channel: _ }) : null,
                tB =
                    null != k
                        ? k()
                        : (0, l.jsx)(tR.A, {
                              type: T,
                              disabled: eR,
                              channel: _,
                              handleSubmit: e6,
                              isEmpty: tk,
                              showAllButtons: eS,
                          }),
                tK = tL
                    ? (0, l.jsx)(tW.A, {
                          type: T,
                          textValue: s,
                          className: Y,
                          maxCharacterCount: Z,
                          showRemainingCharsAfterCount: q,
                      })
                    : null;
            return (
                i.useEffect(() => {
                    b && eZ._.dispatch(er.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: _.id });
                }, [b, _.id]),
                (0, l.jsx)(ex.Sv, {
                    value: ez,
                    children: (0, l.jsxs)(I.f5, {
                        value: eo,
                        children: [
                            tw && ek
                                ? (0, l.jsx)(nt, { editorRef: em, type: T, channel: _ })
                                : tw
                                  ? (0, l.jsx)(t3, { ref: eI, editorRef: em, containerRef: eE, options: T.markdown })
                                  : null,
                            (0, l.jsxs)("div", {
                                ref: ec,
                                className: a()(o, {
                                    [tT.gM]: !0,
                                    [tT.h9]: tj,
                                    [tT.mr]: B,
                                    [tT.Wn]: d.Fr,
                                    [tT.Ls]: tD,
                                    [tT.AH]: tU,
                                    [tT.z3]: null != R,
                                }),
                                children: [
                                    tD || tU ? null : (0, l.jsx)(tb, { bars: tM }),
                                    (0, l.jsxs)("div", {
                                        ref: eE,
                                        onScroll: tn,
                                        className: a()(u, {
                                            [tT.xx]: !0,
                                            [tT.k6]: !en,
                                            [tT.Ri]: tM.stacked.length > 0,
                                        }),
                                        children: [
                                            (0, l.jsx)(tu, { channelId: _.id, chatInputType: T }),
                                            T.hideAttachmentArea
                                                ? null
                                                : (0, l.jsx)(tH.A, { channelId: _.id, type: T, canAttachFiles: eO }),
                                            (0, l.jsxs)("div", {
                                                className: a()(tT.vW, {
                                                    [tT.BF]: tj,
                                                    [tT.RL]:
                                                        T !== eX.oU.EDIT && (null != tO || (tj && null == tO) || eT),
                                                    [tT.fk]: T === eX.oU.THREAD_CREATION,
                                                    [tT.TZ]:
                                                        T === eX.oU.CREATE_FORUM_POST ||
                                                        T === eX.oU.FORWARD_MESSAGE_INPUT,
                                                    [tT.$i]: T === eX.oU.USER_PROFILE_REPLY,
                                                }),
                                                onMouseDown: tm,
                                                children: [
                                                    tG,
                                                    tO,
                                                    (0, l.jsx)(f.vN, {
                                                        ringTarget: ec,
                                                        ringClassName: tT.Rg,
                                                        children: (0, l.jsx)(e$.A, {
                                                            ref: em,
                                                            id: p,
                                                            focused: b,
                                                            useSlate: eP,
                                                            textValue: s,
                                                            richValue: r,
                                                            disabled: eR,
                                                            placeholder: N,
                                                            required: x,
                                                            accessibilityLabel: j,
                                                            isPreviewing: (eT || eb) && eM,
                                                            channel: _,
                                                            type: T,
                                                            canPasteFiles: eO,
                                                            uploadPromptCharacterCount: er.CS1,
                                                            maxCharacterCount: Z ?? eG,
                                                            allowNewLines: J,
                                                            "aria-describedby": tP,
                                                            onChange: e0,
                                                            onResize: ts,
                                                            onBlur: V,
                                                            onFocus: G,
                                                            onKeyDown: F,
                                                            onSubmit: e2,
                                                            onSubmitFailure: ty,
                                                            onTab: tr,
                                                            onEnter: to,
                                                            onMoveSelection: tc,
                                                            onSelectionChanged: eq,
                                                            onMaybeShowAutocomplete: e7,
                                                            onHideAutocomplete: e4,
                                                            promptToUpload: W,
                                                            fontSize: eH,
                                                            spellcheckEnabled: eB,
                                                            canOnlyUseTextCommands: tN,
                                                            className: a()(
                                                                {
                                                                    [tT.QI]: T === eX.oU.THREAD_CREATION,
                                                                    [tT.AV]: T === eX.oU.PROFILE_BIO_INPUT,
                                                                    [tT.GR]: T === eX.oU.OVERLAY_INLINE_REPLY,
                                                                },
                                                                h,
                                                            ),
                                                            "aria-labelledby": $,
                                                            showValueWhenDisabled: ea,
                                                        }),
                                                    }),
                                                    tB,
                                                    tV,
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(tF, { channel: _, type: T, pendingScheduledMessage: es }),
                                    eV ? null : (0, l.jsx)(eh, { ref: eu, channel: _, canOnlyUseTextCommands: tN }),
                                    (0, l.jsx)(ef.A, {
                                        ref: e3,
                                        channel: _,
                                        canMentionRoles: K,
                                        canMentionChannels: z,
                                        useNewSlashCommands: eP,
                                        canOnlyUseTextCommands: tN,
                                        canSendStickers: T.stickers?.allowSending,
                                        canSendSoundmoji: T.soundmoji?.allowSending,
                                        textValue: s,
                                        focused: b,
                                        expressionPickerView: td,
                                        type: T,
                                        targetRef: ec,
                                        editorRef: em,
                                        onSendMessage: e2,
                                        onSendSticker: e9,
                                        onVisibilityChange: tC,
                                        editorScrollerRef: eE,
                                        editorHeight: tl,
                                        barsHeight: 40 * tM.floating.length,
                                        setValue: (e, t) => e0?.(null, e, t),
                                        position: ee,
                                    }),
                                    (0, l.jsx)(eL, { textValue: s, editorHeight: tl, channelId: _.id }),
                                    tK,
                                    et,
                                ],
                            }),
                            (0, l.jsx)(g.U, { error: R }),
                            th
                                ? null
                                : (0, l.jsx)(eA.A, {
                                      positionTargetRef: ec,
                                      type: T,
                                      onSelectGIF: e8,
                                      onSelectEmoji: e5,
                                      onSelectSticker: e9,
                                      onSelectSound: te,
                                      onSelectKaomoji: tt,
                                      channel: _,
                                      closeOnModalOuterClick: el,
                                      parentModalKey: ei,
                                      position: "top",
                                      align: "right",
                                      positionLayerClassName: tT.BD,
                                  }),
                        ],
                    }),
                })
            );
        }),
    );
