n.d(l, { EmojiStudioModal: () => b }), n(388685);
var t = n(200651),
    r = n(192379),
    a = n(772848),
    o = n(442837),
    i = n(481060),
    s = n(730089),
    d = n(372129),
    u = n(430824),
    c = n(496675),
    m = n(914010),
    h = n(841776),
    x = n(535455),
    j = n(981631),
    p = n(388032),
    g = n(807179);
let v = (e) => {
        let { userImage: l } = e,
            { guilds: n, currentGuildId: o } = f(),
            [d, u] = r.useState(o),
            [c, m] = r.useState(null),
            [x, j] = r.useState(null),
            v = async () => {
                if ((m(null), j(null), null == d)) return void m('Please select a server for the emoji.');
                if (null == l || (null == l ? void 0 : l.data) == null || (null == l ? void 0 : l.file) == null || (null == l ? void 0 : l.image) == null) return void m('Missing image data');
                let { data: e, file: n, image: t } = l;
                try {
                    let l = await (0, s.G)({
                        data: e,
                        file: n,
                        image: t,
                        guildId: d,
                        uploadId: (0, a.Z)(),
                        hideErrorModal: !1
                    });
                    if (l) return void j(l);
                } catch (e) {
                    var r;
                    m(null != (r = null == e ? void 0 : e.message) ? r : 'Failed to upload');
                    return;
                }
                E();
            };
        return (0, t.jsxs)('main', {
            children: [
                (0, t.jsx)('div', {
                    className: g.left,
                    children: (0, t.jsx)('img', {
                        src: l.data,
                        alt: 'Uploaded content'
                    })
                }),
                (0, t.jsxs)('div', {
                    className: g.right,
                    children: [
                        (0, t.jsx)(i.X6q, {
                            variant: 'heading-lg/bold',
                            children: p.intl.string(p.t.DU0dy8)
                        }),
                        (0, t.jsxs)('div', {
                            className: g.uploadContainer,
                            children: [
                                (0, t.jsx)(h.H, {
                                    error: c,
                                    uploadErrorCode: x
                                }),
                                (0, t.jsx)(i.q4e, {
                                    options: n.map((e) => ({
                                        label: e.name,
                                        value: e.id
                                    })),
                                    value: d,
                                    onChange: (e) => u(e)
                                }),
                                (0, t.jsx)(i.zxk, {
                                    onClick: v,
                                    fullWidth: !0,
                                    disabled: null == l || null == d,
                                    children: 'Upload'
                                })
                            ]
                        }),
                        (0, t.jsx)(i.olH, {
                            onClick: E,
                            className: g.closeButton
                        })
                    ]
                })
            ]
        });
    },
    b = (e) => {
        let { transitionState: l, userImage: n } = e,
            [a, o] = r.useState(n),
            s = null == a ? i.CgR.MEDIUM : i.CgR.LARGE;
        return (0, t.jsx)(i.Y0X, {
            transitionState: l,
            size: s,
            className: g.modalRoot,
            children: (0, t.jsx)(i.hzk, {
                scrollbarType: 'none',
                className: g.modalContent,
                children: null == a ? (0, t.jsx)(_, { setUserImage: o }) : (0, t.jsx)(v, { userImage: a })
            })
        });
    },
    f = () => ({
        guilds: (0, o.Wu)([u.Z, c.Z], () => Object.values(u.Z.getGuilds()).filter((e) => c.Z.can(j.Plq.CREATE_GUILD_EXPRESSIONS, e))),
        currentGuildId: (0, o.e7)([u.Z, m.Z, c.Z], () => {
            let e = m.Z.getGuildId(),
                l = u.Z.getGuild(e);
            return c.Z.can(j.Plq.CREATE_GUILD_EXPRESSIONS, l) && null != l ? l.id : null;
        })
    }),
    _ = (e) => {
        let { setUserImage: l } = e;
        return (0, t.jsxs)('div', {
            className: g.emptyState,
            children: [
                (0, t.jsxs)('header', {
                    children: [
                        (0, t.jsx)(i.X6q, {
                            variant: 'heading-lg/medium',
                            color: 'header-primary',
                            children: 'Add Emoji'
                        }),
                        (0, t.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-muted',
                            children: "Select an image or GIF. You'll be able to edit & preview."
                        })
                    ]
                }),
                (0, t.jsxs)('div', {
                    className: g.dropZone,
                    children: [
                        (0, t.jsx)(i.dZu, {
                            size: 'lg',
                            color: i.TVs.colors.HEADER_MUTED
                        }),
                        (0, t.jsxs)(i.Text, {
                            variant: 'text-md/medium',
                            children: ['Drag & drop or ', (0, t.jsx)(I, { setUserImage: l })]
                        })
                    ]
                }),
                (0, t.jsx)(i.olH, {
                    onClick: E,
                    className: g.closeButton
                })
            ]
        });
    },
    I = (e) => {
        let { setUserImage: l } = e;
        return (0, t.jsxs)(i.P3F, {
            focusProps: { within: !0 },
            tag: 'a',
            children: [
                'Select an image',
                (0, t.jsx)(d.Z, {
                    tabIndex: 0,
                    onChange: (e, n, t) => (
                        l({
                            data: e,
                            file: n,
                            image: t
                        }),
                        Promise.resolve(void 0)
                    )
                })
            ]
        });
    },
    E = () => {
        (0, i.Mr3)(x.H);
    };
