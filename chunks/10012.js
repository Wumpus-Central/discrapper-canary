var i = r(447631),
    a = r(821819),
    o = r(535538);
e.exports =
    !i &&
    !a(function () {
        return (
            7 !==
            Object.defineProperty(o('div'), 'a', {
                get: function () {
                    return 7;
                }
            }).a
        );
    });
