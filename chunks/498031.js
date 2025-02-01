e.exports = function (e) {
    var t = e.idGenerator,
        n = e.stateHandler.getState;
    return {
        get: function (e) {
            var t = n(e);
            return t && void 0 !== t.id ? t.id : null;
        },
        set: function (e) {
            var i = n(e);
            if (!i) throw Error('setId required the element to have a resize detection state.');
            var r = t.generate();
            return (i.id = r), r;
        }
    };
};
