t.d(n, {
    d: () => D,
    p: () => M,
}),
    t(388685),
    t(35282);
var r = t(54381),
    l = t(473749),
    c = t(442837),
    a = t(481060),
    i = t(239091),
    o = t(287734),
    s = t(627050),
    u = t(66999),
    d = t(364640),
    h = t(754688),
    j = t(336197),
    m = t(69626),
    f = t(779699),
    p = t(797874),
    x = t(359875),
    v = t(124072),
    g = t(891984),
    b = t(644956),
    y = t(819366),
    I = t(488968),
    O = t(131704),
    w = t(592125),
    Z = t(485386),
    k = t(430824),
    P = t(934415),
    C = t(823379),
    N = t(900849),
    E = t(981631),
    S = t(689079),
    T = t(388032);
async function _(e, n, t) {
    if (null == n) return;
    if (
        (d.Z.trackDiscordLinkClicked({
            guildId: e,
            channelId: n,
            messageId: t,
        }),
        null != e)
    ) {
        let r = k.Z.getGuild(e);
        if ((null == r ? void 0 : r.joinedAt) == null)
            try {
                await N.Ub(
                    e,
                    {},
                    {
                        channelId: n,
                        messageId: t,
                    },
                );
                return;
            } catch (e) {}
    }
    let r = w.Z.getChannel(n);
    if (null != r && null == t && (0, O.bw)(r.type) && (0, h.YO)(r)) return void o.default.selectVoiceChannel(r.id);
    (0, j.Z)(E.Z5c.CHANNEL(e, n, t));
}
function M(e) {
    let { type: n, value: t } = e;
    switch (n) {
        case "channel":
            return (0, r.jsx)(D, { channelId: t });
        case "user":
            return (0, r.jsx)(L, { id: t });
        case "role":
            return (0, r.jsx)(Y, { id: t });
        case "everyone":
            return (0, r.jsx)(G, { roleName: "@everyone" });
        case "here":
            return (0, r.jsx)(G, { roleName: "@here" });
        case "game":
            return (0, r.jsx)(F, { id: t });
        case "command":
            return (0, r.jsx)(q, {
                id: t.id,
                name: t.name,
            });
    }
    (0, C.vE)(n);
}
function D(e) {
    let { channelId: n, guildId: l, messageId: o } = e,
        s = (0, u.Z)(n),
        {
            name: d,
            iconType: j,
            isForumPost: m,
            hasAccess: p,
        } = (0, c.cj)([w.Z], () => {
            let e = w.Z.getChannel(n);
            return {
                name: null == e ? void 0 : e.name,
                iconType: (0, P.wl)(e),
                isForumPost: null == e ? void 0 : e.isForumPost(),
                hasAccess: null == e || (0, h.YO)(e),
            };
        }, [n]),
        x = (0, I.d)();
    if (null == j) return;
    let b = l === (null == x ? void 0 : x.guildId) || null == l,
        y =
            p || s.isSubscriptionGated
                ? b || null == d
                    ? (0, r.jsx)(f.Z, {
                          iconType: j,
                          children: null != d ? d : (0, r.jsx)("em", { children: T.intl.string(T.t.J90oLW) }),
                      })
                    : (0, r.jsx)(H, {
                          guildId: l,
                          children: d,
                      })
                : (0, r.jsx)(f.Z, {
                      iconType: "locked",
                      children: T.intl.string(T.t["/YzI63"]),
                  }),
        O = null;
    return (
        null != o &&
            (O = (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(g.Z, {}), (0, r.jsx)(f.Z, { iconType: m ? "post" : "message" })],
            })),
        (0, r.jsxs)(v.Z, {
            role: "link",
            onClick: (e) => {
                null == e || e.stopPropagation(), _(l, n, o), (0, a.pTH)();
            },
            onContextMenu: (e) => {
                let l = w.Z.getChannel(n);
                (0, i.jW)(e, async () => {
                    let { default: e } = await t.e("9573").then(t.bind(t, 546649));
                    return (t) => {
                        var c, a, i;
                        return (0, r.jsx)(
                            e,
                            ((a = (function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = null != arguments[n] ? arguments[n] : {},
                                        r = Object.keys(t);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (n) {
                                            var r;
                                            (r = t[n]),
                                                n in e
                                                    ? Object.defineProperty(e, n, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[n] = r);
                                        });
                                }
                                return e;
                            })({}, t)),
                            (i = i =
                                {
                                    channel: l,
                                    channelId: null != (c = null == l ? void 0 : l.id) ? c : n,
                                    originalLink: null,
                                    messageId: o,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
                                : (function (e, n) {
                                      var t = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          t.push.apply(t, r);
                                      }
                                      return t;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            a),
                        );
                    };
                });
            },
            className: "channelMention",
            children: [y, O],
        })
    );
}
function H(e) {
    let { guildId: n, children: t } = e,
        l = (0, c.e7)([k.Z], () => k.Z.getGuild(n), [n]);
    return (0, r.jsxs)(x.Z, {
        guild: l,
        children: [null == l ? void 0 : l.name, null != l ? (0, r.jsx)(g.Z, {}) : null, t],
    });
}
function L(e) {
    let { id: n } = e,
        t = (0, I.d)();
    return (0, r.jsx)(y.Z, {
        className: "mention",
        userId: n,
        channelId: null == t ? void 0 : t.channelId,
        viewingChannelId: null == t ? void 0 : t.viewingChannelId,
        parsedUserId: n,
        content: "<@".concat(n, ">"),
    });
}
function Y(e) {
    let { id: n } = e,
        t = (0, I.d)(),
        l = null == t ? void 0 : t.guildId,
        a = (0, c.e7)([Z.Z], () => {
            var e, t;
            return null != (t = null != l ? (null == (e = Z.Z.getRole(l, n)) ? void 0 : e.name) : null)
                ? t
                : T.intl.string(T.t.sKdZ6U);
        }, [l, n]);
    return (0, r.jsx)(b.Z, {
        roleId: n,
        channelId: null == t ? void 0 : t.channelId,
        guildId: null == t ? void 0 : t.guildId,
        children: "@".concat(a),
    });
}
function F(e) {
    let { id: n } = e,
        t = (0, I.d)();
    return s.d.useExperiment({ location: "native markdown" }).enabled
        ? (0, r.jsx)(p.Z, {
              gameId: n,
              channelId: null == t ? void 0 : t.channelId,
          })
        : (0, r.jsx)("span", { children: "<@$".concat(n, ">") });
}
function G(e) {
    let { roleName: n } = e,
        t = (0, I.d)();
    return (0, r.jsx)(b.Z, {
        roleName: n,
        channelId: null == t ? void 0 : t.channelId,
        guildId: null == t ? void 0 : t.guildId,
        children: n,
    });
}
function q(e) {
    let { id: n, name: t } = e,
        c = (0, I.d)(),
        a = l.useMemo(() => {
            let [, ...e] = t.split(" ");
            return "".concat(n).concat([...e].map((e) => "".concat(S.oQ).concat(e)).join(""));
        }, [n, t]),
        i = l.useMemo(
            () => ({
                type: "commandMention",
                channelId: null == c ? void 0 : c.channelId,
                commandId: n,
                commandName: t,
                commandKey: a,
            }),
            [null == c ? void 0 : c.channelId, a, n, t],
        );
    return (0, r.jsx)(m.Wf, {
        node: i,
        children: t,
    });
}
