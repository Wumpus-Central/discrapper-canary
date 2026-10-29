n.d(t, { default: () => t7 });
var i,
    s = n(477900),
    r = n(582128),
    l = n(284009),
    a = n.n(l),
    c = n(562708),
    d = n(334279),
    o = n(702841),
    u = n(778712),
    m = n(231723),
    p = n(224640),
    x = n(793574),
    g = n(688810),
    h = n(139286),
    E = n(252732),
    f = n(101058),
    v = n(836602),
    N = n(903209),
    A = n(652165),
    j = n(287809),
    I = n(174459),
    R = n(815996),
    C = n(440938),
    y = n(947893),
    _ = n(993408),
    T = n(503089),
    k = n(331884),
    O = n(652215),
    L = n(623373),
    P = n(536572),
    S = n(177366),
    D = n(575593);
function b(e, t) {
    return e.type === D.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e;
}
var w = n(212407),
    B = n(935094),
    M = n(503698),
    F = n.n(M),
    G = n(834730),
    U = n(939249),
    H = n(297264),
    z = n(14702),
    V = n(818296),
    X = n(288106),
    W = n(604913);
n(321073);
var Z = n(105292);
function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t) return Z.intl.formatToPlainString(Z.t["/0Yndu"], { num: e.bundledProducts?.length });
    let n = e.bundledProducts ?? [],
        i = [],
        s = !1;
    for (let e of n)
        switch (e.type) {
            case D.R.AVATAR_DECORATION:
                i.push(Z.intl.formatToPlainString(Z.t.Ntv9Jt, { itemName: e.name }));
                break;
            case D.R.PROFILE_EFFECT:
                i.push(Z.intl.formatToPlainString(Z.t["3Y8q7a"], { itemName: e.name }));
                break;
            case D.R.NAMEPLATE:
                (i.push(Z.intl.formatToPlainString(Z.t["2keXky"], { itemName: e.name })), (s = !0));
        }
    if (s) {
        let e = i.join(", ").replace(/, ([^,]*)$/, " & $1");
        return Z.intl.formatToPlainString(Z.t.Ofrqj6, { joinedItems: e });
    }
    let r = i.join(" & ");
    return Z.intl.formatToPlainString(Z.t.Ofrqj6, { joinedItems: r });
}
var Y = n(306396);
function q(e) {
    return (0, _.aw)(e)
        ? Z.intl.formatToPlainString(Z.t["1tUCAO"], { count: e.items.length })
        : (function (e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (null != e && null != e.summary && "" !== e.summary) {
                  if (e.type === D.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                      let n = $(e, t);
                      return e.summary.replace("{joinedItems}", n);
                  }
                  return e.summary;
              }
              switch (e?.type) {
                  case D.R.AVATAR_DECORATION:
                      return Z.intl.string(Z.t["3lv7q2"]);
                  case D.R.PROFILE_EFFECT:
                      return Z.intl.string(Z.t.VhJL72);
                  case D.R.NAMEPLATE:
                      return Z.intl.string(Z.t.ik37EZ);
                  case D.R.PROFILE_FRAME:
                      return Z.intl.string(Z.t.fWzWPp);
                  case D.R.BUNDLE:
                      return $(e, t);
                  default:
                      return "";
              }
          })(e);
}
function J(e) {
    let t = (0, V.g)(e);
    if (null != t) {
        let n = q(e);
        switch (t.tenantMetadata?.collectibles?.type) {
            case W.hE.COLLECT_AND_CLAIM:
                if (t.rewardStatus !== X.GM.IN_PROGRESS) return n;
                if ((0, _.aw)(e))
                    return Z.intl.formatToPlainString(Z.t["vI+3Ok"], {
                        itemCount: (0, Y.oO)(e, t.tenantMetadata.collectibles.collectionId),
                    });
                return Z.intl.formatToPlainString(Z.t.wBhFsO, { itemDescription: n.replace(/\.$/, "") });
            case W.hE.TARGETED_OFFER:
            default:
                return n;
        }
    }
    return q(e);
}
var K = n(758836),
    Q = n(690901);
function ee(e) {
    let { name: t, typeLabel: n } = e;
    return (0, s.jsxs)(G.E, {
        variant: "text-sm/medium",
        className: Q.mC,
        "aria-live": "polite",
        children: [
            (0, s.jsx)("span", { className: Q.kx, children: t }),
            null != n && (0, s.jsx)("span", { className: Q.FP, children: n }),
        ],
    });
}
let et = { [D.R.AVATAR_DECORATION]: !0, [D.R.PROFILE_FRAME]: !0 };
function en(e) {
    let { item: t, index: n, isSelected: i, setSelected: l, label: a, trackedSkuId: c, onTrackClick: d } = e,
        o = r.useMemo(() => ({ skuId: t.skuId, type: t.type, items: [t] }), [t]),
        u = r.useCallback(() => {
            (d(K.sH.BUNDLE_VIEW_PRODUCT, c), l(n));
        }, [d, c, l, n]),
        m = !0 === et[t.type];
    return (0, s.jsx)(U.D, {
        tag: "div",
        role: "radio",
        "aria-checked": i,
        tabIndex: i ? 0 : -1,
        className: F()(Q.xn, { [Q.Y4]: i, [Q.u8]: m }),
        onClick: u,
        "aria-label": a,
        children: (0, s.jsx)("div", { className: Q.Yf, children: (0, s.jsx)(z.O, { product: o }) }),
    });
}
var ei = n(442759),
    es = n(344346),
    er = n(139136),
    el = n(395744),
    ea = n(929283),
    ec = n(650228);
function ed(e) {
    let {
        item: t,
        user: n,
        bundleFirstAvatarDecoration: i,
        isBundle: r,
        pendingAvatarSrc: l,
        pendingAvatarDecoration: a,
        pendingDisplayNameStyles: c,
        pendingGlobalName: d,
    } = e;
    switch (t.type) {
        case D.R.AVATAR_DECORATION:
            return (0, s.jsx)("div", {
                className: ec.h1,
                children: (0, s.jsx)(ea.i, { user: n, item: t, avatarSrcOverride: l, isHighlighted: !0 }),
            });
        case D.R.PROFILE_EFFECT:
            return (0, s.jsx)("div", {
                className: r ? ec.sm : ec.VY,
                children: (0, s.jsx)(er.A, {
                    skuId: t.skuId,
                    removeSetHeight: !0,
                    isHighlighted: !0,
                    delayProfileEffectIntro: !0,
                }),
            });
        case D.R.PROFILE_FRAME:
            return (0, s.jsx)("div", { className: r ? ec.ob : ec.fE, children: (0, s.jsx)(el.A, { frame: t }) });
        case D.R.NAMEPLATE:
            return (0, s.jsx)("div", {
                className: ec.Dz,
                children: (0, s.jsx)(es.A, {
                    className: ec.M4,
                    nameplate: t,
                    user: n,
                    nameplatePreviewSize: "large",
                    pendingAvatarDecoration: i ?? a,
                    pendingDisplayNameStyles: c,
                    pendingGlobalName: d,
                    isHighlighted: !0,
                    hideDecorators: !0,
                }),
            });
        default:
            return null;
    }
}
function eo(e) {
    let { user: t, selectedProduct: n, previewingProduct: i, selectedBundleSlide: r, pendingProfile: l } = e,
        a = i ?? n,
        { firstAvatarDecoration: c } = (0, ei.f5)(a),
        { pendingChanges: d, pendingAvatarSrc: o } = l,
        u = a.items[r] ?? a.items[0];
    return null == u
        ? null
        : (0, s.jsx)(ed, {
              item: u,
              user: t,
              bundleFirstAvatarDecoration: c,
              isBundle: (0, _.aw)(a),
              pendingAvatarSrc: o,
              pendingAvatarDecoration: d.pendingAvatarDecoration,
              pendingDisplayNameStyles: d.pendingDisplayNameStyles,
              pendingGlobalName: d.pendingGlobalName,
          });
}
var eu = n(846957);
function em(e) {
    let { selectedProduct: t, previewingProduct: n } = e;
    return (0, s.jsx)(eu.B, { product: n ?? t });
}
var ep = n(975571),
    ex = n(740076),
    eg = n(661847),
    eh = n(422460);
function eE(e) {
    let { skuId: t } = e;
    return (0, K.EZ)(t)
        ? (0, s.jsx)(G.E, {
              variant: "text-sm/normal",
              className: eh.CU,
              children: Z.intl.format(Z.t.Q1scdE, {
                  helpdeskArticle: ep.A.getArticleURL(O.MVz.FRACTIONAL_PREMIUM_ABOUT),
              }),
          })
        : null;
}
function ef(e) {
    let { productRecord: t, productName: n, selectedProduct: i, previewingVariantIndexProps: l } = e,
        { previewingVariantIndex: a, handleEntering: c, handleLeaving: d } = l,
        o = b(t, a) ?? i,
        u = J(o),
        { disabledReason: m } = (0, ex.I)(i.skuId),
        p = (0, y.Q)(t),
        x = (0, L.B1)(t),
        g = x ? t.variants[a ?? p] : null,
        h = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            null != h.current && ((h.current.tabIndex = -1), h.current.focus());
        }, []),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: eh.sn,
                    children: [
                        (0, s.jsx)(H.D, { ref: h, variant: "heading-xl/bold", className: eh.R_, children: n }),
                        (0, s.jsx)(G.E, { variant: "text-sm/normal", children: u }),
                        (0, s.jsx)(eE, { skuId: o.skuId }),
                        null !== m && (0, s.jsx)(G.E, { variant: "text-xs/normal", className: eh.H$, children: m }),
                    ],
                }),
                x &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != g &&
                                (0, s.jsx)(G.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: eh.a9,
                                    lineClamp: 1,
                                    children: Z.intl.format(Z.t.EcaRWt, {
                                        value: (0, s.jsx)("span", { className: eh.I8, children: g.variantLabel }),
                                    }),
                                }),
                            (0, s.jsx)("div", {
                                className: eh._x,
                                children: (0, s.jsx)(eg.A, {
                                    skuId: t.skuId,
                                    onVariantEnter: c,
                                    onVariantExit: d,
                                    wrap: !0,
                                }),
                            }),
                        ],
                    }),
            ],
        })
    );
}
var ev =
        (((i = {}).COLLECTIBLE = "COLLECTIBLE"),
        (i.BUNDLE = "BUNDLE"),
        (i.EXTERNAL_ORB_BADGE = "EXTERNAL_ORB_BADGE"),
        (i.EXTERNAL_FRACTIONAL_NITRO = "EXTERNAL_FRACTIONAL_NITRO"),
        (i.EXTERNAL_GENERIC = "EXTERNAL_GENERIC"),
        i),
    eN = n(97808),
    eA = n(346055),
    ej = n(993077),
    eI = n(245604),
    eR = n(460905),
    eC = n(262295),
    ey = n(685073),
    e_ = n(320095),
    eT = n(963852),
    ek = n(763754),
    eO = n(20851),
    eL = n(986687),
    eP = n(24482),
    eS = n(780898),
    eD = n(158008);
function eb(e) {
    let { user: t, innerClassName: n } = e;
    return (0, s.jsx)("div", {
        className: eD.mV,
        children: (0, s.jsx)(eC.A, {
            avatar: (0, s.jsx)(eN.eu, {
                src: t.avatarSrc,
                size: u._3.SIZE_32,
                "aria-label": t.name,
                status: O.clD.ONLINE,
            }),
            name: t.name,
            innerClassName: F()(eD.$L, n),
        }),
    });
}
function ew(e) {
    let { user: t, nameplate: n, avatarDecoration: i, pendingDisplayNameStyles: r, pendingGlobalName: l } = e,
        a = (0, eS.Ov)();
    return (0, s.jsx)("div", {
        className: eD.nJ,
        role: "img",
        "aria-label": Z.intl.formatToPlainString(Z.t["95pCSf"], { a11y_text: n.label }),
        children: (0, s.jsxs)(eA.M, {
            children: [
                (0, s.jsx)(eb, { user: a.mallow, innerClassName: eD.ab }),
                (0, s.jsxs)(G.E, {
                    variant: "text-sm/semibold",
                    className: eD.OS,
                    children: [Z.intl.string(Z.t["yzW/fZ"]), " - 3"],
                }),
                (0, s.jsx)(eb, { user: a.phibi, innerClassName: eD.e9 }),
                (0, s.jsx)("div", {
                    className: eD.mV,
                    children: (0, s.jsx)(es.A, {
                        className: eD.M4,
                        innerClassName: eD.e9,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: !0,
                        skipEffectDisplayName: !0,
                        pendingAvatarDecoration: i,
                        pendingDisplayNameStyles: r,
                        pendingGlobalName: l,
                        hideDecorators: !0,
                    }),
                }),
                (0, s.jsx)(eb, { user: a.locke, innerClassName: eD.e9 }),
                (0, s.jsxs)(G.E, {
                    variant: "text-sm/semibold",
                    className: eD.OS,
                    children: [Z.intl.string(Z.t["NG43/6"]), " - 12"],
                }),
                (0, s.jsx)(eb, { user: a.boom, innerClassName: eD.bD }),
                (0, s.jsx)(eb, { user: a.cherry, innerClassName: eD.bD }),
            ],
        }),
    });
}
function eB(e) {
    let {
            user: t,
            avatarDecoration: n,
            pendingAvatarSrc: i,
            pendingPrimaryGuildId: r,
            pendingDisplayNameStyles: l,
            pendingGlobalName: a,
        } = e,
        c = (function (e) {
            let { author: t } = e;
            return (0, e_.rh)({
                ...(0, eT.Ay)({ author: t, channelId: "1337", content: Z.intl.string(Z.t.d5YwK5) }),
                state: O.cmJ.SENT,
                id: "0",
            });
        })({ author: t }),
        d = (0, ey.gS)(r),
        o = (0, ek.p_)(c),
        u = {
            ...o,
            nick:
                void 0 !== a
                    ? (0, E.eh)({ pendingNickname: void 0, pendingGlobalName: a, user: t, guildMember: null })
                    : o.nick,
            primaryGuild: void 0 !== r ? d : o.primaryGuild,
            displayNameStyles: void 0 !== l ? l : o.displayNameStyles,
        };
    return (0, s.jsx)("div", {
        role: "img",
        "aria-label": Z.intl.string(Z.t["TN+ZvB"]),
        children: (0, s.jsx)(eA.M, {
            children: (0, s.jsxs)(ej.Z, {
                className: eD.f7,
                outline: !0,
                "aria-hidden": !0,
                children: [
                    (0, s.jsx)(
                        eO.A,
                        {
                            className: eD.G5,
                            author: u,
                            message: c,
                            avatarDecorationOverride: n ?? null,
                            avatarOverride: i,
                        },
                        c.id,
                    ),
                    (0, s.jsxs)("div", {
                        className: eD.lG,
                        children: [
                            (0, s.jsx)(eI.U, { size: "md", color: "currentColor", className: eD.hq }),
                            (0, s.jsx)(eR.n, { size: "md", color: "currentColor", className: eD.hq }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function eM(e) {
    let { product: t, user: n, pendingProfile: i, activeBundleSlide: r } = e,
        l = eP.Ay.canUsePremiumProfileCustomization(n),
        { pendingAvatar: a, ...c } = i.pendingChanges,
        d = i.pendingAvatarSrc,
        o = t.type === D.R.BUNDLE ? t.items[r ?? 0] : void 0,
        u = o?.type ?? t.type,
        m = u === D.R.AVATAR_DECORATION,
        p = u === D.R.PROFILE_EFFECT || u === D.R.PROFILE_FRAME,
        { firstAvatarDecoration: x, firstProfileEffect: g, firstNameplate: h, firstProfileFrame: E } = (0, ei.f5)(t),
        f = o?.type === D.R.AVATAR_DECORATION ? o : x,
        v = o?.type === D.R.PROFILE_EFFECT ? o : g,
        N = o?.type === D.R.PROFILE_FRAME ? o : E,
        A = o?.type === D.R.NAMEPLATE ? o : h;
    if (u === D.R.NAMEPLATE && null != A)
        return (0, s.jsx)("div", {
            className: eD.Zj,
            children: (0, s.jsx)(ew, {
                user: n,
                nameplate: A,
                avatarDecoration: f ?? c.pendingAvatarDecoration,
                pendingDisplayNameStyles: c.pendingDisplayNameStyles,
                pendingGlobalName: c.pendingGlobalName,
            }),
        });
    return (0, s.jsx)("div", {
        className: m ? eD.RA : eD.hZ,
        children: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(eL.A, {
                    ...c,
                    pendingAvatar: d,
                    user: n,
                    canUsePremiumCustomization: l,
                    pendingAvatarDecoration: f ?? c.pendingAvatarDecoration,
                    pendingProfileEffect: v ?? c.pendingProfileEffect,
                    profileEffectRestartKey: r,
                    pendingProfileFrame: N ?? c.pendingProfileFrame,
                    disabledInputs: !0,
                    hideMessageInput: !p,
                    hideCustomStatus: !0,
                    hideBioSection: m,
                    hideExampleButton: !0,
                    interactive: !1,
                    className: m ? eD.oB : void 0,
                }),
                m &&
                    (0, s.jsx)(eB, {
                        user: n,
                        avatarDecoration: f,
                        pendingAvatarSrc: d,
                        pendingPrimaryGuildId: c.pendingPrimaryGuildId,
                        pendingDisplayNameStyles: c.pendingDisplayNameStyles,
                        pendingGlobalName: c.pendingGlobalName,
                    }),
            ],
        }),
    });
}
function eF(e) {
    let { user: t, pendingProfile: n, selectedProduct: i, previewingProduct: r, selectedBundleSlide: l } = e;
    return (0, s.jsx)(eM, { user: t, pendingProfile: n, product: r ?? i, activeBundleSlide: l });
}
var eG = n(478016),
    eU = n(661531),
    eH = n(219882),
    ez = n(224016),
    eV = n(202541),
    eX = n(549848);
function eW() {
    let e = [
        Z.intl.string(Z.t.E1NP2x),
        Z.intl.string(Z.t.kpMomJ),
        (0, eH.M6)({
            legacyCopy: Z.intl.string(Z.t.xT1Vfn),
            rolloutCopy: Z.intl.formatToPlainString(Z.t.IDAfOy, {
                maxFileSize: (0, eP.EJ)(eV.PremiumTypes.TIER_2, { useSpace: !1 }),
            }),
        }),
        Z.intl.string(Z.t.myyAEr),
        Z.intl.string(Z.t.zTk8Ul),
    ];
    return (0, s.jsxs)("div", {
        className: eX.kL,
        children: [
            (0, s.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: eX.ym,
            }),
            (0, s.jsx)(ez.A, { color: "white" }),
            (0, s.jsx)("div", {
                className: eX.PX,
                children: e.map((e, t) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: eX.UJ,
                            children: [
                                (0, s.jsx)(eG.U, { color: eU.A.colors.WHITE }),
                                (0, s.jsx)(G.E, {
                                    variant: "text-sm/medium",
                                    color: "text-overlay-light",
                                    children: e,
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
var eZ = n(17928),
    e$ = n(132198),
    eY = n(35929);
function eq(e) {
    let { user: t } = e,
        n = eP.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: i, ...r } = (0, eZ.cf)([v.A], () => v.A.getPendingChanges()),
        l = (0, f.V7)({ userId: t.id, image: i });
    return (0, s.jsx)("div", {
        className: eY.k,
        children: (0, s.jsx)(eL.A, {
            ...r,
            pendingAvatar: l,
            user: t,
            pendingBadges: [(0, e$._)()],
            canUsePremiumCustomization: n,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
}
var eJ = n(165416);
function eK(e) {
    let { user: t, productRecord: n, isClosing: i, isOrbCheckoutModalOpen: r } = e;
    return n.skuId === K.Dp.ORB_PROFILE_BADGE
        ? i || r
            ? null
            : (0, s.jsx)(eq, { user: t })
        : (0, K.EZ)(n.skuId)
          ? (0, s.jsx)(eW, {})
          : (0, s.jsx)(eu.B, { product: n, className: eJ.M });
}
let eQ = {
    [ev.COLLECTIBLE]: { LeftPreview: eo, Info: ef, RightPreview: eF },
    [ev.BUNDLE]: {
        LeftPreview: eo,
        Info: function (e) {
            let {
                    productRecord: t,
                    productName: n,
                    selectedBundleSlide: i,
                    setSelectedBundleSlide: l,
                    onTrackClick: a,
                } = e,
                c = t.items,
                d = t.bundledProducts,
                o = d?.[i]?.name,
                u = c[i]?.type,
                m = null != u ? (0, _.Dm)(u) : null,
                p = Z.intl.string(Z.t.cTbdgu),
                x = J(t),
                g = r.useRef(null),
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
                let e = g.current;
                if (null == e || !e.contains(document.activeElement)) return;
                let t = e.querySelectorAll('[role="radio"]');
                t[i]?.focus();
            }, [i]);
            let E = r.useRef(null);
            return (
                r.useLayoutEffect(() => {
                    null != E.current && ((E.current.tabIndex = -1), E.current.focus());
                }, []),
                (0, s.jsxs)("div", {
                    className: Q.Qf,
                    children: [
                        (0, s.jsx)(H.D, { ref: E, variant: "heading-xl/bold", className: Q.R_, title: n, children: n }),
                        (0, s.jsx)(G.E, { variant: "text-sm/medium", color: "text-default", children: x }),
                        (0, s.jsxs)("div", {
                            className: Q.hZ,
                            children: [
                                (0, s.jsx)("div", {
                                    className: Q.vg,
                                    children: (0, s.jsx)("div", {
                                        ref: g,
                                        className: Q.hK,
                                        role: "radiogroup",
                                        "aria-label": p,
                                        tabIndex: -1,
                                        onKeyDown: h,
                                        children: c.map((e, t) => {
                                            let n = d?.[t]?.name ?? e.skuId,
                                                r = d?.[t]?.skuId ?? e.skuId;
                                            return (0, s.jsx)(
                                                en,
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
                                null != o && (0, s.jsx)(ee, { name: o, typeLabel: m }),
                            ],
                        }),
                    ],
                })
            );
        },
        RightPreview: eF,
    },
    [ev.EXTERNAL_ORB_BADGE]: { LeftPreview: em, Info: ef, RightPreview: eK },
    [ev.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: em, Info: ef, RightPreview: eK },
    [ev.EXTERNAL_GENERIC]: { LeftPreview: em, Info: ef, RightPreview: eK },
};
function e0(e) {
    var t;
    return eQ[
        ((t = e),
        (0, K.pQ)(t.skuId)
            ? t.skuId === K.Dp.ORB_PROFILE_BADGE
                ? "EXTERNAL_ORB_BADGE"
                : (0, K.EZ)(t.skuId)
                  ? "EXTERNAL_FRACTIONAL_NITRO"
                  : "EXTERNAL_GENERIC"
            : (0, _.aw)(t)
              ? "BUNDLE"
              : "COLLECTIBLE")
    ];
}
var e1 = n(347478),
    e2 = n(268959),
    e8 = n(325802),
    e6 = n(252125);
function e3(e) {
    let t,
        { productRecord: n, selectedProduct: i, selectedBundleSlide: r } = e,
        l = (0, V.g)(i),
        a = (0, e1.$)(l),
        c = n.type === D.R.BUNDLE ? (n.items[r] ?? n.items[0]) : void 0;
    return (
        (t =
            null != c &&
            !n.hideBadge &&
            null == n.badgeOverride &&
            (0, L.JQ)({ skuId: c.skuId, type: c.type, items: [c] })
                ? (0, s.jsx)(e2.s, {})
                : (0, s.jsx)(e2.A, { skuId: n.skuId })),
        (0, s.jsxs)("div", { className: e6.N, children: [t, null != l && a && (0, s.jsx)(e8.A, { promotion: l })] })
    );
}
var e5 = n(462887),
    e9 = n(278416),
    e4 = n(866665),
    e7 = n(821609),
    te = n(318254),
    tt = n(825484),
    tn = n(331322),
    ti = n(736653),
    ts = n(44120),
    tr = n(465794),
    tl = n(757036),
    ta = n(478996),
    tc = n(580630),
    td = n(4227),
    to = n(466459),
    tu = n(518865),
    tm = n(885574),
    tp = n(495900);
function tx(e) {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, s.jsx)(e4.m, {
              position: "top",
              align: "left",
              text: Z.intl.string(Z.t.y1VWkZ),
              children: (0, s.jsxs)("div", {
                  className: F()(tp.GX, t),
                  children: [
                      (0, s.jsx)("span", {
                          className: tp.P0,
                          children: (0, s.jsx)(tm.CircleInformationIcon, {
                              size: "md",
                              color: "currentColor",
                              className: tp.G,
                          }),
                      }),
                      (0, s.jsx)(G.E, { variant: "text-md/semibold", children: Z.intl.string(Z.t.BEjTij) }),
                  ],
              }),
          })
        : (0, s.jsx)(G.E, { variant: "text-md/semibold", className: t, children: Z.intl.string(Z.t["6cfuDj"]) });
}
var tg = n(878112),
    th = n(572595),
    tE = n(206835),
    tf = n(450481);
let tv = function (e) {
    let { product: t, onSuccess: n, onTrackClick: i } = e,
        { handleUseNow: r, isApplying: l, canUseNow: a } = (0, tf.p)({ product: t, onSuccess: n }),
        c = (0, tE.A)();
    return a
        ? (0, s.jsx)(e7.$, {
              variant: "primary",
              onClick: () => {
                  (i?.(K.sH.USE_NOW), r());
              },
              loading: l,
              text: Z.intl.string(Z.t.MAS7uK),
              fullWidth: !0,
          })
        : (0, s.jsx)(e7.$, {
              variant: "primary",
              onClick: () => {
                  (i?.(K.sH.EDIT_PROFILE), c(), n?.());
              },
              text: Z.intl.string(Z.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var tN = n(140735),
    tA = n(826706);
function tj(e) {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: r = "heading-md/semibold",
        } = e,
        l = (0, tc.RS)(t, n);
    return (0, s.jsxs)(G.E, {
        variant: r,
        className: F()(tA.v, i),
        children: [
            (0, s.jsx)(tN.A, { children: Z.intl.format(Z.t["2CEGln"], { price: l }) }),
            (0, s.jsx)("span", { "aria-hidden": !0, children: l }),
        ],
    });
}
var tI = n(219103),
    tR = n(282968);
function tC(e) {
    let {
            product: t,
            hasShopDiscount: n,
            discountSource: i,
            discount: r,
            className: l,
            hideStrikethroughPrice: a = !1,
            discountIconDisplayMode: c,
            discountIconSize: d = "md",
        } = e,
        o = (0, _.WD)(t, { hasShopDiscount: n, discount: r });
    if (null == o) return null;
    let { defaultPrice: u, showDefaultPriceOnly: m } = o;
    if (m)
        return (0, s.jsx)("div", {
            className: F()(tR.kG, l),
            children: (0, s.jsx)(tI.x, { priceAmount: u.amount, priceCurrency: u.currency }),
        });
    let { showDiscountPrice: p, originalPrice: x, finalPrice: g } = o;
    return (0, s.jsxs)("div", {
        className: F()(tR.kG, l),
        children: [
            a ? null : (0, s.jsx)(tj, { price: x, className: tR.q9 }),
            (0, s.jsx)(tI.x, {
                priceAmount: g.amount,
                priceCurrency: g.currency,
                discount: r,
                className: tR.q9,
                discountIconConfig: p && null != c ? { displayMode: c, source: i ?? _.D0.NITRO, size: d } : void 0,
            }),
        ],
    });
}
var ty = n(403581),
    t_ = n(75678),
    tT = n(843625);
function tk(e) {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: i } = (0, g.Ay)(),
        l = r.useRef(null);
    return (0, s.jsx)(U.D, {
        className: tT.F,
        innerRef: l,
        onClick: () => {
            (n?.(K.sH.SUBSCRIBE_NOW),
                (0, t_.A)({ subscriptionTier: eV.pe.TIER_2, analyticsLocations: i, returnRef: l }));
        },
        children: t,
    });
}
var tO = n(329986);
function tL(e) {
    let { product: t, onTrackClick: n } = e,
        i = (0, _.yt)(t, O.lid.PREMIUM_TIER_2);
    if (null == i) return null;
    let r = (0, tc.RS)(i.amount, i.currency);
    return (0, s.jsxs)("div", {
        className: tO.k,
        children: [
            (0, s.jsx)(e4.m, {
                text: Z.intl.string(Z.t.MPFyJ5),
                "aria-label": Z.intl.string(Z.t.X3Ekj8),
                children: (0, s.jsx)(ty.t, { size: "md", color: "currentColor", className: tO.o }),
            }),
            (0, s.jsx)(G.E, {
                variant: "text-xs/medium",
                children: Z.intl.format(Z.t.Sv8iic, {
                    price: r,
                    subscribeNowHook: (e) => (0, s.jsx)(tk, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
var tP = n(818348),
    tS = n(426919);
function tD(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: i, discount: r } = e,
        l = n ? Z.intl.string(Z.t.wu4gyV) : Z.intl.string(Z.t.eFNRzU),
        a = n || !i;
    return (0, s.jsxs)("div", {
        className: tS.eg,
        children: [
            (0, s.jsx)("div", {
                className: tS.zR,
                children: (0, s.jsx)(G.E, { variant: "text-xs/normal", className: a ? tS.r9 : void 0, children: l }),
            }),
            (0, s.jsx)(tI.x, {
                priceAmount: t.amount,
                priceCurrency: t.currency,
                discount: r,
                className: a ? tS.r9 : void 0,
            }),
        ],
    });
}
function tb(e) {
    let {
        prices: t,
        hasShopDiscount: n,
        discountSource: i,
        discount: r,
        product: l,
        hasSufficientOrbs: a,
        onTrackClick: c,
        isProductDisabled: d,
    } = e;
    return 0 === t.length
        ? null
        : t[0].currency === tP.Yr.DISCORD_ORB
          ? (0, s.jsx)(tD, { orbPrice: t[0], isProductDisabled: d, hasSufficientOrbs: a, discount: r })
          : (0, s.jsxs)("div", {
                className: tS.eg,
                children: [
                    (0, s.jsxs)("div", {
                        className: tS.pw,
                        children: [
                            (0, s.jsx)(tC, {
                                product: l,
                                discount: r,
                                hasShopDiscount: n,
                                discountSource: i,
                                hideStrikethroughPrice: !n,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                            }),
                            n ? null : (0, s.jsx)(tL, { product: l, onTrackClick: c }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === tP.Yr.DISCORD_ORB &&
                        (0, s.jsx)(tI.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: d || !a ? tS.r9 : void 0,
                        }),
                ],
            });
}
var tw = n(347722),
    tB = n(497901),
    tM = n(57020),
    tF = n(61750),
    tG = n(808598),
    tU = n(543080);
function tH(e) {
    let { label: t, countdown: n } = e;
    return (0, s.jsxs)("div", {
        className: tU.lo,
        children: [
            (0, s.jsxs)("div", {
                className: tU.fZ,
                children: [
                    (0, s.jsx)(e9.TagIcon, { size: "xs", color: "currentColor", className: tU.CE }),
                    (0, s.jsx)(G.E, { variant: "text-xs/medium", color: "none", children: t }),
                ],
            }),
            null != n && (0, s.jsx)(G.E, { variant: "text-xs/medium", color: "none", children: n }),
        ],
    });
}
function tz(e) {
    let {
            user: t,
            productRecord: n,
            selectedProduct: i,
            category: l,
            shouldCheckoutWithOrbs: a,
            tab: c,
            giftRecipient: d,
            giftingOrigin: u,
            analyticsLocations: m,
            returnRef: p,
            onClose: x,
            onTrackClick: g,
        } = e,
        { cardId: h, sessionId: E, tilePosition: f } = (0, C.uM)() ?? {},
        v = (0, tl.L)(eV.PremiumTypes.TIER_2),
        N = (0, _.xM)(t),
        j = eP.Ay.canUseShopDiscounts(t),
        I = (0, V.g)(i),
        y = (0, tB.A)(I?.endsAt),
        T = (0, tu.MX)(I),
        k = (0, tu.Jl)(I),
        L = r.useMemo(
            () =>
                null != I
                    ? (function (e) {
                          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, tG.X)(e.endsAt);
                          switch (e.tenantMetadata?.collectibles?.type) {
                              case W.hE.COLLECT_AND_CLAIM:
                                  if (e.rewardStatus !== X.GM.IN_PROGRESS) return null;
                                  let n = e.progress;
                                  if (null == n) return null;
                                  let i =
                                      null != t && t > 0 ? Z.intl.formatToPlainString(Z.t.w4GEvw, { days: t }) : null;
                                  return {
                                      label: Z.intl.formatToPlainString(Z.t["8XhAe3"], {
                                          current: n.current,
                                          target: n.target,
                                      }),
                                      countdown: i,
                                  };
                              case W.hE.TARGETED_OFFER:
                              default:
                                  return null;
                          }
                      })(I, y)
                    : null,
            [I, y],
        ),
        P = (0, to.h)(n),
        { isPurchased: S, isPartiallyOwnedBundle: D } = (0, to.h)(i),
        { isDisabled: b } = (0, ex.I)(i.skuId),
        w = (0, _.Zu)({ product: i, isPartiallyOwnedBundle: D, isPurchased: S }),
        B = (0, o.bG)([td.A], () => td.A.isClaiming === i?.skuId),
        M = (0, ti.Ay)(),
        U = (0, e5.M)(M),
        H = (0, _.G0)(i),
        z = (0, _.yt)(i, O.lid.DEFAULT),
        $ = z?.amount === 0,
        Y = (0, tw.X)(i),
        q = k ? K.Hi.FIAT : c === K.G2.ORBS && a ? K.Hi.ORBS : void 0,
        { checkoutEligiblePrices: J, hasSufficientOrbs: Q } = (0, tM.F)({
            product: i,
            hasShopDiscount: j,
            prioritizedCurrency: q,
        }),
        ee = r.useMemo(() => (0, _.fT)(i, j, J[0]?.currency), [i, j, J]),
        et = r.useMemo(() => J.some((e) => e.currency === tP.Yr.DISCORD_ORB), [J]);
    (0, ta.W0)({ disableFetch: !et });
    let en = r.useCallback(() => {
        (g(K.sH.BUY_WITH_FIAT),
            (0, ts.A)({
                skuId: i.skuId,
                analyticsLocations: m,
                discoverySessionId: E,
                onClose: (e) => (e ? x() : (0, tP.tE)()),
            }));
    }, [m, x, i.skuId, g, E]);
    return (0, s.jsxs)("div", {
        className: tU.iw,
        children: [
            P.isPurchased || P.isPartiallyOwnedBundle
                ? (0, s.jsx)(tx, { className: tU.On, isPartiallyPurchased: D })
                : H
                  ? (0, s.jsxs)("div", {
                        className: tU.pq,
                        children: [
                            (0, s.jsx)(G.E, { variant: "text-md/semibold", children: Z.intl.string(Z.t.rt69oo) }),
                            !S &&
                                (0, s.jsx)(G.E, {
                                    className: F()(tU.ed, !U && tU.un),
                                    variant: "text-xxs/normal",
                                    children: Z.intl.string(Z.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, s.jsx)(tb, {
                        prices: J,
                        product: i,
                        hasShopDiscount: j,
                        discountSource: N,
                        discount: ee,
                        hasSufficientOrbs: Q,
                        isProductDisabled: b,
                        onTrackClick: g,
                    }),
            null != L && (0, s.jsx)(tH, { ...L }),
            (0, s.jsx)(tn.B, {
                direction: "vertical",
                gap: 8,
                children: (function () {
                    if (H && !v && !$) {
                        var e;
                        return (
                            (e = Z.intl.string(Z.t.sEAnVH)),
                            (0, s.jsx)(tr.A, {
                                subscriptionTier: eV.pe.TIER_2,
                                fullWidth: !0,
                                buttonTextOverride: e,
                                onClick: () => {
                                    (g(K.sH.UNLOCK_WITH_NITRO), (0, th.M)());
                                },
                                onSubscribeModalClose: () => {
                                    (0, th.t)({
                                        product: n,
                                        category: l,
                                        shouldCheckoutWithOrbs: a,
                                        returnRef: p,
                                        analyticsLocations: m,
                                        tab: c,
                                        giftRecipient: d,
                                        giftingOrigin: u,
                                        cardId: h,
                                        sessionId: E,
                                        tilePosition: f,
                                    });
                                },
                            })
                        );
                    }
                    return w
                        ? S
                            ? Y
                                ? (0, s.jsxs)(tt.e, {
                                      wrap: !1,
                                      fullWidth: !0,
                                      children: [
                                          (0, s.jsx)(tv, { product: i, onSuccess: x, onTrackClick: g }),
                                          (0, s.jsx)(tg.A, {
                                              primary: !0,
                                              product: i,
                                              onSuccess: x,
                                              giftRecipient: d,
                                              giftingOrigin: u,
                                              onTrackClick: g,
                                          }),
                                      ],
                                  })
                                : (0, s.jsx)(tv, { product: i, onSuccess: x, onTrackClick: g })
                            : H
                              ? (0, s.jsx)(e7.$, {
                                    loading: B,
                                    loadingStartedLabel: Z.intl.string(Z.t["TYw+9s"]),
                                    loadingFinishedLabel: Z.intl.string(Z.t.Pg1UP5),
                                    onClick: async () => {
                                        (g(K.sH.ADD_TO_COLLECTION),
                                            await (0, R.iJ)(i.skuId),
                                            x(),
                                            (0, tF.A)({
                                                product: i,
                                                analyticsLocations: m,
                                                purchaseType: K.gs.PREMIUM_PURCHASE,
                                            }));
                                    },
                                    text: Z.intl.string(Z.t.zp6caO),
                                    fullWidth: !0,
                                })
                              : (0, s.jsx)(s.Fragment, {
                                    children: J.map((e, t) => {
                                        let n,
                                            l,
                                            a,
                                            c,
                                            o,
                                            p = 0 === t,
                                            h =
                                                e.currency === tP.Yr.DISCORD_ORB
                                                    ? ((n = b ? Z.intl.string(Z.t.cTdr3x) : Z.intl.string(Z.t.zqh7ZM)),
                                                      (l = !Q || b),
                                                      (a = Z.intl.formatToPlainString(Z.t.yi41qQ, {
                                                          orbPrice: e.amount,
                                                      })),
                                                      (c = l ? `${a}, ${n}` : a),
                                                      (0, s.jsx)(e4.m, {
                                                          position: "top",
                                                          text: n,
                                                          shouldShow: l,
                                                          "aria-label": !1,
                                                          children: (0, s.jsx)(e7.$, {
                                                              variant: p ? "primary" : "secondary",
                                                              onClick: function () {
                                                                  (g(K.sH.BUY_WITH_ORBS),
                                                                      (0, A.B4)({
                                                                          skuId: i.skuId,
                                                                          onComplete: (e) => {
                                                                              ((0, R.gB)(),
                                                                                  x(),
                                                                                  (0, tF.A)({
                                                                                      product: i,
                                                                                      analyticsLocations: m,
                                                                                      itemConsumed:
                                                                                          e?.entitlements?.[0]
                                                                                              ?.consumed,
                                                                                      purchaseType: K.gs.ORB,
                                                                                  }));
                                                                          },
                                                                          analyticsLocations: m,
                                                                          discoverySessionId: E,
                                                                      }));
                                                              },
                                                              disabled: l,
                                                              "aria-label": c,
                                                              text: Z.intl.format(Z.t.JC15qj, {
                                                                  orbPrice: e.amount,
                                                                  orbIconHook: () =>
                                                                      (0, s.jsx)(te.C, {
                                                                          className: tU.fN,
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                              }),
                                                              fullWidth: !0,
                                                          }),
                                                      }))
                                                    : ((o =
                                                          T ??
                                                          Z.intl.formatToPlainString(Z.t["cNSL/j"], {
                                                              price: (0, tc.$g)(e.amount, e.currency),
                                                          })),
                                                      (0, s.jsxs)(tt.e, {
                                                          wrap: !1,
                                                          fullWidth: !0,
                                                          children: [
                                                              (0, s.jsx)(e7.$, {
                                                                  variant: p ? "primary" : "secondary",
                                                                  onClick: en,
                                                                  text: o,
                                                                  fullWidth: !0,
                                                              }),
                                                              Y &&
                                                                  (0, s.jsx)(tg.A, {
                                                                      primary: p,
                                                                      product: i,
                                                                      onSuccess: x,
                                                                      giftRecipient: d,
                                                                      giftingOrigin: u,
                                                                      onTrackClick: g,
                                                                  }),
                                                          ],
                                                      }));
                                        return (0, s.jsx)(r.Fragment, { children: h }, e.currency);
                                    }),
                                })
                        : Y
                          ? (0, s.jsx)(tg.A, {
                                primary: !0,
                                product: i,
                                onSuccess: x,
                                fullWidth: !0,
                                giftRecipient: d,
                                giftingOrigin: u,
                                onTrackClick: g,
                            })
                          : null;
                })(),
            }),
        ],
    });
}
var tV = n(634656);
function tX(e) {
    let {
            productRecord: t,
            selectedProduct: n,
            previewingProduct: i,
            user: r,
            selectedBundleSlide: l,
            pendingProfile: a,
        } = e,
        c = e0(t);
    return (0, s.jsxs)("div", {
        className: F()(tV.wd, { [tV.E7]: null != c.LeftPreview }),
        children: [
            (0, s.jsx)("div", {
                className: tV.dL,
                children: (0, s.jsx)(e3, { productRecord: t, selectedProduct: n, selectedBundleSlide: l }),
            }),
            null != c.LeftPreview &&
                (0, s.jsx)("div", {
                    className: tV._E,
                    children: (0, s.jsx)(c.LeftPreview, {
                        user: r,
                        selectedProduct: n,
                        previewingProduct: i,
                        productRecord: t,
                        selectedBundleSlide: l,
                        pendingProfile: a,
                    }),
                }),
            (0, s.jsx)("div", { className: tV.F_, children: (0, s.jsx)(c.Info, { ...e }) }),
            (0, s.jsx)(tz, { ...e }),
        ],
    });
}
var tW = n(529756),
    tZ = n(408278),
    t$ = n(972213),
    tY = n(156248),
    tq = n(753704),
    tJ = n(60465),
    tK = n(976860),
    tQ = n(38145),
    t0 = n(365491),
    t1 = n(668953),
    t2 = n(881636),
    t8 = n(807562);
function t6(e) {
    let { goPrev: t, goNext: n } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: t8.Y,
                children: (0, s.jsx)(tZ.K, {
                    "aria-label": Z.intl.string(Z.t["3NdvMK"]),
                    onClick: t,
                    icon: t1.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, s.jsx)("div", {
                className: t8.K,
                children: (0, s.jsx)(tZ.K, {
                    "aria-label": Z.intl.string(Z.t.RYIeOX),
                    onClick: n,
                    icon: t2.u,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
}
var t3 = n(48062);
function t5(e) {
    let {
            user: t,
            pendingProfile: n,
            productRecord: i,
            previewingProduct: l,
            selectedProduct: a,
            selectedVariantIndex: c,
            selectedBundleSlide: d,
            setSelectedBundleSlide: o,
            isClosing: u,
            isOrbCheckoutModalOpen: m,
            pdpBackground: p,
            category: x,
            tab: g,
            onClose: h,
            onTrackClick: E,
        } = e,
        f = e0(i),
        v = (0, _.aw)(a),
        N = v ? a.items.length : 0,
        A = (function () {
            let { sessionId: e } = (0, C.uM)() ?? {},
                t = (0, t0.v)((e) => e.reset);
            return r.useCallback(
                (n, i) => {
                    if (
                        (I.default.track(O.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: e,
                            sku_id: n.skuId,
                            cta_name: i,
                        }),
                        (0, tQ.M)(),
                        (0, tJ.p)(),
                        !0 !== n.isOrbsExclusive)
                    )
                        return void (0, tK.pX)(O.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n.skuId));
                    t();
                    let s = O.BVt.COLLECTIBLES_SHOP_WITH_TAB(K.G2.ORBS);
                    (0, tK.pX)(`${s}&${K.P1}=${n.skuId}`);
                },
                [e, t],
            );
        })(),
        j = r.useCallback(() => {
            (E(K.sH.GO_TO_COLLECTION), h(), A(x, "go_to_collection_button"));
        }, [x, h, E, A]),
        R = r.useCallback(() => {
            N <= 1 || o((e) => (e - 1 + N) % N);
        }, [N, o]),
        y = r.useCallback(() => {
            N <= 1 || o((e) => (e + 1) % N);
        }, [N, o]),
        T = r.useCallback(
            (e) => {
                if (N <= 1) return;
                let t = e.target;
                "INPUT" === t.tagName ||
                    "TEXTAREA" === t.tagName ||
                    t.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), R())
                        : "ArrowRight" === e.key && (e.preventDefault(), y()));
            },
            [N, R, y],
        ),
        k = r.useCallback(() => {
            (E(K.sH.CLOSE_DETAIL), h());
        }, [E, h]),
        L = r.useRef(null),
        S = r.useRef(!0);
    return (
        r.useLayoutEffect(() => {
            if (S.current) {
                S.current = !1;
                return;
            }
            let e = L.current;
            null != e && ((e.style.animation = "none"), e.offsetHeight, (e.style.animation = ""));
        }, [d]),
        (0, s.jsxs)("div", {
            className: F()(t3.i1, (0, K.EZ)(a.skuId) ? t3.bF : a.type === D.R.AVATAR_DECORATION ? t3.Jq : t3.eF),
            style: null != p ? { backgroundImage: `url(${p})` } : void 0,
            onKeyDown: T,
            children: [
                (0, s.jsx)("div", {
                    className: t3.GV,
                    children: (0, s.jsx)(e4.m, {
                        text: Z.intl.string(Z.t["Hr/q/6"]),
                        children: (0, s.jsx)(e7.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: tW.c,
                            text: x.name,
                            onClick: j,
                        }),
                    }),
                }),
                (0, s.jsx)("div", {
                    className: t3.KR,
                    ref: L,
                    children: (0, s.jsx)(f.RightPreview, {
                        user: t,
                        pendingProfile: n,
                        productRecord: i,
                        selectedProduct: a,
                        previewingProduct: l,
                        selectedBundleSlide: d,
                        isClosing: u,
                        isOrbCheckoutModalOpen: m,
                    }),
                }),
                v && N > 1 && (0, s.jsx)(t6, { goPrev: R, goNext: y }),
                (0, s.jsxs)("div", {
                    className: t3.VG,
                    children: [
                        (0, s.jsx)(tq.R, {
                            product: i,
                            selectedVariantIndex: c,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: E,
                        }),
                        (0, s.jsx)(tY.H, {
                            skuId: a.skuId,
                            product: a,
                            productName: (0, P.VG)(a),
                            tab: g,
                            onTrackClick: E,
                        }),
                        (0, s.jsx)(tZ.K, {
                            "aria-label": Z.intl.string(Z.t.cpT0Cq),
                            onClick: k,
                            icon: t$.XLargeIcon,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            ],
        })
    );
}
var t9 = n(80801);
let t4 = (0, u.FT)(u._3.SIZE_152),
    t7 = function (e) {
        let {
                transitionState: t,
                onClose: n,
                product: i,
                category: l,
                returnRef: u,
                analyticsSource: D,
                analyticsLocations: M,
                shouldCheckoutWithOrbs: F,
                tab: G,
                giftRecipient: U,
                giftingOrigin: H,
            } = e,
            z = (0, o.bG)([j.default], () => j.default.getCurrentUser()),
            V = (0, o.cf)([v.A], () => v.A.getPendingChanges()),
            X = (0, B.f)(i),
            { previewingVariantIndex: W } = X,
            Z = (0, y.Q)(i),
            $ = b(i, W),
            Y = (0, L.rb)(i, Z);
        a()(null != Y, "Selected product should not be null");
        let { analyticsLocations: q } = (0, g.Ay)([...M, x.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, S.Yr)(Y.skuId);
        let J = (0, w.U1)(l),
            [K, Q] = r.useState(0);
        r.useEffect(() => {
            null != z && (0, N.A)(z.id, z.getAvatarURL(void 0, 80));
        }, [z]);
        let ee = r.useMemo(() => (0, _.V6)(i.type, i.skuId), [i.type, i.skuId]);
        r.useEffect(() => {
            (I.default.track(O.HAw.OPEN_MODAL, {
                type: O.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: D,
                location_stack: q,
                sku_id: Y.skuId,
                product_type: ee,
            }),
                (0, R.RD)(Y.skuId));
        }, [D, q, Y.skuId, ee]);
        let { cardId: et, sessionId: en, tilePosition: ei } = (0, C.uM)() ?? {},
            es = r.useMemo(() => (0, L.v8)(i), [i]),
            er = (function (e) {
                let { skuId: t, productSkuIds: n, analyticsLocations: i } = e,
                    { cardId: s, sessionId: l } = (0, C.uM)() ?? {},
                    a = (0, k.o)(),
                    c = (0, _.xM)(a);
                return r.useCallback(
                    (e, r) => {
                        I.default.track(O.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                            sku_id: r ?? t,
                            cta: e,
                            shop_session_id: l,
                            card_id: s,
                            product_sku_ids: n,
                            location_stack: i,
                            discount_source: (0, _.b_)(c),
                        });
                    },
                    [t, i, s, n, l, c],
                );
            })({ skuId: Y.skuId, productSkuIds: es, analyticsLocations: q });
        (0, h.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: Y.skuId,
                card_id: et,
                shop_session_id: en,
                position_in_section: ei,
                product_sku_ids: es,
                location_stack: q,
            },
        });
        let el = (0, A.o6)(),
            ea = t === m.ip.EXITING,
            ec = (0, T.c)("product_details_modal");
        if (null == z || (i.skuId === d.j.PREMIUM_TIER_2_1_DAY && !ec)) return null;
        let ed = {
                pendingChanges: V,
                pendingAvatarSrc:
                    void 0 !== V.pendingAvatar
                        ? (0, E.sv)((0, f.V7)({ userId: z.id, image: V.pendingAvatar, size: t4 }), null, z, {
                              size: t4,
                          })
                        : void 0,
            },
            eo = (0, P.VG)(i),
            eu = {
                user: z,
                pendingProfile: ed,
                productRecord: i,
                productName: eo,
                selectedProduct: Y,
                previewingProduct: $ ?? null,
                category: l,
                selectedVariantIndex: Z,
                previewingVariantIndexProps: X,
                selectedBundleSlide: K,
                setSelectedBundleSlide: Q,
                tab: G,
                shouldCheckoutWithOrbs: F,
                giftRecipient: U?.id !== z.id ? U : void 0,
                giftingOrigin: U?.id !== z.id ? H : void 0,
                analyticsLocations: q,
                returnRef: u,
                onClose: n,
                onTrackClick: er,
            };
        return (0, s.jsx)(g.f5, {
            value: q,
            children: (0, s.jsx)(p.d, {
                returnRef: u,
                transitionState: t,
                onClose: n,
                size: "xl",
                paddingSize: "sm",
                "aria-label": eo,
                children: (0, s.jsx)("div", {
                    className: t9.C,
                    children: (0, s.jsxs)("div", {
                        className: t9.j,
                        children: [
                            (0, s.jsx)(tX, { ...eu }),
                            (0, s.jsx)(t5, { ...eu, isClosing: ea, isOrbCheckoutModalOpen: el, pdpBackground: J }),
                        ],
                    }),
                }),
            }),
        });
    };
