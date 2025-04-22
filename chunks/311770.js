l.d(e, { EmojiStudioModal: () => g }), l(388685);
var n = l(200651),
    a = l(192379),
    s = l(442837),
    o = l(481060),
    d = l(999382),
    i = l(430824),
    r = l(496675),
    c = l(375727),
    u = l(981631),
    h = l(388032),
    m = l(807179);
let b = (t) => {
        let { userImage: e } = t,
            { guilds: l, currentGuildId: s } = j(),
            [d, i] = a.useState(s);
        return (0, n.jsxs)('main', {
            children: [
                (0, n.jsx)('div', {
                    className: m.left,
                    children: (0, n.jsx)('img', {
                        src: e.data,
                        alt: 'Uploaded content'
                    })
                }),
                (0, n.jsxs)('div', {
                    className: m.right,
                    children: [
                        (0, n.jsx)(o.X6q, {
                            variant: 'heading-lg/bold',
                            children: h.intl.string(h.t.DU0dy8)
                        }),
                        (0, n.jsx)(o.q4e, {
                            options: l.map((t) => ({
                                label: t.name,
                                value: t.id
                            })),
                            value: d,
                            onChange: (t) => i(t)
                        }),
                        (0, n.jsx)(o.olH, {
                            onClick: c.y,
                            className: m.closeButton
                        })
                    ]
                })
            ]
        });
    },
    g = (t) => {
        let { transitionState: e, userImage: l } = t;
        return (0, n.jsx)(o.Y0X, {
            transitionState: e,
            size: o.CgR.LARGE,
            className: m.modalRoot,
            children: (0, n.jsx)(o.hzk, {
                scrollbarType: 'none',
                className: m.modalContent,
                children: (0, n.jsx)(b, { userImage: l })
            })
        });
    },
    j = () => ({
        guilds: (0, s.Wu)([i.Z, r.Z], () => Object.values(i.Z.getGuilds()).filter((t) => r.Z.can(u.Plq.CREATE_GUILD_EXPRESSIONS, t))),
        currentGuildId: (0, s.e7)([d.Z, r.Z], () => {
            let t = d.Z.getGuild();
            return r.Z.can(u.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
        })
    });
