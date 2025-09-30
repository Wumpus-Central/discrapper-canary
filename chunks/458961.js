A.d(t, { default: () => ee }), A(388685), A(953529);
var r = A(951288),
    n = A(647438),
    a = A(120356),
    l = A.n(a),
    i = A(512722),
    o = A.n(i),
    s = A(831209),
    d = A(399606),
    c = A(215569),
    u = A(159691),
    g = A(755721),
    f = A(481060),
    p = A(749210),
    m = A(852860),
    h = A(725803),
    v = A(313201),
    q = A(76535),
    b = A(215388),
    C = A(674180),
    j = A(884858),
    x = A(695346),
    U = A(485386),
    V = A(937615),
    O = A(73346),
    P = A(506071),
    F = A(587123),
    y = A(240864),
    I = A(863663),
    N = A(923400),
    T = A(623488),
    K = A(152980),
    Z = A(120651),
    W = A(871388),
    X = A(412110),
    Q = A(513669),
    z = A(972797),
    S = A(943516),
    w = A(302463),
    R = A(981631),
    L = A(674563),
    k = A(388032),
    D = A(179598);
function B(e) {
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
function E(e, t) {
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
let G = (0, v.hQ)(),
    Y = (0, v.hQ)(),
    H = (0, v.hQ)();
function M(e) {
    let { text: t, onChange: A, value: n, disabled: a, warning: i } = e,
        o = (0, v.Dt)(),
        s = a ? "text-muted" : "text-default";
    return (0, r.jsxs)("label", {
        className: l()(D.benefitToggleContainer, { [D.disabled]: a }),
        htmlFor: o,
        children: [
            (0, r.jsx)(f.Text, {
                variant: "text-sm/medium",
                color: s,
                children: t,
            }),
            null != i &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.LZC, {
                            size: 4,
                            horizontal: !0,
                        }),
                        i,
                    ],
                }),
            (0, r.jsx)(f.LZC, {
                size: 16,
                horizontal: !0,
            }),
            (0, r.jsx)(g.T2, {
                onChange: A,
                checked: n,
                disabled: a,
                id: o,
            }),
        ],
    });
}
function J(e, t) {
    return e.filter((e) => {
        let { value: A, label: r } = e;
        return A.toString().includes(t) || r.includes(t);
    });
}
function _(e) {
    let { guildId: t, selectedPriceTier: A, setPriceTier: a, label: l, errorMessage: i } = e,
        { priceTiers: o } = (0, q.R)(t, R.RG5.GUILD_PRODUCTS),
        s = n.useMemo(
            () =>
                (null != o ? o : null != A ? [A] : []).map((e) => ({
                    value: e,
                    label: (0, V.T4)(e, R.pKx.USD),
                })),
            [o, A],
        );
    return (0, r.jsx)(f.VcW, {
        label: l,
        errorMessage: i,
        value: A,
        placeholder: k.intl.string(k.t.aI4J5O),
        maxVisibleItems: 5,
        options: s,
        onChange: a,
        filter: J,
        "aria-required": !0,
    });
}
function $(e) {
    var t, a, l, i, g, v, q, j, J, $, et, eA;
    let { guildId: er, productId: en, transitionState: ea, onClose: el } = e,
        [ei, eo] = n.useState(en),
        es = (0, d.e7)([y.Z], () => (null == ei ? null : y.Z.getGuildProduct(ei)), [ei]),
        ed = (0, d.e7)([y.Z], () => y.Z.getGuildProductsForGuild(er, { publishedOnly: !0 }).length, [er]),
        ec = (null == es ? void 0 : es.published) === !0,
        { application: eu } = (0, h.Z)(er, L.wW.GUILD_ROLE_SUBSCRIPTIONS),
        eg = N.M["0"],
        ef = x.QK.useSetting(),
        ep = (0, P.n)(),
        em = n.useCallback(() => {
            var e;
            return (null == es || null == (e = es.image_asset) ? void 0 : e.application_id) == null
                ? eg.data
                : (0, O._W)(es.image_asset.application_id, es.image_asset, 600, ep && ef ? void 0 : "webp");
        }, [eg, es, ep, ef]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: eh } = (0, C.gX)(er);
    n.useEffect(() => {
        eh && (el(), (0, W.B)(k.intl.string(k.t.OLf3xs), k.t["90LBVl"]));
    }, [eh, el]);
    let [ev, eq] = n.useState(null != (l = null == es ? void 0 : es.name) ? l : ""),
        [eb, eC] = n.useState(null != (i = null == es ? void 0 : es.description) ? i : ""),
        [ej, ex] = n.useState(null != (g = null == es ? void 0 : es.price_tier) ? g : void 0),
        [eU, eV] = n.useState(em),
        [eO, eP] = n.useState(
            null != (v = null == es || null == (t = es.image_asset) ? void 0 : t.filename) ? v : eg.name,
        ),
        [eF, ey] = n.useState(!1),
        [eI, eN] = n.useState(),
        eT = n.useMemo(() => (null != ej ? (0, V.T4)(ej, R.pKx.USD) : void 0), [ej]),
        [eK, eZ] = n.useState(!0),
        {
            changesSaving: eW,
            saveError: eX,
            saveProductWithAttachments: eQ,
            hasUnsavedAttachmentChanges: ez,
            cancelUnusedUploads: eS,
        } = (0, F.P)(),
        ew = (null == es ? void 0 : es.attachments) != null && (null == es ? void 0 : es.attachments.length) > 0,
        eR = null != eX ? eX : eI,
        eL = null != eW && "published" in eW,
        ek = null != eW && !eL,
        eD = null != (q = null == es ? void 0 : es.role_id) ? q : null,
        [eB, eE] = n.useState(),
        eG = null != eB || null != eD,
        eY = (0, d.e7)([U.Z], () => (null != eD && null !== eB ? U.Z.getRole(er, eD) : null != eB ? eB : void 0), [
            eB,
            eD,
            er,
        ]),
        eH = "";
    eG && eK
        ? (eH = k.intl.string(k.t.ih4QMT))
        : eG
          ? (eH = k.intl.string(k.t.o9xphY))
          : eK && (eH = k.intl.string(k.t.DWYJub));
    let eM = () => {
            eZ(!1), eS();
        },
        [eJ, e_] = n.useState(),
        {
            changes: e$,
            hasUnsavedChanges: e0,
            canSaveForDraft: e1,
            canSaveForPublished: e3,
            canPublishOrUnpublish: e9,
        } = n.useMemo(
            () =>
                (0, I.fG)({
                    guildProductListing: es,
                    name: ev,
                    priceTier: ej,
                    description: eb,
                    image: eU,
                    imageName: eO,
                    isImageChanged: eF,
                    newRoleParams: eB,
                    hasSavedAttachments: ew,
                    hasUnsavedAttachmentChanges: ez,
                }),
            [es, ev, ej, eb, eU, eO, eF, eB, ew, ez],
        ),
        e6 = n.useMemo(
            () =>
                e0 || null == eJ || "publish" === eJ || null != eR
                    ? null
                    : (0, r.jsx)(f.oXn, {
                          className: D.successNotice,
                          children: (0, r.jsx)(m.Z, {
                              message: (0, r.jsxs)("div", {
                                  className: D.successNoticeMessage,
                                  children: [
                                      (0, r.jsx)(f.owK, {
                                          size: "md",
                                          color: s.Z.BUTTON_POSITIVE_BACKGROUND,
                                          secondaryColor: s.Z.WHITE,
                                      }),
                                      (0, r.jsx)(f.Text, {
                                          variant: "text-md/medium",
                                          children:
                                              "draft" === eJ
                                                  ? k.intl.string(k.t["3Rv4MD"])
                                                  : "update_publish" === eJ
                                                    ? k.intl.string(k.t["8fPiBw"])
                                                    : k.intl.string(k.t["3LUFnJ"]),
                                      }),
                                  ],
                              }),
                              onReset: () => e_(void 0),
                              onResetText: k.intl.string(k.t.T6QuWV),
                          }),
                      }),
            [eR, e0, eJ],
        ),
        e7 = n.useCallback(() => {
            e0
                ? (0, Z.Z)({
                      title: k.intl.string(k.t.FVDhIS),
                      body: k.intl.string(k.t.Hgdhwc),
                      cta: k.intl.string(k.t.h0bti4),
                      closeLabel: k.intl.string(k.t["+WYo0t"]),
                      onConfirm: () => {
                          el();
                      },
                  })
                : el();
        }, [el, e0]);
    n.useEffect(() => {
        (0, f.oav)(
            w.Yz,
            (e) =>
                (0, r.jsx)(
                    ee,
                    B(
                        {
                            guildId: er,
                            productId: ei,
                        },
                        e,
                    ),
                ),
            e7,
        );
    }, [er, e7, ei]);
    let e8 = async (e) => {
        let t = (0, I.pM)({ newRoleParams: eB });
        if ((eN(t), null != t)) return;
        let A = await eQ(e);
        if ((ey(!1), null != A)) {
            if ((null != e.name && eq(A.name), null != e.description && eC(A.description), null != eB)) {
                let e = A.role_id;
                o()(null != e, "Cannot update role without role ID"), await p.Z.updateRole(er, e, eB);
            }
            eE(void 0), eo(A.id), "published" in e && !0 === e.published && el();
        }
    };
    n.useEffect(() => {
        if (null != eR) {
            var e;
            (0, X.V)(eR, er, null == eu || null == (e = eu.team) ? void 0 : e.id);
        }
    }, [eR, er, eu]),
        n.useEffect(() => {
            e0 && e_(void 0);
        }, [e0]);
    let e2 = n.useRef(null),
        e5 = !e9 || (!ec && ed >= w.dD);
    return (0, r.jsxs)(f.Y0X, {
        transitionState: ea,
        size: f.CgR.DYNAMIC,
        className: D.modalRoot,
        "aria-labelledby": G,
        parentComponent: "GuildProductEditModal",
        "data-migration-pending": !0,
        children: [
            (0, r.jsxs)(f.xBx, {
                className: D.modalHeader,
                separator: !1,
                "data-migration-pending": !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: D.headerText,
                        children: [
                            (0, r.jsx)(f.X6q, {
                                id: G,
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: k.intl.string(k.t.DnNl1d),
                            }),
                            (0, r.jsx)(f.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: k.intl.string(k.t["Tu7f+f"]),
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.olH, {
                        onClick: e7,
                        className: D.__invalid_modalCloseButton,
                        "data-migration-pending": !0,
                    }),
                ],
            }),
            (0, r.jsxs)(f.hzk, {
                className: D.modalContent,
                scrollbarType: "none",
                "data-migration-pending": !0,
                children: [
                    (0, r.jsx)(f.zJl, {
                        children: (0, r.jsxs)("div", {
                            className: D.productFieldsSection,
                            ref: e2,
                            children: [
                                (0, r.jsx)(f.oil, {
                                    label: k.intl.string(k.t.Hsk7xc),
                                    error: null == eR ? void 0 : eR.getFirstFieldErrorMessage("name"),
                                    value: ev,
                                    onChange: eq,
                                    id: Y,
                                    maxLength: 100,
                                    placeholder: k.intl.string(k.t["/BiYSE"]),
                                    required: !0,
                                }),
                                (0, r.jsx)(b.Z, {
                                    label: k.intl.string(k.t.QdKLyc),
                                    errorMessage:
                                        null != (j = null == eR ? void 0 : eR.getFirstFieldErrorMessage("description"))
                                            ? j
                                            : void 0,
                                    id: H,
                                    className: D.descriptionArea,
                                    value: eb,
                                    onChange: eC,
                                    maxLength: 1500,
                                    placeholder: k.intl.string(k.t.BFwyur),
                                    showCharacterCount: eb.length > 0,
                                    parentModalKey: w.Yz,
                                    required: !0,
                                }),
                                (0, r.jsx)(_, {
                                    label: k.intl.string(k.t["CAY/vr"]),
                                    errorMessage:
                                        null != (J = null == eR ? void 0 : eR.getFirstFieldErrorMessage("price_tier"))
                                            ? J
                                            : void 0,
                                    guildId: er,
                                    selectedPriceTier: ej,
                                    setPriceTier: ex,
                                }),
                                (0, r.jsx)(f.NIc, {
                                    label: k.intl.string(k.t["sqXj6+"]),
                                    errorMessage:
                                        null != ($ = null == eR ? void 0 : eR.getFirstFieldErrorMessage("image"))
                                            ? $
                                            : void 0,
                                    description: k.intl.string(k.t.yOU4Vl),
                                    children: (0, r.jsx)(Q.Z, {
                                        presetImages: N.M,
                                        radioGroupAriaLabel: k.intl.string(k.t.fKzQj4),
                                        image: eU,
                                        imageName: eO,
                                        savedImageName:
                                            null == es || null == (a = es.image_asset) ? void 0 : a.filename,
                                        onChange: (e, t) => {
                                            if (null != e) {
                                                var A;
                                                eV(e),
                                                    eP(t),
                                                    ey(
                                                        e.startsWith("data:") ||
                                                            t !==
                                                                (null == es || null == (A = es.image_asset)
                                                                    ? void 0
                                                                    : A.filename),
                                                    );
                                            }
                                        },
                                    }),
                                }),
                                eK
                                    ? (0, r.jsx)(f.NIc, {
                                          label: k.intl.string(k.t.zLrtkJ),
                                          errorMessage:
                                              null !=
                                              (et = null == eR ? void 0 : eR.getFirstFieldErrorMessage("attachments"))
                                                  ? et
                                                  : void 0,
                                          children: (0, r.jsx)(K.s, {
                                              onFileAdded: () => {
                                                  var e;
                                                  null == (e = e2.current) ||
                                                      e.scrollIntoView({
                                                          behavior: "smooth",
                                                          block: "end",
                                                      });
                                              },
                                          }),
                                      })
                                    : null,
                                eG
                                    ? (0, r.jsx)(S.ZP, {
                                          error:
                                              null != (eA = null == eR ? void 0 : eR.getFirstFieldErrorMessage(I.NB))
                                                  ? eA
                                                  : void 0,
                                          newRoleParams: eB,
                                          setNewRoleParams: eE,
                                          guildId: er,
                                          listingRoleId: eD,
                                          productId: ei,
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, r.jsx)("div", { className: D.horizontalSeparator }),
                    (0, r.jsx)(f.zJl, {
                        children: (0, r.jsxs)("div", {
                            className: D.productPreview,
                            children: [
                                (0, r.jsx)(z.Z, {
                                    disabled: e5,
                                    disabledTooltip: ec
                                        ? k.intl.string(k.t["0NQ00t"])
                                        : ed >= w.dD
                                          ? k.intl.format(k.t.IqWPVl, { maxProducts: w.dD })
                                          : k.intl.string(k.t["Ax89/f"]),
                                    published: ec,
                                    onClick: () => {
                                        o()(e9, "Attempting to publish/unpublish when not allowed"),
                                            e_(ec ? "unpublish" : "publish"),
                                            e8(E(B({}, e$), { published: !ec }));
                                    },
                                    submitting: eL,
                                }),
                                (0, r.jsx)("div", { className: D.verticalSeparator }),
                                (0, r.jsx)(f.X6q, {
                                    variant: "text-xs/bold",
                                    color: "header-secondary",
                                    className: D.previewHeading,
                                    children: k.intl.string(k.t["6I7nQU"]),
                                }),
                                (0, r.jsx)(f.LZC, { size: 4 }),
                                (0, r.jsx)(f.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: k.intl.string(k.t.Oq4dfX),
                                }),
                                (0, r.jsx)(f.LZC, { size: 16 }),
                                (0, r.jsx)(T.Z, {
                                    imageUrl: eU,
                                    name: "" === ev ? k.intl.string(k.t.EmqIws) : ev,
                                    description: "" === eb ? k.intl.string(k.t["11NA2N"]) : eb,
                                    formattedPrice: eT,
                                    role: eY,
                                    productType: eH,
                                    ctaComponent: (0, r.jsx)(u.zxk, { text: k.intl.string(k.t.xUi3BA) }),
                                    cardWidth: 340,
                                    thumbnailHeight: 190,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(f.mzw, {
                "data-migration-pending": !0,
                children: (0, r.jsxs)("div", {
                    className: D.footerActionButtons,
                    children: [
                        (0, r.jsxs)("div", {
                            className: D.footerActionLeftButtons,
                            children: [
                                (0, r.jsx)(M, {
                                    text: k.intl.string(k.t.YzGIVF),
                                    value: eG,
                                    onChange: (e) => {
                                        e ? eE((0, S.YP)()) : eE(void 0);
                                    },
                                    warning: null === eB ? (0, r.jsx)(S.aN, {}) : void 0,
                                    disabled: null != eD,
                                }),
                                (0, r.jsx)(M, {
                                    text: k.intl.string(k.t.C6wP2d),
                                    value: eK,
                                    onChange: (e) => {
                                        e
                                            ? eZ(!0)
                                            : ez
                                              ? (0, f.ZDy)(async () => {
                                                    let { ConfirmModal: e } = await Promise.resolve().then(
                                                        A.bind(A, 481060),
                                                    );
                                                    return (t) =>
                                                        (0, r.jsx)(
                                                            e,
                                                            E(B({}, t), {
                                                                header: k.intl.string(k.t["2Wihyc"]),
                                                                confirmText: k.intl.string(k.t.N86XcH),
                                                                cancelText: k.intl.string(k.t["ETE/oK"]),
                                                                onConfirm: eM,
                                                                children: (0, r.jsx)(f.Text, {
                                                                    variant: "text-md/normal",
                                                                    children: k.intl.string(k.t.ixRBLi),
                                                                }),
                                                            }),
                                                        );
                                                })
                                              : eM();
                                    },
                                    disabled: ew,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: D.footerActionRightButtons,
                            children: ec
                                ? (0, r.jsx)(u.zxk, {
                                      variant: "secondary",
                                      text: k.intl.string(k.t.XYBEaW),
                                      disabled: !e3,
                                      loading: ek,
                                      onClick: () => {
                                          o()(
                                              e3,
                                              "cannot save changes for published product without adding all fields",
                                          ),
                                              e_("update_publish"),
                                              e8(e$);
                                      },
                                  })
                                : (0, r.jsx)(u.zxk, {
                                      variant: "secondary",
                                      text: k.intl.string(k.t.ZCjwoa),
                                      disabled: !e1,
                                      loading: ek,
                                      onClick: () => {
                                          o()(e1, "cannot save changes without name or price tier"),
                                              e_("draft"),
                                              e8(e$);
                                      },
                                  }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(c.W, {
                component: "div",
                className: D.successNoticeContainer,
                children: e6,
            }),
        ],
    });
}
function ee(e) {
    var t;
    return (0, r.jsx)(F.W, {
        guildId: e.guildId,
        editSkuId: null != (t = e.productId) ? t : void 0,
        onFileSizeError: () => (0, j.Z)(w.ve),
        children: (0, r.jsx)($, B({}, e)),
    });
}
