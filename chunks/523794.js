n.d(i, { default: () => I });
var e = n(200651);
n(192379);
var a = n(481060),
    l = n(600164),
    s = n(623624),
    o = n(430824),
    r = n(496675),
    d = n(626135),
    c = n(565799),
    u = n(501655),
    _ = n(146085),
    h = n(981631),
    T = n(474936),
    g = n(388032),
    E = n(783328);
function I(t) {
    var i;
    let n,
        { channel: I, transitionState: x, onClose: m } = t,
        L = o.Z.getGuild(I.guild_id),
        S = null != (i = null == L ? void 0 : L.maxStageVideoChannelUsers) ? i : 0,
        f = !!(null == L ? void 0 : L.isCommunity()),
        p = g.intl.string(g.t.pqPQLy),
        C = f ? S < h.TU7 : (null == L ? void 0 : L.premiumTier) !== h.Eu4.TIER_3 && S <= h.eez,
        k = r.Z.can(_.yP, I);
    n = f && (null == L ? void 0 : L.premiumTier) === h.Eu4.TIER_3 ? (S <= h.TU7 ? g.intl.string(g.t.tJmOu7) : g.intl.string(g.t['7FHbPD'])) : C ? g.intl.string(g.t['8/uDSE']) : g.intl.string(g.t['7FHbPD']);
    let b = () => {
            m(),
                d.default.track(h.rMx.BOOSTING_UPSELL_CLICKED, {
                    guild_id: I.guild_id,
                    type: T.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: k,
                    action: T.T7.DISMISS
                });
        },
        O = c.Z.getMutableParticipants(I.id, u.pV.SPEAKER).filter((t) => t.type === u.Ui.VOICE).length,
        j = c.Z.getParticipantCount(I.id, u.pV.AUDIENCE);
    return (
        d.default.track(h.rMx.BOOSTING_UPSELL_VIEWED, {
            guild_id: I.guild_id,
            type: T.cd.VIDEO_STAGE_LIMIT,
            is_moderator: k,
            listener_count: O + j
        }),
        (0, e.jsxs)(a.Y0X, {
            size: a.CgR.SMALL,
            transitionState: x,
            'aria-label': p,
            children: [
                (0, e.jsxs)(a.xBx, {
                    justify: l.Z.Justify.END,
                    separator: !1,
                    className: E.header,
                    children: [(0, e.jsx)('div', { className: E.fullArt }), (0, e.jsx)(a.olH, { onClick: m })]
                }),
                (0, e.jsxs)(a.hzk, {
                    className: E.content,
                    children: [
                        (0, e.jsx)(a.X6q, {
                            variant: 'heading-xl/bold',
                            children: p
                        }),
                        (0, e.jsx)(a.Text, {
                            variant: 'text-md/medium',
                            children: n
                        })
                    ]
                }),
                (0, e.jsx)(a.mzw, {
                    className: E.footer,
                    children: C
                        ? (0, e.jsxs)(e.Fragment, {
                              children: [
                                  (0, e.jsx)(a.zxk, {
                                      look: a.iLD.LINK,
                                      className: E.noThanksButton,
                                      color: a.Ttl.CUSTOM,
                                      size: a.PhG.SMALL,
                                      onClick: b,
                                      children: g.intl.string(g.t.f3Pet7)
                                  }),
                                  (0, e.jsx)(a.gtL, {
                                      onClick: () => {
                                          m(),
                                              (0, s.f)({
                                                  guildId: I.guild_id,
                                                  location: { section: h.jXE.STAGE_VIDEO_LIMIT }
                                              }),
                                              d.default.track(h.rMx.BOOSTING_UPSELL_CLICKED, {
                                                  guild_id: I.guild_id,
                                                  type: T.cd.VIDEO_STAGE_LIMIT,
                                                  is_moderator: k,
                                                  action: T.T7.BOOST
                                              });
                                      },
                                      size: a.PhG.SMALL,
                                      className: E.boostButton,
                                      children: g.intl.string(g.t.Uj0md3)
                                  })
                              ]
                          })
                        : (0, e.jsx)(a.zxk, {
                              onClick: b,
                              size: a.PhG.SMALL,
                              color: a.Ttl.CUSTOM,
                              className: E.boostButton,
                              children: g.intl.string(g.t['NX+WJC'])
                          })
                })
            ]
        })
    );
}
