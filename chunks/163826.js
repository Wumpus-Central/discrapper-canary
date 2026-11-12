var i = n(582128),
    l = n(792996);
n.d(
    t,
    {},
    {
        M: function (e, t) {
            let n = t.trimStart().toLowerCase();
            return e
                .map((e) => ({
                    ...e,
                    permissions: e.permissions.filter(
                        (e) =>
                            !!e.title.toLowerCase().includes(n) ||
                            ("function" == typeof e.description
                                ? l.intl.formatToPlainString(e.description, {})
                                : (function e(t) {
                                      return i.isValidElement(t)
                                          ? e(t.props.children)
                                          : Array.isArray(t)
                                            ? t.map(e).join("")
                                            : "string" == typeof t || "number" == typeof t
                                              ? String(t)
                                              : "";
                                  })(e.description)
                            )
                                .toLowerCase()
                                .includes(n),
                    ),
                }))
                .filter((e) => e.permissions.length > 0);
        },
    },
);
