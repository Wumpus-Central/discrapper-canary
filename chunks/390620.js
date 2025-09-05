n.d(t, { y: () => x });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    a = n(442837),
    o = n(481060),
    s = n(596454),
    u = n(430824),
    c = n(70956),
    d = n(388032),
    m = n(902378),
    h = n(74866);
let g = 6 * c.Z.Millis.SECOND;
function f(e) {
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
            component: (0, r.jsx)(f, {
                emoji: t,
                guildId: n,
            }),
            duration: g,
        }),
    );
}
