"use strict";
n.d(t, {
    HG: () => no,
    Sk: () => nE,
    C: () => na,
    v7: () => n_,
    Zx: () => ni,
    L0: () => nu,
    N_: () => nl,
    MD: () => nh,
    Ay: () => nf,
    uW: () => nm,
    NO: () => ns,
    ck: () => nc,
    ml: () => nd,
    Vu: () => nr,
});
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(143236),
    l = n(284009),
    d = n.n(l),
    _ = n(942381),
    u = n(607399),
    c = n(136722),
    E = n(17928),
    h = n(192308),
    m = n(187322),
    f = n(511274),
    g = n(465532),
    p = n(765671),
    A = n(775602),
    I = n(793574),
    T = n(688810),
    S = n(177640),
    N = n(989837),
    C = n(289873),
    R = n(268218),
    O = n(750506),
    y = n(60809),
    v = n(985018),
    D = n(131552);
let L = { width: 500, height: y.$V },
    b = (0, R.Fe)({
        createPromise: () =>
            Promise.all([n.e("93103"), n.e("97278"), n.e("35313"), n.e("38208"), n.e("35621")]).then(n.bind(n, 854379)),
        webpackId: 854379,
        renderLoader: () => (0, i.jsx)("div", { className: D.R4, style: L, children: (0, i.jsx)(C.y, {}) }),
    }),
    w = { height: y.$V },
    P = r.memo(function (e) {
        let { positionTargetRef: t, align: n, ...r } = e;
        return (0, i.jsx)("span", {
            style: y.sK,
            children: (0, i.jsx)(O.nE, {
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
                        style: w,
                        "aria-label": v.intl.string(v.t["3CNGLK"]),
                        children: t && (0, i.jsx)(b, { ...r }),
                    });
                },
            }),
        });
    });
var k = n(861382),
    M = n(735438),
    U = n.n(M),
    x = n(537652),
    G = n(155718),
    V = n(58149),
    F = n(659280),
    B = n(579940),
    H = n(962125),
    j = n(915089),
    W = n(850992),
    Y = n(464651),
    K = n(286509),
    z = n(721768),
    $ = n(842209),
    q = n(210978),
    X = n(392054),
    Z = n(168186),
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
            onSectionClick: d,
            applicationCommandListRef: _,
        } = e,
        u = r.useRef(null),
        c = r.useCallback(
            (e, t) => {
                let n = 8;
                return s[t + 1]?.type === X.Hf.BUILT_IN && (n += 8), 32 + n;
            },
            [s],
        ),
        E = r.useCallback((e, t) => (t ? 8 * (s[e + 1]?.type !== X.Hf.BUILT_IN) : 8 * (0 !== e)), [s]),
        h = r.useCallback(
            (e, t) => {
                let r = s[t];
                if (null == r) return;
                let a = (0, et.Rg)(r),
                    _ = 4 * (r.type === X.Hf.BUILT_IN),
                    u = 32 - 2 * _,
                    c = (0, i.jsx)(a, {
                        channel: n,
                        section: r,
                        isSelected: null != l ? r.id === l : o === t,
                        padding: _,
                        width: u,
                        height: u,
                        selectable: !0,
                    }),
                    E = r.type !== X.Hf.BUILT_IN && t < s.length - 1 && s[t + 1].type === X.Hf.BUILT_IN;
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
                                    children: c,
                                }),
                            }),
                            E ? (0, i.jsx)("hr", { className: en.zQ }) : null,
                        ],
                    },
                    r.id,
                );
            },
            [o, n, d, s, l],
        );
    return 0 === s.length
        ? null
        : (0, i.jsx)("div", {
              className: a()(t, en.iE),
              children: (0, i.jsx)(ee.A, {
                  categoryListRef: u,
                  expressionsListRef: _,
                  store: W.LS,
                  categories: s,
                  className: en.p_,
                  renderCategoryListItem: h,
                  rowCount: s.length,
                  categoryHeight: c,
                  listPadding: ei,
                  getScrollOffsetForIndex: E,
              }),
          });
}
var es = n(746388),
    ea = n(73510),
    eo = n(652215),
    el = n(13297),
    ed = n(911385);
let e_ = [8, 8, 0, 8],
    eu = U().debounce(() => {
        (0, V.zV)(eo.HAw.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300),
    ec = r.forwardRef(function (e, t) {
        let { channel: n, canOnlyUseTextCommands: s } = e,
            o = r.useRef(!1),
            l = r.useRef(0),
            [d, _] = r.useState(0),
            u = r.useRef(null),
            [c, E] = r.useState(!1),
            h = W.LS.useStore((e) => e.activeCategoryIndex);
        r.useEffect(() => {
            (0, V.zV)(eo.HAw.APPLICATION_COMMAND_BROWSER_OPENED);
        }, []);
        let {
                sectionDescriptors: m,
                activeSections: f,
                commandsByActiveSection: g,
                hasMoreAfter: p,
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
            N = (0, Y.Fk)({
                activeCategoryIndex: h,
                isScrolling: o,
                listRef: u,
                onActiveCategoryIndexChange: (e) => {
                    let t = f[e];
                    if (null != t) {
                        let e = m.findIndex((e) => e.id === t.id);
                        W.LS.setActiveCategoryIndex(e);
                    }
                },
                scrollOffset: 20,
                searchQuery: "",
            }),
            C = (e) => {
                let t = f.length,
                    n = g.reduce((e, t) => e + t.data.length, 0) - 7 * !!p;
                p && e + 420 > 48 * t + 56 * n - 512 && T(), N(e), eu(), (l.current = e);
            },
            R = r.useRef(C);
        r.useEffect(() => {
            R.current = C;
        }),
            r.useEffect(() => {
                R.current(l.current);
            }, [A]);
        let O = r.useCallback((e) => (e !== f.length - 1 || p ? 16 : 0), [f.length, p]),
            y = g.map((e) => e.data.length);
        r.useEffect(() => {
            null != u.current && c && null != d && u.current.scrollRowIntoView(d);
        }, [c, d]),
            r.useLayoutEffect(() => {
                null != I && u.current?.scrollToSectionTop(0);
            }, [A, I]);
        let D = r.useCallback(
                (e) => {
                    e.id === I || e.id === ea.Ik.FRECENCY ? (S(null), u.current?.scrollToSectionTop(0)) : S(e.id);
                },
                [S, I],
            ),
            L = r.useCallback(
                (e, t, i) => {
                    z.Gf({ channelId: n.id, command: e, section: t, location: X.Oh.DISCOVERY, triggerSection: i });
                },
                [n.id],
            );
        r.useImperativeHandle(
            t,
            () => ({
                onTabOrEnter: (e) => {
                    if (null == d) return !e && (_(0), !0);
                    if (null == d) return !1;
                    let t = 0,
                        n = 0;
                    for (let e of g)
                        if (((t = n), d < (n += e.data.length))) {
                            let n = e.data[d - t],
                                i = m.find((e) => e.id === n.applicationId);
                            L(n, i, (0, Z.$S)(e.section));
                            break;
                        }
                    return !0;
                },
                onMoveSelection: (e) => {
                    if (0 === A.length) return !0;
                    let t = 7 * !!p,
                        n = A.length + t,
                        i = null == d ? 0 : d + e;
                    return i >= n ? (i = n - 1) : i < 0 && (i = 0), _(i), E(!0), !0;
                },
            }),
            [A.length, g, p, m, L, d],
        );
        let b = r.useCallback(
                (e) => {
                    let t = f[e];
                    if (null == t) return null;
                    let r = (0, et.Rg)(t),
                        s = (0, i.jsx)(r, { channel: n, section: t, width: 16, height: 16, padding: 0 });
                    return (0, i.jsx)(K.A, { className: el.Km, icon: s, children: t.name }, e);
                },
                [n, f],
            ),
            w = r.useCallback(
                (e, t) => {
                    let n = e === f.length - 1,
                        r = f[e],
                        { data: s } = g[e];
                    return (0, i.jsxs)(
                        "ul",
                        {
                            role: "group",
                            "aria-label": r.name,
                            className: a()(el.Wy, { [el.YD]: n }),
                            children: [
                                t,
                                0 === s.length &&
                                    (0, i.jsx)(x.A, {
                                        message: v.intl.format(v.t.WoQXT6, { applicationName: r.name }),
                                        noResultsImageURL: ed,
                                        className: el.qK,
                                    }),
                            ],
                        },
                        e,
                    );
                },
                [f, g],
            ),
            P = r.useCallback(
                (e, t) => {
                    let r = g[t.sectionIndex],
                        s = r.data[t.sectionRowIndex],
                        a = `${r.section.id}:${s?.id ?? e}`;
                    if (
                        null == s ||
                        (r.section.id !== s.applicationId && r.section.id !== ea.Ik.FRECENCY) ||
                        s.inputType === X.y$.PLACEHOLDER
                    )
                        return (0, i.jsx)(es.A, {}, a);
                    let o = m.find((e) => e.id === s.applicationId);
                    return (0, i.jsx)(
                        F.Ay.NewCommand,
                        {
                            index: e,
                            command: s,
                            channel: n,
                            className: el.D5,
                            selected: d === e,
                            showImage: r.section.id !== s.applicationId,
                            section: o,
                            onClick: () => L(s, o, (0, Z.$S)(r.section)),
                            onHover: () => {
                                _(null), E(!1);
                            },
                        },
                        a,
                    );
                },
                [n, g, L, m, d],
            ),
            k = (0, j.GV)();
        return (
            (0, B.gf)(k, !0, (0, F.aI)(d)),
            r.useEffect(
                () => () => {
                    (0, B.nQ)();
                },
                [],
            ),
            (0, i.jsxs)(F.Ay, {
                id: k,
                className: el.x9,
                innerClassName: el.iE,
                onMouseDown: eE,
                children: [
                    (0, i.jsx)(er, {
                        className: el.H$,
                        channel: n,
                        sections: m,
                        filteredSectionId: I,
                        activeCategoryIndex: h,
                        onSectionClick: D,
                        applicationCommandListRef: u,
                    }),
                    (0, i.jsx)(H.A, {
                        role: "listbox",
                        className: el.p_,
                        listPadding: e_,
                        onScroll: C,
                        renderRow: P,
                        renderSection: w,
                        renderSectionHeader: b,
                        rowCount: f.length,
                        rowCountBySection: y,
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
var eh = n(702841),
    em = n(305070),
    ef = n(31498),
    eg = n(598071),
    ep = n(151271),
    eA = n(731231),
    eI = n(256265),
    eT = n(703244),
    eS = n(857071),
    eN = n(135621),
    eC = n(105330),
    eR = n(495544),
    eO = n(559908),
    ey = n(620141),
    ev = n(224964),
    eD = n(31408),
    eL = n(851110);
function eb(e) {
    let { editorHeight: t, textValue: n, channelId: i } = e,
        s = r.useRef(n),
        a = (0, eC.l)({ editorHeight: t }),
        o = (0, ev.A)(),
        l = (0, E.bG)([eO.Ay, eR.default], () => eO.Ay.isComboing(eR.default.getId(), i)),
        d = a?.left ?? 0,
        _ = (a?.top ?? 0) - 16,
        u = 0 === n.length,
        c = r.useMemo(() => 0.05 > Math.random(), [u]);
    return (
        r.useEffect(() => {
            0 !== n.length && n !== s.current && l && (o.fire(d, _, c ? { sprite: eL.dR } : null), (s.current = n));
        }, [n, l, d, _, c, o]),
        null
    );
}
function ew(e) {
    return (0, i.jsx)(ey.A, { confettiLocation: eD.k.CHAT_INPUT, children: (0, i.jsx)(eb, { ...e }) });
}
var eP = n(931664),
    ek = n(631576),
    eM = n(68935),
    eU = n(406704),
    ex = n(253932),
    eG = n(696451),
    eV = n(576705),
    eF = n(309010),
    eB = n(638128),
    eH = n(522602),
    ej = n(287809),
    eW = n(821102),
    eY = n(954571),
    eK = n(234320),
    ez = n(625494),
    e$ = n(488926),
    eq = n(723702),
    eX = n(486319),
    eZ = n(355622),
    eQ = n(383442),
    eJ = n(834730),
    e0 = n(140735),
    e1 = n(463930),
    e2 = n(935063),
    e3 = n(73392),
    e6 = n(763754),
    e4 = n(967144),
    e7 = n(118517),
    e5 = n(976860),
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
            (0, V.zV)(eo.HAw.THREAD_NUDGE_SHOWN, {
                type: "Reply Chain (3)",
                reply_chain_length: a.current + 1,
                channel_id: t.id,
                guild_id: t.guild_id,
            });
        }, [t]),
        (0, i.jsxs)(J.D, {
            onClick: function () {
                (0, e7.Jx)(t.id), (0, e8.Tv)(t, n, "Reply Chain Nudge");
            },
            className: ti._r,
            focusProps: { offset: { right: -4, left: -4 } },
            children: [
                (0, i.jsx)(eJ.E, {
                    color: "text-default",
                    className: ti.Qq,
                    variant: "text-sm/normal",
                    children: v.intl.format(v.t.B3V0FM, { count: Math.min(10, s + 1) }),
                }),
                (0, i.jsx)(eJ.E, {
                    color: "text-link",
                    className: ti.NG,
                    variant: "text-sm/semibold",
                    children: v.intl.string(v.t.rBIGBL),
                }),
            ],
        })
    );
}
function ta(e) {
    let t,
        n,
        { reply: r, chatInputType: s } = e,
        { channel: o, message: l, shouldMention: d, showMentionToggle: _ } = r,
        {
            guildId: u,
            nick: c,
            colorString: h,
            colorStrings: m,
            colorRoleName: f,
            authorId: g,
            displayNameStyles: p,
        } = (0, e6.Ay)(l),
        A = (0, e4.gn)(u, g, m),
        I = (0, e3.a)({ displayNameStyles: p }),
        T =
            ((t = o.id),
            (n = l.id),
            (0, E.bG)([e9.A], () => {
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
                        (0, i.jsx)(e0.A, { id: tr, children: v.intl.formatToPlainString(v.t.EpJL4E, { username: c }) }),
                        (0, i.jsx)(J.D, {
                            onClick: () => (0, e5.pX)(eo.BVt.CHANNEL(o.getGuildId(), o.id, l.id)),
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, i.jsx)(eJ.E, {
                                color: "text-default",
                                className: a()(ti.Qq, ti.Fn),
                                variant: "text-sm/normal",
                                children: v.intl.format(v.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, i.jsx)(
                                            e1.g,
                                            {
                                                className: ti.UU,
                                                name: c,
                                                colorString: h,
                                                colorStrings: A,
                                                roleName: f,
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
                                _ &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(Q.m, {
                                                asContainer: !0,
                                                text: d ? v.intl.string(v.t.DH2o6R) : v.intl.string(v.t.utGGIY),
                                                children: (0, i.jsx)(J.D, {
                                                    role: "switch",
                                                    "aria-checked": d,
                                                    onClick: function (e) {
                                                        e.stopPropagation(), (0, e7.vz)(o.id, !d);
                                                    },
                                                    children: (0, i.jsxs)(eJ.E, {
                                                        variant: "text-sm/bold",
                                                        color: d ? "text-link" : "text-muted",
                                                        className: ti.Z4,
                                                        children: [
                                                            (0, i.jsx)(e2.X, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": v.intl.string(v.t.P8tvKG),
                                                                className: ti.mM,
                                                            }),
                                                            d ? v.intl.string(v.t.p9jC2r) : v.intl.string(v.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, i.jsx)("div", { className: ti.me, "aria-hidden": !0 }),
                                        ],
                                    }),
                                (0, i.jsx)(tn, {
                                    onClick: function (e) {
                                        e.stopPropagation(), (0, e7.Jx)(o.id);
                                    },
                                    "aria-label": v.intl.string(v.t.jSnJGT),
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
    td = n(74995);
let t_ = r.memo(function (e) {
    let { channelId: t, chatInputType: n } = e,
        [s, a] = r.useState(null),
        o = (0, E.bG)([eP.A], () => eP.A.getStickerPreview(t, n.drafts.type));
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
                                          "aria-label": v.intl.formatToPlainString(v.t.BGAQRd, { name: e.name }),
                                          onClick: () => (0, ek.x5)(t, n.drafts.type),
                                          children: (0, i.jsx)("div", {
                                              className: td.Nk,
                                              children: (0, i.jsx)(te.a, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: td.ut,
                                              }),
                                          }),
                                      }),
                                      (0, i.jsx)(tl.A, {
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
                  (0, i.jsx)(to.A, { className: td.R }),
              ],
          })
        : null;
});
var tu = n(612394);
n(321073);
var tc = n(442433);
n(827669);
var tE = n(448702);
function th(e) {
    let t,
        s,
        o,
        { className: l, activeCommand: d, activeOption: _, optionStates: u, channelId: c } = e,
        E = r.useCallback(
            (e) => {
                let t = d?.rootCommand?.id;
                null == t
                    ? e.preventDefault()
                    : (0, tc.L3)(e, async () => {
                          let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                          return (n) => (0, i.jsx)(e, { ...n, id: t, label: v.intl.string(v.t.oJ1Muw) });
                      });
            },
            [d?.rootCommand?.id],
        ),
        h = r.useCallback(() => {
            z.Gf({ channelId: c, command: null, section: null });
        }, [c]);
    if (null == d) return null;
    if (null != _) {
        let e = u[_.name].lastValidationResult;
        (t = _.displayName), (s = _.displayDescription), (o = e?.success ? null : e?.error);
    } else (t = `/${d.displayName}`), (s = d.displayDescription), (o = null);
    return (0, i.jsxs)("div", {
        className: a()(l, tE.M0),
        onContextMenu: E,
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
                children: (0, i.jsx)(tn, { onClick: h, "aria-label": v.intl.string(v.t.cpT0Cq) }),
            }),
        ],
    });
}
var tm = n(228366),
    tf = n(734057);
let tg = new Set();
class tp extends E.Ay.PersistedStore {
    static displayName = "PTOStore";
    static persistKey = "PTOStore";
    initialize(e) {
        this.waitFor(tf.A, eG.Ay, eF.A, ej.default), null != e && (tg = new Set(e));
    }
    hasId(e) {
        return tg.has(e);
    }
    getState() {
        return [...tg];
    }
}
let tA = new tp(tm.h, {}),
    tI = () => {
        let e = eF.A.getChannelId();
        if (null == e) return;
        let t = tf.A.getChannel(e);
        null != t && t.isPrivate() && (tg.has(t.getRecipientId()) || (tg.add(t.getRecipientId()), tA.emitChange()));
    },
    tT = () =>
        (0, i.jsxs)("div", {
            className: ti.eU,
            children: [
                (0, i.jsx)(eJ.E, {
                    variant: "text-sm/medium",
                    className: a()(ti.Qq, ti.Fn),
                    children: v.intl.string(v.t["2UvR1E"]),
                }),
                (0, i.jsx)("div", {
                    className: ti.o1,
                    children: (0, i.jsx)(tn, { onClick: tI, "aria-label": v.intl.string(v.t.cpT0Cq) }),
                }),
            ],
        });
var tS = n(278351);
let tN = (e) => {
    let { error: t } = e;
    return (0, i.jsxs)("div", {
        className: tS.M,
        children: [
            (0, i.jsx)(eJ.E, { variant: "text-xs/bold", color: "text-strong", children: v.intl.string(v.t["4VDCG0"]) }),
            t
                ? (0, i.jsx)(eJ.E, { variant: "text-xs/medium", className: tS.z, children: v.intl.string(v.t.qNorwt) })
                : (0, i.jsx)(eJ.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: v.intl.string(v.t["260qZS"]),
                  }),
        ],
    });
};
var tC = n(575293),
    tR = n(151282),
    tO = n(1372);
function ty(e) {
    let { pendingScheduledMessage: t } = e,
        { channelId: n, scheduledTimestamp: r } = t;
    return (0, i.jsx)("div", {
        className: tO.e1,
        children: (0, i.jsx)("div", {
            className: tO.kL,
            children: (0, i.jsxs)("div", {
                className: tO.g3,
                children: [
                    (0, i.jsx)(eJ.E, {
                        color: "text-default",
                        className: a()(tO.Qq, tO.a3),
                        variant: "text-sm/normal",
                        children: v.intl.formatToPlainString(v.t["MQcRX/"], { timestamp: new Date(r).valueOf() }),
                    }),
                    (0, i.jsx)("div", {
                        className: tO.o1,
                        children: (0, i.jsx)(tn, {
                            onClick: function (e) {
                                e.stopPropagation(), (0, tR.Ps)(n);
                            },
                            "aria-label": v.intl.string(v.t.cpT0Cq),
                        }),
                    }),
                ],
            }),
        }),
    });
}
var tv = n(266599);
function tD(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, i.jsx)("div", { children: e }, t)),
        s = t.floating.map((e, t) => (0, i.jsx)(r.Fragment, { children: e }, t));
    return 0 === n.length && 0 === s.length
        ? null
        : (0, i.jsxs)(r.Fragment, {
              children: [
                  s.length > 0 && (0, i.jsx)("div", { className: tv.Vq, children: s }),
                  n.length > 0 && (0, i.jsx)("div", { className: tv.MD, children: n }),
              ],
          });
}
var tL = n(729666),
    tb = n(110259),
    tw = n(150934),
    tP = n(139286),
    tk = n(47167),
    tM = n(713654),
    tU = n(252263),
    tx = n(8455),
    tG = n(67259),
    tV = n(132645);
function tF(e) {
    let { thread: t, pendingScheduledMessage: n } = e,
        s = (0, tx.Vp)({ location: "ThreadsAlsoSendToChannelArea" }),
        [a, o] = (0, E.yK)([tf.A, tG.A], () => [
            t.isThread() ? tf.A.getChannel(t.parent_id) : null,
            tG.A.getAlsoSendToChannel(t.id),
        ]),
        l = (0, tk.Ay)(a),
        d = r.useCallback(
            (e) => {
                eY.default.track(eo.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_TOGGLED, {
                    value: e,
                    guild_id: t.guild_id,
                    channel_id: t.id,
                }),
                    (0, tU.B)({ channelId: t.id, enabled: e });
            },
            [t],
        );
    if (
        ((0, tP.A)(
            { name: tb.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL, type: tb.ImpressionTypes.VIEW },
            { disableTrack: null == a || !s.enabled },
            [a, s.enabled],
        ),
        !s.enabled || null == a)
    )
        return null;
    let _ = (0, tM.gU)(a),
        u = v.intl.format(v.t.UqL10G, {
            callToActionHook: (e, t) =>
                (0, i.jsx)(
                    eJ.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: tV.Pf,
                        children: v.intl.string(v.t.Pi3JW7),
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
                        className: tV.Pf,
                        children: [null == _ ? null : (0, i.jsx)(_, { color: "currentColor", className: tV.Kk }, t), e],
                    },
                    t,
                ),
        });
    return (0, i.jsx)("div", {
        className: tV.kL,
        children: (0, i.jsx)(tw.S, { checked: o, disabled: null != n, onChange: d, label: u, labelType: "secondary" }),
    });
}
function tB(e) {
    let { channel: t, type: n, pendingScheduledMessage: r } = e,
        { shouldShow: s } = (function (e) {
            let { channel: t, type: n } = e,
                i = (0, E.bG)([tf.A], () => {
                    let e = tf.A.getChannel(t.parent_id);
                    return e?.isForumLikeChannel() ?? !1;
                }),
                r = [eZ.oU.NORMAL, eZ.oU.SIDEBAR].includes(n);
            return { shouldShow: t.isThread() && !i && r };
        })({ channel: t, type: n });
    return s ? (0, i.jsx)(tF, { thread: t, pendingScheduledMessage: r }) : null;
}
var tH = n(822610),
    tj = n(625928),
    tW = n(670482),
    tY = n(621466),
    tK = n(902001),
    tz = n(899536),
    t$ = n(74833),
    tq = n(216964),
    tX = n(387758),
    tZ = n(39623),
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
                      (0, i.jsx)(t7, {
                          slateEditor: o,
                          blockType: "blockQuote",
                          children: (0, i.jsx)(tq.c, { size: "md", color: "currentColor", className: a()(t2.Kk, r) }),
                      }),
                  !n?.disableInlineCode &&
                      (0, i.jsx)(t4, {
                          slateEditor: o,
                          markdownSyntax: "inlineCode",
                          children: (0, i.jsx)(tX.G, {
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
                      children: (0, i.jsx)(tZ.b, { size: "md", color: "currentColor", className: a()(t2.Kk, r) }),
                  }),
              ],
          });
}
let t6 = r.forwardRef(function (e, t) {
    let { editorRef: n, containerRef: s, options: a } = e,
        o = r.useRef(null),
        [l, d] = r.useState(!1),
        _ = r.useRef(null),
        u = r.useContext(tQ.Ay),
        c = r.useCallback(() => {
            d(!1), clearTimeout(_.current);
        }, []),
        E = r.useCallback(
            (e) => {
                let t = u.renderWindow;
                (e.target instanceof t.Node && o.current?.contains(e.target)) || c();
            },
            [u, c],
        ),
        h = r.useCallback(
            (e) => {
                let t = u.renderWindow;
                if (e.target instanceof t.Element)
                    if (0 !== e.button) c();
                    else {
                        let n = e.target instanceof t.Node && o.current?.contains(e.target);
                        clearTimeout(_.current),
                            (_.current = setTimeout(() => {
                                let t = (0, tY.BF)(e)?.activeElement,
                                    i = s.current;
                                d(n || (null != t && null != i && i.contains(t)));
                            }, 100));
                    }
                else c();
            },
            [u, s, c],
        );
    r.useImperativeHandle(t, () => ({ hide: c }), [c]),
        r.useEffect(() => {
            let e = u.renderWindow;
            return (
                e.document.addEventListener("keydown", c),
                e.document.addEventListener("mousedown", E),
                e.document.addEventListener("mouseup", h),
                e.addEventListener("focus", c),
                e.addEventListener("blur", c),
                () => {
                    e.document.removeEventListener("keydown", c),
                        e.document.removeEventListener("mousedown", E),
                        e.document.removeEventListener("mouseup", h),
                        e.removeEventListener("focus", c),
                        e.removeEventListener("blur", c),
                        clearTimeout(_.current);
                }
            );
        }, [u, c, E, h]);
    let { x: m, y: f } = r.useMemo(() => {
            let e = n.current?.getSlateEditor();
            if (e?.selection == null || t1.ZF.isCollapsed(e.selection) || !l) return { x: null, y: null };
            let t = tW.rL.findDocumentOrShadowRoot(e),
                i = t.getSelection();
            if (null == i || null == i.focusNode || null == i.anchorNode || i.isCollapsed) return { x: null, y: null };
            let r = t.createRange();
            r.setStart(i.focusNode, i.focusOffset), r.setEnd(i.focusNode, i.focusOffset);
            let a = r.getBoundingClientRect(),
                o = t.createRange();
            o.setStart(i.anchorNode, i.anchorOffset), o.setEnd(i.anchorNode, i.anchorOffset);
            let d = o.getBoundingClientRect(),
                _ = t.createRange();
            _.setStart(i.anchorNode, i.anchorOffset), _.setEnd(i.focusNode, i.focusOffset);
            let u = _.getBoundingClientRect(),
                c = a.x === d.x,
                E = c ? u.x : Math.min(a.x, d.x);
            return {
                x: E + ((c ? u.x + u.width : Math.max(a.x, d.x)) - E) / 2,
                y: Math.max(s.current?.getBoundingClientRect()?.y ?? 0, Math.min(d.y, a.y)),
            };
        }, [s, l, n]),
        [g, p] = r.useState(0),
        [A, I] = r.useState(0);
    return (r.useLayoutEffect(() => {
        if (null == m || null == f || null == o.current) return;
        let e = o.current.getBoundingClientRect();
        I(e.width / 2), p(e.height + 12);
    }, [m, f]),
    null == m || null == f || null == n.current?.getSlateEditor())
        ? null
        : (0, i.jsx)(O.Ay, {
              children: (0, i.jsx)("div", {
                  id: "slate-toolbar",
                  ref: o,
                  className: t2.KE,
                  style: { top: f - g, left: m - A },
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
    return (0, i.jsx)(m.vN, {
        children: (0, i.jsx)("button", {
            "aria-pressed": s,
            className: t2.x6,
            onClick: () => {
                null != t && tJ.o.withSingleEntry(t, () => (0, t0.Px)(t, n));
            },
            children: r,
        }),
    });
}
function t7(e) {
    let { blockType: t, slateEditor: n, children: r } = e,
        s = null != n ? t1.VW.getCurrentBlock(n) : null,
        a = null != s && t1.AS.isType(s[0], t);
    return (0, i.jsx)(m.vN, {
        children: (0, i.jsx)("button", {
            "aria-pressed": a,
            className: t2.x6,
            onClick: () => {
                null != n && tJ.o.withSingleEntry(n, () => (0, t0.fO)(n, t));
            },
            children: r,
        }),
    });
}
var t5 = n(922016),
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
                null != n && null != r && r.insertEmoji({ emoji: n, willClose: i }), i && (0, ep.v8)();
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
                  (0, i.jsx)(t5.Y, {
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
                      animation: t5.Y.Animation.NONE,
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
    let [l, d] = r.useState(!1),
        _ = r.useCallback(
            (r, u, c, E, m, f) => {
                if (l) return;
                d(!0);
                let p = eP.A.getStickerPreview(o, t.drafts.type)?.map((e) => e.id) ?? [],
                    A = eH.A.getUploads(o, t.drafts.type) ?? [];
                if (null == u && !E && !m && (0, eI.xz)(A, o)) {
                    d(!1),
                        (0, h.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("49681"),
                                n.e("65437"),
                                n.e("99011"),
                                n.e("43765"),
                                n.e("10730"),
                                n.e("42516"),
                                n.e("43303"),
                            ]).then(n.bind(n, 538899));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    threadId: o,
                                    attachments: A,
                                    sendMessage: () => _(r, void 0, void 0, void 0, !0),
                                });
                        });
                    return;
                }
                e({
                    value: r,
                    uploads: A,
                    stickers: p,
                    command: u,
                    commandOptionValues: c,
                    isGif: E,
                    gifMetadata: f,
                }).then((e) => {
                    let { shouldClear: n, shouldRefocus: i } = e,
                        r = (n && t.submit?.clearOnSubmit) ?? !1,
                        l = null != s.current;
                    r &&
                        (o !== eF.A.getChannelId()
                            ? g.A.saveDraft(o, "", t.drafts.type)
                            : l && (s.current?.clearValue(), a.current?.hide())),
                        l && (d(!1), (0, ep.v8)(), i && s.current?.focus());
                });
            },
            [s, a, e, l, t, o],
        );
    return {
        submitting: l,
        submit: _,
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
            if (t === eZ.oU.CREATE_FORUM_POST || t === eZ.oU.CREATE_ANNOUNCEMENT_POST) n.current?.insertGIF(i);
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
            (0, ep.v8)(), n.current?.focus();
        },
        [n, e, t],
    );
}
function ns(e) {
    return r.useCallback(
        (t) => {
            let { emoji: n, willClose: i } = t,
                r = e.current;
            null != n && null != r && r.insertEmoji({ emoji: n, willClose: i }), i && (0, ep.v8)();
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
                (a === eZ.oU.CREATE_ANNOUNCEMENT_POST || (0, eM.YS)(r, i, s, a.drafts.type)
                    ? ((0, tu.fh)({
                          sticker: e,
                          stickerSelectLocation: r,
                          isReplacement: null != eP.A.getStickerPreview(s, a.drafts.type),
                          analyticsLocations: l,
                      }),
                      (0, ek.$x)(s, e, a.drafts.type))
                    : (o({ value: "", uploads: void 0, stickers: [e.id] }), t.current?.clearValue()),
                (0, ep.v8)(),
                t.current?.focus());
        },
        [n, i, s, t, l, o, a],
    );
}
function no(e) {
    return r.useCallback(
        (t) => {
            let n = e.current;
            null != n && n.insertKaomoji(t), (0, ep.v8)(), n?.focus();
        },
        [e],
    );
}
function nl(e, t, n) {
    let i = r.useCallback(() => {
            t || (0, ep.r$)(nn.kx.EMOJI, e, n);
        }, [t, e, n]),
        s = r.useCallback(() => {
            !t && e.gifs?.allowSending && (0, ep.r$)(nn.kx.GIF, e, n);
        }, [t, e, n]),
        a = r.useCallback(() => {
            !t && e.stickers?.allowSending && (0, ep.r$)(nn.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, eK.Vo)({ event: eo.jej.TOGGLE_EMOJI_POPOUT, handler: i }),
        (0, eK.Vo)({ event: eo.jej.TOGGLE_GIF_PICKER, handler: s }),
        (0, eK.Vo)({ event: eo.jej.TOGGLE_STICKER_PICKER, handler: a });
}
function nd(e, t, n) {
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
function n_() {
    let e = r.useRef(null),
        t = r.useCallback(() => {
            e.current?.onMaybeShowAutocomplete();
        }, []),
        n = r.useCallback(() => {
            e.current?.onHideAutocomplete();
        }, []);
    return { autocompleteRef: e, handleMaybeShowAutocomplete: t, handleHideAutocomplete: n };
}
function nu(e) {
    let t = r.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
}
function nc(e) {
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
function nE(e, t, n, i) {
    let r = e.getGuildId(),
        s = (0, E.bG)([eS.A], () => null != r && eS.A.isLurking(r), [r]),
        a = (0, E.bG)([eG.Ay, ej.default], () => {
            let e = ej.default.getCurrentUser();
            return (null != r && null != e ? eG.Ay.getMember(r, e.id)?.isPending : null) ?? !1;
        }),
        o = (0, E.cf)([eV.A], () => {
            let r = e.isPrivate(),
                s = eV.A.computePermissions(e),
                o = c.zy(s, eo.xBc.CREATE_PUBLIC_THREADS) || c.zy(s, eo.xBc.CREATE_PRIVATE_THREADS),
                l =
                    (!t.permissions?.requireCreateTherads || o) &&
                    (!t.permissions?.requireSendMessages || c.zy(s, eo.xBc.SEND_MESSAGES)),
                d = l && c.zy(s, eo.xBc.ATTACH_FILES),
                _ = null != n,
                u = (0, eU.UJ)(e);
            return {
                disabled: i || a || (!r && !l) || u,
                canAttachFiles: !0 === t.attachments && (r || a || d || _),
                canCreateThreads: o,
                canEveryoneSendMessages: e$.MJ(eo.xBc.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, i, a]);
    return { isLurking: s, isPendingMember: a, ...o };
}
function nh(e, t, n) {
    let [i, s, a] = (0, ep.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], _.x),
        o = (0, E.bG)([N.A], () => N.A.shouldShowPopup() && N.A.activeViewType() === e && N.A.activeChannelId() === n);
    r.useEffect(
        () => () => {
            (0, ep.v8)(e, n);
        },
        [e, n],
    );
    let l = r.useCallback(() => {
            null != i || o || t.current?.handleOuterClick();
        }, [i, o, t]),
        d = null == i || null == s || s !== e || a !== n;
    return { expressionPickerView: i, shouldHideExpressionPicker: d, handleOuterClick: l };
}
let nm = (e, t) => ({
        handleAutocompleteVisibilityChange: r.useCallback(
            (n) => {
                n && (0, ep.v8)(e, t);
            },
            [e, t],
        ),
    }),
    nf = r.memo(
        r.forwardRef(function (e, t) {
            let n,
                {
                    textValue: s,
                    richValue: o,
                    className: l,
                    innerClassName: _,
                    editorClassName: c,
                    id: h,
                    required: g,
                    disabled: C,
                    placeholder: R,
                    accessibilityLabel: O,
                    channel: y,
                    type: v,
                    focused: D,
                    error: L,
                    renderAttachButton: b,
                    renderApplicationCommandIcon: w,
                    renderButtons: M,
                    pendingReply: U,
                    onChange: x,
                    onResize: G,
                    onBlur: V,
                    onFocus: F,
                    onKeyDown: B,
                    onSubmit: H,
                    promptToUpload: j,
                    highlighted: W,
                    canMentionRoles: Y,
                    canMentionChannels: K,
                    maxCharacterCount: z,
                    showRemainingCharsAfterCount: $,
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
            d()(null != v, "chat input type must be set");
            let { analyticsLocations: el } = (0, T.Ay)(I.A.CHANNEL_TEXT_AREA),
                ed = nu(t),
                e_ = r.useRef(null),
                eu = r.useRef(null),
                eE = r.useRef(null),
                eI = r.useRef(null),
                eT = r.useRef(null);
            J?.(eE.current);
            let eS = (0, S.A)(y),
                [eC, eR] = r.useState(!eS);
            (0, p.i4)(ed, (e) => {
                let { width: t } = e;
                return eR(!eS && (null == t || t > 450));
            });
            let { activeCommand: eO, activeCommandSection: ey } = (0, E.cf)([k.A], () => ({
                    activeCommand: v.commands?.enabled ? k.A.getActiveCommand(y.id) : null,
                    activeCommandSection: v.commands?.enabled ? k.A.getActiveCommandSection(y.id) : null,
                })),
                {
                    isLurking: ev,
                    isPendingMember: eD,
                    disabled: eL,
                    canAttachFiles: eb,
                    canCreateThreads: eP,
                    canEveryoneSendMessages: ek,
                } = nE(y, v, eO, C),
                eM = v.toolbarType === eZ.O1.STATIC,
                eU = !ex.D_.useSetting() && !(0, eq.isAndroidWeb)() && null != window.ResizeObserver,
                eV = !eU || !v.commands?.enabled || !D || "/" !== s,
                eF = (0, eN.A)(),
                { fontSize: eH } = (0, E.cf)([A.A], () => ({ fontSize: A.A.fontSize })),
                eW = (0, E.bG)([eB.A], () => eB.A.isEnabled());
            nl(v, eL, y.id);
            let { eventEmitter: eK, handleEditorSelectionChanged: e$ } = nd(eE, s, o),
                eJ = r.useRef(s);
            eJ.current = s;
            let e0 = r.useCallback(
                    (e, t, n) => {
                        "/" === t && "" === eJ.current && v.commands?.enabled && eK.emit("command-sentinel-typed"),
                            x?.(e, t, n);
                    },
                    [x, v.commands?.enabled, eK],
                ),
                { submitting: e1, submit: e2, handleSubmit: e3 } = ni(H, v, eE, eT, y.id),
                { autocompleteRef: e6, handleMaybeShowAutocomplete: e4, handleHideAutocomplete: e7 } = n_(),
                e5 = nr(e2, v, eE),
                e8 = ns(eE),
                e9 = na({ editorRef: eE, disabled: eL, textValue: s, channelId: y.id, chatInputType: v, submit: H }),
                te = r.useCallback(
                    (e, t, n) => {
                        let i = eE.current;
                        null != e &&
                            null != i &&
                            (eY.default.track(eo.HAw.SOUNDMOJI_SELECT, {
                                channel_id: y.id,
                                guild_id: y.guild_id,
                                sound_guild_id: e.guildId,
                                sound_id: e.soundId,
                                source: t,
                            }),
                            i.insertSound(e)),
                            n && (0, ep.v8)(),
                            i?.focus();
                    },
                    [eE, y.id, y.guild_id],
                ),
                tt = no(eE),
                tn = r.useCallback(() => eT?.current?.hide(), []),
                { editorHeight: ti, handleResize: ts } = nc(G),
                {
                    handleTab: to,
                    handleEnter: tl,
                    handleMoveSelection: td,
                } = ((n = r.useCallback(
                    () => !!(!eV && e_.current?.onTabOrEnter(!1)) || e6.current?.onTabOrEnter(!1) || !1,
                    [eV, e_, e6],
                )),
                {
                    handleTab: n,
                    handleEnter: r.useCallback(
                        () => !!(!eV && e_.current?.onTabOrEnter(!0)) || e6.current?.onTabOrEnter(!0) || !1,
                        [eV, e_, e6],
                    ),
                    handleMoveSelection: r.useCallback(
                        (e) => !!(!eV && e_.current?.onMoveSelection(e)) || e6.current?.onMoveSelection(e) || !1,
                        [eV, e_, e6],
                    ),
                }),
                { expressionPickerView: tu, shouldHideExpressionPicker: tc, handleOuterClick: tE } = nh(v, eE, y.id),
                { selectedAutocompleteInputType: tm, selectedAutocompleteInputError: tf } = (function (e, t) {
                    let [n, i] = r.useState({
                            selectedAutocompleteInputType: null,
                            selectedAutocompleteInputError: !1,
                        }),
                        s = r.useCallback(() => {
                            let e,
                                n = t.current?.getSlateEditor();
                            null != n && (e = t1.VW.getSelectedParentOfType(n, ef.mk)?.[0]),
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
                })(eK, eE),
                { handleAutocompleteVisibilityChange: tp } = nm(v, y.id),
                tI = (function (e) {
                    let { type: t, channelId: n } = e;
                    return (0, eh.bG)([N.A], () => {
                        let e = N.A.activeViewType();
                        return null != e && e === t && N.A.activeChannelId() === n && N.A.shouldShowPopup();
                    }, [t, n]);
                })({ type: v, channelId: y.id }),
                tS = r.useCallback(() => {
                    eK.emit("submit-failure");
                }, [eK]);
            (0, eX.R)(eK, y.guild_id, y.id);
            let tR = null != U,
                tO = (eL && !((ev || eD) && ek)) || (e1 && v.submit?.useDisabledStylesOnSubmit),
                tb = null;
            null != eO ? (tb = w?.(eO, ey, tv.g$)) : (!eL || eP) && (tb = b?.(tR, tv.g$));
            let tw = eU && null != o && !eL && v.showCharacterCount && null == eO,
                tP = eU && !__OVERLAY__ && null != o && null == eO && v.toolbarType !== eZ.O1.NONE && !eL,
                tk = (function (e) {
                    let {
                            channel: t,
                            type: n,
                            activeCommand: s,
                            pendingReply: a,
                            pendingScheduledMessage: o,
                            selectedAutocompleteInputType: l,
                            selectedAutocompleteInputError: d,
                        } = e,
                        { activeCommandOption: _, activeCommandOptionStates: u } = (0, E.cf)([k.A], () => ({
                            activeCommandOption: k.A.getActiveOption(t.id),
                            activeCommandOptionStates: k.A.getOptionStates(t.id),
                        })),
                        c = (0, E.bG)([eG.Ay, ej.default, tA], () => {
                            let e = ej.default.getCurrentUser();
                            if (null == e || !e.isStaff() || !t.isDM()) return !1;
                            let n = ej.default.getUser(t.getRecipientId());
                            if (!n?.isStaff()) return !1;
                            let i = eG.Ay.getNicknames(n.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
                            return i ? !tA.hasId(n.id) && i : (tg.delete(n.id) && tA.emitChange(), !1);
                        });
                    return r.useMemo(() => {
                        let e = [],
                            r = [];
                        return (
                            null != t.guild_id &&
                                n === eZ.oU.NORMAL &&
                                r.push((0, i.jsx)(tC.A, { guildId: t.guild_id, channel: t, className: tv.UW })),
                            null != s &&
                                e.push(
                                    (0, i.jsx)(th, {
                                        activeCommand: s,
                                        activeOption: _ ?? null,
                                        optionStates: u,
                                        channelId: t.id,
                                    }),
                                ),
                            null != a && e.push((0, i.jsx)(ta, { reply: a, chatInputType: n })),
                            c && e.push((0, i.jsx)(tT, {})),
                            null != o && e.push((0, i.jsx)(ty, { pendingScheduledMessage: o })),
                            "timestampMentionInput" === l && r.push((0, i.jsx)(tN, { error: d ?? !1 })),
                            { stacked: e, floating: r }
                        );
                    }, [s, _, u, t, a, c, n, o, l, d]);
                })({
                    channel: y,
                    type: v,
                    activeCommand: eO,
                    pendingReply: U,
                    pendingScheduledMessage: es,
                    selectedAutocompleteInputType: tm,
                    selectedAutocompleteInputError: tf,
                }),
                tM = 0 === s.trim().length,
                tU = null != U ? [Z, tr].filter(Boolean).join(" ") : Z,
                tx = v.layout === eZ.wt.INLINE,
                tG = v.layout === eZ.wt.FLUSH,
                tV = (0, i.jsx)("div", { ref: eu, className: tv.BW }),
                tF = tI ? (0, i.jsx)(P, { align: "right", positionTargetRef: eu, channel: y }) : null,
                tW =
                    null != M
                        ? M()
                        : (0, i.jsx)(tL.A, {
                              type: v,
                              disabled: eL,
                              channel: y,
                              handleSubmit: e3,
                              isEmpty: tM,
                              showAllButtons: eC,
                          }),
                tY = tw
                    ? (0, i.jsx)(tj.A, {
                          type: v,
                          textValue: s,
                          className: X,
                          maxCharacterCount: z,
                          showRemainingCharsAfterCount: $,
                      })
                    : null;
            return (
                r.useEffect(() => {
                    D && ez._.dispatch(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: y.id });
                }, [D, y.id]),
                (0, i.jsx)(eg.Sv, {
                    value: eK,
                    children: (0, i.jsxs)(T.f5, {
                        value: el,
                        children: [
                            tP && eM
                                ? (0, i.jsx)(nt, { editorRef: eE, type: v, channel: y })
                                : tP
                                  ? (0, i.jsx)(t6, { ref: eT, editorRef: eE, containerRef: eI, options: v.markdown })
                                  : null,
                            (0, i.jsxs)("div", {
                                ref: ed,
                                className: a()(l, {
                                    [tv.gM]: !0,
                                    [tv.h9]: tO,
                                    [tv.mr]: W,
                                    [tv.Wn]: u.Fr,
                                    [tv.Ls]: tx,
                                    [tv.AH]: tG,
                                    [tv.z3]: null != L,
                                }),
                                children: [
                                    tx || tG ? null : (0, i.jsx)(tD, { bars: tk }),
                                    (0, i.jsxs)("div", {
                                        ref: eI,
                                        onScroll: tn,
                                        className: a()(_, {
                                            [tv.xx]: !0,
                                            [tv.k6]: !en,
                                            [tv.Ri]: tk.stacked.length > 0,
                                        }),
                                        children: [
                                            (0, i.jsx)(t_, { channelId: y.id, chatInputType: v }),
                                            v.hideAttachmentArea
                                                ? null
                                                : (0, i.jsx)(tH.A, { channelId: y.id, type: v, canAttachFiles: eb }),
                                            (0, i.jsxs)("div", {
                                                className: a()(tv.vW, {
                                                    [tv.BF]: tO,
                                                    [tv.RL]:
                                                        v !== eZ.oU.EDIT && (null != tb || (tO && null == tb) || ev),
                                                    [tv.fk]: v === eZ.oU.THREAD_CREATION,
                                                    [tv.TZ]:
                                                        v === eZ.oU.CREATE_FORUM_POST ||
                                                        v === eZ.oU.FORWARD_MESSAGE_INPUT,
                                                    [tv.$i]: v === eZ.oU.USER_PROFILE_REPLY,
                                                }),
                                                onMouseDown: tE,
                                                children: [
                                                    tF,
                                                    tb,
                                                    (0, i.jsx)(m.vN, {
                                                        ringTarget: ed,
                                                        ringClassName: tv.Rg,
                                                        children: (0, i.jsx)(eQ.A, {
                                                            ref: eE,
                                                            id: h,
                                                            focused: D,
                                                            useSlate: eU,
                                                            textValue: s,
                                                            richValue: o,
                                                            disabled: eL,
                                                            placeholder: R,
                                                            required: g,
                                                            accessibilityLabel: O,
                                                            isPreviewing: (ev || eD) && ek,
                                                            channel: y,
                                                            type: v,
                                                            canPasteFiles: eb,
                                                            uploadPromptCharacterCount: eo.CS1,
                                                            maxCharacterCount: z ?? eF,
                                                            allowNewLines: q,
                                                            "aria-describedby": tU,
                                                            onChange: e0,
                                                            onResize: ts,
                                                            onBlur: V,
                                                            onFocus: F,
                                                            onKeyDown: B,
                                                            onSubmit: e2,
                                                            onSubmitFailure: tS,
                                                            onTab: to,
                                                            onEnter: tl,
                                                            onMoveSelection: td,
                                                            onSelectionChanged: e$,
                                                            onMaybeShowAutocomplete: e4,
                                                            onHideAutocomplete: e7,
                                                            promptToUpload: j,
                                                            fontSize: eH,
                                                            spellcheckEnabled: eW,
                                                            canOnlyUseTextCommands: tR,
                                                            className: a()(
                                                                {
                                                                    [tv.QI]: v === eZ.oU.THREAD_CREATION,
                                                                    [tv.AV]: v === eZ.oU.PROFILE_BIO_INPUT,
                                                                    [tv.GR]: v === eZ.oU.OVERLAY_INLINE_REPLY,
                                                                },
                                                                c,
                                                            ),
                                                            "aria-labelledby": Q,
                                                            showValueWhenDisabled: ea,
                                                        }),
                                                    }),
                                                    tW,
                                                    tV,
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(tB, { channel: y, type: v, pendingScheduledMessage: es }),
                                    eV ? null : (0, i.jsx)(ec, { ref: e_, channel: y, canOnlyUseTextCommands: tR }),
                                    (0, i.jsx)(em.A, {
                                        ref: e6,
                                        channel: y,
                                        canMentionRoles: Y,
                                        canMentionChannels: K,
                                        useNewSlashCommands: eU,
                                        canOnlyUseTextCommands: tR,
                                        canSendStickers: v.stickers?.allowSending,
                                        canSendSoundmoji: v.soundmoji?.allowSending,
                                        textValue: s,
                                        focused: D,
                                        expressionPickerView: tu,
                                        type: v,
                                        targetRef: ed,
                                        editorRef: eE,
                                        onSendMessage: e2,
                                        onSendSticker: e9,
                                        onVisibilityChange: tp,
                                        editorScrollerRef: eI,
                                        editorHeight: ti,
                                        barsHeight: 40 * tk.floating.length,
                                        setValue: (e, t) => e0?.(null, e, t),
                                        position: ee,
                                    }),
                                    (0, i.jsx)(ew, { textValue: s, editorHeight: ti, channelId: y.id }),
                                    tY,
                                    et,
                                ],
                            }),
                            (0, i.jsx)(f.U, { error: L }),
                            tc
                                ? null
                                : (0, i.jsx)(eA.A, {
                                      positionTargetRef: ed,
                                      type: v,
                                      onSelectGIF: e5,
                                      onSelectEmoji: e8,
                                      onSelectSticker: e9,
                                      onSelectSound: te,
                                      onSelectKaomoji: tt,
                                      channel: y,
                                      closeOnModalOuterClick: ei,
                                      parentModalKey: er,
                                      position: "top",
                                      align: "right",
                                      positionLayerClassName: tv.BD,
                                  }),
                        ],
                    }),
                })
            );
        }),
    );
