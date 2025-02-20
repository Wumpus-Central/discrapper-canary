var r = n(447631),
    i = n(821819),
    o = n(535538);
e.exports =
    !r &&
    !i(function () {
        return (
            7 !==
            Object.defineProperty(o('div'), 'a', {
                get: function () {
                    return 7;
                }
            }).a
        );
    });
