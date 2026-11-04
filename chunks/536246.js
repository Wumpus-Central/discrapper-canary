var i = n(487887);
n.d(
    t,
    {},
    {
        b: function (e) {
            return (
                null != e &&
                (!!i._J.has(e.id) ||
                    ("embeddedActivityConfig" in e
                        ? e.embeddedActivityConfig?.displays_advertisements === !0
                        : "embedded_activity_config" in e &&
                          e.embedded_activity_config?.displays_advertisements === !0))
            );
        },
    },
);
