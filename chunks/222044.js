n.d(t, { Z: () => h }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120), n(653041);
var i = n(147913),
    r = n(339085),
    a = n(592125),
    s = n(768581),
    o = n(176354),
    l = n(176505),
    u = n(149203);
function c(e, t, n) {
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
        let n = (i) => {
            let {
                data: { url: r }
            } = i;
            null == d || d.removeEventListener('message', n), e === r && t();
        };
        null == d || d.addEventListener('message', n), null == d || d.postMessage({ url: e });
    });
}
function _(e) {
    let t = [],
        n = e.defaultReactionEmoji;
    if ((null == n ? void 0 : n.emojiId) != null) {
        var i, a;
        t.push(
            s.ZP.getEmojiURL({
                id: n.emojiId,
                animated: null !== (a = null === (i = r.ZP.getUsableCustomEmojiById(n.emojiId)) || void 0 === i ? void 0 : i.animated) && void 0 !== a && a,
                size: u.kV.reaction
            })
        );
    } else (null == n ? void 0 : n.emojiName) != null && t.push(o.ZP.getURL(n.emojiName));
    return (
        e.availableTags.forEach((e) => {
            null != e.emojiId
                ? t.push(
                      s.ZP.getEmojiURL({
                          id: e.emojiId,
                          animated: !1,
                          size: u.kV.reaction
                      })
                  )
                : null != e.emojiName && t.push(o.ZP.getURL(e.emojiName));
        }),
        t
    );
}
class p extends i.Z {
    handleChannelPreload(e) {
        let { channelId: t } = e;
        if ((0, l.AB)(t)) return;
        let n = a.Z.getChannel(t);
        null != n &&
            n.isForumLikeChannel() &&
            _(n).forEach((e) => {
                null != e && 0 !== e.length && f(e);
            });
    }
    constructor(...e) {
        super(...e), c(this, 'actions', { CHANNEL_PRELOAD: this.handleChannelPreload });
    }
}
let h = new p();
