r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(757143);
var a = r(47120);
var o = r(200651);
r(192379);
var s = r(481060),
    l = r(660199),
    u = r(279079);
function c(e, n) {
    if (!('type' in e)) return null;
    if ('timestamp' === e.type)
        return (0, o.jsx)(d, {
            ...n,
            timestamp: e.parsed
        });
    return null;
}
function d(e) {
    var n;
    let { timestamp: r, replace: i } = e,
        a = (e) => {
            let { timestamp: n, format: a } = e,
                o = null != n ? Math.floor(n.getTime() / 1000) : r.timestamp,
                s = null != a ? a : r.format;
            i((0, l.He)(o, s));
        };
    return (0, o.jsxs)('div', {
        className: u.container,
        children: [
            (0, o.jsx)(s.DateInput, {
                value: r.parsed,
                onSelect: (e) => {
                    a({ timestamp: e.toDate() });
                }
            }),
            (0, o.jsx)(s.TimeInput, {
                value: r.parsed,
                onChange: (e) => {
                    a({ timestamp: e.toDate() });
                }
            }),
            (0, o.jsx)(s.RadioGroup, {
                options: Object.entries(l.Qh).map((e) => {
                    let [n, i] = e;
                    return {
                        name: i(r.parsed),
                        value: n
                    };
                }),
                value: null !== (n = r.format) && void 0 !== n ? n : l.K_,
                size: s.RadioGroup.Sizes.SMALL,
                onChange: (e) => {
                    let { value: n } = e;
                    a({ format: n });
                }
            })
        ]
    });
}
