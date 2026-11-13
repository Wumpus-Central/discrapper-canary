t.d(n, { default: () => n7 });
var i,
    s = t(477900),
    r = t(582128),
    l = t(284009),
    a = t.n(l),
    c = t(613412),
    o = t(334279),
    d = t(164636),
    u = t(778712),
    m = t(231723),
    p = t(224640),
    g = t(793574),
    E = t(688810),
    f = t(139286),
    h = t(468450),
    x = t(101058),
    v = t(836602),
    N = t(917445),
    I = t(652165),
    j = t(287809),
    A = t(129230),
    y = t(969935),
    R = t(857512),
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
var B = t(212407),
    w = t(935094),
    M = t(503698),
    F = t.n(M),
    G = t(834730),
    U = t(939249),
    H = t(534514),
    z = t(14702),
    V = t(818296),
    W = t(288106),
    X = t(604913);
t(321073);
var q = t(792996);
function $(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (n) return q.intl.formatToPlainString(q.t["/0Yndu"], { num: e.bundledProducts?.length });
    let t = e.bundledProducts ?? [],
        i = [],
        s = !1;
    for (let e of t)
        switch (e.type) {
            case S.R.AVATAR_DECORATION:
                i.push(q.intl.formatToPlainString(q.t.Ntv9Jt, { itemName: e.name }));
                break;
            case S.R.PROFILE_EFFECT:
                i.push(q.intl.formatToPlainString(q.t["3Y8q7a"], { itemName: e.name }));
                break;
            case S.R.NAMEPLATE:
                (i.push(q.intl.formatToPlainString(q.t["2keXky"], { itemName: e.name })), (s = !0));
        }
    if (s) {
        let e = i.join(", ").replace(/, ([^,]*)$/, " & $1");
        return q.intl.formatToPlainString(q.t.Ofrqj6, { joinedItems: e });
    }
    let r = i.join(" & ");
    return q.intl.formatToPlainString(q.t.Ofrqj6, { joinedItems: r });
}
var Y = t(306396);
function Z(e) {
    return (0, _.aw)(e)
        ? q.intl.formatToPlainString(q.t["1tUCAO"], { count: e.items.length })
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
                      return q.intl.string(q.t["3lv7q2"]);
                  case S.R.PROFILE_EFFECT:
                      return q.intl.string(q.t.VhJL72);
                  case S.R.NAMEPLATE:
                      return q.intl.string(q.t.ik37EZ);
                  case S.R.PROFILE_FRAME:
                      return q.intl.string(q.t.fWzWPp);
                  case S.R.BUNDLE:
                      return $(e, n);
                  default:
                      return "";
              }
          })(e);
}
function K(e) {
    let n = (0, V.g)(e);
    if (null != n) {
        let t = Z(e);
        switch (n.tenantMetadata?.collectibles?.type) {
            case X.hE.COLLECT_AND_CLAIM:
                if (n.rewardStatus !== W.GM.IN_PROGRESS) return t;
                if ((0, _.aw)(e))
                    return q.intl.formatToPlainString(q.t["vI+3Ok"], {
                        itemCount: (0, Y.oO)(e, n.tenantMetadata.collectibles.collectionId),
                    });
                return q.intl.formatToPlainString(q.t.wBhFsO, { itemDescription: t.replace(/\.$/, "") });
            case X.hE.TARGETED_OFFER:
            default:
                return t;
        }
    }
    return Z(e);
}
var J = t(758836),
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
            (o(J.sH.BUNDLE_VIEW_PRODUCT, c), l(t));
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
    es = t(872200),
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
    eE = t(784054),
    ef = t(422460);
function eh(e) {
    let { skuId: n } = e;
    return (0, J.EZ)(n)
        ? (0, s.jsx)(G.E, {
              variant: "body-sm/normal",
              className: ef.CU,
              children: q.intl.format(q.t.Q1scdE, {
                  helpdeskArticle: ep.A.getArticleURL(O.MVz.FRACTIONAL_PREMIUM_ABOUT),
              }),
          })
        : null;
}
function ex(e) {
    let { productRecord: n, productName: t, selectedProduct: i, previewingVariantIndexProps: l } = e,
        { previewingVariantIndex: a, handleEntering: c, handleLeaving: o } = l,
        d = D(n, a) ?? i,
        u = K(d),
        { disabledReason: m } = (0, eg.I)(i.skuId),
        p = (0, C.Q)(n),
        g = (0, L.B1)(n),
        E = g ? n.variants[a ?? p] : null,
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
                            null != E &&
                                (0, s.jsx)(G.E, {
                                    variant: "body-xs/medium",
                                    color: "text-subtle",
                                    className: ef.a9,
                                    lineClamp: 1,
                                    children: q.intl.format(q.t.EcaRWt, {
                                        value: (0, s.jsx)("span", { className: ef.I8, children: E.variantLabel }),
                                    }),
                                }),
                            (0, s.jsx)("div", {
                                className: ef._x,
                                children: (0, s.jsx)(eE.A, {
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
    eI = t(346055),
    ej = t(993077),
    eA = t(245604),
    ey = t(460905),
    eR = t(262295),
    eC = t(685073),
    e_ = t(432005),
    ek = t(963852),
    eT = t(763754),
    eO = t(20851),
    eL = t(641318),
    eP = t(448645),
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
function eB(e) {
    let { user: n, nameplate: t, avatarDecoration: i, pendingDisplayNameStyles: r, pendingGlobalName: l } = e,
        a = (0, eb.Ov)();
    return (0, s.jsx)("div", {
        className: eS.nJ,
        role: "img",
        "aria-label": q.intl.formatToPlainString(q.t["95pCSf"], { a11y_text: t.label }),
        children: (0, s.jsxs)(eI.M, {
            children: [
                (0, s.jsx)(eD, { user: a.mallow, innerClassName: eS.ab }),
                (0, s.jsxs)(G.E, {
                    variant: "body-sm/semibold",
                    className: eS.OS,
                    children: [q.intl.string(q.t["yzW/fZ"]), " - 3"],
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
                    children: [q.intl.string(q.t["NG43/6"]), " - 12"],
                }),
                (0, s.jsx)(eD, { user: a.boom, innerClassName: eS.bD }),
                (0, s.jsx)(eD, { user: a.cherry, innerClassName: eS.bD }),
            ],
        }),
    });
}
function ew(e) {
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
                ...(0, ek.Ay)({ author: n, channelId: "1337", content: q.intl.string(q.t.d5YwK5) }),
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
        "aria-label": q.intl.string(q.t["TN+ZvB"]),
        children: (0, s.jsx)(eI.M, {
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
                            (0, s.jsx)(eA.CirclePlusIcon, { size: "md", color: "currentColor", className: eS.hq }),
                            (0, s.jsx)(ey.ReactionIcon, { size: "md", color: "currentColor", className: eS.hq }),
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
        { firstAvatarDecoration: g, firstProfileEffect: E, firstNameplate: f, firstProfileFrame: h } = (0, ei.f5)(n),
        x = d?.type === S.R.AVATAR_DECORATION ? d : g,
        v = d?.type === S.R.PROFILE_EFFECT ? d : E,
        N = d?.type === S.R.PROFILE_FRAME ? d : h,
        I = d?.type === S.R.NAMEPLATE ? d : f;
    if (u === S.R.NAMEPLATE && null != I)
        return (0, s.jsx)("div", {
            className: eS.Zj,
            children: (0, s.jsx)(eB, {
                user: t,
                nameplate: I,
                avatarDecoration: x ?? c.pendingAvatarDecoration,
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
                    pendingAvatarDecoration: x ?? c.pendingAvatarDecoration,
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
                    (0, s.jsx)(ew, {
                        user: t,
                        avatarDecoration: x,
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
    eU = t(646514),
    eH = t(219882),
    ez = t(224016),
    eV = t(682901),
    eW = t(549848);
function eX() {
    let e = [
        q.intl.string(q.t.E1NP2x),
        q.intl.string(q.t.kpMomJ),
        (0, eH.M6)({
            legacyCopy: q.intl.string(q.t.xT1Vfn),
            rolloutCopy: q.intl.formatToPlainString(q.t.IDAfOy, {
                maxFileSize: (0, eP.EJ)(eV.PremiumTypes.TIER_2, { useSpace: !1 }),
            }),
        }),
        q.intl.string(q.t.myyAEr),
        q.intl.string(q.t.zTk8Ul),
    ];
    return (0, s.jsxs)("div", {
        className: eW.kL,
        children: [
            (0, s.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: eW.ym,
            }),
            (0, s.jsx)(ez.A, { color: "white" }),
            (0, s.jsx)("div", {
                className: eW.PX,
                children: e.map((e, n) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: eW.UJ,
                            children: [
                                (0, s.jsx)(eG.CheckmarkSmallIcon, { color: eU.A.colors.WHITE }),
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
var eq = t(855986),
    e$ = t(132198),
    eY = t(35929);
function eZ(e) {
    let { user: n } = e,
        t = eP.Ay.canUsePremiumProfileCustomization(n),
        { pendingAvatar: i, ...r } = (0, eq.cf)([v.A], () => v.A.getPendingChanges()),
        l = (0, x.V7)({ userId: n.id, image: i });
    return (0, s.jsx)("div", {
        className: eY.k,
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
var eK = t(165416);
function eJ(e) {
    let { user: n, productRecord: t, isClosing: i, isOrbCheckoutModalOpen: r } = e;
    return t.skuId === J.Dp.ORB_PROFILE_BADGE
        ? i || r
            ? null
            : (0, s.jsx)(eZ, { user: n })
        : (0, J.EZ)(t.skuId)
          ? (0, s.jsx)(eX, {})
          : (0, s.jsx)(eu.B, { product: t, className: eK.M });
}
let eQ = {
    [ev.COLLECTIBLE]: { LeftPreview: ed, Info: ex, RightPreview: eF },
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
                p = q.intl.string(q.t.cTbdgu),
                g = K(n),
                E = r.useRef(null),
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
                let e = E.current;
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
                                        ref: E,
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
    [ev.EXTERNAL_ORB_BADGE]: { LeftPreview: em, Info: ex, RightPreview: eJ },
    [ev.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: em, Info: ex, RightPreview: eJ },
    [ev.EXTERNAL_GENERIC]: { LeftPreview: em, Info: ex, RightPreview: eJ },
};
function e0(e) {
    var n;
    return eQ[
        ((n = e),
        (0, J.pQ)(n.skuId)
            ? n.skuId === J.Dp.ORB_PROFILE_BADGE
                ? "EXTERNAL_ORB_BADGE"
                : (0, J.EZ)(n.skuId)
                  ? "EXTERNAL_FRACTIONAL_NITRO"
                  : "EXTERNAL_GENERIC"
            : (0, _.aw)(n)
              ? "BUNDLE"
              : "COLLECTIBLE")
    ];
}
var e1 = t(347478),
    e8 = t(268959),
    e2 = t(325802),
    e6 = t(252125);
function e5(e) {
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
                ? (0, s.jsx)(e8.s, {})
                : (0, s.jsx)(e8.A, { skuId: t.skuId })),
        (0, s.jsxs)("div", { className: e6.N, children: [n, null != l && a && (0, s.jsx)(e2.A, { promotion: l })] })
    );
}
var e4 = t(462887),
    e3 = t(278416),
    e9 = t(866665),
    e7 = t(821609),
    ne = t(318254),
    nn = t(825484),
    nt = t(331322),
    ni = t(736653),
    ns = t(44120),
    nr = t(465794),
    nl = t(757036),
    na = t(672619),
    nc = t(580630),
    no = t(4227),
    nd = t(466459),
    nu = t(151115),
    nm = t(518865),
    np = t(885574),
    ng = t(495900);
function nE(e) {
    let { className: n, isPartiallyPurchased: t } = e;
    return t
        ? (0, s.jsx)(e9.m, {
              position: "top",
              align: "left",
              text: q.intl.string(q.t.y1VWkZ),
              children: (0, s.jsxs)("div", {
                  className: F()(ng.GX, n),
                  children: [
                      (0, s.jsx)("span", {
                          className: ng.P0,
                          children: (0, s.jsx)(np.CircleInformationIcon, {
                              size: "md",
                              color: "currentColor",
                              className: ng.G,
                          }),
                      }),
                      (0, s.jsx)(G.E, { variant: "body-md/semibold", children: q.intl.string(q.t.BEjTij) }),
                  ],
              }),
          })
        : (0, s.jsx)(G.E, { variant: "body-md/semibold", className: n, children: q.intl.string(q.t["6cfuDj"]) });
}
var nf = t(878112),
    nh = t(572595),
    nx = t(206835),
    nv = t(450481);
let nN = function (e) {
    let { product: n, onSuccess: t, onTrackClick: i } = e,
        { handleUseNow: r, isApplying: l, canUseNow: a } = (0, nv.p)({ product: n, onSuccess: t }),
        c = (0, nx.A)();
    return a
        ? (0, s.jsx)(e7.$, {
              variant: "primary",
              onClick: () => {
                  (i?.(J.sH.USE_NOW), r());
              },
              loading: l,
              text: q.intl.string(q.t.MAS7uK),
              fullWidth: !0,
          })
        : (0, s.jsx)(e7.$, {
              variant: "primary",
              onClick: () => {
                  (i?.(J.sH.EDIT_PROFILE), c(), t?.());
              },
              text: q.intl.string(q.t["2p2aYz"]),
              fullWidth: !0,
          });
};
var nI = t(506742),
    nj = t(219103),
    nA = t(282968);
function ny(e) {
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
            className: F()(nA.kG, a),
            children: (0, s.jsx)(nj.x, { priceAmount: m.amount, priceCurrency: m.currency }),
        });
    let { showDiscountPrice: g, originalPrice: E, finalPrice: f } = u,
        h = g && null != o ? { displayMode: o, source: r ?? _.D0.NITRO, size: d } : void 0;
    return null != t
        ? (0, s.jsxs)("div", {
              className: F()(nA.kG, a),
              children: [
                  (0, s.jsx)(nI.a, { price: f, className: nA.q9 }),
                  (0, s.jsx)(nj.x, {
                      priceAmount: t.amount,
                      priceCurrency: t.currency,
                      className: nA.q9,
                      discountIconConfig: h,
                  }),
              ],
          })
        : (0, s.jsxs)("div", {
              className: F()(nA.kG, a),
              children: [
                  c ? null : (0, s.jsx)(nI.a, { price: E, className: nA.q9 }),
                  (0, s.jsx)(nj.x, {
                      priceAmount: f.amount,
                      priceCurrency: f.currency,
                      discount: l,
                      className: nA.q9,
                      discountIconConfig: h,
                  }),
              ],
          });
}
var nR = t(403581),
    nC = t(181170),
    n_ = t(778705),
    nk = t(843625);
function nT(e) {
    let { text: n, onTrackClick: t } = e,
        { analyticsLocations: i } = (0, E.Ay)(),
        l = r.useRef(null);
    return (0, s.jsx)(U.D, {
        className: nk.F,
        innerRef: l,
        onClick: () => {
            (t?.(J.sH.SUBSCRIBE_NOW),
                (0, n_.A)({ subscriptionTier: eV.pe.TIER_2, analyticsLocations: i, returnRef: l }));
        },
        children: n,
    });
}
var nO = t(329986);
function nL(e) {
    let { product: n, onTrackClick: t } = e,
        i = (0, nC.vF)(n.skuId, "collectibles_shop_nitro_price_upsell"),
        r = (0, _.yt)(n, O.lid.PREMIUM_TIER_2);
    if (null == r) return null;
    let l = (0, nC.f3)({ storefrontPrices: i, premiumPrice: r }) ?? r,
        a = (0, nc.RS)(l.amount, l.currency);
    return (0, s.jsxs)("div", {
        className: nO.k,
        children: [
            (0, s.jsx)(e9.m, {
                text: q.intl.string(q.t.MPFyJ5),
                "aria-label": q.intl.string(q.t.X3Ekj8),
                children: (0, s.jsx)(nR.NitroWheelIcon, { size: "md", color: "currentColor", className: nO.o }),
            }),
            (0, s.jsx)(G.E, {
                variant: "body-xs/medium",
                children: q.intl.format(q.t.Sv8iic, {
                    price: a,
                    subscribeNowHook: (e) => (0, s.jsx)(nT, { text: e, onTrackClick: t }),
                }),
            }),
        ],
    });
}
var nP = t(818348),
    nb = t(426919);
function nS(e) {
    let { orbPrice: n, isProductDisabled: t, hasSufficientOrbs: i, discount: r } = e,
        l = t ? q.intl.string(q.t.wu4gyV) : q.intl.string(q.t.eFNRzU),
        a = t || !i;
    return (0, s.jsxs)("div", {
        className: nb.eg,
        children: [
            (0, s.jsx)("div", {
                className: nb.zR,
                children: (0, s.jsx)(G.E, { variant: "body-xs/normal", className: a ? nb.r9 : void 0, children: l }),
            }),
            (0, s.jsx)(nj.x, {
                priceAmount: n.amount,
                priceCurrency: n.currency,
                discount: r,
                className: a ? nb.r9 : void 0,
            }),
        ],
    });
}
function nD(e) {
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
        : n[0].currency === nP.Yr.DISCORD_ORB
          ? (0, s.jsx)(nS, { orbPrice: n[0], isProductDisabled: d, hasSufficientOrbs: c, discount: l })
          : (0, s.jsxs)("div", {
                className: nb.eg,
                children: [
                    (0, s.jsxs)("div", {
                        className: nb.pw,
                        children: [
                            (0, s.jsx)(ny, {
                                product: a,
                                promoPrice: null != t[0] ? n[0] : null,
                                discount: l,
                                hasShopDiscount: i,
                                discountSource: r,
                                hideStrikethroughPrice: !i,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                            }),
                            i ? null : (0, s.jsx)(nL, { product: a, onTrackClick: o }),
                        ],
                    }),
                    n.length > 1 &&
                        n[1].currency === nP.Yr.DISCORD_ORB &&
                        (0, s.jsx)(nj.x, {
                            priceAmount: n[1].amount,
                            priceCurrency: n[1].currency,
                            className: d || !c ? nb.r9 : void 0,
                        }),
                ],
            });
}
var nB = t(347722),
    nw = t(57020),
    nM = t(61750),
    nF = t(497901),
    nG = t(248180),
    nU = t(543080);
let nH = (e) => {
    let { label: n, countdown: t } = e;
    return (0, s.jsxs)("div", {
        className: nU.lo,
        children: [
            (0, s.jsxs)("div", {
                className: nU.fZ,
                children: [
                    (0, s.jsx)(e3.TagIcon, { size: "xs", color: "currentColor", className: nU.CE }),
                    (0, s.jsx)(G.E, { variant: "body-xs/semibold", color: "none", children: n }),
                ],
            }),
            null != t && (0, s.jsx)(G.E, { variant: "footnote/medium", color: "none", className: nU.qy, children: t }),
        ],
    });
};
function nz(e) {
    let n,
        {
            user: t,
            productRecord: i,
            selectedProduct: l,
            category: a,
            shouldCheckoutWithOrbs: c,
            tab: o,
            giftRecipient: u,
            giftingOrigin: m,
            analyticsLocations: p,
            returnRef: g,
            onClose: E,
            onTrackClick: f,
        } = e,
        { cardId: h, sessionId: x, tilePosition: v } = (0, R.uM)() ?? {},
        N = (0, nl.L)(eV.PremiumTypes.TIER_2),
        j = (0, _.xM)(t),
        A = eP.Ay.canUseShopDiscounts(t),
        C = (0, V.g)(l),
        k = (0, nm.MX)(C),
        T = (0, nu.fP)(C),
        L = (0, nd.h)(i),
        { isPurchased: P, isPartiallyOwnedBundle: b } = (0, nd.h)(l),
        { isDisabled: S } = (0, eg.I)(l.skuId),
        D = (0, _.Zu)({ product: l, isPartiallyOwnedBundle: b, isPurchased: P }),
        B = (0, d.bG)([no.A], () => no.A.isClaiming === l?.skuId),
        w = (0, ni.Ay)(),
        M = (0, e4.M)(w),
        U = (0, _.G0)(l),
        H = (0, _.yt)(l, O.lid.DEFAULT),
        z = H?.amount === 0,
        $ = (0, nB.X)(l),
        Y = T ? J.Hi.FIAT : o === J.G2.ORBS && c ? J.Hi.ORBS : void 0,
        {
            checkoutEligiblePrices: Z,
            checkoutEligibleFormerPrices: K,
            isShowingPromoPrice: Q,
            hasSufficientOrbs: ee,
        } = (0, nw.F)({ product: l, hasShopDiscount: A, prioritizedCurrency: Y }),
        en =
            ((n = (0, nF.A)(C?.endsAt)),
            (function (e, n, t) {
                if (null == e) return null;
                let i = null != t && t > 0 ? q.intl.formatToPlainString(q.t.w4GEvw, { days: t }) : null;
                switch (e.tenantMetadata?.collectibles?.type) {
                    case X.hE.COLLECTION_SALE:
                        let s, r;
                        return (
                            (s = (0, nG.S)(e)),
                            (r = e.displayName),
                            n && null != s && null != r
                                ? {
                                      label: q.intl.formatToPlainString(q.t.nebE6s, {
                                          promotionName: r,
                                          percentage: s,
                                      }),
                                      countdown: i,
                                  }
                                : null
                        );
                    case X.hE.COLLECT_AND_CLAIM:
                        let l;
                        if (e.rewardStatus !== W.GM.IN_PROGRESS) return null;
                        return null == (l = e.progress)
                            ? null
                            : {
                                  label: q.intl.formatToPlainString(q.t["8XhAe3"], {
                                      current: l.current,
                                      target: l.target,
                                  }),
                                  countdown: i,
                              };
                    case X.hE.TARGETED_OFFER:
                    default:
                        return null;
                }
            })(C, Q, n)),
        et = r.useMemo(() => (0, _.fT)(l, A, Z[0]?.currency), [l, A, Z]),
        ei = r.useMemo(() => Z.some((e) => e.currency === nP.Yr.DISCORD_ORB), [Z]);
    (0, na.W0)({ disableFetch: !ei });
    let es = r.useCallback(() => {
        (f(J.sH.BUY_WITH_FIAT),
            (0, ns.A)({
                skuId: l.skuId,
                analyticsLocations: p,
                discoverySessionId: x,
                onClose: (e) => (e ? E() : (0, nP.tE)()),
            }));
    }, [p, E, l.skuId, f, x]);
    return (0, s.jsxs)("div", {
        className: nU.iw,
        children: [
            L.isPurchased || L.isPartiallyOwnedBundle
                ? (0, s.jsx)(nE, { className: nU.On, isPartiallyPurchased: b })
                : U
                  ? (0, s.jsxs)("div", {
                        className: nU.pq,
                        children: [
                            (0, s.jsx)(G.E, { variant: "body-md/semibold", children: q.intl.string(q.t.rt69oo) }),
                            !P &&
                                (0, s.jsx)(G.E, {
                                    className: F()(nU.ed, !M && nU.un),
                                    variant: "footnote/normal",
                                    children: q.intl.string(q.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, s.jsx)(nD, {
                        prices: Z,
                        formerPrices: K,
                        product: l,
                        hasShopDiscount: A,
                        discountSource: j,
                        discount: et,
                        hasSufficientOrbs: ee,
                        isProductDisabled: S,
                        onTrackClick: f,
                    }),
            null != en && (0, s.jsx)(nH, { ...en }),
            (0, s.jsx)(nt.B, {
                direction: "vertical",
                gap: 8,
                children: (function () {
                    if (U && !N && !z) {
                        var e;
                        return (
                            (e = q.intl.string(q.t.sEAnVH)),
                            (0, s.jsx)(nr.A, {
                                subscriptionTier: eV.pe.TIER_2,
                                fullWidth: !0,
                                buttonTextOverride: e,
                                onClick: () => {
                                    (f(J.sH.UNLOCK_WITH_NITRO), (0, nh.M)());
                                },
                                onSubscribeModalClose: () => {
                                    (0, nh.t)({
                                        product: i,
                                        category: a,
                                        shouldCheckoutWithOrbs: c,
                                        returnRef: g,
                                        analyticsLocations: p,
                                        tab: o,
                                        giftRecipient: u,
                                        giftingOrigin: m,
                                        cardId: h,
                                        sessionId: x,
                                        tilePosition: v,
                                    });
                                },
                            })
                        );
                    }
                    return D
                        ? P
                            ? $
                                ? (0, s.jsxs)(nn.e, {
                                      wrap: !1,
                                      fullWidth: !0,
                                      children: [
                                          (0, s.jsx)(nN, { product: l, onSuccess: E, onTrackClick: f }),
                                          (0, s.jsx)(nf.A, {
                                              primary: !0,
                                              product: l,
                                              onSuccess: E,
                                              giftRecipient: u,
                                              giftingOrigin: m,
                                              onTrackClick: f,
                                          }),
                                      ],
                                  })
                                : (0, s.jsx)(nN, { product: l, onSuccess: E, onTrackClick: f })
                            : U
                              ? (0, s.jsx)(e7.$, {
                                    loading: B,
                                    loadingStartedLabel: q.intl.string(q.t["TYw+9s"]),
                                    loadingFinishedLabel: q.intl.string(q.t.Pg1UP5),
                                    onClick: async () => {
                                        (f(J.sH.ADD_TO_COLLECTION),
                                            await (0, y.iJ)(l.skuId),
                                            E(),
                                            (0, nM.A)({
                                                product: l,
                                                analyticsLocations: p,
                                                purchaseType: J.gs.PREMIUM_PURCHASE,
                                            }));
                                    },
                                    text: q.intl.string(q.t.zp6caO),
                                    fullWidth: !0,
                                })
                              : (0, s.jsx)(s.Fragment, {
                                    children: Z.map((e, n) => {
                                        let t,
                                            i,
                                            a,
                                            c,
                                            o,
                                            d = 0 === n,
                                            g =
                                                e.currency === nP.Yr.DISCORD_ORB
                                                    ? ((t = S ? q.intl.string(q.t.cTdr3x) : q.intl.string(q.t.zqh7ZM)),
                                                      (i = !ee || S),
                                                      (a = q.intl.formatToPlainString(q.t.yi41qQ, {
                                                          orbPrice: e.amount,
                                                      })),
                                                      (c = i ? `${a}, ${t}` : a),
                                                      (0, s.jsx)(e9.m, {
                                                          position: "top",
                                                          text: t,
                                                          shouldShow: i,
                                                          "aria-label": !1,
                                                          children: (0, s.jsx)(e7.$, {
                                                              variant: d ? "primary" : "secondary",
                                                              onClick: function () {
                                                                  (f(J.sH.BUY_WITH_ORBS),
                                                                      (0, I.B4)({
                                                                          skuId: l.skuId,
                                                                          onComplete: (e) => {
                                                                              ((0, y.gB)(),
                                                                                  E(),
                                                                                  (0, nM.A)({
                                                                                      product: l,
                                                                                      analyticsLocations: p,
                                                                                      itemConsumed:
                                                                                          e?.entitlements?.[0]
                                                                                              ?.consumed,
                                                                                      purchaseType: J.gs.ORB,
                                                                                  }));
                                                                          },
                                                                          analyticsLocations: p,
                                                                          discoverySessionId: x,
                                                                      }));
                                                              },
                                                              disabled: i,
                                                              "aria-label": c,
                                                              text: q.intl.format(q.t.JC15qj, {
                                                                  orbPrice: e.amount,
                                                                  orbIconHook: () =>
                                                                      (0, s.jsx)(ne.OrbsIcon, {
                                                                          className: nU.fN,
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                              }),
                                                              fullWidth: !0,
                                                          }),
                                                      }))
                                                    : ((o =
                                                          k ??
                                                          q.intl.formatToPlainString(q.t["cNSL/j"], {
                                                              price: (0, nc.$g)(e.amount, e.currency),
                                                          })),
                                                      (0, s.jsxs)(nn.e, {
                                                          wrap: !1,
                                                          fullWidth: !0,
                                                          children: [
                                                              (0, s.jsx)(e7.$, {
                                                                  variant: d ? "primary" : "secondary",
                                                                  onClick: es,
                                                                  text: o,
                                                                  fullWidth: !0,
                                                              }),
                                                              $ &&
                                                                  (0, s.jsx)(nf.A, {
                                                                      primary: d,
                                                                      product: l,
                                                                      onSuccess: E,
                                                                      giftRecipient: u,
                                                                      giftingOrigin: m,
                                                                      onTrackClick: f,
                                                                  }),
                                                          ],
                                                      }));
                                        return (0, s.jsx)(r.Fragment, { children: g }, e.currency);
                                    }),
                                })
                        : $
                          ? (0, s.jsx)(nf.A, {
                                primary: !0,
                                product: l,
                                onSuccess: E,
                                fullWidth: !0,
                                giftRecipient: u,
                                giftingOrigin: m,
                                onTrackClick: f,
                            })
                          : null;
                })(),
            }),
        ],
    });
}
var nV = t(634656);
function nW(e) {
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
        className: F()(nV.wd, { [nV.E7]: null != c.LeftPreview }),
        children: [
            (0, s.jsx)("div", {
                className: nV.dL,
                children: (0, s.jsx)(e5, { productRecord: n, selectedProduct: t, selectedBundleSlide: l }),
            }),
            null != c.LeftPreview &&
                (0, s.jsx)("div", {
                    className: nV._E,
                    children: (0, s.jsx)(c.LeftPreview, {
                        user: r,
                        selectedProduct: t,
                        previewingProduct: i,
                        productRecord: n,
                        selectedBundleSlide: l,
                        pendingProfile: a,
                    }),
                }),
            (0, s.jsx)("div", { className: nV.F_, children: (0, s.jsx)(c.Info, { ...e }) }),
            (0, s.jsx)(nz, { ...e }),
        ],
    });
}
var nX = t(529756),
    nq = t(408278),
    n$ = t(972213),
    nY = t(60831),
    nZ = t(301198),
    nK = t(60465),
    nJ = t(976860),
    nQ = t(38145),
    n0 = t(365491),
    n1 = t(668953),
    n8 = t(881636),
    n2 = t(807562);
function n6(e) {
    let { goPrev: n, goNext: t } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: n2.Y,
                children: (0, s.jsx)(nq.K, {
                    "aria-label": q.intl.string(q.t["3NdvMK"]),
                    onClick: n,
                    icon: n1.ChevronLargeLeftIcon,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, s.jsx)("div", {
                className: n2.K,
                children: (0, s.jsx)(nq.K, {
                    "aria-label": q.intl.string(q.t.RYIeOX),
                    onClick: t,
                    icon: n8.ChevronLargeRightIcon,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
}
var n5 = t(48062);
function n4(e) {
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
            tab: E,
            onClose: f,
            onTrackClick: h,
        } = e,
        x = e0(i),
        v = (0, _.aw)(a),
        N = v ? a.items.length : 0,
        I = (function () {
            let { sessionId: e } = (0, R.uM)() ?? {},
                n = (0, n0.vs)((e) => e.reset);
            return r.useCallback(
                (t, i) => {
                    if (
                        (A.default.track(O.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: e,
                            sku_id: t.skuId,
                            cta_name: i,
                        }),
                        (0, nQ.M)(),
                        (0, nK.p)(),
                        !0 !== t.isOrbsExclusive)
                    )
                        return void (0, nJ.pX)(O.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t.skuId));
                    n();
                    let s = O.BVt.COLLECTIBLES_SHOP_WITH_TAB(J.G2.ORBS);
                    (0, nJ.pX)(`${s}&${J.P1}=${t.skuId}`);
                },
                [e, n],
            );
        })(),
        j = r.useCallback(() => {
            (h(J.sH.GO_TO_COLLECTION), f(), I(g, "go_to_collection_button"));
        }, [g, f, h, I]),
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
            (h(J.sH.CLOSE_DETAIL), f());
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
            className: F()(n5.i1, (0, J.EZ)(a.skuId) ? n5.bF : a.type === S.R.AVATAR_DECORATION ? n5.Jq : n5.eF),
            style: null != p ? { backgroundImage: `url(${p})` } : void 0,
            onKeyDown: k,
            children: [
                (0, s.jsx)("div", {
                    className: n5.GV,
                    children: (0, s.jsx)(e9.m, {
                        text: q.intl.string(q.t["Hr/q/6"]),
                        children: (0, s.jsx)(e7.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: nX.CollectionIcon,
                            text: g.name,
                            onClick: j,
                        }),
                    }),
                }),
                (0, s.jsx)("div", {
                    className: n5.KR,
                    ref: L,
                    children: (0, s.jsx)(x.RightPreview, {
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
                v && N > 1 && (0, s.jsx)(n6, { goPrev: y, goNext: C }),
                (0, s.jsxs)("div", {
                    className: n5.VG,
                    children: [
                        (0, s.jsx)(nZ.R, {
                            product: i,
                            selectedVariantIndex: c,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: h,
                        }),
                        (0, s.jsx)(nY.H, {
                            skuId: a.skuId,
                            product: a,
                            productName: (0, P.VG)(a),
                            tab: E,
                            onTrackClick: h,
                        }),
                        (0, s.jsx)(nq.K, {
                            "aria-label": q.intl.string(q.t.cpT0Cq),
                            onClick: T,
                            icon: n$.XLargeIcon,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            ],
        })
    );
}
var n3 = t(80801);
let n9 = (0, u.FT)(u._3.SIZE_152),
    n7 = function (e) {
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
            W = (0, w.f)(i),
            { previewingVariantIndex: X } = W,
            q = (0, C.Q)(i),
            $ = D(i, X),
            Y = (0, L.rb)(i, q);
        a()(null != Y, "Selected product should not be null");
        let { analyticsLocations: Z } = (0, E.Ay)([...M, g.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, b.Yr)(Y.skuId);
        let K = (0, B.U1)(l),
            [J, Q] = r.useState(0);
        r.useEffect(() => {
            null != z && (0, N.A)(z.id, z.getAvatarURL(void 0, 80));
        }, [z]);
        let ee = r.useMemo(() => (0, _.V6)(i.type, i.skuId), [i.type, i.skuId]);
        r.useEffect(() => {
            (A.default.track(O.HAw.OPEN_MODAL, {
                type: O.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: S,
                location_stack: Z,
                sku_id: Y.skuId,
                product_type: ee,
            }),
                (0, y.RD)(Y.skuId));
        }, [S, Z, Y.skuId, ee]);
        let { cardId: en, sessionId: et, tilePosition: ei } = (0, R.uM)() ?? {},
            es = r.useMemo(() => (0, L.v8)(i), [i]),
            er = (function (e) {
                let { skuId: n, productSkuIds: t, analyticsLocations: i } = e,
                    { cardId: s, sessionId: l } = (0, R.uM)() ?? {},
                    a = (0, T.o)(),
                    c = (0, _.xM)(a);
                return r.useCallback(
                    (e, r) => {
                        A.default.track(O.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
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
            })({ skuId: Y.skuId, productSkuIds: es, analyticsLocations: Z });
        (0, f.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: Y.skuId,
                card_id: en,
                shop_session_id: et,
                position_in_section: ei,
                product_sku_ids: es,
                location_stack: Z,
            },
        });
        let el = (0, I.o6)(),
            ea = n === m.ip.EXITING,
            ec = (0, k.c)("product_details_modal");
        if (null == z || (i.skuId === o.j.PREMIUM_TIER_2_1_DAY && !ec)) return null;
        let eo = {
                pendingChanges: V,
                pendingAvatarSrc:
                    void 0 !== V.pendingAvatar
                        ? (0, h.sv)((0, x.V7)({ userId: z.id, image: V.pendingAvatar, size: n9 }), null, z, {
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
                selectedProduct: Y,
                previewingProduct: $ ?? null,
                category: l,
                selectedVariantIndex: q,
                previewingVariantIndexProps: W,
                selectedBundleSlide: J,
                setSelectedBundleSlide: Q,
                tab: G,
                shouldCheckoutWithOrbs: F,
                giftRecipient: U?.id !== z.id ? U : void 0,
                giftingOrigin: U?.id !== z.id ? H : void 0,
                analyticsLocations: Z,
                returnRef: u,
                onClose: t,
                onTrackClick: er,
            };
        return (0, s.jsx)(E.f5, {
            value: Z,
            children: (0, s.jsx)(p.d, {
                returnRef: u,
                transitionState: n,
                onClose: t,
                size: "xl",
                paddingSize: "sm",
                "aria-label": ed,
                children: (0, s.jsx)("div", {
                    className: n3.C,
                    "data-testid": "collectibles-shop-product-details-modal",
                    children: (0, s.jsxs)("div", {
                        className: n3.j,
                        children: [
                            (0, s.jsx)(nW, { ...eu }),
                            (0, s.jsx)(n4, { ...eu, isClosing: ea, isOrbCheckoutModalOpen: el, pdpBackground: K }),
                        ],
                    }),
                }),
            }),
        });
    };
