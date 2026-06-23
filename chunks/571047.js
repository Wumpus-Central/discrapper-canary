n.d(t, { default: () => t1 });
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
    h = n(793574),
    x = n(688810),
    E = n(139286),
    R = n(903209),
    A = n(652165),
    f = n(287809),
    N = n(174459),
    p = n(564064),
    v = n(440938),
    g = n(298072),
    j = n(993408),
    _ = n(503089),
    I = n(331884),
    C = n(652215),
    T = n(623373),
    O = n(536572),
    k = n(177366),
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
    w = n(375708),
    H = n(701180);
function G(e) {
    let { name: t, typeLabel: n } = e;
    return (0, r.jsxs)(U.E, {
        variant: "text-sm/medium",
        className: H.mC,
        "aria-live": "polite",
        children: [
            (0, r.jsx)("span", { className: H.kx, children: t }),
            null != n && (0, r.jsx)("span", { className: H.FP, children: n }),
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
        className: D()(H.xn, { [H.Y4]: i, [H.u8]: u }),
        onClick: o,
        "aria-label": a,
        children: (0, r.jsx)("div", { className: H.Yf, children: (0, r.jsx)(F.O, { product: c }) }),
    });
}
var K = n(442759),
    W = n(344346),
    Y = n(139136),
    X = n(395744),
    $ = n(929283),
    q = n(719201);
function Z(e) {
    let { item: t, user: n, bundleFirstAvatarDecoration: i, isBundle: s } = e;
    switch (t.type) {
        case L.R.AVATAR_DECORATION:
            return (0, r.jsx)("div", {
                className: q.h1,
                children: (0, r.jsx)($.i, { user: n, item: t, isHighlighted: !0 }),
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
            return (0, r.jsx)("div", { className: s ? q.ob : q.fE, children: (0, r.jsx)(X.A, { frame: t }) });
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
        : (0, r.jsx)(Z, { item: c, user: t, bundleFirstAvatarDecoration: a, isBundle: (0, j.aw)(l) });
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
        ? (0, r.jsx)(U.E, {
              variant: "text-sm/normal",
              className: el.CU,
              children: w.intl.format(w.t.Q1scdE, {
                  helpdeskArticle: et.A.getArticleURL(C.MVz.FRACTIONAL_PREMIUM_ABOUT),
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
        h = (0, g.Q)(t),
        x = (0, T.B1)(t),
        E = x ? t.variants[a ?? h] : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: el.sn,
                children: [
                    (0, r.jsx)(M.D, { variant: "heading-xl/bold", className: el.R_, children: n }),
                    (0, r.jsx)(U.E, { variant: "text-sm/normal", children: d }),
                    (0, r.jsx)(ea, { skuId: u.skuId }),
                    null !== m && (0, r.jsx)(U.E, { variant: "text-xs/normal", className: el.H$, children: m }),
                ],
            }),
            x &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != E &&
                            (0, r.jsx)(U.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                className: el.a9,
                                lineClamp: 1,
                                children: w.intl.format(w.t.EcaRWt, {
                                    value: (0, r.jsx)("span", { className: el.I8, children: E.variantLabel }),
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
    });
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
    eh = n(993077),
    ex = n(245604),
    eE = n(460905),
    eR = n(262295),
    eA = n(320095),
    ef = n(963852),
    eN = n(763754),
    ep = n(20851),
    ev = n(986687),
    eg = n(101058),
    ej = n(84540),
    e_ = n(836602),
    eI = n(428262),
    eC = n(780898),
    eT = n(180129);
function eO(e) {
    let { user: t, innerClassName: n } = e;
    return (0, r.jsx)("div", {
        className: eT.mV,
        children: (0, r.jsx)(eR.A, {
            avatar: (0, r.jsx)(eu.eu, {
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
function ek(e) {
    let { user: t, nameplate: n, avatarDecoration: i } = e,
        s = (0, eC.Ov)();
    return (0, r.jsx)("div", {
        className: eT.nJ,
        role: "img",
        "aria-label": w.intl.string(w.t.SZeUdR),
        children: (0, r.jsxs)(em.M, {
            children: [
                (0, r.jsx)(eO, { user: s.mallow, innerClassName: eT.ab }),
                (0, r.jsxs)(U.E, {
                    variant: "text-sm/semibold",
                    className: eT.OS,
                    children: [w.intl.string(w.t["yzW/fZ"]), " - 3"],
                }),
                (0, r.jsx)(eO, { user: s.phibi, innerClassName: eT.e9 }),
                (0, r.jsx)("div", {
                    className: eT.mV,
                    children: (0, r.jsx)(W.A, {
                        className: eT.M4,
                        innerClassName: eT.e9,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: !0,
                        skipEffectDisplayName: !0,
                        pendingAvatarDecoration: i,
                        hideDecorators: !0,
                    }),
                }),
                (0, r.jsx)(eO, { user: s.locke, innerClassName: eT.e9 }),
                (0, r.jsxs)(U.E, {
                    variant: "text-sm/semibold",
                    className: eT.OS,
                    children: [w.intl.string(w.t["NG43/6"]), " - 12"],
                }),
                (0, r.jsx)(eO, { user: s.boom, innerClassName: eT.bD }),
                (0, r.jsx)(eO, { user: s.cherry, innerClassName: eT.bD }),
            ],
        }),
    });
}
function eL(e) {
    let { user: t } = e,
        n = (function (e) {
            let { author: t } = e;
            return (0, eA.rh)({
                ...(0, ef.Ay)({ author: t, channelId: "1337", content: w.intl.string(w.t.d5YwK5) }),
                state: C.cmJ.SENT,
                id: "0",
            });
        })({ author: t });
    return (0, r.jsx)("div", {
        role: "img",
        "aria-label": w.intl.string(w.t["TN+ZvB"]),
        children: (0, r.jsx)(em.M, {
            children: (0, r.jsxs)(eh.Z, {
                className: eT.f7,
                outline: !0,
                "aria-hidden": !0,
                children: [
                    (0, r.jsx)(ep.A, { className: eT.G5, author: (0, eN.p_)(n), message: n }, n.id),
                    (0, r.jsxs)("div", {
                        className: eT.lG,
                        children: [
                            (0, r.jsx)(ex.U, { size: "md", color: "currentColor", className: eT.hq }),
                            (0, r.jsx)(eE.n, { size: "md", color: "currentColor", className: eT.hq }),
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
        o = (0, eg.V7)({ userId: n.id, image: a }),
        d = t.type === L.R.BUNDLE ? t.items[i ?? 0] : void 0,
        m = d?.type ?? t.type,
        h = m === L.R.AVATAR_DECORATION,
        x = m === L.R.PROFILE_EFFECT,
        { firstAvatarDecoration: E, firstProfileEffect: R, firstNameplate: A, firstProfileFrame: f } = (0, K.f5)(t),
        N = d?.type === L.R.AVATAR_DECORATION ? d : E,
        p = d?.type === L.R.PROFILE_EFFECT ? d : R,
        v = d?.type === L.R.PROFILE_FRAME ? d : f,
        g = d?.type === L.R.NAMEPLATE ? d : A;
    if (
        (s.useEffect(() => {
            if (null != N) return (0, ej.p)({ avatarDecoration: N }), () => (0, ej.p)({ avatarDecoration: void 0 });
        }, [N]),
        m === L.R.NAMEPLATE && null != g)
    )
        return (0, r.jsx)("div", {
            className: eT.Zj,
            children: (0, r.jsx)(ek, { user: n, nameplate: g, avatarDecoration: N }),
        });
    return (0, r.jsx)("div", {
        className: h ? eT.RA : eT.hZ,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(ev.A, {
                    ...c,
                    pendingAvatar: o,
                    user: n,
                    canUsePremiumCustomization: l,
                    pendingAvatarDecoration: N,
                    pendingProfileEffect: p,
                    profileEffectRestartKey: i,
                    pendingProfileFrame: v,
                    disabledInputs: !0,
                    hideMessageInput: !x,
                    hideCustomStatus: !0,
                    hideBioSection: h,
                    hideExampleButton: !0,
                    interactive: !1,
                    className: h ? eT.oB : void 0,
                }),
                h && (0, r.jsx)(eL, { user: n }),
            ],
        }),
    });
}
function ey(e) {
    let { user: t, selectedProduct: n, previewingProduct: i, selectedBundleSlide: s } = e;
    return (0, r.jsx)(eb, { user: t, product: i ?? n, activeBundleSlide: s });
}
var eP = n(478016),
    eS = n(661531),
    eD = n(224016),
    eB = n(913521);
function eU() {
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
                                (0, r.jsx)(eP.U, { color: eS.A.colors.WHITE }),
                                (0, r.jsx)(U.E, {
                                    variant: "text-sm/medium",
                                    color: "always-white",
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
var eM = n(17928),
    eF = n(576052),
    ew = n(83554);
function eH(e) {
    let { user: t } = e,
        n = eI.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: i, ...s } = (0, eM.cf)([e_.A], () => e_.A.getPendingChanges()),
        l = (0, eg.V7)({ userId: t.id, image: i });
    return (0, r.jsx)("div", {
        className: ew.k,
        children: (0, r.jsx)(ev.A, {
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
    let { user: t, productRecord: n, isClosing: i, isOrbCheckoutModalOpen: s } = e;
    return n.skuId === es.Dp.ORB_PROFILE_BADGE
        ? i || s
            ? null
            : (0, r.jsx)(eH, { user: t })
        : (0, es.EZ)(n.skuId)
          ? (0, r.jsx)(eU, {})
          : (0, r.jsx)(Q.B, { product: n, className: eG.M });
}
let ez = {
    [eo.COLLECTIBLE]: { LeftPreview: J, Info: ec, RightPreview: ey },
    [eo.BUNDLE]: {
        LeftPreview: J,
        Info: function (e) {
            let { productRecord: t, productName: n, selectedBundleSlide: i, setSelectedBundleSlide: l } = e,
                a = t.items,
                c = t.bundledProducts,
                o = c?.[i]?.name,
                u = a[i]?.type,
                d = null != u ? (0, j.Dm)(u) : null,
                m = w.intl.string(w.t.cTbdgu),
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
            return (
                s.useEffect(() => {
                    let e = h.current;
                    if (null == e || !e.contains(document.activeElement)) return;
                    let t = e.querySelectorAll('[role="radio"]');
                    t[i]?.focus();
                }, [i]),
                (0, r.jsxs)("div", {
                    className: H.Qf,
                    children: [
                        (0, r.jsx)(M.D, { variant: "heading-xl/bold", className: H.R_, title: n, children: n }),
                        (0, r.jsx)(U.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: w.intl.format(w.t["1tUCAO"], { count: a.length }),
                        }),
                        (0, r.jsxs)("div", {
                            className: H.hZ,
                            children: [
                                (0, r.jsx)("div", {
                                    className: H.vg,
                                    children: (0, r.jsx)("div", {
                                        ref: h,
                                        className: H.hK,
                                        role: "radiogroup",
                                        "aria-label": m,
                                        tabIndex: -1,
                                        onKeyDown: x,
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
    eX = n(268959),
    e$ = n(958942);
function eq(e) {
    let { productRecord: t, selectedProduct: n } = e,
        i = (0, eW.Do)("CollectiblesShopProductDetailsModal") && n.type === L.R.PROFILE_FRAME;
    return (0, r.jsx)("div", {
        className: e$.N,
        children: i
            ? (0, r.jsx)(eY.A, { location: "CollectiblesShopProductDetailsModal" })
            : (0, r.jsx)(eX.A, { skuId: t.skuId }),
    });
}
var eZ = n(990078),
    eJ = n(462887),
    eQ = n(821609),
    e0 = n(318254),
    e1 = n(825484),
    e5 = n(331322),
    e2 = n(736653),
    e7 = n(44120),
    e8 = n(465794),
    e4 = n(757036),
    e9 = n(761705),
    e3 = n(580630),
    e6 = n(4227),
    te = n(940980),
    tt = n(466459),
    tn = n(395068),
    ti = n(885574),
    tr = n(401231);
function ts(e) {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, r.jsx)(eZ.m, {
              position: "top",
              align: "left",
              text: w.intl.string(w.t.y1VWkZ),
              children: (0, r.jsxs)("div", {
                  className: D()(tr.GX, t),
                  children: [
                      (0, r.jsx)("span", {
                          className: tr.P0,
                          children: (0, r.jsx)(ti.m, { size: "md", color: "currentColor", className: tr.G }),
                      }),
                      (0, r.jsx)(U.E, { variant: "text-md/semibold", children: w.intl.string(w.t.BEjTij) }),
                  ],
              }),
          })
        : (0, r.jsx)(U.E, { variant: "text-md/semibold", className: t, children: w.intl.string(w.t["6cfuDj"]) });
}
var tl = n(878112),
    ta = n(572595),
    tc = n(206835),
    to = n(450481);
let tu = function (e) {
    let { product: t, onSuccess: n, onTrackClick: i } = e,
        { handleUseNow: s, isApplying: l, canUseNow: a } = (0, to.p)({ product: t, onSuccess: n }),
        c = (0, tc.A)();
    return a
        ? (0, r.jsx)(eQ.$, {
              variant: "primary",
              onClick: () => {
                  i?.(es.sH.USE_NOW), s();
              },
              loading: l,
              text: w.intl.string(w.t.MAS7uK),
              fullWidth: !0,
          })
        : (0, r.jsx)(eQ.$, {
              variant: "primary",
              onClick: () => {
                  i?.(es.sH.EDIT_PROFILE), c(), n?.();
              },
              text: w.intl.string(w.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var td = n(226236);
let tm = function (e) {
    let { analyticsLocations: t, children: n } = e;
    return (0, r.jsx)(x.f5, {
        value: [...t, h.A.PROFILE_FRAMES_EA_MARKETING],
        children: (0, r.jsxs)("div", {
            className: td.k,
            children: [
                (0, r.jsx)(U.E, {
                    variant: "text-xs/semibold",
                    color: "text-strong",
                    children: w.intl.format(w.t["3cglst"], {
                        articleURL: et.A.getArticleURL(C.MVz.SHOP_FRAMES_EARLY_ACCESS),
                    }),
                }),
                n,
            ],
        }),
    });
};
var th = n(561769),
    tx = n(140735),
    tE = n(252955);
function tR(e) {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: s = "heading-md/semibold",
        } = e,
        l = (0, e3.RS)(t, n);
    return (0, r.jsxs)(U.E, {
        variant: s,
        className: D()(tE.v, i),
        children: [
            (0, r.jsx)(tx.A, { children: w.intl.format(w.t["2CEGln"], { price: l }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: l }),
        ],
    });
}
var tA = n(219103),
    tf = n(469215);
function tN(e) {
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
        d = (0, j.WD)(t, { hasShopDiscount: n, discount: s });
    if (null == d) return null;
    let { defaultPrice: m, showDefaultPriceOnly: h } = d;
    if (h)
        return (0, r.jsx)("div", {
            className: D()(tf.kG, l),
            children: (0, r.jsx)(tA.x, { priceAmount: m.amount, priceCurrency: m.currency }),
        });
    let { showDiscountPrice: x, originalPrice: E, finalPrice: R } = d;
    return (0, r.jsxs)("div", {
        className: D()(tf.kG, l),
        children: [
            c ? null : (0, r.jsx)(tR, { price: E, className: tf.q9 }),
            (0, r.jsx)(tA.x, {
                priceAmount: R.amount,
                priceCurrency: R.currency,
                discount: s,
                className: D()({ [tf.q9]: null == a }),
                discountIconConfig: x && null != o ? { displayMode: o, source: i ?? j.D0.NITRO, size: u } : void 0,
                discountOfferAmount: a,
            }),
        ],
    });
}
var tp = n(403581),
    tv = n(532794),
    tg = n(788868),
    tj = n(447806);
function t_(e) {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: i } = (0, x.Ay)(),
        l = s.useRef(null);
    return (0, r.jsx)(B.D, {
        className: tj.F,
        innerRef: l,
        onClick: () => {
            n?.(es.sH.SUBSCRIBE_NOW),
                (0, tv.A)({ subscriptionTier: tg.pe.TIER_2, analyticsLocations: i, returnRef: l });
        },
        children: t,
    });
}
var tI = n(805961);
function tC(e) {
    let { product: t, onTrackClick: n } = e,
        i = (0, j.yt)(t, C.lid.PREMIUM_TIER_2);
    if (null == i) return null;
    let s = (0, e3.RS)(i.amount, i.currency);
    return (0, r.jsxs)("div", {
        className: tI.k,
        children: [
            (0, r.jsx)(eZ.m, {
                text: w.intl.string(w.t.MPFyJ5),
                "aria-label": w.intl.string(w.t.X3Ekj8),
                children: (0, r.jsx)(tp.t, { size: "md", color: "currentColor", className: tI.o }),
            }),
            (0, r.jsx)(U.E, {
                variant: "text-xs/medium",
                children: w.intl.format(w.t.Sv8iic, {
                    price: s,
                    subscribeNowHook: (e) => (0, r.jsx)(t_, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
var tT = n(818348),
    tO = n(752274);
function tk(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: i } = e,
        s = n ? w.intl.string(w.t.wu4gyV) : w.intl.string(w.t.eFNRzU),
        l = n || !i;
    return (0, r.jsxs)("div", {
        className: tO.eg,
        children: [
            (0, r.jsx)("div", {
                className: tO.zR,
                children: (0, r.jsx)(U.E, { variant: "text-xs/normal", className: l ? tO.r9 : void 0, children: s }),
            }),
            (0, r.jsx)(tA.x, { priceAmount: t.amount, priceCurrency: t.currency, className: l ? tO.r9 : void 0 }),
        ],
    });
}
function tL(e) {
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
          ? (0, r.jsx)(tk, { orbPrice: t[0], isProductDisabled: o, hasSufficientOrbs: a })
          : (0, r.jsxs)("div", {
                className: tO.eg,
                children: [
                    (0, r.jsxs)("div", {
                        className: tO.pw,
                        children: [
                            (0, r.jsx)(tN, {
                                product: l,
                                discount: s,
                                hasShopDiscount: n,
                                discountSource: i,
                                hideStrikethroughPrice: !n || d,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                                discountOfferAmount: u,
                            }),
                            n || d ? null : (0, r.jsx)(tC, { product: l, onTrackClick: c }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === tT.Yr.DISCORD_ORB &&
                        (0, r.jsx)(tA.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: o || !a ? tO.r9 : void 0,
                        }),
                ],
            });
}
var tb = n(525723),
    ty = n(347722),
    tP = n(57020),
    tS = n(61750),
    tD = n(237309);
function tB(e) {
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
            returnRef: h,
            onClose: x,
            onTrackClick: E,
        } = e,
        { cardId: R, sessionId: f, tilePosition: N } = (0, v.uM)() ?? {},
        g = (0, e4.L)(tg.PremiumTypes.TIER_2),
        _ = (0, j.xM)(t),
        I = (0, eW.Do)("CollectiblesShopProductDetailsModal") && i.type === L.R.PROFILE_FRAME,
        T = eI.Ay.canUseShopDiscounts(t) || I,
        O = (0, tt.h)(n),
        { isPurchased: k, isPartiallyOwnedBundle: b } = (0, tt.h)(i),
        { isDisabled: y } = (0, ei.I)(i.skuId),
        P = (0, j.Zu)({ product: i, isPartiallyOwnedBundle: b, isPurchased: k }),
        S = (0, u.bG)([e6.A], () => e6.A.isClaiming === i?.skuId),
        B = (0, e2.Ay)(),
        M = (0, eJ.M)(B),
        F = (0, j.G0)(i),
        H = (0, j.yt)(i, C.lid.DEFAULT),
        G = H?.amount === 0,
        V = s.useMemo(() => (0, j.fT)(i, T), [i, T]),
        z = (0, ty.X)(i),
        K = (0, tb.V_)(n),
        W = null != K,
        Y = (0, te.W)("CollectiblesShopProductDetailsModal"),
        X = c === es.G2.ORBS && a ? th.Hi.ORBS : Y ? th.Hi.FIAT : void 0,
        { checkoutEligiblePrices: $, hasSufficientOrbs: q } = (0, tP.F)({
            product: i,
            hasShopDiscount: T,
            hasDiscountOffer: W,
            prioritizedCurrency: X,
        }),
        Z = (0, tn.A)({ location: "CollectiblesShopProductDetailsModal", product: i }),
        J = s.useMemo(() => $.some((e) => e.currency === tT.Yr.DISCORD_ORB), [$]);
    (0, e9.W)({ disableFetch: !J });
    let Q = s.useCallback(() => {
        E(es.sH.BUY_WITH_FIAT),
            (0, e7.A)({
                skuId: i.skuId,
                analyticsLocations: m,
                discoverySessionId: f,
                onClose: (e) => (e ? x() : (0, tT.tE)()),
            });
    }, [m, x, i.skuId, E, f]);
    function ee(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = (0, r.jsx)(e8.A, {
                subscriptionTier: tg.pe.TIER_2,
                fullWidth: !0,
                buttonTextOverride: e,
                onClick: () => {
                    E(es.sH.UNLOCK_WITH_NITRO), (0, ta.M)();
                },
                onSubscribeModalClose: () => {
                    (0, ta.t)({
                        product: n,
                        category: l,
                        shouldCheckoutWithOrbs: a,
                        returnRef: h,
                        analyticsLocations: m,
                        tab: c,
                        giftRecipient: o,
                        giftingOrigin: d,
                        cardId: R,
                        sessionId: f,
                        tilePosition: N,
                    });
                },
            });
        return t ? (0, r.jsx)(tm, { analyticsLocations: m, children: i }) : i;
    }
    return (0, r.jsxs)("div", {
        className: tD.iw,
        children: [
            O.isPurchased || O.isPartiallyOwnedBundle
                ? (0, r.jsx)(ts, { className: tD.On, isPartiallyPurchased: b })
                : F
                  ? (0, r.jsxs)("div", {
                        className: tD.pq,
                        children: [
                            (0, r.jsx)(U.E, { variant: "text-md/semibold", children: w.intl.string(w.t.rt69oo) }),
                            !k &&
                                (0, r.jsx)(U.E, {
                                    className: D()(tD.ed, !M && tD.un),
                                    variant: "text-xxs/normal",
                                    children: w.intl.string(w.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, r.jsx)(tL, {
                        prices: $,
                        product: i,
                        hasShopDiscount: T,
                        discountSource: _,
                        discount: V,
                        hasSufficientOrbs: q,
                        isProductDisabled: y,
                        discountOfferAmount: K,
                        onTrackClick: E,
                    }),
            (0, r.jsx)(e5.B, {
                direction: "vertical",
                gap: 8,
                children:
                    !F || g || G
                        ? P
                            ? k
                                ? z
                                    ? (0, r.jsxs)(e1.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, r.jsx)(tu, { product: i, onSuccess: x, onTrackClick: E }),
                                              (0, r.jsx)(tl.A, {
                                                  primary: !0,
                                                  product: i,
                                                  onSuccess: x,
                                                  giftRecipient: o,
                                                  giftingOrigin: d,
                                                  onTrackClick: E,
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(tu, { product: i, onSuccess: x, onTrackClick: E })
                                : Z
                                  ? ee(w.intl.string(w.t["9wfL34"]), !0)
                                  : F
                                    ? (0, r.jsx)(eQ.$, {
                                          loading: S,
                                          loadingStartedLabel: w.intl.string(w.t["TYw+9s"]),
                                          loadingFinishedLabel: w.intl.string(w.t.Pg1UP5),
                                          onClick: async () => {
                                              E(es.sH.ADD_TO_COLLECTION),
                                                  await (0, p.iJ)(i.skuId),
                                                  x(),
                                                  (0, tS.A)({
                                                      product: i,
                                                      analyticsLocations: m,
                                                      purchaseType: es.gs.PREMIUM_PURCHASE,
                                                  });
                                          },
                                          text: w.intl.string(w.t.zp6caO),
                                          fullWidth: !0,
                                      })
                                    : (0, r.jsx)(r.Fragment, {
                                          children: $.map((e, t) => {
                                              let n,
                                                  l,
                                                  a,
                                                  c,
                                                  u,
                                                  h = 0 === t,
                                                  R =
                                                      e.currency === tT.Yr.DISCORD_ORB
                                                          ? ((n = y
                                                                ? w.intl.string(w.t.cTdr3x)
                                                                : w.intl.string(w.t.zqh7ZM)),
                                                            (l = !q || y),
                                                            (a = w.intl.formatToPlainString(w.t.yi41qQ, {
                                                                orbPrice: e.amount,
                                                            })),
                                                            (c = l ? `${a}, ${n}` : a),
                                                            (0, r.jsx)(eZ.m, {
                                                                position: "top",
                                                                text: n,
                                                                shouldShow: l,
                                                                "aria-label": !1,
                                                                children: (0, r.jsx)(eQ.$, {
                                                                    variant: h ? "primary" : "secondary",
                                                                    onClick: function () {
                                                                        E(es.sH.BUY_WITH_ORBS),
                                                                            (0, A.B4)({
                                                                                skuId: i.skuId,
                                                                                onComplete: (e) => {
                                                                                    (0, p.gB)(),
                                                                                        x(),
                                                                                        (0, tS.A)({
                                                                                            product: i,
                                                                                            analyticsLocations: m,
                                                                                            itemConsumed:
                                                                                                e?.entitlements?.[0]
                                                                                                    ?.consumed,
                                                                                            purchaseType: es.gs.ORB,
                                                                                        });
                                                                                },
                                                                                analyticsLocations: m,
                                                                                discoverySessionId: f,
                                                                            });
                                                                    },
                                                                    disabled: l,
                                                                    "aria-label": c,
                                                                    text: w.intl.format(w.t.JC15qj, {
                                                                        orbPrice: e.amount,
                                                                        orbIconHook: () =>
                                                                            (0, r.jsx)(e0.C, {
                                                                                className: tD.fN,
                                                                                size: "sm",
                                                                                color: "currentColor",
                                                                            }),
                                                                    }),
                                                                    fullWidth: !0,
                                                                }),
                                                            }))
                                                          : ((u = W
                                                                ? w.intl.formatToPlainString(w.t["5U5RB5"], {
                                                                      discountOfferAmount: K,
                                                                  })
                                                                : w.intl.formatToPlainString(w.t["cNSL/j"], {
                                                                      price: (0, e3.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, r.jsxs)(e1.e, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(eQ.$, {
                                                                        variant: h ? "primary" : "secondary",
                                                                        onClick: Q,
                                                                        text: u,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    z &&
                                                                        (0, r.jsx)(tl.A, {
                                                                            primary: h,
                                                                            product: i,
                                                                            onSuccess: x,
                                                                            giftRecipient: o,
                                                                            giftingOrigin: d,
                                                                            onTrackClick: E,
                                                                        }),
                                                                ],
                                                            }));
                                              return (0, r.jsx)(s.Fragment, { children: R }, e.currency);
                                          }),
                                      })
                            : z
                              ? (0, r.jsx)(tl.A, {
                                    primary: !0,
                                    product: i,
                                    onSuccess: x,
                                    fullWidth: !0,
                                    giftRecipient: o,
                                    giftingOrigin: d,
                                    onTrackClick: E,
                                })
                              : null
                        : ee(w.intl.string(w.t.sEAnVH)),
            }),
        ],
    });
}
var tU = n(18967);
function tM(e) {
    let { productRecord: t, selectedProduct: n, previewingProduct: i, user: s, selectedBundleSlide: l } = e,
        a = eK(t);
    return (0, r.jsxs)("div", {
        className: D()(tU.wd, { [tU.E7]: null != a.LeftPreview }),
        children: [
            (0, r.jsx)("div", { className: tU.dL, children: (0, r.jsx)(eq, { productRecord: t, selectedProduct: n }) }),
            null != a.LeftPreview &&
                (0, r.jsx)("div", {
                    className: tU._E,
                    children: (0, r.jsx)(a.LeftPreview, {
                        user: s,
                        selectedProduct: n,
                        previewingProduct: i,
                        productRecord: t,
                        selectedBundleSlide: l,
                    }),
                }),
            (0, r.jsx)("div", { className: tU.F_, children: (0, r.jsx)(a.Info, { ...e }) }),
            (0, r.jsx)(tB, { ...e }),
        ],
    });
}
var tF = n(408278),
    tw = n(972213),
    tH = n(691540),
    tG = n(857250),
    tV = n(97483),
    tz = n(173936),
    tK = n(957565);
function tW(e) {
    let { skuId: t, tab: n, onTrackClick: i } = e,
        l = s.useCallback(() => {
            N.default.track(C.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }), i?.(es.sH.COPY_LINK);
            let e = `${location.protocol}//${location.host}${C.BVt.COLLECTIBLES_SHOP}${((0, es.cw))(n) ? `?tab=${n}` : ""}#itemSkuId=${t}`;
            (0, tK.C)(e, () => (0, tH.P0)((0, tG.o)(w.intl.string(w.t["L/PwZf"]), tV.Ck.SUCCESS)));
        }, [t, n, i]);
    return (0, r.jsx)(tF.K, {
        "aria-label": w.intl.string(w.t.WqhZss),
        onClick: l,
        icon: tz.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
var tY = n(139146),
    tX = n(668953),
    t$ = n(881636),
    tq = n(428445);
function tZ(e) {
    let { goPrev: t, goNext: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: tq.Y,
                children: (0, r.jsx)(tF.K, {
                    "aria-label": w.intl.string(w.t["3NdvMK"]),
                    onClick: t,
                    icon: tX.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, r.jsx)("div", {
                className: tq.K,
                children: (0, r.jsx)(tF.K, {
                    "aria-label": w.intl.string(w.t.RYIeOX),
                    onClick: n,
                    icon: t$.u,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
}
var tJ = n(742441);
function tQ(e) {
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
            tab: h,
            onClose: x,
            onTrackClick: E,
        } = e,
        R = eK(n),
        A = (0, j.aw)(l),
        f = A ? l.items.length : 0,
        N = s.useCallback(() => {
            f <= 1 || o((e) => (e - 1 + f) % f);
        }, [f, o]),
        p = s.useCallback(() => {
            f <= 1 || o((e) => (e + 1) % f);
        }, [f, o]),
        v = s.useCallback(
            (e) => {
                if (f <= 1) return;
                let t = e.target;
                "INPUT" === t.tagName ||
                    "TEXTAREA" === t.tagName ||
                    t.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), N())
                        : "ArrowRight" === e.key && (e.preventDefault(), p()));
            },
            [f, N, p],
        ),
        g = s.useCallback(() => {
            E(es.sH.CLOSE_DETAIL), x();
        }, [E, x]),
        _ = s.useRef(null),
        I = s.useRef(!0);
    return (
        s.useLayoutEffect(() => {
            if (I.current) {
                I.current = !1;
                return;
            }
            let e = _.current;
            null != e && ((e.style.animation = "none"), e.offsetHeight, (e.style.animation = ""));
        }, [c]),
        (0, r.jsxs)("div", {
            className: D()(tJ.i1, (0, es.EZ)(l.skuId) ? tJ.bF : l.type === L.R.AVATAR_DECORATION ? tJ.Jq : tJ.eF),
            style: null != m ? { backgroundImage: `url(${m})` } : void 0,
            onKeyDown: v,
            children: [
                (0, r.jsx)("div", {
                    className: tJ.KR,
                    ref: _,
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
                A && f > 1 && (0, r.jsx)(tZ, { goPrev: N, goNext: p }),
                (0, r.jsxs)("div", {
                    className: tJ.VG,
                    children: [
                        (0, r.jsx)(tY.R, {
                            product: n,
                            selectedVariantIndex: a,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: E,
                        }),
                        (0, r.jsx)(tW, { skuId: l.skuId, tab: h, onTrackClick: E }),
                        (0, r.jsx)(tF.K, {
                            "aria-label": w.intl.string(w.t.cpT0Cq),
                            onClick: g,
                            icon: tw.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            ],
        })
    );
}
var t0 = n(460510);
let t1 = function (e) {
    let {
            transitionState: t,
            onClose: n,
            product: i,
            category: l,
            returnRef: L,
            analyticsSource: S,
            analyticsLocations: D,
            shouldCheckoutWithOrbs: B,
            tab: U,
            giftRecipient: M,
            giftingOrigin: F,
        } = e,
        w = (0, u.bG)([f.default], () => f.default.getCurrentUser()),
        H = (0, P.f)(i),
        { previewingVariantIndex: G } = H,
        V = (0, g.Q)(i),
        z = b(i, G),
        K = (0, T.rb)(i, V);
    a()(null != K, "Selected product should not be null");
    let { analyticsLocations: W } = (0, x.Ay)([...D, h.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, k.Yr)(K.skuId);
    let Y = (0, y.U1)(l),
        [X, $] = s.useState(0);
    s.useEffect(() => {
        null != w && (0, R.A)(w.id, w.getAvatarURL(void 0, 80));
    }, [w]);
    let q = s.useMemo(() => (0, j.V6)(i.type, i.skuId), [i.type, i.skuId]);
    s.useEffect(() => {
        N.default.track(C.HAw.OPEN_MODAL, {
            type: C.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
            source: S,
            location_stack: W,
            sku_id: K.skuId,
            product_type: q,
        }),
            (0, p.RD)(K.skuId);
    }, [S, W, K.skuId, q]);
    let { cardId: Z, sessionId: J, tilePosition: Q } = (0, v.uM)() ?? {},
        ee = s.useMemo(() => (0, T.v8)(i), [i]),
        et = (function (e) {
            let { skuId: t, productSkuIds: n, analyticsLocations: i } = e,
                { cardId: r, sessionId: l } = (0, v.uM)() ?? {},
                a = (0, I.o)(),
                c = (0, j.xM)(a);
            return s.useCallback(
                (e) => {
                    N.default.track(C.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                        sku_id: t,
                        cta: e,
                        shop_session_id: l,
                        card_id: r,
                        product_sku_ids: n,
                        location_stack: i,
                        discount_source: (0, j.b_)(c),
                    });
                },
                [t, i, r, n, l, c],
            );
        })({ skuId: K.skuId, productSkuIds: ee, analyticsLocations: W });
    (0, E.A)({
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
    let en = (0, A.o6)(),
        ei = t === d.ip.EXITING,
        er = (0, _.c)("product_details_modal");
    if (null == w || (i.skuId === o.j.PREMIUM_TIER_2_1_DAY && !er)) return null;
    let es = (0, O.VG)(i),
        el = {
            user: w,
            productRecord: i,
            productName: es,
            selectedProduct: K,
            previewingProduct: z ?? null,
            category: l,
            selectedVariantIndex: V,
            previewingVariantIndexProps: H,
            selectedBundleSlide: X,
            setSelectedBundleSlide: $,
            tab: U,
            shouldCheckoutWithOrbs: B,
            giftRecipient: M?.id !== w.id ? M : void 0,
            giftingOrigin: M?.id !== w.id ? F : void 0,
            analyticsLocations: W,
            returnRef: L,
            onClose: n,
            onTrackClick: et,
        };
    return (0, r.jsx)(x.f5, {
        value: W,
        children: (0, r.jsx)(m.d, {
            returnRef: L,
            transitionState: t,
            onClose: n,
            size: "xl",
            paddingSize: "sm",
            "aria-label": es,
            children: (0, r.jsx)("div", {
                className: t0.C,
                children: (0, r.jsxs)("div", {
                    className: t0.j,
                    children: [
                        (0, r.jsx)(tM, { ...el }),
                        (0, r.jsx)(tQ, { ...el, isClosing: ei, isOrbCheckoutModalOpen: en, pdpBackground: Y }),
                    ],
                }),
            }),
        }),
    });
};
