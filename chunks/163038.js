n.d(t, { Z: () => H }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    s = n(902704),
    l = n(692547),
    c = n(481060),
    u = n(232567),
    d = n(100604),
    f = n(39154),
    _ = n(356264),
    p = n(628238),
    h = n(739566),
    m = n(492593),
    g = n(930282),
    E = n(464891),
    b = n(507418),
    y = n(348238),
    O = n(38267),
    v = n(25015),
    I = n(438075),
    T = n(359110),
    S = n(6025),
    A = n(695346),
    C = n(433355),
    N = n(592125),
    R = n(906467),
    P = n(430824),
    D = n(496675),
    w = n(699516),
    L = n(944486),
    x = n(594174),
    M = n(626135),
    j = n(22665),
    k = n(981631),
    U = n(959517),
    G = n(417801);
function B(e) {
    let { message: t, snapshot: n, index: u } = e,
        f = i.useMemo(() => new d.r(t, n, u), [t, n, u]),
        p = (0, o.e7)(
            [N.Z, x.default, w.Z, D.Z, P.Z, _.Z],
            () => f.getForwardInfo(N.Z, x.default, w.Z, D.Z, P.Z, _.Z).footerInfo,
            [f],
            s.Z,
        ),
        h = i.useCallback(() => {
            var e, n;
            let r = N.Z.getChannel(t.channel_id),
                i = P.Z.getGuild(null == r ? void 0 : r.guild_id),
                a = null == (e = t.messageReference) ? void 0 : e.channel_id,
                o = L.Z.getCurrentlySelectedChannelId(),
                s = C.ZP.getCurrentSidebarChannelId(null == (n = t.messageReference) ? void 0 : n.channel_id),
                l = o === a && s === (null == r ? void 0 : r.id);
            null == r ||
                null == i ||
                l ||
                null == a ||
                (S.Z.openModReportAsSidebar({
                    channelId: r.id,
                    baseChannelId: a,
                    guildId: r.guild_id,
                }),
                (0, T.Kh)(a),
                M.default.track(k.rMx.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: a,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == p
        ? null
        : (0, r.jsxs)(c.P3F, {
              className: G.footerContainer,
              onClick: h,
              "aria-label": p.accessibilityLabel,
              children: [
                  null != p.originIconUrl
                      ? (0, r.jsx)("img", {
                            className: G.originIcon,
                            src: p.originIconUrl,
                            alt: "",
                        })
                      : null,
                  (0, r.jsx)(a.xvT, {
                      className: G.footerText,
                      variant: "text-sm/medium",
                      color: "none",
                      children: "".concat(p.originLabel, "  \u2022  ").concat(p.timestampLabel),
                  }),
                  (0, r.jsx)(c.Fbu, {
                      size: "xxs",
                      color: l.Z.colors.TEXT_LOW_CONTRAST,
                  }),
              ],
          });
}
function Z(e, t) {
    let { popouts: n, setPopout: r } = (0, O.Z)(e.id, U.d$),
        { usernameProfile: a, avatarProfile: o } = n,
        s = (0, y.XO)(e, t, a, r);
    return {
        onClickUsername: s,
        onClickAvatar: (0, y.R9)(o, r),
        onPopoutRequestClose: i.useCallback(
            () =>
                r({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1,
                }),
            [r],
        ),
        showUsernamePopout: a,
        showAvatarPopout: o,
    };
}
function F(e) {
    let { mergedMessageRecord: t, content: n, channel: i, reportingUserId: a, reportedTimestamp: o } = e,
        s = (0, h.JZ)(t.author, i),
        {
            onClickUsername: l,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: d,
            showAvatarPopout: f,
        } = Z(t, i);
    return (0, r.jsx)(m.Z, {
        childrenExecutedCommand: (0, r.jsx)(j.Z, {
            reportingUserId: a,
            guildId: i.guild_id,
            channel: i,
            messageId: t.id,
            reportedTimestamp: o,
            compact: !1,
        }),
        childrenHeader: (0, r.jsx)(E.ZP, {
            message: t,
            channel: i,
            author: s,
            guildId: i.guild_id,
            hideTimestamp: !0,
            onClickUsername: l,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: d,
            showAvatarPopout: f,
            renderPopout: b.Z,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, r.jsx)(g.ZP, {
            message: t,
            content: n,
            compact: !1,
        }),
        disableInteraction: !0,
        compact: !1,
        className: G.message,
        author: s,
    });
}
function V(e) {
    var t, n, a;
    let { message: s, snapshot: l, index: c } = e,
        [d, _] = i.useState(void 0);
    i.useEffect(() => {
        var e;
        (null == l || null == (e = l.moderatorReport) ? void 0 : e.reported_user_id) != null &&
            (0, u.PR)(l.moderatorReport.reported_user_id)
                .then((e) => {
                    _(e);
                })
                .catch(() => {});
    }, [null == l || null == (t = l.moderatorReport) ? void 0 : t.reported_user_id]);
    let h = i.useMemo(() => {
            var e;
            let t = (0, f.Z)(s, l);
            return null != d && (null == l || null == (e = l.moderatorReport) ? void 0 : e.reported_user_id) != null
                ? t.set("author", d)
                : t;
        }, [s, l, d]),
        m = A.RS.useSetting(),
        g = A.NA.useSetting(),
        E = m && g,
        b = (0, o.e7)([R.Z], () => R.Z.isDeveloper),
        y = (0, p.A)((null != (a = h.editedTimestamp) ? a : h.timestamp).valueOf()),
        { content: O, hasSpoilerEmbeds: T } = (0, v.Z)(h, {
            hideSimpleEmbedContent: E,
            isInteracting: !1,
            formatInline: !1,
            allowList: y,
            allowHeading: y,
            allowLinks: !0,
            allowDevLinks: b,
            previewLinkTarget: !0,
        }),
        S = (0, o.e7)([N.Z], () => N.Z.getChannel(s.channel_id));
    return null == S
        ? null
        : (0, r.jsx)(
              "div",
              {
                  className: G.container,
                  children: (0, r.jsxs)("div", {
                      className: G.content,
                      children: [
                          (0, r.jsx)(F, {
                              mergedMessageRecord: h,
                              content: O,
                              channel: S,
                              reportingUserId:
                                  null == l || null == (n = l.moderatorReport) ? void 0 : n.reporting_user_id,
                              reportedTimestamp: s.timestamp,
                          }),
                          (0, I.Z)({
                              channelMessageProps: {
                                  message: h,
                                  channel: S,
                                  compact: !1,
                              },
                              hasSpoilerEmbeds: T,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: G.nestedAccessories,
                          }),
                          (0, r.jsx)(B, {
                              message: s,
                              snapshot: l,
                              index: c,
                          }),
                      ],
                  }),
              },
              c,
          );
}
function H(e) {
    let { message: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, n) =>
            (0, r.jsx)(
                V,
                {
                    message: t,
                    snapshot: e,
                    index: n,
                },
                n,
            ),
        ),
    });
}
