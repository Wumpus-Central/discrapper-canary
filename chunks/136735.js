(l.d(t, { default: () => U }), l(388685), l(953529), l(35282));
var n = l(255367),
    i = l(73800),
    s = l(120356),
    a = l.n(s),
    r = l(772848),
    o = l(36793),
    u = l(442837),
    c = l(780384),
    d = l(755721),
    m = l(481060),
    f = l(600164),
    g = l(339085),
    p = l(349709),
    j = l(763610),
    x = l(210887),
    v = l(430824),
    h = l(594174),
    b = l(626135),
    y = l(424218),
    N = l(63063),
    E = l(956664),
    I = l(268350),
    O = l(373228),
    S = l(378233),
    w = l(419922),
    C = l(611480),
    k = l(981631),
    D = l(388032),
    P = l(154377),
    Z = l(434227),
    R = l(600126);
let T = new Set(['application/json', 'image/png', 'image/apng', 'image/gif', 'image/jpeg', 'image/jpg']),
    z = [
        {
            name: 'Sticker file',
            extensions: ['json', 'png', 'apng', 'gif', 'jpeg', 'jpg']
        }
    ];
function _(e, t) {
    b.default.track(k.rMx.STICKER_UPLOAD_COMPLETED, {
        successful: e,
        error: null != t ? t : ''
    });
}
let A = (e) => {
        let { stickerPreview: t } = e;
        return (0, n.jsxs)('div', {
            className: P.preview,
            children: [
                (0, n.jsx)('div', {
                    className: P.previewDark,
                    children:
                        null != t
                            ? t
                            : (0, n.jsx)('img', {
                                  src: Z,
                                  alt: D.intl.string(D.t.qOsjZm)
                              })
                }),
                (0, n.jsx)('div', {
                    className: P.previewLight,
                    children:
                        null != t
                            ? t
                            : (0, n.jsx)('img', {
                                  src: R,
                                  alt: D.intl.string(D.t.YC5NAA)
                              })
                })
            ]
        });
    },
    B = (e) => {
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
async function L(e) {
    let t = await (0, E.fD)(e),
        l = new Image();
    ((l.src = t), await l.decode());
    let n = (0, o.Ae)(l, 320, 320);
    return (0, E.Bo)(n, e.name, 'image/png');
}
function U(e) {
    var t, l, s, o, w, Z, R, U;
    let { transitionState: K, onClose: M, guildId: F, sticker: Y } = e,
        H = (0, u.e7)([x.Z], () => x.Z.theme),
        q = (0, u.e7)([g.ZP], () => ((null == Y ? void 0 : Y.tags) != null ? g.ZP.getCustomEmojiById(Y.tags) : null)),
        V = null != (l = null == (t = h.default.getCurrentUser()) ? void 0 : t.isStaff()) && l ? C.OC : C.Ht,
        [W, X] = i.useState(null),
        [G, J] = i.useState(null != (s = null == Y ? void 0 : Y.name) ? s : ''),
        [Q, $] = i.useState({
            file: null,
            filename: null != (o = (0, S._V)(Y)) ? o : ''
        }),
        [ee, et] = i.useState(null == q ? void 0 : q.id),
        [el, en] = i.useState(null != (w = null == q ? void 0 : q.name) ? w : null == Y ? void 0 : Y.tags),
        [ei, es] = i.useState(null != (Z = null == Y ? void 0 : Y.description) ? Z : ''),
        [ea, er] = i.useState(!1),
        [eo, eu] = i.useState(null),
        ec = (0, u.e7)([v.Z], () => v.Z.getGuild(F)),
        ed = (null == ec ? void 0 : ec.features.has(k.oNc.PARTNERED)) || (null == ec ? void 0 : ec.features.has(k.oNc.VERIFIED)),
        em = null != Y,
        ef = em || (null == Q ? void 0 : Q.file) != null,
        eg = 0 === ei.length || (ei.length >= 2 && ei.length <= 100),
        ep = !ea && (null == eo ? void 0 : eo.isBlocking) !== !0 && G.length >= 2 && (null != ee || null != el || ((null == Y ? void 0 : Y.tags) != null && (null == Y ? void 0 : Y.tags) !== '')) && ef && eg,
        ej = async (e) => {
            var t;
            if (null == e) return;
            let l = null == (t = e.type) ? void 0 : t.split(';')[0];
            if (!T.has(l))
                return void eu({
                    message: D.intl.string(D.t.B2hGAA),
                    isBlocking: !0
                });
            let n = e;
            if ('image/jpeg' === l || 'image/jpg' === l) n = await L(e);
            else if ('image/png' === l && e.size > V && !(await (0, E.c0)(e))) {
                let t = (n = await L(e)).size > V;
                b.default.track(k.rMx.STICKER_FILE_RESIZED, {
                    original_file_size_bytes: e.size,
                    resized_file_size_bytes: n.size,
                    resized_file_too_big: t
                });
            }
            if (n.size > V) {
                (eu({
                    message: D.intl.formatToPlainString(D.t['3eK7Rk'], { maxSize: (0, y.IC)(V, { useKibibytes: !0 }) }),
                    isBlocking: null == Q.file
                }),
                    b.default.track(k.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                        size: n.size,
                        filetype: n.type
                    }));
                return;
            }
            let i = (0, S.Zv)(n.type);
            if (i === O.u3.LOTTIE) {
                if (!ed)
                    return void eu({
                        message: D.intl.format(D.t.RNNjy8, { articleURL: N.Z.getArticleURL(k.BhN.STICKERS_UPLOAD) }),
                        isBlocking: !0
                    });
                let e = new FileReader();
                (e.addEventListener('load', () => {
                    (X({
                        id: (0, r.Z)(),
                        formatType: i,
                        content: e.result
                    }),
                        eu(null));
                }),
                    e.readAsText(n));
            } else {
                let e = await (0, E.fD)(n);
                (X({
                    id: (0, r.Z)(),
                    formatType: i,
                    content: e
                }),
                    eu(null));
            }
            $({
                file: n,
                filename: n.name
            });
        },
        ex = async (e) => {
            var t, l, n, i, s, a;
            e.preventDefault();
            let r = null != (l = null != (t = null != ee ? ee : el) ? t : null == Y ? void 0 : Y.tags) ? l : '';
            try {
                if ((er(!0), em))
                    await (0, I.Jf)(F, null != (n = null == Y ? void 0 : Y.id) ? n : '', {
                        name: G,
                        tags: r,
                        description: ei
                    });
                else {
                    let e = new FormData();
                    (e.append('name', G),
                        e.append('tags', r),
                        e.append('description', ei),
                        (null == Q ? void 0 : Q.file) != null && e.append('file', Q.file),
                        (a = null != (s = null == (i = Q.file) ? void 0 : i.type) ? s : ''),
                        b.default.track(k.rMx.STICKER_UPLOAD_STARTED, { filetype: a }),
                        await (0, I.lY)({
                            guildId: F,
                            body: e,
                            platform: 'web'
                        }),
                        _(!0),
                        (0, m.showToast)((0, m.createToast)(D.intl.string(D.t.QR85gY), m.ToastType.SUCCESS)));
                }
                M();
            } catch (e) {
                (eu({
                    message: e.body.message,
                    isBlocking: !1
                }),
                    _(!1, e.body.message));
            } finally {
                er(!1);
            }
        },
        ev = B({
            sticker: Y,
            previewData: W,
            onStickerError: i.useCallback(() => {
                eu({
                    message: D.intl.string(D.t['/WIYNT']),
                    isBlocking: !0
                });
            }, [])
        }),
        eh = ed ? D.t.alYXBA : D.t.kpcMfn;
    return (0, n.jsxs)(m.Y0X, {
        transitionState: K,
        'aria-labelledby': 'STICKER_UPLOAD_MODAL',
        className: P.modal,
        parentComponent: 'GuildStickerUploadModal',
        children: [
            (0, n.jsx)(m.olH, {
                onClick: M,
                className: P.modalClose
            }),
            (0, n.jsxs)('form', {
                onSubmit: ex,
                className: P.form,
                children: [
                    (0, n.jsxs)(m.hzk, {
                        className: P.modalContent,
                        children: [
                            (0, n.jsxs)(m.xBx, {
                                direction: f.Z.Direction.VERTICAL,
                                separator: !1,
                                className: P.modalHeader,
                                children: [
                                    (0, n.jsx)(m.X6q, {
                                        variant: 'heading-xl/semibold',
                                        className: P.modalHeaderTitle,
                                        children: D.intl.string(D.t.yxVsBA)
                                    }),
                                    (0, n.jsx)(m.Text, {
                                        variant: 'text-md/normal',
                                        children: D.intl.format(eh, { fileSize: (0, y.IC)(C.Ht, { useKibibytes: !0 }) })
                                    })
                                ]
                            }),
                            (0, n.jsx)(m.hjN, {
                                title: D.intl.string(D.t.gjdiKC),
                                className: P.formItem,
                                children: (0, n.jsx)(A, { stickerPreview: ev })
                            }),
                            (0, n.jsxs)(m.hjN, {
                                className: a()(P.formItem, P.formItemRow),
                                children: [
                                    (0, n.jsx)(m.xJW, {
                                        title: em ? D.intl.string(D.t.wp36s7) : D.intl.string(D.t.AM3mzc),
                                        required: !0,
                                        className: P.formItemRowChild,
                                        children: em
                                            ? (0, n.jsx)(m.oil, {
                                                  disabled: !0,
                                                  value: null != (R = null == Q ? void 0 : Q.filename) ? R : ''
                                              })
                                            : (0, n.jsx)(j.Z, {
                                                  buttonText: D.intl.string(D.t.xEnDUV),
                                                  filters: z,
                                                  filename: null != (U = null == Q ? void 0 : Q.filename) ? U : '',
                                                  placeholder: D.intl.string(D.t.rUYLJy),
                                                  onFileSelect: ej
                                              })
                                    }),
                                    (0, n.jsx)(p.Z, {
                                        className: P.formItemRowChild,
                                        guildId: F,
                                        emojiId: ee,
                                        emojiName: el,
                                        setEmojiId: et,
                                        setEmojiName: en,
                                        shouldUpdateBothEmojiFields: !0
                                    })
                                ]
                            }),
                            (0, n.jsx)(m.xJW, {
                                title: D.intl.string(D.t['0VRh6u']),
                                required: !0,
                                className: P.formItem,
                                children: (0, n.jsx)(m.oil, {
                                    value: G,
                                    onChange: J,
                                    placeholder: D.intl.string(D.t['3fGttb']),
                                    maxLength: 30
                                })
                            }),
                            (0, n.jsxs)('div', {
                                className: P.formItem,
                                children: [
                                    (0, n.jsxs)(m.vwX, {
                                        children: [
                                            D.intl.string(D.t.uGccen),
                                            (0, n.jsx)(m.ua7, {
                                                text: D.intl.string(D.t.S6jlDg),
                                                children: (e) =>
                                                    (0, n.jsx)(
                                                        m.d3s,
                                                        (function (e) {
                                                            for (var t = 1; t < arguments.length; t++) {
                                                                var l = null != arguments[t] ? arguments[t] : {},
                                                                    n = Object.keys(l);
                                                                ('function' == typeof Object.getOwnPropertySymbols &&
                                                                    (n = n.concat(
                                                                        Object.getOwnPropertySymbols(l).filter(function (e) {
                                                                            return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                                                        })
                                                                    )),
                                                                    n.forEach(function (t) {
                                                                        var n;
                                                                        ((n = l[t]),
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
                                                        })(
                                                            {
                                                                size: 'xs',
                                                                color: 'currentColor',
                                                                className: P.infoIcon
                                                            },
                                                            e
                                                        )
                                                    )
                                            })
                                        ]
                                    }),
                                    (0, n.jsx)(m.Kx8, {
                                        value: ei,
                                        onChange: es,
                                        placeholder: D.intl.string(D.t.zwR0fX),
                                        maxLength: 100
                                    })
                                ]
                            }),
                            null != eo &&
                                (0, n.jsx)(m.Text, {
                                    className: P.formItem,
                                    variant: 'text-sm/normal',
                                    color: 'text-danger',
                                    children: eo.message
                                })
                        ]
                    }),
                    (0, n.jsxs)(m.mzw, {
                        className: P.modalFooter,
                        children: [
                            (0, n.jsx)(m.zxk, {
                                variant: 'primary',
                                text: em ? D.intl.string(D.t.Arwnen) : D.intl.string(D.t['3UB9aW']),
                                type: 'submit',
                                disabled: !ep
                            }),
                            (0, n.jsx)(d.zx, {
                                look: d.zx.Looks.LINK,
                                color: (0, c.ap)(H) ? d.zx.Colors.PRIMARY : d.zx.Colors.WHITE,
                                onClick: M,
                                children: D.intl.string(D.t.oEAioK)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
