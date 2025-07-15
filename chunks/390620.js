n.d(t, { y: () => f });
var r = n(255367);
n(73800);
var l = n(120356),
    a = n.n(l),
    i = n(442837),
    s = n(481060),
    o = n(596454),
    c = n(430824),
    u = n(70956),
    d = n(388032),
    m = n(882714),
    g = n(986449);
let p = 6 * u.Z.Millis.SECOND;
function h(e) {
    let { emoji: t, guildId: n } = e,
        l = (0, i.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getGuild(n)) ? void 0 : e.name;
        });
    return (0, r.jsxs)('div', {
        className: a()(g.toast, m.toast),
        children: [
            (0, r.jsx)(o.Z, {
                emojiId: t.id,
                size: 'default'
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'text-tertiary',
                children: d.intl.format(d.t.BaxFf3, {
                    emojiName: t.name,
                    emojiNameHook: (e, t) =>
                        (0, r.jsx)(
                            s.Text,
                            {
                                variant: 'text-md/semibold',
                                color: 'text-primary',
                                tag: 'strong',
                                children: e
                            },
                            t
                        ),
                    guildName: l,
                    guildNameHook: (e, t) =>
                        (0, r.jsx)(
                            s.Text,
                            {
                                variant: 'text-md/semibold',
                                color: 'text-primary',
                                tag: 'strong',
                                children: e
                            },
                            t
                        )
                })
            })
        ]
    });
}
function f(e) {
    let { emoji: t, guildId: n } = e;
    (0, s.showToast)(
        (0, s.createToast)('', s.ToastType.CUSTOM, {
            position: s.ToastPosition.TOP,
            component: (0, r.jsx)(h, {
                emoji: t,
                guildId: n
            }),
            duration: p
        })
    );
}
