n.d(t, {
    A: () => m,
    n: () => g,
}),
    n(264879);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(854627),
    u = n(560138),
    d = n(778712),
    f = n(985018),
    p = n(115640);

function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}

function m(e) {
    let { smallerText: t, className: n, textColor: a, isApplicationHome: c, enablePremiumBrandRefresh: _ } = e,
        h = (0, o.bG)([u.A], () => u.A.affinities.slice(0, 3).reverse()),
        m = h.map((e, t) =>
            (0, r.jsx)(
                g,
                {
                    affinity: e,
                    applyMask: t !== h.length - 1,
                    size: _ ? d._3.SIZE_24 : d._3.SIZE_32,
                },
                e.id,
            ),
        ),
        E = (e) => (null != e.globalName ? e.globalName : e.username),
        b = i.useMemo(
            () =>
                3 === h.length
                    ? f.intl.formatToPlainString(f.t.c7ETJH, {
                          username: E(h[2]),
                      })
                    : 2 === h.length
                      ? f.intl.formatToPlainString(f.t["st8Rh/"], {
                            username: E(h[1]),
                            otherUsername: E(h[0]),
                        })
                      : 1 === h.length
                        ? f.intl.formatToPlainString(f.t.dpjXPL, {
                              username: E(h[0]),
                          })
                        : "",
            [h],
        );
    if (0 === h.length) return null;

    function y() {
        return _
            ? (0, r.jsx)(l.Text, {
                  variant: "text-sm/medium",
                  color: a,
                  children: b,
              })
            : t || c
              ? (0, r.jsx)(l.Text, {
                    variant: c ? "text-sm/normal" : "text-lg/medium",
                    color: a,
                    children: b,
                })
              : (0, r.jsx)(l.Heading, {
                    variant: "heading-xl/medium",
                    color: a,
                    children: b,
                });
    }
    return (0, r.jsxs)("div", {
        className: s()(_ ? p.bD : p.kL, n, {
            [p.gr]: !_ && c,
        }),
        children: [
            (0, r.jsx)("div", {
                className: p.zc,
                children: m,
            }),
            (0, r.jsx)("div", {
                className: p.FS,
                children: (0, r.jsx)(y, {}),
            }),
        ],
    });
}

function g(e) {
    let { affinity: t, applyMask: n, size: i } = e,
        { avatarSrc: a, eventHandlers: o } = (0, c.A)({
            userId: null == t ? void 0 : t.id,
            size: i,
            animateOnHover: !0,
        });
    return (0, r.jsx)(
        l.euF,
        h(
            {
                className: s()(p.Kk, {
                    [p.dK]: n,
                }),
                src: a,
                "aria-label": t.username,
                size: i,
            },
            o,
        ),
    );
}
