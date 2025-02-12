var r = a(325008),
    n = a(936940),
    _ = a(722063);
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
