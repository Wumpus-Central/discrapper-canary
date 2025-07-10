(r.r(t), r.d(t, { default: () => x }));
var n = r(255367),
    o = r(73800),
    c = r(442837),
    i = r(82659),
    l = r(481060),
    s = r(724723),
    a = r(959457),
    u = r(571826),
    d = r(630759),
    f = r(301107),
    p = r(785792),
    b = r(190054),
    h = r(245581),
    y = r(760373),
    j = r(388032),
    m = r(268999);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let x = function (e) {
    let { transitionState: t, streamKey: r, channelId: x, onClose: g } = e,
        _ = s.Z.useExperiment({ location: 'SecureFramesStreamVerificationModal' }, { autoTrackExposure: !0 }).enabled,
        P = (0, c.e7)([a.Z], () => {
            var e;
            return null == (e = a.Z.getSecureFramesState(r)) ? void 0 : e.epochAuthenticator;
        }),
        w = (0, f.W)({
            fingerprintBase64: P,
            chunkSize: y.y6,
            desiredLength: y.YP
        }),
        k = o.useCallback(() => {
            (0, u.ih)({ channelId: x });
        }, [x]),
        S = {
            transitionState: t,
            title: j.intl.string(j.t.QogHlZ),
            subtitle: j.intl.string(j.t.qODBkZ)
        },
        N = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)('div', {
                    className: m.verification,
                    children: [
                        (0, n.jsxs)('div', {
                            className: m.header,
                            children: [
                                (0, n.jsx)(l.X6q, {
                                    variant: 'text-sm/bold',
                                    color: 'header-primary',
                                    children: j.intl.string(j.t.cgBTyM)
                                }),
                                null != w &&
                                    (0, n.jsx)(b.H, {
                                        className: m.copyIcon,
                                        chunks: w,
                                        color: l.TVs.colors.INTERACTIVE_NORMAL,
                                        onCopy: k
                                    })
                            ]
                        }),
                        (0, n.jsx)(p.b, {
                            className: m.code,
                            chunks: w,
                            columns: y.WK
                        })
                    ]
                }),
                (0, n.jsx)(l.Text, {
                    className: m.footer,
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    children: j.intl.format(j.t['H3+ktr'], { helpArticle: (0, d.uV)() })
                })
            ]
        });
    return _
        ? (0, n.jsx)(
              i.u,
              v(O({}, S), {
                  onClose: g,
                  actions: [],
                  children: N
              })
          )
        : (0, n.jsx)(h.Z, v(O({}, S), { children: N }));
};
