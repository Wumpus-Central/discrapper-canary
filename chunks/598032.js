s.d(t, { A: () => w });
var r = s(627968);
s(64700);
var i = s(503698),
    n = s.n(i),
    l = s(141931),
    a = s(311907),
    o = s(397927),
    c = s(627363),
    d = s(769015),
    u = s(74848),
    f = s(430452),
    h = s(723702),
    x = s(688465),
    p = s(461430),
    m = s(56439),
    _ = s(654291),
    g = s(420659),
    j = s(753070),
    v = s(731854),
    A = s(332800),
    S = s(985018),
    y = s(3316);
function C() {
    return (0, r.jsx)("span", { className: y.gO, children: "•" });
}
function b(e) {
    let { source: t } = e,
        { data: s } = (0, c.YY)(null != t && (0, _.l)(t) ? t.id : void 0);
    return null == t
        ? (0, r.jsx)(o.Fzq, { className: y.Jd, size: "md", color: "currentColor" })
        : (0, _.l)(t)
          ? (0, r.jsx)(d.A, { game: s, pid: t.pid })
          : null == t.icon || "" === t.icon
            ? (0, r.jsx)(o.Fzq, { className: y.Jd, size: "md", color: "currentColor" })
            : (0, r.jsx)("img", { src: t.icon, alt: "", className: y.pI });
}
function w() {
    let [{ preset: e, resolution: t, fps: s, muteStreamAudio: i, selectedSource: c, sourceType: d, audioSourceId: _ }] =
            (0, x.tS)(),
        w = (0, u.tR)(v.oh.AUDIO_INPUT),
        [I, E] = (0, g.A)(e) ?? [t, s],
        N = (0, p.K)(e),
        O = (0, m.b)(I),
        T = d === l.fS.CAMERA,
        R = null != c,
        M = null != c ? c?.id?.startsWith(l.fS.CAMERA) : T,
        U = e === j.jQ.PRESET_AUTO,
        G = R
            ? void 0
            : e === j.jQ.PRESET_VIDEO
              ? S.intl.string(A.default.MuHUFe)
              : e === j.jQ.PRESET_DOCUMENTS
                ? S.intl.string(A.default.y0JuYR)
                : e === j.jQ.PRESET_AUTO
                  ? S.intl.string(A.default.m4jtlc)
                  : void 0,
        L = (0, a.bG)([f.Ay], () => f.Ay.getUseSystemScreensharePicker() && (0, h.isLinux)());
    return (0, r.jsxs)("div", {
        className: y.zr,
        children: [
            R && (0, r.jsx)(b, { source: c }),
            (0, r.jsxs)("div", {
                className: y.z,
                children: [
                    (0, r.jsx)(o.Text, {
                        className: y.fB,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: R ? (c?.name ?? S.intl.string(A.default["hJMA+x"])) : N,
                    }),
                    (0, r.jsxs)(o.Text, {
                        className: y.kI,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: [
                            R &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)("span", {
                                            className: y.x5,
                                            children: [
                                                (0, r.jsx)(o.Zes, {
                                                    className: y.Kk,
                                                    size: "xxs",
                                                    color: "currentColor",
                                                }),
                                                N,
                                            ],
                                        }),
                                        (0, r.jsx)(C, {}),
                                    ],
                                }),
                            null != G && (0, r.jsx)("span", { children: G }),
                            !U &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(C, {}),
                                        (0, r.jsx)("span", { children: O }),
                                        (0, r.jsx)(C, {}),
                                        (0, r.jsx)("span", { children: `${E}fps` }),
                                    ],
                                }),
                            i &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(C, {}),
                                        (0, r.jsxs)("span", {
                                            className: y.x5,
                                            children: [
                                                (0, r.jsx)(o._RO, {
                                                    className: n()(y.Kk, y.tG),
                                                    size: "xxs",
                                                    color: "currentColor",
                                                }),
                                                S.intl.string(A.default.FzMGWR),
                                            ],
                                        }),
                                    ],
                                }),
                            !i &&
                                !M &&
                                L &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(C, {}), S.intl.string(A.default["n9/rUq"])],
                                }),
                            M
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(C, {}),
                                          (0, r.jsx)("span", {
                                              children: w.find((e) => {
                                                  let { id: t } = e;
                                                  return _ === t;
                                              })?.name,
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
