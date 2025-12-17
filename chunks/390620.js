n.d(t, { y: () => f });
var l = n(54381);
n(473749);
var r = n(120356),
    i = n.n(r),
    a = n(442837),
    o = n(481060),
    s = n(596454),
    u = n(430824),
    c = n(70956),
    d = n(388032),
    m = n(758151),
    h = n(141291);
let g = 6 * c.Z.Millis.SECOND;
function b(e) {
    let { emoji: t, guildId: n } = e,
        r = (0, a.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getGuild(n)) ? void 0 : e.name;
        });
    return (0, l.jsxs)("div", {
        className: i()(h.toast, m.toast),
        children: [
            (0, l.jsx)(s.Z, {
                emojiId: t.id,
                size: "default",
            }),
            (0, l.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: d.intl.format(d.t.BaxFf8, {
                    emojiName: t.name,
                    emojiNameHook: (e, t) =>
                        (0, l.jsx)(
                            o.Text,
                            {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tag: "strong",
                                children: e,
                            },
                            t,
                        ),
                    guildName: r,
                    guildNameHook: (e, t) =>
                        (0, l.jsx)(
                            o.Text,
                            {
                                variant: "text-md/semibold",
                                color: "text-strong",
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
    (0, o.showToast)(
        (0, o.createToast)("", o.ToastType.CUSTOM, {
            position: o.ToastPosition.TOP,
            component: (0, l.jsx)(b, {
                emoji: t,
                guildId: n,
            }),
            duration: g,
        }),
    );
}
