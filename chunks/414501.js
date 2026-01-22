var r = n(116740).OrderedMap;
e.exports = {
    createFromArray: function (e) {
        return r(
            e.map(function (e) {
                return [e.getKey(), e];
            }),
        );
    },
};
