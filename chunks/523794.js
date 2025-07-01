n.d(i, { default: () => I });
var e = n(255367);
n(73800);
var a = n(481060),
    l = n(600164),
    s = n(623624),
    o = n(430824),
    r = n(496675),
    d = n(626135),
    c = n(565799),
    u = n(501655),
    _ = n(146085),
    g = n(981631),
    h = n(474936),
    T = n(388032),
    E = n(783328);
function I(t) {
    var i;
    let n,
        { channel: I, transitionState: m, onClose: x } = t,
        S = o.Z.getGuild(I.guild_id),
        L = null != (i = null == S ? void 0 : S.maxStageVideoChannelUsers) ? i : 0,
        p = !!(null == S ? void 0 : S.isCommunity()),
        f = T.intl.string(T.t.pqPQLy),
        C = p ? L < g.TU7 : (null == S ? void 0 : S.premiumTier) !== g.Eu4.TIER_3 && L <= g.eez,
        k = r.Z.can(_.yP, I);
    n = p && (null == S ? void 0 : S.premiumTier) === g.Eu4.TIER_3 ? (L <= g.TU7 ? T.intl.string(T.t.tJmOu7) : T.intl.string(T.t['7FHbPD'])) : C ? T.intl.string(T.t['8/uDSE']) : T.intl.string(T.t['7FHbPD']);
    let b = () => {
            (x(),
                d.default.track(g.rMx.BOOSTING_UPSELL_CLICKED, {
                    guild_id: I.guild_id,
                    type: h.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: k,
                    action: h.T7.DISMISS
                }));
        },
        M = c.Z.getMutableParticipants(I.id, u.pV.SPEAKER).filter((t) => t.type === u.Ui.VOICE).length,
        O = c.Z.getParticipantCount(I.id, u.pV.AUDIENCE);
    return (
        d.default.track(g.rMx.BOOSTING_UPSELL_VIEWED, {
            guild_id: I.guild_id,
            type: h.cd.VIDEO_STAGE_LIMIT,
            is_moderator: k,
            listener_count: M + O
        }),
        (0, e.jsxs)(a.Y0X, {
            size: a.CgR.SMALL,
            transitionState: m,
            'aria-label': f,
            parentComponent: 'StageBoostingModal',
            children: [
                (0, e.jsxs)(a.xBx, {
                    justify: l.Z.Justify.END,
                    separator: !1,
                    className: E.header,
                    children: [(0, e.jsx)('div', { className: E.fullArt }), (0, e.jsx)(a.olH, { onClick: x })]
                }),
                (0, e.jsxs)(a.hzk, {
                    className: E.content,
                    children: [
                        (0, e.jsx)(a.X6q, {
                            variant: 'heading-xl/bold',
                            children: f
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
                                      children: T.intl.string(T.t.f3Pet7)
                                  }),
                                  (0, e.jsx)(a.gtL, {
                                      onClick: () => {
                                          (x(),
                                              (0, s.f)({
                                                  guildId: I.guild_id,
                                                  location: { section: g.jXE.STAGE_VIDEO_LIMIT }
                                              }),
                                              d.default.track(g.rMx.BOOSTING_UPSELL_CLICKED, {
                                                  guild_id: I.guild_id,
                                                  type: h.cd.VIDEO_STAGE_LIMIT,
                                                  is_moderator: k,
                                                  action: h.T7.BOOST
                                              }));
                                      },
                                      size: a.PhG.SMALL,
                                      className: E.boostButton,
                                      children: T.intl.string(T.t.Uj0md3)
                                  })
                              ]
                          })
                        : (0, e.jsx)(a.zxk, {
                              onClick: b,
                              size: a.PhG.SMALL,
                              color: a.Ttl.CUSTOM,
                              className: E.boostButton,
                              children: T.intl.string(T.t['NX+WJC'])
                          })
                })
            ]
        })
    );
}
