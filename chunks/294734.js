n.d(t, { Z: () => A });
var r = n(200651),
    i = n(192379),
    a = n(793030),
    l = n(442837),
    o = n(902704),
    s = n(692547),
    c = n(481060),
    u = n(356264),
    d = n(628238),
    p = n(930282),
    m = n(25015),
    f = n(438075),
    h = n(695346),
    g = n(592125),
    _ = n(906467),
    b = n(430824),
    x = n(496675),
    y = n(699516),
    E = n(594174),
    v = n(100604),
    O = n(694784),
    N = n(39154),
    j = n(245216),
    C = n(388032),
    I = n(752386);
function S() {
    return (0, r.jsxs)('div', {
        className: I.headerContainer,
        children: [
            (0, r.jsx)(j.Z, {
                size: 'xs',
                className: I.headerIcon,
                color: s.Z.colors.TEXT_LOW_CONTRAST
            }),
            (0, r.jsx)(a.xv, {
                className: I.headerText,
                variant: 'text-sm/semibold',
                color: 'text-low-contrast',
                children: C.NW.string(C.t.ToyvLi)
            })
        ]
    });
}
function T(e) {
    let { message: t, snapshot: n, index: d } = e,
        p = i.useMemo(() => new v.r(t, n, d), [t, n, d]),
        m = (0, l.e7)([g.Z, E.default, y.Z, x.Z, b.Z, u.Z], () => p.getForwardInfo(g.Z, E.default, y.Z, x.Z, b.Z, u.Z).footerInfo, [p], o.Z),
        f = i.useCallback(() => {
            (0, O.Z)(t);
        }, [t]);
    return null == m
        ? null
        : (0, r.jsxs)(c.P3F, {
              className: I.footerContainer,
              onClick: f,
              children: [
                  null != m.originIconUrl
                      ? (0, r.jsx)('img', {
                            className: I.originIcon,
                            src: m.originIconUrl,
                            alt: ''
                        })
                      : null,
                  (0, r.jsx)(a.xv, {
                      className: I.footerText,
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
    let { message: n, snapshot: a, index: o } = e,
        s = i.useMemo(() => (0, N.Z)(n, a), [n, a]),
        c = h.RS.useSetting(),
        u = h.NA.useSetting(),
        b = (0, l.e7)([_.Z], () => _.Z.isDeveloper),
        x = (0, d.A)((null != (t = s.editedTimestamp) ? t : s.timestamp).valueOf()),
        { content: y, hasSpoilerEmbeds: E } = (0, m.Z)(s, {
            hideSimpleEmbedContent: c && u,
            isInteracting: !1,
            formatInline: !1,
            allowList: x,
            allowHeading: x,
            allowLinks: !0,
            allowDevLinks: b,
            previewLinkTarget: !0
        }),
        v = (0, l.e7)([g.Z], () => g.Z.getChannel(n.channel_id)),
        O = h.jU.useSetting();
    return null == v
        ? null
        : (0, r.jsxs)(
              'div',
              {
                  className: I.container,
                  children: [
                      (0, r.jsx)('div', { className: I.quote }),
                      (0, r.jsxs)('div', {
                          className: I.content,
                          children: [
                              (0, r.jsx)(S, {}),
                              (0, r.jsx)(p.ZP, {
                                  message: s,
                                  content: y
                              }),
                              (0, f.Z)({
                                  channelMessageProps: {
                                      message: s,
                                      channel: v,
                                      compact: O
                                  },
                                  hasSpoilerEmbeds: E,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1
                              }),
                              (0, r.jsx)(T, {
                                  message: n,
                                  snapshot: a,
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
