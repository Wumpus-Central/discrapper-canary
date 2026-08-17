t.d(n, { N: () => j });
var l = t(477900),
    r = t(582128),
    a = t(588975),
    i = t(442433),
    s = t(9578),
    c = t(975807),
    d = t(235393),
    u = t(332173),
    o = t(679164),
    h = t(403362),
    m = t(62849),
    x = t(353137);
function j(e) {
    let { type: n, value: t, children: r } = e;
    switch (n) {
        case "normal":
            return (0, l.jsx)(s.A, { title: t.title, href: t.url, children: (0, l.jsx)("span", { children: r }) });
        case "mention":
            switch (t.type) {
                case "channel":
                case "message":
                    let {
                            value: { guild_id: a, channel_id: i },
                        } = t,
                        c = "message_id" in t.value ? t.value.message_id : void 0;
                    return (0, l.jsx)(m.A, {
                        channelId: String(i),
                        guildId: String(a),
                        messageId: null != c ? String(c) : void 0,
                    });
                case "attachment":
                    let {
                        value: { domain: d, bucket: u, channel_id: o, attachment_id: x, name: j },
                    } = t;
                    return (0, l.jsx)(g, {
                        domain: d,
                        ephemeral: "ephemeral_attachments" === u,
                        channelId: String(o),
                        attachmentId: String(x),
                        name: j,
                    });
                default:
                    (0, h.xb)(t);
            }
            break;
        default:
            (0, h.xb)(n);
    }
}
function g(e) {
    let { domain: n, ephemeral: s, channelId: h, attachmentId: m, name: j } = e,
        g = `https://${n}/${s ? "ephemeral-attachments" : "attachments"}/${h}/${m}/${j}`,
        f = r.useCallback(async () => {
            let e = await o.AN(g);
            d.A.trackLinkClicked(e), (0, c.A)(e);
        }, [g]),
        p = r.useCallback(
            (e) => {
                (0, i.L3)(e, async () => {
                    let { default: e } = await t.e("762529").then(t.bind(t, 740024));
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
        children: [(0, l.jsx)(a.P, { size: "xs", className: x.Kk, color: "currentColor" }), j],
    });
}
