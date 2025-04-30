var r = a(287353),
    n = a(621523),
    _ = a(127849).String;
t.exports =
    !!Object.getOwnPropertySymbols &&
    !n(function () {
        var t = Symbol('symbol detection');
        return !_(t) || !(Object(t) instanceof Symbol) || (!Symbol.sham && r && r < 41);
    });
