n.d(t, { A: () => ep });
var l = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(435558),
    o = n.n(r),
    u = n(554146),
    c = n(263775),
    d = n(409617),
    m = n(403581),
    h = n(834730),
    x = n(28863),
    C = n(87719),
    p = n(49999),
    g = n(683825),
    f = n(792996),
    j = n(821939);
function I(e) {
    let { markAsDismissed: t } = e;
    function n() {
        (t(p.i.TAKE_ACTION), (0, C.x)());
    }
    return (0, l.jsxs)("div", {
        className: j.U,
        children: [
            (0, l.jsx)(m.NitroWheelIcon, { size: "xs", color: "currentColor" }),
            (0, l.jsx)(h.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: f.intl.format(g.default["0AhA1F"], {
                    nitroHook: (e, t) => (0, l.jsx)(x.Anchor, { onClick: n, children: e }, t),
                }),
            }),
        ],
    });
}
var A = n(38021),
    N = n(831544),
    v = n(265872),
    S = n(900797),
    _ = n(847374),
    E = n(939249),
    y = n(789645),
    P = n(267102),
    M = n(253932),
    b = n(204915);
function O(e) {
    let { markAsDismissed: t, onMenuOpenChange: i } = e,
        a = s.useRef(null),
        { theme: r } = (0, A.wR)(),
        o = (0, P.Us)(),
        u = s.useCallback(async () => {
            let { default: e } = await Promise.all([n.e(409495), n.e(827037)]).then(n.bind(n, 707116));
            return (t) => {
                let { closePopout: n, position: s, updatePosition: i } = t;
                return null != a.current
                    ? (0, l.jsx)(e, {
                          onClose: n,
                          onSelect: n,
                          position: s,
                          onHeightUpdate: i,
                          target: a.current,
                          theme: r,
                          context: o,
                      })
                    : null;
            };
        }, [r, o]);
    return (0, l.jsxs)("div", {
        ref: a,
        className: b.G0,
        children: [
            (0, l.jsxs)("div", {
                className: b.R4,
                children: [
                    (0, l.jsx)(N.MicrophoneIcon, { size: "xs", color: "currentColor" }),
                    (0, l.jsxs)("div", {
                        className: b.Qs,
                        children: [
                            (0, l.jsx)(h.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: f.intl.string(g.default.y080Rd),
                            }),
                            (0, l.jsx)(v.Q, {
                                targetElementRef: a,
                                renderPopout: u,
                                position: "top",
                                align: "center",
                                onRequestOpen: () => i(!0),
                                onRequestClose: () => {
                                    (M.Q$.getSetting() && t(p.i.TAKE_ACTION), i(!1));
                                },
                                children: (e, t) => {
                                    let { isShown: n } = t,
                                        s = n ? S.ChevronSmallUpIcon : _.ChevronSmallDownIcon;
                                    return (0, l.jsxs)(E.D, {
                                        ...e,
                                        className: b.lO,
                                        "aria-haspopup": "menu",
                                        children: [
                                            (0, l.jsx)(h.E, {
                                                variant: "body-sm/medium",
                                                color: "none",
                                                className: b.hk,
                                                children: f.intl.string(g.default.B2F9tM),
                                            }),
                                            (0, l.jsx)(s, { size: "xs", color: "currentColor" }),
                                        ],
                                    });
                                },
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(E.D, {
                className: b.VN,
                "aria-label": f.intl.string(f.t.cpT0Cq),
                onClick: () => t(p.i.USER_DISMISS),
                children: (0, l.jsx)(y.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var L = n(650684),
    R = n(818349),
    T = n(419490);
function w(e) {
    let { markAsDismissed: t, onMenuOpenChange: i } = e,
        a = s.useRef(null),
        { theme: r } = (0, A.wR)(),
        o = (0, P.Us)(),
        u = s.useCallback(async () => {
            let { default: e } = await Promise.all([n.e(409495), n.e(827037)]).then(n.bind(n, 707116));
            return (t) => {
                let { closePopout: n, position: s, updatePosition: i } = t;
                return null != a.current
                    ? (0, l.jsx)(e, {
                          onClose: n,
                          onSelect: n,
                          position: s,
                          onHeightUpdate: i,
                          target: a.current,
                          theme: r,
                          context: o,
                      })
                    : null;
            };
        }, [r, o]);
    return (0, l.jsxs)("div", {
        ref: a,
        className: b.G0,
        children: [
            (0, l.jsxs)("div", {
                className: b.R4,
                children: [
                    (0, l.jsx)(L.ClipsAutoIcon, { size: "xs", color: "currentColor" }),
                    (0, l.jsxs)("div", {
                        className: b.Qs,
                        children: [
                            (0, l.jsx)(h.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: f.intl.string(g.default.Lym9gZ),
                            }),
                            (0, l.jsx)(v.Q, {
                                targetElementRef: a,
                                renderPopout: u,
                                position: "top",
                                align: "center",
                                onRequestOpen: () => i(!0),
                                onRequestClose: () => {
                                    let { clipsSettings: e } = T.Ay.getState();
                                    ("auto" === (0, R.r)(e.clipsEnabled, T.Ay.getEnableAutoclipping()) &&
                                        t(p.i.TAKE_ACTION),
                                        i(!1));
                                },
                                children: (e, t) => {
                                    let { isShown: n } = t,
                                        s = n ? S.ChevronSmallUpIcon : _.ChevronSmallDownIcon;
                                    return (0, l.jsxs)(E.D, {
                                        ...e,
                                        className: b.lO,
                                        "aria-haspopup": "menu",
                                        children: [
                                            (0, l.jsx)(h.E, {
                                                variant: "body-sm/medium",
                                                color: "none",
                                                className: b.hk,
                                                children: f.intl.string(g.default.iHA2eT),
                                            }),
                                            (0, l.jsx)(s, { size: "xs", color: "currentColor" }),
                                        ],
                                    });
                                },
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(E.D, {
                className: b.VN,
                "aria-label": f.intl.string(f.t.cpT0Cq),
                onClick: () => t(p.i.USER_DISMISS),
                children: (0, l.jsx)(y.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var U = n(176781);
function k(e) {
    let { markAsDismissed: t, onMenuOpenChange: i } = e,
        a = s.useRef(null),
        { theme: r } = (0, A.wR)(),
        o = (0, P.Us)(),
        u = s.useCallback(async () => {
            let { default: e } = await Promise.all([n.e(409495), n.e(827037)]).then(n.bind(n, 707116));
            return (t) => {
                let { closePopout: n, position: s, updatePosition: i } = t;
                return null != a.current
                    ? (0, l.jsx)(e, {
                          onClose: n,
                          onSelect: n,
                          position: s,
                          onHeightUpdate: i,
                          target: a.current,
                          theme: r,
                          context: o,
                      })
                    : null;
            };
        }, [r, o]);
    return (0, l.jsxs)("div", {
        ref: a,
        className: b.G0,
        children: [
            (0, l.jsxs)("div", {
                className: b.R4,
                children: [
                    (0, l.jsx)(U.ClipsIcon, { size: "xs", color: "currentColor" }),
                    (0, l.jsxs)("div", {
                        className: b.Qs,
                        children: [
                            (0, l.jsx)(h.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: f.intl.string(g.default["G+P4p/"]),
                            }),
                            (0, l.jsx)(v.Q, {
                                targetElementRef: a,
                                renderPopout: u,
                                position: "top",
                                align: "center",
                                onRequestOpen: () => i(!0),
                                onRequestClose: () => {
                                    (T.Ay.getState().clipsSettings.clipsEnabled && t(p.i.TAKE_ACTION), i(!1));
                                },
                                children: (e, t) => {
                                    let { isShown: n } = t,
                                        s = n ? S.ChevronSmallUpIcon : _.ChevronSmallDownIcon;
                                    return (0, l.jsxs)(E.D, {
                                        ...e,
                                        className: b.lO,
                                        "aria-haspopup": "menu",
                                        children: [
                                            (0, l.jsx)(h.E, {
                                                variant: "body-sm/medium",
                                                color: "none",
                                                className: b.hk,
                                                children: f.intl.string(g.default.vxs365),
                                            }),
                                            (0, l.jsx)(s, { size: "xs", color: "currentColor" }),
                                        ],
                                    });
                                },
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(E.D, {
                className: b.VN,
                "aria-label": f.intl.string(f.t.cpT0Cq),
                onClick: () => t(p.i.USER_DISMISS),
                children: (0, l.jsx)(y.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var W = n(607399),
    D = n(855986),
    H = n(596344),
    F = n(287809),
    G = n(734066),
    V = n(849993);
n(938796);
var q = n(665260),
    z = n(33358),
    X = n(294520),
    Q = n(288254),
    B = n(734057),
    Y = n(464132),
    K = n(652215);
function $(e) {
    return (0, q.Lt)(e.flags ?? 0, K.sbO.IS_CLIP);
}
function Z(e) {
    return e.attachments.some($);
}
let J = new WeakMap();
function ee(e, t) {
    let n = J.get(e);
    if (null != n && n.currentUserId === t) return n.messageId;
    let l = e.findNewest((e) => e.author.id !== t && Z(e))?.id ?? null;
    return (J.set(e, { currentUserId: t, messageId: l }), l);
}
function et(e) {
    let t = (0, z.P)(e),
        n = e.channel_id,
        l = (0, D.bG)([B.A], () => B.A.getChannel(n), [n]);
    return e.attachments.some(
        (e) => $(e) && null == (0, X.iW)(e, t, (0, q.Lt)(e.flags ?? 0, K.sbO.IS_SPOILER) || (0, Q.BV)(l)),
    );
}
let en = [
    { id: "received", content: u.M.AUTOCLIPPING_EARLY_ACCESS_RECEIVED_CLIP_NOTICE, claim: "received" },
    {
        id: "manual_sent",
        content: u.M.AUTOCLIPPING_EARLY_ACCESS_SENT_MANUAL_CLIP_NOTICE,
        claim: "manual_sent_instance",
    },
    { id: "chat_upsell", content: u.M.AUTOCLIPPING_EARLY_ACCESS_FREE_USER_CHAT_UPSELL, claim: "chat_upsell" },
    {
        id: "voice_inclusion",
        content: u.M.AUTOCLIPPING_EARLY_ACCESS_FRIEND_CLIP_VOICE_NOTICE,
        claim: "voice_inclusion",
    },
];
function el(e) {
    let { message: t } = e,
        {
            notice: n,
            markAsDismissed: i,
            onMenuOpenChange: a,
        } = (function (e) {
            var t, n, l;
            let i,
                a,
                r,
                o,
                u,
                m,
                h,
                x,
                C,
                p,
                g,
                f,
                j,
                I,
                A,
                N,
                v,
                S,
                _,
                E,
                y,
                b,
                O,
                L,
                R,
                T,
                w,
                U,
                k,
                q,
                z,
                X,
                Q,
                B,
                $,
                J,
                el,
                es,
                ei,
                ea = s.useId(),
                [er, eo] = s.useState(null),
                eu = {
                    received:
                        ((t = "received" === er),
                        (i = (0, P.Us)()),
                        (a = "off" === (0, Y.U)().value),
                        (r = et(e)),
                        (o = e.channel_id),
                        (u = e.id),
                        (m = (0, D.bG)([F.default], () => F.default.getCurrentUser()?.id)),
                        (h = e.author.id !== m && Z(e) && (a || t) && !W.Fr && i === K.BRT.APP),
                        (C = null == (x = (0, d._C)("received")) ? "none" : x === ea ? "self" : "other"),
                        (p = (0, D.bG)([H.A], () => h && "none" === C && ee(H.A.getMessages(o), m) === u, [
                            h,
                            C,
                            o,
                            u,
                            m,
                        ])),
                        (g = h && (p || "self" === C) && r),
                        (f = (0, V.H)("useReceivedClipNudge")),
                        g && f),
                    manual_sent:
                        ((n = "manual_sent" === er),
                        (j = (0, P.Us)()),
                        (I = "auto" === (0, Y.U)().value),
                        (A = (0, d._C)("manual_sent") === e.id),
                        (N = (0, d._C)("manual_sent_instance")),
                        (v = (0, D.bG)([F.default], () => F.default.getCurrentUser()?.id)),
                        (S =
                            A && (null == N || N === ea) && e.author.id === v && (!I || n) && !W.Fr && j === K.BRT.APP),
                        (_ = (0, V.H)("useManualClipSentNudge")),
                        S && _),
                    chat_upsell:
                        ((E = (0, P.Us)()),
                        (y = et(e)),
                        (b = (0, d._C)("chat_upsell")),
                        (O = (0, D.bG)([F.default], () => F.default.getCurrentUser()?.id)),
                        (L = (0, G.Vl)()),
                        (R = e.author.id !== O && !L && !W.Fr && E === K.BRT.APP && Z(e)),
                        (T = e.channel_id),
                        (w = e.id),
                        (U = (0, D.bG)([H.A], () => R && null == b && ee(H.A.getMessages(T), O) === w, [
                            R,
                            b,
                            T,
                            w,
                            O,
                        ])),
                        (k = R && (U || b === ea) && y),
                        (0, V.H)("useClipsChatUpsell", k)),
                    voice_inclusion:
                        ((l = "voice_inclusion" === er),
                        (q = (0, P.Us)()),
                        (z = M.Q$.useSetting()),
                        (X = (0, d._C)("voice_inclusion")),
                        (Q = (0, D.bG)([F.default], () => F.default.getCurrentUser()?.id)),
                        (B = e.author.id !== Q && (!z || l) && !W.Fr && q === K.BRT.APP && Z(e)),
                        ($ = e.channel_id),
                        (J = e.id),
                        (el = (0, D.bG)([H.A], () => B && null == X && ee(H.A.getMessages($), Q) === J, [
                            B,
                            X,
                            $,
                            J,
                            Q,
                        ])),
                        (es = B && (el || X === ea)),
                        (ei = (0, V.H)("useClipsVoiceInclusionNudge")),
                        es && ei),
                },
                ec = (0, d.wc)(e.id),
                ed = en.filter((e) => {
                    let { id: t } = e;
                    return eu[t] && (null == ec || ec === t);
                }),
                em = (0, d.Jk)(),
                eh = ed
                    .map((e) => {
                        let { claim: t } = e;
                        return t;
                    })
                    .join(" ");
            (s.useLayoutEffect(() => {
                let e = eh.split(" ");
                for (let { claim: t } of en) e.includes(t) ? (0, d.K)(t, ea) : (0, d.Rx)(t, ea);
            }, [eh, em, ea]),
                s.useLayoutEffect(
                    () => () =>
                        en.forEach((e) => {
                            let { claim: t } = e;
                            return (0, d.Rx)(t, ea);
                        }),
                    [ea],
                ));
            let ex = ed.filter((e) => {
                    let { claim: t } = e;
                    return em[t] === ea;
                }),
                [eC, ep] = (0, c.kn)(
                    ex.map((e) => {
                        let { content: t } = e;
                        return t;
                    }),
                ),
                eg =
                    en.find((e) => {
                        let { content: t } = e;
                        return t === eC;
                    })?.id ?? null,
                ef = e.id;
            return (
                s.useEffect(() => {
                    null != eg && (0, d.Mi)(ef, eg);
                }, [ef, eg]),
                {
                    notice: eg,
                    markAsDismissed: ep,
                    onMenuOpenChange: function (e) {
                        eo(e ? eg : null);
                    },
                }
            );
        })(t);
    switch (n) {
        case "received":
            return (0, l.jsx)(k, { markAsDismissed: i, onMenuOpenChange: a });
        case "manual_sent":
            return (0, l.jsx)(w, { markAsDismissed: i, onMenuOpenChange: a });
        case "chat_upsell":
            return (0, l.jsx)(I, { markAsDismissed: i });
        case "voice_inclusion":
            return (0, l.jsx)(O, { markAsDismissed: i, onMenuOpenChange: a });
        case null:
            return null;
    }
}
var es = n(643612),
    ei = n(448381),
    ea = n(96782),
    er = n(838541),
    eo = n(882469);
function eu(e) {
    let { visualMediaItems: t, maxWidth: n } = e,
        s = t.length;
    if (1 === s) return (0, l.jsx)(ec, { itemsForLayout: t, isSingleImage: !0, maxWidth: n });
    if (2 === s) return (0, l.jsx)(ed, { itemsForLayout: t, maxWidth: n });
    if (3 === s) return (0, l.jsx)(em, { itemsForLayout: t, maxWidth: n });
    if (4 === s) return (0, l.jsx)(eh, { itemsForLayout: t, maxWidth: n });
    let i = s % 3;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            1 === i && (0, l.jsx)(ec, { itemsForLayout: t.slice(0, i), maxWidth: n }),
            2 === i && (0, l.jsx)(ed, { itemsForLayout: t.slice(0, i), maxWidth: n }),
            0 === i
                ? (0, l.jsx)(ex, { itemsForLayout: t, maxWidth: n })
                : (0, l.jsx)(ex, { itemsForLayout: t.slice(i), maxWidth: n }),
        ],
    });
}
function ec(e) {
    let { itemsForLayout: t, maxWidth: n, isSingleImage: s } = e,
        i = t[0];
    return (0, l.jsx)("div", {
        className: a()(eo.EO, { [eo.Gj]: s, [eo.Kv]: !s }),
        children: (0, l.jsx)(eC, { props: i, useFullWidth: !s, isSingleItem: !0, maxWidth: n }),
    });
}
function ed(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((n - 4) / 2);
    return (0, l.jsx)("div", {
        className: eo.SQ,
        children: t.map((e) =>
            (0, l.jsx)(
                "div",
                { className: eo.XE, children: (0, l.jsx)(eC, { props: e, maxWidth: s, maxHeight: s }) },
                e.item.uniqueId,
            ),
        ),
    });
}
function em(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((2 * (n - 4)) / 3),
        i = s / 2;
    return (0, l.jsxs)("div", {
        className: a()(eo.SQ, eo.o_),
        children: [
            (0, l.jsx)("div", { className: eo.es, children: (0, l.jsx)(eC, { props: t[0], maxWidth: s }) }),
            (0, l.jsx)("div", {
                className: eo.N$,
                children: (0, l.jsx)("div", {
                    className: eo._i,
                    children: t
                        .splice(1)
                        .map((e) =>
                            (0, l.jsx)(
                                "div",
                                {
                                    className: eo.$w,
                                    children: (0, l.jsx)(eC, { props: e, maxWidth: i, maxHeight: 173 }),
                                },
                                e.item.uniqueId,
                            ),
                        ),
                }),
            }),
        ],
    });
}
function eh(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((n - 4) / 2);
    return (0, l.jsx)("div", {
        className: eo.av,
        children: t.map((e) =>
            (0, l.jsx)(eC, { props: e, maxWidth: s, maxHeight: 173, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function ex(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((n - 8) / 3);
    return (0, l.jsx)("div", {
        className: eo._f,
        children: t.map((e) =>
            (0, l.jsx)(eC, { props: e, maxWidth: s, maxHeight: s, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function eC(e) {
    var t, n;
    let {
            props: s,
            maxWidth: i = 550,
            maxHeight: r = 350,
            useFullWidth: o = !0,
            isSingleItem: u = !1,
            displayGridItem: c,
        } = e,
        d = s.item.type,
        m = {
            ...s,
            ...("IMAGE" === d &&
                ((t = s.className), { className: a()(t, eo.s_), imgContainerClassName: eo.nh, imgClassName: eo.g2 })),
            ...(("VIDEO" === d || "CLIP" === d) && ((n = s.className), { className: a()(n, eo.g2) })),
            displayGridItem: c,
            mediaLayoutType: er.d.MOSAIC,
            maxWidth: i,
            maxHeight: r,
            useFullWidth: o,
            isSingleMosaicItem: u,
        };
    return (0, l.jsx)(es.G.Provider, { value: s.gifFavoriteButton, children: (0, l.jsx)(ea.Ay, { ...m }) });
}
let ep = function (e) {
    var t;
    let { items: n, isInAppComponentsV2: i = !1 } = e,
        { visualMediaItems: r, nonVisualMediaItems: u } =
            ((t = n),
            s.useMemo(() => {
                let [e, n] = o().partition(t, (e) => (0, ei.Xg)(e.item.type));
                return { visualMediaItems: e, nonVisualMediaItems: n };
            }, [t])),
        c = n[0]?.message;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            r.length > 0 &&
                (0, l.jsx)("div", {
                    className: a()(eo.XU, { [eo.dM]: i, [eo.eO]: 1 === r.length && "CLIP" === r[0].item.type }),
                    children: (0, l.jsx)(eu, { visualMediaItems: r, maxWidth: i ? 600 : 550 }),
                }),
            u.length > 0 &&
                (0, l.jsx)("div", {
                    className: eo.s,
                    children: u.map((e) =>
                        (0, l.jsx)(
                            "div",
                            { className: eo.Br, children: (0, l.jsx)(eC, { props: e }) },
                            e.item.uniqueId,
                        ),
                    ),
                }),
            !i && null != c && Z(c) ? (0, l.jsx)(el, { message: c }) : null,
        ],
    });
};
