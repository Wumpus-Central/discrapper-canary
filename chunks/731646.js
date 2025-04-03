n.d(t, { default: () => u });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(239091),
    c = n(299206),
    o = n(388032);
function u(e) {
    var t;
    let n = (0, c.Z)({
        id: e.id,
        label: e.label,
        shiftId: e.shiftId
    });
    return (
        i.useEffect(() => {
            null == n && (0, a.Zy)();
        }, [n]),
        (0, r.jsx)(l.v2r, {
            onSelect: e.onSelect,
            navId: 'dev-context',
            'aria-label': null != (t = e['aria-label']) ? t : o.NW.string(o.t.ogxXGh),
            onClose: a.Zy,
            children: n
        })
    );
}
