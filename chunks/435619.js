n.d(t, { A: () => m });
var l = n(477900),
    a = n(582128),
    s = n(256905),
    i = n(673724),
    r = n(277977),
    u = n(590380),
    d = n(50617),
    o = n(375708),
    c = n(375068);
function m(e) {
    let { projectId: t, attachments: n } = e,
        s = n.filter(h),
        [i, r] = a.useState(() => new Set()),
        u = a.useCallback((e) => {
            r((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, l.jsx)("div", {
        className: c.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, l.jsx)(f, { name: e.name }, n)
                : h(e)
                  ? (0, l.jsx)(
                        p,
                        {
                            projectId: t,
                            viewableImages: s,
                            viewerIndex: s.indexOf(e),
                            unavailableIds: i,
                            markUnavailable: u,
                        },
                        n,
                    )
                  : (0, l.jsx)(x, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function h(e) {
    return null != e.id && i.Wb.has(e.content_type);
}
function f(e) {
    let { name: t, unavailable: n = !1 } = e,
        a = n ? o.intl.formatToPlainString(d.default.OBr7WW, { name: t }) : t;
    return (0, l.jsx)(u.p, { name: a, compact: !0 });
}
function x(e) {
    let { projectId: t, id: n, name: s } = e,
        [i, c] = a.useState(!1),
        m = a.useCallback(() => {
            (0, r.n6)(t, n)
                .then(async (e) => {
                    if (!e) return void c(!0);
                    let l = document.createElement("a");
                    ((l.href = await (0, r.PK)(t, n, { download: !0 })),
                        (l.target = "_blank"),
                        (l.rel = "noopener noreferrer"),
                        l.click());
                })
                .catch(() => {});
        }, [t, n]);
    return i
        ? (0, l.jsx)(f, { name: s, unavailable: !0 })
        : (0, l.jsx)(u.n, {
              name: s,
              thumbSrc: null,
              ariaLabel: o.intl.formatToPlainString(d.default.gV5YcR, { name: s }),
              onClick: m,
          });
}
function p(e) {
    let { projectId: t, viewableImages: n, viewerIndex: i, unavailableIds: c, markUnavailable: m } = e,
        { id: h, name: x } = n[i],
        [p, g] = a.useState(null),
        k = c.has(h),
        [v, b] = a.useState(0);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, r.PK)(t, h).then(
                (t) => {
                    e || g(t);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, h, v]);
    let j = a.useCallback(() => {
        Promise.all(
            n.map(async (e) => (c.has(e.id) ? null : { type: "IMAGE", url: await (0, r.PK)(t, e.id), alt: e.name })),
        ).then(
            (e) => {
                null != e[i] &&
                    (0, s.R)({
                        items: e.filter((e) => null != e),
                        startingIndex: e.slice(0, i).filter((e) => null != e).length,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
            },
            () => {},
        );
    }, [t, n, i, c]);
    return k
        ? (0, l.jsx)(f, { name: x, unavailable: !0 })
        : (0, l.jsx)(u.n, {
              name: x,
              thumbSrc: p,
              ariaLabel: o.intl.formatToPlainString(d.default.QUFLUq, { name: x }),
              onClick: j,
              onThumbError: () => {
                  (g(null),
                      (0, r.n6)(t, h).then(
                          (e) => {
                              e ? 0 === v && b(1) : m(h);
                          },
                          () => {},
                      ));
              },
          });
}
