n.d(t, { A: () => m });
var l = n(477900),
    a = n(582128),
    i = n(256905),
    r = n(673724),
    s = n(277977),
    u = n(590380),
    o = n(50617),
    d = n(375708),
    c = n(375068);
function m(e) {
    let { projectId: t, attachments: n } = e,
        i = n.filter(f),
        [r, s] = a.useState(() => new Set()),
        u = a.useCallback((e) => {
            s((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, l.jsx)("div", {
        className: c.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, l.jsx)(h, { name: e.name }, n)
                : f(e)
                  ? (0, l.jsx)(
                        g,
                        {
                            projectId: t,
                            viewableImages: i,
                            viewerIndex: i.indexOf(e),
                            unavailableIds: r,
                            markUnavailable: u,
                        },
                        n,
                    )
                  : (0, l.jsx)(x, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function f(e) {
    return null != e.id && r.Wb.has(e.content_type);
}
function h(e) {
    let { name: t, unavailable: n = !1 } = e,
        a = n ? d.intl.formatToPlainString(o.default.OBr7WW, { name: t }) : t;
    return (0, l.jsx)(u.p, { name: a, compact: !0 });
}
function x(e) {
    let { projectId: t, id: n, name: i } = e,
        [r, c] = a.useState(!1),
        m = a.useCallback(() => {
            (0, s.n6)(t, n)
                .then(async (e) => {
                    if (!e) return void c(!0);
                    let l = document.createElement("a");
                    ((l.href = await (0, s.PK)(t, n, { download: !0 })),
                        (l.target = "_blank"),
                        (l.rel = "noopener noreferrer"),
                        l.click());
                })
                .catch(() => {});
        }, [t, n]);
    return r
        ? (0, l.jsx)(h, { name: i, unavailable: !0 })
        : (0, l.jsx)(u.n, {
              name: i,
              thumbSrc: null,
              ariaLabel: d.intl.formatToPlainString(o.default.gV5YcR, { name: i }),
              onClick: m,
          });
}
function g(e) {
    let { projectId: t, viewableImages: n, viewerIndex: r, unavailableIds: c, markUnavailable: m } = e,
        { id: f, name: x } = n[r],
        [g, p] = a.useState(null),
        k = c.has(f),
        [v, b] = a.useState(0);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, s.PK)(t, f).then(
                (t) => {
                    e || p(t);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, f, v]);
    let j = a.useCallback(() => {
        Promise.all(
            n.map(async (e) => (c.has(e.id) ? null : { type: "IMAGE", url: await (0, s.PK)(t, e.id), alt: e.name })),
        ).then(
            (e) => {
                null != e[r] &&
                    (0, i.R)({
                        items: e.filter((e) => null != e),
                        startingIndex: e.slice(0, r).filter((e) => null != e).length,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
            },
            () => {},
        );
    }, [t, n, r, c]);
    return k
        ? (0, l.jsx)(h, { name: x, unavailable: !0 })
        : (0, l.jsx)(u.n, {
              name: x,
              thumbSrc: g,
              ariaLabel: d.intl.formatToPlainString(o.default.QUFLUq, { name: x }),
              onClick: j,
              onThumbError: () => {
                  (p(null),
                      (0, s.n6)(t, f).then(
                          (e) => {
                              e ? 0 === v && b(1) : m(f);
                          },
                          () => {},
                      ));
              },
          });
}
