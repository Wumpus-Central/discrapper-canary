r.r(t),
    r.d(t, {
        default: () => d,
    });
var n = r(627968),
    c = r(64700),
    o = r(158954),
    l = r(311907),
    a = r(397927),
    s = r(162605),
    i = r(798286),
    u = r(814278),
    b = r(998759),
    p = r(75811),
    f = r(930840);
r(603266);
var y = r(985018),
    O = r(42768);
let d = function (e) {
    var t, r;
    let { transitionState: d, streamKey: j, channelId: m, onClose: g } = e,
        h = (0, l.bG)([s.A], () => {
            var e;
            return null == (e = s.A.getSecureFramesState(j)) ? void 0 : e.epochAuthenticator;
        }),
        v = (0, b.z)({
            fingerprintBase64: h,
            chunkSize: 5,
            desiredLength: 30,
        }),
        x = c.useCallback(() => {
            (0, i.y5)({
                channelId: m,
            });
        }, [m]),
        w = {
            transitionState: d,
            title: y.intl.string(y.t.QogHld),
            subtitle: y.intl.string(y.t.qODBkW),
        },
        P = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: O.Ot,
                    children: [
                        (0, n.jsxs)("div", {
                            className: O.wx,
                            children: [
                                (0, n.jsx)(a.Heading, {
                                    variant: "text-sm/bold",
                                    color: "text-strong",
                                    children: y.intl.string(y.t.cgBTyO),
                                }),
                                null != v &&
                                    (0, n.jsx)(f.c, {
                                        className: O.nJ,
                                        chunks: v,
                                        color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                        onCopy: x,
                                    }),
                            ],
                        }),
                        (0, n.jsx)(p.j, {
                            className: O.aY,
                            chunks: v,
                            columns: 3,
                        }),
                    ],
                }),
                (0, n.jsx)(a.Text, {
                    className: O.qr,
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: y.intl.format(y.t["H3+ktv"], {
                        helpArticle: (0, u.aW)(),
                    }),
                }),
            ],
        });
    return (0, n.jsx)(
        o.Modal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, w)),
        (r = r =
            {
                onClose: g,
                actions: [],
                children: P,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
};
