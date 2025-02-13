t.d(n, { Z: () => N }), t(653041);
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(594174),
    s = t(311888),
    o = t(63063),
    c = t(5192),
    d = t(431328),
    u = t(501655),
    m = t(659972),
    _ = t(981631),
    h = t(765305),
    x = t(388032),
    g = t(75231);
function v(e) {
    let { icon: n } = e;
    return (0, l.jsx)('div', {
        className: g.iconContainer,
        children: (0, l.jsx)(n, {
            color: 'currentColor',
            size: 'md'
        })
    });
}
function b(e) {
    let { icon: n, text: t } = e;
    return (0, l.jsxs)('div', {
        className: g.listItemContainer,
        children: [
            (0, l.jsx)('div', {
                className: g.listItemIconContainer,
                children: n
            }),
            (0, l.jsx)(r.Text, {
                className: g.listItemText,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: t
            })
        ]
    });
}
function j(e) {
    var n;
    let { guild: t, channel: r, stageData: s } = e,
        o = (0, i.e7)([a.default], () => a.default.getCurrentUser(), []),
        _ = {
            id: '1337',
            guild_id: t.id,
            channel_id: r.id,
            topic: s.topic,
            description: s.description,
            privacy_level: null !== (n = s.privacyLevel) && void 0 !== n ? n : h.j8.PUBLIC
        },
        x = (0, d.w8)(r.id, u.pV.SPEAKER),
        v = (0, d.Rk)(r.id, u.pV.AUDIENCE),
        b = x.slice(0, 5);
    return (
        null ==
            b.find((e) => {
                var n;
                return (null === (n = e.user) || void 0 === n ? void 0 : n.id) === (null == o ? void 0 : o.id);
            }) &&
            b.push({
                user: o,
                userNick: c.ZP.getName(t.id, r.id, o)
            }),
        (0, l.jsx)('div', {
            className: g.previewCardContainer,
            children: (0, l.jsx)('div', {
                className: g.previewCard,
                children: (0, l.jsx)(m.Z, {
                    guild: t,
                    stageInstance: _,
                    showGuildPopout: !1,
                    setShowGuildPopout: () => {},
                    source: m.k.UNSPECIFIED,
                    speakers: b,
                    speakerCount: x.length,
                    audienceCount: Math.max(1337, v),
                    channelName: r.name
                })
            })
        })
    );
}
function N(e) {
    let { guild: n, channel: t, stageData: i, headerId: a, loading: c, onNext: d, onCancel: u, onBack: m } = e;
    return null == n || null == t || null == i
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(j, {
                      guild: n,
                      channel: t,
                      stageData: i
                  }),
                  (0, l.jsxs)(r.hzk, {
                      className: g.container,
                      children: [
                          (0, l.jsxs)('div', {
                              className: g.header,
                              children: [
                                  (0, l.jsx)(r.X6q, {
                                      id: a,
                                      className: g.__invalid_title,
                                      variant: 'heading-xl/semibold',
                                      children: x.intl.string(x.t.GXpXTE)
                                  }),
                                  (0, l.jsx)(r.Text, {
                                      className: g.subtitle,
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: x.intl.string(x.t.JaYMvL)
                                  })
                              ]
                          }),
                          (0, l.jsxs)('div', {
                              className: g.__invalid_list,
                              children: [
                                  (0, l.jsx)(b, {
                                      icon: (0, l.jsx)(v, { icon: r.Jmo }),
                                      text: x.intl.string(x.t.u6oOcn)
                                  }),
                                  (0, l.jsx)(b, {
                                      icon: (0, l.jsx)(v, { icon: r.iFz }),
                                      text: x.intl.string(x.t.QC8ymZ)
                                  }),
                                  (0, l.jsx)(b, {
                                      icon: (0, l.jsx)(v, { icon: r.vdY }),
                                      text: x.intl.string(x.t.mgGOT0)
                                  }),
                                  (0, l.jsx)(b, {
                                      icon: (0, l.jsx)(s.Z, {
                                          className: g.badgeIconBackground,
                                          foreground: g.badgeIconForeground,
                                          width: 40,
                                          height: 40
                                      }),
                                      text: x.intl.format(x.t.qLmNLC, { articleURL: o.Z.getArticleURL(_.BhN.STAGE_CHANNEL_GUIDELINES) })
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, l.jsxs)(r.mzw, {
                      children: [
                          (0, l.jsx)(r.zxk, {
                              color: r.zxk.Colors.GREEN,
                              onClick: d,
                              submitting: c,
                              children: x.intl.string(x.t.s8mM8P)
                          }),
                          (0, l.jsx)(r.zxk, {
                              color: r.zxk.Colors.PRIMARY,
                              className: g.cancelButton,
                              onClick: u,
                              children: x.intl.string(x.t['ETE/oK'])
                          }),
                          (0, l.jsx)(r.zxk, {
                              look: r.zxk.Looks.LINK,
                              color: r.zxk.Colors.LINK,
                              className: g.backButton,
                              onClick: m,
                              size: r.zxk.Sizes.MIN,
                              children: x.intl.string(x.t['13/7kZ'])
                          })
                      ]
                  })
              ]
          });
}
