i.d(l, { default: () => U }), i(47120);
var t = i(200651),
    n = i(192379),
    s = i(120356),
    a = i.n(s),
    o = i(772848),
    r = i(36793),
    d = i(442837),
    u = i(780384),
    c = i(481060),
    m = i(600164),
    f = i(339085),
    g = i(349709),
    x = i(763610),
    v = i(210887),
    j = i(430824),
    p = i(594174),
    h = i(626135),
    I = i(424218),
    N = i(63063),
    k = i(956664),
    E = i(268350),
    C = i(373228),
    S = i(378233),
    y = i(419922),
    Z = i(611480),
    b = i(981631),
    z = i(388032),
    R = i(345518),
    _ = i(434227),
    w = i(600126);
let T = new Set(['application/json', 'image/png', 'image/apng', 'image/gif']),
    D = [
        {
            name: 'Sticker file',
            extensions: ['json', 'png', 'apng', 'gif']
        }
    ];
function A(e, l) {
    h.default.track(b.rMx.STICKER_UPLOAD_COMPLETED, {
        successful: e,
        error: null != l ? l : ''
    });
}
let P = (e) => {
        let { stickerPreview: l } = e;
        return (0, t.jsxs)('div', {
            className: R.preview,
            children: [
                (0, t.jsx)('div', {
                    className: R.previewDark,
                    children:
                        null != l
                            ? l
                            : (0, t.jsx)('img', {
                                  src: _,
                                  alt: z.intl.string(z.t.qOsjZm)
                              })
                }),
                (0, t.jsx)('div', {
                    className: R.previewLight,
                    children:
                        null != l
                            ? l
                            : (0, t.jsx)('img', {
                                  src: w,
                                  alt: z.intl.string(z.t.YC5NAA)
                              })
                })
            ]
        });
    },
    B = (e) => {
        let { sticker: l, previewData: i, onStickerError: n } = e;
        if (null != l)
            return (0, t.jsx)(y.ZP, {
                size: 160,
                sticker: l
            });
        if (null == i) return null;
        let { id: s, formatType: a, content: o } = i;
        return (0, t.jsx)(
            y.ZP,
            {
                assetData: o,
                fileUri: o,
                size: 160,
                sticker: {
                    name: s,
                    description: '',
                    id: s,
                    pack_id: '',
                    format_type: a
                },
                onError: n
            },
            s
        );
    };
async function L(e) {
    let l = await (0, k.fD)(e),
        i = new Image();
    (i.src = l), await i.decode();
    let t = (0, r.Ae)(i, 320, 320);
    return (0, k.Bo)(t, e.name, e.type);
}
function U(e) {
    var l, i, s, r, y, _, w, U;
    let { transitionState: O, onClose: K, guildId: M, sticker: F } = e,
        H = (0, d.e7)([v.Z], () => v.Z.theme),
        Y = (0, d.e7)([f.ZP], () => ((null == F ? void 0 : F.tags) != null ? f.ZP.getCustomEmojiById(F.tags) : null)),
        q = null !== (i = null === (l = p.default.getCurrentUser()) || void 0 === l ? void 0 : l.isStaff()) && void 0 !== i && i ? Z.OC : Z.Ht,
        [V, W] = n.useState(null),
        [X, J] = n.useState(null !== (s = null == F ? void 0 : F.name) && void 0 !== s ? s : ''),
        [G, Q] = n.useState({
            file: null,
            filename: null !== (r = (0, S._V)(F)) && void 0 !== r ? r : ''
        }),
        [$, ee] = n.useState(null == Y ? void 0 : Y.id),
        [el, ei] = n.useState(null !== (y = null == Y ? void 0 : Y.name) && void 0 !== y ? y : null == F ? void 0 : F.tags),
        [et, en] = n.useState(null !== (_ = null == F ? void 0 : F.description) && void 0 !== _ ? _ : ''),
        [es, ea] = n.useState(!1),
        [eo, er] = n.useState(null),
        ed = (0, d.e7)([j.Z], () => j.Z.getGuild(M)),
        eu = (null == ed ? void 0 : ed.hasFeature(b.oNc.PARTNERED)) || (null == ed ? void 0 : ed.hasFeature(b.oNc.VERIFIED)),
        ec = null != F,
        em = ec || (null == G ? void 0 : G.file) != null,
        ef = 0 === et.length || (et.length >= 2 && et.length <= 100),
        eg = !es && (null == eo ? void 0 : eo.isBlocking) !== !0 && X.length >= 2 && (null != $ || null != el || ((null == F ? void 0 : F.tags) != null && (null == F ? void 0 : F.tags) !== '')) && em && ef,
        ex = async (e) => {
            var l;
            if (null == e) return;
            let i = null === (l = e.type) || void 0 === l ? void 0 : l.split(';')[0];
            if (!T.has(i)) {
                er({
                    message: z.intl.string(z.t.B2hGAA),
                    isBlocking: !0
                });
                return;
            }
            let t = e;
            if ('image/png' === i && e.size > q && !(await (0, k.c0)(e))) {
                let l = (t = await L(e)).size > q;
                h.default.track(b.rMx.STICKER_FILE_RESIZED, {
                    original_file_size_bytes: e.size,
                    resized_file_size_bytes: t.size,
                    resized_file_too_big: l
                });
            }
            if (t.size > q) {
                er({
                    message: z.intl.formatToPlainString(z.t['3eK7Rk'], { maxSize: (0, I.IC)(q, { useKibibytes: !0 }) }),
                    isBlocking: null == G.file
                }),
                    h.default.track(b.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                        size: t.size,
                        filetype: i
                    });
                return;
            }
            let n = (0, S.Zv)(t.type);
            if (n === C.u3.LOTTIE) {
                if (!eu) {
                    er({
                        message: z.intl.format(z.t.RNNjy8, { articleURL: N.Z.getArticleURL(b.BhN.STICKERS_UPLOAD) }),
                        isBlocking: !0
                    });
                    return;
                }
                let e = new FileReader();
                e.addEventListener('load', () => {
                    W({
                        id: (0, o.Z)(),
                        formatType: n,
                        content: e.result
                    }),
                        er(null);
                }),
                    e.readAsText(t);
            } else {
                let e = await (0, k.fD)(t);
                W({
                    id: (0, o.Z)(),
                    formatType: n,
                    content: e
                }),
                    er(null);
            }
            Q({
                file: t,
                filename: t.name
            });
        },
        ev = async (e) => {
            var l, i, t, n, s, a;
            e.preventDefault();
            let o = null !== (i = null !== (l = null != $ ? $ : el) && void 0 !== l ? l : null == F ? void 0 : F.tags) && void 0 !== i ? i : '';
            try {
                if ((ea(!0), ec))
                    await (0, E.Jf)(M, null !== (t = null == F ? void 0 : F.id) && void 0 !== t ? t : '', {
                        name: X,
                        tags: o,
                        description: et
                    });
                else {
                    let e = new FormData();
                    e.append('name', X), e.append('tags', o), e.append('description', et), (null == G ? void 0 : G.file) != null && e.append('file', G.file), (a = null !== (s = null === (n = G.file) || void 0 === n ? void 0 : n.type) && void 0 !== s ? s : ''), h.default.track(b.rMx.STICKER_UPLOAD_STARTED, { filetype: a }), await (0, E.lY)(M, e), A(!0);
                }
                K();
            } catch (e) {
                er({
                    message: e.body.message,
                    isBlocking: !1
                }),
                    A(!1, e.body.message);
            } finally {
                ea(!1);
            }
        },
        ej = B({
            sticker: F,
            previewData: V,
            onStickerError: n.useCallback(() => {
                er({
                    message: z.intl.string(z.t['/WIYNT']),
                    isBlocking: !0
                });
            }, [])
        }),
        ep = eu ? z.t.alYXBA : z.t.kpcMfn;
    return (0, t.jsxs)(c.Y0X, {
        transitionState: O,
        'aria-labelledby': 'STICKER_UPLOAD_MODAL',
        className: R.modal,
        children: [
            (0, t.jsx)(c.olH, {
                onClick: K,
                className: R.modalClose
            }),
            (0, t.jsxs)('form', {
                onSubmit: ev,
                className: R.form,
                children: [
                    (0, t.jsxs)(c.hzk, {
                        className: R.modalContent,
                        children: [
                            (0, t.jsxs)(c.xBx, {
                                direction: m.Z.Direction.VERTICAL,
                                separator: !1,
                                className: R.modalHeader,
                                children: [
                                    (0, t.jsx)(c.X6q, {
                                        variant: 'heading-xl/semibold',
                                        className: R.modalHeaderTitle,
                                        children: z.intl.string(z.t.yxVsBA)
                                    }),
                                    (0, t.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        children: z.intl.format(ep, { fileSize: (0, I.IC)(Z.Ht, { useKibibytes: !0 }) })
                                    })
                                ]
                            }),
                            (0, t.jsx)(c.hjN, {
                                title: z.intl.string(z.t.gjdiKC),
                                className: R.formItem,
                                children: (0, t.jsx)(P, { stickerPreview: ej })
                            }),
                            (0, t.jsxs)(c.hjN, {
                                className: a()(R.formItem, R.formItemRow),
                                children: [
                                    (0, t.jsx)(c.xJW, {
                                        title: ec ? z.intl.string(z.t.wp36s7) : z.intl.string(z.t.AM3mzc),
                                        required: !0,
                                        className: R.formItemRowChild,
                                        children: ec
                                            ? (0, t.jsx)(c.oil, {
                                                  disabled: !0,
                                                  value: null !== (w = null == G ? void 0 : G.filename) && void 0 !== w ? w : ''
                                              })
                                            : (0, t.jsx)(x.Z, {
                                                  buttonText: z.intl.string(z.t.xEnDUV),
                                                  filters: D,
                                                  filename: null !== (U = null == G ? void 0 : G.filename) && void 0 !== U ? U : '',
                                                  placeholder: z.intl.string(z.t.rUYLJy),
                                                  onFileSelect: ex
                                              })
                                    }),
                                    (0, t.jsx)(g.Z, {
                                        className: R.formItemRowChild,
                                        guildId: M,
                                        emojiId: $,
                                        emojiName: el,
                                        setEmojiId: ee,
                                        setEmojiName: ei,
                                        shouldUpdateBothEmojiFields: !0
                                    })
                                ]
                            }),
                            (0, t.jsx)(c.xJW, {
                                title: z.intl.string(z.t['0VRh6u']),
                                required: !0,
                                className: R.formItem,
                                children: (0, t.jsx)(c.oil, {
                                    value: X,
                                    onChange: J,
                                    placeholder: z.intl.string(z.t['3fGttb']),
                                    maxLength: 30
                                })
                            }),
                            (0, t.jsxs)('div', {
                                className: R.formItem,
                                children: [
                                    (0, t.jsxs)(c.vwX, {
                                        children: [
                                            z.intl.string(z.t.uGccen),
                                            (0, t.jsx)(c.ua7, {
                                                text: z.intl.string(z.t.S6jlDg),
                                                children: (e) =>
                                                    (0, t.jsx)(c.d3s, {
                                                        size: 'xs',
                                                        color: 'currentColor',
                                                        className: R.infoIcon,
                                                        ...e
                                                    })
                                            })
                                        ]
                                    }),
                                    (0, t.jsx)(c.Kx8, {
                                        value: et,
                                        onChange: en,
                                        placeholder: z.intl.string(z.t.zwR0fX),
                                        maxLength: 100
                                    })
                                ]
                            }),
                            null != eo &&
                                (0, t.jsx)(c.Text, {
                                    className: R.formItem,
                                    variant: 'text-sm/normal',
                                    color: 'text-danger',
                                    children: eo.message
                                })
                        ]
                    }),
                    (0, t.jsxs)(c.mzw, {
                        className: R.modalFooter,
                        children: [
                            (0, t.jsx)(c.zxk, {
                                type: 'submit',
                                disabled: !eg,
                                children: ec ? z.intl.string(z.t.Arwnen) : z.intl.string(z.t['3UB9aW'])
                            }),
                            (0, t.jsx)(c.zxk, {
                                look: c.zxk.Looks.LINK,
                                color: (0, u.ap)(H) ? c.zxk.Colors.PRIMARY : c.zxk.Colors.WHITE,
                                onClick: K,
                                children: z.intl.string(z.t.oEAioK)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
