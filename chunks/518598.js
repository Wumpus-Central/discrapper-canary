n.d(t, { default: () => nt });
var r,
    i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    c = n(562708),
    o = n(334279),
    u = n(702841),
    d = n(231723),
    m = n(224640),
    h = n(793574),
    x = n(688810),
    f = n(139286),
    E = n(903209),
    R = n(652165),
    p = n(287809),
    A = n(174459),
    g = n(662388),
    N = n(440938),
    v = n(298072),
    j = n(993408),
    I = n(503089),
    _ = n(331884),
    C = n(652215),
    T = n(623373),
    k = n(536572),
    O = n(177366),
    L = n(575593);
function b(e, t) {
    return e.type === L.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e;
}
var y = n(212407),
    P = n(935094),
    S = n(503698),
    D = n.n(S),
    B = n(939249),
    U = n(834730),
    M = n(534514),
    F = n(456839),
    H = n(375708),
    w = n(701180);
function G(e) {
    let { name: t, typeLabel: n } = e;
    return (0, i.jsxs)(U.E, {
        variant: "text-sm/medium",
        className: w.mC,
        "aria-live": "polite",
        children: [
            (0, i.jsx)("span", { className: w.kx, children: t }),
            null != n && (0, i.jsx)("span", { className: w.FP, children: n }),
        ],
    });
}
let V = { [L.R.AVATAR_DECORATION]: !0, [L.R.PROFILE_FRAME]: !0 };
function z(e) {
    let { item: t, index: n, isSelected: r, setSelected: l, label: a } = e,
        c = s.useMemo(() => ({ skuId: t.skuId, type: t.type, items: [t] }), [t]),
        o = s.useCallback(() => l(n), [l, n]),
        u = !0 === V[t.type];
    return (0, i.jsx)(B.D, {
        tag: "div",
        role: "radio",
        "aria-checked": r,
        tabIndex: r ? 0 : -1,
        className: D()(w.xn, { [w.Y4]: r, [w.u8]: u }),
        onClick: o,
        "aria-label": a,
        children: (0, i.jsx)("div", { className: w.Yf, children: (0, i.jsx)(F.O, { product: c }) }),
    });
}
var K = n(442759),
    W = n(344346),
    Y = n(139136),
    $ = n(395744),
    X = n(929283),
    q = n(719201);
function Z(e) {
    let { item: t, user: n, bundleFirstAvatarDecoration: r, isBundle: s } = e;
    switch (t.type) {
        case L.R.AVATAR_DECORATION:
            return (0, i.jsx)("div", {
                className: q.h1,
                children: (0, i.jsx)(X.i, { user: n, item: t, isHighlighted: !0 }),
            });
        case L.R.PROFILE_EFFECT:
            return (0, i.jsx)("div", {
                className: s ? q.sm : q.VY,
                children: (0, i.jsx)(Y.A, {
                    skuId: t.skuId,
                    removeSetHeight: !0,
                    isHighlighted: !0,
                    delayProfileEffectIntro: !0,
                }),
            });
        case L.R.PROFILE_FRAME:
            return (0, i.jsx)("div", { className: s ? q.ob : q.fE, children: (0, i.jsx)($.A, { frame: t }) });
        case L.R.NAMEPLATE:
            return (0, i.jsx)("div", {
                className: q.Dz,
                children: (0, i.jsx)(W.A, {
                    className: q.M4,
                    nameplate: t,
                    user: n,
                    nameplatePreviewSize: "large",
                    pendingAvatarDecoration: r,
                    isHighlighted: !0,
                    hideDecorators: !0,
                }),
            });
        default:
            return null;
    }
}
function J(e) {
    let { user: t, selectedProduct: n, previewingProduct: r, selectedBundleSlide: s } = e,
        l = r ?? n,
        { firstAvatarDecoration: a } = (0, K.f5)(l),
        c = l.items[s] ?? l.items[0];
    return null == c
        ? null
        : (0, i.jsx)(Z, { item: c, user: t, bundleFirstAvatarDecoration: a, isBundle: (0, j.aw)(l) });
}
var Q = n(846957);
function ee(e) {
    let { selectedProduct: t, previewingProduct: n } = e;
    return (0, i.jsx)(Q.B, { product: n ?? t });
}
var et = n(975571);
function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t) return H.intl.formatToPlainString(H.t["/0Yndu"], { num: e.bundledProducts?.length });
    let n = e.bundledProducts ?? [],
        r = [],
        i = !1;
    for (let e of n)
        switch (e.type) {
            case L.R.AVATAR_DECORATION:
                r.push(H.intl.formatToPlainString(H.t.Ntv9Jt, { itemName: e.name }));
                break;
            case L.R.PROFILE_EFFECT:
                r.push(H.intl.formatToPlainString(H.t["3Y8q7a"], { itemName: e.name }));
                break;
            case L.R.NAMEPLATE:
                r.push(H.intl.formatToPlainString(H.t["2keXky"], { itemName: e.name })), (i = !0);
        }
    if (i) {
        let e = r.join(", ").replace(/, ([^,]*)$/, " & $1");
        return H.intl.formatToPlainString(H.t.Ofrqj6, { joinedItems: e });
    }
    let s = r.join(" & ");
    return H.intl.formatToPlainString(H.t.Ofrqj6, { joinedItems: s });
}
n(321073);
var er = n(740076),
    ei = n(661847),
    es = n(758836),
    el = n(630709);
function ea(e) {
    let { skuId: t } = e;
    return (0, es.EZ)(t)
        ? (0, i.jsx)(U.E, {
              variant: "text-sm/normal",
              className: el.CU,
              children: H.intl.format(H.t.Q1scdE, {
                  helpdeskArticle: et.A.getArticleURL(C.MVz.FRACTIONAL_PREMIUM_ABOUT),
              }),
          })
        : null;
}
function ec(e) {
    let { productRecord: t, productName: n, selectedProduct: r, previewingVariantIndexProps: l } = e,
        { previewingVariantIndex: a, handleEntering: c, handleLeaving: o } = l,
        u = b(t, a) ?? r,
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
                        return H.intl.string(H.t["3lv7q2"]);
                    case L.R.PROFILE_EFFECT:
                        return H.intl.string(H.t.VhJL72);
                    case L.R.NAMEPLATE:
                        return H.intl.string(H.t.ik37EZ);
                    case L.R.PROFILE_FRAME:
                        return H.intl.string(H.t.fWzWPp);
                    case L.R.BUNDLE:
                        return en(e, t);
                    default:
                        return "";
                }
            }, [e, t]);
        })(u, !1),
        { disabledReason: m } = (0, er.I)(r.skuId),
        h = (0, v.Q)(t),
        x = (0, T.B1)(t),
        f = x ? t.variants[a ?? h] : null,
        E = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            null != E.current && ((E.current.tabIndex = -1), E.current.focus());
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: el.sn,
                    children: [
                        (0, i.jsx)(M.D, { ref: E, variant: "heading-xl/bold", className: el.R_, children: n }),
                        (0, i.jsx)(U.E, { variant: "text-sm/normal", children: d }),
                        (0, i.jsx)(ea, { skuId: u.skuId }),
                        null !== m && (0, i.jsx)(U.E, { variant: "text-xs/normal", className: el.H$, children: m }),
                    ],
                }),
                x &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != f &&
                                (0, i.jsx)(U.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: el.a9,
                                    lineClamp: 1,
                                    children: H.intl.format(H.t.EcaRWt, {
                                        value: (0, i.jsx)("span", { className: el.I8, children: f.variantLabel }),
                                    }),
                                }),
                            (0, i.jsx)("div", {
                                className: el._x,
                                children: (0, i.jsx)(ei.A, {
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
        (((r = {}).COLLECTIBLE = "COLLECTIBLE"),
        (r.BUNDLE = "BUNDLE"),
        (r.EXTERNAL_ORB_BADGE = "EXTERNAL_ORB_BADGE"),
        (r.EXTERNAL_FRACTIONAL_NITRO = "EXTERNAL_FRACTIONAL_NITRO"),
        (r.EXTERNAL_GENERIC = "EXTERNAL_GENERIC"),
        r),
    eu = n(97808),
    ed = n(778712),
    em = n(346055),
    eh = n(993077),
    ex = n(245604),
    ef = n(460905),
    eE = n(262295),
    eR = n(320095),
    ep = n(963852),
    eA = n(763754),
    eg = n(20851),
    eN = n(986687),
    ev = n(101058),
    ej = n(84540),
    eI = n(836602),
    e_ = n(428262),
    eC = n(780898),
    eT = n(180129);
function ek(e) {
    let { user: t, innerClassName: n } = e;
    return (0, i.jsx)("div", {
        className: eT.mV,
        children: (0, i.jsx)(eE.A, {
            avatar: (0, i.jsx)(eu.eu, {
                src: t.avatarSrc,
                size: ed._3.SIZE_32,
                "aria-label": t.name,
                status: C.clD.ONLINE,
            }),
            name: t.name,
            innerClassName: D()(eT.$L, n),
        }),
    });
}
function eO(e) {
    let { user: t, nameplate: n, avatarDecoration: r } = e,
        s = (0, eC.Ov)();
    return (0, i.jsx)("div", {
        className: eT.nJ,
        role: "img",
        "aria-label": H.intl.string(H.t.SZeUdR),
        children: (0, i.jsxs)(em.M, {
            children: [
                (0, i.jsx)(ek, { user: s.mallow, innerClassName: eT.ab }),
                (0, i.jsxs)(U.E, {
                    variant: "text-sm/semibold",
                    className: eT.OS,
                    children: [H.intl.string(H.t["yzW/fZ"]), " - 3"],
                }),
                (0, i.jsx)(ek, { user: s.phibi, innerClassName: eT.e9 }),
                (0, i.jsx)("div", {
                    className: eT.mV,
                    children: (0, i.jsx)(W.A, {
                        className: eT.M4,
                        innerClassName: eT.e9,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: !0,
                        skipEffectDisplayName: !0,
                        pendingAvatarDecoration: r,
                        hideDecorators: !0,
                    }),
                }),
                (0, i.jsx)(ek, { user: s.locke, innerClassName: eT.e9 }),
                (0, i.jsxs)(U.E, {
                    variant: "text-sm/semibold",
                    className: eT.OS,
                    children: [H.intl.string(H.t["NG43/6"]), " - 12"],
                }),
                (0, i.jsx)(ek, { user: s.boom, innerClassName: eT.bD }),
                (0, i.jsx)(ek, { user: s.cherry, innerClassName: eT.bD }),
            ],
        }),
    });
}
function eL(e) {
    let { user: t } = e,
        n = (function (e) {
            let { author: t } = e;
            return (0, eR.rh)({
                ...(0, ep.Ay)({ author: t, channelId: "1337", content: H.intl.string(H.t.d5YwK5) }),
                state: C.cmJ.SENT,
                id: "0",
            });
        })({ author: t });
    return (0, i.jsx)("div", {
        role: "img",
        "aria-label": H.intl.string(H.t["TN+ZvB"]),
        children: (0, i.jsx)(em.M, {
            children: (0, i.jsxs)(eh.Z, {
                className: eT.f7,
                outline: !0,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(eg.A, { className: eT.G5, author: (0, eA.p_)(n), message: n }, n.id),
                    (0, i.jsxs)("div", {
                        className: eT.lG,
                        children: [
                            (0, i.jsx)(ex.U, { size: "md", color: "currentColor", className: eT.hq }),
                            (0, i.jsx)(ef.n, { size: "md", color: "currentColor", className: eT.hq }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function eb(e) {
    let { product: t, user: n, activeBundleSlide: r } = e,
        l = e_.Ay.canUsePremiumProfileCustomization(n),
        { pendingAvatar: a, ...c } = (0, u.cf)([eI.A], () => eI.A.getPendingChanges()),
        o = (0, ev.V7)({ userId: n.id, image: a }),
        d = t.type === L.R.BUNDLE ? t.items[r ?? 0] : void 0,
        m = d?.type ?? t.type,
        h = m === L.R.AVATAR_DECORATION,
        x = m === L.R.PROFILE_EFFECT,
        { firstAvatarDecoration: f, firstProfileEffect: E, firstNameplate: R, firstProfileFrame: p } = (0, K.f5)(t),
        A = d?.type === L.R.AVATAR_DECORATION ? d : f,
        g = d?.type === L.R.PROFILE_EFFECT ? d : E,
        N = d?.type === L.R.PROFILE_FRAME ? d : p,
        v = d?.type === L.R.NAMEPLATE ? d : R;
    if (
        (s.useEffect(() => {
            if (null != A) return (0, ej.p)({ avatarDecoration: A }), () => (0, ej.p)({ avatarDecoration: void 0 });
        }, [A]),
        m === L.R.NAMEPLATE && null != v)
    )
        return (0, i.jsx)("div", {
            className: eT.Zj,
            children: (0, i.jsx)(eO, { user: n, nameplate: v, avatarDecoration: A }),
        });
    return (0, i.jsx)("div", {
        className: h ? eT.RA : eT.hZ,
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eN.A, {
                    ...c,
                    pendingAvatar: o,
                    user: n,
                    canUsePremiumCustomization: l,
                    pendingAvatarDecoration: A,
                    pendingProfileEffect: g,
                    profileEffectRestartKey: r,
                    pendingProfileFrame: N,
                    disabledInputs: !0,
                    hideMessageInput: !x,
                    hideCustomStatus: !0,
                    hideBioSection: h,
                    hideExampleButton: !0,
                    interactive: !1,
                    className: h ? eT.oB : void 0,
                }),
                h && (0, i.jsx)(eL, { user: n }),
            ],
        }),
    });
}
function ey(e) {
    let { user: t, selectedProduct: n, previewingProduct: r, selectedBundleSlide: s } = e;
    return (0, i.jsx)(eb, { user: t, product: r ?? n, activeBundleSlide: s });
}
var eP = n(478016),
    eS = n(661531),
    eD = n(224016),
    eB = n(913521);
function eU() {
    let e = [H.t.E1NP2x, H.t.kpMomJ, H.t.xT1Vfn, H.t.myyAEr, H.t.zTk8Ul];
    return (0, i.jsxs)("div", {
        className: eB.kL,
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: eB.ym,
            }),
            (0, i.jsx)(eD.A, { color: "white" }),
            (0, i.jsx)("div", {
                className: eB.PX,
                children: e.map((e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: eB.UJ,
                            children: [
                                (0, i.jsx)(eP.U, { color: eS.A.colors.WHITE }),
                                (0, i.jsx)(U.E, {
                                    variant: "text-sm/medium",
                                    color: "always-white",
                                    children: H.intl.string(e),
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
var eM = n(17928),
    eF = n(576052),
    eH = n(83554);
function ew(e) {
    let { user: t } = e,
        n = e_.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: r, ...s } = (0, eM.cf)([eI.A], () => eI.A.getPendingChanges()),
        l = (0, ev.V7)({ userId: t.id, image: r });
    return (0, i.jsx)("div", {
        className: eH.k,
        children: (0, i.jsx)(eN.A, {
            ...s,
            pendingAvatar: l,
            user: t,
            pendingBadges: [(0, eF._)()],
            canUsePremiumCustomization: n,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
}
var eG = n(197952);
function eV(e) {
    let { user: t, productRecord: n, isClosing: r, isOrbCheckoutModalOpen: s } = e;
    return n.skuId === es.Dp.ORB_PROFILE_BADGE
        ? r || s
            ? null
            : (0, i.jsx)(ew, { user: t })
        : (0, es.EZ)(n.skuId)
          ? (0, i.jsx)(eU, {})
          : (0, i.jsx)(Q.B, { product: n, className: eG.M });
}
let ez = {
    [eo.COLLECTIBLE]: { LeftPreview: J, Info: ec, RightPreview: ey },
    [eo.BUNDLE]: {
        LeftPreview: J,
        Info: function (e) {
            let { productRecord: t, productName: n, selectedBundleSlide: r, setSelectedBundleSlide: l } = e,
                a = t.items,
                c = t.bundledProducts,
                o = c?.[r]?.name,
                u = a[r]?.type,
                d = null != u ? (0, j.Dm)(u) : null,
                m = H.intl.string(H.t.cTbdgu),
                h = s.useRef(null),
                x = s.useCallback(
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
                let e = h.current;
                if (null == e || !e.contains(document.activeElement)) return;
                let t = e.querySelectorAll('[role="radio"]');
                t[r]?.focus();
            }, [r]);
            let f = s.useRef(null);
            return (
                s.useLayoutEffect(() => {
                    null != f.current && ((f.current.tabIndex = -1), f.current.focus());
                }, []),
                (0, i.jsxs)("div", {
                    className: w.Qf,
                    children: [
                        (0, i.jsx)(M.D, { ref: f, variant: "heading-xl/bold", className: w.R_, title: n, children: n }),
                        (0, i.jsx)(U.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: H.intl.format(H.t["1tUCAO"], { count: a.length }),
                        }),
                        (0, i.jsxs)("div", {
                            className: w.hZ,
                            children: [
                                (0, i.jsx)("div", {
                                    className: w.vg,
                                    children: (0, i.jsx)("div", {
                                        ref: h,
                                        className: w.hK,
                                        role: "radiogroup",
                                        "aria-label": m,
                                        tabIndex: -1,
                                        onKeyDown: x,
                                        children: a.map((e, t) => {
                                            let n = c?.[t]?.name ?? e.skuId;
                                            return (0, i.jsx)(
                                                z,
                                                { item: e, index: t, isSelected: t === r, setSelected: l, label: n },
                                                e.skuId,
                                            );
                                        }),
                                    }),
                                }),
                                null != o && (0, i.jsx)(G, { name: o, typeLabel: d }),
                            ],
                        }),
                    ],
                })
            );
        },
        RightPreview: ey,
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
            : (0, j.aw)(t)
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
        r = (0, eW.Do)("CollectiblesShopProductDetailsModal") && n.type === L.R.PROFILE_FRAME;
    return (0, i.jsx)("div", {
        className: eX.N,
        children: r
            ? (0, i.jsx)(eY.A, { location: "CollectiblesShopProductDetailsModal" })
            : (0, i.jsx)(e$.A, { skuId: t.skuId }),
    });
}
var eZ = n(990078),
    eJ = n(462887),
    eQ = n(821609),
    e0 = n(318254),
    e1 = n(825484),
    e4 = n(331322),
    e2 = n(736653),
    e9 = n(44120),
    e3 = n(465794),
    e8 = n(757036),
    e5 = n(761705),
    e7 = n(449410),
    e6 = n(580630),
    te = n(4227),
    tt = n(940980),
    tn = n(466459),
    tr = n(395068),
    ti = n(885574),
    ts = n(401231);
function tl(e) {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, i.jsx)(eZ.m, {
              position: "top",
              align: "left",
              text: H.intl.string(H.t.y1VWkZ),
              children: (0, i.jsxs)("div", {
                  className: D()(ts.GX, t),
                  children: [
                      (0, i.jsx)("span", {
                          className: ts.P0,
                          children: (0, i.jsx)(ti.m, { size: "md", color: "currentColor", className: ts.G }),
                      }),
                      (0, i.jsx)(U.E, { variant: "text-md/semibold", children: H.intl.string(H.t.BEjTij) }),
                  ],
              }),
          })
        : (0, i.jsx)(U.E, { variant: "text-md/semibold", className: t, children: H.intl.string(H.t["6cfuDj"]) });
}
var ta = n(878112),
    tc = n(572595),
    to = n(206835),
    tu = n(450481);
let td = function (e) {
    let { product: t, onSuccess: n, onTrackClick: r, variant: s = "primary" } = e,
        { handleUseNow: l, isApplying: a, canUseNow: c } = (0, tu.p)({ product: t, onSuccess: n }),
        o = (0, to.A)();
    return c
        ? (0, i.jsx)(eQ.$, {
              variant: s,
              onClick: () => {
                  r?.(es.sH.USE_NOW), l();
              },
              loading: a,
              text: H.intl.string(H.t.MAS7uK),
              fullWidth: !0,
          })
        : (0, i.jsx)(eQ.$, {
              variant: s,
              onClick: () => {
                  r?.(es.sH.EDIT_PROFILE), o(), n?.();
              },
              text: H.intl.string(H.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var tm = n(226236);
let th = function (e) {
    let { analyticsLocations: t, children: n } = e;
    return (0, i.jsx)(x.f5, {
        value: [...t, h.A.PROFILE_FRAMES_EA_MARKETING],
        children: (0, i.jsxs)("div", {
            className: tm.k,
            children: [
                (0, i.jsx)(U.E, {
                    variant: "text-xs/semibold",
                    color: "text-strong",
                    children: H.intl.format(H.t["3cglst"], {
                        articleURL: et.A.getArticleURL(C.MVz.SHOP_FRAMES_EARLY_ACCESS),
                    }),
                }),
                n,
            ],
        }),
    });
};
var tx = n(561769),
    tf = n(140735),
    tE = n(252955);
function tR(e) {
    let {
            price: { amount: t, currency: n },
            className: r,
            variant: s = "heading-md/semibold",
        } = e,
        l = (0, e6.RS)(t, n);
    return (0, i.jsxs)(U.E, {
        variant: s,
        className: D()(tE.v, r),
        children: [
            (0, i.jsx)(tf.A, { children: H.intl.format(H.t["2CEGln"], { price: l }) }),
            (0, i.jsx)("span", { "aria-hidden": !0, children: l }),
        ],
    });
}
var tp = n(219103),
    tA = n(469215);
function tg(e) {
    let {
            product: t,
            hasShopDiscount: n,
            discountSource: r,
            discount: s,
            className: l,
            discountOfferAmount: a,
            hideStrikethroughPrice: c = !1,
            discountIconDisplayMode: o,
            discountIconSize: u = "md",
        } = e,
        d = (0, j.WD)(t, { hasShopDiscount: n, discount: s });
    if (null == d) return null;
    let { defaultPrice: m, showDefaultPriceOnly: h } = d;
    if (h)
        return (0, i.jsx)("div", {
            className: D()(tA.kG, l),
            children: (0, i.jsx)(tp.x, { priceAmount: m.amount, priceCurrency: m.currency }),
        });
    let { showDiscountPrice: x, originalPrice: f, finalPrice: E } = d;
    return (0, i.jsxs)("div", {
        className: D()(tA.kG, l),
        children: [
            c ? null : (0, i.jsx)(tR, { price: f, className: tA.q9 }),
            (0, i.jsx)(tp.x, {
                priceAmount: E.amount,
                priceCurrency: E.currency,
                discount: s,
                className: D()({ [tA.q9]: null == a }),
                discountIconConfig: x && null != o ? { displayMode: o, source: r ?? j.D0.NITRO, size: u } : void 0,
                discountOfferAmount: a,
            }),
        ],
    });
}
var tN = n(403581),
    tv = n(532794),
    tj = n(202541),
    tI = n(447806);
function t_(e) {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: r } = (0, x.Ay)(),
        l = s.useRef(null);
    return (0, i.jsx)(B.D, {
        className: tI.F,
        innerRef: l,
        onClick: () => {
            n?.(es.sH.SUBSCRIBE_NOW),
                (0, tv.A)({ subscriptionTier: tj.pe.TIER_2, analyticsLocations: r, returnRef: l });
        },
        children: t,
    });
}
var tC = n(805961);
function tT(e) {
    let { product: t, onTrackClick: n } = e,
        r = (0, j.yt)(t, C.lid.PREMIUM_TIER_2);
    if (null == r) return null;
    let s = (0, e6.RS)(r.amount, r.currency);
    return (0, i.jsxs)("div", {
        className: tC.k,
        children: [
            (0, i.jsx)(eZ.m, {
                text: H.intl.string(H.t.MPFyJ5),
                "aria-label": H.intl.string(H.t.X3Ekj8),
                children: (0, i.jsx)(tN.t, { size: "md", color: "currentColor", className: tC.o }),
            }),
            (0, i.jsx)(U.E, {
                variant: "text-xs/medium",
                children: H.intl.format(H.t.Sv8iic, {
                    price: s,
                    subscribeNowHook: (e) => (0, i.jsx)(t_, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
var tk = n(818348),
    tO = n(752274);
function tL(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: r } = e,
        s = n ? H.intl.string(H.t.wu4gyV) : H.intl.string(H.t.eFNRzU),
        l = n || !r;
    return (0, i.jsxs)("div", {
        className: tO.eg,
        children: [
            (0, i.jsx)("div", {
                className: tO.zR,
                children: (0, i.jsx)(U.E, { variant: "text-xs/normal", className: l ? tO.r9 : void 0, children: s }),
            }),
            (0, i.jsx)(tp.x, { priceAmount: t.amount, priceCurrency: t.currency, className: l ? tO.r9 : void 0 }),
        ],
    });
}
function tb(e) {
    let {
            prices: t,
            hasShopDiscount: n,
            discountSource: r,
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
        : t[0].currency === tk.Yr.DISCORD_ORB
          ? (0, i.jsx)(tL, { orbPrice: t[0], isProductDisabled: o, hasSufficientOrbs: a })
          : (0, i.jsxs)("div", {
                className: tO.eg,
                children: [
                    (0, i.jsxs)("div", {
                        className: tO.pw,
                        children: [
                            (0, i.jsx)(tg, {
                                product: l,
                                discount: s,
                                hasShopDiscount: n,
                                discountSource: r,
                                hideStrikethroughPrice: !n || d,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                                discountOfferAmount: u,
                            }),
                            n || d ? null : (0, i.jsx)(tT, { product: l, onTrackClick: c }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === tk.Yr.DISCORD_ORB &&
                        (0, i.jsx)(tp.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: o || !a ? tO.r9 : void 0,
                        }),
                ],
            });
}
var ty = n(525723),
    tP = n(347722),
    tS = n(57020),
    tD = n(61750),
    tB = n(237309);
function tU(e) {
    let t = (0, tP.X)(e.selectedProduct),
        n = t && null != e.giftRecipient;
    return (0, i.jsx)(e7.$, {
        isGifting: n,
        location: "CollectiblesShopProductDetailsModal",
        children: (0, i.jsx)(tM, { ...e, canGiftProduct: t }),
    });
}
function tM(e) {
    let {
            user: t,
            productRecord: n,
            selectedProduct: r,
            category: l,
            shouldCheckoutWithOrbs: a,
            tab: c,
            giftRecipient: o,
            giftingOrigin: d,
            analyticsLocations: m,
            returnRef: h,
            onClose: x,
            onTrackClick: f,
            canGiftProduct: E,
        } = e,
        { cardId: p, sessionId: A, tilePosition: v } = (0, N.uM)() ?? {},
        I = (0, e8.L)(tj.PremiumTypes.TIER_2),
        _ = (0, j.xM)(t),
        T = (0, eW.Do)("CollectiblesShopProductDetailsModal") && r.type === L.R.PROFILE_FRAME,
        k = e_.Ay.canUseShopDiscounts(t) || T,
        O = (0, tn.h)(n),
        { isPurchased: b, isPartiallyOwnedBundle: y } = (0, tn.h)(r),
        { isDisabled: P } = (0, er.I)(r.skuId),
        S = (0, j.Zu)({ product: r, isPartiallyOwnedBundle: y, isPurchased: b }),
        B = (0, u.bG)([te.A], () => te.A.isClaiming === r?.skuId),
        M = (0, e2.Ay)(),
        F = (0, eJ.M)(M),
        w = (0, j.G0)(r),
        G = (0, j.yt)(r, C.lid.DEFAULT),
        V = G?.amount === 0,
        z = s.useMemo(() => (0, j.fT)(r, k), [r, k]),
        { prioritizeGifting: K, removeOrbsClaim: W } = (0, e7.q)(),
        Y = (0, ty.V_)(n),
        $ = null != Y,
        X = (0, tt.W)("CollectiblesShopProductDetailsModal"),
        q = c === es.G2.ORBS && a ? tx.Hi.ORBS : X ? tx.Hi.FIAT : void 0,
        { checkoutEligiblePrices: Z, hasSufficientOrbs: J } = (0, tS.F)({
            product: r,
            hasShopDiscount: k,
            hasDiscountOffer: $,
            prioritizedCurrency: q,
        }),
        Q = K && W ? Z.filter((e) => e.currency !== tk.Yr.DISCORD_ORB) : Z,
        ee = (0, tr.A)({ location: "CollectiblesShopProductDetailsModal", product: r }),
        et = s.useMemo(() => Z.some((e) => e.currency === tk.Yr.DISCORD_ORB), [Z]);
    (0, e5.W)({ disableFetch: !et });
    let en = s.useCallback(() => {
        f(es.sH.BUY_WITH_FIAT),
            (0, e9.A)({
                skuId: r.skuId,
                analyticsLocations: m,
                discoverySessionId: A,
                onClose: (e) => (e ? x() : (0, tk.tE)()),
            });
    }, [m, x, r.skuId, f, A]);
    function ei(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = (0, i.jsx)(e3.A, {
                subscriptionTier: tj.pe.TIER_2,
                fullWidth: !0,
                buttonTextOverride: e,
                onClick: () => {
                    f(es.sH.UNLOCK_WITH_NITRO), (0, tc.M)();
                },
                onSubscribeModalClose: () => {
                    (0, tc.t)({
                        product: n,
                        category: l,
                        shouldCheckoutWithOrbs: a,
                        returnRef: h,
                        analyticsLocations: m,
                        tab: c,
                        giftRecipient: o,
                        giftingOrigin: d,
                        cardId: p,
                        sessionId: A,
                        tilePosition: v,
                    });
                },
            });
        return t ? (0, i.jsx)(th, { analyticsLocations: m, children: r }) : r;
    }
    function el(e, t) {
        let n = P ? H.intl.string(H.t.cTdr3x) : H.intl.string(H.t.zqh7ZM),
            s = !J || P,
            l = H.intl.formatToPlainString(H.t.yi41qQ, { orbPrice: e.amount }),
            a = s ? `${l}, ${n}` : l;
        return (0, i.jsx)(eZ.m, {
            position: "top",
            text: n,
            shouldShow: s,
            "aria-label": !1,
            children: (0, i.jsx)(eQ.$, {
                variant: t ? "primary" : "secondary",
                onClick: function () {
                    f(es.sH.BUY_WITH_ORBS),
                        (0, R.B4)({
                            skuId: r.skuId,
                            onComplete: (e) => {
                                (0, g.gB)(),
                                    x(),
                                    (0, tD.A)({
                                        product: r,
                                        analyticsLocations: m,
                                        itemConsumed: e?.entitlements?.[0]?.consumed,
                                        purchaseType: es.gs.ORB,
                                    });
                            },
                            analyticsLocations: m,
                            discoverySessionId: A,
                        });
                },
                disabled: s,
                "aria-label": a,
                text: H.intl.format(H.t.JC15qj, {
                    orbPrice: e.amount,
                    orbIconHook: () => (0, i.jsx)(e0.C, { className: tB.fN, size: "sm", color: "currentColor" }),
                }),
                fullWidth: !0,
            }),
        });
    }
    let ea = () =>
            (0, i.jsx)(ta.A, {
                primary: !0,
                fullWidth: !0,
                fullWidthLabel: H.intl.string(H.t.ilhtIa),
                product: r,
                onSuccess: x,
                giftRecipient: o,
                giftingOrigin: d,
                onTrackClick: f,
            }),
        ec = function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return (0, i.jsx)(eQ.$, { variant: "secondary", onClick: en, text: e, fullWidth: t });
        },
        eo = () =>
            (0, i.jsxs)("div", {
                className: tB.pq,
                children: [
                    (0, i.jsx)(U.E, { variant: "text-md/semibold", children: H.intl.string(H.t.rt69oo) }),
                    !b &&
                        (0, i.jsx)(U.E, {
                            className: D()(tB.ed, !F && tB.un),
                            variant: "text-xxs/normal",
                            children: H.intl.string(H.t.nKdAlO),
                        }),
                ],
            }),
        eu = (e) =>
            e.length > 0
                ? (0, i.jsx)(tb, {
                      prices: e,
                      product: r,
                      hasShopDiscount: k,
                      discountSource: _,
                      discount: z,
                      hasSufficientOrbs: J,
                      isProductDisabled: P,
                      discountOfferAmount: Y,
                      onTrackClick: f,
                  })
                : null;
    return (0, i.jsxs)("div", {
        className: tB.iw,
        children: [
            (() => {
                let e = O.isPurchased || O.isPartiallyOwnedBundle;
                if (!K) return e ? (0, i.jsx)(tl, { className: tB.On, isPartiallyPurchased: y }) : w ? eo() : eu(Q);
                if (w && !e) return eo();
                let t = Q.find((e) => e.currency !== tk.Yr.DISCORD_ORB);
                return eu(null == t ? [] : [t]);
            })(),
            (0, i.jsx)(e4.B, {
                direction: "vertical",
                gap: 8,
                children: (() => {
                    if (w && !I && !V) return ei(H.intl.string(H.t.sEAnVH));
                    if (!S)
                        return E
                            ? (0, i.jsx)(ta.A, {
                                  primary: !0,
                                  product: r,
                                  onSuccess: x,
                                  fullWidth: !0,
                                  giftRecipient: o,
                                  giftingOrigin: d,
                                  onTrackClick: f,
                              })
                            : null;
                    if (b)
                        return E
                            ? K
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          ea(),
                                          (0, i.jsx)(td, {
                                              variant: "secondary",
                                              product: r,
                                              onSuccess: x,
                                              onTrackClick: f,
                                          }),
                                      ],
                                  })
                                : (0, i.jsxs)(e1.e, {
                                      wrap: !1,
                                      fullWidth: !0,
                                      children: [
                                          (0, i.jsx)(td, { product: r, onSuccess: x, onTrackClick: f }),
                                          (0, i.jsx)(ta.A, {
                                              primary: !0,
                                              product: r,
                                              onSuccess: x,
                                              giftRecipient: o,
                                              giftingOrigin: d,
                                              onTrackClick: f,
                                          }),
                                      ],
                                  })
                            : (0, i.jsx)(td, { product: r, onSuccess: x, onTrackClick: f });
                    if (ee) return ei(H.intl.string(H.t["9wfL34"]), !0);
                    if (w)
                        return (0, i.jsx)(eQ.$, {
                            loading: B,
                            loadingStartedLabel: H.intl.string(H.t["TYw+9s"]),
                            loadingFinishedLabel: H.intl.string(H.t.Pg1UP5),
                            onClick: async () => {
                                f(es.sH.ADD_TO_COLLECTION),
                                    await (0, g.iJ)(r.skuId),
                                    x(),
                                    (0, tD.A)({
                                        product: r,
                                        analyticsLocations: m,
                                        purchaseType: es.gs.PREMIUM_PURCHASE,
                                    });
                            },
                            text: H.intl.string(H.t.zp6caO),
                            fullWidth: !0,
                        });
                    if (K) {
                        let e, t;
                        return (
                            (e = Q.find((e) => e.currency !== tk.Yr.DISCORD_ORB)),
                            (t = Q.find((e) => e.currency === tk.Yr.DISCORD_ORB)),
                            null != e && null != t
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsxs)(e4.B, {
                                              direction: "horizontal",
                                              gap: 8,
                                              children: [ea(), ec(H.intl.string(H.t.pi7PDT), !1)],
                                          }),
                                          el(t, !1),
                                      ],
                                  })
                                : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          ea(),
                                          null != e ? ec(H.intl.string(H.t.pxocaf)) : null != t ? el(t, !1) : null,
                                      ],
                                  })
                        );
                    }
                    return (0, i.jsx)(i.Fragment, {
                        children: Z.map((e, t) => {
                            let n,
                                l = 0 === t,
                                a =
                                    e.currency === tk.Yr.DISCORD_ORB
                                        ? el(e, l)
                                        : ((n = $
                                              ? H.intl.formatToPlainString(H.t["5U5RB5"], { discountOfferAmount: Y })
                                              : H.intl.formatToPlainString(H.t["cNSL/j"], {
                                                    price: (0, e6.$g)(e.amount, e.currency),
                                                })),
                                          (0, i.jsxs)(e1.e, {
                                              wrap: !1,
                                              fullWidth: !0,
                                              children: [
                                                  (0, i.jsx)(eQ.$, {
                                                      variant: l ? "primary" : "secondary",
                                                      onClick: en,
                                                      text: n,
                                                      fullWidth: !0,
                                                  }),
                                                  E &&
                                                      (0, i.jsx)(ta.A, {
                                                          primary: l,
                                                          product: r,
                                                          onSuccess: x,
                                                          giftRecipient: o,
                                                          giftingOrigin: d,
                                                          onTrackClick: f,
                                                      }),
                                              ],
                                          }));
                            return (0, i.jsx)(s.Fragment, { children: a }, e.currency);
                        }),
                    });
                })(),
            }),
        ],
    });
}
var tF = n(18967);
function tH(e) {
    let { productRecord: t, selectedProduct: n, previewingProduct: r, user: s, selectedBundleSlide: l } = e,
        a = eK(t);
    return (0, i.jsxs)("div", {
        className: D()(tF.wd, { [tF.E7]: null != a.LeftPreview }),
        children: [
            (0, i.jsx)("div", { className: tF.dL, children: (0, i.jsx)(eq, { productRecord: t, selectedProduct: n }) }),
            null != a.LeftPreview &&
                (0, i.jsx)("div", {
                    className: tF._E,
                    children: (0, i.jsx)(a.LeftPreview, {
                        user: s,
                        selectedProduct: n,
                        previewingProduct: r,
                        productRecord: t,
                        selectedBundleSlide: l,
                    }),
                }),
            (0, i.jsx)("div", { className: tF.F_, children: (0, i.jsx)(a.Info, { ...e }) }),
            (0, i.jsx)(tU, { ...e }),
        ],
    });
}
var tw = n(34188),
    tG = n(408278),
    tV = n(972213),
    tz = n(976860),
    tK = n(646101),
    tW = n(691540),
    tY = n(857250),
    t$ = n(97483),
    tX = n(173936),
    tq = n(957565),
    tZ = n(573749);
function tJ(e) {
    let { skuId: t, tab: n, onTrackClick: r } = e,
        l = s.useCallback(() => {
            A.default.track(C.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
                r?.(es.sH.COPY_LINK),
                (0, tq.C)((0, tZ.o)(t, n), () => (0, tW.P0)((0, tY.o)(H.intl.string(H.t["L/PwZf"]), t$.Ck.SUCCESS)));
        }, [t, n, r]);
    return (0, i.jsx)(tG.K, {
        "aria-label": H.intl.string(H.t.WqhZss),
        onClick: l,
        icon: tX.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
var tQ = n(427209),
    t0 = n(192308),
    t1 = n(294454);
function t4(e) {
    let { skuId: t, product: r, productName: l, tab: a, onTrackClick: c } = e,
        o = s.useCallback(() => {
            A.default.track(C.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
                c?.(es.sH.SHARE_LINK),
                ((e) => {
                    let { skuId: t, product: r, productName: s, tab: l, source: a } = e;
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
                                (0, i.jsx)(e, { ...n, skuId: t, product: r, productName: s, tab: l, source: a });
                        },
                        { stackingBehavior: "stack", modalKey: t1.aU },
                    );
                })({ skuId: t, product: r, productName: l, tab: a, source: "collectibles-shop-pdp" });
        }, [t, r, l, a, c]);
    return (0, i.jsx)(eZ.m, {
        text: H.intl.string(H.t.RDE0Sc),
        ariaHidden: !0,
        children: (0, i.jsx)(tG.K, {
            "aria-label": H.intl.string(H.t.Ej3B3Y),
            onClick: o,
            icon: tQ.A,
            variant: "overlay-secondary",
            size: "sm",
        }),
    });
}
var t2 = n(139146),
    t9 = n(668953),
    t3 = n(881636),
    t8 = n(428445);
function t5(e) {
    let { goPrev: t, goNext: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: t8.Y,
                children: (0, i.jsx)(tG.K, {
                    "aria-label": H.intl.string(H.t["3NdvMK"]),
                    onClick: t,
                    icon: t9.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, i.jsx)("div", {
                className: t8.K,
                children: (0, i.jsx)(tG.K, {
                    "aria-label": H.intl.string(H.t.RYIeOX),
                    onClick: n,
                    icon: t3.u,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
}
var t7 = n(742441);
function t6(e) {
    let {
            user: t,
            productRecord: n,
            previewingProduct: r,
            selectedProduct: l,
            selectedVariantIndex: a,
            selectedBundleSlide: c,
            setSelectedBundleSlide: o,
            isClosing: u,
            isOrbCheckoutModalOpen: d,
            pdpBackground: m,
            tab: h,
            onClose: x,
            onTrackClick: f,
            showGoToShop: E,
        } = e,
        R = eK(n),
        p = (0, tK.x)("CollectiblesShopProductDetailsModal"),
        A = (0, j.aw)(l),
        g = A ? l.items.length : 0,
        N = s.useCallback(() => {
            g <= 1 || o((e) => (e - 1 + g) % g);
        }, [g, o]),
        v = s.useCallback(() => {
            g <= 1 || o((e) => (e + 1) % g);
        }, [g, o]),
        I = s.useCallback(
            (e) => {
                if (g <= 1) return;
                let t = e.target;
                "INPUT" === t.tagName ||
                    "TEXTAREA" === t.tagName ||
                    t.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), N())
                        : "ArrowRight" === e.key && (e.preventDefault(), v()));
            },
            [g, N, v],
        ),
        _ = s.useCallback(() => {
            f(es.sH.CLOSE_DETAIL), x();
        }, [f, x]),
        T = s.useCallback(() => {
            x(), (0, tz.pX)(null != h ? C.BVt.COLLECTIBLES_SHOP_WITH_TAB(h) : C.BVt.COLLECTIBLES_SHOP);
        }, [x, h]),
        O = s.useRef(null),
        b = s.useRef(!0);
    return (
        s.useLayoutEffect(() => {
            if (b.current) {
                b.current = !1;
                return;
            }
            let e = O.current;
            null != e && ((e.style.animation = "none"), e.offsetHeight, (e.style.animation = ""));
        }, [c]),
        (0, i.jsxs)("div", {
            className: D()(t7.i1, (0, es.EZ)(l.skuId) ? t7.bF : l.type === L.R.AVATAR_DECORATION ? t7.Jq : t7.eF),
            style: null != m ? { backgroundImage: `url(${m})` } : void 0,
            onKeyDown: I,
            children: [
                !0 === E &&
                    (0, i.jsx)("div", {
                        className: t7.gW,
                        children: (0, i.jsx)(eQ.$, {
                            variant: "overlay-secondary",
                            icon: tw.U,
                            text: H.intl.string(H.t.fYfGgK),
                            onClick: T,
                        }),
                    }),
                (0, i.jsx)("div", {
                    className: t7.KR,
                    ref: O,
                    children: (0, i.jsx)(R.RightPreview, {
                        user: t,
                        productRecord: n,
                        selectedProduct: l,
                        previewingProduct: r,
                        selectedBundleSlide: c,
                        isClosing: u,
                        isOrbCheckoutModalOpen: d,
                    }),
                }),
                A && g > 1 && (0, i.jsx)(t5, { goPrev: N, goNext: v }),
                (0, i.jsxs)("div", {
                    className: t7.VG,
                    children: [
                        (0, i.jsx)(t2.R, {
                            product: n,
                            selectedVariantIndex: a,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: f,
                        }),
                        p
                            ? (0, i.jsx)(t4, {
                                  skuId: l.skuId,
                                  product: l,
                                  productName: (0, k.VG)(l),
                                  tab: h,
                                  onTrackClick: f,
                              })
                            : (0, i.jsx)(tJ, { skuId: l.skuId, tab: h, onTrackClick: f }),
                        (0, i.jsx)(tG.K, {
                            "aria-label": H.intl.string(H.t.cpT0Cq),
                            onClick: _,
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
var ne = n(460510);
let nt = function (e) {
    let {
            transitionState: t,
            onClose: n,
            product: r,
            category: l,
            returnRef: L,
            analyticsSource: S,
            analyticsLocations: D,
            shouldCheckoutWithOrbs: B,
            tab: U,
            giftRecipient: M,
            giftingOrigin: F,
            showGoToShop: H,
        } = e,
        w = (0, u.bG)([p.default], () => p.default.getCurrentUser()),
        G = (0, P.f)(r),
        { previewingVariantIndex: V } = G,
        z = (0, v.Q)(r),
        K = b(r, V),
        W = (0, T.rb)(r, z);
    a()(null != W, "Selected product should not be null");
    let { analyticsLocations: Y } = (0, x.Ay)([...D, h.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, O.Yr)(W.skuId);
    let $ = (0, y.U1)(l),
        [X, q] = s.useState(0);
    s.useEffect(() => {
        null != w && (0, E.A)(w.id, w.getAvatarURL(void 0, 80));
    }, [w]);
    let Z = s.useMemo(() => (0, j.V6)(r.type, r.skuId), [r.type, r.skuId]);
    s.useEffect(() => {
        A.default.track(C.HAw.OPEN_MODAL, {
            type: C.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
            source: S,
            location_stack: Y,
            sku_id: W.skuId,
            product_type: Z,
        }),
            (0, g.RD)(W.skuId);
    }, [S, Y, W.skuId, Z]);
    let { cardId: J, sessionId: Q, tilePosition: ee } = (0, N.uM)() ?? {},
        et = s.useMemo(() => (0, T.v8)(r), [r]),
        en = (function (e) {
            let { skuId: t, productSkuIds: n, analyticsLocations: r } = e,
                { cardId: i, sessionId: l } = (0, N.uM)() ?? {},
                a = (0, _.o)(),
                c = (0, j.xM)(a);
            return s.useCallback(
                (e) => {
                    A.default.track(C.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                        sku_id: t,
                        cta: e,
                        shop_session_id: l,
                        card_id: i,
                        product_sku_ids: n,
                        location_stack: r,
                        discount_source: (0, j.b_)(c),
                    });
                },
                [t, r, i, n, l, c],
            );
        })({ skuId: W.skuId, productSkuIds: et, analyticsLocations: Y });
    (0, f.A)({
        type: c.ImpressionTypes.MODAL,
        name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
        properties: {
            sku_id: W.skuId,
            card_id: J,
            shop_session_id: Q,
            position_in_section: ee,
            product_sku_ids: et,
            location_stack: Y,
        },
    });
    let er = (0, R.o6)(),
        ei = t === d.ip.EXITING,
        es = (0, I.c)("product_details_modal");
    if (null == w || (r.skuId === o.j.PREMIUM_TIER_2_1_DAY && !es)) return null;
    let el = (0, k.VG)(r),
        ea = {
            user: w,
            productRecord: r,
            productName: el,
            selectedProduct: W,
            previewingProduct: K ?? null,
            category: l,
            selectedVariantIndex: z,
            previewingVariantIndexProps: G,
            selectedBundleSlide: X,
            setSelectedBundleSlide: q,
            tab: U,
            shouldCheckoutWithOrbs: B,
            giftRecipient: M?.id !== w.id ? M : void 0,
            giftingOrigin: M?.id !== w.id ? F : void 0,
            analyticsLocations: Y,
            returnRef: L,
            onClose: n,
            onTrackClick: en,
        };
    return (0, i.jsx)(x.f5, {
        value: Y,
        children: (0, i.jsx)(m.d, {
            returnRef: L,
            transitionState: t,
            onClose: n,
            size: "xl",
            paddingSize: "sm",
            "aria-label": el,
            children: (0, i.jsx)("div", {
                className: ne.C,
                children: (0, i.jsxs)("div", {
                    className: ne.j,
                    children: [
                        (0, i.jsx)(tH, { ...ea }),
                        (0, i.jsx)(t6, {
                            ...ea,
                            isClosing: ei,
                            isOrbCheckoutModalOpen: er,
                            pdpBackground: $,
                            showGoToShop: H,
                        }),
                    ],
                }),
            }),
        }),
    });
};
