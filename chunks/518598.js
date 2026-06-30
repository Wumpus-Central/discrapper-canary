n.d(t, { default: () => t6 });
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
    E = n(688810),
    x = n(139286),
    R = n(903209),
    A = n(652165),
    f = n(287809),
    p = n(174459),
    N = n(662388),
    v = n(440938),
    g = n(298072),
    j = n(993408),
    _ = n(503089),
    I = n(331884),
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
    B = n.n(S),
    D = n(939249),
    U = n(834730),
    M = n(534514),
    H = n(456839),
    w = n(375708),
    F = n(701180);
function G(e) {
    let { name: t, typeLabel: n } = e;
    return (0, r.jsxs)(U.E, {
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
    return (0, r.jsx)(D.D, {
        tag: "div",
        role: "radio",
        "aria-checked": i,
        tabIndex: i ? 0 : -1,
        className: B()(F.xn, { [F.Y4]: i, [F.u8]: u }),
        onClick: o,
        "aria-label": a,
        children: (0, r.jsx)("div", { className: F.Yf, children: (0, r.jsx)(H.O, { product: c }) }),
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
        E = (0, T.B1)(t),
        x = E ? t.variants[a ?? h] : null;
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
            E &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != x &&
                            (0, r.jsx)(U.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                className: el.a9,
                                lineClamp: 1,
                                children: w.intl.format(w.t.EcaRWt, {
                                    value: (0, r.jsx)("span", { className: el.I8, children: x.variantLabel }),
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
    eE = n(245604),
    ex = n(460905),
    eR = n(262295),
    eA = n(320095),
    ef = n(963852),
    ep = n(763754),
    eN = n(20851),
    ev = n(986687),
    eg = n(101058),
    ej = n(84540),
    e_ = n(836602),
    eI = n(428262),
    eC = n(780898),
    eT = n(180129);
function ek(e) {
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
            innerClassName: B()(eT.$L, n),
        }),
    });
}
function eO(e) {
    let { user: t, nameplate: n, avatarDecoration: i } = e,
        s = (0, eC.Ov)();
    return (0, r.jsx)("div", {
        className: eT.nJ,
        role: "img",
        "aria-label": w.intl.string(w.t.SZeUdR),
        children: (0, r.jsxs)(em.M, {
            children: [
                (0, r.jsx)(ek, { user: s.mallow, innerClassName: eT.ab }),
                (0, r.jsxs)(U.E, {
                    variant: "text-sm/semibold",
                    className: eT.OS,
                    children: [w.intl.string(w.t["yzW/fZ"]), " - 3"],
                }),
                (0, r.jsx)(ek, { user: s.phibi, innerClassName: eT.e9 }),
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
                (0, r.jsx)(ek, { user: s.locke, innerClassName: eT.e9 }),
                (0, r.jsxs)(U.E, {
                    variant: "text-sm/semibold",
                    className: eT.OS,
                    children: [w.intl.string(w.t["NG43/6"]), " - 12"],
                }),
                (0, r.jsx)(ek, { user: s.boom, innerClassName: eT.bD }),
                (0, r.jsx)(ek, { user: s.cherry, innerClassName: eT.bD }),
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
                    (0, r.jsx)(eN.A, { className: eT.G5, author: (0, ep.p_)(n), message: n }, n.id),
                    (0, r.jsxs)("div", {
                        className: eT.lG,
                        children: [
                            (0, r.jsx)(eE.U, { size: "md", color: "currentColor", className: eT.hq }),
                            (0, r.jsx)(ex.n, { size: "md", color: "currentColor", className: eT.hq }),
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
        E = m === L.R.PROFILE_EFFECT,
        { firstAvatarDecoration: x, firstProfileEffect: R, firstNameplate: A, firstProfileFrame: f } = (0, K.f5)(t),
        p = d?.type === L.R.AVATAR_DECORATION ? d : x,
        N = d?.type === L.R.PROFILE_EFFECT ? d : R,
        v = d?.type === L.R.PROFILE_FRAME ? d : f,
        g = d?.type === L.R.NAMEPLATE ? d : A;
    if (
        (s.useEffect(() => {
            if (null != p) return (0, ej.p)({ avatarDecoration: p }), () => (0, ej.p)({ avatarDecoration: void 0 });
        }, [p]),
        m === L.R.NAMEPLATE && null != g)
    )
        return (0, r.jsx)("div", {
            className: eT.Zj,
            children: (0, r.jsx)(eO, { user: n, nameplate: g, avatarDecoration: p }),
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
                    pendingAvatarDecoration: p,
                    pendingProfileEffect: N,
                    profileEffectRestartKey: i,
                    pendingProfileFrame: v,
                    disabledInputs: !0,
                    hideMessageInput: !E,
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
    eB = n(224016),
    eD = n(913521);
function eU() {
    let e = [w.t.E1NP2x, w.t.kpMomJ, w.t.xT1Vfn, w.t.myyAEr, w.t.zTk8Ul];
    return (0, r.jsxs)("div", {
        className: eD.kL,
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: eD.ym,
            }),
            (0, r.jsx)(eB.A, { color: "white" }),
            (0, r.jsx)("div", {
                className: eD.PX,
                children: e.map((e, t) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: eD.UJ,
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
    eH = n(576052),
    ew = n(83554);
function eF(e) {
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
                E = s.useCallback(
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
                    className: F.Qf,
                    children: [
                        (0, r.jsx)(M.D, { variant: "heading-xl/bold", className: F.R_, title: n, children: n }),
                        (0, r.jsx)(U.E, {
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
                                        ref: h,
                                        className: F.hK,
                                        role: "radiogroup",
                                        "aria-label": m,
                                        tabIndex: -1,
                                        onKeyDown: E,
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
    e2 = n(331322),
    e4 = n(736653),
    e8 = n(44120),
    e3 = n(465794),
    e9 = n(757036),
    e7 = n(761705),
    e5 = n(580630),
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
                  className: B()(tr.GX, t),
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
    return (0, r.jsx)(E.f5, {
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
    tE = n(140735),
    tx = n(252955);
function tR(e) {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: s = "heading-md/semibold",
        } = e,
        l = (0, e5.RS)(t, n);
    return (0, r.jsxs)(U.E, {
        variant: s,
        className: B()(tx.v, i),
        children: [
            (0, r.jsx)(tE.A, { children: w.intl.format(w.t["2CEGln"], { price: l }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: l }),
        ],
    });
}
var tA = n(219103),
    tf = n(469215);
function tp(e) {
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
            className: B()(tf.kG, l),
            children: (0, r.jsx)(tA.x, { priceAmount: m.amount, priceCurrency: m.currency }),
        });
    let { showDiscountPrice: E, originalPrice: x, finalPrice: R } = d;
    return (0, r.jsxs)("div", {
        className: B()(tf.kG, l),
        children: [
            c ? null : (0, r.jsx)(tR, { price: x, className: tf.q9 }),
            (0, r.jsx)(tA.x, {
                priceAmount: R.amount,
                priceCurrency: R.currency,
                discount: s,
                className: B()({ [tf.q9]: null == a }),
                discountIconConfig: E && null != o ? { displayMode: o, source: i ?? j.D0.NITRO, size: u } : void 0,
                discountOfferAmount: a,
            }),
        ],
    });
}
var tN = n(403581),
    tv = n(532794),
    tg = n(788868),
    tj = n(447806);
function t_(e) {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: i } = (0, E.Ay)(),
        l = s.useRef(null);
    return (0, r.jsx)(D.D, {
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
    let s = (0, e5.RS)(i.amount, i.currency);
    return (0, r.jsxs)("div", {
        className: tI.k,
        children: [
            (0, r.jsx)(eZ.m, {
                text: w.intl.string(w.t.MPFyJ5),
                "aria-label": w.intl.string(w.t.X3Ekj8),
                children: (0, r.jsx)(tN.t, { size: "md", color: "currentColor", className: tI.o }),
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
    tk = n(752274);
function tO(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: i } = e,
        s = n ? w.intl.string(w.t.wu4gyV) : w.intl.string(w.t.eFNRzU),
        l = n || !i;
    return (0, r.jsxs)("div", {
        className: tk.eg,
        children: [
            (0, r.jsx)("div", {
                className: tk.zR,
                children: (0, r.jsx)(U.E, { variant: "text-xs/normal", className: l ? tk.r9 : void 0, children: s }),
            }),
            (0, r.jsx)(tA.x, { priceAmount: t.amount, priceCurrency: t.currency, className: l ? tk.r9 : void 0 }),
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
          ? (0, r.jsx)(tO, { orbPrice: t[0], isProductDisabled: o, hasSufficientOrbs: a })
          : (0, r.jsxs)("div", {
                className: tk.eg,
                children: [
                    (0, r.jsxs)("div", {
                        className: tk.pw,
                        children: [
                            (0, r.jsx)(tp, {
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
                            className: o || !a ? tk.r9 : void 0,
                        }),
                ],
            });
}
var tb = n(525723),
    ty = n(347722),
    tP = n(57020),
    tS = n(61750),
    tB = n(237309);
function tD(e) {
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
            onClose: E,
            onTrackClick: x,
        } = e,
        { cardId: R, sessionId: f, tilePosition: p } = (0, v.uM)() ?? {},
        g = (0, e9.L)(tg.PremiumTypes.TIER_2),
        _ = (0, j.xM)(t),
        I = (0, eW.Do)("CollectiblesShopProductDetailsModal") && i.type === L.R.PROFILE_FRAME,
        T = eI.Ay.canUseShopDiscounts(t) || I,
        k = (0, tt.h)(n),
        { isPurchased: O, isPartiallyOwnedBundle: b } = (0, tt.h)(i),
        { isDisabled: y } = (0, ei.I)(i.skuId),
        P = (0, j.Zu)({ product: i, isPartiallyOwnedBundle: b, isPurchased: O }),
        S = (0, u.bG)([e6.A], () => e6.A.isClaiming === i?.skuId),
        D = (0, e4.Ay)(),
        M = (0, eJ.M)(D),
        H = (0, j.G0)(i),
        F = (0, j.yt)(i, C.lid.DEFAULT),
        G = F?.amount === 0,
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
    (0, e7.W)({ disableFetch: !J });
    let Q = s.useCallback(() => {
        x(es.sH.BUY_WITH_FIAT),
            (0, e8.A)({
                skuId: i.skuId,
                analyticsLocations: m,
                discoverySessionId: f,
                onClose: (e) => (e ? E() : (0, tT.tE)()),
            });
    }, [m, E, i.skuId, x, f]);
    function ee(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = (0, r.jsx)(e3.A, {
                subscriptionTier: tg.pe.TIER_2,
                fullWidth: !0,
                buttonTextOverride: e,
                onClick: () => {
                    x(es.sH.UNLOCK_WITH_NITRO), (0, ta.M)();
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
                        tilePosition: p,
                    });
                },
            });
        return t ? (0, r.jsx)(tm, { analyticsLocations: m, children: i }) : i;
    }
    return (0, r.jsxs)("div", {
        className: tB.iw,
        children: [
            k.isPurchased || k.isPartiallyOwnedBundle
                ? (0, r.jsx)(ts, { className: tB.On, isPartiallyPurchased: b })
                : H
                  ? (0, r.jsxs)("div", {
                        className: tB.pq,
                        children: [
                            (0, r.jsx)(U.E, { variant: "text-md/semibold", children: w.intl.string(w.t.rt69oo) }),
                            !O &&
                                (0, r.jsx)(U.E, {
                                    className: B()(tB.ed, !M && tB.un),
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
                        onTrackClick: x,
                    }),
            (0, r.jsx)(e2.B, {
                direction: "vertical",
                gap: 8,
                children:
                    !H || g || G
                        ? P
                            ? O
                                ? z
                                    ? (0, r.jsxs)(e1.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, r.jsx)(tu, { product: i, onSuccess: E, onTrackClick: x }),
                                              (0, r.jsx)(tl.A, {
                                                  primary: !0,
                                                  product: i,
                                                  onSuccess: E,
                                                  giftRecipient: o,
                                                  giftingOrigin: d,
                                                  onTrackClick: x,
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(tu, { product: i, onSuccess: E, onTrackClick: x })
                                : Z
                                  ? ee(w.intl.string(w.t["9wfL34"]), !0)
                                  : H
                                    ? (0, r.jsx)(eQ.$, {
                                          loading: S,
                                          loadingStartedLabel: w.intl.string(w.t["TYw+9s"]),
                                          loadingFinishedLabel: w.intl.string(w.t.Pg1UP5),
                                          onClick: async () => {
                                              x(es.sH.ADD_TO_COLLECTION),
                                                  await (0, N.iJ)(i.skuId),
                                                  E(),
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
                                                                        x(es.sH.BUY_WITH_ORBS),
                                                                            (0, A.B4)({
                                                                                skuId: i.skuId,
                                                                                onComplete: (e) => {
                                                                                    (0, N.gB)(),
                                                                                        E(),
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
                                                                                className: tB.fN,
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
                                                                      price: (0, e5.$g)(e.amount, e.currency),
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
                                                                            onSuccess: E,
                                                                            giftRecipient: o,
                                                                            giftingOrigin: d,
                                                                            onTrackClick: x,
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
                                    onSuccess: E,
                                    fullWidth: !0,
                                    giftRecipient: o,
                                    giftingOrigin: d,
                                    onTrackClick: x,
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
        className: B()(tU.wd, { [tU.E7]: null != a.LeftPreview }),
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
            (0, r.jsx)(tD, { ...e }),
        ],
    });
}
var tH = n(34188),
    tw = n(408278),
    tF = n(972213),
    tG = n(976860),
    tV = n(646101),
    tz = n(691540),
    tK = n(857250),
    tW = n(97483),
    tY = n(173936),
    tX = n(957565),
    t$ = n(573749);
function tq(e) {
    let { skuId: t, tab: n, onTrackClick: i } = e,
        l = s.useCallback(() => {
            p.default.track(C.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
                i?.(es.sH.COPY_LINK),
                (0, tX.C)((0, t$.o)(t, n), () => (0, tz.P0)((0, tK.o)(w.intl.string(w.t["L/PwZf"]), tW.Ck.SUCCESS)));
        }, [t, n, i]);
    return (0, r.jsx)(tw.K, {
        "aria-label": w.intl.string(w.t.WqhZss),
        onClick: l,
        icon: tY.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
var tZ = n(427209),
    tJ = n(192308),
    tQ = n(294454);
function t0(e) {
    let { skuId: t, product: i, productName: l, tab: a, onTrackClick: c } = e,
        o = s.useCallback(() => {
            p.default.track(C.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
                c?.(es.sH.SHARE_LINK),
                ((e) => {
                    let { skuId: t, product: i, productName: s, tab: l, source: a } = e;
                    (0, tJ.openModalLazy)(
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
                        { stackingBehavior: "stack", modalKey: tQ.aU },
                    );
                })({ skuId: t, product: i, productName: l, tab: a, source: "collectibles-shop-pdp" });
        }, [t, i, l, a, c]);
    return (0, r.jsx)(eZ.m, {
        text: w.intl.string(w.t.RDE0Sc),
        ariaHidden: !0,
        children: (0, r.jsx)(tw.K, {
            "aria-label": w.intl.string(w.t.Ej3B3Y),
            onClick: o,
            icon: tZ.A,
            variant: "overlay-secondary",
            size: "sm",
        }),
    });
}
var t1 = n(139146),
    t2 = n(668953),
    t4 = n(881636),
    t8 = n(428445);
function t3(e) {
    let { goPrev: t, goNext: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: t8.Y,
                children: (0, r.jsx)(tw.K, {
                    "aria-label": w.intl.string(w.t["3NdvMK"]),
                    onClick: t,
                    icon: t2.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, r.jsx)("div", {
                className: t8.K,
                children: (0, r.jsx)(tw.K, {
                    "aria-label": w.intl.string(w.t.RYIeOX),
                    onClick: n,
                    icon: t4.u,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
}
var t9 = n(742441);
function t7(e) {
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
            onClose: E,
            onTrackClick: x,
            showGoToShop: R,
        } = e,
        A = eK(n),
        f = (0, tV.x)("CollectiblesShopProductDetailsModal"),
        p = (0, j.aw)(l),
        N = p ? l.items.length : 0,
        v = s.useCallback(() => {
            N <= 1 || o((e) => (e - 1 + N) % N);
        }, [N, o]),
        g = s.useCallback(() => {
            N <= 1 || o((e) => (e + 1) % N);
        }, [N, o]),
        _ = s.useCallback(
            (e) => {
                if (N <= 1) return;
                let t = e.target;
                "INPUT" === t.tagName ||
                    "TEXTAREA" === t.tagName ||
                    t.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), v())
                        : "ArrowRight" === e.key && (e.preventDefault(), g()));
            },
            [N, v, g],
        ),
        I = s.useCallback(() => {
            x(es.sH.CLOSE_DETAIL), E();
        }, [x, E]),
        T = s.useCallback(() => {
            E(), (0, tG.pX)(null != h ? C.BVt.COLLECTIBLES_SHOP_WITH_TAB(h) : C.BVt.COLLECTIBLES_SHOP);
        }, [E, h]),
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
        (0, r.jsxs)("div", {
            className: B()(t9.i1, (0, es.EZ)(l.skuId) ? t9.bF : l.type === L.R.AVATAR_DECORATION ? t9.Jq : t9.eF),
            style: null != m ? { backgroundImage: `url(${m})` } : void 0,
            onKeyDown: _,
            children: [
                !0 === R &&
                    (0, r.jsx)("div", {
                        className: t9.gW,
                        children: (0, r.jsx)(eQ.$, {
                            variant: "overlay-secondary",
                            icon: tH.U,
                            text: w.intl.string(w.t.fYfGgK),
                            onClick: T,
                        }),
                    }),
                (0, r.jsx)("div", {
                    className: t9.KR,
                    ref: O,
                    children: (0, r.jsx)(A.RightPreview, {
                        user: t,
                        productRecord: n,
                        selectedProduct: l,
                        previewingProduct: i,
                        selectedBundleSlide: c,
                        isClosing: u,
                        isOrbCheckoutModalOpen: d,
                    }),
                }),
                p && N > 1 && (0, r.jsx)(t3, { goPrev: v, goNext: g }),
                (0, r.jsxs)("div", {
                    className: t9.VG,
                    children: [
                        (0, r.jsx)(t1.R, {
                            product: n,
                            selectedVariantIndex: a,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: x,
                        }),
                        f
                            ? (0, r.jsx)(t0, {
                                  skuId: l.skuId,
                                  product: l,
                                  productName: (0, k.VG)(l),
                                  tab: h,
                                  onTrackClick: x,
                              })
                            : (0, r.jsx)(tq, { skuId: l.skuId, tab: h, onTrackClick: x }),
                        (0, r.jsx)(tw.K, {
                            "aria-label": w.intl.string(w.t.cpT0Cq),
                            onClick: I,
                            icon: tF.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            ],
        })
    );
}
var t5 = n(460510);
let t6 = function (e) {
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
            showGoToShop: w,
        } = e,
        F = (0, u.bG)([f.default], () => f.default.getCurrentUser()),
        G = (0, P.f)(i),
        { previewingVariantIndex: V } = G,
        z = (0, g.Q)(i),
        K = b(i, V),
        W = (0, T.rb)(i, z);
    a()(null != W, "Selected product should not be null");
    let { analyticsLocations: Y } = (0, E.Ay)([...B, h.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, O.Yr)(W.skuId);
    let X = (0, y.U1)(l),
        [$, q] = s.useState(0);
    s.useEffect(() => {
        null != F && (0, R.A)(F.id, F.getAvatarURL(void 0, 80));
    }, [F]);
    let Z = s.useMemo(() => (0, j.V6)(i.type, i.skuId), [i.type, i.skuId]);
    s.useEffect(() => {
        p.default.track(C.HAw.OPEN_MODAL, {
            type: C.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
            source: S,
            location_stack: Y,
            sku_id: W.skuId,
            product_type: Z,
        }),
            (0, N.RD)(W.skuId);
    }, [S, Y, W.skuId, Z]);
    let { cardId: J, sessionId: Q, tilePosition: ee } = (0, v.uM)() ?? {},
        et = s.useMemo(() => (0, T.v8)(i), [i]),
        en = (function (e) {
            let { skuId: t, productSkuIds: n, analyticsLocations: i } = e,
                { cardId: r, sessionId: l } = (0, v.uM)() ?? {},
                a = (0, I.o)(),
                c = (0, j.xM)(a);
            return s.useCallback(
                (e) => {
                    p.default.track(C.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
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
        })({ skuId: W.skuId, productSkuIds: et, analyticsLocations: Y });
    (0, x.A)({
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
    let ei = (0, A.o6)(),
        er = t === d.ip.EXITING,
        es = (0, _.c)("product_details_modal");
    if (null == F || (i.skuId === o.j.PREMIUM_TIER_2_1_DAY && !es)) return null;
    let el = (0, k.VG)(i),
        ea = {
            user: F,
            productRecord: i,
            productName: el,
            selectedProduct: W,
            previewingProduct: K ?? null,
            category: l,
            selectedVariantIndex: z,
            previewingVariantIndexProps: G,
            selectedBundleSlide: $,
            setSelectedBundleSlide: q,
            tab: U,
            shouldCheckoutWithOrbs: D,
            giftRecipient: M?.id !== F.id ? M : void 0,
            giftingOrigin: M?.id !== F.id ? H : void 0,
            analyticsLocations: Y,
            returnRef: L,
            onClose: n,
            onTrackClick: en,
        };
    return (0, r.jsx)(E.f5, {
        value: Y,
        children: (0, r.jsx)(m.d, {
            returnRef: L,
            transitionState: t,
            onClose: n,
            size: "xl",
            paddingSize: "sm",
            "aria-label": el,
            children: (0, r.jsx)("div", {
                className: t5.C,
                children: (0, r.jsxs)("div", {
                    className: t5.j,
                    children: [
                        (0, r.jsx)(tM, { ...ea }),
                        (0, r.jsx)(t7, {
                            ...ea,
                            isClosing: er,
                            isOrbCheckoutModalOpen: ei,
                            pdpBackground: X,
                            showGoToShop: w,
                        }),
                    ],
                }),
            }),
        }),
    });
};
