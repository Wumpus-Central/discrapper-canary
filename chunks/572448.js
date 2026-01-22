n.d(t, { A: () => R });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(837381),
    s = n(311907),
    o = n(827734),
    c = n(435371),
    u = n(397927),
    d = n(901517),
    f = n(397244),
    p = n(714114),
    h = n(729551),
    b = n(58149),
    g = n(571694),
    m = n(47167),
    A = n(713654),
    y = n(915089),
    O = n(263063),
    j = n(616356),
    v = n(734057),
    x = n(71393),
    E = n(290863),
    _ = n(222823),
    C = n(287809),
    S = n(147925),
    I = n(652215),
    N = n(985018),
    T = n(386590);
let P = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4,
};
function w(e) {
    let { channelState: t, toggle: n, getNumUnreadChannels: l } = e;
    return (0, r.jsx)(c.m_, {
        text: N.intl.string(N.t.iTcuma),
        children: (0, r.jsx)(u.DUT, {
            className: i()(T.cS, { [T.yZ]: null == t ? void 0 : t.collapsed }),
            onClick: function () {
                var e;
                null != t &&
                    null != n &&
                    (n(t),
                    (0, b.zV)(I.HAw.INBOX_CHANNEL_COLLAPSED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        num_unread_channels_remaining: null != (e = null == l ? void 0 : l()) ? e : 0,
                        is_now_collapsed: !t.collapsed,
                    }));
            },
            children: (0, r.jsx)(S.A, {
                width: 16,
                height: 16,
            }),
        }),
    });
}
function R(e) {
    var t, n;
    let {
            channel: l,
            children: s,
            gotoChannel: o,
            mentionCount: c,
            channelState: d,
            toggleCollapsed: f,
            showCollapseButton: p = !1,
            getNumUnreadChannels: h,
        } = e,
        b = (0, a.rm)("recents-header-".concat(l.id, "-").concat((0, y.GV)())),
        g = p && !l.isNSFW() && null != d && "nsfw" !== d.type;
    return (0, r.jsx)(u.vN3, {
        offset: P,
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
            })({ className: i()(T.ZO, { [T.b4]: g }) }, b)),
            (n = n =
                {
                    tabIndex: 0,
                    "data-recents-channel": l.id,
                    onKeyDown: function (e) {
                        null != f &&
                            null != d &&
                            (("ArrowRight" === e.key && d.collapsed) || ("ArrowLeft" === e.key && !d.collapsed)) &&
                            (null == f || f(d));
                    },
                    children: [
                        g && null != d
                            ? (0, r.jsx)(w, {
                                  channelState: d,
                                  toggle: f,
                                  getNumUnreadChannels: h,
                              })
                            : null,
                        (0, r.jsx)(D, {
                            channel: l,
                            gotoChannel: o,
                        }),
                        (0, r.jsx)(G, {
                            channel: l,
                            gotoChannel: o,
                            mentionCount: c,
                        }),
                        s,
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
function D(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, r.jsx)(M, {
              channel: t,
              gotoChannel: n,
          })
        : (0, r.jsx)(L, {
              channel: t,
              gotoChannel: n,
          });
}
function M(e) {
    let { channel: t, gotoChannel: n } = e,
        l = (0, s.bG)([C.default], () => (t.isDM() ? C.default.getUser(t.getRecipientId()) : null)),
        i = null == l ? (0, g.Y)(t) : l.getAvatarURL(void 0, 40);
    return (0, r.jsx)(u.DUT, {
        onClick: n,
        tabIndex: -1,
        children: (0, r.jsx)("img", {
            className: T.ro,
            src: i,
            alt: "",
            "aria-hidden": !0,
        }),
    });
}
function L(e) {
    let { channel: t, gotoChannel: n } = e,
        l = (0, s.bG)([x.A], () => x.A.getGuild(t.guild_id));
    return null == l
        ? null
        : (0, r.jsx)(O.A, {
              "aria-hidden": !0,
              className: T.$f,
              guild: l,
              size: O.A.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1,
          });
}
function G(e) {
    let { channel: t, gotoChannel: n, mentionCount: l } = e,
        a = (0, s.bG)([x.A], () => x.A.getGuild(t.guild_id)),
        c = (0, s.bG)([v.A], () => v.A.getChannel(t.parent_id)),
        d = (0, s.bG)([_.Ay], () => _.Ay.getIsMentionLowImportance(t.id)),
        f = (0, A.gU)(t, a),
        p = (0, m.Ay)(t, !1),
        h =
            null == c
                ? null == a
                    ? void 0
                    : a.name
                : "".concat(null == a ? void 0 : a.name, " \u203A ").concat(c.name),
        b = t.isMultiUserDM()
            ? N.intl.formatToPlainString(N.t.CxSA5N, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, r.jsx)(k, { channel: t })
              : (0, r.jsx)(u.DUT, {
                    className: i()(T.W$, T.J5),
                    onClick: n,
                    children: h,
                });
    return (0, r.jsxs)("div", {
        className: T.yP,
        children: [
            (0, r.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                className: T.un,
                children: (0, r.jsxs)(u.DUT, {
                    className: T.HA,
                    onClick: n,
                    children: [
                        t.isThread() || t.isGroupDM() || null == f
                            ? null
                            : (0, r.jsx)(f, {
                                  className: t.isForumLikeChannel() ? T.dj : void 0,
                                  width: 18,
                                  height: 18,
                                  size: "custom",
                                  color: "currentColor",
                              }),
                        (0, r.jsx)("span", {
                            className: T.je,
                            children: p,
                        }),
                        null != l && l > 0
                            ? (0, r.jsx)("div", {
                                  className: T.qS,
                                  children: (0, r.jsx)(u.hVq, {
                                      count: l,
                                      color: d
                                          ? o.A.colors.BACKGROUND_MOD_STRONG.css
                                          : o.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, r.jsx)(u.Text, {
                color: "text-default",
                variant: "text-xs/normal",
                className: T.PL,
                children: b,
            }),
        ],
    });
}
function k(e) {
    let { channel: t } = e,
        {
            user: n,
            status: l,
            activities: i,
            applicationStream: a,
        } = (0, s.cf)([C.default, E.A, j.A], () => {
            let e = C.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? E.A.getStatus(e.id) : null,
                activities: null != e ? E.A.getActivities(e.id) : null,
                applicationStream: null != e ? j.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceActivityStatusEnabled: o } = (0, d.G)({ location: "RecentsChannelHeader" }),
        { voiceChannel: c } = (0, p.A)({ userId: null == n ? void 0 : n.id }),
        u = o ? c : void 0;
    return (0, f.A)({
        activities: i,
        status: l,
        applicationStream: a,
        voiceChannel: u,
    })
        ? (0, r.jsx)(h.A, {
              user: n,
              activities: i,
              applicationStream: a,
              voiceChannel: u,
              hideTooltip: !0,
          })
        : null;
}
