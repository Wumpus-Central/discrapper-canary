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
    _ = n(465532),
    x = n(765671),
    C = n(775602),
    A = n(793574),
    E = n(688810),
    I = n(177640),
    v = n(989837),
    y = n(289873),
    b = n(268218),
    S = n(750506),
    N = n(60809),
    j = n(985018),
    T = n(131552);
let w = { width: 500, height: N.$V },
    R = (0, b.Fe)({
        createPromise: () =>
            Promise.all([n.e("93103"), n.e("88342"), n.e("35313"), n.e("90440"), n.e("35621")]).then(n.bind(n, 854379)),
        webpackId: 854379,
        renderLoader: () => (0, l.jsx)("div", { className: T.R4, style: w, children: (0, l.jsx)(y.y, {}) }),
    }),
    L = { height: N.$V },
    k = i.memo(function (e) {
        let { positionTargetRef: t, align: n, ...i } = e;
        return (0, l.jsx)("span", {
            style: N.sK,
            children: (0, l.jsx)(S.nE, {
                className: T.T8,
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
                        className: T.V6,
                        role: "dialog",
                        style: L,
                        "aria-label": j.intl.string(j.t["3CNGLK"]),
                        children: t && (0, l.jsx)(R, { ...i }),
                    });
                },
            }),
        });
    });
var O = n(861382),
    M = n(735438),
    P = n.n(M),
    D = n(537652),
    U = n(155718),
    V = n(58149),
    G = n(659280),
    F = n(579940),
    B = n(962125),
    H = n(915089),
    W = n(850992),
    K = n(464651),
    z = n(286509),
    Z = n(721768),
    q = n(842209),
    J = n(210978),
    Y = n(392054),
    $ = n(168186),
    X = n(990078),
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
            [r, n, c, s, o],
        );
    return 0 === s.length
        ? null
        : (0, l.jsx)("div", {
              className: a()(t, en.iE),
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
            p = W.LS.useStore((e) => e.activeCategoryIndex);
        i.useEffect(() => {
            (0, V.zV)(er.HAw.APPLICATION_COMMAND_BROWSER_OPENED);
        }, []);
        let {
                sectionDescriptors: f,
                activeSections: g,
                commandsByActiveSection: _,
                hasMoreAfter: x,
                commands: C,
                filteredSectionId: A,
                scrollDown: E,
                filterSection: I,
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
                        W.LS.setActiveCategoryIndex(e);
                    }
                },
                scrollOffset: 20,
                searchQuery: "",
            }),
            y = (e) => {
                let t = g.length,
                    n = _.reduce((e, t) => e + t.data.length, 0) - 7 * !!x;
                x && e + 420 > 48 * t + 56 * n - 512 && E(), v(e), ed(), (o.current = e);
            },
            b = i.useRef(y);
        i.useEffect(() => {
            b.current = y;
        }),
            i.useEffect(() => {
                b.current(o.current);
            }, [C]);
        let S = i.useCallback((e) => (e !== g.length - 1 || x ? 16 : 0), [g.length, x]),
            N = _.map((e) => e.data.length);
        i.useEffect(() => {
            null != d.current && h && null != c && d.current.scrollRowIntoView(c);
        }, [h, c]),
            i.useLayoutEffect(() => {
                null != A && d.current?.scrollToSectionTop(0);
            }, [C, A]);
        let T = i.useCallback(
                (e) => {
                    e.id === A || e.id === ea.Ik.FRECENCY ? (I(null), d.current?.scrollToSectionTop(0)) : I(e.id);
                },
                [I, A],
            ),
            w = i.useCallback(
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
                    for (let e of _)
                        if (((t = n), c < (n += e.data.length))) {
                            let n = e.data[c - t],
                                l = f.find((e) => e.id === n.applicationId);
                            w(n, l, (0, $.$S)(e.section));
                            break;
                        }
                    return !0;
                },
                onMoveSelection: (e) => {
                    if (0 === C.length) return !0;
                    let t = 7 * !!x,
                        n = C.length + t,
                        l = null == c ? 0 : c + e;
                    return l >= n ? (l = n - 1) : l < 0 && (l = 0), u(l), m(!0), !0;
                },
            }),
            [C.length, _, x, f, w, c],
        );
        let R = i.useCallback(
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
                        { data: s } = _[e];
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
                                        message: j.intl.format(j.t.WoQXT6, { applicationName: i.name }),
                                        noResultsImageURL: ec,
                                        className: eo.qK,
                                    }),
                            ],
                        },
                        e,
                    );
                },
                [g, _],
            ),
            k = i.useCallback(
                (e, t) => {
                    let i = _[t.sectionIndex],
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
                            onClick: () => w(s, r, (0, $.$S)(i.section)),
                            onHover: () => {
                                u(null), m(!1);
                            },
                        },
                        a,
                    );
                },
                [n, _, w, f, c],
            ),
            O = (0, H.GV)();
        return (
            (0, F.gf)(O, !0, (0, G.aI)(c)),
            i.useEffect(
                () => () => {
                    (0, F.nQ)();
                },
                [],
            ),
            (0, l.jsxs)(G.Ay, {
                id: O,
                className: eo.x9,
                innerClassName: eo.iE,
                onMouseDown: em,
                children: [
                    (0, l.jsx)(ei, {
                        className: eo.H$,
                        channel: n,
                        sections: f,
                        filteredSectionId: A,
                        activeCategoryIndex: p,
                        onSectionClick: T,
                        applicationCommandListRef: d,
                    }),
                    (0, l.jsx)(B.A, {
                        role: "listbox",
                        className: eo.p_,
                        listPadding: eu,
                        onScroll: y,
                        renderRow: k,
                        renderSection: L,
                        renderSectionHeader: R,
                        rowCount: g.length,
                        rowCountBySection: N,
                        rowHeight: 56,
                        sectionHeaderHeight: 32,
                        sectionMarginBottom: S,
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
    e_ = n(598071),
    ex = n(151271),
    eC = n(731231),
    eA = n(256265),
    eE = n(703244),
    eI = n(857071),
    ev = n(135621),
    ey = n(105330),
    eb = n(495544),
    eS = n(559908),
    eN = n(620141),
    ej = n(224964),
    eT = n(31408),
    ew = n(851110);
function eR(e) {
    let { editorHeight: t, textValue: n, channelId: l } = e,
        s = i.useRef(n),
        a = (0, ey.l)({ editorHeight: t }),
        r = (0, ej.A)(),
        o = (0, m.bG)([eS.Ay, eb.default], () => eS.Ay.isComboing(eb.default.getId(), l)),
        c = a?.left ?? 0,
        u = (a?.top ?? 0) - 16,
        d = 0 === n.length,
        h = i.useMemo(() => 0.05 > Math.random(), [d]);
    return (
        i.useEffect(() => {
            0 !== n.length && n !== s.current && o && (r.fire(c, u, h ? { sprite: ew.dR } : null), (s.current = n));
        }, [n, o, c, u, h, r]),
        null
    );
}
function eL(e) {
    return (0, l.jsx)(eN.A, { confettiLocation: eT.k.CHAT_INPUT, children: (0, l.jsx)(eR, { ...e }) });
}
var ek = n(931664),
    eO = n(631576),
    eM = n(68935),
    eP = n(406704),
    eD = n(253932),
    eU = n(696451),
    eV = n(576705),
    eG = n(309010),
    eF = n(638128),
    eB = n(522602),
    eH = n(287809),
    eW = n(821102),
    eK = n(954571),
    ez = n(234320),
    eZ = n(625494),
    eq = n(488926),
    eJ = n(723702),
    eY = n(486319),
    e$ = n(355622),
    eX = n(383442),
    eQ = n(834730),
    e0 = n(140735),
    e1 = n(463930),
    e2 = n(935063),
    e6 = n(73392),
    e3 = n(763754),
    e4 = n(967144),
    e7 = n(118517),
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
                (0, e7.Jx)(t.id), (0, e5.Tv)(t, n, "Reply Chain Nudge");
            },
            className: tl._r,
            focusProps: { offset: { right: -4, left: -4 } },
            children: [
                (0, l.jsx)(eQ.E, {
                    color: "text-default",
                    className: tl.Qq,
                    variant: "text-sm/normal",
                    children: j.intl.format(j.t.B3V0FM, { count: Math.min(10, s + 1) }),
                }),
                (0, l.jsx)(eQ.E, {
                    color: "text-link",
                    className: tl.NG,
                    variant: "text-sm/semibold",
                    children: j.intl.string(j.t.rBIGBL),
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
            authorId: _,
            displayNameStyles: x,
        } = (0, e3.Ay)(o),
        C = (0, e4.gn)(d, _, f),
        A = (0, e6.a)({ displayNameStyles: x }),
        E =
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
        I = (0, eP.n)(r, o),
        v = s.showThreadPromptOnReply && E >= 2 && I;
    return (0, l.jsx)("div", {
        className: tl.e1,
        children: (0, l.jsxs)("div", {
            className: tl.kL,
            children: [
                (0, l.jsxs)("div", {
                    className: tl.eU,
                    children: [
                        (0, l.jsx)(e0.A, { id: ti, children: j.intl.formatToPlainString(j.t.EpJL4E, { username: h }) }),
                        (0, l.jsx)(Q.D, {
                            onClick: () => (0, e8.pX)(er.BVt.CHANNEL(r.getGuildId(), r.id, o.id)),
                            focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                            children: (0, l.jsx)(eQ.E, {
                                color: "text-default",
                                className: a()(tl.Qq, tl.Fn),
                                variant: "text-sm/normal",
                                children: j.intl.format(j.t["8E4GxS"], {
                                    userHook: (e, t) =>
                                        (0, l.jsx)(
                                            e1.g,
                                            {
                                                className: tl.UU,
                                                name: h,
                                                colorString: p,
                                                colorStrings: C,
                                                roleName: g,
                                                displayNameStylesFont: A,
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
                                            (0, l.jsx)(X.m, {
                                                asContainer: !0,
                                                text: c ? j.intl.string(j.t.DH2o6R) : j.intl.string(j.t.utGGIY),
                                                children: (0, l.jsx)(Q.D, {
                                                    role: "switch",
                                                    "aria-checked": c,
                                                    onClick: function (e) {
                                                        e.stopPropagation(), (0, e7.vz)(r.id, !c);
                                                    },
                                                    children: (0, l.jsxs)(eQ.E, {
                                                        variant: "text-sm/bold",
                                                        color: c ? "text-link" : "text-muted",
                                                        className: tl.Z4,
                                                        children: [
                                                            (0, l.jsx)(e2.X, {
                                                                size: "md",
                                                                color: "currentColor",
                                                                "aria-label": j.intl.string(j.t.P8tvKG),
                                                                className: tl.mM,
                                                            }),
                                                            c ? j.intl.string(j.t.p9jC2r) : j.intl.string(j.t.U7f3bK),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, l.jsx)("div", { className: tl.me, "aria-hidden": !0 }),
                                        ],
                                    }),
                                (0, l.jsx)(tn, {
                                    onClick: function (e) {
                                        e.stopPropagation(), (0, e7.Jx)(r.id);
                                    },
                                    "aria-label": j.intl.string(j.t.jSnJGT),
                                }),
                            ],
                        }),
                    ],
                }),
                v && (0, l.jsx)(ts, { channel: r, message: o, replyChainLength: E }),
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
        r = (0, m.bG)([ek.A], () => ek.A.getStickerPreview(t, n.drafts.type));
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
                                          "aria-label": j.intl.formatToPlainString(j.t.BGAQRd, { name: e.name }),
                                          onClick: () => (0, eO.x5)(t, n.drafts.type),
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
                children: (0, l.jsx)(tn, { onClick: p, "aria-label": j.intl.string(j.t.cpT0Cq) }),
            }),
        ],
    });
}
var tf = n(228366),
    tg = n(734057);
let t_ = new Set();
class tx extends m.Ay.PersistedStore {
    static displayName = "PTOStore";
    static persistKey = "PTOStore";
    initialize(e) {
        this.waitFor(tg.A, eU.Ay, eG.A, eH.default), null != e && (t_ = new Set(e));
    }
    hasId(e) {
        return t_.has(e);
    }
    getState() {
        return [...t_];
    }
}
let tC = new tx(tf.h, {}),
    tA = () => {
        let e = eG.A.getChannelId();
        if (null == e) return;
        let t = tg.A.getChannel(e);
        null != t && t.isPrivate() && (t_.has(t.getRecipientId()) || (t_.add(t.getRecipientId()), tC.emitChange()));
    },
    tE = () =>
        (0, l.jsxs)("div", {
            className: tl.eU,
            children: [
                (0, l.jsx)(eQ.E, {
                    variant: "text-sm/medium",
                    className: a()(tl.Qq, tl.Fn),
                    children: j.intl.string(j.t["2UvR1E"]),
                }),
                (0, l.jsx)("div", {
                    className: tl.o1,
                    children: (0, l.jsx)(tn, { onClick: tA, "aria-label": j.intl.string(j.t.cpT0Cq) }),
                }),
            ],
        });
var tI = n(278351);
let tv = (e) => {
    let { error: t } = e;
    return (0, l.jsxs)("div", {
        className: tI.M,
        children: [
            (0, l.jsx)(eQ.E, { variant: "text-xs/bold", color: "text-strong", children: j.intl.string(j.t["4VDCG0"]) }),
            t
                ? (0, l.jsx)(eQ.E, { variant: "text-xs/medium", className: tI.z, children: j.intl.string(j.t.qNorwt) })
                : (0, l.jsx)(eQ.E, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: j.intl.string(j.t["260qZS"]),
                  }),
        ],
    });
};
var ty = n(575293),
    tb = n(151282),
    tS = n(1372);
function tN(e) {
    let { pendingScheduledMessage: t } = e,
        { channelId: n, scheduledTimestamp: i } = t;
    return (0, l.jsx)("div", {
        className: tS.e1,
        children: (0, l.jsx)("div", {
            className: tS.kL,
            children: (0, l.jsxs)("div", {
                className: tS.g3,
                children: [
                    (0, l.jsx)(eQ.E, {
                        color: "text-default",
                        className: a()(tS.Qq, tS.a3),
                        variant: "text-sm/normal",
                        children: j.intl.formatToPlainString(j.t["MQcRX/"], { timestamp: new Date(i).valueOf() }),
                    }),
                    (0, l.jsx)("div", {
                        className: tS.o1,
                        children: (0, l.jsx)(tn, {
                            onClick: function (e) {
                                e.stopPropagation(), (0, tb.Ps)(n);
                            },
                            "aria-label": j.intl.string(j.t.cpT0Cq),
                        }),
                    }),
                ],
            }),
        }),
    });
}
var tj = n(266599);
function tT(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, l.jsx)("div", { children: e }, t)),
        s = t.floating.map((e, t) => (0, l.jsx)(i.Fragment, { children: e }, t));
    return 0 === n.length && 0 === s.length
        ? null
        : (0, l.jsxs)(i.Fragment, {
              children: [
                  s.length > 0 && (0, l.jsx)("div", { className: tj.Vq, children: s }),
                  n.length > 0 && (0, l.jsx)("div", { className: tj.MD, children: n }),
              ],
          });
}
var tw = n(729666),
    tR = n(110259),
    tL = n(150934),
    tk = n(139286),
    tO = n(47167),
    tM = n(713654),
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
        o = (0, tO.Ay)(a),
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
        ((0, tk.A)(
            { name: tR.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL, type: tR.ImpressionTypes.VIEW },
            { disableTrack: null == a || !s.enabled },
            [a, s.enabled],
        ),
        !s.enabled || null == a)
    )
        return null;
    let u = (0, tM.gU)(a),
        d = j.intl.format(j.t.UqL10G, {
            callToActionHook: (e, t) =>
                (0, l.jsx)(
                    eQ.E,
                    {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        lineClamp: 1,
                        className: tV.Pf,
                        children: j.intl.string(j.t.Pi3JW7),
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
                i = [e$.oU.NORMAL, e$.oU.SIDEBAR].includes(n);
            return { shouldShow: t.isThread() && !l && i };
        })({ channel: t, type: n });
    return s ? (0, l.jsx)(tG, { thread: t, pendingScheduledMessage: i }) : null;
}
var tB = n(822610),
    tH = n(625928),
    tW = n(670482),
    tK = n(621466),
    tz = n(902001),
    tZ = n(899536),
    tq = n(74833),
    tJ = n(216964),
    tY = n(387758),
    t$ = n(39623),
    tX = n(267102),
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
                  (0, l.jsx)(t4, {
                      slateEditor: r,
                      markdownSyntax: "bold",
                      children: (0, l.jsx)(tz.$, { size: "md", color: "currentColor", className: a()(t2.Kk, i) }),
                  }),
                  (0, l.jsx)(t4, {
                      slateEditor: r,
                      markdownSyntax: "italics",
                      children: (0, l.jsx)(tZ.y, { size: "md", color: "currentColor", className: a()(t2.Kk, i) }),
                  }),
                  (0, l.jsx)(t4, {
                      slateEditor: r,
                      markdownSyntax: "strikethrough",
                      children: (0, l.jsx)(tq.t, { size: "md", color: "currentColor", className: a()(t2.Kk, i) }),
                  }),
                  (0, l.jsx)("div", { className: a()(t2.yF, s) }),
                  !n?.disableBlockQuotes &&
                      (0, l.jsx)(t7, {
                          slateEditor: r,
                          blockType: "blockQuote",
                          children: (0, l.jsx)(tJ.c, { size: "md", color: "currentColor", className: a()(t2.Kk, i) }),
                      }),
                  !n?.disableInlineCode &&
                      (0, l.jsx)(t4, {
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
                  (0, l.jsx)(t4, {
                      slateEditor: r,
                      markdownSyntax: "spoiler",
                      children: (0, l.jsx)(t$.b, { size: "md", color: "currentColor", className: a()(t2.Kk, i) }),
                  }),
              ],
          });
}
let t3 = i.forwardRef(function (e, t) {
    let { editorRef: n, containerRef: s, options: a } = e,
        r = i.useRef(null),
        [o, c] = i.useState(!1),
        u = i.useRef(null),
        d = i.useContext(tX.Ay),
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
            let t = tW.rL.findDocumentOrShadowRoot(e),
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
        [_, x] = i.useState(0),
        [C, A] = i.useState(0);
    return (i.useLayoutEffect(() => {
        if (null == f || null == g || null == r.current) return;
        let e = r.current.getBoundingClientRect();
        A(e.width / 2), x(e.height + 12);
    }, [f, g]),
    null == f || null == g || null == n.current?.getSlateEditor())
        ? null
        : (0, l.jsx)(S.Ay, {
              children: (0, l.jsx)("div", {
                  id: "slate-toolbar",
                  ref: r,
                  className: t2.KE,
                  style: { top: g - _, left: f - C },
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
function t4(e) {
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
function t7(e) {
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
                null != n && null != i && i.insertEmoji({ emoji: n, willClose: l }), l && (0, ex.v8)();
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
                let x = ek.A.getStickerPreview(r, t.drafts.type)?.map((e) => e.id) ?? [],
                    C = eB.A.getUploads(r, t.drafts.type) ?? [];
                if (null == d && !m && !f && (0, eA.xz)(C, r)) {
                    c(!1),
                        (0, p.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("49681"),
                                n.e("65437"),
                                n.e("87046"),
                                n.e("10730"),
                                n.e("99011"),
                                n.e("42516"),
                                n.e("38862"),
                            ]).then(n.bind(n, 538899));
                            return (t) =>
                                (0, l.jsx)(e, {
                                    ...t,
                                    threadId: r,
                                    attachments: C,
                                    sendMessage: () => u(i, void 0, void 0, void 0, !0),
                                });
                        });
                    return;
                }
                e({
                    value: i,
                    uploads: C,
                    stickers: x,
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
                            ? _.A.saveDraft(r, "", t.drafts.type)
                            : o && (s.current?.clearValue(), a.current?.hide())),
                        o && (c(!1), (0, ex.v8)(), l && s.current?.focus());
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
            if (t === e$.oU.CREATE_FORUM_POST || t === e$.oU.CREATE_ANNOUNCEMENT_POST) n.current?.insertGIF(l);
            else {
                let t = {
                    gif_provider: l.provider ?? (0, eE.cf)(),
                    load_id: eW.A.getAnalyticsID(),
                    source_object: "GIF Picker",
                    gif_url: l.url,
                    gif_id: l.id,
                };
                e(l.url, void 0, void 0, !0, void 0, t);
            }
            (0, ex.v8)(), n.current?.focus();
        },
        [n, e, t],
    );
}
function ns(e) {
    return i.useCallback(
        (t) => {
            let { emoji: n, willClose: l } = t,
                i = e.current;
            null != n && null != i && i.insertEmoji({ emoji: n, willClose: l }), l && (0, ex.v8)();
        },
        [e],
    );
}
function na(e) {
    let { editorRef: t, disabled: n, textValue: l, channelId: s, chatInputType: a, submit: r } = e,
        { analyticsLocations: o } = (0, E.Ay)();
    return i.useCallback(
        (e, i) => {
            n ||
                (a === e$.oU.CREATE_ANNOUNCEMENT_POST || (0, eM.YS)(i, l, s, a.drafts.type)
                    ? ((0, td.fh)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != ek.A.getStickerPreview(s, a.drafts.type),
                          analyticsLocations: o,
                      }),
                      (0, eO.$x)(s, e, a.drafts.type))
                    : (r({ value: "", uploads: void 0, stickers: [e.id] }), t.current?.clearValue()),
                (0, ex.v8)(),
                t.current?.focus());
        },
        [n, l, s, t, o, r, a],
    );
}
function nr(e) {
    return i.useCallback(
        (t) => {
            let n = e.current;
            null != n && n.insertKaomoji(t), (0, ex.v8)(), n?.focus();
        },
        [e],
    );
}
function no(e, t, n) {
    let l = i.useCallback(() => {
            t || (0, ex.r$)(nn.kx.EMOJI, e, n);
        }, [t, e, n]),
        s = i.useCallback(() => {
            !t && e.gifs?.allowSending && (0, ex.r$)(nn.kx.GIF, e, n);
        }, [t, e, n]),
        a = i.useCallback(() => {
            !t && e.stickers?.allowSending && (0, ex.r$)(nn.kx.STICKER, e, n);
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
        s = (0, m.bG)([eI.A], () => null != i && eI.A.isLurking(i), [i]),
        a = (0, m.bG)([eU.Ay, eH.default], () => {
            let e = eH.default.getCurrentUser();
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
    let [l, s, a] = (0, ex.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], u.x),
        r = (0, m.bG)([v.A], () => v.A.shouldShowPopup() && v.A.activeViewType() === e && v.A.activeChannelId() === n);
    i.useEffect(
        () => () => {
            (0, ex.v8)(e, n);
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
                n && (0, ex.v8)(e, t);
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
                    required: _,
                    disabled: y,
                    placeholder: b,
                    accessibilityLabel: S,
                    channel: N,
                    type: j,
                    focused: T,
                    error: w,
                    renderAttachButton: R,
                    renderApplicationCommandIcon: L,
                    renderButtons: M,
                    pendingReply: P,
                    onChange: D,
                    onResize: U,
                    onBlur: V,
                    onFocus: G,
                    onKeyDown: F,
                    onSubmit: B,
                    promptToUpload: H,
                    highlighted: W,
                    canMentionRoles: K,
                    canMentionChannels: z,
                    maxCharacterCount: Z,
                    showRemainingCharsAfterCount: q,
                    allowNewLines: J = !0,
                    characterCountClassName: Y,
                    "aria-describedby": $,
                    "aria-labelledby": X,
                    setEditorRef: Q,
                    autoCompletePosition: ee,
                    children: et,
                    disableThemedBackground: en = !1,
                    emojiPickerCloseOnModalOuterClick: el,
                    parentModalKey: ei,
                    pendingScheduledMessage: es,
                    showValueWhenDisabled: ea = !1,
                } = e;
            c()(null != j, "chat input type must be set");
            let { analyticsLocations: eo } = (0, E.Ay)(A.A.CHANNEL_TEXT_AREA),
                ec = nd(t),
                eu = i.useRef(null),
                ed = i.useRef(null),
                em = i.useRef(null),
                eA = i.useRef(null),
                eE = i.useRef(null);
            Q?.(em.current);
            let eI = (0, I.A)(N),
                [ey, eb] = i.useState(!eI);
            (0, x.i4)(ec, (e) => {
                let { width: t } = e;
                return eb(!eI && (null == t || t > 450));
            });
            let { activeCommand: eS, activeCommandSection: eN } = (0, m.cf)([O.A], () => ({
                    activeCommand: j.commands?.enabled ? O.A.getActiveCommand(N.id) : null,
                    activeCommandSection: j.commands?.enabled ? O.A.getActiveCommandSection(N.id) : null,
                })),
                {
                    isLurking: ej,
                    isPendingMember: eT,
                    disabled: ew,
                    canAttachFiles: eR,
                    canCreateThreads: ek,
                    canEveryoneSendMessages: eO,
                } = nm(N, j, eS, y),
                eM = j.toolbarType === e$.O1.STATIC,
                eP = !eD.D_.useSetting() && !(0, eJ.isAndroidWeb)() && null != window.ResizeObserver,
                eV = !eP || !j.commands?.enabled || !T || "/" !== s,
                eG = (0, ev.A)(),
                { fontSize: eB } = (0, m.cf)([C.A], () => ({ fontSize: C.A.fontSize })),
                eW = (0, m.bG)([eF.A], () => eF.A.isEnabled());
            no(j, ew, N.id);
            let { eventEmitter: ez, handleEditorSelectionChanged: eq } = nc(em, s, r),
                eQ = i.useRef(s);
            eQ.current = s;
            let e0 = i.useCallback(
                    (e, t, n) => {
                        "/" === t && "" === eQ.current && j.commands?.enabled && ez.emit("command-sentinel-typed"),
                            D?.(e, t, n);
                    },
                    [D, j.commands?.enabled, ez],
                ),
                { submitting: e1, submit: e2, handleSubmit: e6 } = nl(B, j, em, eE, N.id),
                { autocompleteRef: e3, handleMaybeShowAutocomplete: e4, handleHideAutocomplete: e7 } = nu(),
                e8 = ni(e2, j, em),
                e5 = ns(em),
                e9 = na({ editorRef: em, disabled: ew, textValue: s, channelId: N.id, chatInputType: j, submit: B }),
                te = i.useCallback(
                    (e, t, n) => {
                        let l = em.current;
                        null != e &&
                            null != l &&
                            (eK.default.track(er.HAw.SOUNDMOJI_SELECT, {
                                channel_id: N.id,
                                guild_id: N.guild_id,
                                sound_guild_id: e.guildId,
                                sound_id: e.soundId,
                                source: t,
                            }),
                            l.insertSound(e)),
                            n && (0, ex.v8)(),
                            l?.focus();
                    },
                    [em, N.id, N.guild_id],
                ),
                tt = nr(em),
                tn = i.useCallback(() => eE?.current?.hide(), []),
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
                { expressionPickerView: td, shouldHideExpressionPicker: th, handleOuterClick: tm } = np(j, em, N.id),
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
                { handleAutocompleteVisibilityChange: tx } = nf(j, N.id),
                tA = (function (e) {
                    let { type: t, channelId: n } = e;
                    return (0, ep.bG)([v.A], () => {
                        let e = v.A.activeViewType();
                        return null != e && e === t && v.A.activeChannelId() === n && v.A.shouldShowPopup();
                    }, [t, n]);
                })({ type: j, channelId: N.id }),
                tI = i.useCallback(() => {
                    ez.emit("submit-failure");
                }, [ez]);
            (0, eY.R)(ez, N.guild_id, N.id);
            let tb = null != P,
                tS = (ew && !((ej || eT) && eO)) || (e1 && j.submit?.useDisabledStylesOnSubmit),
                tR = null;
            null != eS ? (tR = L?.(eS, eN, tj.g$)) : (!ew || ek) && (tR = R?.(tb, tj.g$));
            let tL = eP && null != r && !ew && j.showCharacterCount && null == eS,
                tk = eP && !__OVERLAY__ && null != r && null == eS && j.toolbarType !== e$.O1.NONE && !ew,
                tO = (function (e) {
                    let {
                            channel: t,
                            type: n,
                            activeCommand: s,
                            pendingReply: a,
                            pendingScheduledMessage: r,
                            selectedAutocompleteInputType: o,
                            selectedAutocompleteInputError: c,
                        } = e,
                        { activeCommandOption: u, activeCommandOptionStates: d } = (0, m.cf)([O.A], () => ({
                            activeCommandOption: O.A.getActiveOption(t.id),
                            activeCommandOptionStates: O.A.getOptionStates(t.id),
                        })),
                        h = (0, m.bG)([eU.Ay, eH.default, tC], () => {
                            let e = eH.default.getCurrentUser();
                            if (null == e || !e.isStaff() || !t.isDM()) return !1;
                            let n = eH.default.getUser(t.getRecipientId());
                            if (!n?.isStaff()) return !1;
                            let l = eU.Ay.getNicknames(n.id).some((e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
                            return l ? !tC.hasId(n.id) && l : (t_.delete(n.id) && tC.emitChange(), !1);
                        });
                    return i.useMemo(() => {
                        let e = [],
                            i = [];
                        return (
                            null != t.guild_id &&
                                n === e$.oU.NORMAL &&
                                i.push((0, l.jsx)(ty.A, { guildId: t.guild_id, channel: t, className: tj.UW })),
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
                            h && e.push((0, l.jsx)(tE, {})),
                            null != r && e.push((0, l.jsx)(tN, { pendingScheduledMessage: r })),
                            "timestampMentionInput" === o && i.push((0, l.jsx)(tv, { error: c ?? !1 })),
                            { stacked: e, floating: i }
                        );
                    }, [s, u, d, t, a, h, n, r, o, c]);
                })({
                    channel: N,
                    type: j,
                    activeCommand: eS,
                    pendingReply: P,
                    pendingScheduledMessage: es,
                    selectedAutocompleteInputType: tf,
                    selectedAutocompleteInputError: tg,
                }),
                tM = 0 === s.trim().length,
                tP = null != P ? [$, ti].filter(Boolean).join(" ") : $,
                tD = j.layout === e$.wt.INLINE,
                tU = j.layout === e$.wt.FLUSH,
                tV = (0, l.jsx)("div", { ref: ed, className: tj.BW }),
                tG = tA ? (0, l.jsx)(k, { align: "right", positionTargetRef: ed, channel: N }) : null,
                tW =
                    null != M
                        ? M()
                        : (0, l.jsx)(tw.A, {
                              type: j,
                              disabled: ew,
                              channel: N,
                              handleSubmit: e6,
                              isEmpty: tM,
                              showAllButtons: ey,
                          }),
                tK = tL
                    ? (0, l.jsx)(tH.A, {
                          type: j,
                          textValue: s,
                          className: Y,
                          maxCharacterCount: Z,
                          showRemainingCharsAfterCount: q,
                      })
                    : null;
            return (
                i.useEffect(() => {
                    T && eZ._.dispatch(er.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: N.id });
                }, [T, N.id]),
                (0, l.jsx)(e_.Sv, {
                    value: ez,
                    children: (0, l.jsxs)(E.f5, {
                        value: eo,
                        children: [
                            tk && eM
                                ? (0, l.jsx)(nt, { editorRef: em, type: j, channel: N })
                                : tk
                                  ? (0, l.jsx)(t3, { ref: eE, editorRef: em, containerRef: eA, options: j.markdown })
                                  : null,
                            (0, l.jsxs)("div", {
                                ref: ec,
                                className: a()(o, {
                                    [tj.gM]: !0,
                                    [tj.h9]: tS,
                                    [tj.mr]: W,
                                    [tj.Wn]: d.Fr,
                                    [tj.Ls]: tD,
                                    [tj.AH]: tU,
                                    [tj.z3]: null != w,
                                }),
                                children: [
                                    tD || tU ? null : (0, l.jsx)(tT, { bars: tO }),
                                    (0, l.jsxs)("div", {
                                        ref: eA,
                                        onScroll: tn,
                                        className: a()(u, {
                                            [tj.xx]: !0,
                                            [tj.k6]: !en,
                                            [tj.Ri]: tO.stacked.length > 0,
                                        }),
                                        children: [
                                            (0, l.jsx)(tu, { channelId: N.id, chatInputType: j }),
                                            j.hideAttachmentArea
                                                ? null
                                                : (0, l.jsx)(tB.A, { channelId: N.id, type: j, canAttachFiles: eR }),
                                            (0, l.jsxs)("div", {
                                                className: a()(tj.vW, {
                                                    [tj.BF]: tS,
                                                    [tj.RL]:
                                                        j !== e$.oU.EDIT && (null != tR || (tS && null == tR) || ej),
                                                    [tj.fk]: j === e$.oU.THREAD_CREATION,
                                                    [tj.TZ]:
                                                        j === e$.oU.CREATE_FORUM_POST ||
                                                        j === e$.oU.FORWARD_MESSAGE_INPUT,
                                                    [tj.$i]: j === e$.oU.USER_PROFILE_REPLY,
                                                }),
                                                onMouseDown: tm,
                                                children: [
                                                    tG,
                                                    tR,
                                                    (0, l.jsx)(f.vN, {
                                                        ringTarget: ec,
                                                        ringClassName: tj.Rg,
                                                        children: (0, l.jsx)(eX.A, {
                                                            ref: em,
                                                            id: p,
                                                            focused: T,
                                                            useSlate: eP,
                                                            textValue: s,
                                                            richValue: r,
                                                            disabled: ew,
                                                            placeholder: b,
                                                            required: _,
                                                            accessibilityLabel: S,
                                                            isPreviewing: (ej || eT) && eO,
                                                            channel: N,
                                                            type: j,
                                                            canPasteFiles: eR,
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
                                                            onSubmitFailure: tI,
                                                            onTab: tr,
                                                            onEnter: to,
                                                            onMoveSelection: tc,
                                                            onSelectionChanged: eq,
                                                            onMaybeShowAutocomplete: e4,
                                                            onHideAutocomplete: e7,
                                                            promptToUpload: H,
                                                            fontSize: eB,
                                                            spellcheckEnabled: eW,
                                                            canOnlyUseTextCommands: tb,
                                                            className: a()(
                                                                {
                                                                    [tj.QI]: j === e$.oU.THREAD_CREATION,
                                                                    [tj.AV]: j === e$.oU.PROFILE_BIO_INPUT,
                                                                    [tj.GR]: j === e$.oU.OVERLAY_INLINE_REPLY,
                                                                },
                                                                h,
                                                            ),
                                                            "aria-labelledby": X,
                                                            showValueWhenDisabled: ea,
                                                        }),
                                                    }),
                                                    tW,
                                                    tV,
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(tF, { channel: N, type: j, pendingScheduledMessage: es }),
                                    eV ? null : (0, l.jsx)(eh, { ref: eu, channel: N, canOnlyUseTextCommands: tb }),
                                    (0, l.jsx)(ef.A, {
                                        ref: e3,
                                        channel: N,
                                        canMentionRoles: K,
                                        canMentionChannels: z,
                                        useNewSlashCommands: eP,
                                        canOnlyUseTextCommands: tb,
                                        canSendStickers: j.stickers?.allowSending,
                                        canSendSoundmoji: j.soundmoji?.allowSending,
                                        textValue: s,
                                        focused: T,
                                        expressionPickerView: td,
                                        type: j,
                                        targetRef: ec,
                                        editorRef: em,
                                        onSendMessage: e2,
                                        onSendSticker: e9,
                                        onVisibilityChange: tx,
                                        editorScrollerRef: eA,
                                        editorHeight: tl,
                                        barsHeight: 40 * tO.floating.length,
                                        setValue: (e, t) => e0?.(null, e, t),
                                        position: ee,
                                    }),
                                    (0, l.jsx)(eL, { textValue: s, editorHeight: tl, channelId: N.id }),
                                    tK,
                                    et,
                                ],
                            }),
                            (0, l.jsx)(g.U, { error: w }),
                            th
                                ? null
                                : (0, l.jsx)(eC.A, {
                                      positionTargetRef: ec,
                                      type: j,
                                      onSelectGIF: e8,
                                      onSelectEmoji: e5,
                                      onSelectSticker: e9,
                                      onSelectSound: te,
                                      onSelectKaomoji: tt,
                                      channel: N,
                                      closeOnModalOuterClick: el,
                                      parentModalKey: ei,
                                      position: "top",
                                      align: "right",
                                      positionLayerClassName: tj.BD,
                                  }),
                        ],
                    }),
                })
            );
        }),
    );
