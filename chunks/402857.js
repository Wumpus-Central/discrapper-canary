l.d(t, { A: () => $ });
var e = l(477900),
    n = l(582128),
    s = l(350835),
    a = l(17928),
    d = l(765379),
    o = l(90644),
    r = l(587895),
    c = l(429913),
    u = l(734057),
    A = l(71393),
    h = l(977997),
    x = l(580763),
    g = l(503698),
    m = l.n(g),
    C = l(939249),
    j = l(793574),
    p = l(688810),
    v = l(774926),
    N = l(623671),
    _ = l(365185),
    f = l(915089),
    O = l(172710),
    E = l(92240),
    I = l(257367),
    L = l(160376),
    y = l(939496),
    S = l(282197),
    D = l(584904),
    M = l(351638),
    V = l(531648),
    b = l(753713),
    T = l(866665),
    P = l(835723),
    w = l(55730),
    G = l(353411),
    U = l(879945),
    k = l(993401),
    F = l(652215),
    R = l(996988),
    z = l(105292),
    B = l(260155);
function H(i) {
    let { user: t, activity: l, onAction: n } = i,
        { themeType: s } = (0, y.E)(),
        a = (0, G._B)(l, t),
        d = (0, G.J$)(l, t);
    if (!(0, o.A)(l) || (!(0, w.A)(l, F.jUm.PLAY) && !(0, w.A)(l, F.jUm.SYNC))) return null;
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
var Q = l(269587);
function Y(i) {
    let t,
        { user: l, currentUser: s, activity: a, className: d, onClose: r } = i,
        c = (0, f.GV)(),
        u = (0, f.GV)(),
        { themeType: A } = (0, y.E)(),
        h = (0, _.A)({ activity: a, user: l }),
        x = (0, L.A)(a),
        g = null != x.text && "" !== x.text,
        { largeImage: T } = (0, v.XN)(a, void 0, "user_profile_spotify"),
        { analyticsLocations: P } = (0, p.Ay)(j.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        w = (0, E.A)({ display: "live", user: l, activity: a, entry: h, analyticsLocations: P }),
        G = (0, I.A)({ userId: l.id, onAction: w });
    if (!(0, o.A)(a)) return null;
    function U() {
        return l.id === s.id
            ? null
            : (0, e.jsx)("div", { className: B.o1, children: (0, e.jsx)(H, { user: l, activity: a, onAction: w }) });
    }
    return (0, e.jsx)(p.f5, {
        value: P,
        children: (0, e.jsxs)(D.A, {
            ref: G,
            className: m()(B.Nr, d),
            onAction: w,
            onClose: r,
            "aria-labelledby": g ? `${u} ${c}` : c,
            children: [
                (0, e.jsx)(M.A, {
                    textId: u,
                    ...x,
                    contextMenu: (0, e.jsx)(Q.A, { display: "live", user: l, activity: a, entry: h, onClose: r }),
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
                                    (i.stopPropagation(), w({ action: "OPEN_SPOTIFY_ALBUM" }), (0, O.QX)(a, l.id));
                                },
                            }),
                            (0, e.jsxs)("div", {
                                className: B.zH,
                                children: [
                                    (0, e.jsxs)("div", {
                                        children: [
                                            (0, e.jsx)(V.Q, {
                                                variant: "heading-sm/semibold",
                                                text: a.details,
                                                onClick: () => {
                                                    (w({ action: "OPEN_SPOTIFY_TRACK" }), (0, O.Mp)(a));
                                                },
                                                id: c,
                                            }),
                                            0 === (t = a.state?.split("; ") ?? []).length
                                                ? null
                                                : null == a.sync_id
                                                  ? (0, e.jsx)(V.A, { variant: "text-xs/normal", text: t.join(", ") })
                                                  : (0, e.jsx)(V.A, {
                                                        variant: "text-xs/normal",
                                                        text: t.map((i, s) =>
                                                            (0, e.jsxs)(
                                                                n.Fragment,
                                                                {
                                                                    children: [
                                                                        (0, e.jsx)(C.D, {
                                                                            className: m()(B.sd, B.mG),
                                                                            onClick: (i) => {
                                                                                (i.stopPropagation(),
                                                                                    w({
                                                                                        action: "OPEN_SPOTIFY_ARTIST",
                                                                                    }),
                                                                                    (0, O.mN)(a, l.id, s));
                                                                            },
                                                                            children: i,
                                                                        }),
                                                                        s < t.length - 1 ? ", " : "",
                                                                    ],
                                                                },
                                                                s,
                                                            ),
                                                        ),
                                                    }),
                                        ],
                                    }),
                                    (0, e.jsx)(S.A, { user: l, activity: a, className: B.jp }),
                                    (function () {
                                        let { timestamps: i } = a;
                                        if (null == i) return null;
                                        let { start: t, end: l } = i;
                                        return null == t || null == l ? null : (0, e.jsx)(b.A, { start: t, end: l });
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
    let { user: t, currentUser: l, activity: n, className: g, onClose: m } = i,
        { voiceGuild: C, voiceChannel: j } = (0, a.cf)([A.A, h.A, u.A], () => {
            let i = (0, d.A)(n);
            if (!i && n.type !== s.$.HANG_STATUS) return {};
            let l = i
                    ? h.A.getVoiceStateForSession(t.id, n?.session_id)?.channelId
                    : h.A.getVoiceStateForUser(t.id)?.channelId,
                e = u.A.getChannel(l);
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
          ? (0, e.jsx)(Y, { user: t, currentUser: l, activity: n, className: g, onClose: m })
          : (0, e.jsx)(x.A, {
                user: t,
                currentUser: l,
                activity: n,
                application: p,
                voiceGuild: C,
                voiceChannel: j,
                className: g,
                onClose: m,
            });
}
