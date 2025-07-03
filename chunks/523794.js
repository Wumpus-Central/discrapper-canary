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
        { channel: I, transitionState: x, onClose: S } = t,
        L = o.Z.getGuild(I.guild_id),
        m = null != (i = null == L ? void 0 : L.maxStageVideoChannelUsers) ? i : 0,
        p = null != L && L.features.has(g.oNc.COMMUNITY),
        f = T.intl.string(T.t.pqPQLy),
        C = p ? m < g.TU7 : (null == L ? void 0 : L.premiumTier) !== g.Eu4.TIER_3 && m <= g.eez,
        k = r.Z.can(_.yP, I);
    n = p && (null == L ? void 0 : L.premiumTier) === g.Eu4.TIER_3 ? (m <= g.TU7 ? T.intl.string(T.t.tJmOu7) : T.intl.string(T.t['7FHbPD'])) : C ? T.intl.string(T.t['8/uDSE']) : T.intl.string(T.t['7FHbPD']);
    let M = () => {
            (S(),
                d.default.track(g.rMx.BOOSTING_UPSELL_CLICKED, {
                    guild_id: I.guild_id,
                    type: h.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: k,
                    action: h.T7.DISMISS
                }));
        },
        b = c.Z.getMutableParticipants(I.id, u.pV.SPEAKER).filter((t) => t.type === u.Ui.VOICE).length,
        O = c.Z.getParticipantCount(I.id, u.pV.AUDIENCE);
    return (
        d.default.track(g.rMx.BOOSTING_UPSELL_VIEWED, {
            guild_id: I.guild_id,
            type: h.cd.VIDEO_STAGE_LIMIT,
            is_moderator: k,
            listener_count: b + O
        }),
        (0, e.jsxs)(a.Y0X, {
            size: a.CgR.SMALL,
            transitionState: x,
            'aria-label': f,
            parentComponent: 'StageBoostingModal',
            children: [
                (0, e.jsxs)(a.xBx, {
                    justify: l.Z.Justify.END,
                    separator: !1,
                    className: E.header,
                    children: [(0, e.jsx)('div', { className: E.fullArt }), (0, e.jsx)(a.olH, { onClick: S })]
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
                                      onClick: M,
                                      children: T.intl.string(T.t.f3Pet7)
                                  }),
                                  (0, e.jsx)(a.gtL, {
                                      onClick: () => {
                                          (S(),
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
                              onClick: M,
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
