r.d(t, { I: () => j }), r(388685);
var n = r(255367),
    a = r(73800),
    l = r(442837),
    s = r(481060),
    i = r(80932),
    o = r(710845),
    c = r(430824),
    u = r(496675),
    d = r(914010),
    p = r(176354),
    h = r(598117),
    g = r(746622),
    m = r(384694),
    f = r(273391),
    v = r(793972),
    b = r(981631),
    x = r(388032),
    _ = r(139797);
let O = new o.Z('EmojiStudio'),
    j = (e) => {
        let { userImage: t, guildId: r, back: o } = e,
            j = (0, l.e7)([c.Z, d.Z, u.Z], () => {
                let e = d.Z.getGuildId(),
                    t = c.Z.getGuild(e);
                return u.Z.can(b.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [N, I] = a.useState(null != r ? r : j),
            [D, S] = a.useState(null),
            [y, C] = a.useState(''),
            [w, A] = a.useState(null),
            k = async () => {
                if ((S(null), null == N)) return void S(h.ze.MISSING_GUILD);
                if (null == t || (null == t ? void 0 : t.file) == null || null == w) return void S(h.ze.MISSING_IMAGE_DATA);
                try {
                    await (0, i.rS)({
                        image: w,
                        guildId: N,
                        name: y
                    });
                } catch (e) {
                    S((0, g.z)(e)), O.error('Failed to upload emoji.', e);
                    return;
                }
                (0, s.Mr3)(h.Hj);
            },
            M = a.useRef(0),
            R = a.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: r = 0, error: n } = e,
                    a = null;
                null != t && p.ZP.isDataTooBig(t) && (a = h.ze.TOO_BIG), S(null != n ? n : a), r < M.current || (null != t && (A(t), (M.current = r)));
            }, []);
        return (0, n.jsxs)('main', {
            className: _.main,
            children: [
                (0, n.jsx)(s.X6q, {
                    variant: 'heading-lg/semibold',
                    className: _.heading,
                    children: 'Add Custom Emoji'
                }),
                (0, n.jsx)('div', {
                    className: _.editor,
                    children: (0, n.jsx)(f.v, {
                        file: t.file,
                        imageUri: t.data,
                        onUpdate: R
                    })
                }),
                (0, n.jsxs)('footer', {
                    className: _.footer,
                    children: [
                        null != D && (0, n.jsx)(g.H, { error: D }),
                        (0, n.jsxs)('div', {
                            className: _.grid,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: _.preview,
                                    children: [
                                        (0, n.jsx)('img', {
                                            src: null != w ? w : '',
                                            alt: 'Edited'
                                        }),
                                        (0, n.jsx)(v.R, {
                                            onChange: (e) => {
                                                C(e.length < 2 ? e : p.ZP.sanitizeEmojiName(e));
                                            },
                                            value: y
                                        })
                                    ]
                                }),
                                (0, n.jsx)('div', {
                                    className: _.selector,
                                    children: (0, n.jsx)(m.q, {
                                        onChange: I,
                                        selected: N,
                                        onError: () => S(h.ze.NO_PERMISSIONS)
                                    })
                                }),
                                (0, n.jsx)(s.zxk, {
                                    className: _.submit,
                                    onClick: k,
                                    fullWidth: !0,
                                    disabled: null == t || null == N || y.length < 2,
                                    children: x.intl.string(x.t.DU0dy8)
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(E, { back: o })
            ]
        });
    },
    E = (e) => {
        let { back: t } = e;
        return (0, n.jsx)(s.zxk, {
            'aria-label': x.intl.string(x.t['13/7kZ']),
            onClick: t,
            look: s.zxk.Looks.BLANK,
            innerClassName: _.backButtonInnner,
            className: _.backButton,
            children: (0, n.jsx)(s.j9r, {
                color: 'currentColor',
                size: 'md'
            })
        });
    };
