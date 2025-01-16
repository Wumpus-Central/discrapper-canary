t.r(l),
    t.d(l, {
        default: function () {
            return F;
        }
    }),
    t(47120);
var n = t(200651),
    i = t(192379),
    s = t(120356),
    a = t.n(s),
    o = t(772848),
    r = t(36793),
    u = t(442837),
    d = t(780384),
    c = t(481060),
    m = t(600164),
    f = t(339085),
    g = t(349709),
    v = t(763610),
    x = t(210887),
    p = t(430824),
    j = t(594174),
    h = t(626135),
    I = t(424218),
    N = t(63063),
    C = t(956664),
    E = t(268350),
    S = t(373228),
    T = t(378233),
    Z = t(419922),
    k = t(611480),
    b = t(981631),
    y = t(388032),
    B = t(496699),
    R = t(434227),
    _ = t(600126);
let A = new Set(['application/json', 'image/png', 'image/apng', 'image/gif']),
    D = [
        {
            name: 'Sticker file',
            extensions: ['json', 'png', 'apng', 'gif']
        }
    ];
function w(e, l) {
    h.default.track(b.rMx.STICKER_UPLOAD_COMPLETED, {
        successful: e,
        error: null != l ? l : ''
    });
}
let P = (e) => {
        let { stickerPreview: l } = e;
        return (0, n.jsxs)('div', {
            className: B.preview,
            children: [
                (0, n.jsx)('div', {
                    className: B.previewDark,
                    children:
                        null != l
                            ? l
                            : (0, n.jsx)('img', {
                                  src: R,
                                  alt: y.intl.string(y.t.qOsjZm)
                              })
                }),
                (0, n.jsx)('div', {
                    className: B.previewLight,
                    children:
                        null != l
                            ? l
                            : (0, n.jsx)('img', {
                                  src: _,
                                  alt: y.intl.string(y.t.YC5NAA)
                              })
                })
            ]
        });
    },
    z = (e) => {
        let { sticker: l, previewData: t, onStickerError: i } = e;
        if (null != l)
            return (0, n.jsx)(Z.ZP, {
                size: 160,
                sticker: l
            });
        if (null == t) return null;
        let { id: s, formatType: a, content: o } = t;
        return (0, n.jsx)(
            Z.ZP,
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
                onError: i
            },
            s
        );
    };
async function L(e) {
    let l = await (0, C.fD)(e),
        t = new Image();
    (t.src = l), await t.decode();
    let n = (0, r.Ae)(t, 320, 320);
    return (0, C.Bo)(n, e.name, e.type);
}
function F(e) {
    var l, t, s, r, Z, R, _, F;
    let { transitionState: U, onClose: M, guildId: O, sticker: K } = e,
        H = (0, u.e7)([x.Z], () => x.Z.theme),
        V = (0, u.e7)([f.ZP], () => ((null == K ? void 0 : K.tags) != null ? f.ZP.getCustomEmojiById(K.tags) : null)),
        Y = null !== (t = null === (l = j.default.getCurrentUser()) || void 0 === l ? void 0 : l.isStaff()) && void 0 !== t && t ? k.OC : k.Ht,
        [q, G] = i.useState(null),
        [W, X] = i.useState(null !== (s = null == K ? void 0 : K.name) && void 0 !== s ? s : ''),
        [J, Q] = i.useState({
            file: null,
            filename: null !== (r = (0, T._V)(K)) && void 0 !== r ? r : ''
        }),
        [$, ee] = i.useState(null == V ? void 0 : V.id),
        [el, et] = i.useState(null !== (Z = null == V ? void 0 : V.name) && void 0 !== Z ? Z : null == K ? void 0 : K.tags),
        [en, ei] = i.useState(null !== (R = null == K ? void 0 : K.description) && void 0 !== R ? R : ''),
        [es, ea] = i.useState(!1),
        [eo, er] = i.useState(null),
        eu = (0, u.e7)([p.Z], () => p.Z.getGuild(O)),
        ed = (null == eu ? void 0 : eu.hasFeature(b.oNc.PARTNERED)) || (null == eu ? void 0 : eu.hasFeature(b.oNc.VERIFIED)),
        ec = null != K,
        em = ec || (null == J ? void 0 : J.file) != null,
        ef = 0 === en.length || (en.length >= 2 && en.length <= 100),
        eg = !es && (null == eo ? void 0 : eo.isBlocking) !== !0 && W.length >= 2 && (null != $ || null != el || ((null == K ? void 0 : K.tags) != null && (null == K ? void 0 : K.tags) !== '')) && em && ef,
        ev = async (e) => {
            var l;
            if (null == e) return;
            let t = null === (l = e.type) || void 0 === l ? void 0 : l.split(';')[0];
            if (!A.has(t)) {
                er({
                    message: y.intl.string(y.t.B2hGAA),
                    isBlocking: !0
                });
                return;
            }
            let n = e;
            if ('image/png' === t && e.size > Y && !(await (0, C.c0)(e))) {
                let l = (n = await L(e)).size > Y;
                h.default.track(b.rMx.STICKER_FILE_RESIZED, {
                    original_file_size_bytes: e.size,
                    resized_file_size_bytes: n.size,
                    resized_file_too_big: l
                });
            }
            if (n.size > Y) {
                er({
                    message: y.intl.formatToPlainString(y.t['3eK7Rk'], { maxSize: (0, I.IC)(Y, { useKibibytes: !0 }) }),
                    isBlocking: null == J.file
                }),
                    h.default.track(b.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                        size: n.size,
                        filetype: t
                    });
                return;
            }
            let i = (0, T.Zv)(n.type);
            if (i === S.u3.LOTTIE) {
                if (!ed) {
                    er({
                        message: y.intl.format(y.t.RNNjy8, { articleURL: N.Z.getArticleURL(b.BhN.STICKERS_UPLOAD) }),
                        isBlocking: !0
                    });
                    return;
                }
                let e = new FileReader();
                e.addEventListener('load', () => {
                    G({
                        id: (0, o.Z)(),
                        formatType: i,
                        content: e.result
                    }),
                        er(null);
                }),
                    e.readAsText(n);
            } else {
                let e = await (0, C.fD)(n);
                G({
                    id: (0, o.Z)(),
                    formatType: i,
                    content: e
                }),
                    er(null);
            }
            Q({
                file: n,
                filename: n.name
            });
        },
        ex = async (e) => {
            var l, t, n, i, s, a;
            e.preventDefault();
            let o = null !== (t = null !== (l = null != $ ? $ : el) && void 0 !== l ? l : null == K ? void 0 : K.tags) && void 0 !== t ? t : '';
            try {
                if ((ea(!0), ec))
                    await (0, E.Jf)(O, null !== (n = null == K ? void 0 : K.id) && void 0 !== n ? n : '', {
                        name: W,
                        tags: o,
                        description: en
                    });
                else {
                    let e = new FormData();
                    e.append('name', W), e.append('tags', o), e.append('description', en), (null == J ? void 0 : J.file) != null && e.append('file', J.file), (a = null !== (s = null === (i = J.file) || void 0 === i ? void 0 : i.type) && void 0 !== s ? s : ''), h.default.track(b.rMx.STICKER_UPLOAD_STARTED, { filetype: a }), await (0, E.lY)(O, e), w(!0);
                }
                M();
            } catch (e) {
                er({
                    message: e.body.message,
                    isBlocking: !1
                }),
                    w(!1, e.body.message);
            } finally {
                ea(!1);
            }
        },
        ep = z({
            sticker: K,
            previewData: q,
            onStickerError: i.useCallback(() => {
                er({
                    message: y.intl.string(y.t['/WIYNT']),
                    isBlocking: !0
                });
            }, [])
        }),
        ej = ed ? y.t.alYXBA : y.t.kpcMfn;
    return (0, n.jsxs)(c.ModalRoot, {
        transitionState: U,
        'aria-labelledby': 'STICKER_UPLOAD_MODAL',
        className: B.modal,
        children: [
            (0, n.jsx)(c.ModalCloseButton, {
                onClick: M,
                className: B.modalClose
            }),
            (0, n.jsxs)('form', {
                onSubmit: ex,
                className: B.form,
                children: [
                    (0, n.jsxs)(c.ModalContent, {
                        className: B.modalContent,
                        children: [
                            (0, n.jsxs)(c.ModalHeader, {
                                direction: m.Z.Direction.VERTICAL,
                                separator: !1,
                                className: B.modalHeader,
                                children: [
                                    (0, n.jsx)(c.Heading, {
                                        variant: 'heading-xl/semibold',
                                        className: B.modalHeaderTitle,
                                        children: y.intl.string(y.t.yxVsBA)
                                    }),
                                    (0, n.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        children: y.intl.format(ej, { fileSize: (0, I.IC)(k.Ht, { useKibibytes: !0 }) })
                                    })
                                ]
                            }),
                            (0, n.jsx)(c.FormSection, {
                                title: y.intl.string(y.t.gjdiKC),
                                className: B.formItem,
                                children: (0, n.jsx)(P, { stickerPreview: ep })
                            }),
                            (0, n.jsxs)(c.FormSection, {
                                className: a()(B.formItem, B.formItemRow),
                                children: [
                                    (0, n.jsx)(c.FormItem, {
                                        title: ec ? y.intl.string(y.t.wp36s7) : y.intl.string(y.t.AM3mzc),
                                        required: !0,
                                        className: B.formItemRowChild,
                                        children: ec
                                            ? (0, n.jsx)(c.TextInput, {
                                                  disabled: !0,
                                                  value: null !== (_ = null == J ? void 0 : J.filename) && void 0 !== _ ? _ : ''
                                              })
                                            : (0, n.jsx)(v.Z, {
                                                  buttonText: y.intl.string(y.t.xEnDUV),
                                                  filters: D,
                                                  filename: null !== (F = null == J ? void 0 : J.filename) && void 0 !== F ? F : '',
                                                  placeholder: y.intl.string(y.t.rUYLJy),
                                                  onFileSelect: ev
                                              })
                                    }),
                                    (0, n.jsx)(g.Z, {
                                        className: B.formItemRowChild,
                                        guildId: O,
                                        emojiId: $,
                                        emojiName: el,
                                        setEmojiId: ee,
                                        setEmojiName: et,
                                        shouldUpdateBothEmojiFields: !0
                                    })
                                ]
                            }),
                            (0, n.jsx)(c.FormItem, {
                                title: y.intl.string(y.t['0VRh6u']),
                                required: !0,
                                className: B.formItem,
                                children: (0, n.jsx)(c.TextInput, {
                                    value: W,
                                    onChange: X,
                                    placeholder: y.intl.string(y.t['3fGttb']),
                                    maxLength: 30
                                })
                            }),
                            (0, n.jsxs)('div', {
                                className: B.formItem,
                                children: [
                                    (0, n.jsxs)(c.FormTitle, {
                                        children: [
                                            y.intl.string(y.t.uGccen),
                                            (0, n.jsx)(c.Tooltip, {
                                                text: y.intl.string(y.t.S6jlDg),
                                                children: (e) =>
                                                    (0, n.jsx)(c.CircleInformationIcon, {
                                                        size: 'xs',
                                                        color: 'currentColor',
                                                        className: B.infoIcon,
                                                        ...e
                                                    })
                                            })
                                        ]
                                    }),
                                    (0, n.jsx)(c.TextArea, {
                                        value: en,
                                        onChange: ei,
                                        placeholder: y.intl.string(y.t.zwR0fX),
                                        maxLength: 100
                                    })
                                ]
                            }),
                            null != eo &&
                                (0, n.jsx)(c.Text, {
                                    className: B.formItem,
                                    variant: 'text-sm/normal',
                                    color: 'text-danger',
                                    children: eo.message
                                })
                        ]
                    }),
                    (0, n.jsxs)(c.ModalFooter, {
                        className: B.modalFooter,
                        children: [
                            (0, n.jsx)(c.Button, {
                                type: 'submit',
                                disabled: !eg,
                                children: ec ? y.intl.string(y.t.Arwnen) : y.intl.string(y.t['3UB9aW'])
                            }),
                            (0, n.jsx)(c.Button, {
                                look: c.Button.Looks.LINK,
                                color: (0, d.ap)(H) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
                                onClick: M,
                                children: y.intl.string(y.t.oEAioK)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
