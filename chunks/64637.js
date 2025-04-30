var r = a(507604),
    n = a(621523),
    _ = a(809290);
t.exports =
    !r &&
    !n(function () {
        return (
            7 !==
            Object.defineProperty(_('div'), 'a', {
                get: function () {
                    return 7;
                }
            }).a
        );
    });
