var r = n(699367);
e.exports = function (e, t) {
    return r(t) && '[[Enumerable]]' in t && '[[Configurable]]' in t && (e.IsAccessorDescriptor(t) || e.IsDataDescriptor(t));
};
