n.d(t, { default: () => $ }), n(388685), n(953529);
var r = n(255367),
    A = n(73800),
    a = n(120356),
    l = n.n(a),
    o = n(512722),
    i = n.n(o),
    s = n(831209),
    c = n(399606),
    d = n(215569),
    u = n(481060),
    g = n(749210),
    f = n(852860),
    p = n(607070),
    m = n(725803),
    h = n(313201),
    b = n(76535),
    v = n(215388),
    C = n(674180),
    q = n(884858),
    x = n(695346),
    j = n(485386),
    O = n(937615),
    U = n(73346),
    P = n(506071),
    V = n(587123),
    y = n(240864),
    N = n(863663),
    I = n(923400),
    T = n(623488),
    F = n(152980),
    Z = n(120651),
    K = n(871388),
    W = n(412110),
    z = n(513669),
    X = n(972797),
    S = n(943516),
    w = n(302463),
    k = n(981631),
    Q = n(674563),
    R = n(388032),
    B = n(858705);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
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
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = (0, h.hQ)(),
    G = (0, h.hQ)(),
    Y = (0, h.hQ)();
function H(e) {
    let { text: t, onChange: n, value: A, disabled: a, warning: o } = e,
        i = (0, h.Dt)(),
        s = a ? 'text-muted' : 'text-default';
    return (0, r.jsxs)('label', {
        className: l()(B.benefitToggleContainer, { [B.disabled]: a }),
        htmlFor: i,
        children: [
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/medium',
                color: s,
                children: t
            }),
            null != o &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(u.LZC, {
                            size: 4,
                            horizontal: !0
                        }),
                        o
                    ]
                }),
            (0, r.jsx)(u.LZC, {
                size: 16,
                horizontal: !0
            }),
            (0, r.jsx)(u.rsf, {
                onChange: n,
                checked: A,
                disabled: a,
                id: i
            })
        ]
    });
}
function M(e, t) {
    return e.filter((e) => {
        let { value: n, label: r } = e;
        return n.toString().includes(t) || r.includes(t);
    });
}
function J(e) {
    let { guildId: t, selectedPriceTier: n, setPriceTier: a } = e,
        { priceTiers: l } = (0, b.R)(t, k.RG5.GUILD_PRODUCTS),
        o = A.useMemo(
            () =>
                (null != l ? l : null != n ? [n] : []).map((e) => ({
                    value: e,
                    label: (0, O.T4)(e, k.pKx.USD)
                })),
            [l, n]
        );
    return (0, r.jsx)(u.VcW, {
        value: n,
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
    let { guildId: _, productId: ee, transitionState: et, onClose: en } = e,
        [er, eA] = A.useState(ee),
        ea = (0, c.e7)([y.Z], () => (null == er ? null : y.Z.getGuildProduct(er)), [er]),
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
        eg && (en(), (0, K.B)(R.intl.string(R.t.OLf3xs), R.t['90LBVl']));
    }, [eg, en]);
    let [ef, ep] = A.useState(null != (l = null == ea ? void 0 : ea.name) ? l : ''),
        [em, eh] = A.useState(null != (o = null == ea ? void 0 : ea.description) ? o : ''),
        [eb, ev] = A.useState(null != (h = null == ea ? void 0 : ea.price_tier) ? h : void 0),
        [eC, eq] = A.useState(eu),
        [ex, ej] = A.useState(null != (b = null == ea || null == (t = ea.image_asset) ? void 0 : t.filename) ? b : ei.name),
        [eO, eU] = A.useState(!1),
        [eP, eV] = A.useState(),
        ey = A.useMemo(() => (null != eb ? (0, O.T4)(eb, k.pKx.USD) : void 0), [eb]),
        [eN, eI] = A.useState(!0),
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
    eB && eN ? (eD = R.intl.string(R.t.ih4QMT)) : eB ? (eD = R.intl.string(R.t.o9xphY)) : eN && (eD = R.intl.string(R.t.DWYJub));
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
                (0, N.fG)({
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
                    : (0, r.jsx)(u.oXn, {
                          className: B.successNotice,
                          children: (0, r.jsx)(f.Z, {
                              message: (0, r.jsxs)('div', {
                                  className: B.successNoticeMessage,
                                  children: [
                                      (0, r.jsx)(u.owK, {
                                          size: 'md',
                                          color: s.Z.BUTTON_POSITIVE_BACKGROUND,
                                          secondaryColor: s.Z.WHITE
                                      }),
                                      (0, r.jsx)(u.Text, {
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
                          en();
                      }
                  })
                : en();
        }, [en, eM]);
    A.useEffect(() => {
        (0, u.oav)(
            w.Yz,
            (e) =>
                (0, r.jsx)(
                    $,
                    L(
                        {
                            guildId: _,
                            productId: er
                        },
                        e
                    )
                ),
            e1
        );
    }, [_, e1, er]);
    let e3 = async (e) => {
        let t = (0, N.pM)({ newRoleParams: eQ });
        if ((eV(t), null != t)) return;
        let n = await eZ(e);
        if ((eU(!1), null != n)) {
            if ((null != e.name && ep(n.name), null != e.description && eh(n.description), null != eQ)) {
                let e = n.role_id;
                i()(null != e, 'Cannot update role without role ID'), await g.Z.updateRole(_, e, eQ);
            }
            eR(void 0), eA(n.id), 'published' in e && !0 === e.published && en();
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
    let e6 = A.useRef(null);
    return (0, r.jsxs)(u.Y0X, {
        transitionState: et,
        size: u.CgR.DYNAMIC,
        className: B.modalRoot,
        'aria-labelledby': E,
        parentComponent: 'GuildProductEditModal',
        children: [
            (0, r.jsxs)(u.xBx, {
                className: B.modalHeader,
                separator: !1,
                children: [
                    (0, r.jsxs)('div', {
                        className: B.headerText,
                        children: [
                            (0, r.jsx)(u.X6q, {
                                id: E,
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: R.intl.string(R.t.DnNl1d)
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: R.intl.string(R.t['Tu7f+f'])
                            })
                        ]
                    }),
                    (0, r.jsx)(u.olH, {
                        onClick: e1,
                        className: B.__invalid_modalCloseButton
                    })
                ]
            }),
            (0, r.jsxs)(u.hzk, {
                className: B.modalContent,
                scrollbarType: 'none',
                children: [
                    (0, r.jsx)(u.zJl, {
                        children: (0, r.jsxs)('div', {
                            className: B.productFieldsSection,
                            ref: e6,
                            children: [
                                (0, r.jsx)(u.xJW, {
                                    title: R.intl.string(R.t.Hsk7xc),
                                    tag: 'label',
                                    htmlFor: G,
                                    error: null == eX ? void 0 : eX.getFirstFieldErrorMessage('name'),
                                    children: (0, r.jsx)(u.Kx8, {
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
                                (0, r.jsx)(u.xJW, {
                                    title: R.intl.string(R.t.QdKLyc),
                                    tag: 'label',
                                    error: null == eX ? void 0 : eX.getFirstFieldErrorMessage('description'),
                                    htmlFor: Y,
                                    children: (0, r.jsx)(v.Z, {
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
                                (0, r.jsx)(u.xJW, {
                                    title: R.intl.string(R.t['CAY/vr']),
                                    tag: 'label',
                                    error: null == eX ? void 0 : eX.getFirstFieldErrorMessage('price_tier'),
                                    children: (0, r.jsx)(J, {
                                        guildId: _,
                                        selectedPriceTier: eb,
                                        setPriceTier: ev
                                    })
                                }),
                                (0, r.jsxs)(u.xJW, {
                                    title: R.intl.string(R.t['sqXj6+']),
                                    tag: 'label',
                                    error: null == eX ? void 0 : eX.getFirstFieldErrorMessage('image'),
                                    titleClassName: B.thumbnailLabel,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: R.intl.string(R.t.yOU4Vl)
                                        }),
                                        (0, r.jsx)(u.LZC, { size: 10 }),
                                        (0, r.jsx)(z.Z, {
                                            presetImages: I.M,
                                            radioGroupAriaLabel: R.intl.string(R.t.fKzQj4),
                                            image: eC,
                                            imageName: ex,
                                            savedImageName: null == ea || null == (a = ea.image_asset) ? void 0 : a.filename,
                                            onChange: (e, t) => {
                                                if (null != e) {
                                                    var n;
                                                    eq(e), ej(t), eU(e.startsWith('data:') || t !== (null == ea || null == (n = ea.image_asset) ? void 0 : n.filename));
                                                }
                                            }
                                        })
                                    ]
                                }),
                                eN
                                    ? (0, r.jsx)(u.xJW, {
                                          title: R.intl.string(R.t.zLrtkJ),
                                          error: null == eX ? void 0 : eX.getFirstFieldErrorMessage('attachments'),
                                          children: (0, r.jsx)(F.s, {
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
                                    ? (0, r.jsx)(S.ZP, {
                                          error: null != (M = null == eX ? void 0 : eX.getFirstFieldErrorMessage(N.NB)) ? M : void 0,
                                          newRoleParams: eQ,
                                          setNewRoleParams: eR,
                                          guildId: _,
                                          listingRoleId: ek,
                                          productId: er
                                      })
                                    : null
                            ]
                        })
                    }),
                    (0, r.jsx)('div', { className: B.horizontalSeparator }),
                    (0, r.jsx)(u.zJl, {
                        children: (0, r.jsxs)('div', {
                            className: B.productPreview,
                            children: [
                                (0, r.jsx)(X.Z, {
                                    disabled: !e$,
                                    disabledTooltip: el ? R.intl.string(R.t['0NQ00t']) : R.intl.string(R.t['Ax89/f']),
                                    published: el,
                                    onClick: () => {
                                        i()(e$, 'Attempting to publish/unpublish when not allowed'), eY(el ? 'unpublish' : 'publish'), e3(D(L({}, eH), { published: !el }));
                                    },
                                    submitting: eS
                                }),
                                (0, r.jsx)('div', { className: B.verticalSeparator }),
                                (0, r.jsx)(u.X6q, {
                                    variant: 'text-xs/bold',
                                    color: 'header-secondary',
                                    className: B.previewHeading,
                                    children: R.intl.string(R.t['6I7nQU'])
                                }),
                                (0, r.jsx)(u.LZC, { size: 4 }),
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: R.intl.string(R.t.Oq4dfX)
                                }),
                                (0, r.jsx)(u.LZC, { size: 16 }),
                                (0, r.jsx)(T.Z, {
                                    imageUrl: eC,
                                    name: '' === ef ? R.intl.string(R.t.EmqIws) : ef,
                                    description: '' === em ? R.intl.string(R.t['11NA2N']) : em,
                                    formattedPrice: ey,
                                    role: eL,
                                    productType: eD,
                                    ctaComponent: (0, r.jsx)(u.gtL, {
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
            (0, r.jsx)(u.mzw, {
                children: (0, r.jsxs)('div', {
                    className: B.footerActionButtons,
                    children: [
                        (0, r.jsxs)('div', {
                            className: B.footerActionLeftButtons,
                            children: [
                                (0, r.jsx)(H, {
                                    text: R.intl.string(R.t.YzGIVF),
                                    value: eB,
                                    onChange: (e) => {
                                        e ? eR((0, S.YP)()) : eR(void 0);
                                    },
                                    warning: null === eQ ? (0, r.jsx)(S.aN, {}) : void 0,
                                    disabled: null != ek
                                }),
                                (0, r.jsx)(H, {
                                    text: R.intl.string(R.t.C6wP2d),
                                    value: eN,
                                    onChange: (e) => {
                                        e
                                            ? eI(!0)
                                            : eK
                                              ? (0, u.ZDy)(async () => {
                                                    let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                                                    return (t) =>
                                                        (0, r.jsx)(
                                                            e,
                                                            D(L({}, t), {
                                                                header: R.intl.string(R.t['2Wihyc']),
                                                                confirmText: R.intl.string(R.t.N86XcH),
                                                                cancelText: R.intl.string(R.t['ETE/oK']),
                                                                onConfirm: eE,
                                                                children: (0, r.jsx)(u.Text, {
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
                        (0, r.jsx)('div', {
                            className: B.footerActionRightButtons,
                            children: el
                                ? (0, r.jsx)(u.zxk, {
                                      color: u.zxk.Colors.PRIMARY,
                                      disabled: !e_,
                                      submitting: ew,
                                      onClick: () => {
                                          i()(e_, 'cannot save changes for published product without adding all fields'), eY('update_publish'), e3(eH);
                                      },
                                      children: R.intl.string(R.t.XYBEaW)
                                  })
                                : (0, r.jsx)(u.zxk, {
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
            (0, r.jsx)(d.W, {
                component: 'div',
                className: B.successNoticeContainer,
                children: e0
            })
        ]
    });
}
function $(e) {
    var t;
    return (0, r.jsx)(V.W, {
        guildId: e.guildId,
        editSkuId: null != (t = e.productId) ? t : void 0,
        onFileSizeError: () => (0, q.Z)(w.ve),
        children: (0, r.jsx)(_, L({}, e))
    });
}
