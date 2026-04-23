i.d(t, { A: () => $ });
var l = i(627968),
    n = i(64700),
    s = i(17928),
    a = i(765379),
    d = i(90644),
    r = i(587895),
    o = i(429913),
    c = i(734057),
    u = i(71393),
    A = i(977997),
    h = i(580763),
    g = i(503698),
    x = i.n(g),
    m = i(939249),
    C = i(793574),
    _ = i(688810),
    p = i(939341),
    N = i(623671),
    f = i(365185),
    v = i(915089),
    j = i(172710),
    E = i(92240),
    S = i(257367),
    O = i(248302),
    I = i(939496),
    y = i(282197),
    T = i(584904),
    b = i(351638),
    L = i(531648),
    M = i(753713),
    V = i(990078),
    D = i(835723),
    w = i(833349),
    G = i(353411),
    U = i(879945),
    P = i(993401),
    F = i(652215),
    k = i(996988),
    R = i(985018),
    H = i(514566);
function B(e) {
    let { user: t, activity: i, onAction: n } = e,
        { themeType: s } = (0, I.E)(),
        a = (0, G._B)(i, t),
        r = (0, G.J$)(i, t);
    if (!(0, d.A)(i) || (!(0, w.A)(i, F.jUm.PLAY) && !(0, w.A)(i, F.jUm.SYNC))) return null;
    let o = (e) => {
            e?.stopPropagation(), n?.({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" }), a.onClick();
        },
        c = (e) => {
            e.stopPropagation(), n?.({ action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON" }), r.onClick();
        };
    return s === k.d.MODAL_V2
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(V.m, {
                      text: r.tooltip,
                      children: (0, l.jsx)(P.FD, {
                          text: r.label ?? R.intl.string(R.t.eU3inB),
                          onClick: c,
                          disabled: r.disabled,
                          loading: r.loading,
                      }),
                  }),
                  (0, l.jsx)(V.m, {
                      text: a.tooltip,
                      children: (0, l.jsx)(P.FD, {
                          text: a.label ?? R.intl.string(R.t.rRffNz),
                          onClick: o,
                          disabled: a.disabled,
                          loading: a.loading,
                      }),
                  }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", {
                      className: H.FS,
                      children: (0, l.jsx)(V.m, {
                          text: a.tooltip,
                          children: (0, l.jsx)(P.FD, {
                              icon: () => (0, l.jsx)(U.A, {}),
                              text: a.label ?? R.intl.string(R.t.rRffNz),
                              onClick: o,
                              disabled: a.disabled,
                              loading: a.loading,
                              fullWidth: !0,
                          }),
                      }),
                  }),
                  (0, l.jsx)(P.q3, {
                      icon: D.J,
                      tooltipText: r.tooltip ?? R.intl.string(R.t.eU3inB),
                      "aria-label": r.label ?? R.intl.string(R.t.eU3inB),
                      disabled: r.disabled,
                      loading: r.loading,
                      onClick: c,
                  }),
              ],
          });
}
var z = i(269587);
function q(e) {
    let t,
        { user: i, currentUser: s, activity: a, className: r, onClose: o } = e,
        c = (0, v.GV)(),
        u = (0, v.GV)(),
        { themeType: A } = (0, I.E)(),
        h = (0, f.A)({ activity: a, user: i }),
        g = (0, O.A)(a),
        V = null != g.text && "" !== g.text,
        { largeImage: D } = (0, p.XN)(a),
        { analyticsLocations: w } = (0, _.Ay)(C.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        G = (0, E.A)({ display: "live", user: i, activity: a, entry: h, analyticsLocations: w }),
        U = (0, S.A)({ userId: i.id, onAction: G });
    if (!(0, d.A)(a)) return null;
    let P = () =>
        i.id === s.id
            ? null
            : (0, l.jsx)("div", { className: H.o1, children: (0, l.jsx)(B, { user: i, activity: a, onAction: G }) });
    return (0, l.jsx)(_.f5, {
        value: w,
        children: (0, l.jsxs)(T.A, {
            ref: U,
            className: x()(H.Nr, r),
            onAction: G,
            onClose: o,
            "aria-labelledby": V ? `${u} ${c}` : c,
            children: [
                (0, l.jsx)(b.A, {
                    textId: u,
                    ...g,
                    contextMenu: (0, l.jsx)(z.A, { display: "live", user: i, activity: a, entry: h, onClose: o }),
                }),
                (0, l.jsx)("div", {
                    className: H.rf,
                    children: (0, l.jsxs)("div", {
                        className: H.Qs,
                        children: [
                            (0, l.jsx)(N.d, {
                                image: D,
                                size: A === k.d.MODAL_V2 ? N.w.SIZE_100 : N.w.SIZE_60,
                                className: H.mM,
                                onClick: (e) => {
                                    e.stopPropagation(), G({ action: "OPEN_SPOTIFY_ALBUM" }), (0, j.QX)(a, i.id);
                                },
                            }),
                            (0, l.jsxs)("div", {
                                className: H.zH,
                                children: [
                                    (0, l.jsxs)("div", {
                                        children: [
                                            (0, l.jsx)(L.Q, {
                                                variant: "heading-sm/semibold",
                                                text: a.details,
                                                onClick: () => {
                                                    G({ action: "OPEN_SPOTIFY_TRACK" }), (0, j.Mp)(a);
                                                },
                                                id: c,
                                            }),
                                            0 === (t = a.state?.split("; ") ?? []).length
                                                ? null
                                                : null == a.sync_id
                                                  ? (0, l.jsx)(L.A, { variant: "text-xs/normal", text: t.join(", ") })
                                                  : (0, l.jsx)(L.A, {
                                                        variant: "text-xs/normal",
                                                        text: t.map((e, s) =>
                                                            (0, l.jsxs)(
                                                                n.Fragment,
                                                                {
                                                                    children: [
                                                                        (0, l.jsx)(m.D, {
                                                                            className: x()(H.sd, H.mG),
                                                                            onClick: (e) => {
                                                                                e.stopPropagation(),
                                                                                    G({
                                                                                        action: "OPEN_SPOTIFY_ARTIST",
                                                                                    }),
                                                                                    (0, j.mN)(a, i.id, s);
                                                                            },
                                                                            children: e,
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
                                    (0, l.jsx)(y.A, { user: i, activity: a, className: H.jp }),
                                    (() => {
                                        let { timestamps: e } = a;
                                        if (null == e) return null;
                                        let { start: t, end: i } = e;
                                        return null == t || null == i ? null : (0, l.jsx)(M.A, { start: t, end: i });
                                    })(),
                                    A === k.d.MODAL_V2 && P(),
                                ],
                            }),
                            A === k.d.MODAL && P(),
                        ],
                    }),
                }),
                A !== k.d.MODAL && A !== k.d.MODAL_V2 && P(),
            ],
        }),
    });
}
function $(e) {
    let { user: t, currentUser: i, activity: n, className: g, onClose: x } = e,
        { voiceGuild: m, voiceChannel: C } = (0, s.cf)([u.A, A.A, c.A], () => {
            let e = (0, a.A)(n);
            if (!e && n.type !== F.$pd.HANG_STATUS) return {};
            let i = e
                    ? A.A.getVoiceStateForSession(t.id, n?.session_id)?.channelId
                    : A.A.getVoiceStateForUser(t.id)?.channelId,
                l = c.A.getChannel(i);
            return { voiceGuild: u.A.getGuild(l?.getGuildId()), voiceChannel: l };
        });
    (0, o.h)(n?.application_id);
    let _ = (0, s.bG)([r.A], () =>
        n?.application_id != null
            ? r.A.getApplication(n.application_id)
            : n?.name != null
              ? r.A.getApplicationByName(n.name)
              : null,
    );
    return n?.type === F.$pd.CUSTOM_STATUS || n?.type === F.$pd.HANG_STATUS
        ? null
        : (0, d.A)(n)
          ? (0, l.jsx)(q, { user: t, currentUser: i, activity: n, className: g, onClose: x })
          : (0, l.jsx)(h.A, {
                user: t,
                currentUser: i,
                activity: n,
                application: _,
                voiceGuild: m,
                voiceChannel: C,
                className: g,
                onClose: x,
            });
}
