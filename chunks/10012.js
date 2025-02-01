var i = n(447631),
    r = n(821819),
    a = n(535538);
e.exports =
    !i &&
    !r(function () {
        return (
            7 !==
            Object.defineProperty(a('div'), 'a', {
                get: function () {
                    return 7;
                }
            }).a
        );
    });
