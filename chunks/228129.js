var i = r(447631),
    a = r(821819);
e.exports =
    i &&
    a(function () {
        return (
            42 !==
            Object.defineProperty(function () {}, 'prototype', {
                value: 42,
                writable: !1
            }).prototype
        );
    });
