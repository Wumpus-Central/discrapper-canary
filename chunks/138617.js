"use strict";
n.d(t, {
    HG: () => ne,
    Sk: () => ns,
    C: () => t9,
    v7: () => ni,
    Zx: () => t5,
    L0: () => nr,
    N_: () => nt,
    MD: () => nl,
    Ay: () => nd,
    uW: () => no,
    NO: () => t8,
    ck: () => na,
    ml: () => nn,
    Vu: () => t7,
});
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(143236),
    o = n(284009),
    d = n.n(o),
    c = n(942381),
    u = n(607399),
    _ = n(136722),
    E = n(17928),
    A = n(192308),
    h = n(187322),
    I = n(511274),
    f = n(465532),
    p = n(765671),
    T = n(775602),
    m = n(793574),
    g = n(688810),
    S = n(177640),
    N = n(989837),
    C = n(289873),
    O = n(268218),
    R = n(750506),
    L = n(60809),
    y = n(375708),
    D = n(583224);
let v = { width: 500, height: L.$V },
    b = (0, O.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("35062"),
                n.e("47292"),
                n.e("41295"),
                n.e("40351"),
                n.e("72712"),
                n.e("76279"),
                n.e("45309"),
                n.e("43430"),
                n.e("48570"),
                n.e("5851"),
                n.e("2808"),
                n.e("50348"),
                n.e("97270"),
                n.e("93103"),
                n.e("34552"),
                n.e("32191"),
                n.e("71210"),
                n.e("88342"),
                n.e("71273"),
                n.e("89421"),
                n.e("98965"),
                n.e("54625"),
                n.e("71133"),
                n.e("37977"),
                n.e("28662"),
                n.e("43780"),
                n.e("61268"),
                n.e("80854"),
                n.e("35395"),
                n.e("35313"),
                n.e("76428"),
                n.e("8362"),
                n.e("27773"),
                n.e("52229"),
                n.e("18024"),
                n.e("22261"),
                n.e("78195"),
                n.e("41701"),
                n.e("74021"),
                n.e("83518"),
                n.e("37065"),
                n.e("22094"),
                n.e("61764"),
                n.e("15086"),
                n.e("68974"),
                n.e("56385"),
                n.e("91220"),
                n.e("11584"),
                n.e("35621"),
            ]).then(n.bind(n, 854379)),
        webpackId: 854379,
        renderLoader: () => (0, i.jsx)("div", { className: D.R4, style: v, children: (0, i.jsx)(C.y, {}) }),
    }),
    M = { height: L.$V },
    P = r.memo(function (e) {
        let { positionTargetRef: t, align: n, ...r } = e;
        return (0, i.jsx)("span", {
            style: L.sK,
            children: (0, i.jsx)(R.nE, {
                className: D.T8,
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
                        className: D.V6,
                        role: "dialog",
                        style: M,
                        "aria-label": y.intl.string(y.t["3CNGLK"]),
                        children: t && (0, i.jsx)(b, { ...r }),
                    });
                },
            }),
        });
    });
var U = n(861382),
    w = n(435558),
    G = n.n(w),
    x = n(537652),
    k = n(155718),
    F = n(95561),
    V = n(659280),
    B = n(579940),
    H = n(962125),
    j = n(915089),
    W = n(850992),
    Y = n(887695),
    K = n(286509),
    $ = n(721768),
    z = n(842209),
    q = n(210978),
    Z = n(392054),
    X = n(168186),
    Q = n(866665),
    J = n(939249),
    ee = n(802019),
    et = n(649671),
    en = n(913838);
let ei = [16, 8, 8, 8];
function er(e) {
    let {
            className: t,
            channel: n,
            sections: a,
            activeCategoryIndex: l,
            filteredSectionId: o,
            onSectionClick: d,
            applicationCommandListRef: c,
        } = e,
        u = r.useRef(null),
        _ = r.useCallback(
            (e, t) => {
                let n = 8;
                return a[t + 1]?.type === Z.Hf.BUILT_IN && (n += 8), 32 + n;
            },
            [a],
        ),
        E = r.useCallback((e, t) => (t ? 8 * (a[e + 1]?.type !== Z.Hf.BUILT_IN) : 8 * (0 !== e)), [a]),
        A = r.useCallback(
            (e, t) => {
                let r = a[t];
                if (null == r) return;
                let s = (0, et.Rg)(r),
                    c = 4 * (r.type === Z.Hf.BUILT_IN),
                    u = 32 - 2 * c,
                    _ = (0, i.jsx)(s, {
                        channel: n,
                        section: r,
                        isSelected: null != o ? r.id === o : l === t,
                        padding: c,
                        width: u,
                        height: u,
                        selectable: !0,
                    }),
                    E = r.type !== Z.Hf.BUILT_IN && t < a.length - 1 && a[t + 1].type === Z.Hf.BUILT_IN;
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
                                        d(r);
                                    },
                                    children: _,
                                }),
                            }),
                            E ? (0, i.jsx)("hr", { className: en.zQ }) : null,
                        ],
                    },
                    r.id,
                );
            },
            [l, n, d, a, o],
        );
    return 0 === a.length
        ? null
        : (0, i.jsx)("div", {
              className: s()(t, en.iE),
              children: (0, i.jsx)(ee.A, {
                  categoryListRef: u,
                  expressionsListRef: c,
                  store: W.LS,
                  categories: a,
                  className: en.p_,
                  renderCategoryListItem: A,
                  rowCount: a.length,
                  categoryHeight: _,
                  listPadding: ei,
                  getScrollOffsetForIndex: E,
              }),
          });
}
var ea = n(524007),
    es = n(73510),
    el = n(652215),
    eo = n(785945),
    ed = n(911385);
let ec = [8, 8, 0, 8],
    eu = G().debounce(() => {
        (0, F.zV)(el.HAw.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300),
    e_ = r.forwardRef(function (e, t) {
        let { channel: n, canOnlyUseTextCommands: a } = e,
            l = r.useRef(!1),
            o = r.useRef(0),
            [d, c] = r.useState(0),
            u = r.useRef(null),
            [_, E] = r.useState(!1),
            A = W.LS.useStore((e) => e.activeCategoryIndex);
        r.useEffect(() => {
            (0, F.zV)(el.HAw.APPLICATION_COMMAND_BROWSER_OPENED);
        }, []);
        let {
                sectionDescriptors: h,
                activeSections: I,
                commandsByActiveSection: f,
                hasMoreAfter: p,
                commands: T,
                filteredSectionId: m,
                scrollDown: g,
                filterSection: S,
            } = z.cu({
                context: { channel: n, type: "channel" },
                filters: {
                    commandTypes: [k.kc.CHAT],
                    builtIns: a ? q.n.ONLY_TEXT : q.n.ALLOW,
                    applicationCommands: !a,
                },
                options: { placeholderCount: 7, limit: es.Hi, includeFrecency: !0 },
                allowFetch: !0,
            }),
            N = (0, Y.Fk)({
                activeCategoryIndex: A,
                isScrolling: l,
                listRef: u,
                onActiveCategoryIndexChange: (e) => {
                    let t = I[e];
                    if (null != t) {
                        let e = h.findIndex((e) => e.id === t.id);
                        W.LS.setActiveCategoryIndex(e);
                    }
                },
                scrollOffset: 20,
                searchQuery: "",
            });
        function C(e) {
            let t = I.length,
                n = f.reduce((e, t) => e + t.data.length, 0) - 7 * !!p;
            p && e + 420 > 48 * t + 56 * n - 512 && g(), N(e), eu(), (o.current = e);
        }
        let O = r.useRef(C);
        r.useEffect(() => {
            O.current = C;
        }),
            r.useEffect(() => {
                O.current(o.current);
            }, [T]);
        let R = r.useCallback((e) => (e !== I.length - 1 || p ? 16 : 0), [I.length, p]),
            L = f.map((e) => e.data.length);
        r.useEffect(() => {
            null != u.current && _ && null != d && u.current.scrollRowIntoView(d);
        }, [_, d]),
            r.useLayoutEffect(() => {
                null != m && u.current?.scrollToSectionTop(0);
            }, [T, m]);
        let D = r.useCallback(
                (e) => {
                    e.id === m || e.id === es.Ik.FRECENCY ? (S(null), u.current?.scrollToSectionTop(0)) : S(e.id);
                },
                [S, m],
            ),
            v = r.useCallback(
                (e, t, i) => {
                    $.Gf({ channelId: n.id, command: e, section: t, location: Z.Oh.DISCOVERY, triggerSection: i });
                },
                [n.id],
            );
        r.useImperativeHandle(
            t,
            () => ({
                onTabOrEnter: (e) => {
                    if (null == d) return !e && (c(0), !0);
                    if (null == d) return !1;
                    let t = 0,
                        n = 0;
                    for (let e of f)
                        if (((t = n), d < (n += e.data.length))) {
                            let n = e.data[d - t],
                                i = h.find((e) => e.id === n.applicationId);
                            v(n, i, (0, X.$S)(e.section));
                            break;
                        }
                    return !0;
                },
                onMoveSelection: (e) => {
                    if (0 === T.length) return !0;
                    let t = 7 * !!p,
                        n = T.length + t,
                        i = null == d ? 0 : d + e;
                    return i >= n ? (i = n - 1) : i < 0 && (i = 0), c(i), E(!0), !0;
                },
            }),
            [T.length, f, p, h, v, d],
        );
        let b = r.useCallback(
                (e) => {
                    let t = I[e];
                    if (null == t) return null;
                    let r = (0, et.Rg)(t),
                        a = (0, i.jsx)(r, { channel: n, section: t, width: 16, height: 16, padding: 0 });
                    return (0, i.jsx)(K.A, { className: eo.Km, icon: a, children: t.name }, e);
                },
                [n, I],
            ),
            M = r.useCallback(
                (e, t) => {
                    let n = e === I.length - 1,
                        r = I[e],
                        { data: a } = f[e];
                    return (0, i.jsxs)(
                        "ul",
                        {
                            role: "group",
                            "aria-label": r.name,
                            className: s()(eo.Wy, { [eo.YD]: n }),
                            children: [
                                t,
                                0 === a.length &&
                                    (0, i.jsx)(x.A, {
                                        message: y.intl.format(y.t.WoQXT6, { applicationName: r.name }),
                                        noResultsImageURL: ed,
                                        className: eo.qK,
                                    }),
                            ],
                        },
                        e,
                    );
                },
                [I, f],
            ),
            P = r.useCallback(
                (e, t) => {
                    let r = f[t.sectionIndex],
                        a = r.data[t.sectionRowIndex],
                        s = `${r.section.id}:${a?.id ?? e}`;
                    if (
                        null == a ||
                        (r.section.id !== a.applicationId && r.section.id !== es.Ik.FRECENCY) ||
                        a.inputType === Z.y$.PLACEHOLDER
                    )
                        return (0, i.jsx)(ea.A, {}, s);
                    let l = h.find((e) => e.id === a.applicationId);
                    return (0, i.jsx)(
                        V.Ay.NewCommand,
                        {
                            index: e,
                            command: a,
                            channel: n,
                            className: eo.D5,
                            selected: d === e,
                            showImage: r.section.id !== a.applicationId,
                            section: l,
                            onClick: () => v(a, l, (0, X.$S)(r.section)),
                            onHover: () => {
                                c(null), E(!1);
                            },
                        },
                        s,
                    );
                },
                [n, f, v, h, d],
            ),
            U = (0, j.GV)();
        return (
            (0, B.gf)(U, !0, (0, V.aI)(d)),
            r.useEffect(
                () => () => {
                    (0, B.nQ)();
                },
                [],
            ),
            (0, i.jsxs)(V.Ay, {
                id: U,
                className: eo.x9,
                innerClassName: eo.iE,
                onMouseDown: eE,
                children: [
                    (0, i.jsx)(er, {
                        className: eo.H$,
                        channel: n,
                        sections: h,
                        filteredSectionId: m,
                        activeCategoryIndex: A,
                        onSectionClick: D,
                        applicationCommandListRef: u,
                    }),
                    (0, i.jsx)(H.A, {
                        role: "listbox",
                        className: eo.p_,
                        listPadding: ec,
                        onScroll: C,
                        renderRow: P,
                        renderSection: M,
                        renderSectionHeader: b,
                        rowCount: I.length,
                        rowCountBySection: L,
                        rowHeight: 56,
                        sectionHeaderHeight: 32,
                        sectionMarginBottom: R,
                        ref: u,
                        stickyHeaders: !0,
                    }),
                ],
            })
        );
    });
function eE(e) {
    e.preventDefault();
}
var eA = n(702841),
    eh = n(305070),
    eI = n(31498),
    ef = n(598071),
    ep = n(151271),
    eT = n(731231),
    em = n(256265),
    eg = n(857071),
    eS = n(135621),
    eN = n(105330),
    eC = n(280450),
    eO = n(559908),
    eR = n(620141),
    eL = n(224964),
    ey = n(31408),
    eD = n(536283);
function ev(e) {
    let { editorHeight: t, textValue: n, channelId: i } = e,
        a = r.useRef(n),
        s = (0, eN.l)({ editorHeight: t }),
        l = (0, eL.A)(),
        o = (0, E.bG)([eO.Ay, eC.default], () => eO.Ay.isComboing(eC.default.getId(), i)),
        d = s?.left ?? 0,
        c = (s?.top ?? 0) - 16,
        u = 0 === n.length,
        _ = r.useMemo(() => 0.05 > Math.random(), [u]);
    return (
        r.useEffect(() => {
            0 !== n.length && n !== a.current && o && (l.fire(d, c, _ ? { sprite: eD.dR } : null), (a.current = n));
        }, [n, o, d, c, _, l]),
        null
    );
}
function eb(e) {
    return (0, i.jsx)(eR.A, { confettiLocation: ey.k.CHAT_INPUT, children: (0, i.jsx)(ev, { ...e }) });
}
var eM = n(931664),
    eP = n(631576),
    eU = n(68935),
    ew = n(406704),
    eG = n(885386),
    ex = n(951260),
    ek = n(696451),
    eF = n(576705),
    eV = n(309010),
    eB = n(638128),
    eH = n(522602),
    ej = n(287809),
    eW = n(821102),
    eY = n(174459),
    eK = n(234320),
    e$ = n(625494),
    ez = n(488926),
    eq = n(723702),
    eZ = n(486319),
    eX = n(355622),
    eQ = n(392553),
    eJ = n(834730),
    e0 = n(140735),
    e1 = n(176781),
    e2 = n(463930),
    e3 = n(935063),
    e6 = n(73392),
    e4 = n(650019),
    e5 = n(763754),
    e7 = n(967144),
    e8 = n(118517),
    e9 = n(976860),
    te = n(747926),
    tt = n(232835),
    tn = n(285796),
    ti = n(773848);
function tr(e) {
    let { onClick: t, "aria-label": n } = e;
    return (0, i.jsx)(J.D, {
        className: ti.b,
        onClick: t,
        "aria-label": n,
        children: (0, i.jsx)(tn.a, { size: "md", color: "currentColor", className: ti.u }),
    });
}
var ta = n(133972);
let ts = "channel-reply-bar-a11y-description";
function tl(e) {
    let { channel: t, message: n, replyChainLength: a } = e,
        s = r.useRef(a);
    return (
        r.useEffect(() => {
            s.current = a;
        }),
        r.useEffect(() => {
            (0, F.zV)(el.HAw.THREAD_NUDGE_SHOWN, {
                type: "Reply Chain (3)",
                reply_chain_length: s.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t]),
        (0, i.jsxs)(J.D, {
            onClick: function () {
                (0, e8.Jx)(t.id), (0, te.Tv)(t, n, "Reply Chain Nudge");
            },
            className: ta._r,
            focusProps: { offset: { right: -4, left: -4 } },
            children: [
                (0, i.jsx)(eJ.E, {
                    color: "text-default",
                    className: ta.Qq,
                    variant: "text-sm/normal",
                    children: y.intl.format(y.t.B3V0FM, { count: Math.min(10, a + 1) }),
                }),
                (0, i.jsx)(eJ.E, {
                    color: "text-link",
                    className: ta.NG,
                    variant: "text-sm/semibold",
                    children: y.intl.string(y.t.rBIGBL),
                }),
            ],
        })
    );
}
function to(e) {
    let t,
        n,
        { reply: a, chatInputType: l } = e,
        { channel: o, message: d, shouldMention: c, showMentionToggle: u, mediaMention: _ } = a,
        {
            guildId: A,
            nick: h,
            colorString: I,
            colorStrings: f,
            colorRoleName: p,
            authorId: T,
            displayNameStyles: m,
        } = (0, e5.Ay)(d),
        g = (0, e7.gn)(A, T, f),
        S = (0, e6.a)({ displayNameStyles: m }),
        N = (0, e4.A)(_, d.attachments),
        C =
            ((t = o.id),
            (n = d.id),
            (0, E.bG)([tt.A], () => {
                let e = n;
                for (let n = 0; n < 10; n++) {
                    let i = tt.A.getMessage(t, e);
                    if (i?.type !== el.lAJ.REPLY || null == i.messageReference) return n;
                    e = i.messageReference.message_id;
                }
                return 10;
            }, [t, n])),
        O = (0, ew.n)(o, d),
        R = l.showThreadPromptOnReply && C >= 2 && O;
    return (0, i.jsx)("div", {
        className: ta.e1,
        children: (0, i.jsxs)("div", {
            className: ta.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: ta.eU,
                    children: [
                        (0, i.jsx)(e0.A, { id: ts, children: y.intl.formatToPlainString(y.t.EpJL4E, { username: h }) }),
                        (0, i.jsx)(J.D, {
                            onClick: function () {
                                return (0, e9.pX)(el.BVt.CHANNEL(o.getGuildId(), o.id, d.id));
                            },
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, i.jsx)(eJ.E, {
                                color: "text-default",
                                className: s()(ta.Qq, ta.Fn),
                                variant: "text-sm/normal",
                                children: y.intl.format(y.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, i.jsxs)(
                                            r.Fragment,
                                            {
                                                children: [
                                                    "\xa0",
                                                    N?.title != null
                                                        ? (0, i.jsxs)("span", {
                                                              className: ta.H8,
                                                              children: [
                                                                  N.isClip &&
                                                                      (0, i.jsx)(e1.x, {
                                                                          size: "xs",
                                                                          color: "currentColor",
                                                                          className: ta.gS,
                                                                      }),
                                                                  (0, i.jsx)(eJ.E, {
                                                                      variant: "text-sm/semibold",
                                                                      color: "text-default",
                                                                      className: ta.NV,
                                                                      children: N.title,
                                                                  }),
                                                                  (0, i.jsxs)(eJ.E, {
                                                                      variant: "text-sm/normal",
                                                                      color: "text-link",
                                                                      children: ["@", N.timestamp],
                                                                  }),
                                                              ],
                                                          })
                                                        : (0, i.jsx)(e2.g, {
                                                              className: ta.UU,
                                                              name: h,
                                                              colorString: I,
                                                              colorStrings: g,
                                                              roleName: p,
                                                              displayNameStylesFont: S,
                                                          }),
                                                ],
                                            },
                                            t,
                                        ),
                                }),
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: ta.o1,
                            children: [
                                u &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(Q.m, {
                                                asContainer: !0,
                                                text: c ? y.intl.string(y.t.DH2o6R) : y.intl.string(y.t.utGGIY),
                                                children: (0, i.jsx)(J.D, {
                                                    role: "switch",
                                                    "aria-checked": c,
                                                    onClick: function (e) {
                                                        e.stopPropagation(), (0, e8.vz)(o.id, !c);
                                                    },
                                                    children: (0, i.jsxs)(eJ.E, {
                                                        variant: "text-sm/bold",
                                                        color: c ? "text-link" : "text-muted",
                                                        className: ta.Z4,
                                                        children: [
                                                            (0, i.jsx)(e3.X, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": y.intl.string(y.t.P8tvKG),
                                                                className: ta.mM,
                                                            }),
                                                            c ? y.intl.string(y.t.p9jC2r) : y.intl.string(y.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, i.jsx)("div", { className: ta.me, "aria-hidden": !0 }),
                                        ],
                                    }),
                                (0, i.jsx)(tr, {
                                    onClick: function (e) {
                                        e.stopPropagation(), (0, e8.Jx)(o.id);
                                    },
                                    "aria-label": y.intl.string(y.t.jSnJGT),
                                }),
                            ],
                        }),
                    ],
                }),
                R && (0, i.jsx)(tl, { channel: o, message: d, replyChainLength: C }),
            ],
        }),
    });
}
var td = n(749314),
    tc = n(148355),
    tu = n(274107);
let t_ = r.memo(function (e) {
    let { channelId: t, chatInputType: n } = e,
        [a, s] = r.useState(null),
        l = (0, E.bG)([eM.A], () => eM.A.getStickerPreview(t, n.drafts.type));
    return n.stickers?.allowSending && null != l && 0 !== l.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("div", {
                      className: tu.Tz,
                      children: l.map((e) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: tu.dp,
                                  children: [
                                      (0, i.jsx)(J.D, {
                                          onFocus: () => s(e.id),
                                          onBlur: () => s(null),
                                          className: tu.b,
                                          "aria-label": y.intl.formatToPlainString(y.t.BGAQRd, { name: e.name }),
                                          onClick: () => (0, eP.x5)(t, n.drafts.type),
                                          children: (0, i.jsx)("div", {
                                              className: tu.Nk,
                                              children: (0, i.jsx)(tn.a, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: tu.ut,
                                              }),
                                          }),
                                      }),
                                      (0, i.jsx)(tc.A, {
                                          isInteracting: a === e.id,
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
                  (0, i.jsx)(td.A, { className: tu.R }),
              ],
          })
        : null;
});
var tE = n(612394);
n(321073);
var tA = n(442433);
n(827669);
var th = n(514294);
function tI(e) {
    let t,
        a,
        l,
        { className: o, activeCommand: d, activeOption: c, optionStates: u, channelId: _ } = e,
        E = r.useCallback(
            (e) => {
                let t = d?.rootCommand?.id;
                null == t
                    ? e.preventDefault()
                    : (0, tA.L3)(e, async () => {
                          let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                          return (n) => (0, i.jsx)(e, { ...n, id: t, label: y.intl.string(y.t.oJ1Muw) });
                      });
            },
            [d?.rootCommand?.id],
        ),
        A = r.useCallback(() => {
            $.Gf({ channelId: _, command: null, section: null });
        }, [_]);
    if (null == d) return null;
    if (null != c) {
        let e = u[c.name].lastValidationResult;
        (t = c.displayName), (a = c.displayDescription), (l = e?.success ? null : e?.error);
    } else (t = `/${d.displayName}`), (a = d.displayDescription), (l = null);
    return (0, i.jsxs)("div", {
        className: s()(o, th.M0),
        onContextMenu: E,
        children: [
            (0, i.jsxs)("div", {
                className: th.iz,
                children: [
                    (0, i.jsx)(eJ.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        tag: "span",
                        children: t,
                    }),
                    null != l
                        ? (0, i.jsx)("span", { className: th.z3, children: l })
                        : (0, i.jsx)("span", { className: th.h_, children: a }),
                ],
            }),
            (0, i.jsx)("div", {
                className: th.o1,
                children: (0, i.jsx)(tr, { onClick: A, "aria-label": y.intl.string(y.t.cpT0Cq) }),
            }),
        ],
    });
}
var tf = n(228366),
    tp = n(734057);
let tT = new Set();
class tm extends E.Ay.PersistedStore {
    static displayName = "PTOStore";
    static persistKey = "PTOStore";
    initialize(e) {
        this.waitFor(tp.A, ek.Ay, eV.Ay, ej.default), null != e && (tT = new Set(e));
    }
    hasId(e) {
        return tT.has(e);
    }
    getState() {
        return [...tT];
    }
}
let tg = new tm(tf.h, {});
function tS() {
    let e = eV.Ay.getChannelId();
    if (null == e) return;
    let t = tp.A.getChannel(e);
    null != t && t.isPrivate() && (tT.has(t.getRecipientId()) || (tT.add(t.getRecipientId()), tg.emitChange()));
}
function tN() {
    return (0, i.jsxs)("div", {
        className: ta.eU,
        children: [
            (0, i.jsx)(eJ.E, {
                variant: "text-sm/medium",
                className: s()(ta.Qq, ta.Fn),
                children: y.intl.string(y.t["2UvR1E"]),
            }),
            (0, i.jsx)("div", {
                className: ta.o1,
                children: (0, i.jsx)(tr, { onClick: tS, "aria-label": y.intl.string(y.t.cpT0Cq) }),
            }),
        ],
    });
}
var tC = n(9175);
function tO(e) {
    let { error: t } = e;
    return (0, i.jsxs)("div", {
        className: tC.M,
        children: [
            (0, i.jsx)(eJ.E, { variant: "text-xs/bold", color: "text-strong", children: y.intl.string(y.t["4VDCG0"]) }),
            t
                ? (0, i.jsx)(eJ.E, { variant: "text-xs/medium", className: tC.z, children: y.intl.string(y.t.qNorwt) })
                : (0, i.jsx)(eJ.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: y.intl.string(y.t["260qZS"]),
                  }),
        ],
    });
}
var tR = n(25201),
    tL = n(926321),
    ty = n(356693);
function tD(e) {
    var t, n;
    let { channelId: r } = e,
        a = (0, tR.vR)(r);
    if (null == a) return null;
    let l = a.rolling,
        o =
            ((t = l),
            (n = a.results),
            t
                ? y.intl.string(y.t["x/FIRX"])
                : null == n
                  ? ""
                  : y.intl.formatToPlainString(y.t.xU4pF1, { total: n.reduce((e, t) => e + t, 0) }));
    return (0, i.jsx)("div", {
        className: s()(ty.kL, { [ty.Kd]: !a.dismissing }),
        children: (0, i.jsxs)("div", {
            className: ty.Qs,
            children: [
                (0, i.jsx)(tL.j, { size: "md", className: s()({ [ty.su]: l }) }),
                (0, i.jsx)(eJ.E, { color: "text-default", variant: "text-sm/normal", children: o }),
            ],
        }),
    });
}
var tv = n(575293),
    tb = n(151282),
    tM = n(365844);
function tP(e) {
    let { pendingScheduledMessage: t } = e,
        { channelId: n, scheduledTimestamp: r } = t;
    return (0, i.jsx)("div", {
        className: tM.e1,
        children: (0, i.jsx)("div", {
            className: tM.kL,
            children: (0, i.jsxs)("div", {
                className: tM.g3,
                children: [
                    (0, i.jsx)(eJ.E, {
                        color: "text-default",
                        className: s()(tM.Qq, tM.a3),
                        variant: "text-sm/normal",
                        children: y.intl.formatToPlainString(y.t["MQcRX/"], { timestamp: new Date(r).valueOf() }),
                    }),
                    (0, i.jsx)("div", {
                        className: tM.o1,
                        children: (0, i.jsx)(tr, {
                            onClick: function (e) {
                                e.stopPropagation(), (0, tb.Ps)(n);
                            },
                            "aria-label": y.intl.string(y.t.cpT0Cq),
                        }),
                    }),
                ],
            }),
        }),
    });
}
var tU = n(857983);
function tw(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, i.jsx)("div", { children: e }, t)),
        a = t.floating.map((e, t) => (0, i.jsx)(r.Fragment, { children: e }, t));
    return 0 === n.length && 0 === a.length
        ? null
        : (0, i.jsxs)(r.Fragment, {
              children: [
                  a.length > 0 && (0, i.jsx)("div", { className: tU.Vq, children: a }),
                  n.length > 0 && (0, i.jsx)("div", { className: tU.MD, children: n }),
              ],
          });
}
var tG = n(123583),
    tx = n(562708),
    tk = n(150934),
    tF = n(139286),
    tV = n(47167),
    tB = n(713654),
    tH = n(252263),
    tj = n(8455),
    tW = n(67259),
    tY = n(239917);
function tK(e) {
    let { thread: t, pendingScheduledMessage: n } = e,
        a = (0, tj.Vp)({ location: "ThreadsAlsoSendToChannelArea" }),
        [s, l] = (0, E.yK)([tp.A, tW.A], () => [
            t.isThread() ? tp.A.getChannel(t.parent_id) : null,
            tW.A.getAlsoSendToChannel(t.id),
        ]),
        o = (0, tV.Ay)(s),
        d = r.useCallback(
            (e) => {
                eY.default.track(el.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_TOGGLED, {
                    value: e,
                    guild_id: t.guild_id,
                    channel_id: t.id,
                }),
                    (0, tH.B)({ channelId: t.id, enabled: e });
            },
            [t],
        );
    if (
        ((0, tF.A)(
            { name: tx.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL, type: tx.ImpressionTypes.VIEW },
            { disableTrack: null == s || !a.enabled },
            [s, a.enabled],
        ),
        !a.enabled || null == s)
    )
        return null;
    let c = (0, tB.gU)(s),
        u = y.intl.format(y.t.UqL10G, {
            callToActionHook: (e, t) =>
                (0, i.jsx)(
                    eJ.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: tY.Pf,
                        children: y.intl.string(y.t.Pi3JW7),
                    },
                    t,
                ),
            channelName: o,
            channelNameHook: (e, t) =>
                (0, i.jsxs)(
                    eJ.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: tY.Pf,
                        children: [null == c ? null : (0, i.jsx)(c, { color: "currentColor", className: tY.Kk }, t), e],
                    },
                    t,
                ),
        });
    return (0, i.jsx)("div", {
        className: tY.kL,
        children: (0, i.jsx)(tk.S, { checked: l, disabled: null != n, onChange: d, label: u, labelType: "secondary" }),
    });
}
function t$(e) {
    let { channel: t, type: n, pendingScheduledMessage: r } = e,
        { shouldShow: a } = (function (e) {
            let { channel: t, type: n } = e,
                i = (0, E.bG)([tp.A], () => {
                    let e = tp.A.getChannel(t.parent_id);
                    return e?.isForumLikeChannel() ?? !1;
                }),
                r = [eX.oU.NORMAL, eX.oU.SIDEBAR].includes(n);
            return { shouldShow: t.isThread() && !i && r };
        })({ channel: t, type: n });
    return a ? (0, i.jsx)(tK, { thread: t, pendingScheduledMessage: r }) : null;
}
var tz = n(822610),
    tq = n(625928),
    tZ = n(135261),
    tX = n(820066),
    tQ = n(922016),
    tJ = n(375499),
    t0 = n(267889),
    t1 = n(307731),
    t2 = n(849918);
function t3(e) {
    let { getSlateEditor: t, onInsertEmoji: n, type: a, channel: s } = e,
        l = t(),
        o = r.useRef(null);
    return null == l
        ? null
        : (0, i.jsxs)("div", {
              id: "slate-toolbar",
              className: t2.aL,
              children: [
                  (0, i.jsx)("div", {
                      className: t2.Wy,
                      children: (0, i.jsx)(tZ.P, {
                          slateEditor: l,
                          options: a.markdown,
                          iconClassName: t2.C7,
                          dividerClassName: t2.us,
                      }),
                  }),
                  (0, i.jsx)(tQ.Y, {
                      targetElementRef: o,
                      renderPopout: function (e) {
                          let { closePopout: t } = e;
                          return (0, i.jsx)(t0.A, {
                              persistSearch: !0,
                              channel: s,
                              closePopout: t,
                              onSelectEmoji: (e) => {
                                  let { emoji: i, willClose: r } = e;
                                  n({ emoji: i, willClose: r }), r && t();
                              },
                              pickerIntention:
                                  a.expressionPicker?.emojiIntention ?? t1.EmojiIntention.COMMUNITY_CONTENT,
                          });
                      },
                      position: "bottom",
                      animation: tQ.Y.Animation.NONE,
                      align: "left",
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, i.jsx)(tJ.A, { ...e, ref: o, active: n, className: t2.Z8, tabIndex: 0 });
                      },
                  }),
              ],
          });
}
var t6 = n(263582),
    t4 = n(698279);
function t5(e, t, a, s, l) {
    let [o, d] = r.useState(!1),
        c = r.useCallback(
            (r, u, _, E, h, I) => {
                if (o) return;
                d(!0);
                let p = eM.A.getStickerPreview(l, t.drafts.type)?.map((e) => e.id) ?? [],
                    T = eH.A.getUploads(l, t.drafts.type) ?? [];
                if (null == u && !E && !h && (0, em.xz)(T, l)) {
                    d(!1),
                        (0, A.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("76739"),
                                n.e("70401"),
                                n.e("54540"),
                                n.e("99998"),
                                n.e("47352"),
                                n.e("69977"),
                                n.e("1248"),
                                n.e("94149"),
                                n.e("58921"),
                                n.e("78250"),
                                n.e("64488"),
                                n.e("41838"),
                                n.e("44567"),
                                n.e("49681"),
                                n.e("81647"),
                                n.e("76602"),
                                n.e("21921"),
                                n.e("40402"),
                                n.e("39970"),
                                n.e("72789"),
                                n.e("79049"),
                                n.e("31267"),
                                n.e("79745"),
                                n.e("76428"),
                                n.e("3332"),
                                n.e("18465"),
                                n.e("32209"),
                                n.e("79630"),
                                n.e("58337"),
                                n.e("68763"),
                                n.e("77487"),
                                n.e("47177"),
                                n.e("26437"),
                                n.e("24922"),
                                n.e("35684"),
                                n.e("54030"),
                                n.e("36150"),
                                n.e("99011"),
                                n.e("33097"),
                                n.e("15172"),
                                n.e("10014"),
                                n.e("50200"),
                                n.e("86155"),
                                n.e("86861"),
                                n.e("70961"),
                                n.e("23685"),
                                n.e("42516"),
                                n.e("84688"),
                            ]).then(n.bind(n, 538899));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    threadId: l,
                                    attachments: T,
                                    sendMessage: () => c(r, void 0, void 0, void 0, !0),
                                });
                        });
                    return;
                }
                e({
                    value: r,
                    uploads: T,
                    stickers: p,
                    command: u,
                    commandOptionValues: _,
                    isGif: E,
                    gifMetadata: I,
                }).then((e) => {
                    let { shouldClear: n, shouldRefocus: i } = e,
                        r = (n && t.submit?.clearOnSubmit) ?? !1,
                        o = null != a.current;
                    r &&
                        (l !== eV.Ay.getChannelId()
                            ? f.A.saveDraft(l, "", t.drafts.type)
                            : o && (a.current?.clearValue(), s.current?.hide())),
                        o && (d(!1), (0, ep.v8)(), i && a.current?.focus());
                });
            },
            [a, s, e, o, t, l],
        );
    return {
        submitting: o,
        submit: c,
        handleSubmit: r.useCallback(
            (e) => {
                a?.current?.submit(e);
            },
            [a],
        ),
    };
}
function t7(e, t, n) {
    return r.useCallback(
        (i) => {
            if (t === eX.oU.CREATE_FORUM_POST || t === eX.oU.CREATE_ANNOUNCEMENT_POST) n.current?.insertGIF(i);
            else {
                let t = {
                    gif_provider: i.provider ?? "klipy",
                    load_id: eW.A.getAnalyticsID(),
                    source_object: "GIF Picker",
                    gif_url: i.url,
                    gif_id: i.id,
                };
                e(i.url, void 0, void 0, !0, void 0, t);
            }
            (0, ep.v8)(), n.current?.focus();
        },
        [n, e, t],
    );
}
function t8(e) {
    return r.useCallback(
        (t) => {
            let { emoji: n, willClose: i } = t,
                r = e.current;
            null != n && null != r && r.insertEmoji({ emoji: n, willClose: i }), i && (0, ep.v8)();
        },
        [e],
    );
}
function t9(e) {
    let { editorRef: t, disabled: n, textValue: i, channelId: a, chatInputType: s, submit: l } = e,
        { analyticsLocations: o } = (0, g.Ay)();
    return r.useCallback(
        (e, r) => {
            n ||
                (s === eX.oU.CREATE_ANNOUNCEMENT_POST || (0, eU.YS)(r, i, a, s.drafts.type)
                    ? ((0, tE.fh)({
                          sticker: e,
                          stickerSelectLocation: r,
                          isReplacement: null != eM.A.getStickerPreview(a, s.drafts.type),
                          analyticsLocations: o,
                      }),
                      (0, eP.$x)(a, e, s.drafts.type))
                    : (l({ value: "", uploads: void 0, stickers: [e.id] }), t.current?.clearValue()),
                (0, ep.v8)(),
                t.current?.focus());
        },
        [n, i, a, t, o, l, s],
    );
}
function ne(e) {
    return r.useCallback(
        (t) => {
            let n = e.current;
            null != n && n.insertKaomoji(t), (0, ep.v8)(), n?.focus();
        },
        [e],
    );
}
function nt(e, t, n) {
    let i = r.useCallback(() => {
            t || (0, ep.r$)(t4.kx.EMOJI, e, n);
        }, [t, e, n]),
        a = r.useCallback(() => {
            !t && e.gifs?.allowSending && (0, ep.r$)(t4.kx.GIF, e, n);
        }, [t, e, n]),
        s = r.useCallback(() => {
            !t && e.stickers?.allowSending && (0, ep.r$)(t4.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, eK.Vo)({ event: el.jej.TOGGLE_EMOJI_POPOUT, handler: i }),
        (0, eK.Vo)({ event: el.jej.TOGGLE_GIF_PICKER, handler: a }),
        (0, eK.Vo)({ event: el.jej.TOGGLE_STICKER_PICKER, handler: s });
}
function nn(e, t, n) {
    let [i] = r.useState(() => new l.EventEmitter());
    return (
        r.useEffect(() => {
            i.emit("text-changed", t, n);
        }, [t, n, i]),
        {
            eventEmitter: i,
            handleEditorSelectionChanged: function (t) {
                null != e.current && i.emit("selection-changed", t);
            },
        }
    );
}
function ni() {
    let e = r.useRef(null),
        t = r.useCallback(() => {
            e.current?.onMaybeShowAutocomplete();
        }, []),
        n = r.useCallback(() => {
            e.current?.onHideAutocomplete();
        }, []);
    return { autocompleteRef: e, handleMaybeShowAutocomplete: t, handleHideAutocomplete: n };
}
function nr(e) {
    let t = r.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
}
function na(e) {
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
function ns(e, t, n, i) {
    let r = e.getGuildId(),
        a = (0, E.bG)([eg.A], () => null != r && eg.A.isLurking(r), [r]),
        s = (0, E.bG)([ek.Ay, ej.default], () => {
            let e = ej.default.getCurrentUser();
            return (null != r && null != e ? ek.Ay.getMember(r, e.id)?.isPending : null) ?? !1;
        }),
        l = (0, E.cf)([eF.A], () => {
            let r = e.isPrivate(),
                a = eF.A.computePermissions(e),
                l = _.zy(a, el.xBc.CREATE_PUBLIC_THREADS) || _.zy(a, el.xBc.CREATE_PRIVATE_THREADS),
                o =
                    (!t.permissions?.requireCreateTherads || l) &&
                    (!t.permissions?.requireSendMessages || _.zy(a, el.xBc.SEND_MESSAGES)),
                d = o && _.zy(a, el.xBc.ATTACH_FILES),
                c = null != n,
                u = (0, ew.UJ)(e);
            return {
                disabled: i || s || (!r && !o) || u,
                canAttachFiles: !0 === t.attachments && (r || s || d || c),
                canCreateThreads: l,
                canEveryoneSendMessages: ez.MJ(el.xBc.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, i, s]);
    return { isLurking: a, isPendingMember: s, ...l };
}
function nl(e, t, n) {
    let [i, a, s] = (0, ep.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], c.x),
        l = (0, E.bG)([N.A], () => N.A.shouldShowPopup() && N.A.activeViewType() === e && N.A.activeChannelId() === n);
    r.useEffect(
        () => () => {
            (0, ep.v8)(e, n);
        },
        [e, n],
    );
    let o = r.useCallback(() => {
            null != i || l || t.current?.handleOuterClick();
        }, [i, l, t]),
        d = null == i || null == a || a !== e || s !== n;
    return { expressionPickerView: i, shouldHideExpressionPicker: d, handleOuterClick: o };
}
function no(e, t) {
    return {
        handleAutocompleteVisibilityChange: r.useCallback(
            (n) => {
                n && (0, ep.v8)(e, t);
            },
            [e, t],
        ),
    };
}
let nd = r.memo(
    r.forwardRef(function (e, t) {
        let n,
            {
                textValue: a,
                richValue: l,
                className: o,
                innerClassName: c,
                editorClassName: _,
                id: A,
                required: f,
                disabled: C,
                placeholder: O,
                accessibilityLabel: R,
                channel: L,
                type: y,
                focused: D,
                error: v,
                renderAttachButton: b,
                renderApplicationCommandIcon: M,
                renderButtons: w,
                pendingReply: G,
                onChange: x,
                onResize: k,
                onBlur: F,
                onFocus: V,
                onKeyDown: B,
                onSubmit: H,
                promptToUpload: j,
                highlighted: W,
                canMentionRoles: Y,
                canMentionChannels: K,
                maxCharacterCount: $,
                showRemainingCharsAfterCount: z,
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
                pendingScheduledMessage: ea,
                showValueWhenDisabled: es = !1,
            } = e;
        d()(null != y, "chat input type must be set");
        let { analyticsLocations: eo } = (0, g.Ay)(m.A.CHANNEL_TEXT_AREA),
            ed = nr(t),
            ec = r.useRef(null),
            eu = r.useRef(null),
            eE = r.useRef(null),
            em = r.useRef(null),
            eg = r.useRef(null),
            eN = r.useCallback(() => eE.current?.getSlateEditor() ?? null, []);
        J?.(eE.current);
        let eC = (0, S.A)(L),
            eO = (0, ex.n)("ChannelTextAreaContainer"),
            eR = (0, E.cf)([T.Ay], () => ({
                expressionPickerFormat: T.Ay.expressionPickerFormat,
                condensePickerWhenNarrow: T.Ay.condensePickerWhenNarrow,
            })),
            eL = eO ? eR.expressionPickerFormat : T.IG.FLEXIBLE,
            ey = !eO || eR.condensePickerWhenNarrow,
            [eD, ev] = r.useState(!eC);
        (0, p.i4)(ed, (e) => {
            let { width: t } = e;
            return ev(!eC && (null == t || t > 450));
        });
        let eM = eL === T.IG.HIDDEN,
            eP = eL === T.IG.CONDENSED || (eL === T.IG.FLEXIBLE && ey && !eD),
            { activeCommand: eU, activeCommandSection: ew } = (0, E.cf)([U.A], () => ({
                activeCommand: y.commands?.enabled ? U.A.getActiveCommand(L.id) : null,
                activeCommandSection: y.commands?.enabled ? U.A.getActiveCommandSection(L.id) : null,
            })),
            {
                isLurking: eF,
                isPendingMember: eV,
                disabled: eH,
                canAttachFiles: eW,
                canCreateThreads: eK,
                canEveryoneSendMessages: ez,
            } = ns(L, y, eU, C),
            eJ = y.toolbarType === eX.O1.STATIC,
            e0 = !eG.D_.useSetting() && !(0, eq.isAndroidWeb)() && null != window.ResizeObserver,
            e1 = !e0 || !y.commands?.enabled || !D || "/" !== a,
            e2 = (0, eS.A)(),
            { fontSize: e3 } = (0, E.cf)([T.Ay], () => ({ fontSize: T.Ay.fontSize })),
            e6 = (0, E.bG)([eB.A], () => eB.A.isEnabled());
        nt(y, eH, L.id);
        let { eventEmitter: e4, handleEditorSelectionChanged: e5 } = nn(eE, a, l),
            e7 = r.useRef(a);
        e7.current = a;
        let e8 = r.useCallback(
                (e, t, n) => {
                    "/" === t && "" === e7.current && y.commands?.enabled && e4.emit("command-sentinel-typed"),
                        x?.(e, t, n);
                },
                [x, y.commands?.enabled, e4],
            ),
            { submitting: e9, submit: te, handleSubmit: tt } = t5(H, y, eE, eg, L.id),
            { autocompleteRef: tn, handleMaybeShowAutocomplete: ti, handleHideAutocomplete: tr } = ni(),
            ta = t7(te, y, eE),
            tl = t8(eE),
            td = t9({ editorRef: eE, disabled: eH, textValue: a, channelId: L.id, chatInputType: y, submit: H }),
            tc = r.useCallback(
                (e, t, n) => {
                    let i = eE.current;
                    null != e &&
                        null != i &&
                        (eY.default.track(el.HAw.SOUNDMOJI_SELECT, {
                            channel_id: L.id,
                            guild_id: L.guild_id,
                            sound_guild_id: e.guildId,
                            sound_id: e.soundId,
                            source: t,
                        }),
                        i.insertSound(e)),
                        n && (0, ep.v8)(),
                        i?.focus();
                },
                [eE, L.id, L.guild_id],
            ),
            tu = ne(eE),
            tE = r.useCallback(() => eg?.current?.hide(), []),
            { editorHeight: tA, handleResize: th } = na(k),
            {
                handleTab: tf,
                handleEnter: tp,
                handleMoveSelection: tm,
            } = ((n = r.useCallback(
                () => !!(!e1 && ec.current?.onTabOrEnter(!1)) || tn.current?.onTabOrEnter(!1) || !1,
                [e1, ec, tn],
            )),
            {
                handleTab: n,
                handleEnter: r.useCallback(
                    () => !!(!e1 && ec.current?.onTabOrEnter(!0)) || tn.current?.onTabOrEnter(!0) || !1,
                    [e1, ec, tn],
                ),
                handleMoveSelection: r.useCallback(
                    (e) => !!(!e1 && ec.current?.onMoveSelection(e)) || tn.current?.onMoveSelection(e) || !1,
                    [e1, ec, tn],
                ),
            }),
            { expressionPickerView: tS, shouldHideExpressionPicker: tC, handleOuterClick: tL } = nl(y, eE, L.id),
            { selectedAutocompleteInputType: ty, selectedAutocompleteInputError: tb } = (function (e, t) {
                let [n, i] = r.useState({ selectedAutocompleteInputType: null, selectedAutocompleteInputError: !1 }),
                    a = r.useCallback(() => {
                        let e,
                            n = t.current?.getSlateEditor();
                        null != n && (e = tX.VW.getSelectedParentOfType(n, eI.mk)?.[0]),
                            i({
                                selectedAutocompleteInputType: e?.type ?? null,
                                selectedAutocompleteInputError: e?.error ?? !1,
                            });
                    }, [t]);
                return (
                    r.useEffect(
                        () => (
                            e.on("selection-changed", a),
                            e.on("submit-failure", a),
                            a(),
                            () => {
                                e.off("selection-changed", a), e.on("submit-failure", a);
                            }
                        ),
                        [a, e],
                    ),
                    n
                );
            })(e4, eE),
            { handleAutocompleteVisibilityChange: tM } = no(y, L.id),
            tx = (function (e) {
                let { type: t, channelId: n } = e;
                return (0, eA.bG)([N.A], () => {
                    let e = N.A.activeViewType();
                    return null != e && e === t && N.A.activeChannelId() === n && N.A.shouldShowPopup();
                }, [t, n]);
            })({ type: y, channelId: L.id }),
            tk = r.useCallback(() => {
                e4.emit("submit-failure");
            }, [e4]);
        (0, eZ.R)(e4, L.guild_id, L.id);
        let tF = null != G,
            tV = (eH && !((eF || eV) && ez)) || (e9 && y.submit?.useDisabledStylesOnSubmit),
            tB = null;
        null != eU ? (tB = M?.(eU, ew, tU.g$)) : (!eH || eK) && (tB = b?.(tF, tU.g$));
        let { isVisible: tH, showsUpsell: tj } = (0, t6.A)({
                type: y,
                textValue: a,
                maxCharacterCount: $,
                showRemainingCharsAfterCount: z,
            }),
            tW = e0 && null != l && !eH && y.showCharacterCount && null == eU,
            tY = e0 && !__OVERLAY__ && null != l && null == eU && y.toolbarType !== eX.O1.NONE && !eH,
            tK = (function (e) {
                let {
                        channel: t,
                        type: n,
                        activeCommand: a,
                        pendingReply: s,
                        pendingScheduledMessage: l,
                        selectedAutocompleteInputType: o,
                        selectedAutocompleteInputError: d,
                    } = e,
                    { activeCommandOption: c, activeCommandOptionStates: u } = (0, E.cf)([U.A], () => ({
                        activeCommandOption: U.A.getActiveOption(t.id),
                        activeCommandOptionStates: U.A.getOptionStates(t.id),
                    })),
                    _ = (0, E.bG)([ek.Ay, ej.default, tg], () => {
                        let e = ej.default.getCurrentUser();
                        if (null == e || !e.isStaff() || !t.isDM()) return !1;
                        let n = ej.default.getUser(t.getRecipientId());
                        if (!n?.isStaff()) return !1;
                        let i = ek.Ay.getNicknames(n.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
                        return i ? !tg.hasId(n.id) && i : (tT.delete(n.id) && tg.emitChange(), !1);
                    }),
                    A = (0, tR.Ay)((e) => e.channelId === t.id);
                return r.useMemo(() => {
                    let e = [],
                        r = [];
                    return (
                        null != t.guild_id &&
                            n === eX.oU.NORMAL &&
                            r.push((0, i.jsx)(tv.A, { guildId: t.guild_id, channel: t, className: tU.UW })),
                        null != a &&
                            e.push(
                                (0, i.jsx)(tI, {
                                    activeCommand: a,
                                    activeOption: c ?? null,
                                    optionStates: u,
                                    channelId: t.id,
                                }),
                            ),
                        null != s && e.push((0, i.jsx)(to, { reply: s, chatInputType: n })),
                        _ && e.push((0, i.jsx)(tN, {})),
                        null != l && e.push((0, i.jsx)(tP, { pendingScheduledMessage: l })),
                        "timestampMentionInput" === o && r.push((0, i.jsx)(tO, { error: d ?? !1 })),
                        A && e.push((0, i.jsx)(tD, { channelId: t.id })),
                        { stacked: e, floating: r }
                    );
                }, [a, c, u, t, A, s, _, n, l, o, d]);
            })({
                channel: L,
                type: y,
                activeCommand: eU,
                pendingReply: G,
                pendingScheduledMessage: ea,
                selectedAutocompleteInputType: ty,
                selectedAutocompleteInputError: tb,
            }),
            tQ = 0 === a.trim().length,
            tJ = null != G ? [X, ts].filter(Boolean).join(" ") : X,
            t0 = y.layout === eX.wt.INLINE,
            t1 = y.layout === eX.wt.FLUSH,
            t2 = (0, i.jsx)("div", { ref: eu, className: tU.BW }),
            t4 = tx ? (0, i.jsx)(P, { align: "right", positionTargetRef: eu, channel: L }) : null,
            nd =
                null != w
                    ? w()
                    : (0, i.jsx)(tG.A, {
                          type: y,
                          disabled: eH,
                          channel: L,
                          handleSubmit: tt,
                          isEmpty: tQ,
                          showAllButtons: !eP && !eM,
                          expressionButtonsHidden: eM,
                      }),
            nc = tW
                ? (0, i.jsx)(tq.A, {
                      type: y,
                      textValue: a,
                      className: Z,
                      maxCharacterCount: $,
                      showRemainingCharsAfterCount: z,
                  })
                : null;
        return (
            r.useEffect(() => {
                D && e$._.dispatch(el.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: L.id });
            }, [D, L.id]),
            (0, i.jsx)(ef.Sv, {
                value: e4,
                children: (0, i.jsxs)(g.f5, {
                    value: eo,
                    children: [
                        tY && eJ
                            ? (0, i.jsx)(t3, { getSlateEditor: eN, onInsertEmoji: tl, type: y, channel: L })
                            : tY
                              ? (0, i.jsx)(tZ.A, { ref: eg, getSlateEditor: eN, containerRef: em, options: y.markdown })
                              : null,
                        (0, i.jsxs)("div", {
                            ref: ed,
                            className: s()(o, {
                                [tU.gM]: !0,
                                [tU.Bz]: tH && tW,
                                [tU.Qv]: tj && tW,
                                [tU.h9]: tV,
                                [tU.mr]: W,
                                [tU.Wn]: u.Fr,
                                [tU.Ls]: t0,
                                [tU.AH]: t1,
                                [tU.z3]: null != v,
                            }),
                            children: [
                                t0 || t1 ? null : (0, i.jsx)(tw, { bars: tK }),
                                (0, i.jsxs)("div", {
                                    ref: em,
                                    onScroll: tE,
                                    className: s()(c, { [tU.xx]: !0, [tU.k6]: !en, [tU.Ri]: tK.stacked.length > 0 }),
                                    children: [
                                        (0, i.jsx)(t_, { channelId: L.id, chatInputType: y }),
                                        y.hideAttachmentArea
                                            ? null
                                            : (0, i.jsx)(tz.A, { channelId: L.id, type: y, canAttachFiles: eW }),
                                        (0, i.jsxs)("div", {
                                            className: s()(tU.vW, {
                                                [tU.BF]: tV,
                                                [tU.RL]: y !== eX.oU.EDIT && (null != tB || (tV && null == tB) || eF),
                                                [tU.fk]: y === eX.oU.THREAD_CREATION,
                                                [tU.TZ]:
                                                    y === eX.oU.CREATE_FORUM_POST || y === eX.oU.FORWARD_MESSAGE_INPUT,
                                                [tU.$i]: y === eX.oU.USER_PROFILE_REPLY,
                                            }),
                                            onMouseDown: tL,
                                            children: [
                                                t4,
                                                tB,
                                                (0, i.jsx)(h.vN, {
                                                    ringTarget: ed,
                                                    ringClassName: tU.Rg,
                                                    children: (0, i.jsx)(eQ.A, {
                                                        ref: eE,
                                                        id: A,
                                                        focused: D,
                                                        useSlate: e0,
                                                        textValue: a,
                                                        richValue: l,
                                                        disabled: eH,
                                                        placeholder: O,
                                                        required: f,
                                                        accessibilityLabel: R,
                                                        isPreviewing: (eF || eV) && ez,
                                                        channel: L,
                                                        type: y,
                                                        canPasteFiles: eW,
                                                        uploadPromptCharacterCount: el.CS1,
                                                        maxCharacterCount: $ ?? e2,
                                                        allowNewLines: q,
                                                        "aria-describedby": tJ,
                                                        onChange: e8,
                                                        onResize: th,
                                                        onBlur: F,
                                                        onFocus: V,
                                                        onKeyDown: B,
                                                        onSubmit: te,
                                                        onSubmitFailure: tk,
                                                        onTab: tf,
                                                        onEnter: tp,
                                                        onMoveSelection: tm,
                                                        onSelectionChanged: e5,
                                                        onMaybeShowAutocomplete: ti,
                                                        onHideAutocomplete: tr,
                                                        promptToUpload: j,
                                                        fontSize: e3,
                                                        spellcheckEnabled: e6,
                                                        canOnlyUseTextCommands: tF,
                                                        className: s()(
                                                            {
                                                                [tU.QI]: y === eX.oU.THREAD_CREATION,
                                                                [tU.AV]: y === eX.oU.PROFILE_BIO_INPUT,
                                                                [tU.GR]: y === eX.oU.OVERLAY_INLINE_REPLY,
                                                            },
                                                            _,
                                                        ),
                                                        "aria-labelledby": Q,
                                                        showValueWhenDisabled: es,
                                                    }),
                                                }),
                                                nd,
                                                t2,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(t$, { channel: L, type: y, pendingScheduledMessage: ea }),
                                e1 ? null : (0, i.jsx)(e_, { ref: ec, channel: L, canOnlyUseTextCommands: tF }),
                                (0, i.jsx)(eh.A, {
                                    ref: tn,
                                    channel: L,
                                    canMentionRoles: Y,
                                    canMentionChannels: K,
                                    useNewSlashCommands: e0,
                                    canOnlyUseTextCommands: tF,
                                    canSendStickers: y.stickers?.allowSending,
                                    canSendSoundmoji: y.soundmoji?.allowSending,
                                    textValue: a,
                                    focused: D,
                                    expressionPickerView: tS,
                                    type: y,
                                    targetRef: ed,
                                    editorRef: eE,
                                    onSendMessage: te,
                                    onSendSticker: td,
                                    onVisibilityChange: tM,
                                    editorScrollerRef: em,
                                    editorHeight: tA,
                                    barsHeight: 40 * tK.floating.length,
                                    setValue: (e, t) => e8?.(null, e, t),
                                    position: ee,
                                }),
                                (0, i.jsx)(eb, { textValue: a, editorHeight: tA, channelId: L.id }),
                                nc,
                                et,
                            ],
                        }),
                        (0, i.jsx)(I.U, { error: v }),
                        tC
                            ? null
                            : (0, i.jsx)(eT.A, {
                                  positionTargetRef: ed,
                                  type: y,
                                  onSelectGIF: ta,
                                  onSelectEmoji: tl,
                                  onSelectSticker: td,
                                  onSelectSound: tc,
                                  onSelectKaomoji: tu,
                                  channel: L,
                                  closeOnModalOuterClick: ei,
                                  parentModalKey: er,
                                  position: "top",
                                  align: "right",
                                  positionLayerClassName: tU.BD,
                              }),
                    ],
                }),
            })
        );
    }),
);
