n.d(t, { I: () => j }), n(388685);
var r = n(255367),
    a = n(73800),
    l = n(442837),
    s = n(481060),
    i = n(80932),
    o = n(710845),
    c = n(430824),
    u = n(496675),
    d = n(914010),
    p = n(176354),
    h = n(598117),
    g = n(746622),
    m = n(384694),
    f = n(273391),
    v = n(793972),
    b = n(981631),
    x = n(388032),
    _ = n(139797);
let O = new o.Z('EmojiStudio'),
    j = (e) => {
        let { userImage: t, guildId: n, back: o } = e,
            j = (0, l.e7)([c.Z, d.Z, u.Z], () => {
                let e = d.Z.getGuildId(),
                    t = c.Z.getGuild(e);
                return u.Z.can(b.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [N, I] = a.useState(null != n ? n : j),
            [D, S] = a.useState(null),
            [y, C] = a.useState(''),
            [w, A] = a.useState(null),
            M = async () => {
                if ((S(null), null == N)) return void S(h.ze.MISSING_GUILD);
                if (null == t || (null == t ? void 0 : t.file) == null || null == w) return void S(h.ze.MISSING_IMAGE_DATA);
                try {
                    await (0, i.rS)({
                        image: w,
                        guildId: N,
                        name: y,
                        analyticsLocation: { page: b.ZY5.EMOJI_STUDIO }
                    });
                } catch (e) {
                    S((0, g.z)(e)), O.error('Failed to upload emoji.', e);
                    return;
                }
                (0, s.Mr3)(h.Hj);
            },
            k = a.useRef(0),
            R = a.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: n = 0, error: r } = e,
                    a = null;
                null != t && p.ZP.isDataTooBig(t) && (a = h.ze.TOO_BIG), S(null != r ? r : a), n < k.current || (null != t && (A(t), (k.current = n)));
            }, []);
        return (0, r.jsxs)('main', {
            className: _.main,
            children: [
                (0, r.jsx)(s.X6q, {
                    variant: 'heading-lg/semibold',
                    className: _.heading,
                    children: 'Add Custom Emoji'
                }),
                (0, r.jsx)('div', {
                    className: _.editor,
                    children: (0, r.jsx)(f.v, {
                        file: t.file,
                        imageUri: t.data,
                        onUpdate: R
                    })
                }),
                (0, r.jsxs)('footer', {
                    className: _.footer,
                    children: [
                        null != D && (0, r.jsx)(g.H, { error: D }),
                        (0, r.jsxs)('div', {
                            className: _.grid,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: _.preview,
                                    children: [
                                        (0, r.jsx)('img', {
                                            src: null != w ? w : '',
                                            alt: 'Edited'
                                        }),
                                        (0, r.jsx)(v.R, {
                                            onChange: (e) => {
                                                C(e.length < 2 ? e : p.ZP.sanitizeEmojiName(e));
                                            },
                                            value: y
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', {
                                    className: _.selector,
                                    children: (0, r.jsx)(m.q, {
                                        onChange: I,
                                        selected: N,
                                        onError: () => S(h.ze.NO_PERMISSIONS)
                                    })
                                }),
                                (0, r.jsx)(s.zxk, {
                                    className: _.submit,
                                    onClick: M,
                                    fullWidth: !0,
                                    disabled: null == t || null == N || y.length < 2,
                                    children: x.intl.string(x.t.DU0dy8)
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(E, { back: o })
            ]
        });
    },
    E = (e) => {
        let { back: t } = e;
        return (0, r.jsx)(s.zxk, {
            'aria-label': x.intl.string(x.t['13/7kZ']),
            onClick: t,
            look: s.zxk.Looks.BLANK,
            innerClassName: _.backButtonInnner,
            className: _.backButton,
            children: (0, r.jsx)(s.j9r, {
                color: 'currentColor',
                size: 'md'
            })
        });
    };
