n.d(t, { A: () => L });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(837381),
    r = n(311907),
    o = n(827734),
    d = n(435371),
    c = n(397927),
    u = n(397244),
    h = n(714114),
    A = n(729551),
    _ = n(58149),
    m = n(571694),
    g = n(47167),
    p = n(713654),
    f = n(915089),
    x = n(263063),
    E = n(616356),
    I = n(734057),
    C = n(71393),
    N = n(290863),
    T = n(222823),
    S = n(287809),
    b = n(147925),
    y = n(652215),
    v = n(985018),
    j = n(612005);
let R = { top: 8, bottom: 8, left: -4, right: -4 };
function O(e) {
    let { channelState: t, toggle: n, getNumUnreadChannels: l } = e;
    return (0, i.jsx)(d.m_, {
        text: v.intl.string(v.t.iTcuma),
        children: (0, i.jsx)(c.DUT, {
            className: s()(j.cS, { [j.yZ]: t?.collapsed }),
            onClick: function () {
                null != t &&
                    null != n &&
                    (n(t),
                    (0, _.zV)(y.HAw.INBOX_CHANNEL_COLLAPSED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        num_unread_channels_remaining: l?.() ?? 0,
                        is_now_collapsed: !t.collapsed,
                    }));
            },
            children: (0, i.jsx)(b.A, { width: 16, height: 16 }),
        }),
    });
}
function L(e) {
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
        _ = u && !t.isNSFW() && null != o && "nsfw" !== o.type;
    return (0, i.jsx)(c.vN3, {
        offset: R,
        children: (0, i.jsxs)("div", {
            className: s()(j.ZO, { [j.b4]: _ }),
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
                _ && null != o ? (0, i.jsx)(O, { channelState: o, toggle: d, getNumUnreadChannels: h }) : null,
                (0, i.jsx)(M, { channel: t, gotoChannel: l }),
                (0, i.jsx)(G, { channel: t, gotoChannel: l, mentionCount: r }),
                n,
            ],
        }),
    });
}
function M(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, i.jsx)(D, { channel: t, gotoChannel: n })
        : (0, i.jsx)(U, { channel: t, gotoChannel: n });
}
function D(e) {
    let { channel: t, gotoChannel: n } = e,
        l = (0, r.bG)([S.default], () => (t.isDM() ? S.default.getUser(t.getRecipientId()) : null)),
        s = null == l ? (0, m.Y)(t) : l.getAvatarURL(void 0, 40);
    return (0, i.jsx)(c.DUT, {
        onClick: n,
        tabIndex: -1,
        children: (0, i.jsx)("img", { className: j.ro, src: s, alt: "", "aria-hidden": !0 }),
    });
}
function U(e) {
    let { channel: t, gotoChannel: n } = e,
        l = (0, r.bG)([C.A], () => C.A.getGuild(t.guild_id));
    return null == l
        ? null
        : (0, i.jsx)(x.Ay, {
              "aria-hidden": !0,
              className: j.$f,
              guild: l,
              size: x.Ay.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1,
          });
}
function G(e) {
    let { channel: t, gotoChannel: n, mentionCount: l } = e,
        a = (0, r.bG)([C.A], () => C.A.getGuild(t.guild_id)),
        d = (0, r.bG)([I.A], () => I.A.getChannel(t.parent_id)),
        u = (0, r.bG)([T.Ay], () => T.Ay.getIsMentionLowImportance(t.id)),
        h = (0, p.gU)(t, a),
        A = (0, g.Ay)(t, !1),
        _ = (0, g.Ay)(d),
        m = null == d ? a?.name : `${a?.name} › ${_}`,
        f = t.isMultiUserDM()
            ? v.intl.formatToPlainString(v.t.CxSA5N, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, i.jsx)(P, { channel: t })
              : (0, i.jsx)(c.DUT, { className: s()(j.W$, j.J5), onClick: n, children: m });
    return (0, i.jsxs)("div", {
        className: j.yP,
        children: [
            (0, i.jsx)(c.Heading, {
                variant: "heading-md/semibold",
                className: j.un,
                children: (0, i.jsxs)(c.DUT, {
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
                        null != l && l > 0
                            ? (0, i.jsx)("div", {
                                  className: j.qS,
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
            (0, i.jsx)(c.Text, { color: "text-default", variant: "text-xs/normal", className: j.PL, children: f }),
        ],
    });
}
function P(e) {
    let { channel: t } = e,
        {
            user: n,
            status: l,
            activities: s,
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
    return (0, u.A)({ activities: s, status: l, applicationStream: a, voiceChannel: o })
        ? (0, i.jsx)(A.A, { user: n, activities: s, applicationStream: a, voiceChannel: o, hideTooltip: !0 })
        : null;
}
