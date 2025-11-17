var r = n(169774),
    i = n(816731),
    a = r.isPlatform("Mac OS X"),
    o = {
        isCtrlKeyCommand: function (e) {
            return !!e.ctrlKey && !e.altKey;
        },
        isOptionKeyCommand: function (e) {
            return a && e.altKey;
        },
        usesMacOSHeuristics: function () {
            return a;
        },
        hasCommandModifier: function (e) {
            return a ? !!e.metaKey && !e.altKey : o.isCtrlKeyCommand(e);
        },
        isSoftNewlineEvent: i,
    };
e.exports = o;
