var r = n(447631),
    i = n(821819);
e.exports =
    r &&
    i(function () {
        return (
            42 !==
            Object.defineProperty(function () {}, 'prototype', {
                value: 42,
                writable: !1
            }).prototype
        );
    });
