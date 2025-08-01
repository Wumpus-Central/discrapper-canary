(n.d(t, { I: () => w }), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    s = n(33309),
    o = n(442837),
    u = n(755721),
    c = n(481060),
    d = n(80932),
    m = n(493773),
    h = n(710845),
    g = n(430824),
    p = n(496675),
    f = n(914010),
    x = n(626135),
    v = n(176354),
    b = n(598117),
    _ = n(390620),
    j = n(983205),
    O = n(903759),
    E = n(746622),
    N = n(384694),
    C = n(273391),
    D = n(981631),
    y = n(388032),
    I = n(139797);
let S = new h.Z('EmojiStudio'),
    w = (e) => {
        var t;
        let { userImage: n, guildId: a } = e,
            [h, w] = l.useState(n),
            k = (0, o.e7)([g.Z, f.Z, p.Z], () => {
                let e = f.Z.getGuildId(),
                    t = g.Z.getGuild(e);
                return p.Z.can(D.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [M, R] = l.useState(null != a ? a : k),
            [P, L] = l.useState(null),
            [Z, z] = l.useState(null),
            [G, U] = l.useState(''),
            [W, B] = l.useState(null),
            [F, H] = l.useState(() => Date.now()),
            V = l.useRef(0),
            J = l.useRef(0),
            Y = l.useRef(!1),
            K = l.useCallback(
                (e) => {
                    let { reason: t } = e,
                        n = null != P ? P : Z;
                    x.default.track(D.rMx.EMOJI_STUDIO_ENDED, {
                        reason: t,
                        is_initial: 0 === V.current,
                        has_image: null != h,
                        error: null == n ? null : String(n),
                        throttled_edit_count: J.current,
                        session_duration_ms: Date.now() - F
                    });
                },
                [P, Z, F, h]
            );
        (0, m.zq)(() => {
            Y.current || K({ reason: 'closed' });
        });
        let X = l.useCallback(async () => {
                if ((L(null), null == M)) return void L(b.ze.MISSING_GUILD);
                if (null == h || (null == h ? void 0 : h.file) == null || null == W) return void L(b.ze.MISSING_IMAGE_DATA);
                let e = null;
                try {
                    e = await (0, d.rS)({
                        image: W,
                        guildId: M,
                        name: G,
                        analyticsLocation: { page: D.ZY5.EMOJI_STUDIO }
                    });
                } catch (e) {
                    (L((0, E.z)(e)), S.error('Failed to upload emoji.', e));
                    return;
                }
                (K({ reason: 'uploaded' }),
                    (Y.current = !0),
                    (0, c.Mr3)(b.Hj),
                    (0, _.y)({
                        emoji: e,
                        guildId: M
                    }));
            }, [M, h, W, K, G]),
            q = l.useCallback(() => {
                (K({ reason: 'back_button' }), L(null), w(null), B(null), U(''), H(Date.now()), (J.current = 0));
            }, [K]),
            $ = l.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: n = 0, error: r } = e,
                    l = null;
                (null != t && v.ZP.isDataTooBig(t) && (l = b.ze.TOO_BIG), L(null != r ? r : l), n < V.current || (null != t && (B(t), (V.current = n))));
            }, []),
            Q = l.useCallback(() => {
                J.current++;
            }, []),
            ee = l.useCallback((e) => {
                var t;
                (w(e),
                    U((t) => {
                        var n, r;
                        if ('' !== t) return t;
                        let l = null != (r = null == e || null == (n = e.file) ? void 0 : n.name) ? r : '',
                            a = l.lastIndexOf('.'),
                            i = -1 === a ? l : l.substring(0, a);
                        return v.ZP.sanitizeEmojiName(i);
                    }),
                    B(null != (t = null == e ? void 0 : e.data) ? t : null));
            }, []);
        return (0, r.jsxs)('main', {
            className: i()(I.main, { [I.checkerboard]: null != h }),
            children: [
                (0, r.jsx)(c.X6q, {
                    variant: 'heading-lg/medium',
                    color: 'header-primary',
                    className: I.heading,
                    children: y.intl.string(y.t.iMJO39)
                }),
                null == h
                    ? (0, r.jsx)(O.u, { setImage: ee })
                    : (0, r.jsx)('div', {
                          className: I.editor,
                          children: (0, r.jsx)(C.v, {
                              file: h.file,
                              imageUri: h.data,
                              onUpdate: $,
                              onThrottledEdit: Q
                          })
                      }),
                (0, r.jsxs)('aside', {
                    className: I.aside,
                    children: [
                        (0, r.jsxs)('div', {
                            className: I.preview,
                            children: [
                                (0, r.jsx)('label', { children: y.intl.string(y.t.JmuIb2) }),
                                (0, r.jsxs)('ul', {
                                    children: [
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsxs)('div', {
                                                className: I.reactions,
                                                children: [
                                                    (0, r.jsx)(A, {
                                                        src: W,
                                                        alt: y.intl.string(y.t['zS0K+v'])
                                                    }),
                                                    (0, r.jsx)('span', { children: '8' })
                                                ]
                                            })
                                        }),
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsx)('div', {
                                                className: I.jumbo,
                                                children: (0, r.jsx)(A, {
                                                    src: W,
                                                    alt: y.intl.string(y.t['tE41+f'])
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)(c.xJW, {
                            title: y.intl.string(y.t.m0YV7O),
                            required: !0,
                            tag: 'label',
                            children: (0, r.jsx)(j.y, {
                                name: G,
                                onNameChange: U
                            })
                        }),
                        (0, r.jsx)(c.xJW, {
                            title: y.intl.string(y.t['9uKafX']),
                            required: !0,
                            tag: 'label',
                            titleId: 'guild-selector-label',
                            children: (0, r.jsxs)('div', {
                                className: I.guildSelectorContainer,
                                children: [
                                    (0, r.jsx)(N.q, {
                                        onChange: R,
                                        selected: M,
                                        onError: (e) => z(e),
                                        labelledBy: 'guild-selector-label',
                                        isEmojiAnimated: (0, s.v)(null == h || null == (t = h.file) ? void 0 : t.type)
                                    }),
                                    null != Z &&
                                        (0, r.jsx)(E.H, {
                                            error: Z,
                                            variant: 'text-xs/medium',
                                            color: 'text-feedback-warning'
                                        }),
                                    null == M &&
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-tertiary',
                                            children: y.intl.string(y.t['1pdw0N'])
                                        })
                                ]
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: I.foot,
                            children: [
                                null != P &&
                                    (0, r.jsx)(E.H, {
                                        error: P,
                                        variant: 'text-sm/normal',
                                        color: 'text-danger'
                                    }),
                                (0, r.jsx)(u.zx, {
                                    className: I.submit,
                                    onClick: X,
                                    fullWidth: !0,
                                    disabled: null == h || null == M || G.length < 2 || null != Z,
                                    children: y.intl.string(y.t.DU0dy8)
                                })
                            ]
                        })
                    ]
                }),
                null != h
                    ? (0, r.jsx)(T, { back: q })
                    : (0, r.jsx)(c.olH, {
                          onClick: () => (0, c.Mr3)(b.Hj),
                          className: I.closeButton
                      })
            ]
        });
    },
    T = (e) => {
        let { back: t } = e;
        return (0, r.jsx)(u.zx, {
            'aria-label': y.intl.string(y.t['13/7kZ']),
            onClick: t,
            look: u.zx.Looks.BLANK,
            innerClassName: I.backButtonInnner,
            className: I.backButton,
            children: (0, r.jsx)(c.j9r, {
                color: 'currentColor',
                size: 'md'
            })
        });
    },
    A = (e) => {
        let { src: t, alt: n } = e;
        return null == t || '' === t
            ? (0, r.jsx)('div', { className: I.previewPlaceholder })
            : (0, r.jsx)('img', {
                  src: t,
                  alt: n
              });
    };
