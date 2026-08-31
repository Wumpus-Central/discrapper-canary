t.a(e, async function (e, l) {
    try {
        t.d(n, { N: () => p });
        var r = t(477900),
            a = t(582128),
            i = t(730340),
            s = t(588975),
            c = t(442433),
            u = t(9578),
            d = t(975807),
            o = t(235393),
            h = t(332173),
            m = t(679164),
            x = t(403362),
            j = t(62849),
            g = t(147190),
            f = e([i]);
        function p(e) {
            let { target: n, title: t, children: l } = e;
            switch (n.type) {
                case "url":
                case "coded":
                    return (0, r.jsx)(v, { target: n, title: t, children: l });
                case "mention":
                    switch (n.value.type) {
                        case "channel":
                        case "message":
                            let {
                                    value: { guild_id: a, channel_id: i },
                                } = n.value,
                                s = "message_id" in n.value.value ? n.value.value.message_id : void 0;
                            return (0, r.jsx)(j.A, {
                                channelId: String(i),
                                guildId: String(a),
                                messageId: null != s ? String(s) : void 0,
                            });
                        case "attachment":
                            let {
                                value: { domain: c, bucket: u, channel_id: d, attachment_id: o, name: h },
                            } = n.value;
                            return (0, r.jsx)(I, {
                                domain: c,
                                ephemeral: "ephemeral_attachments" === u,
                                channelId: String(d),
                                attachmentId: String(o),
                                name: h,
                            });
                        default:
                            (0, x.xb)(n.value);
                    }
                    break;
                default:
                    (0, x.xb)(n);
            }
        }
        function v(e) {
            let { target: n, title: t, children: l } = e,
                s = a.useMemo(() => {
                    var e;
                    return (
                        (e = n),
                        "url" === e.type
                            ? e.value
                            : (0, i.r)([{ type: "link", value: { text: null, target: e, title: null } }])
                    );
                }, [n]);
            return (0, r.jsx)(u.A, { title: t ?? void 0, href: s, children: (0, r.jsx)("span", { children: l ?? s }) });
        }
        function I(e) {
            let { domain: n, ephemeral: l, channelId: i, attachmentId: u, name: x } = e,
                j = `https://${n}/${l ? "ephemeral-attachments" : "attachments"}/${i}/${u}/${x}`,
                f = a.useCallback(async () => {
                    let e = await m.AN(j);
                    o.A.trackLinkClicked(e), (0, d.A)(e);
                }, [j]),
                p = a.useCallback(
                    (e) => {
                        (0, c.L3)(e, async () => {
                            let { default: e } = await t.e("762529").then(t.bind(t, 740024));
                            return (n) => (0, r.jsx)(e, { ...n, attachmentUrl: j, attachmentName: x });
                        });
                    },
                    [x, j],
                );
            return (0, r.jsxs)(h.A, {
                role: "link",
                href: j,
                onClick: f,
                onContextMenu: p,
                className: "attachmentLink",
                children: [(0, r.jsx)(s.P, { size: "xs", className: g.Kk, color: "currentColor" }), x],
            });
        }
        (i = (f.then ? (await f)() : f)[0]), l();
    } catch (e) {
        l(e);
    }
});
