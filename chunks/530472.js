n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(824203),
    a = n(981631),
    o = n(388032),
    s = n(347436);
function c(e) {
    var t;
    let n,
        { message: c, onDeleteMessage: u, children: d } = e,
        m = null === (t = c.interactionMetadata) || void 0 === t ? void 0 : t.ephemerality_reason,
        h = () => u(c, !0);
    if (null != m) {
        let e = (0, l.i)(m);
        n = (0, i.jsx)('div', {
            className: s.userAppsBetaContent,
            children: o.intl.format(o.t.wx1tLS, {
                handleDelete: h,
                reason: e
            })
        });
    } else
        n =
            c.type === a.uaV.STAGE_RAISE_HAND
                ? o.intl.format(o.t['qDAX+/'], { handleDelete: h })
                : o.intl.format(o.t.uX3ecH, {
                      count: 1,
                      countMessages: 1,
                      handleDelete: h
                  });
    return (0, i.jsxs)('div', {
        className: s.ephemeralMessage,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, i.jsx)(r.EyeIcon, {
                size: 'xs',
                color: 'currentColor',
                className: s.icon
            }),
            n,
            d
        ]
    });
}
