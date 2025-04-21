r.d(t, { default: () => $ }), r(388685), r(953529);
var n = r(200651),
    A = r(192379),
    a = r(120356),
    l = r.n(a),
    o = r(512722),
    i = r.n(o),
    s = r(831209),
    c = r(399606),
    d = r(215569),
    u = r(481060),
    g = r(749210),
    f = r(852860),
    p = r(607070),
    m = r(725803),
    h = r(313201),
    b = r(76535),
    v = r(215388),
    C = r(674180),
    q = r(884858),
    x = r(695346),
    j = r(430824),
    O = r(937615),
    U = r(73346),
    P = r(506071),
    V = r(587123),
    N = r(240864),
    y = r(863663),
    I = r(923400),
    T = r(623488),
    F = r(152980),
    Z = r(120651),
    K = r(871388),
    W = r(412110),
    z = r(513669),
    X = r(972797),
    S = r(943516),
    w = r(302463),
    k = r(981631),
    Q = r(674563),
    R = r(388032),
    B = r(858705);
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
let E = (0, h.hQ)(),
    G = (0, h.hQ)(),
    Y = (0, h.hQ)();
function H(e) {
    let { text: t, onChange: r, value: A, disabled: a, warning: o } = e,
        i = (0, h.Dt)(),
        s = a ? 'text-muted' : 'text-normal';
    return (0, n.jsxs)('label', {
        className: l()(B.benefitToggleContainer, { [B.disabled]: a }),
        htmlFor: i,
        children: [
            (0, n.jsx)(u.Text, {
                variant: 'text-sm/medium',
                color: s,
                children: t
            }),
            null != o &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(u.LZC, {
                            size: 4,
                            horizontal: !0
                        }),
                        o
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
        { priceTiers: l } = (0, b.R)(t, k.RG5.GUILD_PRODUCTS),
        o = A.useMemo(
            () =>
                (null != l ? l : null != r ? [r] : []).map((e) => ({
                    value: e,
                    label: (0, O.T4)(e, k.pKx.USD)
                })),
            [l, r]
        );
    return (0, n.jsx)(u.VcW, {
        value: r,
        placeholder: R.intl.string(R.t.aI4J5O),
        maxVisibleItems: 5,
        options: o,
        onChange: a,
        filter: M,
        'aria-required': !0
    });
}
function _(e) {
    var t, a, l, o, h, b, q, M;
    let { guildId: _, productId: ee, transitionState: et, onClose: er } = e,
        [en, eA] = A.useState(ee),
        ea = (0, c.e7)([N.Z], () => (null == en ? null : N.Z.getGuildProduct(en)), [en]),
        el = (null == ea ? void 0 : ea.published) === !0,
        { application: eo } = (0, m.Z)(_, Q.wW.GUILD_ROLE_SUBSCRIPTIONS),
        ei = I.M['0'],
        es = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        ec = x.QK.useSetting(),
        ed = (0, P.n)(),
        eu = A.useCallback(() => {
            var e;
            return (null == ea || null == (e = ea.image_asset) ? void 0 : e.application_id) == null ? ei.data : (0, U._W)(ea.image_asset.application_id, ea.image_asset, 600, ed && ec ? void 0 : 'webp');
        }, [ei, ea, ed, ec]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: eg } = (0, C.gX)(_);
    A.useEffect(() => {
        eg && (er(), (0, K.B)(R.intl.string(R.t.OLf3xs), R.t['90LBVl']));
    }, [eg, er]);
    let [ef, ep] = A.useState(null != (l = null == ea ? void 0 : ea.name) ? l : ''),
        [em, eh] = A.useState(null != (o = null == ea ? void 0 : ea.description) ? o : ''),
        [eb, ev] = A.useState(null != (h = null == ea ? void 0 : ea.price_tier) ? h : void 0),
        [eC, eq] = A.useState(eu),
        [ex, ej] = A.useState(null != (b = null == ea || null == (t = ea.image_asset) ? void 0 : t.filename) ? b : ei.name),
        [eO, eU] = A.useState(!1),
        [eP, eV] = A.useState(),
        eN = A.useMemo(() => (null != eb ? (0, O.T4)(eb, k.pKx.USD) : void 0), [eb]),
        [ey, eI] = A.useState(!0),
        { changesSaving: eT, saveError: eF, saveProductWithAttachments: eZ, hasUnsavedAttachmentChanges: eK, cancelUnusedUploads: eW } = (0, V.P)(),
        ez = (null == ea ? void 0 : ea.attachments) != null && (null == ea ? void 0 : ea.attachments.length) > 0,
        eX = null != eF ? eF : eP,
        eS = null != eT && 'published' in eT,
        ew = null != eT && !eS,
        ek = null != (q = null == ea ? void 0 : ea.role_id) ? q : null,
        [eQ, eR] = A.useState(),
        eB = null != eQ || null != ek,
        eL = (0, c.e7)([j.Z], () => (null != ek && null !== eQ ? j.Z.getRole(_, ek) : null != eQ ? eQ : void 0), [eQ, ek, _]),
        eD = '';
    eB && ey ? (eD = R.intl.string(R.t.ih4QMT)) : eB ? (eD = R.intl.string(R.t.o9xphY)) : ey && (eD = R.intl.string(R.t.DWYJub));
    let eE = () => {
            eI(!1), eW();
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
                (0, y.fG)({
                    guildProductListing: ea,
                    name: ef,
                    priceTier: eb,
                    description: em,
                    image: eC,
                    imageName: ex,
                    isImageChanged: eO,
                    newRoleParams: eQ,
                    hasSavedAttachments: ez,
                    hasUnsavedAttachmentChanges: eK
                }),
            [ea, ef, eb, em, eC, ex, eO, eQ, ez, eK]
        ),
        e0 = A.useMemo(
            () =>
                eM || null == eG || 'publish' === eG || null != eX
                    ? null
                    : (0, n.jsx)(u.oXn, {
                          className: B.successNotice,
                          children: (0, n.jsx)(f.Z, {
                              message: (0, n.jsxs)('div', {
                                  className: B.successNoticeMessage,
                                  children: [
                                      (0, n.jsx)(u.owK, {
                                          size: 'md',
                                          color: s.Z.BUTTON_POSITIVE_BACKGROUND,
                                          secondaryColor: s.Z.WHITE
                                      }),
                                      (0, n.jsx)(u.Text, {
                                          variant: 'text-md/medium',
                                          children: 'draft' === eG ? R.intl.string(R.t['3Rv4MD']) : 'update_publish' === eG ? R.intl.string(R.t['8fPiBw']) : R.intl.string(R.t['3LUFnJ'])
                                      })
                                  ]
                              }),
                              onReset: () => eY(void 0),
                              onResetText: R.intl.string(R.t.T6QuWV)
                          })
                      }),
            [eX, eM, eG]
        ),
        e1 = A.useCallback(() => {
            eM
                ? (0, Z.Z)({
                      title: R.intl.string(R.t.FVDhIS),
                      body: R.intl.string(R.t.Hgdhwc),
                      cta: R.intl.string(R.t.h0bti4),
                      closeLabel: R.intl.string(R.t['+WYo0t']),
                      onConfirm: () => {
                          er();
                      }
                  })
                : er();
        }, [er, eM]);
    A.useEffect(() => {
        (0, u.oav)(
            w.Yz,
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
        let t = (0, y.pM)({ newRoleParams: eQ });
        if ((eV(t), null != t)) return;
        let r = await eZ(e);
        if ((eU(!1), null != r)) {
            if ((null != e.name && ep(r.name), null != e.description && eh(r.description), null != eQ)) {
                let e = r.role_id;
                i()(null != e, 'Cannot update role without role ID'), await g.Z.updateRole(_, e, eQ);
            }
            eR(void 0), eA(r.id), 'published' in e && !0 === e.published && er();
        }
    };
    A.useEffect(() => {
        if (null != eX) {
            var e;
            (0, W.V)(eX, _, null == eo || null == (e = eo.team) ? void 0 : e.id);
        }
    }, [eX, _, eo]),
        A.useEffect(() => {
            eM && eY(void 0);
        }, [eM]);
    let e9 = A.useRef(null);
    return (0, n.jsxs)(u.Y0X, {
        transitionState: et,
        size: u.CgR.DYNAMIC,
        className: B.modalRoot,
        'aria-labelledby': E,
        children: [
            (0, n.jsxs)(u.xBx, {
                className: B.modalHeader,
                separator: !1,
                children: [
                    (0, n.jsxs)('div', {
                        className: B.headerText,
                        children: [
                            (0, n.jsx)(u.X6q, {
                                id: E,
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: R.intl.string(R.t.DnNl1d)
                            }),
                            (0, n.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: R.intl.string(R.t['Tu7f+f'])
                            })
                        ]
                    }),
                    (0, n.jsx)(u.olH, {
                        onClick: e1,
                        className: B.__invalid_modalCloseButton
                    })
                ]
            }),
            (0, n.jsxs)(u.hzk, {
                className: B.modalContent,
                scrollbarType: 'none',
                children: [
                    (0, n.jsx)(u.zJl, {
                        children: (0, n.jsxs)('div', {
                            className: B.productFieldsSection,
                            ref: e9,
                            children: [
                                (0, n.jsx)(u.xJW, {
                                    title: R.intl.string(R.t.Hsk7xc),
                                    tag: 'label',
                                    htmlFor: G,
                                    error: null == eX ? void 0 : eX.getFirstFieldErrorMessage('name'),
                                    children: (0, n.jsx)(u.Kx8, {
                                        value: ef,
                                        onChange: ep,
                                        id: G,
                                        maxLength: 100,
                                        placeholder: R.intl.string(R.t['/BiYSE']),
                                        rows: 1,
                                        autosize: !0,
                                        showCharacterCount: ef.length > 0,
                                        showRemainingCharacterCount: ef.length > 0,
                                        required: !0,
                                        className: ef.length > 0 ? B.nameArea : void 0
                                    })
                                }),
                                (0, n.jsx)(u.xJW, {
                                    title: R.intl.string(R.t.QdKLyc),
                                    tag: 'label',
                                    error: null == eX ? void 0 : eX.getFirstFieldErrorMessage('description'),
                                    htmlFor: Y,
                                    children: (0, n.jsx)(v.Z, {
                                        id: Y,
                                        className: B.descriptionArea,
                                        value: em,
                                        onChange: eh,
                                        maxLength: 1500,
                                        placeholder: R.intl.string(R.t.BFwyur),
                                        showCharacterCount: em.length > 0,
                                        parentModalKey: w.Yz,
                                        required: !0
                                    })
                                }),
                                (0, n.jsx)(u.xJW, {
                                    title: R.intl.string(R.t['CAY/vr']),
                                    tag: 'label',
                                    error: null == eX ? void 0 : eX.getFirstFieldErrorMessage('price_tier'),
                                    children: (0, n.jsx)(J, {
                                        guildId: _,
                                        selectedPriceTier: eb,
                                        setPriceTier: ev
                                    })
                                }),
                                (0, n.jsxs)(u.xJW, {
                                    title: R.intl.string(R.t['sqXj6+']),
                                    tag: 'label',
                                    error: null == eX ? void 0 : eX.getFirstFieldErrorMessage('image'),
                                    titleClassName: B.thumbnailLabel,
                                    children: [
                                        (0, n.jsx)(u.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: R.intl.string(R.t.yOU4Vl)
                                        }),
                                        (0, n.jsx)(u.LZC, { size: 10 }),
                                        (0, n.jsx)(z.Z, {
                                            presetImages: I.M,
                                            radioGroupAriaLabel: R.intl.string(R.t.fKzQj4),
                                            image: eC,
                                            imageName: ex,
                                            savedImageName: null == ea || null == (a = ea.image_asset) ? void 0 : a.filename,
                                            onChange: (e, t) => {
                                                if (null != e) {
                                                    var r;
                                                    eq(e), ej(t), eU(e.startsWith('data:') || t !== (null == ea || null == (r = ea.image_asset) ? void 0 : r.filename));
                                                }
                                            }
                                        })
                                    ]
                                }),
                                ey
                                    ? (0, n.jsx)(u.xJW, {
                                          title: R.intl.string(R.t.zLrtkJ),
                                          error: null == eX ? void 0 : eX.getFirstFieldErrorMessage('attachments'),
                                          children: (0, n.jsx)(F.s, {
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
                                eB
                                    ? (0, n.jsx)(S.ZP, {
                                          error: null != (M = null == eX ? void 0 : eX.getFirstFieldErrorMessage(y.NB)) ? M : void 0,
                                          newRoleParams: eQ,
                                          setNewRoleParams: eR,
                                          guildId: _,
                                          listingRoleId: ek,
                                          productId: en
                                      })
                                    : null
                            ]
                        })
                    }),
                    (0, n.jsx)('div', { className: B.horizontalSeparator }),
                    (0, n.jsx)(u.zJl, {
                        children: (0, n.jsxs)('div', {
                            className: B.productPreview,
                            children: [
                                (0, n.jsx)(X.Z, {
                                    disabled: !e$,
                                    disabledTooltip: el ? R.intl.string(R.t['0NQ00t']) : R.intl.string(R.t['Ax89/f']),
                                    published: el,
                                    onClick: () => {
                                        i()(e$, 'Attempting to publish/unpublish when not allowed'), eY(el ? 'unpublish' : 'publish'), e3(D(L({}, eH), { published: !el }));
                                    },
                                    submitting: eS
                                }),
                                (0, n.jsx)('div', { className: B.verticalSeparator }),
                                (0, n.jsx)(u.X6q, {
                                    variant: 'text-xs/bold',
                                    color: 'header-secondary',
                                    className: B.previewHeading,
                                    children: R.intl.string(R.t['6I7nQU'])
                                }),
                                (0, n.jsx)(u.LZC, { size: 4 }),
                                (0, n.jsx)(u.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: R.intl.string(R.t.Oq4dfX)
                                }),
                                (0, n.jsx)(u.LZC, { size: 16 }),
                                (0, n.jsx)(T.Z, {
                                    imageUrl: eC,
                                    name: '' === ef ? R.intl.string(R.t.EmqIws) : ef,
                                    description: '' === em ? R.intl.string(R.t['11NA2N']) : em,
                                    formattedPrice: eN,
                                    role: eL,
                                    productType: eD,
                                    ctaComponent: (0, n.jsx)(u.gtL, {
                                        shineSize: u.gtL.ShineSizes.SMALL,
                                        pauseAnimation: es || !ed,
                                        className: B.productPreviewCtaButton,
                                        children: R.intl.string(R.t.xUi3BA)
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
                    className: B.footerActionButtons,
                    children: [
                        (0, n.jsxs)('div', {
                            className: B.footerActionLeftButtons,
                            children: [
                                (0, n.jsx)(H, {
                                    text: R.intl.string(R.t.YzGIVF),
                                    value: eB,
                                    onChange: (e) => {
                                        e ? eR((0, S.YP)()) : eR(void 0);
                                    },
                                    warning: null === eQ ? (0, n.jsx)(S.aN, {}) : void 0,
                                    disabled: null != ek
                                }),
                                (0, n.jsx)(H, {
                                    text: R.intl.string(R.t.C6wP2d),
                                    value: ey,
                                    onChange: (e) => {
                                        e
                                            ? eI(!0)
                                            : eK
                                              ? (0, u.ZDy)(async () => {
                                                    let { ConfirmModal: e } = await Promise.resolve().then(r.bind(r, 481060));
                                                    return (t) =>
                                                        (0, n.jsx)(
                                                            e,
                                                            D(L({}, t), {
                                                                header: R.intl.string(R.t['2Wihyc']),
                                                                confirmText: R.intl.string(R.t.N86XcH),
                                                                cancelText: R.intl.string(R.t['ETE/oK']),
                                                                onConfirm: eE,
                                                                children: (0, n.jsx)(u.Text, {
                                                                    variant: 'text-md/normal',
                                                                    children: R.intl.string(R.t.ixRBLi)
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
                            className: B.footerActionRightButtons,
                            children: el
                                ? (0, n.jsx)(u.zxk, {
                                      color: u.zxk.Colors.PRIMARY,
                                      disabled: !e_,
                                      submitting: ew,
                                      onClick: () => {
                                          i()(e_, 'cannot save changes for published product without adding all fields'), eY('update_publish'), e3(eH);
                                      },
                                      children: R.intl.string(R.t.XYBEaW)
                                  })
                                : (0, n.jsx)(u.zxk, {
                                      color: u.zxk.Colors.PRIMARY,
                                      disabled: !eJ,
                                      submitting: ew,
                                      onClick: () => {
                                          i()(eJ, 'cannot save changes without name or price tier'), eY('draft'), e3(eH);
                                      },
                                      children: R.intl.string(R.t.ZCjwoa)
                                  })
                        })
                    ]
                })
            }),
            (0, n.jsx)(d.W, {
                component: 'div',
                className: B.successNoticeContainer,
                children: e0
            })
        ]
    });
}
function $(e) {
    var t;
    return (0, n.jsx)(V.W, {
        guildId: e.guildId,
        editSkuId: null != (t = e.productId) ? t : void 0,
        onFileSizeError: () => (0, q.Z)(w.ve),
        children: (0, n.jsx)(_, L({}, e))
    });
}
