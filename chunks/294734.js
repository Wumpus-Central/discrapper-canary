n.d(t, { Z: () => A });
var r = n(200651),
    i = n(192379),
    a = n(793030),
    o = n(442837),
    l = n(902704),
    s = n(692547),
    c = n(481060),
    d = n(356264),
    u = n(628238),
    p = n(930282),
    m = n(25015),
    f = n(438075),
    h = n(695346),
    g = n(592125),
    _ = n(906467),
    b = n(430824),
    v = n(496675),
    y = n(699516),
    x = n(594174),
    O = n(100604),
    E = n(694784),
    j = n(39154),
    N = n(245216),
    C = n(388032),
    I = n(29548);
function S() {
    return (0, r.jsxs)('div', {
        className: I.headerContainer,
        children: [
            (0, r.jsx)(N.Z, {
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
function P(e) {
    let { message: t, snapshot: n, index: u } = e,
        p = i.useMemo(() => new O.r(t, n, u), [t, n, u]),
        m = (0, o.e7)([g.Z, x.default, y.Z, v.Z, b.Z, d.Z], () => p.getForwardInfo(g.Z, x.default, y.Z, v.Z, b.Z, d.Z).footerInfo, [p], l.Z),
        f = i.useCallback(() => {
            (0, E.Z)(t);
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
function T(e) {
    var t;
    let { message: n, snapshot: a, index: l } = e,
        s = i.useMemo(() => (0, j.Z)(n, a), [n, a]),
        c = h.RS.useSetting(),
        d = h.NA.useSetting(),
        b = (0, o.e7)([_.Z], () => _.Z.isDeveloper),
        v = (0, u.A)((null !== (t = s.editedTimestamp) && void 0 !== t ? t : s.timestamp).valueOf()),
        { content: y, hasSpoilerEmbeds: x } = (0, m.Z)(s, {
            hideSimpleEmbedContent: c && d,
            isInteracting: !1,
            formatInline: !1,
            allowList: v,
            allowHeading: v,
            allowLinks: !0,
            allowDevLinks: b,
            previewLinkTarget: !0
        }),
        O = (0, o.e7)([g.Z], () => g.Z.getChannel(n.channel_id)),
        E = h.jU.useSetting();
    return null == O
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
                                      channel: O,
                                      compact: E
                                  },
                                  hasSpoilerEmbeds: x,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1
                              }),
                              (0, r.jsx)(P, {
                                  message: n,
                                  snapshot: a,
                                  index: l
                              })
                          ]
                      })
                  ]
              },
              l
          );
}
function A(e) {
    let { message: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, n) =>
            (0, r.jsx)(
                T,
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
