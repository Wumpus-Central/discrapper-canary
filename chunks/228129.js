var e = n(447631),
    o = n(821819);
t.exports =
    e &&
    o(function () {
        return (
            42 !==
            Object.defineProperty(function () {}, 'prototype', {
                value: 42,
                writable: !1
            }).prototype
        );
    });
