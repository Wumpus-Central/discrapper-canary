t.d(A, { default: () => _ }), t(896048), t(228524);
var r = t(627968),
    n = t(64700),
    l = t(503698),
    a = t.n(l),
    i = t(284009),
    s = t.n(i),
    o = t(417597),
    d = t(827734),
    c = t(73939),
    u = t(36525),
    g = t(314116),
    f = t(397927),
    p = t(686956),
    m = t(262828),
    b = t(915089),
    v = t(722888),
    q = t(809506),
    h = t(465932),
    C = t(2553),
    j = t(253932),
    U = t(317525),
    V = t(580630),
    O = t(371794),
    x = t(218394),
    y = t(464990),
    P = t(871109),
    K = t(253141),
    N = t(937409),
    T = t(500770),
    F = t(563838),
    I = t(426043),
    X = t(575077),
    W = t(692646),
    Q = t(184119),
    S = t(717040),
    Z = t(319543),
    z = t(500208),
    w = t(652215),
    D = t(705751),
    R = t(985018),
    L = t(294851);
function G(e) {
    for (var A = 1; A < arguments.length; A++) {
        var t = null != arguments[A] ? arguments[A] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (A) {
                var r;
                (r = t[A]),
                    A in e
                        ? Object.defineProperty(e, A, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[A] = r);
            });
    }
    return e;
}
let k = (0, b.Ld)(),
    E = (0, b.Ld)(),
    B = (0, b.Ld)();
function Y(e) {
    let { text: A, onChange: t, value: n, disabled: l, warning: i } = e,
        s = (0, b.GV)(),
        o = l ? "text-muted" : "text-default";
    return (0, r.jsxs)("label", {
        className: a()(L.$4, { [L.r9]: l }),
        htmlFor: s,
        children: [
            (0, r.jsx)(f.Text, {
                variant: "text-sm/medium",
                color: o,
                children: A,
            }),
            null != i &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.hKd, {
                            size: 4,
                            horizontal: !0,
                        }),
                        i,
                    ],
                }),
            (0, r.jsx)(f.dOG, {
                onChange: t,
                checked: n,
                disabled: l,
                id: s,
            }),
        ],
    });
}
function H(e, A) {
    return e.filter((e) => {
        let { value: t, label: r } = e;
        return t.toString().includes(A) || r.includes(A);
    });
}
function M(e) {
    let { guildId: A, selectedPriceTier: t, setPriceTier: l, label: a, errorMessage: i } = e,
        { priceTiers: s } = (0, v._)(A, w.L_o.GUILD_PRODUCTS),
        o = n.useMemo(
            () =>
                (null != s ? s : null != t ? [t] : []).map((e) => ({
                    id: e.toString(),
                    value: e,
                    label: (0, V.$g)(e, w.Yri.USD),
                })),
            [s, t],
        );
    return (0, r.jsx)(f.ZiE, {
        selectionMode: "single",
        label: a,
        errorMessage: i,
        value: t,
        placeholder: R.intl.string(R.t.aI4J5H),
        maxOptionsVisible: 5,
        options: o,
        onSelectionChange: l,
        customMatchSorter: H,
        required: !0,
    });
}
function J(e) {
    var A, t, l, a, i, b, v, C, H, J, $, ee;
    let { guildId: eA, productId: et, transitionState: er, onClose: en } = e,
        [el, ea] = n.useState(et),
        ei = (0, o.bG)([P.A], () => (null == el ? null : P.A.getGuildProduct(el)), [el]),
        es = (0, o.bG)([P.A], () => P.A.getGuildProductsForGuild(eA, { publishedOnly: !0 }).length, [eA]),
        eo = (null == ei ? void 0 : ei.published) === !0,
        { application: ed } = (0, m.A)(eA, D.S7.GUILD_ROLE_SUBSCRIPTIONS),
        ec = N.D["0"],
        eu = j.kt.useSetting(),
        eg = (0, x.j)(),
        ef = n.useCallback(() => {
            var e;
            return (null == ei || null == (e = ei.image_asset) ? void 0 : e.application_id) == null
                ? ec.data
                : (0, O.YE)(ei.image_asset.application_id, ei.image_asset, 600, eg && eu ? void 0 : "webp");
        }, [ec, ei, eg, eu]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: ep } = (0, h.nq)(eA);
    n.useEffect(() => {
        ep && (en(), (0, X.p)(R.intl.string(R.t.OLf3xn), R.t["90LBVr"]));
    }, [ep, en]);
    let [em, eb] = n.useState(null != (A = null == ei ? void 0 : ei.name) ? A : ""),
        [ev, eq] = n.useState(null != (t = null == ei ? void 0 : ei.description) ? t : ""),
        [eh, eC] = n.useState(null != (l = null == ei ? void 0 : ei.price_tier) ? l : void 0),
        [ej, eU] = n.useState(ef),
        [eV, eO] = n.useState(
            null != (a = null == ei || null == ($ = ei.image_asset) ? void 0 : $.filename) ? a : ec.name,
        ),
        [ex, ey] = n.useState(!1),
        [eP, eK] = n.useState(),
        eN = n.useMemo(() => (null != eh ? (0, V.$g)(eh, w.Yri.USD) : void 0), [eh]),
        [eT, eF] = n.useState(!0),
        {
            changesSaving: eI,
            saveError: eX,
            saveProductWithAttachments: eW,
            hasUnsavedAttachmentChanges: eQ,
            cancelUnusedUploads: eS,
        } = (0, y.Z)(),
        eZ = (null == ei ? void 0 : ei.attachments) != null && (null == ei ? void 0 : ei.attachments.length) > 0,
        ez = null != eX ? eX : eP,
        ew = null != eI && "published" in eI,
        eD = null != eI && !ew,
        eR = null != (i = null == ei ? void 0 : ei.role_id) ? i : null,
        [eL, eG] = n.useState(),
        ek = null != eL || null != eR,
        eE = (0, o.bG)([U.A], () => (null != eR && null !== eL ? U.A.getRole(eA, eR) : null != eL ? eL : void 0), [
            eL,
            eR,
            eA,
        ]),
        eB = "";
    ek && eT
        ? (eB = R.intl.string(R.t.ih4QMU))
        : ek
          ? (eB = R.intl.string(R.t.o9xphc))
          : eT && (eB = R.intl.string(R.t.DWYJua));
    let eY = () => {
            eF(!1), eS();
        },
        [eH, eM] = n.useState(),
        {
            changes: eJ,
            hasUnsavedChanges: e_,
            canSaveForDraft: e$,
            canSaveForPublished: e0,
            canPublishOrUnpublish: e1,
        } = n.useMemo(
            () =>
                (0, K.EY)({
                    guildProductListing: ei,
                    name: em,
                    priceTier: eh,
                    description: ev,
                    image: ej,
                    imageName: eV,
                    isImageChanged: ex,
                    newRoleParams: eL,
                    hasSavedAttachments: eZ,
                    hasUnsavedAttachmentChanges: eQ,
                }),
            [ei, em, eh, ev, ej, eV, ex, eL, eZ, eQ],
        ),
        e9 = n.useMemo(
            () =>
                e_ || null == eH || "publish" === eH || null != ez
                    ? null
                    : (0, r.jsx)(f.FQk, {
                          className: L.Er,
                          children: (0, r.jsx)(u.A, {
                              message: (0, r.jsxs)("div", {
                                  className: L.Lk,
                                  children: [
                                      (0, r.jsx)(f.yr3, {
                                          size: "md",
                                          color: d.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT.css,
                                          secondaryColor: d.A.colors.WHITE.css,
                                      }),
                                      (0, r.jsx)(f.Text, {
                                          variant: "text-md/medium",
                                          children:
                                              "draft" === eH
                                                  ? R.intl.string(R.t["3Rv4MB"])
                                                  : "update_publish" === eH
                                                    ? R.intl.string(R.t["8fPiB3"])
                                                    : R.intl.string(R.t["3LUFnI"]),
                                      }),
                                  ],
                              }),
                              onReset: () => eM(void 0),
                              onResetText: R.intl.string(R.t.T6QuWe),
                          }),
                      }),
            [ez, e_, eH],
        ),
        e6 = n.useCallback(() => {
            e_
                ? (0, I.A)({
                      title: R.intl.string(R.t.FVDhIW),
                      body: R.intl.string(R.t.Hgdhwb),
                      cta: R.intl.string(R.t["h0bti/"]),
                      closeLabel: R.intl.string(R.t["+WYo0m"]),
                      onConfirm: () => {
                          en();
                      },
                  })
                : en();
        }, [en, e_]);
    n.useEffect(() => {
        (0, f.zbz)(
            z.DG,
            (e) =>
                (0, r.jsx)(
                    _,
                    G(
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
    let e3 = async (e) => {
        let A = (0, K.ig)({ newRoleParams: eL });
        if ((eK(A), null != A)) return;
        let t = await eW(e);
        if ((ey(!1), null != t)) {
            if ((null != e.name && eb(t.name), null != e.description && eq(t.description), null != eL)) {
                let e = t.role_id;
                s()(null != e, "Cannot update role without role ID"), await p.A.updateRole(eA, e, eL);
            }
            eG(void 0), ea(t.id), "published" in e && !0 === e.published && en();
        }
    };
    n.useEffect(() => {
        if (null != ez) {
            var e;
            (0, W.Z)(ez, eA, null == ed || null == (e = ed.team) ? void 0 : e.id);
        }
    }, [ez, eA, ed]),
        n.useEffect(() => {
            e_ && eM(void 0);
        }, [e_]);
    let e7 = n.useRef(null);
    return (0, r.jsxs)(f.EOs, {
        transitionState: er,
        size: f.rIJ.DYNAMIC,
        className: L.CR,
        "aria-labelledby": k,
        parentComponent: "GuildProductEditModal",
        "data-migration-pending": !0,
        children: [
            (0, r.jsxs)(f.rQ0, {
                className: L.Hc,
                separator: !1,
                "data-migration-pending": !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: L.TK,
                        children: [
                            (0, r.jsx)(f.Heading, {
                                id: k,
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: R.intl.string(R.t.DnNl1T),
                            }),
                            (0, r.jsx)(f.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: R.intl.string(R.t["Tu7f+f"]),
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.s_y, {
                        onClick: e6,
                        className: L.__invalid_modalCloseButton,
                        "data-migration-pending": !0,
                    }),
                ],
            }),
            (0, r.jsxs)(f.$mQ, {
                className: L.jE,
                scrollbarType: "none",
                "data-migration-pending": !0,
                children: [
                    (0, r.jsx)(f.IpV, {
                        children: (0, r.jsxs)("div", {
                            className: L.sj,
                            ref: e7,
                            children: [
                                (0, r.jsx)(f.ksK, {
                                    label: R.intl.string(R.t.Hsk7xT),
                                    error: null == ez ? void 0 : ez.getFirstFieldErrorMessage("name"),
                                    value: em,
                                    onChange: eb,
                                    id: E,
                                    maxLength: 100,
                                    placeholder: R.intl.string(R.t["/BiYSO"]),
                                    required: !0,
                                }),
                                (0, r.jsx)(q.A, {
                                    label: R.intl.string(R.t.QdKLyW),
                                    errorMessage:
                                        null != (b = null == ez ? void 0 : ez.getFirstFieldErrorMessage("description"))
                                            ? b
                                            : void 0,
                                    id: B,
                                    className: L.kj,
                                    value: ev,
                                    onChange: eq,
                                    maxLength: 1500,
                                    placeholder: R.intl.string(R.t.BFwyum),
                                    showCharacterCount: ev.length > 0,
                                    parentModalKey: z.DG,
                                    required: !0,
                                }),
                                (0, r.jsx)(M, {
                                    label: R.intl.string(R.t["CAY/vh"]),
                                    errorMessage:
                                        null != (v = null == ez ? void 0 : ez.getFirstFieldErrorMessage("price_tier"))
                                            ? v
                                            : void 0,
                                    guildId: eA,
                                    selectedPriceTier: eh,
                                    setPriceTier: eC,
                                }),
                                (0, r.jsx)(f.D0$, {
                                    label: R.intl.string(R.t.sqXj60),
                                    errorMessage:
                                        null != (C = null == ez ? void 0 : ez.getFirstFieldErrorMessage("image"))
                                            ? C
                                            : void 0,
                                    description: R.intl.string(R.t.yOU4Vm),
                                    children: (0, r.jsx)(Q.A, {
                                        presetImages: N.D,
                                        radioGroupAriaLabel: R.intl.string(R.t.fKzQj0),
                                        image: ej,
                                        imageName: eV,
                                        savedImageName:
                                            null == ei || null == (ee = ei.image_asset) ? void 0 : ee.filename,
                                        onChange: (e, A) => {
                                            if (null != e) {
                                                var t;
                                                eU(e),
                                                    eO(A),
                                                    ey(
                                                        e.startsWith("data:") ||
                                                            A !==
                                                                (null == ei || null == (t = ei.image_asset)
                                                                    ? void 0
                                                                    : t.filename),
                                                    );
                                            }
                                        },
                                    }),
                                }),
                                eT
                                    ? (0, r.jsx)(f.D0$, {
                                          label: R.intl.string(R.t.zLrtkN),
                                          errorMessage:
                                              null !=
                                              (H = null == ez ? void 0 : ez.getFirstFieldErrorMessage("attachments"))
                                                  ? H
                                                  : void 0,
                                          children: (0, r.jsx)(F.F, {
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
                                ek
                                    ? (0, r.jsx)(Z.Ay, {
                                          error:
                                              null != (J = null == ez ? void 0 : ez.getFirstFieldErrorMessage(K.a))
                                                  ? J
                                                  : void 0,
                                          newRoleParams: eL,
                                          setNewRoleParams: eG,
                                          guildId: eA,
                                          listingRoleId: eR,
                                          productId: el,
                                      })
                                    : null,
                            ],
                        }),
                    }),
                    (0, r.jsx)("div", { className: L.cD }),
                    (0, r.jsx)(f.IpV, {
                        children: (0, r.jsxs)("div", {
                            className: L.mA,
                            children: [
                                (0, r.jsx)(S.A, {
                                    disabled: !e1 || (!eo && es >= 50),
                                    disabledTooltip: eo
                                        ? R.intl.string(R.t["0NQ00t"])
                                        : es >= 50
                                          ? R.intl.format(R.t.IqWPVt, { maxProducts: 50 })
                                          : R.intl.string(R.t["Ax89/c"]),
                                    published: eo,
                                    onClick: () => {
                                        var e, A;
                                        s()(e1, "Attempting to publish/unpublish when not allowed"),
                                            eM(eo ? "unpublish" : "publish"),
                                            e3(
                                                ((e = G({}, eJ)),
                                                (A = A = { published: !eo }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A))
                                                    : (function (e, A) {
                                                          var t = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var r = Object.getOwnPropertySymbols(e);
                                                              t.push.apply(t, r);
                                                          }
                                                          return t;
                                                      })(Object(A)).forEach(function (t) {
                                                          Object.defineProperty(
                                                              e,
                                                              t,
                                                              Object.getOwnPropertyDescriptor(A, t),
                                                          );
                                                      }),
                                                e),
                                            );
                                    },
                                    submitting: ew,
                                }),
                                (0, r.jsx)("div", { className: L.AC }),
                                (0, r.jsx)(f.Heading, {
                                    variant: "text-xs/bold",
                                    color: "text-default",
                                    className: L.B9,
                                    children: R.intl.string(R.t["6I7nQT"]),
                                }),
                                (0, r.jsx)(f.hKd, { size: 4 }),
                                (0, r.jsx)(f.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: R.intl.string(R.t.Oq4dfU),
                                }),
                                (0, r.jsx)(f.hKd, { size: 16 }),
                                (0, r.jsx)(T.A, {
                                    imageUrl: ej,
                                    name: "" === em ? R.intl.string(R.t.EmqIwl) : em,
                                    description: "" === ev ? R.intl.string(R.t["11NA2L"]) : ev,
                                    formattedPrice: eN,
                                    role: eE,
                                    productType: eB,
                                    ctaComponent: (0, r.jsx)(f.Button, { text: R.intl.string(R.t.xUi3BL) }),
                                    cardWidth: 340,
                                    thumbnailHeight: 190,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(f.jlY, {
                "data-migration-pending": !0,
                children: (0, r.jsxs)("div", {
                    className: L.jj,
                    children: [
                        (0, r.jsxs)("div", {
                            className: L.mx,
                            children: [
                                (0, r.jsx)(Y, {
                                    text: R.intl.string(R.t.YzGIVF),
                                    value: ek,
                                    onChange: (e) => {
                                        e ? eG((0, Z.Jn)()) : eG(void 0);
                                    },
                                    warning: null === eL ? (0, r.jsx)(Z.id, {}) : void 0,
                                    disabled: null != eR,
                                }),
                                (0, r.jsx)(Y, {
                                    text: R.intl.string(R.t.C6wP2Q),
                                    value: eT,
                                    onChange: (e) => {
                                        e
                                            ? eF(!0)
                                            : eQ
                                              ? (0, g.A)({
                                                    title: R.intl.string(R.t["2WihyY"]),
                                                    subtitle: R.intl.string(R.t.ixRBLh),
                                                    confirmText: R.intl.string(R.t.N86XcP),
                                                    onConfirm: eY,
                                                })
                                              : eY();
                                    },
                                    disabled: eZ,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: L.TM,
                            children: eo
                                ? (0, r.jsx)(f.Button, {
                                      variant: "secondary",
                                      text: R.intl.string(R.t.XYBEaV),
                                      disabled: !e0,
                                      loading: eD,
                                      onClick: () => {
                                          s()(
                                              e0,
                                              "cannot save changes for published product without adding all fields",
                                          ),
                                              eM("update_publish"),
                                              e3(eJ);
                                      },
                                  })
                                : (0, r.jsx)(f.Button, {
                                      variant: "secondary",
                                      text: R.intl.string(R.t.ZCjwob),
                                      disabled: !e$,
                                      loading: eD,
                                      onClick: () => {
                                          s()(e$, "cannot save changes without name or price tier"),
                                              eM("draft"),
                                              e3(eJ);
                                      },
                                  }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(c.F, {
                component: "div",
                className: L.Nt,
                children: e9,
            }),
        ],
    });
}
function _(e) {
    var A;
    return (0, r.jsx)(y.R, {
        guildId: e.guildId,
        editSkuId: null != (A = e.productId) ? A : void 0,
        onFileSizeError: () => (0, C.A)(z.vN),
        children: (0, r.jsx)(J, G({}, e)),
    });
}
