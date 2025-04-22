n.d(l, { EmojiStudioModal: () => g }), n(388685);
var t = n(200651),
    a = n(192379),
    r = n(772848),
    o = n(442837),
    i = n(481060),
    d = n(730089),
    s = n(999382),
    u = n(430824),
    c = n(496675),
    h = n(375727),
    m = n(841776),
    p = n(981631),
    j = n(388032),
    x = n(807179);
let b = (e) => {
        let { userImage: l } = e,
            { guilds: n, currentGuildId: o } = v(),
            [s, u] = a.useState(o),
            [c, p] = a.useState(null),
            [b, g] = a.useState(null),
            f = async () => {
                if ((p(null), g(null), null == s)) return void p('Please select a server for the emoji.');
                let { data: e, file: n, image: t } = l;
                if (!e || !n || !t) return void p('Missing image data');
                try {
                    let l = await (0, d.G)({
                        data: e,
                        file: n,
                        image: t,
                        guildId: s,
                        uploadId: (0, r.Z)(),
                        hideErrorModal: !1
                    });
                    if (l) return void g(l);
                } catch (e) {
                    var a;
                    p(null != (a = null == e ? void 0 : e.message) ? a : 'Failed to upload');
                    return;
                }
                (0, h.y)();
            };
        return (0, t.jsxs)('main', {
            children: [
                (0, t.jsx)('div', {
                    className: x.left,
                    children: (0, t.jsx)('img', {
                        src: l.data,
                        alt: 'Uploaded content'
                    })
                }),
                (0, t.jsxs)('div', {
                    className: x.right,
                    children: [
                        (0, t.jsx)(i.X6q, {
                            variant: 'heading-lg/bold',
                            children: j.intl.string(j.t.DU0dy8)
                        }),
                        (0, t.jsxs)('div', {
                            className: x.uploadContainer,
                            children: [
                                (0, t.jsx)(m.H, {
                                    error: c,
                                    uploadErrorCode: b
                                }),
                                (0, t.jsx)(i.q4e, {
                                    options: n.map((e) => ({
                                        label: e.name,
                                        value: e.id
                                    })),
                                    value: s,
                                    onChange: (e) => u(e)
                                }),
                                (0, t.jsx)(i.zxk, {
                                    onClick: f,
                                    fullWidth: !0,
                                    children: 'Upload'
                                })
                            ]
                        }),
                        (0, t.jsx)(i.olH, {
                            onClick: h.y,
                            className: x.closeButton
                        })
                    ]
                })
            ]
        });
    },
    g = (e) => {
        let { transitionState: l, userImage: n } = e;
        return (0, t.jsx)(i.Y0X, {
            transitionState: l,
            size: i.CgR.LARGE,
            className: x.modalRoot,
            children: (0, t.jsx)(i.hzk, {
                scrollbarType: 'none',
                className: x.modalContent,
                children: (0, t.jsx)(b, { userImage: n })
            })
        });
    },
    v = () => ({
        guilds: (0, o.Wu)([u.Z, c.Z], () => Object.values(u.Z.getGuilds()).filter((e) => c.Z.can(p.Plq.CREATE_GUILD_EXPRESSIONS, e))),
        currentGuildId: (0, o.e7)([s.Z, c.Z], () => {
            let e = s.Z.getGuild();
            return c.Z.can(p.Plq.CREATE_GUILD_EXPRESSIONS, e) && null != e ? e.id : null;
        })
    });
