n.d(t, { default: () => t9 });
var i,
    r = n(477900),
    s = n(582128),
    l = n(284009),
    a = n.n(l),
    c = n(562708),
    o = n(334279),
    d = n(702841),
    u = n(778712),
    m = n(231723),
    p = n(224640),
    g = n(793574),
    x = n(688810),
    h = n(139286),
    E = n(252732),
    v = n(101058),
    N = n(836602),
    f = n(903209),
    A = n(652165),
    R = n(287809),
    I = n(174459),
    j = n(839534),
    _ = n(440938),
    C = n(298072),
    T = n(993408),
    O = n(503089),
    k = n(331884),
    y = n(652215),
    L = n(623373),
    b = n(536572),
    P = n(177366),
    S = n(575593);
function D(e, t) {
    return e.type === S.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e;
}
var B = n(212407),
    M = n(935094),
    U = n(503698),
    G = n.n(U),
    F = n(939249),
    w = n(834730),
    H = n(297264),
    V = n(14702),
    z = n(758836),
    K = n(375708),
    W = n(777940);
function X(e) {
    let { name: t, typeLabel: n } = e;
    return (0, r.jsxs)(w.E, {
        variant: "text-sm/medium",
        className: W.mC,
        "aria-live": "polite",
        children: [
            (0, r.jsx)("span", { className: W.kx, children: t }),
            null != n && (0, r.jsx)("span", { className: W.FP, children: n }),
        ],
    });
}
let Y = { [S.R.AVATAR_DECORATION]: !0, [S.R.PROFILE_FRAME]: !0 };
function Z(e) {
    let { item: t, index: n, isSelected: i, setSelected: l, label: a, trackedSkuId: c, onTrackClick: o } = e,
        d = s.useMemo(() => ({ skuId: t.skuId, type: t.type, items: [t] }), [t]),
        u = s.useCallback(() => {
            o(z.sH.BUNDLE_VIEW_PRODUCT, c), l(n);
        }, [o, c, l, n]),
        m = !0 === Y[t.type];
    return (0, r.jsx)(F.D, {
        tag: "div",
        role: "radio",
        "aria-checked": i,
        tabIndex: i ? 0 : -1,
        className: G()(W.xn, { [W.Y4]: i, [W.u8]: m }),
        onClick: u,
        "aria-label": a,
        children: (0, r.jsx)("div", { className: W.Yf, children: (0, r.jsx)(V.O, { product: d }) }),
    });
}
var $ = n(442759),
    q = n(344346),
    J = n(139136),
    Q = n(395744),
    ee = n(929283),
    et = n(387417);
function en(e) {
    let {
        item: t,
        user: n,
        bundleFirstAvatarDecoration: i,
        isBundle: s,
        pendingAvatarSrc: l,
        pendingAvatarDecoration: a,
        pendingDisplayNameStyles: c,
        pendingGlobalName: o,
    } = e;
    switch (t.type) {
        case S.R.AVATAR_DECORATION:
            return (0, r.jsx)("div", {
                className: et.h1,
                children: (0, r.jsx)(ee.i, { user: n, item: t, avatarSrcOverride: l, isHighlighted: !0 }),
            });
        case S.R.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: s ? et.sm : et.VY,
                children: (0, r.jsx)(J.A, {
                    skuId: t.skuId,
                    removeSetHeight: !0,
                    isHighlighted: !0,
                    delayProfileEffectIntro: !0,
                }),
            });
        case S.R.PROFILE_FRAME:
            return (0, r.jsx)("div", { className: s ? et.ob : et.fE, children: (0, r.jsx)(Q.A, { frame: t }) });
        case S.R.NAMEPLATE:
            return (0, r.jsx)("div", {
                className: et.Dz,
                children: (0, r.jsx)(q.A, {
                    className: et.M4,
                    nameplate: t,
                    user: n,
                    nameplatePreviewSize: "large",
                    pendingAvatarDecoration: i ?? a,
                    pendingDisplayNameStyles: c,
                    pendingGlobalName: o,
                    isHighlighted: !0,
                    hideDecorators: !0,
                }),
            });
        default:
            return null;
    }
}
function ei(e) {
    let { user: t, selectedProduct: n, previewingProduct: i, selectedBundleSlide: s, pendingProfile: l } = e,
        a = i ?? n,
        { firstAvatarDecoration: c } = (0, $.f5)(a),
        { pendingChanges: o, pendingAvatarSrc: d } = l,
        u = a.items[s] ?? a.items[0];
    return null == u
        ? null
        : (0, r.jsx)(en, {
              item: u,
              user: t,
              bundleFirstAvatarDecoration: c,
              isBundle: (0, T.aw)(a),
              pendingAvatarSrc: d,
              pendingAvatarDecoration: o.pendingAvatarDecoration,
              pendingDisplayNameStyles: o.pendingDisplayNameStyles,
              pendingGlobalName: o.pendingGlobalName,
          });
}
var er = n(846957);
function es(e) {
    let { selectedProduct: t, previewingProduct: n } = e;
    return (0, r.jsx)(er.B, { product: n ?? t });
}
var el = n(975571);
function ea(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t) return K.intl.formatToPlainString(K.t["/0Yndu"], { num: e.bundledProducts?.length });
    let n = e.bundledProducts ?? [],
        i = [],
        r = !1;
    for (let e of n)
        switch (e.type) {
            case S.R.AVATAR_DECORATION:
                i.push(K.intl.formatToPlainString(K.t.Ntv9Jt, { itemName: e.name }));
                break;
            case S.R.PROFILE_EFFECT:
                i.push(K.intl.formatToPlainString(K.t["3Y8q7a"], { itemName: e.name }));
                break;
            case S.R.NAMEPLATE:
                i.push(K.intl.formatToPlainString(K.t["2keXky"], { itemName: e.name })), (r = !0);
        }
    if (r) {
        let e = i.join(", ").replace(/, ([^,]*)$/, " & $1");
        return K.intl.formatToPlainString(K.t.Ofrqj6, { joinedItems: e });
    }
    let s = i.join(" & ");
    return K.intl.formatToPlainString(K.t.Ofrqj6, { joinedItems: s });
}
n(321073);
var ec = n(740076),
    eo = n(661847),
    ed = n(186077);
function eu(e) {
    let { skuId: t } = e;
    return (0, z.EZ)(t)
        ? (0, r.jsx)(w.E, {
              variant: "text-sm/normal",
              className: ed.CU,
              children: K.intl.format(K.t.Q1scdE, {
                  helpdeskArticle: el.A.getArticleURL(y.MVz.FRACTIONAL_PREMIUM_ABOUT),
              }),
          })
        : null;
}
function em(e) {
    let { productRecord: t, productName: n, selectedProduct: i, previewingVariantIndexProps: l } = e,
        { previewingVariantIndex: a, handleEntering: c, handleLeaving: o } = l,
        d = D(t, a) ?? i,
        u = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return (0, s.useMemo)(() => {
                if (null != e && null != e.summary && "" !== e.summary) {
                    if (e.type === S.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                        let n = ea(e, t);
                        return e.summary.replace("{joinedItems}", n);
                    }
                    return e.summary;
                }
                switch (e?.type) {
                    case S.R.AVATAR_DECORATION:
                        return K.intl.string(K.t["3lv7q2"]);
                    case S.R.PROFILE_EFFECT:
                        return K.intl.string(K.t.VhJL72);
                    case S.R.NAMEPLATE:
                        return K.intl.string(K.t.ik37EZ);
                    case S.R.PROFILE_FRAME:
                        return K.intl.string(K.t.fWzWPp);
                    case S.R.BUNDLE:
                        return ea(e, t);
                    default:
                        return "";
                }
            }, [e, t]);
        })(d, !1),
        { disabledReason: m } = (0, ec.I)(i.skuId),
        p = (0, C.Q)(t),
        g = (0, L.B1)(t),
        x = g ? t.variants[a ?? p] : null,
        h = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            null != h.current && ((h.current.tabIndex = -1), h.current.focus());
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: ed.sn,
                    children: [
                        (0, r.jsx)(H.D, { ref: h, variant: "heading-xl/bold", className: ed.R_, children: n }),
                        (0, r.jsx)(w.E, { variant: "text-sm/normal", children: u }),
                        (0, r.jsx)(eu, { skuId: d.skuId }),
                        null !== m && (0, r.jsx)(w.E, { variant: "text-xs/normal", className: ed.H$, children: m }),
                    ],
                }),
                g &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            null != x &&
                                (0, r.jsx)(w.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: ed.a9,
                                    lineClamp: 1,
                                    children: K.intl.format(K.t.EcaRWt, {
                                        value: (0, r.jsx)("span", { className: ed.I8, children: x.variantLabel }),
                                    }),
                                }),
                            (0, r.jsx)("div", {
                                className: ed._x,
                                children: (0, r.jsx)(eo.A, {
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
var ep =
        (((i = {}).COLLECTIBLE = "COLLECTIBLE"),
        (i.BUNDLE = "BUNDLE"),
        (i.EXTERNAL_ORB_BADGE = "EXTERNAL_ORB_BADGE"),
        (i.EXTERNAL_FRACTIONAL_NITRO = "EXTERNAL_FRACTIONAL_NITRO"),
        (i.EXTERNAL_GENERIC = "EXTERNAL_GENERIC"),
        i),
    eg = n(97808),
    ex = n(346055),
    eh = n(993077),
    eE = n(245604),
    ev = n(460905),
    eN = n(262295),
    ef = n(685073),
    eA = n(320095),
    eR = n(963852),
    eI = n(763754),
    ej = n(20851),
    e_ = n(986687),
    eC = n(428262),
    eT = n(780898),
    eO = n(907609);
function ek(e) {
    let { user: t, innerClassName: n } = e;
    return (0, r.jsx)("div", {
        className: eO.mV,
        children: (0, r.jsx)(eN.A, {
            avatar: (0, r.jsx)(eg.eu, {
                src: t.avatarSrc,
                size: u._3.SIZE_32,
                "aria-label": t.name,
                status: y.clD.ONLINE,
            }),
            name: t.name,
            innerClassName: G()(eO.$L, n),
        }),
    });
}
function ey(e) {
    let { user: t, nameplate: n, avatarDecoration: i, pendingDisplayNameStyles: s, pendingGlobalName: l } = e,
        a = (0, eT.Ov)();
    return (0, r.jsx)("div", {
        className: eO.nJ,
        role: "img",
        "aria-label": K.intl.formatToPlainString(K.t["95pCSf"], { a11y_text: n.label }),
        children: (0, r.jsxs)(ex.M, {
            children: [
                (0, r.jsx)(ek, { user: a.mallow, innerClassName: eO.ab }),
                (0, r.jsxs)(w.E, {
                    variant: "text-sm/semibold",
                    className: eO.OS,
                    children: [K.intl.string(K.t["yzW/fZ"]), " - 3"],
                }),
                (0, r.jsx)(ek, { user: a.phibi, innerClassName: eO.e9 }),
                (0, r.jsx)("div", {
                    className: eO.mV,
                    children: (0, r.jsx)(q.A, {
                        className: eO.M4,
                        innerClassName: eO.e9,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: !0,
                        skipEffectDisplayName: !0,
                        pendingAvatarDecoration: i,
                        pendingDisplayNameStyles: s,
                        pendingGlobalName: l,
                        hideDecorators: !0,
                    }),
                }),
                (0, r.jsx)(ek, { user: a.locke, innerClassName: eO.e9 }),
                (0, r.jsxs)(w.E, {
                    variant: "text-sm/semibold",
                    className: eO.OS,
                    children: [K.intl.string(K.t["NG43/6"]), " - 12"],
                }),
                (0, r.jsx)(ek, { user: a.boom, innerClassName: eO.bD }),
                (0, r.jsx)(ek, { user: a.cherry, innerClassName: eO.bD }),
            ],
        }),
    });
}
function eL(e) {
    let {
            user: t,
            avatarDecoration: n,
            pendingAvatarSrc: i,
            pendingPrimaryGuildId: s,
            pendingDisplayNameStyles: l,
            pendingGlobalName: a,
        } = e,
        c = (function (e) {
            let { author: t } = e;
            return (0, eA.rh)({
                ...(0, eR.Ay)({ author: t, channelId: "1337", content: K.intl.string(K.t.d5YwK5) }),
                state: y.cmJ.SENT,
                id: "0",
            });
        })({ author: t }),
        o = (0, ef.gS)(s),
        d = (0, eI.p_)(c),
        u = {
            ...d,
            nick:
                void 0 !== a
                    ? (0, E.eh)({ pendingNickname: void 0, pendingGlobalName: a, user: t, guildMember: null })
                    : d.nick,
            primaryGuild: void 0 !== s ? o : d.primaryGuild,
            displayNameStyles: void 0 !== l ? l : d.displayNameStyles,
        };
    return (0, r.jsx)("div", {
        role: "img",
        "aria-label": K.intl.string(K.t["TN+ZvB"]),
        children: (0, r.jsx)(ex.M, {
            children: (0, r.jsxs)(eh.Z, {
                className: eO.f7,
                outline: !0,
                "aria-hidden": !0,
                children: [
                    (0, r.jsx)(
                        ej.A,
                        {
                            className: eO.G5,
                            author: u,
                            message: c,
                            avatarDecorationOverride: n ?? null,
                            avatarOverride: i,
                        },
                        c.id,
                    ),
                    (0, r.jsxs)("div", {
                        className: eO.lG,
                        children: [
                            (0, r.jsx)(eE.U, { size: "md", color: "currentColor", className: eO.hq }),
                            (0, r.jsx)(ev.n, { size: "md", color: "currentColor", className: eO.hq }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function eb(e) {
    let { product: t, user: n, pendingProfile: i, activeBundleSlide: s } = e,
        l = eC.Ay.canUsePremiumProfileCustomization(n),
        { pendingAvatar: a, ...c } = i.pendingChanges,
        o = i.pendingAvatarSrc,
        d = t.type === S.R.BUNDLE ? t.items[s ?? 0] : void 0,
        u = d?.type ?? t.type,
        m = u === S.R.AVATAR_DECORATION,
        p = u === S.R.PROFILE_EFFECT,
        { firstAvatarDecoration: g, firstProfileEffect: x, firstNameplate: h, firstProfileFrame: E } = (0, $.f5)(t),
        v = d?.type === S.R.AVATAR_DECORATION ? d : g,
        N = d?.type === S.R.PROFILE_EFFECT ? d : x,
        f = d?.type === S.R.PROFILE_FRAME ? d : E,
        A = d?.type === S.R.NAMEPLATE ? d : h;
    if (u === S.R.NAMEPLATE && null != A)
        return (0, r.jsx)("div", {
            className: eO.Zj,
            children: (0, r.jsx)(ey, {
                user: n,
                nameplate: A,
                avatarDecoration: v ?? c.pendingAvatarDecoration,
                pendingDisplayNameStyles: c.pendingDisplayNameStyles,
                pendingGlobalName: c.pendingGlobalName,
            }),
        });
    return (0, r.jsx)("div", {
        className: m ? eO.RA : eO.hZ,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(e_.A, {
                    ...c,
                    pendingAvatar: o,
                    user: n,
                    canUsePremiumCustomization: l,
                    pendingAvatarDecoration: v ?? c.pendingAvatarDecoration,
                    pendingProfileEffect: N ?? c.pendingProfileEffect,
                    profileEffectRestartKey: s,
                    pendingProfileFrame: f ?? c.pendingProfileFrame,
                    disabledInputs: !0,
                    hideMessageInput: !p,
                    hideCustomStatus: !0,
                    hideBioSection: m,
                    hideExampleButton: !0,
                    interactive: !1,
                    className: m ? eO.oB : void 0,
                }),
                m &&
                    (0, r.jsx)(eL, {
                        user: n,
                        avatarDecoration: v,
                        pendingAvatarSrc: o,
                        pendingPrimaryGuildId: c.pendingPrimaryGuildId,
                        pendingDisplayNameStyles: c.pendingDisplayNameStyles,
                        pendingGlobalName: c.pendingGlobalName,
                    }),
            ],
        }),
    });
}
function eP(e) {
    let { user: t, pendingProfile: n, selectedProduct: i, previewingProduct: s, selectedBundleSlide: l } = e;
    return (0, r.jsx)(eb, { user: t, pendingProfile: n, product: s ?? i, activeBundleSlide: l });
}
var eS = n(478016),
    eD = n(661531),
    eB = n(224016),
    eM = n(792249);
function eU() {
    let e = [K.t.E1NP2x, K.t.kpMomJ, K.t.xT1Vfn, K.t.myyAEr, K.t.zTk8Ul];
    return (0, r.jsxs)("div", {
        className: eM.kL,
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: eM.ym,
            }),
            (0, r.jsx)(eB.A, { color: "white" }),
            (0, r.jsx)("div", {
                className: eM.PX,
                children: e.map((e, t) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: eM.UJ,
                            children: [
                                (0, r.jsx)(eS.U, { color: eD.A.colors.WHITE }),
                                (0, r.jsx)(w.E, {
                                    variant: "text-sm/medium",
                                    color: "text-overlay-light",
                                    children: K.intl.string(e),
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
var eG = n(17928),
    eF = n(132198),
    ew = n(176890);
function eH(e) {
    let { user: t } = e,
        n = eC.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: i, ...s } = (0, eG.cf)([N.A], () => N.A.getPendingChanges()),
        l = (0, v.V7)({ userId: t.id, image: i });
    return (0, r.jsx)("div", {
        className: ew.k,
        children: (0, r.jsx)(e_.A, {
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
var eV = n(933595);
function ez(e) {
    let { user: t, productRecord: n, isClosing: i, isOrbCheckoutModalOpen: s } = e;
    return n.skuId === z.Dp.ORB_PROFILE_BADGE
        ? i || s
            ? null
            : (0, r.jsx)(eH, { user: t })
        : (0, z.EZ)(n.skuId)
          ? (0, r.jsx)(eU, {})
          : (0, r.jsx)(er.B, { product: n, className: eV.M });
}
let eK = {
    [ep.COLLECTIBLE]: { LeftPreview: ei, Info: em, RightPreview: eP },
    [ep.BUNDLE]: {
        LeftPreview: ei,
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
                d = o?.[i]?.name,
                u = c[i]?.type,
                m = null != u ? (0, T.Dm)(u) : null,
                p = K.intl.string(K.t.cTbdgu),
                g = s.useRef(null),
                x = s.useCallback(
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
                let e = g.current;
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
                    className: W.Qf,
                    children: [
                        (0, r.jsx)(H.D, { ref: h, variant: "heading-xl/bold", className: W.R_, title: n, children: n }),
                        (0, r.jsx)(w.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: K.intl.format(K.t["1tUCAO"], { count: c.length }),
                        }),
                        (0, r.jsxs)("div", {
                            className: W.hZ,
                            children: [
                                (0, r.jsx)("div", {
                                    className: W.vg,
                                    children: (0, r.jsx)("div", {
                                        ref: g,
                                        className: W.hK,
                                        role: "radiogroup",
                                        "aria-label": p,
                                        tabIndex: -1,
                                        onKeyDown: x,
                                        children: c.map((e, t) => {
                                            let n = o?.[t]?.name ?? e.skuId,
                                                s = o?.[t]?.skuId ?? e.skuId;
                                            return (0, r.jsx)(
                                                Z,
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
                                null != d && (0, r.jsx)(X, { name: d, typeLabel: m }),
                            ],
                        }),
                    ],
                })
            );
        },
        RightPreview: eP,
    },
    [ep.EXTERNAL_ORB_BADGE]: { LeftPreview: es, Info: em, RightPreview: ez },
    [ep.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: es, Info: em, RightPreview: ez },
    [ep.EXTERNAL_GENERIC]: { LeftPreview: es, Info: em, RightPreview: ez },
};
function eW(e) {
    var t;
    return eK[
        ((t = e),
        (0, z.pQ)(t.skuId)
            ? t.skuId === z.Dp.ORB_PROFILE_BADGE
                ? "EXTERNAL_ORB_BADGE"
                : (0, z.EZ)(t.skuId)
                  ? "EXTERNAL_FRACTIONAL_NITRO"
                  : "EXTERNAL_GENERIC"
            : (0, T.aw)(t)
              ? "BUNDLE"
              : "COLLECTIBLE")
    ];
}
var eX = n(13875),
    eY = n(629042),
    eZ = n(110629),
    e$ = n(268959),
    eq = n(866665),
    eJ = n(508770),
    eQ = n(278416);
let e0 = (e) => {
    let { promotion: t } = e;
    return (0, r.jsx)(eq.m, {
        position: "top",
        asContainer: !0,
        text: K.intl.formatToPlainString(K.t.cNtuKF, { offerName: t.displayName }),
        children: (0, r.jsx)(eJ.E, { type: { text: K.intl.string(K.t["nb5PC/"]) }, variant: "expressive", icon: eQ.g }),
    });
};
var e1 = n(609225);
function e2(e) {
    let t,
        { productRecord: n, selectedProduct: i, selectedBundleSlide: s } = e,
        l = (0, eX.Do)("CollectiblesShopProductDetailsModal") && i.type === S.R.PROFILE_FRAME,
        a = (0, eY.SV)(i),
        c = n.type === S.R.BUNDLE ? (n.items[s] ?? n.items[0]) : void 0,
        o =
            null != c &&
            !n.hideBadge &&
            null == n.badgeOverride &&
            (0, L.JQ)({ skuId: c.skuId, type: c.type, items: [c] });
    return (
        (t = l
            ? (0, r.jsx)(eZ.A, { location: "CollectiblesShopProductDetailsModal" })
            : o
              ? (0, r.jsx)(e$.s, {})
              : (0, r.jsx)(e$.A, { skuId: n.skuId })),
        (0, r.jsxs)("div", { className: e1.N, children: [t, null != a && (0, r.jsx)(e0, { promotion: a })] })
    );
}
var e7 = n(462887),
    e8 = n(821609),
    e6 = n(318254),
    e9 = n(825484),
    e5 = n(331322),
    e3 = n(736653),
    e4 = n(44120),
    te = n(465794),
    tt = n(757036),
    tn = n(761705),
    ti = n(580630),
    tr = n(4227),
    ts = n(466459),
    tl = n(395068),
    ta = n(885574),
    tc = n(847927);
function to(e) {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, r.jsx)(eq.m, {
              position: "top",
              align: "left",
              text: K.intl.string(K.t.y1VWkZ),
              children: (0, r.jsxs)("div", {
                  className: G()(tc.GX, t),
                  children: [
                      (0, r.jsx)("span", {
                          className: tc.P0,
                          children: (0, r.jsx)(ta.m, { size: "md", color: "currentColor", className: tc.G }),
                      }),
                      (0, r.jsx)(w.E, { variant: "text-md/semibold", children: K.intl.string(K.t.BEjTij) }),
                  ],
              }),
          })
        : (0, r.jsx)(w.E, { variant: "text-md/semibold", className: t, children: K.intl.string(K.t["6cfuDj"]) });
}
var td = n(878112),
    tu = n(572595),
    tm = n(206835),
    tp = n(450481);
let tg = function (e) {
    let { product: t, onSuccess: n, onTrackClick: i } = e,
        { handleUseNow: s, isApplying: l, canUseNow: a } = (0, tp.p)({ product: t, onSuccess: n }),
        c = (0, tm.A)();
    return a
        ? (0, r.jsx)(e8.$, {
              variant: "primary",
              onClick: () => {
                  i?.(z.sH.USE_NOW), s();
              },
              loading: l,
              text: K.intl.string(K.t.MAS7uK),
              fullWidth: !0,
          })
        : (0, r.jsx)(e8.$, {
              variant: "primary",
              onClick: () => {
                  i?.(z.sH.EDIT_PROFILE), c(), n?.();
              },
              text: K.intl.string(K.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var tx = n(770948);
let th = function (e) {
    let { analyticsLocations: t, children: n } = e;
    return (0, r.jsx)(x.f5, {
        value: [...t, g.A.PROFILE_FRAMES_EA_MARKETING],
        children: (0, r.jsxs)("div", {
            className: tx.k,
            children: [
                (0, r.jsx)(w.E, {
                    variant: "text-xs/semibold",
                    color: "text-strong",
                    children: K.intl.format(K.t["3cglst"], {
                        articleURL: el.A.getArticleURL(y.MVz.SHOP_FRAMES_EARLY_ACCESS),
                    }),
                }),
                n,
            ],
        }),
    });
};
var tE = n(561769),
    tv = n(140735),
    tN = n(273267);
function tf(e) {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: s = "heading-md/semibold",
        } = e,
        l = (0, ti.RS)(t, n);
    return (0, r.jsxs)(w.E, {
        variant: s,
        className: G()(tN.v, i),
        children: [
            (0, r.jsx)(tv.A, { children: K.intl.format(K.t["2CEGln"], { price: l }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: l }),
        ],
    });
}
var tA = n(219103),
    tR = n(794231);
function tI(e) {
    let {
            product: t,
            hasShopDiscount: n,
            discountSource: i,
            discount: s,
            className: l,
            hideStrikethroughPrice: a = !1,
            discountIconDisplayMode: c,
            discountIconSize: o = "md",
        } = e,
        d = (0, T.WD)(t, { hasShopDiscount: n, discount: s });
    if (null == d) return null;
    let { defaultPrice: u, showDefaultPriceOnly: m } = d;
    if (m)
        return (0, r.jsx)("div", {
            className: G()(tR.kG, l),
            children: (0, r.jsx)(tA.x, { priceAmount: u.amount, priceCurrency: u.currency }),
        });
    let { showDiscountPrice: p, originalPrice: g, finalPrice: x } = d;
    return (0, r.jsxs)("div", {
        className: G()(tR.kG, l),
        children: [
            a ? null : (0, r.jsx)(tf, { price: g, className: tR.q9 }),
            (0, r.jsx)(tA.x, {
                priceAmount: x.amount,
                priceCurrency: x.currency,
                discount: s,
                className: tR.q9,
                discountIconConfig: p && null != c ? { displayMode: c, source: i ?? T.D0.NITRO, size: o } : void 0,
            }),
        ],
    });
}
var tj = n(403581),
    t_ = n(532794),
    tC = n(202541),
    tT = n(868534);
function tO(e) {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: i } = (0, x.Ay)(),
        l = s.useRef(null);
    return (0, r.jsx)(F.D, {
        className: tT.F,
        innerRef: l,
        onClick: () => {
            n?.(z.sH.SUBSCRIBE_NOW), (0, t_.A)({ subscriptionTier: tC.pe.TIER_2, analyticsLocations: i, returnRef: l });
        },
        children: t,
    });
}
var tk = n(25537);
function ty(e) {
    let { product: t, onTrackClick: n } = e,
        i = (0, T.yt)(t, y.lid.PREMIUM_TIER_2);
    if (null == i) return null;
    let s = (0, ti.RS)(i.amount, i.currency);
    return (0, r.jsxs)("div", {
        className: tk.k,
        children: [
            (0, r.jsx)(eq.m, {
                text: K.intl.string(K.t.MPFyJ5),
                "aria-label": K.intl.string(K.t.X3Ekj8),
                children: (0, r.jsx)(tj.t, { size: "md", color: "currentColor", className: tk.o }),
            }),
            (0, r.jsx)(w.E, {
                variant: "text-xs/medium",
                children: K.intl.format(K.t.Sv8iic, {
                    price: s,
                    subscribeNowHook: (e) => (0, r.jsx)(tO, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
var tL = n(818348),
    tb = n(224506);
function tP(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: i, discount: s } = e,
        l = n ? K.intl.string(K.t.wu4gyV) : K.intl.string(K.t.eFNRzU),
        a = n || !i;
    return (0, r.jsxs)("div", {
        className: tb.eg,
        children: [
            (0, r.jsx)("div", {
                className: tb.zR,
                children: (0, r.jsx)(w.E, { variant: "text-xs/normal", className: a ? tb.r9 : void 0, children: l }),
            }),
            (0, r.jsx)(tA.x, {
                priceAmount: t.amount,
                priceCurrency: t.currency,
                discount: s,
                className: a ? tb.r9 : void 0,
            }),
        ],
    });
}
function tS(e) {
    let {
        prices: t,
        hasShopDiscount: n,
        discountSource: i,
        discount: s,
        product: l,
        hasSufficientOrbs: a,
        onTrackClick: c,
        isProductDisabled: o,
    } = e;
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
                            (0, r.jsx)(tI, {
                                product: l,
                                discount: s,
                                hasShopDiscount: n,
                                discountSource: i,
                                hideStrikethroughPrice: !n,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                            }),
                            n ? null : (0, r.jsx)(ty, { product: l, onTrackClick: c }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === tL.Yr.DISCORD_ORB &&
                        (0, r.jsx)(tA.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: o || !a ? tb.r9 : void 0,
                        }),
                ],
            });
}
var tD = n(347722),
    tB = n(57020),
    tM = n(61750),
    tU = n(727205);
function tG(e) {
    let {
            user: t,
            productRecord: n,
            selectedProduct: i,
            category: l,
            shouldCheckoutWithOrbs: a,
            tab: c,
            giftRecipient: o,
            giftingOrigin: u,
            analyticsLocations: m,
            returnRef: p,
            onClose: g,
            onTrackClick: x,
        } = e,
        { cardId: h, sessionId: E, tilePosition: v } = (0, _.uM)() ?? {},
        N = (0, tt.L)(tC.PremiumTypes.TIER_2),
        f = (0, T.xM)(t),
        R = (0, eX.Do)("CollectiblesShopProductDetailsModal") && i.type === S.R.PROFILE_FRAME,
        I = eC.Ay.canUseShopDiscounts(t) || R,
        C = (0, eY.VZ)(i),
        O = (0, eY.Nc)(i),
        k = (0, ts.h)(n),
        { isPurchased: L, isPartiallyOwnedBundle: b } = (0, ts.h)(i),
        { isDisabled: P } = (0, ec.I)(i.skuId),
        D = (0, T.Zu)({ product: i, isPartiallyOwnedBundle: b, isPurchased: L }),
        B = (0, d.bG)([tr.A], () => tr.A.isClaiming === i?.skuId),
        M = (0, e3.Ay)(),
        U = (0, e7.M)(M),
        F = (0, T.G0)(i),
        H = (0, T.yt)(i, y.lid.DEFAULT),
        V = H?.amount === 0,
        W = (0, tD.X)(i),
        X = O ? tE.Hi.FIAT : c === z.G2.ORBS && a ? tE.Hi.ORBS : void 0,
        { checkoutEligiblePrices: Y, hasSufficientOrbs: Z } = (0, tB.F)({
            product: i,
            hasShopDiscount: I,
            prioritizedCurrency: X,
        }),
        $ = s.useMemo(() => (0, T.fT)(i, I, Y[0]?.currency), [i, I, Y]),
        q = (0, tl.A)({ location: "CollectiblesShopProductDetailsModal", product: i }),
        J = s.useMemo(() => Y.some((e) => e.currency === tL.Yr.DISCORD_ORB), [Y]);
    (0, tn.W)({ disableFetch: !J });
    let Q = s.useCallback(() => {
        x(z.sH.BUY_WITH_FIAT),
            (0, e4.A)({
                skuId: i.skuId,
                analyticsLocations: m,
                discoverySessionId: E,
                onClose: (e) => (e ? g() : (0, tL.tE)()),
            });
    }, [m, g, i.skuId, x, E]);
    function ee(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = (0, r.jsx)(te.A, {
                subscriptionTier: tC.pe.TIER_2,
                fullWidth: !0,
                buttonTextOverride: e,
                onClick: () => {
                    x(z.sH.UNLOCK_WITH_NITRO), (0, tu.M)();
                },
                onSubscribeModalClose: () => {
                    (0, tu.t)({
                        product: n,
                        category: l,
                        shouldCheckoutWithOrbs: a,
                        returnRef: p,
                        analyticsLocations: m,
                        tab: c,
                        giftRecipient: o,
                        giftingOrigin: u,
                        cardId: h,
                        sessionId: E,
                        tilePosition: v,
                    });
                },
            });
        return t ? (0, r.jsx)(th, { analyticsLocations: m, children: i }) : i;
    }
    return (0, r.jsxs)("div", {
        className: tU.iw,
        children: [
            k.isPurchased || k.isPartiallyOwnedBundle
                ? (0, r.jsx)(to, { className: tU.On, isPartiallyPurchased: b })
                : F
                  ? (0, r.jsxs)("div", {
                        className: tU.pq,
                        children: [
                            (0, r.jsx)(w.E, { variant: "text-md/semibold", children: K.intl.string(K.t.rt69oo) }),
                            !L &&
                                (0, r.jsx)(w.E, {
                                    className: G()(tU.ed, !U && tU.un),
                                    variant: "text-xxs/normal",
                                    children: K.intl.string(K.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, r.jsx)(tS, {
                        prices: Y,
                        product: i,
                        hasShopDiscount: I,
                        discountSource: f,
                        discount: $,
                        hasSufficientOrbs: Z,
                        isProductDisabled: P,
                        onTrackClick: x,
                    }),
            (0, r.jsx)(e5.B, {
                direction: "vertical",
                gap: 8,
                children:
                    !F || N || V
                        ? D
                            ? L
                                ? W
                                    ? (0, r.jsxs)(e9.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, r.jsx)(tg, { product: i, onSuccess: g, onTrackClick: x }),
                                              (0, r.jsx)(td.A, {
                                                  primary: !0,
                                                  product: i,
                                                  onSuccess: g,
                                                  giftRecipient: o,
                                                  giftingOrigin: u,
                                                  onTrackClick: x,
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(tg, { product: i, onSuccess: g, onTrackClick: x })
                                : q
                                  ? ee(K.intl.string(K.t["9wfL34"]), !0)
                                  : F
                                    ? (0, r.jsx)(e8.$, {
                                          loading: B,
                                          loadingStartedLabel: K.intl.string(K.t["TYw+9s"]),
                                          loadingFinishedLabel: K.intl.string(K.t.Pg1UP5),
                                          onClick: async () => {
                                              x(z.sH.ADD_TO_COLLECTION),
                                                  await (0, j.iJ)(i.skuId),
                                                  g(),
                                                  (0, tM.A)({
                                                      product: i,
                                                      analyticsLocations: m,
                                                      purchaseType: z.gs.PREMIUM_PURCHASE,
                                                  });
                                          },
                                          text: K.intl.string(K.t.zp6caO),
                                          fullWidth: !0,
                                      })
                                    : (0, r.jsx)(r.Fragment, {
                                          children: Y.map((e, t) => {
                                              let n,
                                                  l,
                                                  a,
                                                  c,
                                                  d,
                                                  p = 0 === t,
                                                  h =
                                                      e.currency === tL.Yr.DISCORD_ORB
                                                          ? ((n = P
                                                                ? K.intl.string(K.t.cTdr3x)
                                                                : K.intl.string(K.t.zqh7ZM)),
                                                            (l = !Z || P),
                                                            (a = K.intl.formatToPlainString(K.t.yi41qQ, {
                                                                orbPrice: e.amount,
                                                            })),
                                                            (c = l ? `${a}, ${n}` : a),
                                                            (0, r.jsx)(eq.m, {
                                                                position: "top",
                                                                text: n,
                                                                shouldShow: l,
                                                                "aria-label": !1,
                                                                children: (0, r.jsx)(e8.$, {
                                                                    variant: p ? "primary" : "secondary",
                                                                    onClick: function () {
                                                                        x(z.sH.BUY_WITH_ORBS),
                                                                            (0, A.B4)({
                                                                                skuId: i.skuId,
                                                                                onComplete: (e) => {
                                                                                    (0, j.gB)(),
                                                                                        g(),
                                                                                        (0, tM.A)({
                                                                                            product: i,
                                                                                            analyticsLocations: m,
                                                                                            itemConsumed:
                                                                                                e?.entitlements?.[0]
                                                                                                    ?.consumed,
                                                                                            purchaseType: z.gs.ORB,
                                                                                        });
                                                                                },
                                                                                analyticsLocations: m,
                                                                                discoverySessionId: E,
                                                                            });
                                                                    },
                                                                    disabled: l,
                                                                    "aria-label": c,
                                                                    text: K.intl.format(K.t.JC15qj, {
                                                                        orbPrice: e.amount,
                                                                        orbIconHook: () =>
                                                                            (0, r.jsx)(e6.C, {
                                                                                className: tU.fN,
                                                                                size: "sm",
                                                                                color: "currentColor",
                                                                            }),
                                                                    }),
                                                                    fullWidth: !0,
                                                                }),
                                                            }))
                                                          : ((d =
                                                                C ??
                                                                K.intl.formatToPlainString(K.t["cNSL/j"], {
                                                                    price: (0, ti.$g)(e.amount, e.currency),
                                                                })),
                                                            (0, r.jsxs)(e9.e, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(e8.$, {
                                                                        variant: p ? "primary" : "secondary",
                                                                        onClick: Q,
                                                                        text: d,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    W &&
                                                                        (0, r.jsx)(td.A, {
                                                                            primary: p,
                                                                            product: i,
                                                                            onSuccess: g,
                                                                            giftRecipient: o,
                                                                            giftingOrigin: u,
                                                                            onTrackClick: x,
                                                                        }),
                                                                ],
                                                            }));
                                              return (0, r.jsx)(s.Fragment, { children: h }, e.currency);
                                          }),
                                      })
                            : W
                              ? (0, r.jsx)(td.A, {
                                    primary: !0,
                                    product: i,
                                    onSuccess: g,
                                    fullWidth: !0,
                                    giftRecipient: o,
                                    giftingOrigin: u,
                                    onTrackClick: x,
                                })
                              : null
                        : ee(K.intl.string(K.t.sEAnVH)),
            }),
        ],
    });
}
var tF = n(607487);
function tw(e) {
    let {
            productRecord: t,
            selectedProduct: n,
            previewingProduct: i,
            user: s,
            selectedBundleSlide: l,
            pendingProfile: a,
        } = e,
        c = eW(t);
    return (0, r.jsxs)("div", {
        className: G()(tF.wd, { [tF.E7]: null != c.LeftPreview }),
        children: [
            (0, r.jsx)("div", {
                className: tF.dL,
                children: (0, r.jsx)(e2, { productRecord: t, selectedProduct: n, selectedBundleSlide: l }),
            }),
            null != c.LeftPreview &&
                (0, r.jsx)("div", {
                    className: tF._E,
                    children: (0, r.jsx)(c.LeftPreview, {
                        user: s,
                        selectedProduct: n,
                        previewingProduct: i,
                        productRecord: t,
                        selectedBundleSlide: l,
                        pendingProfile: a,
                    }),
                }),
            (0, r.jsx)("div", { className: tF.F_, children: (0, r.jsx)(c.Info, { ...e }) }),
            (0, r.jsx)(tG, { ...e }),
        ],
    });
}
var tH = n(529756),
    tV = n(408278),
    tz = n(972213),
    tK = n(156248),
    tW = n(139146),
    tX = n(60465),
    tY = n(976860),
    tZ = n(975732),
    t$ = n(50920),
    tq = n(23161),
    tJ = n(668953),
    tQ = n(881636),
    t0 = n(962437);
function t1(e) {
    let { goPrev: t, goNext: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: t0.Y,
                children: (0, r.jsx)(tV.K, {
                    "aria-label": K.intl.string(K.t["3NdvMK"]),
                    onClick: t,
                    icon: tJ.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, r.jsx)("div", {
                className: t0.K,
                children: (0, r.jsx)(tV.K, {
                    "aria-label": K.intl.string(K.t.RYIeOX),
                    onClick: n,
                    icon: tQ.u,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
}
var t2 = n(343601);
function t7(e) {
    let {
            user: t,
            pendingProfile: n,
            productRecord: i,
            previewingProduct: l,
            selectedProduct: a,
            selectedVariantIndex: c,
            selectedBundleSlide: o,
            setSelectedBundleSlide: d,
            isClosing: u,
            isOrbCheckoutModalOpen: m,
            pdpBackground: p,
            category: g,
            tab: x,
            onClose: h,
            onTrackClick: E,
        } = e,
        v = eW(i),
        N = (0, T.aw)(a),
        f = N ? a.items.length : 0,
        A = (function () {
            let e = (0, t$.a)("CollectiblesPdpNavigateToCollection"),
                { sessionId: t } = (0, _.uM)() ?? {},
                n = (0, tq.v)((e) => e.reset);
            return s.useCallback(
                (i, r) => {
                    if (
                        (I.default.track(y.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: t,
                            sku_id: i.skuId,
                            cta_name: r,
                        }),
                        (0, tZ.closeUserProfileModal)(),
                        (0, tX.p)(),
                        e && !0 !== i.isOrbsExclusive)
                    )
                        return void (0, tY.pX)(y.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(i.skuId));
                    n();
                    let s = !0 === i.isOrbsExclusive ? z.G2.ORBS : z.G2.CATALOG;
                    (0, tY.pX)(`${y.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)}&${z.P1}=${i.skuId}`);
                },
                [e, t, n],
            );
        })(),
        R = s.useCallback(() => {
            E(z.sH.GO_TO_COLLECTION), h(), A(g, "go_to_collection_button");
        }, [g, h, E, A]),
        j = s.useCallback(() => {
            f <= 1 || d((e) => (e - 1 + f) % f);
        }, [f, d]),
        C = s.useCallback(() => {
            f <= 1 || d((e) => (e + 1) % f);
        }, [f, d]),
        O = s.useCallback(
            (e) => {
                if (f <= 1) return;
                let t = e.target;
                "INPUT" === t.tagName ||
                    "TEXTAREA" === t.tagName ||
                    t.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), j())
                        : "ArrowRight" === e.key && (e.preventDefault(), C()));
            },
            [f, j, C],
        ),
        k = s.useCallback(() => {
            E(z.sH.CLOSE_DETAIL), h();
        }, [E, h]),
        L = s.useRef(null),
        P = s.useRef(!0);
    return (
        s.useLayoutEffect(() => {
            if (P.current) {
                P.current = !1;
                return;
            }
            let e = L.current;
            null != e && ((e.style.animation = "none"), e.offsetHeight, (e.style.animation = ""));
        }, [o]),
        (0, r.jsxs)("div", {
            className: G()(t2.i1, (0, z.EZ)(a.skuId) ? t2.bF : a.type === S.R.AVATAR_DECORATION ? t2.Jq : t2.eF),
            style: null != p ? { backgroundImage: `url(${p})` } : void 0,
            onKeyDown: O,
            children: [
                (0, r.jsx)("div", {
                    className: t2.GV,
                    children: (0, r.jsx)(eq.m, {
                        text: K.intl.string(K.t["Hr/q/6"]),
                        children: (0, r.jsx)(e8.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: tH.c,
                            text: g.name,
                            onClick: R,
                        }),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: t2.KR,
                    ref: L,
                    children: (0, r.jsx)(v.RightPreview, {
                        user: t,
                        pendingProfile: n,
                        productRecord: i,
                        selectedProduct: a,
                        previewingProduct: l,
                        selectedBundleSlide: o,
                        isClosing: u,
                        isOrbCheckoutModalOpen: m,
                    }),
                }),
                N && f > 1 && (0, r.jsx)(t1, { goPrev: j, goNext: C }),
                (0, r.jsxs)("div", {
                    className: t2.VG,
                    children: [
                        (0, r.jsx)(tW.R, {
                            product: i,
                            selectedVariantIndex: c,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: E,
                        }),
                        (0, r.jsx)(tK.H, {
                            skuId: a.skuId,
                            product: a,
                            productName: (0, b.VG)(a),
                            tab: x,
                            onTrackClick: E,
                        }),
                        (0, r.jsx)(tV.K, {
                            "aria-label": K.intl.string(K.t.cpT0Cq),
                            onClick: k,
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
var t8 = n(118342);
let t6 = (0, u.FT)(u._3.SIZE_152),
    t9 = function (e) {
        let {
                transitionState: t,
                onClose: n,
                product: i,
                category: l,
                returnRef: u,
                analyticsSource: S,
                analyticsLocations: U,
                shouldCheckoutWithOrbs: G,
                tab: F,
                giftRecipient: w,
                giftingOrigin: H,
            } = e,
            V = (0, d.bG)([R.default], () => R.default.getCurrentUser()),
            z = (0, d.cf)([N.A], () => N.A.getPendingChanges()),
            K = (0, M.f)(i),
            { previewingVariantIndex: W } = K,
            X = (0, C.Q)(i),
            Y = D(i, W),
            Z = (0, L.rb)(i, X);
        a()(null != Z, "Selected product should not be null");
        let { analyticsLocations: $ } = (0, x.Ay)([...U, g.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, P.Yr)(Z.skuId);
        let q = (0, B.U1)(l),
            [J, Q] = s.useState(0);
        s.useEffect(() => {
            null != V && (0, f.A)(V.id, V.getAvatarURL(void 0, 80));
        }, [V]);
        let ee = s.useMemo(() => (0, T.V6)(i.type, i.skuId), [i.type, i.skuId]);
        s.useEffect(() => {
            I.default.track(y.HAw.OPEN_MODAL, {
                type: y.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: S,
                location_stack: $,
                sku_id: Z.skuId,
                product_type: ee,
            }),
                (0, j.RD)(Z.skuId);
        }, [S, $, Z.skuId, ee]);
        let { cardId: et, sessionId: en, tilePosition: ei } = (0, _.uM)() ?? {},
            er = s.useMemo(() => (0, L.v8)(i), [i]),
            es = (function (e) {
                let { skuId: t, productSkuIds: n, analyticsLocations: i } = e,
                    { cardId: r, sessionId: l } = (0, _.uM)() ?? {},
                    a = (0, k.o)(),
                    c = (0, T.xM)(a);
                return s.useCallback(
                    (e, s) => {
                        I.default.track(y.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                            sku_id: s ?? t,
                            cta: e,
                            shop_session_id: l,
                            card_id: r,
                            product_sku_ids: n,
                            location_stack: i,
                            discount_source: (0, T.b_)(c),
                        });
                    },
                    [t, i, r, n, l, c],
                );
            })({ skuId: Z.skuId, productSkuIds: er, analyticsLocations: $ });
        (0, h.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: Z.skuId,
                card_id: et,
                shop_session_id: en,
                position_in_section: ei,
                product_sku_ids: er,
                location_stack: $,
            },
        });
        let el = (0, A.o6)(),
            ea = t === m.ip.EXITING,
            ec = (0, O.c)("product_details_modal");
        if (null == V || (i.skuId === o.j.PREMIUM_TIER_2_1_DAY && !ec)) return null;
        let eo = {
                pendingChanges: z,
                pendingAvatarSrc:
                    void 0 !== z.pendingAvatar
                        ? (0, E.sv)((0, v.V7)({ userId: V.id, image: z.pendingAvatar, size: t6 }), null, V, {
                              size: t6,
                          })
                        : void 0,
            },
            ed = (0, b.VG)(i),
            eu = {
                user: V,
                pendingProfile: eo,
                productRecord: i,
                productName: ed,
                selectedProduct: Z,
                previewingProduct: Y ?? null,
                category: l,
                selectedVariantIndex: X,
                previewingVariantIndexProps: K,
                selectedBundleSlide: J,
                setSelectedBundleSlide: Q,
                tab: F,
                shouldCheckoutWithOrbs: G,
                giftRecipient: w?.id !== V.id ? w : void 0,
                giftingOrigin: w?.id !== V.id ? H : void 0,
                analyticsLocations: $,
                returnRef: u,
                onClose: n,
                onTrackClick: es,
            };
        return (0, r.jsx)(x.f5, {
            value: $,
            children: (0, r.jsx)(p.d, {
                returnRef: u,
                transitionState: t,
                onClose: n,
                size: "xl",
                paddingSize: "sm",
                "aria-label": ed,
                children: (0, r.jsx)("div", {
                    className: t8.C,
                    children: (0, r.jsxs)("div", {
                        className: t8.j,
                        children: [
                            (0, r.jsx)(tw, { ...eu }),
                            (0, r.jsx)(t7, { ...eu, isClosing: ea, isOrbCheckoutModalOpen: el, pdpBackground: q }),
                        ],
                    }),
                }),
            }),
        });
    };
