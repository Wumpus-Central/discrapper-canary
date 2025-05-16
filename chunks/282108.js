var r = n(507604),
    i = n(621523);
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
