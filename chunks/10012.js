var e = n(447631),
    o = n(821819),
    i = n(535538);
t.exports =
    !e &&
    !o(function () {
        return (
            7 !==
            Object.defineProperty(i('div'), 'a', {
                get: function () {
                    return 7;
                }
            }).a
        );
    });
