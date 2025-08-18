n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(824203),
    o = n(981631),
    a = n(388032),
    s = n(342526);
function c(e) {
    var t;
    let n,
        { message: c, onDeleteMessage: u, children: d } = e,
        p = null == (t = c.interactionMetadata) ? void 0 : t.ephemerality_reason,
        m = () => u(c, !0);
    if (null != p) {
        let e = (0, l.i)(p);
        n = (0, r.jsx)("div", {
            className: s.userAppsBetaContent,
            children: a.intl.format(a.t.wx1tLS, {
                handleDelete: m,
                reason: e,
            }),
        });
    } else
        n =
            c.type === o.uaV.STAGE_RAISE_HAND
                ? a.intl.format(a.t["qDAX+/"], { handleDelete: m })
                : a.intl.format(a.t.uX3ecH, {
                      count: 1,
                      countMessages: 1,
                      handleDelete: m,
                  });
    return (0, r.jsxs)("div", {
        className: s.ephemeralMessage,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(i.tEF, {
                size: "xs",
                color: "currentColor",
                className: s.icon,
            }),
            n,
            d,
        ],
    });
}
