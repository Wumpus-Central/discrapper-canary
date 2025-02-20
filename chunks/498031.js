e.exports = function (e) {
    var t = e.idGenerator,
        n = e.stateHandler.getState;
    return {
        get: function (e) {
            var t = n(e);
            return t && void 0 !== t.id ? t.id : null;
        },
        set: function (e) {
            var r = n(e);
            if (!r) throw Error('setId required the element to have a resize detection state.');
            var i = t.generate();
            return (r.id = i), i;
        }
    };
};
