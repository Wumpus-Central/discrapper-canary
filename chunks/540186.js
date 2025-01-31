t.d(n, { Z: () => j }), t(653041);
var l = t(200651);
t(192379);
var i = t(442837),
    a = t(481060),
    r = t(594174),
    s = t(311888),
    o = t(63063),
    c = t(5192),
    d = t(431328),
    u = t(501655),
    _ = t(659972),
    h = t(981631),
    x = t(765305),
    m = t(388032),
    g = t(338456);
function b(e) {
    let { icon: n } = e;
    return (0, l.jsx)('div', {
        className: g.iconContainer,
        children: (0, l.jsx)(n, {
            color: 'currentColor',
            size: 'md'
        })
    });
}
function v(e) {
    let { icon: n, text: t } = e;
    return (0, l.jsxs)('div', {
        className: g.listItemContainer,
        children: [
            (0, l.jsx)('div', {
                className: g.listItemIconContainer,
                children: n
            }),
            (0, l.jsx)(a.Text, {
                className: g.listItemText,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: t
            })
        ]
    });
}
function N(e) {
    var n;
    let { guild: t, channel: a, stageData: s } = e,
        o = (0, i.e7)([r.default], () => r.default.getCurrentUser(), []),
        h = {
            id: '1337',
            guild_id: t.id,
            channel_id: a.id,
            topic: s.topic,
            description: s.description,
            privacy_level: null !== (n = s.privacyLevel) && void 0 !== n ? n : x.j8.PUBLIC
        },
        m = (0, d.w8)(a.id, u.pV.SPEAKER),
        b = (0, d.Rk)(a.id, u.pV.AUDIENCE),
        v = m.slice(0, 5);
    return (
        null ==
            v.find((e) => {
                var n;
                return (null === (n = e.user) || void 0 === n ? void 0 : n.id) === (null == o ? void 0 : o.id);
            }) &&
            v.push({
                user: o,
                userNick: c.ZP.getName(t.id, a.id, o)
            }),
        (0, l.jsx)('div', {
            className: g.previewCardContainer,
            children: (0, l.jsx)('div', {
                className: g.previewCard,
                children: (0, l.jsx)(_.Z, {
                    guild: t,
                    stageInstance: h,
                    showGuildPopout: !1,
                    setShowGuildPopout: () => {},
                    source: _.k.UNSPECIFIED,
                    speakers: v,
                    speakerCount: m.length,
                    audienceCount: Math.max(1337, b),
                    channelName: a.name
                })
            })
        })
    );
}
function j(e) {
    let { guild: n, channel: t, stageData: i, headerId: r, loading: c, onNext: d, onCancel: u, onBack: _ } = e;
    return null == n || null == t || null == i
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(N, {
                      guild: n,
                      channel: t,
                      stageData: i
                  }),
                  (0, l.jsxs)(a.hzk, {
                      className: g.container,
                      children: [
                          (0, l.jsxs)('div', {
                              className: g.header,
                              children: [
                                  (0, l.jsx)(a.X6q, {
                                      id: r,
                                      className: g.__invalid_title,
                                      variant: 'heading-xl/semibold',
                                      children: m.intl.string(m.t.GXpXTE)
                                  }),
                                  (0, l.jsx)(a.Text, {
                                      className: g.subtitle,
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: m.intl.string(m.t.JaYMvL)
                                  })
                              ]
                          }),
                          (0, l.jsxs)('div', {
                              className: g.__invalid_list,
                              children: [
                                  (0, l.jsx)(v, {
                                      icon: (0, l.jsx)(b, { icon: a.Jmo }),
                                      text: m.intl.string(m.t.u6oOcn)
                                  }),
                                  (0, l.jsx)(v, {
                                      icon: (0, l.jsx)(b, { icon: a.iFz }),
                                      text: m.intl.string(m.t.QC8ymZ)
                                  }),
                                  (0, l.jsx)(v, {
                                      icon: (0, l.jsx)(b, { icon: a.vdY }),
                                      text: m.intl.string(m.t.mgGOT0)
                                  }),
                                  (0, l.jsx)(v, {
                                      icon: (0, l.jsx)(s.Z, {
                                          className: g.badgeIconBackground,
                                          foreground: g.badgeIconForeground,
                                          width: 40,
                                          height: 40
                                      }),
                                      text: m.intl.format(m.t.qLmNLC, { articleURL: o.Z.getArticleURL(h.BhN.STAGE_CHANNEL_GUIDELINES) })
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, l.jsxs)(a.mzw, {
                      children: [
                          (0, l.jsx)(a.zxk, {
                              color: a.zxk.Colors.GREEN,
                              onClick: d,
                              submitting: c,
                              children: m.intl.string(m.t.s8mM8P)
                          }),
                          (0, l.jsx)(a.zxk, {
                              color: a.zxk.Colors.PRIMARY,
                              className: g.cancelButton,
                              onClick: u,
                              children: m.intl.string(m.t['ETE/oK'])
                          }),
                          (0, l.jsx)(a.zxk, {
                              look: a.zxk.Looks.LINK,
                              color: a.zxk.Colors.LINK,
                              className: g.backButton,
                              onClick: _,
                              size: a.zxk.Sizes.MIN,
                              children: m.intl.string(m.t['13/7kZ'])
                          })
                      ]
                  })
              ]
          });
}
