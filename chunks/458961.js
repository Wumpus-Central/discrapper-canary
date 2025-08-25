A.d(t, { default: () => $ }), A(388685), A(953529);
var n = A(951288),
    r = A(647438),
    l = A(120356),
    a = A.n(l),
    o = A(512722),
    i = A.n(o),
    s = A(831209),
    d = A(399606),
    c = A(215569),
    u = A(481060),
    f = A(749210),
    g = A(852860),
    p = A(607070),
    m = A(725803),
    b = A(313201),
    h = A(76535),
    q = A(215388),
    C = A(674180),
    v = A(884858),
    j = A(695346),
    x = A(485386),
    U = A(937615),
    V = A(73346),
    P = A(506071),
    O = A(587123),
    I = A(240864),
    N = A(863663),
    F = A(923400),
    y = A(623488),
    K = A(152980),
    T = A(120651),
    X = A(871388),
    Z = A(412110),
    W = A(513669),
    z = A(972797),
    Q = A(943516),
    S = A(302463),
    w = A(981631),
    R = A(674563),
    B = A(388032),
    L = A(179598);
function k(e) {
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
function G(e, t) {
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
let E = (0, b.hQ)(),
    Y = (0, b.hQ)(),
    D = (0, b.hQ)();
function H(e) {
    let { text: t, onChange: A, value: r, disabled: l, warning: o } = e,
        i = (0, b.Dt)(),
        s = l ? "text-muted" : "text-default";
    return (0, n.jsxs)("label", {
        className: a()(L.benefitToggleContainer, { [L.disabled]: l }),
        htmlFor: i,
        children: [
            (0, n.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: s,
                children: t,
            }),
            null != o &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(u.LZC, {
                            size: 4,
                            horizontal: !0,
                        }),
                        o,
                    ],
                }),
            (0, n.jsx)(u.LZC, {
                size: 16,
                horizontal: !0,
            }),
            (0, n.jsx)(u.rsf, {
                onChange: A,
                checked: r,
                disabled: l,
                id: i,
            }),
        ],
    });
}
function M(e, t) {
    return e.filter((e) => {
        let { value: A, label: n } = e;
        return A.toString().includes(t) || n.includes(t);
    });
}
function J(e) {
    let { guildId: t, selectedPriceTier: A, setPriceTier: l } = e,
        { priceTiers: a } = (0, h.R)(t, w.RG5.GUILD_PRODUCTS),
        o = r.useMemo(
            () =>
                (null != a ? a : null != A ? [A] : []).map((e) => ({
                    value: e,
                    label: (0, U.T4)(e, w.pKx.USD),
                })),
            [a, A],
        );
    return (0, n.jsx)(u.VcW, {
        value: A,
        placeholder: B.intl.string(B.t.aI4J5O),
        maxVisibleItems: 5,
        options: o,
        onChange: l,
        filter: M,
        "aria-required": !0,
    });
}
function _(e) {
    var t, l, a, o, b, h, v, M;
    let { guildId: _, productId: ee, transitionState: et, onClose: eA } = e,
        [en, er] = r.useState(ee),
        el = (0, d.e7)([I.Z], () => (null == en ? null : I.Z.getGuildProduct(en)), [en]),
        ea = (null == el ? void 0 : el.published) === !0,
        { application: eo } = (0, m.Z)(_, R.wW.GUILD_ROLE_SUBSCRIPTIONS),
        ei = F.M["0"],
        es = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
        ed = j.QK.useSetting(),
        ec = (0, P.n)(),
        eu = r.useCallback(() => {
            var e;
            return (null == el || null == (e = el.image_asset) ? void 0 : e.application_id) == null
                ? ei.data
                : (0, V._W)(el.image_asset.application_id, el.image_asset, 600, ec && ed ? void 0 : "webp");
        }, [ei, el, ec, ed]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: ef } = (0, C.gX)(_);
    r.useEffect(() => {
        ef && (eA(), (0, X.B)(B.intl.string(B.t.OLf3xs), B.t["90LBVl"]));
    }, [ef, eA]);
    let [eg, ep] = r.useState(null != (a = null == el ? void 0 : el.name) ? a : ""),
        [em, eb] = r.useState(null != (o = null == el ? void 0 : el.description) ? o : ""),
        [eh, eq] = r.useState(null != (b = null == el ? void 0 : el.price_tier) ? b : void 0),
        [eC, ev] = r.useState(eu),
        [ej, ex] = r.useState(
            null != (h = null == el || null == (t = el.image_asset) ? void 0 : t.filename) ? h : ei.name,
        ),
        [eU, eV] = r.useState(!1),
        [eP, eO] = r.useState(),
        eI = r.useMemo(() => (null != eh ? (0, U.T4)(eh, w.pKx.USD) : void 0), [eh]),
        [eN, eF] = r.useState(!0),
        {
            changesSaving: ey,
            saveError: eK,
            saveProductWithAttachments: eT,
            hasUnsavedAttachmentChanges: eX,
            cancelUnusedUploads: eZ,
        } = (0, O.P)(),
        eW = (null == el ? void 0 : el.attachments) != null && (null == el ? void 0 : el.attachments.length) > 0,
        ez = null != eK ? eK : eP,
        eQ = null != ey && "published" in ey,
        eS = null != ey && !eQ,
        ew = null != (v = null == el ? void 0 : el.role_id) ? v : null,
        [eR, eB] = r.useState(),
        eL = null != eR || null != ew,
        ek = (0, d.e7)([x.Z], () => (null != ew && null !== eR ? x.Z.getRole(_, ew) : null != eR ? eR : void 0), [
            eR,
            ew,
            _,
        ]),
        eG = "";
    eL && eN
        ? (eG = B.intl.string(B.t.ih4QMT))
        : eL
          ? (eG = B.intl.string(B.t.o9xphY))
          : eN && (eG = B.intl.string(B.t.DWYJub));
    let eE = () => {
            eF(!1), eZ();
        },
        [eY, eD] = r.useState(),
        {
            changes: eH,
            hasUnsavedChanges: eM,
            canSaveForDraft: eJ,
            canSaveForPublished: e_,
            canPublishOrUnpublish: e$,
        } = r.useMemo(
            () =>
                (0, N.fG)({
                    guildProductListing: el,
                    name: eg,
                    priceTier: eh,
                    description: em,
                    image: eC,
                    imageName: ej,
                    isImageChanged: eU,
                    newRoleParams: eR,
                    hasSavedAttachments: eW,
                    hasUnsavedAttachmentChanges: eX,
                }),
            [el, eg, eh, em, eC, ej, eU, eR, eW, eX],
        ),
        e0 = r.useMemo(
            () =>
                eM || null == eY || "publish" === eY || null != ez
                    ? null
                    : (0, n.jsx)(u.oXn, {
                          className: L.successNotice,
                          children: (0, n.jsx)(g.Z, {
                              message: (0, n.jsxs)("div", {
                                  className: L.successNoticeMessage,
                                  children: [
                                      (0, n.jsx)(u.owK, {
                                          size: "md",
                                          color: s.Z.BUTTON_POSITIVE_BACKGROUND,
                                          secondaryColor: s.Z.WHITE,
                                      }),
                                      (0, n.jsx)(u.Text, {
                                          variant: "text-md/medium",
                                          children:
                                              "draft" === eY
                                                  ? B.intl.string(B.t["3Rv4MD"])
                                                  : "update_publish" === eY
                                                    ? B.intl.string(B.t["8fPiBw"])
                                                    : B.intl.string(B.t["3LUFnJ"]),
                                      }),
                                  ],
                              }),
                              onReset: () => eD(void 0),
                              onResetText: B.intl.string(B.t.T6QuWV),
                          }),
                      }),
            [ez, eM, eY],
        ),
        e1 = r.useCallback(() => {
            eM
                ? (0, T.Z)({
                      title: B.intl.string(B.t.FVDhIS),
                      body: B.intl.string(B.t.Hgdhwc),
                      cta: B.intl.string(B.t.h0bti4),
                      closeLabel: B.intl.string(B.t["+WYo0t"]),
                      onConfirm: () => {
                          eA();
                      },
                  })
                : eA();
        }, [eA, eM]);
    r.useEffect(() => {
        (0, u.oav)(
            S.Yz,
            (e) =>
                (0, n.jsx)(
                    $,
                    k(
                        {
                            guildId: _,
                            productId: en,
                        },
                        e,
                    ),
                ),
            e1,
        );
    }, [_, e1, en]);
    let e3 = async (e) => {
        let t = (0, N.pM)({ newRoleParams: eR });
        if ((eO(t), null != t)) return;
        let A = await eT(e);
        if ((eV(!1), null != A)) {
            if ((null != e.name && ep(A.name), null != e.description && eb(A.description), null != eR)) {
                let e = A.role_id;
                i()(null != e, "Cannot update role without role ID"), await f.Z.updateRole(_, e, eR);
            }
            eB(void 0), er(A.id), "published" in e && !0 === e.published && eA();
        }
    };
    r.useEffect(() => {
        if (null != ez) {
            var e;
            (0, Z.V)(ez, _, null == eo || null == (e = eo.team) ? void 0 : e.id);
        }
    }, [ez, _, eo]),
        r.useEffect(() => {
            eM && eD(void 0);
        }, [eM]);
    let e9 = r.useRef(null);
    return (0, n.jsxs)(u.Y0X, {
        transitionState: et,
        size: u.CgR.DYNAMIC,
        className: L.modalRoot,
        "aria-labelledby": E,
        parentComponent: "GuildProductEditModal",
        children: [
            (0, n.jsxs)(u.xBx, {
                className: L.modalHeader,
                separator: !1,
                children: [
                    (0, n.jsxs)("div", {
                        className: L.headerText,
                        children: [
                            (0, n.jsx)(u.X6q, {
                                id: E,
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: B.intl.string(B.t.DnNl1d),
                            }),
                            (0, n.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: B.intl.string(B.t["Tu7f+f"]),
                            }),
                        ],
                    }),
                    (0, n.jsx)(u.olH, {
                        onClick: e1,
                        className: L.__invalid_modalCloseButton,
                    }),
                ],
            }),
            (0, n.jsxs)(u.hzk, {
                className: L.modalContent,
                scrollbarType: "none",
                children: [
                    (0, n.jsx)(u.zJl, {
                        children: (0, n.jsxs)("div", {
                            className: L.productFieldsSection,
                            ref: e9,
                            children: [
                                (0, n.jsx)(u.xJW, {
                                    title: B.intl.string(B.t.Hsk7xc),
                                    tag: "label",
                                    htmlFor: Y,
                                    error: null == ez ? void 0 : ez.getFirstFieldErrorMessage("name"),
                                    children: (0, n.jsx)(u.oil, {
                                        value: eg,
                                        onChange: ep,
                                        id: Y,
                                        maxLength: 100,
                                        placeholder: B.intl.string(B.t["/BiYSE"]),
                                        required: !0,
                                    }),
                                }),
                                (0, n.jsx)(u.xJW, {
                                    title: B.intl.string(B.t.QdKLyc),
                                    tag: "label",
                                    error: null == ez ? void 0 : ez.getFirstFieldErrorMessage("description"),
                                    htmlFor: D,
                                    children: (0, n.jsx)(q.Z, {
                                        id: D,
                                        className: L.descriptionArea,
                                        value: em,
                                        onChange: eb,
                                        maxLength: 1500,
                                        placeholder: B.intl.string(B.t.BFwyur),
                                        showCharacterCount: em.length > 0,
                                        parentModalKey: S.Yz,
                                        required: !0,
                                    }),
                                }),
                                (0, n.jsx)(u.xJW, {
                                    title: B.intl.string(B.t["CAY/vr"]),
                                    tag: "label",
                                    error: null == ez ? void 0 : ez.getFirstFieldErrorMessage("price_tier"),
                                    children: (0, n.jsx)(J, {
                                        guildId: _,
                                        selectedPriceTier: eh,
                                        setPriceTier: eq,
                                    }),
                                }),
                                (0, n.jsxs)(u.xJW, {
                                    title: B.intl.string(B.t["sqXj6+"]),
                                    tag: "label",
                                    error: null == ez ? void 0 : ez.getFirstFieldErrorMessage("image"),
                                    titleClassName: L.thumbnailLabel,
                                    children: [
                                        (0, n.jsx)(u.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: B.intl.string(B.t.yOU4Vl),
                                        }),
                                        (0, n.jsx)(u.LZC, { size: 10 }),
                                        (0, n.jsx)(W.Z, {
                                            presetImages: F.M,
                                            radioGroupAriaLabel: B.intl.string(B.t.fKzQj4),
                                            image: eC,
                                            imageName: ej,
                                            savedImageName:
                                                null == el || null == (l = el.image_asset) ? void 0 : l.filename,
                                            onChange: (e, t) => {
                                                if (null != e) {
                                                    var A;
                                                    ev(e),
                                                        ex(t),
                                                        eV(
                                                            e.startsWith("data:") ||
                                                                t !==
                                                                    (null == el || null == (A = el.image_asset)
                                                                        ? void 0
                                                                        : A.filename),
                                                        );
                                                }
                                            },
                                        }),
                                    ],
                                }),
                                eN
                                    ? (0, n.jsx)(u.xJW, {
                                          title: B.intl.string(B.t.zLrtkJ),
                                          error: null == ez ? void 0 : ez.getFirstFieldErrorMessage("attachments"),
                                          children: (0, n.jsx)(K.s, {
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
                                eL
                                    ? (0, n.jsx)(Q.ZP, {
                                          error:
                                              null != (M = null == ez ? void 0 : ez.getFirstFieldErrorMessage(N.NB))
                                                  ? M
                                                  : void 0,
                                          newRoleParams: eR,
                                          setNewRoleParams: eB,
                                          guildId: _,
                                          listingRoleId: ew,
                                          productId: en,
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, n.jsx)("div", { className: L.horizontalSeparator }),
                    (0, n.jsx)(u.zJl, {
                        children: (0, n.jsxs)("div", {
                            className: L.productPreview,
                            children: [
                                (0, n.jsx)(z.Z, {
                                    disabled: !e$,
                                    disabledTooltip: ea ? B.intl.string(B.t["0NQ00t"]) : B.intl.string(B.t["Ax89/f"]),
                                    published: ea,
                                    onClick: () => {
                                        i()(e$, "Attempting to publish/unpublish when not allowed"),
                                            eD(ea ? "unpublish" : "publish"),
                                            e3(G(k({}, eH), { published: !ea }));
                                    },
                                    submitting: eQ,
                                }),
                                (0, n.jsx)("div", { className: L.verticalSeparator }),
                                (0, n.jsx)(u.X6q, {
                                    variant: "text-xs/bold",
                                    color: "header-secondary",
                                    className: L.previewHeading,
                                    children: B.intl.string(B.t["6I7nQU"]),
                                }),
                                (0, n.jsx)(u.LZC, { size: 4 }),
                                (0, n.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: B.intl.string(B.t.Oq4dfX),
                                }),
                                (0, n.jsx)(u.LZC, { size: 16 }),
                                (0, n.jsx)(y.Z, {
                                    imageUrl: eC,
                                    name: "" === eg ? B.intl.string(B.t.EmqIws) : eg,
                                    description: "" === em ? B.intl.string(B.t["11NA2N"]) : em,
                                    formattedPrice: eI,
                                    role: ek,
                                    productType: eG,
                                    ctaComponent: (0, n.jsx)(u.gtL, {
                                        shineSize: u.gtL.ShineSizes.SMALL,
                                        pauseAnimation: es || !ec,
                                        className: L.productPreviewCtaButton,
                                        children: B.intl.string(B.t.xUi3BA),
                                    }),
                                    cardWidth: 340,
                                    thumbnailHeight: 190,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(u.mzw, {
                children: (0, n.jsxs)("div", {
                    className: L.footerActionButtons,
                    children: [
                        (0, n.jsxs)("div", {
                            className: L.footerActionLeftButtons,
                            children: [
                                (0, n.jsx)(H, {
                                    text: B.intl.string(B.t.YzGIVF),
                                    value: eL,
                                    onChange: (e) => {
                                        e ? eB((0, Q.YP)()) : eB(void 0);
                                    },
                                    warning: null === eR ? (0, n.jsx)(Q.aN, {}) : void 0,
                                    disabled: null != ew,
                                }),
                                (0, n.jsx)(H, {
                                    text: B.intl.string(B.t.C6wP2d),
                                    value: eN,
                                    onChange: (e) => {
                                        e
                                            ? eF(!0)
                                            : eX
                                              ? (0, u.ZDy)(async () => {
                                                    let { ConfirmModal: e } = await Promise.resolve().then(
                                                        A.bind(A, 481060),
                                                    );
                                                    return (t) =>
                                                        (0, n.jsx)(
                                                            e,
                                                            G(k({}, t), {
                                                                header: B.intl.string(B.t["2Wihyc"]),
                                                                confirmText: B.intl.string(B.t.N86XcH),
                                                                cancelText: B.intl.string(B.t["ETE/oK"]),
                                                                onConfirm: eE,
                                                                children: (0, n.jsx)(u.Text, {
                                                                    variant: "text-md/normal",
                                                                    children: B.intl.string(B.t.ixRBLi),
                                                                }),
                                                            }),
                                                        );
                                                })
                                              : eE();
                                    },
                                    disabled: eW,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: L.footerActionRightButtons,
                            children: ea
                                ? (0, n.jsx)(u.zxk, {
                                      variant: "secondary",
                                      text: B.intl.string(B.t.XYBEaW),
                                      disabled: !e_,
                                      loading: eS,
                                      onClick: () => {
                                          i()(
                                              e_,
                                              "cannot save changes for published product without adding all fields",
                                          ),
                                              eD("update_publish"),
                                              e3(eH);
                                      },
                                  })
                                : (0, n.jsx)(u.zxk, {
                                      variant: "secondary",
                                      text: B.intl.string(B.t.ZCjwoa),
                                      disabled: !eJ,
                                      loading: eS,
                                      onClick: () => {
                                          i()(eJ, "cannot save changes without name or price tier"),
                                              eD("draft"),
                                              e3(eH);
                                      },
                                  }),
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(c.W, {
                component: "div",
                className: L.successNoticeContainer,
                children: e0,
            }),
        ],
    });
}
function $(e) {
    var t;
    return (0, n.jsx)(O.W, {
        guildId: e.guildId,
        editSkuId: null != (t = e.productId) ? t : void 0,
        onFileSizeError: () => (0, v.Z)(S.ve),
        children: (0, n.jsx)(_, k({}, e)),
    });
}
