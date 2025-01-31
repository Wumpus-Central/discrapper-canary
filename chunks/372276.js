n.d(t, { Z: () => u }), n(47120);
var i = n(200651);
n(192379);
var r = n(278074),
    a = n(26033),
    s = n(170187),
    o = n(388032),
    l = n(748442);
function u(e) {
    let { entry: t, textClassName: n } = e,
        { message: u, title: c } = (0, r.EQ)(t)
            .when(a.dX, (e) => {
                let { extra: t } = e;
                return {
                    message: o.t['wgtd/f'],
                    title: t.game_name
                };
            })
            .when(a.Mq, (e) => {
                let { extra: t } = e;
                return {
                    message: o.t['wgtd/f'],
                    title: t.activity_name
                };
            })
            .when(a.y0, (e) => {
                let { extra: t } = e;
                return {
                    message: o.t.nCCdMD,
                    title: t.media_title
                };
            })
            .when(a.dU, (e) => {
                var t, n;
                let { extra: i } = e;
                return {
                    message: o.t.PYEeFh,
                    title: null === (n = i.entries[0]) || void 0 === n ? void 0 : null === (t = n.media) || void 0 === t ? void 0 : t.title
                };
            })
            .exhaustive();
    return (0, i.jsx)('div', {
        className: l.container,
        children: (0, i.jsx)(s.Z, {
            className: n,
            children: o.intl.format(u, { title: c })
        })
    });
}
