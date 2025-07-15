(n.d(t, { Z: () => H }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(793030),
    a = n(442837),
    o = n(902704),
    s = n(692547),
    c = n(481060),
    u = n(232567),
    d = n(100604),
    p = n(39154),
    m = n(356264),
    f = n(628238),
    _ = n(739566),
    h = n(492593),
    g = n(930282),
    b = n(464891),
    E = n(507418),
    y = n(348238),
    x = n(38267),
    C = n(25015),
    v = n(438075),
    O = n(359110),
    j = n(6025),
    I = n(695346),
    S = n(433355),
    T = n(592125),
    N = n(906467),
    P = n(430824),
    A = n(496675),
    w = n(699516),
    Z = n(944486),
    R = n(594174),
    k = n(626135),
    L = n(22665),
    D = n(981631),
    M = n(959517),
    U = n(995717);
function F(e) {
    let { message: t, snapshot: n, index: u } = e,
        p = i.useMemo(() => new d.r(t, n, u), [t, n, u]),
        f = (0, a.e7)([T.Z, R.default, w.Z, A.Z, P.Z, m.Z], () => p.getForwardInfo(T.Z, R.default, w.Z, A.Z, P.Z, m.Z).footerInfo, [p], o.Z),
        _ = i.useCallback(() => {
            var e, n;
            let r = T.Z.getChannel(t.channel_id),
                i = P.Z.getGuild(null == r ? void 0 : r.guild_id),
                l = null == (e = t.messageReference) ? void 0 : e.channel_id,
                a = Z.Z.getCurrentlySelectedChannelId(),
                o = S.ZP.getCurrentSidebarChannelId(null == (n = t.messageReference) ? void 0 : n.channel_id),
                s = a === l && o === (null == r ? void 0 : r.id);
            null == r ||
                null == i ||
                s ||
                null == l ||
                (j.Z.openThreadAsSidebar({
                    channelId: r.id,
                    baseChannelId: l,
                    guildId: r.guild_id
                }),
                (0, O.Kh)(l),
                k.default.track(D.rMx.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: l,
                    destination_message_id: t.id
                }));
        }, [t]);
    return null == f
        ? null
        : (0, r.jsxs)(c.P3F, {
              className: U.footerContainer,
              onClick: _,
              children: [
                  null != f.originIconUrl
                      ? (0, r.jsx)('img', {
                            className: U.originIcon,
                            src: f.originIconUrl,
                            alt: ''
                        })
                      : null,
                  (0, r.jsx)(l.xv, {
                      className: U.footerText,
                      variant: 'text-sm/medium',
                      color: 'none',
                      children: ''.concat(f.originLabel, '  \u2022  ').concat(f.timestampLabel)
                  }),
                  (0, r.jsx)(c.Fbu, {
                      size: 'xxs',
                      color: s.Z.colors.TEXT_LOW_CONTRAST
                  })
              ]
          });
}
function B(e) {
    let { mergedMessageRecord: t, content: n, channel: l, reportingUserId: a, reportedTimestamp: o } = e,
        s = (0, _.JZ)(t.author, l),
        {
            onClickUsername: c,
            onClickAvatar: u,
            onPopoutRequestClose: d,
            showUsernamePopout: p,
            showAvatarPopout: m
        } = (function (e, t) {
            let { popouts: n, setPopout: r } = (0, x.Z)(e.id, M.d$),
                { usernameProfile: l, avatarProfile: a } = n,
                o = (0, y.XO)(e, t, l, r);
            return {
                onClickUsername: o,
                onClickAvatar: (0, y.R9)(a, r),
                onPopoutRequestClose: i.useCallback(
                    () =>
                        r({
                            usernameProfile: !1,
                            avatarProfile: !1,
                            referencedUsernameProfile: !1
                        }),
                    [r]
                ),
                showUsernamePopout: l,
                showAvatarPopout: a
            };
        })(t, l);
    return (0, r.jsx)(h.Z, {
        childrenExecutedCommand: (0, r.jsx)(L.Z, {
            reportingUserId: a,
            guildId: l.guild_id,
            channel: l,
            messageId: t.id,
            reportedTimestamp: o,
            compact: !1
        }),
        childrenHeader: (0, r.jsx)(b.ZP, {
            message: t,
            channel: l,
            author: s,
            guildId: l.guild_id,
            hideTimestamp: !0,
            onClickUsername: c,
            onClickAvatar: u,
            onPopoutRequestClose: d,
            showUsernamePopout: p,
            showAvatarPopout: m,
            renderPopout: E.Z,
            compact: !1,
            displayCompactAvatars: !1
        }),
        childrenMessageContent: (0, r.jsx)(g.ZP, {
            message: t,
            content: n,
            compact: !1
        }),
        disableInteraction: !0,
        compact: !1,
        className: U.message,
        author: s
    });
}
function G(e) {
    var t, n, l;
    let { message: o, snapshot: s, index: c } = e,
        [d, m] = i.useState(void 0);
    i.useEffect(() => {
        var e;
        (null == s || null == (e = s.moderatorReport) ? void 0 : e.reported_user_id) != null &&
            (0, u.PR)(s.moderatorReport.reported_user_id)
                .then((e) => {
                    m(e);
                })
                .catch(() => {});
    }, [null == s || null == (t = s.moderatorReport) ? void 0 : t.reported_user_id]);
    let _ = i.useMemo(() => {
            var e;
            let t = (0, p.Z)(o, s);
            return null != d && (null == s || null == (e = s.moderatorReport) ? void 0 : e.reported_user_id) != null ? t.set('author', d) : t;
        }, [o, s, d]),
        h = I.RS.useSetting(),
        g = I.NA.useSetting(),
        b = (0, a.e7)([N.Z], () => N.Z.isDeveloper),
        E = (0, f.A)((null != (l = _.editedTimestamp) ? l : _.timestamp).valueOf()),
        { content: y, hasSpoilerEmbeds: x } = (0, C.Z)(_, {
            hideSimpleEmbedContent: h && g,
            isInteracting: !1,
            formatInline: !1,
            allowList: E,
            allowHeading: E,
            allowLinks: !0,
            allowDevLinks: b,
            previewLinkTarget: !0
        }),
        O = (0, a.e7)([T.Z], () => T.Z.getChannel(o.channel_id));
    return null == O
        ? null
        : (0, r.jsx)(
              'div',
              {
                  className: U.container,
                  children: (0, r.jsxs)('div', {
                      className: U.content,
                      children: [
                          (0, r.jsx)(B, {
                              mergedMessageRecord: _,
                              content: y,
                              channel: O,
                              reportingUserId: null == s || null == (n = s.moderatorReport) ? void 0 : n.reporting_user_id,
                              reportedTimestamp: o.timestamp
                          }),
                          (0, v.Z)({
                              channelMessageProps: {
                                  message: _,
                                  channel: O,
                                  compact: !1
                              },
                              hasSpoilerEmbeds: x,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: U.nestedAccessories
                          }),
                          (0, r.jsx)(F, {
                              message: o,
                              snapshot: s,
                              index: c
                          })
                      ]
                  })
              },
              c
          );
}
function H(e) {
    let { message: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, n) =>
            (0, r.jsx)(
                G,
                {
                    message: t,
                    snapshot: e,
                    index: n
                },
                n
            )
        )
    });
}
