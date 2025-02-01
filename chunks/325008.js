var r = a(936940);
t.exports = !r(function () {
    return (
        7 !==
        Object.defineProperty({}, 1, {
            get: function () {
                return 7;
            }
        })[1]
    );
});
