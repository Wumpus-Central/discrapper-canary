n.d(t, { S: () => p });
var i = n(791332),
    l = n.n(i),
    a = n(715943),
    s = n(843472),
    r = n(58149),
    o = n(508675),
    c = n(649963),
    d = n(815807),
    u = n(253932),
    h = n(320501),
    m = n(652215);
let A = /\\([*?+/])/g,
    g = {
        tts: { action: () => ({ tts: u.on.getSetting() }) },
        me: { action: (e) => ({ content: `_${e}_` }) },
        tableflip: { action: (e) => ({ content: `${e} (╯\xb0□\xb0)╯︵ ┻━┻`.trim() }) },
        unflip: { action: (e) => ({ content: `${e} ┬─┬ノ( \xba _ \xbaノ)`.trim() }) },
        shrug: { action: (e) => ({ content: `${e} \xaf\\_(ツ)_/\xaf`.trim() }) },
        nick: {
            action(e, t) {
                let { channel: n } = t;
                if (null != n.guild_id) return a.A.changeNickname(n.guild_id, n.id, m.ME, e), { content: "" };
            },
        },
        reaction: {
            match: l().anyScopeRegex(/^\+:(.+?): *$/),
            action(e, t) {
                let { isEdit: n, channel: i } = t;
                if (n || !h.A.hasPresent(i.id)) return;
                let l = h.A.getMessages(i.id).last();
                if (null == l || null == l.id) return;
                let a = o.Ay.getDisambiguatedEmojiContext(i.guild_id).getByName(e.trim().slice(2, -1));
                if (null != a) return (0, c.BB)(i.id, l.id, (0, d.jq)(a)), { content: "" };
            },
        },
        searchReplace: {
            match: l().anyScopeRegex(/^s\/([^\/\\]*(?:\\.[^\/\\]*)*)\/([^\/\\]*(?:\\.[^\/\\]*)*)(?:\/([g]*))?$/),
            action(e, t) {
                let { isEdit: n, channel: i } = t;
                if (n) return;
                let l = h.A.getLastEditableMessage(i.id);
                if (null == l || null == l.id) return { content: "" };
                let [a, r, o, c] = Array.from(e.match(this.match.regex) ?? []),
                    d = c?.split("") ?? [];
                (r = r.replace(A, (e, t) => t)), (o = o.replace(A, (e, t) => t));
                let u = d.includes("g") ? l.content.replaceAll(r, o) : l.content.replace(r, o);
                return (
                    (null == u || "" === u.trim()) && 0 === l.attachments.length
                        ? s.A.deleteMessage(i.id, l.id)
                        : u !== l.content && s.A.editMessage(i.id, l.id, { content: u }),
                    { content: "" }
                );
            },
        },
        spoiler: { action: (e) => ({ content: (0, m.ZGg)(e).trim() }) },
    };
function _(e, t, n, i) {
    return r.Ay.trackWithMetadata(m.HAw.SLASH_COMMAND_USED, { command: e }), t.action(n, i);
}
function p(e, t) {
    for (let n in g) {
        let i = g[n];
        if (null != i.match) {
            if (i.match.regex?.test(e)) return _(n, i, e, t);
            continue;
        }
        if (u.D_.getSetting() && "/" === e[0]) {
            let l = e.split(" ");
            if (n === l[0].slice(1) && null != i.action) return _(n, i, l.slice(1).join(" "), t);
        }
    }
}
Object.setPrototypeOf(g, null);
