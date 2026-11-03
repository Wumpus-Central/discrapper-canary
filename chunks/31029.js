t.d(n, { default: () => n4 });
var i,
    s = t(477900),
    r = t(582128),
    l = t(284009),
    a = t.n(l),
    c = t(131937),
    o = t(334279),
    d = t(702841),
    u = t(778712),
    m = t(231723),
    p = t(224640),
    g = t(793574),
    x = t(688810),
    f = t(139286),
    h = t(252732),
    E = t(101058),
    v = t(836602),
    N = t(903209),
    A = t(652165),
    j = t(287809),
    I = t(174459),
    y = t(815996),
    R = t(440938),
    C = t(298072),
    _ = t(993408),
    k = t(503089),
    T = t(331884),
    O = t(652215),
    L = t(623373),
    P = t(536572),
    b = t(177366),
    S = t(575593);
function D(e, n) {
    return e.type === S.R.VARIANTS_GROUP ? (null != n ? e.variants?.[n] : void 0) : e;
}
var w = t(212407),
    B = t(935094),
    M = t(503698),
    F = t.n(M),
    G = t(834730),
    U = t(939249),
    H = t(534514),
    z = t(14702),
    V = t(818296),
    X = t(288106),
    W = t(604913);
t(321073);
var Z = t(105292);
function $(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (n) return Z.intl.formatToPlainString(Z.t["/0Yndu"], { num: e.bundledProducts?.length });
    let t = e.bundledProducts ?? [],
        i = [],
        s = !1;
    for (let e of t)
        switch (e.type) {
            case S.R.AVATAR_DECORATION:
                i.push(Z.intl.formatToPlainString(Z.t.Ntv9Jt, { itemName: e.name }));
                break;
            case S.R.PROFILE_EFFECT:
                i.push(Z.intl.formatToPlainString(Z.t["3Y8q7a"], { itemName: e.name }));
                break;
            case S.R.NAMEPLATE:
                (i.push(Z.intl.formatToPlainString(Z.t["2keXky"], { itemName: e.name })), (s = !0));
        }
    if (s) {
        let e = i.join(", ").replace(/, ([^,]*)$/, " & $1");
        return Z.intl.formatToPlainString(Z.t.Ofrqj6, { joinedItems: e });
    }
    let r = i.join(" & ");
    return Z.intl.formatToPlainString(Z.t.Ofrqj6, { joinedItems: r });
}
var q = t(306396);
function Y(e) {
    return (0, _.aw)(e)
        ? Z.intl.formatToPlainString(Z.t["1tUCAO"], { count: e.items.length })
        : (function (e) {
              let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (null != e && null != e.summary && "" !== e.summary) {
                  if (e.type === S.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                      let t = $(e, n);
                      return e.summary.replace("{joinedItems}", t);
                  }
                  return e.summary;
              }
              switch (e?.type) {
                  case S.R.AVATAR_DECORATION:
                      return Z.intl.string(Z.t["3lv7q2"]);
                  case S.R.PROFILE_EFFECT:
                      return Z.intl.string(Z.t.VhJL72);
                  case S.R.NAMEPLATE:
                      return Z.intl.string(Z.t.ik37EZ);
                  case S.R.PROFILE_FRAME:
                      return Z.intl.string(Z.t.fWzWPp);
                  case S.R.BUNDLE:
                      return $(e, n);
                  default:
                      return "";
              }
          })(e);
}
function J(e) {
    let n = (0, V.g)(e);
    if (null != n) {
        let t = Y(e);
        switch (n.tenantMetadata?.collectibles?.type) {
            case W.hE.COLLECT_AND_CLAIM:
                if (n.rewardStatus !== X.GM.IN_PROGRESS) return t;
                if ((0, _.aw)(e))
                    return Z.intl.formatToPlainString(Z.t["vI+3Ok"], {
                        itemCount: (0, q.oO)(e, n.tenantMetadata.collectibles.collectionId),
                    });
                return Z.intl.formatToPlainString(Z.t.wBhFsO, { itemDescription: t.replace(/\.$/, "") });
            case W.hE.TARGETED_OFFER:
            default:
                return t;
        }
    }
    return Y(e);
}
var K = t(758836),
    Q = t(690901);
function ee(e) {
    let { name: n, typeLabel: t } = e;
    return (0, s.jsxs)(G.E, {
        variant: "body-sm/medium",
        className: Q.mC,
        "aria-live": "polite",
        children: [
            (0, s.jsx)("span", { className: Q.kx, children: n }),
            null != t && (0, s.jsx)("span", { className: Q.FP, children: t }),
        ],
    });
}
let en = { [S.R.AVATAR_DECORATION]: !0, [S.R.PROFILE_FRAME]: !0 };
function et(e) {
    let { item: n, index: t, isSelected: i, setSelected: l, label: a, trackedSkuId: c, onTrackClick: o } = e,
        d = r.useMemo(() => ({ skuId: n.skuId, type: n.type, items: [n] }), [n]),
        u = r.useCallback(() => {
            (o(K.sH.BUNDLE_VIEW_PRODUCT, c), l(t));
        }, [o, c, l, t]),
        m = !0 === en[n.type];
    return (0, s.jsx)(U.D, {
        tag: "div",
        role: "radio",
        "aria-checked": i,
        tabIndex: i ? 0 : -1,
        className: F()(Q.xn, { [Q.Y4]: i, [Q.u8]: m }),
        onClick: u,
        "aria-label": a,
        children: (0, s.jsx)("div", { className: Q.Yf, children: (0, s.jsx)(z.O, { product: d }) }),
    });
}
var ei = t(442759),
    es = t(344346),
    er = t(139136),
    el = t(395744),
    ea = t(929283),
    ec = t(650228);
function eo(e) {
    let {
        item: n,
        user: t,
        bundleFirstAvatarDecoration: i,
        isBundle: r,
        pendingAvatarSrc: l,
        pendingAvatarDecoration: a,
        pendingDisplayNameStyles: c,
        pendingGlobalName: o,
    } = e;
    switch (n.type) {
        case S.R.AVATAR_DECORATION:
            return (0, s.jsx)("div", {
                className: ec.h1,
                children: (0, s.jsx)(ea.i, { user: t, item: n, avatarSrcOverride: l, isHighlighted: !0 }),
            });
        case S.R.PROFILE_EFFECT:
            return (0, s.jsx)("div", {
                className: r ? ec.sm : ec.VY,
                children: (0, s.jsx)(er.A, {
                    skuId: n.skuId,
                    removeSetHeight: !0,
                    isHighlighted: !0,
                    delayProfileEffectIntro: !0,
                }),
            });
        case S.R.PROFILE_FRAME:
            return (0, s.jsx)("div", { className: r ? ec.ob : ec.fE, children: (0, s.jsx)(el.A, { frame: n }) });
        case S.R.NAMEPLATE:
            return (0, s.jsx)("div", {
                className: ec.Dz,
                children: (0, s.jsx)(es.A, {
                    className: ec.M4,
                    nameplate: n,
                    user: t,
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
function ed(e) {
    let { user: n, selectedProduct: t, previewingProduct: i, selectedBundleSlide: r, pendingProfile: l } = e,
        a = i ?? t,
        { firstAvatarDecoration: c } = (0, ei.f5)(a),
        { pendingChanges: o, pendingAvatarSrc: d } = l,
        u = a.items[r] ?? a.items[0];
    return null == u
        ? null
        : (0, s.jsx)(eo, {
              item: u,
              user: n,
              bundleFirstAvatarDecoration: c,
              isBundle: (0, _.aw)(a),
              pendingAvatarSrc: d,
              pendingAvatarDecoration: o.pendingAvatarDecoration,
              pendingDisplayNameStyles: o.pendingDisplayNameStyles,
              pendingGlobalName: o.pendingGlobalName,
          });
}
var eu = t(846957);
function em(e) {
    let { selectedProduct: n, previewingProduct: t } = e;
    return (0, s.jsx)(eu.B, { product: t ?? n });
}
var ep = t(975571),
    eg = t(740076),
    ex = t(661847),
    ef = t(422460);
function eh(e) {
    let { skuId: n } = e;
    return (0, K.EZ)(n)
        ? (0, s.jsx)(G.E, {
              variant: "body-sm/normal",
              className: ef.CU,
              children: Z.intl.format(Z.t.Q1scdE, {
                  helpdeskArticle: ep.A.getArticleURL(O.MVz.FRACTIONAL_PREMIUM_ABOUT),
              }),
          })
        : null;
}
function eE(e) {
    let { productRecord: n, productName: t, selectedProduct: i, previewingVariantIndexProps: l } = e,
        { previewingVariantIndex: a, handleEntering: c, handleLeaving: o } = l,
        d = D(n, a) ?? i,
        u = J(d),
        { disabledReason: m } = (0, eg.I)(i.skuId),
        p = (0, C.Q)(n),
        g = (0, L.B1)(n),
        x = g ? n.variants[a ?? p] : null,
        f = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            null != f.current && ((f.current.tabIndex = -1), f.current.focus());
        }, []),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: ef.sn,
                    children: [
                        (0, s.jsx)(H.D, { ref: f, variant: "heading-xl/semibold", className: ef.R_, children: t }),
                        (0, s.jsx)(G.E, { variant: "body-sm/normal", children: u }),
                        (0, s.jsx)(eh, { skuId: d.skuId }),
                        null !== m && (0, s.jsx)(G.E, { variant: "body-xs/normal", className: ef.H$, children: m }),
                    ],
                }),
                g &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != x &&
                                (0, s.jsx)(G.E, {
                                    variant: "body-xs/medium",
                                    color: "text-subtle",
                                    className: ef.a9,
                                    lineClamp: 1,
                                    children: Z.intl.format(Z.t.EcaRWt, {
                                        value: (0, s.jsx)("span", { className: ef.I8, children: x.variantLabel }),
                                    }),
                                }),
                            (0, s.jsx)("div", {
                                className: ef._x,
                                children: (0, s.jsx)(ex.A, {
                                    skuId: n.skuId,
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
var ev =
        (((i = {}).COLLECTIBLE = "COLLECTIBLE"),
        (i.BUNDLE = "BUNDLE"),
        (i.EXTERNAL_ORB_BADGE = "EXTERNAL_ORB_BADGE"),
        (i.EXTERNAL_FRACTIONAL_NITRO = "EXTERNAL_FRACTIONAL_NITRO"),
        (i.EXTERNAL_GENERIC = "EXTERNAL_GENERIC"),
        i),
    eN = t(97808),
    eA = t(346055),
    ej = t(993077),
    eI = t(245604),
    ey = t(460905),
    eR = t(262295),
    eC = t(685073),
    e_ = t(320095),
    ek = t(963852),
    eT = t(763754),
    eO = t(20851),
    eL = t(986687),
    eP = t(24482),
    eb = t(780898),
    eS = t(158008);
function eD(e) {
    let { user: n, innerClassName: t } = e;
    return (0, s.jsx)("div", {
        className: eS.mV,
        children: (0, s.jsx)(eR.A, {
            avatar: (0, s.jsx)(eN.eu, {
                src: n.avatarSrc,
                size: u._3.SIZE_32,
                "aria-label": n.name,
                status: O.clD.ONLINE,
            }),
            name: n.name,
            innerClassName: F()(eS.$L, t),
        }),
    });
}
function ew(e) {
    let { user: n, nameplate: t, avatarDecoration: i, pendingDisplayNameStyles: r, pendingGlobalName: l } = e,
        a = (0, eb.Ov)();
    return (0, s.jsx)("div", {
        className: eS.nJ,
        role: "img",
        "aria-label": Z.intl.formatToPlainString(Z.t["95pCSf"], { a11y_text: t.label }),
        children: (0, s.jsxs)(eA.M, {
            children: [
                (0, s.jsx)(eD, { user: a.mallow, innerClassName: eS.ab }),
                (0, s.jsxs)(G.E, {
                    variant: "body-sm/semibold",
                    className: eS.OS,
                    children: [Z.intl.string(Z.t["yzW/fZ"]), " - 3"],
                }),
                (0, s.jsx)(eD, { user: a.phibi, innerClassName: eS.e9 }),
                (0, s.jsx)("div", {
                    className: eS.mV,
                    children: (0, s.jsx)(es.A, {
                        className: eS.M4,
                        innerClassName: eS.e9,
                        user: n,
                        nameplate: t,
                        showStatus: !0,
                        isHighlighted: !0,
                        skipEffectDisplayName: !0,
                        pendingAvatarDecoration: i,
                        pendingDisplayNameStyles: r,
                        pendingGlobalName: l,
                        hideDecorators: !0,
                    }),
                }),
                (0, s.jsx)(eD, { user: a.locke, innerClassName: eS.e9 }),
                (0, s.jsxs)(G.E, {
                    variant: "body-sm/semibold",
                    className: eS.OS,
                    children: [Z.intl.string(Z.t["NG43/6"]), " - 12"],
                }),
                (0, s.jsx)(eD, { user: a.boom, innerClassName: eS.bD }),
                (0, s.jsx)(eD, { user: a.cherry, innerClassName: eS.bD }),
            ],
        }),
    });
}
function eB(e) {
    let {
            user: n,
            avatarDecoration: t,
            pendingAvatarSrc: i,
            pendingPrimaryGuildId: r,
            pendingDisplayNameStyles: l,
            pendingGlobalName: a,
        } = e,
        c = (function (e) {
            let { author: n } = e;
            return (0, e_.rh)({
                ...(0, ek.Ay)({ author: n, channelId: "1337", content: Z.intl.string(Z.t.d5YwK5) }),
                state: O.cmJ.SENT,
                id: "0",
            });
        })({ author: n }),
        o = (0, eC.gS)(r),
        d = (0, eT.p_)(c),
        u = {
            ...d,
            nick:
                void 0 !== a
                    ? (0, h.eh)({ pendingNickname: void 0, pendingGlobalName: a, user: n, guildMember: null })
                    : d.nick,
            primaryGuild: void 0 !== r ? o : d.primaryGuild,
            displayNameStyles: void 0 !== l ? l : d.displayNameStyles,
        };
    return (0, s.jsx)("div", {
        role: "img",
        "aria-label": Z.intl.string(Z.t["TN+ZvB"]),
        children: (0, s.jsx)(eA.M, {
            children: (0, s.jsxs)(ej.Z, {
                className: eS.f7,
                outline: !0,
                "aria-hidden": !0,
                children: [
                    (0, s.jsx)(
                        eO.A,
                        {
                            className: eS.G5,
                            author: u,
                            message: c,
                            avatarDecorationOverride: t ?? null,
                            avatarOverride: i,
                        },
                        c.id,
                    ),
                    (0, s.jsxs)("div", {
                        className: eS.lG,
                        children: [
                            (0, s.jsx)(eI.U, { size: "md", color: "currentColor", className: eS.hq }),
                            (0, s.jsx)(ey.n, { size: "md", color: "currentColor", className: eS.hq }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function eM(e) {
    let { product: n, user: t, pendingProfile: i, activeBundleSlide: r } = e,
        l = eP.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: a, ...c } = i.pendingChanges,
        o = i.pendingAvatarSrc,
        d = n.type === S.R.BUNDLE ? n.items[r ?? 0] : void 0,
        u = d?.type ?? n.type,
        m = u === S.R.AVATAR_DECORATION,
        p = u === S.R.PROFILE_EFFECT || u === S.R.PROFILE_FRAME,
        { firstAvatarDecoration: g, firstProfileEffect: x, firstNameplate: f, firstProfileFrame: h } = (0, ei.f5)(n),
        E = d?.type === S.R.AVATAR_DECORATION ? d : g,
        v = d?.type === S.R.PROFILE_EFFECT ? d : x,
        N = d?.type === S.R.PROFILE_FRAME ? d : h,
        A = d?.type === S.R.NAMEPLATE ? d : f;
    if (u === S.R.NAMEPLATE && null != A)
        return (0, s.jsx)("div", {
            className: eS.Zj,
            children: (0, s.jsx)(ew, {
                user: t,
                nameplate: A,
                avatarDecoration: E ?? c.pendingAvatarDecoration,
                pendingDisplayNameStyles: c.pendingDisplayNameStyles,
                pendingGlobalName: c.pendingGlobalName,
            }),
        });
    return (0, s.jsx)("div", {
        className: m ? eS.RA : eS.hZ,
        children: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(eL.A, {
                    ...c,
                    pendingAvatar: o,
                    user: t,
                    canUsePremiumCustomization: l,
                    pendingAvatarDecoration: E ?? c.pendingAvatarDecoration,
                    pendingProfileEffect: v ?? c.pendingProfileEffect,
                    profileEffectRestartKey: r,
                    pendingProfileFrame: N ?? c.pendingProfileFrame,
                    disabledInputs: !0,
                    hideMessageInput: !p,
                    hideCustomStatus: !0,
                    hideBioSection: m,
                    hideExampleButton: !0,
                    interactive: !1,
                    className: m ? eS.oB : void 0,
                }),
                m &&
                    (0, s.jsx)(eB, {
                        user: t,
                        avatarDecoration: E,
                        pendingAvatarSrc: o,
                        pendingPrimaryGuildId: c.pendingPrimaryGuildId,
                        pendingDisplayNameStyles: c.pendingDisplayNameStyles,
                        pendingGlobalName: c.pendingGlobalName,
                    }),
            ],
        }),
    });
}
function eF(e) {
    let { user: n, pendingProfile: t, selectedProduct: i, previewingProduct: r, selectedBundleSlide: l } = e;
    return (0, s.jsx)(eM, { user: n, pendingProfile: t, product: r ?? i, activeBundleSlide: l });
}
var eG = t(478016),
    eU = t(661531),
    eH = t(219882),
    ez = t(224016),
    eV = t(202541),
    eX = t(549848);
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
                children: e.map((e, n) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: eX.UJ,
                            children: [
                                (0, s.jsx)(eG.U, { color: eU.A.colors.WHITE }),
                                (0, s.jsx)(G.E, {
                                    variant: "body-sm/medium",
                                    color: "text-overlay-light",
                                    children: e,
                                }),
                            ],
                        },
                        n,
                    ),
                ),
            }),
        ],
    });
}
var eZ = t(17928),
    e$ = t(132198),
    eq = t(35929);
function eY(e) {
    let { user: n } = e,
        t = eP.Ay.canUsePremiumProfileCustomization(n),
        { pendingAvatar: i, ...r } = (0, eZ.cf)([v.A], () => v.A.getPendingChanges()),
        l = (0, E.V7)({ userId: n.id, image: i });
    return (0, s.jsx)("div", {
        className: eq.k,
        children: (0, s.jsx)(eL.A, {
            ...r,
            pendingAvatar: l,
            user: n,
            pendingBadges: [(0, e$._)()],
            canUsePremiumCustomization: t,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
}
var eJ = t(165416);
function eK(e) {
    let { user: n, productRecord: t, isClosing: i, isOrbCheckoutModalOpen: r } = e;
    return t.skuId === K.Dp.ORB_PROFILE_BADGE
        ? i || r
            ? null
            : (0, s.jsx)(eY, { user: n })
        : (0, K.EZ)(t.skuId)
          ? (0, s.jsx)(eW, {})
          : (0, s.jsx)(eu.B, { product: t, className: eJ.M });
}
let eQ = {
    [ev.COLLECTIBLE]: { LeftPreview: ed, Info: eE, RightPreview: eF },
    [ev.BUNDLE]: {
        LeftPreview: ed,
        Info: function (e) {
            let {
                    productRecord: n,
                    productName: t,
                    selectedBundleSlide: i,
                    setSelectedBundleSlide: l,
                    onTrackClick: a,
                } = e,
                c = n.items,
                o = n.bundledProducts,
                d = o?.[i]?.name,
                u = c[i]?.type,
                m = null != u ? (0, _.Dm)(u) : null,
                p = Z.intl.string(Z.t.cTbdgu),
                g = J(n),
                x = r.useRef(null),
                f = r.useCallback(
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
                let e = x.current;
                if (null == e || !e.contains(document.activeElement)) return;
                let n = e.querySelectorAll('[role="radio"]');
                n[i]?.focus();
            }, [i]);
            let h = r.useRef(null);
            return (
                r.useLayoutEffect(() => {
                    null != h.current && ((h.current.tabIndex = -1), h.current.focus());
                }, []),
                (0, s.jsxs)("div", {
                    className: Q.Qf,
                    children: [
                        (0, s.jsx)(H.D, {
                            ref: h,
                            variant: "heading-xl/semibold",
                            className: Q.R_,
                            title: t,
                            children: t,
                        }),
                        (0, s.jsx)(G.E, { variant: "body-sm/medium", color: "text-default", children: g }),
                        (0, s.jsxs)("div", {
                            className: Q.hZ,
                            children: [
                                (0, s.jsx)("div", {
                                    className: Q.vg,
                                    children: (0, s.jsx)("div", {
                                        ref: x,
                                        className: Q.hK,
                                        role: "radiogroup",
                                        "aria-label": p,
                                        tabIndex: -1,
                                        onKeyDown: f,
                                        children: c.map((e, n) => {
                                            let t = o?.[n]?.name ?? e.skuId,
                                                r = o?.[n]?.skuId ?? e.skuId;
                                            return (0, s.jsx)(
                                                et,
                                                {
                                                    item: e,
                                                    index: n,
                                                    isSelected: n === i,
                                                    setSelected: l,
                                                    label: t,
                                                    trackedSkuId: r,
                                                    onTrackClick: a,
                                                },
                                                e.skuId,
                                            );
                                        }),
                                    }),
                                }),
                                null != d && (0, s.jsx)(ee, { name: d, typeLabel: m }),
                            ],
                        }),
                    ],
                })
            );
        },
        RightPreview: eF,
    },
    [ev.EXTERNAL_ORB_BADGE]: { LeftPreview: em, Info: eE, RightPreview: eK },
    [ev.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: em, Info: eE, RightPreview: eK },
    [ev.EXTERNAL_GENERIC]: { LeftPreview: em, Info: eE, RightPreview: eK },
};
function e0(e) {
    var n;
    return eQ[
        ((n = e),
        (0, K.pQ)(n.skuId)
            ? n.skuId === K.Dp.ORB_PROFILE_BADGE
                ? "EXTERNAL_ORB_BADGE"
                : (0, K.EZ)(n.skuId)
                  ? "EXTERNAL_FRACTIONAL_NITRO"
                  : "EXTERNAL_GENERIC"
            : (0, _.aw)(n)
              ? "BUNDLE"
              : "COLLECTIBLE")
    ];
}
var e1 = t(347478),
    e2 = t(268959),
    e8 = t(325802),
    e3 = t(252125);
function e6(e) {
    let n,
        { productRecord: t, selectedProduct: i, selectedBundleSlide: r } = e,
        l = (0, V.g)(i),
        a = (0, e1.$)(l),
        c = t.type === S.R.BUNDLE ? (t.items[r] ?? t.items[0]) : void 0;
    return (
        (n =
            null != c &&
            !t.hideBadge &&
            null == t.badgeOverride &&
            (0, L.JQ)({ skuId: c.skuId, type: c.type, items: [c] })
                ? (0, s.jsx)(e2.s, {})
                : (0, s.jsx)(e2.A, { skuId: t.skuId })),
        (0, s.jsxs)("div", { className: e3.N, children: [n, null != l && a && (0, s.jsx)(e8.A, { promotion: l })] })
    );
}
var e5 = t(462887),
    e9 = t(278416),
    e4 = t(866665),
    e7 = t(821609),
    ne = t(318254),
    nn = t(825484),
    nt = t(331322),
    ni = t(736653),
    ns = t(44120),
    nr = t(465794),
    nl = t(757036),
    na = t(478996),
    nc = t(580630),
    no = t(4227),
    nd = t(466459),
    nu = t(518865),
    nm = t(885574),
    np = t(495900);
function ng(e) {
    let { className: n, isPartiallyPurchased: t } = e;
    return t
        ? (0, s.jsx)(e4.m, {
              position: "top",
              align: "left",
              text: Z.intl.string(Z.t.y1VWkZ),
              children: (0, s.jsxs)("div", {
                  className: F()(np.GX, n),
                  children: [
                      (0, s.jsx)("span", {
                          className: np.P0,
                          children: (0, s.jsx)(nm.CircleInformationIcon, {
                              size: "md",
                              color: "currentColor",
                              className: np.G,
                          }),
                      }),
                      (0, s.jsx)(G.E, { variant: "body-md/semibold", children: Z.intl.string(Z.t.BEjTij) }),
                  ],
              }),
          })
        : (0, s.jsx)(G.E, { variant: "body-md/semibold", className: n, children: Z.intl.string(Z.t["6cfuDj"]) });
}
var nx = t(878112),
    nf = t(572595),
    nh = t(206835),
    nE = t(450481);
let nv = function (e) {
    let { product: n, onSuccess: t, onTrackClick: i } = e,
        { handleUseNow: r, isApplying: l, canUseNow: a } = (0, nE.p)({ product: n, onSuccess: t }),
        c = (0, nh.A)();
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
                  (i?.(K.sH.EDIT_PROFILE), c(), t?.());
              },
              text: Z.intl.string(Z.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var nN = t(506742),
    nA = t(219103),
    nj = t(282968);
function nI(e) {
    let {
            product: n,
            promoPrice: t,
            hasShopDiscount: i,
            discountSource: r,
            discount: l,
            className: a,
            hideStrikethroughPrice: c = !1,
            discountIconDisplayMode: o,
            discountIconSize: d = "md",
        } = e,
        u = (0, _.WD)(n, { hasShopDiscount: i, discount: l });
    if (null == u) return null;
    let { defaultPrice: m, showDefaultPriceOnly: p } = u;
    if (p)
        return (0, s.jsx)("div", {
            className: F()(nj.kG, a),
            children: (0, s.jsx)(nA.x, { priceAmount: m.amount, priceCurrency: m.currency }),
        });
    let { showDiscountPrice: g, originalPrice: x, finalPrice: f } = u,
        h = g && null != o ? { displayMode: o, source: r ?? _.D0.NITRO, size: d } : void 0;
    return null != t
        ? (0, s.jsxs)("div", {
              className: F()(nj.kG, a),
              children: [
                  (0, s.jsx)(nN.a, { price: f, className: nj.q9 }),
                  (0, s.jsx)(nA.x, {
                      priceAmount: t.amount,
                      priceCurrency: t.currency,
                      className: nj.q9,
                      discountIconConfig: h,
                  }),
              ],
          })
        : (0, s.jsxs)("div", {
              className: F()(nj.kG, a),
              children: [
                  c ? null : (0, s.jsx)(nN.a, { price: x, className: nj.q9 }),
                  (0, s.jsx)(nA.x, {
                      priceAmount: f.amount,
                      priceCurrency: f.currency,
                      discount: l,
                      className: nj.q9,
                      discountIconConfig: h,
                  }),
              ],
          });
}
var ny = t(403581),
    nR = t(181170),
    nC = t(75678),
    n_ = t(843625);
function nk(e) {
    let { text: n, onTrackClick: t } = e,
        { analyticsLocations: i } = (0, x.Ay)(),
        l = r.useRef(null);
    return (0, s.jsx)(U.D, {
        className: n_.F,
        innerRef: l,
        onClick: () => {
            (t?.(K.sH.SUBSCRIBE_NOW),
                (0, nC.A)({ subscriptionTier: eV.pe.TIER_2, analyticsLocations: i, returnRef: l }));
        },
        children: n,
    });
}
var nT = t(329986);
function nO(e) {
    let { product: n, onTrackClick: t } = e,
        i = (0, nR.vF)(n.skuId, "collectibles_shop_nitro_price_upsell"),
        r = (0, _.yt)(n, O.lid.PREMIUM_TIER_2);
    if (null == r) return null;
    let l = (0, nR.f3)({ storefrontPrices: i, premiumPrice: r }) ?? r,
        a = (0, nc.RS)(l.amount, l.currency);
    return (0, s.jsxs)("div", {
        className: nT.k,
        children: [
            (0, s.jsx)(e4.m, {
                text: Z.intl.string(Z.t.MPFyJ5),
                "aria-label": Z.intl.string(Z.t.X3Ekj8),
                children: (0, s.jsx)(ny.t, { size: "md", color: "currentColor", className: nT.o }),
            }),
            (0, s.jsx)(G.E, {
                variant: "body-xs/medium",
                children: Z.intl.format(Z.t.Sv8iic, {
                    price: a,
                    subscribeNowHook: (e) => (0, s.jsx)(nk, { text: e, onTrackClick: t }),
                }),
            }),
        ],
    });
}
var nL = t(818348),
    nP = t(426919);
function nb(e) {
    let { orbPrice: n, isProductDisabled: t, hasSufficientOrbs: i, discount: r } = e,
        l = t ? Z.intl.string(Z.t.wu4gyV) : Z.intl.string(Z.t.eFNRzU),
        a = t || !i;
    return (0, s.jsxs)("div", {
        className: nP.eg,
        children: [
            (0, s.jsx)("div", {
                className: nP.zR,
                children: (0, s.jsx)(G.E, { variant: "body-xs/normal", className: a ? nP.r9 : void 0, children: l }),
            }),
            (0, s.jsx)(nA.x, {
                priceAmount: n.amount,
                priceCurrency: n.currency,
                discount: r,
                className: a ? nP.r9 : void 0,
            }),
        ],
    });
}
function nS(e) {
    let {
        prices: n,
        formerPrices: t,
        hasShopDiscount: i,
        discountSource: r,
        discount: l,
        product: a,
        hasSufficientOrbs: c,
        onTrackClick: o,
        isProductDisabled: d,
    } = e;
    return 0 === n.length
        ? null
        : n[0].currency === nL.Yr.DISCORD_ORB
          ? (0, s.jsx)(nb, { orbPrice: n[0], isProductDisabled: d, hasSufficientOrbs: c, discount: l })
          : (0, s.jsxs)("div", {
                className: nP.eg,
                children: [
                    (0, s.jsxs)("div", {
                        className: nP.pw,
                        children: [
                            (0, s.jsx)(nI, {
                                product: a,
                                promoPrice: null != t[0] ? n[0] : null,
                                discount: l,
                                hasShopDiscount: i,
                                discountSource: r,
                                hideStrikethroughPrice: !i,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                            }),
                            i ? null : (0, s.jsx)(nO, { product: a, onTrackClick: o }),
                        ],
                    }),
                    n.length > 1 &&
                        n[1].currency === nL.Yr.DISCORD_ORB &&
                        (0, s.jsx)(nA.x, {
                            priceAmount: n[1].amount,
                            priceCurrency: n[1].currency,
                            className: d || !c ? nP.r9 : void 0,
                        }),
                ],
            });
}
var nD = t(347722),
    nw = t(497901),
    nB = t(57020),
    nM = t(61750),
    nF = t(808598),
    nG = t(543080);
function nU(e) {
    let { label: n, countdown: t } = e;
    return (0, s.jsxs)("div", {
        className: nG.lo,
        children: [
            (0, s.jsxs)("div", {
                className: nG.fZ,
                children: [
                    (0, s.jsx)(e9.TagIcon, { size: "xs", color: "currentColor", className: nG.CE }),
                    (0, s.jsx)(G.E, { variant: "body-xs/medium", color: "none", children: n }),
                ],
            }),
            null != t && (0, s.jsx)(G.E, { variant: "body-xs/medium", color: "none", children: t }),
        ],
    });
}
function nH(e) {
    let {
            user: n,
            productRecord: t,
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
        { cardId: f, sessionId: h, tilePosition: E } = (0, R.uM)() ?? {},
        v = (0, nl.L)(eV.PremiumTypes.TIER_2),
        N = (0, _.xM)(n),
        j = eP.Ay.canUseShopDiscounts(n),
        I = (0, V.g)(i),
        C = (0, nw.A)(I?.endsAt),
        k = (0, nu.MX)(I),
        T = (0, nu.Jl)(I),
        L = r.useMemo(
            () =>
                null != I
                    ? (function (e) {
                          let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, nF.X)(e.endsAt);
                          switch (e.tenantMetadata?.collectibles?.type) {
                              case W.hE.COLLECT_AND_CLAIM:
                                  if (e.rewardStatus !== X.GM.IN_PROGRESS) return null;
                                  let t = e.progress;
                                  if (null == t) return null;
                                  let i =
                                      null != n && n > 0 ? Z.intl.formatToPlainString(Z.t.w4GEvw, { days: n }) : null;
                                  return {
                                      label: Z.intl.formatToPlainString(Z.t["8XhAe3"], {
                                          current: t.current,
                                          target: t.target,
                                      }),
                                      countdown: i,
                                  };
                              case W.hE.TARGETED_OFFER:
                              default:
                                  return null;
                          }
                      })(I, C)
                    : null,
            [I, C],
        ),
        P = (0, nd.h)(t),
        { isPurchased: b, isPartiallyOwnedBundle: S } = (0, nd.h)(i),
        { isDisabled: D } = (0, eg.I)(i.skuId),
        w = (0, _.Zu)({ product: i, isPartiallyOwnedBundle: S, isPurchased: b }),
        B = (0, d.bG)([no.A], () => no.A.isClaiming === i?.skuId),
        M = (0, ni.Ay)(),
        U = (0, e5.M)(M),
        H = (0, _.G0)(i),
        z = (0, _.yt)(i, O.lid.DEFAULT),
        $ = z?.amount === 0,
        q = (0, nD.X)(i),
        Y = T ? K.Hi.FIAT : c === K.G2.ORBS && a ? K.Hi.ORBS : void 0,
        {
            checkoutEligiblePrices: J,
            checkoutEligibleFormerPrices: Q,
            hasSufficientOrbs: ee,
        } = (0, nB.F)({ product: i, hasShopDiscount: j, prioritizedCurrency: Y }),
        en = r.useMemo(() => (0, _.fT)(i, j, J[0]?.currency), [i, j, J]),
        et = r.useMemo(() => J.some((e) => e.currency === nL.Yr.DISCORD_ORB), [J]);
    (0, na.W0)({ disableFetch: !et });
    let ei = r.useCallback(() => {
        (x(K.sH.BUY_WITH_FIAT),
            (0, ns.A)({
                skuId: i.skuId,
                analyticsLocations: m,
                discoverySessionId: h,
                onClose: (e) => (e ? g() : (0, nL.tE)()),
            }));
    }, [m, g, i.skuId, x, h]);
    return (0, s.jsxs)("div", {
        className: nG.iw,
        children: [
            P.isPurchased || P.isPartiallyOwnedBundle
                ? (0, s.jsx)(ng, { className: nG.On, isPartiallyPurchased: S })
                : H
                  ? (0, s.jsxs)("div", {
                        className: nG.pq,
                        children: [
                            (0, s.jsx)(G.E, { variant: "body-md/semibold", children: Z.intl.string(Z.t.rt69oo) }),
                            !b &&
                                (0, s.jsx)(G.E, {
                                    className: F()(nG.ed, !U && nG.un),
                                    variant: "footnote/normal",
                                    children: Z.intl.string(Z.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, s.jsx)(nS, {
                        prices: J,
                        formerPrices: Q,
                        product: i,
                        hasShopDiscount: j,
                        discountSource: N,
                        discount: en,
                        hasSufficientOrbs: ee,
                        isProductDisabled: D,
                        onTrackClick: x,
                    }),
            null != L && (0, s.jsx)(nU, { ...L }),
            (0, s.jsx)(nt.B, {
                direction: "vertical",
                gap: 8,
                children: (function () {
                    if (H && !v && !$) {
                        var e;
                        return (
                            (e = Z.intl.string(Z.t.sEAnVH)),
                            (0, s.jsx)(nr.A, {
                                subscriptionTier: eV.pe.TIER_2,
                                fullWidth: !0,
                                buttonTextOverride: e,
                                onClick: () => {
                                    (x(K.sH.UNLOCK_WITH_NITRO), (0, nf.M)());
                                },
                                onSubscribeModalClose: () => {
                                    (0, nf.t)({
                                        product: t,
                                        category: l,
                                        shouldCheckoutWithOrbs: a,
                                        returnRef: p,
                                        analyticsLocations: m,
                                        tab: c,
                                        giftRecipient: o,
                                        giftingOrigin: u,
                                        cardId: f,
                                        sessionId: h,
                                        tilePosition: E,
                                    });
                                },
                            })
                        );
                    }
                    return w
                        ? b
                            ? q
                                ? (0, s.jsxs)(nn.e, {
                                      wrap: !1,
                                      fullWidth: !0,
                                      children: [
                                          (0, s.jsx)(nv, { product: i, onSuccess: g, onTrackClick: x }),
                                          (0, s.jsx)(nx.A, {
                                              primary: !0,
                                              product: i,
                                              onSuccess: g,
                                              giftRecipient: o,
                                              giftingOrigin: u,
                                              onTrackClick: x,
                                          }),
                                      ],
                                  })
                                : (0, s.jsx)(nv, { product: i, onSuccess: g, onTrackClick: x })
                            : H
                              ? (0, s.jsx)(e7.$, {
                                    loading: B,
                                    loadingStartedLabel: Z.intl.string(Z.t["TYw+9s"]),
                                    loadingFinishedLabel: Z.intl.string(Z.t.Pg1UP5),
                                    onClick: async () => {
                                        (x(K.sH.ADD_TO_COLLECTION),
                                            await (0, y.iJ)(i.skuId),
                                            g(),
                                            (0, nM.A)({
                                                product: i,
                                                analyticsLocations: m,
                                                purchaseType: K.gs.PREMIUM_PURCHASE,
                                            }));
                                    },
                                    text: Z.intl.string(Z.t.zp6caO),
                                    fullWidth: !0,
                                })
                              : (0, s.jsx)(s.Fragment, {
                                    children: J.map((e, n) => {
                                        let t,
                                            l,
                                            a,
                                            c,
                                            d,
                                            p = 0 === n,
                                            f =
                                                e.currency === nL.Yr.DISCORD_ORB
                                                    ? ((t = D ? Z.intl.string(Z.t.cTdr3x) : Z.intl.string(Z.t.zqh7ZM)),
                                                      (l = !ee || D),
                                                      (a = Z.intl.formatToPlainString(Z.t.yi41qQ, {
                                                          orbPrice: e.amount,
                                                      })),
                                                      (c = l ? `${a}, ${t}` : a),
                                                      (0, s.jsx)(e4.m, {
                                                          position: "top",
                                                          text: t,
                                                          shouldShow: l,
                                                          "aria-label": !1,
                                                          children: (0, s.jsx)(e7.$, {
                                                              variant: p ? "primary" : "secondary",
                                                              onClick: function () {
                                                                  (x(K.sH.BUY_WITH_ORBS),
                                                                      (0, A.B4)({
                                                                          skuId: i.skuId,
                                                                          onComplete: (e) => {
                                                                              ((0, y.gB)(),
                                                                                  g(),
                                                                                  (0, nM.A)({
                                                                                      product: i,
                                                                                      analyticsLocations: m,
                                                                                      itemConsumed:
                                                                                          e?.entitlements?.[0]
                                                                                              ?.consumed,
                                                                                      purchaseType: K.gs.ORB,
                                                                                  }));
                                                                          },
                                                                          analyticsLocations: m,
                                                                          discoverySessionId: h,
                                                                      }));
                                                              },
                                                              disabled: l,
                                                              "aria-label": c,
                                                              text: Z.intl.format(Z.t.JC15qj, {
                                                                  orbPrice: e.amount,
                                                                  orbIconHook: () =>
                                                                      (0, s.jsx)(ne.C, {
                                                                          className: nG.fN,
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                              }),
                                                              fullWidth: !0,
                                                          }),
                                                      }))
                                                    : ((d =
                                                          k ??
                                                          Z.intl.formatToPlainString(Z.t["cNSL/j"], {
                                                              price: (0, nc.$g)(e.amount, e.currency),
                                                          })),
                                                      (0, s.jsxs)(nn.e, {
                                                          wrap: !1,
                                                          fullWidth: !0,
                                                          children: [
                                                              (0, s.jsx)(e7.$, {
                                                                  variant: p ? "primary" : "secondary",
                                                                  onClick: ei,
                                                                  text: d,
                                                                  fullWidth: !0,
                                                              }),
                                                              q &&
                                                                  (0, s.jsx)(nx.A, {
                                                                      primary: p,
                                                                      product: i,
                                                                      onSuccess: g,
                                                                      giftRecipient: o,
                                                                      giftingOrigin: u,
                                                                      onTrackClick: x,
                                                                  }),
                                                          ],
                                                      }));
                                        return (0, s.jsx)(r.Fragment, { children: f }, e.currency);
                                    }),
                                })
                        : q
                          ? (0, s.jsx)(nx.A, {
                                primary: !0,
                                product: i,
                                onSuccess: g,
                                fullWidth: !0,
                                giftRecipient: o,
                                giftingOrigin: u,
                                onTrackClick: x,
                            })
                          : null;
                })(),
            }),
        ],
    });
}
var nz = t(634656);
function nV(e) {
    let {
            productRecord: n,
            selectedProduct: t,
            previewingProduct: i,
            user: r,
            selectedBundleSlide: l,
            pendingProfile: a,
        } = e,
        c = e0(n);
    return (0, s.jsxs)("div", {
        className: F()(nz.wd, { [nz.E7]: null != c.LeftPreview }),
        children: [
            (0, s.jsx)("div", {
                className: nz.dL,
                children: (0, s.jsx)(e6, { productRecord: n, selectedProduct: t, selectedBundleSlide: l }),
            }),
            null != c.LeftPreview &&
                (0, s.jsx)("div", {
                    className: nz._E,
                    children: (0, s.jsx)(c.LeftPreview, {
                        user: r,
                        selectedProduct: t,
                        previewingProduct: i,
                        productRecord: n,
                        selectedBundleSlide: l,
                        pendingProfile: a,
                    }),
                }),
            (0, s.jsx)("div", { className: nz.F_, children: (0, s.jsx)(c.Info, { ...e }) }),
            (0, s.jsx)(nH, { ...e }),
        ],
    });
}
var nX = t(529756),
    nW = t(408278),
    nZ = t(972213),
    n$ = t(156248),
    nq = t(753704),
    nY = t(60465),
    nJ = t(976860),
    nK = t(38145),
    nQ = t(365491),
    n0 = t(668953),
    n1 = t(881636),
    n2 = t(807562);
function n8(e) {
    let { goPrev: n, goNext: t } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: n2.Y,
                children: (0, s.jsx)(nW.K, {
                    "aria-label": Z.intl.string(Z.t["3NdvMK"]),
                    onClick: n,
                    icon: n0.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, s.jsx)("div", {
                className: n2.K,
                children: (0, s.jsx)(nW.K, {
                    "aria-label": Z.intl.string(Z.t.RYIeOX),
                    onClick: t,
                    icon: n1.u,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
}
var n3 = t(48062);
function n6(e) {
    let {
            user: n,
            pendingProfile: t,
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
            onClose: f,
            onTrackClick: h,
        } = e,
        E = e0(i),
        v = (0, _.aw)(a),
        N = v ? a.items.length : 0,
        A = (function () {
            let { sessionId: e } = (0, R.uM)() ?? {},
                n = (0, nQ.v)((e) => e.reset);
            return r.useCallback(
                (t, i) => {
                    if (
                        (I.default.track(O.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: e,
                            sku_id: t.skuId,
                            cta_name: i,
                        }),
                        (0, nK.M)(),
                        (0, nY.p)(),
                        !0 !== t.isOrbsExclusive)
                    )
                        return void (0, nJ.pX)(O.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
                    n();
                    let s = O.BVt.COLLECTIBLES_SHOP_WITH_TAB(K.G2.ORBS);
                    (0, nJ.pX)(`${s}&${K.P1}=${t.skuId}`);
                },
                [e, n],
            );
        })(),
        j = r.useCallback(() => {
            (h(K.sH.GO_TO_COLLECTION), f(), A(g, "go_to_collection_button"));
        }, [g, f, h, A]),
        y = r.useCallback(() => {
            N <= 1 || d((e) => (e - 1 + N) % N);
        }, [N, d]),
        C = r.useCallback(() => {
            N <= 1 || d((e) => (e + 1) % N);
        }, [N, d]),
        k = r.useCallback(
            (e) => {
                if (N <= 1) return;
                let n = e.target;
                "INPUT" === n.tagName ||
                    "TEXTAREA" === n.tagName ||
                    n.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), y())
                        : "ArrowRight" === e.key && (e.preventDefault(), C()));
            },
            [N, y, C],
        ),
        T = r.useCallback(() => {
            (h(K.sH.CLOSE_DETAIL), f());
        }, [h, f]),
        L = r.useRef(null),
        b = r.useRef(!0);
    return (
        r.useLayoutEffect(() => {
            if (b.current) {
                b.current = !1;
                return;
            }
            let e = L.current;
            null != e && ((e.style.animation = "none"), e.offsetHeight, (e.style.animation = ""));
        }, [o]),
        (0, s.jsxs)("div", {
            className: F()(n3.i1, (0, K.EZ)(a.skuId) ? n3.bF : a.type === S.R.AVATAR_DECORATION ? n3.Jq : n3.eF),
            style: null != p ? { backgroundImage: `url(${p})` } : void 0,
            onKeyDown: k,
            children: [
                (0, s.jsx)("div", {
                    className: n3.GV,
                    children: (0, s.jsx)(e4.m, {
                        text: Z.intl.string(Z.t["Hr/q/6"]),
                        children: (0, s.jsx)(e7.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: nX.c,
                            text: g.name,
                            onClick: j,
                        }),
                    }),
                }),
                (0, s.jsx)("div", {
                    className: n3.KR,
                    ref: L,
                    children: (0, s.jsx)(E.RightPreview, {
                        user: n,
                        pendingProfile: t,
                        productRecord: i,
                        selectedProduct: a,
                        previewingProduct: l,
                        selectedBundleSlide: o,
                        isClosing: u,
                        isOrbCheckoutModalOpen: m,
                    }),
                }),
                v && N > 1 && (0, s.jsx)(n8, { goPrev: y, goNext: C }),
                (0, s.jsxs)("div", {
                    className: n3.VG,
                    children: [
                        (0, s.jsx)(nq.R, {
                            product: i,
                            selectedVariantIndex: c,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: h,
                        }),
                        (0, s.jsx)(n$.H, {
                            skuId: a.skuId,
                            product: a,
                            productName: (0, P.VG)(a),
                            tab: x,
                            onTrackClick: h,
                        }),
                        (0, s.jsx)(nW.K, {
                            "aria-label": Z.intl.string(Z.t.cpT0Cq),
                            onClick: T,
                            icon: nZ.XLargeIcon,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            ],
        })
    );
}
var n5 = t(80801);
let n9 = (0, u.FT)(u._3.SIZE_152),
    n4 = function (e) {
        let {
                transitionState: n,
                onClose: t,
                product: i,
                category: l,
                returnRef: u,
                analyticsSource: S,
                analyticsLocations: M,
                shouldCheckoutWithOrbs: F,
                tab: G,
                giftRecipient: U,
                giftingOrigin: H,
            } = e,
            z = (0, d.bG)([j.default], () => j.default.getCurrentUser()),
            V = (0, d.cf)([v.A], () => v.A.getPendingChanges()),
            X = (0, B.f)(i),
            { previewingVariantIndex: W } = X,
            Z = (0, C.Q)(i),
            $ = D(i, W),
            q = (0, L.rb)(i, Z);
        a()(null != q, "Selected product should not be null");
        let { analyticsLocations: Y } = (0, x.Ay)([...M, g.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, b.Yr)(q.skuId);
        let J = (0, w.U1)(l),
            [K, Q] = r.useState(0);
        r.useEffect(() => {
            null != z && (0, N.A)(z.id, z.getAvatarURL(void 0, 80));
        }, [z]);
        let ee = r.useMemo(() => (0, _.V6)(i.type, i.skuId), [i.type, i.skuId]);
        r.useEffect(() => {
            (I.default.track(O.HAw.OPEN_MODAL, {
                type: O.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: S,
                location_stack: Y,
                sku_id: q.skuId,
                product_type: ee,
            }),
                (0, y.RD)(q.skuId));
        }, [S, Y, q.skuId, ee]);
        let { cardId: en, sessionId: et, tilePosition: ei } = (0, R.uM)() ?? {},
            es = r.useMemo(() => (0, L.v8)(i), [i]),
            er = (function (e) {
                let { skuId: n, productSkuIds: t, analyticsLocations: i } = e,
                    { cardId: s, sessionId: l } = (0, R.uM)() ?? {},
                    a = (0, T.o)(),
                    c = (0, _.xM)(a);
                return r.useCallback(
                    (e, r) => {
                        I.default.track(O.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                            sku_id: r ?? n,
                            cta: e,
                            shop_session_id: l,
                            card_id: s,
                            product_sku_ids: t,
                            location_stack: i,
                            discount_source: (0, _.b_)(c),
                        });
                    },
                    [n, i, s, t, l, c],
                );
            })({ skuId: q.skuId, productSkuIds: es, analyticsLocations: Y });
        (0, f.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: q.skuId,
                card_id: en,
                shop_session_id: et,
                position_in_section: ei,
                product_sku_ids: es,
                location_stack: Y,
            },
        });
        let el = (0, A.o6)(),
            ea = n === m.ip.EXITING,
            ec = (0, k.c)("product_details_modal");
        if (null == z || (i.skuId === o.j.PREMIUM_TIER_2_1_DAY && !ec)) return null;
        let eo = {
                pendingChanges: V,
                pendingAvatarSrc:
                    void 0 !== V.pendingAvatar
                        ? (0, h.sv)((0, E.V7)({ userId: z.id, image: V.pendingAvatar, size: n9 }), null, z, {
                              size: n9,
                          })
                        : void 0,
            },
            ed = (0, P.VG)(i),
            eu = {
                user: z,
                pendingProfile: eo,
                productRecord: i,
                productName: ed,
                selectedProduct: q,
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
                analyticsLocations: Y,
                returnRef: u,
                onClose: t,
                onTrackClick: er,
            };
        return (0, s.jsx)(x.f5, {
            value: Y,
            children: (0, s.jsx)(p.d, {
                returnRef: u,
                transitionState: n,
                onClose: t,
                size: "xl",
                paddingSize: "sm",
                "aria-label": ed,
                children: (0, s.jsx)("div", {
                    className: n5.C,
                    children: (0, s.jsxs)("div", {
                        className: n5.j,
                        children: [
                            (0, s.jsx)(nV, { ...eu }),
                            (0, s.jsx)(n6, { ...eu, isClosing: ea, isOrbCheckoutModalOpen: el, pdpBackground: J }),
                        ],
                    }),
                }),
            }),
        });
    };
