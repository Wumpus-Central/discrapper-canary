A.d(t, { default: () => $ }), A(388685), A(953529);
var n = A(54381),
    r = A(473749),
    a = A(120356),
    l = A.n(a),
    i = A(512722),
    o = A.n(i),
    s = A(399606),
    d = A(692547),
    c = A(215569),
    u = A(796027),
    f = A(668339),
    g = A(248514),
    p = A(481060),
    m = A(749210),
    v = A(725803),
    h = A(313201),
    q = A(76535),
    b = A(215388),
    C = A(674180),
    U = A(884858),
    j = A(695346),
    V = A(485386),
    x = A(937615),
    O = A(73346),
    P = A(506071),
    F = A(587123),
    y = A(240864),
    N = A(863663),
    I = A(923400),
    K = A(623488),
    T = A(152980),
    Z = A(120651),
    W = A(871388),
    X = A(412110),
    Q = A(513669),
    S = A(972797),
    z = A(943516),
    w = A(302463),
    L = A(981631),
    B = A(674563),
    D = A(388032),
    R = A(342762);
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
let E = (0, h.hQ)(),
    G = (0, h.hQ)(),
    Y = (0, h.hQ)();
function H(e) {
    let { text: t, onChange: A, value: r, disabled: a, warning: i } = e,
        o = (0, h.Dt)(),
        s = a ? "text-muted" : "text-default";
    return (0, n.jsxs)("label", {
        className: l()(R.benefitToggleContainer, { [R.disabled]: a }),
        htmlFor: o,
        children: [
            (0, n.jsx)(p.Text, {
                variant: "text-sm/medium",
                color: s,
                children: t,
            }),
            null != i &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(p.LZC, {
                            size: 4,
                            horizontal: !0,
                        }),
                        i,
                    ],
                }),
            (0, n.jsx)(p.rsf, {
                onChange: A,
                checked: r,
                disabled: a,
                id: o,
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
    let { guildId: t, selectedPriceTier: A, setPriceTier: a, label: l, errorMessage: i } = e,
        { priceTiers: o } = (0, q.R)(t, L.RG5.GUILD_PRODUCTS),
        s = r.useMemo(
            () =>
                (null != o ? o : null != A ? [A] : []).map((e) => ({
                    value: e,
                    label: (0, x.T4)(e, L.pKx.USD),
                })),
            [o, A],
        );
    return (0, n.jsx)(f.d, {
        label: l,
        errorMessage: i,
        value: A,
        placeholder: D.intl.string(D.t.aI4J5H),
        maxVisibleItems: 5,
        options: s,
        onChange: a,
        filter: M,
        "aria-required": !0,
    });
}
function _(e) {
    var t, A, a, l, i, f, h, q, U, M, _, ee;
    let { guildId: et, productId: eA, transitionState: en, onClose: er } = e,
        [ea, el] = r.useState(eA),
        ei = (0, s.e7)([y.Z], () => (null == ea ? null : y.Z.getGuildProduct(ea)), [ea]),
        eo = (0, s.e7)([y.Z], () => y.Z.getGuildProductsForGuild(et, { publishedOnly: !0 }).length, [et]),
        es = (null == ei ? void 0 : ei.published) === !0,
        { application: ed } = (0, v.Z)(et, B.wW.GUILD_ROLE_SUBSCRIPTIONS),
        ec = I.M["0"],
        eu = j.QK.useSetting(),
        ef = (0, P.n)(),
        eg = r.useCallback(() => {
            var e;
            return (null == ei || null == (e = ei.image_asset) ? void 0 : e.application_id) == null
                ? ec.data
                : (0, O._W)(ei.image_asset.application_id, ei.image_asset, 600, ef && eu ? void 0 : "webp");
        }, [ec, ei, ef, eu]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: ep } = (0, C.gX)(et);
    r.useEffect(() => {
        ep && (er(), (0, W.B)(D.intl.string(D.t.OLf3xn), D.t["90LBVr"]));
    }, [ep, er]);
    let [em, ev] = r.useState(null != (a = null == ei ? void 0 : ei.name) ? a : ""),
        [eh, eq] = r.useState(null != (l = null == ei ? void 0 : ei.description) ? l : ""),
        [eb, eC] = r.useState(null != (i = null == ei ? void 0 : ei.price_tier) ? i : void 0),
        [eU, ej] = r.useState(eg),
        [eV, ex] = r.useState(
            null != (f = null == ei || null == (t = ei.image_asset) ? void 0 : t.filename) ? f : ec.name,
        ),
        [eO, eP] = r.useState(!1),
        [eF, ey] = r.useState(),
        eN = r.useMemo(() => (null != eb ? (0, x.T4)(eb, L.pKx.USD) : void 0), [eb]),
        [eI, eK] = r.useState(!0),
        {
            changesSaving: eT,
            saveError: eZ,
            saveProductWithAttachments: eW,
            hasUnsavedAttachmentChanges: eX,
            cancelUnusedUploads: eQ,
        } = (0, F.P)(),
        eS = (null == ei ? void 0 : ei.attachments) != null && (null == ei ? void 0 : ei.attachments.length) > 0,
        ez = null != eZ ? eZ : eF,
        ew = null != eT && "published" in eT,
        eL = null != eT && !ew,
        eB = null != (h = null == ei ? void 0 : ei.role_id) ? h : null,
        [eD, eR] = r.useState(),
        ek = null != eD || null != eB,
        eE = (0, s.e7)([V.Z], () => (null != eB && null !== eD ? V.Z.getRole(et, eB) : null != eD ? eD : void 0), [
            eD,
            eB,
            et,
        ]),
        eG = "";
    ek && eI
        ? (eG = D.intl.string(D.t.ih4QMU))
        : ek
          ? (eG = D.intl.string(D.t.o9xphc))
          : eI && (eG = D.intl.string(D.t.DWYJua));
    let eY = () => {
            eK(!1), eQ();
        },
        [eH, eM] = r.useState(),
        {
            changes: eJ,
            hasUnsavedChanges: e_,
            canSaveForDraft: e$,
            canSaveForPublished: e0,
            canPublishOrUnpublish: e1,
        } = r.useMemo(
            () =>
                (0, N.fG)({
                    guildProductListing: ei,
                    name: em,
                    priceTier: eb,
                    description: eh,
                    image: eU,
                    imageName: eV,
                    isImageChanged: eO,
                    newRoleParams: eD,
                    hasSavedAttachments: eS,
                    hasUnsavedAttachmentChanges: eX,
                }),
            [ei, em, eb, eh, eU, eV, eO, eD, eS, eX],
        ),
        e3 = r.useMemo(
            () =>
                e_ || null == eH || "publish" === eH || null != ez
                    ? null
                    : (0, n.jsx)(p.oXn, {
                          className: R.successNotice,
                          children: (0, n.jsx)(u.Z, {
                              message: (0, n.jsxs)("div", {
                                  className: R.successNoticeMessage,
                                  children: [
                                      (0, n.jsx)(p.owK, {
                                          size: "md",
                                          color: d.Z.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT.css,
                                          secondaryColor: d.Z.colors.WHITE.css,
                                      }),
                                      (0, n.jsx)(p.Text, {
                                          variant: "text-md/medium",
                                          children:
                                              "draft" === eH
                                                  ? D.intl.string(D.t["3Rv4MB"])
                                                  : "update_publish" === eH
                                                    ? D.intl.string(D.t["8fPiB3"])
                                                    : D.intl.string(D.t["3LUFnI"]),
                                      }),
                                  ],
                              }),
                              onReset: () => eM(void 0),
                              onResetText: D.intl.string(D.t.T6QuWe),
                          }),
                      }),
            [ez, e_, eH],
        ),
        e9 = r.useCallback(() => {
            e_
                ? (0, Z.Z)({
                      title: D.intl.string(D.t.FVDhIW),
                      body: D.intl.string(D.t.Hgdhwb),
                      cta: D.intl.string(D.t["h0bti/"]),
                      closeLabel: D.intl.string(D.t["+WYo0m"]),
                      onConfirm: () => {
                          er();
                      },
                  })
                : er();
        }, [er, e_]);
    r.useEffect(() => {
        (0, p.oav)(
            w.Yz,
            (e) =>
                (0, n.jsx)(
                    $,
                    k(
                        {
                            guildId: et,
                            productId: ea,
                        },
                        e,
                    ),
                ),
            e9,
        );
    }, [et, e9, ea]);
    let e6 = async (e) => {
        let t = (0, N.pM)({ newRoleParams: eD });
        if ((ey(t), null != t)) return;
        let A = await eW(e);
        if ((eP(!1), null != A)) {
            if ((null != e.name && ev(A.name), null != e.description && eq(A.description), null != eD)) {
                let e = A.role_id;
                o()(null != e, "Cannot update role without role ID"), await m.Z.updateRole(et, e, eD);
            }
            eR(void 0), el(A.id), "published" in e && !0 === e.published && er();
        }
    };
    r.useEffect(() => {
        if (null != ez) {
            var e;
            (0, X.V)(ez, et, null == ed || null == (e = ed.team) ? void 0 : e.id);
        }
    }, [ez, et, ed]),
        r.useEffect(() => {
            e_ && eM(void 0);
        }, [e_]);
    let e8 = r.useRef(null),
        e7 = !e1 || (!es && eo >= w.dD);
    return (0, n.jsxs)(p.Y0X, {
        transitionState: en,
        size: p.CgR.DYNAMIC,
        className: R.modalRoot,
        "aria-labelledby": E,
        parentComponent: "GuildProductEditModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsxs)(p.xBx, {
                className: R.modalHeader,
                separator: !1,
                "data-migration-pending": !0,
                children: [
                    (0, n.jsxs)("div", {
                        className: R.headerText,
                        children: [
                            (0, n.jsx)(p.Heading, {
                                id: E,
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: D.intl.string(D.t.DnNl1T),
                            }),
                            (0, n.jsx)(p.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: D.intl.string(D.t["Tu7f+f"]),
                            }),
                        ],
                    }),
                    (0, n.jsx)(p.olH, {
                        onClick: e9,
                        className: R.__invalid_modalCloseButton,
                        "data-migration-pending": !0,
                    }),
                ],
            }),
            (0, n.jsxs)(p.hzk, {
                className: R.modalContent,
                scrollbarType: "none",
                "data-migration-pending": !0,
                children: [
                    (0, n.jsx)(p.zJl, {
                        children: (0, n.jsxs)("div", {
                            className: R.productFieldsSection,
                            ref: e8,
                            children: [
                                (0, n.jsx)(p.oil, {
                                    label: D.intl.string(D.t.Hsk7xT),
                                    error: null == ez ? void 0 : ez.getFirstFieldErrorMessage("name"),
                                    value: em,
                                    onChange: ev,
                                    id: G,
                                    maxLength: 100,
                                    placeholder: D.intl.string(D.t["/BiYSO"]),
                                    required: !0,
                                }),
                                (0, n.jsx)(b.Z, {
                                    label: D.intl.string(D.t.QdKLyW),
                                    errorMessage:
                                        null != (q = null == ez ? void 0 : ez.getFirstFieldErrorMessage("description"))
                                            ? q
                                            : void 0,
                                    id: Y,
                                    className: R.descriptionArea,
                                    value: eh,
                                    onChange: eq,
                                    maxLength: 1500,
                                    placeholder: D.intl.string(D.t.BFwyum),
                                    showCharacterCount: eh.length > 0,
                                    parentModalKey: w.Yz,
                                    required: !0,
                                }),
                                (0, n.jsx)(J, {
                                    label: D.intl.string(D.t["CAY/vh"]),
                                    errorMessage:
                                        null != (U = null == ez ? void 0 : ez.getFirstFieldErrorMessage("price_tier"))
                                            ? U
                                            : void 0,
                                    guildId: et,
                                    selectedPriceTier: eb,
                                    setPriceTier: eC,
                                }),
                                (0, n.jsx)(p.gNt, {
                                    label: D.intl.string(D.t.sqXj60),
                                    errorMessage:
                                        null != (M = null == ez ? void 0 : ez.getFirstFieldErrorMessage("image"))
                                            ? M
                                            : void 0,
                                    description: D.intl.string(D.t.yOU4Vm),
                                    children: (0, n.jsx)(Q.Z, {
                                        presetImages: I.M,
                                        radioGroupAriaLabel: D.intl.string(D.t.fKzQj0),
                                        image: eU,
                                        imageName: eV,
                                        savedImageName:
                                            null == ei || null == (A = ei.image_asset) ? void 0 : A.filename,
                                        onChange: (e, t) => {
                                            if (null != e) {
                                                var A;
                                                ej(e),
                                                    ex(t),
                                                    eP(
                                                        e.startsWith("data:") ||
                                                            t !==
                                                                (null == ei || null == (A = ei.image_asset)
                                                                    ? void 0
                                                                    : A.filename),
                                                    );
                                            }
                                        },
                                    }),
                                }),
                                eI
                                    ? (0, n.jsx)(p.gNt, {
                                          label: D.intl.string(D.t.zLrtkN),
                                          errorMessage:
                                              null !=
                                              (_ = null == ez ? void 0 : ez.getFirstFieldErrorMessage("attachments"))
                                                  ? _
                                                  : void 0,
                                          children: (0, n.jsx)(T.s, {
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
                                ek
                                    ? (0, n.jsx)(z.ZP, {
                                          error:
                                              null != (ee = null == ez ? void 0 : ez.getFirstFieldErrorMessage(N.NB))
                                                  ? ee
                                                  : void 0,
                                          newRoleParams: eD,
                                          setNewRoleParams: eR,
                                          guildId: et,
                                          listingRoleId: eB,
                                          productId: ea,
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, n.jsx)("div", { className: R.horizontalSeparator }),
                    (0, n.jsx)(p.zJl, {
                        children: (0, n.jsxs)("div", {
                            className: R.productPreview,
                            children: [
                                (0, n.jsx)(S.Z, {
                                    disabled: e7,
                                    disabledTooltip: es
                                        ? D.intl.string(D.t["0NQ00t"])
                                        : eo >= w.dD
                                          ? D.intl.format(D.t.IqWPVt, { maxProducts: w.dD })
                                          : D.intl.string(D.t["Ax89/c"]),
                                    published: es,
                                    onClick: () => {
                                        var e, t;
                                        o()(e1, "Attempting to publish/unpublish when not allowed"),
                                            eM(es ? "unpublish" : "publish"),
                                            e6(
                                                ((e = k({}, eJ)),
                                                (t = t = { published: !es }),
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
                                                          Object.defineProperty(
                                                              e,
                                                              A,
                                                              Object.getOwnPropertyDescriptor(t, A),
                                                          );
                                                      }),
                                                e),
                                            );
                                    },
                                    submitting: ew,
                                }),
                                (0, n.jsx)("div", { className: R.verticalSeparator }),
                                (0, n.jsx)(p.Heading, {
                                    variant: "text-xs/bold",
                                    color: "text-default",
                                    className: R.previewHeading,
                                    children: D.intl.string(D.t["6I7nQT"]),
                                }),
                                (0, n.jsx)(p.LZC, { size: 4 }),
                                (0, n.jsx)(p.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: D.intl.string(D.t.Oq4dfU),
                                }),
                                (0, n.jsx)(p.LZC, { size: 16 }),
                                (0, n.jsx)(K.Z, {
                                    imageUrl: eU,
                                    name: "" === em ? D.intl.string(D.t.EmqIwl) : em,
                                    description: "" === eh ? D.intl.string(D.t["11NA2L"]) : eh,
                                    formattedPrice: eN,
                                    role: eE,
                                    productType: eG,
                                    ctaComponent: (0, n.jsx)(p.Button, { text: D.intl.string(D.t.xUi3BL) }),
                                    cardWidth: 340,
                                    thumbnailHeight: 190,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(p.mzw, {
                "data-migration-pending": !0,
                children: (0, n.jsxs)("div", {
                    className: R.footerActionButtons,
                    children: [
                        (0, n.jsxs)("div", {
                            className: R.footerActionLeftButtons,
                            children: [
                                (0, n.jsx)(H, {
                                    text: D.intl.string(D.t.YzGIVF),
                                    value: ek,
                                    onChange: (e) => {
                                        e ? eR((0, z.YP)()) : eR(void 0);
                                    },
                                    warning: null === eD ? (0, n.jsx)(z.aN, {}) : void 0,
                                    disabled: null != eB,
                                }),
                                (0, n.jsx)(H, {
                                    text: D.intl.string(D.t.C6wP2Q),
                                    value: eI,
                                    onChange: (e) => {
                                        e
                                            ? eK(!0)
                                            : eX
                                              ? (0, g.Z)({
                                                    title: D.intl.string(D.t["2WihyY"]),
                                                    subtitle: D.intl.string(D.t.ixRBLh),
                                                    confirmText: D.intl.string(D.t.N86XcP),
                                                    onConfirm: eY,
                                                })
                                              : eY();
                                    },
                                    disabled: eS,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: R.footerActionRightButtons,
                            children: es
                                ? (0, n.jsx)(p.Button, {
                                      variant: "secondary",
                                      text: D.intl.string(D.t.XYBEaV),
                                      disabled: !e0,
                                      loading: eL,
                                      onClick: () => {
                                          o()(
                                              e0,
                                              "cannot save changes for published product without adding all fields",
                                          ),
                                              eM("update_publish"),
                                              e6(eJ);
                                      },
                                  })
                                : (0, n.jsx)(p.Button, {
                                      variant: "secondary",
                                      text: D.intl.string(D.t.ZCjwob),
                                      disabled: !e$,
                                      loading: eL,
                                      onClick: () => {
                                          o()(e$, "cannot save changes without name or price tier"),
                                              eM("draft"),
                                              e6(eJ);
                                      },
                                  }),
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(c.W, {
                component: "div",
                className: R.successNoticeContainer,
                children: e3,
            }),
        ],
    });
}
function $(e) {
    var t;
    return (0, n.jsx)(F.W, {
        guildId: e.guildId,
        editSkuId: null != (t = e.productId) ? t : void 0,
        onFileSizeError: () => (0, U.Z)(w.ve),
        children: (0, n.jsx)(_, k({}, e)),
    });
}
