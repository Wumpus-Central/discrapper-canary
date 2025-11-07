n.d(t, { Z: () => A });
var r,
    i = n(31775),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(40572),
    c = n(914010),
    u = n(70956);
function d(e, t, n) {
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
let f = {},
    _ = {},
    p = 0,
    h = !1,
    m = new (a())({
        max: 5,
        maxAge: u.Z.Millis.HOUR,
    });
function g(e) {
    let { guildId: t, emojis: n } = e;
    _[t] = n.map((e) => new l.Z(e));
}
function E(e) {
    let { guildId: t } = e;
    _[t] = [];
}
function b() {
    p++;
}
function y() {
    p--;
}
function O(e) {
    let { autoOpen: t } = e;
    h = t;
}
function v(e) {
    var t;
    let { guildId: n } = e;
    f[n] = (null != (t = f[n]) ? t : 0) + 1;
}
function I(e) {
    let { guildId: t, emojiId: n } = e;
    _[t] = _[t].filter((e) => e.id !== n);
}
function S(e) {
    let { emojiId: t, userImage: n } = e;
    m.set(t, n);
}
class T extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    isUploadingEmoji() {
        return p > 0;
    }
    getEmojiRevision(e) {
        var t;
        return null != (t = f[e]) ? t : 0;
    }
    getEmojis(e) {
        return _[e];
    }
    getEmojiFileInputAutoOpen() {
        return h;
    }
    getEmojiRawAsset(e) {
        return m.get(e);
    }
}
d(T, "displayName", "GuildSettingsEmojiStore");
let A = new T(s.Z, {
    EMOJI_DELETE: I,
    EMOJI_FETCH_SUCCESS: g,
    EMOJI_FETCH_FAILURE: E,
    EMOJI_UPLOAD_START: b,
    EMOJI_UPLOAD_STOP: y,
    EMOJI_FILE_INPUT_AUTO_OPEN: O,
    EMOJI_CACHE_RAW_EMOJI_ASSET: S,
    GUILD_EMOJIS_UPDATE: v,
});
