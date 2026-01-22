r.d(t, { A: () => C }), r(896048);
var n = r(627968);
r(64700);
var l = r(503698),
    s = r.n(l),
    i = r(141931),
    a = r(311907),
    c = r(397927),
    o = r(627363),
    d = r(769015),
    f = r(74848),
    u = r(430452),
    h = r(723702),
    p = r(688465),
    x = r(461430),
    j = r(56439),
    m = r(654291),
    g = r(420659),
    b = r(753070),
    v = r(731854),
    y = r(191850),
    S = r(985018),
    A = r(607186);
function _() {
    return (0, n.jsx)("span", {
        className: A.gO,
        children: "\u2022",
    });
}
function O(e) {
    let { source: t } = e,
        { data: r } = (0, o.YY)(null != t && (0, m.l)(t) ? t.id : void 0);
    return null == t
        ? (0, n.jsx)(c.Fzq, {
              className: A.Jd,
              size: "md",
              color: "currentColor",
          })
        : (0, m.l)(t)
          ? (0, n.jsx)(d.A, {
                game: r,
                pid: t.pid,
            })
          : null == t.icon || "" === t.icon
            ? (0, n.jsx)(c.Fzq, {
                  className: A.Jd,
                  size: "md",
                  color: "currentColor",
              })
            : (0, n.jsx)("img", {
                  src: t.icon,
                  alt: "",
                  className: A.pI,
              });
}
function C() {
    var e, t, r, l;
    let [{ preset: o, resolution: d, fps: m, muteStreamAudio: C, selectedSource: w, sourceType: E, audioSourceId: N }] =
            (0, p.tS)(),
        [I, T] = (0, f.tR)(v.oh.AUDIO_INPUT, { location: "StreamSettingsSummary" }),
        R = I.concat(T),
        [P, M] = null != (e = (0, g.A)(o)) ? e : [d, m],
        D = (0, x.K)(o),
        U = (0, j.b)(P),
        L = E === i.fS.CAMERA,
        G = null != w,
        k = null != w ? (null == w || null == (r = w.id) ? void 0 : r.startsWith(i.fS.CAMERA)) : L,
        F = o === b.jQ.PRESET_AUTO,
        Z = G
            ? void 0
            : o === b.jQ.PRESET_VIDEO
              ? S.intl.string(y.default.MuHUFe)
              : o === b.jQ.PRESET_DOCUMENTS
                ? S.intl.string(y.default.y0JuYR)
                : o === b.jQ.PRESET_AUTO
                  ? S.intl.string(y.default.m4jtlc)
                  : void 0,
        H = (0, a.bG)([u.A], () => u.A.getUseSystemScreensharePicker() && (0, h.isLinux)());
    return (0, n.jsxs)("div", {
        className: A.zr,
        children: [
            G && (0, n.jsx)(O, { source: w }),
            (0, n.jsxs)("div", {
                className: A.z,
                children: [
                    (0, n.jsx)(c.Text, {
                        className: A.fB,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: G
                            ? null != (t = null == w ? void 0 : w.name)
                                ? t
                                : S.intl.string(y.default["hJMA+x"])
                            : D,
                    }),
                    (0, n.jsxs)(c.Text, {
                        className: A.kI,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: [
                            G &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsxs)("span", {
                                            className: A.x5,
                                            children: [
                                                (0, n.jsx)(c.Zes, {
                                                    className: A.Kk,
                                                    size: "xxs",
                                                    color: "currentColor",
                                                }),
                                                D,
                                            ],
                                        }),
                                        (0, n.jsx)(_, {}),
                                    ],
                                }),
                            null != Z && (0, n.jsx)("span", { children: Z }),
                            !F &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(_, {}),
                                        (0, n.jsx)("span", { children: U }),
                                        (0, n.jsx)(_, {}),
                                        (0, n.jsx)("span", { children: "".concat(M, "fps") }),
                                    ],
                                }),
                            C &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(_, {}),
                                        (0, n.jsxs)("span", {
                                            className: A.x5,
                                            children: [
                                                (0, n.jsx)(c._RO, {
                                                    className: s()(A.Kk, A.tG),
                                                    size: "xxs",
                                                    color: "currentColor",
                                                }),
                                                S.intl.string(y.default.FzMGWR),
                                            ],
                                        }),
                                    ],
                                }),
                            !C &&
                                !k &&
                                H &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)(_, {}), S.intl.string(y.default["n9/rUq"])],
                                }),
                            k
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)(_, {}),
                                          (0, n.jsx)("span", {
                                              children:
                                                  null ==
                                                  (l = R.find((e) => {
                                                      let { id: t } = e;
                                                      return N === t;
                                                  }))
                                                      ? void 0
                                                      : l.name,
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
