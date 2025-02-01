var i = n(447631),
    r = n(821819);
e.exports =
    i &&
    r(function () {
        return (
            42 !==
            Object.defineProperty(function () {}, 'prototype', {
                value: 42,
                writable: !1
            }).prototype
        );
    });
