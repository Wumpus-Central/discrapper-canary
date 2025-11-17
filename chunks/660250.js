r.r(t), r.d(t, { default: () => j });
var n = r(54381),
    o = r(473749),
    c = r(793030),
    i = r(442837),
    l = r(481060),
    s = r(959457),
    a = r(571826),
    u = r(630759),
    d = r(301107),
    f = r(785792),
    p = r(190054),
    b = r(760373),
    O = r(388032),
    y = r(547990);
let j = function (e) {
    var t, r;
    let { transitionState: j, streamKey: h, channelId: m, onClose: g } = e,
        v = (0, i.e7)([s.Z], () => {
            var e;
            return null == (e = s.Z.getSecureFramesState(h)) ? void 0 : e.epochAuthenticator;
        }),
        x = (0, d.W)({
            fingerprintBase64: v,
            chunkSize: b.y6,
            desiredLength: b.YP,
        }),
        P = o.useCallback(() => {
            (0, a.ih)({ channelId: m });
        }, [m]),
        _ = {
            transitionState: j,
            title: O.intl.string(O.t.QogHld),
            subtitle: O.intl.string(O.t.qODBkW),
        },
        w = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: y.verification,
                    children: [
                        (0, n.jsxs)("div", {
                            className: y.header,
                            children: [
                                (0, n.jsx)(l.Heading, {
                                    variant: "text-sm/bold",
                                    color: "header-primary",
                                    children: O.intl.string(O.t.cgBTyO),
                                }),
                                null != x &&
                                    (0, n.jsx)(p.H, {
                                        className: y.copyIcon,
                                        chunks: x,
                                        color: l.TVs.colors.INTERACTIVE_NORMAL,
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
                (0, n.jsx)(l.Text, {
                    className: y.footer,
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: O.intl.format(O.t["H3+ktv"], { helpArticle: (0, u.uV)() }),
                }),
            ],
        });
    return (0, n.jsx)(
        c.Modal,
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
        })({}, _)),
        (r = r =
            {
                onClose: g,
                actions: [],
                children: w,
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
