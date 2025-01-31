n.d(t, { Z: () => a });
var i = n(200651);
n(192379);
var r = n(477660);
function a(e) {
    return (
        (e.heading = r.defaultRules.heading),
        (e.lheading = r.defaultRules.lheading),
        (e.list = r.defaultRules.list),
        (e.paragraph = {
            ...e.paragraph,
            react: function (e, t, n) {
                return (0, i.jsx)('p', { children: t(e.content, n) }, n.key);
            }
        }),
        (e.link = {
            ...e.link,
            react: function (e, t, n) {
                let a = {};
                if (null != e.context) {
                    let t = e.context[e.target];
                    t && t.onClick ? ((a.onClick = t.onClick), (a.onContextMenu = t.onContextMenu)) : (a.onClick = t);
                }
                if (null == a.onClick) {
                    var s;
                    (a.href = null !== (s = (0, r.sanitizeUrl)(e.target)) && void 0 !== s ? s : void 0), (a.target = '_blank');
                }
                return (0, i.jsx)(
                    'a',
                    {
                        title: e.title,
                        ...a,
                        rel: 'noreferrer',
                        children: t(e.content, n)
                    },
                    n.key
                );
            }
        }),
        e
    );
}
