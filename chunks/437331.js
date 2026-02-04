n.d(t, {
    V: () => D,
});
var l = n(627968),
    r = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(47167),
    o = n(713654),
    u = n(941971),
    c = n(309632),
    d = n(734057),
    h = n(71393),
    g = n(290863),
    f = n(222823),
    p = n(287809),
    I = n(914853),
    m = n(1404),
    E = n(102983),
    A = n(578093),
    y = n(912156),
    S = n(67103),
    v = n(576420),
    O = n(549866),
    b = n(336148),
    N = n(783346);

function T(e) {
    return (0, l.jsx)(s.hVq, {
        count: e,
    });
}

function _(e) {
    var t, n;
    let { channelId: r, listItemId: i, mentionCount: o, unread: c } = e,
        h = null != (t = (0, a.Ay)(null != (n = d.A.getChannel(r)) ? n : void 0, !0)) ? t : "???";
    return (0, l.jsx)(m.D, {
        listItemId: i,
        leftIndicator: (0, l.jsx)(u.A, {
            unread: c,
        }),
        avatar: (0, l.jsx)(s.euF, {
            src: void 0,
            "aria-hidden": !0,
            size: s._3J.SIZE_32,
        }),
        primaryText: (0, l.jsx)("span", {
            children: (0, l.jsx)(s.Text, {
                className: N.Xh,
                variant: "text-sm/medium",
                color: "text-muted",
                children: h,
            }),
        }),
        rightActions: () => (o > 0 ? T(o) : null),
    });
}

function C(e) {
    var t;
    let {
            channel: n,
            listItemId: o,
            mentionCount: d,
            isMentionLowImportance: h,
            unread: f,
            onPrimaryAction: y,
            onContextMenu: v,
        } = e,
        _ = n.id,
        C = null != (t = (0, a.Ay)(n, !1)) ? t : "???",
        x = (0, b.X)(n),
        D = (0, c.A)(n, !1),
        {
            user: M,
            status: j,
            isMobile: w,
        } = (0, i.cf)([p.default, g.A], () => {
            if (!n.isDM())
                return {
                    user: null,
                    status: null,
                    isMobile: !1,
                };
            let e = n.getRecipientId(),
                t = null != e ? p.default.getUser(e) : null;
            return {
                user: t,
                status: null != e ? g.A.getStatus(e) : null,
                isMobile: null != e && g.A.isMobileOnline(e),
            };
        }, [n]),
        P = r.useCallback(
            (e) => {
                let t = n.isMultiUserDM() ? S.K.GROUP_DM_CHANNEL : S.K.DM_CHANNEL;
                null == v ||
                    v({
                        type: t,
                        event: e,
                        channel: n,
                        user: null != M ? M : void 0,
                    });
            },
            [n, v, M],
        ),
        R = n.isMultiUserDM() || (n.isPrivate() && n.recipients.length >= 2),
        U = r.useCallback(() => {
            null == y ||
                y({
                    type: S.c.OPEN_TEXT_CHAT_CHANNEL,
                    channelId: _,
                    guildId: null,
                });
        }, [_, y]);
    return (0, l.jsx)(m.D, {
        listItemId: o,
        leftIndicator: (0, l.jsx)(u.A, {
            unread: f,
        }),
        onClick: U,
        onContextMenu: P,
        avatar: (0, l.jsx)(E.h, {
            channel: n,
            user: M,
            "aria-hidden": !0,
            size: s._3J.SIZE_32,
            status: j,
            isMobile: w,
            isTyping: x,
            mentionCount: d,
            isMentionLowImportance: h,
        }),
        primaryText: (0, l.jsx)("div", {
            className: N.QV,
            children: (0, l.jsx)(s.Text, {
                className: N.Xh,
                variant: "text-sm/medium",
                color: f || d > 0 ? "text-strong" : "text-muted",
                children: C,
            }),
        }),
        secondaryText:
            null != D
                ? (0, l.jsx)(s.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: (0, l.jsx)(O.b, {
                          channel: n,
                          message: D,
                      }),
                  })
                : null,
        rightActions: (e) =>
            (0, l.jsxs)(l.Fragment, {
                children: [
                    d > 0 ? T(d) : null,
                    e && R
                        ? (0, l.jsx)(A.j, {
                              tab: I.x.MESSAGES,
                              targetId: _,
                          })
                        : null,
                ],
            }),
    });
}

function x(e) {
    var t, n, d;
    let g,
        {
            channel: f,
            listItemId: p,
            mentionCount: E,
            unread: v,
            recentlyAddedTimestampMs: _,
            onPrimaryAction: C,
            onContextMenu: x,
        } = e,
        D = f.id,
        M = null != (t = null == (d = f.getGuildId) ? void 0 : d.call(f)) ? t : null,
        j = (0, i.bG)([h.A], () => {
            var e;
            return null != M && null != (e = h.A.getGuild(M)) ? e : null;
        }, [M]),
        w = null != (n = (0, a.Ay)(f, !1)) ? n : "???",
        P = (0, b.X)(f),
        R = (0, c.A)(f, !1),
        U = (0, s.rdh)(s.LU0.colors.TEXT_STRONG),
        G = (0, s.rdh)(s.LU0.colors.TEXT_MUTED),
        L = v || E > 0 ? "text-strong" : "text-muted",
        k = v || E > 0 ? U : G,
        F = r.useCallback(
            (e) => {
                null == x ||
                    x({
                        type: S.K.GUILD_TEXT_CHANNEL,
                        event: e,
                        channel: f,
                        guild: j,
                    });
            },
            [f, j, x],
        ),
        V = r.useCallback(() => {
            null == C ||
                C({
                    type: S.c.OPEN_TEXT_CHAT_CHANNEL,
                    channelId: D,
                    guildId: M,
                });
        }, [D, M, C]);
    return (0, l.jsx)(m.D, {
        listItemId: p,
        recentlyAddedTimestampMs: _,
        leftIndicator: (0, l.jsx)(u.A, {
            unread: v,
        }),
        onClick: V,
        onContextMenu: F,
        avatar: (0, l.jsx)(y.A, {
            channel: f,
            guild: null != j ? j : void 0,
            size: y.Q.SMALL_32,
            isTyping: P,
        }),
        primaryText: (0, l.jsxs)("div", {
            className: N.QV,
            children: [
                null == (g = (0, o.gU)(f, j))
                    ? null
                    : (0, l.jsx)(g, {
                          color: k.hex(),
                          size: "xxs",
                          className: N.p,
                      }),
                (0, l.jsx)(s.Text, {
                    className: N.Xh,
                    variant: "text-sm/medium",
                    color: L,
                    children: w,
                }),
            ],
        }),
        secondaryText:
            null != R
                ? (0, l.jsx)(s.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: (0, l.jsx)(O.b, {
                          channel: f,
                          message: R,
                      }),
                  })
                : null,
        rightActions: (e) =>
            (0, l.jsxs)(l.Fragment, {
                children: [
                    E > 0 ? T(E) : null,
                    e
                        ? (0, l.jsx)(A.j, {
                              tab: I.x.MESSAGES,
                              targetId: D,
                          })
                        : null,
                ],
            }),
    });
}

function D(e) {
    let { channelId: t, listItemId: n, shouldHighlightIfRecentlyAdded: r, onPrimaryAction: s, onContextMenu: a } = e,
        o = (0, i.bG)([d.A], () => d.A.getChannel(t), [t]),
        {
            mentionCount: u,
            unread: c,
            isMentionLowImportance: h,
        } = (0, i.cf)(
            [f.Ay],
            () => ({
                mentionCount: f.Ay.getMentionCount(t),
                isMentionLowImportance: f.Ay.getIsMentionLowImportance(t),
                unread: f.Ay.hasUnread(t),
            }),
            [t],
        ),
        g = (0, v.A2)(t);
    return null == o
        ? (0, l.jsx)(_, {
              channelId: t,
              listItemId: n,
              mentionCount: u,
              unread: c,
          })
        : o.isPrivate()
          ? (0, l.jsx)(C, {
                channel: o,
                listItemId: n,
                mentionCount: u,
                isMentionLowImportance: h,
                unread: c,
                onPrimaryAction: s,
                onContextMenu: a,
            })
          : (0, l.jsx)(x, {
                channel: o,
                listItemId: n,
                mentionCount: u,
                unread: c,
                recentlyAddedTimestampMs: r ? g : null,
                onPrimaryAction: s,
                onContextMenu: a,
            });
}
