n.d(t, { K: () => d }), n(35282), n(781311);
var r = n(951288),
    l = n(647438),
    o = n(754700),
    i = n(481060),
    a = n(272008),
    s = n(184299),
    c = n(720293),
    u = n(430799);
function d(e) {
    var t;
    let { quest: n, onClose: d } = e,
        m = (0, s.km)((e) => e.transcript);
    l.useEffect(() => {
        let e = (0, c.z0)(n, o.X.WATCH_VIDEO, c.n1.VIDEO, c.O.TRANSCRIPT);
        (null == m ||
            m.questId !== n.id ||
            m.fetchStatus === s.iF.NONE ||
            (m.fetchStatus === s.iF.SUCCESS && (null == e ? void 0 : e.url) !== m.url)) &&
            (0, a.lL)(n, o.X.WATCH_VIDEO);
    }, [m, n]);
    let p =
            (null == m ? void 0 : m.questId) === n.id &&
            (null == m ? void 0 : m.fetchStatus) === s.iF.SUCCESS &&
            null != (t = m.text)
                ? t
                : "",
        f = l.useMemo(
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
                    (0, r.jsx)(i.Heading, {
                        variant: "heading-md/semibold",
                        color: "currentColor",
                        children: "Transcript",
                    }),
                    (0, r.jsx)(i.P3F, {
                        onClick: d,
                        className: u.transcriptBackBtn,
                        children: (0, r.jsx)(i.Dio, { color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsx)(i.tEY, {
                children: (0, r.jsx)(i.w0Z, {
                    className: u.transcriptScroller,
                    fade: !0,
                    children: (0, r.jsx)("div", {
                        className: u.transcriptBody,
                        children:
                            (null == m ? void 0 : m.fetchStatus) === s.iF.FETCHING
                                ? (0, r.jsx)("div", {
                                      className: u.transcriptBodySpinner,
                                      children: (0, r.jsx)(i.$jN, { type: i.$jN.Type.WANDERING_CUBES }),
                                  })
                                : (0, r.jsx)(i.Heading, {
                                      variant: "heading-md/normal",
                                      color: "text-muted",
                                      children: f.map((e, t) => (0, r.jsx)("p", { children: e }, t)),
                                  }),
                    }),
                }),
            }),
        ],
    });
}
