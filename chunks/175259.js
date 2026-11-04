n.d(
    t,
    {},
    {
        c: function () {
            return (
                ((Array.isArray(navigator.languages) ? navigator.languages[0] : null) ||
                    navigator.language ||
                    navigator.browserLanguage ||
                    navigator.userLanguage) ??
                ""
            );
        },
    },
);
