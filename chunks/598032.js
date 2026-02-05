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
    A = s(191850),
    S = s(985018),
    C = s(607186);
function y() {
    return (0, r.jsx)("span", { className: C.gO, children: "•" });
}
function b(e) {
    let { source: t } = e,
        { data: s } = (0, c.YY)(null != t && (0, _.l)(t) ? t.id : void 0);
    return null == t
        ? (0, r.jsx)(o.Fzq, { className: C.Jd, size: "md", color: "currentColor" })
        : (0, _.l)(t)
          ? (0, r.jsx)(d.A, { game: s, pid: t.pid })
          : null == t.icon || "" === t.icon
            ? (0, r.jsx)(o.Fzq, { className: C.Jd, size: "md", color: "currentColor" })
            : (0, r.jsx)("img", { src: t.icon, alt: "", className: C.pI });
}
function w() {
    let [{ preset: e, resolution: t, fps: s, muteStreamAudio: i, selectedSource: c, sourceType: d, audioSourceId: _ }] =
            (0, x.tS)(),
        [w, I] = (0, u.tR)(v.oh.AUDIO_INPUT, { location: "StreamSettingsSummary" }),
        E = w.concat(I),
        [N, O] = (0, g.A)(e) ?? [t, s],
        T = (0, p.K)(e),
        R = (0, m.b)(N),
        M = d === l.fS.CAMERA,
        U = null != c,
        G = null != c ? c?.id?.startsWith(l.fS.CAMERA) : M,
        L = e === j.jQ.PRESET_AUTO,
        D = U
            ? void 0
            : e === j.jQ.PRESET_VIDEO
              ? S.intl.string(A.default.MuHUFe)
              : e === j.jQ.PRESET_DOCUMENTS
                ? S.intl.string(A.default.y0JuYR)
                : e === j.jQ.PRESET_AUTO
                  ? S.intl.string(A.default.m4jtlc)
                  : void 0,
        P = (0, a.bG)([f.A], () => f.A.getUseSystemScreensharePicker() && (0, h.isLinux)());
    return (0, r.jsxs)("div", {
        className: C.zr,
        children: [
            U && (0, r.jsx)(b, { source: c }),
            (0, r.jsxs)("div", {
                className: C.z,
                children: [
                    (0, r.jsx)(o.Text, {
                        className: C.fB,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: U ? (c?.name ?? S.intl.string(A.default["hJMA+x"])) : T,
                    }),
                    (0, r.jsxs)(o.Text, {
                        className: C.kI,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: [
                            U &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)("span", {
                                            className: C.x5,
                                            children: [
                                                (0, r.jsx)(o.Zes, {
                                                    className: C.Kk,
                                                    size: "xxs",
                                                    color: "currentColor",
                                                }),
                                                T,
                                            ],
                                        }),
                                        (0, r.jsx)(y, {}),
                                    ],
                                }),
                            null != D && (0, r.jsx)("span", { children: D }),
                            !L &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(y, {}),
                                        (0, r.jsx)("span", { children: R }),
                                        (0, r.jsx)(y, {}),
                                        (0, r.jsx)("span", { children: `${O}fps` }),
                                    ],
                                }),
                            i &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(y, {}),
                                        (0, r.jsxs)("span", {
                                            className: C.x5,
                                            children: [
                                                (0, r.jsx)(o._RO, {
                                                    className: n()(C.Kk, C.tG),
                                                    size: "xxs",
                                                    color: "currentColor",
                                                }),
                                                S.intl.string(A.default.FzMGWR),
                                            ],
                                        }),
                                    ],
                                }),
                            !i &&
                                !G &&
                                P &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(y, {}), S.intl.string(A.default["n9/rUq"])],
                                }),
                            G
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(y, {}),
                                          (0, r.jsx)("span", {
                                              children: E.find((e) => {
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
