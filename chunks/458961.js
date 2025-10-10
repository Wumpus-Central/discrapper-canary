A.d(t, { default: () => _ }), A(388685), A(953529);
var r = A(951288),
    n = A(647438),
    a = A(120356),
    l = A.n(a),
    i = A(512722),
    o = A.n(i),
    s = A(831209),
    d = A(399606),
    c = A(215569),
    u = A(481060),
    g = A(749210),
    f = A(852860),
    p = A(725803),
    m = A(313201),
    h = A(76535),
    v = A(215388),
    q = A(674180),
    b = A(884858),
    C = A(695346),
    j = A(485386),
    x = A(937615),
    U = A(73346),
    V = A(506071),
    O = A(587123),
    P = A(240864),
    F = A(863663),
    y = A(923400),
    I = A(623488),
    N = A(152980),
    T = A(120651),
    K = A(871388),
    Z = A(412110),
    W = A(513669),
    X = A(972797),
    Q = A(943516),
    S = A(302463),
    z = A(981631),
    w = A(674563),
    R = A(388032),
    L = A(179598);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var A = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(A);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(A).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(A, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = A[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var A = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      A.push.apply(A, r);
                  }
                  return A;
              })(Object(t)).forEach(function (A) {
                  Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A));
              }),
        e
    );
}
let B = (0, m.hQ)(),
    E = (0, m.hQ)(),
    G = (0, m.hQ)();
function Y(e) {
    let { text: t, onChange: A, value: n, disabled: a, warning: i } = e,
        o = (0, m.Dt)(),
        s = a ? "text-muted" : "text-default";
    return (0, r.jsxs)("label", {
        className: l()(L.benefitToggleContainer, { [L.disabled]: a }),
        htmlFor: o,
        children: [
            (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: s,
                children: t,
            }),
            null != i &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(u.LZC, {
                            size: 4,
                            horizontal: !0,
                        }),
                        i,
                    ],
                }),
            (0, r.jsx)(u.rsf, {
                onChange: A,
                checked: n,
                disabled: a,
                id: o,
            }),
        ],
    });
}
function H(e, t) {
    return e.filter((e) => {
        let { value: A, label: r } = e;
        return A.toString().includes(t) || r.includes(t);
    });
}
function M(e) {
    let { guildId: t, selectedPriceTier: A, setPriceTier: a, label: l, errorMessage: i } = e,
        { priceTiers: o } = (0, h.R)(t, z.RG5.GUILD_PRODUCTS),
        s = n.useMemo(
            () =>
                (null != o ? o : null != A ? [A] : []).map((e) => ({
                    value: e,
                    label: (0, x.T4)(e, z.pKx.USD),
                })),
            [o, A],
        );
    return (0, r.jsx)(u.VcW, {
        label: l,
        errorMessage: i,
        value: A,
        placeholder: R.intl.string(R.t.aI4J5O),
        maxVisibleItems: 5,
        options: s,
        onChange: a,
        filter: H,
        "aria-required": !0,
    });
}
function J(e) {
    var t, a, l, i, m, h, b, H, J, $, ee, et;
    let { guildId: eA, productId: er, transitionState: en, onClose: ea } = e,
        [el, ei] = n.useState(er),
        eo = (0, d.e7)([P.Z], () => (null == el ? null : P.Z.getGuildProduct(el)), [el]),
        es = (0, d.e7)([P.Z], () => P.Z.getGuildProductsForGuild(eA, { publishedOnly: !0 }).length, [eA]),
        ed = (null == eo ? void 0 : eo.published) === !0,
        { application: ec } = (0, p.Z)(eA, w.wW.GUILD_ROLE_SUBSCRIPTIONS),
        eu = y.M["0"],
        eg = C.QK.useSetting(),
        ef = (0, V.n)(),
        ep = n.useCallback(() => {
            var e;
            return (null == eo || null == (e = eo.image_asset) ? void 0 : e.application_id) == null
                ? eu.data
                : (0, U._W)(eo.image_asset.application_id, eo.image_asset, 600, ef && eg ? void 0 : "webp");
        }, [eu, eo, ef, eg]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: em } = (0, q.gX)(eA);
    n.useEffect(() => {
        em && (ea(), (0, K.B)(R.intl.string(R.t.OLf3xs), R.t["90LBVl"]));
    }, [em, ea]);
    let [eh, ev] = n.useState(null != (l = null == eo ? void 0 : eo.name) ? l : ""),
        [eq, eb] = n.useState(null != (i = null == eo ? void 0 : eo.description) ? i : ""),
        [eC, ej] = n.useState(null != (m = null == eo ? void 0 : eo.price_tier) ? m : void 0),
        [ex, eU] = n.useState(ep),
        [eV, eO] = n.useState(
            null != (h = null == eo || null == (t = eo.image_asset) ? void 0 : t.filename) ? h : eu.name,
        ),
        [eP, eF] = n.useState(!1),
        [ey, eI] = n.useState(),
        eN = n.useMemo(() => (null != eC ? (0, x.T4)(eC, z.pKx.USD) : void 0), [eC]),
        [eT, eK] = n.useState(!0),
        {
            changesSaving: eZ,
            saveError: eW,
            saveProductWithAttachments: eX,
            hasUnsavedAttachmentChanges: eQ,
            cancelUnusedUploads: eS,
        } = (0, O.P)(),
        ez = (null == eo ? void 0 : eo.attachments) != null && (null == eo ? void 0 : eo.attachments.length) > 0,
        ew = null != eW ? eW : ey,
        eR = null != eZ && "published" in eZ,
        eL = null != eZ && !eR,
        eD = null != (b = null == eo ? void 0 : eo.role_id) ? b : null,
        [ek, eB] = n.useState(),
        eE = null != ek || null != eD,
        eG = (0, d.e7)([j.Z], () => (null != eD && null !== ek ? j.Z.getRole(eA, eD) : null != ek ? ek : void 0), [
            ek,
            eD,
            eA,
        ]),
        eY = "";
    eE && eT
        ? (eY = R.intl.string(R.t.ih4QMT))
        : eE
          ? (eY = R.intl.string(R.t.o9xphY))
          : eT && (eY = R.intl.string(R.t.DWYJub));
    let eH = () => {
            eK(!1), eS();
        },
        [eM, eJ] = n.useState(),
        {
            changes: e_,
            hasUnsavedChanges: e$,
            canSaveForDraft: e0,
            canSaveForPublished: e1,
            canPublishOrUnpublish: e3,
        } = n.useMemo(
            () =>
                (0, F.fG)({
                    guildProductListing: eo,
                    name: eh,
                    priceTier: eC,
                    description: eq,
                    image: ex,
                    imageName: eV,
                    isImageChanged: eP,
                    newRoleParams: ek,
                    hasSavedAttachments: ez,
                    hasUnsavedAttachmentChanges: eQ,
                }),
            [eo, eh, eC, eq, ex, eV, eP, ek, ez, eQ],
        ),
        e9 = n.useMemo(
            () =>
                e$ || null == eM || "publish" === eM || null != ew
                    ? null
                    : (0, r.jsx)(u.oXn, {
                          className: L.successNotice,
                          children: (0, r.jsx)(f.Z, {
                              message: (0, r.jsxs)("div", {
                                  className: L.successNoticeMessage,
                                  children: [
                                      (0, r.jsx)(u.owK, {
                                          size: "md",
                                          color: s.Z.BUTTON_POSITIVE_BACKGROUND,
                                          secondaryColor: s.Z.WHITE,
                                      }),
                                      (0, r.jsx)(u.Text, {
                                          variant: "text-md/medium",
                                          children:
                                              "draft" === eM
                                                  ? R.intl.string(R.t["3Rv4MD"])
                                                  : "update_publish" === eM
                                                    ? R.intl.string(R.t["8fPiBw"])
                                                    : R.intl.string(R.t["3LUFnJ"]),
                                      }),
                                  ],
                              }),
                              onReset: () => eJ(void 0),
                              onResetText: R.intl.string(R.t.T6QuWV),
                          }),
                      }),
            [ew, e$, eM],
        ),
        e6 = n.useCallback(() => {
            e$
                ? (0, T.Z)({
                      title: R.intl.string(R.t.FVDhIS),
                      body: R.intl.string(R.t.Hgdhwc),
                      cta: R.intl.string(R.t.h0bti4),
                      closeLabel: R.intl.string(R.t["+WYo0t"]),
                      onConfirm: () => {
                          ea();
                      },
                  })
                : ea();
        }, [ea, e$]);
    n.useEffect(() => {
        (0, u.oav)(
            S.Yz,
            (e) =>
                (0, r.jsx)(
                    _,
                    D(
                        {
                            guildId: eA,
                            productId: el,
                        },
                        e,
                    ),
                ),
            e6,
        );
    }, [eA, e6, el]);
    let e7 = async (e) => {
        let t = (0, F.pM)({ newRoleParams: ek });
        if ((eI(t), null != t)) return;
        let A = await eX(e);
        if ((eF(!1), null != A)) {
            if ((null != e.name && ev(A.name), null != e.description && eb(A.description), null != ek)) {
                let e = A.role_id;
                o()(null != e, "Cannot update role without role ID"), await g.Z.updateRole(eA, e, ek);
            }
            eB(void 0), ei(A.id), "published" in e && !0 === e.published && ea();
        }
    };
    n.useEffect(() => {
        if (null != ew) {
            var e;
            (0, Z.V)(ew, eA, null == ec || null == (e = ec.team) ? void 0 : e.id);
        }
    }, [ew, eA, ec]),
        n.useEffect(() => {
            e$ && eJ(void 0);
        }, [e$]);
    let e8 = n.useRef(null),
        e2 = !e3 || (!ed && es >= S.dD);
    return (0, r.jsxs)(u.Y0X, {
        transitionState: en,
        size: u.CgR.DYNAMIC,
        className: L.modalRoot,
        "aria-labelledby": B,
        parentComponent: "GuildProductEditModal",
        "data-migration-pending": !0,
        children: [
            (0, r.jsxs)(u.xBx, {
                className: L.modalHeader,
                separator: !1,
                "data-migration-pending": !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: L.headerText,
                        children: [
                            (0, r.jsx)(u.X6q, {
                                id: B,
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: R.intl.string(R.t.DnNl1d),
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: R.intl.string(R.t["Tu7f+f"]),
                            }),
                        ],
                    }),
                    (0, r.jsx)(u.olH, {
                        onClick: e6,
                        className: L.__invalid_modalCloseButton,
                        "data-migration-pending": !0,
                    }),
                ],
            }),
            (0, r.jsxs)(u.hzk, {
                className: L.modalContent,
                scrollbarType: "none",
                "data-migration-pending": !0,
                children: [
                    (0, r.jsx)(u.zJl, {
                        children: (0, r.jsxs)("div", {
                            className: L.productFieldsSection,
                            ref: e8,
                            children: [
                                (0, r.jsx)(u.oil, {
                                    label: R.intl.string(R.t.Hsk7xc),
                                    error: null == ew ? void 0 : ew.getFirstFieldErrorMessage("name"),
                                    value: eh,
                                    onChange: ev,
                                    id: E,
                                    maxLength: 100,
                                    placeholder: R.intl.string(R.t["/BiYSE"]),
                                    required: !0,
                                }),
                                (0, r.jsx)(v.Z, {
                                    label: R.intl.string(R.t.QdKLyc),
                                    errorMessage:
                                        null != (H = null == ew ? void 0 : ew.getFirstFieldErrorMessage("description"))
                                            ? H
                                            : void 0,
                                    id: G,
                                    className: L.descriptionArea,
                                    value: eq,
                                    onChange: eb,
                                    maxLength: 1500,
                                    placeholder: R.intl.string(R.t.BFwyur),
                                    showCharacterCount: eq.length > 0,
                                    parentModalKey: S.Yz,
                                    required: !0,
                                }),
                                (0, r.jsx)(M, {
                                    label: R.intl.string(R.t["CAY/vr"]),
                                    errorMessage:
                                        null != (J = null == ew ? void 0 : ew.getFirstFieldErrorMessage("price_tier"))
                                            ? J
                                            : void 0,
                                    guildId: eA,
                                    selectedPriceTier: eC,
                                    setPriceTier: ej,
                                }),
                                (0, r.jsx)(u.gNt, {
                                    label: R.intl.string(R.t["sqXj6+"]),
                                    errorMessage:
                                        null != ($ = null == ew ? void 0 : ew.getFirstFieldErrorMessage("image"))
                                            ? $
                                            : void 0,
                                    description: R.intl.string(R.t.yOU4Vl),
                                    children: (0, r.jsx)(W.Z, {
                                        presetImages: y.M,
                                        radioGroupAriaLabel: R.intl.string(R.t.fKzQj4),
                                        image: ex,
                                        imageName: eV,
                                        savedImageName:
                                            null == eo || null == (a = eo.image_asset) ? void 0 : a.filename,
                                        onChange: (e, t) => {
                                            if (null != e) {
                                                var A;
                                                eU(e),
                                                    eO(t),
                                                    eF(
                                                        e.startsWith("data:") ||
                                                            t !==
                                                                (null == eo || null == (A = eo.image_asset)
                                                                    ? void 0
                                                                    : A.filename),
                                                    );
                                            }
                                        },
                                    }),
                                }),
                                eT
                                    ? (0, r.jsx)(u.gNt, {
                                          label: R.intl.string(R.t.zLrtkJ),
                                          errorMessage:
                                              null !=
                                              (ee = null == ew ? void 0 : ew.getFirstFieldErrorMessage("attachments"))
                                                  ? ee
                                                  : void 0,
                                          children: (0, r.jsx)(N.s, {
                                              onFileAdded: () => {
                                                  var e;
                                                  null == (e = e8.current) ||
                                                      e.scrollIntoView({
                                                          behavior: "smooth",
                                                          block: "end",
                                                      });
                                              },
                                          }),
                                      })
                                    : null,
                                eE
                                    ? (0, r.jsx)(Q.ZP, {
                                          error:
                                              null != (et = null == ew ? void 0 : ew.getFirstFieldErrorMessage(F.NB))
                                                  ? et
                                                  : void 0,
                                          newRoleParams: ek,
                                          setNewRoleParams: eB,
                                          guildId: eA,
                                          listingRoleId: eD,
                                          productId: el,
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, r.jsx)("div", { className: L.horizontalSeparator }),
                    (0, r.jsx)(u.zJl, {
                        children: (0, r.jsxs)("div", {
                            className: L.productPreview,
                            children: [
                                (0, r.jsx)(X.Z, {
                                    disabled: e2,
                                    disabledTooltip: ed
                                        ? R.intl.string(R.t["0NQ00t"])
                                        : es >= S.dD
                                          ? R.intl.format(R.t.IqWPVl, { maxProducts: S.dD })
                                          : R.intl.string(R.t["Ax89/f"]),
                                    published: ed,
                                    onClick: () => {
                                        o()(e3, "Attempting to publish/unpublish when not allowed"),
                                            eJ(ed ? "unpublish" : "publish"),
                                            e7(k(D({}, e_), { published: !ed }));
                                    },
                                    submitting: eR,
                                }),
                                (0, r.jsx)("div", { className: L.verticalSeparator }),
                                (0, r.jsx)(u.X6q, {
                                    variant: "text-xs/bold",
                                    color: "header-secondary",
                                    className: L.previewHeading,
                                    children: R.intl.string(R.t["6I7nQU"]),
                                }),
                                (0, r.jsx)(u.LZC, { size: 4 }),
                                (0, r.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: R.intl.string(R.t.Oq4dfX),
                                }),
                                (0, r.jsx)(u.LZC, { size: 16 }),
                                (0, r.jsx)(I.Z, {
                                    imageUrl: ex,
                                    name: "" === eh ? R.intl.string(R.t.EmqIws) : eh,
                                    description: "" === eq ? R.intl.string(R.t["11NA2N"]) : eq,
                                    formattedPrice: eN,
                                    role: eG,
                                    productType: eY,
                                    ctaComponent: (0, r.jsx)(u.zxk, { text: R.intl.string(R.t.xUi3BA) }),
                                    cardWidth: 340,
                                    thumbnailHeight: 190,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(u.mzw, {
                "data-migration-pending": !0,
                children: (0, r.jsxs)("div", {
                    className: L.footerActionButtons,
                    children: [
                        (0, r.jsxs)("div", {
                            className: L.footerActionLeftButtons,
                            children: [
                                (0, r.jsx)(Y, {
                                    text: R.intl.string(R.t.YzGIVF),
                                    value: eE,
                                    onChange: (e) => {
                                        e ? eB((0, Q.YP)()) : eB(void 0);
                                    },
                                    warning: null === ek ? (0, r.jsx)(Q.aN, {}) : void 0,
                                    disabled: null != eD,
                                }),
                                (0, r.jsx)(Y, {
                                    text: R.intl.string(R.t.C6wP2d),
                                    value: eT,
                                    onChange: (e) => {
                                        e
                                            ? eK(!0)
                                            : eQ
                                              ? (0, u.ZDy)(async () => {
                                                    let { ConfirmModal: e } = await Promise.resolve().then(
                                                        A.bind(A, 481060),
                                                    );
                                                    return (t) =>
                                                        (0, r.jsx)(
                                                            e,
                                                            k(D({}, t), {
                                                                header: R.intl.string(R.t["2Wihyc"]),
                                                                confirmText: R.intl.string(R.t.N86XcH),
                                                                cancelText: R.intl.string(R.t["ETE/oK"]),
                                                                onConfirm: eH,
                                                                children: (0, r.jsx)(u.Text, {
                                                                    variant: "text-md/normal",
                                                                    children: R.intl.string(R.t.ixRBLi),
                                                                }),
                                                            }),
                                                        );
                                                })
                                              : eH();
                                    },
                                    disabled: ez,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: L.footerActionRightButtons,
                            children: ed
                                ? (0, r.jsx)(u.zxk, {
                                      variant: "secondary",
                                      text: R.intl.string(R.t.XYBEaW),
                                      disabled: !e1,
                                      loading: eL,
                                      onClick: () => {
                                          o()(
                                              e1,
                                              "cannot save changes for published product without adding all fields",
                                          ),
                                              eJ("update_publish"),
                                              e7(e_);
                                      },
                                  })
                                : (0, r.jsx)(u.zxk, {
                                      variant: "secondary",
                                      text: R.intl.string(R.t.ZCjwoa),
                                      disabled: !e0,
                                      loading: eL,
                                      onClick: () => {
                                          o()(e0, "cannot save changes without name or price tier"),
                                              eJ("draft"),
                                              e7(e_);
                                      },
                                  }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(c.W, {
                component: "div",
                className: L.successNoticeContainer,
                children: e9,
            }),
        ],
    });
}
function _(e) {
    var t;
    return (0, r.jsx)(O.W, {
        guildId: e.guildId,
        editSkuId: null != (t = e.productId) ? t : void 0,
        onFileSizeError: () => (0, b.Z)(S.ve),
        children: (0, r.jsx)(J, D({}, e)),
    });
}
