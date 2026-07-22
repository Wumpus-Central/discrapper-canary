n.d(t, { default: () => na });
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
    E = n(688810),
    h = n(139286),
    f = n(903209),
    p = n(652165),
    R = n(287809),
    v = n(174459),
    N = n(34332),
    A = n(440938),
    g = n(298072),
    I = n(993408),
    _ = n(503089),
    C = n(331884),
    j = n(652215),
    k = n(623373),
    T = n(536572),
    O = n(177366),
    L = n(575593);
function b(e, t) {
    return e.type === L.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e;
}
var P = n(212407),
    y = n(935094),
    S = n(503698),
    B = n.n(S),
    D = n(939249),
    U = n(834730),
    M = n(297264),
    H = n(14702),
    w = n(758836),
    F = n(375708),
    G = n(777940);
function V(e) {
    let { name: t, typeLabel: n } = e;
    return (0, r.jsxs)(U.E, {
        variant: "text-sm/medium",
        className: G.mC,
        "aria-live": "polite",
        children: [
            (0, r.jsx)("span", { className: G.kx, children: t }),
            null != n && (0, r.jsx)("span", { className: G.FP, children: n }),
        ],
    });
}
let z = { [L.R.AVATAR_DECORATION]: !0, [L.R.PROFILE_FRAME]: !0 };
function K(e) {
    let { item: t, index: n, isSelected: i, setSelected: l, label: a, trackedSkuId: c, onTrackClick: o } = e,
        u = s.useMemo(() => ({ skuId: t.skuId, type: t.type, items: [t] }), [t]),
        d = s.useCallback(() => {
            o(w.sH.BUNDLE_VIEW_PRODUCT, c), l(n);
        }, [o, c, l, n]),
        m = !0 === z[t.type];
    return (0, r.jsx)(D.D, {
        tag: "div",
        role: "radio",
        "aria-checked": i,
        tabIndex: i ? 0 : -1,
        className: B()(G.xn, { [G.Y4]: i, [G.u8]: m }),
        onClick: d,
        "aria-label": a,
        children: (0, r.jsx)("div", { className: G.Yf, children: (0, r.jsx)(H.O, { product: u }) }),
    });
}
var W = n(442759),
    $ = n(344346),
    X = n(139136),
    Y = n(395744),
    q = n(929283),
    Z = n(387417);
function J(e) {
    let { item: t, user: n, bundleFirstAvatarDecoration: i, isBundle: s } = e;
    switch (t.type) {
        case L.R.AVATAR_DECORATION:
            return (0, r.jsx)("div", {
                className: Z.h1,
                children: (0, r.jsx)(q.i, { user: n, item: t, isHighlighted: !0 }),
            });
        case L.R.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: s ? Z.sm : Z.VY,
                children: (0, r.jsx)(X.A, {
                    skuId: t.skuId,
                    removeSetHeight: !0,
                    isHighlighted: !0,
                    delayProfileEffectIntro: !0,
                }),
            });
        case L.R.PROFILE_FRAME:
            return (0, r.jsx)("div", { className: s ? Z.ob : Z.fE, children: (0, r.jsx)(Y.A, { frame: t }) });
        case L.R.NAMEPLATE:
            return (0, r.jsx)("div", {
                className: Z.Dz,
                children: (0, r.jsx)($.A, {
                    className: Z.M4,
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
function Q(e) {
    let { user: t, selectedProduct: n, previewingProduct: i, selectedBundleSlide: s } = e,
        l = i ?? n,
        { firstAvatarDecoration: a } = (0, W.f5)(l),
        c = l.items[s] ?? l.items[0];
    return null == c
        ? null
        : (0, r.jsx)(J, { item: c, user: t, bundleFirstAvatarDecoration: a, isBundle: (0, I.aw)(l) });
}
var ee = n(846957);
function et(e) {
    let { selectedProduct: t, previewingProduct: n } = e;
    return (0, r.jsx)(ee.B, { product: n ?? t });
}
var en = n(975571);
function ei(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t) return F.intl.formatToPlainString(F.t["/0Yndu"], { num: e.bundledProducts?.length });
    let n = e.bundledProducts ?? [],
        i = [],
        r = !1;
    for (let e of n)
        switch (e.type) {
            case L.R.AVATAR_DECORATION:
                i.push(F.intl.formatToPlainString(F.t.Ntv9Jt, { itemName: e.name }));
                break;
            case L.R.PROFILE_EFFECT:
                i.push(F.intl.formatToPlainString(F.t["3Y8q7a"], { itemName: e.name }));
                break;
            case L.R.NAMEPLATE:
                i.push(F.intl.formatToPlainString(F.t["2keXky"], { itemName: e.name })), (r = !0);
        }
    if (r) {
        let e = i.join(", ").replace(/, ([^,]*)$/, " & $1");
        return F.intl.formatToPlainString(F.t.Ofrqj6, { joinedItems: e });
    }
    let s = i.join(" & ");
    return F.intl.formatToPlainString(F.t.Ofrqj6, { joinedItems: s });
}
n(321073);
var er = n(740076),
    es = n(661847),
    el = n(186077);
function ea(e) {
    let { skuId: t } = e;
    return (0, w.EZ)(t)
        ? (0, r.jsx)(U.E, {
              variant: "text-sm/normal",
              className: el.CU,
              children: F.intl.format(F.t.Q1scdE, {
                  helpdeskArticle: en.A.getArticleURL(j.MVz.FRACTIONAL_PREMIUM_ABOUT),
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
                        let n = ei(e, t);
                        return e.summary.replace("{joinedItems}", n);
                    }
                    return e.summary;
                }
                switch (e?.type) {
                    case L.R.AVATAR_DECORATION:
                        return F.intl.string(F.t["3lv7q2"]);
                    case L.R.PROFILE_EFFECT:
                        return F.intl.string(F.t.VhJL72);
                    case L.R.NAMEPLATE:
                        return F.intl.string(F.t.ik37EZ);
                    case L.R.PROFILE_FRAME:
                        return F.intl.string(F.t.fWzWPp);
                    case L.R.BUNDLE:
                        return ei(e, t);
                    default:
                        return "";
                }
            }, [e, t]);
        })(u, !1),
        { disabledReason: m } = (0, er.I)(i.skuId),
        x = (0, g.Q)(t),
        E = (0, k.B1)(t),
        h = E ? t.variants[a ?? x] : null,
        f = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            null != f.current && ((f.current.tabIndex = -1), f.current.focus());
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: el.sn,
                    children: [
                        (0, r.jsx)(M.D, { ref: f, variant: "heading-xl/bold", className: el.R_, children: n }),
                        (0, r.jsx)(U.E, { variant: "text-sm/normal", children: d }),
                        (0, r.jsx)(ea, { skuId: u.skuId }),
                        null !== m && (0, r.jsx)(U.E, { variant: "text-xs/normal", className: el.H$, children: m }),
                    ],
                }),
                E &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            null != h &&
                                (0, r.jsx)(U.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: el.a9,
                                    lineClamp: 1,
                                    children: F.intl.format(F.t.EcaRWt, {
                                        value: (0, r.jsx)("span", { className: el.I8, children: h.variantLabel }),
                                    }),
                                }),
                            (0, r.jsx)("div", {
                                className: el._x,
                                children: (0, r.jsx)(es.A, {
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
    eE = n(245604),
    eh = n(460905),
    ef = n(262295),
    ep = n(320095),
    eR = n(963852),
    ev = n(763754),
    eN = n(20851),
    eA = n(986687),
    eg = n(101058),
    eI = n(836602),
    e_ = n(428262),
    eC = n(780898),
    ej = n(907609);
function ek(e) {
    let { user: t, innerClassName: n } = e;
    return (0, r.jsx)("div", {
        className: ej.mV,
        children: (0, r.jsx)(ef.A, {
            avatar: (0, r.jsx)(eu.eu, {
                src: t.avatarSrc,
                size: ed._3.SIZE_32,
                "aria-label": t.name,
                status: j.clD.ONLINE,
            }),
            name: t.name,
            innerClassName: B()(ej.$L, n),
        }),
    });
}
function eT(e) {
    let { user: t, nameplate: n, avatarDecoration: i } = e,
        s = (0, eC.Ov)();
    return (0, r.jsx)("div", {
        className: ej.nJ,
        role: "img",
        "aria-label": F.intl.formatToPlainString(F.t["95pCSf"], { a11y_text: n.label }),
        children: (0, r.jsxs)(em.M, {
            children: [
                (0, r.jsx)(ek, { user: s.mallow, innerClassName: ej.ab }),
                (0, r.jsxs)(U.E, {
                    variant: "text-sm/semibold",
                    className: ej.OS,
                    children: [F.intl.string(F.t["yzW/fZ"]), " - 3"],
                }),
                (0, r.jsx)(ek, { user: s.phibi, innerClassName: ej.e9 }),
                (0, r.jsx)("div", {
                    className: ej.mV,
                    children: (0, r.jsx)($.A, {
                        className: ej.M4,
                        innerClassName: ej.e9,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: !0,
                        skipEffectDisplayName: !0,
                        pendingAvatarDecoration: i,
                        hideDecorators: !0,
                    }),
                }),
                (0, r.jsx)(ek, { user: s.locke, innerClassName: ej.e9 }),
                (0, r.jsxs)(U.E, {
                    variant: "text-sm/semibold",
                    className: ej.OS,
                    children: [F.intl.string(F.t["NG43/6"]), " - 12"],
                }),
                (0, r.jsx)(ek, { user: s.boom, innerClassName: ej.bD }),
                (0, r.jsx)(ek, { user: s.cherry, innerClassName: ej.bD }),
            ],
        }),
    });
}
function eO(e) {
    let { user: t, avatarDecoration: n } = e,
        i = (function (e) {
            let { author: t } = e;
            return (0, ep.rh)({
                ...(0, eR.Ay)({ author: t, channelId: "1337", content: F.intl.string(F.t.d5YwK5) }),
                state: j.cmJ.SENT,
                id: "0",
            });
        })({ author: t });
    return (0, r.jsx)("div", {
        role: "img",
        "aria-label": F.intl.string(F.t["TN+ZvB"]),
        children: (0, r.jsx)(em.M, {
            children: (0, r.jsxs)(ex.Z, {
                className: ej.f7,
                outline: !0,
                "aria-hidden": !0,
                children: [
                    (0, r.jsx)(
                        eN.A,
                        { className: ej.G5, author: (0, ev.p_)(i), message: i, avatarDecorationOverride: n ?? null },
                        i.id,
                    ),
                    (0, r.jsxs)("div", {
                        className: ej.lG,
                        children: [
                            (0, r.jsx)(eE.U, { size: "md", color: "currentColor", className: ej.hq }),
                            (0, r.jsx)(eh.n, { size: "md", color: "currentColor", className: ej.hq }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function eL(e) {
    let { product: t, user: n, activeBundleSlide: i } = e,
        s = e_.Ay.canUsePremiumProfileCustomization(n),
        { pendingAvatar: l, ...a } = (0, u.cf)([eI.A], () => eI.A.getPendingChanges()),
        c = (0, eg.V7)({ userId: n.id, image: l }),
        o = t.type === L.R.BUNDLE ? t.items[i ?? 0] : void 0,
        d = o?.type ?? t.type,
        m = d === L.R.AVATAR_DECORATION,
        x = d === L.R.PROFILE_EFFECT,
        { firstAvatarDecoration: E, firstProfileEffect: h, firstNameplate: f, firstProfileFrame: p } = (0, W.f5)(t),
        R = o?.type === L.R.AVATAR_DECORATION ? o : E,
        v = o?.type === L.R.PROFILE_EFFECT ? o : h,
        N = o?.type === L.R.PROFILE_FRAME ? o : p,
        A = o?.type === L.R.NAMEPLATE ? o : f;
    if (d === L.R.NAMEPLATE && null != A)
        return (0, r.jsx)("div", {
            className: ej.Zj,
            children: (0, r.jsx)(eT, { user: n, nameplate: A, avatarDecoration: R }),
        });
    return (0, r.jsx)("div", {
        className: m ? ej.RA : ej.hZ,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eA.A, {
                    ...a,
                    pendingAvatar: c,
                    user: n,
                    canUsePremiumCustomization: s,
                    pendingAvatarDecoration: R,
                    pendingProfileEffect: v,
                    profileEffectRestartKey: i,
                    pendingProfileFrame: N,
                    disabledInputs: !0,
                    hideMessageInput: !x,
                    hideCustomStatus: !0,
                    hideBioSection: m,
                    hideExampleButton: !0,
                    interactive: !1,
                    className: m ? ej.oB : void 0,
                }),
                m && (0, r.jsx)(eO, { user: n, avatarDecoration: R }),
            ],
        }),
    });
}
function eb(e) {
    let { user: t, selectedProduct: n, previewingProduct: i, selectedBundleSlide: s } = e;
    return (0, r.jsx)(eL, { user: t, product: i ?? n, activeBundleSlide: s });
}
var eP = n(478016),
    ey = n(661531),
    eS = n(224016),
    eB = n(792249);
function eD() {
    let e = [F.t.E1NP2x, F.t.kpMomJ, F.t.xT1Vfn, F.t.myyAEr, F.t.zTk8Ul];
    return (0, r.jsxs)("div", {
        className: eB.kL,
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: eB.ym,
            }),
            (0, r.jsx)(eS.A, { color: "white" }),
            (0, r.jsx)("div", {
                className: eB.PX,
                children: e.map((e, t) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: eB.UJ,
                            children: [
                                (0, r.jsx)(eP.U, { color: ey.A.colors.WHITE }),
                                (0, r.jsx)(U.E, {
                                    variant: "text-sm/medium",
                                    color: "text-overlay-light",
                                    children: F.intl.string(e),
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
    eM = n(132198),
    eH = n(176890);
function ew(e) {
    let { user: t } = e,
        n = e_.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: i, ...s } = (0, eU.cf)([eI.A], () => eI.A.getPendingChanges()),
        l = (0, eg.V7)({ userId: t.id, image: i });
    return (0, r.jsx)("div", {
        className: eH.k,
        children: (0, r.jsx)(eA.A, {
            ...s,
            pendingAvatar: l,
            user: t,
            pendingBadges: [(0, eM._)()],
            canUsePremiumCustomization: n,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
}
var eF = n(933595);
function eG(e) {
    let { user: t, productRecord: n, isClosing: i, isOrbCheckoutModalOpen: s } = e;
    return n.skuId === w.Dp.ORB_PROFILE_BADGE
        ? i || s
            ? null
            : (0, r.jsx)(ew, { user: t })
        : (0, w.EZ)(n.skuId)
          ? (0, r.jsx)(eD, {})
          : (0, r.jsx)(ee.B, { product: n, className: eF.M });
}
let eV = {
    [eo.COLLECTIBLE]: { LeftPreview: Q, Info: ec, RightPreview: eb },
    [eo.BUNDLE]: {
        LeftPreview: Q,
        Info: function (e) {
            let {
                    productRecord: t,
                    productName: n,
                    selectedBundleSlide: i,
                    setSelectedBundleSlide: l,
                    onTrackClick: a,
                } = e,
                c = t.items,
                o = t.bundledProducts,
                u = o?.[i]?.name,
                d = c[i]?.type,
                m = null != d ? (0, I.Dm)(d) : null,
                x = F.intl.string(F.t.cTbdgu),
                E = s.useRef(null),
                h = s.useCallback(
                    (e) => {
                        c.length <= 1 ||
                            ("ArrowLeft" === e.key || "ArrowUp" === e.key
                                ? (e.preventDefault(), l((e) => (e - 1 + c.length) % c.length))
                                : "ArrowRight" === e.key || "ArrowDown" === e.key
                                  ? (e.preventDefault(), l((e) => (e + 1) % c.length))
                                  : "Home" === e.key
                                    ? (e.preventDefault(), l(0))
                                    : "End" === e.key && (e.preventDefault(), l(c.length - 1)));
                    },
                    [c.length, l],
                );
            s.useEffect(() => {
                let e = E.current;
                if (null == e || !e.contains(document.activeElement)) return;
                let t = e.querySelectorAll('[role="radio"]');
                t[i]?.focus();
            }, [i]);
            let f = s.useRef(null);
            return (
                s.useLayoutEffect(() => {
                    null != f.current && ((f.current.tabIndex = -1), f.current.focus());
                }, []),
                (0, r.jsxs)("div", {
                    className: G.Qf,
                    children: [
                        (0, r.jsx)(M.D, { ref: f, variant: "heading-xl/bold", className: G.R_, title: n, children: n }),
                        (0, r.jsx)(U.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: F.intl.format(F.t["1tUCAO"], { count: c.length }),
                        }),
                        (0, r.jsxs)("div", {
                            className: G.hZ,
                            children: [
                                (0, r.jsx)("div", {
                                    className: G.vg,
                                    children: (0, r.jsx)("div", {
                                        ref: E,
                                        className: G.hK,
                                        role: "radiogroup",
                                        "aria-label": x,
                                        tabIndex: -1,
                                        onKeyDown: h,
                                        children: c.map((e, t) => {
                                            let n = o?.[t]?.name ?? e.skuId,
                                                s = o?.[t]?.skuId ?? e.skuId;
                                            return (0, r.jsx)(
                                                K,
                                                {
                                                    item: e,
                                                    index: t,
                                                    isSelected: t === i,
                                                    setSelected: l,
                                                    label: n,
                                                    trackedSkuId: s,
                                                    onTrackClick: a,
                                                },
                                                e.skuId,
                                            );
                                        }),
                                    }),
                                }),
                                null != u && (0, r.jsx)(V, { name: u, typeLabel: m }),
                            ],
                        }),
                    ],
                })
            );
        },
        RightPreview: eb,
    },
    [eo.EXTERNAL_ORB_BADGE]: { LeftPreview: et, Info: ec, RightPreview: eG },
    [eo.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: et, Info: ec, RightPreview: eG },
    [eo.EXTERNAL_GENERIC]: { LeftPreview: et, Info: ec, RightPreview: eG },
};
function ez(e) {
    var t;
    return eV[
        ((t = e),
        (0, w.pQ)(t.skuId)
            ? t.skuId === w.Dp.ORB_PROFILE_BADGE
                ? "EXTERNAL_ORB_BADGE"
                : (0, w.EZ)(t.skuId)
                  ? "EXTERNAL_FRACTIONAL_NITRO"
                  : "EXTERNAL_GENERIC"
            : (0, I.aw)(t)
              ? "BUNDLE"
              : "COLLECTIBLE")
    ];
}
var eK = n(13875),
    eW = n(629042),
    e$ = n(110629),
    eX = n(268959),
    eY = n(866665),
    eq = n(508770),
    eZ = n(278416);
let eJ = (e) => {
    let { promotion: t } = e;
    return (0, r.jsx)(eY.m, {
        position: "top",
        asContainer: !0,
        text: F.intl.formatToPlainString(F.t.cNtuKF, { offerName: t.displayName }),
        children: (0, r.jsx)(eq.E, { type: { text: F.intl.string(F.t["nb5PC/"]) }, variant: "expressive", icon: eZ.g }),
    });
};
var eQ = n(609225);
function e0(e) {
    let t,
        { productRecord: n, selectedProduct: i, selectedBundleSlide: s } = e,
        l = (0, eK.Do)("CollectiblesShopProductDetailsModal") && i.type === L.R.PROFILE_FRAME,
        a = (0, eW.SV)(i),
        c = n.type === L.R.BUNDLE ? (n.items[s] ?? n.items[0]) : void 0,
        o =
            null != c &&
            !n.hideBadge &&
            null == n.badgeOverride &&
            (0, k.JQ)({ skuId: c.skuId, type: c.type, items: [c] });
    return (
        (t = l
            ? (0, r.jsx)(e$.A, { location: "CollectiblesShopProductDetailsModal" })
            : o
              ? (0, r.jsx)(eX.s, {})
              : (0, r.jsx)(eX.A, { skuId: n.skuId })),
        (0, r.jsxs)("div", { className: eQ.N, children: [t, null != a && (0, r.jsx)(eJ, { promotion: a })] })
    );
}
var e1 = n(462887),
    e2 = n(821609),
    e7 = n(318254),
    e3 = n(825484),
    e6 = n(331322),
    e4 = n(736653),
    e9 = n(44120),
    e5 = n(465794),
    e8 = n(757036),
    te = n(761705),
    tt = n(580630),
    tn = n(4227),
    ti = n(940980),
    tr = n(466459),
    ts = n(395068),
    tl = n(885574),
    ta = n(847927);
function tc(e) {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, r.jsx)(eY.m, {
              position: "top",
              align: "left",
              text: F.intl.string(F.t.y1VWkZ),
              children: (0, r.jsxs)("div", {
                  className: B()(ta.GX, t),
                  children: [
                      (0, r.jsx)("span", {
                          className: ta.P0,
                          children: (0, r.jsx)(tl.m, { size: "md", color: "currentColor", className: ta.G }),
                      }),
                      (0, r.jsx)(U.E, { variant: "text-md/semibold", children: F.intl.string(F.t.BEjTij) }),
                  ],
              }),
          })
        : (0, r.jsx)(U.E, { variant: "text-md/semibold", className: t, children: F.intl.string(F.t["6cfuDj"]) });
}
var to = n(878112),
    tu = n(572595),
    td = n(206835),
    tm = n(450481);
let tx = function (e) {
    let { product: t, onSuccess: n, onTrackClick: i } = e,
        { handleUseNow: s, isApplying: l, canUseNow: a } = (0, tm.p)({ product: t, onSuccess: n }),
        c = (0, td.A)();
    return a
        ? (0, r.jsx)(e2.$, {
              variant: "primary",
              onClick: () => {
                  i?.(w.sH.USE_NOW), s();
              },
              loading: l,
              text: F.intl.string(F.t.MAS7uK),
              fullWidth: !0,
          })
        : (0, r.jsx)(e2.$, {
              variant: "primary",
              onClick: () => {
                  i?.(w.sH.EDIT_PROFILE), c(), n?.();
              },
              text: F.intl.string(F.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var tE = n(770948);
let th = function (e) {
    let { analyticsLocations: t, children: n } = e;
    return (0, r.jsx)(E.f5, {
        value: [...t, x.A.PROFILE_FRAMES_EA_MARKETING],
        children: (0, r.jsxs)("div", {
            className: tE.k,
            children: [
                (0, r.jsx)(U.E, {
                    variant: "text-xs/semibold",
                    color: "text-strong",
                    children: F.intl.format(F.t["3cglst"], {
                        articleURL: en.A.getArticleURL(j.MVz.SHOP_FRAMES_EARLY_ACCESS),
                    }),
                }),
                n,
            ],
        }),
    });
};
var tf = n(561769),
    tp = n(140735),
    tR = n(273267);
function tv(e) {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: s = "heading-md/semibold",
        } = e,
        l = (0, tt.RS)(t, n);
    return (0, r.jsxs)(U.E, {
        variant: s,
        className: B()(tR.v, i),
        children: [
            (0, r.jsx)(tp.A, { children: F.intl.format(F.t["2CEGln"], { price: l }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: l }),
        ],
    });
}
var tN = n(219103),
    tA = n(794231);
function tg(e) {
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
        d = (0, I.WD)(t, { hasShopDiscount: n, discount: s });
    if (null == d) return null;
    let { defaultPrice: m, showDefaultPriceOnly: x } = d;
    if (x)
        return (0, r.jsx)("div", {
            className: B()(tA.kG, l),
            children: (0, r.jsx)(tN.x, { priceAmount: m.amount, priceCurrency: m.currency }),
        });
    let { showDiscountPrice: E, originalPrice: h, finalPrice: f } = d;
    return (0, r.jsxs)("div", {
        className: B()(tA.kG, l),
        children: [
            c ? null : (0, r.jsx)(tv, { price: h, className: tA.q9 }),
            (0, r.jsx)(tN.x, {
                priceAmount: f.amount,
                priceCurrency: f.currency,
                discount: s,
                className: B()({ [tA.q9]: null == a }),
                discountIconConfig: E && null != o ? { displayMode: o, source: i ?? I.D0.NITRO, size: u } : void 0,
                discountOfferAmount: a,
            }),
        ],
    });
}
var tI = n(403581),
    t_ = n(532794),
    tC = n(202541),
    tj = n(868534);
function tk(e) {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: i } = (0, E.Ay)(),
        l = s.useRef(null);
    return (0, r.jsx)(D.D, {
        className: tj.F,
        innerRef: l,
        onClick: () => {
            n?.(w.sH.SUBSCRIBE_NOW), (0, t_.A)({ subscriptionTier: tC.pe.TIER_2, analyticsLocations: i, returnRef: l });
        },
        children: t,
    });
}
var tT = n(25537);
function tO(e) {
    let { product: t, onTrackClick: n } = e,
        i = (0, I.yt)(t, j.lid.PREMIUM_TIER_2);
    if (null == i) return null;
    let s = (0, tt.RS)(i.amount, i.currency);
    return (0, r.jsxs)("div", {
        className: tT.k,
        children: [
            (0, r.jsx)(eY.m, {
                text: F.intl.string(F.t.MPFyJ5),
                "aria-label": F.intl.string(F.t.X3Ekj8),
                children: (0, r.jsx)(tI.t, { size: "md", color: "currentColor", className: tT.o }),
            }),
            (0, r.jsx)(U.E, {
                variant: "text-xs/medium",
                children: F.intl.format(F.t.Sv8iic, {
                    price: s,
                    subscribeNowHook: (e) => (0, r.jsx)(tk, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
var tL = n(818348),
    tb = n(224506);
function tP(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: i, discount: s } = e,
        l = n ? F.intl.string(F.t.wu4gyV) : F.intl.string(F.t.eFNRzU),
        a = n || !i;
    return (0, r.jsxs)("div", {
        className: tb.eg,
        children: [
            (0, r.jsx)("div", {
                className: tb.zR,
                children: (0, r.jsx)(U.E, { variant: "text-xs/normal", className: a ? tb.r9 : void 0, children: l }),
            }),
            (0, r.jsx)(tN.x, {
                priceAmount: t.amount,
                priceCurrency: t.currency,
                discount: s,
                className: a ? tb.r9 : void 0,
            }),
        ],
    });
}
function ty(e) {
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
        : t[0].currency === tL.Yr.DISCORD_ORB
          ? (0, r.jsx)(tP, { orbPrice: t[0], isProductDisabled: o, hasSufficientOrbs: a, discount: s })
          : (0, r.jsxs)("div", {
                className: tb.eg,
                children: [
                    (0, r.jsxs)("div", {
                        className: tb.pw,
                        children: [
                            (0, r.jsx)(tg, {
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
                        t[1].currency === tL.Yr.DISCORD_ORB &&
                        (0, r.jsx)(tN.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: o || !a ? tb.r9 : void 0,
                        }),
                ],
            });
}
var tS = n(525723),
    tB = n(347722),
    tD = n(57020),
    tU = n(61750),
    tM = n(727205);
function tH(e) {
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
            onClose: E,
            onTrackClick: h,
        } = e,
        { cardId: f, sessionId: R, tilePosition: v } = (0, A.uM)() ?? {},
        g = (0, e8.L)(tC.PremiumTypes.TIER_2),
        _ = (0, I.xM)(t),
        C = (0, eK.Do)("CollectiblesShopProductDetailsModal") && i.type === L.R.PROFILE_FRAME,
        k = e_.Ay.canUseShopDiscounts(t) || C,
        T = (0, eW.VZ)(i),
        O = (0, tr.h)(n),
        { isPurchased: b, isPartiallyOwnedBundle: P } = (0, tr.h)(i),
        { isDisabled: y } = (0, er.I)(i.skuId),
        S = (0, I.Zu)({ product: i, isPartiallyOwnedBundle: P, isPurchased: b }),
        D = (0, u.bG)([tn.A], () => tn.A.isClaiming === i?.skuId),
        M = (0, e4.Ay)(),
        H = (0, e1.M)(M),
        G = (0, I.G0)(i),
        V = (0, I.yt)(i, j.lid.DEFAULT),
        z = V?.amount === 0,
        K = (0, tB.X)(i),
        W = (0, tS.V_)(n),
        $ = null != W,
        X = (0, ti.W)("CollectiblesShopProductDetailsModal"),
        Y = c === w.G2.ORBS && a ? tf.Hi.ORBS : X ? tf.Hi.FIAT : void 0,
        { checkoutEligiblePrices: q, hasSufficientOrbs: Z } = (0, tD.F)({
            product: i,
            hasShopDiscount: k,
            hasDiscountOffer: $,
            prioritizedCurrency: Y,
        }),
        J = s.useMemo(() => (0, I.fT)(i, k, q[0]?.currency), [i, k, q]),
        Q = (0, ts.A)({ location: "CollectiblesShopProductDetailsModal", product: i }),
        ee = s.useMemo(() => q.some((e) => e.currency === tL.Yr.DISCORD_ORB), [q]);
    (0, te.W)({ disableFetch: !ee });
    let et = s.useCallback(() => {
        h(w.sH.BUY_WITH_FIAT),
            (0, e9.A)({
                skuId: i.skuId,
                analyticsLocations: m,
                discoverySessionId: R,
                onClose: (e) => (e ? E() : (0, tL.tE)()),
            });
    }, [m, E, i.skuId, h, R]);
    function en(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = (0, r.jsx)(e5.A, {
                subscriptionTier: tC.pe.TIER_2,
                fullWidth: !0,
                buttonTextOverride: e,
                onClick: () => {
                    h(w.sH.UNLOCK_WITH_NITRO), (0, tu.M)();
                },
                onSubscribeModalClose: () => {
                    (0, tu.t)({
                        product: n,
                        category: l,
                        shouldCheckoutWithOrbs: a,
                        returnRef: x,
                        analyticsLocations: m,
                        tab: c,
                        giftRecipient: o,
                        giftingOrigin: d,
                        cardId: f,
                        sessionId: R,
                        tilePosition: v,
                    });
                },
            });
        return t ? (0, r.jsx)(th, { analyticsLocations: m, children: i }) : i;
    }
    return (0, r.jsxs)("div", {
        className: tM.iw,
        children: [
            O.isPurchased || O.isPartiallyOwnedBundle
                ? (0, r.jsx)(tc, { className: tM.On, isPartiallyPurchased: P })
                : G
                  ? (0, r.jsxs)("div", {
                        className: tM.pq,
                        children: [
                            (0, r.jsx)(U.E, { variant: "text-md/semibold", children: F.intl.string(F.t.rt69oo) }),
                            !b &&
                                (0, r.jsx)(U.E, {
                                    className: B()(tM.ed, !H && tM.un),
                                    variant: "text-xxs/normal",
                                    children: F.intl.string(F.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, r.jsx)(ty, {
                        prices: q,
                        product: i,
                        hasShopDiscount: k,
                        discountSource: _,
                        discount: J,
                        hasSufficientOrbs: Z,
                        isProductDisabled: y,
                        discountOfferAmount: W,
                        onTrackClick: h,
                    }),
            (0, r.jsx)(e6.B, {
                direction: "vertical",
                gap: 8,
                children:
                    !G || g || z
                        ? S
                            ? b
                                ? K
                                    ? (0, r.jsxs)(e3.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, r.jsx)(tx, { product: i, onSuccess: E, onTrackClick: h }),
                                              (0, r.jsx)(to.A, {
                                                  primary: !0,
                                                  product: i,
                                                  onSuccess: E,
                                                  giftRecipient: o,
                                                  giftingOrigin: d,
                                                  onTrackClick: h,
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(tx, { product: i, onSuccess: E, onTrackClick: h })
                                : Q
                                  ? en(F.intl.string(F.t["9wfL34"]), !0)
                                  : G
                                    ? (0, r.jsx)(e2.$, {
                                          loading: D,
                                          loadingStartedLabel: F.intl.string(F.t["TYw+9s"]),
                                          loadingFinishedLabel: F.intl.string(F.t.Pg1UP5),
                                          onClick: async () => {
                                              h(w.sH.ADD_TO_COLLECTION),
                                                  await (0, N.iJ)(i.skuId),
                                                  E(),
                                                  (0, tU.A)({
                                                      product: i,
                                                      analyticsLocations: m,
                                                      purchaseType: w.gs.PREMIUM_PURCHASE,
                                                  });
                                          },
                                          text: F.intl.string(F.t.zp6caO),
                                          fullWidth: !0,
                                      })
                                    : (0, r.jsx)(r.Fragment, {
                                          children: q.map((e, t) => {
                                              let n,
                                                  l,
                                                  a,
                                                  c,
                                                  u,
                                                  x = 0 === t,
                                                  f =
                                                      e.currency === tL.Yr.DISCORD_ORB
                                                          ? ((n = y
                                                                ? F.intl.string(F.t.cTdr3x)
                                                                : F.intl.string(F.t.zqh7ZM)),
                                                            (l = !Z || y),
                                                            (a = F.intl.formatToPlainString(F.t.yi41qQ, {
                                                                orbPrice: e.amount,
                                                            })),
                                                            (c = l ? `${a}, ${n}` : a),
                                                            (0, r.jsx)(eY.m, {
                                                                position: "top",
                                                                text: n,
                                                                shouldShow: l,
                                                                "aria-label": !1,
                                                                children: (0, r.jsx)(e2.$, {
                                                                    variant: x ? "primary" : "secondary",
                                                                    onClick: function () {
                                                                        h(w.sH.BUY_WITH_ORBS),
                                                                            (0, p.B4)({
                                                                                skuId: i.skuId,
                                                                                onComplete: (e) => {
                                                                                    (0, N.gB)(),
                                                                                        E(),
                                                                                        (0, tU.A)({
                                                                                            product: i,
                                                                                            analyticsLocations: m,
                                                                                            itemConsumed:
                                                                                                e?.entitlements?.[0]
                                                                                                    ?.consumed,
                                                                                            purchaseType: w.gs.ORB,
                                                                                        });
                                                                                },
                                                                                analyticsLocations: m,
                                                                                discoverySessionId: R,
                                                                            });
                                                                    },
                                                                    disabled: l,
                                                                    "aria-label": c,
                                                                    text: F.intl.format(F.t.JC15qj, {
                                                                        orbPrice: e.amount,
                                                                        orbIconHook: () =>
                                                                            (0, r.jsx)(e7.C, {
                                                                                className: tM.fN,
                                                                                size: "sm",
                                                                                color: "currentColor",
                                                                            }),
                                                                    }),
                                                                    fullWidth: !0,
                                                                }),
                                                            }))
                                                          : ((u =
                                                                T ??
                                                                ($
                                                                    ? F.intl.formatToPlainString(F.t["5U5RB5"], {
                                                                          discountOfferAmount: W,
                                                                      })
                                                                    : F.intl.formatToPlainString(F.t["cNSL/j"], {
                                                                          price: (0, tt.$g)(e.amount, e.currency),
                                                                      }))),
                                                            (0, r.jsxs)(e3.e, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(e2.$, {
                                                                        variant: x ? "primary" : "secondary",
                                                                        onClick: et,
                                                                        text: u,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    K &&
                                                                        (0, r.jsx)(to.A, {
                                                                            primary: x,
                                                                            product: i,
                                                                            onSuccess: E,
                                                                            giftRecipient: o,
                                                                            giftingOrigin: d,
                                                                            onTrackClick: h,
                                                                        }),
                                                                ],
                                                            }));
                                              return (0, r.jsx)(s.Fragment, { children: f }, e.currency);
                                          }),
                                      })
                            : K
                              ? (0, r.jsx)(to.A, {
                                    primary: !0,
                                    product: i,
                                    onSuccess: E,
                                    fullWidth: !0,
                                    giftRecipient: o,
                                    giftingOrigin: d,
                                    onTrackClick: h,
                                })
                              : null
                        : en(F.intl.string(F.t.sEAnVH)),
            }),
        ],
    });
}
var tw = n(607487);
function tF(e) {
    let { productRecord: t, selectedProduct: n, previewingProduct: i, user: s, selectedBundleSlide: l } = e,
        a = ez(t);
    return (0, r.jsxs)("div", {
        className: B()(tw.wd, { [tw.E7]: null != a.LeftPreview }),
        children: [
            (0, r.jsx)("div", {
                className: tw.dL,
                children: (0, r.jsx)(e0, { productRecord: t, selectedProduct: n, selectedBundleSlide: l }),
            }),
            null != a.LeftPreview &&
                (0, r.jsx)("div", {
                    className: tw._E,
                    children: (0, r.jsx)(a.LeftPreview, {
                        user: s,
                        selectedProduct: n,
                        previewingProduct: i,
                        productRecord: t,
                        selectedBundleSlide: l,
                    }),
                }),
            (0, r.jsx)("div", { className: tw.F_, children: (0, r.jsx)(a.Info, { ...e }) }),
            (0, r.jsx)(tH, { ...e }),
        ],
    });
}
var tG = n(685761),
    tV = n(408278),
    tz = n(972213),
    tK = n(646101);
let tW = (0, n(945810).mj)({
    name: "2026-07-collectibles-pdp-collection-button",
    kind: "user",
    defaultConfig: { showCollectionButton: !1 },
    variations: { 0: { showCollectionButton: !1 }, 1: { showCollectionButton: !0 } },
});
var t$ = n(691540),
    tX = n(857250),
    tY = n(97483),
    tq = n(173936),
    tZ = n(957565),
    tJ = n(573749);
function tQ(e) {
    let { skuId: t, tab: n, onTrackClick: i } = e,
        l = s.useCallback(() => {
            v.default.track(j.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
                i?.(w.sH.COPY_LINK),
                (0, tZ.C)((0, tJ.o)(t, n), () => (0, t$.P0)((0, tX.o)(F.intl.string(F.t["L/PwZf"]), tY.Ck.SUCCESS)));
        }, [t, n, i]);
    return (0, r.jsx)(tV.K, {
        "aria-label": F.intl.string(F.t.WqhZss),
        onClick: l,
        icon: tq.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
var t0 = n(427209),
    t1 = n(192308),
    t2 = n(294454);
function t7(e) {
    let { skuId: t, product: i, productName: l, tab: a, onTrackClick: c } = e,
        o = s.useCallback(() => {
            v.default.track(j.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
                c?.(w.sH.SHARE_LINK),
                ((e) => {
                    let { skuId: t, product: i, productName: s, tab: l, source: a } = e;
                    (0, t1.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("69977"),
                                n.e("14131"),
                                n.e("73883"),
                                n.e("73216"),
                                n.e("69604"),
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
                        { stackingBehavior: "stack", modalKey: t2.aU },
                    );
                })({ skuId: t, product: i, productName: l, tab: a, source: "collectibles-shop-pdp" });
        }, [t, i, l, a, c]);
    return (0, r.jsx)(eY.m, {
        text: F.intl.string(F.t.RDE0Sc),
        ariaHidden: !0,
        children: (0, r.jsx)(tV.K, {
            "aria-label": F.intl.string(F.t.Ej3B3Y),
            onClick: o,
            icon: t0.A,
            variant: "overlay-secondary",
            size: "sm",
        }),
    });
}
var t3 = n(139146),
    t6 = n(60465),
    t4 = n(976860),
    t9 = n(975732),
    t5 = n(50920),
    t8 = n(23161),
    ne = n(668953),
    nt = n(881636),
    nn = n(962437);
function ni(e) {
    let { goPrev: t, goNext: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: nn.Y,
                children: (0, r.jsx)(tV.K, {
                    "aria-label": F.intl.string(F.t["3NdvMK"]),
                    onClick: t,
                    icon: ne.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, r.jsx)("div", {
                className: nn.K,
                children: (0, r.jsx)(tV.K, {
                    "aria-label": F.intl.string(F.t.RYIeOX),
                    onClick: n,
                    icon: nt.u,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
}
var nr = n(343601);
function ns(e) {
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
            tab: E,
            onClose: h,
            onTrackClick: f,
        } = e,
        p = ez(n),
        R = (0, tK.x)("CollectiblesShopProductDetailsModal"),
        N = (0, I.aw)(l),
        g = N ? l.items.length : 0,
        _ = tW.useConfig({ location: "CollectiblesShopProductDetailsModal" }).showCollectionButton,
        C = (function () {
            let e = (0, t5.a)("CollectiblesPdpNavigateToCollection"),
                { sessionId: t } = (0, A.uM)() ?? {},
                n = (0, t8.v)((e) => e.reset);
            return s.useCallback(
                (i, r) => {
                    if (
                        (v.default.track(j.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: t,
                            sku_id: i.skuId,
                            cta_name: r,
                        }),
                        (0, t9.closeUserProfileModal)(),
                        (0, t6.p)(),
                        e && !0 !== i.isOrbsExclusive)
                    )
                        return void (0, t4.pX)(j.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(i.skuId));
                    n();
                    let s = !0 === i.isOrbsExclusive ? w.G2.ORBS : w.G2.CATALOG;
                    (0, t4.pX)(`${j.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)}&${w.P1}=${i.skuId}`);
                },
                [e, t, n],
            );
        })(),
        k = s.useCallback(() => {
            f(w.sH.GO_TO_COLLECTION), h(), C(x, "go_to_collection_button");
        }, [x, h, f, C]),
        O = s.useCallback(() => {
            g <= 1 || o((e) => (e - 1 + g) % g);
        }, [g, o]),
        b = s.useCallback(() => {
            g <= 1 || o((e) => (e + 1) % g);
        }, [g, o]),
        P = s.useCallback(
            (e) => {
                if (g <= 1) return;
                let t = e.target;
                "INPUT" === t.tagName ||
                    "TEXTAREA" === t.tagName ||
                    t.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), O())
                        : "ArrowRight" === e.key && (e.preventDefault(), b()));
            },
            [g, O, b],
        ),
        y = s.useCallback(() => {
            f(w.sH.CLOSE_DETAIL), h();
        }, [f, h]),
        S = s.useRef(null),
        D = s.useRef(!0);
    return (
        s.useLayoutEffect(() => {
            if (D.current) {
                D.current = !1;
                return;
            }
            let e = S.current;
            null != e && ((e.style.animation = "none"), e.offsetHeight, (e.style.animation = ""));
        }, [c]),
        (0, r.jsxs)("div", {
            className: B()(nr.i1, (0, w.EZ)(l.skuId) ? nr.bF : l.type === L.R.AVATAR_DECORATION ? nr.Jq : nr.eF),
            style: null != m ? { backgroundImage: `url(${m})` } : void 0,
            onKeyDown: P,
            children: [
                (R || _) &&
                    (0, r.jsx)("div", {
                        className: nr.GV,
                        children: (0, r.jsx)(eY.m, {
                            text: F.intl.string(F.t["Hr/q/6"]),
                            children: (0, r.jsx)(e2.$, {
                                variant: "overlay-secondary",
                                size: "sm",
                                icon: tG.f,
                                text: x.name,
                                onClick: k,
                            }),
                        }),
                    }),
                (0, r.jsx)("div", {
                    className: nr.KR,
                    ref: S,
                    children: (0, r.jsx)(p.RightPreview, {
                        user: t,
                        productRecord: n,
                        selectedProduct: l,
                        previewingProduct: i,
                        selectedBundleSlide: c,
                        isClosing: u,
                        isOrbCheckoutModalOpen: d,
                    }),
                }),
                N && g > 1 && (0, r.jsx)(ni, { goPrev: O, goNext: b }),
                (0, r.jsxs)("div", {
                    className: nr.VG,
                    children: [
                        (0, r.jsx)(t3.R, {
                            product: n,
                            selectedVariantIndex: a,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: f,
                        }),
                        R
                            ? (0, r.jsx)(t7, {
                                  skuId: l.skuId,
                                  product: l,
                                  productName: (0, T.VG)(l),
                                  tab: E,
                                  onTrackClick: f,
                              })
                            : (0, r.jsx)(tQ, { skuId: l.skuId, tab: E, onTrackClick: f }),
                        (0, r.jsx)(tV.K, {
                            "aria-label": F.intl.string(F.t.cpT0Cq),
                            onClick: y,
                            icon: tz.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            ],
        })
    );
}
var nl = n(118342);
let na = function (e) {
    let {
            transitionState: t,
            onClose: n,
            product: i,
            category: l,
            returnRef: L,
            analyticsSource: S,
            analyticsLocations: B,
            shouldCheckoutWithOrbs: D,
            tab: U,
            giftRecipient: M,
            giftingOrigin: H,
        } = e,
        w = (0, u.bG)([R.default], () => R.default.getCurrentUser()),
        F = (0, y.f)(i),
        { previewingVariantIndex: G } = F,
        V = (0, g.Q)(i),
        z = b(i, G),
        K = (0, k.rb)(i, V);
    a()(null != K, "Selected product should not be null");
    let { analyticsLocations: W } = (0, E.Ay)([...B, x.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, O.Yr)(K.skuId);
    let $ = (0, P.U1)(l),
        [X, Y] = s.useState(0);
    s.useEffect(() => {
        null != w && (0, f.A)(w.id, w.getAvatarURL(void 0, 80));
    }, [w]);
    let q = s.useMemo(() => (0, I.V6)(i.type, i.skuId), [i.type, i.skuId]);
    s.useEffect(() => {
        v.default.track(j.HAw.OPEN_MODAL, {
            type: j.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
            source: S,
            location_stack: W,
            sku_id: K.skuId,
            product_type: q,
        }),
            (0, N.RD)(K.skuId);
    }, [S, W, K.skuId, q]);
    let { cardId: Z, sessionId: J, tilePosition: Q } = (0, A.uM)() ?? {},
        ee = s.useMemo(() => (0, k.v8)(i), [i]),
        et = (function (e) {
            let { skuId: t, productSkuIds: n, analyticsLocations: i } = e,
                { cardId: r, sessionId: l } = (0, A.uM)() ?? {},
                a = (0, C.o)(),
                c = (0, I.xM)(a);
            return s.useCallback(
                (e, s) => {
                    v.default.track(j.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                        sku_id: s ?? t,
                        cta: e,
                        shop_session_id: l,
                        card_id: r,
                        product_sku_ids: n,
                        location_stack: i,
                        discount_source: (0, I.b_)(c),
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
    let en = (0, p.o6)(),
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
            selectedBundleSlide: X,
            setSelectedBundleSlide: Y,
            tab: U,
            shouldCheckoutWithOrbs: D,
            giftRecipient: M?.id !== w.id ? M : void 0,
            giftingOrigin: M?.id !== w.id ? H : void 0,
            analyticsLocations: W,
            returnRef: L,
            onClose: n,
            onTrackClick: et,
        };
    return (0, r.jsx)(E.f5, {
        value: W,
        children: (0, r.jsx)(m.d, {
            returnRef: L,
            transitionState: t,
            onClose: n,
            size: "xl",
            paddingSize: "sm",
            "aria-label": es,
            children: (0, r.jsx)("div", {
                className: nl.C,
                children: (0, r.jsxs)("div", {
                    className: nl.j,
                    children: [
                        (0, r.jsx)(tF, { ...el }),
                        (0, r.jsx)(ns, { ...el, isClosing: ei, isOrbCheckoutModalOpen: en, pdpBackground: $ }),
                    ],
                }),
            }),
        }),
    });
};
