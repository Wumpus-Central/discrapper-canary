r.d(t, { default: () => $ }), r(388685), r(953529);
var n = r(255367),
    i = r(73800),
    a = r(120356),
    l = r.n(a),
    o = r(512722),
    A = r.n(o),
    s = r(831209),
    c = r(399606),
    d = r(215569),
    u = r(481060),
    f = r(749210),
    g = r(852860),
    h = r(607070),
    p = r(725803),
    m = r(313201),
    b = r(76535),
    v = r(215388),
    C = r(674180),
    x = r(884858),
    q = r(695346),
    j = r(430824),
    O = r(937615),
    P = r(73346),
    y = r(506071),
    U = r(587123),
    V = r(240864),
    N = r(863663),
    I = r(923400),
    T = r(623488),
    F = r(152980),
    Z = r(120651),
    S = r(871388),
    K = r(412110),
    w = r(513669),
    z = r(972797),
    W = r(943516),
    X = r(302463),
    k = r(981631),
    R = r(674563),
    Q = r(388032),
    B = r(858705);
function E(e) {
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
function L(e, t) {
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
let D = (0, m.hQ)(),
    G = (0, m.hQ)(),
    Y = (0, m.hQ)();
function H(e) {
    let { text: t, onChange: r, value: i, disabled: a, warning: o } = e,
        A = (0, m.Dt)(),
        s = a ? 'text-muted' : 'text-normal';
    return (0, n.jsxs)('label', {
        className: l()(B.benefitToggleContainer, { [B.disabled]: a }),
        htmlFor: A,
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
                checked: i,
                disabled: a,
                id: A
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
        o = i.useMemo(
            () =>
                (null != l ? l : null != r ? [r] : []).map((e) => ({
                    value: e,
                    label: (0, O.T4)(e, k.pKx.USD)
                })),
            [l, r]
        );
    return (0, n.jsx)(u.VcW, {
        value: r,
        placeholder: Q.intl.string(Q.t.aI4J5O),
        maxVisibleItems: 5,
        options: o,
        onChange: a,
        filter: M,
        'aria-required': !0
    });
}
function _(e) {
    var t, a, l, o, m, b, x, M;
    let { guildId: _, productId: ee, transitionState: et, onClose: er } = e,
        [en, ei] = i.useState(ee),
        ea = (0, c.e7)([V.Z], () => (null == en ? null : V.Z.getGuildProduct(en)), [en]),
        el = (null == ea ? void 0 : ea.published) === !0,
        { application: eo } = (0, p.Z)(_, R.wW.GUILD_ROLE_SUBSCRIPTIONS),
        eA = I.M['0'],
        es = (0, c.e7)([h.Z], () => h.Z.useReducedMotion),
        ec = q.QK.useSetting(),
        ed = (0, y.n)(),
        eu = i.useCallback(() => {
            var e;
            return (null == ea || null == (e = ea.image_asset) ? void 0 : e.application_id) == null ? eA.data : (0, P._W)(ea.image_asset.application_id, ea.image_asset, 600, ed && ec ? void 0 : 'webp');
        }, [eA, ea, ed, ec]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: ef } = (0, C.gX)(_);
    i.useEffect(() => {
        ef && (er(), (0, S.B)(Q.intl.string(Q.t.OLf3xs), Q.t['90LBVl']));
    }, [ef, er]);
    let [eg, eh] = i.useState(null != (l = null == ea ? void 0 : ea.name) ? l : ''),
        [ep, em] = i.useState(null != (o = null == ea ? void 0 : ea.description) ? o : ''),
        [eb, ev] = i.useState(null != (m = null == ea ? void 0 : ea.price_tier) ? m : void 0),
        [eC, ex] = i.useState(eu),
        [eq, ej] = i.useState(null != (b = null == ea || null == (t = ea.image_asset) ? void 0 : t.filename) ? b : eA.name),
        [eO, eP] = i.useState(!1),
        [ey, eU] = i.useState(),
        eV = i.useMemo(() => (null != eb ? (0, O.T4)(eb, k.pKx.USD) : void 0), [eb]),
        [eN, eI] = i.useState(!0),
        { changesSaving: eT, saveError: eF, saveProductWithAttachments: eZ, hasUnsavedAttachmentChanges: eS, cancelUnusedUploads: eK } = (0, U.P)(),
        ew = (null == ea ? void 0 : ea.attachments) != null && (null == ea ? void 0 : ea.attachments.length) > 0,
        ez = null != eF ? eF : ey,
        eW = null != eT && 'published' in eT,
        eX = null != eT && !eW,
        ek = null != (x = null == ea ? void 0 : ea.role_id) ? x : null,
        [eR, eQ] = i.useState(),
        eB = null != eR || null != ek,
        eE = (0, c.e7)([j.Z], () => (null != ek && null !== eR ? j.Z.getRole(_, ek) : null != eR ? eR : void 0), [eR, ek, _]),
        eL = '';
    eB && eN ? (eL = Q.intl.string(Q.t.ih4QMT)) : eB ? (eL = Q.intl.string(Q.t.o9xphY)) : eN && (eL = Q.intl.string(Q.t.DWYJub));
    let eD = () => {
            eI(!1), eK();
        },
        [eG, eY] = i.useState(),
        {
            changes: eH,
            hasUnsavedChanges: eM,
            canSaveForDraft: eJ,
            canSaveForPublished: e_,
            canPublishOrUnpublish: e$
        } = i.useMemo(
            () =>
                (0, N.fG)({
                    guildProductListing: ea,
                    name: eg,
                    priceTier: eb,
                    description: ep,
                    image: eC,
                    imageName: eq,
                    isImageChanged: eO,
                    newRoleParams: eR,
                    hasSavedAttachments: ew,
                    hasUnsavedAttachmentChanges: eS
                }),
            [ea, eg, eb, ep, eC, eq, eO, eR, ew, eS]
        ),
        e0 = i.useMemo(
            () =>
                eM || null == eG || 'publish' === eG || null != ez
                    ? null
                    : (0, n.jsx)(u.oXn, {
                          className: B.successNotice,
                          children: (0, n.jsx)(g.Z, {
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
                                          children: 'draft' === eG ? Q.intl.string(Q.t['3Rv4MD']) : 'update_publish' === eG ? Q.intl.string(Q.t['8fPiBw']) : Q.intl.string(Q.t['3LUFnJ'])
                                      })
                                  ]
                              }),
                              onReset: () => eY(void 0),
                              onResetText: Q.intl.string(Q.t.T6QuWV)
                          })
                      }),
            [ez, eM, eG]
        ),
        e1 = i.useCallback(() => {
            eM
                ? (0, Z.Z)({
                      title: Q.intl.string(Q.t.FVDhIS),
                      body: Q.intl.string(Q.t.Hgdhwc),
                      cta: Q.intl.string(Q.t.h0bti4),
                      closeLabel: Q.intl.string(Q.t['+WYo0t']),
                      onConfirm: () => {
                          er();
                      }
                  })
                : er();
        }, [er, eM]);
    i.useEffect(() => {
        (0, u.oav)(
            X.Yz,
            (e) =>
                (0, n.jsx)(
                    $,
                    E(
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
        if ((eU(t), null != t)) return;
        let r = await eZ(e);
        if ((eP(!1), null != r)) {
            if ((null != e.name && eh(r.name), null != e.description && em(r.description), null != eR)) {
                let e = r.role_id;
                A()(null != e, 'Cannot update role without role ID'), await f.Z.updateRole(_, e, eR);
            }
            eQ(void 0), ei(r.id), 'published' in e && !0 === e.published && er();
        }
    };
    i.useEffect(() => {
        if (null != ez) {
            var e;
            (0, K.V)(ez, _, null == eo || null == (e = eo.team) ? void 0 : e.id);
        }
    }, [ez, _, eo]),
        i.useEffect(() => {
            eM && eY(void 0);
        }, [eM]);
    let e6 = i.useRef(null);
    return (0, n.jsxs)(u.Y0X, {
        transitionState: et,
        size: u.CgR.DYNAMIC,
        className: B.modalRoot,
        'aria-labelledby': D,
        children: [
            (0, n.jsxs)(u.xBx, {
                className: B.modalHeader,
                separator: !1,
                children: [
                    (0, n.jsxs)('div', {
                        className: B.headerText,
                        children: [
                            (0, n.jsx)(u.X6q, {
                                id: D,
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: Q.intl.string(Q.t.DnNl1d)
                            }),
                            (0, n.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: Q.intl.string(Q.t['Tu7f+f'])
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
                            ref: e6,
                            children: [
                                (0, n.jsx)(u.xJW, {
                                    title: Q.intl.string(Q.t.Hsk7xc),
                                    tag: 'label',
                                    htmlFor: G,
                                    error: null == ez ? void 0 : ez.getFirstFieldErrorMessage('name'),
                                    children: (0, n.jsx)(u.Kx8, {
                                        value: eg,
                                        onChange: eh,
                                        id: G,
                                        maxLength: 100,
                                        placeholder: Q.intl.string(Q.t['/BiYSE']),
                                        rows: 1,
                                        autosize: !0,
                                        showCharacterCount: eg.length > 0,
                                        showRemainingCharacterCount: eg.length > 0,
                                        required: !0,
                                        className: eg.length > 0 ? B.nameArea : void 0
                                    })
                                }),
                                (0, n.jsx)(u.xJW, {
                                    title: Q.intl.string(Q.t.QdKLyc),
                                    tag: 'label',
                                    error: null == ez ? void 0 : ez.getFirstFieldErrorMessage('description'),
                                    htmlFor: Y,
                                    children: (0, n.jsx)(v.Z, {
                                        id: Y,
                                        className: B.descriptionArea,
                                        value: ep,
                                        onChange: em,
                                        maxLength: 1500,
                                        placeholder: Q.intl.string(Q.t.BFwyur),
                                        showCharacterCount: ep.length > 0,
                                        parentModalKey: X.Yz,
                                        required: !0
                                    })
                                }),
                                (0, n.jsx)(u.xJW, {
                                    title: Q.intl.string(Q.t['CAY/vr']),
                                    tag: 'label',
                                    error: null == ez ? void 0 : ez.getFirstFieldErrorMessage('price_tier'),
                                    children: (0, n.jsx)(J, {
                                        guildId: _,
                                        selectedPriceTier: eb,
                                        setPriceTier: ev
                                    })
                                }),
                                (0, n.jsxs)(u.xJW, {
                                    title: Q.intl.string(Q.t['sqXj6+']),
                                    tag: 'label',
                                    error: null == ez ? void 0 : ez.getFirstFieldErrorMessage('image'),
                                    titleClassName: B.thumbnailLabel,
                                    children: [
                                        (0, n.jsx)(u.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: Q.intl.string(Q.t.yOU4Vl)
                                        }),
                                        (0, n.jsx)(u.LZC, { size: 10 }),
                                        (0, n.jsx)(w.Z, {
                                            presetImages: I.M,
                                            radioGroupAriaLabel: Q.intl.string(Q.t.fKzQj4),
                                            image: eC,
                                            imageName: eq,
                                            savedImageName: null == ea || null == (a = ea.image_asset) ? void 0 : a.filename,
                                            onChange: (e, t) => {
                                                if (null != e) {
                                                    var r;
                                                    ex(e), ej(t), eP(e.startsWith('data:') || t !== (null == ea || null == (r = ea.image_asset) ? void 0 : r.filename));
                                                }
                                            }
                                        })
                                    ]
                                }),
                                eN
                                    ? (0, n.jsx)(u.xJW, {
                                          title: Q.intl.string(Q.t.zLrtkJ),
                                          error: null == ez ? void 0 : ez.getFirstFieldErrorMessage('attachments'),
                                          children: (0, n.jsx)(F.s, {
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
                                eB
                                    ? (0, n.jsx)(W.ZP, {
                                          error: null != (M = null == ez ? void 0 : ez.getFirstFieldErrorMessage(N.NB)) ? M : void 0,
                                          newRoleParams: eR,
                                          setNewRoleParams: eQ,
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
                                (0, n.jsx)(z.Z, {
                                    disabled: !e$,
                                    disabledTooltip: el ? Q.intl.string(Q.t['0NQ00t']) : Q.intl.string(Q.t['Ax89/f']),
                                    published: el,
                                    onClick: () => {
                                        A()(e$, 'Attempting to publish/unpublish when not allowed'), eY(el ? 'unpublish' : 'publish'), e3(L(E({}, eH), { published: !el }));
                                    },
                                    submitting: eW
                                }),
                                (0, n.jsx)('div', { className: B.verticalSeparator }),
                                (0, n.jsx)(u.X6q, {
                                    variant: 'text-xs/bold',
                                    color: 'header-secondary',
                                    className: B.previewHeading,
                                    children: Q.intl.string(Q.t['6I7nQU'])
                                }),
                                (0, n.jsx)(u.LZC, { size: 4 }),
                                (0, n.jsx)(u.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: Q.intl.string(Q.t.Oq4dfX)
                                }),
                                (0, n.jsx)(u.LZC, { size: 16 }),
                                (0, n.jsx)(T.Z, {
                                    imageUrl: eC,
                                    name: '' === eg ? Q.intl.string(Q.t.EmqIws) : eg,
                                    description: '' === ep ? Q.intl.string(Q.t['11NA2N']) : ep,
                                    formattedPrice: eV,
                                    role: eE,
                                    productType: eL,
                                    ctaComponent: (0, n.jsx)(u.gtL, {
                                        shineSize: u.gtL.ShineSizes.SMALL,
                                        pauseAnimation: es || !ed,
                                        className: B.productPreviewCtaButton,
                                        children: Q.intl.string(Q.t.xUi3BA)
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
                                    text: Q.intl.string(Q.t.YzGIVF),
                                    value: eB,
                                    onChange: (e) => {
                                        e ? eQ((0, W.YP)()) : eQ(void 0);
                                    },
                                    warning: null === eR ? (0, n.jsx)(W.aN, {}) : void 0,
                                    disabled: null != ek
                                }),
                                (0, n.jsx)(H, {
                                    text: Q.intl.string(Q.t.C6wP2d),
                                    value: eN,
                                    onChange: (e) => {
                                        e
                                            ? eI(!0)
                                            : eS
                                              ? (0, u.ZDy)(async () => {
                                                    let { ConfirmModal: e } = await Promise.resolve().then(r.bind(r, 481060));
                                                    return (t) =>
                                                        (0, n.jsx)(
                                                            e,
                                                            L(E({}, t), {
                                                                header: Q.intl.string(Q.t['2Wihyc']),
                                                                confirmText: Q.intl.string(Q.t.N86XcH),
                                                                cancelText: Q.intl.string(Q.t['ETE/oK']),
                                                                onConfirm: eD,
                                                                children: (0, n.jsx)(u.Text, {
                                                                    variant: 'text-md/normal',
                                                                    children: Q.intl.string(Q.t.ixRBLi)
                                                                })
                                                            })
                                                        );
                                                })
                                              : eD();
                                    },
                                    disabled: ew
                                })
                            ]
                        }),
                        (0, n.jsx)('div', {
                            className: B.footerActionRightButtons,
                            children: el
                                ? (0, n.jsx)(u.zxk, {
                                      color: u.zxk.Colors.PRIMARY,
                                      disabled: !e_,
                                      submitting: eX,
                                      onClick: () => {
                                          A()(e_, 'cannot save changes for published product without adding all fields'), eY('update_publish'), e3(eH);
                                      },
                                      children: Q.intl.string(Q.t.XYBEaW)
                                  })
                                : (0, n.jsx)(u.zxk, {
                                      color: u.zxk.Colors.PRIMARY,
                                      disabled: !eJ,
                                      submitting: eX,
                                      onClick: () => {
                                          A()(eJ, 'cannot save changes without name or price tier'), eY('draft'), e3(eH);
                                      },
                                      children: Q.intl.string(Q.t.ZCjwoa)
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
    return (0, n.jsx)(U.W, {
        guildId: e.guildId,
        editSkuId: null != (t = e.productId) ? t : void 0,
        onFileSizeError: () => (0, x.Z)(X.ve),
        children: (0, n.jsx)(_, E({}, e))
    });
}
