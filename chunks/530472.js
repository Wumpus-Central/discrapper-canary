n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(824203),
    r = n(981631),
    s = n(388032),
    o = n(897953);
function c(e) {
    var t;
    let n,
        { message: c, onDeleteMessage: d, children: u } = e,
        m = null === (t = c.interactionMetadata) || void 0 === t ? void 0 : t.ephemerality_reason,
        _ = () => d(c, !0);
    if (null != m) {
        let e = (0, a.i)(m);
        n = (0, i.jsx)('div', {
            className: o.userAppsBetaContent,
            children: s.intl.format(s.t.wx1tLS, {
                handleDelete: _,
                reason: e
            })
        });
    } else
        n =
            c.type === r.uaV.STAGE_RAISE_HAND
                ? s.intl.format(s.t['qDAX+/'], { handleDelete: _ })
                : s.intl.format(s.t.uX3ecH, {
                      count: 1,
                      countMessages: 1,
                      handleDelete: _
                  });
    return (0, i.jsxs)('div', {
        className: o.ephemeralMessage,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, i.jsx)(l.tEF, {
                size: 'xs',
                color: 'currentColor',
                className: o.icon
            }),
            n,
            u
        ]
    });
}
