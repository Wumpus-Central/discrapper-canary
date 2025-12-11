n.d(t, { Z: () => w }), n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    s = n(268146),
    o = n(442837),
    a = n(481060),
    c = n(728345),
    d = n(925329),
    u = n(72897),
    f = n(131951),
    p = n(358085),
    h = n(672811),
    m = n(891180),
    g = n(556389),
    x = n(615161),
    v = n(396678),
    b = n(37113),
    j = n(65154),
    _ = n(297940),
    S = n(388032),
    y = n(65337);
function C() {
    return (0, r.jsx)("span", {
        className: y.ellipsis,
        children: "\u2022",
    });
}
function O(e) {
    let { source: t } = e,
        { data: n } = (0, c.IX)(null != t && (0, g.T)(t) ? t.id : void 0);
    return null == t
        ? (0, r.jsx)(a.hGI, {
              className: y.screenArrowIcon,
              size: "md",
              color: "currentColor",
          })
        : (0, g.T)(t)
          ? (0, r.jsx)(d.Z, {
                game: n,
                pid: t.pid,
            })
          : null == t.icon || "" === t.icon
            ? (0, r.jsx)(a.hGI, {
                  className: y.screenArrowIcon,
                  size: "md",
                  color: "currentColor",
              })
            : (0, r.jsx)("img", {
                  src: t.icon,
                  alt: "",
                  className: y.sourceIcon,
              });
}
function w() {
    var e, t, n, i;
    let [{ preset: c, resolution: d, fps: g, muteStreamAudio: w, selectedSource: Z, sourceType: P, audioSourceId: I }] =
            (0, x.E_)(),
        [E, T] = (0, u.Ls)(j.h7.AUDIO_INPUT, { location: "StreamSettingsSummary" }),
        N = E.concat(T),
        [A, R] = null != (n = (0, v.Z)(c)) ? n : [d, g],
        M = (0, h.L)(c),
        k = (0, m.M)(A),
        D = P === s.vA.CAMERA,
        L = null != Z,
        B = null != Z ? (null == Z || null == (e = Z.id) ? void 0 : e.startsWith(s.vA.CAMERA)) : D,
        G = c === b.ApplicationStreamPresets.PRESET_AUTO,
        U = L
            ? void 0
            : c === b.ApplicationStreamPresets.PRESET_VIDEO
              ? S.intl.string(_.default.MuHUFe)
              : c === b.ApplicationStreamPresets.PRESET_DOCUMENTS
                ? S.intl.string(_.default.y0JuYR)
                : c === b.ApplicationStreamPresets.PRESET_AUTO
                  ? S.intl.string(_.default.m4jtlc)
                  : void 0,
        F = (0, o.e7)([f.Z], () => f.Z.getUseSystemScreensharePicker() && (0, p.isLinux)());
    return (0, r.jsxs)("div", {
        className: y.root,
        children: [
            L && (0, r.jsx)(O, { source: Z }),
            (0, r.jsxs)("div", {
                className: y.summary,
                children: [
                    (0, r.jsx)(a.Text, {
                        className: y.sourceOrPresetName,
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: L
                            ? null != (i = null == Z ? void 0 : Z.name)
                                ? i
                                : S.intl.string(_.default["hJMA+x"])
                            : M,
                    }),
                    (0, r.jsxs)(a.Text, {
                        className: y.summaryDetail,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: [
                            L &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)("span", {
                                            className: y.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(a.ewm, {
                                                    className: y.icon,
                                                    size: "xxs",
                                                    color: "currentColor",
                                                }),
                                                M,
                                            ],
                                        }),
                                        (0, r.jsx)(C, {}),
                                    ],
                                }),
                            null != U && (0, r.jsx)("span", { children: U }),
                            !G &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(C, {}),
                                        (0, r.jsx)("span", { children: k }),
                                        (0, r.jsx)(C, {}),
                                        (0, r.jsx)("span", { children: "".concat(R, "fps") }),
                                    ],
                                }),
                            w &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(C, {}),
                                        (0, r.jsxs)("span", {
                                            className: y.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(a.OyP, {
                                                    className: l()(y.icon, y.mutedIcon),
                                                    size: "xxs",
                                                    color: "currentColor",
                                                }),
                                                S.intl.string(_.default.FzMGWR),
                                            ],
                                        }),
                                    ],
                                }),
                            !w &&
                                !B &&
                                F &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(C, {}), S.intl.string(_.default["n9/rUq"])],
                                }),
                            B
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(C, {}),
                                          (0, r.jsx)("span", {
                                              children:
                                                  null ==
                                                  (t = N.find((e) => {
                                                      let { id: t } = e;
                                                      return I === t;
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
