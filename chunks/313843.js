n.d(t, { A: () => _, Q: () => h });
var a = n(627968),
    l = n(64700),
    i = n(158954),
    r = n(541830),
    s = n(240248),
    c = n(459746),
    o = n(503364),
    d = n(305080),
    u = n(985018),
    m = n(611731);
function x(e) {
    let { game: t } = e,
        n = t.supplementalData,
        [i] = l.useState(() => Math.random()),
        r = l.useMemo(() => {
            if (null == n) return "";
            let { artwork: e, screenshots: t } = n;
            if (e.length > 0) {
                let t = Math.floor(i * e.length);
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(i * t.length);
                return t[e];
            }
            return "";
        }, [n, i]);
    return (0, s.uJ)(r) ? null : (0, a.jsx)("div", { className: m.y1, style: { backgroundImage: `url("${r}")` } });
}
function f(e) {
    let { game: t, application: n } = e,
        l = t.supplementalData,
        c = l?.name ?? t.name ?? n?.name,
        o = (l?.genres ?? t.genres ?? []).map(r.du).join(", ");
    return (0, a.jsxs)("div", {
        className: m.wt,
        children: [
            null != t.l30Rank && (0, a.jsx)(g, { rank: t.l30Rank }),
            (0, a.jsx)(i.DZT, { variant: "heading-xxl/semibold", children: c }),
            (0, s.uJ)(o) ? null : (0, a.jsx)(i.EYj, { variant: "text-md/normal", color: "text-default", children: o }),
        ],
    });
}
function h(e) {
    let { game: t, application: n, isTwoColumn: l } = e,
        i = t.supplementalData;
    return null == i
        ? null
        : (0, a.jsx)("div", {
              className: l ? m.n8 : m.FS,
              children: (0, a.jsx)(c.A, { game: i, application: n, className: m.xe, size: c.w.LARGE }),
          });
}
let g = (e) => {
        let { rank: t } = e;
        return (0, a.jsxs)("div", {
            className: m.Qc,
            children: [
                (0, a.jsx)(i.OR, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
                (0, a.jsx)(i.EYj, {
                    variant: "text-xs/bold",
                    color: "none",
                    children: u.intl.formatToPlainString(u.t.ehZXlZ, { rank: t }),
                }),
            ],
        });
    },
    _ = function (e) {
        let { game: t, application: n, onClose: l, trackAction: i } = e,
            { isTwoColumn: r } = (0, d.c)();
        return r
            ? (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(x, { game: t }),
                      (0, a.jsx)("div", {
                          className: m.kL,
                          children: (0, a.jsxs)("div", {
                              className: m.cb,
                              children: [
                                  (0, a.jsx)(h, { game: t, application: n, isTwoColumn: !0 }),
                                  (0, a.jsx)(f, { game: t, application: n }),
                              ],
                          }),
                      }),
                      (0, a.jsx)(o.N, { applicationId: n.id, onClose: l, className: m.HK, trackAction: i }),
                  ],
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(x, { game: t }),
                      (0, a.jsx)("div", { className: m.kL, children: (0, a.jsx)(f, { game: t, application: n }) }),
                      (0, a.jsx)(o.N, { applicationId: n.id, onClose: l, className: m.HK, trackAction: i }),
                  ],
              });
    };
