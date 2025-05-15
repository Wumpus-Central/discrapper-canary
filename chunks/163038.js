n.d(t, { Z: () => L });
var r = n(255367),
    i = n(73800),
    l = n(793030),
    a = n(442837),
    o = n(902704),
    s = n(692547),
    c = n(481060),
    u = n(100604),
    d = n(694784),
    p = n(39154),
    m = n(356264),
    f = n(628238),
    h = n(739566),
    g = n(492593),
    _ = n(930282),
    b = n(464891),
    x = n(507418),
    E = n(348238),
    y = n(38267),
    v = n(25015),
    O = n(438075),
    j = n(695346),
    C = n(592125),
    S = n(906467),
    I = n(430824),
    N = n(496675),
    T = n(699516),
    P = n(594174),
    A = n(22665),
    w = n(959517),
    Z = n(995717);
function R(e) {
    let { message: t, snapshot: n, index: p } = e,
        f = i.useMemo(() => new u.r(t, n, p), [t, n, p]),
        h = (0, a.e7)([C.Z, P.default, T.Z, N.Z, I.Z, m.Z], () => f.getForwardInfo(C.Z, P.default, T.Z, N.Z, I.Z, m.Z).footerInfo, [f], o.Z),
        g = i.useCallback(() => {
            (0, d.Z)(t);
        }, [t]);
    return null == h
        ? null
        : (0, r.jsxs)(c.P3F, {
              className: Z.footerContainer,
              onClick: g,
              children: [
                  null != h.originIconUrl
                      ? (0, r.jsx)('img', {
                            className: Z.originIcon,
                            src: h.originIconUrl,
                            alt: ''
                        })
                      : null,
                  (0, r.jsx)(l.xv, {
                      className: Z.footerText,
                      variant: 'text-sm/medium',
                      color: 'none',
                      children: ''.concat(h.originLabel, '  \u2022  ').concat(h.timestampLabel)
                  }),
                  (0, r.jsx)(c.Fbu, {
                      size: 'xxs',
                      color: s.Z.colors.TEXT_LOW_CONTRAST
                  })
              ]
          });
}
function k(e) {
    let { mergedMessageRecord: t, content: n, channel: l, reportingUserId: a, reportedTimestamp: o } = e,
        s = (0, h.JZ)(t.author, l),
        {
            onClickUsername: c,
            onClickAvatar: u,
            onPopoutRequestClose: d,
            showUsernamePopout: p,
            showAvatarPopout: m
        } = (function (e, t) {
            let { popouts: n, setPopout: r } = (0, y.Z)(e.id, w.d$),
                { usernameProfile: l, avatarProfile: a } = n,
                o = (0, E.XO)(e, t, l, r);
            return {
                onClickUsername: o,
                onClickAvatar: (0, E.R9)(a, r),
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
    return (0, r.jsx)(g.Z, {
        childrenExecutedCommand: (0, r.jsx)(A.Z, {
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
            renderPopout: x.Z,
            compact: !1,
            displayCompactAvatars: !1
        }),
        childrenMessageContent: (0, r.jsx)(_.ZP, {
            message: t,
            content: n,
            compact: !1
        }),
        disableInteraction: !0,
        compact: !1,
        className: Z.message
    });
}
function D(e) {
    var t, n;
    let { message: l, snapshot: o, index: s } = e,
        c = i.useMemo(() => (0, p.Z)(l, o), [l, o]),
        u = j.RS.useSetting(),
        d = j.NA.useSetting(),
        m = (0, a.e7)([S.Z], () => S.Z.isDeveloper),
        h = (0, f.A)((null != (n = c.editedTimestamp) ? n : c.timestamp).valueOf()),
        { content: g, hasSpoilerEmbeds: _ } = (0, v.Z)(c, {
            hideSimpleEmbedContent: u && d,
            isInteracting: !1,
            formatInline: !1,
            allowList: h,
            allowHeading: h,
            allowLinks: !0,
            allowDevLinks: m,
            previewLinkTarget: !0
        }),
        b = (0, a.e7)([C.Z], () => C.Z.getChannel(l.channel_id));
    return null == b
        ? null
        : (0, r.jsx)(
              'div',
              {
                  className: Z.container,
                  children: (0, r.jsxs)('div', {
                      className: Z.content,
                      children: [
                          (0, r.jsx)(k, {
                              mergedMessageRecord: c,
                              content: g,
                              channel: b,
                              reportingUserId: null == o || null == (t = o.moderatorReport) ? void 0 : t.reporting_user_id,
                              reportedTimestamp: l.timestamp
                          }),
                          (0, O.Z)({
                              channelMessageProps: {
                                  message: c,
                                  channel: b,
                                  compact: !1
                              },
                              hasSpoilerEmbeds: _,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: Z.nestedAccessories
                          }),
                          (0, r.jsx)(R, {
                              message: l,
                              snapshot: o,
                              index: s
                          })
                      ]
                  })
              },
              s
          );
}
function L(e) {
    let { message: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, n) =>
            (0, r.jsx)(
                D,
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
