n.d(t, { y: () => x });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    a = n(442837),
    o = n(481060),
    s = n(596454),
    u = n(430824),
    c = n(70956),
    d = n(388032),
    m = n(882714),
    h = n(986449);
let f = 6 * c.Z.Millis.SECOND;
function g(e) {
    let { emoji: t, guildId: n } = e,
        l = (0, a.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getGuild(n)) ? void 0 : e.name;
        });
    return (0, r.jsxs)("div", {
        className: i()(h.toast, m.toast),
        children: [
            (0, r.jsx)(s.Z, {
                emojiId: t.id,
                size: "default",
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "text-tertiary",
                children: d.intl.format(d.t.BaxFf3, {
                    emojiName: t.name,
                    emojiNameHook: (e, t) =>
                        (0, r.jsx)(
                            o.Text,
                            {
                                variant: "text-md/semibold",
                                color: "text-primary",
                                tag: "strong",
                                children: e,
                            },
                            t,
                        ),
                    guildName: l,
                    guildNameHook: (e, t) =>
                        (0, r.jsx)(
                            o.Text,
                            {
                                variant: "text-md/semibold",
                                color: "text-primary",
                                tag: "strong",
                                children: e,
                            },
                            t,
                        ),
                }),
            }),
        ],
    });
}
function x(e) {
    let { emoji: t, guildId: n } = e;
    (0, o.showToast)(
        (0, o.createToast)("", o.ToastType.CUSTOM, {
            position: o.ToastPosition.TOP,
            component: (0, r.jsx)(g, {
                emoji: t,
                guildId: n,
            }),
            duration: f,
        }),
    );
}
