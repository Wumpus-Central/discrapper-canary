var i = n(286233),
    r = n(315016);
e.exports = function () {
    var e = r();
    return (
        i(
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
