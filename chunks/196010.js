n.d(
    t,
    {},
    {
        t: function (e) {
            return "warn" === e
                ? "warning"
                : ["fatal", "error", "warning", "log", "info", "debug"].includes(e)
                  ? e
                  : "log";
        },
    },
);
