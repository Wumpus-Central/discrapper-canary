"use strict";
n.d(t, {
    HG: () => nt,
    Sk: () => no,
    C: () => ne,
    v7: () => nr,
    Zx: () => t7,
    L0: () => ns,
    N_: () => nn,
    MD: () => nl,
    Ay: () => nc,
    uW: () => nu,
    NO: () => t9,
    ck: () => na,
    ml: () => ni,
    Vu: () => t8,
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
    h = n(17928),
    f = n(192308),
    E = n(187322),
    p = n(511274),
    m = n(465532),
    g = n(765671),
    A = n(775602),
    I = n(793574),
    T = n(688810),
    S = n(177640),
    N = n(989837),
    C = n(289873),
    y = n(268218),
    O = n(750506),
    R = n(60809),
    v = n(375708),
    b = n(131552);
let L = { width: 500, height: R.$V },
    D = (0, y.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("58846"),
                n.e("99796"),
                n.e("61312"),
                n.e("41831"),
                n.e("87761"),
                n.e("18078"),
                n.e("88429"),
                n.e("42430"),
                n.e("38450"),
                n.e("94539"),
                n.e("10720"),
                n.e("38916"),
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
                n.e("28662"),
                n.e("35313"),
                n.e("54625"),
                n.e("8362"),
                n.e("71133"),
                n.e("76428"),
                n.e("27773"),
                n.e("52229"),
                n.e("18024"),
                n.e("61268"),
                n.e("22261"),
                n.e("78195"),
                n.e("41701"),
                n.e("74021"),
                n.e("83518"),
                n.e("37065"),
                n.e("22094"),
                n.e("61764"),
                n.e("59848"),
                n.e("68974"),
                n.e("56385"),
                n.e("91220"),
                n.e("89203"),
                n.e("35621"),
            ]).then(n.bind(n, 854379)),
        webpackId: 854379,
        renderLoader: () => (0, i.jsx)("div", { className: b.R4, style: L, children: (0, i.jsx)(C.y, {}) }),
    }),
    w = { height: R.$V },
    P = r.memo(function (e) {
        let { positionTargetRef: t, align: n, ...r } = e;
        return (0, i.jsx)("span", {
            style: R.sK,
            children: (0, i.jsx)(O.nE, {
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
                        "aria-label": v.intl.string(v.t["3CNGLK"]),
                        children: t && (0, i.jsx)(D, { ...r }),
                    });
                },
            }),
        });
    });
var M = n(861382),
    x = n(735438),
    U = n.n(x),
    k = n(537652),
    G = n(155718),
    V = n(95561),
    F = n(659280),
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
        h = r.useCallback((e, t) => (t ? 8 * (s[e + 1]?.type !== Z.Hf.BUILT_IN) : 8 * (0 !== e)), [s]),
        f = r.useCallback(
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
                    h = r.type !== Z.Hf.BUILT_IN && t < s.length - 1 && s[t + 1].type === Z.Hf.BUILT_IN;
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
                            h ? (0, i.jsx)("hr", { className: en.zQ }) : null,
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
                  store: W.LS,
                  categories: s,
                  className: en.p_,
                  renderCategoryListItem: f,
                  rowCount: s.length,
                  categoryHeight: _,
                  listPadding: ei,
                  getScrollOffsetForIndex: h,
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
        (0, V.zV)(eo.HAw.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300),
    e_ = r.forwardRef(function (e, t) {
        let { channel: n, canOnlyUseTextCommands: s } = e,
            o = r.useRef(!1),
            l = r.useRef(0),
            [u, c] = r.useState(0),
            d = r.useRef(null),
            [_, h] = r.useState(!1),
            f = W.LS.useStore((e) => e.activeCategoryIndex);
        r.useEffect(() => {
            (0, V.zV)(eo.HAw.APPLICATION_COMMAND_BROWSER_OPENED);
        }, []);
        let {
                sectionDescriptors: E,
                activeSections: p,
                commandsByActiveSection: m,
                hasMoreAfter: g,
                commands: A,
                filteredSectionId: I,
                scrollDown: T,
                filterSection: S,
            } = z.cu({
                context: { channel: n, type: "channel" },
                filters: {
                    commandTypes: [G.kc.CHAT],
                    builtIns: s ? q.n.ONLY_TEXT : q.n.ALLOW,
                    applicationCommands: !s,
                },
                options: { placeholderCount: 7, limit: ea.Hi, includeFrecency: !0 },
                allowFetch: !0,
            }),
            N = (0, Y.Fk)({
                activeCategoryIndex: f,
                isScrolling: o,
                listRef: d,
                onActiveCategoryIndexChange: (e) => {
                    let t = p[e];
                    if (null != t) {
                        let e = E.findIndex((e) => e.id === t.id);
                        W.LS.setActiveCategoryIndex(e);
                    }
                },
                scrollOffset: 20,
                searchQuery: "",
            }),
            C = (e) => {
                let t = p.length,
                    n = m.reduce((e, t) => e + t.data.length, 0) - 7 * !!g;
                g && e + 420 > 48 * t + 56 * n - 512 && T(), N(e), ed(), (l.current = e);
            },
            y = r.useRef(C);
        r.useEffect(() => {
            y.current = C;
        }),
            r.useEffect(() => {
                y.current(l.current);
            }, [A]);
        let O = r.useCallback((e) => (e !== p.length - 1 || g ? 16 : 0), [p.length, g]),
            R = m.map((e) => e.data.length);
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
            L = r.useCallback(
                (e, t, i) => {
                    $.Gf({ channelId: n.id, command: e, section: t, location: Z.Oh.DISCOVERY, triggerSection: i });
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
                                i = E.find((e) => e.id === n.applicationId);
                            L(n, i, (0, X.$S)(e.section));
                            break;
                        }
                    return !0;
                },
                onMoveSelection: (e) => {
                    if (0 === A.length) return !0;
                    let t = 7 * !!g,
                        n = A.length + t,
                        i = null == u ? 0 : u + e;
                    return i >= n ? (i = n - 1) : i < 0 && (i = 0), c(i), h(!0), !0;
                },
            }),
            [A.length, m, g, E, L, u],
        );
        let D = r.useCallback(
                (e) => {
                    let t = p[e];
                    if (null == t) return null;
                    let r = (0, et.Rg)(t),
                        s = (0, i.jsx)(r, { channel: n, section: t, width: 16, height: 16, padding: 0 });
                    return (0, i.jsx)(K.A, { className: el.Km, icon: s, children: t.name }, e);
                },
                [n, p],
            ),
            w = r.useCallback(
                (e, t) => {
                    let n = e === p.length - 1,
                        r = p[e],
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
                                        message: v.intl.format(v.t.WoQXT6, { applicationName: r.name }),
                                        noResultsImageURL: eu,
                                        className: el.qK,
                                    }),
                            ],
                        },
                        e,
                    );
                },
                [p, m],
            ),
            P = r.useCallback(
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
                    let o = E.find((e) => e.id === s.applicationId);
                    return (0, i.jsx)(
                        F.Ay.NewCommand,
                        {
                            index: e,
                            command: s,
                            channel: n,
                            className: el.D5,
                            selected: u === e,
                            showImage: r.section.id !== s.applicationId,
                            section: o,
                            onClick: () => L(s, o, (0, X.$S)(r.section)),
                            onHover: () => {
                                c(null), h(!1);
                            },
                        },
                        a,
                    );
                },
                [n, m, L, E, u],
            ),
            M = (0, j.GV)();
        return (
            (0, B.gf)(M, !0, (0, F.aI)(u)),
            r.useEffect(
                () => () => {
                    (0, B.nQ)();
                },
                [],
            ),
            (0, i.jsxs)(F.Ay, {
                id: M,
                className: el.x9,
                innerClassName: el.iE,
                onMouseDown: eh,
                children: [
                    (0, i.jsx)(er, {
                        className: el.H$,
                        channel: n,
                        sections: E,
                        filteredSectionId: I,
                        activeCategoryIndex: f,
                        onSectionClick: b,
                        applicationCommandListRef: d,
                    }),
                    (0, i.jsx)(H.A, {
                        role: "listbox",
                        className: el.p_,
                        listPadding: ec,
                        onScroll: C,
                        renderRow: P,
                        renderSection: w,
                        renderSectionHeader: D,
                        rowCount: p.length,
                        rowCountBySection: R,
                        rowHeight: 56,
                        sectionHeaderHeight: 32,
                        sectionMarginBottom: O,
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
var ef = n(702841),
    eE = n(305070),
    ep = n(31498),
    em = n(598071),
    eg = n(151271),
    eA = n(731231),
    eI = n(256265),
    eT = n(703244),
    eS = n(857071),
    eN = n(135621),
    eC = n(105330),
    ey = n(280450),
    eO = n(559908),
    eR = n(620141),
    ev = n(224964),
    eb = n(31408),
    eL = n(536283);
function eD(e) {
    let { editorHeight: t, textValue: n, channelId: i } = e,
        s = r.useRef(n),
        a = (0, eC.l)({ editorHeight: t }),
        o = (0, ev.A)(),
        l = (0, h.bG)([eO.Ay, ey.default], () => eO.Ay.isComboing(ey.default.getId(), i)),
        u = a?.left ?? 0,
        c = (a?.top ?? 0) - 16,
        d = 0 === n.length,
        _ = r.useMemo(() => 0.05 > Math.random(), [d]);
    return (
        r.useEffect(() => {
            0 !== n.length && n !== s.current && l && (o.fire(u, c, _ ? { sprite: eL.dR } : null), (s.current = n));
        }, [n, l, u, c, _, o]),
        null
    );
}
function ew(e) {
    return (0, i.jsx)(eR.A, { confettiLocation: eb.k.CHAT_INPUT, children: (0, i.jsx)(eD, { ...e }) });
}
var eP = n(931664),
    eM = n(631576),
    ex = n(68935),
    eU = n(406704),
    ek = n(885386),
    eG = n(951260),
    eV = n(696451),
    eF = n(576705),
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
    tr = n(630816);
function ts(e) {
    let { onClick: t, "aria-label": n } = e;
    return (0, i.jsx)(J.D, {
        className: tr.b,
        onClick: t,
        "aria-label": n,
        children: (0, i.jsx)(ti.a, { size: "md", color: "currentColor", className: tr.u }),
    });
}
var ta = n(1468);
let to = "channel-reply-bar-a11y-description";
function tl(e) {
    let { channel: t, message: n, replyChainLength: s } = e,
        a = r.useRef(s);
    return (
        r.useEffect(() => {
            a.current = s;
        }),
        r.useEffect(() => {
            (0, V.zV)(eo.HAw.THREAD_NUDGE_SHOWN, {
                type: "Reply Chain (3)",
                reply_chain_length: a.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t]),
        (0, i.jsxs)(J.D, {
            onClick: function () {
                (0, e9.Jx)(t.id), (0, tt.Tv)(t, n, "Reply Chain Nudge");
            },
            className: ta._r,
            focusProps: { offset: { right: -4, left: -4 } },
            children: [
                (0, i.jsx)(e0.E, {
                    color: "text-default",
                    className: ta.Qq,
                    variant: "text-sm/normal",
                    children: v.intl.format(v.t.B3V0FM, { count: Math.min(10, s + 1) }),
                }),
                (0, i.jsx)(e0.E, {
                    color: "text-link",
                    className: ta.NG,
                    variant: "text-sm/semibold",
                    children: v.intl.string(v.t.rBIGBL),
                }),
            ],
        })
    );
}
function tu(e) {
    let t,
        n,
        { reply: s, chatInputType: o } = e,
        { channel: l, message: u, shouldMention: c, showMentionToggle: d, mediaMention: _ } = s,
        {
            guildId: f,
            nick: E,
            colorString: p,
            colorStrings: m,
            colorRoleName: g,
            authorId: A,
            displayNameStyles: I,
        } = (0, e7.Ay)(u),
        T = (0, e8.gn)(f, A, m),
        S = (0, e4.a)({ displayNameStyles: I }),
        N = (0, e5.A)(_, u.attachments),
        C =
            ((t = l.id),
            (n = u.id),
            (0, h.bG)([tn.A], () => {
                let e = n;
                for (let n = 0; n < 10; n++) {
                    let i = tn.A.getMessage(t, e);
                    if (i?.type !== eo.lAJ.REPLY || null == i.messageReference) return n;
                    e = i.messageReference.message_id;
                }
                return 10;
            }, [t, n])),
        y = (0, eU.n)(l, u),
        O = o.showThreadPromptOnReply && C >= 2 && y;
    return (0, i.jsx)("div", {
        className: ta.e1,
        children: (0, i.jsxs)("div", {
            className: ta.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: ta.eU,
                    children: [
                        (0, i.jsx)(e1.A, { id: to, children: v.intl.formatToPlainString(v.t.EpJL4E, { username: E }) }),
                        (0, i.jsx)(J.D, {
                            onClick: function () {
                                return (0, te.pX)(eo.BVt.CHANNEL(l.getGuildId(), l.id, u.id));
                            },
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, i.jsx)(e0.E, {
                                color: "text-default",
                                className: a()(ta.Qq, ta.Fn),
                                variant: "text-sm/normal",
                                children: v.intl.format(v.t["8E4GxS"], {
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
                                                                      (0, i.jsx)(e2.x, {
                                                                          size: "xs",
                                                                          color: "currentColor",
                                                                          className: ta.gS,
                                                                      }),
                                                                  (0, i.jsx)(e0.E, {
                                                                      variant: "text-sm/semibold",
                                                                      color: "text-default",
                                                                      className: ta.NV,
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
                                                              className: ta.UU,
                                                              name: E,
                                                              colorString: p,
                                                              colorStrings: T,
                                                              roleName: g,
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
                                d &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(Q.m, {
                                                asContainer: !0,
                                                text: c ? v.intl.string(v.t.DH2o6R) : v.intl.string(v.t.utGGIY),
                                                children: (0, i.jsx)(J.D, {
                                                    role: "switch",
                                                    "aria-checked": c,
                                                    onClick: function (e) {
                                                        e.stopPropagation(), (0, e9.vz)(l.id, !c);
                                                    },
                                                    children: (0, i.jsxs)(e0.E, {
                                                        variant: "text-sm/bold",
                                                        color: c ? "text-link" : "text-muted",
                                                        className: ta.Z4,
                                                        children: [
                                                            (0, i.jsx)(e6.X, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": v.intl.string(v.t.P8tvKG),
                                                                className: ta.mM,
                                                            }),
                                                            c ? v.intl.string(v.t.p9jC2r) : v.intl.string(v.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, i.jsx)("div", { className: ta.me, "aria-hidden": !0 }),
                                        ],
                                    }),
                                (0, i.jsx)(ts, {
                                    onClick: function (e) {
                                        e.stopPropagation(), (0, e9.Jx)(l.id);
                                    },
                                    "aria-label": v.intl.string(v.t.jSnJGT),
                                }),
                            ],
                        }),
                    ],
                }),
                O && (0, i.jsx)(tl, { channel: l, message: u, replyChainLength: C }),
            ],
        }),
    });
}
var tc = n(749314),
    td = n(148355),
    t_ = n(74995);
let th = r.memo(function (e) {
    let { channelId: t, chatInputType: n } = e,
        [s, a] = r.useState(null),
        o = (0, h.bG)([eP.A], () => eP.A.getStickerPreview(t, n.drafts.type));
    return n.stickers?.allowSending && null != o && 0 !== o.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("div", {
                      className: t_.Tz,
                      children: o.map((e) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: t_.dp,
                                  children: [
                                      (0, i.jsx)(J.D, {
                                          onFocus: () => a(e.id),
                                          onBlur: () => a(null),
                                          className: t_.b,
                                          "aria-label": v.intl.formatToPlainString(v.t.BGAQRd, { name: e.name }),
                                          onClick: () => (0, eM.x5)(t, n.drafts.type),
                                          children: (0, i.jsx)("div", {
                                              className: t_.Nk,
                                              children: (0, i.jsx)(ti.a, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: t_.ut,
                                              }),
                                          }),
                                      }),
                                      (0, i.jsx)(td.A, {
                                          isInteracting: s === e.id,
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
var tf = n(612394);
n(321073);
var tE = n(442433);
n(827669);
var tp = n(448702);
function tm(e) {
    let t,
        s,
        o,
        { className: l, activeCommand: u, activeOption: c, optionStates: d, channelId: _ } = e,
        h = r.useCallback(
            (e) => {
                let t = u?.rootCommand?.id;
                null == t
                    ? e.preventDefault()
                    : (0, tE.L3)(e, async () => {
                          let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                          return (n) => (0, i.jsx)(e, { ...n, id: t, label: v.intl.string(v.t.oJ1Muw) });
                      });
            },
            [u?.rootCommand?.id],
        ),
        f = r.useCallback(() => {
            $.Gf({ channelId: _, command: null, section: null });
        }, [_]);
    if (null == u) return null;
    if (null != c) {
        let e = d[c.name].lastValidationResult;
        (t = c.displayName), (s = c.displayDescription), (o = e?.success ? null : e?.error);
    } else (t = `/${u.displayName}`), (s = u.displayDescription), (o = null);
    return (0, i.jsxs)("div", {
        className: a()(l, tp.M0),
        onContextMenu: h,
        children: [
            (0, i.jsxs)("div", {
                className: tp.iz,
                children: [
                    (0, i.jsx)(e0.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        tag: "span",
                        children: t,
                    }),
                    null != o
                        ? (0, i.jsx)("span", { className: tp.z3, children: o })
                        : (0, i.jsx)("span", { className: tp.h_, children: s }),
                ],
            }),
            (0, i.jsx)("div", {
                className: tp.o1,
                children: (0, i.jsx)(ts, { onClick: f, "aria-label": v.intl.string(v.t.cpT0Cq) }),
            }),
        ],
    });
}
var tg = n(228366),
    tA = n(734057);
let tI = new Set();
class tT extends h.Ay.PersistedStore {
    static displayName = "PTOStore";
    static persistKey = "PTOStore";
    initialize(e) {
        this.waitFor(tA.A, eV.Ay, eB.A, eW.default), null != e && (tI = new Set(e));
    }
    hasId(e) {
        return tI.has(e);
    }
    getState() {
        return [...tI];
    }
}
let tS = new tT(tg.h, {});
function tN() {
    let e = eB.A.getChannelId();
    if (null == e) return;
    let t = tA.A.getChannel(e);
    null != t && t.isPrivate() && (tI.has(t.getRecipientId()) || (tI.add(t.getRecipientId()), tS.emitChange()));
}
function tC() {
    return (0, i.jsxs)("div", {
        className: ta.eU,
        children: [
            (0, i.jsx)(e0.E, {
                variant: "text-sm/medium",
                className: a()(ta.Qq, ta.Fn),
                children: v.intl.string(v.t["2UvR1E"]),
            }),
            (0, i.jsx)("div", {
                className: ta.o1,
                children: (0, i.jsx)(ts, { onClick: tN, "aria-label": v.intl.string(v.t.cpT0Cq) }),
            }),
        ],
    });
}
var ty = n(278351);
function tO(e) {
    let { error: t } = e;
    return (0, i.jsxs)("div", {
        className: ty.M,
        children: [
            (0, i.jsx)(e0.E, { variant: "text-xs/bold", color: "text-strong", children: v.intl.string(v.t["4VDCG0"]) }),
            t
                ? (0, i.jsx)(e0.E, { variant: "text-xs/medium", className: ty.z, children: v.intl.string(v.t.qNorwt) })
                : (0, i.jsx)(e0.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: v.intl.string(v.t["260qZS"]),
                  }),
        ],
    });
}
var tR = n(25201),
    tv = n(926321),
    tb = n(221933);
function tL(e) {
    var t, n;
    let { channelId: r } = e,
        s = (0, tR.vR)(r);
    if (null == s) return null;
    let o = s.rolling,
        l =
            ((t = o),
            (n = s.results),
            t
                ? v.intl.string(v.t["x/FIRX"])
                : null == n
                  ? ""
                  : v.intl.formatToPlainString(v.t.xU4pF1, { total: n.reduce((e, t) => e + t, 0) }));
    return (0, i.jsx)("div", {
        className: a()(tb.kL, { [tb.Kd]: !s.dismissing }),
        children: (0, i.jsxs)("div", {
            className: tb.Qs,
            children: [
                (0, i.jsx)(tv.j, { size: "md", className: a()({ [tb.su]: o }) }),
                (0, i.jsx)(e0.E, { color: "text-default", variant: "text-sm/normal", children: l }),
            ],
        }),
    });
}
var tD = n(575293),
    tw = n(151282),
    tP = n(1372);
function tM(e) {
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
                        className: a()(tP.Qq, tP.a3),
                        variant: "text-sm/normal",
                        children: v.intl.formatToPlainString(v.t["MQcRX/"], { timestamp: new Date(r).valueOf() }),
                    }),
                    (0, i.jsx)("div", {
                        className: tP.o1,
                        children: (0, i.jsx)(ts, {
                            onClick: function (e) {
                                e.stopPropagation(), (0, tw.Ps)(n);
                            },
                            "aria-label": v.intl.string(v.t.cpT0Cq),
                        }),
                    }),
                ],
            }),
        }),
    });
}
var tx = n(266599);
function tU(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, i.jsx)("div", { children: e }, t)),
        s = t.floating.map((e, t) => (0, i.jsx)(r.Fragment, { children: e }, t));
    return 0 === n.length && 0 === s.length
        ? null
        : (0, i.jsxs)(r.Fragment, {
              children: [
                  s.length > 0 && (0, i.jsx)("div", { className: tx.Vq, children: s }),
                  n.length > 0 && (0, i.jsx)("div", { className: tx.MD, children: n }),
              ],
          });
}
var tk = n(123583),
    tG = n(562708),
    tV = n(150934),
    tF = n(139286),
    tB = n(47167),
    tH = n(713654),
    tj = n(252263),
    tW = n(8455),
    tY = n(67259),
    tK = n(355026);
function t$(e) {
    let { thread: t, pendingScheduledMessage: n } = e,
        s = (0, tW.Vp)({ location: "ThreadsAlsoSendToChannelArea" }),
        [a, o] = (0, h.yK)([tA.A, tY.A], () => [
            t.isThread() ? tA.A.getChannel(t.parent_id) : null,
            tY.A.getAlsoSendToChannel(t.id),
        ]),
        l = (0, tB.Ay)(a),
        u = r.useCallback(
            (e) => {
                eK.default.track(eo.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_TOGGLED, {
                    value: e,
                    guild_id: t.guild_id,
                    channel_id: t.id,
                }),
                    (0, tj.B)({ channelId: t.id, enabled: e });
            },
            [t],
        );
    if (
        ((0, tF.A)(
            { name: tG.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL, type: tG.ImpressionTypes.VIEW },
            { disableTrack: null == a || !s.enabled },
            [a, s.enabled],
        ),
        !s.enabled || null == a)
    )
        return null;
    let c = (0, tH.gU)(a),
        d = v.intl.format(v.t.UqL10G, {
            callToActionHook: (e, t) =>
                (0, i.jsx)(
                    e0.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: tK.Pf,
                        children: v.intl.string(v.t.Pi3JW7),
                    },
                    t,
                ),
            channelName: l,
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
        children: (0, i.jsx)(tV.S, { checked: o, disabled: null != n, onChange: u, label: d, labelType: "secondary" }),
    });
}
function tz(e) {
    let { channel: t, type: n, pendingScheduledMessage: r } = e,
        { shouldShow: s } = (function (e) {
            let { channel: t, type: n } = e,
                i = (0, h.bG)([tA.A], () => {
                    let e = tA.A.getChannel(t.parent_id);
                    return e?.isForumLikeChannel() ?? !1;
                }),
                r = [eQ.oU.NORMAL, eQ.oU.SIDEBAR].includes(n);
            return { shouldShow: t.isThread() && !i && r };
        })({ channel: t, type: n });
    return s ? (0, i.jsx)(t$, { thread: t, pendingScheduledMessage: r }) : null;
}
var tq = n(822610),
    tZ = n(625928),
    tX = n(135261),
    tQ = n(820066),
    tJ = n(922016),
    t0 = n(375499),
    t1 = n(334295),
    t2 = n(307731),
    t3 = n(128934);
function t6(e) {
    let { getSlateEditor: t, onInsertEmoji: n, type: s, channel: a } = e,
        o = t(),
        l = r.useRef(null);
    return null == o
        ? null
        : (0, i.jsxs)("div", {
              id: "slate-toolbar",
              className: t3.aL,
              children: [
                  (0, i.jsx)("div", {
                      className: t3.Wy,
                      children: (0, i.jsx)(tX.P, {
                          slateEditor: o,
                          options: s.markdown,
                          iconClassName: t3.C7,
                          dividerClassName: t3.us,
                      }),
                  }),
                  (0, i.jsx)(tJ.Y, {
                      targetElementRef: l,
                      renderPopout: function (e) {
                          let { closePopout: t } = e;
                          return (0, i.jsx)(t1.A, {
                              persistSearch: !0,
                              channel: a,
                              closePopout: t,
                              onSelectEmoji: (e) => {
                                  let { emoji: i, willClose: r } = e;
                                  n({ emoji: i, willClose: r }), r && t();
                              },
                              pickerIntention:
                                  s.expressionPicker?.emojiIntention ?? t2.EmojiIntention.COMMUNITY_CONTENT,
                          });
                      },
                      position: "bottom",
                      animation: tJ.Y.Animation.NONE,
                      align: "left",
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, i.jsx)(t0.A, { ...e, ref: l, active: n, className: t3.Z8, tabIndex: 0 });
                      },
                  }),
              ],
          });
}
var t4 = n(263582),
    t5 = n(698279);
function t7(e, t, s, a, o) {
    let [l, u] = r.useState(!1),
        c = r.useCallback(
            (r, d, _, h, E, p) => {
                if (l) return;
                u(!0);
                let g = eP.A.getStickerPreview(o, t.drafts.type)?.map((e) => e.id) ?? [],
                    A = ej.A.getUploads(o, t.drafts.type) ?? [];
                if (null == d && !h && !E && (0, eI.xz)(A, o)) {
                    u(!1),
                        (0, f.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("41185"),
                                n.e("68316"),
                                n.e("37502"),
                                n.e("67454"),
                                n.e("37634"),
                                n.e("21194"),
                                n.e("62279"),
                                n.e("42157"),
                                n.e("83314"),
                                n.e("39328"),
                                n.e("64801"),
                                n.e("12815"),
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
                                n.e("33097"),
                                n.e("36150"),
                                n.e("99011"),
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
                    isGif: h,
                    gifMetadata: p,
                }).then((e) => {
                    let { shouldClear: n, shouldRefocus: i } = e,
                        r = (n && t.submit?.clearOnSubmit) ?? !1,
                        l = null != s.current;
                    r &&
                        (o !== eB.A.getChannelId()
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
function t8(e, t, n) {
    return r.useCallback(
        (i) => {
            if (t === eQ.oU.CREATE_FORUM_POST || t === eQ.oU.CREATE_ANNOUNCEMENT_POST) n.current?.insertGIF(i);
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
function t9(e) {
    return r.useCallback(
        (t) => {
            let { emoji: n, willClose: i } = t,
                r = e.current;
            null != n && null != r && r.insertEmoji({ emoji: n, willClose: i }), i && (0, eg.v8)();
        },
        [e],
    );
}
function ne(e) {
    let { editorRef: t, disabled: n, textValue: i, channelId: s, chatInputType: a, submit: o } = e,
        { analyticsLocations: l } = (0, T.Ay)();
    return r.useCallback(
        (e, r) => {
            n ||
                (a === eQ.oU.CREATE_ANNOUNCEMENT_POST || (0, ex.YS)(r, i, s, a.drafts.type)
                    ? ((0, tf.fh)({
                          sticker: e,
                          stickerSelectLocation: r,
                          isReplacement: null != eP.A.getStickerPreview(s, a.drafts.type),
                          analyticsLocations: l,
                      }),
                      (0, eM.$x)(s, e, a.drafts.type))
                    : (o({ value: "", uploads: void 0, stickers: [e.id] }), t.current?.clearValue()),
                (0, eg.v8)(),
                t.current?.focus());
        },
        [n, i, s, t, l, o, a],
    );
}
function nt(e) {
    return r.useCallback(
        (t) => {
            let n = e.current;
            null != n && n.insertKaomoji(t), (0, eg.v8)(), n?.focus();
        },
        [e],
    );
}
function nn(e, t, n) {
    let i = r.useCallback(() => {
            t || (0, eg.r$)(t5.kx.EMOJI, e, n);
        }, [t, e, n]),
        s = r.useCallback(() => {
            !t && e.gifs?.allowSending && (0, eg.r$)(t5.kx.GIF, e, n);
        }, [t, e, n]),
        a = r.useCallback(() => {
            !t && e.stickers?.allowSending && (0, eg.r$)(t5.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, e$.Vo)({ event: eo.jej.TOGGLE_EMOJI_POPOUT, handler: i }),
        (0, e$.Vo)({ event: eo.jej.TOGGLE_GIF_PICKER, handler: s }),
        (0, e$.Vo)({ event: eo.jej.TOGGLE_STICKER_PICKER, handler: a });
}
function ni(e, t, n) {
    let [i] = r.useState(() => new o.EventEmitter());
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
function ns(e) {
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
function no(e, t, n, i) {
    let r = e.getGuildId(),
        s = (0, h.bG)([eS.A], () => null != r && eS.A.isLurking(r), [r]),
        a = (0, h.bG)([eV.Ay, eW.default], () => {
            let e = eW.default.getCurrentUser();
            return (null != r && null != e ? eV.Ay.getMember(r, e.id)?.isPending : null) ?? !1;
        }),
        o = (0, h.cf)([eF.A], () => {
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
                canEveryoneSendMessages: eq.MJ(eo.xBc.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, i, a]);
    return { isLurking: s, isPendingMember: a, ...o };
}
function nl(e, t, n) {
    let [i, s, a] = (0, eg.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], c.x),
        o = (0, h.bG)([N.A], () => N.A.shouldShowPopup() && N.A.activeViewType() === e && N.A.activeChannelId() === n);
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
function nu(e, t) {
    return {
        handleAutocompleteVisibilityChange: r.useCallback(
            (n) => {
                n && (0, eg.v8)(e, t);
            },
            [e, t],
        ),
    };
}
let nc = r.memo(
    r.forwardRef(function (e, t) {
        let n,
            {
                textValue: s,
                richValue: o,
                className: l,
                innerClassName: c,
                editorClassName: _,
                id: f,
                required: m,
                disabled: C,
                placeholder: y,
                accessibilityLabel: O,
                channel: R,
                type: v,
                focused: b,
                error: L,
                renderAttachButton: D,
                renderApplicationCommandIcon: w,
                renderButtons: x,
                pendingReply: U,
                onChange: k,
                onResize: G,
                onBlur: V,
                onFocus: F,
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
                pendingScheduledMessage: es,
                showValueWhenDisabled: ea = !1,
            } = e;
        u()(null != v, "chat input type must be set");
        let { analyticsLocations: el } = (0, T.Ay)(I.A.CHANNEL_TEXT_AREA),
            eu = ns(t),
            ec = r.useRef(null),
            ed = r.useRef(null),
            eh = r.useRef(null),
            eI = r.useRef(null),
            eT = r.useRef(null),
            eS = r.useCallback(() => eh.current?.getSlateEditor() ?? null, []);
        J?.(eh.current);
        let eC = (0, S.A)(R),
            ey = (0, eG.n)("ChannelTextAreaContainer"),
            eO = (0, h.cf)([A.Ay], () => ({
                expressionPickerFormat: A.Ay.expressionPickerFormat,
                condensePickerWhenNarrow: A.Ay.condensePickerWhenNarrow,
            })),
            eR = ey ? eO.expressionPickerFormat : A.IG.FLEXIBLE,
            ev = !ey || eO.condensePickerWhenNarrow,
            [eb, eL] = r.useState(!eC);
        (0, g.i4)(eu, (e) => {
            let { width: t } = e;
            return eL(!eC && (null == t || t > 450));
        });
        let eD = eR === A.IG.HIDDEN,
            eP = eR === A.IG.CONDENSED || (eR === A.IG.FLEXIBLE && ev && !eb),
            { activeCommand: eM, activeCommandSection: ex } = (0, h.cf)([M.A], () => ({
                activeCommand: v.commands?.enabled ? M.A.getActiveCommand(R.id) : null,
                activeCommandSection: v.commands?.enabled ? M.A.getActiveCommandSection(R.id) : null,
            })),
            {
                isLurking: eU,
                isPendingMember: eF,
                disabled: eB,
                canAttachFiles: ej,
                canCreateThreads: eY,
                canEveryoneSendMessages: e$,
            } = no(R, v, eM, C),
            eq = v.toolbarType === eQ.O1.STATIC,
            e0 = !ek.D_.useSetting() && !(0, eZ.isAndroidWeb)() && null != window.ResizeObserver,
            e1 = !e0 || !v.commands?.enabled || !b || "/" !== s,
            e2 = (0, eN.A)(),
            { fontSize: e3 } = (0, h.cf)([A.Ay], () => ({ fontSize: A.Ay.fontSize })),
            e6 = (0, h.bG)([eH.A], () => eH.A.isEnabled());
        nn(v, eB, R.id);
        let { eventEmitter: e4, handleEditorSelectionChanged: e5 } = ni(eh, s, o),
            e7 = r.useRef(s);
        e7.current = s;
        let e8 = r.useCallback(
                (e, t, n) => {
                    "/" === t && "" === e7.current && v.commands?.enabled && e4.emit("command-sentinel-typed"),
                        k?.(e, t, n);
                },
                [k, v.commands?.enabled, e4],
            ),
            { submitting: e9, submit: te, handleSubmit: tt } = t7(H, v, eh, eT, R.id),
            { autocompleteRef: tn, handleMaybeShowAutocomplete: ti, handleHideAutocomplete: tr } = nr(),
            ts = t8(te, v, eh),
            ta = t9(eh),
            tl = ne({ editorRef: eh, disabled: eB, textValue: s, channelId: R.id, chatInputType: v, submit: H }),
            tc = r.useCallback(
                (e, t, n) => {
                    let i = eh.current;
                    null != e &&
                        null != i &&
                        (eK.default.track(eo.HAw.SOUNDMOJI_SELECT, {
                            channel_id: R.id,
                            guild_id: R.guild_id,
                            sound_guild_id: e.guildId,
                            sound_id: e.soundId,
                            source: t,
                        }),
                        i.insertSound(e)),
                        n && (0, eg.v8)(),
                        i?.focus();
                },
                [eh, R.id, R.guild_id],
            ),
            td = nt(eh),
            t_ = r.useCallback(() => eT?.current?.hide(), []),
            { editorHeight: tf, handleResize: tE } = na(G),
            {
                handleTab: tp,
                handleEnter: tg,
                handleMoveSelection: tA,
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
            { expressionPickerView: tT, shouldHideExpressionPicker: tN, handleOuterClick: ty } = nl(v, eh, R.id),
            { selectedAutocompleteInputType: tv, selectedAutocompleteInputError: tb } = (function (e, t) {
                let [n, i] = r.useState({ selectedAutocompleteInputType: null, selectedAutocompleteInputError: !1 }),
                    s = r.useCallback(() => {
                        let e,
                            n = t.current?.getSlateEditor();
                        null != n && (e = tQ.VW.getSelectedParentOfType(n, ep.mk)?.[0]),
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
            })(e4, eh),
            { handleAutocompleteVisibilityChange: tw } = nu(v, R.id),
            tP = (function (e) {
                let { type: t, channelId: n } = e;
                return (0, ef.bG)([N.A], () => {
                    let e = N.A.activeViewType();
                    return null != e && e === t && N.A.activeChannelId() === n && N.A.shouldShowPopup();
                }, [t, n]);
            })({ type: v, channelId: R.id }),
            tG = r.useCallback(() => {
                e4.emit("submit-failure");
            }, [e4]);
        (0, eX.R)(e4, R.guild_id, R.id);
        let tV = null != U,
            tF = (eB && !((eU || eF) && e$)) || (e9 && v.submit?.useDisabledStylesOnSubmit),
            tB = null;
        null != eM ? (tB = w?.(eM, ex, tx.g$)) : (!eB || eY) && (tB = D?.(tV, tx.g$));
        let tH = (0, t4.A)({ type: v, textValue: s, maxCharacterCount: $, showRemainingCharsAfterCount: z }),
            tj = e0 && null != o && !eB && v.showCharacterCount && null == eM,
            tW = e0 && !__OVERLAY__ && null != o && null == eM && v.toolbarType !== eQ.O1.NONE && !eB,
            tY = (function (e) {
                let {
                        channel: t,
                        type: n,
                        activeCommand: s,
                        pendingReply: a,
                        pendingScheduledMessage: o,
                        selectedAutocompleteInputType: l,
                        selectedAutocompleteInputError: u,
                    } = e,
                    { activeCommandOption: c, activeCommandOptionStates: d } = (0, h.cf)([M.A], () => ({
                        activeCommandOption: M.A.getActiveOption(t.id),
                        activeCommandOptionStates: M.A.getOptionStates(t.id),
                    })),
                    _ = (0, h.bG)([eV.Ay, eW.default, tS], () => {
                        let e = eW.default.getCurrentUser();
                        if (null == e || !e.isStaff() || !t.isDM()) return !1;
                        let n = eW.default.getUser(t.getRecipientId());
                        if (!n?.isStaff()) return !1;
                        let i = eV.Ay.getNicknames(n.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
                        return i ? !tS.hasId(n.id) && i : (tI.delete(n.id) && tS.emitChange(), !1);
                    }),
                    f = (0, tR.Ay)((e) => e.channelId === t.id);
                return r.useMemo(() => {
                    let e = [],
                        r = [];
                    return (
                        null != t.guild_id &&
                            n === eQ.oU.NORMAL &&
                            r.push((0, i.jsx)(tD.A, { guildId: t.guild_id, channel: t, className: tx.UW })),
                        null != s &&
                            e.push(
                                (0, i.jsx)(tm, {
                                    activeCommand: s,
                                    activeOption: c ?? null,
                                    optionStates: d,
                                    channelId: t.id,
                                }),
                            ),
                        null != a && e.push((0, i.jsx)(tu, { reply: a, chatInputType: n })),
                        _ && e.push((0, i.jsx)(tC, {})),
                        null != o && e.push((0, i.jsx)(tM, { pendingScheduledMessage: o })),
                        "timestampMentionInput" === l && r.push((0, i.jsx)(tO, { error: u ?? !1 })),
                        f && e.push((0, i.jsx)(tL, { channelId: t.id })),
                        { stacked: e, floating: r }
                    );
                }, [s, c, d, t, f, a, _, n, o, l, u]);
            })({
                channel: R,
                type: v,
                activeCommand: eM,
                pendingReply: U,
                pendingScheduledMessage: es,
                selectedAutocompleteInputType: tv,
                selectedAutocompleteInputError: tb,
            }),
            tK = 0 === s.trim().length,
            t$ = null != U ? [X, to].filter(Boolean).join(" ") : X,
            tJ = v.layout === eQ.wt.INLINE,
            t0 = v.layout === eQ.wt.FLUSH,
            t1 = (0, i.jsx)("div", { ref: ed, className: tx.BW }),
            t2 = tP ? (0, i.jsx)(P, { align: "right", positionTargetRef: ed, channel: R }) : null,
            t3 =
                null != x
                    ? x()
                    : (0, i.jsx)(tk.A, {
                          type: v,
                          disabled: eB,
                          channel: R,
                          handleSubmit: tt,
                          isEmpty: tK,
                          showAllButtons: !eP && !eD,
                          expressionButtonsHidden: eD,
                      }),
            t5 = tj
                ? (0, i.jsx)(tZ.A, {
                      type: v,
                      textValue: s,
                      className: Z,
                      maxCharacterCount: $,
                      showRemainingCharsAfterCount: z,
                  })
                : null;
        return (
            r.useEffect(() => {
                b && ez._.dispatch(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: R.id });
            }, [b, R.id]),
            (0, i.jsx)(em.Sv, {
                value: e4,
                children: (0, i.jsxs)(T.f5, {
                    value: el,
                    children: [
                        tW && eq
                            ? (0, i.jsx)(t6, { getSlateEditor: eS, onInsertEmoji: ta, type: v, channel: R })
                            : tW
                              ? (0, i.jsx)(tX.A, { ref: eT, getSlateEditor: eS, containerRef: eI, options: v.markdown })
                              : null,
                        (0, i.jsxs)("div", {
                            ref: eu,
                            className: a()(l, {
                                [tx.gM]: !0,
                                [tx.Bz]: tH && tj,
                                [tx.h9]: tF,
                                [tx.mr]: W,
                                [tx.Wn]: d.Fr,
                                [tx.Ls]: tJ,
                                [tx.AH]: t0,
                                [tx.z3]: null != L,
                            }),
                            children: [
                                tJ || t0 ? null : (0, i.jsx)(tU, { bars: tY }),
                                (0, i.jsxs)("div", {
                                    ref: eI,
                                    onScroll: t_,
                                    className: a()(c, { [tx.xx]: !0, [tx.k6]: !en, [tx.Ri]: tY.stacked.length > 0 }),
                                    children: [
                                        (0, i.jsx)(th, { channelId: R.id, chatInputType: v }),
                                        v.hideAttachmentArea
                                            ? null
                                            : (0, i.jsx)(tq.A, { channelId: R.id, type: v, canAttachFiles: ej }),
                                        (0, i.jsxs)("div", {
                                            className: a()(tx.vW, {
                                                [tx.BF]: tF,
                                                [tx.RL]: v !== eQ.oU.EDIT && (null != tB || (tF && null == tB) || eU),
                                                [tx.fk]: v === eQ.oU.THREAD_CREATION,
                                                [tx.TZ]:
                                                    v === eQ.oU.CREATE_FORUM_POST || v === eQ.oU.FORWARD_MESSAGE_INPUT,
                                                [tx.$i]: v === eQ.oU.USER_PROFILE_REPLY,
                                            }),
                                            onMouseDown: ty,
                                            children: [
                                                t2,
                                                tB,
                                                (0, i.jsx)(E.vN, {
                                                    ringTarget: eu,
                                                    ringClassName: tx.Rg,
                                                    children: (0, i.jsx)(eJ.A, {
                                                        ref: eh,
                                                        id: f,
                                                        focused: b,
                                                        useSlate: e0,
                                                        textValue: s,
                                                        richValue: o,
                                                        disabled: eB,
                                                        placeholder: y,
                                                        required: m,
                                                        accessibilityLabel: O,
                                                        isPreviewing: (eU || eF) && e$,
                                                        channel: R,
                                                        type: v,
                                                        canPasteFiles: ej,
                                                        uploadPromptCharacterCount: eo.CS1,
                                                        maxCharacterCount: $ ?? e2,
                                                        allowNewLines: q,
                                                        "aria-describedby": t$,
                                                        onChange: e8,
                                                        onResize: tE,
                                                        onBlur: V,
                                                        onFocus: F,
                                                        onKeyDown: B,
                                                        onSubmit: te,
                                                        onSubmitFailure: tG,
                                                        onTab: tp,
                                                        onEnter: tg,
                                                        onMoveSelection: tA,
                                                        onSelectionChanged: e5,
                                                        onMaybeShowAutocomplete: ti,
                                                        onHideAutocomplete: tr,
                                                        promptToUpload: j,
                                                        fontSize: e3,
                                                        spellcheckEnabled: e6,
                                                        canOnlyUseTextCommands: tV,
                                                        className: a()(
                                                            {
                                                                [tx.QI]: v === eQ.oU.THREAD_CREATION,
                                                                [tx.AV]: v === eQ.oU.PROFILE_BIO_INPUT,
                                                                [tx.GR]: v === eQ.oU.OVERLAY_INLINE_REPLY,
                                                            },
                                                            _,
                                                        ),
                                                        "aria-labelledby": Q,
                                                        showValueWhenDisabled: ea,
                                                    }),
                                                }),
                                                t3,
                                                t1,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(tz, { channel: R, type: v, pendingScheduledMessage: es }),
                                e1 ? null : (0, i.jsx)(e_, { ref: ec, channel: R, canOnlyUseTextCommands: tV }),
                                (0, i.jsx)(eE.A, {
                                    ref: tn,
                                    channel: R,
                                    canMentionRoles: Y,
                                    canMentionChannels: K,
                                    useNewSlashCommands: e0,
                                    canOnlyUseTextCommands: tV,
                                    canSendStickers: v.stickers?.allowSending,
                                    canSendSoundmoji: v.soundmoji?.allowSending,
                                    textValue: s,
                                    focused: b,
                                    expressionPickerView: tT,
                                    type: v,
                                    targetRef: eu,
                                    editorRef: eh,
                                    onSendMessage: te,
                                    onSendSticker: tl,
                                    onVisibilityChange: tw,
                                    editorScrollerRef: eI,
                                    editorHeight: tf,
                                    barsHeight: 40 * tY.floating.length,
                                    setValue: (e, t) => e8?.(null, e, t),
                                    position: ee,
                                }),
                                (0, i.jsx)(ew, { textValue: s, editorHeight: tf, channelId: R.id }),
                                t5,
                                et,
                            ],
                        }),
                        (0, i.jsx)(p.U, { error: L }),
                        tN
                            ? null
                            : (0, i.jsx)(eA.A, {
                                  positionTargetRef: eu,
                                  type: v,
                                  onSelectGIF: ts,
                                  onSelectEmoji: ta,
                                  onSelectSticker: tl,
                                  onSelectSound: tc,
                                  onSelectKaomoji: td,
                                  channel: R,
                                  closeOnModalOuterClick: ei,
                                  parentModalKey: er,
                                  position: "top",
                                  align: "right",
                                  positionLayerClassName: tx.BD,
                              }),
                    ],
                }),
            })
        );
    }),
);
