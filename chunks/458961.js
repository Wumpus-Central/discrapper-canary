(A.d(t, { default: () => ee }), A(388685), A(953529));
var n = A(255367),
    r = A(73800),
    a = A(120356),
    l = A.n(a),
    i = A(512722),
    o = A.n(i),
    s = A(831209),
    c = A(399606),
    d = A(215569),
    u = A(755721),
    f = A(481060),
    g = A(749210),
    p = A(852860),
    h = A(607070),
    m = A(725803),
    b = A(313201),
    v = A(76535),
    C = A(215388),
    q = A(674180),
    x = A(884858),
    j = A(695346),
    U = A(485386),
    O = A(937615),
    V = A(73346),
    P = A(506071),
    y = A(587123),
    N = A(240864),
    I = A(863663),
    F = A(923400),
    T = A(623488),
    K = A(152980),
    Z = A(120651),
    W = A(871388),
    X = A(412110),
    z = A(513669),
    S = A(972797),
    Q = A(943516),
    w = A(302463),
    R = A(981631),
    L = A(674563),
    k = A(388032),
    B = A(858705);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var A = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(A);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(A).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(A, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = A[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
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
let G = (0, b.hQ)(),
    Y = (0, b.hQ)(),
    H = (0, b.hQ)();
function M(e) {
    let { text: t, onChange: A, value: r, disabled: a, warning: i } = e,
        o = (0, b.Dt)(),
        s = a ? 'text-muted' : 'text-default';
    return (0, n.jsxs)('label', {
        className: l()(B.benefitToggleContainer, { [B.disabled]: a }),
        htmlFor: o,
        children: [
            (0, n.jsx)(f.Text, {
                variant: 'text-sm/medium',
                color: s,
                children: t
            }),
            null != i &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(f.LZC, {
                            size: 4,
                            horizontal: !0
                        }),
                        i
                    ]
                }),
            (0, n.jsx)(f.LZC, {
                size: 16,
                horizontal: !0
            }),
            (0, n.jsx)(f.rsf, {
                onChange: A,
                checked: r,
                disabled: a,
                id: o
            })
        ]
    });
}
function J(e, t) {
    return e.filter((e) => {
        let { value: A, label: n } = e;
        return A.toString().includes(t) || n.includes(t);
    });
}
function _(e) {
    let { guildId: t, selectedPriceTier: A, setPriceTier: a } = e,
        { priceTiers: l } = (0, v.R)(t, R.RG5.GUILD_PRODUCTS),
        i = r.useMemo(
            () =>
                (null != l ? l : null != A ? [A] : []).map((e) => ({
                    value: e,
                    label: (0, O.T4)(e, R.pKx.USD)
                })),
            [l, A]
        );
    return (0, n.jsx)(f.VcW, {
        value: A,
        placeholder: k.intl.string(k.t.aI4J5O),
        maxVisibleItems: 5,
        options: i,
        onChange: a,
        filter: J,
        'aria-required': !0
    });
}
function $(e) {
    var t, a, l, i, b, v, x, J;
    let { guildId: $, productId: et, transitionState: eA, onClose: en } = e,
        [er, ea] = r.useState(et),
        el = (0, c.e7)([N.Z], () => (null == er ? null : N.Z.getGuildProduct(er)), [er]),
        ei = (null == el ? void 0 : el.published) === !0,
        { application: eo } = (0, m.Z)($, L.wW.GUILD_ROLE_SUBSCRIPTIONS),
        es = F.M['0'],
        ec = (0, c.e7)([h.Z], () => h.Z.useReducedMotion),
        ed = j.QK.useSetting(),
        eu = (0, P.n)(),
        ef = r.useCallback(() => {
            var e;
            return (null == el || null == (e = el.image_asset) ? void 0 : e.application_id) == null ? es.data : (0, V._W)(el.image_asset.application_id, el.image_asset, 600, eu && ed ? void 0 : 'webp');
        }, [es, el, eu, ed]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: eg } = (0, q.gX)($);
    r.useEffect(() => {
        eg && (en(), (0, W.B)(k.intl.string(k.t.OLf3xs), k.t['90LBVl']));
    }, [eg, en]);
    let [ep, eh] = r.useState(null != (l = null == el ? void 0 : el.name) ? l : ''),
        [em, eb] = r.useState(null != (i = null == el ? void 0 : el.description) ? i : ''),
        [ev, eC] = r.useState(null != (b = null == el ? void 0 : el.price_tier) ? b : void 0),
        [eq, ex] = r.useState(ef),
        [ej, eU] = r.useState(null != (v = null == el || null == (t = el.image_asset) ? void 0 : t.filename) ? v : es.name),
        [eO, eV] = r.useState(!1),
        [eP, ey] = r.useState(),
        eN = r.useMemo(() => (null != ev ? (0, O.T4)(ev, R.pKx.USD) : void 0), [ev]),
        [eI, eF] = r.useState(!0),
        { changesSaving: eT, saveError: eK, saveProductWithAttachments: eZ, hasUnsavedAttachmentChanges: eW, cancelUnusedUploads: eX } = (0, y.P)(),
        ez = (null == el ? void 0 : el.attachments) != null && (null == el ? void 0 : el.attachments.length) > 0,
        eS = null != eK ? eK : eP,
        eQ = null != eT && 'published' in eT,
        ew = null != eT && !eQ,
        eR = null != (x = null == el ? void 0 : el.role_id) ? x : null,
        [eL, ek] = r.useState(),
        eB = null != eL || null != eR,
        eD = (0, c.e7)([U.Z], () => (null != eR && null !== eL ? U.Z.getRole($, eR) : null != eL ? eL : void 0), [eL, eR, $]),
        eE = '';
    eB && eI ? (eE = k.intl.string(k.t.ih4QMT)) : eB ? (eE = k.intl.string(k.t.o9xphY)) : eI && (eE = k.intl.string(k.t.DWYJub));
    let eG = () => {
            (eF(!1), eX());
        },
        [eY, eH] = r.useState(),
        {
            changes: eM,
            hasUnsavedChanges: eJ,
            canSaveForDraft: e_,
            canSaveForPublished: e$,
            canPublishOrUnpublish: e0
        } = r.useMemo(
            () =>
                (0, I.fG)({
                    guildProductListing: el,
                    name: ep,
                    priceTier: ev,
                    description: em,
                    image: eq,
                    imageName: ej,
                    isImageChanged: eO,
                    newRoleParams: eL,
                    hasSavedAttachments: ez,
                    hasUnsavedAttachmentChanges: eW
                }),
            [el, ep, ev, em, eq, ej, eO, eL, ez, eW]
        ),
        e1 = r.useMemo(
            () =>
                eJ || null == eY || 'publish' === eY || null != eS
                    ? null
                    : (0, n.jsx)(f.oXn, {
                          className: B.successNotice,
                          children: (0, n.jsx)(p.Z, {
                              message: (0, n.jsxs)('div', {
                                  className: B.successNoticeMessage,
                                  children: [
                                      (0, n.jsx)(f.owK, {
                                          size: 'md',
                                          color: s.Z.BUTTON_POSITIVE_BACKGROUND,
                                          secondaryColor: s.Z.WHITE
                                      }),
                                      (0, n.jsx)(f.Text, {
                                          variant: 'text-md/medium',
                                          children: 'draft' === eY ? k.intl.string(k.t['3Rv4MD']) : 'update_publish' === eY ? k.intl.string(k.t['8fPiBw']) : k.intl.string(k.t['3LUFnJ'])
                                      })
                                  ]
                              }),
                              onReset: () => eH(void 0),
                              onResetText: k.intl.string(k.t.T6QuWV)
                          })
                      }),
            [eS, eJ, eY]
        ),
        e3 = r.useCallback(() => {
            eJ
                ? (0, Z.Z)({
                      title: k.intl.string(k.t.FVDhIS),
                      body: k.intl.string(k.t.Hgdhwc),
                      cta: k.intl.string(k.t.h0bti4),
                      closeLabel: k.intl.string(k.t['+WYo0t']),
                      onConfirm: () => {
                          en();
                      }
                  })
                : en();
        }, [en, eJ]);
    r.useEffect(() => {
        (0, f.oav)(
            w.Yz,
            (e) =>
                (0, n.jsx)(
                    ee,
                    D(
                        {
                            guildId: $,
                            productId: er
                        },
                        e
                    )
                ),
            e3
        );
    }, [$, e3, er]);
    let e6 = async (e) => {
        let t = (0, I.pM)({ newRoleParams: eL });
        if ((ey(t), null != t)) return;
        let A = await eZ(e);
        if ((eV(!1), null != A)) {
            if ((null != e.name && eh(A.name), null != e.description && eb(A.description), null != eL)) {
                let e = A.role_id;
                (o()(null != e, 'Cannot update role without role ID'), await g.Z.updateRole($, e, eL));
            }
            (ek(void 0), ea(A.id), 'published' in e && !0 === e.published && en());
        }
    };
    (r.useEffect(() => {
        if (null != eS) {
            var e;
            (0, X.V)(eS, $, null == eo || null == (e = eo.team) ? void 0 : e.id);
        }
    }, [eS, $, eo]),
        r.useEffect(() => {
            eJ && eH(void 0);
        }, [eJ]));
    let e7 = r.useRef(null);
    return (0, n.jsxs)(f.Y0X, {
        transitionState: eA,
        size: f.CgR.DYNAMIC,
        className: B.modalRoot,
        'aria-labelledby': G,
        parentComponent: 'GuildProductEditModal',
        children: [
            (0, n.jsxs)(f.xBx, {
                className: B.modalHeader,
                separator: !1,
                children: [
                    (0, n.jsxs)('div', {
                        className: B.headerText,
                        children: [
                            (0, n.jsx)(f.X6q, {
                                id: G,
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: k.intl.string(k.t.DnNl1d)
                            }),
                            (0, n.jsx)(f.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: k.intl.string(k.t['Tu7f+f'])
                            })
                        ]
                    }),
                    (0, n.jsx)(f.olH, {
                        onClick: e3,
                        className: B.__invalid_modalCloseButton
                    })
                ]
            }),
            (0, n.jsxs)(f.hzk, {
                className: B.modalContent,
                scrollbarType: 'none',
                children: [
                    (0, n.jsx)(f.zJl, {
                        children: (0, n.jsxs)('div', {
                            className: B.productFieldsSection,
                            ref: e7,
                            children: [
                                (0, n.jsx)(f.xJW, {
                                    title: k.intl.string(k.t.Hsk7xc),
                                    tag: 'label',
                                    htmlFor: Y,
                                    error: null == eS ? void 0 : eS.getFirstFieldErrorMessage('name'),
                                    children: (0, n.jsx)(u.iS, {
                                        value: ep,
                                        onChange: eh,
                                        id: Y,
                                        maxLength: 100,
                                        placeholder: k.intl.string(k.t['/BiYSE']),
                                        rows: 1,
                                        autosize: !0,
                                        showCharacterCount: ep.length > 0,
                                        showRemainingCharacterCount: ep.length > 0,
                                        required: !0,
                                        className: ep.length > 0 ? B.nameArea : void 0
                                    })
                                }),
                                (0, n.jsx)(f.xJW, {
                                    title: k.intl.string(k.t.QdKLyc),
                                    tag: 'label',
                                    error: null == eS ? void 0 : eS.getFirstFieldErrorMessage('description'),
                                    htmlFor: H,
                                    children: (0, n.jsx)(C.Z, {
                                        id: H,
                                        className: B.descriptionArea,
                                        value: em,
                                        onChange: eb,
                                        maxLength: 1500,
                                        placeholder: k.intl.string(k.t.BFwyur),
                                        showCharacterCount: em.length > 0,
                                        parentModalKey: w.Yz,
                                        required: !0
                                    })
                                }),
                                (0, n.jsx)(f.xJW, {
                                    title: k.intl.string(k.t['CAY/vr']),
                                    tag: 'label',
                                    error: null == eS ? void 0 : eS.getFirstFieldErrorMessage('price_tier'),
                                    children: (0, n.jsx)(_, {
                                        guildId: $,
                                        selectedPriceTier: ev,
                                        setPriceTier: eC
                                    })
                                }),
                                (0, n.jsxs)(f.xJW, {
                                    title: k.intl.string(k.t['sqXj6+']),
                                    tag: 'label',
                                    error: null == eS ? void 0 : eS.getFirstFieldErrorMessage('image'),
                                    titleClassName: B.thumbnailLabel,
                                    children: [
                                        (0, n.jsx)(f.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: k.intl.string(k.t.yOU4Vl)
                                        }),
                                        (0, n.jsx)(f.LZC, { size: 10 }),
                                        (0, n.jsx)(z.Z, {
                                            presetImages: F.M,
                                            radioGroupAriaLabel: k.intl.string(k.t.fKzQj4),
                                            image: eq,
                                            imageName: ej,
                                            savedImageName: null == el || null == (a = el.image_asset) ? void 0 : a.filename,
                                            onChange: (e, t) => {
                                                if (null != e) {
                                                    var A;
                                                    (ex(e), eU(t), eV(e.startsWith('data:') || t !== (null == el || null == (A = el.image_asset) ? void 0 : A.filename)));
                                                }
                                            }
                                        })
                                    ]
                                }),
                                eI
                                    ? (0, n.jsx)(f.xJW, {
                                          title: k.intl.string(k.t.zLrtkJ),
                                          error: null == eS ? void 0 : eS.getFirstFieldErrorMessage('attachments'),
                                          children: (0, n.jsx)(K.s, {
                                              onFileAdded: () => {
                                                  var e;
                                                  null == (e = e7.current) ||
                                                      e.scrollIntoView({
                                                          behavior: 'smooth',
                                                          block: 'end'
                                                      });
                                              }
                                          })
                                      })
                                    : null,
                                eB
                                    ? (0, n.jsx)(Q.ZP, {
                                          error: null != (J = null == eS ? void 0 : eS.getFirstFieldErrorMessage(I.NB)) ? J : void 0,
                                          newRoleParams: eL,
                                          setNewRoleParams: ek,
                                          guildId: $,
                                          listingRoleId: eR,
                                          productId: er
                                      })
                                    : null
                            ]
                        })
                    }),
                    (0, n.jsx)('div', { className: B.horizontalSeparator }),
                    (0, n.jsx)(f.zJl, {
                        children: (0, n.jsxs)('div', {
                            className: B.productPreview,
                            children: [
                                (0, n.jsx)(S.Z, {
                                    disabled: !e0,
                                    disabledTooltip: ei ? k.intl.string(k.t['0NQ00t']) : k.intl.string(k.t['Ax89/f']),
                                    published: ei,
                                    onClick: () => {
                                        (o()(e0, 'Attempting to publish/unpublish when not allowed'), eH(ei ? 'unpublish' : 'publish'), e6(E(D({}, eM), { published: !ei })));
                                    },
                                    submitting: eQ
                                }),
                                (0, n.jsx)('div', { className: B.verticalSeparator }),
                                (0, n.jsx)(f.X6q, {
                                    variant: 'text-xs/bold',
                                    color: 'header-secondary',
                                    className: B.previewHeading,
                                    children: k.intl.string(k.t['6I7nQU'])
                                }),
                                (0, n.jsx)(f.LZC, { size: 4 }),
                                (0, n.jsx)(f.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: k.intl.string(k.t.Oq4dfX)
                                }),
                                (0, n.jsx)(f.LZC, { size: 16 }),
                                (0, n.jsx)(T.Z, {
                                    imageUrl: eq,
                                    name: '' === ep ? k.intl.string(k.t.EmqIws) : ep,
                                    description: '' === em ? k.intl.string(k.t['11NA2N']) : em,
                                    formattedPrice: eN,
                                    role: eD,
                                    productType: eE,
                                    ctaComponent: (0, n.jsx)(f.gtL, {
                                        shineSize: f.gtL.ShineSizes.SMALL,
                                        pauseAnimation: ec || !eu,
                                        className: B.productPreviewCtaButton,
                                        children: k.intl.string(k.t.xUi3BA)
                                    }),
                                    cardWidth: 340,
                                    thumbnailHeight: 190
                                })
                            ]
                        })
                    })
                ]
            }),
            (0, n.jsx)(f.mzw, {
                children: (0, n.jsxs)('div', {
                    className: B.footerActionButtons,
                    children: [
                        (0, n.jsxs)('div', {
                            className: B.footerActionLeftButtons,
                            children: [
                                (0, n.jsx)(M, {
                                    text: k.intl.string(k.t.YzGIVF),
                                    value: eB,
                                    onChange: (e) => {
                                        e ? ek((0, Q.YP)()) : ek(void 0);
                                    },
                                    warning: null === eL ? (0, n.jsx)(Q.aN, {}) : void 0,
                                    disabled: null != eR
                                }),
                                (0, n.jsx)(M, {
                                    text: k.intl.string(k.t.C6wP2d),
                                    value: eI,
                                    onChange: (e) => {
                                        e
                                            ? eF(!0)
                                            : eW
                                              ? (0, f.ZDy)(async () => {
                                                    let { ConfirmModal: e } = await Promise.resolve().then(A.bind(A, 481060));
                                                    return (t) =>
                                                        (0, n.jsx)(
                                                            e,
                                                            E(D({}, t), {
                                                                header: k.intl.string(k.t['2Wihyc']),
                                                                confirmText: k.intl.string(k.t.N86XcH),
                                                                cancelText: k.intl.string(k.t['ETE/oK']),
                                                                onConfirm: eG,
                                                                children: (0, n.jsx)(f.Text, {
                                                                    variant: 'text-md/normal',
                                                                    children: k.intl.string(k.t.ixRBLi)
                                                                })
                                                            })
                                                        );
                                                })
                                              : eG();
                                    },
                                    disabled: ez
                                })
                            ]
                        }),
                        (0, n.jsx)('div', {
                            className: B.footerActionRightButtons,
                            children: ei
                                ? (0, n.jsx)(f.zxk, {
                                      variant: 'secondary',
                                      text: k.intl.string(k.t.XYBEaW),
                                      disabled: !e$,
                                      loading: ew,
                                      onClick: () => {
                                          (o()(e$, 'cannot save changes for published product without adding all fields'), eH('update_publish'), e6(eM));
                                      }
                                  })
                                : (0, n.jsx)(f.zxk, {
                                      variant: 'secondary',
                                      text: k.intl.string(k.t.ZCjwoa),
                                      disabled: !e_,
                                      loading: ew,
                                      onClick: () => {
                                          (o()(e_, 'cannot save changes without name or price tier'), eH('draft'), e6(eM));
                                      }
                                  })
                        })
                    ]
                })
            }),
            (0, n.jsx)(d.W, {
                component: 'div',
                className: B.successNoticeContainer,
                children: e1
            })
        ]
    });
}
function ee(e) {
    var t;
    return (0, n.jsx)(y.W, {
        guildId: e.guildId,
        editSkuId: null != (t = e.productId) ? t : void 0,
        onFileSizeError: () => (0, x.Z)(w.ve),
        children: (0, n.jsx)($, D({}, e))
    });
}
