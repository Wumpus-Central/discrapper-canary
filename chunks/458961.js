t.d(e, { default: () => AA }), t(388685), t(953529);
var n = t(951288),
    r = t(647438),
    l = t(120356),
    a = t.n(l),
    i = t(512722),
    o = t.n(i),
    s = t(831209),
    d = t(399606),
    u = t(215569),
    c = t(159691),
    f = t(755721),
    g = t(481060),
    p = t(749210),
    m = t(852860),
    q = t(725803),
    h = t(313201),
    b = t(76535),
    C = t(215388),
    v = t(674180),
    U = t(884858),
    j = t(695346),
    x = t(485386),
    V = t(937615),
    P = t(73346),
    O = t(506071),
    F = t(587123),
    I = t(240864),
    K = t(863663),
    y = t(923400),
    N = t(623488),
    T = t(152980),
    X = t(120651),
    Z = t(871388),
    W = t(412110),
    Q = t(513669),
    z = t(972797),
    S = t(943516),
    R = t(302463),
    w = t(981631),
    B = t(674563),
    L = t(388032),
    k = t(179598);
function G(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                }),
            )),
            n.forEach(function (e) {
                var n;
                (n = t[e]),
                    e in A
                        ? Object.defineProperty(A, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (A[e] = n);
            });
    }
    return A;
}
function E(A, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e))
            : (function (A, e) {
                  var t = Object.keys(A);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(A);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(e)).forEach(function (t) {
                  Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t));
              }),
        A
    );
}
let Y = (0, h.hQ)(),
    D = (0, h.hQ)(),
    H = (0, h.hQ)();
function M(A) {
    let { text: e, onChange: t, value: r, disabled: l, warning: i } = A,
        o = (0, h.Dt)(),
        s = l ? "text-muted" : "text-default";
    return (0, n.jsxs)("label", {
        className: a()(k.benefitToggleContainer, { [k.disabled]: l }),
        htmlFor: o,
        children: [
            (0, n.jsx)(g.Text, {
                variant: "text-sm/medium",
                color: s,
                children: e,
            }),
            null != i &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(g.LZC, {
                            size: 4,
                            horizontal: !0,
                        }),
                        i,
                    ],
                }),
            (0, n.jsx)(g.LZC, {
                size: 16,
                horizontal: !0,
            }),
            (0, n.jsx)(f.T2, {
                onChange: t,
                checked: r,
                disabled: l,
                id: o,
            }),
        ],
    });
}
function J(A, e) {
    return A.filter((A) => {
        let { value: t, label: n } = A;
        return t.toString().includes(e) || n.includes(e);
    });
}
function _(A) {
    let { guildId: e, selectedPriceTier: t, setPriceTier: l } = A,
        { priceTiers: a } = (0, b.R)(e, w.RG5.GUILD_PRODUCTS),
        i = r.useMemo(
            () =>
                (null != a ? a : null != t ? [t] : []).map((A) => ({
                    value: A,
                    label: (0, V.T4)(A, w.pKx.USD),
                })),
            [a, t],
        );
    return (0, n.jsx)(g.VcW, {
        value: t,
        placeholder: L.intl.string(L.t.aI4J5O),
        maxVisibleItems: 5,
        options: i,
        onChange: l,
        filter: J,
        "aria-required": !0,
    });
}
function $(A) {
    var e, l, a, i, f, h, b, U;
    let { guildId: J, productId: $, transitionState: Ae, onClose: At } = A,
        [An, Ar] = r.useState($),
        Al = (0, d.e7)([I.Z], () => (null == An ? null : I.Z.getGuildProduct(An)), [An]),
        Aa = (0, d.e7)([I.Z], () => I.Z.getGuildProductsForGuild(J, { publishedOnly: !0 }).length, [J]),
        Ai = (null == Al ? void 0 : Al.published) === !0,
        { application: Ao } = (0, q.Z)(J, B.wW.GUILD_ROLE_SUBSCRIPTIONS),
        As = y.M["0"],
        Ad = j.QK.useSetting(),
        Au = (0, O.n)(),
        Ac = r.useCallback(() => {
            var A;
            return (null == Al || null == (A = Al.image_asset) ? void 0 : A.application_id) == null
                ? As.data
                : (0, P._W)(Al.image_asset.application_id, Al.image_asset, 600, Au && Ad ? void 0 : "webp");
        }, [As, Al, Au, Ad]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: Af } = (0, v.gX)(J);
    r.useEffect(() => {
        Af && (At(), (0, Z.B)(L.intl.string(L.t.OLf3xs), L.t["90LBVl"]));
    }, [Af, At]);
    let [Ag, Ap] = r.useState(null != (a = null == Al ? void 0 : Al.name) ? a : ""),
        [Am, Aq] = r.useState(null != (i = null == Al ? void 0 : Al.description) ? i : ""),
        [Ah, Ab] = r.useState(null != (f = null == Al ? void 0 : Al.price_tier) ? f : void 0),
        [AC, Av] = r.useState(Ac),
        [AU, Aj] = r.useState(
            null != (h = null == Al || null == (e = Al.image_asset) ? void 0 : e.filename) ? h : As.name,
        ),
        [Ax, AV] = r.useState(!1),
        [AP, AO] = r.useState(),
        AF = r.useMemo(() => (null != Ah ? (0, V.T4)(Ah, w.pKx.USD) : void 0), [Ah]),
        [AI, AK] = r.useState(!0),
        {
            changesSaving: Ay,
            saveError: AN,
            saveProductWithAttachments: AT,
            hasUnsavedAttachmentChanges: AX,
            cancelUnusedUploads: AZ,
        } = (0, F.P)(),
        AW = (null == Al ? void 0 : Al.attachments) != null && (null == Al ? void 0 : Al.attachments.length) > 0,
        AQ = null != AN ? AN : AP,
        Az = null != Ay && "published" in Ay,
        AS = null != Ay && !Az,
        AR = null != (b = null == Al ? void 0 : Al.role_id) ? b : null,
        [Aw, AB] = r.useState(),
        AL = null != Aw || null != AR,
        Ak = (0, d.e7)([x.Z], () => (null != AR && null !== Aw ? x.Z.getRole(J, AR) : null != Aw ? Aw : void 0), [
            Aw,
            AR,
            J,
        ]),
        AG = "";
    AL && AI
        ? (AG = L.intl.string(L.t.ih4QMT))
        : AL
          ? (AG = L.intl.string(L.t.o9xphY))
          : AI && (AG = L.intl.string(L.t.DWYJub));
    let AE = () => {
            AK(!1), AZ();
        },
        [AY, AD] = r.useState(),
        {
            changes: AH,
            hasUnsavedChanges: AM,
            canSaveForDraft: AJ,
            canSaveForPublished: A_,
            canPublishOrUnpublish: A$,
        } = r.useMemo(
            () =>
                (0, K.fG)({
                    guildProductListing: Al,
                    name: Ag,
                    priceTier: Ah,
                    description: Am,
                    image: AC,
                    imageName: AU,
                    isImageChanged: Ax,
                    newRoleParams: Aw,
                    hasSavedAttachments: AW,
                    hasUnsavedAttachmentChanges: AX,
                }),
            [Al, Ag, Ah, Am, AC, AU, Ax, Aw, AW, AX],
        ),
        A0 = r.useMemo(
            () =>
                AM || null == AY || "publish" === AY || null != AQ
                    ? null
                    : (0, n.jsx)(g.oXn, {
                          className: k.successNotice,
                          children: (0, n.jsx)(m.Z, {
                              message: (0, n.jsxs)("div", {
                                  className: k.successNoticeMessage,
                                  children: [
                                      (0, n.jsx)(g.owK, {
                                          size: "md",
                                          color: s.Z.BUTTON_POSITIVE_BACKGROUND,
                                          secondaryColor: s.Z.WHITE,
                                      }),
                                      (0, n.jsx)(g.Text, {
                                          variant: "text-md/medium",
                                          children:
                                              "draft" === AY
                                                  ? L.intl.string(L.t["3Rv4MD"])
                                                  : "update_publish" === AY
                                                    ? L.intl.string(L.t["8fPiBw"])
                                                    : L.intl.string(L.t["3LUFnJ"]),
                                      }),
                                  ],
                              }),
                              onReset: () => AD(void 0),
                              onResetText: L.intl.string(L.t.T6QuWV),
                          }),
                      }),
            [AQ, AM, AY],
        ),
        A1 = r.useCallback(() => {
            AM
                ? (0, X.Z)({
                      title: L.intl.string(L.t.FVDhIS),
                      body: L.intl.string(L.t.Hgdhwc),
                      cta: L.intl.string(L.t.h0bti4),
                      closeLabel: L.intl.string(L.t["+WYo0t"]),
                      onConfirm: () => {
                          At();
                      },
                  })
                : At();
        }, [At, AM]);
    r.useEffect(() => {
        (0, g.oav)(
            R.Yz,
            (A) =>
                (0, n.jsx)(
                    AA,
                    G(
                        {
                            guildId: J,
                            productId: An,
                        },
                        A,
                    ),
                ),
            A1,
        );
    }, [J, A1, An]);
    let A3 = async (A) => {
        let e = (0, K.pM)({ newRoleParams: Aw });
        if ((AO(e), null != e)) return;
        let t = await AT(A);
        if ((AV(!1), null != t)) {
            if ((null != A.name && Ap(t.name), null != A.description && Aq(t.description), null != Aw)) {
                let A = t.role_id;
                o()(null != A, "Cannot update role without role ID"), await p.Z.updateRole(J, A, Aw);
            }
            AB(void 0), Ar(t.id), "published" in A && !0 === A.published && At();
        }
    };
    r.useEffect(() => {
        if (null != AQ) {
            var A;
            (0, W.V)(AQ, J, null == Ao || null == (A = Ao.team) ? void 0 : A.id);
        }
    }, [AQ, J, Ao]),
        r.useEffect(() => {
            AM && AD(void 0);
        }, [AM]);
    let A9 = r.useRef(null),
        A6 = !A$ || (!Ai && Aa >= R.dD);
    return (0, n.jsxs)(g.Y0X, {
        transitionState: Ae,
        size: g.CgR.DYNAMIC,
        className: k.modalRoot,
        "aria-labelledby": Y,
        parentComponent: "GuildProductEditModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsxs)(g.xBx, {
                className: k.modalHeader,
                separator: !1,
                "data-migration-pending": !0,
                children: [
                    (0, n.jsxs)("div", {
                        className: k.headerText,
                        children: [
                            (0, n.jsx)(g.X6q, {
                                id: Y,
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: L.intl.string(L.t.DnNl1d),
                            }),
                            (0, n.jsx)(g.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: L.intl.string(L.t["Tu7f+f"]),
                            }),
                        ],
                    }),
                    (0, n.jsx)(g.olH, {
                        onClick: A1,
                        className: k.__invalid_modalCloseButton,
                        "data-migration-pending": !0,
                    }),
                ],
            }),
            (0, n.jsxs)(g.hzk, {
                className: k.modalContent,
                scrollbarType: "none",
                "data-migration-pending": !0,
                children: [
                    (0, n.jsx)(g.zJl, {
                        children: (0, n.jsxs)("div", {
                            className: k.productFieldsSection,
                            ref: A9,
                            children: [
                                (0, n.jsx)(g.oil, {
                                    label: L.intl.string(L.t.Hsk7xc),
                                    error: null == AQ ? void 0 : AQ.getFirstFieldErrorMessage("name"),
                                    value: Ag,
                                    onChange: Ap,
                                    id: D,
                                    maxLength: 100,
                                    placeholder: L.intl.string(L.t["/BiYSE"]),
                                    required: !0,
                                }),
                                (0, n.jsx)(g.xJW, {
                                    title: L.intl.string(L.t.QdKLyc),
                                    error: null == AQ ? void 0 : AQ.getFirstFieldErrorMessage("description"),
                                    htmlFor: H,
                                    children: (0, n.jsx)(C.Z, {
                                        id: H,
                                        className: k.descriptionArea,
                                        value: Am,
                                        onChange: Aq,
                                        maxLength: 1500,
                                        placeholder: L.intl.string(L.t.BFwyur),
                                        showCharacterCount: Am.length > 0,
                                        parentModalKey: R.Yz,
                                        required: !0,
                                    }),
                                }),
                                (0, n.jsx)(g.xJW, {
                                    title: L.intl.string(L.t["CAY/vr"]),
                                    error: null == AQ ? void 0 : AQ.getFirstFieldErrorMessage("price_tier"),
                                    children: (0, n.jsx)(_, {
                                        guildId: J,
                                        selectedPriceTier: Ah,
                                        setPriceTier: Ab,
                                    }),
                                }),
                                (0, n.jsxs)(g.xJW, {
                                    title: L.intl.string(L.t["sqXj6+"]),
                                    error: null == AQ ? void 0 : AQ.getFirstFieldErrorMessage("image"),
                                    titleClassName: k.thumbnailLabel,
                                    children: [
                                        (0, n.jsx)(g.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: L.intl.string(L.t.yOU4Vl),
                                        }),
                                        (0, n.jsx)(g.LZC, { size: 10 }),
                                        (0, n.jsx)(Q.Z, {
                                            presetImages: y.M,
                                            radioGroupAriaLabel: L.intl.string(L.t.fKzQj4),
                                            image: AC,
                                            imageName: AU,
                                            savedImageName:
                                                null == Al || null == (l = Al.image_asset) ? void 0 : l.filename,
                                            onChange: (A, e) => {
                                                if (null != A) {
                                                    var t;
                                                    Av(A),
                                                        Aj(e),
                                                        AV(
                                                            A.startsWith("data:") ||
                                                                e !==
                                                                    (null == Al || null == (t = Al.image_asset)
                                                                        ? void 0
                                                                        : t.filename),
                                                        );
                                                }
                                            },
                                        }),
                                    ],
                                }),
                                AI
                                    ? (0, n.jsx)(g.xJW, {
                                          title: L.intl.string(L.t.zLrtkJ),
                                          error: null == AQ ? void 0 : AQ.getFirstFieldErrorMessage("attachments"),
                                          children: (0, n.jsx)(T.s, {
                                              onFileAdded: () => {
                                                  var A;
                                                  null == (A = A9.current) ||
                                                      A.scrollIntoView({
                                                          behavior: "smooth",
                                                          block: "end",
                                                      });
                                              },
                                          }),
                                      })
                                    : null,
                                AL
                                    ? (0, n.jsx)(S.ZP, {
                                          error:
                                              null != (U = null == AQ ? void 0 : AQ.getFirstFieldErrorMessage(K.NB))
                                                  ? U
                                                  : void 0,
                                          newRoleParams: Aw,
                                          setNewRoleParams: AB,
                                          guildId: J,
                                          listingRoleId: AR,
                                          productId: An,
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, n.jsx)("div", { className: k.horizontalSeparator }),
                    (0, n.jsx)(g.zJl, {
                        children: (0, n.jsxs)("div", {
                            className: k.productPreview,
                            children: [
                                (0, n.jsx)(z.Z, {
                                    disabled: A6,
                                    disabledTooltip: Ai
                                        ? L.intl.string(L.t["0NQ00t"])
                                        : Aa >= R.dD
                                          ? L.intl.format(L.t.IqWPVl, { maxProducts: R.dD })
                                          : L.intl.string(L.t["Ax89/f"]),
                                    published: Ai,
                                    onClick: () => {
                                        o()(A$, "Attempting to publish/unpublish when not allowed"),
                                            AD(Ai ? "unpublish" : "publish"),
                                            A3(E(G({}, AH), { published: !Ai }));
                                    },
                                    submitting: Az,
                                }),
                                (0, n.jsx)("div", { className: k.verticalSeparator }),
                                (0, n.jsx)(g.X6q, {
                                    variant: "text-xs/bold",
                                    color: "header-secondary",
                                    className: k.previewHeading,
                                    children: L.intl.string(L.t["6I7nQU"]),
                                }),
                                (0, n.jsx)(g.LZC, { size: 4 }),
                                (0, n.jsx)(g.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: L.intl.string(L.t.Oq4dfX),
                                }),
                                (0, n.jsx)(g.LZC, { size: 16 }),
                                (0, n.jsx)(N.Z, {
                                    imageUrl: AC,
                                    name: "" === Ag ? L.intl.string(L.t.EmqIws) : Ag,
                                    description: "" === Am ? L.intl.string(L.t["11NA2N"]) : Am,
                                    formattedPrice: AF,
                                    role: Ak,
                                    productType: AG,
                                    ctaComponent: (0, n.jsx)(c.zxk, { text: L.intl.string(L.t.xUi3BA) }),
                                    cardWidth: 340,
                                    thumbnailHeight: 190,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(g.mzw, {
                "data-migration-pending": !0,
                children: (0, n.jsxs)("div", {
                    className: k.footerActionButtons,
                    children: [
                        (0, n.jsxs)("div", {
                            className: k.footerActionLeftButtons,
                            children: [
                                (0, n.jsx)(M, {
                                    text: L.intl.string(L.t.YzGIVF),
                                    value: AL,
                                    onChange: (A) => {
                                        A ? AB((0, S.YP)()) : AB(void 0);
                                    },
                                    warning: null === Aw ? (0, n.jsx)(S.aN, {}) : void 0,
                                    disabled: null != AR,
                                }),
                                (0, n.jsx)(M, {
                                    text: L.intl.string(L.t.C6wP2d),
                                    value: AI,
                                    onChange: (A) => {
                                        A
                                            ? AK(!0)
                                            : AX
                                              ? (0, g.ZDy)(async () => {
                                                    let { ConfirmModal: A } = await Promise.resolve().then(
                                                        t.bind(t, 481060),
                                                    );
                                                    return (e) =>
                                                        (0, n.jsx)(
                                                            A,
                                                            E(G({}, e), {
                                                                header: L.intl.string(L.t["2Wihyc"]),
                                                                confirmText: L.intl.string(L.t.N86XcH),
                                                                cancelText: L.intl.string(L.t["ETE/oK"]),
                                                                onConfirm: AE,
                                                                children: (0, n.jsx)(g.Text, {
                                                                    variant: "text-md/normal",
                                                                    children: L.intl.string(L.t.ixRBLi),
                                                                }),
                                                            }),
                                                        );
                                                })
                                              : AE();
                                    },
                                    disabled: AW,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: k.footerActionRightButtons,
                            children: Ai
                                ? (0, n.jsx)(c.zxk, {
                                      variant: "secondary",
                                      text: L.intl.string(L.t.XYBEaW),
                                      disabled: !A_,
                                      loading: AS,
                                      onClick: () => {
                                          o()(
                                              A_,
                                              "cannot save changes for published product without adding all fields",
                                          ),
                                              AD("update_publish"),
                                              A3(AH);
                                      },
                                  })
                                : (0, n.jsx)(c.zxk, {
                                      variant: "secondary",
                                      text: L.intl.string(L.t.ZCjwoa),
                                      disabled: !AJ,
                                      loading: AS,
                                      onClick: () => {
                                          o()(AJ, "cannot save changes without name or price tier"),
                                              AD("draft"),
                                              A3(AH);
                                      },
                                  }),
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(u.W, {
                component: "div",
                className: k.successNoticeContainer,
                children: A0,
            }),
        ],
    });
}
function AA(A) {
    var e;
    return (0, n.jsx)(F.W, {
        guildId: A.guildId,
        editSkuId: null != (e = A.productId) ? e : void 0,
        onFileSizeError: () => (0, U.Z)(R.ve),
        children: (0, n.jsx)($, G({}, A)),
    });
}
