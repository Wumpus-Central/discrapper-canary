var r = n(65183).OrderedMap;
e.exports = {
    createFromArray: function (e) {
        return r(
            e.map(function (e) {
                return [e.getKey(), e];
            }),
        );
    },
};
