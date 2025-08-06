var r = n(169774),
    i = n(727584),
    o = r.isPlatform("Mac OS X"),
    a = {
        isCtrlKeyCommand: function (e) {
            return !!e.ctrlKey && !e.altKey;
        },
        isOptionKeyCommand: function (e) {
            return o && e.altKey;
        },
        usesMacOSHeuristics: function () {
            return o;
        },
        hasCommandModifier: function (e) {
            return o ? !!e.metaKey && !e.altKey : a.isCtrlKeyCommand(e);
        },
        isSoftNewlineEvent: i,
    };
e.exports = a;
