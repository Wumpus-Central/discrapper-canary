n.d(t, { S: () => A });
var s = n(478676),
    i = n.n(s),
    l = n(715943),
    a = n(148494),
    o = n(95561),
    r = n(236285),
    c = n(649963),
    u = n(815807),
    d = n(885386),
    h = n(232835),
    p = n(652215);
let g = /\\([*?+/])/g,
    m = {
        tts: { action: () => ({ tts: d.on.getSetting() }) },
        me: { action: (e) => ({ content: `_${e}_` }) },
        tableflip: {
            action: (e) => ({
                content: `${e} (\u{256F}\xb0\u{25A1}\xb0)\u{256F}\u{FE35} \u{253B}\u{2501}\u{253B}`.trim(),
            }),
        },
        unflip: { action: (e) => ({ content: `${e} \u{252C}\u{2500}\u{252C}\u{30CE}( \xba _ \xba\u{30CE})`.trim() }) },
        shrug: { action: (e) => ({ content: `${e} \xaf\\_(\u{30C4})_/\xaf`.trim() }) },
        nick: {
            action(e, t) {
                let { channel: n } = t;
                if (null != n.guild_id) return l.A.changeNickname(n.guild_id, n.id, p.ME, e), { content: "" };
            },
        },
        reaction: {
            match: i().anyScopeRegex(/^\+:(.+?): *$/),
            action(e, t) {
                let { isEdit: n, channel: s } = t;
                if (n || !h.A.hasPresent(s.id)) return;
                let i = h.A.getMessages(s.id).last();
                if (null == i || null == i.id) return;
                let l = r.Ay.getDisambiguatedEmojiContext(s.guild_id).getByName(e.trim().slice(2, -1));
                if (null != l) return (0, c.BB)(s.id, i.id, (0, u.jq)(l)), { content: "" };
            },
        },
        searchReplace: {
            match: i().anyScopeRegex(/^s\/([^\/\\]*(?:\\.[^\/\\]*)*)\/([^\/\\]*(?:\\.[^\/\\]*)*)(?:\/([g]*))?$/),
            action(e, t) {
                let { isEdit: n, channel: s } = t;
                if (n) return;
                let i = h.A.getLastEditableMessage(s.id);
                if (null == i || null == i.id) return { content: "" };
                let [l, o, r, c] = Array.from(e.match(this.match.regex) ?? []),
                    u = c?.split("") ?? [];
                (o = o.replace(g, (e, t) => t)), (r = r.replace(g, (e, t) => t));
                let d = u.includes("g") ? i.content.replaceAll(o, r) : i.content.replace(o, r);
                return (
                    (null == d || "" === d.trim()) && 0 === i.attachments.length
                        ? a.A.deleteMessage(s.id, i.id)
                        : d !== i.content && a.A.editMessage(s.id, i.id, { content: d }),
                    { content: "" }
                );
            },
        },
        spoiler: { action: (e) => ({ content: (0, p.ZGg)(e).trim() }) },
    };
function E(e, t, n, s) {
    return o.Ay.trackWithMetadata(p.HAw.SLASH_COMMAND_USED, { command: e }), t.action(n, s);
}
function A(e, t) {
    for (let n in m) {
        let s = m[n];
        if (null != s.match) {
            if (s.match.regex?.test(e)) return E(n, s, e, t);
            continue;
        }
        if (d.D_.getSetting() && "/" === e[0]) {
            let i = e.split(" ");
            if (n === i[0].slice(1) && null != s.action) return E(n, s, i.slice(1).join(" "), t);
        }
    }
}
Object.setPrototypeOf(m, null);
