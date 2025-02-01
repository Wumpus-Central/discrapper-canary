e.exports = function (e, t) {
    return !!t && 'object' == typeof t && '[[Enumerable]]' in t && '[[Configurable]]' in t && (e.IsAccessorDescriptor(t) || e.IsDataDescriptor(t));
};
