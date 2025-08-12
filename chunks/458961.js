A.d(t, { default: () => ee }), A(388685), A(953529);
var n = A(255367),
    r = A(73800),
    l = A(120356),
    a = A.n(l),
    o = A(512722),
    i = A.n(o),
    s = A(831209),
    d = A(399606),
    c = A(215569),
    u = A(755721),
    f = A(481060),
    g = A(749210),
    p = A(852860),
    m = A(607070),
    h = A(725803),
    C = A(313201),
    q = A(76535),
    b = A(215388),
    v = A(674180),
    x = A(884858),
    j = A(695346),
    U = A(485386),
    V = A(937615),
    P = A(73346),
    O = A(506071),
    I = A(587123),
    N = A(240864),
    F = A(863663),
    y = A(923400),
    K = A(623488),
    T = A(152980),
    Z = A(120651),
    X = A(871388),
    W = A(412110),
    z = A(513669),
    Q = A(972797),
    S = A(943516),
    R = A(302463),
    w = A(981631),
    B = A(674563),
    L = A(388032),
    k = A(538961);
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var A = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(A);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(A).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(A, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = A[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var A = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      A.push.apply(A, n);
                  }
                  return A;
              })(Object(t)).forEach(function (A) {
                  Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A));
              }),
        e
    );
}
let Y = (0, C.hQ)(),
    D = (0, C.hQ)(),
    H = (0, C.hQ)();
function M(e) {
    let { text: t, onChange: A, value: r, disabled: l, warning: o } = e,
        i = (0, C.Dt)(),
        s = l ? "text-muted" : "text-default";
    return (0, n.jsxs)("label", {
        className: a()(k.benefitToggleContainer, { [k.disabled]: l }),
        htmlFor: i,
        children: [
            (0, n.jsx)(f.Text, {
                variant: "text-sm/medium",
                color: s,
                children: t,
            }),
            null != o &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(f.LZC, {
                            size: 4,
                            horizontal: !0,
                        }),
                        o,
                    ],
                }),
            (0, n.jsx)(f.LZC, {
                size: 16,
                horizontal: !0,
            }),
            (0, n.jsx)(f.rsf, {
                onChange: A,
                checked: r,
                disabled: l,
                id: i,
            }),
        ],
    });
}
function J(e, t) {
    return e.filter((e) => {
        let { value: A, label: n } = e;
        return A.toString().includes(t) || n.includes(t);
    });
}
function _(e) {
    let { guildId: t, selectedPriceTier: A, setPriceTier: l } = e,
        { priceTiers: a } = (0, q.R)(t, w.RG5.GUILD_PRODUCTS),
        o = r.useMemo(
            () =>
                (null != a ? a : null != A ? [A] : []).map((e) => ({
                    value: e,
                    label: (0, V.T4)(e, w.pKx.USD),
                })),
            [a, A],
        );
    return (0, n.jsx)(f.VcW, {
        value: A,
        placeholder: L.intl.string(L.t.aI4J5O),
        maxVisibleItems: 5,
        options: o,
        onChange: l,
        filter: J,
        "aria-required": !0,
    });
}
function $(e) {
    var t, l, a, o, C, q, x, J;
    let { guildId: $, productId: et, transitionState: eA, onClose: en } = e,
        [er, el] = r.useState(et),
        ea = (0, d.e7)([N.Z], () => (null == er ? null : N.Z.getGuildProduct(er)), [er]),
        eo = (null == ea ? void 0 : ea.published) === !0,
        { application: ei } = (0, h.Z)($, B.wW.GUILD_ROLE_SUBSCRIPTIONS),
        es = y.M["0"],
        ed = (0, d.e7)([m.Z], () => m.Z.useReducedMotion),
        ec = j.QK.useSetting(),
        eu = (0, O.n)(),
        ef = r.useCallback(() => {
            var e;
            return (null == ea || null == (e = ea.image_asset) ? void 0 : e.application_id) == null
                ? es.data
                : (0, P._W)(ea.image_asset.application_id, ea.image_asset, 600, eu && ec ? void 0 : "webp");
        }, [es, ea, eu, ec]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: eg } = (0, v.gX)($);
    r.useEffect(() => {
        eg && (en(), (0, X.B)(L.intl.string(L.t.OLf3xs), L.t["90LBVl"]));
    }, [eg, en]);
    let [ep, em] = r.useState(null != (a = null == ea ? void 0 : ea.name) ? a : ""),
        [eh, eC] = r.useState(null != (o = null == ea ? void 0 : ea.description) ? o : ""),
        [eq, eb] = r.useState(null != (C = null == ea ? void 0 : ea.price_tier) ? C : void 0),
        [ev, ex] = r.useState(ef),
        [ej, eU] = r.useState(
            null != (q = null == ea || null == (t = ea.image_asset) ? void 0 : t.filename) ? q : es.name,
        ),
        [eV, eP] = r.useState(!1),
        [eO, eI] = r.useState(),
        eN = r.useMemo(() => (null != eq ? (0, V.T4)(eq, w.pKx.USD) : void 0), [eq]),
        [eF, ey] = r.useState(!0),
        {
            changesSaving: eK,
            saveError: eT,
            saveProductWithAttachments: eZ,
            hasUnsavedAttachmentChanges: eX,
            cancelUnusedUploads: eW,
        } = (0, I.P)(),
        ez = (null == ea ? void 0 : ea.attachments) != null && (null == ea ? void 0 : ea.attachments.length) > 0,
        eQ = null != eT ? eT : eO,
        eS = null != eK && "published" in eK,
        eR = null != eK && !eS,
        ew = null != (x = null == ea ? void 0 : ea.role_id) ? x : null,
        [eB, eL] = r.useState(),
        ek = null != eB || null != ew,
        eG = (0, d.e7)([U.Z], () => (null != ew && null !== eB ? U.Z.getRole($, ew) : null != eB ? eB : void 0), [
            eB,
            ew,
            $,
        ]),
        eE = "";
    ek && eF
        ? (eE = L.intl.string(L.t.ih4QMT))
        : ek
          ? (eE = L.intl.string(L.t.o9xphY))
          : eF && (eE = L.intl.string(L.t.DWYJub));
    let eY = () => {
            ey(!1), eW();
        },
        [eD, eH] = r.useState(),
        {
            changes: eM,
            hasUnsavedChanges: eJ,
            canSaveForDraft: e_,
            canSaveForPublished: e$,
            canPublishOrUnpublish: e0,
        } = r.useMemo(
            () =>
                (0, F.fG)({
                    guildProductListing: ea,
                    name: ep,
                    priceTier: eq,
                    description: eh,
                    image: ev,
                    imageName: ej,
                    isImageChanged: eV,
                    newRoleParams: eB,
                    hasSavedAttachments: ez,
                    hasUnsavedAttachmentChanges: eX,
                }),
            [ea, ep, eq, eh, ev, ej, eV, eB, ez, eX],
        ),
        e1 = r.useMemo(
            () =>
                eJ || null == eD || "publish" === eD || null != eQ
                    ? null
                    : (0, n.jsx)(f.oXn, {
                          className: k.successNotice,
                          children: (0, n.jsx)(p.Z, {
                              message: (0, n.jsxs)("div", {
                                  className: k.successNoticeMessage,
                                  children: [
                                      (0, n.jsx)(f.owK, {
                                          size: "md",
                                          color: s.Z.BUTTON_POSITIVE_BACKGROUND,
                                          secondaryColor: s.Z.WHITE,
                                      }),
                                      (0, n.jsx)(f.Text, {
                                          variant: "text-md/medium",
                                          children:
                                              "draft" === eD
                                                  ? L.intl.string(L.t["3Rv4MD"])
                                                  : "update_publish" === eD
                                                    ? L.intl.string(L.t["8fPiBw"])
                                                    : L.intl.string(L.t["3LUFnJ"]),
                                      }),
                                  ],
                              }),
                              onReset: () => eH(void 0),
                              onResetText: L.intl.string(L.t.T6QuWV),
                          }),
                      }),
            [eQ, eJ, eD],
        ),
        e3 = r.useCallback(() => {
            eJ
                ? (0, Z.Z)({
                      title: L.intl.string(L.t.FVDhIS),
                      body: L.intl.string(L.t.Hgdhwc),
                      cta: L.intl.string(L.t.h0bti4),
                      closeLabel: L.intl.string(L.t["+WYo0t"]),
                      onConfirm: () => {
                          en();
                      },
                  })
                : en();
        }, [en, eJ]);
    r.useEffect(() => {
        (0, f.oav)(
            R.Yz,
            (e) =>
                (0, n.jsx)(
                    ee,
                    G(
                        {
                            guildId: $,
                            productId: er,
                        },
                        e,
                    ),
                ),
            e3,
        );
    }, [$, e3, er]);
    let e6 = async (e) => {
        let t = (0, F.pM)({ newRoleParams: eB });
        if ((eI(t), null != t)) return;
        let A = await eZ(e);
        if ((eP(!1), null != A)) {
            if ((null != e.name && em(A.name), null != e.description && eC(A.description), null != eB)) {
                let e = A.role_id;
                i()(null != e, "Cannot update role without role ID"), await g.Z.updateRole($, e, eB);
            }
            eL(void 0), el(A.id), "published" in e && !0 === e.published && en();
        }
    };
    r.useEffect(() => {
        if (null != eQ) {
            var e;
            (0, W.V)(eQ, $, null == ei || null == (e = ei.team) ? void 0 : e.id);
        }
    }, [eQ, $, ei]),
        r.useEffect(() => {
            eJ && eH(void 0);
        }, [eJ]);
    let e9 = r.useRef(null);
    return (0, n.jsxs)(f.Y0X, {
        transitionState: eA,
        size: f.CgR.DYNAMIC,
        className: k.modalRoot,
        "aria-labelledby": Y,
        parentComponent: "GuildProductEditModal",
        children: [
            (0, n.jsxs)(f.xBx, {
                className: k.modalHeader,
                separator: !1,
                children: [
                    (0, n.jsxs)("div", {
                        className: k.headerText,
                        children: [
                            (0, n.jsx)(f.X6q, {
                                id: Y,
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: L.intl.string(L.t.DnNl1d),
                            }),
                            (0, n.jsx)(f.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: L.intl.string(L.t["Tu7f+f"]),
                            }),
                        ],
                    }),
                    (0, n.jsx)(f.olH, {
                        onClick: e3,
                        className: k.__invalid_modalCloseButton,
                    }),
                ],
            }),
            (0, n.jsxs)(f.hzk, {
                className: k.modalContent,
                scrollbarType: "none",
                children: [
                    (0, n.jsx)(f.zJl, {
                        children: (0, n.jsxs)("div", {
                            className: k.productFieldsSection,
                            ref: e9,
                            children: [
                                (0, n.jsx)(f.xJW, {
                                    title: L.intl.string(L.t.Hsk7xc),
                                    tag: "label",
                                    htmlFor: D,
                                    error: null == eQ ? void 0 : eQ.getFirstFieldErrorMessage("name"),
                                    children: (0, n.jsx)(u.iS, {
                                        value: ep,
                                        onChange: em,
                                        id: D,
                                        maxLength: 100,
                                        placeholder: L.intl.string(L.t["/BiYSE"]),
                                        rows: 1,
                                        autosize: !0,
                                        showCharacterCount: ep.length > 0,
                                        showRemainingCharacterCount: ep.length > 0,
                                        required: !0,
                                        className: ep.length > 0 ? k.nameArea : void 0,
                                    }),
                                }),
                                (0, n.jsx)(f.xJW, {
                                    title: L.intl.string(L.t.QdKLyc),
                                    tag: "label",
                                    error: null == eQ ? void 0 : eQ.getFirstFieldErrorMessage("description"),
                                    htmlFor: H,
                                    children: (0, n.jsx)(b.Z, {
                                        id: H,
                                        className: k.descriptionArea,
                                        value: eh,
                                        onChange: eC,
                                        maxLength: 1500,
                                        placeholder: L.intl.string(L.t.BFwyur),
                                        showCharacterCount: eh.length > 0,
                                        parentModalKey: R.Yz,
                                        required: !0,
                                    }),
                                }),
                                (0, n.jsx)(f.xJW, {
                                    title: L.intl.string(L.t["CAY/vr"]),
                                    tag: "label",
                                    error: null == eQ ? void 0 : eQ.getFirstFieldErrorMessage("price_tier"),
                                    children: (0, n.jsx)(_, {
                                        guildId: $,
                                        selectedPriceTier: eq,
                                        setPriceTier: eb,
                                    }),
                                }),
                                (0, n.jsxs)(f.xJW, {
                                    title: L.intl.string(L.t["sqXj6+"]),
                                    tag: "label",
                                    error: null == eQ ? void 0 : eQ.getFirstFieldErrorMessage("image"),
                                    titleClassName: k.thumbnailLabel,
                                    children: [
                                        (0, n.jsx)(f.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: L.intl.string(L.t.yOU4Vl),
                                        }),
                                        (0, n.jsx)(f.LZC, { size: 10 }),
                                        (0, n.jsx)(z.Z, {
                                            presetImages: y.M,
                                            radioGroupAriaLabel: L.intl.string(L.t.fKzQj4),
                                            image: ev,
                                            imageName: ej,
                                            savedImageName:
                                                null == ea || null == (l = ea.image_asset) ? void 0 : l.filename,
                                            onChange: (e, t) => {
                                                if (null != e) {
                                                    var A;
                                                    ex(e),
                                                        eU(t),
                                                        eP(
                                                            e.startsWith("data:") ||
                                                                t !==
                                                                    (null == ea || null == (A = ea.image_asset)
                                                                        ? void 0
                                                                        : A.filename),
                                                        );
                                                }
                                            },
                                        }),
                                    ],
                                }),
                                eF
                                    ? (0, n.jsx)(f.xJW, {
                                          title: L.intl.string(L.t.zLrtkJ),
                                          error: null == eQ ? void 0 : eQ.getFirstFieldErrorMessage("attachments"),
                                          children: (0, n.jsx)(T.s, {
                                              onFileAdded: () => {
                                                  var e;
                                                  null == (e = e9.current) ||
                                                      e.scrollIntoView({
                                                          behavior: "smooth",
                                                          block: "end",
                                                      });
                                              },
                                          }),
                                      })
                                    : null,
                                ek
                                    ? (0, n.jsx)(S.ZP, {
                                          error:
                                              null != (J = null == eQ ? void 0 : eQ.getFirstFieldErrorMessage(F.NB))
                                                  ? J
                                                  : void 0,
                                          newRoleParams: eB,
                                          setNewRoleParams: eL,
                                          guildId: $,
                                          listingRoleId: ew,
                                          productId: er,
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, n.jsx)("div", { className: k.horizontalSeparator }),
                    (0, n.jsx)(f.zJl, {
                        children: (0, n.jsxs)("div", {
                            className: k.productPreview,
                            children: [
                                (0, n.jsx)(Q.Z, {
                                    disabled: !e0,
                                    disabledTooltip: eo ? L.intl.string(L.t["0NQ00t"]) : L.intl.string(L.t["Ax89/f"]),
                                    published: eo,
                                    onClick: () => {
                                        i()(e0, "Attempting to publish/unpublish when not allowed"),
                                            eH(eo ? "unpublish" : "publish"),
                                            e6(E(G({}, eM), { published: !eo }));
                                    },
                                    submitting: eS,
                                }),
                                (0, n.jsx)("div", { className: k.verticalSeparator }),
                                (0, n.jsx)(f.X6q, {
                                    variant: "text-xs/bold",
                                    color: "header-secondary",
                                    className: k.previewHeading,
                                    children: L.intl.string(L.t["6I7nQU"]),
                                }),
                                (0, n.jsx)(f.LZC, { size: 4 }),
                                (0, n.jsx)(f.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: L.intl.string(L.t.Oq4dfX),
                                }),
                                (0, n.jsx)(f.LZC, { size: 16 }),
                                (0, n.jsx)(K.Z, {
                                    imageUrl: ev,
                                    name: "" === ep ? L.intl.string(L.t.EmqIws) : ep,
                                    description: "" === eh ? L.intl.string(L.t["11NA2N"]) : eh,
                                    formattedPrice: eN,
                                    role: eG,
                                    productType: eE,
                                    ctaComponent: (0, n.jsx)(f.gtL, {
                                        shineSize: f.gtL.ShineSizes.SMALL,
                                        pauseAnimation: ed || !eu,
                                        className: k.productPreviewCtaButton,
                                        children: L.intl.string(L.t.xUi3BA),
                                    }),
                                    cardWidth: 340,
                                    thumbnailHeight: 190,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(f.mzw, {
                children: (0, n.jsxs)("div", {
                    className: k.footerActionButtons,
                    children: [
                        (0, n.jsxs)("div", {
                            className: k.footerActionLeftButtons,
                            children: [
                                (0, n.jsx)(M, {
                                    text: L.intl.string(L.t.YzGIVF),
                                    value: ek,
                                    onChange: (e) => {
                                        e ? eL((0, S.YP)()) : eL(void 0);
                                    },
                                    warning: null === eB ? (0, n.jsx)(S.aN, {}) : void 0,
                                    disabled: null != ew,
                                }),
                                (0, n.jsx)(M, {
                                    text: L.intl.string(L.t.C6wP2d),
                                    value: eF,
                                    onChange: (e) => {
                                        e
                                            ? ey(!0)
                                            : eX
                                              ? (0, f.ZDy)(async () => {
                                                    let { ConfirmModal: e } = await Promise.resolve().then(
                                                        A.bind(A, 481060),
                                                    );
                                                    return (t) =>
                                                        (0, n.jsx)(
                                                            e,
                                                            E(G({}, t), {
                                                                header: L.intl.string(L.t["2Wihyc"]),
                                                                confirmText: L.intl.string(L.t.N86XcH),
                                                                cancelText: L.intl.string(L.t["ETE/oK"]),
                                                                onConfirm: eY,
                                                                children: (0, n.jsx)(f.Text, {
                                                                    variant: "text-md/normal",
                                                                    children: L.intl.string(L.t.ixRBLi),
                                                                }),
                                                            }),
                                                        );
                                                })
                                              : eY();
                                    },
                                    disabled: ez,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: k.footerActionRightButtons,
                            children: eo
                                ? (0, n.jsx)(f.zxk, {
                                      variant: "secondary",
                                      text: L.intl.string(L.t.XYBEaW),
                                      disabled: !e$,
                                      loading: eR,
                                      onClick: () => {
                                          i()(
                                              e$,
                                              "cannot save changes for published product without adding all fields",
                                          ),
                                              eH("update_publish"),
                                              e6(eM);
                                      },
                                  })
                                : (0, n.jsx)(f.zxk, {
                                      variant: "secondary",
                                      text: L.intl.string(L.t.ZCjwoa),
                                      disabled: !e_,
                                      loading: eR,
                                      onClick: () => {
                                          i()(e_, "cannot save changes without name or price tier"),
                                              eH("draft"),
                                              e6(eM);
                                      },
                                  }),
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(c.W, {
                component: "div",
                className: k.successNoticeContainer,
                children: e1,
            }),
        ],
    });
}
function ee(e) {
    var t;
    return (0, n.jsx)(I.W, {
        guildId: e.guildId,
        editSkuId: null != (t = e.productId) ? t : void 0,
        onFileSizeError: () => (0, x.Z)(R.ve),
        children: (0, n.jsx)($, G({}, e)),
    });
}
