n.d(t, { Z: () => S }), n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    s = n.n(i),
    l = n(268146),
    o = n(442837),
    c = n(481060),
    a = n(728345),
    d = n(925329),
    u = n(72897),
    f = n(131951),
    h = n(358085),
    p = n(443762),
    x = n(672811),
    m = n(891180),
    g = n(556389),
    v = n(226372),
    j = n(37113),
    _ = n(65154),
    b = n(715689),
    y = n(388032),
    w = n(879293);
function O() {
    return (0, r.jsx)("span", {
        className: w.ellipsis,
        children: "\u2022",
    });
}
function C(e) {
    let { source: t } = e,
        { data: n } = (0, a.IX)(null != t && (0, g.T)(t) ? t.id : void 0);
    return null == t
        ? (0, r.jsx)(c.hGI, {
              className: w.screenArrowIcon,
              size: "md",
              color: "currentColor",
          })
        : (0, g.T)(t)
          ? (0, r.jsx)(d.Z, {
                game: n,
                pid: t.pid,
            })
          : null == t.icon || "" === t.icon
            ? (0, r.jsx)(c.hGI, {
                  className: w.screenArrowIcon,
                  size: "md",
                  color: "currentColor",
              })
            : (0, r.jsx)("img", {
                  src: t.icon,
                  alt: "",
                  className: w.sourceIcon,
              });
}
function S() {
    var e, t, n, i;
    let [{ preset: a, resolution: d, fps: g, muteStreamAudio: S, selectedSource: I, sourceType: Z, audioSourceId: E }] =
            (0, p.E_)(),
        [P, N] = (0, u.Ls)(_.h7.AUDIO_INPUT, { location: "StreamSettingsSummary" }),
        T = P.concat(N),
        [R, M] = null != (n = (0, v.Z)(a)) ? n : [d, g],
        A = (0, x.L)(a),
        L = (0, m.M)(R),
        U = Z === l.vA.CAMERA,
        D = null != I,
        G = null != I ? (null == I || null == (e = I.id) ? void 0 : e.startsWith(l.vA.CAMERA)) : U,
        H = a === j.tI.PRESET_AUTO,
        B = D
            ? void 0
            : a === j.tI.PRESET_VIDEO
              ? y.intl.string(b.default.MuHUFe)
              : a === j.tI.PRESET_DOCUMENTS
                ? y.intl.string(b.default.y0JuYR)
                : a === j.tI.PRESET_AUTO
                  ? y.intl.string(b.default.m4jtlc)
                  : void 0,
        k = (0, o.e7)([f.Z], () => f.Z.getUseSystemScreensharePicker() && (0, h.isLinux)());
    return (0, r.jsxs)("div", {
        className: w.root,
        children: [
            D && (0, r.jsx)(C, { source: I }),
            (0, r.jsxs)("div", {
                className: w.summary,
                children: [
                    (0, r.jsx)(c.Text, {
                        className: w.sourceOrPresetName,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: D
                            ? null != (i = null == I ? void 0 : I.name)
                                ? i
                                : y.intl.string(b.default["hJMA+x"])
                            : A,
                    }),
                    (0, r.jsxs)(c.Text, {
                        className: w.summaryDetail,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: [
                            D &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)("span", {
                                            className: w.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(c.ewm, {
                                                    className: w.icon,
                                                    size: "xxs",
                                                    color: "currentColor",
                                                }),
                                                A,
                                            ],
                                        }),
                                        (0, r.jsx)(O, {}),
                                    ],
                                }),
                            null != B && (0, r.jsx)("span", { children: B }),
                            !H &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(O, {}),
                                        (0, r.jsx)("span", { children: L }),
                                        (0, r.jsx)(O, {}),
                                        (0, r.jsx)("span", { children: "".concat(M, "fps") }),
                                    ],
                                }),
                            S &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(O, {}),
                                        (0, r.jsxs)("span", {
                                            className: w.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(c.OyP, {
                                                    className: s()(w.icon, w.mutedIcon),
                                                    size: "xxs",
                                                    color: "currentColor",
                                                }),
                                                y.intl.string(b.default.FzMGWR),
                                            ],
                                        }),
                                    ],
                                }),
                            !S &&
                                !G &&
                                k &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(O, {}), y.intl.string(b.default["n9/rUq"])],
                                }),
                            G
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(O, {}),
                                          (0, r.jsx)("span", {
                                              children:
                                                  null ==
                                                  (t = T.find((e) => {
                                                      let { id: t } = e;
                                                      return E === t;
                                                  }))
                                                      ? void 0
                                                      : t.name,
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
        ],
    });
}
