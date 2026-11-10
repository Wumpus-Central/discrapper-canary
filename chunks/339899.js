n.d(t, { A: () => ei });
var s = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(435558),
    o = n.n(r),
    u = n(38021),
    d = n(176781),
    c = n(834730),
    m = n(265872),
    h = n(900797),
    x = n(847374),
    g = n(939249),
    p = n(789645),
    f = n(267102),
    C = n(419490),
    j = n(49999),
    I = n(683825),
    y = n(792996),
    N = n(204915);
function S(e) {
    let { markAsDismissed: t, onMenuOpenChange: i } = e,
        a = l.useRef(null),
        { theme: r } = (0, u.wR)(),
        o = (0, f.Us)(),
        S = l.useCallback(async () => {
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
        className: N.G0,
        children: [
            (0, s.jsxs)("div", {
                className: N.R4,
                children: [
                    (0, s.jsx)(d.ClipsIcon, { size: "xs", color: "currentColor" }),
                    (0, s.jsxs)("div", {
                        className: N.Qs,
                        children: [
                            (0, s.jsx)(c.E, {
                                variant: "body-sm/medium",
                                color: "text-default",
                                children: y.intl.string(I.default["G+P4p/"]),
                            }),
                            (0, s.jsx)(m.Q, {
                                targetElementRef: a,
                                renderPopout: S,
                                position: "top",
                                align: "center",
                                onRequestOpen: () => i(!0),
                                onRequestClose: () => {
                                    (C.Ay.getState().clipsSettings.clipsEnabled && t(j.i.TAKE_ACTION), i(!1));
                                },
                                children: (e, t) => {
                                    let { isShown: n } = t,
                                        l = n ? h.ChevronSmallUpIcon : x.ChevronSmallDownIcon;
                                    return (0, s.jsxs)(g.D, {
                                        ...e,
                                        className: N.lO,
                                        "aria-haspopup": "menu",
                                        children: [
                                            (0, s.jsx)(c.E, {
                                                variant: "body-sm/medium",
                                                color: "none",
                                                className: N.hk,
                                                children: y.intl.string(I.default.vxs365),
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
                className: N.VN,
                "aria-label": y.intl.string(y.t.cpT0Cq),
                onClick: () => t(j.i.USER_DISMISS),
                children: (0, s.jsx)(p.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
n(938796);
var v = n(607399),
    A = n(665260),
    E = n(855986),
    L = n(554146),
    w = n(263775),
    M = n(33358),
    P = n(294520),
    b = n(288254),
    O = n(734057),
    W = n(596344),
    T = n(287809),
    _ = n(898105),
    k = n(464132),
    H = n(652215);
let R = L.M.AUTOCLIPPING_EARLY_ACCESS_RECEIVED_CLIP_NOTICE;
function F(e) {
    return (0, A.Lt)(e.flags ?? 0, H.sbO.IS_CLIP);
}
function D(e) {
    return e.attachments.some(F);
}
let G = new WeakMap(),
    U = null,
    V = new Set();
function q(e) {
    return (
        V.add(e),
        () => {
            V.delete(e);
        }
    );
}
function X(e) {
    ((U = e), V.forEach((e) => e()));
}
function z(e) {
    let { message: t } = e,
        [n, i] = l.useState(!1),
        [a, r] = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = (0, f.Us)(),
                s = "off" === (0, k.U)().value,
                i = (0, M.P)(e),
                a = e?.channel_id,
                r = e?.id,
                o = (0, E.bG)([O.A], () => O.A.getChannel(a), [a]),
                u = (0, E.bG)([T.default], () => T.default.getCurrentUser()?.id),
                d = null != e && e.author.id !== u && D(e) && (s || t) && !v.Fr && n === H.BRT.APP,
                c = l.useId(),
                m = l.useSyncExternalStore(q, () => (null == U ? "none" : U === c ? "self" : "other")),
                h = (0, E.bG)(
                    [W.A],
                    () => {
                        var e;
                        let t;
                        return (
                            d &&
                            "none" === m &&
                            null != a &&
                            ((e = W.A.getMessages(a)),
                            void 0 === (t = G.get(e)) && ((t = e.findNewest(D)?.id ?? null), G.set(e, t)),
                            t === r)
                        );
                    },
                    [d, m, a, r],
                ),
                x =
                    null != e &&
                    d &&
                    (h || "self" === m) &&
                    e.attachments.some(
                        (e) =>
                            F(e) && null == (0, P.iW)(e, i, (0, A.Lt)(e.flags ?? 0, H.sbO.IS_SPOILER) || (0, b.BV)(o)),
                    ),
                { enabled: g } = (0, _.r)("useReceivedClipNudge"),
                p = x && g;
            (l.useLayoutEffect(() => {
                p && null == U ? X(c) : p || U !== c || X(null);
            }, [p, m, c]),
                l.useLayoutEffect(
                    () => () => {
                        U === c && X(null);
                    },
                    [c],
                ));
            let [C, j] = (0, w.kn)(p && "self" === m ? [R] : []);
            return [C === R, j];
        })(t, n);
    return a ? (0, s.jsx)(S, { markAsDismissed: r, onMenuOpenChange: i }) : null;
}
var B = n(643612),
    Y = n(448381),
    Q = n(96782),
    $ = n(838541),
    K = n(882469);
function Z(e) {
    let { visualMediaItems: t, maxWidth: n } = e,
        l = t.length;
    if (1 === l) return (0, s.jsx)(J, { itemsForLayout: t, isSingleImage: !0, maxWidth: n });
    if (2 === l) return (0, s.jsx)(ee, { itemsForLayout: t, maxWidth: n });
    if (3 === l) return (0, s.jsx)(et, { itemsForLayout: t, maxWidth: n });
    if (4 === l) return (0, s.jsx)(en, { itemsForLayout: t, maxWidth: n });
    let i = l % 3;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            1 === i && (0, s.jsx)(J, { itemsForLayout: t.slice(0, i), maxWidth: n }),
            2 === i && (0, s.jsx)(ee, { itemsForLayout: t.slice(0, i), maxWidth: n }),
            0 === i
                ? (0, s.jsx)(es, { itemsForLayout: t, maxWidth: n })
                : (0, s.jsx)(es, { itemsForLayout: t.slice(i), maxWidth: n }),
        ],
    });
}
function J(e) {
    let { itemsForLayout: t, maxWidth: n, isSingleImage: l } = e,
        i = t[0];
    return (0, s.jsx)("div", {
        className: a()(K.EO, { [K.Gj]: l, [K.Kv]: !l }),
        children: (0, s.jsx)(el, { props: i, useFullWidth: !l, isSingleItem: !0, maxWidth: n }),
    });
}
function ee(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        l = Math.round((n - 4) / 2);
    return (0, s.jsx)("div", {
        className: K.SQ,
        children: t.map((e) =>
            (0, s.jsx)(
                "div",
                { className: K.XE, children: (0, s.jsx)(el, { props: e, maxWidth: l, maxHeight: l }) },
                e.item.uniqueId,
            ),
        ),
    });
}
function et(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        l = Math.round((2 * (n - 4)) / 3),
        i = l / 2;
    return (0, s.jsxs)("div", {
        className: a()(K.SQ, K.o_),
        children: [
            (0, s.jsx)("div", { className: K.es, children: (0, s.jsx)(el, { props: t[0], maxWidth: l }) }),
            (0, s.jsx)("div", {
                className: K.N$,
                children: (0, s.jsx)("div", {
                    className: K._i,
                    children: t
                        .splice(1)
                        .map((e) =>
                            (0, s.jsx)(
                                "div",
                                {
                                    className: K.$w,
                                    children: (0, s.jsx)(el, { props: e, maxWidth: i, maxHeight: 173 }),
                                },
                                e.item.uniqueId,
                            ),
                        ),
                }),
            }),
        ],
    });
}
function en(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        l = Math.round((n - 4) / 2);
    return (0, s.jsx)("div", {
        className: K.av,
        children: t.map((e) =>
            (0, s.jsx)(el, { props: e, maxWidth: l, maxHeight: 173, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function es(e) {
    let { itemsForLayout: t, maxWidth: n } = e,
        l = Math.round((n - 8) / 3);
    return (0, s.jsx)("div", {
        className: K._f,
        children: t.map((e) =>
            (0, s.jsx)(el, { props: e, maxWidth: l, maxHeight: l, displayGridItem: !0 }, e.item.uniqueId),
        ),
    });
}
function el(e) {
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
                ((t = l.className), { className: a()(t, K.s_), imgContainerClassName: K.nh, imgClassName: K.g2 })),
            ...(("VIDEO" === c || "CLIP" === c) && ((n = l.className), { className: a()(n, K.g2) })),
            displayGridItem: d,
            mediaLayoutType: $.d.MOSAIC,
            maxWidth: i,
            maxHeight: r,
            useFullWidth: o,
            isSingleMosaicItem: u,
        };
    return (0, s.jsx)(B.G.Provider, { value: l.gifFavoriteButton, children: (0, s.jsx)(Q.Ay, { ...m }) });
}
let ei = function (e) {
    var t;
    let { items: n, isInAppComponentsV2: i = !1 } = e,
        { visualMediaItems: r, nonVisualMediaItems: u } =
            ((t = n),
            l.useMemo(() => {
                let [e, n] = o().partition(t, (e) => (0, Y.Xg)(e.item.type));
                return { visualMediaItems: e, nonVisualMediaItems: n };
            }, [t])),
        d = n[0]?.message;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            r.length > 0 &&
                (0, s.jsx)("div", {
                    className: a()(K.XU, { [K.dM]: i, [K.eO]: 1 === r.length && "CLIP" === r[0].item.type }),
                    children: (0, s.jsx)(Z, { visualMediaItems: r, maxWidth: i ? 600 : 550 }),
                }),
            u.length > 0 &&
                (0, s.jsx)("div", {
                    className: K.s,
                    children: u.map((e) =>
                        (0, s.jsx)("div", { className: K.Br, children: (0, s.jsx)(el, { props: e }) }, e.item.uniqueId),
                    ),
                }),
            !i && null != d && D(d) ? (0, s.jsx)(z, { message: d }) : null,
        ],
    });
};
