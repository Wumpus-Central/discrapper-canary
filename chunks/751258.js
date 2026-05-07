n.d(t, { S: () => f });
var l = n(791332),
    i = n.n(l),
    s = n(715943),
    a = n(720149),
    r = n(95561),
    o = n(159273),
    c = n(649963),
    d = n(815807),
    u = n(885386),
    h = n(232835),
    m = n(652215);
let A = /\\([*?+/])/g,
    g = {
        tts: { action: () => ({ tts: u.on.getSetting() }) },
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
                if (null != n.guild_id) return s.A.changeNickname(n.guild_id, n.id, m.ME, e), { content: "" };
            },
        },
        reaction: {
            match: i().anyScopeRegex(/^\+:(.+?): *$/),
            action(e, t) {
                let { isEdit: n, channel: l } = t;
                if (n || !h.A.hasPresent(l.id)) return;
                let i = h.A.getMessages(l.id).last();
                if (null == i || null == i.id) return;
                let s = o.Ay.getDisambiguatedEmojiContext(l.guild_id).getByName(e.trim().slice(2, -1));
                if (null != s) return (0, c.BB)(l.id, i.id, (0, d.jq)(s)), { content: "" };
            },
        },
        searchReplace: {
            match: i().anyScopeRegex(/^s\/([^\/\\]*(?:\\.[^\/\\]*)*)\/([^\/\\]*(?:\\.[^\/\\]*)*)(?:\/([g]*))?$/),
            action(e, t) {
                let { isEdit: n, channel: l } = t;
                if (n) return;
                let i = h.A.getLastEditableMessage(l.id);
                if (null == i || null == i.id) return { content: "" };
                let [s, r, o, c] = Array.from(e.match(this.match.regex) ?? []),
                    d = c?.split("") ?? [];
                (r = r.replace(A, (e, t) => t)), (o = o.replace(A, (e, t) => t));
                let u = d.includes("g") ? i.content.replaceAll(r, o) : i.content.replace(r, o);
                return (
                    (null == u || "" === u.trim()) && 0 === i.attachments.length
                        ? a.A.deleteMessage(l.id, i.id)
                        : u !== i.content && a.A.editMessage(l.id, i.id, { content: u }),
                    { content: "" }
                );
            },
        },
        spoiler: { action: (e) => ({ content: (0, m.ZGg)(e).trim() }) },
    };
function p(e, t, n, l) {
    return r.Ay.trackWithMetadata(m.HAw.SLASH_COMMAND_USED, { command: e }), t.action(n, l);
}
function f(e, t) {
    for (let n in g) {
        let l = g[n];
        if (null != l.match) {
            if (l.match.regex?.test(e)) return p(n, l, e, t);
            continue;
        }
        if (u.D_.getSetting() && "/" === e[0]) {
            let i = e.split(" ");
            if (n === i[0].slice(1) && null != l.action) return p(n, l, i.slice(1).join(" "), t);
        }
    }
}
Object.setPrototypeOf(g, null);
