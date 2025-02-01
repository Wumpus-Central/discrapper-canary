var r = a(325008),
    n = a(740362),
    o = Function.prototype,
    _ = r && Object.getOwnPropertyDescriptor,
    i = n(o, 'name'),
    c = i && (!r || (r && _(o, 'name').configurable));
t.exports = {
    EXISTS: i,
    PROPER: i && 'something' === function () {}.name,
    CONFIGURABLE: c
};
