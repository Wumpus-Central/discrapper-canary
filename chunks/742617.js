n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(990078),
    a = n(534514),
    r = n(834730),
    o = n(104171),
    d = n(287809),
    c = n(139675),
    u = n(486020),
    h = n(403362),
    A = n(427262),
    _ = n(456644);
let m = o.DN.SIZE_24;
function g(e) {
    let { activity: t, embeddedApp: n } = e,
        l = t?.assets,
        a = t?.application_id;
    if (null == l || (null == l.large_image && null == l.small_image)) {
        let e = u.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, i.jsx)(s.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, i.jsx)("img", { alt: t, src: e, className: _.P3 }),
        });
    }
    let r = l.large_image ?? l.small_image;
    return null != r
        ? (0, i.jsx)("img", { alt: l.large_text ?? "", src: (0, c.uD)(a, r, [128, 128]), className: _.P3 })
        : null;
}
function p(e) {
    let { activity: t, embeddedApp: n, channel: c } = e,
        u = Array.from(n.embeddedActivity.userIds),
        p = (0, l.yK)([d.default], () => u.map((e) => d.default.getUser(e)).filter(h.Vq));
    return (0, i.jsx)("div", {
        className: _.ec,
        children: (0, i.jsxs)("div", {
            className: _.Wh,
            children: [
                (0, i.jsx)(g, { activity: t, embeddedApp: n }),
                (0, i.jsxs)("div", {
                    className: _.X0,
                    children: [
                        (0, i.jsx)(a.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: _.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, i.jsx)(r.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, i.jsx)(r.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        u.length > 0 &&
                            (0, i.jsx)(o.Ay, {
                                className: _.TN,
                                guildId: c.guild_id,
                                users: p,
                                size: m,
                                max: 7,
                                renderUser: (e) => {
                                    if (null == e || e === o.mt) return null;
                                    let t = A.Ay.getName(e);
                                    return (0, i.jsx)(
                                        s.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, i.jsx)("img", {
                                                src: e.getAvatarURL(c.guild_id, m),
                                                alt: t,
                                                className: _.my,
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
