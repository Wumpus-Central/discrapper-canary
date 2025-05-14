n.d(t, { Z: () => M });
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
    A = n(959517),
    w = n(776571),
    Z = n(388032),
    R = n(995717);
function k(e) {
    let { message: t, snapshot: n, index: p } = e,
        f = i.useMemo(() => new u.r(t, n, p), [t, n, p]),
        h = (0, a.e7)([C.Z, P.default, T.Z, N.Z, I.Z, m.Z], () => f.getForwardInfo(C.Z, P.default, T.Z, N.Z, I.Z, m.Z).footerInfo, [f], o.Z),
        g = i.useCallback(() => {
            (0, d.Z)(t);
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
    let { mergedMessageRecord: t, content: n, channel: l, messageDisplayCompact: a } = e,
        o = (0, h.JZ)(t.author, l),
        {
            onClickUsername: s,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: d,
            showAvatarPopout: p
        } = (function (e, t) {
            let { popouts: n, setPopout: r } = (0, y.Z)(e.id, A.d$),
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
        childrenHeader: (0, r.jsx)(b.ZP, {
            message: t,
            channel: l,
            author: o,
            guildId: l.guild_id,
            hideTimestamp: !0,
            onClickUsername: s,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: d,
            showAvatarPopout: p,
            renderPopout: x.Z
        }),
        childrenMessageContent: (0, r.jsx)(_.ZP, {
            message: t,
            content: n,
            compact: a
        }),
        disableInteraction: !0,
        compact: a,
        className: R.message
    });
}
function L(e) {
    var t;
    let { message: n, snapshot: o, index: u } = e,
        d = i.useMemo(() => (0, p.Z)(n, o), [n, o]),
        m = j.RS.useSetting(),
        h = j.NA.useSetting(),
        g = (0, a.e7)([S.Z], () => S.Z.isDeveloper),
        _ = (0, f.A)((null != (t = d.editedTimestamp) ? t : d.timestamp).valueOf()),
        { content: b, hasSpoilerEmbeds: x } = (0, v.Z)(d, {
            hideSimpleEmbedContent: m && h,
            isInteracting: !1,
            formatInline: !1,
            allowList: _,
            allowHeading: _,
            allowLinks: !0,
            allowDevLinks: g,
            previewLinkTarget: !0
        }),
        E = (0, a.e7)([C.Z], () => C.Z.getChannel(n.channel_id)),
        y = j.jU.useSetting();
    return null == E
        ? null
        : (0, r.jsx)(
              'div',
              {
                  className: R.container,
                  children: (0, r.jsxs)('div', {
                      className: R.content,
                      children: [
                          (0, r.jsxs)('div', {
                              className: R.headerContainer,
                              children: [
                                  (0, r.jsx)(c.U65, {
                                      size: 'xs',
                                      className: R.headerIcon,
                                      color: s.Z.colors.TEXT_LOW_CONTRAST
                                  }),
                                  (0, r.jsx)(l.xv, {
                                      className: R.headerText,
                                      variant: 'text-sm/semibold',
                                      color: 'text-low-contrast',
                                      children: Z.intl.string(w.default.xpRjfX)
                                  })
                              ]
                          }),
                          (0, r.jsx)(D, {
                              mergedMessageRecord: d,
                              content: b,
                              channel: E,
                              messageDisplayCompact: y
                          }),
                          (0, O.Z)({
                              channelMessageProps: {
                                  message: d,
                                  channel: E,
                                  compact: y
                              },
                              hasSpoilerEmbeds: x,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: R.nestedAccessories
                          }),
                          (0, r.jsx)(k, {
                              message: n,
                              snapshot: o,
                              index: u
                          })
                      ]
                  })
              },
              u
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
