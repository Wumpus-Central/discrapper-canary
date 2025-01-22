var i = r(447631),
    a = r(141603),
    o = Function.prototype,
    s = i && Object.getOwnPropertyDescriptor,
    l = a(o, 'name'),
    u = l && 'something' === function () {}.name,
    c = l && (!i || (i && s(o, 'name').configurable));
e.exports = {
    EXISTS: l,
    PROPER: u,
    CONFIGURABLE: c
};
