r.d(t, {
    i: () => s,
});
var a = r(333748),
    n = r(652215);

function s(e) {
    let t = null;
    return (
        e === a.i.PLAYSTATION_APPLICATION_ID
            ? (t = n.fg2.PLAYSTATION)
            : e === a.i.PLAYSTATION_STAGING_APPLICATION_ID && (t = n.fg2.PLAYSTATION_STAGING),
        t
    );
}
