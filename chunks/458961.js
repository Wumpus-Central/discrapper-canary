t.d(A, { default: () => eA }), t(388685), t(953529);
var n = t(951288),
    r = t(647438),
    l = t(120356),
    a = t.n(l),
    i = t(512722),
    o = t.n(i),
    s = t(831209),
    d = t(399606),
    u = t(215569),
    c = t(886025),
    g = t(159691),
    f = t(755721),
    p = t(481060),
    m = t(749210),
    q = t(852860),
    h = t(725803),
    v = t(313201),
    b = t(76535),
    C = t(215388),
    U = t(674180),
    j = t(884858),
    V = t(695346),
    x = t(485386),
    P = t(937615),
    O = t(73346),
    F = t(506071),
    I = t(587123),
    K = t(240864),
    y = t(863663),
    N = t(923400),
    T = t(623488),
    X = t(152980),
    Z = t(120651),
    W = t(871388),
    Q = t(412110),
    z = t(513669),
    S = t(972797),
    R = t(943516),
    B = t(302463),
    w = t(981631),
    k = t(674563),
    L = t(388032),
    G = t(179598);
function E(e) {
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
function Y(e, A) {
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
let D = (0, v.hQ)(),
    H = (0, v.hQ)(),
    M = (0, v.hQ)();
function J(e) {
    let { text: A, onChange: t, value: r, disabled: l, warning: i } = e,
        o = (0, v.Dt)(),
        s = l ? "text-muted" : "text-default";
    return (0, n.jsxs)("label", {
        className: a()(G.benefitToggleContainer, { [G.disabled]: l }),
        htmlFor: o,
        children: [
            (0, n.jsx)(p.Text, {
                variant: "text-sm/medium",
                color: s,
                children: A,
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
            (0, n.jsx)(p.LZC, {
                size: 16,
                horizontal: !0,
            }),
            (0, n.jsx)(f.T2, {
                onChange: t,
                checked: r,
                disabled: l,
                id: o,
            }),
        ],
    });
}
function _(e, A) {
    return e.filter((e) => {
        let { value: t, label: n } = e;
        return t.toString().includes(A) || n.includes(A);
    });
}
function $(e) {
    let { guildId: A, selectedPriceTier: t, setPriceTier: l, label: a, errorMessage: i } = e,
        { priceTiers: o } = (0, b.R)(A, w.RG5.GUILD_PRODUCTS),
        s = r.useMemo(
            () =>
                (null != o ? o : null != t ? [t] : []).map((e) => ({
                    value: e,
                    label: (0, P.T4)(e, w.pKx.USD),
                })),
            [o, t],
        );
    return (0, n.jsx)(p.VcW, {
        label: a,
        errorMessage: i,
        value: t,
        placeholder: L.intl.string(L.t.aI4J5O),
        maxVisibleItems: 5,
        options: s,
        onChange: l,
        filter: _,
        "aria-required": !0,
    });
}
function ee(e) {
    var A, l, a, i, f, v, b, j, _, ee, et, en;
    let { guildId: er, productId: el, transitionState: ea, onClose: ei } = e,
        [eo, es] = r.useState(el),
        ed = (0, d.e7)([K.Z], () => (null == eo ? null : K.Z.getGuildProduct(eo)), [eo]),
        eu = (0, d.e7)([K.Z], () => K.Z.getGuildProductsForGuild(er, { publishedOnly: !0 }).length, [er]),
        ec = (null == ed ? void 0 : ed.published) === !0,
        { application: eg } = (0, h.Z)(er, k.wW.GUILD_ROLE_SUBSCRIPTIONS),
        ef = N.M["0"],
        ep = V.QK.useSetting(),
        em = (0, F.n)(),
        eq = r.useCallback(() => {
            var e;
            return (null == ed || null == (e = ed.image_asset) ? void 0 : e.application_id) == null
                ? ef.data
                : (0, O._W)(ed.image_asset.application_id, ed.image_asset, 600, em && ep ? void 0 : "webp");
        }, [ef, ed, em, ep]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: eh } = (0, U.gX)(er);
    r.useEffect(() => {
        eh && (ei(), (0, W.B)(L.intl.string(L.t.OLf3xs), L.t["90LBVl"]));
    }, [eh, ei]);
    let [ev, eb] = r.useState(null != (a = null == ed ? void 0 : ed.name) ? a : ""),
        [eC, eU] = r.useState(null != (i = null == ed ? void 0 : ed.description) ? i : ""),
        [ej, eV] = r.useState(null != (f = null == ed ? void 0 : ed.price_tier) ? f : void 0),
        [ex, eP] = r.useState(eq),
        [eO, eF] = r.useState(
            null != (v = null == ed || null == (A = ed.image_asset) ? void 0 : A.filename) ? v : ef.name,
        ),
        [eI, eK] = r.useState(!1),
        [ey, eN] = r.useState(),
        eT = r.useMemo(() => (null != ej ? (0, P.T4)(ej, w.pKx.USD) : void 0), [ej]),
        [eX, eZ] = r.useState(!0),
        {
            changesSaving: eW,
            saveError: eQ,
            saveProductWithAttachments: ez,
            hasUnsavedAttachmentChanges: eS,
            cancelUnusedUploads: eR,
        } = (0, I.P)(),
        eB = (null == ed ? void 0 : ed.attachments) != null && (null == ed ? void 0 : ed.attachments.length) > 0,
        ew = null != eQ ? eQ : ey,
        ek = null != eW && "published" in eW,
        eL = null != eW && !ek,
        eG = null != (b = null == ed ? void 0 : ed.role_id) ? b : null,
        [eE, eY] = r.useState(),
        eD = null != eE || null != eG,
        eH = (0, d.e7)([x.Z], () => (null != eG && null !== eE ? x.Z.getRole(er, eG) : null != eE ? eE : void 0), [
            eE,
            eG,
            er,
        ]),
        eM = "";
    eD && eX
        ? (eM = L.intl.string(L.t.ih4QMT))
        : eD
          ? (eM = L.intl.string(L.t.o9xphY))
          : eX && (eM = L.intl.string(L.t.DWYJub));
    let eJ = () => {
            eZ(!1), eR();
        },
        [e_, e$] = r.useState(),
        {
            changes: e0,
            hasUnsavedChanges: e1,
            canSaveForDraft: e3,
            canSaveForPublished: e9,
            canPublishOrUnpublish: e6,
        } = r.useMemo(
            () =>
                (0, y.fG)({
                    guildProductListing: ed,
                    name: ev,
                    priceTier: ej,
                    description: eC,
                    image: ex,
                    imageName: eO,
                    isImageChanged: eI,
                    newRoleParams: eE,
                    hasSavedAttachments: eB,
                    hasUnsavedAttachmentChanges: eS,
                }),
            [ed, ev, ej, eC, ex, eO, eI, eE, eB, eS],
        ),
        e7 = r.useMemo(
            () =>
                e1 || null == e_ || "publish" === e_ || null != ew
                    ? null
                    : (0, n.jsx)(p.oXn, {
                          className: G.successNotice,
                          children: (0, n.jsx)(q.Z, {
                              message: (0, n.jsxs)("div", {
                                  className: G.successNoticeMessage,
                                  children: [
                                      (0, n.jsx)(p.owK, {
                                          size: "md",
                                          color: s.Z.BUTTON_POSITIVE_BACKGROUND,
                                          secondaryColor: s.Z.WHITE,
                                      }),
                                      (0, n.jsx)(p.Text, {
                                          variant: "text-md/medium",
                                          children:
                                              "draft" === e_
                                                  ? L.intl.string(L.t["3Rv4MD"])
                                                  : "update_publish" === e_
                                                    ? L.intl.string(L.t["8fPiBw"])
                                                    : L.intl.string(L.t["3LUFnJ"]),
                                      }),
                                  ],
                              }),
                              onReset: () => e$(void 0),
                              onResetText: L.intl.string(L.t.T6QuWV),
                          }),
                      }),
            [ew, e1, e_],
        ),
        e8 = r.useCallback(() => {
            e1
                ? (0, Z.Z)({
                      title: L.intl.string(L.t.FVDhIS),
                      body: L.intl.string(L.t.Hgdhwc),
                      cta: L.intl.string(L.t.h0bti4),
                      closeLabel: L.intl.string(L.t["+WYo0t"]),
                      onConfirm: () => {
                          ei();
                      },
                  })
                : ei();
        }, [ei, e1]);
    r.useEffect(() => {
        (0, p.oav)(
            B.Yz,
            (e) =>
                (0, n.jsx)(
                    eA,
                    E(
                        {
                            guildId: er,
                            productId: eo,
                        },
                        e,
                    ),
                ),
            e8,
        );
    }, [er, e8, eo]);
    let e2 = async (e) => {
        let A = (0, y.pM)({ newRoleParams: eE });
        if ((eN(A), null != A)) return;
        let t = await ez(e);
        if ((eK(!1), null != t)) {
            if ((null != e.name && eb(t.name), null != e.description && eU(t.description), null != eE)) {
                let e = t.role_id;
                o()(null != e, "Cannot update role without role ID"), await m.Z.updateRole(er, e, eE);
            }
            eY(void 0), es(t.id), "published" in e && !0 === e.published && ei();
        }
    };
    r.useEffect(() => {
        if (null != ew) {
            var e;
            (0, Q.V)(ew, er, null == eg || null == (e = eg.team) ? void 0 : e.id);
        }
    }, [ew, er, eg]),
        r.useEffect(() => {
            e1 && e$(void 0);
        }, [e1]);
    let e5 = r.useRef(null),
        e4 = !e6 || (!ec && eu >= B.dD);
    return (0, n.jsxs)(p.Y0X, {
        transitionState: ea,
        size: p.CgR.DYNAMIC,
        className: G.modalRoot,
        "aria-labelledby": D,
        parentComponent: "GuildProductEditModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsxs)(p.xBx, {
                className: G.modalHeader,
                separator: !1,
                "data-migration-pending": !0,
                children: [
                    (0, n.jsxs)("div", {
                        className: G.headerText,
                        children: [
                            (0, n.jsx)(p.X6q, {
                                id: D,
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: L.intl.string(L.t.DnNl1d),
                            }),
                            (0, n.jsx)(p.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: L.intl.string(L.t["Tu7f+f"]),
                            }),
                        ],
                    }),
                    (0, n.jsx)(p.olH, {
                        onClick: e8,
                        className: G.__invalid_modalCloseButton,
                        "data-migration-pending": !0,
                    }),
                ],
            }),
            (0, n.jsxs)(p.hzk, {
                className: G.modalContent,
                scrollbarType: "none",
                "data-migration-pending": !0,
                children: [
                    (0, n.jsx)(p.zJl, {
                        children: (0, n.jsxs)("div", {
                            className: G.productFieldsSection,
                            ref: e5,
                            children: [
                                (0, n.jsx)(p.oil, {
                                    label: L.intl.string(L.t.Hsk7xc),
                                    error: null == ew ? void 0 : ew.getFirstFieldErrorMessage("name"),
                                    value: ev,
                                    onChange: eb,
                                    id: H,
                                    maxLength: 100,
                                    placeholder: L.intl.string(L.t["/BiYSE"]),
                                    required: !0,
                                }),
                                (0, n.jsx)(C.Z, {
                                    label: L.intl.string(L.t.QdKLyc),
                                    errorMessage:
                                        null != (j = null == ew ? void 0 : ew.getFirstFieldErrorMessage("description"))
                                            ? j
                                            : void 0,
                                    id: M,
                                    className: G.descriptionArea,
                                    value: eC,
                                    onChange: eU,
                                    maxLength: 1500,
                                    placeholder: L.intl.string(L.t.BFwyur),
                                    showCharacterCount: eC.length > 0,
                                    parentModalKey: B.Yz,
                                    required: !0,
                                }),
                                (0, n.jsx)($, {
                                    label: L.intl.string(L.t["CAY/vr"]),
                                    errorMessage:
                                        null != (_ = null == ew ? void 0 : ew.getFirstFieldErrorMessage("price_tier"))
                                            ? _
                                            : void 0,
                                    guildId: er,
                                    selectedPriceTier: ej,
                                    setPriceTier: eV,
                                }),
                                (0, n.jsx)(c.N, {
                                    label: L.intl.string(L.t["sqXj6+"]),
                                    errorMessage:
                                        null != (ee = null == ew ? void 0 : ew.getFirstFieldErrorMessage("image"))
                                            ? ee
                                            : void 0,
                                    description: L.intl.string(L.t.yOU4Vl),
                                    children: (0, n.jsx)(z.Z, {
                                        presetImages: N.M,
                                        radioGroupAriaLabel: L.intl.string(L.t.fKzQj4),
                                        image: ex,
                                        imageName: eO,
                                        savedImageName:
                                            null == ed || null == (l = ed.image_asset) ? void 0 : l.filename,
                                        onChange: (e, A) => {
                                            if (null != e) {
                                                var t;
                                                eP(e),
                                                    eF(A),
                                                    eK(
                                                        e.startsWith("data:") ||
                                                            A !==
                                                                (null == ed || null == (t = ed.image_asset)
                                                                    ? void 0
                                                                    : t.filename),
                                                    );
                                            }
                                        },
                                    }),
                                }),
                                eX
                                    ? (0, n.jsx)(c.N, {
                                          label: L.intl.string(L.t.zLrtkJ),
                                          errorMessage:
                                              null !=
                                              (et = null == ew ? void 0 : ew.getFirstFieldErrorMessage("attachments"))
                                                  ? et
                                                  : void 0,
                                          children: (0, n.jsx)(X.s, {
                                              onFileAdded: () => {
                                                  var e;
                                                  null == (e = e5.current) ||
                                                      e.scrollIntoView({
                                                          behavior: "smooth",
                                                          block: "end",
                                                      });
                                              },
                                          }),
                                      })
                                    : null,
                                eD
                                    ? (0, n.jsx)(R.ZP, {
                                          error:
                                              null != (en = null == ew ? void 0 : ew.getFirstFieldErrorMessage(y.NB))
                                                  ? en
                                                  : void 0,
                                          newRoleParams: eE,
                                          setNewRoleParams: eY,
                                          guildId: er,
                                          listingRoleId: eG,
                                          productId: eo,
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, n.jsx)("div", { className: G.horizontalSeparator }),
                    (0, n.jsx)(p.zJl, {
                        children: (0, n.jsxs)("div", {
                            className: G.productPreview,
                            children: [
                                (0, n.jsx)(S.Z, {
                                    disabled: e4,
                                    disabledTooltip: ec
                                        ? L.intl.string(L.t["0NQ00t"])
                                        : eu >= B.dD
                                          ? L.intl.format(L.t.IqWPVl, { maxProducts: B.dD })
                                          : L.intl.string(L.t["Ax89/f"]),
                                    published: ec,
                                    onClick: () => {
                                        o()(e6, "Attempting to publish/unpublish when not allowed"),
                                            e$(ec ? "unpublish" : "publish"),
                                            e2(Y(E({}, e0), { published: !ec }));
                                    },
                                    submitting: ek,
                                }),
                                (0, n.jsx)("div", { className: G.verticalSeparator }),
                                (0, n.jsx)(p.X6q, {
                                    variant: "text-xs/bold",
                                    color: "header-secondary",
                                    className: G.previewHeading,
                                    children: L.intl.string(L.t["6I7nQU"]),
                                }),
                                (0, n.jsx)(p.LZC, { size: 4 }),
                                (0, n.jsx)(p.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: L.intl.string(L.t.Oq4dfX),
                                }),
                                (0, n.jsx)(p.LZC, { size: 16 }),
                                (0, n.jsx)(T.Z, {
                                    imageUrl: ex,
                                    name: "" === ev ? L.intl.string(L.t.EmqIws) : ev,
                                    description: "" === eC ? L.intl.string(L.t["11NA2N"]) : eC,
                                    formattedPrice: eT,
                                    role: eH,
                                    productType: eM,
                                    ctaComponent: (0, n.jsx)(g.zxk, { text: L.intl.string(L.t.xUi3BA) }),
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
                    className: G.footerActionButtons,
                    children: [
                        (0, n.jsxs)("div", {
                            className: G.footerActionLeftButtons,
                            children: [
                                (0, n.jsx)(J, {
                                    text: L.intl.string(L.t.YzGIVF),
                                    value: eD,
                                    onChange: (e) => {
                                        e ? eY((0, R.YP)()) : eY(void 0);
                                    },
                                    warning: null === eE ? (0, n.jsx)(R.aN, {}) : void 0,
                                    disabled: null != eG,
                                }),
                                (0, n.jsx)(J, {
                                    text: L.intl.string(L.t.C6wP2d),
                                    value: eX,
                                    onChange: (e) => {
                                        e
                                            ? eZ(!0)
                                            : eS
                                              ? (0, p.ZDy)(async () => {
                                                    let { ConfirmModal: e } = await Promise.resolve().then(
                                                        t.bind(t, 481060),
                                                    );
                                                    return (A) =>
                                                        (0, n.jsx)(
                                                            e,
                                                            Y(E({}, A), {
                                                                header: L.intl.string(L.t["2Wihyc"]),
                                                                confirmText: L.intl.string(L.t.N86XcH),
                                                                cancelText: L.intl.string(L.t["ETE/oK"]),
                                                                onConfirm: eJ,
                                                                children: (0, n.jsx)(p.Text, {
                                                                    variant: "text-md/normal",
                                                                    children: L.intl.string(L.t.ixRBLi),
                                                                }),
                                                            }),
                                                        );
                                                })
                                              : eJ();
                                    },
                                    disabled: eB,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: G.footerActionRightButtons,
                            children: ec
                                ? (0, n.jsx)(g.zxk, {
                                      variant: "secondary",
                                      text: L.intl.string(L.t.XYBEaW),
                                      disabled: !e9,
                                      loading: eL,
                                      onClick: () => {
                                          o()(
                                              e9,
                                              "cannot save changes for published product without adding all fields",
                                          ),
                                              e$("update_publish"),
                                              e2(e0);
                                      },
                                  })
                                : (0, n.jsx)(g.zxk, {
                                      variant: "secondary",
                                      text: L.intl.string(L.t.ZCjwoa),
                                      disabled: !e3,
                                      loading: eL,
                                      onClick: () => {
                                          o()(e3, "cannot save changes without name or price tier"),
                                              e$("draft"),
                                              e2(e0);
                                      },
                                  }),
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(u.W, {
                component: "div",
                className: G.successNoticeContainer,
                children: e7,
            }),
        ],
    });
}
function eA(e) {
    var A;
    return (0, n.jsx)(I.W, {
        guildId: e.guildId,
        editSkuId: null != (A = e.productId) ? A : void 0,
        onFileSizeError: () => (0, j.Z)(B.ve),
        children: (0, n.jsx)(ee, E({}, e)),
    });
}
