n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var l = n(399606),
    a = n(481060),
    r = n(125268),
    s = n(673125),
    o = n(984063),
    c = n(390322),
    d = n(871499),
    u = n(12168),
    h = n(304388),
    p = n(388032);
function m(e) {
    let { channel: t } = e,
        n = (0, l.e7)([s.Z], () => s.Z.getDrawMode()),
        m = (null == n ? void 0 : n.type) === o.W.EMOJI_HOSE,
        f = (e, t) => {
            null != e
                ? (0, r.Bo)({
                      type: o.W.EMOJI_HOSE,
                      emojiName: e.name,
                      emojiId: e.id
                  })
                : m && (0, r.Bo)(null),
                null == t || t();
        };
    return (0, i.jsx)(h.Z, {
        renderPopout: (e) => {
            let { closePopout: n, onFocus: l } = e;
            return (0, i.jsx)(c.Z, {
                children: (0, i.jsx)(u.Z, {
                    title: p.intl.string(p.t.XYLOyM),
                    channel: t,
                    closePopout: n,
                    onFocus: l,
                    onSelectEmoji: (e) => f(e, n)
                })
            });
        },
        children: (e) =>
            (0, i.jsx)(d.Z, {
                ...e,
                iconComponent: a.j9u,
                isActive: m || e.isActive,
                onClick: (t) => {
                    f(null), e.onClick(t);
                }
            })
    });
}
