r.d(a, { default: () => j });
var i = r(951288),
    t = r(647438),
    n = r(120356),
    o = r.n(n),
    c = r(392711),
    l = r.n(c),
    g = r(793030),
    s = r(442837),
    _ = r(481060),
    m = r(224706),
    d = r(812206),
    p = r(835473),
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
            i = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            i.forEach(function (a) {
                var i;
                (i = r[a]),
                    a in e
                        ? Object.defineProperty(e, a, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[a] = i);
            });
    }
    return e;
}
let y = (e) => {
    let { game: a } = e,
        r = (0, s.e7)([d.Z], () => d.Z.getApplication(a.applicationId));
    return (0, i.jsx)(_.aML, {
        text: a.name,
        children: (e) => {
            var t, n;
            return (0, i.jsx)(
                _.P3F,
                ((t = v({}, e)),
                (n = n =
                    {
                        className: h.gameClickable,
                        onClick: () => {
                            (0, _.ZDy)(() =>
                                Promise.resolve((e) =>
                                    (0, i.jsx)(
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
                        children: (0, i.jsx)(w.C, {
                            game: a,
                            application: r,
                            className: h.coverArt,
                            size: w.Z.SMALL,
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, a) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, i);
                          }
                          return r;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            );
        },
    });
};
function j(e) {
    let { applications: a, onClose: r, transitionState: n } = e;
    (0, p.Z)(a),
        t.useEffect(() => {
            a.length > 1 && m.Z.getDetectableGamesSupplemental(a);
        }, [a]);
    let c = (0, s.e7)([f.Z], () => a.some((e) => f.Z.isFetching(e))),
        _ = (0, s.e7)([f.Z], () => a.some((e) => f.Z.didFetchingFail(e))),
        d = (0, s.Wu)([f.Z], () =>
            a
                .map((e) => f.Z.getGame(e))
                .filter((e) => null != e)
                .filter((e) => (0, u.z6)(e.applicationId))
                .slice(0, 10),
        );
    return c && !_
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", { className: o()(h.loadingHeading, h.sectionHeader) }),
                  (0, i.jsx)("div", {
                      className: o()(h.row, h.gapLg),
                      children: l()
                          .range(0, a.length)
                          .map((e) => (0, i.jsx)("div", { className: h.loadingArtwork }, e)),
                  }),
              ],
          })
        : (!c && 0 === d.length) || _
          ? null
          : (0, i.jsx)(g.Modal, {
                title: I.intl.string(I.t["D+DkEH"]),
                transitionState: n,
                onClose: r,
                actions: [],
                children: (0, i.jsx)("div", {
                    className: h.container,
                    children: d.map((e) => (0, i.jsx)(y, { game: e }, e.applicationId)),
                }),
            });
}
