r.d(n, {
    D: function () {
        return D;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(442837),
    c = r(481060),
    d = r(122810),
    f = r(74433),
    p = r(750881),
    h = r(44315),
    _ = r(574176),
    m = r(106301),
    g = r(223135),
    E = r(314897),
    v = r(592125),
    y = r(496675),
    b = r(699516),
    I = r(979651),
    T = r(6074),
    S = r(626135),
    A = r(584973),
    C = r(981631),
    N = r(787078);
let R = '14px',
    O = 150,
    D = (e) => {
        let { className: n, text: r } = e,
            i = o.useRef(null),
            s = o.useRef(null),
            [u, d] = o.useState(!1);
        return (
            o.useLayoutEffect(() => {
                let { current: e } = i,
                    { current: n } = s;
                if (null != e && null != n) d(!(e.clientWidth < n.clientWidth && e.clientHeight <= n.clientHeight));
            }, [r]),
            (0, a.jsx)(c.Tooltip, {
                text: u || null == r || '' === r ? null : r,
                delay: O,
                'aria-label': !1,
                children: (e) =>
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)('div', {
                                ...e,
                                className: n,
                                ref: i,
                                children: r
                            }),
                            (0, a.jsx)('div', {
                                className: l()(N.textRuler, n),
                                ref: s,
                                'aria-hidden': !0,
                                children: r
                            })
                        ]
                    })
            })
        );
    },
    x = (e) => {
        let { activities: n, applicationStream: r, className: i, textClassName: s, emojiClassName: l, animate: O = !0, hideTooltip: x = !1, hideEmoji: L = !1, user: w, hasQuest: P } = e,
            M = null != n ? n.find((e) => e.type === C.IIU.CUSTOM_STATUS) : null,
            k = (0, u.e7)([E.default], () => E.default.getId() === (null == w ? void 0 : w.id)),
            U = (0, u.e7)([m.Z], () => (k ? m.Z.getHangStatusActivity() : null != n ? n.find((e) => e.type === C.IIU.HANG_STATUS) : null)),
            B = (0, u.e7)([I.Z, v.Z], () => {
                var e;
                return null != U && null != w ? v.Z.getChannel(null === (e = I.Z.getVoiceStateForUser(w.id)) || void 0 === e ? void 0 : e.channelId) : null;
            }),
            { enableHangStatus: G } = _.n.useExperiment(
                {
                    guildId: null == B ? void 0 : B.guild_id,
                    location: 'ActivityStatus'
                },
                { autoTrackExposure: !1 }
            ),
            Z = (0, h.Sl)(C.Ilk.BRAND_345),
            F = null,
            V = G && null != U && y.Z.can(C.Plq.CONNECT, B);
        V
            ? (F = (0, a.jsx)(g.Z, {
                  className: l,
                  hangStatusActivity: U
              }))
            : null != M &&
              null != M.emoji &&
              !L &&
              (F = (0, a.jsx)(A.Z, {
                  emoji: M.emoji,
                  animate: O,
                  hideTooltip: x,
                  className: l
              }));
        let { blockeeExperimentEnabled: j, blockerExperimentEnabled: H, analyticsEligible: Y } = (0, p.NR)('activity-status-web'),
            W = (0, u.e7)([b.Z], () => (null != w ? b.Z.getRelationshipType(w.id) : C.OGo.NONE)),
            K = (0, f.Z)(n, r, void 0, V, j),
            z = (0, f.Z)(n, r, void 0, V, !1);
        o.useEffect(() => {
            if (null != z && null == z.activity && null != r && Y) {
                var e;
                S.default.track(C.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                    activity_user_id: null == w ? void 0 : w.id,
                    discoverable: null === (e = r.discoverable) || void 0 === e || e,
                    surface: 'activity-status-web',
                    relationship_type: W,
                    treatment: (j && !1 === r.discoverable) || (H && W === C.OGo.BLOCKED) ? p.h9.HIDE : p.h9.SHOW
                });
            }
        }, [j, H, Y, w, r, z, W]);
        let q = null == K ? void 0 : K.activityText,
            Q = null != q && '' !== q;
        return (H && W === C.OGo.BLOCKED) || (null == F && !Q)
            ? null
            : (0, a.jsxs)('div', {
                  className: i,
                  children: [
                      F,
                      (0, a.jsx)(D, {
                          text: q,
                          className: s
                      }),
                      P &&
                          (0, a.jsx)(c.QuestsIcon, {
                              size: 'custom',
                              className: N.questsIcon,
                              height: R,
                              width: R,
                              color: Z.hex
                          }),
                      null != n && n.some((e) => (0, d.Z)(e, V))
                          ? (0, a.jsx)(T.Z, {
                                width: 16,
                                height: 16,
                                className: N.icon
                            })
                          : null
                  ]
              });
    };
n.Z = x;
