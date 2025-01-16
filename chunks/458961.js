n.r(t),
    n.d(t, {
        GuildProductEditModalContent: function () {
            return _;
        },
        default: function () {
            return $;
        }
    }),
    n(47120);
var A,
    r,
    a = n(200651),
    l = n(192379),
    i = n(120356),
    o = n.n(i),
    s = n(512722),
    d = n.n(s),
    c = n(831209),
    u = n(399606),
    g = n(215569),
    h = n(481060),
    p = n(749210),
    m = n(852860),
    f = n(607070),
    v = n(725803),
    C = n(313201),
    q = n(76535),
    x = n(215388),
    b = n(674180),
    U = n(884858),
    V = n(695346),
    j = n(430824),
    I = n(937615),
    N = n(73346),
    T = n(506071),
    F = n(587123),
    P = n(240864),
    K = n(863663),
    Z = n(923400),
    W = n(623488),
    X = n(152980),
    B = n(120651),
    S = n(871388),
    z = n(412110),
    R = n(513669),
    Q = n(972797),
    O = n(943516),
    k = n(302463),
    L = n(981631),
    y = n(674563),
    E = n(388032),
    D = n(156399);
let w = (0, C.hQ)(),
    G = (0, C.hQ)(),
    Y = (0, C.hQ)();
function H(e) {
    let { text: t, onChange: n, value: A, disabled: r, warning: l } = e,
        i = (0, C.Dt)(),
        s = r ? 'text-muted' : 'text-normal';
    return (0, a.jsxs)('label', {
        className: o()(D.benefitToggleContainer, { [D.disabled]: r }),
        htmlFor: i,
        children: [
            (0, a.jsx)(h.Text, {
                variant: 'text-sm/medium',
                color: s,
                children: t
            }),
            null != l &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(h.Spacer, {
                            size: 4,
                            horizontal: !0
                        }),
                        l
                    ]
                }),
            (0, a.jsx)(h.Spacer, {
                size: 16,
                horizontal: !0
            }),
            (0, a.jsx)(h.Switch, {
                onChange: n,
                checked: A,
                disabled: r,
                id: i
            })
        ]
    });
}
function M(e, t) {
    return e.filter((e) => {
        let { value: n, label: A } = e;
        return n.toString().includes(t) || A.includes(t);
    });
}
function J(e) {
    let { guildId: t, selectedPriceTier: n, setPriceTier: A } = e,
        { priceTiers: r } = (0, q.R)(t, L.RG5.GUILD_PRODUCTS),
        i = l.useMemo(
            () =>
                (null != r ? r : null != n ? [n] : []).map((e) => ({
                    value: e,
                    label: (0, I.T4)(e, L.pKx.USD)
                })),
            [r, n]
        );
    return (0, a.jsx)(h.SearchableSelect, {
        value: n,
        placeholder: E.intl.string(E.t.aI4J5O),
        maxVisibleItems: 5,
        options: i,
        onChange: A,
        filter: M,
        'aria-required': !0
    });
}
function _(e) {
    var t, A, r, i, o, s, C, q;
    let { guildId: U, productId: M, transitionState: _, onClose: ee } = e,
        [et, en] = l.useState(M),
        eA = (0, u.e7)([P.Z], () => (null == et ? null : P.Z.getGuildProduct(et)), [et]),
        er = (null == eA ? void 0 : eA.published) === !0,
        { application: ea } = (0, v.Z)(U, y.wW.GUILD_ROLE_SUBSCRIPTIONS),
        el = Z.M['0'],
        ei = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        eo = V.QK.useSetting(),
        es = (0, T.n)(),
        ed = l.useCallback(() => {
            var e;
            return (null == eA ? void 0 : null === (e = eA.image_asset) || void 0 === e ? void 0 : e.application_id) == null ? el.data : (0, N._W)(eA.image_asset.application_id, eA.image_asset, 600, es && eo ? void 0 : 'webp');
        }, [el, eA, es, eo]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: ec } = (0, b.gX)(U);
    l.useEffect(() => {
        ec && (ee(), (0, S.B)(E.intl.string(E.t.OLf3xs), E.t['90LBVl']));
    }, [ec, ee]);
    let [eu, eg] = l.useState(null !== (r = null == eA ? void 0 : eA.name) && void 0 !== r ? r : ''),
        [eh, ep] = l.useState(null !== (i = null == eA ? void 0 : eA.description) && void 0 !== i ? i : ''),
        [em, ef] = l.useState(null !== (o = null == eA ? void 0 : eA.price_tier) && void 0 !== o ? o : void 0),
        [ev, eC] = l.useState(ed),
        [eq, ex] = l.useState(null !== (s = null == eA ? void 0 : null === (t = eA.image_asset) || void 0 === t ? void 0 : t.filename) && void 0 !== s ? s : el.name),
        [eb, eU] = l.useState(!1),
        [eV, ej] = l.useState(),
        eI = l.useMemo(() => (null != em ? (0, I.T4)(em, L.pKx.USD) : void 0), [em]),
        [eN, eT] = l.useState(!0),
        { changesSaving: eF, saveError: eP, saveProductWithAttachments: eK, hasUnsavedAttachmentChanges: eZ, cancelUnusedUploads: eW } = (0, F.P)(),
        eX = (null == eA ? void 0 : eA.attachments) != null && (null == eA ? void 0 : eA.attachments.length) > 0,
        eB = null != eP ? eP : eV,
        eS = null != eF && 'published' in eF,
        ez = null != eF && !eS,
        eR = null !== (C = null == eA ? void 0 : eA.role_id) && void 0 !== C ? C : null,
        [eQ, eO] = l.useState(),
        ek = null != eQ || null != eR,
        eL = (0, u.e7)([j.Z], () => (null != eR && null !== eQ ? j.Z.getRole(U, eR) : null != eQ ? eQ : void 0), [eQ, eR, U]),
        ey = '';
    ek && eN ? (ey = E.intl.string(E.t.ih4QMT)) : ek ? (ey = E.intl.string(E.t.o9xphY)) : eN && (ey = E.intl.string(E.t.DWYJub));
    let eE = () => {
            eT(!1), eW();
        },
        [eD, ew] = l.useState(),
        {
            changes: eG,
            hasUnsavedChanges: eY,
            canSaveForDraft: eH,
            canSaveForPublished: eM,
            canPublishOrUnpublish: eJ
        } = l.useMemo(
            () =>
                (0, K.fG)({
                    guildProductListing: eA,
                    name: eu,
                    priceTier: em,
                    description: eh,
                    image: ev,
                    imageName: eq,
                    isImageChanged: eb,
                    newRoleParams: eQ,
                    hasSavedAttachments: eX,
                    hasUnsavedAttachmentChanges: eZ
                }),
            [eA, eu, em, eh, ev, eq, eb, eQ, eX, eZ]
        ),
        e_ = l.useMemo(
            () =>
                eY || null == eD || 'publish' === eD || null != eB
                    ? null
                    : (0, a.jsx)(h.SlideIn, {
                          className: D.successNotice,
                          children: (0, a.jsx)(m.Z, {
                              message: (0, a.jsxs)('div', {
                                  className: D.successNoticeMessage,
                                  children: [
                                      (0, a.jsx)(h.CircleCheckIcon, {
                                          size: 'md',
                                          color: c.Z.BUTTON_POSITIVE_BACKGROUND,
                                          secondaryColor: c.Z.WHITE
                                      }),
                                      (0, a.jsx)(h.Text, {
                                          variant: 'text-md/medium',
                                          children: 'draft' === eD ? E.intl.string(E.t['3Rv4MD']) : 'update_publish' === eD ? E.intl.string(E.t['8fPiBw']) : E.intl.string(E.t['3LUFnJ'])
                                      })
                                  ]
                              }),
                              onReset: () => ew(void 0),
                              onResetText: E.intl.string(E.t.T6QuWV)
                          })
                      }),
            [eB, eY, eD]
        ),
        e$ = l.useCallback(() => {
            eY
                ? (0, B.Z)({
                      title: E.intl.string(E.t.FVDhIS),
                      body: E.intl.string(E.t.Hgdhwc),
                      cta: E.intl.string(E.t.h0bti4),
                      closeLabel: E.intl.string(E.t['+WYo0t']),
                      onConfirm: () => {
                          ee();
                      }
                  })
                : ee();
        }, [ee, eY]);
    l.useEffect(() => {
        (0, h.updateModal)(
            k.Yz,
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
        let t = (0, K.pM)({ newRoleParams: eQ });
        if ((ej(t), null != t)) return;
        let n = await eK(e);
        if ((eU(!1), null != n)) {
            if ((null != e.name && eg(n.name), null != e.description && ep(n.description), null != eQ)) {
                let e = n.role_id;
                d()(null != e, 'Cannot update role without role ID'), await p.Z.updateRole(U, e, eQ);
            }
            eO(void 0), en(n.id), 'published' in e && !0 === e.published && ee();
        }
    };
    l.useEffect(() => {
        if (null != eB) {
            var e;
            (0, z.V)(eB, U, null == ea ? void 0 : null === (e = ea.team) || void 0 === e ? void 0 : e.id);
        }
    }, [eB, U, ea]),
        l.useEffect(() => {
            eY && ew(void 0);
        }, [eY]);
    let e1 = l.useRef(null);
    return (0, a.jsxs)(h.ModalRoot, {
        transitionState: _,
        size: h.ModalSize.DYNAMIC,
        className: D.modalRoot,
        'aria-labelledby': w,
        children: [
            (0, a.jsxs)(h.ModalHeader, {
                className: D.modalHeader,
                separator: !1,
                children: [
                    (0, a.jsxs)('div', {
                        className: D.headerText,
                        children: [
                            (0, a.jsx)(h.Heading, {
                                id: w,
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: E.intl.string(E.t.DnNl1d)
                            }),
                            (0, a.jsx)(h.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: E.intl.string(E.t['Tu7f+f'])
                            })
                        ]
                    }),
                    (0, a.jsx)(h.ModalCloseButton, {
                        onClick: e$,
                        className: D.__invalid_modalCloseButton
                    })
                ]
            }),
            (0, a.jsxs)(h.ModalContent, {
                className: D.modalContent,
                scrollbarType: 'none',
                children: [
                    (0, a.jsx)(h.ScrollerThin, {
                        children: (0, a.jsxs)('div', {
                            className: D.productFieldsSection,
                            ref: e1,
                            children: [
                                (0, a.jsx)(h.FormItem, {
                                    title: E.intl.string(E.t.Hsk7xc),
                                    tag: 'label',
                                    htmlFor: G,
                                    error: null == eB ? void 0 : eB.getFirstFieldErrorMessage('name'),
                                    children: (0, a.jsx)(h.TextArea, {
                                        value: eu,
                                        onChange: eg,
                                        id: G,
                                        maxLength: 100,
                                        placeholder: E.intl.string(E.t['/BiYSE']),
                                        rows: 1,
                                        autosize: !0,
                                        showCharacterCount: eu.length > 0,
                                        showRemainingCharacterCount: eu.length > 0,
                                        required: !0,
                                        className: eu.length > 0 ? D.nameArea : void 0
                                    })
                                }),
                                (0, a.jsx)(h.FormItem, {
                                    title: E.intl.string(E.t.QdKLyc),
                                    tag: 'label',
                                    error: null == eB ? void 0 : eB.getFirstFieldErrorMessage('description'),
                                    htmlFor: Y,
                                    children: (0, a.jsx)(x.Z, {
                                        id: Y,
                                        className: D.descriptionArea,
                                        value: eh,
                                        onChange: ep,
                                        maxLength: 1500,
                                        placeholder: E.intl.string(E.t.BFwyur),
                                        showCharacterCount: eh.length > 0,
                                        parentModalKey: k.Yz,
                                        required: !0
                                    })
                                }),
                                (0, a.jsx)(h.FormItem, {
                                    title: E.intl.string(E.t['CAY/vr']),
                                    tag: 'label',
                                    error: null == eB ? void 0 : eB.getFirstFieldErrorMessage('price_tier'),
                                    children: (0, a.jsx)(J, {
                                        guildId: U,
                                        selectedPriceTier: em,
                                        setPriceTier: ef
                                    })
                                }),
                                (0, a.jsxs)(h.FormItem, {
                                    title: E.intl.string(E.t['sqXj6+']),
                                    tag: 'label',
                                    error: null == eB ? void 0 : eB.getFirstFieldErrorMessage('image'),
                                    titleClassName: D.thumbnailLabel,
                                    children: [
                                        (0, a.jsx)(h.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: E.intl.string(E.t.yOU4Vl)
                                        }),
                                        (0, a.jsx)(h.Spacer, { size: 10 }),
                                        (0, a.jsx)(R.Z, {
                                            presetImages: Z.M,
                                            radioGroupAriaLabel: E.intl.string(E.t.fKzQj4),
                                            image: ev,
                                            imageName: eq,
                                            savedImageName: null == eA ? void 0 : null === (A = eA.image_asset) || void 0 === A ? void 0 : A.filename,
                                            onChange: (e, t) => {
                                                if (null != e) {
                                                    var n;
                                                    eC(e), ex(t), eU(e.startsWith('data:') || t !== (null == eA ? void 0 : null === (n = eA.image_asset) || void 0 === n ? void 0 : n.filename));
                                                }
                                            }
                                        })
                                    ]
                                }),
                                eN
                                    ? (0, a.jsx)(h.FormItem, {
                                          title: E.intl.string(E.t.zLrtkJ),
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
                                ek
                                    ? (0, a.jsx)(O.ZP, {
                                          error: null !== (q = null == eB ? void 0 : eB.getFirstFieldErrorMessage(K.NB)) && void 0 !== q ? q : void 0,
                                          newRoleParams: eQ,
                                          setNewRoleParams: eO,
                                          guildId: U,
                                          listingRoleId: eR,
                                          productId: et
                                      })
                                    : null
                            ]
                        })
                    }),
                    (0, a.jsx)('div', { className: D.horizontalSeparator }),
                    (0, a.jsx)(h.ScrollerThin, {
                        children: (0, a.jsxs)('div', {
                            className: D.productPreview,
                            children: [
                                (0, a.jsx)(Q.Z, {
                                    disabled: !eJ,
                                    disabledTooltip: er ? E.intl.string(E.t['0NQ00t']) : E.intl.string(E.t['Ax89/f']),
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
                                (0, a.jsx)('div', { className: D.verticalSeparator }),
                                (0, a.jsx)(h.Heading, {
                                    variant: 'text-xs/bold',
                                    color: 'header-secondary',
                                    className: D.previewHeading,
                                    children: E.intl.string(E.t['6I7nQU'])
                                }),
                                (0, a.jsx)(h.Spacer, { size: 4 }),
                                (0, a.jsx)(h.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: E.intl.string(E.t.Oq4dfX)
                                }),
                                (0, a.jsx)(h.Spacer, { size: 16 }),
                                (0, a.jsx)(W.Z, {
                                    imageUrl: ev,
                                    name: '' === eu ? E.intl.string(E.t.EmqIws) : eu,
                                    description: '' === eh ? E.intl.string(E.t['11NA2N']) : eh,
                                    formattedPrice: eI,
                                    role: eL,
                                    productType: ey,
                                    ctaComponent: (0, a.jsx)(h.ShinyButton, {
                                        shineSize: h.ShinyButton.ShineSizes.SMALL,
                                        pauseAnimation: ei || !es,
                                        className: D.productPreviewCtaButton,
                                        children: E.intl.string(E.t.xUi3BA)
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
                    className: D.footerActionButtons,
                    children: [
                        (0, a.jsxs)('div', {
                            className: D.footerActionLeftButtons,
                            children: [
                                (0, a.jsx)(H, {
                                    text: E.intl.string(E.t.YzGIVF),
                                    value: ek,
                                    onChange: (e) => {
                                        e ? eO((0, O.YP)()) : eO(void 0);
                                    },
                                    warning: null === eQ ? (0, a.jsx)(O.aN, {}) : void 0,
                                    disabled: null != eR
                                }),
                                (0, a.jsx)(H, {
                                    text: E.intl.string(E.t.C6wP2d),
                                    value: eN,
                                    onChange: (e) => {
                                        e
                                            ? eT(!0)
                                            : eZ
                                              ? (0, h.openModalLazy)(async () => {
                                                    let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                                                    return (t) =>
                                                        (0, a.jsx)(e, {
                                                            ...t,
                                                            header: E.intl.string(E.t['2Wihyc']),
                                                            confirmText: E.intl.string(E.t.N86XcH),
                                                            cancelText: E.intl.string(E.t['ETE/oK']),
                                                            onConfirm: eE,
                                                            children: (0, a.jsx)(h.Text, {
                                                                variant: 'text-md/normal',
                                                                children: E.intl.string(E.t.ixRBLi)
                                                            })
                                                        });
                                                })
                                              : eE();
                                    },
                                    disabled: eX
                                })
                            ]
                        }),
                        (0, a.jsx)('div', {
                            className: D.footerActionRightButtons,
                            children: er
                                ? (0, a.jsx)(h.Button, {
                                      color: h.Button.Colors.PRIMARY,
                                      disabled: !eM,
                                      submitting: ez,
                                      onClick: () => {
                                          d()(eM, 'cannot save changes for published product without adding all fields'), ew('update_publish'), e0(eG);
                                      },
                                      children: E.intl.string(E.t.XYBEaW)
                                  })
                                : (0, a.jsx)(a.Fragment, {
                                      children: (0, a.jsx)(h.Button, {
                                          color: h.Button.Colors.PRIMARY,
                                          disabled: !eH,
                                          submitting: ez,
                                          onClick: () => {
                                              d()(eH, 'cannot save changes without name or price tier'), ew('draft'), e0(eG);
                                          },
                                          children: E.intl.string(E.t.ZCjwoa)
                                      })
                                  })
                        })
                    ]
                })
            }),
            (0, a.jsx)(g.W, {
                component: 'div',
                className: D.successNoticeContainer,
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
        onFileSizeError: () => (0, U.Z)(k.ve),
        children: (0, a.jsx)(_, { ...e })
    });
}
((r = A || (A = {})).DRAFT = 'draft'), (r.PUBLISH = 'publish'), (r.UPDATE_PUBLISH = 'update_publish'), (r.UNPUBLISH = 'unpublish');
