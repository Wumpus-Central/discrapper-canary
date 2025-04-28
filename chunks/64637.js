var e = r(507604),
    o = r(621523),
    i = r(809290);
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
