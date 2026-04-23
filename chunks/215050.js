n.d(t, { A: () => C });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(331322),
    o = n(87221),
    d = n(599319),
    u = n(939249),
    h = n(775602),
    c = n(607470),
    m = n(930125),
    g = n(282108),
    p = n(619517),
    f = n(644447),
    A = n(608214),
    x = n(838541),
    y = n(985018),
    w = n(656633);
function _(e) {
    return `media-view-scroll-thumbnail-${e}`;
}
let E = a.memo(function (e) {
    let { item: t, enabledContentHarmTypeFlags: n = 0 } = e,
        a = (function (e) {
            if ("IMAGE" === e.type) return (0, f.E)({ proxyURL: e.proxyUrl, url: e.url });
            if ("VIDEO" === e.type) {
                if (null != e.poster) return e.poster;
                if (null != e.proxyUrl) return (0, A.VZ)(e.proxyUrl);
            }
            return null;
        })(t);
    return null == a && "VIDEO" === t.type
        ? (0, i.jsx)(c.A, {
              src: `${t.url}#t=1`,
              preload: "metadata",
              muted: !0,
              style: { width: 40, height: 40, objectFit: "cover" },
          })
        : null == a
          ? null
          : (0, g.qo)({ type: m.D.GenericMedia, media: t }, n)
            ? (0, i.jsx)(s.B, {
                  align: "center",
                  justify: "center",
                  className: w.cd,
                  style: { width: 40, height: 40 },
                  children: (0, i.jsx)(o.D, { size: "sm", color: "white" }),
              })
            : (0, i.jsx)(p.Ay, {
                  width: t.width ?? 40,
                  height: t.height ?? 40,
                  maxWidth: 40,
                  maxHeight: 40,
                  useFullWidth: !0,
                  src: a,
                  shouldAnimate: !1,
                  shouldRenderAccessory: !1,
                  srcIsAnimated: t.srcIsAnimated,
                  alt: t.alt,
                  mediaLayoutType: x.dG.MOSAIC,
              });
});
function C(e) {
    let { items: t, currentIndex: n, onGalleryItemClick: r, className: s, enabledContentHarmTypeFlags: o } = e,
        c = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            let e = document.getElementById(_(n));
            null != c.current &&
                null != e &&
                c.current.scrollIntoViewNode({ node: e, animate: !h.A.useReducedMotion, padding: 20 });
        }, [n]),
        (0, i.jsx)("div", {
            className: l()(w.IL, s),
            children: (0, i.jsx)(d.Ch, {
                orientation: "horizontal",
                className: l()(w.nV, s),
                ref: c,
                onClick: (e) => e.stopPropagation(),
                children: t.map((e, a) => {
                    let s = a === n,
                        d = s ? y.t["qv/U5V"] : y.t.zviMAG;
                    return (0, i.jsx)(
                        u.D,
                        {
                            id: _(a),
                            className: l()(w.Qq, { [w.AD]: !s, [w.$1]: 0 === a, [w.HV]: a === t.length - 1 }),
                            "aria-label": y.intl.formatToPlainString(d, { pageNumber: a + 1, totalPages: t.length }),
                            onClick: () => r(a),
                            children: (0, i.jsx)(E, { item: e, enabledContentHarmTypeFlags: o }),
                        },
                        a,
                    );
                }),
            }),
        })
    );
}
