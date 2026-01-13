n.d(t, { Z: () => w });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(91192),
    o = n(442837),
    s = n(692547),
    c = n(681715),
    u = n(481060),
    d = n(468363),
    p = n(326255),
    f = n(956221),
    h = n(747017),
    g = n(367907),
    m = n(43267),
    b = n(933557),
    y = n(471445),
    v = n(313201),
    O = n(565138),
    j = n(199902),
    x = n(592125),
    C = n(430824),
    E = n(158776),
    S = n(306680),
    _ = n(594174),
    I = n(259580),
    P = n(981631),
    Z = n(388032),
    N = n(397131);
let T = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4,
};
function A(e) {
    let { channelState: t, toggle: n, getNumUnreadChannels: i } = e;
    return (0, r.jsx)(c.u, {
        text: Z.intl.string(Z.t.iTcuma),
        children: (0, r.jsx)(u.P3F, {
            className: l()(N.collapseButton, { [N.collapsed]: null == t ? void 0 : t.collapsed }),
            onClick: function () {
                var e;
                null != t &&
                    null != n &&
                    (n(t),
                    (0, g.yw)(P.rMx.INBOX_CHANNEL_COLLAPSED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        num_unread_channels_remaining: null != (e = null == i ? void 0 : i()) ? e : 0,
                        is_now_collapsed: !t.collapsed,
                    }));
            },
            children: (0, r.jsx)(I.Z, {
                width: 16,
                height: 16,
            }),
        }),
    });
}
function w(e) {
    var t, n;
    let {
            channel: i,
            children: o,
            gotoChannel: s,
            mentionCount: c,
            channelState: d,
            toggleCollapsed: p,
            showCollapseButton: f = !1,
            getNumUnreadChannels: h,
        } = e,
        g = (0, a.JA)("recents-header-".concat(i.id, "-").concat((0, v.Dt)())),
        m = f && !i.isNSFW() && null != d && "nsfw" !== d.type;
    return (0, r.jsx)(u.tEY, {
        offset: T,
        children: (0, r.jsxs)(
            "div",
            ((t = (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({ className: l()(N.channelHeader, { [N.showCollapseButton]: m }) }, g)),
            (n = n =
                {
                    tabIndex: 0,
                    "data-recents-channel": i.id,
                    onKeyDown: function (e) {
                        null != p &&
                            null != d &&
                            (("ArrowRight" === e.key && d.collapsed) || ("ArrowLeft" === e.key && !d.collapsed)) &&
                            (null == p || p(d));
                    },
                    children: [
                        m && null != d
                            ? (0, r.jsx)(A, {
                                  channelState: d,
                                  toggle: p,
                                  getNumUnreadChannels: h,
                              })
                            : null,
                        (0, r.jsx)(R, {
                            channel: i,
                            gotoChannel: s,
                        }),
                        (0, r.jsx)(k, {
                            channel: i,
                            gotoChannel: s,
                            mentionCount: c,
                        }),
                        o,
                    ],
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        ),
    });
}
function R(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, r.jsx)(D, {
              channel: t,
              gotoChannel: n,
          })
        : (0, r.jsx)(M, {
              channel: t,
              gotoChannel: n,
          });
}
function D(e) {
    let { channel: t, gotoChannel: n } = e,
        i = (0, o.e7)([_.default], () => (t.isDM() ? _.default.getUser(t.getRecipientId()) : null)),
        l = null == i ? (0, m.x)(t) : i.getAvatarURL(void 0, 40);
    return (0, r.jsx)(u.P3F, {
        onClick: n,
        tabIndex: -1,
        children: (0, r.jsx)("img", {
            className: N.dmIcon,
            src: l,
            alt: "",
            "aria-hidden": !0,
        }),
    });
}
function M(e) {
    let { channel: t, gotoChannel: n } = e,
        i = (0, o.e7)([C.Z], () => C.Z.getGuild(t.guild_id));
    return null == i
        ? null
        : (0, r.jsx)(O.Z, {
              "aria-hidden": !0,
              className: N.guildIcon,
              guild: i,
              size: O.Z.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1,
          });
}
function k(e) {
    let { channel: t, gotoChannel: n, mentionCount: i } = e,
        a = (0, o.e7)([C.Z], () => C.Z.getGuild(t.guild_id)),
        c = (0, o.e7)([x.Z], () => x.Z.getChannel(t.parent_id)),
        d = (0, o.e7)([S.ZP], () => S.ZP.getIsMentionLowImportance(t.id)),
        p = (0, y.KS)(t, a),
        f = (0, b.ZP)(t, !1),
        h =
            null == c
                ? null == a
                    ? void 0
                    : a.name
                : "".concat(null == a ? void 0 : a.name, " \u203A ").concat(c.name),
        g = t.isMultiUserDM()
            ? Z.intl.formatToPlainString(Z.t.CxSA5N, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, r.jsx)(L, { channel: t })
              : (0, r.jsx)(u.P3F, {
                    className: l()(N.subtext, N.guildName),
                    onClick: n,
                    children: h,
                });
    return (0, r.jsxs)("div", {
        className: N.channelNameSection,
        children: [
            (0, r.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                className: N.channelNameHeader,
                children: (0, r.jsxs)(u.P3F, {
                    className: N.channelName,
                    onClick: n,
                    children: [
                        t.isThread() || t.isGroupDM() || null == p
                            ? null
                            : (0, r.jsx)(p, {
                                  className: t.isForumLikeChannel() ? N.forumIcon : void 0,
                                  width: 18,
                                  height: 18,
                                  size: "custom",
                                  color: "currentColor",
                              }),
                        (0, r.jsx)("span", {
                            className: N.channelNameSpan,
                            children: f,
                        }),
                        null != i && i > 0
                            ? (0, r.jsx)("div", {
                                  className: N.badge,
                                  children: (0, r.jsx)(u.mAB, {
                                      count: i,
                                      color: d
                                          ? s.Z.colors.BACKGROUND_ACCENT.css
                                          : s.Z.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, r.jsx)(u.Text, {
                color: "text-default",
                variant: "text-xs/normal",
                className: N.subtextContainer,
                children: g,
            }),
        ],
    });
}
function L(e) {
    let { channel: t } = e,
        {
            user: n,
            status: i,
            activities: l,
            applicationStream: a,
        } = (0, o.cj)([_.default, E.Z, j.Z], () => {
            let e = _.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? E.Z.getStatus(e.id) : null,
                activities: null != e ? E.Z.getActivities(e.id) : null,
                applicationStream: null != e ? j.Z.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceActivityStatusEnabled: s } = (0, d.U)({ location: "RecentsChannelHeader" }),
        { voiceChannel: c } = (0, f.Z)({ userId: null == n ? void 0 : n.id }),
        u = s ? c : void 0;
    return (0, p.Z)({
        activities: l,
        status: i,
        applicationStream: a,
        voiceChannel: u,
    })
        ? (0, r.jsx)(h.Z, {
              user: n,
              activities: l,
              applicationStream: a,
              voiceChannel: u,
              hideTooltip: !0,
          })
        : null;
}
