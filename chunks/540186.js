n.d(t, { Z: () => v }), n(266796), n(653041);
var r = n(200651);
n(192379);
var a = n(442837),
    i = n(481060),
    o = n(594174),
    l = n(311888),
    c = n(63063),
    s = n(5192),
    d = n(431328),
    u = n(501655),
    _ = n(659972),
    m = n(981631),
    b = n(765305),
    h = n(388032),
    g = n(166286);
function p(e) {
    let { icon: t } = e;
    return (0, r.jsx)('div', {
        className: g.iconContainer,
        children: (0, r.jsx)(t, {
            color: 'currentColor',
            size: 'md'
        })
    });
}
function f(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)('div', {
        className: g.listItemContainer,
        children: [
            (0, r.jsx)('div', {
                className: g.listItemIconContainer,
                children: t
            }),
            (0, r.jsx)(i.Text, {
                className: g.listItemText,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: n
            })
        ]
    });
}
function x(e) {
    var t;
    let { guild: n, channel: i, stageData: l } = e,
        c = (0, a.e7)([o.default], () => o.default.getCurrentUser(), []),
        m = {
            id: '1337',
            guild_id: n.id,
            channel_id: i.id,
            topic: l.topic,
            description: l.description,
            privacy_level: null !== (t = l.privacyLevel) && void 0 !== t ? t : b.j8.PUBLIC
        },
        h = (0, d.w8)(i.id, u.pV.SPEAKER),
        p = (0, d.Rk)(i.id, u.pV.AUDIENCE),
        f = h.slice(0, 5);
    return (
        null ==
            f.find((e) => {
                var t;
                return (null === (t = e.user) || void 0 === t ? void 0 : t.id) === (null == c ? void 0 : c.id);
            }) &&
            f.push({
                user: c,
                userNick: s.ZP.getName(n.id, i.id, c)
            }),
        (0, r.jsx)('div', {
            className: g.previewCardContainer,
            children: (0, r.jsx)('div', {
                className: g.previewCard,
                children: (0, r.jsx)(_.Z, {
                    guild: n,
                    stageInstance: m,
                    showGuildPopout: !1,
                    setShowGuildPopout: () => {},
                    source: _.k.UNSPECIFIED,
                    speakers: f,
                    speakerCount: h.length,
                    audienceCount: Math.max(1337, p),
                    channelName: i.name
                })
            })
        })
    );
}
function v(e) {
    let { guild: t, channel: n, stageData: a, headerId: o, loading: s, onNext: d, onCancel: u, onBack: _ } = e;
    return null == t || null == n || null == a
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(x, {
                      guild: t,
                      channel: n,
                      stageData: a
                  }),
                  (0, r.jsxs)(i.hzk, {
                      className: g.container,
                      children: [
                          (0, r.jsxs)('div', {
                              className: g.header,
                              children: [
                                  (0, r.jsx)(i.X6q, {
                                      id: o,
                                      className: g.__invalid_title,
                                      variant: 'heading-xl/semibold',
                                      children: h.NW.string(h.t.GXpXTE)
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      className: g.subtitle,
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: h.NW.string(h.t.JaYMvL)
                                  })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: g.__invalid_list,
                              children: [
                                  (0, r.jsx)(f, {
                                      icon: (0, r.jsx)(p, { icon: i.Jmo }),
                                      text: h.NW.string(h.t.u6oOcn)
                                  }),
                                  (0, r.jsx)(f, {
                                      icon: (0, r.jsx)(p, { icon: i.iFz }),
                                      text: h.NW.string(h.t.QC8ymZ)
                                  }),
                                  (0, r.jsx)(f, {
                                      icon: (0, r.jsx)(p, { icon: i.vdY }),
                                      text: h.NW.string(h.t.mgGOT0)
                                  }),
                                  (0, r.jsx)(f, {
                                      icon: (0, r.jsx)(l.Z, {
                                          className: g.badgeIconBackground,
                                          foreground: g.badgeIconForeground,
                                          width: 40,
                                          height: 40
                                      }),
                                      text: h.NW.format(h.t.qLmNLC, { articleURL: c.Z.getArticleURL(m.BhN.STAGE_CHANNEL_GUIDELINES) })
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, r.jsxs)(i.mzw, {
                      children: [
                          (0, r.jsx)(i.zxk, {
                              color: i.zxk.Colors.GREEN,
                              onClick: d,
                              submitting: s,
                              children: h.NW.string(h.t.s8mM8P)
                          }),
                          (0, r.jsx)(i.zxk, {
                              color: i.zxk.Colors.PRIMARY,
                              className: g.cancelButton,
                              onClick: u,
                              children: h.NW.string(h.t['ETE/oK'])
                          }),
                          (0, r.jsx)(i.zxk, {
                              look: i.zxk.Looks.LINK,
                              color: i.zxk.Colors.LINK,
                              className: g.backButton,
                              onClick: _,
                              size: i.zxk.Sizes.MIN,
                              children: h.NW.string(h.t['13/7kZ'])
                          })
                      ]
                  })
              ]
          });
}
