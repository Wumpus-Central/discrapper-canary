n.d(t, {
    A: () => i,
});
var r = n(985018);

function i(e) {
    return e.windows.length > 0
        ? e.windows.map((e) => e.title).join(", ")
        : e.applications.length > 0
          ? e.applications.map((e) => e.name).join(", ")
          : e.displays.length > 0
            ? r.intl.string(r.t.R4wpLN)
            : null;
}
