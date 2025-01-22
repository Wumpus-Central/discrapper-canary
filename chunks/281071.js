r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(200651);
r(192379);
var a = r(477660);
function o(e) {
    return (
        (e.heading = a.defaultRules.heading),
        (e.lheading = a.defaultRules.lheading),
        (e.list = a.defaultRules.list),
        (e.paragraph = {
            ...e.paragraph,
            react: function (e, n, r) {
                return (0, i.jsx)('p', { children: n(e.content, r) }, r.key);
            }
        }),
        (e.link = {
            ...e.link,
            react: function (e, n, r) {
                let o = {};
                if (null != e.context) {
                    let n = e.context[e.target];
                    n && n.onClick ? ((o.onClick = n.onClick), (o.onContextMenu = n.onContextMenu)) : (o.onClick = n);
                }
                if (null == o.onClick) {
                    var s;
                    (o.href = null !== (s = (0, a.sanitizeUrl)(e.target)) && void 0 !== s ? s : void 0), (o.target = '_blank');
                }
                return (0, i.jsx)(
                    'a',
                    {
                        title: e.title,
                        ...o,
                        rel: 'noreferrer',
                        children: n(e.content, r)
                    },
                    r.key
                );
            }
        }),
        e
    );
}
