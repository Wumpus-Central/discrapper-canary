var r = n(507604),
    i = n(621523),
    o = n(809290);
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
