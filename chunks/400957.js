var r = a(106295),
    n = a(936940),
    _ = a(161581).String;
t.exports =
    !!Object.getOwnPropertySymbols &&
    !n(function () {
        var t = Symbol('symbol detection');
        return !_(t) || !(Object(t) instanceof Symbol) || (!Symbol.sham && r && r < 41);
    });
