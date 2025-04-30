var r = a(507604),
    n = a(621523);
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
