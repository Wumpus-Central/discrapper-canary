r.d(t, { default: () => $ }), r(47120), r(266796);
var n = r(200651),
    A = r(192379),
    a = r(120356),
    o = r.n(a),
    l = r(512722),
    i = r.n(l),
    s = r(831209),
    c = r(399606),
    d = r(215569),
    u = r(481060),
    g = r(749210),
    f = r(852860),
    p = r(607070),
    h = r(725803),
    m = r(313201),
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
    y = r(240864),
    V = r(863663),
    W = r(923400),
    I = r(623488),
    T = r(152980),
    F = r(120651),
    Z = r(871388),
    K = r(412110),
    z = r(513669),
    w = r(972797),
    X = r(943516),
    S = r(302463),
    k = r(981631),
    Q = r(674563),
    B = r(388032),
    R = r(858705);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let E = (0, m.hQ)(),
    G = (0, m.hQ)(),
    Y = (0, m.hQ)();
function H(e) {
    let { text: t, onChange: r, value: A, disabled: a, warning: l } = e,
        i = (0, m.Dt)(),
        s = a ? 'text-muted' : 'text-normal';
    return (0, n.jsxs)('label', {
        className: o()(R.benefitToggleContainer, { [R.disabled]: a }),
        htmlFor: i,
        children: [
            (0, n.jsx)(u.Text, {
                variant: 'text-sm/medium',
                color: s,
                children: t
            }),
            null != l &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(u.LZC, {
                            size: 4,
                            horizontal: !0
                        }),
                        l
                    ]
                }),
            (0, n.jsx)(u.LZC, {
                size: 16,
                horizontal: !0
            }),
            (0, n.jsx)(u.rsf, {
                onChange: r,
                checked: A,
                disabled: a,
                id: i
            })
        ]
    });
}
function M(e, t) {
    return e.filter((e) => {
        let { value: r, label: n } = e;
        return r.toString().includes(t) || n.includes(t);
    });
}
function J(e) {
    let { guildId: t, selectedPriceTier: r, setPriceTier: a } = e,
        { priceTiers: o } = (0, b.R)(t, k.RG5.GUILD_PRODUCTS),
        l = A.useMemo(
            () =>
                (null != o ? o : null != r ? [r] : []).map((e) => ({
                    value: e,
                    label: (0, N.T4)(e, k.pKx.USD)
                })),
            [o, r]
        );
    return (0, n.jsx)(u.VcW, {
        value: r,
        placeholder: B.NW.string(B.t.aI4J5O),
        maxVisibleItems: 5,
        options: l,
        onChange: a,
        filter: M,
        'aria-required': !0
    });
}
function _(e) {
    var t, a, o, l, m, b, q, M;
    let { guildId: _, productId: ee, transitionState: et, onClose: er } = e,
        [en, eA] = A.useState(ee),
        ea = (0, c.e7)([y.Z], () => (null == en ? null : y.Z.getGuildProduct(en)), [en]),
        eo = (null == ea ? void 0 : ea.published) === !0,
        { application: el } = (0, h.Z)(_, Q.wW.GUILD_ROLE_SUBSCRIPTIONS),
        ei = W.M['0'],
        es = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        ec = x.QK.useSetting(),
        ed = (0, U.n)(),
        eu = A.useCallback(() => {
            var e;
            return (null == ea || null == (e = ea.image_asset) ? void 0 : e.application_id) == null ? ei.data : (0, O._W)(ea.image_asset.application_id, ea.image_asset, 600, ed && ec ? void 0 : 'webp');
        }, [ei, ea, ed, ec]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: eg } = (0, C.gX)(_);
    A.useEffect(() => {
        eg && (er(), (0, Z.B)(B.NW.string(B.t.OLf3xs), B.t['90LBVl']));
    }, [eg, er]);
    let [ef, ep] = A.useState(null != (o = null == ea ? void 0 : ea.name) ? o : ''),
        [eh, em] = A.useState(null != (l = null == ea ? void 0 : ea.description) ? l : ''),
        [eb, ev] = A.useState(null != (m = null == ea ? void 0 : ea.price_tier) ? m : void 0),
        [eC, eq] = A.useState(eu),
        [ex, ej] = A.useState(null != (b = null == ea || null == (t = ea.image_asset) ? void 0 : t.filename) ? b : ei.name),
        [eN, eO] = A.useState(!1),
        [eU, eP] = A.useState(),
        ey = A.useMemo(() => (null != eb ? (0, N.T4)(eb, k.pKx.USD) : void 0), [eb]),
        [eV, eW] = A.useState(!0),
        { changesSaving: eI, saveError: eT, saveProductWithAttachments: eF, hasUnsavedAttachmentChanges: eZ, cancelUnusedUploads: eK } = (0, P.P)(),
        ez = (null == ea ? void 0 : ea.attachments) != null && (null == ea ? void 0 : ea.attachments.length) > 0,
        ew = null != eT ? eT : eU,
        eX = null != eI && 'published' in eI,
        eS = null != eI && !eX,
        ek = null != (q = null == ea ? void 0 : ea.role_id) ? q : null,
        [eQ, eB] = A.useState(),
        eR = null != eQ || null != ek,
        eL = (0, c.e7)([j.Z], () => (null != ek && null !== eQ ? j.Z.getRole(_, ek) : null != eQ ? eQ : void 0), [eQ, ek, _]),
        eD = '';
    eR && eV ? (eD = B.NW.string(B.t.ih4QMT)) : eR ? (eD = B.NW.string(B.t.o9xphY)) : eV && (eD = B.NW.string(B.t.DWYJub));
    let eE = () => {
            eW(!1), eK();
        },
        [eG, eY] = A.useState(),
        {
            changes: eH,
            hasUnsavedChanges: eM,
            canSaveForDraft: eJ,
            canSaveForPublished: e_,
            canPublishOrUnpublish: e$
        } = A.useMemo(
            () =>
                (0, V.fG)({
                    guildProductListing: ea,
                    name: ef,
                    priceTier: eb,
                    description: eh,
                    image: eC,
                    imageName: ex,
                    isImageChanged: eN,
                    newRoleParams: eQ,
                    hasSavedAttachments: ez,
                    hasUnsavedAttachmentChanges: eZ
                }),
            [ea, ef, eb, eh, eC, ex, eN, eQ, ez, eZ]
        ),
        e0 = A.useMemo(
            () =>
                eM || null == eG || 'publish' === eG || null != ew
                    ? null
                    : (0, n.jsx)(u.oXn, {
                          className: R.successNotice,
                          children: (0, n.jsx)(f.Z, {
                              message: (0, n.jsxs)('div', {
                                  className: R.successNoticeMessage,
                                  children: [
                                      (0, n.jsx)(u.owK, {
                                          size: 'md',
                                          color: s.Z.BUTTON_POSITIVE_BACKGROUND,
                                          secondaryColor: s.Z.WHITE
                                      }),
                                      (0, n.jsx)(u.Text, {
                                          variant: 'text-md/medium',
                                          children: 'draft' === eG ? B.NW.string(B.t['3Rv4MD']) : 'update_publish' === eG ? B.NW.string(B.t['8fPiBw']) : B.NW.string(B.t['3LUFnJ'])
                                      })
                                  ]
                              }),
                              onReset: () => eY(void 0),
                              onResetText: B.NW.string(B.t.T6QuWV)
                          })
                      }),
            [ew, eM, eG]
        ),
        e1 = A.useCallback(() => {
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
    A.useEffect(() => {
        (0, u.oav)(
            S.Yz,
            (e) =>
                (0, n.jsx)(
                    $,
                    L(
                        {
                            guildId: _,
                            productId: en
                        },
                        e
                    )
                ),
            e1
        );
    }, [_, e1, en]);
    let e3 = async (e) => {
        let t = (0, V.pM)({ newRoleParams: eQ });
        if ((eP(t), null != t)) return;
        let r = await eF(e);
        if ((eO(!1), null != r)) {
            if ((null != e.name && ep(r.name), null != e.description && em(r.description), null != eQ)) {
                let e = r.role_id;
                i()(null != e, 'Cannot update role without role ID'), await g.Z.updateRole(_, e, eQ);
            }
            eB(void 0), eA(r.id), 'published' in e && !0 === e.published && er();
        }
    };
    A.useEffect(() => {
        if (null != ew) {
            var e;
            (0, K.V)(ew, _, null == el || null == (e = el.team) ? void 0 : e.id);
        }
    }, [ew, _, el]),
        A.useEffect(() => {
            eM && eY(void 0);
        }, [eM]);
    let e9 = A.useRef(null);
    return (0, n.jsxs)(u.Y0X, {
        transitionState: et,
        size: u.CgR.DYNAMIC,
        className: R.modalRoot,
        'aria-labelledby': E,
        children: [
            (0, n.jsxs)(u.xBx, {
                className: R.modalHeader,
                separator: !1,
                children: [
                    (0, n.jsxs)('div', {
                        className: R.headerText,
                        children: [
                            (0, n.jsx)(u.X6q, {
                                id: E,
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: B.NW.string(B.t.DnNl1d)
                            }),
                            (0, n.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: B.NW.string(B.t['Tu7f+f'])
                            })
                        ]
                    }),
                    (0, n.jsx)(u.olH, {
                        onClick: e1,
                        className: R.__invalid_modalCloseButton
                    })
                ]
            }),
            (0, n.jsxs)(u.hzk, {
                className: R.modalContent,
                scrollbarType: 'none',
                children: [
                    (0, n.jsx)(u.zJl, {
                        children: (0, n.jsxs)('div', {
                            className: R.productFieldsSection,
                            ref: e9,
                            children: [
                                (0, n.jsx)(u.xJW, {
                                    title: B.NW.string(B.t.Hsk7xc),
                                    tag: 'label',
                                    htmlFor: G,
                                    error: null == ew ? void 0 : ew.getFirstFieldErrorMessage('name'),
                                    children: (0, n.jsx)(u.Kx8, {
                                        value: ef,
                                        onChange: ep,
                                        id: G,
                                        maxLength: 100,
                                        placeholder: B.NW.string(B.t['/BiYSE']),
                                        rows: 1,
                                        autosize: !0,
                                        showCharacterCount: ef.length > 0,
                                        showRemainingCharacterCount: ef.length > 0,
                                        required: !0,
                                        className: ef.length > 0 ? R.nameArea : void 0
                                    })
                                }),
                                (0, n.jsx)(u.xJW, {
                                    title: B.NW.string(B.t.QdKLyc),
                                    tag: 'label',
                                    error: null == ew ? void 0 : ew.getFirstFieldErrorMessage('description'),
                                    htmlFor: Y,
                                    children: (0, n.jsx)(v.Z, {
                                        id: Y,
                                        className: R.descriptionArea,
                                        value: eh,
                                        onChange: em,
                                        maxLength: 1500,
                                        placeholder: B.NW.string(B.t.BFwyur),
                                        showCharacterCount: eh.length > 0,
                                        parentModalKey: S.Yz,
                                        required: !0
                                    })
                                }),
                                (0, n.jsx)(u.xJW, {
                                    title: B.NW.string(B.t['CAY/vr']),
                                    tag: 'label',
                                    error: null == ew ? void 0 : ew.getFirstFieldErrorMessage('price_tier'),
                                    children: (0, n.jsx)(J, {
                                        guildId: _,
                                        selectedPriceTier: eb,
                                        setPriceTier: ev
                                    })
                                }),
                                (0, n.jsxs)(u.xJW, {
                                    title: B.NW.string(B.t['sqXj6+']),
                                    tag: 'label',
                                    error: null == ew ? void 0 : ew.getFirstFieldErrorMessage('image'),
                                    titleClassName: R.thumbnailLabel,
                                    children: [
                                        (0, n.jsx)(u.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: B.NW.string(B.t.yOU4Vl)
                                        }),
                                        (0, n.jsx)(u.LZC, { size: 10 }),
                                        (0, n.jsx)(z.Z, {
                                            presetImages: W.M,
                                            radioGroupAriaLabel: B.NW.string(B.t.fKzQj4),
                                            image: eC,
                                            imageName: ex,
                                            savedImageName: null == ea || null == (a = ea.image_asset) ? void 0 : a.filename,
                                            onChange: (e, t) => {
                                                if (null != e) {
                                                    var r;
                                                    eq(e), ej(t), eO(e.startsWith('data:') || t !== (null == ea || null == (r = ea.image_asset) ? void 0 : r.filename));
                                                }
                                            }
                                        })
                                    ]
                                }),
                                eV
                                    ? (0, n.jsx)(u.xJW, {
                                          title: B.NW.string(B.t.zLrtkJ),
                                          error: null == ew ? void 0 : ew.getFirstFieldErrorMessage('attachments'),
                                          children: (0, n.jsx)(T.s, {
                                              onFileAdded: () => {
                                                  var e;
                                                  null == (e = e9.current) ||
                                                      e.scrollIntoView({
                                                          behavior: 'smooth',
                                                          block: 'end'
                                                      });
                                              }
                                          })
                                      })
                                    : null,
                                eR
                                    ? (0, n.jsx)(X.ZP, {
                                          error: null != (M = null == ew ? void 0 : ew.getFirstFieldErrorMessage(V.NB)) ? M : void 0,
                                          newRoleParams: eQ,
                                          setNewRoleParams: eB,
                                          guildId: _,
                                          listingRoleId: ek,
                                          productId: en
                                      })
                                    : null
                            ]
                        })
                    }),
                    (0, n.jsx)('div', { className: R.horizontalSeparator }),
                    (0, n.jsx)(u.zJl, {
                        children: (0, n.jsxs)('div', {
                            className: R.productPreview,
                            children: [
                                (0, n.jsx)(w.Z, {
                                    disabled: !e$,
                                    disabledTooltip: eo ? B.NW.string(B.t['0NQ00t']) : B.NW.string(B.t['Ax89/f']),
                                    published: eo,
                                    onClick: () => {
                                        i()(e$, 'Attempting to publish/unpublish when not allowed'), eY(eo ? 'unpublish' : 'publish'), e3(D(L({}, eH), { published: !eo }));
                                    },
                                    submitting: eX
                                }),
                                (0, n.jsx)('div', { className: R.verticalSeparator }),
                                (0, n.jsx)(u.X6q, {
                                    variant: 'text-xs/bold',
                                    color: 'header-secondary',
                                    className: R.previewHeading,
                                    children: B.NW.string(B.t['6I7nQU'])
                                }),
                                (0, n.jsx)(u.LZC, { size: 4 }),
                                (0, n.jsx)(u.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: B.NW.string(B.t.Oq4dfX)
                                }),
                                (0, n.jsx)(u.LZC, { size: 16 }),
                                (0, n.jsx)(I.Z, {
                                    imageUrl: eC,
                                    name: '' === ef ? B.NW.string(B.t.EmqIws) : ef,
                                    description: '' === eh ? B.NW.string(B.t['11NA2N']) : eh,
                                    formattedPrice: ey,
                                    role: eL,
                                    productType: eD,
                                    ctaComponent: (0, n.jsx)(u.gtL, {
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
            (0, n.jsx)(u.mzw, {
                children: (0, n.jsxs)('div', {
                    className: R.footerActionButtons,
                    children: [
                        (0, n.jsxs)('div', {
                            className: R.footerActionLeftButtons,
                            children: [
                                (0, n.jsx)(H, {
                                    text: B.NW.string(B.t.YzGIVF),
                                    value: eR,
                                    onChange: (e) => {
                                        e ? eB((0, X.YP)()) : eB(void 0);
                                    },
                                    warning: null === eQ ? (0, n.jsx)(X.aN, {}) : void 0,
                                    disabled: null != ek
                                }),
                                (0, n.jsx)(H, {
                                    text: B.NW.string(B.t.C6wP2d),
                                    value: eV,
                                    onChange: (e) => {
                                        e
                                            ? eW(!0)
                                            : eZ
                                              ? (0, u.ZDy)(async () => {
                                                    let { ConfirmModal: e } = await Promise.resolve().then(r.bind(r, 481060));
                                                    return (t) =>
                                                        (0, n.jsx)(
                                                            e,
                                                            D(L({}, t), {
                                                                header: B.NW.string(B.t['2Wihyc']),
                                                                confirmText: B.NW.string(B.t.N86XcH),
                                                                cancelText: B.NW.string(B.t['ETE/oK']),
                                                                onConfirm: eE,
                                                                children: (0, n.jsx)(u.Text, {
                                                                    variant: 'text-md/normal',
                                                                    children: B.NW.string(B.t.ixRBLi)
                                                                })
                                                            })
                                                        );
                                                })
                                              : eE();
                                    },
                                    disabled: ez
                                })
                            ]
                        }),
                        (0, n.jsx)('div', {
                            className: R.footerActionRightButtons,
                            children: eo
                                ? (0, n.jsx)(u.zxk, {
                                      color: u.zxk.Colors.PRIMARY,
                                      disabled: !e_,
                                      submitting: eS,
                                      onClick: () => {
                                          i()(e_, 'cannot save changes for published product without adding all fields'), eY('update_publish'), e3(eH);
                                      },
                                      children: B.NW.string(B.t.XYBEaW)
                                  })
                                : (0, n.jsx)(u.zxk, {
                                      color: u.zxk.Colors.PRIMARY,
                                      disabled: !eJ,
                                      submitting: eS,
                                      onClick: () => {
                                          i()(eJ, 'cannot save changes without name or price tier'), eY('draft'), e3(eH);
                                      },
                                      children: B.NW.string(B.t.ZCjwoa)
                                  })
                        })
                    ]
                })
            }),
            (0, n.jsx)(d.W, {
                component: 'div',
                className: R.successNoticeContainer,
                children: e0
            })
        ]
    });
}
function $(e) {
    var t;
    return (0, n.jsx)(P.W, {
        guildId: e.guildId,
        editSkuId: null != (t = e.productId) ? t : void 0,
        onFileSizeError: () => (0, q.Z)(S.ve),
        children: (0, n.jsx)(_, L({}, e))
    });
}
