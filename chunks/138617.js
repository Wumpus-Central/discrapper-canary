"use strict";
n.d(t, {
    HG: () => ne,
    Sk: () => nr,
    C: () => t9,
    v7: () => nl,
    Zx: () => t4,
    L0: () => ni,
    N_: () => nt,
    MD: () => na,
    Ay: () => nc,
    uW: () => no,
    NO: () => t8,
    ck: () => ns,
    ml: () => nn,
    Vu: () => t5,
});
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(143236),
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
    A = n(765671),
    E = n(775602),
    C = n(793574),
    I = n(688810),
    y = n(177640),
    S = n(989837),
    v = n(289873),
    N = n(268218),
    _ = n(750506),
    T = n(60809),
    j = n(375708),
    b = n(131552);
let R = { width: 500, height: T.$V },
    O = (0, N.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("95726"),
                n.e("21277"),
                n.e("60513"),
                n.e("18240"),
                n.e("45043"),
                n.e("2677"),
                n.e("47141"),
                n.e("42430"),
                n.e("6683"),
                n.e("34552"),
                n.e("93103"),
                n.e("71210"),
                n.e("71273"),
                n.e("88342"),
                n.e("37977"),
                n.e("89421"),
                n.e("43780"),
                n.e("98965"),
                n.e("80854"),
                n.e("35395"),
                n.e("28662"),
                n.e("8362"),
                n.e("71133"),
                n.e("35313"),
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
                n.e("59132"),
                n.e("89203"),
                n.e("35621"),
            ]).then(n.bind(n, 854379)),
        webpackId: 854379,
        renderLoader: () => (0, l.jsx)("div", { className: b.R4, style: R, children: (0, l.jsx)(v.y, {}) }),
    }),
    M = { height: T.$V },
    w = i.memo(function (e) {
        let { positionTargetRef: t, align: n, ...i } = e;
        return (0, l.jsx)("span", {
            style: T.sK,
            children: (0, l.jsx)(_.nE, {
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
                        style: M,
                        "aria-label": j.intl.string(j.t["3CNGLK"]),
                        children: t && (0, l.jsx)(O, { ...i }),
                    });
                },
            }),
        });
    });
var L = n(861382),
    k = n(735438),
    P = n.n(k),
    D = n(537652),
    U = n(155718),
    V = n(95561),
    G = n(659280),
    F = n(579940),
    H = n(962125),
    B = n(915089),
    W = n(850992),
    K = n(464651),
    z = n(286509),
    Z = n(721768),
    Y = n(842209),
    q = n(210978),
    J = n(392054),
    $ = n(168186),
    X = n(990078),
    Q = n(939249),
    ee = n(802019),
    et = n(664929),
    en = n(282214);
let el = [16, 8, 8, 8];
function ei(e) {
    let {
            className: t,
            channel: n,
            sections: s,
            activeCategoryIndex: a,
            filteredSectionId: o,
            onSectionClick: c,
            applicationCommandListRef: u,
        } = e,
        d = i.useRef(null),
        h = i.useCallback(
            (e, t) => {
                let n = 8;
                return s[t + 1]?.type === J.Hf.BUILT_IN && (n += 8), 32 + n;
            },
            [s],
        ),
        m = i.useCallback((e, t) => (t ? 8 * (s[e + 1]?.type !== J.Hf.BUILT_IN) : 8 * (0 !== e)), [s]),
        p = i.useCallback(
            (e, t) => {
                let i = s[t];
                if (null == i) return;
                let r = (0, et.Rg)(i),
                    u = 4 * (i.type === J.Hf.BUILT_IN),
                    d = 32 - 2 * u,
                    h = (0, l.jsx)(r, {
                        channel: n,
                        section: i,
                        isSelected: null != o ? i.id === o : a === t,
                        padding: u,
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
            [a, n, c, s, o],
        );
    return 0 === s.length
        ? null
        : (0, l.jsx)("div", {
              className: r()(t, en.iE),
              children: (0, l.jsx)(ee.A, {
                  categoryListRef: d,
                  expressionsListRef: u,
                  store: W.LS,
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
    er = n(73510),
    ea = n(652215),
    eo = n(13297),
    ec = n(911385);
let eu = [8, 8, 0, 8],
    ed = P().debounce(() => {
        (0, V.zV)(ea.HAw.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300),
    eh = i.forwardRef(function (e, t) {
        let { channel: n, canOnlyUseTextCommands: s } = e,
            a = i.useRef(!1),
            o = i.useRef(0),
            [c, u] = i.useState(0),
            d = i.useRef(null),
            [h, m] = i.useState(!1),
            p = W.LS.useStore((e) => e.activeCategoryIndex);
        i.useEffect(() => {
            (0, V.zV)(ea.HAw.APPLICATION_COMMAND_BROWSER_OPENED);
        }, []);
        let {
                sectionDescriptors: f,
                activeSections: g,
                commandsByActiveSection: x,
                hasMoreAfter: A,
                commands: E,
                filteredSectionId: C,
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
                activeCategoryIndex: p,
                isScrolling: a,
                listRef: d,
                onActiveCategoryIndexChange: (e) => {
                    let t = g[e];
                    if (null != t) {
                        let e = f.findIndex((e) => e.id === t.id);
                        W.LS.setActiveCategoryIndex(e);
                    }
                },
                scrollOffset: 20,
                searchQuery: "",
            }),
            v = (e) => {
                let t = g.length,
                    n = x.reduce((e, t) => e + t.data.length, 0) - 7 * !!A;
                A && e + 420 > 48 * t + 56 * n - 512 && I(), S(e), ed(), (o.current = e);
            },
            N = i.useRef(v);
        i.useEffect(() => {
            N.current = v;
        }),
            i.useEffect(() => {
                N.current(o.current);
            }, [E]);
        let _ = i.useCallback((e) => (e !== g.length - 1 || A ? 16 : 0), [g.length, A]),
            T = x.map((e) => e.data.length);
        i.useEffect(() => {
            null != d.current && h && null != c && d.current.scrollRowIntoView(c);
        }, [h, c]),
            i.useLayoutEffect(() => {
                null != C && d.current?.scrollToSectionTop(0);
            }, [E, C]);
        let b = i.useCallback(
                (e) => {
                    e.id === C || e.id === er.Ik.FRECENCY ? (y(null), d.current?.scrollToSectionTop(0)) : y(e.id);
                },
                [y, C],
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
                    if (null == c) return !e && (u(0), !0);
                    if (null == c) return !1;
                    let t = 0,
                        n = 0;
                    for (let e of x)
                        if (((t = n), c < (n += e.data.length))) {
                            let n = e.data[c - t],
                                l = f.find((e) => e.id === n.applicationId);
                            R(n, l, (0, $.$S)(e.section));
                            break;
                        }
                    return !0;
                },
                onMoveSelection: (e) => {
                    if (0 === E.length) return !0;
                    let t = 7 * !!A,
                        n = E.length + t,
                        l = null == c ? 0 : c + e;
                    return l >= n ? (l = n - 1) : l < 0 && (l = 0), u(l), m(!0), !0;
                },
            }),
            [E.length, x, A, f, R, c],
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
                                        message: j.intl.format(j.t.WoQXT6, { applicationName: i.name }),
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
                        r = `${i.section.id}:${s?.id ?? e}`;
                    if (
                        null == s ||
                        (i.section.id !== s.applicationId && i.section.id !== er.Ik.FRECENCY) ||
                        s.inputType === J.y$.PLACEHOLDER
                    )
                        return (0, l.jsx)(es.A, {}, r);
                    let a = f.find((e) => e.id === s.applicationId);
                    return (0, l.jsx)(
                        G.Ay.NewCommand,
                        {
                            index: e,
                            command: s,
                            channel: n,
                            className: eo.D5,
                            selected: c === e,
                            showImage: i.section.id !== s.applicationId,
                            section: a,
                            onClick: () => R(s, a, (0, $.$S)(i.section)),
                            onHover: () => {
                                u(null), m(!1);
                            },
                        },
                        r,
                    );
                },
                [n, x, R, f, c],
            ),
            L = (0, B.GV)();
        return (
            (0, F.gf)(L, !0, (0, G.aI)(c)),
            i.useEffect(
                () => () => {
                    (0, F.nQ)();
                },
                [],
            ),
            (0, l.jsxs)(G.Ay, {
                id: L,
                className: eo.x9,
                innerClassName: eo.iE,
                onMouseDown: em,
                children: [
                    (0, l.jsx)(ei, {
                        className: eo.H$,
                        channel: n,
                        sections: f,
                        filteredSectionId: C,
                        activeCategoryIndex: p,
                        onSectionClick: b,
                        applicationCommandListRef: d,
                    }),
                    (0, l.jsx)(H.A, {
                        role: "listbox",
                        className: eo.p_,
                        listPadding: eu,
                        onScroll: v,
                        renderRow: w,
                        renderSection: M,
                        renderSectionHeader: O,
                        rowCount: g.length,
                        rowCountBySection: T,
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
function em(e) {
    e.preventDefault();
}
var ep = n(702841),
    ef = n(305070),
    eg = n(31498),
    ex = n(598071),
    eA = n(151271),
    eE = n(731231),
    eC = n(256265),
    eI = n(703244),
    ey = n(857071),
    eS = n(135621),
    ev = n(105330),
    eN = n(495544),
    e_ = n(559908),
    eT = n(620141),
    ej = n(224964),
    eb = n(31408),
    eR = n(536283);
function eO(e) {
    let { editorHeight: t, textValue: n, channelId: l } = e,
        s = i.useRef(n),
        r = (0, ev.l)({ editorHeight: t }),
        a = (0, ej.A)(),
        o = (0, m.bG)([e_.Ay, eN.default], () => e_.Ay.isComboing(eN.default.getId(), l)),
        c = r?.left ?? 0,
        u = (r?.top ?? 0) - 16,
        d = 0 === n.length,
        h = i.useMemo(() => 0.05 > Math.random(), [d]);
    return (
        i.useEffect(() => {
            0 !== n.length && n !== s.current && o && (a.fire(c, u, h ? { sprite: eR.dR } : null), (s.current = n));
        }, [n, o, c, u, h, a]),
        null
    );
}
function eM(e) {
    return (0, l.jsx)(eT.A, { confettiLocation: eb.k.CHAT_INPUT, children: (0, l.jsx)(eO, { ...e }) });
}
var ew = n(931664),
    eL = n(631576),
    ek = n(68935),
    eP = n(406704),
    eD = n(885386),
    eU = n(951260),
    eV = n(696451),
    eG = n(576705),
    eF = n(309010),
    eH = n(638128),
    eB = n(522602),
    eW = n(287809),
    eK = n(821102),
    ez = n(174459),
    eZ = n(234320),
    eY = n(625494),
    eq = n(488926),
    eJ = n(723702),
    e$ = n(486319),
    eX = n(355622),
    eQ = n(392553),
    e0 = n(834730),
    e1 = n(140735),
    e2 = n(176781),
    e6 = n(463930),
    e3 = n(935063),
    e7 = n(73392),
    e4 = n(650019),
    e5 = n(763754),
    e8 = n(967144),
    e9 = n(118517),
    te = n(976860),
    tt = n(747926),
    tn = n(232835),
    tl = n(285796),
    ti = n(630816);
function ts(e) {
    let { onClick: t, "aria-label": n } = e;
    return (0, l.jsx)(Q.D, {
        className: ti.b,
        onClick: t,
        "aria-label": n,
        children: (0, l.jsx)(tl.a, { size: "md", color: "currentColor", className: ti.u }),
    });
}
var tr = n(1468);
let ta = "channel-reply-bar-a11y-description";
function to(e) {
    let { channel: t, message: n, replyChainLength: s } = e,
        r = i.useRef(s);
    return (
        i.useEffect(() => {
            r.current = s;
        }),
        i.useEffect(() => {
            (0, V.zV)(ea.HAw.THREAD_NUDGE_SHOWN, {
                type: "Reply Chain (3)",
                reply_chain_length: r.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t]),
        (0, l.jsxs)(Q.D, {
            onClick: function () {
                (0, e9.Jx)(t.id), (0, tt.Tv)(t, n, "Reply Chain Nudge");
            },
            className: tr._r,
            focusProps: { offset: { right: -4, left: -4 } },
            children: [
                (0, l.jsx)(e0.E, {
                    color: "text-default",
                    className: tr.Qq,
                    variant: "text-sm/normal",
                    children: j.intl.format(j.t.B3V0FM, { count: Math.min(10, s + 1) }),
                }),
                (0, l.jsx)(e0.E, {
                    color: "text-link",
                    className: tr.NG,
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
        { reply: s, chatInputType: a } = e,
        { channel: o, message: c, shouldMention: u, showMentionToggle: d, mediaMention: h } = s,
        {
            guildId: p,
            nick: f,
            colorString: g,
            colorStrings: x,
            colorRoleName: A,
            authorId: E,
            displayNameStyles: C,
        } = (0, e5.Ay)(c),
        I = (0, e8.gn)(p, E, x),
        y = (0, e7.a)({ displayNameStyles: C }),
        S = (0, e4.A)(h, c.attachments),
        v =
            ((t = o.id),
            (n = c.id),
            (0, m.bG)([tn.A], () => {
                let e = n;
                for (let n = 0; n < 10; n++) {
                    let l = tn.A.getMessage(t, e);
                    if (l?.type !== ea.lAJ.REPLY || null == l.messageReference) return n;
                    e = l.messageReference.message_id;
                }
                return 10;
            }, [t, n])),
        N = (0, eP.n)(o, c),
        _ = a.showThreadPromptOnReply && v >= 2 && N;
    return (0, l.jsx)("div", {
        className: tr.e1,
        children: (0, l.jsxs)("div", {
            className: tr.kL,
            children: [
                (0, l.jsxs)("div", {
                    className: tr.eU,
                    children: [
                        (0, l.jsx)(e1.A, { id: ta, children: j.intl.formatToPlainString(j.t.EpJL4E, { username: f }) }),
                        (0, l.jsx)(Q.D, {
                            onClick: () => (0, te.pX)(ea.BVt.CHANNEL(o.getGuildId(), o.id, c.id)),
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, l.jsx)(e0.E, {
                                color: "text-default",
                                className: r()(tr.Qq, tr.Fn),
                                variant: "text-sm/normal",
                                children: j.intl.format(j.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, l.jsxs)(
                                            i.Fragment,
                                            {
                                                children: [
                                                    "\xa0",
                                                    S?.title != null
                                                        ? (0, l.jsxs)("span", {
                                                              className: tr.H8,
                                                              children: [
                                                                  S.isClip &&
                                                                      (0, l.jsx)(e2.x, {
                                                                          size: "xs",
                                                                          color: "currentColor",
                                                                          className: tr.gS,
                                                                      }),
                                                                  (0, l.jsx)(e0.E, {
                                                                      variant: "text-sm/semibold",
                                                                      color: "text-default",
                                                                      className: tr.NV,
                                                                      children: S.title,
                                                                  }),
                                                                  (0, l.jsxs)(e0.E, {
                                                                      variant: "text-sm/normal",
                                                                      color: "text-link",
                                                                      children: ["@", S.timestamp],
                                                                  }),
                                                              ],
                                                          })
                                                        : (0, l.jsx)(e6.g, {
                                                              className: tr.UU,
                                                              name: f,
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
                            className: tr.o1,
                            children: [
                                d &&
                                    (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(X.m, {
                                                asContainer: !0,
                                                text: u ? j.intl.string(j.t.DH2o6R) : j.intl.string(j.t.utGGIY),
                                                children: (0, l.jsx)(Q.D, {
                                                    role: "switch",
                                                    "aria-checked": u,
                                                    onClick: function (e) {
                                                        e.stopPropagation(), (0, e9.vz)(o.id, !u);
                                                    },
                                                    children: (0, l.jsxs)(e0.E, {
                                                        variant: "text-sm/bold",
                                                        color: u ? "text-link" : "text-muted",
                                                        className: tr.Z4,
                                                        children: [
                                                            (0, l.jsx)(e3.X, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": j.intl.string(j.t.P8tvKG),
                                                                className: tr.mM,
                                                            }),
                                                            u ? j.intl.string(j.t.p9jC2r) : j.intl.string(j.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, l.jsx)("div", { className: tr.me, "aria-hidden": !0 }),
                                        ],
                                    }),
                                (0, l.jsx)(ts, {
                                    onClick: function (e) {
                                        e.stopPropagation(), (0, e9.Jx)(o.id);
                                    },
                                    "aria-label": j.intl.string(j.t.jSnJGT),
                                }),
                            ],
                        }),
                    ],
                }),
                _ && (0, l.jsx)(to, { channel: o, message: c, replyChainLength: v }),
            ],
        }),
    });
}
var tu = n(749314),
    td = n(148355),
    th = n(74995);
let tm = i.memo(function (e) {
    let { channelId: t, chatInputType: n } = e,
        [s, r] = i.useState(null),
        a = (0, m.bG)([ew.A], () => ew.A.getStickerPreview(t, n.drafts.type));
    return n.stickers?.allowSending && null != a && 0 !== a.length
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", {
                      className: th.Tz,
                      children: a.map((e) =>
                          (0, l.jsxs)(
                              "div",
                              {
                                  className: th.dp,
                                  children: [
                                      (0, l.jsx)(Q.D, {
                                          onFocus: () => r(e.id),
                                          onBlur: () => r(null),
                                          className: th.b,
                                          "aria-label": j.intl.formatToPlainString(j.t.BGAQRd, { name: e.name }),
                                          onClick: () => (0, eL.x5)(t, n.drafts.type),
                                          children: (0, l.jsx)("div", {
                                              className: th.Nk,
                                              children: (0, l.jsx)(tl.a, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: th.ut,
                                              }),
                                          }),
                                      }),
                                      (0, l.jsx)(td.A, {
                                          isInteracting: s === e.id,
                                          className: th.UV,
                                          size: 48,
                                          sticker: e,
                                      }),
                                  ],
                              },
                              e.id,
                          ),
                      ),
                  }),
                  (0, l.jsx)(tu.A, { className: th.R }),
              ],
          })
        : null;
});
var tp = n(612394);
n(321073);
var tf = n(442433);
n(827669);
var tg = n(448702);
function tx(e) {
    let t,
        s,
        a,
        { className: o, activeCommand: c, activeOption: u, optionStates: d, channelId: h } = e,
        m = i.useCallback(
            (e) => {
                let t = c?.rootCommand?.id;
                null == t
                    ? e.preventDefault()
                    : (0, tf.L3)(e, async () => {
                          let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                          return (n) => (0, l.jsx)(e, { ...n, id: t, label: j.intl.string(j.t.oJ1Muw) });
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
        (t = u.displayName), (s = u.displayDescription), (a = e?.success ? null : e?.error);
    } else (t = `/${c.displayName}`), (s = c.displayDescription), (a = null);
    return (0, l.jsxs)("div", {
        className: r()(o, tg.M0),
        onContextMenu: m,
        children: [
            (0, l.jsxs)("div", {
                className: tg.iz,
                children: [
                    (0, l.jsx)("span", { className: tg.UU, children: t }),
                    null != a
                        ? (0, l.jsx)("span", { className: tg.z3, children: a })
                        : (0, l.jsx)("span", { className: tg.h_, children: s }),
                ],
            }),
            (0, l.jsx)("div", {
                className: tg.o1,
                children: (0, l.jsx)(ts, { onClick: p, "aria-label": j.intl.string(j.t.cpT0Cq) }),
            }),
        ],
    });
}
var tA = n(228366),
    tE = n(734057);
let tC = new Set();
class tI extends m.Ay.PersistedStore {
    static displayName = "PTOStore";
    static persistKey = "PTOStore";
    initialize(e) {
        this.waitFor(tE.A, eV.Ay, eF.A, eW.default), null != e && (tC = new Set(e));
    }
    hasId(e) {
        return tC.has(e);
    }
    getState() {
        return [...tC];
    }
}
let ty = new tI(tA.h, {}),
    tS = () => {
        let e = eF.A.getChannelId();
        if (null == e) return;
        let t = tE.A.getChannel(e);
        null != t && t.isPrivate() && (tC.has(t.getRecipientId()) || (tC.add(t.getRecipientId()), ty.emitChange()));
    },
    tv = () =>
        (0, l.jsxs)("div", {
            className: tr.eU,
            children: [
                (0, l.jsx)(e0.E, {
                    variant: "text-sm/medium",
                    className: r()(tr.Qq, tr.Fn),
                    children: j.intl.string(j.t["2UvR1E"]),
                }),
                (0, l.jsx)("div", {
                    className: tr.o1,
                    children: (0, l.jsx)(ts, { onClick: tS, "aria-label": j.intl.string(j.t.cpT0Cq) }),
                }),
            ],
        });
var tN = n(278351);
let t_ = (e) => {
    let { error: t } = e;
    return (0, l.jsxs)("div", {
        className: tN.M,
        children: [
            (0, l.jsx)(e0.E, { variant: "text-xs/bold", color: "text-strong", children: j.intl.string(j.t["4VDCG0"]) }),
            t
                ? (0, l.jsx)(e0.E, { variant: "text-xs/medium", className: tN.z, children: j.intl.string(j.t.qNorwt) })
                : (0, l.jsx)(e0.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: j.intl.string(j.t["260qZS"]),
                  }),
        ],
    });
};
var tT = n(25201),
    tj = n(926321),
    tb = n(221933);
function tR(e) {
    var t, n;
    let { channelId: i } = e,
        s = (0, tT.vR)(i);
    if (null == s) return null;
    let a = s.rolling,
        o =
            ((t = a),
            (n = s.results),
            t
                ? j.intl.string(j.t["x/FIRX"])
                : null == n
                  ? ""
                  : j.intl.formatToPlainString(j.t.xU4pF1, { total: n.reduce((e, t) => e + t, 0) }));
    return (0, l.jsx)("div", {
        className: r()(tb.kL, { [tb.Kd]: !s.dismissing }),
        children: (0, l.jsxs)("div", {
            className: tb.Qs,
            children: [
                (0, l.jsx)(tj.j, { size: "md", className: r()({ [tb.su]: a }) }),
                (0, l.jsx)(e0.E, { color: "text-default", variant: "text-sm/normal", children: o }),
            ],
        }),
    });
}
var tO = n(575293),
    tM = n(151282),
    tw = n(1372);
function tL(e) {
    let { pendingScheduledMessage: t } = e,
        { channelId: n, scheduledTimestamp: i } = t;
    return (0, l.jsx)("div", {
        className: tw.e1,
        children: (0, l.jsx)("div", {
            className: tw.kL,
            children: (0, l.jsxs)("div", {
                className: tw.g3,
                children: [
                    (0, l.jsx)(e0.E, {
                        color: "text-default",
                        className: r()(tw.Qq, tw.a3),
                        variant: "text-sm/normal",
                        children: j.intl.formatToPlainString(j.t["MQcRX/"], { timestamp: new Date(i).valueOf() }),
                    }),
                    (0, l.jsx)("div", {
                        className: tw.o1,
                        children: (0, l.jsx)(ts, {
                            onClick: function (e) {
                                e.stopPropagation(), (0, tM.Ps)(n);
                            },
                            "aria-label": j.intl.string(j.t.cpT0Cq),
                        }),
                    }),
                ],
            }),
        }),
    });
}
var tk = n(266599);
function tP(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, l.jsx)("div", { children: e }, t)),
        s = t.floating.map((e, t) => (0, l.jsx)(i.Fragment, { children: e }, t));
    return 0 === n.length && 0 === s.length
        ? null
        : (0, l.jsxs)(i.Fragment, {
              children: [
                  s.length > 0 && (0, l.jsx)("div", { className: tk.Vq, children: s }),
                  n.length > 0 && (0, l.jsx)("div", { className: tk.MD, children: n }),
              ],
          });
}
var tD = n(123583),
    tU = n(562708),
    tV = n(150934),
    tG = n(139286),
    tF = n(47167),
    tH = n(713654),
    tB = n(252263),
    tW = n(8455),
    tK = n(67259),
    tz = n(355026);
function tZ(e) {
    let { thread: t, pendingScheduledMessage: n } = e,
        s = (0, tW.Vp)({ location: "ThreadsAlsoSendToChannelArea" }),
        [r, a] = (0, m.yK)([tE.A, tK.A], () => [
            t.isThread() ? tE.A.getChannel(t.parent_id) : null,
            tK.A.getAlsoSendToChannel(t.id),
        ]),
        o = (0, tF.Ay)(r),
        c = i.useCallback(
            (e) => {
                ez.default.track(ea.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_TOGGLED, {
                    value: e,
                    guild_id: t.guild_id,
                    channel_id: t.id,
                }),
                    (0, tB.B)({ channelId: t.id, enabled: e });
            },
            [t],
        );
    if (
        ((0, tG.A)(
            { name: tU.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL, type: tU.ImpressionTypes.VIEW },
            { disableTrack: null == r || !s.enabled },
            [r, s.enabled],
        ),
        !s.enabled || null == r)
    )
        return null;
    let u = (0, tH.gU)(r),
        d = j.intl.format(j.t.UqL10G, {
            callToActionHook: (e, t) =>
                (0, l.jsx)(
                    e0.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: tz.Pf,
                        children: j.intl.string(j.t.Pi3JW7),
                    },
                    t,
                ),
            channelName: o,
            channelNameHook: (e, t) =>
                (0, l.jsxs)(
                    e0.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: tz.Pf,
                        children: [null == u ? null : (0, l.jsx)(u, { color: "currentColor", className: tz.Kk }, t), e],
                    },
                    t,
                ),
        });
    return (0, l.jsx)("div", {
        className: tz.kL,
        children: (0, l.jsx)(tV.S, { checked: a, disabled: null != n, onChange: c, label: d, labelType: "secondary" }),
    });
}
function tY(e) {
    let { channel: t, type: n, pendingScheduledMessage: i } = e,
        { shouldShow: s } = (function (e) {
            let { channel: t, type: n } = e,
                l = (0, m.bG)([tE.A], () => {
                    let e = tE.A.getChannel(t.parent_id);
                    return e?.isForumLikeChannel() ?? !1;
                }),
                i = [eX.oU.NORMAL, eX.oU.SIDEBAR].includes(n);
            return { shouldShow: t.isThread() && !l && i };
        })({ channel: t, type: n });
    return s ? (0, l.jsx)(tZ, { thread: t, pendingScheduledMessage: i }) : null;
}
var tq = n(822610),
    tJ = n(625928),
    t$ = n(135261),
    tX = n(820066),
    tQ = n(922016),
    t0 = n(375499),
    t1 = n(267889),
    t2 = n(307731),
    t6 = n(128934);
function t3(e) {
    let { getSlateEditor: t, onInsertEmoji: n, type: s, channel: r } = e,
        a = t(),
        o = i.useRef(null);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              id: "slate-toolbar",
              className: t6.aL,
              children: [
                  (0, l.jsx)("div", {
                      className: t6.Wy,
                      children: (0, l.jsx)(t$.P, {
                          slateEditor: a,
                          options: s.markdown,
                          iconClassName: t6.C7,
                          dividerClassName: t6.us,
                      }),
                  }),
                  (0, l.jsx)(tQ.Y, {
                      targetElementRef: o,
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, l.jsx)(t1.A, {
                              persistSearch: !0,
                              channel: r,
                              closePopout: t,
                              onSelectEmoji: (e) => {
                                  let { emoji: l, willClose: i } = e;
                                  n({ emoji: l, willClose: i }), i && t();
                              },
                              pickerIntention:
                                  s.expressionPicker?.emojiIntention ?? t2.EmojiIntention.COMMUNITY_CONTENT,
                          });
                      },
                      position: "bottom",
                      animation: tQ.Y.Animation.NONE,
                      align: "left",
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, l.jsx)(t0.A, { ...e, ref: o, active: n, className: t6.Z8, tabIndex: 0 });
                      },
                  }),
              ],
          });
}
var t7 = n(698279);
function t4(e, t, s, r, a) {
    let [o, c] = i.useState(!1),
        u = i.useCallback(
            (i, d, h, m, f, g) => {
                if (o) return;
                c(!0);
                let A = ew.A.getStickerPreview(a, t.drafts.type)?.map((e) => e.id) ?? [],
                    E = eB.A.getUploads(a, t.drafts.type) ?? [];
                if (null == d && !m && !f && (0, eC.xz)(E, a)) {
                    c(!1),
                        (0, p.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("6957"),
                                n.e("4460"),
                                n.e("21277"),
                                n.e("44667"),
                                n.e("28130"),
                                n.e("9662"),
                                n.e("61851"),
                                n.e("33063"),
                                n.e("64801"),
                                n.e("12815"),
                                n.e("49681"),
                                n.e("81647"),
                                n.e("34530"),
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
                                n.e("12682"),
                                n.e("98972"),
                                n.e("36150"),
                                n.e("8371"),
                                n.e("33097"),
                                n.e("12743"),
                                n.e("99011"),
                                n.e("10014"),
                                n.e("86861"),
                                n.e("70961"),
                                n.e("23685"),
                                n.e("42516"),
                                n.e("84688"),
                            ]).then(n.bind(n, 538899));
                            return (t) =>
                                (0, l.jsx)(e, {
                                    ...t,
                                    threadId: a,
                                    attachments: E,
                                    sendMessage: () => u(i, void 0, void 0, void 0, !0),
                                });
                        });
                    return;
                }
                e({
                    value: i,
                    uploads: E,
                    stickers: A,
                    command: d,
                    commandOptionValues: h,
                    isGif: m,
                    gifMetadata: g,
                }).then((e) => {
                    let { shouldClear: n, shouldRefocus: l } = e,
                        i = (n && t.submit?.clearOnSubmit) ?? !1,
                        o = null != s.current;
                    i &&
                        (a !== eF.A.getChannelId()
                            ? x.A.saveDraft(a, "", t.drafts.type)
                            : o && (s.current?.clearValue(), r.current?.hide())),
                        o && (c(!1), (0, eA.v8)(), l && s.current?.focus());
                });
            },
            [s, r, e, o, t, a],
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
function t5(e, t, n) {
    return i.useCallback(
        (l) => {
            if (t === eX.oU.CREATE_FORUM_POST || t === eX.oU.CREATE_ANNOUNCEMENT_POST) n.current?.insertGIF(l);
            else {
                let t = {
                    gif_provider: l.provider ?? (0, eI.cf)(),
                    load_id: eK.A.getAnalyticsID(),
                    source_object: "GIF Picker",
                    gif_url: l.url,
                    gif_id: l.id,
                };
                e(l.url, void 0, void 0, !0, void 0, t);
            }
            (0, eA.v8)(), n.current?.focus();
        },
        [n, e, t],
    );
}
function t8(e) {
    return i.useCallback(
        (t) => {
            let { emoji: n, willClose: l } = t,
                i = e.current;
            null != n && null != i && i.insertEmoji({ emoji: n, willClose: l }), l && (0, eA.v8)();
        },
        [e],
    );
}
function t9(e) {
    let { editorRef: t, disabled: n, textValue: l, channelId: s, chatInputType: r, submit: a } = e,
        { analyticsLocations: o } = (0, I.Ay)();
    return i.useCallback(
        (e, i) => {
            n ||
                (r === eX.oU.CREATE_ANNOUNCEMENT_POST || (0, ek.YS)(i, l, s, r.drafts.type)
                    ? ((0, tp.fh)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != ew.A.getStickerPreview(s, r.drafts.type),
                          analyticsLocations: o,
                      }),
                      (0, eL.$x)(s, e, r.drafts.type))
                    : (a({ value: "", uploads: void 0, stickers: [e.id] }), t.current?.clearValue()),
                (0, eA.v8)(),
                t.current?.focus());
        },
        [n, l, s, t, o, a, r],
    );
}
function ne(e) {
    return i.useCallback(
        (t) => {
            let n = e.current;
            null != n && n.insertKaomoji(t), (0, eA.v8)(), n?.focus();
        },
        [e],
    );
}
function nt(e, t, n) {
    let l = i.useCallback(() => {
            t || (0, eA.r$)(t7.kx.EMOJI, e, n);
        }, [t, e, n]),
        s = i.useCallback(() => {
            !t && e.gifs?.allowSending && (0, eA.r$)(t7.kx.GIF, e, n);
        }, [t, e, n]),
        r = i.useCallback(() => {
            !t && e.stickers?.allowSending && (0, eA.r$)(t7.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, eZ.Vo)({ event: ea.jej.TOGGLE_EMOJI_POPOUT, handler: l }),
        (0, eZ.Vo)({ event: ea.jej.TOGGLE_GIF_PICKER, handler: s }),
        (0, eZ.Vo)({ event: ea.jej.TOGGLE_STICKER_PICKER, handler: r });
}
function nn(e, t, n) {
    let [l] = i.useState(() => new a.EventEmitter());
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
function nl() {
    let e = i.useRef(null),
        t = i.useCallback(() => {
            e.current?.onMaybeShowAutocomplete();
        }, []),
        n = i.useCallback(() => {
            e.current?.onHideAutocomplete();
        }, []);
    return { autocompleteRef: e, handleMaybeShowAutocomplete: t, handleHideAutocomplete: n };
}
function ni(e) {
    let t = i.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
}
function ns(e) {
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
function nr(e, t, n, l) {
    let i = e.getGuildId(),
        s = (0, m.bG)([ey.A], () => null != i && ey.A.isLurking(i), [i]),
        r = (0, m.bG)([eV.Ay, eW.default], () => {
            let e = eW.default.getCurrentUser();
            return (null != i && null != e ? eV.Ay.getMember(i, e.id)?.isPending : null) ?? !1;
        }),
        a = (0, m.cf)([eG.A], () => {
            let i = e.isPrivate(),
                s = eG.A.computePermissions(e),
                a = h.zy(s, ea.xBc.CREATE_PUBLIC_THREADS) || h.zy(s, ea.xBc.CREATE_PRIVATE_THREADS),
                o =
                    (!t.permissions?.requireCreateTherads || a) &&
                    (!t.permissions?.requireSendMessages || h.zy(s, ea.xBc.SEND_MESSAGES)),
                c = o && h.zy(s, ea.xBc.ATTACH_FILES),
                u = null != n,
                d = (0, eP.UJ)(e);
            return {
                disabled: l || r || (!i && !o) || d,
                canAttachFiles: !0 === t.attachments && (i || r || c || u),
                canCreateThreads: a,
                canEveryoneSendMessages: eq.MJ(ea.xBc.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, l, r]);
    return { isLurking: s, isPendingMember: r, ...a };
}
function na(e, t, n) {
    let [l, s, r] = (0, eA.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], u.x),
        a = (0, m.bG)([S.A], () => S.A.shouldShowPopup() && S.A.activeViewType() === e && S.A.activeChannelId() === n);
    i.useEffect(
        () => () => {
            (0, eA.v8)(e, n);
        },
        [e, n],
    );
    let o = i.useCallback(() => {
            null != l || a || t.current?.handleOuterClick();
        }, [l, a, t]),
        c = null == l || null == s || s !== e || r !== n;
    return { expressionPickerView: l, shouldHideExpressionPicker: c, handleOuterClick: o };
}
let no = (e, t) => ({
        handleAutocompleteVisibilityChange: i.useCallback(
            (n) => {
                n && (0, eA.v8)(e, t);
            },
            [e, t],
        ),
    }),
    nc = i.memo(
        i.forwardRef(function (e, t) {
            let n,
                {
                    textValue: s,
                    richValue: a,
                    className: o,
                    innerClassName: u,
                    editorClassName: h,
                    id: p,
                    required: x,
                    disabled: v,
                    placeholder: N,
                    accessibilityLabel: _,
                    channel: T,
                    type: j,
                    focused: b,
                    error: R,
                    renderAttachButton: O,
                    renderApplicationCommandIcon: M,
                    renderButtons: k,
                    pendingReply: P,
                    onChange: D,
                    onResize: U,
                    onBlur: V,
                    onFocus: G,
                    onKeyDown: F,
                    onSubmit: H,
                    promptToUpload: B,
                    highlighted: W,
                    canMentionRoles: K,
                    canMentionChannels: z,
                    maxCharacterCount: Z,
                    showRemainingCharsAfterCount: Y,
                    allowNewLines: q = !0,
                    characterCountClassName: J,
                    "aria-describedby": $,
                    "aria-labelledby": X,
                    setEditorRef: Q,
                    autoCompletePosition: ee,
                    children: et,
                    disableThemedBackground: en = !1,
                    emojiPickerCloseOnModalOuterClick: el,
                    parentModalKey: ei,
                    pendingScheduledMessage: es,
                    showValueWhenDisabled: er = !1,
                } = e;
            c()(null != j, "chat input type must be set");
            let { analyticsLocations: eo } = (0, I.Ay)(C.A.CHANNEL_TEXT_AREA),
                ec = ni(t),
                eu = i.useRef(null),
                ed = i.useRef(null),
                em = i.useRef(null),
                eC = i.useRef(null),
                eI = i.useRef(null),
                ey = i.useCallback(() => em.current?.getSlateEditor() ?? null, []);
            Q?.(em.current);
            let ev = (0, y.A)(T),
                eN = (0, eU.n)("ChannelTextAreaContainer"),
                e_ = (0, m.cf)([E.Ay], () => ({
                    expressionPickerFormat: E.Ay.expressionPickerFormat,
                    condensePickerWhenNarrow: E.Ay.condensePickerWhenNarrow,
                })),
                eT = eN ? e_.expressionPickerFormat : E.IG.FLEXIBLE,
                ej = !eN || e_.condensePickerWhenNarrow,
                [eb, eR] = i.useState(!ev);
            (0, A.i4)(ec, (e) => {
                let { width: t } = e;
                return eR(!ev && (null == t || t > 450));
            });
            let eO = eT === E.IG.HIDDEN,
                ew = eT === E.IG.CONDENSED || (eT === E.IG.FLEXIBLE && ej && !eb),
                { activeCommand: eL, activeCommandSection: ek } = (0, m.cf)([L.A], () => ({
                    activeCommand: j.commands?.enabled ? L.A.getActiveCommand(T.id) : null,
                    activeCommandSection: j.commands?.enabled ? L.A.getActiveCommandSection(T.id) : null,
                })),
                {
                    isLurking: eP,
                    isPendingMember: eG,
                    disabled: eF,
                    canAttachFiles: eB,
                    canCreateThreads: eK,
                    canEveryoneSendMessages: eZ,
                } = nr(T, j, eL, v),
                eq = j.toolbarType === eX.O1.STATIC,
                e0 = !eD.D_.useSetting() && !(0, eJ.isAndroidWeb)() && null != window.ResizeObserver,
                e1 = !e0 || !j.commands?.enabled || !b || "/" !== s,
                e2 = (0, eS.A)(),
                { fontSize: e6 } = (0, m.cf)([E.Ay], () => ({ fontSize: E.Ay.fontSize })),
                e3 = (0, m.bG)([eH.A], () => eH.A.isEnabled());
            nt(j, eF, T.id);
            let { eventEmitter: e7, handleEditorSelectionChanged: e4 } = nn(em, s, a),
                e5 = i.useRef(s);
            e5.current = s;
            let e8 = i.useCallback(
                    (e, t, n) => {
                        "/" === t && "" === e5.current && j.commands?.enabled && e7.emit("command-sentinel-typed"),
                            D?.(e, t, n);
                    },
                    [D, j.commands?.enabled, e7],
                ),
                { submitting: e9, submit: te, handleSubmit: tt } = t4(H, j, em, eI, T.id),
                { autocompleteRef: tn, handleMaybeShowAutocomplete: tl, handleHideAutocomplete: ti } = nl(),
                ts = t5(te, j, em),
                tr = t8(em),
                to = t9({ editorRef: em, disabled: eF, textValue: s, channelId: T.id, chatInputType: j, submit: H }),
                tu = i.useCallback(
                    (e, t, n) => {
                        let l = em.current;
                        null != e &&
                            null != l &&
                            (ez.default.track(ea.HAw.SOUNDMOJI_SELECT, {
                                channel_id: T.id,
                                guild_id: T.guild_id,
                                sound_guild_id: e.guildId,
                                sound_id: e.soundId,
                                source: t,
                            }),
                            l.insertSound(e)),
                            n && (0, eA.v8)(),
                            l?.focus();
                    },
                    [em, T.id, T.guild_id],
                ),
                td = ne(em),
                th = i.useCallback(() => eI?.current?.hide(), []),
                { editorHeight: tp, handleResize: tf } = ns(U),
                {
                    handleTab: tg,
                    handleEnter: tA,
                    handleMoveSelection: tE,
                } = ((n = i.useCallback(
                    () => !!(!e1 && eu.current?.onTabOrEnter(!1)) || tn.current?.onTabOrEnter(!1) || !1,
                    [e1, eu, tn],
                )),
                {
                    handleTab: n,
                    handleEnter: i.useCallback(
                        () => !!(!e1 && eu.current?.onTabOrEnter(!0)) || tn.current?.onTabOrEnter(!0) || !1,
                        [e1, eu, tn],
                    ),
                    handleMoveSelection: i.useCallback(
                        (e) => !!(!e1 && eu.current?.onMoveSelection(e)) || tn.current?.onMoveSelection(e) || !1,
                        [e1, eu, tn],
                    ),
                }),
                { expressionPickerView: tI, shouldHideExpressionPicker: tS, handleOuterClick: tN } = na(j, em, T.id),
                { selectedAutocompleteInputType: tj, selectedAutocompleteInputError: tb } = (function (e, t) {
                    let [n, l] = i.useState({
                            selectedAutocompleteInputType: null,
                            selectedAutocompleteInputError: !1,
                        }),
                        s = i.useCallback(() => {
                            let e,
                                n = t.current?.getSlateEditor();
                            null != n && (e = tX.VW.getSelectedParentOfType(n, eg.mk)?.[0]),
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
                })(e7, em),
                { handleAutocompleteVisibilityChange: tM } = no(j, T.id),
                tw = (function (e) {
                    let { type: t, channelId: n } = e;
                    return (0, ep.bG)([S.A], () => {
                        let e = S.A.activeViewType();
                        return null != e && e === t && S.A.activeChannelId() === n && S.A.shouldShowPopup();
                    }, [t, n]);
                })({ type: j, channelId: T.id }),
                tU = i.useCallback(() => {
                    e7.emit("submit-failure");
                }, [e7]);
            (0, e$.R)(e7, T.guild_id, T.id);
            let tV = null != P,
                tG = (eF && !((eP || eG) && eZ)) || (e9 && j.submit?.useDisabledStylesOnSubmit),
                tF = null;
            null != eL ? (tF = M?.(eL, ek, tk.g$)) : (!eF || eK) && (tF = O?.(tV, tk.g$));
            let tH = e0 && null != a && !eF && j.showCharacterCount && null == eL,
                tB = e0 && !__OVERLAY__ && null != a && null == eL && j.toolbarType !== eX.O1.NONE && !eF,
                tW = (function (e) {
                    let {
                            channel: t,
                            type: n,
                            activeCommand: s,
                            pendingReply: r,
                            pendingScheduledMessage: a,
                            selectedAutocompleteInputType: o,
                            selectedAutocompleteInputError: c,
                        } = e,
                        { activeCommandOption: u, activeCommandOptionStates: d } = (0, m.cf)([L.A], () => ({
                            activeCommandOption: L.A.getActiveOption(t.id),
                            activeCommandOptionStates: L.A.getOptionStates(t.id),
                        })),
                        h = (0, m.bG)([eV.Ay, eW.default, ty], () => {
                            let e = eW.default.getCurrentUser();
                            if (null == e || !e.isStaff() || !t.isDM()) return !1;
                            let n = eW.default.getUser(t.getRecipientId());
                            if (!n?.isStaff()) return !1;
                            let l = eV.Ay.getNicknames(n.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
                            return l ? !ty.hasId(n.id) && l : (tC.delete(n.id) && ty.emitChange(), !1);
                        }),
                        p = (0, tT.Ay)((e) => e.channelId === t.id);
                    return i.useMemo(() => {
                        let e = [],
                            i = [];
                        return (
                            null != t.guild_id &&
                                n === eX.oU.NORMAL &&
                                i.push((0, l.jsx)(tO.A, { guildId: t.guild_id, channel: t, className: tk.UW })),
                            null != s &&
                                e.push(
                                    (0, l.jsx)(tx, {
                                        activeCommand: s,
                                        activeOption: u ?? null,
                                        optionStates: d,
                                        channelId: t.id,
                                    }),
                                ),
                            null != r && e.push((0, l.jsx)(tc, { reply: r, chatInputType: n })),
                            h && e.push((0, l.jsx)(tv, {})),
                            null != a && e.push((0, l.jsx)(tL, { pendingScheduledMessage: a })),
                            "timestampMentionInput" === o && i.push((0, l.jsx)(t_, { error: c ?? !1 })),
                            p && e.push((0, l.jsx)(tR, { channelId: t.id })),
                            { stacked: e, floating: i }
                        );
                    }, [s, u, d, t, p, r, h, n, a, o, c]);
                })({
                    channel: T,
                    type: j,
                    activeCommand: eL,
                    pendingReply: P,
                    pendingScheduledMessage: es,
                    selectedAutocompleteInputType: tj,
                    selectedAutocompleteInputError: tb,
                }),
                tK = 0 === s.trim().length,
                tz = null != P ? [$, ta].filter(Boolean).join(" ") : $,
                tZ = j.layout === eX.wt.INLINE,
                tQ = j.layout === eX.wt.FLUSH,
                t0 = (0, l.jsx)("div", { ref: ed, className: tk.BW }),
                t1 = tw ? (0, l.jsx)(w, { align: "right", positionTargetRef: ed, channel: T }) : null,
                t2 =
                    null != k
                        ? k()
                        : (0, l.jsx)(tD.A, {
                              type: j,
                              disabled: eF,
                              channel: T,
                              handleSubmit: tt,
                              isEmpty: tK,
                              showAllButtons: !ew && !eO,
                              expressionButtonsHidden: eO,
                          }),
                t6 = tH
                    ? (0, l.jsx)(tJ.A, {
                          type: j,
                          textValue: s,
                          className: J,
                          maxCharacterCount: Z,
                          showRemainingCharsAfterCount: Y,
                      })
                    : null;
            return (
                i.useEffect(() => {
                    b && eY._.dispatch(ea.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: T.id });
                }, [b, T.id]),
                (0, l.jsx)(ex.Sv, {
                    value: e7,
                    children: (0, l.jsxs)(I.f5, {
                        value: eo,
                        children: [
                            tB && eq
                                ? (0, l.jsx)(t3, { getSlateEditor: ey, onInsertEmoji: tr, type: j, channel: T })
                                : tB
                                  ? (0, l.jsx)(t$.A, {
                                        ref: eI,
                                        getSlateEditor: ey,
                                        containerRef: eC,
                                        options: j.markdown,
                                    })
                                  : null,
                            (0, l.jsxs)("div", {
                                ref: ec,
                                className: r()(o, {
                                    [tk.gM]: !0,
                                    [tk.h9]: tG,
                                    [tk.mr]: W,
                                    [tk.Wn]: d.Fr,
                                    [tk.Ls]: tZ,
                                    [tk.AH]: tQ,
                                    [tk.z3]: null != R,
                                }),
                                children: [
                                    tZ || tQ ? null : (0, l.jsx)(tP, { bars: tW }),
                                    (0, l.jsxs)("div", {
                                        ref: eC,
                                        onScroll: th,
                                        className: r()(u, {
                                            [tk.xx]: !0,
                                            [tk.k6]: !en,
                                            [tk.Ri]: tW.stacked.length > 0,
                                        }),
                                        children: [
                                            (0, l.jsx)(tm, { channelId: T.id, chatInputType: j }),
                                            j.hideAttachmentArea
                                                ? null
                                                : (0, l.jsx)(tq.A, { channelId: T.id, type: j, canAttachFiles: eB }),
                                            (0, l.jsxs)("div", {
                                                className: r()(tk.vW, {
                                                    [tk.BF]: tG,
                                                    [tk.RL]:
                                                        j !== eX.oU.EDIT && (null != tF || (tG && null == tF) || eP),
                                                    [tk.fk]: j === eX.oU.THREAD_CREATION,
                                                    [tk.TZ]:
                                                        j === eX.oU.CREATE_FORUM_POST ||
                                                        j === eX.oU.FORWARD_MESSAGE_INPUT,
                                                    [tk.$i]: j === eX.oU.USER_PROFILE_REPLY,
                                                }),
                                                onMouseDown: tN,
                                                children: [
                                                    t1,
                                                    tF,
                                                    (0, l.jsx)(f.vN, {
                                                        ringTarget: ec,
                                                        ringClassName: tk.Rg,
                                                        children: (0, l.jsx)(eQ.A, {
                                                            ref: em,
                                                            id: p,
                                                            focused: b,
                                                            useSlate: e0,
                                                            textValue: s,
                                                            richValue: a,
                                                            disabled: eF,
                                                            placeholder: N,
                                                            required: x,
                                                            accessibilityLabel: _,
                                                            isPreviewing: (eP || eG) && eZ,
                                                            channel: T,
                                                            type: j,
                                                            canPasteFiles: eB,
                                                            uploadPromptCharacterCount: ea.CS1,
                                                            maxCharacterCount: Z ?? e2,
                                                            allowNewLines: q,
                                                            "aria-describedby": tz,
                                                            onChange: e8,
                                                            onResize: tf,
                                                            onBlur: V,
                                                            onFocus: G,
                                                            onKeyDown: F,
                                                            onSubmit: te,
                                                            onSubmitFailure: tU,
                                                            onTab: tg,
                                                            onEnter: tA,
                                                            onMoveSelection: tE,
                                                            onSelectionChanged: e4,
                                                            onMaybeShowAutocomplete: tl,
                                                            onHideAutocomplete: ti,
                                                            promptToUpload: B,
                                                            fontSize: e6,
                                                            spellcheckEnabled: e3,
                                                            canOnlyUseTextCommands: tV,
                                                            className: r()(
                                                                {
                                                                    [tk.QI]: j === eX.oU.THREAD_CREATION,
                                                                    [tk.AV]: j === eX.oU.PROFILE_BIO_INPUT,
                                                                    [tk.GR]: j === eX.oU.OVERLAY_INLINE_REPLY,
                                                                },
                                                                h,
                                                            ),
                                                            "aria-labelledby": X,
                                                            showValueWhenDisabled: er,
                                                        }),
                                                    }),
                                                    t2,
                                                    t0,
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(tY, { channel: T, type: j, pendingScheduledMessage: es }),
                                    e1 ? null : (0, l.jsx)(eh, { ref: eu, channel: T, canOnlyUseTextCommands: tV }),
                                    (0, l.jsx)(ef.A, {
                                        ref: tn,
                                        channel: T,
                                        canMentionRoles: K,
                                        canMentionChannels: z,
                                        useNewSlashCommands: e0,
                                        canOnlyUseTextCommands: tV,
                                        canSendStickers: j.stickers?.allowSending,
                                        canSendSoundmoji: j.soundmoji?.allowSending,
                                        textValue: s,
                                        focused: b,
                                        expressionPickerView: tI,
                                        type: j,
                                        targetRef: ec,
                                        editorRef: em,
                                        onSendMessage: te,
                                        onSendSticker: to,
                                        onVisibilityChange: tM,
                                        editorScrollerRef: eC,
                                        editorHeight: tp,
                                        barsHeight: 40 * tW.floating.length,
                                        setValue: (e, t) => e8?.(null, e, t),
                                        position: ee,
                                    }),
                                    (0, l.jsx)(eM, { textValue: s, editorHeight: tp, channelId: T.id }),
                                    t6,
                                    et,
                                ],
                            }),
                            (0, l.jsx)(g.U, { error: R }),
                            tS
                                ? null
                                : (0, l.jsx)(eE.A, {
                                      positionTargetRef: ec,
                                      type: j,
                                      onSelectGIF: ts,
                                      onSelectEmoji: tr,
                                      onSelectSticker: to,
                                      onSelectSound: tu,
                                      onSelectKaomoji: td,
                                      channel: T,
                                      closeOnModalOuterClick: el,
                                      parentModalKey: ei,
                                      position: "top",
                                      align: "right",
                                      positionLayerClassName: tk.BD,
                                  }),
                        ],
                    }),
                })
            );
        }),
    );
