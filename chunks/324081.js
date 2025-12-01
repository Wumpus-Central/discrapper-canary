n.d(t, { Z: () => P });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    o = n(91192),
    a = n(442837),
    s = n(692547),
    c = n(481060),
    u = n(468363),
    d = n(326255),
    f = n(956221),
    h = n(771173),
    p = n(43267),
    g = n(933557),
    m = n(471445),
    b = n(313201),
    _ = n(565138),
    y = n(199902),
    O = n(592125),
    v = n(430824),
    j = n(158776),
    x = n(306680),
    C = n(594174),
    E = n(388032),
    S = n(888097);
let I = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4,
};
function P(e) {
    var t, n;
    let { channel: i, children: l, gotoChannel: a, mentionCount: s, channelState: u, toggleCollapsed: d } = e,
        f = (0, o.JA)("recents-header-".concat(i.id, "-").concat((0, b.Dt)()));
    return (0, r.jsx)(c.tEY, {
        offset: I,
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
            })({ className: S.channelHeader }, f)),
            (n = n =
                {
                    tabIndex: 0,
                    "data-recents-channel": i.id,
                    onKeyDown: function (e) {
                        null != d &&
                            null != u &&
                            (("ArrowRight" === e.key && u.collapsed) || ("ArrowLeft" === e.key && !u.collapsed)) &&
                            (null == d || d(u));
                    },
                    children: [
                        (0, r.jsx)(N, {
                            channel: i,
                            gotoChannel: a,
                        }),
                        (0, r.jsx)(T, {
                            channel: i,
                            gotoChannel: a,
                            mentionCount: s,
                        }),
                        l,
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
function N(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, r.jsx)(Z, {
              channel: t,
              gotoChannel: n,
          })
        : (0, r.jsx)(w, {
              channel: t,
              gotoChannel: n,
          });
}
function Z(e) {
    let { channel: t, gotoChannel: n } = e,
        i = (0, a.e7)([C.default], () => (t.isDM() ? C.default.getUser(t.getRecipientId()) : null)),
        l = null == i ? (0, p.x)(t) : i.getAvatarURL(void 0, 40);
    return (0, r.jsx)(c.P3F, {
        onClick: n,
        tabIndex: -1,
        children: (0, r.jsx)("img", {
            className: S.dmIcon,
            src: l,
            alt: "",
            "aria-hidden": !0,
        }),
    });
}
function w(e) {
    let { channel: t, gotoChannel: n } = e,
        i = (0, a.e7)([v.Z], () => v.Z.getGuild(t.guild_id));
    return null == i
        ? null
        : (0, r.jsx)(_.Z, {
              "aria-hidden": !0,
              className: S.guildIcon,
              guild: i,
              size: _.Z.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1,
          });
}
function T(e) {
    let { channel: t, gotoChannel: n, mentionCount: i } = e,
        o = (0, a.e7)([v.Z], () => v.Z.getGuild(t.guild_id)),
        u = (0, a.e7)([O.Z], () => O.Z.getChannel(t.parent_id)),
        d = (0, a.e7)([x.ZP], () => x.ZP.getIsMentionLowImportance(t.id)),
        f = (0, m.KS)(t, o),
        h = (0, g.ZP)(t, !1),
        p =
            null == u
                ? null == o
                    ? void 0
                    : o.name
                : "".concat(null == o ? void 0 : o.name, " \u203A ").concat(u.name),
        b = t.isMultiUserDM()
            ? E.intl.formatToPlainString(E.t.CxSA5N, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, r.jsx)(A, { channel: t })
              : (0, r.jsx)(c.P3F, {
                    className: l()(S.subtext, S.guildName),
                    onClick: n,
                    children: p,
                });
    return (0, r.jsxs)("div", {
        className: S.channelNameSection,
        children: [
            (0, r.jsx)(c.Heading, {
                variant: "heading-md/semibold",
                className: S.channelNameHeader,
                children: (0, r.jsxs)(c.P3F, {
                    className: S.channelName,
                    onClick: n,
                    children: [
                        t.isThread() || t.isGroupDM() || null == f
                            ? null
                            : (0, r.jsx)(f, {
                                  className: t.isForumLikeChannel() ? S.forumIcon : void 0,
                                  width: 18,
                                  height: 18,
                                  size: "custom",
                                  color: "currentColor",
                              }),
                        (0, r.jsx)("span", {
                            className: S.channelNameSpan,
                            children: h,
                        }),
                        null != i && i > 0
                            ? (0, r.jsx)("div", {
                                  className: S.badge,
                                  children: (0, r.jsx)(c.mAB, {
                                      count: i,
                                      color: d ? s.Z.colors.BACKGROUND_ACCENT.css : s.Z.colors.STATUS_DANGER.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, r.jsx)(c.Text, {
                color: "header-secondary",
                variant: "text-xs/normal",
                className: S.subtextContainer,
                children: b,
            }),
        ],
    });
}
function A(e) {
    let { channel: t } = e,
        {
            user: n,
            status: i,
            activities: l,
            applicationStream: o,
        } = (0, a.cj)([C.default, j.Z, y.Z], () => {
            let e = C.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? j.Z.getStatus(e.id) : null,
                activities: null != e ? j.Z.getActivities(e.id) : null,
                applicationStream: null != e ? y.Z.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceActivityStatusEnabled: s } = (0, u.U)({ location: "RecentsChannelHeader" }),
        { voiceChannel: c } = (0, f.Z)({ userId: null == n ? void 0 : n.id }),
        p = s ? c : void 0;
    return (0, d.Z)({
        activities: l,
        status: i,
        applicationStream: o,
        voiceChannel: p,
    })
        ? (0, r.jsx)(h.Z, {
              location: "RecentsChannelHeader",
              user: n,
              activities: l,
              applicationStream: o,
              voiceChannel: p,
              hideTooltip: !0,
          })
        : null;
}
