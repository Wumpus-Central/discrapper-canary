"use strict";
n.d(t, { y: () => c });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(829219),
    o = n(405670),
    l = n(579473),
    u = n(438655);
function c(e) {
    let { quest: t, onClose: n } = e,
        c = (0, o.Kr)((e) => e.transcript);
    i.useEffect(() => {
        let e = (0, l.tW)(t, l.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
        (null == c ||
            c.questId !== t.id ||
            c.fetchStatus === o.Lx.NONE ||
            (c.fetchStatus === o.Lx.SUCCESS && e?.url !== c.url)) &&
            (0, s.qY)(t);
    }, [c, t]);
    let d = c?.questId === t.id && c?.fetchStatus === o.Lx.SUCCESS ? (c.text ?? "") : "",
        _ = i.useMemo(
            () =>
                d
                    .split("\n")
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0),
            [d],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: u.Mm,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        color: "currentColor",
                        children: "Transcript",
                    }),
                    (0, r.jsx)(a.DUT, {
                        onClick: n,
                        className: u.GI,
                        children: (0, r.jsx)(a.PGe, { color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsx)(a.vN3, {
                children: (0, r.jsx)(a.ArX, {
                    className: u.j5,
                    fade: !0,
                    children: (0, r.jsx)("div", {
                        className: u.FN,
                        children:
                            c?.fetchStatus === o.Lx.FETCHING
                                ? (0, r.jsx)("div", {
                                      className: u.Cw,
                                      children: (0, r.jsx)(a.y$y, { type: a.y$y.Type.WANDERING_CUBES }),
                                  })
                                : (0, r.jsx)(a.Heading, {
                                      variant: "heading-md/normal",
                                      color: "text-muted",
                                      children: _.map((e, t) => (0, r.jsx)("p", { children: e }, t)),
                                  }),
                    }),
                }),
            }),
        ],
    });
}
