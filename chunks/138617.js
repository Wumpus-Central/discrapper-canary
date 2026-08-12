"use strict";
n.d(t, {
    C: () => ne,
    Sk: () => ns,
    Zx: () => t7,
    v7: () => ni,
    L0: () => nr,
    N_: () => nt,
    MD: () => nl,
    Ay: () => nd,
    uW: () => no,
    NO: () => t9,
    ck: () => na,
    ml: () => nn,
    Vu: () => t8,
});
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(143236),
    o = n(284009),
    d = n.n(o),
    c = n(462180),
    u = n(607399),
    _ = n(136722),
    E = n(17928),
    A = n(192308),
    h = n(259678),
    I = n(281595),
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
    D = n(375708),
    y = n(583224);
let v = { width: 500, height: L.$V },
    b = (0, O.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("73470"),
                n.e("47292"),
                n.e("41295"),
                n.e("40351"),
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
                n.e("71210"),
                n.e("32191"),
                n.e("88342"),
                n.e("71273"),
                n.e("89421"),
                n.e("98965"),
                n.e("54625"),
                n.e("93514"),
                n.e("37977"),
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
        renderLoader: () => (0, i.jsx)("div", { className: y.R4, style: v, children: (0, i.jsx)(C.y, {}) }),
    }),
    M = { height: L.$V },
    P = r.memo(function (e) {
        let { positionTargetRef: t, align: n, ...r } = e;
        return (0, i.jsx)("span", {
            style: L.sK,
            children: (0, i.jsx)(R.nE, {
                className: y.T8,
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
                        className: y.V6,
                        role: "dialog",
                        style: M,
                        "aria-label": D.intl.string(D.t["3CNGLK"]),
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
        let y = r.useCallback(
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
                                        message: D.intl.format(D.t.WoQXT6, { applicationName: r.name }),
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
                        onSectionClick: y,
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
    eT = n(442152),
    em = n(256265),
    eg = n(336807),
    eS = n(857071),
    eN = n(135621),
    eC = n(105330),
    eO = n(280450),
    eR = n(559908),
    eL = n(620141),
    eD = n(224964),
    ey = n(31408),
    ev = n(536283);
function eb(e) {
    let { editorHeight: t, textValue: n, channelId: i } = e,
        a = r.useRef(n),
        s = (0, eC.l)({ editorHeight: t }),
        l = (0, eD.A)(),
        o = (0, E.bG)([eR.Ay, eO.default], () => eR.Ay.isComboing(eO.default.getId(), i)),
        d = s?.left ?? 0,
        c = (s?.top ?? 0) - 16,
        u = 0 === n.length,
        _ = r.useMemo(() => 0.05 > Math.random(), [u]);
    return (
        r.useEffect(() => {
            0 !== n.length && n !== a.current && o && (l.fire(d, c, _ ? { sprite: ev.dR } : null), (a.current = n));
        }, [n, o, d, c, _, l]),
        null
    );
}
function eM(e) {
    return (0, i.jsx)(eL.A, { confettiLocation: ey.k.CHAT_INPUT, children: (0, i.jsx)(eb, { ...e }) });
}
var eP = n(931664),
    eU = n(631576),
    ew = n(68935),
    eG = n(406704),
    ex = n(885386),
    ek = n(951260),
    eF = n(696451),
    eV = n(576705),
    eB = n(309010),
    eH = n(638128),
    ej = n(522602),
    eW = n(287809),
    eY = n(821102),
    eK = n(174459),
    e$ = n(234320),
    ez = n(625494),
    eq = n(488926),
    eZ = n(723702),
    eX = n(486319),
    eQ = n(355622),
    eJ = n(392553),
    e0 = n(834730),
    e1 = n(140735),
    e2 = n(176781),
    e3 = n(463930),
    e4 = n(935063),
    e5 = n(73392),
    e6 = n(650019),
    e7 = n(763754),
    e8 = n(967144),
    e9 = n(118517),
    te = n(976860),
    tt = n(747926),
    tn = n(232835),
    ti = n(285796),
    tr = n(773848);
function ta(e) {
    let { onClick: t, "aria-label": n } = e;
    return (0, i.jsx)(J.D, {
        className: tr.b,
        onClick: t,
        "aria-label": n,
        children: (0, i.jsx)(ti.a, { size: "md", color: "currentColor", className: tr.u }),
    });
}
var ts = n(133972);
let tl = "channel-reply-bar-a11y-description";
function to(e) {
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
                (0, e9.Jx)(t.id), (0, tt.Tv)(t, n, "Reply Chain Nudge");
            },
            className: ts._r,
            focusProps: { offset: { right: -4, left: -4 } },
            children: [
                (0, i.jsx)(e0.E, {
                    color: "text-default",
                    className: ts.Qq,
                    variant: "text-sm/normal",
                    children: D.intl.format(D.t.B3V0FM, { count: Math.min(10, a + 1) }),
                }),
                (0, i.jsx)(e0.E, {
                    color: "text-link",
                    className: ts.NG,
                    variant: "text-sm/semibold",
                    children: D.intl.string(D.t.rBIGBL),
                }),
            ],
        })
    );
}
function td(e) {
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
        } = (0, e7.Ay)(d),
        g = (0, e8.gn)(A, T, f),
        S = (0, e5.a)({ displayNameStyles: m }),
        N = (0, e6.A)(_, d.attachments),
        C =
            ((t = o.id),
            (n = d.id),
            (0, E.bG)([tn.A], () => {
                let e = n;
                for (let n = 0; n < 10; n++) {
                    let i = tn.A.getMessage(t, e);
                    if (i?.type !== el.lAJ.REPLY || null == i.messageReference) return n;
                    e = i.messageReference.message_id;
                }
                return 10;
            }, [t, n])),
        O = (0, eG.n)(o, d),
        R = l.showThreadPromptOnReply && C >= 2 && O;
    return (0, i.jsx)("div", {
        className: ts.e1,
        children: (0, i.jsxs)("div", {
            className: ts.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: ts.eU,
                    children: [
                        (0, i.jsx)(e1.A, { id: tl, children: D.intl.formatToPlainString(D.t.EpJL4E, { username: h }) }),
                        (0, i.jsx)(J.D, {
                            onClick: function () {
                                return (0, te.pX)(el.BVt.CHANNEL(o.getGuildId(), o.id, d.id));
                            },
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, i.jsx)(e0.E, {
                                color: "text-default",
                                className: s()(ts.Qq, ts.Fn),
                                variant: "text-sm/normal",
                                children: D.intl.format(D.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, i.jsxs)(
                                            r.Fragment,
                                            {
                                                children: [
                                                    "\xa0",
                                                    N?.title != null
                                                        ? (0, i.jsxs)("span", {
                                                              className: ts.H8,
                                                              children: [
                                                                  N.isClip &&
                                                                      (0, i.jsx)(e2.x, {
                                                                          size: "xs",
                                                                          color: "currentColor",
                                                                          className: ts.gS,
                                                                      }),
                                                                  (0, i.jsx)(e0.E, {
                                                                      variant: "text-sm/semibold",
                                                                      color: "text-default",
                                                                      className: ts.NV,
                                                                      children: N.title,
                                                                  }),
                                                                  (0, i.jsxs)(e0.E, {
                                                                      variant: "text-sm/normal",
                                                                      color: "text-link",
                                                                      children: ["@", N.timestamp],
                                                                  }),
                                                              ],
                                                          })
                                                        : (0, i.jsx)(e3.g, {
                                                              className: ts.UU,
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
                            className: ts.o1,
                            children: [
                                u &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(Q.m, {
                                                asContainer: !0,
                                                text: c ? D.intl.string(D.t.DH2o6R) : D.intl.string(D.t.utGGIY),
                                                children: (0, i.jsx)(J.D, {
                                                    role: "switch",
                                                    "aria-checked": c,
                                                    onClick: function (e) {
                                                        e.stopPropagation(), (0, e9.vz)(o.id, !c);
                                                    },
                                                    children: (0, i.jsxs)(e0.E, {
                                                        variant: "text-sm/bold",
                                                        color: c ? "text-link" : "text-muted",
                                                        className: ts.Z4,
                                                        children: [
                                                            (0, i.jsx)(e4.X, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": D.intl.string(D.t.P8tvKG),
                                                                className: ts.mM,
                                                            }),
                                                            c ? D.intl.string(D.t.p9jC2r) : D.intl.string(D.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, i.jsx)("div", { className: ts.me, "aria-hidden": !0 }),
                                        ],
                                    }),
                                (0, i.jsx)(ta, {
                                    onClick: function (e) {
                                        e.stopPropagation(), (0, e9.Jx)(o.id);
                                    },
                                    "aria-label": D.intl.string(D.t.jSnJGT),
                                }),
                            ],
                        }),
                    ],
                }),
                R && (0, i.jsx)(to, { channel: o, message: d, replyChainLength: C }),
            ],
        }),
    });
}
var tc = n(749314),
    tu = n(148355),
    t_ = n(274107);
let tE = r.memo(function (e) {
    let { channelId: t, chatInputType: n } = e,
        [a, s] = r.useState(null),
        l = (0, E.bG)([eP.A], () => eP.A.getStickerPreview(t, n.drafts.type));
    return n.stickers?.allowSending && null != l && 0 !== l.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("div", {
                      className: t_.Tz,
                      children: l.map((e) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: t_.dp,
                                  children: [
                                      (0, i.jsx)(J.D, {
                                          onFocus: () => s(e.id),
                                          onBlur: () => s(null),
                                          className: t_.b,
                                          "aria-label": D.intl.formatToPlainString(D.t.BGAQRd, { name: e.name }),
                                          onClick: () => (0, eU.x5)(t, n.drafts.type),
                                          children: (0, i.jsx)("div", {
                                              className: t_.Nk,
                                              children: (0, i.jsx)(ti.a, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: t_.ut,
                                              }),
                                          }),
                                      }),
                                      (0, i.jsx)(tu.A, {
                                          isInteracting: a === e.id,
                                          className: t_.UV,
                                          size: 48,
                                          sticker: e,
                                      }),
                                  ],
                              },
                              e.id,
                          ),
                      ),
                  }),
                  (0, i.jsx)(tc.A, { className: t_.R }),
              ],
          })
        : null;
});
var tA = n(612394);
n(321073);
var th = n(442433);
n(827669);
var tI = n(514294);
function tf(e) {
    let t,
        a,
        l,
        { className: o, activeCommand: d, activeOption: c, optionStates: u, channelId: _ } = e,
        E = r.useCallback(
            (e) => {
                let t = d?.rootCommand?.id;
                null == t
                    ? e.preventDefault()
                    : (0, th.L3)(e, async () => {
                          let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                          return (n) => (0, i.jsx)(e, { ...n, id: t, label: D.intl.string(D.t.oJ1Muw) });
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
        className: s()(o, tI.M0),
        onContextMenu: E,
        children: [
            (0, i.jsxs)("div", {
                className: tI.iz,
                children: [
                    (0, i.jsx)(e0.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        tag: "span",
                        children: t,
                    }),
                    null != l
                        ? (0, i.jsx)("span", { className: tI.z3, children: l })
                        : (0, i.jsx)("span", { className: tI.h_, children: a }),
                ],
            }),
            (0, i.jsx)("div", {
                className: tI.o1,
                children: (0, i.jsx)(ta, { onClick: A, "aria-label": D.intl.string(D.t.cpT0Cq) }),
            }),
        ],
    });
}
var tp = n(228366),
    tT = n(734057);
let tm = new Set();
class tg extends E.Ay.PersistedStore {
    static displayName = "PTOStore";
    static persistKey = "PTOStore";
    initialize(e) {
        this.waitFor(tT.A, eF.Ay, eB.Ay, eW.default), null != e && (tm = new Set(e));
    }
    hasId(e) {
        return tm.has(e);
    }
    getState() {
        return [...tm];
    }
}
let tS = new tg(tp.h, {});
function tN() {
    let e = eB.Ay.getChannelId();
    if (null == e) return;
    let t = tT.A.getChannel(e);
    null != t && t.isPrivate() && (tm.has(t.getRecipientId()) || (tm.add(t.getRecipientId()), tS.emitChange()));
}
function tC() {
    return (0, i.jsxs)("div", {
        className: ts.eU,
        children: [
            (0, i.jsx)(e0.E, {
                variant: "text-sm/medium",
                className: s()(ts.Qq, ts.Fn),
                children: D.intl.string(D.t["2UvR1E"]),
            }),
            (0, i.jsx)("div", {
                className: ts.o1,
                children: (0, i.jsx)(ta, { onClick: tN, "aria-label": D.intl.string(D.t.cpT0Cq) }),
            }),
        ],
    });
}
var tO = n(9175);
function tR(e) {
    let { error: t } = e;
    return (0, i.jsxs)("div", {
        className: tO.M,
        children: [
            (0, i.jsx)(e0.E, { variant: "text-xs/bold", color: "text-strong", children: D.intl.string(D.t["4VDCG0"]) }),
            t
                ? (0, i.jsx)(e0.E, { variant: "text-xs/medium", className: tO.z, children: D.intl.string(D.t.qNorwt) })
                : (0, i.jsx)(e0.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: D.intl.string(D.t["260qZS"]),
                  }),
        ],
    });
}
var tL = n(25201),
    tD = n(926321),
    ty = n(356693);
function tv(e) {
    var t, n;
    let { channelId: r } = e,
        a = (0, tL.vR)(r);
    if (null == a) return null;
    let l = a.rolling,
        o =
            ((t = l),
            (n = a.results),
            t
                ? D.intl.string(D.t["x/FIRX"])
                : null == n
                  ? ""
                  : D.intl.formatToPlainString(D.t.xU4pF1, { total: n.reduce((e, t) => e + t, 0) }));
    return (0, i.jsx)("div", {
        className: s()(ty.kL, { [ty.Kd]: !a.dismissing }),
        children: (0, i.jsxs)("div", {
            className: ty.Qs,
            children: [
                (0, i.jsx)(tD.j, { size: "md", className: s()({ [ty.su]: l }) }),
                (0, i.jsx)(e0.E, { color: "text-default", variant: "text-sm/normal", children: o }),
            ],
        }),
    });
}
var tb = n(575293),
    tM = n(31717),
    tP = n(365844);
function tU(e) {
    let { channelId: t, scheduledMessageDraft: n } = e,
        { scheduledTimestamp: r } = n;
    return (0, i.jsx)("div", {
        className: tP.e1,
        children: (0, i.jsx)("div", {
            className: tP.kL,
            children: (0, i.jsxs)("div", {
                className: tP.g3,
                children: [
                    (0, i.jsx)(e0.E, {
                        color: "text-default",
                        className: s()(tP.Qq, tP.a3),
                        variant: "text-sm/normal",
                        children: D.intl.formatToPlainString(D.t["MQcRX/"], { timestamp: new Date(r).valueOf() }),
                    }),
                    (0, i.jsx)("div", {
                        className: tP.o1,
                        children: (0, i.jsx)(ta, {
                            onClick: function (e) {
                                e.stopPropagation(), f.A.clearDraft(t, tM.C.ScheduledMessage);
                            },
                            "aria-label": D.intl.string(D.t.cpT0Cq),
                        }),
                    }),
                ],
            }),
        }),
    });
}
var tw = n(857983);
function tG(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, i.jsx)("div", { children: e }, t)),
        a = t.floating.map((e, t) => (0, i.jsx)(r.Fragment, { children: e }, t));
    return 0 === n.length && 0 === a.length
        ? null
        : (0, i.jsxs)(r.Fragment, {
              children: [
                  a.length > 0 && (0, i.jsx)("div", { className: tw.Vq, children: a }),
                  n.length > 0 && (0, i.jsx)("div", { className: tw.MD, children: n }),
              ],
          });
}
var tx = n(123583),
    tk = n(562708),
    tF = n(150934),
    tV = n(139286),
    tB = n(47167),
    tH = n(713654),
    tj = n(252263),
    tW = n(8455),
    tY = n(67259),
    tK = n(239917);
function t$(e) {
    let { thread: t, scheduledMessageDraft: n } = e,
        a = (0, tW.Vp)({ location: "ThreadsAlsoSendToChannelArea" }),
        [s, l] = (0, E.yK)([tT.A, tY.A], () => [
            t.isThread() ? tT.A.getChannel(t.parent_id) : null,
            tY.A.getAlsoSendToChannel(t.id),
        ]),
        o = (0, tB.Ay)(s),
        d = r.useCallback(
            (e) => {
                eK.default.track(el.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_TOGGLED, {
                    value: e,
                    guild_id: t.guild_id,
                    channel_id: t.id,
                }),
                    (0, tj.B)({ channelId: t.id, enabled: e });
            },
            [t],
        );
    if (
        ((0, tV.A)(
            { name: tk.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL, type: tk.ImpressionTypes.VIEW },
            { disableTrack: null == s || !a.enabled },
            [s, a.enabled],
        ),
        !a.enabled || null == s)
    )
        return null;
    let c = (0, tH.gU)(s),
        u = D.intl.format(D.t.UqL10G, {
            callToActionHook: (e, t) =>
                (0, i.jsx)(
                    e0.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: tK.Pf,
                        children: D.intl.string(D.t.Pi3JW7),
                    },
                    t,
                ),
            channelName: o,
            channelNameHook: (e, t) =>
                (0, i.jsxs)(
                    e0.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: tK.Pf,
                        children: [null == c ? null : (0, i.jsx)(c, { color: "currentColor", className: tK.Kk }, t), e],
                    },
                    t,
                ),
        });
    return (0, i.jsx)("div", {
        className: tK.kL,
        children: (0, i.jsx)(tF.S, { checked: l, disabled: null != n, onChange: d, label: u, labelType: "secondary" }),
    });
}
function tz(e) {
    let { channel: t, type: n, scheduledMessageDraft: r } = e,
        { shouldShow: a } = (function (e) {
            let { channel: t, type: n } = e,
                i = (0, E.bG)([tT.A], () => {
                    let e = tT.A.getChannel(t.parent_id);
                    return e?.isForumLikeChannel() ?? !1;
                }),
                r = [eQ.oU.NORMAL, eQ.oU.SIDEBAR].includes(n);
            return { shouldShow: t.isThread() && !i && r };
        })({ channel: t, type: n });
    return a ? (0, i.jsx)(t$, { thread: t, scheduledMessageDraft: r }) : null;
}
var tq = n(822610),
    tZ = n(625928),
    tX = n(135261),
    tQ = n(820066),
    tJ = n(922016),
    t0 = n(375499),
    t1 = n(267889),
    t2 = n(307731),
    t3 = n(849918);
function t4(e) {
    let { getSlateEditor: t, onInsertEmoji: n, type: a, channel: s } = e,
        l = t(),
        o = r.useRef(null);
    return null == l
        ? null
        : (0, i.jsxs)("div", {
              id: "slate-toolbar",
              className: t3.aL,
              children: [
                  (0, i.jsx)("div", {
                      className: t3.Wy,
                      children: (0, i.jsx)(tX.P, {
                          slateEditor: l,
                          options: a.markdown,
                          iconClassName: t3.C7,
                          dividerClassName: t3.us,
                      }),
                  }),
                  (0, i.jsx)(tJ.Y, {
                      targetElementRef: o,
                      renderPopout: function (e) {
                          let { closePopout: t } = e;
                          return (0, i.jsx)(t1.A, {
                              persistSearch: !0,
                              channel: s,
                              closePopout: t,
                              onSelectEmoji: (e) => {
                                  let { emoji: i, willClose: r } = e;
                                  n({ emoji: i, willClose: r }), r && t();
                              },
                              pickerIntention:
                                  a.expressionPicker?.emojiIntention ?? t2.EmojiIntention.COMMUNITY_CONTENT,
                          });
                      },
                      position: "bottom",
                      animation: tJ.Y.Animation.NONE,
                      align: "left",
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, i.jsx)(t0.A, { ...e, ref: o, active: n, className: t3.Z8, tabIndex: 0 });
                      },
                  }),
              ],
          });
}
var t5 = n(263582),
    t6 = n(698279);
function t7(e, t, a, s, l) {
    let [o, d] = r.useState(!1),
        c = r.useCallback(
            (r, u, _, E, h, I) => {
                if (o) return;
                d(!0);
                let p = eP.A.getStickerPreview(l, t.drafts.type)?.map((e) => e.id) ?? [],
                    T = ej.A.getUploads(l, t.drafts.type) ?? [];
                if (null == u && !E && !h && (0, em.xz)(T, l)) {
                    d(!1),
                        (0, A.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("76739"),
                                n.e("70401"),
                                n.e("54540"),
                                n.e("99998"),
                                n.e("47352"),
                                n.e("65584"),
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
                                n.e("47177"),
                                n.e("77487"),
                                n.e("26437"),
                                n.e("24922"),
                                n.e("99011"),
                                n.e("98972"),
                                n.e("54030"),
                                n.e("36150"),
                                n.e("10014"),
                                n.e("33097"),
                                n.e("15172"),
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
                        (l !== eB.Ay.getChannelId()
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
function t8(e, t, n) {
    return r.useCallback(
        (i) => {
            if (t === eQ.oU.CREATE_FORUM_POST || t === eQ.oU.CREATE_ANNOUNCEMENT_POST) n.current?.insertGIF(i);
            else {
                let t = {
                    gif_provider: i.provider ?? eg.jQ,
                    load_id: eY.A.getAnalyticsID(),
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
function t9(e) {
    return r.useCallback(
        (t) => {
            let { emoji: n, willClose: i } = t,
                r = e.current;
            null != n && null != r && r.insertEmoji({ emoji: n, willClose: i }), i && (0, ep.v8)();
        },
        [e],
    );
}
function ne(e) {
    let { editorRef: t, disabled: n, textValue: i, channelId: a, chatInputType: s, submit: l } = e,
        { analyticsLocations: o } = (0, g.Ay)();
    return r.useCallback(
        (e, r) => {
            n ||
                (s === eQ.oU.CREATE_ANNOUNCEMENT_POST || (0, ew.YS)(r, i, a, s.drafts.type)
                    ? ((0, tA.fh)({
                          sticker: e,
                          stickerSelectLocation: r,
                          isReplacement: null != eP.A.getStickerPreview(a, s.drafts.type),
                          analyticsLocations: o,
                      }),
                      (0, eU.$x)(a, e, s.drafts.type))
                    : (l({ value: "", uploads: void 0, stickers: [e.id] }), t.current?.clearValue()),
                (0, ep.v8)(),
                t.current?.focus());
        },
        [n, i, a, t, o, l, s],
    );
}
function nt(e, t, n) {
    let i = r.useCallback(() => {
            t || (0, ep.r$)(t6.kx.EMOJI, e, n);
        }, [t, e, n]),
        a = r.useCallback(() => {
            !t && e.gifs?.allowSending && (0, ep.r$)(t6.kx.GIF, e, n);
        }, [t, e, n]),
        s = r.useCallback(() => {
            !t && e.stickers?.allowSending && (0, ep.r$)(t6.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, e$.Vo)({ event: el.jej.TOGGLE_EMOJI_POPOUT, handler: i }),
        (0, e$.Vo)({ event: el.jej.TOGGLE_GIF_PICKER, handler: a }),
        (0, e$.Vo)({ event: el.jej.TOGGLE_STICKER_PICKER, handler: s });
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
        a = (0, E.bG)([eS.A], () => null != r && eS.A.isLurking(r), [r]),
        s = (0, E.bG)([eF.Ay, eW.default], () => {
            let e = eW.default.getCurrentUser();
            return (null != r && null != e ? eF.Ay.getMember(r, e.id)?.isPending : null) ?? !1;
        }),
        l = (0, E.cf)([eV.A], () => {
            let r = e.isPrivate(),
                a = eV.A.computePermissions(e),
                l = _.zy(a, el.xBc.CREATE_PUBLIC_THREADS) || _.zy(a, el.xBc.CREATE_PRIVATE_THREADS),
                o =
                    (!t.permissions?.requireCreateTherads || l) &&
                    (!t.permissions?.requireSendMessages || _.zy(a, el.xBc.SEND_MESSAGES)),
                d = o && _.zy(a, el.xBc.ATTACH_FILES),
                c = null != n,
                u = (0, eG.UJ)(e);
            return {
                disabled: i || s || (!r && !o) || u,
                canAttachFiles: !0 === t.attachments && (r || s || d || c),
                canCreateThreads: l,
                canEveryoneSendMessages: eq.MJ(el.xBc.SEND_MESSAGES, e),
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
            a,
            {
                textValue: l,
                richValue: o,
                className: c,
                innerClassName: _,
                editorClassName: A,
                id: f,
                required: C,
                disabled: O,
                placeholder: R,
                accessibilityLabel: L,
                channel: D,
                type: y,
                focused: v,
                error: b,
                renderAttachButton: M,
                renderApplicationCommandIcon: w,
                renderButtons: G,
                pendingReply: x,
                onChange: k,
                onResize: F,
                onBlur: V,
                onFocus: B,
                onKeyDown: H,
                onSubmit: j,
                promptToUpload: W,
                highlighted: Y,
                canMentionRoles: K,
                canMentionChannels: $,
                maxCharacterCount: z,
                showRemainingCharsAfterCount: q,
                allowNewLines: Z = !0,
                characterCountClassName: X,
                "aria-describedby": Q,
                "aria-labelledby": J,
                setEditorRef: ee,
                autoCompletePosition: et,
                children: en,
                disableThemedBackground: ei = !1,
                emojiPickerCloseOnModalOuterClick: er,
                parentModalKey: ea,
                scheduledMessageDraft: es,
                showValueWhenDisabled: eo = !1,
            } = e;
        d()(null != y, "chat input type must be set");
        let { analyticsLocations: ed } = (0, g.Ay)(m.A.CHANNEL_TEXT_AREA),
            ec = nr(t),
            eu = r.useRef(null),
            eE = r.useRef(null),
            em = r.useRef(null),
            eg = r.useRef(null),
            eS = r.useRef(null),
            eC = r.useCallback(() => em.current?.getSlateEditor() ?? null, []);
        ee?.(em.current);
        let eO = (0, S.A)(D),
            eR = (0, ek.n)("ChannelTextAreaContainer"),
            eL = (0, E.cf)([T.Ay], () => ({
                expressionPickerFormat: T.Ay.expressionPickerFormat,
                condensePickerWhenNarrow: T.Ay.condensePickerWhenNarrow,
            })),
            eD = eR ? eL.expressionPickerFormat : T.IG.FLEXIBLE,
            ey = !eR || eL.condensePickerWhenNarrow,
            [ev, eb] = r.useState(!eO);
        (0, p.i4)(ec, (e) => {
            let { width: t } = e;
            return eb(!eO && (null == t || t > 450));
        });
        let eP = eD === T.IG.HIDDEN,
            eU = eD === T.IG.CONDENSED || (eD === T.IG.FLEXIBLE && ey && !ev),
            { activeCommand: ew, activeCommandSection: eG } = (0, E.cf)([U.A], () => ({
                activeCommand: y.commands?.enabled ? U.A.getActiveCommand(D.id) : null,
                activeCommandSection: y.commands?.enabled ? U.A.getActiveCommandSection(D.id) : null,
            })),
            {
                isLurking: eV,
                isPendingMember: eB,
                disabled: ej,
                canAttachFiles: eY,
                canCreateThreads: e$,
                canEveryoneSendMessages: eq,
            } = ns(D, y, ew, O),
            e0 = y.toolbarType === eQ.O1.STATIC,
            e1 = !ex.D_.useSetting() && !(0, eZ.isAndroidWeb)() && null != window.ResizeObserver,
            e2 = !e1 || !y.commands?.enabled || !v || "/" !== l,
            e3 = (0, eN.A)(),
            { fontSize: e4 } = (0, E.cf)([T.Ay], () => ({ fontSize: T.Ay.fontSize })),
            e5 = (0, E.bG)([eH.A], () => eH.A.isEnabled());
        nt(y, ej, D.id);
        let { eventEmitter: e6, handleEditorSelectionChanged: e7 } = nn(em, l, o),
            e8 = r.useRef(l);
        e8.current = l;
        let e9 = r.useCallback(
                (e, t, n) => {
                    "/" === t && "" === e8.current && y.commands?.enabled && e6.emit("command-sentinel-typed"),
                        k?.(e, t, n);
                },
                [k, y.commands?.enabled, e6],
            ),
            { submitting: te, submit: tt, handleSubmit: tn } = t7(j, y, em, eS, D.id),
            { autocompleteRef: ti, handleMaybeShowAutocomplete: tr, handleHideAutocomplete: ta } = ni(),
            ts = t8(tt, y, em),
            to = t9(em),
            tc = ne({ editorRef: em, disabled: ej, textValue: l, channelId: D.id, chatInputType: y, submit: j }),
            tu = r.useCallback(
                (e, t, n) => {
                    let i = em.current;
                    null != e &&
                        null != i &&
                        (eK.default.track(el.HAw.SOUNDMOJI_SELECT, {
                            channel_id: D.id,
                            guild_id: D.guild_id,
                            sound_guild_id: e.guildId,
                            sound_id: e.soundId,
                            source: t,
                        }),
                        i.insertSound(e)),
                        n && (0, ep.v8)(),
                        i?.focus();
                },
                [em, D.id, D.guild_id],
            ),
            t_ = r.useCallback(() => eS?.current?.hide(), []),
            { editorHeight: tA, handleResize: th } = na(F),
            {
                handleTab: tI,
                handleEnter: tp,
                handleSpace: tT,
                handleMoveSelection: tg,
            } = ((n = r.useCallback(
                () => !!(!e2 && eu.current?.onTabOrEnter(!1)) || ti.current?.onTabOrEnter(!1) || !1,
                [e2, eu, ti],
            )),
            (a = r.useCallback(
                () => !!(!e2 && eu.current?.onTabOrEnter(!0)) || ti.current?.onTabOrEnter(!0) || !1,
                [e2, eu, ti],
            )),
            {
                handleTab: n,
                handleEnter: a,
                handleSpace: r.useCallback(() => ti.current?.onSpace() || !1, [ti]),
                handleMoveSelection: r.useCallback(
                    (e) => !!(!e2 && eu.current?.onMoveSelection(e)) || ti.current?.onMoveSelection(e) || !1,
                    [e2, eu, ti],
                ),
            }),
            { expressionPickerView: tN, shouldHideExpressionPicker: tO, handleOuterClick: tD } = nl(y, em, D.id),
            { selectedAutocompleteInputType: ty, selectedAutocompleteInputError: tM } = (function (e, t) {
                let [n, i] = r.useState({ selectedAutocompleteInputType: null, selectedAutocompleteInputError: !1 }),
                    a = r.useCallback(() => {
                        let e,
                            n = t.current?.getSlateEditor();
                        null != n && (e = tQ.VW.getSelectedParentOfType(n, eI.mk)?.[0]),
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
            })(e6, em),
            { handleAutocompleteVisibilityChange: tP } = no(y, D.id),
            tk = (function (e) {
                let { type: t, channelId: n } = e;
                return (0, eA.bG)([N.A], () => {
                    let e = N.A.activeViewType();
                    return null != e && e === t && N.A.activeChannelId() === n && N.A.shouldShowPopup();
                }, [t, n]);
            })({ type: y, channelId: D.id }),
            tF = r.useCallback(() => {
                e6.emit("submit-failure");
            }, [e6]);
        (0, eX.R)(e6, D.guild_id, D.id);
        let tV = null != x,
            tB = (ej && !((eV || eB) && eq)) || (te && y.submit?.useDisabledStylesOnSubmit),
            tH = null;
        null != ew ? (tH = w?.(ew, eG, tw.g$)) : (!ej || e$) && (tH = M?.(tV, tw.g$));
        let { isVisible: tj, showsUpsell: tW } = (0, t5.A)({
                type: y,
                textValue: l,
                maxCharacterCount: z,
                showRemainingCharsAfterCount: q,
            }),
            tY = e1 && null != o && !ej && y.showCharacterCount && null == ew,
            tK = e1 && !__OVERLAY__ && null != o && null == ew && y.toolbarType !== eQ.O1.NONE && !ej,
            t$ = (function (e) {
                let {
                        channel: t,
                        type: n,
                        activeCommand: a,
                        pendingReply: s,
                        scheduledMessageDraft: l,
                        selectedAutocompleteInputType: o,
                        selectedAutocompleteInputError: d,
                    } = e,
                    { activeCommandOption: c, activeCommandOptionStates: u } = (0, E.cf)([U.A], () => ({
                        activeCommandOption: U.A.getActiveOption(t.id),
                        activeCommandOptionStates: U.A.getOptionStates(t.id),
                    })),
                    _ = (0, E.bG)([eF.Ay, eW.default, tS], () => {
                        let e = eW.default.getCurrentUser();
                        if (null == e || !e.isStaff() || !t.isDM()) return !1;
                        let n = eW.default.getUser(t.getRecipientId());
                        if (!n?.isStaff()) return !1;
                        let i = eF.Ay.getNicknames(n.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
                        return i ? !tS.hasId(n.id) && i : (tm.delete(n.id) && tS.emitChange(), !1);
                    }),
                    A = (0, tL.Ay)((e) => e.channelId === t.id);
                return r.useMemo(() => {
                    let e = [],
                        r = [];
                    return (
                        null != t.guild_id &&
                            n === eQ.oU.NORMAL &&
                            r.push((0, i.jsx)(tb.A, { guildId: t.guild_id, channel: t, className: tw.UW })),
                        null != a &&
                            e.push(
                                (0, i.jsx)(tf, {
                                    activeCommand: a,
                                    activeOption: c ?? null,
                                    optionStates: u,
                                    channelId: t.id,
                                }),
                            ),
                        null != s && e.push((0, i.jsx)(td, { reply: s, chatInputType: n })),
                        _ && e.push((0, i.jsx)(tC, {})),
                        null != l && e.push((0, i.jsx)(tU, { channelId: t.id, scheduledMessageDraft: l })),
                        "timestampMentionInput" === o && r.push((0, i.jsx)(tR, { error: d ?? !1 })),
                        A && e.push((0, i.jsx)(tv, { channelId: t.id })),
                        { stacked: e, floating: r }
                    );
                }, [a, c, u, t, A, s, _, n, l, o, d]);
            })({
                channel: D,
                type: y,
                activeCommand: ew,
                pendingReply: x,
                scheduledMessageDraft: es,
                selectedAutocompleteInputType: ty,
                selectedAutocompleteInputError: tM,
            }),
            tJ = 0 === l.trim().length,
            t0 = null != x ? [Q, tl].filter(Boolean).join(" ") : Q,
            t1 = y.layout === eQ.wt.INLINE,
            t2 = y.layout === eQ.wt.FLUSH,
            t3 = (0, i.jsx)("div", { ref: eE, className: tw.BW }),
            t6 = tk ? (0, i.jsx)(P, { align: "right", positionTargetRef: eE, channel: D }) : null,
            nd =
                null != G
                    ? G()
                    : (0, i.jsx)(tx.A, {
                          type: y,
                          disabled: ej,
                          channel: D,
                          handleSubmit: tn,
                          isEmpty: tJ,
                          showAllButtons: !eU && !eP,
                          expressionButtonsHidden: eP,
                      }),
            nc = tY
                ? (0, i.jsx)(tZ.A, {
                      type: y,
                      textValue: l,
                      className: X,
                      maxCharacterCount: z,
                      showRemainingCharsAfterCount: q,
                  })
                : null;
        return (
            r.useEffect(() => {
                v && ez._.dispatch(el.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: D.id });
            }, [v, D.id]),
            (0, i.jsx)(ef.Sv, {
                value: e6,
                children: (0, i.jsxs)(g.f5, {
                    value: ed,
                    children: [
                        tK && e0
                            ? (0, i.jsx)(t4, { getSlateEditor: eC, onInsertEmoji: to, type: y, channel: D })
                            : tK
                              ? (0, i.jsx)(tX.A, { ref: eS, getSlateEditor: eC, containerRef: eg, options: y.markdown })
                              : null,
                        (0, i.jsxs)("div", {
                            ref: ec,
                            className: s()(c, {
                                [tw.gM]: !0,
                                [tw.Bz]: tj && tY,
                                [tw.Qv]: tW && tY,
                                [tw.h9]: tB,
                                [tw.mr]: Y,
                                [tw.Wn]: u.Fr,
                                [tw.Ls]: t1,
                                [tw.AH]: t2,
                                [tw.z3]: null != b,
                            }),
                            children: [
                                t1 || t2 ? null : (0, i.jsx)(tG, { bars: t$ }),
                                (0, i.jsxs)("div", {
                                    ref: eg,
                                    onScroll: t_,
                                    className: s()(_, { [tw.xx]: !0, [tw.k6]: !ei, [tw.Ri]: t$.stacked.length > 0 }),
                                    children: [
                                        (0, i.jsx)(tE, { channelId: D.id, chatInputType: y }),
                                        y.hideAttachmentArea
                                            ? null
                                            : (0, i.jsx)(tq.A, { channelId: D.id, type: y, canAttachFiles: eY }),
                                        (0, i.jsxs)("div", {
                                            className: s()(tw.vW, {
                                                [tw.BF]: tB,
                                                [tw.RL]: y !== eQ.oU.EDIT && (null != tH || (tB && null == tH) || eV),
                                                [tw.fk]: y === eQ.oU.THREAD_CREATION,
                                                [tw.TZ]:
                                                    y === eQ.oU.CREATE_FORUM_POST || y === eQ.oU.FORWARD_MESSAGE_INPUT,
                                                [tw.$i]: y === eQ.oU.USER_PROFILE_REPLY,
                                            }),
                                            onMouseDown: tD,
                                            children: [
                                                t6,
                                                tH,
                                                (0, i.jsx)(h.vN, {
                                                    ringTarget: ec,
                                                    ringClassName: tw.Rg,
                                                    children: (0, i.jsx)(eJ.A, {
                                                        ref: em,
                                                        id: f,
                                                        focused: v,
                                                        useSlate: e1,
                                                        textValue: l,
                                                        richValue: o,
                                                        disabled: ej,
                                                        placeholder: R,
                                                        required: C,
                                                        accessibilityLabel: L,
                                                        isPreviewing: (eV || eB) && eq,
                                                        channel: D,
                                                        type: y,
                                                        canPasteFiles: eY,
                                                        uploadPromptCharacterCount: el.CS1,
                                                        maxCharacterCount: z ?? e3,
                                                        allowNewLines: Z,
                                                        "aria-describedby": t0,
                                                        onChange: e9,
                                                        onResize: th,
                                                        onBlur: V,
                                                        onFocus: B,
                                                        onKeyDown: H,
                                                        onSubmit: tt,
                                                        onSubmitFailure: tF,
                                                        onTab: tI,
                                                        onEnter: tp,
                                                        onSpace: tT,
                                                        onMoveSelection: tg,
                                                        onSelectionChanged: e7,
                                                        onMaybeShowAutocomplete: tr,
                                                        onHideAutocomplete: ta,
                                                        promptToUpload: W,
                                                        fontSize: e4,
                                                        spellcheckEnabled: e5,
                                                        canOnlyUseTextCommands: tV,
                                                        className: s()(
                                                            {
                                                                [tw.QI]: y === eQ.oU.THREAD_CREATION,
                                                                [tw.AV]: y === eQ.oU.PROFILE_BIO_INPUT,
                                                                [tw.GR]: y === eQ.oU.OVERLAY_INLINE_REPLY,
                                                            },
                                                            A,
                                                        ),
                                                        "aria-labelledby": J,
                                                        showValueWhenDisabled: eo,
                                                    }),
                                                }),
                                                nd,
                                                t3,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(tz, { channel: D, type: y, scheduledMessageDraft: es }),
                                e2 ? null : (0, i.jsx)(e_, { ref: eu, channel: D, canOnlyUseTextCommands: tV }),
                                (0, i.jsx)(eh.A, {
                                    ref: ti,
                                    channel: D,
                                    canMentionRoles: K,
                                    canMentionChannels: $,
                                    useNewSlashCommands: e1,
                                    canOnlyUseTextCommands: tV,
                                    canSendStickers: y.stickers?.allowSending,
                                    canSendSoundmoji: y.soundmoji?.allowSending,
                                    textValue: l,
                                    focused: v,
                                    expressionPickerView: tN,
                                    type: y,
                                    targetRef: ec,
                                    editorRef: em,
                                    onSendMessage: tt,
                                    onSendSticker: tc,
                                    onVisibilityChange: tP,
                                    editorScrollerRef: eg,
                                    editorHeight: tA,
                                    barsHeight: 40 * t$.floating.length,
                                    setValue: (e, t) => e9?.(null, e, t),
                                    position: et,
                                }),
                                (0, i.jsx)(eM, { textValue: l, editorHeight: tA, channelId: D.id }),
                                nc,
                                en,
                            ],
                        }),
                        (0, i.jsx)(I.U, { error: b }),
                        tO
                            ? null
                            : (0, i.jsx)(eT.A, {
                                  positionTargetRef: ec,
                                  type: y,
                                  onSelectGIF: ts,
                                  onSelectEmoji: to,
                                  onSelectSticker: tc,
                                  onSelectSound: tu,
                                  channel: D,
                                  closeOnModalOuterClick: er,
                                  parentModalKey: ea,
                                  position: "top",
                                  align: "right",
                                  positionLayerClassName: tw.BD,
                              }),
                    ],
                }),
            })
        );
    }),
);
