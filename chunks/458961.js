(A.d(t, { default: () => $ }), A(388685), A(953529));
var n = A(255367),
    r = A(73800),
    a = A(120356),
    l = A.n(a),
    i = A(512722),
    o = A.n(i),
    s = A(831209),
    c = A(399606),
    d = A(215569),
    u = A(481060),
    f = A(749210),
    g = A(852860),
    p = A(607070),
    h = A(725803),
    m = A(313201),
    b = A(76535),
    v = A(215388),
    C = A(674180),
    q = A(884858),
    x = A(695346),
    j = A(485386),
    U = A(937615),
    O = A(73346),
    V = A(506071),
    P = A(587123),
    y = A(240864),
    N = A(863663),
    I = A(923400),
    F = A(623488),
    T = A(152980),
    K = A(120651),
    Z = A(871388),
    W = A(412110),
    X = A(513669),
    z = A(972797),
    S = A(943516),
    Q = A(302463),
    w = A(981631),
    R = A(674563),
    L = A(388032),
    k = A(858705);
function B(e) {
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
function D(e, t) {
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
let E = (0, m.hQ)(),
    G = (0, m.hQ)(),
    Y = (0, m.hQ)();
function H(e) {
    let { text: t, onChange: A, value: r, disabled: a, warning: i } = e,
        o = (0, m.Dt)(),
        s = a ? 'text-muted' : 'text-default';
    return (0, n.jsxs)('label', {
        className: l()(k.benefitToggleContainer, { [k.disabled]: a }),
        htmlFor: o,
        children: [
            (0, n.jsx)(u.Text, {
                variant: 'text-sm/medium',
                color: s,
                children: t
            }),
            null != i &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(u.LZC, {
                            size: 4,
                            horizontal: !0
                        }),
                        i
                    ]
                }),
            (0, n.jsx)(u.LZC, {
                size: 16,
                horizontal: !0
            }),
            (0, n.jsx)(u.rsf, {
                onChange: A,
                checked: r,
                disabled: a,
                id: o
            })
        ]
    });
}
function M(e, t) {
    return e.filter((e) => {
        let { value: A, label: n } = e;
        return A.toString().includes(t) || n.includes(t);
    });
}
function J(e) {
    let { guildId: t, selectedPriceTier: A, setPriceTier: a } = e,
        { priceTiers: l } = (0, b.R)(t, w.RG5.GUILD_PRODUCTS),
        i = r.useMemo(
            () =>
                (null != l ? l : null != A ? [A] : []).map((e) => ({
                    value: e,
                    label: (0, U.T4)(e, w.pKx.USD)
                })),
            [l, A]
        );
    return (0, n.jsx)(u.VcW, {
        value: A,
        placeholder: L.intl.string(L.t.aI4J5O),
        maxVisibleItems: 5,
        options: i,
        onChange: a,
        filter: M,
        'aria-required': !0
    });
}
function _(e) {
    var t, a, l, i, m, b, q, M;
    let { guildId: _, productId: ee, transitionState: et, onClose: eA } = e,
        [en, er] = r.useState(ee),
        ea = (0, c.e7)([y.Z], () => (null == en ? null : y.Z.getGuildProduct(en)), [en]),
        el = (null == ea ? void 0 : ea.published) === !0,
        { application: ei } = (0, h.Z)(_, R.wW.GUILD_ROLE_SUBSCRIPTIONS),
        eo = I.M['0'],
        es = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        ec = x.QK.useSetting(),
        ed = (0, V.n)(),
        eu = r.useCallback(() => {
            var e;
            return (null == ea || null == (e = ea.image_asset) ? void 0 : e.application_id) == null ? eo.data : (0, O._W)(ea.image_asset.application_id, ea.image_asset, 600, ed && ec ? void 0 : 'webp');
        }, [eo, ea, ed, ec]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: ef } = (0, C.gX)(_);
    r.useEffect(() => {
        ef && (eA(), (0, Z.B)(L.intl.string(L.t.OLf3xs), L.t['90LBVl']));
    }, [ef, eA]);
    let [eg, ep] = r.useState(null != (l = null == ea ? void 0 : ea.name) ? l : ''),
        [eh, em] = r.useState(null != (i = null == ea ? void 0 : ea.description) ? i : ''),
        [eb, ev] = r.useState(null != (m = null == ea ? void 0 : ea.price_tier) ? m : void 0),
        [eC, eq] = r.useState(eu),
        [ex, ej] = r.useState(null != (b = null == ea || null == (t = ea.image_asset) ? void 0 : t.filename) ? b : eo.name),
        [eU, eO] = r.useState(!1),
        [eV, eP] = r.useState(),
        ey = r.useMemo(() => (null != eb ? (0, U.T4)(eb, w.pKx.USD) : void 0), [eb]),
        [eN, eI] = r.useState(!0),
        { changesSaving: eF, saveError: eT, saveProductWithAttachments: eK, hasUnsavedAttachmentChanges: eZ, cancelUnusedUploads: eW } = (0, P.P)(),
        eX = (null == ea ? void 0 : ea.attachments) != null && (null == ea ? void 0 : ea.attachments.length) > 0,
        ez = null != eT ? eT : eV,
        eS = null != eF && 'published' in eF,
        eQ = null != eF && !eS,
        ew = null != (q = null == ea ? void 0 : ea.role_id) ? q : null,
        [eR, eL] = r.useState(),
        ek = null != eR || null != ew,
        eB = (0, c.e7)([j.Z], () => (null != ew && null !== eR ? j.Z.getRole(_, ew) : null != eR ? eR : void 0), [eR, ew, _]),
        eD = '';
    ek && eN ? (eD = L.intl.string(L.t.ih4QMT)) : ek ? (eD = L.intl.string(L.t.o9xphY)) : eN && (eD = L.intl.string(L.t.DWYJub));
    let eE = () => {
            (eI(!1), eW());
        },
        [eG, eY] = r.useState(),
        {
            changes: eH,
            hasUnsavedChanges: eM,
            canSaveForDraft: eJ,
            canSaveForPublished: e_,
            canPublishOrUnpublish: e$
        } = r.useMemo(
            () =>
                (0, N.fG)({
                    guildProductListing: ea,
                    name: eg,
                    priceTier: eb,
                    description: eh,
                    image: eC,
                    imageName: ex,
                    isImageChanged: eU,
                    newRoleParams: eR,
                    hasSavedAttachments: eX,
                    hasUnsavedAttachmentChanges: eZ
                }),
            [ea, eg, eb, eh, eC, ex, eU, eR, eX, eZ]
        ),
        e0 = r.useMemo(
            () =>
                eM || null == eG || 'publish' === eG || null != ez
                    ? null
                    : (0, n.jsx)(u.oXn, {
                          className: k.successNotice,
                          children: (0, n.jsx)(g.Z, {
                              message: (0, n.jsxs)('div', {
                                  className: k.successNoticeMessage,
                                  children: [
                                      (0, n.jsx)(u.owK, {
                                          size: 'md',
                                          color: s.Z.BUTTON_POSITIVE_BACKGROUND,
                                          secondaryColor: s.Z.WHITE
                                      }),
                                      (0, n.jsx)(u.Text, {
                                          variant: 'text-md/medium',
                                          children: 'draft' === eG ? L.intl.string(L.t['3Rv4MD']) : 'update_publish' === eG ? L.intl.string(L.t['8fPiBw']) : L.intl.string(L.t['3LUFnJ'])
                                      })
                                  ]
                              }),
                              onReset: () => eY(void 0),
                              onResetText: L.intl.string(L.t.T6QuWV)
                          })
                      }),
            [ez, eM, eG]
        ),
        e1 = r.useCallback(() => {
            eM
                ? (0, K.Z)({
                      title: L.intl.string(L.t.FVDhIS),
                      body: L.intl.string(L.t.Hgdhwc),
                      cta: L.intl.string(L.t.h0bti4),
                      closeLabel: L.intl.string(L.t['+WYo0t']),
                      onConfirm: () => {
                          eA();
                      }
                  })
                : eA();
        }, [eA, eM]);
    r.useEffect(() => {
        (0, u.oav)(
            Q.Yz,
            (e) =>
                (0, n.jsx)(
                    $,
                    B(
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
        let t = (0, N.pM)({ newRoleParams: eR });
        if ((eP(t), null != t)) return;
        let A = await eK(e);
        if ((eO(!1), null != A)) {
            if ((null != e.name && ep(A.name), null != e.description && em(A.description), null != eR)) {
                let e = A.role_id;
                (o()(null != e, 'Cannot update role without role ID'), await f.Z.updateRole(_, e, eR));
            }
            (eL(void 0), er(A.id), 'published' in e && !0 === e.published && eA());
        }
    };
    (r.useEffect(() => {
        if (null != ez) {
            var e;
            (0, W.V)(ez, _, null == ei || null == (e = ei.team) ? void 0 : e.id);
        }
    }, [ez, _, ei]),
        r.useEffect(() => {
            eM && eY(void 0);
        }, [eM]));
    let e6 = r.useRef(null);
    return (0, n.jsxs)(u.Y0X, {
        transitionState: et,
        size: u.CgR.DYNAMIC,
        className: k.modalRoot,
        'aria-labelledby': E,
        parentComponent: 'GuildProductEditModal',
        children: [
            (0, n.jsxs)(u.xBx, {
                className: k.modalHeader,
                separator: !1,
                children: [
                    (0, n.jsxs)('div', {
                        className: k.headerText,
                        children: [
                            (0, n.jsx)(u.X6q, {
                                id: E,
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: L.intl.string(L.t.DnNl1d)
                            }),
                            (0, n.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: L.intl.string(L.t['Tu7f+f'])
                            })
                        ]
                    }),
                    (0, n.jsx)(u.olH, {
                        onClick: e1,
                        className: k.__invalid_modalCloseButton
                    })
                ]
            }),
            (0, n.jsxs)(u.hzk, {
                className: k.modalContent,
                scrollbarType: 'none',
                children: [
                    (0, n.jsx)(u.zJl, {
                        children: (0, n.jsxs)('div', {
                            className: k.productFieldsSection,
                            ref: e6,
                            children: [
                                (0, n.jsx)(u.xJW, {
                                    title: L.intl.string(L.t.Hsk7xc),
                                    tag: 'label',
                                    htmlFor: G,
                                    error: null == ez ? void 0 : ez.getFirstFieldErrorMessage('name'),
                                    children: (0, n.jsx)(u.Kx8, {
                                        value: eg,
                                        onChange: ep,
                                        id: G,
                                        maxLength: 100,
                                        placeholder: L.intl.string(L.t['/BiYSE']),
                                        rows: 1,
                                        autosize: !0,
                                        showCharacterCount: eg.length > 0,
                                        showRemainingCharacterCount: eg.length > 0,
                                        required: !0,
                                        className: eg.length > 0 ? k.nameArea : void 0
                                    })
                                }),
                                (0, n.jsx)(u.xJW, {
                                    title: L.intl.string(L.t.QdKLyc),
                                    tag: 'label',
                                    error: null == ez ? void 0 : ez.getFirstFieldErrorMessage('description'),
                                    htmlFor: Y,
                                    children: (0, n.jsx)(v.Z, {
                                        id: Y,
                                        className: k.descriptionArea,
                                        value: eh,
                                        onChange: em,
                                        maxLength: 1500,
                                        placeholder: L.intl.string(L.t.BFwyur),
                                        showCharacterCount: eh.length > 0,
                                        parentModalKey: Q.Yz,
                                        required: !0
                                    })
                                }),
                                (0, n.jsx)(u.xJW, {
                                    title: L.intl.string(L.t['CAY/vr']),
                                    tag: 'label',
                                    error: null == ez ? void 0 : ez.getFirstFieldErrorMessage('price_tier'),
                                    children: (0, n.jsx)(J, {
                                        guildId: _,
                                        selectedPriceTier: eb,
                                        setPriceTier: ev
                                    })
                                }),
                                (0, n.jsxs)(u.xJW, {
                                    title: L.intl.string(L.t['sqXj6+']),
                                    tag: 'label',
                                    error: null == ez ? void 0 : ez.getFirstFieldErrorMessage('image'),
                                    titleClassName: k.thumbnailLabel,
                                    children: [
                                        (0, n.jsx)(u.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: L.intl.string(L.t.yOU4Vl)
                                        }),
                                        (0, n.jsx)(u.LZC, { size: 10 }),
                                        (0, n.jsx)(X.Z, {
                                            presetImages: I.M,
                                            radioGroupAriaLabel: L.intl.string(L.t.fKzQj4),
                                            image: eC,
                                            imageName: ex,
                                            savedImageName: null == ea || null == (a = ea.image_asset) ? void 0 : a.filename,
                                            onChange: (e, t) => {
                                                if (null != e) {
                                                    var A;
                                                    (eq(e), ej(t), eO(e.startsWith('data:') || t !== (null == ea || null == (A = ea.image_asset) ? void 0 : A.filename)));
                                                }
                                            }
                                        })
                                    ]
                                }),
                                eN
                                    ? (0, n.jsx)(u.xJW, {
                                          title: L.intl.string(L.t.zLrtkJ),
                                          error: null == ez ? void 0 : ez.getFirstFieldErrorMessage('attachments'),
                                          children: (0, n.jsx)(T.s, {
                                              onFileAdded: () => {
                                                  var e;
                                                  null == (e = e6.current) ||
                                                      e.scrollIntoView({
                                                          behavior: 'smooth',
                                                          block: 'end'
                                                      });
                                              }
                                          })
                                      })
                                    : null,
                                ek
                                    ? (0, n.jsx)(S.ZP, {
                                          error: null != (M = null == ez ? void 0 : ez.getFirstFieldErrorMessage(N.NB)) ? M : void 0,
                                          newRoleParams: eR,
                                          setNewRoleParams: eL,
                                          guildId: _,
                                          listingRoleId: ew,
                                          productId: en
                                      })
                                    : null
                            ]
                        })
                    }),
                    (0, n.jsx)('div', { className: k.horizontalSeparator }),
                    (0, n.jsx)(u.zJl, {
                        children: (0, n.jsxs)('div', {
                            className: k.productPreview,
                            children: [
                                (0, n.jsx)(z.Z, {
                                    disabled: !e$,
                                    disabledTooltip: el ? L.intl.string(L.t['0NQ00t']) : L.intl.string(L.t['Ax89/f']),
                                    published: el,
                                    onClick: () => {
                                        (o()(e$, 'Attempting to publish/unpublish when not allowed'), eY(el ? 'unpublish' : 'publish'), e3(D(B({}, eH), { published: !el })));
                                    },
                                    submitting: eS
                                }),
                                (0, n.jsx)('div', { className: k.verticalSeparator }),
                                (0, n.jsx)(u.X6q, {
                                    variant: 'text-xs/bold',
                                    color: 'header-secondary',
                                    className: k.previewHeading,
                                    children: L.intl.string(L.t['6I7nQU'])
                                }),
                                (0, n.jsx)(u.LZC, { size: 4 }),
                                (0, n.jsx)(u.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: L.intl.string(L.t.Oq4dfX)
                                }),
                                (0, n.jsx)(u.LZC, { size: 16 }),
                                (0, n.jsx)(F.Z, {
                                    imageUrl: eC,
                                    name: '' === eg ? L.intl.string(L.t.EmqIws) : eg,
                                    description: '' === eh ? L.intl.string(L.t['11NA2N']) : eh,
                                    formattedPrice: ey,
                                    role: eB,
                                    productType: eD,
                                    ctaComponent: (0, n.jsx)(u.gtL, {
                                        shineSize: u.gtL.ShineSizes.SMALL,
                                        pauseAnimation: es || !ed,
                                        className: k.productPreviewCtaButton,
                                        children: L.intl.string(L.t.xUi3BA)
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
                    className: k.footerActionButtons,
                    children: [
                        (0, n.jsxs)('div', {
                            className: k.footerActionLeftButtons,
                            children: [
                                (0, n.jsx)(H, {
                                    text: L.intl.string(L.t.YzGIVF),
                                    value: ek,
                                    onChange: (e) => {
                                        e ? eL((0, S.YP)()) : eL(void 0);
                                    },
                                    warning: null === eR ? (0, n.jsx)(S.aN, {}) : void 0,
                                    disabled: null != ew
                                }),
                                (0, n.jsx)(H, {
                                    text: L.intl.string(L.t.C6wP2d),
                                    value: eN,
                                    onChange: (e) => {
                                        e
                                            ? eI(!0)
                                            : eZ
                                              ? (0, u.ZDy)(async () => {
                                                    let { ConfirmModal: e } = await Promise.resolve().then(A.bind(A, 481060));
                                                    return (t) =>
                                                        (0, n.jsx)(
                                                            e,
                                                            D(B({}, t), {
                                                                header: L.intl.string(L.t['2Wihyc']),
                                                                confirmText: L.intl.string(L.t.N86XcH),
                                                                cancelText: L.intl.string(L.t['ETE/oK']),
                                                                onConfirm: eE,
                                                                children: (0, n.jsx)(u.Text, {
                                                                    variant: 'text-md/normal',
                                                                    children: L.intl.string(L.t.ixRBLi)
                                                                })
                                                            })
                                                        );
                                                })
                                              : eE();
                                    },
                                    disabled: eX
                                })
                            ]
                        }),
                        (0, n.jsx)('div', {
                            className: k.footerActionRightButtons,
                            children: el
                                ? (0, n.jsx)(u.zxk, {
                                      variant: 'secondary',
                                      text: L.intl.string(L.t.XYBEaW),
                                      disabled: !e_,
                                      loading: eQ,
                                      onClick: () => {
                                          (o()(e_, 'cannot save changes for published product without adding all fields'), eY('update_publish'), e3(eH));
                                      }
                                  })
                                : (0, n.jsx)(u.zxk, {
                                      variant: 'secondary',
                                      text: L.intl.string(L.t.ZCjwoa),
                                      disabled: !eJ,
                                      loading: eQ,
                                      onClick: () => {
                                          (o()(eJ, 'cannot save changes without name or price tier'), eY('draft'), e3(eH));
                                      }
                                  })
                        })
                    ]
                })
            }),
            (0, n.jsx)(d.W, {
                component: 'div',
                className: k.successNoticeContainer,
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
        onFileSizeError: () => (0, q.Z)(Q.ve),
        children: (0, n.jsx)(_, B({}, e))
    });
}
