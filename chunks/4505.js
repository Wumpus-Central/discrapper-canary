var n = e(414123),
    o = e(486816);
t.exports =
    n &&
    o(function () {
        return (
            42 !==
            Object.defineProperty(function () {}, "prototype", {
                value: 42,
                writable: !1,
            }).prototype
        );
    });
