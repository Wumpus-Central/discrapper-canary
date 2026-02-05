n.d(t, { A: () => D });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(837381),
    r = n(311907),
    o = n(827734),
    d = n(435371),
    c = n(397927),
    u = n(901517),
    h = n(397244),
    A = n(714114),
    g = n(729551),
    m = n(58149),
    p = n(571694),
    _ = n(47167),
    x = n(713654),
    f = n(915089),
    E = n(263063),
    C = n(616356),
    I = n(734057),
    S = n(71393),
    b = n(290863),
    N = n(222823),
    T = n(287809),
    j = n(147925),
    v = n(652215),
    y = n(985018),
    R = n(386590);
let O = { top: 8, bottom: 8, left: -4, right: -4 };
function L(e) {
    let { channelState: t, toggle: n, getNumUnreadChannels: l } = e;
    return (0, i.jsx)(d.m_, {
        text: y.intl.string(y.t.iTcuma),
        children: (0, i.jsx)(c.DUT, {
            className: s()(R.cS, { [R.yZ]: t?.collapsed }),
            onClick: function () {
                null != t &&
                    null != n &&
                    (n(t),
                    (0, m.zV)(v.HAw.INBOX_CHANNEL_COLLAPSED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        num_unread_channels_remaining: l?.() ?? 0,
                        is_now_collapsed: !t.collapsed,
                    }));
            },
            children: (0, i.jsx)(j.A, { width: 16, height: 16 }),
        }),
    });
}
function D(e) {
    let {
            channel: t,
            children: n,
            gotoChannel: l,
            mentionCount: r,
            channelState: o,
            toggleCollapsed: d,
            showCollapseButton: u = !1,
            getNumUnreadChannels: h,
        } = e,
        A = (0, a.rm)(`recents-header-${t.id}-${(0, f.GV)()}`),
        g = u && !t.isNSFW() && null != o && "nsfw" !== o.type;
    return (0, i.jsx)(c.vN3, {
        offset: O,
        children: (0, i.jsxs)("div", {
            className: s()(R.ZO, { [R.b4]: g }),
            ...A,
            tabIndex: 0,
            "data-recents-channel": t.id,
            onKeyDown: function (e) {
                null != d &&
                    null != o &&
                    (("ArrowRight" === e.key && o.collapsed) || ("ArrowLeft" === e.key && !o.collapsed)) &&
                    d?.(o);
            },
            children: [
                g && null != o ? (0, i.jsx)(L, { channelState: o, toggle: d, getNumUnreadChannels: h }) : null,
                (0, i.jsx)(M, { channel: t, gotoChannel: l }),
                (0, i.jsx)(P, { channel: t, gotoChannel: l, mentionCount: r }),
                n,
            ],
        }),
    });
}
function M(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, i.jsx)(G, { channel: t, gotoChannel: n })
        : (0, i.jsx)(U, { channel: t, gotoChannel: n });
}
function G(e) {
    let { channel: t, gotoChannel: n } = e,
        l = (0, r.bG)([T.default], () => (t.isDM() ? T.default.getUser(t.getRecipientId()) : null)),
        s = null == l ? (0, p.Y)(t) : l.getAvatarURL(void 0, 40);
    return (0, i.jsx)(c.DUT, {
        onClick: n,
        tabIndex: -1,
        children: (0, i.jsx)("img", { className: R.ro, src: s, alt: "", "aria-hidden": !0 }),
    });
}
function U(e) {
    let { channel: t, gotoChannel: n } = e,
        l = (0, r.bG)([S.A], () => S.A.getGuild(t.guild_id));
    return null == l
        ? null
        : (0, i.jsx)(E.A, {
              "aria-hidden": !0,
              className: R.$f,
              guild: l,
              size: E.A.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1,
          });
}
function P(e) {
    let { channel: t, gotoChannel: n, mentionCount: l } = e,
        a = (0, r.bG)([S.A], () => S.A.getGuild(t.guild_id)),
        d = (0, r.bG)([I.A], () => I.A.getChannel(t.parent_id)),
        u = (0, r.bG)([N.Ay], () => N.Ay.getIsMentionLowImportance(t.id)),
        h = (0, x.gU)(t, a),
        A = (0, _.Ay)(t, !1),
        g = null == d ? a?.name : `${a?.name} › ${d.name}`,
        m = t.isMultiUserDM()
            ? y.intl.formatToPlainString(y.t.CxSA5N, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, i.jsx)(k, { channel: t })
              : (0, i.jsx)(c.DUT, { className: s()(R.W$, R.J5), onClick: n, children: g });
    return (0, i.jsxs)("div", {
        className: R.yP,
        children: [
            (0, i.jsx)(c.Heading, {
                variant: "heading-md/semibold",
                className: R.un,
                children: (0, i.jsxs)(c.DUT, {
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
                        null != l && l > 0
                            ? (0, i.jsx)("div", {
                                  className: R.qS,
                                  children: (0, i.jsx)(c.hVq, {
                                      count: l,
                                      color: u
                                          ? o.A.colors.BACKGROUND_MOD_STRONG.css
                                          : o.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, i.jsx)(c.Text, { color: "text-default", variant: "text-xs/normal", className: R.PL, children: m }),
        ],
    });
}
function k(e) {
    let { channel: t } = e,
        {
            user: n,
            status: l,
            activities: s,
            applicationStream: a,
        } = (0, r.cf)([T.default, b.A, C.A], () => {
            let e = T.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? b.A.getStatus(e.id) : null,
                activities: null != e ? b.A.getActivities(e.id) : null,
                applicationStream: null != e ? C.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceActivityStatusEnabled: o } = (0, u.G)({ location: "RecentsChannelHeader" }),
        { voiceChannel: d } = (0, A.A)({ userId: n?.id }),
        c = o ? d : void 0;
    return (0, h.A)({ activities: s, status: l, applicationStream: a, voiceChannel: c })
        ? (0, i.jsx)(g.A, { user: n, activities: s, applicationStream: a, voiceChannel: c, hideTooltip: !0 })
        : null;
}
