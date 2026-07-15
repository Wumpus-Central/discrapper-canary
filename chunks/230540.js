n.d(t, { default: () => nr });
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
    h = n(688810),
    f = n(139286),
    E = n(903209),
    R = n(652165),
    p = n(287809),
    g = n(174459),
    v = n(662388),
    A = n(440938),
    N = n(298072),
    C = n(993408),
    I = n(503089),
    _ = n(331884),
    j = n(652215),
    O = n(623373),
    k = n(536572),
    T = n(177366),
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
    M = n(297264),
    H = n(14702),
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
        ? (0, r.jsx)(U.E, {
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
        h = (0, O.B1)(t),
        f = h ? t.variants[a ?? x] : null,
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
                        (0, r.jsx)(M.D, { ref: E, variant: "heading-xl/bold", className: el.R_, children: n }),
                        (0, r.jsx)(U.E, { variant: "text-sm/normal", children: d }),
                        (0, r.jsx)(ea, { skuId: u.skuId }),
                        null !== m && (0, r.jsx)(U.E, { variant: "text-xs/normal", className: el.H$, children: m }),
                    ],
                }),
                h &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            null != f &&
                                (0, r.jsx)(U.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: el.a9,
                                    lineClamp: 1,
                                    children: w.intl.format(w.t.EcaRWt, {
                                        value: (0, r.jsx)("span", { className: el.I8, children: f.variantLabel }),
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
    eh = n(245604),
    ef = n(460905),
    eE = n(262295),
    eR = n(320095),
    ep = n(963852),
    eg = n(763754),
    ev = n(20851),
    eA = n(986687),
    eN = n(101058),
    eC = n(836602),
    eI = n(428262),
    e_ = n(780898),
    ej = n(180129);
function eO(e) {
    let { user: t, innerClassName: n } = e;
    return (0, r.jsx)("div", {
        className: ej.mV,
        children: (0, r.jsx)(eE.A, {
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
function ek(e) {
    let { user: t, nameplate: n, avatarDecoration: i } = e,
        s = (0, e_.Ov)();
    return (0, r.jsx)("div", {
        className: ej.nJ,
        role: "img",
        "aria-label": w.intl.string(w.t.SZeUdR),
        children: (0, r.jsxs)(em.M, {
            children: [
                (0, r.jsx)(eO, { user: s.mallow, innerClassName: ej.ab }),
                (0, r.jsxs)(U.E, {
                    variant: "text-sm/semibold",
                    className: ej.OS,
                    children: [w.intl.string(w.t["yzW/fZ"]), " - 3"],
                }),
                (0, r.jsx)(eO, { user: s.phibi, innerClassName: ej.e9 }),
                (0, r.jsx)("div", {
                    className: ej.mV,
                    children: (0, r.jsx)(W.A, {
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
                (0, r.jsx)(eO, { user: s.locke, innerClassName: ej.e9 }),
                (0, r.jsxs)(U.E, {
                    variant: "text-sm/semibold",
                    className: ej.OS,
                    children: [w.intl.string(w.t["NG43/6"]), " - 12"],
                }),
                (0, r.jsx)(eO, { user: s.boom, innerClassName: ej.bD }),
                (0, r.jsx)(eO, { user: s.cherry, innerClassName: ej.bD }),
            ],
        }),
    });
}
function eT(e) {
    let { user: t, avatarDecoration: n } = e,
        i = (function (e) {
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
                className: ej.f7,
                outline: !0,
                "aria-hidden": !0,
                children: [
                    (0, r.jsx)(
                        ev.A,
                        { className: ej.G5, author: (0, eg.p_)(i), message: i, avatarDecorationOverride: n ?? null },
                        i.id,
                    ),
                    (0, r.jsxs)("div", {
                        className: ej.lG,
                        children: [
                            (0, r.jsx)(eh.U, { size: "md", color: "currentColor", className: ej.hq }),
                            (0, r.jsx)(ef.n, { size: "md", color: "currentColor", className: ej.hq }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function eL(e) {
    let { product: t, user: n, activeBundleSlide: i } = e,
        s = eI.Ay.canUsePremiumProfileCustomization(n),
        { pendingAvatar: l, ...a } = (0, u.cf)([eC.A], () => eC.A.getPendingChanges()),
        c = (0, eN.V7)({ userId: n.id, image: l }),
        o = t.type === L.R.BUNDLE ? t.items[i ?? 0] : void 0,
        d = o?.type ?? t.type,
        m = d === L.R.AVATAR_DECORATION,
        x = d === L.R.PROFILE_EFFECT,
        { firstAvatarDecoration: h, firstProfileEffect: f, firstNameplate: E, firstProfileFrame: R } = (0, K.f5)(t),
        p = o?.type === L.R.AVATAR_DECORATION ? o : h,
        g = o?.type === L.R.PROFILE_EFFECT ? o : f,
        v = o?.type === L.R.PROFILE_FRAME ? o : R,
        A = o?.type === L.R.NAMEPLATE ? o : E;
    if (d === L.R.NAMEPLATE && null != A)
        return (0, r.jsx)("div", {
            className: ej.Zj,
            children: (0, r.jsx)(ek, { user: n, nameplate: A, avatarDecoration: p }),
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
                    pendingAvatarDecoration: p,
                    pendingProfileEffect: g,
                    profileEffectRestartKey: i,
                    pendingProfileFrame: v,
                    disabledInputs: !0,
                    hideMessageInput: !x,
                    hideCustomStatus: !0,
                    hideBioSection: m,
                    hideExampleButton: !0,
                    interactive: !1,
                    className: m ? ej.oB : void 0,
                }),
                m && (0, r.jsx)(eT, { user: n, avatarDecoration: p }),
            ],
        }),
    });
}
function eb(e) {
    let { user: t, selectedProduct: n, previewingProduct: i, selectedBundleSlide: s } = e;
    return (0, r.jsx)(eL, { user: t, product: i ?? n, activeBundleSlide: s });
}
var ey = n(478016),
    eP = n(661531),
    eS = n(224016),
    eB = n(913521);
function eD() {
    let e = [w.t.E1NP2x, w.t.kpMomJ, w.t.xT1Vfn, w.t.myyAEr, w.t.zTk8Ul];
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
                                (0, r.jsx)(ey.U, { color: eP.A.colors.WHITE }),
                                (0, r.jsx)(U.E, {
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
    eM = n(132198),
    eH = n(83554);
function ew(e) {
    let { user: t } = e,
        n = eI.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: i, ...s } = (0, eU.cf)([eC.A], () => eC.A.getPendingChanges()),
        l = (0, eN.V7)({ userId: t.id, image: i });
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
var eF = n(197952);
function eG(e) {
    let { user: t, productRecord: n, isClosing: i, isOrbCheckoutModalOpen: s } = e;
    return n.skuId === es.Dp.ORB_PROFILE_BADGE
        ? i || s
            ? null
            : (0, r.jsx)(ew, { user: t })
        : (0, es.EZ)(n.skuId)
          ? (0, r.jsx)(eD, {})
          : (0, r.jsx)(Q.B, { product: n, className: eF.M });
}
let eV = {
    [eo.COLLECTIBLE]: { LeftPreview: J, Info: ec, RightPreview: eb },
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
                h = s.useCallback(
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
            let f = s.useRef(null);
            return (
                s.useLayoutEffect(() => {
                    null != f.current && ((f.current.tabIndex = -1), f.current.focus());
                }, []),
                (0, r.jsxs)("div", {
                    className: F.Qf,
                    children: [
                        (0, r.jsx)(M.D, { ref: f, variant: "heading-xl/bold", className: F.R_, title: n, children: n }),
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
                                        ref: x,
                                        className: F.hK,
                                        role: "radiogroup",
                                        "aria-label": m,
                                        tabIndex: -1,
                                        onKeyDown: h,
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
        RightPreview: eb,
    },
    [eo.EXTERNAL_ORB_BADGE]: { LeftPreview: ee, Info: ec, RightPreview: eG },
    [eo.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: ee, Info: ec, RightPreview: eG },
    [eo.EXTERNAL_GENERIC]: { LeftPreview: ee, Info: ec, RightPreview: eG },
};
function ez(e) {
    var t;
    return eV[
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
var eK = n(13875),
    eW = n(110629),
    eY = n(268959),
    e$ = n(958942);
function eX(e) {
    let t,
        { productRecord: n, selectedProduct: i, selectedBundleSlide: s } = e,
        l = (0, eK.Do)("CollectiblesShopProductDetailsModal") && i.type === L.R.PROFILE_FRAME,
        a = n.type === L.R.BUNDLE ? (n.items[s] ?? n.items[0]) : void 0,
        c =
            null != a &&
            !n.hideBadge &&
            null == n.badgeOverride &&
            (0, O.JQ)({ skuId: a.skuId, type: a.type, items: [a] });
    return (
        (t = l
            ? (0, r.jsx)(eW.A, { location: "CollectiblesShopProductDetailsModal" })
            : c
              ? (0, r.jsx)(eY.s, {})
              : (0, r.jsx)(eY.A, { skuId: n.skuId })),
        (0, r.jsx)("div", { className: e$.N, children: t })
    );
}
var eq = n(990078),
    eZ = n(462887),
    eJ = n(821609),
    eQ = n(318254),
    e0 = n(825484),
    e1 = n(331322),
    e2 = n(736653),
    e9 = n(44120),
    e4 = n(465794),
    e7 = n(757036),
    e3 = n(761705),
    e5 = n(449410),
    e6 = n(580630),
    e8 = n(4227),
    te = n(940980),
    tt = n(466459),
    tn = n(395068),
    ti = n(885574),
    tr = n(401231);
function ts(e) {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, r.jsx)(eq.m, {
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
    let { product: t, onSuccess: n, onTrackClick: i, variant: s = "primary" } = e,
        { handleUseNow: l, isApplying: a, canUseNow: c } = (0, to.p)({ product: t, onSuccess: n }),
        o = (0, tc.A)();
    return c
        ? (0, r.jsx)(eJ.$, {
              variant: s,
              onClick: () => {
                  i?.(es.sH.USE_NOW), l();
              },
              loading: a,
              text: w.intl.string(w.t.MAS7uK),
              fullWidth: !0,
          })
        : (0, r.jsx)(eJ.$, {
              variant: s,
              onClick: () => {
                  i?.(es.sH.EDIT_PROFILE), o(), n?.();
              },
              text: w.intl.string(w.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var td = n(226236);
let tm = function (e) {
    let { analyticsLocations: t, children: n } = e;
    return (0, r.jsx)(h.f5, {
        value: [...t, x.A.PROFILE_FRAMES_EA_MARKETING],
        children: (0, r.jsxs)("div", {
            className: td.k,
            children: [
                (0, r.jsx)(U.E, {
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
var tx = n(561769),
    th = n(140735),
    tf = n(252955);
function tE(e) {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: s = "heading-md/semibold",
        } = e,
        l = (0, e6.RS)(t, n);
    return (0, r.jsxs)(U.E, {
        variant: s,
        className: B()(tf.v, i),
        children: [
            (0, r.jsx)(th.A, { children: w.intl.format(w.t["2CEGln"], { price: l }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: l }),
        ],
    });
}
var tR = n(219103),
    tp = n(469215);
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
        d = (0, C.WD)(t, { hasShopDiscount: n, discount: s });
    if (null == d) return null;
    let { defaultPrice: m, showDefaultPriceOnly: x } = d;
    if (x)
        return (0, r.jsx)("div", {
            className: B()(tp.kG, l),
            children: (0, r.jsx)(tR.x, { priceAmount: m.amount, priceCurrency: m.currency }),
        });
    let { showDiscountPrice: h, originalPrice: f, finalPrice: E } = d;
    return (0, r.jsxs)("div", {
        className: B()(tp.kG, l),
        children: [
            c ? null : (0, r.jsx)(tE, { price: f, className: tp.q9 }),
            (0, r.jsx)(tR.x, {
                priceAmount: E.amount,
                priceCurrency: E.currency,
                discount: s,
                className: B()({ [tp.q9]: null == a }),
                discountIconConfig: h && null != o ? { displayMode: o, source: i ?? C.D0.NITRO, size: u } : void 0,
                discountOfferAmount: a,
            }),
        ],
    });
}
var tv = n(403581),
    tA = n(532794),
    tN = n(202541),
    tC = n(447806);
function tI(e) {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: i } = (0, h.Ay)(),
        l = s.useRef(null);
    return (0, r.jsx)(D.D, {
        className: tC.F,
        innerRef: l,
        onClick: () => {
            n?.(es.sH.SUBSCRIBE_NOW),
                (0, tA.A)({ subscriptionTier: tN.pe.TIER_2, analyticsLocations: i, returnRef: l });
        },
        children: t,
    });
}
var t_ = n(805961);
function tj(e) {
    let { product: t, onTrackClick: n } = e,
        i = (0, C.yt)(t, j.lid.PREMIUM_TIER_2);
    if (null == i) return null;
    let s = (0, e6.RS)(i.amount, i.currency);
    return (0, r.jsxs)("div", {
        className: t_.k,
        children: [
            (0, r.jsx)(eq.m, {
                text: w.intl.string(w.t.MPFyJ5),
                "aria-label": w.intl.string(w.t.X3Ekj8),
                children: (0, r.jsx)(tv.t, { size: "md", color: "currentColor", className: t_.o }),
            }),
            (0, r.jsx)(U.E, {
                variant: "text-xs/medium",
                children: w.intl.format(w.t.Sv8iic, {
                    price: s,
                    subscribeNowHook: (e) => (0, r.jsx)(tI, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
var tO = n(818348),
    tk = n(752274);
function tT(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: i, discount: s } = e,
        l = n ? w.intl.string(w.t.wu4gyV) : w.intl.string(w.t.eFNRzU),
        a = n || !i;
    return (0, r.jsxs)("div", {
        className: tk.eg,
        children: [
            (0, r.jsx)("div", {
                className: tk.zR,
                children: (0, r.jsx)(U.E, { variant: "text-xs/normal", className: a ? tk.r9 : void 0, children: l }),
            }),
            (0, r.jsx)(tR.x, {
                priceAmount: t.amount,
                priceCurrency: t.currency,
                discount: s,
                className: a ? tk.r9 : void 0,
            }),
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
        : t[0].currency === tO.Yr.DISCORD_ORB
          ? (0, r.jsx)(tT, { orbPrice: t[0], isProductDisabled: o, hasSufficientOrbs: a, discount: s })
          : (0, r.jsxs)("div", {
                className: tk.eg,
                children: [
                    (0, r.jsxs)("div", {
                        className: tk.pw,
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
                            n || d ? null : (0, r.jsx)(tj, { product: l, onTrackClick: c }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === tO.Yr.DISCORD_ORB &&
                        (0, r.jsx)(tR.x, {
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
    let t = (0, ty.X)(e.selectedProduct),
        n = t && null != e.giftRecipient;
    return (0, r.jsx)(e5.$, {
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
            onClose: h,
            onTrackClick: f,
            canGiftProduct: E,
        } = e,
        { cardId: p, sessionId: g, tilePosition: N } = (0, A.uM)() ?? {},
        I = (0, e7.L)(tN.PremiumTypes.TIER_2),
        _ = (0, C.xM)(t),
        O = (0, eK.Do)("CollectiblesShopProductDetailsModal") && i.type === L.R.PROFILE_FRAME,
        k = eI.Ay.canUseShopDiscounts(t) || O,
        T = (0, tt.h)(n),
        { isPurchased: b, isPartiallyOwnedBundle: y } = (0, tt.h)(i),
        { isDisabled: P } = (0, ei.I)(i.skuId),
        S = (0, C.Zu)({ product: i, isPartiallyOwnedBundle: y, isPurchased: b }),
        D = (0, u.bG)([e8.A], () => e8.A.isClaiming === i?.skuId),
        M = (0, e2.Ay)(),
        H = (0, eZ.M)(M),
        F = (0, C.G0)(i),
        G = (0, C.yt)(i, j.lid.DEFAULT),
        V = G?.amount === 0,
        { prioritizeGifting: z, removeOrbsClaim: K } = (0, e5.q)(),
        W = (0, tb.V_)(n),
        Y = null != W,
        $ = (0, te.W)("CollectiblesShopProductDetailsModal"),
        X = c === es.G2.ORBS && a ? tx.Hi.ORBS : $ ? tx.Hi.FIAT : void 0,
        { checkoutEligiblePrices: q, hasSufficientOrbs: Z } = (0, tP.F)({
            product: i,
            hasShopDiscount: k,
            hasDiscountOffer: Y,
            prioritizedCurrency: X,
        }),
        J = z && K ? q.filter((e) => e.currency !== tO.Yr.DISCORD_ORB) : q,
        Q = (0, tn.A)({ location: "CollectiblesShopProductDetailsModal", product: i }),
        ee = s.useMemo(() => q.some((e) => e.currency === tO.Yr.DISCORD_ORB), [q]);
    (0, e3.W)({ disableFetch: !ee });
    let et = s.useCallback(() => {
        f(es.sH.BUY_WITH_FIAT),
            (0, e9.A)({
                skuId: i.skuId,
                analyticsLocations: m,
                discoverySessionId: g,
                onClose: (e) => (e ? h() : (0, tO.tE)()),
            });
    }, [m, h, i.skuId, f, g]);
    function en(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = (0, r.jsx)(e4.A, {
                subscriptionTier: tN.pe.TIER_2,
                fullWidth: !0,
                buttonTextOverride: e,
                onClick: () => {
                    f(es.sH.UNLOCK_WITH_NITRO), (0, ta.M)();
                },
                onSubscribeModalClose: () => {
                    (0, ta.t)({
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
        return t ? (0, r.jsx)(tm, { analyticsLocations: m, children: i }) : i;
    }
    function er(e, t) {
        let n = P ? w.intl.string(w.t.cTdr3x) : w.intl.string(w.t.zqh7ZM),
            s = !Z || P,
            l = w.intl.formatToPlainString(w.t.yi41qQ, { orbPrice: e.amount }),
            a = s ? `${l}, ${n}` : l;
        return (0, r.jsx)(eq.m, {
            position: "top",
            text: n,
            shouldShow: s,
            "aria-label": !1,
            children: (0, r.jsx)(eJ.$, {
                variant: t ? "primary" : "secondary",
                onClick: function () {
                    f(es.sH.BUY_WITH_ORBS),
                        (0, R.B4)({
                            skuId: i.skuId,
                            onComplete: (e) => {
                                (0, v.gB)(),
                                    h(),
                                    (0, tS.A)({
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
                    orbIconHook: () => (0, r.jsx)(eQ.C, { className: tB.fN, size: "sm", color: "currentColor" }),
                }),
                fullWidth: !0,
            }),
        });
    }
    let el = () =>
            (0, r.jsx)(tl.A, {
                primary: !0,
                fullWidth: !0,
                fullWidthLabel: w.intl.string(w.t.ilhtIa),
                product: i,
                onSuccess: h,
                giftRecipient: o,
                giftingOrigin: d,
                onTrackClick: f,
            }),
        ea = function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return (0, r.jsx)(eJ.$, { variant: "secondary", onClick: et, text: e, fullWidth: t });
        },
        ec = () =>
            (0, r.jsxs)("div", {
                className: tB.pq,
                children: [
                    (0, r.jsx)(U.E, { variant: "text-md/semibold", children: w.intl.string(w.t.rt69oo) }),
                    !b &&
                        (0, r.jsx)(U.E, {
                            className: B()(tB.ed, !H && tB.un),
                            variant: "text-xxs/normal",
                            children: w.intl.string(w.t.nKdAlO),
                        }),
                ],
            }),
        eo = (e) =>
            e.length > 0
                ? (0, r.jsx)(tL, {
                      prices: e,
                      product: i,
                      hasShopDiscount: k,
                      discountSource: _,
                      discount: (0, C.fT)(i, k, e[0]?.currency),
                      hasSufficientOrbs: Z,
                      isProductDisabled: P,
                      discountOfferAmount: W,
                      onTrackClick: f,
                  })
                : null;
    return (0, r.jsxs)("div", {
        className: tB.iw,
        children: [
            (() => {
                let e = T.isPurchased || T.isPartiallyOwnedBundle;
                if (!z) return e ? (0, r.jsx)(ts, { className: tB.On, isPartiallyPurchased: y }) : F ? ec() : eo(J);
                if (F && !e) return ec();
                let t = J.find((e) => e.currency !== tO.Yr.DISCORD_ORB);
                return eo(null == t ? [] : [t]);
            })(),
            (0, r.jsx)(e1.B, {
                direction: "vertical",
                gap: 8,
                children: (() => {
                    if (F && !I && !V) return en(w.intl.string(w.t.sEAnVH));
                    if (!S)
                        return E
                            ? (0, r.jsx)(tl.A, {
                                  primary: !0,
                                  product: i,
                                  onSuccess: h,
                                  fullWidth: !0,
                                  giftRecipient: o,
                                  giftingOrigin: d,
                                  onTrackClick: f,
                              })
                            : null;
                    if (b)
                        return E
                            ? z
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          el(),
                                          (0, r.jsx)(tu, {
                                              variant: "secondary",
                                              product: i,
                                              onSuccess: h,
                                              onTrackClick: f,
                                          }),
                                      ],
                                  })
                                : (0, r.jsxs)(e0.e, {
                                      wrap: !1,
                                      fullWidth: !0,
                                      children: [
                                          (0, r.jsx)(tu, { product: i, onSuccess: h, onTrackClick: f }),
                                          (0, r.jsx)(tl.A, {
                                              primary: !0,
                                              product: i,
                                              onSuccess: h,
                                              giftRecipient: o,
                                              giftingOrigin: d,
                                              onTrackClick: f,
                                          }),
                                      ],
                                  })
                            : (0, r.jsx)(tu, { product: i, onSuccess: h, onTrackClick: f });
                    if (Q) return en(w.intl.string(w.t["9wfL34"]), !0);
                    if (F)
                        return (0, r.jsx)(eJ.$, {
                            loading: D,
                            loadingStartedLabel: w.intl.string(w.t["TYw+9s"]),
                            loadingFinishedLabel: w.intl.string(w.t.Pg1UP5),
                            onClick: async () => {
                                f(es.sH.ADD_TO_COLLECTION),
                                    await (0, v.iJ)(i.skuId),
                                    h(),
                                    (0, tS.A)({
                                        product: i,
                                        analyticsLocations: m,
                                        purchaseType: es.gs.PREMIUM_PURCHASE,
                                    });
                            },
                            text: w.intl.string(w.t.zp6caO),
                            fullWidth: !0,
                        });
                    if (z) {
                        let e, t;
                        return (
                            (e = J.find((e) => e.currency !== tO.Yr.DISCORD_ORB)),
                            (t = J.find((e) => e.currency === tO.Yr.DISCORD_ORB)),
                            null != e && null != t
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsxs)(e1.B, {
                                              direction: "horizontal",
                                              gap: 8,
                                              children: [el(), ea(w.intl.string(w.t.pi7PDT), !1)],
                                          }),
                                          er(t, !1),
                                      ],
                                  })
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          el(),
                                          null != e ? ea(w.intl.string(w.t.pxocaf)) : null != t ? er(t, !1) : null,
                                      ],
                                  })
                        );
                    }
                    return (0, r.jsx)(r.Fragment, {
                        children: q.map((e, t) => {
                            let n,
                                l = 0 === t,
                                a =
                                    e.currency === tO.Yr.DISCORD_ORB
                                        ? er(e, l)
                                        : ((n = Y
                                              ? w.intl.formatToPlainString(w.t["5U5RB5"], { discountOfferAmount: W })
                                              : w.intl.formatToPlainString(w.t["cNSL/j"], {
                                                    price: (0, e6.$g)(e.amount, e.currency),
                                                })),
                                          (0, r.jsxs)(e0.e, {
                                              wrap: !1,
                                              fullWidth: !0,
                                              children: [
                                                  (0, r.jsx)(eJ.$, {
                                                      variant: l ? "primary" : "secondary",
                                                      onClick: et,
                                                      text: n,
                                                      fullWidth: !0,
                                                  }),
                                                  E &&
                                                      (0, r.jsx)(tl.A, {
                                                          primary: l,
                                                          product: i,
                                                          onSuccess: h,
                                                          giftRecipient: o,
                                                          giftingOrigin: d,
                                                          onTrackClick: f,
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
var tM = n(18967);
function tH(e) {
    let { productRecord: t, selectedProduct: n, previewingProduct: i, user: s, selectedBundleSlide: l } = e,
        a = ez(t);
    return (0, r.jsxs)("div", {
        className: B()(tM.wd, { [tM.E7]: null != a.LeftPreview }),
        children: [
            (0, r.jsx)("div", {
                className: tM.dL,
                children: (0, r.jsx)(eX, { productRecord: t, selectedProduct: n, selectedBundleSlide: l }),
            }),
            null != a.LeftPreview &&
                (0, r.jsx)("div", {
                    className: tM._E,
                    children: (0, r.jsx)(a.LeftPreview, {
                        user: s,
                        selectedProduct: n,
                        previewingProduct: i,
                        productRecord: t,
                        selectedBundleSlide: l,
                    }),
                }),
            (0, r.jsx)("div", { className: tM.F_, children: (0, r.jsx)(a.Info, { ...e }) }),
            (0, r.jsx)(tD, { ...e }),
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
    tY = n(97483),
    t$ = n(173936),
    tX = n(957565),
    tq = n(573749);
function tZ(e) {
    let { skuId: t, tab: n, onTrackClick: i } = e,
        l = s.useCallback(() => {
            g.default.track(j.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
                i?.(es.sH.COPY_LINK),
                (0, tX.C)((0, tq.o)(t, n), () => (0, tK.P0)((0, tW.o)(w.intl.string(w.t["L/PwZf"]), tY.Ck.SUCCESS)));
        }, [t, n, i]);
    return (0, r.jsx)(tF.K, {
        "aria-label": w.intl.string(w.t.WqhZss),
        onClick: l,
        icon: t$.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
var tJ = n(427209),
    tQ = n(192308),
    t0 = n(294454);
function t1(e) {
    let { skuId: t, product: i, productName: l, tab: a, onTrackClick: c } = e,
        o = s.useCallback(() => {
            g.default.track(j.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
                c?.(es.sH.SHARE_LINK),
                ((e) => {
                    let { skuId: t, product: i, productName: s, tab: l, source: a } = e;
                    (0, tQ.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("8073"),
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
                        { stackingBehavior: "stack", modalKey: t0.aU },
                    );
                })({ skuId: t, product: i, productName: l, tab: a, source: "collectibles-shop-pdp" });
        }, [t, i, l, a, c]);
    return (0, r.jsx)(eq.m, {
        text: w.intl.string(w.t.RDE0Sc),
        ariaHidden: !0,
        children: (0, r.jsx)(tF.K, {
            "aria-label": w.intl.string(w.t.Ej3B3Y),
            onClick: o,
            icon: tJ.A,
            variant: "overlay-secondary",
            size: "sm",
        }),
    });
}
var t2 = n(139146),
    t9 = n(976860),
    t4 = n(975732),
    t7 = n(50920),
    t3 = n(23161),
    t5 = n(668953),
    t6 = n(881636),
    t8 = n(428445);
function ne(e) {
    let { goPrev: t, goNext: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: t8.Y,
                children: (0, r.jsx)(tF.K, {
                    "aria-label": w.intl.string(w.t["3NdvMK"]),
                    onClick: t,
                    icon: t5.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, r.jsx)("div", {
                className: t8.K,
                children: (0, r.jsx)(tF.K, {
                    "aria-label": w.intl.string(w.t.RYIeOX),
                    onClick: n,
                    icon: t6.u,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
}
var nt = n(742441);
function nn(e) {
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
            tab: h,
            onClose: f,
            onTrackClick: E,
        } = e,
        R = ez(n),
        p = (0, tV.x)("CollectiblesShopProductDetailsModal"),
        v = (0, C.aw)(l),
        N = v ? l.items.length : 0,
        I = tz.useConfig({ location: "CollectiblesShopProductDetailsModal" }).showCollectionButton,
        _ = (function () {
            let e = (0, t7.a)("CollectiblesPdpNavigateToCollection"),
                { sessionId: t } = (0, A.uM)() ?? {},
                n = (0, t3.v)((e) => e.reset);
            return s.useCallback(
                (i, r) => {
                    if (
                        (g.default.track(j.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: t,
                            sku_id: i.skuId,
                            cta_name: r,
                        }),
                        (0, t4.closeUserProfileModal)(),
                        e && !0 !== i.isOrbsExclusive)
                    )
                        return void (0, t9.pX)(j.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(i.skuId));
                    n();
                    let s = !0 === i.isOrbsExclusive ? es.G2.ORBS : es.G2.CATALOG;
                    (0, t9.pX)(`${j.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)}&${es.P1}=${i.skuId}`);
                },
                [e, t, n],
            );
        })(),
        O = s.useCallback(() => {
            E(es.sH.GO_TO_COLLECTION), f(), _(x, "go_to_collection_button");
        }, [x, f, E, _]),
        T = s.useCallback(() => {
            N <= 1 || o((e) => (e - 1 + N) % N);
        }, [N, o]),
        b = s.useCallback(() => {
            N <= 1 || o((e) => (e + 1) % N);
        }, [N, o]),
        y = s.useCallback(
            (e) => {
                if (N <= 1) return;
                let t = e.target;
                "INPUT" === t.tagName ||
                    "TEXTAREA" === t.tagName ||
                    t.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), T())
                        : "ArrowRight" === e.key && (e.preventDefault(), b()));
            },
            [N, T, b],
        ),
        P = s.useCallback(() => {
            E(es.sH.CLOSE_DETAIL), f();
        }, [E, f]),
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
            className: B()(nt.i1, (0, es.EZ)(l.skuId) ? nt.bF : l.type === L.R.AVATAR_DECORATION ? nt.Jq : nt.eF),
            style: null != m ? { backgroundImage: `url(${m})` } : void 0,
            onKeyDown: y,
            children: [
                (p || I) &&
                    (0, r.jsx)("div", {
                        className: nt.GV,
                        children: (0, r.jsx)(eq.m, {
                            text: w.intl.string(w.t["Hr/q/6"]),
                            children: (0, r.jsx)(eJ.$, {
                                variant: "overlay-secondary",
                                size: "sm",
                                icon: tw.f,
                                text: x.name,
                                onClick: O,
                            }),
                        }),
                    }),
                (0, r.jsx)("div", {
                    className: nt.KR,
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
                v && N > 1 && (0, r.jsx)(ne, { goPrev: T, goNext: b }),
                (0, r.jsxs)("div", {
                    className: nt.VG,
                    children: [
                        (0, r.jsx)(t2.R, {
                            product: n,
                            selectedVariantIndex: a,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: E,
                        }),
                        p
                            ? (0, r.jsx)(t1, {
                                  skuId: l.skuId,
                                  product: l,
                                  productName: (0, k.VG)(l),
                                  tab: h,
                                  onTrackClick: E,
                              })
                            : (0, r.jsx)(tZ, { skuId: l.skuId, tab: h, onTrackClick: E }),
                        (0, r.jsx)(tF.K, {
                            "aria-label": w.intl.string(w.t.cpT0Cq),
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
var ni = n(460510);
let nr = function (e) {
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
        w = (0, u.bG)([p.default], () => p.default.getCurrentUser()),
        F = (0, P.f)(i),
        { previewingVariantIndex: G } = F,
        V = (0, N.Q)(i),
        z = b(i, G),
        K = (0, O.rb)(i, V);
    a()(null != K, "Selected product should not be null");
    let { analyticsLocations: W } = (0, h.Ay)([...B, x.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, T.Yr)(K.skuId);
    let Y = (0, y.U1)(l),
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
            (0, v.RD)(K.skuId);
    }, [S, W, K.skuId, q]);
    let { cardId: Z, sessionId: J, tilePosition: Q } = (0, A.uM)() ?? {},
        ee = s.useMemo(() => (0, O.v8)(i), [i]),
        et = (function (e) {
            let { skuId: t, productSkuIds: n, analyticsLocations: i } = e,
                { cardId: r, sessionId: l } = (0, A.uM)() ?? {},
                a = (0, _.o)(),
                c = (0, C.xM)(a);
            return s.useCallback(
                (e, s) => {
                    g.default.track(j.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                        sku_id: s ?? t,
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
    (0, f.A)({
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
        er = (0, I.c)("product_details_modal");
    if (null == w || (i.skuId === o.j.PREMIUM_TIER_2_1_DAY && !er)) return null;
    let es = (0, k.VG)(i),
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
            tab: U,
            shouldCheckoutWithOrbs: D,
            giftRecipient: M?.id !== w.id ? M : void 0,
            giftingOrigin: M?.id !== w.id ? H : void 0,
            analyticsLocations: W,
            returnRef: L,
            onClose: n,
            onTrackClick: et,
        };
    return (0, r.jsx)(h.f5, {
        value: W,
        children: (0, r.jsx)(m.d, {
            returnRef: L,
            transitionState: t,
            onClose: n,
            size: "xl",
            paddingSize: "sm",
            "aria-label": es,
            children: (0, r.jsx)("div", {
                className: ni.C,
                children: (0, r.jsxs)("div", {
                    className: ni.j,
                    children: [
                        (0, r.jsx)(tH, { ...el }),
                        (0, r.jsx)(nn, { ...el, isClosing: ei, isOrbCheckoutModalOpen: en, pdpBackground: Y }),
                    ],
                }),
            }),
        }),
    });
};
