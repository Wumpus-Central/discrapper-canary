n.d(i, { default: () => x });
var e = n(255367);
n(73800);
var a = n(755721),
    s = n(481060),
    l = n(600164),
    o = n(623624),
    r = n(430824),
    d = n(496675),
    c = n(626135),
    u = n(565799),
    _ = n(501655),
    g = n(146085),
    h = n(981631),
    T = n(474936),
    E = n(388032),
    I = n(783328);
function x(t) {
    var i;
    let n,
        { channel: x, transitionState: S, onClose: L } = t,
        m = r.Z.getGuild(x.guild_id),
        p = null != (i = null == m ? void 0 : m.maxStageVideoChannelUsers) ? i : 0,
        f = null != m && m.features.has(h.oNc.COMMUNITY),
        C = E.intl.string(E.t.pqPQLy),
        M = f ? p < h.TU7 : (null == m ? void 0 : m.premiumTier) !== h.Eu4.TIER_3 && p <= h.eez,
        b = d.Z.can(g.yP, x);
    n = f && (null == m ? void 0 : m.premiumTier) === h.Eu4.TIER_3 ? (p <= h.TU7 ? E.intl.string(E.t.tJmOu7) : E.intl.string(E.t['7FHbPD'])) : M ? E.intl.string(E.t['8/uDSE']) : E.intl.string(E.t['7FHbPD']);
    let O = () => {
            (L(),
                c.default.track(h.rMx.BOOSTING_UPSELL_CLICKED, {
                    guild_id: x.guild_id,
                    type: T.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: b,
                    action: T.T7.DISMISS
                }));
        },
        k = u.Z.getMutableParticipants(x.id, _.pV.SPEAKER).filter((t) => t.type === _.Ui.VOICE).length,
        N = u.Z.getParticipantCount(x.id, _.pV.AUDIENCE);
    return (
        c.default.track(h.rMx.BOOSTING_UPSELL_VIEWED, {
            guild_id: x.guild_id,
            type: T.cd.VIDEO_STAGE_LIMIT,
            is_moderator: b,
            listener_count: k + N
        }),
        (0, e.jsxs)(s.Y0X, {
            size: s.CgR.SMALL,
            transitionState: S,
            'aria-label': C,
            parentComponent: 'StageBoostingModal',
            children: [
                (0, e.jsxs)(s.xBx, {
                    justify: l.Z.Justify.END,
                    separator: !1,
                    className: I.header,
                    children: [(0, e.jsx)('div', { className: I.fullArt }), (0, e.jsx)(s.olH, { onClick: L })]
                }),
                (0, e.jsxs)(s.hzk, {
                    className: I.content,
                    children: [
                        (0, e.jsx)(s.X6q, {
                            variant: 'heading-xl/bold',
                            children: C
                        }),
                        (0, e.jsx)(s.Text, {
                            variant: 'text-md/medium',
                            children: n
                        })
                    ]
                }),
                (0, e.jsx)(s.mzw, {
                    className: I.footer,
                    children: M
                        ? (0, e.jsxs)(e.Fragment, {
                              children: [
                                  (0, e.jsx)(a.zx, {
                                      look: a.iL.LINK,
                                      className: I.noThanksButton,
                                      color: a.Tt.CUSTOM,
                                      size: a.Ph.SMALL,
                                      onClick: O,
                                      children: E.intl.string(E.t.f3Pet7)
                                  }),
                                  (0, e.jsx)(s.gtL, {
                                      onClick: () => {
                                          (L(),
                                              (0, o.f)({
                                                  guildId: x.guild_id,
                                                  location: { section: h.jXE.STAGE_VIDEO_LIMIT }
                                              }),
                                              c.default.track(h.rMx.BOOSTING_UPSELL_CLICKED, {
                                                  guild_id: x.guild_id,
                                                  type: T.cd.VIDEO_STAGE_LIMIT,
                                                  is_moderator: b,
                                                  action: T.T7.BOOST
                                              }));
                                      },
                                      size: a.Ph.SMALL,
                                      className: I.boostButton,
                                      children: E.intl.string(E.t.Uj0md3)
                                  })
                              ]
                          })
                        : (0, e.jsx)(a.zx, {
                              onClick: O,
                              size: a.Ph.SMALL,
                              color: a.Tt.CUSTOM,
                              className: I.boostButton,
                              children: E.intl.string(E.t['NX+WJC'])
                          })
                })
            ]
        })
    );
}
