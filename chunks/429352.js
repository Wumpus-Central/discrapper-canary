r.d(a, { default: () => j });
var t = r(951288),
    i = r(647438),
    n = r(120356),
    o = r.n(n),
    c = r(392711),
    l = r.n(c),
    g = r(793030),
    s = r(442837),
    _ = r(481060),
    m = r(224706),
    p = r(812206),
    d = r(835473),
    f = r(669764),
    b = r(810568),
    u = r(774073),
    w = r(426482),
    k = r(644941),
    I = r(388032),
    h = r(83406);
function v(e) {
    for (var a = 1; a < arguments.length; a++) {
        var r = null != arguments[a] ? arguments[a] : {},
            t = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            t.forEach(function (a) {
                var t;
                (t = r[a]),
                    a in e
                        ? Object.defineProperty(e, a, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[a] = t);
            });
    }
    return e;
}
let y = (e) => {
    let { game: a } = e,
        r = (0, s.e7)([p.Z], () => p.Z.getApplication(a.applicationId));
    return (0, t.jsx)(_.ua7, {
        text: a.name,
        children: (e) => {
            var i, n;
            return (0, t.jsx)(
                _.P3F,
                ((i = v({}, e)),
                (n = n =
                    {
                        className: h.gameClickable,
                        onClick: () => {
                            (0, _.ZDy)(() =>
                                Promise.resolve((e) =>
                                    (0, t.jsx)(
                                        k.default,
                                        v(
                                            {
                                                applicationId: a.applicationId,
                                                source: b.m1.GameSheet,
                                            },
                                            e,
                                        ),
                                    ),
                                ),
                            );
                        },
                        children: (0, t.jsx)(w.C, {
                            game: a,
                            application: r,
                            className: h.coverArt,
                            size: w.Z.SMALL,
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(n))
                    : (function (e, a) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var t = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, t);
                          }
                          return r;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                i),
            );
        },
    });
};
function j(e) {
    let { applications: a, onClose: r, transitionState: n } = e;
    (0, d.Z)(a),
        i.useEffect(() => {
            a.length > 1 && m.Z.getDetectableGamesSupplemental(a);
        }, [a]);
    let c = (0, s.e7)([f.Z], () => a.some((e) => f.Z.isFetching(e))),
        _ = (0, s.e7)([f.Z], () => a.some((e) => f.Z.didFetchingFail(e))),
        p = (0, s.Wu)([f.Z], () =>
            a
                .map((e) => f.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, u.z6)(e.applicationId))
                .slice(0, 10),
        );
    return c && !_
        ? (0, t.jsxs)("div", {
              children: [
                  (0, t.jsx)("div", { className: o()(h.loadingHeading, h.sectionHeader) }),
                  (0, t.jsx)("div", {
                      className: o()(h.row, h.gapLg),
                      children: l()
                          .range(0, a.length)
                          .map((e) => (0, t.jsx)("div", { className: h.loadingArtwork }, e)),
                  }),
              ],
          })
        : (!c && 0 === p.length) || _
          ? null
          : (0, t.jsx)(g.Modal, {
                title: I.intl.string(I.t["D+DkEB"]),
                transitionState: n,
                onClose: r,
                actions: [],
                children: (0, t.jsx)("div", {
                    className: h.container,
                    children: p.map((e) => (0, t.jsx)(y, { game: e }, e.applicationId)),
                }),
            });
}
