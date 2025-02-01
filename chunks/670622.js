var i = n(447631),
    r = n(141603),
    a = Function.prototype,
    s = i && Object.getOwnPropertyDescriptor,
    o = r(a, 'name'),
    l = o && 'something' === function () {}.name,
    u = o && (!i || (i && s(a, 'name').configurable));
e.exports = {
    EXISTS: o,
    PROPER: l,
    CONFIGURABLE: u
};
