A.d(t, { default: () => _ }), A(388685), A(953529);
var n = A(54381),
    r = A(473749),
    a = A(120356),
    i = A.n(a),
    l = A(512722),
    o = A.n(l),
    s = A(399606),
    d = A(692547),
    u = A(215569),
    c = A(796027),
    g = A(481060),
    f = A(749210),
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
    L = A(179598);
function D(e) {
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
        className: i()(L.benefitToggleContainer, { [L.disabled]: a }),
        htmlFor: o,
        children: [
            (0, n.jsx)(g.Text, {
                variant: "text-sm/medium",
                color: s,
                children: t,
            }),
            null != l &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(g.LZC, {
                            size: 4,
                            horizontal: !0,
                        }),
                        l,
                    ],
                }),
            (0, n.jsx)(g.rsf, {
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
    return (0, n.jsx)(g.VcW, {
        label: i,
        errorMessage: l,
        value: A,
        placeholder: B.intl.string(B.t.aI4J5H),
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
        eo = (0, s.e7)([P.Z], () => (null == ei ? null : P.Z.getGuildProduct(ei)), [ei]),
        es = (0, s.e7)([P.Z], () => P.Z.getGuildProductsForGuild(eA, { publishedOnly: !0 }).length, [eA]),
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
        em && (ea(), (0, T.B)(B.intl.string(B.t.OLf3xn), B.t["90LBVr"]));
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
        eL = null != eZ && !eB,
        eD = null != (b = null == eo ? void 0 : eo.role_id) ? b : null,
        [eR, ek] = r.useState(),
        eE = null != eR || null != eD,
        eG = (0, s.e7)([U.Z], () => (null != eD && null !== eR ? U.Z.getRole(eA, eD) : null != eR ? eR : void 0), [
            eR,
            eD,
            eA,
        ]),
        eY = "";
    eE && eK
        ? (eY = B.intl.string(B.t.ih4QMU))
        : eE
          ? (eY = B.intl.string(B.t.o9xphc))
          : eK && (eY = B.intl.string(B.t.DWYJua));
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
                    : (0, n.jsx)(g.oXn, {
                          className: L.successNotice,
                          children: (0, n.jsx)(c.Z, {
                              message: (0, n.jsxs)("div", {
                                  className: L.successNoticeMessage,
                                  children: [
                                      (0, n.jsx)(g.owK, {
                                          size: "md",
                                          color: d.Z.colors.BUTTON_POSITIVE_BACKGROUND.css,
                                          secondaryColor: d.Z.colors.WHITE.css,
                                      }),
                                      (0, n.jsx)(g.Text, {
                                          variant: "text-md/medium",
                                          children:
                                              "draft" === eM
                                                  ? B.intl.string(B.t["3Rv4MB"])
                                                  : "update_publish" === eM
                                                    ? B.intl.string(B.t["8fPiB3"])
                                                    : B.intl.string(B.t["3LUFnI"]),
                                      }),
                                  ],
                              }),
                              onReset: () => eJ(void 0),
                              onResetText: B.intl.string(B.t.T6QuWe),
                          }),
                      }),
            [ew, e$, eM],
        ),
        e6 = r.useCallback(() => {
            e$
                ? (0, K.Z)({
                      title: B.intl.string(B.t.FVDhIW),
                      body: B.intl.string(B.t.Hgdhwb),
                      cta: B.intl.string(B.t["h0bti/"]),
                      closeLabel: B.intl.string(B.t["+WYo0m"]),
                      onConfirm: () => {
                          ea();
                      },
                  })
                : ea();
        }, [ea, e$]);
    r.useEffect(() => {
        (0, g.oav)(
            S.Yz,
            (e) =>
                (0, n.jsx)(
                    _,
                    D(
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
    let e7 = async (e) => {
        let t = (0, F.pM)({ newRoleParams: eR });
        if ((eI(t), null != t)) return;
        let A = await eX(e);
        if ((eF(!1), null != A)) {
            if ((null != e.name && ev(A.name), null != e.description && eb(A.description), null != eR)) {
                let e = A.role_id;
                o()(null != e, "Cannot update role without role ID"), await f.Z.updateRole(eA, e, eR);
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
    let e2 = r.useRef(null),
        e8 = !e3 || (!ed && es >= S.dD);
    return (0, n.jsxs)(g.Y0X, {
        transitionState: er,
        size: g.CgR.DYNAMIC,
        className: L.modalRoot,
        "aria-labelledby": k,
        parentComponent: "GuildProductEditModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsxs)(g.xBx, {
                className: L.modalHeader,
                separator: !1,
                "data-migration-pending": !0,
                children: [
                    (0, n.jsxs)("div", {
                        className: L.headerText,
                        children: [
                            (0, n.jsx)(g.Heading, {
                                id: k,
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: B.intl.string(B.t.DnNl1T),
                            }),
                            (0, n.jsx)(g.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: B.intl.string(B.t["Tu7f+f"]),
                            }),
                        ],
                    }),
                    (0, n.jsx)(g.olH, {
                        onClick: e6,
                        className: L.__invalid_modalCloseButton,
                        "data-migration-pending": !0,
                    }),
                ],
            }),
            (0, n.jsxs)(g.hzk, {
                className: L.modalContent,
                scrollbarType: "none",
                "data-migration-pending": !0,
                children: [
                    (0, n.jsx)(g.zJl, {
                        children: (0, n.jsxs)("div", {
                            className: L.productFieldsSection,
                            ref: e2,
                            children: [
                                (0, n.jsx)(g.oil, {
                                    label: B.intl.string(B.t.Hsk7xT),
                                    error: null == ew ? void 0 : ew.getFirstFieldErrorMessage("name"),
                                    value: eh,
                                    onChange: ev,
                                    id: E,
                                    maxLength: 100,
                                    placeholder: B.intl.string(B.t["/BiYSO"]),
                                    required: !0,
                                }),
                                (0, n.jsx)(v.Z, {
                                    label: B.intl.string(B.t.QdKLyW),
                                    errorMessage:
                                        null != (H = null == ew ? void 0 : ew.getFirstFieldErrorMessage("description"))
                                            ? H
                                            : void 0,
                                    id: G,
                                    className: L.descriptionArea,
                                    value: eq,
                                    onChange: eb,
                                    maxLength: 1500,
                                    placeholder: B.intl.string(B.t.BFwyum),
                                    showCharacterCount: eq.length > 0,
                                    parentModalKey: S.Yz,
                                    required: !0,
                                }),
                                (0, n.jsx)(M, {
                                    label: B.intl.string(B.t["CAY/vh"]),
                                    errorMessage:
                                        null != (J = null == ew ? void 0 : ew.getFirstFieldErrorMessage("price_tier"))
                                            ? J
                                            : void 0,
                                    guildId: eA,
                                    selectedPriceTier: eC,
                                    setPriceTier: eU,
                                }),
                                (0, n.jsx)(g.gNt, {
                                    label: B.intl.string(B.t.sqXj60),
                                    errorMessage:
                                        null != ($ = null == ew ? void 0 : ew.getFirstFieldErrorMessage("image"))
                                            ? $
                                            : void 0,
                                    description: B.intl.string(B.t.yOU4Vm),
                                    children: (0, n.jsx)(W.Z, {
                                        presetImages: y.M,
                                        radioGroupAriaLabel: B.intl.string(B.t.fKzQj0),
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
                                    ? (0, n.jsx)(g.gNt, {
                                          label: B.intl.string(B.t.zLrtkN),
                                          errorMessage:
                                              null !=
                                              (ee = null == ew ? void 0 : ew.getFirstFieldErrorMessage("attachments"))
                                                  ? ee
                                                  : void 0,
                                          children: (0, n.jsx)(N.s, {
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
                                eE
                                    ? (0, n.jsx)(Q.ZP, {
                                          error:
                                              null != (et = null == ew ? void 0 : ew.getFirstFieldErrorMessage(F.NB))
                                                  ? et
                                                  : void 0,
                                          newRoleParams: eR,
                                          setNewRoleParams: ek,
                                          guildId: eA,
                                          listingRoleId: eD,
                                          productId: ei,
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, n.jsx)("div", { className: L.horizontalSeparator }),
                    (0, n.jsx)(g.zJl, {
                        children: (0, n.jsxs)("div", {
                            className: L.productPreview,
                            children: [
                                (0, n.jsx)(X.Z, {
                                    disabled: e8,
                                    disabledTooltip: ed
                                        ? B.intl.string(B.t["0NQ00t"])
                                        : es >= S.dD
                                          ? B.intl.format(B.t.IqWPVt, { maxProducts: S.dD })
                                          : B.intl.string(B.t["Ax89/c"]),
                                    published: ed,
                                    onClick: () => {
                                        o()(e3, "Attempting to publish/unpublish when not allowed"),
                                            eJ(ed ? "unpublish" : "publish"),
                                            e7(R(D({}, e_), { published: !ed }));
                                    },
                                    submitting: eB,
                                }),
                                (0, n.jsx)("div", { className: L.verticalSeparator }),
                                (0, n.jsx)(g.Heading, {
                                    variant: "text-xs/bold",
                                    color: "header-secondary",
                                    className: L.previewHeading,
                                    children: B.intl.string(B.t["6I7nQT"]),
                                }),
                                (0, n.jsx)(g.LZC, { size: 4 }),
                                (0, n.jsx)(g.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: B.intl.string(B.t.Oq4dfU),
                                }),
                                (0, n.jsx)(g.LZC, { size: 16 }),
                                (0, n.jsx)(I.Z, {
                                    imageUrl: ej,
                                    name: "" === eh ? B.intl.string(B.t.EmqIwl) : eh,
                                    description: "" === eq ? B.intl.string(B.t["11NA2L"]) : eq,
                                    formattedPrice: eN,
                                    role: eG,
                                    productType: eY,
                                    ctaComponent: (0, n.jsx)(g.Button, { text: B.intl.string(B.t.xUi3BL) }),
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
                    className: L.footerActionButtons,
                    children: [
                        (0, n.jsxs)("div", {
                            className: L.footerActionLeftButtons,
                            children: [
                                (0, n.jsx)(Y, {
                                    text: B.intl.string(B.t.YzGIVF),
                                    value: eE,
                                    onChange: (e) => {
                                        e ? ek((0, Q.YP)()) : ek(void 0);
                                    },
                                    warning: null === eR ? (0, n.jsx)(Q.aN, {}) : void 0,
                                    disabled: null != eD,
                                }),
                                (0, n.jsx)(Y, {
                                    text: B.intl.string(B.t.C6wP2Q),
                                    value: eK,
                                    onChange: (e) => {
                                        e
                                            ? eT(!0)
                                            : eQ
                                              ? (0, g.ZDy)(async () => {
                                                    let { ConfirmModal: e } = await Promise.resolve().then(
                                                        A.bind(A, 481060),
                                                    );
                                                    return (t) =>
                                                        (0, n.jsx)(
                                                            e,
                                                            R(D({}, t), {
                                                                header: B.intl.string(B.t["2WihyY"]),
                                                                confirmText: B.intl.string(B.t.N86XcP),
                                                                cancelText: B.intl.string(B.t["ETE/oC"]),
                                                                onConfirm: eH,
                                                                children: (0, n.jsx)(g.Text, {
                                                                    variant: "text-md/normal",
                                                                    children: B.intl.string(B.t.ixRBLh),
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
                            className: L.footerActionRightButtons,
                            children: ed
                                ? (0, n.jsx)(g.Button, {
                                      variant: "secondary",
                                      text: B.intl.string(B.t.XYBEaV),
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
                                : (0, n.jsx)(g.Button, {
                                      variant: "secondary",
                                      text: B.intl.string(B.t.ZCjwob),
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
            (0, n.jsx)(u.W, {
                component: "div",
                className: L.successNoticeContainer,
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
        children: (0, n.jsx)(J, D({}, e)),
    });
}
