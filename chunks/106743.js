n.d(t, { K: () => s }), n(35282), n(781311);
var r = n(951288),
    o = n(647438),
    l = n(481060),
    a = n(184299),
    i = n(430799);
function s(e) {
    var t;
    let { quest: n, onClose: s } = e,
        c = (0, a.km)((e) => e.transcript),
        u =
            (null == c ? void 0 : c.questId) === n.id &&
            (null == c ? void 0 : c.fetchStatus) === a.iF.SUCCESS &&
            null != (t = c.text)
                ? t
                : "",
        d = o.useMemo(
            () =>
                u
                    .split("\n")
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0),
            [u],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: i.transcriptHeader,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: "heading-md/semibold",
                        color: "currentColor",
                        children: "Transcript",
                    }),
                    (0, r.jsx)(l.P3F, {
                        onClick: s,
                        className: i.transcriptBackBtn,
                        children: (0, r.jsx)(l.Dio, { color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsx)(l.tEY, {
                children: (0, r.jsx)(l.w0Z, {
                    className: i.transcriptScroller,
                    fade: !0,
                    children: (0, r.jsx)("div", {
                        className: i.transcriptBody,
                        children:
                            (null == c ? void 0 : c.fetchStatus) === a.iF.FETCHING
                                ? (0, r.jsx)("div", {
                                      className: i.transcriptBodySpinner,
                                      children: (0, r.jsx)(l.$jN, { type: l.$jN.Type.WANDERING_CUBES }),
                                  })
                                : (0, r.jsx)(l.X6q, {
                                      variant: "heading-md/normal",
                                      color: "text-muted",
                                      children: d.map((e, t) => (0, r.jsx)("p", { children: e }, t)),
                                  }),
                    }),
                }),
            }),
        ],
    });
}
