t.d(n, {
    A: () => L,
    P: () => _,
}),
    t(896048),
    t(747238);
var r = t(627968),
    l = t(64700),
    c = t(311907),
    a = t(397927),
    i = t(442433),
    s = t(956793),
    o = t(352505),
    u = t(721592),
    d = t(235393),
    h = t(376943),
    m = t(22007),
    j = t(990474),
    p = t(232042),
    f = t(31995),
    x = t(906754),
    g = t(332173),
    v = t(37632),
    y = t(593284),
    b = t(288539),
    I = t(78377),
    A = t(95701),
    O = t(734057),
    k = t(317525),
    w = t(71393),
    P = t(147036),
    N = t(403362),
    C = t(449054),
    E = t(652215),
    S = t(73510),
    D = t(985018);
async function T(e, n, t) {
    if (null == n) return;
    if (
        (d.A.trackDiscordLinkClicked({
            guildId: e,
            channelId: n,
            messageId: t,
        }),
        null != e)
    ) {
        let r = w.A.getGuild(e);
        if ((null == r ? void 0 : r.joinedAt) == null)
            try {
                await C.Z2(
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
    let r = O.A.getChannel(n);
    null != r && null == t && (0, A.ay)(r.type) && (0, h.nc)(r)
        ? s.default.selectVoiceChannel(r.id)
        : (0, m.A)(E.BVt.CHANNEL(e, n, t));
}

function _(e) {
    let { type: n, value: t } = e;
    switch (n) {
        case "channel":
            return (0, r.jsx)(L, {
                channelId: t,
            });
        case "user":
            return (0, r.jsx)(G, {
                id: t,
            });
        case "role":
            return (0, r.jsx)(M, {
                id: t,
            });
        case "everyone":
            return (0, r.jsx)(F, {
                roleName: "@everyone",
            });
        case "here":
            return (0, r.jsx)(F, {
                roleName: "@here",
            });
        case "game":
            return (0, r.jsx)(H, {
                id: t,
            });
        case "command":
            return (0, r.jsx)(U, {
                id: t.id,
                name: t.name,
            });
    }
    (0, N.xb)(n);
}

function L(e) {
    let { channelId: n, guildId: l, messageId: s } = e,
        o = (0, u.A)(n),
        {
            name: d,
            iconType: m,
            isForumPost: j,
            hasAccess: f,
        } = (0, c.cf)([O.A], () => {
            let e = O.A.getChannel(n);
            return {
                name: null == e ? void 0 : e.name,
                iconType: (0, P.QG)(e),
                isForumPost: null == e ? void 0 : e.isForumPost(),
                hasAccess: null == e || (0, h.nc)(e),
            };
        }, [n]),
        x = (0, I.p)();
    if (null == m) return;
    let y = l === (null == x ? void 0 : x.guildId) || null == l,
        b =
            f || o.isSubscriptionGated
                ? y || null == d
                    ? (0, r.jsx)(p.A, {
                          iconType: m,
                          children:
                              null != d
                                  ? d
                                  : (0, r.jsx)("em", {
                                        children: D.intl.string(D.t.J90oLW),
                                    }),
                      })
                    : (0, r.jsx)(z, {
                          guildId: l,
                          children: d,
                      })
                : (0, r.jsx)(p.A, {
                      iconType: "locked",
                      children: D.intl.string(D.t["/YzI63"]),
                  }),
        A = null;
    return (
        null != s &&
            (A = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(v.A, {}),
                    (0, r.jsx)(p.A, {
                        iconType: j ? "post" : "message",
                    }),
                ],
            })),
        (0, r.jsxs)(g.A, {
            role: "link",
            onClick: (e) => {
                null == e || e.stopPropagation(), T(l, n, s), (0, a.s7G)();
            },
            onContextMenu: (e) => {
                let l = O.A.getChannel(n);
                (0, i.L3)(e, async () => {
                    let { default: e } = await t.e("99041").then(t.bind(t, 612856));
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
                                    messageId: s,
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
            children: [b, A],
        })
    );
}

function z(e) {
    let { guildId: n, children: t } = e,
        l = (0, c.bG)([w.A], () => w.A.getGuild(n), [n]);
    return (0, r.jsxs)(x.A, {
        guild: l,
        children: [null == l ? void 0 : l.name, null != l ? (0, r.jsx)(v.A, {}) : null, t],
    });
}

function G(e) {
    let { id: n } = e,
        t = (0, I.p)();
    return (0, r.jsx)(b.A, {
        className: "mention",
        userId: n,
        channelId: null == t ? void 0 : t.channelId,
        viewingChannelId: null == t ? void 0 : t.viewingChannelId,
        parsedUserId: n,
        content: "<@".concat(n, ">"),
    });
}

function M(e) {
    let { id: n } = e,
        t = (0, I.p)(),
        l = null == t ? void 0 : t.guildId,
        a = (0, c.bG)([k.A], () => {
            var e, t;
            return null != (e = null != l ? (null == (t = k.A.getRole(l, n)) ? void 0 : t.name) : null)
                ? e
                : D.intl.string(D.t.sKdZ6U);
        }, [l, n]);
    return (0, r.jsx)(y.A, {
        roleId: n,
        channelId: null == t ? void 0 : t.channelId,
        guildId: null == t ? void 0 : t.guildId,
        children: "@".concat(a),
    });
}

function H(e) {
    let { id: n } = e,
        t = (0, I.p)();
    return o.m.useExperiment({
        location: "native markdown",
    }).enabled
        ? (0, r.jsx)(f.A, {
              gameId: n,
              channelId: null == t ? void 0 : t.channelId,
          })
        : (0, r.jsx)("span", {
              children: "<@$".concat(n, ">"),
          });
}

function F(e) {
    let { roleName: n } = e,
        t = (0, I.p)();
    return (0, r.jsx)(y.A, {
        roleName: n,
        channelId: null == t ? void 0 : t.channelId,
        guildId: null == t ? void 0 : t.guildId,
        children: n,
    });
}

function U(e) {
    let { id: n, name: t } = e,
        c = (0, I.p)(),
        a = l.useMemo(() => {
            let [, ...e] = t.split(" ");
            return "".concat(n).concat([...e].map((e) => "".concat(S.v4).concat(e)).join(""));
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
    return (0, r.jsx)(j.gn, {
        node: i,
        children: t,
    });
}
