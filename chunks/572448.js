n.d(t, { A: () => U });
var s = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    i = n(837381),
    r = n(311907),
    o = n(827734),
    d = n(990078),
    c = n(939249),
    u = n(187322),
    h = n(534514),
    _ = n(777666),
    A = n(834730),
    m = n(397244),
    g = n(714114),
    f = n(729551),
    E = n(58149),
    N = n(571694),
    p = n(47167),
    I = n(713654),
    C = n(915089),
    S = n(263063),
    x = n(616356),
    R = n(734057),
    y = n(71393),
    T = n(290863),
    j = n(222823),
    b = n(287809),
    D = n(147925),
    O = n(652215),
    v = n(985018),
    M = n(110357);
let F = { top: 8, bottom: 8, left: -4, right: -4 };
function L(e) {
    let { channelState: t, toggle: n, getNumUnreadChannels: a } = e;
    return (0, s.jsx)(d.m, {
        text: v.intl.string(v.t.iTcuma),
        children: (0, s.jsx)(c.D, {
            className: l()(M.cS, { [M.yZ]: t?.collapsed }),
            onClick: function () {
                null != t &&
                    null != n &&
                    (n(t),
                    (0, E.zV)(O.HAw.INBOX_CHANNEL_COLLAPSED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        num_unread_channels_remaining: a?.() ?? 0,
                        is_now_collapsed: !t.collapsed,
                    }));
            },
            children: (0, s.jsx)(D.A, { width: 16, height: 16 }),
        }),
    });
}
function U(e) {
    let {
            channel: t,
            children: n,
            gotoChannel: a,
            mentionCount: r,
            channelState: o,
            toggleCollapsed: d,
            showCollapseButton: c = !1,
            getNumUnreadChannels: h,
        } = e,
        _ = (0, i.rm)(`recents-header-${t.id}-${(0, C.GV)()}`),
        A = c && !t.isNSFW() && null != o && "nsfw" !== o.type;
    return (0, s.jsx)(u.vN, {
        offset: F,
        children: (0, s.jsxs)("div", {
            className: l()(M.ZO, { [M.b4]: A }),
            ..._,
            tabIndex: 0,
            "data-recents-channel": t.id,
            onKeyDown: function (e) {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    e.preventDefault(), a(e);
                    return;
                }
                null != d &&
                    null != o &&
                    (("ArrowRight" === e.key && o.collapsed) || ("ArrowLeft" === e.key && !o.collapsed)) &&
                    d?.(o);
            },
            children: [
                A && null != o ? (0, s.jsx)(L, { channelState: o, toggle: d, getNumUnreadChannels: h }) : null,
                (0, s.jsx)(k, { channel: t, gotoChannel: a }),
                (0, s.jsx)(P, { channel: t, gotoChannel: a, mentionCount: r }),
                n,
            ],
        }),
    });
}
function k(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, s.jsx)(G, { channel: t, gotoChannel: n })
        : (0, s.jsx)(w, { channel: t, gotoChannel: n });
}
function G(e) {
    let { channel: t, gotoChannel: n } = e,
        a = (0, r.bG)([b.default], () => (t.isDM() ? b.default.getUser(t.getRecipientId()) : null)),
        l = null == a ? (0, N.Y)(t) : a.getAvatarURL(void 0, 40);
    return (0, s.jsx)(c.D, {
        onClick: n,
        tabIndex: -1,
        children: (0, s.jsx)("img", { className: M.ro, src: l, alt: "", "aria-hidden": !0 }),
    });
}
function w(e) {
    let { channel: t, gotoChannel: n } = e,
        a = (0, r.bG)([y.A], () => y.A.getGuild(t.guild_id));
    return null == a
        ? null
        : (0, s.jsx)(S.Ay, {
              "aria-hidden": !0,
              className: M.$f,
              guild: a,
              size: S.Ay.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1,
          });
}
function P(e) {
    let { channel: t, gotoChannel: n, mentionCount: a } = e,
        i = (0, r.bG)([y.A], () => y.A.getGuild(t.guild_id)),
        d = (0, r.bG)([R.A], () => R.A.getChannel(t.parent_id)),
        u = (0, r.bG)([j.Ay], () => j.Ay.getIsMentionLowImportance(t.id)),
        m = (0, I.gU)(t, i),
        g = (0, p.Ay)(t, !1),
        f = (0, p.Ay)(d),
        E = null == d ? i?.name : `${i?.name} › ${f}`,
        N = t.isMultiUserDM()
            ? v.intl.formatToPlainString(v.t.CxSA5N, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, s.jsx)(B, { channel: t })
              : (0, s.jsx)(c.D, { className: l()(M.W$, M.J5), onClick: n, children: E });
    return (0, s.jsxs)("div", {
        className: M.yP,
        children: [
            (0, s.jsx)(h.D, {
                variant: "heading-md/semibold",
                className: M.un,
                children: (0, s.jsxs)(c.D, {
                    className: M.HA,
                    onClick: n,
                    children: [
                        t.isThread() || t.isGroupDM() || null == m
                            ? null
                            : (0, s.jsx)(m, {
                                  className: t.isForumLikeChannel() ? M.dj : void 0,
                                  width: 18,
                                  height: 18,
                                  size: "custom",
                                  color: "currentColor",
                              }),
                        (0, s.jsx)("span", { className: M.je, children: g }),
                        null != a && a > 0
                            ? (0, s.jsx)("div", {
                                  className: M.qS,
                                  children: (0, s.jsx)(_.hV, {
                                      count: a,
                                      color: u
                                          ? o.A.colors.BACKGROUND_MOD_STRONG.css
                                          : o.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, s.jsx)(A.E, { color: "text-default", variant: "text-xs/normal", className: M.PL, children: N }),
        ],
    });
}
function B(e) {
    let { channel: t } = e,
        {
            user: n,
            status: a,
            activities: l,
            applicationStream: i,
        } = (0, r.cf)([b.default, T.A, x.A], () => {
            let e = b.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? T.A.getStatus(e.id) : null,
                activities: null != e ? T.A.getActivities(e.id) : null,
                applicationStream: null != e ? x.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: o } = (0, g.A)({ userId: n?.id });
    return (0, m.A)({ activities: l, status: a, applicationStream: i, voiceChannel: o })
        ? (0, s.jsx)(f.A, { user: n, activities: l, applicationStream: i, voiceChannel: o, hideTooltip: !0 })
        : null;
}
