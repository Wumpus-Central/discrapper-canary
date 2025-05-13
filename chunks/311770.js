r.d(t, { EmojiStudioModal: () => x }), r(388685);
var n = r(255367),
    i = r(73800),
    l = r(442837),
    a = r(481060),
    o = r(80932),
    s = r(710845),
    c = r(372129),
    u = r(430824),
    d = r(496675),
    h = r(914010),
    g = r(176354),
    m = r(598117),
    f = r(746622),
    b = r(273391),
    p = r(981631),
    O = r(388032),
    y = r(807179);
let j = new s.Z('EmojiStudioModal'),
    w = (e) => {
        let { userImage: t, guildId: r, back: l } = e,
            { guilds: s, currentGuildId: c } = _(),
            [u, d] = i.useState(null != r ? r : c),
            [h, p] = i.useState(null),
            [O, w] = i.useState(''),
            [x, E] = i.useState(null),
            [v, N] = i.useState(!1),
            C = async () => {
                if ((p(null), null == u)) return void p(m.ze.MISSING_GUILD);
                if (null == t || (null == t ? void 0 : t.file) == null || null == x) return void p(m.ze.MISSING_IMAGE_DATA);
                try {
                    await (0, o.rS)({
                        image: x,
                        guildId: u,
                        name: O
                    });
                } catch (e) {
                    p((0, f.z)(e)), j.error('Failed to upload emoji.', e);
                    return;
                }
                (0, a.Mr3)(m.Hj);
            },
            S = i.useRef(0),
            A = i.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: r = 0, error: n, loading: i } = e,
                    l = null;
                null != t && g.ZP.isDataTooBig(t) && (l = m.ze.TOO_BIG), p(null != n ? n : l), N(i), r < S.current || (null != t && (E(t), (S.current = r)));
            }, []);
        return (0, n.jsxs)('main', {
            children: [
                (0, n.jsx)(a.X6q, {
                    variant: 'heading-lg/semibold',
                    className: y.heading,
                    children: 'Add Custom Emoji'
                }),
                (0, n.jsx)('div', {
                    className: y.editor,
                    children: (0, n.jsx)(b.v, {
                        file: t.file,
                        imageUri: t.data,
                        onUpdate: A
                    })
                }),
                (0, n.jsxs)('footer', {
                    children: [
                        null != h && (0, n.jsx)(f.H, { error: h }),
                        (0, n.jsxs)('div', {
                            className: y.grid,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: y.preview,
                                    children: [
                                        (0, n.jsx)('img', {
                                            src: null != x ? x : '',
                                            alt: 'Edited',
                                            className: v ? y.loading : ''
                                        }),
                                        (0, n.jsxs)('div', {
                                            children: [
                                                (0, n.jsx)(a.oil, {
                                                    placeholder: ':emoji:',
                                                    onChange: (e) => {
                                                        w(e.length < 2 ? e : g.ZP.sanitizeEmojiName(e));
                                                    },
                                                    value: O
                                                }),
                                                (0, n.jsx)(a.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-muted',
                                                    className: y.inputNote,
                                                    children: 'Min. 2 characters (letters, numbers & underscores only).'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, n.jsx)(a.q4e, {
                                    options: s.map((e) => ({
                                        label: e.name,
                                        value: e.id
                                    })),
                                    value: u,
                                    onChange: (e) => d(e),
                                    className: y.select
                                }),
                                (0, n.jsx)(a.zxk, {
                                    className: y.submit,
                                    onClick: C,
                                    fullWidth: !0,
                                    disabled: null == t || null == u || O.length < 2,
                                    children: 'Upload'
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(I, { back: l })
            ]
        });
    },
    x = (e) => {
        let { transitionState: t, userImage: r, guildId: l } = e,
            [o, s] = i.useState(r),
            c = i.useCallback(() => s(null), [s]);
        return (0, n.jsx)(a.Y0X, {
            transitionState: t,
            size: a.CgR.MEDIUM,
            children: (0, n.jsxs)(a.hzk, {
                scrollbarType: 'none',
                className: y.modalContent,
                children: [
                    null == o
                        ? (0, n.jsx)(E, { setUserImage: s })
                        : (0, n.jsx)(w, {
                              userImage: o,
                              guildId: l,
                              back: c
                          }),
                    (0, n.jsx)(a.olH, {
                        onClick: () => (0, a.Mr3)(m.Hj),
                        className: y.closeButton
                    })
                ]
            })
        });
    },
    _ = () => ({
        guilds: (0, l.Wu)([u.Z, d.Z], () => Object.values(u.Z.getGuilds()).filter((e) => d.Z.can(p.Plq.CREATE_GUILD_EXPRESSIONS, e))),
        currentGuildId: (0, l.e7)([u.Z, h.Z, d.Z], () => {
            let e = h.Z.getGuildId(),
                t = u.Z.getGuild(e);
            return d.Z.can(p.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
        })
    }),
    E = (e) => {
        let { setUserImage: t } = e;
        return (0, n.jsxs)('div', {
            className: y.emptyState,
            children: [
                (0, n.jsxs)('header', {
                    children: [
                        (0, n.jsx)(a.X6q, {
                            variant: 'heading-lg/medium',
                            color: 'header-primary',
                            children: 'Add Emoji'
                        }),
                        (0, n.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-muted',
                            children: "Select an image or GIF. You'll be able to edit & preview."
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: y.dropZone,
                    children: [
                        (0, n.jsx)(a.dZu, {
                            size: 'lg',
                            color: a.TVs.colors.HEADER_MUTED
                        }),
                        (0, n.jsxs)(a.Text, {
                            variant: 'text-md/medium',
                            children: ['Drag & drop or ', (0, n.jsx)(v, { setUserImage: t })]
                        })
                    ]
                })
            ]
        });
    },
    v = (e) => {
        let { setUserImage: t } = e;
        return (0, n.jsxs)(a.P3F, {
            focusProps: { within: !0 },
            tag: 'a',
            children: [
                'Select an image',
                (0, n.jsx)(c.Z, {
                    tabIndex: 0,
                    onChange: (e, r, n) => (
                        t({
                            data: e,
                            file: r,
                            image: n
                        }),
                        Promise.resolve(void 0)
                    )
                })
            ]
        });
    },
    I = (e) => {
        let { back: t } = e;
        return (0, n.jsxs)(a.zxk, {
            'aria-label': O.intl.string(O.t['13/7kZ']),
            onClick: t,
            look: a.zxk.Looks.BLANK,
            size: a.zxk.Sizes.MIN,
            innerClassName: y.backButtonInnner,
            className: y.backButton,
            children: [
                (0, n.jsx)(a.j9r, {
                    color: 'currentColor',
                    size: 'xs'
                }),
                'Back'
            ]
        });
    };
