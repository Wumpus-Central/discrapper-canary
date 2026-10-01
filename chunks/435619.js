n.d(t, { A: () => m });
var l = n(477900),
    a = n(582128),
    s = n(256905),
    i = n(673724),
    r = n(277977),
    o = n(590380),
    d = n(759967),
    u = n(375708),
    c = n(375068);
function m(e) {
    let { projectId: t, attachments: n } = e,
        s = n.filter(f),
        [i, r] = a.useState(() => new Set()),
        o = a.useCallback((e) => {
            r((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, l.jsx)("div", {
        className: c.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, l.jsx)(h, { name: e.name }, n)
                : f(e)
                  ? (0, l.jsx)(
                        p,
                        {
                            projectId: t,
                            viewableImages: s,
                            viewerIndex: s.indexOf(e),
                            unavailableIds: i,
                            markUnavailable: o,
                        },
                        n,
                    )
                  : (0, l.jsx)(x, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function f(e) {
    return null != e.id && i.Wb.has(e.content_type);
}
function h(e) {
    let { name: t, unavailable: n = !1 } = e,
        a = n ? u.intl.formatToPlainString(d.default.OBr7WW, { name: t }) : t;
    return (0, l.jsx)(o.p, { name: a, compact: !0 });
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
        ? (0, l.jsx)(h, { name: s, unavailable: !0 })
        : (0, l.jsx)(o.n, {
              name: s,
              thumbSrc: null,
              ariaLabel: u.intl.formatToPlainString(d.default.gV5YcR, { name: s }),
              onClick: m,
          });
}
function p(e) {
    let { projectId: t, viewableImages: n, viewerIndex: i, unavailableIds: c, markUnavailable: m } = e,
        { id: f, name: x } = n[i],
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
        ? (0, l.jsx)(h, { name: x, unavailable: !0 })
        : (0, l.jsx)(o.n, {
              name: x,
              thumbSrc: p,
              ariaLabel: u.intl.formatToPlainString(d.default.QUFLUq, { name: x }),
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
