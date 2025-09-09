t.d(e, { default: () => AA }), t(388685), t(953529);
var n = t(951288),
    r = t(647438),
    a = t(120356),
    l = t.n(a),
    i = t(512722),
    o = t.n(i),
    s = t(831209),
    d = t(399606),
    c = t(215569),
    u = t(159691),
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
    X = t(809659),
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
    let { text: e, onChange: t, value: r, disabled: a, warning: i } = A,
        o = (0, h.Dt)(),
        s = a ? "text-muted" : "text-default";
    return (0, n.jsxs)("label", {
        className: l()(k.benefitToggleContainer, { [k.disabled]: a }),
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
                disabled: a,
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
    let { guildId: e, selectedPriceTier: t, setPriceTier: a } = A,
        { priceTiers: l } = (0, b.R)(e, w.RG5.GUILD_PRODUCTS),
        i = r.useMemo(
            () =>
                (null != l ? l : null != t ? [t] : []).map((A) => ({
                    value: A,
                    label: (0, V.T4)(A, w.pKx.USD),
                })),
            [l, t],
        );
    return (0, n.jsx)(g.VcW, {
        value: t,
        placeholder: L.intl.string(L.t.aI4J5O),
        maxVisibleItems: 5,
        options: i,
        onChange: a,
        filter: J,
        "aria-required": !0,
    });
}
function $(A) {
    var e, a, l, i, f, h, b, U;
    let { guildId: J, productId: $, transitionState: Ae, onClose: At } = A,
        [An, Ar] = r.useState($),
        Aa = (0, d.e7)([I.Z], () => (null == An ? null : I.Z.getGuildProduct(An)), [An]),
        Al = (null == Aa ? void 0 : Aa.published) === !0,
        { application: Ai } = (0, q.Z)(J, B.wW.GUILD_ROLE_SUBSCRIPTIONS),
        Ao = y.M["0"],
        As = j.QK.useSetting(),
        Ad = (0, O.n)(),
        Ac = r.useCallback(() => {
            var A;
            return (null == Aa || null == (A = Aa.image_asset) ? void 0 : A.application_id) == null
                ? Ao.data
                : (0, P._W)(Aa.image_asset.application_id, Aa.image_asset, 600, Ad && As ? void 0 : "webp");
        }, [Ao, Aa, Ad, As]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: Au } = (0, v.gX)(J);
    r.useEffect(() => {
        Au && (At(), (0, Z.B)(L.intl.string(L.t.OLf3xs), L.t["90LBVl"]));
    }, [Au, At]);
    let [Af, Ag] = r.useState(null != (l = null == Aa ? void 0 : Aa.name) ? l : ""),
        [Ap, Am] = r.useState(null != (i = null == Aa ? void 0 : Aa.description) ? i : ""),
        [Aq, Ah] = r.useState(null != (f = null == Aa ? void 0 : Aa.price_tier) ? f : void 0),
        [Ab, AC] = r.useState(Ac),
        [Av, AU] = r.useState(
            null != (h = null == Aa || null == (e = Aa.image_asset) ? void 0 : e.filename) ? h : Ao.name,
        ),
        [Aj, Ax] = r.useState(!1),
        [AV, AP] = r.useState(),
        AO = r.useMemo(() => (null != Aq ? (0, V.T4)(Aq, w.pKx.USD) : void 0), [Aq]),
        [AF, AI] = r.useState(!0),
        {
            changesSaving: AK,
            saveError: Ay,
            saveProductWithAttachments: AN,
            hasUnsavedAttachmentChanges: AT,
            cancelUnusedUploads: AX,
        } = (0, F.P)(),
        AZ = (null == Aa ? void 0 : Aa.attachments) != null && (null == Aa ? void 0 : Aa.attachments.length) > 0,
        AW = null != Ay ? Ay : AV,
        AQ = null != AK && "published" in AK,
        Az = null != AK && !AQ,
        AS = null != (b = null == Aa ? void 0 : Aa.role_id) ? b : null,
        [AR, Aw] = r.useState(),
        AB = null != AR || null != AS,
        AL = (0, d.e7)([x.Z], () => (null != AS && null !== AR ? x.Z.getRole(J, AS) : null != AR ? AR : void 0), [
            AR,
            AS,
            J,
        ]),
        Ak = "";
    AB && AF
        ? (Ak = L.intl.string(L.t.ih4QMT))
        : AB
          ? (Ak = L.intl.string(L.t.o9xphY))
          : AF && (Ak = L.intl.string(L.t.DWYJub));
    let AG = () => {
            AI(!1), AX();
        },
        [AE, AY] = r.useState(),
        {
            changes: AD,
            hasUnsavedChanges: AH,
            canSaveForDraft: AM,
            canSaveForPublished: AJ,
            canPublishOrUnpublish: A_,
        } = r.useMemo(
            () =>
                (0, K.fG)({
                    guildProductListing: Aa,
                    name: Af,
                    priceTier: Aq,
                    description: Ap,
                    image: Ab,
                    imageName: Av,
                    isImageChanged: Aj,
                    newRoleParams: AR,
                    hasSavedAttachments: AZ,
                    hasUnsavedAttachmentChanges: AT,
                }),
            [Aa, Af, Aq, Ap, Ab, Av, Aj, AR, AZ, AT],
        ),
        A$ = r.useMemo(
            () =>
                AH || null == AE || "publish" === AE || null != AW
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
                                              "draft" === AE
                                                  ? L.intl.string(L.t["3Rv4MD"])
                                                  : "update_publish" === AE
                                                    ? L.intl.string(L.t["8fPiBw"])
                                                    : L.intl.string(L.t["3LUFnJ"]),
                                      }),
                                  ],
                              }),
                              onReset: () => AY(void 0),
                              onResetText: L.intl.string(L.t.T6QuWV),
                          }),
                      }),
            [AW, AH, AE],
        ),
        A0 = r.useCallback(() => {
            AH
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
        }, [At, AH]);
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
            A0,
        );
    }, [J, A0, An]);
    let A1 = async (A) => {
        let e = (0, K.pM)({ newRoleParams: AR });
        if ((AP(e), null != e)) return;
        let t = await AN(A);
        if ((Ax(!1), null != t)) {
            if ((null != A.name && Ag(t.name), null != A.description && Am(t.description), null != AR)) {
                let A = t.role_id;
                o()(null != A, "Cannot update role without role ID"), await p.Z.updateRole(J, A, AR);
            }
            Aw(void 0), Ar(t.id), "published" in A && !0 === A.published && At();
        }
    };
    r.useEffect(() => {
        if (null != AW) {
            var A;
            (0, W.V)(AW, J, null == Ai || null == (A = Ai.team) ? void 0 : A.id);
        }
    }, [AW, J, Ai]),
        r.useEffect(() => {
            AH && AY(void 0);
        }, [AH]);
    let A9 = r.useRef(null);
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
                        onClick: A0,
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
                                    error: null == AW ? void 0 : AW.getFirstFieldErrorMessage("name"),
                                    value: Af,
                                    onChange: Ag,
                                    id: D,
                                    maxLength: 100,
                                    placeholder: L.intl.string(L.t["/BiYSE"]),
                                    required: !0,
                                }),
                                (0, n.jsx)(g.xJW, {
                                    title: L.intl.string(L.t.QdKLyc),
                                    error: null == AW ? void 0 : AW.getFirstFieldErrorMessage("description"),
                                    htmlFor: H,
                                    children: (0, n.jsx)(C.Z, {
                                        id: H,
                                        className: k.descriptionArea,
                                        value: Ap,
                                        onChange: Am,
                                        maxLength: 1500,
                                        placeholder: L.intl.string(L.t.BFwyur),
                                        showCharacterCount: Ap.length > 0,
                                        parentModalKey: R.Yz,
                                        required: !0,
                                    }),
                                }),
                                (0, n.jsx)(g.xJW, {
                                    title: L.intl.string(L.t["CAY/vr"]),
                                    error: null == AW ? void 0 : AW.getFirstFieldErrorMessage("price_tier"),
                                    children: (0, n.jsx)(_, {
                                        guildId: J,
                                        selectedPriceTier: Aq,
                                        setPriceTier: Ah,
                                    }),
                                }),
                                (0, n.jsxs)(g.xJW, {
                                    title: L.intl.string(L.t["sqXj6+"]),
                                    error: null == AW ? void 0 : AW.getFirstFieldErrorMessage("image"),
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
                                            image: Ab,
                                            imageName: Av,
                                            savedImageName:
                                                null == Aa || null == (a = Aa.image_asset) ? void 0 : a.filename,
                                            onChange: (A, e) => {
                                                if (null != A) {
                                                    var t;
                                                    AC(A),
                                                        AU(e),
                                                        Ax(
                                                            A.startsWith("data:") ||
                                                                e !==
                                                                    (null == Aa || null == (t = Aa.image_asset)
                                                                        ? void 0
                                                                        : t.filename),
                                                        );
                                                }
                                            },
                                        }),
                                    ],
                                }),
                                AF
                                    ? (0, n.jsx)(g.xJW, {
                                          title: L.intl.string(L.t.zLrtkJ),
                                          error: null == AW ? void 0 : AW.getFirstFieldErrorMessage("attachments"),
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
                                AB
                                    ? (0, n.jsx)(S.ZP, {
                                          error:
                                              null != (U = null == AW ? void 0 : AW.getFirstFieldErrorMessage(K.NB))
                                                  ? U
                                                  : void 0,
                                          newRoleParams: AR,
                                          setNewRoleParams: Aw,
                                          guildId: J,
                                          listingRoleId: AS,
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
                                    disabled: !A_,
                                    disabledTooltip: Al ? L.intl.string(L.t["0NQ00t"]) : L.intl.string(L.t["Ax89/f"]),
                                    published: Al,
                                    onClick: () => {
                                        o()(A_, "Attempting to publish/unpublish when not allowed"),
                                            AY(Al ? "unpublish" : "publish"),
                                            A1(E(G({}, AD), { published: !Al }));
                                    },
                                    submitting: AQ,
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
                                    imageUrl: Ab,
                                    name: "" === Af ? L.intl.string(L.t.EmqIws) : Af,
                                    description: "" === Ap ? L.intl.string(L.t["11NA2N"]) : Ap,
                                    formattedPrice: AO,
                                    role: AL,
                                    productType: Ak,
                                    ctaComponent: (0, n.jsx)(u.zx, { text: L.intl.string(L.t.xUi3BA) }),
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
                                    value: AB,
                                    onChange: (A) => {
                                        A ? Aw((0, S.YP)()) : Aw(void 0);
                                    },
                                    warning: null === AR ? (0, n.jsx)(S.aN, {}) : void 0,
                                    disabled: null != AS,
                                }),
                                (0, n.jsx)(M, {
                                    text: L.intl.string(L.t.C6wP2d),
                                    value: AF,
                                    onChange: (A) => {
                                        A
                                            ? AI(!0)
                                            : AT
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
                                                                onConfirm: AG,
                                                                children: (0, n.jsx)(g.Text, {
                                                                    variant: "text-md/normal",
                                                                    children: L.intl.string(L.t.ixRBLi),
                                                                }),
                                                            }),
                                                        );
                                                })
                                              : AG();
                                    },
                                    disabled: AZ,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: k.footerActionRightButtons,
                            children: Al
                                ? (0, n.jsx)(u.zx, {
                                      variant: "secondary",
                                      text: L.intl.string(L.t.XYBEaW),
                                      disabled: !AJ,
                                      loading: Az,
                                      onClick: () => {
                                          o()(
                                              AJ,
                                              "cannot save changes for published product without adding all fields",
                                          ),
                                              AY("update_publish"),
                                              A1(AD);
                                      },
                                  })
                                : (0, n.jsx)(u.zx, {
                                      variant: "secondary",
                                      text: L.intl.string(L.t.ZCjwoa),
                                      disabled: !AM,
                                      loading: Az,
                                      onClick: () => {
                                          o()(AM, "cannot save changes without name or price tier"),
                                              AY("draft"),
                                              A1(AD);
                                      },
                                  }),
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(c.W, {
                component: "div",
                className: k.successNoticeContainer,
                children: A$,
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
