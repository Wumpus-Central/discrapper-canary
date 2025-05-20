n.d(t, { Z: () => M }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(793030),
    a = n(442837),
    o = n(902704),
    s = n(692547),
    c = n(481060),
    u = n(232567),
    d = n(100604),
    p = n(694784),
    m = n(39154),
    f = n(356264),
    h = n(628238),
    g = n(739566),
    _ = n(492593),
    b = n(930282),
    E = n(464891),
    x = n(507418),
    y = n(348238),
    v = n(38267),
    O = n(25015),
    j = n(438075),
    C = n(695346),
    S = n(592125),
    I = n(906467),
    N = n(430824),
    T = n(496675),
    P = n(699516),
    A = n(594174),
    w = n(22665),
    Z = n(959517),
    R = n(995717);
function k(e) {
    let { message: t, snapshot: n, index: u } = e,
        m = i.useMemo(() => new d.r(t, n, u), [t, n, u]),
        h = (0, a.e7)([S.Z, A.default, P.Z, T.Z, N.Z, f.Z], () => m.getForwardInfo(S.Z, A.default, P.Z, T.Z, N.Z, f.Z).footerInfo, [m], o.Z),
        g = i.useCallback(() => {
            (0, p.Z)(t);
        }, [t]);
    return null == h
        ? null
        : (0, r.jsxs)(c.P3F, {
              className: R.footerContainer,
              onClick: g,
              children: [
                  null != h.originIconUrl
                      ? (0, r.jsx)('img', {
                            className: R.originIcon,
                            src: h.originIconUrl,
                            alt: ''
                        })
                      : null,
                  (0, r.jsx)(l.xv, {
                      className: R.footerText,
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
function D(e) {
    let { mergedMessageRecord: t, content: n, channel: l, reportingUserId: a, reportedTimestamp: o } = e,
        s = (0, g.JZ)(t.author, l),
        {
            onClickUsername: c,
            onClickAvatar: u,
            onPopoutRequestClose: d,
            showUsernamePopout: p,
            showAvatarPopout: m
        } = (function (e, t) {
            let { popouts: n, setPopout: r } = (0, v.Z)(e.id, Z.d$),
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
    return (0, r.jsx)(_.Z, {
        childrenExecutedCommand: (0, r.jsx)(w.Z, {
            reportingUserId: a,
            guildId: l.guild_id,
            channel: l,
            messageId: t.id,
            reportedTimestamp: o,
            compact: !1
        }),
        childrenHeader: (0, r.jsx)(E.ZP, {
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
        childrenMessageContent: (0, r.jsx)(b.ZP, {
            message: t,
            content: n,
            compact: !1
        }),
        disableInteraction: !0,
        compact: !1,
        className: R.message
    });
}
function L(e) {
    var t, n, l;
    let { message: o, snapshot: s, index: c } = e,
        [d, p] = i.useState(void 0);
    i.useEffect(() => {
        var e;
        (null == s || null == (e = s.moderatorReport) ? void 0 : e.reported_user_id) != null &&
            (0, u.PR)(s.moderatorReport.reported_user_id)
                .then((e) => {
                    p(e);
                })
                .catch(() => {});
    }, [null == s || null == (t = s.moderatorReport) ? void 0 : t.reported_user_id]);
    let f = i.useMemo(() => {
            var e;
            let t = (0, m.Z)(o, s);
            return null != d && (null == s || null == (e = s.moderatorReport) ? void 0 : e.reported_user_id) != null ? t.set('author', d) : t;
        }, [o, s, d]),
        g = C.RS.useSetting(),
        _ = C.NA.useSetting(),
        b = (0, a.e7)([I.Z], () => I.Z.isDeveloper),
        E = (0, h.A)((null != (l = f.editedTimestamp) ? l : f.timestamp).valueOf()),
        { content: x, hasSpoilerEmbeds: y } = (0, O.Z)(f, {
            hideSimpleEmbedContent: g && _,
            isInteracting: !1,
            formatInline: !1,
            allowList: E,
            allowHeading: E,
            allowLinks: !0,
            allowDevLinks: b,
            previewLinkTarget: !0
        }),
        v = (0, a.e7)([S.Z], () => S.Z.getChannel(o.channel_id));
    return null == v
        ? null
        : (0, r.jsx)(
              'div',
              {
                  className: R.container,
                  children: (0, r.jsxs)('div', {
                      className: R.content,
                      children: [
                          (0, r.jsx)(D, {
                              mergedMessageRecord: f,
                              content: x,
                              channel: v,
                              reportingUserId: null == s || null == (n = s.moderatorReport) ? void 0 : n.reporting_user_id,
                              reportedTimestamp: o.timestamp
                          }),
                          (0, j.Z)({
                              channelMessageProps: {
                                  message: f,
                                  channel: v,
                                  compact: !1
                              },
                              hasSpoilerEmbeds: y,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: R.nestedAccessories
                          }),
                          (0, r.jsx)(k, {
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
function M(e) {
    let { message: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, n) =>
            (0, r.jsx)(
                L,
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
