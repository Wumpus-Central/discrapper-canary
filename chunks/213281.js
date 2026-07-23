n.d(t, { default: () => nr });
var i,
    s = n(627968),
    r = n(64700),
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
    L = n(177366),
    O = n(575593);
function b(e, t) {
    return e.type === O.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e;
}
var y = n(212407),
    P = n(935094),
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
    return (0, s.jsxs)(U.E, {
        variant: "text-sm/medium",
        className: G.mC,
        "aria-live": "polite",
        children: [
            (0, s.jsx)("span", { className: G.kx, children: t }),
            null != n && (0, s.jsx)("span", { className: G.FP, children: n }),
        ],
    });
}
let z = { [O.R.AVATAR_DECORATION]: !0, [O.R.PROFILE_FRAME]: !0 };
function K(e) {
    let { item: t, index: n, isSelected: i, setSelected: l, label: a, trackedSkuId: c, onTrackClick: o } = e,
        u = r.useMemo(() => ({ skuId: t.skuId, type: t.type, items: [t] }), [t]),
        d = r.useCallback(() => {
            o(w.sH.BUNDLE_VIEW_PRODUCT, c), l(n);
        }, [o, c, l, n]),
        m = !0 === z[t.type];
    return (0, s.jsx)(D.D, {
        tag: "div",
        role: "radio",
        "aria-checked": i,
        tabIndex: i ? 0 : -1,
        className: B()(G.xn, { [G.Y4]: i, [G.u8]: m }),
        onClick: d,
        "aria-label": a,
        children: (0, s.jsx)("div", { className: G.Yf, children: (0, s.jsx)(H.O, { product: u }) }),
    });
}
var W = n(442759),
    $ = n(344346),
    X = n(139136),
    Y = n(395744),
    q = n(929283),
    Z = n(387417);
function J(e) {
    let { item: t, user: n, bundleFirstAvatarDecoration: i, isBundle: r } = e;
    switch (t.type) {
        case O.R.AVATAR_DECORATION:
            return (0, s.jsx)("div", {
                className: Z.h1,
                children: (0, s.jsx)(q.i, { user: n, item: t, isHighlighted: !0 }),
            });
        case O.R.PROFILE_EFFECT:
            return (0, s.jsx)("div", {
                className: r ? Z.sm : Z.VY,
                children: (0, s.jsx)(X.A, {
                    skuId: t.skuId,
                    removeSetHeight: !0,
                    isHighlighted: !0,
                    delayProfileEffectIntro: !0,
                }),
            });
        case O.R.PROFILE_FRAME:
            return (0, s.jsx)("div", { className: r ? Z.ob : Z.fE, children: (0, s.jsx)(Y.A, { frame: t }) });
        case O.R.NAMEPLATE:
            return (0, s.jsx)("div", {
                className: Z.Dz,
                children: (0, s.jsx)($.A, {
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
    let { user: t, selectedProduct: n, previewingProduct: i, selectedBundleSlide: r } = e,
        l = i ?? n,
        { firstAvatarDecoration: a } = (0, W.f5)(l),
        c = l.items[r] ?? l.items[0];
    return null == c
        ? null
        : (0, s.jsx)(J, { item: c, user: t, bundleFirstAvatarDecoration: a, isBundle: (0, I.aw)(l) });
}
var ee = n(846957);
function et(e) {
    let { selectedProduct: t, previewingProduct: n } = e;
    return (0, s.jsx)(ee.B, { product: n ?? t });
}
var en = n(975571);
function ei(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t) return F.intl.formatToPlainString(F.t["/0Yndu"], { num: e.bundledProducts?.length });
    let n = e.bundledProducts ?? [],
        i = [],
        s = !1;
    for (let e of n)
        switch (e.type) {
            case O.R.AVATAR_DECORATION:
                i.push(F.intl.formatToPlainString(F.t.Ntv9Jt, { itemName: e.name }));
                break;
            case O.R.PROFILE_EFFECT:
                i.push(F.intl.formatToPlainString(F.t["3Y8q7a"], { itemName: e.name }));
                break;
            case O.R.NAMEPLATE:
                i.push(F.intl.formatToPlainString(F.t["2keXky"], { itemName: e.name })), (s = !0);
        }
    if (s) {
        let e = i.join(", ").replace(/, ([^,]*)$/, " & $1");
        return F.intl.formatToPlainString(F.t.Ofrqj6, { joinedItems: e });
    }
    let r = i.join(" & ");
    return F.intl.formatToPlainString(F.t.Ofrqj6, { joinedItems: r });
}
n(321073);
var es = n(740076),
    er = n(661847),
    el = n(186077);
function ea(e) {
    let { skuId: t } = e;
    return (0, w.EZ)(t)
        ? (0, s.jsx)(U.E, {
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
            return (0, r.useMemo)(() => {
                if (null != e && null != e.summary && "" !== e.summary) {
                    if (e.type === O.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                        let n = ei(e, t);
                        return e.summary.replace("{joinedItems}", n);
                    }
                    return e.summary;
                }
                switch (e?.type) {
                    case O.R.AVATAR_DECORATION:
                        return F.intl.string(F.t["3lv7q2"]);
                    case O.R.PROFILE_EFFECT:
                        return F.intl.string(F.t.VhJL72);
                    case O.R.NAMEPLATE:
                        return F.intl.string(F.t.ik37EZ);
                    case O.R.PROFILE_FRAME:
                        return F.intl.string(F.t.fWzWPp);
                    case O.R.BUNDLE:
                        return ei(e, t);
                    default:
                        return "";
                }
            }, [e, t]);
        })(u, !1),
        { disabledReason: m } = (0, es.I)(i.skuId),
        x = (0, g.Q)(t),
        E = (0, k.B1)(t),
        h = E ? t.variants[a ?? x] : null,
        f = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            null != f.current && ((f.current.tabIndex = -1), f.current.focus());
        }, []),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: el.sn,
                    children: [
                        (0, s.jsx)(M.D, { ref: f, variant: "heading-xl/bold", className: el.R_, children: n }),
                        (0, s.jsx)(U.E, { variant: "text-sm/normal", children: d }),
                        (0, s.jsx)(ea, { skuId: u.skuId }),
                        null !== m && (0, s.jsx)(U.E, { variant: "text-xs/normal", className: el.H$, children: m }),
                    ],
                }),
                E &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != h &&
                                (0, s.jsx)(U.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: el.a9,
                                    lineClamp: 1,
                                    children: F.intl.format(F.t.EcaRWt, {
                                        value: (0, s.jsx)("span", { className: el.I8, children: h.variantLabel }),
                                    }),
                                }),
                            (0, s.jsx)("div", {
                                className: el._x,
                                children: (0, s.jsx)(er.A, {
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
    return (0, s.jsx)("div", {
        className: ej.mV,
        children: (0, s.jsx)(ef.A, {
            avatar: (0, s.jsx)(eu.eu, {
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
        r = (0, eC.Ov)();
    return (0, s.jsx)("div", {
        className: ej.nJ,
        role: "img",
        "aria-label": F.intl.formatToPlainString(F.t["95pCSf"], { a11y_text: n.label }),
        children: (0, s.jsxs)(em.M, {
            children: [
                (0, s.jsx)(ek, { user: r.mallow, innerClassName: ej.ab }),
                (0, s.jsxs)(U.E, {
                    variant: "text-sm/semibold",
                    className: ej.OS,
                    children: [F.intl.string(F.t["yzW/fZ"]), " - 3"],
                }),
                (0, s.jsx)(ek, { user: r.phibi, innerClassName: ej.e9 }),
                (0, s.jsx)("div", {
                    className: ej.mV,
                    children: (0, s.jsx)($.A, {
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
                (0, s.jsx)(ek, { user: r.locke, innerClassName: ej.e9 }),
                (0, s.jsxs)(U.E, {
                    variant: "text-sm/semibold",
                    className: ej.OS,
                    children: [F.intl.string(F.t["NG43/6"]), " - 12"],
                }),
                (0, s.jsx)(ek, { user: r.boom, innerClassName: ej.bD }),
                (0, s.jsx)(ek, { user: r.cherry, innerClassName: ej.bD }),
            ],
        }),
    });
}
function eL(e) {
    let { user: t, avatarDecoration: n } = e,
        i = (function (e) {
            let { author: t } = e;
            return (0, ep.rh)({
                ...(0, eR.Ay)({ author: t, channelId: "1337", content: F.intl.string(F.t.d5YwK5) }),
                state: j.cmJ.SENT,
                id: "0",
            });
        })({ author: t });
    return (0, s.jsx)("div", {
        role: "img",
        "aria-label": F.intl.string(F.t["TN+ZvB"]),
        children: (0, s.jsx)(em.M, {
            children: (0, s.jsxs)(ex.Z, {
                className: ej.f7,
                outline: !0,
                "aria-hidden": !0,
                children: [
                    (0, s.jsx)(
                        eN.A,
                        { className: ej.G5, author: (0, ev.p_)(i), message: i, avatarDecorationOverride: n ?? null },
                        i.id,
                    ),
                    (0, s.jsxs)("div", {
                        className: ej.lG,
                        children: [
                            (0, s.jsx)(eE.U, { size: "md", color: "currentColor", className: ej.hq }),
                            (0, s.jsx)(eh.n, { size: "md", color: "currentColor", className: ej.hq }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function eO(e) {
    let { product: t, user: n, activeBundleSlide: i } = e,
        r = e_.Ay.canUsePremiumProfileCustomization(n),
        { pendingAvatar: l, ...a } = (0, u.cf)([eI.A], () => eI.A.getPendingChanges()),
        c = (0, eg.V7)({ userId: n.id, image: l }),
        o = t.type === O.R.BUNDLE ? t.items[i ?? 0] : void 0,
        d = o?.type ?? t.type,
        m = d === O.R.AVATAR_DECORATION,
        x = d === O.R.PROFILE_EFFECT,
        { firstAvatarDecoration: E, firstProfileEffect: h, firstNameplate: f, firstProfileFrame: p } = (0, W.f5)(t),
        R = o?.type === O.R.AVATAR_DECORATION ? o : E,
        v = o?.type === O.R.PROFILE_EFFECT ? o : h,
        N = o?.type === O.R.PROFILE_FRAME ? o : p,
        A = o?.type === O.R.NAMEPLATE ? o : f;
    if (d === O.R.NAMEPLATE && null != A)
        return (0, s.jsx)("div", {
            className: ej.Zj,
            children: (0, s.jsx)(eT, { user: n, nameplate: A, avatarDecoration: R }),
        });
    return (0, s.jsx)("div", {
        className: m ? ej.RA : ej.hZ,
        children: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(eA.A, {
                    ...a,
                    pendingAvatar: c,
                    user: n,
                    canUsePremiumCustomization: r,
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
                m && (0, s.jsx)(eL, { user: n, avatarDecoration: R }),
            ],
        }),
    });
}
function eb(e) {
    let { user: t, selectedProduct: n, previewingProduct: i, selectedBundleSlide: r } = e;
    return (0, s.jsx)(eO, { user: t, product: i ?? n, activeBundleSlide: r });
}
var ey = n(478016),
    eP = n(661531),
    eS = n(224016),
    eB = n(792249);
function eD() {
    let e = [F.t.E1NP2x, F.t.kpMomJ, F.t.xT1Vfn, F.t.myyAEr, F.t.zTk8Ul];
    return (0, s.jsxs)("div", {
        className: eB.kL,
        children: [
            (0, s.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: eB.ym,
            }),
            (0, s.jsx)(eS.A, { color: "white" }),
            (0, s.jsx)("div", {
                className: eB.PX,
                children: e.map((e, t) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: eB.UJ,
                            children: [
                                (0, s.jsx)(ey.U, { color: eP.A.colors.WHITE }),
                                (0, s.jsx)(U.E, {
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
        { pendingAvatar: i, ...r } = (0, eU.cf)([eI.A], () => eI.A.getPendingChanges()),
        l = (0, eg.V7)({ userId: t.id, image: i });
    return (0, s.jsx)("div", {
        className: eH.k,
        children: (0, s.jsx)(eA.A, {
            ...r,
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
    let { user: t, productRecord: n, isClosing: i, isOrbCheckoutModalOpen: r } = e;
    return n.skuId === w.Dp.ORB_PROFILE_BADGE
        ? i || r
            ? null
            : (0, s.jsx)(ew, { user: t })
        : (0, w.EZ)(n.skuId)
          ? (0, s.jsx)(eD, {})
          : (0, s.jsx)(ee.B, { product: n, className: eF.M });
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
                E = r.useRef(null),
                h = r.useCallback(
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
            r.useEffect(() => {
                let e = E.current;
                if (null == e || !e.contains(document.activeElement)) return;
                let t = e.querySelectorAll('[role="radio"]');
                t[i]?.focus();
            }, [i]);
            let f = r.useRef(null);
            return (
                r.useLayoutEffect(() => {
                    null != f.current && ((f.current.tabIndex = -1), f.current.focus());
                }, []),
                (0, s.jsxs)("div", {
                    className: G.Qf,
                    children: [
                        (0, s.jsx)(M.D, { ref: f, variant: "heading-xl/bold", className: G.R_, title: n, children: n }),
                        (0, s.jsx)(U.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: F.intl.format(F.t["1tUCAO"], { count: c.length }),
                        }),
                        (0, s.jsxs)("div", {
                            className: G.hZ,
                            children: [
                                (0, s.jsx)("div", {
                                    className: G.vg,
                                    children: (0, s.jsx)("div", {
                                        ref: E,
                                        className: G.hK,
                                        role: "radiogroup",
                                        "aria-label": x,
                                        tabIndex: -1,
                                        onKeyDown: h,
                                        children: c.map((e, t) => {
                                            let n = o?.[t]?.name ?? e.skuId,
                                                r = o?.[t]?.skuId ?? e.skuId;
                                            return (0, s.jsx)(
                                                K,
                                                {
                                                    item: e,
                                                    index: t,
                                                    isSelected: t === i,
                                                    setSelected: l,
                                                    label: n,
                                                    trackedSkuId: r,
                                                    onTrackClick: a,
                                                },
                                                e.skuId,
                                            );
                                        }),
                                    }),
                                }),
                                null != u && (0, s.jsx)(V, { name: u, typeLabel: m }),
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
    return (0, s.jsx)(eY.m, {
        position: "top",
        asContainer: !0,
        text: F.intl.formatToPlainString(F.t.cNtuKF, { offerName: t.displayName }),
        children: (0, s.jsx)(eq.E, { type: { text: F.intl.string(F.t["nb5PC/"]) }, variant: "expressive", icon: eZ.g }),
    });
};
var eQ = n(609225);
function e0(e) {
    let t,
        { productRecord: n, selectedProduct: i, selectedBundleSlide: r } = e,
        l = (0, eK.Do)("CollectiblesShopProductDetailsModal") && i.type === O.R.PROFILE_FRAME,
        a = (0, eW.SV)(i),
        c = n.type === O.R.BUNDLE ? (n.items[r] ?? n.items[0]) : void 0,
        o =
            null != c &&
            !n.hideBadge &&
            null == n.badgeOverride &&
            (0, k.JQ)({ skuId: c.skuId, type: c.type, items: [c] });
    return (
        (t = l
            ? (0, s.jsx)(e$.A, { location: "CollectiblesShopProductDetailsModal" })
            : o
              ? (0, s.jsx)(eX.s, {})
              : (0, s.jsx)(eX.A, { skuId: n.skuId })),
        (0, s.jsxs)("div", { className: eQ.N, children: [t, null != a && (0, s.jsx)(eJ, { promotion: a })] })
    );
}
var e1 = n(462887),
    e2 = n(821609),
    e7 = n(318254),
    e6 = n(825484),
    e3 = n(331322),
    e4 = n(736653),
    e9 = n(44120),
    e8 = n(465794),
    e5 = n(757036),
    te = n(761705),
    tt = n(580630),
    tn = n(4227),
    ti = n(466459),
    ts = n(395068),
    tr = n(885574),
    tl = n(847927);
function ta(e) {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, s.jsx)(eY.m, {
              position: "top",
              align: "left",
              text: F.intl.string(F.t.y1VWkZ),
              children: (0, s.jsxs)("div", {
                  className: B()(tl.GX, t),
                  children: [
                      (0, s.jsx)("span", {
                          className: tl.P0,
                          children: (0, s.jsx)(tr.m, { size: "md", color: "currentColor", className: tl.G }),
                      }),
                      (0, s.jsx)(U.E, { variant: "text-md/semibold", children: F.intl.string(F.t.BEjTij) }),
                  ],
              }),
          })
        : (0, s.jsx)(U.E, { variant: "text-md/semibold", className: t, children: F.intl.string(F.t["6cfuDj"]) });
}
var tc = n(878112),
    to = n(572595),
    tu = n(206835),
    td = n(450481);
let tm = function (e) {
    let { product: t, onSuccess: n, onTrackClick: i } = e,
        { handleUseNow: r, isApplying: l, canUseNow: a } = (0, td.p)({ product: t, onSuccess: n }),
        c = (0, tu.A)();
    return a
        ? (0, s.jsx)(e2.$, {
              variant: "primary",
              onClick: () => {
                  i?.(w.sH.USE_NOW), r();
              },
              loading: l,
              text: F.intl.string(F.t.MAS7uK),
              fullWidth: !0,
          })
        : (0, s.jsx)(e2.$, {
              variant: "primary",
              onClick: () => {
                  i?.(w.sH.EDIT_PROFILE), c(), n?.();
              },
              text: F.intl.string(F.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var tx = n(770948);
let tE = function (e) {
    let { analyticsLocations: t, children: n } = e;
    return (0, s.jsx)(E.f5, {
        value: [...t, x.A.PROFILE_FRAMES_EA_MARKETING],
        children: (0, s.jsxs)("div", {
            className: tx.k,
            children: [
                (0, s.jsx)(U.E, {
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
var th = n(561769),
    tf = n(140735),
    tp = n(273267);
function tR(e) {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: r = "heading-md/semibold",
        } = e,
        l = (0, tt.RS)(t, n);
    return (0, s.jsxs)(U.E, {
        variant: r,
        className: B()(tp.v, i),
        children: [
            (0, s.jsx)(tf.A, { children: F.intl.format(F.t["2CEGln"], { price: l }) }),
            (0, s.jsx)("span", { "aria-hidden": !0, children: l }),
        ],
    });
}
var tv = n(219103),
    tN = n(794231);
function tA(e) {
    let {
            product: t,
            hasShopDiscount: n,
            discountSource: i,
            discount: r,
            className: l,
            hideStrikethroughPrice: a = !1,
            discountIconDisplayMode: c,
            discountIconSize: o = "md",
        } = e,
        u = (0, I.WD)(t, { hasShopDiscount: n, discount: r });
    if (null == u) return null;
    let { defaultPrice: d, showDefaultPriceOnly: m } = u;
    if (m)
        return (0, s.jsx)("div", {
            className: B()(tN.kG, l),
            children: (0, s.jsx)(tv.x, { priceAmount: d.amount, priceCurrency: d.currency }),
        });
    let { showDiscountPrice: x, originalPrice: E, finalPrice: h } = u;
    return (0, s.jsxs)("div", {
        className: B()(tN.kG, l),
        children: [
            a ? null : (0, s.jsx)(tR, { price: E, className: tN.q9 }),
            (0, s.jsx)(tv.x, {
                priceAmount: h.amount,
                priceCurrency: h.currency,
                discount: r,
                className: tN.q9,
                discountIconConfig: x && null != c ? { displayMode: c, source: i ?? I.D0.NITRO, size: o } : void 0,
            }),
        ],
    });
}
var tg = n(403581),
    tI = n(532794),
    t_ = n(202541),
    tC = n(868534);
function tj(e) {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: i } = (0, E.Ay)(),
        l = r.useRef(null);
    return (0, s.jsx)(D.D, {
        className: tC.F,
        innerRef: l,
        onClick: () => {
            n?.(w.sH.SUBSCRIBE_NOW), (0, tI.A)({ subscriptionTier: t_.pe.TIER_2, analyticsLocations: i, returnRef: l });
        },
        children: t,
    });
}
var tk = n(25537);
function tT(e) {
    let { product: t, onTrackClick: n } = e,
        i = (0, I.yt)(t, j.lid.PREMIUM_TIER_2);
    if (null == i) return null;
    let r = (0, tt.RS)(i.amount, i.currency);
    return (0, s.jsxs)("div", {
        className: tk.k,
        children: [
            (0, s.jsx)(eY.m, {
                text: F.intl.string(F.t.MPFyJ5),
                "aria-label": F.intl.string(F.t.X3Ekj8),
                children: (0, s.jsx)(tg.t, { size: "md", color: "currentColor", className: tk.o }),
            }),
            (0, s.jsx)(U.E, {
                variant: "text-xs/medium",
                children: F.intl.format(F.t.Sv8iic, {
                    price: r,
                    subscribeNowHook: (e) => (0, s.jsx)(tj, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
var tL = n(818348),
    tO = n(224506);
function tb(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: i, discount: r } = e,
        l = n ? F.intl.string(F.t.wu4gyV) : F.intl.string(F.t.eFNRzU),
        a = n || !i;
    return (0, s.jsxs)("div", {
        className: tO.eg,
        children: [
            (0, s.jsx)("div", {
                className: tO.zR,
                children: (0, s.jsx)(U.E, { variant: "text-xs/normal", className: a ? tO.r9 : void 0, children: l }),
            }),
            (0, s.jsx)(tv.x, {
                priceAmount: t.amount,
                priceCurrency: t.currency,
                discount: r,
                className: a ? tO.r9 : void 0,
            }),
        ],
    });
}
function ty(e) {
    let {
        prices: t,
        hasShopDiscount: n,
        discountSource: i,
        discount: r,
        product: l,
        hasSufficientOrbs: a,
        onTrackClick: c,
        isProductDisabled: o,
    } = e;
    return 0 === t.length
        ? null
        : t[0].currency === tL.Yr.DISCORD_ORB
          ? (0, s.jsx)(tb, { orbPrice: t[0], isProductDisabled: o, hasSufficientOrbs: a, discount: r })
          : (0, s.jsxs)("div", {
                className: tO.eg,
                children: [
                    (0, s.jsxs)("div", {
                        className: tO.pw,
                        children: [
                            (0, s.jsx)(tA, {
                                product: l,
                                discount: r,
                                hasShopDiscount: n,
                                discountSource: i,
                                hideStrikethroughPrice: !n,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                            }),
                            n ? null : (0, s.jsx)(tT, { product: l, onTrackClick: c }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === tL.Yr.DISCORD_ORB &&
                        (0, s.jsx)(tv.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: o || !a ? tO.r9 : void 0,
                        }),
                ],
            });
}
var tP = n(347722),
    tS = n(57020),
    tB = n(61750),
    tD = n(727205);
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
            onClose: E,
            onTrackClick: h,
        } = e,
        { cardId: f, sessionId: R, tilePosition: v } = (0, A.uM)() ?? {},
        g = (0, e5.L)(t_.PremiumTypes.TIER_2),
        _ = (0, I.xM)(t),
        C = (0, eK.Do)("CollectiblesShopProductDetailsModal") && i.type === O.R.PROFILE_FRAME,
        k = e_.Ay.canUseShopDiscounts(t) || C,
        T = (0, eW.VZ)(i),
        L = (0, ti.h)(n),
        { isPurchased: b, isPartiallyOwnedBundle: y } = (0, ti.h)(i),
        { isDisabled: P } = (0, es.I)(i.skuId),
        S = (0, I.Zu)({ product: i, isPartiallyOwnedBundle: y, isPurchased: b }),
        D = (0, u.bG)([tn.A], () => tn.A.isClaiming === i?.skuId),
        M = (0, e4.Ay)(),
        H = (0, e1.M)(M),
        G = (0, I.G0)(i),
        V = (0, I.yt)(i, j.lid.DEFAULT),
        z = V?.amount === 0,
        K = (0, tP.X)(i),
        W = c === w.G2.ORBS && a ? th.Hi.ORBS : void 0,
        { checkoutEligiblePrices: $, hasSufficientOrbs: X } = (0, tS.F)({
            product: i,
            hasShopDiscount: k,
            prioritizedCurrency: W,
        }),
        Y = r.useMemo(() => (0, I.fT)(i, k, $[0]?.currency), [i, k, $]),
        q = (0, ts.A)({ location: "CollectiblesShopProductDetailsModal", product: i }),
        Z = r.useMemo(() => $.some((e) => e.currency === tL.Yr.DISCORD_ORB), [$]);
    (0, te.W)({ disableFetch: !Z });
    let J = r.useCallback(() => {
        h(w.sH.BUY_WITH_FIAT),
            (0, e9.A)({
                skuId: i.skuId,
                analyticsLocations: m,
                discoverySessionId: R,
                onClose: (e) => (e ? E() : (0, tL.tE)()),
            });
    }, [m, E, i.skuId, h, R]);
    function Q(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = (0, s.jsx)(e8.A, {
                subscriptionTier: t_.pe.TIER_2,
                fullWidth: !0,
                buttonTextOverride: e,
                onClick: () => {
                    h(w.sH.UNLOCK_WITH_NITRO), (0, to.M)();
                },
                onSubscribeModalClose: () => {
                    (0, to.t)({
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
        return t ? (0, s.jsx)(tE, { analyticsLocations: m, children: i }) : i;
    }
    return (0, s.jsxs)("div", {
        className: tD.iw,
        children: [
            L.isPurchased || L.isPartiallyOwnedBundle
                ? (0, s.jsx)(ta, { className: tD.On, isPartiallyPurchased: y })
                : G
                  ? (0, s.jsxs)("div", {
                        className: tD.pq,
                        children: [
                            (0, s.jsx)(U.E, { variant: "text-md/semibold", children: F.intl.string(F.t.rt69oo) }),
                            !b &&
                                (0, s.jsx)(U.E, {
                                    className: B()(tD.ed, !H && tD.un),
                                    variant: "text-xxs/normal",
                                    children: F.intl.string(F.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, s.jsx)(ty, {
                        prices: $,
                        product: i,
                        hasShopDiscount: k,
                        discountSource: _,
                        discount: Y,
                        hasSufficientOrbs: X,
                        isProductDisabled: P,
                        onTrackClick: h,
                    }),
            (0, s.jsx)(e3.B, {
                direction: "vertical",
                gap: 8,
                children:
                    !G || g || z
                        ? S
                            ? b
                                ? K
                                    ? (0, s.jsxs)(e6.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, s.jsx)(tm, { product: i, onSuccess: E, onTrackClick: h }),
                                              (0, s.jsx)(tc.A, {
                                                  primary: !0,
                                                  product: i,
                                                  onSuccess: E,
                                                  giftRecipient: o,
                                                  giftingOrigin: d,
                                                  onTrackClick: h,
                                              }),
                                          ],
                                      })
                                    : (0, s.jsx)(tm, { product: i, onSuccess: E, onTrackClick: h })
                                : q
                                  ? Q(F.intl.string(F.t["9wfL34"]), !0)
                                  : G
                                    ? (0, s.jsx)(e2.$, {
                                          loading: D,
                                          loadingStartedLabel: F.intl.string(F.t["TYw+9s"]),
                                          loadingFinishedLabel: F.intl.string(F.t.Pg1UP5),
                                          onClick: async () => {
                                              h(w.sH.ADD_TO_COLLECTION),
                                                  await (0, N.iJ)(i.skuId),
                                                  E(),
                                                  (0, tB.A)({
                                                      product: i,
                                                      analyticsLocations: m,
                                                      purchaseType: w.gs.PREMIUM_PURCHASE,
                                                  });
                                          },
                                          text: F.intl.string(F.t.zp6caO),
                                          fullWidth: !0,
                                      })
                                    : (0, s.jsx)(s.Fragment, {
                                          children: $.map((e, t) => {
                                              let n,
                                                  l,
                                                  a,
                                                  c,
                                                  u,
                                                  x = 0 === t,
                                                  f =
                                                      e.currency === tL.Yr.DISCORD_ORB
                                                          ? ((n = P
                                                                ? F.intl.string(F.t.cTdr3x)
                                                                : F.intl.string(F.t.zqh7ZM)),
                                                            (l = !X || P),
                                                            (a = F.intl.formatToPlainString(F.t.yi41qQ, {
                                                                orbPrice: e.amount,
                                                            })),
                                                            (c = l ? `${a}, ${n}` : a),
                                                            (0, s.jsx)(eY.m, {
                                                                position: "top",
                                                                text: n,
                                                                shouldShow: l,
                                                                "aria-label": !1,
                                                                children: (0, s.jsx)(e2.$, {
                                                                    variant: x ? "primary" : "secondary",
                                                                    onClick: function () {
                                                                        h(w.sH.BUY_WITH_ORBS),
                                                                            (0, p.B4)({
                                                                                skuId: i.skuId,
                                                                                onComplete: (e) => {
                                                                                    (0, N.gB)(),
                                                                                        E(),
                                                                                        (0, tB.A)({
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
                                                                            (0, s.jsx)(e7.C, {
                                                                                className: tD.fN,
                                                                                size: "sm",
                                                                                color: "currentColor",
                                                                            }),
                                                                    }),
                                                                    fullWidth: !0,
                                                                }),
                                                            }))
                                                          : ((u =
                                                                T ??
                                                                F.intl.formatToPlainString(F.t["cNSL/j"], {
                                                                    price: (0, tt.$g)(e.amount, e.currency),
                                                                })),
                                                            (0, s.jsxs)(e6.e, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, s.jsx)(e2.$, {
                                                                        variant: x ? "primary" : "secondary",
                                                                        onClick: J,
                                                                        text: u,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    K &&
                                                                        (0, s.jsx)(tc.A, {
                                                                            primary: x,
                                                                            product: i,
                                                                            onSuccess: E,
                                                                            giftRecipient: o,
                                                                            giftingOrigin: d,
                                                                            onTrackClick: h,
                                                                        }),
                                                                ],
                                                            }));
                                              return (0, s.jsx)(r.Fragment, { children: f }, e.currency);
                                          }),
                                      })
                            : K
                              ? (0, s.jsx)(tc.A, {
                                    primary: !0,
                                    product: i,
                                    onSuccess: E,
                                    fullWidth: !0,
                                    giftRecipient: o,
                                    giftingOrigin: d,
                                    onTrackClick: h,
                                })
                              : null
                        : Q(F.intl.string(F.t.sEAnVH)),
            }),
        ],
    });
}
var tM = n(607487);
function tH(e) {
    let { productRecord: t, selectedProduct: n, previewingProduct: i, user: r, selectedBundleSlide: l } = e,
        a = ez(t);
    return (0, s.jsxs)("div", {
        className: B()(tM.wd, { [tM.E7]: null != a.LeftPreview }),
        children: [
            (0, s.jsx)("div", {
                className: tM.dL,
                children: (0, s.jsx)(e0, { productRecord: t, selectedProduct: n, selectedBundleSlide: l }),
            }),
            null != a.LeftPreview &&
                (0, s.jsx)("div", {
                    className: tM._E,
                    children: (0, s.jsx)(a.LeftPreview, {
                        user: r,
                        selectedProduct: n,
                        previewingProduct: i,
                        productRecord: t,
                        selectedBundleSlide: l,
                    }),
                }),
            (0, s.jsx)("div", { className: tM.F_, children: (0, s.jsx)(a.Info, { ...e }) }),
            (0, s.jsx)(tU, { ...e }),
        ],
    });
}
var tw = n(685761),
    tF = n(408278),
    tG = n(972213),
    tV = n(646101);
let tz = (0, n(945810).mj)({
    name: "2026-07-collectibles-pdp-collection-button",
    kind: "user",
    defaultConfig: { showCollectionButton: !1 },
    variations: { 0: { showCollectionButton: !1 }, 1: { showCollectionButton: !0 } },
});
var tK = n(691540),
    tW = n(857250),
    t$ = n(97483),
    tX = n(173936),
    tY = n(957565),
    tq = n(573749);
function tZ(e) {
    let { skuId: t, tab: n, onTrackClick: i } = e,
        l = r.useCallback(() => {
            v.default.track(j.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
                i?.(w.sH.COPY_LINK),
                (0, tY.C)((0, tq.o)(t, n), () => (0, tK.P0)((0, tW.o)(F.intl.string(F.t["L/PwZf"]), t$.Ck.SUCCESS)));
        }, [t, n, i]);
    return (0, s.jsx)(tF.K, {
        "aria-label": F.intl.string(F.t.WqhZss),
        onClick: l,
        icon: tX.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
var tJ = n(427209),
    tQ = n(192308),
    t0 = n(294454);
function t1(e) {
    let { skuId: t, product: i, productName: l, tab: a, onTrackClick: c } = e,
        o = r.useCallback(() => {
            v.default.track(j.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
                c?.(w.sH.SHARE_LINK),
                ((e) => {
                    let { skuId: t, product: i, productName: r, tab: l, source: a } = e;
                    (0, tQ.openModalLazy)(
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
                                (0, s.jsx)(e, { ...n, skuId: t, product: i, productName: r, tab: l, source: a });
                        },
                        { stackingBehavior: "stack", modalKey: t0.aU },
                    );
                })({ skuId: t, product: i, productName: l, tab: a, source: "collectibles-shop-pdp" });
        }, [t, i, l, a, c]);
    return (0, s.jsx)(eY.m, {
        text: F.intl.string(F.t.RDE0Sc),
        ariaHidden: !0,
        children: (0, s.jsx)(tF.K, {
            "aria-label": F.intl.string(F.t.Ej3B3Y),
            onClick: o,
            icon: tJ.A,
            variant: "overlay-secondary",
            size: "sm",
        }),
    });
}
var t2 = n(139146),
    t7 = n(60465),
    t6 = n(976860),
    t3 = n(975732),
    t4 = n(50920),
    t9 = n(23161),
    t8 = n(668953),
    t5 = n(881636),
    ne = n(962437);
function nt(e) {
    let { goPrev: t, goNext: n } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: ne.Y,
                children: (0, s.jsx)(tF.K, {
                    "aria-label": F.intl.string(F.t["3NdvMK"]),
                    onClick: t,
                    icon: t8.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, s.jsx)("div", {
                className: ne.K,
                children: (0, s.jsx)(tF.K, {
                    "aria-label": F.intl.string(F.t.RYIeOX),
                    onClick: n,
                    icon: t5.u,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
}
var nn = n(343601);
function ni(e) {
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
        R = (0, tV.x)("CollectiblesShopProductDetailsModal"),
        N = (0, I.aw)(l),
        g = N ? l.items.length : 0,
        _ = tz.useConfig({ location: "CollectiblesShopProductDetailsModal" }).showCollectionButton,
        C = (function () {
            let e = (0, t4.a)("CollectiblesPdpNavigateToCollection"),
                { sessionId: t } = (0, A.uM)() ?? {},
                n = (0, t9.v)((e) => e.reset);
            return r.useCallback(
                (i, s) => {
                    if (
                        (v.default.track(j.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: t,
                            sku_id: i.skuId,
                            cta_name: s,
                        }),
                        (0, t3.closeUserProfileModal)(),
                        (0, t7.p)(),
                        e && !0 !== i.isOrbsExclusive)
                    )
                        return void (0, t6.pX)(j.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(i.skuId));
                    n();
                    let r = !0 === i.isOrbsExclusive ? w.G2.ORBS : w.G2.CATALOG;
                    (0, t6.pX)(`${j.BVt.COLLECTIBLES_SHOP_WITH_TAB(r)}&${w.P1}=${i.skuId}`);
                },
                [e, t, n],
            );
        })(),
        k = r.useCallback(() => {
            f(w.sH.GO_TO_COLLECTION), h(), C(x, "go_to_collection_button");
        }, [x, h, f, C]),
        L = r.useCallback(() => {
            g <= 1 || o((e) => (e - 1 + g) % g);
        }, [g, o]),
        b = r.useCallback(() => {
            g <= 1 || o((e) => (e + 1) % g);
        }, [g, o]),
        y = r.useCallback(
            (e) => {
                if (g <= 1) return;
                let t = e.target;
                "INPUT" === t.tagName ||
                    "TEXTAREA" === t.tagName ||
                    t.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), L())
                        : "ArrowRight" === e.key && (e.preventDefault(), b()));
            },
            [g, L, b],
        ),
        P = r.useCallback(() => {
            f(w.sH.CLOSE_DETAIL), h();
        }, [f, h]),
        S = r.useRef(null),
        D = r.useRef(!0);
    return (
        r.useLayoutEffect(() => {
            if (D.current) {
                D.current = !1;
                return;
            }
            let e = S.current;
            null != e && ((e.style.animation = "none"), e.offsetHeight, (e.style.animation = ""));
        }, [c]),
        (0, s.jsxs)("div", {
            className: B()(nn.i1, (0, w.EZ)(l.skuId) ? nn.bF : l.type === O.R.AVATAR_DECORATION ? nn.Jq : nn.eF),
            style: null != m ? { backgroundImage: `url(${m})` } : void 0,
            onKeyDown: y,
            children: [
                (R || _) &&
                    (0, s.jsx)("div", {
                        className: nn.GV,
                        children: (0, s.jsx)(eY.m, {
                            text: F.intl.string(F.t["Hr/q/6"]),
                            children: (0, s.jsx)(e2.$, {
                                variant: "overlay-secondary",
                                size: "sm",
                                icon: tw.f,
                                text: x.name,
                                onClick: k,
                            }),
                        }),
                    }),
                (0, s.jsx)("div", {
                    className: nn.KR,
                    ref: S,
                    children: (0, s.jsx)(p.RightPreview, {
                        user: t,
                        productRecord: n,
                        selectedProduct: l,
                        previewingProduct: i,
                        selectedBundleSlide: c,
                        isClosing: u,
                        isOrbCheckoutModalOpen: d,
                    }),
                }),
                N && g > 1 && (0, s.jsx)(nt, { goPrev: L, goNext: b }),
                (0, s.jsxs)("div", {
                    className: nn.VG,
                    children: [
                        (0, s.jsx)(t2.R, {
                            product: n,
                            selectedVariantIndex: a,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: f,
                        }),
                        R
                            ? (0, s.jsx)(t1, {
                                  skuId: l.skuId,
                                  product: l,
                                  productName: (0, T.VG)(l),
                                  tab: E,
                                  onTrackClick: f,
                              })
                            : (0, s.jsx)(tZ, { skuId: l.skuId, tab: E, onTrackClick: f }),
                        (0, s.jsx)(tF.K, {
                            "aria-label": F.intl.string(F.t.cpT0Cq),
                            onClick: P,
                            icon: tG.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            ],
        })
    );
}
var ns = n(118342);
let nr = function (e) {
    let {
            transitionState: t,
            onClose: n,
            product: i,
            category: l,
            returnRef: O,
            analyticsSource: S,
            analyticsLocations: B,
            shouldCheckoutWithOrbs: D,
            tab: U,
            giftRecipient: M,
            giftingOrigin: H,
        } = e,
        w = (0, u.bG)([R.default], () => R.default.getCurrentUser()),
        F = (0, P.f)(i),
        { previewingVariantIndex: G } = F,
        V = (0, g.Q)(i),
        z = b(i, G),
        K = (0, k.rb)(i, V);
    a()(null != K, "Selected product should not be null");
    let { analyticsLocations: W } = (0, E.Ay)([...B, x.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, L.Yr)(K.skuId);
    let $ = (0, y.U1)(l),
        [X, Y] = r.useState(0);
    r.useEffect(() => {
        null != w && (0, f.A)(w.id, w.getAvatarURL(void 0, 80));
    }, [w]);
    let q = r.useMemo(() => (0, I.V6)(i.type, i.skuId), [i.type, i.skuId]);
    r.useEffect(() => {
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
        ee = r.useMemo(() => (0, k.v8)(i), [i]),
        et = (function (e) {
            let { skuId: t, productSkuIds: n, analyticsLocations: i } = e,
                { cardId: s, sessionId: l } = (0, A.uM)() ?? {},
                a = (0, C.o)(),
                c = (0, I.xM)(a);
            return r.useCallback(
                (e, r) => {
                    v.default.track(j.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                        sku_id: r ?? t,
                        cta: e,
                        shop_session_id: l,
                        card_id: s,
                        product_sku_ids: n,
                        location_stack: i,
                        discount_source: (0, I.b_)(c),
                    });
                },
                [t, i, s, n, l, c],
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
        es = (0, _.c)("product_details_modal");
    if (null == w || (i.skuId === o.j.PREMIUM_TIER_2_1_DAY && !es)) return null;
    let er = (0, T.VG)(i),
        el = {
            user: w,
            productRecord: i,
            productName: er,
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
            returnRef: O,
            onClose: n,
            onTrackClick: et,
        };
    return (0, s.jsx)(E.f5, {
        value: W,
        children: (0, s.jsx)(m.d, {
            returnRef: O,
            transitionState: t,
            onClose: n,
            size: "xl",
            paddingSize: "sm",
            "aria-label": er,
            children: (0, s.jsx)("div", {
                className: ns.C,
                children: (0, s.jsxs)("div", {
                    className: ns.j,
                    children: [
                        (0, s.jsx)(tH, { ...el }),
                        (0, s.jsx)(ni, { ...el, isClosing: ei, isOrbCheckoutModalOpen: en, pdpBackground: $ }),
                    ],
                }),
            }),
        }),
    });
};
