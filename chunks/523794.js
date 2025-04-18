e.d(i, { default: () => I });
var a = e(200651);
e(192379);
var n = e(481060),
    s = e(600164),
    l = e(623624),
    o = e(430824),
    r = e(496675),
    d = e(626135),
    c = e(565799),
    u = e(501655),
    _ = e(146085),
    h = e(981631),
    T = e(474936),
    g = e(388032),
    E = e(783328);
function I(t) {
    var i;
    let e,
        { channel: I, transitionState: x, onClose: m } = t,
        L = o.Z.getGuild(I.guild_id),
        S = null != (i = null == L ? void 0 : L.maxStageVideoChannelUsers) ? i : 0,
        N = !!(null == L ? void 0 : L.isCommunity()),
        f = g.NW.string(g.t.pqPQLy),
        p = N ? S < h.TU7 : (null == L ? void 0 : L.premiumTier) !== h.Eu4.TIER_3 && S <= h.eez,
        C = r.Z.can(_.yP, I);
    e = N && (null == L ? void 0 : L.premiumTier) === h.Eu4.TIER_3 ? (S <= h.TU7 ? g.NW.string(g.t.tJmOu7) : g.NW.string(g.t['7FHbPD'])) : p ? g.NW.string(g.t['8/uDSE']) : g.NW.string(g.t['7FHbPD']);
    let k = () => {
            m(),
                d.default.track(h.rMx.BOOSTING_UPSELL_CLICKED, {
                    guild_id: I.guild_id,
                    type: T.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: C,
                    action: T.T7.DISMISS
                });
        },
        b = c.Z.getMutableParticipants(I.id, u.pV.SPEAKER).filter((t) => t.type === u.Ui.VOICE).length,
        O = c.Z.getParticipantCount(I.id, u.pV.AUDIENCE);
    return (
        d.default.track(h.rMx.BOOSTING_UPSELL_VIEWED, {
            guild_id: I.guild_id,
            type: T.cd.VIDEO_STAGE_LIMIT,
            is_moderator: C,
            listener_count: b + O
        }),
        (0, a.jsxs)(n.Y0X, {
            size: n.CgR.SMALL,
            transitionState: x,
            'aria-label': f,
            children: [
                (0, a.jsxs)(n.xBx, {
                    justify: s.Z.Justify.END,
                    separator: !1,
                    className: E.header,
                    children: [(0, a.jsx)('div', { className: E.fullArt }), (0, a.jsx)(n.olH, { onClick: m })]
                }),
                (0, a.jsxs)(n.hzk, {
                    className: E.content,
                    children: [
                        (0, a.jsx)(n.X6q, {
                            variant: 'heading-xl/bold',
                            children: f
                        }),
                        (0, a.jsx)(n.Text, {
                            variant: 'text-md/medium',
                            children: e
                        })
                    ]
                }),
                (0, a.jsx)(n.mzw, {
                    className: E.footer,
                    children: p
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(n.zxk, {
                                      look: n.iLD.LINK,
                                      className: E.noThanksButton,
                                      color: n.Ttl.CUSTOM,
                                      size: n.PhG.SMALL,
                                      onClick: k,
                                      children: g.NW.string(g.t.f3Pet7)
                                  }),
                                  (0, a.jsx)(n.gtL, {
                                      onClick: () => {
                                          m(),
                                              (0, l.f)({
                                                  guildId: I.guild_id,
                                                  location: { section: h.jXE.STAGE_VIDEO_LIMIT }
                                              }),
                                              d.default.track(h.rMx.BOOSTING_UPSELL_CLICKED, {
                                                  guild_id: I.guild_id,
                                                  type: T.cd.VIDEO_STAGE_LIMIT,
                                                  is_moderator: C,
                                                  action: T.T7.BOOST
                                              });
                                      },
                                      size: n.PhG.SMALL,
                                      className: E.boostButton,
                                      children: g.NW.string(g.t.Uj0md3)
                                  })
                              ]
                          })
                        : (0, a.jsx)(n.zxk, {
                              onClick: k,
                              size: n.PhG.SMALL,
                              color: n.Ttl.CUSTOM,
                              className: E.boostButton,
                              children: g.NW.string(g.t['NX+WJC'])
                          })
                })
            ]
        })
    );
}
