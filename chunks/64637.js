var r = n(507604),
    i = n(621523),
    a = n(809290);
e.exports =
    !r &&
    !i(function () {
        return (
            7 !==
            Object.defineProperty(a('div'), 'a', {
                get: function () {
                    return 7;
                }
            }).a
        );
    });
