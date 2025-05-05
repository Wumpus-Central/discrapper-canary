n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(824203),
    a = n(981631),
    o = n(388032),
    s = n(806518);
function c(e) {
    var t;
    let n,
        { message: c, onDeleteMessage: u, children: d } = e,
        p = null == (t = c.interactionMetadata) ? void 0 : t.ephemerality_reason,
        m = () => u(c, !0);
    if (null != p) {
        let e = (0, l.i)(p);
        n = (0, r.jsx)('div', {
            className: s.userAppsBetaContent,
            children: o.intl.format(o.t.wx1tLS, {
                handleDelete: m,
                reason: e
            })
        });
    } else
        n =
            c.type === a.uaV.STAGE_RAISE_HAND
                ? o.intl.format(o.t['qDAX+/'], { handleDelete: m })
                : o.intl.format(o.t.uX3ecH, {
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
            d
        ]
    });
}
