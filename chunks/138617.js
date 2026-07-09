"use strict";
n.d(t, {
    HG: () => nt,
    Sk: () => nl,
    C: () => ne,
    v7: () => nr,
    Zx: () => t7,
    L0: () => na,
    N_: () => nn,
    MD: () => no,
    Ay: () => nc,
    uW: () => nd,
    NO: () => t9,
    ck: () => ns,
    ml: () => ni,
    Vu: () => t8,
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
    R = n(268218),
    O = n(750506),
    L = n(60809),
    D = n(375708),
    y = n(429856);
let v = { width: 500, height: L.$V },
    b = (0, R.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("46494"),
                n.e("28596"),
                n.e("27647"),
                n.e("52760"),
                n.e("15080"),
                n.e("62458"),
                n.e("93909"),
                n.e("93326"),
                n.e("47570"),
                n.e("79711"),
                n.e("89028"),
                n.e("27152"),
                n.e("97270"),
                n.e("93103"),
                n.e("34552"),
                n.e("71210"),
                n.e("88342"),
                n.e("32191"),
                n.e("71273"),
                n.e("89421"),
                n.e("37977"),
                n.e("98965"),
                n.e("43780"),
                n.e("80854"),
                n.e("35395"),
                n.e("54625"),
                n.e("28662"),
                n.e("35313"),
                n.e("8362"),
                n.e("71133"),
                n.e("76428"),
                n.e("27773"),
                n.e("52229"),
                n.e("38887"),
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
            children: (0, i.jsx)(O.nE, {
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
    w = n(735438),
    G = n.n(w),
    x = n(537652),
    k = n(155718),
    F = n(95561),
    V = n(659280),
    B = n(579940),
    H = n(962125),
    j = n(915089),
    W = n(850992),
    Y = n(464651),
    K = n(286509),
    $ = n(721768),
    z = n(842209),
    q = n(210978),
    Z = n(392054),
    X = n(168186),
    Q = n(990078),
    J = n(939249),
    ee = n(802019),
    et = n(649671),
    en = n(932390);
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
    eo = n(155633),
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
            }),
            C = (e) => {
                let t = I.length,
                    n = f.reduce((e, t) => e + t.data.length, 0) - 7 * !!p;
                p && e + 420 > 48 * t + 56 * n - 512 && g(), N(e), eu(), (o.current = e);
            },
            R = r.useRef(C);
        r.useEffect(() => {
            R.current = C;
        }),
            r.useEffect(() => {
                R.current(o.current);
            }, [T]);
        let O = r.useCallback((e) => (e !== I.length - 1 || p ? 16 : 0), [I.length, p]),
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
                        sectionMarginBottom: O,
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
    eg = n(703244),
    eS = n(857071),
    eN = n(135621),
    eC = n(105330),
    eR = n(280450),
    eO = n(559908),
    eL = n(620141),
    eD = n(224964),
    ey = n(31408),
    ev = n(536283);
function eb(e) {
    let { editorHeight: t, textValue: n, channelId: i } = e,
        a = r.useRef(n),
        s = (0, eC.l)({ editorHeight: t }),
        l = (0, eD.A)(),
        o = (0, E.bG)([eO.Ay, eR.default], () => eO.Ay.isComboing(eR.default.getId(), i)),
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
    e6 = n(935063),
    e4 = n(73392),
    e5 = n(650019),
    e7 = n(763754),
    e8 = n(967144),
    e9 = n(118517),
    te = n(976860),
    tt = n(747926),
    tn = n(232835),
    ti = n(285796),
    tr = n(688288);
function ta(e) {
    let { onClick: t, "aria-label": n } = e;
    return (0, i.jsx)(J.D, {
        className: tr.b,
        onClick: t,
        "aria-label": n,
        children: (0, i.jsx)(ti.a, { size: "md", color: "currentColor", className: tr.u }),
    });
}
var ts = n(776380);
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
        S = (0, e4.a)({ displayNameStyles: m }),
        N = (0, e5.A)(_, d.attachments),
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
        R = (0, eG.n)(o, d),
        O = l.showThreadPromptOnReply && C >= 2 && R;
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
                                                            (0, i.jsx)(e6.X, {
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
                O && (0, i.jsx)(to, { channel: o, message: d, replyChainLength: C }),
            ],
        }),
    });
}
var tc = n(749314),
    tu = n(148355),
    t_ = n(901664);
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
var tI = n(851006);
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
        this.waitFor(tT.A, eF.Ay, eB.A, eW.default), null != e && (tm = new Set(e));
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
    let e = eB.A.getChannelId();
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
var tR = n(883407);
function tO(e) {
    let { error: t } = e;
    return (0, i.jsxs)("div", {
        className: tR.M,
        children: [
            (0, i.jsx)(e0.E, { variant: "text-xs/bold", color: "text-strong", children: D.intl.string(D.t["4VDCG0"]) }),
            t
                ? (0, i.jsx)(e0.E, { variant: "text-xs/medium", className: tR.z, children: D.intl.string(D.t.qNorwt) })
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
    ty = n(716141);
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
    tM = n(151282),
    tP = n(706140);
function tU(e) {
    let { pendingScheduledMessage: t } = e,
        { channelId: n, scheduledTimestamp: r } = t;
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
                                e.stopPropagation(), (0, tM.Ps)(n);
                            },
                            "aria-label": D.intl.string(D.t.cpT0Cq),
                        }),
                    }),
                ],
            }),
        }),
    });
}
var tw = n(871655);
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
    tK = n(238565);
function t$(e) {
    let { thread: t, pendingScheduledMessage: n } = e,
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
    let { channel: t, type: n, pendingScheduledMessage: r } = e,
        { shouldShow: a } = (function (e) {
            let { channel: t, type: n } = e,
                i = (0, E.bG)([tT.A], () => {
                    let e = tT.A.getChannel(t.parent_id);
                    return e?.isForumLikeChannel() ?? !1;
                }),
                r = [eQ.oU.NORMAL, eQ.oU.SIDEBAR].includes(n);
            return { shouldShow: t.isThread() && !i && r };
        })({ channel: t, type: n });
    return a ? (0, i.jsx)(t$, { thread: t, pendingScheduledMessage: r }) : null;
}
var tq = n(822610),
    tZ = n(625928),
    tX = n(135261),
    tQ = n(820066),
    tJ = n(922016),
    t0 = n(375499),
    t1 = n(334295),
    t2 = n(307731),
    t3 = n(903846);
function t6(e) {
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
var t4 = n(263582),
    t5 = n(698279);
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
                                n.e("66237"),
                                n.e("59748"),
                                n.e("80926"),
                                n.e("99326"),
                                n.e("20538"),
                                n.e("82090"),
                                n.e("19983"),
                                n.e("18893"),
                                n.e("28802"),
                                n.e("97300"),
                                n.e("44794"),
                                n.e("17103"),
                                n.e("49681"),
                                n.e("81647"),
                                n.e("76602"),
                                n.e("21921"),
                                n.e("40402"),
                                n.e("39970"),
                                n.e("72789"),
                                n.e("79049"),
                                n.e("65437"),
                                n.e("79745"),
                                n.e("3332"),
                                n.e("81314"),
                                n.e("32209"),
                                n.e("76428"),
                                n.e("18997"),
                                n.e("58337"),
                                n.e("68763"),
                                n.e("47177"),
                                n.e("26437"),
                                n.e("98972"),
                                n.e("12682"),
                                n.e("36150"),
                                n.e("99011"),
                                n.e("33097"),
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
                        (l !== eB.A.getChannelId()
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
                    gif_provider: i.provider ?? (0, eg.cf)(),
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
function nt(e) {
    return r.useCallback(
        (t) => {
            let n = e.current;
            null != n && n.insertKaomoji(t), (0, ep.v8)(), n?.focus();
        },
        [e],
    );
}
function nn(e, t, n) {
    let i = r.useCallback(() => {
            t || (0, ep.r$)(t5.kx.EMOJI, e, n);
        }, [t, e, n]),
        a = r.useCallback(() => {
            !t && e.gifs?.allowSending && (0, ep.r$)(t5.kx.GIF, e, n);
        }, [t, e, n]),
        s = r.useCallback(() => {
            !t && e.stickers?.allowSending && (0, ep.r$)(t5.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, e$.Vo)({ event: el.jej.TOGGLE_EMOJI_POPOUT, handler: i }),
        (0, e$.Vo)({ event: el.jej.TOGGLE_GIF_PICKER, handler: a }),
        (0, e$.Vo)({ event: el.jej.TOGGLE_STICKER_PICKER, handler: s });
}
function ni(e, t, n) {
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
function nr() {
    let e = r.useRef(null),
        t = r.useCallback(() => {
            e.current?.onMaybeShowAutocomplete();
        }, []),
        n = r.useCallback(() => {
            e.current?.onHideAutocomplete();
        }, []);
    return { autocompleteRef: e, handleMaybeShowAutocomplete: t, handleHideAutocomplete: n };
}
function na(e) {
    let t = r.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
}
function ns(e) {
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
function nl(e, t, n, i) {
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
function no(e, t, n) {
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
function nd(e, t) {
    return {
        handleAutocompleteVisibilityChange: r.useCallback(
            (n) => {
                n && (0, ep.v8)(e, t);
            },
            [e, t],
        ),
    };
}
let nc = r.memo(
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
                placeholder: R,
                accessibilityLabel: O,
                channel: L,
                type: D,
                focused: y,
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
        d()(null != D, "chat input type must be set");
        let { analyticsLocations: eo } = (0, g.Ay)(m.A.CHANNEL_TEXT_AREA),
            ed = na(t),
            ec = r.useRef(null),
            eu = r.useRef(null),
            eE = r.useRef(null),
            em = r.useRef(null),
            eg = r.useRef(null),
            eS = r.useCallback(() => eE.current?.getSlateEditor() ?? null, []);
        J?.(eE.current);
        let eC = (0, S.A)(L),
            eR = (0, ek.n)("ChannelTextAreaContainer"),
            eO = (0, E.cf)([T.Ay], () => ({
                expressionPickerFormat: T.Ay.expressionPickerFormat,
                condensePickerWhenNarrow: T.Ay.condensePickerWhenNarrow,
            })),
            eL = eR ? eO.expressionPickerFormat : T.IG.FLEXIBLE,
            eD = !eR || eO.condensePickerWhenNarrow,
            [ey, ev] = r.useState(!eC);
        (0, p.i4)(ed, (e) => {
            let { width: t } = e;
            return ev(!eC && (null == t || t > 450));
        });
        let eb = eL === T.IG.HIDDEN,
            eP = eL === T.IG.CONDENSED || (eL === T.IG.FLEXIBLE && eD && !ey),
            { activeCommand: eU, activeCommandSection: ew } = (0, E.cf)([U.A], () => ({
                activeCommand: D.commands?.enabled ? U.A.getActiveCommand(L.id) : null,
                activeCommandSection: D.commands?.enabled ? U.A.getActiveCommandSection(L.id) : null,
            })),
            {
                isLurking: eG,
                isPendingMember: eV,
                disabled: eB,
                canAttachFiles: ej,
                canCreateThreads: eY,
                canEveryoneSendMessages: e$,
            } = nl(L, D, eU, C),
            eq = D.toolbarType === eQ.O1.STATIC,
            e0 = !ex.D_.useSetting() && !(0, eZ.isAndroidWeb)() && null != window.ResizeObserver,
            e1 = !e0 || !D.commands?.enabled || !y || "/" !== a,
            e2 = (0, eN.A)(),
            { fontSize: e3 } = (0, E.cf)([T.Ay], () => ({ fontSize: T.Ay.fontSize })),
            e6 = (0, E.bG)([eH.A], () => eH.A.isEnabled());
        nn(D, eB, L.id);
        let { eventEmitter: e4, handleEditorSelectionChanged: e5 } = ni(eE, a, l),
            e7 = r.useRef(a);
        e7.current = a;
        let e8 = r.useCallback(
                (e, t, n) => {
                    "/" === t && "" === e7.current && D.commands?.enabled && e4.emit("command-sentinel-typed"),
                        x?.(e, t, n);
                },
                [x, D.commands?.enabled, e4],
            ),
            { submitting: e9, submit: te, handleSubmit: tt } = t7(H, D, eE, eg, L.id),
            { autocompleteRef: tn, handleMaybeShowAutocomplete: ti, handleHideAutocomplete: tr } = nr(),
            ta = t8(te, D, eE),
            ts = t9(eE),
            to = ne({ editorRef: eE, disabled: eB, textValue: a, channelId: L.id, chatInputType: D, submit: H }),
            tc = r.useCallback(
                (e, t, n) => {
                    let i = eE.current;
                    null != e &&
                        null != i &&
                        (eK.default.track(el.HAw.SOUNDMOJI_SELECT, {
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
            tu = nt(eE),
            t_ = r.useCallback(() => eg?.current?.hide(), []),
            { editorHeight: tA, handleResize: th } = ns(k),
            {
                handleTab: tI,
                handleEnter: tp,
                handleMoveSelection: tT,
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
            { expressionPickerView: tg, shouldHideExpressionPicker: tN, handleOuterClick: tR } = no(D, eE, L.id),
            { selectedAutocompleteInputType: tD, selectedAutocompleteInputError: ty } = (function (e, t) {
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
            })(e4, eE),
            { handleAutocompleteVisibilityChange: tM } = nd(D, L.id),
            tP = (function (e) {
                let { type: t, channelId: n } = e;
                return (0, eA.bG)([N.A], () => {
                    let e = N.A.activeViewType();
                    return null != e && e === t && N.A.activeChannelId() === n && N.A.shouldShowPopup();
                }, [t, n]);
            })({ type: D, channelId: L.id }),
            tk = r.useCallback(() => {
                e4.emit("submit-failure");
            }, [e4]);
        (0, eX.R)(e4, L.guild_id, L.id);
        let tF = null != G,
            tV = (eB && !((eG || eV) && e$)) || (e9 && D.submit?.useDisabledStylesOnSubmit),
            tB = null;
        null != eU ? (tB = M?.(eU, ew, tw.g$)) : (!eB || eY) && (tB = b?.(tF, tw.g$));
        let tH = (0, t4.A)({ type: D, textValue: a, maxCharacterCount: $, showRemainingCharsAfterCount: z }),
            tj = e0 && null != l && !eB && D.showCharacterCount && null == eU,
            tW = e0 && !__OVERLAY__ && null != l && null == eU && D.toolbarType !== eQ.O1.NONE && !eB,
            tY = (function (e) {
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
                        null != l && e.push((0, i.jsx)(tU, { pendingScheduledMessage: l })),
                        "timestampMentionInput" === o && r.push((0, i.jsx)(tO, { error: d ?? !1 })),
                        A && e.push((0, i.jsx)(tv, { channelId: t.id })),
                        { stacked: e, floating: r }
                    );
                }, [a, c, u, t, A, s, _, n, l, o, d]);
            })({
                channel: L,
                type: D,
                activeCommand: eU,
                pendingReply: G,
                pendingScheduledMessage: ea,
                selectedAutocompleteInputType: tD,
                selectedAutocompleteInputError: ty,
            }),
            tK = 0 === a.trim().length,
            t$ = null != G ? [X, tl].filter(Boolean).join(" ") : X,
            tJ = D.layout === eQ.wt.INLINE,
            t0 = D.layout === eQ.wt.FLUSH,
            t1 = (0, i.jsx)("div", { ref: eu, className: tw.BW }),
            t2 = tP ? (0, i.jsx)(P, { align: "right", positionTargetRef: eu, channel: L }) : null,
            t3 =
                null != w
                    ? w()
                    : (0, i.jsx)(tx.A, {
                          type: D,
                          disabled: eB,
                          channel: L,
                          handleSubmit: tt,
                          isEmpty: tK,
                          showAllButtons: !eP && !eb,
                          expressionButtonsHidden: eb,
                      }),
            t5 = tj
                ? (0, i.jsx)(tZ.A, {
                      type: D,
                      textValue: a,
                      className: Z,
                      maxCharacterCount: $,
                      showRemainingCharsAfterCount: z,
                  })
                : null;
        return (
            r.useEffect(() => {
                y && ez._.dispatch(el.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: L.id });
            }, [y, L.id]),
            (0, i.jsx)(ef.Sv, {
                value: e4,
                children: (0, i.jsxs)(g.f5, {
                    value: eo,
                    children: [
                        tW && eq
                            ? (0, i.jsx)(t6, { getSlateEditor: eS, onInsertEmoji: ts, type: D, channel: L })
                            : tW
                              ? (0, i.jsx)(tX.A, { ref: eg, getSlateEditor: eS, containerRef: em, options: D.markdown })
                              : null,
                        (0, i.jsxs)("div", {
                            ref: ed,
                            className: s()(o, {
                                [tw.gM]: !0,
                                [tw.Bz]: tH && tj,
                                [tw.h9]: tV,
                                [tw.mr]: W,
                                [tw.Wn]: u.Fr,
                                [tw.Ls]: tJ,
                                [tw.AH]: t0,
                                [tw.z3]: null != v,
                            }),
                            children: [
                                tJ || t0 ? null : (0, i.jsx)(tG, { bars: tY }),
                                (0, i.jsxs)("div", {
                                    ref: em,
                                    onScroll: t_,
                                    className: s()(c, { [tw.xx]: !0, [tw.k6]: !en, [tw.Ri]: tY.stacked.length > 0 }),
                                    children: [
                                        (0, i.jsx)(tE, { channelId: L.id, chatInputType: D }),
                                        D.hideAttachmentArea
                                            ? null
                                            : (0, i.jsx)(tq.A, { channelId: L.id, type: D, canAttachFiles: ej }),
                                        (0, i.jsxs)("div", {
                                            className: s()(tw.vW, {
                                                [tw.BF]: tV,
                                                [tw.RL]: D !== eQ.oU.EDIT && (null != tB || (tV && null == tB) || eG),
                                                [tw.fk]: D === eQ.oU.THREAD_CREATION,
                                                [tw.TZ]:
                                                    D === eQ.oU.CREATE_FORUM_POST || D === eQ.oU.FORWARD_MESSAGE_INPUT,
                                                [tw.$i]: D === eQ.oU.USER_PROFILE_REPLY,
                                            }),
                                            onMouseDown: tR,
                                            children: [
                                                t2,
                                                tB,
                                                (0, i.jsx)(h.vN, {
                                                    ringTarget: ed,
                                                    ringClassName: tw.Rg,
                                                    children: (0, i.jsx)(eJ.A, {
                                                        ref: eE,
                                                        id: A,
                                                        focused: y,
                                                        useSlate: e0,
                                                        textValue: a,
                                                        richValue: l,
                                                        disabled: eB,
                                                        placeholder: R,
                                                        required: f,
                                                        accessibilityLabel: O,
                                                        isPreviewing: (eG || eV) && e$,
                                                        channel: L,
                                                        type: D,
                                                        canPasteFiles: ej,
                                                        uploadPromptCharacterCount: el.CS1,
                                                        maxCharacterCount: $ ?? e2,
                                                        allowNewLines: q,
                                                        "aria-describedby": t$,
                                                        onChange: e8,
                                                        onResize: th,
                                                        onBlur: F,
                                                        onFocus: V,
                                                        onKeyDown: B,
                                                        onSubmit: te,
                                                        onSubmitFailure: tk,
                                                        onTab: tI,
                                                        onEnter: tp,
                                                        onMoveSelection: tT,
                                                        onSelectionChanged: e5,
                                                        onMaybeShowAutocomplete: ti,
                                                        onHideAutocomplete: tr,
                                                        promptToUpload: j,
                                                        fontSize: e3,
                                                        spellcheckEnabled: e6,
                                                        canOnlyUseTextCommands: tF,
                                                        className: s()(
                                                            {
                                                                [tw.QI]: D === eQ.oU.THREAD_CREATION,
                                                                [tw.AV]: D === eQ.oU.PROFILE_BIO_INPUT,
                                                                [tw.GR]: D === eQ.oU.OVERLAY_INLINE_REPLY,
                                                            },
                                                            _,
                                                        ),
                                                        "aria-labelledby": Q,
                                                        showValueWhenDisabled: es,
                                                    }),
                                                }),
                                                t3,
                                                t1,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(tz, { channel: L, type: D, pendingScheduledMessage: ea }),
                                e1 ? null : (0, i.jsx)(e_, { ref: ec, channel: L, canOnlyUseTextCommands: tF }),
                                (0, i.jsx)(eh.A, {
                                    ref: tn,
                                    channel: L,
                                    canMentionRoles: Y,
                                    canMentionChannels: K,
                                    useNewSlashCommands: e0,
                                    canOnlyUseTextCommands: tF,
                                    canSendStickers: D.stickers?.allowSending,
                                    canSendSoundmoji: D.soundmoji?.allowSending,
                                    textValue: a,
                                    focused: y,
                                    expressionPickerView: tg,
                                    type: D,
                                    targetRef: ed,
                                    editorRef: eE,
                                    onSendMessage: te,
                                    onSendSticker: to,
                                    onVisibilityChange: tM,
                                    editorScrollerRef: em,
                                    editorHeight: tA,
                                    barsHeight: 40 * tY.floating.length,
                                    setValue: (e, t) => e8?.(null, e, t),
                                    position: ee,
                                }),
                                (0, i.jsx)(eM, { textValue: a, editorHeight: tA, channelId: L.id }),
                                t5,
                                et,
                            ],
                        }),
                        (0, i.jsx)(I.U, { error: v }),
                        tN
                            ? null
                            : (0, i.jsx)(eT.A, {
                                  positionTargetRef: ed,
                                  type: D,
                                  onSelectGIF: ta,
                                  onSelectEmoji: ts,
                                  onSelectSticker: to,
                                  onSelectSound: tc,
                                  onSelectKaomoji: tu,
                                  channel: L,
                                  closeOnModalOuterClick: ei,
                                  parentModalKey: er,
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
