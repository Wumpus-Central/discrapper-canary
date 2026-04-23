"use strict";
n.d(t, { A: () => s });
var r = n(315069);
class i extends r.A {
    id;
    guildId;
    userId;
    user;
    ended;
    endsAt;
    static createFromServer(e) {
        return new i({
            id: e.id,
            guildId: e.guild_id,
            userId: null != e.user ? e.user.id : e.user_id,
            user: e.user,
            ended: e.ended,
            endsAt: null != e.ends_at && "" !== e.ends_at ? new Date(e.ends_at) : null,
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.guildId = e.guildId),
            (this.userId = e.userId),
            (this.user = e.user),
            (this.ended = e.ended),
            (this.endsAt = null != e.endsAt ? e.endsAt : null);
    }
}
let s = i;
