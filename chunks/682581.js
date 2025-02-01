e.exports = function (e) {
    if (void 0 === e) return e;
    var t = {};
    return '[[Value]]' in e && (t.value = e['[[Value]]']), '[[Writable]]' in e && (t.writable = !!e['[[Writable]]']), '[[Get]]' in e && (t.get = e['[[Get]]']), '[[Set]]' in e && (t.set = e['[[Set]]']), '[[Enumerable]]' in e && (t.enumerable = !!e['[[Enumerable]]']), '[[Configurable]]' in e && (t.configurable = !!e['[[Configurable]]']), t;
};
