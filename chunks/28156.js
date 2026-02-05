"use strict";
n.d(t, { A: () => l }), n(839272), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(661191),
    s = n(849077);
class o {
    _messages = [];
    _isSorted = !0;
    _channelIds = new Set();
    updateChannelIds(e) {
        (this._channelIds = new Set(e)),
            (this._messages = this._messages.filter(
                (e) => e.kind !== s.yL.ALL_MESSAGES_CHANNEL || this._channelIds.has(e.channelId),
            ));
    }
    addMessage(e) {
        (this._messages = [...this._messages, e]), this.maybeTruncate();
    }
    addChannelMessages(e) {
        let { channel: t, channelMessages: n, userId: r } = e;
        (this._messages = [
            ...this._messages,
            ...n
                .filter((e) => e.author.id !== r && a.default.age(e.id) < s.V$)
                .map((e) => ({
                    id: e.id,
                    channelId: e.channel_id,
                    guildId: t?.guild_id,
                    kind: e.mentioned ? s.yL.MENTION : s.yL.ALL_MESSAGES_CHANNEL,
                    message: e,
                })),
        ]),
            (this._isSorted = !1),
            this.maybeTruncate();
    }
    addMessages(e) {
        (this._messages = [...this._messages, ...e]), (this._isSorted = !1), this.maybeTruncate();
    }
    deleteMessages(e) {
        return (
            !!this._messages.some((t) => e.includes(t.id)) &&
            ((this._messages = this._messages.filter((t) => !e.includes(t.id))), !0)
        );
    }
    getMessages() {
        return this._isSorted || this.sortMessages(), this._messages;
    }
    sortMessages() {
        this._isSorted ||
            ((this._messages = i().sortedUniqBy(
                this._messages.toSorted((e, t) => {
                    let n = a.default.compare(e.id, t.id);
                    return 0 !== n
                        ? n
                        : e.kind === s.yL.MENTION && t.kind !== s.yL.MENTION
                          ? -1
                          : +(e.kind !== s.yL.MENTION && t.kind === s.yL.MENTION);
                }),
                "id",
            )),
            (this._isSorted = !0));
    }
    maybeTruncate() {
        let e = s.EM * (this._channelIds.size + 1) * 1.5;
        if (this._messages.length <= e) return;
        let t = {};
        for (let e of this._messages)
            a.default.age(e.id) > s.V$ ||
                (null == t[e.channelId] && (t[e.channelId] = { mentions: [], messages: [] }),
                e.kind === s.yL.MENTION ? t[e.channelId].mentions.push(e) : t[e.channelId].messages.push(e));
        let n = [];
        Object.values(t).forEach((e) => {
            let t = [...e.mentions, ...e.messages].sort((e, t) => a.default.compare(e.id, t.id)).slice(-s.EM),
                r = new Set(),
                i = [];
            for (let e of t) r.add(e.id), i.push(e);
            for (let t of e.mentions) r.has(t.id) || i.push(t);
            n.push(...i);
        }),
            (this._messages = n),
            (this._isSorted = !1);
    }
}
let l = o;
