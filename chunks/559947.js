t.d(e, { default: () => Ao });
var a = t(627968),
    n = t(64700),
    r = t(503698),
    l = t.n(r),
    i = t(284009),
    s = t.n(i),
    o = t(417597),
    d = t(827734),
    c = t(73939),
    u = t(36525),
    g = t(314116),
    h = t(834730),
    p = t(696986),
    f = t(243721),
    m = t(783878),
    q = t(871682),
    v = t(628284),
    C = t(192308),
    x = t(935462),
    U = t(534514),
    V = t(573613),
    b = t(292666),
    j = t(452027),
    N = t(821609),
    I = t(686956),
    T = t(262828),
    F = t(915089),
    K = t(722888),
    X = t(809506),
    P = t(465932),
    W = t(2553),
    Q = t(253932),
    Z = t(317525),
    z = t(580630),
    L = t(371794),
    O = t(218394),
    S = t(464990),
    y = t(871109),
    R = t(253141),
    E = t(937409),
    D = t(500770),
    k = t(563838),
    G = t(426043),
    B = t(575077),
    w = t(692646),
    Y = t(184119),
    H = t(717040),
    M = t(319543),
    J = t(500208),
    _ = t(652215),
    $ = t(705751),
    AA = t(985018),
    Ae = t(350138);
let At = (0, F.Ld)(),
    Aa = (0, F.Ld)(),
    An = (0, F.Ld)();
function Ar(A) {
    let { text: e, onChange: t, value: n, disabled: r, warning: i } = A,
        s = (0, F.GV)(),
        o = r ? "text-muted" : "text-default";
    return (0, a.jsxs)("label", {
        className: l()(Ae.$4, { [Ae.r9]: r }),
        htmlFor: s,
        children: [
            (0, a.jsx)(h.E, { variant: "text-sm/medium", color: o, children: e }),
            null != i && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(p.h, { size: 4, horizontal: !0 }), i] }),
            (0, a.jsx)(f.d, { onChange: t, checked: n, disabled: r, id: s }),
        ],
    });
}
function Al(A, e) {
    return A.filter((A) => {
        let { value: t, label: a } = A;
        return t.toString().includes(e) || a.includes(e);
    });
}
function Ai(A) {
    let { guildId: e, selectedPriceTier: t, setPriceTier: r, label: l, errorMessage: i } = A,
        { priceTiers: s } = (0, K._)(e, _.L_o.GUILD_PRODUCTS),
        o = n.useMemo(
            () =>
                (s ?? (null != t ? [t] : [])).map((A) => ({
                    id: A.toString(),
                    value: A,
                    label: (0, z.$g)(A, _.Yri.USD),
                })),
            [s, t],
        );
    return (0, a.jsx)(m.Z, {
        selectionMode: "single",
        label: l,
        errorMessage: i,
        value: t,
        placeholder: AA.intl.string(AA.t.aI4J5H),
        maxOptionsVisible: 5,
        options: o,
        onSelectionChange: r,
        customMatchSorter: Al,
        required: !0,
    });
}
function As(A) {
    let { guildId: e, productId: t, transitionState: r, onClose: l } = A,
        [i, f] = n.useState(t),
        m = (0, o.bG)([y.A], () => (null == i ? null : y.A.getGuildProduct(i)), [i]),
        F = (0, o.bG)([y.A], () => y.A.getGuildProductsForGuild(e, { publishedOnly: !0 }).length, [e]),
        K = m?.published === !0,
        { application: W } = (0, T.A)(e, $.S7.GUILD_ROLE_SUBSCRIPTIONS),
        Al = E.D["0"],
        As = Q.kt.useSetting(),
        Ad = (0, O.j)(),
        Ac = n.useCallback(
            () =>
                m?.image_asset?.application_id == null
                    ? Al.data
                    : (0, L.YE)(m.image_asset.application_id, m.image_asset, 600, Ad && As ? void 0 : "webp"),
            [Al, m, Ad, As],
        ),
        { shouldRestrictUpdatingCreatorMonetizationSettings: Au } = (0, P.nq)(e);
    n.useEffect(() => {
        Au && (l(), (0, B.p)(AA.intl.string(AA.t.OLf3xn), AA.t["90LBVr"]));
    }, [Au, l]);
    let [Ag, Ah] = n.useState(m?.name ?? ""),
        [Ap, Af] = n.useState(m?.description ?? ""),
        [Am, Aq] = n.useState(m?.price_tier ?? void 0),
        [Av, AC] = n.useState(Ac),
        [Ax, AU] = n.useState(m?.image_asset?.filename ?? Al.name),
        [AV, Ab] = n.useState(!1),
        [Aj, AN] = n.useState(),
        AI = n.useMemo(() => (null != Am ? (0, z.$g)(Am, _.Yri.USD) : void 0), [Am]),
        [AT, AF] = n.useState(!0),
        {
            changesSaving: AK,
            saveError: AX,
            saveProductWithAttachments: AP,
            hasUnsavedAttachmentChanges: AW,
            cancelUnusedUploads: AQ,
        } = (0, S.Z)(),
        AZ = m?.attachments != null && m?.attachments.length > 0,
        Az = AX ?? Aj,
        AL = null != AK && "published" in AK,
        AO = null != AK && !AL,
        AS = m?.role_id ?? null,
        [Ay, AR] = n.useState(),
        AE = null != Ay || null != AS,
        AD = (0, o.bG)([Z.A], () => (null != AS && null !== Ay ? Z.A.getRole(e, AS) : (Ay ?? void 0)), [Ay, AS, e]),
        Ak = "";
    AE && AT
        ? (Ak = AA.intl.string(AA.t.ih4QMU))
        : AE
          ? (Ak = AA.intl.string(AA.t.o9xphc))
          : AT && (Ak = AA.intl.string(AA.t.DWYJua));
    let AG = () => {
            AF(!1), AQ();
        },
        [AB, Aw] = n.useState(),
        {
            changes: AY,
            hasUnsavedChanges: AH,
            canSaveForDraft: AM,
            canSaveForPublished: AJ,
            canPublishOrUnpublish: A_,
        } = n.useMemo(
            () =>
                (0, R.EY)({
                    guildProductListing: m,
                    name: Ag,
                    priceTier: Am,
                    description: Ap,
                    image: Av,
                    imageName: Ax,
                    isImageChanged: AV,
                    newRoleParams: Ay,
                    hasSavedAttachments: AZ,
                    hasUnsavedAttachmentChanges: AW,
                }),
            [m, Ag, Am, Ap, Av, Ax, AV, Ay, AZ, AW],
        ),
        A$ = n.useMemo(
            () =>
                AH || null == AB || "publish" === AB || null != Az
                    ? null
                    : (0, a.jsx)(q.F, {
                          className: Ae.Er,
                          children: (0, a.jsx)(u.A, {
                              message: (0, a.jsxs)("div", {
                                  className: Ae.Lk,
                                  children: [
                                      (0, a.jsx)(v.y, {
                                          size: "md",
                                          color: d.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT.css,
                                          secondaryColor: d.A.colors.WHITE.css,
                                      }),
                                      (0, a.jsx)(h.E, {
                                          variant: "text-md/medium",
                                          children:
                                              "draft" === AB
                                                  ? AA.intl.string(AA.t["3Rv4MB"])
                                                  : "update_publish" === AB
                                                    ? AA.intl.string(AA.t["8fPiB3"])
                                                    : AA.intl.string(AA.t["3LUFnI"]),
                                      }),
                                  ],
                              }),
                              onReset: () => Aw(void 0),
                              onResetText: AA.intl.string(AA.t.T6QuWe),
                          }),
                      }),
            [Az, AH, AB],
        ),
        A0 = n.useCallback(() => {
            AH
                ? (0, G.A)({
                      title: AA.intl.string(AA.t.FVDhIW),
                      body: AA.intl.string(AA.t.Hgdhwb),
                      cta: AA.intl.string(AA.t["h0bti/"]),
                      closeLabel: AA.intl.string(AA.t["+WYo0m"]),
                      onConfirm: () => {
                          l();
                      },
                  })
                : l();
        }, [l, AH]);
    n.useEffect(() => {
        (0, C.updateModal)(J.DG, (A) => (0, a.jsx)(Ao, { guildId: e, productId: i, ...A }), A0);
    }, [e, A0, i]);
    let A1 = async (A) => {
        let t = (0, R.ig)({ newRoleParams: Ay });
        if ((AN(t), null != t)) return;
        let a = await AP(A);
        if ((Ab(!1), null != a)) {
            if ((null != A.name && Ah(a.name), null != A.description && Af(a.description), null != Ay)) {
                let A = a.role_id;
                s()(null != A, "Cannot update role without role ID"), await I.A.updateRole(e, A, Ay);
            }
            AR(void 0), f(a.id), "published" in A && !0 === A.published && l();
        }
    };
    n.useEffect(() => {
        null != Az && (0, w.Z)(Az, e, W?.team?.id);
    }, [Az, e, W]),
        n.useEffect(() => {
            AH && Aw(void 0);
        }, [AH]);
    let A9 = n.useRef(null);
    return (0, a.jsxs)(x.EO, {
        transitionState: r,
        size: x.rI.DYNAMIC,
        className: Ae.CR,
        "aria-labelledby": At,
        parentComponent: "GuildProductEditModal",
        "data-migration-pending": !0,
        children: [
            (0, a.jsxs)(x.rQ, {
                className: Ae.Hc,
                separator: !1,
                "data-migration-pending": !0,
                children: [
                    (0, a.jsxs)("div", {
                        className: Ae.TK,
                        children: [
                            (0, a.jsx)(U.D, {
                                id: At,
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: AA.intl.string(AA.t.DnNl1T),
                            }),
                            (0, a.jsx)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: AA.intl.string(AA.t["Tu7f+f"]),
                            }),
                        ],
                    }),
                    (0, a.jsx)(x.s_, {
                        onClick: A0,
                        className: Ae.__invalid_modalCloseButton,
                        "data-migration-pending": !0,
                    }),
                ],
            }),
            (0, a.jsxs)(x.$m, {
                className: Ae.jE,
                scrollbarType: "none",
                "data-migration-pending": !0,
                children: [
                    (0, a.jsx)(V.Ip, {
                        children: (0, a.jsxs)("div", {
                            className: Ae.sj,
                            ref: A9,
                            children: [
                                (0, a.jsx)(b.k, {
                                    label: AA.intl.string(AA.t.Hsk7xT),
                                    error: Az?.getFirstFieldErrorMessage("name"),
                                    value: Ag,
                                    onChange: Ah,
                                    id: Aa,
                                    maxLength: 100,
                                    placeholder: AA.intl.string(AA.t["/BiYSO"]),
                                    required: !0,
                                }),
                                (0, a.jsx)(X.A, {
                                    label: AA.intl.string(AA.t.QdKLyW),
                                    errorMessage: Az?.getFirstFieldErrorMessage("description") ?? void 0,
                                    id: An,
                                    className: Ae.kj,
                                    value: Ap,
                                    onChange: Af,
                                    maxLength: 1500,
                                    placeholder: AA.intl.string(AA.t.BFwyum),
                                    showCharacterCount: Ap.length > 0,
                                    parentModalKey: J.DG,
                                    required: !0,
                                }),
                                (0, a.jsx)(Ai, {
                                    label: AA.intl.string(AA.t["CAY/vh"]),
                                    errorMessage: Az?.getFirstFieldErrorMessage("price_tier") ?? void 0,
                                    guildId: e,
                                    selectedPriceTier: Am,
                                    setPriceTier: Aq,
                                }),
                                (0, a.jsx)(j.D, {
                                    label: AA.intl.string(AA.t.sqXj60),
                                    errorMessage: Az?.getFirstFieldErrorMessage("image") ?? void 0,
                                    description: AA.intl.string(AA.t.yOU4Vm),
                                    children: (0, a.jsx)(Y.A, {
                                        presetImages: E.D,
                                        radioGroupAriaLabel: AA.intl.string(AA.t.fKzQj0),
                                        image: Av,
                                        imageName: Ax,
                                        savedImageName: m?.image_asset?.filename,
                                        onChange: (A, e) => {
                                            null != A &&
                                                (AC(A),
                                                AU(e),
                                                Ab(A.startsWith("data:") || e !== m?.image_asset?.filename));
                                        },
                                    }),
                                }),
                                AT
                                    ? (0, a.jsx)(j.D, {
                                          label: AA.intl.string(AA.t.zLrtkN),
                                          errorMessage: Az?.getFirstFieldErrorMessage("attachments") ?? void 0,
                                          children: (0, a.jsx)(k.F, {
                                              onFileAdded: () => {
                                                  A9.current?.scrollIntoView({ behavior: "smooth", block: "end" });
                                              },
                                          }),
                                      })
                                    : null,
                                AE
                                    ? (0, a.jsx)(M.Ay, {
                                          error: Az?.getFirstFieldErrorMessage(R.a) ?? void 0,
                                          newRoleParams: Ay,
                                          setNewRoleParams: AR,
                                          guildId: e,
                                          listingRoleId: AS,
                                          productId: i,
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, a.jsx)("div", { className: Ae.cD }),
                    (0, a.jsx)(V.Ip, {
                        children: (0, a.jsxs)("div", {
                            className: Ae.mA,
                            children: [
                                (0, a.jsx)(H.A, {
                                    disabled: !A_ || (!K && F >= 50),
                                    disabledTooltip: K
                                        ? AA.intl.string(AA.t["0NQ00t"])
                                        : F >= 50
                                          ? AA.intl.format(AA.t.IqWPVt, { maxProducts: 50 })
                                          : AA.intl.string(AA.t["Ax89/c"]),
                                    published: K,
                                    onClick: () => {
                                        s()(A_, "Attempting to publish/unpublish when not allowed"),
                                            Aw(K ? "unpublish" : "publish"),
                                            A1({ ...AY, published: !K });
                                    },
                                    submitting: AL,
                                }),
                                (0, a.jsx)("div", { className: Ae.AC }),
                                (0, a.jsx)(U.D, {
                                    variant: "text-xs/bold",
                                    color: "text-default",
                                    className: Ae.B9,
                                    children: AA.intl.string(AA.t["6I7nQT"]),
                                }),
                                (0, a.jsx)(p.h, { size: 4 }),
                                (0, a.jsx)(h.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: AA.intl.string(AA.t.Oq4dfU),
                                }),
                                (0, a.jsx)(p.h, { size: 16 }),
                                (0, a.jsx)(D.A, {
                                    imageUrl: Av,
                                    name: "" === Ag ? AA.intl.string(AA.t.EmqIwl) : Ag,
                                    description: "" === Ap ? AA.intl.string(AA.t["11NA2L"]) : Ap,
                                    formattedPrice: AI,
                                    role: AD,
                                    productType: Ak,
                                    ctaComponent: (0, a.jsx)(N.$, { text: AA.intl.string(AA.t.xUi3BL) }),
                                    cardWidth: 340,
                                    thumbnailHeight: 190,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, a.jsx)(x.jl, {
                "data-migration-pending": !0,
                children: (0, a.jsxs)("div", {
                    className: Ae.jj,
                    children: [
                        (0, a.jsxs)("div", {
                            className: Ae.mx,
                            children: [
                                (0, a.jsx)(Ar, {
                                    text: AA.intl.string(AA.t.YzGIVF),
                                    value: AE,
                                    onChange: (A) => {
                                        A ? AR((0, M.Jn)()) : AR(void 0);
                                    },
                                    warning: null === Ay ? (0, a.jsx)(M.id, {}) : void 0,
                                    disabled: null != AS,
                                }),
                                (0, a.jsx)(Ar, {
                                    text: AA.intl.string(AA.t.C6wP2Q),
                                    value: AT,
                                    onChange: (A) => {
                                        A
                                            ? AF(!0)
                                            : AW
                                              ? (0, g.A)({
                                                    title: AA.intl.string(AA.t["2WihyY"]),
                                                    subtitle: AA.intl.string(AA.t.ixRBLh),
                                                    confirmText: AA.intl.string(AA.t.N86XcP),
                                                    onConfirm: AG,
                                                })
                                              : AG();
                                    },
                                    disabled: AZ,
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: Ae.TM,
                            children: K
                                ? (0, a.jsx)(N.$, {
                                      variant: "secondary",
                                      text: AA.intl.string(AA.t.XYBEaV),
                                      disabled: !AJ,
                                      loading: AO,
                                      onClick: () => {
                                          s()(
                                              AJ,
                                              "cannot save changes for published product without adding all fields",
                                          ),
                                              Aw("update_publish"),
                                              A1(AY);
                                      },
                                  })
                                : (0, a.jsx)(N.$, {
                                      variant: "secondary",
                                      text: AA.intl.string(AA.t.ZCjwob),
                                      disabled: !AM,
                                      loading: AO,
                                      onClick: () => {
                                          s()(AM, "cannot save changes without name or price tier"),
                                              Aw("draft"),
                                              A1(AY);
                                      },
                                  }),
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(c.F, { component: "div", className: Ae.Nt, children: A$ }),
        ],
    });
}
function Ao(A) {
    return (0, a.jsx)(S.R, {
        guildId: A.guildId,
        editSkuId: A.productId ?? void 0,
        onFileSizeError: () => (0, W.A)(J.vN),
        children: (0, a.jsx)(As, { ...A }),
    });
}
