e.exports = function (e) {
    e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
};
