r.d(t, { default: () => $ }), r(47120), r(266796);
var A = r(200651),
    n = r(192379),
    o = r(120356),
    a = r.n(o),
    l = r(512722),
    i = r.n(l),
    s = r(831209),
    c = r(399606),
    d = r(215569),
    u = r(481060),
    f = r(749210),
    g = r(852860),
    p = r(607070),
    m = r(725803),
    h = r(313201),
    b = r(76535),
    v = r(215388),
    C = r(674180),
    q = r(884858),
    x = r(695346),
    j = r(430824),
    N = r(937615),
    O = r(73346),
    U = r(506071),
    P = r(587123),
    V = r(240864),
    y = r(863663),
    W = r(923400),
    I = r(623488),
    T = r(152980),
    F = r(120651),
    K = r(871388),
    Z = r(161911),
    z = r(513669),
    X = r(972797),
    w = r(943516),
    S = r(302463),
    Q = r(981631),
    k = r(674563),
    B = r(388032),
    R = r(2848);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            A = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (A = A.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            A.forEach(function (t) {
                var A;
                (A = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: A,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = A);
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
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var A = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, A);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let D = (0, h.hQ)(),
    G = (0, h.hQ)(),
    Y = (0, h.hQ)();
function H(e) {
    let { text: t, onChange: r, value: n, disabled: o, warning: l } = e,
        i = (0, h.Dt)(),
        s = o ? 'text-muted' : 'text-normal';
    return (0, A.jsxs)('label', {
        className: a()(R.benefitToggleContainer, { [R.disabled]: o }),
        htmlFor: i,
        children: [
            (0, A.jsx)(u.Text, {
                variant: 'text-sm/medium',
                color: s,
                children: t
            }),
            null != l &&
                (0, A.jsxs)(A.Fragment, {
                    children: [
                        (0, A.jsx)(u.LZC, {
                            size: 4,
                            horizontal: !0
                        }),
                        l
                    ]
                }),
            (0, A.jsx)(u.LZC, {
                size: 16,
                horizontal: !0
            }),
            (0, A.jsx)(u.rsf, {
                onChange: r,
                checked: n,
                disabled: o,
                id: i
            })
        ]
    });
}
function M(e, t) {
    return e.filter((e) => {
        let { value: r, label: A } = e;
        return r.toString().includes(t) || A.includes(t);
    });
}
function J(e) {
    let { guildId: t, selectedPriceTier: r, setPriceTier: o } = e,
        { priceTiers: a } = (0, b.R)(t, Q.RG5.GUILD_PRODUCTS),
        l = n.useMemo(
            () =>
                (null != a ? a : null != r ? [r] : []).map((e) => ({
                    value: e,
                    label: (0, N.T4)(e, Q.pKx.USD)
                })),
            [a, r]
        );
    return (0, A.jsx)(u.VcW, {
        value: r,
        placeholder: B.NW.string(B.t.aI4J5O),
        maxVisibleItems: 5,
        options: l,
        onChange: o,
        filter: M,
        'aria-required': !0
    });
}
function _(e) {
    var t, o, a, l, h, b, q, M;
    let { guildId: _, productId: ee, transitionState: et, onClose: er } = e,
        [eA, en] = n.useState(ee),
        eo = (0, c.e7)([V.Z], () => (null == eA ? null : V.Z.getGuildProduct(eA)), [eA]),
        ea = (null == eo ? void 0 : eo.published) === !0,
        { application: el } = (0, m.Z)(_, k.wW.GUILD_ROLE_SUBSCRIPTIONS),
        ei = W.M['0'],
        es = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        ec = x.QK.useSetting(),
        ed = (0, U.n)(),
        eu = n.useCallback(() => {
            var e;
            return (null == eo ? void 0 : null === (e = eo.image_asset) || void 0 === e ? void 0 : e.application_id) == null ? ei.data : (0, O._W)(eo.image_asset.application_id, eo.image_asset, 600, ed && ec ? void 0 : 'webp');
        }, [ei, eo, ed, ec]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: ef } = (0, C.gX)(_);
    n.useEffect(() => {
        ef && (er(), (0, K.B)(B.NW.string(B.t.OLf3xs), B.t['90LBVl']));
    }, [ef, er]);
    let [eg, ep] = n.useState(null !== (a = null == eo ? void 0 : eo.name) && void 0 !== a ? a : ''),
        [em, eh] = n.useState(null !== (l = null == eo ? void 0 : eo.description) && void 0 !== l ? l : ''),
        [eb, ev] = n.useState(null !== (h = null == eo ? void 0 : eo.price_tier) && void 0 !== h ? h : void 0),
        [eC, eq] = n.useState(eu),
        [ex, ej] = n.useState(null !== (b = null == eo ? void 0 : null === (t = eo.image_asset) || void 0 === t ? void 0 : t.filename) && void 0 !== b ? b : ei.name),
        [eN, eO] = n.useState(!1),
        [eU, eP] = n.useState(),
        eV = n.useMemo(() => (null != eb ? (0, N.T4)(eb, Q.pKx.USD) : void 0), [eb]),
        [ey, eW] = n.useState(!0),
        { changesSaving: eI, saveError: eT, saveProductWithAttachments: eF, hasUnsavedAttachmentChanges: eK, cancelUnusedUploads: eZ } = (0, P.P)(),
        ez = (null == eo ? void 0 : eo.attachments) != null && (null == eo ? void 0 : eo.attachments.length) > 0,
        eX = null != eT ? eT : eU,
        ew = null != eI && 'published' in eI,
        eS = null != eI && !ew,
        eQ = null !== (q = null == eo ? void 0 : eo.role_id) && void 0 !== q ? q : null,
        [ek, eB] = n.useState(),
        eR = null != ek || null != eQ,
        eL = (0, c.e7)([j.Z], () => (null != eQ && null !== ek ? j.Z.getRole(_, eQ) : null != ek ? ek : void 0), [ek, eQ, _]),
        eE = '';
    eR && ey ? (eE = B.NW.string(B.t.ih4QMT)) : eR ? (eE = B.NW.string(B.t.o9xphY)) : ey && (eE = B.NW.string(B.t.DWYJub));
    let eD = () => {
            eW(!1), eZ();
        },
        [eG, eY] = n.useState(),
        {
            changes: eH,
            hasUnsavedChanges: eM,
            canSaveForDraft: eJ,
            canSaveForPublished: e_,
            canPublishOrUnpublish: e$
        } = n.useMemo(
            () =>
                (0, y.fG)({
                    guildProductListing: eo,
                    name: eg,
                    priceTier: eb,
                    description: em,
                    image: eC,
                    imageName: ex,
                    isImageChanged: eN,
                    newRoleParams: ek,
                    hasSavedAttachments: ez,
                    hasUnsavedAttachmentChanges: eK
                }),
            [eo, eg, eb, em, eC, ex, eN, ek, ez, eK]
        ),
        e0 = n.useMemo(
            () =>
                eM || null == eG || 'publish' === eG || null != eX
                    ? null
                    : (0, A.jsx)(u.oXn, {
                          className: R.successNotice,
                          children: (0, A.jsx)(g.Z, {
                              message: (0, A.jsxs)('div', {
                                  className: R.successNoticeMessage,
                                  children: [
                                      (0, A.jsx)(u.owK, {
                                          size: 'md',
                                          color: s.Z.BUTTON_POSITIVE_BACKGROUND,
                                          secondaryColor: s.Z.WHITE
                                      }),
                                      (0, A.jsx)(u.Text, {
                                          variant: 'text-md/medium',
                                          children: 'draft' === eG ? B.NW.string(B.t['3Rv4MD']) : 'update_publish' === eG ? B.NW.string(B.t['8fPiBw']) : B.NW.string(B.t['3LUFnJ'])
                                      })
                                  ]
                              }),
                              onReset: () => eY(void 0),
                              onResetText: B.NW.string(B.t.T6QuWV)
                          })
                      }),
            [eX, eM, eG]
        ),
        e1 = n.useCallback(() => {
            eM
                ? (0, F.Z)({
                      title: B.NW.string(B.t.FVDhIS),
                      body: B.NW.string(B.t.Hgdhwc),
                      cta: B.NW.string(B.t.h0bti4),
                      closeLabel: B.NW.string(B.t['+WYo0t']),
                      onConfirm: () => {
                          er();
                      }
                  })
                : er();
        }, [er, eM]);
    n.useEffect(() => {
        (0, u.oav)(
            S.Yz,
            (e) =>
                (0, A.jsx)(
                    $,
                    L(
                        {
                            guildId: _,
                            productId: eA
                        },
                        e
                    )
                ),
            e1
        );
    }, [_, e1, eA]);
    let e9 = async (e) => {
        let t = (0, y.pM)({ newRoleParams: ek });
        if ((eP(t), null != t)) return;
        let r = await eF(e);
        if ((eO(!1), null != r)) {
            if ((null != e.name && ep(r.name), null != e.description && eh(r.description), null != ek)) {
                let e = r.role_id;
                i()(null != e, 'Cannot update role without role ID'), await f.Z.updateRole(_, e, ek);
            }
            eB(void 0), en(r.id), 'published' in e && !0 === e.published && er();
        }
    };
    n.useEffect(() => {
        if (null != eX) {
            var e;
            (0, Z.V)(eX, _, null == el ? void 0 : null === (e = el.team) || void 0 === e ? void 0 : e.id);
        }
    }, [eX, _, el]),
        n.useEffect(() => {
            eM && eY(void 0);
        }, [eM]);
    let e3 = n.useRef(null);
    return (0, A.jsxs)(u.Y0X, {
        transitionState: et,
        size: u.CgR.DYNAMIC,
        className: R.modalRoot,
        'aria-labelledby': D,
        children: [
            (0, A.jsxs)(u.xBx, {
                className: R.modalHeader,
                separator: !1,
                children: [
                    (0, A.jsxs)('div', {
                        className: R.headerText,
                        children: [
                            (0, A.jsx)(u.X6q, {
                                id: D,
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: B.NW.string(B.t.DnNl1d)
                            }),
                            (0, A.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: B.NW.string(B.t['Tu7f+f'])
                            })
                        ]
                    }),
                    (0, A.jsx)(u.olH, {
                        onClick: e1,
                        className: R.__invalid_modalCloseButton
                    })
                ]
            }),
            (0, A.jsxs)(u.hzk, {
                className: R.modalContent,
                scrollbarType: 'none',
                children: [
                    (0, A.jsx)(u.zJl, {
                        children: (0, A.jsxs)('div', {
                            className: R.productFieldsSection,
                            ref: e3,
                            children: [
                                (0, A.jsx)(u.xJW, {
                                    title: B.NW.string(B.t.Hsk7xc),
                                    tag: 'label',
                                    htmlFor: G,
                                    error: null == eX ? void 0 : eX.getFirstFieldErrorMessage('name'),
                                    children: (0, A.jsx)(u.Kx8, {
                                        value: eg,
                                        onChange: ep,
                                        id: G,
                                        maxLength: 100,
                                        placeholder: B.NW.string(B.t['/BiYSE']),
                                        rows: 1,
                                        autosize: !0,
                                        showCharacterCount: eg.length > 0,
                                        showRemainingCharacterCount: eg.length > 0,
                                        required: !0,
                                        className: eg.length > 0 ? R.nameArea : void 0
                                    })
                                }),
                                (0, A.jsx)(u.xJW, {
                                    title: B.NW.string(B.t.QdKLyc),
                                    tag: 'label',
                                    error: null == eX ? void 0 : eX.getFirstFieldErrorMessage('description'),
                                    htmlFor: Y,
                                    children: (0, A.jsx)(v.Z, {
                                        id: Y,
                                        className: R.descriptionArea,
                                        value: em,
                                        onChange: eh,
                                        maxLength: 1500,
                                        placeholder: B.NW.string(B.t.BFwyur),
                                        showCharacterCount: em.length > 0,
                                        parentModalKey: S.Yz,
                                        required: !0
                                    })
                                }),
                                (0, A.jsx)(u.xJW, {
                                    title: B.NW.string(B.t['CAY/vr']),
                                    tag: 'label',
                                    error: null == eX ? void 0 : eX.getFirstFieldErrorMessage('price_tier'),
                                    children: (0, A.jsx)(J, {
                                        guildId: _,
                                        selectedPriceTier: eb,
                                        setPriceTier: ev
                                    })
                                }),
                                (0, A.jsxs)(u.xJW, {
                                    title: B.NW.string(B.t['sqXj6+']),
                                    tag: 'label',
                                    error: null == eX ? void 0 : eX.getFirstFieldErrorMessage('image'),
                                    titleClassName: R.thumbnailLabel,
                                    children: [
                                        (0, A.jsx)(u.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: B.NW.string(B.t.yOU4Vl)
                                        }),
                                        (0, A.jsx)(u.LZC, { size: 10 }),
                                        (0, A.jsx)(z.Z, {
                                            presetImages: W.M,
                                            radioGroupAriaLabel: B.NW.string(B.t.fKzQj4),
                                            image: eC,
                                            imageName: ex,
                                            savedImageName: null == eo ? void 0 : null === (o = eo.image_asset) || void 0 === o ? void 0 : o.filename,
                                            onChange: (e, t) => {
                                                if (null != e) {
                                                    var r;
                                                    eq(e), ej(t), eO(e.startsWith('data:') || t !== (null == eo ? void 0 : null === (r = eo.image_asset) || void 0 === r ? void 0 : r.filename));
                                                }
                                            }
                                        })
                                    ]
                                }),
                                ey
                                    ? (0, A.jsx)(u.xJW, {
                                          title: B.NW.string(B.t.zLrtkJ),
                                          error: null == eX ? void 0 : eX.getFirstFieldErrorMessage('attachments'),
                                          children: (0, A.jsx)(T.s, {
                                              onFileAdded: () => {
                                                  var e;
                                                  null === (e = e3.current) ||
                                                      void 0 === e ||
                                                      e.scrollIntoView({
                                                          behavior: 'smooth',
                                                          block: 'end'
                                                      });
                                              }
                                          })
                                      })
                                    : null,
                                eR
                                    ? (0, A.jsx)(w.ZP, {
                                          error: null !== (M = null == eX ? void 0 : eX.getFirstFieldErrorMessage(y.NB)) && void 0 !== M ? M : void 0,
                                          newRoleParams: ek,
                                          setNewRoleParams: eB,
                                          guildId: _,
                                          listingRoleId: eQ,
                                          productId: eA
                                      })
                                    : null
                            ]
                        })
                    }),
                    (0, A.jsx)('div', { className: R.horizontalSeparator }),
                    (0, A.jsx)(u.zJl, {
                        children: (0, A.jsxs)('div', {
                            className: R.productPreview,
                            children: [
                                (0, A.jsx)(X.Z, {
                                    disabled: !e$,
                                    disabledTooltip: ea ? B.NW.string(B.t['0NQ00t']) : B.NW.string(B.t['Ax89/f']),
                                    published: ea,
                                    onClick: () => {
                                        i()(e$, 'Attempting to publish/unpublish when not allowed'), eY(ea ? 'unpublish' : 'publish'), e9(E(L({}, eH), { published: !ea }));
                                    },
                                    submitting: ew
                                }),
                                (0, A.jsx)('div', { className: R.verticalSeparator }),
                                (0, A.jsx)(u.X6q, {
                                    variant: 'text-xs/bold',
                                    color: 'header-secondary',
                                    className: R.previewHeading,
                                    children: B.NW.string(B.t['6I7nQU'])
                                }),
                                (0, A.jsx)(u.LZC, { size: 4 }),
                                (0, A.jsx)(u.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: B.NW.string(B.t.Oq4dfX)
                                }),
                                (0, A.jsx)(u.LZC, { size: 16 }),
                                (0, A.jsx)(I.Z, {
                                    imageUrl: eC,
                                    name: '' === eg ? B.NW.string(B.t.EmqIws) : eg,
                                    description: '' === em ? B.NW.string(B.t['11NA2N']) : em,
                                    formattedPrice: eV,
                                    role: eL,
                                    productType: eE,
                                    ctaComponent: (0, A.jsx)(u.gtL, {
                                        shineSize: u.gtL.ShineSizes.SMALL,
                                        pauseAnimation: es || !ed,
                                        className: R.productPreviewCtaButton,
                                        children: B.NW.string(B.t.xUi3BA)
                                    }),
                                    cardWidth: 340,
                                    thumbnailHeight: 190
                                })
                            ]
                        })
                    })
                ]
            }),
            (0, A.jsx)(u.mzw, {
                children: (0, A.jsxs)('div', {
                    className: R.footerActionButtons,
                    children: [
                        (0, A.jsxs)('div', {
                            className: R.footerActionLeftButtons,
                            children: [
                                (0, A.jsx)(H, {
                                    text: B.NW.string(B.t.YzGIVF),
                                    value: eR,
                                    onChange: (e) => {
                                        e ? eB((0, w.YP)()) : eB(void 0);
                                    },
                                    warning: null === ek ? (0, A.jsx)(w.aN, {}) : void 0,
                                    disabled: null != eQ
                                }),
                                (0, A.jsx)(H, {
                                    text: B.NW.string(B.t.C6wP2d),
                                    value: ey,
                                    onChange: (e) => {
                                        e
                                            ? eW(!0)
                                            : eK
                                              ? (0, u.ZDy)(async () => {
                                                    let { ConfirmModal: e } = await Promise.resolve().then(r.bind(r, 481060));
                                                    return (t) =>
                                                        (0, A.jsx)(
                                                            e,
                                                            E(L({}, t), {
                                                                header: B.NW.string(B.t['2Wihyc']),
                                                                confirmText: B.NW.string(B.t.N86XcH),
                                                                cancelText: B.NW.string(B.t['ETE/oK']),
                                                                onConfirm: eD,
                                                                children: (0, A.jsx)(u.Text, {
                                                                    variant: 'text-md/normal',
                                                                    children: B.NW.string(B.t.ixRBLi)
                                                                })
                                                            })
                                                        );
                                                })
                                              : eD();
                                    },
                                    disabled: ez
                                })
                            ]
                        }),
                        (0, A.jsx)('div', {
                            className: R.footerActionRightButtons,
                            children: ea
                                ? (0, A.jsx)(u.zxk, {
                                      color: u.zxk.Colors.PRIMARY,
                                      disabled: !e_,
                                      submitting: eS,
                                      onClick: () => {
                                          i()(e_, 'cannot save changes for published product without adding all fields'), eY('update_publish'), e9(eH);
                                      },
                                      children: B.NW.string(B.t.XYBEaW)
                                  })
                                : (0, A.jsx)(u.zxk, {
                                      color: u.zxk.Colors.PRIMARY,
                                      disabled: !eJ,
                                      submitting: eS,
                                      onClick: () => {
                                          i()(eJ, 'cannot save changes without name or price tier'), eY('draft'), e9(eH);
                                      },
                                      children: B.NW.string(B.t.ZCjwoa)
                                  })
                        })
                    ]
                })
            }),
            (0, A.jsx)(d.W, {
                component: 'div',
                className: R.successNoticeContainer,
                children: e0
            })
        ]
    });
}
function $(e) {
    var t;
    return (0, A.jsx)(P.W, {
        guildId: e.guildId,
        editSkuId: null !== (t = e.productId) && void 0 !== t ? t : void 0,
        onFileSizeError: () => (0, q.Z)(S.ve),
        children: (0, A.jsx)(_, L({}, e))
    });
}
