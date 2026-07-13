l.d(i, { A: () => M });
var e = l(627968),
    n = l(64700),
    s = l(503698),
    a = l.n(s),
    d = l(939249),
    o = l(90644),
    r = l(793574),
    c = l(688810),
    h = l(939341),
    x = l(623671),
    u = l(365185),
    g = l(915089),
    A = l(172710),
    p = l(92240),
    m = l(257367),
    _ = l(160376),
    N = l(939496),
    f = l(282197),
    j = l(584904),
    v = l(351638),
    C = l(531648),
    E = l(753713),
    O = l(990078),
    P = l(835723),
    b = l(55730),
    w = l(353411),
    S = l(879945),
    T = l(993401),
    L = l(652215),
    D = l(996988),
    I = l(375708),
    V = l(514566);
function y(t) {
    let { user: i, activity: l, onAction: n } = t,
        { themeType: s } = (0, N.E)(),
        a = (0, w._B)(l, i),
        d = (0, w.J$)(l, i);
    if (!(0, o.A)(l) || (!(0, b.A)(l, L.jUm.PLAY) && !(0, b.A)(l, L.jUm.SYNC))) return null;
    let r = (t) => {
            t?.stopPropagation(), n?.({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" }), a.onClick();
        },
        c = (t) => {
            t.stopPropagation(), n?.({ action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON" }), d.onClick();
        };
    return s === D.d.MODAL_V2
        ? (0, e.jsxs)(e.Fragment, {
              children: [
                  (0, e.jsx)(O.m, {
                      text: d.tooltip,
                      children: (0, e.jsx)(T.FD, {
                          text: d.label ?? I.intl.string(I.t.eU3inB),
                          onClick: c,
                          disabled: d.disabled,
                          loading: d.loading,
                      }),
                  }),
                  (0, e.jsx)(O.m, {
                      text: a.tooltip,
                      children: (0, e.jsx)(T.FD, {
                          text: a.label ?? I.intl.string(I.t.rRffNz),
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
                      className: V.FS,
                      children: (0, e.jsx)(O.m, {
                          text: a.tooltip,
                          children: (0, e.jsx)(T.FD, {
                              icon: () => (0, e.jsx)(S.A, {}),
                              text: a.label ?? I.intl.string(I.t.rRffNz),
                              onClick: r,
                              disabled: a.disabled,
                              loading: a.loading,
                              fullWidth: !0,
                          }),
                      }),
                  }),
                  (0, e.jsx)(T.q3, {
                      icon: P.J,
                      tooltipText: d.tooltip ?? I.intl.string(I.t.eU3inB),
                      "aria-label": d.label ?? I.intl.string(I.t.eU3inB),
                      disabled: d.disabled,
                      loading: d.loading,
                      onClick: c,
                  }),
              ],
          });
}
var k = l(269587);
function M(t) {
    let i,
        { user: l, currentUser: s, activity: O, className: P, onClose: b } = t,
        w = (0, g.GV)(),
        S = (0, g.GV)(),
        { themeType: T } = (0, N.E)(),
        L = (0, u.A)({ activity: O, user: l }),
        I = (0, _.A)(O),
        M = null != I.text && "" !== I.text,
        { largeImage: U } = (0, h.XN)(O, void 0, "user_profile_spotify"),
        { analyticsLocations: F } = (0, c.Ay)(r.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        G = (0, p.A)({ display: "live", user: l, activity: O, entry: L, analyticsLocations: F }),
        R = (0, m.A)({ userId: l.id, onAction: G });
    if (!(0, o.A)(O)) return null;
    function B() {
        return l.id === s.id
            ? null
            : (0, e.jsx)("div", { className: V.o1, children: (0, e.jsx)(y, { user: l, activity: O, onAction: G }) });
    }
    return (0, e.jsx)(c.f5, {
        value: F,
        children: (0, e.jsxs)(j.A, {
            ref: R,
            className: a()(V.Nr, P),
            onAction: G,
            onClose: b,
            "aria-labelledby": M ? `${S} ${w}` : w,
            children: [
                (0, e.jsx)(v.A, {
                    textId: S,
                    ...I,
                    contextMenu: (0, e.jsx)(k.A, { display: "live", user: l, activity: O, entry: L, onClose: b }),
                }),
                (0, e.jsx)("div", {
                    className: V.rf,
                    children: (0, e.jsxs)("div", {
                        className: V.Qs,
                        children: [
                            (0, e.jsx)(x.d, {
                                image: U,
                                size: T === D.d.MODAL_V2 ? x.w.SIZE_100 : x.w.SIZE_60,
                                className: V.mM,
                                onClick: (t) => {
                                    t.stopPropagation(), G({ action: "OPEN_SPOTIFY_ALBUM" }), (0, A.QX)(O, l.id);
                                },
                            }),
                            (0, e.jsxs)("div", {
                                className: V.zH,
                                children: [
                                    (0, e.jsxs)("div", {
                                        children: [
                                            (0, e.jsx)(C.Q, {
                                                variant: "heading-sm/semibold",
                                                text: O.details,
                                                onClick: () => {
                                                    G({ action: "OPEN_SPOTIFY_TRACK" }), (0, A.Mp)(O);
                                                },
                                                id: w,
                                            }),
                                            0 === (i = O.state?.split("; ") ?? []).length
                                                ? null
                                                : null == O.sync_id
                                                  ? (0, e.jsx)(C.A, { variant: "text-xs/normal", text: i.join(", ") })
                                                  : (0, e.jsx)(C.A, {
                                                        variant: "text-xs/normal",
                                                        text: i.map((t, s) =>
                                                            (0, e.jsxs)(
                                                                n.Fragment,
                                                                {
                                                                    children: [
                                                                        (0, e.jsx)(d.D, {
                                                                            className: a()(V.sd, V.mG),
                                                                            onClick: (t) => {
                                                                                t.stopPropagation(),
                                                                                    G({
                                                                                        action: "OPEN_SPOTIFY_ARTIST",
                                                                                    }),
                                                                                    (0, A.mN)(O, l.id, s);
                                                                            },
                                                                            children: t,
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
                                    (0, e.jsx)(f.A, { user: l, activity: O, className: V.jp }),
                                    (function () {
                                        let { timestamps: t } = O;
                                        if (null == t) return null;
                                        let { start: i, end: l } = t;
                                        return null == i || null == l ? null : (0, e.jsx)(E.A, { start: i, end: l });
                                    })(),
                                    T === D.d.MODAL_V2 && B(),
                                ],
                            }),
                            T === D.d.MODAL && B(),
                        ],
                    }),
                }),
                T !== D.d.MODAL && T !== D.d.MODAL_V2 && B(),
            ],
        }),
    });
}
