n.d(t, { default: () => ni });
var i,
    r = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    c = n(562708),
    o = n(334279),
    u = n(702841),
    d = n(231723),
    m = n(224640),
    x = n(793574),
    f = n(688810),
    h = n(139286),
    E = n(903209),
    R = n(652165),
    p = n(287809),
    g = n(174459),
    A = n(662388),
    v = n(440938),
    N = n(298072),
    C = n(993408),
    _ = n(503089),
    I = n(331884),
    j = n(652215),
    O = n(623373),
    T = n(536572),
    k = n(177366),
    L = n(575593);
function b(e, t) {
    return e.type === L.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e;
}
var P = n(212407),
    y = n(935094),
    S = n(503698),
    D = n.n(S),
    B = n(939249),
    M = n(834730),
    U = n(534514),
    H = n(456839),
    w = n(375708),
    F = n(701180);
function G(e) {
    let { name: t, typeLabel: n } = e;
    return (0, r.jsxs)(M.E, {
        variant: "text-sm/medium",
        className: F.mC,
        "aria-live": "polite",
        children: [
            (0, r.jsx)("span", { className: F.kx, children: t }),
            null != n && (0, r.jsx)("span", { className: F.FP, children: n }),
        ],
    });
}
let V = { [L.R.AVATAR_DECORATION]: !0, [L.R.PROFILE_FRAME]: !0 };
function z(e) {
    let { item: t, index: n, isSelected: i, setSelected: l, label: a } = e,
        c = s.useMemo(() => ({ skuId: t.skuId, type: t.type, items: [t] }), [t]),
        o = s.useCallback(() => l(n), [l, n]),
        u = !0 === V[t.type];
    return (0, r.jsx)(B.D, {
        tag: "div",
        role: "radio",
        "aria-checked": i,
        tabIndex: i ? 0 : -1,
        className: D()(F.xn, { [F.Y4]: i, [F.u8]: u }),
        onClick: o,
        "aria-label": a,
        children: (0, r.jsx)("div", { className: F.Yf, children: (0, r.jsx)(H.O, { product: c }) }),
    });
}
var K = n(442759),
    W = n(344346),
    Y = n(139136),
    $ = n(395744),
    X = n(929283),
    q = n(719201);
function Z(e) {
    let { item: t, user: n, bundleFirstAvatarDecoration: i, isBundle: s } = e;
    switch (t.type) {
        case L.R.AVATAR_DECORATION:
            return (0, r.jsx)("div", {
                className: q.h1,
                children: (0, r.jsx)(X.i, { user: n, item: t, isHighlighted: !0 }),
            });
        case L.R.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: s ? q.sm : q.VY,
                children: (0, r.jsx)(Y.A, {
                    skuId: t.skuId,
                    removeSetHeight: !0,
                    isHighlighted: !0,
                    delayProfileEffectIntro: !0,
                }),
            });
        case L.R.PROFILE_FRAME:
            return (0, r.jsx)("div", { className: s ? q.ob : q.fE, children: (0, r.jsx)($.A, { frame: t }) });
        case L.R.NAMEPLATE:
            return (0, r.jsx)("div", {
                className: q.Dz,
                children: (0, r.jsx)(W.A, {
                    className: q.M4,
                    nameplate: t,
                    user: n,
                    nameplatePreviewSize: "large",
                    pendingAvatarDecoration: i,
                    isHighlighted: !0,
                    hideDecorators: !0,
                }),
            });
        default:
            return null;
    }
}
function J(e) {
    let { user: t, selectedProduct: n, previewingProduct: i, selectedBundleSlide: s } = e,
        l = i ?? n,
        { firstAvatarDecoration: a } = (0, K.f5)(l),
        c = l.items[s] ?? l.items[0];
    return null == c
        ? null
        : (0, r.jsx)(Z, { item: c, user: t, bundleFirstAvatarDecoration: a, isBundle: (0, C.aw)(l) });
}
var Q = n(846957);
function ee(e) {
    let { selectedProduct: t, previewingProduct: n } = e;
    return (0, r.jsx)(Q.B, { product: n ?? t });
}
var et = n(975571);
function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t) return w.intl.formatToPlainString(w.t["/0Yndu"], { num: e.bundledProducts?.length });
    let n = e.bundledProducts ?? [],
        i = [],
        r = !1;
    for (let e of n)
        switch (e.type) {
            case L.R.AVATAR_DECORATION:
                i.push(w.intl.formatToPlainString(w.t.Ntv9Jt, { itemName: e.name }));
                break;
            case L.R.PROFILE_EFFECT:
                i.push(w.intl.formatToPlainString(w.t["3Y8q7a"], { itemName: e.name }));
                break;
            case L.R.NAMEPLATE:
                i.push(w.intl.formatToPlainString(w.t["2keXky"], { itemName: e.name })), (r = !0);
        }
    if (r) {
        let e = i.join(", ").replace(/, ([^,]*)$/, " & $1");
        return w.intl.formatToPlainString(w.t.Ofrqj6, { joinedItems: e });
    }
    let s = i.join(" & ");
    return w.intl.formatToPlainString(w.t.Ofrqj6, { joinedItems: s });
}
n(321073);
var ei = n(740076),
    er = n(661847),
    es = n(758836),
    el = n(630709);
function ea(e) {
    let { skuId: t } = e;
    return (0, es.EZ)(t)
        ? (0, r.jsx)(M.E, {
              variant: "text-sm/normal",
              className: el.CU,
              children: w.intl.format(w.t.Q1scdE, {
                  helpdeskArticle: et.A.getArticleURL(j.MVz.FRACTIONAL_PREMIUM_ABOUT),
              }),
          })
        : null;
}
function ec(e) {
    let { productRecord: t, productName: n, selectedProduct: i, previewingVariantIndexProps: l } = e,
        { previewingVariantIndex: a, handleEntering: c, handleLeaving: o } = l,
        u = b(t, a) ?? i,
        d = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return (0, s.useMemo)(() => {
                if (null != e && null != e.summary && "" !== e.summary) {
                    if (e.type === L.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                        let n = en(e, t);
                        return e.summary.replace("{joinedItems}", n);
                    }
                    return e.summary;
                }
                switch (e?.type) {
                    case L.R.AVATAR_DECORATION:
                        return w.intl.string(w.t["3lv7q2"]);
                    case L.R.PROFILE_EFFECT:
                        return w.intl.string(w.t.VhJL72);
                    case L.R.NAMEPLATE:
                        return w.intl.string(w.t.ik37EZ);
                    case L.R.PROFILE_FRAME:
                        return w.intl.string(w.t.fWzWPp);
                    case L.R.BUNDLE:
                        return en(e, t);
                    default:
                        return "";
                }
            }, [e, t]);
        })(u, !1),
        { disabledReason: m } = (0, ei.I)(i.skuId),
        x = (0, N.Q)(t),
        f = (0, O.B1)(t),
        h = f ? t.variants[a ?? x] : null,
        E = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            null != E.current && ((E.current.tabIndex = -1), E.current.focus());
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: el.sn,
                    children: [
                        (0, r.jsx)(U.D, { ref: E, variant: "heading-xl/bold", className: el.R_, children: n }),
                        (0, r.jsx)(M.E, { variant: "text-sm/normal", children: d }),
                        (0, r.jsx)(ea, { skuId: u.skuId }),
                        null !== m && (0, r.jsx)(M.E, { variant: "text-xs/normal", className: el.H$, children: m }),
                    ],
                }),
                f &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            null != h &&
                                (0, r.jsx)(M.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: el.a9,
                                    lineClamp: 1,
                                    children: w.intl.format(w.t.EcaRWt, {
                                        value: (0, r.jsx)("span", { className: el.I8, children: h.variantLabel }),
                                    }),
                                }),
                            (0, r.jsx)("div", {
                                className: el._x,
                                children: (0, r.jsx)(er.A, {
                                    skuId: t.skuId,
                                    onVariantEnter: c,
                                    onVariantExit: o,
                                    wrap: !0,
                                }),
                            }),
                        ],
                    }),
            ],
        })
    );
}
var eo =
        (((i = {}).COLLECTIBLE = "COLLECTIBLE"),
        (i.BUNDLE = "BUNDLE"),
        (i.EXTERNAL_ORB_BADGE = "EXTERNAL_ORB_BADGE"),
        (i.EXTERNAL_FRACTIONAL_NITRO = "EXTERNAL_FRACTIONAL_NITRO"),
        (i.EXTERNAL_GENERIC = "EXTERNAL_GENERIC"),
        i),
    eu = n(97808),
    ed = n(778712),
    em = n(346055),
    ex = n(993077),
    ef = n(245604),
    eh = n(460905),
    eE = n(262295),
    eR = n(320095),
    ep = n(963852),
    eg = n(763754),
    eA = n(20851),
    ev = n(986687),
    eN = n(101058),
    eC = n(84540),
    e_ = n(836602),
    eI = n(428262),
    ej = n(780898),
    eO = n(180129);
function eT(e) {
    let { user: t, innerClassName: n } = e;
    return (0, r.jsx)("div", {
        className: eO.mV,
        children: (0, r.jsx)(eE.A, {
            avatar: (0, r.jsx)(eu.eu, {
                src: t.avatarSrc,
                size: ed._3.SIZE_32,
                "aria-label": t.name,
                status: j.clD.ONLINE,
            }),
            name: t.name,
            innerClassName: D()(eO.$L, n),
        }),
    });
}
function ek(e) {
    let { user: t, nameplate: n, avatarDecoration: i } = e,
        s = (0, ej.Ov)();
    return (0, r.jsx)("div", {
        className: eO.nJ,
        role: "img",
        "aria-label": w.intl.string(w.t.SZeUdR),
        children: (0, r.jsxs)(em.M, {
            children: [
                (0, r.jsx)(eT, { user: s.mallow, innerClassName: eO.ab }),
                (0, r.jsxs)(M.E, {
                    variant: "text-sm/semibold",
                    className: eO.OS,
                    children: [w.intl.string(w.t["yzW/fZ"]), " - 3"],
                }),
                (0, r.jsx)(eT, { user: s.phibi, innerClassName: eO.e9 }),
                (0, r.jsx)("div", {
                    className: eO.mV,
                    children: (0, r.jsx)(W.A, {
                        className: eO.M4,
                        innerClassName: eO.e9,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: !0,
                        skipEffectDisplayName: !0,
                        pendingAvatarDecoration: i,
                        hideDecorators: !0,
                    }),
                }),
                (0, r.jsx)(eT, { user: s.locke, innerClassName: eO.e9 }),
                (0, r.jsxs)(M.E, {
                    variant: "text-sm/semibold",
                    className: eO.OS,
                    children: [w.intl.string(w.t["NG43/6"]), " - 12"],
                }),
                (0, r.jsx)(eT, { user: s.boom, innerClassName: eO.bD }),
                (0, r.jsx)(eT, { user: s.cherry, innerClassName: eO.bD }),
            ],
        }),
    });
}
function eL(e) {
    let { user: t } = e,
        n = (function (e) {
            let { author: t } = e;
            return (0, eR.rh)({
                ...(0, ep.Ay)({ author: t, channelId: "1337", content: w.intl.string(w.t.d5YwK5) }),
                state: j.cmJ.SENT,
                id: "0",
            });
        })({ author: t });
    return (0, r.jsx)("div", {
        role: "img",
        "aria-label": w.intl.string(w.t["TN+ZvB"]),
        children: (0, r.jsx)(em.M, {
            children: (0, r.jsxs)(ex.Z, {
                className: eO.f7,
                outline: !0,
                "aria-hidden": !0,
                children: [
                    (0, r.jsx)(eA.A, { className: eO.G5, author: (0, eg.p_)(n), message: n }, n.id),
                    (0, r.jsxs)("div", {
                        className: eO.lG,
                        children: [
                            (0, r.jsx)(ef.U, { size: "md", color: "currentColor", className: eO.hq }),
                            (0, r.jsx)(eh.n, { size: "md", color: "currentColor", className: eO.hq }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function eb(e) {
    let { product: t, user: n, activeBundleSlide: i } = e,
        l = eI.Ay.canUsePremiumProfileCustomization(n),
        { pendingAvatar: a, ...c } = (0, u.cf)([e_.A], () => e_.A.getPendingChanges()),
        o = (0, eN.V7)({ userId: n.id, image: a }),
        d = t.type === L.R.BUNDLE ? t.items[i ?? 0] : void 0,
        m = d?.type ?? t.type,
        x = m === L.R.AVATAR_DECORATION,
        f = m === L.R.PROFILE_EFFECT,
        { firstAvatarDecoration: h, firstProfileEffect: E, firstNameplate: R, firstProfileFrame: p } = (0, K.f5)(t),
        g = d?.type === L.R.AVATAR_DECORATION ? d : h,
        A = d?.type === L.R.PROFILE_EFFECT ? d : E,
        v = d?.type === L.R.PROFILE_FRAME ? d : p,
        N = d?.type === L.R.NAMEPLATE ? d : R;
    if (
        (s.useEffect(() => {
            if (null != g) return (0, eC.p)({ avatarDecoration: g }), () => (0, eC.p)({ avatarDecoration: void 0 });
        }, [g]),
        m === L.R.NAMEPLATE && null != N)
    )
        return (0, r.jsx)("div", {
            className: eO.Zj,
            children: (0, r.jsx)(ek, { user: n, nameplate: N, avatarDecoration: g }),
        });
    return (0, r.jsx)("div", {
        className: x ? eO.RA : eO.hZ,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(ev.A, {
                    ...c,
                    pendingAvatar: o,
                    user: n,
                    canUsePremiumCustomization: l,
                    pendingAvatarDecoration: g,
                    pendingProfileEffect: A,
                    profileEffectRestartKey: i,
                    pendingProfileFrame: v,
                    disabledInputs: !0,
                    hideMessageInput: !f,
                    hideCustomStatus: !0,
                    hideBioSection: x,
                    hideExampleButton: !0,
                    interactive: !1,
                    className: x ? eO.oB : void 0,
                }),
                x && (0, r.jsx)(eL, { user: n }),
            ],
        }),
    });
}
function eP(e) {
    let { user: t, selectedProduct: n, previewingProduct: i, selectedBundleSlide: s } = e;
    return (0, r.jsx)(eb, { user: t, product: i ?? n, activeBundleSlide: s });
}
var ey = n(478016),
    eS = n(661531),
    eD = n(224016),
    eB = n(913521);
function eM() {
    let e = [w.t.E1NP2x, w.t.kpMomJ, w.t.xT1Vfn, w.t.myyAEr, w.t.zTk8Ul];
    return (0, r.jsxs)("div", {
        className: eB.kL,
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: eB.ym,
            }),
            (0, r.jsx)(eD.A, { color: "white" }),
            (0, r.jsx)("div", {
                className: eB.PX,
                children: e.map((e, t) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: eB.UJ,
                            children: [
                                (0, r.jsx)(ey.U, { color: eS.A.colors.WHITE }),
                                (0, r.jsx)(M.E, {
                                    variant: "text-sm/medium",
                                    color: "text-overlay-light",
                                    children: w.intl.string(e),
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
var eU = n(17928),
    eH = n(576052),
    ew = n(83554);
function eF(e) {
    let { user: t } = e,
        n = eI.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: i, ...s } = (0, eU.cf)([e_.A], () => e_.A.getPendingChanges()),
        l = (0, eN.V7)({ userId: t.id, image: i });
    return (0, r.jsx)("div", {
        className: ew.k,
        children: (0, r.jsx)(ev.A, {
            ...s,
            pendingAvatar: l,
            user: t,
            pendingBadges: [(0, eH._)()],
            canUsePremiumCustomization: n,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
}
var eG = n(197952);
function eV(e) {
    let { user: t, productRecord: n, isClosing: i, isOrbCheckoutModalOpen: s } = e;
    return n.skuId === es.Dp.ORB_PROFILE_BADGE
        ? i || s
            ? null
            : (0, r.jsx)(eF, { user: t })
        : (0, es.EZ)(n.skuId)
          ? (0, r.jsx)(eM, {})
          : (0, r.jsx)(Q.B, { product: n, className: eG.M });
}
let ez = {
    [eo.COLLECTIBLE]: { LeftPreview: J, Info: ec, RightPreview: eP },
    [eo.BUNDLE]: {
        LeftPreview: J,
        Info: function (e) {
            let { productRecord: t, productName: n, selectedBundleSlide: i, setSelectedBundleSlide: l } = e,
                a = t.items,
                c = t.bundledProducts,
                o = c?.[i]?.name,
                u = a[i]?.type,
                d = null != u ? (0, C.Dm)(u) : null,
                m = w.intl.string(w.t.cTbdgu),
                x = s.useRef(null),
                f = s.useCallback(
                    (e) => {
                        a.length <= 1 ||
                            ("ArrowLeft" === e.key || "ArrowUp" === e.key
                                ? (e.preventDefault(), l((e) => (e - 1 + a.length) % a.length))
                                : "ArrowRight" === e.key || "ArrowDown" === e.key
                                  ? (e.preventDefault(), l((e) => (e + 1) % a.length))
                                  : "Home" === e.key
                                    ? (e.preventDefault(), l(0))
                                    : "End" === e.key && (e.preventDefault(), l(a.length - 1)));
                    },
                    [a.length, l],
                );
            s.useEffect(() => {
                let e = x.current;
                if (null == e || !e.contains(document.activeElement)) return;
                let t = e.querySelectorAll('[role="radio"]');
                t[i]?.focus();
            }, [i]);
            let h = s.useRef(null);
            return (
                s.useLayoutEffect(() => {
                    null != h.current && ((h.current.tabIndex = -1), h.current.focus());
                }, []),
                (0, r.jsxs)("div", {
                    className: F.Qf,
                    children: [
                        (0, r.jsx)(U.D, { ref: h, variant: "heading-xl/bold", className: F.R_, title: n, children: n }),
                        (0, r.jsx)(M.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: w.intl.format(w.t["1tUCAO"], { count: a.length }),
                        }),
                        (0, r.jsxs)("div", {
                            className: F.hZ,
                            children: [
                                (0, r.jsx)("div", {
                                    className: F.vg,
                                    children: (0, r.jsx)("div", {
                                        ref: x,
                                        className: F.hK,
                                        role: "radiogroup",
                                        "aria-label": m,
                                        tabIndex: -1,
                                        onKeyDown: f,
                                        children: a.map((e, t) => {
                                            let n = c?.[t]?.name ?? e.skuId;
                                            return (0, r.jsx)(
                                                z,
                                                { item: e, index: t, isSelected: t === i, setSelected: l, label: n },
                                                e.skuId,
                                            );
                                        }),
                                    }),
                                }),
                                null != o && (0, r.jsx)(G, { name: o, typeLabel: d }),
                            ],
                        }),
                    ],
                })
            );
        },
        RightPreview: eP,
    },
    [eo.EXTERNAL_ORB_BADGE]: { LeftPreview: ee, Info: ec, RightPreview: eV },
    [eo.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: ee, Info: ec, RightPreview: eV },
    [eo.EXTERNAL_GENERIC]: { LeftPreview: ee, Info: ec, RightPreview: eV },
};
function eK(e) {
    var t;
    return ez[
        ((t = e),
        (0, es.pQ)(t.skuId)
            ? t.skuId === es.Dp.ORB_PROFILE_BADGE
                ? "EXTERNAL_ORB_BADGE"
                : (0, es.EZ)(t.skuId)
                  ? "EXTERNAL_FRACTIONAL_NITRO"
                  : "EXTERNAL_GENERIC"
            : (0, C.aw)(t)
              ? "BUNDLE"
              : "COLLECTIBLE")
    ];
}
var eW = n(13875),
    eY = n(110629),
    e$ = n(268959),
    eX = n(958942);
function eq(e) {
    let { productRecord: t, selectedProduct: n } = e,
        i = (0, eW.Do)("CollectiblesShopProductDetailsModal") && n.type === L.R.PROFILE_FRAME;
    return (0, r.jsx)("div", {
        className: eX.N,
        children: i
            ? (0, r.jsx)(eY.A, { location: "CollectiblesShopProductDetailsModal" })
            : (0, r.jsx)(e$.A, { skuId: t.skuId }),
    });
}
var eZ = n(990078),
    eJ = n(462887),
    eQ = n(821609),
    e0 = n(318254),
    e1 = n(825484),
    e2 = n(331322),
    e4 = n(736653),
    e9 = n(44120),
    e5 = n(465794),
    e3 = n(757036),
    e7 = n(761705),
    e6 = n(449410),
    e8 = n(580630),
    te = n(4227),
    tt = n(940980),
    tn = n(466459),
    ti = n(395068),
    tr = n(885574),
    ts = n(401231);
function tl(e) {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, r.jsx)(eZ.m, {
              position: "top",
              align: "left",
              text: w.intl.string(w.t.y1VWkZ),
              children: (0, r.jsxs)("div", {
                  className: D()(ts.GX, t),
                  children: [
                      (0, r.jsx)("span", {
                          className: ts.P0,
                          children: (0, r.jsx)(tr.m, { size: "md", color: "currentColor", className: ts.G }),
                      }),
                      (0, r.jsx)(M.E, { variant: "text-md/semibold", children: w.intl.string(w.t.BEjTij) }),
                  ],
              }),
          })
        : (0, r.jsx)(M.E, { variant: "text-md/semibold", className: t, children: w.intl.string(w.t["6cfuDj"]) });
}
var ta = n(878112),
    tc = n(572595),
    to = n(206835),
    tu = n(450481);
let td = function (e) {
    let { product: t, onSuccess: n, onTrackClick: i, variant: s = "primary" } = e,
        { handleUseNow: l, isApplying: a, canUseNow: c } = (0, tu.p)({ product: t, onSuccess: n }),
        o = (0, to.A)();
    return c
        ? (0, r.jsx)(eQ.$, {
              variant: s,
              onClick: () => {
                  i?.(es.sH.USE_NOW), l();
              },
              loading: a,
              text: w.intl.string(w.t.MAS7uK),
              fullWidth: !0,
          })
        : (0, r.jsx)(eQ.$, {
              variant: s,
              onClick: () => {
                  i?.(es.sH.EDIT_PROFILE), o(), n?.();
              },
              text: w.intl.string(w.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var tm = n(226236);
let tx = function (e) {
    let { analyticsLocations: t, children: n } = e;
    return (0, r.jsx)(f.f5, {
        value: [...t, x.A.PROFILE_FRAMES_EA_MARKETING],
        children: (0, r.jsxs)("div", {
            className: tm.k,
            children: [
                (0, r.jsx)(M.E, {
                    variant: "text-xs/semibold",
                    color: "text-strong",
                    children: w.intl.format(w.t["3cglst"], {
                        articleURL: et.A.getArticleURL(j.MVz.SHOP_FRAMES_EARLY_ACCESS),
                    }),
                }),
                n,
            ],
        }),
    });
};
var tf = n(561769),
    th = n(140735),
    tE = n(252955);
function tR(e) {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: s = "heading-md/semibold",
        } = e,
        l = (0, e8.RS)(t, n);
    return (0, r.jsxs)(M.E, {
        variant: s,
        className: D()(tE.v, i),
        children: [
            (0, r.jsx)(th.A, { children: w.intl.format(w.t["2CEGln"], { price: l }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: l }),
        ],
    });
}
var tp = n(219103),
    tg = n(469215);
function tA(e) {
    let {
            product: t,
            hasShopDiscount: n,
            discountSource: i,
            discount: s,
            className: l,
            discountOfferAmount: a,
            hideStrikethroughPrice: c = !1,
            discountIconDisplayMode: o,
            discountIconSize: u = "md",
        } = e,
        d = (0, C.WD)(t, { hasShopDiscount: n, discount: s });
    if (null == d) return null;
    let { defaultPrice: m, showDefaultPriceOnly: x } = d;
    if (x)
        return (0, r.jsx)("div", {
            className: D()(tg.kG, l),
            children: (0, r.jsx)(tp.x, { priceAmount: m.amount, priceCurrency: m.currency }),
        });
    let { showDiscountPrice: f, originalPrice: h, finalPrice: E } = d;
    return (0, r.jsxs)("div", {
        className: D()(tg.kG, l),
        children: [
            c ? null : (0, r.jsx)(tR, { price: h, className: tg.q9 }),
            (0, r.jsx)(tp.x, {
                priceAmount: E.amount,
                priceCurrency: E.currency,
                discount: s,
                className: D()({ [tg.q9]: null == a }),
                discountIconConfig: f && null != o ? { displayMode: o, source: i ?? C.D0.NITRO, size: u } : void 0,
                discountOfferAmount: a,
            }),
        ],
    });
}
var tv = n(403581),
    tN = n(532794),
    tC = n(202541),
    t_ = n(447806);
function tI(e) {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: i } = (0, f.Ay)(),
        l = s.useRef(null);
    return (0, r.jsx)(B.D, {
        className: t_.F,
        innerRef: l,
        onClick: () => {
            n?.(es.sH.SUBSCRIBE_NOW),
                (0, tN.A)({ subscriptionTier: tC.pe.TIER_2, analyticsLocations: i, returnRef: l });
        },
        children: t,
    });
}
var tj = n(805961);
function tO(e) {
    let { product: t, onTrackClick: n } = e,
        i = (0, C.yt)(t, j.lid.PREMIUM_TIER_2);
    if (null == i) return null;
    let s = (0, e8.RS)(i.amount, i.currency);
    return (0, r.jsxs)("div", {
        className: tj.k,
        children: [
            (0, r.jsx)(eZ.m, {
                text: w.intl.string(w.t.MPFyJ5),
                "aria-label": w.intl.string(w.t.X3Ekj8),
                children: (0, r.jsx)(tv.t, { size: "md", color: "currentColor", className: tj.o }),
            }),
            (0, r.jsx)(M.E, {
                variant: "text-xs/medium",
                children: w.intl.format(w.t.Sv8iic, {
                    price: s,
                    subscribeNowHook: (e) => (0, r.jsx)(tI, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
var tT = n(818348),
    tk = n(752274);
function tL(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: i } = e,
        s = n ? w.intl.string(w.t.wu4gyV) : w.intl.string(w.t.eFNRzU),
        l = n || !i;
    return (0, r.jsxs)("div", {
        className: tk.eg,
        children: [
            (0, r.jsx)("div", {
                className: tk.zR,
                children: (0, r.jsx)(M.E, { variant: "text-xs/normal", className: l ? tk.r9 : void 0, children: s }),
            }),
            (0, r.jsx)(tp.x, { priceAmount: t.amount, priceCurrency: t.currency, className: l ? tk.r9 : void 0 }),
        ],
    });
}
function tb(e) {
    let {
            prices: t,
            hasShopDiscount: n,
            discountSource: i,
            discount: s,
            product: l,
            hasSufficientOrbs: a,
            onTrackClick: c,
            isProductDisabled: o,
            discountOfferAmount: u,
        } = e,
        d = null != u;
    return 0 === t.length
        ? null
        : t[0].currency === tT.Yr.DISCORD_ORB
          ? (0, r.jsx)(tL, { orbPrice: t[0], isProductDisabled: o, hasSufficientOrbs: a })
          : (0, r.jsxs)("div", {
                className: tk.eg,
                children: [
                    (0, r.jsxs)("div", {
                        className: tk.pw,
                        children: [
                            (0, r.jsx)(tA, {
                                product: l,
                                discount: s,
                                hasShopDiscount: n,
                                discountSource: i,
                                hideStrikethroughPrice: !n || d,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                                discountOfferAmount: u,
                            }),
                            n || d ? null : (0, r.jsx)(tO, { product: l, onTrackClick: c }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === tT.Yr.DISCORD_ORB &&
                        (0, r.jsx)(tp.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: o || !a ? tk.r9 : void 0,
                        }),
                ],
            });
}
var tP = n(525723),
    ty = n(347722),
    tS = n(57020),
    tD = n(61750),
    tB = n(237309);
function tM(e) {
    let t = (0, ty.X)(e.selectedProduct),
        n = t && null != e.giftRecipient;
    return (0, r.jsx)(e6.$, {
        isGifting: n,
        location: "CollectiblesShopProductDetailsModal",
        children: (0, r.jsx)(tU, { ...e, canGiftProduct: t }),
    });
}
function tU(e) {
    let {
            user: t,
            productRecord: n,
            selectedProduct: i,
            category: l,
            shouldCheckoutWithOrbs: a,
            tab: c,
            giftRecipient: o,
            giftingOrigin: d,
            analyticsLocations: m,
            returnRef: x,
            onClose: f,
            onTrackClick: h,
            canGiftProduct: E,
        } = e,
        { cardId: p, sessionId: g, tilePosition: N } = (0, v.uM)() ?? {},
        _ = (0, e3.L)(tC.PremiumTypes.TIER_2),
        I = (0, C.xM)(t),
        O = (0, eW.Do)("CollectiblesShopProductDetailsModal") && i.type === L.R.PROFILE_FRAME,
        T = eI.Ay.canUseShopDiscounts(t) || O,
        k = (0, tn.h)(n),
        { isPurchased: b, isPartiallyOwnedBundle: P } = (0, tn.h)(i),
        { isDisabled: y } = (0, ei.I)(i.skuId),
        S = (0, C.Zu)({ product: i, isPartiallyOwnedBundle: P, isPurchased: b }),
        B = (0, u.bG)([te.A], () => te.A.isClaiming === i?.skuId),
        U = (0, e4.Ay)(),
        H = (0, eJ.M)(U),
        F = (0, C.G0)(i),
        G = (0, C.yt)(i, j.lid.DEFAULT),
        V = G?.amount === 0,
        z = s.useMemo(() => (0, C.fT)(i, T), [i, T]),
        { prioritizeGifting: K, removeOrbsClaim: W } = (0, e6.q)(),
        Y = (0, tP.V_)(n),
        $ = null != Y,
        X = (0, tt.W)("CollectiblesShopProductDetailsModal"),
        q = c === es.G2.ORBS && a ? tf.Hi.ORBS : X ? tf.Hi.FIAT : void 0,
        { checkoutEligiblePrices: Z, hasSufficientOrbs: J } = (0, tS.F)({
            product: i,
            hasShopDiscount: T,
            hasDiscountOffer: $,
            prioritizedCurrency: q,
        }),
        Q = K && W ? Z.filter((e) => e.currency !== tT.Yr.DISCORD_ORB) : Z,
        ee = (0, ti.A)({ location: "CollectiblesShopProductDetailsModal", product: i }),
        et = s.useMemo(() => Z.some((e) => e.currency === tT.Yr.DISCORD_ORB), [Z]);
    (0, e7.W)({ disableFetch: !et });
    let en = s.useCallback(() => {
        h(es.sH.BUY_WITH_FIAT),
            (0, e9.A)({
                skuId: i.skuId,
                analyticsLocations: m,
                discoverySessionId: g,
                onClose: (e) => (e ? f() : (0, tT.tE)()),
            });
    }, [m, f, i.skuId, h, g]);
    function er(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = (0, r.jsx)(e5.A, {
                subscriptionTier: tC.pe.TIER_2,
                fullWidth: !0,
                buttonTextOverride: e,
                onClick: () => {
                    h(es.sH.UNLOCK_WITH_NITRO), (0, tc.M)();
                },
                onSubscribeModalClose: () => {
                    (0, tc.t)({
                        product: n,
                        category: l,
                        shouldCheckoutWithOrbs: a,
                        returnRef: x,
                        analyticsLocations: m,
                        tab: c,
                        giftRecipient: o,
                        giftingOrigin: d,
                        cardId: p,
                        sessionId: g,
                        tilePosition: N,
                    });
                },
            });
        return t ? (0, r.jsx)(tx, { analyticsLocations: m, children: i }) : i;
    }
    function el(e, t) {
        let n = y ? w.intl.string(w.t.cTdr3x) : w.intl.string(w.t.zqh7ZM),
            s = !J || y,
            l = w.intl.formatToPlainString(w.t.yi41qQ, { orbPrice: e.amount }),
            a = s ? `${l}, ${n}` : l;
        return (0, r.jsx)(eZ.m, {
            position: "top",
            text: n,
            shouldShow: s,
            "aria-label": !1,
            children: (0, r.jsx)(eQ.$, {
                variant: t ? "primary" : "secondary",
                onClick: function () {
                    h(es.sH.BUY_WITH_ORBS),
                        (0, R.B4)({
                            skuId: i.skuId,
                            onComplete: (e) => {
                                (0, A.gB)(),
                                    f(),
                                    (0, tD.A)({
                                        product: i,
                                        analyticsLocations: m,
                                        itemConsumed: e?.entitlements?.[0]?.consumed,
                                        purchaseType: es.gs.ORB,
                                    });
                            },
                            analyticsLocations: m,
                            discoverySessionId: g,
                        });
                },
                disabled: s,
                "aria-label": a,
                text: w.intl.format(w.t.JC15qj, {
                    orbPrice: e.amount,
                    orbIconHook: () => (0, r.jsx)(e0.C, { className: tB.fN, size: "sm", color: "currentColor" }),
                }),
                fullWidth: !0,
            }),
        });
    }
    let ea = () =>
            (0, r.jsx)(ta.A, {
                primary: !0,
                fullWidth: !0,
                fullWidthLabel: w.intl.string(w.t.ilhtIa),
                product: i,
                onSuccess: f,
                giftRecipient: o,
                giftingOrigin: d,
                onTrackClick: h,
            }),
        ec = function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return (0, r.jsx)(eQ.$, { variant: "secondary", onClick: en, text: e, fullWidth: t });
        },
        eo = () =>
            (0, r.jsxs)("div", {
                className: tB.pq,
                children: [
                    (0, r.jsx)(M.E, { variant: "text-md/semibold", children: w.intl.string(w.t.rt69oo) }),
                    !b &&
                        (0, r.jsx)(M.E, {
                            className: D()(tB.ed, !H && tB.un),
                            variant: "text-xxs/normal",
                            children: w.intl.string(w.t.nKdAlO),
                        }),
                ],
            }),
        eu = (e) =>
            e.length > 0
                ? (0, r.jsx)(tb, {
                      prices: e,
                      product: i,
                      hasShopDiscount: T,
                      discountSource: I,
                      discount: z,
                      hasSufficientOrbs: J,
                      isProductDisabled: y,
                      discountOfferAmount: Y,
                      onTrackClick: h,
                  })
                : null;
    return (0, r.jsxs)("div", {
        className: tB.iw,
        children: [
            (() => {
                let e = k.isPurchased || k.isPartiallyOwnedBundle;
                if (!K) return e ? (0, r.jsx)(tl, { className: tB.On, isPartiallyPurchased: P }) : F ? eo() : eu(Q);
                if (F && !e) return eo();
                let t = Q.find((e) => e.currency !== tT.Yr.DISCORD_ORB);
                return eu(null == t ? [] : [t]);
            })(),
            (0, r.jsx)(e2.B, {
                direction: "vertical",
                gap: 8,
                children: (() => {
                    if (F && !_ && !V) return er(w.intl.string(w.t.sEAnVH));
                    if (!S)
                        return E
                            ? (0, r.jsx)(ta.A, {
                                  primary: !0,
                                  product: i,
                                  onSuccess: f,
                                  fullWidth: !0,
                                  giftRecipient: o,
                                  giftingOrigin: d,
                                  onTrackClick: h,
                              })
                            : null;
                    if (b)
                        return E
                            ? K
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          ea(),
                                          (0, r.jsx)(td, {
                                              variant: "secondary",
                                              product: i,
                                              onSuccess: f,
                                              onTrackClick: h,
                                          }),
                                      ],
                                  })
                                : (0, r.jsxs)(e1.e, {
                                      wrap: !1,
                                      fullWidth: !0,
                                      children: [
                                          (0, r.jsx)(td, { product: i, onSuccess: f, onTrackClick: h }),
                                          (0, r.jsx)(ta.A, {
                                              primary: !0,
                                              product: i,
                                              onSuccess: f,
                                              giftRecipient: o,
                                              giftingOrigin: d,
                                              onTrackClick: h,
                                          }),
                                      ],
                                  })
                            : (0, r.jsx)(td, { product: i, onSuccess: f, onTrackClick: h });
                    if (ee) return er(w.intl.string(w.t["9wfL34"]), !0);
                    if (F)
                        return (0, r.jsx)(eQ.$, {
                            loading: B,
                            loadingStartedLabel: w.intl.string(w.t["TYw+9s"]),
                            loadingFinishedLabel: w.intl.string(w.t.Pg1UP5),
                            onClick: async () => {
                                h(es.sH.ADD_TO_COLLECTION),
                                    await (0, A.iJ)(i.skuId),
                                    f(),
                                    (0, tD.A)({
                                        product: i,
                                        analyticsLocations: m,
                                        purchaseType: es.gs.PREMIUM_PURCHASE,
                                    });
                            },
                            text: w.intl.string(w.t.zp6caO),
                            fullWidth: !0,
                        });
                    if (K) {
                        let e, t;
                        return (
                            (e = Q.find((e) => e.currency !== tT.Yr.DISCORD_ORB)),
                            (t = Q.find((e) => e.currency === tT.Yr.DISCORD_ORB)),
                            null != e && null != t
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsxs)(e2.B, {
                                              direction: "horizontal",
                                              gap: 8,
                                              children: [ea(), ec(w.intl.string(w.t.pi7PDT), !1)],
                                          }),
                                          el(t, !1),
                                      ],
                                  })
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          ea(),
                                          null != e ? ec(w.intl.string(w.t.pxocaf)) : null != t ? el(t, !1) : null,
                                      ],
                                  })
                        );
                    }
                    return (0, r.jsx)(r.Fragment, {
                        children: Z.map((e, t) => {
                            let n,
                                l = 0 === t,
                                a =
                                    e.currency === tT.Yr.DISCORD_ORB
                                        ? el(e, l)
                                        : ((n = $
                                              ? w.intl.formatToPlainString(w.t["5U5RB5"], { discountOfferAmount: Y })
                                              : w.intl.formatToPlainString(w.t["cNSL/j"], {
                                                    price: (0, e8.$g)(e.amount, e.currency),
                                                })),
                                          (0, r.jsxs)(e1.e, {
                                              wrap: !1,
                                              fullWidth: !0,
                                              children: [
                                                  (0, r.jsx)(eQ.$, {
                                                      variant: l ? "primary" : "secondary",
                                                      onClick: en,
                                                      text: n,
                                                      fullWidth: !0,
                                                  }),
                                                  E &&
                                                      (0, r.jsx)(ta.A, {
                                                          primary: l,
                                                          product: i,
                                                          onSuccess: f,
                                                          giftRecipient: o,
                                                          giftingOrigin: d,
                                                          onTrackClick: h,
                                                      }),
                                              ],
                                          }));
                            return (0, r.jsx)(s.Fragment, { children: a }, e.currency);
                        }),
                    });
                })(),
            }),
        ],
    });
}
var tH = n(18967);
function tw(e) {
    let { productRecord: t, selectedProduct: n, previewingProduct: i, user: s, selectedBundleSlide: l } = e,
        a = eK(t);
    return (0, r.jsxs)("div", {
        className: D()(tH.wd, { [tH.E7]: null != a.LeftPreview }),
        children: [
            (0, r.jsx)("div", { className: tH.dL, children: (0, r.jsx)(eq, { productRecord: t, selectedProduct: n }) }),
            null != a.LeftPreview &&
                (0, r.jsx)("div", {
                    className: tH._E,
                    children: (0, r.jsx)(a.LeftPreview, {
                        user: s,
                        selectedProduct: n,
                        previewingProduct: i,
                        productRecord: t,
                        selectedBundleSlide: l,
                    }),
                }),
            (0, r.jsx)("div", { className: tH.F_, children: (0, r.jsx)(a.Info, { ...e }) }),
            (0, r.jsx)(tM, { ...e }),
        ],
    });
}
var tF = n(685761),
    tG = n(408278),
    tV = n(972213),
    tz = n(646101);
let tK = (0, n(945810).mj)({
    name: "2026-07-collectibles-pdp-collection-button",
    kind: "user",
    defaultConfig: { showCollectionButton: !1 },
    variations: { 0: { showCollectionButton: !1 }, 1: { showCollectionButton: !0 } },
});
var tW = n(691540),
    tY = n(857250),
    t$ = n(97483),
    tX = n(173936),
    tq = n(957565),
    tZ = n(573749);
function tJ(e) {
    let { skuId: t, tab: n, onTrackClick: i } = e,
        l = s.useCallback(() => {
            g.default.track(j.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
                i?.(es.sH.COPY_LINK),
                (0, tq.C)((0, tZ.o)(t, n), () => (0, tW.P0)((0, tY.o)(w.intl.string(w.t["L/PwZf"]), t$.Ck.SUCCESS)));
        }, [t, n, i]);
    return (0, r.jsx)(tG.K, {
        "aria-label": w.intl.string(w.t.WqhZss),
        onClick: l,
        icon: tX.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
var tQ = n(427209),
    t0 = n(192308),
    t1 = n(294454);
function t2(e) {
    let { skuId: t, product: i, productName: l, tab: a, onTrackClick: c } = e,
        o = s.useCallback(() => {
            g.default.track(j.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
                c?.(es.sH.SHARE_LINK),
                ((e) => {
                    let { skuId: t, product: i, productName: s, tab: l, source: a } = e;
                    (0, t0.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("62279"),
                                n.e("16747"),
                                n.e("94635"),
                                n.e("43880"),
                                n.e("89084"),
                                n.e("44780"),
                                n.e("65617"),
                                n.e("36946"),
                                n.e("92639"),
                                n.e("44385"),
                                n.e("40963"),
                                n.e("90480"),
                                n.e("66031"),
                                n.e("94317"),
                                n.e("23601"),
                                n.e("3361"),
                            ]).then(n.bind(n, 44632));
                            return (n) =>
                                (0, r.jsx)(e, { ...n, skuId: t, product: i, productName: s, tab: l, source: a });
                        },
                        { stackingBehavior: "stack", modalKey: t1.aU },
                    );
                })({ skuId: t, product: i, productName: l, tab: a, source: "collectibles-shop-pdp" });
        }, [t, i, l, a, c]);
    return (0, r.jsx)(eZ.m, {
        text: w.intl.string(w.t.RDE0Sc),
        ariaHidden: !0,
        children: (0, r.jsx)(tG.K, {
            "aria-label": w.intl.string(w.t.Ej3B3Y),
            onClick: o,
            icon: tQ.A,
            variant: "overlay-secondary",
            size: "sm",
        }),
    });
}
var t4 = n(139146),
    t9 = n(976860),
    t5 = n(50920),
    t3 = n(668953),
    t7 = n(881636),
    t6 = n(428445);
function t8(e) {
    let { goPrev: t, goNext: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: t6.Y,
                children: (0, r.jsx)(tG.K, {
                    "aria-label": w.intl.string(w.t["3NdvMK"]),
                    onClick: t,
                    icon: t3.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, r.jsx)("div", {
                className: t6.K,
                children: (0, r.jsx)(tG.K, {
                    "aria-label": w.intl.string(w.t.RYIeOX),
                    onClick: n,
                    icon: t7.u,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
}
var ne = n(742441);
function nt(e) {
    let {
            user: t,
            productRecord: n,
            previewingProduct: i,
            selectedProduct: l,
            selectedVariantIndex: a,
            selectedBundleSlide: c,
            setSelectedBundleSlide: o,
            isClosing: u,
            isOrbCheckoutModalOpen: d,
            pdpBackground: m,
            category: x,
            tab: f,
            onClose: h,
            onTrackClick: E,
        } = e,
        R = eK(n),
        p = (0, tz.x)("CollectiblesShopProductDetailsModal"),
        A = (0, C.aw)(l),
        N = A ? l.items.length : 0,
        _ = tK.useConfig({ location: "CollectiblesShopProductDetailsModal" }).showCollectionButton,
        I = (function () {
            let e = (0, t5.a)("CollectiblesPdpNavigateToCollection"),
                { sessionId: t } = (0, v.uM)() ?? {};
            return s.useCallback(
                (n, i) => {
                    if (
                        (g.default.track(j.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: t,
                            sku_id: n.skuId,
                            cta_name: i,
                        }),
                        e && !0 !== n.isOrbsExclusive)
                    )
                        return void (0, t9.pX)(j.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n.skuId));
                    let r = !0 === n.isOrbsExclusive ? es.G2.ORBS : es.G2.CATALOG;
                    (0, t9.pX)(`${j.BVt.COLLECTIBLES_SHOP_WITH_TAB(r)}&${es.P1}=${n.skuId}`);
                },
                [e, t],
            );
        })(),
        O = s.useCallback(() => {
            E(es.sH.GO_TO_COLLECTION), h(), I(x, "go_to_collection_button");
        }, [x, h, E, I]),
        k = s.useCallback(() => {
            N <= 1 || o((e) => (e - 1 + N) % N);
        }, [N, o]),
        b = s.useCallback(() => {
            N <= 1 || o((e) => (e + 1) % N);
        }, [N, o]),
        P = s.useCallback(
            (e) => {
                if (N <= 1) return;
                let t = e.target;
                "INPUT" === t.tagName ||
                    "TEXTAREA" === t.tagName ||
                    t.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), k())
                        : "ArrowRight" === e.key && (e.preventDefault(), b()));
            },
            [N, k, b],
        ),
        y = s.useCallback(() => {
            E(es.sH.CLOSE_DETAIL), h();
        }, [E, h]),
        S = s.useRef(null),
        B = s.useRef(!0);
    return (
        s.useLayoutEffect(() => {
            if (B.current) {
                B.current = !1;
                return;
            }
            let e = S.current;
            null != e && ((e.style.animation = "none"), e.offsetHeight, (e.style.animation = ""));
        }, [c]),
        (0, r.jsxs)("div", {
            className: D()(ne.i1, (0, es.EZ)(l.skuId) ? ne.bF : l.type === L.R.AVATAR_DECORATION ? ne.Jq : ne.eF),
            style: null != m ? { backgroundImage: `url(${m})` } : void 0,
            onKeyDown: P,
            children: [
                (p || _) &&
                    (0, r.jsx)("div", {
                        className: ne.GV,
                        children: (0, r.jsx)(eZ.m, {
                            text: w.intl.string(w.t["Hr/q/6"]),
                            children: (0, r.jsx)(eQ.$, {
                                variant: "overlay-secondary",
                                size: "sm",
                                icon: tF.f,
                                text: x.name,
                                onClick: O,
                            }),
                        }),
                    }),
                (0, r.jsx)("div", {
                    className: ne.KR,
                    ref: S,
                    children: (0, r.jsx)(R.RightPreview, {
                        user: t,
                        productRecord: n,
                        selectedProduct: l,
                        previewingProduct: i,
                        selectedBundleSlide: c,
                        isClosing: u,
                        isOrbCheckoutModalOpen: d,
                    }),
                }),
                A && N > 1 && (0, r.jsx)(t8, { goPrev: k, goNext: b }),
                (0, r.jsxs)("div", {
                    className: ne.VG,
                    children: [
                        (0, r.jsx)(t4.R, {
                            product: n,
                            selectedVariantIndex: a,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: E,
                        }),
                        p
                            ? (0, r.jsx)(t2, {
                                  skuId: l.skuId,
                                  product: l,
                                  productName: (0, T.VG)(l),
                                  tab: f,
                                  onTrackClick: E,
                              })
                            : (0, r.jsx)(tJ, { skuId: l.skuId, tab: f, onTrackClick: E }),
                        (0, r.jsx)(tG.K, {
                            "aria-label": w.intl.string(w.t.cpT0Cq),
                            onClick: y,
                            icon: tV.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            ],
        })
    );
}
var nn = n(460510);
let ni = function (e) {
    let {
            transitionState: t,
            onClose: n,
            product: i,
            category: l,
            returnRef: L,
            analyticsSource: S,
            analyticsLocations: D,
            shouldCheckoutWithOrbs: B,
            tab: M,
            giftRecipient: U,
            giftingOrigin: H,
        } = e,
        w = (0, u.bG)([p.default], () => p.default.getCurrentUser()),
        F = (0, y.f)(i),
        { previewingVariantIndex: G } = F,
        V = (0, N.Q)(i),
        z = b(i, G),
        K = (0, O.rb)(i, V);
    a()(null != K, "Selected product should not be null");
    let { analyticsLocations: W } = (0, f.Ay)([...D, x.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, k.Yr)(K.skuId);
    let Y = (0, P.U1)(l),
        [$, X] = s.useState(0);
    s.useEffect(() => {
        null != w && (0, E.A)(w.id, w.getAvatarURL(void 0, 80));
    }, [w]);
    let q = s.useMemo(() => (0, C.V6)(i.type, i.skuId), [i.type, i.skuId]);
    s.useEffect(() => {
        g.default.track(j.HAw.OPEN_MODAL, {
            type: j.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
            source: S,
            location_stack: W,
            sku_id: K.skuId,
            product_type: q,
        }),
            (0, A.RD)(K.skuId);
    }, [S, W, K.skuId, q]);
    let { cardId: Z, sessionId: J, tilePosition: Q } = (0, v.uM)() ?? {},
        ee = s.useMemo(() => (0, O.v8)(i), [i]),
        et = (function (e) {
            let { skuId: t, productSkuIds: n, analyticsLocations: i } = e,
                { cardId: r, sessionId: l } = (0, v.uM)() ?? {},
                a = (0, I.o)(),
                c = (0, C.xM)(a);
            return s.useCallback(
                (e) => {
                    g.default.track(j.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                        sku_id: t,
                        cta: e,
                        shop_session_id: l,
                        card_id: r,
                        product_sku_ids: n,
                        location_stack: i,
                        discount_source: (0, C.b_)(c),
                    });
                },
                [t, i, r, n, l, c],
            );
        })({ skuId: K.skuId, productSkuIds: ee, analyticsLocations: W });
    (0, h.A)({
        type: c.ImpressionTypes.MODAL,
        name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
        properties: {
            sku_id: K.skuId,
            card_id: Z,
            shop_session_id: J,
            position_in_section: Q,
            product_sku_ids: ee,
            location_stack: W,
        },
    });
    let en = (0, R.o6)(),
        ei = t === d.ip.EXITING,
        er = (0, _.c)("product_details_modal");
    if (null == w || (i.skuId === o.j.PREMIUM_TIER_2_1_DAY && !er)) return null;
    let es = (0, T.VG)(i),
        el = {
            user: w,
            productRecord: i,
            productName: es,
            selectedProduct: K,
            previewingProduct: z ?? null,
            category: l,
            selectedVariantIndex: V,
            previewingVariantIndexProps: F,
            selectedBundleSlide: $,
            setSelectedBundleSlide: X,
            tab: M,
            shouldCheckoutWithOrbs: B,
            giftRecipient: U?.id !== w.id ? U : void 0,
            giftingOrigin: U?.id !== w.id ? H : void 0,
            analyticsLocations: W,
            returnRef: L,
            onClose: n,
            onTrackClick: et,
        };
    return (0, r.jsx)(f.f5, {
        value: W,
        children: (0, r.jsx)(m.d, {
            returnRef: L,
            transitionState: t,
            onClose: n,
            size: "xl",
            paddingSize: "sm",
            "aria-label": es,
            children: (0, r.jsx)("div", {
                className: nn.C,
                children: (0, r.jsxs)("div", {
                    className: nn.j,
                    children: [
                        (0, r.jsx)(tw, { ...el }),
                        (0, r.jsx)(nt, { ...el, isClosing: ei, isOrbCheckoutModalOpen: en, pdpBackground: Y }),
                    ],
                }),
            }),
        }),
    });
};
