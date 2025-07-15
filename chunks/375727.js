(n.d(t, { I: () => I }), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    s = n(33309),
    o = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(80932),
    m = n(710845),
    g = n(430824),
    p = n(496675),
    h = n(914010),
    f = n(176354),
    x = n(598117),
    v = n(390620),
    b = n(983205),
    _ = n(903759),
    j = n(746622),
    O = n(384694),
    N = n(273391),
    E = n(981631),
    C = n(388032),
    y = n(139797);
let D = new m.Z('EmojiStudio'),
    I = (e) => {
        var t;
        let { userImage: n, guildId: a } = e,
            [m, I] = l.useState(n),
            T = (0, o.e7)([g.Z, h.Z, p.Z], () => {
                let e = h.Z.getGuildId(),
                    t = g.Z.getGuild(e);
                return p.Z.can(E.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [A, M] = l.useState(null != a ? a : T),
            [k, P] = l.useState(null),
            [R, L] = l.useState(null),
            [Z, z] = l.useState(''),
            [G, U] = l.useState(null),
            W = l.useCallback(async () => {
                if ((P(null), null == A)) return void P(x.ze.MISSING_GUILD);
                if (null == m || (null == m ? void 0 : m.file) == null || null == G) return void P(x.ze.MISSING_IMAGE_DATA);
                let e = null;
                try {
                    e = await (0, d.rS)({
                        image: G,
                        guildId: A,
                        name: Z,
                        analyticsLocation: { page: E.ZY5.EMOJI_STUDIO }
                    });
                } catch (e) {
                    (P((0, j.z)(e)), D.error('Failed to upload emoji.', e));
                    return;
                }
                ((0, u.Mr3)(x.Hj),
                    (0, v.y)({
                        emoji: e,
                        guildId: A
                    }));
            }, [A, m, G, Z]),
            B = l.useCallback(() => {
                (P(null), I(null), U(null), z(''));
            }, []),
            F = l.useRef(0),
            H = l.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: n = 0, error: r } = e,
                    l = null;
                (null != t && f.ZP.isDataTooBig(t) && (l = x.ze.TOO_BIG), P(null != r ? r : l), n < F.current || (null != t && (U(t), (F.current = n))));
            }, []),
            V = l.useCallback((e) => {
                var t;
                (I(e),
                    z((t) => {
                        var n, r;
                        if ('' !== t) return t;
                        let l = null != (r = null == e || null == (n = e.file) ? void 0 : n.name) ? r : '',
                            a = l.lastIndexOf('.'),
                            i = -1 === a ? l : l.substring(0, a);
                        return f.ZP.sanitizeEmojiName(i);
                    }),
                    U(null != (t = null == e ? void 0 : e.data) ? t : null));
            }, []);
        return (0, r.jsxs)('main', {
            className: i()(y.main, { [y.checkerboard]: null != m }),
            children: [
                (0, r.jsx)(u.X6q, {
                    variant: 'heading-lg/medium',
                    color: 'header-primary',
                    className: y.heading,
                    children: C.intl.string(C.t.iMJO39)
                }),
                null == m
                    ? (0, r.jsx)(_.u, { setImage: V })
                    : (0, r.jsx)('div', {
                          className: y.editor,
                          children: (0, r.jsx)(N.v, {
                              file: m.file,
                              imageUri: m.data,
                              onUpdate: H
                          })
                      }),
                (0, r.jsxs)('aside', {
                    className: y.aside,
                    children: [
                        (0, r.jsxs)('div', {
                            className: y.preview,
                            children: [
                                (0, r.jsx)('label', { children: C.intl.string(C.t.JmuIb2) }),
                                (0, r.jsxs)('ul', {
                                    children: [
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsxs)('div', {
                                                className: y.reactions,
                                                children: [
                                                    (0, r.jsx)(w, {
                                                        src: G,
                                                        alt: C.intl.string(C.t['zS0K+v'])
                                                    }),
                                                    (0, r.jsx)('span', { children: '8' })
                                                ]
                                            })
                                        }),
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsx)('div', {
                                                className: y.jumbo,
                                                children: (0, r.jsx)(w, {
                                                    src: G,
                                                    alt: C.intl.string(C.t['tE41+f'])
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)(u.xJW, {
                            title: C.intl.string(C.t.m0YV7O),
                            required: !0,
                            tag: 'label',
                            children: (0, r.jsx)(b.y, {
                                name: Z,
                                onNameChange: z
                            })
                        }),
                        (0, r.jsx)(u.xJW, {
                            title: C.intl.string(C.t['9uKafX']),
                            required: !0,
                            tag: 'label',
                            titleId: 'guild-selector-label',
                            children: (0, r.jsxs)('div', {
                                className: y.guildSelectorContainer,
                                children: [
                                    (0, r.jsx)(O.q, {
                                        onChange: M,
                                        selected: A,
                                        onError: (e) => L(e),
                                        labelledBy: 'guild-selector-label',
                                        isEmojiAnimated: (0, s.v)(null == m || null == (t = m.file) ? void 0 : t.type)
                                    }),
                                    null != R &&
                                        (0, r.jsx)(j.H, {
                                            error: R,
                                            variant: 'text-xs/medium',
                                            color: 'text-feedback-warning'
                                        }),
                                    null == A &&
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-tertiary',
                                            children: C.intl.string(C.t['1pdw0N'])
                                        })
                                ]
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: y.foot,
                            children: [
                                null != k &&
                                    (0, r.jsx)(j.H, {
                                        error: k,
                                        variant: 'text-sm/normal',
                                        color: 'text-danger'
                                    }),
                                (0, r.jsx)(c.zx, {
                                    className: y.submit,
                                    onClick: W,
                                    fullWidth: !0,
                                    disabled: null == m || null == A || Z.length < 2 || null != R,
                                    children: C.intl.string(C.t.DU0dy8)
                                })
                            ]
                        })
                    ]
                }),
                null != m
                    ? (0, r.jsx)(S, { back: B })
                    : (0, r.jsx)(u.olH, {
                          onClick: () => (0, u.Mr3)(x.Hj),
                          className: y.closeButton
                      })
            ]
        });
    },
    S = (e) => {
        let { back: t } = e;
        return (0, r.jsx)(c.zx, {
            'aria-label': C.intl.string(C.t['13/7kZ']),
            onClick: t,
            look: c.zx.Looks.BLANK,
            innerClassName: y.backButtonInnner,
            className: y.backButton,
            children: (0, r.jsx)(u.j9r, {
                color: 'currentColor',
                size: 'md'
            })
        });
    },
    w = (e) => {
        let { src: t, alt: n } = e;
        return null == t || '' === t
            ? (0, r.jsx)('div', { className: y.previewPlaceholder })
            : (0, r.jsx)('img', {
                  src: t,
                  alt: n
              });
    };
