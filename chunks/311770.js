l.d(t, { EmojiStudioModal: () => g }), l(388685);
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
let b = (e) => {
        let { userImage: t } = e,
            { guilds: l, currentGuildId: s } = j(),
            [d, i] = a.useState(s);
        return (0, n.jsxs)('main', {
            children: [
                (0, n.jsx)('div', {
                    className: m.left,
                    children: (0, n.jsx)('img', {
                        src: t.data,
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
                            options: l.map((e) => ({
                                label: e.name,
                                value: e.id
                            })),
                            value: d,
                            onChange: (e) => i(e)
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
    g = (e) => {
        let { transitionState: t, userImage: l } = e;
        return (0, n.jsx)(o.Y0X, {
            transitionState: t,
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
        guilds: (0, s.e7)([i.Z, r.Z], () => Object.values(i.Z.getGuilds()).filter((e) => r.Z.can(u.Plq.CREATE_GUILD_EXPRESSIONS, e))),
        currentGuildId: (0, s.e7)([d.Z, r.Z], () => {
            let e = d.Z.getGuild();
            return r.Z.can(u.Plq.CREATE_GUILD_EXPRESSIONS, e) && null != e ? e.id : null;
        })
    });
