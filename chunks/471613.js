n.d(t, { Z: () => O });
var r,
    i = n(442837),
    a = n(570140),
    o = n(40572),
    s = n(914010);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = {},
    u = {},
    d = 0,
    f = !1;
function _(e) {
    let { guildId: t, emojis: n } = e;
    u[t] = n.map((e) => new o.Z(e));
}
function p(e) {
    let { guildId: t } = e;
    u[t] = [];
}
function h() {
    d++;
}
function m() {
    d--;
}
function g(e) {
    let { autoOpen: t } = e;
    f = t;
}
function E(e) {
    var t;
    let { guildId: n } = e;
    c[n] = (null != (t = c[n]) ? t : 0) + 1;
}
function b(e) {
    let { guildId: t, emojiId: n } = e;
    u[t] = u[t].filter((e) => e.id !== n);
}
class y extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z);
    }
    isUploadingEmoji() {
        return d > 0;
    }
    getEmojiRevision(e) {
        var t;
        return null != (t = c[e]) ? t : 0;
    }
    getEmojis(e) {
        return u[e];
    }
    getEmojiFileInputAutoOpen() {
        return f;
    }
}
l(y, "displayName", "GuildSettingsEmojiStore");
let O = new y(a.Z, {
    EMOJI_DELETE: b,
    EMOJI_FETCH_SUCCESS: _,
    EMOJI_FETCH_FAILURE: p,
    EMOJI_UPLOAD_START: h,
    EMOJI_UPLOAD_STOP: m,
    EMOJI_FILE_INPUT_AUTO_OPEN: g,
    GUILD_EMOJIS_UPDATE: E,
});
