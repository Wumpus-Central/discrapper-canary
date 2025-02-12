t.d(e, { default: () => J }), t(47120);
var n = t(200651),
    a = t(192379),
    l = t(120356),
    r = t.n(l),
    i = t(512722),
    o = t.n(i),
    s = t(831209),
    d = t(399606),
    c = t(215569),
    u = t(481060),
    g = t(749210),
    m = t(852860),
    h = t(607070),
    f = t(725803),
    C = t(313201),
    p = t(76535),
    q = t(215388),
    v = t(674180),
    x = t(884858),
    U = t(695346),
    b = t(430824),
    V = t(937615),
    j = t(73346),
    N = t(506071),
    I = t(587123),
    T = t(240864),
    F = t(863663),
    K = t(923400),
    P = t(623488),
    Z = t(152980),
    z = t(120651),
    X = t(871388),
    W = t(412110),
    Q = t(513669),
    B = t(972797),
    R = t(943516),
    k = t(302463),
    L = t(981631),
    S = t(674563),
    O = t(388032),
    y = t(432076);
let E = (0, C.hQ)(),
    G = (0, C.hQ)(),
    w = (0, C.hQ)();
function Y(A) {
    let { text: e, onChange: t, value: a, disabled: l, warning: i } = A,
        o = (0, C.Dt)(),
        s = l ? 'text-muted' : 'text-normal';
    return (0, n.jsxs)('label', {
        className: r()(y.benefitToggleContainer, { [y.disabled]: l }),
        htmlFor: o,
        children: [
            (0, n.jsx)(u.Text, {
                variant: 'text-sm/medium',
                color: s,
                children: e
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
                onChange: t,
                checked: a,
                disabled: l,
                id: o
            })
        ]
    });
}
function H(A, e) {
    return A.filter((A) => {
        let { value: t, label: n } = A;
        return t.toString().includes(e) || n.includes(e);
    });
}
function D(A) {
    let { guildId: e, selectedPriceTier: t, setPriceTier: l } = A,
        { priceTiers: r } = (0, p.R)(e, L.RG5.GUILD_PRODUCTS),
        i = a.useMemo(
            () =>
                (null != r ? r : null != t ? [t] : []).map((A) => ({
                    value: A,
                    label: (0, V.T4)(A, L.pKx.USD)
                })),
            [r, t]
        );
    return (0, n.jsx)(u.VcW, {
        value: t,
        placeholder: O.intl.string(O.t.aI4J5O),
        maxVisibleItems: 5,
        options: i,
        onChange: l,
        filter: H,
        'aria-required': !0
    });
}
function M(A) {
    var e, l, r, i, C, p, x, H;
    let { guildId: M, productId: _, transitionState: $, onClose: AA } = A,
        [Ae, At] = a.useState(_),
        An = (0, d.e7)([T.Z], () => (null == Ae ? null : T.Z.getGuildProduct(Ae)), [Ae]),
        Aa = (null == An ? void 0 : An.published) === !0,
        { application: Al } = (0, f.Z)(M, S.wW.GUILD_ROLE_SUBSCRIPTIONS),
        Ar = K.M['0'],
        Ai = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
        Ao = U.QK.useSetting(),
        As = (0, N.n)(),
        Ad = a.useCallback(() => {
            var A;
            return (null == An ? void 0 : null === (A = An.image_asset) || void 0 === A ? void 0 : A.application_id) == null ? Ar.data : (0, j._W)(An.image_asset.application_id, An.image_asset, 600, As && Ao ? void 0 : 'webp');
        }, [Ar, An, As, Ao]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: Ac } = (0, v.gX)(M);
    a.useEffect(() => {
        Ac && (AA(), (0, X.B)(O.intl.string(O.t.OLf3xs), O.t['90LBVl']));
    }, [Ac, AA]);
    let [Au, Ag] = a.useState(null !== (r = null == An ? void 0 : An.name) && void 0 !== r ? r : ''),
        [Am, Ah] = a.useState(null !== (i = null == An ? void 0 : An.description) && void 0 !== i ? i : ''),
        [Af, AC] = a.useState(null !== (C = null == An ? void 0 : An.price_tier) && void 0 !== C ? C : void 0),
        [Ap, Aq] = a.useState(Ad),
        [Av, Ax] = a.useState(null !== (p = null == An ? void 0 : null === (e = An.image_asset) || void 0 === e ? void 0 : e.filename) && void 0 !== p ? p : Ar.name),
        [AU, Ab] = a.useState(!1),
        [AV, Aj] = a.useState(),
        AN = a.useMemo(() => (null != Af ? (0, V.T4)(Af, L.pKx.USD) : void 0), [Af]),
        [AI, AT] = a.useState(!0),
        { changesSaving: AF, saveError: AK, saveProductWithAttachments: AP, hasUnsavedAttachmentChanges: AZ, cancelUnusedUploads: Az } = (0, I.P)(),
        AX = (null == An ? void 0 : An.attachments) != null && (null == An ? void 0 : An.attachments.length) > 0,
        AW = null != AK ? AK : AV,
        AQ = null != AF && 'published' in AF,
        AB = null != AF && !AQ,
        AR = null !== (x = null == An ? void 0 : An.role_id) && void 0 !== x ? x : null,
        [Ak, AL] = a.useState(),
        AS = null != Ak || null != AR,
        AO = (0, d.e7)([b.Z], () => (null != AR && null !== Ak ? b.Z.getRole(M, AR) : null != Ak ? Ak : void 0), [Ak, AR, M]),
        Ay = '';
    AS && AI ? (Ay = O.intl.string(O.t.ih4QMT)) : AS ? (Ay = O.intl.string(O.t.o9xphY)) : AI && (Ay = O.intl.string(O.t.DWYJub));
    let AE = () => {
            AT(!1), Az();
        },
        [AG, Aw] = a.useState(),
        {
            changes: AY,
            hasUnsavedChanges: AH,
            canSaveForDraft: AD,
            canSaveForPublished: AM,
            canPublishOrUnpublish: AJ
        } = a.useMemo(
            () =>
                (0, F.fG)({
                    guildProductListing: An,
                    name: Au,
                    priceTier: Af,
                    description: Am,
                    image: Ap,
                    imageName: Av,
                    isImageChanged: AU,
                    newRoleParams: Ak,
                    hasSavedAttachments: AX,
                    hasUnsavedAttachmentChanges: AZ
                }),
            [An, Au, Af, Am, Ap, Av, AU, Ak, AX, AZ]
        ),
        A_ = a.useMemo(
            () =>
                AH || null == AG || 'publish' === AG || null != AW
                    ? null
                    : (0, n.jsx)(u.oXn, {
                          className: y.successNotice,
                          children: (0, n.jsx)(m.Z, {
                              message: (0, n.jsxs)('div', {
                                  className: y.successNoticeMessage,
                                  children: [
                                      (0, n.jsx)(u.owK, {
                                          size: 'md',
                                          color: s.Z.BUTTON_POSITIVE_BACKGROUND,
                                          secondaryColor: s.Z.WHITE
                                      }),
                                      (0, n.jsx)(u.Text, {
                                          variant: 'text-md/medium',
                                          children: 'draft' === AG ? O.intl.string(O.t['3Rv4MD']) : 'update_publish' === AG ? O.intl.string(O.t['8fPiBw']) : O.intl.string(O.t['3LUFnJ'])
                                      })
                                  ]
                              }),
                              onReset: () => Aw(void 0),
                              onResetText: O.intl.string(O.t.T6QuWV)
                          })
                      }),
            [AW, AH, AG]
        ),
        A$ = a.useCallback(() => {
            AH
                ? (0, z.Z)({
                      title: O.intl.string(O.t.FVDhIS),
                      body: O.intl.string(O.t.Hgdhwc),
                      cta: O.intl.string(O.t.h0bti4),
                      closeLabel: O.intl.string(O.t['+WYo0t']),
                      onConfirm: () => {
                          AA();
                      }
                  })
                : AA();
        }, [AA, AH]);
    a.useEffect(() => {
        (0, u.oav)(
            k.Yz,
            (A) =>
                (0, n.jsx)(J, {
                    guildId: M,
                    productId: Ae,
                    ...A
                }),
            A$
        );
    }, [M, A$, Ae]);
    let A0 = async (A) => {
        let e = (0, F.pM)({ newRoleParams: Ak });
        if ((Aj(e), null != e)) return;
        let t = await AP(A);
        if ((Ab(!1), null != t)) {
            if ((null != A.name && Ag(t.name), null != A.description && Ah(t.description), null != Ak)) {
                let A = t.role_id;
                o()(null != A, 'Cannot update role without role ID'), await g.Z.updateRole(M, A, Ak);
            }
            AL(void 0), At(t.id), 'published' in A && !0 === A.published && AA();
        }
    };
    a.useEffect(() => {
        if (null != AW) {
            var A;
            (0, W.V)(AW, M, null == Al ? void 0 : null === (A = Al.team) || void 0 === A ? void 0 : A.id);
        }
    }, [AW, M, Al]),
        a.useEffect(() => {
            AH && Aw(void 0);
        }, [AH]);
    let A1 = a.useRef(null);
    return (0, n.jsxs)(u.Y0X, {
        transitionState: $,
        size: u.CgR.DYNAMIC,
        className: y.modalRoot,
        'aria-labelledby': E,
        children: [
            (0, n.jsxs)(u.xBx, {
                className: y.modalHeader,
                separator: !1,
                children: [
                    (0, n.jsxs)('div', {
                        className: y.headerText,
                        children: [
                            (0, n.jsx)(u.X6q, {
                                id: E,
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: O.intl.string(O.t.DnNl1d)
                            }),
                            (0, n.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: O.intl.string(O.t['Tu7f+f'])
                            })
                        ]
                    }),
                    (0, n.jsx)(u.olH, {
                        onClick: A$,
                        className: y.__invalid_modalCloseButton
                    })
                ]
            }),
            (0, n.jsxs)(u.hzk, {
                className: y.modalContent,
                scrollbarType: 'none',
                children: [
                    (0, n.jsx)(u.zJl, {
                        children: (0, n.jsxs)('div', {
                            className: y.productFieldsSection,
                            ref: A1,
                            children: [
                                (0, n.jsx)(u.xJW, {
                                    title: O.intl.string(O.t.Hsk7xc),
                                    tag: 'label',
                                    htmlFor: G,
                                    error: null == AW ? void 0 : AW.getFirstFieldErrorMessage('name'),
                                    children: (0, n.jsx)(u.Kx8, {
                                        value: Au,
                                        onChange: Ag,
                                        id: G,
                                        maxLength: 100,
                                        placeholder: O.intl.string(O.t['/BiYSE']),
                                        rows: 1,
                                        autosize: !0,
                                        showCharacterCount: Au.length > 0,
                                        showRemainingCharacterCount: Au.length > 0,
                                        required: !0,
                                        className: Au.length > 0 ? y.nameArea : void 0
                                    })
                                }),
                                (0, n.jsx)(u.xJW, {
                                    title: O.intl.string(O.t.QdKLyc),
                                    tag: 'label',
                                    error: null == AW ? void 0 : AW.getFirstFieldErrorMessage('description'),
                                    htmlFor: w,
                                    children: (0, n.jsx)(q.Z, {
                                        id: w,
                                        className: y.descriptionArea,
                                        value: Am,
                                        onChange: Ah,
                                        maxLength: 1500,
                                        placeholder: O.intl.string(O.t.BFwyur),
                                        showCharacterCount: Am.length > 0,
                                        parentModalKey: k.Yz,
                                        required: !0
                                    })
                                }),
                                (0, n.jsx)(u.xJW, {
                                    title: O.intl.string(O.t['CAY/vr']),
                                    tag: 'label',
                                    error: null == AW ? void 0 : AW.getFirstFieldErrorMessage('price_tier'),
                                    children: (0, n.jsx)(D, {
                                        guildId: M,
                                        selectedPriceTier: Af,
                                        setPriceTier: AC
                                    })
                                }),
                                (0, n.jsxs)(u.xJW, {
                                    title: O.intl.string(O.t['sqXj6+']),
                                    tag: 'label',
                                    error: null == AW ? void 0 : AW.getFirstFieldErrorMessage('image'),
                                    titleClassName: y.thumbnailLabel,
                                    children: [
                                        (0, n.jsx)(u.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: O.intl.string(O.t.yOU4Vl)
                                        }),
                                        (0, n.jsx)(u.LZC, { size: 10 }),
                                        (0, n.jsx)(Q.Z, {
                                            presetImages: K.M,
                                            radioGroupAriaLabel: O.intl.string(O.t.fKzQj4),
                                            image: Ap,
                                            imageName: Av,
                                            savedImageName: null == An ? void 0 : null === (l = An.image_asset) || void 0 === l ? void 0 : l.filename,
                                            onChange: (A, e) => {
                                                if (null != A) {
                                                    var t;
                                                    Aq(A), Ax(e), Ab(A.startsWith('data:') || e !== (null == An ? void 0 : null === (t = An.image_asset) || void 0 === t ? void 0 : t.filename));
                                                }
                                            }
                                        })
                                    ]
                                }),
                                AI
                                    ? (0, n.jsx)(u.xJW, {
                                          title: O.intl.string(O.t.zLrtkJ),
                                          error: null == AW ? void 0 : AW.getFirstFieldErrorMessage('attachments'),
                                          children: (0, n.jsx)(Z.s, {
                                              onFileAdded: () => {
                                                  var A;
                                                  null === (A = A1.current) ||
                                                      void 0 === A ||
                                                      A.scrollIntoView({
                                                          behavior: 'smooth',
                                                          block: 'end'
                                                      });
                                              }
                                          })
                                      })
                                    : null,
                                AS
                                    ? (0, n.jsx)(R.ZP, {
                                          error: null !== (H = null == AW ? void 0 : AW.getFirstFieldErrorMessage(F.NB)) && void 0 !== H ? H : void 0,
                                          newRoleParams: Ak,
                                          setNewRoleParams: AL,
                                          guildId: M,
                                          listingRoleId: AR,
                                          productId: Ae
                                      })
                                    : null
                            ]
                        })
                    }),
                    (0, n.jsx)('div', { className: y.horizontalSeparator }),
                    (0, n.jsx)(u.zJl, {
                        children: (0, n.jsxs)('div', {
                            className: y.productPreview,
                            children: [
                                (0, n.jsx)(B.Z, {
                                    disabled: !AJ,
                                    disabledTooltip: Aa ? O.intl.string(O.t['0NQ00t']) : O.intl.string(O.t['Ax89/f']),
                                    published: Aa,
                                    onClick: () => {
                                        o()(AJ, 'Attempting to publish/unpublish when not allowed'),
                                            Aw(Aa ? 'unpublish' : 'publish'),
                                            A0({
                                                ...AY,
                                                published: !Aa
                                            });
                                    },
                                    submitting: AQ
                                }),
                                (0, n.jsx)('div', { className: y.verticalSeparator }),
                                (0, n.jsx)(u.X6q, {
                                    variant: 'text-xs/bold',
                                    color: 'header-secondary',
                                    className: y.previewHeading,
                                    children: O.intl.string(O.t['6I7nQU'])
                                }),
                                (0, n.jsx)(u.LZC, { size: 4 }),
                                (0, n.jsx)(u.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: O.intl.string(O.t.Oq4dfX)
                                }),
                                (0, n.jsx)(u.LZC, { size: 16 }),
                                (0, n.jsx)(P.Z, {
                                    imageUrl: Ap,
                                    name: '' === Au ? O.intl.string(O.t.EmqIws) : Au,
                                    description: '' === Am ? O.intl.string(O.t['11NA2N']) : Am,
                                    formattedPrice: AN,
                                    role: AO,
                                    productType: Ay,
                                    ctaComponent: (0, n.jsx)(u.gtL, {
                                        shineSize: u.gtL.ShineSizes.SMALL,
                                        pauseAnimation: Ai || !As,
                                        className: y.productPreviewCtaButton,
                                        children: O.intl.string(O.t.xUi3BA)
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
                    className: y.footerActionButtons,
                    children: [
                        (0, n.jsxs)('div', {
                            className: y.footerActionLeftButtons,
                            children: [
                                (0, n.jsx)(Y, {
                                    text: O.intl.string(O.t.YzGIVF),
                                    value: AS,
                                    onChange: (A) => {
                                        A ? AL((0, R.YP)()) : AL(void 0);
                                    },
                                    warning: null === Ak ? (0, n.jsx)(R.aN, {}) : void 0,
                                    disabled: null != AR
                                }),
                                (0, n.jsx)(Y, {
                                    text: O.intl.string(O.t.C6wP2d),
                                    value: AI,
                                    onChange: (A) => {
                                        A
                                            ? AT(!0)
                                            : AZ
                                              ? (0, u.ZDy)(async () => {
                                                    let { ConfirmModal: A } = await Promise.resolve().then(t.bind(t, 481060));
                                                    return (e) =>
                                                        (0, n.jsx)(A, {
                                                            ...e,
                                                            header: O.intl.string(O.t['2Wihyc']),
                                                            confirmText: O.intl.string(O.t.N86XcH),
                                                            cancelText: O.intl.string(O.t['ETE/oK']),
                                                            onConfirm: AE,
                                                            children: (0, n.jsx)(u.Text, {
                                                                variant: 'text-md/normal',
                                                                children: O.intl.string(O.t.ixRBLi)
                                                            })
                                                        });
                                                })
                                              : AE();
                                    },
                                    disabled: AX
                                })
                            ]
                        }),
                        (0, n.jsx)('div', {
                            className: y.footerActionRightButtons,
                            children: Aa
                                ? (0, n.jsx)(u.zxk, {
                                      color: u.zxk.Colors.PRIMARY,
                                      disabled: !AM,
                                      submitting: AB,
                                      onClick: () => {
                                          o()(AM, 'cannot save changes for published product without adding all fields'), Aw('update_publish'), A0(AY);
                                      },
                                      children: O.intl.string(O.t.XYBEaW)
                                  })
                                : (0, n.jsx)(n.Fragment, {
                                      children: (0, n.jsx)(u.zxk, {
                                          color: u.zxk.Colors.PRIMARY,
                                          disabled: !AD,
                                          submitting: AB,
                                          onClick: () => {
                                              o()(AD, 'cannot save changes without name or price tier'), Aw('draft'), A0(AY);
                                          },
                                          children: O.intl.string(O.t.ZCjwoa)
                                      })
                                  })
                        })
                    ]
                })
            }),
            (0, n.jsx)(c.W, {
                component: 'div',
                className: y.successNoticeContainer,
                children: A_
            })
        ]
    });
}
function J(A) {
    var e;
    return (0, n.jsx)(I.W, {
        guildId: A.guildId,
        editSkuId: null !== (e = A.productId) && void 0 !== e ? e : void 0,
        onFileSizeError: () => (0, x.Z)(k.ve),
        children: (0, n.jsx)(M, { ...A })
    });
}
