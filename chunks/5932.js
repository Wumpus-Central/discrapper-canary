n.d(t, { M: () => l });
var i = n(985018);
function l(e) {
    if (null == e) return null;
    switch (e.type) {
        case "embedded-activities":
        case "event":
            return { subtitle: e.name };
        case "go-live":
            return { subtitle: i.intl.string(i.t.Pa817q) };
    }
    return null;
}
