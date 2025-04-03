e.exports = function (e) {
    if (e.preventDefault) return void e.preventDefault();
    e.returnValue = !1;
};
