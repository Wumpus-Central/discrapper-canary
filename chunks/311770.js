n.d(l, { EmojiStudioModal: () => j }), n(388685);
var t = n(200651),
    a = n(192379),
    i = n(772848),
    r = n(442837),
    o = n(481060),
    s = n(730089),
    d = n(372129),
    u = n(430824),
    c = n(496675),
    m = n(914010),
    h = n(375727),
    x = n(841776),
    f = n(981631),
    g = n(388032),
    p = n(807179);
let b = (e) => {
        let { guilds: l, currentGuildId: n } = _(),
            [r, d] = a.useState(n),
            [u, c] = a.useState(null),
            [m, f] = a.useState(null),
            [b, j] = a.useState(e.userImage),
            I = async () => {
                if ((c(null), f(null), null == r)) return void c('Please select a server for the emoji.');
                if (null == b || (null == b ? void 0 : b.data) == null || (null == b ? void 0 : b.file) == null || (null == b ? void 0 : b.image) == null) return void c('Missing image data');
                let { data: e, file: l, image: n } = b;
                try {
                    let t = await (0, s.G)({
                        data: e,
                        file: l,
                        image: n,
                        guildId: r,
                        uploadId: (0, i.Z)(),
                        hideErrorModal: !1
                    });
                    if (t) return void f(t);
                } catch (e) {
                    var t;
                    c(null != (t = null == e ? void 0 : e.message) ? t : 'Failed to upload');
                    return;
                }
                (0, h.y)();
            };
        return (0, t.jsxs)('main', {
            children: [
                (0, t.jsx)('div', {
                    className: p.left,
                    children:
                        null == b
                            ? (0, t.jsx)(v, { setUserImage: j })
                            : (0, t.jsx)('img', {
                                  src: b.data,
                                  alt: 'Uploaded content'
                              })
                }),
                (0, t.jsxs)('div', {
                    className: p.right,
                    children: [
                        (0, t.jsx)(o.X6q, {
                            variant: 'heading-lg/bold',
                            children: g.intl.string(g.t.DU0dy8)
                        }),
                        (0, t.jsxs)('div', {
                            className: p.uploadContainer,
                            children: [
                                (0, t.jsx)(x.H, {
                                    error: u,
                                    uploadErrorCode: m
                                }),
                                (0, t.jsx)(o.q4e, {
                                    options: l.map((e) => ({
                                        label: e.name,
                                        value: e.id
                                    })),
                                    value: r,
                                    onChange: (e) => d(e)
                                }),
                                (0, t.jsx)(o.zxk, {
                                    onClick: I,
                                    fullWidth: !0,
                                    disabled: null == b || null == r,
                                    children: 'Upload'
                                })
                            ]
                        }),
                        (0, t.jsx)(o.olH, {
                            onClick: h.y,
                            className: p.closeButton
                        })
                    ]
                })
            ]
        });
    },
    j = (e) => {
        let { transitionState: l, userImage: n } = e;
        return (0, t.jsx)(o.Y0X, {
            transitionState: l,
            size: o.CgR.LARGE,
            className: p.modalRoot,
            children: (0, t.jsx)(o.hzk, {
                scrollbarType: 'none',
                className: p.modalContent,
                children: (0, t.jsx)(b, { userImage: n })
            })
        });
    },
    _ = () => ({
        guilds: (0, r.Wu)([u.Z, c.Z], () => Object.values(u.Z.getGuilds()).filter((e) => c.Z.can(f.Plq.CREATE_GUILD_EXPRESSIONS, e))),
        currentGuildId: (0, r.e7)([u.Z, m.Z, c.Z], () => {
            let e = m.Z.getGuildId(),
                l = u.Z.getGuild(e);
            return c.Z.can(f.Plq.CREATE_GUILD_EXPRESSIONS, l) && null != l ? l.id : null;
        })
    }),
    v = (e) => {
        let { setUserImage: l } = e,
            [n, i] = a.useState(!1);
        return (0, t.jsxs)(o.zxk, {
            tabIndex: -1,
            size: o.zxk.Sizes.MEDIUM,
            disabled: n,
            submitting: n,
            focusProps: { within: !0 },
            children: [
                'Select an image',
                (0, t.jsx)(d.Z, {
                    disabled: n,
                    tabIndex: 0,
                    onChange: (e, n, t) => (
                        l({
                            data: e,
                            file: n,
                            image: t
                        }),
                        Promise.resolve(void 0)
                    ),
                    setLoading: i,
                    multiple: !0
                })
            ]
        });
    };
