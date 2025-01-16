n.d(t, {
    Z: function () {
        return P;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(793030),
    a = n(442837),
    o = n(902704),
    s = n(692547),
    c = n(481060),
    d = n(356264),
    u = n(628238),
    m = n(930282),
    h = n(25015),
    f = n(438075),
    p = n(695346),
    _ = n(592125),
    g = n(906467),
    E = n(430824),
    C = n(496675),
    I = n(699516),
    x = n(594174),
    N = n(100604),
    v = n(694784),
    T = n(39154),
    S = n(245216),
    A = n(388032),
    b = n(688277);
function j() {
    return (0, i.jsxs)('div', {
        className: b.headerContainer,
        children: [
            (0, i.jsx)(S.Z, {
                size: 'xs',
                className: b.headerIcon,
                color: s.Z.colors.TEXT_LOW_CONTRAST
            }),
            (0, i.jsx)(l.xv, {
                className: b.headerText,
                variant: 'text-sm/semibold',
                color: 'text-low-contrast',
                children: A.intl.string(A.t.ToyvLi)
            })
        ]
    });
}
function R(e) {
    let { message: t, snapshot: n, index: u } = e,
        m = r.useMemo(() => new N.r(t, n, u), [t, n, u]),
        h = (0, a.e7)([_.Z, x.default, I.Z, C.Z, E.Z, d.Z], () => m.getForwardInfo(_.Z, x.default, I.Z, C.Z, E.Z, d.Z).footerInfo, [m], o.Z),
        f = r.useCallback(() => {
            (0, v.Z)(t);
        }, [t]);
    return null == h
        ? null
        : (0, i.jsxs)(c.Clickable, {
              className: b.footerContainer,
              onClick: f,
              children: [
                  null != h.originIconUrl
                      ? (0, i.jsx)('img', {
                            className: b.originIcon,
                            src: h.originIconUrl,
                            alt: ''
                        })
                      : null,
                  (0, i.jsx)(l.xv, {
                      className: b.footerText,
                      variant: 'text-sm/medium',
                      color: 'none',
                      children: ''.concat(h.originLabel, '  \u2022  ').concat(h.timestampLabel)
                  }),
                  (0, i.jsx)(c.ChevronSmallRightIcon, {
                      size: 'xxs',
                      color: s.Z.colors.TEXT_LOW_CONTRAST
                  })
              ]
          });
}
function Z(e) {
    var t;
    let { message: n, snapshot: l, index: o } = e,
        s = r.useMemo(() => (0, T.Z)(n, l), [n, l]),
        c = p.RS.useSetting(),
        d = p.NA.useSetting(),
        E = (0, a.e7)([g.Z], () => g.Z.isDeveloper),
        C = (0, u.A)((null !== (t = s.editedTimestamp) && void 0 !== t ? t : s.timestamp).valueOf()),
        { content: I, hasSpoilerEmbeds: x } = (0, h.Z)(s, {
            hideSimpleEmbedContent: c && d,
            isInteracting: !1,
            formatInline: !1,
            allowList: C,
            allowHeading: C,
            allowLinks: !0,
            allowDevLinks: E,
            previewLinkTarget: !0
        }),
        N = (0, a.e7)([_.Z], () => _.Z.getChannel(n.channel_id)),
        v = p.jU.useSetting();
    return null == N
        ? null
        : (0, i.jsxs)(
              'div',
              {
                  className: b.container,
                  children: [
                      (0, i.jsx)('div', { className: b.quote }),
                      (0, i.jsxs)('div', {
                          className: b.content,
                          children: [
                              (0, i.jsx)(j, {}),
                              (0, i.jsx)(m.ZP, {
                                  message: s,
                                  content: I
                              }),
                              (0, f.Z)({
                                  channelMessageProps: {
                                      message: s,
                                      channel: N,
                                      compact: v
                                  },
                                  hasSpoilerEmbeds: x,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1
                              }),
                              (0, i.jsx)(R, {
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
function P(e) {
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
