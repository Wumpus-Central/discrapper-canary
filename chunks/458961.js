A.d(t, { default: () => _ }), A(388685), A(953529);
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
    f = A(248514),
    g = A(481060),
    p = A(749210),
    m = A(725803),
    v = A(313201),
    h = A(76535),
    q = A(215388),
    b = A(674180),
    C = A(884858),
    U = A(695346),
    j = A(485386),
    V = A(937615),
    x = A(73346),
    O = A(506071),
    P = A(587123),
    F = A(240864),
    y = A(863663),
    N = A(923400),
    I = A(623488),
    K = A(152980),
    T = A(120651),
    Z = A(871388),
    W = A(412110),
    X = A(513669),
    Q = A(972797),
    S = A(943516),
    z = A(302463),
    w = A(981631),
    L = A(674563),
    B = A(388032),
    D = A(342762);
function R(e) {
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
let k = (0, v.hQ)(),
    E = (0, v.hQ)(),
    G = (0, v.hQ)();
function Y(e) {
    let { text: t, onChange: A, value: r, disabled: a, warning: i } = e,
        o = (0, v.Dt)(),
        s = a ? "text-muted" : "text-default";
    return (0, n.jsxs)("label", {
        className: l()(D.benefitToggleContainer, { [D.disabled]: a }),
        htmlFor: o,
        children: [
            (0, n.jsx)(g.Text, {
                variant: "text-sm/medium",
                color: s,
                children: t,
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
    let { guildId: t, selectedPriceTier: A, setPriceTier: a, label: l, errorMessage: i } = e,
        { priceTiers: o } = (0, h.R)(t, w.RG5.GUILD_PRODUCTS),
        s = r.useMemo(
            () =>
                (null != o ? o : null != A ? [A] : []).map((e) => ({
                    id: e.toString(),
                    value: e,
                    label: (0, V.T4)(e, w.pKx.USD),
                })),
            [o, A],
        );
    return (0, n.jsx)(g.VcW, {
        selectionMode: "single",
        label: l,
        errorMessage: i,
        value: A,
        placeholder: B.intl.string(B.t.aI4J5H),
        maxOptionsVisible: 5,
        options: s,
        onSelectionChange: a,
        customMatchSorter: H,
        required: !0,
    });
}
function J(e) {
    var t, A, a, l, i, v, h, C, H, J, $, ee;
    let { guildId: et, productId: eA, transitionState: en, onClose: er } = e,
        [ea, el] = r.useState(eA),
        ei = (0, s.e7)([F.Z], () => (null == ea ? null : F.Z.getGuildProduct(ea)), [ea]),
        eo = (0, s.e7)([F.Z], () => F.Z.getGuildProductsForGuild(et, { publishedOnly: !0 }).length, [et]),
        es = (null == ei ? void 0 : ei.published) === !0,
        { application: ed } = (0, m.Z)(et, L.wW.GUILD_ROLE_SUBSCRIPTIONS),
        ec = N.M["0"],
        eu = U.QK.useSetting(),
        ef = (0, O.n)(),
        eg = r.useCallback(() => {
            var e;
            return (null == ei || null == (e = ei.image_asset) ? void 0 : e.application_id) == null
                ? ec.data
                : (0, x._W)(ei.image_asset.application_id, ei.image_asset, 600, ef && eu ? void 0 : "webp");
        }, [ec, ei, ef, eu]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: ep } = (0, b.gX)(et);
    r.useEffect(() => {
        ep && (er(), (0, Z.B)(B.intl.string(B.t.OLf3xn), B.t["90LBVr"]));
    }, [ep, er]);
    let [em, ev] = r.useState(null != (a = null == ei ? void 0 : ei.name) ? a : ""),
        [eh, eq] = r.useState(null != (l = null == ei ? void 0 : ei.description) ? l : ""),
        [eb, eC] = r.useState(null != (i = null == ei ? void 0 : ei.price_tier) ? i : void 0),
        [eU, ej] = r.useState(eg),
        [eV, ex] = r.useState(
            null != (v = null == ei || null == (t = ei.image_asset) ? void 0 : t.filename) ? v : ec.name,
        ),
        [eO, eP] = r.useState(!1),
        [eF, ey] = r.useState(),
        eN = r.useMemo(() => (null != eb ? (0, V.T4)(eb, w.pKx.USD) : void 0), [eb]),
        [eI, eK] = r.useState(!0),
        {
            changesSaving: eT,
            saveError: eZ,
            saveProductWithAttachments: eW,
            hasUnsavedAttachmentChanges: eX,
            cancelUnusedUploads: eQ,
        } = (0, P.P)(),
        eS = (null == ei ? void 0 : ei.attachments) != null && (null == ei ? void 0 : ei.attachments.length) > 0,
        ez = null != eZ ? eZ : eF,
        ew = null != eT && "published" in eT,
        eL = null != eT && !ew,
        eB = null != (h = null == ei ? void 0 : ei.role_id) ? h : null,
        [eD, eR] = r.useState(),
        ek = null != eD || null != eB,
        eE = (0, s.e7)([j.Z], () => (null != eB && null !== eD ? j.Z.getRole(et, eB) : null != eD ? eD : void 0), [
            eD,
            eB,
            et,
        ]),
        eG = "";
    ek && eI
        ? (eG = B.intl.string(B.t.ih4QMU))
        : ek
          ? (eG = B.intl.string(B.t.o9xphc))
          : eI && (eG = B.intl.string(B.t.DWYJua));
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
                (0, y.fG)({
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
                    : (0, n.jsx)(g.oXn, {
                          className: D.successNotice,
                          children: (0, n.jsx)(u.Z, {
                              message: (0, n.jsxs)("div", {
                                  className: D.successNoticeMessage,
                                  children: [
                                      (0, n.jsx)(g.owK, {
                                          size: "md",
                                          color: d.Z.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT.css,
                                          secondaryColor: d.Z.colors.WHITE.css,
                                      }),
                                      (0, n.jsx)(g.Text, {
                                          variant: "text-md/medium",
                                          children:
                                              "draft" === eH
                                                  ? B.intl.string(B.t["3Rv4MB"])
                                                  : "update_publish" === eH
                                                    ? B.intl.string(B.t["8fPiB3"])
                                                    : B.intl.string(B.t["3LUFnI"]),
                                      }),
                                  ],
                              }),
                              onReset: () => eM(void 0),
                              onResetText: B.intl.string(B.t.T6QuWe),
                          }),
                      }),
            [ez, e_, eH],
        ),
        e9 = r.useCallback(() => {
            e_
                ? (0, T.Z)({
                      title: B.intl.string(B.t.FVDhIW),
                      body: B.intl.string(B.t.Hgdhwb),
                      cta: B.intl.string(B.t["h0bti/"]),
                      closeLabel: B.intl.string(B.t["+WYo0m"]),
                      onConfirm: () => {
                          er();
                      },
                  })
                : er();
        }, [er, e_]);
    r.useEffect(() => {
        (0, g.oav)(
            z.Yz,
            (e) =>
                (0, n.jsx)(
                    _,
                    R(
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
        let t = (0, y.pM)({ newRoleParams: eD });
        if ((ey(t), null != t)) return;
        let A = await eW(e);
        if ((eP(!1), null != A)) {
            if ((null != e.name && ev(A.name), null != e.description && eq(A.description), null != eD)) {
                let e = A.role_id;
                o()(null != e, "Cannot update role without role ID"), await p.Z.updateRole(et, e, eD);
            }
            eR(void 0), el(A.id), "published" in e && !0 === e.published && er();
        }
    };
    r.useEffect(() => {
        if (null != ez) {
            var e;
            (0, W.V)(ez, et, null == ed || null == (e = ed.team) ? void 0 : e.id);
        }
    }, [ez, et, ed]),
        r.useEffect(() => {
            e_ && eM(void 0);
        }, [e_]);
    let e8 = r.useRef(null),
        e7 = !e1 || (!es && eo >= z.dD);
    return (0, n.jsxs)(g.Y0X, {
        transitionState: en,
        size: g.CgR.DYNAMIC,
        className: D.modalRoot,
        "aria-labelledby": k,
        parentComponent: "GuildProductEditModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsxs)(g.xBx, {
                className: D.modalHeader,
                separator: !1,
                "data-migration-pending": !0,
                children: [
                    (0, n.jsxs)("div", {
                        className: D.headerText,
                        children: [
                            (0, n.jsx)(g.Heading, {
                                id: k,
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: B.intl.string(B.t.DnNl1T),
                            }),
                            (0, n.jsx)(g.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: B.intl.string(B.t["Tu7f+f"]),
                            }),
                        ],
                    }),
                    (0, n.jsx)(g.olH, {
                        onClick: e9,
                        className: D.__invalid_modalCloseButton,
                        "data-migration-pending": !0,
                    }),
                ],
            }),
            (0, n.jsxs)(g.hzk, {
                className: D.modalContent,
                scrollbarType: "none",
                "data-migration-pending": !0,
                children: [
                    (0, n.jsx)(g.zJl, {
                        children: (0, n.jsxs)("div", {
                            className: D.productFieldsSection,
                            ref: e8,
                            children: [
                                (0, n.jsx)(g.oil, {
                                    label: B.intl.string(B.t.Hsk7xT),
                                    error: null == ez ? void 0 : ez.getFirstFieldErrorMessage("name"),
                                    value: em,
                                    onChange: ev,
                                    id: E,
                                    maxLength: 100,
                                    placeholder: B.intl.string(B.t["/BiYSO"]),
                                    required: !0,
                                }),
                                (0, n.jsx)(q.Z, {
                                    label: B.intl.string(B.t.QdKLyW),
                                    errorMessage:
                                        null != (C = null == ez ? void 0 : ez.getFirstFieldErrorMessage("description"))
                                            ? C
                                            : void 0,
                                    id: G,
                                    className: D.descriptionArea,
                                    value: eh,
                                    onChange: eq,
                                    maxLength: 1500,
                                    placeholder: B.intl.string(B.t.BFwyum),
                                    showCharacterCount: eh.length > 0,
                                    parentModalKey: z.Yz,
                                    required: !0,
                                }),
                                (0, n.jsx)(M, {
                                    label: B.intl.string(B.t["CAY/vh"]),
                                    errorMessage:
                                        null != (H = null == ez ? void 0 : ez.getFirstFieldErrorMessage("price_tier"))
                                            ? H
                                            : void 0,
                                    guildId: et,
                                    selectedPriceTier: eb,
                                    setPriceTier: eC,
                                }),
                                (0, n.jsx)(g.gNt, {
                                    label: B.intl.string(B.t.sqXj60),
                                    errorMessage:
                                        null != (J = null == ez ? void 0 : ez.getFirstFieldErrorMessage("image"))
                                            ? J
                                            : void 0,
                                    description: B.intl.string(B.t.yOU4Vm),
                                    children: (0, n.jsx)(X.Z, {
                                        presetImages: N.M,
                                        radioGroupAriaLabel: B.intl.string(B.t.fKzQj0),
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
                                    ? (0, n.jsx)(g.gNt, {
                                          label: B.intl.string(B.t.zLrtkN),
                                          errorMessage:
                                              null !=
                                              ($ = null == ez ? void 0 : ez.getFirstFieldErrorMessage("attachments"))
                                                  ? $
                                                  : void 0,
                                          children: (0, n.jsx)(K.s, {
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
                                    ? (0, n.jsx)(S.ZP, {
                                          error:
                                              null != (ee = null == ez ? void 0 : ez.getFirstFieldErrorMessage(y.NB))
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
                    (0, n.jsx)("div", { className: D.horizontalSeparator }),
                    (0, n.jsx)(g.zJl, {
                        children: (0, n.jsxs)("div", {
                            className: D.productPreview,
                            children: [
                                (0, n.jsx)(Q.Z, {
                                    disabled: e7,
                                    disabledTooltip: es
                                        ? B.intl.string(B.t["0NQ00t"])
                                        : eo >= z.dD
                                          ? B.intl.format(B.t.IqWPVt, { maxProducts: z.dD })
                                          : B.intl.string(B.t["Ax89/c"]),
                                    published: es,
                                    onClick: () => {
                                        var e, t;
                                        o()(e1, "Attempting to publish/unpublish when not allowed"),
                                            eM(es ? "unpublish" : "publish"),
                                            e6(
                                                ((e = R({}, eJ)),
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
                                (0, n.jsx)("div", { className: D.verticalSeparator }),
                                (0, n.jsx)(g.Heading, {
                                    variant: "text-xs/bold",
                                    color: "text-default",
                                    className: D.previewHeading,
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
                                    imageUrl: eU,
                                    name: "" === em ? B.intl.string(B.t.EmqIwl) : em,
                                    description: "" === eh ? B.intl.string(B.t["11NA2L"]) : eh,
                                    formattedPrice: eN,
                                    role: eE,
                                    productType: eG,
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
                    className: D.footerActionButtons,
                    children: [
                        (0, n.jsxs)("div", {
                            className: D.footerActionLeftButtons,
                            children: [
                                (0, n.jsx)(Y, {
                                    text: B.intl.string(B.t.YzGIVF),
                                    value: ek,
                                    onChange: (e) => {
                                        e ? eR((0, S.YP)()) : eR(void 0);
                                    },
                                    warning: null === eD ? (0, n.jsx)(S.aN, {}) : void 0,
                                    disabled: null != eB,
                                }),
                                (0, n.jsx)(Y, {
                                    text: B.intl.string(B.t.C6wP2Q),
                                    value: eI,
                                    onChange: (e) => {
                                        e
                                            ? eK(!0)
                                            : eX
                                              ? (0, f.Z)({
                                                    title: B.intl.string(B.t["2WihyY"]),
                                                    subtitle: B.intl.string(B.t.ixRBLh),
                                                    confirmText: B.intl.string(B.t.N86XcP),
                                                    onConfirm: eY,
                                                })
                                              : eY();
                                    },
                                    disabled: eS,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: D.footerActionRightButtons,
                            children: es
                                ? (0, n.jsx)(g.Button, {
                                      variant: "secondary",
                                      text: B.intl.string(B.t.XYBEaV),
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
                                : (0, n.jsx)(g.Button, {
                                      variant: "secondary",
                                      text: B.intl.string(B.t.ZCjwob),
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
                className: D.successNoticeContainer,
                children: e3,
            }),
        ],
    });
}
function _(e) {
    var t;
    return (0, n.jsx)(P.W, {
        guildId: e.guildId,
        editSkuId: null != (t = e.productId) ? t : void 0,
        onFileSizeError: () => (0, C.Z)(z.ve),
        children: (0, n.jsx)(J, R({}, e)),
    });
}
