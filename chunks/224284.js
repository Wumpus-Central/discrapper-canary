n.d(t, {
    y: () => u,
}),
    n(747238),
    n(733351);
var r = n(627968),
    l = n(64700),
    o = n(397927),
    i = n(829219),
    s = n(405670),
    a = n(579473),
    c = n(438655);

function u(e) {
    var t;
    let { quest: n, onClose: u } = e,
        d = (0, s.Kr)((e) => e.transcript);
    l.useEffect(() => {
        let e = (0, a.tW)(n, a.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
        (null == d ||
            d.questId !== n.id ||
            d.fetchStatus === s.Lx.NONE ||
            (d.fetchStatus === s.Lx.SUCCESS && (null == e ? void 0 : e.url) !== d.url)) &&
            (0, i.qY)(n);
    }, [d, n]);
    let f =
            (null == d ? void 0 : d.questId) === n.id &&
            (null == d ? void 0 : d.fetchStatus) === s.Lx.SUCCESS &&
            null != (t = d.text)
                ? t
                : "",
        m = l.useMemo(
            () =>
                f
                    .split("\n")
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0),
            [f],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: c.Mm,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "currentColor",
                        children: "Transcript",
                    }),
                    (0, r.jsx)(o.DUT, {
                        onClick: u,
                        className: c.GI,
                        children: (0, r.jsx)(o.PGe, {
                            color: "currentColor",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(o.vN3, {
                children: (0, r.jsx)(o.ArX, {
                    className: c.j5,
                    fade: !0,
                    children: (0, r.jsx)("div", {
                        className: c.FN,
                        children:
                            (null == d ? void 0 : d.fetchStatus) === s.Lx.FETCHING
                                ? (0, r.jsx)("div", {
                                      className: c.Cw,
                                      children: (0, r.jsx)(o.y$y, {
                                          type: o.y$y.Type.WANDERING_CUBES,
                                      }),
                                  })
                                : (0, r.jsx)(o.Heading, {
                                      variant: "heading-md/normal",
                                      color: "text-muted",
                                      children: m.map((e, t) =>
                                          (0, r.jsx)(
                                              "p",
                                              {
                                                  children: e,
                                              },
                                              t,
                                          ),
                                      ),
                                  }),
                    }),
                }),
            }),
        ],
    });
}
