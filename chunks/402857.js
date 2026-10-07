l.d(t, { A: () => Y });
var e = l(477900),
    n = l(582128),
    s = l(17928),
    a = l(765379),
    d = l(90644),
    o = l(587895),
    r = l(429913),
    c = l(734057),
    u = l(71393),
    A = l(977997),
    h = l(580763),
    x = l(503698),
    g = l.n(x),
    m = l(939249),
    C = l(793574),
    j = l(688810),
    p = l(774926),
    v = l(623671),
    N = l(365185),
    _ = l(915089),
    f = l(172710),
    O = l(92240),
    E = l(257367),
    I = l(160376),
    L = l(939496),
    y = l(282197),
    S = l(584904),
    D = l(351638),
    M = l(531648),
    V = l(753713),
    b = l(866665),
    T = l(835723),
    P = l(55730),
    w = l(353411),
    G = l(879945),
    U = l(993401),
    k = l(652215),
    F = l(996988),
    R = l(660183),
    z = l(260155);
function B(i) {
    let { user: t, activity: l, onAction: n } = i,
        { themeType: s } = (0, L.E)(),
        a = (0, w._B)(l, t),
        o = (0, w.J$)(l, t);
    if (!(0, d.A)(l) || (!(0, P.A)(l, k.jUm.PLAY) && !(0, P.A)(l, k.jUm.SYNC))) return null;
    let r = (i) => {
            (i?.stopPropagation(), n?.({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" }), a.onClick());
        },
        c = (i) => {
            (i.stopPropagation(), n?.({ action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON" }), o.onClick());
        };
    return s === F.d.MODAL_V2
        ? (0, e.jsxs)(e.Fragment, {
              children: [
                  (0, e.jsx)(b.m, {
                      text: o.tooltip,
                      children: (0, e.jsx)(U.FD, {
                          text: o.label ?? R.intl.string(R.t.eU3inB),
                          onClick: c,
                          disabled: o.disabled,
                          loading: o.loading,
                      }),
                  }),
                  (0, e.jsx)(b.m, {
                      text: a.tooltip,
                      children: (0, e.jsx)(U.FD, {
                          text: a.label ?? R.intl.string(R.t.rRffNz),
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
                      className: z.FS,
                      children: (0, e.jsx)(b.m, {
                          text: a.tooltip,
                          children: (0, e.jsx)(U.FD, {
                              icon: () => (0, e.jsx)(G.A, {}),
                              text: a.label ?? R.intl.string(R.t.rRffNz),
                              onClick: r,
                              disabled: a.disabled,
                              loading: a.loading,
                              fullWidth: !0,
                          }),
                      }),
                  }),
                  (0, e.jsx)(U.q3, {
                      icon: T.J,
                      tooltipText: o.tooltip ?? R.intl.string(R.t.eU3inB),
                      "aria-label": o.label ?? R.intl.string(R.t.eU3inB),
                      disabled: o.disabled,
                      loading: o.loading,
                      onClick: c,
                  }),
              ],
          });
}
var H = l(269587);
function Q(i) {
    let t,
        { user: l, currentUser: s, activity: a, className: o, onClose: r } = i,
        c = (0, _.GV)(),
        u = (0, _.GV)(),
        { themeType: A } = (0, L.E)(),
        h = (0, N.A)({ activity: a, user: l }),
        x = (0, I.A)(a),
        b = null != x.text && "" !== x.text,
        { largeImage: T } = (0, p.XN)(a, void 0, "user_profile_spotify"),
        { analyticsLocations: P } = (0, j.Ay)(C.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        w = (0, O.A)({ display: "live", user: l, activity: a, entry: h, analyticsLocations: P }),
        G = (0, E.A)({ userId: l.id, onAction: w });
    if (!(0, d.A)(a)) return null;
    function U() {
        return l.id === s.id
            ? null
            : (0, e.jsx)("div", { className: z.o1, children: (0, e.jsx)(B, { user: l, activity: a, onAction: w }) });
    }
    return (0, e.jsx)(j.f5, {
        value: P,
        children: (0, e.jsxs)(S.A, {
            ref: G,
            className: g()(z.Nr, o),
            onAction: w,
            onClose: r,
            "aria-labelledby": b ? `${u} ${c}` : c,
            children: [
                (0, e.jsx)(D.A, {
                    textId: u,
                    ...x,
                    contextMenu: (0, e.jsx)(H.A, { display: "live", user: l, activity: a, entry: h, onClose: r }),
                }),
                (0, e.jsx)("div", {
                    className: z.rf,
                    children: (0, e.jsxs)("div", {
                        className: z.Qs,
                        children: [
                            (0, e.jsx)(v.d, {
                                image: T,
                                size: A === F.d.MODAL_V2 ? v.w.SIZE_100 : v.w.SIZE_60,
                                className: z.mM,
                                onClick: (i) => {
                                    (i.stopPropagation(), w({ action: "OPEN_SPOTIFY_ALBUM" }), (0, f.QX)(a, l.id));
                                },
                            }),
                            (0, e.jsxs)("div", {
                                className: z.zH,
                                children: [
                                    (0, e.jsxs)("div", {
                                        children: [
                                            (0, e.jsx)(M.Q, {
                                                variant: "heading-sm/semibold",
                                                text: a.details,
                                                onClick: () => {
                                                    (w({ action: "OPEN_SPOTIFY_TRACK" }), (0, f.Mp)(a));
                                                },
                                                id: c,
                                            }),
                                            0 === (t = a.state?.split("; ") ?? []).length
                                                ? null
                                                : null == a.sync_id
                                                  ? (0, e.jsx)(M.A, { variant: "text-xs/normal", text: t.join(", ") })
                                                  : (0, e.jsx)(M.A, {
                                                        variant: "text-xs/normal",
                                                        text: t.map((i, s) =>
                                                            (0, e.jsxs)(
                                                                n.Fragment,
                                                                {
                                                                    children: [
                                                                        (0, e.jsx)(m.D, {
                                                                            className: g()(z.sd, z.mG),
                                                                            onClick: (i) => {
                                                                                (i.stopPropagation(),
                                                                                    w({
                                                                                        action: "OPEN_SPOTIFY_ARTIST",
                                                                                    }),
                                                                                    (0, f.mN)(a, l.id, s));
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
                                    (0, e.jsx)(y.A, { user: l, activity: a, className: z.jp }),
                                    (function () {
                                        let { timestamps: i } = a;
                                        if (null == i) return null;
                                        let { start: t, end: l } = i;
                                        return null == t || null == l ? null : (0, e.jsx)(V.A, { start: t, end: l });
                                    })(),
                                    A === F.d.MODAL_V2 && U(),
                                ],
                            }),
                            A === F.d.MODAL && U(),
                        ],
                    }),
                }),
                A !== F.d.MODAL && A !== F.d.MODAL_V2 && U(),
            ],
        }),
    });
}
function Y(i) {
    let { user: t, currentUser: l, activity: n, className: x, onClose: g } = i,
        { voiceGuild: m, voiceChannel: C } = (0, s.cf)([u.A, A.A, c.A], () => {
            let i = (0, a.A)(n);
            if (!i && n.type !== k.$pd.HANG_STATUS) return {};
            let l = i
                    ? A.A.getVoiceStateForSession(t.id, n?.session_id)?.channelId
                    : A.A.getVoiceStateForUser(t.id)?.channelId,
                e = c.A.getChannel(l);
            return { voiceGuild: u.A.getGuild(e?.getGuildId()), voiceChannel: e };
        });
    (0, r.h)(n?.application_id);
    let j = (0, s.bG)([o.A], () =>
        n?.application_id != null
            ? o.A.getApplication(n.application_id)
            : n?.name != null
              ? o.A.getApplicationByName(n.name)
              : null,
    );
    return n?.type === k.$pd.CUSTOM_STATUS || n?.type === k.$pd.HANG_STATUS
        ? null
        : (0, d.A)(n)
          ? (0, e.jsx)(Q, { user: t, currentUser: l, activity: n, className: x, onClose: g })
          : (0, e.jsx)(h.A, {
                user: t,
                currentUser: l,
                activity: n,
                application: j,
                voiceGuild: m,
                voiceChannel: C,
                className: x,
                onClose: g,
            });
}
