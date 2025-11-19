n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(824203),
    o = n(981631),
    s = n(388032),
    l = n(303681);
function c(e) {
    var t;
    let n,
        { message: c, onDeleteMessage: u, children: d } = e,
        f = null == (t = c.interactionMetadata) ? void 0 : t.ephemerality_reason,
        _ = () => u(c, !0);
    if (null != f) {
        let e = (0, a.i)(f);
        n = (0, r.jsx)("div", {
            className: l.userAppsBetaContent,
            children: s.intl.format(s.t.wx1tLQ, {
                handleDelete: _,
                reason: e,
            }),
        });
    } else
        n =
            c.type === o.uaV.STAGE_RAISE_HAND
                ? s.intl.format(s.t["qDAX++"], { handleDelete: _ })
                : s.intl.format(s.t.uX3ecL, {
                      count: 1,
                      countMessages: 1,
                      handleDelete: _,
                  });
    return (0, r.jsxs)("div", {
        className: l.ephemeralMessage,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(i.tEF, {
                size: "xs",
                color: "currentColor",
                className: l.icon,
            }),
            n,
            d,
        ],
    });
}
