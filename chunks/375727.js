(n.d(t, { I: () => I }), n(388685));
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
    f = n(390620),
    v = n(903759),
    x = n(746622),
    b = n(384694),
    _ = n(273391),
    j = n(981631),
    O = n(388032),
    N = n(139797);
let E = new u.Z('EmojiStudio'),
    I = (e) => {
        let { userImage: t, guildId: n } = e,
            [a, u] = l.useState(t),
            I = (0, s.e7)([d.Z, p.Z, h.Z], () => {
                let e = p.Z.getGuildId(),
                    t = d.Z.getGuild(e);
                return h.Z.can(j.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [y, S] = l.useState(null != n ? n : I),
            [w, T] = l.useState(null),
            [A, M] = l.useState(''),
            [k, P] = l.useState(null),
            [R, L] = l.useState(!1),
            z = l.useCallback(async () => {
                if ((T(null), null == y)) return void T(m.ze.MISSING_GUILD);
                if (null == a || (null == a ? void 0 : a.file) == null || null == k) return void T(m.ze.MISSING_IMAGE_DATA);
                let e = null;
                try {
                    e = await (0, c.rS)({
                        image: k,
                        guildId: y,
                        name: A,
                        analyticsLocation: { page: j.ZY5.EMOJI_STUDIO }
                    });
                } catch (e) {
                    (T((0, x.z)(e)), E.error('Failed to upload emoji.', e));
                    return;
                }
                ((0, o.Mr3)(m.Hj),
                    (0, f.y)({
                        emoji: e,
                        guildId: y
                    }));
            }, [y, a, k, A]),
            Z = l.useCallback((e) => {
                M(e.length < 2 ? e : g.ZP.sanitizeEmojiName(e));
            }, []),
            G = l.useCallback(() => {
                (T(null), u(null), P(null), M(''));
            }, []),
            U = l.useRef(0),
            W = l.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: n = 0, error: r } = e,
                    l = null;
                (null != t && g.ZP.isDataTooBig(t) && (l = m.ze.TOO_BIG), T(null != r ? r : l), n < U.current || (null != t && (P(t), (U.current = n))));
            }, []),
            B = l.useCallback((e) => {
                var t;
                (u(e),
                    M((t) => {
                        var n, r;
                        if ('' !== t) return t;
                        let l = null != (r = null == e || null == (n = e.file) ? void 0 : n.name) ? r : '',
                            a = l.lastIndexOf('.'),
                            i = -1 === a ? l : l.substring(0, a);
                        return g.ZP.sanitizeEmojiName(i);
                    }),
                    P(null != (t = null == e ? void 0 : e.data) ? t : null));
            }, []);
        return (0, r.jsxs)('main', {
            className: i()(N.main, { [N.checkerboard]: null != a }),
            children: [
                (0, r.jsx)(o.X6q, {
                    variant: 'heading-lg/medium',
                    color: 'header-primary',
                    className: N.heading,
                    children: O.intl.string(O.t.iMJO39)
                }),
                null == a
                    ? (0, r.jsx)(v.u, { setImage: B })
                    : (0, r.jsx)('div', {
                          className: N.editor,
                          children: (0, r.jsx)(_.v, {
                              file: a.file,
                              imageUri: a.data,
                              onUpdate: W
                          })
                      }),
                (0, r.jsxs)('aside', {
                    className: N.aside,
                    children: [
                        (0, r.jsx)(o.xJW, {
                            title: O.intl.string(O.t.m0YV7O),
                            required: !0,
                            tag: 'label',
                            children: (0, r.jsx)(o.oil, {
                                error: R ? '' : void 0,
                                minLength: 2,
                                value: A,
                                onChange: Z,
                                placeholder: O.intl.string(O.t.U2JFHR),
                                name: 'emoji_name',
                                onBlur: () => L(!1),
                                onFocus: () => L(!0),
                                required: !0
                            })
                        }),
                        (0, r.jsx)(o.xJW, {
                            title: O.intl.string(O.t['9uKafX']),
                            required: !0,
                            tag: 'label',
                            titleId: 'guild-selector-label',
                            children: (0, r.jsxs)('div', {
                                className: N.guildSelectorContainer,
                                children: [
                                    (0, r.jsx)(b.q, {
                                        onChange: S,
                                        selected: y,
                                        onError: () => T(m.ze.NO_PERMISSIONS),
                                        labelledBy: 'guild-selector-label'
                                    }),
                                    w === m.ze.NO_PERMISSIONS &&
                                        (0, r.jsx)(x.H, {
                                            error: w,
                                            color: 'text-tertiary'
                                        })
                                ]
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: N.preview,
                            children: [
                                (0, r.jsx)('label', { children: O.intl.string(O.t.JmuIb2) }),
                                (0, r.jsxs)('ul', {
                                    children: [
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsxs)('div', {
                                                className: N.reactions,
                                                children: [
                                                    (0, r.jsx)(C, {
                                                        src: k,
                                                        alt: O.intl.string(O.t['zS0K+v'])
                                                    }),
                                                    (0, r.jsx)('span', { children: '8' })
                                                ]
                                            })
                                        }),
                                        (0, r.jsx)('li', {
                                            children: (0, r.jsx)('div', {
                                                className: N.jumbo,
                                                children: (0, r.jsx)(C, {
                                                    src: k,
                                                    alt: O.intl.string(O.t['tE41+f'])
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: N.foot,
                            children: [
                                null != w && w !== m.ze.NO_PERMISSIONS && (0, r.jsx)(x.H, { error: w }),
                                (0, r.jsx)(o.zxk, {
                                    className: N.submit,
                                    onClick: z,
                                    fullWidth: !0,
                                    disabled: null == a || null == y || A.length < 2,
                                    children: O.intl.string(O.t.DU0dy8)
                                })
                            ]
                        })
                    ]
                }),
                null != a
                    ? (0, r.jsx)(D, { back: G })
                    : (0, r.jsx)(o.olH, {
                          onClick: () => (0, o.Mr3)(m.Hj),
                          className: N.closeButton
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
            innerClassName: N.backButtonInnner,
            className: N.backButton,
            children: (0, r.jsx)(o.j9r, {
                color: 'currentColor',
                size: 'md'
            })
        });
    },
    C = (e) => {
        let { src: t, alt: n } = e;
        return null == t || '' === t
            ? (0, r.jsx)('div', { className: N.previewPlaceholder })
            : (0, r.jsx)('img', {
                  src: t,
                  alt: n
              });
    };
