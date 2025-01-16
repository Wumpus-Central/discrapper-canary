e.r(n),
    e.d(n, {
        default: function () {
            return c;
        }
    });
var i = e(200651);
e(192379);
var l = e(481060),
    r = e(287734),
    d = e(313201),
    a = e(939863),
    s = e(482241),
    u = e(554747),
    _ = e(388032),
    E = e(3977);
function c(t) {
    let { channel: n, transitionState: e, onClose: c } = t,
        o = (0, d.Dt)(),
        I = (0, u.qY)(n.id);
    if (null == I) return null;
    let p = () => {
        r.default.selectVoiceChannel(null), c();
    };
    return (0, i.jsxs)(l.ModalRoot, {
        transitionState: e,
        'aria-labelledby': o,
        size: l.ModalSize.SMALL,
        children: [
            (0, i.jsxs)(l.ModalContent, {
                className: E.content,
                children: [
                    (0, i.jsx)(a.Z, {
                        children: (0, i.jsx)('div', {
                            className: E.iconBackground,
                            children: (0, i.jsx)(l.CalendarIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 40,
                                width: 40,
                                className: E.icon
                            })
                        })
                    }),
                    (0, i.jsx)(l.Heading, {
                        id: o,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: E.title,
                        children: _.intl.string(_.t['4Ao8LC'])
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: E.subtitle,
                        children: _.intl.string(_.t['0I0B8f'])
                    })
                ]
            }),
            (0, i.jsxs)(l.ModalFooter, {
                children: [
                    (0, i.jsx)(l.Button, {
                        color: l.Button.Colors.RED,
                        onClick: () => {
                            s.Z.endEvent(I.id, I.guild_id), p();
                        },
                        children: _.intl.string(_.t.mjB9pa)
                    }),
                    (0, i.jsx)(l.Button, {
                        color: l.Button.Colors.PRIMARY,
                        className: E.cancelButton,
                        onClick: p,
                        children: _.intl.string(_.t.P60OAQ)
                    })
                ]
            })
        ]
    });
}
