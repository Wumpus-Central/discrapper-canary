var e = n(181794),
    o = n(779688);
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
