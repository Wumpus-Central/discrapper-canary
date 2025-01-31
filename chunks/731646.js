t.d(i, { default: () => s });
var l = t(200651),
    a = t(192379),
    e = t(481060),
    r = t(239091),
    d = t(299206),
    c = t(388032);
function s(n) {
    var i;
    let t = (0, d.Z)({
        id: n.id,
        label: n.label,
        shiftId: n.shiftId
    });
    return (
        a.useEffect(() => {
            null == t && (0, r.Zy)();
        }, [t]),
        (0, l.jsx)(e.v2r, {
            onSelect: n.onSelect,
            navId: 'dev-context',
            'aria-label': null !== (i = n['aria-label']) && void 0 !== i ? i : c.intl.string(c.t.ogxXGh),
            onClose: r.Zy,
            children: t
        })
    );
}
