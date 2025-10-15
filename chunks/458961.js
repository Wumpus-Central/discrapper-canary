A.d(t, { default: () => _ }), A(388685), A(953529);
var n = A(951288),
    r = A(647438),
    a = A(120356),
    i = A.n(a),
    l = A(512722),
    o = A.n(l),
    s = A(831209),
    d = A(399606),
    u = A(215569),
    c = A(481060),
    g = A(749210),
    f = A(852860),
    p = A(725803),
    m = A(313201),
    h = A(76535),
    v = A(215388),
    q = A(674180),
    b = A(884858),
    C = A(695346),
    U = A(485386),
    j = A(937615),
    V = A(73346),
    x = A(506071),
    O = A(587123),
    P = A(240864),
    F = A(863663),
    y = A(923400),
    I = A(623488),
    N = A(152980),
    K = A(120651),
    T = A(871388),
    Z = A(412110),
    W = A(513669),
    X = A(972797),
    Q = A(943516),
    S = A(302463),
    z = A(981631),
    w = A(674563),
    B = A(388032),
    D = A(179598);
function L(e) {
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
function R(e, t) {
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
let k = (0, m.hQ)(),
    E = (0, m.hQ)(),
    G = (0, m.hQ)();
function Y(e) {
    let { text: t, onChange: A, value: r, disabled: a, warning: l } = e,
        o = (0, m.Dt)(),
        s = a ? "text-muted" : "text-default";
    return (0, n.jsxs)("label", {
        className: i()(D.benefitToggleContainer, { [D.disabled]: a }),
        htmlFor: o,
        children: [
            (0, n.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: s,
                children: t,
            }),
            null != l &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(c.LZC, {
                            size: 4,
                            horizontal: !0,
                        }),
                        l,
                    ],
                }),
            (0, n.jsx)(c.rsf, {
                onChange: A,
                checked: r,
                disabled: a,
                id: o,
            }),
        ],
    });
}
function H(e, t) {
    return e.filter((e) => {
        let { value: A, label: n } = e;
        return A.toString().includes(t) || n.includes(t);
    });
}
function M(e) {
    let { guildId: t, selectedPriceTier: A, setPriceTier: a, label: i, errorMessage: l } = e,
        { priceTiers: o } = (0, h.R)(t, z.RG5.GUILD_PRODUCTS),
        s = r.useMemo(
            () =>
                (null != o ? o : null != A ? [A] : []).map((e) => ({
                    value: e,
                    label: (0, j.T4)(e, z.pKx.USD),
                })),
            [o, A],
        );
    return (0, n.jsx)(c.VcW, {
        label: i,
        errorMessage: l,
        value: A,
        placeholder: B.intl.string(B.t.aI4J5O),
        maxVisibleItems: 5,
        options: s,
        onChange: a,
        filter: H,
        "aria-required": !0,
    });
}
function J(e) {
    var t, a, i, l, m, h, b, H, J, $, ee, et;
    let { guildId: eA, productId: en, transitionState: er, onClose: ea } = e,
        [ei, el] = r.useState(en),
        eo = (0, d.e7)([P.Z], () => (null == ei ? null : P.Z.getGuildProduct(ei)), [ei]),
        es = (0, d.e7)([P.Z], () => P.Z.getGuildProductsForGuild(eA, { publishedOnly: !0 }).length, [eA]),
        ed = (null == eo ? void 0 : eo.published) === !0,
        { application: eu } = (0, p.Z)(eA, w.wW.GUILD_ROLE_SUBSCRIPTIONS),
        ec = y.M["0"],
        eg = C.QK.useSetting(),
        ef = (0, x.n)(),
        ep = r.useCallback(() => {
            var e;
            return (null == eo || null == (e = eo.image_asset) ? void 0 : e.application_id) == null
                ? ec.data
                : (0, V._W)(eo.image_asset.application_id, eo.image_asset, 600, ef && eg ? void 0 : "webp");
        }, [ec, eo, ef, eg]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: em } = (0, q.gX)(eA);
    r.useEffect(() => {
        em && (ea(), (0, T.B)(B.intl.string(B.t.OLf3xs), B.t["90LBVl"]));
    }, [em, ea]);
    let [eh, ev] = r.useState(null != (i = null == eo ? void 0 : eo.name) ? i : ""),
        [eq, eb] = r.useState(null != (l = null == eo ? void 0 : eo.description) ? l : ""),
        [eC, eU] = r.useState(null != (m = null == eo ? void 0 : eo.price_tier) ? m : void 0),
        [ej, eV] = r.useState(ep),
        [ex, eO] = r.useState(
            null != (h = null == eo || null == (t = eo.image_asset) ? void 0 : t.filename) ? h : ec.name,
        ),
        [eP, eF] = r.useState(!1),
        [ey, eI] = r.useState(),
        eN = r.useMemo(() => (null != eC ? (0, j.T4)(eC, z.pKx.USD) : void 0), [eC]),
        [eK, eT] = r.useState(!0),
        {
            changesSaving: eZ,
            saveError: eW,
            saveProductWithAttachments: eX,
            hasUnsavedAttachmentChanges: eQ,
            cancelUnusedUploads: eS,
        } = (0, O.P)(),
        ez = (null == eo ? void 0 : eo.attachments) != null && (null == eo ? void 0 : eo.attachments.length) > 0,
        ew = null != eW ? eW : ey,
        eB = null != eZ && "published" in eZ,
        eD = null != eZ && !eB,
        eL = null != (b = null == eo ? void 0 : eo.role_id) ? b : null,
        [eR, ek] = r.useState(),
        eE = null != eR || null != eL,
        eG = (0, d.e7)([U.Z], () => (null != eL && null !== eR ? U.Z.getRole(eA, eL) : null != eR ? eR : void 0), [
            eR,
            eL,
            eA,
        ]),
        eY = "";
    eE && eK
        ? (eY = B.intl.string(B.t.ih4QMT))
        : eE
          ? (eY = B.intl.string(B.t.o9xphY))
          : eK && (eY = B.intl.string(B.t.DWYJub));
    let eH = () => {
            eT(!1), eS();
        },
        [eM, eJ] = r.useState(),
        {
            changes: e_,
            hasUnsavedChanges: e$,
            canSaveForDraft: e0,
            canSaveForPublished: e1,
            canPublishOrUnpublish: e3,
        } = r.useMemo(
            () =>
                (0, F.fG)({
                    guildProductListing: eo,
                    name: eh,
                    priceTier: eC,
                    description: eq,
                    image: ej,
                    imageName: ex,
                    isImageChanged: eP,
                    newRoleParams: eR,
                    hasSavedAttachments: ez,
                    hasUnsavedAttachmentChanges: eQ,
                }),
            [eo, eh, eC, eq, ej, ex, eP, eR, ez, eQ],
        ),
        e9 = r.useMemo(
            () =>
                e$ || null == eM || "publish" === eM || null != ew
                    ? null
                    : (0, n.jsx)(c.oXn, {
                          className: D.successNotice,
                          children: (0, n.jsx)(f.Z, {
                              message: (0, n.jsxs)("div", {
                                  className: D.successNoticeMessage,
                                  children: [
                                      (0, n.jsx)(c.owK, {
                                          size: "md",
                                          color: s.Z.BUTTON_POSITIVE_BACKGROUND,
                                          secondaryColor: s.Z.WHITE,
                                      }),
                                      (0, n.jsx)(c.Text, {
                                          variant: "text-md/medium",
                                          children:
                                              "draft" === eM
                                                  ? B.intl.string(B.t["3Rv4MD"])
                                                  : "update_publish" === eM
                                                    ? B.intl.string(B.t["8fPiBw"])
                                                    : B.intl.string(B.t["3LUFnJ"]),
                                      }),
                                  ],
                              }),
                              onReset: () => eJ(void 0),
                              onResetText: B.intl.string(B.t.T6QuWV),
                          }),
                      }),
            [ew, e$, eM],
        ),
        e6 = r.useCallback(() => {
            e$
                ? (0, K.Z)({
                      title: B.intl.string(B.t.FVDhIS),
                      body: B.intl.string(B.t.Hgdhwc),
                      cta: B.intl.string(B.t.h0bti4),
                      closeLabel: B.intl.string(B.t["+WYo0t"]),
                      onConfirm: () => {
                          ea();
                      },
                  })
                : ea();
        }, [ea, e$]);
    r.useEffect(() => {
        (0, c.oav)(
            S.Yz,
            (e) =>
                (0, n.jsx)(
                    _,
                    L(
                        {
                            guildId: eA,
                            productId: ei,
                        },
                        e,
                    ),
                ),
            e6,
        );
    }, [eA, e6, ei]);
    let e8 = async (e) => {
        let t = (0, F.pM)({ newRoleParams: eR });
        if ((eI(t), null != t)) return;
        let A = await eX(e);
        if ((eF(!1), null != A)) {
            if ((null != e.name && ev(A.name), null != e.description && eb(A.description), null != eR)) {
                let e = A.role_id;
                o()(null != e, "Cannot update role without role ID"), await g.Z.updateRole(eA, e, eR);
            }
            ek(void 0), el(A.id), "published" in e && !0 === e.published && ea();
        }
    };
    r.useEffect(() => {
        if (null != ew) {
            var e;
            (0, Z.V)(ew, eA, null == eu || null == (e = eu.team) ? void 0 : e.id);
        }
    }, [ew, eA, eu]),
        r.useEffect(() => {
            e$ && eJ(void 0);
        }, [e$]);
    let e7 = r.useRef(null),
        e2 = !e3 || (!ed && es >= S.dD);
    return (0, n.jsxs)(c.Y0X, {
        transitionState: er,
        size: c.CgR.DYNAMIC,
        className: D.modalRoot,
        "aria-labelledby": k,
        parentComponent: "GuildProductEditModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsxs)(c.xBx, {
                className: D.modalHeader,
                separator: !1,
                "data-migration-pending": !0,
                children: [
                    (0, n.jsxs)("div", {
                        className: D.headerText,
                        children: [
                            (0, n.jsx)(c.Heading, {
                                id: k,
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: B.intl.string(B.t.DnNl1d),
                            }),
                            (0, n.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: B.intl.string(B.t["Tu7f+f"]),
                            }),
                        ],
                    }),
                    (0, n.jsx)(c.olH, {
                        onClick: e6,
                        className: D.__invalid_modalCloseButton,
                        "data-migration-pending": !0,
                    }),
                ],
            }),
            (0, n.jsxs)(c.hzk, {
                className: D.modalContent,
                scrollbarType: "none",
                "data-migration-pending": !0,
                children: [
                    (0, n.jsx)(c.zJl, {
                        children: (0, n.jsxs)("div", {
                            className: D.productFieldsSection,
                            ref: e7,
                            children: [
                                (0, n.jsx)(c.oil, {
                                    label: B.intl.string(B.t.Hsk7xc),
                                    error: null == ew ? void 0 : ew.getFirstFieldErrorMessage("name"),
                                    value: eh,
                                    onChange: ev,
                                    id: E,
                                    maxLength: 100,
                                    placeholder: B.intl.string(B.t["/BiYSE"]),
                                    required: !0,
                                }),
                                (0, n.jsx)(v.Z, {
                                    label: B.intl.string(B.t.QdKLyc),
                                    errorMessage:
                                        null != (H = null == ew ? void 0 : ew.getFirstFieldErrorMessage("description"))
                                            ? H
                                            : void 0,
                                    id: G,
                                    className: D.descriptionArea,
                                    value: eq,
                                    onChange: eb,
                                    maxLength: 1500,
                                    placeholder: B.intl.string(B.t.BFwyur),
                                    showCharacterCount: eq.length > 0,
                                    parentModalKey: S.Yz,
                                    required: !0,
                                }),
                                (0, n.jsx)(M, {
                                    label: B.intl.string(B.t["CAY/vr"]),
                                    errorMessage:
                                        null != (J = null == ew ? void 0 : ew.getFirstFieldErrorMessage("price_tier"))
                                            ? J
                                            : void 0,
                                    guildId: eA,
                                    selectedPriceTier: eC,
                                    setPriceTier: eU,
                                }),
                                (0, n.jsx)(c.gNt, {
                                    label: B.intl.string(B.t["sqXj6+"]),
                                    errorMessage:
                                        null != ($ = null == ew ? void 0 : ew.getFirstFieldErrorMessage("image"))
                                            ? $
                                            : void 0,
                                    description: B.intl.string(B.t.yOU4Vl),
                                    children: (0, n.jsx)(W.Z, {
                                        presetImages: y.M,
                                        radioGroupAriaLabel: B.intl.string(B.t.fKzQj4),
                                        image: ej,
                                        imageName: ex,
                                        savedImageName:
                                            null == eo || null == (a = eo.image_asset) ? void 0 : a.filename,
                                        onChange: (e, t) => {
                                            if (null != e) {
                                                var A;
                                                eV(e),
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
                                eK
                                    ? (0, n.jsx)(c.gNt, {
                                          label: B.intl.string(B.t.zLrtkJ),
                                          errorMessage:
                                              null !=
                                              (ee = null == ew ? void 0 : ew.getFirstFieldErrorMessage("attachments"))
                                                  ? ee
                                                  : void 0,
                                          children: (0, n.jsx)(N.s, {
                                              onFileAdded: () => {
                                                  var e;
                                                  null == (e = e7.current) ||
                                                      e.scrollIntoView({
                                                          behavior: "smooth",
                                                          block: "end",
                                                      });
                                              },
                                          }),
                                      })
                                    : null,
                                eE
                                    ? (0, n.jsx)(Q.ZP, {
                                          error:
                                              null != (et = null == ew ? void 0 : ew.getFirstFieldErrorMessage(F.NB))
                                                  ? et
                                                  : void 0,
                                          newRoleParams: eR,
                                          setNewRoleParams: ek,
                                          guildId: eA,
                                          listingRoleId: eL,
                                          productId: ei,
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, n.jsx)("div", { className: D.horizontalSeparator }),
                    (0, n.jsx)(c.zJl, {
                        children: (0, n.jsxs)("div", {
                            className: D.productPreview,
                            children: [
                                (0, n.jsx)(X.Z, {
                                    disabled: e2,
                                    disabledTooltip: ed
                                        ? B.intl.string(B.t["0NQ00t"])
                                        : es >= S.dD
                                          ? B.intl.format(B.t.IqWPVl, { maxProducts: S.dD })
                                          : B.intl.string(B.t["Ax89/f"]),
                                    published: ed,
                                    onClick: () => {
                                        o()(e3, "Attempting to publish/unpublish when not allowed"),
                                            eJ(ed ? "unpublish" : "publish"),
                                            e8(R(L({}, e_), { published: !ed }));
                                    },
                                    submitting: eB,
                                }),
                                (0, n.jsx)("div", { className: D.verticalSeparator }),
                                (0, n.jsx)(c.Heading, {
                                    variant: "text-xs/bold",
                                    color: "header-secondary",
                                    className: D.previewHeading,
                                    children: B.intl.string(B.t["6I7nQU"]),
                                }),
                                (0, n.jsx)(c.LZC, { size: 4 }),
                                (0, n.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: B.intl.string(B.t.Oq4dfX),
                                }),
                                (0, n.jsx)(c.LZC, { size: 16 }),
                                (0, n.jsx)(I.Z, {
                                    imageUrl: ej,
                                    name: "" === eh ? B.intl.string(B.t.EmqIws) : eh,
                                    description: "" === eq ? B.intl.string(B.t["11NA2N"]) : eq,
                                    formattedPrice: eN,
                                    role: eG,
                                    productType: eY,
                                    ctaComponent: (0, n.jsx)(c.Button, { text: B.intl.string(B.t.xUi3BA) }),
                                    cardWidth: 340,
                                    thumbnailHeight: 190,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(c.mzw, {
                "data-migration-pending": !0,
                children: (0, n.jsxs)("div", {
                    className: D.footerActionButtons,
                    children: [
                        (0, n.jsxs)("div", {
                            className: D.footerActionLeftButtons,
                            children: [
                                (0, n.jsx)(Y, {
                                    text: B.intl.string(B.t.YzGIVF),
                                    value: eE,
                                    onChange: (e) => {
                                        e ? ek((0, Q.YP)()) : ek(void 0);
                                    },
                                    warning: null === eR ? (0, n.jsx)(Q.aN, {}) : void 0,
                                    disabled: null != eL,
                                }),
                                (0, n.jsx)(Y, {
                                    text: B.intl.string(B.t.C6wP2d),
                                    value: eK,
                                    onChange: (e) => {
                                        e
                                            ? eT(!0)
                                            : eQ
                                              ? (0, c.ZDy)(async () => {
                                                    let { ConfirmModal: e } = await Promise.resolve().then(
                                                        A.bind(A, 481060),
                                                    );
                                                    return (t) =>
                                                        (0, n.jsx)(
                                                            e,
                                                            R(L({}, t), {
                                                                header: B.intl.string(B.t["2Wihyc"]),
                                                                confirmText: B.intl.string(B.t.N86XcH),
                                                                cancelText: B.intl.string(B.t["ETE/oK"]),
                                                                onConfirm: eH,
                                                                children: (0, n.jsx)(c.Text, {
                                                                    variant: "text-md/normal",
                                                                    children: B.intl.string(B.t.ixRBLi),
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
                        (0, n.jsx)("div", {
                            className: D.footerActionRightButtons,
                            children: ed
                                ? (0, n.jsx)(c.Button, {
                                      variant: "secondary",
                                      text: B.intl.string(B.t.XYBEaW),
                                      disabled: !e1,
                                      loading: eD,
                                      onClick: () => {
                                          o()(
                                              e1,
                                              "cannot save changes for published product without adding all fields",
                                          ),
                                              eJ("update_publish"),
                                              e8(e_);
                                      },
                                  })
                                : (0, n.jsx)(c.Button, {
                                      variant: "secondary",
                                      text: B.intl.string(B.t.ZCjwoa),
                                      disabled: !e0,
                                      loading: eD,
                                      onClick: () => {
                                          o()(e0, "cannot save changes without name or price tier"),
                                              eJ("draft"),
                                              e8(e_);
                                      },
                                  }),
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(u.W, {
                component: "div",
                className: D.successNoticeContainer,
                children: e9,
            }),
        ],
    });
}
function _(e) {
    var t;
    return (0, n.jsx)(O.W, {
        guildId: e.guildId,
        editSkuId: null != (t = e.productId) ? t : void 0,
        onFileSizeError: () => (0, b.Z)(S.ve),
        children: (0, n.jsx)(J, L({}, e)),
    });
}
