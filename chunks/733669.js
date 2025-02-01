var r = a(325008),
    n = a(936940);
t.exports =
    r &&
    n(function () {
        return (
            42 !==
            Object.defineProperty(function () {}, 'prototype', {
                value: 42,
                writable: !1
            }).prototype
        );
    });
