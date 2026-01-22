n.d(t, {
    T: () => b,
});
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(311907),
    s = n(397927),
    u = n(565645),
    o = n(71393),
    c = n(927813),
    d = n(985018),
    m = n(618148),
    h = n(910200);
let g = 6 * c.A.Millis.SECOND;

function f(e) {
    let { emoji: t, guildId: n } = e,
        r = (0, a.bG)([o.A], () => {
            var e;
            return null == (e = o.A.getGuild(n)) ? void 0 : e.name;
        });
    return (0, l.jsxs)("div", {
        className: i()(h.oR, m.o),
        children: [
            (0, l.jsx)(u.A, {
                emojiId: t.id,
                size: "default",
            }),
            (0, l.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: d.intl.format(d.t.BaxFf8, {
                    emojiName: t.name,
                    emojiNameHook: (e, t) =>
                        (0, l.jsx)(
                            s.Text,
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
                            s.Text,
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

function b(e) {
    let { emoji: t, guildId: n } = e;
    (0, s.showToast)(
        (0, s.createToast)("", s.ToastType.CUSTOM, {
            position: s.ToastPosition.TOP,
            component: (0, l.jsx)(f, {
                emoji: t,
                guildId: n,
            }),
            duration: g,
        }),
    );
}
