n.d(t, { Z: () => R });
var i = n(200651),
    l = n(192379),
    a = n(793030),
    r = n(442837),
    s = n(902704),
    o = n(692547),
    c = n(481060),
    d = n(356264),
    u = n(628238),
    m = n(930282),
    _ = n(25015),
    h = n(438075),
    p = n(695346),
    g = n(592125),
    f = n(906467),
    x = n(430824),
    C = n(496675),
    v = n(699516),
    E = n(594174),
    I = n(100604),
    N = n(694784),
    S = n(39154),
    T = n(245216),
    b = n(388032),
    A = n(156135);
function j() {
    return (0, i.jsxs)('div', {
        className: A.headerContainer,
        children: [
            (0, i.jsx)(T.Z, {
                size: 'xs',
                className: A.headerIcon,
                color: o.Z.colors.TEXT_LOW_CONTRAST
            }),
            (0, i.jsx)(a.xv, {
                className: A.headerText,
                variant: 'text-sm/semibold',
                color: 'text-low-contrast',
                children: b.intl.string(b.t.ToyvLi)
            })
        ]
    });
}
function y(e) {
    let { message: t, snapshot: n, index: u } = e,
        m = l.useMemo(() => new I.r(t, n, u), [t, n, u]),
        _ = (0, r.e7)([g.Z, E.default, v.Z, C.Z, x.Z, d.Z], () => m.getForwardInfo(g.Z, E.default, v.Z, C.Z, x.Z, d.Z).footerInfo, [m], s.Z),
        h = l.useCallback(() => {
            (0, N.Z)(t);
        }, [t]);
    return null == _
        ? null
        : (0, i.jsxs)(c.P3F, {
              className: A.footerContainer,
              onClick: h,
              children: [
                  null != _.originIconUrl
                      ? (0, i.jsx)('img', {
                            className: A.originIcon,
                            src: _.originIconUrl,
                            alt: ''
                        })
                      : null,
                  (0, i.jsx)(a.xv, {
                      className: A.footerText,
                      variant: 'text-sm/medium',
                      color: 'none',
                      children: ''.concat(_.originLabel, '  \u2022  ').concat(_.timestampLabel)
                  }),
                  (0, i.jsx)(c.Fbu, {
                      size: 'xxs',
                      color: o.Z.colors.TEXT_LOW_CONTRAST
                  })
              ]
          });
}
function Z(e) {
    var t;
    let { message: n, snapshot: a, index: s } = e,
        o = l.useMemo(() => (0, S.Z)(n, a), [n, a]),
        c = p.RS.useSetting(),
        d = p.NA.useSetting(),
        x = (0, r.e7)([f.Z], () => f.Z.isDeveloper),
        C = (0, u.A)((null !== (t = o.editedTimestamp) && void 0 !== t ? t : o.timestamp).valueOf()),
        { content: v, hasSpoilerEmbeds: E } = (0, _.Z)(o, {
            hideSimpleEmbedContent: c && d,
            isInteracting: !1,
            formatInline: !1,
            allowList: C,
            allowHeading: C,
            allowLinks: !0,
            allowDevLinks: x,
            previewLinkTarget: !0
        }),
        I = (0, r.e7)([g.Z], () => g.Z.getChannel(n.channel_id)),
        N = p.jU.useSetting();
    return null == I
        ? null
        : (0, i.jsxs)(
              'div',
              {
                  className: A.container,
                  children: [
                      (0, i.jsx)('div', { className: A.quote }),
                      (0, i.jsxs)('div', {
                          className: A.content,
                          children: [
                              (0, i.jsx)(j, {}),
                              (0, i.jsx)(m.ZP, {
                                  message: o,
                                  content: v
                              }),
                              (0, h.Z)({
                                  channelMessageProps: {
                                      message: o,
                                      channel: I,
                                      compact: N
                                  },
                                  hasSpoilerEmbeds: E,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1
                              }),
                              (0, i.jsx)(y, {
                                  message: n,
                                  snapshot: a,
                                  index: s
                              })
                          ]
                      })
                  ]
              },
              s
          );
}
function R(e) {
    let { message: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.messageSnapshots.map((e, n) =>
            (0, i.jsx)(
                Z,
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
