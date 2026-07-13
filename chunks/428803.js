"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(939249),
    o = n(90644),
    d = n(793574),
    c = n(688810),
    u = n(939341),
    _ = n(623671),
    E = n(365185),
    A = n(915089),
    h = n(172710),
    I = n(92240),
    f = n(257367),
    p = n(160376),
    T = n(939496),
    m = n(282197),
    g = n(584904),
    S = n(351638),
    N = n(531648),
    C = n(753713),
    O = n(990078),
    R = n(835723),
    L = n(55730),
    D = n(353411),
    y = n(879945),
    v = n(993401),
    b = n(652215),
    M = n(996988),
    P = n(375708),
    U = n(514566);
function w(e) {
    let { user: t, activity: n, onAction: r } = e,
        { themeType: a } = (0, T.E)(),
        s = (0, D._B)(n, t),
        l = (0, D.J$)(n, t);
    if (!(0, o.A)(n) || (!(0, L.A)(n, b.jUm.PLAY) && !(0, L.A)(n, b.jUm.SYNC))) return null;
    let d = (e) => {
            e?.stopPropagation(), r?.({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" }), s.onClick();
        },
        c = (e) => {
            e.stopPropagation(), r?.({ action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON" }), l.onClick();
        };
    return a === M.d.MODAL_V2
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(O.m, {
                      text: l.tooltip,
                      children: (0, i.jsx)(v.FD, {
                          text: l.label ?? P.intl.string(P.t.eU3inB),
                          onClick: c,
                          disabled: l.disabled,
                          loading: l.loading,
                      }),
                  }),
                  (0, i.jsx)(O.m, {
                      text: s.tooltip,
                      children: (0, i.jsx)(v.FD, {
                          text: s.label ?? P.intl.string(P.t.rRffNz),
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
                      className: U.FS,
                      children: (0, i.jsx)(O.m, {
                          text: s.tooltip,
                          children: (0, i.jsx)(v.FD, {
                              icon: () => (0, i.jsx)(y.A, {}),
                              text: s.label ?? P.intl.string(P.t.rRffNz),
                              onClick: d,
                              disabled: s.disabled,
                              loading: s.loading,
                              fullWidth: !0,
                          }),
                      }),
                  }),
                  (0, i.jsx)(v.q3, {
                      icon: R.J,
                      tooltipText: l.tooltip ?? P.intl.string(P.t.eU3inB),
                      "aria-label": l.label ?? P.intl.string(P.t.eU3inB),
                      disabled: l.disabled,
                      loading: l.loading,
                      onClick: c,
                  }),
              ],
          });
}
var G = n(269587);
function x(e) {
    let t,
        { user: n, currentUser: a, activity: O, className: R, onClose: L } = e,
        D = (0, A.GV)(),
        y = (0, A.GV)(),
        { themeType: v } = (0, T.E)(),
        b = (0, E.A)({ activity: O, user: n }),
        P = (0, p.A)(O),
        x = null != P.text && "" !== P.text,
        { largeImage: k } = (0, u.XN)(O, void 0, "user_profile_spotify"),
        { analyticsLocations: F } = (0, c.Ay)(d.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        V = (0, I.A)({ display: "live", user: n, activity: O, entry: b, analyticsLocations: F }),
        B = (0, f.A)({ userId: n.id, onAction: V });
    if (!(0, o.A)(O)) return null;
    function H() {
        return n.id === a.id
            ? null
            : (0, i.jsx)("div", { className: U.o1, children: (0, i.jsx)(w, { user: n, activity: O, onAction: V }) });
    }
    return (0, i.jsx)(c.f5, {
        value: F,
        children: (0, i.jsxs)(g.A, {
            ref: B,
            className: s()(U.Nr, R),
            onAction: V,
            onClose: L,
            "aria-labelledby": x ? `${y} ${D}` : D,
            children: [
                (0, i.jsx)(S.A, {
                    textId: y,
                    ...P,
                    contextMenu: (0, i.jsx)(G.A, { display: "live", user: n, activity: O, entry: b, onClose: L }),
                }),
                (0, i.jsx)("div", {
                    className: U.rf,
                    children: (0, i.jsxs)("div", {
                        className: U.Qs,
                        children: [
                            (0, i.jsx)(_.d, {
                                image: k,
                                size: v === M.d.MODAL_V2 ? _.w.SIZE_100 : _.w.SIZE_60,
                                className: U.mM,
                                onClick: (e) => {
                                    e.stopPropagation(), V({ action: "OPEN_SPOTIFY_ALBUM" }), (0, h.QX)(O, n.id);
                                },
                            }),
                            (0, i.jsxs)("div", {
                                className: U.zH,
                                children: [
                                    (0, i.jsxs)("div", {
                                        children: [
                                            (0, i.jsx)(N.Q, {
                                                variant: "heading-sm/semibold",
                                                text: O.details,
                                                onClick: () => {
                                                    V({ action: "OPEN_SPOTIFY_TRACK" }), (0, h.Mp)(O);
                                                },
                                                id: D,
                                            }),
                                            0 === (t = O.state?.split("; ") ?? []).length
                                                ? null
                                                : null == O.sync_id
                                                  ? (0, i.jsx)(N.A, { variant: "text-xs/normal", text: t.join(", ") })
                                                  : (0, i.jsx)(N.A, {
                                                        variant: "text-xs/normal",
                                                        text: t.map((e, a) =>
                                                            (0, i.jsxs)(
                                                                r.Fragment,
                                                                {
                                                                    children: [
                                                                        (0, i.jsx)(l.D, {
                                                                            className: s()(U.sd, U.mG),
                                                                            onClick: (e) => {
                                                                                e.stopPropagation(),
                                                                                    V({
                                                                                        action: "OPEN_SPOTIFY_ARTIST",
                                                                                    }),
                                                                                    (0, h.mN)(O, n.id, a);
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
                                    (0, i.jsx)(m.A, { user: n, activity: O, className: U.jp }),
                                    (function () {
                                        let { timestamps: e } = O;
                                        if (null == e) return null;
                                        let { start: t, end: n } = e;
                                        return null == t || null == n ? null : (0, i.jsx)(C.A, { start: t, end: n });
                                    })(),
                                    v === M.d.MODAL_V2 && H(),
                                ],
                            }),
                            v === M.d.MODAL && H(),
                        ],
                    }),
                }),
                v !== M.d.MODAL && v !== M.d.MODAL_V2 && H(),
            ],
        }),
    });
}
