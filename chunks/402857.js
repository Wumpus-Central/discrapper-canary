"use strict";
n.d(t, { A: () => K });
var i = n(627968),
    r = n(64700),
    a = n(17928),
    s = n(765379),
    l = n(90644),
    o = n(587895),
    d = n(429913),
    c = n(734057),
    u = n(71393),
    _ = n(977997),
    E = n(580763),
    A = n(503698),
    h = n.n(A),
    I = n(939249),
    f = n(793574),
    p = n(688810),
    T = n(939341),
    m = n(623671),
    g = n(365185),
    S = n(915089),
    N = n(172710),
    C = n(92240),
    R = n(257367),
    O = n(160376),
    L = n(939496),
    D = n(282197),
    y = n(584904),
    v = n(351638),
    b = n(531648),
    M = n(753713),
    P = n(990078),
    U = n(835723),
    w = n(55730),
    G = n(353411),
    x = n(879945),
    k = n(993401),
    F = n(652215),
    V = n(996988),
    B = n(375708),
    H = n(514566);
function j(e) {
    let { user: t, activity: n, onAction: r } = e,
        { themeType: a } = (0, L.E)(),
        s = (0, G._B)(n, t),
        o = (0, G.J$)(n, t);
    if (!(0, l.A)(n) || (!(0, w.A)(n, F.jUm.PLAY) && !(0, w.A)(n, F.jUm.SYNC))) return null;
    let d = (e) => {
            e?.stopPropagation(), r?.({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" }), s.onClick();
        },
        c = (e) => {
            e.stopPropagation(), r?.({ action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON" }), o.onClick();
        };
    return a === V.d.MODAL_V2
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(P.m, {
                      text: o.tooltip,
                      children: (0, i.jsx)(k.FD, {
                          text: o.label ?? B.intl.string(B.t.eU3inB),
                          onClick: c,
                          disabled: o.disabled,
                          loading: o.loading,
                      }),
                  }),
                  (0, i.jsx)(P.m, {
                      text: s.tooltip,
                      children: (0, i.jsx)(k.FD, {
                          text: s.label ?? B.intl.string(B.t.rRffNz),
                          onClick: d,
                          disabled: s.disabled,
                          loading: s.loading,
                      }),
                  }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("div", {
                      className: H.FS,
                      children: (0, i.jsx)(P.m, {
                          text: s.tooltip,
                          children: (0, i.jsx)(k.FD, {
                              icon: () => (0, i.jsx)(x.A, {}),
                              text: s.label ?? B.intl.string(B.t.rRffNz),
                              onClick: d,
                              disabled: s.disabled,
                              loading: s.loading,
                              fullWidth: !0,
                          }),
                      }),
                  }),
                  (0, i.jsx)(k.q3, {
                      icon: U.J,
                      tooltipText: o.tooltip ?? B.intl.string(B.t.eU3inB),
                      "aria-label": o.label ?? B.intl.string(B.t.eU3inB),
                      disabled: o.disabled,
                      loading: o.loading,
                      onClick: c,
                  }),
              ],
          });
}
var W = n(269587);
function Y(e) {
    let t,
        { user: n, currentUser: a, activity: s, className: o, onClose: d } = e,
        c = (0, S.GV)(),
        u = (0, S.GV)(),
        { themeType: _ } = (0, L.E)(),
        E = (0, g.A)({ activity: s, user: n }),
        A = (0, O.A)(s),
        P = null != A.text && "" !== A.text,
        { largeImage: U } = (0, T.XN)(s, void 0, "user_profile_spotify"),
        { analyticsLocations: w } = (0, p.Ay)(f.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        G = (0, C.A)({ display: "live", user: n, activity: s, entry: E, analyticsLocations: w }),
        x = (0, R.A)({ userId: n.id, onAction: G });
    if (!(0, l.A)(s)) return null;
    function k() {
        return n.id === a.id
            ? null
            : (0, i.jsx)("div", { className: H.o1, children: (0, i.jsx)(j, { user: n, activity: s, onAction: G }) });
    }
    return (0, i.jsx)(p.f5, {
        value: w,
        children: (0, i.jsxs)(y.A, {
            ref: x,
            className: h()(H.Nr, o),
            onAction: G,
            onClose: d,
            "aria-labelledby": P ? `${u} ${c}` : c,
            children: [
                (0, i.jsx)(v.A, {
                    textId: u,
                    ...A,
                    contextMenu: (0, i.jsx)(W.A, { display: "live", user: n, activity: s, entry: E, onClose: d }),
                }),
                (0, i.jsx)("div", {
                    className: H.rf,
                    children: (0, i.jsxs)("div", {
                        className: H.Qs,
                        children: [
                            (0, i.jsx)(m.d, {
                                image: U,
                                size: _ === V.d.MODAL_V2 ? m.w.SIZE_100 : m.w.SIZE_60,
                                className: H.mM,
                                onClick: (e) => {
                                    e.stopPropagation(), G({ action: "OPEN_SPOTIFY_ALBUM" }), (0, N.QX)(s, n.id);
                                },
                            }),
                            (0, i.jsxs)("div", {
                                className: H.zH,
                                children: [
                                    (0, i.jsxs)("div", {
                                        children: [
                                            (0, i.jsx)(b.Q, {
                                                variant: "heading-sm/semibold",
                                                text: s.details,
                                                onClick: () => {
                                                    G({ action: "OPEN_SPOTIFY_TRACK" }), (0, N.Mp)(s);
                                                },
                                                id: c,
                                            }),
                                            0 === (t = s.state?.split("; ") ?? []).length
                                                ? null
                                                : null == s.sync_id
                                                  ? (0, i.jsx)(b.A, { variant: "text-xs/normal", text: t.join(", ") })
                                                  : (0, i.jsx)(b.A, {
                                                        variant: "text-xs/normal",
                                                        text: t.map((e, a) =>
                                                            (0, i.jsxs)(
                                                                r.Fragment,
                                                                {
                                                                    children: [
                                                                        (0, i.jsx)(I.D, {
                                                                            className: h()(H.sd, H.mG),
                                                                            onClick: (e) => {
                                                                                e.stopPropagation(),
                                                                                    G({
                                                                                        action: "OPEN_SPOTIFY_ARTIST",
                                                                                    }),
                                                                                    (0, N.mN)(s, n.id, a);
                                                                            },
                                                                            children: e,
                                                                        }),
                                                                        a < t.length - 1 ? ", " : "",
                                                                    ],
                                                                },
                                                                a,
                                                            ),
                                                        ),
                                                    }),
                                        ],
                                    }),
                                    (0, i.jsx)(D.A, { user: n, activity: s, className: H.jp }),
                                    (function () {
                                        let { timestamps: e } = s;
                                        if (null == e) return null;
                                        let { start: t, end: n } = e;
                                        return null == t || null == n ? null : (0, i.jsx)(M.A, { start: t, end: n });
                                    })(),
                                    _ === V.d.MODAL_V2 && k(),
                                ],
                            }),
                            _ === V.d.MODAL && k(),
                        ],
                    }),
                }),
                _ !== V.d.MODAL && _ !== V.d.MODAL_V2 && k(),
            ],
        }),
    });
}
function K(e) {
    let { user: t, currentUser: n, activity: r, className: A, onClose: h } = e,
        { voiceGuild: I, voiceChannel: f } = (0, a.cf)([u.A, _.A, c.A], () => {
            let e = (0, s.A)(r);
            if (!e && r.type !== F.$pd.HANG_STATUS) return {};
            let n = e
                    ? _.A.getVoiceStateForSession(t.id, r?.session_id)?.channelId
                    : _.A.getVoiceStateForUser(t.id)?.channelId,
                i = c.A.getChannel(n);
            return { voiceGuild: u.A.getGuild(i?.getGuildId()), voiceChannel: i };
        });
    (0, d.h)(r?.application_id);
    let p = (0, a.bG)([o.A], () =>
        r?.application_id != null
            ? o.A.getApplication(r.application_id)
            : r?.name != null
              ? o.A.getApplicationByName(r.name)
              : null,
    );
    return r?.type === F.$pd.CUSTOM_STATUS || r?.type === F.$pd.HANG_STATUS
        ? null
        : (0, l.A)(r)
          ? (0, i.jsx)(Y, { user: t, currentUser: n, activity: r, className: A, onClose: h })
          : (0, i.jsx)(E.A, {
                user: t,
                currentUser: n,
                activity: r,
                application: p,
                voiceGuild: I,
                voiceChannel: f,
                className: A,
                onClose: h,
            });
}
