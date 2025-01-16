r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(757143);
var a = r(47120);
var s = r(200651);
r(192379);
var o = r(481060),
    l = r(660199),
    u = r(279079);
function c(e, n) {
    if (!('type' in e)) return null;
    if ('timestamp' === e.type)
        return (0, s.jsx)(d, {
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
                s = null != n ? Math.floor(n.getTime() / 1000) : r.timestamp,
                o = null != a ? a : r.format;
            i((0, l.He)(s, o));
        };
    return (0, s.jsxs)('div', {
        className: u.container,
        children: [
            (0, s.jsx)(o.DateInput, {
                value: r.parsed,
                onSelect: (e) => {
                    a({ timestamp: e.toDate() });
                }
            }),
            (0, s.jsx)(o.TimeInput, {
                value: r.parsed,
                onChange: (e) => {
                    a({ timestamp: e.toDate() });
                }
            }),
            (0, s.jsx)(o.RadioGroup, {
                options: Object.entries(l.Qh).map((e) => {
                    let [n, i] = e;
                    return {
                        name: i(r.parsed),
                        value: n
                    };
                }),
                value: null !== (n = r.format) && void 0 !== n ? n : l.K_,
                size: o.RadioGroup.Sizes.SMALL,
                onChange: (e) => {
                    let { value: n } = e;
                    a({ format: n });
                }
            })
        ]
    });
}
