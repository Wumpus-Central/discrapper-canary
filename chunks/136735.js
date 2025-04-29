l.d(t, { default: () => L }), l(388685), l(953529), l(35282);
var n = l(255367),
    i = l(73800),
    s = l(120356),
    a = l.n(s),
    r = l(772848),
    o = l(36793),
    u = l(442837),
    c = l(780384),
    d = l(481060),
    m = l(600164),
    f = l(339085),
    g = l(349709),
    p = l(763610),
    j = l(210887),
    x = l(430824),
    v = l(594174),
    h = l(626135),
    b = l(424218),
    y = l(63063),
    N = l(956664),
    I = l(268350),
    E = l(373228),
    O = l(378233),
    w = l(419922),
    S = l(611480),
    k = l(981631),
    C = l(388032),
    D = l(154377),
    P = l(434227),
    Z = l(600126);
let T = new Set(['application/json', 'image/png', 'image/apng', 'image/gif', 'image/jpeg', 'image/jpg']),
    z = [
        {
            name: 'Sticker file',
            extensions: ['json', 'png', 'apng', 'gif', 'jpeg', 'jpg']
        }
    ];
function R(e, t) {
    h.default.track(k.rMx.STICKER_UPLOAD_COMPLETED, {
        successful: e,
        error: null != t ? t : ''
    });
}
let _ = (e) => {
        let { stickerPreview: t } = e;
        return (0, n.jsxs)('div', {
            className: D.preview,
            children: [
                (0, n.jsx)('div', {
                    className: D.previewDark,
                    children:
                        null != t
                            ? t
                            : (0, n.jsx)('img', {
                                  src: P,
                                  alt: C.intl.string(C.t.qOsjZm)
                              })
                }),
                (0, n.jsx)('div', {
                    className: D.previewLight,
                    children:
                        null != t
                            ? t
                            : (0, n.jsx)('img', {
                                  src: Z,
                                  alt: C.intl.string(C.t.YC5NAA)
                              })
                })
            ]
        });
    },
    A = (e) => {
        let { sticker: t, previewData: l, onStickerError: i } = e;
        if (null != t)
            return (0, n.jsx)(w.Z, {
                size: 160,
                sticker: t
            });
        if (null == l) return null;
        let { id: s, formatType: a, content: r } = l;
        return (0, n.jsx)(
            w.Z,
            {
                assetData: r,
                fileUri: r,
                size: 160,
                sticker: {
                    name: s,
                    description: '',
                    id: s,
                    pack_id: '',
                    format_type: a
                },
                onError: i
            },
            s
        );
    };
async function B(e) {
    let t = await (0, N.fD)(e),
        l = new Image();
    (l.src = t), await l.decode();
    let n = (0, o.Ae)(l, 320, 320);
    return (0, N.Bo)(n, e.name, 'image/png');
}
function L(e) {
    var t, l, s, o, w, P, Z, L;
    let { transitionState: U, onClose: K, guildId: M, sticker: F } = e,
        Y = (0, u.e7)([j.Z], () => j.Z.theme),
        H = (0, u.e7)([f.ZP], () => ((null == F ? void 0 : F.tags) != null ? f.ZP.getCustomEmojiById(F.tags) : null)),
        q = null != (l = null == (t = v.default.getCurrentUser()) ? void 0 : t.isStaff()) && l ? S.OC : S.Ht,
        [V, W] = i.useState(null),
        [X, J] = i.useState(null != (s = null == F ? void 0 : F.name) ? s : ''),
        [G, Q] = i.useState({
            file: null,
            filename: null != (o = (0, O._V)(F)) ? o : ''
        }),
        [$, ee] = i.useState(null == H ? void 0 : H.id),
        [et, el] = i.useState(null != (w = null == H ? void 0 : H.name) ? w : null == F ? void 0 : F.tags),
        [en, ei] = i.useState(null != (P = null == F ? void 0 : F.description) ? P : ''),
        [es, ea] = i.useState(!1),
        [er, eo] = i.useState(null),
        eu = (0, u.e7)([x.Z], () => x.Z.getGuild(M)),
        ec = (null == eu ? void 0 : eu.hasFeature(k.oNc.PARTNERED)) || (null == eu ? void 0 : eu.hasFeature(k.oNc.VERIFIED)),
        ed = null != F,
        em = ed || (null == G ? void 0 : G.file) != null,
        ef = 0 === en.length || (en.length >= 2 && en.length <= 100),
        eg = !es && (null == er ? void 0 : er.isBlocking) !== !0 && X.length >= 2 && (null != $ || null != et || ((null == F ? void 0 : F.tags) != null && (null == F ? void 0 : F.tags) !== '')) && em && ef,
        ep = async (e) => {
            var t;
            if (null == e) return;
            let l = null == (t = e.type) ? void 0 : t.split(';')[0];
            if (!T.has(l))
                return void eo({
                    message: C.intl.string(C.t.B2hGAA),
                    isBlocking: !0
                });
            let n = e;
            if ('image/jpeg' === l || 'image/jpg' === l) n = await B(e);
            else if ('image/png' === l && e.size > q && !(await (0, N.c0)(e))) {
                let t = (n = await B(e)).size > q;
                h.default.track(k.rMx.STICKER_FILE_RESIZED, {
                    original_file_size_bytes: e.size,
                    resized_file_size_bytes: n.size,
                    resized_file_too_big: t
                });
            }
            if (n.size > q) {
                eo({
                    message: C.intl.formatToPlainString(C.t['3eK7Rk'], { maxSize: (0, b.IC)(q, { useKibibytes: !0 }) }),
                    isBlocking: null == G.file
                }),
                    h.default.track(k.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                        size: n.size,
                        filetype: n.type
                    });
                return;
            }
            let i = (0, O.Zv)(n.type);
            if (i === E.u3.LOTTIE) {
                if (!ec)
                    return void eo({
                        message: C.intl.format(C.t.RNNjy8, { articleURL: y.Z.getArticleURL(k.BhN.STICKERS_UPLOAD) }),
                        isBlocking: !0
                    });
                let e = new FileReader();
                e.addEventListener('load', () => {
                    W({
                        id: (0, r.Z)(),
                        formatType: i,
                        content: e.result
                    }),
                        eo(null);
                }),
                    e.readAsText(n);
            } else {
                let e = await (0, N.fD)(n);
                W({
                    id: (0, r.Z)(),
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
            var t, l, n, i, s, a;
            e.preventDefault();
            let r = null != (l = null != (t = null != $ ? $ : et) ? t : null == F ? void 0 : F.tags) ? l : '';
            try {
                if ((ea(!0), ed))
                    await (0, I.Jf)(M, null != (n = null == F ? void 0 : F.id) ? n : '', {
                        name: X,
                        tags: r,
                        description: en
                    });
                else {
                    let e = new FormData();
                    e.append('name', X),
                        e.append('tags', r),
                        e.append('description', en),
                        (null == G ? void 0 : G.file) != null && e.append('file', G.file),
                        (a = null != (s = null == (i = G.file) ? void 0 : i.type) ? s : ''),
                        h.default.track(k.rMx.STICKER_UPLOAD_STARTED, { filetype: a }),
                        await (0, I.lY)({
                            guildId: M,
                            body: e,
                            platform: 'web'
                        }),
                        R(!0),
                        (0, d.showToast)((0, d.createToast)(C.intl.string(C.t.QR85gY), d.ToastType.SUCCESS));
                }
                K();
            } catch (e) {
                eo({
                    message: e.body.message,
                    isBlocking: !1
                }),
                    R(!1, e.body.message);
            } finally {
                ea(!1);
            }
        },
        ex = A({
            sticker: F,
            previewData: V,
            onStickerError: i.useCallback(() => {
                eo({
                    message: C.intl.string(C.t['/WIYNT']),
                    isBlocking: !0
                });
            }, [])
        }),
        ev = ec ? C.t.alYXBA : C.t.kpcMfn;
    return (0, n.jsxs)(d.Y0X, {
        transitionState: U,
        'aria-labelledby': 'STICKER_UPLOAD_MODAL',
        className: D.modal,
        children: [
            (0, n.jsx)(d.olH, {
                onClick: K,
                className: D.modalClose
            }),
            (0, n.jsxs)('form', {
                onSubmit: ej,
                className: D.form,
                children: [
                    (0, n.jsxs)(d.hzk, {
                        className: D.modalContent,
                        children: [
                            (0, n.jsxs)(d.xBx, {
                                direction: m.Z.Direction.VERTICAL,
                                separator: !1,
                                className: D.modalHeader,
                                children: [
                                    (0, n.jsx)(d.X6q, {
                                        variant: 'heading-xl/semibold',
                                        className: D.modalHeaderTitle,
                                        children: C.intl.string(C.t.yxVsBA)
                                    }),
                                    (0, n.jsx)(d.Text, {
                                        variant: 'text-md/normal',
                                        children: C.intl.format(ev, { fileSize: (0, b.IC)(S.Ht, { useKibibytes: !0 }) })
                                    })
                                ]
                            }),
                            (0, n.jsx)(d.hjN, {
                                title: C.intl.string(C.t.gjdiKC),
                                className: D.formItem,
                                children: (0, n.jsx)(_, { stickerPreview: ex })
                            }),
                            (0, n.jsxs)(d.hjN, {
                                className: a()(D.formItem, D.formItemRow),
                                children: [
                                    (0, n.jsx)(d.xJW, {
                                        title: ed ? C.intl.string(C.t.wp36s7) : C.intl.string(C.t.AM3mzc),
                                        required: !0,
                                        className: D.formItemRowChild,
                                        children: ed
                                            ? (0, n.jsx)(d.oil, {
                                                  disabled: !0,
                                                  value: null != (Z = null == G ? void 0 : G.filename) ? Z : ''
                                              })
                                            : (0, n.jsx)(p.Z, {
                                                  buttonText: C.intl.string(C.t.xEnDUV),
                                                  filters: z,
                                                  filename: null != (L = null == G ? void 0 : G.filename) ? L : '',
                                                  placeholder: C.intl.string(C.t.rUYLJy),
                                                  onFileSelect: ep
                                              })
                                    }),
                                    (0, n.jsx)(g.Z, {
                                        className: D.formItemRowChild,
                                        guildId: M,
                                        emojiId: $,
                                        emojiName: et,
                                        setEmojiId: ee,
                                        setEmojiName: el,
                                        shouldUpdateBothEmojiFields: !0
                                    })
                                ]
                            }),
                            (0, n.jsx)(d.xJW, {
                                title: C.intl.string(C.t['0VRh6u']),
                                required: !0,
                                className: D.formItem,
                                children: (0, n.jsx)(d.oil, {
                                    value: X,
                                    onChange: J,
                                    placeholder: C.intl.string(C.t['3fGttb']),
                                    maxLength: 30
                                })
                            }),
                            (0, n.jsxs)('div', {
                                className: D.formItem,
                                children: [
                                    (0, n.jsxs)(d.vwX, {
                                        children: [
                                            C.intl.string(C.t.uGccen),
                                            (0, n.jsx)(d.ua7, {
                                                text: C.intl.string(C.t.S6jlDg),
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
                                                                className: D.infoIcon
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
                                        placeholder: C.intl.string(C.t.zwR0fX),
                                        maxLength: 100
                                    })
                                ]
                            }),
                            null != er &&
                                (0, n.jsx)(d.Text, {
                                    className: D.formItem,
                                    variant: 'text-sm/normal',
                                    color: 'text-danger',
                                    children: er.message
                                })
                        ]
                    }),
                    (0, n.jsxs)(d.mzw, {
                        className: D.modalFooter,
                        children: [
                            (0, n.jsx)(d.zxk, {
                                type: 'submit',
                                disabled: !eg,
                                children: ed ? C.intl.string(C.t.Arwnen) : C.intl.string(C.t['3UB9aW'])
                            }),
                            (0, n.jsx)(d.zxk, {
                                look: d.zxk.Looks.LINK,
                                color: (0, c.ap)(Y) ? d.zxk.Colors.PRIMARY : d.zxk.Colors.WHITE,
                                onClick: K,
                                children: C.intl.string(C.t.oEAioK)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
