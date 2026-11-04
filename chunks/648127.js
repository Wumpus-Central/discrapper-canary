var l = n(191850),
    r = n(792996);
n.d(
    t,
    {},
    {
        i: function (e) {
            let t = e.id
                .replace(/([a-z\d])([A-Z])/g, "$1 $2")
                .replace(/[-_\s]+/g, " ")
                .trim()
                .toLowerCase();
            return "" === t || "default" === t
                ? r.intl.string(l.default.gHsgGe)
                : t.charAt(0).toUpperCase() + t.slice(1);
        },
    },
);
