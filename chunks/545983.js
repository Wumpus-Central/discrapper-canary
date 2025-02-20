var r = n(286233),
    i = n(315016);
e.exports = function () {
    var e = i();
    return (
        r(
            String.prototype,
            { trim: e },
            {
                trim: function () {
                    return String.prototype.trim !== e;
                }
            }
        ),
        e
    );
};
