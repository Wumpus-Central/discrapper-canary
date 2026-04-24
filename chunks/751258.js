n.d(t, { S: () => f });
var i = n(791332),
    l = n.n(i),
    s = n(715943),
    a = n(720149),
    r = n(58149),
    o = n(159273),
    c = n(649963),
    d = n(815807),
    u = n(253932),
    h = n(232835),
    m = n(652215);
let p = /\\([*?+/])/g,
    g = {
        tts: { action: () => ({ tts: u.on.getSetting() }) },
        me: { action: (e) => ({ content: `_${e}_` }) },
        tableflip: { action: (e) => ({ content: `${e} (╯\xb0□\xb0)╯︵ ┻━┻`.trim() }) },
        unflip: { action: (e) => ({ content: `${e} ┬─┬ノ( \xba _ \xbaノ)`.trim() }) },
        shrug: { action: (e) => ({ content: `${e} \xaf\\_(ツ)_/\xaf`.trim() }) },
        nick: {
            action(e, t) {
                let { channel: n } = t;
                if (null != n.guild_id) return s.A.changeNickname(n.guild_id, n.id, m.ME, e), { content: "" };
            },
        },
        reaction: {
            match: l().anyScopeRegex(/^\+:(.+?): *$/),
            action(e, t) {
                let { isEdit: n, channel: i } = t;
                if (n || !h.A.hasPresent(i.id)) return;
                let l = h.A.getMessages(i.id).last();
                if (null == l || null == l.id) return;
                let s = o.Ay.getDisambiguatedEmojiContext(i.guild_id).getByName(e.trim().slice(2, -1));
                if (null != s) return (0, c.BB)(i.id, l.id, (0, d.jq)(s)), { content: "" };
            },
        },
        searchReplace: {
            match: l().anyScopeRegex(/^s\/([^\/\\]*(?:\\.[^\/\\]*)*)\/([^\/\\]*(?:\\.[^\/\\]*)*)(?:\/([g]*))?$/),
            action(e, t) {
                let { isEdit: n, channel: i } = t;
                if (n) return;
                let l = h.A.getLastEditableMessage(i.id);
                if (null == l || null == l.id) return { content: "" };
                let [s, r, o, c] = Array.from(e.match(this.match.regex) ?? []),
                    d = c?.split("") ?? [];
                (r = r.replace(p, (e, t) => t)), (o = o.replace(p, (e, t) => t));
                let u = d.includes("g") ? l.content.replaceAll(r, o) : l.content.replace(r, o);
                return (
                    (null == u || "" === u.trim()) && 0 === l.attachments.length
                        ? a.A.deleteMessage(i.id, l.id)
                        : u !== l.content && a.A.editMessage(i.id, l.id, { content: u }),
                    { content: "" }
                );
            },
        },
        spoiler: { action: (e) => ({ content: (0, m.ZGg)(e).trim() }) },
    };
function A(e, t, n, i) {
    return r.Ay.trackWithMetadata(m.HAw.SLASH_COMMAND_USED, { command: e }), t.action(n, i);
}
function f(e, t) {
    for (let n in g) {
        let i = g[n];
        if (null != i.match) {
            if (i.match.regex?.test(e)) return A(n, i, e, t);
            continue;
        }
        if (u.D_.getSetting() && "/" === e[0]) {
            let l = e.split(" ");
            if (n === l[0].slice(1) && null != i.action) return A(n, i, l.slice(1).join(" "), t);
        }
    }
}
Object.setPrototypeOf(g, null);
