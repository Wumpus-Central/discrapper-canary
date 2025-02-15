var r = a(325008),
    n = a(740362),
    _ = Function.prototype,
    o = r && Object.getOwnPropertyDescriptor,
    i = n(_, 'name'),
    c = i && (!r || (r && o(_, 'name').configurable));
t.exports = {
    EXISTS: i,
    PROPER: i && 'something' === function () {}.name,
    CONFIGURABLE: c
};
