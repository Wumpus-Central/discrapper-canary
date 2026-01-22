n.d(t, {
    M: () => l,
});
var r = n(985018);

function l(e) {
    if (null == e) return null;
    switch (e.type) {
        case "embedded-activities":
        case "event":
            return {
                subtitle: e.name,
            };
        case "go-live":
            return {
                subtitle: r.intl.string(r.t.Pa817q),
            };
    }
    return null;
}
