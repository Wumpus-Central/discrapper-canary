t.d(l, { A: () => $ });
var e = t(477900),
    n = t(582128),
    s = t(350835),
    a = t(17928),
    d = t(765379),
    o = t(90644),
    r = t(587895),
    c = t(429913),
    u = t(734057),
    A = t(71393),
    h = t(977997),
    x = t(580763),
    g = t(503698),
    C = t.n(g),
    m = t(939249),
    j = t(793574),
    p = t(688810),
    v = t(774926),
    N = t(623671),
    _ = t(365185),
    f = t(915089),
    O = t(172710),
    y = t(92240),
    E = t(257367),
    I = t(160376),
    b = t(939496),
    L = t(282197),
    S = t(584904),
    D = t(351638),
    M = t(531648),
    V = t(753713),
    T = t(866665),
    P = t(835723),
    w = t(55730),
    G = t(353411),
    U = t(879945),
    k = t(993401),
    F = t(652215),
    R = t(996988),
    z = t(105292),
    B = t(260155);
function H(i) {
    let { user: l, activity: t, onAction: n } = i,
        { themeType: s } = (0, b.E)(),
        a = (0, G._B)(t, l),
        d = (0, G.J$)(t, l);
    if (!(0, o.A)(t) || (!(0, w.A)(t, F.jUm.PLAY) && !(0, w.A)(t, F.jUm.SYNC))) return null;
    let r = (i) => {
            (i?.stopPropagation(), n?.({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" }), a.onClick());
        },
        c = (i) => {
            (i.stopPropagation(), n?.({ action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON" }), d.onClick());
        };
    return s === R.d.MODAL_V2
        ? (0, e.jsxs)(e.Fragment, {
              children: [
                  (0, e.jsx)(T.m, {
                      text: d.tooltip,
                      children: (0, e.jsx)(k.FD, {
                          text: d.label ?? z.intl.string(z.t.eU3inB),
                          onClick: c,
                          disabled: d.disabled,
                          loading: d.loading,
                      }),
                  }),
                  (0, e.jsx)(T.m, {
                      text: a.tooltip,
                      children: (0, e.jsx)(k.FD, {
                          text: a.label ?? z.intl.string(z.t.rRffNz),
                          onClick: r,
                          disabled: a.disabled,
                          loading: a.loading,
                      }),
                  }),
              ],
          })
        : (0, e.jsxs)(e.Fragment, {
              children: [
                  (0, e.jsx)("div", {
                      className: B.FS,
                      children: (0, e.jsx)(T.m, {
                          text: a.tooltip,
                          children: (0, e.jsx)(k.FD, {
                              icon: () => (0, e.jsx)(U.A, {}),
                              text: a.label ?? z.intl.string(z.t.rRffNz),
                              onClick: r,
                              disabled: a.disabled,
                              loading: a.loading,
                              fullWidth: !0,
                          }),
                      }),
                  }),
                  (0, e.jsx)(k.q3, {
                      icon: P.J,
                      tooltipText: d.tooltip ?? z.intl.string(z.t.eU3inB),
                      "aria-label": d.label ?? z.intl.string(z.t.eU3inB),
                      disabled: d.disabled,
                      loading: d.loading,
                      onClick: c,
                  }),
              ],
          });
}
var Q = t(113469);
function Y(i) {
    let l,
        { user: t, currentUser: s, activity: a, className: d, onClose: r } = i,
        c = (0, f.GV)(),
        u = (0, f.GV)(),
        { themeType: A } = (0, b.E)(),
        h = (0, _.A)({ activity: a, user: t }),
        x = (0, I.A)(a),
        g = null != x.text && "" !== x.text,
        { largeImage: T } = (0, v.XN)(a, void 0, "user_profile_spotify"),
        { analyticsLocations: P } = (0, p.Ay)(j.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        w = (0, y.A)({ display: "live", user: t, activity: a, entry: h, analyticsLocations: P }),
        G = (0, E.A)({ userId: t.id, onAction: w });
    if (!(0, o.A)(a)) return null;
    function U() {
        return t.id === s.id
            ? null
            : (0, e.jsx)("div", { className: B.o1, children: (0, e.jsx)(H, { user: t, activity: a, onAction: w }) });
    }
    return (0, e.jsx)(p.f5, {
        value: P,
        children: (0, e.jsxs)(S.A, {
            ref: G,
            className: C()(B.Nr, d),
            onAction: w,
            onClose: r,
            "aria-labelledby": g ? `${u} ${c}` : c,
            children: [
                (0, e.jsx)(D.A, {
                    textId: u,
                    ...x,
                    contextMenu: (0, e.jsx)(Q.A, { display: "live", user: t, activity: a, entry: h, onClose: r }),
                }),
                (0, e.jsx)("div", {
                    className: B.rf,
                    children: (0, e.jsxs)("div", {
                        className: B.Qs,
                        children: [
                            (0, e.jsx)(N.d, {
                                image: T,
                                size: A === R.d.MODAL_V2 ? N.w.SIZE_100 : N.w.SIZE_60,
                                className: B.mM,
                                onClick: (i) => {
                                    (i.stopPropagation(), w({ action: "OPEN_SPOTIFY_ALBUM" }), (0, O.QX)(a, t.id));
                                },
                            }),
                            (0, e.jsxs)("div", {
                                className: B.zH,
                                children: [
                                    (0, e.jsxs)("div", {
                                        children: [
                                            (0, e.jsx)(M.Q, {
                                                variant: "heading-xs/semibold",
                                                text: a.details,
                                                onClick: () => {
                                                    (w({ action: "OPEN_SPOTIFY_TRACK" }), (0, O.Mp)(a));
                                                },
                                                id: c,
                                            }),
                                            0 === (l = a.state?.split("; ") ?? []).length
                                                ? null
                                                : null == a.sync_id
                                                  ? (0, e.jsx)(M.A, { variant: "body-xs/normal", text: l.join(", ") })
                                                  : (0, e.jsx)(M.A, {
                                                        variant: "body-xs/normal",
                                                        text: l.map((i, s) =>
                                                            (0, e.jsxs)(
                                                                n.Fragment,
                                                                {
                                                                    children: [
                                                                        (0, e.jsx)(m.D, {
                                                                            className: C()(B.sd, B.mG),
                                                                            onClick: (i) => {
                                                                                (i.stopPropagation(),
                                                                                    w({
                                                                                        action: "OPEN_SPOTIFY_ARTIST",
                                                                                    }),
                                                                                    (0, O.mN)(a, t.id, s));
                                                                            },
                                                                            children: i,
                                                                        }),
                                                                        s < l.length - 1 ? ", " : "",
                                                                    ],
                                                                },
                                                                s,
                                                            ),
                                                        ),
                                                    }),
                                        ],
                                    }),
                                    (0, e.jsx)(L.A, { user: t, activity: a, className: B.jp }),
                                    (function () {
                                        let { timestamps: i } = a;
                                        if (null == i) return null;
                                        let { start: l, end: t } = i;
                                        return null == l || null == t ? null : (0, e.jsx)(V.A, { start: l, end: t });
                                    })(),
                                    A === R.d.MODAL_V2 && U(),
                                ],
                            }),
                            A === R.d.MODAL && U(),
                        ],
                    }),
                }),
                A !== R.d.MODAL && A !== R.d.MODAL_V2 && U(),
            ],
        }),
    });
}
function $(i) {
    let { user: l, currentUser: t, activity: n, className: g, onClose: C } = i,
        { voiceGuild: m, voiceChannel: j } = (0, a.cf)([A.A, h.A, u.A], () => {
            let i = (0, d.A)(n);
            if (!i && n.type !== s.$.HANG_STATUS) return {};
            let t = i
                    ? h.A.getVoiceStateForSession(l.id, n?.session_id)?.channelId
                    : h.A.getVoiceStateForUser(l.id)?.channelId,
                e = u.A.getChannel(t);
            return { voiceGuild: A.A.getGuild(e?.getGuildId()), voiceChannel: e };
        });
    (0, c.h)(n?.application_id);
    let p = (0, a.bG)([r.A], () =>
        n?.application_id != null
            ? r.A.getApplication(n.application_id)
            : n?.name != null
              ? r.A.getApplicationByName(n.name)
              : null,
    );
    return n?.type === s.$.CUSTOM_STATUS || n?.type === s.$.HANG_STATUS
        ? null
        : (0, o.A)(n)
          ? (0, e.jsx)(Y, { user: l, currentUser: t, activity: n, className: g, onClose: C })
          : (0, e.jsx)(x.A, {
                user: l,
                currentUser: t,
                activity: n,
                application: p,
                voiceGuild: m,
                voiceChannel: j,
                className: g,
                onClose: C,
            });
}
