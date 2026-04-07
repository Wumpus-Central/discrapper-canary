n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(990078),
    a = n(397927),
    r = n(104171),
    o = n(287809),
    d = n(139675),
    c = n(486020),
    u = n(403362),
    h = n(427262),
    A = n(206068);
let _ = r.DN.SIZE_24;
function m(e) {
    let { activity: t, embeddedApp: n } = e,
        l = t?.assets,
        a = t?.application_id;
    if (null == l || (null == l.large_image && null == l.small_image)) {
        let e = c.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, i.jsx)(s.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, i.jsx)("img", { alt: t, src: e, className: A.P3 }),
        });
    }
    let r = l.large_image ?? l.small_image;
    return null != r
        ? (0, i.jsx)("img", { alt: l.large_text ?? "", src: (0, d.uD)(a, r, [128, 128]), className: A.P3 })
        : null;
}
function p(e) {
    let { activity: t, embeddedApp: n, channel: d } = e,
        c = Array.from(n.embeddedActivity.userIds),
        p = (0, l.yK)([o.default], () => c.map((e) => o.default.getUser(e)).filter(u.Vq));
    return (0, i.jsx)("div", {
        className: A.ec,
        children: (0, i.jsxs)("div", {
            className: A.Wh,
            children: [
                (0, i.jsx)(m, { activity: t, embeddedApp: n }),
                (0, i.jsxs)("div", {
                    className: A.X0,
                    children: [
                        (0, i.jsx)(a.Heading, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: A.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, i.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, i.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        c.length > 0 &&
                            (0, i.jsx)(r.Ay, {
                                className: A.TN,
                                guildId: d.guild_id,
                                users: p,
                                size: _,
                                max: 7,
                                renderUser: (e) => {
                                    if (null == e || e === r.mt) return null;
                                    let t = h.Ay.getName(e);
                                    return (0, i.jsx)(
                                        s.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, i.jsx)("img", {
                                                src: e.getAvatarURL(d.guild_id, _),
                                                alt: t,
                                                className: A.my,
                                            }),
                                        },
                                        e.id,
                                    );
                                },
                            }),
                    ],
                }),
            ],
        }),
    });
}
