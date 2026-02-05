"use strict";
class e {
    name;
    constructor(e) {
        this.name = e;
    }
    getConsoleArgs(t, n) {
        return [`${e.getDateTimeString()} ${this.name}: ${t}`, ...n];
    }
    log(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        console.log.apply(console, this.getConsoleArgs(e, n));
    }
    info(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        console.info.apply(console, this.getConsoleArgs(e, n));
    }
    warn(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        console.warn.apply(console, this.getConsoleArgs(e, n));
    }
    error(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        console.error.apply(console, this.getConsoleArgs(e, n));
    }
    static getDateTimeString() {
        return new Date().toISOString();
    }
}
