n.d(t, { A: () => eg });
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
    p = n(793574),
    C = n(87719),
    g = n(805573),
    f = n(49999),
    I = n(682901),
    j = n(683825),
    _ = n(792996),
    A = n(821939);
function E(e) {
    let { markAsDismissed: t } = e,
        { trackViewed: n, trackInteracted: i } = (0, g.r)(I.e.AUTOCLIPS_EA_CHAT_UPSELL, p.A.CLIPS_EA_CHAT_UPSELL);
    function a() {
        (t(f.i.TAKE_ACTION), i("nitro_home", "nitro_home"), (0, C.x)());
    }
    return (
        s.useEffect(() => n(), [n]),
        (0, l.jsxs)("div", {
            className: A.U,
            children: [
                (0, l.jsx)(m.NitroWheelIcon, { size: "xs", color: "currentColor" }),
                (0, l.jsx)(h.E, {
                    variant: "body-sm/medium",
                    color: "text-default",
                    children: _.intl.format(j.default["0AhA1F"], {
                        nitroHook: (e, t) => (0, l.jsx)(x.Anchor, { onClick: a, children: e }, t),
                    }),
                }),
            ],
        })
    );
}
var N = n(38021),
    S = n(650684),
    y = n(265872),
    v = n(900797),
    P = n(847374),
    L = n(939249),
    M = n(789645),
    T = n(267102),
    O = n(129230),
    b = n(818349),
    U = n(419490),
    w = n(652215),
    R = n(204915);
function H(e) {
    let { markAsDismissed: t, onMenuOpenChange: i } = e,
        a = s.useRef(null),
        { theme: r } = (0, N.wR)(),
        o = (0, T.Us)(),
        u = s.useCallback(async () => {
            let { default: e } = await Promise.all([n.e(277162), n.e(827037)]).then(n.bind(n, 707116));
            return (t) => {
                let { closePopout: n, position: s, updatePosition: i } = t;
                return null != a.current
                    ? (0, l.jsx)(e, {
                          analyticsLocation: p.A.CLIPS_EA_MANUAL_CLIP_SENT_NUDGE,
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
        className: R.G0,
        children: [
            (0, l.jsxs)("div", {
                className: R.R4,
                children: [
                    (0, l.jsx)(S.ClipsAutoIcon, { size: "xs", color: "currentColor" }),
                    (0, l.jsxs)("div", {
                        className: R.Qs,
                        children: [
                            (0, l.jsx)(h.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: _.intl.string(j.default.Lym9gZ),
                            }),
                            (0, l.jsx)(y.Q, {
                                targetElementRef: a,
                                renderPopout: u,
                                position: "top",
                                align: "center",
                                onRequestOpen: () => {
                                    (O.default.track(w.HAw.OPEN_POPOUT, {
                                        type: "Clips Capture Mode Menu",
                                        location: p.A.CLIPS_EA_MANUAL_CLIP_SENT_NUDGE,
                                    }),
                                        i(!0));
                                },
                                onRequestClose: () => {
                                    let { clipsSettings: e } = U.Ay.getState();
                                    ("auto" === (0, b.r)(e.clipsEnabled, U.Ay.getEnableAutoclipping()) &&
                                        t(f.i.TAKE_ACTION),
                                        i(!1));
                                },
                                children: (e, t) => {
                                    let { isShown: n } = t,
                                        s = n ? v.ChevronSmallUpIcon : P.ChevronSmallDownIcon;
                                    return (0, l.jsxs)(L.D, {
                                        ...e,
                                        className: R.lO,
                                        "aria-haspopup": "menu",
                                        children: [
                                            (0, l.jsx)(h.E, {
                                                variant: "body-sm/medium",
                                                color: "none",
                                                className: R.hk,
                                                children: _.intl.string(j.default.iHA2eT),
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
            (0, l.jsx)(L.D, {
                className: R.VN,
                "aria-label": _.intl.string(_.t.cpT0Cq),
                onClick: () => t(f.i.USER_DISMISS),
                children: (0, l.jsx)(M.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var k = n(176781);
function D(e) {
    let { markAsDismissed: t, onMenuOpenChange: i } = e,
        a = s.useRef(null),
        { theme: r } = (0, N.wR)(),
        o = (0, T.Us)(),
        u = s.useCallback(async () => {
            let { default: e } = await Promise.all([n.e(277162), n.e(827037)]).then(n.bind(n, 707116));
            return (t) => {
                let { closePopout: n, position: s, updatePosition: i } = t;
                return null != a.current
                    ? (0, l.jsx)(e, {
                          analyticsLocation: p.A.CLIPS_EA_RECEIVED_CLIP_NUDGE,
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
        className: R.G0,
        children: [
            (0, l.jsxs)("div", {
                className: R.R4,
                children: [
                    (0, l.jsx)(k.ClipsIcon, { size: "xs", color: "currentColor" }),
                    (0, l.jsxs)("div", {
                        className: R.Qs,
                        children: [
                            (0, l.jsx)(h.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: _.intl.string(j.default["G+P4p/"]),
                            }),
                            (0, l.jsx)(y.Q, {
                                targetElementRef: a,
                                renderPopout: u,
                                position: "top",
                                align: "center",
                                onRequestOpen: () => {
                                    (O.default.track(w.HAw.OPEN_POPOUT, {
                                        type: "Clips Capture Mode Menu",
                                        location: p.A.CLIPS_EA_RECEIVED_CLIP_NUDGE,
                                    }),
                                        i(!0));
                                },
                                onRequestClose: () => {
                                    (U.Ay.getState().clipsSettings.clipsEnabled && t(f.i.TAKE_ACTION), i(!1));
                                },
                                children: (e, t) => {
                                    let { isShown: n } = t,
                                        s = n ? v.ChevronSmallUpIcon : P.ChevronSmallDownIcon;
                                    return (0, l.jsxs)(L.D, {
                                        ...e,
                                        className: R.lO,
                                        "aria-haspopup": "menu",
                                        children: [
                                            (0, l.jsx)(h.E, {
                                                variant: "body-sm/medium",
                                                color: "none",
                                                className: R.hk,
                                                children: _.intl.string(j.default.vxs365),
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
            (0, l.jsx)(L.D, {
                className: R.VN,
                "aria-label": _.intl.string(_.t.cpT0Cq),
                onClick: () => t(f.i.USER_DISMISS),
                children: (0, l.jsx)(M.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var W = n(607399),
    G = n(855986),
    F = n(596344),
    V = n(287809),
    q = n(734066),
    z = n(424739);
n(938796);
var X = n(665260),
    B = n(33358),
    Y = n(294520),
    K = n(288254),
    Q = n(734057),
    Z = n(464132);
function $(e) {
    return (0, X.Lt)(e.flags ?? 0, w.sbO.IS_CLIP);
}
function J(e) {
    return e.attachments.some($);
}
let ee = new WeakMap();
function et(e, t) {
    let n = ee.get(e);
    if (null != n && n.currentUserId === t) return n.messageId;
    let l = e.findNewest((e) => e.author.id !== t && J(e))?.id ?? null;
    return (ee.set(e, { currentUserId: t, messageId: l }), l);
}
function en(e) {
    let t = (0, B.P)(e),
        n = e.channel_id,
        l = (0, G.bG)([Q.A], () => Q.A.getChannel(n), [n]);
    return e.attachments.some(
        (e) => $(e) && null == (0, Y.iW)(e, t, (0, X.Lt)(e.flags ?? 0, w.sbO.IS_SPOILER) || (0, K.BV)(l)),
    );
}
let el = [
    { id: "chat_upsell", content: u.M.AUTOCLIPPING_EARLY_ACCESS_FREE_USER_CHAT_UPSELL, claim: "chat_upsell" },
    { id: "received", content: u.M.AUTOCLIPPING_EARLY_ACCESS_RECEIVED_CLIP_NOTICE, claim: "received" },
    {
        id: "manual_sent",
        content: u.M.AUTOCLIPPING_EARLY_ACCESS_SENT_MANUAL_CLIP_NOTICE,
        claim: "manual_sent_instance",
    },
];
function es(e) {
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
                C,
                g,
                f,
                I,
                j,
                _,
                A,
                E,
                N,
                S,
                y,
                v,
                P,
                L,
                M,
                O,
                b,
                U,
                R,
                H,
                k = s.useId(),
                [D, X] = s.useState(null),
                B = {
                    received:
                        ((t = "received" === D),
                        (l = (0, T.Us)()),
                        (i = (0, q.Vl)()),
                        (a = "off" === (0, Z.U)().value),
                        (r = en(e)),
                        (o = e.channel_id),
                        (u = e.id),
                        (m = (0, G.bG)([V.default], () => V.default.getCurrentUser()?.id)),
                        (h = i && e.author.id !== m && J(e) && (a || t) && !W.Fr && l === w.BRT.APP),
                        (p = null == (x = (0, c._C)("received")) ? "none" : x === k ? "self" : "other"),
                        (C = (0, G.bG)([F.A], () => h && "none" === p && et(F.A.getMessages(o), m) === u, [
                            h,
                            p,
                            o,
                            u,
                            m,
                        ])),
                        (g = h && (C || "self" === p) && r),
                        (f = (0, z.H)("autoclips_ea:received_clip_nudge", g)),
                        g && f),
                    manual_sent:
                        ((n = "manual_sent" === D),
                        (I = (0, T.Us)()),
                        (j = "auto" === (0, Z.U)().value),
                        (_ = (0, c._C)("manual_sent") === e.id),
                        (A = (0, c._C)("manual_sent_instance")),
                        (E = (0, G.bG)([V.default], () => V.default.getCurrentUser()?.id)),
                        (N = _ && (null == A || A === k) && e.author.id === E && (!j || n) && !W.Fr && I === w.BRT.APP),
                        (S = (0, z.H)("autoclips_ea:manual_clip_sent_nudge", N)),
                        N && S),
                    chat_upsell:
                        ((y = (0, T.Us)()),
                        (v = en(e)),
                        (P = (0, c._C)("chat_upsell")),
                        (L = (0, G.bG)([V.default], () => V.default.getCurrentUser()?.id)),
                        (M = (0, q.Vl)()),
                        (O = e.author.id !== L && !M && !W.Fr && y === w.BRT.APP && J(e)),
                        (b = e.channel_id),
                        (U = e.id),
                        (R = (0, G.bG)([F.A], () => O && null == P && et(F.A.getMessages(b), L) === U, [
                            O,
                            P,
                            b,
                            U,
                            L,
                        ])),
                        (H = O && (R || P === k) && v),
                        (0, z.H)("autoclips_ea:chat_upsell", H)),
                },
                Y = (0, c.wc)(e.id),
                K = el.filter((e) => {
                    let { id: t } = e;
                    return B[t] && (null == Y || Y === t);
                }),
                Q = (0, c.Jk)(),
                $ = K.map((e) => {
                    let { claim: t } = e;
                    return t;
                }).join(" ");
            (s.useLayoutEffect(() => {
                let e = $.split(" ");
                for (let { claim: t } of el) e.includes(t) ? (0, c.K)(t, k) : (0, c.Rx)(t, k);
            }, [$, Q, k]),
                s.useLayoutEffect(
                    () => () =>
                        el.forEach((e) => {
                            let { claim: t } = e;
                            return (0, c.Rx)(t, k);
                        }),
                    [k],
                ));
            let ee = K.filter((e) => {
                    let { claim: t } = e;
                    return Q[t] === k;
                }),
                [es, ei] = (0, d.kn)(
                    ee.map((e) => {
                        let { content: t } = e;
                        return t;
                    }),
                ),
                ea =
                    el.find((e) => {
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
                        X(e ? ea : null);
                    },
                }
            );
        })(t);
    switch (n) {
        case "received":
            return (0, l.jsx)(D, { markAsDismissed: i, onMenuOpenChange: a });
        case "manual_sent":
            return (0, l.jsx)(H, { markAsDismissed: i, onMenuOpenChange: a });
        case "chat_upsell":
            return (0, l.jsx)(E, { markAsDismissed: i });
        case null:
            return null;
    }
}
var ei = n(643612),
    ea = n(448381),
    er = n(96782),
    eo = n(838541),
    eu = n(882469);
function ed(e) {
    let { visualMediaItems: t, maxWidth: n } = e,
        s = t.length;
    if (1 === s) return (0, l.jsx)(ec, { itemsForLayout: t, isSingleImage: !0, maxWidth: n });
    if (2 === s) return (0, l.jsx)(em, { itemsForLayout: t, maxWidth: n });
    if (3 === s) return (0, l.jsx)(eh, { itemsForLayout: t, maxWidth: n });
    if (4 === s) return (0, l.jsx)(ex, { itemsForLayout: t, maxWidth: n });
    let i = s % 3;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            1 === i && (0, l.jsx)(ec, { itemsForLayout: t.slice(0, i), maxWidth: n }),
            2 === i && (0, l.jsx)(em, { itemsForLayout: t.slice(0, i), maxWidth: n }),
            0 === i
                ? (0, l.jsx)(ep, { itemsForLayout: t, maxWidth: n })
                : (0, l.jsx)(ep, { itemsForLayout: t.slice(i), maxWidth: n }),
        ],
    });
}
function ec(e) {
    let { itemsForLayout: t, maxWidth: n, isSingleImage: s } = e,
        i = t[0];
    return (0, l.jsx)("div", {
        className: a()(eu.EO, { [eu.Gj]: s, [eu.Kv]: !s }),
        children: (0, l.jsx)(eC, { props: i, useFullWidth: !s, isSingleItem: !0, maxWidth: n }),
    });
}
function em(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((n - 4) / 2);
    return (0, l.jsx)("div", {
        className: eu.SQ,
        children: t.map((e) =>
            (0, l.jsx)(
                "div",
                { className: eu.XE, children: (0, l.jsx)(eC, { props: e, maxWidth: s, maxHeight: s }) },
                e.item.uniqueId,
            ),
        ),
    });
}
function eh(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((2 * (n - 4)) / 3),
        i = s / 2;
    return (0, l.jsxs)("div", {
        className: a()(eu.SQ, eu.o_),
        children: [
            (0, l.jsx)("div", { className: eu.es, children: (0, l.jsx)(eC, { props: t[0], maxWidth: s }) }),
            (0, l.jsx)("div", {
                className: eu.N$,
                children: (0, l.jsx)("div", {
                    className: eu._i,
                    children: t
                        .splice(1)
                        .map((e) =>
                            (0, l.jsx)(
                                "div",
                                {
                                    className: eu.$w,
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
function ex(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((n - 4) / 2);
    return (0, l.jsx)("div", {
        className: eu.av,
        children: t.map((e) =>
            (0, l.jsx)(eC, { props: e, maxWidth: s, maxHeight: 173, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function ep(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        s = Math.round((n - 8) / 3);
    return (0, l.jsx)("div", {
        className: eu._f,
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
            displayGridItem: d,
        } = e,
        c = s.item.type,
        m = {
            ...s,
            ...("IMAGE" === c &&
                ((t = s.className), { className: a()(t, eu.s_), imgContainerClassName: eu.nh, imgClassName: eu.g2 })),
            ...(("VIDEO" === c || "CLIP" === c) && ((n = s.className), { className: a()(n, eu.g2) })),
            displayGridItem: d,
            mediaLayoutType: eo.d.MOSAIC,
            maxWidth: i,
            maxHeight: r,
            useFullWidth: o,
            isSingleMosaicItem: u,
        };
    return (0, l.jsx)(ei.G.Provider, { value: s.gifFavoriteButton, children: (0, l.jsx)(er.Ay, { ...m }) });
}
let eg = function (e) {
    var t;
    let { items: n, isInAppComponentsV2: i = !1, hideClipMessageNotice: r = !1 } = e,
        { visualMediaItems: u, nonVisualMediaItems: d } =
            ((t = n),
            s.useMemo(() => {
                let [e, n] = o().partition(t, (e) => (0, ea.Xg)(e.item.type));
                return { visualMediaItems: e, nonVisualMediaItems: n };
            }, [t])),
        c = n[0]?.message;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            u.length > 0 &&
                (0, l.jsx)("div", {
                    className: a()(eu.XU, { [eu.dM]: i, [eu.eO]: 1 === u.length && "CLIP" === u[0].item.type }),
                    children: (0, l.jsx)(ed, { visualMediaItems: u, maxWidth: i ? 600 : 550 }),
                }),
            d.length > 0 &&
                (0, l.jsx)("div", {
                    className: eu.s,
                    children: d.map((e) =>
                        (0, l.jsx)(
                            "div",
                            { className: eu.Br, children: (0, l.jsx)(eC, { props: e }) },
                            e.item.uniqueId,
                        ),
                    ),
                }),
            !r && null != c && J(c) ? (0, l.jsx)(es, { message: c }) : null,
        ],
    });
};
