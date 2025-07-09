(n.d(t, {
    e: () => x,
    i: () => C
}),
    n(35282),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(657707),
    s = n(442837),
    c = n(481060),
    u = n(596454),
    d = n(739566),
    p = n(834129),
    m = n(222677),
    f = n(585483),
    _ = n(339085),
    g = n(981631),
    h = n(388032),
    b = n(841935);
let E = /^<(a?):(\w+):(\d+)>/;
function y(e) {
    let t = i.useMemo(() => {
        var t;
        return null == (t = E.exec(e)) ? void 0 : t[3];
    }, [e]);
    return (0, s.e7)([_.ZP], () => (null == t ? null : _.ZP.getCustomEmojiById(t)));
}
function x(e) {
    let { message: t, className: n } = e,
        [l, o] = i.useState(!1),
        s = t.getChannelId(),
        d = y(t.content),
        p = i.useCallback(() => {
            null != d &&
                (0, m.rU)(
                    s,
                    t.id,
                    {
                        id: d.id,
                        name: d.name
                    },
                    m.TW.MESSAGE
                );
        }, [s, d, t.id]);
    return null == d
        ? null
        : (0, r.jsx)(c.P3F, {
              className: a()(n, b.ctaReactionButton),
              onClick: p,
              onMouseEnter: () => o(!0),
              onMouseLeave: () => o(!1),
              children: (0, r.jsx)(c.Text, {
                  variant: 'text-sm/semibold',
                  color: 'text-secondary',
                  className: b.ctaText,
                  children: h.intl.format(h.t.z5Rnl5, {
                      renderedEmoji:
                          null == d
                              ? null
                              : (0, r.jsx)(u.Z, {
                                    emojiName: d.name,
                                    size: 'default',
                                    emojiId: d.id,
                                    animated: d.animated,
                                    isInteracting: l,
                                    channelId: s,
                                    messageId: t.id,
                                    className: b.ctaEmoji
                                })
                  })
              })
          });
}
function C(e) {
    var t;
    let { message: n, channel: l, compact: a, usernameHook: s } = e,
        [m, _] = i.useState(!1),
        E = (0, d.ZP)(n),
        x = s(E),
        C = y(n.content),
        v = i.useCallback(() => {
            null != C &&
                f.S.dispatchToLastSubscribed(g.CkL.INSERT_TEXT, {
                    plainText: ':'.concat(C.name, ':'),
                    addSpace: !0
                });
        }, [C]);
    return (0, r.jsx)(p.Z, {
        iconNode: (0, r.jsx)(o.EO4, {
            size: 'refresh_sm',
            color: 'currentColor'
        }),
        iconContainerClassName: b.iconContainer,
        timestamp: n.timestamp,
        compact: a,
        contentClassName: b.content,
        children: (0, r.jsx)(c.Text, {
            tag: 'span',
            variant: 'text-md/normal',
            color: 'text-secondary',
            children:
                null == C
                    ? h.intl.format(h.t.k6Jc9f, {
                          username: E.nick,
                          usernameHook: x
                      })
                    : h.intl.format(h.t.uoCHWV, {
                          username: E.nick,
                          usernameHook: x,
                          emoji: (0, r.jsxs)(c.P3F, {
                              className: b.clickableEmoji,
                              tag: 'span',
                              onClick: v,
                              onMouseEnter: () => _(!0),
                              onMouseLeave: () => _(!1),
                              children: [
                                  (0, r.jsx)(u.Z, {
                                      emojiName: C.name,
                                      size: 'default',
                                      emojiId: C.id,
                                      animated: C.animated,
                                      isInteracting: m,
                                      channelId: l.id,
                                      messageId: n.id,
                                      className: b.clickableEmojiPreview
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      tag: 'span',
                                      variant: 'text-md/medium',
                                      color: 'text-primary',
                                      children: ':'.concat(null != (t = C.originalName) ? t : C.name, ':')
                                  })
                              ]
                          })
                      })
        })
    });
}
