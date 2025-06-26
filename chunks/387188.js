n.d(t, {
    e: () => y,
    i: () => v
}),
    n(35282),
    n(388685);
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
    h = n(339085),
    g = n(981631),
    _ = n(388032),
    b = n(841935);
let x = /^<(a?):(\w+):(\d+)>/;
function E(e) {
    let t = i.useMemo(() => {
        var t;
        return null == (t = x.exec(e)) ? void 0 : t[3];
    }, [e]);
    return (0, s.e7)([h.ZP], () => (null == t ? null : h.ZP.getCustomEmojiById(t)));
}
function y(e) {
    let { message: t, className: n } = e,
        [l, o] = i.useState(!1),
        s = t.getChannelId(),
        d = E(t.content),
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
    return (0, r.jsx)(c.P3F, {
        className: a()(n, b.clickableEmoji),
        onClick: p,
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        children: (0, r.jsx)(c.Text, {
            variant: 'text-sm/semibold',
            color: 'text-secondary',
            className: b.ctaText,
            children: _.intl.format(_.t.z5Rnl5, {
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
function v(e) {
    var t;
    let { message: n, channel: l, compact: a, usernameHook: s } = e,
        [m, h] = i.useState(!1),
        x = (0, d.ZP)(n),
        y = s(x),
        v = E(n.content),
        C = i.useCallback(() => {
            null != v &&
                f.S.dispatchToLastSubscribed(g.CkL.INSERT_TEXT, {
                    plainText: ':'.concat(v.name, ':'),
                    addSpace: !0
                });
        }, [v]);
    return null == v
        ? null
        : (0, r.jsx)(p.Z, {
              iconNode: (0, r.jsx)(o.EO4, {
                  size: 'md',
                  color: 'currentColor'
              }),
              iconContainerClassName: b.iconContainer,
              timestamp: n.timestamp,
              timestampClassName: b.timestamp,
              compact: a,
              contentClassName: b.content,
              children: (0, r.jsx)('div', {
                  className: b.textContainer,
                  children: (0, r.jsx)(c.Text, {
                      variant: 'text-md/normal',
                      color: 'text-secondary',
                      children: _.intl.format(_.t.uoCHWV, {
                          username: x.nick,
                          usernameHook: y,
                          emoji: (0, r.jsxs)(c.P3F, {
                              className: b.clickableEmoji,
                              tag: 'span',
                              onClick: C,
                              onMouseEnter: () => h(!0),
                              onMouseLeave: () => h(!1),
                              children: [
                                  (0, r.jsx)(u.Z, {
                                      emojiName: v.name,
                                      size: 'default',
                                      emojiId: v.id,
                                      animated: v.animated,
                                      isInteracting: m,
                                      channelId: l.id,
                                      messageId: n.id,
                                      className: b.clickableEmojiPreview
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      tag: 'span',
                                      variant: 'text-md/medium',
                                      color: 'text-primary',
                                      children: ':'.concat(null != (t = v.originalName) ? t : v.name, ':')
                                  })
                              ]
                          })
                      })
                  })
              })
          });
}
