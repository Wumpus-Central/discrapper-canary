n.d(t, {
    c: function () {
        return d;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(999382),
    o = n(654351),
    c = n(845377);
function d(e) {
    let { fetchChecklist: t, settingsView: n } = e,
        d = (0, l.e7)([s.Z], () => s.Z.getProps().guild);
    if (
        (r.useEffect(() => {
            if (null != d) t(d.id);
        }, [t, d]),
        null == d)
    )
        return null;
    switch (n) {
        case o.d5.DISQUALIFIED:
        case o.d5.SETTINGS:
            return null;
        case o.d5.INTRO:
            return (0, i.jsx)(c.Z, {
                guild: d,
                guildId: d.id
            });
        default:
            return (0, i.jsx)(a.Spinner, {});
    }
}
