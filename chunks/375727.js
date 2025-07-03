(n.d(t, { I: () => N }), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(80932),
    u = n(710845),
    d = n(430824),
    h = n(496675),
    p = n(914010),
    g = n(176354),
    m = n(598117),
    f = n(903759),
    v = n(746622),
    x = n(384694),
    b = n(273391),
    _ = n(981631),
    O = n(388032),
    j = n(139797);
let E = new u.Z('EmojiStudio'),
    N = (e) => {
        let { userImage: t, guildId: n } = e,
            [a, u] = l.useState(t),
            N = (0, s.e7)([d.Z, p.Z, h.Z], () => {
                let e = p.Z.getGuildId(),
                    t = d.Z.getGuild(e);
                return h.Z.can(_.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [I, C] = l.useState(null != n ? n : N),
            [y, S] = l.useState(null),
            [w, A] = l.useState(''),
            [k, M] = l.useState(null),
            [T, R] = l.useState(!1),
            P = l.useCallback(async () => {
                if ((S(null), null == I)) return void S(m.ze.MISSING_GUILD);
                if (null == a || (null == a ? void 0 : a.file) == null || null == k) return void S(m.ze.MISSING_IMAGE_DATA);
                try {
                    await (0, c.rS)({
                        image: k,
                        guildId: I,
                        name: w,
                        analyticsLocation: { page: _.ZY5.EMOJI_STUDIO }
                    });
                } catch (e) {
                    (S((0, v.z)(e)), E.error('Failed to upload emoji.', e));
                    return;
                }
                (0, o.Mr3)(m.Hj);
            }, [I, a, k, w]),
            L = l.useCallback((e) => {
                A(e.length < 2 ? e : g.ZP.sanitizeEmojiName(e));
            }, []),
            z = l.useCallback(() => {
                (S(null), u(null), M(null), A(''));
            }, []),
            Z = l.useRef(0),
            G = l.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: n = 0, error: r } = e,
                    l = null;
                (null != t && g.ZP.isDataTooBig(t) && (l = m.ze.TOO_BIG), S(null != r ? r : l), n < Z.current || (null != t && (M(t), (Z.current = n))));
            }, []),
            U = l.useCallback((e) => {
                var t;
                (u(e),
                    A((t) => {
                        var n, r;
                        if ('' !== t) return t;
                        let l = null != (r = null == e || null == (n = e.file) ? void 0 : n.name) ? r : '',
                            a = l.lastIndexOf('.'),
                            i = -1 === a ? l : l.substring(0, a);
                        return g.ZP.sanitizeEmojiName(i);
                    }),
                    M(null != (t = null == e ? void 0 : e.data) ? t : null));
            }, []);
        return (0, r.jsxs)('main', {
            className: i()(j.main, { [j.checkerboard]: null != a }),
            children: [
                (0, r.jsx)(o.X6q, {
                    variant: 'heading-lg/medium',
                    color: 'header-primary',
                    className: j.heading,
                    children: O.intl.string(O.t.iMJO39)
                }),
                null == a
                    ? (0, r.jsx)(f.u, { setImage: U })
                    : (0, r.jsx)('div', {
                          className: j.editor,
                          children: (0, r.jsx)(b.v, {
                              file: a.file,
                              imageUri: a.data,
                              onUpdate: G
                          })
                      }),
                (0, r.jsxs)('aside', {
                    className: j.aside,
                    children: [
                        (0, r.jsx)(o.xJW, {
                            title: O.intl.string(O.t.m0YV7O),
                            required: !0,
                            tag: 'label',
                            children: (0, r.jsx)(o.oil, {
                                error: T ? '' : void 0,
                                minLength: 2,
                                value: w,
                                onChange: L,
                                placeholder: O.intl.string(O.t.U2JFHR),
                                name: 'emoji_name',
                                onBlur: () => R(!1),
                                onFocus: () => R(!0),
                                required: !0
                            })
                        }),
                        (0, r.jsx)(o.xJW, {
                            title: O.intl.string(O.t['9uKafX']),
                            required: !0,
                            tag: 'label',
                            titleId: 'guild-selector-label',
                            children: (0, r.jsx)(x.q, {
                                onChange: C,
                                selected: I,
                                onError: () => S(m.ze.NO_PERMISSIONS),
                                labelledBy: 'guild-selector-label'
                            })
                        }),
                        null != a &&
                            (0, r.jsxs)('div', {
                                className: j.preview,
                                children: [
                                    (0, r.jsx)('label', { children: O.intl.string(O.t.JmuIb2) }),
                                    (0, r.jsxs)('ul', {
                                        children: [
                                            (0, r.jsx)('li', {
                                                children: (0, r.jsxs)('div', {
                                                    className: j.reactions,
                                                    children: [
                                                        (0, r.jsx)('img', {
                                                            src: null != k ? k : '',
                                                            alt: O.intl.string(O.t['zS0K+v'])
                                                        }),
                                                        (0, r.jsx)('span', { children: '8' })
                                                    ]
                                                })
                                            }),
                                            (0, r.jsx)('li', {
                                                children: (0, r.jsx)('div', {
                                                    className: j.jumbo,
                                                    children: (0, r.jsx)('img', {
                                                        src: null != k ? k : '',
                                                        alt: O.intl.string(O.t['tE41+f'])
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                        (0, r.jsxs)('div', {
                            className: j.foot,
                            children: [
                                null != y && (0, r.jsx)(v.H, { error: y }),
                                (0, r.jsx)(o.zxk, {
                                    className: j.submit,
                                    onClick: P,
                                    fullWidth: !0,
                                    disabled: null == a || null == I || w.length < 2,
                                    children: O.intl.string(O.t.DU0dy8)
                                })
                            ]
                        })
                    ]
                }),
                null != a
                    ? (0, r.jsx)(D, { back: z })
                    : (0, r.jsx)(o.olH, {
                          onClick: () => (0, o.Mr3)(m.Hj),
                          className: j.closeButton
                      })
            ]
        });
    },
    D = (e) => {
        let { back: t } = e;
        return (0, r.jsx)(o.zxk, {
            'aria-label': O.intl.string(O.t['13/7kZ']),
            onClick: t,
            look: o.zxk.Looks.BLANK,
            innerClassName: j.backButtonInnner,
            className: j.backButton,
            children: (0, r.jsx)(o.j9r, {
                color: 'currentColor',
                size: 'md'
            })
        });
    };
