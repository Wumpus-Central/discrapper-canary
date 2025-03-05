l.d(t, { default: () => B }), l(47120), l(266796), l(301563);
var n = l(200651),
    i = l(192379),
    r = l(120356),
    a = l.n(r),
    s = l(772848),
    o = l(36793),
    u = l(442837),
    c = l(780384),
    d = l(481060),
    m = l(600164),
    f = l(339085),
    g = l(349709),
    p = l(763610),
    j = l(210887),
    v = l(430824),
    x = l(594174),
    N = l(626135),
    h = l(424218),
    b = l(63063),
    y = l(956664),
    I = l(268350),
    O = l(373228),
    k = l(378233),
    w = l(419922),
    E = l(611480),
    S = l(981631),
    P = l(388032),
    C = l(825113),
    Z = l(434227),
    D = l(600126);
let z = new Set(['application/json', 'image/png', 'image/apng', 'image/gif', 'image/jpeg', 'image/jpg']),
    R = [
        {
            name: 'Sticker file',
            extensions: ['json', 'png', 'apng', 'gif', 'jpeg', 'jpg']
        }
    ];
function W(e, t) {
    N.default.track(S.rMx.STICKER_UPLOAD_COMPLETED, {
        successful: e,
        error: null != t ? t : ''
    });
}
let _ = (e) => {
        let { stickerPreview: t } = e;
        return (0, n.jsxs)('div', {
            className: C.preview,
            children: [
                (0, n.jsx)('div', {
                    className: C.previewDark,
                    children:
                        null != t
                            ? t
                            : (0, n.jsx)('img', {
                                  src: Z,
                                  alt: P.NW.string(P.t.qOsjZm)
                              })
                }),
                (0, n.jsx)('div', {
                    className: C.previewLight,
                    children:
                        null != t
                            ? t
                            : (0, n.jsx)('img', {
                                  src: D,
                                  alt: P.NW.string(P.t.YC5NAA)
                              })
                })
            ]
        });
    },
    T = (e) => {
        let { sticker: t, previewData: l, onStickerError: i } = e;
        if (null != t)
            return (0, n.jsx)(w.ZP, {
                size: 160,
                sticker: t
            });
        if (null == l) return null;
        let { id: r, formatType: a, content: s } = l;
        return (0, n.jsx)(
            w.ZP,
            {
                assetData: s,
                fileUri: s,
                size: 160,
                sticker: {
                    name: r,
                    description: '',
                    id: r,
                    pack_id: '',
                    format_type: a
                },
                onError: i
            },
            r
        );
    };
async function A(e) {
    let t = await (0, y.fD)(e),
        l = new Image();
    (l.src = t), await l.decode();
    let n = (0, o.Ae)(l, 320, 320);
    return (0, y.Bo)(n, e.name, 'image/png');
}
function B(e) {
    var t, l, r, o, w, Z, D, B;
    let { transitionState: L, onClose: U, guildId: K, sticker: M } = e,
        F = (0, u.e7)([j.Z], () => j.Z.theme),
        H = (0, u.e7)([f.ZP], () => ((null == M ? void 0 : M.tags) != null ? f.ZP.getCustomEmojiById(M.tags) : null)),
        Y = null !== (l = null === (t = x.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== l && l ? E.OC : E.Ht,
        [q, V] = i.useState(null),
        [X, J] = i.useState(null !== (r = null == M ? void 0 : M.name) && void 0 !== r ? r : ''),
        [G, Q] = i.useState({
            file: null,
            filename: null !== (o = (0, k._V)(M)) && void 0 !== o ? o : ''
        }),
        [$, ee] = i.useState(null == H ? void 0 : H.id),
        [et, el] = i.useState(null !== (w = null == H ? void 0 : H.name) && void 0 !== w ? w : null == M ? void 0 : M.tags),
        [en, ei] = i.useState(null !== (Z = null == M ? void 0 : M.description) && void 0 !== Z ? Z : ''),
        [er, ea] = i.useState(!1),
        [es, eo] = i.useState(null),
        eu = (0, u.e7)([v.Z], () => v.Z.getGuild(K)),
        ec = (null == eu ? void 0 : eu.hasFeature(S.oNc.PARTNERED)) || (null == eu ? void 0 : eu.hasFeature(S.oNc.VERIFIED)),
        ed = null != M,
        em = ed || (null == G ? void 0 : G.file) != null,
        ef = 0 === en.length || (en.length >= 2 && en.length <= 100),
        eg = !er && (null == es ? void 0 : es.isBlocking) !== !0 && X.length >= 2 && (null != $ || null != et || ((null == M ? void 0 : M.tags) != null && (null == M ? void 0 : M.tags) !== '')) && em && ef,
        ep = async (e) => {
            var t;
            if (null == e) return;
            let l = null === (t = e.type) || void 0 === t ? void 0 : t.split(';')[0];
            if (!z.has(l)) {
                eo({
                    message: P.NW.string(P.t.B2hGAA),
                    isBlocking: !0
                });
                return;
            }
            let n = e;
            if ('image/jpeg' === l || 'image/jpg' === l) n = await A(e);
            else if ('image/png' === l && e.size > Y && !(await (0, y.c0)(e))) {
                let t = (n = await A(e)).size > Y;
                N.default.track(S.rMx.STICKER_FILE_RESIZED, {
                    original_file_size_bytes: e.size,
                    resized_file_size_bytes: n.size,
                    resized_file_too_big: t
                });
            }
            if (n.size > Y) {
                eo({
                    message: P.NW.formatToPlainString(P.t['3eK7Rk'], { maxSize: (0, h.IC)(Y, { useKibibytes: !0 }) }),
                    isBlocking: null == G.file
                }),
                    N.default.track(S.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                        size: n.size,
                        filetype: n.type
                    });
                return;
            }
            let i = (0, k.Zv)(n.type);
            if (i === O.u3.LOTTIE) {
                if (!ec) {
                    eo({
                        message: P.NW.format(P.t.RNNjy8, { articleURL: b.Z.getArticleURL(S.BhN.STICKERS_UPLOAD) }),
                        isBlocking: !0
                    });
                    return;
                }
                let e = new FileReader();
                e.addEventListener('load', () => {
                    V({
                        id: (0, s.Z)(),
                        formatType: i,
                        content: e.result
                    }),
                        eo(null);
                }),
                    e.readAsText(n);
            } else {
                let e = await (0, y.fD)(n);
                V({
                    id: (0, s.Z)(),
                    formatType: i,
                    content: e
                }),
                    eo(null);
            }
            Q({
                file: n,
                filename: n.name
            });
        },
        ej = async (e) => {
            var t, l, n, i, r, a;
            e.preventDefault();
            let s = null !== (l = null !== (t = null != $ ? $ : et) && void 0 !== t ? t : null == M ? void 0 : M.tags) && void 0 !== l ? l : '';
            try {
                if ((ea(!0), ed))
                    await (0, I.Jf)(K, null !== (n = null == M ? void 0 : M.id) && void 0 !== n ? n : '', {
                        name: X,
                        tags: s,
                        description: en
                    });
                else {
                    let e = new FormData();
                    e.append('name', X), e.append('tags', s), e.append('description', en), (null == G ? void 0 : G.file) != null && e.append('file', G.file), (a = null !== (r = null === (i = G.file) || void 0 === i ? void 0 : i.type) && void 0 !== r ? r : ''), N.default.track(S.rMx.STICKER_UPLOAD_STARTED, { filetype: a }), await (0, I.lY)(K, e), W(!0);
                }
                U();
            } catch (e) {
                eo({
                    message: e.body.message,
                    isBlocking: !1
                }),
                    W(!1, e.body.message);
            } finally {
                ea(!1);
            }
        },
        ev = T({
            sticker: M,
            previewData: q,
            onStickerError: i.useCallback(() => {
                eo({
                    message: P.NW.string(P.t['/WIYNT']),
                    isBlocking: !0
                });
            }, [])
        }),
        ex = ec ? P.t.alYXBA : P.t.kpcMfn;
    return (0, n.jsxs)(d.Y0X, {
        transitionState: L,
        'aria-labelledby': 'STICKER_UPLOAD_MODAL',
        className: C.modal,
        children: [
            (0, n.jsx)(d.olH, {
                onClick: U,
                className: C.modalClose
            }),
            (0, n.jsxs)('form', {
                onSubmit: ej,
                className: C.form,
                children: [
                    (0, n.jsxs)(d.hzk, {
                        className: C.modalContent,
                        children: [
                            (0, n.jsxs)(d.xBx, {
                                direction: m.Z.Direction.VERTICAL,
                                separator: !1,
                                className: C.modalHeader,
                                children: [
                                    (0, n.jsx)(d.X6q, {
                                        variant: 'heading-xl/semibold',
                                        className: C.modalHeaderTitle,
                                        children: P.NW.string(P.t.yxVsBA)
                                    }),
                                    (0, n.jsx)(d.Text, {
                                        variant: 'text-md/normal',
                                        children: P.NW.format(ex, { fileSize: (0, h.IC)(E.Ht, { useKibibytes: !0 }) })
                                    })
                                ]
                            }),
                            (0, n.jsx)(d.hjN, {
                                title: P.NW.string(P.t.gjdiKC),
                                className: C.formItem,
                                children: (0, n.jsx)(_, { stickerPreview: ev })
                            }),
                            (0, n.jsxs)(d.hjN, {
                                className: a()(C.formItem, C.formItemRow),
                                children: [
                                    (0, n.jsx)(d.xJW, {
                                        title: ed ? P.NW.string(P.t.wp36s7) : P.NW.string(P.t.AM3mzc),
                                        required: !0,
                                        className: C.formItemRowChild,
                                        children: ed
                                            ? (0, n.jsx)(d.oil, {
                                                  disabled: !0,
                                                  value: null !== (D = null == G ? void 0 : G.filename) && void 0 !== D ? D : ''
                                              })
                                            : (0, n.jsx)(p.Z, {
                                                  buttonText: P.NW.string(P.t.xEnDUV),
                                                  filters: R,
                                                  filename: null !== (B = null == G ? void 0 : G.filename) && void 0 !== B ? B : '',
                                                  placeholder: P.NW.string(P.t.rUYLJy),
                                                  onFileSelect: ep
                                              })
                                    }),
                                    (0, n.jsx)(g.Z, {
                                        className: C.formItemRowChild,
                                        guildId: K,
                                        emojiId: $,
                                        emojiName: et,
                                        setEmojiId: ee,
                                        setEmojiName: el,
                                        shouldUpdateBothEmojiFields: !0
                                    })
                                ]
                            }),
                            (0, n.jsx)(d.xJW, {
                                title: P.NW.string(P.t['0VRh6u']),
                                required: !0,
                                className: C.formItem,
                                children: (0, n.jsx)(d.oil, {
                                    value: X,
                                    onChange: J,
                                    placeholder: P.NW.string(P.t['3fGttb']),
                                    maxLength: 30
                                })
                            }),
                            (0, n.jsxs)('div', {
                                className: C.formItem,
                                children: [
                                    (0, n.jsxs)(d.vwX, {
                                        children: [
                                            P.NW.string(P.t.uGccen),
                                            (0, n.jsx)(d.ua7, {
                                                text: P.NW.string(P.t.S6jlDg),
                                                children: (e) =>
                                                    (0, n.jsx)(
                                                        d.d3s,
                                                        (function (e) {
                                                            for (var t = 1; t < arguments.length; t++) {
                                                                var l = null != arguments[t] ? arguments[t] : {},
                                                                    n = Object.keys(l);
                                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                                    (n = n.concat(
                                                                        Object.getOwnPropertySymbols(l).filter(function (e) {
                                                                            return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                                                        })
                                                                    )),
                                                                    n.forEach(function (t) {
                                                                        var n;
                                                                        (n = l[t]),
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
                                                        })(
                                                            {
                                                                size: 'xs',
                                                                color: 'currentColor',
                                                                className: C.infoIcon
                                                            },
                                                            e
                                                        )
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, n.jsx)(d.Kx8, {
                                        value: en,
                                        onChange: ei,
                                        placeholder: P.NW.string(P.t.zwR0fX),
                                        maxLength: 100
                                    })
                                ]
                            }),
                            null != es &&
                                (0, n.jsx)(d.Text, {
                                    className: C.formItem,
                                    variant: 'text-sm/normal',
                                    color: 'text-danger',
                                    children: es.message
                                })
                        ]
                    }),
                    (0, n.jsxs)(d.mzw, {
                        className: C.modalFooter,
                        children: [
                            (0, n.jsx)(d.zxk, {
                                type: 'submit',
                                disabled: !eg,
                                children: ed ? P.NW.string(P.t.Arwnen) : P.NW.string(P.t['3UB9aW'])
                            }),
                            (0, n.jsx)(d.zxk, {
                                look: d.zxk.Looks.LINK,
                                color: (0, c.ap)(F) ? d.zxk.Colors.PRIMARY : d.zxk.Colors.WHITE,
                                onClick: U,
                                children: P.NW.string(P.t.oEAioK)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
