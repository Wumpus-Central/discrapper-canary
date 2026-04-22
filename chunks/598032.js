s.d(t, { A: () => N });
var i = s(627968);
s(64700);
var r = s(503698),
    n = s.n(r),
    l = s(141931),
    a = s(311907),
    o = s(183623),
    c = s(834730),
    d = s(625903),
    u = s(358618),
    f = s(627363),
    h = s(769015),
    x = s(74848),
    p = s(430452),
    _ = s(723702),
    m = s(688465),
    g = s(461430),
    j = s(56439),
    v = s(654291),
    A = s(420659),
    C = s(753070),
    S = s(731854),
    y = s(710787),
    b = s(985018),
    w = s(860876);
function E() {
    return (0, i.jsx)("span", { className: w.gO, children: "•" });
}
function I(e) {
    let { source: t } = e,
        { data: s } = (0, f.YY)(null != t && (0, v.l)(t) ? t.id : void 0);
    return null == t
        ? (0, i.jsx)(o.F, { className: w.Jd, size: "md", color: "currentColor" })
        : (0, v.l)(t)
          ? (0, i.jsx)(h.A, { game: s, pid: t.pid })
          : null == t.icon || "" === t.icon
            ? (0, i.jsx)(o.F, { className: w.Jd, size: "md", color: "currentColor" })
            : (0, i.jsx)("img", { src: t.icon, alt: "", className: w.pI });
}
function N() {
    let [{ preset: e, resolution: t, fps: s, muteStreamAudio: r, selectedSource: o, sourceType: f, audioSourceId: h }] =
            (0, m.tS)(),
        v = (0, x.tR)(S.oh.AUDIO_INPUT),
        [N, O] = (0, A.A)(e) ?? [t, s],
        R = (0, g.K)(e),
        T = (0, j.b)(N),
        M = f === l.fS.CAMERA,
        D = null != o,
        G = null != o ? o?.id?.startsWith(l.fS.CAMERA) : M,
        U = e === C.jQ.PRESET_AUTO,
        L = D
            ? void 0
            : e === C.jQ.PRESET_VIDEO
              ? b.intl.string(y.default.MuHUFe)
              : e === C.jQ.PRESET_DOCUMENTS
                ? b.intl.string(y.default.y0JuYR)
                : e === C.jQ.PRESET_AUTO
                  ? b.intl.string(y.default.m4jtlc)
                  : void 0,
        P = (0, a.bG)([p.Ay], () => p.Ay.getUseSystemScreensharePicker() && (0, _.isLinux)());
    return (0, i.jsxs)("div", {
        className: w.zr,
        children: [
            D && (0, i.jsx)(I, { source: o }),
            (0, i.jsxs)("div", {
                className: w.z,
                children: [
                    (0, i.jsx)(c.E, {
                        className: w.fB,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: D ? (o?.name ?? b.intl.string(y.default["hJMA+x"])) : R,
                    }),
                    (0, i.jsxs)(c.E, {
                        className: w.kI,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: [
                            D &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsxs)("span", {
                                            className: w.x5,
                                            children: [
                                                (0, i.jsx)(d.Z, {
                                                    className: w.Kk,
                                                    size: "xxs",
                                                    color: "currentColor",
                                                }),
                                                R,
                                            ],
                                        }),
                                        (0, i.jsx)(E, {}),
                                    ],
                                }),
                            null != L && (0, i.jsx)("span", { children: L }),
                            !U &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(E, {}),
                                        (0, i.jsx)("span", { children: T }),
                                        (0, i.jsx)(E, {}),
                                        (0, i.jsx)("span", { children: `${O}fps` }),
                                    ],
                                }),
                            r &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(E, {}),
                                        (0, i.jsxs)("span", {
                                            className: w.x5,
                                            children: [
                                                (0, i.jsx)(u._, {
                                                    className: n()(w.Kk, w.tG),
                                                    size: "xxs",
                                                    color: "currentColor",
                                                }),
                                                b.intl.string(y.default.FzMGWR),
                                            ],
                                        }),
                                    ],
                                }),
                            !r &&
                                !G &&
                                P &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(E, {}), b.intl.string(y.default["n9/rUq"])],
                                }),
                            G
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(E, {}),
                                          (0, i.jsx)("span", {
                                              children: v.find((e) => {
                                                  let { id: t } = e;
                                                  return h === t;
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
