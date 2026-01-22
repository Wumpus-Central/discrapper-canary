n.d(t, { A: () => v });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(442433),
    s = n(956793),
    o = n(235393),
    l = n(376943),
    c = n(22007),
    u = n(332173),
    d = n(37632),
    f = n(95701),
    p = n(734057),
    _ = n(71393),
    h = n(449054),
    m = n(365526),
    g = n(652215);
function E(e, t, n) {
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
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function A(e, t, n) {
    if (null == t) return;
    if (
        (o.A.trackDiscordLinkClicked({
            guildId: e,
            channelId: t,
            messageId: n,
        }),
        null != e)
    ) {
        let r = _.A.getGuild(e);
        if ((null == r ? void 0 : r.joinedAt) == null)
            try {
                await h.Z2(
                    e,
                    {},
                    {
                        channelId: t,
                        messageId: n,
                    },
                );
                return;
            } catch (e) {}
    }
    let r = p.A.getChannel(t);
    null != r && null == n && (0, f.ay)(r.type) && (0, l.nc)(r)
        ? s.default.selectVoiceChannel(r.id)
        : (0, c.A)(g.BVt.CHANNEL(e, t, n));
}
function v(e) {
    return {
        react(t, s, o) {
            let l = p.A.getChannel(t.channelId),
                c = o.noStyleAndInteraction
                    ? void 0
                    : (n) => {
                          e.shouldStopPropagation && (null == n || n.stopPropagation()),
                              A(t.guildId, t.channelId, t.messageId),
                              e.shouldCloseDefaultModals && (0, i.s7G)();
                      },
                f =
                    o.noStyleAndInteraction || null == t.channelId || (null == l && null == t.originalLink)
                        ? g.tEg
                        : (e) => {
                              (0, a.L3)(e, async () => {
                                  let { default: e } = await n.e("99041").then(n.bind(n, 612856));
                                  return (n) => {
                                      var i;
                                      return (0, r.jsx)(
                                          e,
                                          O(b({}, n), {
                                              channel: l,
                                              channelId: null != (i = null == l ? void 0 : l.id) ? i : t.channelId,
                                              originalLink: t.originalLink,
                                              messageId: t.messageId,
                                          }),
                                      );
                                  };
                              });
                          };
            return (0, r.jsxs)(
                u.A,
                {
                    role: "link",
                    onClick: c,
                    onContextMenu: f,
                    className: "channelMention",
                    children: [
                        null != t.inContent ? s(t.inContent, o) : null,
                        null != t.inContent ? (0, r.jsx)(d.A, {}) : null,
                        (0, m.t)(t, s, o),
                    ],
                },
                o.key,
            );
        },
    };
}
