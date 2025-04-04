var e = n(181794),
    o = n(779688),
    i = n(442119);
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
