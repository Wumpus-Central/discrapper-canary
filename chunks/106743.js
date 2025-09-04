n.d(t, { K: () => d }), n(35282), n(781311);
var r = n(951288),
    o = n(647438),
    a = n(754700),
    l = n(481060),
    i = n(272008),
    s = n(184299),
    c = n(720293),
    u = n(430799);
function d(e) {
    var t;
    let { quest: n, onClose: d } = e,
        f = (0, s.km)((e) => e.transcript);
    o.useEffect(() => {
        let e = (0, c.z0)(n, a.X.WATCH_VIDEO, c.n1.VIDEO, c.O.TRANSCRIPT);
        (null == f ||
            f.questId !== n.id ||
            f.fetchStatus === s.iF.NONE ||
            (f.fetchStatus === s.iF.SUCCESS && (null == e ? void 0 : e.url) !== f.url)) &&
            (0, i.lL)(n, a.X.WATCH_VIDEO);
    }, [f, n]);
    let p =
            (null == f ? void 0 : f.questId) === n.id &&
            (null == f ? void 0 : f.fetchStatus) === s.iF.SUCCESS &&
            null != (t = f.text)
                ? t
                : "",
        m = o.useMemo(
            () =>
                p
                    .split("\n")
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0),
            [p],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: u.transcriptHeader,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: "heading-md/semibold",
                        color: "currentColor",
                        children: "Transcript",
                    }),
                    (0, r.jsx)(l.P3F, {
                        onClick: d,
                        className: u.transcriptBackBtn,
                        children: (0, r.jsx)(l.Dio, { color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsx)(l.tEY, {
                children: (0, r.jsx)(l.w0Z, {
                    className: u.transcriptScroller,
                    fade: !0,
                    children: (0, r.jsx)("div", {
                        className: u.transcriptBody,
                        children:
                            (null == f ? void 0 : f.fetchStatus) === s.iF.FETCHING
                                ? (0, r.jsx)("div", {
                                      className: u.transcriptBodySpinner,
                                      children: (0, r.jsx)(l.$jN, { type: l.$jN.Type.WANDERING_CUBES }),
                                  })
                                : (0, r.jsx)(l.X6q, {
                                      variant: "heading-md/normal",
                                      color: "text-muted",
                                      children: m.map((e, t) => (0, r.jsx)("p", { children: e }, t)),
                                  }),
                    }),
                }),
            }),
        ],
    });
}
