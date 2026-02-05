"use strict";
n.d(t, { Cy: () => o, H9: () => a, Ob: () => r, cn: () => s, sb: () => i });
var r = (function (e) {
        return (
            (e[(e.OFFERED = 0)] = "OFFERED"),
            (e[(e.ACCEPTED = 1)] = "ACCEPTED"),
            (e[(e.RUNNING = 2)] = "RUNNING"),
            (e[(e.COMPLETED = 3)] = "COMPLETED"),
            (e[(e.FAILED = 4)] = "FAILED"),
            (e[(e.CANCELLED = 5)] = "CANCELLED"),
            e
        );
    })({}),
    i = (function (e) {
        return (e[(e.MILD = 0)] = "MILD"), (e[(e.SPICY = 1)] = "SPICY"), (e[(e.UNHINGED = 2)] = "UNHINGED"), e;
    })({}),
    a = (function (e) {
        return (
            (e[(e.TIMED = 0)] = "TIMED"),
            (e[(e.GAME = 1)] = "GAME"),
            (e[(e.VOCAL = 2)] = "VOCAL"),
            (e[(e.STREAM = 3)] = "STREAM"),
            (e[(e.VIDEO = 4)] = "VIDEO"),
            (e[(e.CHAT = 5)] = "CHAT"),
            e
        );
    })({}),
    s = (function (e) {
        return (e[(e.OFFER = 0)] = "OFFER"), (e[(e.STATE = 1)] = "STATE"), (e[(e.COMMAND = 2)] = "COMMAND"), e;
    })({}),
    o = (function (e) {
        return (
            (e[(e.COMPLETE_REQUESTED = 0)] = "COMPLETE_REQUESTED"),
            (e[(e.CANCEL_REQUESTED = 1)] = "CANCEL_REQUESTED"),
            e
        );
    })({});
