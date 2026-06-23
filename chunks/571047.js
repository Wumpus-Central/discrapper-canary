r.d(t, { default: () => t5 });
var s,
    i = r(627968),
    n = r(64700),
    l = r(284009),
    a = r.n(l),
    c = r(562708),
    o = r(334279),
    d = r(702841),
    u = r(231723),
    m = r(224640),
    h = r(793574),
    x = r(688810),
    E = r(139286),
    R = r(903209),
    A = r(652165),
    N = r(287809),
    p = r(174459),
    v = r(564064),
    g = r(440938),
    j = r(298072),
    _ = r(993408),
    f = r(503089),
    I = r(331884),
    C = r(652215),
    T = r(623373),
    O = r(536572),
    k = r(177366),
    L = r(575593);
let b = (e, t) => (e.type === L.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e);
var y = r(212407),
    P = r(935094),
    S = r(503698),
    D = r.n(S),
    B = r(939249),
    U = r(834730),
    M = r(534514),
    F = r(456839),
    w = r(375708),
    H = r(701180);
let G = (e) => {
        let { name: t, typeLabel: r } = e;
        return (0, i.jsxs)(U.E, {
            variant: "text-sm/medium",
            className: H.mC,
            "aria-live": "polite",
            children: [
                (0, i.jsx)("span", { className: H.kx, children: t }),
                null != r && (0, i.jsx)("span", { className: H.FP, children: r }),
            ],
        });
    },
    V = { [L.R.AVATAR_DECORATION]: !0, [L.R.PROFILE_FRAME]: !0 },
    z = (e) => {
        let { item: t, index: r, isSelected: s, setSelected: l, label: a } = e,
            c = n.useMemo(() => ({ skuId: t.skuId, type: t.type, items: [t] }), [t]),
            o = n.useCallback(() => l(r), [l, r]),
            d = !0 === V[t.type];
        return (0, i.jsx)(B.D, {
            tag: "div",
            role: "radio",
            "aria-checked": s,
            tabIndex: s ? 0 : -1,
            className: D()(H.xn, { [H.Y4]: s, [H.u8]: d }),
            onClick: o,
            "aria-label": a,
            children: (0, i.jsx)("div", { className: H.Yf, children: (0, i.jsx)(F.O, { product: c }) }),
        });
    };
var K = r(442759),
    W = r(344346),
    Y = r(139136),
    X = r(395744),
    $ = r(929283),
    q = r(719201);
let Z = (e) => {
        let { item: t, user: r, bundleFirstAvatarDecoration: s, isBundle: n } = e;
        switch (t.type) {
            case L.R.AVATAR_DECORATION:
                return (0, i.jsx)("div", {
                    className: q.h1,
                    children: (0, i.jsx)($.i, { user: r, item: t, isHighlighted: !0 }),
                });
            case L.R.PROFILE_EFFECT:
                return (0, i.jsx)("div", {
                    className: n ? q.sm : q.VY,
                    children: (0, i.jsx)(Y.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                });
            case L.R.PROFILE_FRAME:
                return (0, i.jsx)("div", { className: n ? q.ob : q.fE, children: (0, i.jsx)(X.A, { frame: t }) });
            case L.R.NAMEPLATE:
                return (0, i.jsx)("div", {
                    className: q.Dz,
                    children: (0, i.jsx)(W.A, {
                        className: q.M4,
                        nameplate: t,
                        user: r,
                        nameplatePreviewSize: "large",
                        pendingAvatarDecoration: s,
                        isHighlighted: !0,
                        hideDecorators: !0,
                    }),
                });
            default:
                return null;
        }
    },
    J = (e) => {
        let { user: t, selectedProduct: r, previewingProduct: s, selectedBundleSlide: n } = e,
            l = s ?? r,
            { firstAvatarDecoration: a } = (0, K.f5)(l),
            c = l.items[n] ?? l.items[0];
        return null == c
            ? null
            : (0, i.jsx)(Z, { item: c, user: t, bundleFirstAvatarDecoration: a, isBundle: (0, _.aw)(l) });
    };
var Q = r(846957);
let ee = (e) => {
    let { selectedProduct: t, previewingProduct: r } = e;
    return (0, i.jsx)(Q.B, { product: r ?? t });
};
var et = r(975571);
r(321073);
let er = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) return w.intl.formatToPlainString(w.t["/0Yndu"], { num: e.bundledProducts?.length });
        let r = e.bundledProducts ?? [],
            s = [],
            i = !1;
        for (let e of r)
            switch (e.type) {
                case L.R.AVATAR_DECORATION:
                    s.push(w.intl.formatToPlainString(w.t.Ntv9Jt, { itemName: e.name }));
                    break;
                case L.R.PROFILE_EFFECT:
                    s.push(w.intl.formatToPlainString(w.t["3Y8q7a"], { itemName: e.name }));
                    break;
                case L.R.NAMEPLATE:
                    s.push(w.intl.formatToPlainString(w.t["2keXky"], { itemName: e.name })), (i = !0);
            }
        if (i) {
            let e = s.join(", ").replace(/, ([^,]*)$/, " & $1");
            return w.intl.formatToPlainString(w.t.Ofrqj6, { joinedItems: e });
        }
        let n = s.join(" & ");
        return w.intl.formatToPlainString(w.t.Ofrqj6, { joinedItems: n });
    },
    es = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, n.useMemo)(() => {
            if (null != e && null != e.summary && "" !== e.summary) {
                if (e.type === L.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                    let r = er(e, t);
                    return e.summary.replace("{joinedItems}", r);
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
                    return er(e, t);
                default:
                    return "";
            }
        }, [e, t]);
    };
var ei = r(740076),
    en = r(661847),
    el = r(758836),
    ea = r(630709);
let ec = (e) => {
        let { skuId: t } = e;
        return (0, el.EZ)(t)
            ? (0, i.jsx)(U.E, {
                  variant: "text-sm/normal",
                  className: ea.CU,
                  children: w.intl.format(w.t.Q1scdE, {
                      helpdeskArticle: et.A.getArticleURL(C.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eo = (e) => {
        let { productRecord: t, productName: r, selectedProduct: s, previewingVariantIndexProps: n } = e,
            { previewingVariantIndex: l, handleEntering: a, handleLeaving: c } = n,
            o = b(t, l) ?? s,
            d = es(o, !1),
            { disabledReason: u } = (0, ei.I)(s.skuId),
            m = (0, j.Q)(t),
            h = (0, T.B1)(t),
            x = h ? t.variants[l ?? m] : null;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: ea.sn,
                    children: [
                        (0, i.jsx)(M.D, { variant: "heading-xl/bold", className: ea.R_, children: r }),
                        (0, i.jsx)(U.E, { variant: "text-sm/normal", children: d }),
                        (0, i.jsx)(ec, { skuId: o.skuId }),
                        null !== u && (0, i.jsx)(U.E, { variant: "text-xs/normal", className: ea.H$, children: u }),
                    ],
                }),
                h &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != x &&
                                (0, i.jsx)(U.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: ea.a9,
                                    lineClamp: 1,
                                    children: w.intl.format(w.t.EcaRWt, {
                                        value: (0, i.jsx)("span", { className: ea.I8, children: x.variantLabel }),
                                    }),
                                }),
                            (0, i.jsx)("div", {
                                className: ea._x,
                                children: (0, i.jsx)(en.A, {
                                    skuId: t.skuId,
                                    onVariantEnter: a,
                                    onVariantExit: c,
                                    wrap: !0,
                                }),
                            }),
                        ],
                    }),
            ],
        });
    };
var ed =
        (((s = {}).COLLECTIBLE = "COLLECTIBLE"),
        (s.BUNDLE = "BUNDLE"),
        (s.EXTERNAL_ORB_BADGE = "EXTERNAL_ORB_BADGE"),
        (s.EXTERNAL_FRACTIONAL_NITRO = "EXTERNAL_FRACTIONAL_NITRO"),
        (s.EXTERNAL_GENERIC = "EXTERNAL_GENERIC"),
        s),
    eu = r(97808),
    em = r(778712),
    eh = r(346055),
    ex = r(993077),
    eE = r(245604),
    eR = r(460905),
    eA = r(262295),
    eN = r(320095),
    ep = r(963852),
    ev = r(763754),
    eg = r(20851),
    ej = r(986687),
    e_ = r(101058),
    ef = r(84540),
    eI = r(836602),
    eC = r(428262),
    eT = r(780898),
    eO = r(180129);
let ek = (e) => {
        let { user: t, innerClassName: r } = e;
        return (0, i.jsx)("div", {
            className: eO.mV,
            children: (0, i.jsx)(eA.A, {
                avatar: (0, i.jsx)(eu.eu, {
                    src: t.avatarSrc,
                    size: em._3.SIZE_32,
                    "aria-label": t.name,
                    status: C.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: D()(eO.$L, r),
            }),
        });
    },
    eL = (e) => {
        let { user: t, nameplate: r, avatarDecoration: s } = e,
            n = (0, eT.Ov)();
        return (0, i.jsx)("div", {
            className: eO.nJ,
            role: "img",
            "aria-label": w.intl.string(w.t.SZeUdR),
            children: (0, i.jsxs)(eh.M, {
                children: [
                    (0, i.jsx)(ek, { user: n.mallow, innerClassName: eO.ab }),
                    (0, i.jsxs)(U.E, {
                        variant: "text-sm/semibold",
                        className: eO.OS,
                        children: [w.intl.string(w.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, i.jsx)(ek, { user: n.phibi, innerClassName: eO.e9 }),
                    (0, i.jsx)("div", {
                        className: eO.mV,
                        children: (0, i.jsx)(W.A, {
                            className: eO.M4,
                            innerClassName: eO.e9,
                            user: t,
                            nameplate: r,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: s,
                            hideDecorators: !0,
                        }),
                    }),
                    (0, i.jsx)(ek, { user: n.locke, innerClassName: eO.e9 }),
                    (0, i.jsxs)(U.E, {
                        variant: "text-sm/semibold",
                        className: eO.OS,
                        children: [w.intl.string(w.t["NG43/6"]), " - 12"],
                    }),
                    (0, i.jsx)(ek, { user: n.boom, innerClassName: eO.bD }),
                    (0, i.jsx)(ek, { user: n.cherry, innerClassName: eO.bD }),
                ],
            }),
        });
    },
    eb = (e) => {
        let { user: t } = e,
            r = ((e) => {
                let { author: t } = e;
                return (0, eN.rh)({
                    ...(0, ep.Ay)({ author: t, channelId: "1337", content: w.intl.string(w.t.d5YwK5) }),
                    state: C.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, i.jsx)("div", {
            role: "img",
            "aria-label": w.intl.string(w.t["TN+ZvB"]),
            children: (0, i.jsx)(eh.M, {
                children: (0, i.jsxs)(ex.Z, {
                    className: eO.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, i.jsx)(eg.A, { className: eO.G5, author: (0, ev.p_)(r), message: r }, r.id),
                        (0, i.jsxs)("div", {
                            className: eO.lG,
                            children: [
                                (0, i.jsx)(eE.U, { size: "md", color: "currentColor", className: eO.hq }),
                                (0, i.jsx)(eR.n, { size: "md", color: "currentColor", className: eO.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    ey = (e) => {
        let { product: t, user: r, activeBundleSlide: s } = e,
            l = eC.Ay.canUsePremiumProfileCustomization(r),
            { pendingAvatar: a, ...c } = (0, d.cf)([eI.A], () => eI.A.getPendingChanges()),
            o = (0, e_.V7)({ userId: r.id, image: a }),
            u = t.type === L.R.BUNDLE ? t.items[s ?? 0] : void 0,
            m = u?.type ?? t.type,
            h = m === L.R.AVATAR_DECORATION,
            x = m === L.R.PROFILE_EFFECT,
            { firstAvatarDecoration: E, firstProfileEffect: R, firstNameplate: A, firstProfileFrame: N } = (0, K.f5)(t),
            p = u?.type === L.R.AVATAR_DECORATION ? u : E,
            v = u?.type === L.R.PROFILE_EFFECT ? u : R,
            g = u?.type === L.R.PROFILE_FRAME ? u : N,
            j = u?.type === L.R.NAMEPLATE ? u : A;
        if (
            (n.useEffect(() => {
                if (null != p) return (0, ef.p)({ avatarDecoration: p }), () => (0, ef.p)({ avatarDecoration: void 0 });
            }, [p]),
            m === L.R.NAMEPLATE && null != j)
        )
            return (0, i.jsx)("div", {
                className: eO.Zj,
                children: (0, i.jsx)(eL, { user: r, nameplate: j, avatarDecoration: p }),
            });
        return (0, i.jsx)("div", {
            className: h ? eO.RA : eO.hZ,
            children: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(ej.A, {
                        ...c,
                        pendingAvatar: o,
                        user: r,
                        canUsePremiumCustomization: l,
                        pendingAvatarDecoration: p,
                        pendingProfileEffect: v,
                        profileEffectRestartKey: s,
                        pendingProfileFrame: g,
                        disabledInputs: !0,
                        hideMessageInput: !x,
                        hideCustomStatus: !0,
                        hideBioSection: h,
                        hideExampleButton: !0,
                        interactive: !1,
                        className: h ? eO.oB : void 0,
                    }),
                    h && (0, i.jsx)(eb, { user: r }),
                ],
            }),
        });
    },
    eP = (e) => {
        let { user: t, selectedProduct: r, previewingProduct: s, selectedBundleSlide: n } = e;
        return (0, i.jsx)(ey, { user: t, product: s ?? r, activeBundleSlide: n });
    };
var eS = r(478016),
    eD = r(661531),
    eB = r(224016),
    eU = r(913521);
let eM = () => {
    let e = [w.t.E1NP2x, w.t.kpMomJ, w.t.xT1Vfn, w.t.myyAEr, w.t.zTk8Ul];
    return (0, i.jsxs)("div", {
        className: eU.kL,
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: eU.ym,
            }),
            (0, i.jsx)(eB.A, { color: "white" }),
            (0, i.jsx)("div", {
                className: eU.PX,
                children: e.map((e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: eU.UJ,
                            children: [
                                (0, i.jsx)(eS.U, { color: eD.A.colors.WHITE }),
                                (0, i.jsx)(U.E, {
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
};
var eF = r(17928),
    ew = r(576052),
    eH = r(83554);
let eG = (e) => {
    let { user: t } = e,
        r = eC.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: s, ...n } = (0, eF.cf)([eI.A], () => eI.A.getPendingChanges()),
        l = (0, e_.V7)({ userId: t.id, image: s });
    return (0, i.jsx)("div", {
        className: eH.k,
        children: (0, i.jsx)(ej.A, {
            ...n,
            pendingAvatar: l,
            user: t,
            pendingBadges: [(0, ew._)()],
            canUsePremiumCustomization: r,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
};
var eV = r(197952);
let ez = (e) => {
        let { user: t, productRecord: r, isClosing: s, isOrbCheckoutModalOpen: n } = e;
        return r.skuId === el.Dp.ORB_PROFILE_BADGE
            ? s || n
                ? null
                : (0, i.jsx)(eG, { user: t })
            : (0, el.EZ)(r.skuId)
              ? (0, i.jsx)(eM, {})
              : (0, i.jsx)(Q.B, { product: r, className: eV.M });
    },
    eK = {
        [ed.COLLECTIBLE]: { LeftPreview: J, Info: eo, RightPreview: eP },
        [ed.BUNDLE]: {
            LeftPreview: J,
            Info: (e) => {
                let { productRecord: t, productName: r, selectedBundleSlide: s, setSelectedBundleSlide: l } = e,
                    a = t.items,
                    c = t.bundledProducts,
                    o = c?.[s]?.name,
                    d = a[s]?.type,
                    u = null != d ? (0, _.Dm)(d) : null,
                    m = w.intl.string(w.t.cTbdgu),
                    h = n.useRef(null),
                    x = n.useCallback(
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
                    n.useEffect(() => {
                        let e = h.current;
                        if (null == e || !e.contains(document.activeElement)) return;
                        let t = e.querySelectorAll('[role="radio"]');
                        t[s]?.focus();
                    }, [s]),
                    (0, i.jsxs)("div", {
                        className: H.Qf,
                        children: [
                            (0, i.jsx)(M.D, { variant: "heading-xl/bold", className: H.R_, title: r, children: r }),
                            (0, i.jsx)(U.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: w.intl.format(w.t["1tUCAO"], { count: a.length }),
                            }),
                            (0, i.jsxs)("div", {
                                className: H.hZ,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: H.vg,
                                        children: (0, i.jsx)("div", {
                                            ref: h,
                                            className: H.hK,
                                            role: "radiogroup",
                                            "aria-label": m,
                                            tabIndex: -1,
                                            onKeyDown: x,
                                            children: a.map((e, t) => {
                                                let r = c?.[t]?.name ?? e.skuId;
                                                return (0, i.jsx)(
                                                    z,
                                                    {
                                                        item: e,
                                                        index: t,
                                                        isSelected: t === s,
                                                        setSelected: l,
                                                        label: r,
                                                    },
                                                    e.skuId,
                                                );
                                            }),
                                        }),
                                    }),
                                    null != o && (0, i.jsx)(G, { name: o, typeLabel: u }),
                                ],
                            }),
                        ],
                    })
                );
            },
            RightPreview: eP,
        },
        [ed.EXTERNAL_ORB_BADGE]: { LeftPreview: ee, Info: eo, RightPreview: ez },
        [ed.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: ee, Info: eo, RightPreview: ez },
        [ed.EXTERNAL_GENERIC]: { LeftPreview: ee, Info: eo, RightPreview: ez },
    },
    eW = (e) => {
        var t;
        return eK[
            ((t = e),
            (0, el.pQ)(t.skuId)
                ? t.skuId === el.Dp.ORB_PROFILE_BADGE
                    ? "EXTERNAL_ORB_BADGE"
                    : (0, el.EZ)(t.skuId)
                      ? "EXTERNAL_FRACTIONAL_NITRO"
                      : "EXTERNAL_GENERIC"
                : (0, _.aw)(t)
                  ? "BUNDLE"
                  : "COLLECTIBLE")
        ];
    };
var eY = r(13875),
    eX = r(110629),
    e$ = r(268959),
    eq = r(958942);
let eZ = (e) => {
    let { productRecord: t, selectedProduct: r } = e,
        s = (0, eY.Do)("CollectiblesShopProductDetailsModal") && r.type === L.R.PROFILE_FRAME;
    return (0, i.jsx)("div", {
        className: eq.N,
        children: s
            ? (0, i.jsx)(eX.A, { location: "CollectiblesShopProductDetailsModal" })
            : (0, i.jsx)(e$.A, { skuId: t.skuId }),
    });
};
var eJ = r(990078),
    eQ = r(462887),
    e0 = r(821609),
    e1 = r(318254),
    e5 = r(825484),
    e2 = r(331322),
    e7 = r(736653),
    e8 = r(44120),
    e4 = r(465794),
    e9 = r(757036),
    e3 = r(761705),
    e6 = r(580630),
    te = r(4227),
    tt = r(940980),
    tr = r(466459),
    ts = r(395068),
    ti = r(885574),
    tn = r(401231);
let tl = (e) => {
    let { className: t, isPartiallyPurchased: r } = e;
    return r
        ? (0, i.jsx)(eJ.m, {
              position: "top",
              align: "left",
              text: w.intl.string(w.t.y1VWkZ),
              children: (0, i.jsxs)("div", {
                  className: D()(tn.GX, t),
                  children: [
                      (0, i.jsx)("span", {
                          className: tn.P0,
                          children: (0, i.jsx)(ti.m, { size: "md", color: "currentColor", className: tn.G }),
                      }),
                      (0, i.jsx)(U.E, { variant: "text-md/semibold", children: w.intl.string(w.t.BEjTij) }),
                  ],
              }),
          })
        : (0, i.jsx)(U.E, { variant: "text-md/semibold", className: t, children: w.intl.string(w.t["6cfuDj"]) });
};
var ta = r(878112),
    tc = r(572595),
    to = r(206835),
    td = r(450481);
let tu = (e) => {
    let { product: t, onSuccess: r, onTrackClick: s } = e,
        { handleUseNow: n, isApplying: l, canUseNow: a } = (0, td.p)({ product: t, onSuccess: r }),
        c = (0, to.A)();
    return a
        ? (0, i.jsx)(e0.$, {
              variant: "primary",
              onClick: () => {
                  s?.(el.sH.USE_NOW), n();
              },
              loading: l,
              text: w.intl.string(w.t.MAS7uK),
              fullWidth: !0,
          })
        : (0, i.jsx)(e0.$, {
              variant: "primary",
              onClick: () => {
                  s?.(el.sH.EDIT_PROFILE), c(), r?.();
              },
              text: w.intl.string(w.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var tm = r(226236);
let th = (e) => {
    let { analyticsLocations: t, children: r } = e;
    return (0, i.jsx)(x.f5, {
        value: [...t, h.A.PROFILE_FRAMES_EA_MARKETING],
        children: (0, i.jsxs)("div", {
            className: tm.k,
            children: [
                (0, i.jsx)(U.E, {
                    variant: "text-xs/semibold",
                    color: "text-strong",
                    children: w.intl.format(w.t["3cglst"], {
                        articleURL: et.A.getArticleURL(C.MVz.SHOP_FRAMES_EARLY_ACCESS),
                    }),
                }),
                r,
            ],
        }),
    });
};
var tx = r(561769),
    tE = r(140735),
    tR = r(252955);
let tA = (e) => {
    let {
            price: { amount: t, currency: r },
            className: s,
            variant: n = "heading-md/semibold",
        } = e,
        l = (0, e6.RS)(t, r);
    return (0, i.jsxs)(U.E, {
        variant: n,
        className: D()(tR.v, s),
        children: [
            (0, i.jsx)(tE.A, { children: w.intl.format(w.t["2CEGln"], { price: l }) }),
            (0, i.jsx)("span", { "aria-hidden": !0, children: l }),
        ],
    });
};
var tN = r(219103),
    tp = r(469215);
function tv(e) {
    let {
            product: t,
            hasShopDiscount: r,
            discountSource: s,
            discount: n,
            className: l,
            discountOfferAmount: a,
            hideStrikethroughPrice: c = !1,
            discountIconDisplayMode: o,
            discountIconSize: d = "md",
        } = e,
        u = (0, _.WD)(t, { hasShopDiscount: r, discount: n });
    if (null == u) return null;
    let { defaultPrice: m, showDefaultPriceOnly: h } = u;
    if (h)
        return (0, i.jsx)("div", {
            className: D()(tp.kG, l),
            children: (0, i.jsx)(tN.x, { priceAmount: m.amount, priceCurrency: m.currency }),
        });
    let { showDiscountPrice: x, originalPrice: E, finalPrice: R } = u;
    return (0, i.jsxs)("div", {
        className: D()(tp.kG, l),
        children: [
            c ? null : (0, i.jsx)(tA, { price: E, className: tp.q9 }),
            (0, i.jsx)(tN.x, {
                priceAmount: R.amount,
                priceCurrency: R.currency,
                discount: n,
                className: D()({ [tp.q9]: null == a }),
                discountIconConfig: x && null != o ? { displayMode: o, source: s ?? _.D0.NITRO, size: d } : void 0,
                discountOfferAmount: a,
            }),
        ],
    });
}
var tg = r(403581),
    tj = r(532794),
    t_ = r(788868),
    tf = r(447806);
let tI = (e) => {
    let { text: t, onTrackClick: r } = e,
        { analyticsLocations: s } = (0, x.Ay)(),
        l = n.useRef(null);
    return (0, i.jsx)(B.D, {
        className: tf.F,
        innerRef: l,
        onClick: () => {
            r?.(el.sH.SUBSCRIBE_NOW),
                (0, tj.A)({ subscriptionTier: t_.pe.TIER_2, analyticsLocations: s, returnRef: l });
        },
        children: t,
    });
};
var tC = r(805961);
function tT(e) {
    let { product: t, onTrackClick: r } = e,
        s = (0, _.yt)(t, C.lid.PREMIUM_TIER_2);
    if (null == s) return null;
    let n = (0, e6.RS)(s.amount, s.currency);
    return (0, i.jsxs)("div", {
        className: tC.k,
        children: [
            (0, i.jsx)(eJ.m, {
                text: w.intl.string(w.t.MPFyJ5),
                "aria-label": w.intl.string(w.t.X3Ekj8),
                children: (0, i.jsx)(tg.t, { size: "md", color: "currentColor", className: tC.o }),
            }),
            (0, i.jsx)(U.E, {
                variant: "text-xs/medium",
                children: w.intl.format(w.t.Sv8iic, {
                    price: n,
                    subscribeNowHook: (e) => (0, i.jsx)(tI, { text: e, onTrackClick: r }),
                }),
            }),
        ],
    });
}
var tO = r(818348),
    tk = r(752274);
function tL(e) {
    let { orbPrice: t, isProductDisabled: r, hasSufficientOrbs: s } = e,
        n = r ? w.intl.string(w.t.wu4gyV) : w.intl.string(w.t.eFNRzU),
        l = r || !s;
    return (0, i.jsxs)("div", {
        className: tk.eg,
        children: [
            (0, i.jsx)("div", {
                className: tk.zR,
                children: (0, i.jsx)(U.E, { variant: "text-xs/normal", className: l ? tk.r9 : void 0, children: n }),
            }),
            (0, i.jsx)(tN.x, { priceAmount: t.amount, priceCurrency: t.currency, className: l ? tk.r9 : void 0 }),
        ],
    });
}
function tb(e) {
    let {
            prices: t,
            hasShopDiscount: r,
            discountSource: s,
            discount: n,
            product: l,
            hasSufficientOrbs: a,
            onTrackClick: c,
            isProductDisabled: o,
            discountOfferAmount: d,
        } = e,
        u = null != d;
    return 0 === t.length
        ? null
        : t[0].currency === tO.Yr.DISCORD_ORB
          ? (0, i.jsx)(tL, { orbPrice: t[0], isProductDisabled: o, hasSufficientOrbs: a })
          : (0, i.jsxs)("div", {
                className: tk.eg,
                children: [
                    (0, i.jsxs)("div", {
                        className: tk.pw,
                        children: [
                            (0, i.jsx)(tv, {
                                product: l,
                                discount: n,
                                hasShopDiscount: r,
                                discountSource: s,
                                hideStrikethroughPrice: !r || u,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                                discountOfferAmount: d,
                            }),
                            r || u ? null : (0, i.jsx)(tT, { product: l, onTrackClick: c }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === tO.Yr.DISCORD_ORB &&
                        (0, i.jsx)(tN.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: o || !a ? tk.r9 : void 0,
                        }),
                ],
            });
}
var ty = r(525723),
    tP = r(347722),
    tS = r(57020),
    tD = r(61750),
    tB = r(237309);
let tU = (e) => {
    let {
            user: t,
            productRecord: r,
            selectedProduct: s,
            category: l,
            shouldCheckoutWithOrbs: a,
            tab: c,
            giftRecipient: o,
            giftingOrigin: u,
            analyticsLocations: m,
            returnRef: h,
            onClose: x,
            onTrackClick: E,
        } = e,
        { cardId: R, sessionId: N, tilePosition: p } = (0, g.uM)() ?? {},
        j = (0, e9.L)(t_.PremiumTypes.TIER_2),
        f = (0, _.xM)(t),
        I = (0, eY.Do)("CollectiblesShopProductDetailsModal") && s.type === L.R.PROFILE_FRAME,
        T = eC.Ay.canUseShopDiscounts(t) || I,
        O = (0, tr.h)(r),
        { isPurchased: k, isPartiallyOwnedBundle: b } = (0, tr.h)(s),
        { isDisabled: y } = (0, ei.I)(s.skuId),
        P = (0, _.Zu)({ product: s, isPartiallyOwnedBundle: b, isPurchased: k }),
        S = (0, d.bG)([te.A], () => te.A.isClaiming === s?.skuId),
        B = (0, e7.Ay)(),
        M = (0, eQ.M)(B),
        F = (0, _.G0)(s),
        H = (0, _.yt)(s, C.lid.DEFAULT),
        G = H?.amount === 0,
        V = n.useMemo(() => (0, _.fT)(s, T), [s, T]),
        z = (0, tP.X)(s),
        K = (0, ty.V_)(r),
        W = null != K,
        Y = (0, tt.W)("CollectiblesShopProductDetailsModal"),
        X = c === el.G2.ORBS && a ? tx.Hi.ORBS : Y ? tx.Hi.FIAT : void 0,
        { checkoutEligiblePrices: $, hasSufficientOrbs: q } = (0, tS.F)({
            product: s,
            hasShopDiscount: T,
            hasDiscountOffer: W,
            prioritizedCurrency: X,
        }),
        Z = (0, ts.A)({ location: "CollectiblesShopProductDetailsModal", product: s }),
        J = n.useMemo(() => $.some((e) => e.currency === tO.Yr.DISCORD_ORB), [$]);
    (0, e3.W)({ disableFetch: !J });
    let Q = n.useCallback(() => {
            E(el.sH.BUY_WITH_FIAT),
                (0, e8.A)({
                    skuId: s.skuId,
                    analyticsLocations: m,
                    discoverySessionId: N,
                    onClose: (e) => (e ? x() : (0, tO.tE)()),
                });
        }, [m, x, s.skuId, E, N]),
        ee = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                s = (0, i.jsx)(e4.A, {
                    subscriptionTier: t_.pe.TIER_2,
                    fullWidth: !0,
                    buttonTextOverride: e,
                    onClick: () => {
                        E(el.sH.UNLOCK_WITH_NITRO), (0, tc.M)();
                    },
                    onSubscribeModalClose: () => {
                        (0, tc.t)({
                            product: r,
                            category: l,
                            shouldCheckoutWithOrbs: a,
                            returnRef: h,
                            analyticsLocations: m,
                            tab: c,
                            giftRecipient: o,
                            giftingOrigin: u,
                            cardId: R,
                            sessionId: N,
                            tilePosition: p,
                        });
                    },
                });
            return t ? (0, i.jsx)(th, { analyticsLocations: m, children: s }) : s;
        };
    return (0, i.jsxs)("div", {
        className: tB.iw,
        children: [
            O.isPurchased || O.isPartiallyOwnedBundle
                ? (0, i.jsx)(tl, { className: tB.On, isPartiallyPurchased: b })
                : F
                  ? (0, i.jsxs)("div", {
                        className: tB.pq,
                        children: [
                            (0, i.jsx)(U.E, { variant: "text-md/semibold", children: w.intl.string(w.t.rt69oo) }),
                            !k &&
                                (0, i.jsx)(U.E, {
                                    className: D()(tB.ed, !M && tB.un),
                                    variant: "text-xxs/normal",
                                    children: w.intl.string(w.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, i.jsx)(tb, {
                        prices: $,
                        product: s,
                        hasShopDiscount: T,
                        discountSource: f,
                        discount: V,
                        hasSufficientOrbs: q,
                        isProductDisabled: y,
                        discountOfferAmount: K,
                        onTrackClick: E,
                    }),
            (0, i.jsx)(e2.B, {
                direction: "vertical",
                gap: 8,
                children:
                    !F || j || G
                        ? P
                            ? k
                                ? z
                                    ? (0, i.jsxs)(e5.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, i.jsx)(tu, { product: s, onSuccess: x, onTrackClick: E }),
                                              (0, i.jsx)(ta.A, {
                                                  primary: !0,
                                                  product: s,
                                                  onSuccess: x,
                                                  giftRecipient: o,
                                                  giftingOrigin: u,
                                                  onTrackClick: E,
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)(tu, { product: s, onSuccess: x, onTrackClick: E })
                                : Z
                                  ? ee(w.intl.string(w.t["9wfL34"]), !0)
                                  : F
                                    ? (0, i.jsx)(e0.$, {
                                          loading: S,
                                          loadingStartedLabel: w.intl.string(w.t["TYw+9s"]),
                                          loadingFinishedLabel: w.intl.string(w.t.Pg1UP5),
                                          onClick: async () => {
                                              E(el.sH.ADD_TO_COLLECTION),
                                                  await (0, v.iJ)(s.skuId),
                                                  x(),
                                                  (0, tD.A)({
                                                      product: s,
                                                      analyticsLocations: m,
                                                      purchaseType: el.gs.PREMIUM_PURCHASE,
                                                  });
                                          },
                                          text: w.intl.string(w.t.zp6caO),
                                          fullWidth: !0,
                                      })
                                    : (0, i.jsx)(i.Fragment, {
                                          children: $.map((e, t) => {
                                              let r,
                                                  l,
                                                  a,
                                                  c,
                                                  d,
                                                  h = 0 === t,
                                                  R =
                                                      e.currency === tO.Yr.DISCORD_ORB
                                                          ? ((r = y
                                                                ? w.intl.string(w.t.cTdr3x)
                                                                : w.intl.string(w.t.zqh7ZM)),
                                                            (l = !q || y),
                                                            (a = w.intl.formatToPlainString(w.t.yi41qQ, {
                                                                orbPrice: e.amount,
                                                            })),
                                                            (c = l ? `${a}, ${r}` : a),
                                                            (0, i.jsx)(eJ.m, {
                                                                position: "top",
                                                                text: r,
                                                                shouldShow: l,
                                                                "aria-label": !1,
                                                                children: (0, i.jsx)(e0.$, {
                                                                    variant: h ? "primary" : "secondary",
                                                                    onClick: () => {
                                                                        E(el.sH.BUY_WITH_ORBS),
                                                                            (0, A.B4)({
                                                                                skuId: s.skuId,
                                                                                onComplete: (e) => {
                                                                                    (0, v.gB)(),
                                                                                        x(),
                                                                                        (0, tD.A)({
                                                                                            product: s,
                                                                                            analyticsLocations: m,
                                                                                            itemConsumed:
                                                                                                e?.entitlements?.[0]
                                                                                                    ?.consumed,
                                                                                            purchaseType: el.gs.ORB,
                                                                                        });
                                                                                },
                                                                                analyticsLocations: m,
                                                                                discoverySessionId: N,
                                                                            });
                                                                    },
                                                                    disabled: l,
                                                                    "aria-label": c,
                                                                    text: w.intl.format(w.t.JC15qj, {
                                                                        orbPrice: e.amount,
                                                                        orbIconHook: () =>
                                                                            (0, i.jsx)(e1.C, {
                                                                                className: tB.fN,
                                                                                size: "sm",
                                                                                color: "currentColor",
                                                                            }),
                                                                    }),
                                                                    fullWidth: !0,
                                                                }),
                                                            }))
                                                          : ((d = W
                                                                ? w.intl.formatToPlainString(w.t["5U5RB5"], {
                                                                      discountOfferAmount: K,
                                                                  })
                                                                : w.intl.formatToPlainString(w.t["cNSL/j"], {
                                                                      price: (0, e6.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, i.jsxs)(e5.e, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, i.jsx)(e0.$, {
                                                                        variant: h ? "primary" : "secondary",
                                                                        onClick: Q,
                                                                        text: d,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    z &&
                                                                        (0, i.jsx)(ta.A, {
                                                                            primary: h,
                                                                            product: s,
                                                                            onSuccess: x,
                                                                            giftRecipient: o,
                                                                            giftingOrigin: u,
                                                                            onTrackClick: E,
                                                                        }),
                                                                ],
                                                            }));
                                              return (0, i.jsx)(n.Fragment, { children: R }, e.currency);
                                          }),
                                      })
                            : z
                              ? (0, i.jsx)(ta.A, {
                                    primary: !0,
                                    product: s,
                                    onSuccess: x,
                                    fullWidth: !0,
                                    giftRecipient: o,
                                    giftingOrigin: u,
                                    onTrackClick: E,
                                })
                              : null
                        : ee(w.intl.string(w.t.sEAnVH)),
            }),
        ],
    });
};
var tM = r(18967);
let tF = (e) => {
    let { productRecord: t, selectedProduct: r, previewingProduct: s, user: n, selectedBundleSlide: l } = e,
        a = eW(t);
    return (0, i.jsxs)("div", {
        className: D()(tM.wd, { [tM.E7]: null != a.LeftPreview }),
        children: [
            (0, i.jsx)("div", { className: tM.dL, children: (0, i.jsx)(eZ, { productRecord: t, selectedProduct: r }) }),
            null != a.LeftPreview &&
                (0, i.jsx)("div", {
                    className: tM._E,
                    children: (0, i.jsx)(a.LeftPreview, {
                        user: n,
                        selectedProduct: r,
                        previewingProduct: s,
                        productRecord: t,
                        selectedBundleSlide: l,
                    }),
                }),
            (0, i.jsx)("div", { className: tM.F_, children: (0, i.jsx)(a.Info, { ...e }) }),
            (0, i.jsx)(tU, { ...e }),
        ],
    });
};
var tw = r(408278),
    tH = r(972213),
    tG = r(691540),
    tV = r(857250),
    tz = r(97483),
    tK = r(173936),
    tW = r(957565);
function tY(e) {
    let { skuId: t, tab: r, onTrackClick: s } = e,
        l = n.useCallback(() => {
            p.default.track(C.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }), s?.(el.sH.COPY_LINK);
            let e = `${location.protocol}//${location.host}${C.BVt.COLLECTIBLES_SHOP}${((0, el.cw))(r) ? `?tab=${r}` : ""}#itemSkuId=${t}`;
            (0, tW.C)(e, () => (0, tG.P0)((0, tV.o)(w.intl.string(w.t["L/PwZf"]), tz.Ck.SUCCESS)));
        }, [t, r, s]);
    return (0, i.jsx)(tw.K, {
        "aria-label": w.intl.string(w.t.WqhZss),
        onClick: l,
        icon: tK.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
var tX = r(139146),
    t$ = r(668953),
    tq = r(881636),
    tZ = r(428445);
let tJ = (e) => {
    let { goPrev: t, goNext: r } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: tZ.Y,
                children: (0, i.jsx)(tw.K, {
                    "aria-label": w.intl.string(w.t["3NdvMK"]),
                    onClick: t,
                    icon: t$.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, i.jsx)("div", {
                className: tZ.K,
                children: (0, i.jsx)(tw.K, {
                    "aria-label": w.intl.string(w.t.RYIeOX),
                    onClick: r,
                    icon: tq.u,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
};
var tQ = r(742441);
let t0 = (e) => {
    let {
            user: t,
            productRecord: r,
            previewingProduct: s,
            selectedProduct: l,
            selectedVariantIndex: a,
            selectedBundleSlide: c,
            setSelectedBundleSlide: o,
            isClosing: d,
            isOrbCheckoutModalOpen: u,
            pdpBackground: m,
            tab: h,
            onClose: x,
            onTrackClick: E,
        } = e,
        R = eW(r),
        A = (0, _.aw)(l),
        N = A ? l.items.length : 0,
        p = n.useCallback(() => {
            N <= 1 || o((e) => (e - 1 + N) % N);
        }, [N, o]),
        v = n.useCallback(() => {
            N <= 1 || o((e) => (e + 1) % N);
        }, [N, o]),
        g = n.useCallback(
            (e) => {
                if (N <= 1) return;
                let t = e.target;
                "INPUT" === t.tagName ||
                    "TEXTAREA" === t.tagName ||
                    t.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), p())
                        : "ArrowRight" === e.key && (e.preventDefault(), v()));
            },
            [N, p, v],
        ),
        j = n.useCallback(() => {
            E(el.sH.CLOSE_DETAIL), x();
        }, [E, x]),
        f = n.useRef(null),
        I = n.useRef(!0);
    return (
        n.useLayoutEffect(() => {
            if (I.current) {
                I.current = !1;
                return;
            }
            let e = f.current;
            null != e && ((e.style.animation = "none"), e.offsetHeight, (e.style.animation = ""));
        }, [c]),
        (0, i.jsxs)("div", {
            className: D()(tQ.i1, (0, el.EZ)(l.skuId) ? tQ.bF : l.type === L.R.AVATAR_DECORATION ? tQ.Jq : tQ.eF),
            style: null != m ? { backgroundImage: `url(${m})` } : void 0,
            onKeyDown: g,
            children: [
                (0, i.jsx)("div", {
                    className: tQ.KR,
                    ref: f,
                    children: (0, i.jsx)(R.RightPreview, {
                        user: t,
                        productRecord: r,
                        selectedProduct: l,
                        previewingProduct: s,
                        selectedBundleSlide: c,
                        isClosing: d,
                        isOrbCheckoutModalOpen: u,
                    }),
                }),
                A && N > 1 && (0, i.jsx)(tJ, { goPrev: p, goNext: v }),
                (0, i.jsxs)("div", {
                    className: tQ.VG,
                    children: [
                        (0, i.jsx)(tX.R, {
                            product: r,
                            selectedVariantIndex: a,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: E,
                        }),
                        (0, i.jsx)(tY, { skuId: l.skuId, tab: h, onTrackClick: E }),
                        (0, i.jsx)(tw.K, {
                            "aria-label": w.intl.string(w.t.cpT0Cq),
                            onClick: j,
                            icon: tH.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            ],
        })
    );
};
var t1 = r(460510);
let t5 = (e) => {
    let {
            transitionState: t,
            onClose: r,
            product: s,
            category: l,
            returnRef: L,
            analyticsSource: S,
            analyticsLocations: D,
            shouldCheckoutWithOrbs: B,
            tab: U,
            giftRecipient: M,
            giftingOrigin: F,
        } = e,
        w = (0, d.bG)([N.default], () => N.default.getCurrentUser()),
        H = (0, P.f)(s),
        { previewingVariantIndex: G } = H,
        V = (0, j.Q)(s),
        z = b(s, G),
        K = (0, T.rb)(s, V);
    a()(null != K, "Selected product should not be null");
    let { analyticsLocations: W } = (0, x.Ay)([...D, h.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, k.Yr)(K.skuId);
    let Y = (0, y.U1)(l),
        [X, $] = n.useState(0);
    n.useEffect(() => {
        null != w && (0, R.A)(w.id, w.getAvatarURL(void 0, 80));
    }, [w]);
    let q = n.useMemo(() => (0, _.V6)(s.type, s.skuId), [s.type, s.skuId]);
    n.useEffect(() => {
        p.default.track(C.HAw.OPEN_MODAL, {
            type: C.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
            source: S,
            location_stack: W,
            sku_id: K.skuId,
            product_type: q,
        }),
            (0, v.RD)(K.skuId);
    }, [S, W, K.skuId, q]);
    let { cardId: Z, sessionId: J, tilePosition: Q } = (0, g.uM)() ?? {},
        ee = n.useMemo(() => (0, T.v8)(s), [s]),
        et = (function (e) {
            let { skuId: t, productSkuIds: r, analyticsLocations: s } = e,
                { cardId: i, sessionId: l } = (0, g.uM)() ?? {},
                a = (0, I.o)(),
                c = (0, _.xM)(a);
            return n.useCallback(
                (e) => {
                    p.default.track(C.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                        sku_id: t,
                        cta: e,
                        shop_session_id: l,
                        card_id: i,
                        product_sku_ids: r,
                        location_stack: s,
                        discount_source: (0, _.b_)(c),
                    });
                },
                [t, s, i, r, l, c],
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
    let er = (0, A.o6)(),
        es = t === u.ip.EXITING,
        ei = (0, f.c)("product_details_modal");
    if (null == w || (s.skuId === o.j.PREMIUM_TIER_2_1_DAY && !ei)) return null;
    let en = (0, O.VG)(s),
        el = {
            user: w,
            productRecord: s,
            productName: en,
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
            onClose: r,
            onTrackClick: et,
        };
    return (0, i.jsx)(x.f5, {
        value: W,
        children: (0, i.jsx)(m.d, {
            returnRef: L,
            transitionState: t,
            onClose: r,
            size: "xl",
            paddingSize: "sm",
            "aria-label": en,
            children: (0, i.jsx)("div", {
                className: t1.C,
                children: (0, i.jsxs)("div", {
                    className: t1.j,
                    children: [
                        (0, i.jsx)(tF, { ...el }),
                        (0, i.jsx)(t0, { ...el, isClosing: es, isOrbCheckoutModalOpen: er, pdpBackground: Y }),
                    ],
                }),
            }),
        }),
    });
};
