r.d(n, {
    Z: function () {
        return y;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(239091),
    s = r(287734),
    l = r(364640),
    u = r(754688),
    c = r(336197),
    d = r(124072),
    f = r(692629),
    p = r(131704),
    h = r(592125),
    _ = r(430824),
    m = r(900849),
    g = r(746878),
    E = r(981631);
async function v(e, n, r) {
    if (null == n) return;
    if (
        (l.Z.trackDiscordLinkClicked({
            guildId: e,
            channelId: n,
            messageId: r
        }),
        null != e)
    ) {
        let r = _.Z.getGuild(e);
        if ((null == r ? void 0 : r.joinedAt) == null)
            try {
                await m.Ub(e, {}, { channelId: n });
                return;
            } catch {}
    }
    let i = h.Z.getChannel(n);
    if (null != i && null == r && (0, p.bw)(i.type) && (0, u.YO)(i)) {
        s.default.selectVoiceChannel(i.id);
        return;
    }
    (0, c.Z)(E.Z5c.CHANNEL(e, n, r));
}
function y(e) {
    return {
        react(n, s, l) {
            let u = h.Z.getChannel(n.channelId),
                c = l.noStyleAndInteraction
                    ? void 0
                    : (r) => {
                          e.shouldStopPropagation && (null == r || r.stopPropagation()), v(n.guildId, n.channelId, n.messageId), e.shouldCloseDefaultModals && (0, a.closeAllModals)();
                      },
                p =
                    l.noStyleAndInteraction || null == n.channelId || (null == u && null == n.originalLink)
                        ? E.dG4
                        : (e) => {
                              (0, o.jW)(e, async () => {
                                  let { default: e } = await r.e('9573').then(r.bind(r, 546649));
                                  return (r) => {
                                      var a;
                                      return (0, i.jsx)(e, {
                                          ...r,
                                          channel: u,
                                          channelId: null !== (a = null == u ? void 0 : u.id) && void 0 !== a ? a : n.channelId,
                                          originalLink: n.originalLink,
                                          messageId: n.messageId
                                      });
                                  };
                              });
                          };
            return (0, i.jsxs)(
                d.Z,
                {
                    role: 'link',
                    onClick: c,
                    onContextMenu: p,
                    className: 'channelMention',
                    children: [null != n.inContent ? s(n.inContent, l) : null, null != n.inContent ? (0, i.jsx)(f.Z, {}) : null, (0, g.S)(n, s, l)]
                },
                l.key
            );
        }
    };
}
