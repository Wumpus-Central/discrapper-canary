n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(824203),
    o = n(981631),
    l = n(388032),
    s = n(505164);
function c(e) {
    var t;
    let n,
        { message: c, onDeleteMessage: d, children: u } = e,
        p = null === (t = c.interactionMetadata) || void 0 === t ? void 0 : t.ephemerality_reason,
        m = () => d(c, !0);
    if (null != p) {
        let e = (0, a.i)(p);
        n = (0, r.jsx)('div', {
            className: s.userAppsBetaContent,
            children: l.NW.format(l.t.wx1tLS, {
                handleDelete: m,
                reason: e
            })
        });
    } else
        n =
            c.type === o.uaV.STAGE_RAISE_HAND
                ? l.NW.format(l.t['qDAX+/'], { handleDelete: m })
                : l.NW.format(l.t.uX3ecH, {
                      count: 1,
                      countMessages: 1,
                      handleDelete: m
                  });
    return (0, r.jsxs)('div', {
        className: s.ephemeralMessage,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(i.tEF, {
                size: 'xs',
                color: 'currentColor',
                className: s.icon
            }),
            n,
            u
        ]
    });
}
