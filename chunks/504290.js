var e = r(287353),
    o = r(621523),
    i = r(127849).String;
t.exports =
    !!Object.getOwnPropertySymbols &&
    !o(function () {
        var t = Symbol('symbol detection');
        return !i(t) || !(Object(t) instanceof Symbol) || (!Symbol.sham && e && e < 41);
    });
