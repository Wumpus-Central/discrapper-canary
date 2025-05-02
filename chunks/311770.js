n.d(l, { EmojiStudioModal: () => _ }), n(388685);
var r = n(200651),
    t = n(192379),
    a = n(772848),
    s = n(442837),
    i = n(481060),
    o = n(730089),
    d = n(372129),
    u = n(430824),
    c = n(496675),
    m = n(914010),
    x = n(176354),
    h = n(841776),
    b = n(535455),
    j = n(981631),
    g = n(388032),
    p = n(807179);
let v = (e) => {
        let { userImage: l, back: n } = e,
            { guilds: s, currentGuildId: d } = k(),
            [u, c] = t.useState(d),
            [m, j] = t.useState(null),
            [g, v] = t.useState(null),
            [_, I] = t.useState(''),
            f = async () => {
                if ((j(null), v(null), null == u)) return void j('Please select a server for the emoji.');
                if (null == l || (null == l ? void 0 : l.data) == null || (null == l ? void 0 : l.file) == null || (null == l ? void 0 : l.image) == null) return void j('Missing image data');
                let { data: e, file: n, image: r } = l;
                try {
                    let l = await (0, o.G)({
                        data: e,
                        file: n,
                        image: r,
                        guildId: u,
                        uploadId: (0, a.Z)(),
                        hideErrorModal: !1
                    });
                    if (l) return void v(l);
                } catch (e) {
                    var t;
                    j(null != (t = null == e ? void 0 : e.message) ? t : 'Failed to upload');
                    return;
                }
                (0, i.Mr3)(b.H);
            };
        return (0, r.jsxs)('main', {
            children: [
                (0, r.jsx)(i.X6q, {
                    variant: 'heading-lg/semibold',
                    className: p.heading,
                    children: 'Add Custom Emoji'
                }),
                (0, r.jsx)('div', {
                    className: p.editor,
                    children: (0, r.jsx)('img', {
                        src: l.data,
                        alt: 'Uploaded content'
                    })
                }),
                (0, r.jsxs)('footer', {
                    children: [
                        (0, r.jsx)(h.H, {
                            error: m,
                            uploadErrorCode: g
                        }),
                        (0, r.jsxs)('div', {
                            className: p.grid,
                            children: [
                                (0, r.jsxs)('div', {
                                    children: [
                                        (0, r.jsx)(i.oil, {
                                            placeholder: ':emoji:',
                                            onChange: (e) => {
                                                I(e.length < 2 ? e : x.ZP.sanitizeEmojiName(e));
                                            },
                                            value: _
                                        }),
                                        (0, r.jsx)(i.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-muted',
                                            children: 'Min. 2 characters (letters, numbers & underscores only).'
                                        })
                                    ]
                                }),
                                (0, r.jsx)(i.q4e, {
                                    options: s.map((e) => ({
                                        label: e.name,
                                        value: e.id
                                    })),
                                    value: u,
                                    onChange: (e) => c(e),
                                    className: p.select
                                }),
                                (0, r.jsx)(i.zxk, {
                                    className: p.submit,
                                    onClick: f,
                                    fullWidth: !0,
                                    disabled: null == l || null == u || _.length < 2,
                                    children: 'Upload'
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(E, { back: n })
            ]
        });
    },
    _ = (e) => {
        let { transitionState: l, userImage: n } = e,
            [a, s] = t.useState(n),
            o = t.useCallback(() => s(null), [s]);
        return (0, r.jsx)(i.Y0X, {
            transitionState: l,
            size: i.CgR.MEDIUM,
            children: (0, r.jsxs)(i.hzk, {
                scrollbarType: 'none',
                className: p.modalContent,
                children: [
                    null == a
                        ? (0, r.jsx)(I, { setUserImage: s })
                        : (0, r.jsx)(v, {
                              userImage: a,
                              back: o
                          }),
                    (0, r.jsx)(i.olH, {
                        onClick: () => (0, i.Mr3)(b.H),
                        className: p.closeButton
                    })
                ]
            })
        });
    },
    k = () => ({
        guilds: (0, s.Wu)([u.Z, c.Z], () => Object.values(u.Z.getGuilds()).filter((e) => c.Z.can(j.Plq.CREATE_GUILD_EXPRESSIONS, e))),
        currentGuildId: (0, s.e7)([u.Z, m.Z, c.Z], () => {
            let e = m.Z.getGuildId(),
                l = u.Z.getGuild(e);
            return c.Z.can(j.Plq.CREATE_GUILD_EXPRESSIONS, l) && null != l ? l.id : null;
        })
    }),
    I = (e) => {
        let { setUserImage: l } = e;
        return (0, r.jsxs)('div', {
            className: p.emptyState,
            children: [
                (0, r.jsxs)('header', {
                    children: [
                        (0, r.jsx)(i.X6q, {
                            variant: 'heading-lg/medium',
                            color: 'header-primary',
                            children: 'Add Emoji'
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-muted',
                            children: "Select an image or GIF. You'll be able to edit & preview."
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: p.dropZone,
                    children: [
                        (0, r.jsx)(i.dZu, {
                            size: 'lg',
                            color: i.TVs.colors.HEADER_MUTED
                        }),
                        (0, r.jsxs)(i.Text, {
                            variant: 'text-md/medium',
                            children: ['Drag & drop or ', (0, r.jsx)(f, { setUserImage: l })]
                        })
                    ]
                })
            ]
        });
    },
    f = (e) => {
        let { setUserImage: l } = e;
        return (0, r.jsxs)(i.P3F, {
            focusProps: { within: !0 },
            tag: 'a',
            children: [
                'Select an image',
                (0, r.jsx)(d.Z, {
                    tabIndex: 0,
                    onChange: (e, n, r) => (
                        l({
                            data: e,
                            file: n,
                            image: r
                        }),
                        Promise.resolve(void 0)
                    )
                })
            ]
        });
    },
    E = (e) => {
        let { back: l } = e;
        return (0, r.jsxs)(i.zxk, {
            'aria-label': g.intl.string(g.t['13/7kZ']),
            onClick: l,
            look: i.zxk.Looks.BLANK,
            size: i.zxk.Sizes.MIN,
            innerClassName: p.backButtonInnner,
            className: p.backButton,
            children: [
                (0, r.jsx)(i.j9r, {
                    color: 'currentColor',
                    size: 'xs'
                }),
                'Back'
            ]
        });
    };
