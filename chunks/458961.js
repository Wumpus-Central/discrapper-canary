t.d(A, { default: () => $ }), t(388685), t(953529);
var n = t(951288),
    r = t(647438),
    l = t(120356),
    a = t.n(l),
    i = t(512722),
    o = t.n(i),
    s = t(831209),
    d = t(399606),
    c = t(215569),
    u = t(159691),
    f = t(481060),
    g = t(749210),
    p = t(852860),
    m = t(725803),
    b = t(313201),
    q = t(76535),
    h = t(215388),
    C = t(674180),
    v = t(884858),
    j = t(695346),
    x = t(485386),
    U = t(937615),
    V = t(73346),
    O = t(506071),
    P = t(587123),
    F = t(240864),
    I = t(863663),
    y = t(923400),
    N = t(623488),
    K = t(152980),
    T = t(120651),
    X = t(871388),
    Z = t(412110),
    W = t(513669),
    Q = t(972797),
    z = t(943516),
    S = t(302463),
    w = t(981631),
    R = t(674563),
    B = t(388032),
    L = t(179598);
function k(e) {
    for (var A = 1; A < arguments.length; A++) {
        var t = null != arguments[A] ? arguments[A] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            n.forEach(function (A) {
                var n;
                (n = t[A]),
                    A in e
                        ? Object.defineProperty(e, A, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[A] = n);
            });
    }
    return e;
}
function G(e, A) {
    return (
        (A = null != A ? A : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A))
            : (function (e, A) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(A)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t));
              }),
        e
    );
}
let E = (0, b.hQ)(),
    Y = (0, b.hQ)(),
    D = (0, b.hQ)();
function H(e) {
    let { text: A, onChange: t, value: r, disabled: l, warning: i } = e,
        o = (0, b.Dt)(),
        s = l ? "text-muted" : "text-default";
    return (0, n.jsxs)("label", {
        className: a()(L.benefitToggleContainer, { [L.disabled]: l }),
        htmlFor: o,
        children: [
            (0, n.jsx)(f.Text, {
                variant: "text-sm/medium",
                color: s,
                children: A,
            }),
            null != i &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(f.LZC, {
                            size: 4,
                            horizontal: !0,
                        }),
                        i,
                    ],
                }),
            (0, n.jsx)(f.LZC, {
                size: 16,
                horizontal: !0,
            }),
            (0, n.jsx)(f.rsf, {
                onChange: t,
                checked: r,
                disabled: l,
                id: o,
            }),
        ],
    });
}
function M(e, A) {
    return e.filter((e) => {
        let { value: t, label: n } = e;
        return t.toString().includes(A) || n.includes(A);
    });
}
function J(e) {
    let { guildId: A, selectedPriceTier: t, setPriceTier: l } = e,
        { priceTiers: a } = (0, q.R)(A, w.RG5.GUILD_PRODUCTS),
        i = r.useMemo(
            () =>
                (null != a ? a : null != t ? [t] : []).map((e) => ({
                    value: e,
                    label: (0, U.T4)(e, w.pKx.USD),
                })),
            [a, t],
        );
    return (0, n.jsx)(f.VcW, {
        value: t,
        placeholder: B.intl.string(B.t.aI4J5O),
        maxVisibleItems: 5,
        options: i,
        onChange: l,
        filter: M,
        "aria-required": !0,
    });
}
function _(e) {
    var A, l, a, i, b, q, v, M;
    let { guildId: _, productId: ee, transitionState: eA, onClose: et } = e,
        [en, er] = r.useState(ee),
        el = (0, d.e7)([F.Z], () => (null == en ? null : F.Z.getGuildProduct(en)), [en]),
        ea = (null == el ? void 0 : el.published) === !0,
        { application: ei } = (0, m.Z)(_, R.wW.GUILD_ROLE_SUBSCRIPTIONS),
        eo = y.M["0"],
        es = j.QK.useSetting(),
        ed = (0, O.n)(),
        ec = r.useCallback(() => {
            var e;
            return (null == el || null == (e = el.image_asset) ? void 0 : e.application_id) == null
                ? eo.data
                : (0, V._W)(el.image_asset.application_id, el.image_asset, 600, ed && es ? void 0 : "webp");
        }, [eo, el, ed, es]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: eu } = (0, C.gX)(_);
    r.useEffect(() => {
        eu && (et(), (0, X.B)(B.intl.string(B.t.OLf3xs), B.t["90LBVl"]));
    }, [eu, et]);
    let [ef, eg] = r.useState(null != (a = null == el ? void 0 : el.name) ? a : ""),
        [ep, em] = r.useState(null != (i = null == el ? void 0 : el.description) ? i : ""),
        [eb, eq] = r.useState(null != (b = null == el ? void 0 : el.price_tier) ? b : void 0),
        [eh, eC] = r.useState(ec),
        [ev, ej] = r.useState(
            null != (q = null == el || null == (A = el.image_asset) ? void 0 : A.filename) ? q : eo.name,
        ),
        [ex, eU] = r.useState(!1),
        [eV, eO] = r.useState(),
        eP = r.useMemo(() => (null != eb ? (0, U.T4)(eb, w.pKx.USD) : void 0), [eb]),
        [eF, eI] = r.useState(!0),
        {
            changesSaving: ey,
            saveError: eN,
            saveProductWithAttachments: eK,
            hasUnsavedAttachmentChanges: eT,
            cancelUnusedUploads: eX,
        } = (0, P.P)(),
        eZ = (null == el ? void 0 : el.attachments) != null && (null == el ? void 0 : el.attachments.length) > 0,
        eW = null != eN ? eN : eV,
        eQ = null != ey && "published" in ey,
        ez = null != ey && !eQ,
        eS = null != (v = null == el ? void 0 : el.role_id) ? v : null,
        [ew, eR] = r.useState(),
        eB = null != ew || null != eS,
        eL = (0, d.e7)([x.Z], () => (null != eS && null !== ew ? x.Z.getRole(_, eS) : null != ew ? ew : void 0), [
            ew,
            eS,
            _,
        ]),
        ek = "";
    eB && eF
        ? (ek = B.intl.string(B.t.ih4QMT))
        : eB
          ? (ek = B.intl.string(B.t.o9xphY))
          : eF && (ek = B.intl.string(B.t.DWYJub));
    let eG = () => {
            eI(!1), eX();
        },
        [eE, eY] = r.useState(),
        {
            changes: eD,
            hasUnsavedChanges: eH,
            canSaveForDraft: eM,
            canSaveForPublished: eJ,
            canPublishOrUnpublish: e_,
        } = r.useMemo(
            () =>
                (0, I.fG)({
                    guildProductListing: el,
                    name: ef,
                    priceTier: eb,
                    description: ep,
                    image: eh,
                    imageName: ev,
                    isImageChanged: ex,
                    newRoleParams: ew,
                    hasSavedAttachments: eZ,
                    hasUnsavedAttachmentChanges: eT,
                }),
            [el, ef, eb, ep, eh, ev, ex, ew, eZ, eT],
        ),
        e$ = r.useMemo(
            () =>
                eH || null == eE || "publish" === eE || null != eW
                    ? null
                    : (0, n.jsx)(f.oXn, {
                          className: L.successNotice,
                          children: (0, n.jsx)(p.Z, {
                              message: (0, n.jsxs)("div", {
                                  className: L.successNoticeMessage,
                                  children: [
                                      (0, n.jsx)(f.owK, {
                                          size: "md",
                                          color: s.Z.BUTTON_POSITIVE_BACKGROUND,
                                          secondaryColor: s.Z.WHITE,
                                      }),
                                      (0, n.jsx)(f.Text, {
                                          variant: "text-md/medium",
                                          children:
                                              "draft" === eE
                                                  ? B.intl.string(B.t["3Rv4MD"])
                                                  : "update_publish" === eE
                                                    ? B.intl.string(B.t["8fPiBw"])
                                                    : B.intl.string(B.t["3LUFnJ"]),
                                      }),
                                  ],
                              }),
                              onReset: () => eY(void 0),
                              onResetText: B.intl.string(B.t.T6QuWV),
                          }),
                      }),
            [eW, eH, eE],
        ),
        e0 = r.useCallback(() => {
            eH
                ? (0, T.Z)({
                      title: B.intl.string(B.t.FVDhIS),
                      body: B.intl.string(B.t.Hgdhwc),
                      cta: B.intl.string(B.t.h0bti4),
                      closeLabel: B.intl.string(B.t["+WYo0t"]),
                      onConfirm: () => {
                          et();
                      },
                  })
                : et();
        }, [et, eH]);
    r.useEffect(() => {
        (0, f.oav)(
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
            e0,
        );
    }, [_, e0, en]);
    let e1 = async (e) => {
        let A = (0, I.pM)({ newRoleParams: ew });
        if ((eO(A), null != A)) return;
        let t = await eK(e);
        if ((eU(!1), null != t)) {
            if ((null != e.name && eg(t.name), null != e.description && em(t.description), null != ew)) {
                let e = t.role_id;
                o()(null != e, "Cannot update role without role ID"), await g.Z.updateRole(_, e, ew);
            }
            eR(void 0), er(t.id), "published" in e && !0 === e.published && et();
        }
    };
    r.useEffect(() => {
        if (null != eW) {
            var e;
            (0, Z.V)(eW, _, null == ei || null == (e = ei.team) ? void 0 : e.id);
        }
    }, [eW, _, ei]),
        r.useEffect(() => {
            eH && eY(void 0);
        }, [eH]);
    let e3 = r.useRef(null);
    return (0, n.jsxs)(f.Y0X, {
        transitionState: eA,
        size: f.CgR.DYNAMIC,
        className: L.modalRoot,
        "aria-labelledby": E,
        parentComponent: "GuildProductEditModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsxs)(f.xBx, {
                className: L.modalHeader,
                separator: !1,
                "data-migration-pending": !0,
                children: [
                    (0, n.jsxs)("div", {
                        className: L.headerText,
                        children: [
                            (0, n.jsx)(f.X6q, {
                                id: E,
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: B.intl.string(B.t.DnNl1d),
                            }),
                            (0, n.jsx)(f.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: B.intl.string(B.t["Tu7f+f"]),
                            }),
                        ],
                    }),
                    (0, n.jsx)(f.olH, {
                        onClick: e0,
                        className: L.__invalid_modalCloseButton,
                        "data-migration-pending": !0,
                    }),
                ],
            }),
            (0, n.jsxs)(f.hzk, {
                className: L.modalContent,
                scrollbarType: "none",
                "data-migration-pending": !0,
                children: [
                    (0, n.jsx)(f.zJl, {
                        children: (0, n.jsxs)("div", {
                            className: L.productFieldsSection,
                            ref: e3,
                            children: [
                                (0, n.jsx)(f.xJW, {
                                    title: B.intl.string(B.t.Hsk7xc),
                                    tag: "label",
                                    htmlFor: Y,
                                    error: null == eW ? void 0 : eW.getFirstFieldErrorMessage("name"),
                                    children: (0, n.jsx)(f.oil, {
                                        value: ef,
                                        onChange: eg,
                                        id: Y,
                                        maxLength: 100,
                                        placeholder: B.intl.string(B.t["/BiYSE"]),
                                        required: !0,
                                    }),
                                }),
                                (0, n.jsx)(f.xJW, {
                                    title: B.intl.string(B.t.QdKLyc),
                                    tag: "label",
                                    error: null == eW ? void 0 : eW.getFirstFieldErrorMessage("description"),
                                    htmlFor: D,
                                    children: (0, n.jsx)(h.Z, {
                                        id: D,
                                        className: L.descriptionArea,
                                        value: ep,
                                        onChange: em,
                                        maxLength: 1500,
                                        placeholder: B.intl.string(B.t.BFwyur),
                                        showCharacterCount: ep.length > 0,
                                        parentModalKey: S.Yz,
                                        required: !0,
                                    }),
                                }),
                                (0, n.jsx)(f.xJW, {
                                    title: B.intl.string(B.t["CAY/vr"]),
                                    tag: "label",
                                    error: null == eW ? void 0 : eW.getFirstFieldErrorMessage("price_tier"),
                                    children: (0, n.jsx)(J, {
                                        guildId: _,
                                        selectedPriceTier: eb,
                                        setPriceTier: eq,
                                    }),
                                }),
                                (0, n.jsxs)(f.xJW, {
                                    title: B.intl.string(B.t["sqXj6+"]),
                                    tag: "label",
                                    error: null == eW ? void 0 : eW.getFirstFieldErrorMessage("image"),
                                    titleClassName: L.thumbnailLabel,
                                    children: [
                                        (0, n.jsx)(f.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: B.intl.string(B.t.yOU4Vl),
                                        }),
                                        (0, n.jsx)(f.LZC, { size: 10 }),
                                        (0, n.jsx)(W.Z, {
                                            presetImages: y.M,
                                            radioGroupAriaLabel: B.intl.string(B.t.fKzQj4),
                                            image: eh,
                                            imageName: ev,
                                            savedImageName:
                                                null == el || null == (l = el.image_asset) ? void 0 : l.filename,
                                            onChange: (e, A) => {
                                                if (null != e) {
                                                    var t;
                                                    eC(e),
                                                        ej(A),
                                                        eU(
                                                            e.startsWith("data:") ||
                                                                A !==
                                                                    (null == el || null == (t = el.image_asset)
                                                                        ? void 0
                                                                        : t.filename),
                                                        );
                                                }
                                            },
                                        }),
                                    ],
                                }),
                                eF
                                    ? (0, n.jsx)(f.xJW, {
                                          title: B.intl.string(B.t.zLrtkJ),
                                          error: null == eW ? void 0 : eW.getFirstFieldErrorMessage("attachments"),
                                          children: (0, n.jsx)(K.s, {
                                              onFileAdded: () => {
                                                  var e;
                                                  null == (e = e3.current) ||
                                                      e.scrollIntoView({
                                                          behavior: "smooth",
                                                          block: "end",
                                                      });
                                              },
                                          }),
                                      })
                                    : null,
                                eB
                                    ? (0, n.jsx)(z.ZP, {
                                          error:
                                              null != (M = null == eW ? void 0 : eW.getFirstFieldErrorMessage(I.NB))
                                                  ? M
                                                  : void 0,
                                          newRoleParams: ew,
                                          setNewRoleParams: eR,
                                          guildId: _,
                                          listingRoleId: eS,
                                          productId: en,
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, n.jsx)("div", { className: L.horizontalSeparator }),
                    (0, n.jsx)(f.zJl, {
                        children: (0, n.jsxs)("div", {
                            className: L.productPreview,
                            children: [
                                (0, n.jsx)(Q.Z, {
                                    disabled: !e_,
                                    disabledTooltip: ea ? B.intl.string(B.t["0NQ00t"]) : B.intl.string(B.t["Ax89/f"]),
                                    published: ea,
                                    onClick: () => {
                                        o()(e_, "Attempting to publish/unpublish when not allowed"),
                                            eY(ea ? "unpublish" : "publish"),
                                            e1(G(k({}, eD), { published: !ea }));
                                    },
                                    submitting: eQ,
                                }),
                                (0, n.jsx)("div", { className: L.verticalSeparator }),
                                (0, n.jsx)(f.X6q, {
                                    variant: "text-xs/bold",
                                    color: "header-secondary",
                                    className: L.previewHeading,
                                    children: B.intl.string(B.t["6I7nQU"]),
                                }),
                                (0, n.jsx)(f.LZC, { size: 4 }),
                                (0, n.jsx)(f.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: B.intl.string(B.t.Oq4dfX),
                                }),
                                (0, n.jsx)(f.LZC, { size: 16 }),
                                (0, n.jsx)(N.Z, {
                                    imageUrl: eh,
                                    name: "" === ef ? B.intl.string(B.t.EmqIws) : ef,
                                    description: "" === ep ? B.intl.string(B.t["11NA2N"]) : ep,
                                    formattedPrice: eP,
                                    role: eL,
                                    productType: ek,
                                    ctaComponent: (0, n.jsx)(u.zx, { text: B.intl.string(B.t.xUi3BA) }),
                                    cardWidth: 340,
                                    thumbnailHeight: 190,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(f.mzw, {
                "data-migration-pending": !0,
                children: (0, n.jsxs)("div", {
                    className: L.footerActionButtons,
                    children: [
                        (0, n.jsxs)("div", {
                            className: L.footerActionLeftButtons,
                            children: [
                                (0, n.jsx)(H, {
                                    text: B.intl.string(B.t.YzGIVF),
                                    value: eB,
                                    onChange: (e) => {
                                        e ? eR((0, z.YP)()) : eR(void 0);
                                    },
                                    warning: null === ew ? (0, n.jsx)(z.aN, {}) : void 0,
                                    disabled: null != eS,
                                }),
                                (0, n.jsx)(H, {
                                    text: B.intl.string(B.t.C6wP2d),
                                    value: eF,
                                    onChange: (e) => {
                                        e
                                            ? eI(!0)
                                            : eT
                                              ? (0, f.ZDy)(async () => {
                                                    let { ConfirmModal: e } = await Promise.resolve().then(
                                                        t.bind(t, 481060),
                                                    );
                                                    return (A) =>
                                                        (0, n.jsx)(
                                                            e,
                                                            G(k({}, A), {
                                                                header: B.intl.string(B.t["2Wihyc"]),
                                                                confirmText: B.intl.string(B.t.N86XcH),
                                                                cancelText: B.intl.string(B.t["ETE/oK"]),
                                                                onConfirm: eG,
                                                                children: (0, n.jsx)(f.Text, {
                                                                    variant: "text-md/normal",
                                                                    children: B.intl.string(B.t.ixRBLi),
                                                                }),
                                                            }),
                                                        );
                                                })
                                              : eG();
                                    },
                                    disabled: eZ,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: L.footerActionRightButtons,
                            children: ea
                                ? (0, n.jsx)(u.zx, {
                                      variant: "secondary",
                                      text: B.intl.string(B.t.XYBEaW),
                                      disabled: !eJ,
                                      loading: ez,
                                      onClick: () => {
                                          o()(
                                              eJ,
                                              "cannot save changes for published product without adding all fields",
                                          ),
                                              eY("update_publish"),
                                              e1(eD);
                                      },
                                  })
                                : (0, n.jsx)(u.zx, {
                                      variant: "secondary",
                                      text: B.intl.string(B.t.ZCjwoa),
                                      disabled: !eM,
                                      loading: ez,
                                      onClick: () => {
                                          o()(eM, "cannot save changes without name or price tier"),
                                              eY("draft"),
                                              e1(eD);
                                      },
                                  }),
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(c.W, {
                component: "div",
                className: L.successNoticeContainer,
                children: e$,
            }),
        ],
    });
}
function $(e) {
    var A;
    return (0, n.jsx)(P.W, {
        guildId: e.guildId,
        editSkuId: null != (A = e.productId) ? A : void 0,
        onFileSizeError: () => (0, v.Z)(S.ve),
        children: (0, n.jsx)(_, k({}, e)),
    });
}
