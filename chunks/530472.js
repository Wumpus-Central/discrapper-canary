n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(824203),
    a = n(981631),
    s = n(388032),
    l = n(342526);
function c(e) {
    var t;
    let n,
        { message: c, onDeleteMessage: u, children: d } = e,
        f = null == (t = c.interactionMetadata) ? void 0 : t.ephemerality_reason,
        _ = () => u(c, !0);
    if (null != f) {
        let e = (0, o.i)(f);
        n = (0, r.jsx)("div", {
            className: l.userAppsBetaContent,
            children: s.intl.format(s.t.wx1tLS, {
                handleDelete: _,
                reason: e,
            }),
        });
    } else
        n =
            c.type === a.uaV.STAGE_RAISE_HAND
                ? s.intl.format(s.t["qDAX+/"], { handleDelete: _ })
                : s.intl.format(s.t.uX3ecH, {
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
