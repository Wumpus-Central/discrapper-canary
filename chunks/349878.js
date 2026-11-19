n.d(t, { A: () => eh });
var l = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(435558),
    o = n.n(r),
    u = n(554146),
    d = n(263775),
    c = n(409617),
    m = n(403581),
    h = n(834730),
    x = n(28863),
    p = n(87719),
    g = n(49999),
    C = n(683825),
    f = n(792996),
    j = n(821939);
function I(e) {
    let { markAsDismissed: t } = e;
    function n() {
        (t(g.i.TAKE_ACTION), (0, p.x)());
    }
    return (0, l.jsxs)("div", {
        className: j.U,
        children: [
            (0, l.jsx)(m.NitroWheelIcon, { size: "xs", color: "currentColor" }),
            (0, l.jsx)(h.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: f.intl.format(C.default["0AhA1F"], {
                    nitroHook: (e, t) => (0, l.jsx)(x.Anchor, { onClick: n, children: e }, t),
                }),
            }),
        ],
    });
}
var A = n(38021),
    v = n(650684),
    N = n(265872),
    y = n(900797),
    S = n(847374),
    E = n(939249),
    _ = n(789645),
    M = n(267102),
    P = n(818349),
    L = n(419490),
    b = n(204915);
function T(e) {
    let { markAsDismissed: t, onMenuOpenChange: i } = e,
        a = s.useRef(null),
        { theme: r } = (0, A.wR)(),
        o = (0, M.Us)(),
        u = s.useCallback(async () => {
            let { default: e } = await Promise.all([n.e(144909), n.e(409495), n.e(188941), n.e(827037)]).then(
                n.bind(n, 707116),
            );
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
                    (0, l.jsx)(v.ClipsAutoIcon, { size: "xs", color: "currentColor" }),
                    (0, l.jsxs)("div", {
                        className: b.Qs,
                        children: [
                            (0, l.jsx)(h.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: f.intl.string(C.default.Lym9gZ),
                            }),
                            (0, l.jsx)(N.Q, {
                                targetElementRef: a,
                                renderPopout: u,
                                position: "top",
                                align: "center",
                                onRequestOpen: () => i(!0),
                                onRequestClose: () => {
                                    let { clipsSettings: e } = L.Ay.getState();
                                    ("auto" === (0, P.r)(e.clipsEnabled, L.Ay.getEnableAutoclipping()) &&
                                        t(g.i.TAKE_ACTION),
                                        i(!1));
                                },
                                children: (e, t) => {
                                    let { isShown: n } = t,
                                        s = n ? y.ChevronSmallUpIcon : S.ChevronSmallDownIcon;
                                    return (0, l.jsxs)(E.D, {
                                        ...e,
                                        className: b.lO,
                                        "aria-haspopup": "menu",
                                        children: [
                                            (0, l.jsx)(h.E, {
                                                variant: "body-sm/medium",
                                                color: "none",
                                                className: b.hk,
                                                children: f.intl.string(C.default.iHA2eT),
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
                onClick: () => t(g.i.USER_DISMISS),
                children: (0, l.jsx)(_.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var O = n(176781);
function w(e) {
    let { markAsDismissed: t, onMenuOpenChange: i } = e,
        a = s.useRef(null),
        { theme: r } = (0, A.wR)(),
        o = (0, M.Us)(),
        u = s.useCallback(async () => {
            let { default: e } = await Promise.all([n.e(144909), n.e(409495), n.e(188941), n.e(827037)]).then(
                n.bind(n, 707116),
            );
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
                    (0, l.jsx)(O.ClipsIcon, { size: "xs", color: "currentColor" }),
                    (0, l.jsxs)("div", {
                        className: b.Qs,
                        children: [
                            (0, l.jsx)(h.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: f.intl.string(C.default["G+P4p/"]),
                            }),
                            (0, l.jsx)(N.Q, {
                                targetElementRef: a,
                                renderPopout: u,
                                position: "top",
                                align: "center",
                                onRequestOpen: () => i(!0),
                                onRequestClose: () => {
                                    (L.Ay.getState().clipsSettings.clipsEnabled && t(g.i.TAKE_ACTION), i(!1));
                                },
                                children: (e, t) => {
                                    let { isShown: n } = t,
                                        s = n ? y.ChevronSmallUpIcon : S.ChevronSmallDownIcon;
                                    return (0, l.jsxs)(E.D, {
                                        ...e,
                                        className: b.lO,
                                        "aria-haspopup": "menu",
                                        children: [
                                            (0, l.jsx)(h.E, {
                                                variant: "body-sm/medium",
                                                color: "none",
                                                className: b.hk,
                                                children: f.intl.string(C.default.vxs365),
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
                onClick: () => t(g.i.USER_DISMISS),
                children: (0, l.jsx)(_.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var R = n(607399),
    U = n(855986),
    W = n(596344),
    k = n(287809),
    H = n(734066),
    D = n(424739);
n(938796);
var F = n(665260),
    G = n(33358),
    V = n(294520),
    q = n(288254),
    z = n(734057),
    X = n(464132),
    B = n(652215);
function Y(e) {
    return (0, F.Lt)(e.flags ?? 0, B.sbO.IS_CLIP);
}
function K(e) {
    return e.attachments.some(Y);
}
let Q = new WeakMap();
function Z(e, t) {
    let n = Q.get(e);
    if (null != n && n.currentUserId === t) return n.messageId;
    let l = e.findNewest((e) => e.author.id !== t && K(e))?.id ?? null;
    return (Q.set(e, { currentUserId: t, messageId: l }), l);
}
function $(e) {
    let t = (0, G.P)(e),
        n = e.channel_id,
        l = (0, U.bG)([z.A], () => z.A.getChannel(n), [n]);
    return e.attachments.some(
        (e) => Y(e) && null == (0, V.iW)(e, t, (0, F.Lt)(e.flags ?? 0, B.sbO.IS_SPOILER) || (0, q.BV)(l)),
    );
}
let J = [
    { id: "chat_upsell", content: u.M.AUTOCLIPPING_EARLY_ACCESS_FREE_USER_CHAT_UPSELL, claim: "chat_upsell" },
    { id: "received", content: u.M.AUTOCLIPPING_EARLY_ACCESS_RECEIVED_CLIP_NOTICE, claim: "received" },
    {
        id: "manual_sent",
        content: u.M.AUTOCLIPPING_EARLY_ACCESS_SENT_MANUAL_CLIP_NOTICE,
        claim: "manual_sent_instance",
    },
];
function ee(e) {
    let { message: t } = e,
        {
            notice: n,
            markAsDismissed: i,
            onMenuOpenChange: a,
        } = (function (e) {
            var t, n;
            let l,
                i,
                a,
                r,
                o,
                u,
                m,
                h,
                x,
                p,
                g,
                C,
                f,
                j,
                I,
                A,
                v,
                N,
                y,
                S,
                E,
                _,
                P,
                L,
                b,
                T,
                O,
                w,
                F,
                G,
                V = s.useId(),
                [q, z] = s.useState(null),
                Y = {
                    received:
                        ((t = "received" === q),
                        (l = (0, M.Us)()),
                        (i = (0, H.Vl)()),
                        (a = "off" === (0, X.U)().value),
                        (r = $(e)),
                        (o = e.channel_id),
                        (u = e.id),
                        (m = (0, U.bG)([k.default], () => k.default.getCurrentUser()?.id)),
                        (h = i && e.author.id !== m && K(e) && (a || t) && !R.Fr && l === B.BRT.APP),
                        (p = null == (x = (0, c._C)("received")) ? "none" : x === V ? "self" : "other"),
                        (g = (0, U.bG)([W.A], () => h && "none" === p && Z(W.A.getMessages(o), m) === u, [
                            h,
                            p,
                            o,
                            u,
                            m,
                        ])),
                        (C = h && (g || "self" === p) && r),
                        (f = (0, D.H)("useReceivedClipNudge", i)),
                        C && f),
                    manual_sent:
                        ((n = "manual_sent" === q),
                        (j = (0, M.Us)()),
                        (I = "auto" === (0, X.U)().value),
                        (A = (0, c._C)("manual_sent") === e.id),
                        (v = (0, c._C)("manual_sent_instance")),
                        (N = (0, U.bG)([k.default], () => k.default.getCurrentUser()?.id)),
                        (y = A && (null == v || v === V) && e.author.id === N && (!I || n) && !R.Fr && j === B.BRT.APP),
                        (S = (0, D.H)("useManualClipSentNudge")),
                        y && S),
                    chat_upsell:
                        ((E = (0, M.Us)()),
                        (_ = $(e)),
                        (P = (0, c._C)("chat_upsell")),
                        (L = (0, U.bG)([k.default], () => k.default.getCurrentUser()?.id)),
                        (b = (0, H.Vl)()),
                        (T = e.author.id !== L && !b && !R.Fr && E === B.BRT.APP && K(e)),
                        (O = e.channel_id),
                        (w = e.id),
                        (F = (0, U.bG)([W.A], () => T && null == P && Z(W.A.getMessages(O), L) === w, [T, P, O, w, L])),
                        (G = T && (F || P === V) && _),
                        (0, D.H)("useClipsChatUpsell", G)),
                },
                Q = (0, c.wc)(e.id),
                ee = J.filter((e) => {
                    let { id: t } = e;
                    return Y[t] && (null == Q || Q === t);
                }),
                et = (0, c.Jk)(),
                en = ee
                    .map((e) => {
                        let { claim: t } = e;
                        return t;
                    })
                    .join(" ");
            (s.useLayoutEffect(() => {
                let e = en.split(" ");
                for (let { claim: t } of J) e.includes(t) ? (0, c.K)(t, V) : (0, c.Rx)(t, V);
            }, [en, et, V]),
                s.useLayoutEffect(
                    () => () =>
                        J.forEach((e) => {
                            let { claim: t } = e;
                            return (0, c.Rx)(t, V);
                        }),
                    [V],
                ));
            let el = ee.filter((e) => {
                    let { claim: t } = e;
                    return et[t] === V;
                }),
                [es, ei] = (0, d.kn)(
                    el.map((e) => {
                        let { content: t } = e;
                        return t;
                    }),
                ),
                ea =
                    J.find((e) => {
                        let { content: t } = e;
                        return t === es;
                    })?.id ?? null,
                er = e.id;
            return (
                s.useEffect(() => {
                    null != ea && (0, c.Mi)(er, ea);
                }, [er, ea]),
                {
                    notice: ea,
                    markAsDismissed: ei,
                    onMenuOpenChange: function (e) {
                        z(e ? ea : null);
                    },
                }
            );
        })(t);
    switch (n) {
        case "received":
            return (0, l.jsx)(w, { markAsDismissed: i, onMenuOpenChange: a });
        case "manual_sent":
            return (0, l.jsx)(T, { markAsDismissed: i, onMenuOpenChange: a });
        case "chat_upsell":
            return (0, l.jsx)(I, { markAsDismissed: i });
        case null:
            return null;
    }
}
var et = n(643612),
    en = n(448381),
    el = n(96782),
    es = n(838541),
    ei = n(882469);
function ea(e) {
    let { visualMediaItems: t, maxWidth: n } = e,
        s = t.length;
    if (1 === s) return (0, l.jsx)(er, { itemsForLayout: t, isSingleImage: !0, maxWidth: n });
    if (2 === s) return (0, l.jsx)(eo, { itemsForLayout: t, maxWidth: n });
    if (3 === s) return (0, l.jsx)(eu, { itemsForLayout: t, maxWidth: n });
    if (4 === s) return (0, l.jsx)(ed, { itemsForLayout: t, maxWidth: n });
    let i = s % 3;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            1 === i && (0, l.jsx)(er, { itemsForLayout: t.slice(0, i), maxWidth: n }),
            2 === i && (0, l.jsx)(eo, { itemsForLayout: t.slice(0, i), maxWidth: n }),
            0 === i
                ? (0, l.jsx)(ec, { itemsForLayout: t, maxWidth: n })
                : (0, l.jsx)(ec, { itemsForLayout: t.slice(i), maxWidth: n }),
        ],
    });
}
function er(e) {
    let { itemsForLayout: t, maxWidth: n, isSingleImage: s } = e,
        i = t[0];
    return (0, l.jsx)("div", {
        className: a()(ei.EO, { [ei.Gj]: s, [ei.Kv]: !s }),
        children: (0, l.jsx)(em, { props: i, useFullWidth: !s, isSingleItem: !0, maxWidth: n }),
    });
}
function eo(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((n - 4) / 2);
    return (0, l.jsx)("div", {
        className: ei.SQ,
        children: t.map((e) =>
            (0, l.jsx)(
                "div",
                { className: ei.XE, children: (0, l.jsx)(em, { props: e, maxWidth: s, maxHeight: s }) },
                e.item.uniqueId,
            ),
        ),
    });
}
function eu(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((2 * (n - 4)) / 3),
        i = s / 2;
    return (0, l.jsxs)("div", {
        className: a()(ei.SQ, ei.o_),
        children: [
            (0, l.jsx)("div", { className: ei.es, children: (0, l.jsx)(em, { props: t[0], maxWidth: s }) }),
            (0, l.jsx)("div", {
                className: ei.N$,
                children: (0, l.jsx)("div", {
                    className: ei._i,
                    children: t
                        .splice(1)
                        .map((e) =>
                            (0, l.jsx)(
                                "div",
                                {
                                    className: ei.$w,
                                    children: (0, l.jsx)(em, { props: e, maxWidth: i, maxHeight: 173 }),
                                },
                                e.item.uniqueId,
                            ),
                        ),
                }),
            }),
        ],
    });
}
function ed(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((n - 4) / 2);
    return (0, l.jsx)("div", {
        className: ei.av,
        children: t.map((e) =>
            (0, l.jsx)(em, { props: e, maxWidth: s, maxHeight: 173, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function ec(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((n - 8) / 3);
    return (0, l.jsx)("div", {
        className: ei._f,
        children: t.map((e) =>
            (0, l.jsx)(em, { props: e, maxWidth: s, maxHeight: s, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function em(e) {
    var t, n;
    let {
            props: s,
            maxWidth: i = 550,
            maxHeight: r = 350,
            useFullWidth: o = !0,
            isSingleItem: u = !1,
            displayGridItem: d,
        } = e,
        c = s.item.type,
        m = {
            ...s,
            ...("IMAGE" === c &&
                ((t = s.className), { className: a()(t, ei.s_), imgContainerClassName: ei.nh, imgClassName: ei.g2 })),
            ...(("VIDEO" === c || "CLIP" === c) && ((n = s.className), { className: a()(n, ei.g2) })),
            displayGridItem: d,
            mediaLayoutType: es.d.MOSAIC,
            maxWidth: i,
            maxHeight: r,
            useFullWidth: o,
            isSingleMosaicItem: u,
        };
    return (0, l.jsx)(et.G.Provider, { value: s.gifFavoriteButton, children: (0, l.jsx)(el.Ay, { ...m }) });
}
let eh = function (e) {
    var t;
    let { items: n, isInAppComponentsV2: i = !1, hideClipMessageNotice: r = !1 } = e,
        { visualMediaItems: u, nonVisualMediaItems: d } =
            ((t = n),
            s.useMemo(() => {
                let [e, n] = o().partition(t, (e) => (0, en.Xg)(e.item.type));
                return { visualMediaItems: e, nonVisualMediaItems: n };
            }, [t])),
        c = n[0]?.message;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            u.length > 0 &&
                (0, l.jsx)("div", {
                    className: a()(ei.XU, { [ei.dM]: i, [ei.eO]: 1 === u.length && "CLIP" === u[0].item.type }),
                    children: (0, l.jsx)(ea, { visualMediaItems: u, maxWidth: i ? 600 : 550 }),
                }),
            d.length > 0 &&
                (0, l.jsx)("div", {
                    className: ei.s,
                    children: d.map((e) =>
                        (0, l.jsx)(
                            "div",
                            { className: ei.Br, children: (0, l.jsx)(em, { props: e }) },
                            e.item.uniqueId,
                        ),
                    ),
                }),
            !r && null != c && K(c) ? (0, l.jsx)(ee, { message: c }) : null,
        ],
    });
};
