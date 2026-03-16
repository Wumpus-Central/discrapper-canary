t.d(n, { N: () => j });
var l = t(627968),
    r = t(64700),
    a = t(397927),
    s = t(442433),
    i = t(9578),
    c = t(975807),
    d = t(235393),
    u = t(332173),
    o = t(202803),
    h = t(403362),
    m = t(62849),
    x = t(800344);
function j(e) {
    let { type: n, value: t, children: r } = e;
    switch (n) {
        case "normal":
            return (0, l.jsx)(i.A, { title: t.title, href: t.url, children: (0, l.jsx)("span", { children: r }) });
        case "mention":
            switch (t.type) {
                case "channel":
                case "message":
                    let {
                            value: { guild_id: a, channel_id: s },
                        } = t,
                        c = "message_id" in t.value ? t.value.message_id : void 0;
                    return (0, l.jsx)(m.A, { channelId: s, guildId: a, messageId: c });
                case "attachment":
                    let {
                        value: { domain: d, ephemeral: u, channel_id: o, attachment_id: x, name: j },
                    } = t;
                    return (0, l.jsx)(g, { domain: d, ephemeral: u, channelId: o, attachmentId: x, name: j });
                default:
                    (0, h.xb)(t);
            }
            break;
        default:
            (0, h.xb)(n);
    }
}
function g(e) {
    let { domain: n, ephemeral: i, channelId: h, attachmentId: m, name: j } = e,
        g = `https://${n}/${i ? "ephemeral-attachments" : "attachments"}/${h}/${m}/${j}`,
        f = r.useCallback(async () => {
            let e = await (0, o.AN)(g);
            d.A.trackLinkClicked(e), (0, c.A)(e);
        }, [g]),
        p = r.useCallback(
            (e) => {
                (0, s.L3)(e, async () => {
                    let { default: e } = await t.e("62529").then(t.bind(t, 740024));
                    return (n) => (0, l.jsx)(e, { ...n, attachmentUrl: g, attachmentName: j });
                });
            },
            [j, g],
        );
    return (0, l.jsxs)(u.A, {
        role: "link",
        href: g,
        onClick: f,
        onContextMenu: p,
        className: "attachmentLink",
        children: [(0, l.jsx)(a.PtA, { size: "xs", className: x.Kk, color: "currentColor" }), j],
    });
}
