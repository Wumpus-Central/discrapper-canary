n.d(t, { A: () => m });
var l = n(477900),
    a = n(582128),
    i = n(256905),
    s = n(673724),
    r = n(18739),
    d = n(590380),
    u = n(759967),
    o = n(375708),
    c = n(375068);
function m(e) {
    let { projectId: t, attachments: n } = e,
        i = n.filter(g),
        [s, r] = a.useState(() => new Set()),
        d = a.useCallback((e) => {
            r((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, l.jsx)("div", {
        className: c.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, l.jsx)(h, { name: e.name }, n)
                : g(e)
                  ? (0, l.jsx)(
                        x,
                        {
                            projectId: t,
                            viewableImages: i,
                            viewerIndex: i.indexOf(e),
                            unavailableIds: s,
                            markUnavailable: d,
                        },
                        n,
                    )
                  : (0, l.jsx)(f, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function g(e) {
    return null != e.id && s.Wb.has(e.content_type);
}
function h(e) {
    let { name: t, unavailable: n = !1 } = e,
        a = n ? o.intl.formatToPlainString(u.default.OBr7WW, { name: t }) : t;
    return (0, l.jsx)(d.p, { name: a, compact: !0 });
}
function f(e) {
    let { projectId: t, id: n, name: i } = e,
        [s, c] = a.useState(!1),
        m = a.useCallback(() => {
            (0, r.n6)(t, n)
                .then(async (e) => {
                    if (!e) return void c(!0);
                    let l = document.createElement("a");
                    (l.href = await (0, r.PK)(t, n, { download: !0 })),
                        (l.target = "_blank"),
                        (l.rel = "noopener noreferrer"),
                        l.click();
                })
                .catch(() => {});
        }, [t, n]);
    return s
        ? (0, l.jsx)(h, { name: i, unavailable: !0 })
        : (0, l.jsx)(d.n, {
              name: i,
              thumbSrc: null,
              ariaLabel: o.intl.formatToPlainString(u.default.gV5YcR, { name: i }),
              onClick: m,
          });
}
function x(e) {
    let { projectId: t, viewableImages: n, viewerIndex: s, unavailableIds: c, markUnavailable: m } = e,
        { id: g, name: f } = n[s],
        [x, p] = a.useState(null),
        k = c.has(g),
        [v, j] = a.useState(0);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, r.PK)(t, g).then(
                (t) => {
                    e || p(t);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, g, v]);
    let b = a.useCallback(() => {
        Promise.all(
            n.map(async (e) => (c.has(e.id) ? null : { type: "IMAGE", url: await (0, r.PK)(t, e.id), alt: e.name })),
        ).then(
            (e) => {
                null != e[s] &&
                    (0, i.R)({
                        items: e.filter((e) => null != e),
                        startingIndex: e.slice(0, s).filter((e) => null != e).length,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
            },
            () => {},
        );
    }, [t, n, s, c]);
    return k
        ? (0, l.jsx)(h, { name: f, unavailable: !0 })
        : (0, l.jsx)(d.n, {
              name: f,
              thumbSrc: x,
              ariaLabel: o.intl.formatToPlainString(u.default.QUFLUq, { name: f }),
              onClick: b,
              onThumbError: () => {
                  p(null),
                      (0, r.n6)(t, g).then(
                          (e) => {
                              e ? 0 === v && j(1) : m(g);
                          },
                          () => {},
                      );
              },
          });
}
