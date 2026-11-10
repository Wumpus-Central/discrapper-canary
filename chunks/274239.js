n.d(t, { A: () => ea });
var s = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(435558),
    o = n.n(r),
    u = n(38021),
    d = n(650684),
    c = n(834730),
    m = n(265872),
    h = n(900797),
    x = n(847374),
    g = n(939249),
    p = n(789645),
    C = n(267102),
    f = n(818349),
    j = n(419490),
    I = n(49999),
    y = n(683825),
    N = n(792996),
    v = n(204915);
function A(e) {
    let { markAsDismissed: t, onMenuOpenChange: i } = e,
        a = l.useRef(null),
        { theme: r } = (0, u.wR)(),
        o = (0, C.Us)(),
        A = l.useCallback(async () => {
            let { default: e } = await n.e(827037).then(n.bind(n, 707116));
            return (t) => {
                let { closePopout: n, position: l, updatePosition: i } = t;
                return null != a.current
                    ? (0, s.jsx)(e, {
                          onClose: n,
                          onSelect: n,
                          position: l,
                          onHeightUpdate: i,
                          target: a.current,
                          theme: r,
                          context: o,
                      })
                    : null;
            };
        }, [r, o]);
    return (0, s.jsxs)("div", {
        ref: a,
        className: v.G0,
        children: [
            (0, s.jsxs)("div", {
                className: v.R4,
                children: [
                    (0, s.jsx)(d.ClipsAutoIcon, { size: "xs", color: "currentColor" }),
                    (0, s.jsxs)("div", {
                        className: v.Qs,
                        children: [
                            (0, s.jsx)(c.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: N.intl.string(y.default.Lym9gZ),
                            }),
                            (0, s.jsx)(m.Q, {
                                targetElementRef: a,
                                renderPopout: A,
                                position: "top",
                                align: "center",
                                onRequestOpen: () => i(!0),
                                onRequestClose: () => {
                                    let { clipsSettings: e } = j.Ay.getState();
                                    ("auto" === (0, f.r)(e.clipsEnabled, j.Ay.getEnableAutoclipping()) &&
                                        t(I.i.TAKE_ACTION),
                                        i(!1));
                                },
                                children: (e, t) => {
                                    let { isShown: n } = t,
                                        l = n ? h.ChevronSmallUpIcon : x.ChevronSmallDownIcon;
                                    return (0, s.jsxs)(g.D, {
                                        ...e,
                                        className: v.lO,
                                        "aria-haspopup": "menu",
                                        children: [
                                            (0, s.jsx)(c.E, {
                                                variant: "body-sm/medium",
                                                color: "none",
                                                className: v.hk,
                                                children: N.intl.string(y.default.iHA2eT),
                                            }),
                                            (0, s.jsx)(l, { size: "xs", color: "currentColor" }),
                                        ],
                                    });
                                },
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(g.D, {
                className: v.VN,
                "aria-label": N.intl.string(N.t.cpT0Cq),
                onClick: () => t(I.i.USER_DISMISS),
                children: (0, s.jsx)(p.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var S = n(176781);
function E(e) {
    let { markAsDismissed: t, onMenuOpenChange: i } = e,
        a = l.useRef(null),
        { theme: r } = (0, u.wR)(),
        o = (0, C.Us)(),
        d = l.useCallback(async () => {
            let { default: e } = await n.e(827037).then(n.bind(n, 707116));
            return (t) => {
                let { closePopout: n, position: l, updatePosition: i } = t;
                return null != a.current
                    ? (0, s.jsx)(e, {
                          onClose: n,
                          onSelect: n,
                          position: l,
                          onHeightUpdate: i,
                          target: a.current,
                          theme: r,
                          context: o,
                      })
                    : null;
            };
        }, [r, o]);
    return (0, s.jsxs)("div", {
        ref: a,
        className: v.G0,
        children: [
            (0, s.jsxs)("div", {
                className: v.R4,
                children: [
                    (0, s.jsx)(S.ClipsIcon, { size: "xs", color: "currentColor" }),
                    (0, s.jsxs)("div", {
                        className: v.Qs,
                        children: [
                            (0, s.jsx)(c.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: N.intl.string(y.default["G+P4p/"]),
                            }),
                            (0, s.jsx)(m.Q, {
                                targetElementRef: a,
                                renderPopout: d,
                                position: "top",
                                align: "center",
                                onRequestOpen: () => i(!0),
                                onRequestClose: () => {
                                    (j.Ay.getState().clipsSettings.clipsEnabled && t(I.i.TAKE_ACTION), i(!1));
                                },
                                children: (e, t) => {
                                    let { isShown: n } = t,
                                        l = n ? h.ChevronSmallUpIcon : x.ChevronSmallDownIcon;
                                    return (0, s.jsxs)(g.D, {
                                        ...e,
                                        className: v.lO,
                                        "aria-haspopup": "menu",
                                        children: [
                                            (0, s.jsx)(c.E, {
                                                variant: "body-sm/medium",
                                                color: "none",
                                                className: v.hk,
                                                children: N.intl.string(y.default.vxs365),
                                            }),
                                            (0, s.jsx)(l, { size: "xs", color: "currentColor" }),
                                        ],
                                    });
                                },
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(g.D, {
                className: v.VN,
                "aria-label": N.intl.string(N.t.cpT0Cq),
                onClick: () => t(I.i.USER_DISMISS),
                children: (0, s.jsx)(p.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var _ = n(607399),
    L = n(855986),
    b = n(554146),
    M = n(263775),
    P = n(287809),
    O = n(898105),
    w = n(409617),
    T = n(464132),
    R = n(652215);
let W = b.M.AUTOCLIPPING_EARLY_ACCESS_SENT_MANUAL_CLIP_NOTICE;
n(938796);
var k = n(665260),
    U = n(33358),
    D = n(294520),
    H = n(288254),
    F = n(734057),
    G = n(596344);
let V = b.M.AUTOCLIPPING_EARLY_ACCESS_RECEIVED_CLIP_NOTICE;
function q(e) {
    return (0, k.Lt)(e.flags ?? 0, R.sbO.IS_CLIP);
}
function z(e) {
    return e.attachments.some(q);
}
let X = new WeakMap();
function B(e) {
    let { message: t } = e,
        [n, i] = l.useState(!1),
        [a, r] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = (0, C.Us)(),
                s = "off" === (0, T.U)().value,
                i = (0, U.P)(e),
                a = e?.channel_id,
                r = e?.id,
                o = (0, L.bG)([F.A], () => F.A.getChannel(a), [a]),
                u = (0, L.bG)([P.default], () => P.default.getCurrentUser()?.id),
                d = null != e && e.author.id !== u && z(e) && (s || t) && !_.Fr && n === R.BRT.APP,
                c = l.useId(),
                m = (0, w._C)("received"),
                h = null == m ? "none" : m === c ? "self" : "other",
                x = (0, L.bG)(
                    [G.A],
                    () => {
                        var e;
                        let t;
                        return (
                            d &&
                            "none" === h &&
                            null != a &&
                            ((e = G.A.getMessages(a)),
                            void 0 === (t = X.get(e)) && ((t = e.findNewest(z)?.id ?? null), X.set(e, t)),
                            t === r)
                        );
                    },
                    [d, h, a, r],
                ),
                g =
                    null != e &&
                    d &&
                    (x || "self" === h) &&
                    e.attachments.some(
                        (e) =>
                            q(e) && null == (0, D.iW)(e, i, (0, k.Lt)(e.flags ?? 0, R.sbO.IS_SPOILER) || (0, H.BV)(o)),
                    ),
                { enabled: p } = (0, O.r)("useReceivedClipNudge"),
                f = g && p;
            (l.useLayoutEffect(() => {
                f ? (0, w.K)("received", c) : (0, w.Rx)("received", c);
            }, [f, h, c]),
                l.useLayoutEffect(() => () => (0, w.Rx)("received", c), [c]));
            let [j, I] = (0, M.kn)(f && "self" === h ? [V] : []);
            return [j === V, I];
        })(t, n),
        [o, u] = l.useState(!1),
        [d, c] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                { enabled: n } = (0, O.r)("useManualClipSentNudge"),
                s = (0, C.Us)(),
                i = "auto" === (0, T.U)().value,
                a = (0, w._C)("manual_sent") === e.id,
                r = (0, L.bG)([P.default], () => P.default.getCurrentUser()?.id),
                o = n && a && e.author.id === r && (!i || t) && !_.Fr && s === R.BRT.APP,
                u = l.useId(),
                d = (0, w._C)("manual_sent_instance");
            (l.useLayoutEffect(() => {
                o ? (0, w.K)("manual_sent_instance", u) : (0, w.Rx)("manual_sent_instance", u);
            }, [o, d, u]),
                l.useLayoutEffect(() => () => (0, w.Rx)("manual_sent_instance", u), [u]));
            let [c, m] = (0, M.kn)(o && d === u ? [W] : []);
            return [c === W, m];
        })(t, o);
    return a
        ? (0, s.jsx)(E, { markAsDismissed: r, onMenuOpenChange: i })
        : d
          ? (0, s.jsx)(A, { markAsDismissed: c, onMenuOpenChange: u })
          : null;
}
var K = n(643612),
    Q = n(448381),
    Y = n(96782),
    Z = n(838541),
    $ = n(882469);
function J(e) {
    let { visualMediaItems: t, maxWidth: n } = e,
        l = t.length;
    if (1 === l) return (0, s.jsx)(ee, { itemsForLayout: t, isSingleImage: !0, maxWidth: n });
    if (2 === l) return (0, s.jsx)(et, { itemsForLayout: t, maxWidth: n });
    if (3 === l) return (0, s.jsx)(en, { itemsForLayout: t, maxWidth: n });
    if (4 === l) return (0, s.jsx)(es, { itemsForLayout: t, maxWidth: n });
    let i = l % 3;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            1 === i && (0, s.jsx)(ee, { itemsForLayout: t.slice(0, i), maxWidth: n }),
            2 === i && (0, s.jsx)(et, { itemsForLayout: t.slice(0, i), maxWidth: n }),
            0 === i
                ? (0, s.jsx)(el, { itemsForLayout: t, maxWidth: n })
                : (0, s.jsx)(el, { itemsForLayout: t.slice(i), maxWidth: n }),
        ],
    });
}
function ee(e) {
    let { itemsForLayout: t, maxWidth: n, isSingleImage: l } = e,
        i = t[0];
    return (0, s.jsx)("div", {
        className: a()($.EO, { [$.Gj]: l, [$.Kv]: !l }),
        children: (0, s.jsx)(ei, { props: i, useFullWidth: !l, isSingleItem: !0, maxWidth: n }),
    });
}
function et(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        l = Math.round((n - 4) / 2);
    return (0, s.jsx)("div", {
        className: $.SQ,
        children: t.map((e) =>
            (0, s.jsx)(
                "div",
                { className: $.XE, children: (0, s.jsx)(ei, { props: e, maxWidth: l, maxHeight: l }) },
                e.item.uniqueId,
            ),
        ),
    });
}
function en(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        l = Math.round((2 * (n - 4)) / 3),
        i = l / 2;
    return (0, s.jsxs)("div", {
        className: a()($.SQ, $.o_),
        children: [
            (0, s.jsx)("div", { className: $.es, children: (0, s.jsx)(ei, { props: t[0], maxWidth: l }) }),
            (0, s.jsx)("div", {
                className: $.N$,
                children: (0, s.jsx)("div", {
                    className: $._i,
                    children: t
                        .splice(1)
                        .map((e) =>
                            (0, s.jsx)(
                                "div",
                                {
                                    className: $.$w,
                                    children: (0, s.jsx)(ei, { props: e, maxWidth: i, maxHeight: 173 }),
                                },
                                e.item.uniqueId,
                            ),
                        ),
                }),
            }),
        ],
    });
}
function es(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        l = Math.round((n - 4) / 2);
    return (0, s.jsx)("div", {
        className: $.av,
        children: t.map((e) =>
            (0, s.jsx)(ei, { props: e, maxWidth: l, maxHeight: 173, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function el(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        l = Math.round((n - 8) / 3);
    return (0, s.jsx)("div", {
        className: $._f,
        children: t.map((e) =>
            (0, s.jsx)(ei, { props: e, maxWidth: l, maxHeight: l, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function ei(e) {
    var t, n;
    let {
            props: l,
            maxWidth: i = 550,
            maxHeight: r = 350,
            useFullWidth: o = !0,
            isSingleItem: u = !1,
            displayGridItem: d,
        } = e,
        c = l.item.type,
        m = {
            ...l,
            ...("IMAGE" === c &&
                ((t = l.className), { className: a()(t, $.s_), imgContainerClassName: $.nh, imgClassName: $.g2 })),
            ...(("VIDEO" === c || "CLIP" === c) && ((n = l.className), { className: a()(n, $.g2) })),
            displayGridItem: d,
            mediaLayoutType: Z.d.MOSAIC,
            maxWidth: i,
            maxHeight: r,
            useFullWidth: o,
            isSingleMosaicItem: u,
        };
    return (0, s.jsx)(K.G.Provider, { value: l.gifFavoriteButton, children: (0, s.jsx)(Y.Ay, { ...m }) });
}
let ea = function (e) {
    var t;
    let { items: n, isInAppComponentsV2: i = !1 } = e,
        { visualMediaItems: r, nonVisualMediaItems: u } =
            ((t = n),
            l.useMemo(() => {
                let [e, n] = o().partition(t, (e) => (0, Q.Xg)(e.item.type));
                return { visualMediaItems: e, nonVisualMediaItems: n };
            }, [t])),
        d = n[0]?.message;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            r.length > 0 &&
                (0, s.jsx)("div", {
                    className: a()($.XU, { [$.dM]: i, [$.eO]: 1 === r.length && "CLIP" === r[0].item.type }),
                    children: (0, s.jsx)(J, { visualMediaItems: r, maxWidth: i ? 600 : 550 }),
                }),
            u.length > 0 &&
                (0, s.jsx)("div", {
                    className: $.s,
                    children: u.map((e) =>
                        (0, s.jsx)("div", { className: $.Br, children: (0, s.jsx)(ei, { props: e }) }, e.item.uniqueId),
                    ),
                }),
            !i && null != d && z(d) ? (0, s.jsx)(B, { message: d }) : null,
        ],
    });
};
