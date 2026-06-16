"use strict";
n.d(t, { A: () => K });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(765379),
    o = n(90644),
    l = n(587895),
    u = n(429913),
    c = n(734057),
    d = n(71393),
    _ = n(977997),
    h = n(580763),
    f = n(503698),
    p = n.n(f),
    E = n(939249),
    m = n(793574),
    g = n(688810),
    A = n(939341),
    I = n(623671),
    T = n(365185),
    S = n(915089),
    y = n(172710),
    C = n(92240),
    N = n(257367),
    v = n(160376),
    R = n(939496),
    O = n(282197),
    b = n(584904),
    D = n(351638),
    L = n(531648),
    w = n(753713),
    M = n(990078),
    P = n(835723),
    x = n(55730),
    k = n(353411),
    U = n(879945),
    G = n(993401),
    F = n(652215),
    V = n(996988),
    B = n(375708),
    j = n(514566);
function H(e) {
    let { user: t, activity: n, onAction: r } = e,
        { themeType: s } = (0, R.E)(),
        a = (0, k._B)(n, t),
        l = (0, k.J$)(n, t);
    if (!(0, o.A)(n) || (!(0, x.A)(n, F.jUm.PLAY) && !(0, x.A)(n, F.jUm.SYNC))) return null;
    let u = (e) => {
            e?.stopPropagation(), r?.({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" }), a.onClick();
        },
        c = (e) => {
            e.stopPropagation(), r?.({ action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON" }), l.onClick();
        };
    return s === V.d.MODAL_V2
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(M.m, {
                      text: l.tooltip,
                      children: (0, i.jsx)(G.FD, {
                          text: l.label ?? B.intl.string(B.t.eU3inB),
                          onClick: c,
                          disabled: l.disabled,
                          loading: l.loading,
                      }),
                  }),
                  (0, i.jsx)(M.m, {
                      text: a.tooltip,
                      children: (0, i.jsx)(G.FD, {
                          text: a.label ?? B.intl.string(B.t.rRffNz),
                          onClick: u,
                          disabled: a.disabled,
                          loading: a.loading,
                      }),
                  }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("div", {
                      className: j.FS,
                      children: (0, i.jsx)(M.m, {
                          text: a.tooltip,
                          children: (0, i.jsx)(G.FD, {
                              icon: () => (0, i.jsx)(U.A, {}),
                              text: a.label ?? B.intl.string(B.t.rRffNz),
                              onClick: u,
                              disabled: a.disabled,
                              loading: a.loading,
                              fullWidth: !0,
                          }),
                      }),
                  }),
                  (0, i.jsx)(G.q3, {
                      icon: P.J,
                      tooltipText: l.tooltip ?? B.intl.string(B.t.eU3inB),
                      "aria-label": l.label ?? B.intl.string(B.t.eU3inB),
                      disabled: l.disabled,
                      loading: l.loading,
                      onClick: c,
                  }),
              ],
          });
}
var Y = n(269587);
function W(e) {
    let t,
        { user: n, currentUser: s, activity: a, className: l, onClose: u } = e,
        c = (0, S.GV)(),
        d = (0, S.GV)(),
        { themeType: _ } = (0, R.E)(),
        h = (0, T.A)({ activity: a, user: n }),
        f = (0, v.A)(a),
        M = null != f.text && "" !== f.text,
        { largeImage: P } = (0, A.XN)(a, void 0, "user_profile_spotify"),
        { analyticsLocations: x } = (0, g.Ay)(m.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        k = (0, C.A)({ display: "live", user: n, activity: a, entry: h, analyticsLocations: x }),
        U = (0, N.A)({ userId: n.id, onAction: k });
    if (!(0, o.A)(a)) return null;
    let G = () =>
        n.id === s.id
            ? null
            : (0, i.jsx)("div", { className: j.o1, children: (0, i.jsx)(H, { user: n, activity: a, onAction: k }) });
    return (0, i.jsx)(g.f5, {
        value: x,
        children: (0, i.jsxs)(b.A, {
            ref: U,
            className: p()(j.Nr, l),
            onAction: k,
            onClose: u,
            "aria-labelledby": M ? `${d} ${c}` : c,
            children: [
                (0, i.jsx)(D.A, {
                    textId: d,
                    ...f,
                    contextMenu: (0, i.jsx)(Y.A, { display: "live", user: n, activity: a, entry: h, onClose: u }),
                }),
                (0, i.jsx)("div", {
                    className: j.rf,
                    children: (0, i.jsxs)("div", {
                        className: j.Qs,
                        children: [
                            (0, i.jsx)(I.d, {
                                image: P,
                                size: _ === V.d.MODAL_V2 ? I.w.SIZE_100 : I.w.SIZE_60,
                                className: j.mM,
                                onClick: (e) => {
                                    e.stopPropagation(), k({ action: "OPEN_SPOTIFY_ALBUM" }), (0, y.QX)(a, n.id);
                                },
                            }),
                            (0, i.jsxs)("div", {
                                className: j.zH,
                                children: [
                                    (0, i.jsxs)("div", {
                                        children: [
                                            (0, i.jsx)(L.Q, {
                                                variant: "heading-sm/semibold",
                                                text: a.details,
                                                onClick: () => {
                                                    k({ action: "OPEN_SPOTIFY_TRACK" }), (0, y.Mp)(a);
                                                },
                                                id: c,
                                            }),
                                            0 === (t = a.state?.split("; ") ?? []).length
                                                ? null
                                                : null == a.sync_id
                                                  ? (0, i.jsx)(L.A, { variant: "text-xs/normal", text: t.join(", ") })
                                                  : (0, i.jsx)(L.A, {
                                                        variant: "text-xs/normal",
                                                        text: t.map((e, s) =>
                                                            (0, i.jsxs)(
                                                                r.Fragment,
                                                                {
                                                                    children: [
                                                                        (0, i.jsx)(E.D, {
                                                                            className: p()(j.sd, j.mG),
                                                                            onClick: (e) => {
                                                                                e.stopPropagation(),
                                                                                    k({
                                                                                        action: "OPEN_SPOTIFY_ARTIST",
                                                                                    }),
                                                                                    (0, y.mN)(a, n.id, s);
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
                                    (0, i.jsx)(O.A, { user: n, activity: a, className: j.jp }),
                                    (() => {
                                        let { timestamps: e } = a;
                                        if (null == e) return null;
                                        let { start: t, end: n } = e;
                                        return null == t || null == n ? null : (0, i.jsx)(w.A, { start: t, end: n });
                                    })(),
                                    _ === V.d.MODAL_V2 && G(),
                                ],
                            }),
                            _ === V.d.MODAL && G(),
                        ],
                    }),
                }),
                _ !== V.d.MODAL && _ !== V.d.MODAL_V2 && G(),
            ],
        }),
    });
}
function K(e) {
    let { user: t, currentUser: n, activity: r, className: f, onClose: p } = e,
        { voiceGuild: E, voiceChannel: m } = (0, s.cf)([d.A, _.A, c.A], () => {
            let e = (0, a.A)(r);
            if (!e && r.type !== F.$pd.HANG_STATUS) return {};
            let n = e
                    ? _.A.getVoiceStateForSession(t.id, r?.session_id)?.channelId
                    : _.A.getVoiceStateForUser(t.id)?.channelId,
                i = c.A.getChannel(n);
            return { voiceGuild: d.A.getGuild(i?.getGuildId()), voiceChannel: i };
        });
    (0, u.h)(r?.application_id);
    let g = (0, s.bG)([l.A], () =>
        r?.application_id != null
            ? l.A.getApplication(r.application_id)
            : r?.name != null
              ? l.A.getApplicationByName(r.name)
              : null,
    );
    return r?.type === F.$pd.CUSTOM_STATUS || r?.type === F.$pd.HANG_STATUS
        ? null
        : (0, o.A)(r)
          ? (0, i.jsx)(W, { user: t, currentUser: n, activity: r, className: f, onClose: p })
          : (0, i.jsx)(h.A, {
                user: t,
                currentUser: n,
                activity: r,
                application: g,
                voiceGuild: E,
                voiceChannel: m,
                className: f,
                onClose: p,
            });
}
