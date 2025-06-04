var r = n(287353),
    i = n(621523),
    o = n(127849).String;
e.exports =
    !!Object.getOwnPropertySymbols &&
    !i(function () {
        var e = Symbol('symbol detection');
        return !o(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && r && r < 41);
    });
