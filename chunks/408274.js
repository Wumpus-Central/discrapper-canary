n.d(t, { A: () => ej });
var l = n(477900),
    s = n(582128),
    i = n(503698),
    r = n.n(i),
    a = n(435558),
    o = n.n(a),
    u = n(554146),
    c = n(263775),
    d = n(409617),
    m = n(646514),
    h = n(315629),
    x = n(403581),
    C = n(834730),
    p = n(28863),
    g = n(87719),
    f = n(49999),
    j = n(683825),
    I = n(792996),
    A = n(821939);
let N = {
    type: "custom",
    start: m.A.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START,
    end: m.A.colors.EXPRESSIVE_GRADIENT_BLUE_END,
};
function S(e) {
    let { markAsDismissed: t } = e;
    function n() {
        (t(f.i.TAKE_ACTION), (0, g.x)());
    }
    return (0, l.jsxs)(h.h, {
        color: N,
        className: A.U,
        children: [
            (0, l.jsx)(x.NitroWheelIcon, { size: "xs", color: "currentColor" }),
            (0, l.jsx)(C.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: I.intl.format(j.default["0AhA1F"], {
                    nitroHook: (e, t) => (0, l.jsx)(p.Anchor, { onClick: n, children: e }, t),
                }),
            }),
        ],
    });
}
var _ = n(38021),
    E = n(831544),
    v = n(265872),
    y = n(900797),
    P = n(847374),
    R = n(939249),
    T = n(789645),
    b = n(267102),
    M = n(253932),
    L = n(204915);
function O(e) {
    let { markAsDismissed: t, onMenuOpenChange: i } = e,
        r = s.useRef(null),
        { theme: a } = (0, _.wR)(),
        o = (0, b.Us)(),
        u = s.useCallback(async () => {
            let { default: e } = await Promise.all([n.e(409495), n.e(827037)]).then(n.bind(n, 707116));
            return (t) => {
                let { closePopout: n, position: s, updatePosition: i } = t;
                return null != r.current
                    ? (0, l.jsx)(e, {
                          onClose: n,
                          onSelect: n,
                          position: s,
                          onHeightUpdate: i,
                          target: r.current,
                          theme: a,
                          context: o,
                      })
                    : null;
            };
        }, [a, o]);
    return (0, l.jsxs)("div", {
        ref: r,
        className: L.G0,
        children: [
            (0, l.jsxs)("div", {
                className: L.R4,
                children: [
                    (0, l.jsx)(E.MicrophoneIcon, { size: "xs", color: "currentColor" }),
                    (0, l.jsxs)("div", {
                        className: L.Qs,
                        children: [
                            (0, l.jsx)(C.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: I.intl.string(j.default.y080Rd),
                            }),
                            (0, l.jsx)(v.Q, {
                                targetElementRef: r,
                                renderPopout: u,
                                position: "top",
                                align: "center",
                                onRequestOpen: () => i(!0),
                                onRequestClose: () => {
                                    (M.Q$.getSetting() && t(f.i.TAKE_ACTION), i(!1));
                                },
                                children: (e, t) => {
                                    let { isShown: n } = t,
                                        s = n ? y.ChevronSmallUpIcon : P.ChevronSmallDownIcon;
                                    return (0, l.jsxs)(R.D, {
                                        ...e,
                                        className: L.lO,
                                        "aria-haspopup": "menu",
                                        children: [
                                            (0, l.jsx)(C.E, {
                                                variant: "body-sm/medium",
                                                color: "none",
                                                className: L.hk,
                                                children: I.intl.string(j.default.B2F9tM),
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
            (0, l.jsx)(R.D, {
                className: L.VN,
                "aria-label": I.intl.string(I.t.cpT0Cq),
                onClick: () => t(f.i.USER_DISMISS),
                children: (0, l.jsx)(T.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var w = n(650684),
    U = n(818349),
    k = n(419490);
function D(e) {
    let { markAsDismissed: t, onMenuOpenChange: i } = e,
        r = s.useRef(null),
        { theme: a } = (0, _.wR)(),
        o = (0, b.Us)(),
        u = s.useCallback(async () => {
            let { default: e } = await Promise.all([n.e(409495), n.e(827037)]).then(n.bind(n, 707116));
            return (t) => {
                let { closePopout: n, position: s, updatePosition: i } = t;
                return null != r.current
                    ? (0, l.jsx)(e, {
                          onClose: n,
                          onSelect: n,
                          position: s,
                          onHeightUpdate: i,
                          target: r.current,
                          theme: a,
                          context: o,
                      })
                    : null;
            };
        }, [a, o]);
    return (0, l.jsxs)("div", {
        ref: r,
        className: L.G0,
        children: [
            (0, l.jsxs)("div", {
                className: L.R4,
                children: [
                    (0, l.jsx)(w.ClipsAutoIcon, { size: "xs", color: "currentColor" }),
                    (0, l.jsxs)("div", {
                        className: L.Qs,
                        children: [
                            (0, l.jsx)(C.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: I.intl.string(j.default.Lym9gZ),
                            }),
                            (0, l.jsx)(v.Q, {
                                targetElementRef: r,
                                renderPopout: u,
                                position: "top",
                                align: "center",
                                onRequestOpen: () => i(!0),
                                onRequestClose: () => {
                                    let { clipsSettings: e } = k.Ay.getState();
                                    ("auto" === (0, U.r)(e.clipsEnabled, k.Ay.getEnableAutoclipping()) &&
                                        t(f.i.TAKE_ACTION),
                                        i(!1));
                                },
                                children: (e, t) => {
                                    let { isShown: n } = t,
                                        s = n ? y.ChevronSmallUpIcon : P.ChevronSmallDownIcon;
                                    return (0, l.jsxs)(R.D, {
                                        ...e,
                                        className: L.lO,
                                        "aria-haspopup": "menu",
                                        children: [
                                            (0, l.jsx)(C.E, {
                                                variant: "body-sm/medium",
                                                color: "none",
                                                className: L.hk,
                                                children: I.intl.string(j.default.iHA2eT),
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
            (0, l.jsx)(R.D, {
                className: L.VN,
                "aria-label": I.intl.string(I.t.cpT0Cq),
                onClick: () => t(f.i.USER_DISMISS),
                children: (0, l.jsx)(T.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var W = n(176781);
function G(e) {
    let { markAsDismissed: t, onMenuOpenChange: i } = e,
        r = s.useRef(null),
        { theme: a } = (0, _.wR)(),
        o = (0, b.Us)(),
        u = s.useCallback(async () => {
            let { default: e } = await Promise.all([n.e(409495), n.e(827037)]).then(n.bind(n, 707116));
            return (t) => {
                let { closePopout: n, position: s, updatePosition: i } = t;
                return null != r.current
                    ? (0, l.jsx)(e, {
                          onClose: n,
                          onSelect: n,
                          position: s,
                          onHeightUpdate: i,
                          target: r.current,
                          theme: a,
                          context: o,
                      })
                    : null;
            };
        }, [a, o]);
    return (0, l.jsxs)("div", {
        ref: r,
        className: L.G0,
        children: [
            (0, l.jsxs)("div", {
                className: L.R4,
                children: [
                    (0, l.jsx)(W.ClipsIcon, { size: "xs", color: "currentColor" }),
                    (0, l.jsxs)("div", {
                        className: L.Qs,
                        children: [
                            (0, l.jsx)(C.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: I.intl.string(j.default["G+P4p/"]),
                            }),
                            (0, l.jsx)(v.Q, {
                                targetElementRef: r,
                                renderPopout: u,
                                position: "top",
                                align: "center",
                                onRequestOpen: () => i(!0),
                                onRequestClose: () => {
                                    (k.Ay.getState().clipsSettings.clipsEnabled && t(f.i.TAKE_ACTION), i(!1));
                                },
                                children: (e, t) => {
                                    let { isShown: n } = t,
                                        s = n ? y.ChevronSmallUpIcon : P.ChevronSmallDownIcon;
                                    return (0, l.jsxs)(R.D, {
                                        ...e,
                                        className: L.lO,
                                        "aria-haspopup": "menu",
                                        children: [
                                            (0, l.jsx)(C.E, {
                                                variant: "body-sm/medium",
                                                color: "none",
                                                className: L.hk,
                                                children: I.intl.string(j.default.vxs365),
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
            (0, l.jsx)(R.D, {
                className: L.VN,
                "aria-label": I.intl.string(I.t.cpT0Cq),
                onClick: () => t(f.i.USER_DISMISS),
                children: (0, l.jsx)(T.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var F = n(607399),
    H = n(855986),
    V = n(596344),
    q = n(287809),
    z = n(448645),
    X = n(898105);
n(938796);
var B = n(665260),
    Q = n(33358),
    K = n(294520),
    Y = n(288254),
    $ = n(734057),
    Z = n(464132),
    J = n(652215);
function ee(e) {
    return (0, B.Lt)(e.flags ?? 0, J.sbO.IS_CLIP);
}
function et(e) {
    return e.attachments.some(ee);
}
let en = new WeakMap();
function el(e, t) {
    let n = en.get(e);
    if (null != n && n.currentUserId === t) return n.messageId;
    let l = e.findNewest((e) => e.author.id !== t && et(e))?.id ?? null;
    return (en.set(e, { currentUserId: t, messageId: l }), l);
}
function es(e) {
    let t = (0, Q.P)(e),
        n = e.channel_id,
        l = (0, H.bG)([$.A], () => $.A.getChannel(n), [n]);
    return e.attachments.some(
        (e) => ee(e) && null == (0, K.iW)(e, t, (0, B.Lt)(e.flags ?? 0, J.sbO.IS_SPOILER) || (0, Y.BV)(l)),
    );
}
let ei = [
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
function er(e) {
    let { message: t } = e,
        {
            notice: n,
            markAsDismissed: i,
            onMenuOpenChange: r,
        } = (function (e) {
            let t = s.useId(),
                [n, l] = s.useState(null),
                i = {
                    received: (function (e, t, n) {
                        let l = (0, b.Us)(),
                            s = "off" === (0, Z.U)().value,
                            i = es(e),
                            r = e.channel_id,
                            a = e.id,
                            o = (0, H.bG)([q.default], () => q.default.getCurrentUser()?.id),
                            u = e.author.id !== o && et(e) && (s || n) && !F.Fr && l === J.BRT.APP,
                            c = (0, d._C)("received"),
                            m = null == c ? "none" : c === t ? "self" : "other",
                            h = (0, H.bG)([V.A], () => u && "none" === m && el(V.A.getMessages(r), o) === a, [
                                u,
                                m,
                                r,
                                a,
                                o,
                            ]),
                            x = u && (h || "self" === m) && i,
                            { enabled: C } = (0, X.r)("useReceivedClipNudge");
                        return x && C;
                    })(e, t, "received" === n),
                    manual_sent: (function (e, t, n) {
                        let l = (0, b.Us)(),
                            s = "auto" === (0, Z.U)().value,
                            i = (0, d._C)("manual_sent") === e.id,
                            r = (0, d._C)("manual_sent_instance"),
                            a = (0, H.bG)([q.default], () => q.default.getCurrentUser()?.id),
                            o =
                                i &&
                                (null == r || r === t) &&
                                e.author.id === a &&
                                (!s || n) &&
                                !F.Fr &&
                                l === J.BRT.APP,
                            { enabled: u } = (0, X.r)("useManualClipSentNudge");
                        return o && u;
                    })(e, t, "manual_sent" === n),
                    chat_upsell: (function (e, t) {
                        let n = (0, b.Us)(),
                            l = es(e),
                            s = (0, d._C)("chat_upsell"),
                            i = (0, H.bG)([q.default], () => q.default.getCurrentUser()?.id),
                            r = (0, z.nK)(),
                            a = e.author.id !== i && !r && !F.Fr && n === J.BRT.APP && et(e),
                            o = e.channel_id,
                            u = e.id,
                            c = (0, H.bG)([V.A], () => a && null == s && el(V.A.getMessages(o), i) === u, [
                                a,
                                s,
                                o,
                                u,
                                i,
                            ]),
                            m = a && (c || s === t) && l,
                            { enabled: h } = (0, X.r)("useClipsChatUpsell");
                        return m && h;
                    })(e, t),
                    voice_inclusion: (function (e, t, n) {
                        let l = (0, b.Us)(),
                            s = M.Q$.useSetting(),
                            i = (0, d._C)("voice_inclusion"),
                            r = (0, H.bG)([q.default], () => q.default.getCurrentUser()?.id),
                            a = e.author.id !== r && (!s || n) && !F.Fr && l === J.BRT.APP && et(e),
                            o = e.channel_id,
                            u = e.id,
                            c = (0, H.bG)([V.A], () => a && null == i && el(V.A.getMessages(o), r) === u, [
                                a,
                                i,
                                o,
                                u,
                                r,
                            ]),
                            m = a && (c || i === t),
                            { enabled: h } = (0, X.r)("useClipsVoiceInclusionNudge");
                        return m && h;
                    })(e, t, "voice_inclusion" === n),
                },
                r = (0, d.wc)(e.id),
                a = ei.filter((e) => {
                    let { id: t } = e;
                    return i[t] && (null == r || r === t);
                }),
                o = (0, d.Jk)(),
                u = a
                    .map((e) => {
                        let { claim: t } = e;
                        return t;
                    })
                    .join(" ");
            (s.useLayoutEffect(() => {
                let e = u.split(" ");
                for (let { claim: n } of ei) e.includes(n) ? (0, d.K)(n, t) : (0, d.Rx)(n, t);
            }, [u, o, t]),
                s.useLayoutEffect(
                    () => () =>
                        ei.forEach((e) => {
                            let { claim: n } = e;
                            return (0, d.Rx)(n, t);
                        }),
                    [t],
                ));
            let m = a.filter((e) => {
                    let { claim: n } = e;
                    return o[n] === t;
                }),
                [h, x] = (0, c.kn)(
                    m.map((e) => {
                        let { content: t } = e;
                        return t;
                    }),
                ),
                C =
                    ei.find((e) => {
                        let { content: t } = e;
                        return t === h;
                    })?.id ?? null,
                p = e.id;
            return (
                s.useEffect(() => {
                    null != C && (0, d.Mi)(p, C);
                }, [p, C]),
                {
                    notice: C,
                    markAsDismissed: x,
                    onMenuOpenChange: function (e) {
                        l(e ? C : null);
                    },
                }
            );
        })(t);
    switch (n) {
        case "received":
            return (0, l.jsx)(G, { markAsDismissed: i, onMenuOpenChange: r });
        case "manual_sent":
            return (0, l.jsx)(D, { markAsDismissed: i, onMenuOpenChange: r });
        case "chat_upsell":
            return (0, l.jsx)(S, { markAsDismissed: i });
        case "voice_inclusion":
            return (0, l.jsx)(O, { markAsDismissed: i, onMenuOpenChange: r });
        case null:
            return null;
    }
}
var ea = n(643612),
    eo = n(448381),
    eu = n(96782),
    ec = n(838541),
    ed = n(882469);
function em(e) {
    let { visualMediaItems: t, maxWidth: n } = e,
        s = t.length;
    if (1 === s) return (0, l.jsx)(eh, { itemsForLayout: t, isSingleImage: !0, maxWidth: n });
    if (2 === s) return (0, l.jsx)(ex, { itemsForLayout: t, maxWidth: n });
    if (3 === s) return (0, l.jsx)(eC, { itemsForLayout: t, maxWidth: n });
    if (4 === s) return (0, l.jsx)(ep, { itemsForLayout: t, maxWidth: n });
    let i = s % 3;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            1 === i && (0, l.jsx)(eh, { itemsForLayout: t.slice(0, i), maxWidth: n }),
            2 === i && (0, l.jsx)(ex, { itemsForLayout: t.slice(0, i), maxWidth: n }),
            0 === i
                ? (0, l.jsx)(eg, { itemsForLayout: t, maxWidth: n })
                : (0, l.jsx)(eg, { itemsForLayout: t.slice(i), maxWidth: n }),
        ],
    });
}
function eh(e) {
    let { itemsForLayout: t, maxWidth: n, isSingleImage: s } = e,
        i = t[0];
    return (0, l.jsx)("div", {
        className: r()(ed.EO, { [ed.Gj]: s, [ed.Kv]: !s }),
        children: (0, l.jsx)(ef, { props: i, useFullWidth: !s, isSingleItem: !0, maxWidth: n }),
    });
}
function ex(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((n - 4) / 2);
    return (0, l.jsx)("div", {
        className: ed.SQ,
        children: t.map((e) =>
            (0, l.jsx)(
                "div",
                { className: ed.XE, children: (0, l.jsx)(ef, { props: e, maxWidth: s, maxHeight: s }) },
                e.item.uniqueId,
            ),
        ),
    });
}
function eC(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((2 * (n - 4)) / 3),
        i = s / 2;
    return (0, l.jsxs)("div", {
        className: r()(ed.SQ, ed.o_),
        children: [
            (0, l.jsx)("div", { className: ed.es, children: (0, l.jsx)(ef, { props: t[0], maxWidth: s }) }),
            (0, l.jsx)("div", {
                className: ed.N$,
                children: (0, l.jsx)("div", {
                    className: ed._i,
                    children: t
                        .splice(1)
                        .map((e) =>
                            (0, l.jsx)(
                                "div",
                                {
                                    className: ed.$w,
                                    children: (0, l.jsx)(ef, { props: e, maxWidth: i, maxHeight: 173 }),
                                },
                                e.item.uniqueId,
                            ),
                        ),
                }),
            }),
        ],
    });
}
function ep(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((n - 4) / 2);
    return (0, l.jsx)("div", {
        className: ed.av,
        children: t.map((e) =>
            (0, l.jsx)(ef, { props: e, maxWidth: s, maxHeight: 173, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function eg(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((n - 8) / 3);
    return (0, l.jsx)("div", {
        className: ed._f,
        children: t.map((e) =>
            (0, l.jsx)(ef, { props: e, maxWidth: s, maxHeight: s, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function ef(e) {
    var t, n;
    let {
            props: s,
            maxWidth: i = 550,
            maxHeight: a = 350,
            useFullWidth: o = !0,
            isSingleItem: u = !1,
            displayGridItem: c,
        } = e,
        d = s.item.type,
        m = {
            ...s,
            ...("IMAGE" === d &&
                ((t = s.className), { className: r()(t, ed.s_), imgContainerClassName: ed.nh, imgClassName: ed.g2 })),
            ...(("VIDEO" === d || "CLIP" === d) && ((n = s.className), { className: r()(n, ed.g2) })),
            displayGridItem: c,
            mediaLayoutType: ec.d.MOSAIC,
            maxWidth: i,
            maxHeight: a,
            useFullWidth: o,
            isSingleMosaicItem: u,
        };
    return (0, l.jsx)(ea.G.Provider, { value: s.gifFavoriteButton, children: (0, l.jsx)(eu.Ay, { ...m }) });
}
let ej = function (e) {
    var t;
    let { items: n, isInAppComponentsV2: i = !1 } = e,
        { visualMediaItems: a, nonVisualMediaItems: u } =
            ((t = n),
            s.useMemo(() => {
                let [e, n] = o().partition(t, (e) => (0, eo.Xg)(e.item.type));
                return { visualMediaItems: e, nonVisualMediaItems: n };
            }, [t])),
        c = n[0]?.message;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            a.length > 0 &&
                (0, l.jsx)("div", {
                    className: r()(ed.XU, { [ed.dM]: i, [ed.eO]: 1 === a.length && "CLIP" === a[0].item.type }),
                    children: (0, l.jsx)(em, { visualMediaItems: a, maxWidth: i ? 600 : 550 }),
                }),
            u.length > 0 &&
                (0, l.jsx)("div", {
                    className: ed.s,
                    children: u.map((e) =>
                        (0, l.jsx)(
                            "div",
                            { className: ed.Br, children: (0, l.jsx)(ef, { props: e }) },
                            e.item.uniqueId,
                        ),
                    ),
                }),
            !i && null != c && et(c) ? (0, l.jsx)(er, { message: c }) : null,
        ],
    });
};
