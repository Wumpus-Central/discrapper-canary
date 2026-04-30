l.d(i, { A: () => Y });
var t = l(627968),
    n = l(64700),
    s = l(17928),
    a = l(765379),
    d = l(90644),
    o = l(587895),
    r = l(429913),
    c = l(734057),
    A = l(71393),
    h = l(977997),
    u = l(580763),
    x = l(503698),
    g = l.n(x),
    m = l(939249),
    j = l(793574),
    p = l(688810),
    C = l(939341),
    _ = l(623671),
    N = l(365185),
    v = l(915089),
    f = l(172710),
    O = l(92240),
    I = l(257367),
    E = l(248302),
    y = l(939496),
    L = l(282197),
    S = l(584904),
    b = l(351638),
    T = l(531648),
    V = l(753713),
    D = l(990078),
    w = l(835723),
    M = l(833349),
    P = l(353411),
    G = l(879945),
    U = l(993401),
    k = l(652215),
    F = l(996988),
    R = l(985018),
    z = l(514566);
function H(e) {
    let { user: i, activity: l, onAction: n } = e,
        { themeType: s } = (0, y.E)(),
        a = (0, P._B)(l, i),
        o = (0, P.J$)(l, i);
    if (!(0, d.A)(l) || (!(0, M.A)(l, k.jUm.PLAY) && !(0, M.A)(l, k.jUm.SYNC))) return null;
    let r = (e) => {
            e?.stopPropagation(), n?.({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" }), a.onClick();
        },
        c = (e) => {
            e.stopPropagation(), n?.({ action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON" }), o.onClick();
        };
    return s === F.d.MODAL_V2
        ? (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(D.m, {
                      text: o.tooltip,
                      children: (0, t.jsx)(U.FD, {
                          text: o.label ?? R.intl.string(R.t.eU3inB),
                          onClick: c,
                          disabled: o.disabled,
                          loading: o.loading,
                      }),
                  }),
                  (0, t.jsx)(D.m, {
                      text: a.tooltip,
                      children: (0, t.jsx)(U.FD, {
                          text: a.label ?? R.intl.string(R.t.rRffNz),
                          onClick: r,
                          disabled: a.disabled,
                          loading: a.loading,
                      }),
                  }),
              ],
          })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)("div", {
                      className: z.FS,
                      children: (0, t.jsx)(D.m, {
                          text: a.tooltip,
                          children: (0, t.jsx)(U.FD, {
                              icon: () => (0, t.jsx)(G.A, {}),
                              text: a.label ?? R.intl.string(R.t.rRffNz),
                              onClick: r,
                              disabled: a.disabled,
                              loading: a.loading,
                              fullWidth: !0,
                          }),
                      }),
                  }),
                  (0, t.jsx)(U.q3, {
                      icon: w.J,
                      tooltipText: o.tooltip ?? R.intl.string(R.t.eU3inB),
                      "aria-label": o.label ?? R.intl.string(R.t.eU3inB),
                      disabled: o.disabled,
                      loading: o.loading,
                      onClick: c,
                  }),
              ],
          });
}
var Q = l(269587);
function B(e) {
    let i,
        { user: l, currentUser: s, activity: a, className: o, onClose: r } = e,
        c = (0, v.GV)(),
        A = (0, v.GV)(),
        { themeType: h } = (0, y.E)(),
        u = (0, N.A)({ activity: a, user: l }),
        x = (0, E.A)(a),
        D = null != x.text && "" !== x.text,
        { largeImage: w } = (0, C.XN)(a),
        { analyticsLocations: M } = (0, p.Ay)(j.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        P = (0, O.A)({ display: "live", user: l, activity: a, entry: u, analyticsLocations: M }),
        G = (0, I.A)({ userId: l.id, onAction: P });
    if (!(0, d.A)(a)) return null;
    let U = () =>
        l.id === s.id
            ? null
            : (0, t.jsx)("div", { className: z.o1, children: (0, t.jsx)(H, { user: l, activity: a, onAction: P }) });
    return (0, t.jsx)(p.f5, {
        value: M,
        children: (0, t.jsxs)(S.A, {
            ref: G,
            className: g()(z.Nr, o),
            onAction: P,
            onClose: r,
            "aria-labelledby": D ? `${A} ${c}` : c,
            children: [
                (0, t.jsx)(b.A, {
                    textId: A,
                    ...x,
                    contextMenu: (0, t.jsx)(Q.A, { display: "live", user: l, activity: a, entry: u, onClose: r }),
                }),
                (0, t.jsx)("div", {
                    className: z.rf,
                    children: (0, t.jsxs)("div", {
                        className: z.Qs,
                        children: [
                            (0, t.jsx)(_.d, {
                                image: w,
                                size: h === F.d.MODAL_V2 ? _.w.SIZE_100 : _.w.SIZE_60,
                                className: z.mM,
                                onClick: (e) => {
                                    e.stopPropagation(), P({ action: "OPEN_SPOTIFY_ALBUM" }), (0, f.QX)(a, l.id);
                                },
                            }),
                            (0, t.jsxs)("div", {
                                className: z.zH,
                                children: [
                                    (0, t.jsxs)("div", {
                                        children: [
                                            (0, t.jsx)(T.Q, {
                                                variant: "heading-sm/semibold",
                                                text: a.details,
                                                onClick: () => {
                                                    P({ action: "OPEN_SPOTIFY_TRACK" }), (0, f.Mp)(a);
                                                },
                                                id: c,
                                            }),
                                            0 === (i = a.state?.split("; ") ?? []).length
                                                ? null
                                                : null == a.sync_id
                                                  ? (0, t.jsx)(T.A, { variant: "text-xs/normal", text: i.join(", ") })
                                                  : (0, t.jsx)(T.A, {
                                                        variant: "text-xs/normal",
                                                        text: i.map((e, s) =>
                                                            (0, t.jsxs)(
                                                                n.Fragment,
                                                                {
                                                                    children: [
                                                                        (0, t.jsx)(m.D, {
                                                                            className: g()(z.sd, z.mG),
                                                                            onClick: (e) => {
                                                                                e.stopPropagation(),
                                                                                    P({
                                                                                        action: "OPEN_SPOTIFY_ARTIST",
                                                                                    }),
                                                                                    (0, f.mN)(a, l.id, s);
                                                                            },
                                                                            children: e,
                                                                        }),
                                                                        s < i.length - 1 ? ", " : "",
                                                                    ],
                                                                },
                                                                s,
                                                            ),
                                                        ),
                                                    }),
                                        ],
                                    }),
                                    (0, t.jsx)(L.A, { user: l, activity: a, className: z.jp }),
                                    (() => {
                                        let { timestamps: e } = a;
                                        if (null == e) return null;
                                        let { start: i, end: l } = e;
                                        return null == i || null == l ? null : (0, t.jsx)(V.A, { start: i, end: l });
                                    })(),
                                    h === F.d.MODAL_V2 && U(),
                                ],
                            }),
                            h === F.d.MODAL && U(),
                        ],
                    }),
                }),
                h !== F.d.MODAL && h !== F.d.MODAL_V2 && U(),
            ],
        }),
    });
}
function Y(e) {
    let { user: i, currentUser: l, activity: n, className: x, onClose: g } = e,
        { voiceGuild: m, voiceChannel: j } = (0, s.cf)([A.A, h.A, c.A], () => {
            let e = (0, a.A)(n);
            if (!e && n.type !== k.$pd.HANG_STATUS) return {};
            let l = e
                    ? h.A.getVoiceStateForSession(i.id, n?.session_id)?.channelId
                    : h.A.getVoiceStateForUser(i.id)?.channelId,
                t = c.A.getChannel(l);
            return { voiceGuild: A.A.getGuild(t?.getGuildId()), voiceChannel: t };
        });
    (0, r.h)(n?.application_id);
    let p = (0, s.bG)([o.A], () =>
        n?.application_id != null
            ? o.A.getApplication(n.application_id)
            : n?.name != null
              ? o.A.getApplicationByName(n.name)
              : null,
    );
    return n?.type === k.$pd.CUSTOM_STATUS || n?.type === k.$pd.HANG_STATUS
        ? null
        : (0, d.A)(n)
          ? (0, t.jsx)(B, { user: i, currentUser: l, activity: n, className: x, onClose: g })
          : (0, t.jsx)(u.A, {
                user: i,
                currentUser: l,
                activity: n,
                application: p,
                voiceGuild: m,
                voiceChannel: j,
                className: x,
                onClose: g,
            });
}
