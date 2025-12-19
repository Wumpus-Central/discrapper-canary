n.d(t, { Z: () => A });
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
    f = n(326255),
    h = n(956221),
    p = n(747017),
    g = n(367907),
    b = n(43267),
    m = n(933557),
    y = n(471445),
    O = n(313201),
    v = n(565138),
    j = n(199902),
    C = n(592125),
    x = n(430824),
    E = n(158776),
    S = n(306680),
    I = n(594174),
    _ = n(259580),
    P = n(981631),
    N = n(388032),
    Z = n(397131);
let w = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4,
};
function T(e) {
    let { channelState: t, toggle: n, getNumUnreadChannels: i } = e;
    return (0, r.jsx)(c.u, {
        text: N.intl.string(N.t.iTcuma),
        children: (0, r.jsx)(u.P3F, {
            className: l()(Z.collapseButton, { [Z.collapsed]: null == t ? void 0 : t.collapsed }),
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
            children: (0, r.jsx)(_.Z, {
                width: 16,
                height: 16,
            }),
        }),
    });
}
function A(e) {
    var t, n;
    let {
            channel: i,
            children: o,
            gotoChannel: s,
            mentionCount: c,
            channelState: d,
            toggleCollapsed: f,
            showCollapseButton: h = !1,
            getNumUnreadChannels: p,
        } = e,
        g = (0, a.JA)("recents-header-".concat(i.id, "-").concat((0, O.Dt)())),
        b = h && !i.isNSFW() && null != d && "nsfw" !== d.type;
    return (0, r.jsx)(u.tEY, {
        offset: w,
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
            })({ className: l()(Z.channelHeader, { [Z.showCollapseButton]: b }) }, g)),
            (n = n =
                {
                    tabIndex: 0,
                    "data-recents-channel": i.id,
                    onKeyDown: function (e) {
                        null != f &&
                            null != d &&
                            (("ArrowRight" === e.key && d.collapsed) || ("ArrowLeft" === e.key && !d.collapsed)) &&
                            (null == f || f(d));
                    },
                    children: [
                        b && null != d
                            ? (0, r.jsx)(T, {
                                  channelState: d,
                                  toggle: f,
                                  getNumUnreadChannels: p,
                              })
                            : null,
                        (0, r.jsx)(R, {
                            channel: i,
                            gotoChannel: s,
                        }),
                        (0, r.jsx)(L, {
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
        i = (0, o.e7)([I.default], () => (t.isDM() ? I.default.getUser(t.getRecipientId()) : null)),
        l = null == i ? (0, b.x)(t) : i.getAvatarURL(void 0, 40);
    return (0, r.jsx)(u.P3F, {
        onClick: n,
        tabIndex: -1,
        children: (0, r.jsx)("img", {
            className: Z.dmIcon,
            src: l,
            alt: "",
            "aria-hidden": !0,
        }),
    });
}
function M(e) {
    let { channel: t, gotoChannel: n } = e,
        i = (0, o.e7)([x.Z], () => x.Z.getGuild(t.guild_id));
    return null == i
        ? null
        : (0, r.jsx)(v.Z, {
              "aria-hidden": !0,
              className: Z.guildIcon,
              guild: i,
              size: v.Z.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1,
          });
}
function L(e) {
    let { channel: t, gotoChannel: n, mentionCount: i } = e,
        a = (0, o.e7)([x.Z], () => x.Z.getGuild(t.guild_id)),
        c = (0, o.e7)([C.Z], () => C.Z.getChannel(t.parent_id)),
        d = (0, o.e7)([S.ZP], () => S.ZP.getIsMentionLowImportance(t.id)),
        f = (0, y.KS)(t, a),
        h = (0, m.ZP)(t, !1),
        p =
            null == c
                ? null == a
                    ? void 0
                    : a.name
                : "".concat(null == a ? void 0 : a.name, " \u203A ").concat(c.name),
        g = t.isMultiUserDM()
            ? N.intl.formatToPlainString(N.t.CxSA5N, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, r.jsx)(k, { channel: t })
              : (0, r.jsx)(u.P3F, {
                    className: l()(Z.subtext, Z.guildName),
                    onClick: n,
                    children: p,
                });
    return (0, r.jsxs)("div", {
        className: Z.channelNameSection,
        children: [
            (0, r.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                className: Z.channelNameHeader,
                children: (0, r.jsxs)(u.P3F, {
                    className: Z.channelName,
                    onClick: n,
                    children: [
                        t.isThread() || t.isGroupDM() || null == f
                            ? null
                            : (0, r.jsx)(f, {
                                  className: t.isForumLikeChannel() ? Z.forumIcon : void 0,
                                  width: 18,
                                  height: 18,
                                  size: "custom",
                                  color: "currentColor",
                              }),
                        (0, r.jsx)("span", {
                            className: Z.channelNameSpan,
                            children: h,
                        }),
                        null != i && i > 0
                            ? (0, r.jsx)("div", {
                                  className: Z.badge,
                                  children: (0, r.jsx)(u.mAB, {
                                      count: i,
                                      color: d ? s.Z.colors.BACKGROUND_ACCENT.css : s.Z.colors.STATUS_DANGER.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, r.jsx)(u.Text, {
                color: "text-default",
                variant: "text-xs/normal",
                className: Z.subtextContainer,
                children: g,
            }),
        ],
    });
}
function k(e) {
    let { channel: t } = e,
        {
            user: n,
            status: i,
            activities: l,
            applicationStream: a,
        } = (0, o.cj)([I.default, E.Z, j.Z], () => {
            let e = I.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? E.Z.getStatus(e.id) : null,
                activities: null != e ? E.Z.getActivities(e.id) : null,
                applicationStream: null != e ? j.Z.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceActivityStatusEnabled: s } = (0, d.U)({ location: "RecentsChannelHeader" }),
        { voiceChannel: c } = (0, h.Z)({ userId: null == n ? void 0 : n.id }),
        u = s ? c : void 0;
    return (0, f.Z)({
        activities: l,
        status: i,
        applicationStream: a,
        voiceChannel: u,
    })
        ? (0, r.jsx)(p.Z, {
              user: n,
              activities: l,
              applicationStream: a,
              voiceChannel: u,
              hideTooltip: !0,
          })
        : null;
}
