n.d(t, { Z: () => o }), n(757143), n(47120);
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(660199),
    s = n(279079);
function o(e, t) {
    return 'type' in e
        ? 'timestamp' === e.type
            ? (0, i.jsx)(l, {
                  ...t,
                  timestamp: e.parsed
              })
            : null
        : null;
}
function l(e) {
    var t;
    let { timestamp: n, replace: o } = e,
        l = (e) => {
            let { timestamp: t, format: i } = e,
                r = null != t ? Math.floor(t.getTime() / 1000) : n.timestamp,
                s = null != i ? i : n.format;
            o((0, a.He)(r, s));
        };
    return (0, i.jsxs)('div', {
        className: s.container,
        children: [
            (0, i.jsx)(r.Wrb, {
                value: n.parsed,
                onSelect: (e) => {
                    l({ timestamp: e.toDate() });
                }
            }),
            (0, i.jsx)(r.MGJ, {
                value: n.parsed,
                onChange: (e) => {
                    l({ timestamp: e.toDate() });
                }
            }),
            (0, i.jsx)(r.FXm, {
                options: Object.entries(a.Qh).map((e) => {
                    let [t, i] = e;
                    return {
                        name: i(n.parsed),
                        value: t
                    };
                }),
                value: null !== (t = n.format) && void 0 !== t ? t : a.K_,
                size: r.FXm.Sizes.SMALL,
                onChange: (e) => {
                    let { value: t } = e;
                    l({ format: t });
                }
            })
        ]
    });
}
