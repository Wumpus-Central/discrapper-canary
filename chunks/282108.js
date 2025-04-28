var e = r(507604),
    o = r(621523);
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
