"use strict";
n.d(t, {
    HG: () => no,
    Sk: () => nf,
    C: () => na,
    v7: () => nc,
    Zx: () => ni,
    L0: () => nd,
    N_: () => nl,
    MD: () => nh,
    Ay: () => nE,
    uW: () => np,
    NO: () => ns,
    ck: () => n_,
    ml: () => nu,
    Vu: () => nr,
});
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(143236),
    l = n(284009),
    u = n.n(l),
    c = n(942381),
    d = n(607399),
    _ = n(136722),
    f = n(17928),
    h = n(192308),
    p = n(187322),
    E = n(511274),
    m = n(465532),
    g = n(765671),
    A = n(775602),
    I = n(793574),
    T = n(688810),
    S = n(177640),
    N = n(989837),
    y = n(289873),
    C = n(268218),
    v = n(750506),
    O = n(60809),
    R = n(375708),
    b = n(131552);
let D = { width: 500, height: O.$V },
    L = (0, C.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("81857"),
                n.e("81539"),
                n.e("56386"),
                n.e("8516"),
                n.e("41816"),
                n.e("23531"),
                n.e("15680"),
                n.e("38916"),
                n.e("34552"),
                n.e("93103"),
                n.e("71210"),
                n.e("88342"),
                n.e("42451"),
                n.e("98965"),
                n.e("71273"),
                n.e("35313"),
                n.e("80854"),
                n.e("35395"),
                n.e("43780"),
                n.e("54975"),
                n.e("8362"),
                n.e("71133"),
                n.e("54625"),
                n.e("49697"),
                n.e("27773"),
                n.e("52229"),
                n.e("61268"),
                n.e("18024"),
                n.e("78195"),
                n.e("37977"),
                n.e("22261"),
                n.e("41701"),
                n.e("74021"),
                n.e("37065"),
                n.e("22094"),
                n.e("83518"),
                n.e("61764"),
                n.e("59848"),
                n.e("68974"),
                n.e("56385"),
                n.e("59132"),
                n.e("89203"),
                n.e("35621"),
            ]).then(n.bind(n, 854379)),
        webpackId: 854379,
        renderLoader: () => (0, i.jsx)("div", { className: b.R4, style: D, children: (0, i.jsx)(y.y, {}) }),
    }),
    w = { height: O.$V },
    M = r.memo(function (e) {
        let { positionTargetRef: t, align: n, ...r } = e;
        return (0, i.jsx)("span", {
            style: O.sK,
            children: (0, i.jsx)(v.nE, {
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
                    return (0, i.jsx)("section", {
                        className: b.V6,
                        role: "dialog",
                        style: w,
                        "aria-label": R.intl.string(R.t["3CNGLK"]),
                        children: t && (0, i.jsx)(L, { ...r }),
                    });
                },
            }),
        });
    });
var P = n(861382),
    x = n(735438),
    U = n.n(x),
    k = n(537652),
    G = n(155718),
    F = n(95561),
    V = n(659280),
    B = n(579940),
    H = n(962125),
    j = n(915089),
    Y = n(850992),
    W = n(464651),
    K = n(286509),
    z = n(721768),
    $ = n(842209),
    q = n(210978),
    Z = n(392054),
    X = n(168186),
    Q = n(990078),
    J = n(939249),
    ee = n(802019),
    et = n(649671),
    en = n(282214);
let ei = [16, 8, 8, 8];
function er(e) {
    let {
            className: t,
            channel: n,
            sections: s,
            activeCategoryIndex: o,
            filteredSectionId: l,
            onSectionClick: u,
            applicationCommandListRef: c,
        } = e,
        d = r.useRef(null),
        _ = r.useCallback(
            (e, t) => {
                let n = 8;
                return s[t + 1]?.type === Z.Hf.BUILT_IN && (n += 8), 32 + n;
            },
            [s],
        ),
        f = r.useCallback((e, t) => (t ? 8 * (s[e + 1]?.type !== Z.Hf.BUILT_IN) : 8 * (0 !== e)), [s]),
        h = r.useCallback(
            (e, t) => {
                let r = s[t];
                if (null == r) return;
                let a = (0, et.Rg)(r),
                    c = 4 * (r.type === Z.Hf.BUILT_IN),
                    d = 32 - 2 * c,
                    _ = (0, i.jsx)(a, {
                        channel: n,
                        section: r,
                        isSelected: null != l ? r.id === l : o === t,
                        padding: c,
                        width: d,
                        height: d,
                        selectable: !0,
                    }),
                    f = r.type !== Z.Hf.BUILT_IN && t < s.length - 1 && s[t + 1].type === Z.Hf.BUILT_IN;
                return (0, i.jsxs)(
                    "div",
                    {
                        className: en.uW,
                        children: [
                            (0, i.jsx)(Q.m, {
                                text: r.name,
                                position: "right",
                                asContainer: !0,
                                children: (0, i.jsx)(J.D, {
                                    "aria-label": r.name,
                                    onClick: () => {
                                        u(r);
                                    },
                                    children: _,
                                }),
                            }),
                            f ? (0, i.jsx)("hr", { className: en.zQ }) : null,
                        ],
                    },
                    r.id,
                );
            },
            [o, n, u, s, l],
        );
    return 0 === s.length
        ? null
        : (0, i.jsx)("div", {
              className: a()(t, en.iE),
              children: (0, i.jsx)(ee.A, {
                  categoryListRef: d,
                  expressionsListRef: c,
                  store: Y.LS,
                  categories: s,
                  className: en.p_,
                  renderCategoryListItem: h,
                  rowCount: s.length,
                  categoryHeight: _,
                  listPadding: ei,
                  getScrollOffsetForIndex: f,
              }),
          });
}
var es = n(746388),
    ea = n(73510),
    eo = n(652215),
    el = n(13297),
    eu = n(911385);
let ec = [8, 8, 0, 8],
    ed = U().debounce(() => {
        (0, F.zV)(eo.HAw.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300),
    e_ = r.forwardRef(function (e, t) {
        let { channel: n, canOnlyUseTextCommands: s } = e,
            o = r.useRef(!1),
            l = r.useRef(0),
            [u, c] = r.useState(0),
            d = r.useRef(null),
            [_, f] = r.useState(!1),
            h = Y.LS.useStore((e) => e.activeCategoryIndex);
        r.useEffect(() => {
            (0, F.zV)(eo.HAw.APPLICATION_COMMAND_BROWSER_OPENED);
        }, []);
        let {
                sectionDescriptors: p,
                activeSections: E,
                commandsByActiveSection: m,
                hasMoreAfter: g,
                commands: A,
                filteredSectionId: I,
                scrollDown: T,
                filterSection: S,
            } = $.cu({
                context: { channel: n, type: "channel" },
                filters: {
                    commandTypes: [G.kc.CHAT],
                    builtIns: s ? q.n.ONLY_TEXT : q.n.ALLOW,
                    applicationCommands: !s,
                },
                options: { placeholderCount: 7, limit: ea.Hi, includeFrecency: !0 },
                allowFetch: !0,
            }),
            N = (0, W.Fk)({
                activeCategoryIndex: h,
                isScrolling: o,
                listRef: d,
                onActiveCategoryIndexChange: (e) => {
                    let t = E[e];
                    if (null != t) {
                        let e = p.findIndex((e) => e.id === t.id);
                        Y.LS.setActiveCategoryIndex(e);
                    }
                },
                scrollOffset: 20,
                searchQuery: "",
            }),
            y = (e) => {
                let t = E.length,
                    n = m.reduce((e, t) => e + t.data.length, 0) - 7 * !!g;
                g && e + 420 > 48 * t + 56 * n - 512 && T(), N(e), ed(), (l.current = e);
            },
            C = r.useRef(y);
        r.useEffect(() => {
            C.current = y;
        }),
            r.useEffect(() => {
                C.current(l.current);
            }, [A]);
        let v = r.useCallback((e) => (e !== E.length - 1 || g ? 16 : 0), [E.length, g]),
            O = m.map((e) => e.data.length);
        r.useEffect(() => {
            null != d.current && _ && null != u && d.current.scrollRowIntoView(u);
        }, [_, u]),
            r.useLayoutEffect(() => {
                null != I && d.current?.scrollToSectionTop(0);
            }, [A, I]);
        let b = r.useCallback(
                (e) => {
                    e.id === I || e.id === ea.Ik.FRECENCY ? (S(null), d.current?.scrollToSectionTop(0)) : S(e.id);
                },
                [S, I],
            ),
            D = r.useCallback(
                (e, t, i) => {
                    z.Gf({ channelId: n.id, command: e, section: t, location: Z.Oh.DISCOVERY, triggerSection: i });
                },
                [n.id],
            );
        r.useImperativeHandle(
            t,
            () => ({
                onTabOrEnter: (e) => {
                    if (null == u) return !e && (c(0), !0);
                    if (null == u) return !1;
                    let t = 0,
                        n = 0;
                    for (let e of m)
                        if (((t = n), u < (n += e.data.length))) {
                            let n = e.data[u - t],
                                i = p.find((e) => e.id === n.applicationId);
                            D(n, i, (0, X.$S)(e.section));
                            break;
                        }
                    return !0;
                },
                onMoveSelection: (e) => {
                    if (0 === A.length) return !0;
                    let t = 7 * !!g,
                        n = A.length + t,
                        i = null == u ? 0 : u + e;
                    return i >= n ? (i = n - 1) : i < 0 && (i = 0), c(i), f(!0), !0;
                },
            }),
            [A.length, m, g, p, D, u],
        );
        let L = r.useCallback(
                (e) => {
                    let t = E[e];
                    if (null == t) return null;
                    let r = (0, et.Rg)(t),
                        s = (0, i.jsx)(r, { channel: n, section: t, width: 16, height: 16, padding: 0 });
                    return (0, i.jsx)(K.A, { className: el.Km, icon: s, children: t.name }, e);
                },
                [n, E],
            ),
            w = r.useCallback(
                (e, t) => {
                    let n = e === E.length - 1,
                        r = E[e],
                        { data: s } = m[e];
                    return (0, i.jsxs)(
                        "ul",
                        {
                            role: "group",
                            "aria-label": r.name,
                            className: a()(el.Wy, { [el.YD]: n }),
                            children: [
                                t,
                                0 === s.length &&
                                    (0, i.jsx)(k.A, {
                                        message: R.intl.format(R.t.WoQXT6, { applicationName: r.name }),
                                        noResultsImageURL: eu,
                                        className: el.qK,
                                    }),
                            ],
                        },
                        e,
                    );
                },
                [E, m],
            ),
            M = r.useCallback(
                (e, t) => {
                    let r = m[t.sectionIndex],
                        s = r.data[t.sectionRowIndex],
                        a = `${r.section.id}:${s?.id ?? e}`;
                    if (
                        null == s ||
                        (r.section.id !== s.applicationId && r.section.id !== ea.Ik.FRECENCY) ||
                        s.inputType === Z.y$.PLACEHOLDER
                    )
                        return (0, i.jsx)(es.A, {}, a);
                    let o = p.find((e) => e.id === s.applicationId);
                    return (0, i.jsx)(
                        V.Ay.NewCommand,
                        {
                            index: e,
                            command: s,
                            channel: n,
                            className: el.D5,
                            selected: u === e,
                            showImage: r.section.id !== s.applicationId,
                            section: o,
                            onClick: () => D(s, o, (0, X.$S)(r.section)),
                            onHover: () => {
                                c(null), f(!1);
                            },
                        },
                        a,
                    );
                },
                [n, m, D, p, u],
            ),
            P = (0, j.GV)();
        return (
            (0, B.gf)(P, !0, (0, V.aI)(u)),
            r.useEffect(
                () => () => {
                    (0, B.nQ)();
                },
                [],
            ),
            (0, i.jsxs)(V.Ay, {
                id: P,
                className: el.x9,
                innerClassName: el.iE,
                onMouseDown: ef,
                children: [
                    (0, i.jsx)(er, {
                        className: el.H$,
                        channel: n,
                        sections: p,
                        filteredSectionId: I,
                        activeCategoryIndex: h,
                        onSectionClick: b,
                        applicationCommandListRef: d,
                    }),
                    (0, i.jsx)(H.A, {
                        role: "listbox",
                        className: el.p_,
                        listPadding: ec,
                        onScroll: y,
                        renderRow: M,
                        renderSection: w,
                        renderSectionHeader: L,
                        rowCount: E.length,
                        rowCountBySection: O,
                        rowHeight: 56,
                        sectionHeaderHeight: 32,
                        sectionMarginBottom: v,
                        ref: d,
                        stickyHeaders: !0,
                    }),
                ],
            })
        );
    });
function ef(e) {
    e.preventDefault();
}
var eh = n(702841),
    ep = n(305070),
    eE = n(31498),
    em = n(598071),
    eg = n(151271),
    eA = n(731231),
    eI = n(256265),
    eT = n(703244),
    eS = n(857071),
    eN = n(135621),
    ey = n(105330),
    eC = n(495544),
    ev = n(559908),
    eO = n(620141),
    eR = n(224964),
    eb = n(31408),
    eD = n(536283);
function eL(e) {
    let { editorHeight: t, textValue: n, channelId: i } = e,
        s = r.useRef(n),
        a = (0, ey.l)({ editorHeight: t }),
        o = (0, eR.A)(),
        l = (0, f.bG)([ev.Ay, eC.default], () => ev.Ay.isComboing(eC.default.getId(), i)),
        u = a?.left ?? 0,
        c = (a?.top ?? 0) - 16,
        d = 0 === n.length,
        _ = r.useMemo(() => 0.05 > Math.random(), [d]);
    return (
        r.useEffect(() => {
            0 !== n.length && n !== s.current && l && (o.fire(u, c, _ ? { sprite: eD.dR } : null), (s.current = n));
        }, [n, l, u, c, _, o]),
        null
    );
}
function ew(e) {
    return (0, i.jsx)(eO.A, { confettiLocation: eb.k.CHAT_INPUT, children: (0, i.jsx)(eL, { ...e }) });
}
var eM = n(931664),
    eP = n(631576),
    ex = n(68935),
    eU = n(406704),
    ek = n(885386),
    eG = n(696451),
    eF = n(576705),
    eV = n(309010),
    eB = n(638128),
    eH = n(522602),
    ej = n(287809),
    eY = n(821102),
    eW = n(174459),
    eK = n(234320),
    ez = n(625494),
    e$ = n(488926),
    eq = n(723702),
    eZ = n(486319),
    eX = n(355622),
    eQ = n(112541),
    eJ = n(834730),
    e0 = n(140735),
    e1 = n(463930),
    e2 = n(935063),
    e3 = n(252545),
    e6 = n(763754),
    e4 = n(967144),
    e5 = n(118517),
    e7 = n(976860),
    e8 = n(747926),
    e9 = n(232835),
    te = n(285796),
    tt = n(630816);
function tn(e) {
    let { onClick: t, "aria-label": n } = e;
    return (0, i.jsx)(J.D, {
        className: tt.b,
        onClick: t,
        "aria-label": n,
        children: (0, i.jsx)(te.a, { size: "md", color: "currentColor", className: tt.u }),
    });
}
var ti = n(1468);
let tr = "channel-reply-bar-a11y-description";
function ts(e) {
    let { channel: t, message: n, replyChainLength: s } = e,
        a = r.useRef(s);
    return (
        r.useEffect(() => {
            a.current = s;
        }),
        r.useEffect(() => {
            (0, F.zV)(eo.HAw.THREAD_NUDGE_SHOWN, {
                type: "Reply Chain (3)",
                reply_chain_length: a.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t]),
        (0, i.jsxs)(J.D, {
            onClick: function () {
                (0, e5.Jx)(t.id), (0, e8.Tv)(t, n, "Reply Chain Nudge");
            },
            className: ti._r,
            focusProps: { offset: { right: -4, left: -4 } },
            children: [
                (0, i.jsx)(eJ.E, {
                    color: "text-default",
                    className: ti.Qq,
                    variant: "text-sm/normal",
                    children: R.intl.format(R.t.B3V0FM, { count: Math.min(10, s + 1) }),
                }),
                (0, i.jsx)(eJ.E, {
                    color: "text-link",
                    className: ti.NG,
                    variant: "text-sm/semibold",
                    children: R.intl.string(R.t.rBIGBL),
                }),
            ],
        })
    );
}
function ta(e) {
    let t,
        n,
        { reply: r, chatInputType: s } = e,
        { channel: o, message: l, shouldMention: u, showMentionToggle: c } = r,
        {
            guildId: d,
            nick: _,
            colorString: h,
            colorStrings: p,
            colorRoleName: E,
            authorId: m,
            displayNameStyles: g,
        } = (0, e6.Ay)(l),
        A = (0, e4.gn)(d, m, p),
        I = (0, e3.a)({ displayNameStyles: g }),
        T =
            ((t = o.id),
            (n = l.id),
            (0, f.bG)([e9.A], () => {
                let e = n;
                for (let n = 0; n < 10; n++) {
                    let i = e9.A.getMessage(t, e);
                    if (i?.type !== eo.lAJ.REPLY || null == i.messageReference) return n;
                    e = i.messageReference.message_id;
                }
                return 10;
            }, [t, n])),
        S = (0, eU.n)(o, l),
        N = s.showThreadPromptOnReply && T >= 2 && S;
    return (0, i.jsx)("div", {
        className: ti.e1,
        children: (0, i.jsxs)("div", {
            className: ti.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: ti.eU,
                    children: [
                        (0, i.jsx)(e0.A, { id: tr, children: R.intl.formatToPlainString(R.t.EpJL4E, { username: _ }) }),
                        (0, i.jsx)(J.D, {
                            onClick: () => (0, e7.pX)(eo.BVt.CHANNEL(o.getGuildId(), o.id, l.id)),
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, i.jsx)(eJ.E, {
                                color: "text-default",
                                className: a()(ti.Qq, ti.Fn),
                                variant: "text-sm/normal",
                                children: R.intl.format(R.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, i.jsx)(
                                            e1.g,
                                            {
                                                className: ti.UU,
                                                name: _,
                                                colorString: h,
                                                colorStrings: A,
                                                roleName: E,
                                                displayNameStylesFont: I,
                                            },
                                            t,
                                        ),
                                }),
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: ti.o1,
                            children: [
                                c &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(Q.m, {
                                                asContainer: !0,
                                                text: u ? R.intl.string(R.t.DH2o6R) : R.intl.string(R.t.utGGIY),
                                                children: (0, i.jsx)(J.D, {
                                                    role: "switch",
                                                    "aria-checked": u,
                                                    onClick: function (e) {
                                                        e.stopPropagation(), (0, e5.vz)(o.id, !u);
                                                    },
                                                    children: (0, i.jsxs)(eJ.E, {
                                                        variant: "text-sm/bold",
                                                        color: u ? "text-link" : "text-muted",
                                                        className: ti.Z4,
                                                        children: [
                                                            (0, i.jsx)(e2.X, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": R.intl.string(R.t.P8tvKG),
                                                                className: ti.mM,
                                                            }),
                                                            u ? R.intl.string(R.t.p9jC2r) : R.intl.string(R.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, i.jsx)("div", { className: ti.me, "aria-hidden": !0 }),
                                        ],
                                    }),
                                (0, i.jsx)(tn, {
                                    onClick: function (e) {
                                        e.stopPropagation(), (0, e5.Jx)(o.id);
                                    },
                                    "aria-label": R.intl.string(R.t.jSnJGT),
                                }),
                            ],
                        }),
                    ],
                }),
                N && (0, i.jsx)(ts, { channel: o, message: l, replyChainLength: T }),
            ],
        }),
    });
}
var to = n(749314),
    tl = n(148355),
    tu = n(74995);
let tc = r.memo(function (e) {
    let { channelId: t, chatInputType: n } = e,
        [s, a] = r.useState(null),
        o = (0, f.bG)([eM.A], () => eM.A.getStickerPreview(t, n.drafts.type));
    return n.stickers?.allowSending && null != o && 0 !== o.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("div", {
                      className: tu.Tz,
                      children: o.map((e) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: tu.dp,
                                  children: [
                                      (0, i.jsx)(J.D, {
                                          onFocus: () => a(e.id),
                                          onBlur: () => a(null),
                                          className: tu.b,
                                          "aria-label": R.intl.formatToPlainString(R.t.BGAQRd, { name: e.name }),
                                          onClick: () => (0, eP.x5)(t, n.drafts.type),
                                          children: (0, i.jsx)("div", {
                                              className: tu.Nk,
                                              children: (0, i.jsx)(te.a, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: tu.ut,
                                              }),
                                          }),
                                      }),
                                      (0, i.jsx)(tl.A, {
                                          isInteracting: s === e.id,
                                          className: tu.UV,
                                          size: 48,
                                          sticker: e,
                                      }),
                                  ],
                              },
                              e.id,
                          ),
                      ),
                  }),
                  (0, i.jsx)(to.A, { className: tu.R }),
              ],
          })
        : null;
});
var td = n(612394);
n(321073);
var t_ = n(442433);
n(827669);
var tf = n(448702);
function th(e) {
    let t,
        s,
        o,
        { className: l, activeCommand: u, activeOption: c, optionStates: d, channelId: _ } = e,
        f = r.useCallback(
            (e) => {
                let t = u?.rootCommand?.id;
                null == t
                    ? e.preventDefault()
                    : (0, t_.L3)(e, async () => {
                          let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                          return (n) => (0, i.jsx)(e, { ...n, id: t, label: R.intl.string(R.t.oJ1Muw) });
                      });
            },
            [u?.rootCommand?.id],
        ),
        h = r.useCallback(() => {
            z.Gf({ channelId: _, command: null, section: null });
        }, [_]);
    if (null == u) return null;
    if (null != c) {
        let e = d[c.name].lastValidationResult;
        (t = c.displayName), (s = c.displayDescription), (o = e?.success ? null : e?.error);
    } else (t = `/${u.displayName}`), (s = u.displayDescription), (o = null);
    return (0, i.jsxs)("div", {
        className: a()(l, tf.M0),
        onContextMenu: f,
        children: [
            (0, i.jsxs)("div", {
                className: tf.iz,
                children: [
                    (0, i.jsx)("span", { className: tf.UU, children: t }),
                    null != o
                        ? (0, i.jsx)("span", { className: tf.z3, children: o })
                        : (0, i.jsx)("span", { className: tf.h_, children: s }),
                ],
            }),
            (0, i.jsx)("div", {
                className: tf.o1,
                children: (0, i.jsx)(tn, { onClick: h, "aria-label": R.intl.string(R.t.cpT0Cq) }),
            }),
        ],
    });
}
var tp = n(228366),
    tE = n(734057);
let tm = new Set();
class tg extends f.Ay.PersistedStore {
    static displayName = "PTOStore";
    static persistKey = "PTOStore";
    initialize(e) {
        this.waitFor(tE.A, eG.Ay, eV.A, ej.default), null != e && (tm = new Set(e));
    }
    hasId(e) {
        return tm.has(e);
    }
    getState() {
        return [...tm];
    }
}
let tA = new tg(tp.h, {}),
    tI = () => {
        let e = eV.A.getChannelId();
        if (null == e) return;
        let t = tE.A.getChannel(e);
        null != t && t.isPrivate() && (tm.has(t.getRecipientId()) || (tm.add(t.getRecipientId()), tA.emitChange()));
    },
    tT = () =>
        (0, i.jsxs)("div", {
            className: ti.eU,
            children: [
                (0, i.jsx)(eJ.E, {
                    variant: "text-sm/medium",
                    className: a()(ti.Qq, ti.Fn),
                    children: R.intl.string(R.t["2UvR1E"]),
                }),
                (0, i.jsx)("div", {
                    className: ti.o1,
                    children: (0, i.jsx)(tn, { onClick: tI, "aria-label": R.intl.string(R.t.cpT0Cq) }),
                }),
            ],
        });
var tS = n(278351);
let tN = (e) => {
    let { error: t } = e;
    return (0, i.jsxs)("div", {
        className: tS.M,
        children: [
            (0, i.jsx)(eJ.E, { variant: "text-xs/bold", color: "text-strong", children: R.intl.string(R.t["4VDCG0"]) }),
            t
                ? (0, i.jsx)(eJ.E, { variant: "text-xs/medium", className: tS.z, children: R.intl.string(R.t.qNorwt) })
                : (0, i.jsx)(eJ.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: R.intl.string(R.t["260qZS"]),
                  }),
        ],
    });
};
var ty = n(575293),
    tC = n(151282),
    tv = n(1372);
function tO(e) {
    let { pendingScheduledMessage: t } = e,
        { channelId: n, scheduledTimestamp: r } = t;
    return (0, i.jsx)("div", {
        className: tv.e1,
        children: (0, i.jsx)("div", {
            className: tv.kL,
            children: (0, i.jsxs)("div", {
                className: tv.g3,
                children: [
                    (0, i.jsx)(eJ.E, {
                        color: "text-default",
                        className: a()(tv.Qq, tv.a3),
                        variant: "text-sm/normal",
                        children: R.intl.formatToPlainString(R.t["MQcRX/"], { timestamp: new Date(r).valueOf() }),
                    }),
                    (0, i.jsx)("div", {
                        className: tv.o1,
                        children: (0, i.jsx)(tn, {
                            onClick: function (e) {
                                e.stopPropagation(), (0, tC.Ps)(n);
                            },
                            "aria-label": R.intl.string(R.t.cpT0Cq),
                        }),
                    }),
                ],
            }),
        }),
    });
}
var tR = n(266599);
function tb(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, i.jsx)("div", { children: e }, t)),
        s = t.floating.map((e, t) => (0, i.jsx)(r.Fragment, { children: e }, t));
    return 0 === n.length && 0 === s.length
        ? null
        : (0, i.jsxs)(r.Fragment, {
              children: [
                  s.length > 0 && (0, i.jsx)("div", { className: tR.Vq, children: s }),
                  n.length > 0 && (0, i.jsx)("div", { className: tR.MD, children: n }),
              ],
          });
}
var tD = n(729666),
    tL = n(562708),
    tw = n(150934),
    tM = n(139286),
    tP = n(47167),
    tx = n(713654),
    tU = n(252263),
    tk = n(8455),
    tG = n(67259),
    tF = n(355026);
function tV(e) {
    let { thread: t, pendingScheduledMessage: n } = e,
        s = (0, tk.Vp)({ location: "ThreadsAlsoSendToChannelArea" }),
        [a, o] = (0, f.yK)([tE.A, tG.A], () => [
            t.isThread() ? tE.A.getChannel(t.parent_id) : null,
            tG.A.getAlsoSendToChannel(t.id),
        ]),
        l = (0, tP.Ay)(a),
        u = r.useCallback(
            (e) => {
                eW.default.track(eo.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_TOGGLED, {
                    value: e,
                    guild_id: t.guild_id,
                    channel_id: t.id,
                }),
                    (0, tU.B)({ channelId: t.id, enabled: e });
            },
            [t],
        );
    if (
        ((0, tM.A)(
            { name: tL.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL, type: tL.ImpressionTypes.VIEW },
            { disableTrack: null == a || !s.enabled },
            [a, s.enabled],
        ),
        !s.enabled || null == a)
    )
        return null;
    let c = (0, tx.gU)(a),
        d = R.intl.format(R.t.UqL10G, {
            callToActionHook: (e, t) =>
                (0, i.jsx)(
                    eJ.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: tF.Pf,
                        children: R.intl.string(R.t.Pi3JW7),
                    },
                    t,
                ),
            channelName: l,
            channelNameHook: (e, t) =>
                (0, i.jsxs)(
                    eJ.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: tF.Pf,
                        children: [null == c ? null : (0, i.jsx)(c, { color: "currentColor", className: tF.Kk }, t), e],
                    },
                    t,
                ),
        });
    return (0, i.jsx)("div", {
        className: tF.kL,
        children: (0, i.jsx)(tw.S, { checked: o, disabled: null != n, onChange: u, label: d, labelType: "secondary" }),
    });
}
function tB(e) {
    let { channel: t, type: n, pendingScheduledMessage: r } = e,
        { shouldShow: s } = (function (e) {
            let { channel: t, type: n } = e,
                i = (0, f.bG)([tE.A], () => {
                    let e = tE.A.getChannel(t.parent_id);
                    return e?.isForumLikeChannel() ?? !1;
                }),
                r = [eX.oU.NORMAL, eX.oU.SIDEBAR].includes(n);
            return { shouldShow: t.isThread() && !i && r };
        })({ channel: t, type: n });
    return s ? (0, i.jsx)(tV, { thread: t, pendingScheduledMessage: r }) : null;
}
var tH = n(822610),
    tj = n(625928),
    tY = n(670482),
    tW = n(621466),
    tK = n(902001),
    tz = n(899536),
    t$ = n(74833),
    tq = n(216964),
    tZ = n(387758),
    tX = n(39623),
    tQ = n(267102),
    tJ = n(186306),
    t0 = n(339871),
    t1 = n(820066),
    t2 = n(128934);
function t3(e) {
    let { editorRef: t, options: n, iconClassName: r, dividerClassName: s } = e,
        o = t.current?.getSlateEditor();
    return null == o
        ? null
        : (0, i.jsxs)("div", {
              className: t2.Uo,
              children: [
                  (0, i.jsx)(t4, {
                      slateEditor: o,
                      markdownSyntax: "bold",
                      children: (0, i.jsx)(tK.$, { size: "md", color: "currentColor", className: a()(t2.Kk, r) }),
                  }),
                  (0, i.jsx)(t4, {
                      slateEditor: o,
                      markdownSyntax: "italics",
                      children: (0, i.jsx)(tz.y, { size: "md", color: "currentColor", className: a()(t2.Kk, r) }),
                  }),
                  (0, i.jsx)(t4, {
                      slateEditor: o,
                      markdownSyntax: "strikethrough",
                      children: (0, i.jsx)(t$.t, { size: "md", color: "currentColor", className: a()(t2.Kk, r) }),
                  }),
                  (0, i.jsx)("div", { className: a()(t2.yF, s) }),
                  !n?.disableBlockQuotes &&
                      (0, i.jsx)(t5, {
                          slateEditor: o,
                          blockType: "blockQuote",
                          children: (0, i.jsx)(tq.c, { size: "md", color: "currentColor", className: a()(t2.Kk, r) }),
                      }),
                  !n?.disableInlineCode &&
                      (0, i.jsx)(t4, {
                          slateEditor: o,
                          markdownSyntax: "inlineCode",
                          children: (0, i.jsx)(tZ.G, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: a()(t2.Kk, r),
                          }),
                      }),
                  (0, i.jsx)(t4, {
                      slateEditor: o,
                      markdownSyntax: "spoiler",
                      children: (0, i.jsx)(tX.b, { size: "md", color: "currentColor", className: a()(t2.Kk, r) }),
                  }),
              ],
          });
}
let t6 = r.forwardRef(function (e, t) {
    let { editorRef: n, containerRef: s, options: a } = e,
        o = r.useRef(null),
        [l, u] = r.useState(!1),
        c = r.useRef(null),
        d = r.useContext(tQ.Ay),
        _ = r.useCallback(() => {
            u(!1), clearTimeout(c.current);
        }, []),
        f = r.useCallback(
            (e) => {
                let t = d.renderWindow;
                (e.target instanceof t.Node && o.current?.contains(e.target)) || _();
            },
            [d, _],
        ),
        h = r.useCallback(
            (e) => {
                let t = d.renderWindow;
                if (e.target instanceof t.Element)
                    if (0 !== e.button) _();
                    else {
                        let n = e.target instanceof t.Node && o.current?.contains(e.target);
                        clearTimeout(c.current),
                            (c.current = setTimeout(() => {
                                let t = (0, tW.BF)(e)?.activeElement,
                                    i = s.current;
                                u(n || (null != t && null != i && i.contains(t)));
                            }, 100));
                    }
                else _();
            },
            [d, s, _],
        );
    r.useImperativeHandle(t, () => ({ hide: _ }), [_]),
        r.useEffect(() => {
            let e = d.renderWindow;
            return (
                e.document.addEventListener("keydown", _),
                e.document.addEventListener("mousedown", f),
                e.document.addEventListener("mouseup", h),
                e.addEventListener("focus", _),
                e.addEventListener("blur", _),
                () => {
                    e.document.removeEventListener("keydown", _),
                        e.document.removeEventListener("mousedown", f),
                        e.document.removeEventListener("mouseup", h),
                        e.removeEventListener("focus", _),
                        e.removeEventListener("blur", _),
                        clearTimeout(c.current);
                }
            );
        }, [d, _, f, h]);
    let { x: p, y: E } = r.useMemo(() => {
            let e = n.current?.getSlateEditor();
            if (e?.selection == null || t1.ZF.isCollapsed(e.selection) || !l) return { x: null, y: null };
            let t = tY.rL.findDocumentOrShadowRoot(e),
                i = t.getSelection();
            if (null == i || null == i.focusNode || null == i.anchorNode || i.isCollapsed) return { x: null, y: null };
            let r = t.createRange();
            r.setStart(i.focusNode, i.focusOffset), r.setEnd(i.focusNode, i.focusOffset);
            let a = r.getBoundingClientRect(),
                o = t.createRange();
            o.setStart(i.anchorNode, i.anchorOffset), o.setEnd(i.anchorNode, i.anchorOffset);
            let u = o.getBoundingClientRect(),
                c = t.createRange();
            c.setStart(i.anchorNode, i.anchorOffset), c.setEnd(i.focusNode, i.focusOffset);
            let d = c.getBoundingClientRect(),
                _ = a.x === u.x,
                f = _ ? d.x : Math.min(a.x, u.x);
            return {
                x: f + ((_ ? d.x + d.width : Math.max(a.x, u.x)) - f) / 2,
                y: Math.max(s.current?.getBoundingClientRect()?.y ?? 0, Math.min(u.y, a.y)),
            };
        }, [s, l, n]),
        [m, g] = r.useState(0),
        [A, I] = r.useState(0);
    return (r.useLayoutEffect(() => {
        if (null == p || null == E || null == o.current) return;
        let e = o.current.getBoundingClientRect();
        I(e.width / 2), g(e.height + 12);
    }, [p, E]),
    null == p || null == E || null == n.current?.getSlateEditor())
        ? null
        : (0, i.jsx)(v.Ay, {
              children: (0, i.jsx)("div", {
                  id: "slate-toolbar",
                  ref: o,
                  className: t2.KE,
                  style: { top: E - m, left: p - A },
                  onMouseDown: (e) => {
                      e.stopPropagation();
                  },
                  onMouseUp: (e) => {
                      e.stopPropagation();
                  },
                  children: (0, i.jsx)(t3, { editorRef: n, options: a }),
              }),
          });
});
function t4(e) {
    let { slateEditor: t, markdownSyntax: n, children: r } = e,
        s = !1;
    if (t?.selection != null) {
        let [e, i] = t1.ZF.edges(t.selection);
        s = null != (0, t0.Sx)(t, e, i).before[n];
    }
    return (0, i.jsx)(p.vN, {
        children: (0, i.jsx)("button", {
            "aria-label": (function (e) {
                switch (e) {
                    case "bold":
                        return R.intl.string(R.t.XI2CUr);
                    case "italics":
                        return R.intl.string(R.t.a96YKu);
                    case "underline":
                        return R.intl.string(R.t.PdIYwI);
                    case "strikethrough":
                        return R.intl.string(R.t["63uDvE"]);
                    case "inlineCode":
                        return R.intl.string(R.t.iBerkZ);
                    case "spoiler":
                        return R.intl.string(R.t["F+x38C"]);
                }
            })(n),
            "aria-pressed": s,
            className: t2.x6,
            onClick: () => {
                null != t && tJ.o.withSingleEntry(t, () => (0, t0.Px)(t, n));
            },
            children: r,
        }),
    });
}
function t5(e) {
    let { blockType: t, slateEditor: n, children: r } = e,
        s = null != n ? t1.VW.getCurrentBlock(n) : null,
        a = null != s && t1.AS.isType(s[0], t);
    return (0, i.jsx)(p.vN, {
        children: (0, i.jsx)("button", {
            "aria-label": (function (e) {
                if ("blockQuote" === e) return R.intl.string(R.t.svB7eY);
            })(t),
            "aria-pressed": a,
            className: t2.x6,
            onClick: () => {
                null != n && tJ.o.withSingleEntry(n, () => (0, t0.fO)(n, t));
            },
            children: r,
        }),
    });
}
var t7 = n(922016),
    t8 = n(375499),
    t9 = n(267889),
    ne = n(307731);
function nt(e) {
    let { editorRef: t, type: n, channel: s } = e,
        a = t.current?.getSlateEditor(),
        o = r.useRef(null),
        l = r.useCallback(
            (e) => {
                let { emoji: n, willClose: i } = e,
                    r = t.current;
                null != n && null != r && r.insertEmoji({ emoji: n, willClose: i }), i && (0, eg.v8)();
            },
            [t],
        );
    return null == a
        ? null
        : (0, i.jsxs)("div", {
              id: "slate-toolbar",
              className: t2.aL,
              children: [
                  (0, i.jsx)("div", {
                      className: t2.Wy,
                      children: (0, i.jsx)(t3, {
                          editorRef: t,
                          options: n.markdown,
                          iconClassName: t2.C7,
                          dividerClassName: t2.us,
                      }),
                  }),
                  (0, i.jsx)(t7.Y, {
                      targetElementRef: o,
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, i.jsx)(t9.A, {
                              persistSearch: !0,
                              channel: s,
                              closePopout: t,
                              onSelectEmoji: (e) => {
                                  let { emoji: n, willClose: i } = e;
                                  l({ emoji: n, willClose: i }), i && t();
                              },
                              pickerIntention:
                                  n.expressionPicker?.emojiIntention ?? ne.EmojiIntention.COMMUNITY_CONTENT,
                          });
                      },
                      position: "bottom",
                      animation: t7.Y.Animation.NONE,
                      align: "left",
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, i.jsx)(t8.A, { ...e, ref: o, active: n, className: t2.Z8, tabIndex: 0 });
                      },
                  }),
              ],
          });
}
var nn = n(698279);
function ni(e, t, s, a, o) {
    let [l, u] = r.useState(!1),
        c = r.useCallback(
            (r, d, _, f, p, E) => {
                if (l) return;
                u(!0);
                let g = eM.A.getStickerPreview(o, t.drafts.type)?.map((e) => e.id) ?? [],
                    A = eH.A.getUploads(o, t.drafts.type) ?? [];
                if (null == d && !f && !p && (0, eI.xz)(A, o)) {
                    u(!1),
                        (0, h.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("56386"),
                                n.e("19397"),
                                n.e("8516"),
                                n.e("54518"),
                                n.e("4352"),
                                n.e("63897"),
                                n.e("64801"),
                                n.e("12815"),
                                n.e("49681"),
                                n.e("34530"),
                                n.e("76602"),
                                n.e("28229"),
                                n.e("21921"),
                                n.e("39970"),
                                n.e("72789"),
                                n.e("65437"),
                                n.e("79745"),
                                n.e("5500"),
                                n.e("32209"),
                                n.e("49697"),
                                n.e("68763"),
                                n.e("58337"),
                                n.e("18997"),
                                n.e("26437"),
                                n.e("98972"),
                                n.e("12682"),
                                n.e("33097"),
                                n.e("99011"),
                                n.e("36150"),
                                n.e("15172"),
                                n.e("10014"),
                                n.e("86861"),
                                n.e("70961"),
                                n.e("23685"),
                                n.e("42516"),
                                n.e("84688"),
                            ]).then(n.bind(n, 538899));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    threadId: o,
                                    attachments: A,
                                    sendMessage: () => c(r, void 0, void 0, void 0, !0),
                                });
                        });
                    return;
                }
                e({
                    value: r,
                    uploads: A,
                    stickers: g,
                    command: d,
                    commandOptionValues: _,
                    isGif: f,
                    gifMetadata: E,
                }).then((e) => {
                    let { shouldClear: n, shouldRefocus: i } = e,
                        r = (n && t.submit?.clearOnSubmit) ?? !1,
                        l = null != s.current;
                    r &&
                        (o !== eV.A.getChannelId()
                            ? m.A.saveDraft(o, "", t.drafts.type)
                            : l && (s.current?.clearValue(), a.current?.hide())),
                        l && (u(!1), (0, eg.v8)(), i && s.current?.focus());
                });
            },
            [s, a, e, l, t, o],
        );
    return {
        submitting: l,
        submit: c,
        handleSubmit: r.useCallback(
            (e) => {
                s?.current?.submit(e);
            },
            [s],
        ),
    };
}
function nr(e, t, n) {
    return r.useCallback(
        (i) => {
            if (t === eX.oU.CREATE_FORUM_POST || t === eX.oU.CREATE_ANNOUNCEMENT_POST) n.current?.insertGIF(i);
            else {
                let t = {
                    gif_provider: i.provider ?? (0, eT.cf)(),
                    load_id: eY.A.getAnalyticsID(),
                    source_object: "GIF Picker",
                    gif_url: i.url,
                    gif_id: i.id,
                };
                e(i.url, void 0, void 0, !0, void 0, t);
            }
            (0, eg.v8)(), n.current?.focus();
        },
        [n, e, t],
    );
}
function ns(e) {
    return r.useCallback(
        (t) => {
            let { emoji: n, willClose: i } = t,
                r = e.current;
            null != n && null != r && r.insertEmoji({ emoji: n, willClose: i }), i && (0, eg.v8)();
        },
        [e],
    );
}
function na(e) {
    let { editorRef: t, disabled: n, textValue: i, channelId: s, chatInputType: a, submit: o } = e,
        { analyticsLocations: l } = (0, T.Ay)();
    return r.useCallback(
        (e, r) => {
            n ||
                (a === eX.oU.CREATE_ANNOUNCEMENT_POST || (0, ex.YS)(r, i, s, a.drafts.type)
                    ? ((0, td.fh)({
                          sticker: e,
                          stickerSelectLocation: r,
                          isReplacement: null != eM.A.getStickerPreview(s, a.drafts.type),
                          analyticsLocations: l,
                      }),
                      (0, eP.$x)(s, e, a.drafts.type))
                    : (o({ value: "", uploads: void 0, stickers: [e.id] }), t.current?.clearValue()),
                (0, eg.v8)(),
                t.current?.focus());
        },
        [n, i, s, t, l, o, a],
    );
}
function no(e) {
    return r.useCallback(
        (t) => {
            let n = e.current;
            null != n && n.insertKaomoji(t), (0, eg.v8)(), n?.focus();
        },
        [e],
    );
}
function nl(e, t, n) {
    let i = r.useCallback(() => {
            t || (0, eg.r$)(nn.kx.EMOJI, e, n);
        }, [t, e, n]),
        s = r.useCallback(() => {
            !t && e.gifs?.allowSending && (0, eg.r$)(nn.kx.GIF, e, n);
        }, [t, e, n]),
        a = r.useCallback(() => {
            !t && e.stickers?.allowSending && (0, eg.r$)(nn.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, eK.Vo)({ event: eo.jej.TOGGLE_EMOJI_POPOUT, handler: i }),
        (0, eK.Vo)({ event: eo.jej.TOGGLE_GIF_PICKER, handler: s }),
        (0, eK.Vo)({ event: eo.jej.TOGGLE_STICKER_PICKER, handler: a });
}
function nu(e, t, n) {
    let [i] = r.useState(() => new o.EventEmitter());
    return (
        r.useEffect(() => {
            i.emit("text-changed", t, n);
        }, [t, n, i]),
        {
            eventEmitter: i,
            handleEditorSelectionChanged: (t) => {
                null != e.current && i.emit("selection-changed", t);
            },
        }
    );
}
function nc() {
    let e = r.useRef(null),
        t = r.useCallback(() => {
            e.current?.onMaybeShowAutocomplete();
        }, []),
        n = r.useCallback(() => {
            e.current?.onHideAutocomplete();
        }, []);
    return { autocompleteRef: e, handleMaybeShowAutocomplete: t, handleHideAutocomplete: n };
}
function nd(e) {
    let t = r.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
}
function n_(e) {
    let [t, n] = r.useState(0);
    return {
        editorHeight: t,
        handleResize: r.useCallback(
            (t) => {
                n(t ?? 0), e?.(t);
            },
            [e],
        ),
    };
}
function nf(e, t, n, i) {
    let r = e.getGuildId(),
        s = (0, f.bG)([eS.A], () => null != r && eS.A.isLurking(r), [r]),
        a = (0, f.bG)([eG.Ay, ej.default], () => {
            let e = ej.default.getCurrentUser();
            return (null != r && null != e ? eG.Ay.getMember(r, e.id)?.isPending : null) ?? !1;
        }),
        o = (0, f.cf)([eF.A], () => {
            let r = e.isPrivate(),
                s = eF.A.computePermissions(e),
                o = _.zy(s, eo.xBc.CREATE_PUBLIC_THREADS) || _.zy(s, eo.xBc.CREATE_PRIVATE_THREADS),
                l =
                    (!t.permissions?.requireCreateTherads || o) &&
                    (!t.permissions?.requireSendMessages || _.zy(s, eo.xBc.SEND_MESSAGES)),
                u = l && _.zy(s, eo.xBc.ATTACH_FILES),
                c = null != n,
                d = (0, eU.UJ)(e);
            return {
                disabled: i || a || (!r && !l) || d,
                canAttachFiles: !0 === t.attachments && (r || a || u || c),
                canCreateThreads: o,
                canEveryoneSendMessages: e$.MJ(eo.xBc.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, i, a]);
    return { isLurking: s, isPendingMember: a, ...o };
}
function nh(e, t, n) {
    let [i, s, a] = (0, eg.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], c.x),
        o = (0, f.bG)([N.A], () => N.A.shouldShowPopup() && N.A.activeViewType() === e && N.A.activeChannelId() === n);
    r.useEffect(
        () => () => {
            (0, eg.v8)(e, n);
        },
        [e, n],
    );
    let l = r.useCallback(() => {
            null != i || o || t.current?.handleOuterClick();
        }, [i, o, t]),
        u = null == i || null == s || s !== e || a !== n;
    return { expressionPickerView: i, shouldHideExpressionPicker: u, handleOuterClick: l };
}
let np = (e, t) => ({
        handleAutocompleteVisibilityChange: r.useCallback(
            (n) => {
                n && (0, eg.v8)(e, t);
            },
            [e, t],
        ),
    }),
    nE = r.memo(
        r.forwardRef(function (e, t) {
            let n,
                {
                    textValue: s,
                    richValue: o,
                    className: l,
                    innerClassName: c,
                    editorClassName: _,
                    id: h,
                    required: m,
                    disabled: y,
                    placeholder: C,
                    accessibilityLabel: v,
                    channel: O,
                    type: R,
                    focused: b,
                    error: D,
                    renderAttachButton: L,
                    renderApplicationCommandIcon: w,
                    renderButtons: x,
                    pendingReply: U,
                    onChange: k,
                    onResize: G,
                    onBlur: F,
                    onFocus: V,
                    onKeyDown: B,
                    onSubmit: H,
                    promptToUpload: j,
                    highlighted: Y,
                    canMentionRoles: W,
                    canMentionChannels: K,
                    maxCharacterCount: z,
                    showRemainingCharsAfterCount: $,
                    allowNewLines: q = !0,
                    characterCountClassName: Z,
                    "aria-describedby": X,
                    "aria-labelledby": Q,
                    setEditorRef: J,
                    autoCompletePosition: ee,
                    children: et,
                    disableThemedBackground: en = !1,
                    emojiPickerCloseOnModalOuterClick: ei,
                    parentModalKey: er,
                    pendingScheduledMessage: es,
                    showValueWhenDisabled: ea = !1,
                } = e;
            u()(null != R, "chat input type must be set");
            let { analyticsLocations: el } = (0, T.Ay)(I.A.CHANNEL_TEXT_AREA),
                eu = nd(t),
                ec = r.useRef(null),
                ed = r.useRef(null),
                ef = r.useRef(null),
                eI = r.useRef(null),
                eT = r.useRef(null);
            J?.(ef.current);
            let eS = (0, S.A)(O),
                [ey, eC] = r.useState(!eS);
            (0, g.i4)(eu, (e) => {
                let { width: t } = e;
                return eC(!eS && (null == t || t > 450));
            });
            let { activeCommand: ev, activeCommandSection: eO } = (0, f.cf)([P.A], () => ({
                    activeCommand: R.commands?.enabled ? P.A.getActiveCommand(O.id) : null,
                    activeCommandSection: R.commands?.enabled ? P.A.getActiveCommandSection(O.id) : null,
                })),
                {
                    isLurking: eR,
                    isPendingMember: eb,
                    disabled: eD,
                    canAttachFiles: eL,
                    canCreateThreads: eM,
                    canEveryoneSendMessages: eP,
                } = nf(O, R, ev, y),
                ex = R.toolbarType === eX.O1.STATIC,
                eU = !ek.D_.useSetting() && !(0, eq.isAndroidWeb)() && null != window.ResizeObserver,
                eF = !eU || !R.commands?.enabled || !b || "/" !== s,
                eV = (0, eN.A)(),
                { fontSize: eH } = (0, f.cf)([A.A], () => ({ fontSize: A.A.fontSize })),
                eY = (0, f.bG)([eB.A], () => eB.A.isEnabled());
            nl(R, eD, O.id);
            let { eventEmitter: eK, handleEditorSelectionChanged: e$ } = nu(ef, s, o),
                eJ = r.useRef(s);
            eJ.current = s;
            let e0 = r.useCallback(
                    (e, t, n) => {
                        "/" === t && "" === eJ.current && R.commands?.enabled && eK.emit("command-sentinel-typed"),
                            k?.(e, t, n);
                    },
                    [k, R.commands?.enabled, eK],
                ),
                { submitting: e1, submit: e2, handleSubmit: e3 } = ni(H, R, ef, eT, O.id),
                { autocompleteRef: e6, handleMaybeShowAutocomplete: e4, handleHideAutocomplete: e5 } = nc(),
                e7 = nr(e2, R, ef),
                e8 = ns(ef),
                e9 = na({ editorRef: ef, disabled: eD, textValue: s, channelId: O.id, chatInputType: R, submit: H }),
                te = r.useCallback(
                    (e, t, n) => {
                        let i = ef.current;
                        null != e &&
                            null != i &&
                            (eW.default.track(eo.HAw.SOUNDMOJI_SELECT, {
                                channel_id: O.id,
                                guild_id: O.guild_id,
                                sound_guild_id: e.guildId,
                                sound_id: e.soundId,
                                source: t,
                            }),
                            i.insertSound(e)),
                            n && (0, eg.v8)(),
                            i?.focus();
                    },
                    [ef, O.id, O.guild_id],
                ),
                tt = no(ef),
                tn = r.useCallback(() => eT?.current?.hide(), []),
                { editorHeight: ti, handleResize: ts } = n_(G),
                {
                    handleTab: to,
                    handleEnter: tl,
                    handleMoveSelection: tu,
                } = ((n = r.useCallback(
                    () => !!(!eF && ec.current?.onTabOrEnter(!1)) || e6.current?.onTabOrEnter(!1) || !1,
                    [eF, ec, e6],
                )),
                {
                    handleTab: n,
                    handleEnter: r.useCallback(
                        () => !!(!eF && ec.current?.onTabOrEnter(!0)) || e6.current?.onTabOrEnter(!0) || !1,
                        [eF, ec, e6],
                    ),
                    handleMoveSelection: r.useCallback(
                        (e) => !!(!eF && ec.current?.onMoveSelection(e)) || e6.current?.onMoveSelection(e) || !1,
                        [eF, ec, e6],
                    ),
                }),
                { expressionPickerView: td, shouldHideExpressionPicker: t_, handleOuterClick: tf } = nh(R, ef, O.id),
                { selectedAutocompleteInputType: tp, selectedAutocompleteInputError: tE } = (function (e, t) {
                    let [n, i] = r.useState({
                            selectedAutocompleteInputType: null,
                            selectedAutocompleteInputError: !1,
                        }),
                        s = r.useCallback(() => {
                            let e,
                                n = t.current?.getSlateEditor();
                            null != n && (e = t1.VW.getSelectedParentOfType(n, eE.mk)?.[0]),
                                i({
                                    selectedAutocompleteInputType: e?.type ?? null,
                                    selectedAutocompleteInputError: e?.error ?? !1,
                                });
                        }, [t]);
                    return (
                        r.useEffect(
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
                })(eK, ef),
                { handleAutocompleteVisibilityChange: tg } = np(R, O.id),
                tI = (function (e) {
                    let { type: t, channelId: n } = e;
                    return (0, eh.bG)([N.A], () => {
                        let e = N.A.activeViewType();
                        return null != e && e === t && N.A.activeChannelId() === n && N.A.shouldShowPopup();
                    }, [t, n]);
                })({ type: R, channelId: O.id }),
                tS = r.useCallback(() => {
                    eK.emit("submit-failure");
                }, [eK]);
            (0, eZ.R)(eK, O.guild_id, O.id);
            let tC = null != U,
                tv = (eD && !((eR || eb) && eP)) || (e1 && R.submit?.useDisabledStylesOnSubmit),
                tL = null;
            null != ev ? (tL = w?.(ev, eO, tR.g$)) : (!eD || eM) && (tL = L?.(tC, tR.g$));
            let tw = eU && null != o && !eD && R.showCharacterCount && null == ev,
                tM = eU && !__OVERLAY__ && null != o && null == ev && R.toolbarType !== eX.O1.NONE && !eD,
                tP = (function (e) {
                    let {
                            channel: t,
                            type: n,
                            activeCommand: s,
                            pendingReply: a,
                            pendingScheduledMessage: o,
                            selectedAutocompleteInputType: l,
                            selectedAutocompleteInputError: u,
                        } = e,
                        { activeCommandOption: c, activeCommandOptionStates: d } = (0, f.cf)([P.A], () => ({
                            activeCommandOption: P.A.getActiveOption(t.id),
                            activeCommandOptionStates: P.A.getOptionStates(t.id),
                        })),
                        _ = (0, f.bG)([eG.Ay, ej.default, tA], () => {
                            let e = ej.default.getCurrentUser();
                            if (null == e || !e.isStaff() || !t.isDM()) return !1;
                            let n = ej.default.getUser(t.getRecipientId());
                            if (!n?.isStaff()) return !1;
                            let i = eG.Ay.getNicknames(n.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
                            return i ? !tA.hasId(n.id) && i : (tm.delete(n.id) && tA.emitChange(), !1);
                        });
                    return r.useMemo(() => {
                        let e = [],
                            r = [];
                        return (
                            null != t.guild_id &&
                                n === eX.oU.NORMAL &&
                                r.push((0, i.jsx)(ty.A, { guildId: t.guild_id, channel: t, className: tR.UW })),
                            null != s &&
                                e.push(
                                    (0, i.jsx)(th, {
                                        activeCommand: s,
                                        activeOption: c ?? null,
                                        optionStates: d,
                                        channelId: t.id,
                                    }),
                                ),
                            null != a && e.push((0, i.jsx)(ta, { reply: a, chatInputType: n })),
                            _ && e.push((0, i.jsx)(tT, {})),
                            null != o && e.push((0, i.jsx)(tO, { pendingScheduledMessage: o })),
                            "timestampMentionInput" === l && r.push((0, i.jsx)(tN, { error: u ?? !1 })),
                            { stacked: e, floating: r }
                        );
                    }, [s, c, d, t, a, _, n, o, l, u]);
                })({
                    channel: O,
                    type: R,
                    activeCommand: ev,
                    pendingReply: U,
                    pendingScheduledMessage: es,
                    selectedAutocompleteInputType: tp,
                    selectedAutocompleteInputError: tE,
                }),
                tx = 0 === s.trim().length,
                tU = null != U ? [X, tr].filter(Boolean).join(" ") : X,
                tk = R.layout === eX.wt.INLINE,
                tG = R.layout === eX.wt.FLUSH,
                tF = (0, i.jsx)("div", { ref: ed, className: tR.BW }),
                tV = tI ? (0, i.jsx)(M, { align: "right", positionTargetRef: ed, channel: O }) : null,
                tY =
                    null != x
                        ? x()
                        : (0, i.jsx)(tD.A, {
                              type: R,
                              disabled: eD,
                              channel: O,
                              handleSubmit: e3,
                              isEmpty: tx,
                              showAllButtons: ey,
                          }),
                tW = tw
                    ? (0, i.jsx)(tj.A, {
                          type: R,
                          textValue: s,
                          className: Z,
                          maxCharacterCount: z,
                          showRemainingCharsAfterCount: $,
                      })
                    : null;
            return (
                r.useEffect(() => {
                    b && ez._.dispatch(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: O.id });
                }, [b, O.id]),
                (0, i.jsx)(em.Sv, {
                    value: eK,
                    children: (0, i.jsxs)(T.f5, {
                        value: el,
                        children: [
                            tM && ex
                                ? (0, i.jsx)(nt, { editorRef: ef, type: R, channel: O })
                                : tM
                                  ? (0, i.jsx)(t6, { ref: eT, editorRef: ef, containerRef: eI, options: R.markdown })
                                  : null,
                            (0, i.jsxs)("div", {
                                ref: eu,
                                className: a()(l, {
                                    [tR.gM]: !0,
                                    [tR.h9]: tv,
                                    [tR.mr]: Y,
                                    [tR.Wn]: d.Fr,
                                    [tR.Ls]: tk,
                                    [tR.AH]: tG,
                                    [tR.z3]: null != D,
                                }),
                                children: [
                                    tk || tG ? null : (0, i.jsx)(tb, { bars: tP }),
                                    (0, i.jsxs)("div", {
                                        ref: eI,
                                        onScroll: tn,
                                        className: a()(c, {
                                            [tR.xx]: !0,
                                            [tR.k6]: !en,
                                            [tR.Ri]: tP.stacked.length > 0,
                                        }),
                                        children: [
                                            (0, i.jsx)(tc, { channelId: O.id, chatInputType: R }),
                                            R.hideAttachmentArea
                                                ? null
                                                : (0, i.jsx)(tH.A, { channelId: O.id, type: R, canAttachFiles: eL }),
                                            (0, i.jsxs)("div", {
                                                className: a()(tR.vW, {
                                                    [tR.BF]: tv,
                                                    [tR.RL]:
                                                        R !== eX.oU.EDIT && (null != tL || (tv && null == tL) || eR),
                                                    [tR.fk]: R === eX.oU.THREAD_CREATION,
                                                    [tR.TZ]:
                                                        R === eX.oU.CREATE_FORUM_POST ||
                                                        R === eX.oU.FORWARD_MESSAGE_INPUT,
                                                    [tR.$i]: R === eX.oU.USER_PROFILE_REPLY,
                                                }),
                                                onMouseDown: tf,
                                                children: [
                                                    tV,
                                                    tL,
                                                    (0, i.jsx)(p.vN, {
                                                        ringTarget: eu,
                                                        ringClassName: tR.Rg,
                                                        children: (0, i.jsx)(eQ.A, {
                                                            ref: ef,
                                                            id: h,
                                                            focused: b,
                                                            useSlate: eU,
                                                            textValue: s,
                                                            richValue: o,
                                                            disabled: eD,
                                                            placeholder: C,
                                                            required: m,
                                                            accessibilityLabel: v,
                                                            isPreviewing: (eR || eb) && eP,
                                                            channel: O,
                                                            type: R,
                                                            canPasteFiles: eL,
                                                            uploadPromptCharacterCount: eo.CS1,
                                                            maxCharacterCount: z ?? eV,
                                                            allowNewLines: q,
                                                            "aria-describedby": tU,
                                                            onChange: e0,
                                                            onResize: ts,
                                                            onBlur: F,
                                                            onFocus: V,
                                                            onKeyDown: B,
                                                            onSubmit: e2,
                                                            onSubmitFailure: tS,
                                                            onTab: to,
                                                            onEnter: tl,
                                                            onMoveSelection: tu,
                                                            onSelectionChanged: e$,
                                                            onMaybeShowAutocomplete: e4,
                                                            onHideAutocomplete: e5,
                                                            promptToUpload: j,
                                                            fontSize: eH,
                                                            spellcheckEnabled: eY,
                                                            canOnlyUseTextCommands: tC,
                                                            className: a()(
                                                                {
                                                                    [tR.QI]: R === eX.oU.THREAD_CREATION,
                                                                    [tR.AV]: R === eX.oU.PROFILE_BIO_INPUT,
                                                                    [tR.GR]: R === eX.oU.OVERLAY_INLINE_REPLY,
                                                                },
                                                                _,
                                                            ),
                                                            "aria-labelledby": Q,
                                                            showValueWhenDisabled: ea,
                                                        }),
                                                    }),
                                                    tY,
                                                    tF,
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(tB, { channel: O, type: R, pendingScheduledMessage: es }),
                                    eF ? null : (0, i.jsx)(e_, { ref: ec, channel: O, canOnlyUseTextCommands: tC }),
                                    (0, i.jsx)(ep.A, {
                                        ref: e6,
                                        channel: O,
                                        canMentionRoles: W,
                                        canMentionChannels: K,
                                        useNewSlashCommands: eU,
                                        canOnlyUseTextCommands: tC,
                                        canSendStickers: R.stickers?.allowSending,
                                        canSendSoundmoji: R.soundmoji?.allowSending,
                                        textValue: s,
                                        focused: b,
                                        expressionPickerView: td,
                                        type: R,
                                        targetRef: eu,
                                        editorRef: ef,
                                        onSendMessage: e2,
                                        onSendSticker: e9,
                                        onVisibilityChange: tg,
                                        editorScrollerRef: eI,
                                        editorHeight: ti,
                                        barsHeight: 40 * tP.floating.length,
                                        setValue: (e, t) => e0?.(null, e, t),
                                        position: ee,
                                    }),
                                    (0, i.jsx)(ew, { textValue: s, editorHeight: ti, channelId: O.id }),
                                    tW,
                                    et,
                                ],
                            }),
                            (0, i.jsx)(E.U, { error: D }),
                            t_
                                ? null
                                : (0, i.jsx)(eA.A, {
                                      positionTargetRef: eu,
                                      type: R,
                                      onSelectGIF: e7,
                                      onSelectEmoji: e8,
                                      onSelectSticker: e9,
                                      onSelectSound: te,
                                      onSelectKaomoji: tt,
                                      channel: O,
                                      closeOnModalOuterClick: ei,
                                      parentModalKey: er,
                                      position: "top",
                                      align: "right",
                                      positionLayerClassName: tR.BD,
                                  }),
                        ],
                    }),
                })
            );
        }),
    );
