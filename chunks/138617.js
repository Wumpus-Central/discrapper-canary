"use strict";
n.d(t, {
    HG: () => ne,
    Sk: () => na,
    C: () => t9,
    v7: () => ni,
    Zx: () => t5,
    L0: () => nr,
    N_: () => nt,
    MD: () => no,
    Ay: () => nu,
    uW: () => nl,
    NO: () => t8,
    ck: () => ns,
    ml: () => nn,
    Vu: () => t7,
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
                n.e("6922"),
                n.e("94314"),
                n.e("42657"),
                n.e("28323"),
                n.e("65058"),
                n.e("28758"),
                n.e("2677"),
                n.e("47141"),
                n.e("42430"),
                n.e("74252"),
                n.e("94539"),
                n.e("13551"),
                n.e("34552"),
                n.e("93103"),
                n.e("71210"),
                n.e("88342"),
                n.e("71273"),
                n.e("89421"),
                n.e("37977"),
                n.e("98965"),
                n.e("43780"),
                n.e("80854"),
                n.e("35395"),
                n.e("28662"),
                n.e("35313"),
                n.e("8362"),
                n.e("71133"),
                n.e("76428"),
                n.e("27773"),
                n.e("52229"),
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
    eG = n(951260),
    eF = n(696451),
    eV = n(576705),
    eB = n(309010),
    eH = n(638128),
    ej = n(522602),
    eY = n(287809),
    eW = n(821102),
    eK = n(174459),
    e$ = n(234320),
    ez = n(625494),
    eq = n(488926),
    eX = n(723702),
    eZ = n(486319),
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
            (0, F.zV)(eo.HAw.THREAD_NUDGE_SHOWN, {
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
                    children: O.intl.format(O.t.B3V0FM, { count: Math.min(10, s + 1) }),
                }),
                (0, i.jsx)(e0.E, {
                    color: "text-link",
                    className: ta.NG,
                    variant: "text-sm/semibold",
                    children: O.intl.string(O.t.rBIGBL),
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
            nick: p,
            colorString: E,
            colorStrings: m,
            colorRoleName: g,
            authorId: A,
            displayNameStyles: I,
        } = (0, e7.Ay)(u),
        T = (0, e8.gn)(f, A, m),
        S = (0, e4.a)({ displayNameStyles: I }),
        y = (0, e5.A)(_, u.attachments),
        N =
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
        v = (0, ek.n)(l, u),
        C = o.showThreadPromptOnReply && N >= 2 && v;
    return (0, i.jsx)("div", {
        className: ta.e1,
        children: (0, i.jsxs)("div", {
            className: ta.kL,
            children: [
                (0, i.jsxs)("div", {
                    className: ta.eU,
                    children: [
                        (0, i.jsx)(e1.A, { id: to, children: O.intl.formatToPlainString(O.t.EpJL4E, { username: p }) }),
                        (0, i.jsx)(J.D, {
                            onClick: () => (0, te.pX)(eo.BVt.CHANNEL(l.getGuildId(), l.id, u.id)),
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, i.jsx)(e0.E, {
                                color: "text-default",
                                className: a()(ta.Qq, ta.Fn),
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
                                                              className: ta.H8,
                                                              children: [
                                                                  y.isClip &&
                                                                      (0, i.jsx)(e2.x, {
                                                                          size: "xs",
                                                                          color: "currentColor",
                                                                          className: ta.gS,
                                                                      }),
                                                                  (0, i.jsx)(e0.E, {
                                                                      variant: "text-sm/semibold",
                                                                      color: "text-default",
                                                                      className: ta.NV,
                                                                      children: y.title,
                                                                  }),
                                                                  (0, i.jsxs)(e0.E, {
                                                                      variant: "text-sm/normal",
                                                                      color: "text-link",
                                                                      children: ["@", y.timestamp],
                                                                  }),
                                                              ],
                                                          })
                                                        : (0, i.jsx)(e3.g, {
                                                              className: ta.UU,
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
                            className: ta.o1,
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
                                                                "aria-label": O.intl.string(O.t.P8tvKG),
                                                                className: ta.mM,
                                                            }),
                                                            c ? O.intl.string(O.t.p9jC2r) : O.intl.string(O.t.U7f3bK),
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
                                    "aria-label": O.intl.string(O.t.jSnJGT),
                                }),
                            ],
                        }),
                    ],
                }),
                C && (0, i.jsx)(tl, { channel: l, message: u, replyChainLength: N }),
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
        o = (0, h.bG)([eM.A], () => eM.A.getStickerPreview(t, n.drafts.type));
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
                                          "aria-label": O.intl.formatToPlainString(O.t.BGAQRd, { name: e.name }),
                                          onClick: () => (0, eP.x5)(t, n.drafts.type),
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
var tp = n(442433);
n(827669);
var tE = n(448702);
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
                    : (0, tp.L3)(e, async () => {
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
        className: a()(l, tE.M0),
        onContextMenu: h,
        children: [
            (0, i.jsxs)("div", {
                className: tE.iz,
                children: [
                    (0, i.jsx)("span", { className: tE.UU, children: t }),
                    null != o
                        ? (0, i.jsx)("span", { className: tE.z3, children: o })
                        : (0, i.jsx)("span", { className: tE.h_, children: s }),
                ],
            }),
            (0, i.jsx)("div", {
                className: tE.o1,
                children: (0, i.jsx)(ts, { onClick: f, "aria-label": O.intl.string(O.t.cpT0Cq) }),
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
        this.waitFor(tA.A, eF.Ay, eB.A, eY.default), null != e && (tI = new Set(e));
    }
    hasId(e) {
        return tI.has(e);
    }
    getState() {
        return [...tI];
    }
}
let tS = new tT(tg.h, {}),
    ty = () => {
        let e = eB.A.getChannelId();
        if (null == e) return;
        let t = tA.A.getChannel(e);
        null != t && t.isPrivate() && (tI.has(t.getRecipientId()) || (tI.add(t.getRecipientId()), tS.emitChange()));
    },
    tN = () =>
        (0, i.jsxs)("div", {
            className: ta.eU,
            children: [
                (0, i.jsx)(e0.E, {
                    variant: "text-sm/medium",
                    className: a()(ta.Qq, ta.Fn),
                    children: O.intl.string(O.t["2UvR1E"]),
                }),
                (0, i.jsx)("div", {
                    className: ta.o1,
                    children: (0, i.jsx)(ts, { onClick: ty, "aria-label": O.intl.string(O.t.cpT0Cq) }),
                }),
            ],
        });
var tv = n(278351);
let tC = (e) => {
    let { error: t } = e;
    return (0, i.jsxs)("div", {
        className: tv.M,
        children: [
            (0, i.jsx)(e0.E, { variant: "text-xs/bold", color: "text-strong", children: O.intl.string(O.t["4VDCG0"]) }),
            t
                ? (0, i.jsx)(e0.E, { variant: "text-xs/medium", className: tv.z, children: O.intl.string(O.t.qNorwt) })
                : (0, i.jsx)(e0.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: O.intl.string(O.t["260qZS"]),
                  }),
        ],
    });
};
var tR = n(25201),
    tO = n(926321),
    tb = n(221933);
function tD(e) {
    var t, n;
    let { channelId: r } = e,
        s = (0, tR.vR)(r);
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
        className: a()(tb.kL, { [tb.Kd]: !s.dismissing }),
        children: (0, i.jsxs)("div", {
            className: tb.Qs,
            children: [
                (0, i.jsx)(tO.j, { size: "md", className: a()({ [tb.su]: o }) }),
                (0, i.jsx)(e0.E, { color: "text-default", variant: "text-sm/normal", children: l }),
            ],
        }),
    });
}
var tL = n(575293),
    tw = n(151282),
    tM = n(1372);
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
                    (0, i.jsx)(e0.E, {
                        color: "text-default",
                        className: a()(tM.Qq, tM.a3),
                        variant: "text-sm/normal",
                        children: O.intl.formatToPlainString(O.t["MQcRX/"], { timestamp: new Date(r).valueOf() }),
                    }),
                    (0, i.jsx)("div", {
                        className: tM.o1,
                        children: (0, i.jsx)(ts, {
                            onClick: function (e) {
                                e.stopPropagation(), (0, tw.Ps)(n);
                            },
                            "aria-label": O.intl.string(O.t.cpT0Cq),
                        }),
                    }),
                ],
            }),
        }),
    });
}
var tx = n(266599);
function tk(e) {
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
var tU = n(123583),
    tG = n(562708),
    tF = n(150934),
    tV = n(139286),
    tB = n(47167),
    tH = n(713654),
    tj = n(252263),
    tY = n(8455),
    tW = n(67259),
    tK = n(355026);
function t$(e) {
    let { thread: t, pendingScheduledMessage: n } = e,
        s = (0, tY.Vp)({ location: "ThreadsAlsoSendToChannelArea" }),
        [a, o] = (0, h.yK)([tA.A, tW.A], () => [
            t.isThread() ? tA.A.getChannel(t.parent_id) : null,
            tW.A.getAlsoSendToChannel(t.id),
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
        ((0, tV.A)(
            { name: tG.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL, type: tG.ImpressionTypes.VIEW },
            { disableTrack: null == a || !s.enabled },
            [a, s.enabled],
        ),
        !s.enabled || null == a)
    )
        return null;
    let c = (0, tH.gU)(a),
        d = O.intl.format(O.t.UqL10G, {
            callToActionHook: (e, t) =>
                (0, i.jsx)(
                    e0.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: tK.Pf,
                        children: O.intl.string(O.t.Pi3JW7),
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
        children: (0, i.jsx)(tF.S, { checked: o, disabled: null != n, onChange: u, label: d, labelType: "secondary" }),
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
    tX = n(625928),
    tZ = n(135261),
    tQ = n(820066),
    tJ = n(922016),
    t0 = n(375499),
    t1 = n(267889),
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
                      children: (0, i.jsx)(tZ.P, {
                          slateEditor: o,
                          options: s.markdown,
                          iconClassName: t3.C7,
                          dividerClassName: t3.us,
                      }),
                  }),
                  (0, i.jsx)(tJ.Y, {
                      targetElementRef: l,
                      renderPopout: (e) => {
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
var t4 = n(698279);
function t5(e, t, s, a, o) {
    let [l, u] = r.useState(!1),
        c = r.useCallback(
            (r, d, _, h, p, E) => {
                if (l) return;
                u(!0);
                let g = eM.A.getStickerPreview(o, t.drafts.type)?.map((e) => e.id) ?? [],
                    A = ej.A.getUploads(o, t.drafts.type) ?? [];
                if (null == d && !h && !p && (0, eI.xz)(A, o)) {
                    u(!1),
                        (0, f.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("72365"),
                                n.e("28758"),
                                n.e("42657"),
                                n.e("44667"),
                                n.e("59913"),
                                n.e("6922"),
                                n.e("3480"),
                                n.e("84570"),
                                n.e("64801"),
                                n.e("12815"),
                                n.e("49681"),
                                n.e("93924"),
                                n.e("76602"),
                                n.e("21921"),
                                n.e("34530"),
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
                                n.e("8371"),
                                n.e("99011"),
                                n.e("12743"),
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
function t7(e, t, n) {
    return r.useCallback(
        (i) => {
            if (t === eQ.oU.CREATE_FORUM_POST || t === eQ.oU.CREATE_ANNOUNCEMENT_POST) n.current?.insertGIF(i);
            else {
                let t = {
                    gif_provider: i.provider ?? (0, eT.cf)(),
                    load_id: eW.A.getAnalyticsID(),
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
function t8(e) {
    return r.useCallback(
        (t) => {
            let { emoji: n, willClose: i } = t,
                r = e.current;
            null != n && null != r && r.insertEmoji({ emoji: n, willClose: i }), i && (0, eg.v8)();
        },
        [e],
    );
}
function t9(e) {
    let { editorRef: t, disabled: n, textValue: i, channelId: s, chatInputType: a, submit: o } = e,
        { analyticsLocations: l } = (0, T.Ay)();
    return r.useCallback(
        (e, r) => {
            n ||
                (a === eQ.oU.CREATE_ANNOUNCEMENT_POST || (0, ex.YS)(r, i, s, a.drafts.type)
                    ? ((0, tf.fh)({
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
function ne(e) {
    return r.useCallback(
        (t) => {
            let n = e.current;
            null != n && n.insertKaomoji(t), (0, eg.v8)(), n?.focus();
        },
        [e],
    );
}
function nt(e, t, n) {
    let i = r.useCallback(() => {
            t || (0, eg.r$)(t4.kx.EMOJI, e, n);
        }, [t, e, n]),
        s = r.useCallback(() => {
            !t && e.gifs?.allowSending && (0, eg.r$)(t4.kx.GIF, e, n);
        }, [t, e, n]),
        a = r.useCallback(() => {
            !t && e.stickers?.allowSending && (0, eg.r$)(t4.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, e$.Vo)({ event: eo.jej.TOGGLE_EMOJI_POPOUT, handler: i }),
        (0, e$.Vo)({ event: eo.jej.TOGGLE_GIF_PICKER, handler: s }),
        (0, e$.Vo)({ event: eo.jej.TOGGLE_STICKER_PICKER, handler: a });
}
function nn(e, t, n) {
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
function na(e, t, n, i) {
    let r = e.getGuildId(),
        s = (0, h.bG)([eS.A], () => null != r && eS.A.isLurking(r), [r]),
        a = (0, h.bG)([eF.Ay, eY.default], () => {
            let e = eY.default.getCurrentUser();
            return (null != r && null != e ? eF.Ay.getMember(r, e.id)?.isPending : null) ?? !1;
        }),
        o = (0, h.cf)([eV.A], () => {
            let r = e.isPrivate(),
                s = eV.A.computePermissions(e),
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
                canEveryoneSendMessages: eq.MJ(eo.xBc.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, i, a]);
    return { isLurking: s, isPendingMember: a, ...o };
}
function no(e, t, n) {
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
let nl = (e, t) => ({
        handleAutocompleteVisibilityChange: r.useCallback(
            (n) => {
                n && (0, eg.v8)(e, t);
            },
            [e, t],
        ),
    }),
    nu = r.memo(
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
                eu = nr(t),
                ec = r.useRef(null),
                ed = r.useRef(null),
                eh = r.useRef(null),
                eI = r.useRef(null),
                eT = r.useRef(null),
                eS = r.useCallback(() => eh.current?.getSlateEditor() ?? null, []);
            J?.(eh.current);
            let eN = (0, S.A)(R),
                ev = (0, eG.n)("ChannelTextAreaContainer"),
                eC = (0, h.cf)([A.Ay], () => ({
                    expressionPickerFormat: A.Ay.expressionPickerFormat,
                    condensePickerWhenNarrow: A.Ay.condensePickerWhenNarrow,
                })),
                eR = ev ? eC.expressionPickerFormat : A.IG.FLEXIBLE,
                eO = !ev || eC.condensePickerWhenNarrow,
                [eb, eD] = r.useState(!eN);
            (0, g.i4)(eu, (e) => {
                let { width: t } = e;
                return eD(!eN && (null == t || t > 450));
            });
            let eL = eR === A.IG.HIDDEN,
                eM = eR === A.IG.CONDENSED || (eR === A.IG.FLEXIBLE && eO && !eb),
                { activeCommand: eP, activeCommandSection: ex } = (0, h.cf)([P.A], () => ({
                    activeCommand: O.commands?.enabled ? P.A.getActiveCommand(R.id) : null,
                    activeCommandSection: O.commands?.enabled ? P.A.getActiveCommandSection(R.id) : null,
                })),
                {
                    isLurking: ek,
                    isPendingMember: eV,
                    disabled: eB,
                    canAttachFiles: ej,
                    canCreateThreads: eW,
                    canEveryoneSendMessages: e$,
                } = na(R, O, eP, N),
                eq = O.toolbarType === eQ.O1.STATIC,
                e0 = !eU.D_.useSetting() && !(0, eX.isAndroidWeb)() && null != window.ResizeObserver,
                e1 = !e0 || !O.commands?.enabled || !b || "/" !== s,
                e2 = (0, ey.A)(),
                { fontSize: e3 } = (0, h.cf)([A.Ay], () => ({ fontSize: A.Ay.fontSize })),
                e6 = (0, h.bG)([eH.A], () => eH.A.isEnabled());
            nt(O, eB, R.id);
            let { eventEmitter: e4, handleEditorSelectionChanged: e5 } = nn(eh, s, o),
                e7 = r.useRef(s);
            e7.current = s;
            let e8 = r.useCallback(
                    (e, t, n) => {
                        "/" === t && "" === e7.current && O.commands?.enabled && e4.emit("command-sentinel-typed"),
                            U?.(e, t, n);
                    },
                    [U, O.commands?.enabled, e4],
                ),
                { submitting: e9, submit: te, handleSubmit: tt } = t5(H, O, eh, eT, R.id),
                { autocompleteRef: tn, handleMaybeShowAutocomplete: ti, handleHideAutocomplete: tr } = ni(),
                ts = t7(te, O, eh),
                ta = t8(eh),
                tl = t9({ editorRef: eh, disabled: eB, textValue: s, channelId: R.id, chatInputType: O, submit: H }),
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
                td = ne(eh),
                t_ = r.useCallback(() => eT?.current?.hide(), []),
                { editorHeight: tf, handleResize: tp } = ns(G),
                {
                    handleTab: tE,
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
                { expressionPickerView: tT, shouldHideExpressionPicker: ty, handleOuterClick: tv } = no(O, eh, R.id),
                { selectedAutocompleteInputType: tO, selectedAutocompleteInputError: tb } = (function (e, t) {
                    let [n, i] = r.useState({
                            selectedAutocompleteInputType: null,
                            selectedAutocompleteInputError: !1,
                        }),
                        s = r.useCallback(() => {
                            let e,
                                n = t.current?.getSlateEditor();
                            null != n && (e = tQ.VW.getSelectedParentOfType(n, eE.mk)?.[0]),
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
                { handleAutocompleteVisibilityChange: tw } = nl(O, R.id),
                tM = (function (e) {
                    let { type: t, channelId: n } = e;
                    return (0, ef.bG)([y.A], () => {
                        let e = y.A.activeViewType();
                        return null != e && e === t && y.A.activeChannelId() === n && y.A.shouldShowPopup();
                    }, [t, n]);
                })({ type: O, channelId: R.id }),
                tG = r.useCallback(() => {
                    e4.emit("submit-failure");
                }, [e4]);
            (0, eZ.R)(e4, R.guild_id, R.id);
            let tF = null != k,
                tV = (eB && !((ek || eV) && e$)) || (e9 && O.submit?.useDisabledStylesOnSubmit),
                tB = null;
            null != eP ? (tB = w?.(eP, ex, tx.g$)) : (!eB || eW) && (tB = L?.(tF, tx.g$));
            let tH = e0 && null != o && !eB && O.showCharacterCount && null == eP,
                tj = e0 && !__OVERLAY__ && null != o && null == eP && O.toolbarType !== eQ.O1.NONE && !eB,
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
                        { activeCommandOption: c, activeCommandOptionStates: d } = (0, h.cf)([P.A], () => ({
                            activeCommandOption: P.A.getActiveOption(t.id),
                            activeCommandOptionStates: P.A.getOptionStates(t.id),
                        })),
                        _ = (0, h.bG)([eF.Ay, eY.default, tS], () => {
                            let e = eY.default.getCurrentUser();
                            if (null == e || !e.isStaff() || !t.isDM()) return !1;
                            let n = eY.default.getUser(t.getRecipientId());
                            if (!n?.isStaff()) return !1;
                            let i = eF.Ay.getNicknames(n.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
                            return i ? !tS.hasId(n.id) && i : (tI.delete(n.id) && tS.emitChange(), !1);
                        }),
                        f = (0, tR.Ay)((e) => e.channelId === t.id);
                    return r.useMemo(() => {
                        let e = [],
                            r = [];
                        return (
                            null != t.guild_id &&
                                n === eQ.oU.NORMAL &&
                                r.push((0, i.jsx)(tL.A, { guildId: t.guild_id, channel: t, className: tx.UW })),
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
                            _ && e.push((0, i.jsx)(tN, {})),
                            null != o && e.push((0, i.jsx)(tP, { pendingScheduledMessage: o })),
                            "timestampMentionInput" === l && r.push((0, i.jsx)(tC, { error: u ?? !1 })),
                            f && e.push((0, i.jsx)(tD, { channelId: t.id })),
                            { stacked: e, floating: r }
                        );
                    }, [s, c, d, t, f, a, _, n, o, l, u]);
                })({
                    channel: R,
                    type: O,
                    activeCommand: eP,
                    pendingReply: k,
                    pendingScheduledMessage: es,
                    selectedAutocompleteInputType: tO,
                    selectedAutocompleteInputError: tb,
                }),
                tW = 0 === s.trim().length,
                tK = null != k ? [Z, to].filter(Boolean).join(" ") : Z,
                t$ = O.layout === eQ.wt.INLINE,
                tJ = O.layout === eQ.wt.FLUSH,
                t0 = (0, i.jsx)("div", { ref: ed, className: tx.BW }),
                t1 = tM ? (0, i.jsx)(M, { align: "right", positionTargetRef: ed, channel: R }) : null,
                t2 =
                    null != x
                        ? x()
                        : (0, i.jsx)(tU.A, {
                              type: O,
                              disabled: eB,
                              channel: R,
                              handleSubmit: tt,
                              isEmpty: tW,
                              showAllButtons: !eM && !eL,
                              expressionButtonsHidden: eL,
                          }),
                t3 = tH
                    ? (0, i.jsx)(tX.A, {
                          type: O,
                          textValue: s,
                          className: X,
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
                            tj && eq
                                ? (0, i.jsx)(t6, { getSlateEditor: eS, onInsertEmoji: ta, type: O, channel: R })
                                : tj
                                  ? (0, i.jsx)(tZ.A, {
                                        ref: eT,
                                        getSlateEditor: eS,
                                        containerRef: eI,
                                        options: O.markdown,
                                    })
                                  : null,
                            (0, i.jsxs)("div", {
                                ref: eu,
                                className: a()(l, {
                                    [tx.gM]: !0,
                                    [tx.h9]: tV,
                                    [tx.mr]: Y,
                                    [tx.Wn]: d.Fr,
                                    [tx.Ls]: t$,
                                    [tx.AH]: tJ,
                                    [tx.z3]: null != D,
                                }),
                                children: [
                                    t$ || tJ ? null : (0, i.jsx)(tk, { bars: tY }),
                                    (0, i.jsxs)("div", {
                                        ref: eI,
                                        onScroll: t_,
                                        className: a()(c, {
                                            [tx.xx]: !0,
                                            [tx.k6]: !en,
                                            [tx.Ri]: tY.stacked.length > 0,
                                        }),
                                        children: [
                                            (0, i.jsx)(th, { channelId: R.id, chatInputType: O }),
                                            O.hideAttachmentArea
                                                ? null
                                                : (0, i.jsx)(tq.A, { channelId: R.id, type: O, canAttachFiles: ej }),
                                            (0, i.jsxs)("div", {
                                                className: a()(tx.vW, {
                                                    [tx.BF]: tV,
                                                    [tx.RL]:
                                                        O !== eQ.oU.EDIT && (null != tB || (tV && null == tB) || ek),
                                                    [tx.fk]: O === eQ.oU.THREAD_CREATION,
                                                    [tx.TZ]:
                                                        O === eQ.oU.CREATE_FORUM_POST ||
                                                        O === eQ.oU.FORWARD_MESSAGE_INPUT,
                                                    [tx.$i]: O === eQ.oU.USER_PROFILE_REPLY,
                                                }),
                                                onMouseDown: tv,
                                                children: [
                                                    t1,
                                                    tB,
                                                    (0, i.jsx)(p.vN, {
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
                                                            placeholder: v,
                                                            required: m,
                                                            accessibilityLabel: C,
                                                            isPreviewing: (ek || eV) && e$,
                                                            channel: R,
                                                            type: O,
                                                            canPasteFiles: ej,
                                                            uploadPromptCharacterCount: eo.CS1,
                                                            maxCharacterCount: $ ?? e2,
                                                            allowNewLines: q,
                                                            "aria-describedby": tK,
                                                            onChange: e8,
                                                            onResize: tp,
                                                            onBlur: F,
                                                            onFocus: V,
                                                            onKeyDown: B,
                                                            onSubmit: te,
                                                            onSubmitFailure: tG,
                                                            onTab: tE,
                                                            onEnter: tg,
                                                            onMoveSelection: tA,
                                                            onSelectionChanged: e5,
                                                            onMaybeShowAutocomplete: ti,
                                                            onHideAutocomplete: tr,
                                                            promptToUpload: j,
                                                            fontSize: e3,
                                                            spellcheckEnabled: e6,
                                                            canOnlyUseTextCommands: tF,
                                                            className: a()(
                                                                {
                                                                    [tx.QI]: O === eQ.oU.THREAD_CREATION,
                                                                    [tx.AV]: O === eQ.oU.PROFILE_BIO_INPUT,
                                                                    [tx.GR]: O === eQ.oU.OVERLAY_INLINE_REPLY,
                                                                },
                                                                _,
                                                            ),
                                                            "aria-labelledby": Q,
                                                            showValueWhenDisabled: ea,
                                                        }),
                                                    }),
                                                    t2,
                                                    t0,
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(tz, { channel: R, type: O, pendingScheduledMessage: es }),
                                    e1 ? null : (0, i.jsx)(e_, { ref: ec, channel: R, canOnlyUseTextCommands: tF }),
                                    (0, i.jsx)(ep.A, {
                                        ref: tn,
                                        channel: R,
                                        canMentionRoles: W,
                                        canMentionChannels: K,
                                        useNewSlashCommands: e0,
                                        canOnlyUseTextCommands: tF,
                                        canSendStickers: O.stickers?.allowSending,
                                        canSendSoundmoji: O.soundmoji?.allowSending,
                                        textValue: s,
                                        focused: b,
                                        expressionPickerView: tT,
                                        type: O,
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
                                    t3,
                                    et,
                                ],
                            }),
                            (0, i.jsx)(E.U, { error: D }),
                            ty
                                ? null
                                : (0, i.jsx)(eA.A, {
                                      positionTargetRef: eu,
                                      type: O,
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
