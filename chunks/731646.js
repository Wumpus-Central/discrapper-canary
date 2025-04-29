n.d(e, { default: () => u });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(239091),
    c = n(299206),
    o = n(388032);
function u(t) {
    var e;
    let n = (0, c.Z)({
        id: t.id,
        label: t.label,
        shiftId: t.shiftId
    });
    return (
        i.useEffect(() => {
            null == n && (0, a.Zy)();
        }, [n]),
        (0, r.jsx)(l.v2r, {
            onSelect: t.onSelect,
            navId: 'dev-context',
            'aria-label': null != (e = t['aria-label']) ? e : o.intl.string(o.t.ogxXGh),
            onClose: a.Zy,
            children: n
        })
    );
}
