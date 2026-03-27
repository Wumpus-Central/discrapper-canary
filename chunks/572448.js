"use strict";
n.d(t, { A: () => L });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(837381),
    r = n(311907),
    o = n(827734),
    c = n(435371),
    d = n(397927),
    u = n(397244),
    h = n(714114),
    A = n(729551),
    m = n(58149),
    _ = n(571694),
    p = n(47167),
    g = n(713654),
    f = n(915089),
    x = n(263063),
    E = n(616356),
    C = n(734057),
    I = n(71393),
    N = n(290863),
    b = n(222823),
    S = n(287809),
    T = n(147925),
    v = n(652215),
    y = n(985018),
    j = n(612005);
let R = { top: 8, bottom: 8, left: -4, right: -4 };
function O(e) {
    let { channelState: t, toggle: n, getNumUnreadChannels: s } = e;
    return (0, i.jsx)(c.m_, {
        text: y.intl.string(y.t.iTcuma),
        children: (0, i.jsx)(d.DUT, {
            className: l()(j.cS, { [j.yZ]: t?.collapsed }),
            onClick: function () {
                null != t &&
                    null != n &&
                    (n(t),
                    (0, m.zV)(v.HAw.INBOX_CHANNEL_COLLAPSED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        num_unread_channels_remaining: s?.() ?? 0,
                        is_now_collapsed: !t.collapsed,
                    }));
            },
            children: (0, i.jsx)(T.A, { width: 16, height: 16 }),
        }),
    });
}
function L(e) {
    let {
            channel: t,
            children: n,
            gotoChannel: s,
            mentionCount: r,
            channelState: o,
            toggleCollapsed: c,
            showCollapseButton: u = !1,
            getNumUnreadChannels: h,
        } = e,
        A = (0, a.rm)(`recents-header-${t.id}-${(0, f.GV)()}`),
        m = u && !t.isNSFW() && null != o && "nsfw" !== o.type;
    return (0, i.jsx)(d.vN3, {
        offset: R,
        children: (0, i.jsxs)("div", {
            className: l()(j.ZO, { [j.b4]: m }),
            ...A,
            tabIndex: 0,
            "data-recents-channel": t.id,
            onKeyDown: function (e) {
                null != c &&
                    null != o &&
                    (("ArrowRight" === e.key && o.collapsed) || ("ArrowLeft" === e.key && !o.collapsed)) &&
                    c?.(o);
            },
            children: [
                m && null != o ? (0, i.jsx)(O, { channelState: o, toggle: c, getNumUnreadChannels: h }) : null,
                (0, i.jsx)(M, { channel: t, gotoChannel: s }),
                (0, i.jsx)(U, { channel: t, gotoChannel: s, mentionCount: r }),
                n,
            ],
        }),
    });
}
function M(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, i.jsx)(D, { channel: t, gotoChannel: n })
        : (0, i.jsx)(G, { channel: t, gotoChannel: n });
}
function D(e) {
    let { channel: t, gotoChannel: n } = e,
        s = (0, r.bG)([S.default], () => (t.isDM() ? S.default.getUser(t.getRecipientId()) : null)),
        l = null == s ? (0, _.Y)(t) : s.getAvatarURL(void 0, 40);
    return (0, i.jsx)(d.DUT, {
        onClick: n,
        tabIndex: -1,
        children: (0, i.jsx)("img", { className: j.ro, src: l, alt: "", "aria-hidden": !0 }),
    });
}
function G(e) {
    let { channel: t, gotoChannel: n } = e,
        s = (0, r.bG)([I.A], () => I.A.getGuild(t.guild_id));
    return null == s
        ? null
        : (0, i.jsx)(x.Ay, {
              "aria-hidden": !0,
              className: j.$f,
              guild: s,
              size: x.Ay.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1,
          });
}
function U(e) {
    let { channel: t, gotoChannel: n, mentionCount: s } = e,
        a = (0, r.bG)([I.A], () => I.A.getGuild(t.guild_id)),
        c = (0, r.bG)([C.A], () => C.A.getChannel(t.parent_id)),
        u = (0, r.bG)([b.Ay], () => b.Ay.getIsMentionLowImportance(t.id)),
        h = (0, g.gU)(t, a),
        A = (0, p.Ay)(t, !1),
        m = null == c ? a?.name : `${a?.name} › ${c.name}`,
        _ = t.isMultiUserDM()
            ? y.intl.formatToPlainString(y.t.CxSA5N, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, i.jsx)(P, { channel: t })
              : (0, i.jsx)(d.DUT, { className: l()(j.W$, j.J5), onClick: n, children: m });
    return (0, i.jsxs)("div", {
        className: j.yP,
        children: [
            (0, i.jsx)(d.Heading, {
                variant: "heading-md/semibold",
                className: j.un,
                children: (0, i.jsxs)(d.DUT, {
                    className: j.HA,
                    onClick: n,
                    children: [
                        t.isThread() || t.isGroupDM() || null == h
                            ? null
                            : (0, i.jsx)(h, {
                                  className: t.isForumLikeChannel() ? j.dj : void 0,
                                  width: 18,
                                  height: 18,
                                  size: "custom",
                                  color: "currentColor",
                              }),
                        (0, i.jsx)("span", { className: j.je, children: A }),
                        null != s && s > 0
                            ? (0, i.jsx)("div", {
                                  className: j.qS,
                                  children: (0, i.jsx)(d.hVq, {
                                      count: s,
                                      color: u
                                          ? o.A.colors.BACKGROUND_MOD_STRONG.css
                                          : o.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, i.jsx)(d.Text, { color: "text-default", variant: "text-xs/normal", className: j.PL, children: _ }),
        ],
    });
}
function P(e) {
    let { channel: t } = e,
        {
            user: n,
            status: s,
            activities: l,
            applicationStream: a,
        } = (0, r.cf)([S.default, N.A, E.A], () => {
            let e = S.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? N.A.getStatus(e.id) : null,
                activities: null != e ? N.A.getActivities(e.id) : null,
                applicationStream: null != e ? E.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: o } = (0, h.A)({ userId: n?.id });
    return (0, u.A)({ activities: l, status: s, applicationStream: a, voiceChannel: o })
        ? (0, i.jsx)(A.A, { user: n, activities: l, applicationStream: a, voiceChannel: o, hideTooltip: !0 })
        : null;
}
