r.d(t, { EmojiStudioModal: () => I }), r(388685);
var n = r(200651),
    l = r(192379),
    i = r(259443),
    o = r(442837),
    a = r(481060),
    s = r(80932),
    c = r(372129),
    u = r(430824),
    d = r(496675),
    b = r(914010),
    m = r(176354),
    f = r(746622),
    g = r(535455),
    p = r(981631),
    j = r(388032),
    h = r(807179);
let _ = new i.Yd('EmojiStudioModal'),
    O = (e) => {
        let { userImage: t, back: r } = e,
            { guilds: i, currentGuildId: o } = x(),
            [c, u] = l.useState(o),
            [d, b] = l.useState(null),
            [p, j] = l.useState(''),
            O = async () => {
                if ((b(null), null == c)) return void b(g.z.MISSING_GUILD);
                if (null == t || (null == t ? void 0 : t.file) == null || (null == t ? void 0 : t.data) == null) return void b(g.z.MISSING_IMAGE_DATA);
                try {
                    await (0, s.rS)({
                        image: t.data,
                        guildId: c,
                        name: p
                    });
                } catch (e) {
                    b((0, f.z)(e)), _.error('Failed to upload emoji.', e);
                    return;
                }
                (0, a.Mr3)(g.H);
            };
        return (0, n.jsxs)('main', {
            children: [
                (0, n.jsx)(a.X6q, {
                    variant: 'heading-lg/semibold',
                    className: h.heading,
                    children: 'Add Custom Emoji'
                }),
                (0, n.jsx)('div', {
                    className: h.editor,
                    children: (0, n.jsx)('img', {
                        src: t.data,
                        alt: 'Uploaded content'
                    })
                }),
                (0, n.jsxs)('footer', {
                    children: [
                        null != d && (0, n.jsx)(f.H, { error: d }),
                        (0, n.jsxs)('div', {
                            className: h.grid,
                            children: [
                                (0, n.jsxs)('div', {
                                    children: [
                                        (0, n.jsx)(a.oil, {
                                            placeholder: ':emoji:',
                                            onChange: (e) => {
                                                j(e.length < 2 ? e : m.ZP.sanitizeEmojiName(e));
                                            },
                                            value: p
                                        }),
                                        (0, n.jsx)(a.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-muted',
                                            children: 'Min. 2 characters (letters, numbers & underscores only).'
                                        })
                                    ]
                                }),
                                (0, n.jsx)(a.q4e, {
                                    options: i.map((e) => ({
                                        label: e.name,
                                        value: e.id
                                    })),
                                    value: c,
                                    onChange: (e) => u(e),
                                    className: h.select
                                }),
                                (0, n.jsx)(a.zxk, {
                                    className: h.submit,
                                    onClick: O,
                                    fullWidth: !0,
                                    disabled: null == t || null == c || p.length < 2,
                                    children: 'Upload'
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(N, { back: r })
            ]
        });
    },
    I = (e) => {
        let { transitionState: t, userImage: r } = e,
            [i, o] = l.useState(r),
            s = l.useCallback(() => o(null), [o]);
        return (0, n.jsx)(a.Y0X, {
            transitionState: t,
            size: a.CgR.MEDIUM,
            children: (0, n.jsxs)(a.hzk, {
                scrollbarType: 'none',
                className: h.modalContent,
                children: [
                    null == i
                        ? (0, n.jsx)(v, { setUserImage: o })
                        : (0, n.jsx)(O, {
                              userImage: i,
                              back: s
                          }),
                    (0, n.jsx)(a.olH, {
                        onClick: () => (0, a.Mr3)(g.H),
                        className: h.closeButton
                    })
                ]
            })
        });
    },
    x = () => ({
        guilds: (0, o.Wu)([u.Z, d.Z], () => Object.values(u.Z.getGuilds()).filter((e) => d.Z.can(p.Plq.CREATE_GUILD_EXPRESSIONS, e))),
        currentGuildId: (0, o.e7)([u.Z, b.Z, d.Z], () => {
            let e = b.Z.getGuildId(),
                t = u.Z.getGuild(e);
            return d.Z.can(p.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
        })
    }),
    v = (e) => {
        let { setUserImage: t } = e;
        return (0, n.jsxs)('div', {
            className: h.emptyState,
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
                    className: h.dropZone,
                    children: [
                        (0, n.jsx)(a.dZu, {
                            size: 'lg',
                            color: a.TVs.colors.HEADER_MUTED
                        }),
                        (0, n.jsxs)(a.Text, {
                            variant: 'text-md/medium',
                            children: ['Drag & drop or ', (0, n.jsx)(E, { setUserImage: t })]
                        })
                    ]
                })
            ]
        });
    },
    E = (e) => {
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
    N = (e) => {
        let { back: t } = e;
        return (0, n.jsxs)(a.zxk, {
            'aria-label': j.intl.string(j.t['13/7kZ']),
            onClick: t,
            look: a.zxk.Looks.BLANK,
            size: a.zxk.Sizes.MIN,
            innerClassName: h.backButtonInnner,
            className: h.backButton,
            children: [
                (0, n.jsx)(a.j9r, {
                    color: 'currentColor',
                    size: 'xs'
                }),
                'Back'
            ]
        });
    };
