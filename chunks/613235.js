var i = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            return e.windows.length > 0
                ? e.windows.map((e) => e.title).join(", ")
                : e.applications.length > 0
                  ? e.applications.map((e) => e.name).join(", ")
                  : e.displays.length > 0
                    ? i.intl.string(i.t.R4wpLN)
                    : null;
        },
    },
);
