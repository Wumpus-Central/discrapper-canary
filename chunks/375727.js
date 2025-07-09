(n.d(t, { I: () => D }), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    u = n(80932),
    d = n(710845),
    h = n(430824),
    m = n(496675),
    g = n(914010),
    p = n(176354),
    f = n(598117),
    v = n(390620),
    x = n(903759),
    b = n(746622),
    _ = n(384694),
    j = n(273391),
    O = n(981631),
    N = n(388032),
    E = n(139797);
let I = new d.Z('EmojiStudio'),
    D = (e) => {
        let { userImage: t, guildId: n } = e,
            [a, d] = l.useState(t),
            D = (0, s.e7)([h.Z, g.Z, m.Z], () => {
                let e = g.Z.getGuildId(),
                    t = h.Z.getGuild(e);
                return m.Z.can(O.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [S, w] = l.useState(null != n ? n : D),
            [T, A] = l.useState(null),
            [M, k] = l.useState(null),
            [P, R] = l.useState(''),
            [L, Z] = l.useState(null),
            [z, G] = l.useState(!1),
            U = l.useCallback(async () => {
                if ((A(null), null == S)) return void A(f.ze.MISSING_GUILD);
                if (null == a || (null == a ? void 0 : a.file) == null || null == L) return void A(f.ze.MISSING_IMAGE_DATA);
                let e = null;
                try {
                    e = await (0, u.rS)({
                        image: L,
                        guildId: S,
                        name: P,
                        analyticsLocation: { page: O.ZY5.EMOJI_STUDIO }
                    });
                } catch (e) {
                    (A((0, b.z)(e)), I.error('Failed to upload emoji.', e));
                    return;
                }
                ((0, c.Mr3)(f.Hj),
                    (0, v.y)({
                        emoji: e,
                        guildId: S
                    }));
            }, [S, a, L, P]),
            W = l.useCallback((e) => {
                R(e.length < 2 ? e : p.ZP.sanitizeEmojiName(e));
            }, []),
            B = l.useCallback(() => {
                (A(null), d(null), Z(null), R(''));
            }, []),
            F = l.useRef(0),
            H = l.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: n = 0, error: r } = e,
                    l = null;
                (null != t && p.ZP.isDataTooBig(t) && (l = f.ze.TOO_BIG), A(null != r ? r : l), n < F.current || (null != t && (Z(t), (F.current = n))));
            }, []),
            V = l.useCallback((e) => {
                var t;
                (d(e),
                    R((t) => {
                        var n, r;
                        if ('' !== t) return t;
                        let l = null != (r = null == e || null == (n = e.file) ? void 0 : n.name) ? r : '',
                            a = l.lastIndexOf('.'),
                            i = -1 === a ? l : l.substring(0, a);
                        return p.ZP.sanitizeEmojiName(i);
                    }),
                    Z(null != (t = null == e ? void 0 : e.data) ? t : null));
            }, []);
        return (0, r.jsxs)('main', {
            className: i()(E.main, { [E.checkerboard]: null != a }),
            children: [
                (0, r.jsx)(c.X6q, {
                    variant: 'heading-lg/medium',
                    color: 'header-primary',
                    className: E.heading,
                    children: N.intl.string(N.t.iMJO39)
                }),
                null == a
                    ? (0, r.jsx)(x.u, { setImage: V })
                    : (0, r.jsx)('div', {
                          className: E.editor,
                          children: (0, r.jsx)(j.v, {
                              file: a.file,
                              imageUri: a.data,
                              onUpdate: H
                          })
                      }),
                (0, r.jsxs)('aside', {
                    className: E.aside,
                    children: [
                        (0, r.jsx)(c.xJW, {
                            title: N.intl.string(N.t.m0YV7O),
                            required: !0,
                            tag: 'label',
                            children: (0, r.jsx)(c.oil, {
                                error: z ? '' : void 0,
                                minLength: 2,
                                value: P,
                                onChange: W,
                                placeholder: N.intl.string(N.t.U2JFHR),
                                name: 'emoji_name',
                                onBlur: () => G(!1),
                                onFocus: () => G(!0),
                                required: !0
                            })
                        }),
                        (0, r.jsx)(c.xJW, {
                            title: N.intl.string(N.t['9uKafX']),
                            required: !0,
                            tag: 'label',
                            titleId: 'guild-selector-label',
                            children: (0, r.jsxs)('div', {
                                className: E.guildSelectorContainer,
                                children: [
                                    (0, r.jsx)(_.q, {
                                        onChange: w,
                                        selected: S,
                                        onError: (e) => k(e),
                                        labelledBy: 'guild-selector-label'
                                    }),
                                    null != M &&
                                        (0, r.jsx)(b.H, {
                                            error: M,
                                            variant: 'text-xs/medium',
                                            color: 'text-feedback-warning'
                                        }),
                                    null == S &&
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-tertiary',
                                            children: N.intl.string(N.t['1pdw0N'])
                                        })
                                ]
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: E.preview,
                            children: [
                                (0, r.jsx)('label', { children: N.intl.string(N.t.JmuIb2) }),
                                (0, r.jsxs)('ul', {
                                    children: [
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsxs)('div', {
                                                className: E.reactions,
                                                children: [
                                                    (0, r.jsx)(y, {
                                                        src: L,
                                                        alt: N.intl.string(N.t['zS0K+v'])
                                                    }),
                                                    (0, r.jsx)('span', { children: '8' })
                                                ]
                                            })
                                        }),
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsx)('div', {
                                                className: E.jumbo,
                                                children: (0, r.jsx)(y, {
                                                    src: L,
                                                    alt: N.intl.string(N.t['tE41+f'])
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: E.foot,
                            children: [
                                null != T &&
                                    (0, r.jsx)(b.H, {
                                        error: T,
                                        variant: 'text-sm/normal',
                                        color: 'text-danger'
                                    }),
                                (0, r.jsx)(o.zx, {
                                    className: E.submit,
                                    onClick: U,
                                    fullWidth: !0,
                                    disabled: null == a || null == S || P.length < 2 || null != M,
                                    children: N.intl.string(N.t.DU0dy8)
                                })
                            ]
                        })
                    ]
                }),
                null != a
                    ? (0, r.jsx)(C, { back: B })
                    : (0, r.jsx)(c.olH, {
                          onClick: () => (0, c.Mr3)(f.Hj),
                          className: E.closeButton
                      })
            ]
        });
    },
    C = (e) => {
        let { back: t } = e;
        return (0, r.jsx)(o.zx, {
            'aria-label': N.intl.string(N.t['13/7kZ']),
            onClick: t,
            look: o.zx.Looks.BLANK,
            innerClassName: E.backButtonInnner,
            className: E.backButton,
            children: (0, r.jsx)(c.j9r, {
                color: 'currentColor',
                size: 'md'
            })
        });
    },
    y = (e) => {
        let { src: t, alt: n } = e;
        return null == t || '' === t
            ? (0, r.jsx)('div', { className: E.previewPlaceholder })
            : (0, r.jsx)('img', {
                  src: t,
                  alt: n
              });
    };
