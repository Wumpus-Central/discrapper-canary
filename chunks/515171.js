var i = n(286233),
    r = n(673555);
e.exports = function () {
    var e = r();
    return (
        i(
            Array.prototype,
            { map: e },
            {
                map: function () {
                    return Array.prototype.map !== e;
                }
            }
        ),
        e
    );
};
