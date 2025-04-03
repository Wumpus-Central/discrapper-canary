n.d(t, { Z: () => N }), n(266796), n(653041);
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(594174),
    o = n(311888),
    c = n(63063),
    s = n(5192),
    d = n(431328),
    u = n(501655),
    h = n(659972),
    g = n(981631),
    _ = n(765305),
    m = n(388032),
    b = n(158170);
function x(e) {
    let { icon: t } = e;
    return (0, r.jsx)('div', {
        className: b.iconContainer,
        children: (0, r.jsx)(t, {
            color: 'currentColor',
            size: 'md'
        })
    });
}
function f(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)('div', {
        className: b.listItemContainer,
        children: [
            (0, r.jsx)('div', {
                className: b.listItemIconContainer,
                children: t
            }),
            (0, r.jsx)(l.Text, {
                className: b.listItemText,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: n
            })
        ]
    });
}
function p(e) {
    var t;
    let { guild: n, channel: l, stageData: o } = e,
        c = (0, i.e7)([a.default], () => a.default.getCurrentUser(), []),
        g = {
            id: '1337',
            guild_id: n.id,
            channel_id: l.id,
            topic: o.topic,
            description: o.description,
            privacy_level: null != (t = o.privacyLevel) ? t : _.j8.PUBLIC
        },
        m = (0, d.w8)(l.id, u.pV.SPEAKER),
        x = (0, d.Rk)(l.id, u.pV.AUDIENCE),
        f = m.slice(0, 5);
    return (
        null ==
            f.find((e) => {
                var t;
                return (null == (t = e.user) ? void 0 : t.id) === (null == c ? void 0 : c.id);
            }) &&
            f.push({
                user: c,
                userNick: s.ZP.getName(n.id, l.id, c)
            }),
        (0, r.jsx)('div', {
            className: b.previewCardContainer,
            children: (0, r.jsx)('div', {
                className: b.previewCard,
                children: (0, r.jsx)(h.Z, {
                    guild: n,
                    stageInstance: g,
                    showGuildPopout: !1,
                    setShowGuildPopout: () => {},
                    source: h.k.UNSPECIFIED,
                    speakers: f,
                    speakerCount: m.length,
                    audienceCount: Math.max(1337, x),
                    channelName: l.name
                })
            })
        })
    );
}
function N(e) {
    let { guild: t, channel: n, stageData: i, headerId: a, loading: s, onNext: d, onCancel: u, onBack: h } = e;
    return null == t || null == n || null == i
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(p, {
                      guild: t,
                      channel: n,
                      stageData: i
                  }),
                  (0, r.jsxs)(l.hzk, {
                      className: b.container,
                      children: [
                          (0, r.jsxs)('div', {
                              className: b.header,
                              children: [
                                  (0, r.jsx)(l.X6q, {
                                      id: a,
                                      className: b.__invalid_title,
                                      variant: 'heading-xl/semibold',
                                      children: m.NW.string(m.t.GXpXTE)
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      className: b.subtitle,
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: m.NW.string(m.t.JaYMvL)
                                  })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: b.__invalid_list,
                              children: [
                                  (0, r.jsx)(f, {
                                      icon: (0, r.jsx)(x, { icon: l.Jmo }),
                                      text: m.NW.string(m.t.u6oOcn)
                                  }),
                                  (0, r.jsx)(f, {
                                      icon: (0, r.jsx)(x, { icon: l.iFz }),
                                      text: m.NW.string(m.t.QC8ymZ)
                                  }),
                                  (0, r.jsx)(f, {
                                      icon: (0, r.jsx)(x, { icon: l.vdY }),
                                      text: m.NW.string(m.t.mgGOT0)
                                  }),
                                  (0, r.jsx)(f, {
                                      icon: (0, r.jsx)(o.Z, {
                                          className: b.badgeIconBackground,
                                          foreground: b.badgeIconForeground,
                                          width: 40,
                                          height: 40
                                      }),
                                      text: m.NW.format(m.t.qLmNLC, { articleURL: c.Z.getArticleURL(g.BhN.STAGE_CHANNEL_GUIDELINES) })
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, r.jsxs)(l.mzw, {
                      children: [
                          (0, r.jsx)(l.zxk, {
                              color: l.zxk.Colors.GREEN,
                              onClick: d,
                              submitting: s,
                              children: m.NW.string(m.t.s8mM8P)
                          }),
                          (0, r.jsx)(l.zxk, {
                              color: l.zxk.Colors.PRIMARY,
                              className: b.cancelButton,
                              onClick: u,
                              children: m.NW.string(m.t['ETE/oK'])
                          }),
                          (0, r.jsx)(l.zxk, {
                              look: l.zxk.Looks.LINK,
                              color: l.zxk.Colors.LINK,
                              className: b.backButton,
                              onClick: h,
                              size: l.zxk.Sizes.MIN,
                              children: m.NW.string(m.t['13/7kZ'])
                          })
                      ]
                  })
              ]
          });
}
