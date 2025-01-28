A.r(t),
    A.d(t, {
        GuildProductEditModalContent: function () {
            return _;
        },
        default: function () {
            return $;
        }
    }),
    A(47120);
var n,
    r,
    a = A(200651),
    i = A(192379),
    l = A(120356),
    o = A.n(l),
    s = A(512722),
    d = A.n(s),
    c = A(831209),
    u = A(399606),
    g = A(215569),
    h = A(481060),
    p = A(749210),
    m = A(852860),
    f = A(607070),
    v = A(725803),
    C = A(313201),
    q = A(76535),
    x = A(215388),
    b = A(674180),
    U = A(884858),
    V = A(695346),
    j = A(430824),
    I = A(937615),
    N = A(73346),
    T = A(506071),
    F = A(587123),
    P = A(240864),
    K = A(863663),
    Z = A(923400),
    W = A(623488),
    X = A(152980),
    B = A(120651),
    S = A(871388),
    z = A(412110),
    Q = A(513669),
    R = A(972797),
    O = A(943516),
    L = A(302463),
    k = A(981631),
    y = A(674563),
    D = A(388032),
    E = A(156399);
let w = (0, C.hQ)(),
    G = (0, C.hQ)(),
    Y = (0, C.hQ)();
function H(e) {
    let { text: t, onChange: A, value: n, disabled: r, warning: i } = e,
        l = (0, C.Dt)(),
        s = r ? 'text-muted' : 'text-normal';
    return (0, a.jsxs)('label', {
        className: o()(E.benefitToggleContainer, { [E.disabled]: r }),
        htmlFor: l,
        children: [
            (0, a.jsx)(h.Text, {
                variant: 'text-sm/medium',
                color: s,
                children: t
            }),
            null != i &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(h.Spacer, {
                            size: 4,
                            horizontal: !0
                        }),
                        i
                    ]
                }),
            (0, a.jsx)(h.Spacer, {
                size: 16,
                horizontal: !0
            }),
            (0, a.jsx)(h.Switch, {
                onChange: A,
                checked: n,
                disabled: r,
                id: l
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
    let { guildId: t, selectedPriceTier: A, setPriceTier: n } = e,
        { priceTiers: r } = (0, q.R)(t, k.RG5.GUILD_PRODUCTS),
        l = i.useMemo(
            () =>
                (null != r ? r : null != A ? [A] : []).map((e) => ({
                    value: e,
                    label: (0, I.T4)(e, k.pKx.USD)
                })),
            [r, A]
        );
    return (0, a.jsx)(h.SearchableSelect, {
        value: A,
        placeholder: D.intl.string(D.t.aI4J5O),
        maxVisibleItems: 5,
        options: l,
        onChange: n,
        filter: M,
        'aria-required': !0
    });
}
function _(e) {
    var t, n, r, l, o, s, C, q;
    let { guildId: U, productId: M, transitionState: _, onClose: ee } = e,
        [et, eA] = i.useState(M),
        en = (0, u.e7)([P.Z], () => (null == et ? null : P.Z.getGuildProduct(et)), [et]),
        er = (null == en ? void 0 : en.published) === !0,
        { application: ea } = (0, v.Z)(U, y.wW.GUILD_ROLE_SUBSCRIPTIONS),
        ei = Z.M['0'],
        el = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        eo = V.QK.useSetting(),
        es = (0, T.n)(),
        ed = i.useCallback(() => {
            var e;
            return (null == en ? void 0 : null === (e = en.image_asset) || void 0 === e ? void 0 : e.application_id) == null ? ei.data : (0, N._W)(en.image_asset.application_id, en.image_asset, 600, es && eo ? void 0 : 'webp');
        }, [ei, en, es, eo]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: ec } = (0, b.gX)(U);
    i.useEffect(() => {
        ec && (ee(), (0, S.B)(D.intl.string(D.t.OLf3xs), D.t['90LBVl']));
    }, [ec, ee]);
    let [eu, eg] = i.useState(null !== (r = null == en ? void 0 : en.name) && void 0 !== r ? r : ''),
        [eh, ep] = i.useState(null !== (l = null == en ? void 0 : en.description) && void 0 !== l ? l : ''),
        [em, ef] = i.useState(null !== (o = null == en ? void 0 : en.price_tier) && void 0 !== o ? o : void 0),
        [ev, eC] = i.useState(ed),
        [eq, ex] = i.useState(null !== (s = null == en ? void 0 : null === (t = en.image_asset) || void 0 === t ? void 0 : t.filename) && void 0 !== s ? s : ei.name),
        [eb, eU] = i.useState(!1),
        [eV, ej] = i.useState(),
        eI = i.useMemo(() => (null != em ? (0, I.T4)(em, k.pKx.USD) : void 0), [em]),
        [eN, eT] = i.useState(!0),
        { changesSaving: eF, saveError: eP, saveProductWithAttachments: eK, hasUnsavedAttachmentChanges: eZ, cancelUnusedUploads: eW } = (0, F.P)(),
        eX = (null == en ? void 0 : en.attachments) != null && (null == en ? void 0 : en.attachments.length) > 0,
        eB = null != eP ? eP : eV,
        eS = null != eF && 'published' in eF,
        ez = null != eF && !eS,
        eQ = null !== (C = null == en ? void 0 : en.role_id) && void 0 !== C ? C : null,
        [eR, eO] = i.useState(),
        eL = null != eR || null != eQ,
        ek = (0, u.e7)([j.Z], () => (null != eQ && null !== eR ? j.Z.getRole(U, eQ) : null != eR ? eR : void 0), [eR, eQ, U]),
        ey = '';
    eL && eN ? (ey = D.intl.string(D.t.ih4QMT)) : eL ? (ey = D.intl.string(D.t.o9xphY)) : eN && (ey = D.intl.string(D.t.DWYJub));
    let eD = () => {
            eT(!1), eW();
        },
        [eE, ew] = i.useState(),
        {
            changes: eG,
            hasUnsavedChanges: eY,
            canSaveForDraft: eH,
            canSaveForPublished: eM,
            canPublishOrUnpublish: eJ
        } = i.useMemo(
            () =>
                (0, K.fG)({
                    guildProductListing: en,
                    name: eu,
                    priceTier: em,
                    description: eh,
                    image: ev,
                    imageName: eq,
                    isImageChanged: eb,
                    newRoleParams: eR,
                    hasSavedAttachments: eX,
                    hasUnsavedAttachmentChanges: eZ
                }),
            [en, eu, em, eh, ev, eq, eb, eR, eX, eZ]
        ),
        e_ = i.useMemo(
            () =>
                eY || null == eE || 'publish' === eE || null != eB
                    ? null
                    : (0, a.jsx)(h.SlideIn, {
                          className: E.successNotice,
                          children: (0, a.jsx)(m.Z, {
                              message: (0, a.jsxs)('div', {
                                  className: E.successNoticeMessage,
                                  children: [
                                      (0, a.jsx)(h.CircleCheckIcon, {
                                          size: 'md',
                                          color: c.Z.BUTTON_POSITIVE_BACKGROUND,
                                          secondaryColor: c.Z.WHITE
                                      }),
                                      (0, a.jsx)(h.Text, {
                                          variant: 'text-md/medium',
                                          children: 'draft' === eE ? D.intl.string(D.t['3Rv4MD']) : 'update_publish' === eE ? D.intl.string(D.t['8fPiBw']) : D.intl.string(D.t['3LUFnJ'])
                                      })
                                  ]
                              }),
                              onReset: () => ew(void 0),
                              onResetText: D.intl.string(D.t.T6QuWV)
                          })
                      }),
            [eB, eY, eE]
        ),
        e$ = i.useCallback(() => {
            eY
                ? (0, B.Z)({
                      title: D.intl.string(D.t.FVDhIS),
                      body: D.intl.string(D.t.Hgdhwc),
                      cta: D.intl.string(D.t.h0bti4),
                      closeLabel: D.intl.string(D.t['+WYo0t']),
                      onConfirm: () => {
                          ee();
                      }
                  })
                : ee();
        }, [ee, eY]);
    i.useEffect(() => {
        (0, h.updateModal)(
            L.Yz,
            (e) =>
                (0, a.jsx)($, {
                    guildId: U,
                    productId: et,
                    ...e
                }),
            e$
        );
    }, [U, e$, et]);
    let e0 = async (e) => {
        let t = (0, K.pM)({ newRoleParams: eR });
        if ((ej(t), null != t)) return;
        let A = await eK(e);
        if ((eU(!1), null != A)) {
            if ((null != e.name && eg(A.name), null != e.description && ep(A.description), null != eR)) {
                let e = A.role_id;
                d()(null != e, 'Cannot update role without role ID'), await p.Z.updateRole(U, e, eR);
            }
            eO(void 0), eA(A.id), 'published' in e && !0 === e.published && ee();
        }
    };
    i.useEffect(() => {
        if (null != eB) {
            var e;
            (0, z.V)(eB, U, null == ea ? void 0 : null === (e = ea.team) || void 0 === e ? void 0 : e.id);
        }
    }, [eB, U, ea]),
        i.useEffect(() => {
            eY && ew(void 0);
        }, [eY]);
    let e1 = i.useRef(null);
    return (0, a.jsxs)(h.ModalRoot, {
        transitionState: _,
        size: h.ModalSize.DYNAMIC,
        className: E.modalRoot,
        'aria-labelledby': w,
        children: [
            (0, a.jsxs)(h.ModalHeader, {
                className: E.modalHeader,
                separator: !1,
                children: [
                    (0, a.jsxs)('div', {
                        className: E.headerText,
                        children: [
                            (0, a.jsx)(h.Heading, {
                                id: w,
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: D.intl.string(D.t.DnNl1d)
                            }),
                            (0, a.jsx)(h.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: D.intl.string(D.t['Tu7f+f'])
                            })
                        ]
                    }),
                    (0, a.jsx)(h.ModalCloseButton, {
                        onClick: e$,
                        className: E.__invalid_modalCloseButton
                    })
                ]
            }),
            (0, a.jsxs)(h.ModalContent, {
                className: E.modalContent,
                scrollbarType: 'none',
                children: [
                    (0, a.jsx)(h.ScrollerThin, {
                        children: (0, a.jsxs)('div', {
                            className: E.productFieldsSection,
                            ref: e1,
                            children: [
                                (0, a.jsx)(h.FormItem, {
                                    title: D.intl.string(D.t.Hsk7xc),
                                    tag: 'label',
                                    htmlFor: G,
                                    error: null == eB ? void 0 : eB.getFirstFieldErrorMessage('name'),
                                    children: (0, a.jsx)(h.TextArea, {
                                        value: eu,
                                        onChange: eg,
                                        id: G,
                                        maxLength: 100,
                                        placeholder: D.intl.string(D.t['/BiYSE']),
                                        rows: 1,
                                        autosize: !0,
                                        showCharacterCount: eu.length > 0,
                                        showRemainingCharacterCount: eu.length > 0,
                                        required: !0,
                                        className: eu.length > 0 ? E.nameArea : void 0
                                    })
                                }),
                                (0, a.jsx)(h.FormItem, {
                                    title: D.intl.string(D.t.QdKLyc),
                                    tag: 'label',
                                    error: null == eB ? void 0 : eB.getFirstFieldErrorMessage('description'),
                                    htmlFor: Y,
                                    children: (0, a.jsx)(x.Z, {
                                        id: Y,
                                        className: E.descriptionArea,
                                        value: eh,
                                        onChange: ep,
                                        maxLength: 1500,
                                        placeholder: D.intl.string(D.t.BFwyur),
                                        showCharacterCount: eh.length > 0,
                                        parentModalKey: L.Yz,
                                        required: !0
                                    })
                                }),
                                (0, a.jsx)(h.FormItem, {
                                    title: D.intl.string(D.t['CAY/vr']),
                                    tag: 'label',
                                    error: null == eB ? void 0 : eB.getFirstFieldErrorMessage('price_tier'),
                                    children: (0, a.jsx)(J, {
                                        guildId: U,
                                        selectedPriceTier: em,
                                        setPriceTier: ef
                                    })
                                }),
                                (0, a.jsxs)(h.FormItem, {
                                    title: D.intl.string(D.t['sqXj6+']),
                                    tag: 'label',
                                    error: null == eB ? void 0 : eB.getFirstFieldErrorMessage('image'),
                                    titleClassName: E.thumbnailLabel,
                                    children: [
                                        (0, a.jsx)(h.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: D.intl.string(D.t.yOU4Vl)
                                        }),
                                        (0, a.jsx)(h.Spacer, { size: 10 }),
                                        (0, a.jsx)(Q.Z, {
                                            presetImages: Z.M,
                                            radioGroupAriaLabel: D.intl.string(D.t.fKzQj4),
                                            image: ev,
                                            imageName: eq,
                                            savedImageName: null == en ? void 0 : null === (n = en.image_asset) || void 0 === n ? void 0 : n.filename,
                                            onChange: (e, t) => {
                                                if (null != e) {
                                                    var A;
                                                    eC(e), ex(t), eU(e.startsWith('data:') || t !== (null == en ? void 0 : null === (A = en.image_asset) || void 0 === A ? void 0 : A.filename));
                                                }
                                            }
                                        })
                                    ]
                                }),
                                eN
                                    ? (0, a.jsx)(h.FormItem, {
                                          title: D.intl.string(D.t.zLrtkJ),
                                          error: null == eB ? void 0 : eB.getFirstFieldErrorMessage('attachments'),
                                          children: (0, a.jsx)(X.s, {
                                              onFileAdded: () => {
                                                  var e;
                                                  null === (e = e1.current) ||
                                                      void 0 === e ||
                                                      e.scrollIntoView({
                                                          behavior: 'smooth',
                                                          block: 'end'
                                                      });
                                              }
                                          })
                                      })
                                    : null,
                                eL
                                    ? (0, a.jsx)(O.ZP, {
                                          error: null !== (q = null == eB ? void 0 : eB.getFirstFieldErrorMessage(K.NB)) && void 0 !== q ? q : void 0,
                                          newRoleParams: eR,
                                          setNewRoleParams: eO,
                                          guildId: U,
                                          listingRoleId: eQ,
                                          productId: et
                                      })
                                    : null
                            ]
                        })
                    }),
                    (0, a.jsx)('div', { className: E.horizontalSeparator }),
                    (0, a.jsx)(h.ScrollerThin, {
                        children: (0, a.jsxs)('div', {
                            className: E.productPreview,
                            children: [
                                (0, a.jsx)(R.Z, {
                                    disabled: !eJ,
                                    disabledTooltip: er ? D.intl.string(D.t['0NQ00t']) : D.intl.string(D.t['Ax89/f']),
                                    published: er,
                                    onClick: () => {
                                        d()(eJ, 'Attempting to publish/unpublish when not allowed'),
                                            ew(er ? 'unpublish' : 'publish'),
                                            e0({
                                                ...eG,
                                                published: !er
                                            });
                                    },
                                    submitting: eS
                                }),
                                (0, a.jsx)('div', { className: E.verticalSeparator }),
                                (0, a.jsx)(h.Heading, {
                                    variant: 'text-xs/bold',
                                    color: 'header-secondary',
                                    className: E.previewHeading,
                                    children: D.intl.string(D.t['6I7nQU'])
                                }),
                                (0, a.jsx)(h.Spacer, { size: 4 }),
                                (0, a.jsx)(h.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: D.intl.string(D.t.Oq4dfX)
                                }),
                                (0, a.jsx)(h.Spacer, { size: 16 }),
                                (0, a.jsx)(W.Z, {
                                    imageUrl: ev,
                                    name: '' === eu ? D.intl.string(D.t.EmqIws) : eu,
                                    description: '' === eh ? D.intl.string(D.t['11NA2N']) : eh,
                                    formattedPrice: eI,
                                    role: ek,
                                    productType: ey,
                                    ctaComponent: (0, a.jsx)(h.ShinyButton, {
                                        shineSize: h.ShinyButton.ShineSizes.SMALL,
                                        pauseAnimation: el || !es,
                                        className: E.productPreviewCtaButton,
                                        children: D.intl.string(D.t.xUi3BA)
                                    }),
                                    cardWidth: 340,
                                    thumbnailHeight: 190
                                })
                            ]
                        })
                    })
                ]
            }),
            (0, a.jsx)(h.ModalFooter, {
                children: (0, a.jsxs)('div', {
                    className: E.footerActionButtons,
                    children: [
                        (0, a.jsxs)('div', {
                            className: E.footerActionLeftButtons,
                            children: [
                                (0, a.jsx)(H, {
                                    text: D.intl.string(D.t.YzGIVF),
                                    value: eL,
                                    onChange: (e) => {
                                        e ? eO((0, O.YP)()) : eO(void 0);
                                    },
                                    warning: null === eR ? (0, a.jsx)(O.aN, {}) : void 0,
                                    disabled: null != eQ
                                }),
                                (0, a.jsx)(H, {
                                    text: D.intl.string(D.t.C6wP2d),
                                    value: eN,
                                    onChange: (e) => {
                                        e
                                            ? eT(!0)
                                            : eZ
                                              ? (0, h.openModalLazy)(async () => {
                                                    let { ConfirmModal: e } = await Promise.resolve().then(A.bind(A, 481060));
                                                    return (t) =>
                                                        (0, a.jsx)(e, {
                                                            ...t,
                                                            header: D.intl.string(D.t['2Wihyc']),
                                                            confirmText: D.intl.string(D.t.N86XcH),
                                                            cancelText: D.intl.string(D.t['ETE/oK']),
                                                            onConfirm: eD,
                                                            children: (0, a.jsx)(h.Text, {
                                                                variant: 'text-md/normal',
                                                                children: D.intl.string(D.t.ixRBLi)
                                                            })
                                                        });
                                                })
                                              : eD();
                                    },
                                    disabled: eX
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: E.footerActionRightButtons,
                            children: er
                                ? (0, a.jsx)(h.Button, {
                                      color: h.Button.Colors.PRIMARY,
                                      disabled: !eM,
                                      submitting: ez,
                                      onClick: () => {
                                          d()(eM, 'cannot save changes for published product without adding all fields'), ew('update_publish'), e0(eG);
                                      },
                                      children: D.intl.string(D.t.XYBEaW)
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                      children: (0, a.jsx)(h.Button, {
                                          color: h.Button.Colors.PRIMARY,
                                          disabled: !eH,
                                          submitting: ez,
                                          onClick: () => {
                                              d()(eH, 'cannot save changes without name or price tier'), ew('draft'), e0(eG);
                                          },
                                          children: D.intl.string(D.t.ZCjwoa)
                                      })
                                  })
                        })
                    ]
                })
            }),
            (0, a.jsx)(g.W, {
                component: 'div',
                className: E.successNoticeContainer,
                children: e_
            })
        ]
    });
}
function $(e) {
    var t;
    return (0, a.jsx)(F.W, {
        guildId: e.guildId,
        editSkuId: null !== (t = e.productId) && void 0 !== t ? t : void 0,
        onFileSizeError: () => (0, U.Z)(L.ve),
        children: (0, a.jsx)(_, { ...e })
    });
}
((r = n || (n = {})).DRAFT = 'draft'), (r.PUBLISH = 'publish'), (r.UPDATE_PUBLISH = 'update_publish'), (r.UNPUBLISH = 'unpublish');
