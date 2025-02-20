n.d(t, { Z: () => c }), n(47120);
var r = n(200651);
n(192379);
var i = n(278074),
    o = n(26033),
    a = n(170187),
    s = n(388032),
    l = n(967616);
function c(e) {
    let { entry: t, textClassName: n } = e,
        { message: c, title: u } = (0, i.EQ)(t)
            .when(o.dX, (e) => {
                let { extra: t } = e;
                return {
                    message: s.t['wgtd/f'],
                    title: t.game_name
                };
            })
            .when(o.Mq, (e) => {
                let { extra: t } = e;
                return {
                    message: s.t['wgtd/f'],
                    title: t.activity_name
                };
            })
            .when(o.y0, (e) => {
                let { extra: t } = e;
                return {
                    message: s.t.nCCdMD,
                    title: t.media_title
                };
            })
            .when(o.dU, (e) => {
                var t, n;
                let { extra: r } = e;
                return {
                    message: s.t.PYEeFh,
                    title: null === (n = r.entries[0]) || void 0 === n ? void 0 : null === (t = n.media) || void 0 === t ? void 0 : t.title
                };
            })
            .exhaustive();
    return (0, r.jsx)('div', {
        className: l.container,
        children: (0, r.jsx)(a.Z, {
            className: n,
            children: s.NW.format(c, { title: u })
        })
    });
}
