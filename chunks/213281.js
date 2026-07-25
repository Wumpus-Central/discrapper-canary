n.d(t, { default: () => no });
var i,
    r = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    o = n(562708),
    c = n(334279),
    d = n(702841),
    u = n(778712),
    m = n(231723),
    p = n(224640),
    x = n(793574),
    E = n(688810),
    g = n(139286),
    h = n(252732),
    v = n(101058),
    N = n(836602),
    f = n(903209),
    A = n(652165),
    R = n(287809),
    I = n(174459),
    _ = n(34332),
    C = n(440938),
    j = n(298072),
    k = n(993408),
    T = n(503089),
    O = n(331884),
    L = n(652215),
    y = n(623373),
    b = n(536572),
    P = n(177366),
    S = n(575593);
function D(e, t) {
    return e.type === S.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e;
}
var B = n(212407),
    U = n(935094),
    M = n(503698),
    G = n.n(M),
    H = n(939249),
    w = n(834730),
    F = n(297264),
    V = n(14702),
    z = n(758836),
    K = n(375708),
    W = n(777940);
function $(e) {
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
let X = { [S.R.AVATAR_DECORATION]: !0, [S.R.PROFILE_FRAME]: !0 };
function Y(e) {
    let { item: t, index: n, isSelected: i, setSelected: l, label: a, trackedSkuId: o, onTrackClick: c } = e,
        d = s.useMemo(() => ({ skuId: t.skuId, type: t.type, items: [t] }), [t]),
        u = s.useCallback(() => {
            c(z.sH.BUNDLE_VIEW_PRODUCT, o), l(n);
        }, [c, o, l, n]),
        m = !0 === X[t.type];
    return (0, r.jsx)(H.D, {
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
var q = n(442759),
    Z = n(344346),
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
        pendingDisplayNameStyles: o,
        pendingGlobalName: c,
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
                children: (0, r.jsx)(Z.A, {
                    className: et.M4,
                    nameplate: t,
                    user: n,
                    nameplatePreviewSize: "large",
                    pendingAvatarDecoration: i ?? a,
                    pendingDisplayNameStyles: o,
                    pendingGlobalName: c,
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
        { firstAvatarDecoration: o } = (0, q.f5)(a),
        { pendingChanges: c, pendingAvatarSrc: d } = l,
        u = a.items[s] ?? a.items[0];
    return null == u
        ? null
        : (0, r.jsx)(en, {
              item: u,
              user: t,
              bundleFirstAvatarDecoration: o,
              isBundle: (0, k.aw)(a),
              pendingAvatarSrc: d,
              pendingAvatarDecoration: c.pendingAvatarDecoration,
              pendingDisplayNameStyles: c.pendingDisplayNameStyles,
              pendingGlobalName: c.pendingGlobalName,
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
var eo = n(740076),
    ec = n(661847),
    ed = n(186077);
function eu(e) {
    let { skuId: t } = e;
    return (0, z.EZ)(t)
        ? (0, r.jsx)(w.E, {
              variant: "text-sm/normal",
              className: ed.CU,
              children: K.intl.format(K.t.Q1scdE, {
                  helpdeskArticle: el.A.getArticleURL(L.MVz.FRACTIONAL_PREMIUM_ABOUT),
              }),
          })
        : null;
}
function em(e) {
    let { productRecord: t, productName: n, selectedProduct: i, previewingVariantIndexProps: l } = e,
        { previewingVariantIndex: a, handleEntering: o, handleLeaving: c } = l,
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
        { disabledReason: m } = (0, eo.I)(i.skuId),
        p = (0, j.Q)(t),
        x = (0, y.B1)(t),
        E = x ? t.variants[a ?? p] : null,
        g = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            null != g.current && ((g.current.tabIndex = -1), g.current.focus());
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: ed.sn,
                    children: [
                        (0, r.jsx)(F.D, { ref: g, variant: "heading-xl/bold", className: ed.R_, children: n }),
                        (0, r.jsx)(w.E, { variant: "text-sm/normal", children: u }),
                        (0, r.jsx)(eu, { skuId: d.skuId }),
                        null !== m && (0, r.jsx)(w.E, { variant: "text-xs/normal", className: ed.H$, children: m }),
                    ],
                }),
                x &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            null != E &&
                                (0, r.jsx)(w.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: ed.a9,
                                    lineClamp: 1,
                                    children: K.intl.format(K.t.EcaRWt, {
                                        value: (0, r.jsx)("span", { className: ed.I8, children: E.variantLabel }),
                                    }),
                                }),
                            (0, r.jsx)("div", {
                                className: ed._x,
                                children: (0, r.jsx)(ec.A, {
                                    skuId: t.skuId,
                                    onVariantEnter: o,
                                    onVariantExit: c,
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
    ex = n(97808),
    eE = n(346055),
    eg = n(993077),
    eh = n(245604),
    ev = n(460905),
    eN = n(262295),
    ef = n(685073),
    eA = n(320095),
    eR = n(963852),
    eI = n(763754),
    e_ = n(20851),
    eC = n(986687),
    ej = n(428262),
    ek = n(780898),
    eT = n(907609);
function eO(e) {
    let { user: t, innerClassName: n } = e;
    return (0, r.jsx)("div", {
        className: eT.mV,
        children: (0, r.jsx)(eN.A, {
            avatar: (0, r.jsx)(ex.eu, {
                src: t.avatarSrc,
                size: u._3.SIZE_32,
                "aria-label": t.name,
                status: L.clD.ONLINE,
            }),
            name: t.name,
            innerClassName: G()(eT.$L, n),
        }),
    });
}
function eL(e) {
    let { user: t, nameplate: n, avatarDecoration: i, pendingDisplayNameStyles: s, pendingGlobalName: l } = e,
        a = (0, ek.Ov)();
    return (0, r.jsx)("div", {
        className: eT.nJ,
        role: "img",
        "aria-label": K.intl.formatToPlainString(K.t["95pCSf"], { a11y_text: n.label }),
        children: (0, r.jsxs)(eE.M, {
            children: [
                (0, r.jsx)(eO, { user: a.mallow, innerClassName: eT.ab }),
                (0, r.jsxs)(w.E, {
                    variant: "text-sm/semibold",
                    className: eT.OS,
                    children: [K.intl.string(K.t["yzW/fZ"]), " - 3"],
                }),
                (0, r.jsx)(eO, { user: a.phibi, innerClassName: eT.e9 }),
                (0, r.jsx)("div", {
                    className: eT.mV,
                    children: (0, r.jsx)(Z.A, {
                        className: eT.M4,
                        innerClassName: eT.e9,
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
                (0, r.jsx)(eO, { user: a.locke, innerClassName: eT.e9 }),
                (0, r.jsxs)(w.E, {
                    variant: "text-sm/semibold",
                    className: eT.OS,
                    children: [K.intl.string(K.t["NG43/6"]), " - 12"],
                }),
                (0, r.jsx)(eO, { user: a.boom, innerClassName: eT.bD }),
                (0, r.jsx)(eO, { user: a.cherry, innerClassName: eT.bD }),
            ],
        }),
    });
}
function ey(e) {
    let {
            user: t,
            avatarDecoration: n,
            pendingAvatarSrc: i,
            pendingPrimaryGuildId: s,
            pendingDisplayNameStyles: l,
            pendingGlobalName: a,
        } = e,
        o = (function (e) {
            let { author: t } = e;
            return (0, eA.rh)({
                ...(0, eR.Ay)({ author: t, channelId: "1337", content: K.intl.string(K.t.d5YwK5) }),
                state: L.cmJ.SENT,
                id: "0",
            });
        })({ author: t }),
        c = (0, ef.gS)(s),
        d = (0, eI.p_)(o),
        u = {
            ...d,
            nick:
                void 0 !== a
                    ? (0, h.eh)({ pendingNickname: void 0, pendingGlobalName: a, user: t, guildMember: null })
                    : d.nick,
            primaryGuild: void 0 !== s ? c : d.primaryGuild,
            displayNameStyles: void 0 !== l ? l : d.displayNameStyles,
        };
    return (0, r.jsx)("div", {
        role: "img",
        "aria-label": K.intl.string(K.t["TN+ZvB"]),
        children: (0, r.jsx)(eE.M, {
            children: (0, r.jsxs)(eg.Z, {
                className: eT.f7,
                outline: !0,
                "aria-hidden": !0,
                children: [
                    (0, r.jsx)(
                        e_.A,
                        {
                            className: eT.G5,
                            author: u,
                            message: o,
                            avatarDecorationOverride: n ?? null,
                            avatarOverride: i,
                        },
                        o.id,
                    ),
                    (0, r.jsxs)("div", {
                        className: eT.lG,
                        children: [
                            (0, r.jsx)(eh.U, { size: "md", color: "currentColor", className: eT.hq }),
                            (0, r.jsx)(ev.n, { size: "md", color: "currentColor", className: eT.hq }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function eb(e) {
    let { product: t, user: n, pendingProfile: i, activeBundleSlide: s } = e,
        l = ej.Ay.canUsePremiumProfileCustomization(n),
        { pendingAvatar: a, ...o } = i.pendingChanges,
        c = i.pendingAvatarSrc,
        d = t.type === S.R.BUNDLE ? t.items[s ?? 0] : void 0,
        u = d?.type ?? t.type,
        m = u === S.R.AVATAR_DECORATION,
        p = u === S.R.PROFILE_EFFECT,
        { firstAvatarDecoration: x, firstProfileEffect: E, firstNameplate: g, firstProfileFrame: h } = (0, q.f5)(t),
        v = d?.type === S.R.AVATAR_DECORATION ? d : x,
        N = d?.type === S.R.PROFILE_EFFECT ? d : E,
        f = d?.type === S.R.PROFILE_FRAME ? d : h,
        A = d?.type === S.R.NAMEPLATE ? d : g;
    if (u === S.R.NAMEPLATE && null != A)
        return (0, r.jsx)("div", {
            className: eT.Zj,
            children: (0, r.jsx)(eL, {
                user: n,
                nameplate: A,
                avatarDecoration: v ?? o.pendingAvatarDecoration,
                pendingDisplayNameStyles: o.pendingDisplayNameStyles,
                pendingGlobalName: o.pendingGlobalName,
            }),
        });
    return (0, r.jsx)("div", {
        className: m ? eT.RA : eT.hZ,
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eC.A, {
                    ...o,
                    pendingAvatar: c,
                    user: n,
                    canUsePremiumCustomization: l,
                    pendingAvatarDecoration: v ?? o.pendingAvatarDecoration,
                    pendingProfileEffect: N ?? o.pendingProfileEffect,
                    profileEffectRestartKey: s,
                    pendingProfileFrame: f ?? o.pendingProfileFrame,
                    disabledInputs: !0,
                    hideMessageInput: !p,
                    hideCustomStatus: !0,
                    hideBioSection: m,
                    hideExampleButton: !0,
                    interactive: !1,
                    className: m ? eT.oB : void 0,
                }),
                m &&
                    (0, r.jsx)(ey, {
                        user: n,
                        avatarDecoration: v,
                        pendingAvatarSrc: c,
                        pendingPrimaryGuildId: o.pendingPrimaryGuildId,
                        pendingDisplayNameStyles: o.pendingDisplayNameStyles,
                        pendingGlobalName: o.pendingGlobalName,
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
    eU = n(792249);
function eM() {
    let e = [K.t.E1NP2x, K.t.kpMomJ, K.t.xT1Vfn, K.t.myyAEr, K.t.zTk8Ul];
    return (0, r.jsxs)("div", {
        className: eU.kL,
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: eU.ym,
            }),
            (0, r.jsx)(eB.A, { color: "white" }),
            (0, r.jsx)("div", {
                className: eU.PX,
                children: e.map((e, t) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: eU.UJ,
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
    eH = n(132198),
    ew = n(176890);
function eF(e) {
    let { user: t } = e,
        n = ej.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: i, ...s } = (0, eG.cf)([N.A], () => N.A.getPendingChanges()),
        l = (0, v.V7)({ userId: t.id, image: i });
    return (0, r.jsx)("div", {
        className: ew.k,
        children: (0, r.jsx)(eC.A, {
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
var eV = n(933595);
function ez(e) {
    let { user: t, productRecord: n, isClosing: i, isOrbCheckoutModalOpen: s } = e;
    return n.skuId === z.Dp.ORB_PROFILE_BADGE
        ? i || s
            ? null
            : (0, r.jsx)(eF, { user: t })
        : (0, z.EZ)(n.skuId)
          ? (0, r.jsx)(eM, {})
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
                o = t.items,
                c = t.bundledProducts,
                d = c?.[i]?.name,
                u = o[i]?.type,
                m = null != u ? (0, k.Dm)(u) : null,
                p = K.intl.string(K.t.cTbdgu),
                x = s.useRef(null),
                E = s.useCallback(
                    (e) => {
                        o.length <= 1 ||
                            ("ArrowLeft" === e.key || "ArrowUp" === e.key
                                ? (e.preventDefault(), l((e) => (e - 1 + o.length) % o.length))
                                : "ArrowRight" === e.key || "ArrowDown" === e.key
                                  ? (e.preventDefault(), l((e) => (e + 1) % o.length))
                                  : "Home" === e.key
                                    ? (e.preventDefault(), l(0))
                                    : "End" === e.key && (e.preventDefault(), l(o.length - 1)));
                    },
                    [o.length, l],
                );
            s.useEffect(() => {
                let e = x.current;
                if (null == e || !e.contains(document.activeElement)) return;
                let t = e.querySelectorAll('[role="radio"]');
                t[i]?.focus();
            }, [i]);
            let g = s.useRef(null);
            return (
                s.useLayoutEffect(() => {
                    null != g.current && ((g.current.tabIndex = -1), g.current.focus());
                }, []),
                (0, r.jsxs)("div", {
                    className: W.Qf,
                    children: [
                        (0, r.jsx)(F.D, { ref: g, variant: "heading-xl/bold", className: W.R_, title: n, children: n }),
                        (0, r.jsx)(w.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: K.intl.format(K.t["1tUCAO"], { count: o.length }),
                        }),
                        (0, r.jsxs)("div", {
                            className: W.hZ,
                            children: [
                                (0, r.jsx)("div", {
                                    className: W.vg,
                                    children: (0, r.jsx)("div", {
                                        ref: x,
                                        className: W.hK,
                                        role: "radiogroup",
                                        "aria-label": p,
                                        tabIndex: -1,
                                        onKeyDown: E,
                                        children: o.map((e, t) => {
                                            let n = c?.[t]?.name ?? e.skuId,
                                                s = c?.[t]?.skuId ?? e.skuId;
                                            return (0, r.jsx)(
                                                Y,
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
                                null != d && (0, r.jsx)($, { name: d, typeLabel: m }),
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
            : (0, k.aw)(t)
              ? "BUNDLE"
              : "COLLECTIBLE")
    ];
}
var e$ = n(13875),
    eX = n(629042),
    eY = n(110629),
    eq = n(268959),
    eZ = n(866665),
    eJ = n(508770),
    eQ = n(278416);
let e0 = (e) => {
    let { promotion: t } = e;
    return (0, r.jsx)(eZ.m, {
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
        l = (0, e$.Do)("CollectiblesShopProductDetailsModal") && i.type === S.R.PROFILE_FRAME,
        a = (0, eX.SV)(i),
        o = n.type === S.R.BUNDLE ? (n.items[s] ?? n.items[0]) : void 0,
        c =
            null != o &&
            !n.hideBadge &&
            null == n.badgeOverride &&
            (0, y.JQ)({ skuId: o.skuId, type: o.type, items: [o] });
    return (
        (t = l
            ? (0, r.jsx)(eY.A, { location: "CollectiblesShopProductDetailsModal" })
            : c
              ? (0, r.jsx)(eq.s, {})
              : (0, r.jsx)(eq.A, { skuId: n.skuId })),
        (0, r.jsxs)("div", { className: e1.N, children: [t, null != a && (0, r.jsx)(e0, { promotion: a })] })
    );
}
var e7 = n(462887),
    e6 = n(821609),
    e3 = n(318254),
    e4 = n(825484),
    e9 = n(331322),
    e5 = n(736653),
    e8 = n(44120),
    te = n(465794),
    tt = n(757036),
    tn = n(761705),
    ti = n(580630),
    tr = n(4227),
    ts = n(466459),
    tl = n(395068),
    ta = n(885574),
    to = n(847927);
function tc(e) {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, r.jsx)(eZ.m, {
              position: "top",
              align: "left",
              text: K.intl.string(K.t.y1VWkZ),
              children: (0, r.jsxs)("div", {
                  className: G()(to.GX, t),
                  children: [
                      (0, r.jsx)("span", {
                          className: to.P0,
                          children: (0, r.jsx)(ta.m, { size: "md", color: "currentColor", className: to.G }),
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
let tx = function (e) {
    let { product: t, onSuccess: n, onTrackClick: i } = e,
        { handleUseNow: s, isApplying: l, canUseNow: a } = (0, tp.p)({ product: t, onSuccess: n }),
        o = (0, tm.A)();
    return a
        ? (0, r.jsx)(e6.$, {
              variant: "primary",
              onClick: () => {
                  i?.(z.sH.USE_NOW), s();
              },
              loading: l,
              text: K.intl.string(K.t.MAS7uK),
              fullWidth: !0,
          })
        : (0, r.jsx)(e6.$, {
              variant: "primary",
              onClick: () => {
                  i?.(z.sH.EDIT_PROFILE), o(), n?.();
              },
              text: K.intl.string(K.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var tE = n(770948);
let tg = function (e) {
    let { analyticsLocations: t, children: n } = e;
    return (0, r.jsx)(E.f5, {
        value: [...t, x.A.PROFILE_FRAMES_EA_MARKETING],
        children: (0, r.jsxs)("div", {
            className: tE.k,
            children: [
                (0, r.jsx)(w.E, {
                    variant: "text-xs/semibold",
                    color: "text-strong",
                    children: K.intl.format(K.t["3cglst"], {
                        articleURL: el.A.getArticleURL(L.MVz.SHOP_FRAMES_EARLY_ACCESS),
                    }),
                }),
                n,
            ],
        }),
    });
};
var th = n(561769),
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
            discountIconDisplayMode: o,
            discountIconSize: c = "md",
        } = e,
        d = (0, k.WD)(t, { hasShopDiscount: n, discount: s });
    if (null == d) return null;
    let { defaultPrice: u, showDefaultPriceOnly: m } = d;
    if (m)
        return (0, r.jsx)("div", {
            className: G()(tR.kG, l),
            children: (0, r.jsx)(tA.x, { priceAmount: u.amount, priceCurrency: u.currency }),
        });
    let { showDiscountPrice: p, originalPrice: x, finalPrice: E } = d;
    return (0, r.jsxs)("div", {
        className: G()(tR.kG, l),
        children: [
            a ? null : (0, r.jsx)(tf, { price: x, className: tR.q9 }),
            (0, r.jsx)(tA.x, {
                priceAmount: E.amount,
                priceCurrency: E.currency,
                discount: s,
                className: tR.q9,
                discountIconConfig: p && null != o ? { displayMode: o, source: i ?? k.D0.NITRO, size: c } : void 0,
            }),
        ],
    });
}
var t_ = n(403581),
    tC = n(532794),
    tj = n(202541),
    tk = n(868534);
function tT(e) {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: i } = (0, E.Ay)(),
        l = s.useRef(null);
    return (0, r.jsx)(H.D, {
        className: tk.F,
        innerRef: l,
        onClick: () => {
            n?.(z.sH.SUBSCRIBE_NOW), (0, tC.A)({ subscriptionTier: tj.pe.TIER_2, analyticsLocations: i, returnRef: l });
        },
        children: t,
    });
}
var tO = n(25537);
function tL(e) {
    let { product: t, onTrackClick: n } = e,
        i = (0, k.yt)(t, L.lid.PREMIUM_TIER_2);
    if (null == i) return null;
    let s = (0, ti.RS)(i.amount, i.currency);
    return (0, r.jsxs)("div", {
        className: tO.k,
        children: [
            (0, r.jsx)(eZ.m, {
                text: K.intl.string(K.t.MPFyJ5),
                "aria-label": K.intl.string(K.t.X3Ekj8),
                children: (0, r.jsx)(t_.t, { size: "md", color: "currentColor", className: tO.o }),
            }),
            (0, r.jsx)(w.E, {
                variant: "text-xs/medium",
                children: K.intl.format(K.t.Sv8iic, {
                    price: s,
                    subscribeNowHook: (e) => (0, r.jsx)(tT, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
var ty = n(818348),
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
        onTrackClick: o,
        isProductDisabled: c,
    } = e;
    return 0 === t.length
        ? null
        : t[0].currency === ty.Yr.DISCORD_ORB
          ? (0, r.jsx)(tP, { orbPrice: t[0], isProductDisabled: c, hasSufficientOrbs: a, discount: s })
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
                            n ? null : (0, r.jsx)(tL, { product: l, onTrackClick: o }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === ty.Yr.DISCORD_ORB &&
                        (0, r.jsx)(tA.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: c || !a ? tb.r9 : void 0,
                        }),
                ],
            });
}
var tD = n(347722),
    tB = n(57020),
    tU = n(61750),
    tM = n(727205);
function tG(e) {
    let {
            user: t,
            productRecord: n,
            selectedProduct: i,
            category: l,
            shouldCheckoutWithOrbs: a,
            tab: o,
            giftRecipient: c,
            giftingOrigin: u,
            analyticsLocations: m,
            returnRef: p,
            onClose: x,
            onTrackClick: E,
        } = e,
        { cardId: g, sessionId: h, tilePosition: v } = (0, C.uM)() ?? {},
        N = (0, tt.L)(tj.PremiumTypes.TIER_2),
        f = (0, k.xM)(t),
        R = (0, e$.Do)("CollectiblesShopProductDetailsModal") && i.type === S.R.PROFILE_FRAME,
        I = ej.Ay.canUseShopDiscounts(t) || R,
        j = (0, eX.VZ)(i),
        T = (0, eX.Nc)(i),
        O = (0, ts.h)(n),
        { isPurchased: y, isPartiallyOwnedBundle: b } = (0, ts.h)(i),
        { isDisabled: P } = (0, eo.I)(i.skuId),
        D = (0, k.Zu)({ product: i, isPartiallyOwnedBundle: b, isPurchased: y }),
        B = (0, d.bG)([tr.A], () => tr.A.isClaiming === i?.skuId),
        U = (0, e5.Ay)(),
        M = (0, e7.M)(U),
        H = (0, k.G0)(i),
        F = (0, k.yt)(i, L.lid.DEFAULT),
        V = F?.amount === 0,
        W = (0, tD.X)(i),
        $ = T ? th.Hi.FIAT : o === z.G2.ORBS && a ? th.Hi.ORBS : void 0,
        { checkoutEligiblePrices: X, hasSufficientOrbs: Y } = (0, tB.F)({
            product: i,
            hasShopDiscount: I,
            prioritizedCurrency: $,
        }),
        q = s.useMemo(() => (0, k.fT)(i, I, X[0]?.currency), [i, I, X]),
        Z = (0, tl.A)({ location: "CollectiblesShopProductDetailsModal", product: i }),
        J = s.useMemo(() => X.some((e) => e.currency === ty.Yr.DISCORD_ORB), [X]);
    (0, tn.W)({ disableFetch: !J });
    let Q = s.useCallback(() => {
        E(z.sH.BUY_WITH_FIAT),
            (0, e8.A)({
                skuId: i.skuId,
                analyticsLocations: m,
                discoverySessionId: h,
                onClose: (e) => (e ? x() : (0, ty.tE)()),
            });
    }, [m, x, i.skuId, E, h]);
    function ee(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = (0, r.jsx)(te.A, {
                subscriptionTier: tj.pe.TIER_2,
                fullWidth: !0,
                buttonTextOverride: e,
                onClick: () => {
                    E(z.sH.UNLOCK_WITH_NITRO), (0, tu.M)();
                },
                onSubscribeModalClose: () => {
                    (0, tu.t)({
                        product: n,
                        category: l,
                        shouldCheckoutWithOrbs: a,
                        returnRef: p,
                        analyticsLocations: m,
                        tab: o,
                        giftRecipient: c,
                        giftingOrigin: u,
                        cardId: g,
                        sessionId: h,
                        tilePosition: v,
                    });
                },
            });
        return t ? (0, r.jsx)(tg, { analyticsLocations: m, children: i }) : i;
    }
    return (0, r.jsxs)("div", {
        className: tM.iw,
        children: [
            O.isPurchased || O.isPartiallyOwnedBundle
                ? (0, r.jsx)(tc, { className: tM.On, isPartiallyPurchased: b })
                : H
                  ? (0, r.jsxs)("div", {
                        className: tM.pq,
                        children: [
                            (0, r.jsx)(w.E, { variant: "text-md/semibold", children: K.intl.string(K.t.rt69oo) }),
                            !y &&
                                (0, r.jsx)(w.E, {
                                    className: G()(tM.ed, !M && tM.un),
                                    variant: "text-xxs/normal",
                                    children: K.intl.string(K.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, r.jsx)(tS, {
                        prices: X,
                        product: i,
                        hasShopDiscount: I,
                        discountSource: f,
                        discount: q,
                        hasSufficientOrbs: Y,
                        isProductDisabled: P,
                        onTrackClick: E,
                    }),
            (0, r.jsx)(e9.B, {
                direction: "vertical",
                gap: 8,
                children:
                    !H || N || V
                        ? D
                            ? y
                                ? W
                                    ? (0, r.jsxs)(e4.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, r.jsx)(tx, { product: i, onSuccess: x, onTrackClick: E }),
                                              (0, r.jsx)(td.A, {
                                                  primary: !0,
                                                  product: i,
                                                  onSuccess: x,
                                                  giftRecipient: c,
                                                  giftingOrigin: u,
                                                  onTrackClick: E,
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(tx, { product: i, onSuccess: x, onTrackClick: E })
                                : Z
                                  ? ee(K.intl.string(K.t["9wfL34"]), !0)
                                  : H
                                    ? (0, r.jsx)(e6.$, {
                                          loading: B,
                                          loadingStartedLabel: K.intl.string(K.t["TYw+9s"]),
                                          loadingFinishedLabel: K.intl.string(K.t.Pg1UP5),
                                          onClick: async () => {
                                              E(z.sH.ADD_TO_COLLECTION),
                                                  await (0, _.iJ)(i.skuId),
                                                  x(),
                                                  (0, tU.A)({
                                                      product: i,
                                                      analyticsLocations: m,
                                                      purchaseType: z.gs.PREMIUM_PURCHASE,
                                                  });
                                          },
                                          text: K.intl.string(K.t.zp6caO),
                                          fullWidth: !0,
                                      })
                                    : (0, r.jsx)(r.Fragment, {
                                          children: X.map((e, t) => {
                                              let n,
                                                  l,
                                                  a,
                                                  o,
                                                  d,
                                                  p = 0 === t,
                                                  g =
                                                      e.currency === ty.Yr.DISCORD_ORB
                                                          ? ((n = P
                                                                ? K.intl.string(K.t.cTdr3x)
                                                                : K.intl.string(K.t.zqh7ZM)),
                                                            (l = !Y || P),
                                                            (a = K.intl.formatToPlainString(K.t.yi41qQ, {
                                                                orbPrice: e.amount,
                                                            })),
                                                            (o = l ? `${a}, ${n}` : a),
                                                            (0, r.jsx)(eZ.m, {
                                                                position: "top",
                                                                text: n,
                                                                shouldShow: l,
                                                                "aria-label": !1,
                                                                children: (0, r.jsx)(e6.$, {
                                                                    variant: p ? "primary" : "secondary",
                                                                    onClick: function () {
                                                                        E(z.sH.BUY_WITH_ORBS),
                                                                            (0, A.B4)({
                                                                                skuId: i.skuId,
                                                                                onComplete: (e) => {
                                                                                    (0, _.gB)(),
                                                                                        x(),
                                                                                        (0, tU.A)({
                                                                                            product: i,
                                                                                            analyticsLocations: m,
                                                                                            itemConsumed:
                                                                                                e?.entitlements?.[0]
                                                                                                    ?.consumed,
                                                                                            purchaseType: z.gs.ORB,
                                                                                        });
                                                                                },
                                                                                analyticsLocations: m,
                                                                                discoverySessionId: h,
                                                                            });
                                                                    },
                                                                    disabled: l,
                                                                    "aria-label": o,
                                                                    text: K.intl.format(K.t.JC15qj, {
                                                                        orbPrice: e.amount,
                                                                        orbIconHook: () =>
                                                                            (0, r.jsx)(e3.C, {
                                                                                className: tM.fN,
                                                                                size: "sm",
                                                                                color: "currentColor",
                                                                            }),
                                                                    }),
                                                                    fullWidth: !0,
                                                                }),
                                                            }))
                                                          : ((d =
                                                                j ??
                                                                K.intl.formatToPlainString(K.t["cNSL/j"], {
                                                                    price: (0, ti.$g)(e.amount, e.currency),
                                                                })),
                                                            (0, r.jsxs)(e4.e, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(e6.$, {
                                                                        variant: p ? "primary" : "secondary",
                                                                        onClick: Q,
                                                                        text: d,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    W &&
                                                                        (0, r.jsx)(td.A, {
                                                                            primary: p,
                                                                            product: i,
                                                                            onSuccess: x,
                                                                            giftRecipient: c,
                                                                            giftingOrigin: u,
                                                                            onTrackClick: E,
                                                                        }),
                                                                ],
                                                            }));
                                              return (0, r.jsx)(s.Fragment, { children: g }, e.currency);
                                          }),
                                      })
                            : W
                              ? (0, r.jsx)(td.A, {
                                    primary: !0,
                                    product: i,
                                    onSuccess: x,
                                    fullWidth: !0,
                                    giftRecipient: c,
                                    giftingOrigin: u,
                                    onTrackClick: E,
                                })
                              : null
                        : ee(K.intl.string(K.t.sEAnVH)),
            }),
        ],
    });
}
var tH = n(607487);
function tw(e) {
    let {
            productRecord: t,
            selectedProduct: n,
            previewingProduct: i,
            user: s,
            selectedBundleSlide: l,
            pendingProfile: a,
        } = e,
        o = eW(t);
    return (0, r.jsxs)("div", {
        className: G()(tH.wd, { [tH.E7]: null != o.LeftPreview }),
        children: [
            (0, r.jsx)("div", {
                className: tH.dL,
                children: (0, r.jsx)(e2, { productRecord: t, selectedProduct: n, selectedBundleSlide: l }),
            }),
            null != o.LeftPreview &&
                (0, r.jsx)("div", {
                    className: tH._E,
                    children: (0, r.jsx)(o.LeftPreview, {
                        user: s,
                        selectedProduct: n,
                        previewingProduct: i,
                        productRecord: t,
                        selectedBundleSlide: l,
                        pendingProfile: a,
                    }),
                }),
            (0, r.jsx)("div", { className: tH.F_, children: (0, r.jsx)(o.Info, { ...e }) }),
            (0, r.jsx)(tG, { ...e }),
        ],
    });
}
var tF = n(685761),
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
            I.default.track(L.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
                i?.(z.sH.COPY_LINK),
                (0, tZ.C)((0, tJ.o)(t, n), () => (0, t$.P0)((0, tX.o)(K.intl.string(K.t["L/PwZf"]), tY.Ck.SUCCESS)));
        }, [t, n, i]);
    return (0, r.jsx)(tV.K, {
        "aria-label": K.intl.string(K.t.WqhZss),
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
    let { skuId: t, product: i, productName: l, tab: a, onTrackClick: o } = e,
        c = s.useCallback(() => {
            I.default.track(L.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
                o?.(z.sH.SHARE_LINK),
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
                                n.e("90480"),
                                n.e("44385"),
                                n.e("40963"),
                                n.e("56169"),
                                n.e("23601"),
                                n.e("3361"),
                            ]).then(n.bind(n, 44632));
                            return (n) =>
                                (0, r.jsx)(e, { ...n, skuId: t, product: i, productName: s, tab: l, source: a });
                        },
                        { stackingBehavior: "stack", modalKey: t2.aU },
                    );
                })({ skuId: t, product: i, productName: l, tab: a, source: "collectibles-shop-pdp" });
        }, [t, i, l, a, o]);
    return (0, r.jsx)(eZ.m, {
        text: K.intl.string(K.t.RDE0Sc),
        ariaHidden: !0,
        children: (0, r.jsx)(tV.K, {
            "aria-label": K.intl.string(K.t.Ej3B3Y),
            onClick: c,
            icon: t0.A,
            variant: "overlay-secondary",
            size: "sm",
        }),
    });
}
var t6 = n(139146),
    t3 = n(60465),
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
                    "aria-label": K.intl.string(K.t["3NdvMK"]),
                    onClick: t,
                    icon: ne.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, r.jsx)("div", {
                className: nn.K,
                children: (0, r.jsx)(tV.K, {
                    "aria-label": K.intl.string(K.t.RYIeOX),
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
            pendingProfile: n,
            productRecord: i,
            previewingProduct: l,
            selectedProduct: a,
            selectedVariantIndex: o,
            selectedBundleSlide: c,
            setSelectedBundleSlide: d,
            isClosing: u,
            isOrbCheckoutModalOpen: m,
            pdpBackground: p,
            category: x,
            tab: E,
            onClose: g,
            onTrackClick: h,
        } = e,
        v = eW(i),
        N = (0, tK.x)("CollectiblesShopProductDetailsModal"),
        f = (0, k.aw)(a),
        A = f ? a.items.length : 0,
        R = tW.useConfig({ location: "CollectiblesShopProductDetailsModal" }).showCollectionButton,
        _ = (function () {
            let e = (0, t5.a)("CollectiblesPdpNavigateToCollection"),
                { sessionId: t } = (0, C.uM)() ?? {},
                n = (0, t8.v)((e) => e.reset);
            return s.useCallback(
                (i, r) => {
                    if (
                        (I.default.track(L.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: t,
                            sku_id: i.skuId,
                            cta_name: r,
                        }),
                        (0, t9.closeUserProfileModal)(),
                        (0, t3.p)(),
                        e && !0 !== i.isOrbsExclusive)
                    )
                        return void (0, t4.pX)(L.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(i.skuId));
                    n();
                    let s = !0 === i.isOrbsExclusive ? z.G2.ORBS : z.G2.CATALOG;
                    (0, t4.pX)(`${L.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)}&${z.P1}=${i.skuId}`);
                },
                [e, t, n],
            );
        })(),
        j = s.useCallback(() => {
            h(z.sH.GO_TO_COLLECTION), g(), _(x, "go_to_collection_button");
        }, [x, g, h, _]),
        T = s.useCallback(() => {
            A <= 1 || d((e) => (e - 1 + A) % A);
        }, [A, d]),
        O = s.useCallback(() => {
            A <= 1 || d((e) => (e + 1) % A);
        }, [A, d]),
        y = s.useCallback(
            (e) => {
                if (A <= 1) return;
                let t = e.target;
                "INPUT" === t.tagName ||
                    "TEXTAREA" === t.tagName ||
                    t.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), T())
                        : "ArrowRight" === e.key && (e.preventDefault(), O()));
            },
            [A, T, O],
        ),
        P = s.useCallback(() => {
            h(z.sH.CLOSE_DETAIL), g();
        }, [h, g]),
        D = s.useRef(null),
        B = s.useRef(!0);
    return (
        s.useLayoutEffect(() => {
            if (B.current) {
                B.current = !1;
                return;
            }
            let e = D.current;
            null != e && ((e.style.animation = "none"), e.offsetHeight, (e.style.animation = ""));
        }, [c]),
        (0, r.jsxs)("div", {
            className: G()(nr.i1, (0, z.EZ)(a.skuId) ? nr.bF : a.type === S.R.AVATAR_DECORATION ? nr.Jq : nr.eF),
            style: null != p ? { backgroundImage: `url(${p})` } : void 0,
            onKeyDown: y,
            children: [
                (N || R) &&
                    (0, r.jsx)("div", {
                        className: nr.GV,
                        children: (0, r.jsx)(eZ.m, {
                            text: K.intl.string(K.t["Hr/q/6"]),
                            children: (0, r.jsx)(e6.$, {
                                variant: "overlay-secondary",
                                size: "sm",
                                icon: tF.f,
                                text: x.name,
                                onClick: j,
                            }),
                        }),
                    }),
                (0, r.jsx)("div", {
                    className: nr.KR,
                    ref: D,
                    children: (0, r.jsx)(v.RightPreview, {
                        user: t,
                        pendingProfile: n,
                        productRecord: i,
                        selectedProduct: a,
                        previewingProduct: l,
                        selectedBundleSlide: c,
                        isClosing: u,
                        isOrbCheckoutModalOpen: m,
                    }),
                }),
                f && A > 1 && (0, r.jsx)(ni, { goPrev: T, goNext: O }),
                (0, r.jsxs)("div", {
                    className: nr.VG,
                    children: [
                        (0, r.jsx)(t6.R, {
                            product: i,
                            selectedVariantIndex: o,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: h,
                        }),
                        N
                            ? (0, r.jsx)(t7, {
                                  skuId: a.skuId,
                                  product: a,
                                  productName: (0, b.VG)(a),
                                  tab: E,
                                  onTrackClick: h,
                              })
                            : (0, r.jsx)(tQ, { skuId: a.skuId, tab: E, onTrackClick: h }),
                        (0, r.jsx)(tV.K, {
                            "aria-label": K.intl.string(K.t.cpT0Cq),
                            onClick: P,
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
let na = (0, u.FT)(u._3.SIZE_152),
    no = function (e) {
        let {
                transitionState: t,
                onClose: n,
                product: i,
                category: l,
                returnRef: u,
                analyticsSource: S,
                analyticsLocations: M,
                shouldCheckoutWithOrbs: G,
                tab: H,
                giftRecipient: w,
                giftingOrigin: F,
            } = e,
            V = (0, d.bG)([R.default], () => R.default.getCurrentUser()),
            z = (0, d.cf)([N.A], () => N.A.getPendingChanges()),
            K = (0, U.f)(i),
            { previewingVariantIndex: W } = K,
            $ = (0, j.Q)(i),
            X = D(i, W),
            Y = (0, y.rb)(i, $);
        a()(null != Y, "Selected product should not be null");
        let { analyticsLocations: q } = (0, E.Ay)([...M, x.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, P.Yr)(Y.skuId);
        let Z = (0, B.U1)(l),
            [J, Q] = s.useState(0);
        s.useEffect(() => {
            null != V && (0, f.A)(V.id, V.getAvatarURL(void 0, 80));
        }, [V]);
        let ee = s.useMemo(() => (0, k.V6)(i.type, i.skuId), [i.type, i.skuId]);
        s.useEffect(() => {
            I.default.track(L.HAw.OPEN_MODAL, {
                type: L.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: S,
                location_stack: q,
                sku_id: Y.skuId,
                product_type: ee,
            }),
                (0, _.RD)(Y.skuId);
        }, [S, q, Y.skuId, ee]);
        let { cardId: et, sessionId: en, tilePosition: ei } = (0, C.uM)() ?? {},
            er = s.useMemo(() => (0, y.v8)(i), [i]),
            es = (function (e) {
                let { skuId: t, productSkuIds: n, analyticsLocations: i } = e,
                    { cardId: r, sessionId: l } = (0, C.uM)() ?? {},
                    a = (0, O.o)(),
                    o = (0, k.xM)(a);
                return s.useCallback(
                    (e, s) => {
                        I.default.track(L.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                            sku_id: s ?? t,
                            cta: e,
                            shop_session_id: l,
                            card_id: r,
                            product_sku_ids: n,
                            location_stack: i,
                            discount_source: (0, k.b_)(o),
                        });
                    },
                    [t, i, r, n, l, o],
                );
            })({ skuId: Y.skuId, productSkuIds: er, analyticsLocations: q });
        (0, g.A)({
            type: o.ImpressionTypes.MODAL,
            name: o.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: Y.skuId,
                card_id: et,
                shop_session_id: en,
                position_in_section: ei,
                product_sku_ids: er,
                location_stack: q,
            },
        });
        let el = (0, A.o6)(),
            ea = t === m.ip.EXITING,
            eo = (0, T.c)("product_details_modal");
        if (null == V || (i.skuId === c.j.PREMIUM_TIER_2_1_DAY && !eo)) return null;
        let ec = {
                pendingChanges: z,
                pendingAvatarSrc:
                    void 0 !== z.pendingAvatar
                        ? (0, h.sv)((0, v.V7)({ userId: V.id, image: z.pendingAvatar, size: na }), null, V, {
                              size: na,
                          })
                        : void 0,
            },
            ed = (0, b.VG)(i),
            eu = {
                user: V,
                pendingProfile: ec,
                productRecord: i,
                productName: ed,
                selectedProduct: Y,
                previewingProduct: X ?? null,
                category: l,
                selectedVariantIndex: $,
                previewingVariantIndexProps: K,
                selectedBundleSlide: J,
                setSelectedBundleSlide: Q,
                tab: H,
                shouldCheckoutWithOrbs: G,
                giftRecipient: w?.id !== V.id ? w : void 0,
                giftingOrigin: w?.id !== V.id ? F : void 0,
                analyticsLocations: q,
                returnRef: u,
                onClose: n,
                onTrackClick: es,
            };
        return (0, r.jsx)(E.f5, {
            value: q,
            children: (0, r.jsx)(p.d, {
                returnRef: u,
                transitionState: t,
                onClose: n,
                size: "xl",
                paddingSize: "sm",
                "aria-label": ed,
                children: (0, r.jsx)("div", {
                    className: nl.C,
                    children: (0, r.jsxs)("div", {
                        className: nl.j,
                        children: [
                            (0, r.jsx)(tw, { ...eu }),
                            (0, r.jsx)(ns, { ...eu, isClosing: ea, isOrbCheckoutModalOpen: el, pdpBackground: Z }),
                        ],
                    }),
                }),
            }),
        });
    };
