"use strict";
n.d(t, { A: () => M });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(837381),
    a = n(311907),
    o = n(827734),
    c = n(435371),
    d = n(397927),
    u = n(901517),
    h = n(397244),
    A = n(714114),
    p = n(729551),
    g = n(58149),
    m = n(571694),
    _ = n(47167),
    f = n(713654),
    x = n(915089),
    C = n(263063),
    E = n(616356),
    I = n(734057),
    b = n(71393),
    N = n(290863),
    S = n(222823),
    T = n(287809),
    v = n(147925),
    y = n(652215),
    j = n(985018),
    R = n(386590);
let O = { top: 8, bottom: 8, left: -4, right: -4 };
function L(e) {
    let { channelState: t, toggle: n, getNumUnreadChannels: s } = e;
    return (0, i.jsx)(c.m_, {
        text: j.intl.string(j.t.iTcuma),
        children: (0, i.jsx)(d.DUT, {
            className: l()(R.cS, { [R.yZ]: t?.collapsed }),
            onClick: function () {
                null != t &&
                    null != n &&
                    (n(t),
                    (0, g.zV)(y.HAw.INBOX_CHANNEL_COLLAPSED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        num_unread_channels_remaining: s?.() ?? 0,
                        is_now_collapsed: !t.collapsed,
                    }));
            },
            children: (0, i.jsx)(v.A, { width: 16, height: 16 }),
        }),
    });
}
function M(e) {
    let {
            channel: t,
            children: n,
            gotoChannel: s,
            mentionCount: a,
            channelState: o,
            toggleCollapsed: c,
            showCollapseButton: u = !1,
            getNumUnreadChannels: h,
        } = e,
        A = (0, r.rm)(`recents-header-${t.id}-${(0, x.GV)()}`),
        p = u && !t.isNSFW() && null != o && "nsfw" !== o.type;
    return (0, i.jsx)(d.vN3, {
        offset: O,
        children: (0, i.jsxs)("div", {
            className: l()(R.ZO, { [R.b4]: p }),
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
                p && null != o ? (0, i.jsx)(L, { channelState: o, toggle: c, getNumUnreadChannels: h }) : null,
                (0, i.jsx)(D, { channel: t, gotoChannel: s }),
                (0, i.jsx)(P, { channel: t, gotoChannel: s, mentionCount: a }),
                n,
            ],
        }),
    });
}
function D(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, i.jsx)(G, { channel: t, gotoChannel: n })
        : (0, i.jsx)(U, { channel: t, gotoChannel: n });
}
function G(e) {
    let { channel: t, gotoChannel: n } = e,
        s = (0, a.bG)([T.default], () => (t.isDM() ? T.default.getUser(t.getRecipientId()) : null)),
        l = null == s ? (0, m.Y)(t) : s.getAvatarURL(void 0, 40);
    return (0, i.jsx)(d.DUT, {
        onClick: n,
        tabIndex: -1,
        children: (0, i.jsx)("img", { className: R.ro, src: l, alt: "", "aria-hidden": !0 }),
    });
}
function U(e) {
    let { channel: t, gotoChannel: n } = e,
        s = (0, a.bG)([b.A], () => b.A.getGuild(t.guild_id));
    return null == s
        ? null
        : (0, i.jsx)(C.A, {
              "aria-hidden": !0,
              className: R.$f,
              guild: s,
              size: C.A.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1,
          });
}
function P(e) {
    let { channel: t, gotoChannel: n, mentionCount: s } = e,
        r = (0, a.bG)([b.A], () => b.A.getGuild(t.guild_id)),
        c = (0, a.bG)([I.A], () => I.A.getChannel(t.parent_id)),
        u = (0, a.bG)([S.Ay], () => S.Ay.getIsMentionLowImportance(t.id)),
        h = (0, f.gU)(t, r),
        A = (0, _.Ay)(t, !1),
        p = null == c ? r?.name : `${r?.name} › ${c.name}`,
        g = t.isMultiUserDM()
            ? j.intl.formatToPlainString(j.t.CxSA5N, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, i.jsx)(w, { channel: t })
              : (0, i.jsx)(d.DUT, { className: l()(R.W$, R.J5), onClick: n, children: p });
    return (0, i.jsxs)("div", {
        className: R.yP,
        children: [
            (0, i.jsx)(d.Heading, {
                variant: "heading-md/semibold",
                className: R.un,
                children: (0, i.jsxs)(d.DUT, {
                    className: R.HA,
                    onClick: n,
                    children: [
                        t.isThread() || t.isGroupDM() || null == h
                            ? null
                            : (0, i.jsx)(h, {
                                  className: t.isForumLikeChannel() ? R.dj : void 0,
                                  width: 18,
                                  height: 18,
                                  size: "custom",
                                  color: "currentColor",
                              }),
                        (0, i.jsx)("span", { className: R.je, children: A }),
                        null != s && s > 0
                            ? (0, i.jsx)("div", {
                                  className: R.qS,
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
            (0, i.jsx)(d.Text, { color: "text-default", variant: "text-xs/normal", className: R.PL, children: g }),
        ],
    });
}
function w(e) {
    let { channel: t } = e,
        {
            user: n,
            status: s,
            activities: l,
            applicationStream: r,
        } = (0, a.cf)([T.default, N.A, E.A], () => {
            let e = T.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? N.A.getStatus(e.id) : null,
                activities: null != e ? N.A.getActivities(e.id) : null,
                applicationStream: null != e ? E.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceActivityStatusEnabled: o } = (0, u.G)({ location: "RecentsChannelHeader" }),
        { voiceChannel: c } = (0, A.A)({ userId: n?.id }),
        d = o ? c : void 0;
    return (0, h.A)({ activities: l, status: s, applicationStream: r, voiceChannel: d })
        ? (0, i.jsx)(p.A, { user: n, activities: l, applicationStream: r, voiceChannel: d, hideTooltip: !0 })
        : null;
}
