r.r(t), r.d(t, { default: () => j });
var n = r(54381),
    c = r(473749),
    o = r(793030),
    l = r(442837),
    i = r(481060),
    s = r(959457),
    a = r(571826),
    u = r(630759),
    d = r(301107),
    f = r(785792),
    p = r(190054),
    b = r(760373),
    O = r(388032),
    y = r(979519);
let j = function (e) {
    var t, r;
    let { transitionState: j, streamKey: h, channelId: g, onClose: m } = e,
        v = (0, l.e7)([s.Z], () => {
            var e;
            return null == (e = s.Z.getSecureFramesState(h)) ? void 0 : e.epochAuthenticator;
        }),
        x = (0, d.W)({
            fingerprintBase64: v,
            chunkSize: b.y6,
            desiredLength: b.YP,
        }),
        P = c.useCallback(() => {
            (0, a.ih)({ channelId: g });
        }, [g]),
        w = {
            transitionState: j,
            title: O.intl.string(O.t.QogHld),
            subtitle: O.intl.string(O.t.qODBkW),
        },
        T = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: y.verification,
                    children: [
                        (0, n.jsxs)("div", {
                            className: y.header,
                            children: [
                                (0, n.jsx)(i.Heading, {
                                    variant: "text-sm/bold",
                                    color: "text-strong",
                                    children: O.intl.string(O.t.cgBTyO),
                                }),
                                null != x &&
                                    (0, n.jsx)(p.H, {
                                        className: y.copyIcon,
                                        chunks: x,
                                        color: i.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
                                        onCopy: P,
                                    }),
                            ],
                        }),
                        (0, n.jsx)(f.b, {
                            className: y.code,
                            chunks: x,
                            columns: b.WK,
                        }),
                    ],
                }),
                (0, n.jsx)(i.Text, {
                    className: y.footer,
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: O.intl.format(O.t["H3+ktv"], { helpArticle: (0, u.uV)() }),
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
                onClose: m,
                actions: [],
                children: T,
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
