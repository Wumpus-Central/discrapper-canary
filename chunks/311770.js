r.d(t, { EmojiStudioModal: () => E }), r(388685);
var n = r(255367),
    a = r(73800),
    l = r(442837),
    i = r(481060),
    s = r(80932),
    o = r(710845),
    c = r(430824),
    u = r(496675),
    d = r(914010),
    p = r(176354),
    g = r(598117),
    h = r(903759),
    m = r(746622),
    f = r(384694),
    b = r(273391),
    v = r(981631),
    x = r(388032),
    _ = r(807179);
let O = new o.Z('EmojiStudioModal'),
    j = (e) => {
        let { userImage: t, guildId: r, back: o } = e,
            h = (0, l.e7)([c.Z, d.Z, u.Z], () => {
                let e = d.Z.getGuildId(),
                    t = c.Z.getGuild(e);
                return u.Z.can(v.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [j, E] = a.useState(null != r ? r : h),
            [N, I] = a.useState(null),
            [y, C] = a.useState(''),
            [S, w] = a.useState(null),
            [A, k] = a.useState(!1),
            M = async () => {
                if ((I(null), null == j)) return void I(g.ze.MISSING_GUILD);
                if (null == t || (null == t ? void 0 : t.file) == null || null == S) return void I(g.ze.MISSING_IMAGE_DATA);
                try {
                    await (0, s.rS)({
                        image: S,
                        guildId: j,
                        name: y
                    });
                } catch (e) {
                    I((0, m.z)(e)), O.error('Failed to upload emoji.', e);
                    return;
                }
                (0, i.Mr3)(g.Hj);
            },
            L = a.useRef(0),
            T = a.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: r = 0, error: n, loading: a } = e,
                    l = null;
                null != t && p.ZP.isDataTooBig(t) && (l = g.ze.TOO_BIG), I(null != n ? n : l), k(a), r < L.current || (null != t && (w(t), (L.current = r)));
            }, []);
        return (0, n.jsxs)('main', {
            children: [
                (0, n.jsx)(i.X6q, {
                    variant: 'heading-lg/semibold',
                    className: _.heading,
                    children: 'Add Custom Emoji'
                }),
                (0, n.jsx)('div', {
                    className: _.editor,
                    children: (0, n.jsx)(b.v, {
                        file: t.file,
                        imageUri: t.data,
                        onUpdate: T
                    })
                }),
                (0, n.jsxs)('footer', {
                    children: [
                        null != N && (0, n.jsx)(m.H, { error: N }),
                        (0, n.jsxs)('div', {
                            className: _.grid,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: _.preview,
                                    children: [
                                        (0, n.jsx)('img', {
                                            src: null != S ? S : '',
                                            alt: 'Edited',
                                            className: A ? _.loading : ''
                                        }),
                                        (0, n.jsxs)('div', {
                                            children: [
                                                (0, n.jsx)(i.oil, {
                                                    placeholder: ':emoji:',
                                                    onChange: (e) => {
                                                        C(e.length < 2 ? e : p.ZP.sanitizeEmojiName(e));
                                                    },
                                                    value: y
                                                }),
                                                (0, n.jsx)(i.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-muted',
                                                    className: _.inputNote,
                                                    children: 'Min. 2 characters (letters, numbers & underscores only).'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, n.jsx)(f.q, {
                                    onChange: E,
                                    selected: j
                                }),
                                (0, n.jsx)(i.zxk, {
                                    className: _.submit,
                                    onClick: M,
                                    fullWidth: !0,
                                    disabled: null == t || null == j || y.length < 2,
                                    children: x.intl.string(x.t.DU0dy8)
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(D, { back: o })
            ]
        });
    },
    E = (e) => {
        let { transitionState: t, userImage: r, guildId: l } = e,
            [s, o] = a.useState(r),
            c = a.useCallback(() => o(null), [o]),
            u = null == s ? i.CgR.MEDIUM : i.CgR.LARGE;
        return (0, n.jsx)(i.Y0X, {
            transitionState: t,
            size: u,
            children: (0, n.jsxs)(i.hzk, {
                scrollbarType: 'none',
                className: _.modalContent,
                children: [
                    null == s
                        ? (0, n.jsx)(h.u, { setUserImage: o })
                        : (0, n.jsx)(j, {
                              userImage: s,
                              guildId: l,
                              back: c
                          }),
                    (0, n.jsx)(i.olH, {
                        onClick: () => (0, i.Mr3)(g.Hj),
                        className: _.closeButton
                    })
                ]
            })
        });
    },
    D = (e) => {
        let { back: t } = e;
        return (0, n.jsxs)(i.zxk, {
            'aria-label': x.intl.string(x.t['13/7kZ']),
            onClick: t,
            look: i.zxk.Looks.BLANK,
            size: i.zxk.Sizes.MIN,
            innerClassName: _.backButtonInnner,
            className: _.backButton,
            children: [
                (0, n.jsx)(i.j9r, {
                    color: 'currentColor',
                    size: 'xs'
                }),
                'Back'
            ]
        });
    };
