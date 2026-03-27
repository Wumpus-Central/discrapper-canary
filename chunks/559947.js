t.d(e, { default: () => J });
var n = t(627968),
    a = t(64700),
    r = t(503698),
    i = t.n(r),
    l = t(284009),
    s = t.n(l),
    o = t(417597),
    d = t(827734),
    u = t(73939),
    c = t(36525),
    g = t(314116),
    q = t(397927),
    p = t(686956),
    f = t(262828),
    m = t(915089),
    h = t(722888),
    C = t(809506),
    v = t(465932),
    U = t(2553),
    V = t(253932),
    x = t(317525),
    b = t(580630),
    j = t(371794),
    K = t(218394),
    N = t(464990),
    F = t(871109),
    T = t(253141),
    I = t(937409),
    X = t(500770),
    W = t(563838),
    P = t(426043),
    Q = t(575077),
    Z = t(692646),
    z = t(184119),
    O = t(717040),
    L = t(319543),
    S = t(500208),
    R = t(652215),
    G = t(705751),
    y = t(985018),
    k = t(933354);
let D = (0, m.Ld)(),
    B = (0, m.Ld)(),
    E = (0, m.Ld)();
function Y(A) {
    let { text: e, onChange: t, value: a, disabled: r, warning: l } = A,
        s = (0, m.GV)(),
        o = r ? "text-muted" : "text-default";
    return (0, n.jsxs)("label", {
        className: i()(k.$4, { [k.r9]: r }),
        htmlFor: s,
        children: [
            (0, n.jsx)(q.Text, { variant: "text-sm/medium", color: o, children: e }),
            null != l && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(q.hKd, { size: 4, horizontal: !0 }), l] }),
            (0, n.jsx)(q.dOG, { onChange: t, checked: a, disabled: r, id: s }),
        ],
    });
}
function w(A, e) {
    return A.filter((A) => {
        let { value: t, label: n } = A;
        return t.toString().includes(e) || n.includes(e);
    });
}
function H(A) {
    let { guildId: e, selectedPriceTier: t, setPriceTier: r, label: i, errorMessage: l } = A,
        { priceTiers: s } = (0, h._)(e, R.L_o.GUILD_PRODUCTS),
        o = a.useMemo(
            () =>
                (s ?? (null != t ? [t] : [])).map((A) => ({
                    id: A.toString(),
                    value: A,
                    label: (0, b.$g)(A, R.Yri.USD),
                })),
            [s, t],
        );
    return (0, n.jsx)(q.ZiE, {
        selectionMode: "single",
        label: i,
        errorMessage: l,
        value: t,
        placeholder: y.intl.string(y.t.aI4J5H),
        maxOptionsVisible: 5,
        options: o,
        onSelectionChange: r,
        customMatchSorter: w,
        required: !0,
    });
}
function M(A) {
    let { guildId: e, productId: t, transitionState: r, onClose: i } = A,
        [l, m] = a.useState(t),
        h = (0, o.bG)([F.A], () => (null == l ? null : F.A.getGuildProduct(l)), [l]),
        U = (0, o.bG)([F.A], () => F.A.getGuildProductsForGuild(e, { publishedOnly: !0 }).length, [e]),
        w = h?.published === !0,
        { application: M } = (0, f.A)(e, G.S7.GUILD_ROLE_SUBSCRIPTIONS),
        _ = I.D["0"],
        $ = V.kt.useSetting(),
        AA = (0, K.j)(),
        Ae = a.useCallback(
            () =>
                h?.image_asset?.application_id == null
                    ? _.data
                    : (0, j.YE)(h.image_asset.application_id, h.image_asset, 600, AA && $ ? void 0 : "webp"),
            [_, h, AA, $],
        ),
        { shouldRestrictUpdatingCreatorMonetizationSettings: At } = (0, v.nq)(e);
    a.useEffect(() => {
        At && (i(), (0, Q.p)(y.intl.string(y.t.OLf3xn), y.t["90LBVr"]));
    }, [At, i]);
    let [An, Aa] = a.useState(h?.name ?? ""),
        [Ar, Ai] = a.useState(h?.description ?? ""),
        [Al, As] = a.useState(h?.price_tier ?? void 0),
        [Ao, Ad] = a.useState(Ae),
        [Au, Ac] = a.useState(h?.image_asset?.filename ?? _.name),
        [Ag, Aq] = a.useState(!1),
        [Ap, Af] = a.useState(),
        Am = a.useMemo(() => (null != Al ? (0, b.$g)(Al, R.Yri.USD) : void 0), [Al]),
        [Ah, AC] = a.useState(!0),
        {
            changesSaving: Av,
            saveError: AU,
            saveProductWithAttachments: AV,
            hasUnsavedAttachmentChanges: Ax,
            cancelUnusedUploads: Ab,
        } = (0, N.Z)(),
        Aj = h?.attachments != null && h?.attachments.length > 0,
        AK = AU ?? Ap,
        AN = null != Av && "published" in Av,
        AF = null != Av && !AN,
        AT = h?.role_id ?? null,
        [AI, AX] = a.useState(),
        AW = null != AI || null != AT,
        AP = (0, o.bG)([x.A], () => (null != AT && null !== AI ? x.A.getRole(e, AT) : (AI ?? void 0)), [AI, AT, e]),
        AQ = "";
    AW && Ah
        ? (AQ = y.intl.string(y.t.ih4QMU))
        : AW
          ? (AQ = y.intl.string(y.t.o9xphc))
          : Ah && (AQ = y.intl.string(y.t.DWYJua));
    let AZ = () => {
            AC(!1), Ab();
        },
        [Az, AO] = a.useState(),
        {
            changes: AL,
            hasUnsavedChanges: AS,
            canSaveForDraft: AR,
            canSaveForPublished: AG,
            canPublishOrUnpublish: Ay,
        } = a.useMemo(
            () =>
                (0, T.EY)({
                    guildProductListing: h,
                    name: An,
                    priceTier: Al,
                    description: Ar,
                    image: Ao,
                    imageName: Au,
                    isImageChanged: Ag,
                    newRoleParams: AI,
                    hasSavedAttachments: Aj,
                    hasUnsavedAttachmentChanges: Ax,
                }),
            [h, An, Al, Ar, Ao, Au, Ag, AI, Aj, Ax],
        ),
        Ak = a.useMemo(
            () =>
                AS || null == Az || "publish" === Az || null != AK
                    ? null
                    : (0, n.jsx)(q.FQk, {
                          className: k.Er,
                          children: (0, n.jsx)(c.A, {
                              message: (0, n.jsxs)("div", {
                                  className: k.Lk,
                                  children: [
                                      (0, n.jsx)(q.yr3, {
                                          size: "md",
                                          color: d.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT.css,
                                          secondaryColor: d.A.colors.WHITE.css,
                                      }),
                                      (0, n.jsx)(q.Text, {
                                          variant: "text-md/medium",
                                          children:
                                              "draft" === Az
                                                  ? y.intl.string(y.t["3Rv4MB"])
                                                  : "update_publish" === Az
                                                    ? y.intl.string(y.t["8fPiB3"])
                                                    : y.intl.string(y.t["3LUFnI"]),
                                      }),
                                  ],
                              }),
                              onReset: () => AO(void 0),
                              onResetText: y.intl.string(y.t.T6QuWe),
                          }),
                      }),
            [AK, AS, Az],
        ),
        AD = a.useCallback(() => {
            AS
                ? (0, P.A)({
                      title: y.intl.string(y.t.FVDhIW),
                      body: y.intl.string(y.t.Hgdhwb),
                      cta: y.intl.string(y.t["h0bti/"]),
                      closeLabel: y.intl.string(y.t["+WYo0m"]),
                      onConfirm: () => {
                          i();
                      },
                  })
                : i();
        }, [i, AS]);
    a.useEffect(() => {
        (0, q.zbz)(S.DG, (A) => (0, n.jsx)(J, { guildId: e, productId: l, ...A }), AD);
    }, [e, AD, l]);
    let AB = async (A) => {
        let t = (0, T.ig)({ newRoleParams: AI });
        if ((Af(t), null != t)) return;
        let n = await AV(A);
        if ((Aq(!1), null != n)) {
            if ((null != A.name && Aa(n.name), null != A.description && Ai(n.description), null != AI)) {
                let A = n.role_id;
                s()(null != A, "Cannot update role without role ID"), await p.A.updateRole(e, A, AI);
            }
            AX(void 0), m(n.id), "published" in A && !0 === A.published && i();
        }
    };
    a.useEffect(() => {
        null != AK && (0, Z.Z)(AK, e, M?.team?.id);
    }, [AK, e, M]),
        a.useEffect(() => {
            AS && AO(void 0);
        }, [AS]);
    let AE = a.useRef(null);
    return (0, n.jsxs)(q.EOs, {
        transitionState: r,
        size: q.rIJ.DYNAMIC,
        className: k.CR,
        "aria-labelledby": D,
        parentComponent: "GuildProductEditModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsxs)(q.rQ0, {
                className: k.Hc,
                separator: !1,
                "data-migration-pending": !0,
                children: [
                    (0, n.jsxs)("div", {
                        className: k.TK,
                        children: [
                            (0, n.jsx)(q.Heading, {
                                id: D,
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: y.intl.string(y.t.DnNl1T),
                            }),
                            (0, n.jsx)(q.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: y.intl.string(y.t["Tu7f+f"]),
                            }),
                        ],
                    }),
                    (0, n.jsx)(q.s_y, {
                        onClick: AD,
                        className: k.__invalid_modalCloseButton,
                        "data-migration-pending": !0,
                    }),
                ],
            }),
            (0, n.jsxs)(q.$mQ, {
                className: k.jE,
                scrollbarType: "none",
                "data-migration-pending": !0,
                children: [
                    (0, n.jsx)(q.IpV, {
                        children: (0, n.jsxs)("div", {
                            className: k.sj,
                            ref: AE,
                            children: [
                                (0, n.jsx)(q.ksK, {
                                    label: y.intl.string(y.t.Hsk7xT),
                                    error: AK?.getFirstFieldErrorMessage("name"),
                                    value: An,
                                    onChange: Aa,
                                    id: B,
                                    maxLength: 100,
                                    placeholder: y.intl.string(y.t["/BiYSO"]),
                                    required: !0,
                                }),
                                (0, n.jsx)(C.A, {
                                    label: y.intl.string(y.t.QdKLyW),
                                    errorMessage: AK?.getFirstFieldErrorMessage("description") ?? void 0,
                                    id: E,
                                    className: k.kj,
                                    value: Ar,
                                    onChange: Ai,
                                    maxLength: 1500,
                                    placeholder: y.intl.string(y.t.BFwyum),
                                    showCharacterCount: Ar.length > 0,
                                    parentModalKey: S.DG,
                                    required: !0,
                                }),
                                (0, n.jsx)(H, {
                                    label: y.intl.string(y.t["CAY/vh"]),
                                    errorMessage: AK?.getFirstFieldErrorMessage("price_tier") ?? void 0,
                                    guildId: e,
                                    selectedPriceTier: Al,
                                    setPriceTier: As,
                                }),
                                (0, n.jsx)(q.D0$, {
                                    label: y.intl.string(y.t.sqXj60),
                                    errorMessage: AK?.getFirstFieldErrorMessage("image") ?? void 0,
                                    description: y.intl.string(y.t.yOU4Vm),
                                    children: (0, n.jsx)(z.A, {
                                        presetImages: I.D,
                                        radioGroupAriaLabel: y.intl.string(y.t.fKzQj0),
                                        image: Ao,
                                        imageName: Au,
                                        savedImageName: h?.image_asset?.filename,
                                        onChange: (A, e) => {
                                            null != A &&
                                                (Ad(A),
                                                Ac(e),
                                                Aq(A.startsWith("data:") || e !== h?.image_asset?.filename));
                                        },
                                    }),
                                }),
                                Ah
                                    ? (0, n.jsx)(q.D0$, {
                                          label: y.intl.string(y.t.zLrtkN),
                                          errorMessage: AK?.getFirstFieldErrorMessage("attachments") ?? void 0,
                                          children: (0, n.jsx)(W.F, {
                                              onFileAdded: () => {
                                                  AE.current?.scrollIntoView({ behavior: "smooth", block: "end" });
                                              },
                                          }),
                                      })
                                    : null,
                                AW
                                    ? (0, n.jsx)(L.Ay, {
                                          error: AK?.getFirstFieldErrorMessage(T.a) ?? void 0,
                                          newRoleParams: AI,
                                          setNewRoleParams: AX,
                                          guildId: e,
                                          listingRoleId: AT,
                                          productId: l,
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, n.jsx)("div", { className: k.cD }),
                    (0, n.jsx)(q.IpV, {
                        children: (0, n.jsxs)("div", {
                            className: k.mA,
                            children: [
                                (0, n.jsx)(O.A, {
                                    disabled: !Ay || (!w && U >= 50),
                                    disabledTooltip: w
                                        ? y.intl.string(y.t["0NQ00t"])
                                        : U >= 50
                                          ? y.intl.format(y.t.IqWPVt, { maxProducts: 50 })
                                          : y.intl.string(y.t["Ax89/c"]),
                                    published: w,
                                    onClick: () => {
                                        s()(Ay, "Attempting to publish/unpublish when not allowed"),
                                            AO(w ? "unpublish" : "publish"),
                                            AB({ ...AL, published: !w });
                                    },
                                    submitting: AN,
                                }),
                                (0, n.jsx)("div", { className: k.AC }),
                                (0, n.jsx)(q.Heading, {
                                    variant: "text-xs/bold",
                                    color: "text-default",
                                    className: k.B9,
                                    children: y.intl.string(y.t["6I7nQT"]),
                                }),
                                (0, n.jsx)(q.hKd, { size: 4 }),
                                (0, n.jsx)(q.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: y.intl.string(y.t.Oq4dfU),
                                }),
                                (0, n.jsx)(q.hKd, { size: 16 }),
                                (0, n.jsx)(X.A, {
                                    imageUrl: Ao,
                                    name: "" === An ? y.intl.string(y.t.EmqIwl) : An,
                                    description: "" === Ar ? y.intl.string(y.t["11NA2L"]) : Ar,
                                    formattedPrice: Am,
                                    role: AP,
                                    productType: AQ,
                                    ctaComponent: (0, n.jsx)(q.Button, { text: y.intl.string(y.t.xUi3BL) }),
                                    cardWidth: 340,
                                    thumbnailHeight: 190,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(q.jlY, {
                "data-migration-pending": !0,
                children: (0, n.jsxs)("div", {
                    className: k.jj,
                    children: [
                        (0, n.jsxs)("div", {
                            className: k.mx,
                            children: [
                                (0, n.jsx)(Y, {
                                    text: y.intl.string(y.t.YzGIVF),
                                    value: AW,
                                    onChange: (A) => {
                                        A ? AX((0, L.Jn)()) : AX(void 0);
                                    },
                                    warning: null === AI ? (0, n.jsx)(L.id, {}) : void 0,
                                    disabled: null != AT,
                                }),
                                (0, n.jsx)(Y, {
                                    text: y.intl.string(y.t.C6wP2Q),
                                    value: Ah,
                                    onChange: (A) => {
                                        A
                                            ? AC(!0)
                                            : Ax
                                              ? (0, g.A)({
                                                    title: y.intl.string(y.t["2WihyY"]),
                                                    subtitle: y.intl.string(y.t.ixRBLh),
                                                    confirmText: y.intl.string(y.t.N86XcP),
                                                    onConfirm: AZ,
                                                })
                                              : AZ();
                                    },
                                    disabled: Aj,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: k.TM,
                            children: w
                                ? (0, n.jsx)(q.Button, {
                                      variant: "secondary",
                                      text: y.intl.string(y.t.XYBEaV),
                                      disabled: !AG,
                                      loading: AF,
                                      onClick: () => {
                                          s()(
                                              AG,
                                              "cannot save changes for published product without adding all fields",
                                          ),
                                              AO("update_publish"),
                                              AB(AL);
                                      },
                                  })
                                : (0, n.jsx)(q.Button, {
                                      variant: "secondary",
                                      text: y.intl.string(y.t.ZCjwob),
                                      disabled: !AR,
                                      loading: AF,
                                      onClick: () => {
                                          s()(AR, "cannot save changes without name or price tier"),
                                              AO("draft"),
                                              AB(AL);
                                      },
                                  }),
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(u.F, { component: "div", className: k.Nt, children: Ak }),
        ],
    });
}
function J(A) {
    return (0, n.jsx)(N.R, {
        guildId: A.guildId,
        editSkuId: A.productId ?? void 0,
        onFileSizeError: () => (0, U.A)(S.vN),
        children: (0, n.jsx)(M, { ...A }),
    });
}
