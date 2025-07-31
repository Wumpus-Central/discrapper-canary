n.d(t, { Z: () => A });
var r = n(255367),
    i = n(73800),
    l = n(793030),
    a = n(442837),
    o = n(902704),
    s = n(692547),
    c = n(481060),
    u = n(356264),
    d = n(628238),
    p = n(930282),
    m = n(25015),
    f = n(438075),
    _ = n(695346),
    g = n(592125),
    h = n(906467),
    b = n(430824),
    E = n(496675),
    C = n(699516),
    O = n(594174),
    v = n(100604),
    y = n(694784),
    x = n(39154),
    I = n(245216),
    j = n(388032),
    S = n(752386);
function T() {
    return (0, r.jsxs)('div', {
        className: S.headerContainer,
        children: [
            (0, r.jsx)(I.Z, {
                size: 'xs',
                className: S.headerIcon,
                color: s.Z.colors.TEXT_LOW_CONTRAST
            }),
            (0, r.jsx)(l.xv, {
                className: S.headerText,
                variant: 'text-sm/semibold',
                color: 'text-low-contrast',
                children: j.intl.string(j.t.ToyvLi)
            })
        ]
    });
}
function N(e) {
    let { message: t, snapshot: n, index: d } = e,
        p = i.useMemo(() => new v.r(t, n, d), [t, n, d]),
        m = (0, a.e7)([g.Z, O.default, C.Z, E.Z, b.Z, u.Z], () => p.getForwardInfo(g.Z, O.default, C.Z, E.Z, b.Z, u.Z).footerInfo, [p], o.Z),
        f = i.useCallback(() => {
            (0, y.Z)(t);
        }, [t]);
    return null == m
        ? null
        : (0, r.jsxs)(c.P3F, {
              className: S.footerContainer,
              onClick: f,
              children: [
                  null != m.originIconUrl
                      ? (0, r.jsx)('img', {
                            className: S.originIcon,
                            src: m.originIconUrl,
                            alt: ''
                        })
                      : null,
                  (0, r.jsx)(l.xv, {
                      className: S.footerText,
                      variant: 'text-sm/medium',
                      color: 'none',
                      children: ''.concat(m.originLabel, '  \u2022  ').concat(m.timestampLabel)
                  }),
                  (0, r.jsx)(c.Fbu, {
                      size: 'xxs',
                      color: s.Z.colors.TEXT_LOW_CONTRAST
                  })
              ]
          });
}
function P(e) {
    var t;
    let { message: n, snapshot: l, index: o } = e,
        s = i.useMemo(() => (0, x.Z)(n, l), [n, l]),
        c = _.RS.useSetting(),
        u = _.NA.useSetting(),
        b = (0, a.e7)([h.Z], () => h.Z.isDeveloper),
        E = (0, d.A)((null != (t = s.editedTimestamp) ? t : s.timestamp).valueOf()),
        { content: C, hasSpoilerEmbeds: O } = (0, m.Z)(s, {
            hideSimpleEmbedContent: c && u,
            isInteracting: !1,
            formatInline: !1,
            allowList: E,
            allowHeading: E,
            allowLinks: !0,
            allowDevLinks: b,
            previewLinkTarget: !0
        }),
        v = (0, a.e7)([g.Z], () => g.Z.getChannel(n.channel_id)),
        y = _.jU.useSetting();
    return null == v
        ? null
        : (0, r.jsxs)(
              'div',
              {
                  className: S.container,
                  children: [
                      (0, r.jsx)('div', { className: S.quote }),
                      (0, r.jsxs)('div', {
                          className: S.content,
                          children: [
                              (0, r.jsx)(T, {}),
                              (0, r.jsx)(p.ZP, {
                                  message: s,
                                  content: C,
                                  compact: y
                              }),
                              (0, f.Z)({
                                  channelMessageProps: {
                                      message: s,
                                      channel: v,
                                      compact: y
                                  },
                                  hasSpoilerEmbeds: O,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1
                              }),
                              (0, r.jsx)(N, {
                                  message: n,
                                  snapshot: l,
                                  index: o
                              })
                          ]
                      })
                  ]
              },
              o
          );
}
function A(e) {
    let { message: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, n) =>
            (0, r.jsx)(
                P,
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
