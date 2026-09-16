l.d(t, { A: () => m });
var n = l(477900),
    a = l(582128),
    s = l(256905),
    i = l(673724),
    r = l(277977),
    u = l(590380),
    d = l(50617),
    o = l(375708),
    c = l(375068);
function m(e) {
    let { projectId: t, attachments: l } = e,
        s = l.filter(f),
        [i, r] = a.useState(() => new Set()),
        u = a.useCallback((e) => {
            r((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, n.jsx)("div", {
        className: c.KT,
        children: l.map((e, l) =>
            null == e.id
                ? (0, n.jsx)(h, { name: e.name }, l)
                : f(e)
                  ? (0, n.jsx)(
                        p,
                        {
                            projectId: t,
                            viewableImages: s,
                            viewerIndex: s.indexOf(e),
                            unavailableIds: i,
                            markUnavailable: u,
                        },
                        l,
                    )
                  : (0, n.jsx)(x, { projectId: t, id: e.id, name: e.name }, l),
        ),
    });
}
function f(e) {
    return null != e.id && i.Wb.has(e.content_type);
}
function h(e) {
    let { name: t, unavailable: l = !1 } = e,
        a = l ? o.intl.formatToPlainString(d.default.OBr7WW, { name: t }) : t;
    return (0, n.jsx)(u.p, { name: a, compact: !0 });
}
function x(e) {
    let { projectId: t, id: l, name: s } = e,
        [i, c] = a.useState(!1),
        m = a.useCallback(() => {
            (0, r.n6)(t, l)
                .then(async (e) => {
                    if (!e) return void c(!0);
                    let n = document.createElement("a");
                    ((n.href = await (0, r.PK)(t, l, { download: !0 })),
                        (n.target = "_blank"),
                        (n.rel = "noopener noreferrer"),
                        n.click());
                })
                .catch(() => {});
        }, [t, l]);
    return i
        ? (0, n.jsx)(h, { name: s, unavailable: !0 })
        : (0, n.jsx)(u.n, {
              name: s,
              thumbSrc: null,
              ariaLabel: o.intl.formatToPlainString(d.default.gV5YcR, { name: s }),
              onClick: m,
          });
}
function p(e) {
    let { projectId: t, viewableImages: l, viewerIndex: i, unavailableIds: c, markUnavailable: m } = e,
        { id: f, name: x } = l[i],
        [p, g] = a.useState(null),
        k = c.has(f),
        [v, j] = a.useState(0);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, r.PK)(t, f).then(
                (t) => {
                    e || g(t);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, f, v]);
    let b = a.useCallback(() => {
        Promise.all(
            l.map(async (e) => (c.has(e.id) ? null : { type: "IMAGE", url: await (0, r.PK)(t, e.id), alt: e.name })),
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
    }, [t, l, i, c]);
    return k
        ? (0, n.jsx)(h, { name: x, unavailable: !0 })
        : (0, n.jsx)(u.n, {
              name: x,
              thumbSrc: p,
              ariaLabel: o.intl.formatToPlainString(d.default.QUFLUq, { name: x }),
              onClick: b,
              onThumbError: () => {
                  (g(null),
                      (0, r.n6)(t, f).then(
                          (e) => {
                              e ? 0 === v && j(1) : m(f);
                          },
                          () => {},
                      ));
              },
          });
}
