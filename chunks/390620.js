n.d(t, { y: () => f });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(481060),
    o = n(596454),
    u = n(430824),
    c = n(70956),
    d = n(388032),
    h = n(902378),
    m = n(74866);
let g = 6 * c.Z.Millis.SECOND;
function p(e) {
    let { emoji: t, guildId: n } = e,
        i = (0, a.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getGuild(n)) ? void 0 : e.name;
        });
    return (0, r.jsxs)("div", {
        className: l()(m.toast, h.toast),
        children: [
            (0, r.jsx)(o.Z, {
                emojiId: t.id,
                size: "default",
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "text-tertiary",
                children: d.intl.format(d.t.BaxFf8, {
                    emojiName: t.name,
                    emojiNameHook: (e, t) =>
                        (0, r.jsx)(
                            s.Text,
                            {
                                variant: "text-md/semibold",
                                color: "text-primary",
                                tag: "strong",
                                children: e,
                            },
                            t,
                        ),
                    guildName: i,
                    guildNameHook: (e, t) =>
                        (0, r.jsx)(
                            s.Text,
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
function f(e) {
    let { emoji: t, guildId: n } = e;
    (0, s.showToast)(
        (0, s.createToast)("", s.ToastType.CUSTOM, {
            position: s.ToastPosition.TOP,
            component: (0, r.jsx)(p, {
                emoji: t,
                guildId: n,
            }),
            duration: g,
        }),
    );
}
