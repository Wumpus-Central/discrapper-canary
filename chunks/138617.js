"use strict";
n.d(t, {
    HG: () => t9,
    Sk: () => ns,
    C: () => t8,
    v7: () => nn,
    Zx: () => t4,
    L0: () => ni,
    N_: () => ne,
    MD: () => na,
    Ay: () => nl,
    uW: () => no,
    NO: () => t7,
    ck: () => nr,
    ml: () => nt,
    Vu: () => t5,
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
    p = n(187322),
    E = n(511274),
    m = n(465532),
    g = n(765671),
    A = n(775602),
    I = n(793574),
    T = n(688810),
    S = n(177640),
    y = n(989837),
    N = n(289873),
    v = n(268218),
    C = n(750506),
    R = n(60809),
    O = n(375708),
    b = n(131552);
let D = { width: 500, height: R.$V },
    L = (0, v.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("84816"),
                n.e("81539"),
                n.e("46239"),
                n.e("39713"),
                n.e("78360"),
                n.e("52347"),
                n.e("28885"),
                n.e("34552"),
                n.e("93103"),
                n.e("71210"),
                n.e("88342"),
                n.e("37977"),
                n.e("42451"),
                n.e("98965"),
                n.e("71273"),
                n.e("80854"),
                n.e("35395"),
                n.e("43780"),
                n.e("35313"),
                n.e("54975"),
                n.e("8362"),
                n.e("54625"),
                n.e("71133"),
                n.e("49697"),
                n.e("27773"),
                n.e("52229"),
                n.e("84870"),
                n.e("18024"),
                n.e("61268"),
                n.e("78195"),
                n.e("22261"),
                n.e("41701"),
                n.e("74021"),
                n.e("83518"),
                n.e("37065"),
                n.e("22094"),
                n.e("61764"),
                n.e("59848"),
                n.e("68974"),
                n.e("56385"),
                n.e("59132"),
                n.e("89203"),
                n.e("35621"),
            ]).then(n.bind(n, 854379)),
        webpackId: 854379,
        renderLoader: () => (0, i.jsx)("div", { className: b.R4, style: D, children: (0, i.jsx)(N.y, {}) }),
    }),
    w = { height: R.$V },
    M = r.memo(function (e) {
        let { positionTargetRef: t, align: n, ...r } = e;
        return (0, i.jsx)("span", {
            style: R.sK,
            children: (0, i.jsx)(C.nE, {
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
                        "aria-label": O.intl.string(O.t["3CNGLK"]),
                        children: t && (0, i.jsx)(L, { ...r }),
                    });
                },
            }),
        });
    });
var P = n(861382),
    x = n(735438),
    k = n.n(x),
    U = n(537652),
    G = n(155718),
    F = n(95561),
    V = n(659280),
    B = n(579940),
    H = n(962125),
    j = n(915089),
    Y = n(850992),
    W = n(464651),
    K = n(286509),
    $ = n(721768),
    z = n(842209),
    q = n(210978),
    X = n(392054),
    Z = n(168186),
    Q = n(990078),
    J = n(939249),
    ee = n(802019),
    et = n(664929),
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
                return s[t + 1]?.type === X.Hf.BUILT_IN && (n += 8), 32 + n;
            },
            [s],
        ),
        h = r.useCallback((e, t) => (t ? 8 * (s[e + 1]?.type !== X.Hf.BUILT_IN) : 8 * (0 !== e)), [s]),
        f = r.useCallback(
            (e, t) => {
                let r = s[t];
                if (null == r) return;
                let a = (0, et.Rg)(r),
                    c = 4 * (r.type === X.Hf.BUILT_IN),
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
                    h = r.type !== X.Hf.BUILT_IN && t < s.length - 1 && s[t + 1].type === X.Hf.BUILT_IN;
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
                  store: Y.LS,
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
    ed = k().debounce(() => {
        (0, F.zV)(eo.HAw.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300),
    e_ = r.forwardRef(function (e, t) {
        let { channel: n, canOnlyUseTextCommands: s } = e,
            o = r.useRef(!1),
            l = r.useRef(0),
            [u, c] = r.useState(0),
            d = r.useRef(null),
            [_, h] = r.useState(!1),
            f = Y.LS.useStore((e) => e.activeCategoryIndex);
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
            y = (0, W.Fk)({
                activeCategoryIndex: f,
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
            N = (e) => {
                let t = E.length,
                    n = m.reduce((e, t) => e + t.data.length, 0) - 7 * !!g;
                g && e + 420 > 48 * t + 56 * n - 512 && T(), y(e), ed(), (l.current = e);
            },
            v = r.useRef(N);
        r.useEffect(() => {
            v.current = N;
        }),
            r.useEffect(() => {
                v.current(l.current);
            }, [A]);
        let C = r.useCallback((e) => (e !== E.length - 1 || g ? 16 : 0), [E.length, g]),
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
            D = r.useCallback(
                (e, t, i) => {
                    $.Gf({ channelId: n.id, command: e, section: t, location: X.Oh.DISCOVERY, triggerSection: i });
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
                            D(n, i, (0, Z.$S)(e.section));
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
                                    (0, i.jsx)(U.A, {
                                        message: O.intl.format(O.t.WoQXT6, { applicationName: r.name }),
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
                        s.inputType === X.y$.PLACEHOLDER
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
                            onClick: () => D(s, o, (0, Z.$S)(r.section)),
                            onHover: () => {
                                c(null), h(!1);
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
                onMouseDown: eh,
                children: [
                    (0, i.jsx)(er, {
                        className: el.H$,
                        channel: n,
                        sections: p,
                        filteredSectionId: I,
                        activeCategoryIndex: f,
                        onSectionClick: b,
                        applicationCommandListRef: d,
                    }),
                    (0, i.jsx)(H.A, {
                        role: "listbox",
                        className: el.p_,
                        listPadding: ec,
                        onScroll: N,
                        renderRow: M,
                        renderSection: w,
                        renderSectionHeader: L,
                        rowCount: E.length,
                        rowCountBySection: R,
                        rowHeight: 56,
                        sectionHeaderHeight: 32,
                        sectionMarginBottom: C,
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
    ep = n(305070),
    eE = n(31498),
    em = n(598071),
    eg = n(151271),
    eA = n(731231),
    eI = n(256265),
    eT = n(703244),
    eS = n(857071),
    ey = n(135621),
    eN = n(105330),
    ev = n(495544),
    eC = n(559908),
    eR = n(620141),
    eO = n(224964),
    eb = n(31408),
    eD = n(536283);
function eL(e) {
    let { editorHeight: t, textValue: n, channelId: i } = e,
        s = r.useRef(n),
        a = (0, eN.l)({ editorHeight: t }),
        o = (0, eO.A)(),
        l = (0, h.bG)([eC.Ay, ev.default], () => eC.Ay.isComboing(ev.default.getId(), i)),
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
    return (0, i.jsx)(eR.A, { confettiLocation: eb.k.CHAT_INPUT, children: (0, i.jsx)(eL, { ...e }) });
}
var eM = n(931664),
    eP = n(631576),
    ex = n(68935),
    ek = n(406704),
    eU = n(885386),
    eG = n(696451),
    eF = n(576705),
    eV = n(309010),
    eB = n(638128),
    eH = n(522602),
    ej = n(287809),
    eY = n(821102),
    eW = n(174459),
    eK = n(234320),
    e$ = n(625494),
    ez = n(488926),
    eq = n(723702),
    eX = n(486319),
    eZ = n(355622),
    eQ = n(392553),
    eJ = n(834730),
    e0 = n(140735),
    e1 = n(176781),
    e2 = n(463930),
    e3 = n(935063),
    e6 = n(252545),
    e4 = n(650019),
    e5 = n(763754),
    e7 = n(967144),
    e8 = n(118517),
    e9 = n(976860),
    te = n(747926),
    tt = n(232835),
    tn = n(285796),
    ti = n(630816);
function tr(e) {
    let { onClick: t, "aria-label": n } = e;
    return (0, i.jsx)(J.D, {
        className: ti.b,
        onClick: t,
        "aria-label": n,
        children: (0, i.jsx)(tn.a, { size: "md", color: "currentColor", className: ti.u }),
    });
}
var ts = n(1468);
let ta = "channel-reply-bar-a11y-description";
function to(e) {
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
                (0, e8.Jx)(t.id), (0, te.Tv)(t, n, "Reply Chain Nudge");
            },
            className: ts._r,
            focusProps: { offset: { right: -4, left: -4 } },
            children: [
                (0, i.jsx)(eJ.E, {
                    color: "text-default",
                    className: ts.Qq,
                    variant: "text-sm/normal",
                    children: O.intl.format(O.t.B3V0FM, { count: Math.min(10, s + 1) }),
                }),
                (0, i.jsx)(eJ.E, {
                    color: "text-link",
                    className: ts.NG,
                    variant: "text-sm/semibold",
                    children: O.intl.string(O.t.rBIGBL),
                }),
            ],
        })
    );
}
function tl(e) {
    let t,
        n,
        { reply: s, chatInputType: o } = e,
        { channel: l, message: u, shouldMention: c, showMentionToggle: d, mediaMention: _ } = s,
        {
            guildId: f,
            nick: p,
            colorString: E,
            colorStrings: m,
            colorRoleName: g,
            authorId: A,
            displayNameStyles: I,
        } = (0, e5.Ay)(u),
        T = (0, e7.gn)(f, A, m),
        S = (0, e6.a)({ displayNameStyles: I }),
        y = (0, e4.A)(_, u.attachments),
        N =
            ((t = l.id),
            (n = u.id),
            (0, h.bG)([tt.A], () => {
                let e = n;
                for (let n = 0; n < 10; n++) {
                    let i = tt.A.getMessage(t, e);
                    if (i?.type !== eo.lAJ.REPLY || null == i.messageReference) return n;
                    e = i.messageReference.message_id;
                }
                return 10;
            }, [t, n])),
        v = (0, ek.n)(l, u),
        C = o.showThreadPromptOnReply && N >= 2 && v;
    return (0, i.jsx)("div", {
        className: ts.e1,
        children: (0, i.jsxs)("div", {
            className: ts.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: ts.eU,
                    children: [
                        (0, i.jsx)(e0.A, { id: ta, children: O.intl.formatToPlainString(O.t.EpJL4E, { username: p }) }),
                        (0, i.jsx)(J.D, {
                            onClick: () => (0, e9.pX)(eo.BVt.CHANNEL(l.getGuildId(), l.id, u.id)),
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, i.jsx)(eJ.E, {
                                color: "text-default",
                                className: a()(ts.Qq, ts.Fn),
                                variant: "text-sm/normal",
                                children: O.intl.format(O.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, i.jsxs)(
                                            r.Fragment,
                                            {
                                                children: [
                                                    "\xa0",
                                                    y?.title != null
                                                        ? (0, i.jsxs)("span", {
                                                              className: ts.H8,
                                                              children: [
                                                                  y.isClip &&
                                                                      (0, i.jsx)(e1.x, {
                                                                          size: "xs",
                                                                          color: "currentColor",
                                                                          className: ts.gS,
                                                                      }),
                                                                  (0, i.jsx)(eJ.E, {
                                                                      variant: "text-sm/semibold",
                                                                      color: "text-default",
                                                                      className: ts.NV,
                                                                      children: y.title,
                                                                  }),
                                                                  (0, i.jsxs)(eJ.E, {
                                                                      variant: "text-sm/normal",
                                                                      color: "text-link",
                                                                      children: ["@", y.timestamp],
                                                                  }),
                                                              ],
                                                          })
                                                        : (0, i.jsx)(e2.g, {
                                                              className: ts.UU,
                                                              name: p,
                                                              colorString: E,
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
                            className: ts.o1,
                            children: [
                                d &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(Q.m, {
                                                asContainer: !0,
                                                text: c ? O.intl.string(O.t.DH2o6R) : O.intl.string(O.t.utGGIY),
                                                children: (0, i.jsx)(J.D, {
                                                    role: "switch",
                                                    "aria-checked": c,
                                                    onClick: function (e) {
                                                        e.stopPropagation(), (0, e8.vz)(l.id, !c);
                                                    },
                                                    children: (0, i.jsxs)(eJ.E, {
                                                        variant: "text-sm/bold",
                                                        color: c ? "text-link" : "text-muted",
                                                        className: ts.Z4,
                                                        children: [
                                                            (0, i.jsx)(e3.X, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": O.intl.string(O.t.P8tvKG),
                                                                className: ts.mM,
                                                            }),
                                                            c ? O.intl.string(O.t.p9jC2r) : O.intl.string(O.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, i.jsx)("div", { className: ts.me, "aria-hidden": !0 }),
                                        ],
                                    }),
                                (0, i.jsx)(tr, {
                                    onClick: function (e) {
                                        e.stopPropagation(), (0, e8.Jx)(l.id);
                                    },
                                    "aria-label": O.intl.string(O.t.jSnJGT),
                                }),
                            ],
                        }),
                    ],
                }),
                C && (0, i.jsx)(to, { channel: l, message: u, replyChainLength: N }),
            ],
        }),
    });
}
var tu = n(749314),
    tc = n(148355),
    td = n(74995);
let t_ = r.memo(function (e) {
    let { channelId: t, chatInputType: n } = e,
        [s, a] = r.useState(null),
        o = (0, h.bG)([eM.A], () => eM.A.getStickerPreview(t, n.drafts.type));
    return n.stickers?.allowSending && null != o && 0 !== o.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("div", {
                      className: td.Tz,
                      children: o.map((e) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: td.dp,
                                  children: [
                                      (0, i.jsx)(J.D, {
                                          onFocus: () => a(e.id),
                                          onBlur: () => a(null),
                                          className: td.b,
                                          "aria-label": O.intl.formatToPlainString(O.t.BGAQRd, { name: e.name }),
                                          onClick: () => (0, eP.x5)(t, n.drafts.type),
                                          children: (0, i.jsx)("div", {
                                              className: td.Nk,
                                              children: (0, i.jsx)(tn.a, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: td.ut,
                                              }),
                                          }),
                                      }),
                                      (0, i.jsx)(tc.A, {
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
                  (0, i.jsx)(tu.A, { className: td.R }),
              ],
          })
        : null;
});
var th = n(612394);
n(321073);
var tf = n(442433);
n(827669);
var tp = n(448702);
function tE(e) {
    let t,
        s,
        o,
        { className: l, activeCommand: u, activeOption: c, optionStates: d, channelId: _ } = e,
        h = r.useCallback(
            (e) => {
                let t = u?.rootCommand?.id;
                null == t
                    ? e.preventDefault()
                    : (0, tf.L3)(e, async () => {
                          let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                          return (n) => (0, i.jsx)(e, { ...n, id: t, label: O.intl.string(O.t.oJ1Muw) });
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
                    (0, i.jsx)("span", { className: tp.UU, children: t }),
                    null != o
                        ? (0, i.jsx)("span", { className: tp.z3, children: o })
                        : (0, i.jsx)("span", { className: tp.h_, children: s }),
                ],
            }),
            (0, i.jsx)("div", {
                className: tp.o1,
                children: (0, i.jsx)(tr, { onClick: f, "aria-label": O.intl.string(O.t.cpT0Cq) }),
            }),
        ],
    });
}
var tm = n(228366),
    tg = n(734057);
let tA = new Set();
class tI extends h.Ay.PersistedStore {
    static displayName = "PTOStore";
    static persistKey = "PTOStore";
    initialize(e) {
        this.waitFor(tg.A, eG.Ay, eV.A, ej.default), null != e && (tA = new Set(e));
    }
    hasId(e) {
        return tA.has(e);
    }
    getState() {
        return [...tA];
    }
}
let tT = new tI(tm.h, {}),
    tS = () => {
        let e = eV.A.getChannelId();
        if (null == e) return;
        let t = tg.A.getChannel(e);
        null != t && t.isPrivate() && (tA.has(t.getRecipientId()) || (tA.add(t.getRecipientId()), tT.emitChange()));
    },
    ty = () =>
        (0, i.jsxs)("div", {
            className: ts.eU,
            children: [
                (0, i.jsx)(eJ.E, {
                    variant: "text-sm/medium",
                    className: a()(ts.Qq, ts.Fn),
                    children: O.intl.string(O.t["2UvR1E"]),
                }),
                (0, i.jsx)("div", {
                    className: ts.o1,
                    children: (0, i.jsx)(tr, { onClick: tS, "aria-label": O.intl.string(O.t.cpT0Cq) }),
                }),
            ],
        });
var tN = n(278351);
let tv = (e) => {
    let { error: t } = e;
    return (0, i.jsxs)("div", {
        className: tN.M,
        children: [
            (0, i.jsx)(eJ.E, { variant: "text-xs/bold", color: "text-strong", children: O.intl.string(O.t["4VDCG0"]) }),
            t
                ? (0, i.jsx)(eJ.E, { variant: "text-xs/medium", className: tN.z, children: O.intl.string(O.t.qNorwt) })
                : (0, i.jsx)(eJ.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: O.intl.string(O.t["260qZS"]),
                  }),
        ],
    });
};
var tC = n(25201),
    tR = n(926321),
    tO = n(221933);
function tb(e) {
    var t, n;
    let { channelId: r } = e,
        s = (0, tC.vR)(r);
    if (null == s) return null;
    let o = s.rolling,
        l =
            ((t = o),
            (n = s.results),
            t
                ? O.intl.string(O.t["x/FIRX"])
                : null == n
                  ? ""
                  : O.intl.formatToPlainString(O.t.xU4pF1, { total: n.reduce((e, t) => e + t, 0) }));
    return (0, i.jsx)("div", {
        className: a()(tO.kL, { [tO.Kd]: !s.dismissing }),
        children: (0, i.jsxs)("div", {
            className: tO.Qs,
            children: [
                (0, i.jsx)(tR.j, { size: "md", className: a()({ [tO.su]: o }) }),
                (0, i.jsx)(eJ.E, { color: "text-default", variant: "text-sm/normal", children: l }),
            ],
        }),
    });
}
var tD = n(575293),
    tL = n(151282),
    tw = n(1372);
function tM(e) {
    let { pendingScheduledMessage: t } = e,
        { channelId: n, scheduledTimestamp: r } = t;
    return (0, i.jsx)("div", {
        className: tw.e1,
        children: (0, i.jsx)("div", {
            className: tw.kL,
            children: (0, i.jsxs)("div", {
                className: tw.g3,
                children: [
                    (0, i.jsx)(eJ.E, {
                        color: "text-default",
                        className: a()(tw.Qq, tw.a3),
                        variant: "text-sm/normal",
                        children: O.intl.formatToPlainString(O.t["MQcRX/"], { timestamp: new Date(r).valueOf() }),
                    }),
                    (0, i.jsx)("div", {
                        className: tw.o1,
                        children: (0, i.jsx)(tr, {
                            onClick: function (e) {
                                e.stopPropagation(), (0, tL.Ps)(n);
                            },
                            "aria-label": O.intl.string(O.t.cpT0Cq),
                        }),
                    }),
                ],
            }),
        }),
    });
}
var tP = n(266599);
function tx(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, i.jsx)("div", { children: e }, t)),
        s = t.floating.map((e, t) => (0, i.jsx)(r.Fragment, { children: e }, t));
    return 0 === n.length && 0 === s.length
        ? null
        : (0, i.jsxs)(r.Fragment, {
              children: [
                  s.length > 0 && (0, i.jsx)("div", { className: tP.Vq, children: s }),
                  n.length > 0 && (0, i.jsx)("div", { className: tP.MD, children: n }),
              ],
          });
}
var tk = n(123583),
    tU = n(562708),
    tG = n(150934),
    tF = n(139286),
    tV = n(47167),
    tB = n(713654),
    tH = n(252263),
    tj = n(8455),
    tY = n(67259),
    tW = n(355026);
function tK(e) {
    let { thread: t, pendingScheduledMessage: n } = e,
        s = (0, tj.Vp)({ location: "ThreadsAlsoSendToChannelArea" }),
        [a, o] = (0, h.yK)([tg.A, tY.A], () => [
            t.isThread() ? tg.A.getChannel(t.parent_id) : null,
            tY.A.getAlsoSendToChannel(t.id),
        ]),
        l = (0, tV.Ay)(a),
        u = r.useCallback(
            (e) => {
                eW.default.track(eo.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_TOGGLED, {
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
            { name: tU.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL, type: tU.ImpressionTypes.VIEW },
            { disableTrack: null == a || !s.enabled },
            [a, s.enabled],
        ),
        !s.enabled || null == a)
    )
        return null;
    let c = (0, tB.gU)(a),
        d = O.intl.format(O.t.UqL10G, {
            callToActionHook: (e, t) =>
                (0, i.jsx)(
                    eJ.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: tW.Pf,
                        children: O.intl.string(O.t.Pi3JW7),
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
                        className: tW.Pf,
                        children: [null == c ? null : (0, i.jsx)(c, { color: "currentColor", className: tW.Kk }, t), e],
                    },
                    t,
                ),
        });
    return (0, i.jsx)("div", {
        className: tW.kL,
        children: (0, i.jsx)(tG.S, { checked: o, disabled: null != n, onChange: u, label: d, labelType: "secondary" }),
    });
}
function t$(e) {
    let { channel: t, type: n, pendingScheduledMessage: r } = e,
        { shouldShow: s } = (function (e) {
            let { channel: t, type: n } = e,
                i = (0, h.bG)([tg.A], () => {
                    let e = tg.A.getChannel(t.parent_id);
                    return e?.isForumLikeChannel() ?? !1;
                }),
                r = [eZ.oU.NORMAL, eZ.oU.SIDEBAR].includes(n);
            return { shouldShow: t.isThread() && !i && r };
        })({ channel: t, type: n });
    return s ? (0, i.jsx)(tK, { thread: t, pendingScheduledMessage: r }) : null;
}
var tz = n(822610),
    tq = n(625928),
    tX = n(135261),
    tZ = n(820066),
    tQ = n(922016),
    tJ = n(375499),
    t0 = n(267889),
    t1 = n(307731),
    t2 = n(128934);
function t3(e) {
    let { getSlateEditor: t, onInsertEmoji: n, type: s, channel: a } = e,
        o = t(),
        l = r.useRef(null);
    return null == o
        ? null
        : (0, i.jsxs)("div", {
              id: "slate-toolbar",
              className: t2.aL,
              children: [
                  (0, i.jsx)("div", {
                      className: t2.Wy,
                      children: (0, i.jsx)(tX.P, {
                          slateEditor: o,
                          options: s.markdown,
                          iconClassName: t2.C7,
                          dividerClassName: t2.us,
                      }),
                  }),
                  (0, i.jsx)(tQ.Y, {
                      targetElementRef: l,
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, i.jsx)(t0.A, {
                              persistSearch: !0,
                              channel: a,
                              closePopout: t,
                              onSelectEmoji: (e) => {
                                  let { emoji: i, willClose: r } = e;
                                  n({ emoji: i, willClose: r }), r && t();
                              },
                              pickerIntention:
                                  s.expressionPicker?.emojiIntention ?? t1.EmojiIntention.COMMUNITY_CONTENT,
                          });
                      },
                      position: "bottom",
                      animation: tQ.Y.Animation.NONE,
                      align: "left",
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, i.jsx)(tJ.A, { ...e, ref: l, active: n, className: t2.Z8, tabIndex: 0 });
                      },
                  }),
              ],
          });
}
var t6 = n(698279);
function t4(e, t, s, a, o) {
    let [l, u] = r.useState(!1),
        c = r.useCallback(
            (r, d, _, h, p, E) => {
                if (l) return;
                u(!0);
                let g = eM.A.getStickerPreview(o, t.drafts.type)?.map((e) => e.id) ?? [],
                    A = eH.A.getUploads(o, t.drafts.type) ?? [];
                if (null == d && !h && !p && (0, eI.xz)(A, o)) {
                    u(!1),
                        (0, f.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("26834"),
                                n.e("46239"),
                                n.e("6931"),
                                n.e("97871"),
                                n.e("43213"),
                                n.e("16404"),
                                n.e("14329"),
                                n.e("64801"),
                                n.e("12815"),
                                n.e("49681"),
                                n.e("76602"),
                                n.e("34530"),
                                n.e("28229"),
                                n.e("21921"),
                                n.e("39970"),
                                n.e("72789"),
                                n.e("79049"),
                                n.e("65437"),
                                n.e("79745"),
                                n.e("5500"),
                                n.e("32209"),
                                n.e("49697"),
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
function t5(e, t, n) {
    return r.useCallback(
        (i) => {
            if (t === eZ.oU.CREATE_FORUM_POST || t === eZ.oU.CREATE_ANNOUNCEMENT_POST) n.current?.insertGIF(i);
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
function t7(e) {
    return r.useCallback(
        (t) => {
            let { emoji: n, willClose: i } = t,
                r = e.current;
            null != n && null != r && r.insertEmoji({ emoji: n, willClose: i }), i && (0, eg.v8)();
        },
        [e],
    );
}
function t8(e) {
    let { editorRef: t, disabled: n, textValue: i, channelId: s, chatInputType: a, submit: o } = e,
        { analyticsLocations: l } = (0, T.Ay)();
    return r.useCallback(
        (e, r) => {
            n ||
                (a === eZ.oU.CREATE_ANNOUNCEMENT_POST || (0, ex.YS)(r, i, s, a.drafts.type)
                    ? ((0, th.fh)({
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
function t9(e) {
    return r.useCallback(
        (t) => {
            let n = e.current;
            null != n && n.insertKaomoji(t), (0, eg.v8)(), n?.focus();
        },
        [e],
    );
}
function ne(e, t, n) {
    let i = r.useCallback(() => {
            t || (0, eg.r$)(t6.kx.EMOJI, e, n);
        }, [t, e, n]),
        s = r.useCallback(() => {
            !t && e.gifs?.allowSending && (0, eg.r$)(t6.kx.GIF, e, n);
        }, [t, e, n]),
        a = r.useCallback(() => {
            !t && e.stickers?.allowSending && (0, eg.r$)(t6.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, eK.Vo)({ event: eo.jej.TOGGLE_EMOJI_POPOUT, handler: i }),
        (0, eK.Vo)({ event: eo.jej.TOGGLE_GIF_PICKER, handler: s }),
        (0, eK.Vo)({ event: eo.jej.TOGGLE_STICKER_PICKER, handler: a });
}
function nt(e, t, n) {
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
function nn() {
    let e = r.useRef(null),
        t = r.useCallback(() => {
            e.current?.onMaybeShowAutocomplete();
        }, []),
        n = r.useCallback(() => {
            e.current?.onHideAutocomplete();
        }, []);
    return { autocompleteRef: e, handleMaybeShowAutocomplete: t, handleHideAutocomplete: n };
}
function ni(e) {
    let t = r.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
}
function nr(e) {
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
        s = (0, h.bG)([eS.A], () => null != r && eS.A.isLurking(r), [r]),
        a = (0, h.bG)([eG.Ay, ej.default], () => {
            let e = ej.default.getCurrentUser();
            return (null != r && null != e ? eG.Ay.getMember(r, e.id)?.isPending : null) ?? !1;
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
                d = (0, ek.UJ)(e);
            return {
                disabled: i || a || (!r && !l) || d,
                canAttachFiles: !0 === t.attachments && (r || a || u || c),
                canCreateThreads: o,
                canEveryoneSendMessages: ez.MJ(eo.xBc.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, i, a]);
    return { isLurking: s, isPendingMember: a, ...o };
}
function na(e, t, n) {
    let [i, s, a] = (0, eg.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], c.x),
        o = (0, h.bG)([y.A], () => y.A.shouldShowPopup() && y.A.activeViewType() === e && y.A.activeChannelId() === n);
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
let no = (e, t) => ({
        handleAutocompleteVisibilityChange: r.useCallback(
            (n) => {
                n && (0, eg.v8)(e, t);
            },
            [e, t],
        ),
    }),
    nl = r.memo(
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
                    disabled: N,
                    placeholder: v,
                    accessibilityLabel: C,
                    channel: R,
                    type: O,
                    focused: b,
                    error: D,
                    renderAttachButton: L,
                    renderApplicationCommandIcon: w,
                    renderButtons: x,
                    pendingReply: k,
                    onChange: U,
                    onResize: G,
                    onBlur: F,
                    onFocus: V,
                    onKeyDown: B,
                    onSubmit: H,
                    promptToUpload: j,
                    highlighted: Y,
                    canMentionRoles: W,
                    canMentionChannels: K,
                    maxCharacterCount: $,
                    showRemainingCharsAfterCount: z,
                    allowNewLines: q = !0,
                    characterCountClassName: X,
                    "aria-describedby": Z,
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
            u()(null != O, "chat input type must be set");
            let { analyticsLocations: el } = (0, T.Ay)(I.A.CHANNEL_TEXT_AREA),
                eu = ni(t),
                ec = r.useRef(null),
                ed = r.useRef(null),
                eh = r.useRef(null),
                eI = r.useRef(null),
                eT = r.useRef(null),
                eS = r.useCallback(() => eh.current?.getSlateEditor() ?? null, []);
            J?.(eh.current);
            let eN = (0, S.A)(R),
                [ev, eC] = r.useState(!eN);
            (0, g.i4)(eu, (e) => {
                let { width: t } = e;
                return eC(!eN && (null == t || t > 450));
            });
            let { activeCommand: eR, activeCommandSection: eO } = (0, h.cf)([P.A], () => ({
                    activeCommand: O.commands?.enabled ? P.A.getActiveCommand(R.id) : null,
                    activeCommandSection: O.commands?.enabled ? P.A.getActiveCommandSection(R.id) : null,
                })),
                {
                    isLurking: eb,
                    isPendingMember: eD,
                    disabled: eL,
                    canAttachFiles: eM,
                    canCreateThreads: eP,
                    canEveryoneSendMessages: ex,
                } = ns(R, O, eR, N),
                ek = O.toolbarType === eZ.O1.STATIC,
                eF = !eU.D_.useSetting() && !(0, eq.isAndroidWeb)() && null != window.ResizeObserver,
                eV = !eF || !O.commands?.enabled || !b || "/" !== s,
                eH = (0, ey.A)(),
                { fontSize: eY } = (0, h.cf)([A.A], () => ({ fontSize: A.A.fontSize })),
                eK = (0, h.bG)([eB.A], () => eB.A.isEnabled());
            ne(O, eL, R.id);
            let { eventEmitter: ez, handleEditorSelectionChanged: eJ } = nt(eh, s, o),
                e0 = r.useRef(s);
            e0.current = s;
            let e1 = r.useCallback(
                    (e, t, n) => {
                        "/" === t && "" === e0.current && O.commands?.enabled && ez.emit("command-sentinel-typed"),
                            U?.(e, t, n);
                    },
                    [U, O.commands?.enabled, ez],
                ),
                { submitting: e2, submit: e3, handleSubmit: e6 } = t4(H, O, eh, eT, R.id),
                { autocompleteRef: e4, handleMaybeShowAutocomplete: e5, handleHideAutocomplete: e7 } = nn(),
                e8 = t5(e3, O, eh),
                e9 = t7(eh),
                te = t8({ editorRef: eh, disabled: eL, textValue: s, channelId: R.id, chatInputType: O, submit: H }),
                tt = r.useCallback(
                    (e, t, n) => {
                        let i = eh.current;
                        null != e &&
                            null != i &&
                            (eW.default.track(eo.HAw.SOUNDMOJI_SELECT, {
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
                tn = t9(eh),
                ti = r.useCallback(() => eT?.current?.hide(), []),
                { editorHeight: tr, handleResize: ts } = nr(G),
                {
                    handleTab: to,
                    handleEnter: tu,
                    handleMoveSelection: tc,
                } = ((n = r.useCallback(
                    () => !!(!eV && ec.current?.onTabOrEnter(!1)) || e4.current?.onTabOrEnter(!1) || !1,
                    [eV, ec, e4],
                )),
                {
                    handleTab: n,
                    handleEnter: r.useCallback(
                        () => !!(!eV && ec.current?.onTabOrEnter(!0)) || e4.current?.onTabOrEnter(!0) || !1,
                        [eV, ec, e4],
                    ),
                    handleMoveSelection: r.useCallback(
                        (e) => !!(!eV && ec.current?.onMoveSelection(e)) || e4.current?.onMoveSelection(e) || !1,
                        [eV, ec, e4],
                    ),
                }),
                { expressionPickerView: td, shouldHideExpressionPicker: th, handleOuterClick: tf } = na(O, eh, R.id),
                { selectedAutocompleteInputType: tp, selectedAutocompleteInputError: tm } = (function (e, t) {
                    let [n, i] = r.useState({
                            selectedAutocompleteInputType: null,
                            selectedAutocompleteInputError: !1,
                        }),
                        s = r.useCallback(() => {
                            let e,
                                n = t.current?.getSlateEditor();
                            null != n && (e = tZ.VW.getSelectedParentOfType(n, eE.mk)?.[0]),
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
                })(ez, eh),
                { handleAutocompleteVisibilityChange: tg } = no(O, R.id),
                tI = (function (e) {
                    let { type: t, channelId: n } = e;
                    return (0, ef.bG)([y.A], () => {
                        let e = y.A.activeViewType();
                        return null != e && e === t && y.A.activeChannelId() === n && y.A.shouldShowPopup();
                    }, [t, n]);
                })({ type: O, channelId: R.id }),
                tS = r.useCallback(() => {
                    ez.emit("submit-failure");
                }, [ez]);
            (0, eX.R)(ez, R.guild_id, R.id);
            let tN = null != k,
                tR = (eL && !((eb || eD) && ex)) || (e2 && O.submit?.useDisabledStylesOnSubmit),
                tO = null;
            null != eR ? (tO = w?.(eR, eO, tP.g$)) : (!eL || eP) && (tO = L?.(tN, tP.g$));
            let tL = eF && null != o && !eL && O.showCharacterCount && null == eR,
                tw = eF && !__OVERLAY__ && null != o && null == eR && O.toolbarType !== eZ.O1.NONE && !eL,
                tU = (function (e) {
                    let {
                            channel: t,
                            type: n,
                            activeCommand: s,
                            pendingReply: a,
                            pendingScheduledMessage: o,
                            selectedAutocompleteInputType: l,
                            selectedAutocompleteInputError: u,
                        } = e,
                        { activeCommandOption: c, activeCommandOptionStates: d } = (0, h.cf)([P.A], () => ({
                            activeCommandOption: P.A.getActiveOption(t.id),
                            activeCommandOptionStates: P.A.getOptionStates(t.id),
                        })),
                        _ = (0, h.bG)([eG.Ay, ej.default, tT], () => {
                            let e = ej.default.getCurrentUser();
                            if (null == e || !e.isStaff() || !t.isDM()) return !1;
                            let n = ej.default.getUser(t.getRecipientId());
                            if (!n?.isStaff()) return !1;
                            let i = eG.Ay.getNicknames(n.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
                            return i ? !tT.hasId(n.id) && i : (tA.delete(n.id) && tT.emitChange(), !1);
                        }),
                        f = (0, tC.Ay)((e) => e.channelId === t.id);
                    return r.useMemo(() => {
                        let e = [],
                            r = [];
                        return (
                            null != t.guild_id &&
                                n === eZ.oU.NORMAL &&
                                r.push((0, i.jsx)(tD.A, { guildId: t.guild_id, channel: t, className: tP.UW })),
                            null != s &&
                                e.push(
                                    (0, i.jsx)(tE, {
                                        activeCommand: s,
                                        activeOption: c ?? null,
                                        optionStates: d,
                                        channelId: t.id,
                                    }),
                                ),
                            null != a && e.push((0, i.jsx)(tl, { reply: a, chatInputType: n })),
                            _ && e.push((0, i.jsx)(ty, {})),
                            null != o && e.push((0, i.jsx)(tM, { pendingScheduledMessage: o })),
                            "timestampMentionInput" === l && r.push((0, i.jsx)(tv, { error: u ?? !1 })),
                            f && e.push((0, i.jsx)(tb, { channelId: t.id })),
                            { stacked: e, floating: r }
                        );
                    }, [s, c, d, t, f, a, _, n, o, l, u]);
                })({
                    channel: R,
                    type: O,
                    activeCommand: eR,
                    pendingReply: k,
                    pendingScheduledMessage: es,
                    selectedAutocompleteInputType: tp,
                    selectedAutocompleteInputError: tm,
                }),
                tG = 0 === s.trim().length,
                tF = null != k ? [Z, ta].filter(Boolean).join(" ") : Z,
                tV = O.layout === eZ.wt.INLINE,
                tB = O.layout === eZ.wt.FLUSH,
                tH = (0, i.jsx)("div", { ref: ed, className: tP.BW }),
                tj = tI ? (0, i.jsx)(M, { align: "right", positionTargetRef: ed, channel: R }) : null,
                tY =
                    null != x
                        ? x()
                        : (0, i.jsx)(tk.A, {
                              type: O,
                              disabled: eL,
                              channel: R,
                              handleSubmit: e6,
                              isEmpty: tG,
                              showAllButtons: ev,
                          }),
                tW = tL
                    ? (0, i.jsx)(tq.A, {
                          type: O,
                          textValue: s,
                          className: X,
                          maxCharacterCount: $,
                          showRemainingCharsAfterCount: z,
                      })
                    : null;
            return (
                r.useEffect(() => {
                    b && e$._.dispatch(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: R.id });
                }, [b, R.id]),
                (0, i.jsx)(em.Sv, {
                    value: ez,
                    children: (0, i.jsxs)(T.f5, {
                        value: el,
                        children: [
                            tw && ek
                                ? (0, i.jsx)(t3, { getSlateEditor: eS, onInsertEmoji: e9, type: O, channel: R })
                                : tw
                                  ? (0, i.jsx)(tX.A, {
                                        ref: eT,
                                        getSlateEditor: eS,
                                        containerRef: eI,
                                        options: O.markdown,
                                    })
                                  : null,
                            (0, i.jsxs)("div", {
                                ref: eu,
                                className: a()(l, {
                                    [tP.gM]: !0,
                                    [tP.h9]: tR,
                                    [tP.mr]: Y,
                                    [tP.Wn]: d.Fr,
                                    [tP.Ls]: tV,
                                    [tP.AH]: tB,
                                    [tP.z3]: null != D,
                                }),
                                children: [
                                    tV || tB ? null : (0, i.jsx)(tx, { bars: tU }),
                                    (0, i.jsxs)("div", {
                                        ref: eI,
                                        onScroll: ti,
                                        className: a()(c, {
                                            [tP.xx]: !0,
                                            [tP.k6]: !en,
                                            [tP.Ri]: tU.stacked.length > 0,
                                        }),
                                        children: [
                                            (0, i.jsx)(t_, { channelId: R.id, chatInputType: O }),
                                            O.hideAttachmentArea
                                                ? null
                                                : (0, i.jsx)(tz.A, { channelId: R.id, type: O, canAttachFiles: eM }),
                                            (0, i.jsxs)("div", {
                                                className: a()(tP.vW, {
                                                    [tP.BF]: tR,
                                                    [tP.RL]:
                                                        O !== eZ.oU.EDIT && (null != tO || (tR && null == tO) || eb),
                                                    [tP.fk]: O === eZ.oU.THREAD_CREATION,
                                                    [tP.TZ]:
                                                        O === eZ.oU.CREATE_FORUM_POST ||
                                                        O === eZ.oU.FORWARD_MESSAGE_INPUT,
                                                    [tP.$i]: O === eZ.oU.USER_PROFILE_REPLY,
                                                }),
                                                onMouseDown: tf,
                                                children: [
                                                    tj,
                                                    tO,
                                                    (0, i.jsx)(p.vN, {
                                                        ringTarget: eu,
                                                        ringClassName: tP.Rg,
                                                        children: (0, i.jsx)(eQ.A, {
                                                            ref: eh,
                                                            id: f,
                                                            focused: b,
                                                            useSlate: eF,
                                                            textValue: s,
                                                            richValue: o,
                                                            disabled: eL,
                                                            placeholder: v,
                                                            required: m,
                                                            accessibilityLabel: C,
                                                            isPreviewing: (eb || eD) && ex,
                                                            channel: R,
                                                            type: O,
                                                            canPasteFiles: eM,
                                                            uploadPromptCharacterCount: eo.CS1,
                                                            maxCharacterCount: $ ?? eH,
                                                            allowNewLines: q,
                                                            "aria-describedby": tF,
                                                            onChange: e1,
                                                            onResize: ts,
                                                            onBlur: F,
                                                            onFocus: V,
                                                            onKeyDown: B,
                                                            onSubmit: e3,
                                                            onSubmitFailure: tS,
                                                            onTab: to,
                                                            onEnter: tu,
                                                            onMoveSelection: tc,
                                                            onSelectionChanged: eJ,
                                                            onMaybeShowAutocomplete: e5,
                                                            onHideAutocomplete: e7,
                                                            promptToUpload: j,
                                                            fontSize: eY,
                                                            spellcheckEnabled: eK,
                                                            canOnlyUseTextCommands: tN,
                                                            className: a()(
                                                                {
                                                                    [tP.QI]: O === eZ.oU.THREAD_CREATION,
                                                                    [tP.AV]: O === eZ.oU.PROFILE_BIO_INPUT,
                                                                    [tP.GR]: O === eZ.oU.OVERLAY_INLINE_REPLY,
                                                                },
                                                                _,
                                                            ),
                                                            "aria-labelledby": Q,
                                                            showValueWhenDisabled: ea,
                                                        }),
                                                    }),
                                                    tY,
                                                    tH,
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(t$, { channel: R, type: O, pendingScheduledMessage: es }),
                                    eV ? null : (0, i.jsx)(e_, { ref: ec, channel: R, canOnlyUseTextCommands: tN }),
                                    (0, i.jsx)(ep.A, {
                                        ref: e4,
                                        channel: R,
                                        canMentionRoles: W,
                                        canMentionChannels: K,
                                        useNewSlashCommands: eF,
                                        canOnlyUseTextCommands: tN,
                                        canSendStickers: O.stickers?.allowSending,
                                        canSendSoundmoji: O.soundmoji?.allowSending,
                                        textValue: s,
                                        focused: b,
                                        expressionPickerView: td,
                                        type: O,
                                        targetRef: eu,
                                        editorRef: eh,
                                        onSendMessage: e3,
                                        onSendSticker: te,
                                        onVisibilityChange: tg,
                                        editorScrollerRef: eI,
                                        editorHeight: tr,
                                        barsHeight: 40 * tU.floating.length,
                                        setValue: (e, t) => e1?.(null, e, t),
                                        position: ee,
                                    }),
                                    (0, i.jsx)(ew, { textValue: s, editorHeight: tr, channelId: R.id }),
                                    tW,
                                    et,
                                ],
                            }),
                            (0, i.jsx)(E.U, { error: D }),
                            th
                                ? null
                                : (0, i.jsx)(eA.A, {
                                      positionTargetRef: eu,
                                      type: O,
                                      onSelectGIF: e8,
                                      onSelectEmoji: e9,
                                      onSelectSticker: te,
                                      onSelectSound: tt,
                                      onSelectKaomoji: tn,
                                      channel: R,
                                      closeOnModalOuterClick: ei,
                                      parentModalKey: er,
                                      position: "top",
                                      align: "right",
                                      positionLayerClassName: tP.BD,
                                  }),
                        ],
                    }),
                })
            );
        }),
    );
