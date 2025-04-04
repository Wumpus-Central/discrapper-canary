n.d(t, { Z: () => h }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120), n(653041);
var r = n(147913),
    i = n(339085),
    o = n(592125),
    a = n(768581),
    s = n(176354),
    l = n(176505),
    c = n(149203);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = new Worker(new URL('/assets/' + n.u('80493'), n.b));
function f(e) {
    return new Promise((t) => {
        let n = (r) => {
            let {
                data: { url: i }
            } = r;
            null == d || d.removeEventListener('message', n), e === i && t();
        };
        null == d || d.addEventListener('message', n), null == d || d.postMessage({ url: e });
    });
}
function _(e) {
    let t = [],
        n = e.defaultReactionEmoji;
    if ((null == n ? void 0 : n.emojiId) != null) {
        var r, o;
        t.push(
            a.ZP.getEmojiURL({
                id: n.emojiId,
                animated: null != (o = null == (r = i.ZP.getUsableCustomEmojiById(n.emojiId)) ? void 0 : r.animated) && o,
                size: c.kV.reaction
            })
        );
    } else (null == n ? void 0 : n.emojiName) != null && t.push(s.ZP.getURL(n.emojiName));
    return (
        e.availableTags.forEach((e) => {
            null != e.emojiId
                ? t.push(
                      a.ZP.getEmojiURL({
                          id: e.emojiId,
                          animated: !1,
                          size: c.kV.reaction
                      })
                  )
                : null != e.emojiName && t.push(s.ZP.getURL(e.emojiName));
        }),
        t
    );
}
class p extends r.Z {
    handleChannelPreload(e) {
        let { channelId: t } = e;
        if ((0, l.AB)(t)) return;
        let n = o.Z.getChannel(t);
        null != n &&
            n.isForumLikeChannel() &&
            _(n).forEach((e) => {
                null != e && 0 !== e.length && f(e);
            });
    }
    constructor(...e) {
        super(...e), u(this, 'actions', { CHANNEL_PRELOAD: this.handleChannelPreload });
    }
}
let h = new p();
