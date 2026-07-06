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
    h = n(17389),
    f = n(503698),
    E = n.n(f),
    p = n(939249),
    m = n(793574),
    g = n(688810),
    A = n(939341),
    I = n(623671),
    T = n(365185),
    S = n(915089),
    N = n(172710),
    C = n(92240),
    y = n(257367),
    O = n(160376),
    R = n(939496),
    v = n(282197),
    b = n(584904),
    L = n(351638),
    D = n(531648),
    w = n(753713),
    P = n(990078),
    M = n(835723),
    x = n(55730),
    U = n(353411),
    k = n(879945),
    G = n(993401),
    V = n(652215),
    F = n(996988),
    B = n(375708),
    H = n(514566);
function j(e) {
    let { user: t, activity: n, onAction: r } = e,
        { themeType: s } = (0, R.E)(),
        a = (0, U._B)(n, t),
        l = (0, U.J$)(n, t);
    if (!(0, o.A)(n) || (!(0, x.A)(n, V.jUm.PLAY) && !(0, x.A)(n, V.jUm.SYNC))) return null;
    let u = (e) => {
            e?.stopPropagation(), r?.({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" }), a.onClick();
        },
        c = (e) => {
            e.stopPropagation(), r?.({ action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON" }), l.onClick();
        };
    return s === F.d.MODAL_V2
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(P.m, {
                      text: l.tooltip,
                      children: (0, i.jsx)(G.FD, {
                          text: l.label ?? B.intl.string(B.t.eU3inB),
                          onClick: c,
                          disabled: l.disabled,
                          loading: l.loading,
                      }),
                  }),
                  (0, i.jsx)(P.m, {
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
                      className: H.FS,
                      children: (0, i.jsx)(P.m, {
                          text: a.tooltip,
                          children: (0, i.jsx)(G.FD, {
                              icon: () => (0, i.jsx)(k.A, {}),
                              text: a.label ?? B.intl.string(B.t.rRffNz),
                              onClick: u,
                              disabled: a.disabled,
                              loading: a.loading,
                              fullWidth: !0,
                          }),
                      }),
                  }),
                  (0, i.jsx)(G.q3, {
                      icon: M.J,
                      tooltipText: l.tooltip ?? B.intl.string(B.t.eU3inB),
                      "aria-label": l.label ?? B.intl.string(B.t.eU3inB),
                      disabled: l.disabled,
                      loading: l.loading,
                      onClick: c,
                  }),
              ],
          });
}
var W = n(269587);
function Y(e) {
    let t,
        { user: n, currentUser: s, activity: a, className: l, onClose: u } = e,
        c = (0, S.GV)(),
        d = (0, S.GV)(),
        { themeType: _ } = (0, R.E)(),
        h = (0, T.A)({ activity: a, user: n }),
        f = (0, O.A)(a),
        P = null != f.text && "" !== f.text,
        { largeImage: M } = (0, A.XN)(a, void 0, "user_profile_spotify"),
        { analyticsLocations: x } = (0, g.Ay)(m.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        U = (0, C.A)({ display: "live", user: n, activity: a, entry: h, analyticsLocations: x }),
        k = (0, y.A)({ userId: n.id, onAction: U });
    if (!(0, o.A)(a)) return null;
    function G() {
        return n.id === s.id
            ? null
            : (0, i.jsx)("div", { className: H.o1, children: (0, i.jsx)(j, { user: n, activity: a, onAction: U }) });
    }
    return (0, i.jsx)(g.f5, {
        value: x,
        children: (0, i.jsxs)(b.A, {
            ref: k,
            className: E()(H.Nr, l),
            onAction: U,
            onClose: u,
            "aria-labelledby": P ? `${d} ${c}` : c,
            children: [
                (0, i.jsx)(L.A, {
                    textId: d,
                    ...f,
                    contextMenu: (0, i.jsx)(W.A, { display: "live", user: n, activity: a, entry: h, onClose: u }),
                }),
                (0, i.jsx)("div", {
                    className: H.rf,
                    children: (0, i.jsxs)("div", {
                        className: H.Qs,
                        children: [
                            (0, i.jsx)(I.d, {
                                image: M,
                                size: _ === F.d.MODAL_V2 ? I.w.SIZE_100 : I.w.SIZE_60,
                                className: H.mM,
                                onClick: (e) => {
                                    e.stopPropagation(), U({ action: "OPEN_SPOTIFY_ALBUM" }), (0, N.QX)(a, n.id);
                                },
                            }),
                            (0, i.jsxs)("div", {
                                className: H.zH,
                                children: [
                                    (0, i.jsxs)("div", {
                                        children: [
                                            (0, i.jsx)(D.Q, {
                                                variant: "heading-sm/semibold",
                                                text: a.details,
                                                onClick: () => {
                                                    U({ action: "OPEN_SPOTIFY_TRACK" }), (0, N.Mp)(a);
                                                },
                                                id: c,
                                            }),
                                            0 === (t = a.state?.split("; ") ?? []).length
                                                ? null
                                                : null == a.sync_id
                                                  ? (0, i.jsx)(D.A, { variant: "text-xs/normal", text: t.join(", ") })
                                                  : (0, i.jsx)(D.A, {
                                                        variant: "text-xs/normal",
                                                        text: t.map((e, s) =>
                                                            (0, i.jsxs)(
                                                                r.Fragment,
                                                                {
                                                                    children: [
                                                                        (0, i.jsx)(p.D, {
                                                                            className: E()(H.sd, H.mG),
                                                                            onClick: (e) => {
                                                                                e.stopPropagation(),
                                                                                    U({
                                                                                        action: "OPEN_SPOTIFY_ARTIST",
                                                                                    }),
                                                                                    (0, N.mN)(a, n.id, s);
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
                                    (0, i.jsx)(v.A, { user: n, activity: a, className: H.jp }),
                                    (function () {
                                        let { timestamps: e } = a;
                                        if (null == e) return null;
                                        let { start: t, end: n } = e;
                                        return null == t || null == n ? null : (0, i.jsx)(w.A, { start: t, end: n });
                                    })(),
                                    _ === F.d.MODAL_V2 && G(),
                                ],
                            }),
                            _ === F.d.MODAL && G(),
                        ],
                    }),
                }),
                _ !== F.d.MODAL && _ !== F.d.MODAL_V2 && G(),
            ],
        }),
    });
}
function K(e) {
    let { user: t, currentUser: n, activity: r, className: f, onClose: E } = e,
        { voiceGuild: p, voiceChannel: m } = (0, s.cf)([d.A, _.A, c.A], () => {
            let e = (0, a.A)(r);
            if (!e && r.type !== V.$pd.HANG_STATUS) return {};
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
    return r?.type === V.$pd.CUSTOM_STATUS || r?.type === V.$pd.HANG_STATUS
        ? null
        : (0, o.A)(r)
          ? (0, i.jsx)(Y, { user: t, currentUser: n, activity: r, className: f, onClose: E })
          : (0, i.jsx)(h.A, {
                user: t,
                currentUser: n,
                activity: r,
                application: g,
                voiceGuild: p,
                voiceChannel: m,
                className: f,
                onClose: E,
            });
}
